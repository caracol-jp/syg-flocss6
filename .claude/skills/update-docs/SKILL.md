---
name: update-docs
description: syg-flocss6 の機能追加・修正に応じてドキュメント（docs/src/）を更新するスキル。変更内容に対応するセクションのページを特定し、使用例・クラス一覧を反映する。
---

# update-docs

syg-flocss6 のソース変更（コンポーネント追加、ユーティリティ追加、設定値変更等）に応じて `docs/src/` のドキュメントを更新するスキル。

## 使い方

ユーザーから「ドキュメントを更新して」と指示を受けたら、以下のステップで進める。

### 1. 変更内容の特定

直近の変更を `git diff` / `git status` または会話履歴から把握し、影響を受けるドキュメントページを特定する。

| 変更箇所 | 更新するドキュメント |
| --- | --- |
| `core/` または `syg-flocss6-import/config/core/` | `docs/src/core/index.md` |
| `foundation/` | `docs/src/foundation/index.md` |
| `layout/` または `syg-flocss6-import/config/layout/` | `docs/src/layout/index.md` |
| `object/component/` または `syg-flocss6-import/config/component/` | `docs/src/component/index.md` |
| `object/effect/` または `syg-flocss6-import/config/effect/` | `docs/src/effect/index.md` |
| `object/utility/` | `docs/src/utility/index.md` |
| 導入方法・セットアップ手順 | `docs/src/guide/getting-started.md` |

### 2. 更新内容の素案を提示

該当ページに対して、以下の観点で素案を作成し**ユーザーに確認を求めてから書き込む**：

- **見出しの追加位置**（既存の節構造を尊重）
- **クラス一覧表のエントリ追加**
- **HTML サンプルコード**（実際に動作する形）
- **変更によって既存の説明が古くなった部分の修正**

### 3. ドキュメント記述ルール

詳細は [CLAUDE.md](../../../CLAUDE.md) の「ドキュメント記述ルール」セクションを参照。要点：

- **表示確認エリア**は必ず `c-frame u-bc_white` のラッパで囲む
- **粒度 B**：代表例のみ。バリエーションは表で網羅、HTML サンプルは数件
- **見出し階層**: 各セクションの index.md は H1 一つ + H2 で各機能、H3 は基本使わない
- **並び順**: 実際の HTML サンプル → コードサンプル → クラス一覧表
- **コードブロック**: HTML 例は `html` 言語指定、SCSS 例は `scss` 指定
- **メディアクエリ接頭辞**: 必要に応じて `pc:u-mg_t_n` のような実例を含める
- **CSS 変数**: `var(--root-color_red)` 等の参照は表記揺れを避ける（既存ページを必ず参照）
- **絵文字は使わない**

### 4. 動作確認

```bash
yarn docs:dev
```

該当ページがエラーなくレンダリングされることを確認する。サイドバー構造が変わる場合は `docs/src/.vitepress/config.ts` の `sidebar` も更新する。

### 5. ユーザーへの最終確認

更新内容を要約して提示し、追加修正が必要か確認する。

## ルール

- **既存ページのスタイル（テーブル形式 / セクション順）を踏襲する**
- **動作未確認の HTML サンプルは載せない**。追加した機能を実際にブラウザで確認してから記載する
- **README.md と CLAUDE.md は範囲外**。それらの更新は別途指示を受ける
- **言語は日本語、インデントは 2 スペース**

## 参考

- 既存ページの構造: [docs/src/utility/index.md](../../docs/src/utility/index.md)（表形式の見本）
- コンポーネント例の見本: [docs/src/component/index.md](../../docs/src/component/index.md)
