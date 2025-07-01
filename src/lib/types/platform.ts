// src/lib/types/platform.ts
// プラットフォーム関連の型定義

/**
 * ブラウザ情報
 */
export interface BrowserInfo {
  /** ブラウザ名 */
  name: string;

  /** バージョン */
  version: string;

  /** レンダリングエンジン */
  engine: string;

  /** User Agent文字列 */
  userAgent: string;
}

/**
 * オペレーティングシステム情報
 */
export interface OSInfo {
  /** OS名 */
  name: string;

  /** バージョン */
  version: string;

  /** プラットフォーム */
  platform: string;

  /** アーキテクチャ */
  architecture?: string;
}

/**
 * デバイス情報
 */
export interface DeviceInfo {
  /** デバイスタイプ */
  type: 'desktop' | 'tablet' | 'mobile';

  /** タッチデバイスか */
  isTouchDevice: boolean;

  /** 画面情報 */
  screen: {
    width: number;
    height: number;
    pixelRatio: number;
    colorDepth: number;
  };

  /** オリエンテーション */
  orientation?: 'portrait' | 'landscape';
}

/**
 * ブラウザ機能サポート情報
 */
export interface FeatureSupport {
  /** WebGL対応 */
  webgl: boolean;

  /** Canvas対応 */
  canvas: boolean;

  /** Service Worker対応 */
  serviceWorker: boolean;

  /** IndexedDB対応 */
  indexedDB: boolean;

  /** localStorage対応 */
  localStorage: boolean;

  /** sessionStorage対応 */
  sessionStorage: boolean;

  /** PDF表示対応 */
  pdfSupport: boolean;

  /** Clipboard API対応 */
  clipboardAPI: boolean;

  /** File API対応 */
  fileAPI: boolean;

  /** Web Workers対応 */
  webWorkers: boolean;

  /** WebAssembly対応 */
  webAssembly: boolean;

  /** Intersection Observer対応 */
  intersectionObserver: boolean;

  /** Resize Observer対応 */
  resizeObserver: boolean;

  /** CSS Grid対応 */
  cssGrid: boolean;

  /** CSS Flexbox対応 */
  cssFlexbox: boolean;

  /** CSS Variables対応 */
  cssVariables: boolean;
}

/**
 * パフォーマンス情報
 */
export interface PerformanceInfo {
  /** メモリ情報 */
  memory?: {
    used: number;
    total: number;
    limit: number;
  };

  /** 接続情報 */
  connection?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };

  /** ハードウェア並行性 */
  hardwareConcurrency: number;

  /** デバイスメモリ */
  deviceMemory?: number;
}

/**
 * 包括的なプラットフォーム情報
 */
export interface PlatformInfo {
  /** ブラウザ情報 */
  browser: BrowserInfo;

  /** OS情報 */
  os: OSInfo;

  /** デバイス情報 */
  device: DeviceInfo;

  /** 機能サポート */
  features: FeatureSupport;

  /** パフォーマンス情報 */
  performance: PerformanceInfo;

  /** 検出日時 */
  detectedAt: Date;
}

/**
 * プラットフォーム制約
 */
export interface PlatformConstraints {
  /** 最小ブラウザ要件 */
  minBrowserVersions: Record<string, number>;

  /** 必須機能 */
  requiredFeatures: (keyof FeatureSupport)[];

  /** 推奨機能 */
  recommendedFeatures: (keyof FeatureSupport)[];

  /** 最小画面サイズ */
  minScreenSize: {
    width: number;
    height: number;
  };

  /** 最小メモリ要件 */
  minMemoryMB: number;
}

/**
 * プラットフォーム互換性結果
 */
export interface CompatibilityResult {
  /** 互換性スコア（0-100） */
  score: number;

  /** 完全サポート */
  isFullySupported: boolean;

  /** 基本サポート */
  isBasicallySupported: boolean;

  /** 警告一覧 */
  warnings: string[];

  /** エラー一覧 */
  errors: string[];

  /** 推奨事項 */
  recommendations: string[];

  /** 不足機能 */
  missingFeatures: string[];

  /** 検証日時 */
  checkedAt: Date;
}

/**
 * プラットフォーム固有設定
 */
export interface PlatformSpecificSettings {
  /** iOS Safari対応 */
  iosSafari?: {
    preventZoom: boolean;
    hideAddressBar: boolean;
    fullscreenMode: boolean;
  };

  /** Android Chrome対応 */
  androidChrome?: {
    preventPullToRefresh: boolean;
    hideSystemUI: boolean;
    customTabsMode: boolean;
  };

  /** デスクトップ対応 */
  desktop?: {
    keyboardShortcuts: boolean;
    contextMenu: boolean;
    dragAndDrop: boolean;
  };

  /** PWA対応 */
  pwa?: {
    installPrompt: boolean;
    offlineSupport: boolean;
    backgroundSync: boolean;
  };
}

/**
 * プラットフォーム最適化設定
 */
export interface PlatformOptimization {
  /** 画像最適化 */
  imageOptimization: {
    webpSupport: boolean;
    avifSupport: boolean;
    lazyLoading: boolean;
    responsiveImages: boolean;
  };

  /** CSS最適化 */
  cssOptimization: {
    criticalCSS: boolean;
    prefersReducedMotion: boolean;
    darkModeSupport: boolean;
    highContrastSupport: boolean;
  };

  /** JavaScript最適化 */
  jsOptimization: {
    codesplitting: boolean;
    treeshaking: boolean;
    preloading: boolean;
    deferLoading: boolean;
  };

  /** パフォーマンス最適化 */
  performanceOptimization: {
    resourceHints: boolean;
    compressionSupport: boolean;
    cacheStrategy: string;
    bundleSize: number;
  };
}
