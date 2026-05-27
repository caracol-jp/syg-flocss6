# 知見メモ

開発中に得た知見を蓄積するファイル。

## Sass

### `if()` 関数の非推奨化（2026-05-27）

Sass の組み込み関数 `if($condition, $if-true, $if-false)` は非推奨になった。
CSS 側に `if()` 関数が追加されることに伴う名前衝突の回避が理由。

- 警告メッセージ: `Deprecation Warning [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.`
- 参考: https://sass-lang.com/d/if-function

#### 書き換え方針

コンパイル時の値を分岐したい場合は `@if` / `@else` を使う。

```scss
// 非推奨
$suffix: if($type == "base", "", "-#{$type}");

// 推奨（@if / @else への書き換え）
$suffix: "";
@if $type != "base" {
  $suffix: "-#{$type}";
}
```

該当箇所: [core/_index.scss:28-31](../core/_index.scss#L28-L31)

## 開発フロー

### 他プロジェクトで開発中の syg-flocss6 を使う（yarn link）

本プロジェクトを他プロジェクトの `node_modules` にコピーして使うと、Vite のホットリロードが効かない。
`yarn link` を使うと symlink 経由になり、ファイル変更が即座に反映される。

#### 手順

```bash
# 1. 本プロジェクトでリンク登録
cd ＜syg-flocss6のフォルダ＞
yarn link

# 2. 利用先プロジェクトでリンク使用
cd /path/to/利用先プロジェクト
yarn link "@sygnas/syg-flocss6"
```

#### Vite 設定

**追加設定は不要**。利用先プロジェクトの `vite.config.*` は変更せず、`yarn link` のみでホットリロードが動作することを確認済み（2026-05-27）。

#### 解除

```bash
# 利用先プロジェクトで
yarn unlink "@sygnas/syg-flocss6"
yarn install --force   # node_modules を実体に戻す

# 本プロジェクトのグローバル登録を消す場合
yarn unlink
```

#### 確認方法

```bash
# 利用先プロジェクトで symlink になっているか確認
ls -la node_modules/@sygnas/syg-flocss6
# → @sygnas/syg-flocss6 -> ＜syg-flocss6のフォルダ＞ と表示されれば OK
```
