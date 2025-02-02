import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getHadithBySection} from "$lib/sources/hadith/hadith.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params and set defaults or return error if applicable
        const { bookSlug, sectionNum } = params

        const cache = await redis.get(`hadith:${bookSlug}:${sectionNum}`)
        if (cache) {
            return json({
                success: true,
                message: "Hadith book section retrieved successfully",
                data: {
                    section: JSON.parse(cache)
                }
            })


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

            await redis.set(`hadith:${bookSlug}:${sectionNum}`, JSON.stringify(hadithSectionInfo))


        // return success
        return json({
            success: true,
            message: "Hadith book section retrieved successfully",
            data: {
                section: hadithSectionInfo
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