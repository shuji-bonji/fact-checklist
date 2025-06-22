import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true';
const base = isGitHubPages ? '/fact-checklist/' : '/';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			// Service Workerを手動で管理するため無効化
			injectRegister: false,
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
				// GitHub Pagesでの動作に最適化
				navigateFallback: null,
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
							}
						}
					},
					{
						urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'gstatic-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // 1年
							}
						}
					}
				]
			},
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icon.svg'],
			manifest: {
				name: '実用的事実確認チェックシート',
				short_name: 'FactCheckList',
				description: '情報の信頼性を科学的・体系的に評価するためのPWA',
				theme_color: '#2c3e50',
				background_color: '#ffffff',
				display: 'standalone',
				orientation: 'portrait',
				// GitHub Pagesでのベースパス対応
				scope: base,
				start_url: base,
				lang: 'ja-JP',
				categories: ['education', 'productivity', 'utilities'],
				icons: [
					{
						src: `${base}icon.svg`,
						sizes: 'any',
						type: 'image/svg+xml',
						purpose: 'any maskable'
					},
					{
						src: `${base}icon-192x192.png`,
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: `${base}icon-512x512.png`,
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: `${base}maskable-icon-512x512.png`,
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable'
					}
				],
				screenshots: [
					{
						src: `${base}screenshot-wide.png`,
						sizes: '1280x720',
						type: 'image/png',
						form_factor: 'wide',
						label: 'デスクトップ版のスクリーンショット'
					},
					{
						src: `${base}screenshot-narrow.png`,
						sizes: '375x812',
						type: 'image/png',
						form_factor: 'narrow',
						label: 'モバイル版のスクリーンショット'
					}
				],
				shortcuts: [
					{
						name: '新しいチェックリスト',
						short_name: '新規作成',
						description: '新しい事実確認チェックリストを開始する',
						url: `${base}?action=new`,
						icons: [
							{
								src: `${base}icon-192x192.png`,
								sizes: '192x192',
								type: 'image/png'
							}
						]
					},
					{
						name: '履歴',
						short_name: '履歴',
						description: '過去のチェックリスト履歴を表示する',
						url: `${base}?action=history`,
						icons: [
							{
								src: `${base}icon-192x192.png`,
								sizes: '192x192',
								type: 'image/png'
							}
						]
					}
				],
				share_target: {
					action: base,
					method: 'GET',
					params: {
						title: 'title',
						text: 'text',
						url: 'url'
					}
				}
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
		target: 'es2022',
		// GitHub Pages用の最適化
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		}
	},
	base
});
