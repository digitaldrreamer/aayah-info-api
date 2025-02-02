import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getChapter} from "$lib/sources/quran/quran.js";
import {getVerseAudio} from "$lib/sources/everyayah/everyayah.js";
import {getVerseTafsir} from "$lib/sources/tafsir/tafsir.js";
import logger from "$lib/logger.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ params, url }) => {
    try {
        // check query params and set defaults or return error if applicable
        const audio = url.searchParams.get('audio') ?? false
        const tafsir = url.searchParams.get('tafsir') ?? false
        const { quranEdition, surahNum } = params;




        // fetch necessary data
        const surah = await getChapter(quranEdition, surahNum)
        logger.debug('Surah Data', surah)
        const handleSurahResponse = async () => {
            try {
                // Validate surah data
                if (!surah?.chapter || !Array.isArray(surah.chapter)) {
                    throw new Error('Invalid surah data structure');
                }

                const cache = await redis.get(`surah:${quranEdition}:${surahNum}`)
                if (cache) {
                    return json({
                        success: true,
                        message: "Surah Retrieved successfully",
                        data: {
                            verses: JSON.parse(cache)
                        }
                    })
                }

                // Process verses with Promise.all
                const processedVerses = await Promise.all(
                    surah.chapter.map(async (verse) => {
                        const verseTafsir = tafsir
                            ? await getVerseTafsir(tafsir, verse.chapter, verse.verse)
                            : null;

                        return {
                            ...verse,
                            audioUrl: audio ? getVerseAudio(verse.chapter, verse.verse, audio) : null,
                            tafsir: verseTafsir.text
                        };
                    })
                );

                await redis.set(`surah:${quranEdition}:${surahNum}`, JSON.stringify(processedVerses))

                return json({
                    success: true,
                    message: "Surah Retrieved successfully",
                    data: {
                        verses: processedVerses
                    }
                });
            } catch (error) {
                console.error('Surah processing error:', error);

                return json({
                    success: false,
                    message: "Error processing surah data",
                    error: error.message
                }, { status: 500 });
            }
        };        // run checks or additional actions

        // return error conditionally


        // return success
        return await handleSurahResponse()
    } catch (e) {
        // report to sentry
        Sentry.captureException(e)

        // return error 500
        return json({
            status: false,
            message: "Error: " + e?.message
        })

    }
}