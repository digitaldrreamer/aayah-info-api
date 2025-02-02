import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {hadithBooks} from "$lib/sources/hadith/hadith.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url }) => {
    try {
        const cache = await redis.get('hadithBooks')
        if (cache) {
            return json({
                success: true,
                message: "Hadith Book retrieved successfully",
                data: {
                    books: JSON.parse(cache)
                }
            })
        }
        // check query params and set defaults or return error if applicable


        // fetch necessary data
        const books = hadithBooks
        await redis.set('hadithBooks', JSON.stringify(books), 'EX', 60 * 60 * 24)

        // run checks or additional actions

        // return error conditionally


        // return success
        return json({
            success: true,
            message: "Hadith Book retrieved successfully",
            data: {
                books
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