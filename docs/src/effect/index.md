# Effect

`e-*` プレフィックスを持つエフェクトクラス。要素の見た目に動きや装飾を付与します。

コア側（`object/effect/`）はほぼ空で、定義の実体は派生（`syg-flocss6-import/config/effect/`）に置きます。プロジェクトごとに必要なエフェクトを足し引きしやすい構成です。

---

## ホバー（`.e-hover_*`）

`:hover` / `:active` / `:focus` で発火する変化。

| クラス | 効果 |
| --- | --- |
| `e-hover_z-index` | z-index: 1（前面化） |
| `e-hover_fade` | opacity: 0.6 |
| `e-hover_zoom` | transform: scale(1.05) |
| `e-hover_shadow` | box-shadow を追加 |

```html
<a href="#" class="e-hover_zoom">ホバーで拡大</a>
<img src="..." class="e-hover_fade" alt="">
```

---

## シャドウ（`.e-shadow_*`）

要素に常時影を付与。

| クラス | 効果 |
| --- | --- |
| `e-shadow_thumb` | サムネ用ソフトシャドウ（hover でさらに濃く） |

---

## スクロールイン（`.e-iv--*`）

要素が画面に入ったときに `data-inview="true"` 属性が付くことで発火するアニメーション。
JavaScript 側で IntersectionObserver 等を使い、要素または親に `data-inview="true"` を付与して使います。

| クラス | 効果 |
| --- | --- |
| `e-iv--fade` | フェードイン |
| `e-iv--to-up` | 下から上へ移動しつつフェード |
| `e-iv--header` | ヘッダー用（PC のみ、上から降りてくる） |
| `e-iv--visual` | ビジュアル用（ズームアウトしつつフェード） |
| `e-iv--clip-to-down` | 上から下へ clip-path で展開 |
| `e-iv--clip-to-right` | 左から右へ clip-path で展開 |

```html
<div data-inview="true">
  <p class="e-iv--fade">フェードイン</p>
  <p class="e-iv--to-up">下から上へ</p>
</div>
```

ディレイは `$iv.delay` マップ（`2`/`4`/`6`/`8`/`10`）で定義され、対応するクラスがコア側で生成されます。

---

## SP メニュー（`.e-spmenu`）

スマホ用のスライドメニュー。`syg-flocss6-import/config/effect/spmenu/` 配下に詳細な状態（開閉、線の動き等）を定義。

```html
<nav class="e-spmenu" data-state="closed">
  <!-- メニュー内容 -->
</nav>
```

---

## ビュー切替トランジション（`.e-v-transition`）

ページ遷移や表示切替時のアニメーション。Vue / 任意のフレームワークの `<Transition>` 等と組み合わせて使用。

---

## カスタマイズ

エフェクトは派生ファイル（`syg-flocss6-import/config/effect/_xxx.scss`）に直接 Sass で記述します。コア側に追加実装は基本的に不要です。

```scss
// syg-flocss6-import/config/effect/_hover.scss
@mixin e-hover($config) {
  // 既存のクラス...

  // 新しく追加
  .e-hover_glow {
    transition: 0.3s;
    &:hover,
    &:active,
    &:focus {
      box-shadow: 0 0 20px rgba(255, 200, 0, 0.6);
    }
  }
}
```
