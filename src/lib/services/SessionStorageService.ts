/**
 * SessionStorage管理サービス
 * 一時的な編集状態の保持に使用
 */

import type { ChecklistResult, CheckItem, JudgmentType } from '$lib/types/checklist';
import type { LanguageCode } from '$lib/i18n/types';

interface SessionData {
  title: string;
  description: string;
  notes: string;
  items: CheckItem[];
  judgment: JudgmentType;
  language?: LanguageCode;
  lastUpdated: string;
}

const SESSION_KEY = 'fact-checklist-session';

export class SessionStorageService {
  private static instance: SessionStorageService;

  private constructor() {}

  static getInstance(): SessionStorageService {
    if (!SessionStorageService.instance) {
      SessionStorageService.instance = new SessionStorageService();
    }
    return SessionStorageService.instance;
  }

  /**
   * sessionStorageが利用可能かチェック
   */
  isAvailable(): boolean {
    try {
      if (typeof window === 'undefined' || !window.sessionStorage) {
        return false;
      }

      // 書き込みテスト
      const testKey = '__test__';
      sessionStorage.setItem(testKey, 'test');
      sessionStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 現在の編集状態を保存
   */
  saveSession(checklist: Partial<ChecklistResult>): boolean {
    if (!this.isAvailable()) {
      return false;
    }

    try {
      const sessionData: SessionData = {
        title: checklist.title || '',
        description: checklist.description || '',
        notes: checklist.notes || '',
        items: checklist.items || [],
        judgment: checklist.judgment || null,
        lastUpdated: new Date().toISOString()
      };

      sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
      return true;
    } catch (error) {
      console.error('Failed to save session:', error);
      return false;
    }
  }

  /**
   * 編集状態を復元
   */
  loadSession(): SessionData | null {
    if (!this.isAvailable()) {
      return null;
    }

    try {
      const data = sessionStorage.getItem(SESSION_KEY);
      if (!data) {
        return null;
      }

      const sessionData = JSON.parse(data) as SessionData;

      // 24時間以上経過したデータは無効
      const lastUpdated = new Date(sessionData.lastUpdated);
      const now = new Date();
      const hoursDiff = (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60);

      if (hoursDiff > 24) {
        this.clearSession();
        return null;
      }

      return sessionData;
    } catch (error) {
      console.error('Failed to load session:', error);
      return null;
    }
  }

  /**
   * セッションをクリア
   */
  clearSession(): void {
    if (!this.isAvailable()) {
      return;
    }

    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.error('Failed to clear session:', error);
    }
  }

  /**
   * 言語設定のみ保存
   */
  saveLanguage(language: LanguageCode): void {
    if (!this.isAvailable()) {
      return;
    }

    try {
      const currentSession = this.loadSession();
      if (currentSession) {
        currentSession.language = language;
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(currentSession));
      }
    } catch (error) {
      console.error('Failed to save language:', error);
    }
  }
}
