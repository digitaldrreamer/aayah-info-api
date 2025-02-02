import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {quranEditions} from "$lib/sources/quran/quran.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url }) => {
    try {
        // check query params and set defaults or return error if applicable

        const cache = await redis.get(`quran:editions`)
        if (cache) {
            return json({
                success: true,
                message: "Quran editions retrieved successfully",
                data: {
                    editions: JSON.parse(cache)
                }
            })
        }


        // fetch necessary data

        // run checks or additional actions

        // return error conditionally

        await redis.set(`quran:editions`, JSON.stringify(quranEditions))

        // return success
        return json({
            success: true,
            data: {
                editions: quranEditions
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