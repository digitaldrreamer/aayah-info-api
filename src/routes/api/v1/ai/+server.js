// src/routes/api/upload/process/+server.js
import gemini from "$lib/gemini.server.js";
import Gemini from "gemini-ai";
import logger from '$lib/logger.js';
import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    try {
        logger.start('Processing file in processing endpoint');

        const formData = await request.formData();
        const audioFile = formData.get('audio');
        if (!audioFile) {
            logger.error('No audio file provided to processing endpoint', { status: 400 });
            return json({
                status: 400,
                body: { error: 'No audio file provided' }
            });
        }

        // Convert the file to a Buffer
        const audioBuffer = Buffer.from(await audioFile.arrayBuffer());
        logger.debug('Audio buffer created', { length: audioBuffer.length });

        // Process with Gemini
        const transcription = await gemini.ask(
            "List 5 popular cookie recipes. Give them as an array of objects, each with a recipe_name field.",
            {
                systemInstruction: `You will receive an audio file which should be a Quran recitation. Return the most likely of the verses being recited. If there are multiple verses in the audio, return them all in the specified response format.`,
                jsonSchema: {
                    type: Gemini.SchemaType.ARRAY,
                    items: {
                        type: Gemini.SchemaType.OBJECT,
                        properties: {
                            surah: {
                                type: Gemini.SchemaType.STRING,
                            },
                            verse: {
                                type: Gemini.SchemaType.STRING,
                            },
                        },
                    },
                },
                data: [audioBuffer],
            }
        );

        logger.success('Processing successful', transcription);

        return json({
            status: 200,
            body: {
                message: 'File processed successfully',
                transcription
            }
        });
    } catch (error) {
        logger.error('Error in processing endpoint', error);
        return json({
            status: 500,
            body: { error: 'Error processing file' }
        });
    } finally {
        logger.end('Processing completed');
    }
}