import { json } from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit'
import { getHadithBySection } from "$lib/sources/hadith/hadith.js";
import { redis } from "$lib/redis.server.js";

export const GET = async ({ url, params }) => {
    try {
        // Check query params and set defaults or return error if applicable
        const { bookSlug, sectionNum } = params;

        // Try to fetch from cache
        const cache = await redis.get(`hadith:${bookSlug}:${sectionNum}`);
        if (cache) {
            return json({
                success: true,
                message: "Hadith book section retrieved successfully",
                data: {
                    section: JSON.parse(cache)
                }
            });
        }

        // Fetch necessary data
        const hadithSectionInfo = await getHadithBySection(bookSlug, sectionNum);  // Await the async function
        console.log(hadithSectionInfo);

        // Run checks or additional actions
        if (!hadithSectionInfo) {
            return json({
                error: true,
                message: "Hadith Book Section not found"
            }, {
                status: 404
            });
        }

        // Cache the result for future requests
        await redis.set(`hadith:${bookSlug}:${sectionNum}`, JSON.stringify(hadithSectionInfo));

        // Return success response
        return json({
            success: true,
            message: "Hadith book section retrieved successfully",
            data: {
                section: hadithSectionInfo
            }
        });
    } catch (e) {
        // Report the error to Sentry
        Sentry.captureException(e);

        // Return error response
        return json({
            status: false,
            message: "Error: " + e?.message
        }, {
            status: 500
        });
    }
};
