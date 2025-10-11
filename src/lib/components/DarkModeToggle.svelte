<script lang="ts">
  import { onMount } from 'svelte';

  let isDarkMode = $state(false);

  onMount(() => {
    // app.htmlで既に設定された状態を読み取る
    const currentDark = document.documentElement.classList.contains('dark');
    isDarkMode = currentDark;

    // デバッグログ
    console.log('[DarkModeToggle] onMount', {
      currentDark,
      htmlClasses: document.documentElement.className,
      bodyClasses: document.body.className,
      savedTheme: localStorage.getItem('theme')
    });

    // システムのダークモード設定変更を監視（ユーザーが明示的に設定していない場合のみ）
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem('theme');
      // ユーザーが明示的にテーマを設定していない場合のみ、システム設定に追従
      if (!savedTheme) {
        console.log('[DarkModeToggle] System theme changed', e.matches);
        isDarkMode = e.matches;
        updateTheme(isDarkMode);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  });

  function updateTheme(dark: boolean): void {
    console.log('[DarkModeToggle] updateTheme', { dark });

    // htmlとbody両方のクラスを同時に更新
    if (dark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }

    // デバッグログ：更新後の状態
    console.log('[DarkModeToggle] After update', {
      htmlClasses: document.documentElement.className,
      bodyClasses: document.body.className
    });
  }

  function toggleDarkMode(): void {
    isDarkMode = !isDarkMode;
    console.log('[DarkModeToggle] Toggle clicked', { newValue: isDarkMode });
    updateTheme(isDarkMode);
    // ユーザーの選択を保存
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }
</script>

<button
  type="button"
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
