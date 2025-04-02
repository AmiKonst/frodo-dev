import { _ as _export_sfc, x as useI18n, a as reactive, o as openBlock, d as createBlock, B as unref } from './index.883a354d.js';
import { E as EmptyLabel } from './EmptyLabel.3dd3478f.js';

const _sfc_main = {
  __name: 'Error',
  setup(__props) {

    const { t, tm, rt } = useI18n();

    const description = tm('pages.error.descriptions').map(item => rt(item));

    const data = reactive({
        description: description[Math.min(parseInt(Math.random() * description.length), description.length - 1)] 
    });

return (_ctx, _cache) => {
  return (openBlock(), createBlock(EmptyLabel, {
    title: unref(t)('pages.error.title'),
    description: data.description
  }, null, 8 /* PROPS */, ["title", "description"]))
}
}

};
const Error = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/job/bilbo/src/pages/Error.vue"]]);

export { Error as default };
