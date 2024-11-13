"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[4795],{"./src/components/SimpleCell/SimpleCell.stories.tsx":(e,o,r)=>{r.r(o),r.d(o,{Playground:()=>c,__namedExportsOrder:()=>m,default:()=>l});var t=r("../../node_modules/react/index.js"),n=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Verified","verified_12","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="verified_12"><path fill="currentColor" d="M4.5 9.586 2.957 8.043a1 1 0 0 0-1.414 1.414l2.25 2.25a1 1 0 0 0 1.414 0l5.25-5.25a1 1 0 0 0-1.414-1.414z" /></symbol>',16,16,!1,void 0),s=r("../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js"),i=r("./src/storybook/VKUIDecorators.tsx"),a=r("./src/storybook/constants.ts"),d=r("./src/components/Avatar/Avatar.tsx"),p=r("./src/components/Group/Group.tsx"),u=r("./src/components/IconButton/IconButton.tsx");let l={title:"Blocks/SimpleCell",component:r("./src/components/SimpleCell/SimpleCell.tsx").q,parameters:function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){!function(e,o,r){o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r}(e,o,r[o])})}return e}({},a.tW,a.nB)};var c={args:{children:"Игорь Фёдоров",before:t.createElement(d.q,{size:48,src:"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1"}),badgeAfterTitle:t.createElement(n,null),after:t.createElement(u.h,{label:"Написать сообщение"},t.createElement(s.C,null)),subtitle:"Команда ВКонтакте"},decorators:[function(e,o){return t.createElement(p.Z,null,t.createElement(e,o.args))},i.vO,i.Z0]};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'Игорь Фёдоров',\n    before: <Avatar size={48} src=\"https://sun9-65.userapi.com/Jm47wQlR6z_R_rbAd_7LUf0NQg7QAv35MpvNhA/Ht8eYywub4o.jpg?ava=1\" />,\n    badgeAfterTitle: <Icon12Verified />,\n    after: <IconButton label=\"Написать сообщение\">\n        <Icon28MessageOutline />\n      </IconButton>,\n    subtitle: 'Команда ВКонтакте'\n  },\n  decorators: [(Component, context) => <Group>\n        <Component {...context.args} />\n      </Group>, withSinglePanel, withVKUILayout]\n}",...c.parameters?.docs?.source}}};let m=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,r)=>{r.d(o,{_:()=>t});function t(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,r)=>{r.d(o,{De:()=>b});var t,n=r("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=r("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=r("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),a=r("../../node_modules/react/index.js"),d=r("../../node_modules/@swc/helpers/esm/_class_call_check.js"),p=r("../../node_modules/@swc/helpers/esm/_create_class.js"),u=r("../../node_modules/@swc/helpers/esm/_define_property.js"),l=function(){function e(o){var r=o.content;(0,d._)(this,e),(0,u._)(this,"isMounted",!1),(0,u._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,r=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(r,!0):r}(r)}return(0,p._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var r=new e({content:""});return r.node=o,r}}]),e}(),c="http://www.w3.org/2000/svg",m=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d._)(this,e),(0,u._)(this,"symbols",new Map),(0,u._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,u._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,p._)(e,[{key:"push",value:function(e){var o=this.symbols,r=o.has(e.id);return o.set(e.id,e),!r}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var r=l.createFromExistingNode(e);o.add(r)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),_=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(_){var h="__SVG_SPRITE_NODE__";t=new m({attrs:{id:h}});var v=function(){var e=document.getElementById(h);e?t.attach(e):t.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else t=null;var f=_?a.useLayoutEffect:a.useEffect,g=function(e){var o=e.width,r=void 0===o?0:o,t=e.height,d=void 0===t?0:t,p=e.viewBox,u=e.id,l=e.className,c=e.fill,m=e.getRootRef,_=e.style,h=e.title,v=e.children,f=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),g=Math.max(r,d),b=(0,n._)({width:r,height:d},void 0===_?{}:_);return a.createElement("svg",(0,s._)((0,n._)({"aria-hidden":"true",display:"block"},f),{className:["vkuiIcon","vkuiIcon--".concat(g),"vkuiIcon--w-".concat(r),"vkuiIcon--h-".concat(d),"vkuiIcon--".concat(u),void 0===l?"":l].join(" ").trim(),viewBox:p,width:r,height:d,style:b,ref:m}),h&&a.createElement("title",null,h),a.createElement("use",{xlinkHref:"#".concat(u),style:{fill:"currentColor",color:c}},v))};function b(e,o,r,i,d,p,u,c){var m=function(){_||(!function(e){t&&t.add(e)}(new l({content:i})),_=!0)},_=!1,h=function(e){var o={};return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[r]||(console[t]("[@vkontakte/icons][".concat(e,"] ").concat(r)),o[r]=!0)}}(e),v=function(e){return f(m,[]),u&&h("Иконка устарела"+(c?". Замените на ".concat(c):"")),a.createElement(g,(0,s._)((0,n._)({},e),{viewBox:r,id:o,width:void 0===e.width||isNaN(e.width)?d:+e.width,height:void 0===e.height||isNaN(e.height)?p:+e.height}))};return v.mountIcon=m,v.displayName=e,v}},"../../node_modules/@vkontakte/icons/dist/es6/12/circle_12.js":(e,o,r)=>{r.d(o,{m:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12Circle","circle_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" id="circle_12"><path fill="currentColor" d="M10 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/12/online_mobile_12.js":(e,o,r)=>{r.d(o,{I:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon12OnlineMobile","online_mobile_12","0 0 8 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 12" id="online_mobile_12"><path fill="currentColor" d="M5.99 0C7.1 0 8 .9 8 2.01v7.98C8 11.1 7.1 12 5.99 12H2.01C.9 12 0 11.1 0 9.99V2.01C0 .9.9 0 2.01 0zm.008 3H2.003a.502.502 0 0 0-.503.502v4.996c0 .277.225.502.503.502h3.995a.502.502 0 0 0 .502-.502V3.503A.502.502 0 0 0 5.997 3Z" /></symbol>',8,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,o,r)=>{r.d(o,{r:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,o,r)=>{r.d(o,{o:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/message_outline_28.js":(e,o,r)=>{r.d(o,{C:()=>t});var t=(0,r("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28MessageOutline","message_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 0 1-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10Zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 0 1 .196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 0 1 1.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8" /></g></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css":(e,o,r)=>{r.d(o,{Z:()=>a});var t=r("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=r.n(t),s=r("../../node_modules/css-loader/dist/runtime/api.js"),i=r.n(s)()(n());i.push([e.id,'.Group--xobVt{color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__header--kXxNH:empty{display:none}.Group--mode-plain--KwMj9:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}}.Group--mode-card--fmlmp>.Group__header--kXxNH{margin-top:-4px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8>.Group__header--kXxNH{margin-top:-4px}}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),i.locals={Group:"Group--xobVt",Group__header:"Group__header--kXxNH","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"};let a=i},"./src/components/Group/Group.tsx":(e,o,r)=>{r.d(o,{Z:()=>I});var t=r("../../node_modules/react/index.js"),n=r("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),s=r("./src/hooks/useAdaptivity.ts"),i=r("./src/hooks/usePlatform.ts"),a=r("./src/lib/warnOnce.ts"),d=r("./src/components/AppRoot/AppRootContext.ts"),p=r("./src/components/ModalRoot/ModalRootContext.tsx"),u=r("./src/components/RootComponent/RootComponent.tsx"),l=r("./src/components/Separator/Separator.tsx"),c=r("./src/components/Spacing/Spacing.tsx"),m=r("./src/components/Typography/Footnote/Footnote.tsx"),_=r("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),h=r.n(_),v=r("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=r.n(v),g=r("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),b=r.n(g),G=r("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),y=r.n(G),x=r("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),w=r.n(x),k=r("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css"),j={attributes:{class:"vkui-style"}};j.setAttributes=y(),j.insert=b().bind(null,"head"),j.domAPI=f(),j.insertStyleElement=w(),h()(k.Z,j);let O=k.Z&&k.Z.locals?k.Z.locals:void 0;function X(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}var z=X({none:(0,n.AK)(O["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},"compact",O["Group--sizeX-compact"]),E={none:(0,n.AK)(O["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,n.AK)(O["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,n.AK)(O["Group--mode-card"],"vkuiInternalGroup--mode-card")},C={s:O["Group--padding-s"],m:O["Group--padding-m"]};(0,a.O)("Group");var I=function(e){var o=e.header,r=e.description,a=e.children,_=e.separator,h=void 0===_?"auto":_,v=e.mode,f=e.padding,g=e.tabIndex,b=function(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,["header","description","children","separator","mode","padding","tabIndex"]),G=t.useContext(p.E).isInsideModal,y=(0,i.F)(),x=(0,s.g)().sizeX,w=void 0===x?"none":x,k=function(e,o,r){var n=t.useContext(d.A).layout;return e||(r?"plain":n||("none"!==o?"regular"===o?"card":"plain":"none"))}(v,w,G),j="tabpanel"===b.role;return t.createElement(t.Fragment,null,t.createElement(u.U,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r})(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}),e}(function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(o){X(e,o,r[o])})}return e}({Component:"section"},b),{tabIndex:j&&void 0===g?0:g,baseClassName:(0,n.AK)("vkuiInternalGroup",O.Group,G&&O["Group--inside-modal"],"ios"===y&&O["Group--ios"],"regular"!==w&&z[w],k&&E[k],C[void 0===f?"m":f])}),(0,n.p7)(o)&&t.createElement("div",{className:O.Group__header},o),a,(0,n.p7)(r)&&t.createElement(m.w,{className:O.Group__description},r)),"hide"!==h&&t.createElement(t.Fragment,null,t.createElement(c.K,{className:(0,n.AK)(O.Group__separator,O["Group__separator--spacing"]),size:16}),t.createElement(l.Z,{className:(0,n.AK)(O.Group__separator,O["Group__separator--separator"],"show"===h&&O["Group__separator--force"])})))};try{I.displayName="Group",I.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:I.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}}}]);