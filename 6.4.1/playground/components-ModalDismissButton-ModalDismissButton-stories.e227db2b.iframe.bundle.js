"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2827],{"./src/components/ModalDismissButton/ModalDismissButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Modals/ModalDismissButton",component:__webpack_require__("./src/components/ModalDismissButton/ModalDismissButton.tsx").w,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eC}},Playground={decorators:[Component=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{position:"relative"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component,{onClick:_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.lQ})})]},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  decorators: [Component => <div style={{\n    position: 'relative'\n  }}>\n        <Component onClick={noop} />\n      </div>]\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/20/cancel_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Icon20Cancel});var Icon20Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20Cancel","cancel_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="cancel_20"><path fill="currentColor" fill-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.ModalDismissButton--wR4Ll{block-size:56px;box-sizing:border-box;color:var(--vkui--color_icon_contrast);inline-size:56px;inset-block-start:0;inset-inline-end:-56px;padding:18px;position:absolute}.ModalDismissButton--wR4Ll:before{background:var(--vkui--color_overlay_secondary);border-radius:50%;content:"";display:block;inset:14px;position:absolute;transition:background-color .15s ease-out}.ModalDismissButton--wR4Ll .vkuiIcon{transform:translateX(0)}.ModalDismissButton--hover--NGjCj:before{background:var(--vkui--color_overlay_secondary--hover)}.ModalDismissButton--active--fSG9o:before{background:var(--vkui--color_overlay_secondary--active)}',"",{version:3,sources:["webpack://./src/components/ModalDismissButton/ModalDismissButton.module.css"],names:[],mappings:"AAAA,2BAKE,eAAgB,CAEhB,qBAAsB,CACtB,sCAAuC,CAJvC,gBAAiB,CAFjB,mBAAoB,CACpB,sBAAuB,CAGvB,YAAa,CALb,iBAQF,CAEA,kCAIE,+CAAgD,CAChD,iBAAkB,CAHlB,UAAW,CADX,aAAc,CAEd,UAAW,CAGX,iBAAkB,CAClB,yCACF,CAGA,qCACE,uBACF,CAEA,yCACE,sDACF,CAEA,0CACE,uDACF",sourcesContent:[".ModalDismissButton {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-end: -56px;\n  inline-size: 56px;\n  block-size: 56px;\n  padding: 18px;\n  box-sizing: border-box;\n  color: var(--vkui--color_icon_contrast);\n}\n\n.ModalDismissButton::before {\n  display: block;\n  content: '';\n  inset: 14px;\n  background: var(--vkui--color_overlay_secondary);\n  border-radius: 50%;\n  position: absolute;\n  transition: background-color 0.15s ease-out;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list -- fixes icon misplacement on Safari in some cases */\n.ModalDismissButton :global(.vkuiIcon) {\n  transform: translateX(0);\n}\n\n.ModalDismissButton--hover::before {\n  background: var(--vkui--color_overlay_secondary--hover);\n}\n\n.ModalDismissButton--active::before {\n  background: var(--vkui--color_overlay_secondary--active);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ModalDismissButton:"ModalDismissButton--wR4Ll","ModalDismissButton--hover":"ModalDismissButton--hover--NGjCj","ModalDismissButton--active":"ModalDismissButton--active--fSG9o"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Tappable/Tappable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular);isolation:isolate;position:relative}.Tappable--SKpjX>*{position:relative;z-index:var(--vkui_internal--z_index_tappable_element)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;inset:0;overflow:hidden;position:absolute;transition:background-color .15s ease-out;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);block-size:24px;border-radius:50%;content:"";inline-size:24px;inset-block-start:0;inset-inline-start:0;margin-block:-12px 0;margin-inline:0 -12px;opacity:0;position:absolute}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',"",{version:3,sources:["webpack://./src/components/Tappable/Tappable.module.css"],names:[],mappings:"AAAA,iBAGE,sDAAuD,CAFvD,iBAAkB,CAClB,iBAEF,CAYA,mBACE,iBAAkB,CAClB,sDACF,CAKA,gCACE,eACF,CAEA,2BACE,6BACE,eACF,CACF,CAEA,sDACE,qBACF,CAKA,6BAKE,qBAAsB,CAFtB,OAAQ,CACR,eAAgB,CAFhB,iBAAkB,CAIlB,yCAA2C,CAL3C,oDAMF,CAKA,4DACE,8CACF,CAEA,uCACE,2DACE,8CACF,CACF,CAEA,kEACE,sDACF,CAEA,oEACE,uDACF,CAEA,sEAEE,gCACF,CAEA,kCACE,UACF,CAEA,oCACE,UACF,CAEA,uBAYE,0EAAqE,CADrE,iDAAkD,CANlD,eAAgB,CAKhB,iBAAkB,CADlB,UAAW,CALX,gBAAiB,CAFjB,mBAAoB,CACpB,oBAAqB,CAGrB,oBAAqB,CACrB,qBAAsB,CACtB,SAAU,CAPV,iBAYF,CAKA,iCACE,GAEE,SAAU,CADV,kBAEF,CAEA,IACE,SACF,CAEA,GAEE,SAAU,CADV,kBAEF,CACF",sourcesContent:[".Tappable {\n  isolation: isolate;\n  position: relative;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/*\nПросто поменять местами элементы внутри Tappable нельзя:\n\n- некоторые элементы завязаны на :last-child и :first-child\n- необходимо чтобы все элементы были позиционированные\n\nhttps://developer.mozilla.org/ru/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index\nhttps://github.com/VKCOM/VKUI/pull/3641\n*/\n/* stylelint-disable-next-line selector-max-universal */\n.Tappable > * {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_tappable_element);\n}\n\n/**\n * overrides\n */\n.Tappable--sizeX-compact {\n  border-radius: 0;\n}\n\n@media (--sizeX-compact) {\n  .Tappable--sizeX-none {\n    border-radius: 0;\n  }\n}\n\n.Tappable.Tappable--borderRadiusInherit {\n  border-radius: inherit;\n}\n\n/**\n * hover & active state\n */\n.Tappable__stateLayer {\n  z-index: var(--vkui_internal--z_index_tappable_state);\n  position: absolute;\n  inset: 0;\n  overflow: hidden;\n  border-radius: inherit;\n  transition: background-color 0.15s ease-out;\n}\n\n/**\n * Задерживаем отрисовку background-color\n */\n.Tappable--hasPointer-false .Tappable__ripple {\n  transition: background-color 0.15s 0.15s ease-out;\n}\n\n@media (--pointer-has-not) {\n  .Tappable--hasPointer-none .Tappable__ripple {\n    transition: background-color 0.15s 0.15s ease-out;\n  }\n}\n\n.Tappable--hovered-background > .Tappable__stateLayer {\n  background-color: var(--vkui--color_transparent--hover);\n}\n\n.Tappable--activated-background > .Tappable__stateLayer {\n  background-color: var(--vkui--color_transparent--active);\n}\n\n.Tappable--hovered-opacity,\n.Tappable--activated-opacity {\n  transition: opacity 0.15s ease-out;\n}\n\n.Tappable--hovered-opacity {\n  opacity: 0.8;\n}\n\n.Tappable--activated-opacity {\n  opacity: 0.7;\n}\n\n.Tappable__wave {\n  position: absolute;\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  inline-size: 24px;\n  block-size: 24px;\n  margin-block: -12px 0;\n  margin-inline: 0 -12px;\n  opacity: 0;\n  content: '';\n  border-radius: 50%;\n  background: var(--vkui--color_transparent--active);\n  animation: animation-wave 0.3s var(--vkui--animation_easing_platform);\n}\n\n/**\n * Animations\n */\n@keyframes animation-wave {\n  0% {\n    transform: scale(1);\n    opacity: 1;\n  }\n\n  30% {\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(8);\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{block-size:1px!important;inline-size:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{block-size:100%!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,wBAA0B,CAC1B,yBAA2B,CAE3B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAC9B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,yBAA2B,CAC3B,0BAA4B,CAF5B,mBAAoB,CADpB,oBAAqB,CAIrB,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/ModalDismissButton/ModalDismissButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>ModalDismissButton});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),cancel_20=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/20/cancel_20.js")),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ModalDismissButton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ModalDismissButton/ModalDismissButton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ModalDismissButton_module.A,options);const ModalDismissButton_ModalDismissButton_module=ModalDismissButton_module.A&&ModalDismissButton_module.A.locals?ModalDismissButton_module.A.locals:void 0,ModalDismissButton=({children="Закрыть",className,...restProps})=>(0,jsx_runtime.jsxs)(Tappable.S,{className:(0,es6.xW)(ModalDismissButton_ModalDismissButton_module.ModalDismissButton,className),...restProps,activeMode:ModalDismissButton_ModalDismissButton_module["ModalDismissButton--active"],hoverMode:ModalDismissButton_ModalDismissButton_module["ModalDismissButton--hover"],children:[children&&(0,jsx_runtime.jsx)(VisuallyHidden.s,{children}),(0,jsx_runtime.jsx)(cancel_20.Y,{})]});try{ModalDismissButton.displayName="ModalDismissButton",ModalDismissButton.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"]={docgenInfo:ModalDismissButton.__docgenInfo,name:"ModalDismissButton",path:"src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Tappable/Tappable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>Tappable});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),constants=__webpack_require__("./src/lib/adaptivity/constants.ts"),mergeCalls=__webpack_require__("./src/lib/mergeCalls.ts"),Clickable=__webpack_require__("./src/components/Clickable/Clickable.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Tappable_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Tappable/Tappable.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tappable_module.A,options);const Tappable_Tappable_module=Tappable_module.A&&Tappable_module.A.locals?Tappable_module.A.locals:void 0,useMaybeNeedRipple=(activeMode,hasPointer)=>"android"===(0,usePlatform.V)()&&!hasPointer&&"background"===activeMode,useRipple=(needRipple,hasPointerContext)=>{const[clicks,setClicks]=react.useState([]),pointerDelayTimers=react.useMemo((()=>new Map),[]);react.useEffect((function setClearClicksTimeout(){const clicksTimeoutId=clicks.length>0?setTimeout((()=>setClicks([])),225):null;return function cancelClearClicksTimeout(){clicksTimeoutId&&clearTimeout(clicksTimeoutId)}}),[clicks]);const reallyNeedRipple=(!es6.Wt||!1===hasPointerContext)&&needRipple;return{clicks,onPointerDown:reallyNeedRipple?e=>{const{top,left}=function getOffsetRect(elem){const box=elem?.getBoundingClientRect();return{top:box?.top,left:box?.left,width:elem?.offsetWidth,height:elem?.offsetHeight}}(e.currentTarget),x=e.clientX-(left??0),y=e.clientY-(top??0);pointerDelayTimers.set(e.pointerId,setTimeout((()=>function addClick(x,y,pointerId){const dateNow=Date.now(),filteredClicks=clicks.filter((click=>click.id+225>dateNow));setClicks([...filteredClicks,{x,y,id:dateNow,pointerId}]),pointerDelayTimers.delete(pointerId)}(x,y,e.pointerId)),70))}:es6.lQ,onPointerCancel:reallyNeedRipple?e=>{const timer=pointerDelayTimers.get(e.pointerId);clearTimeout(timer),pointerDelayTimers.delete(e.pointerId)}:es6.lQ}},Ripple=({needRipple=!0,clicks})=>(0,jsx_runtime.jsx)("span",{"aria-hidden":!0,className:(0,es6.xW)(Tappable_Tappable_module.Tappable__stateLayer,needRipple&&Tappable_Tappable_module.Tappable__ripple),children:clicks.map((wave=>(0,jsx_runtime.jsx)("span",{className:Tappable_Tappable_module.Tappable__wave,style:{top:wave.y,left:wave.x}},wave.id)))});try{useMaybeNeedRipple.displayName="useMaybeNeedRipple",useMaybeNeedRipple.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:useMaybeNeedRipple.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(__react_docgen_typescript_loader_error){}try{useRipple.displayName="useRipple",useRipple.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:useRipple.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(__react_docgen_typescript_loader_error){}try{Ripple.displayName="Ripple",Ripple.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:Ripple.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(__react_docgen_typescript_loader_error){}const stylesHovered={background:Tappable_Tappable_module["Tappable--hovered-background"],opacity:Tappable_Tappable_module["Tappable--hovered-opacity"],none:""};function hoverClass(hoverMode="background"){const presetClass=stylesHovered[hoverMode];return void 0!==presetClass?presetClass:hoverMode}const stylesActivated={background:Tappable_Tappable_module["Tappable--activated-background"],opacity:Tappable_Tappable_module["Tappable--activated-opacity"],none:""};function activeClass(activeMode="background"){const presetClass=stylesActivated[activeMode];return void 0!==presetClass?presetClass:activeMode}try{hoverClass.displayName="hoverClass",hoverClass.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:hoverClass.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(__react_docgen_typescript_loader_error){}try{activeClass.displayName="activeClass",activeClass.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:activeClass.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(__react_docgen_typescript_loader_error){}try{"background".displayName="DEFAULT_STATE_MODE","background".__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:"background".__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(__react_docgen_typescript_loader_error){}const sizeXClassNames={none:Tappable_Tappable_module["Tappable--sizeX-none"],compact:Tappable_Tappable_module["Tappable--sizeX-compact"]};function hasPointerClassName(hasPointer){switch(hasPointer){case void 0:return Tappable_Tappable_module["Tappable--hasPointer-none"];case!1:return Tappable_Tappable_module["Tappable--hasPointer-false"]}}const Tappable=({baseClassName,borderRadiusMode="auto",children,hoverMode="background",activeMode="background",onPointerDown,onPointerCancel,...restProps})=>{const isClickable=(0,Clickable.J)(restProps),{sizeX="none",hasPointer}=(0,useAdaptivity.L)(),needRipple=useMaybeNeedRipple(activeMode,hasPointer),{clicks,...rippleEvents}=useRipple(needRipple,hasPointer),handlers=(0,mergeCalls.i)(rippleEvents,{onPointerDown,onPointerCancel}),typeProps="button"===restProps.Component?{type:"button"}:{};return(0,jsx_runtime.jsxs)(Clickable.D,{baseClassName:(0,es6.xW)(baseClassName,Tappable_Tappable_module.Tappable,sizeX!==constants.qA.REGULAR&&sizeXClassNames[sizeX],"inherit"===borderRadiusMode&&Tappable_Tappable_module["Tappable--borderRadiusInherit"],hasPointerClassName(hasPointer)),hoverClassName:hoverClass(hoverMode),activeClassName:activeClass(activeMode),...typeProps,...handlers,...restProps,children:[children,isClickable&&("background"===hoverMode||"background"===activeMode)&&(0,jsx_runtime.jsx)(Ripple,{needRipple,clicks})]})};try{Tappable.displayName="Tappable",Tappable.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:Tappable.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHidden_module.A,options);const VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.A&&VisuallyHidden_module.A.locals?VisuallyHidden_module.A.locals:void 0,VisuallyHidden=({Component="span",...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{Component,...restProps,baseClassName:(0,es6.xW)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])});try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}}}]);