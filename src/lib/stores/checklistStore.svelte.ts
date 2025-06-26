import type {
	ChecklistResult,
	CheckItem,
	ChecklistScore,
	JudgmentType,
	ChecklistHistoryItem
} from '../types/checklist.js';
import { CHECKLIST_ITEMS } from '../data/checklist-items.js';
import { v4 as uuidv4 } from 'uuid';
import {
	createStorageWithFallback,
	STORAGE_KEYS,
	type StorageInterface
} from '../config/storage.js';
import { StorageMigration } from '../utils/indexedDBStorage.js';

// ブラウザ環境でのみストレージを使用
const isBrowser = typeof window !== 'undefined';

class ChecklistStore {
	private _currentChecklist = $state<ChecklistResult | null>(null);
	private _history = $state<ChecklistHistoryItem[]>([]);
	private _isLoading = $state(false);
	private storage: StorageInterface | null = null;
	private storageInitialized = false;

	constructor() {
		if (isBrowser) {
			this.initializeStorage();
		}
	}

	// ストレージの初期化とマイグレーション
	private async initializeStorage(): Promise<void> {
		console.log('initializeStorage: start, storageInitialized =', this.storageInitialized);

		if (this.storageInitialized) {
			console.log('initializeStorage: already initialized, returning');
			return;
		}

		try {
			console.log('initializeStorage: creating storage with fallback...');
			this.storage = await createStorageWithFallback();
			console.log('initializeStorage: storage created successfully');

			// データマイグレーション（localStorage → IndexedDB）
			console.log('initializeStorage: starting migration...');
			await this.migrateFromLocalStorage();
			console.log('initializeStorage: migration completed');

			// データを読み込み
			console.log('initializeStorage: loading from storage...');
			await this.loadFromStorage();
			console.log('initializeStorage: load completed');

			this.storageInitialized = true;
			console.log('initializeStorage: initialization completed successfully');
		} catch (error) {
			console.error('ストレージの初期化に失敗しました:', error);
			this.storageInitialized = false; // エラー時は再試行可能にする
		}
	}

	// localStorage からのデータマイグレーション
	private async migrateFromLocalStorage(): Promise<void> {
		if (!this.storage || typeof window === 'undefined') return;

		try {
			// マイグレーション対象のキーパターン
			const keyPatterns = [
				STORAGE_KEYS.CHECKLIST_PREFIX, // checklist_ で始まるキー
				STORAGE_KEYS.HISTORY // checklist_history
			];

			const result = await StorageMigration.migrateFromLocalStorage(
				this.storage as unknown as import('../utils/indexedDBStorage.js').IndexedDBStorage,
				keyPatterns
			);

			if (result.migrated > 0) {
				console.log(`${result.migrated} 件のデータをIndexedDBに移行しました`);

				// 移行完了後、localStorageのデータを削除
				const clearResult = StorageMigration.clearLocalStorageKeys(keyPatterns);
				if (clearResult.cleared > 0) {
					console.log(`${clearResult.cleared} 件のlocalStorageデータを削除しました`);
				}
			}

			if (result.errors.length > 0) {
				console.warn('マイグレーション中にエラーが発生しました:', result.errors);
			}
		} catch (error) {
			console.error('データマイグレーションに失敗しました:', error);
		}
	}

	// ゲッター（読み取り専用）
	get currentChecklist() {
		return this._currentChecklist;
	}

	get history() {
		return this._history;
	}

	get isLoading() {
		return this._isLoading;
	}

	// スコア計算（derived state）
	get score(): ChecklistScore {
		if (!this._currentChecklist) {
			return {
				critical: 0,
				detailed: 0,
				verification: 0,
				context: 0,
				total: 0,
				maxScore: 20,
				percentage: 0
			};
		}

		const items = this._currentChecklist.items;
		const critical = items.filter(item => item.category.id === 'critical' && item.checked).length;
		const detailed = items.filter(item => item.category.id === 'detailed' && item.checked).length;
		const verification = items.filter(
			item => item.category.id === 'verification' && item.checked
		).length;
		const context = items.filter(item => item.category.id === 'context' && item.checked).length;

		const total = critical + detailed + verification + context;
		const maxScore = 20;
		const percentage = Math.round((total / maxScore) * 100);

		return {
			critical,
			detailed,
			verification,
			context,
			total,
			maxScore,
			percentage
		};
	}

	// 信頼度レベル（derived state）
	get confidenceLevel(): number {
		return this.score.percentage;
	}

	get confidenceText(): string {
		const confidence = this.confidenceLevel;
		if (confidence >= 80) return '高い信頼性';
		if (confidence >= 60) return '中程度の信頼性';
		if (confidence >= 40) return '低い信頼性';
		return '信頼性に問題';
	}

	get judgmentAdvice(): string {
		const confidence = this.confidenceLevel;
		if (confidence >= 80) return '採用を推奨します。十分な検証が行われています。';
		if (confidence >= 60) return '追加確認を推奨します。重要な決定には慎重に。';
		if (confidence >= 40) return '要注意です。さらなる検証が必要です。';
		return '不採用を推奨します。信頼できる情報源を探しましょう。';
	}

	// 新しいチェックリストを作成
	createNewChecklist(title: string = '', description: string = ''): string {
		const id = uuidv4();
		const now = new Date();

		// チェックアイテムのコピーを作成（チェック状態をリセット）
		const items: CheckItem[] = CHECKLIST_ITEMS.map(item => ({
			...item,
			checked: false
		}));

		const newChecklist: ChecklistResult = {
			id,
			title: title || `事実確認チェック_${now.toLocaleDateString('ja-JP')}`,
			description,
			createdAt: now,
			updatedAt: now,
			status: 'draft',
			items,
			score: this.score,
			judgment: null,
			notes: '',
			confidenceLevel: 0,
			confidenceText: this.confidenceText,
			judgmentAdvice: this.judgmentAdvice
		};

		this._currentChecklist = newChecklist;
		this.saveToStorage(); // 非同期だが待機しない（UIブロックを避ける）
		return id;
	}

	// チェックリストを読み込み
	async loadChecklist(id: string): Promise<boolean> {
		if (!isBrowser) return false;

		// ストレージが初期化されていない場合は初期化
		if (!this.storageInitialized) {
			await this.initializeStorage();
		}

		if (!this.storage) return false;

		try {
			const saved = await this.storage.getItem<ChecklistResult>(
				`${STORAGE_KEYS.CHECKLIST_PREFIX}${id}`
			);
			if (saved) {
				// 日付をDateオブジェクトに変換
				saved.createdAt = new Date(saved.createdAt);
				saved.updatedAt = new Date(saved.updatedAt);
				if (saved.completedAt) {
					saved.completedAt = new Date(saved.completedAt);
				}
				this._currentChecklist = saved;
				return true;
			}
		} catch (error) {
			console.error('チェックリストの読み込みに失敗しました:', error);
		}
		return false;
	}

	// チェックアイテムの状態を更新
	updateCheckItem(itemId: string, checked: boolean): void {
		if (!this._currentChecklist) return;

		const item = this._currentChecklist.items.find(i => i.id === itemId);
		if (item) {
			item.checked = checked;
			this._currentChecklist.updatedAt = new Date();

			// スコアを更新
			this._currentChecklist.score = this.score;
			this._currentChecklist.confidenceLevel = this.confidenceLevel;
			this._currentChecklist.confidenceText = this.confidenceText;
			this._currentChecklist.judgmentAdvice = this.judgmentAdvice;

			this.saveToStorage();
		}
	}

	// メモを更新
	updateNotes(notes: string): void {
		if (!this._currentChecklist) return;

		this._currentChecklist.notes = notes;
		this._currentChecklist.updatedAt = new Date();
		this.saveToStorage(); // 非同期だが待機しない
	}

	// 判定を設定
	setJudgment(judgment: JudgmentType): void {
		if (!this._currentChecklist) return;

		this._currentChecklist.judgment = judgment;
		this._currentChecklist.updatedAt = new Date();
		this.saveToStorage(); // 非同期だが待機しない
	}

	// チェックリストを完了状態にする
	async completeChecklist(): Promise<boolean> {
		console.log('checklistStore.completeChecklist called');

		if (!this._currentChecklist) {
			console.error('checklistStore: _currentChecklist is null');
			return false;
		}

		console.log('Setting checklist status to completed');
		const now = new Date();
		this._currentChecklist.status = 'completed';
		this._currentChecklist.completedAt = now;
		this._currentChecklist.updatedAt = now;

		// 履歴に追加
		const historyItem: ChecklistHistoryItem = {
			id: this._currentChecklist.id,
			title: this._currentChecklist.title,
			completedAt: now,
			score: this.score,
			judgment: this._currentChecklist.judgment,
			confidenceLevel: this.confidenceLevel
		};

		console.log('Adding to history:', historyItem);

		// 履歴に追加（重複チェック）
		const existingIndex = this._history.findIndex(h => h.id === historyItem.id);
		if (existingIndex >= 0) {
			this._history[existingIndex] = historyItem;
		} else {
			this._history.unshift(historyItem);
		}

		// 履歴を最新5件に制限
		if (this._history.length > 5) {
			this._history = this._history.slice(0, 5);
		}

		console.log('About to save to storage...');

		try {
			// 保存処理を待機（確実に保存してから画面遷移）
			await Promise.all([this.saveToStorage(), this.saveHistory()]);

			console.log('Storage save completed successfully');
			return true;
		} catch (error) {
			console.error('Error saving to storage:', error);
			return false;
		}
	}

	// 履歴を削除
	async deleteFromHistory(id: string): Promise<void> {
		this._history = this._history.filter(h => h.id !== id);
		await this.saveHistory();

		// ストレージからも削除
		if (this.storage) {
			try {
				await this.storage.removeItem(`${STORAGE_KEYS.CHECKLIST_PREFIX}${id}`);
			} catch (error) {
				console.error('チェックリストの削除に失敗しました:', error);
			}
		}
	}

	// ストレージに保存
	private async saveToStorage(): Promise<void> {
		console.log('saveToStorage called');

		if (!isBrowser || !this._currentChecklist) {
			console.log('saveToStorage: browser or currentChecklist not available');
			return;
		}

		// initializeStorageを呼ばない（既に初期化済みのはず）
		if (!this.storage) {
			console.error('saveToStorage: storage not available');
			return;
		}

		try {
			const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${this._currentChecklist.id}`;
			console.log('Saving checklist with key:', key);

			// Svelteプロキシをプレーンオブジェクトに変換
			const plainChecklist = JSON.parse(JSON.stringify(this._currentChecklist));

			await this.storage.setItem(key, plainChecklist);
			console.log('Checklist saved successfully');
		} catch (error) {
			console.error('チェックリストの保存に失敗しました:', error);
			throw error; // Re-throw to be caught by Promise.all
		}
	}

	// 履歴をストレージに保存
	private async saveHistory(): Promise<void> {
		console.log('saveHistory called');

		if (!isBrowser) {
			console.log('saveHistory: not in browser environment');
			return;
		}

		// initializeStorageを呼ばない（既に初期化済みのはず）
		if (!this.storage) {
			console.error('saveHistory: storage not available');
			return;
		}

		try {
			console.log('Saving history with', this._history.length, 'items');

			// Svelteプロキシをプレーンオブジェクトに変換
			const plainHistory = JSON.parse(JSON.stringify(this._history));

			await this.storage.setItem(STORAGE_KEYS.HISTORY, plainHistory);
			console.log('History saved successfully');
		} catch (error) {
			console.error('履歴の保存に失敗しました:', error);
			throw error; // Re-throw to be caught by Promise.all
		}
	}

	// ストレージから履歴を読み込み
	private async loadFromStorage(): Promise<void> {
		console.log('loadFromStorage called');

		if (!isBrowser) {
			console.log('loadFromStorage: not in browser environment');
			return;
		}

		// initializeStorageを呼ばない（循環参照を回避）
		if (!this.storage) {
			console.log('loadFromStorage: storage not available');
			return;
		}

		try {
			console.log('loadFromStorage: loading history from storage');
			const history = await this.storage.getItem<ChecklistHistoryItem[]>(STORAGE_KEYS.HISTORY);
			if (history) {
				console.log('loadFromStorage: found history with', history.length, 'items');
				// 日付をDateオブジェクトに変換
				history.forEach(item => {
					item.completedAt = new Date(item.completedAt);
				});
				this._history = history;
				console.log('loadFromStorage: history loaded successfully');
			} else {
				console.log('loadFromStorage: no history found in storage');
			}
		} catch (error) {
			console.error('履歴の読み込みに失敗しました:', error);
		}
	}

	// 全履歴を取得
	getAllHistory(): ChecklistHistoryItem[] {
		return this._history;
	}

	// エクスポート用データを生成
	getExportData(): ChecklistResult | null {
		return this._currentChecklist;
	}
}

// シングルトンインスタンス
export const checklistStore = new ChecklistStore();
