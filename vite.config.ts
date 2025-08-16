import { sveltekit } from '@sveltejs/kit/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  // GitHub Pages環境判定（process エラーを回避）
  const isProduction = mode === 'production';
  const base = isProduction ? '/fact-checklist/' : '/';

  return {
    plugins: [
      sveltekit(),
      VitePWA({
        registerType: 'autoUpdate',
        // Service Workerを手動で管理するため無効化
        injectRegister: false,
        // GitHub Pages対応: baseパス設定
        base,
        workbox: {
          // version: '1.0.0'
          globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
          navigateFallback: null,
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
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
        includeAssets: [
          'favicon.png',
          'apple-touch-icon.png',
          'icon.svg',
          'icon-192x192.png',
          'icon-512x512.png'
        ],
        manifest: {
          name: 'ファクトチェックシート',
          short_name: 'FactCheckList',
          description:
            'ファクトチェックリスト - 情報の信頼性を科学的・体系的に評価するファクトチェック支援PWA',
          theme_color: '#2c3e50',
          background_color: '#ffffff',
          display: 'standalone',
          orientation: 'portrait',
          // 相対パスで設定（GitHub Pages対応）
          scope: './',
          start_url: './',
          lang: 'ja-JP',
          categories: ['education', 'productivity', 'utilities'],
          icons: [
            {
              src: 'icon.svg',
              sizes: 'any',
              type: 'image/svg+xml',
              purpose: 'any'
            },
            {
              src: 'icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
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
          ],
          shortcuts: [
            {
              name: '新しいチェックリスト',
              short_name: '新規作成',
              description: '新しい事実確認チェックリストを開始する',
              url: '?action=new',
              icons: [
                {
                  src: 'icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
                }
              ]
            },
            {
              name: '履歴',
              short_name: '履歴',
              description: '過去のチェックリスト履歴を表示する',
              url: '?action=history',
              icons: [
                {
                  src: 'icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
                }
              ]
            }
          ],
          share_target: {
            action: './',
            method: 'GET',
            enctype: 'application/x-www-form-urlencoded',
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
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['svelte']
          }
        }
      }
    },
    base
  };
});
