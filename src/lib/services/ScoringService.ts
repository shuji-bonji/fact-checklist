// src/lib/services/ScoringService.ts
// スコア計算と信頼度評価を管理するサービス

import type { CheckItem, ChecklistScore, JudgmentType } from '../types/checklist.js';
import { t } from '../i18n/index.js';

/**
 * カテゴリ別スコア詳細
 */
export interface CategoryScoreDetails {
  categoryId: string;
  name: string;
  checked: number;
  total: number;
  percentage: number;
  items: CheckItem[];
}

/**
 * 詳細スコア分析結果
 */
export interface DetailedScoreAnalysis {
  overall: ChecklistScore;
  categories: CategoryScoreDetails[];
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
  completionRate: number;
}

/**
 * 信頼度評価設定
 */
export interface ConfidenceThresholds {
  high: number;
  medium: number;
  low: number;
}

/**
 * スコアリングサービス
 * チェックリストのスコア計算、信頼度評価、推奨事項の生成を担当
 */
export class ScoringService {
  // デフォルトの信頼度閾値
  private static readonly DEFAULT_CONFIDENCE_THRESHOLDS: ConfidenceThresholds = {
    high: 80,
    medium: 60,
    low: 40
  };

  // カテゴリの最大アイテム数設定
  private static readonly CATEGORY_MAX_ITEMS = {
    critical: 5,
    detailed: 5,
    verification: 5,
    context: 5
  };

  /**
   * 基本スコア計算
   * @param items チェックアイテム配列
   * @returns 計算されたスコア
   */
  static calculateScore(items: CheckItem[]): ChecklistScore {
    const critical = items.filter(item => item.category.id === 'critical' && item.checked).length;
    const detailed = items.filter(item => item.category.id === 'detailed' && item.checked).length;
    const verification = items.filter(
      item => item.category.id === 'verification' && item.checked
    ).length;
    const context = items.filter(item => item.category.id === 'context' && item.checked).length;

    const total = critical + detailed + verification + context;
    const maxScore = 20; // 全カテゴリ合計
    const percentage = maxScore > 0 ? Math.round((total / maxScore) * 100) : 0;

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

  /**
   * 詳細スコア分析
   * @param items チェックアイテム配列
   * @param thresholds カスタム信頼度閾値（オプション）
   * @returns 詳細分析結果
   */
  static analyzeScore(
    items: CheckItem[],
    thresholds: ConfidenceThresholds = this.DEFAULT_CONFIDENCE_THRESHOLDS
  ): DetailedScoreAnalysis {
    const overall = this.calculateScore(items);

    // カテゴリ別詳細
    const categories = this.getCategoryDetails(items);

    // 推奨事項の生成
    const recommendations = this.generateRecommendations(categories, overall);

    // リスクレベルの判定
    const riskLevel = this.calculateRiskLevel(overall.percentage, thresholds);

    // 完了率の計算
    const completionRate = this.calculateCompletionRate(items);

    return {
      overall,
      categories,
      recommendations,
      riskLevel,
      completionRate
    };
  }

  /**
   * カテゴリ別詳細情報を取得
   * @param items チェックアイテム配列
   * @returns カテゴリ別詳細配列
   */
  static getCategoryDetails(items: CheckItem[]): CategoryScoreDetails[] {
    const categoryIds = ['critical', 'detailed', 'verification', 'context'];

    return categoryIds.map(categoryId => {
      const categoryItems = items.filter(item => item.category.id === categoryId);
      const checkedItems = categoryItems.filter(item => item.checked);
      const total = categoryItems.length;
      const checked = checkedItems.length;
      const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;

      return {
        categoryId,
        name: categoryItems[0]?.category.name ?? categoryId,
        checked,
        total,
        percentage,
        items: categoryItems
      };
    });
  }

  /**
   * 信頼度テキストを取得
   * @param confidenceLevel 信頼度レベル（パーセンテージ）
   * @param thresholds カスタム閾値（オプション）
   * @returns 信頼度テキスト
   */
  static getConfidenceText(
    confidenceLevel: number,
    thresholds: ConfidenceThresholds = this.DEFAULT_CONFIDENCE_THRESHOLDS
  ): string {
    if (confidenceLevel >= thresholds.high) return t('checklist.confidence.high');
    if (confidenceLevel >= thresholds.medium) return t('checklist.confidence.medium');
    if (confidenceLevel >= thresholds.low) return t('checklist.confidence.low');
    return t('checklist.confidence.poor');
  }

  /**
   * 判定アドバイスを取得
   * @param confidenceLevel 信頼度レベル（パーセンテージ）
   * @param thresholds カスタム閾値（オプション）
   * @returns 判定アドバイス
   */
  static getJudgmentAdvice(
    confidenceLevel: number,
    thresholds: ConfidenceThresholds = this.DEFAULT_CONFIDENCE_THRESHOLDS
  ): string {
    if (confidenceLevel >= thresholds.high) return t('checklist.advice.high');
    if (confidenceLevel >= thresholds.medium) return t('checklist.advice.medium');
    if (confidenceLevel >= thresholds.low) return t('checklist.advice.low');
    return t('checklist.advice.poor');
  }

  /**
   * 推奨判定を自動生成
   * @param confidenceLevel 信頼度レベル（パーセンテージ）
   * @param categories カテゴリ別詳細
   * @param thresholds カスタム閾値（オプション）
   * @returns 推奨判定
   */
  static getRecommendedJudgment(
    confidenceLevel: number,
    categories: CategoryScoreDetails[],
    thresholds: ConfidenceThresholds = this.DEFAULT_CONFIDENCE_THRESHOLDS
  ): JudgmentType {
    // 重要カテゴリ（critical）のチェック状況を重視
    const criticalCategory = categories.find(cat => cat.categoryId === 'critical');
    const criticalCompletion = criticalCategory ? criticalCategory.percentage : 0;

    // 重要項目が低い場合は慎重な判定
    if (criticalCompletion < 60) {
      return 'reject';
    }

    // 総合スコアに基づく判定
    if (confidenceLevel >= thresholds.high) {
      return 'accept';
    } else if (confidenceLevel >= thresholds.medium) {
      return 'caution';
    } else {
      return 'reject';
    }
  }

  /**
   * リスクレベルを計算
   * @param confidenceLevel 信頼度レベル
   * @param thresholds 閾値設定
   * @returns リスクレベル
   */
  private static calculateRiskLevel(
    confidenceLevel: number,
    thresholds: ConfidenceThresholds
  ): 'low' | 'medium' | 'high' {
    if (confidenceLevel >= thresholds.high) return 'low';
    if (confidenceLevel >= thresholds.medium) return 'medium';
    return 'high';
  }

  /**
   * 完了率を計算
   * @param items チェックアイテム配列
   * @returns 完了率（パーセンテージ）
   */
  private static calculateCompletionRate(items: CheckItem[]): number {
    if (items.length === 0) return 0;
    const checkedCount = items.filter(item => item.checked).length;
    return Math.round((checkedCount / items.length) * 100);
  }

  /**
   * 推奨事項を生成
   * @param categories カテゴリ別詳細
   * @param overall 総合スコア
   * @returns 推奨事項配列
   */
  private static generateRecommendations(
    categories: CategoryScoreDetails[],
    overall: ChecklistScore
  ): string[] {
    const recommendations: string[] = [];

    // 各カテゴリの完了率をチェック
    categories.forEach(category => {
      if (category.percentage < 50) {
        recommendations.push(`${category.name}カテゴリの項目をもう少し確認してください`);
      }
    });

    // 総合スコアに基づく推奨
    if (overall.percentage < 40) {
      recommendations.push('情報の信頼性に課題があります。より詳細な検証が必要です。');
    } else if (overall.percentage < 70) {
      recommendations.push('いくつかの項目で追加確認が推奨されます。');
    }

    // 重要カテゴリの特別チェック
    const criticalCategory = categories.find(cat => cat.categoryId === 'critical');
    if (criticalCategory && criticalCategory.percentage < 80) {
      recommendations.push('重要項目に特に注意を払ってください。');
    }

    // 推奨事項がない場合
    if (recommendations.length === 0 && overall.percentage >= 80) {
      recommendations.push('優秀な評価結果です！');
    }

    return recommendations;
  }

  /**
   * スコア比較（2つのスコアの差分分析）
   * @param score1 比較元スコア
   * @param score2 比較先スコア
   * @returns 比較結果
   */
  static compareScores(
    score1: ChecklistScore,
    score2: ChecklistScore
  ): {
    improvement: number;
    categoryChanges: Record<string, number>;
    summary: string;
  } {
    const improvement = score2.percentage - score1.percentage;

    const categoryChanges = {
      critical: score2.critical - score1.critical,
      detailed: score2.detailed - score1.detailed,
      verification: score2.verification - score1.verification,
      context: score2.context - score1.context
    };

    let summary: string;
    if (improvement > 10) {
      summary = '大幅な改善が見られます';
    } else if (improvement > 0) {
      summary = '改善が見られます';
    } else if (improvement < -10) {
      summary = '大幅な低下が見られます';
    } else if (improvement < 0) {
      summary = '低下が見られます';
    } else {
      summary = '変化なし';
    }

    return {
      improvement,
      categoryChanges,
      summary
    };
  }

  /**
   * スコア傾向分析（時系列データ用）
   * @param scores スコア配列（時系列）
   * @returns 傾向分析結果
   */
  static analyzeTrend(scores: ChecklistScore[]): {
    trend: 'improving' | 'declining' | 'stable';
    averageScore: number;
    volatility: number;
    recommendation: string;
  } {
    if (scores.length < 2) {
      return {
        trend: 'stable',
        averageScore: scores[0]?.percentage ?? 0,
        volatility: 0,
        recommendation: 'データが不十分です'
      };
    }

    const percentages = scores.map(s => s.percentage);
    const averageScore = percentages.reduce((sum, p) => sum + p, 0) / percentages.length;

    // 傾向計算（最初と最後を比較）
    const firstScore = percentages[0] ?? 0;
    const lastScore = percentages[percentages.length - 1] ?? 0;
    const change = lastScore - firstScore;

    // ボラティリティ計算（標準偏差）
    const variance =
      percentages.reduce((sum, p) => sum + Math.pow(p - averageScore, 2), 0) / percentages.length;
    const volatility = Math.sqrt(variance);

    let trend: 'improving' | 'declining' | 'stable';
    let recommendation: string;

    if (change > 5) {
      trend = 'improving';
      recommendation = '改善傾向にあります';
    } else if (change < -5) {
      trend = 'declining';
      recommendation = '低下傾向にあります';
    } else {
      trend = 'stable';
      recommendation = '安定しています';
    }

    return {
      trend,
      averageScore: Math.round(averageScore),
      volatility: Math.round(volatility),
      recommendation
    };
  }
}
