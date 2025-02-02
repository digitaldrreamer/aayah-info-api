import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getQuranInfo} from "$lib/sources/quran/quran.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url }) => {
    try {
        // check query params and set defaults or return error if applicable
        const cache = await redis.get(`quran:info`)
        if (cache) {
            return json({
                success: true,
                message: "Quran Info retrieved",
                data: {
                    quran: JSON.parse(cache)
                }
            })
        }


        // fetch necessary data
        const quran = getQuranInfo()

        // run checks or additional actions

        // return error conditionally


        await redis.set(`quran:info`, JSON.stringify(quran))

        // return success
        return json({
            success: true,
            message: "Quran Info retrieved",
            data: {
                quran
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