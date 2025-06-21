<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { base } from '$app/paths';
	import { checklistStore } from '$lib/stores/checklistStore.svelte.js';
	import { CATEGORIES } from '$lib/data/checklist-items.js';
	import type { JudgmentType } from '$lib/types/checklist.js';

	import CheckSection from '$lib/components/CheckSection.svelte';
	import ScoreDisplay from '$lib/components/ScoreDisplay.svelte';
	import HistorySidebar from '$lib/components/HistorySidebar.svelte';
	import ExportModal from '$lib/components/ExportModal.svelte';

	// State
	let title = $state('');
	let description = $state('');
	let notes = $state('');
	let currentJudgment = $state<JudgmentType>(null);
	let showGuideMode = $state(false);
	let showExportModal = $state(false);
	const collapsedSections = $state<Record<string, boolean>>({});

	// Derived state
	const currentChecklist = $derived(checklistStore.currentChecklist);
	const score = $derived(checklistStore.score);
	const confidenceLevel = $derived(checklistStore.confidenceLevel);
	const confidenceText = $derived(checklistStore.confidenceText);
	const judgmentAdvice = $derived(checklistStore.judgmentAdvice);

	onMount(() => {
		// ローディング画面を確実に非表示にする（ブラウザ環境でのみ）
		if (browser) {
			document.body.classList.add('app-loaded');
			const loadingElement = document.querySelector('.app-loading') as HTMLElement;
			if (loadingElement) {
				loadingElement.style.display = 'none';
				console.log('Loading screen hidden from main page');
			}
		}

		// URLパラメータから既存のチェックリストIDを確認
		const checklistId = $page.url.searchParams.get('id');

		if (checklistId) {
			// 既存のチェックリストを読み込み
			const loaded = checklistStore.loadChecklist(checklistId);
			if (loaded && currentChecklist) {
				title = currentChecklist.title;
				description = currentChecklist.description;
				notes = currentChecklist.notes;
				currentJudgment = currentChecklist.judgment;
			}
		} else {
			// 新しいチェックリストを作成
			startNewChecklist();
		}

		// デフォルトで「クリティカル評価」以外を折りたたみ
		CATEGORIES.forEach((category, index) => {
			if (index > 0) {
				collapsedSections[category.id] = true;
			}
		});
	});

	function startNewChecklist() {
		const id = checklistStore.createNewChecklist();
		// URLを更新（履歴に追加せず）
		const url = new URL(window.location.href);
		url.searchParams.set('id', id);
		history.replaceState(null, '', url.toString());
	}

	function handleCheckItem(itemId: string, checked: boolean) {
		checklistStore.updateCheckItem(itemId, checked);
	}

	function handleNotesChange() {
		checklistStore.updateNotes(notes);
	}

	function handleJudgmentChange(judgment: JudgmentType) {
		currentJudgment = judgment;
		checklistStore.setJudgment(judgment);
	}

	function toggleSection(categoryId: string) {
		collapsedSections[categoryId] = !collapsedSections[categoryId];
	}

	function toggleGuideMode() {
		showGuideMode = !showGuideMode;
	}

	function completeChecklist() {
		if (checklistStore.completeChecklist()) {
			// 完了ページにリダイレクト
			goto(`${base}/checklist/${currentChecklist?.id}?completed=true`);
		}
	}

	function exportChecklist() {
		showExportModal = true;
	}

	// 信頼度に基づく判定の自動提案
	$effect(() => {
		if (confidenceLevel >= 80 && currentJudgment !== 'accept') {
			// 高信頼度の場合は採用を提案（ただし自動設定はしない）
		}
	});
</script>

<svelte:head>
	<title>実用的事実確認チェックシート</title>
	<meta name="description" content="情報の信頼性を科学的・体系的に評価するためのチェックシート" />
</svelte:head>

<div class="container">
	<!-- ヘッダー -->
	<header class="header">
		<div class="header-content">
			<h1>🔍 実用的事実確認チェックシート</h1>
			<p>情報の信頼性を科学的・体系的に評価するための統合システム</p>
		</div>

		<div class="header-actions">
			<button class="btn btn-secondary" onclick={() => toggleGuideMode()}>
				{showGuideMode ? '📝 通常モード' : '📖 詳細ガイドモード'}
			</button>
		</div>
	</header>

	<!-- メインコンテンツ -->
	<div class="main-content grid grid-2">
		<!-- 評価エリア -->
		<div class="evaluation-area">
			<!-- チェックリスト情報入力 -->
			<div class="card">
				<h2>📋 チェックリスト情報</h2>
				<div class="form-group">
					<label for="title" class="form-label">タイトル</label>
					<input
						id="title"
						type="text"
						class="form-input"
						bind:value={title}
						placeholder="例: 新型コロナワクチンの効果に関する記事"
					/>
				</div>

				<div class="form-group mb-0">
					<label for="description" class="form-label">対象情報の概要</label>
					<textarea
						id="description"
						class="form-input form-textarea"
						bind:value={description}
						placeholder="評価対象となる情報の詳細を記入してください..."
					></textarea>
				</div>
			</div>

			<!-- クイックスタートガイド -->
			<div class="quick-start card">
				<p>
					まず「クリティカル評価」から始めて、基本的な信頼性を確認しましょう。<br
					/>各項目をチェックすると、右側のスコアがリアルタイムで更新されます。
				</p>
			</div>

			<!-- チェックセクション -->
			{#each CATEGORIES as category (category.id)}
				<CheckSection
					{category}
					items={currentChecklist?.items.filter(item => item.category.id === category.id) || []}
					collapsed={collapsedSections[category.id] || false}
					{showGuideMode}
					onToggle={() => toggleSection(category.id)}
					onCheckItem={handleCheckItem}
				/>
			{/each}

			<!-- 評価メモ -->
			<div class="notes-area card">
				<h3>📝 評価メモ・追加確認事項</h3>
				<textarea
					class="form-input form-textarea"
					bind:value={notes}
					oninput={handleNotesChange}
					placeholder="疑問点、追加で確認したい事項、総合的な印象など、自由に記録してください..."
				></textarea>
			</div>
		</div>

		<!-- サイドバー -->
		<div class="sidebar">
			<!-- スコア表示 -->
			<ScoreDisplay
				{score}
				{confidenceLevel}
				{confidenceText}
				{judgmentAdvice}
				{currentJudgment}
				onJudgmentChange={handleJudgmentChange}
			/>

			<!-- アクションボタン -->
			<div class="action-buttons card">
				<button
					class="btn btn-success w-full mb-2"
					onclick={completeChecklist}
					disabled={!currentChecklist}
				>
					✅ 評価を完了
				</button>

				<button
					class="btn btn-secondary w-full"
					onclick={exportChecklist}
					disabled={!currentChecklist}
				>
					📄 エクスポート
				</button>
			</div>

			<!-- 履歴サイドバー -->
			<HistorySidebar />
		</div>
	</div>
</div>

<!-- エクスポートモーダル -->
{#if showExportModal}
	<ExportModal checklist={currentChecklist} onClose={() => (showExportModal = false)} />
{/if}

<style>
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 20px;
	}

	.header {
		background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
		color: white;
		padding: 30px;
		border-radius: var(--border-radius);
		margin-bottom: var(--spacing-lg);
		text-align: center;
		position: relative;
	}

	.header-content h1 {
		margin: 0;
		font-size: 2.5em;
		font-weight: 300;
	}

	.header-content p {
		margin: 10px 0 0 0;
		opacity: 0.9;
		font-size: 1.1em;
	}

	.header-actions {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	.main-content {
		gap: var(--spacing-lg);
		align-items: start;
	}

	.evaluation-area {
		min-height: 100vh;
	}

	.sidebar {
		position: sticky;
		top: 20px;
		max-height: calc(100vh - 40px);
		overflow-y: scroll;
		/*スクロールバー非表示（IE・Edge）*/
		-ms-overflow-style: none;
		/*スクロールバー非表示（Firefox）*/
		scrollbar-width: none;
	}
	/*スクロールバー非表示（Chrome・Safari）*/
	.sidebar::-webkit-scrollbar {
		display: none;
	}

	.quick-start {
		background: linear-gradient(135deg, #ff7675 0%, #fd79a8 100%);
		color: white;
		text-align: center;
	}

	.quick-start p {
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.notes-area h3 {
		margin-bottom: var(--spacing-md);
		color: var(--text-color);
	}

	.action-buttons {
		text-align: center;
	}

	.w-full {
		width: 100%;
	}

	.mb-2 {
		margin-bottom: var(--spacing-sm);
	}

	/* レスポンシブ対応 */
	@media (max-width: 1024px) {
		.main-content {
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
			max-height: none;
			/* order: -1; */
		}

		.header-actions {
			position: static;
			margin-top: var(--spacing-md);
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 10px;
		}

		.header {
			padding: 20px 15px;
		}

		.header-content h1 {
			font-size: 2em;
		}
	}
</style>
