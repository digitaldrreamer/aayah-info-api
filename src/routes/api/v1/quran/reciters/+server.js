import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getPage} from "$lib/sources/quran/quran.js";
import {getPageAudio, reciters as rec} from "$lib/sources/everyayah/everyayah.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params and set defaults or return error if applicable
        const quality = url.searchParams.get('quality')

        const cache = await redis.get(`reciters:${quality}`)
        if (cache) {
            return json({
                success: true,
                message: "Reciters retrieved successfully",
                data: {
                    reciters: JSON.parse(cache)
                }
            })
        }

        // fetch necessary data
        let reciters = rec

        // run checks or additional actions
        if ([64, 128].includes(Number(quality))) reciters = rec.filter(r => r.value.includes(`${quality}`))

        // return error conditionally

        await redis.set(`reciters:${quality}`, JSON.stringify(reciters))

        // return success
        return json({
            success: true,
            message: "Reciters retrieved successfully",
            data: {
                reciters,
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