// src/lib/services/StorageService.ts
// データ永続化とマイグレーションを管理するサービス

import type { ChecklistResult, ChecklistHistoryItem } from '../types/checklist.js';
import {
  createStorageWithFallback,
  STORAGE_KEYS,
  type StorageInterface
} from '../config/storage.js';
import { StorageMigration, type IndexedDBStorage } from '../utils/indexedDBStorage.js';

/**
 * ストレージ操作の結果
 */
export interface StorageOperationResult {
  success: boolean;
  error?: string;
  data?: unknown;
}

/**
 * マイグレーション結果
 */
export interface MigrationResult {
  migrated: number;
  errors: string[];
  cleared: number;
}

/**
 * ストレージサービス
 * データの永続化、マイグレーション、キャッシュ管理を担当
 */
export class StorageService {
  private storage: StorageInterface | null = null;
  private storageInitialized = false;
  private initializationInProgress = false;
  private readonly isBrowser = typeof window !== 'undefined';

  /**
   * ストレージの初期化
   */
  async initialize(): Promise<void> {
    if (this.storageInitialized) {
      return;
    }

    if (this.initializationInProgress) {
      // 初期化完了まで待機
      while (this.initializationInProgress && !this.storageInitialized) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      return;
    }

    if (!this.isBrowser) {
      console.warn('StorageService: Not in browser environment');
      return;
    }

    this.initializationInProgress = true;

    try {
      // console.log('StorageService: Initializing storage...');
      this.storage = await createStorageWithFallback();
      // console.log('StorageService: Storage created successfully');

      // データマイグレーション実行
      // console.log('StorageService: Starting migration...');
      await this.migrateFromLocalStorage();
      // console.log('StorageService: Migration completed');

      this.storageInitialized = true;
      this.initializationInProgress = false;
      // console.log('StorageService: Initialization completed successfully');
    } catch (error) {
      console.error('StorageService: Initialization failed:', error);
      this.storageInitialized = false;
      this.initializationInProgress = false;
      throw new Error(`Storage initialization failed: ${error}`);
    }
  }

  /**
   * ストレージが利用可能かチェック
   */
  get isAvailable(): boolean {
    return this.isBrowser && this.storageInitialized && this.storage !== null;
  }

  /**
   * ストレージの準備完了を待機
   */
  async ensureReady(): Promise<void> {
    if (!this.storageInitialized) {
      await this.initialize();
    }

    if (!this.storage) {
      throw new Error('Storage is not available');
    }
  }

  /**
   * チェックリストを保存
   * @param checklist 保存するチェックリスト
   * @returns 保存結果
   */
  async saveChecklist(checklist: ChecklistResult): Promise<StorageOperationResult> {
    try {
      await this.ensureReady();

      const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${checklist.id}`;
      // console.log('StorageService: Saving checklist with key:', key);

      // Svelteプロキシをプレーンオブジェクトに変換
      const plainChecklist = JSON.parse(JSON.stringify(checklist)) as ChecklistResult;

      if (!this.storage) {
        throw new Error('Storage is not available');
      }
      await this.storage.setItem(key, plainChecklist);
      // console.log('StorageService: Checklist saved successfully');

      return { success: true };
    } catch (error) {
      const errorMessage = `Failed to save checklist: ${error}`;
      console.error('StorageService:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }

  /**
   * チェックリストを読み込み
   * @param id チェックリストID
   * @returns 読み込み結果
   */
  async loadChecklist(id: string): Promise<StorageOperationResult> {
    try {
      await this.ensureReady();

      const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${id}`;
      if (!this.storage) {
        throw new Error('Storage is not available');
      }
      const saved = await this.storage.getItem<ChecklistResult>(key);

      if (!saved) {
        return { success: false, error: 'Checklist not found' };
      }

      // 日付をDateオブジェクトに変換
      saved.createdAt = new Date(saved.createdAt);
      saved.updatedAt = new Date(saved.updatedAt);
      if (saved.completedAt) {
        saved.completedAt = new Date(saved.completedAt);
      }

      // console.log('StorageService: Checklist loaded successfully');
      return { success: true, data: saved };
    } catch (error) {
      const errorMessage = `Failed to load checklist: ${error}`;
      console.error('StorageService:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }

  /**
   * チェックリストを削除
   * @param id チェックリストID
   * @returns 削除結果
   */
  async deleteChecklist(id: string): Promise<StorageOperationResult> {
    try {
      await this.ensureReady();

      const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${id}`;
      if (!this.storage) {
        throw new Error('Storage is not available');
      }
      await this.storage.removeItem(key);

      // console.log('StorageService: Checklist deleted successfully');
      return { success: true };
    } catch (error) {
      const errorMessage = `Failed to delete checklist: ${error}`;
      console.error('StorageService:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }

  /**
   * 履歴を保存
   * @param history 保存する履歴
   * @returns 保存結果
   */
  async saveHistory(history: ChecklistHistoryItem[]): Promise<StorageOperationResult> {
    try {
      await this.ensureReady();

      // console.log('StorageService: Saving history with', history.length, 'items');

      // Svelteプロキシをプレーンオブジェクトに変換
      const plainHistory = JSON.parse(JSON.stringify(history)) as ChecklistResult[];

      if (!this.storage) {
        throw new Error('Storage is not available');
      }
      await this.storage.setItem(STORAGE_KEYS.HISTORY, plainHistory);
      // console.log('StorageService: History saved successfully');

      return { success: true };
    } catch (error) {
      const errorMessage = `Failed to save history: ${error}`;
      console.error('StorageService:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }

  /**
   * 履歴を読み込み
   * @returns 読み込み結果
   */
  async loadHistory(): Promise<StorageOperationResult> {
    try {
      await this.ensureReady();

      // console.log('StorageService: Loading history from storage');
      if (!this.storage) {
        throw new Error('Storage is not available');
      }
      const history = await this.storage.getItem<ChecklistHistoryItem[]>(STORAGE_KEYS.HISTORY);

      if (!history) {
        // console.log('StorageService: No history found in storage');
        return { success: true, data: [] };
      }

      // console.log('StorageService: Found history with', history.length, 'items');

      // 日付をDateオブジェクトに変換
      history.forEach(item => {
        item.completedAt = new Date(item.completedAt);
      });

      // console.log('StorageService: History loaded successfully');
      return { success: true, data: history };
    } catch (error) {
      const errorMessage = `Failed to load history: ${error}`;
      console.error('StorageService:', errorMessage);
      return { success: false, error: errorMessage };
    }
  }

  /**
   * localStorage からのデータマイグレーション
   * @returns マイグレーション結果
   */
  async migrateFromLocalStorage(): Promise<MigrationResult> {
    if (!this.storage || !this.isBrowser) {
      return { migrated: 0, errors: [], cleared: 0 };
    }

    try {
      // マイグレーション対象のキーパターン
      const keyPatterns = [
        STORAGE_KEYS.CHECKLIST_PREFIX, // checklist_ で始まるキー
        STORAGE_KEYS.HISTORY // checklist_history
      ];

      const result = await StorageMigration.migrateFromLocalStorage(
        this.storage as unknown as IndexedDBStorage,
        keyPatterns
      );

      if (result.migrated > 0) {
        console.warn(`StorageService: ${result.migrated} items migrated to IndexedDB`);

        // 移行完了後、localStorageのデータを削除
        const clearResult = StorageMigration.clearLocalStorageKeys(keyPatterns);
        if (clearResult.cleared > 0) {
          console.warn(`StorageService: ${clearResult.cleared} localStorage items cleared`);
        }

        return {
          migrated: result.migrated,
          errors: result.errors,
          cleared: clearResult.cleared
        };
      }

      return {
        migrated: result.migrated,
        errors: result.errors,
        cleared: 0
      };
    } catch (error) {
      const errorMessage = `Migration failed: ${error}`;
      console.error('StorageService:', errorMessage);
      return {
        migrated: 0,
        errors: [errorMessage],
        cleared: 0
      };
    }
  }

  /**
   * 全保存チェックリストに国際化マイグレーションを適用
   * @param historyIds 履歴ID配列
   * @returns マイグレーション結果
   */
  async migrateAllChecklistsToI18n(historyIds: string[]): Promise<MigrationResult> {
    if (!this.storage) {
      return { migrated: 0, errors: ['Storage not available'], cleared: 0 };
    }

    let migrated = 0;
    const errors: string[] = [];

    try {
      for (const id of historyIds) {
        const key = `${STORAGE_KEYS.CHECKLIST_PREFIX}${id}`;
        const checklist = await this.storage.getItem<ChecklistResult>(key);

        if (checklist) {
          let needsUpdate = false;

          checklist.items.forEach(item => {
            if (
              item.translationKey === null ||
              item.translationKey === undefined ||
              item.translationKey === ''
            ) {
              item.translationKey = item.id;
              needsUpdate = true;
            }
          });

          if (needsUpdate) {
            await this.storage.setItem(key, checklist);
            migrated++;
            // console.log(`StorageService: I18n migration completed for: ${id}`);
          }
        }
      }

      console.warn(`StorageService: I18n migration completed for ${migrated} checklists`);
      return { migrated, errors, cleared: 0 };
    } catch (error) {
      const errorMessage = `I18n migration failed: ${error}`;
      console.error('StorageService:', errorMessage);
      errors.push(errorMessage);
      return { migrated, errors, cleared: 0 };
    }
  }

  /**
   * ストレージの健全性チェック
   * @returns チェック結果
   */
  async healthCheck(): Promise<{
    isHealthy: boolean;
    details: {
      storageInitialized: boolean;
      storageAvailable: boolean;
      canWrite: boolean;
      canRead: boolean;
    };
    errors: string[];
  }> {
    const errors: string[] = [];
    const details = {
      storageInitialized: this.storageInitialized,
      storageAvailable: this.isAvailable,
      canWrite: false,
      canRead: false
    };

    try {
      if (this.isAvailable) {
        // 書き込みテスト
        const testKey = '__storage_health_check__';
        const testValue = { timestamp: Date.now() };

        if (!this.storage) {
          throw new Error('Storage is not available');
        }
        await this.storage.setItem(testKey, testValue);
        details.canWrite = true;

        // 読み込みテスト
        const retrieved = await this.storage.getItem(testKey);
        details.canRead = retrieved !== null && retrieved !== undefined;

        // テストデータを削除
        await this.storage.removeItem(testKey);
      } else {
        errors.push('Storage is not available');
      }
    } catch (error) {
      errors.push(`Health check failed: ${error}`);
    }

    return {
      isHealthy: errors.length === 0 && details.canWrite && details.canRead,
      details,
      errors
    };
  }

  /**
   * ストレージのクリーンアップ
   * 古いデータや不要なデータを削除
   */
  async cleanup(): Promise<{
    cleaned: number;
    errors: string[];
  }> {
    // 実装は将来の拡張として残す
    // 例：30日以上古いdraftステータスのチェックリストを削除
    return {
      cleaned: 0,
      errors: []
    };
  }
}
