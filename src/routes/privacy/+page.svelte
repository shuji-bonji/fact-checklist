<script lang="ts">
  import { t, tArray, i18nStore } from '$lib/i18n/index.js';

  // Svelte 5 runesでi18n初期化状態を監視
  const isInitialized = $derived(i18nStore.initialized && !!i18nStore.translations);

  // 配列翻訳用のヘルパー関数
  function getTranslationArray(key: string): string[] {
    const result = tArray(key);
    if (Array.isArray(result)) {
      return result;
    }
    return typeof result === 'string' ? [result] : [];
  }
</script>

<svelte:head>
  <title>{t('privacy.title')} - {t('app.title')}</title>
  <meta name="description" content={t('privacy.subtitle')} />
</svelte:head>

{#if isInitialized}
  <div class="container">
    <div class="privacy-header">
      <h1>🔐 {t('privacy.title')}</h1>
      <p class="last-updated">{t('privacy.lastUpdated')}</p>
    </div>

    <div class="privacy-content">
      <div class="intro-section">
        <h2>{t('privacy.introduction.title')}</h2>
        <p>{t('privacy.introduction.content')}</p>
      </div>

      <div class="data-items-section">
        <!-- データ収集について -->
        <div class="data-item" data-item-id="data-collection">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.dataCollection.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.dataCollection.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.dataCollection.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- ローカルストレージの使用 -->
        <div class="data-item" data-item-id="local-storage">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.localStorage.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.localStorage.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.localStorage.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- オフライン機能 -->
        <div class="data-item" data-item-id="offline-functionality">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.offlineFunctionality.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.offlineFunctionality.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.offlineFunctionality.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- セキュリティ対策 -->
        <div class="data-item" data-item-id="security-measures">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.securityMeasures.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.securityMeasures.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.securityMeasures.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- データ保持期間 -->
        <div class="data-item" data-item-id="data-retention">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.dataRetention.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.dataRetention.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.dataRetention.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- ポリシー更新 -->
        <div class="data-item" data-item-id="policy-updates">
          <div class="data-item-header">
            <h3 class="data-item-title">{t('privacy.policyUpdates.title')}</h3>
          </div>
          <div class="data-item-content">
            <p class="data-item-description">{t('privacy.policyUpdates.description')}</p>
            <ul class="data-item-details">
              {#each getTranslationArray('privacy.policyUpdates.details') as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2>{t('privacy.contact.title')}</h2>
        <p>
          {t('privacy.contact.content')}
          <a
            href="https://github.com/shuji-bonji/fact-checklist/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('privacy.contact.githubText')}
          </a>
          {t('privacy.contact.suffix')}
        </p>
      </div>
    </div>
  </div>
{:else}
  <div class="container">
    <div class="privacy-header">
      <h1>🔐 Loading...</h1>
      <p class="last-updated">Initializing translations...</p>
    </div>
  </div>
{/if}

<style>
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding: var(--spacing-6);
    min-height: 100vh;
  }

  /* ページヘッダー - モダンデザイン */
  .privacy-header {
    text-align: center;
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-8);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-2xl);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .privacy-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.03;
    pointer-events: none;
  }

  .privacy-header h1 {
    color: var(--text-color);
    margin: var(--spacing-4) 0;
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-light);
    font-family: var(--font-family-heading);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .last-updated {
    color: var(--text-color-secondary);
    font-size: var(--font-size-sm);
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .privacy-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-8);
  }

  /* イントロセクション - モダンデザイン */
  .intro-section {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: var(--spacing-6);
    position: relative;
    overflow: hidden;
  }

  .intro-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
  }

  .intro-section h2 {
    color: var(--text-color);
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-2xl);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-semibold);
    position: relative;
    z-index: 1;
  }

  .intro-section p {
    color: var(--text-color);
    line-height: var(--line-height-relaxed);
    margin: 0;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  .data-items-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  /* データアイテム - モダンデザイン */
  .data-item {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    padding: var(--spacing-6);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }

  .data-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
  }

  .data-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  }

  .data-item-header {
    margin-bottom: var(--spacing-4);
    position: relative;
    z-index: 1;
  }

  .data-item-title {
    color: var(--text-color);
    margin: 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-family-heading);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  .data-item-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
    position: relative;
    z-index: 1;
  }

  .data-item-description {
    color: var(--text-color-secondary);
    line-height: var(--line-height-relaxed);
    margin: 0;
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
  }

  .data-item-details {
    margin: 0;
    padding-left: var(--spacing-4);
    list-style-type: disc;
  }

  .data-item-details li {
    color: var(--text-color-muted);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-2);
    font-weight: var(--font-weight-normal);
    font-size: var(--font-size-sm);
  }

  .data-item-details li:last-child {
    margin-bottom: 0;
  }

  /* コンタクトセクション - モダンデザイン */
  .contact-section {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    padding: var(--spacing-6);
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .contact-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-accent);
  }

  .contact-section h2 {
    color: var(--text-color);
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-2xl);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-semibold);
    position: relative;
    z-index: 1;
  }

  .contact-section p {
    color: var(--text-color);
    line-height: var(--line-height-relaxed);
    margin: 0;
    font-size: var(--font-size-base);
    position: relative;
    z-index: 1;
  }

  .contact-section a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: var(--font-weight-semibold);
    border-bottom: 2px solid transparent;
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    z-index: 1;
  }

  .contact-section a:hover {
    border-bottom-color: var(--primary-color);
    color: var(--accent-color);
    transform: translateY(-1px);
  }

  /* ダークモード対応の強化 */
  :global(.dark) .data-item {
    background: linear-gradient(135deg, #2d3748, #374151);
    border-color: #4a5568;
    color: #f7fafc;
  }

  :global(.dark) .data-item:hover {
    background: linear-gradient(135deg, #374151, #4a5568);
    border-color: #63b3ed;
  }

  :global(.dark) .data-item-title {
    color: #f7fafc;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  :global(.dark) .data-item-description {
    color: #e2e8f0;
  }

  :global(.dark) .data-item-details li {
    color: #cbd5e0;
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .container {
      padding: var(--spacing-md);
    }

    .privacy-header h1 {
      font-size: 2em;
    }

    .data-item {
      padding: var(--spacing-md);
    }

    .data-item-title {
      font-size: 1.1em;
    }

    .intro-section,
    .contact-section {
      padding: var(--spacing-md);
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }

  /* フォーカス時の視認性向上 */
  .data-item:focus-within {
    outline: 3px solid var(--secondary-color);
    outline-offset: 3px;
  }
</style>
