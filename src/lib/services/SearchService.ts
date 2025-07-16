// src/lib/services/SearchService.ts
// 検索・フィルタリング・ソート機能を管理するサービス

import type {
  ChecklistResult,
  CheckItem,
  ChecklistHistoryItem,
  JudgmentType,
  ChecklistStatus
} from '../types/checklist.js';

/**
 * 検索条件
 */
export interface SearchCriteria {
  query?: string;
  categories?: string[];
  status?: ChecklistStatus[];
  judgment?: JudgmentType[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  scoreRange?: {
    min: number;
    max: number;
  };
  confidenceRange?: {
    min: number;
    max: number;
  };
  tags?: string[];
}

/**
 * ソート条件
 */
export interface SortCriteria {
  field: 'title' | 'createdAt' | 'updatedAt' | 'completedAt' | 'score' | 'confidence';
  direction: 'asc' | 'desc';
}

/**
 * 検索結果
 */
export interface SearchResult<T> {
  items: T[];
  totalCount: number;
  filteredCount: number;
  query: SearchCriteria;
  executionTime: number;
}

/**
 * チェックアイテム検索条件
 */
export interface ItemSearchCriteria {
  query?: string;
  categories?: string[];
  checked?: boolean;
  riskLevel?: string[];
}

/**
 * 検索・フィルタリングサービス
 * チェックリスト、履歴、アイテムの検索・フィルタリング・ソート機能を提供
 */
export class SearchService {
  /**
   * チェックリスト履歴を検索
   * @param history 履歴配列
   * @param criteria 検索条件
   * @param sort ソート条件
   * @returns 検索結果
   */
  static searchHistory(
    history: ChecklistHistoryItem[],
    criteria: SearchCriteria = {},
    sort?: SortCriteria
  ): SearchResult<ChecklistHistoryItem> {
    const startTime = Date.now();
    const originalCount = history.length;

    let filteredItems = [...history];

    // テキスト検索
    if (criteria.query) {
      const query = criteria.query.toLowerCase();
      filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(query));
    }

    // 判定フィルター
    if (criteria.judgment && criteria.judgment.length > 0) {
      const judgmentFilter = criteria.judgment;
      filteredItems = filteredItems.filter(item => judgmentFilter.includes(item.judgment));
    }

    // 日付範囲フィルター
    if (criteria.dateRange) {
      const { start, end } = criteria.dateRange;
      filteredItems = filteredItems.filter(item => {
        const itemDate = new Date(item.completedAt);
        return itemDate >= start && itemDate <= end;
      });
    }

    // スコア範囲フィルター
    if (criteria.scoreRange) {
      const { min, max } = criteria.scoreRange;
      filteredItems = filteredItems.filter(
        item => item.score.percentage >= min && item.score.percentage <= max
      );
    }

    // 信頼度範囲フィルター
    if (criteria.confidenceRange) {
      const { min, max } = criteria.confidenceRange;
      filteredItems = filteredItems.filter(
        item => item.confidenceLevel >= min && item.confidenceLevel <= max
      );
    }

    // ソート
    if (sort) {
      filteredItems = this.sortHistoryItems(filteredItems, sort);
    }

    const executionTime = Date.now() - startTime;

    return {
      items: filteredItems,
      totalCount: originalCount,
      filteredCount: filteredItems.length,
      query: criteria,
      executionTime
    };
  }

  /**
   * チェックリストを検索
   * @param checklists チェックリスト配列
   * @param criteria 検索条件
   * @param sort ソート条件
   * @returns 検索結果
   */
  static searchChecklists(
    checklists: ChecklistResult[],
    criteria: SearchCriteria = {},
    sort?: SortCriteria
  ): SearchResult<ChecklistResult> {
    const startTime = Date.now();
    const originalCount = checklists.length;

    let filteredItems = [...checklists];

    // テキスト検索（タイトル、説明、メモ）
    if (criteria.query) {
      const query = criteria.query.toLowerCase();
      filteredItems = filteredItems.filter(
        item =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.notes.toLowerCase().includes(query)
      );
    }

    // ステータスフィルター
    if (criteria.status && criteria.status.length > 0) {
      const statusFilter = criteria.status;
      filteredItems = filteredItems.filter(item => statusFilter.includes(item.status));
    }

    // 判定フィルター
    if (criteria.judgment && criteria.judgment.length > 0) {
      const judgmentFilter = criteria.judgment;
      filteredItems = filteredItems.filter(item => judgmentFilter.includes(item.judgment));
    }

    // 作成日範囲フィルター
    if (criteria.dateRange) {
      const { start, end } = criteria.dateRange;
      filteredItems = filteredItems.filter(item => {
        const itemDate = new Date(item.createdAt);
        return itemDate >= start && itemDate <= end;
      });
    }

    // スコア範囲フィルター
    if (criteria.scoreRange) {
      const { min, max } = criteria.scoreRange;
      filteredItems = filteredItems.filter(
        item => item.score.percentage >= min && item.score.percentage <= max
      );
    }

    // 信頼度範囲フィルター
    if (criteria.confidenceRange) {
      const { min, max } = criteria.confidenceRange;
      filteredItems = filteredItems.filter(
        item => item.confidenceLevel >= min && item.confidenceLevel <= max
      );
    }

    // ソート
    if (sort) {
      filteredItems = this.sortChecklists(filteredItems, sort);
    }

    const executionTime = Date.now() - startTime;

    return {
      items: filteredItems,
      totalCount: originalCount,
      filteredCount: filteredItems.length,
      query: criteria,
      executionTime
    };
  }

  /**
   * チェックアイテムを検索
   * @param items チェックアイテム配列
   * @param criteria 検索条件
   * @returns 検索結果
   */
  static searchCheckItems(
    items: CheckItem[],
    criteria: ItemSearchCriteria = {}
  ): SearchResult<CheckItem> {
    const startTime = Date.now();
    const originalCount = items.length;

    let filteredItems = [...items];

    // テキスト検索（タイトル、説明）
    if (criteria.query) {
      const query = criteria.query.toLowerCase();
      filteredItems = filteredItems.filter(
        item =>
          item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
      );
    }

    // カテゴリフィルター
    if (criteria.categories && criteria.categories.length > 0) {
      const categoryFilter = criteria.categories;
      filteredItems = filteredItems.filter(item => categoryFilter.includes(item.category.id));
    }

    // チェック状態フィルター
    if (criteria.checked !== undefined) {
      filteredItems = filteredItems.filter(item => item.checked === criteria.checked);
    }

    // リスクレベルフィルター
    if (criteria.riskLevel && criteria.riskLevel.length > 0) {
      const riskLevelFilter = criteria.riskLevel;
      filteredItems = filteredItems.filter(item => riskLevelFilter.includes(item.riskLevel));
    }

    const executionTime = Date.now() - startTime;

    return {
      items: filteredItems,
      totalCount: originalCount,
      filteredCount: filteredItems.length,
      query: criteria as SearchCriteria,
      executionTime
    };
  }

  /**
   * 履歴アイテムをソート
   * @param items 履歴アイテム配列
   * @param sort ソート条件
   * @returns ソート済み配列
   */
  private static sortHistoryItems(
    items: ChecklistHistoryItem[],
    sort: SortCriteria
  ): ChecklistHistoryItem[] {
    return items.sort((a, b) => {
      let comparison = 0;

      switch (sort.field) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'completedAt':
          comparison = new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime();
          break;
        case 'score':
          comparison = a.score.percentage - b.score.percentage;
          break;
        case 'confidence':
          comparison = a.confidenceLevel - b.confidenceLevel;
          break;
        default:
          return 0;
      }

      return sort.direction === 'desc' ? -comparison : comparison;
    });
  }

  /**
   * チェックリストをソート
   * @param items チェックリスト配列
   * @param sort ソート条件
   * @returns ソート済み配列
   */
  private static sortChecklists(items: ChecklistResult[], sort: SortCriteria): ChecklistResult[] {
    return items.sort((a, b) => {
      let comparison = 0;

      switch (sort.field) {
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'createdAt':
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          break;
        case 'updatedAt':
          comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
          break;
        case 'completedAt':
          if (!a.completedAt && !b.completedAt) return 0;
          if (!a.completedAt) return 1;
          if (!b.completedAt) return -1;
          comparison = new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime();
          break;
        case 'score':
          comparison = a.score.percentage - b.score.percentage;
          break;
        case 'confidence':
          comparison = a.confidenceLevel - b.confidenceLevel;
          break;
        default:
          return 0;
      }

      return sort.direction === 'desc' ? -comparison : comparison;
    });
  }

  /**
   * 検索提案を生成
   * @param history 履歴データ
   * @param query 現在のクエリ
   * @returns 提案配列
   */
  static generateSearchSuggestions(history: ChecklistHistoryItem[], query: string = ''): string[] {
    const suggestions = new Set<string>();

    // 履歴からタイトルを抽出
    history.forEach(item => {
      const title = item.title.toLowerCase();
      if (title.includes(query.toLowerCase()) && title !== query.toLowerCase()) {
        suggestions.add(item.title);
      }
    });

    // 共通の検索ワードを追加
    const commonTerms = [
      '高信頼度',
      '低信頼度',
      '完了',
      '下書き',
      '受容',
      '注意',
      '拒否',
      '今日',
      '今週',
      '今月'
    ];

    commonTerms.forEach(term => {
      if (term.includes(query) && term !== query) {
        suggestions.add(term);
      }
    });

    return Array.from(suggestions).slice(0, 5); // 最大5件
  }

  /**
   * 高度な検索（全文検索風）
   * @param items 検索対象配列
   * @param query 検索クエリ
   * @returns 関連度付き結果
   */
  static advancedSearch<T extends ChecklistResult | ChecklistHistoryItem>(
    items: T[],
    query: string
  ): Array<T & { relevance: number }> {
    if (!query.trim()) {
      return items.map(item => ({ ...item, relevance: 0 }));
    }

    const queryTerms = query.toLowerCase().split(/\s+/);

    return items
      .map(item => {
        let relevance = 0;
        const title = item.title.toLowerCase();

        // タイトル完全一致
        if (title === query.toLowerCase()) {
          relevance += 100;
        }

        // タイトル部分一致
        queryTerms.forEach(term => {
          if (title.includes(term)) {
            relevance += 50;
          }
        });

        // 説明フィールドがある場合の検索
        if ('description' in item && item.description) {
          const description = item.description.toLowerCase();
          queryTerms.forEach(term => {
            if (description.includes(term)) {
              relevance += 20;
            }
          });
        }

        // メモフィールドがある場合の検索
        if ('notes' in item && item.notes) {
          const notes = item.notes.toLowerCase();
          queryTerms.forEach(term => {
            if (notes.includes(term)) {
              relevance += 10;
            }
          });
        }

        return { ...item, relevance };
      })
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);
  }

  /**
   * ファセット検索用の集計データを生成
   * @param items データ配列
   * @returns ファセット情報
   */
  static generateFacets(items: ChecklistResult[]): {
    status: Record<string, number>;
    judgment: Record<string, number>;
    scoreRanges: Record<string, number>;
    dateRanges: Record<string, number>;
  } {
    const facets = {
      status: {} as Record<string, number>,
      judgment: {} as Record<string, number>,
      scoreRanges: {
        '0-25': 0,
        '26-50': 0,
        '51-75': 0,
        '76-100': 0
      },
      dateRanges: {
        today: 0,
        thisWeek: 0,
        thisMonth: 0,
        older: 0
      }
    };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    items.forEach(item => {
      // ステータス集計
      facets.status[item.status] = (facets.status[item.status] ?? 0) + 1;

      // 判定集計
      if (item.judgment) {
        facets.judgment[item.judgment] = (facets.judgment[item.judgment] ?? 0) + 1;
      }

      // スコア範囲集計
      const score = item.score.percentage;
      if (score <= 25) facets.scoreRanges['0-25']++;
      else if (score <= 50) facets.scoreRanges['26-50']++;
      else if (score <= 75) facets.scoreRanges['51-75']++;
      else facets.scoreRanges['76-100']++;

      // 日付範囲集計
      const itemDate = new Date(item.createdAt);
      if (itemDate >= today) facets.dateRanges.today++;
      else if (itemDate >= thisWeek) facets.dateRanges.thisWeek++;
      else if (itemDate >= thisMonth) facets.dateRanges.thisMonth++;
      else facets.dateRanges.older++;
    });

    return facets;
  }

  /**
   * 検索パフォーマンス最適化のためのインデックス作成
   * @param items データ配列
   * @returns 検索インデックス
   */
  static createSearchIndex(items: ChecklistResult[]): Map<string, Set<number>> {
    const index = new Map<string, Set<number>>();

    items.forEach((item, itemIndex) => {
      // タイトルの単語分割
      const titleWords = item.title.toLowerCase().split(/\s+/);
      titleWords.forEach(word => {
        if (!index.has(word)) {
          index.set(word, new Set());
        }
        const wordSet = index.get(word);
        if (wordSet) {
          wordSet.add(itemIndex);
        }
      });

      // 説明の単語分割
      if (item.description) {
        const descWords = item.description.toLowerCase().split(/\s+/);
        descWords.forEach(word => {
          if (!index.has(word)) {
            index.set(word, new Set());
          }
          const wordSet = index.get(word);
          if (wordSet) {
            wordSet.add(itemIndex);
          }
        });
      }
    });

    return index;
  }
}
