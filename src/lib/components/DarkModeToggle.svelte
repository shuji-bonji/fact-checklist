<script lang="ts">
  import { onMount } from 'svelte';

  let isDarkMode = $state(false);

  // 初期状態のチェック（ブラウザ環境のみ）
  $effect(() => {
    if (typeof document !== 'undefined') {
      // 現在のダークモード状態を検知
      const hasDarkClass = document.documentElement.classList.contains('dark');
      if (hasDarkClass !== isDarkMode) {
        isDarkMode = hasDarkClass;
      }
    }
  });

  onMount(() => {
    // 初期状態の取得
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentDark = document.documentElement.classList.contains('dark');

    // 既にdarkクラスがある場合はそれを優先、なければ保存値かシステム設定
    isDarkMode = currentDark || (savedTheme ? savedTheme === 'dark' : prefersDark);

    // 初期状態を適用
    updateTheme(isDarkMode);

    // システムのダークモード設定変更を監視
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        isDarkMode = e.matches;
        updateTheme(isDarkMode);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });

  function updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    updateTheme(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
</script>

<button
  onclick={toggleDarkMode}
  class="dark-mode-toggle"
  aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
  title={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
>
  {#if isDarkMode}
    <!-- Sun icon for light mode -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  {:else}
    <!-- Moon icon for dark mode -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  {/if}
</button>

<style>
  .dark-mode-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid var(--border-color);
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dark-mode-toggle:hover {
    background: var(--surface-elevated);
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .dark-mode-toggle:active {
    transform: scale(0.95);
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .dark-mode-toggle {
      width: 36px;
      height: 36px;
    }

    .icon {
      width: 18px;
      height: 18px;
    }
  }
</style>
