import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getPage} from "$lib/sources/quran/quran.js";
import {getPageAudio, getVerseAudio} from "$lib/sources/everyayah/everyayah.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params and set defaults or return error if applicable
        const { quranEdition, pageNum } = params
        const audio = url.searchParams.get('audio') ?? false

        // fetch necessary data
        const page = await getPage(quranEdition, pageNum)
        let audioUrl = null;
        if (audio) audioUrl = getPageAudio(pageNum, audio)

        // run checks or additional actions

        // return error conditionally


        // return success
        return json({
            success: true,
            message: "Quran Page retrieved successfully",
            data: {
                       verses:[ ...page.pages.map(verse => {
                            return {
                                ...verse,
                                audioUrl: audio ? getVerseAudio(verse.chapter, verse.verse, audio) : null
                            }
                        })],
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