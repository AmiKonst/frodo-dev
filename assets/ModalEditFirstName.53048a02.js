import { _ as _export_sfc, D as stores, r as ref, x as useI18n, a as reactive, k as onMounted, o as openBlock, d as createBlock, w as withCtx, A as createTextVNode, t as toDisplayString, B as unref, g as createVNode, i as createBaseVNode, G as Button, V as BaseModal } from './index.883a354d.js';
import { F as Field } from './Field.f7bb5275.js';

const ModalEditFirstName_vue_vue_type_style_index_0_lang = '';

const ModalEditFirstName_vue_vue_type_style_index_1_scoped_8ee9a572_lang = '';

const _hoisted_1 = { class: "buttons" };

const _sfc_main = {
  __name: 'ModalEditFirstName',
  props: {
    name: {
        type: String,
        default: 'edit-firstname'
    }
},
  setup(__props) {

const modals = stores.modals();
const user = stores.user();

const field = ref(null);

const { t } = useI18n();

const data = reactive({
    firstName: user.profile?.firstName,
    loading: true
});

const props = __props;

const onFieldChange = ({ target }) => {
    data.firstName = target.value?.trim();
};

const save = async () => {
    if (data.firstName?.trim().length < 2) {
        return;
    }

    data.loading = true;

    await user.updateFirstName(data.firstName.trim());

    setTimeout(() => {
        modals.open('success', {
            data: {
                title: t('modals.edit-firstname.done.title'),
                description: t('modals.edit-firstname.done.description'),
                close: t('modals.edit-firstname.done.close')
            },
            quietClose: true
        });

        modals.close(props.name);
    }, 200);
};

onMounted(async () => {
    data.loading = false;

    if (field.value?.field?.focus) {
        field.value.field.focus();
    }
});


return (_ctx, _cache) => {
  return (openBlock(), createBlock(BaseModal, {
    isLoading: data.loading,
    name: props.name,
    mobileMode: true,
    closeOutside: true,
    class: "modal-edit-firstname"
  }, {
    title: withCtx(() => [
      createTextVNode(toDisplayString(unref(t)('modals.edit-firstname.title')), 1 /* TEXT */)
    ]),
    content: withCtx(() => [
      createVNode(Field, {
        ref_key: "field",
        ref: field,
        name: "firstname",
        class: "light inside noerror",
        value: data.firstName,
        onChange: onFieldChange
      }, null, 8 /* PROPS */, ["value"]),
      createBaseVNode("div", _hoisted_1, [
        createVNode(Button, {
          onClick: save,
          disabled: data.firstName?.trim().length < 2,
          class: "size-m",
          name: unref(t)('modals.edit-firstname.save')
        }, null, 8 /* PROPS */, ["disabled", "name"])
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["isLoading", "name"]))
}
}

};
const ModalEditFirstName = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-8ee9a572"],['__file',"D:/job/bilbo/src/pages/Settings/modals/ModalEditFirstName.vue"]]);

export { ModalEditFirstName as default };
