"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2959],{"./src/components/Typography/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Title_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Title_module.A,options);const Title_Title_module=Title_module.A&&Title_module.A.locals?Title_module.A.locals:void 0,stylesLevel={1:Title_Title_module["Title--level-1"],2:Title_Title_module["Title--level-2"],3:Title_Title_module["Title--level-3"]},Title=({className,level="1",Component="span",normalize=!0,inline=!1,...restProps})=>(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,es6.xW)(className,stylesLevel[level]),...restProps});try{Title.displayName="Title",Title.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};const withCartesian=(StoryFn,context)=>{const{argTypes,args:{cartesian,...restArgs}}=context;if(cartesian){const variants=function cartesianFunc(propDesc=[],argTypes){return Object.entries(propDesc).reduce(((acc,[prop,values])=>{const res=[];return acc.forEach((props=>{values.forEach((value=>{const mapping=argTypes[prop].mapping;res.push({...props,[prop]:mapping?mapping[value]:value})}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map(((ops,index)=>(0,jsx_runtime.jsx)(StoryFn,{args:{...restArgs,...ops}},index)))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})}},"./src/components/Typography/Title/Title.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_Title__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Typography/Title/Title.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Typography/Title",component:_Title__WEBPACK_IMPORTED_MODULE_2__.h,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.L1]},Playground={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_2__.h,{level:"1",...args,children:"Title 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_2__.h,{level:"2",...args,children:"Title 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Title__WEBPACK_IMPORTED_MODULE_2__.h,{level:"3",...args,children:"Title 3"})]})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <div>\n      <Title level="1" {...args}>\n        Title 1\n      </Title>\n      <Title level="2" {...args}>\n        Title 2\n      </Title>\n      <Title level="3" {...args}>\n        Title 3\n      </Title>\n    </div>\n}',...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}","",{version:3,sources:["webpack://./src/components/Typography/Title/Title.module.css"],names:[],mappings:"AAAA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF",sourcesContent:[".Title--level-1 {\n  font-size: var(--vkui--font_title1--font_size--regular);\n  line-height: var(--vkui--font_title1--line_height--regular);\n  font-weight: var(--vkui--font_title1--font_weight--regular);\n  font-family: var(--vkui--font_title1--font_family--regular);\n}\n\n.Title--level-2 {\n  font-size: var(--vkui--font_title2--font_size--regular);\n  line-height: var(--vkui--font_title2--line_height--regular);\n  font-weight: var(--vkui--font_title2--font_weight--regular);\n  font-family: var(--vkui--font_title2--font_family--regular);\n}\n\n.Title--level-3 {\n  font-size: var(--vkui--font_title3--font_size--regular);\n  line-height: var(--vkui--font_title3--line_height--regular);\n  font-weight: var(--vkui--font_title3--font_weight--regular);\n  font-family: var(--vkui--font_title3--font_family--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);