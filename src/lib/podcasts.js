import * as cheerio from 'cheerio';
import logger from '$lib/logger';

function prepareEpisode(value) {
    // Check for necessary properties, and provide defaults if missing
    const requiredProperties = ['episodeTitle', 'episodeURL', 'episodeDate'];

    for (let prop of requiredProperties) {
        if (!value[prop]) {
            console.warn(`Missing property: ${prop}, using fallback.`);
            value[prop] = value[prop] || 'Unknown'; // Provide fallback value
        }
    }

    // Structure the data to be displayed or processed
    const result = {
        title: value.episodeTitle,
        duration: value.episodeDuration || 'Unknown Duration',  // Default for missing duration
        size: value.episodeSize || 'Unknown Size',              // Default for missing size
        date: value.episodeDate,
        url: value.episodeURL ? 'https://podcasts.muslimcentral.com/' + value.episodeURL : null,
        postLink: value.postLink || null,
        formattedTitle: `${value.episodeTitle || 'Unknown Title'} (${value.episodeDuration || 'Unknown Duration'})`,
        downloadLink: value.episodeURL ? 'https://podcasts.muslimcentral.com/' + value.episodeURL : null
    };

    console.log("Prepared episode:", result);  // Log the result for debugging

    return result;
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
            logger.error('HTTP Response not OK', {
                status: response.status,
                statusText: response.statusText
            });
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        logger.success('Fetch successful');
        const html = await response.text();
        logger.debug('HTML length', html.length);

        const $ = cheerio.load(html);
        logger.info('Cheerio loaded successfully');

        // Find all script tags
        let values = [];
        $('script').each((_, element) => {
            const scriptContent = $(element).html();
            if (scriptContent && scriptContent.includes('const values =')) {
                try {
                    // Extract the values array using regex
                    const valuesMatch = scriptContent.match(/const\s+values\s*=\s*(\[[\s\S]*?\]);/);
                    if (valuesMatch && valuesMatch[1]) {
                        logger.debug('Found values array in script');
                        values = JSON.parse(valuesMatch[1]);
                        logger.success('Successfully parsed values array');
                        return false; // Break the each loop
                    }
                } catch (err) {
                    logger.error('Failed to parse values array', err);
                }
            }
        });

        logger.raw('Extracted Values', values);

        // Extract series data
        const seriesList = [];
        $('#series tr').each((index, element) => {
            const series = {
                title: $(element).find('a').text().trim(),
                link: $(element).find('a').attr('href') || null
            };
            if (series.link) {
                seriesList.push(series);
                logger.debug(`Processed series ${index + 1}`, series);
            }
        });

        logger.success('Series list extracted', { count: seriesList.length });

        return { audioList: values.map(v => prepareEpisode(v)), seriesList };

    } catch (error) {
        logger.error('Failed to fetch data', {
            message: error.message,
            stack: error.stack
        });

        return { error: "Failed to fetch data" };
    }
}

export default getPodcasts
