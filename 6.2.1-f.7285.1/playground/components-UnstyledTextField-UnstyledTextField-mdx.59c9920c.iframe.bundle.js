(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[925],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/UnstyledTextField/UnstyledTextField.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_VKUI_VKUI_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_UnstyledTextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/UnstyledTextField/UnstyledTextField.tsx");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Service/UnstyledTextField"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.hE,{children:"UnstyledTextField"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.VY,{of:_UnstyledTextField__WEBPACK_IMPORTED_MODULE_3__.K}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.ov,{of:_UnstyledTextField__WEBPACK_IMPORTED_MODULE_3__.K})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_VKUI_VKUI_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./src/components/UnstyledTextField/UnstyledTextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>UnstyledTextField});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),Text=__webpack_require__("./src/components/Typography/Text/Text.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),UnstyledTextField_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UnstyledTextField_module.A,options);const UnstyledTextField_UnstyledTextField_module=UnstyledTextField_module.A&&UnstyledTextField_module.A.locals?UnstyledTextField_module.A.locals:void 0;function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var UnstyledTextField=function(_param){var as=_param.as,_param_noPadding=_param.noPadding,noPadding=void 0!==_param_noPadding&&_param_noPadding,className=_param.className,restProps=_object_without_properties(_param,["as","noPadding","className"]);return(0,jsx_runtime.jsx)(Text.E,function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({Component:as,normalize:!1,className:(0,es6.xW)(UnstyledTextField_UnstyledTextField_module.UnstyledTextField,noPadding&&UnstyledTextField_UnstyledTextField_module["UnstyledTextField--noPadding"],className)},restProps))};try{UnstyledTextField.displayName="UnstyledTextField",UnstyledTextField.__docgenInfo={description:'Компонент сбрасывает [User-agent stylesheets](https://www.geeksforgeeks.org/what-is-a-user-agent-stylesheet/)\nполей ввода.\n\nИспользуется в <a href="?path=/story/forms-input--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-input--playground">Input</a> и <a href="?path=/story/forms-textarea--playground" data-prod-href="https://vkcom.github.io/VKUI/playground/?path=/story/forms-textarea--playground">Textarea</a>.',displayName:"UnstyledTextField",props:{as:{defaultValue:null,description:"Задаёт какой из DOM-элементов для ввода текста использовать.",name:"as",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"textarea"'}]}},noPadding:{defaultValue:{value:"false"},description:"По умолчанию отключено во избежание проблем из-за очередности загрузки стилей.",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"((instance: HTMLTextAreaElement | null) => void) | RefObject<HTMLTextAreaElement> | ((instance: HTMLInputElement | null) => void) | RefObject<...> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"]={docgenInfo:UnstyledTextField.__docgenInfo,name:"UnstyledTextField",path:"src/components/UnstyledTextField/UnstyledTextField.tsx#UnstyledTextField"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/UnstyledTextField/UnstyledTextField.module.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UnstyledTextField--IvHB6{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:0;box-shadow:none;margin:0;-webkit-tap-highlight-color:transparent;outline:none;resize:none}.UnstyledTextField--noPadding--FHa_o{padding:0}.UnstyledTextField--IvHB6:focus{outline:none}.UnstyledTextField--IvHB6::-webkit-inner-spin-button,.UnstyledTextField--IvHB6::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none}.UnstyledTextField--IvHB6[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}","",{version:3,sources:["webpack://./src/components/UnstyledTextField/UnstyledTextField.module.css"],names:[],mappings:"AAAA,0BAKE,uBAAgB,CAAhB,oBAAgB,CAAhB,eAAgB,CADhB,sBAAuB,CAFvB,QAAS,CACT,eAAgB,CAFhB,QAAS,CAKT,uCAAwC,CACxC,YAAa,CACb,WACF,CAEA,qCACE,SACF,CAEA,gCACE,YACF,CAOA,0GAEE,uBAAgB,CAAhB,eACF,CAEA,uCACE,4BAAqB,CAArB,yBAAqB,CAArB,oBACF",sourcesContent:[".UnstyledTextField {\n  margin: 0;\n  border: 0;\n  box-shadow: none;\n  background: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  outline: none;\n  resize: none;\n}\n\n.UnstyledTextField--noPadding {\n  padding: 0;\n}\n\n.UnstyledTextField:focus {\n  outline: none;\n}\n\n/*\n * Отключаем нативные элементы для <input type=\"number\" />\n *\n * см. https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp\n */\n.UnstyledTextField::-webkit-outer-spin-button,\n.UnstyledTextField::-webkit-inner-spin-button {\n  appearance: none;\n}\n\n.UnstyledTextField[type='number'] {\n  appearance: textfield;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={UnstyledTextField:"UnstyledTextField--IvHB6","UnstyledTextField--noPadding":"UnstyledTextField--noPadding--FHa_o"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);