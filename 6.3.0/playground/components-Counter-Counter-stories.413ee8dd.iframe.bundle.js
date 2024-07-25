"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2735],{"./src/components/Counter/Counter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Counter});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Caption=__webpack_require__("./src/components/Typography/Caption/Caption.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Counter_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Counter/Counter.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Counter_module.A,options);const Counter_Counter_module=Counter_module.A&&Counter_module.A.locals?Counter_module.A.locals:void 0,modeClassNames={secondary:Counter_Counter_module["Counter--mode-secondary"],primary:Counter_Counter_module["Counter--mode-primary"],prominent:Counter_Counter_module["Counter--mode-prominent"],contrast:Counter_Counter_module["Counter--mode-contrast"],inherit:Counter_Counter_module["Counter--mode-inherit"]},sizeClassNames={s:Counter_Counter_module["Counter--size-s"],m:Counter_Counter_module["Counter--size-m"]},Counter=({mode="inherit",size="m",children,className,...restProps})=>{if(0===react.Children.count(children))return null;const CounterTypography="s"===size?Caption.H:Headline.$,counterLevel="s"===size?"1":"2";return(0,jsx_runtime.jsx)(CounterTypography,{...restProps,Component:"span",className:(0,es6.xW)("vkuiInternalCounter",Counter_Counter_module.Counter,modeClassNames[mode],sizeClassNames[size],className),level:counterLevel,children})};try{Counter.displayName="Counter",Counter.__docgenInfo={description:"",displayName:"Counter",props:{mode:{defaultValue:{value:"inherit"},description:"Тип счетчика.  В режиме `inherit` если компонент находится в кнопке, то\nцвета зависят от кнопки. Если компонент находится вне кнопки, применяется\nрежим `secondary`",name:"mode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"primary"'},{value:'"secondary"'},{value:'"prominent"'},{value:'"contrast"'}]}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Counter/Counter.tsx#Counter"]={docgenInfo:Counter.__docgenInfo,name:"Counter",path:"src/components/Counter/Counter.tsx#Counter"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Caption/Caption.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>Caption});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Caption_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Caption/Caption.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Caption_module.A,options);const Caption_Caption_module=Caption_module.A&&Caption_module.A.locals?Caption_module.A.locals:void 0,stylesLevel={1:Caption_Caption_module["Caption--level-1"],2:Caption_Caption_module["Caption--level-2"],3:Caption_Caption_module["Caption--level-3"]},Caption=({className,level="1",caps,Component="span",normalize=!0,inline=!1,...restProps})=>(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,es6.xW)(className,caps&&Caption_Caption_module["Caption--caps"],stylesLevel[level]),...restProps});try{Caption.displayName="Caption",Caption.__docgenInfo={description:"Используется для мелких подписей.",displayName:"Caption",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},caps:{defaultValue:null,description:"",name:"caps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Caption/Caption.tsx#Caption"]={docgenInfo:Caption.__docgenInfo,name:"Caption",path:"src/components/Typography/Caption/Caption.tsx#Caption"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Headline/Headline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Headline});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Headline_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Headline_module.A,options);const Headline_Headline_module=Headline_module.A&&Headline_module.A.locals?Headline_module.A.locals:void 0,stylesLevel={1:Headline_Headline_module["Headline--level-1"],2:Headline_Headline_module["Headline--level-2"]},sizeYClassNames={none:Headline_Headline_module["Headline--sizeY-none"],compact:Headline_Headline_module["Headline--sizeY-compact"]},Headline=({className,weight="3",level="1",Component="span",normalize=!0,inline=!1,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,weight,className:(0,es6.xW)(className,"regular"!==sizeY&&sizeYClassNames[sizeY],stylesLevel[level]),...restProps})};try{Headline.displayName="Headline",Headline.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHidden_module.A,options);const VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.A&&VisuallyHidden_module.A.locals?VisuallyHidden_module.A.locals:void 0,VisuallyHidden=({Component="span",...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{Component,...restProps,baseClassName:(0,es6.xW)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])});try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};const withCartesian=(StoryFn,context)=>{const{argTypes,args:{cartesian,...restArgs}}=context;if(cartesian){const variants=function cartesianFunc(propDesc=[],argTypes){return Object.entries(propDesc).reduce(((acc,[prop,values])=>{const res=[];return acc.forEach((props=>{values.forEach((value=>{const mapping=argTypes[prop].mapping;res.push({...props,[prop]:mapping?mapping[value]:value})}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map(((ops,index)=>(0,jsx_runtime.jsx)(StoryFn,{args:{...restArgs,...ops}},index)))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})}},"./src/components/Counter/Counter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Counter",component:__webpack_require__("./src/components/Counter/Counter.tsx").p,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.L1]},Playground={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_4__.s,{children:"Обновлений:"})," 5"]})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\n        <VisuallyHidden>Обновлений:</VisuallyHidden> 5\n      </>\n  }\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Counter/Counter.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Counter--cWvTf{align-items:center;box-sizing:border-box;display:flex;justify-content:center;padding-inline:5px;text-align:center}.Counter--mode-primary--DL8JD{background:var(--vkui--color_background_accent);color:var(--vkui--color_text_contrast)}.Counter--mode-secondary--Ki0s6{background:var(--vkui--color_icon_secondary);color:var(--vkui--color_text_contrast_themed)}.Counter--mode-prominent--TUi0a{background:var(--vkui--color_accent_red);color:var(--vkui--color_text_contrast)}.Counter--mode-contrast--INnF0{background:var(--vkui--color_background_content);color:var(--vkui--color_text_accent_themed)}.Counter--size-m--VFSgi{block-size:24px;border-radius:12px;min-inline-size:24px}.Counter--size-s--mWdyb{block-size:18px;border-radius:9px;min-inline-size:18px}.Counter--mode-inherit--SxeoK{background-color:var(\n    --vkui_internal--counter_inherit_background,var(--vkui--color_icon_secondary)\n  );color:var(--vkui_internal--counter_inherit_color,var(--vkui--color_text_contrast_themed))}.vkuiInternalPanelHeaderButton .Counter--cWvTf{inset-block-start:8px;inset-inline-end:2px;padding:0;position:absolute}.vkuiInternalTabbarItem__label .Counter--cWvTf{inset-block-start:-2px;inset-inline-end:-9px;position:absolute}","",{version:3,sources:["webpack://./src/components/Counter/Counter.module.css"],names:[],mappings:"AAAA,gBAEE,kBAAmB,CAInB,qBAAsB,CALtB,YAAa,CAEb,sBAAuB,CACvB,kBAAmB,CACnB,iBAEF,CAEA,8BACE,+CAAgD,CAChD,sCACF,CAEA,gCACE,4CAA6C,CAC7C,6CACF,CAEA,gCACE,wCAAyC,CACzC,sCACF,CAEA,+BACE,gDAAiD,CACjD,2CACF,CAEA,wBACE,eAAgB,CAEhB,kBAAmB,CADnB,oBAEF,CAEA,wBACE,eAAgB,CAEhB,iBAAkB,CADlB,oBAEF,CAEA,8BACE;;GAGC,CACD,yFACF,CAOA,+CAGE,qBAAsB,CACtB,oBAAqB,CAFrB,SAAU,CADV,iBAIF,CAOA,+CAEE,sBAAuB,CACvB,qBAAsB,CAFtB,iBAGF",sourcesContent:[".Counter {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-inline: 5px;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.Counter--mode-primary {\n  background: var(--vkui--color_background_accent);\n  color: var(--vkui--color_text_contrast);\n}\n\n.Counter--mode-secondary {\n  background: var(--vkui--color_icon_secondary);\n  color: var(--vkui--color_text_contrast_themed);\n}\n\n.Counter--mode-prominent {\n  background: var(--vkui--color_accent_red);\n  color: var(--vkui--color_text_contrast);\n}\n\n.Counter--mode-contrast {\n  background: var(--vkui--color_background_content);\n  color: var(--vkui--color_text_accent_themed);\n}\n\n.Counter--size-m {\n  block-size: 24px;\n  min-inline-size: 24px;\n  border-radius: 12px;\n}\n\n.Counter--size-s {\n  block-size: 18px;\n  min-inline-size: 18px;\n  border-radius: 9px;\n}\n\n.Counter--mode-inherit {\n  background-color: var(\n    --vkui_internal--counter_inherit_background,\n    var(--vkui--color_icon_secondary)\n  );\n  color: var(--vkui_internal--counter_inherit_color, var(--vkui--color_text_contrast_themed));\n}\n\n/**\n * CMP:\n * PanelHeaderButton\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalPanelHeaderButton) .Counter {\n  position: absolute;\n  padding: 0;\n  inset-block-start: 8px;\n  inset-inline-end: 2px;\n}\n\n/**\n * CMP:\n * TabbarItem\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabbarItem__label) .Counter {\n  position: absolute;\n  inset-block-start: -2px;\n  inset-inline-end: -9px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Counter:"Counter--cWvTf","Counter--mode-primary":"Counter--mode-primary--DL8JD","Counter--mode-secondary":"Counter--mode-secondary--Ki0s6","Counter--mode-prominent":"Counter--mode-prominent--TUi0a","Counter--mode-contrast":"Counter--mode-contrast--INnF0","Counter--size-m":"Counter--size-m--VFSgi","Counter--size-s":"Counter--size-s--mWdyb","Counter--mode-inherit":"Counter--mode-inherit--SxeoK"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Caption/Caption.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Caption--caps--hL0Xn{text-transform:uppercase}.Caption--level-1--rEY2G{font-family:var(--vkui--font_caption1--font_family--regular);font-size:var(--vkui--font_caption1--font_size--regular);font-weight:var(--vkui--font_caption1--font_weight--regular);line-height:var(--vkui--font_caption1--line_height--regular)}.Caption--level-1--rEY2G.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption1_caps--font_family--regular);font-size:var(--vkui--font_caption1_caps--font_size--regular);font-weight:var(--vkui--font_caption1_caps--font_weight--regular);line-height:var(--vkui--font_caption1_caps--line_height--regular)}.Caption--level-2--HNUmL{font-family:var(--vkui--font_caption2--font_family--regular);font-size:var(--vkui--font_caption2--font_size--regular);font-weight:var(--vkui--font_caption2--font_weight--regular);line-height:var(--vkui--font_caption2--line_height--regular)}.Caption--level-2--HNUmL.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption2_caps--font_family--regular);font-size:var(--vkui--font_caption2_caps--font_size--regular);font-weight:var(--vkui--font_caption2_caps--font_weight--regular);line-height:var(--vkui--font_caption2_caps--line_height--regular)}.Caption--level-3--xTTp4{font-family:var(--vkui--font_caption3--font_family--regular);font-size:var(--vkui--font_caption3--font_size--regular);font-weight:var(--vkui--font_caption3--font_weight--regular);line-height:var(--vkui--font_caption3--line_height--regular)}.Caption--level-3--xTTp4.Caption--caps--hL0Xn{font-family:var(--vkui--font_caption3_caps--font_family--regular);font-size:var(--vkui--font_caption3_caps--font_size--regular);font-weight:var(--vkui--font_caption3_caps--font_weight--regular);line-height:var(--vkui--font_caption3_caps--line_height--regular)}","",{version:3,sources:["webpack://./src/components/Typography/Caption/Caption.module.css"],names:[],mappings:"AAAA,sBACE,wBACF,CAEA,yBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,8CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF,CAEA,yBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,8CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF,CAEA,yBAIE,4DAA6D,CAH7D,wDAAyD,CAEzD,4DAA6D,CAD7D,4DAGF,CAEA,8CAIE,iEAAkE,CAHlE,6DAA8D,CAE9D,iEAAkE,CADlE,iEAGF",sourcesContent:[".Caption--caps {\n  text-transform: uppercase;\n}\n\n.Caption--level-1 {\n  font-size: var(--vkui--font_caption1--font_size--regular);\n  line-height: var(--vkui--font_caption1--line_height--regular);\n  font-weight: var(--vkui--font_caption1--font_weight--regular);\n  font-family: var(--vkui--font_caption1--font_family--regular);\n}\n\n.Caption--level-1.Caption--caps {\n  font-size: var(--vkui--font_caption1_caps--font_size--regular);\n  line-height: var(--vkui--font_caption1_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption1_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption1_caps--font_family--regular);\n}\n\n.Caption--level-2 {\n  font-size: var(--vkui--font_caption2--font_size--regular);\n  line-height: var(--vkui--font_caption2--line_height--regular);\n  font-weight: var(--vkui--font_caption2--font_weight--regular);\n  font-family: var(--vkui--font_caption2--font_family--regular);\n}\n\n.Caption--level-2.Caption--caps {\n  font-size: var(--vkui--font_caption2_caps--font_size--regular);\n  line-height: var(--vkui--font_caption2_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption2_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption2_caps--font_family--regular);\n}\n\n.Caption--level-3 {\n  font-size: var(--vkui--font_caption3--font_size--regular);\n  line-height: var(--vkui--font_caption3--line_height--regular);\n  font-weight: var(--vkui--font_caption3--font_weight--regular);\n  font-family: var(--vkui--font_caption3--font_family--regular);\n}\n\n.Caption--level-3.Caption--caps {\n  font-size: var(--vkui--font_caption3_caps--font_size--regular);\n  line-height: var(--vkui--font_caption3_caps--line_height--regular);\n  font-weight: var(--vkui--font_caption3_caps--font_weight--regular);\n  font-family: var(--vkui--font_caption3_caps--font_family--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Caption--caps":"Caption--caps--hL0Xn","Caption--level-1":"Caption--level-1--rEY2G","Caption--level-2":"Caption--level-2--HNUmL","Caption--level-3":"Caption--level-3--xTTp4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}","",{version:3,sources:["webpack://./src/components/Typography/Headline/Headline.module.css"],names:[],mappings:"AAAA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF,CAEA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF",sourcesContent:[".Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--regular);\n  line-height: var(--vkui--font_headline1--line_height--regular);\n  font-weight: var(--vkui--font_headline1--font_weight--regular);\n  font-family: var(--vkui--font_headline1--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--compact);\n  line-height: var(--vkui--font_headline1--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-1 {\n    font-size: var(--vkui--font_headline1--font_size--compact);\n    line-height: var(--vkui--font_headline1--line_height--compact);\n  }\n}\n\n.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--regular);\n  line-height: var(--vkui--font_headline2--line_height--regular);\n  font-weight: var(--vkui--font_headline2--font_weight--regular);\n  font-family: var(--vkui--font_headline2--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--compact);\n  line-height: var(--vkui--font_headline2--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-2 {\n    font-size: var(--vkui--font_headline2--font_size--compact);\n    line-height: var(--vkui--font_headline2--line_height--compact);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{block-size:1px!important;inline-size:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{block-size:100%!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,wBAA0B,CAC1B,yBAA2B,CAE3B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAC9B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,yBAA2B,CAC3B,0BAA4B,CAF5B,mBAAoB,CADpB,oBAAqB,CAIrB,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);