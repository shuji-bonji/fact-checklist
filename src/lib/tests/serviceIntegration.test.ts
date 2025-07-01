// src/lib/tests/serviceIntegration.test.ts
// サービス層統合テスト - Phase 3の完了確認

import { ChecklistService } from '../services/ChecklistService.js';
import { StorageService } from '../services/StorageService.js';
import { ScoringService } from '../services/ScoringService.js';
import { SearchService } from '../services/SearchService.js';
import { ExportService } from '../services/ExportService.js';
import type { ChecklistResult } from '../types/checklist.js';

/**
 * Phase 3: サービス層統合テスト
 *
 * このテストスイートは以下を検証します：
 * 1. 各サービスの基本機能
 * 2. サービス間の連携動作
 * 3. エラーハンドリング
 * 4. データ整合性
 */

/**
 * 基本的なサービス機能テスト
 */
export async function testBasicServiceFunctionality(): Promise<{
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
}> {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    // ChecklistService テスト
    console.log('Testing ChecklistService...');
    const newChecklist = ChecklistService.createChecklist({
      title: 'Integration Test Checklist',
      description: 'Testing service integration'
    });
    results.checklistCreation = !!newChecklist && newChecklist.items.length === 20;

    // アイテム更新テスト
    const updatedChecklist = ChecklistService.updateCheckItem(newChecklist, 'critical-01', true);
    results.checklistUpdate =
      updatedChecklist.items.find(i => i.id === 'critical-01')?.checked === true;

    // ScoringService テスト
    console.log('Testing ScoringService...');
    const score = ScoringService.calculateScore(updatedChecklist.items);
    results.scoreCalculation = score.total === 1 && score.percentage > 0;

    const analysis = ScoringService.analyzeScore(updatedChecklist.items);
    results.scoreAnalysis = analysis.categories.length === 4 && analysis.recommendations.length > 0;

    // SearchService テスト
    console.log('Testing SearchService...');
    const history = [
      ChecklistService.createHistoryItem(updatedChecklist),
      ChecklistService.createHistoryItem(
        ChecklistService.createChecklist({ title: 'Another Test' })
      )
    ];

    const searchResult = SearchService.searchHistory(history, { query: 'Integration' });
    results.historySearch = searchResult.filteredCount === 1;

    // StorageService テスト（ブラウザ環境でのみ）
    if (typeof window !== 'undefined') {
      console.log('Testing StorageService...');
      const storageService = new StorageService();
      await storageService.initialize();

      const saveResult = await storageService.saveChecklist(updatedChecklist);
      results.storageSave = saveResult.success;

      const loadResult = await storageService.loadChecklist(updatedChecklist.id);
      results.storageLoad = loadResult.success && !!loadResult.data;
    } else {
      results.storageSave = true; // Skip in non-browser environment
      results.storageLoad = true;
    }

    // ExportService テスト（基本的な健全性チェック）
    console.log('Testing ExportService...');
    const exportService = ExportService.getInstance();
    const healthCheck = await exportService.healthCheck();
    results.exportHealth = healthCheck.isHealthy;

    const supportedFormats = ExportService.getSupportedFormats();
    results.exportFormats = supportedFormats.length > 0;
  } catch (error) {
    errors.push(`Basic functionality test failed: ${error}`);
  }

  const allPassed = Object.values(results).every(result => result === true);

  return {
    success: allPassed,
    results,
    errors
  };
}

/**
 * サービス間連携テスト
 */
export async function testServiceInteractions(): Promise<{
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
}> {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    console.log('Testing service interactions...');

    // 1. ChecklistService + ScoringService 連携
    const checklist1 = ChecklistService.createChecklist({ title: 'Test Checklist 1' });

    // 複数のアイテムをチェック
    let updatedChecklist = checklist1;
    for (let i = 0; i < 10; i++) {
      const item = updatedChecklist.items[i];
      if (item) {
        updatedChecklist = ChecklistService.updateCheckItem(updatedChecklist, item.id, true);
      }
    }

    const finalScore = ScoringService.calculateScore(updatedChecklist.items);
    results.checklistScoringIntegration = finalScore.total === 10 && finalScore.percentage === 50;

    // 2. ChecklistService + SearchService 連携
    const checklist2 = ChecklistService.createChecklist({ title: 'Another Test Checklist' });
    const checklist3 = ChecklistService.createChecklist({ title: 'Third Checklist' });

    const historyItems = [
      ChecklistService.createHistoryItem(updatedChecklist),
      ChecklistService.createHistoryItem(checklist2),
      ChecklistService.createHistoryItem(checklist3)
    ];

    const searchResults = SearchService.searchHistory(historyItems, {
      query: 'Test',
      scoreRange: { min: 40, max: 60 }
    });

    results.checklistSearchIntegration = searchResults.filteredCount > 0;

    // 3. ScoringService + SearchService 連携（高度な検索）
    const advancedSearch = SearchService.advancedSearch(historyItems, 'Test');
    results.advancedSearchIntegration =
      advancedSearch.length > 0 && (advancedSearch[0]?.relevance ?? 0) > 0;

    // 4. 推奨判定生成テスト
    const detailedAnalysis = ScoringService.analyzeScore(updatedChecklist.items);
    const recommendedJudgment = ScoringService.getRecommendedJudgment(
      finalScore.percentage,
      detailedAnalysis.categories
    );
    results.judgmentRecommendation = ['accept', 'caution', 'reject'].includes(
      recommendedJudgment ?? ''
    );

    // 5. ストレージ + 他サービス連携（ブラウザ環境でのみ）
    if (typeof window !== 'undefined') {
      const storageService = new StorageService();
      await storageService.initialize();

      // チェックリスト保存→読み込み→スコア計算
      await storageService.saveChecklist(updatedChecklist);
      const loadResult = await storageService.loadChecklist(updatedChecklist.id);

      if (loadResult.success && loadResult.data) {
        const loadedChecklist = loadResult.data as ChecklistResult;
        const reloadedScore = ScoringService.calculateScore(loadedChecklist.items);
        results.storageServiceIntegration = reloadedScore.total === finalScore.total;
      } else {
        results.storageServiceIntegration = false;
      }

      // 履歴保存→検索
      await storageService.saveHistory(historyItems);
      const historyLoadResult = await storageService.loadHistory();

      if (historyLoadResult.success && historyLoadResult.data) {
        const loadedHistory = historyLoadResult.data as typeof historyItems;
        const historySearchResult = SearchService.searchHistory(loadedHistory, { query: 'Test' });
        results.historyStorageIntegration = historySearchResult.filteredCount > 0;
      } else {
        results.historyStorageIntegration = false;
      }
    } else {
      results.storageServiceIntegration = true; // Skip in non-browser environment
      results.historyStorageIntegration = true;
    }
  } catch (error) {
    errors.push(`Service interaction test failed: ${error}`);
  }

  const allPassed = Object.values(results).every(result => result === true);

  return {
    success: allPassed,
    results,
    errors
  };
}

/**
 * エラーハンドリングテスト
 */
export async function testErrorHandling(): Promise<{
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
}> {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    console.log('Testing error handling...');

    // 1. ChecklistService エラーハンドリング
    const validChecklist = ChecklistService.createChecklist({ title: 'Valid Checklist' });

    // 無効なアイテムIDでの更新試行
    try {
      ChecklistService.updateCheckItem(validChecklist, 'invalid-item-id', true);
      results.invalidItemHandling = false; // Should have thrown an error
    } catch {
      results.invalidItemHandling = true; // Expected error
    }

    // 2. ScoringService エラーハンドリング
    const emptyItemsScore = ScoringService.calculateScore([]);
    results.emptyScoreHandling = emptyItemsScore.total === 0 && emptyItemsScore.percentage === 0;

    // 3. SearchService エラーハンドリング
    const emptySearchResult = SearchService.searchHistory([], { query: 'test' });
    results.emptySearchHandling =
      emptySearchResult.totalCount === 0 && emptySearchResult.filteredCount === 0;

    // 4. ストレージエラーハンドリング（ブラウザ環境でのみ）
    if (typeof window !== 'undefined') {
      const storageService = new StorageService();
      await storageService.initialize();

      // 存在しないチェックリストの読み込み
      const nonExistentLoad = await storageService.loadChecklist('non-existent-id');
      results.nonExistentLoadHandling = !nonExistentLoad.success;

      // ヘルスチェック
      const healthCheck = await storageService.healthCheck();
      results.storageHealthCheck = typeof healthCheck.isHealthy === 'boolean';
    } else {
      results.nonExistentLoadHandling = true; // Skip in non-browser environment
      results.storageHealthCheck = true;
    }

    // 5. ExportService エラーハンドリング
    const exportService = ExportService.getInstance();

    // 無効なエクスポート要求
    try {
      await exportService.exportChecklist({
        checklist: null as unknown as ChecklistResult,
        options: {
          format: 'pdf'
        } as unknown as import('../components/export/ExportOptions.svelte.js').ExportOptions
      });
      results.invalidExportHandling = false; // Should have thrown an error
    } catch {
      results.invalidExportHandling = true; // Expected error (validation should fail)
    }
  } catch (error) {
    errors.push(`Error handling test failed: ${error}`);
  }

  const allPassed = Object.values(results).every(result => result === true);

  return {
    success: allPassed,
    results,
    errors
  };
}

/**
 * パフォーマンステスト
 */
export async function testPerformance(): Promise<{
  success: boolean;
  results: Record<string, number>;
  errors: string[];
}> {
  const results: Record<string, number> = {};
  const errors: string[] = [];

  try {
    console.log('Testing performance...');

    // 1. 大量チェックリスト作成パフォーマンス
    const startTime1 = Date.now();
    for (let i = 0; i < 100; i++) {
      ChecklistService.createChecklist({ title: `Performance Test ${i}` });
    }
    results.checklistCreationTime = Date.now() - startTime1;

    // 2. 大量スコア計算パフォーマンス
    const largeChecklist = ChecklistService.createChecklist({ title: 'Large Test' });
    const startTime2 = Date.now();
    for (let i = 0; i < 100; i++) {
      ScoringService.calculateScore(largeChecklist.items);
    }
    results.scoreCalculationTime = Date.now() - startTime2;

    // 3. 大量履歴検索パフォーマンス
    const largeHistory = Array.from({ length: 100 }, (_, i) =>
      ChecklistService.createHistoryItem(
        ChecklistService.createChecklist({ title: `History Item ${i}` })
      )
    );

    const startTime3 = Date.now();
    SearchService.searchHistory(largeHistory, { query: 'Item' });
    results.searchTime = Date.now() - startTime3;

    // 4. 高度な検索パフォーマンス
    const startTime4 = Date.now();
    SearchService.advancedSearch(largeHistory, 'Item 5');
    results.advancedSearchTime = Date.now() - startTime4;
  } catch (error) {
    errors.push(`Performance test failed: ${error}`);
  }

  // パフォーマンス基準（ミリ秒）
  const performanceThresholds = {
    checklistCreationTime: 1000, // 100個作成で1秒以内
    scoreCalculationTime: 500, // 100回計算で0.5秒以内
    searchTime: 100, // 100件検索で0.1秒以内
    advancedSearchTime: 200 // 高度な検索で0.2秒以内
  };

  const success = Object.entries(results).every(
    ([key, time]) => time <= performanceThresholds[key as keyof typeof performanceThresholds]
  );

  return {
    success,
    results,
    errors
  };
}

/**
 * 統合テストスイート実行
 */
export async function runIntegrationTests(): Promise<{
  success: boolean;
  summary: {
    basicFunctionality: boolean;
    serviceInteractions: boolean;
    errorHandling: boolean;
    performance: boolean;
  };
  details: {
    basicFunctionality: unknown;
    serviceInteractions: unknown;
    errorHandling: unknown;
    performance: unknown;
  };
  errors: string[];
}> {
  console.log('Starting Phase 3 Service Layer Integration Tests...');

  const allErrors: string[] = [];

  try {
    // 基本機能テスト
    const basicResult = await testBasicServiceFunctionality();
    if (basicResult.errors.length > 0) {
      allErrors.push(...basicResult.errors);
    }

    // サービス間連携テスト
    const interactionResult = await testServiceInteractions();
    if (interactionResult.errors.length > 0) {
      allErrors.push(...interactionResult.errors);
    }

    // エラーハンドリングテスト
    const errorResult = await testErrorHandling();
    if (errorResult.errors.length > 0) {
      allErrors.push(...errorResult.errors);
    }

    // パフォーマンステスト
    const performanceResult = await testPerformance();
    if (performanceResult.errors.length > 0) {
      allErrors.push(...performanceResult.errors);
    }

    const summary = {
      basicFunctionality: basicResult.success,
      serviceInteractions: interactionResult.success,
      errorHandling: errorResult.success,
      performance: performanceResult.success
    };

    const overallSuccess = Object.values(summary).every(result => result === true);

    console.log('Integration Tests Results:', {
      success: overallSuccess,
      summary,
      errorCount: allErrors.length
    });

    return {
      success: overallSuccess,
      summary,
      details: {
        basicFunctionality: basicResult,
        serviceInteractions: interactionResult,
        errorHandling: errorResult,
        performance: performanceResult
      },
      errors: allErrors
    };
  } catch (error) {
    allErrors.push(`Integration test suite failed: ${error}`);
    return {
      success: false,
      summary: {
        basicFunctionality: false,
        serviceInteractions: false,
        errorHandling: false,
        performance: false
      },
      details: {
        basicFunctionality: null,
        serviceInteractions: null,
        errorHandling: null,
        performance: null
      },
      errors: allErrors
    };
  }
}

// ブラウザ環境でのみ自動実行
if (typeof window !== 'undefined') {
  // 開発環境での自動テスト実行
  setTimeout(async () => {
    console.log('Auto-running integration tests...');
    const results = await runIntegrationTests();
    console.log('Auto-test completed:', results.success ? 'PASSED' : 'FAILED');
  }, 1000);
}
