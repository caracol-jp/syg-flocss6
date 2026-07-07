# はじめに

## syg-flocss6 とは

`@sygnas/syg-flocss6` は [FLOCSS](https://github.com/hiloki/flocss) をベースにした CSS フレームワークです。
Sass で記述しつつ、設定値（色・フォントサイズ・スペーサー等）を **CSS カスタムプロパティ**として出力することで、エディタ補完を効かせやすく、保守性を高めています。

## インストール

```bash
yarn add -D @sygnas/syg-flocss6
```

## セットアップ

### 1. 設定雛形をプロジェクトへ複製

`node_modules/@sygnas/syg-flocss6/syg-flocss6-import` を `src/sass/` 配下へ複製します。

```bash
cp -r node_modules/@sygnas/syg-flocss6/syg-flocss6-import src/sass/
```

### 2. ビルドツールに loadPaths を設定（推奨）

ビルドツールの Sass 解決パス（loadPaths）に `node_modules` を追加すると、フレームワーク本体を **`@sygnas/syg-flocss6/...` というパッケージ名**で `@use` できます。相対パス（`../../` の階層依存）で壊れやすくなるのを避けられるため、こちらの方式を推奨します。

Vite の場合：

```js
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ["node_modules"],
      },
    },
  },
};
```

Sass CLI の場合：

```bash
sass --load-path=node_modules src/sass/common.scss dist/common.css
```

### 3. `common.scss` を用意

`src/sass/common.scss` を作成し、フレームワーク本体と派生設定を `@use` します。

loadPaths を設定した場合（パッケージ名で `@use`。推奨）：

```scss
@use "sass:map";

// プロジェクト固有設定
@use "./syg-flocss6-import/config" as *;
@use "./syg-flocss6-import/method";

@use "./syg-flocss6-import/config/layout" as syg-flocss6-layout-project;
@use "./syg-flocss6-import/config/effect" as syg-flocss6-effect-project;
@use "./syg-flocss6-import/config/component" as syg-flocss6-component-project;

// フレームワーク本体（パッケージ名で解決）
@use "@sygnas/syg-flocss6/core" as syg-flocss6-core;
@use "@sygnas/syg-flocss6/foundation" as syg-flocss6-foundation;
@use "@sygnas/syg-flocss6/layout" as syg-flocss6-layout;
@use "@sygnas/syg-flocss6/object/component" as syg-flocss6-component;
@use "@sygnas/syg-flocss6/object/effect" as syg-flocss6-effect;
@use "@sygnas/syg-flocss6/object/utility" as syg-flocss6-utility;

// 適用
@include syg-flocss6-core.core($config);
@include syg-flocss6-foundation.foundation($config);
@include syg-flocss6-layout.layout($config);
@include syg-flocss6-layout-project.layout-project($config);
@include syg-flocss6-component.component($config);
@include syg-flocss6-component-project.component-project($config);
@include syg-flocss6-effect.effect($config);
@include syg-flocss6-effect-project.effect-project($config);
@include syg-flocss6-utility.utility($config);
```

loadPaths を使えない場合は、フレームワーク本体を相対パスで `@use` します（`common.scss` の設置階層に合わせて `../../` の深さを調整してください）：

```scss
// フレームワーク本体（相対パスで解決）
@use "../../node_modules/@sygnas/syg-flocss6/core" as syg-flocss6-core;
@use "../../node_modules/@sygnas/syg-flocss6/foundation" as syg-flocss6-foundation;
@use "../../node_modules/@sygnas/syg-flocss6/layout" as syg-flocss6-layout;
@use "../../node_modules/@sygnas/syg-flocss6/object/component" as syg-flocss6-component;
@use "../../node_modules/@sygnas/syg-flocss6/object/effect" as syg-flocss6-effect;
@use "../../node_modules/@sygnas/syg-flocss6/object/utility" as syg-flocss6-utility;
```

### 4. コンパイル

任意のビルドツール（Vite / webpack / Sass CLI）でコンパイルしてください。

## 構成

```
syg-flocss6-import/        ← プロジェクト側で編集する設定ファイル群
├── config/
│   ├── core/              ← 色・フォントサイズ・スペーサー等
│   ├── component/         ← コンポーネントの派生（CSS 変数定義 + 固有スタイル）
│   ├── effect/
│   └── layout/
└── _method.scss           ← method/ の再公開
```

フレームワーク本体（`node_modules/@sygnas/syg-flocss6/`）は触らず、`syg-flocss6-import/` 内のみ編集します。

## 次のステップ


- [プロジェクトで使う](use-in-project) — 設定値やメソッドをプロジェクト用CSSでも流用する方法
- [Core（CSS 変数）](/core/) — 色やフォントサイズなどの基本設定
- [Component](/component/) — ボタン・アコーディオンなど
- [Utility](/utility/) — 余白・整列などの単機能クラス
