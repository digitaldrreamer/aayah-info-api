// src/routes/api/upload.js
import gemini from "$lib/gemini.server.js";
import Gemini from "gemini-ai";
import logger from '$lib/logger.js'

export async function POST({ request }) {
    try {
        logger.start('Processing file upload'); // Log start of the process

        const formData = await request.formData();
        logger.debug('Form data received', formData);

        // Get the 'audio' file from the FormData
        const audioFile = formData.get('audio');
        if (!audioFile) {
            logger.error('No audio file provided', { status: 400 });
            return {
                status: 400,
                body: { error: 'No audio file provided' },
            };
        }

        logger.info('Audio file found, converting to buffer');

        // Convert the file to a Buffer
        const audioBuffer = Buffer.from(await audioFile.arrayBuffer());
        logger.debug('Audio buffer created', { length: audioBuffer.length });

        // Now pass the audio file to Gemini for transcription
        const transcribe = async () => {
            logger.info('Sending audio for transcription to Gemini');
            try {
                return await gemini.ask(
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
                        data: [audioBuffer], // Pass the audio buffer here
                    }
                );
            } catch (err) {
                logger.error('Error during transcription', err);
                throw new Error('Transcription failed');
            }
        };

        // Call the transcription function
        const transcription = await transcribe();
        logger.success('Transcription successful', transcription);

        return {
            status: 200,
            body: { message: 'File uploaded and processed successfully', transcription },
        };
    } catch (error) {
        logger.error('Error uploading file', error); // Log the error
        return {
            status: 500,
            body: { error: 'Error uploading file' },
        };
    } finally {
        logger.end('File upload process completed'); // Log the end of the process
    }
}
