"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6606],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,n){n.d(t,{_:function(){return o}});function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return g}});var o,r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),c=n("../../node_modules/react/index.js"),l=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),d=n("../../node_modules/@swc/helpers/esm/_create_class.js"),u=n("../../node_modules/@swc/helpers/esm/_define_property.js"),a=function(){function e(t){var n=t.content;(0,l._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,d._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),h="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,l._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:h,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,d._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=a.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(h,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),p=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(p){var f="__SVG_SPRITE_NODE__";o=new m({attrs:{id:f}});var v=function(){var e=document.getElementById(f);e?o.attach(e):o.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else o=null;var _=p?c.useLayoutEffect:c.useEffect,w=function(e){var t=e.width,n=void 0===t?0:t,o=e.height,l=void 0===o?0:o,d=e.viewBox,u=e.id,a=e.className,h=e.fill,m=e.getRootRef,p=e.style,f=e.title,v=e.children,_=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),w=Math.max(n,l),g=(0,r._)({width:n,height:l},void 0===p?{}:p);return c.createElement("svg",(0,i._)((0,r._)({"aria-hidden":"true",display:"block"},_),{className:["vkuiIcon","vkuiIcon--".concat(w),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(l),"vkuiIcon--".concat(u),void 0===a?"":a].join(" ").trim(),viewBox:d,width:n,height:l,style:g,ref:m}),f&&c.createElement("title",null,f),c.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:h}},v))};function g(e,t,n,s,l,d,u,h){var m=function(){p||(!function(e){o&&o.add(e)}(new a({content:s})),p=!0)},p=!1,f=function(e){var t={};return function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[o]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),v=function(e){return _(m,[]),u&&f("Иконка устарела"+(h?". Замените на ".concat(h):"")),c.createElement(w,(0,i._)((0,r._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?l:+e.width,height:void 0===e.height||isNaN(e.height)?d:+e.height}))};return v.mountIcon=m,v.displayName=e,v}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":function(e,t,n){n.d(t,{r:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8Z" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":function(e,t,n){n.d(t,{o:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js":function(e,t,n){n.d(t,{R:function(){return o}});var o=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025Zm2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5c2.265 0 4.242.532 5.584 1.385 1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a.96.96 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a.966.966 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return o}});function o(e){return{all:e=e||new Map,on:function(t,n){var o=e.get(t);o?o.push(n):e.set(t,[n])},off:function(t,n){var o=e.get(t);o&&(n?o.splice(o.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var o=e.get(t);o&&o.slice().map(function(e){e(n)}),(o=e.get("*"))&&o.slice().map(function(e){e(t,n)})}}}},"./src/components/Spacing/Spacing.stories.tsx":function(e,t,n){n.r(t),n.d(t,{Example:function(){return g},Playground:function(){return w},default:function(){return _}});var o,r,i,s,c,l,d=n("../../node_modules/react/jsx-runtime.js");n("../../node_modules/react/index.js");var u=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28BlockOutline","block_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="block_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M20.329 21.743 6.257 7.67A9.959 9.959 0 0 0 4 14c0 5.523 4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.257Zm1.414-1.414A9.959 9.959 0 0 0 24 14c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257L21.743 20.33ZM14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12Z" /></g></symbol>',28,28,!1,void 0),a=n("../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js"),h=n("./src/storybook/constants.ts"),m=n("./src/components/Group/Group.tsx"),p=n("./src/components/SimpleCell/SimpleCell.tsx");function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var _={title:"Blocks/Spacing",component:n("./src/components/Spacing/Spacing.tsx").K,parameters:f({},h.tW,h.nB)},w={decorators:[function(e){return(0,d.jsxs)("div",{children:["Before Space",(0,d.jsx)(e,{}),"After Space"]})}]},g=v(f({},w),{decorators:[function(e){return(0,d.jsxs)(m.Z,{children:[(0,d.jsx)(p.q,{before:(0,d.jsx)(u,{}),children:"Не беспокоить"}),(0,d.jsx)(e,{}),(0,d.jsx)(p.q,{before:(0,d.jsx)(a.R,{}),children:"Учётная запись"})]})}]});w.parameters=v(f({},w.parameters),{docs:v(f({},null===(o=w.parameters)||void 0===o?void 0:o.docs),{source:f({originalSource:"{\n  decorators: [Component => <div>\n        Before Space\n        <Component />\n        After Space\n      </div>]\n}"},null===(i=w.parameters)||void 0===i?void 0:null===(r=i.docs)||void 0===r?void 0:r.source)})}),g.parameters=v(f({},g.parameters),{docs:v(f({},null===(s=g.parameters)||void 0===s?void 0:s.docs),{source:f({originalSource:"{\n  ...Playground,\n  decorators: [Component => <Group>\n        <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>\n        <Component />\n        <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>\n      </Group>]\n}"},null===(l=g.parameters)||void 0===l?void 0:null===(c=l.docs)||void 0===c?void 0:c.source)})})}}]);