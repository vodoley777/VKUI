"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[289],{"./src/components/Gradient/Gradient.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Gradient",component:__webpack_require__("./src/components/Gradient/Gradient.tsx").H,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC}},Playground={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"100%",height:"200px"}})},decorators:[(Component,context)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"50%",height:"50%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{args:context.args})})]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <div style={{\n      width: '100%',\n      height: '200px'\n    }} />\n  },\n  decorators: [(Component, context) => <div style={{\n    width: '50%',\n    height: '50%'\n  }}>\n        <Component args={context.args} />\n      </div>]\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Gradient/Gradient.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Gradient__host--j2d5D{background:linear-gradient(to bottom,var(--vkui_internal--Gradient_gradient));--vkui_internal--Gradient_gradient:var(--vkui--gradient)}.Gradient__toBottom--c1VUi{background:linear-gradient(to top,var(--vkui_internal--Gradient_gradient))}.Gradient__modeTint--dQyjS{--vkui_internal--Gradient_gradient:var(--vkui--gradient_tint)}.Gradient__modeOverlay--YZvSa{--vkui_internal--Gradient_gradient:var(--vkui--gradient_black)}","",{version:3,sources:["webpack://./src/components/Gradient/Gradient.module.css"],names:[],mappings:"AAAA,uBACE,6EAA+E,CAE/E,wDACF,CAEA,2BACE,0EACF,CAEA,2BACE,6DACF,CAEA,8BACE,8DACF",sourcesContent:[".host {\n  background: linear-gradient(to bottom, var(--vkui_internal--Gradient_gradient));\n\n  --vkui_internal--Gradient_gradient: var(--vkui--gradient);\n}\n\n.toBottom {\n  background: linear-gradient(to top, var(--vkui_internal--Gradient_gradient));\n}\n\n.modeTint {\n  --vkui_internal--Gradient_gradient: var(--vkui--gradient_tint);\n}\n\n.modeOverlay {\n  --vkui_internal--Gradient_gradient: var(--vkui--gradient_black);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Gradient__host--j2d5D",toBottom:"Gradient__toBottom--c1VUi",modeTint:"Gradient__modeTint--dQyjS",modeOverlay:"Gradient__modeOverlay--YZvSa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Gradient/Gradient.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Gradient});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Gradient_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Gradient/Gradient.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Gradient_module.A,options);const Gradient_Gradient_module=Gradient_module.A&&Gradient_module.A.locals?Gradient_module.A.locals:void 0,modeStyles={overlay:Gradient_Gradient_module.modeOverlay,tint:Gradient_Gradient_module.modeTint},Gradient=({mode="default",to="top",...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{role:"presentation",...restProps,baseClassName:(0,es6.xW)(Gradient_Gradient_module.host,"default"!==mode&&modeStyles[mode],"bottom"===to&&Gradient_Gradient_module.toBottom)});try{Gradient.displayName="Gradient",Gradient.__docgenInfo={description:"",displayName:"Gradient",props:{mode:{defaultValue:{value:"default"},description:"Тип градиента",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"overlay"'},{value:'"tint"'}]}},to:{defaultValue:{value:"top"},description:"Направление градиента",name:"to",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gradient/Gradient.tsx#Gradient"]={docgenInfo:Gradient.__docgenInfo,name:"Gradient",path:"src/components/Gradient/Gradient.tsx#Gradient"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);