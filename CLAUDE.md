# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際の指針です。

## プロジェクト概要

- **パッケージ名**: `@sygnas/syg-flocss6`（npm public 公開予定）
- **位置付け**: [FLOCSS](https://github.com/hiloki/flocss) をベースにした CSS フレームワーク。`syg-flocss5` の後継版
- **ドキュメント**: VitePress で構築（`docs/src/`）

## ディレクトリ構成

```
syg-flocss6/
├── core/              # :root に CSS 変数を出力するコア
├── foundation/        # html / body / a / h* 等の素タグへの基本スタイル
├── layout/            # l-* レイアウトクラス（grid / flex / column 等）
├── method/            # @function / @mixin（color / font-family / easing / media）
├── object/
│   ├── component/     # c-* コンポーネント（コア：構造）
│   ├── effect/        # e-* エフェクト（コア：基本は空）
│   └── utility/       # u-* ユーティリティ（コア：完全実装）
├── syg-flocss6-import/        # プロジェクト側にコピーする雛形（派生）
│   ├── _method.scss           # method/ の再公開
│   └── config/
│       ├── core/              # 色 / フォントサイズ / スペーサー等の定義値
│       ├── component/         # CSS カスタムプロパティ + プロジェクト固有モディファイ
│       ├── effect/            # エフェクトの実体定義
│       └── layout/            # レイアウトのコンパイル時パラメータ
└── docs/
    ├── src/                   # VitePress ソース
    │   ├── .vitepress/
    │   ├── sass/common.scss   # フレームワークを @use する出力エントリ
    │   ├── guide/             # 導入ガイド
    │   ├── core/ foundation/ layout/ component/ effect/ utility/
    │   └── index.md
    └── dist/                  # ビルド成果物（.gitignore）
```

## 二層構成（コア + 派生）

`component/` `effect/` `layout/` は **コア**と**派生**に分離されています。

### コア（`object/component/_xxx.scss` 等）

- 全プロジェクト共通の構造（`display`、`position`、ループ生成、コンパイル時パラメータ参照）
- `var(--c-xxx)` で派生側の CSS カスタムプロパティを参照（**フォールバック値は入れない**）
- 出力するものが無い場合は EMPTY mixin

### 派生（`syg-flocss6-import/config/component/_xxx.scss` 等）

- `@mixin c-xxx($config)` で plain Sass を記述
- CSS カスタムプロパティのデフォルト値を定義
- プロジェクト固有のモディファイ（カスタムプロパティ上書きや構造混在）はここにまとめる
- メディアクエリは `map.get($config, core, media-query, ...)` で直接取得（`method/` に依存しない）
- コンパイル時パラメータが必要な場合のみ `$xxx` map で保持（例: `$hamburger`）

### 適用順

`docs/src/sass/common.scss` で **コア → 派生** の順に `@include`。CSS custom properties は cascade で解決されます。

```scss
@include syg-flocss6-component.component($config);              // コア
@include syg-flocss6-component-project.component-project($config); // 派生
```

## コーディング規約

### Sass

- インデントは **2 スペース**
- コメントは **日本語**で記述
- 文字列は **ダブルクォート**（`"..."`、stylelint で強制）
- ファイル冒頭で `@use` を明示。Dart Sass の制約上、各ファイルで必要な `@use` を書く（グローバル参照は不可）
- `@use "sass:map"` などの組み込みは必要なときだけ追加
- 設定値は `var(--root-xxx)` で参照（v5 スタイルの `fz()` `c()` 等の Sass function は不採用）

### 変数・クラス命名

- v5 を継承：`{prefix}-{基本名}_{バリエーション}` または `{prefix}-{基本名}--{modifier}`
  - 例: `c-btn--bg-black`、`u-mg_t_l3`、`l-fx__item_2-1`
- メディアクエリ接頭辞: `pc:` `tb:` `sp:`（`$media-prefix` で生成）

### CSS 変数命名

- ハイフン / アンダースコア混在は意図的：`--{基本名}_{バリエーション}` 規則。`_` が階層区切り、`-` が複合語区切り
  - 例: `--root-color_red-light`（red の light バリエーション）

### hover / active / focus 分離

- `:hover` のみ `@media (hover: hover)` でガード（タッチデバイスで誤発火させない）
- `:active` / `:focus` / 状態クラス（`.router-link-active` 等）は常時有効

## メディアクエリ

`$media-query` と `$media-prefix` は用途別に分離（B-9 対応）：

- `$media-query`（5 種：pc / tb / tb-lo / sp-up / sp）: `@media` 条件で使う
- `$media-prefix`（3 種：pc / tb / sp）: クラス接頭辞生成ループで使う

利用例：

```scss
@use "../method";

.foo {
  @media #{method.mq($config, pc)} {
    // PC 向けスタイル
  }
}
```

## 新規コンポーネント追加の手順

1. **コア作成**: `object/component/_xxx.scss` に `@mixin c-xxx($config)` を作成（構造のみ、`var(--c-xxx)` 参照）
2. **コア集約**: `object/component/_index.scss` に `@use` と `@include` を追加
3. **派生作成**: `syg-flocss6-import/config/component/_xxx.scss` に `@mixin c-xxx($config)` を作成（CSS カスタムプロパティ + 固有モディファイ）
4. **派生集約**: `syg-flocss6-import/config/component/_index.scss` の `component-project` mixin に `@include c-xxx($config)` を追加
5. **コンパイル時パラメータが必要な場合**: 派生に `$xxx` map を定義し、`$component` map に登録
6. **ドキュメント更新**: `docs/src/component/index.md` に使用例を追記

## ドキュメント記述ルール（`docs/src/`）

VitePress でレンダリングされるドキュメントの記述ルール。

### 表示確認エリア

実際のクラス適用結果を見せる「表示確認エリア」は **`c-frame u-bc_white`** のラッパで囲む。コードサンプル（` ```html ` ブロック）はその直後に配置する。

```html
<div class="c-frame u-bc_white">
  <div class="l-fx l-fx--wrap l-gap-x_n l-gap-y_n l-jst-c_end">
    <div class="l-fx__item_3-1 u-bc_gray">3-1</div>
    <div class="l-fx__item_3-2 u-bc_gray">3-2</div>
    <div class="l-fx__item_2-1 u-bc_gray">2-1</div>
  </div>
</div>

```html
<!-- ↑コードサンプル -->
```

- ラッパは必ず `c-frame u-bc_white`。複数の表示例を載せる場合は、ラッパ内で `u-mg_t_n` 等で間隔を取る
- 表示の比較対象（セル等）には `u-bc_gray` を当てると視認しやすい
- 実際の HTML サンプル → コードサンプル → クラス一覧表 の順で並べる

### 粒度

- **代表例のみ**を記載する。バリエーション網羅は表で済ませる
- HTML サンプルは数件まで。同じクラスの繰り返しは載せない

### 見出し階層

- 各セクション（`docs/src/<section>/index.md`）は H1 一つ + H2 で各機能。H3 は基本使わない
- コードブロックは `html` / `scss` / `css` の言語指定を明示

### 更新タイミング

- ソース変更（コンポーネント追加・修正、設定値変更）に伴い、対応する `docs/src/<section>/index.md` を更新する
- 動作未確認の HTML サンプルは載せない（`yarn docs:dev` で実機確認してから記載）

## ビルド・テスト

```bash
yarn docs:dev       # VitePress 開発サーバ（http://localhost:5173/）
yarn docs:build     # 静的サイト書き出し（docs/dist/）
yarn lint           # stylelint で全 .scss を検査
```

`docs/src/sass/common.scss` は本リポジトリ内のフレームワークを相対パスで `@use` しています（`node_modules/@sygnas/syg-flocss6` 経由ではない）。

## 注意点・落とし穴

### Sass の `/` 評価

- `16 / 9` → Sass が除算で `1.777...` に。文字列 `"16 / 9"` で回避

### CSS カスタムプロパティ内の値

- `rgba(#000, 0.4)` はカスタムプロパティ内ではパススルーされない → `rgba(0, 0, 0, 0.4)` と直接記述

### `syg-flocss6-import/_method.scss`

- 雛形（エンドユーザのプロジェクト用）の前提で `../../../node_modules/@sygnas/syg-flocss6/method/` を参照
- 本リポジトリ内のテストでは使わない（`docs/src/sass/common.scss` から直接 `method/` を読まないように設計）

## 共通ルール

- 確認画面・ログを含め、ユーザ向け表示は **日本語**
- インデントは **2 スペース**
- コメントは **日本語**
