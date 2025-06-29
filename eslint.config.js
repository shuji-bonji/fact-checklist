import globals from 'globals';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

export default [
  // JavaScript基本設定
  js.configs.recommended,

  // 除外設定を先に定義
  {
    ignores: [
      'build/',
      '.svelte-kit/',
      'dist/',
      'node_modules/',
      'static/',
      'src/service-worker.js',
      '**/*.d.ts',
      'docs/',
      'package-lock.json'
    ]
  },

  // 全ファイル共通設定
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2017,
        ...globals.node
      }
    }
  },

  // TypeScriptファイル用設定
  {
    files: ['**/*.ts'],
    ignores: ['vite.config.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // TypeScript基本ルール
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off', // 安全な場所での使用を許可
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: false
        }
      ]
    }
  },

  // Svelteファイル用設定
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      svelte: sveltePlugin,
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // Svelte基本ルール
      'svelte/no-at-html-tags': 'warn',
      'svelte/no-target-blank': 'error',
      'svelte/prefer-class-directive': 'warn',
      'svelte/prefer-style-directive': 'warn',
      'svelte/valid-compile': 'error',

      // TypeScript in Svelte
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },

  // 設定ファイル用設定
  {
    files: ['*.config.js', '*.config.ts', 'vite.config.*', 'svelte.config.*'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },

  // 全体的なルール設定
  {
    rules: {
      // 一般的なベストプラクティス
      'no-console': 'off',
      'no-debugger': 'error',
      'no-alert': 'off', // confirm, alertは必要な機能なので許可
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',

      // 変数関連
      'no-unused-vars': 'off', // TypeScriptルールを使用
      'no-undef': 'off', // TypeScriptで処理
      'prefer-const': 'error',
      'no-var': 'error',

      // 関数関連
      'arrow-spacing': 'error',
      'no-duplicate-imports': 'error',
      'prefer-arrow-callback': 'warn',

      // オブジェクト・配列関連
      'object-shorthand': 'warn',
      'prefer-destructuring': 'off',
      'prefer-spread': 'warn',

      // 文字列関連
      'prefer-template': 'warn',
      'template-curly-spacing': 'error',

      // コードスタイル
      'comma-dangle': ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],

      // スペース関連
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'space-in-parens': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      // 改行関連
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'no-trailing-spaces': 'error'
    }
  }
];
