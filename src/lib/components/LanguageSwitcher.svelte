<!--
言語切り替えUIコンポーネント
12言語対応のドロップダウン形式言語選択UI
-->
<script lang="ts">
	import { t, setLanguage, getCurrentLanguage, getIsRTL } from '$lib/i18n/index.js';
	import { getLanguageOptions } from '$lib/i18n/utils.js';

	// Props
	interface Props {
		mobileMode?: boolean;
	}

	const { mobileMode = false }: Props = $props();

	// Svelte 5 runes
	let isOpen = $state(false);
	let currentLanguage = $state(getCurrentLanguage());
	let isRTL = $state(getIsRTL());

	// 言語オプションの取得
	const languageOptions = getLanguageOptions();

	// 現在の言語情報
	const currentLanguageInfo = $derived(
		languageOptions.find(lang => lang.code === currentLanguage) || languageOptions[0]!
	);

	// 言語変更ハンドラー
	async function handleLanguageChange(languageCode: string) {
		try {
			await setLanguage(languageCode as any);
			currentLanguage = getCurrentLanguage();
			isRTL = getIsRTL();
			isOpen = false;
		} catch (error) {
			console.error('Failed to change language:', error);
		}
	}

	// ドロップダウンの開閉
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	// 外部クリックでドロップダウンを閉じる
	function handleClickOutside(event: Event) {
		const target = event.target as HTMLElement;
		if (!target.closest('.language-switcher')) {
			isOpen = false;
		}
	}

	// キーボードナビゲーション
	function handleKeydown(event: KeyboardEvent, languageCode?: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (languageCode) {
				handleLanguageChange(languageCode);
			} else {
				toggleDropdown();
			}
		} else if (event.key === 'Escape') {
			isOpen = false;
		}
	}
</script>

<!-- 外部クリック検知のためのイベントリスナー -->
<svelte:window on:click={handleClickOutside} />

<div class="language-switcher" class:rtl={isRTL} class:mobile-mode={mobileMode}>
	<!-- 言語選択ボタン -->
	<button
		class="language-button"
		onclick={toggleDropdown}
		onkeydown={e => handleKeydown(e)}
		aria-expanded={isOpen}
		aria-haspopup="listbox"
		aria-label={t('accessibility.languageSelector')}
		title={`${t('common.languages')}: ${currentLanguageInfo.nativeName}`}
	>
		<span class="flag" aria-hidden="true">{currentLanguageInfo.flag}</span>
		<span class="language-name">{currentLanguageInfo.nativeName}</span>
		<span class="dropdown-arrow" class:open={isOpen} aria-hidden="true">▼</span>
	</button>

	<!-- ドロップダウンメニュー -->
	{#if isOpen}
		<div class="language-dropdown" role="listbox" aria-label={t('accessibility.languageSelector')}>
			{#each languageOptions as language (language.code)}
				<button
					class="language-option"
					class:current={language.code === currentLanguage}
					role="option"
					aria-selected={language.code === currentLanguage}
					onclick={() => handleLanguageChange(language.code)}
					onkeydown={e => handleKeydown(e, language.code)}
					title={`${language.name} (${language.nativeName})`}
				>
					<span class="flag" aria-hidden="true">{language.flag}</span>
					<div class="language-info">
						<span class="native-name">{language.nativeName}</span>
						<span class="english-name">{language.name}</span>
					</div>
					{#if language.code === currentLanguage}
						<span class="checkmark" aria-hidden="true">✓</span>
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.language-switcher {
		position: relative;
		display: inline-block;
	}

	.language-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background: var(--color-bg-secondary, #f8f9fa);
		border: 1px solid var(--color-border, #dee2e6);
		border-radius: 0.375rem;
		color: var(--color-text, #212529);
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
		min-width: 120px;
	}

	.language-button:hover {
		background: var(--color-bg-hover, #e9ecef);
		border-color: var(--color-border-hover, #adb5bd);
	}

	.language-button:focus {
		outline: 2px solid var(--color-primary, #0066cc);
		outline-offset: 2px;
	}

	.flag {
		font-size: 1.125rem;
		flex-shrink: 0;
	}

	.language-name {
		flex: 1;
		text-align: start;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.dropdown-arrow {
		font-size: 0.75rem;
		transition: transform 0.2s ease;
		flex-shrink: 0;
	}

	.dropdown-arrow.open {
		transform: rotate(180deg);
	}

	.language-dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		min-width: 250px;
		width: max-content;
		background: var(--color-bg, #ffffff);
		border: 1px solid var(--color-border, #dee2e6);
		border-radius: 0.375rem;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
		z-index: 1000;
		max-height: 300px;
		overflow-y: auto;
		margin-top: 0.25rem;
	}

	.language-option {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.75rem;
		background: transparent;
		border: none;
		color: var(--color-text, #212529);
		cursor: pointer;
		text-align: start;
		transition: background-color 0.2s ease;
		white-space: nowrap;
	}

	.language-option:hover {
		background: var(--color-bg-hover, #f8f9fa);
	}

	.language-option:focus {
		background: var(--color-bg-hover, #f8f9fa);
		outline: 2px solid var(--color-primary, #0066cc);
		outline-offset: -2px;
	}

	.language-option.current {
		background: var(--color-primary-bg, #e3f2fd);
		color: var(--color-primary, #0066cc);
		font-weight: 600;
	}

	.language-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
		min-width: 0;
	}

	.native-name {
		font-weight: 500;
		font-size: 0.875rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.english-name {
		font-size: 0.75rem;
		color: var(--color-text-secondary, #6c757d);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.checkmark {
		color: var(--color-success, #198754);
		font-weight: bold;
		flex-shrink: 0;
	}

	/* RTL対応 */
	.language-switcher.rtl .language-button {
		direction: rtl;
	}

	.language-switcher.rtl .language-dropdown {
		direction: rtl;
	}

	.language-switcher.rtl .language-option {
		direction: rtl;
	}

	/* モバイルモード用スタイル */
	.language-switcher.mobile-mode .language-button {
		min-width: 140px;
		font-size: 0.875rem;
		padding: 0.75rem;
		justify-content: center;
	}

	.language-switcher.mobile-mode .language-name {
		display: block; /* モバイルメニュー内では言語名を表示 */
	}

	.language-switcher.mobile-mode .language-dropdown {
		position: fixed;
		top: auto;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: 0.5rem 0.5rem 0 0;
		max-height: 50vh;
	}

	/* レスポンシブ対応（通常モード） */
	@media (max-width: 768px) {
		.language-switcher:not(.mobile-mode) .language-button {
			min-width: 100px;
			font-size: 0.8rem;
			padding: 0.4rem 0.6rem;
		}

		.language-switcher:not(.mobile-mode) .language-name {
			display: none;
		}

		.language-switcher:not(.mobile-mode) .language-dropdown {
			position: fixed;
			top: auto;
			bottom: 0;
			left: 0;
			right: 0;
			border-radius: 0.5rem 0.5rem 0 0;
			max-height: 50vh;
		}
	}

	/* ダークモード対応 */
	@media (prefers-color-scheme: dark) {
		.language-button {
			background: var(--color-bg-secondary-dark, #343a40);
			border-color: var(--color-border-dark, #495057);
			color: var(--color-text-dark, #f8f9fa);
		}

		.language-button:hover {
			background: var(--color-bg-hover-dark, #495057);
			border-color: var(--color-border-hover-dark, #6c757d);
		}

		.language-dropdown {
			background: var(--color-bg-dark, #212529);
			border-color: var(--color-border-dark, #495057);
		}

		.language-option {
			color: var(--color-text-dark, #f8f9fa);
		}

		.language-option:hover,
		.language-option:focus {
			background: var(--color-bg-hover-dark, #343a40);
		}

		.language-option.current {
			background: var(--color-primary-bg-dark, #1e3a8a);
			color: var(--color-primary-light, #60a5fa);
		}

		.english-name {
			color: var(--color-text-secondary-dark, #adb5bd);
		}
	}

	/* アニメーション */
	.language-dropdown {
		animation: slideDown 0.2s ease-out;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-0.5rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* 高コントラストモード対応 */
	@media (prefers-contrast: high) {
		.language-button {
			border-width: 2px;
		}

		.language-option:focus {
			outline-width: 3px;
		}
	}

	/* アクセシビリティ：アニメーション削減 */
	@media (prefers-reduced-motion: reduce) {
		.dropdown-arrow,
		.language-dropdown {
			transition: none;
			animation: none;
		}
	}
</style>
