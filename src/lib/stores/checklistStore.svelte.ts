import type {
	ChecklistResult,
	CheckItem,
	ChecklistScore,
	JudgmentType,
	ChecklistHistoryItem,
	ChecklistStatus
} from '../types/checklist.js';
import { CHECKLIST_ITEMS, CATEGORIES } from '../data/checklist-items.js';
import { v4 as uuidv4 } from 'uuid';

// ブラウザ環境でのみIndexedDBを使用
const isBrowser = typeof window !== 'undefined';

class ChecklistStore {
	private _currentChecklist = $state<ChecklistResult | null>(null);
	private _history = $state<ChecklistHistoryItem[]>([]);
	private _isLoading = $state(false);

	constructor() {
		if (isBrowser) {
			this.loadFromStorage();
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
		this.saveToStorage();
		return id;
	}

	// チェックリストを読み込み
	loadChecklist(id: string): boolean {
		if (!isBrowser) return false;

		try {
			const saved = localStorage.getItem(`checklist_${id}`);
			if (saved) {
				const checklist = JSON.parse(saved) as ChecklistResult;
				// 日付をDateオブジェクトに変換
				checklist.createdAt = new Date(checklist.createdAt);
				checklist.updatedAt = new Date(checklist.updatedAt);
				if (checklist.completedAt) {
					checklist.completedAt = new Date(checklist.completedAt);
				}
				this._currentChecklist = checklist;
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
		this.saveToStorage();
	}

	// 判定を設定
	setJudgment(judgment: JudgmentType): void {
		if (!this._currentChecklist) return;

		this._currentChecklist.judgment = judgment;
		this._currentChecklist.updatedAt = new Date();
		this.saveToStorage();
	}

	// チェックリストを完了状態にする
	completeChecklist(): boolean {
		if (!this._currentChecklist) return false;

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

		this.saveToStorage();
		this.saveHistory();
		return true;
	}

	// 履歴を削除
	deleteFromHistory(id: string): void {
		this._history = this._history.filter(h => h.id !== id);
		this.saveHistory();

		// ローカルストレージからも削除
		if (isBrowser) {
			localStorage.removeItem(`checklist_${id}`);
		}
	}

	// ローカルストレージに保存
	private saveToStorage(): void {
		if (!isBrowser || !this._currentChecklist) return;

		try {
			localStorage.setItem(
				`checklist_${this._currentChecklist.id}`,
				JSON.stringify(this._currentChecklist)
			);
		} catch (error) {
			console.error('チェックリストの保存に失敗しました:', error);
		}
	}

	// 履歴をローカルストレージに保存
	private saveHistory(): void {
		if (!isBrowser) return;

		try {
			localStorage.setItem('checklist_history', JSON.stringify(this._history));
		} catch (error) {
			console.error('履歴の保存に失敗しました:', error);
		}
	}

	// ローカルストレージから履歴を読み込み
	private loadFromStorage(): void {
		if (!isBrowser) return;

		try {
			const historyData = localStorage.getItem('checklist_history');
			if (historyData) {
				const history = JSON.parse(historyData) as ChecklistHistoryItem[];
				// 日付をDateオブジェクトに変換
				history.forEach(item => {
					item.completedAt = new Date(item.completedAt);
				});
				this._history = history;
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
