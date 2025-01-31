import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getHadith} from "$lib/sources/hadith/hadith.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params & path params and set defaults or return error if applicable
        const { hadithSlug, sectionNum , hadithNum, bookSlug } = params
        const lang = url.searchParams.get('lang')



        // fetch necessary data
        const hadith = await getHadith(bookSlug, sectionNum, hadithNum, lang)

        // run checks or additional actions

        // return error conditionally
        if (!hadith) return json({
            error: true,
            message: "Hadith Book Section not found"
        }, {
            status: 404
        })


        // return success
        return json({
            success: true,
            message: "Hadith book section retrieved successfully",
            data: {
                hadith
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