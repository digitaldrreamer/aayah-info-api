import { AssemblyAI } from 'assemblyai';
import gemini from "$lib/gemini.server.js";
import Gemini from "gemini-ai";
import OpenAI from "openai";
import {
    OPENAI_API_KEY,
    ASSEMBLY_AI_KEY,
    BLOB_READ_WRITE_TOKEN,
    GLADIA_API_KEY
} from "$env/static/private";
import logger from '$lib/logger.js';
import * as Sentry from "@sentry/sveltekit";
import { json } from "@sveltejs/kit";
import { put } from "@vercel/blob";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

const assemblyClient = new AssemblyAI({
    apiKey: ASSEMBLY_AI_KEY
});

// Schema definition for verse identification
const verseIdentificationSchema = {
    type: Gemini.SchemaType.OBJECT,
    required: ['raw', 'results'],
    properties: {
        raw: {
            type: Gemini.SchemaType.STRING,
            description: "Raw transcription from AssemblyAI"
        },
        results: {
            type: Gemini.SchemaType.ARRAY,
            items: {
                type: Gemini.SchemaType.OBJECT,
                required: ['surah', 'verse', 'confidence'],
                properties: {
                    surah: {
                        type: Gemini.SchemaType.STRING,
                        description: "Name of the surah in English"
                    },
                    verse: {
                        type: Gemini.SchemaType.STRING,
                        description: "Verse number or range (e.g., '1-3')"
                    },
                    confidence: {
                        type: Gemini.SchemaType.NUMBER,
                        description: "Confidence score from 0 to 1"
                    }
                }
            }
        }
    }
};

async function getGladiaTranscription(url) {
    const submitResponse = await fetch('https://api.gladia.io/v2/pre-recorded', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-gladia-key': GLADIA_API_KEY
        },
        body: JSON.stringify({
            audio_url: url,
            detect_language: true,
            language: 'ar' // Explicitly specify Arabic for Quranic recitations

        })
    });

    if (!submitResponse.ok) {
        throw new Error(`Gladia submission failed: ${await submitResponse.text()}`);
    }

    const { id: transcriptionId } = await submitResponse.json();
    let retries = 0;
    const maxRetries = 15; // 15 retries * 2s = 30s total wait time
    const pollInterval = 2000;

    while (retries < maxRetries) {
        const statusResponse = await fetch(`https://api.gladia.io/v2/pre-recorded/${transcriptionId}`, {
            headers: { 'x-gladia-key': GLADIA_API_KEY }
        });

        if (!statusResponse.ok) {
            throw new Error(`Gladia status check failed: ${await statusResponse.text()}`);
        }

        const data = await statusResponse.json();

        if (data.status === 'done') {
            return data.result.transcription.full_transcript;
        }
        if (data.status === 'error') {
            throw new Error('Gladia transcription error');
        }

        await new Promise(resolve => setTimeout(resolve, pollInterval));
        retries++;
    }

    throw new Error('Gladia transcription timed out');
}

export async function POST({ request }) {
    try {
        logger.info('Processing Quran audio file');

        const formData = await request.formData();
        const audioFile = formData.get('audio');

        if (!audioFile) {
            logger.error('No audio file provided');
            return json({ status: 400, error: 'No audio file provided' });
        }

        const validAudioTypes = ['audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/mp4'];

        if (!validAudioTypes.includes(audioFile.type)) {
            logger.error('Invalid file type', { fileType: audioFile.type });
            return json({ status: 400, error: `Invalid file type. Supported types: ${validAudioTypes.join(', ')}` });
        }

        if (audioFile.size > 15 * 1024 * 1024) {
            logger.error('File too large', { fileSize: audioFile.size });
            return json({ status: 400, error: 'File size exceeds 15MB limit' });
        }

        // Upload audio to Vercel Blob
        const audioBuffer = Buffer.from(await audioFile.arrayBuffer());
        const { url } = await put(`audio/${Date.now()}.wav`, audioBuffer, {
            access: 'public',
            token: BLOB_READ_WRITE_TOKEN
        });

        let rawTranscription;

        try {
            // First attempt: Gladia.io
            rawTranscription = await getGladiaTranscription(url);
            logger.debug('Gladia transcription completed', { transcription: rawTranscription });
        } catch (gladiaError) {
            logger.error("Gladia Transcription failed", gladiaError)
            logger.warn('Gladia transcription failed, falling back to AssemblyAI');
            Sentry.captureException(gladiaError);

            // Fallback to AssemblyAI
            const transcriptionResult = await assemblyClient.transcripts.transcribe({
                audio_url: url
            });
            rawTranscription = transcriptionResult.text;
            logger.debug('AssemblyAI transcription completed', { transcription: rawTranscription });
        }

        let identification;

        try {
            // Try Gemini first for verse identification
            const geminiResponse = await gemini.ask(
                "Analyze this transcription and identify any Quranic verses present.",
                {
                    format: Gemini.JSON,
                    temperature: 0.3,
                    topP: 0.97,
                    model: 'gemini-1.5-pro',
                    maxOutputTokens: 4096,
                    systemInstruction: `You are a Quran verse identification specialist. Your task is to:
1. Analyze the provided transcription
2. Identify any Quranic verses present
3. Return the exact surah name and verse numbers
4. Include confidence scores for each identification
If multiple verses are detected, include all of them in the results array.`,
                    jsonSchema: verseIdentificationSchema,
                    text: rawTranscription
                }
            );

            // Attempt to parse the candidate response
            let candidateContent = geminiResponse.candidates?.[0]?.content;
            if (!candidateContent) {
                identification = { raw: rawTranscription, results: [] };
            } else if (typeof candidateContent === 'string') {
                try {
                    identification = JSON.parse(candidateContent);
                } catch (parseError) {
                    // If candidateContent has a parts property, try parsing that
                    if (candidateContent.parts && candidateContent.parts[0]?.text) {
                        try {
                            identification = JSON.parse(candidateContent.parts[0].text);
                        } catch (innerParseError) {
                            identification = { raw: rawTranscription, results: [] };
                        }
                    } else {
                        identification = { raw: rawTranscription, results: [] };
                    }
                }
            } else if (candidateContent.parts && candidateContent.parts[0]?.text) {
                try {
                    identification = JSON.parse(candidateContent.parts[0].text);
                } catch (innerParseError) {
                    identification = { raw: rawTranscription, results: [] };
                }
            } else {
                identification = candidateContent;
            }

            logger.info('Gemini verse identification successful', identification);
        } catch (geminiError) {
            Sentry.captureException(geminiError);
            logger.warn('Gemini identification failed, attempting OpenAI fallback');

            try {
                const openaiResponse = await openai.chat.completions.create({
                    model: "gpt-4",
                    messages: [
                        {
                            role: "system",
                            content: "You are an AI specialized in identifying Quranic verses from transcriptions."
                        },
                        {
                            role: "user",
                            content: `Analyze the following text and identify Quranic verses:\n\n${rawTranscription}`
                        }
                    ],
                    response_format: "json",
                    max_tokens: 2048,
                    temperature: 0.3
                });

                let openaiContent = openaiResponse.choices?.[0]?.message?.content;
                if (typeof openaiContent === 'string') {
                    try {
                        identification = JSON.parse(openaiContent);
                    } catch (openaiParseError) {
                        identification = { raw: rawTranscription, results: [] };
                    }
                } else {
                    identification = { raw: rawTranscription, results: [] };
                }

                logger.info('OpenAI verse identification successful', identification);
            } catch (openaiError) {
                Sentry.captureException(openaiError);
                logger.error('OpenAI identification failed, returning raw transcription');
                identification = { raw: rawTranscription, results: [] };
            }
        }

        // Ensure identification.results exists as an array
        if (!identification || !Array.isArray(identification.results)) {
            identification.results = [];
        }

        const provider = identification.results.length > 0 ? 'gemini' : 'openai';

        return json({
            status: 200,
            message: 'Quran recitation processed successfully',
            ...identification,
            provider
        });
    } catch (error) {
        Sentry.captureException(error);
        logger.error('Error processing request', error);
        return json({ status: 500, error: 'Internal server error' });
    } finally {
        logger.info('Quran audio processing completed');
    }
}
