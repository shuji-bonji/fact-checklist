<script lang="ts">
  import { base } from '$app/paths';
  import { goto } from '$app/navigation';
  import { page as _page } from '$app/stores';
  import { t, tArray } from '$lib/i18n/simple-store.svelte.js';

  // シンプルストアは常に初期化済み
  const isInitialized = true;

  // アプリの特徴
  interface Feature {
    id: string;
    emoji: string;
    title: string;
    description: string;
    details: string[];
  }

  // 使い方ステップ
  interface Step {
    id: string;
    number: number;
    title: string;
    description: string;
    emoji: string;
  }

  // カテゴリ情報
  interface Category {
    id: string;
    name: string;
    emoji: string;
    description: string;
    items: number;
    color: string;
  }

  // 技術スタック
  interface TechItem {
    id: string;
    name: string;
    description: string;
    icon: string;
    category: string;
  }

  // データ定義（i18n対応）
  const features = $derived<Feature[]>([
    {
      id: 'privacy',
      emoji: '🔐',
      title: t('about.features.privacy.title'),
      description: t('about.features.privacy.description'),
      details: tArray('about.features.privacy.details') as string[]
    },
    {
      id: 'offline',
      emoji: '📱',
      title: t('about.features.offline.title'),
      description: t('about.features.offline.description'),
      details: tArray('about.features.offline.details') as string[]
    },
    {
      id: 'scientific',
      emoji: '📊',
      title: t('about.features.scientific.title'),
      description: t('about.features.scientific.description'),
      details: tArray('about.features.scientific.details') as string[]
    },
    {
      id: 'export',
      emoji: '📄',
      title: t('about.features.export.title'),
      description: t('about.features.export.description'),
      details: tArray('about.features.export.details') as string[]
    },
    {
      id: 'history',
      emoji: '🔄',
      title: t('about.features.history.title'),
      description: t('about.features.history.description'),
      details: tArray('about.features.history.details') as string[]
    },
    {
      id: 'support',
      emoji: '♿',
      title: t('about.features.support.title'),
      description: t('about.features.support.description'),
      details: tArray('about.features.support.details') as string[]
    }
  ]);

  const steps = $derived<Step[]>([
    {
      id: 'step1',
      number: 1,
      title: t('about.steps.step1.title'),
      description: t('about.steps.step1.description'),
      emoji: '📝'
    },
    {
      id: 'step2',
      number: 2,
      title: t('about.steps.step2.title'),
      description: t('about.steps.step2.description'),
      emoji: '✅'
    },
    {
      id: 'step3',
      number: 3,
      title: t('about.steps.step3.title'),
      description: t('about.steps.step3.description'),
      emoji: '⚖️'
    },
    {
      id: 'step4',
      number: 4,
      title: t('about.steps.step4.title'),
      description: t('about.steps.step4.description'),
      emoji: '📋'
    }
  ]);

  const categories = $derived<Category[]>([
    {
      id: 'critical',
      name: t('about.categories.critical.name'),
      emoji: '🚨',
      description: t('about.categories.critical.description'),
      items: 6,
      color: '#e74c3c'
    },
    {
      id: 'detailed',
      name: t('about.categories.detailed.name'),
      emoji: '📝',
      description: t('about.categories.detailed.description'),
      items: 5,
      color: '#f39c12'
    },
    {
      id: 'verification',
      name: t('about.categories.verification.name'),
      emoji: '🔍',
      description: t('about.categories.verification.description'),
      items: 5,
      color: '#3498db'
    },
    {
      id: 'context',
      name: t('about.categories.context.name'),
      emoji: '🌐',
      description: t('about.categories.context.description'),
      items: 4,
      color: '#9b59b6'
    }
  ]);

  const techStack = $derived<TechItem[]>([
    {
      id: 'frontend',
      name: t('about.techStack.frontend.name'),
      description: t('about.techStack.frontend.description'),
      icon: '🔧',
      category: 'frontend'
    },
    {
      id: 'framework',
      name: t('about.techStack.framework.name'),
      description: t('about.techStack.framework.description'),
      icon: '⚡',
      category: 'frontend'
    },
    {
      id: 'language',
      name: t('about.techStack.language.name'),
      description: t('about.techStack.language.description'),
      icon: '💪',
      category: 'language'
    },
    {
      id: 'styling',
      name: t('about.techStack.styling.name'),
      description: t('about.techStack.styling.description'),
      icon: '🎨',
      category: 'styling'
    },
    {
      id: 'pwa',
      name: t('about.techStack.pwa.name'),
      description: t('about.techStack.pwa.description'),
      icon: '📱',
      category: 'platform'
    },
    {
      id: 'export',
      name: t('about.techStack.export.name'),
      description: t('about.techStack.export.description'),
      icon: '💾',
      category: 'export'
    }
  ]);

  function startEvaluation() {
    goto(base || '/');
  }
</script>

<!-- Meta tags are now handled by server-side layout only to prevent duplicates -->

{#if isInitialized}
  <div class="container">
    <!-- ヒーローセクション -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">🔍 {t('about.hero.title')}</h1>
        <p class="hero-subtitle">{t('about.hero.subtitle')}</p>
        <div class="hero-description">
          {#each tArray('about.hero.description') as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
        <div class="hero-cta">
          <button type="button" class="btn btn-primary btn-large" onclick={startEvaluation}>
            🚀 {t('about.hero.startButton')}
          </button>
        </div>
      </div>
    </section>

    <!-- 特徴セクション -->
    <section class="features-section">
      <div class="section-header">
        <h2>✨ {t('about.sections.features')}</h2>
        <p>{t('about.subtitle')}</p>
      </div>
      <div class="features-grid">
        {#each features as feature (feature.id)}
          <div class="feature-card">
            <div class="feature-icon">{feature.emoji}</div>
            <div class="feature-content">
              <h3 class="feature-title">{feature.title}</h3>
              <p class="feature-description">{feature.description}</p>
              <ul class="feature-details">
                {#each feature.details as detail}
                  <li>{detail}</li>
                {/each}
              </ul>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- 使い方セクション -->
    <section class="steps-section">
      <div class="section-header">
        <h2>🚀 {t('about.sections.howItWorks')}</h2>
        <p>{t('about.sectionDescriptions.howItWorks')}</p>
      </div>
      <div class="steps-grid">
        {#each steps as step (step.id)}
          <div class="step">
            <div class="step-number">{step.number}</div>
            <div class="step-content">
              <div class="step-emoji">{step.emoji}</div>
              <h3 class="step-title">{step.title}</h3>
              <p class="step-description">{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- 評価カテゴリセクション -->
    <section class="categories-section">
      <div class="section-header">
        <h2>📊 {t('about.sections.categories')}</h2>
        <p>{t('about.sectionDescriptions.categories')}</p>
      </div>
      <div class="categories-grid">
        {#each categories as category (category.id)}
          <div class="category-card" style:--category-color={category.color}>
            <div class="category-icon">{category.emoji}</div>
            <div class="category-content">
              <h3 class="category-title">{category.name}</h3>
              <p class="category-description">{category.description}</p>
              <div class="category-items">
                <span class="category-count">{category.items}{t('units.items')}</span>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- 技術スタックセクション -->
    <section class="tech-section">
      <div class="section-header">
        <h2>⚙️ {t('about.sections.techStack')}</h2>
        <p>{t('about.sectionDescriptions.techStack')}</p>
      </div>
      <div class="tech-grid">
        {#each techStack as tech (tech.id)}
          <div class="tech-item">
            <div class="tech-icon">{tech.icon}</div>
            <div class="tech-content">
              <h4 class="tech-name">{tech.name}</h4>
              <p class="tech-description">{tech.description}</p>
              <span class="tech-category">{tech.category}</span>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <!-- 統計情報セクション -->
    <section class="stats-section">
      <div class="section-header">
        <h2>📈 {t('about.sections.performance')}</h2>
        <p>{t('about.sectionDescriptions.performance')}</p>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">95+</div>
          <div class="stat-label">{t('about.stats.performance')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100</div>
          <div class="stat-label">{t('about.stats.accessibility')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100</div>
          <div class="stat-label">{t('about.stats.bestPractices')}</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">100</div>
          <div class="stat-label">{t('about.stats.seo')}</div>
        </div>
      </div>
    </section>

    <!-- CTAセクション -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>🌟 {t('about.cta.title')}</h2>
        <p>{t('about.cta.description')}</p>
        <div class="cta-buttons">
          <button type="button" class="btn btn-primary btn-large" onclick={startEvaluation}>
            🔍 {t('about.cta.startButton')}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-large"
            onclick={() => goto(`${base}/help`)}
          >
            📖 {t('about.cta.helpButton')}
          </button>
        </div>
      </div>
    </section>
  </div>
{:else}
  <div class="container">
    <div class="loading">
      <h1>Loading...</h1>
    </div>
  </div>
{/if}

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-6);
  }

  /* ページヘッダー - モダンデザイン */
  .hero {
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

  .hero::before {
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

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-title {
    color: var(--text-color);
    margin: 0 0 var(--spacing-4) 0;
    font-family: var(--font-family-heading);
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-light);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .hero-subtitle {
    color: var(--text-color-secondary);
    margin: 0 0 var(--spacing-6) 0;
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  .hero-description {
    margin: 0 0 var(--spacing-8) 0;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--text-color);
    position: relative;
    z-index: 1;
  }

  .hero-description p {
    margin: 0 0 var(--spacing-4) 0;
    color: var(--text-color-secondary);
  }

  .hero-cta {
    margin-top: var(--spacing-8);
    position: relative;
    z-index: 1;
  }

  /* セクション - モダンデザイン */
  .features-section,
  .steps-section,
  .categories-section,
  .tech-section,
  .stats-section {
    margin-bottom: var(--spacing-8);
  }

  .section-header {
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

  .section-header::before {
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

  .section-header h2 {
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-4xl);
    color: var(--text-color);
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-light);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
  }

  .section-header p {
    margin: 0;
    font-size: var(--font-size-lg);
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-6);
  }

  .feature-card {
    padding: var(--spacing-6);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }

  .feature-card::before {
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

  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  }

  .feature-card:hover::before {
    opacity: 0.03;
  }

  .feature-icon {
    font-size: 3em;
    margin-bottom: var(--spacing-4);
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .feature-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 var(--spacing-3) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
    position: relative;
    z-index: 1;
  }

  .feature-description {
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    margin: 0 0 var(--spacing-4) 0;
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  .feature-details {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    z-index: 1;
  }

  .feature-details li {
    padding: var(--spacing-2) 0;
    border-bottom: 1px solid var(--border-color-subtle);
    font-size: var(--font-size-sm);
    color: var(--text-color-muted);
    font-weight: var(--font-weight-normal);
  }

  .feature-details li:before {
    content: '✓';
    color: var(--accent-color);
    font-weight: var(--font-weight-bold);
    margin-right: var(--spacing-2);
  }

  .feature-details li:last-child {
    border-bottom: none;
  }

  /* ステップグリッド - モダンデザイン */
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-6);
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4);
    padding: var(--spacing-6);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }

  .step::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-accent);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .step:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  }

  .step:hover::before {
    opacity: 0.05;
  }

  .step-number {
    background: var(--gradient-accent);
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-lg);
    flex-shrink: 0;
    box-shadow: var(--shadow-lg);
    position: relative;
    z-index: 1;
  }

  .step-content {
    flex: 1;
    position: relative;
    z-index: 1;
  }

  .step-emoji {
    font-size: 2em;
    margin-bottom: var(--spacing-2);
  }

  .step-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 var(--spacing-2) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
  }

  .step-description {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    margin: 0;
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-normal);
  }

  /* カテゴリグリッド - モダンデザイン */
  .categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-6);
  }

  .category-card {
    padding: var(--spacing-6);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base) var(--ease-out);
    position: relative;
    overflow: hidden;
  }

  .category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--category-color), rgba(var(--category-color), 0.8));
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.12);
  }

  .category-card:hover::before {
    opacity: 0.03;
  }

  .category-icon {
    font-size: 2.5em;
    margin-bottom: var(--spacing-4);
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .category-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 var(--spacing-3) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
    position: relative;
    z-index: 1;
  }

  .category-description {
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    margin: 0 0 var(--spacing-4) 0;
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-normal);
    position: relative;
    z-index: 1;
  }

  .category-items {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .category-count {
    display: inline-block;
    background: var(--gradient-accent);
    color: white;
    padding: var(--spacing-2) var(--spacing-4);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    box-shadow: var(--shadow-md);
  }

  /* テックグリッド - モダンデザイン */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-4);
  }

  .tech-item {
    padding: var(--spacing-4);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all var(--transition-base) var(--ease-out);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .tech-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .tech-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .tech-item:hover::before {
    opacity: 0.02;
  }

  .tech-icon {
    font-size: 2em;
    margin-bottom: var(--spacing-2);
    position: relative;
    z-index: 1;
  }

  .tech-name {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    margin: 0 0 var(--spacing-2) 0;
    color: var(--text-color);
    font-family: var(--font-family-heading);
    position: relative;
    z-index: 1;
  }

  .tech-description {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    margin: 0 0 var(--spacing-2) 0;
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-normal);
    position: relative;
    z-index: 1;
  }

  .tech-category {
    display: inline-block;
    background: var(--gradient-accent);
    color: white;
    padding: var(--spacing-1) var(--spacing-2);
    border-radius: var(--radius-md);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  /* 統計セクション - モダンデザイン */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--spacing-6);
  }

  .stat-item {
    text-align: center;
    padding: var(--spacing-6);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-accent);
    opacity: 0.03;
    pointer-events: none;
  }

  .stat-value {
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-bold);
    color: var(--accent-color);
    margin-bottom: var(--spacing-2);
    font-family: var(--font-family-heading);
    position: relative;
    z-index: 1;
  }

  .stat-label {
    font-size: var(--font-size-base);
    color: var(--text-color);
    font-weight: var(--font-weight-semibold);
    position: relative;
    z-index: 1;
  }

  /* CTAセクション - モダンデザイン */
  .cta-section {
    background: var(--gradient-primary);
    color: white;
    padding: var(--spacing-8);
    border-radius: var(--radius-2xl);
    text-align: center;
    box-shadow: var(--shadow-primary);
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    pointer-events: none;
  }

  .cta-content h2 {
    font-size: var(--font-size-4xl);
    margin: 0 0 var(--spacing-4) 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    color: white;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-light);
    position: relative;
    z-index: 1;
  }

  .cta-content p {
    font-size: var(--font-size-lg);
    margin: 0 0 var(--spacing-8) 0;
    opacity: 0.95;
    color: rgba(255, 255, 255, 0.95);
    position: relative;
    z-index: 1;
    line-height: var(--line-height-relaxed);
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: var(--spacing-4);
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .btn-large {
    padding: var(--spacing-4) var(--spacing-8);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base) var(--ease-out);
  }

  /* ダークモード対応の強化 */
  :global(.dark) .hero {
    background: linear-gradient(135deg, #1a202c, #2d3748);
    border-color: #4a5568;
  }

  :global(.dark) .section-header {
    background: linear-gradient(135deg, #374151, #4a5568);
    border-color: #4a5568;
  }

  :global(.dark) .feature-card,
  :global(.dark) .step,
  :global(.dark) .category-card,
  :global(.dark) .tech-item {
    background: linear-gradient(135deg, #2d3748, #374151);
    border-color: #4a5568;
    color: #f7fafc;
  }

  :global(.dark) .feature-title,
  :global(.dark) .step-title,
  :global(.dark) .category-title,
  :global(.dark) .tech-name,
  :global(.dark) .section-header h2 {
    color: #f7fafc;
  }

  :global(.dark) .feature-description,
  :global(.dark) .step-description,
  :global(.dark) .category-description,
  :global(.dark) .tech-description,
  :global(.dark) .section-header p {
    color: #e2e8f0;
  }

  :global(.dark) .cta-section {
    background: linear-gradient(135deg, #1a202c, #2d3748);
    border-color: #4a5568;
  }

  :global(.dark) .cta-content h2 {
    color: #f7fafc;
  }

  :global(.dark) .cta-content p {
    color: rgba(247, 250, 252, 0.9);
  }

  :global(.dark) .stat-item {
    background: linear-gradient(135deg, #374151, #4a5568);
    border-color: #4a5568;
    border-left-color: #68d391;
  }

  :global(.dark) .stat-value {
    color: #68d391;
  }

  :global(.dark) .stat-label {
    color: #f7fafc;
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .container {
      padding: var(--spacing-4);
    }

    .hero {
      padding: var(--spacing-md);
    }

    .hero-title {
      font-size: 2.2em;
    }

    .hero-subtitle {
      font-size: 1.1em;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }

    .steps-grid {
      grid-template-columns: 1fr;
    }

    .step {
      flex-direction: column;
      text-align: center;
    }

    .step-number {
      align-self: center;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn-large {
      width: 100%;
      max-width: 300px;
    }
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }

  /* フォーカス時の視認性向上 */
  .feature-card:focus-within,
  .step:focus-within,
  .category-card:focus-within,
  .tech-item:focus-within {
    outline: 3px solid var(--primary-color);
    outline-offset: 3px;
  }

  /* ローディング状態 */
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    color: var(--text-color-secondary);
  }
</style>
