"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7474],{"./src/components/FloatingArrow/DefaultIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$k:()=>DefaultIcon,kA:()=>DEFAULT_ARROW_HEIGHT,ku:()=>DEFAULT_ARROW_PADDING});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const DEFAULT_ARROW_HEIGHT=8,DEFAULT_ARROW_PADDING=10,ARROW_HEIGHT_WITH_WHITE_SPACE=DEFAULT_ARROW_HEIGHT+1,DefaultIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:20,height:ARROW_HEIGHT_WITH_WHITE_SPACE,viewBox:`0 0 20 ${ARROW_HEIGHT_WITH_WHITE_SPACE}`,xmlns:"http://www.w3.org/2000/svg",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",fill:"currentColor"})});try{20..displayName="DEFAULT_ARROW_WIDTH",20..__docgenInfo={description:"Примечание 1.\n\nВ компоненте, SVG элемент `<path />` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа\nслужит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при\nизменении масштаба страницы.\n\nЧтобы исправление сработало нужно:\n1. Прибавить высоту платформы к `height` и `viewBox` SVG контейнера.\n2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через `translateY(1px)`.\n\nhttps://github.com/VKCOM/VKUI/issues/2123",displayName:"DEFAULT_ARROW_WIDTH",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"]={docgenInfo:20..__docgenInfo,name:"DEFAULT_ARROW_WIDTH",path:"src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"})}catch(__react_docgen_typescript_loader_error){}try{DefaultIcon.displayName="DefaultIcon",DefaultIcon.__docgenInfo={description:"",displayName:"DefaultIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"]={docgenInfo:DefaultIcon.__docgenInfo,name:"DefaultIcon",path:"src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingArrow/FloatingArrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FloatingArrow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),DefaultIcon=__webpack_require__("./src/components/FloatingArrow/DefaultIcon.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FloatingArrow_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FloatingArrow_module.A,options);const FloatingArrow_FloatingArrow_module=FloatingArrow_module.A&&FloatingArrow_module.A.locals?FloatingArrow_module.A.locals:void 0,placementClassNames={right:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-right"],bottom:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-bottom"],left:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-left"]},FloatingArrow=({offset,isStaticOffset,coords,iconStyle,iconClassName,placement="bottom",getRootRef,Icon=DefaultIcon.$k,...restProps})=>{const[arrowPlacement,arrowStyles]=function getArrowPositionData(placement,coords={x:0,y:0},offset=0,isStaticOffset=!1){const withOffset=isVerticalPlacement=>{const parsedCoords={x:coords.x||0,y:coords.y||0};return isVerticalPlacement?isStaticOffset?offset:parsedCoords.y+offset:isStaticOffset?offset:parsedCoords.x+offset};if(placement.startsWith("top")){const xOffsetProp=getXOffsetProp(placement,isStaticOffset);return["bottom",{top:"100%",[xOffsetProp]:withOffset(!1)}]}if(placement.startsWith("right")){const yOffsetProp=getYOffsetProp(placement,isStaticOffset);return["left",{[yOffsetProp]:withOffset(!0),left:0}]}if(placement.startsWith("bottom")){const xOffsetProp=getXOffsetProp(placement,isStaticOffset);return[void 0,{bottom:"100%",[xOffsetProp]:withOffset(!1)}]}{const yOffsetProp=getYOffsetProp(placement,isStaticOffset);return["right",{[yOffsetProp]:withOffset(!0),right:0}]}}(placement,coords,offset,isStaticOffset);return(0,jsx_runtime.jsx)("div",{ref:getRootRef,style:arrowStyles,className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.FloatingArrow,arrowPlacement&&placementClassNames[arrowPlacement]),...restProps,children:(0,jsx_runtime.jsx)(Icon,{className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.FloatingArrow__in,iconClassName),style:iconStyle})})};function getXOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"right":"left"}function getYOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"bottom":"top"}try{FloatingArrow.displayName="FloatingArrow",FloatingArrow.__docgenInfo={description:"",displayName:"FloatingArrow",props:{offset:{defaultValue:null,description:"Сдвиг стрелки относительно текущих координат.",name:"offset",required:!1,type:{name:"number"}},isStaticOffset:{defaultValue:null,description:"Включает абсолютное смещение по `offset`.",name:"isStaticOffset",required:!1,type:{name:"boolean"}},coords:{defaultValue:null,description:"",name:"coords",required:!1,type:{name:"Coords"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},iconStyle:{defaultValue:null,description:"",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},Icon:{defaultValue:{value:'(props: React.SVGAttributes<SVGSVGElement>): React.ReactNode => {\n  return (\n    <svg\n      width={DEFAULT_ARROW_WIDTH}\n      height={ARROW_HEIGHT_WITH_WHITE_SPACE}\n      viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}\n      xmlns="http://www.w3.org/2000/svg"\n      {...props}\n    >\n      <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />\n    </svg>\n  );\n}'},description:"",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"]={docgenInfo:FloatingArrow.__docgenInfo,name:"FloatingArrow",path:"src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useEffectDev.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>useEffectDev});__webpack_require__("../../node_modules/react/index.js");const useEffectDev=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js").lQ},"./src/hooks/useEnsuredControl.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>useEnsuredControl,m:()=>useCustomEnsuredControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function useEnsuredControl({onChange:onChangeProp,disabled,...props}){const[value,onChangeValue]=useCustomEnsuredControl(props);return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e=>{disabled||(onChangeValue(e.target.value),onChangeProp&&onChangeProp(e))}),[onChangeValue,onChangeProp,disabled])]}function useCustomEnsuredControl({value,defaultValue,disabled,onChange:onChangeProp}){const isControlled=void 0!==value,[localValue,setLocalValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),preservedControlledValueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.E)((()=>{preservedControlledValueRef.current=value}));const onChange=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextValue=>{if(!disabled)if((0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_1__.Tn)(nextValue))if(isControlled){if(onChangeProp){const resolvedValue=nextValue(preservedControlledValueRef.current);onChangeProp(resolvedValue)}}else setLocalValue((prevValue=>{const resolvedValue=nextValue(prevValue);return onChangeProp&&onChangeProp(resolvedValue),resolvedValue}));else onChangeProp&&onChangeProp(nextValue),isControlled||setLocalValue(nextValue)}),[disabled,isControlled,onChangeProp]);return[isControlled?value:localValue,onChange]}},"./src/hooks/useGlobalOnClickOutside.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>useGlobalOnClickOutside});__webpack_require__("../../node_modules/react/index.js");var _lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/floating-ui.utils.dom.esm.js"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");const useGlobalOnClickOutside=(callback,...refs)=>{const{document}=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.a4)();(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.E)((()=>{const someRefNotNull=refs.some((ref=>ref&&null!==ref.current));if(!document||!someRefNotNull)return;const handleClick=event=>{const targetEl=event.target;(0,_lib_dom__WEBPACK_IMPORTED_MODULE_3__.vq)(targetEl)&&refs.some((ref=>ref&&ref.current&&ref.current.contains(targetEl)))||callback(event)};return document.addEventListener("click",handleClick,{passive:!0,capture:!0}),()=>{document.removeEventListener("click",handleClick,!0)}}),[document,callback,...refs])}},"./src/hooks/usePatchChildren.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>usePatchChildren});var react=__webpack_require__("../../node_modules/react/index.js");const isFunctionExistInProps=(props,key)=>"function"==typeof props[key],getMergedSameEventsByProps=(mainProps,secondProps)=>{const result={};for(const eventName in mainProps)mainProps.hasOwnProperty(eventName)&&secondProps.hasOwnProperty(eventName)&&isFunctionExistInProps(mainProps,eventName)&&isFunctionExistInProps(secondProps,eventName)&&(result[eventName]=function mergeSameEventsByProps(...args){secondProps[eventName].apply(this,args),mainProps[eventName].apply(this,args)});return result};var utils=__webpack_require__("./src/lib/utils.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),useEffectDev=__webpack_require__("./src/hooks/useEffectDev.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts");const warn=(0,warnOnce.m)("usePatchChildrenRef"),usePatchChildren=(children,injectProps,externRef)=>{const isValidElementResult=(0,utils.Jz)(children),isDOMTypeElementResult=isValidElementResult&&(0,utils.hS)(children),isForwardedRefElementResult=isValidElementResult&&(0,utils.PX)(children),shouldUseRef=isDOMTypeElementResult||isForwardedRefElementResult,childRef=(0,useExternRef.Z)(shouldUseRef?children.ref:isValidElementResult?children.props.getRootRef:void 0,externRef),mergedEventsByInjectProps=getMergedSameEventsByProps(injectProps||{},isValidElementResult?children.props:{}),props=shouldUseRef?{ref:childRef,...injectProps,...mergedEventsByInjectProps}:isValidElementResult?{getRootRef:childRef,...injectProps,...mergedEventsByInjectProps}:void 0;return(0,useEffectDev.Q)((()=>{childRef.current||warn("Кажется, в children передан компонент, который не поддерживает свойство getRootRef. Мы не можем получить ссылку на корневой dom-элемент этого компонента","error")}),[isValidElementResult?children.type:null,childRef]),[childRef,isValidElementResult?react.cloneElement(children,props):children]}},"./src/lib/animation/fades.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>animationFadeClassNames});var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),animationFades_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/styles/animationFades.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(animationFades_module.A,options);const styles_animationFades_module=animationFades_module.A&&animationFades_module.A.locals?animationFades_module.A.locals:void 0,animationFadeClassNames={in:styles_animationFades_module["-anim-fade-in"],out:styles_animationFades_module["-anim-fade-out"]}},"./src/lib/floating/adapters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lB:()=>autoUpdateFloatingElement});var _vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/floating-ui.utils.dom.esm.js"),_customResizeObserver__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/customResizeObserver.ts");const defaultOptions={ancestorScroll:!0,ancestorResize:!0,elementResize:!1,animationFrame:!1};function autoUpdateFloatingElement(reference,floating,update,options=defaultOptions){const{elementResize=!1,...restOptions}=options,canUseResizeObserver=void 0!==window.ResizeObserver,autoUpdateLibDisposer=(0,_vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__.ll)(reference,floating,update,{...restOptions,elementResize:elementResize&&canUseResizeObserver});let observer=null;return elementResize&&!canUseResizeObserver&&(observer=new _customResizeObserver__WEBPACK_IMPORTED_MODULE_1__.S(update),(0,_dom__WEBPACK_IMPORTED_MODULE_2__.sb)(reference)&&observer.observe(reference),observer.observe(floating),observer.appendToTheDOM()),()=>{observer&&(observer.disconnect(),observer=null),autoUpdateLibDisposer()}}},"./src/lib/floating/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IH:()=>getAutoPlacementAlign,ed:()=>checkIsNotAutoPlacement,i2:()=>convertFloatingDataToReactCSSProperties,tP:()=>getArrowCoordsByMiddlewareData});__webpack_require__("../../node_modules/react/index.js");function checkIsNotAutoPlacement(placement){return!placement.startsWith("auto")}function getAutoPlacementAlign(placement){const align=placement.replace(/auto-|auto/,"");return"start"===align||"end"===align?align:null}function convertFloatingDataToReactCSSProperties(strategy,x,y,initialWidth="max-content",middlewareData){const styles={position:strategy,top:y,right:"auto",bottom:"auto",left:x};if(null!==initialWidth&&(styles.width=initialWidth),middlewareData){const hide=middlewareData.hide;hide&&hide.referenceHidden&&(styles.visibility="hidden")}return styles}const getArrowCoordsByMiddlewareData=middlewareData=>{const coords={x:0,y:0};if(middlewareData.arrow){const{x=0,y=0}=middlewareData.arrow;coords.x=x,coords.y=y}return coords}},"./src/lib/floating/useFloatingMiddlewaresBootstrap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>useFloatingMiddlewaresBootstrap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_adapters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/functions.ts");const useFloatingMiddlewaresBootstrap=({placement="bottom-start",arrowRef=null,arrow,arrowHeight,arrowPadding,sameWidth,offsetByMainAxis=0,offsetByCrossAxis=0,customMiddlewares,hideWhenReferenceHidden,disableFlipMiddleware=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const isAutoPlacement=!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.ed)(placement),middlewares=[(0,_adapters__WEBPACK_IMPORTED_MODULE_2__.cY)({crossAxis:offsetByCrossAxis,mainAxis:arrow&&arrowHeight?offsetByMainAxis+arrowHeight:offsetByMainAxis})];return isAutoPlacement?middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.RK)({alignment:(0,_functions__WEBPACK_IMPORTED_MODULE_1__.IH)(placement)})):disableFlipMiddleware||middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UU)({fallbackAxisSideDirection:"start"})),middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.BN)()),sameWidth&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.Ej)({apply({rects,elements}){Object.assign(elements.floating.style,{width:`${rects.reference.width}px`})}})),customMiddlewares&&middlewares.push(...customMiddlewares),arrow&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UE)({element:arrowRef,padding:arrowPadding})),hideWhenReferenceHidden&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.jD)()),{middlewares,strictPlacement:isAutoPlacement?void 0:placement}}),[offsetByCrossAxis,arrowRef,arrow,arrowHeight,arrowPadding,offsetByMainAxis,sameWidth,customMiddlewares,placement,hideWhenReferenceHidden,disableFlipMiddleware])},"./src/lib/floating/useFloatingWithInteractions/useFloatingWithInteractions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>useFloatingWithInteractions});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),floating_ui_utils_dom_esm=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/floating-ui.utils.dom.esm.js"),useEnsuredControl=__webpack_require__("./src/hooks/useEnsuredControl.ts"),useGlobalOnClickOutside=__webpack_require__("./src/hooks/useGlobalOnClickOutside.ts"),useStableCallback=__webpack_require__("./src/hooks/useStableCallback.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),adapters=__webpack_require__("./src/lib/floating/adapters.ts"),floating_ui_react_dom=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),functions=__webpack_require__("./src/lib/floating/functions.ts");const whileElementsMounted=(...args)=>(0,adapters.lB)(...args,{elementResize:!0}),useFloatingWithInteractions=({trigger="click",placement:placementProp="bottom",middlewares,hoverDelay=0,closeAfterClick=!1,disabled=!1,disableInteractive=!1,disableCloseOnClickOutside=!1,disableCloseOnEscKey=!1,defaultShown=!1,shown:shownProp,onShownChange:onShownChangeProp})=>{const memoizedValue=react.useMemo((()=>void 0!==shownProp?{shown:shownProp}:void 0),[shownProp]),[shownLocalState,setShownLocalState]=(0,useEnsuredControl.m)({value:memoizedValue,disabled,defaultValue:{shown:defaultShown},onChange:(0,useStableCallback.K)((({shown,reason})=>{onShownChangeProp&&onShownChangeProp(shown,reason)}))}),[shownFinalState,setShownFinalState]=react.useState((()=>shownLocalState.shown)),[willBeHide,setWillBeHide]=react.useState(!1),hasCSSAnimation=react.useRef(!1),blockMouseEnterRef=react.useRef(!1),blockFocusRef=react.useRef(!1),blurTimeoutRef=react.useRef(),handleCloseOnReferenceClickOutsideDisabled=disabled||disableCloseOnClickOutside||willBeHide||!shownLocalState.shown,handleCloseOnFloatingClickOutsideDisabled=disableInteractive||handleCloseOnReferenceClickOutsideDisabled,{triggerOnFocus,triggerOnClick,triggerOnHover}=("string"==typeof(triggerProp=trigger)?[triggerProp]:triggerProp).reduce(((result,trigger)=>{switch(trigger){case"click":return result.triggerOnClick=!0,result;case"hover":return result.triggerOnHover=!0,result;case"focus":return result.triggerOnFocus=!0,result;case"manual":return result}}),{triggerOnFocus:!1,triggerOnClick:!1,triggerOnHover:!1});var triggerProp;const{placement,x,y,strategy,refs,middlewareData}=(0,floating_ui_react_dom.we)({strategy:"fixed",placement:placementProp,middleware:middlewares,whileElementsMounted}),commitShownLocalState=react.useCallback(((nextShown,reason)=>{setShownLocalState((prevState=>prevState.shown!==nextShown||prevState.reason!==reason?{shown:nextShown,reason}:prevState))}),[setShownLocalState]),[mouseEnterDelay,mouseLeaveDelay]="number"==typeof hoverDelay?[hoverDelay,hoverDelay]:hoverDelay,showWithDelay=react.useMemo((()=>(0,es6.sg)((()=>commitShownLocalState(!0,"hover")),mouseEnterDelay)),[mouseEnterDelay,commitShownLocalState]),hideWithDelay=react.useMemo((()=>(0,es6.sg)((()=>commitShownLocalState(!1,"hover")),mouseLeaveDelay)),[mouseLeaveDelay,commitShownLocalState]),handleFocusOnReference=(0,useStableCallback.K)((()=>{shownLocalState.shown?commitShownLocalState(!1,"focus"):blockFocusRef.current?blockFocusRef.current=!1:commitShownLocalState(!0,"focus")})),handleBlurOnReference=(0,useStableCallback.K)((event=>{if(blockFocusRef.current=!1,blockMouseEnterRef.current=!1,!shownLocalState.shown)return void clearTimeout(blurTimeoutRef.current);const relatedTarget=event.relatedTarget;blurTimeoutRef.current=setTimeout((function waitWindowBlurFire(){const reference=refs.reference.current;(relatedTarget||(0,dom.HC)(reference)!==reference)&&((0,dom.gR)(refs.floating.current,relatedTarget)||(0,dom.gR)(reference,relatedTarget)||commitShownLocalState(!1,"focus"))}))})),handleClickOnReference=(0,useStableCallback.K)((()=>{"focus"!==shownLocalState.reason?commitShownLocalState(!shownLocalState.shown,"click"):commitShownLocalState(shownLocalState.shown,"click")})),handleClickOnReferenceForOnlyClose=(0,useStableCallback.K)((()=>{blockMouseEnterRef.current=!0,commitShownLocalState(!1,"click")})),handleMouseEnterOnBoth=(0,useStableCallback.K)((event=>{willBeHide&&event.currentTarget===refs.floating.current||(showWithDelay.cancel(),hideWithDelay.cancel(),blockMouseEnterRef.current||shownLocalState.shown||showWithDelay())})),handleMouseLeaveOnBothForHoverAndFocusStates=(0,useStableCallback.K)((event=>{willBeHide&&event.currentTarget===refs.floating.current||(blockFocusRef.current=!1,blockMouseEnterRef.current=!1,triggerOnHover&&(showWithDelay.cancel(),hideWithDelay.cancel(),hideWithDelay()))})),handleFloatingAnimationStart=()=>{hasCSSAnimation.current=!0},handleFloatingAnimationEnd=()=>{willBeHide&&(setShownFinalState(!1),setWillBeHide(!1))},handleOnClose=react.useCallback((()=>{blockFocusRef.current=!0,commitShownLocalState(!1,"callback")}),[commitShownLocalState]),handleRestoreFocus=react.useCallback((()=>!triggerOnFocus||blockFocusRef.current),[triggerOnFocus]),handleEscapeKeyDown=react.useCallback((()=>{blockFocusRef.current=!0,commitShownLocalState(!1,"escape-key")}),[commitShownLocalState]),handleClickOutside=react.useCallback((()=>{blockFocusRef.current=!0,commitShownLocalState(!1,"click-outside")}),[commitShownLocalState]);(0,useGlobalOnClickOutside.T)(handleClickOutside,handleCloseOnReferenceClickOutsideDisabled?null:refs.reference,handleCloseOnFloatingClickOutsideDisabled?null:refs.floating),(0,useIsomorphicLayoutEffect.E)((function setGlobalBlurForTriggerOnFocus(){if(!triggerOnFocus||!refs.reference.current)return;const handleGlobalBlur=()=>{const reference=refs.reference.current;!shownLocalState.shown&&(0,floating_ui_utils_dom_esm.sb)(reference)&&reference===(0,dom.HC)(reference)&&(blockFocusRef.current=!0)},win=(0,floating_ui_utils_dom_esm.zk)(refs.reference.current);return win.addEventListener("blur",handleGlobalBlur),()=>{win.removeEventListener("blur",handleGlobalBlur)}}),[triggerOnFocus,refs.reference,shownLocalState]),(0,useIsomorphicLayoutEffect.E)((function resolveShownStates(){if(!willBeHide&&shownLocalState.shown!==shownFinalState)return shownLocalState.shown?setShownFinalState(!0):hasCSSAnimation.current&&!willBeHide?setWillBeHide(!0):setShownFinalState(!1),()=>{clearTimeout(blurTimeoutRef.current)}}),[shownLocalState,shownFinalState,willBeHide]);const referencePropsRef=react.useRef({}),floatingPropsRef=react.useRef({style:{}});return shownFinalState&&(floatingPropsRef.current.style=(0,functions.i2)(strategy,x,y,void 0,middlewareData),disableInteractive&&(floatingPropsRef.current.style.pointerEvents="none")),triggerOnFocus&&(referencePropsRef.current.onFocus=handleFocusOnReference,referencePropsRef.current.onBlur=handleBlurOnReference),triggerOnClick&&(referencePropsRef.current.onClick=handleClickOnReference),triggerOnHover&&(referencePropsRef.current.onMouseOver=handleMouseEnterOnBoth,closeAfterClick&&!triggerOnClick&&(referencePropsRef.current.onClick=handleClickOnReferenceForOnlyClose),disableInteractive||(floatingPropsRef.current.onMouseOver=handleMouseEnterOnBoth)),(triggerOnHover||triggerOnFocus)&&(referencePropsRef.current.onMouseLeave=handleMouseLeaveOnBothForHoverAndFocusStates,disableInteractive||(floatingPropsRef.current.onMouseLeave=handleMouseLeaveOnBothForHoverAndFocusStates)),shownFinalState&&(floatingPropsRef.current.onAnimationStart=handleFloatingAnimationStart,floatingPropsRef.current.onAnimationEnd=handleFloatingAnimationEnd),{placement,shown:shownFinalState,willBeHide,refs,referenceProps:referencePropsRef.current,floatingProps:floatingPropsRef.current,middlewareData,onClose:handleOnClose,onEscapeKeyDown:!shownFinalState||disableCloseOnEscKey?void 0:handleEscapeKeyDown,onRestoreFocus:handleRestoreFocus}}},"./src/lib/floating/usePlacementChangeCallback.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePlacementChangeCallback});var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/usePrevious.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function usePlacementChangeCallback(initialPlacement,resolvedPlacement,onPlacementChange){const prevPlacement=(0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__.Z)(resolvedPlacement);(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((()=>{if(!onPlacementChange)return;(void 0===prevPlacement&&initialPlacement!==resolvedPlacement||void 0!==prevPlacement&&prevPlacement!==resolvedPlacement)&&onPlacementChange(resolvedPlacement)}),[prevPlacement,initialPlacement,resolvedPlacement,onPlacementChange])}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.FloatingArrow--kqu1P{position:absolute}.FloatingArrow__in--dtnLl{content:"";display:block;transform:translateY(1px)}.FloatingArrow--placement-right--nehGq{transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.FloatingArrow--placement-bottom--bJrMd{transform:rotate(180deg)}.FloatingArrow--placement-left--g5jJ4{transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}',"",{version:3,sources:["webpack://./src/components/FloatingArrow/FloatingArrow.module.css"],names:[],mappings:"AAAA,sBACE,iBACF,CAEA,0BACE,UAAW,CACX,aAAc,CAGd,yBACF,CAEA,uCACE,2CAA6C,CAC7C,sBACF,CAEA,wCACE,wBACF,CAEA,sCACE,6CAA+C,CAC/C,qBACF",sourcesContent:[".FloatingArrow {\n  position: absolute;\n}\n\n.FloatingArrow__in {\n  content: '';\n  display: block;\n\n  /* см. Примечание 1 в FloatingArrow.tsx. */\n  transform: translateY(1px);\n}\n\n.FloatingArrow--placement-right {\n  transform: rotate(90deg) translate(50%, -50%);\n  transform-origin: right;\n}\n\n.FloatingArrow--placement-bottom {\n  transform: rotate(180deg);\n}\n\n.FloatingArrow--placement-left {\n  transform: rotate(-90deg) translate(-50%, -50%);\n  transform-origin: left;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={FloatingArrow:"FloatingArrow--kqu1P",FloatingArrow__in:"FloatingArrow__in--dtnLl","FloatingArrow--placement-right":"FloatingArrow--placement-right--nehGq","FloatingArrow--placement-bottom":"FloatingArrow--placement-bottom--bJrMd","FloatingArrow--placement-left":"FloatingArrow--placement-left--g5jJ4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/styles/animationFades.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".-anim-fade-in--__Eff{animation:anim-fade-in--xxsS4 .1s ease-in forwards}.-anim-fade-out--j9FS6{animation:anim-fade-out--JWrSu .1s ease-out forwards}@keyframes anim-fade-in--xxsS4{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes anim-fade-out--JWrSu{0%{opacity:1}to{opacity:0}}","",{version:3,sources:["webpack://./src/styles/animationFades.module.css"],names:[],mappings:"AAAA,sBACE,kDACF,CAEA,uBACE,oDACF,CAEA,+BACE,GACE,SAAU,CACV,mBACF,CAEA,GACE,SAAU,CACV,kBACF,CACF,CACA,gCACE,GACE,SACF,CAEA,GACE,SACF,CACF",sourcesContent:[".-anim-fade-in {\n  animation: anim-fade-in 0.1s ease-in forwards;\n}\n\n.-anim-fade-out {\n  animation: anim-fade-out 0.1s ease-out forwards;\n}\n\n@keyframes anim-fade-in {\n  from {\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes anim-fade-out {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"-anim-fade-in":"-anim-fade-in--__Eff","anim-fade-in":"anim-fade-in--xxsS4","-anim-fade-out":"-anim-fade-out--j9FS6","anim-fade-out":"anim-fade-out--JWrSu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);