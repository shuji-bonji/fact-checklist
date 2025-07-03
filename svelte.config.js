import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    // Vercel adapter for SSR support
    adapter: adapter({
      runtime: 'nodejs18.x',
      split: false
    }),
    // PWA用の設定
    serviceWorker: {
      register: false
    },
    // プリレンダリング設定（Vercel用に調整）
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      // 新しく追加したページを明示的にエントリに追加
      entries: ['/', '/about', '/help', '/privacy', '/intro'],
      crawl: true
    }
    // GitHub Pages用のpathsは削除（Vercelでは不要）
  }
};

export default config;
