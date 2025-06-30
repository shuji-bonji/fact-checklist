<script lang="ts">
  import { t, i18nStore } from '$lib/i18n/index.js';

  // Svelte 5 runesでi18n初期化状態を監視
  const isInitialized = $derived(i18nStore.initialized && !!i18nStore.translations);

  // ヘルプセクション
  interface HelpSection {
    id: string;
    title: string;
    emoji: string;
    description: string;
    content: string;
    htmlContent?: string; // HTML形式のコンテンツ（表など）
    subSections?: Array<{
      title: string;
      content: string;
      htmlContent?: string;
    }>;
  }

  // アクティブなセクション
  let activeSection = $state<string>('overview');

  // ヘルプデータ（翻訳対応）
  const helpSections = $derived(() => {
    if (!isInitialized) return [] as HelpSection[];

    return [
      {
        id: 'overview',
        title: t('help.sections.overview.title'),
        emoji: '📋',
        description: t('help.sections.overview.description'),
        content: t('help.sections.overview.content'),
        subSections: [
          {
            title: t('help.sections.overview.subSections.features.title'),
            content: t('help.sections.overview.subSections.features.content')
          },
          {
            title: t('help.sections.overview.subSections.targetUsers.title'),
            content: t('help.sections.overview.subSections.targetUsers.content')
          }
        ]
      },
      {
        id: 'usage',
        title: t('help.sections.usage.title'),
        emoji: '🚀',
        description: t('help.sections.usage.description'),
        content: t('help.sections.usage.content'),
        subSections: [
          {
            title: t('help.sections.usage.subSections.step1.title'),
            content: t('help.sections.usage.subSections.step1.content')
          },
          {
            title: t('help.sections.usage.subSections.step2.title'),
            content: t('help.sections.usage.subSections.step2.content')
          },
          {
            title: t('help.sections.usage.subSections.step3.title'),
            content: t('help.sections.usage.subSections.step3.content')
          },
          {
            title: t('help.sections.usage.subSections.step4.title'),
            content: t('help.sections.usage.subSections.step4.content')
          }
        ]
      },
      {
        id: 'categories',
        title: t('help.sections.categories.title'),
        emoji: '📊',
        description: t('help.sections.categories.description'),
        content: t('help.sections.categories.content'),
        subSections: [
          {
            title: t('help.sections.categories.subSections.critical.title'),
            content: t('help.sections.categories.subSections.critical.content')
          },
          {
            title: t('help.sections.categories.subSections.detailed.title'),
            content: t('help.sections.categories.subSections.detailed.content')
          },
          {
            title: t('help.sections.categories.subSections.verification.title'),
            content: t('help.sections.categories.subSections.verification.content')
          },
          {
            title: t('help.sections.categories.subSections.context.title'),
            content: t('help.sections.categories.subSections.context.content')
          }
        ]
      },
      {
        id: 'scoring',
        title: t('help.sections.scoring.title'),
        emoji: '🎯',
        description: t('help.sections.scoring.description'),
        content: t('help.sections.scoring.content'),
        subSections: [
          {
            title: t('help.sections.scoring.subSections.calculation.title'),
            content: t('help.sections.scoring.subSections.calculation.content')
          },
          {
            title: t('help.sections.scoring.subSections.criteria.title'),
            content: t('help.sections.scoring.subSections.criteria.content')
          },
          {
            title: t('help.sections.scoring.subSections.finalJudgment.title'),
            content: t('help.sections.scoring.subSections.finalJudgment.content')
          }
        ]
      },
      {
        id: 'features',
        title: t('help.sections.features.title'),
        emoji: '⚙️',
        description: t('help.sections.features.description'),
        content: t('help.sections.features.content'),
        subSections: [
          {
            title: t('help.sections.features.subSections.detailedGuide.title'),
            content: t('help.sections.features.subSections.detailedGuide.content')
          },
          {
            title: t('help.sections.features.subSections.exportFunction.title'),
            content: t('help.sections.features.subSections.exportFunction.content'),
            htmlContent: `
              <div class="export-details">
                <h4>${t('help.sections.features.subSections.exportFunction.exportFormats.title')}</h4>
                <div class="formats-grid">
                  <div class="format-card">
                    <h5>📄 ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.pdf.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportFormats.formats.pdf.features')}</p>
                    <small><strong>用途:</strong> ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.pdf.usage')}</small>
                  </div>
                  <div class="format-card">
                    <h5>🌐 ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.html.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportFormats.formats.html.features')}</p>
                    <small><strong>用途:</strong> ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.html.usage')}</small>
                  </div>
                  <div class="format-card">
                    <h5>⚙️ ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.json.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportFormats.formats.json.features')}</p>
                    <small><strong>用途:</strong> ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.json.usage')}</small>
                  </div>
                  <div class="format-card">
                    <h5>📝 ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.markdown.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportFormats.formats.markdown.features')}</p>
                    <small><strong>用途:</strong> ${t('help.sections.features.subSections.exportFunction.exportFormats.formats.markdown.usage')}</small>
                  </div>
                </div>
                
                <h4>${t('help.sections.features.subSections.exportFunction.pdfModes.title')}</h4>
                <div class="pdf-modes">
                  <div class="mode-card highlight">
                    <h5>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.pixelPerfect.name')} ${t('help.sections.features.subSections.exportFunction.pdfModes.modes.pixelPerfect.subtitle')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.pixelPerfect.description')}</p>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.pixelPerfect.features')}</p>
                  </div>
                  <div class="mode-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.reliableFont.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.reliableFont.description')}</p>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.reliableFont.features')}</p>
                  </div>
                  <div class="mode-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.textBased.name')} ${t('help.sections.features.subSections.exportFunction.pdfModes.modes.textBased.subtitle')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.textBased.description')}</p>
                    <p>${t('help.sections.features.subSections.exportFunction.pdfModes.modes.textBased.features')}</p>
                  </div>
                </div>
                
                <h4>${t('help.sections.features.subSections.exportFunction.exportOptions.title')}</h4>
                <div class="options-grid">
                  <div class="option-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.exportOptions.options.summary.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportOptions.options.summary.description')}</p>
                    <small><strong>対応形式:</strong> ${t('help.sections.features.subSections.exportFunction.exportOptions.options.summary.formats')}</small>
                  </div>
                  <div class="option-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.exportOptions.options.guides.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportOptions.options.guides.description')}</p>
                    <small><strong>対応形式:</strong> ${t('help.sections.features.subSections.exportFunction.exportOptions.options.guides.formats')}</small>
                  </div>
                  <div class="option-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.exportOptions.options.notes.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportOptions.options.notes.description')}</p>
                    <small><strong>対応形式:</strong> ${t('help.sections.features.subSections.exportFunction.exportOptions.options.notes.formats')}</small>
                  </div>
                  <div class="option-card">
                    <h5>${t('help.sections.features.subSections.exportFunction.exportOptions.options.sectionBreaks.name')}</h5>
                    <p>${t('help.sections.features.subSections.exportFunction.exportOptions.options.sectionBreaks.description')}</p>
                    <small><strong>対応形式:</strong> ${t('help.sections.features.subSections.exportFunction.exportOptions.options.sectionBreaks.formats')}</small>
                  </div>
                </div>
                
                <div class="export-note">
                  <p><strong>${t('help.sections.features.subSections.exportFunction.exportNote')}</strong></p>
                </div>
              </div>
            `
          },
          {
            title: t('help.sections.features.subSections.historyManagement.title'),
            content: t('help.sections.features.subSections.historyManagement.content')
          },
          {
            title: t('help.sections.features.subSections.pwaSupport.title'),
            content: t('help.sections.features.subSections.pwaSupport.content')
          }
        ]
      },
      {
        id: 'privacy',
        title: t('help.sections.privacy.title'),
        emoji: '🔐',
        description: t('help.sections.privacy.description'),
        content: t('help.sections.privacy.content'),
        subSections: [
          {
            title: t('help.sections.privacy.subSections.localStorage.title'),
            content: t('help.sections.privacy.subSections.localStorage.content')
          },
          {
            title: t('help.sections.privacy.subSections.security.title'),
            content: t('help.sections.privacy.subSections.security.content')
          },
          {
            title: t('help.sections.privacy.subSections.dataDeletion.title'),
            content: t('help.sections.privacy.subSections.dataDeletion.content')
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: t('help.sections.troubleshooting.title'),
        emoji: '🔧',
        description: t('help.sections.troubleshooting.description'),
        content: t('help.sections.troubleshooting.content'),
        subSections: [
          {
            title: t('help.sections.troubleshooting.subSections.dataNotSaved.title'),
            content: t('help.sections.troubleshooting.subSections.dataNotSaved.content')
          },
          {
            title: t('help.sections.troubleshooting.subSections.scoreNotDisplayed.title'),
            content: t('help.sections.troubleshooting.subSections.scoreNotDisplayed.content')
          },
          {
            title: t('help.sections.troubleshooting.subSections.exportFailed.title'),
            content: t('help.sections.troubleshooting.subSections.exportFailed.content')
          },
          {
            title: t('help.sections.troubleshooting.subSections.otherIssues.title'),
            content: t('help.sections.troubleshooting.subSections.otherIssues.content')
          }
        ]
      }
    ];
  });

  function setActiveSection(sectionId: string) {
    activeSection = sectionId;
  }

  function sanitizeHtml(content: string): string {
    return content
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\n/g, '<br>');
  }
</script>

<svelte:head>
  <title>{isInitialized ? `${t('help.title')} - ${t('app.title')}` : 'Help - Fact Checklist'}</title
  >
  <meta
    name="description"
    content={isInitialized ? t('help.subtitle') : 'How to use Fact Checklist'}
  />
</svelte:head>

{#if isInitialized}
  <div class="help-container">
    <!-- ヘッダー -->
    <div class="help-header">
      <h1>📖 {t('help.title')}</h1>
      <p class="help-subtitle">{t('help.subtitle')}</p>
    </div>

    <div class="help-main">
      <!-- ナビゲーション -->
      <nav class="help-nav">
        <div class="nav-header">
          <h2>📚 {t('help.tableOfContents')}</h2>
        </div>
        <ul class="nav-list">
          {#each helpSections() as section (section.id)}
            <li class="nav-item">
              <button
                class="help-nav-link"
                class:active={activeSection === section.id}
                onclick={() => setActiveSection(section.id)}
              >
                <span class="nav-emoji">{section.emoji}</span>
                <span class="nav-title">{section.title}</span>
              </button>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- コンテンツ -->
      <div class="help-content">
        {#each helpSections() as section (section.id)}
          {#if activeSection === section.id}
            <div class="content-section">
              <div class="section-header">
                <h2 class="section-title">
                  {section.emoji}
                  {section.title}
                </h2>
                <p class="section-description">{section.description}</p>
              </div>

              <div class="section-content">
                <div class="main-content-text">
                  {@html sanitizeHtml(section.content)}
                </div>

                {#if section.subSections}
                  <div class="sub-sections">
                    {#each section.subSections as subSection}
                      <div class="sub-section">
                        <h3 class="sub-section-title">{subSection.title}</h3>
                        <div class="sub-section-content">
                          {#if subSection.htmlContent}
                            {@html subSection.htmlContent}
                          {:else}
                            {@html sanitizeHtml(subSection.content)}
                          {/if}
                        </div>
                      </div>
                    {/each}
                  </div>
                {/if}
              </div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <style>
    /* helpページ専用スタイル - グローバル影響を防ぐ */
    .help-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: var(--spacing-6);
      min-height: 100vh;
    }

    /* Svelteスコープドスタイルの強制 */
    :global(body) {
      /* ヘルプページでのレイアウト修正を防ぐ */
    }

    /* ページヘッダー - モダンデザイン */
    .help-header {
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

    .help-header::before {
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

    .help-header h1 {
      margin: 0 0 var(--spacing-4) 0;
      font-size: var(--font-size-5xl);
      font-weight: var(--font-weight-light);
      font-family: var(--font-family-heading);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color: var(--text-color);
      position: relative;
      z-index: 1;
    }

    .help-subtitle {
      margin: 0;
      font-size: var(--font-size-lg);
      color: var(--text-color-secondary);
      font-weight: var(--font-weight-medium);
      position: relative;
      z-index: 1;
    }

    .help-main {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: var(--spacing-8);
      align-items: start;
    }

    /* ナビゲーション - モダンデザイン */
    .help-nav {
      position: sticky;
      top: var(--spacing-6);
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: var(--radius-xl);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      position: relative;
      overflow: hidden;
    }

    .help-nav::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-primary);
      opacity: 0.02;
      pointer-events: none;
    }

    .nav-header {
      padding: var(--spacing-4);
      border-bottom: 1px solid var(--border-color-subtle);
      background: rgba(var(--primary-rgb), 0.05);
      position: relative;
      z-index: 1;
    }

    .nav-header h2 {
      margin: 0;
      font-size: var(--font-size-lg);
      color: var(--text-color);
      font-weight: var(--font-weight-semibold);
      font-family: var(--font-family-heading);
    }

    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-item {
      border-bottom: 1px solid var(--border-color-subtle);
    }

    .nav-item:last-child {
      border-bottom: none;
    }

    .help-nav-link {
      display: flex;
      align-items: center;
      gap: var(--spacing-3);
      padding: var(--spacing-4);
      width: 100%;
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
      transition: all var(--transition-base) var(--ease-out);
      color: var(--text-color);
      font-weight: var(--font-weight-medium);
      position: relative;
      z-index: 1;
      border-radius: var(--radius-md);
      margin: var(--spacing-1);
    }

    .help-nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-primary);
      opacity: 0;
      transition: opacity var(--transition-base) var(--ease-out);
      border-radius: var(--radius-md);
    }

    .help-nav-link:hover::before {
      opacity: 0.1;
    }

    .help-nav-link:hover {
      transform: translateX(4px);
      color: white;
    }

    .help-nav-link.active {
      background: var(--gradient-primary);
      color: white;
      font-weight: var(--font-weight-semibold);
      box-shadow: var(--shadow-md);
    }

    .help-nav-link.active::before {
      opacity: 0;
    }

    .nav-emoji {
      font-size: var(--font-size-lg);
      position: relative;
      z-index: 1;
    }

    .nav-title {
      font-size: var(--font-size-sm);
      line-height: var(--line-height-tight);
      position: relative;
      z-index: 1;
    }

    /* コンテンツエリア - モダンデザイン */
    .help-content {
      background: rgba(255, 255, 255, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-radius: var(--radius-xl);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      position: relative;
      overflow: hidden;
    }

    .help-content::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--gradient-accent);
      opacity: 0.02;
      pointer-events: none;
    }

    .content-section {
      padding: var(--spacing-8);
      position: relative;
      z-index: 1;
    }

    .section-header {
      margin-bottom: var(--spacing-8);
      padding-bottom: var(--spacing-6);
      border-bottom: 2px solid var(--border-color-subtle);
    }

    .section-title {
      margin: 0 0 var(--spacing-4) 0;
      font-size: var(--font-size-4xl);
      font-weight: var(--font-weight-light);
      color: var(--text-color);
      font-family: var(--font-family-heading);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .section-description {
      margin: 0;
      font-size: var(--font-size-lg);
      line-height: var(--line-height-relaxed);
      color: var(--text-color-secondary);
      font-weight: var(--font-weight-medium);
    }

    .section-content {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-6);
    }

    .main-content-text {
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
      color: var(--text-color);
      background: rgba(255, 255, 255, 0.5);
      padding: var(--spacing-4);
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color-subtle);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .sub-sections {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-6);
    }

    .sub-section {
      background: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: var(--radius-lg);
      padding: var(--spacing-6);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      position: relative;
      overflow: hidden;
    }

    .sub-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--gradient-primary);
    }

    .sub-section-title {
      margin: 0 0 var(--spacing-4) 0;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      color: var(--text-color);
      font-family: var(--font-family-heading);
      border-bottom: 1px solid var(--border-color-subtle);
      padding-bottom: var(--spacing-2);
    }

    .sub-section-content {
      line-height: var(--line-height-relaxed);
      color: var(--text-color);
      font-weight: var(--font-weight-normal);
      background: rgba(255, 255, 255, 0.4);
      padding: var(--spacing-3);
      border-radius: var(--radius-md);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    /* レスポンシブ対応 */
    @media (max-width: 1024px) {
      .help-main {
        grid-template-columns: 1fr;
        gap: var(--spacing-6);
      }

      .help-nav {
        position: static;
        order: -1;
      }

      .nav-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--spacing-2);
      }

      .nav-item {
        border-bottom: none;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
      }
    }

    @media (max-width: 768px) {
      .help-container {
        padding: var(--spacing-4);
      }

      .help-header {
        padding: var(--spacing-6);
      }

      .help-header h1 {
        font-size: 2em;
      }

      .content-section {
        padding: var(--spacing-6);
      }

      .section-title {
        font-size: 1.6em;
      }

      .nav-list {
        grid-template-columns: 1fr;
      }
    }

    /* エクスポート機能詳細スタイル */
    .export-details {
      margin-top: var(--spacing-4);
    }

    .export-details h4 {
      margin: var(--spacing-6) 0 var(--spacing-4) 0;
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-semibold);
      color: var(--text-color);
      border-bottom: 2px solid var(--border-color);
      padding-bottom: var(--spacing-2);
    }

    .formats-grid,
    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-4);
      margin: var(--spacing-4) 0;
    }

    .format-card,
    .option-card {
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all var(--transition-base) var(--ease-out);
    }

    .format-card:hover,
    .option-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .format-card h5,
    .option-card h5 {
      margin: 0 0 var(--spacing-2) 0;
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--text-color);
    }

    .format-card p,
    .option-card p {
      margin: var(--spacing-2) 0;
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
      color: var(--text-color);
      white-space: pre-line;
    }

    .format-card small,
    .option-card small {
      display: block;
      margin-top: var(--spacing-2);
      font-size: var(--font-size-xs);
      color: var(--text-color-secondary);
    }

    .pdf-modes {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-3);
      margin: var(--spacing-4) 0;
    }

    .mode-card {
      background: rgba(255, 255, 255, 0.7);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      padding: var(--spacing-4);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      transition: all var(--transition-base) var(--ease-out);
    }

    .mode-card.highlight {
      border-color: var(--primary-color);
      background: rgba(var(--primary-rgb), 0.05);
      box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.1);
    }

    .mode-card:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .mode-card h5 {
      margin: 0 0 var(--spacing-2) 0;
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-semibold);
      color: var(--text-color);
    }

    .mode-card p {
      margin: var(--spacing-2) 0;
      font-size: var(--font-size-sm);
      line-height: var(--line-height-relaxed);
      color: var(--text-color);
      white-space: pre-line;
    }

    .export-note {
      background: rgba(255, 235, 59, 0.1);
      border: 1px solid rgba(255, 235, 59, 0.3);
      border-radius: var(--radius-md);
      padding: var(--spacing-4);
      margin: var(--spacing-4) 0;
    }

    .export-note p {
      margin: 0;
      font-size: var(--font-size-sm);
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      .formats-grid,
      .options-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .format-card,
      .option-card,
      .mode-card {
        transition: none !important;
      }
    }
  </style>
{:else}
  <div class="help-container">
    <div class="help-header">
      <h1>📖 Loading...</h1>
      <p class="help-subtitle">Initializing help content...</p>
    </div>
  </div>
{/if}
