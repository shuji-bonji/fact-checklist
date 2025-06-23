<script lang="ts">
	import '../app.css';

	// PWA設定
	import { onMount } from 'svelte';
	import { dev, browser } from '$app/environment';
	import { base } from '$app/paths';

	onMount(async () => {
		// ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
		if (browser) {
			document.body.classList.add('app-loaded');
			const loadingElement = document.querySelector('.app-loading') as HTMLElement;
			if (loadingElement) {
				loadingElement.style.display = 'none';
				console.log('Loading screen hidden from layout');
			}
		}

		if (!dev && 'serviceWorker' in navigator && browser) {
			try {
				// ベースパスを考慮したService Worker登録
				const swPath = `${base}/service-worker.js`;
				console.log('Registering Service Worker at:', swPath);

				const registration = await navigator.serviceWorker.register(swPath, {
					scope: `${base}/`
				});
				console.log('Service Worker registered successfully:', registration);
			} catch (error) {
				console.error('Service Worker registration failed:', error);
			}
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="description"
		content="情報の信頼性を科学的・体系的に評価するための実用的事実確認チェックシート"
	/>
	<meta name="keywords" content="事実確認,ファクトチェック,情報検証,信頼性評価,PWA" />
	<meta name="author" content="Fact Checklist Team" />

	<!-- PWA用メタタグ -->
	<meta name="theme-color" content="#2c3e50" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="default" />
	<meta name="apple-mobile-web-app-title" content="事実確認チェックシート" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="実用的事実確認チェックシート" />
	<meta property="og:description" content="情報の信頼性を科学的・体系的に評価するためのPWA" />
	<meta property="og:locale" content="ja_JP" />

	<!-- アイコン（VitePWAが自動管理するため、manifestは手動指定しない） -->
	<link rel="icon" href="{base}/favicon.ico" />
	<link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
	<!-- manifest linkはVitePWAが自動挿入するため削除 -->

	<title>実用的事実確認チェックシート</title>
</svelte:head>

<!-- スタイルは同じなので省略 -->
<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	/* 前と同じスタイル */
	:global(html) {
		font-family:
			'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', system-ui, sans-serif;
		line-height: 1.6;
		color-scheme: light dark;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
		color: var(--text-color);
		background-color: var(--bg-color);
	}

	:global(*) {
		box-sizing: border-box;
	}

	/* CSS Variables for theming */
	:global(:root) {
		--primary-color: #2c3e50;
		--secondary-color: #3498db;
		--accent-color: #e74c3c;
		--warning-color: #f39c12;
		--success-color: #27ae60;
		--bg-color: #ffffff;
		--surface-color: #f8f9fa;
		--text-color: #2c3e50;
		--text-muted: #7f8c8d;
		--border-color: #e9ecef;
		--shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		--shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.15);
		--border-radius: 12px;
		--border-radius-sm: 6px;
		--spacing-xs: 0.5rem;
		--spacing-sm: 1rem;
		--spacing-md: 1.5rem;
		--spacing-lg: 2rem;
		--spacing-xl: 3rem;
	}

	/* ダークモード */
	:global(:root.dark) {
		--bg-color: #1a202c;
		--surface-color: #2d3748;
		--text-color: #f7fafc;
		--text-muted: #a0aec0;
		--border-color: #4a5568;
		--shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
		--shadow-hover: 0 5px 20px rgba(0, 0, 0, 0.4);
	}

	/* 他のスタイルも同様に省略 */
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		width: 100%;
	}
</style>
