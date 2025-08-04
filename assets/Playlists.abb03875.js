import { _ as _export_sfc, z as useI18n, s as stores, l as onMounted, i as onBeforeUnmount, o as openBlock, c as createElementBlock, j as createBaseVNode, u as toDisplayString, E as unref, g as createVNode, F as Fragment } from './index.9a88f6c4.js';
import { R as Ready } from './Ready.af370880.js';
import { E as EmptyLabel } from './EmptyLabel.8703e75e.js';

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
