"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2997,8163,3521,7407],{"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,n)=>{n.d(o,{_:()=>t});function t(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,n)=>{n.d(o,{De:()=>p});var t,i=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),d=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),l=n("../../node_modules/react/index.js"),c=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),r=n("../../node_modules/@swc/helpers/esm/_create_class.js"),a=n("../../node_modules/@swc/helpers/esm/_define_property.js"),h=function(){function e(o){var n=o.content;(0,c._)(this,e),(0,a._)(this,"isMounted",!1),(0,a._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(n,!0):n}(n)}return(0,r._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var n=new e({content:""});return n.node=o,n}}]),e}(),u="http://www.w3.org/2000/svg",v=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,c._)(this,e),(0,a._)(this,"symbols",new Map),(0,a._)(this,"config",{attrs:{xmlns:u,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,a._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,r._)(e,[{key:"push",value:function(e){var o=this.symbols,n=o.has(e.id);return o.set(e.id,e),!n}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=h.createFromExistingNode(e);o.add(n)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(u,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),_=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(_){var m="__SVG_SPRITE_NODE__";t=new v({attrs:{id:m}});var f=function(){var e=document.getElementById(m);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else t=null;var w=_?l.useLayoutEffect:l.useEffect,k=function(e){var o=e.width,n=void 0===o?0:o,t=e.height,c=void 0===t?0:t,r=e.viewBox,a=e.id,h=e.className,u=e.fill,v=e.getRootRef,_=e.style,m=e.title,f=e.children,w=(0,d._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),k=Math.max(n,c),p=(0,i._)({width:n,height:c},void 0===_?{}:_);return l.createElement("svg",(0,s._)((0,i._)({"aria-hidden":"true",display:"block"},w),{className:["vkuiIcon","vkuiIcon--".concat(k),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(c),"vkuiIcon--".concat(a),void 0===h?"":h].join(" ").trim(),viewBox:r,width:n,height:c,style:p,ref:v}),m&&l.createElement("title",null,m),l.createElement("use",{xlinkHref:"#".concat(a),style:{fill:"currentColor",color:u}},f))};function p(e,o,n,d,c,r,a,u){var v=function(){_||(!function(e){t&&t.add(e)}(new h({content:d})),_=!0)},_=!1,m=function(e){var o={};return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[n]||(console[t]("[@vkontakte/icons][".concat(e,"] ").concat(n)),o[n]=!0)}}(e),f=function(e){return w(v,[]),a&&m("Иконка устарела"+(u?". Замените на ".concat(u):"")),l.createElement(k,(0,s._)((0,i._)({},e),{viewBox:n,id:o,width:void 0===e.width||isNaN(e.width)?c:+e.width,height:void 0===e.height||isNaN(e.height)?r:+e.height}))};return f.mountIcon=v,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(e,o,n)=>{n.d(o,{m:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(e,o,n)=>{n.d(o,{I:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,o,n)=>{n.d(o,{r:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/check_box_off_20.js":(e,o,n)=>{n.d(o,{m:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20CheckBoxOff","check_box_off_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_off_20"><path fill="currentColor" fill-rule="evenodd" d="M4.046 2.534C4.788 2.138 5.517 2 7.128 2h5.744c1.61 0 2.34.138 3.082.534.65.348 1.164.862 1.512 1.512.396.742.534 1.471.534 3.082v5.744c0 1.61-.138 2.34-.534 3.082a3.644 3.644 0 0 1-1.512 1.512c-.742.396-1.472.534-3.082.534H7.128c-1.61 0-2.34-.138-3.082-.534a3.644 3.644 0 0 1-1.512-1.512C2.138 15.212 2 14.482 2 12.872V7.128c0-1.61.138-2.34.534-3.082a3.645 3.645 0 0 1 1.512-1.512m3.082.966c-1.531 0-1.962.136-2.374.357a2.145 2.145 0 0 0-.897.897c-.22.412-.357.843-.357 2.374v5.744c0 1.531.136 1.962.357 2.374.208.389.508.69.897.897.412.22.843.357 2.374.357h5.744c1.531 0 1.962-.136 2.374-.357.389-.208.69-.508.897-.897.22-.412.357-.843.357-2.374V7.128c0-1.531-.136-1.962-.357-2.374a2.145 2.145 0 0 0-.897-.897c-.412-.22-.843-.357-2.374-.357H7.128" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/20/check_box_on_20.js":(e,o,n)=>{n.d(o,{l:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20CheckBoxOn","check_box_on_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="check_box_on_20"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v3.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 18 6.16 18 8.4 18h3.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C18 14.96 18 13.84 18 11.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C14.96 2 13.84 2 11.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m12.2 3.803a.9.9 0 1 0-1.272-1.274l-4.673 4.665-2.055-2.052A.9.9 0 0 0 5.364 10.6l2.691 2.687a.9.9 0 0 0 1.272 0l5.309-5.3" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/cancel_24.js":(e,o,n)=>{n.d(o,{j:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Cancel","cancel_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="cancel_24"><path d="M7.536 6.264a.9.9 0 0 0-1.272 1.272L10.727 12l-4.463 4.464a.9.9 0 0 0 1.272 1.272L12 13.273l4.464 4.463a.9.9 0 1 0 1.272-1.272L13.273 12l4.463-4.464a.9.9 0 1 0-1.272-1.272L12 10.727z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_off_24.js":(e,o,n)=>{n.d(o,{p:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24CheckBoxOff","check_box_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_off_24"><path fill="currentColor" d="M16.872 2c1.783 0 2.43.186 3.082.534.651.349 1.163.86 1.512 1.512S22 5.345 22 7.128v9.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H7.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C2.186 19.302 2 18.655 2 16.872V7.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512C4.698 2.186 5.345 2 7.128 2zm.564 2H6.564c-.892 0-1.215.093-1.54.267-.327.174-.583.43-.757.756-.174.326-.267.65-.267 1.54v10.873c0 .892.093 1.215.267 1.54.174.327.43.583.756.757.326.174.65.267 1.54.267h10.873c.892 0 1.215-.093 1.54-.267.327-.174.583-.43.757-.756.174-.326.267-.65.267-1.54V6.563c0-.892-.093-1.215-.267-1.54a1.817 1.817 0 0 0-.756-.757c-.326-.174-.65-.267-1.54-.267z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_box_on_24.js":(e,o,n)=>{n.d(o,{K:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24CheckBoxOn","check_box_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_box_on_24"><path fill="currentColor" fill-rule="evenodd" d="M2.436 4.184C2 5.04 2 6.16 2 8.4v7.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 22 6.16 22 8.4 22h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 18.96 22 17.84 22 15.6V8.4c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 2 17.84 2 15.6 2H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748zm15.771 5.023a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0z" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_circle_off_24.js":(e,o,n)=>{n.d(o,{n:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24CheckCircleOff","check_circle_off_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_off_24"><path fill="currentColor" d="M12 0c6.629 0 12 5.373 12 12 0 6.629-5.373 12-12 12-6.629 0-12-5.373-12-12C0 5.371 5.373 0 12 0m0 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/check_circle_on_24.js":(e,o,n)=>{n.d(o,{i:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24CheckCircleOn","check_circle_on_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="check_circle_on_24"><path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12m6.207-14.793a1 1 0 0 0-1.414-1.414L10 14.586l-2.793-2.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l7.5-7.5" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,o,n)=>{n.d(o,{o:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/reorder_24.js":(e,o,n)=>{n.d(o,{N:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24Reorder","reorder_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path fill="currentColor" fill-rule="nonzero" d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1m0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1" /></g></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/reorder_ios_24.js":(e,o,n)=>{n.d(o,{U:()=>t});var t=(0,n("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ReorderIos","reorder_ios_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_ios_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity=".1" /><path fill="currentColor" fill-rule="nonzero" d="M2.75 7h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5m0 4h18.5a.75.75 0 1 1 0 1.5H2.75a.75.75 0 1 1 0-1.5" /></g></symbol>',24,24,!1,void 0)}}]);