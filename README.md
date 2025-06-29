# 🔍 Practical Fact-Check Checklist / 実用的事実確認チェックシート

> 🌍 **International 12-Language Support** | A sophisticated PWA (Progressive
> Web App) for scientific and systematic evaluation of information reliability
> with full internationalization

[![Build and Deploy](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml/badge.svg)](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude](https://img.shields.io/badge/Generated_by-Claude-ff8c00)](https://claude.ai)
[![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Svelte](https://img.shields.io/badge/-Svelte-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/)
[![PWA](https://img.shields.io/badge/-PWA-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

## 🌟 Overview / 概要

The Practical Fact-Check Checklist is an **enterprise-grade progressive web
application** for scientifically and systematically evaluating the reliability
of online information. In an era where misinformation and misleading content
proliferate, this application supports the improvement of information literacy
across **12 languages** with full internationalization support.

実用的事実確認チェックシートは、インターネット上の情報の信頼性を科学的・体系的に評価するための**企業レベル高度PWA**です。偽情報やミスリーディングな情報が氾濫する現代において、**12言語完全対応**の国際化機能で情報リテラシーの向上を支援します。

> [!IMPORTANT] This "Practical Fact-Check Checklist" project is created through
> collaboration between a human engineer (@shuji-bonji) and AI
> (Claude). この「実用的事実確認チェックシート」プロジェクト(Github)は、人間のエンジニア（@shuji-bonji）と生成AI（Claude）との協働によって作成されています。

### 🎯 Key Features / 主な特徴

- **🌍 Full Internationalization**: Complete support for 12 languages with RTL
  text support
- **📱 Advanced PWA**: Platform-adaptive features and complete offline
  functionality
- **🔐 Complete Privacy**: All data stored locally, no server communication
- **📊 Scientific Evaluation**: Comprehensive 20-item checklist across 4
  categories
- **🎨 Responsive Design**: Desktop and mobile optimized with dark mode support
- **📄 Advanced PDF Generation**: International font support for all 12
  languages
  - Multi-language font management (Latin, CJK, Devanagari, Arabic scripts)
  - RTL text rendering for Arabic
  - Three PDF modes (Pixel-perfect/Font-embedded/Text-based)
- **🔄 History Management**: Save and reference past evaluation results
- **♿ Accessibility**: WCAG-compliant universal design
- **⚡ Performance Optimization**: Font caching, progress indicators, error
  handling

### 🌐 Supported Languages / 対応言語

| Language                       | Code  | Script     | Status            |
| ------------------------------ | ----- | ---------- | ----------------- |
| 日本語 (Japanese)              | ja    | CJK        | ✅ Complete       |
| English                        | en    | Latin      | ✅ Complete       |
| Français (French)              | fr    | Latin      | ✅ Complete       |
| 繁體中文 (Traditional Chinese) | zh-TW | CJK        | ✅ Complete       |
| Español (Spanish)              | es    | Latin      | ✅ Complete       |
| Português (Portuguese)         | pt    | Latin      | ✅ Complete       |
| हिन्दी (Hindi)                 | hi    | Devanagari | ✅ Complete       |
| Deutsch (German)               | de    | Latin      | ✅ Complete       |
| Italiano (Italian)             | it    | Latin      | ✅ Complete       |
| العربية (Arabic)               | ar    | Arabic     | ✅ Complete (RTL) |
| Bahasa Indonesia               | id    | Latin      | ✅ Complete       |
| 한국어 (Korean)                | ko    | CJK        | ✅ Complete       |

## 🚀 クイックスタート

### オンラインで利用

**👉
[https://shuji-bonji.github.io/fact-checklist/](https://shuji-bonji.github.io/fact-checklist/)**

### ローカル開発

```bash
# リポジトリをクローン
git clone https://github.com/shuji-bonji/fact-checklist.git
cd fact-checklist

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 を開く
```

## 📋 チェック項目一覧

### 🚨 クリティカル評価（必須）- 6項目

| チェック項目               | 説明                                                               |
| -------------------------- | ------------------------------------------------------------------ |
| 権威ある情報源からの発表   | 政府機関、学術機関、専門機関、査読済み論文、信頼できるメディアなど |
| 一次情報の確認             | 又聞き・伝聞ではなく、直接的な情報源からの発信                     |
| 複数の独立した情報源       | 同じ内容が複数の独立した信頼できる情報源で確認できる               |
| 匿名・出典不明でない       | 情報の発信者や責任者が明確に示されている                           |
| 扇動的・煽情的表現の少なさ | 感情に訴える表現ではなく、客観的な表現で記述されている             |
| 論理的一貫性               | 主張と根拠の間に論理的なつながりがあり、矛盾がない                 |

### 📝 詳細評価（重要）- 6項目

| チェック項目       | 説明                                                 |
| ------------------ | ---------------------------------------------------- |
| 情報の新しさ       | 公開日が明記され、内容に適した新しさを保っている     |
| 更新・訂正の履歴   | 必要に応じて内容が更新され、訂正が透明に行われている |
| 適切な専門知識     | 作成者が該当分野の十分な知識・経験を持っている       |
| 十分な詳細と根拠   | 結論に至る過程や根拠が適切に説明されている           |
| 適切な引用・参照   | 重要な主張に対して信頼できる情報源が示されている     |
| 引用元の確認可能性 | 引用された情報源に実際にアクセスして確認できる       |

### 🔍 検証・照合 - 4項目

| チェック項目               | 説明                                           |
| -------------------------- | ---------------------------------------------- |
| 他情報源との照合           | 独立した複数の情報源で同様の内容が確認できる   |
| ファクトチェック組織の検証 | 信頼できるファクトチェック機関による検証がある |
| 検証可能なデータ           | 主張を支持するデータが客観的に確認できる       |
| 手法・方法論の妥当性       | 研究や調査の方法論が適切で再現可能             |

### 🌐 文脈・バイアス評価 - 4項目

| チェック項目         | 説明                                                   |
| -------------------- | ------------------------------------------------------ |
| 利害関係の開示       | 金銭的・政治的・個人的な利害関係が適切に開示されている |
| バランスの取れた視点 | 異なる立場や反対意見も考慮されている                   |
| 十分な背景情報       | 情報を理解するのに必要な背景や文脈が提供されている     |
| 適用範囲の明確化     | 情報の適用可能な範囲や限界が明確に示されている         |

## 🛠️ Technology Stack / 技術スタック

### Frontend / フロントエンド

- **[Svelte 5](https://svelte.dev/)** - Latest runes system for reactive UI
  / 最新のrunesシステムによるリアクティブUI
- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack framework
  / フルスタックフレームワーク
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
  / 型安全な開発
- **[Vite](https://vitejs.dev/)** - Fast build tool / 高速ビルドツール

### Internationalization / 国際化

- **Custom i18n System** - Type-safe translation system with 12 language support
- **Svelte 5 Runes Store** - Reactive language switching with `$state` and
  `$derived`
- **Dynamic Font Loading** - Automatic font management for different scripts
- **RTL Support** - Right-to-left text rendering for Arabic
- **Browser Language Detection** - Automatic language detection with
  localStorage persistence

### PWA & Infrastructure / PWA・インフラ

- **[Vite PWA Plugin](https://vite-pwa-org.netlify.app/)** - PWA functionality /
  PWA機能
- **[GitHub Pages](https://pages.github.com/)** - Hosting / ホスティング
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline /
  CI/CD

### Advanced Features / 高度機能

- **[jsPDF](https://github.com/parallax/jsPDF)** - International PDF generation
  library / PDF生成ライブラリ
- **International Font Manager** - Multi-script font support (Latin, CJK,
  Devanagari, Arabic)
- **Multi-format Export** - PDF, HTML, JSON, Markdown with full i18n support
- **Debug Mode** - Production logging with `?debug=true` /
  URLパラメータ`?debug=true`で本番環境でもログ表示
- **Platform Adaptation** - Device-specific optimization / デバイス別最適化

### Development Tools / 開発ツール

- **[ESLint](https://eslint.org/)** - Code quality checks / コード品質チェック
- **[Prettier](https://prettier.io/)** - Code formatting / コードフォーマット
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** -
  Performance monitoring / パフォーマンス監視

## 📁 プロジェクト構造

```
fact-checklist/
├── src/
│   ├── lib/
│   │   ├── components/          # Svelte components / Svelteコンポーネント
│   │   │   ├── CheckSection.svelte     # Category sections / カテゴリセクション
│   │   │   ├── CheckItem.svelte        # Check items / チェック項目
│   │   │   ├── ScoreDisplay.svelte     # Score display / スコア表示
│   │   │   ├── ExportModal.svelte      # Advanced export / 高度エクスポート機能
│   │   │   ├── HistorySidebar.svelte   # History sidebar / 履歴サイドバー
│   │   │   └── LanguageSwitcher.svelte # Language switcher / 言語切り替え
│   │   ├── stores/             # State management / 状態管理
│   │   │   ├── checklistStore.svelte.ts
│   │   │   └── platformStore.svelte.ts
│   │   ├── i18n/               # Internationalization / 国際化
│   │   │   ├── index.ts        # i18n initialization / i18n初期化
│   │   │   ├── types.ts        # TypeScript types / TypeScript型定義
│   │   │   ├── store.svelte.ts # Language store / 言語ストア
│   │   │   ├── fonts.ts        # International fonts / 国際化フォント
│   │   │   └── translations/   # Translation files / 翻訳ファイル
│   │   │       ├── ja.ts       # Japanese / 日本語
│   │   │       ├── en.ts       # English / 英語
│   │   │       ├── fr.ts       # French / フランス語
│   │   │       ├── zh-TW.ts    # Traditional Chinese / 繁体中国語
│   │   │       ├── es.ts       # Spanish / スペイン語
│   │   │       ├── pt.ts       # Portuguese / ポルトガル語
│   │   │       ├── hi.ts       # Hindi / ヒンディー語
│   │   │       ├── de.ts       # German / ドイツ語
│   │   │       ├── it.ts       # Italian / イタリア語
│   │   │       ├── ar.ts       # Arabic / アラビア語 (RTL)
│   │   │       ├── id.ts       # Indonesian / インドネシア語
│   │   │       └── ko.ts       # Korean / 韓国語
│   │   ├── utils/              # Utilities / ユーティリティ
│   │   │   ├── reliablePDFGenerator.ts # International PDF generation
│   │   │   ├── simplePDFGenerator.ts   # Pixel-perfect PDF
│   │   │   ├── htmlToPDFGenerator.ts   # HTML→PDF conversion
│   │   │   ├── pwaAwarePDFExporter.ts  # PWA-aware PDF export
│   │   │   ├── indexedDBStorage.ts     # Data persistence
│   │   │   └── fontToBase64.ts         # Font conversion utility
│   │   ├── types/              # TypeScript type definitions
│   │   │   └── checklist.ts
│   │   └── data/               # Checklist data / チェックリストデータ
│   │       └── checklist-items.ts
│   ├── routes/                 # SvelteKit routing / SvelteKitルーティング
│   │   ├── +layout.svelte      # Common layout / 共通レイアウト
│   │   ├── +page.svelte        # Main page / メインページ
│   │   ├── about/              # About page / アプリについて
│   │   ├── help/               # Help page / ヘルプ・使い方
│   │   ├── privacy/            # Privacy policy / プライバシーポリシー
│   │   └── checklist/[id]/     # Results page / 結果表示ページ
│   ├── app.html                # HTML template / HTMLテンプレート
│   └── service-worker.js       # Service worker / サービスワーカー
├── static/                     # Static files / 静的ファイル
│   ├── fonts/                  # International fonts / 国際化フォント
│   │   ├── NotoSansJP-Regular.ttf      # Japanese CJK
│   │   ├── NotoSansJP-Bold.ttf         # Japanese CJK Bold
│   │   ├── Roboto-Regular.ttf          # Latin script
│   │   ├── NotoSansCJK-Regular.ttf     # CJK languages
│   │   ├── NotoSansDevanagari-Regular.ttf # Hindi
│   │   └── NotoSansArabic-Regular.ttf  # Arabic (RTL)
│   └── icons/                  # PWA icons / PWAアイコン
└── docs/                       # Documentation / ドキュメント
```

## 🎯 使い方

### 1. 基本的な使用フロー

1. **チェックリスト作成**: タイトルと説明を入力
2. **項目評価**: 20項目をチェックして評価
3. **スコア確認**: リアルタイムでスコアが更新
4. **最終判定**: 採用・要注意・不採用を選択
5. **結果保存**: 自動的に履歴に保存
6. **エクスポート**: 必要に応じて各種形式で出力

### 2. Advanced Export Features / 高度エクスポート機能

#### 📄 International PDF Generation / 国際化PDF生成（3つのモード - 排他選択）

- **🎨 Pixel-Perfect (Default)**: Browser print function with HTML display
  perfect
  matchピクセルパーフェクト（デフォルト）: ブラウザ印刷機能でHTML表示と完全一致
- **🔥 International Font Support**: jsPDF with embedded fonts for all 12
  languages国際化フォント対応:
  12言語すべてに対応したフォント埋め込み、透かし・メタデータ対応
  - **Latin Script**: Roboto for English, French, Spanish, Portuguese, German,
    Italian, Indonesian
  - **CJK Script**: Noto Sans CJK for Japanese, Korean, Traditional Chinese
  - **Devanagari Script**: Noto Sans Devanagari for Hindi
  - **Arabic Script**: Noto Sans Arabic for Arabic with RTL support
- **🔤 Text-Based**: Lightweight PDF utilizing PWA features, text searchable and
  copyableテキストベース: PWA機能を活用した軽量PDF、文字検索・コピー可能

#### 🌐 Other Formats / その他形式

- **HTML**: Browser-displayable with embedded styles and
  internationalizationブラウザで表示可能（スタイル埋め込み済み・国際化対応）
- **JSON**: Structured data with export options and language
  context構造化データ（エクスポートオプション・言語情報反映）
- **Markdown**: Text format with tables and details tags, fully
  internationalizedテキスト形式（テーブル・詳細タグ使用・完全国際化対応）

#### 🌍 Language-Specific Features / 言語固有機能

- **Automatic Title Translation**: Dynamic title generation based on current
  language
- **RTL Text Support**: Proper right-to-left rendering for Arabic
- **Cultural Adaptations**: Date formats and cultural conventions per language
- **Font Optimization**: Automatic font selection based on language requirements

### 3. 判定基準

- **80%以上**: 高い信頼性 → 採用推奨
- **60-79%**: 中程度の信頼性 → 追加確認推奨
- **40-59%**: 低い信頼性 → 要注意
- **40%未満**: 信頼性に問題 → 不採用推奨

## 🔧 開発

### セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動
npm run dev

# 型チェック
npm run check

# Lint & フォーマット
npm run lint
npm run format

# ビルド
npm run build

# プレビュー
npm run preview
```

### 主要コマンド

```bash
# 開発
npm run dev                 # 開発サーバー起動
npm run check              # TypeScript型チェック
npm run check:watch        # 型チェック（監視モード）

# コード品質
npm run lint               # ESLintチェック
npm run lint:fix          # ESLint自動修正
npm run format            # Prettierフォーマット

# ビルド・デプロイ
npm run build             # 本番ビルド
npm run preview           # ビルド結果プレビュー
npm run preview:prod      # 本番環境プレビュー

# パフォーマンス
npm run lighthouse        # Lighthouse監査
npm run lighthouse:ci     # CI用Lighthouse
```

## 🐛 デバッグモード

### 本番環境でのログ表示

```bash
# URLパラメータで有効化
https://example.com?debug=true

# ブラウザコンソールで有効化
enableDebugMode()

# デバッグモード無効化
disableDebugMode()
```

デバッグモードの状態は`localStorage`に保存されます。

## 📊 パフォーマンス

### Lighthouse スコア

- **パフォーマンス**: 95+
- **アクセシビリティ**: 100
- **ベストプラクティス**: 100
- **SEO**: 100
- **PWA**: 100

### 技術的な特徴

- **Bundle Size**: < 200KB (gzipped)
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **オフライン対応**: 完全対応

## ⚡ 高度PWA機能

### プラットフォーム適応型機能

- **ネイティブアプリ検出**: スタンドアロンモード・TWA対応
- **OS別最適化**: iOS・Android・Windows・macOS・Linux
- **能力ベース機能切り替え**: デバイス性能に応じた最適化

### ファイルシステム統合

- **File System Access API**: ネイティブファイル保存
- **Web Share API**: ファイル共有機能
- **Canvas-to-Blob**: 画像・PDF生成

### オフライン・キャッシュ戦略

- **Service Worker**: 完全オフライン動作
- **IndexedDB/LocalStorage**: データの永続化とフォールバック
- **静的リソース**: 効率的キャッシュ管理

## 🔐 プライバシー・セキュリティ

### データ保護

- **ローカルストレージ**: すべてのデータは端末内のIndexedDBに保存
- **サーバー送信なし**: 評価データはサーバーに送信されません
- **完全オフライン**: ネットワークなしでも動作
- **データ削除**: ユーザーがいつでもデータを削除可能

### セキュリティ対策

- **Content Security Policy**: XSS攻撃を防止
- **HTTPS**: すべての通信を暗号化
- **Same-Origin Policy**: クロスサイト攻撃を防止
- **Service Worker**: セキュアなキャッシュ管理

## 🌍ブラウザ対応

### 対応ブラウザ

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅

### PWA機能対応

- **インストール**: Chrome, Edge, Safari (iOS/macOS)
- **オフライン**: 全対応ブラウザ
- **ファイルシステム**: Chrome, Edge
- **Web Share**: Chrome, Safari, Edge

## 🤝 Contributing / コントリビューション

### How to Contribute / 貢献方法

1. **Fork** this repository / このリポジトリをFork
2. **Create feature branch** / Feature
   branchを作成 (`git checkout -b feature/amazing-feature`)
3. **Commit changes**
   / 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. **Push to branch**
   / ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. **Create Pull Request** / Pull Requestを作成

### Development Guidelines / 開発ガイドライン

- **Type Safety** / 型安全性: Leverage TypeScript to avoid type errors /
  TypeScriptを活用し、型エラーを回避
- **Component Design** / コンポーネント設計: Create reusable small components
  / 再利用可能な小さなコンポーネントを心がける
- **Accessibility** / アクセシビリティ: Use ARIA attributes and semantic HTML /
  ARIA属性とセマンティックHTMLを使用
- **Performance** / パフォーマンス: Consider bundle size and runtime performance
  / バンドルサイズとランタイム性能を考慮
- **Internationalization** / 国際化: Ensure all text is translatable and
  culturally appropriate
  / すべてのテキストが翻訳可能で文化的に適切であることを確認
- **Testing** / テスト: Add appropriate tests for new features
  / 新機能には適切なテストを追加

### Translation Contributions / 翻訳への貢献

We welcome contributions to improve translations for all 12 supported languages:

- Review existing translations for accuracy and cultural appropriateness
- Suggest improvements for better localization
- Help maintain consistency across all language versions
- Report issues with RTL layout or font rendering

### Issue Reporting / Issue報告

Please report bugs or feature requests at
[Issues](https://github.com/shuji-bonji/fact-checklist/issues).

バグ報告や機能要望は
[Issues](https://github.com/shuji-bonji/fact-checklist/issues) でお願いします。

## 📝 ライセンス

このプロジェクトは [MIT License](./LICENSE) の下で公開されています。

## 🙏 Acknowledgments / 謝辞

- **[Svelte Team](https://svelte.dev/)** - Amazing framework with cutting-edge
  runes system / 素晴らしいフレームワークの提供
- **[TypeScript Team](https://www.typescriptlang.org/)** - Type-safe development
  environment / 型安全な開発環境
- **[Vite Team](https://vitejs.dev/)** - Fast and efficient build tool
  / 高速なビルドツール
- **[jsPDF Team](https://github.com/parallax/jsPDF)** - Powerful PDF generation
  library / 高機能PDF生成ライブラリ
- **[Google Fonts](https://fonts.google.com/)** - Noto font family for
  international typography / 国際的タイポグラフィのためのNotoフォントファミリー
- **[Open Source Community](https://opensource.org/)** - Countless libraries and
  tools / 多くのライブラリとツール

## 📞 サポート・フィードバック

- **GitHub Issues**:
  [バグ報告・機能要望](https://github.com/shuji-bonji/fact-checklist/issues)
- **Discussions**:
  [質問・議論](https://github.com/shuji-bonji/fact-checklist/discussions)

---

<div align="center">

**📋 Scientific Information Reliability Assessment
/ 情報の信頼性を、科学的に。**

**🌍 Now Available in 12 Languages / 12言語対応**

[🚀 Try It Now / 今すぐ使ってみる](https://shuji-bonji.github.io/fact-checklist/)
| [📖 Documentation / ドキュメント](./docs) |
[🤝 Contributing / コントリビューション](#-contributing--コントリビューション)

</div>
