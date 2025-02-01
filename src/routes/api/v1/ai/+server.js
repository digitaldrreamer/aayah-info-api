// src/routes/api/upload/process/+server.js
import gemini from "$lib/gemini.server.js";
import Gemini from "gemini-ai";
import OpenAI from "openai";
import { OPENAI_API_KEY } from "$env/static/private";
import logger from '$lib/logger.js';
import * as Sentry from "@sentry/sveltekit";
import { json } from "@sveltejs/kit";

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY
});

// Schema definition for both Gemini and OpenAI
const transcriptionSchema = {
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
};


const openAiSchema = {
    type: "object",
    properties: {
        transcription: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    surah: {
                        type: "string",
                        description: "Name of the surah in English"
                    },
                    verse: {
                        type: "string",
                        description: "Verse number or range (e.g., '1-3')"
                    },
                    confidence: {
                        type: "number",
                        description: "Confidence score from 0 to 1"
                    }
                },
                required: ["surah", "verse", "confidence"]
            }
        }
    },
    required: ["transcription"]
};

export async function POST({ request }) {
    try {
        logger.start('Processing Quran audio file');

        const formData = await request.formData();
        const audioFile = formData.get('audio');

        if (!audioFile) {
            logger.error('No audio file provided', { status: 400 });
            return json({
                status: 400,
                body: { error: 'No audio file provided' }
            });
        }

        const fileType = audioFile.type;
        const validAudioTypes = ['audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/mp4'];

        if (!validAudioTypes.includes(fileType)) {
            logger.error('Invalid file type', { fileType, status: 400 });
            return json({
                status: 400,
                body: { error: `Invalid file type. Supported types: ${validAudioTypes.join(', ')}` }
            });
        }

        const fileSize = audioFile.size;
        const maxSize = 15 * 1024 * 1024;

        if (fileSize > maxSize) {
            logger.error('File too large', { fileSize, maxSize, status: 400 });
            return json({
                status: 400,
                body: { error: 'File size exceeds 15MB limit' }
            });
        }

        let audioBuffer;
        try {
            audioBuffer = Buffer.from(await audioFile.arrayBuffer());
            logger.debug('Audio buffer created', {
                length: audioBuffer.length,
                fileType,
                fileSize: `${(fileSize / 1024 / 1024).toFixed(2)}MB`
            });
        } catch (bufferError) {
            logger.error('Error creating audio buffer', bufferError);
            return json({
                status: 500,
                body: { error: 'Failed to process audio file' }
            });
        }

        try {
            // Try Gemini first
            const geminiResponse  = await gemini.ask(
                "Transcribe this Quranic recitation, identifying the specific verses being recited.",
                {
                    format: Gemini.JSON,
                    temperature: 0.3,
                    topP: 0.97,
                    model: 'gemini-1.5-pro',
                    maxOutputTokens: 4096,
                    systemInstruction: `You are a Quran transcription specialist. Your task is to:
1. Listen carefully to the audio and identify Quranic verses
2. Return the exact surah name and verse numbers
3. Handle different recitation styles and speeds
4. Be precise with verse boundaries
If multiple verses are detected, return all of them in a separate object in the array response.`,
                    jsonSchema: transcriptionSchema,
                    data: [{
                        type: fileType,
                        buffer: audioBuffer
                    }],
                    safetySettings: {
                        HARASSMENT: 'block_none',
                        HATE_SPEECH: 'block_none',
                        SEXUALLY_EXPLICIT: 'block_high',
                        DANGEROUS_CONTENT: 'block_medium'
                    }
                }
            );

            // Extract the actual transcription data from Gemini's response
            const transcription = geminiResponse.candidates?.[0]?.content.parts ?? [];

            logger.success('Gemini transcription successful', transcription);

            return json({
                status: 200,
                body: {
                    message: 'Quran recitation processed successfully',
                    transcription,
                    provider: 'gemini'
                }
            });

        } catch (geminiError) {
            // Log Gemini error and try OpenAI as fallback
            Sentry.captureException(geminiError);
            logger.warn('Gemini transcription failed, attempting OpenAI fallback', { error: geminiError.message });

            const completion = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content: `You are a Quran transcription specialist. Analyze the provided audio file and identify the Quranic verses being recited. Return the results in a structured format with surah name, verse numbers, and confidence scores.`
                    },
                    {
                        role: "user",
                        content: "Process this Quranic recitation audio file."
                    }
                ],
                response_format: {
                    type: "json_schema",
                    json_schema: {
                        "name": "transcription_schema",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "transcription": {
                                    "type": "array",
                                    "description": "List of transcriptions including surah, verse, and confidence.",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "surah": {
                                                "type": "string",
                                                "description": "Name of the surah in English."
                                            },
                                            "verse": {
                                                "type": "string",
                                                "description": "Verse number or range (e.g., '1-3')."
                                            },
                                            "confidence": {
                                                "type": "number",
                                                "description": "Confidence score from 0 to 1."
                                            }
                                        },
                                        "required": [
                                            "surah",
                                            "verse",
                                            "confidence"
                                        ],
                                        "additionalProperties": false
                                    }
                                }
                            },
                            "required": [
                                "transcription"
                            ],
                            "additionalProperties": false
                        },
                        "strict": true
                    }
                },
                temperature: 0.3
            });
            try {
                const openAiTranscription = completion.choices[0].message.content;
                logger.success('OpenAI transcription successful', openAiTranscription);

                return json({
                    status: 200,
                    body: {
                        message: 'Quran recitation processed successfully',
                        transcription: openAiTranscription.transcription,
                        provider: 'openai'
                    }
                });
            } catch (openAiError) {
                Sentry.captureException(openAiError);
                throw new Error('Both Gemini and OpenAI transcription failed');
            }
        }
    } catch (error) {
        logger.error('Unexpected error in processing endpoint', {
            error: error.message,
            stack: error.stack
        });
        Sentry.captureException(error);
        return json({
            status: 500,
            body: { error: 'An unexpected error occurred while processing the recitation' }
        });
    } finally {
        logger.end('Quran audio processing completed');
    }
}