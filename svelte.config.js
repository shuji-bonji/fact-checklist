import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x',
      split: false,
      isr: {
        // Enable ISR for better performance while keeping dynamic capabilities
        expiration: 60 // Cache for 60 seconds
      }
    }),
    serviceWorker: {
      register: false
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      entries: ['/intro'], // Only prerender intro page
      crawl: false
    }
  }
};

export default config;
