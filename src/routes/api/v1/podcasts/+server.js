import {json} from "@sveltejs/kit";
import getPodcasts from "$lib/podcasts.js";
import {redis} from "$lib/redis.server.js";

export const GET = async () => {
    const cache = await redis.get('podcasts')
    if (cache) {
        return json(JSON.parse(cache))
    }
    const podcasts = await getPodcasts()
    await redis.set('podcasts', JSON.stringify(podcasts), 'EX', 60 * 60 * 24)
    return json({
        ...podcasts
    })
}