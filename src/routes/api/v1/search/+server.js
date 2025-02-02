import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'

export const GET = async ({ url }) => {
    try {
        // check query params and set defaults or return error if applicable
        //dua
        //quran
        //hadith
        //tafsir

        // fetch necessary data

        // run checks or additional actions

        // return error conditionally


        // return success
    //     , {
        //             headers: {
        //                 'Access-Control-Allow-Origin': '*',
        //                 'Access-Control-Allow-Methods': 'GET, OPTIONS',
        //                 'Access-Control-Allow-Headers': 'Content-Type'
        //             }
        //         }
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