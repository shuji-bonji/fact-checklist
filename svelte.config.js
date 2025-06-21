import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto
		// for a list. If your environment is not supported, or you settled on a specific environment,
		// switch out the adapter
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: false
		}),
		
		// PWA用の設定
		serviceWorker: {
			register: false
		},
		
		// プリレンダリング設定
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: ['/'],
			crawl: true
		},
		
		// ルーティング設定
		paths: {
			base: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/fact-checklist' : ''
		}
	}
};

export default config;