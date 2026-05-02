---
name: add-component
description: syg-flocss6 に新規コンポーネント（c-*）を追加するスキル。コア・派生・index 集約の 4 ファイルを一括生成し、ドキュメント更新は別スキルで行う。
---

# add-component

syg-flocss6 に新規コンポーネント（`c-xxx`）を追加するスキル。

## 使い方

ユーザーから「コンポーネント `c-xxx` を追加して」と指示を受けたら、以下のステップで進める。

### 1. ヒアリング

以下を日本語で確認してから着手する：

1. **コンポーネント名**（例: `c-card`、`c-tag`）。命名は `c-` 接頭辞 + ハイフン区切り
2. **役割の説明**（1〜2 行）
3. **コンパイル時パラメータが必要か**（例: `c-hamburger` の線の本数のように、ループで構造が変わる値）
   - 不要なら通常パターン
   - 必要なら派生に `$xxx` map を定義し、`$component` に登録
4. **モディファイ案**（`c-xxx--variant` など、最初に用意するバリエーション）

### 2. ファイル作成

以下 4 ファイルを作成・更新する。

#### a. コア `object/component/_xxx.scss` を新規作成

```scss
// .c-xxx の構造スタイル
// CSS カスタムプロパティのデフォルト値およびモディファイは
// 派生側（syg-flocss6-import/config/component/_xxx.scss）で設定

@use "sass:map";

@mixin c-xxx($config) {
  .c-xxx {
    // 構造（display, position 等）と var(...) 参照のみ
    // フォールバック値は入れない（派生で必ず定義される前提）
  }
}
```

出力するものが無いコンポーネントは EMPTY mixin にする：

```scss
@mixin c-xxx($config) {
}
```

#### b. コア集約 `object/component/_index.scss` に登録

`@use "xxx" as *;` を追加し、`component($config)` の中に `@include c-xxx($config);` を追加する。

#### c. 派生 `syg-flocss6-import/config/component/_xxx.scss` を新規作成

```scss
// .c-xxx のプロジェクト固有 CSS カスタムプロパティ定義とモディファイ
// 構造スタイルはコア側で管理

@use "sass:map";

@mixin c-xxx($config) {
  .c-xxx {
    // CSS カスタムプロパティのデフォルト値
    --c-xxx--xxx: ...;
  }

  // モディファイ
  .c-xxx.c-xxx--variant {
    --c-xxx--xxx: ...;
  }
}
```

コンパイル時パラメータが必要な場合のみ：

```scss
$xxx: (
  count: 3,
) !default;
```

#### d. 派生集約 `syg-flocss6-import/config/component/_index.scss` に登録

- `@use "xxx" as *;` を追加
- `component-project($config)` の中に `@include c-xxx($config);` を追加
- コンパイル時パラメータがあれば `$component` map に `xxx: $xxx` を追加

### 3. コンパイル確認

```bash
yarn docs:dev
```

エラーなく起動することを確認する。

### 4. ドキュメント更新の促し

このスキルではドキュメント更新までは行わない。終了後にユーザーに対して、続けて `update-docs` スキルでドキュメント追記を行うか確認する。

## ルール

- **コア側にフォールバック値を入れない**。`var(--c-xxx, fallback)` の `fallback` は派生で必ず定義される前提のため不要。
- **hover 系の分離**: `:hover` は `@media (hover: hover)` でガード、`:active` / `:focus` / 状態クラス（`router-link-active` 等）は常時有効。
- **メディアクエリ**: コア側からは `@use "../../method";` で `method.mq($config, pc)` を使う。派生側は `map.get($config, core, media-query, pc)` を直接取得。
- **インデントは 2 スペース、コメントは日本語、文字列はダブルクォート**。

## 参考

- 既存実装の例: [object/component/_btn.scss](../../object/component/_btn.scss) と [syg-flocss6-import/config/component/_btn.scss](../../syg-flocss6-import/config/component/_btn.scss)
- コンパイル時パラメータがあるコンポーネント例: `c-hamburger`
- EMPTY mixin の例: `c-frame` 等
