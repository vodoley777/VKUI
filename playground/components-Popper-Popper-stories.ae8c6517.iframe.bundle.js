"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[7489],{"./src/components/Popper/Popper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_storybook_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/storybook/constants.ts"),_Button_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx"),_Div_Div__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Div/Div.tsx"),_Popper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Popper/Popper.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={title:"Poppers/Popper",component:_Popper__WEBPACK_IMPORTED_MODULE_1__.r,parameters:_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.tW,_storybook_constants__WEBPACK_IMPORTED_MODULE_2__.nB)};var Playground={render:function Render(args){var _React_useState=_sliced_to_array(react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),2),shown=_React_useState[0],setShown=_React_useState[1],buttonRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_3__.z,{getRootRef:buttonRef,onClick:function(){return setShown(!shown)}},shown?"Закрыть":"Открыть"),shown&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Popper__WEBPACK_IMPORTED_MODULE_1__.r,_object_spread_props(_object_spread({usePortal:!1,offsetByMainAxis:8},args),{targetRef:buttonRef}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Div_Div__WEBPACK_IMPORTED_MODULE_4__.Z,null,"Привет")))}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render(args) {\n    const [shown, setShown] = React.useState(false);\n    const buttonRef = React.useRef(null);\n    return <React.Fragment>\n        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>\n          {shown ? 'Закрыть' : 'Открыть'}\n        </Button>\n        {shown && <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>\n            <Div>Привет</Div>\n          </Popper>}\n      </React.Fragment>;\n  }\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/components/Div/Div.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Div});var react=__webpack_require__("../../node_modules/react/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Div_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Div_module.Z,options);let Div_Div_module=Div_module.Z&&Div_module.Z.locals?Div_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}var Div=function(props){return react.createElement(RootComponent.U,_object_spread({baseClassName:Div_Div_module.Div},props))};try{Div.displayName="Div",Div.__docgenInfo={description:"",displayName:"Div",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Div/Div.tsx#Div"]={docgenInfo:Div.__docgenInfo,name:"Div",path:"src/components/Div/Div.tsx#Div"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(VisuallyHidden_module.Z,options);let VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.Z&&VisuallyHidden_module.Z.locals?VisuallyHidden_module.Z.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var VisuallyHidden=function(_param){var _param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,restProps=_object_without_properties(_param,["Component"]);return react.createElement(RootComponent.U,_object_spread_props(_object_spread({Component:Component},restProps),{baseClassName:(0,es6.AK)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])}))};try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Div/Div.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Div--jWBVN{padding-block:var(--vkui--size_base_padding_vertical--regular);padding-inline:var(--vkui--size_base_padding_horizontal--regular)}","",{version:3,sources:["webpack://./src/components/Div/Div.module.css"],names:[],mappings:"AAAA,YACE,8DAA+D,CAC/D,iEACF",sourcesContent:[".Div {\n  padding-block: var(--vkui--size_base_padding_vertical--regular);\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Div:"Div--jWBVN"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{block-size:1px!important;inline-size:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{block-size:100%!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,wBAA0B,CAC1B,yBAA2B,CAE3B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAC9B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,yBAA2B,CAC3B,0BAA4B,CAF5B,mBAAoB,CADpB,oBAAqB,CAIrB,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);