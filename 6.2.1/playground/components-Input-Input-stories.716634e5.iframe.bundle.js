"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6115],{"./src/components/Input/Input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),FormField=__webpack_require__("./src/components/FormField/FormField.tsx"),UnstyledTextField=__webpack_require__("./src/components/UnstyledTextField/UnstyledTextField.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Input_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Input/Input.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.A,options);const Input_Input_module=Input_module.A&&Input_module.A.locals?Input_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var sizeYClassNames=_define_property({none:Input_Input_module["Input--sizeY-none"]},"compact",Input_Input_module["Input--sizeY-compact"]),Input=function(_param){var _param_type=_param.type,type=void 0===_param_type?"text":_param_type,_param_align=_param.align,align=void 0===_param_align?"left":_param_align,getRef=_param.getRef,className=_param.className,getRootRef=_param.getRootRef,style=_param.style,before=_param.before,after=_param.after,status=_param.status,mode=_param.mode,restProps=_object_without_properties(_param,["type","align","getRef","className","getRootRef","style","before","after","status","mode"]),_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY;return(0,jsx_runtime.jsx)(FormField.z,{style,className:(0,es6.xW)(Input_Input_module.Input,"right"===align&&Input_Input_module["Input--align-right"],"center"===align&&Input_Input_module["Input--align-center"],"regular"!==sizeY&&sizeYClassNames[sizeY],before&&Input_Input_module["Input--hasBefore"],after&&Input_Input_module["Input--hasAfter"],className),getRootRef,before,after,disabled:restProps.disabled,mode,status,children:(0,jsx_runtime.jsx)(UnstyledTextField.K,_object_spread_props(_object_spread({},restProps),{as:"input",type,className:Input_Input_module.Input__el,getRootRef:getRef}))})};try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"default"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}},mode:{defaultValue:null,description:"Режим отображения.\n\n- `default` — показывает фон, обводку и, при наличии, текст-подсказку.\n- `plain` — показывает только текст-подсказку.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"default"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Input/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/UnstyledTextField/UnstyledTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>UnstyledTextField});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),UnstyledTextField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UnstyledTextField_module.A,options);const UnstyledTextField_UnstyledTextField_module=UnstyledTextField_module.A&&UnstyledTextField_module.A.locals?UnstyledTextField_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var UnstyledTextField=function(_param){var as=_param.as,_param_noPadding=_param.noPadding,noPadding=void 0!==_param_noPadding&&_param_noPadding,className=_param.className,restProps=_object_without_properties(_param,["as","noPadding","className"]);return(0,jsx_runtime.jsx)(Text.E,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component:as,normalize:!1,className:(0,es6.xW)(UnstyledTextField_UnstyledTextField_module.UnstyledTextField,noPadding&&UnstyledTextField_UnstyledTextField_module["UnstyledTextField--noPadding"],className)},restProps))};try{UnstyledTextField.displayName="UnstyledTextField",UnstyledTextField.__docgenInfo={description:'Компонент сбрасывает [User-agent stylesheets](https://www.geeksforgeeks.org/what-is-a-user-agent-stylesheet/)\nполей ввода.\n\nИспользуется в <a href="?path=/story/forms-input--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-input--playground">Input</a> и <a href="?path=/story/forms-textarea--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-textarea--playground">Textarea</a>.',displayName:"UnstyledTextField",props:{as:{defaultValue:null,description:"Задаёт какой из DOM-элементов для ввода текста использовать.",name:"as",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},noPadding:{defaultValue:{value:"false"},description:"По умолчанию отключено во избежание проблем из-за очередности загрузки стилей.",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | ((instance: HTMLInputElement | null) => void) | RefObject<...> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"]={docgenInfo:UnstyledTextField.__docgenInfo,name:"UnstyledTextField",path:"src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useFocusVisibleClassName.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useFocusVisibleClassName});var es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),focusVisible_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/styles/focusVisible.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(focusVisible_module.A,options);const styles_focusVisible_module=focusVisible_module.A&&focusVisible_module.A.locals?focusVisible_module.A.locals:void 0;var focusVisiblePresetModeClassNames={inside:styles_focusVisible_module["-focus-visible--mode-inside"],outside:styles_focusVisible_module["-focus-visible--mode-outside"]},isPresetMode=function(mode){return"inside"===mode||"outside"===mode};function useFocusVisibleClassName(param){var _param_focusVisible=param.focusVisible,focusVisible=void 0!==_param_focusVisible&&_param_focusVisible,_param_mode=param.mode,mode=void 0===_param_mode?"inside":_param_mode,modeClassName=isPresetMode(mode)?focusVisiblePresetModeClassNames[mode]:mode;return(0,es6.xW)(styles_focusVisible_module["-focus-visible"],focusVisible&&styles_focusVisible_module["-focus-visible--focused"],focusVisible&&modeClassName)}},"./src/hooks/useFocusWithin.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>useFocusWithin});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/dom.tsx"),_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var isFocusWithin=function(ref,document){return ref.contains(document.activeElement)};function useFocusWithin(ref){var document=(0,_lib_dom__WEBPACK_IMPORTED_MODULE_1__.a4)().document,_React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState((function(){return!(!ref.current||!document)&&isFocusWithin(ref.current,document)})),2),focusWithin=_React_useState[0],setFocusWithin=_React_useState[1];return(0,_lib_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_2__.E)((function handleAutoFocus(){if(document){var handleFocusOrBlurEvents=function(){ref.current&&setFocusWithin(isFocusWithin(ref.current,document))};return handleFocusOrBlurEvents(),document.addEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.addEventListener("blur",handleFocusOrBlurEvents,{capture:!0}),function(){document.removeEventListener("focus",handleFocusOrBlurEvents,{capture:!0}),document.removeEventListener("blur",handleFocusOrBlurEvents,{capture:!0})}}}),[]),focusWithin}},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Input",component:__webpack_require__("./src/components/Input/Input.tsx").p,parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eC)};var Playground={};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Input/Input.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Input--dNCUO{font-size:16px;line-height:20px;position:relative}.Input--align-center--hN4kQ .Input__el--rGYHX{text-align:center}.Input--align-right--uv_jo .Input__el--rGYHX{text-align:end}.Input__el--rGYHX{block-size:var(--vkui--size_field_height--regular);border-radius:inherit;box-sizing:border-box;color:var(--vkui--color_text_primary);inline-size:100%;padding-block:0;padding-inline:12px;position:relative;z-index:var(--vkui_internal--z_index_form_field_element)}.Input--sizeY-compact--UuBh9 .Input__el--rGYHX{block-size:var(--vkui--size_field_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Input--sizeY-none--RZSHl .Input__el--rGYHX{block-size:var(--vkui--size_field_height--compact)}}.Input--hasBefore--EFXhx .Input__el--rGYHX{-webkit-padding-start:0;padding-inline-start:0}.Input--hasAfter--D_w4r .Input__el--rGYHX{-webkit-padding-end:0;padding-inline-end:0}.Input__el--rGYHX:disabled{opacity:var(--vkui--opacity_disable_accessibility)}.Input__el--rGYHX::-ms-input-placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Input__el--rGYHX::placeholder{color:var(--vkui--color_text_secondary);opacity:1}.Input__el--rGYHX:disabled::-ms-input-placeholder{color:var(--vkui--color_text_secondary)}.Input__el--rGYHX:disabled::placeholder{color:var(--vkui--color_text_secondary)}","",{version:3,sources:["webpack://./src/components/Input/Input.module.css"],names:[],mappings:"AAAA,cAGE,cAAe,CADf,gBAAiB,CADjB,iBAGF,CAEA,8CACE,iBACF,CAEA,6CACE,cACF,CAEA,kBAME,kDAAmD,CAEnD,qBAAsB,CADtB,qBAAsB,CAEtB,qCAAsC,CAJtC,gBAAiB,CAFjB,eAAgB,CAChB,mBAAoB,CAHpB,iBAAkB,CAClB,wDAQF,CAEA,+CACE,kDACF,CAEA,iEACE,4CACE,kDACF,CACF,CAEA,2CACE,uBAAuB,CAAvB,sBACF,CAEA,0CACE,qBAAqB,CAArB,oBACF,CAEA,2BACE,kDACF,CAEA,yCACE,uCAAwC,CAExC,SACF,CAJA,+BACE,uCAAwC,CAExC,SACF,CAEA,kDACE,uCACF,CAFA,wCACE,uCACF",sourcesContent:[".Input {\n  position: relative;\n  line-height: 20px;\n  font-size: 16px;\n}\n\n.Input--align-center .Input__el {\n  text-align: center;\n}\n\n.Input--align-right .Input__el {\n  text-align: end;\n}\n\n.Input__el {\n  position: relative;\n  z-index: var(--vkui_internal--z_index_form_field_element);\n  padding-block: 0;\n  padding-inline: 12px;\n  inline-size: 100%;\n  block-size: var(--vkui--size_field_height--regular);\n  box-sizing: border-box;\n  border-radius: inherit;\n  color: var(--vkui--color_text_primary);\n}\n\n.Input--sizeY-compact .Input__el {\n  block-size: var(--vkui--size_field_height--compact);\n}\n\n@media (--sizeY-compact) {\n  .Input--sizeY-none .Input__el {\n    block-size: var(--vkui--size_field_height--compact);\n  }\n}\n\n.Input--hasBefore .Input__el {\n  padding-inline-start: 0;\n}\n\n.Input--hasAfter .Input__el {\n  padding-inline-end: 0;\n}\n\n.Input__el:disabled {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.Input__el::placeholder {\n  color: var(--vkui--color_text_secondary);\n  /* Для Firefox */\n  opacity: 1;\n}\n\n.Input__el:disabled::placeholder {\n  color: var(--vkui--color_text_secondary);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Input:"Input--dNCUO","Input--align-center":"Input--align-center--hN4kQ",Input__el:"Input__el--rGYHX","Input--align-right":"Input--align-right--uv_jo","Input--sizeY-compact":"Input--sizeY-compact--UuBh9","Input--sizeY-none":"Input--sizeY-none--RZSHl","Input--hasBefore":"Input--hasBefore--EFXhx","Input--hasAfter":"Input--hasAfter--D_w4r"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UnstyledTextField--IvHB6{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;box-shadow:none;margin:0;-webkit-tap-highlight-color:transparent;outline:none;resize:none}.UnstyledTextField--noPadding--FHa_o{padding:0}.UnstyledTextField--IvHB6:focus{outline:none}.UnstyledTextField--IvHB6::-webkit-inner-spin-button,.UnstyledTextField--IvHB6::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.UnstyledTextField--IvHB6[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}","",{version:3,sources:["webpack://./src/components/UnstyledTextField/UnstyledTextField.module.css"],names:[],mappings:"AAAA,0BAKE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CADhB,sBAAuB,CAFvB,QAAS,CACT,eAAgB,CAFhB,QAAS,CAKT,uCAAwC,CACxC,YAAa,CACb,WACF,CAEA,qCACE,SACF,CAEA,gCACE,YACF,CAOA,0GAEE,uBAAgB,CAAhB,eACF,CAEA,uCACE,4BAAqB,CAArB,yBAAqB,CAArB,oBACF",sourcesContent:[".UnstyledTextField {\n  margin: 0;\n  border: 0;\n  box-shadow: none;\n  background: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  resize: none;\n}\n\n.UnstyledTextField--noPadding {\n  padding: 0;\n}\n\n.UnstyledTextField:focus {\n  outline: none;\n}\n\n/*\n * Отключаем нативные элементы для <input type=\"number\" />\n *\n * см. https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp\n */\n.UnstyledTextField::-webkit-outer-spin-button,\n.UnstyledTextField::-webkit-inner-spin-button {\n  appearance: none;\n}\n\n.UnstyledTextField[type='number'] {\n  appearance: textfield;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={UnstyledTextField:"UnstyledTextField--IvHB6","UnstyledTextField--noPadding":"UnstyledTextField--noPadding--FHa_o"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/styles/focusVisible.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".-focus-visible--oT0q5{--vkui_internal--outline_width:2px}.-focus-visible--oT0q5 :focus,.-focus-visible--oT0q5 :focus-visible,.-focus-visible--oT0q5:focus,.-focus-visible--oT0q5:focus-visible{outline:none}.-focus-visible--oT0q5.-focus-visible--mode-outside--L3BK7{--vkui_internal--outline_offset_from:0;--vkui_internal--outline_offset_to:var(--vkui_internal--outline_width)}.-focus-visible--oT0q5.-focus-visible--mode-inside--sD_I3{--vkui_internal--outline_offset_from:calc(-2 * var(--vkui_internal--outline_width));--vkui_internal--outline_offset_to:calc(-1 * var(--vkui_internal--outline_width))}.-focus-visible--oT0q5.-focus-visible--focused--pya3J.-focus-visible--mode-inside--sD_I3,.-focus-visible--oT0q5.-focus-visible--focused--pya3J.-focus-visible--mode-outside--L3BK7{animation:animation-outline-offset--w0g_T .1s ease-in-out .01s forwards;outline:var(--vkui_internal--outline);outline-offset:var(--vkui_internal--outline_offset_to)}@media screen and (prefers-reduced-motion:reduce){.-focus-visible--oT0q5.-focus-visible--focused--pya3J.-focus-visible--mode-inside--sD_I3,.-focus-visible--oT0q5.-focus-visible--focused--pya3J.-focus-visible--mode-outside--L3BK7{animation:none}}@keyframes animation-outline-offset--w0g_T{0%{outline-offset:var(--vkui_internal--outline_offset_from)}to{outline-offset:var(--vkui_internal--outline_offset_to)}}","",{version:3,sources:["webpack://./src/styles/focusVisible.module.css"],names:[],mappings:"AAIA,uBACE,kCACF,CAGA,sIAIE,YACF,CAGA,2DACE,sCAAuC,CACvC,sEACF,CAEA,0DACE,mFAAoF,CACpF,iFACF,CAEA,mLAIE,uEAAmE,CAFnE,qCAAsC,CACtC,sDAEF,CAEA,kDACE,mLAEE,cACF,CACF,CAEA,2CACE,GACE,wDACF,CAEA,GACE,sDACF,CACF",sourcesContent:["/**\n * Утилитарные классы на замену отдельному компоненту для имитации\n * :focus-visible состояния.\n */\n.-focus-visible {\n  --vkui_internal--outline_width: 2px;\n}\n\n/* stylelint-disable selector-max-universal */\n.-focus-visible:focus,\n.-focus-visible:focus-visible,\n.-focus-visible *:focus,\n.-focus-visible *:focus-visible {\n  outline: none;\n}\n/* stylelint-enable selector-max-universal */\n\n.-focus-visible.-focus-visible--mode-outside {\n  --vkui_internal--outline_offset_from: 0;\n  --vkui_internal--outline_offset_to: var(--vkui_internal--outline_width);\n}\n\n.-focus-visible.-focus-visible--mode-inside {\n  --vkui_internal--outline_offset_from: calc(-2 * var(--vkui_internal--outline_width));\n  --vkui_internal--outline_offset_to: calc(-1 * var(--vkui_internal--outline_width));\n}\n\n.-focus-visible.-focus-visible--focused.-focus-visible--mode-inside,\n.-focus-visible.-focus-visible--focused.-focus-visible--mode-outside {\n  outline: var(--vkui_internal--outline);\n  outline-offset: var(--vkui_internal--outline_offset_to);\n  animation: animation-outline-offset 0.1s ease-in-out 0.01s forwards;\n}\n\n@media (--reduce-motion) {\n  .-focus-visible.-focus-visible--focused.-focus-visible--mode-inside,\n  .-focus-visible.-focus-visible--focused.-focus-visible--mode-outside {\n    animation: none;\n  }\n}\n\n@keyframes animation-outline-offset {\n  0% {\n    outline-offset: var(--vkui_internal--outline_offset_from);\n  }\n\n  100% {\n    outline-offset: var(--vkui_internal--outline_offset_to);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"-focus-visible":"-focus-visible--oT0q5","-focus-visible--mode-outside":"-focus-visible--mode-outside--L3BK7","-focus-visible--mode-inside":"-focus-visible--mode-inside--sD_I3","-focus-visible--focused":"-focus-visible--focused--pya3J","animation-outline-offset":"animation-outline-offset--w0g_T"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);