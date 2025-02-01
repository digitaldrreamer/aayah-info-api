import { json } from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit';
import { getJuz } from "$lib/sources/quran/quran.js";
import { getVerseAudio } from "$lib/sources/everyayah/everyayah.js";
import { getVerseTafsir } from "$lib/sources/tafsir/tafsir.js";
import logger from "$lib/logger.js";

export const GET = async ({ url, params }) => {
    try {
        // Validate and extract parameters
        const { quranEdition, juzNum } = params;
        const audio = url.searchParams.get('audio') ?? false;
        const tafsir = url.searchParams.get('tafsir') ?? false;

        // Validate juz number
        if (!juzNum || isNaN(juzNum)) {
            return json({
                success: false,
                message: 'Juz Number is compulsory and must be numeric'
            }, { status: 400 });
        }

        // Fetch juz data
        const juz = await getJuz(quranEdition, juzNum);

        // Validate juz data structure
        if (!juz?.juzs || !Array.isArray(juz.juzs)) {
            throw new Error('Invalid juz data structure');
        }

        // Process verses with audio and tafsir
        const processedVerses = await Promise.all(
            juz.juzs.map(async (jz) => {
                const verseTafsir = tafsir
                    ? await getVerseTafsir(tafsir, jz.chapter, jz.verse)
                    : null;

                if (tafsir) {
                    logger.debug('verseTafsir', verseTafsir);
                }

                return {
                    ...jz,
                    audioUrl: audio ? getVerseAudio(jz.chapter, jz.verse, audio) : null,
                    tafsir: verseTafsir
                };
            })
        );

        // Return success response
        return json({
            success: true,
            message: "Juz Retrieved successfully",
            data: {
                juz: {
                    label: `Juz ${juzNum}`,
                    id: `juz:${juzNum}`,
                    verses: processedVerses
                }
            }
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });

    } catch (error) {
        // Log and report error
        console.error('Juz processing error:', error);
        Sentry.captureException(error);

        // Return error response
        return json({
            success: false,
            message: `Error: ${error?.message}`
        }, { status: 500 });
    }
};