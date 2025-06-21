import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}']
			},
			includeAssets: ['favicon.png'],
			manifest: {
				name: '実用的事実確認チェックシート',
				short_name: 'FactCheckList',
				description: '情報の信頼性を科学的・体系的に評価するためのPWA',
				theme_color: '#2c3e50',
				background_color: '#ffffff',
				display: 'standalone',
				orientation: 'portrait',
				scope: '/',
				start_url: '/',
				lang: 'ja-JP',
				categories: ['education', 'productivity', 'utilities'],
				icons: [
					{
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
					},
				],
				screenshots: [
					{
						src: 'screenshot-wide.png',
						sizes: '1280x720',
						type: 'image/png',
						form_factor: 'wide',
						label: 'デスクトップ版のスクリーンショット'
					},
					{
						src: 'screenshot-narrow.png',
						sizes: '375x812',
						type: 'image/png',
						form_factor: 'narrow',
						label: 'モバイル版のスクリーンショット'
					}
				]
			},
			devOptions: {
				enabled: true
			}
		})
	],
	server: {
		fs: {
			allow: ['..']
		}
	},
	build: {
		target: 'es2022'
	},
	base: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true' ? '/fact-checklist/' : '/'
});