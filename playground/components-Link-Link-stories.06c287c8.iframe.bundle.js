"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3106],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Link/Link.module.css":function(e,n,t){var o=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),r=t.n(o),i=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(i)()(r());s.push([e.id,".Link--LpNlu{background:none;border:0;border-radius:0;color:#2d81e0;color:var(--vkui_internal--link-color,var(--vkui--color_text_link));cursor:pointer;display:inline;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;padding:0;text-decoration:none}@media (hover:hover) and (pointer:fine){.Link--LpNlu:hover{text-decoration:underline}}.Link--focus-visible--Fs_zP{outline:2px solid #2688eb!important;outline:2px solid var(--vkui--color_stroke_accent)!important}.Link--has-visited--_OgtP:visited{color:#4986cc;color:var(--vkui--color_text_link_visited)}.Link--LpNlu .vkuiIcon{display:inline-block;margin-left:4px;vertical-align:middle}",""]),s.locals={Link:"Link--LpNlu","Link--focus-visible":"Link--focus-visible--Fs_zP","Link--has-visited":"Link--has-visited--_OgtP"},n.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,n,t){t.d(n,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(n,t){var o=e.get(n);o?o.push(t):e.set(n,[t])},off:function(n,t){var o=e.get(n);o&&(t?o.splice(o.indexOf(t)>>>0,1):e.set(n,[]))},emit:function(n,t){var o=e.get(n);o&&o.slice().map(function(e){e(t)}),(o=e.get("*"))&&o.slice().map(function(e){e(n,t)})}}}},"./src/components/Link/Link.stories.tsx":function(e,n,t){t.r(n),t.d(n,{Playground:function(){return v},WithIcon:function(){return b},default:function(){return f}});var o,r,i,s,l,a,u=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var c=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ExternalLinkOutline","external_link_outline_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="external_link_outline_24"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.146 3.634c.762-.407 1.512-.534 3.082-.534H10.1a.9.9 0 1 1 0 1.8H8.228c-1.487 0-1.87.128-2.233.322-.336.18-.594.437-.773.773-.194.362-.322.746-.322 2.233v7.544c0 1.487.128 1.87.322 2.233.18.336.437.594.773.774.362.193.746.321 2.233.321h7.544c1.487 0 1.87-.128 2.233-.321.336-.18.594-.438.774-.774.193-.362.321-.746.321-2.233V13.9a.9.9 0 1 1 1.8 0v1.872c0 1.57-.127 2.32-.534 3.082a3.646 3.646 0 0 1-1.512 1.512c-.763.407-1.512.534-3.082.534H8.228c-1.57 0-2.32-.127-3.082-.534a3.647 3.647 0 0 1-1.512-1.512c-.407-.762-.534-1.512-.534-3.082V8.228c0-1.57.127-2.32.534-3.082a3.647 3.647 0 0 1 1.512-1.512z" /><path d="M14 4a.9.9 0 0 1 .9-.9H20a.9.9 0 0 1 .9.9v5.1a.9.9 0 1 1-1.8 0V6.173l-6.564 6.563a.9.9 0 1 1-1.272-1.272L17.827 4.9H14.9A.9.9 0 0 1 14 4z" /></g></symbol>',24,24,!1,void 0),d=t("./src/storybook/constants.ts");function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}var f={title:"Blocks/Link",component:t("./src/components/Link/Link.tsx").r,parameters:p({},d.tW,d.nB)},v={args:{href:"https://vkcom.github.io/VKUI/#/About",children:"О VKUI"}},b=m(p({},v),{args:{href:"https://google.com",target:"_blank",children:(0,u.jsxs)(u.Fragment,{children:["https://google.com ",(0,u.jsx)(c,{width:16,height:16})]})}});v.parameters=m(p({},v.parameters),{docs:m(p({},null===(o=v.parameters)||void 0===o?void 0:o.docs),{source:p({originalSource:"{\n  args: {\n    href: 'https://vkcom.github.io/VKUI/#/About',\n    children: 'О VKUI'\n  }\n}"},null===(i=v.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})}),b.parameters=m(p({},b.parameters),{docs:m(p({},null===(s=b.parameters)||void 0===s?void 0:s.docs),{source:p({originalSource:"{\n  ...Playground,\n  args: {\n    href: 'https://google.com',\n    target: '_blank',\n    children: <>\n        https://google.com <Icon24ExternalLinkOutline width={16} height={16} />\n      </>\n  }\n}"},null===(a=b.parameters)||void 0===a?void 0:null===(l=a.docs)||void 0===l?void 0:l.source)})})},"./src/components/Link/Link.tsx":function(e,n,t){t.d(n,{r:function(){return g}});var o=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var r=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=t("./src/components/Tappable/Tappable.tsx"),s=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=t.n(s),a=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=t.n(a),c=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=t.n(c),p=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=t.n(p),f=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=t.n(f),b=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/components/Link/Link.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=m(),y.insert=d().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=v(),l()(b.Z,y);var h=b.Z&&b.Z.locals?b.Z.locals:void 0,g=function(e){var n=e.hasVisited,t=e.children,s=e.className,l=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,["hasVisited","children","className"]);return(0,o.jsx)(i.KR,function(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){!function(e,n,t){n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}(e,n,t[n])})}return e}({Component:l.href?"a":"button"},l),{className:(0,r.AK)(h.Link,n&&h["Link--has-visited"],s),hasHover:!1,activeMode:"opacity",focusVisibleMode:h["Link--focus-visible"],children:t}))};try{g.displayName="Link",g.__docgenInfo={description:"",displayName:"Link",props:{hasVisited:{defaultValue:null,description:"Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет",name:"hasVisited",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа active-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},stopPropagation:{defaultValue:null,description:"",name:"stopPropagation",required:!1,type:{name:"boolean"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"LiteralUnion<StateMode, string>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс во время focus-visible",name:"focusVisibleMode",required:!1,type:{name:"LiteralUnion<FocusVisibleMode, string>"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"((outputEvent: MouseEvent) => void)"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"TouchEventHandler"}},onMove:{defaultValue:null,description:"",name:"onMove",required:!1,type:{name:"TouchEventHandler"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"TouchEventHandler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:g.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(e){}}}]);