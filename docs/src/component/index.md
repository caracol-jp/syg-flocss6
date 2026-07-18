# Component

`c-*` プレフィックスを持つ再利用可能な部品。コア（構造）と派生（CSS カスタムプロパティ + プロジェクト固有スタイル）の二層構成です。

::: tip 二層構成について
- **コア** (`object/component/_xxx.scss`): 全プロジェクト共通の構造（display, position 等）と `var(--c-xxx)` 参照
- **派生** (`syg-flocss6-import/config/component/_xxx.scss`): CSS カスタムプロパティのデフォルト値、プロジェクト固有モディファイ

派生側を編集することで、コアに手を入れずにプロジェクトごとのカスタマイズが可能です。
:::

---

## ボタン（`.c-btn`）

```html
<a href="#" class="c-btn">通常ボタン</a>
<a href="#" class="c-btn c-btn--bg-black">黒背景ボタン</a>
<a href="#" class="c-btn c-btn--next">次へ →</a>
<a href="#" class="c-btn c-btn--prev">← 戻る</a>
<a href="#" class="c-btn c-btn--pad_l2 c-btn--min_300">大きいボタン</a>
<button class="c-btn" disabled="disabled">無効</button>
```

| モディファイ | 効果 |
| --- | --- |
| `c-btn--bg-black` | 黒背景 |
| `c-btn--next` / `c-btn--prev` | 矢印アイコン付き |
| `c-btn--pad_s1` / `c-btn--pad_l1` / `c-btn--pad_l2` | 余白サイズ |
| `c-btn--min_200` / `c-btn--min_300` | 最小幅 |

---

## バッジ（`.c-badge`）

ラベル風の小さい表示。

```html
<span class="c-badge">NEW</span>
```

---

## 通知・注意書き（`.c-notice`）

```html
<p class="c-notice">※注釈テキスト</p>
```

---

## アコーディオン（`.c-accordion`）

簡易アコーディオン：
```html
<details class="c-accordion">
  <summary>クリックで開閉</summary>
  <div>中身</div>
</details>
```

アニメーション付きアコーディオン：
```html
<section class="c-accordion u-mg_t_n js-is-open">
  <div class="c-accordion__summary js-is-open-button">出演者へのプレゼント・お花について</div>
  <div class="c-accordion__content">
    <div class="c-accordion__body">内容</div>
  </div>
</section>
```

> アニメーション付きは javascript で `.js-is-open` に対して `setAttribute('data-is-open', now === 'true' ? 'false' : 'true');` をすることで開閉を実現。

---

## ハンバーガーメニュー（`.c-hamburger`）

```html
<button class="c-hamburger" aria-label="メニュー">
  <span></span>
  <span></span>
  <span></span>
</button>
```

`syg-flocss6-import/config/component/_hamburger.scss` で線の本数（`line.count`）等をコンパイル時に指定。

---

## リスト系（`.c-list-ul` / `.c-list-ol` / `.c-list-dl`）

```html
<ul class="c-list-ul">
  <li>箇条書き 1</li>
  <li>箇条書き 2</li>
</ul>

<ol class="c-list-ol">
  <li>順序付き 1</li>
  <li>順序付き 2</li>
</ol>

<dl class="c-list-dl">
  <dt>用語</dt>
  <dd>説明</dd>
</dl>
```

---

## テーブル（`.c-table`）

```html
<table class="c-table">
  <thead><tr><th>項目</th><th>値</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>1</td></tr>
    <tr><td>B</td><td>2</td></tr>
  </tbody>
</table>
```

---

## フレーム / テキストボックス（`.c-frame` / `.c-txt-box`）

枠線付きコンテナ・テキスト囲み。

```html
<div class="c-frame">
  <p>枠で囲まれた領域</p>
</div>

<div class="c-txt-box">
  <p>テキストボックス</p>
</div>
```

---

## キャプション（`.c-caption`）

画像や動画のキャプション表示。

```html
<figure>
  <img src="..." alt="">
  <figcaption class="c-caption">画像のキャプション</figcaption>
</figure>
```

---

## 動画埋め込み（`.c-embed`）

YouTube / Vimeo 等の iframe をアスペクト比を保ったまま表示。

```html
<div class="c-embed">
  <iframe src="https://www.youtube.com/embed/..." allowfullscreen></iframe>
</div>
```

---

## 背景画像（`.c-bgimg`）

要素に背景画像をフルカバーで適用。

```html
<div class="c-bgimg" style="background-image: url(...)"></div>
```

---

## アイコン系

| クラス | 用途 |
| --- | --- |
| `c-movie-icon` | 動画再生アイコン |
| `c-share-btn` | SNS シェアボタン |
| `c-sound-btn` | 音声 ON/OFF ボタン |
| `c-return-up` | ページトップへ戻る |

---

## その他

| クラス | 用途 |
| --- | --- |
| `c-banners` | バナー一覧 |
| `c-article-visual` | 記事のビジュアル領域 |
| `c-loading` | ローディング表示 |
| `c-ruby` | ふりがな |
| `c-rule-line` | 罫線 |
| `c-form` | フォーム要素のラッパ |
| `c-fancybox` | Fancybox（ライトボックスライブラリ）対応 |
