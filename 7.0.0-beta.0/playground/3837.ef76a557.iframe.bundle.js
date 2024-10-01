"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3837],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/HorizontalScroll/HorizontalScroll.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.HorizontalScroll__host--UjSnj{isolation:isolate;overflow-x:hidden;position:relative}.HorizontalScroll__in--IpS3N{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}.HorizontalScroll__in--IpS3N::-webkit-scrollbar{display:none}.HorizontalScroll__inWrapper--rjuxp{align-items:stretch;display:flex;transition:transform .2s}.HorizontalScroll__arrow--vwwtj{inset-block-start:0;opacity:0;position:absolute;z-index:var(--vkui_internal--z_index_horizontal_scroll_arrow)}.HorizontalScroll__host--UjSnj:hover .HorizontalScroll__arrow--vwwtj{opacity:var(--vkui--opacity_disable_accessibility)}.HorizontalScroll__host--UjSnj .HorizontalScroll__arrow--vwwtj:hover,.HorizontalScroll__withConstArrows--N714e .HorizontalScroll__arrow--vwwtj,.HorizontalScroll__withConstArrows--N714e:hover .HorizontalScroll__arrow--vwwtj{opacity:1}.HorizontalScroll__arrowLeft--sgrQm:hover~.HorizontalScroll__in--IpS3N .HorizontalScroll__inWrapper--rjuxp{transform:translateX(8px)}.HorizontalScroll__arrowRight--tdPng:hover~.HorizontalScroll__in--IpS3N .HorizontalScroll__inWrapper--rjuxp{transform:translateX(-8px)}.vkuiInternalTabs .HorizontalScroll__host--UjSnj{min-inline-size:100%}.vkuiInternalTabs--withGaps .HorizontalScroll__inWrapper--rjuxp:after,.vkuiInternalTabs--withGaps .HorizontalScroll__inWrapper--rjuxp:before{block-size:1px;content:"";display:block;flex-shrink:0;inline-size:var(--vkui--size_base_padding_horizontal--regular)}',"",{version:3,sources:["webpack://./src/components/HorizontalScroll/HorizontalScroll.module.css"],names:[],mappings:"AAAA,+BAQE,iBAAkB,CADlB,iBAAkB,CANlB,iBAQF,CAEA,6BACE,eAAgB,CAChB,gCAAiC,CAMjC,oBACF,CAEA,gDACE,YACF,CAEA,oCAEE,mBAAoB,CADpB,YAAa,CAEb,wBACF,CAEA,gCAGE,mBAAoB,CACpB,SAAU,CAFV,iBAAkB,CADlB,6DAIF,CAEA,qEACE,kDACF,CAEA,+NAGE,SACF,CAEA,2GACE,yBACF,CAEA,4GACE,0BACF,CAOA,iDACE,oBACF,CAGA,6IAKE,cAAe,CACf,UAAW,CAJX,aAAc,CAEd,aAAc,CADd,8DAIF",sourcesContent:[".host {\n  position: relative;\n\n  /**\n   * ⚠️ WARNING ⚠️\n   * `overflow-y` мы не трогаем, т.к. из-за `hidden` могут обрезаться тени у потомков.\n   */\n  overflow-x: hidden;\n  isolation: isolate;\n}\n\n.in {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  /**\n   * Для удаление скролла в Firefox.\n   * В версии ниже 64 будет виден скролл, но это не ломает функциональность.\n   */\n  scrollbar-width: none;\n}\n\n.in::-webkit-scrollbar {\n  display: none;\n}\n\n.inWrapper {\n  display: flex;\n  align-items: stretch;\n  transition: transform 0.2s;\n}\n\n.arrow {\n  z-index: var(--vkui_internal--z_index_horizontal_scroll_arrow);\n  position: absolute;\n  inset-block-start: 0;\n  opacity: 0;\n}\n\n.host:hover .arrow {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.withConstArrows .arrow,\n.withConstArrows:hover .arrow,\n.host .arrow:hover {\n  opacity: 1;\n}\n\n.arrowLeft:hover ~ .in .inWrapper {\n  transform: translateX(8px);\n}\n\n.arrowRight:hover ~ .in .inWrapper {\n  transform: translateX(-8px);\n}\n\n/**\n * CMP:\n * Tabs\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabs) .host {\n  min-inline-size: 100%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabs--withGaps) .inWrapper::after,\n:global(.vkuiInternalTabs--withGaps) .inWrapper::before {\n  display: block;\n  inline-size: var(--vkui--size_base_padding_horizontal--regular);\n  flex-shrink: 0;\n  block-size: 1px;\n  content: '';\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"HorizontalScroll__host--UjSnj",in:"HorizontalScroll__in--IpS3N",inWrapper:"HorizontalScroll__inWrapper--rjuxp",arrow:"HorizontalScroll__arrow--vwwtj",withConstArrows:"HorizontalScroll__withConstArrows--N714e",arrowLeft:"HorizontalScroll__arrowLeft--sgrQm",arrowRight:"HorizontalScroll__arrowRight--tdPng"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ScrollArrow__host--QdEZO{background-color:initial;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;transition:opacity .15s;transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}.ScrollArrow__directionLeft--QPhl7,.ScrollArrow__directionRight--agZMp{block-size:100%;flex-direction:column}.ScrollArrow__directionDown--b_Rsb,.ScrollArrow__directionUp--EZTUP{flex-direction:row;inline-size:100%}.ScrollArrow__icon--NTgmr{align-items:center;background-color:var(--vkui--color_background_contrast_themed);box-shadow:var(--vkui--elevation3);color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative}.ScrollArrow__sizeM--ZaZrX .ScrollArrow__icon--NTgmr{block-size:28px;border-radius:14px;inline-size:28px}.ScrollArrow__sizeL--zbdAm .ScrollArrow__icon--NTgmr{block-size:40px;border-radius:24px;inline-size:40px}.ScrollArrow__directionLeft--QPhl7{-webkit-padding-start:var(--vkui--size_base_padding_horizontal--regular,16px);inset-inline-start:0;padding-inline-start:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow__directionRight--agZMp{-webkit-padding-end:var(--vkui--size_base_padding_horizontal--regular,16px);inset-inline-end:0;padding-inline-end:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow__directionUp--EZTUP{-webkit-padding-before:var(--vkui--size_base_padding_horizontal--regular,16px);inset-block-start:0;padding-block-start:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow__directionDown--b_Rsb{-webkit-padding-after:var(--vkui--size_base_padding_horizontal--regular,16px);inset-block-end:0;padding-block-end:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow__directionLeft--QPhl7 .ScrollArrow__defaultIcon--tByri{transform:rotate(180deg)}.ScrollArrow__directionUp--EZTUP .ScrollArrow__defaultIcon--tByri{transform:rotate(-90deg)}.ScrollArrow__directionDown--b_Rsb .ScrollArrow__defaultIcon--tByri{transform:rotate(90deg)}","",{version:3,sources:["webpack://./src/components/ScrollArrow/ScrollArrow.module.css"],names:[],mappings:"AAAA,0BAKE,wBAA6B,CAD7B,QAAS,CAHT,cAAe,CAOf,YAAa,CACb,sBAAuB,CANvB,SAAU,CAGV,uBAAyB,CACzB,iEAAkE,CALlE,wBAAiB,CAAjB,qBAAiB,CAAjB,gBAQF,CAEA,uEAEE,eAAgB,CAChB,qBACF,CAEA,oEAGE,kBAAmB,CADnB,gBAEF,CAEA,0BAME,kBAAmB,CAJnB,8DAA+D,CAE/D,kCAAmC,CADnC,uCAAwC,CAExC,YAAa,CAEb,sBAAuB,CANvB,iBAOF,CAEA,qDAEE,eAAgB,CAChB,kBAAmB,CAFnB,gBAGF,CAEA,qDAEE,eAAgB,CAChB,kBAAmB,CAFnB,gBAGF,CAEA,mCACE,6EAA8E,CAC9E,oBAAqB,CADrB,4EAEF,CAEA,oCACE,2EAA4E,CAC5E,kBAAmB,CADnB,0EAEF,CAEA,iCACE,8EAA6E,CAC7E,mBAAoB,CADpB,2EAEF,CAEA,mCACE,6EAA2E,CAC3E,iBAAkB,CADlB,yEAEF,CAEA,oEACE,wBACF,CAEA,kEACE,wBACF,CAEA,oEACE,uBACF",sourcesContent:[".host {\n  cursor: pointer;\n  user-select: auto;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  transition: opacity 0.15s;\n  transition-timing-function: var(--vkui--animation_easing_platform);\n  display: flex;\n  justify-content: center;\n}\n\n.directionLeft,\n.directionRight {\n  block-size: 100%;\n  flex-direction: column;\n}\n\n.directionUp,\n.directionDown {\n  inline-size: 100%;\n  flex-direction: row;\n}\n\n.icon {\n  position: relative;\n  background-color: var(--vkui--color_background_contrast_themed);\n  color: var(--vkui--color_icon_secondary);\n  box-shadow: var(--vkui--elevation3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.sizeM .icon {\n  inline-size: 28px;\n  block-size: 28px;\n  border-radius: 14px;\n}\n\n.sizeL .icon {\n  inline-size: 40px;\n  block-size: 40px;\n  border-radius: 24px;\n}\n\n.directionLeft {\n  padding-inline-start: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-inline-start: 0;\n}\n\n.directionRight {\n  padding-inline-end: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-inline-end: 0;\n}\n\n.directionUp {\n  padding-block-start: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-block-start: 0;\n}\n\n.directionDown {\n  padding-block-end: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-block-end: 0;\n}\n\n.directionLeft .defaultIcon {\n  transform: rotate(180deg);\n}\n\n.directionUp .defaultIcon {\n  transform: rotate(-90deg);\n}\n\n.directionDown .defaultIcon {\n  transform: rotate(90deg);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"ScrollArrow__host--QdEZO",directionLeft:"ScrollArrow__directionLeft--QPhl7",directionRight:"ScrollArrow__directionRight--agZMp",directionDown:"ScrollArrow__directionDown--b_Rsb",directionUp:"ScrollArrow__directionUp--EZTUP",icon:"ScrollArrow__icon--NTgmr",sizeM:"ScrollArrow__sizeM--ZaZrX",sizeL:"ScrollArrow__sizeL--zbdAm",defaultIcon:"ScrollArrow__defaultIcon--tByri"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/HorizontalScroll/HorizontalScroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>HorizontalScroll});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityHasPointer=__webpack_require__("./src/hooks/useAdaptivityHasPointer.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");var useEventListener=__webpack_require__("./src/hooks/useEventListener.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),fx=__webpack_require__("./src/lib/fx.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),ScrollArrow=__webpack_require__("./src/components/ScrollArrow/ScrollArrow.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),HorizontalScroll_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/HorizontalScroll/HorizontalScroll.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(HorizontalScroll_module.A,options);const HorizontalScroll_HorizontalScroll_module=HorizontalScroll_module.A&&HorizontalScroll_module.A.locals?HorizontalScroll_module.A.locals:void 0;function now(){return performance&&performance.now?performance.now():Date.now()}function roundingAwayFromZero(value){return value>0?Math.ceil(value):Math.floor(value)}const roundUpElementScrollLeft=el=>roundingAwayFromZero(el.scrollLeft);const HorizontalScroll=({children,getScrollToLeft,getScrollToRight,showArrows=!0,arrowSize="l",arrowOffsetY,scrollAnimationDuration=250,getRef,scrollOnAnyWheel=!1,...restProps})=>{const[canScrollLeft,setCanScrollLeft]=react.useState(!1),[canScrollRight,setCanScrollRight]=react.useState(!1),[directionRef,textDirection]=function useDirection(){const ref=react.useRef(null),[direction,setDirection]=react.useState(void 0),[writingMode,setWritingMode]=react.useState(void 0),{window}=(0,dom.a4)();return(0,useIsomorphicLayoutEffect.E)((()=>{if(!window||!ref.current)return;const styleDeclaration=window.getComputedStyle(ref.current);setDirection(styleDeclaration.direction),setWritingMode(styleDeclaration.writingMode)}),[window]),[ref,direction,writingMode]}(),direction=textDirection||"ltr",setCanScrollStart="ltr"===direction?setCanScrollLeft:setCanScrollRight,setCanScrollEnd="ltr"===direction?setCanScrollRight:setCanScrollLeft,isCustomScrollingRef=react.useRef(!1),scrollerRef=(0,useExternRef.Z)(getRef,directionRef),animationQueue=react.useRef([]),hasPointer=(0,useAdaptivityHasPointer.Y)(),scrollTo=react.useCallback((getScrollPosition=>{const scrollElement=scrollerRef.current;animationQueue.current.push((()=>function doScroll({scrollElement,getScrollPosition,animationQueue,onScrollToEndBorder,onScrollEnd,onScrollStart,initialScrollWidth,scrollAnimationDuration,textDirection}){if(!scrollElement||!getScrollPosition)return;const extremeScrollLeft=("ltr"===textDirection?1:-1)*(initialScrollWidth-scrollElement.offsetWidth);let startScrollLeft=roundUpElementScrollLeft(scrollElement),endScrollLeft=getScrollPosition(startScrollLeft);onScrollStart(),startScrollLeft*endScrollLeft<0&&(endScrollLeft=0),Math.abs(endScrollLeft)>=Math.abs(extremeScrollLeft)&&(onScrollToEndBorder(),endScrollLeft=extremeScrollLeft);const startTime=now();!function scroll(){const time=now(),elapsed=Math.min((time-startTime)/scrollAnimationDuration,1),value=(0,fx.r)(elapsed),currentScrollLeft=startScrollLeft+(endScrollLeft-startScrollLeft)*value;scrollElement.scrollLeft=roundingAwayFromZero(currentScrollLeft);const scrollEnd="ltr"===textDirection?Math.max(0,endScrollLeft):Math.min(0,endScrollLeft);roundUpElementScrollLeft(scrollElement)===scrollEnd||1===elapsed?(onScrollEnd(),animationQueue.shift(),animationQueue.length>0&&animationQueue[0]()):requestAnimationFrame(scroll)}()}({scrollElement,getScrollPosition,animationQueue:animationQueue.current,onScrollToEndBorder:()=>setCanScrollEnd(!1),onScrollEnd:()=>isCustomScrollingRef.current=!1,onScrollStart:()=>isCustomScrollingRef.current=!0,initialScrollWidth:scrollElement?.firstElementChild?.scrollWidth||0,scrollAnimationDuration,textDirection:direction}))),1===animationQueue.current.length&&animationQueue.current[0]()}),[scrollerRef,scrollAnimationDuration,direction,setCanScrollEnd]),scrollToLeft=react.useCallback((()=>{scrollTo(getScrollToLeft??(i=>i-scrollerRef.current.offsetWidth))}),[getScrollToLeft,scrollTo,scrollerRef]),scrollToRight=react.useCallback((()=>{scrollTo(getScrollToRight??(i=>i+scrollerRef.current.offsetWidth))}),[getScrollToRight,scrollTo,scrollerRef]),calculateArrowsVisibility=react.useCallback((()=>{if(showArrows&&hasPointer&&scrollerRef.current&&!isCustomScrollingRef.current){const scrollElement=scrollerRef.current;setCanScrollStart(0!==scrollElement.scrollLeft),setCanScrollEnd(Math.abs(roundUpElementScrollLeft(scrollElement))+scrollElement.offsetWidth<scrollElement.scrollWidth)}}),[showArrows,hasPointer,scrollerRef,setCanScrollStart,setCanScrollEnd]),scrollEvent=(0,useEventListener.M)("scroll",calculateArrowsVisibility);react.useEffect((function addScrollerRefToScrollEvent(){return scrollerRef.current?(scrollEvent.add(scrollerRef.current),scrollEvent.remove):es6.lQ}),[scrollEvent,scrollerRef]),react.useEffect(calculateArrowsVisibility,[calculateArrowsVisibility,children]);const onwheel=react.useCallback((e=>{scrollerRef.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[scrollerRef]),wheelEvent=(0,useEventListener.M)("wheel",onwheel);return react.useEffect((function addScrollerRefToWheelEvent(){return scrollerRef.current&&scrollOnAnyWheel?(wheelEvent.add(scrollerRef.current),wheelEvent.remove):es6.lQ}),[wheelEvent,scrollerRef,scrollOnAnyWheel]),(0,jsx_runtime.jsxs)(RootComponent.I,{...restProps,baseClassName:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.host,"vkuiInternalHorizontalScroll","always"===showArrows&&HorizontalScroll_HorizontalScroll_module.withConstArrows),onMouseEnter:calculateArrowsVisibility,children:[showArrows&&(hasPointer||void 0===hasPointer)&&canScrollLeft&&(0,jsx_runtime.jsx)(ScrollArrow.L,{"data-testid":void 0,size:arrowSize,offsetY:arrowOffsetY,direction:"left","aria-hidden":!0,tabIndex:-1,className:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.arrow,HorizontalScroll_HorizontalScroll_module.arrowLeft),onClick:scrollToLeft}),showArrows&&(hasPointer||void 0===hasPointer)&&canScrollRight&&(0,jsx_runtime.jsx)(ScrollArrow.L,{"data-testid":void 0,size:arrowSize,offsetY:arrowOffsetY,direction:"right","aria-hidden":!0,tabIndex:-1,className:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.arrow,HorizontalScroll_HorizontalScroll_module.arrowRight),onClick:scrollToRight}),(0,jsx_runtime.jsx)("div",{className:HorizontalScroll_HorizontalScroll_module.in,ref:scrollerRef,children:(0,jsx_runtime.jsx)("div",{className:HorizontalScroll_HorizontalScroll_module.inWrapper,children})})]})};try{HorizontalScroll.displayName="HorizontalScroll",HorizontalScroll.__docgenInfo={description:"",displayName:"HorizontalScroll",props:{getScrollToLeft:{defaultValue:null,description:"Функция для расчета величины прокрутки при клике на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:null,description:"Функция для расчета величины прокрутки при клике на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},arrowSize:{defaultValue:{value:"l"},description:"",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},arrowOffsetY:{defaultValue:null,description:"Смещает иконки кнопок навигации по вертикали.",name:"arrowOffsetY",required:!1,type:{name:"string | number"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},scrollAnimationDuration:{defaultValue:{value:"250"},description:"",name:"scrollAnimationDuration",required:!1,type:{name:"number"}},scrollOnAnyWheel:{defaultValue:{value:"false"},description:"Добавляет возможность прокручивать контент на любое колесо мыши.\nПо умолчанию прокручивается как любой горизонтальный контент через shift.",name:"scrollOnAnyWheel",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalScroll/HorizontalScroll.tsx#HorizontalScroll"]={docgenInfo:HorizontalScroll.__docgenInfo,name:"HorizontalScroll",path:"src/components/HorizontalScroll/HorizontalScroll.tsx#HorizontalScroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ScrollArrow/ScrollArrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ScrollArrow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),chevron_24=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/chevron_24.js")),chevron_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ScrollArrow_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ScrollArrow_module.A,options);const ScrollArrow_ScrollArrow_module=ScrollArrow_module.A&&ScrollArrow_module.A.locals?ScrollArrow_module.A.locals:void 0,stylesSize={m:ScrollArrow_ScrollArrow_module.sizeM,l:ScrollArrow_ScrollArrow_module.sizeL},stylesDirection={up:ScrollArrow_ScrollArrow_module.directionUp,right:ScrollArrow_ScrollArrow_module.directionRight,down:ScrollArrow_ScrollArrow_module.directionDown,left:ScrollArrow_ScrollArrow_module.directionLeft},labelDirection={up:"Назад",right:"Вперед",down:"Вперед",left:"Назад"},ArrowIcon=({size})=>{let Icon=chevron_24.x;return"m"===size&&(Icon=chevron_16.U),(0,jsx_runtime.jsx)(Icon,{className:ScrollArrow_ScrollArrow_module.defaultIcon})},ScrollArrow=({size="l",offsetY,direction,label:labelProp,children=(0,jsx_runtime.jsx)(ArrowIcon,{size}),...restProps})=>{const label=labelProp??labelDirection[direction];return(0,jsx_runtime.jsxs)(RootComponent.I,{Component:"button",type:"button",baseClassName:(0,es6.xW)(ScrollArrow_ScrollArrow_module.host,stylesSize[size],stylesDirection[direction]),...restProps,children:[label&&(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:label}),(0,jsx_runtime.jsx)("span",{className:ScrollArrow_ScrollArrow_module.icon,style:offsetY?{top:offsetY}:void 0,children})]})};try{ScrollArrow.displayName="ScrollArrow",ScrollArrow.__docgenInfo={description:"Компонент стрелки. Используется в [HorizontalScroll](#/HorizontalScroll) и [Gallery](#/Gallery).",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:ScrollArrow.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/fx.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function easeInOutSine(x){return.5*(1-Math.cos(Math.PI*x))}function cubicBezier(x1,x2){return function(progress){const t=progress,cx=3*x1,bx=3*(x2-x1)-cx;return(1-cx-bx)*Math.pow(t,3)+bx*Math.pow(t,2)+cx*t}}__webpack_require__.d(__webpack_exports__,{A:()=>cubicBezier,r:()=>easeInOutSine})}}]);