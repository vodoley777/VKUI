"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6742],{"./src/components/ScrollArrow/ScrollArrow.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Playground:()=>l,__namedExportsOrder:()=>i,default:()=>n});var r=o("./src/storybook/constants.ts");let n={title:"Blocks/ScrollArrow",component:o("./src/components/ScrollArrow/ScrollArrow.tsx").Q,parameters:function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({},r.tW,r.nB)};var l={};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};let i=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,o)=>{o.d(t,{_:()=>r});function r(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,o)=>{o.d(t,{De:()=>_});var r,n=o("../../node_modules/@swc/helpers/esm/_object_spread.js"),l=o("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=o("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=o("../../node_modules/react/index.js"),d=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),c=o("../../node_modules/@swc/helpers/esm/_create_class.js"),a=o("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var o=t.content;(0,d._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,c._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),m="http://www.w3.org/2000/svg",p=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:m,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,c._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=u.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(m,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),f=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(f){var h="__SVG_SPRITE_NODE__";r=new p({attrs:{id:h}});var y=function(){var e=document.getElementById(h);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",y)};document.querySelector("body")?y():document.addEventListener("DOMContentLoaded",y)}else r=null;var w=f?s.useLayoutEffect:s.useEffect,v=function(e){var t=e.width,o=void 0===t?0:t,r=e.height,d=void 0===r?0:r,c=e.viewBox,a=e.id,u=e.className,m=e.fill,p=e.getRootRef,f=e.style,h=e.title,y=e.children,w=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),v=Math.max(o,d),_=(0,n._)({width:o,height:d},void 0===f?{}:f);return s.createElement("svg",(0,l._)((0,n._)({"aria-hidden":"true",display:"block"},w),{className:["vkuiIcon","vkuiIcon--".concat(v),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(a),void 0===u?"":u].join(" ").trim(),viewBox:c,width:o,height:d,style:_,ref:p}),h&&s.createElement("title",null,h),s.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:m}},y))};function _(e,t,o,i,d,c,a,m){var p=function(){f||(!function(e){r&&r.add(e)}(new u({content:i})),f=!0)},f=!1,h=function(e){var t={};return function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),y=function(e){return w(p,[]),a&&h("Иконка устарела"+(m?". Замените на ".concat(m):"")),s.createElement(v,(0,l._)((0,n._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?c:+e.height}))};return y.mountIcon=p,y.displayName=e,y}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,t,o)=>{o.d(t,{r:()=>r});var r=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js":(e,t,o)=>{o.d(t,{P:()=>r});var r=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Chevron","chevron_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24" id="chevron_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z" /><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12 4.706 7.706" /></g></symbol>',16,24,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css":(e,t,o)=>{o.d(t,{Z:()=>s});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),l=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(l)()(n());i.push([e.id,".ScrollArrow--JgxNW{background-color:initial;border:0;cursor:pointer;display:flex;justify-content:center;padding:0;transition:opacity .15s;transition-timing-function:var(--vkui--animation_easing_platform);-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.ScrollArrow--direction-left--jS38A,.ScrollArrow--direction-right--UIq4o{flex-direction:column;height:100%}.ScrollArrow--direction-down--KQFqm,.ScrollArrow--direction-up--LfNde{flex-direction:row;width:100%}.ScrollArrow__icon--gJpr6{align-items:center;background-color:var(--vkui--color_background_modal);box-shadow:var(--vkui--elevation3);color:var(--vkui--color_icon_secondary);display:flex;justify-content:center;position:relative}.ScrollArrow--size-m--c7dtS .ScrollArrow__icon--gJpr6{border-radius:14px;height:28px;width:28px}.ScrollArrow--size-l--f8Hpn .ScrollArrow__icon--gJpr6{border-radius:24px;height:40px;width:40px}.ScrollArrow--direction-left--jS38A{left:0;padding-left:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-right--UIq4o{padding-right:var(--vkui--size_base_padding_horizontal--regular,16px);right:0}.ScrollArrow--direction-up--LfNde{padding-top:var(--vkui--size_base_padding_horizontal--regular,16px);top:0}.ScrollArrow--direction-down--KQFqm{bottom:0;padding-bottom:var(--vkui--size_base_padding_horizontal--regular,16px)}.ScrollArrow--direction-left--jS38A .ScrollArrow__defaultIcon--k1Jug{transform:rotate(180deg)}.ScrollArrow--direction-up--LfNde .ScrollArrow__defaultIcon--k1Jug{transform:rotate(-90deg)}.ScrollArrow--direction-down--KQFqm .ScrollArrow__defaultIcon--k1Jug{transform:rotate(90deg)}",""]),i.locals={ScrollArrow:"ScrollArrow--JgxNW","ScrollArrow--direction-left":"ScrollArrow--direction-left--jS38A","ScrollArrow--direction-right":"ScrollArrow--direction-right--UIq4o","ScrollArrow--direction-down":"ScrollArrow--direction-down--KQFqm","ScrollArrow--direction-up":"ScrollArrow--direction-up--LfNde",ScrollArrow__icon:"ScrollArrow__icon--gJpr6","ScrollArrow--size-m":"ScrollArrow--size-m--c7dtS","ScrollArrow--size-l":"ScrollArrow--size-l--f8Hpn",ScrollArrow__defaultIcon:"ScrollArrow__defaultIcon--k1Jug"};let s=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(e,t,o)=>{o.d(t,{Z:()=>s});var r=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(r),l=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(l)()(n());i.push([e.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}",""]),i.locals={VisuallyHidden:"VisuallyHidden--bAIOu"};let s=i},"./src/components/ScrollArrow/ScrollArrow.tsx":(e,t,o)=>{o.d(t,{Q:()=>k});var r=o("../../node_modules/react/index.js"),n=o("../../node_modules/@vkontakte/icons/dist/es6/24/chevron_24.js"),l=o("../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js"),i=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=o("./src/components/RootComponent/RootComponent.tsx"),d=o("./src/components/VisuallyHidden/VisuallyHidden.tsx"),c=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),a=o.n(c),u=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),m=o.n(u),p=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=o.n(p),h=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),y=o.n(h),w=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),v=o.n(w),_=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/ScrollArrow/ScrollArrow.module.css"),g={attributes:{class:"vkui-style"}};g.setAttributes=y(),g.insert=f().bind(null,"head"),g.domAPI=m(),g.insertStyleElement=v(),a()(_.Z,g);let S=_.Z&&_.Z.locals?_.Z.locals:void 0;var b={m:S["ScrollArrow--size-m"],l:S["ScrollArrow--size-l"]},j={up:S["ScrollArrow--direction-up"],right:S["ScrollArrow--direction-right"],down:S["ScrollArrow--direction-down"],left:S["ScrollArrow--direction-left"]},A={up:"Назад",right:"Вперед",down:"Вперед",left:"Назад"},O=function(e){var t=e.size,o=n.P;return"m"===t&&(o=l.r),r.createElement(o,{className:S.ScrollArrow__defaultIcon})},k=function(e){var t=e.size,o=void 0===t?"l":t,n=e.offsetY,l=e.direction,c=e.label,a=e.children,u=void 0===a?r.createElement(O,{size:o}):a,m=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["size","offsetY","direction","label","children"]),p=null!=c?c:A[l];return r.createElement(s.U,function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:"button",type:"button",baseClassName:(0,i.AK)(S.ScrollArrow,b[o],j[l])},m),p&&r.createElement(d.T,null,p),r.createElement("span",{className:S.ScrollArrow__icon,style:n?{top:n}:void 0},u))};try{k.displayName="ScrollArrow",k.__docgenInfo={description:"Компонент стрелки. Используется в [HorizontalScroll](#/HorizontalScroll) и [Gallery](#/Gallery).",displayName:"ScrollArrow",props:{direction:{defaultValue:null,description:"Направление стрелки",name:"direction",required:!0,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"up"'},{value:'"down"'}]}},size:{defaultValue:{value:"l"},description:"Размер стрелки",name:"size",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},offsetY:{defaultValue:null,description:"Смещает иконку кнопки навигации по вертикали.",name:"offsetY",required:!1,type:{name:"string | number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"]={docgenInfo:k.__docgenInfo,name:"ScrollArrow",path:"src/components/ScrollArrow/ScrollArrow.tsx#ScrollArrow"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(e,t,o)=>{o.d(t,{T:()=>v});var r=o("../../node_modules/react/index.js"),n=o("./src/components/RootComponent/RootComponent.tsx"),l=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=o.n(l),s=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=o.n(s),c=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),a=o.n(c),u=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),m=o.n(u),p=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=o.n(p),h=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=m(),y.insert=a().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=f(),i()(h.Z,y);let w=h.Z&&h.Z.locals?h.Z.locals:void 0;var v=function(e){var t=e.Component,o=function(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["Component"]);return r.createElement(n.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({Component:void 0===t?"span":t},o),{baseClassName:w.VisuallyHidden}))};try{v.displayName="VisuallyHidden",v.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:v.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}},"./src/storybook/constants.ts":(e,t,o)=>{o.d(t,{R0:()=>l,nB:()=>n,tW:()=>r});var r={layout:"fullscreen",centered:!0},n={cartesian:{disable:!0}},l={control:{type:"text"}}}}]);