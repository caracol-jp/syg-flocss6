# Foundation

素のタグ（`html` / `body` / `a` / `h*` / `img` / `input` 等）への基本スタイル。FLOCSS の Foundation レイヤーに相当します。

リセットや書体・余白などの「土台」だけを設定し、デザインは Layout / Object 側で組み立てます。

---

## 適用される要素

| 要素 | 内容 |
| --- | --- |
| `html` | フォントサイズをメディアクエリ別に設定（PC: clamp、TB/SP: vw 値） |
| `body` | `--root-background-color` / `--root-font-color` / 行間・字間・フォントファミリーを適用 |
| `a` | `--root-color_link` / hover 時 `--root-color_link-hover`、`transition: 0.2s` |
| `h1`〜`h6` | `line-height: 1.4` |
| `img` | `max-width: 100%` 等の基本リセット |
| `input` / `select` / `label` | フォーム系の最小限スタイル |
| `p` | 段落の基本余白 |
| `strong` | 太字強調 |

---

## 適用例

```html
<a href="#">リンクテキスト</a>
<h1>大見出し</h1>
<h2>中見出し</h2>
<p>本文。<strong>強調</strong>はこのように表示されます。</p>
```

<a href="#">リンクテキスト</a>

<h1>大見出し</h1>
<h2>中見出し</h2>
<p>本文。<strong>強調</strong>はこのように表示されます。</p>

---

## カスタマイズ

Foundation のスタイルは `var(--root-xxx)` を介して値を参照しています。値を変えたい場合は [Core の設定ファイル](/core/)（`syg-flocss6-import/config/core/`）を編集します。

例：リンク色を変える

```scss
// syg-flocss6-import/config/core/_color.scss
$color: map.set($color, link, base, #0066cc);
$color: map.set($color, link-hover, base, #003366);
```
