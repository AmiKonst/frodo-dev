import { _ as _export_sfc, r as ref, h as computed, o as openBlock, c as createElementBlock, e as createCommentVNode, n as normalizeClass, j as createBaseVNode, b as renderSlot, D as createTextVNode, u as toDisplayString, F as Fragment } from './index.f8c26b5f.js';

const Img_vue_vue_type_style_index_0_scoped_eaa0f8c6_lang = '';

const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = ["src", "alt"];
const _hoisted_3 = ["src", "alt"];


const _sfc_main = {
  __name: 'Img',
  props: {
    preview: { type: String, default: '' },
    original: { type: String, default: '' },
    alt: { type: String, default: '' },
    wathermark: { type: [String, null], default: null },
    skeleton: { type: Boolean, default: false }
},
  emits: ['load', 'error'],
  setup(__props, { emit: __emit }) {

const props = __props;

const emit = __emit;

const isLoaded = ref(false);

function handleLoad(e) {
    isLoaded.value = true;
    emit('load', e);
}

function handleError(e) {
    isLoaded.value = true;
    emit('error', e);
}

const src = computed(() => {
    return `${props.preview?.indexOf('http') === -1 ? "https://api.wetap-tech-service.ru" : ''}${props.preview}`;
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    createCommentVNode(" watermark "),
    (props.wathermark)
      ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["wathermark", props.wathermark])
        }, [
          createBaseVNode("img", {
            src: src.value,
            alt: props.alt,
            onLoad: handleLoad,
            onError: handleError
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1),
          _cache[0] || (_cache[0] = createBaseVNode("span", null, null, -1 /* HOISTED */)),
          createBaseVNode("label", null, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(props.alt), 1 /* TEXT */)
            ], true)
          ])
        ], 2 /* CLASS */))
      : (props.skeleton)
        ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createCommentVNode(" skeleton "),
            createBaseVNode("div", {
              class: normalizeClass(["skeleton-wrapper", { loaded: isLoaded.value }])
            }, [
              createBaseVNode("img", {
                src: src.value,
                alt: props.alt,
                onLoad: handleLoad,
                onError: handleError
              }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2)
            ], 2 /* CLASS */)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createCommentVNode(" обычное изображение "),
            createBaseVNode("img", {
              src: src.value,
              alt: props.alt,
              onLoad: handleLoad,
              onError: handleError
            }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_3)
          ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}
}

};
const Img = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-eaa0f8c6"],['__file',"D:/bilbo/bilbo/shared/components/ui/Img.vue"]]);

export { Img as I };
