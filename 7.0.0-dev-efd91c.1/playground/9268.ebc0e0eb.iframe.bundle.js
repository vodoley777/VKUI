"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9268],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.FloatingArrow__host--_4D8Y{position:absolute}.FloatingArrow__in--vi8rD{content:"";display:block;transform:translateY(1px)}.FloatingArrow__placementRight--ffxK0{transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.FloatingArrow__placementBottom--x_Njh{transform:rotate(180deg)}.FloatingArrow__placementLeft--UbzEj{transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}',"",{version:3,sources:["webpack://./src/components/FloatingArrow/FloatingArrow.module.css"],names:[],mappings:"AAAA,4BACE,iBACF,CAEA,0BACE,UAAW,CACX,aAAc,CAGd,yBACF,CAEA,sCACE,2CAA6C,CAC7C,sBACF,CAEA,uCACE,wBACF,CAEA,qCACE,6CAA+C,CAC/C,qBACF",sourcesContent:[".host {\n  position: absolute;\n}\n\n.in {\n  content: '';\n  display: block;\n\n  /* см. Примечание 1 в FloatingArrow.tsx. */\n  transform: translateY(1px);\n}\n\n.placementRight {\n  transform: rotate(90deg) translate(50%, -50%);\n  transform-origin: right;\n}\n\n.placementBottom {\n  transform: rotate(180deg);\n}\n\n.placementLeft {\n  transform: rotate(-90deg) translate(-50%, -50%);\n  transform-origin: left;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"FloatingArrow__host--_4D8Y",in:"FloatingArrow__in--vi8rD",placementRight:"FloatingArrow__placementRight--ffxK0",placementBottom:"FloatingArrow__placementBottom--x_Njh",placementLeft:"FloatingArrow__placementLeft--UbzEj"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Popper/Popper.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Popper__host--rwis0{z-index:var(--vkui--z_index_popout)}","",{version:3,sources:["webpack://./src/components/Popper/Popper.module.css"],names:[],mappings:"AAaA,qBACE,mCACF",sourcesContent:["/**\n * ⚠ WARNING️ ⚠\n *\n * Если указать `position: relaitve` контейнеру, где позиционируется `Popper`, то при кейсе когда:\n * 1. Мы передали `sameWidth`.\n * 2. Мы позциционируем `Popper` через `position: absolute`.\n * 3. Мы используем `height: 100%` или `height: 100vh`, чтобы растянуть страницу на всю высоту.\n * 4. НЕТ скроллбара.\n * будет неправильно высчитан `offsetWidth` у `targetRef` при первом вызове `effect()` модификатора `sameWdith`,\n *  а именно из `offsetWidth` будет вычтен размер скроллабара, которого на самом деле на странице нет (см. п. 4)\n *\n * Второй и последующие вызовы исправляют ситуацию.\n */\n.host {\n  z-index: var(--vkui--z_index_popout);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Popper__host--rwis0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/FloatingArrow/DefaultIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$k:()=>DefaultIcon,kA:()=>DEFAULT_ARROW_HEIGHT,ku:()=>DEFAULT_ARROW_PADDING});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const DEFAULT_ARROW_HEIGHT=8,DEFAULT_ARROW_PADDING=10,ARROW_HEIGHT_WITH_WHITE_SPACE=DEFAULT_ARROW_HEIGHT+1,DefaultIcon=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:20,height:ARROW_HEIGHT_WITH_WHITE_SPACE,viewBox:`0 0 20 ${ARROW_HEIGHT_WITH_WHITE_SPACE}`,xmlns:"http://www.w3.org/2000/svg",...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",fill:"currentColor"})});try{20..displayName="DEFAULT_ARROW_WIDTH",20..__docgenInfo={description:"Примечание 1.\n\nВ компоненте, SVG элемент `<path />` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа\nслужит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при\nизменении масштаба страницы.\n\nЧтобы исправление сработало нужно:\n1. Прибавить высоту платформы к `height` и `viewBox` SVG контейнера.\n2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через `translateY(1px)`.\n\nhttps://github.com/VKCOM/VKUI/issues/2123",displayName:"DEFAULT_ARROW_WIDTH",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"]={docgenInfo:20..__docgenInfo,name:"DEFAULT_ARROW_WIDTH",path:"src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"})}catch(__react_docgen_typescript_loader_error){}try{DefaultIcon.displayName="DefaultIcon",DefaultIcon.__docgenInfo={description:"",displayName:"DefaultIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"]={docgenInfo:DefaultIcon.__docgenInfo,name:"DefaultIcon",path:"src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingArrow/FloatingArrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FloatingArrow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),DefaultIcon=__webpack_require__("./src/components/FloatingArrow/DefaultIcon.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FloatingArrow_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FloatingArrow_module.A,options);const FloatingArrow_FloatingArrow_module=FloatingArrow_module.A&&FloatingArrow_module.A.locals?FloatingArrow_module.A.locals:void 0,placementClassNames={right:FloatingArrow_FloatingArrow_module.placementRight,bottom:FloatingArrow_FloatingArrow_module.placementBottom,left:FloatingArrow_FloatingArrow_module.placementLeft},FloatingArrow=({offset,isStaticOffset,coords,iconStyle,iconClassName,placement="bottom",getRootRef,Icon=DefaultIcon.$k,...restProps})=>{const[arrowPlacement,arrowStyles]=function getArrowPositionData(placement,coords={x:0,y:0},offset=0,isStaticOffset=!1){const withOffset=isVerticalPlacement=>{const parsedCoords={x:coords.x||0,y:coords.y||0};return isVerticalPlacement?isStaticOffset?offset:parsedCoords.y+offset:isStaticOffset?offset:parsedCoords.x+offset};if(placement.startsWith("top")){const xOffsetProp=getXOffsetProp(placement,isStaticOffset);return["bottom",{top:"100%",[xOffsetProp]:withOffset(!1)}]}if(placement.startsWith("right")){const yOffsetProp=getYOffsetProp(placement,isStaticOffset);return["left",{[yOffsetProp]:withOffset(!0),left:0}]}if(placement.startsWith("bottom")){const xOffsetProp=getXOffsetProp(placement,isStaticOffset);return[void 0,{bottom:"100%",[xOffsetProp]:withOffset(!1)}]}{const yOffsetProp=getYOffsetProp(placement,isStaticOffset);return["right",{[yOffsetProp]:withOffset(!0),right:0}]}}(placement,coords,offset,isStaticOffset);return(0,jsx_runtime.jsx)("div",{ref:getRootRef,style:arrowStyles,className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.host,arrowPlacement&&placementClassNames[arrowPlacement]),...restProps,children:(0,jsx_runtime.jsx)(Icon,{className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.in,iconClassName),style:iconStyle})})};function getXOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"right":"left"}function getYOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"bottom":"top"}try{FloatingArrow.displayName="FloatingArrow",FloatingArrow.__docgenInfo={description:"",displayName:"FloatingArrow",props:{offset:{defaultValue:null,description:"Сдвиг стрелки относительно текущих координат.",name:"offset",required:!1,type:{name:"number"}},isStaticOffset:{defaultValue:null,description:"Включает абсолютное смещение по `offset`.",name:"isStaticOffset",required:!1,type:{name:"boolean"}},coords:{defaultValue:null,description:"",name:"coords",required:!1,type:{name:"Coords"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},iconStyle:{defaultValue:null,description:"",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},Icon:{defaultValue:{value:'(props: React.SVGAttributes<SVGSVGElement>): React.ReactNode => {\n  return (\n    <svg\n      width={DEFAULT_ARROW_WIDTH}\n      height={ARROW_HEIGHT_WITH_WHITE_SPACE}\n      viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}\n      xmlns="http://www.w3.org/2000/svg"\n      {...props}\n    >\n      <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />\n    </svg>\n  );\n}'},description:"",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"]={docgenInfo:FloatingArrow.__docgenInfo,name:"FloatingArrow",path:"src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Popper/Popper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>Popper});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useFloatingMiddlewaresBootstrap=__webpack_require__("./src/lib/floating/useFloatingMiddlewaresBootstrap/index.ts"),floating_ui_react_dom=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),adapters=__webpack_require__("./src/lib/floating/adapters.ts"),usePlacementChangeCallback=__webpack_require__("./src/lib/floating/usePlacementChangeCallback.ts"),functions=__webpack_require__("./src/lib/floating/functions.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),AppRootPortal=__webpack_require__("./src/components/AppRoot/AppRootPortal.tsx"),DefaultIcon=__webpack_require__("./src/components/FloatingArrow/DefaultIcon.tsx"),FloatingArrow=__webpack_require__("./src/components/FloatingArrow/FloatingArrow.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Popper_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Popper/Popper.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Popper_module.A,options);const Popper_Popper_module=Popper_module.A&&Popper_module.A.locals?Popper_module.A.locals:void 0,Popper=({placement:placementProp="bottom-start",sameWidth,hideWhenReferenceHidden,offsetByMainAxis=8,offsetByCrossAxis=0,arrow,arrowHeight=DefaultIcon.kA,arrowPadding=DefaultIcon.ku,customMiddlewares,disableFlipMiddleware=!1,autoUpdateOnTargetResize=!1,arrowProps,ArrowIcon=DefaultIcon.$k,targetRef,getRootRef,children,usePortal=!0,style:styleProp,onPlacementChange,...restProps})=>{const[arrowRef,setArrowRef]=react.useState(null),{strictPlacement,middlewares}=(0,useFloatingMiddlewaresBootstrap.x)({placement:placementProp,sameWidth,arrow,arrowRef,arrowHeight,arrowPadding,offsetByMainAxis,offsetByCrossAxis,hideWhenReferenceHidden,customMiddlewares,disableFlipMiddleware}),{x:floatingDataX,y:floatingDataY,strategy:floatingPositionStrategy,placement:resolvedPlacement,refs,middlewareData}=(0,floating_ui_react_dom.we)({placement:strictPlacement,middleware:middlewares,whileElementsMounted:(...args)=>(0,adapters.lB)(...args,{elementResize:autoUpdateOnTargetResize})});(0,usePlacementChangeCallback.W)(placementProp,resolvedPlacement,onPlacementChange);const{arrow:arrowCoords}=middlewareData,handleRootRef=(0,useExternRef.Z)(refs.setFloating,getRootRef);(0,useIsomorphicLayoutEffect.E)((()=>{refs.setReference("current"in targetRef?targetRef.current:targetRef)}),[refs.setReference,targetRef]);const dropdown=(0,jsx_runtime.jsxs)(RootComponent.I,{...restProps,baseClassName:Popper_Popper_module.host,getRootRef:handleRootRef,style:{...(0,functions.i2)(floatingPositionStrategy,floatingDataX,floatingDataY,sameWidth?null:void 0,middlewareData),...styleProp},children:[arrow&&(0,jsx_runtime.jsx)(FloatingArrow.i,{...arrowProps,coords:arrowCoords,placement:resolvedPlacement,getRootRef:setArrowRef,Icon:ArrowIcon}),children]});return(0,jsx_runtime.jsx)(AppRootPortal.U,{usePortal,children:dropdown})};try{Popper.displayName="Popper",Popper.__docgenInfo={description:"",displayName:"Popper",props:{targetRef:{defaultValue:null,description:"",name:"targetRef",required:!0,type:{name:"RefObject<HTMLElement> | VirtualElement"}},arrowProps:{defaultValue:null,description:"Позволяет набросить на стрелку пользовательские атрибуты.",name:"arrowProps",required:!1,type:{name:"FloatingArrowProps"}},ArrowIcon:{defaultValue:{value:'(props: React.SVGAttributes<SVGSVGElement>): React.ReactNode => {\n  return (\n    <svg\n      width={DEFAULT_ARROW_WIDTH}\n      height={ARROW_HEIGHT_WITH_WHITE_SPACE}\n      viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}\n      xmlns="http://www.w3.org/2000/svg"\n      {...props}\n    >\n      <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />\n    </svg>\n  );\n}'},description:'Пользовательская SVG иконка.\n\nТребования:\n\n1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).\n2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,\n   растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.\n   (см. https://github.com/VKCOM/VKUI/pull/4496).\n3. Передайте высоту иконки в параметр `arrowHeight`. В значении высоты можно исключить хак с `1px` из п.2.\n4. Убедитесь, что компонент принимает все валидные для SVG параметры.\n5. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.',name:"ArrowIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},autoUpdateOnTargetResize:{defaultValue:{value:"false"},description:"Подписывается на изменение геометрии `targetRef`, чтобы пересчитать свою позицию.",name:"autoUpdateOnTargetResize",required:!1,type:{name:"boolean"}},usePortal:{defaultValue:{value:"true"},description:"По умолчанию используется document.body.",name:"usePortal",required:!1,type:{name:"boolean | HTMLElement | RefObject<HTMLElement>"}},arrowHeight:{defaultValue:{value:"8"},description:"Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.",name:"arrowHeight",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:{value:"10"},description:"Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.",name:"arrowPadding",required:!1,type:{name:"number"}},hoverDelay:{defaultValue:null,description:'Количество миллисекунд, после которых произойдёт показ/скрытие всплывающего элемента\nпри наведении.\n\n> Чтобы задать разное время на показ и скрытие, передайте массив типа `[<показ>, <скрытие>]`.\n\n> Используется только для `trigger="hover"`.',name:"hoverDelay",required:!1,type:{name:"number | [number, number]"}},placement:{defaultValue:null,description:"По умолчанию компонент выберет наилучшее расположение сам, но приоритетное можно задать с помощью этого свойства.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"top"'},{value:'"bottom"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offsetByMainAxis:{defaultValue:{value:"8"},description:"Отступ по главной оси.",name:"offsetByMainAxis",required:!1,type:{name:"number"}},offsetByCrossAxis:{defaultValue:{value:"0"},description:"Отступ по вспомогательной оси.",name:"offsetByCrossAxis",required:!1,type:{name:"number"}},defaultShown:{defaultValue:null,description:"Начальное состояние всплывающего элемента.",name:"defaultShown",required:!1,type:{name:"boolean"}},onShownChange:{defaultValue:null,description:"Вызывается при каждом изменении видимости всплывающего элемента.",name:"onShownChange",required:!1,type:{name:"OnShownChange"}},hideWhenReferenceHidden:{defaultValue:null,description:"Принудительно скрывает компонент если целевой элемент вышел за область видимости.",name:"hideWhenReferenceHidden",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:null,description:"Перебивает zIndex заданный по умолчанию.",name:"zIndex",required:!1,type:{name:"string | number"}},onPlacementChange:{defaultValue:null,description:"В зависимости от области видимости, позиция может смениться на более оптимальную,\nчтобы всплывающий элемент вместился в эту область видимости.",name:"onPlacementChange",required:!1,type:{name:"OnPlacementChange"}},disableFlipMiddleware:{defaultValue:{value:"false"},description:"Указанное значение `placement` форсируется, даже если для выпадающего элемента недостаточно места.\nНе оказывает влияния при `placement` значениях - `'auto' | 'auto-start' | 'auto-end'`",name:"disableFlipMiddleware",required:!1,type:{name:"boolean"}},shown:{defaultValue:null,description:"Если передан, то всплывающий элемент будет показано/скрыто в зависимости от значения свойства.",name:"shown",required:!1,type:{name:"boolean"}},arrow:{defaultValue:null,description:"Отображать ли стрелку, указывающую на якорный элемент.",name:"arrow",required:!1,type:{name:"boolean"}},arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"Element | MutableRefObject<Element | null> | null"}},sameWidth:{defaultValue:null,description:"Выставлять ширину равной target элементу.",name:"sameWidth",required:!1,type:{name:"boolean"}},customMiddlewares:{defaultValue:null,description:"Массив кастомных модификаторов для Popper (необходимо мемоизировать).",name:"customMiddlewares",required:!1,type:{name:"{ name: string; options?: any; fn: (state: { platform: Platform; placement: Placement; x: number; y: number; initialPlacement: Placement; strategy: Strategy; middlewareData: MiddlewareData; rects: ElementRects; elements: Elements; }) => Promisable<...>; }[]"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Popper/Popper.tsx#Popper"]={docgenInfo:Popper.__docgenInfo,name:"Popper",path:"src/components/Popper/Popper.tsx#Popper"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/floating/adapters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lB:()=>autoUpdateFloatingElement});var _vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/floating-ui.utils.dom.esm.js"),_customResizeObserver__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/customResizeObserver.ts");const defaultOptions={ancestorScroll:!0,ancestorResize:!0,elementResize:!1,animationFrame:!1};function autoUpdateFloatingElement(reference,floating,update,options=defaultOptions){const{elementResize=!1,...restOptions}=options,canUseResizeObserver=void 0!==window.ResizeObserver,autoUpdateLibDisposer=(0,_vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__.ll)(reference,floating,update,{...restOptions,elementResize:elementResize&&canUseResizeObserver});let observer=null;return elementResize&&!canUseResizeObserver&&(observer=new _customResizeObserver__WEBPACK_IMPORTED_MODULE_1__.S(update),(0,_dom__WEBPACK_IMPORTED_MODULE_2__.sb)(reference)&&observer.observe(reference),observer.observe(floating),observer.appendToTheDOM()),()=>{observer&&(observer.disconnect(),observer=null),autoUpdateLibDisposer()}}},"./src/lib/floating/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function checkIsNotAutoPlacement(placement){return!placement.startsWith("auto")}function getAutoPlacementAlign(placement){const align=placement.replace(/auto-|auto/,"");return"start"===align||"end"===align?align:null}function convertFloatingDataToReactCSSProperties(strategy,x,y,initialWidth="max-content",middlewareData){const styles={position:strategy,top:y,right:"auto",bottom:"auto",left:x};if(null!==initialWidth&&(styles.width=initialWidth),middlewareData){const hide=middlewareData.hide;hide&&hide.referenceHidden&&(styles.visibility="hidden")}return styles}__webpack_require__.d(__webpack_exports__,{IH:()=>getAutoPlacementAlign,ed:()=>checkIsNotAutoPlacement,i2:()=>convertFloatingDataToReactCSSProperties,tP:()=>getArrowCoordsByMiddlewareData});const getArrowCoordsByMiddlewareData=middlewareData=>{const coords={x:0,y:0};if(middlewareData.arrow){const{x=0,y=0}=middlewareData.arrow;coords.x=x,coords.y=y}return coords}},"./src/lib/floating/useFloatingMiddlewaresBootstrap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>useFloatingMiddlewaresBootstrap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_adapters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/functions.ts");const useFloatingMiddlewaresBootstrap=({placement="bottom-start",arrowRef=null,arrow,arrowHeight,arrowPadding,sameWidth,offsetByMainAxis=0,offsetByCrossAxis=0,customMiddlewares,hideWhenReferenceHidden,disableFlipMiddleware=!1})=>react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const isAutoPlacement=!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.ed)(placement),middlewares=[(0,_adapters__WEBPACK_IMPORTED_MODULE_2__.cY)({crossAxis:offsetByCrossAxis,mainAxis:arrow&&arrowHeight?offsetByMainAxis+arrowHeight:offsetByMainAxis})];return isAutoPlacement?middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.RK)({alignment:(0,_functions__WEBPACK_IMPORTED_MODULE_1__.IH)(placement)})):disableFlipMiddleware||middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UU)({fallbackAxisSideDirection:"start"})),middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.BN)()),sameWidth&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.Ej)({apply({rects,elements}){Object.assign(elements.floating.style,{width:`${rects.reference.width}px`})}})),customMiddlewares&&middlewares.push(...customMiddlewares),arrow&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UE)({element:arrowRef,padding:arrowPadding})),hideWhenReferenceHidden&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.jD)()),{middlewares,strictPlacement:isAutoPlacement?void 0:placement}}),[offsetByCrossAxis,arrowRef,arrow,arrowHeight,arrowPadding,offsetByMainAxis,sameWidth,customMiddlewares,placement,hideWhenReferenceHidden,disableFlipMiddleware])},"./src/lib/floating/usePlacementChangeCallback.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePlacementChangeCallback});var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/usePrevious.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function usePlacementChangeCallback(initialPlacement,resolvedPlacement,onPlacementChange){const prevPlacement=(0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__.Z)(resolvedPlacement);(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((()=>{if(!onPlacementChange)return;(void 0===prevPlacement&&initialPlacement!==resolvedPlacement||void 0!==prevPlacement&&prevPlacement!==resolvedPlacement)&&onPlacementChange(resolvedPlacement)}),[prevPlacement,initialPlacement,resolvedPlacement,onPlacementChange])}}}]);