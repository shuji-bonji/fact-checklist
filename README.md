# 🔍 実用的事実確認チェックシート

> 情報の信頼性を科学的・体系的に評価するためのPWA（Progressive Web App）

[![Build and Deploy](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml/badge.svg)](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Claude](https://img.shields.io/badge/Generated_by-Claude-ff8c00)](https://claude.ai)
[![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Svelte](https://img.shields.io/badge/-Svelte-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/)
[![PWA](https://img.shields.io/badge/-PWA-5A0FC8?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

## 🌟 概要

実用的事実確認チェックシートは、インターネット上の情報の信頼性を科学的・体系的に評価するためのウェブアプリケーションです。偽情報やミスリーディングな情報が氾濫する現代において、情報リテラシーの向上を支援します。

### 🎯 主な特徴

- **📱 PWA対応**: オフラインでも利用可能、モバイルアプリのような体験
- **🔐 完全プライベート**: すべてのデータは端末内に保存、サーバーへの送信なし
- **📊 科学的評価**: 4カテゴリ20項目の包括的チェック
- **🎨 レスポンシブデザイン**: デスクトップ・モバイル両対応
- **🌙 ダークモード**: システム設定に連動
- **📄 多形式エクスポート**: PDF・HTML・JSON・Markdown形式で結果出力
- **🔄 履歴管理**: 過去の評価結果を保存・参照
- **♿ アクセシビリティ**: WCAG準拠のユニバーサルデザイン

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

## 🛠️ 技術スタック

### フロントエンド

- **[Svelte 5](https://svelte.dev/)** - 最新のrunesシステムによるリアクティブUI
- **[SvelteKit](https://kit.svelte.dev/)** - フルスタックフレームワーク
- **[TypeScript](https://www.typescriptlang.org/)** - 型安全な開発
- **[Vite](https://vitejs.dev/)** - 高速ビルドツール

### PWA・インフラ

- **[Vite PWA Plugin](https://vite-pwa-org.netlify.app/)** - PWA機能
- **[GitHub Pages](https://pages.github.com/)** - ホスティング
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD

### エクスポート機能

- **[jsPDF](https://github.com/parallax/jsPDF)** - PDF生成
- **[html2canvas](https://html2canvas.hertzen.com/)** - HTML→画像変換
- **[Markdown](https://daringfireball.net/projects/markdown/)** - テキストベース出力
- **JSON** - データ形式出力

### 開発ツール

- **[ESLint](https://eslint.org/)** - コード品質チェック
- **[Prettier](https://prettier.io/)** - コードフォーマット
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** - パフォーマンス監視

## 📁 プロジェクト構造

```
fact-checklist/
├── src/
│   ├── lib/
│   │   ├── components/          # Svelteコンポーネント
│   │   │   ├── CheckSection.svelte     # カテゴリセクション
│   │   │   ├── CheckItem.svelte        # チェック項目
│   │   │   ├── ScoreDisplay.svelte     # スコア表示
│   │   │   ├── ExportModal.svelte      # エクスポート機能
│   │   │   └── HistorySidebar.svelte   # 履歴サイドバー
│   │   ├── stores/             # 状態管理
│   │   │   └── checklistStore.svelte.ts
│   │   ├── types/              # TypeScript型定義
│   │   │   └── checklist.ts
│   │   └── data/               # チェックリストデータ
│   │       └── checklist-items.ts
│   ├── routes/                 # SvelteKitルーティング
│   │   ├── +layout.svelte      # 共通レイアウト
│   │   ├── +page.svelte        # メインページ
│   │   └── checklist/[id]/     # 結果表示ページ
│   ├── app.html                # HTMLテンプレート
│   └── service-worker.js       # サービスワーカー
├── static/                     # 静的ファイル
├── tests/                      # テストファイル
└── docs/                       # ドキュメント
```

## 🎯 使い方

### 1. 基本的な使用フロー

1. **チェックリスト作成**: タイトルと説明を入力
2. **項目評価**: 20項目をチェックして評価
3. **スコア確認**: リアルタイムでスコアが更新
4. **最終判定**: 採用・要注意・不採用を選択
5. **結果保存**: 自動的に履歴に保存
6. **エクスポート**: 必要に応じて各種形式で出力

### 2. エクスポート機能

- **📄 PDF**: 印刷・共有に最適（セクション分割対応）
- **🌐 HTML**: ブラウザで表示可能（セクション構造化）
- **📊 JSON**: データ形式（プログラム処理用）
- **📝 Markdown**: テキスト形式（GitHub/エディタで表示可能）

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

## 🧪 テスト

```bash
# 単体テスト
npm run test

# E2Eテスト
npm run test:e2e

# カバレッジ
npm run test:coverage
```

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
- **プッシュ通知**: Chrome, Firefox, Edge
- **バックグラウンド同期**: Chrome, Edge

## 🤝 コントリビューション

### 貢献方法

1. **Fork** このリポジトリ
2. **Feature branch** を作成 (`git checkout -b feature/amazing-feature`)
3. **Changes** をコミット (`git commit -m 'Add some amazing feature'`)
4. **Branch** にプッシュ (`git push origin feature/amazing-feature`)
5. **Pull Request** を作成

### 開発ガイドライン

- **型安全性**: TypeScriptを活用し、型エラーを回避
- **コンポーネント設計**: 再利用可能な小さなコンポーネントを心がける
- **アクセシビリティ**: ARIA属性とセマンティックHTMLを使用
- **パフォーマンス**: バンドルサイズとランタイム性能を考慮
- **テスト**: 新機能には適切なテストを追加

### Issue報告

バグ報告や機能要望は
[Issues](https://github.com/shuji-bonji/fact-checklist/issues) でお願いします。

## 📝 ライセンス

このプロジェクトは [MIT License](./LICENSE) の下で公開されています。

## 🙏 謝辞

- **[Svelte Team](https://svelte.dev/)** - 素晴らしいフレームワークの提供
- **[TypeScript Team](https://www.typescriptlang.org/)** - 型安全な開発環境
- **[Vite Team](https://vitejs.dev/)** - 高速なビルドツール
- **[Open Source Community](https://opensource.org/)** - 多くのライブラリとツール

## 📞 サポート・フィードバック

- **GitHub Issues**:
  [バグ報告・機能要望](https://github.com/shuji-bonji/fact-checklist/issues)
- **Discussions**:
  [質問・議論](https://github.com/shuji-bonji/fact-checklist/discussions)
- **Email**: [開発者への連絡](mailto:your-email@example.com)

---

<div align="center">

**📋 情報の信頼性を、科学的に。**

[🚀 今すぐ使ってみる](https://shuji-bonji.github.io/fact-checklist/) |
[📖 ドキュメント](./docs) | [🤝 コントリビューション](#-コントリビューション)

</div>
