"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4029],{"./src/components/Header/Header.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Footnote=__webpack_require__("./src/components/Typography/Footnote/Footnote.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),Paragraph=__webpack_require__("./src/components/Typography/Paragraph/Paragraph.tsx"),Subhead=__webpack_require__("./src/components/Typography/Subhead/Subhead.tsx"),Title=__webpack_require__("./src/components/Typography/Title/Title.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Header_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Header/Header.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Header_module.A,options);const Header_Header_module=Header_module.A&&Header_module.A.locals?Header_module.A.locals:void 0,HeaderContent=({mode,size,...restProps})=>{const isLarge="large"===size;if("ios"===(0,usePlatform.V)())switch(mode){case"primary":return isLarge?(0,jsx_runtime.jsx)(Title.h,{level:"2",weight:"2",...restProps}):(0,jsx_runtime.jsx)(Title.h,{weight:"1",level:"3",...restProps});case"secondary":return(0,jsx_runtime.jsx)(Footnote.t,{weight:"1",caps:!0,...restProps});case"tertiary":return(0,jsx_runtime.jsx)(Title.h,{weight:"1",level:"3",...restProps})}switch(mode){case"primary":return isLarge?(0,jsx_runtime.jsx)(Title.h,{level:"2",weight:"2",...restProps}):(0,jsx_runtime.jsx)(Headline.$,{weight:"2",...restProps});case"secondary":return(0,jsx_runtime.jsx)(Footnote.t,{weight:"1",caps:!0,...restProps});case"tertiary":return(0,jsx_runtime.jsx)(Headline.$,{weight:"2",...restProps})}return null},stylesMode={primary:Header_Header_module["Header--mode-primary"],secondary:Header_Header_module["Header--mode-secondary"],tertiary:Header_Header_module["Header--mode-tertiary"]},Header=({mode="primary",size="regular",Component="h2",children,subtitle,subtitleComponent="span",indicator,aside,multiline,...restProps})=>(0,jsx_runtime.jsxs)(RootComponent.I,{...restProps,baseClassName:(0,es6.xW)(Header_Header_module.Header,stylesMode[mode],"large"===size&&Header_Header_module["Header--large"],(0,es6.lK)(indicator)&&Header_Header_module["Header--pi"],(0,es6.G1)(subtitle)&&Header_Header_module["Header--with-subtitle"]),children:[(0,jsx_runtime.jsxs)("div",{className:Header_Header_module.Header__main,children:[(0,jsx_runtime.jsxs)(HeaderContent,{className:Header_Header_module.Header__content,Component,mode,size,children:[(0,jsx_runtime.jsx)("span",{className:(0,es6.xW)(Header_Header_module["Header__content-in"],multiline&&Header_Header_module["Header__content--multiline"]),children}),(0,es6.G1)(indicator)&&(0,jsx_runtime.jsx)(Footnote.t,{className:Header_Header_module.Header__indicator,weight:"2",children:indicator})]}),(0,es6.G1)(subtitle)&&(0,jsx_runtime.jsx)(Subhead.L,{className:(0,es6.xW)(Header_Header_module.Header__subtitle,multiline&&Header_Header_module["Header__content--multiline"]),Component:subtitleComponent,children:subtitle})]}),(0,es6.G1)(aside)&&(0,jsx_runtime.jsx)(Paragraph.f,{className:Header_Header_module.Header__aside,Component:"span",children:aside})]});try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{mode:{defaultValue:{value:"primary"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"regular"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"large"'}]}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!1,type:{name:"ReactNode"}},subtitleComponent:{defaultValue:{value:"span"},description:"",name:"subtitleComponent",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},aside:{defaultValue:null,description:"Допускаются иконки, текст, Link",name:"aside",required:!1,type:{name:"ReactNode"}},indicator:{defaultValue:null,description:"Допускаются текст, Indicator",name:"indicator",required:!1,type:{name:"ReactNode"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:{value:"h2"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Header/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"src/components/Header/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typography/Title/Title.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Title});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Typography=__webpack_require__("./src/components/Typography/Typography.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Title_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Title_module.A,options);const Title_Title_module=Title_module.A&&Title_module.A.locals?Title_module.A.locals:void 0,stylesLevel={1:Title_Title_module["Title--level-1"],2:Title_Title_module["Title--level-2"],3:Title_Title_module["Title--level-3"]},Title=({className,level="1",Component="span",normalize=!0,inline=!1,...restProps})=>(0,jsx_runtime.jsx)(Typography.o,{Component,normalize,inline,className:(0,es6.xW)(className,stylesLevel[level]),...restProps});try{Title.displayName="Title",Title.__docgenInfo={description:"Используется для заголовков.",displayName:"Title",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Делает блок инлайновым",name:"inline",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Title/Title.tsx#Title"]={docgenInfo:Title.__docgenInfo,name:"Title",path:"src/components/Typography/Title/Title.tsx#Title"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Header/Header.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Header--xYejq{align-items:flex-start;display:flex;font-family:var(--vkui--font_family_base);padding:0;padding-inline:var(--vkui--size_base_padding_horizontal--regular)}.Header__main--WGcLg{color:var(--vkui--color_text_primary);flex:1 0 0;min-inline-size:0}.Header__content--btNrK{align-items:center;display:flex}.Header__content-in--mYuOW,.Header__subtitle--xhrNH{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.Header__content--multiline--M_cMx{white-space:normal;word-break:break-word}.Header__subtitle--xhrNH{display:block}.Header--mode-secondary--unwq1:not(.Header--pi--rX8p5):not(.Header--with-subtitle--UfjfP) .Header__main--WGcLg,.Header--mode-tertiary--CqtZn .Header__main--WGcLg,.Header__indicator--TEzGR,.Header__subtitle--xhrNH{color:var(--vkui--color_text_secondary)}.Header__indicator--TEzGR{-webkit-margin-start:6px;flex-shrink:0;margin-inline-start:6px}.Header--mode-primary--X6pOe .Header__indicator--TEzGR{color:var(--vkui--color_text_subhead)}.Header--xYejq:not(.Header--pi--rX8p5) .Header__indicator--TEzGR{align-self:center}.Header--mode-secondary--unwq1 .Header__indicator--TEzGR{-webkit-margin-start:8px;margin-inline-start:8px}.Header__aside--qM2Xi{display:flex;white-space:nowrap}.Header__aside--qM2Xi.Header__aside--qM2Xi>*{margin-block:13px 7px;-webkit-margin-start:12px;margin-inline-start:12px}.Header__aside--qM2Xi>.vkuiIcon{color:var(--vkui--color_icon_secondary);position:relative}.Header__aside--qM2Xi>.vkuiIcon--24{margin-block:11px 5px}.Header__aside--qM2Xi>.vkuiIcon--16{margin-block:15px 9px}.Header--mode-primary--X6pOe{padding-block:3px 1px}.Header__content--btNrK{-webkit-margin-before:12px;margin-block-start:12px}.Header__content--btNrK:last-child{-webkit-margin-after:8px;margin-block-end:8px}.Header--mode-tertiary--CqtZn .Header__content--btNrK{-webkit-margin-before:15px;margin-block-start:15px}.Header--mode-tertiary--CqtZn .Header__content--btNrK:last-child{-webkit-margin-after:9px;margin-block-end:9px}.Header__subtitle--xhrNH{-webkit-margin-after:7px;margin-block-end:7px}.Header--mode-primary--X6pOe .Header__subtitle--xhrNH{-webkit-margin-after:6px;margin-block-end:6px}.Header--large--_dsZ4 .Header__content--btNrK{margin-block:10px 6px}.vkuiInternalGroup--mode-plain:not(:first-of-type)>.Header--xYejq:first-child,.vkuiInternalGroup--mode-plain:not(:first-of-type)>.vkuiInternalTappable:first-child>.Header--xYejq{-webkit-margin-before:-16px;margin-block-start:-16px}@media (max-width:767.9px){.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none:not(:first-of-type)>.Header--xYejq:first-child,.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none:not(:first-of-type)>.vkuiInternalTappable:first-child>.Header--xYejq{-webkit-margin-before:-16px;margin-block-start:-16px}}.vkuiInternalGroup--mode-card>.Header--xYejq:not(.Header--mode-tertiary--CqtZn):first-child,.vkuiInternalGroup--mode-card>.vkuiInternalTappable:first-child>.Header--xYejq:not(.Header--mode-tertiary--CqtZn){-webkit-margin-before:-4px;margin-block-start:-4px}@media (min-width:768px){.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none>.Header--xYejq:not(.Header--mode-tertiary--CqtZn):first-child,.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none>.vkuiInternalTappable:first-child>.Header--xYejq:not(.Header--mode-tertiary--CqtZn){-webkit-margin-before:-4px;margin-block-start:-4px}}.Header__aside--qM2Xi{--vkui_internal--link-color:var(--vkui--color_text_accent)}","",{version:3,sources:["webpack://./src/components/Header/Header.module.css"],names:[],mappings:"AAAA,eAEE,sBAAuB,CADvB,YAAa,CAIb,yCAA0C,CAF1C,SAAU,CACV,iEAEF,CAEA,qBAGE,qCAAsC,CAFtC,UAAW,CACX,iBAEF,CAEA,wBAEE,kBAAmB,CADnB,YAEF,CAEA,oDAIE,eAAgB,CAFhB,sBAAuB,CACvB,kBAEF,CAEA,mCACE,kBAAoB,CACpB,qBACF,CAEA,yBACE,aAEF,CAOA,qNARE,uCAYF,CAJA,0BAEE,wBAAwB,CACxB,aAAc,CADd,uBAEF,CAEA,uDACE,qCACF,CAEA,iEACE,iBACF,CAEA,yDACE,wBAAwB,CAAxB,uBACF,CAEA,sBACE,YAAa,CACb,kBACF,CAGA,6CACE,qBAAsB,CACtB,yBAAyB,CAAzB,wBACF,CAGA,gCAEE,uCAAwC,CADxC,iBAEF,CAGA,oCACE,qBACF,CAGA,oCACE,qBACF,CAEA,6BACE,qBACF,CAEA,wBACE,0BAAwB,CAAxB,uBACF,CAEA,mCACE,wBAAqB,CAArB,oBACF,CAEA,sDACE,0BAAwB,CAAxB,uBACF,CAEA,iEACE,wBAAqB,CAArB,oBACF,CAEA,yBACE,wBAAqB,CAArB,oBACF,CAGA,sDACE,wBAAqB,CAArB,oBACF,CAEA,8CACE,qBACF,CASA,kLAIE,2BAAyB,CAAzB,wBACF,CAEA,2BAEE,4OAKE,2BAAyB,CAAzB,wBACF,CACF,CAGA,8MAIE,0BAAwB,CAAxB,uBACF,CAEA,yBAEE,0QAKE,0BAAwB,CAAxB,uBACF,CACF,CAMA,sBACE,0DACF",sourcesContent:[".Header {\n  display: flex;\n  align-items: flex-start;\n  padding: 0;\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n  font-family: var(--vkui--font_family_base);\n}\n\n.Header__main {\n  flex: 1 0 0;\n  min-inline-size: 0;\n  color: var(--vkui--color_text_primary);\n}\n\n.Header__content {\n  display: flex;\n  align-items: center;\n}\n\n.Header__content-in,\n.Header__subtitle {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.Header__content--multiline {\n  white-space: initial;\n  word-break: break-word;\n}\n\n.Header__subtitle {\n  display: block;\n  color: var(--vkui--color_text_secondary);\n}\n\n.Header--mode-secondary:not(.Header--pi):not(.Header--with-subtitle) .Header__main,\n.Header--mode-tertiary .Header__main {\n  color: var(--vkui--color_text_secondary);\n}\n\n.Header__indicator {\n  color: var(--vkui--color_text_secondary);\n  margin-inline-start: 6px;\n  flex-shrink: 0;\n}\n\n.Header--mode-primary .Header__indicator {\n  color: var(--vkui--color_text_subhead);\n}\n\n.Header:not(.Header--pi) .Header__indicator {\n  align-self: center;\n}\n\n.Header--mode-secondary .Header__indicator {\n  margin-inline-start: 8px;\n}\n\n.Header__aside {\n  display: flex;\n  white-space: nowrap;\n}\n\n/* stylelint-disable selector-max-universal */\n.Header__aside.Header__aside > * {\n  margin-block: 13px 7px;\n  margin-inline-start: 12px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.Header__aside > :global(.vkuiIcon) {\n  position: relative;\n  color: var(--vkui--color_icon_secondary);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.Header__aside > :global(.vkuiIcon--24) {\n  margin-block: 11px 5px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.Header__aside > :global(.vkuiIcon--16) {\n  margin-block: 15px 9px;\n}\n\n.Header--mode-primary {\n  padding-block: 3px 1px;\n}\n\n.Header__content {\n  margin-block-start: 12px;\n}\n\n.Header__content:last-child {\n  margin-block-end: 8px;\n}\n\n.Header--mode-tertiary .Header__content {\n  margin-block-start: 15px;\n}\n\n.Header--mode-tertiary .Header__content:last-child {\n  margin-block-end: 9px;\n}\n\n.Header__subtitle {\n  margin-block-end: 7px;\n}\n\n/* Компенсируем 1 пиксель из-за паддинга в .Header--mode-primary */\n.Header--mode-primary .Header__subtitle {\n  margin-block-end: 6px;\n}\n\n.Header--large .Header__content {\n  margin-block: 10px 6px;\n}\n\n/**\n * CMP:\n * Group\n *\n * TODO: Переделать отрицательные отступы https://github.com/VKCOM/VKUI/issues/3508\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-plain):not(:first-of-type) > .Header:first-child,\n:global(.vkuiInternalGroup--mode-plain):not(:first-of-type)\n  > :global(.vkuiInternalTappable):first-child\n  > .Header {\n  margin-block-start: -16px;\n}\n\n@media (--sizeX-compact) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none):not(:first-of-type)\n    > .Header:first-child,\n  :global(.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none):not(:first-of-type)\n    > :global(.vkuiInternalTappable):first-child\n    > .Header {\n    margin-block-start: -16px;\n  }\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalGroup--mode-card) > .Header:not(.Header--mode-tertiary):first-child,\n:global(.vkuiInternalGroup--mode-card)\n  > :global(.vkuiInternalTappable):first-child\n  > .Header:not(.Header--mode-tertiary) {\n  margin-block-start: -4px;\n}\n\n@media (--sizeX-regular) {\n  /* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n  :global(.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none)\n    > .Header:not(.Header--mode-tertiary):first-child,\n  :global(.vkuiInternalGroup--sizeX-none.vkuiInternalGroup--mode-none)\n    > :global(.vkuiInternalTappable):first-child\n    > .Header:not(.Header--mode-tertiary) {\n    margin-block-start: -4px;\n  }\n}\n\n/**\n * Impact:\n * Link\n */\n.Header__aside {\n  --vkui_internal--link-color: var(--vkui--color_text_accent);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Header:"Header--xYejq",Header__main:"Header__main--WGcLg",Header__content:"Header__content--btNrK","Header__content-in":"Header__content-in--mYuOW",Header__subtitle:"Header__subtitle--xhrNH","Header__content--multiline":"Header__content--multiline--M_cMx","Header--mode-secondary":"Header--mode-secondary--unwq1","Header--pi":"Header--pi--rX8p5","Header--with-subtitle":"Header--with-subtitle--UfjfP","Header--mode-tertiary":"Header--mode-tertiary--CqtZn",Header__indicator:"Header__indicator--TEzGR","Header--mode-primary":"Header--mode-primary--X6pOe",Header__aside:"Header__aside--qM2Xi","Header--large":"Header--large--_dsZ4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Typography/Title/Title.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Title--level-1--TJIWX{font-family:var(--vkui--font_title1--font_family--regular);font-size:var(--vkui--font_title1--font_size--regular);font-weight:var(--vkui--font_title1--font_weight--regular);line-height:var(--vkui--font_title1--line_height--regular)}.Title--level-2--btQdj{font-family:var(--vkui--font_title2--font_family--regular);font-size:var(--vkui--font_title2--font_size--regular);font-weight:var(--vkui--font_title2--font_weight--regular);line-height:var(--vkui--font_title2--line_height--regular)}.Title--level-3--eS9fO{font-family:var(--vkui--font_title3--font_family--regular);font-size:var(--vkui--font_title3--font_size--regular);font-weight:var(--vkui--font_title3--font_weight--regular);line-height:var(--vkui--font_title3--line_height--regular)}","",{version:3,sources:["webpack://./src/components/Typography/Title/Title.module.css"],names:[],mappings:"AAAA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF,CAEA,uBAIE,0DAA2D,CAH3D,sDAAuD,CAEvD,0DAA2D,CAD3D,0DAGF",sourcesContent:[".Title--level-1 {\n  font-size: var(--vkui--font_title1--font_size--regular);\n  line-height: var(--vkui--font_title1--line_height--regular);\n  font-weight: var(--vkui--font_title1--font_weight--regular);\n  font-family: var(--vkui--font_title1--font_family--regular);\n}\n\n.Title--level-2 {\n  font-size: var(--vkui--font_title2--font_size--regular);\n  line-height: var(--vkui--font_title2--line_height--regular);\n  font-weight: var(--vkui--font_title2--font_weight--regular);\n  font-family: var(--vkui--font_title2--font_family--regular);\n}\n\n.Title--level-3 {\n  font-size: var(--vkui--font_title3--font_size--regular);\n  line-height: var(--vkui--font_title3--line_height--regular);\n  font-weight: var(--vkui--font_title3--font_weight--regular);\n  font-family: var(--vkui--font_title3--font_family--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"Title--level-1":"Title--level-1--TJIWX","Title--level-2":"Title--level-2--btQdj","Title--level-3":"Title--level-3--eS9fO"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);