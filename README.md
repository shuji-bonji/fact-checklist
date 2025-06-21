# 🔍 実用的事実確認チェックシート

> 情報の信頼性を科学的・体系的に評価するためのPWA（Progressive Web App）

[![Build and Deploy](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml/badge.svg)](https://github.com/shuji-bonji/fact-checklist/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
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
- **📄 エクスポート機能**: PDF・HTML・JSON形式で結果出力
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

## 📋 チェック項目

### 🚨 クリティカル評価（必須）

- 権威ある情報源からの発表
- 一次情報の確認
- 複数の独立した情報源
- 匿名・出典不明でない
- 扇動的・煽情的表現の少なさ
- 論理的一貫性

### 📝 詳細評価（重要）

- 情報の新しさ
- 更新・訂正の履歴
- 適切な専門知識
- 十分な詳細と根拠
- 適切な引用・参照
- 引用元の確認可能性

### 🔍 検証・照合

- 他情報源との照合
- ファクトチェック組織の検証
- 検証可能なデータ
- 手法・方法論の妥当性

### 🌐 文脈・バイアス評価

- 利害関係の開示
- バランスの取れた視点
- 十分な背景情報
- 適用範囲の明確化

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
│   │   ├── stores/             # 状態管理
│   │   ├── types/              # TypeScript型定義
│   │   └── data/               # チェックリストデータ
│   ├── routes/                 # SvelteKitルート
│   ├── app.html               # HTMLテンプレート
│   └── app.css                # グローバルCSS
├── static/                     # 静的ファイル
│   ├── manifest.json          # PWAマニフェスト
│   ├── service-worker.js      # Service Worker
│   └── icons/                 # アプリアイコン
├── .github/workflows/         # GitHub Actions
└── docs/                      # ドキュメント
```

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# 型チェック
npm run check

# 型チェック（ウォッチモード）
npm run check:watch

# リンティング
npm run lint

# コードフォーマット
npm run format
```

## 📊 パフォーマンス

<!-- - **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: すべて「Good」評価
- **Bundle Size**: < 100KB (gzip)
- **First Load**: < 2秒
- **Offline Ready**: 完全オフライン対応 -->

## 🤝 貢献方法

プロジェクトへの貢献を歓迎します！

### 🐛 バグ報告

[Issues](https://github.com/shuji-bonji/fact-checklist/issues)でバグを報告してください。

### 💡 機能提案

新機能のアイデアがある場合は、まず[Discussions](https://github.com/shuji-bonji/fact-checklist/discussions)で相談してください。

### 📝 プルリクエスト

1. フォークする
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### 🧪 開発ガイドライン

- **コードスタイル**: ESLint + Prettierに従う
- **コミットメッセージ**:
  [Conventional Commits](https://conventionalcommits.org/)形式
- **テスト**: 新機能にはテストを追加
- **ドキュメント**: 変更内容をドキュメントに反映

## 📱 PWAインストール

### デスクトップ

1. ブラウザのアドレスバーのインストールアイコンをクリック
2. または設定メニューから「アプリをインストール」を選択

### モバイル

1. Safariまたは Chrome でサイトを開く
2. **Safari**: 共有ボタン → 「ホーム画面に追加」
3. **Chrome**: メニュー → 「ホーム画面に追加」

## 🔒 プライバシー・セキュリティ

- **データ保存**: すべてのデータはブラウザ内（IndexedDB）に保存
- **サーバー通信**: PWAリソースの配信のみ、評価データの送信なし
- **分析**: 個人情報を収集しない最小限のパフォーマンス監視のみ
- **HTTPS**: 本番環境では強制的にHTTPS接続

## 📚 関連リソース

### 事実確認・メディアリテラシー

- [日本ファクトチェックセンター](https://jfc.or.jp/)
- [InFact](https://infact.press/)
- [First Draft](https://firstdraftnews.org/long-form-article/information-disorder-part-1/)
- [IFCN Code of Principles](https://www.poynter.org/ifcn-code-of-principles/)

### 技術ドキュメント

- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)
- [SvelteKit Documentation](https://kit.svelte.dev/docs/introduction)
- [PWA Best Practices](https://web.dev/progressive-web-apps/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 👥 作者・貢献者

- **[@shuji-bonji](https://github.com/shuji-bonji)** - プロジェクト作成者

## 🙏 謝辞

- 事実確認方法論の研究者・実践者の皆様
- オープンソースコミュニティ
- Svelte・SvelteKitチーム
- 情報リテラシー教育に携わる全ての方々

## 📞 サポート

質問やサポートが必要な場合：

1. [FAQ](docs/FAQ.md)を確認
2. [Discussions](https://github.com/shuji-bonji/fact-checklist/discussions)で質問
3. [Issues](https://github.com/shuji-bonji/fact-checklist/issues)でバグ報告

---

**情報の信頼性評価で、より良い情報環境を築きましょう** 🌍✨
