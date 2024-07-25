"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4879],{"./src/components/Placeholder/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),Title=__webpack_require__("./src/components/Typography/Title/Title.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Placeholder_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Placeholder/Placeholder.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Placeholder_module.A,options);const Placeholder_Placeholder_module=Placeholder_module.A&&Placeholder_module.A.locals?Placeholder_module.A.locals:void 0,PlaceholderContainer=({stretched,noPadding=!1,...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:(0,es6.xW)(Placeholder_Placeholder_module.Placeholder,stretched&&Placeholder_Placeholder_module["Placeholder--stretched"],!noPadding&&Placeholder_Placeholder_module["Placeholder--withPadding"]),...restProps}),PlaceholderIcon=props=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:Placeholder_Placeholder_module.Placeholder__icon,...props}),PlaceholderHeader=({className,...restProps})=>(0,jsx_runtime.jsx)(Title.h,{level:"2",weight:"2",className:(0,es6.xW)(className,Placeholder_Placeholder_module.Placeholder__header),...restProps}),PlaceholderText=({className,...restProps})=>(0,jsx_runtime.jsx)(Headline.$,{weight:"3",className:(0,es6.xW)(className,Placeholder_Placeholder_module.Placeholder__text),...restProps}),PlaceholderActions=props=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:Placeholder_Placeholder_module.Placeholder__action,...props}),Placeholder=({icon,header,children,action,noPadding=!1,...restProps})=>(0,jsx_runtime.jsxs)(PlaceholderContainer,{noPadding,...restProps,children:[(0,es6.G1)(icon)&&(0,jsx_runtime.jsx)(PlaceholderIcon,{children:icon}),(0,es6.G1)(header)&&(0,jsx_runtime.jsx)(PlaceholderHeader,{children:header}),(0,es6.G1)(children)&&(0,jsx_runtime.jsx)(PlaceholderText,{children}),(0,es6.G1)(action)&&(0,jsx_runtime.jsx)(PlaceholderActions,{children:action})]});Placeholder.Container=PlaceholderContainer,Placeholder.Icon=PlaceholderIcon,Placeholder.Header=PlaceholderHeader,Placeholder.Text=PlaceholderText,Placeholder.Actions=PlaceholderActions;try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{icon:{defaultValue:null,description:"Иконка",name:"icon",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Заголовок плейсхолдера",name:"header",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Кнопка действия",name:"action",required:!1,type:{name:"ReactNode"}},stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"Убирает отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/components/Placeholder/Placeholder.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Placeholder.Container",Container.__docgenInfo={description:"",displayName:"Placeholder.Container",props:{stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"Убирает отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Container"]={docgenInfo:Placeholder.Container.__docgenInfo,name:"Placeholder.Container",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Container"})}catch(__react_docgen_typescript_loader_error){}try{Icon.displayName="Placeholder.Icon",Icon.__docgenInfo={description:"",displayName:"Placeholder.Icon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"]={docgenInfo:Placeholder.Icon.__docgenInfo,name:"Placeholder.Icon",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Placeholder.Header",Header.__docgenInfo={description:"",displayName:"Placeholder.Header",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Header"]={docgenInfo:Placeholder.Header.__docgenInfo,name:"Placeholder.Header",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Header"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Placeholder.Text",Text.__docgenInfo={description:"",displayName:"Placeholder.Text",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Text"]={docgenInfo:Placeholder.Text.__docgenInfo,name:"Placeholder.Text",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Text"})}catch(__react_docgen_typescript_loader_error){}try{Actions.displayName="Placeholder.Actions",Actions.__docgenInfo={description:"",displayName:"Placeholder.Actions",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"]={docgenInfo:Placeholder.Actions.__docgenInfo,name:"Placeholder.Actions",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Headline/Headline.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Headline});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Headline_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Headline_module.A,options);const Headline_Headline_module=Headline_module.A&&Headline_module.A.locals?Headline_module.A.locals:void 0,stylesLevel={1:Headline_Headline_module["Headline--level-1"],2:Headline_Headline_module["Headline--level-2"]},sizeYClassNames={none:Headline_Headline_module["Headline--sizeY-none"],compact:Headline_Headline_module["Headline--sizeY-compact"]},Headline=({className,weight="3",level="1",Component="span",normalize=!0,inline=!1,...restProps})=>{const{sizeY="none"}=(0,useAdaptivity.L)();return(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,weight,className:(0,es6.xW)(className,"regular"!==sizeY&&sizeYClassNames[sizeY],stylesLevel[level]),...restProps})};try{Headline.displayName="Headline",Headline.__docgenInfo={description:"Используется для подзаголовков.",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'}]}},weight:{defaultValue:{value:"3"},description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Headline/Headline.tsx#Headline"]={docgenInfo:Headline.__docgenInfo,name:"Headline",path:"src/components/Typography/Headline/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Title_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Title_module.A,options);const Title_Title_module=Title_module.A&&Title_module.A.locals?Title_module.A.locals:void 0,stylesLevel={1:Title_Title_module["Title--level-1"],2:Title_Title_module["Title--level-2"],3:Title_Title_module["Title--level-3"]},Title=({className,level="1",Component="span",normalize=!0,inline=!1,...restProps})=>(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,es6.xW)(className,stylesLevel[level]),...restProps});try{Title.displayName="Title",Title.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/Placeholder/Placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/56/users_outline_56.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Placeholder",component:__webpack_require__("./src/components/Placeholder/Placeholder.tsx").O,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_2__.eC}},Playground={args:{children:"Подключите сообщества, от которых Вы хотите получать уведомления",header:"Уведомления от сообществ",icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_3__.b,{})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Подключите сообщества, от которых Вы хотите получать уведомления',\n    header: 'Уведомления от сообществ',\n    icon: <Icon56UsersOutline />\n  }\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/56/users_outline_56.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Icon56UsersOutline});var Icon56UsersOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon56UsersOutline","users_outline_56","0 0 56 56",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="users_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path fill="currentColor" fill-rule="nonzero" d="M39.5 31c5.609 0 10.5 2.699 10.5 8 0 2.625-1.833 4-4 4h-8.5a1.5 1.5 0 0 1 0-3H46c.667 0 1-.25 1-1 0-3.164-3.328-5-7.5-5-.71 0-1.482.07-2.226.208a1.5 1.5 0 1 1-.548-2.95A15.4 15.4 0 0 1 39.5 31m-19-2c7.356 0 13.5 2.836 13.5 9 0 3.078-1.922 5-4.5 5h-18C8.814 43 7 41.59 7 38.5c0-6.545 6.065-9.5 13.5-9.5m0 3C14.514 32 10 34.2 10 38.5c0 1.244.33 1.5 1.5 1.5h18c.922 0 1.5-.578 1.5-2 0-3.874-4.606-6-10.5-6M39 15a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13m-18.5-4a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15M39 18a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m-18.5-4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" /></g></symbol>',56,56,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Placeholder/Placeholder.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Placeholder--QT9fK{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;text-align:center}.Placeholder--withPadding--U9MOX{padding-block:48px;padding-inline:32px}.Placeholder--stretched--t1fH0{block-size:100%;flex:1 0;padding-block:inherit}.Placeholder__icon--if6hr{-webkit-margin-after:12px;color:var(--vkui--color_icon_secondary);display:inline-block;margin-block-end:12px;vertical-align:top}.Placeholder__header--WnYo4{color:var(--vkui--color_text_primary)}.Placeholder__text--V1RgX{color:var(--vkui--color_text_secondary)}.Placeholder__header--WnYo4+.Placeholder__text--V1RgX{-webkit-margin-before:8px;margin-block-start:8px}.Placeholder__action--iajYO:not(:first-child){-webkit-margin-before:16px;margin-block-start:16px}","",{version:3,sources:["webpack://./src/components/Placeholder/Placeholder.module.css"],names:[],mappings:"AAAA,oBAEE,kBAAmB,CAInB,qBAAsB,CALtB,YAAa,CAGb,qBAAsB,CADtB,sBAAuB,CAEvB,iBAEF,CAEA,iCACE,kBAAmB,CACnB,mBACF,CAEA,+BAGE,eAAgB,CAFhB,QAAS,CACT,qBAEF,CAEA,0BACE,yBAAsB,CAGtB,uCAAwC,CAFxC,oBAAqB,CADrB,qBAAsB,CAEtB,kBAEF,CAEA,4BACE,qCACF,CAEA,0BACE,uCACF,CAEA,sDACE,yBAAuB,CAAvB,sBACF,CAEA,8CACE,0BAAwB,CAAxB,uBACF",sourcesContent:[".Placeholder {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.Placeholder--withPadding {\n  padding-block: 48px;\n  padding-inline: 32px;\n}\n\n.Placeholder--stretched {\n  flex: 1 0;\n  padding-block: inherit;\n  block-size: 100%;\n}\n\n.Placeholder__icon {\n  margin-block-end: 12px;\n  display: inline-block;\n  vertical-align: top;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.Placeholder__header {\n  color: var(--vkui--color_text_primary);\n}\n\n.Placeholder__text {\n  color: var(--vkui--color_text_secondary);\n}\n\n.Placeholder__header + .Placeholder__text {\n  margin-block-start: 8px;\n}\n\n.Placeholder__action:not(:first-child) {\n  margin-block-start: 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Placeholder:"Placeholder--QT9fK","Placeholder--withPadding":"Placeholder--withPadding--U9MOX","Placeholder--stretched":"Placeholder--stretched--t1fH0",Placeholder__icon:"Placeholder__icon--if6hr",Placeholder__header:"Placeholder__header--WnYo4",Placeholder__text:"Placeholder__text--V1RgX",Placeholder__action:"Placeholder__action--iajYO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Headline/Headline.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Headline--level-1--qhWG1{font-family:var(--vkui--font_headline1--font_family--regular);font-size:var(--vkui--font_headline1--font_size--regular);font-weight:var(--vkui--font_headline1--font_weight--regular);line-height:var(--vkui--font_headline1--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-1--qhWG1{font-size:var(--vkui--font_headline1--font_size--compact);line-height:var(--vkui--font_headline1--line_height--compact)}}.Headline--level-2--iu4Uh{font-family:var(--vkui--font_headline2--font_family--regular);font-size:var(--vkui--font_headline2--font_size--regular);font-weight:var(--vkui--font_headline2--font_weight--regular);line-height:var(--vkui--font_headline2--line_height--regular)}.Headline--sizeY-compact--hkUOV.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Headline--sizeY-none--eRbzg.Headline--level-2--iu4Uh{font-size:var(--vkui--font_headline2--font_size--compact);line-height:var(--vkui--font_headline2--line_height--compact)}}","",{version:3,sources:["webpack://./src/components/Typography/Headline/Headline.module.css"],names:[],mappings:"AAAA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF,CAEA,0BAIE,6DAA8D,CAH9D,yDAA0D,CAE1D,6DAA8D,CAD9D,6DAGF,CAEA,yDACE,yDAA0D,CAC1D,6DACF,CAEA,iEACE,sDACE,yDAA0D,CAC1D,6DACF,CACF",sourcesContent:[".Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--regular);\n  line-height: var(--vkui--font_headline1--line_height--regular);\n  font-weight: var(--vkui--font_headline1--font_weight--regular);\n  font-family: var(--vkui--font_headline1--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-1 {\n  font-size: var(--vkui--font_headline1--font_size--compact);\n  line-height: var(--vkui--font_headline1--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-1 {\n    font-size: var(--vkui--font_headline1--font_size--compact);\n    line-height: var(--vkui--font_headline1--line_height--compact);\n  }\n}\n\n.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--regular);\n  line-height: var(--vkui--font_headline2--line_height--regular);\n  font-weight: var(--vkui--font_headline2--font_weight--regular);\n  font-family: var(--vkui--font_headline2--font_family--regular);\n}\n\n.Headline--sizeY-compact.Headline--level-2 {\n  font-size: var(--vkui--font_headline2--font_size--compact);\n  line-height: var(--vkui--font_headline2--line_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Headline--sizeY-none.Headline--level-2 {\n    font-size: var(--vkui--font_headline2--font_size--compact);\n    line-height: var(--vkui--font_headline2--line_height--compact);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Headline--level-1":"Headline--level-1--qhWG1","Headline--sizeY-compact":"Headline--sizeY-compact--hkUOV","Headline--sizeY-none":"Headline--sizeY-none--eRbzg","Headline--level-2":"Headline--level-2--iu4Uh"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}","",{version:3,sources:["webpack://./src/components/Typography/Title/Title.module.css"],names:[],mappings:"AAAA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF",sourcesContent:[".Title--level-1 {\n  font-size: var(--vkui--font_title1--font_size--regular);\n  line-height: var(--vkui--font_title1--line_height--regular);\n  font-weight: var(--vkui--font_title1--font_weight--regular);\n  font-family: var(--vkui--font_title1--font_family--regular);\n}\n\n.Title--level-2 {\n  font-size: var(--vkui--font_title2--font_size--regular);\n  line-height: var(--vkui--font_title2--line_height--regular);\n  font-weight: var(--vkui--font_title2--font_weight--regular);\n  font-family: var(--vkui--font_title2--font_family--regular);\n}\n\n.Title--level-3 {\n  font-size: var(--vkui--font_title3--font_size--regular);\n  line-height: var(--vkui--font_title3--line_height--regular);\n  font-weight: var(--vkui--font_title3--font_weight--regular);\n  font-family: var(--vkui--font_title3--font_family--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);