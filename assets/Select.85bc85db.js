import { _ as _export_sfc, x as useI18n, r as ref, a as reactive, h as computed, k as onMounted, l as watch, m as resolveComponent, o as openBlock, c as createElementBlock, i as createBaseVNode, n as normalizeClass, t as toDisplayString, d as createBlock, e as createCommentVNode, w as withCtx, F as Fragment, q as renderList, M as ModalBox, f as withModifiers, I as IconButton, g as createVNode, b as renderSlot, B as unref, s as withDirectives, v as vShow } from './index.0f573481.js';

const Select_vue_vue_type_style_index_0_lang = '';

const _hoisted_1 = ["placeholder", "value"];
const _hoisted_2 = ["title"];
const _hoisted_3 = ["value", "onClick"];
const _hoisted_4 = { class: "actions-block" };
const _hoisted_5 = { class: "error" };


const _sfc_main = {
  __name: 'Select',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    name: { type: String, default: '' },
    value: { type: [Number, String, Boolean], default: null },
    position: { type: Number, default: 0 },
    optionList: {
        type: Array,
        default: () => []
    },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    useI18n: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true }
},
  emits: ['change'],
  setup(__props, { emit: __emit }) {

const { t } = useI18n();
const field = ref(null);

const props = __props;

const data = reactive({
    selected: null,
    isOpenDropdown: false
});

const valueTitle = computed(() => {
    const name = data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.name;

    return name && props.useI18n ? t(name) : name;
});

const valueIcon = computed(() =>
    data.selected === null ? '' : props.optionList.find((option) => option.code === data.selected)?.icon
);

const emit = __emit;

const clean = () => {
    field.value.value = '';
    data.selected = null;
    emit('change', {
        name: props.name,
        value: null,
        position: props.position
    });
};

const toggleOpened = () => {
    if (props.disabled) {
        return;
    }

    data.isOpenDropdown = !data.isOpenDropdown;

    if (!data.isOpenDropdown) {
        return false;
    }
};

onMounted(() => {
    data.selected = props.value;
});

watch(() => props.value, (value) => {
    if (value === null && data.selected) {
        data.selected = null;
        return;
    }

    data.selected = value;
});

const onChoose = (event, payload) => {
    data.selected = payload.code;
    data.isOpenDropdown = false;

    emit('change', {
        name: props.name,
        value: payload.code,
        position: props.position
    });
};

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass([
            valueIcon.value || props.icon ? 'with-icon' : '',
            props.isError ? 'with-error' : '',
            data.isOpenDropdown ? 'opened' : '',
            'select-field'
        ])
  }, [
    createBaseVNode("div", { onClick: toggleOpened }, [
      createBaseVNode("input", {
        ref_key: "field",
        ref: field,
        autocomplete: "off",
        placeholder: props.placeholder,
        value: valueTitle.value,
        class: normalizeClass({
                    'without-placeholder': !props.placeholder,
                    clearable: props.clearable && data.selected
                })
      }, null, 10 /* CLASS, PROPS */, _hoisted_1),
      createBaseVNode("span", {
        class: "placeholder",
        title: props.placeholder
      }, toDisplayString(props.placeholder), 9 /* TEXT, PROPS */, _hoisted_2),
      (valueIcon.value || props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: valueIcon.value || props.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      (data.isOpenDropdown)
        ? (openBlock(), createBlock(ModalBox, {
            key: 1,
            field: field.value,
            onClose: toggleOpened,
            onOnSwipeBottom: toggleOpened
          }, {
            default: withCtx(() => [
              createBaseVNode("ul", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(props.optionList, (option) => {
                  return (openBlock(), createElementBlock("li", {
                    value: option.code,
                    key: option.code,
                    onClick: withModifiers($event => (onChoose($event, option)), ["stop"]),
                    class: normalizeClass({ selected: data.selected === option.code })
                  }, [
                    renderSlot(_ctx.$slots, "default", { option: option }, () => [
                      (option.icon)
                        ? (openBlock(), createBlock(_component_Icon, {
                            key: 0,
                            icon: option.icon
                          }, null, 8 /* PROPS */, ["icon"]))
                        : createCommentVNode("v-if", true),
                      createBaseVNode("span", null, toDisplayString(props.useI18n ? unref(t)(option.name) : option.name), 1 /* TEXT */)
                    ]),
                    withDirectives(createVNode(_component_Icon, {
                      icon: "check",
                      class: "check"
                    }, null, 512 /* NEED_PATCH */), [
                      [vShow, data.selected === option.code]
                    ])
                  ], 10 /* CLASS, PROPS */, _hoisted_3))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]),
            _: 3 /* FORWARDED */
          }, 8 /* PROPS */, ["field"]))
        : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_4, [
        (props.clearable && data.selected)
          ? (openBlock(), createBlock(IconButton, {
              key: 0,
              tabindex: "-1",
              icon: "close",
              class: "tertiary size-s",
              onClick: withModifiers(clean, ["stop"])
            }))
          : createCommentVNode("v-if", true),
        createVNode(_component_Icon, {
          icon: "chevron-down",
          class: "arrow-down"
        })
      ])
    ]),
    createBaseVNode("span", _hoisted_5, toDisplayString(props.error), 1 /* TEXT */)
  ], 2 /* CLASS */))
}
}

};
const Select = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/bilbo/shared/components/ui/Select.vue"]]);

export { Select as S };
