"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5594],{"./src/components/Search/Search.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Search});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),search_outline_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/search_outline_16.js"),clear_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/16/clear_16.js"),cancel_24=__webpack_require__("../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),useAdaptivityConditionalRender=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),useBooleanState=__webpack_require__("./src/hooks/useBooleanState.ts"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useNativeFormResetListener=__webpack_require__("./src/hooks/useNativeFormResetListener.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),callMultiple=__webpack_require__("./src/lib/callMultiple.ts"),functions=__webpack_require__("./src/lib/touch/functions.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),Button=__webpack_require__("./src/components/Button/Button.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Search_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Search/Search.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Search_module.A,options);const Search_Search_module=Search_module.A&&Search_module.A.locals?Search_module.A.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Search=function(_param){var idProp=_param.id,_param_before=_param.before,before=void 0===_param_before?(0,jsx_runtime.jsx)(search_outline_16.b,{}):_param_before,className=_param.className,_param_placeholder=_param.placeholder,placeholder=void 0===_param_placeholder?"Поиск":_param_placeholder,_param_after=_param.after,after=void 0===_param_after?"Отмена":_param_after,getRef=_param.getRef,icon=_param.icon,_param_onIconClick=_param.onIconClick,onIconClick=void 0===_param_onIconClick?es6.lQ:_param_onIconClick,style=_param.style,_param_autoComplete=_param.autoComplete,autoComplete=void 0===_param_autoComplete?"off":_param_autoComplete,onChange=_param.onChange,iconLabel=_param.iconLabel,_param_clearLabel=_param.clearLabel,clearLabel=void 0===_param_clearLabel?"Очистить":_param_clearLabel,noPadding=_param.noPadding,getRootRef=_param.getRootRef,_param_findButtonText=_param.findButtonText,findButtonText=void 0===_param_findButtonText?"Найти":_param_findButtonText,onFindButtonClick=_param.onFindButtonClick,inputProps=_object_without_properties(_param,["id","before","className","placeholder","after","getRef","icon","onIconClick","style","autoComplete","onChange","iconLabel","clearLabel","noPadding","getRootRef","findButtonText","onFindButtonClick"]),inputRef=(0,useExternRef.Z)(getRef),_useBooleanState=(0,useBooleanState.B)(!1),isFocused=_useBooleanState.value,setFocusedTrue=_useBooleanState.setTrue,setFocusedFalse=_useBooleanState.setFalse,generatedId=react.useId(),inputId=idProp||"search-".concat(generatedId),_React_useState=_sliced_to_array(react.useState((function(){return Boolean(inputProps.value||inputProps.defaultValue)})),2),hasValue=_React_useState[0],setHasValue=_React_useState[1],_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY,adaptiveSizeY=(0,useAdaptivityConditionalRender.V)().sizeY,platform=(0,usePlatform.V)(),onCancel=react.useCallback((function(){var _Object_getOwnPropertyDescriptor,_inputRef_current,nativeInputValueSetter=null===(_Object_getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value"))||void 0===_Object_getOwnPropertyDescriptor?void 0:_Object_getOwnPropertyDescriptor.set;null==nativeInputValueSetter||nativeInputValueSetter.call(inputRef.current,"");var ev2=new Event("input",{bubbles:!0});null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.dispatchEvent(ev2)}),[inputRef]),onIconClickStart=react.useCallback((function(e){return onIconClick(e)}),[onIconClick]),onIconCancelClickStart=react.useCallback((function(e){var _inputRef_current;e.preventDefault(),null===(_inputRef_current=inputRef.current)||void 0===_inputRef_current||_inputRef_current.focus(),(0,functions.jl)()&&onCancel()}),[inputRef,onCancel]);return(0,useIsomorphicLayoutEffect.E)((function(){void 0!==inputProps.value&&setHasValue(Boolean(inputProps.value))}),[inputProps.value]),(0,useNativeFormResetListener.g)(inputRef,(function(){setHasValue(Boolean(inputProps.defaultValue))})),(0,jsx_runtime.jsxs)("div",{className:(0,es6.xW)("vkuiInternalSearch",Search_Search_module.Search,"none"===sizeY&&Search_Search_module["Search--sizeY-none"],"compact"===sizeY&&Search_Search_module["Search--sizeY-compact"],isFocused&&Search_Search_module["Search--focused"],hasValue&&Search_Search_module["Search--has-value"],after&&Search_Search_module["Search--has-after"],icon&&Search_Search_module["Search--has-icon"],inputProps.disabled&&Search_Search_module["Search--disabled"],!noPadding&&Search_Search_module["Search--withPadding"],className),ref:getRootRef,style,children:[(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.Search__field,children:[(0,jsx_runtime.jsx)("label",{htmlFor:inputId,className:Search_Search_module.Search__label,children:placeholder}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.Search__input,children:[before,(0,jsx_runtime.jsx)(Headline.$,_object_spread_props(_object_spread({Component:"input",type:"search",level:"1",weight:"3"},inputProps),{id:inputId,placeholder,autoComplete,getRootRef:inputRef,className:Search_Search_module.Search__nativeInput,onFocus:function(e){setFocusedTrue(),inputProps.onFocus&&inputProps.onFocus(e)},onBlur:function(e){setFocusedFalse(),inputProps.onBlur&&inputProps.onBlur(e)},onChange:(0,callMultiple.j)(onChange,(function(e){return setHasValue(Boolean(e.currentTarget.value))}))}))]}),(0,jsx_runtime.jsxs)("div",{className:Search_Search_module.Search__controls,children:[icon&&(0,jsx_runtime.jsxs)(IconButton.K,{hoverMode:"opacity",onPointerDown:onIconClickStart,className:Search_Search_module.Search__icon,onFocus:setFocusedTrue,onBlur:setFocusedFalse,onClick:es6.lQ,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:iconLabel}),icon]}),(0,jsx_runtime.jsxs)(IconButton.K,{hoverMode:"opacity",onPointerDown:onIconCancelClickStart,onClick:onCancel,className:Search_Search_module.Search__icon,tabIndex:hasValue?void 0:-1,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{children:clearLabel}),"ios"===platform?(0,jsx_runtime.jsx)(clear_16.M,{}):(0,jsx_runtime.jsx)(cancel_24.S,{})]}),adaptiveSizeY.compact&&onFindButtonClick&&(0,jsx_runtime.jsx)(Button.$,{mode:"primary",size:"m",className:(0,es6.xW)(Search_Search_module.Search__findButton,adaptiveSizeY.compact.className),focusVisibleMode:"inside",onClick:onFindButtonClick,tabIndex:hasValue?void 0:-1,children:findButtonText})]})]}),"ios"===platform&&after&&(0,jsx_runtime.jsx)(Button.$,{mode:"tertiary",size:"m",className:Search_Search_module.Search__after,focusVisibleMode:"inside",onClick:onCancel,onFocus:setFocusedTrue,onBlur:setFocusedFalse,children:(0,jsx_runtime.jsx)("span",{className:Search_Search_module.Search__afterText,children:after})})]})};try{Search.displayName="Search",Search.__docgenInfo={description:"",displayName:"Search",props:{after:{defaultValue:{value:"Отмена"},description:'iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.',name:"after",required:!1,type:{name:"ReactNode"}},before:{defaultValue:{value:"<Icon16SearchOutline />"},description:"",name:"before",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},onIconClick:{defaultValue:null,description:"",name:"onIconClick",required:!1,type:{name:"PointerEventHandler<HTMLElement>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},iconLabel:{defaultValue:null,description:"",name:"iconLabel",required:!1,type:{name:"string"}},clearLabel:{defaultValue:{value:"Очистить"},description:"",name:"clearLabel",required:!1,type:{name:"string"}},noPadding:{defaultValue:null,description:"Удаляет отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},findButtonText:{defaultValue:{value:"Найти"},description:"Текст для кнопки Найти",name:"findButtonText",required:!1,type:{name:"string"}},onFindButtonClick:{defaultValue:null,description:"Коллбэк для кнопки Найти",name:"onFindButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Search/Search.tsx#Search"]={docgenInfo:Search.__docgenInfo,name:"Search",path:"src/components/Search/Search.tsx#Search"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useBooleanState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>useBooleanState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useBooleanState=function(){var defaultValue=arguments.length>0&&void 0!==arguments[0]&&arguments[0],_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultValue),2),value=_React_useState[0],setValue=_React_useState[1],setTrue=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){setValue(!0)}),[]),setFalse=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){setValue(!1)}),[]),toggle=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){setValue(!value)}),[value]);return{value,setTrue,setFalse,toggle}}},"./src/hooks/useNativeFormResetListener.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useNativeFormResetListener});__webpack_require__("../../node_modules/react/index.js");var _lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),useNativeFormResetListener=function(ref,handler){(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__.E)((function(){if(ref.current){var formEl=ref.current.closest("form");if(formEl)return formEl.addEventListener("reset",handler),function(){formEl.removeEventListener("reset",handler)}}}),[ref,handler])}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Search/Search.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Search--miXMq{display:flex;overflow:hidden;-webkit-tap-highlight-color:transparent;--vkui_internal--search_height:var(--vkui--size_search_height--regular)}.Search--withPadding--e3rxP{padding-block:8px;padding-inline:var(--vkui--size_base_padding_horizontal--regular)}.Search--sizeY-compact--Ftw8x{--vkui_internal--search_height:var(--vkui--size_search_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Search--sizeY-none--AaLrX{--vkui_internal--search_height:var(--vkui--size_search_height--compact)}}.Search__field--N5Ft5{background-color:var(--vkui--color_search_field_background);block-size:var(--vkui_internal--search_height);border-radius:var(--vkui--size_border_radius--regular);display:flex;flex:2;inline-size:10000px;overflow:hidden;position:relative}.Search__field--N5Ft5:hover{background-color:var(--vkui--color_search_field_background--hover)}.Search__field--N5Ft5:active{background-color:var(--vkui--color_search_field_background--active)}.Search__label--zh0Az{cursor:text;inset:0;opacity:0;position:absolute}.Search__input--yQZAL{-webkit-padding-start:12px;align-items:center;block-size:100%;border-radius:inherit;color:var(--vkui--color_icon_medium);display:flex;inline-size:calc(100% - 1px);justify-content:flex-start;padding-inline-start:12px;position:relative}.Search__nativeInput--Yyy7x{-webkit-appearance:none;block-size:100%;border:0;inset:0;margin:0;padding:0;position:absolute;-webkit-padding-start:36px;background-color:initial;border-radius:inherit;box-sizing:border-box;color:var(--vkui--color_text_primary);flex-grow:1;inline-size:-webkit-fill-available;inline-size:-moz-available;inline-size:stretch;max-inline-size:100%;min-inline-size:0;padding-inline-start:36px}.Search__nativeInput--Yyy7x::-webkit-search-cancel-button,.Search__nativeInput--Yyy7x::-webkit-search-decoration,.Search__nativeInput--Yyy7x::-webkit-search-results-button,.Search__nativeInput--Yyy7x::-webkit-search-results-decoration{display:none}.Search__nativeInput--Yyy7x:focus{outline:var(--vkui_internal--outline-reset)}.Search--has-after--z9EX6 .Search__nativeInput--Yyy7x{border-end-end-radius:0;border-start-end-radius:0}.Search--disabled--hUOwC{cursor:default;pointer-events:none}.Search--disabled--hUOwC,.Search__nativeInput--Yyy7x:disabled{opacity:var(--vkui--opacity_disable_accessibility)}.Search__nativeInput--Yyy7x::-ms-input-placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Search__nativeInput--Yyy7x::placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Search__nativeInput--Yyy7x:disabled::-ms-input-placeholder{color:var(--vkui--color_text_secondary)}.Search__nativeInput--Yyy7x:disabled::placeholder{color:var(--vkui--color_text_secondary)}.Search__controls--GImFV{align-items:center;color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative;transform:translate3d(100%,0,0);transition:transform .3s var(--vkui--animation_easing_platform);--vkui_internal--search_icon_size:calc(var(--vkui_internal--search_height) + 4px)}.Search--has-icon--NTZkW .Search__controls--GImFV{transform:translate3d(calc(100% - var(--vkui_internal--search_icon_size)),0,0)}.Search--has-value--ifeTd .Search__controls--GImFV{transform:translateZ(0)}.Search__icon--XS46o{align-items:center;block-size:100%;border-radius:var(--vkui--size_border_radius--regular);display:flex;inline-size:var(--vkui_internal--search_icon_size);justify-content:center}.Search__icon--XS46o .vkuiIcon{padding:0}.Search__after--qss6Y{flex:0;max-inline-size:-webkit-min-content;max-inline-size:-moz-min-content;max-inline-size:min-content;min-inline-size:0;overflow:hidden;pointer-events:none;transform:translate(50%);transform-origin:left;transition:flex .3s var(--vkui--animation_easing_platform),transform .3s var(--vkui--animation_easing_platform)}.Search--focused--VBtnI .Search__after--qss6Y,.Search--has-value--ifeTd .Search__after--qss6Y{flex:1;margin-inline:4px calc(4px - var(--vkui--size_base_padding_horizontal--regular));pointer-events:auto;transform:translate(0)}.Search__afterText--lOg8g{display:block;overflow:hidden;text-overflow:clip;white-space:nowrap}.Search__findButton--cC6rN{inline-size:auto;max-inline-size:none;min-inline-size:0}.Group--mode-plain--m_CCR .Search--miXMq{-webkit-padding-before:4px;padding-block-start:4px}","",{version:3,sources:["webpack://./src/components/Search/Search.module.css"],names:[],mappings:"AAAA,eACE,YAAa,CACb,eAAgB,CAChB,uCAAwC,CAExC,uEACF,CAEA,4BACE,iBAAkB,CAClB,iEACF,CAMA,8BACE,uEACF,CAEA,iEACE,2BACE,uEACF,CACF,CAEA,sBAKE,2DAA4D,CAD5D,8CAA+C,CAE/C,sDAAuD,CAHvD,YAAa,CAFb,MAAO,CASP,mBAAoB,CACpB,eAAgB,CAThB,iBAUF,CAEA,4BACE,kEACF,CAEA,6BACE,mEACF,CAEA,sBAEE,WAAY,CACZ,OAAQ,CACR,SAAU,CAHV,iBAIF,CAEA,sBACE,0BAA0B,CAI1B,kBAAmB,CAEnB,eAAgB,CAChB,qBAAsB,CANtB,oCAAqC,CACrC,YAAa,CAGb,4BAA6B,CAF7B,0BAA2B,CAH3B,yBAA0B,CAQ1B,iBACF,CAEA,4BAIE,uBAAwB,CADxB,eAAgB,CAEhB,QAAS,CAHT,OAAQ,CAIR,QAAS,CACT,SAAU,CANV,iBAAkB,CAOlB,0BAA0B,CAO1B,wBAA6B,CAL7B,qBAAsB,CADtB,qBAAsB,CAOtB,qCAAsC,CAJtC,WAAY,CAEZ,kCAAoB,CAApB,0BAAoB,CAApB,mBAAoB,CAHpB,oBAAqB,CAErB,iBAAkB,CALlB,yBASF,CAEA,2OAIE,YACF,CAEA,kCACE,2CACF,CAEA,sDAEE,uBAAwB,CADxB,yBAEF,CAEA,yBAGE,cAAe,CADf,mBAEF,CAEA,8DALE,kDAOF,CAEA,mDACE,uCAAwC,CAExC,SACF,CAJA,yCACE,uCAAwC,CAExC,SACF,CAEA,4DACE,uCACF,CAFA,kDACE,uCACF,CAEA,yBAGE,kBAAmB,CAEnB,uCAAwC,CAHxC,YAAa,CAEb,sBAAuB,CAHvB,iBAAkB,CAOlB,+BAAkC,CAFlC,+DAAiE,CAIjE,iFACF,CAEA,kDAEE,8EACF,CAEA,mDACE,uBACF,CAEA,qBAGE,kBAAmB,CAEnB,eAAgB,CAChB,sDAAuD,CAJvD,YAAa,CADb,kDAAmD,CAGnD,sBAGF,CAGA,+BACE,SACF,CAEA,sBACE,MAAO,CAIP,mCAA4B,CAA5B,gCAA4B,CAA5B,2BAA4B,CAD5B,iBAAwB,CAKxB,eAAgB,CAHhB,mBAAoB,CAJpB,wBAAyB,CACzB,qBAAsB,CAItB,+GAGF,CAEA,8FAEE,MAAO,CAGP,gFAAiF,CADjF,mBAAuB,CADvB,sBAGF,CAEA,0BACE,aAAc,CAGd,eAAgB,CADhB,kBAAmB,CADnB,kBAGF,CAEA,2BAGE,gBAAoB,CADpB,oBAAwB,CADxB,iBAGF,CAEA,yCACE,0BAAwB,CAAxB,uBACF",sourcesContent:[".Search {\n  display: flex;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent;\n\n  --vkui_internal--search_height: var(--vkui--size_search_height--regular);\n}\n\n.Search--withPadding {\n  padding-block: 8px;\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n}\n\n/*\n  sizeY-compact\n */\n\n.Search--sizeY-compact {\n  --vkui_internal--search_height: var(--vkui--size_search_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Search--sizeY-none {\n    --vkui_internal--search_height: var(--vkui--size_search_height--compact);\n  }\n}\n\n.Search__field {\n  flex: 2;\n  position: relative;\n  display: flex;\n  block-size: var(--vkui_internal--search_height);\n  background-color: var(--vkui--color_search_field_background);\n  border-radius: var(--vkui--size_border_radius--regular);\n  /**\n   * Костыль для PanelHeader. Необходимо для растягивания на всю ширину.\n  */\n  inline-size: 10000px;\n  overflow: hidden;\n}\n\n.Search__field:hover {\n  background-color: var(--vkui--color_search_field_background--hover);\n}\n\n.Search__field:active {\n  background-color: var(--vkui--color_search_field_background--active);\n}\n\n.Search__label {\n  position: absolute;\n  cursor: text;\n  inset: 0;\n  opacity: 0;\n}\n\n.Search__input {\n  padding-inline-start: 12px;\n  color: var(--vkui--color_icon_medium);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  inline-size: calc(100% - 1px);\n  block-size: 100%;\n  border-radius: inherit;\n  position: relative;\n}\n\n.Search__nativeInput {\n  position: absolute;\n  inset: 0;\n  block-size: 100%;\n  -webkit-appearance: none; /* не используем textfield из-за бага в iOS 15.1 http://www.openradar.me/FB9744107 */\n  border: 0;\n  margin: 0;\n  padding: 0;\n  padding-inline-start: 36px;\n  box-sizing: border-box;\n  border-radius: inherit;\n  max-inline-size: 100%;\n  flex-grow: 1;\n  min-inline-size: 0;\n  inline-size: stretch; /* автопрефиксер добавит фолбеки https://caniuse.com/mdn-css_properties_width_stretch */\n  background-color: transparent;\n  color: var(--vkui--color_text_primary);\n}\n\n.Search__nativeInput::-webkit-search-decoration,\n.Search__nativeInput::-webkit-search-cancel-button,\n.Search__nativeInput::-webkit-search-results-button,\n.Search__nativeInput::-webkit-search-results-decoration {\n  display: none;\n}\n\n.Search__nativeInput:focus {\n  outline: var(--vkui_internal--outline-reset);\n}\n\n.Search--has-after .Search__nativeInput {\n  border-start-end-radius: 0;\n  border-end-end-radius: 0;\n}\n\n.Search--disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n  pointer-events: none;\n  cursor: default;\n}\n\n.Search__nativeInput:disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.Search__nativeInput::placeholder {\n  color: var(--vkui--color_text_secondary);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.Search__nativeInput:disabled::placeholder {\n  color: var(--vkui--color_text_secondary);\n}\n\n.Search__controls {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vkui--color_icon_secondary);\n  transition: transform 0.3s var(--vkui--animation_easing_platform);\n  /* Используем translate3d, чтобы поправить дергание при наведении в Safari */\n  transform: translate3d(100%, 0, 0);\n\n  --vkui_internal--search_icon_size: calc(var(--vkui_internal--search_height) + 4px);\n}\n\n.Search--has-icon .Search__controls {\n  /* Исключаем параметр icon из расчёта, чтобы он оставался видимым */\n  transform: translate3d(calc(100% - var(--vkui_internal--search_icon_size)), 0, 0);\n}\n\n.Search--has-value .Search__controls {\n  transform: translate3d(0, 0, 0);\n}\n\n.Search__icon {\n  inline-size: var(--vkui_internal--search_icon_size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  block-size: 100%;\n  border-radius: var(--vkui--size_border_radius--regular);\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n.Search__icon :global(.vkuiIcon) {\n  padding: 0;\n}\n\n.Search__after {\n  flex: 0;\n  transform: translate(50%);\n  transform-origin: left;\n  min-inline-size: initial;\n  max-inline-size: min-content;\n  pointer-events: none;\n  transition: flex 0.3s var(--vkui--animation_easing_platform),\n    transform 0.3s var(--vkui--animation_easing_platform);\n  overflow: hidden;\n}\n\n.Search--focused .Search__after,\n.Search--has-value .Search__after {\n  flex: 1;\n  transform: translate(0);\n  pointer-events: initial;\n  margin-inline: 4px calc(4px - var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.Search__afterText {\n  display: block;\n  white-space: nowrap;\n  text-overflow: clip;\n  overflow: hidden;\n}\n\n.Search__findButton {\n  min-inline-size: initial;\n  max-inline-size: initial;\n  inline-size: initial;\n}\n\n.Group--mode-plain .Search {\n  padding-block-start: 4px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Search:"Search--miXMq","Search--withPadding":"Search--withPadding--e3rxP","Search--sizeY-compact":"Search--sizeY-compact--Ftw8x","Search--sizeY-none":"Search--sizeY-none--AaLrX",Search__field:"Search__field--N5Ft5",Search__label:"Search__label--zh0Az",Search__input:"Search__input--yQZAL",Search__nativeInput:"Search__nativeInput--Yyy7x","Search--has-after":"Search--has-after--z9EX6","Search--disabled":"Search--disabled--hUOwC",Search__controls:"Search__controls--GImFV","Search--has-icon":"Search--has-icon--NTZkW","Search--has-value":"Search--has-value--ifeTd",Search__icon:"Search__icon--XS46o",Search__after:"Search__after--qss6Y","Search--focused":"Search--focused--VBtnI",Search__afterText:"Search__afterText--lOg8g",Search__findButton:"Search__findButton--cC6rN","Group--mode-plain":"Group--mode-plain--m_CCR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);