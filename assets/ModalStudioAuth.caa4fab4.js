import { _ as _export_sfc, a as reactive, r as ref, l as watch, k as onMounted, o as openBlock, c as createElementBlock, F as Fragment, q as renderList, D as stores, x as useI18n, d as createBlock, w as withCtx, A as createTextVNode, t as toDisplayString, B as unref, i as createBaseVNode, g as createVNode, G as Button, V as BaseModal, K as message } from './index.4819bc0b.js';

const Code_vue_vue_type_style_index_0_scoped_2f15865d_lang = '';

const _hoisted_1$1 = { class: "code-inputs" };
const _hoisted_2 = ["onInput", "onFocus", "onKeydown"];
    
const _sfc_main$1 = {
  __name: 'Code',
  props: {
        count: { type: Number, default: 6 }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const props = __props;

    const data = reactive({
        values: ref(Array(props.count).fill('')),
        inputs: {}
    });

    const emit = __emit;

    const onInput = (e, id) => {
        if (/^[0-9]$/.test(e.target.value)) {
            data.values[id] = +e.target.value;
            nextInput(id);
        } else {
            data.values[id] = '';
        }
    };

    const focusInput = (id) => {
        if (data.inputs[id]) {
            data.inputs[id].focus();
        }
    };

    const nextInput = (id) => {
        if (id + 1 < props.count) {
            focusInput(id + 1);
        }
    };

    const onKeydown = (id, event) => {
        if (event.key === 'Backspace' && !data.values[id] && id > 0) {
            data.values[id - 1] = '';
            focusInput(id - 1);
        }
    };

    watch(data.values, (newValues) => {
        if (data.values.every(item => /^[0-9]$/.test(item))) {
            emit('change', data.values.join(''));
        } else {
            emit('change', null);
        }
    });

    onMounted(() => {
        focusInput(0);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(data.values, (digit, id) => {
      return (openBlock(), createElementBlock("input", {
        key: id,
        ref_for: true,
        ref: el => data.inputs[id] = el,
        placeholder: " ",
        type: "text",
        maxlength: "1",
        onInput: $event => (onInput($event, id)),
        onFocus: $event => (focusInput(id)),
        onKeydown: $event => (onKeydown(id, $event))
      }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}
}

};
const Code = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-2f15865d"],['__file',"D:/bilbo/bilbo/shared/components/ui/Code.vue"]]);

const ModalStudioAuth_vue_vue_type_style_index_0_lang = '';

const ModalStudioAuth_vue_vue_type_style_index_1_scoped_a11c296c_lang = '';

const _hoisted_1 = ["innerHTML"];

const _sfc_main = {
  __name: 'ModalStudioAuth',
  props: {
    name: {
        type: String,
        default: 'sudio-auth'
    }
},
  setup(__props) {

const modals = stores.modals();
const user = stores.user();

const { t } = useI18n();

const data = reactive({
    once: false,
    loading: false,
    code: ''
});

const props = __props;

const setCode = (code) => {
    data.code = code;

    if (data.code && !data.once) {
        data.once = true;
        verify();
    }
};

const verify = async () => {
    data.loading = true;

    const payload = await user.externalLogin(data.code);

    if (!payload) {
        setTimeout(() => {
            message.info(t('modals.studio-auth.fail.title'));
            data.loading = false;
        }, 500);
        return;
    }

    setTimeout(() => {
        modals.open('success', {
            data: {
                title: t('modals.studio-auth.done.title'),
                description: t('modals.studio-auth.done.description'),
                close: t('modals.studio-auth.done.close')
            },
            quietClose: true
        });

        modals.close(props.name);
    }, 1000);
};

onMounted(async () => {
    data.loading = false;
});

return (_ctx, _cache) => {
  return (openBlock(), createBlock(BaseModal, {
    isLoading: data.loading,
    name: props.name,
    mobileMode: true,
    closeOutside: true,
    class: "modal-studio-auth"
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(unref(t)('modals.studio-auth.title')), 1 /* TEXT */)
    ]),
    content: withCtx(() => [
      createBaseVNode("span", {
        class: "description",
        innerHTML: unref(t)('modals.studio-auth.description')
      }, null, 8 /* PROPS */, _hoisted_1),
      createVNode(Code, { onChange: setCode }),
      createVNode(Button, {
        onClick: verify,
        disabled: !data.code,
        class: "size-l",
        name: unref(t)('modals.studio-auth.verify')
      }, null, 8 /* PROPS */, ["disabled", "name"])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["isLoading", "name"]))
}
}

};
const ModalStudioAuth = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-a11c296c"],['__file',"D:/bilbo/bilbo/src/pages/Settings/modals/ModalStudioAuth.vue"]]);

export { ModalStudioAuth as default };
