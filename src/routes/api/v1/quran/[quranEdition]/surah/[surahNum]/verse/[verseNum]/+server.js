import { json } from "@sveltejs/kit";
import * as Sentry from '@sentry/sveltekit';
import { getChapter, getVerse } from "$lib/sources/quran/quran.js";
import { getVerseAudio } from "$lib/sources/everyayah/everyayah.js";
import { getVerseTafsir } from "$lib/sources/tafsir/tafsir.js";
import logger from "$lib/logger.js";
import { redis } from "$lib/redis.server.js";

export const GET = async ({ params, url }) => {
    try {
        // Check query params and set defaults or return error if applicable
        const audio = url.searchParams.get('audio') ?? false;
        const tafsir = url.searchParams.get('tafsir') ?? false;
        const { quranEdition, surahNum, verseNum } = params;

        // Check cache
        const cache = await redis.get(`verse:${quranEdition}:${surahNum}:${verseNum}`);
        if (cache) {
            return json({
                success: true,
                message: "Verse retrieved successfully",
                data: {
                    verse: JSON.parse(cache),
                },
            });
        }

        // Fetch necessary data
        const verse = await getVerse(quranEdition, surahNum, verseNum);

        let audioUrl = null;
        if (audio) audioUrl = getVerseAudio(surahNum, verseNum, audio);

        let verseTafsir = null;
        if (tafsir) {
            verseTafsir = (await getVerseTafsir(tafsir, surahNum, verseNum)).text;
        }

        // Set cache
        await redis.set(`verse:${quranEdition}:${surahNum}:${verseNum}`, JSON.stringify(verse));

        // Return success
        return json({
            success: true,
            message: "Verse retrieved successfully",
            data: {
                verse,
                tafsir: verseTafsir,
                audioUrl,
            },
        });
    } catch (e) {
        // Report to Sentry
        Sentry.captureException(e);

        // Return error 500
        return json({
            status: false,
            message: "Error: " + e?.message,
        });
    }
};
