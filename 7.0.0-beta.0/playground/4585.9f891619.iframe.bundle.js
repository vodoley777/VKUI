"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4585],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBase.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ImageBase__host--ND1pG{align-items:center;background-color:var(--vkui--color_background_secondary);background-size:cover;box-sizing:border-box;color:var(--vkui_internal--icon_color,var(--vkui--color_icon_secondary));display:flex;flex-shrink:0;isolation:isolate;justify-content:center;position:relative}.ImageBase__loaded--Jq4VS,.ImageBase__transparentBackground--AP8x_{background-color:initial}.ImageBase__border--PwS40,.ImageBase__children--xG9DE{block-size:100%;inline-size:100%;inset-block-start:0;inset-inline-start:0;position:absolute}.ImageBase__children--xG9DE{align-items:inherit;border-radius:inherit;display:inherit;justify-content:inherit}.ImageBase__border--PwS40{border:var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);border-radius:inherit;box-sizing:border-box;pointer-events:none;transform-origin:left top;z-index:var(--vkui_internal--z_index_image_base_border)}.ImageBase__img--YHMY7{block-size:100%;border:0;border-radius:inherit;display:block;inline-size:100%;visibility:hidden}.ImageBase__imgKeepRatio--OApie{block-size:auto;inline-size:auto}.ImageBase__imgObjectFitContain--nF7oN{object-fit:contain}.ImageBase__imgObjectFitCover--i8gns{object-fit:cover}.ImageBase__imgObjectFitNone--WubTM{object-fit:none}.ImageBase__imgObjectFitScaleDown--KLkOU{object-fit:scale-down}.ImageBase__loaded--Jq4VS .ImageBase__img--YHMY7{visibility:visible}.ImageBase__fallback--xysgc{inset-block-start:auto;inset-inline-start:auto;position:absolute}.vkuiInternalPanelHeader__before .ImageBase__host--ND1pG{-webkit-margin-start:8px;margin-inline-start:8px}.vkuiInternalPanelHeader__after .ImageBase__host--ND1pG{-webkit-margin-end:8px;margin-inline-end:8px}","",{version:3,sources:["webpack://./src/components/ImageBase/ImageBase.module.css"],names:[],mappings:"AAAA,wBAGE,kBAAmB,CAKnB,wDAAyD,CACzD,qBAAsB,CAHtB,qBAAsB,CACtB,wEAA0E,CAL1E,YAAa,CAGb,aAAc,CAKd,iBAAkB,CANlB,sBAAuB,CAHvB,iBAUF,CAEA,mEAEE,wBACF,CAEA,sDAME,eAAgB,CADhB,gBAAiB,CADjB,mBAAoB,CADpB,oBAAqB,CADrB,iBAKF,CAEA,4BAEE,mBAAoB,CAEpB,qBAAsB,CAHtB,eAAgB,CAEhB,uBAEF,CAEA,0BAKE,oFAAqF,CACrF,qBAAsB,CAHtB,qBAAsB,CAFtB,mBAAoB,CAGpB,yBAA0B,CAF1B,uDAKF,CAEA,uBAGE,eAAgB,CAChB,QAAS,CACT,qBAAsB,CAJtB,aAAc,CACd,gBAAiB,CAIjB,iBACF,CAEA,gCAEE,eAAgB,CADhB,gBAEF,CAEA,uCACE,kBACF,CAEA,qCACE,gBACF,CAEA,oCACE,eACF,CAEA,yCACE,qBACF,CAEA,iDACE,kBACF,CAEA,4BAIE,sBAAuB,CACvB,uBAAwB,CAJxB,iBAKF,CAOA,yDACE,wBAAwB,CAAxB,uBACF,CAGA,wDACE,sBAAsB,CAAtB,qBACF",sourcesContent:[".host {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-sizing: border-box;\n  color: var(--vkui_internal--icon_color, var(--vkui--color_icon_secondary));\n  background-color: var(--vkui--color_background_secondary);\n  background-size: cover;\n  isolation: isolate;\n}\n\n.loaded,\n.transparentBackground {\n  background-color: transparent;\n}\n\n.children,\n.border {\n  position: absolute;\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n.children {\n  display: inherit;\n  align-items: inherit;\n  justify-content: inherit;\n  border-radius: inherit;\n}\n\n.border {\n  pointer-events: none;\n  z-index: var(--vkui_internal--z_index_image_base_border);\n  box-sizing: border-box;\n  transform-origin: left top;\n  border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);\n  border-radius: inherit;\n}\n\n.img {\n  display: block;\n  inline-size: 100%;\n  block-size: 100%;\n  border: 0;\n  border-radius: inherit;\n  visibility: hidden;\n}\n\n.imgKeepRatio {\n  inline-size: auto;\n  block-size: auto;\n}\n\n.imgObjectFitContain {\n  object-fit: contain;\n}\n\n.imgObjectFitCover {\n  object-fit: cover;\n}\n\n.imgObjectFitNone {\n  object-fit: none;\n}\n\n.imgObjectFitScaleDown {\n  object-fit: scale-down;\n}\n\n.loaded .img {\n  visibility: visible;\n}\n\n.fallback {\n  position: absolute;\n\n  /* Расcчитываем на центрирование через родительский `display: flex` */\n  inset-block-start: auto;\n  inset-inline-start: auto;\n}\n\n/**\n * CMP:\n * PanelHeader\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalPanelHeader__before) .host {\n  margin-inline-start: 8px;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalPanelHeader__after) .host {\n  margin-inline-end: 8px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"ImageBase__host--ND1pG",loaded:"ImageBase__loaded--Jq4VS",transparentBackground:"ImageBase__transparentBackground--AP8x_",border:"ImageBase__border--PwS40",children:"ImageBase__children--xG9DE",img:"ImageBase__img--YHMY7",imgKeepRatio:"ImageBase__imgKeepRatio--OApie",imgObjectFitContain:"ImageBase__imgObjectFitContain--nF7oN",imgObjectFitCover:"ImageBase__imgObjectFitCover--i8gns",imgObjectFitNone:"ImageBase__imgObjectFitNone--WubTM",imgObjectFitScaleDown:"ImageBase__imgObjectFitScaleDown--KLkOU",fallback:"ImageBase__fallback--xysgc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.ImageBaseBadge__host--1CUAS{border-radius:50%;inset-block-end:0;inset-inline-end:0;padding:2px;position:absolute;transform:translate(2px,2px);z-index:var(--vkui_internal--z_index_image_base_badge)}.ImageBaseBadge__backgroundStroke--vhxNG{background-color:var(--vkui_internal--background,var(--vkui--color_background_content))}.ImageBaseBadge__backgroundShadow--TCgPg:before{border-radius:inherit;box-shadow:var(--vkui--elevation1);content:"";inset:2px;margin:auto;pointer-events:none;position:absolute}',"",{version:3,sources:["webpack://./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css"],names:[],mappings:"AAAA,6BAKE,iBAAkB,CADlB,iBAAkB,CADlB,kBAAmB,CAMnB,WAAY,CARZ,iBAAkB,CAOlB,4BAA8B,CAN9B,sDAQF,CAEA,yCAEE,uFACF,CAEA,gDAKE,qBAAsB,CACtB,kCAAmC,CALnC,UAAW,CAEX,SAAU,CACV,WAAY,CAGZ,mBAAoB,CALpB,iBAMF",sourcesContent:[".host {\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_image_base_badge);\n  inset-inline-end: 0;\n  inset-block-end: 0;\n  border-radius: 50%;\n\n  /* Смещаем на `padding-top` и `padding-left`, чтобы не учитывать `padding` при позиционировании. */\n  transform: translate(2px, 2px);\n  padding: 2px;\n}\n\n.backgroundStroke {\n  /* цвет фона для скрывания элементов */\n  background-color: var(--vkui_internal--background, var(--vkui--color_background_content));\n}\n\n.backgroundShadow::before {\n  content: '';\n  position: absolute;\n  inset: 2px;\n  margin: auto;\n  border-radius: inherit;\n  box-shadow: var(--vkui--elevation1);\n  pointer-events: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"ImageBaseBadge__host--1CUAS",backgroundStroke:"ImageBaseBadge__backgroundStroke--vhxNG",backgroundShadow:"ImageBaseBadge__backgroundShadow--TCgPg"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ImageBaseOverlay__host--Hmg4a{align-items:center;block-size:100%;border:0;border-radius:inherit;box-shadow:inherit;box-sizing:border-box;display:flex;inline-size:100%;inset-block-start:0;inset-inline-start:0;justify-content:center;opacity:0;position:absolute;transition:opacity .3s ease-in-out;z-index:var(--vkui_internal--z_index_image_base_overlay)}.ImageBaseOverlay__visible--dVK0w{opacity:1}@media (hover:hover) and (pointer:fine){.ImageBaseOverlay__host--Hmg4a:hover{opacity:1}}.ImageBaseOverlay__clickable--tJIlk{cursor:pointer}.ImageBaseOverlay__themeLight--KqhTy{background-color:var(--vkui--color_avatar_overlay_inverse_alpha);color:var(--vkui--color_icon_accent)}.ImageBaseOverlay__themeDark--CW2gY{background-color:var(--vkui--color_avatar_overlay);color:var(--vkui--color_icon_contrast)}","",{version:3,sources:["webpack://./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css"],names:[],mappings:"AAAA,+BAME,kBAAmB,CAInB,eAAgB,CAChB,QAAS,CACT,qBAAsB,CACtB,kBAAmB,CALnB,qBAAsB,CAHtB,YAAa,CAIb,gBAAiB,CANjB,mBAAoB,CACpB,oBAAqB,CAGrB,sBAAuB,CAOvB,SAAU,CAbV,iBAAkB,CAclB,kCAAoC,CAbpC,wDAcF,CAEA,kCACE,SACF,CAEA,wCACE,qCACE,SACF,CACF,CAEA,oCACE,cACF,CAEA,qCAEE,gEAAiE,CADjE,oCAEF,CAEA,oCAEE,kDAAmD,CADnD,sCAEF",sourcesContent:[".host {\n  position: absolute;\n  z-index: var(--vkui_internal--z_index_image_base_overlay);\n  inset-block-start: 0;\n  inset-inline-start: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n  inline-size: 100%;\n  block-size: 100%;\n  border: 0;\n  border-radius: inherit;\n  box-shadow: inherit;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.visible {\n  opacity: 1;\n}\n\n@media (--hover-has) {\n  .host:hover {\n    opacity: 1;\n  }\n}\n\n.clickable {\n  cursor: pointer;\n}\n\n.themeLight {\n  color: var(--vkui--color_icon_accent);\n  background-color: var(--vkui--color_avatar_overlay_inverse_alpha);\n}\n\n.themeDark {\n  color: var(--vkui--color_icon_contrast);\n  background-color: var(--vkui--color_avatar_overlay);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"ImageBaseOverlay__host--Hmg4a",visible:"ImageBaseOverlay__visible--dVK0w",clickable:"ImageBaseOverlay__clickable--tJIlk",themeLight:"ImageBaseOverlay__themeLight--KqhTy",themeDark:"ImageBaseOverlay__themeDark--CW2gY"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/ImageBase/ImageBase.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vO:()=>ImageBase});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts");function isNotUndefined(value){return void 0!==value}function minOr(args,defaultValue){return function fnArgsOr(fn,args,defaultValue){const definedArgs=args.filter(isNotUndefined);return definedArgs.length?fn(...definedArgs):defaultValue}(Math.min,args,defaultValue)}var utils=__webpack_require__("./src/lib/utils.ts"),Clickable=__webpack_require__("./src/components/Clickable/Clickable.tsx"),ImageBaseBadge=__webpack_require__("./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx"),ImageBaseOverlay=__webpack_require__("./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx"),context=__webpack_require__("./src/components/ImageBase/context.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBase_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBase.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBase_module.A,options);const ImageBase_ImageBase_module=ImageBase_module.A&&ImageBase_module.A.locals?ImageBase_module.A.locals:void 0,getObjectFitClassName=objectFit=>{switch(objectFit){case"contain":return ImageBase_ImageBase_module.imgObjectFitContain;case"cover":return ImageBase_ImageBase_module.imgObjectFitCover;case"none":return ImageBase_ImageBase_module.imgObjectFitNone;case"scale-down":return ImageBase_ImageBase_module.imgObjectFitScaleDown}},sizeToNumber=size=>"string"==typeof size?(value=>{if(value.endsWith("px"))return parseInt(value)})(size):size,ImageBase=({alt,crossOrigin,decoding,loading,referrerPolicy,sizes,src,srcSet,useMap,fetchPriority,getRef,size:sizeProp,width:widthImg,height:heightImg,widthSize,heightSize,style,noBorder=!1,fallbackIcon:fallbackIconProp,children,onLoad,onError,withTransparentBackground,objectFit="cover",keepAspectRatio=!1,...restProps})=>{const size=sizeProp??minOr([sizeToNumber(widthSize),sizeToNumber(heightSize)],24),width=widthSize??(keepAspectRatio?void 0:size),height=heightSize??(keepAspectRatio?void 0:size),[loaded,setLoaded]=react.useState(!1),[failed,setFailed]=react.useState(!1),hasSrc=src||srcSet,fallbackIcon=(failed||!hasSrc)&&react.isValidElement(fallbackIconProp)?fallbackIconProp:null;const imgRef=(0,useExternRef.Z)(getRef),isOnLoadStatusCheckedRef=react.useRef(!1);return react.useEffect((function dispatchLoadEventForAlreadyLoadedResourceIfReactInitializedLater(){if(!isOnLoadStatusCheckedRef.current&&(isOnLoadStatusCheckedRef.current=!0,imgRef.current&&imgRef.current.complete&&!loaded)){const event=new Event("load");imgRef.current.dispatchEvent(event)}}),[imgRef,loaded]),(0,jsx_runtime.jsx)(context.S.Provider,{value:{size},children:(0,jsx_runtime.jsxs)(Clickable.D,{style:{width,height,...style},baseClassName:(0,es6.xW)(ImageBase_ImageBase_module.host,loaded&&ImageBase_ImageBase_module.loaded,withTransparentBackground&&ImageBase_ImageBase_module.transparentBackground),...restProps,children:[hasSrc&&(0,jsx_runtime.jsx)("img",{ref:imgRef,alt,className:(0,es6.xW)(ImageBase_ImageBase_module.img,getObjectFitClassName(objectFit),keepAspectRatio&&ImageBase_ImageBase_module.imgKeepRatio),crossOrigin,decoding,loading,referrerPolicy,style:keepAspectRatio?{width:widthImg||width,height:heightImg||height}:void 0,sizes,src,srcSet,useMap,width:widthImg,height:heightImg,onLoad:event=>{loaded||(setLoaded(!0),setFailed(!1),onLoad?.(event))},onError:event=>{setLoaded(!1),setFailed(!0),onError?.(event)},...(0,utils.EV)(fetchPriority)}),fallbackIcon&&(0,jsx_runtime.jsx)("div",{className:ImageBase_ImageBase_module.fallback,children:fallbackIcon}),children&&(0,jsx_runtime.jsx)("div",{className:ImageBase_ImageBase_module.children,children}),!noBorder&&(0,jsx_runtime.jsx)("div",{"aria-hidden":!0,className:ImageBase_ImageBase_module.border})]})})};ImageBase.displayName="ImageBase",ImageBase.Badge=ImageBaseBadge.c,ImageBase.Badge.displayName="ImageBase.Badge",ImageBase.Overlay=ImageBaseOverlay.D,ImageBase.Overlay.displayName="ImageBase.Overlay";try{getBadgeIconSizeByImageBaseSize.displayName="ImageBase",getBadgeIconSizeByImageBaseSize.__docgenInfo={description:"Возвращает размер иконки основанный на дизайн-системы.",displayName:"ImageBase",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBase.tsx#ImageBase"]={docgenInfo:ImageBase.__docgenInfo,name:"ImageBase",path:"src/components/ImageBase/ImageBase.tsx#ImageBase"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>ImageBaseBadge});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBaseBadge_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBaseBadge_module.A,options);const ImageBaseBadge_ImageBaseBadge_module=ImageBaseBadge_module.A&&ImageBaseBadge_module.A.locals?ImageBaseBadge_module.A.locals:void 0;const backgroundStyles={stroke:ImageBaseBadge_ImageBaseBadge_module.backgroundStroke,shadow:ImageBaseBadge_ImageBaseBadge_module.backgroundShadow},ImageBaseBadge=({background="shadow",...restProps})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(RootComponent.I,{...restProps,baseClassName:(0,es6.xW)(ImageBaseBadge_ImageBaseBadge_module.host,backgroundStyles[background])}),!1]});ImageBaseBadge.displayName="ImageBaseBadge";try{ImageBaseBadge.displayName="ImageBaseBadge",ImageBaseBadge.__docgenInfo={description:"Бейдж в правом нижнем углу компонента.\n\n> Не используйте при `size < 24`",displayName:"ImageBaseBadge",props:{background:{defaultValue:{value:"shadow"},description:'Вид подложки под иконку.\n\n- `"stroke"` – имитирует вырез (⚠️ если фон под компонентом динамический, то ожидайте баг).\n- `"shadow"` – добавляет небольшую тень.',name:"background",required:!1,type:{name:"enum",value:[{value:'"shadow"'},{value:'"stroke"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getBadgeIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"]={docgenInfo:ImageBaseBadge.__docgenInfo,name:"ImageBaseBadge",path:"src/components/ImageBase/ImageBaseBadge/ImageBaseBadge.tsx#ImageBaseBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>ImageBaseOverlay});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityHasPointer=__webpack_require__("./src/hooks/useAdaptivityHasPointer.ts"),useAppearance=__webpack_require__("./src/hooks/useAppearance.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useFocusVisible=__webpack_require__("./src/hooks/useFocusVisible.ts"),useFocusVisibleClassName=__webpack_require__("./src/hooks/useFocusVisibleClassName.ts"),utils=__webpack_require__("./src/lib/utils.ts"),useFocusWithin=__webpack_require__("./src/hooks/useFocusWithin.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ImageBaseOverlay_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ImageBaseOverlay_module.A,options);const ImageBaseOverlay_ImageBaseOverlay_module=ImageBaseOverlay_module.A&&ImageBaseOverlay_module.A.locals?ImageBaseOverlay_module.A.locals:void 0;const ImageBaseOverlayInteractive=({children,className,getRootRef,overlayShown,...restProps})=>{const{focusVisible,...focusEvents}=(0,useFocusVisible.Y)(),focusVisibleClassNames=(0,useFocusVisibleClassName.z)({focusVisible,mode:"inside"});return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{...restProps,tabIndex:0,role:"button",className:(0,es6.xW)(ImageBaseOverlay_ImageBaseOverlay_module.clickable,(focusVisible||overlayShown)&&ImageBaseOverlay_ImageBaseOverlay_module.visible,focusVisibleClassNames,className),ref:getRootRef,onKeyDown:utils.Zm,...focusEvents,children}),!1]})},ImageBaseOverlayNonInteractive=({className,getRootRef,overlayShown:overlayShownProps,...restProps})=>{const rootRef=(0,useExternRef.Z)(getRootRef),{shown:overlayShown,onClick:onOverlayClick}=function useNonInteractiveOverlayProps(rootRef){const focusWithin=(0,useFocusWithin.R)(rootRef),[nonInteractiveFocusShown,setNonInteractiveFocusShown]=react.useState(!1);return(0,useIsomorphicLayoutEffect.E)((()=>{setNonInteractiveFocusShown(focusWithin)}),[focusWithin]),{shown:nonInteractiveFocusShown&&focusWithin,onClick:function onClick(event){event.detail>0&&setNonInteractiveFocusShown(!1)}}}(rootRef);return(0,jsx_runtime.jsx)("div",{...restProps,ref:rootRef,className:(0,es6.xW)((overlayShown||overlayShownProps)&&ImageBaseOverlay_ImageBaseOverlay_module.visible,className),onClick:onOverlayClick})},ImageBaseOverlay=({className,theme:themeProp,visibility:visibilityProp,...restProps})=>{const appearance=(0,useAppearance.K)(),hasPointer=(0,useAdaptivityHasPointer.Y)(),theme=themeProp??appearance,visibility=visibilityProp??(hasPointer?"on-hover":"always"),commonProps={className:(0,es6.xW)(ImageBaseOverlay_ImageBaseOverlay_module.host,"light"===theme&&ImageBaseOverlay_ImageBaseOverlay_module.themeLight,"dark"===theme&&ImageBaseOverlay_ImageBaseOverlay_module.themeDark,className),overlayShown:"always"===visibility};return restProps.onClick?(0,jsx_runtime.jsx)(ImageBaseOverlayInteractive,{...restProps,...commonProps}):(0,jsx_runtime.jsx)(ImageBaseOverlayNonInteractive,{...restProps,...commonProps})};ImageBaseOverlay.displayName="ImageBaseOverlay";try{ImageBaseOverlay.displayName="ImageBaseOverlay",ImageBaseOverlay.__docgenInfo={description:"Оверлей над картинкой.",displayName:"ImageBaseOverlay",props:{onClick:{defaultValue:null,description:"Обработчик взаимодействия с элементом.\nПо умолчанию сам компонент является интерактивным элементом. Передав значение равное `'undefined'` или не передав этот параметр вовсе, можно отключить\nтакое поведение, что дает возможность передавать отдельные интерактивные элементы в `children`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> 📝 Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> 📊️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactNode | ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"]={docgenInfo:ImageBaseOverlay.__docgenInfo,name:"ImageBaseOverlay",path:"src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ImageBase/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>ImageBaseContext});const ImageBaseContext=__webpack_require__("../../node_modules/react/index.js").createContext({size:0})},"./src/hooks/useAdaptivityHasPointer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>useAdaptivityHasPointer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityContext.tsx"),_useIsClient__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/useIsClient.ts");function useAdaptivityHasPointer(deferDetect=!0){const{hasPointer:hasPointerContext}=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_components_AdaptivityProvider_AdaptivityContext__WEBPACK_IMPORTED_MODULE_2__.D),needTwoPassRendering=deferDetect||void 0===hasPointerContext;return(0,_useIsClient__WEBPACK_IMPORTED_MODULE_3__.D)(!needTwoPassRendering)&&void 0===hasPointerContext?_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.Wt:hasPointerContext}},"./src/hooks/useFocusWithin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useFocusWithin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");const isFocusWithin=(ref,document)=>ref.contains(document.activeElement);function useFocusWithin(ref){const{document}=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.a4)(),[focusWithin,setFocusWithin]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>!(!ref.current||!document)&&isFocusWithin(ref.current,document)));return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.E)((function handleAutoFocus(){if(!document)return;const handleFocusOrBlurEvents=()=>{ref.current&&setFocusWithin(isFocusWithin(ref.current,document))};return handleFocusOrBlurEvents(),document.addEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.addEventListener("blur",handleFocusOrBlurEvents,{capture:!0}),()=>{document.removeEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.removeEventListener("blur",handleFocusOrBlurEvents,{capture:!0})}}),[]),focusWithin}}}]);