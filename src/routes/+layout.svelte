<script lang="ts">
  import '../app.css';

  // PWA設定
  import { onMount } from 'svelte';
  import { dev, browser } from '$app/environment';
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  // i18n
  import { t, simpleI18nStore, setLanguage } from '$lib/i18n/simple-store.svelte.js';
  import type { LanguageCode } from '$lib/i18n/types.js';
  import { SUPPORTED_LANGUAGES } from '$lib/i18n/types.js';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
  import type { LayoutData } from './$types';
  import type { LayoutServerData } from '$lib/types/layout.js';

  // PWA
  import { registerPWA, setupPWAInstallPrompt } from '$lib/utils/pwa-register.js';

  // シンプルなi18nストアは常に初期化済み
  const isI18nReady = true;

  // Extend LayoutData with our server data
  interface Props {
    children: import('svelte').Snippet;
    data: LayoutData & Partial<LayoutServerData>;
  }

  const { children, data }: Props = $props();

  // ナビゲーションメニューの状態
  let isMenuOpen = $state(false);

  // 現在のページを判定
  const currentPath = $derived($page.url.pathname);
  const isHomePage = $derived(currentPath === '/' || currentPath === base);
  const isAboutPage = $derived(currentPath.includes('/about'));
  const isHelpPage = $derived(currentPath.includes('/help'));
  const isPrivacyPage = $derived(currentPath.includes('/privacy'));
  const isIntroPage = $derived(currentPath.includes('/intro'));

  // デバッグ用
  $effect(() => {
    // console.log('Navigation debug:', {
    //   currentPath,
    //   isHelpPage,
    //   isAboutPage,
    //   isPrivacyPage,
    //   isHomePage,
    //   timestamp: new Date().toISOString()
    // });

    // DOM要素のクラス確認
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const navButtons = document.querySelectorAll('.desktop-menu .nav-link');
        navButtons.forEach((_button, _index) => {
          // console.log(`Nav button ${_index + 1} classes:`, _button.className);
        });
      }, 100);
    }
  });

  // SSRデータとの同期（シンプルストアでは不要だが互換性のため残す）
  $effect(() => {
    if (data?.currentLang && data.currentLang !== simpleI18nStore.currentLanguage) {
      // SSRで検出された言語がローカルと異なる場合のみ設定
      // ただし、ユーザーが既に言語を選択している場合は上書きしない
      const hasUserSelection = browser && localStorage.getItem('fact-checklist-language');
      if (!hasUserSelection) {
        setLanguage(data.currentLang as LanguageCode);
      }
    }
  });

  onMount(() => {
    // URLパラメータ処理
    const urlLang = $page.url.searchParams.get('lang');
    if (urlLang && urlLang in SUPPORTED_LANGUAGES) {
      setLanguage(urlLang as LanguageCode);
    }

    // ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
    if (browser) {
      document.body.classList.add('app-loaded');
      const loadingElement = document.querySelector('.app-loading') as HTMLElement;
      if (loadingElement) {
        loadingElement.style.display = 'none';
      }
    }

    // PWA Service Worker登録（Safari対応強化版）
    if (!dev && browser) {
      registerPWA()
        .then(() => {
          setupPWAInstallPrompt();
        })
        .catch(error => {
          console.error('PWA registration failed:', error);
        });
    }

    // リサイズイベントでハンバーガーメニューを自動的に閉じる
    const handleResize = () => {
      if (isMenuOpen && window.innerWidth >= 1024) {
        isMenuOpen = false;
      }
    };
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数を返す
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // ナビゲーション関数
  function goToHome() {
    goto(base || '/');
    isMenuOpen = false;
  }

  function goToAbout() {
    goto(`${base}/about`);
    isMenuOpen = false;
  }

  function goToHelp() {
    goto(`${base}/help`);
    isMenuOpen = false;
  }

  function goToPrivacy() {
    goto(`${base}/privacy`);
    isMenuOpen = false;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  // メニュー外クリックで閉じる
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.global-nav') && isMenuOpen) {
      isMenuOpen = false;
    }
  }
</script>

<svelte:head>
  {#if !isIntroPage}
    {#if data?.meta}
      <!-- サーバーサイドで決定されたメタタグのみ出力（重複回避） -->
      <title>{data.meta.title}</title>
      <meta name="description" content={data.meta.description} />
      <meta name="keywords" content={data.meta.keywords} />

      <!-- OGP -->
      <meta property="og:title" content={data.meta.ogTitle} />
      <meta property="og:description" content={data.meta.ogDescription} />
      <meta property="og:url" content={data.meta.ogUrl} />
      <meta property="og:image" content={data.meta.ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fact Checklist" />
      <meta
        property="og:locale"
        content={data?.currentLang === 'ja'
          ? 'ja_JP'
          : data?.currentLang === 'zh-TW'
            ? 'zh_TW'
            : data?.currentLang === 'ar'
              ? 'ar_AR'
              : `${data?.currentLang}_${data?.currentLang?.toUpperCase()}`}
      />

      <!-- Twitter Card -->
      <meta name="twitter:card" content={data.meta?.twitterCard} />
      <meta name="twitter:title" content={data.meta?.twitterTitle} />
      <meta name="twitter:description" content={data.meta?.twitterDescription} />
      <meta name="twitter:image" content={data.meta?.twitterImage} />

      <!-- Canonical URL -->
      <link rel="canonical" href={data.meta?.canonicalUrl} />

      <!-- Structured Data (JSON-LD) は別途処理 -->
    {:else}
      <!-- Fallback meta tags for prerendering (non-intro pages only) -->
      <title>Fact Checklist - ファクトチェックシート</title>
      <meta
        name="description"
        content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
      />
      <meta
        name="keywords"
        content="事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策"
      />

      <!-- OGP fallback -->
      <meta property="og:title" content="Fact Checklist - ファクトチェックシート" />
      <meta
        property="og:description"
        content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
      />
      <meta property="og:url" content="https://fact-checklist.vercel.app" />
      <meta property="og:image" content="https://fact-checklist.vercel.app/og-image.png" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ファクトチェックシート" />
      <meta property="og:locale" content="ja_JP" />

      <!-- Twitter Card fallback -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fact Checklist - ファクトチェックシート" />
      <meta
        name="twitter:description"
        content="20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。"
      />
      <meta name="twitter:image" content="https://fact-checklist.vercel.app/og-image.png" />

      <!-- Structured Data (JSON-LD) fallback -->
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Fact Checklist - ファクトチェックシート",
          "description": "20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。",
          "url": "https://fact-checklist.vercel.app",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "All",
          "browserRequirements": "Modern browser with JavaScript enabled",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "JPY"
          },
          "author": {
            "@type": "Organization",
            "name": "Fact Checklist",
            "url": "https://fact-checklist.vercel.app"
          },
          "inLanguage": "ja",
          "potentialAction": {
            "@type": "UseAction",
            "target": "https://fact-checklist.vercel.app",
            "object": {
              "@type": "WebApplication",
              "name": "Fact Checklist - ファクトチェックシート"
            }
          }
        }
      </script>
    {/if}
  {/if}
  <!-- Note: Intro page meta tags are handled by intro/+page.svelte -->

  <!-- PWA用メタタグ -->
  <meta name="theme-color" content="#2c3e50" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta
    name="apple-mobile-web-app-title"
    content={isI18nReady ? t('app.title') : 'Fact Checklist'}
  />

  <!-- アイコン -->
  <link rel="icon" href="{base}/favicon.png" />
  <link rel="apple-touch-icon" href="{base}/apple-touch-icon.png" />
  <!-- Vite PWAが自動でmanifestリンクを挿入するため、手動linkは削除 -->
</svelte:head>

<svelte:window onclick={handleClickOutside} />

<div class="app">
  <!-- グローバルナビゲーション（introページでは非表示） -->
  {#if !isIntroPage}
    <nav class="global-nav">
      {#if isI18nReady}
        <!-- タブレット用２段レイアウト -->
        <div class="nav-content tablet-layout">
          <div class="nav-top">
            <button type="button" class="nav-brand" onclick={goToHome}>
              <span class="nav-icon">🔍</span>
              <div class="brand-text">
                {#if isHomePage}
                  <h1 class="brand-title">{t('app.brandTitle')}</h1>
                {:else}
                  <span class="brand-title">{t('app.brandTitle')}</span>
                {/if}
                <span class="brand-subtitle">{t('app.brandSubtitle')}</span>
              </div>
            </button>
          </div>
          <div class="nav-bottom">
            <div class="nav-menu desktop-menu">
              <button type="button" class="nav-link" class:active={isHomePage} onclick={goToHome}>
                🏠 {t('navigation.home')}
              </button>
              <button type="button" class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
                📖 {t('navigation.about')}
              </button>
              <button type="button" class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
                ❓ {t('navigation.help')}
              </button>
              <button
                type="button"
                class="nav-link"
                class:active={isPrivacyPage}
                onclick={goToPrivacy}
              >
                🔐 {t('navigation.privacy')}
              </button>
              <!-- タブレット用言語切り替えとダークモード -->
              <div class="tablet-controls">
                <DarkModeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>

        <!-- デスクトップ用１段レイアウト -->
        <div class="nav-content desktop-layout">
          <button type="button" class="nav-brand" onclick={goToHome}>
            <span class="nav-icon">🔍</span>
            <div class="brand-text">
              {#if isHomePage}
                <h1 class="brand-title">{t('app.brandTitle')}</h1>
              {:else}
                <span class="brand-title">{t('app.brandTitle')}</span>
              {/if}
              <span class="brand-subtitle">{t('app.brandSubtitle')}</span>
            </div>
          </button>

          <!-- デスクトップメニュー -->
          <div class="nav-menu desktop-menu">
            <button type="button" class="nav-link" class:active={isHomePage} onclick={goToHome}>
              🏠 {t('navigation.home')}
            </button>
            <button type="button" class="nav-link" class:active={isAboutPage} onclick={goToAbout}>
              📖 {t('navigation.about')}
            </button>
            <button type="button" class="nav-link" class:active={isHelpPage} onclick={goToHelp}>
              ❓ {t('navigation.help')}
            </button>
            <button
              type="button"
              class="nav-link"
              class:active={isPrivacyPage}
              onclick={goToPrivacy}
            >
              🔐 {t('navigation.privacy')}
            </button>
          </div>

          <!-- モバイルメニューボタン -->
          <button
            type="button"
            class="mobile-menu-toggle"
            onclick={toggleMenu}
            aria-label={t('accessibility.openMenu')}
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </button>
          <!-- デスクトップ用言語切り替えとダークモード -->
          <div class="desktop-controls">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        <!-- モバイルメニュー -->
        {#if isMenuOpen}
          <div class="mobile-menu">
            <button
              type="button"
              class="mobile-nav-link"
              class:active={isHomePage}
              onclick={goToHome}
            >
              🏠 {t('navigation.home')}
            </button>
            <button
              type="button"
              class="mobile-nav-link"
              class:active={isAboutPage}
              onclick={goToAbout}
            >
              📖 {t('navigation.about')}
            </button>
            <button
              type="button"
              class="mobile-nav-link"
              class:active={isHelpPage}
              onclick={goToHelp}
            >
              ❓ {t('navigation.help')}
            </button>
            <button
              type="button"
              class="mobile-nav-link"
              class:active={isPrivacyPage}
              onclick={goToPrivacy}
            >
              🔐 {t('navigation.privacy')}
            </button>
            <!-- モバイル用言語切り替えとダークモード -->
            <div class="mobile-controls">
              <DarkModeToggle />
              <LanguageSwitcher mobileMode={true} />
            </div>
          </div>
        {/if}
      {:else}
        <!-- Loading state for navigation -->
        <div class="nav-content desktop-layout">
          <div class="nav-brand-loading">
            <span class="nav-icon">🔍</span>
            <div class="brand-text">
              <span class="brand-title">{t('app.brandTitle')}</span>
              <span class="brand-subtitle">{t('app.brandSubtitle')}</span>
            </div>
          </div>
          <div class="nav-loading">Loading...</div>
        </div>
      {/if}
    </nav>
  {/if}

  <main>
    {@render children()}
  </main>
</div>

<style>
  /* Global styles are now imported from app.css with design tokens */

  /* Layout-specific overrides if needed */

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    width: 100%;
  }

  /* グローバルナビゲーションスタイル - Modern Design */
  .global-nav {
    background: rgba(227, 242, 253, 0.85);
    border-bottom: 1px solid rgba(227, 242, 253, 0.3);
    box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: var(--z-index-modal);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  .nav-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-4) var(--spacing-6);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-2);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }

  .nav-brand::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
    border-radius: var(--radius-lg);
  }

  .nav-brand:hover::before {
    opacity: 0.1;
  }

  .nav-brand:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .nav-icon {
    font-size: 2em;
    position: relative;
    z-index: 1;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }

  .brand-title {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-lg);
    color: var(--text-color);
    line-height: var(--line-height-tight);
  }

  h1.brand-title {
    margin: 0;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-lg);
    color: var(--text-color);
    line-height: var(--line-height-tight);
  }

  .brand-subtitle {
    font-size: var(--font-size-xs);
    color: var(--text-color-secondary);
    line-height: var(--line-height-tight);
    font-weight: var(--font-weight-medium);
  }

  .desktop-menu {
    display: flex;
    gap: var(--spacing-2);
  }

  /* Loading states */
  .nav-brand-loading {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-2);
    opacity: 0.6;
  }

  .nav-loading {
    padding: var(--spacing-3) var(--spacing-4);
    color: var(--text-color-secondary);
    font-size: var(--font-size-sm);
  }

  .nav-link {
    background: var(--surface-color);
    border: 2px solid transparent;
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--radius-lg);
    color: var(--text-color);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-sm);
    cursor: pointer;
    transition: all var(--transition-base) var(--ease-out);
    white-space: nowrap;
    position: relative;
    overflow: hidden;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .nav-link:hover::before {
    opacity: 1;
  }

  .nav-link:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-primary);
  }

  .nav-link.active {
    background: var(--gradient-primary) !important;
    color: white !important;
    box-shadow: var(--shadow-primary) !important;
    transform: none !important;
  }

  .nav-link.active::before {
    opacity: 0 !important;
  }

  .mobile-menu-toggle {
    display: none;
    flex-direction: column;
    gap: var(--spacing-1);
    background: var(--surface-color);
    border: 2px solid var(--border-color);
    border-radius: var(--radius-lg);
    padding: var(--spacing-3);
    cursor: pointer;
    transition: all var(--transition-base) var(--ease-out);
  }

  .mobile-menu-toggle:hover {
    background: var(--surface-elevated);
    border-color: var(--primary-color);
    transform: translateY(-1px);
  }

  .hamburger-line {
    width: 24px;
    height: 3px;
    background: var(--text-color);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast) var(--ease-out);
  }

  .mobile-menu {
    background: var(--surface-elevated);
    border-top: 1px solid var(--border-color);
    padding: var(--spacing-6);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    backdrop-filter: blur(var(--blur-md));
    -webkit-backdrop-filter: blur(var(--blur-md));
  }

  .mobile-nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-4);
    background: var(--surface-color);
    border: 2px solid transparent;
    border-radius: var(--radius-lg);
    color: var(--text-color);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-base);
    cursor: pointer;
    transition: all var(--transition-base) var(--ease-out);
    text-align: left;
    position: relative;
    overflow: hidden;
  }

  .mobile-nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .mobile-nav-link:hover::before {
    opacity: 1;
  }

  .mobile-nav-link:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  .mobile-nav-link.active {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-primary);
  }

  .mobile-nav-link.active::before {
    opacity: 0;
  }

  /* コントロールスタイル */
  .mobile-controls,
  .tablet-controls,
  .desktop-controls {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
  }

  .mobile-controls {
    padding: var(--spacing-4) 0;
    border-top: 1px solid var(--border-color);
    margin-top: var(--spacing-4);
    justify-content: center;
  }

  /* ダークモード対応は CSS変数で自動対応 */

  /* タブレット・デスクトップレイアウト制御 */
  .tablet-layout {
    display: none;
  }

  .desktop-layout {
    display: flex;
  }

  /* タブレット用２段レイアウト */
  .tablet-layout .nav-top {
    display: flex;
    justify-content: center;
    padding: var(--spacing-2) 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .tablet-layout .nav-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-2) 0;
    gap: var(--spacing-4);
  }

  .tablet-layout .nav-menu {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
  }

  .tablet-layout .nav-brand {
    padding: var(--spacing-2) var(--spacing-4);
  }

  .tablet-layout .brand-title {
    font-size: var(--font-size-base);
  }

  .tablet-layout h1.brand-title {
    margin: 0;
    font-size: var(--font-size-base);
  }

  .tablet-layout .brand-subtitle {
    font-size: var(--font-size-xs);
  }

  .tablet-layout .nav-icon {
    font-size: 1.5em;
  }

  /* デスクトップ用コントロールの表示制御 */
  .desktop-controls {
    display: flex;
  }

  /* タブレット用コントロールの表示制御 */
  .tablet-controls {
    display: none;
  }

  /* タブレット範囲でレイアウト切り替え */
  @media (min-width: 769px) and (max-width: 1064px) {
    .tablet-layout {
      display: block;
    }

    .desktop-layout {
      display: none;
    }

    /* タブレット範囲ではコントロールをタブレット用に切り替え */
    .desktop-controls {
      display: none;
    }

    .tablet-controls {
      display: flex;
      margin-left: var(--spacing-4);
    }
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }

    .mobile-menu-toggle {
      display: flex;
    }

    /* モバイルではコントロールを非表示 */
    .desktop-controls {
      display: none;
    }

    .nav-content {
      padding: var(--spacing-3) var(--spacing-4);
    }

    .brand-title {
      font-size: var(--font-size-base);
    }

    h1.brand-title {
      margin: 0;
      font-size: var(--font-size-base);
    }

    .brand-subtitle {
      font-size: var(--font-size-xs);
    }

    .nav-icon {
      font-size: 1.5em;
    }

    .tablet-layout {
      display: none;
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    .nav-brand,
    .nav-link,
    .mobile-nav-link,
    .hamburger-line,
    .nav-brand::before,
    .nav-link::before,
    .mobile-nav-link::before {
      transition: none !important;
    }
  }

  /* フォーカス時の視認性向上 */
  .nav-brand:focus,
  .nav-link:focus,
  .mobile-nav-link:focus,
  .mobile-menu-toggle:focus {
    outline: 3px solid var(--primary-color);
    outline-offset: 3px;
    border-radius: var(--radius-sm);
  }
</style>
