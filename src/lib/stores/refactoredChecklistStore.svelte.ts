// src/lib/stores/refactoredChecklistStore.svelte.ts
// 責務分離されたチェックリストストア（Svelte 5 runes使用）

import type {
  ChecklistResult,
  ChecklistScore,
  JudgmentType,
  ChecklistHistoryItem
} from '../types/checklist.js';
import { ChecklistService } from '../services/ChecklistService.js';
import { StorageService } from '../services/StorageService.js';
import { ScoringService } from '../services/ScoringService.js';
import {
  SearchService,
  type SearchCriteria,
  type SortCriteria
} from '../services/SearchService.js';
import { i18nStore } from '../i18n/store.svelte.js';

/**
 * ストア操作結果
 */
// Note: StoreOperationResult interface for future use
// interface StoreOperationResult {
//   success: boolean;
//   error?: string;
// }

/**
 * リファクタリング済みチェックリストストア
 * サービス層を活用してビジネスロジックを分離
 */
class RefactoredChecklistStore {
  // Core state
  private _currentChecklist = $state<ChecklistResult | null>(null);
  private _history = $state<ChecklistHistoryItem[]>([]);
  private _isLoading = $state(false);
  private _error = $state<string | null>(null);
  private _initialized = $state(false);

  // Services
  private storageService: StorageService;

  // Browser check
  private readonly isBrowser = typeof window !== 'undefined';

  constructor() {
    this.storageService = new StorageService();

    if (this.isBrowser) {
      this.initializeAsync();
      this.setupLanguageChangeListener();
    }
  }

  // === GETTERS (Reactive state) ===

  /**
   * 現在のチェックリスト（読み取り専用）
   */
  get currentChecklist(): ChecklistResult | null {
    return this._currentChecklist;
  }

  /**
   * 履歴（読み取り専用）
   */
  get history(): ChecklistHistoryItem[] {
    return this._history;
  }

  /**
   * ローディング状態
   */
  get isLoading(): boolean {
    return this._isLoading;
  }

  /**
   * エラー状態
   */
  get error(): string | null {
    return this._error;
  }

  /**
   * 現在のスコア（derived state）
   */
  get score(): ChecklistScore {
    if (!this._currentChecklist) {
      return ScoringService.calculateScore([]);
    }
    return ScoringService.calculateScore(this._currentChecklist.items);
  }

  /**
   * 信頼度レベル（derived state）
   */
  get confidenceLevel(): number {
    return this.score.percentage;
  }

  /**
   * 信頼度テキスト（derived state）
   */
  get confidenceText(): string {
    return ScoringService.getConfidenceText(this.confidenceLevel);
  }

  /**
   * 判定アドバイス（derived state）
   */
  get judgmentAdvice(): string {
    return ScoringService.getJudgmentAdvice(this.confidenceLevel);
  }

  /**
   * 効果的なタイトル（derived state）
   */
  get effectiveTitle(): string {
    if (!this._currentChecklist) return '';
    return ChecklistService.getEffectiveTitle(this._currentChecklist);
  }

  /**
   * 詳細スコア分析（derived state）
   */
  get detailedAnalysis() {
    if (!this._currentChecklist) {
      return ScoringService.analyzeScore([]);
    }
    return ScoringService.analyzeScore(this._currentChecklist.items);
  }

  // === ASYNC INITIALIZATION ===

  /**
   * 非同期初期化
   */
  private async initializeAsync(): Promise<void> {
    try {
      this._isLoading = true;
      this._error = null;

      // ストレージサービス初期化
      await this.storageService.initialize();

      // 履歴データの読み込み
      await this.loadHistoryFromStorage();

      console.log('RefactoredChecklistStore: Initialization completed');
    } catch (error) {
      this._error = `Initialization failed: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
    } finally {
      this._isLoading = false;
    }
  }

  // === CHECKLIST OPERATIONS ===

  /**
   * 新しいチェックリストを作成
   * @param title タイトル
   * @param description 説明
   * @returns 作成されたチェックリストID
   */
  async createNewChecklist(title: string = '', description: string = ''): Promise<string> {
    try {
      this._isLoading = true;
      this._error = null;

      // サービス層でチェックリスト作成
      const newChecklist = ChecklistService.createChecklist({
        title,
        description,
        autoGenerateTitle: !title
      });

      this._currentChecklist = newChecklist;

      // ストレージに保存
      const saveResult = await this.storageService.saveChecklist(newChecklist);
      if (!saveResult.success) {
        throw new Error(saveResult.error);
      }

      console.log('RefactoredChecklistStore: New checklist created:', newChecklist.id);
      return newChecklist.id;
    } catch (error) {
      this._error = `Failed to create checklist: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    } finally {
      this._isLoading = false;
    }
  }

  /**
   * チェックリストを読み込み
   * @param id チェックリストID
   * @returns 読み込み成功フラグ
   */
  async loadChecklist(id: string): Promise<boolean> {
    try {
      this._isLoading = true;
      this._error = null;

      const result = await this.storageService.loadChecklist(id);
      if (!result.success) {
        this._error = result.error ?? 'Failed to load checklist';
        return false;
      }

      let checklist = result.data as ChecklistResult;

      // 国際化マイグレーション適用
      checklist = ChecklistService.migrateToI18n(checklist);

      // 現在の言語でアイテムを更新
      checklist = ChecklistService.refreshItemsForCurrentLanguage(checklist);

      this._currentChecklist = checklist;
      console.log('RefactoredChecklistStore: Checklist loaded:', id);
      return true;
    } catch (error) {
      this._error = `Failed to load checklist: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      return false;
    } finally {
      this._isLoading = false;
    }
  }

  /**
   * チェックアイテムの状態を更新
   * @param itemId アイテムID
   * @param checked チェック状態
   */
  async updateCheckItem(itemId: string, checked: boolean): Promise<void> {
    if (!this._currentChecklist) {
      throw new Error('No checklist is currently loaded');
    }

    try {
      // サービス層でアイテム更新
      const updatedChecklist = ChecklistService.updateCheckItem(
        this._currentChecklist,
        itemId,
        checked
      );

      this._currentChecklist = updatedChecklist;

      // 非同期でストレージに保存（UIブロックを避ける）
      this.saveCurrentChecklistAsync();
    } catch (error) {
      this._error = `Failed to update check item: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * タイトルを更新
   * @param title 新しいタイトル
   */
  async updateTitle(title: string): Promise<void> {
    if (!this._currentChecklist) {
      throw new Error('No checklist is currently loaded');
    }

    try {
      const updatedChecklist = ChecklistService.updateChecklist(this._currentChecklist, { title });

      this._currentChecklist = updatedChecklist;
      this.saveCurrentChecklistAsync();
    } catch (error) {
      this._error = `Failed to update title: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * 説明を更新
   * @param description 新しい説明
   */
  async updateDescription(description: string): Promise<void> {
    if (!this._currentChecklist) {
      throw new Error('No checklist is currently loaded');
    }

    try {
      const updatedChecklist = ChecklistService.updateChecklist(this._currentChecklist, {
        description
      });

      this._currentChecklist = updatedChecklist;
      this.saveCurrentChecklistAsync();
    } catch (error) {
      this._error = `Failed to update description: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * メモを更新
   * @param notes 新しいメモ
   */
  async updateNotes(notes: string): Promise<void> {
    if (!this._currentChecklist) {
      throw new Error('No checklist is currently loaded');
    }

    try {
      const updatedChecklist = ChecklistService.updateChecklist(this._currentChecklist, { notes });

      this._currentChecklist = updatedChecklist;
      this.saveCurrentChecklistAsync();
    } catch (error) {
      this._error = `Failed to update notes: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * 判定を設定
   * @param judgment 判定
   */
  async setJudgment(judgment: JudgmentType): Promise<void> {
    if (!this._currentChecklist) {
      throw new Error('No checklist is currently loaded');
    }

    try {
      const updatedChecklist = ChecklistService.updateChecklist(this._currentChecklist, {
        judgment
      });

      this._currentChecklist = updatedChecklist;
      this.saveCurrentChecklistAsync();
    } catch (error) {
      this._error = `Failed to set judgment: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * チェックリストを完了状態にする
   * @returns 完了成功フラグ
   */
  async completeChecklist(): Promise<boolean> {
    if (!this._currentChecklist) {
      this._error = 'No checklist is currently loaded';
      return false;
    }

    try {
      this._isLoading = true;
      this._error = null;

      // サービス層で完了処理
      const completedChecklist = ChecklistService.completeChecklist(this._currentChecklist);
      this._currentChecklist = completedChecklist;

      // 履歴アイテム作成
      const historyItem = ChecklistService.createHistoryItem(completedChecklist);

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

      // 保存処理を並行実行
      const [checklistResult, historyResult] = await Promise.all([
        this.storageService.saveChecklist(completedChecklist),
        this.storageService.saveHistory(this._history)
      ]);

      if (!checklistResult.success || !historyResult.success) {
        throw new Error('Failed to save completed checklist or history');
      }

      console.log('RefactoredChecklistStore: Checklist completed successfully');
      return true;
    } catch (error) {
      this._error = `Failed to complete checklist: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      return false;
    } finally {
      this._isLoading = false;
    }
  }

  // === HISTORY OPERATIONS ===

  /**
   * 履歴から削除
   * @param id チェックリストID
   */
  async deleteFromHistory(id: string): Promise<void> {
    try {
      this._history = this._history.filter(h => h.id !== id);

      // 並行でストレージからも削除
      await Promise.all([
        this.storageService.saveHistory(this._history),
        this.storageService.deleteChecklist(id)
      ]);

      console.log('RefactoredChecklistStore: Deleted from history:', id);
    } catch (error) {
      this._error = `Failed to delete from history: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      throw error;
    }
  }

  /**
   * 履歴を検索
   * @param criteria 検索条件
   * @param sort ソート条件
   * @returns 検索結果
   */
  searchHistory(criteria?: SearchCriteria, sort?: SortCriteria) {
    return SearchService.searchHistory(this._history, criteria, sort);
  }

  // === UTILITY METHODS ===

  /**
   * エクスポート用データを取得
   * @returns 現在のチェックリスト
   */
  getExportData(): ChecklistResult | null {
    return this._currentChecklist;
  }

  /**
   * 全履歴を取得
   * @returns 履歴配列
   */
  getAllHistory(): ChecklistHistoryItem[] {
    return this._history;
  }

  /**
   * エラーをクリア
   */
  clearError(): void {
    this._error = null;
  }

  /**
   * 推奨判定を取得
   * @returns 推奨判定
   */
  getRecommendedJudgment(): JudgmentType {
    if (!this._currentChecklist) return null;

    const analysis = this.detailedAnalysis;
    return ScoringService.getRecommendedJudgment(this.confidenceLevel, analysis.categories);
  }

  // === LANGUAGE MANAGEMENT ===

  /**
   * 言語変更リスナーを設定
   */
  private setupLanguageChangeListener(): void {
    // i18nストアの変更を定期的にチェック
    let lastLanguage = i18nStore.currentLanguage;

    const checkLanguageChange = () => {
      const currentLanguage = i18nStore.currentLanguage;
      if (currentLanguage !== lastLanguage && this._initialized && this._currentChecklist) {
        console.log(
          'RefactoredChecklistStore: Language changed from',
          lastLanguage,
          'to',
          currentLanguage
        );
        lastLanguage = currentLanguage;
        this.refreshCurrentChecklistItems();
      }
    };

    // 定期的なチェック（軽量）
    const intervalId = setInterval(checkLanguageChange, 500);

    // ページ離脱時にクリーンアップ
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => {
        clearInterval(intervalId);
      });
    }

    console.log('RefactoredChecklistStore: Language change listener setup completed');
  }

  /**
   * 現在のチェックリストのアイテムを現在の言語で更新
   */
  private refreshCurrentChecklistItems(): void {
    if (!this._currentChecklist) return;

    try {
      const refreshedChecklist = ChecklistService.refreshItemsForCurrentLanguage(
        this._currentChecklist
      );

      this._currentChecklist = refreshedChecklist;

      // 非同期でストレージに保存
      this.saveCurrentChecklistAsync();

      console.log('RefactoredChecklistStore: Checklist items refreshed for current language');
    } catch (error) {
      console.error('RefactoredChecklistStore: Failed to refresh checklist items:', error);
    }
  }

  /**
   * 手動でチェックリストアイテムを現在の言語で更新
   * @returns 更新成功フラグ
   */
  async refreshItemsForLanguage(): Promise<boolean> {
    if (!this._currentChecklist) {
      this._error = 'No checklist is currently loaded';
      return false;
    }

    try {
      this._isLoading = true;
      this._error = null;

      this.refreshCurrentChecklistItems();

      return true;
    } catch (error) {
      this._error = `Failed to refresh items for language: ${error}`;
      console.error('RefactoredChecklistStore:', this._error);
      return false;
    } finally {
      this._isLoading = false;
    }
  }

  // === PRIVATE HELPERS ===

  /**
   * 現在のチェックリストを非同期保存
   */
  private async saveCurrentChecklistAsync(): Promise<void> {
    if (!this._currentChecklist) return;

    try {
      const result = await this.storageService.saveChecklist(this._currentChecklist);
      if (!result.success) {
        console.warn('RefactoredChecklistStore: Failed to save checklist:', result.error);
      }
    } catch (error) {
      console.warn('RefactoredChecklistStore: Save error:', error);
    }
  }

  /**
   * ストレージから履歴を読み込み
   */
  private async loadHistoryFromStorage(): Promise<void> {
    try {
      const result = await this.storageService.loadHistory();
      if (result.success && result.data) {
        this._history = result.data as ChecklistHistoryItem[];
        console.log('RefactoredChecklistStore: History loaded:', this._history.length, 'items');

        // 保存されている全チェックリストの国際化マイグレーション
        const historyIds = this._history.map(h => h.id);
        await this.storageService.migrateAllChecklistsToI18n(historyIds);

        // 初期化完了フラグを設定
        this._initialized = true;
      }
    } catch (error) {
      console.warn('RefactoredChecklistStore: Failed to load history:', error);
    }
  }

  // === HEALTH CHECK ===

  /**
   * ストアの健全性チェック
   */
  async healthCheck(): Promise<{
    isHealthy: boolean;
    details: {
      storageReady: boolean;
      currentChecklistValid: boolean;
      historyCount: number;
    };
    errors: string[];
  }> {
    const errors: string[] = [];

    // ストレージ健全性チェック
    const storageHealth = await this.storageService.healthCheck();
    if (!storageHealth.isHealthy) {
      errors.push(...storageHealth.errors);
    }

    // 現在のチェックリスト検証
    let currentChecklistValid = true;
    if (this._currentChecklist) {
      const validation = ChecklistService.validateChecklist(this._currentChecklist);
      if (!validation.isValid) {
        currentChecklistValid = false;
        errors.push(...validation.errors);
      }
    }

    return {
      isHealthy: errors.length === 0,
      details: {
        storageReady: storageHealth.isHealthy,
        currentChecklistValid,
        historyCount: this._history.length
      },
      errors
    };
  }
}

// シングルトンインスタンス
export const refactoredChecklistStore = new RefactoredChecklistStore();
