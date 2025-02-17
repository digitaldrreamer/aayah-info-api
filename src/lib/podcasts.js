import * as cheerio from 'cheerio';
import logger from '$lib/logger';

async function waitForContent($, selector, maxAttempts = 10, interval = 1000) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        const elements = $(selector);
        if (elements.length > 0) {
            return true;
        }
        await new Promise(resolve => setTimeout(resolve, interval));
        attempts++;
    }
    return false;
}

function prepareEpisode(episode) {
    if (!episode || typeof episode !== 'object') {
        logger.warn('Invalid episode data received');
        return null;
    }

    return {
        title: episode.episodeTitle || 'Unknown Title',
        duration: episode.episodeDuration || 'Unknown Duration',
        size: episode.episodeSize || 'Unknown Size',
        date: episode.episodeDate || 'Unknown Date',
        url: episode.episodeURL ? `https://podcasts.muslimcentral.com/${episode.episodeURL}` : null,
        postLink: episode.postLink || null,
        formattedTitle: `${episode.episodeTitle || 'Unknown Title'} (${episode.episodeDuration || 'Unknown Duration'})`,
        downloadLink: episode.episodeURL ? `https://podcasts.muslimcentral.com/${episode.episodeURL}` : null
    };
}

async function extractPodcastData($) {
    // Try multiple selectors to handle potential structure changes
    const podcastSelectors = [
        '.podcast-entry', // Example new selector
        '.audio-item',    // Example alternative selector
        '[data-type="podcast"]' // Another possibility
    ];

    for (const selector of podcastSelectors) {
        const elements = $(selector);
        if (elements.length > 0) {
            logger.success(`Found podcast elements using selector: ${selector}`);
            return Array.from(elements).map(element => {
                const $element = $(element);
                return {
                    episodeTitle: $element.find('.title, .podcast-title').text().trim(),
                    episodeDuration: $element.find('.duration, .length').text().trim(),
                    episodeURL: $element.find('audio source, .download-link').attr('src') ||
                        $element.find('a[href$=".mp3"]').attr('href'),
                    episodeDate: $element.find('.date, .published').text().trim(),
                    postLink: $element.find('a:not([href$=".mp3"])').attr('href')
                };
            });
        }
    }

    // Fallback to script tag parsing if DOM elements aren't found
    logger.info('Attempting to extract data from script tags');
    let scriptData = null;
    $('script').each((_, element) => {
        const content = $(element).html();
        if (content && content.includes('const values =')) {
            try {
                const match = content.match(/const\s+values\s*=\s*(\[[\s\S]*?\]);/);
                if (match && match[1]) {
                    scriptData = JSON.parse(match[1]);
                    return false; // Break the loop
                }
            } catch (err) {
                logger.error('Failed to parse script data', err);
            }
        }
    });

    return scriptData;
}

async function getPodcasts() {
    logger.start('Starting audio fetch');

    try {
        const url = 'https://muslimcentral.com/audio/mufti-menk/';
        logger.info('Fetching URL', url);

        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        console.log(html)
        const $ = cheerio.load(html);

        // Wait for dynamic content to load
        const contentLoaded = await waitForContent($, '.podcast-entry, .audio-item, [data-type="podcast"]');
        if (!contentLoaded) {
            logger.warn('Content did not load within the timeout period');
        }

        // Extract podcast data
        const podcastData = await extractPodcastData($);
        if (!podcastData) {
            throw new Error('Failed to extract podcast data');
        }

        // Process the extracted data
        const audioList = podcastData
            .map(prepareEpisode)
            .filter(episode => episode !== null);

        // Extract series data with multiple selector attempts
        const seriesList = [];
        const seriesSelectors = ['#series tr', '.series-list .item', '.series-entry'];

        for (const selector of seriesSelectors) {
            $(selector).each((_, element) => {
                const $element = $(element);
                const series = {
                    title: $element.find('a').text().trim(),
                    link: $element.find('a').attr('href') || null
                };
                if (series.link && series.title) {
                    seriesList.push(series);
                }
            });

            if (seriesList.length > 0) break;
        }

        logger.success('Data extraction complete', {
            audioCount: audioList.length,
            seriesCount: seriesList.length
        });

        return { audioList, seriesList };

    } catch (error) {
        logger.error('Failed to fetch data', {
            message: error.message,
            stack: error.stack
        });
        return { error: "Failed to fetch data", details: error.message };
    }
}

export default getPodcasts;