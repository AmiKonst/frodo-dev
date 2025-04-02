import { _ as _export_sfc, x as useI18n, D as stores, m as resolveComponent, o as openBlock, c as createElementBlock, i as createBaseVNode, g as createVNode, t as toDisplayString, B as unref, n as normalizeClass, H as createStaticVNode, h as computed, r as ref, I as IconButton, K as message, a as reactive, d as createBlock, e as createCommentVNode, Q as defineAsyncComponent, R as onBeforeUnmount, E as Toggler, F as Fragment, S as __vitePreload } from './index.05e6a95f.js';
import { R as Ready } from './Ready.060ad2f1.js';
import { S as Select } from './Select.6967bfbd.js';

const Theme_vue_vue_type_style_index_0_scoped_ef1ff130_lang = '';

const _sfc_main$6 = {
  __name: 'Theme',
  setup(__props) {

    const { t } = useI18n();
    const settings = stores.settings();

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock("ul", null, [
    createBaseVNode("li", {
      class: normalizeClass({ active: !unref(settings).theme }),
      onClick: _cache[0] || (_cache[0] = $event => (unref(settings).setTheme()))
    }, [
      createVNode(_component_Icon, { icon: "telegram" }),
      createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.theme.telegram')), 1 /* TEXT */)
    ], 2 /* CLASS */),
    createBaseVNode("li", {
      class: normalizeClass({ active: unref(settings).theme === 'light' }),
      onClick: _cache[1] || (_cache[1] = $event => (unref(settings).setTheme('light')))
    }, [
      _cache[3] || (_cache[3] = createStaticVNode("<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 30 30\" data-v-ef1ff130><defs data-v-ef1ff130><filter x=\"5px\" y=\"5px\" width=\"30px\" height=\"30px\" filterUnits=\"userSpaceOnUse\" id=\"filter58\" data-v-ef1ff130><feOffset dx=\"0\" dy=\"0\" in=\"SourceAlpha\" result=\"shadowOffsetInner\" data-v-ef1ff130></feOffset><feGaussianBlur stdDeviation=\"2.5\" in=\"shadowOffsetInner\" result=\"shadowGaussian\" data-v-ef1ff130></feGaussianBlur><feComposite in2=\"shadowGaussian\" operator=\"atop\" in=\"SourceAlpha\" result=\"shadowComposite\" data-v-ef1ff130></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1  0 0 0 0 0.631372549019608  0 0 0 0 0  0 0 0 0.976470588235294 0  \" in=\"shadowComposite\" data-v-ef1ff130></feColorMatrix></filter><g id=\"widget59\" data-v-ef1ff130><path d=\"M 20 10  C 25.6 10  30 14.4  30 20  C 30 25.6  25.6 30  20 30  C 14.4 30  10 25.6  10 20  C 10 14.4  14.4 10  20 10  Z \" fill-rule=\"nonzero\" fill=\"#f59a23\" stroke=\"none\" data-v-ef1ff130></path></g></defs><g transform=\"matrix(1 0 0 1 -5 -5 )\" data-v-ef1ff130><use xlink:href=\"#widget59\" filter=\"url(#filter58)\" data-v-ef1ff130></use><use xlink:href=\"#widget59\" data-v-ef1ff130></use></g></svg>", 1)),
      createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.theme.light')), 1 /* TEXT */)
    ], 2 /* CLASS */),
    createBaseVNode("li", {
      class: normalizeClass({ active: unref(settings).theme === 'dark' }),
      onClick: _cache[2] || (_cache[2] = $event => (unref(settings).setTheme('dark')))
    }, [
      _cache[4] || (_cache[4] = createStaticVNode("<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 38 40\" data-v-ef1ff130><defs data-v-ef1ff130><filter x=\"1px\" y=\"40px\" width=\"38px\" height=\"40px\" filterUnits=\"userSpaceOnUse\" id=\"filter17\" data-v-ef1ff130><feOffset dx=\"0\" dy=\"0\" in=\"SourceAlpha\" result=\"shadowOffsetInner\" data-v-ef1ff130></feOffset><feGaussianBlur stdDeviation=\"5\" in=\"shadowOffsetInner\" result=\"shadowGaussian\" data-v-ef1ff130></feGaussianBlur><feComposite in2=\"shadowGaussian\" operator=\"atop\" in=\"SourceAlpha\" result=\"shadowComposite\" data-v-ef1ff130></feComposite><feColorMatrix type=\"matrix\" values=\"0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.349019607843137 0  \" in=\"shadowComposite\" data-v-ef1ff130></feColorMatrix></filter><g id=\"widget18\" data-v-ef1ff130><path d=\"M 8.21739130434783 20  C 4.95736246797399 20  2.1130464280657 18.4418468517661  0.344134641180861 15.9998912057482  C 0.359848145177513 15.9999637099837  0.375571405442318 16  0.391304347826087 16  C 5.8695652173913 16  10.1739130434783 11.6  10.1739130434783 6  C 10.1739130434783 3.73247410744199  9.46818753650638 1.66169593197917  8.26456103860729 0.000108794379229948  C 13.7203398824256 0.0252825116047802  18 4.41608257274656  18 10  C 18 15.6  13.695652173913 20  8.21739130434783 20  Z \" fill-rule=\"nonzero\" fill=\"#e5dcd4\" stroke=\"none\" transform=\"matrix(1 0 0 1 11 50 )\" data-v-ef1ff130></path></g></defs><g transform=\"matrix(1 0 0 1 -1 -40 )\" data-v-ef1ff130><use xlink:href=\"#widget18\" filter=\"url(#filter17)\" data-v-ef1ff130></use><use xlink:href=\"#widget18\" data-v-ef1ff130></use></g></svg>", 1)),
      createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.theme.dark')), 1 /* TEXT */)
    ], 2 /* CLASS */)
  ]))
}
}

};
const Theme = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-ef1ff130"],['__file',"D:/job/bilbo/src/pages/Settings/components/Theme.vue"]]);

const Img_vue_vue_type_style_index_0_scoped_eaa0f8c6_lang = '';

const _hoisted_1$3 = ["src", "alt"];
    
const _sfc_main$5 = {
  __name: 'Img',
  props: {
        preview: { type: String, default: '' },
        original: { type: String, default: '' },
        alt: { type: String, default: '' }
    },
  setup(__props) {

    const props = __props;

    const src = computed(() => `${ "https://api.wetap-tech-service.ru" }${ props.preview }`);

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("img", {
    src: src.value,
    alt: props.alt
  }, null, 8 /* PROPS */, _hoisted_1$3))
}
}

};
const Img = /*#__PURE__*/_export_sfc(_sfc_main$5, [['__scopeId',"data-v-eaa0f8c6"],['__file',"D:/job/bilbo/shared/components/ui/Img.vue"]]);

const _hoisted_1$2 = ["accept", "multiple"];

    
const _sfc_main$4 = {
  __name: 'FileUploader',
  props: {
        acceptedFormats: { type: Array, default: () => ([]) },
        maxSize: { type: Number, default: 50 * 1024 * 1024 },
        maxFiles: { type: Number, default: 1 },
        loading: { type: Boolean, default: false }
    },
  emits: ['change'],
  setup(__props, { emit: __emit }) {

    const { t } = useI18n();
    const fileInput = ref(null);
    const emit = __emit;

    const selectFile = () => {
        if (props.loading) {
            return;
        }

        fileInput.value.click();
    };

    const props = __props;

    const handleFileChange = (e) => {
        if (!e?.target?.files?.length) {
            return;
        }

        if (e.target.files.length > props.maxFiles) {
            message.info(t('ui.file-uploader.max-files', { msg: props.maxFiles }));
            return;
        }

        let error = false;
        const files = Array.from(event.target.files).splice(0, props.maxFiles);

        const extensions = props.acceptedFormats.map(item => item.split('/')[1] || item);

        files.forEach(file => {
            // Ext
            const ext = file.name.split('.').pop().toLowerCase();

            if (!extensions.includes(ext)) {
                message.info(t('ui.file-uploader.format', { msg: extensions.join(', ') }));
                error = true;
                return;
            }

            // Size
            if (file.size > props.maxSize) {
                message.info(t('ui.file-uploader.size', { name: file.name, size: parseInt(props.maxSize / (1024 * 1024)) }));
                error = true;
                return;
            }
        });

        if (error) {
            return;
        }

        if (files.length > 1) {
            emit('change', files);
        } else {
            emit('change', files[0]);
        }
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", null, [
    createBaseVNode("input", {
      type: "file",
      ref_key: "fileInput",
      ref: fileInput,
      style: {"display":"none"},
      accept: __props.acceptedFormats.join(', '),
      multiple: props.maxFiles !== 1,
      onChange: handleFileChange
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_1$2),
    createVNode(IconButton, {
      icon: "upload",
      class: "size-l round upload",
      loading: props.loading,
      onClick: selectFile
    }, null, 8 /* PROPS */, ["loading"])
  ]))
}
}

};
const FileUploader = /*#__PURE__*/_export_sfc(_sfc_main$4, [['__file',"D:/job/bilbo/shared/components/ui/FileUploader.vue"]]);

const Profile_vue_vue_type_style_index_0_scoped_96b8be53_lang = '';

const _hoisted_1$1 = { class: "profile" };
const _hoisted_2$1 = { class: "title" };
const _hoisted_3$1 = {
  key: 0,
  class: "roles"
};

    
const _sfc_main$3 = {
  __name: 'Profile',
  setup(__props) {

    const avatar = ref(null);

    const user = stores.user();
    const { t } = useI18n();

    const data = reactive({
        loading: false
    });

    const roles = computed(() => {
        return user.profile?.roles?.filter(item => item.roleId !== 'user').map(item => t(`constants.roles.${ item.roleId }`)).join(', ');
    });

    const updateAvatar = async (file) => {
        data.loading = true;

        await user.updateAvatar(file);

        data.loading = false;
        animateAvatarAgainPlease();
    };

    // =)
    const animateAvatarAgainPlease = () => {
        avatar?.value?.classList.remove('animate-1');
        setTimeout(() => {
            avatar?.value?.classList.add('animate-1');
        }, 10);
    };

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", {
      class: "avatar animate-1",
      ref_key: "avatar",
      ref: avatar,
      onClick: animateAvatarAgainPlease
    }, [
      (unref(user)?.profile?.profileImage?.resized)
        ? (openBlock(), createBlock(Img, {
            key: 0,
            preview: unref(user)?.profile?.profileImage?.resized,
            original: unref(user)?.profile?.profileImage?.original,
            alt: unref(user)?.profile?.lastName
          }, null, 8 /* PROPS */, ["preview", "original", "alt"]))
        : createCommentVNode("v-if", true)
    ], 512 /* NEED_PATCH */),
    createBaseVNode("label", _hoisted_2$1, toDisplayString(unref(user)?.profile?.firstName), 1 /* TEXT */),
    (roles.value)
      ? (openBlock(), createElementBlock("label", _hoisted_3$1, toDisplayString(roles.value), 1 /* TEXT */))
      : createCommentVNode("v-if", true),
    createVNode(FileUploader, {
      class: "upload",
      acceptedFormats: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/jfif'],
      loading: data.loading,
      onChange: updateAvatar
    }, null, 8 /* PROPS */, ["loading"])
  ]))
}
}

};
const Profile = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-96b8be53"],['__file',"D:/job/bilbo/src/pages/Settings/components/Profile.vue"]]);

const _sfc_main$2 = {
  __name: 'Language',
  setup(__props) {

    const locale = stores.locale();
    const { t } = useI18n();

    const onLanguageChange = (payload) => {
        locale.updateLocale(payload.value);
    };

return (_ctx, _cache) => {
  return (openBlock(), createBlock(Select, {
    class: "noerror inline",
    placeholder: unref(t)('pages.settings.base.language'),
    optionList: unref(locale).languages,
    value: unref(locale).locale,
    clearable: false,
    onChange: onLanguageChange
  }, null, 8 /* PROPS */, ["placeholder", "optionList", "value"]))
}
}

};
const Language = /*#__PURE__*/_export_sfc(_sfc_main$2, [['__file',"D:/job/bilbo/src/pages/Settings/components/Language.vue"]]);

const _sfc_main$1 = {
  __name: 'Vibration',
  setup(__props) {

    const settings = stores.settings();
    const { t } = useI18n();

    const onVibrationChange = (payload) => {
        settings.setVibration(payload.value);
    };

    const optionList = [
        {
            icon: 'bell',
            code: true,
            name: 'pages.settings.base.vibration.enabled'
        }, {
            icon: 'bell-off',
            code: false,
            name: 'pages.settings.base.vibration.disabled'
        }
    ];

return (_ctx, _cache) => {
  return (openBlock(), createBlock(Select, {
    class: "noerror inline",
    placeholder: unref(t)('pages.settings.base.vibration.title'),
    optionList: optionList,
    value: unref(settings).vibration,
    clearable: false,
    useI18n: true,
    onChange: onVibrationChange
  }, null, 8 /* PROPS */, ["placeholder", "value"]))
}
}

};
const Vibration = /*#__PURE__*/_export_sfc(_sfc_main$1, [['__file',"D:/job/bilbo/src/pages/Settings/components/Vibration.vue"]]);

const Settings_vue_vue_type_style_index_0_scoped_e143f0dd_lang = '';

const _hoisted_1 = { class: "head" };
const _hoisted_2 = { class: "title" };
const _hoisted_3 = { class: "block" };
const _hoisted_4 = { class: "block" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "clickable" };
const _hoisted_7 = { class: "clickable" };
const _hoisted_8 = { class: "block" };
const _hoisted_9 = { class: "title" };
const _hoisted_10 = { class: "clickable offset" };
const _hoisted_11 = { class: "block" };
const _hoisted_12 = { class: "title" };
const _hoisted_13 = { class: "offset" };
const _hoisted_14 = { class: "block" };
const _hoisted_15 = { class: "title" };
const _hoisted_16 = { class: "block" };
const _hoisted_17 = { class: "title" };
const _hoisted_18 = { class: "disabled clickable offset" };
const _hoisted_19 = { class: "disabled clickable offset" };

    
const _sfc_main = {
  __name: 'Settings',
  setup(__props) {

    const { t } = useI18n();

    const modals = stores.modals();
    const user = stores.user();
    const nav = stores.nav();
    stores.others();


    const authInStudio = () => {
        modals.open('studio-auth', {
            quietClose: true
        });
    };

    const editFirstName = () => {
        modals.open('edit-firstname', {
            quietClose: true
        });
    };

    modals.register({
        'studio-auth': defineAsyncComponent(() => __vitePreload(() => import('./ModalStudioAuth.4884a740.js'),true?["assets/ModalStudioAuth.4884a740.js","assets/index.05e6a95f.js","assets/index.9cfd9654.css","assets/ModalStudioAuth.adc11dd1.css"]:void 0)),
        'edit-firstname': defineAsyncComponent(() => __vitePreload(() => import('./ModalEditFirstName.f73b5e37.js'),true?["assets/ModalEditFirstName.f73b5e37.js","assets/index.05e6a95f.js","assets/index.9cfd9654.css","assets/Field.029b66e6.js","assets/Field.3845c6b6.css","assets/ModalEditFirstName.fdfb513e.css"]:void 0))
    });

    onBeforeUnmount(() => {
        modals.unRegister(['studio-auth', 'edit-firstname']);
    });

return (_ctx, _cache) => {
  const _component_Icon = resolveComponent("Icon");

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1, [
      createVNode(IconButton, {
        icon: "chevron-left",
        class: "tertiary size-l",
        onClick: _cache[0] || (_cache[0] = $event => (unref(nav).back()))
      }),
      createBaseVNode("label", _hoisted_2, toDisplayString(unref(t)('pages.settings.title')), 1 /* TEXT */)
    ]),
    createBaseVNode("div", _hoisted_3, [
      (unref(user).profile?.id)
        ? (openBlock(), createBlock(Profile, { key: 0 }))
        : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("div", _hoisted_4, [
      createBaseVNode("label", _hoisted_5, toDisplayString(unref(t)('pages.settings.base.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        createBaseVNode("li", _hoisted_6, [
          createVNode(Language)
        ]),
        createBaseVNode("li", _hoisted_7, [
          createVNode(Vibration)
        ]),
        createBaseVNode("li", {
          class: "clickable offset",
          onClick: editFirstName
        }, [
          createVNode(_component_Icon, { icon: "user" }),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.base.profile.title')), 1 /* TEXT */)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("label", _hoisted_9, toDisplayString(unref(t)('pages.settings.sound.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        createBaseVNode("li", _hoisted_10, [
          createVNode(Toggler, {
            class: "reverse",
            inline: true,
            name: unref(t)('pages.settings.sound.autofade'),
            checked: true
          }, null, 8 /* PROPS */, ["name"])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_11, [
      createBaseVNode("label", _hoisted_12, toDisplayString(unref(t)('pages.settings.theme.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        createBaseVNode("li", _hoisted_13, [
          createVNode(Theme)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_14, [
      createBaseVNode("label", _hoisted_15, toDisplayString(unref(t)('pages.settings.devices.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        createBaseVNode("li", {
          class: "clickable offset",
          onClick: authInStudio
        }, [
          createVNode(_component_Icon, { icon: "apps" }),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.devices.studio')), 1 /* TEXT */)
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_16, [
      createBaseVNode("label", _hoisted_17, toDisplayString(unref(t)('pages.settings.help.title')), 1 /* TEXT */),
      createBaseVNode("ul", null, [
        createBaseVNode("li", _hoisted_18, [
          createVNode(_component_Icon, { icon: "help" }),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.help.about.title')), 1 /* TEXT */)
        ]),
        createBaseVNode("li", _hoisted_19, [
          createVNode(_component_Icon, { icon: "paperclip" }),
          createBaseVNode("span", null, toDisplayString(unref(t)('pages.settings.help.documentation')), 1 /* TEXT */)
        ])
      ])
    ]),
    createVNode(Ready, { page: "settings" })
  ], 64 /* STABLE_FRAGMENT */))
}
}

};
const Settings = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-e143f0dd"],['__file',"D:/job/bilbo/src/pages/Settings/Settings.vue"]]);

export { Settings as default };
