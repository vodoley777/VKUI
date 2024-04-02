"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[5989],{"./src/components/Avatar/Avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,WithBadge:()=>WithBadge,WithOverlay:()=>WithOverlay,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../tools/storybook-addon-cartesian/src/index.tsx"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_testing_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/testing/icons.tsx"),_testing_mock__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/testing/mock.ts"),_ImageBase_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ImageBase/types.ts"),_Avatar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Avatar/Avatar.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}let __WEBPACK_DEFAULT_EXPORT__={title:"Blocks/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_2__.q,parameters:_storybook_constants__WEBPACK_IMPORTED_MODULE_3__.tW,argTypes:{size:{control:{type:"select"},options:_ImageBase_types__WEBPACK_IMPORTED_MODULE_4__.R},badge:{description:"Использовать Badge",table:{type:{summary:"string"}},options:["None","BadgeOnline","BadgeOnlineMobile","Icon"],mapping:{None:null,BadgeOnline:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.BadgeWithPreset,{preset:"online"}),BadgeOnlineMobile:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.BadgeWithPreset,{preset:"online-mobile"}),Icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.Badge,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_testing_icons__WEBPACK_IMPORTED_MODULE_5__.BZ,null))},control:{type:"inline-radio"}},overlay:{description:"Использовать Overlay",table:{type:{summary:"string"}},options:["None","OnHover","Always"],mapping:{None:null,OnHover:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.Overlay,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_testing_icons__WEBPACK_IMPORTED_MODULE_5__.w9,null)),Always:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.Overlay,{visibility:"always"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_testing_icons__WEBPACK_IMPORTED_MODULE_5__.w9,null))},control:{type:"inline-radio"}}},decorators:[_project_tools_storybook_addon_cartesian__WEBPACK_IMPORTED_MODULE_1__.nW]};var Playground={args:{alt:"Фотография Татьяны Плуталовой"},render:function(_param){var badge=_param.badge,overlay=_param.overlay,children=_param.children,_param_size=_param.size,size=void 0===_param_size?48:_param_size,args=_object_without_properties(_param,["badge","overlay","children","size"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q,_object_spread_props(_object_spread({src:args.initials?void 0:(0,_testing_mock__WEBPACK_IMPORTED_MODULE_6__.E$)("user_id34")},args),{size:size}),size>=24&&badge,overlay,children)}},WithBadge=_object_spread_props(_object_spread({},Playground),{args:_object_spread_props(_object_spread({},Playground.args),{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.Badge,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_testing_icons__WEBPACK_IMPORTED_MODULE_5__.BZ,null))})}),WithOverlay=_object_spread_props(_object_spread({},Playground),{args:_object_spread_props(_object_spread({},Playground.args),{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__.q.Overlay,{"aria-label":"Кнопка для изображения"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_testing_icons__WEBPACK_IMPORTED_MODULE_5__.w9,null))})});Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    alt: 'Фотография Татьяны Плуталовой'\n  },\n  render: ({\n    badge,\n    overlay,\n    children,\n    size = 48,\n    ...args\n  }) => <Avatar src={args.initials ? undefined : getAvatarUrl('user_id34')} {...args} size={size}>\n      {size >= 24 && badge}\n      {overlay}\n      {children}\n    </Avatar>\n}",...Playground.parameters?.docs?.source}}},WithBadge.parameters={...WithBadge.parameters,docs:{...WithBadge.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: <Avatar.Badge>\n        <IconExampleForBadgeBasedOnImageBaseSize />\n      </Avatar.Badge>\n  }\n}",...WithBadge.parameters?.docs?.source}}},WithOverlay.parameters={...WithOverlay.parameters,docs:{...WithOverlay.parameters?.docs,source:{originalSource:'{\n  ...Playground,\n  args: {\n    ...Playground.args,\n    children: <Avatar.Overlay aria-label="Кнопка для изображения">\n        <IconExampleForOverlayBasedOnImageBaseSize />\n      </Avatar.Overlay>\n  }\n}',...WithOverlay.parameters?.docs?.source}}};let __namedExportsOrder=["Playground","WithBadge","WithOverlay"]}}]);