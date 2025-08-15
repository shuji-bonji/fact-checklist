// ESLint configuration for Svelte 5 + TypeScript with improved error/warn balance
import js from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import typescript from 'typescript-eslint';

// 環境変数で厳格さを制御
const isProduction = process.env.NODE_ENV === 'production';
const isCI = process.env.CI === 'true';
const isStrict = isProduction || isCI;

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
        // Svelte 5 runes
        $state: 'readonly',
        $derived: 'readonly',
        $effect: 'readonly',
        $props: 'readonly',
        $bindable: 'readonly',
        $inspect: 'readonly',
        $host: 'readonly'
      },
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    plugins: {
      prettier
    },
    rules: {
      // 🔴 セキュリティ・バグ関連は必ずerror
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-with': 'error',

      // 🔴 論理エラーを防ぐルール
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      'no-throw-literal': 'error',

      // 🟡 コード品質（開発中はwarn、本番はerror）
      'no-console': [isStrict ? 'error' : 'warn', { allow: ['warn', 'error'] }],
      'prefer-const': isStrict ? 'error' : 'warn',
      'no-var': 'error', // これは常にerror（ES6以降必須）
      'object-shorthand': 'warn',
      'prefer-template': 'warn',
      'no-return-await': 'warn',
      'prefer-arrow-callback': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],

      // 🟢 コードスタイル（Prettierに任せる）
      'prettier/prettier': [
        'error',
        {
          useTabs: false,
          singleQuote: true,
          trailingComma: 'none',
          printWidth: 100,
          tabWidth: 2,
          semi: true,
          arrowParens: 'avoid'
        }
      ]
    }
  },

  // TypeScript configuration
  ...typescript.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // 🔴 型安全性の重要なルール（厳格化）
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true
        }
      ],

      // 🟡 開発効率のためのルール（厳格化）
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_|\\$\\$',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_'
        }
      ],

      // 🟢 型の一貫性
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-misused-promises': 'error'
    }
  },

  // Svelte configuration
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelte.parser,
      parserOptions: {
        parser: typescript.parser,
        extraFileExtensions: ['.svelte']
      }
    },
    rules: {
      // 🔴 Svelteのセキュリティ関連
      'svelte/no-at-html-tags': 'error', // XSS防止
      'svelte/no-target-blank': 'error', // セキュリティ
      'svelte/valid-compile': ['error', { ignoreWarnings: false }],

      // 🟡 Svelteのベストプラクティス
      'svelte/no-dom-manipulating': 'warn',
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'warn',
      'svelte/button-has-type': 'warn',
      'svelte/no-useless-mustaches': 'warn',
      'svelte/no-unused-svelte-ignore': 'warn',

      // 🟢 Svelte 5特有の設定
      'svelte/no-reactive-functions': 'off',
      'svelte/no-reactive-literals': 'off',

      // TypeScript in Svelte
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_|\\$\\$|\\$props|\\$state|\\$derived|\\$effect',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-undef': 'off' // TypeScript handles this
    }
  },

  // Test files
  {
    files: ['**/*.test.ts', '**/*.test.js', '**/*.spec.ts', '**/*.spec.js'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  },

  // Config files
  {
    files: [
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      'vite.config.ts',
      'vitest.config.ts',
      'svelte.config.js'
    ],
    languageOptions: {
      parser: typescript.parser,
      parserOptions: {
        project: null // Don't use project for config files
      }
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off'
    }
  },

  // Service Worker files
  {
    files: ['**/service-worker.ts', '**/sw.ts'],
    languageOptions: {
      globals: {
        ...globals.serviceworker
      }
    }
  },

  // Prettier configuration
  configPrettier,

  // Ignore patterns
  {
    ignores: [
      'build/',
      'dist/',
      '.svelte-kit/',
      '.vercel/',
      'node_modules/',
      'coverage/',
      '**/*.min.js',
      'static/',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      '*.md'
    ]
  }
];

// コンソールに現在のモードを表示
console.log(`🔧 ESLint running in ${isStrict ? 'STRICT' : 'DEVELOPMENT'} mode`);
