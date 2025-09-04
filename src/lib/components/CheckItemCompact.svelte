<script lang="ts">
  import type { CheckItem } from '$lib/types/checklist.js';
  import { factChecklistI18n } from '$lib/i18n/index.js';

  interface Props {
    item: CheckItem;
    onCheckChange: (checked: boolean) => void;
  }

  const { item, onCheckChange }: Props = $props();

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

<div class="check-item-compact">
  <input
    type="checkbox"
    class="checkbox-compact"
    id="check-{item.id}"
    checked={item.checked}
    onchange={handleCheckChange}
    aria-describedby="desc-{item.id}"
  />

  <div class="item-content-compact">
    <label for="check-{item.id}" class="item-header-compact">
      <span class="item-title-compact">
        {displayTitle()}
      </span>
      <span class="risk-indicator-compact {riskClasses[item.riskLevel]}">
        {item.riskLevel === 'high' ? '高' : item.riskLevel === 'medium' ? '中' : '低'}
      </span>
    </label>

    <div id="desc-{item.id}" class="item-description-compact">
      {displayDescription()}
    </div>
  </div>
</div>

<style>
  /* コンパクトなチェックリストアイテム */
  .check-item-compact {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-3);
    padding: var(--spacing-3);
    margin-bottom: var(--spacing-2);
    background: var(--surface-elevated);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-color);
    border-left: 3px solid var(--secondary-color);
    transition: all var(--transition-base) var(--ease-out);
  }

  .check-item-compact:hover {
    background: var(--surface-color);
    box-shadow: var(--shadow-sm);
    transform: translateX(2px);
  }

  .checkbox-compact {
    width: 18px;
    height: 18px;
    margin-top: 2px;
    cursor: pointer;
    accent-color: var(--primary-color);
    flex-shrink: 0;
  }

  .item-content-compact {
    flex: 1;
    min-width: 0;
  }

  .item-header-compact {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    cursor: pointer;
    margin-bottom: var(--spacing-1);
  }

  .item-title-compact {
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    color: var(--text-color);
    line-height: var(--line-height-tight);
  }

  .item-title-compact:hover {
    color: var(--primary-color);
  }

  .risk-indicator-compact {
    padding: 2px 8px;
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-wide);
    white-space: nowrap;
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

  .item-description-compact {
    font-size: var(--font-size-sm);
    color: var(--text-color-secondary);
    line-height: var(--line-height-snug);
  }

  /* モバイル対応 */
  @media (max-width: 768px) {
    .check-item-compact {
      padding: var(--spacing-2);
      gap: var(--spacing-2);
    }
  }
</style>
