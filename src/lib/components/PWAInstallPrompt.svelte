<!-- src/lib/components/PWAInstallPrompt.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { t } from '$lib/i18n/simple-store.svelte.js';
  import { setupPWAInstallPrompt, type PWAInstallPrompt } from '$lib/utils/pwa-register.js';

  interface Props {
    variant: 'success' | 'subtle' | 'feature' | 'persistent';
    title?: string;
    message?: string;
    showBenefits?: boolean;
    page?: string; // 分析用
    condition?: () => boolean; // 表示条件
  }

  const {
    variant = 'subtle',
    title,
    message,
    showBenefits = false,
    page = 'unknown',
    condition
  }: Props = $props();

  // PWA状態管理
  let pwaInstall: PWAInstallPrompt | null = null;
  let canInstall = $state(false);
  let isInstalling = $state(false);
  let installResult = $state<'success' | 'dismissed' | null>(null);
  let isVisible = $state(false);

  // 分析用のトラッキング
  function trackPWAEvent(event: string) {
    try {
      const data = JSON.parse(localStorage.getItem('pwa-analytics') || '{}');
      const key = `${page}_${event}`;
      data[key] = (data[key] || 0) + 1;
      data.lastUpdate = new Date().toISOString();
      localStorage.setItem('pwa-analytics', JSON.stringify(data));
      // console.log(`📊 PWA Event: ${key}`);
    } catch (error) {
      console.warn('PWA analytics tracking failed:', error);
    }
  }

  // 表示条件の判定
  function checkVisibility(): boolean {
    if (!canInstall) return false;
    if (condition && !condition()) return false;

    // variant別の表示条件
    switch (variant) {
      case 'subtle': {
        // 2回目以降の訪問時のみ
        const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
        return visitCount >= 2;
      }

      case 'success': {
        // 常に表示（チェックリスト完了後）
        return true;
      }

      case 'feature': {
        // 常に表示（機能紹介として）
        return true;
      }

      case 'persistent': {
        // 常に表示（持続的表示）
        return true;
      }

      default: {
        return true;
      }
    }
  }

  onMount(() => {
    if (browser) {
      // PWAインストール機能を初期化
      pwaInstall = setupPWAInstallPrompt();

      // 訪問回数をカウント
      const visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
      localStorage.setItem('visitCount', visitCount.toString());

      // インストール可能状態の監視
      const checkInstallability = () => {
        if (pwaInstall) {
          const canInstallNow = pwaInstall.canInstall();
          if (canInstallNow !== canInstall) {
            canInstall = canInstallNow;
            isVisible = checkVisibility();

            if (isVisible) {
              trackPWAEvent('prompt_shown');
            }
          }
        }
      };

      checkInstallability();
      const intervalId = setInterval(checkInstallability, 500);

      return () => clearInterval(intervalId);
    }

    // Return empty cleanup function for non-browser environments
    return () => {};
  });

  async function handleInstall() {
    trackPWAEvent('install_clicked');
    isInstalling = true;
    installResult = null;

    if (!pwaInstall) {
      isInstalling = false;
      return;
    }

    try {
      const result = await pwaInstall.install();
      installResult = result ? 'success' : 'dismissed';

      trackPWAEvent(result ? 'install_success' : 'install_dismissed');

      if (result) {
        setTimeout(() => {
          installResult = null;
          isVisible = false;
        }, 3000);
      }
    } catch (error) {
      console.error('PWA install error:', error);
      installResult = 'dismissed';
      trackPWAEvent('install_error');
    } finally {
      isInstalling = false;
      // Note: Don't set canInstall = false here, as fallback mode should remain available
    }
  }

  function handleDismiss() {
    trackPWAEvent('prompt_dismissed');
    isVisible = false;

    // 一定期間表示しない
    const dismissedUntil = Date.now() + 24 * 60 * 60 * 1000; // 24時間
    localStorage.setItem('pwa-dismissed-until', dismissedUntil.toString());
  }

  // バリアント別のスタイル
  const variantClasses = {
    success: 'pwa-prompt-success',
    subtle: 'pwa-prompt-subtle',
    feature: 'pwa-prompt-feature',
    persistent: 'pwa-prompt-persistent'
  };

  // デフォルトテキスト（リアクティブに翻訳を取得）
  const defaultTitles = $derived({
    success: t('checklist.pwaInstallTitle'),
    subtle: t('checklist.pwaHint'),
    feature: t('checklist.pwaFeature'),
    persistent: t('checklist.pwaPersistent')
  });

  const defaultMessages = $derived({
    success: t('checklist.pwaInstallMessage'),
    subtle: t('checklist.pwaHintMessage'),
    feature: t('checklist.pwaFeatureMessage'),
    persistent: t('checklist.pwaPersistentMessage')
  });

  const displayTitle = $derived(title || defaultTitles[variant]);
  const displayMessage = $derived(message || defaultMessages[variant]);
</script>

{#if isVisible}
  <div
    class="pwa-install-prompt {variantClasses[variant]}"
    role="dialog"
    aria-labelledby="pwa-title"
  >
    {#if installResult === 'success'}
      <div class="pwa-install-success">
        <h3>{t('checklist.pwaInstallSuccess')}</h3>
        <p>{t('checklist.pwaInstallSuccessMessage')}</p>
      </div>
    {:else}
      <div class="pwa-content">
        <div class="pwa-header">
          <h3 id="pwa-title">{displayTitle}</h3>
          {#if variant !== 'persistent'}
            <button
              type="button"
              class="pwa-dismiss"
              onclick={handleDismiss}
              aria-label={t('checklist.pwaClose')}
            >
              ✕
            </button>
          {/if}
        </div>

        <div class="pwa-body">
          <p>{displayMessage}</p>

          {#if showBenefits}
            <ul class="pwa-benefits">
              <li>{t('checklist.pwaBenefits.fastLaunch')}</li>
              <li>{t('checklist.pwaBenefits.homeScreen')}</li>
              <li>{t('checklist.pwaBenefits.offlineAvailable')}</li>
              <li>{t('checklist.pwaBenefits.notifications')}</li>
            </ul>
          {/if}
        </div>

        <div class="pwa-actions">
          <button
            type="button"
            onclick={handleInstall}
            class="pwa-install-button {variant}"
            disabled={isInstalling}
            aria-describedby="pwa-title"
          >
            {#if isInstalling}
              <span class="pwa-spinner"></span>
              {t('checklist.pwaInstalling')}
            {:else}
              {t('checklist.pwaInstallButton')}
            {/if}
          </button>

          {#if variant === 'feature'}
            <button type="button" onclick={handleDismiss} class="pwa-secondary-button">
              {t('checklist.pwaLater')}
            </button>
          {/if}
        </div>
      </div>
    {/if}
  </div>
{/if}

<style>
  .pwa-install-prompt {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* Success variant - 結果ページ用 */
  .pwa-prompt-success {
    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(39, 174, 96, 0.1));
    border-color: rgba(46, 204, 113, 0.3);
    padding: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
    animation: slideIn 0.3s ease-out;
  }

  /* Subtle variant - メインページ用 */
  .pwa-prompt-subtle {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
    padding: var(--spacing-md);
    margin: var(--spacing-md) 0;
    font-size: 0.9rem;
  }

  /* Feature variant - intro ページ用 */
  .pwa-prompt-feature {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    padding: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
  }

  /* Persistent variant - 持続表示用 */
  .pwa-prompt-persistent {
    background: linear-gradient(135deg, rgba(52, 152, 219, 0.1), rgba(41, 128, 185, 0.1));
    border-color: rgba(52, 152, 219, 0.3);
    padding: var(--spacing-lg);
    position: sticky;
    top: var(--spacing-md);
    z-index: 10;
  }

  .pwa-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .pwa-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .pwa-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .pwa-dismiss {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: var(--spacing-xs);
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .pwa-dismiss:hover {
    opacity: 1;
  }

  .pwa-body p {
    margin: 0;
    line-height: 1.4;
  }

  .pwa-benefits {
    list-style: none;
    padding: 0;
    margin: var(--spacing-sm) 0 0 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xs);
  }

  .pwa-benefits li {
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .pwa-actions {
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
    flex-wrap: wrap;
  }

  .pwa-install-button {
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: var(--spacing-sm) var(--spacing-lg);
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .pwa-install-button:hover:not(:disabled) {
    transform: scale(1.05);
  }

  .pwa-install-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .pwa-install-button.subtle {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.9rem;
  }

  .pwa-secondary-button {
    background: transparent;
    color: inherit;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 0.2s;
  }

  .pwa-secondary-button:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .pwa-install-success {
    text-align: center;
    padding: var(--spacing-md);
    background: rgba(46, 204, 113, 0.1);
    border-radius: var(--border-radius);
  }

  .pwa-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .pwa-install-prompt {
      margin: var(--spacing-sm) 0;
    }

    .pwa-benefits {
      grid-template-columns: 1fr;
    }

    .pwa-actions {
      flex-direction: column;
      align-items: stretch;
    }

    .pwa-install-button {
      justify-content: center;
    }
  }
</style>
