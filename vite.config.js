import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit(),
        sentrySvelteKit({
            sourceMapsUploadOptions: {
                org: "goremote-africa",
                project: "aayah-api",
            }
        })
    ],
    build: {
        rollupOptions: {
            external: ['cheerio']  // Add cheerio as an external dependency
        }
    }
});
