# Reliable PDF Mode 復活計画 (GitHub Issue 下書き)

## 概要

PDF エクスポートの 3 モード目「フォント信頼性重視 (reliableFont)」を再度 UI に出すための復活計画。commit
`0dedeef` (2025-07-02,「fix: PDF出力オプションの変更」) で
**UI から非表示化**されたが、 `src/lib/utils/reliablePDFGenerator.ts`
(約 1050 行) は完全に残存している。

## 現状

- 現行 UI に表示される PDF モードは
  **2 種類**: ピクセルパーフェクト / テキストベース
- `reliableFont` 関連の i18n キーは `export.pdfModes.reliableFont` /
  `reliableFontDescription`
  ほか、help 詳細にも残っており、型定義 (`src/lib/i18n/types.ts`) にも存在する
- コンポーネント側: `ExportModal.svelte` でラジオボタンがコメントアウト

## コメントアウトの理由（commit message より復元）

> 「文字被りやレイアウトの問題のため」

commit message にはそれ以上の詳細なし。issue も作成されていなかった模様。

## 調査で判明した根本原因

| #   | 箇所                                                                                     | 問題                                                                                  |
| --- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 1   | `reliablePDFGenerator.ts` line 42 `lineHeight = 7`                                       | 7mm 固定だがフォントサイズが 9〜18pt と幅広く、大見出しや多言語テキストで行間不足     |
| 2   | `addInternationalText` line 504 の `x === 0` 条件                                        | `x=0` を「自動配置」と誤判定、明示位置指定後の Y 座標が更新されず次のテキストが重なる |
| 3   | `addScoreGrid` line 728-735, `addSectionHeader` line 758, 764 の生 `pdf.text()` 呼び出し | RTL ラッパを経由しないため、アラビア語でテキスト方向と右寄せが壊れる                  |
| 4   | `addGuideContent` line 369-414 の Y 加算量 (+1, +2)                                      | ガイド付き出力時に 50〜80mm 膨張、`checkPageBreak(25)` では不足しページ末尾で被る     |
| 5   | `addLeftBorder` line 680 の `rect(this.margin, ...)`                                     | カードごとの x 座標を渡しておらず、全カードの左ボーダーが同じ位置に描画される         |

## 修正方針（案）

### 案 B-1: フル復活（12 言語対応）

1. `lineHeight` を `fontSize` に応じて動的算出するヘルパーを追加（目安:
   `mm per pt × fontSize × 1.2`）
2. すべての `pdf.text()` 直接呼び出しを `addInternationalText()`
   ラッパ経由に置き換え
3. `addInternationalText` の Y 更新条件から `=== 0` を除去
4. `addGuideContent` の前後で `checkPageBreak(80)` を実施
5. `addLeftBorder` を `rect(x, y, ...)` に修正（カード x 座標を引数で渡す）
6. 12 言語 × ガイド有無のクロスマトリクスで目視 QA

**見積もり: 3〜5 日**

### 案 B-2: ja / en のみ部分復活

1. 上記 1, 2 (部分的), 3 だけ実施
2. UI で言語が `ja` / `en` のときのみ reliableFont を選択可能にする
3. RTL 言語 (`ar`) は text-based にフォールバック

**見積もり: 1 日**

### 案 A: 現状維持（既に採用）

- 翻訳ファイル側で「2 モード」に揃えて整合性を取る
- この issue は将来のメンテナ向けに保持

## テストケース（復活時）

- [ ] 日本語 × ガイド付き × 20 項目すべてチェック
- [ ] 日本語 × ガイドなし
- [ ] アラビア語 × ガイド付き（RTL 確認）
- [ ] 英語 × 長いメモ文字列
- [ ] 中国語繁体字 × 一部チェック
- [ ] ヒンディー語（Devanagari フォント埋め込み確認）
- [ ] 韓国語
- [ ] PDF メタデータが正しく言語化されているか
- [ ] 透かし付きエクスポート
- [ ] 目次 (TOC) 生成が有効な場合

## 関連ファイル

- `src/lib/utils/reliablePDFGenerator.ts` — 実装本体
- `src/lib/services/PDFService.ts` — ルーティング
- `src/lib/components/ExportModal.svelte` — UI（コメントアウト中）
- `src/lib/i18n/types.ts` — 型定義
- `src/lib/i18n/fonts.ts` — 多言語フォント管理
- 各言語翻訳 `src/lib/i18n/translations/*.ts` の `export.pdfModes.reliableFont*`

## 関連コミット

- `0dedeef` 2025-07-02 fix: PDF出力オプションの変更（無効化）
- `07d694c`
  Canvasをやめて日本語フォントを利用する方向に変更（reliableFont 系の初期実装）
