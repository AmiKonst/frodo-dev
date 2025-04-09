import { _ as _export_sfc, x as useI18n, D as stores, k as onMounted, Q as onBeforeUnmount, o as openBlock, c as createElementBlock, i as createBaseVNode, t as toDisplayString, B as unref, g as createVNode, I as IconButton, G as Button, F as Fragment } from './index.c836fabb.js';
import { E as EmptyLabel } from './EmptyLabel.bd701813.js';
import { R as Ready } from './Ready.4e02c554.js';

const Favorite_vue_vue_type_style_index_0_scoped_a46f63b4_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "more" };
const _hoisted_4 = { class: "title" };

    
const _sfc_main = {
  __name: 'Favorite',
  setup(__props) {

    const { t } = useI18n();

    // import { storeToRefs } from 'pinia';
    stores.user();
    const nav = stores.nav();
    const tg = stores.tg();

    stores.others();

    onMounted(() => {
        tg.showSettingsButton();
    });

    onBeforeUnmount(() => {
        tg.hideSettingsButton();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.favorite.title')), 1 /* TEXT */),
      createVNode(IconButton, {
        icon: "settings",
        class: "tertiary size-l",
        onClick: _cache[0] || (_cache[0] = $event => (unref(nav).open('settings')))
      })
    ]),
    createVNode(EmptyLabel, {
      "animate-icon": "tracks",
      title: unref(t)('pages.favorite.tracks.empty.title'),
      description: unref(t)('pages.favorite.tracks.empty.description')
    }, null, 8 /* PROPS */, ["title", "description"]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("label", _hoisted_4, toDisplayString(unref(t)('pages.favorite.more.title')), 1 /* TEXT */),
      createBaseVNode("div", null, [
        createVNode(Button, {
          icon: "playlist",
          name: unref(t)('pages.favorite.playlists.title'),
          class: "tap",
          onClick: _cache[1] || (_cache[1] = $event => (unref(nav).open('favorite-playlists')))
        }, null, 8 /* PROPS */, ["name"]),
        createVNode(Button, {
          icon: "artists",
          name: unref(t)('pages.favorite.artists.title'),
          class: "tap",
          onClick: _cache[2] || (_cache[2] = $event => (unref(nav).open('favorite-artists')))
        }, null, 8 /* PROPS */, ["name"])
      ])
    ]),
    createVNode(Ready, { page: "favorite" })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Favorite = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-a46f63b4"],['__file',"D:/bilbo/bilbo/src/pages/Favorite/Favorite.vue"]]);

export { Favorite as default };
