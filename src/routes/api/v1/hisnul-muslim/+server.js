import {getDua} from "$lib/sources/hisnul-muslim/hisnul-muslim.js";
import {json} from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import {redis} from "$lib/redis.server.js";

export const GET = async ({ url }) => {

    try {
        // check params and set defaults or return error responses if applicable
        const index = url.searchParams.get('index')
        if (!index) throw new Error('Index not passed to hisnul-muslim endpoint')
        if (isNaN(Number(index))) throw new Error('Index passed to hisnul-muslim must be parsable to a valid number')

        const cache = await redis.get(`dua:${index}`)
        if (cache) {
            return json({
                status: true,
                message: "Dua retrieved successfully",
                data: {
                    dua: JSON.parse(cache)
                }
            })
        }



        const dua = await getDua(Number(index))
        if (!dua) {
            return json({
                status: false,
                message: "Dua not found"
            },
                {status: 404, statusText: "We couldn't find the Dua you were looking for."}
            )
        }

        await redis.set(`dua:${index}`, JSON.stringify(dua))

        return json({
            status: true,
            message: 'Dua fetched',
            data: {
                dua
            }
        })
    } catch (e) {
        Sentry.captureException(e)
        return json({
            status: false,
            message: "Error: " + e?.message
        }, {
            status: 500,
            statusText: "Server error: " + e?.message
        })
    }
}