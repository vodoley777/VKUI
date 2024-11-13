"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1244],{"./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ImageBaseBadge});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBaseBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBaseBadge_module.A,options);const ImageBaseBadge_ImageBaseBadge_module=ImageBaseBadge_module.A&&ImageBaseBadge_module.A.locals?ImageBaseBadge_module.A.locals:void 0;const backgroundStyles={stroke:ImageBaseBadge_ImageBaseBadge_module.backgroundStroke,shadow:ImageBaseBadge_ImageBaseBadge_module.backgroundShadow},ImageBaseBadge=({background="shadow",...restProps})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,baseClassName:(0,es6.xW)(ImageBaseBadge_ImageBaseBadge_module.host,backgroundStyles[background])}),!1]});ImageBaseBadge.displayName="ImageBaseBadge";try{ImageBaseBadge.displayName="ImageBaseBadge",ImageBaseBadge.__docgenInfo={description:"Бейдж в правом нижнем углу компонента.\n\n> Не используйте при `size < 24`",displayName:"ImageBaseBadge",props:{background:{defaultValue:{value:"shadow"},description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"]={docgenInfo:ImageBaseBadge.__docgenInfo,name:"ImageBaseBadge",path:"src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_ImageBaseBadge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/ImageBaseBadge",component:_ImageBaseBadge__WEBPACK_IMPORTED_MODULE_1__.c,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC}},Playground={render:({children,...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ImageBaseBadge__WEBPACK_IMPORTED_MODULE_1__.c,{...args,children}),decorators:[(Component,context)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:50,height:50,border:"1px dashed red",position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:{...context.args}})})]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: ({\n    children,\n    ...args\n  }) => <ImageBaseBadge {...args}>{children}</ImageBaseBadge>,\n  decorators: [(Component, context) => <div style={{\n    width: 50,\n    height: 50,\n    border: '1px dashed red',\n    position: 'relative'\n  }}>\n        <Component args={{\n      ...context.args\n    }} />\n      </div>]\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.ImageBaseBadge__host--1CUAS{border-radius:50%;inset-block-end:0;inset-inline-end:0;padding:2px;position:absolute;transform:translate(2px,2px);z-index:var(--vkui_internal--z_index_image_base_badge)}.ImageBaseBadge__backgroundStroke--vhxNG{background-color:var(--vkui_internal--background,var(--vkui--color_background_content))}.ImageBaseBadge__backgroundShadow--TCgPg:before{border-radius:inherit;box-shadow:var(--vkui--elevation1);content:"";inset:2px;margin:auto;pointer-events:none;position:absolute}',"",{version:3,sources:["webpack://./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css"],names:[],mappings:"AAAA,6BAKE,iBAAkB,CADlB,iBAAkB,CADlB,kBAAmB,CAMnB,WAAY,CARZ,iBAAkB,CAOlB,4BAA8B,CAN9B,sDAQF,CAEA,yCAEE,uFACF,CAEA,gDAKE,qBAAsB,CACtB,kCAAmC,CALnC,UAAW,CAEX,SAAU,CACV,WAAY,CAGZ,mBAAoB,CALpB,iBAMF",sourcesContent:[".host {\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_image_base_badge);\n  inset-inline-end: 0;\n  inset-block-end: 0;\n  border-radius: 50%;\n\n  /* Смещаем на `padding-top` и `padding-left`, чтобы не учитывать `padding` при позиционировании. */\n  transform: translate(2px, 2px);\n  padding: 2px;\n}\n\n.backgroundStroke {\n  /* цвет фона для скрывания элементов */\n  background-color: var(--vkui_internal--background, var(--vkui--color_background_content));\n}\n\n.backgroundShadow::before {\n  content: '';\n  position: absolute;\n  inset: 2px;\n  margin: auto;\n  border-radius: inherit;\n  box-shadow: var(--vkui--elevation1);\n  pointer-events: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"ImageBaseBadge__host--1CUAS",backgroundStroke:"ImageBaseBadge__backgroundStroke--vhxNG",backgroundShadow:"ImageBaseBadge__backgroundShadow--TCgPg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);