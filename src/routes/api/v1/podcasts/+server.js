import { json } from "@sveltejs/kit";
import getPodcasts from "$lib/podcasts.js";
import { redis } from "$lib/redis.server.js";

export const GET = async () => {
    const cache = await redis.get('podcasts');
    if (cache) {
        const results = JSON.parse(cache);

        if (results && Array.isArray(results) && results.length) {
            return json(results);
        }
    }

    const podcasts = await getPodcasts();
    await redis.set('podcasts', JSON.stringify(podcasts));
    return json(podcasts);
};
