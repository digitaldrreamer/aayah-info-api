import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getHadith} from "$lib/sources/hadith/hadith.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params & path params and set defaults or return error if applicable
        const { hadithSlug, sectionNum , hadithNum, bookSlug } = params
        const lang = url.searchParams.get('lang')

        const cache = await redis.get(`hadith:${bookSlug}:${sectionNum}:${hadithNum}`)
        if (cache) {
            return json({
                success: true,
                message: "Hadith book section retrieved successfully",
                data: {
                    hadith: JSON.parse(cache)
                }
            })
        }



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

        await redis.set(`hadith:${bookSlug}:${sectionNum}:${hadithNum}`, JSON.stringify(hadith))


        // return success
        return json({
            success: true,
            message: "Hadith book section retrieved successfully",
            data: {
                hadith
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