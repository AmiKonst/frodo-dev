import { _ as _export_sfc, x as useI18n, D as stores, k as onMounted, Q as onBeforeUnmount, o as openBlock, c as createElementBlock, i as createBaseVNode, t as toDisplayString, B as unref, g as createVNode, F as Fragment } from './index.87ceb933.js';
import { R as Ready } from './Ready.a467c56a.js';
import { E as EmptyLabel } from './EmptyLabel.8a1877fd.js';

const Artists_vue_vue_type_style_index_0_scoped_c2eb6455_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };

    
const _sfc_main = {
  __name: 'Artists',
  setup(__props) {

    const { t } = useI18n();

    // import { storeToRefs } from 'pinia';
    stores.user();
    stores.nav();
    const tg = stores.tg();

    stores.others();
    // const { ready } = storeToRefs(others);

    onMounted(() => {
        tg.showBackButton();
    });

    onBeforeUnmount(() => {
        tg.hideBackButton();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
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
