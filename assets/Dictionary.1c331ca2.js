import { _ as _export_sfc, z as useI18n, S as api, s as stores, a as reactive, h as computed, l as onMounted, i as onBeforeUnmount, o as openBlock, c as createElementBlock, j as createBaseVNode, g as createVNode, u as toDisplayString, e as createCommentVNode, E as unref, H as Button } from './index.03e926d2.js';
import { I as Img } from './Img.075d92f8.js';
import { E as EmptyLabel } from './EmptyLabel.86a62113.js';

const Dictionary_vue_vue_type_style_index_0_scoped_db4e5d03_lang = '';

const _hoisted_1 = { class: "dictionary" };
const _hoisted_2 = { class: "welcome" };
const _hoisted_3 = { class: "wrapper" };
const _hoisted_4 = {
  key: 0,
  class: "title"
};
const _hoisted_5 = { class: "buttons" };

    
const _sfc_main = {
  __name: 'Dictionary',
  props: {
        code: { type: String },
        type: { type: Object }
    },
  setup(__props) {

    const { t } = useI18n();

    const dict = api.dict();
    const locale = stores.locale();
    const tg = stores.tg();

    const props = __props;

    const data = reactive({
        item: null
    });

    const title = computed(() => {
        return data.item?.title ? data.item?.title[locale.locale] || '' : '';
    });


    document.body.classList.add('with-tg-header');
    onMounted(async () => {
        tg.showBackButton();

        data.item = await dict[props.type.code].get(props.code, props.type.id);
        console.log(data.item);
    });

    onBeforeUnmount(() => {
        document.body.classList.remove('with-tg-header');
        tg.hideBackButton();
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(Img, {
        preview: data.item?.cover?.original,
        original: data.item?.cover?.original,
        alt: title.value,
        skeleton: true
      }, null, 8 /* PROPS */, ["preview", "original", "alt"]),
      createBaseVNode("div", _hoisted_3, [
        (title.value)
          ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(title.value), 1 /* TEXT */))
          : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_5, [
          createVNode(Button, {
            name: unref(t)('player.shuffle'),
            class: "tertiary active size-m",
            icon: "random"
          }, null, 8 /* PROPS */, ["name"]),
          createVNode(Button, {
            name: unref(t)('player.play'),
            class: "size-m",
            icon: "play"
          }, null, 8 /* PROPS */, ["name"])
        ])
      ])
    ]),
    createVNode(EmptyLabel, {
      class: "empty",
      title: unref(t)(`pages.dictionary.empty.title`),
      description: unref(t)(`pages.dictionary.empty.description`)
    }, null, 8 /* PROPS */, ["title", "description"])
  ]))
}
}

};
const Dictionary = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-db4e5d03"],['__file',"D:/bilbo/bilbo/src/pages/Dictionaries/components/Dictionary.vue"]]);

export { Dictionary as D };
