"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2178],{"./src/components/UsersStack/UsersStack.stories.tsx":(r,t,e)=>{e.r(t),e.d(t,{Playground:()=>s,__namedExportsOrder:()=>i,default:()=>c});var n=e("../../tools/storybook-addon-cartesian/src/index.tsx"),o=e("./src/storybook/constants.ts"),a=e("./src/testing/mock.ts");let c={title:"Blocks/UsersStack",component:e("./src/components/UsersStack/UsersStack.tsx").r,parameters:o.tW,decorators:[n.nW]};var s={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[(0,a.E$)(),(0,a.E$)(),(0,a.E$)(),(0,a.E$)()],direction:"row"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Алексей, Илья, Михаил и ещё 1 человек',\n    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],\n    direction: 'row'\n  }\n}",...s.parameters?.docs?.source}}};let i=["Playground"]},"./src/storybook/constants.ts":(r,t,e)=>{e.d(t,{R0:()=>a,nB:()=>o,tW:()=>n});var n={layout:"fullscreen",centered:!0},o={cartesian:{disable:!0}},a={control:{type:"text"}}},"../../tools/storybook-addon-cartesian/src/index.tsx":(r,t,e)=>{e.d(t,{nW:()=>i});var n=e("../../node_modules/react/index.js");function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}function a(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function c(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},n=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.forEach(function(t){a(r,t,e[t])})}return r}var s={display:"flex",flexWrap:"wrap",overflow:"auto",margin:"10px",gap:"5px",boxSizing:"border-box",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},i=function(r,t){var e=t.argTypes,i=t.args.cartesian,l=function(r,t){if(null==r)return{};var e,n,o=function(r,t){if(null==r)return{};var e,n,o={},a=Object.keys(r);for(n=0;n<a.length;n++)e=a[n],t.indexOf(e)>=0||(o[e]=r[e]);return o}(r,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)e=a[n],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(r,e)&&(o[e]=r[e])}return o}(t.args,["cartesian"]);if(i){var u=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return Object.entries(r).reduce(function(r,e){var n=function(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e,n,o=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=o){var a=[],c=!0,s=!1;try{for(o=o.call(r);!(c=(e=o.next()).done)&&(a.push(e.value),!t||a.length!==t);c=!0);}catch(r){s=!0,n=r}finally{try{c||null==o.return||o.return()}finally{if(s)throw n}}return a}}(r,t)||function(r,t){if(r){if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(r,t)}}(r,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),s=n[0],i=n[1],l=[];return r.forEach(function(r){i.forEach(function(e){l.push(function(r,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):(function(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e})(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}),r}(c({},r),a({},s,t[s].mapping?t[s].mapping[e]:e)))})}),l},[{}])}(i,e);return n.createElement("div",{style:s},u.map(function(t,e){return n.createElement(r,{key:e,args:c({},l,t)})}))}return n.createElement(r,{args:l})}}}]);