"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4795],{"./src/components/SimpleCell/SimpleCell.stories.tsx":(e,t,o)=>{o.r(t),o.d(t,{Playground:()=>_,__namedExportsOrder:()=>w,default:()=>f});var n,i,r,s=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var l=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Verified","verified_12","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="verified_12"><path fill="currentColor" d="M4.5 9.586 2.957 8.043a1 1 0 0 0-1.414 1.414l2.25 2.25a1 1 0 0 0 1.414 0l5.25-5.25a1 1 0 0 0-1.414-1.414z" /></symbol>',16,16,!1,void 0),c=o("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),d=o("./src/storybook/VKUIDecorators.tsx"),a=o("./src/storybook/constants.ts"),u=o("./src/components/Avatar/Avatar.tsx"),h=o("./src/components/Group/Group.tsx"),m=o("./src/components/IconButton/IconButton.tsx");function v(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),n.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}let f={title:"Blocks/SimpleCell",component:o("./src/components/SimpleCell/SimpleCell.tsx").q,parameters:v({},a.tW,a.nB)};var _={args:{children:"Игорь Фёдоров",before:(0,s.jsx)(u.q,{size:48,src:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"}),badgeAfterTitle:(0,s.jsx)(l,{}),after:(0,s.jsx)(m.h,{label:"Написать сообщение",children:(0,s.jsx)(c.C,{})}),subtitle:"Команда ВКонтакте"},decorators:[function(e,t){return(0,s.jsx)(h.Z,{children:(0,s.jsx)(e,v({},t.args))})},d.vO,d.Z0]};_.parameters=p(v({},_.parameters),{docs:p(v({},null===(n=_.parameters)||void 0===n?void 0:n.docs),{source:v({originalSource:"{\n  args: {\n    children: 'Игорь Фёдоров',\n    before: <Avatar size={48} src=\"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1\" />,\n    badgeAfterTitle: <Icon12Verified />,\n    after: <IconButton label=\"Написать сообщение\">\n        <Icon28MessageOutline />\n      </IconButton>,\n    subtitle: 'Команда ВКонтакте'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}"},null===(r=_.parameters)||void 0===r?void 0:null===(i=r.docs)||void 0===i?void 0:i.source)})});let w=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,t,o)=>{o.d(t,{_:()=>n});function n(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,t,o)=>{o.d(t,{De:()=>g});var n,i=o("../../node_modules/@swc/helpers/esm/_object_spread.js"),r=o("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=o("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=o("../../node_modules/react/index.js"),c=o("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=o("../../node_modules/@swc/helpers/esm/_create_class.js"),a=o("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(t){var o=t.content;(0,c._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,o=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(o,!0):o}(o)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var o=new e({content:""});return o.node=t,o}}]),e}(),h="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,o=t.has(e.id);return t.set(e.id,e),!o}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var o=u.createFromExistingNode(e);t.add(o)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),v=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(v){var p="__SVG_SPRITE_NODE__";n=new m({attrs:{id:p}});var f=function(){var e=document.getElementById(p);e?n.attach(e):n.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else n=null;var _=v?l.useLayoutEffect:l.useEffect,w=function(e){var t=e.width,o=void 0===t?0:t,n=e.height,c=void 0===n?0:n,d=e.viewBox,a=e.id,u=e.className,h=e.fill,m=e.getRootRef,v=e.style,p=e.title,f=e.children,_=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),w=Math.max(o,c),g=(0,i._)({width:o,height:c},void 0===v?{}:v);return l.createElement("svg",(0,r._)((0,i._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(w),"vkuiIcon--w-".concat(o),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(a),void 0===u?"":u].join(" ").trim(),viewBox:d,width:o,height:c,style:g,ref:m}),p&&l.createElement("title",null,p),l.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:h}},f))};function g(e,t,o,s,c,d,a,h){var m=function(){v||(!function(e){n&&n.add(e)}(new u({content:s})),v=!0)},v=!1,p=function(e){var t={};return function(o){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[o]||(console[n]("[@vkontakte/icons][".concat(e,"] ").concat(o)),t[o]=!0)}}(e),f=function(e){return _(m,[]),a&&p("Иконка устарела"+(h?". Замените на ".concat(h):"")),l.createElement(w,(0,r._)((0,i._)({},e),{viewBox:o,id:t,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return f.mountIcon=m,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(e,t,o)=>{o.d(t,{m:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(e,t,o)=>{o.d(t,{I:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,t,o)=>{o.d(t,{r:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,t,o)=>{o.d(t,{o:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":(e,t,o)=>{o.d(t,{C:()=>n});var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8" /></g></symbol>',28,28,!1,void 0)}}]);