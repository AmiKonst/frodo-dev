import { _ as _export_sfc, x as useI18n, D as stores, k as onMounted, Q as onBeforeUnmount, o as openBlock, c as createElementBlock, i as createBaseVNode, t as toDisplayString, B as unref, g as createVNode, F as Fragment } from './index.8e8e679b.js';
import { R as Ready } from './Ready.79dc40f8.js';
import { E as EmptyLabel } from './EmptyLabel.c817ea0a.js';

const Playlists_vue_vue_type_style_index_0_scoped_04c5d775_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };

    
const _sfc_main = {
  __name: 'Playlists',
  setup(__props) {

    const { t } = useI18n();

    // import { storeToRefs } from 'pinia';
    stores.user();
    stores.nav();
    const tg = stores.tg();

    stores.others();

    onMounted(() => {
        tg.showBackButton();
    });

    onBeforeUnmount(() => {
        tg.hideBackButton();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
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
