import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {quranEditions} from "$lib/sources/quran/quran.js";
import {tafsirEditions} from "$lib/sources/tafsir/tafsir.js";

export const GET = async ({ url }) => {
    try {
        // check query params and set defaults or return error if applicable



        // fetch necessary data

        // run checks or additional actions

        // return error conditionally


        // return success
        return json({
            success: true,
            data: {
                editions: tafsirEditions
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