import { _ as _export_sfc, s as stores, P as storeToRefs, h as computed, o as openBlock, c as createElementBlock, j as createBaseVNode, q as resolveComponent, d as createBlock, e as createCommentVNode } from './index.f8c26b5f.js';

const _hoisted_1$1 = ["width", "height"];
const _hoisted_2$1 = ["src"];


const _sfc_main$1 = {
  __name: 'AnimateIcon',
  props: {
    icon: { type: String, default: '' },
    size: { type: [Array, null], default: () => ['128', '128'] }
},
  setup(__props) {

const others = stores.others();
const { animateSvgSpritePath } = storeToRefs(others);

const props = __props;

const src = computed(() => `${ animateSvgSpritePath.value }/${props.icon}.mp4`);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("video", {
    width: props.size[0],
    height: props.size[1],
    preload: "none",
    autoplay: "autoplay",
    loop: "true",
    muted: "muted",
    playsinline: ""
  }, [
    createBaseVNode("source", {
      src: src.value,
      type: "video/mp4"
    }, null, 8 /* PROPS */, _hoisted_2$1)
  ], 8 /* PROPS */, _hoisted_1$1))
}
}

};
const AnimateIcon = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__file',"D:/bilbo/bilbo/shared/components/ui/AnimateIcon.vue"]]);

const EmptyLabel_vue_vue_type_style_index_0_scoped_31e5be11_lang = '';

const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];

const _sfc_main = {
  __name: 'EmptyLabel',
  props: {
    icon: { type: String, default: '' },
    animateIcon: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
},
  setup(__props) {

const props = __props;

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", null, [
    (props.animateIcon)
      ? (openBlock(), createBlock(AnimateIcon, {
          key: 0,
          icon: props.animateIcon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    (props.icon)
      ? (openBlock(), createBlock(_component_Icon, {
          key: 1,
          icon: props.icon
        }, null, 8 /* PROPS */, ["icon"]))
      : createCommentVNode("v-if", true),
    (props.title)
      ? (openBlock(), createElementBlock("span", {
          key: 2,
          innerHTML: props.title
        }, null, 8 /* PROPS */, _hoisted_1))
      : createCommentVNode("v-if", true),
    (props.description)
      ? (openBlock(), createElementBlock("span", {
          key: 3,
          class: "description",
          innerHTML: props.description
        }, null, 8 /* PROPS */, _hoisted_2))
      : createCommentVNode("v-if", true)
  ]))
}
}

};
const EmptyLabel = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-31e5be11"],['__file',"D:/bilbo/bilbo/shared/components/ui/EmptyLabel.vue"]]);

export { EmptyLabel as E };
