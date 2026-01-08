import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs22.x',
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
      handleUnseenRoutes: 'ignore',
      entries: ['/robots.txt', '/sitemap.xml'], // Prerender SEO routes
      crawl: false
    }
  }
};

export default config;
