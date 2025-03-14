import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getPage} from "$lib/sources/quran/quran.js";
import {getPageAudio, getVerseAudio} from "$lib/sources/everyayah/everyayah.js";
import {getVerseTafsir} from "$lib/sources/tafsir/tafsir.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params and set defaults or return error if applicable
        const { quranEdition, pageNum } = params
        const audio = url.searchParams.get('audio') ?? false
        const tafsir = url.searchParams.get('tafsir') ?? false

        const cache = await redis.get(`page:${quranEdition}:${pageNum}`)
        if (cache) {
            return json({
                success: true,
                message: "Quran Page retrieved successfully",
                data: {
                    verses: JSON.parse(cache)
                }
            })
        }

        // fetch necessary data
        const page = await getPage(quranEdition, pageNum)
        let audioUrl = null;
        if (audio) audioUrl = getPageAudio(pageNum, audio)

        // Process verses with Promise.all to handle async tafsir fetching
        const processedVerses = await Promise.all(
            page.pages.map(async verse => {
                const verseTafsir = tafsir
                    ? await getVerseTafsir(tafsir, verse.chapter, verse.verse)
                    : null;

                return {
                    ...verse,
                    audioUrl: audio ? getVerseAudio(verse.chapter, verse.verse, audio) : null,
                    tafsir: verseTafsir?.text || null
                };
            })
        );

        await redis.set(`page:${quranEdition}:${pageNum}`, JSON.stringify(processedVerses))

        // return success
        return json({
            success: true,
            message: "Quran Page retrieved successfully",
            data: {
                verses: processedVerses,
                label: "Page " + pageNum,
                id: "page:" + pageNum,
                audioUrl
            }
        })
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