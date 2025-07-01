# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is **Fact Checklist** (実用的事実確認チェックシート), an internationalized
PWA for systematically evaluating information reliability with full support for
12 languages. Built with Svelte 5, TypeScript, and deployed to GitHub Pages, the
application helps users assess the credibility of information through a
structured 20-item checklist across 4 categories.

### Supported Languages

- Japanese (ja) - CJK script
- English (en) - Latin script
- French (fr) - Latin script
- Traditional Chinese (zh-TW) - CJK script
- Spanish (es) - Latin script
- Portuguese (pt) - Latin script
- Hindi (hi) - Devanagari script
- German (de) - Latin script
- Italian (it) - Latin script
- Arabic (ar) - Arabic script (RTL)
- Indonesian (id) - Latin script
- Korean (ko) - CJK script

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
- **Export**: jsPDF with international font support for multi-format export
- **i18n**: Custom type-safe internationalization system with Svelte 5 runes

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
├── ExportModal.svelte      # Multi-format export dialog with i18n
├── HistorySidebar.svelte   # Evaluation history management
└── LanguageSwitcher.svelte # Language selection UI
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

- `/src/lib/stores/checklistStore.svelte.ts` - Main application state with i18n
  support
- `/src/lib/data/checklist-items.ts` - Checklist data with translation keys
- `/src/lib/types/checklist.ts` - TypeScript type definitions

### Internationalization

- `/src/lib/i18n/index.ts` - i18n initialization and exports
- `/src/lib/i18n/store.svelte.ts` - Language state management with runes
- `/src/lib/i18n/types.ts` - Type-safe translation system
- `/src/lib/i18n/translations/` - Translation files for 12 languages
- `/src/lib/i18n/fonts.ts` - International font management for PDF generation

### Configuration

- `vite.config.ts` - Build configuration with PWA settings
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Dependencies and npm scripts

### Routing & Pages

- `/src/routes/+page.svelte` - Main application interface with i18n
- `/src/routes/+layout.svelte` - Common page layout with language switcher
- `/src/routes/checklist/[id]/` - Dynamic result pages with multilingual support
- `/src/routes/about/` - About page (internationalized)
- `/src/routes/help/` - Help page (internationalized)
- `/src/routes/privacy/` - Privacy policy (internationalized)

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

## 🌍 Internationalization Architecture

### i18n System Overview

The application uses a custom internationalization system built with Svelte 5
runes:

- **Language Store**: `/src/lib/i18n/store.svelte.ts` manages current language
  state
- **Type-safe Translations**: All translation keys are type-checked at compile
  time
- **Dynamic Loading**: Translation files are loaded on-demand for performance
- **Browser Detection**: Automatically detects and uses browser language on
  first visit
- **RTL Support**: Full support for right-to-left languages (Arabic)

### Translation Key Structure

```typescript
// Example translation key structure
interface TranslationKeys {
  app: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    help: string;
    privacy: string;
  };
  checklist: {
    title: string;
    // ... nested structure
  };
}
```

### Font Management for PDF Export

The application includes an advanced font management system for international
PDF generation:

- **Latin Script**: Roboto font for Western languages
- **CJK Script**: Noto Sans CJK for Japanese, Korean, and Chinese
- **Devanagari Script**: Noto Sans Devanagari for Hindi
- **Arabic Script**: Noto Sans Arabic with RTL rendering

### Adding New Languages

To add a new language:

1. Create translation file in `/src/lib/i18n/translations/[lang].ts`
2. Add language to `SUPPORTED_LANGUAGES` in `/src/lib/i18n/types.ts`
3. Update font configuration if needed in `/src/lib/i18n/fonts.ts`
4. Test all features including PDF export

## 🛠️ Maintenance Guidelines

### Code Quality Standards

- **Type Safety**: All code must pass `npm run check` with no errors
- **ESLint Compliance**: Use `npm run lint` before committing
- **Formatting**: Apply `npm run format` to maintain consistency
- **Performance**: Maintain Lighthouse score of 95+ for performance

### i18n Best Practices

1. **Translation Keys**: Use descriptive, hierarchical keys
2. **Fallbacks**: Always provide fallback text for missing translations
3. **Context**: Include context comments for translators
4. **Testing**: Test all languages, especially RTL layouts
5. **Cultural Sensitivity**: Review translations for cultural appropriateness

### Component Development Rules

1. **Always use Svelte 5 runes** - No legacy reactive syntax
2. **Import translations** - Use `import { t } from '$lib/i18n'` in components
3. **Dynamic text** - Never hardcode user-facing text
4. **ARIA labels** - Ensure all interactive elements have translated labels
5. **Date/Time formats** - Use locale-appropriate formatting

### PDF Export Considerations

- Test PDF generation for all languages before release
- Verify font embedding works correctly
- Check RTL text rendering in Arabic PDFs
- Ensure metadata is properly internationalized

### Performance Optimization

- Lazy load translation files
- Cache fonts for PDF generation
- Use dynamic imports for language-specific features
- Monitor bundle size impact when adding languages

## ⚠️ Critical Constraints

### Must Maintain

1. **PWA Functionality**: All features must work offline
2. **Type Safety**: No `any` types in TypeScript code
3. **Accessibility**: WCAG 2.1 AA compliance required
4. **Privacy**: No external API calls or tracking
5. **Performance**: Bundle size under 200KB gzipped

### Security Requirements

- All data stored locally only
- No external font loading (fonts bundled)
- CSP headers properly configured
- Input sanitization for all user inputs

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Must gracefully degrade for older browsers

---

# 🔧 リファクタリング実行指示書

## 🎯 目標

責務の明確化、再利用性の向上、コード重複排除を重点的に実施する

## 📋 Claude Codeへの指示内容

### **Step 1: 現状分析と計画立案**

```bash
「現在のプロジェクトのリファクタリング分析を行ってください。

重点分析項目：
1. 責務が混在している箇所の特定
2. 重複コードの洗い出し
3. 再利用可能だが分離されていないロジック
4. 巨大なファイル/関数の特定

以下のコマンドで現状確認：
npm run lint
npm run check
npm run build

分析結果をもとに、具体的なリファクタリングプランを提案してください。」
```

### **Step 2: Phase 1 - 責務の明確化**

#### **2.1 ユーティリティ関数の分離**

```bash
「以下のファイルから、責務が混在している箇所を特定し、
適切なユーティリティファイルに分離してください：

優先対象ファイル：
- src/lib/components/ExportModal.svelte
- src/lib/utils/reliablePDFGenerator.ts
- src/lib/stores/checklistStore.svelte.ts

新規作成予定：
- src/lib/utils/validation.ts (バリデーション関連)
- src/lib/utils/formatting.ts (フォーマット関連)
- src/lib/utils/storage.ts (ストレージ操作)
- src/lib/utils/platform.ts (プラットフォーム検出)
- src/lib/helpers/ (小さなヘルパー関数群)
```

#### **2.2 定数・設定の集約**

```bash
「散在している定数や設定を以下に集約してください：

作成するファイル：
- src/lib/constants/app.ts (アプリ全体設定)
- src/lib/constants/export.ts (エクスポート関連)
- src/lib/constants/i18n.ts (国際化設定)
- src/lib/constants/pdf.ts (PDF生成設定)
- src/lib/constants/scoring.ts (スコア計算設定)

マジックナンバーやハードコードされた文字列を排除してください。」
```

#### **2.3 型定義の整理・集約**

```bash
「型定義を整理し、再利用性を向上してください：

現在の型定義ファイル：
- src/lib/types/checklist.ts

拡張予定：
- src/lib/types/export.ts (エクスポート関連型)
- src/lib/types/i18n.ts (国際化関連型)
- src/lib/types/platform.ts (プラットフォーム関連型)
- src/lib/types/common.ts (共通型・ユーティリティ型)

重複する型定義をまとめ、extends/intersectionを活用してください。」
```

### **Step 3: Phase 2 - コード重複排除**

#### **3.1 共通ロジックの抽出**

```bash
「以下の重複パターンを特定し、共通関数として抽出してください：

重複が予想される箇所：
1. 日付フォーマット処理
2. エラーハンドリングパターン
3. localStorage操作
4. PDF生成の共通処理
5. 言語判定・フォント選択ロジック
6. バリデーション処理

作成予定の共通関数：
- src/lib/utils/dateUtils.ts
- src/lib/utils/errorHandling.ts
- src/lib/utils/storageUtils.ts
- src/lib/utils/fontUtils.ts
- src/lib/utils/validationUtils.ts
```

#### **3.2 コンポーネント共通化**

```bash
「UI系の重複を排除し、再利用可能なコンポーネントを作成：

作成予定コンポーネント：
- src/lib/components/ui/Button.svelte (汎用ボタン)
- src/lib/components/ui/Modal.svelte (汎用モーダル)
- src/lib/components/ui/Loading.svelte (ローディング表示)
- src/lib/components/ui/ErrorMessage.svelte (エラー表示)
- src/lib/components/ui/ProgressBar.svelte (プログレスバー)
- src/lib/components/forms/ (フォーム関連)

既存コンポーネントから共通UIパターンを抽出してください。」
```

### **Step 4: Phase 3 - 再利用性の向上**

#### **4.1 汎用サービス層の作成**

```bash
「ビジネスロジックを汎用的なサービス層として抽出：

作成予定サービス：
- src/lib/services/ChecklistService.ts (チェックリスト操作)
- src/lib/services/ExportService.ts (エクスポート機能)
- src/lib/services/I18nService.ts (国際化管理)
- src/lib/services/StorageService.ts (データ永続化)
- src/lib/services/ValidationService.ts (バリデーション)

各サービスは以下の原則に従ってください：
- 単一責任の原則
- 依存性注入可能
- テスタブルな設計
- インターフェース定義
```

#### **4.2 コンポジション関数の作成**

```bash
「Svelte 5のrunesを活用した再利用可能なコンポジション関数：

作成予定：
- src/lib/composables/useChecklist.ts
- src/lib/composables/useExport.ts
- src/lib/composables/useI18n.ts
- src/lib/composables/useStorage.ts
- src/lib/composables/usePlatform.ts

各コンポジションは状態管理とロジックを適切に分離してください。」
```

### **Step 5: Phase 4 - アーキテクチャ改善**

#### **5.1 エラーハンドリングの統一**

```bash
「エラーハンドリングを統一し、一貫性を向上：

作成・改善項目：
- src/lib/utils/errorHandler.ts (統一エラーハンドラー)
- src/lib/types/errors.ts (エラー型定義)
- 各サービス層でのエラー処理統一
- ユーザー向けエラーメッセージの国際化

エラーの種類別に適切な処理を実装してください。」
```

#### **5.2 ディレクトリ構造の最適化**

```bash
「最終的なディレクトリ構造を以下に最適化：

src/lib/
├── components/
│   ├── ui/          # 汎用UIコンポーネント
│   ├── forms/       # フォーム関連
│   └── layout/      # レイアウト関連
├── services/        # ビジネスロジック
├── composables/     # 再利用可能なコンポジション
├── utils/           # ユーティリティ関数
├── helpers/         # 小さなヘルパー関数
├── constants/       # 定数・設定
├── types/           # 型定義
├── stores/          # グローバル状態管理
└── data/            # 静的データ

既存ファイルを適切に移動・リネームしてください。」
```

## ⚠️ 実行時の注意事項

### **品質確認**

```bash
「各Phase完了後、必ず以下を実行して確認：

1. npm run lint     # ESLintエラーなし
2. npm run check    # 型エラーなし
3. npm run build    # ビルド成功
4. npm run preview  # 動作確認

エラーが発生した場合は、そのPhaseを完了してから報告してください。」
```

### **Git管理**

```bash
「リファクタリングは以下のコミット戦略で：

1. feature/refactoring-phase-1 ブランチ作成
2. 各Phase毎にコミット
3. Phase完了時にPRレビュー
4. 問題なければmainにマージ

コミットメッセージ例：
- refactor: extract validation utilities (Phase 1)
- refactor: remove code duplication in PDF generation (Phase 2)
- refactor: improve component reusability (Phase 3)
```

### **段階的実行**

```bash
「一度に全てを変更せず、以下の順序で段階的に：

1. Phase 1完了 → 動作確認 → Phase 2実行
2. 各ファイル移動時は import文の自動修正確認
3. 既存機能が破綻していないか各段階で確認

段階的な進行により、問題の特定と修正を容易にします。」
```

## 🎯 期待される成果

### **完了後の状態**

- **保守性**: 各ファイルの責務が明確
- **再利用性**: 共通ロジックの適切な分離
- **可読性**: 重複排除による簡潔なコード
- **テスタビリティ**: 単体テスト実装の準備完了
- **拡張性**: 新機能追加が容易

### **開発効率向上**

- **バグ修正**: 影響範囲の局所化
- **機能追加**: 既存コンポーネント・関数の再利用
- **チーム開発**: 責務分離による並行開発可能性

この指示書に従ってリファクタリングを実行してください。
