"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7956],{"./src/components/FloatingArrow/DefaultIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$k:()=>DefaultIcon,kA:()=>DEFAULT_ARROW_HEIGHT,ku:()=>DEFAULT_ARROW_PADDING});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var DEFAULT_ARROW_HEIGHT=8,DEFAULT_ARROW_PADDING=10,ARROW_HEIGHT_WITH_WHITE_SPACE=DEFAULT_ARROW_HEIGHT+1,DefaultIcon=function(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({width:20,height:ARROW_HEIGHT_WITH_WHITE_SPACE,viewBox:"0 0 ".concat(20," ").concat(ARROW_HEIGHT_WITH_WHITE_SPACE),xmlns:"http://www.w3.org/2000/svg"},props),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z",fill:"currentColor"})}))};try{20..displayName="DEFAULT_ARROW_WIDTH",20..__docgenInfo={description:"Примечание 1.\n\nВ компоненте, SVG элемент `<path />` представляет собой стрелку с платформой в виде прямоугольника в 1px. Платформа\nслужит для исправления проблемы с белой полоской между контентом и стрелкой, которая зачастую проявляется при\nизменении масштаба страницы.\n\nЧтобы исправление сработало нужно:\n1. Прибавить высоту платформы к `height` и `viewBox` SVG контейнера.\n2. Сместить положение SVG контейнера на высоту платформы – сделано в CSS через `translateY(1px)`.\n\nhttps://github.com/VKCOM/VKUI/issues/2123",displayName:"DEFAULT_ARROW_WIDTH",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"]={docgenInfo:20..__docgenInfo,name:"DEFAULT_ARROW_WIDTH",path:"src/components/FloatingArrow/DefaultIcon.tsx#DEFAULT_ARROW_WIDTH"})}catch(__react_docgen_typescript_loader_error){}try{DefaultIcon.displayName="DefaultIcon",DefaultIcon.__docgenInfo={description:"",displayName:"DefaultIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"]={docgenInfo:DefaultIcon.__docgenInfo,name:"DefaultIcon",path:"src/components/FloatingArrow/DefaultIcon.tsx#DefaultIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FloatingArrow/FloatingArrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>FloatingArrow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),DefaultIcon=__webpack_require__("./src/components/FloatingArrow/DefaultIcon.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),FloatingArrow_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FloatingArrow_module.A,options);const FloatingArrow_FloatingArrow_module=FloatingArrow_module.A&&FloatingArrow_module.A.locals?FloatingArrow_module.A.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var placementClassNames={right:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-right"],bottom:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-bottom"],left:FloatingArrow_FloatingArrow_module["FloatingArrow--placement-left"]},FloatingArrow=function(_param){var offset=_param.offset,isStaticOffset=_param.isStaticOffset,coords=_param.coords,iconStyle=_param.iconStyle,iconClassName=_param.iconClassName,_param_placement=_param.placement,placement=void 0===_param_placement?"bottom":_param_placement,getRootRef=_param.getRootRef,_param_Icon=_param.Icon,Icon=void 0===_param_Icon?DefaultIcon.$k:_param_Icon,restProps=_object_without_properties(_param,["offset","isStaticOffset","coords","iconStyle","iconClassName","placement","getRootRef","Icon"]),_getArrowPositionData=_sliced_to_array(function getArrowPositionData(placement){var coords=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},offset=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,isStaticOffset=arguments.length>3&&void 0!==arguments[3]&&arguments[3],withOffset=function(isVerticalPlacement){var parsedCoords={x:coords.x||0,y:coords.y||0};return isVerticalPlacement?isStaticOffset?offset:parsedCoords.y+offset:isStaticOffset?offset:parsedCoords.x+offset};var _obj,_obj1;return placement.startsWith("top")?["bottom",_define_property({top:"100%"},getXOffsetProp(placement,isStaticOffset),withOffset(!1))]:placement.startsWith("right")?["left",(_obj={},_define_property(_obj,getYOffsetProp(placement,isStaticOffset),withOffset(!0)),_define_property(_obj,"left",0),_obj)]:placement.startsWith("bottom")?[void 0,_define_property({bottom:"100%"},getXOffsetProp(placement,isStaticOffset),withOffset(!1))]:["right",(_obj1={},_define_property(_obj1,getYOffsetProp(placement,isStaticOffset),withOffset(!0)),_define_property(_obj1,"right",0),_obj1)]}(placement,coords,offset,isStaticOffset),2),arrowPlacement=_getArrowPositionData[0],arrowStyles=_getArrowPositionData[1];return(0,jsx_runtime.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:getRootRef,style:arrowStyles,className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.FloatingArrow,arrowPlacement&&placementClassNames[arrowPlacement])},restProps),{children:(0,jsx_runtime.jsx)(Icon,{className:(0,es6.xW)(FloatingArrow_FloatingArrow_module.FloatingArrow__in,iconClassName),style:iconStyle})}))};function getXOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"right":"left"}function getYOffsetProp(placement,isStaticOffset){return placement.endsWith("end")&&isStaticOffset?"bottom":"top"}try{FloatingArrow.displayName="FloatingArrow",FloatingArrow.__docgenInfo={description:"",displayName:"FloatingArrow",props:{offset:{defaultValue:null,description:"Сдвиг стрелки относительно текущих координат.",name:"offset",required:!1,type:{name:"number"}},isStaticOffset:{defaultValue:null,description:"Включает абсолютное смещение по `offset`.",name:"isStaticOffset",required:!1,type:{name:"boolean"}},coords:{defaultValue:null,description:"",name:"coords",required:!1,type:{name:"Coords"}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},iconStyle:{defaultValue:null,description:"",name:"iconStyle",required:!1,type:{name:"CSSProperties"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!1,type:{name:"string"}},Icon:{defaultValue:{value:'(props: React.SVGAttributes<SVGSVGElement>) => {\n  return (\n    <svg\n      width={DEFAULT_ARROW_WIDTH}\n      height={ARROW_HEIGHT_WITH_WHITE_SPACE}\n      viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}\n      xmlns="http://www.w3.org/2000/svg"\n      {...props}\n    >\n      <path d="M10 0c3 0 6 8 10 8v1H0V8c3.975 0 7-8 10-8Z" fill="currentColor" />\n    </svg>\n  );\n}'},description:"",name:"Icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"]={docgenInfo:FloatingArrow.__docgenInfo,name:"FloatingArrow",path:"src/components/FloatingArrow/FloatingArrow.tsx#FloatingArrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/floating/adapters.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lB:()=>autoUpdateFloatingElement});var _vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/floating-ui.utils.dom.esm.js"),_customResizeObserver__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/customResizeObserver.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var defaultOptions={ancestorScroll:!0,ancestorResize:!0,elementResize:!1,animationFrame:!1};function autoUpdateFloatingElement(reference,floating,update){var options=arguments.length>3&&void 0!==arguments[3]?arguments[3]:defaultOptions,_options_elementResize=options.elementResize,elementResize=void 0!==_options_elementResize&&_options_elementResize,restOptions=_object_without_properties(options,["elementResize"]),canUseResizeObserver=void 0!==window.ResizeObserver,autoUpdateLibDisposer=(0,_vkontakte_vkui_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_0__.ll)(reference,floating,update,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restOptions),{elementResize:elementResize&&canUseResizeObserver})),observer=null;return elementResize&&!canUseResizeObserver&&(observer=new _customResizeObserver__WEBPACK_IMPORTED_MODULE_1__.S(update),(0,_dom__WEBPACK_IMPORTED_MODULE_2__.sb)(reference)&&observer.observe(reference),observer.observe(floating),observer.appendToTheDOM()),function(){observer&&(observer.disconnect(),observer=null),autoUpdateLibDisposer()}}},"./src/lib/floating/functions.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IH:()=>getAutoPlacementAlign,ed:()=>checkIsNotAutoPlacement,i2:()=>convertFloatingDataToReactCSSProperties,tP:()=>getArrowCoordsByMiddlewareData});__webpack_require__("../../node_modules/react/index.js");function checkIsNotAutoPlacement(placement){return!placement.startsWith("auto")}function getAutoPlacementAlign(placement){var align=placement.replace(/auto-|auto/,"");return"start"===align||"end"===align?align:null}function convertFloatingDataToReactCSSProperties(strategy,x,y){var initialWidth=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"max-content",middlewareData=arguments.length>4?arguments[4]:void 0,styles={position:strategy,top:y,right:"auto",bottom:"auto",left:x};if(null!==initialWidth&&(styles.width=initialWidth),middlewareData){var hide=middlewareData.hide;hide&&hide.referenceHidden&&(styles.visibility="hidden")}return styles}var getArrowCoordsByMiddlewareData=function(middlewareData){var coords={x:0,y:0};if(middlewareData.arrow){var _middlewareData_arrow=middlewareData.arrow,_middlewareData_arrow_x=_middlewareData_arrow.x,x=void 0===_middlewareData_arrow_x?0:_middlewareData_arrow_x,_middlewareData_arrow_y=_middlewareData_arrow.y,y=void 0===_middlewareData_arrow_y?0:_middlewareData_arrow_y;coords.x=x,coords.y=y}return coords}},"./src/lib/floating/useFloatingMiddlewaresBootstrap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>useFloatingMiddlewaresBootstrap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_adapters__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),_functions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/floating/functions.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useFloatingMiddlewaresBootstrap=function(param){var _param_placement=param.placement,placement=void 0===_param_placement?"bottom-start":_param_placement,_param_arrowRef=param.arrowRef,arrowRef=void 0===_param_arrowRef?null:_param_arrowRef,arrow=param.arrow,arrowHeight=param.arrowHeight,arrowPadding=param.arrowPadding,sameWidth=param.sameWidth,_param_offsetByMainAxis=param.offsetByMainAxis,offsetByMainAxis=void 0===_param_offsetByMainAxis?0:_param_offsetByMainAxis,_param_offsetByCrossAxis=param.offsetByCrossAxis,offsetByCrossAxis=void 0===_param_offsetByCrossAxis?0:_param_offsetByCrossAxis,customMiddlewares=param.customMiddlewares,hideWhenReferenceHidden=param.hideWhenReferenceHidden,_param_disableFlipMiddleware=param.disableFlipMiddleware,disableFlipMiddleware=void 0!==_param_disableFlipMiddleware&&_param_disableFlipMiddleware;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){var _middlewares,isAutoPlacement=!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.ed)(placement),middlewares=[(0,_adapters__WEBPACK_IMPORTED_MODULE_2__.cY)({crossAxis:offsetByCrossAxis,mainAxis:arrow&&arrowHeight?offsetByMainAxis+arrowHeight:offsetByMainAxis})];(isAutoPlacement?middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.RK)({alignment:(0,_functions__WEBPACK_IMPORTED_MODULE_1__.IH)(placement)})):disableFlipMiddleware||middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UU)({fallbackAxisSideDirection:"start"})),middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.BN)()),sameWidth&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.Ej)({apply:function(param){var rects=param.rects,elements=param.elements;Object.assign(elements.floating.style,{width:"".concat(rects.reference.width,"px")})}})),customMiddlewares)&&(_middlewares=middlewares).push.apply(_middlewares,_to_consumable_array(customMiddlewares));return arrow&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.UE)({element:arrowRef,padding:arrowPadding})),hideWhenReferenceHidden&&middlewares.push((0,_adapters__WEBPACK_IMPORTED_MODULE_2__.jD)()),{middlewares,strictPlacement:isAutoPlacement?void 0:placement}}),[offsetByCrossAxis,arrowRef,arrow,arrowHeight,arrowPadding,offsetByMainAxis,sameWidth,customMiddlewares,placement,hideWhenReferenceHidden,disableFlipMiddleware])}},"./src/lib/floating/usePlacementChangeCallback.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>usePlacementChangeCallback});var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/usePrevious.ts"),_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function usePlacementChangeCallback(initialPlacement,resolvedPlacement,onPlacementChange){var prevPlacement=(0,_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__.Z)(resolvedPlacement);(0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((function(){onPlacementChange&&((void 0===prevPlacement&&initialPlacement!==resolvedPlacement||void 0!==prevPlacement&&prevPlacement!==resolvedPlacement)&&onPlacementChange(resolvedPlacement))}),[prevPlacement,initialPlacement,resolvedPlacement,onPlacementChange])}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/FloatingArrow/FloatingArrow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.FloatingArrow--kqu1P{position:absolute}.FloatingArrow__in--dtnLl{content:"";display:block;transform:translateY(1px)}.FloatingArrow--placement-right--nehGq{transform:rotate(90deg) translate(50%,-50%);transform-origin:right}.FloatingArrow--placement-bottom--bJrMd{transform:rotate(180deg)}.FloatingArrow--placement-left--g5jJ4{transform:rotate(-90deg) translate(-50%,-50%);transform-origin:left}',"",{version:3,sources:["webpack://./src/components/FloatingArrow/FloatingArrow.module.css"],names:[],mappings:"AAAA,sBACE,iBACF,CAEA,0BACE,UAAW,CACX,aAAc,CAGd,yBACF,CAEA,uCACE,2CAA6C,CAC7C,sBACF,CAEA,wCACE,wBACF,CAEA,sCACE,6CAA+C,CAC/C,qBACF",sourcesContent:[".FloatingArrow {\n  position: absolute;\n}\n\n.FloatingArrow__in {\n  content: '';\n  display: block;\n\n  /* см. Примечание 1 в FloatingArrow.tsx. */\n  transform: translateY(1px);\n}\n\n.FloatingArrow--placement-right {\n  transform: rotate(90deg) translate(50%, -50%);\n  transform-origin: right;\n}\n\n.FloatingArrow--placement-bottom {\n  transform: rotate(180deg);\n}\n\n.FloatingArrow--placement-left {\n  transform: rotate(-90deg) translate(-50%, -50%);\n  transform-origin: left;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={FloatingArrow:"FloatingArrow--kqu1P",FloatingArrow__in:"FloatingArrow__in--dtnLl","FloatingArrow--placement-right":"FloatingArrow--placement-right--nehGq","FloatingArrow--placement-bottom":"FloatingArrow--placement-bottom--bJrMd","FloatingArrow--placement-left":"FloatingArrow--placement-left--g5jJ4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);