import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getHadithBySection} from "$lib/sources/hadith/hadith.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params and set defaults or return error if applicable
        const { bookSlug, sectionNum } = params


        // fetch necessary data
        const hadithSectionInfo = getHadithBySection(bookSlug, sectionNum)
        console.log(hadithSectionInfo)
        // run checks or additional actions

        // return error conditionally
        if (!hadithSectionInfo) return json({
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
                section: hadithSectionInfo
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