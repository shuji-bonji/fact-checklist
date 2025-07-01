<script lang="ts">
  import { t, i18nStore } from '$lib/i18n';
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

  // i18n初期化状態を監視
  const isI18nReady = $derived(i18nStore.initialized && !!i18nStore.translations);

  let shareUrl = '';
  let shareTitle = '';
  let shareText = '';

  // 翻訳が準備できたときにシェア情報を更新
  $effect(() => {
    if (isI18nReady && typeof window !== 'undefined') {
      shareUrl = window.location.href;
      shareTitle = t('intro.hero.title');
      shareText = t('intro.hero.subtitle');
    }
  });

  function shareOnX() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=550,height=420');
  }

  function shareOnLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=550');
  }

  function shareOnFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=550,height=550');
  }

  async function shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl
        });
      } catch {
        console.log('Share cancelled or failed');
      }
    }
  }
</script>

<svelte:head>
  {#if isI18nReady}
    <title>{t('pages.intro.title')}</title>
    <meta name="description" content={t('pages.intro.description')} />
    <meta name="keywords" content={t('pages.intro.keywords')} />
    <meta name="author" content={t('app.author')} />

    <!-- Open Graph -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={t('pages.intro.title')} />
    <meta property="og:description" content={t('pages.intro.description')} />
    <meta property="og:url" content={$page.url.href} />
    <meta property="og:image" content="{$page.url.origin}{base}/og-image-intro.png" />
    <meta property="og:site_name" content={t('app.title')} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={t('pages.intro.title')} />
    <meta name="twitter:description" content={t('pages.intro.description')} />
    <meta name="twitter:image" content="{$page.url.origin}{base}/og-image-intro.png" />
  {:else}
    <title>Fact Checklist - Intro</title>
    <meta name="description" content="Information reliability evaluation intro" />
    <meta property="og:title" content="Fact Checklist - Intro" />
    <meta property="og:description" content="Information reliability evaluation intro" />
    <meta property="og:image" content="{base}/og-image-intro.png" />
  {/if}
</svelte:head>

{#if isI18nReady}
  <div class="intro-container">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-header">
        <div class="hero-language-switcher">
          <LanguageSwitcher />
        </div>
      </div>
      <div class="hero-content">
        <h1 class="hero-title">{t('intro.hero.title')}</h1>
        <p class="hero-subtitle">{t('intro.hero.subtitle')}</p>
        <div class="hero-cta">
          <a href="{base}/" class="cta-button primary large">
            <span class="cta-icon">✓</span>
            {t('intro.cta.startNow')}
          </a>
        </div>
      </div>
    </header>

    <main class="intro-content">
      <!-- Government SNS Regulation Analysis -->
      <section class="content-section">
        <h2 class="section-title">{t('intro.sections.regulation.title')}</h2>
        <div class="section-content">
          <p class="highlight-text">{t('intro.sections.regulation.quote')}</p>
          <p>{t('intro.sections.regulation.content1')}</p>
          <p>{t('intro.sections.regulation.content2')}</p>
        </div>
      </section>

      <!-- Balance Between Control and Quality -->
      <section class="content-section alt-bg">
        <h2 class="section-title">{t('intro.sections.balance.title')}</h2>
        <div class="section-content">
          <div class="comparison-grid">
            <div class="comparison-item">
              <h3>{t('intro.sections.balance.control.title')}</h3>
              <p>{t('intro.sections.balance.control.content')}</p>
            </div>
            <div class="comparison-item">
              <h3>{t('intro.sections.balance.quality.title')}</h3>
              <p>{t('intro.sections.balance.quality.content')}</p>
            </div>
          </div>
          <p class="section-conclusion">{t('intro.sections.balance.conclusion')}</p>
        </div>
      </section>

      <!-- AI Fact-Checking Limitations -->
      <section class="content-section">
        <h2 class="section-title">{t('intro.sections.aiLimitations.title')}</h2>
        <div class="section-content">
          <p class="lead-text">{t('intro.sections.aiLimitations.lead')}</p>
          <ul class="limitation-list">
            <li>{t('intro.sections.aiLimitations.point1')}</li>
            <li>{t('intro.sections.aiLimitations.point2')}</li>
            <li>{t('intro.sections.aiLimitations.point3')}</li>
          </ul>
          <p class="emphasis">{t('intro.sections.aiLimitations.conclusion')}</p>
        </div>
      </section>

      <!-- App Features -->
      <section class="content-section features-section">
        <h2 class="section-title">{t('intro.sections.features.title')}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>{t('intro.features.systematic.title')}</h3>
            <p>{t('intro.features.systematic.description')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>{t('intro.features.privacy.title')}</h3>
            <p>{t('intro.features.privacy.description')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>{t('intro.features.pwa.title')}</h3>
            <p>{t('intro.features.pwa.description')}</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>{t('intro.features.multilingual.title')}</h3>
            <p>{t('intro.features.multilingual.description')}</p>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="final-cta-section">
        <div class="cta-content">
          <h2>{t('intro.finalCta.title')}</h2>
          <p>{t('intro.finalCta.subtitle')}</p>
          <div class="cta-buttons">
            <a href="{base}/" class="cta-button primary large">
              {t('intro.cta.useChecklist')}
            </a>
            <a href="{base}/about" class="cta-button secondary">
              {t('intro.cta.learnMore')}
            </a>
          </div>
        </div>
      </section>

      <!-- Social Share -->
      <section class="share-section">
        <h3>{t('intro.share.title')}</h3>
        <div class="share-buttons">
          <button onclick={shareOnX} class="share-button x" aria-label="Share on X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </button>
          <button
            onclick={shareOnLinkedIn}
            class="share-button linkedin"
            aria-label="Share on LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </button>
          <button
            onclick={shareOnFacebook}
            class="share-button facebook"
            aria-label="Share on Facebook"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </button>
          {#if typeof navigator !== 'undefined' && navigator.share}
            <button onclick={shareNative} class="share-button native" aria-label="Share">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"
                />
              </svg>
            </button>
          {/if}
        </div>
      </section>
    </main>
  </div>
{:else}
  <div class="loading-container">
    <div class="loading-content">
      <div class="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  </div>
{/if}

<style>
  .intro-container {
    min-height: 100vh;
    background: var(--bg-color);
  }

  /* Loading State */
  .loading-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-color);
  }

  .loading-content {
    text-align: center;
  }

  .loading-spinner {
    width: 48px;
    height: 48px;
    border: 3px solid var(--color-primary-200);
    border-top: 3px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Hero Section */
  .hero-section {
    background: linear-gradient(135deg, var(--color-primary-400) 0%, var(--color-primary-700) 100%);
    color: white;
    padding: 1rem 1rem 5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .hero-header {
    display: flex;
    justify-content: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  .hero-language-switcher {
    opacity: 0.9;
  }

  .hero-language-switcher :global(.language-switcher) {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
  }

  .hero-language-switcher :global(.language-switcher select) {
    color: white;
    background: transparent;
  }

  .hero-language-switcher :global(.language-switcher select option) {
    color: var(--text-color);
    background: var(--bg-color);
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
      repeat;
    pointer-events: none;
  }

  .hero-content {
    max-width: 800px;
    margin: 2rem auto 0;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2.5rem;
    opacity: 0.95;
    line-height: 1.6;
  }

  .hero-cta {
    margin-top: 2rem;
  }

  /* Content Sections */
  .intro-content {
    background: var(--bg-color);
  }

  .content-section {
    padding: 4rem 1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .content-section.alt-bg {
    background: var(--surface-color);
    margin: 0;
    max-width: none;
  }

  .content-section.alt-bg .section-content {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }

  .section-content {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text-color-secondary);
  }

  .section-content p {
    margin-bottom: 1.5rem;
  }

  .highlight-text {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--primary-color);
    border-left: 4px solid var(--primary-color);
    padding-left: 1.5rem;
    margin: 2rem 0;
  }

  .lead-text {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 2rem;
  }

  .emphasis {
    font-weight: 600;
    color: var(--text-color);
    background: linear-gradient(to right, var(--color-primary-100), transparent);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-top: 2rem;
  }

  /* Comparison Grid */
  .comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .comparison-item {
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .comparison-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  .comparison-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .section-conclusion {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 2rem;
    color: var(--text-color);
  }

  /* Limitation List */
  .limitation-list {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
  }

  .limitation-list li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .limitation-list li::before {
    content: '⚠️';
    position: absolute;
    left: 0;
    top: 0;
  }

  /* Features Section */
  .features-section {
    background: var(--surface-color);
    padding: 4rem 1rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .feature-card {
    background: var(--bg-color);
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: var(--color-primary-300);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }

  .feature-card p {
    font-size: 1rem;
    color: var(--text-color-secondary);
    line-height: 1.6;
  }

  /* Final CTA Section */
  .final-cta-section {
    background: linear-gradient(135deg, var(--color-primary-300) 0%, var(--color-primary-600) 100%);
    padding: 5rem 1rem;
    text-align: center;
    color: white;
  }

  .cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .cta-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* CTA Buttons */
  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.125rem;
    position: relative;
    overflow: hidden;
  }

  .cta-button.large {
    padding: 1.25rem 3rem;
    font-size: 1.25rem;
  }

  .cta-button.primary {
    background: white;
    color: var(--primary-color);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .cta-button.primary:hover {
    background: var(--color-gray-50);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  .cta-button.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-button.secondary:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
  }

  .cta-icon {
    font-size: 1.5rem;
  }

  /* Share Section */
  .share-section {
    padding: 3rem 1rem;
    text-align: center;
    background: var(--surface-color);
  }

  .share-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }

  .share-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .share-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--border-color);
    background: var(--bg-color);
    color: var(--text-color-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .share-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .share-button.x:hover {
    background: #000;
    color: white;
    border-color: #000;
  }

  .share-button.linkedin:hover {
    background: #0077b5;
    color: white;
    border-color: #0077b5;
  }

  .share-button.facebook:hover {
    background: #1877f2;
    color: white;
    border-color: #1877f2;
  }

  .share-button.native:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }

  /* Dark mode adjustments */
  :global(.dark) .hero-section {
    background: linear-gradient(135deg, var(--color-primary-700) 0%, #1a1a1a 100%);
  }

  :global(.dark) .comparison-item {
    background: var(--surface-color);
  }

  :global(.dark) .feature-card {
    background: var(--surface-color);
  }

  :global(.dark) .final-cta-section {
    background: linear-gradient(135deg, #2a2a2a 0%, var(--color-primary-700) 100%);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.25rem;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .section-content {
      font-size: 1rem;
    }

    .cta-button {
      font-size: 1rem;
      padding: 0.875rem 2rem;
    }

    .cta-button.large {
      font-size: 1.125rem;
      padding: 1rem 2.5rem;
    }

    .feature-icon {
      font-size: 2.5rem;
    }

    .cta-content h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      padding: 3rem 1rem 4rem;
    }

    .hero-title {
      font-size: 1.875rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .content-section {
      padding: 3rem 1rem;
    }

    .comparison-item {
      padding: 1.5rem;
    }
  }
</style>
