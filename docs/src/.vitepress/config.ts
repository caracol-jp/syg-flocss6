import { defineConfig } from "vitepress";

// VitePress 設定
export default defineConfig({
  lang: "ja-JP",
  title: "syg-flocss6",
  description: "FLOCSS ベースの CSS フレームワーク",
  outDir: "../dist",
  cleanUrls: true,

  // 全ページに syg-flocss6 のスタイルを読み込む
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  themeConfig: {
    nav: [
      { text: "ガイド", link: "/guide/getting-started" },
      { text: "コンポーネント", link: "/component/" },
    ],

    sidebar: [
      {
        text: "ガイド",
        items: [
          { text: "はじめに", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Core（CSS 変数）",
        items: [
          { text: "概要", link: "/core/" },
        ],
      },
      {
        text: "Foundation",
        items: [
          { text: "概要", link: "/foundation/" },
        ],
      },
      {
        text: "Layout",
        items: [
          { text: "概要", link: "/layout/" },
        ],
      },
      {
        text: "Component",
        items: [
          { text: "概要", link: "/component/" },
        ],
      },
      {
        text: "Effect",
        items: [
          { text: "概要", link: "/effect/" },
        ],
      },
      {
        text: "Utility",
        items: [
          { text: "概要", link: "/utility/" },
        ],
      },
    ],

    docFooter: {
      prev: "前のページ",
      next: "次のページ",
    },

    outline: {
      label: "目次",
    },

    darkModeSwitchLabel: "ダークモード",
    sidebarMenuLabel: "メニュー",
    returnToTopLabel: "トップへ戻る",
    lastUpdatedText: "最終更新",
  },
});
