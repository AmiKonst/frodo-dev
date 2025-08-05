import { _ as _export_sfc, S as api, s as stores, a as reactive, o as openBlock, c as createElementBlock, d as createBlock, e as createCommentVNode, g as createVNode, F as Fragment } from './index.03e926d2.js';
import { D as Dictionary } from './Dictionary.1c331ca2.js';
import { R as Ready } from './Ready.2324e011.js';
import './Img.075d92f8.js';
import './EmptyLabel.86a62113.js';

const _sfc_main = {
  __name: 'Genre',
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

        data.type = types.find(item => item.code === 'genres');
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
      page: "mood",
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Genre = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/bilbo/src/pages/Dictionaries/Genre.vue"]]);

export { Genre as default };
