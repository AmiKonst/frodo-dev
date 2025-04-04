import { _ as _export_sfc, x as useI18n, D as stores, o as openBlock, c as createElementBlock, i as createBaseVNode, g as createVNode, B as unref, I as IconButton, t as toDisplayString, F as Fragment } from './index.a381150d.js';
import { R as Ready } from './Ready.37ff22fe.js';
import { E as EmptyLabel } from './EmptyLabel.a559ca6e.js';

const Playlists_vue_vue_type_style_index_0_scoped_04c5d775_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };

    
const _sfc_main = {
  __name: 'Playlists',
  setup(__props) {

    const { t } = useI18n();

    // import { storeToRefs } from 'pinia';
    stores.user();
    const nav = stores.nav();

    stores.others();
    // const { ready } = storeToRefs(others);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(IconButton, {
        icon: "chevron-left",
        class: "tertiary size-l",
        onClick: _cache[0] || (_cache[0] = $event => (unref(nav).back()))
      }),
      createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.favorite-playlists.title')), 1 /* TEXT */)
    ]),
    createVNode(EmptyLabel, {
      class: "empty-label",
      "animate-icon": "playlists",
      title: unref(t)('pages.favorite-playlists.empty.title'),
      description: unref(t)('pages.favorite-playlists.empty.description')
    }, null, 8 /* PROPS */, ["title", "description"]),
    createVNode(Ready, { page: "favorite-playlists" })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Playlists = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-04c5d775"],['__file',"D:/bilbo/bilbo/src/pages/Favorite/Playlists/Playlists.vue"]]);

export { Playlists as default };
