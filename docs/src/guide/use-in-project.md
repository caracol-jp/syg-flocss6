# 設定やメソッドをプロジェクト用 CSS で使う

プロジェクト固有の CSS から `syg-flocss6` の設定値（`$config`）や `method/` の関数・mixin を呼び出す方法です。`syg-flocss6-import/` を `@use` することで利用できます。

---

## メディアクエリ

`method.mq($config, <key>)` で、`syg-flocss6-import/config/core/_media-query.scss` に定義したメディアクエリ条件文字列を取得できます。

```scss
@use "sass:map";
// プロジェクトに複製した syg-flocss6-import から @use する
@use "../syg-flocss6-import/config" as *;
@use "../syg-flocss6-import/method";

.foo {
  @media #{method.mq($config, pc)} {
    // PC 向けスタイル
  }
}
```

利用可能なキーは [Core（メディアクエリ）](/core/#メディアクエリ-media-query) を参照してください。

---

## メソッド一覧

`method/` には以下の関数・mixin が用意されています。

| メソッド | 種別 | 用途 |
| --- | --- | --- |
| `method.mq($config, $key)` | 関数 | メディアクエリ条件文字列を返す |
| `method.easing($config, $name)` | 関数 | `$easing` マップからイージング関数を取得 |
| `method.color-channel($color, $channel)` | 関数 | 色の指定チャンネル値を取得（`color.channel` のラッパ） |
| `method.font-family($config, $name)` | mixin | `font-family` / `font-weight` を出力 |
| `method.fukuro-text($color, $width, $steps)` | mixin | 袋文字を `text-shadow` で表現 |
| `method.fukuro-drop($color, $width, $strong)` | mixin | 袋文字を `filter: drop-shadow()` で表現 |

利用例：

```scss
@use "../syg-flocss6-import/config" as *;
@use "../syg-flocss6-import/method";

.foo {
  @include method.font-family($config, mincho);
  transition: opacity 0.3s method.easing($config, in-out-sine);
}
```

---

## コンポーネントの mixin を流用する

`object/component/` の各コンポーネントは `@mixin c-xxx($config)` の形で定義されており、別の class からも再利用できます。

例：WordPress 記事内の `<ul>` に、`c-list-ul` を付与せずデフォルトで同じスタイルを当てたい場合。

```scss
@use "sass:map";
@use "../../syg-flocss6-import/config" as *;
@use "../../syg-flocss6-import/method";
@use "../../../../node_modules/@sygnas/syg-flocss6/object/component/list-ul" as list-ul;

.c-wp-content {
  ul {
    // c-list-ul の mixin を呼び出す
    @include list-ul.list-ul-basic($config);
    @include list-ul.list-ul-li-basic($config);
  }
}
```

`node_modules/@sygnas/syg-flocss6/` への相対パスはプロジェクト構成に合わせて調整してください。
