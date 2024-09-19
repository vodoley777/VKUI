"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1460],{"./src/components/HorizontalScroll/HorizontalScroll.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>HorizontalScroll});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityHasPointer=__webpack_require__("./src/hooks/useAdaptivityHasPointer.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useEventListener=__webpack_require__("./src/hooks/useEventListener.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),fx=__webpack_require__("./src/lib/fx.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),ScrollArrow=__webpack_require__("./src/components/ScrollArrow/ScrollArrow.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),HorizontalScroll_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/HorizontalScroll/HorizontalScroll.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(HorizontalScroll_module.A,options);const HorizontalScroll_HorizontalScroll_module=HorizontalScroll_module.A&&HorizontalScroll_module.A.locals?HorizontalScroll_module.A.locals:void 0;function HorizontalScroll_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function HorizontalScroll_sliced_to_array(arr,i){return function HorizontalScroll_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function HorizontalScroll_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function HorizontalScroll_unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return HorizontalScroll_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return HorizontalScroll_array_like_to_array(o,minLen)}(arr,i)||function HorizontalScroll_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function now(){return performance&&performance.now?performance.now():Date.now()}function roundingAwayFromZero(value){return value>0?Math.ceil(value):Math.floor(value)}var roundUpElementScrollLeft=function(el){return roundingAwayFromZero(el.scrollLeft)};var HorizontalScroll=function(_param){var children=_param.children,getScrollToLeft=_param.getScrollToLeft,getScrollToRight=_param.getScrollToRight,_param_showArrows=_param.showArrows,showArrows=void 0===_param_showArrows||_param_showArrows,_param_arrowSize=_param.arrowSize,arrowSize=void 0===_param_arrowSize?"l":_param_arrowSize,arrowOffsetY=_param.arrowOffsetY,_param_scrollAnimationDuration=_param.scrollAnimationDuration,scrollAnimationDuration=void 0===_param_scrollAnimationDuration?250:_param_scrollAnimationDuration,getRef=_param.getRef,_param_scrollOnAnyWheel=_param.scrollOnAnyWheel,scrollOnAnyWheel=void 0!==_param_scrollOnAnyWheel&&_param_scrollOnAnyWheel,_param_inline=_param.inline,inline=void 0!==_param_inline&&_param_inline,restProps=_object_without_properties(_param,["children","getScrollToLeft","getScrollToRight","showArrows","arrowSize","arrowOffsetY","scrollAnimationDuration","getRef","scrollOnAnyWheel","inline"]),_React_useState=HorizontalScroll_sliced_to_array(react.useState(!1),2),canScrollLeft=_React_useState[0],setCanScrollLeft=_React_useState[1],_React_useState1=HorizontalScroll_sliced_to_array(react.useState(!1),2),canScrollRight=_React_useState1[0],setCanScrollRight=_React_useState1[1],_useDirection=HorizontalScroll_sliced_to_array(function useDirection(){var ref=react.useRef(null),_React_useState=_sliced_to_array(react.useState(void 0),2),direction=_React_useState[0],setDirection=_React_useState[1],_React_useState1=_sliced_to_array(react.useState(void 0),2),writingMode=_React_useState1[0],setWritingMode=_React_useState1[1],window=(0,dom.a4)().window;return(0,useIsomorphicLayoutEffect.E)((function(){if(window&&ref.current){var styleDeclaration=window.getComputedStyle(ref.current);setDirection(styleDeclaration.direction),setWritingMode(styleDeclaration.writingMode)}}),[window]),[ref,direction,writingMode]}(),2),directionRef=_useDirection[0],tmp=_useDirection[1],textDirection=void 0===tmp?"ltr":tmp,setCanScrollStart="ltr"===textDirection?setCanScrollLeft:setCanScrollRight,setCanScrollEnd="ltr"===textDirection?setCanScrollRight:setCanScrollLeft,isCustomScrollingRef=react.useRef(!1),scrollerRef=(0,useExternRef.Z)(getRef,directionRef),animationQueue=react.useRef([]),hasPointer=(0,useAdaptivityHasPointer.Y)(),scrollTo=react.useCallback((function(getScrollPosition){var scrollElement=scrollerRef.current;animationQueue.current.push((function(){var _scrollElement_firstElementChild;return function doScroll(param){var scrollElement=param.scrollElement,getScrollPosition=param.getScrollPosition,animationQueue=param.animationQueue,onScrollToEndBorder=param.onScrollToEndBorder,onScrollEnd=param.onScrollEnd,onScrollStart=param.onScrollStart,initialScrollWidth=param.initialScrollWidth,_param_scrollAnimationDuration=param.scrollAnimationDuration,scrollAnimationDuration=void 0===_param_scrollAnimationDuration?250:_param_scrollAnimationDuration,textDirection=param.textDirection;if(scrollElement&&getScrollPosition){var extremeScrollLeft=("ltr"===textDirection?1:-1)*(initialScrollWidth-scrollElement.offsetWidth),startScrollLeft=roundUpElementScrollLeft(scrollElement),endScrollLeft=getScrollPosition(startScrollLeft);onScrollStart(),startScrollLeft*endScrollLeft<0&&(endScrollLeft=0),Math.abs(endScrollLeft)>=Math.abs(extremeScrollLeft)&&(onScrollToEndBorder(),endScrollLeft=extremeScrollLeft);var startTime=now();!function scroll(){if(scrollElement){var time=now(),elapsed=Math.min((time-startTime)/scrollAnimationDuration,1),value=(0,fx.r)(elapsed),currentScrollLeft=startScrollLeft+(endScrollLeft-startScrollLeft)*value;scrollElement.scrollLeft=roundingAwayFromZero(currentScrollLeft);var scrollEnd="ltr"===textDirection?Math.max(0,endScrollLeft):Math.min(0,endScrollLeft);roundUpElementScrollLeft(scrollElement)===scrollEnd||1===elapsed?(onScrollEnd(),animationQueue.shift(),animationQueue.length>0&&animationQueue[0]()):requestAnimationFrame(scroll)}else onScrollEnd()}()}}({scrollElement,getScrollPosition,animationQueue:animationQueue.current,onScrollToEndBorder:function(){return setCanScrollEnd(!1)},onScrollEnd:function(){return isCustomScrollingRef.current=!1},onScrollStart:function(){return isCustomScrollingRef.current=!0},initialScrollWidth:(null==scrollElement||null===(_scrollElement_firstElementChild=scrollElement.firstElementChild)||void 0===_scrollElement_firstElementChild?void 0:_scrollElement_firstElementChild.scrollWidth)||0,scrollAnimationDuration,textDirection})})),1===animationQueue.current.length&&animationQueue.current[0]()}),[scrollerRef,scrollAnimationDuration,textDirection,setCanScrollEnd]),scrollToLeft=react.useCallback((function(){scrollTo(null!=getScrollToLeft?getScrollToLeft:function(i){return i-scrollerRef.current.offsetWidth})}),[getScrollToLeft,scrollTo,scrollerRef]),scrollToRight=react.useCallback((function(){scrollTo(null!=getScrollToRight?getScrollToRight:function(i){return i+scrollerRef.current.offsetWidth})}),[getScrollToRight,scrollTo,scrollerRef]),calculateArrowsVisibility=react.useCallback((function(){if(showArrows&&hasPointer&&scrollerRef.current&&!isCustomScrollingRef.current){var scrollElement=scrollerRef.current;setCanScrollStart(0!==scrollElement.scrollLeft),setCanScrollEnd(Math.abs(roundUpElementScrollLeft(scrollElement))+scrollElement.offsetWidth<scrollElement.scrollWidth)}}),[showArrows,hasPointer,scrollerRef,setCanScrollStart,setCanScrollEnd]),scrollEvent=(0,useEventListener.M)("scroll",calculateArrowsVisibility);react.useEffect((function addScrollerRefToScrollEvent(){return scrollerRef.current?(scrollEvent.add(scrollerRef.current),scrollEvent.remove):es6.lQ}),[scrollEvent,scrollerRef]),react.useEffect(calculateArrowsVisibility,[calculateArrowsVisibility,children]);var onwheel=react.useCallback((function(e){scrollerRef.current.scrollBy({left:e.deltaX+e.deltaY,behavior:"auto"}),e.preventDefault()}),[scrollerRef]),wheelEvent=(0,useEventListener.M)("wheel",onwheel);return react.useEffect((function addScrollerRefToWheelEvent(){return scrollerRef.current&&scrollOnAnyWheel?(wheelEvent.add(scrollerRef.current),wheelEvent.remove):es6.lQ}),[wheelEvent,scrollerRef,scrollOnAnyWheel]),(0,jsx_runtime.jsxs)(RootComponent.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},restProps),{baseClassName:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.HorizontalScroll,"vkuiInternalHorizontalScroll","always"===showArrows&&HorizontalScroll_HorizontalScroll_module["HorizontalScroll--withConstArrows"],inline&&HorizontalScroll_HorizontalScroll_module["HorizontalScroll--inline"]),onMouseEnter:calculateArrowsVisibility,children:[showArrows&&(hasPointer||void 0===hasPointer)&&canScrollLeft&&(0,jsx_runtime.jsx)(ScrollArrow.L,{"data-testid":void 0,size:arrowSize,offsetY:arrowOffsetY,direction:"left","aria-hidden":!0,tabIndex:-1,className:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.HorizontalScroll__arrow,HorizontalScroll_HorizontalScroll_module.HorizontalScroll__arrowLeft),onClick:scrollToLeft}),showArrows&&(hasPointer||void 0===hasPointer)&&canScrollRight&&(0,jsx_runtime.jsx)(ScrollArrow.L,{"data-testid":void 0,size:arrowSize,offsetY:arrowOffsetY,direction:"right","aria-hidden":!0,tabIndex:-1,className:(0,es6.xW)(HorizontalScroll_HorizontalScroll_module.HorizontalScroll__arrow,HorizontalScroll_HorizontalScroll_module.HorizontalScroll__arrowRight),onClick:scrollToRight}),(0,jsx_runtime.jsx)("div",{className:HorizontalScroll_HorizontalScroll_module.HorizontalScroll__in,ref:scrollerRef,children:(0,jsx_runtime.jsx)("div",{className:HorizontalScroll_HorizontalScroll_module["HorizontalScroll__in-wrapper"],children})})]}))};try{HorizontalScroll.displayName="HorizontalScroll",HorizontalScroll.__docgenInfo={description:"",displayName:"HorizontalScroll",props:{getScrollToLeft:{defaultValue:null,description:"Функция для расчета величины прокрутки при клике на левую стрелку.",name:"getScrollToLeft",required:!1,type:{name:"ScrollPositionHandler"}},getScrollToRight:{defaultValue:null,description:"Функция для расчета величины прокрутки при клике на правую стрелку.",name:"getScrollToRight",required:!1,type:{name:"ScrollPositionHandler"}},arrowSize:{defaultValue:{value:"l"},description:"",name:"arrowSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},arrowOffsetY:{defaultValue:null,description:"Смещает иконки кнопок навигации по вертикали.",name:"arrowOffsetY",required:!1,type:{name:"string | number"}},showArrows:{defaultValue:{value:"true"},description:"",name:"showArrows",required:!1,type:{name:'boolean | "always"'}},scrollAnimationDuration:{defaultValue:{value:"250"},description:"",name:"scrollAnimationDuration",required:!1,type:{name:"number"}},scrollOnAnyWheel:{defaultValue:{value:"false"},description:"Добавляет возможность прокручивать контент на любое колесо мыши.\nПо умолчанию прокручивается как любой горизонтальный контент через shift.",name:"scrollOnAnyWheel",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Задает потомкам инлайновое положение (горизонально)\n\nTODO [>=7]: Сделать по умолчанию `true` (или удалить, применяя стили всегда)",name:"inline",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/HorizontalScroll/HorizontalScroll.tsx#HorizontalScroll"]={docgenInfo:HorizontalScroll.__docgenInfo,name:"HorizontalScroll",path:"src/components/HorizontalScroll/HorizontalScroll.tsx#HorizontalScroll"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ScrollArrow/ScrollArrow.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>ScrollArrow});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),chevron_24=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/chevron_24.js")),chevron_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),ScrollArrow_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ScrollArrow_module.A,options);const ScrollArrow_ScrollArrow_module=ScrollArrow_module.A&&ScrollArrow_module.A.locals?ScrollArrow_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stylesSize={m:ScrollArrow_ScrollArrow_module["ScrollArrow--size-m"],l:ScrollArrow_ScrollArrow_module["ScrollArrow--size-l"]},stylesDirection={up:ScrollArrow_ScrollArrow_module["ScrollArrow--direction-up"],right:ScrollArrow_ScrollArrow_module["ScrollArrow--direction-right"],down:ScrollArrow_ScrollArrow_module["ScrollArrow--direction-down"],left:ScrollArrow_ScrollArrow_module["ScrollArrow--direction-left"]},labelDirection={up:"Назад",right:"Вперед",down:"Вперед",left:"Назад"},ArrowIcon=function(param){var size=param.size,Icon=chevron_24.x;return"m"===size&&(Icon=chevron_16.U),(0,jsx_runtime.jsx)(Icon,{className:ScrollArrow_ScrollArrow_module.ScrollArrow__defaultIcon})},ScrollArrow=function(_param){var _param_size=_param.size,size=void 0===_param_size?"l":_param_size,offsetY=_param.offsetY,direction=_param.direction,labelProp=_param.label,_param_children=_param.children,children=void 0===_param_children?(0,jsx_runtime.jsx)(ArrowIcon,{size}):_param_children,restProps=_object_without_properties(_param,["size","offsetY","direction","label","children"]),label=null!=labelProp?labelProp:labelDirection[direction];return(0,jsx_runtime.jsxs)(RootComponent.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component:"button",type:"button",baseClassName:(0,es6.xW)(ScrollArrow_ScrollArrow_module.ScrollArrow,stylesSize[size],stylesDirection[direction])},restProps),{children:[label&&(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:label}),(0,jsx_runtime.jsx)("span",{className:ScrollArrow_ScrollArrow_module.ScrollArrow__icon,style:offsetY?{top:offsetY}:void 0,children})]}))};try{ScrollArrow.displayName="ScrollArrow",ScrollArrow.__docgenInfo={description:"Компонент стрелки. Используется в [HorizontalScroll](#/HorizontalScroll) и [Gallery](#/Gallery).",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:ScrollArrow.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(__react_docgen_typescript_loader_error){}},"./src/lib/fx.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function easeInOutSine(x){return.5*(1-Math.cos(Math.PI*x))}function cubicBezier(x1,x2){return function(progress){var t=progress,cx=3*x1,bx=3*(x2-x1)-cx;return(1-cx-bx)*Math.pow(t,3)+bx*Math.pow(t,2)+cx*t}}__webpack_require__.d(__webpack_exports__,{A:()=>cubicBezier,r:()=>easeInOutSine})},"../../node_modules/@vkontakte/icons/dist_es6/16/chevron_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>Icon16Chevron});var Icon16Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Icon24Chevron});var Icon24Chevron=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a1 1 0 0 1 0 1.416l-5.084 5.084a1 1 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/HorizontalScroll/HorizontalScroll.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.HorizontalScroll--UlHeW{isolation:isolate;overflow-x:hidden;position:relative}.HorizontalScroll__in--ewIeO{overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}.HorizontalScroll__in--ewIeO::-webkit-scrollbar{display:none}.HorizontalScroll__in-wrapper--tyEBZ{transition:transform .2s}.HorizontalScroll__arrow--PtjbC{inset-block-start:0;opacity:0;position:absolute;z-index:var(--vkui_internal--z_index_horizontal_scroll_arrow)}.HorizontalScroll--UlHeW:hover .HorizontalScroll__arrow--PtjbC{opacity:var(--vkui--opacity_disable_accessibility)}.HorizontalScroll--UlHeW .HorizontalScroll__arrow--PtjbC:hover,.HorizontalScroll--withConstArrows--MZfJ7 .HorizontalScroll__arrow--PtjbC,.HorizontalScroll--withConstArrows--MZfJ7:hover .HorizontalScroll__arrow--PtjbC{opacity:1}.HorizontalScroll__arrowLeft--ey43s:hover~.HorizontalScroll__in--ewIeO .HorizontalScroll__in-wrapper--tyEBZ{transform:translateX(8px)}.HorizontalScroll__arrowRight--ixdX7:hover~.HorizontalScroll__in--ewIeO .HorizontalScroll__in-wrapper--tyEBZ{transform:translateX(-8px)}.vkuiInternalTabs .HorizontalScroll--UlHeW{min-inline-size:100%}.HorizontalScroll--inline--CCKIN .HorizontalScroll__in-wrapper--tyEBZ,.vkuiInternalTabs .HorizontalScroll__in-wrapper--tyEBZ{align-items:stretch;display:flex}.vkuiInternalTabs--withGaps .HorizontalScroll__in-wrapper--tyEBZ:after,.vkuiInternalTabs--withGaps .HorizontalScroll__in-wrapper--tyEBZ:before{block-size:1px;content:"";display:block;flex-shrink:0;inline-size:var(--vkui--size_base_padding_horizontal--regular)}',"",{version:3,sources:["webpack://./src/components/HorizontalScroll/HorizontalScroll.module.css"],names:[],mappings:"AAAA,yBAQE,iBAAkB,CADlB,iBAAkB,CANlB,iBAQF,CAEA,6BACE,eAAgB,CAChB,gCAAiC,CAMjC,oBACF,CAEA,gDACE,YACF,CAEA,qCACE,wBACF,CAEA,gCAGE,mBAAoB,CACpB,SAAU,CAFV,iBAAkB,CADlB,6DAIF,CAEA,+DACE,kDACF,CAEA,yNAGE,SACF,CAEA,4GACE,yBACF,CAEA,6GACE,0BACF,CAOA,2CACE,oBACF,CAIA,6HAGE,mBAAoB,CADpB,YAEF,CAGA,+IAKE,cAAe,CACf,UAAW,CAJX,aAAc,CAEd,aAAc,CADd,8DAIF",sourcesContent:[".HorizontalScroll {\n  position: relative;\n\n  /**\n   * ⚠️ WARNING ⚠️\n   * `overflow-y` мы не трогаем, т.к. из-за `hidden` могут обрезаться тени у потомков.\n   */\n  overflow-x: hidden;\n  isolation: isolate;\n}\n\n.HorizontalScroll__in {\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n\n  /**\n   * Для удаление скролла в Firefox.\n   * В версии ниже 64 будет виден скролл, но это не ломает функциональность.\n   */\n  scrollbar-width: none;\n}\n\n.HorizontalScroll__in::-webkit-scrollbar {\n  display: none;\n}\n\n.HorizontalScroll__in-wrapper {\n  transition: transform 0.2s;\n}\n\n.HorizontalScroll__arrow {\n  z-index: var(--vkui_internal--z_index_horizontal_scroll_arrow);\n  position: absolute;\n  inset-block-start: 0;\n  opacity: 0;\n}\n\n.HorizontalScroll:hover .HorizontalScroll__arrow {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.HorizontalScroll--withConstArrows .HorizontalScroll__arrow,\n.HorizontalScroll--withConstArrows:hover .HorizontalScroll__arrow,\n.HorizontalScroll .HorizontalScroll__arrow:hover {\n  opacity: 1;\n}\n\n.HorizontalScroll__arrowLeft:hover ~ .HorizontalScroll__in .HorizontalScroll__in-wrapper {\n  transform: translateX(8px);\n}\n\n.HorizontalScroll__arrowRight:hover ~ .HorizontalScroll__in .HorizontalScroll__in-wrapper {\n  transform: translateX(-8px);\n}\n\n/**\n * CMP:\n * Tabs\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabs) .HorizontalScroll {\n  min-inline-size: 100%;\n}\n\n/* TODO [>=7]: убрать, использовать inline-mode */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabs) .HorizontalScroll__in-wrapper,\n.HorizontalScroll--inline .HorizontalScroll__in-wrapper {\n  display: flex;\n  align-items: stretch;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalTabs--withGaps) .HorizontalScroll__in-wrapper::after,\n:global(.vkuiInternalTabs--withGaps) .HorizontalScroll__in-wrapper::before {\n  display: block;\n  inline-size: var(--vkui--size_base_padding_horizontal--regular);\n  flex-shrink: 0;\n  block-size: 1px;\n  content: '';\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={HorizontalScroll:"HorizontalScroll--UlHeW",HorizontalScroll__in:"HorizontalScroll__in--ewIeO","HorizontalScroll__in-wrapper":"HorizontalScroll__in-wrapper--tyEBZ",HorizontalScroll__arrow:"HorizontalScroll__arrow--PtjbC","HorizontalScroll--withConstArrows":"HorizontalScroll--withConstArrows--MZfJ7",HorizontalScroll__arrowLeft:"HorizontalScroll__arrowLeft--ey43s",HorizontalScroll__arrowRight:"HorizontalScroll__arrowRight--ixdX7","HorizontalScroll--inline":"HorizontalScroll--inline--CCKIN"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ScrollArrow--JgxNW{background-color:initial;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;transition:opacity .15s;transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.ScrollArrow--direction-left--jS38A,.ScrollArrow--direction-right--UIq4o{block-size:100%;flex-direction:column}.ScrollArrow--direction-down--KQFqm,.ScrollArrow--direction-up--LfNde{flex-direction:row;inline-size:100%}.ScrollArrow__icon--gJpr6{align-items:center;background-color:var(--vkui--color_background_contrast_themed);box-shadow:var(--vkui--elevation3);color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative}.ScrollArrow--size-m--c7dtS .ScrollArrow__icon--gJpr6{block-size:28px;border-radius:14px;inline-size:28px}.ScrollArrow--size-l--f8Hpn .ScrollArrow__icon--gJpr6{block-size:40px;border-radius:24px;inline-size:40px}.ScrollArrow--direction-left--jS38A{-webkit-padding-start:var(--vkui--size_base_padding_horizontal--regular,16px);inset-inline-start:0;padding-inline-start:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-right--UIq4o{-webkit-padding-end:var(--vkui--size_base_padding_horizontal--regular,16px);inset-inline-end:0;padding-inline-end:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-up--LfNde{-webkit-padding-before:var(--vkui--size_base_padding_horizontal--regular,16px);inset-block-start:0;padding-block-start:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-down--KQFqm{-webkit-padding-after:var(--vkui--size_base_padding_horizontal--regular,16px);inset-block-end:0;padding-block-end:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-left--jS38A .ScrollArrow__defaultIcon--k1Jug{transform:rotate(180deg)}.ScrollArrow--direction-up--LfNde .ScrollArrow__defaultIcon--k1Jug{transform:rotate(-90deg)}.ScrollArrow--direction-down--KQFqm .ScrollArrow__defaultIcon--k1Jug{transform:rotate(90deg)}","",{version:3,sources:["webpack://./src/components/ScrollArrow/ScrollArrow.module.css"],names:[],mappings:"AAAA,oBAKE,wBAA6B,CAD7B,QAAS,CAHT,cAAe,CAOf,YAAa,CACb,sBAAuB,CANvB,SAAU,CAGV,uBAAyB,CACzB,iEAAkE,CALlE,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAQF,CAEA,yEAEE,eAAgB,CAChB,qBACF,CAEA,sEAGE,kBAAmB,CADnB,gBAEF,CAEA,0BAME,kBAAmB,CAJnB,8DAA+D,CAE/D,kCAAmC,CADnC,uCAAwC,CAExC,YAAa,CAEb,sBAAuB,CANvB,iBAOF,CAEA,sDAEE,eAAgB,CAChB,kBAAmB,CAFnB,gBAGF,CAEA,sDAEE,eAAgB,CAChB,kBAAmB,CAFnB,gBAGF,CAEA,oCACE,6EAA8E,CAC9E,oBAAqB,CADrB,4EAEF,CAEA,qCACE,2EAA4E,CAC5E,kBAAmB,CADnB,0EAEF,CAEA,kCACE,8EAA6E,CAC7E,mBAAoB,CADpB,2EAEF,CAEA,oCACE,6EAA2E,CAC3E,iBAAkB,CADlB,yEAEF,CAEA,qEACE,wBACF,CAEA,mEACE,wBACF,CAEA,qEACE,uBACF",sourcesContent:[".ScrollArrow {\n  cursor: pointer;\n  user-select: auto;\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  transition: opacity 0.15s;\n  transition-timing-function: var(--vkui--animation_easing_platform);\n  display: flex;\n  justify-content: center;\n}\n\n.ScrollArrow--direction-left,\n.ScrollArrow--direction-right {\n  block-size: 100%;\n  flex-direction: column;\n}\n\n.ScrollArrow--direction-up,\n.ScrollArrow--direction-down {\n  inline-size: 100%;\n  flex-direction: row;\n}\n\n.ScrollArrow__icon {\n  position: relative;\n  background-color: var(--vkui--color_background_contrast_themed);\n  color: var(--vkui--color_icon_secondary);\n  box-shadow: var(--vkui--elevation3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ScrollArrow--size-m .ScrollArrow__icon {\n  inline-size: 28px;\n  block-size: 28px;\n  border-radius: 14px;\n}\n\n.ScrollArrow--size-l .ScrollArrow__icon {\n  inline-size: 40px;\n  block-size: 40px;\n  border-radius: 24px;\n}\n\n.ScrollArrow--direction-left {\n  padding-inline-start: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-inline-start: 0;\n}\n\n.ScrollArrow--direction-right {\n  padding-inline-end: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-inline-end: 0;\n}\n\n.ScrollArrow--direction-up {\n  padding-block-start: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-block-start: 0;\n}\n\n.ScrollArrow--direction-down {\n  padding-block-end: var(--vkui--size_base_padding_horizontal--regular, 16px);\n  inset-block-end: 0;\n}\n\n.ScrollArrow--direction-left .ScrollArrow__defaultIcon {\n  transform: rotate(180deg);\n}\n\n.ScrollArrow--direction-up .ScrollArrow__defaultIcon {\n  transform: rotate(-90deg);\n}\n\n.ScrollArrow--direction-down .ScrollArrow__defaultIcon {\n  transform: rotate(90deg);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={ScrollArrow:"ScrollArrow--JgxNW","ScrollArrow--direction-left":"ScrollArrow--direction-left--jS38A","ScrollArrow--direction-right":"ScrollArrow--direction-right--UIq4o","ScrollArrow--direction-down":"ScrollArrow--direction-down--KQFqm","ScrollArrow--direction-up":"ScrollArrow--direction-up--LfNde",ScrollArrow__icon:"ScrollArrow__icon--gJpr6","ScrollArrow--size-m":"ScrollArrow--size-m--c7dtS","ScrollArrow--size-l":"ScrollArrow--size-l--f8Hpn",ScrollArrow__defaultIcon:"ScrollArrow__defaultIcon--k1Jug"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);