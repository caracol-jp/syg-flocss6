# Core（CSS 変数）

`:root` に CSS カスタムプロパティとして出力される基本設定値。各種ユーティリティ・コンポーネントから `var(--root-xxx)` として参照されます。

設定値の定義は `syg-flocss6-import/config/core/` 配下にあります。プロジェクト固有の値はそこを編集します。

---

## 色（color）

`$color` マップで定義。`base` / `light` / `dark` の 3 段階を持ち、それぞれ CSS 変数として出力されます。

| CSS 変数 | 説明 |
| --- | --- |
| `--root-color_red` | base 値 |
| `--root-color_red-light` | light 値 |
| `--root-color_red-dark` | dark 値 |
| `--root-rgb_red` | base 値の RGB（カンマ区切り、`rgba()` で透過指定に使う） |
| `--root-rgb_red-light` | light 値の RGB |
| `--root-color_link` | リンク色（`a` 要素の foundation で参照） |
| `--root-color_link-hover` | ホバー時のリンク色 |

定義例（[`syg-flocss6-import/config/core/_color.scss`](https://github.com/) より）：

```scss
$color: (
  red: (
    base: #d50707,
    light: color.scale(#d50707, $lightness: 20%),
    dark: color.scale(#d50707, $lightness: -10%),
  ),
  // ...
);
```

利用例：

```css
.foo {
  color: var(--root-color_red);
  background: rgba(var(--root-rgb_red), 0.2);
}
```

---

## フォントサイズ（font-size）

`$font-size` マップで定義。`pc` / `tb` / `sp` 3 つのブレークポイント別に値を持ちます。

サイズキーは `s5`〜`s1`（小さい順）→ `n`（標準）→ `l1`〜`l7`（大きい順）。

| CSS 変数 | 説明 |
| --- | --- |
| `--root-font-size_n` | 標準サイズ（メディアクエリで自動切替） |
| `--root-font-size_l3` | 大きめ |
| `--root-font-size_s2` | 注釈サイズ |

`html` 要素の `font-size` 自体もメディアクエリで `clamp()` / `vw` 値が設定されているため、`rem` ベースで自然にスケールします。

---

## スペーサー（spacer）

`$spacer` マップで定義。`s5`〜`l8` のサイズキーで余白値を持ちます。

| CSS 変数 | 説明 |
| --- | --- |
| `--root-spacer_n` | 標準余白（1rem） |
| `--root-spacer_l3` | 大きめの余白 |
| `--root-spacer_s2` | 小さめの余白 |

`u-mg_t_l3`、`u-pd_b_s2` などのユーティリティから参照されます。

---

## メディアクエリ（media-query）

`$media-query` で 5 種、`$media-prefix` で 3 種を定義。

| キー | 用途 |
| --- | --- |
| `pc` | min-width: 768px / landscape / print |
| `tb` | portrait, 550〜850px |
| `tb-lo` | portrait, max-width: 850px |
| `sp-up` | min-width: 550px |
| `sp` | portrait, max-width: 550px |

`$media-prefix: (pc, tb, sp)` のキーが、`pc:u-mg_t_n` のようなクラス接頭辞生成に使われます。

利用例：

```scss
@use "../method";

.foo {
  @media #{method.mq($config, pc)} {
    // PC 向け
  }
}
```

---

## フォントファミリー（font-family）

`$font-family` マップで `family` と `weight` をセットで定義。`@include method.font-family($config, gothic)` で展開されます。

```scss
$font-family: (
  gothic: ( family: 'YakuHanJP, Arial, ...' ),
  mincho: ( family: 'YakuHanMP, "Times New Roman", ...' ),
  noto-sans-bold: (
    family: 'YakuHanJP, "Noto Sans JP", sans-serif',
    weight: 700,
  ),
  // ...
);
```

利用例（ユーティリティ）：

```html
<p class="u-ft-fml_mincho">明朝体で表示</p>
```

---

## その他の設定

| キー | 用途 |
| --- | --- |
| `$base` | 全体背景色 / 文字色 / 行間 / 字間 / 基本フォント |
| `$line-height` | 行間倍率（`--root-line-height_n` 等） |
| `$letter-spacing` | 字間（`--root-letter-spacing_n` 等） |
| `$easing` | イージング関数（`in-out-sine` 等） |
| `$z-index` | レイヤー順序 |
| `$width` / `$max` / `$min` | 幅指定値 |
| `$form` | フォーム関連の調整値 |
