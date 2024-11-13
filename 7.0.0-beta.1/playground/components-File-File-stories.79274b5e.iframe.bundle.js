"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3253],{"./src/testing/presets/createFieldWithPresets.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>createFieldWithPresets});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/index.js"));const ICON_REGEX=/Icon(\d+)/,sizeToIconsMap=new Map;Object.keys(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__).forEach((iconName=>{if(!ICON_REGEX.test(iconName))return;const typedIconName=iconName,node=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[typedIconName],size=(iconName=>{const match=iconName.match(ICON_REGEX);return match?.[1]})(typedIconName);if(!size)return;const iconsBySize=sizeToIconsMap.get(size),Icon=node;iconsBySize?iconsBySize.set(typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})):sizeToIconsMap.set(size,new Map([[typedIconName,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{},"icon")]]))}));const createFieldWithPresets=({iconSizes=[],sizeIconsCount=5,requiredIcons=[],additionalPresets={}})=>{const options=["None"],mapping={None:null};iconSizes.forEach((iconSize=>{const iconsBySize=sizeToIconsMap.get(iconSize);Array.from(iconsBySize.keys()).slice(0,sizeIconsCount).forEach((iconName=>{options.push(iconName),mapping[iconName]=iconsBySize.get(iconName)}))})),requiredIcons.forEach((iconName=>{if(options.includes(iconName))return;options.push(iconName);const Icon=_vkontakte_icons__WEBPACK_IMPORTED_MODULE_2__[iconName];mapping[iconName]=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{})}));for(const presetName in additionalPresets)additionalPresets.hasOwnProperty(presetName)&&(options.push(presetName),mapping[presetName]=additionalPresets[presetName]);return{control:"select",options,mapping}};try{createFieldWithPresets.displayName="createFieldWithPresets",createFieldWithPresets.__docgenInfo={description:"",displayName:"createFieldWithPresets",props:{iconSizes:{defaultValue:{value:"[]"},description:"",name:"iconSizes",required:!1,type:{name:"IconSize[]"}},sizeIconsCount:{defaultValue:{value:"5"},description:"",name:"sizeIconsCount",required:!1,type:{name:"number"}},requiredIcons:{defaultValue:{value:"[]"},description:"",name:"requiredIcons",required:!1,type:{name:"IconName[]"}},additionalPresets:{defaultValue:{value:"{}"},description:"",name:"additionalPresets",required:!1,type:{name:"{ [K in CustomPresetName]?: ReactNode; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"]={docgenInfo:createFieldWithPresets.__docgenInfo,name:"createFieldWithPresets",path:"src/testing/presets/createFieldWithPresets.tsx#createFieldWithPresets"})}catch(__react_docgen_typescript_loader_error){}},"../../tools/storybook-addon-cartesian/src/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L1:()=>withCartesian});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");__webpack_require__("../../node_modules/react/index.js");const CartesianContainerStyle={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"};const withCartesian=(StoryFn,context)=>{const{argTypes,args:{cartesian,...restArgs}}=context;if(cartesian){const variants=function cartesianFunc(propDesc=[],argTypes){return Object.entries(propDesc).reduce(((acc,[prop,values])=>{const res=[];return acc.forEach((props=>{values.forEach((value=>{const mapping=argTypes[prop].mapping;res.push({...props,[prop]:mapping?mapping[value]:value})}))})),res}),[{}])}(cartesian,argTypes);return(0,jsx_runtime.jsx)("div",{style:CartesianContainerStyle,children:variants.map(((ops,index)=>(0,jsx_runtime.jsx)(StoryFn,{args:{...restArgs,...ops}},index)))})}return(0,jsx_runtime.jsx)(StoryFn,{args:restArgs})}},"./src/components/File/File.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>File_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),src=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),delete_16=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/16/delete_16.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),constants=__webpack_require__("./src/storybook/constants.ts"),createFieldWithPresets=__webpack_require__("./src/testing/presets/createFieldWithPresets.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Button=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/components/Button/Button.tsx")),VisuallyHidden=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx");const File=({children="Выберите файл",align="left",size,mode,stretched,before,after,loading,className,style,getRef,getRootRef,appearance,...restProps})=>(0,jsx_runtime.jsxs)(Button.$,{Component:"label",align,className,stretched,mode,appearance,size,before,after,loading,style,getRootRef,disabled:restProps.disabled,children:[(0,jsx_runtime.jsx)(VisuallyHidden.s,{title:"",...restProps,Component:"input",type:"file",getRootRef:getRef}),children]});try{File.displayName="File",File.__docgenInfo={description:"",displayName:"File",props:{mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"outline"'}]}},before:{defaultValue:null,description:"",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"",name:"after",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"overlay"'},{value:'"positive"'},{value:'"negative"'},{value:'"accent-invariable"'}]}},align:{defaultValue:{value:"left"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!1,type:{name:"boolean"}},stretched:{defaultValue:null,description:"",name:"stretched",required:!1,type:{name:"boolean"}},disableSpinnerAnimation:{defaultValue:null,description:"",name:"disableSpinnerAnimation",required:!1,type:{name:"boolean"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/File/File.tsx#File"]={docgenInfo:File.__docgenInfo,name:"File",path:"src/components/File/File.tsx#File"})}catch(__react_docgen_typescript_loader_error){}const iconsPresets=(0,createFieldWithPresets.z)({iconSizes:["12","16","20","24","28"],additionalPresets:{DeleteIconButton:(0,jsx_runtime.jsx)(IconButton.K,{onClick:es6.lQ,children:(0,jsx_runtime.jsx)(delete_16.m,{})})}}),File_stories={title:"Forms/File",component:File,parameters:constants.eb,decorators:[src.L1],argTypes:{before:iconsPresets,after:iconsPresets}},Playground={},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{}",...Playground.parameters?.docs?.source}}}}}]);