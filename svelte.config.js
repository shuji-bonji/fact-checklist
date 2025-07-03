import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x', // 18.x → 20.x に変更
      split: false
    }),
    serviceWorker: {
      register: false
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      entries: ['/', '/about', '/help', '/privacy', '/intro'],
      crawl: true
    }
  }
};

export default config;
