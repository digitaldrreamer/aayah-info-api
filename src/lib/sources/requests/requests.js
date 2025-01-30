/**
 * Custom fetch implementation with retries and fallback API endpoints.
 * @param {string[]} endpoints - List of API endpoints to try (in order).
 * @param {object} options - Fetch options (e.g., method, headers, body).
 * @param {number} retries - Number of retries per endpoint.
 * @param {number} retryDelay - Delay (in milliseconds) between retries.
 * @returns {Promise<Response>} - The response from a successful API call.
 * @throws {Error} - If all retries and fallbacks fail.
 */
async function fetchWithRetryAndFallback(endpoints, options = {}, retries = 3, retryDelay = 1000) {
    if (!Array.isArray(endpoints) || endpoints.length === 0) {
        throw new Error("At least one endpoint must be provided.");
    }

    for (const endpoint of endpoints) {
        let attempt = 0;

        while (attempt <= retries) {
            try {
                const response = await fetch(endpoint, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response; // Return the successful response.
            } catch (error) {
                attempt++;

                if (attempt > retries) {
                    console.warn(`Endpoint failed after ${retries} retries: ${endpoint}`);
                    break; // Move to the next endpoint.
                }

                console.log(
                    `Retrying (${attempt}/${retries}) for endpoint: ${endpoint} after ${retryDelay}ms`
                );
                await new Promise((resolve) => setTimeout(resolve, retryDelay));
            }
        }
    }

    throw new Error("All endpoints failed after retries.");
}


export { fetchWithRetryAndFallback as fetcher }