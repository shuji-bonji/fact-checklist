// src/lib/tests/serviceIntegrationSimple.test.ts
// Phase 3 サービス層統合テスト（簡易版） - Vitest format

import { describe, it, expect } from 'vitest';
import { ChecklistService } from '../services/ChecklistService.js';
import { ScoringService } from '../services/ScoringService.js';
import { SearchService } from '../services/SearchService.js';
import type { ChecklistResult } from '../types/checklist.js';

/**
 * Phase 3: 簡易統合テスト (Vitest)
 * 主要なサービス機能と連携を検証
 */

describe('Simple Service Integration Tests', () => {
  describe('Basic Services', () => {
    it('should create checklist successfully', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });

      expect(checklist).toBeDefined();
      expect(checklist.items).toHaveLength(20);
    });

    it('should update checklist items', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });

      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );
      const targetItem = updatedChecklist.items.find(item => item.id === 'source-authority');

      expect(targetItem).toBeDefined();
      expect(targetItem?.checked).toBe(true);
    });

    it('should calculate scores correctly', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );

      const score = ScoringService.calculateScore(updatedChecklist.items);

      expect(score.total).toBe(1);
      expect(score.percentage).toBeGreaterThan(0);
    });

    it('should analyze scores with proper categories', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );

      const analysis = ScoringService.analyzeScore(updatedChecklist.items);

      expect(analysis.categories).toHaveLength(4);
    });

    it('should create history items', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );

      const historyItem = ChecklistService.createHistoryItem(updatedChecklist);

      expect(historyItem).toBeDefined();
      expect(historyItem.id).toBe(updatedChecklist.id);
    });

    it('should search history successfully', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );
      const historyItem = ChecklistService.createHistoryItem(updatedChecklist);

      const history = [historyItem];
      const searchResult = SearchService.searchHistory(history, { query: 'Test' });

      expect(searchResult.filteredCount).toBe(1);
    });

    it('should complete checklists', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );

      const completedChecklist = ChecklistService.completeChecklist(updatedChecklist);

      expect(completedChecklist.status).toBe('completed');
    });

    it('should validate checklists', () => {
      const checklist = ChecklistService.createChecklist({
        title: 'Test Checklist',
        description: 'Integration test checklist'
      });
      const updatedChecklist = ChecklistService.updateCheckItem(
        checklist,
        'source-authority',
        true
      );

      const validation = ChecklistService.validateChecklist(updatedChecklist);

      expect(validation.isValid).toBe(true);
    });
  });

  describe('Service Integration', () => {
    it('should integrate multiple services for complex workflow', () => {
      // Create multiple checklists
      const checklist1 = ChecklistService.createChecklist({ title: 'Checklist One' });
      const checklist2 = ChecklistService.createChecklist({ title: 'Checklist Two' });
      ChecklistService.createChecklist({ title: 'Another Test' }); // Create third checklist for testing

      // Update first checklist with 5 items
      let updated1 = checklist1;
      for (let i = 0; i < 5; i++) {
        const item = updated1.items[i];
        if (item) {
          updated1 = ChecklistService.updateCheckItem(updated1, item.id, true);
        }
      }

      // Update second checklist with 10 items
      let updated2 = checklist2;
      for (let i = 0; i < 10; i++) {
        const item = updated2.items[i];
        if (item) {
          updated2 = ChecklistService.updateCheckItem(updated2, item.id, true);
        }
      }

      // Calculate scores
      const score1 = ScoringService.calculateScore(updated1.items);
      const score2 = ScoringService.calculateScore(updated2.items);

      expect(score1.total).toBe(5);
      expect(score2.total).toBe(10);
    });

    it('should search history with different criteria', () => {
      const checklist1 = ChecklistService.createChecklist({ title: 'Checklist One' });
      const checklist2 = ChecklistService.createChecklist({ title: 'Checklist Two' });
      const _checklist3 = ChecklistService.createChecklist({ title: 'Another Test' });

      // Update checklists
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

      // Create history
      const history = [
        ChecklistService.createHistoryItem(updated1),
        ChecklistService.createHistoryItem(updated2),
        ChecklistService.createHistoryItem(_checklist3)
      ];

      // Basic search
      const searchBasic = SearchService.searchHistory(history, { query: 'One' });
      expect(searchBasic.filteredCount).toBe(1);

      // Score range search
      const searchScore = SearchService.searchHistory(history, {
        scoreRange: { min: 40, max: 60 }
      });
      expect(searchScore.filteredCount).toBeGreaterThan(0);

      // Advanced search
      const advancedSearch = SearchService.advancedSearch(history, 'Checklist');
      expect(advancedSearch.length).toBeGreaterThanOrEqual(2);
    });

    it('should compare and analyze scores', () => {
      const checklist1 = ChecklistService.createChecklist({ title: 'Checklist One' });
      const checklist2 = ChecklistService.createChecklist({ title: 'Checklist Two' });

      // Update first checklist with 5 items
      let updated1 = checklist1;
      for (let i = 0; i < 5; i++) {
        const item = updated1.items[i];
        if (item) {
          updated1 = ChecklistService.updateCheckItem(updated1, item.id, true);
        }
      }

      // Update second checklist with 10 items
      let updated2 = checklist2;
      for (let i = 0; i < 10; i++) {
        const item = updated2.items[i];
        if (item) {
          updated2 = ChecklistService.updateCheckItem(updated2, item.id, true);
        }
      }

      const score1 = ScoringService.calculateScore(updated1.items);
      const score2 = ScoringService.calculateScore(updated2.items);

      // Score comparison
      const comparison = ScoringService.compareScores(score1, score2);
      expect(comparison.improvement).toBeGreaterThan(0);

      // Recommended judgment
      const analysis = ScoringService.analyzeScore(updated2.items);
      const recommendation = ScoringService.getRecommendedJudgment(
        score2.percentage,
        analysis.categories
      );
      expect(['accept', 'caution', 'reject']).toContain(recommendation);
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid item updates gracefully', () => {
      const checklist = ChecklistService.createChecklist({ title: 'Error Test' });

      expect(() => {
        ChecklistService.updateCheckItem(checklist, 'invalid-id', true);
      }).toThrow();
    });

    it('should handle empty score calculations', () => {
      const emptyScore = ScoringService.calculateScore([]);

      expect(emptyScore.total).toBe(0);
      expect(emptyScore.percentage).toBe(0);
    });

    it('should handle empty history searches', () => {
      const emptySearch = SearchService.searchHistory([], { query: 'test' });

      expect(emptySearch.totalCount).toBe(0);
    });

    it('should validate invalid checklists correctly', () => {
      const checklist = ChecklistService.createChecklist({ title: 'Error Test' });
      const invalidChecklist = { ...checklist, items: [] } as ChecklistResult;

      const validation = ChecklistService.validateChecklist(invalidChecklist);

      expect(validation.isValid).toBe(false);
    });
  });
});
