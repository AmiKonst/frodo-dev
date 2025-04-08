import { _ as _export_sfc, x as useI18n, D as stores, o as openBlock, c as createElementBlock, i as createBaseVNode, g as createVNode, B as unref, I as IconButton, t as toDisplayString, F as Fragment } from './index.9216b4f7.js';
import { R as Ready } from './Ready.98172907.js';
import { E as EmptyLabel } from './EmptyLabel.2d38c8c4.js';

const Artists_vue_vue_type_style_index_0_scoped_c2eb6455_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };

    
const _sfc_main = {
  __name: 'Artists',
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
      createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.favorite-artists.title')), 1 /* TEXT */)
    ]),
    createVNode(EmptyLabel, {
      class: "empty-label",
      "animate-icon": "artists",
      title: unref(t)('pages.favorite-artists.empty.title'),
      description: unref(t)('pages.favorite-artists.empty.description')
    }, null, 8 /* PROPS */, ["title", "description"]),
    createVNode(Ready, { page: "favorite-artists" })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Artists = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c2eb6455"],['__file',"D:/bilbo/bilbo/src/pages/Favorite/Artists/Artists.vue"]]);

export { Artists as default };
