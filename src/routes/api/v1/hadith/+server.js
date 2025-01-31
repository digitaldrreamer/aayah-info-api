import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {hadithBooks} from "$lib/sources/hadith/hadith.js";

export const GET = async ({ url }) => {
    try {
        // check query params and set defaults or return error if applicable


        // fetch necessary data
        const books = hadithBooks

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