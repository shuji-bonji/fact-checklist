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
- Currently, 2 PDF modes are available: Pixel-perfect and Text-based

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

## 📚 Common Development Patterns & Knowledge

### Font Path Issues on GitHub Pages

When deploying to GitHub Pages, font paths must be dynamically adjusted:

```typescript
// ❌ INCORRECT: Static font path
const fontPath = '/fonts/NotoSansJP-Regular.ttf';

// ✅ CORRECT: Dynamic font path detection
export function getFontBasePath(): string {
  if (typeof window === 'undefined') return '/fonts/'; // SSR

  const isGitHubPages =
    window.location.hostname === 'shuji-bonji.github.io' ||
    window.location.pathname.startsWith('/fact-checklist/') ||
    window.location.origin.includes('github.io');

  return isGitHubPages ? '/fact-checklist/fonts/' : '/fonts/';
}
```

### ESLint `prefer-const` with Later Assignment

When declaring variables that will be assigned later in the same scope:

```typescript
// ❌ Will trigger ESLint prefer-const error
let timeoutId: number;
let intervalId: number;

// Later assignment
timeoutId = setTimeout(...);
intervalId = setInterval(...);

// ✅ CORRECT: Initialize with default value
let timeoutId: number = 0;
let intervalId: number = 0;

// Later assignment works without ESLint errors
timeoutId = setTimeout(...);
intervalId = setInterval(...);
```

### Svelte 5 Component Props Pattern

Always use the new Svelte 5 props pattern with proper typing:

```typescript
// ❌ INCORRECT: Legacy pattern
export let value: string;
export let onChange: (value: string) => void;

// ✅ CORRECT: Svelte 5 pattern
interface Props {
  value: string;
  onChange?: (value: string) => void;
}

let { value, onChange = () => {} }: Props = $props();
```

### Type-safe Translation Usage

Always import and use translations with proper type safety:

```typescript
// ✅ CORRECT: Import translation function
import { t } from '$lib/i18n';

// Use in component
const title = t('app.title');
const description = t('checklist.description');

// ❌ INCORRECT: Hardcoded strings
const title = 'Fact Checklist'; // Never hardcode user-facing text
```

### Export Mode Selection

Current export modes available (others may be temporarily disabled):

```typescript
// Available modes as of latest update
export const PDF_MODES = {
  PIXEL_PERFECT: 'pixelPerfect', // Default - uses browser print
  TEXT_BASED: 'textBased' // Lightweight with embedded fonts
  // RELIABLE_FONTS: 'reliable',    // Temporarily disabled
} as const;
```

### Case Blocks in Switch Statements

Always use block scope for case statements with const/let declarations:

```typescript
// ❌ INCORRECT: Will cause no-case-declarations error
switch (mode) {
  case 'MODE_A':
    const result = processA();
    return result;
}

// ✅ CORRECT: Use block scope
switch (mode) {
  case 'MODE_A': {
    const result = processA();
    return result;
  }
}
```

### Async Function Return Types

Be explicit about Promise return types for better type safety:

```typescript
// ❌ Less specific
async function generatePDF(data: any): Promise<void> {
  // ...
}

// ✅ CORRECT: More specific return types
async function generatePDF(
  data: ChecklistData
): Promise<{ success: boolean; cancelled?: boolean }> {
  // ...
}
```

---

This document serves as a comprehensive guide for maintaining and developing the
Fact Checklist application. Always prioritize code quality, type safety, and
user experience across all 12 supported languages.

---

## Testing Strategy & Environment

### Test Architecture Overview

This project implements a comprehensive testing strategy with multiple layers:

1. **Unit Tests**: Individual service and utility function testing
2. **Integration Tests**: Service interaction and data flow testing
3. **Component Tests**: Svelte 5 component behavior testing (planned)
4. **E2E Tests**: Complete user workflow testing (planned)

### Current Testing Status

- ✅ **Integration Tests**: Implemented in `src/lib/tests/`
- 🚧 **Vitest Migration**: In progress (Phase 1-2)
- 📋 **Component Tests**: Planned (Phase 3)
- 📋 **E2E Tests**: Future implementation

### Testing Commands

```bash
# Unit & Integration Tests
npm run test                 # Run all tests with Vitest
npm run test:ui             # Run tests with UI interface
npm run test:run            # Run tests once (CI mode)
npm run test:coverage       # Run tests with coverage report
npm run test:watch          # Run tests in watch mode

# Component Tests (Phase 3)
npm run test:component      # Run component-specific tests

# E2E Tests (Future)
npm run test:e2e           # Run Playwright E2E tests
npm run test:e2e:ui        # Run E2E tests with UI
npm run test:all           # Run all test suites
```

### Test File Structure

```
src/lib/tests/
├── setup.ts                    # Vitest global setup
├── services/                   # Unit tests for services
│   ├── ChecklistService.test.ts
│   ├── ScoringService.test.ts
│   ├── SearchService.test.ts
│   ├── StorageService.test.ts
│   └── ExportService.test.ts
├── integration/                # Integration tests
│   ├── serviceIntegration.test.ts
│   └── serviceIntegrationSimple.test.ts
├── components/                 # Component tests (Phase 3)
│   ├── checklist/
│   ├── ui/
│   └── layout/
└── utils/                      # Utility function tests
    ├── validation.test.ts
    └── formatting.test.ts

tests/
└── e2e/                       # E2E tests (Future)
    ├── checklist-workflow.spec.ts
    ├── internationalization.spec.ts
    └── pwa-functionality.spec.ts
```

### Test Configuration Files

- `vitest.config.ts` - Main Vitest configuration
- `vitest.component.config.ts` - Component-specific test config
- `playwright.config.ts` - E2E test configuration (planned)
- `src/lib/tests/setup.ts` - Global test setup and mocks

### Testing Best Practices for This Project

#### Svelte 5 Component Testing

- Use Svelte 5 runes (`$state`, `$derived`) in test components
- Test component props with `$bindable()` properties
- Verify reactive state changes with runes

#### Internationalization Testing

- Test all 12 supported languages where applicable
- Verify RTL layout for Arabic language
- Test font loading for CJK languages (Japanese, Chinese, Korean)

#### TypeScript Testing

- Maintain strict type checking in tests
- Use proper type assertions for mock objects
- Test type-safe service interfaces

#### PWA & Browser API Mocking

```typescript
// Example mocking patterns used in setup.ts
vi.stubGlobal('localStorage', localStorageMock);
vi.stubGlobal('indexedDB', indexedDBMock);
vi.mock('jspdf', () => ({
  /* PDF mock */
}));
```

### Coverage Targets

- **Minimum Coverage**: 70% across all metrics
- **Services**: 90%+ coverage (business logic priority)
- **Components**: 80%+ coverage
- **Utilities**: 95%+ coverage

### Test Data Management

- Use factory functions for creating test data
- Maintain consistent test fixtures
- Mock external dependencies (PDF generation, storage APIs)

### Continuous Integration

Tests are designed to run in CI environments with:

- Deterministic results (no flaky tests)
- Fast execution (unit tests < 10s, integration tests < 30s)
- Comprehensive error reporting
- Automatic coverage reporting

### Performance Testing

Basic performance testing is included in integration tests:

- Checklist creation time benchmarks
- Score calculation performance
- Search functionality response times
- Memory usage validation

---

### Important Notes for Claude Code

When working with tests in this project:

1. **Always check existing test files** in `src/lib/tests/` before creating new
   ones
2. **Follow Svelte 5 patterns** - use runes, not legacy reactive syntax
3. **Consider internationalization** - many components have i18n dependencies
4. **Mock browser APIs** properly using the patterns in `setup.ts`
5. **Maintain TypeScript strictness** - all tests must pass type checking
6. **Test service layer first** - business logic is the highest priority

### Current Implementation Phases

- **Phase 1 (This Week)**: Vitest foundation setup ✅
- **Phase 2 (Next Week)**: Migrate existing tests to Vitest
- **Phase 3 (2-3 weeks)**: Implement component tests
- **Phase 4 (Future)**: E2E testing with Playwright

## Add an improvement plan

We have added a proposal for improvement. Please check the contents of the file
below.

./improvement-plan.md
