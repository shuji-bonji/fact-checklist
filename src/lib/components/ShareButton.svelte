<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import { t } from '$lib/i18n/simple-store.svelte.js';
  import type { ChecklistResult } from '$lib/types/checklist';
  import { createShareableUrl } from '$lib/utils/shareUrl';

  interface Props {
    checklist: ChecklistResult;
    variant?: 'button' | 'icon' | 'menu';
    class?: string;
    useUrlEncoding?: boolean; // URLエンコード方式を使用するか
  }

  const {
    checklist,
    variant = 'button',
    class: className = '',
    useUrlEncoding = true // デフォルトでURLエンコード方式を使用
  }: Props = $props();

  const isSharing = $state(false);
  let showMenu = $state(false);
  let copySuccess = $state(false);
  let qrCodeUrl = $state<string | null>(null);
  // let shareMethod = $state<'native' | 'url' | 'file'>('native'); // 未使用

  // 共有URLの生成（URLエンコード方式 or 従来方式）
  const shareUrl = $derived(() => {
    if (!browser) return '';

    if (useUrlEncoding) {
      try {
        return createShareableUrl(checklist);
      } catch {
        // URLエンコードに失敗した場合は従来方式にフォールバック
        return `${$page.url.origin}/checklist/${checklist.id}`;
      }
    } else {
      return `${$page.url.origin}/checklist/${checklist.id}`;
    }
  });

  const shareTitle = $derived(`${t('intro.share.title')}: ${checklist.title}`);

  const shareText = $derived(
    `${t('intro.share.description')} - ${t('intro.share.score', { score: checklist.score?.percentage || 0 })}`
  );

  // ブラウザ機能の検出
  const capabilities = $derived(() => {
    if (!browser) return { canShareText: false, canShareFiles: false, isSafari: false };

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const canShareText = 'share' in navigator;
    const canShareFiles = 'canShare' in navigator && checkFileSharing();

    return { canShareText, canShareFiles, isSafari };
  });

  function checkFileSharing(): boolean {
    try {
      const testFile = new File(['test'], 'test.txt', { type: 'text/plain' });
      return navigator.canShare ? navigator.canShare({ files: [testFile] }) : false;
    } catch {
      return false;
    }
  }

  const shareOptions = [
    {
      id: 'twitter',
      name: 'X (Twitter)',
      icon: '𝕏',
      bgColor: '#000000',
      action: () => shareToTwitter()
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'f',
      bgColor: '#1877f2',
      action: () => shareToFacebook()
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'in',
      bgColor: '#0077b5',
      action: () => shareToLinkedIn()
    },
    {
      id: 'email',
      name: 'Email',
      icon: '✉️',
      bgColor: '#10b981',
      action: () => shareByEmail()
    },
    {
      id: 'copy',
      name: t('intro.share.copyLink'),
      icon: '📋',
      bgColor: '#6b7280',
      action: () => copyToClipboard()
    },
    {
      id: 'qr',
      name: t('intro.share.qrCode'),
      icon: '📱',
      bgColor: '#9333ea',
      action: () => generateQRCode()
    }
  ];

  $effect(() => {
    let timer: number | undefined;
    if (copySuccess) {
      timer = window.setTimeout(() => {
        copySuccess = false;
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  async function nativeShare(): Promise<void> {
    if (!browser) {
      showMenu = true;
      return;
    }

    const caps = capabilities();
    const currentShareUrl = shareUrl();

    // ネイティブ共有が使える場合は優先
    if (caps.canShareText && 'share' in navigator) {
      try {
        await navigator.share!({
          title: shareTitle,
          text: `${shareText}\n`,
          url: currentShareUrl
        });
        return;
      } catch (err) {
        // ユーザーがキャンセルした場合は何もしない
        if ((err as Error).name === 'AbortError') {
          return;
        }
        // エラーの場合はフォールバック
        console.error('Share failed:', err);
      }
    }

    // フォールバック：メニューを表示
    showMenu = true;
  }

  function shareToTwitter(): void {
    const text = encodeURIComponent(shareText);
    const url = encodeURIComponent(shareUrl());
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  }

  function shareToFacebook(): void {
    const url = encodeURIComponent(shareUrl());
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }

  function shareToLinkedIn(): void {
    const url = encodeURIComponent(shareUrl());
    const title = encodeURIComponent(shareTitle);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`,
      '_blank'
    );
  }

  function shareByEmail(): void {
    const url = shareUrl();
    const subject = encodeURIComponent(shareTitle);
    const body = encodeURIComponent(`${shareText}\n\n${url}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  async function copyToClipboard(): Promise<void> {
    if (!browser) return;

    try {
      const currentShareUrl = shareUrl();
      await navigator.clipboard.writeText(currentShareUrl);
      copySuccess = true;
    } catch (err) {
      console.error('Copy failed:', err);
    }
  }

  async function generateQRCode(): Promise<void> {
    if (!browser) return;

    const currentShareUrl = shareUrl();

    // URLが長すぎる場合は警告（QRコードの容量制限）
    if (currentShareUrl.length > 2000) {
      console.warn('URL may be too long for QR code');
    }

    qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentShareUrl)}`;
    showMenu = true;
  }

  function closeMenu(): void {
    showMenu = false;
    qrCodeUrl = null;
  }

  function handleClickOutside(event: MouseEvent): void {
    // share-menuの中でのクリックは無視
    if (showMenu && !(event.target as Element).closest('.share-menu')) {
      closeMenu();
    }
  }
</script>

<svelte:window onclick={handleClickOutside} />

{#if variant === 'button'}
  <button
    type="button"
    onclick={nativeShare}
    disabled={isSharing}
    class="btn btn-info flex items-center justify-center gap-2 w-full {className}"
  >
    {#if isSharing}
      <span class="animate-spin">⏳</span>
      {t('intro.share.sharing')}
    {:else}
      <span>📤</span>
      {t('intro.share.button')}
    {/if}
  </button>
{:else if variant === 'icon'}
  <button
    type="button"
    onclick={nativeShare}
    disabled={isSharing}
    class="btn btn-secondary"
    aria-label={t('intro.share.button')}
    title={t('intro.share.button')}
  >
    📤 {t('intro.share.button')}
  </button>
{/if}

{#if showMenu}
  <!-- Share menu is visible -->
  <div
    class="share-menu fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    style="z-index: 1000; cursor: default;"
    role="dialog"
    aria-modal="true"
    aria-labelledby="share-dialog-title"
    tabindex="-1"
    onclick={e => {
      if (e.target === e.currentTarget) showMenu = false;
    }}
    onkeydown={e => e.key === 'Escape' && (showMenu = false)}
  >
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full"
      onclick={e => e.stopPropagation()}
      onkeydown={e => e.stopPropagation()}
    >
      <div
        class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700"
      >
        <h3 id="share-dialog-title" class="font-semibold text-lg">{t('intro.share.button')}</h3>
        <button
          type="button"
          onclick={closeMenu}
          class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
          aria-label={t('ui.close')}
        >
          ✕
        </button>
      </div>

      <div class="p-4 grid grid-cols-3 gap-3">
        {#each shareOptions as option}
          <button
            type="button"
            onclick={option.action}
            class="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span
              class="inline-flex items-center justify-center w-12 h-12 rounded-lg text-white text-xl font-bold"
              style="background-color: {option.bgColor}"
            >
              {option.icon}
            </span>
            <span class="text-xs">{option.name}</span>
          </button>
        {/each}
      </div>

      {#if qrCodeUrl}
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
          <img
            src={qrCodeUrl}
            alt={t('intro.share.qrCode')}
            class="mx-auto rounded-lg"
            width="200"
            height="200"
          />
          <p class="text-xs text-gray-500 text-center mt-2">
            {t('intro.share.scanToOpen')}
          </p>
        </div>
      {/if}

      {#if copySuccess}
        <div
          class="m-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-sm text-center animate-pulse"
        >
          ✅ {t('intro.share.copied')}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .share-menu {
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
