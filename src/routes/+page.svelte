<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { goto, replaceState } from '$app/navigation';
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
		console.log('checklistId from URL:', checklistId);

		if (checklistId) {
			// 既存のチェックリストを読み込み（非同期）
			console.log('Loading existing checklist...');
			checklistStore.loadChecklist(checklistId).then(loaded => {
				console.log('loadChecklist result:', loaded);
				console.log('currentChecklist after load:', currentChecklist);
				if (loaded && currentChecklist) {
					title = currentChecklist.title;
					description = currentChecklist.description;
					notes = currentChecklist.notes;
					currentJudgment = currentChecklist.judgment;
					console.log('Loaded checklist data successfully');
				}
			});
		} else {
			// 新しいチェックリストを作成
			console.log('Creating new checklist...');
			startNewChecklist();
		}

		// デフォルトで「クリティカル評価」以外を折りたたみ
		CATEGORIES.forEach((category, index) => {
			if (index > 0) {
				collapsedSections[category.id] = true;
			}
		});
	});

	async function startNewChecklist() {
		console.log('startNewChecklist called');
		const id = checklistStore.createNewChecklist();
		console.log('Created new checklist with id:', id);
		console.log('[snapshot] currentChecklist after create:', $state.snapshot(currentChecklist));

		// SvelteKitルーターの初期化を待つ
		await tick();

		// URLを更新（履歴に追加せず）
		try {
			const url = new URL(window.location.href);
			url.searchParams.set('id', id);
			replaceState(url.pathname + url.search, {});
			console.log('URL updated to:', url.toString());
		} catch (error) {
			console.warn('Failed to update URL:', error);
			// フォールバック: 通常のhistory API
			const url = new URL(window.location.href);
			url.searchParams.set('id', id);
			history.replaceState(null, '', url.toString());
		}
	}

	function handleCheckItem(itemId: string, checked: boolean) {
		checklistStore.updateCheckItem(itemId, checked);
	}

	function handleTitleChange() {
		checklistStore.updateTitle(title);
	}

	function handleDescriptionChange() {
		checklistStore.updateDescription(description);
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

	async function completeChecklist() {
		console.log('completeChecklist called');
		console.log('[snapshot] currentChecklist:', $state.snapshot(currentChecklist));

		if (!currentChecklist) {
			console.error('currentChecklist is null or undefined');
			return;
		}

		console.log('About to call checklistStore.completeChecklist()');

		try {
			const success = await checklistStore.completeChecklist();
			console.log('completeChecklist result:', success);

			if (success) {
				console.log('Redirecting to:', `${base}/checklist/${currentChecklist.id}?completed=true`);
				// 完了ページにリダイレクト
				goto(`${base}/checklist/${currentChecklist.id}?completed=true`);
			} else {
				console.error('completeChecklist returned false');
			}
		} catch (error) {
			console.error('Error in completeChecklist:', error);
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
	<!-- ページヘッダー -->
	<header class="page-header">
		<h1>🔍 実用的事実確認チェックシート</h1>
		<p class="page-subtitle">情報の信頼性を科学的・体系的に評価するための統合システム</p>
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
						oninput={handleTitleChange}
						placeholder="例: 新型コロナワクチンの効果に関する記事"
					/>
				</div>

				<div class="form-group mb-0">
					<label for="description" class="form-label">対象情報の概要</label>
					<textarea
						id="description"
						class="form-input form-textarea"
						bind:value={description}
						oninput={handleDescriptionChange}
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
			<!-- ガイドモード切り替えボタン -->
			<div class="guide-toggle-section card">
				<button class="btn btn-secondary w-full" onclick={() => toggleGuideMode()}>
					{showGuideMode ? '📝 通常モード' : '📖 詳細ガイドモード'}
				</button>
			</div>

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

	/* ページヘッダー */
	.page-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
		padding: var(--spacing-lg);

		/* プライバシーページと統一したスタイル */
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--secondary-color);
		border-radius: var(--border-radius);
		box-shadow: var(--shadow);
	}

	.page-header h1 {
		color: #2c3e50;
		margin: 0 0 var(--spacing-sm) 0;
		font-size: 2.5em;
		font-weight: 300;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.page-subtitle {
		color: #34495e;
		margin: 0;
		font-size: 1.1em;
		font-weight: 500;
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
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}
	/*スクロールバー非表示（Chrome・Safari）*/
	.sidebar::-webkit-scrollbar {
		display: none;
	}

	.guide-toggle-section {
		text-align: center;
		padding: var(--spacing-sm);
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

	/* ダークモード対応 */
	:global(.dark) .page-header {
		background: linear-gradient(135deg, #2d3748, #374151);
		border-color: #4a5568;
	}

	:global(.dark) .page-header h1 {
		color: #f7fafc;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	:global(.dark) .page-subtitle {
		color: #e2e8f0;
	}

	/* レスポンシブ対応 */
	@media (max-width: 1024px) {
		.main-content {
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
			max-height: none;
		}
	}

	@media (max-width: 768px) {
		.container {
			padding: 10px;
		}

		.page-header {
			padding: var(--spacing-md);
		}

		.page-header h1 {
			font-size: 2em;
		}
	}
</style>
