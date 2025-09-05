<script lang="ts">
  import type { CheckItem } from '$lib/types/checklist.js';
  import { t, factChecklistI18n } from '$lib/i18n/index.js';

  interface Props {
    item: CheckItem;
    onCheckChange: (checked: boolean) => void;
  }

  const { item, onCheckChange }: Props = $props();

  let showGuide = $state(false);

  // 動的翻訳：translationKeyがあれば使用、なければ既存のtitle/descriptionを使用
  const displayTitle = $derived(() => {
    if (item.translationKey) {
      return factChecklistI18n.getCheckItemTitle(item.translationKey);
    }
    return item.title;
  });

  const displayDescription = $derived(() => {
    if (item.translationKey) {
      return factChecklistI18n.getCheckItemDescription(item.translationKey);
    }
    return item.description;
  });

  const displayGuideContent = $derived(() => {
    if (item.translationKey && item.guideContent) {
      return {
        title: factChecklistI18n.getCheckItemGuideTitle(item.translationKey),
        content: factChecklistI18n.getCheckItemGuideContent(item.translationKey),
        examples: {
          good: factChecklistI18n.getCheckItemExamplesGood(item.translationKey),
          bad: factChecklistI18n.getCheckItemExamplesBad(item.translationKey)
        }
      };
    }
    return item.guideContent;
  });

  function toggleGuide() {
    showGuide = !showGuide;
  }

  function handleCheckChange(event: Event) {
    const target = event.target as HTMLInputElement;
    onCheckChange(target.checked);
  }

  // リスクレベルに応じたスタイルクラス
  const riskClasses = {
    high: 'risk-high',
    medium: 'risk-medium',
    low: 'risk-low'
  };
</script>

<div class="check-item">
  <div class="check-content">
    <div class="checkbox-wrapper">
      <input
        type="checkbox"
        id="check-{item.id}"
        checked={item.checked}
        onchange={handleCheckChange}
        aria-describedby="desc-{item.id}"
      />
    </div>

    <div class="item-content">
      <div class="item-header">
        <label for="check-{item.id}" class="item-title">
          {displayTitle()}
        </label>
        <div class="item-controls">
          <span class="risk-indicator {riskClasses[item.riskLevel]}">
            {item.riskLevel === 'high'
              ? t('common.rip.high')
              : item.riskLevel === 'medium'
                ? t('common.rip.medium')
                : t('common.rip.low')}
          </span>
          {#if displayGuideContent()}
            <button
              type="button"
              class="guide-toggle"
              onclick={toggleGuide}
              aria-expanded={showGuide}
              aria-controls="guide-{item.id}"
              title={t('common.showGuide')}
            >
              {t('common.guide')}
            </button>
          {/if}
        </div>
      </div>

      <div id="desc-{item.id}" class="item-description">
        {displayDescription()}
      </div>

      {#if displayGuideContent() && showGuide}
        <div id="guide-{item.id}" class="detailed-guide" class:show={showGuide}>
          <div class="guide-section">
            <div class="guide-title">
              {displayGuideContent()?.title}
            </div>
            <div class="guide-content">
              {displayGuideContent()?.content}
            </div>

            {#if displayGuideContent()?.examples}
              {@const examples = displayGuideContent()?.examples}
              <div class="guide-examples">
                {#if examples?.good && examples.good.length > 0}
                  <div class="examples-section">
                    <h5>✅ {t('export.goodExamples')}:</h5>
                    {#each examples.good as example}
                      <div class="example-item good">{example}</div>
                    {/each}
                  </div>
                {/if}

                {#if examples?.bad && examples.bad.length > 0}
                  <div class="examples-section">
                    <h5>❌ {t('export.badExamples')}:</h5>
                    {#each examples.bad as example}
                      <div class="example-item bad">{example}</div>
                    {/each}
                  </div>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
  .check-item {
    margin-bottom: var(--spacing-3);
    padding: var(--spacing-4);
    background: var(--surface-elevated);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    border-left: 4px solid var(--secondary-color);
    transition: all var(--transition-base) var(--ease-out);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
  }

  .check-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
    pointer-events: none;
  }

  .check-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
  }

  .check-item:hover::before {
    opacity: 0.03;
  }

  .check-content {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-4);
    position: relative;
    z-index: 1;
  }

  .checkbox-wrapper {
    margin-top: var(--spacing-1);
    flex-shrink: 0;
    position: relative;
  }

  .checkbox-wrapper input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: var(--primary-color);
    transform: scale(1);
    transition: transform var(--transition-fast) var(--ease-bounce);
    border-radius: var(--radius-sm);
  }

  .checkbox-wrapper input[type='checkbox']:checked {
    transform: scale(1.1);
  }

  .checkbox-wrapper input[type='checkbox']:hover {
    transform: scale(1.05);
  }

  .item-content {
    flex: 1;
    min-width: 0;
  }

  .item-title {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-base);
    color: var(--text-color);
    margin-bottom: var(--spacing-1);
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    flex-wrap: wrap;
    cursor: pointer;
    line-height: var(--line-height-tight);
    transition: color var(--transition-fast) var(--ease-in-out);
  }

  .item-title:hover {
    color: var(--primary-color);
  }

  .item-description {
    color: var(--text-color-secondary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-snug);
    margin-bottom: var(--spacing-1);
  }

  .risk-indicator {
    padding: var(--spacing-1) var(--spacing-3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    box-shadow: var(--shadow-xs);
  }

  .risk-high {
    background: var(--color-error-100);
    color: var(--color-error-700);
    border: 1px solid var(--color-error-200);
  }

  .risk-medium {
    background: var(--color-warning-100);
    color: var(--color-warning-700);
    border: 1px solid var(--color-warning-200);
  }

  .risk-low {
    background: var(--color-success-100);
    color: var(--color-success-700);
    border: 1px solid var(--color-success-200);
  }

  .guide-toggle {
    background: var(--gradient-secondary);
    color: white;
    border: none;
    padding: var(--spacing-2) var(--spacing-4);
    margin-right: 8px;
    border-radius: var(--radius-full);
    cursor: pointer;
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-family-base);
    transition: all var(--transition-base) var(--ease-out);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
  }

  .guide-toggle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
  }

  .guide-toggle:hover::before {
    opacity: 1;
  }

  .guide-toggle:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-secondary);
  }

  .guide-toggle:focus {
    outline: 3px solid var(--secondary-color);
    outline-offset: 3px;
  }

  .detailed-guide {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    padding: var(--spacing-4);
    margin-top: var(--spacing-3);
    opacity: 0;
    transform: translateY(-10px);
    transition: all var(--transition-slow) var(--ease-out);
    box-shadow: var(--shadow-sm);
    position: relative;
  }

  .detailed-guide::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-mesh);
    opacity: 0.02;
    border-radius: var(--radius-lg);
    pointer-events: none;
  }

  .detailed-guide.show {
    opacity: 1;
    transform: translateY(0);
    box-shadow: var(--shadow-md);
  }

  .guide-title {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
    color: var(--text-color);
    margin-bottom: var(--spacing-4);
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    position: relative;
    z-index: 1;
  }

  .guide-content {
    color: var(--text-color);
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    margin-bottom: var(--spacing-4);
    white-space: pre-line;
    position: relative;
    z-index: 1;
  }

  .guide-examples {
    background: var(--surface-elevated);
    padding: var(--spacing-4);
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--secondary-color);
    box-shadow: var(--shadow-xs);
    position: relative;
    z-index: 1;
  }

  .examples-section {
    margin-bottom: var(--spacing-4);
  }

  .examples-section:last-child {
    margin-bottom: 0;
  }

  .examples-section h5 {
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-family-heading);
    margin: 0 0 var(--spacing-2) 0;
    color: var(--text-color);
  }

  .example-item {
    padding: var(--spacing-2) 0;
    border-bottom: 1px solid var(--border-color);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
  }

  .example-item:last-child {
    border-bottom: none;
  }

  .example-item.good {
    color: var(--success-color);
    font-weight: var(--font-weight-medium);
  }

  .example-item.bad {
    color: var(--error-color);
    font-weight: var(--font-weight-medium);
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    .check-item,
    .check-item::before,
    .guide-toggle,
    .guide-toggle::before,
    .detailed-guide,
    .detailed-guide::before,
    .checkbox-wrapper input[type='checkbox'] {
      transition: none !important;
    }
  }

  /* モバイル対応 */
  @media (max-width: 768px) {
    .check-item {
      padding: var(--spacing-4);
      margin-bottom: var(--spacing-3);
    }

    .check-content {
      gap: var(--spacing-3);
    }

    .item-title {
      font-size: var(--font-size-base);
      gap: var(--spacing-2);
    }

    .item-description {
      font-size: var(--font-size-sm);
    }

    .guide-toggle {
      padding: var(--spacing-1) var(--spacing-3);
      font-size: var(--font-size-xs);
    }

    .detailed-guide {
      padding: var(--spacing-4);
    }

    .guide-title {
      font-size: var(--font-size-lg);
    }

    .guide-content {
      font-size: var(--font-size-sm);
    }

    .checkbox-wrapper input[type='checkbox'] {
      width: 20px;
      height: 20px;
    }
  }
</style>
