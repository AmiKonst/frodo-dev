import { _ as _export_sfc, R as api, s as stores, a as reactive, o as openBlock, c as createElementBlock, d as createBlock, e as createCommentVNode, g as createVNode, F as Fragment } from './index.9a88f6c4.js';
import { D as Dictionary } from './Dictionary.86e95f25.js';
import { R as Ready } from './Ready.af370880.js';
import './Img.d57ddb60.js';
import './EmptyLabel.8703e75e.js';

const _sfc_main = {
  __name: 'Category',
  props: {
        code: { type: String }
    },
  setup(__props) {

    const dict = api.dict();
    stores.locale();


    const props = __props;

    const data = reactive({
        ready: false,
        type: null
    });

    const init = async () => {
        const types = await dict.getTypes();

        data.type = types.find(item => item.code === 'categories');
        data.ready = true;
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    (data.ready)
      ? (openBlock(), createBlock(Dictionary, {
          key: 0,
          code: props.code,
          type: data.type
        }, null, 8 /* PROPS */, ["code", "type"]))
      : createCommentVNode("v-if", true),
    createVNode(Ready, {
      page: "category",
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Category = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/bilbo/src/pages/Dictionaries/Category.vue"]]);

export { Category as default };
