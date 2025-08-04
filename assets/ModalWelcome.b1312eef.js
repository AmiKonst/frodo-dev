import { _ as _export_sfc, h as computed, o as openBlock, c as createElementBlock, F as Fragment, t as renderList, n as normalizeClass, s as stores, P as storeToRefs, z as useI18n, a as reactive, Q as resolveDirective, d as createBlock, w as withCtx, v as withDirectives, k as normalizeStyle, E as unref, W as baseUrl, j as createBaseVNode, u as toDisplayString, e as createCommentVNode, D as createTextVNode, g as createVNode, H as Button, f as withModifiers, X as BaseModal } from './index.9a88f6c4.js';

const Steps_vue_vue_type_style_index_0_scoped_8135f9bc_lang = '';

const _sfc_main$1 = {
  __name: 'Steps',
  props: {
        total: { type: Number, default: 1 },
        value: { type: Number, default: 1 }
    },
  setup(__props) {

    const props = __props;

    const items = computed(() => {
        return Array(props.total);
    });

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("ul", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, id) => {
      return (openBlock(), createElementBlock("li", {
        class: normalizeClass({ active: id + 1 === props.value })
      }, null, 2 /* CLASS */))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}
}

};
const Steps = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__scopeId',"data-v-8135f9bc"],['__file',"D:/bilbo/bilbo/shared/components/ui/Steps.vue"]]);

const ModalWelcome_vue_vue_type_style_index_0_scoped_45bd4f14_lang = '';

const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { class: "description" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "description" };
const _hoisted_5 = {
  key: 1,
  class: "enter-box"
};


const _sfc_main = {
  __name: 'ModalWelcome',
  setup(__props) {

const others = stores.others();
const tg = stores.tg();
const { theme } = storeToRefs(others);

const modals = stores.modals();


const { t, tm, rt } = useI18n();

const slides = Array.isArray(tm('modals.welcome.slides')) ? tm('modals.welcome.slides').map(item => ({
    code: rt(item.code),
    title: rt(item.title),
    description: rt(item.description)
})) : [];

const data = reactive({
    slides: [slides[0]]
});

const id = computed(() => {
    return slides.findIndex(item => item.code === data.slides[data.slides.length - 1].code);
});

const next = () => {
    let nextId = id.value;

    if (nextId === -1) {
        return;
    }

    nextId += 1;
    if (nextId > slides.length - 1) {
        nextId = 0;
    }

    data.slides.push(slides[nextId]);
};

const prev = () => {
    let nextId = id.value;

    if (nextId === -1) {
        return;
    }

    nextId -= 1;
    if (nextId < 0) {
        nextId = slides.length - 1;
    }

    data.slides.push(slides[nextId]);
};

const close = () => {
    localStorage.welcome = true;

    modals.close('welcome');
};

return (_ctx, _cache) => {
  const _directive_touch = resolveDirective("touch");

  return (openBlock(), createBlock(BaseModal, {
    name: "loader",
    full: true
  }, {
    content: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("div", {
        class: "welcome-box",
        onClick: next
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.slides, (item, itemId) => {
          return (openBlock(), createElementBlock("div", {
            key: itemId,
            style: normalizeStyle({
                        'background-image': `url(${unref(baseUrl)}/themes/${unref(theme)}/welcome/${item.code}.jpg)`,
                        'background-color': 'var(--white-500)'
                    })
          }, [
            createBaseVNode("label", {
              class: "title",
              innerHTML: item.title
            }, null, 8 /* PROPS */, _hoisted_1),
            createBaseVNode("div", _hoisted_2, toDisplayString(item.description), 1 /* TEXT */)
          ], 4 /* STYLE */))
        }), 128 /* KEYED_FRAGMENT */)),
        createBaseVNode("div", null, [
          createBaseVNode("label", {
            class: "title",
            innerHTML: data.slides[data.slides.length - 1].title
          }, null, 8 /* PROPS */, _hoisted_3),
          createBaseVNode("div", _hoisted_4, toDisplayString(data.slides[data.slides.length - 1].description), 1 /* TEXT */),
          (id.value !== unref(slides).length - 1)
            ? (openBlock(), createBlock(Steps, {
                key: 0,
                total: 3,
                value: id.value + 1
              }, null, 8 /* PROPS */, ["value"]))
            : createCommentVNode("v-if", true),
          createCommentVNode("  <Button\r\n                        icon=\"chevron-right\"\r\n                        @click=\"next\"\r\n                    /> "),
          (id.value === unref(slides).length - 1)
            ? (openBlock(), createElementBlock("div", _hoisted_5, [
                createBaseVNode("div", null, [
                  createBaseVNode("span", null, [
                    createTextVNode(toDisplayString(unref(t)('modals.welcome.terms')) + " ", 1 /* TEXT */),
                    createVNode(Button, {
                      name: unref(t)('modals.welcome.terms-button'),
                      class: "tertiary size-s",
                      onClick: _cache[0] || (_cache[0] = withModifiers($event => (unref(tg).openLink({
                                        'external_url': 'https://github.com/Bilbo-Music/bilbo-docs-public/blob/main/terms%20of%20service/Bilbo%20Music.md'
                                    })), ["stop"]))
                    }, null, 8 /* PROPS */, ["name"]),
                    createTextVNode(" " + toDisplayString(unref(t)('modals.welcome.terms-2')), 1 /* TEXT */)
                  ])
                ]),
                createVNode(Button, {
                  name: unref(t)('modals.welcome.close'),
                  onClick: close
                }, null, 8 /* PROPS */, ["name"])
              ]))
            : createCommentVNode("v-if", true)
        ])
      ])), [
        [
          _directive_touch,
          next,
          "swipe",
          { left: true }
        ],
        [
          _directive_touch,
          prev,
          "swipe",
          { right: true }
        ]
      ])
    ]),
    _: 1 /* STABLE */
  }))
}
}

};
const ModalWelcome = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-45bd4f14"],['__file',"D:/bilbo/bilbo/src/components/modals/ModalWelcome.vue"]]);

export { ModalWelcome as default };
