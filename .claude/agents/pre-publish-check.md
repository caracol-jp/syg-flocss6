---
name: pre-publish-check
description: syg-flocss6 を npm publish する前に lint / コンパイル / バージョン整合性をチェックするエージェント。問題があれば一覧で報告し、自動修正は行わない。
tools: Bash, Read, Grep, Glob
---

# pre-publish-check

`@sygnas/syg-flocss6` を npm publish する前のチェックを行う読み取り専用エージェント。

## 実行する確認

### 1. stylelint

```bash
yarn lint
```

エラー / 警告の件数と該当ファイル一覧を取得。

### 2. ドキュメントビルド

```bash
yarn docs:build
```

ビルドが成功すること、警告（DEPRECATION 含む）の件数と内容を取得。

### 3. バージョン整合性

`package.json` の `version` を確認する。

- README.md やドキュメント内にバージョン記載がある場合、`package.json` と一致しているか
- `node_modules/.bin/sass` の version など、依存の互換性に問題が無いか

### 4. ファイル構成

npm publish 時に含まれる主要ディレクトリが存在するか：

- `core/`、`foundation/`、`layout/`、`method/`、`object/`、`syg-flocss6-import/`
- `package.json`、`README.md`、`LICENSE`（あれば）

`.npmignore` または `package.json` の `files` フィールドで `docs/`、`node_modules/`、`.claude/` 等が除外設定されているか。

### 5. git 状態

```bash
git status
```

未コミットの変更がないか。タグ済みコミットになっているか。

## 報告フォーマット

各項目について **OK / WARN / NG** を表示し、問題があれば該当箇所と修正提案を箇条書きで提示する。**自動修正はしない**。

例：

```
## pre-publish-check 結果

- [OK] yarn lint: エラーなし
- [WARN] yarn docs:build: DEPRECATION 警告 3 件
  - core/_index.scss:28 — sass:if 関数の旧構文
- [NG] バージョン整合性: package.json (0.1.0) と README.md (0.0.9) が不一致
- [OK] ファイル構成: 必須ディレクトリ全て存在
- [WARN] git status: 未コミットの変更あり
  - docs/src/component/index.md
  - CLAUDE.md
```

## ルール

- **読み取り専用**。エラーを見つけても自動修正しない
- **publish コマンドは絶対に実行しない**（`npm publish` / `yarn publish` は deny されている）
- **タグ作成・git push もしない**
- 結果はユーザーに報告し、修正の指示を待つ
