"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4249],{"./src/components/LocaleProvider/LocaleProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LocaleProvider_stories});var react=__webpack_require__("../../node_modules/react/index.js"),constants=__webpack_require__("./src/storybook/constants.ts"),ConfigProviderContext=__webpack_require__("./src/components/ConfigProvider/ConfigProviderContext.tsx"),ConfigProviderOverride=__webpack_require__("./src/components/ConfigProvider/ConfigProviderOverride.tsx");function LocaleProvider(param){var value=param.value,children=param.children;return react.createElement(ConfigProviderOverride.Q,{locale:value},children)}try{LocaleProvider.displayName="LocaleProvider",LocaleProvider.__docgenInfo={description:"Компонент, прокидывающий локаль. Список можно найти в\n[реестре языковых подметок IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)",displayName:"LocaleProvider",props:{value:{defaultValue:null,description:"Строка с языковой меткой BCP 47",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LocaleProvider/LocaleProvider.tsx#LocaleProvider"]={docgenInfo:LocaleProvider.__docgenInfo,name:"LocaleProvider",path:"src/components/LocaleProvider/LocaleProvider.tsx#LocaleProvider"})}catch(__react_docgen_typescript_loader_error){}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}let LocaleProvider_stories={title:"Service/LocaleProvider",component:LocaleProvider,argTypes:{value:{control:{type:"select"},options:["ru","en","fr","ua"]}},parameters:function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}({},constants.tW,constants.nB)};var DisplayLocaleProvider=function(){var locale=(0,ConfigProviderContext.F)().locale;return react.createElement("div",{style:{padding:5}},"Inner LocaleProvider: ",locale)},Playground={render:function Render(param){var value=param.value,locale=(0,ConfigProviderContext.F)().locale;return react.createElement(LocaleProvider,{value:null!=value?value:locale},react.createElement("div",{style:{padding:5}},"Outer LocaleProvider: ",locale),react.createElement(DisplayLocaleProvider,null))}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    value\n  }) {\n    const {\n      locale\n    } = useConfigProvider();\n    return <LocaleProvider value={value ?? locale}>\n        <div style={{\n        padding: 5\n      }}>Outer LocaleProvider: {locale}</div>\n        <DisplayLocaleProvider />\n      </LocaleProvider>;\n  }\n}",...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R0:()=>StringArg,nB:()=>DisableCartesianParam,tW:()=>CanvasFullLayout});var CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:{type:"text"}}}}]);