import { _ as _export_sfc, x as useI18n, D as stores, o as openBlock, c as createElementBlock, A as createTextVNode, g as createVNode, F as Fragment } from './index.01ad843e.js';
import { R as Ready } from './Ready.1bc64e79.js';

const _sfc_main = {
  __name: 'Music',
  setup(__props) {

    useI18n();

    // import { storeToRefs } from 'pinia';
    stores.user();

    stores.others();


    const init = async () => {
        console.log('init');
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock(Fragment, null, [
    _cache[1] || (_cache[1] = createTextVNode(" Music page ")),
    createVNode(Ready, {
      page: "music",
      onReady: _cache[0] || (_cache[0] = () => {}),
      init: init
    })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Music = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/job/bilbo/src/pages/Music/Music.vue"]]);

export { Music as default };
