# @sygnas/syg-flocss6

[FLOCSS](https://github.com/hiloki/flocss) ベースの CSS フレームワーク。
CSS カスタムプロパティで運用しやすく、Sass で書きやすい設計を目指しています。

## 特徴

- **CSS カスタムプロパティ**で色・フォントサイズ・スペーサーを管理（エディタ補完が効く）
- **コア + 派生の二層構成**：フレームワーク本体は構造のみ、プロジェクト固有のカスタマイズは派生側に集約
- **メディアクエリ接頭辞**：`pc:` / `tb:` / `sp:` で簡潔にレスポンシブ指定

## インストール

```bash
yarn add -D @sygnas/syg-flocss6
```

## ドキュメント

ドキュメント全体は VitePress でビルドされます。

```bash
yarn docs:dev      # ローカルサーバ起動
yarn docs:build    # 静的サイト書き出し（docs/dist/）
yarn docs:preview  # ビルド結果のプレビュー
```

導入方法・使用例は [ドキュメントサイト](docs/src/guide/getting-started.md) を参照してください。

## ライセンス

MIT
