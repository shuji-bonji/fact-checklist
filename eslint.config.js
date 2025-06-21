import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import sveltePlugin from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	// JavaScript基本設定
	js.configs.recommended,
	
	// TypeScript設定
	...compat.extends('@typescript-eslint/recommended'),
	
	// Svelte設定
	...sveltePlugin.configs['flat/recommended'],
	
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
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		rules: {
			// TypeScript固有のルール
			'@typescript-eslint/no-unused-vars': ['error', { 
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_'
			}],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/prefer-const': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-empty-function': 'warn',
			
			// 型安全性向上
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'warn',
			'@typescript-eslint/prefer-optional-chain': 'warn',
			'@typescript-eslint/no-unnecessary-condition': 'warn',
			
			// インポート関連
			'@typescript-eslint/consistent-type-imports': ['error', {
				prefer: 'type-imports',
				disallowTypeAnnotations: false
			}]
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
				sourceType: 'module',
				project: './tsconfig.json',
				extraFileExtensions: ['.svelte']
			}
		},
		rules: {
			// Svelte固有のルール
			'svelte/no-at-html-tags': 'warn',
			'svelte/no-target-blank': 'error',
			'svelte/no-reactive-functions': 'off',
			'svelte/no-reactive-literals': 'off',
			'svelte/prefer-class-directive': 'warn',
			'svelte/prefer-style-directive': 'warn',
			'svelte/require-store-reactive-access': 'off',
			'svelte/valid-compile': 'error',
			
			// アクセシビリティ
			'svelte/a11y-alt-text': 'error',
			'svelte/a11y-aria-attributes': 'error',
			'svelte/a11y-click-events-have-key-events': 'error',
			'svelte/a11y-interactive-supports-focus': 'error',
			'svelte/a11y-label-has-associated-control': 'error',
			'svelte/a11y-media-has-caption': 'off',
			'svelte/a11y-missing-attribute': 'error',
			'svelte/a11y-missing-content': 'error',
			'svelte/a11y-mouse-events-have-key-events': 'error',
			'svelte/a11y-no-redundant-roles': 'error',
			'svelte/a11y-no-static-element-interactions': 'error',
			'svelte/a11y-role-has-required-aria-props': 'error',
			'svelte/a11y-structure': 'error',
			
			// TypeScript in Svelte
			'@typescript-eslint/no-unused-vars': ['error', { 
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_'
			}]
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
			'@typescript-eslint/no-var-requires': 'off'
		}
	},
	
	// 除外設定
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'node_modules/',
			'static/',
			'src/service-worker.js',
			'**/*.d.ts'
		]
	},
	
	// 全体的なルール設定
	{
		rules: {
			// 一般的なベストプラクティス
			'no-console': 'off', // 開発中はconsoleを許可
			'no-debugger': 'error',
			'no-alert': 'warn',
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
			'quotes': ['error', 'single', { avoidEscape: true }],
			'semi': ['error', 'always'],
			'indent': ['error', 'tab', { SwitchCase: 1 }],
			'linebreak-style': ['error', 'unix'],
			
			// スペース関連
			'space-before-function-paren': ['error', {
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}],
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