// src/lib/services/ChecklistService.ts
// チェックリストの主要ビジネスロジックを管理するサービス

import type {
  ChecklistResult,
  CheckItem,
  JudgmentType,
  ChecklistHistoryItem
} from '../types/checklist.js';
import { getChecklistItems } from '../data/checklist-items.js';
import { v4 as uuidv4 } from 'uuid';
import { t } from '../i18n/simple-store.svelte.js';

/**
 * チェックリスト作成オプション
 */
export interface CreateChecklistOptions {
  title?: string;
  description?: string;
  autoGenerateTitle?: boolean;
}

/**
 * チェックリストアップデートオプション
 */
export interface UpdateChecklistOptions {
  title?: string;
  description?: string;
  notes?: string;
  judgment?: JudgmentType;
}

/**
 * チェックリストサービス
 * チェックリストの作成、更新、検証に関するビジネスロジックを提供
 */
export class ChecklistService {
  /**
   * 新しいチェックリストを作成
   * @param options 作成オプション
   * @returns 作成されたチェックリスト
   */
  static createChecklist(options: CreateChecklistOptions = {}): ChecklistResult {
    const { title = '', description = '', autoGenerateTitle = true } = options;

    const id = uuidv4();
    const now = new Date();

    // デフォルトタイトルの生成
    const finalTitle =
      title ||
      (autoGenerateTitle ? `${t('checklist.defaultFileName')}_${now.toLocaleDateString()}` : '');

    // チェックアイテムのコピーを作成（未チェック状態）
    const items: CheckItem[] = getChecklistItems().map(item => ({
      ...item,
      checked: false
    }));

    // 初期スコアを計算
    const initialScore = this.calculateScore(items);

    const checklist: ChecklistResult = {
      id,
      title: finalTitle,
      description,
      createdAt: now,
      updatedAt: now,
      status: 'draft',
      items,
      score: initialScore,
      judgment: null,
      notes: '',
      confidenceLevel: initialScore.percentage,
      confidenceText: this.getConfidenceText(initialScore.percentage),
      judgmentAdvice: this.getJudgmentAdvice(initialScore.percentage),
      isUserSetTitle: !!title
    };

    return checklist;
  }

  /**
   * チェックリストを更新
   * @param checklist 更新対象のチェックリスト
   * @param updates 更新内容
   * @returns 更新されたチェックリスト
   */
  static updateChecklist(
    checklist: ChecklistResult,
    updates: UpdateChecklistOptions
  ): ChecklistResult {
    const updatedChecklist = { ...checklist };
    const now = new Date();

    // タイトル更新
    if (updates.title !== undefined) {
      updatedChecklist.title = updates.title;
      updatedChecklist.isUserSetTitle = !!updates.title;
    }

    // その他のフィールド更新
    if (updates.description !== undefined) {
      updatedChecklist.description = updates.description;
    }

    if (updates.notes !== undefined) {
      updatedChecklist.notes = updates.notes;
    }

    if (updates.judgment !== undefined) {
      updatedChecklist.judgment = updates.judgment;
    }

    // 更新日時を設定
    updatedChecklist.updatedAt = now;

    return updatedChecklist;
  }

  /**
   * チェックアイテムの状態を更新
   * @param checklist 対象のチェックリスト
   * @param itemId アイテムID
   * @param checked チェック状態
   * @returns 更新されたチェックリスト
   */
  static updateCheckItem(
    checklist: ChecklistResult,
    itemId: string,
    checked: boolean
  ): ChecklistResult {
    const updatedChecklist = { ...checklist };
    const items = [...updatedChecklist.items];

    // 対象アイテムを更新
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex === -1) {
      throw new Error(`Check item with ID ${itemId} not found`);
    }

    const currentItem = items[itemIndex];
    if (!currentItem) {
      throw new Error(`Item not found at index ${itemIndex}`);
    }
    items[itemIndex] = {
      id: currentItem.id,
      title: currentItem.title,
      description: currentItem.description,
      riskLevel: currentItem.riskLevel,
      category: currentItem.category,
      checked,
      ...(currentItem.guideContent !== null &&
        currentItem.guideContent !== undefined && { guideContent: currentItem.guideContent }),
      ...(currentItem.translationKey !== null &&
        currentItem.translationKey !== undefined &&
        currentItem.translationKey !== '' && { translationKey: currentItem.translationKey })
    };
    updatedChecklist.items = items;

    // スコアと関連プロパティを再計算
    const newScore = this.calculateScore(items);
    updatedChecklist.score = newScore;
    updatedChecklist.confidenceLevel = newScore.percentage;
    updatedChecklist.confidenceText = this.getConfidenceText(newScore.percentage);
    updatedChecklist.judgmentAdvice = this.getJudgmentAdvice(newScore.percentage);
    updatedChecklist.updatedAt = new Date();

    return updatedChecklist;
  }

  /**
   * チェックリストを完了状態にする
   * @param checklist 対象のチェックリスト
   * @returns 完了状態に更新されたチェックリスト
   */
  static completeChecklist(checklist: ChecklistResult): ChecklistResult {
    const now = new Date();

    return {
      ...checklist,
      status: 'completed',
      completedAt: now,
      updatedAt: now
    };
  }

  /**
   * 履歴アイテムを作成
   * @param checklist 対象のチェックリスト
   * @returns 履歴アイテム
   */
  static createHistoryItem(checklist: ChecklistResult): ChecklistHistoryItem {
    return {
      id: checklist.id,
      title: checklist.title,
      completedAt: checklist.completedAt ?? new Date(),
      score: checklist.score,
      judgment: checklist.judgment,
      confidenceLevel: checklist.confidenceLevel
    };
  }

  /**
   * スコア計算
   * @param items チェックアイテム配列
   * @returns 計算されたスコア
   */
  static calculateScore(items: CheckItem[]): {
    critical: number;
    detailed: number;
    verification: number;
    context: number;
    total: number;
    maxScore: number;
    percentage: number;
  } {
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

  /**
   * 信頼度テキストを取得
   * @param confidenceLevel 信頼度レベル（パーセンテージ）
   * @returns 信頼度テキスト
   */
  static getConfidenceText(confidenceLevel: number): string {
    if (confidenceLevel >= 80) return t('checklist.confidence.high');
    if (confidenceLevel >= 60) return t('checklist.confidence.medium');
    if (confidenceLevel >= 40) return t('checklist.confidence.low');
    return t('checklist.confidence.poor');
  }

  /**
   * 判定アドバイスを取得
   * @param confidenceLevel 信頼度レベル（パーセンテージ）
   * @returns 判定アドバイス
   */
  static getJudgmentAdvice(confidenceLevel: number): string {
    if (confidenceLevel >= 80) return t('checklist.advice.high');
    if (confidenceLevel >= 60) return t('checklist.advice.medium');
    if (confidenceLevel >= 40) return t('checklist.advice.low');
    return t('checklist.advice.poor');
  }

  /**
   * 効果的なタイトルを取得（言語対応）
   * @param checklist 対象のチェックリスト
   * @returns 効果的なタイトル
   */
  static getEffectiveTitle(checklist: ChecklistResult): string {
    // 後方互換性: isUserSetTitleが未定義の場合は、既存のタイトルを使用
    if (checklist.isUserSetTitle === undefined) {
      return checklist.title;
    }

    // ユーザーが設定したタイトルの場合はそのまま返す
    if (checklist.isUserSetTitle) {
      return checklist.title;
    }

    // 自動生成タイトルの場合は現在の言語で生成
    return `${t('checklist.title')}_${checklist.createdAt.toLocaleDateString()}`;
  }

  /**
   * チェックリストアイテムの国際化マイグレーション
   * @param checklist 対象のチェックリスト
   * @returns マイグレーション済みのチェックリスト
   */
  static migrateToI18n(checklist: ChecklistResult): ChecklistResult {
    const migratedChecklist = { ...checklist };

    migratedChecklist.items = checklist.items.map(item => ({
      ...item,
      translationKey: item.translationKey ?? item.id
    }));

    return migratedChecklist;
  }

  /**
   * チェックリストアイテムを現在の言語で更新
   * @param checklist 更新対象のチェックリスト
   * @returns 言語更新されたチェックリスト
   */
  static refreshItemsForCurrentLanguage(checklist: ChecklistResult): ChecklistResult {
    const updatedChecklist = { ...checklist };

    // 現在の言語で新しいチェックリストアイテムを取得
    const currentLanguageItems = getChecklistItems();

    // 既存のチェック状態を保持しながらアイテムを更新
    updatedChecklist.items = currentLanguageItems.map(newItem => {
      // 同じIDの既存アイテムを検索
      const existingItem = checklist.items.find(item => item.id === newItem.id);

      return {
        ...newItem,
        // 既存のチェック状態を保持
        checked: existingItem ? existingItem.checked : false
      };
    });

    // デフォルトタイトルの場合は現在の言語で更新
    if (this.isDefaultTitle(updatedChecklist.title)) {
      updatedChecklist.title = this.generateDefaultTitle(updatedChecklist.createdAt);
    }

    // 信頼度テキストと判定アドバイスも現在の言語で更新
    updatedChecklist.confidenceText = this.getConfidenceText(updatedChecklist.confidenceLevel);
    updatedChecklist.judgmentAdvice = this.getJudgmentAdvice(updatedChecklist.confidenceLevel);

    // 更新日時を設定
    updatedChecklist.updatedAt = new Date();

    return updatedChecklist;
  }

  /**
   * チェックリストの妥当性を検証
   * @param checklist 検証対象のチェックリスト
   * @returns 検証結果
   */
  static validateChecklist(checklist: ChecklistResult): {
    isValid: boolean;
    errors: string[];
  } {
    const errors: string[] = [];

    // 必須フィールドの検証
    if (!checklist.id) {
      errors.push('Checklist ID is required');
    }

    if (!checklist.title) {
      errors.push('Checklist title is required');
    }

    if (checklist.items === null || checklist.items === undefined || checklist.items.length === 0) {
      errors.push('Checklist must contain at least one item');
    }

    if (checklist.createdAt === null || checklist.createdAt === undefined) {
      errors.push('Created date is required');
    }

    if (checklist.updatedAt === null || checklist.updatedAt === undefined) {
      errors.push('Updated date is required');
    }

    // アイテムの検証
    checklist.items?.forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item ${index} is missing ID`);
      }
      if (!item.title) {
        errors.push(`Item ${index} is missing title`);
      }
      if (item.category === null || item.category === undefined) {
        errors.push(`Item ${index} is missing category`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * デフォルトタイトルかどうかを判定
   * @param title チェックするタイトル
   * @returns デフォルトタイトルの場合true
   */
  static isDefaultTitle(title: string): boolean {
    if (title === null || title === '') return false;

    // パターン: "翻訳文_日付" または "Translation_Date"
    const patterns = [
      /^.*_\d{4}\/\d{1,2}\/\d{1,2}$/, // YYYY/M/D形式
      /^.*_\d{1,2}\/\d{1,2}\/\d{4}$/, // M/D/YYYY形式
      /^.*_\d{4}-\d{1,2}-\d{1,2}$/ // YYYY-M-D形式
    ];

    return patterns.some(pattern => pattern.test(title));
  }

  /**
   * デフォルトタイトルを生成
   * @param createdAt 作成日時
   * @returns 現在の言語でのデフォルトタイトル
   */
  static generateDefaultTitle(createdAt: Date): string {
    return `${t('checklist.defaultFileName')}_${createdAt.toLocaleDateString()}`;
  }
}
