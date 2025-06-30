export type RiskLevel = 'high' | 'medium' | 'low';
export type JudgmentType = 'accept' | 'caution' | 'reject' | null;
export type ChecklistStatus = 'draft' | 'completed' | 'archived';

export interface CheckItem {
  id: string;
  title: string;
  description: string;
  riskLevel: RiskLevel;
  category: CheckCategory;
  guideContent?: GuideContent;
  checked: boolean;
  // 国際化対応：翻訳キーID（新規項目）
  translationKey?: string;
}

export interface GuideContent {
  title: string;
  content: string;
  examples: {
    good: string[];
    bad: string[];
  };
}

export interface CheckCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  emoji: string;
}

export interface ChecklistScore {
  critical: number;
  detailed: number;
  verification: number;
  context: number;
  total: number;
  maxScore: number;
  percentage: number;
}

export interface ChecklistResult {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  status: ChecklistStatus;
  items: CheckItem[];
  score: ChecklistScore;
  judgment: JudgmentType;
  notes: string;
  confidenceLevel: number;
  confidenceText: string;
  judgmentAdvice: string;
}

export interface ChecklistHistoryItem {
  id: string;
  title: string;
  completedAt: Date;
  score: ChecklistScore;
  judgment: JudgmentType;
  confidenceLevel: number;
}

export interface ExportOptions {
  format: 'pdf' | 'html' | 'json';
  includeGuides: boolean;
  includeNotes: boolean;
}

export interface ShareOptions {
  method: 'email' | 'sms' | 'copy' | 'download';
  format: ExportOptions['format'];
}
