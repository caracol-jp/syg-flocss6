# Layout

`l-*` プレフィックスを持つレイアウトクラス。複数要素を整列するための仕組みを提供します。

---

## コンテンツ枠（`.l-content_*`）

ページの最大幅・左右パディングをメディアクエリ別に設定します。`syg-flocss6-import/config/layout/_content.scss` で値を定義。

```html
<div class="pc:l-content_w_n sp:l-content_p_n">
  <p>本文。PC では width 制限、SP では左右 padding。</p>
</div>
```

| クラス例 | 効果 |
| --- | --- |
| `pc:l-content_w_n` | PC で width 標準値 |
| `sp:l-content_p_n` | SP で左右 padding 標準値 |
| `l-content_max_n` | max-width 標準値 |

---

## カラム（`.l-clm`）

CSS の `column-count` を使った段組み。

```html
<div class="l-clm pc:l-clm--3 sp:l-clm--2">
  <p>段組みされる本文...</p>
</div>
```

| クラス | 効果 |
| --- | --- |
| `l-clm` | 段組みコンテナ |
| `l-clm--2` 〜 `l-clm--N` | 分割数（`syg-flocss6-import/config/layout/_clm.scss` の `devide` で上限指定） |

---

## Flexbox（`.l-fx`）

<div class="c-frame u-bc_white">
  <div class="l-fx l-fx--wrap l-gap-x_n l-gap-y_n l-jst-c_end">
    <div class="l-fx__item_3-1 u-bc_gray">3-1</div>
    <div class="l-fx__item_3-2 u-bc_gray">3-2</div>
    <div class="l-fx__item_2-1 u-bc_gray">2-1</div>
  </div>

  <div class="l-fx l-fx--wrap l-gap-x_n l-gap-y_n l-jst-c_center u-mg_t_n">
    <div class="l-fx__item_2-1 u-bc_gray">2-1</div>
  </div>
</div>


```html
<div class="l-fx l-fx--wrap l-gap-x_n l-gap-y_n l-jst-c_end">
  <div class="l-fx__item_3-1 u-bc_gray">3-1</div>
  <div class="l-fx__item_3-2 u-bc_gray">3-2</div>
  <div class="l-fx__item_2-1 u-bc_gray">2-1</div>
</div>

<div class="l-fx l-fx--wrap l-gap-x_n l-gap-y_n l-jst-c_center u-mg_t_n">
  <div class="l-fx__item_2-1 u-bc_gray">2-1</div>
</div>
```

| クラス | 効果 |
| --- | --- |
| `l-fx` | display: flex（wrap あり） |
| `l-fx--nowrap` | 改行しない（SP では改行） |
| `l-fx--dir_row` / `l-fx--dir_col` | 並び方向（メディアクエリ可：`sp:l-fx--dir_col`） |
| `l-fx__item_{分割}-{占有}` | セル幅（例: `l-fx__item_4-1` = 4 分割中 1 つ） |
| `l-fx__item_auto` | flex: 1 1 0%（残り全部） |

---

## Grid（`.l-grid`）

<div class="c-frame u-bc_white">
  <div class="l-grid l-grid--3 l-gap-x_n l-gap-y_n">
    <div class="u-bc_gray">セル</div>
    <div class="u-bc_gray l-grid__span_2">span_2</div>
    <div class="u-bc_gray">セル</div>
    <div class="u-bc_gray">セル</div>
    <div class="u-bc_gray">セル</div>
  </div>

  <div class="l-grid l-grid--4 l-gap-x_n l-gap-y_n u-mg_t_n">
    <div class="u-bc_gray l-grid__start_2">start_2</div>
    <div class="u-bc_gray l-grid__span_2">span_2</div>
  </div>
</div>


```html
<div class="l-grid l-grid--3 l-gap-x_n l-gap-y_n">
  <div>セル</div>
  <div class="l-grid__span_2">span_2</div>
  <div>セル</div>
  <div>セル</div>
  <div>セル</div>
</div>

<div class="l-grid l-grid--4 l-gap-x_n l-gap-y_n">
  <div class="l-grid__start_2">start_2</div>
  <div class="l-grid__span_2">span_2</div>
</div>
```

| クラス | 効果 |
| --- | --- |
| `l-grid` | display: grid（1fr × 分割数） |
| `l-grid--N` | N 分割（メディアクエリ可：`pc:l-grid--3`） |
| `l-grid__span_N` | N 列分の幅を持つセル |
| `l-grid__start_N` | N 列目から開始 |

---

## Gap（`.l-gap-x_*` / `.l-gap-y_*`）

`l-fx` / `l-grid` のセル間隔を [Core の `$spacer`](/core/) サイズで指定。

```html
<div class="l-fx l-gap-x_l1 l-gap-y_n">
  <!-- 子要素 -->
</div>
```

---

## 整列（justify-content / align-items）

| クラス | 効果 |
| --- | --- |
| `l-jst-c_start` / `l-jst-c_center` / `l-jst-c_end` | justify-content（行方向の寄せ） |
| `l-jst-c_between` / `l-jst-c_around` | space-between / around |
| `l-alg-i_start` / `l-alg-i_center` / `l-alg-i_end` / `l-alg-i_stretch` | align-items（交差方向の寄せ） |
| `l-jst-s_*` / `l-alg-s_*` | justify-self / align-self（セル個別） |

メディアクエリ接頭辞対応。例: `sp:l-jst-c_center`。

---

## 並び順（`.l-order_N`）

```html
<div class="l-fx">
  <div class="sp:l-order_2">通常 1 番目（SP では 2 番目）</div>
  <div class="sp:l-order_1">通常 2 番目（SP では 1 番目）</div>
</div>
```

`syg-flocss6-import/config/layout/_order.scss` の `start` / `last` で範囲を指定。

---

## その他

| クラス | 効果 |
| --- | --- |
| `l-body-fit` | body 全幅にフィット |
| `l-visual-data_*` | ビジュアルとデータを並置するレイアウト |
