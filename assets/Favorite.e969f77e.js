import { _ as _export_sfc, h as computed, o as openBlock, c as createElementBlock, F as Fragment, t as renderList, d as createBlock, n as normalizeClass, k as normalizeStyle, e as createCommentVNode, z as useI18n, s as stores, a as reactive, l as onMounted, i as onBeforeUnmount, j as createBaseVNode, u as toDisplayString, E as unref, g as createVNode, I as IconButton, H as Button, w as withCtx, S as api } from './index.03e926d2.js';
import { E as EmptyLabel } from './EmptyLabel.86a62113.js';
import { I as Img } from './Img.075d92f8.js';
import { R as Ready } from './Ready.2324e011.js';

const Collage_vue_vue_type_style_index_0_scoped_c67f96ea_lang = '';

const _sfc_main$1 = {
  __name: 'Collage',
  props: {
        items: { type: Array, default: () => [] },
        default: { type: [Object, null], default: null },
        gap: { type: String, default: '2px' },
        borderRadius: { type: String, default: '8px' },
        maxPreviewCount: { type: [Number, null], default: 8 },
        animationType: {
            type: String,
            default: 'none',
            validator: val => ['none', 'breath', 'float', 'tilt', 'pulse'].includes(val)
        }
    },
  setup(__props) {

    const props = __props;

    const itemsToRender = computed(() => {
        return props.maxPreviewCount !== null
            ? props.items.slice(0, props.maxPreviewCount)
            : props.items;
    });

    const animationClass = computed(() => {
        return props.animationType !== 'none' ? `img-anim-${props.animationType}` : '';
    });

    function cornerClass(count, pos) {
        const cornersMap = {
            1: { 1: 'corner-all' },
            2: { 1: 'corner-left', 2: 'corner-right' },
            3: { 1: 'corner-top-left', 2: 'corner-top-right', 3: 'corner-bottom' },
            4: {
                1: 'corner-top-left',
                2: 'corner-top-right',
                3: 'corner-bottom-left',
                4: 'corner-bottom-right'
            },
            5: { 1: 'corner-top-left', 2: 'corner-top-right', 5: 'corner-bottom' },
            6: { 1: 'corner-top-left', 3: 'corner-top-right', 4: 'corner-bottom-left', 6: 'corner-bottom-right' },
            7: { 1: 'corner-top-left', 3: 'corner-top-right', 4: 'corner-bottom-left', 6: 'corner-bottom-right' },
            8: { 1: 'corner-top-left', 4: 'corner-top-right', 5: 'corner-bottom-left', 8: 'corner-bottom-right' }
        };

        return (cornersMap[count] && cornersMap[count][pos]) || '';
    }

return (_ctx, _cache) => {
  return (itemsToRender.value.length)
    ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "collage",
        style: normalizeStyle({
            '--gap': props.gap,
            '--border-radius': props.borderRadius
        })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(itemsToRender.value, (item, index) => {
          return (openBlock(), createBlock(Img, {
            key: index,
            class: normalizeClass(["collage-item", [
                    `layout-${itemsToRender.value.length}-${index + 1}`,
                    cornerClass(itemsToRender.value.length, index + 1),
                    animationClass.value
                ]]),
            skeleton: true,
            preview: item?.resized || props.default?.resized,
            original: item?.original || props.default?.original,
            alt: item?.alt || ''
          }, null, 8 /* PROPS */, ["class", "preview", "original", "alt"]))
        }), 128 /* KEYED_FRAGMENT */))
      ], 4 /* STYLE */))
    : createCommentVNode("v-if", true)
}
}

};
const Collage = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-c67f96ea"],['__file',"D:/bilbo/bilbo/shared/components/ui/Collage.vue"]]);

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


    const data = reactive({
        myArtistsPreview: []
    });

    const defaultProfileImage = computed(() => {
        return api.artists().defaultProfileImage;
    });

    const init = async () => {
        const payload = await api.user().getMyArtistsPreview();

        data.myArtistsPreview = payload?.items || [];
    };

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
        }, null, 8 /* PROPS */, ["name"]),
        (data.myArtistsPreview?.length)
          ? (openBlock(), createBlock(Button, {
              key: 0,
              name: unref(t)('pages.favorite.my-artists.title'),
              class: "tap",
              onClick: _cache[3] || (_cache[3] = $event => (unref(nav).open('favorite-my-artists')))
            }, {
              collage: withCtx(() => [
                createVNode(Collage, {
                  items: data.myArtistsPreview.map(item => item.profileImage),
                  default: defaultProfileImage.value,
                  borderRadius: "12px"
                }, null, 8 /* PROPS */, ["items", "default"])
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["name"]))
          : createCommentVNode("v-if", true)
      ])
    ]),
    createVNode(Ready, {
      page: "favorite",
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Favorite = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-a46f63b4"],['__file',"D:/bilbo/bilbo/src/pages/Favorite/Favorite.vue"]]);

export { Favorite as default };
