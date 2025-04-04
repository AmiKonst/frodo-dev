import { _ as _export_sfc, D as stores, P as storeToRefs, l as watch } from './index.a381150d.js';

const _sfc_main = {
  __name: 'Ready',
  props: {
    page: { type: String, default: '' },
    init: { type: Function, default: async () => {} }
},
  emits: ['ready'],
  setup(__props, { emit: __emit }) {

const nav = stores.nav();
const others = stores.others();

const { ready } = storeToRefs(others);

const props = __props;

const emit = __emit;

const onReady = async () => {
    if (props.init) {
        await props.init();
    }

    if (props.page === nav.page) {
        emit('ready');
    }

    nav.ready(props.page);
};

if (ready.value) {
    onReady();
}

watch(
    () => ready.value,
    async () => {
        if (ready.value) {
            onReady();
        }
    }
);

return (_ctx, _cache) => {
  return null
}
}

};
const Ready = /*#__PURE__*/_export_sfc(_sfc_main, [['__file',"D:/bilbo/bilbo/shared/components/ui/Ready.vue"]]);

export { Ready as R };
