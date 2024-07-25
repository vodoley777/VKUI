"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8175],{"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}},"./src/components/LocaleProvider/LocaleProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>LocaleProvider_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),constants=__webpack_require__("./src/storybook/constants.ts"),ConfigProviderContext=__webpack_require__("./src/components/ConfigProvider/ConfigProviderContext.tsx"),ConfigProviderOverride=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/ConfigProvider/ConfigProviderOverride.tsx"));function LocaleProvider({value,children}){return(0,jsx_runtime.jsx)(ConfigProviderOverride.A,{locale:value,children})}try{LocaleProvider.displayName="LocaleProvider",LocaleProvider.__docgenInfo={description:"Компонент, прокидывающий локаль. Список можно найти в\n[реестре языковых подметок IANA](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry)",displayName:"LocaleProvider",props:{value:{defaultValue:null,description:"Строка с языковой меткой BCP 47",name:"value",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LocaleProvider/LocaleProvider.tsx#LocaleProvider"]={docgenInfo:LocaleProvider.__docgenInfo,name:"LocaleProvider",path:"src/components/LocaleProvider/LocaleProvider.tsx#LocaleProvider"})}catch(__react_docgen_typescript_loader_error){}const LocaleProvider_stories={title:"Service/LocaleProvider",component:LocaleProvider,argTypes:{value:{control:{type:"select"},options:["ru","en","fr","ua"]}},parameters:{...constants.eb,...constants.eC}},DisplayLocaleProvider=()=>{const{locale}=(0,ConfigProviderContext.h)();return(0,jsx_runtime.jsxs)("div",{style:{padding:5},children:["Inner LocaleProvider: ",locale]})},Playground={render:function Render({value}){const{locale}=(0,ConfigProviderContext.h)();return(0,jsx_runtime.jsxs)(LocaleProvider,{value:value??locale,children:[(0,jsx_runtime.jsxs)("div",{style:{padding:5},children:["Outer LocaleProvider: ",locale]}),(0,jsx_runtime.jsx)(DisplayLocaleProvider,{})]})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    value\n  }) {\n    const {\n      locale\n    } = useConfigProvider();\n    return <LocaleProvider value={value ?? locale}>\n        <div style={{\n        padding: 5\n      }}>Outer LocaleProvider: {locale}</div>\n        <DisplayLocaleProvider />\n      </LocaleProvider>;\n  }\n}",...Playground.parameters?.docs?.source}}}}}]);