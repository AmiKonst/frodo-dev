import { _ as _export_sfc, x as useI18n, a as reactive, o as openBlock, c as createElementBlock, i as createBaseVNode, g as createVNode, B as unref, F as Fragment } from './index.be7f05cd.js';
import { E as EmptyLabel } from './EmptyLabel.3a7f292b.js';

const AccessDenied_vue_vue_type_style_index_0_scoped_277b3fba_lang = '';

const _sfc_main = {
  __name: 'AccessDenied',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.access-denied.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    _cache[0] || (_cache[0] = createBaseVNode("label", { class: "g-c hashtag" }, "#BilboMusic ", -1 /* HOISTED */)),
    createVNode(EmptyLabel, {
      class: "empty",
      title: unref(t)('pages.access-denied.title'),
      description: data.description
    }, null, 8 /* PROPS */, ["title", "description"])
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const AccessDenied = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-277b3fba"],['__file',"D:/bilbo/bilbo/src/pages/AccessDenied.vue"]]);

export { AccessDenied as default };
