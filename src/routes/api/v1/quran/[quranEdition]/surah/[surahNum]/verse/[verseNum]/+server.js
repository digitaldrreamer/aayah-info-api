import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getChapter, getVerse} from "$lib/sources/quran/quran.js";
import {getVerseAudio} from "$lib/sources/everyayah/everyayah.js";
import {getVerseTafsir} from "$lib/sources/tafsir/tafsir.js";
import logger from "$lib/logger.js";

export const GET = async ({ params, url }) => {
    try {
        // check query params and set defaults or return error if applicable
        const audio = url.searchParams.get('audio') ?? false
        const tafsir = url.searchParams.get('tafsir') ?? false
        const { quranEdition, surahNum, verseNum } = params;




        // fetch necessary data
        const verse = await getVerse(quranEdition, surahNum, verseNum)

        let audioUrl = null
        if (audio) audioUrl = getVerseAudio(surahNum, verseNum, audio)

        let verseTafsir = null
        if (tafsir) verseTafsir = (await getVerseTafsir(tafsir, surahNum, verseNum)).text

        // return error conditionally


        // return success
        return json({
            success: true,
            message: "Verse retrieved successfully",
            data: {
                verse,
                tafsir: verseTafsir,
                audioUrl
            }
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
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