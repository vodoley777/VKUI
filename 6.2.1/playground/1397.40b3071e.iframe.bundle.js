"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1397],{"./src/components/Radio/Radio.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>Radio});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),useAdaptivity=__webpack_require__("./src/hooks/useAdaptivity.ts"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),useState=__webpack_require__("./src/components/Clickable/useState.tsx"),Tappable=__webpack_require__("./src/components/Tappable/Tappable.tsx"),Footnote=__webpack_require__("./src/components/Typography/Footnote/Footnote.tsx"),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Radio_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Radio/Radio.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Radio_module.A,options);const Radio_Radio_module=Radio_module.A&&Radio_module.A.locals?Radio_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var sizeYClassNames=_define_property({none:Radio_Radio_module["Radio--sizeY-none"]},"compact",Radio_Radio_module["Radio--sizeY-compact"]),RadioIcon=function(props){return(0,jsx_runtime.jsxs)("svg",_object_spread_props(_object_spread({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":!0},props),{children:[(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"11",stroke:"currentColor",strokeWidth:"2",fill:"none"}),(0,jsx_runtime.jsx)("circle",{cx:"12",cy:"12",r:"7.5",className:Radio_Radio_module.Radio__pin,fill:"currentColor"})]}))},Radio=function(_param){var children=_param.children,description=_param.description,style=_param.style,className=_param.className,getRootRef=_param.getRootRef,titleAfter=_param.titleAfter,getRef=_param.getRef,labelProps=_param.labelProps,hoverMode=_param.hoverMode,activeMode=_param.activeMode,hasHover=_param.hasHover,hasActive=_param.hasActive,focusVisibleMode=_param.focusVisibleMode,restProps=_object_without_properties(_param,["children","description","style","className","getRootRef","titleAfter","getRef","labelProps","hoverMode","activeMode","hasHover","hasActive","focusVisibleMode"]),platform=(0,usePlatform.V)(),_useAdaptivity_sizeY=(0,useAdaptivity.L)().sizeY,sizeY=void 0===_useAdaptivity_sizeY?"none":_useAdaptivity_sizeY;return(0,jsx_runtime.jsxs)(Tappable.S,_object_spread_props(_object_spread({Component:"label",style,className:(0,es6.xW)(Radio_Radio_module.Radio,"regular"!==sizeY&&sizeYClassNames[sizeY],className),activeEffectDelay:"ios"===platform?100:useState.hN,disabled:restProps.disabled,getRootRef,hoverMode,activeMode,hasHover,hasActive,focusVisibleMode},labelProps),{children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,_object_spread_props(_object_spread({},restProps),{Component:"input",type:"radio",getRootRef:getRef,className:Radio_Radio_module.Radio__input})),(0,jsx_runtime.jsxs)("div",{className:Radio_Radio_module.Radio__container,children:[(0,jsx_runtime.jsx)(RadioIcon,{className:Radio_Radio_module.Radio__icon}),(0,jsx_runtime.jsxs)("div",{className:Radio_Radio_module.Radio__content,children:[(0,jsx_runtime.jsxs)("div",{className:Radio_Radio_module.Radio__title,children:[(0,jsx_runtime.jsx)(Text.E,{children}),(0,jsx_runtime.jsx)("div",{className:Radio_Radio_module.Radio__titleAfter,children:titleAfter})]}),(0,es6.G1)(description)&&(0,jsx_runtime.jsx)(Footnote.t,{className:Radio_Radio_module.Radio__description,children:description})]})]})]}))};try{Radio.displayName="Radio",Radio.__docgenInfo={description:"",displayName:"Radio",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},titleAfter:{defaultValue:null,description:"",name:"titleAfter",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"Позволяет передавать data-* аттрибуты элементу label",name:"labelProps",required:!1,type:{name:"HasDataAttribute"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLLabelElement>"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Radio/Radio.tsx#Radio"]={docgenInfo:Radio.__docgenInfo,name:"Radio",path:"src/components/Radio/Radio.tsx#Radio"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>VisuallyHidden});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),VisuallyHidden_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VisuallyHidden_module.A,options);const VisuallyHidden_VisuallyHidden_module=VisuallyHidden_module.A&&VisuallyHidden_module.A.locals?VisuallyHidden_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var VisuallyHidden=function(_param){var _param_Component=_param.Component,Component=void 0===_param_Component?"span":_param_Component,restProps=_object_without_properties(_param,["Component"]);return(0,jsx_runtime.jsx)(RootComponent.I,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component},restProps),{baseClassName:(0,es6.xW)(VisuallyHidden_VisuallyHidden_module.VisuallyHidden,"input"===Component&&VisuallyHidden_VisuallyHidden_module["VisuallyHidden--focusable-input"])}))};try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Radio/Radio.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,WithDescription:()=>WithDescription,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/storybook/constants.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Radio",component:__webpack_require__("./src/components/Radio/Radio.tsx").s,parameters:_object_spread({},_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eb,_storybook_constants__WEBPACK_IMPORTED_MODULE_1__.eC)};var Playground={args:{name:"payment",children:"VK Pay"}},WithDescription=_object_spread_props(_object_spread({},Playground),{args:_object_spread_props(_object_spread({},Playground.args),{description:"Баланс 7 320 ₽"})});Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    name: 'payment',\n    children: 'VK Pay'\n  }\n}",...Playground.parameters?.docs?.source}}},WithDescription.parameters={...WithDescription.parameters,docs:{...WithDescription.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    description: 'Баланс 7 320 ₽'\n  }\n}",...WithDescription.parameters?.docs?.source}}};const __namedExportsOrder=["Playground","WithDescription"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Radio/Radio.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Radio--g4FxA{display:block;font-family:var(--vkui--font_family_base);padding-block:0;padding-inline:var(--vkui--size_base_padding_horizontal--regular)}.vkuiInternalFormItem .Radio--g4FxA{box-sizing:initial;inline-size:100%;margin-block:0;margin-inline:calc(-1 * var(--vkui--size_base_padding_horizontal--regular))}.Radio__container--X0KQB{align-items:center;display:flex;justify-content:flex-start}.Radio__input--vXIlt:disabled~.Radio__container--X0KQB{opacity:var(--vkui--opacity_disable_accessibility)}.Radio__icon--pJ4MF{block-size:22px;flex-shrink:0;inline-size:22px;-webkit-margin-end:14px;color:var(--vkui--color_icon_tertiary);margin-inline-end:14px;transition:color .15s var(--vkui--animation_easing_platform)}.Radio__input--vXIlt:checked~.Radio__container--X0KQB .Radio__icon--pJ4MF{color:var(--vkui--color_icon_accent)}.Radio__icon--pJ4MF .Radio__pin--t45EU{transform:scale(0);transform-origin:12px 12px;transition:transform .15s var(--vkui--animation_easing_platform)}.Radio__input--vXIlt:checked~.Radio__container--X0KQB .Radio__icon--pJ4MF .Radio__pin--t45EU{transform:none}.Radio__content--AJ1Ba{color:var(--vkui--color_text_primary);display:block;flex-grow:1;max-inline-size:100%}.Radio__description--b6Kte{color:var(--vkui--color_text_secondary);display:block;margin-block:2px 12px}.Radio__title--mS95N{align-items:center;display:flex;justify-content:space-between;-webkit-margin-before:12px;margin-block-start:12px}.Radio__title--mS95N:last-child{-webkit-margin-after:12px;margin-block-end:12px}.Radio__titleAfter--KzLlX{-webkit-margin-start:4px;color:var(--vkui--color_icon_tertiary);margin-inline-start:4px}.Radio--sizeY-compact--R3gae .Radio__title--mS95N{-webkit-margin-before:8px;margin-block-start:8px}.Radio--sizeY-compact--R3gae .Radio__title--mS95N:last-child{-webkit-margin-after:8px;margin-block-end:8px}.Radio--sizeY-compact--R3gae .Radio__description--b6Kte{-webkit-margin-after:7px;margin-block-end:7px}.Radio--sizeY-compact--R3gae .Radio__icon--pJ4MF{block-size:18px;inline-size:18px}.Radio--sizeY-compact--R3gae .Radio__icon--pJ4MF:after{block-size:12px;inline-size:12px}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Radio--sizeY-none--OgUUR .Radio__title--mS95N{-webkit-margin-before:8px;margin-block-start:8px}.Radio--sizeY-none--OgUUR .Radio__title--mS95N:last-child{-webkit-margin-after:8px;margin-block-end:8px}.Radio--sizeY-none--OgUUR .Radio__description--b6Kte{-webkit-margin-after:7px;margin-block-end:7px}.Radio--sizeY-none--OgUUR .Radio__icon--pJ4MF{block-size:18px;inline-size:18px}.Radio--sizeY-none--OgUUR .Radio__icon--pJ4MF:after{block-size:12px;inline-size:12px}}.vkuiInternalRadioGroup .Radio--g4FxA{box-sizing:border-box;flex:1;margin:0}","",{version:3,sources:["webpack://./src/components/Radio/Radio.module.css"],names:[],mappings:"AAAA,cACE,aAAc,CAGd,yCAA0C,CAF1C,eAAgB,CAChB,iEAEF,CAOA,oCAEE,kBAAuB,CADvB,gBAAiB,CAEjB,cAAe,CACf,2EACF,CAEA,yBAEE,kBAAmB,CADnB,YAAa,CAEb,0BACF,CAEA,uDACE,kDACF,CAEA,oBAGE,eAAgB,CAFhB,aAAc,CACd,gBAAiB,CAEjB,uBAAuB,CACvB,sCAAuC,CADvC,sBAAuB,CAEvB,4DACF,CAEA,0EACE,oCACF,CAEA,uCAEE,kBAAmB,CADnB,0BAA2B,CAE3B,gEACF,CAEA,6FACE,cACF,CAEA,uBAIE,qCAAsC,CAHtC,aAAc,CACd,WAAY,CACZ,oBAEF,CAEA,2BAEE,uCAAwC,CADxC,aAAc,CAEd,qBACF,CAEA,qBAGE,kBAAmB,CAFnB,YAAa,CACb,6BAA8B,CAE9B,0BAAwB,CAAxB,uBACF,CAEA,gCACE,yBAAsB,CAAtB,qBACF,CAEA,0BACE,wBAAwB,CACxB,sCAAuC,CADvC,uBAEF,CAMA,kDACE,yBAAuB,CAAvB,sBACF,CAEA,6DACE,wBAAqB,CAArB,oBACF,CAEA,wDACE,wBAAqB,CAArB,oBACF,CAEA,iDAEE,eAAgB,CADhB,gBAEF,CAEA,uDAEE,eAAgB,CADhB,gBAEF,CAEA,iEACE,+CACE,yBAAuB,CAAvB,sBACF,CAEA,0DACE,wBAAqB,CAArB,oBACF,CAEA,qDACE,wBAAqB,CAArB,oBACF,CAEA,8CAEE,eAAgB,CADhB,gBAEF,CAEA,oDAEE,eAAgB,CADhB,gBAEF,CACF,CAOA,sCAGE,qBAAsB,CAFtB,MAAO,CACP,QAEF",sourcesContent:[".Radio {\n  display: block;\n  padding-block: 0;\n  padding-inline: var(--vkui--size_base_padding_horizontal--regular);\n  font-family: var(--vkui--font_family_base);\n}\n\n/**\n * CMP:\n * FormItem\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalFormItem) .Radio {\n  inline-size: 100%;\n  box-sizing: content-box;\n  margin-block: 0;\n  margin-inline: calc(-1 * var(--vkui--size_base_padding_horizontal--regular));\n}\n\n.Radio__container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.Radio__input:disabled ~ .Radio__container {\n  opacity: var(--vkui--opacity_disable_accessibility);\n}\n\n.Radio__icon {\n  flex-shrink: 0;\n  inline-size: 22px;\n  block-size: 22px;\n  margin-inline-end: 14px;\n  color: var(--vkui--color_icon_tertiary);\n  transition: color 0.15s var(--vkui--animation_easing_platform);\n}\n\n.Radio__input:checked ~ .Radio__container .Radio__icon {\n  color: var(--vkui--color_icon_accent);\n}\n\n.Radio__icon .Radio__pin {\n  transform-origin: 12px 12px;\n  transform: scale(0);\n  transition: transform 0.15s var(--vkui--animation_easing_platform);\n}\n\n.Radio__input:checked ~ .Radio__container .Radio__icon .Radio__pin {\n  transform: none;\n}\n\n.Radio__content {\n  display: block;\n  flex-grow: 1;\n  max-inline-size: 100%;\n  color: var(--vkui--color_text_primary);\n}\n\n.Radio__description {\n  display: block;\n  color: var(--vkui--color_text_secondary);\n  margin-block: 2px 12px;\n}\n\n.Radio__title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-block-start: 12px;\n}\n\n.Radio__title:last-child {\n  margin-block-end: 12px;\n}\n\n.Radio__titleAfter {\n  margin-inline-start: 4px;\n  color: var(--vkui--color_icon_tertiary);\n}\n\n/**\n * sizeY COMPACT\n */\n\n.Radio--sizeY-compact .Radio__title {\n  margin-block-start: 8px;\n}\n\n.Radio--sizeY-compact .Radio__title:last-child {\n  margin-block-end: 8px;\n}\n\n.Radio--sizeY-compact .Radio__description {\n  margin-block-end: 7px;\n}\n\n.Radio--sizeY-compact .Radio__icon {\n  inline-size: 18px;\n  block-size: 18px;\n}\n\n.Radio--sizeY-compact .Radio__icon::after {\n  inline-size: 12px;\n  block-size: 12px;\n}\n\n@media (--sizeY-compact) {\n  .Radio--sizeY-none .Radio__title {\n    margin-block-start: 8px;\n  }\n\n  .Radio--sizeY-none .Radio__title:last-child {\n    margin-block-end: 8px;\n  }\n\n  .Radio--sizeY-none .Radio__description {\n    margin-block-end: 7px;\n  }\n\n  .Radio--sizeY-none .Radio__icon {\n    inline-size: 18px;\n    block-size: 18px;\n  }\n\n  .Radio--sizeY-none .Radio__icon::after {\n    inline-size: 12px;\n    block-size: 12px;\n  }\n}\n\n/**\n * CMP:\n * RadioGroup\n */\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalRadioGroup) .Radio {\n  flex: 1;\n  margin: 0;\n  box-sizing: border-box;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Radio:"Radio--g4FxA",Radio__container:"Radio__container--X0KQB",Radio__input:"Radio__input--vXIlt",Radio__icon:"Radio__icon--pJ4MF",Radio__pin:"Radio__pin--t45EU",Radio__content:"Radio__content--AJ1Ba",Radio__description:"Radio__description--b6Kte",Radio__title:"Radio__title--mS95N",Radio__titleAfter:"Radio__titleAfter--KzLlX","Radio--sizeY-compact":"Radio--sizeY-compact--R3gae","Radio--sizeY-none":"Radio--sizeY-none--OgUUR"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".VisuallyHidden--bAIOu{block-size:1px!important;inline-size:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}.VisuallyHidden--focusable-input--gqp5y{block-size:100%!important;inline-size:100%!important;inset-block-start:0;inset-inline-start:0;clip:auto!important;-webkit-clip-path:none!important;clip-path:none!important;pointer-events:none}","",{version:3,sources:["webpack://./src/components/VisuallyHidden/VisuallyHidden.module.css"],names:[],mappings:"AACA,uBAEE,wBAA0B,CAC1B,yBAA2B,CAE3B,qBAAuB,CADvB,mBAAqB,CAHrB,2BAA6B,CAK7B,4BAA8B,CAC9B,4BAAiC,CAGjC,kBAAoB,CAFpB,4BAAqB,CAArB,oBAAqB,CAGrB,SAAU,CAFV,yBAGF,CAIA,wCAGE,yBAA2B,CAC3B,0BAA4B,CAF5B,mBAAoB,CADpB,oBAAqB,CAIrB,mBAAqB,CACrB,gCAA0B,CAA1B,wBAA0B,CAC1B,mBACF",sourcesContent:["/* stylelint-disable declaration-no-important */\n.VisuallyHidden {\n  position: absolute !important;\n  block-size: 1px !important;\n  inline-size: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; /* Fix for https://github.com/twbs/bootstrap/issues/25686 */\n  white-space: nowrap !important;\n  clip: rect(0, 0, 0, 0) !important;\n  clip-path: inset(50%);\n  overflow: hidden !important;\n  border: 0 !important;\n  opacity: 0;\n}\n\n/* Чтобы фокус скринридера, попавший на скрытый инпут был виден.\n * Особенно актуально для Android TalkBack */\n.VisuallyHidden--focusable-input {\n  inset-inline-start: 0;\n  inset-block-start: 0;\n  block-size: 100% !important;\n  inline-size: 100% !important;\n  clip: auto !important;\n  clip-path: none !important;\n  pointer-events: none;\n}\n/* stylelint-enable declaration-no-important */\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={VisuallyHidden:"VisuallyHidden--bAIOu","VisuallyHidden--focusable-input":"VisuallyHidden--focusable-input--gqp5y"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);