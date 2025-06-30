# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is **Fact Checklist** (実用的事実確認チェックシート), a Japanese PWA for
systematically evaluating information reliability. It's built with Svelte 5,
TypeScript, and deployed to GitHub Pages. The application helps users assess the
credibility of information through a structured 20-item checklist across 4
categories.

## Development Commands

### Essential Commands

```bash
# Development
npm run dev              # Start development server on localhost:5173
npm run check            # TypeScript type checking
npm run check:watch      # Type checking in watch mode

# Code Quality
npm run lint             # Run ESLint + Prettier checks
npm run lint:fix         # Auto-fix ESLint and Prettier issues
npm run format           # Format code with Prettier

# Build & Deploy
npm run build            # Production build for GitHub Pages
npm run preview          # Preview production build locally
npm run preview:prod     # Preview with GitHub Pages base path

# Performance
npm run lighthouse       # Run Lighthouse audits
npm run lighthouse:ci    # Lighthouse for CI environments
```

### Testing Commands (if implemented)

```bash
npm run test             # Run unit tests
npm run test:e2e         # Run E2E tests
npm run test:coverage    # Generate coverage reports
```

## Architecture Overview

### Technology Stack

- **Frontend**: Svelte 5 with runes ($state, $derived) for reactivity
- **Language**: TypeScript with strict configuration (ES2022 target)
- **Meta-framework**: SvelteKit with static adapter for GitHub Pages
- **Build**: Vite with PWA plugin
- **Styling**: Custom CSS with CSS custom properties for theming
- **State**: Local-first with localStorage/IndexedDB persistence
- **Export**: jsPDF, html2canvas for multi-format export capabilities

### Key Architectural Patterns

#### State Management (Svelte 5 Runes)

- **Primary Store**: `/src/lib/stores/checklistStore.svelte.ts`
- Uses Svelte 5 runes (`$state`, `$derived`) for reactive state management
- Singleton pattern with class-based store implementation
- Automatic localStorage persistence for offline functionality

#### Data Structure

- **Checklist Items**: 20 predefined items across 4 categories (Critical,
  Detailed, Verification, Context)
- **Categories**: Color-coded with emoji indicators for UX
- **Scoring**: Real-time percentage-based scoring with confidence levels
- **History**: Stores last 5 completed evaluations locally

#### Component Architecture

```
src/lib/components/
├── CheckSection.svelte     # Category-based sections
├── CheckItem.svelte        # Individual checklist items
├── ScoreDisplay.svelte     # Real-time score visualization
├── ExportModal.svelte      # Multi-format export dialog
└── HistorySidebar.svelte   # Evaluation history management
```

#### Routing Structure

- **SvelteKit File-based Routing**: `/src/routes/`
- **Static Generation**: All routes pre-rendered for GitHub Pages
- **Dynamic Results**: `/checklist/[id]` for individual evaluation results
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### Data Flow

1. **Creation**: New checklist → Store → localStorage persistence
2. **Updates**: Real-time item checking → Derived score calculation → Auto-save
3. **Completion**: Final judgment → History addition → Export options
4. **Persistence**: Everything stored locally (privacy-first design)

## Development Guidelines

### TypeScript Configuration

- **Strict Mode**: Enabled with additional strict checks
- **Target**: ES2022 with modern browser support
- **Key Settings**: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- Always run `npm run check` before committing

### Code Style

- **ESLint**: TypeScript + Svelte-specific rules configured
- **Prettier**: Consistent formatting across all files
- **File Extensions**: Use `.svelte.ts` for Svelte stores with TypeScript

### Component Patterns

- **Props**: Use TypeScript interfaces for component props
- **Events**: Leverage Svelte 5's event system
- **Styling**: Component-scoped CSS with global design tokens
- **Reactivity**: Prefer runes over legacy reactive statements

### PWA Considerations

- **Offline First**: All functionality available without network
- **Service Worker**: Automated caching via Vite PWA plugin
- **Manifest**: Comprehensive PWA manifest with shortcuts and share targets
- **Icons**: Multiple sizes for different platforms and contexts

### Performance Targets

- **Bundle Size**: Keep under 200KB gzipped
- **Lighthouse Scores**: Maintain 95+ Performance, 100 for other metrics
- **Load Times**: FCP <1.2s, TTI <2.5s
- Run `npm run lighthouse` to verify performance

### Deployment

- **Target**: GitHub Pages via GitHub Actions
- **Base Path**: `/fact-checklist/` for production builds
- **Static**: All routes pre-rendered, no server-side requirements
- **Domain**: `shuji-bonji.github.io/fact-checklist/`

## Important File Locations

### Core Logic

- `/src/lib/stores/checklistStore.svelte.ts` - Main application state
- `/src/lib/data/checklist-items.ts` - Checklist data and categories
- `/src/lib/types/checklist.ts` - TypeScript type definitions

### Configuration

- `vite.config.ts` - Build configuration with PWA settings
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Dependencies and npm scripts

### Routing & Pages

- `/src/routes/+page.svelte` - Main application interface
- `/src/routes/+layout.svelte` - Common page layout
- `/src/routes/checklist/[id]/` - Dynamic result pages

## Privacy & Security Notes

- **No Server Communication**: All data remains on user's device
- **Local Storage**: Uses localStorage + IndexedDB for persistence
- **No Analytics**: No tracking or data collection implemented
- **Content Security Policy**: Configured for XSS protection

## Svelte 5 Specification Requirements

### **CRITICAL: Always Use Latest Svelte 5 Specification**

Before coding any Svelte components, **always reference the latest Svelte 5
documentation**:

- 📖 **Primary Reference**: https://svelte.dev/docs/llms
- 📄 **Full Specification**: https://svelte.dev/llms-full.txt
- 📄 **Medium Guide**: https://svelte.dev/llms-medium.txt
- 📄 **Quick Reference**: https://svelte.dev/llms-small.txt

### **Mandatory Svelte 5 Patterns**

#### **1. Use Runes Instead of Legacy Reactive Syntax**

```svelte
<!-- ❌ LEGACY (Svelte 3/4) - DO NOT USE -->
<script>
  export let count = 0;
  $: doubled = count * 2;

  let items = [];
  $: filteredItems = items.filter(item => item.active);
</script>

<!-- ✅ SVELTE 5 RUNES - ALWAYS USE THIS -->
<script>
  let { count = $bindable(0) } = $props();
  let doubled = $derived(count * 2);

  let items = $state([]);
  let filteredItems = $derived(items.filter(item => item.active));
</script>
```

#### **2. State Management with Runes**

```svelte
<!-- ✅ CORRECT: Use $state for local reactive state -->
<script>
  let user = $state({ name: '', email: '' });
  let isLoading = $state(false);
  let errors = $state([]);
</script>

<!-- ❌ INCORRECT: Don't use legacy let declarations for reactive state -->
<script>
  let user = { name: '', email: '' }; // This won't be reactive in Svelte 5
</script>
```

#### **3. Props with $props() and $bindable()**

```svelte
<!-- ✅ CORRECT: Svelte 5 props pattern -->
<script>
  let {
    title,
    count = $bindable(0),
    items = [],
    onUpdate = () => {}
  } = $props();
</script>

<!-- ❌ INCORRECT: Legacy export syntax -->
<script>
  export let title;
  export let count = 0;
  export let items = [];
</script>
```

#### **4. Effects with $effect()**

```svelte
<!-- ✅ CORRECT: Use $effect for side effects -->
<script>
  let count = $state(0);

  $effect(() => {
    console.log('Count changed:', count);
    document.title = `Count: ${count}`;
  });

  // Cleanup effects
  $effect(() => {
    const timer = setInterval(() => count++, 1000);
    return () => clearInterval(timer);
  });
</script>

<!-- ❌ INCORRECT: Legacy reactive statements -->
<script>
  $: console.log('Count changed:', count); // Don't use this pattern
</script>
```

#### **5. Derived State with $derived()**

```svelte
<script>
  let items = $state([]);
  let filter = $state('');

  // ✅ CORRECT: Use $derived for computed values
  let filteredItems = $derived(
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  );

  let itemCount = $derived(filteredItems.length);
  let isEmpty = $derived(itemCount === 0);
</script>
```

### **WebSocket Integration with Svelte 5 Runes**

#### **WebSocket Store Pattern (Svelte 5)**

```typescript
// ✅ CORRECT: src/lib/stores/websocket.svelte.ts
export function createWebSocketStore(url: string) {
  let socket = $state<WebSocket | null>(null);
  let connected = $state(false);
  let messages = $state<string[]>([]);
  let error = $state<string | null>(null);

  const connect = () => {
    socket = new WebSocket(url);

    socket.onopen = () => {
      connected = true;
      error = null;
    };

    socket.onmessage = event => {
      messages.push(event.data);
    };

    socket.onclose = () => {
      connected = false;
    };

    socket.onerror = () => {
      error = 'Connection failed';
    };
  };

  return {
    get connected() {
      return connected;
    },
    get messages() {
      return messages;
    },
    get error() {
      return error;
    },
    connect,
    send: (message: string) => socket?.send(message)
  };
}
```

---

# 🌍 Claude Code向け国際化実装指示書

## 📋 概要

既存の事実確認チェックシートPWAに12言語対応の国際化機能を実装します。プロジェクトには詳細な`CLAUDE.md`が含まれているので、まずそちらを参照してプロジェクト構造を理解してください。

## 🎯 実装目標

### 対象言語（12言語）

- 日本語（ja）- 既存
- 英語（en）
- フランス語（fr）
- 台湾華語/中国語繁体字（zh-TW）
- スペイン語（es）
- ポルトガル語（pt）
- ヒンディー語（hi）
- ドイツ語（de）
- イタリア語（it）
- アラビア語（ar）- RTL対応
- インドネシア語（id）
- 韓国語（ko）

### 技術要件

- Svelte 5のrunes（$state, $derived）を活用
- TypeScript型安全な実装
- PWAオフライン対応維持
- 既存機能の互換性保持

## 🚀 段階的実装プラン

### Phase 1: i18n基盤構築（最優先）

#### 1.1 国際化基盤システム

```bash
# 新規作成するファイル
src/lib/i18n/
├── index.ts              # i18n初期化・設定
├── types.ts              # TypeScript型定義
├── utils.ts              # ユーティリティ関数
└── store.svelte.ts       # Svelte 5 runesベースの言語ストア
```

**Claude Codeへの指示:**

```
src/lib/i18n/store.svelte.tsを作成してください。
- Svelte 5のrunesを使用（$state, $derived）
- 12言語の切り替え機能
- ブラウザ言語の自動検出
- localStorageでの言語設定保存
- RTL言語（アラビア語）の方向設定
- 型安全なTranslationFunction
```

#### 1.2 TypeScript型定義

**指示:**

```
src/lib/i18n/types.tsを作成し、以下を定義してください：
- TranslationKey interface（ネストした翻訳キー）
- SupportedLanguage interface（言語設定）
- TranslationFunction type
- DirectionalStyles interface（RTL対応）
```

#### 1.3 翻訳ファイル構造

**指示:**

```
src/lib/i18n/locales/ディレクトリに以下を作成：
1. ja.json - 既存の日本語テキストから抽出
2. en.json - 英語翻訳（まずは空の構造のみ）

既存の日本語テキストをsrc/lib/data/checklist-items.tsから抽出し、
翻訳キーベースの構造に変更してください。
```

### Phase 2: 既存コンポーネントの国際化対応

#### 2.1 チェックリスト項目の多言語化

**指示:**

```
src/lib/data/checklist-items.tsを修正：
- 直接的な日本語テキストを翻訳キーに変換
- CHECKLIST_ITEMSの構造を翻訳対応に
- 既存の型定義を維持しつつ国際化対応
```

#### 2.2 メインコンポーネントの国際化

**指示:**

```
以下のコンポーネントにi18n対応を追加：
1. src/routes/+layout.svelte - ナビゲーション
2. src/routes/+page.svelte - メインページ
3. src/lib/components/CheckSection.svelte
4. src/lib/components/CheckItem.svelte
5. src/lib/components/ScoreDisplay.svelte

翻訳関数t()を各コンポーネントでimportし、
ハードコードされた日本語テキストを翻訳キーに置換してください。
```

#### 2.3 言語切り替えUI

**指示:**

```
src/lib/components/LanguageSwitcher.svelteを新規作成：
- ドロップダウンまたはボタン形式の言語選択UI
- 現在の言語表示
- 国旗絵文字またはアイコン表示
- モバイル・デスクトップ両対応
- アクセシビリティ対応（ARIA属性）
```

### Phase 3: RTL対応とスタイリング

#### 3.1 CSS論理プロパティ対応

**指示:**

```
既存のCSSファイルを以下のように修正：
- margin-left → margin-inline-start
- margin-right → margin-inline-end
- text-align: left → text-align: start
- RTL言語用のスタイル調整

src/app.htmlのdir属性動的設定を追加
```

#### 3.2 アラビア語RTL対応

**指示:**

```
RTL言語専用のCSS調整：
- レイアウトの鏡像反転
- アイコンの方向調整
- PDF生成時のRTL対応
- ナビゲーションの方向調整
```

### Phase 4: エクスポート機能の多言語対応

- 4.1 JSON生成の国際化
- 4.2 Markdown生成の国際化
- 4.3 HTML生成の国際化
- 4.4 PDF生成の国際化

#### 4.4 PDF生成の国際化

**指示:**

```
src/lib/utils/reliablePDFGenerator.tsを修正：
- 各言語対応フォント設定
- RTL言語でのPDF生成
- 複雑文字（CJK、デーヴァナーガリー）対応
- メタデータの多言語化
```

## 🛠️ 実装時の重要ポイント

### Svelte 5 Runesの活用

```typescript
// ❌ 古いSvelte記法
export let currentLocale = 'ja';
$: isRTL = currentLocale === 'ar';

// ✅ Svelte 5 runes
let currentLocale = $state('ja');
let isRTL = $derived(currentLocale === 'ar');
```

### 型安全性の確保

```typescript
// 翻訳キーの型安全性
interface TranslationKeys {
  'app.title': string;
  'nav.home': string;
  'checklist.item.source-authority.title': string;
  // ...
}

// 使用時の型チェック
const t: (key: keyof TranslationKeys) => string;
```

### パフォーマンス最適化

```typescript
// 翻訳ファイルの動的読み込み
async function loadTranslations(locale: string) {
  const [ui, checklist] = await Promise.all([
    import(`./locales/${locale}.json`),
    import(`./checklist/${locale}.ts`)
  ]);
  return { ...ui.default, ...checklist.default };
}
```

## 📁 作成が必要なファイル一覧

### 新規作成

```
src/lib/i18n/
├── index.ts
├── types.ts
├── utils.ts
├── store.svelte.ts
├── locales/
│   ├── ja.json
│   ├── en.json
│   ├── fr.json
│   ├── zh-TW.json
│   ├── es.json
│   ├── pt.json
│   ├── hi.json
│   ├── de.json
│   ├── it.json
│   ├── ar.json
│   ├── id.json
│   └── ko.json
├── checklist/
│   ├── ja.ts
│   ├── en.ts
│   └── [その他11言語].ts
└── fonts/
    ├── latin.ts
    ├── cjk.ts
    ├── devanagari.ts
    └── arabic.ts

src/lib/components/
└── LanguageSwitcher.svelte
```

### 修正が必要

```
src/lib/data/checklist-items.ts
src/lib/utils/reliablePDFGenerator.ts
src/routes/+layout.svelte
src/routes/+page.svelte
src/lib/components/CheckSection.svelte
src/lib/components/CheckItem.svelte
src/lib/components/ScoreDisplay.svelte
src/app.html
static/manifest.json
```

## 🔍 テスト指針

### 基本動作確認

1. 言語切り替えが正常に動作するか
2. 翻訳されていないキーがないか
3. RTL言語でレイアウトが適切か
4. PDF生成が各言語で正常か
5. オフライン動作が維持されているか

### アクセシビリティ確認

1. スクリーンリーダーでの読み上げ
2. キーボードナビゲーション
3. 言語切り替えのARIA属性
4. フォーカス管理

## ⚠️ 注意事項

### 既存機能の維持

- PWAオフライン機能を破損させない
- 既存のローカルストレージデータとの互換性
- パフォーマンスの劣化を避ける
- 型安全性を保持

### 文化的配慮

- 各言語の文化に応じた適切な翻訳
- 色の意味の文化差への配慮
- 右から左読みの言語への適切な対応

## 🚦 実装順序

1. **Phase 1**: i18n基盤（ストア、型定義、初期2言語）
2. **フィードバック**: 基本動作確認
3. **Phase 2**: 既存コンポーネント対応
4. **フィードバック**: UI動作確認
5. **Phase 3**: RTL対応とスタイリング
6. **フィードバック**: アラビア語表示確認
7. **Phase 4**: PDF生成対応
8. **最終テスト**: 全言語での動作確認

各Phase完了時に動作確認とフィードバックを行い、問題があれば修正してから次のPhaseに進むようにしてください。
