import { _ as _export_sfc, z as useI18n, s as stores, l as onMounted, i as onBeforeUnmount, o as openBlock, c as createElementBlock, j as createBaseVNode, u as toDisplayString, E as unref, g as createVNode, F as Fragment } from './index.f8c26b5f.js';
import { R as Ready } from './Ready.5652172b.js';
import { E as EmptyLabel } from './EmptyLabel.3e87a4c5.js';

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
