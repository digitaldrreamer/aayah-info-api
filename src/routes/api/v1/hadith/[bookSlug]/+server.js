import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {getHadithBook} from "$lib/sources/hadith/hadith.js";
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // check query params & path params and set defaults or return error if applicable
        const { bookSlug } = params

        const cache = await redis.get(`hadith-book-${bookSlug}`)
        if (cache) {
            return json({
                success: true,
                message: "Hadith book retrieved successfully",
                data: {
                    book: JSON.parse(cache)
                }
            })
        }


        // fetch necessary data
        const hadithBook = getHadithBook(bookSlug)

        // run checks or additional actions

        // return error conditionally
        if (!hadithBook) return json({
            error: true,
            message: "Hadith Book not found"
        }, {
            status: 404
        })

        await redis.set(`hadith-book-${bookSlug}`, JSON.stringify(hadithBook))


        // return success
        return json({
            success: true,
            message: "Hadith book retrieved successfully",
            data: {
                book: hadithBook
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