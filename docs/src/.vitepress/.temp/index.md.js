import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"syg-flocss6","text":"FLOCSS ベースの CSS フレームワーク","tagline":"CSS カスタムプロパティで運用しやすく、Sass で書きやすく","actions":[{"theme":"brand","text":"はじめに","link":"/guide/getting-started"},{"theme":"alt","text":"コンポーネント一覧","link":"/component/"}]},"features":[{"title":"FLOCSS ベース","details":"Foundation / Layout / Object（Component・Effect・Utility）の構成を継承"},{"title":"CSS カスタムプロパティ","details":"色・フォントサイズ・スペーサーなどを CSS 変数として出力。エディタ補完が効く"},{"title":"コア + 派生の二層構成","details":"フレームワーク本体は構造のみ、プロジェクト固有のカスタマイズは派生側に集約"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
