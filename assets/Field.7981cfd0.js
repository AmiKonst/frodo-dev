import { _ as _export_sfc, x as useI18n, r as ref, a as reactive, k as onMounted, m as resolveComponent, N as resolveDirective, o as openBlock, c as createElementBlock, i as createBaseVNode, s as withDirectives, B as unref, O as maskTime, n as normalizeClass, z as withKeys, t as toDisplayString, d as createBlock, e as createCommentVNode, I as IconButton } from './index.be7f05cd.js';

const Field_vue_vue_type_style_index_0_scoped_c964e307_lang = '';

const _hoisted_1 = ["type", "name", "min", "max", "maxlength", "disabled", "placeholder", "autocomplete", "readonly"];
const _hoisted_2 = ["title"];
const _hoisted_3 = { class: "actions-block" };
const _hoisted_4 = { class: "error" };


const _sfc_main = {
  __name: 'Field',
  props: {
    isError: { type: Boolean, default: false },
    icon: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    name: { type: [String, Number], default: '' },
    id: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    type: { type: String, default: 'text' },
    maxlength: { type: [Number, null], default: null },
    max: { type: Number, default: null },
    min: { type: Number, default: null },
    disabled: { type: Boolean, default: false },
    error: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
    readonly: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    info: { type: [String, Boolean], default: false }
},
  emits: ['change', 'pressEnter'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

useI18n();

const field = ref(null);

const data = reactive({
    type: props.type
});

const emit = __emit;

__expose({ field });

const showPassword = () => {
    data.type = 'text';
};

const hidePassword = () => {
    data.type = 'password';
};

const clean = () => {
    field.value.value = '';
    setTimeout(() => {
        onInput({ target: field.value });
        field.value.focus();
    });
};

onMounted(() => {
    if (props.value !== null) {
        field.value.value = props.value;
    }
});

const onPressEnter = (evn) => {
    onInput(evn);
    emit('pressEnter');
};

const onInput = (evn) => {
    if (!evn?.target) {
        return;
    }

    if (['.', ',', '-'].includes(evn.data)) {
        if (!evn.target.value) {
            emit('change', evn);
        }
        return;
    }

    let value = evn.target.value.trimStart();

    if (value) {
        if (typeof props.min === 'number') {
            if (parseFloat(value, 10) < props.min || Number.isNaN(parseInt(value, 10))) {
                value = props.min;
            }
        }

        if (typeof props.max === 'number') {
            if (parseFloat(value, 10) > props.max) {
                value = props.max;
            }
        }

        if (props.type === 'time' && value?.length >= 2) {
            if (+value[0] > 1 && +value[1] > 3) {
                value = value[0] + '3';
            }
        }
    } else {
        value = '';
    }

    evn.target.value = value;

    setTimeout(() => {
        if (evn.target && evn.target.value !== value) {
            evn.target.value = value;
        }
    });

    emit('change', evn);
};

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");
  const _directive_mask = resolveDirective("mask");

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["field", [
        props.icon ? 'with-icon' : '',
        props.isError || props.error ? 'with-error' : ''
    ]])
  }, [
    createBaseVNode("div", null, [
      withDirectives(createBaseVNode("input", {
        class: normalizeClass({
                    'without-placeholder': !props.placeholder,
                    clearable: props.clearable && !props.readonly,
                    info: !!props.info
                }),
        ref_key: "field",
        ref: field,
        type: data.type === 'time' ? 'text' : data.type,
        name: props.name,
        min: props.min,
        max: props.max,
        maxlength: props.maxlength,
        disabled: props.disabled,
        placeholder: props.placeholder,
        autocomplete: __props.autocomplete,
        readonly: props.readonly,
        onInput: onInput,
        onKeyup: withKeys(onPressEnter, ["enter"])
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1), [
        [_directive_mask, data.type === 'time' ? unref(maskTime) : null]
      ]),
      createBaseVNode("span", {
        class: "placeholder",
        title: props.placeholder
      }, toDisplayString(props.placeholder), 9 /* TEXT, PROPS */, _hoisted_2),
      (props.icon)
        ? (openBlock(), createBlock(_component_Icon, {
            key: 0,
            icon: props.icon
          }, null, 8 /* PROPS */, ["icon"]))
        : createCommentVNode("v-if", true),
      createBaseVNode("div", _hoisted_3, [
        (props.type === 'password' && data.type === 'password')
          ? (openBlock(), createBlock(IconButton, {
              key: 0,
              tabindex: "-1",
              icon: "eye-closed",
              class: "tertiary size-s",
              onClick: showPassword
            }))
          : (props.type === 'password' && data.type === 'text')
            ? (openBlock(), createBlock(IconButton, {
                key: 1,
                tabindex: "-1",
                icon: "eye-opened",
                class: "tertiary size-s",
                onClick: hidePassword
              }))
            : (props.clearable && !props.readonly)
              ? (openBlock(), createBlock(IconButton, {
                  key: 2,
                  tabindex: "-1",
                  icon: "close",
                  class: "tertiary size-s clean",
                  onClick: clean
                }))
              : createCommentVNode("v-if", true),
        (props.info)
          ? (openBlock(), createBlock(_component_Icon, {
              key: 3,
              icon: "help",
              class: "icon-info",
              title: props.info
            }, null, 8 /* PROPS */, ["title"]))
          : createCommentVNode("v-if", true)
      ])
    ]),
    createBaseVNode("span", _hoisted_4, toDisplayString(props.error), 1 /* TEXT */)
  ], 2 /* CLASS */))
}
}

};
const Field = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-c964e307"],['__file',"D:/bilbo/bilbo/shared/components/ui/Field.vue"]]);

export { Field as F };
