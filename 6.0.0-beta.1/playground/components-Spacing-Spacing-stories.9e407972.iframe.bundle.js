"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6606],{"./src/components/Spacing/Spacing.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Example:()=>_,Playground:()=>y,__namedExportsOrder:()=>g,default:()=>h});var o,a,r,i,s,l,c=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var d=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28BlockOutline","block_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="block_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M20.329 21.743 6.257 7.67A9.959 9.959 0 0 0 4 14c0 5.523 4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.257m1.414-1.414A9.959 9.959 0 0 0 24 14c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257L21.743 20.33M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12" /></g></symbol>',28,28,!1,void 0),p=n("../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js"),u=n("./src/storybook/constants.ts"),m=n("./src/components/Group/Group.tsx"),b=n("./src/components/SimpleCell/SimpleCell.tsx");function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function f(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}let h={title:"Blocks/Spacing",component:n("./src/components/Spacing/Spacing.tsx").K,parameters:v({},u.tW,u.nB)};var y={decorators:[function(e){return(0,c.jsxs)("div",{children:["Before Space",(0,c.jsx)(e,{}),"After Space"]})}]},_=f(v({},y),{decorators:[function(e){return(0,c.jsxs)(m.Z,{children:[(0,c.jsx)(b.q,{before:(0,c.jsx)(d,{}),children:"Не беспокоить"}),(0,c.jsx)(e,{}),(0,c.jsx)(b.q,{before:(0,c.jsx)(p.R,{}),children:"Учётная запись"})]})}]});y.parameters=f(v({},y.parameters),{docs:f(v({},null===(o=y.parameters)||void 0===o?void 0:o.docs),{source:v({originalSource:"{\n  decorators: [Component => <div>\n        Before Space\n        <Component />\n        After Space\n      </div>]\n}"},null===(r=y.parameters)||void 0===r?void 0:null===(a=r.docs)||void 0===a?void 0:a.source)})}),_.parameters=f(v({},_.parameters),{docs:f(v({},null===(i=_.parameters)||void 0===i?void 0:i.docs),{source:v({originalSource:"{\n  ...Playground,\n  decorators: [Component => <Group>\n        <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>\n        <Component />\n        <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>\n      </Group>]\n}"},null===(l=_.parameters)||void 0===l?void 0:null===(s=l.docs)||void 0===s?void 0:s.source)})});let g=["Playground","Example"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,n)=>{n.d(t,{_:()=>o});function o(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,n)=>{n.d(t,{De:()=>_});var o,a=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),r=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=n("../../node_modules/@swc/helpers/esm/_create_class.js"),d=n("../../node_modules/@swc/helpers/esm/_define_property.js"),p=function(){function e(t){var n=t.content;(0,l._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),u="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:u,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=p.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(u,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),b=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(b){var v="__SVG_SPRITE_NODE__";o=new m({attrs:{id:v}});var f=function(){var e=document.getElementById(v);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else o=null;var h=b?s.useLayoutEffect:s.useEffect,y=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,c=e.viewBox,d=e.id,p=e.className,u=e.fill,m=e.getRootRef,b=e.style,v=e.title,f=e.children,h=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),y=Math.max(n,l),_=(0,a._)({width:n,height:l},void 0===b?{}:b);return s.createElement("svg",(0,r._)((0,a._)({"aria-hidden":"true",display:"block"},h),{className:["vkuiIcon","vkuiIcon--".concat(y),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(d),void 0===p?"":p].join(" ").trim(),viewBox:c,width:n,height:l,style:_,ref:m}),v&&s.createElement("title",null,v),s.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:u}},f))};function _(e,t,n,i,l,c,d,u){var m=function(){b||(!function(e){o&&o.add(e)}(new p({content:i})),b=!0)},b=!1,v=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),f=function(e){return h(m,[]),d&&v("Иконка устарела"+(u?". Замените на ".concat(u):"")),s.createElement(y,(0,r._)((0,a._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return f.mountIcon=m,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,t,n)=>{n.d(t,{r:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,t,n)=>{n.d(t,{o:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js":(e,t,n)=>{n.d(t,{R:()=>o});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025m2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5c2.265 0 4.242.532 5.584 1.385 1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a.96.96 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a.966.966 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,t,n)=>{n.d(t,{Z:()=>s});var o=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=n.n(o),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(a());i.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),i.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let s=i},"./src/components/Tappable/Tappable.tsx":(e,t,n)=>{n.d(t,{K:()=>D});var o=n("../../node_modules/react/jsx-runtime.js"),a=n("../../node_modules/react/index.js"),r=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=n("./src/hooks/useAdaptivity.ts"),s=n("./src/lib/adaptivity/constants.ts"),l=n("./src/lib/mergeCalls.ts"),c=n("./src/components/Clickable/Clickable.tsx"),d=n("./src/hooks/usePlatform.ts"),p=n("./src/hooks/useTimeout.ts"),u=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),m=n.n(u),b=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=n.n(b),f=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),h=n.n(f),y=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),_=n.n(y),g=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=n.n(g),O=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),S={attributes:{class:"vkui-style"}};S.setAttributes=_(),S.insert=h().bind(null,"head"),S.domAPI=v(),S.insertStyleElement=T(),m()(O.Z,S);let w=O.Z&&O.Z.locals?O.Z.locals:void 0;function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function j(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}}var C=function(e,t){return"android"===(0,d.F)()&&!t&&"background"===e},R=function(e,t){var n=function(e,t,n){var o=Date.now();s((function(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i.filter(function(e){return e.id+225>o})).concat([{x:e,y:t,id:o,pointerId:n}])),c.set(),l.delete(n)},o=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,o,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r=[],i=!0,s=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(s)throw o}}return r}}(e,t)||j(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState([]),2),i=o[0],s=o[1],l=a.useMemo(function(){return new Map},[]),c=(0,p.K)(function(){return s([])},225),d=(!r.RX||!1===t)&&e;return{clicks:i,onPointerDown:d?function(e){var t=function(e){var t=null==e?void 0:e.getBoundingClientRect();return{top:null==t?void 0:t.top,left:null==t?void 0:t.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),o=t.top,a=t.left,r=e.clientX-(null!=a?a:0),i=e.clientY-(null!=o?o:0);l.set(e.pointerId,setTimeout(function(){return n(r,i,e.pointerId)},70))}:r.ZT,onPointerCancel:d?function(e){clearTimeout(l.get(e.pointerId)),l.delete(e.pointerId)}:r.ZT}},E=function(e){var t=e.needRipple,n=e.clicks;return(0,o.jsx)("span",{"aria-hidden":!0,className:(0,r.AK)(w.Tappable__stateLayer,(void 0===t||t)&&w.Tappable__ripple),children:n.map(function(e){return(0,o.jsx)("span",{className:w.Tappable__wave,style:{top:e.y,left:e.x}},e.id)})})};try{C.displayName="useMaybeNeedRipple",C.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:C.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{R.displayName="useRipple",R.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:R.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{E.displayName="Ripple",E.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:E.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var x="background",A={background:w["Tappable--hovered-background"],opacity:w["Tappable--hovered-opacity"],none:""};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=A[e];return void 0!==t?t:e}var N={background:w["Tappable--activated-background"],opacity:w["Tappable--activated-opacity"],none:""};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=N[e];return void 0!==t?t:e}try{P.displayName="hoverClass",P.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:P.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{I.displayName="activeClass",I.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:I.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{x.displayName="DEFAULT_STATE_MODE",x.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:x.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function M(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={none:w["Tappable--sizeX-none"],compact:w["Tappable--sizeX-compact"]},D=function(e){var t=e.baseClassName,n=e.borderRadiusMode,a=e.children,d=e.hoverMode,p=void 0===d?x:d,u=e.activeMode,m=void 0===u?x:u,b=e.onPointerDown,v=e.onPointerCancel,f=M(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),h=(0,c.T)(f),y=(0,i.g)(),_=y.sizeX,g=void 0===_?"none":_,T=y.hasPointer,O=C(m,T),S=R(O,T),k=S.clicks,j=M(S,["clicks"]),A=(0,l.O)(j,{onPointerDown:b,onPointerCancel:v});return(0,o.jsxs)(c.P,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:(0,r.AK)(t,w.Tappable,g!==s.n$.REGULAR&&L[g],"inherit"===(void 0===n?"auto":n)&&w["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return w["Tappable--hasPointer-none"];case!1:return w["Tappable--hasPointer-false"]}}(T)),hoverClassName:P(p),activeClassName:I(m)},A,f),{children:[a,h&&("background"===p||"background"===m)&&(0,o.jsx)(E,{needRipple:O,clicks:k})]}))};try{D.displayName="Tappable",D.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:D.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}}}]);