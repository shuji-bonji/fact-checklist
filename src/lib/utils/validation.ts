// src/lib/utils/validation.ts
// バリデーション関連のユーティリティ関数

import type { ChecklistResult, CheckItem, JudgmentType } from '$lib/types/checklist.js';

/**
 * 文字列が空でないかチェックする
 * @param value チェックする値
 * @returns 空でない場合true
 */
export function isNotEmpty(value: string | null | undefined): boolean {
  return value != null && value.trim().length > 0;
}

/**
 * 文字列の長さが指定範囲内かチェックする
 * @param value チェックする値
 * @param min 最小長（デフォルト: 0）
 * @param max 最大長（デフォルト: 無制限）
 * @returns 範囲内の場合true
 */
export function isLengthInRange(value: string, min: number = 0, max: number = Infinity): boolean {
  return value.length >= min && value.length <= max;
}

/**
 * EmailアドレスかValidかチェックする
 * @param email チェックするメールアドレス
 * @returns 有効な場合true
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * URLが有効かチェックする
 * @param url チェックするURL
 * @returns 有効な場合true
 */
export function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 判定タイプが有効かチェックする
 * @param judgment チェックする判定
 * @returns 有効な場合true
 */
export function isValidJudgment(judgment: unknown): judgment is JudgmentType {
  return (
    judgment === null || judgment === 'accept' || judgment === 'caution' || judgment === 'reject'
  );
}

/**
 * スコアが有効な範囲内かチェックする
 * @param score チェックするスコア
 * @param maxScore 最大スコア
 * @returns 有効な場合true
 */
export function isValidScore(score: number, maxScore: number): boolean {
  return score >= 0 && score <= maxScore && Number.isInteger(score);
}

/**
 * 信頼度レベルが有効な範囲内かチェックする
 * @param level チェックするレベル
 * @returns 有効な場合true（0-100の範囲）
 */
export function isValidConfidenceLevel(level: number): boolean {
  return level >= 0 && level <= 100;
}

/**
 * チェックリスト結果が完全に有効かチェックする
 * @param checklist チェックする結果
 * @returns 有効な場合true、エラー詳細
 */
export function validateChecklistResult(checklist: ChecklistResult): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // 基本フィールドのチェック
  if (!isNotEmpty(checklist.id)) {
    errors.push('ID is required');
  }

  if (!isNotEmpty(checklist.title)) {
    errors.push('Title is required');
  }

  if (!checklist.createdAt || !(checklist.createdAt instanceof Date)) {
    errors.push('Valid creation date is required');
  }

  // スコアのチェック
  if (!isValidScore(checklist.score.total, checklist.score.maxScore)) {
    errors.push('Invalid score values');
  }

  if (!isValidConfidenceLevel(checklist.confidenceLevel)) {
    errors.push('Invalid confidence level');
  }

  // 判定のチェック
  if (!isValidJudgment(checklist.judgment)) {
    errors.push('Invalid judgment value');
  }

  // アイテムのチェック
  if (!Array.isArray(checklist.items) || checklist.items.length === 0) {
    errors.push('Items array is required and must not be empty');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * チェックアイテムが有効かチェックする
 * @param item チェックするアイテム
 * @returns 有効な場合true、エラー詳細
 */
export function validateCheckItem(item: CheckItem): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!isNotEmpty(item.id)) {
    errors.push('Item ID is required');
  }

  if (!isNotEmpty(item.title)) {
    errors.push('Item title is required');
  }

  if (typeof item.checked !== 'boolean') {
    errors.push('Checked status must be boolean');
  }

  if (!item.category || !isNotEmpty(item.category.id)) {
    errors.push('Valid category is required');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * ファイル名が安全かチェックする
 * @param filename チェックするファイル名
 * @returns 安全な場合true
 */
export function isValidFilename(filename: string): boolean {
  // 危険な文字やパターンをチェック
  const dangerousChars = /[<>:"/\\|?*]/;
  const reservedNames = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i;

  return (
    !dangerousChars.test(filename) &&
    !reservedNames.test(filename) &&
    filename.length > 0 &&
    filename.length <= 255
  );
}

/**
 * MIMEタイプが許可されているかチェックする
 * @param mimeType チェックするMIMEタイプ
 * @param allowedTypes 許可されたMIMEタイプのリスト
 * @returns 許可されている場合true
 */
export function isAllowedMimeType(
  mimeType: string,
  allowedTypes: string[] = ['application/pdf', 'text/html', 'application/json', 'text/markdown']
): boolean {
  return allowedTypes.includes(mimeType);
}

/**
 * エクスポートオプションが有効かチェックする
 * @param options チェックするオプション
 * @returns 有効な場合true、エラー詳細
 */
export function validateExportOptions(options: Record<string, unknown>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  const validFormats = ['pdf', 'html', 'json', 'markdown'];
  if (!validFormats.includes(options.format as string)) {
    errors.push('Invalid export format');
  }

  // ブール値オプションのチェック
  const booleanOptions = [
    'includeGuides',
    'includeNotes',
    'includeSummary',
    'sectionBreaks',
    'textMode',
    'advancedMode',
    'reliableMode',
    'pixelPerfectMode'
  ];
  for (const option of booleanOptions) {
    if (options[option] !== undefined && typeof options[option] !== 'boolean') {
      errors.push(`${option} must be boolean`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
