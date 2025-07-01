// src/lib/tests/serviceIntegrationSimple.test.ts
// Phase 3 サービス層統合テスト（簡易版）

import { ChecklistService } from '../services/ChecklistService.js';
import { ScoringService } from '../services/ScoringService.js';
import { SearchService } from '../services/SearchService.js';
import type { ChecklistResult } from '../types/checklist.js';

/**
 * Phase 3: 簡易統合テスト
 * 主要なサービス機能と連携を検証
 */

/**
 * 基本的なサービス機能をテスト
 */
export function testBasicServices(): {
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
} {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    console.log('Testing basic service functionality...');

    // 1. ChecklistService - チェックリスト作成
    const checklist = ChecklistService.createChecklist({
      title: 'Test Checklist',
      description: 'Integration test checklist'
    });
    results.checklistCreation = !!(checklist && checklist.items.length === 20);

    // 2. ChecklistService - アイテム更新
    const updatedChecklist = ChecklistService.updateCheckItem(checklist, 'critical-01', true);
    const targetItem = updatedChecklist.items.find(item => item.id === 'critical-01');
    results.itemUpdate = !!(targetItem && targetItem.checked === true);

    // 3. ScoringService - スコア計算
    const score = ScoringService.calculateScore(updatedChecklist.items);
    results.scoreCalculation = score.total === 1 && score.percentage > 0;

    // 4. ScoringService - 詳細分析
    const analysis = ScoringService.analyzeScore(updatedChecklist.items);
    results.scoreAnalysis = analysis.categories.length === 4;

    // 5. ChecklistService - 履歴アイテム作成
    const historyItem = ChecklistService.createHistoryItem(updatedChecklist);
    results.historyCreation = !!(historyItem && historyItem.id === updatedChecklist.id);

    // 6. SearchService - 履歴検索
    const history = [historyItem];
    const searchResult = SearchService.searchHistory(history, { query: 'Test' });
    results.historySearch = searchResult.filteredCount === 1;

    // 7. ChecklistService - チェックリスト完了
    const completedChecklist = ChecklistService.completeChecklist(updatedChecklist);
    results.checklistCompletion = completedChecklist.status === 'completed';

    // 8. ChecklistService - バリデーション
    const validation = ChecklistService.validateChecklist(updatedChecklist);
    results.checklistValidation = validation.isValid;
  } catch (error) {
    errors.push(`Basic service test failed: ${error}`);
  }

  const allPassed = Object.values(results).every(result => result === true);

  return {
    success: allPassed,
    results,
    errors
  };
}

/**
 * サービス間連携をテスト
 */
export function testServiceIntegration(): {
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
} {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    console.log('Testing service integration...');

    // 複数のチェックリストを作成
    const checklist1 = ChecklistService.createChecklist({ title: 'Checklist One' });
    const checklist2 = ChecklistService.createChecklist({ title: 'Checklist Two' });
    const checklist3 = ChecklistService.createChecklist({ title: 'Another Test' });

    // アイテムをいくつかチェック
    let updated1 = checklist1;
    for (let i = 0; i < 5; i++) {
      const item = updated1.items[i];
      if (item) {
        updated1 = ChecklistService.updateCheckItem(updated1, item.id, true);
      }
    }

    let updated2 = checklist2;
    for (let i = 0; i < 10; i++) {
      const item = updated2.items[i];
      if (item) {
        updated2 = ChecklistService.updateCheckItem(updated2, item.id, true);
      }
    }

    // スコア計算
    const score1 = ScoringService.calculateScore(updated1.items);
    const score2 = ScoringService.calculateScore(updated2.items);
    results.multipleScoring = score1.total === 5 && score2.total === 10;

    // 履歴作成と検索
    const history = [
      ChecklistService.createHistoryItem(updated1),
      ChecklistService.createHistoryItem(updated2),
      ChecklistService.createHistoryItem(checklist3)
    ];

    // 基本検索
    const searchBasic = SearchService.searchHistory(history, { query: 'One' });
    results.basicSearch = searchBasic.filteredCount === 1;

    // スコア範囲検索
    const searchScore = SearchService.searchHistory(history, {
      scoreRange: { min: 40, max: 60 }
    });
    results.scoreRangeSearch = searchScore.filteredCount > 0;

    // 高度な検索
    const advancedSearch = SearchService.advancedSearch(history, 'Checklist');
    results.advancedSearch = advancedSearch.length >= 2;

    // スコア比較
    const comparison = ScoringService.compareScores(score1, score2);
    results.scoreComparison = comparison.improvement > 0;

    // 推奨判定
    const analysis = ScoringService.analyzeScore(updated2.items);
    const recommendation = ScoringService.getRecommendedJudgment(
      score2.percentage,
      analysis.categories
    );
    results.judgmentRecommendation = ['accept', 'caution', 'reject'].includes(recommendation ?? '');
  } catch (error) {
    errors.push(`Service integration test failed: ${error}`);
  }

  const allPassed = Object.values(results).every(result => result === true);

  return {
    success: allPassed,
    results,
    errors
  };
}

/**
 * エラーハンドリングをテスト
 */
export function testErrorHandling(): {
  success: boolean;
  results: Record<string, boolean>;
  errors: string[];
} {
  const results: Record<string, boolean> = {};
  const errors: string[] = [];

  try {
    console.log('Testing error handling...');

    const checklist = ChecklistService.createChecklist({ title: 'Error Test' });

    // 1. 無効なアイテムIDでの更新
    try {
      ChecklistService.updateCheckItem(checklist, 'invalid-id', true);
      results.invalidItemError = false; // Should have thrown
    } catch {
      results.invalidItemError = true; // Expected error
    }

    // 2. 空配列でのスコア計算
    const emptyScore = ScoringService.calculateScore([]);
    results.emptyScoreHandling = emptyScore.total === 0 && emptyScore.percentage === 0;

    // 3. 空履歴での検索
    const emptySearch = SearchService.searchHistory([], { query: 'test' });
    results.emptySearchHandling = emptySearch.totalCount === 0;

    // 4. 無効なチェックリストのバリデーション
    const invalidChecklist = { ...checklist, items: [] } as ChecklistResult;
    const validation = ChecklistService.validateChecklist(invalidChecklist);
    results.invalidValidation = !validation.isValid;
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
 * 統合テストスイートを実行
 */
export function runSimpleIntegrationTests(): {
  success: boolean;
  summary: {
    basicServices: boolean;
    serviceIntegration: boolean;
    errorHandling: boolean;
  };
  details: {
    basicServices: ReturnType<typeof testBasicServices>;
    serviceIntegration: ReturnType<typeof testServiceIntegration>;
    errorHandling: ReturnType<typeof testErrorHandling>;
  };
  errors: string[];
} {
  console.log('Running Phase 3 Simple Integration Tests...');

  const allErrors: string[] = [];

  try {
    // テスト実行
    const basicResult = testBasicServices();
    const integrationResult = testServiceIntegration();
    const errorResult = testErrorHandling();

    // エラー収集
    allErrors.push(...basicResult.errors, ...integrationResult.errors, ...errorResult.errors);

    const summary = {
      basicServices: basicResult.success,
      serviceIntegration: integrationResult.success,
      errorHandling: errorResult.success
    };

    const overallSuccess = Object.values(summary).every(result => result === true);

    // 結果をログ出力
    console.log('Integration Test Results:', {
      success: overallSuccess,
      summary,
      errorCount: allErrors.length
    });

    if (overallSuccess) {
      console.log('✅ All Phase 3 integration tests passed!');
    } else {
      console.log('❌ Some integration tests failed.');
      console.log(
        'Failed tests:',
        Object.entries(summary).filter(([, success]) => !success)
      );
    }

    return {
      success: overallSuccess,
      summary,
      details: {
        basicServices: basicResult,
        serviceIntegration: integrationResult,
        errorHandling: errorResult
      },
      errors: allErrors
    };
  } catch (error) {
    allErrors.push(`Integration test suite failed: ${error}`);
    return {
      success: false,
      summary: {
        basicServices: false,
        serviceIntegration: false,
        errorHandling: false
      },
      details: {
        basicServices: { success: false, results: {}, errors: ['Test suite failed'] },
        serviceIntegration: { success: false, results: {}, errors: ['Test suite failed'] },
        errorHandling: { success: false, results: {}, errors: ['Test suite failed'] }
      },
      errors: allErrors
    };
  }
}

// 自動テスト実行（開発環境のみ）
if (typeof window !== 'undefined') {
  // ブラウザ環境での自動実行
  setTimeout(() => {
    console.log('Auto-running simple integration tests...');
    const results = runSimpleIntegrationTests();

    if (results.success) {
      console.log('🎉 Phase 3 service layer integration: SUCCESS');
    } else {
      console.log('⚠️ Phase 3 service layer integration: ISSUES DETECTED');
      console.log('Errors:', results.errors);
    }
  }, 1000);
}
