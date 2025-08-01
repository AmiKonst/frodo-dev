import { _ as _export_sfc, z as useI18n, r as ref, a as reactive, l as onMounted, O as IMask, q as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, n as normalizeClass, C as withKeys, u as toDisplayString, d as createBlock, e as createCommentVNode, I as IconButton } from './index.ef20c9e0.js';

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
    value: { type: [String, Number, Object], default: '' },
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
    info: { type: [String, Boolean], default: false },
    mask: { type: [Object, null], default: null },
    autofocus: { type: [String, Boolean], default: false }
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

__expose({ field, data });

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
    if (field.value && props.mask) {
        data.maskInstance = IMask(field.value, props.mask);

        data.maskInstance.on('accept', () => {
            emit('change', { target: data.maskInstance });
        });

        if (props.value !== null) {
            if (props.mask.format) {
                data.maskInstance.value = props.mask.format(props.value);
            }
            data.maskInstance.typedValue = props.value;
        }

    } else {
        if (props.value !== null) {
            field.value.value = props.value;
        }
    }

    if (props.autofocus) {
        field.value.focus();
    }
});

const onPressEnter = (evn) => {
    onInput(evn);
    emit('pressEnter');
};

const onBlur = (evn) => {
    let value = evn.target.value.trimStart();

    if (value) {
        if (typeof props.min === 'number') {
            if (parseFloat(value, 10) < props.min || Number.isNaN(parseInt(value, 10))) {
                value = props.min;

                setTimeout(() => {
                    if (evn.target && evn.target.value !== value) {
                        evn.target.value = value;
                    }

                    emit('change', evn);
                });
            }
        }
    }
};

const onInput = (evn) => {
    if (!evn?.target || props.mask) {
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
        if (typeof props.min === 'number') ;

        if (typeof props.max === 'number') {
            if (parseFloat(value, 10) > props.max) {
                value = props.max;
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

  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["field", [
        props.icon ? 'with-icon' : '',
        props.isError || props.error ? 'with-error' : ''
    ]])
  }, [
    createBaseVNode("div", null, [
      createBaseVNode("input", {
        class: normalizeClass({
                    'without-placeholder': !props.placeholder,
                    clearable: props.clearable && !props.readonly,
                    info: !!props.info
                }),
        ref_key: "field",
        ref: field,
        type: data.type === 'time' || props.mask ? 'text' : data.type,
        name: props.name,
        min: props.min,
        max: props.max,
        maxlength: props.maxlength,
        disabled: props.disabled,
        placeholder: props.placeholder,
        autocomplete: __props.autocomplete,
        readonly: props.readonly,
        onInput: onInput,
        onBlur: onBlur,
        onKeyup: withKeys(onPressEnter, ["enter"])
      }, null, 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1),
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
