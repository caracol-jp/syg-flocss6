# Utility

`u-*` プレフィックスを持つ単機能クラス。1 クラス 1 プロパティが原則。

メディアクエリ接頭辞（`pc:` / `tb:` / `sp:`）でブレークポイントごとに切り替え可能なクラスもあります。

---

## 余白（margin / padding）

`u-mg_{方向}_{サイズ}` / `u-pd_{方向}_{サイズ}` 形式。方向は `t` / `b` / `r` / `l`、サイズは `s5`〜`l8`（`n` が標準）。

| クラス例 | 効果 |
| --- | --- |
| `u-mg_t_n` | margin-top に標準値 |
| `u-mg_b_l3` | margin-bottom にやや大きい値 |
| `u-mg_auto` | margin-inline: auto |
| `u-pd_t_s2` | padding-top に小さい値 |
| `pc:u-mg_b_l5` | PC のみ margin-bottom 適用 |

```html
<div class="u-mg_t_l3 u-pd_b_n">標準コンテンツ</div>
<p class="u-mg_b_n">段落の下に余白</p>
```

サイズは [Core の `$spacer`](/core/) で定義され、`pc` / `tb` / `sp` でメディアクエリ別に値を持ちます。

---

## 文字色 / 背景色（color / background-color）

`u-cl_{色名}` / `u-cl_{色名}-{type}` / `u-bc_{色名}` 形式。`type` は `light` / `dark`（`base` は省略）。

| クラス例 | 効果 |
| --- | --- |
| `u-cl_red` | color: var(--root-color_red) |
| `u-cl_red-light` | color: var(--root-color_red-light) |
| `u-bc_lightgray` | background-color: var(--root-color_lightgray) |

```html
<p class="u-cl_red">赤い文字</p>
<p class="u-cl_red-dark u-bc_lightgray">赤系（暗）+ 薄灰背景</p>
```

色は [Core の `$color`](/core/) で定義（`base` / `light` / `dark` の 3 段階）。

---

## フォントサイズ（font-size）

`u-ft-sz_{サイズ}`。サイズは `s5`〜`l7`、標準 `n`。

```html
<p class="u-ft-sz_l2">大きめの本文</p>
<p class="u-ft-sz_s2">注釈</p>
<p class="pc:u-ft-sz_l3 sp:u-ft-sz_l1">PC は大きく、SP では小さめ</p>
```

---

## フォントファミリー（font-family）

`u-ft-fml_{名前}`。`gothic` / `mincho` / `noto-sans-*` / `noto-serif-*` 等を Core で定義。

```html
<p class="u-ft-fml_gothic">ゴシック体</p>
<p class="u-ft-fml_mincho">明朝体</p>
<p class="u-ft-fml_noto-serif-bold">Noto Serif Bold</p>
```

---

## 行間 / 字間（line-height / letter-spacing）

| クラス例 | 効果 |
| --- | --- |
| `u-lh_n` | 標準行間 |
| `u-lh_s2` | 詰める |
| `u-lh_l3` | 広げる |
| `u-ls_n` | 標準字間 |
| `u-ls_l1` | やや広い字間 |

---

## 表示制御（display）

| クラス | 効果 |
| --- | --- |
| `u-dsp_bk` | display: block |
| `u-dsp_ib` | display: inline-block |
| `u-dsp_il` | display: inline |
| `u-dsp_none` | display: none |

メディアクエリ接頭辞付き（例: `sp:u-dsp_none`）で「SP では非表示」のような切替が可能。

```html
<p class="pc:u-dsp_bk sp:u-dsp_none">PC のみ表示</p>
<p class="pc:u-dsp_none sp:u-dsp_bk">SP のみ表示</p>
```

---

## テキスト配置（text-align）

| クラス | 効果 |
| --- | --- |
| `u-txt_left` | text-align: left |
| `u-txt_center` | text-align: center |
| `u-txt_right` | text-align: right |
| `u-txt_justify` | text-align: justify（両端揃え） |
| `u-txt_dash` | 長音棒・ダーシ用の伸ばし表現 |

---

## 幅指定（width / max-width / min-width）

`u-w_{値}` / `u-max_{値}` / `u-min_{値}`。`%` は末尾 `p`、px は数字のみ（例: `100p` = 100%、`600` = 600px）。

| クラス例 | 効果 |
| --- | --- |
| `u-w_100p` | width: 100% |
| `u-w_50p` | width: 50% |
| `u-max_600` | max-width: 600px |
| `u-min_300` | min-width: min(300px, 100%) |

---

## 改行制御（word-break）

| クラス | 効果 |
| --- | --- |
| `u-wb_keep-all` | word-break: keep-all（CJK で英単語を分割しない） |
| `u-wb_break-all` | word-break: break-all（どこでも改行） |

---

## 画像レンダリング（image-rendering）

| クラス | 効果 |
| --- | --- |
| `u-ir_contrast` | -webkit-optimize-contrast |
| `u-ir_auto` | auto |
| `u-ir_pixel` | pixelated（ドット絵向け） |
