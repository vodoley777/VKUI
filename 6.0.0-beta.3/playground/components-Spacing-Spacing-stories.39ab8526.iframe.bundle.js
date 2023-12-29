"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[6606],{"./src/components/Spacing/Spacing.stories.tsx":(e,o,t)=>{t.r(o),t.d(o,{Example:()=>c,Playground:()=>u,__namedExportsOrder:()=>m,default:()=>d});var r=t("../../node_modules/react/index.js"),n=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28BlockOutline","block_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="block_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path fill="currentColor" fill-rule="nonzero" d="M20.329 21.743 6.257 7.67A9.959 9.959 0 0 0 4 14c0 5.523 4.477 10 10 10a9.959 9.959 0 0 0 6.329-2.257m1.414-1.414A9.959 9.959 0 0 0 24 14c0-5.523-4.477-10-10-10a9.959 9.959 0 0 0-6.329 2.257L21.743 20.33M14 26C7.373 26 2 20.627 2 14S7.373 2 14 2s12 5.373 12 12-5.373 12-12 12" /></g></symbol>',28,28,!1,void 0),a=t("../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js"),i=t("./src/storybook/constants.ts"),s=t("./src/components/Group/Group.tsx"),p=t("./src/components/SimpleCell/SimpleCell.tsx");function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(o){!function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}(e,o,t[o])})}return e}let d={title:"Blocks/Spacing",component:t("./src/components/Spacing/Spacing.tsx").K,parameters:l({},i.tW,i.nB)};var u={decorators:[function(e){return r.createElement("div",null,"Before Space",r.createElement(e,null),"After Space")}]},c=function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}(l({},u),{decorators:[function(e){return r.createElement(s.Z,null,r.createElement(p.q,{before:r.createElement(n,null)},"Не беспокоить"),r.createElement(e,null),r.createElement(p.q,{before:r.createElement(a.R,null)},"Учётная запись"))}]});u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"{\n  decorators: [Component => <div>\n        Before Space\n        <Component />\n        After Space\n      </div>]\n}",...u.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{\n  ...Playground,\n  decorators: [Component => <Group>\n        <SimpleCell before={<Icon28BlockOutline />}>Не беспокоить</SimpleCell>\n        <Component />\n        <SimpleCell before={<Icon28UserOutline />}>Учётная запись</SimpleCell>\n      </Group>]\n}",...c.parameters?.docs?.source}}};let m=["Playground","Example"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(e,o,t)=>{t.d(o,{_:()=>r});function r(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(e,o,t)=>{t.d(o,{De:()=>y});var r,n=t("../../node_modules/@swc/helpers/esm/_object_spread.js"),a=t("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=t("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),s=t("../../node_modules/react/index.js"),p=t("../../node_modules/@swc/helpers/esm/_class_call_check.js"),l=t("../../node_modules/@swc/helpers/esm/_create_class.js"),d=t("../../node_modules/@swc/helpers/esm/_define_property.js"),u=function(){function e(o){var t=o.content;(0,p._)(this,e),(0,d._)(this,"isMounted",!1),(0,d._)(this,"node",void 0),this.node=function(e){var o=!!document.importNode,t=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return o?document.importNode(t,!0):t}(t)}return(0,l._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(o){var t=new e({content:""});return t.node=o,t}}]),e}(),c="http://www.w3.org/2000/svg",m=function(){function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,p._)(this,e),(0,d._)(this,"symbols",new Map),(0,d._)(this,"config",{attrs:{xmlns:c,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,d._)(this,"node",null),Object.assign(this.config.attrs,o.attrs)}return(0,l._)(e,[{key:"push",value:function(e){var o=this.symbols,t=o.has(e.id);return o.set(e.id,e),!t}},{key:"add",value:function(e){var o=this.push(e);return this.node&&o&&e.mount(this.node),o}},{key:"attach",value:function(e){var o=this;this.node||(this.node=e,this.symbols.forEach(function(o){o.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var t=u.createFromExistingNode(e);o.add(t)}))}},{key:"mount",value:function(e){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),o&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(c,"svg");return Object.entries(this.config.attrs).forEach(function(o){return e.setAttribute(o[0],o[1])}),this.symbols.forEach(function(o){return e.appendChild(o.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),_=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(_){var b="__SVG_SPRITE_NODE__";r=new m({attrs:{id:b}});var f=function(){var e=document.getElementById(b);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",f)};document.querySelector("body")?f():document.addEventListener("DOMContentLoaded",f)}else r=null;var v=_?s.useLayoutEffect:s.useEffect,h=function(e){var o=e.width,t=void 0===o?0:o,r=e.height,p=void 0===r?0:r,l=e.viewBox,d=e.id,u=e.className,c=e.fill,m=e.getRootRef,_=e.style,b=e.title,f=e.children,v=(0,i._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),h=Math.max(t,p),y=(0,n._)({width:t,height:p},void 0===_?{}:_);return s.createElement("svg",(0,a._)((0,n._)({"aria-hidden":"true",display:"block"},v),{className:["vkuiIcon","vkuiIcon--".concat(h),"vkuiIcon--w-".concat(t),"vkuiIcon--h-".concat(p),"vkuiIcon--".concat(d),void 0===u?"":u].join(" ").trim(),viewBox:l,width:t,height:p,style:y,ref:m}),b&&s.createElement("title",null,b),s.createElement("use",{xlinkHref:"#".concat(d),style:{fill:"currentColor",color:c}},f))};function y(e,o,t,i,p,l,d,c){var m=function(){_||(!function(e){r&&r.add(e)}(new u({content:i})),_=!0)},_=!1,b=function(e){var o={};return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";o[t]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(t)),o[t]=!0)}}(e),f=function(e){return v(m,[]),d&&b("Иконка устарела"+(c?". Замените на ".concat(c):"")),s.createElement(h,(0,a._)((0,n._)({},e),{viewBox:t,id:o,width:void 0===e.width||isNaN(e.width)?p:+e.width,height:void 0===e.height||isNaN(e.height)?l:+e.height}))};return f.mountIcon=m,f.displayName=e,f}},"../../node_modules/@vkontakte/icons/dist/es6/16/chevron_16.js":(e,o,t)=>{t.d(o,{r:()=>r});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Chevron","chevron_16","0 0 12 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16" id="chevron_16"><path fill="currentColor" d="M7.227 8 3.864 4.636a.9.9 0 0 1 1.272-1.272l4 4a.9.9 0 0 1 0 1.272l-4 4a.9.9 0 0 1-1.272-1.272L7.227 8" /></symbol>',12,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/24/chevron_compact_right_24.js":(e,o,t)=>{t.d(o,{o:()=>r});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon24ChevronCompactRight","chevron_compact_right_24","0 0 16 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 24" id="chevron_compact_right_24"><path fill="currentColor" d="M4.706 7.706a1 1 0 0 1 0-1.412l.088-.088a.997.997 0 0 1 1.414.002l5.084 5.084a.998.998 0 0 1 0 1.416l-5.084 5.084a1.002 1.002 0 0 1-1.414.002l-.088-.088a.995.995 0 0 1 0-1.412L9 12z" /></symbol>',16,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist/es6/28/user_outline_28.js":(e,o,t)=>{t.d(o,{R:()=>r});var r=(0,t("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon28UserOutline","user_outline_28","0 0 28 28",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 28 28" id="user_outline_28"><path fill-rule="evenodd" d="M14 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3.5 5.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m-6 13.475c0-4.109 4.415-6.475 9.5-6.475s9.5 2.366 9.5 6.475c0 2.135-.802 3.025-2.522 3.025H7.022c-1.72 0-2.522-.89-2.522-3.025m2 0c0-1.224.618-2.266 1.916-3.09C9.758 18.032 11.735 17.5 14 17.5c2.265 0 4.242.532 5.584 1.385 1.297.824 1.916 1.866 1.916 3.09 0 .417-.04.69-.085.859a.96.96 0 0 1-.042.127c-.06.016-.182.039-.395.039H7.022c-.213 0-.335-.023-.395-.039a.966.966 0 0 1-.042-.127c-.045-.168-.085-.442-.085-.86Z" clip-rule="evenodd" /></symbol>',28,28,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css":(e,o,t)=>{t.d(o,{Z:()=>s});var r=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(r),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(n());i.push([e.id,'.Group--xobVt{color:var(--vkui--color_text_primary);padding-bottom:8px;padding-top:8px}.Group__header--kXxNH:empty{display:none}.Group--mode-plain--KwMj9:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:not(:first-of-type)>.Group__header--kXxNH{margin-top:-8px}}.Group--mode-card--fmlmp>.Group__header--kXxNH{margin-top:-4px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8>.Group__header--kXxNH{margin-top:-4px}}.Group__separator--separator--ZKY_V,.Group__separator--spacing--FNhA3{display:none}.Group--mode-plain--KwMj9+*+.Group__separator--separator--ZKY_V{display:block}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+*+.Group__separator--separator--ZKY_V{display:block}}.Group--mode-card--fmlmp+.Group__separator--spacing--FNhA3{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--spacing--FNhA3{display:block}}.Group--xobVt:last-of-type~.Group__separator--op6Xj{display:none}.Group--mode-card--fmlmp:last-of-type+.Group__separator--spacing--FNhA3,.Group--xobVt:last-of-type~.Group__separator--force--xEXPB{display:block}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:last-of-type+.Group__separator--spacing--FNhA3{display:block}}.Group--mode-card--fmlmp.Group--padding-s--T4za1{padding:4px}.Group--mode-card--fmlmp.Group--padding-m--eq6yP{padding:8px}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-s--T4za1,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-s--T4za1{padding:4px}.Group--sizeX-none--_sXRj.Group--inside-modal--Xhx9h.Group--padding-m--eq6yP,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8.Group--padding-m--eq6yP{padding:8px}}.Group--sizeX-compact--I3zDP,.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp{padding-left:0;padding-right:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj,.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp{padding-left:0;padding-right:0}}.Group--mode-card--fmlmp{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8{background:var(--vkui--color_background_content);border-radius:var(--vkui--size_border_radius_paper--regular);position:relative}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:first-of-type{border-bottom-left-radius:var(--vkui--size_border_radius_paper--regular);border-bottom-right-radius:var(--vkui--size_border_radius_paper--regular);border-top-left-radius:0;border-top-right-radius:0}}.Group--mode-card--fmlmp:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_separator_primary);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media (min-width:768px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8:before{border-radius:inherit;box-shadow:inset 0 0 0 var(--vkui--size_border--regular) var(--vkui--color_field_border_alpha);content:"";height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}}.Group--sizeX-compact--I3zDP.Group--mode-card--fmlmp:before{box-shadow:none}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-card--fmlmp:before{box-shadow:none}}.Group--mode-plain--KwMj9+.Group__separator--op6Xj,.Group--mode-plain--KwMj9+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}@media (max-width:767.9px){.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj,.Group--sizeX-none--_sXRj.Group--mode-none--OYdt8+.Group__separator--op6Xj+.Group__separator--op6Xj{padding-bottom:8px;padding-top:8px}}.Group__description--Xolzh{color:var(--vkui--color_text_secondary);display:block;padding:4px 16px 16px}.Group--xobVt .Group--xobVt,.Group--xobVt .Group--xobVt+.Group__separator--op6Xj{padding-left:0;padding-right:0}.Group--xobVt .Group--xobVt:first-of-type{padding-top:0}.Group--xobVt .Group--xobVt:last-of-type{padding-bottom:0}.Group--ios--ZeO5F .Group__description--Xolzh{padding:4px 12px 16px}.vkuiInternalPanelHeader--vkcom+* .Group--xobVt:first-of-type,.vkuiInternalPanelHeader--vkcom~.Group--xobVt:first-of-type{border-top-left-radius:0;border-top-right-radius:0;position:relative;top:-1px}',""]),i.locals={Group:"Group--xobVt",Group__header:"Group__header--kXxNH","Group--mode-plain":"Group--mode-plain--KwMj9","Group--sizeX-none":"Group--sizeX-none--_sXRj","Group--mode-none":"Group--mode-none--OYdt8","Group--mode-card":"Group--mode-card--fmlmp","Group__separator--separator":"Group__separator--separator--ZKY_V","Group__separator--spacing":"Group__separator--spacing--FNhA3",Group__separator:"Group__separator--op6Xj","Group__separator--force":"Group__separator--force--xEXPB","Group--padding-s":"Group--padding-s--T4za1","Group--padding-m":"Group--padding-m--eq6yP","Group--inside-modal":"Group--inside-modal--Xhx9h","Group--sizeX-compact":"Group--sizeX-compact--I3zDP",Group__description:"Group__description--Xolzh","Group--ios":"Group--ios--ZeO5F"};let s=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,o,t)=>{t.d(o,{Z:()=>s});var r=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=t.n(r),a=t("../../node_modules/css-loader/dist/runtime/api.js"),i=t.n(a)()(n());i.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular);isolation:isolate;position:relative}.Tappable--SKpjX>*{position:relative;z-index:var(--vkui_internal--z_index_tappable_element)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),i.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let s=i},"./src/components/Group/Group.tsx":(e,o,t)=>{t.d(o,{Z:()=>C});var r=t("../../node_modules/react/index.js"),n=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/hooks/useAdaptivity.ts"),i=t("./src/hooks/usePlatform.ts"),s=t("./src/lib/warnOnce.ts"),p=t("./src/components/AppRoot/AppRootContext.ts"),l=t("./src/components/ModalRoot/ModalRootContext.tsx"),d=t("./src/components/RootComponent/RootComponent.tsx"),u=t("./src/components/Separator/Separator.tsx"),c=t("./src/components/Spacing/Spacing.tsx"),m=t("./src/components/Typography/Footnote/Footnote.tsx"),_=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),b=t.n(_),f=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),v=t.n(f),h=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),y=t.n(h),g=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),G=t.n(g),O=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),T=t.n(O),k=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Group/Group.module.css"),x={attributes:{class:"vkui-style"}};x.setAttributes=G(),x.insert=y().bind(null,"head"),x.domAPI=v(),x.insertStyleElement=T(),b()(k.Z,x);let S=k.Z&&k.Z.locals?k.Z.locals:void 0;function j(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var w=j({none:(0,n.AK)(S["Group--sizeX-none"],"vkuiInternalGroup--sizeX-none")},"compact",S["Group--sizeX-compact"]),R={none:(0,n.AK)(S["Group--mode-none"],"vkuiInternalGroup--mode-none"),plain:(0,n.AK)(S["Group--mode-plain"],"vkuiInternalGroup--mode-plain"),card:(0,n.AK)(S["Group--mode-card"],"vkuiInternalGroup--mode-card")},E={s:S["Group--padding-s"],m:S["Group--padding-m"]};(0,s.O)("Group");var C=function(e){var o=e.header,t=e.description,s=e.children,_=e.separator,b=void 0===_?"auto":_,f=e.mode,v=e.padding,h=e.tabIndex,y=function(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}(e,["header","description","children","separator","mode","padding","tabIndex"]),g=r.useContext(l.E).isInsideModal,G=(0,i.F)(),O=(0,a.g)().sizeX,T=void 0===O?"none":O,k=function(e,o,t){var n=r.useContext(p.A).layout;return e||(t?"plain":n||("none"!==o?"regular"===o?"card":"plain":"none"))}(f,T,g),x="tabpanel"===y.role;return r.createElement(r.Fragment,null,r.createElement(d.U,function(e,o){return o=null!=o?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):(function(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t})(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}(function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(o){j(e,o,t[o])})}return e}({Component:"section"},y),{tabIndex:x&&void 0===h?0:h,baseClassName:(0,n.AK)("vkuiInternalGroup",S.Group,g&&S["Group--inside-modal"],"ios"===G&&S["Group--ios"],"regular"!==T&&w[T],k&&R[k],E[void 0===v?"m":v])}),(0,n.p7)(o)&&r.createElement("div",{className:S.Group__header},o),s,(0,n.p7)(t)&&r.createElement(m.w,{className:S.Group__description},t)),"hide"!==b&&r.createElement(r.Fragment,null,r.createElement(c.K,{className:(0,n.AK)(S.Group__separator,S["Group__separator--spacing"]),size:16}),r.createElement(u.Z,{className:(0,n.AK)(S.Group__separator,S["Group__separator--separator"],"show"===b&&S["Group__separator--force"])})))};try{C.displayName="Group",C.__docgenInfo={description:"",displayName:"Group",props:{header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},separator:{defaultValue:{value:"auto"},description:"`show` - разделитель всегда показывается,\n`hide` - разделитель всегда спрятан,\n`auto` - разделитель рисуется автоматически между соседними группами.",name:"separator",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"show"'},{value:'"hide"'}]}},mode:{defaultValue:null,description:"Режим отображения. Если установлен `card`, выглядит как карточка c\nобводкой и внешними отступами. Если `plain` — без отступов и обводки.\nПо умолчанию режим отображения зависит от `sizeX` (`mode=card` при `sizeX=REGULAR` и `mode=plain` при `sizeX=COMPACT`)\nВ модальных окнах по умолчанию `plain`.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"plain"'},{value:'"card"'}]}},padding:{defaultValue:{value:"m"},description:"Отвечает за отступы вокруг контента в режиме `card`.",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Group/Group.tsx#Group"]={docgenInfo:C.__docgenInfo,name:"Group",path:"src/components/Group/Group.tsx#Group"})}catch(e){}},"./src/components/Tappable/Tappable.tsx":(e,o,t)=>{t.d(o,{K:()=>I});var r=t("../../node_modules/react/index.js"),n=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),a=t("./src/hooks/useAdaptivity.ts"),i=t("./src/lib/adaptivity/constants.ts"),s=t("./src/lib/mergeCalls.ts"),p=t("./src/components/Clickable/Clickable.tsx"),l=t("./src/hooks/usePlatform.ts"),d=t("./src/hooks/useTimeout.ts"),u=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(u),m=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),_=t.n(m),b=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),f=t.n(b),v=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=t.n(v),y=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),g=t.n(y),G=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),O={attributes:{class:"vkui-style"}};O.setAttributes=h(),O.insert=f().bind(null,"head"),O.domAPI=_(),O.insertStyleElement=g(),c()(G.Z,O);let T=G.Z&&G.Z.locals?G.Z.locals:void 0;function k(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,r=Array(o);t<o;t++)r[t]=e[t];return r}function x(e,o){if(e){if("string"==typeof e)return k(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,o)}}var S=function(e,o){return"android"===(0,l.F)()&&!o&&"background"===e},j=function(e,o){var t=function(e,o,t){var r=Date.now();s((function(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||x(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i.filter(function(e){return e.id+225>r})).concat([{x:e,y:o,id:r,pointerId:t}])),l.set(),p.delete(t)},a=function(e,o){return function(e){if(Array.isArray(e))return e}(e)||function(e,o){var t,r,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!o||a.length!==o);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return a}}(e,o)||x(e,o)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(r.useState([]),2),i=a[0],s=a[1],p=r.useMemo(function(){return new Map},[]),l=(0,d.K)(function(){return s([])},225),u=(!n.RX||!1===o)&&e;return{clicks:i,onPointerDown:u?function(e){var o=function(e){var o=null==e?void 0:e.getBoundingClientRect();return{top:null==o?void 0:o.top,left:null==o?void 0:o.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),r=o.top,n=o.left,a=e.clientX-(null!=n?n:0),i=e.clientY-(null!=r?r:0);p.set(e.pointerId,setTimeout(function(){return t(a,i,e.pointerId)},70))}:n.ZT,onPointerCancel:u?function(e){clearTimeout(p.get(e.pointerId)),p.delete(e.pointerId)}:n.ZT}},w=function(e){var o=e.needRipple,t=e.clicks;return r.createElement("span",{"aria-hidden":!0,className:(0,n.AK)(T.Tappable__stateLayer,(void 0===o||o)&&T.Tappable__ripple)},t.map(function(e){return r.createElement("span",{key:e.id,className:T.Tappable__wave,style:{top:e.y,left:e.x}})}))};try{S.displayName="useMaybeNeedRipple",S.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:S.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{j.displayName="useRipple",j.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:j.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{w.displayName="Ripple",w.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:w.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var R="background",E={background:T["Tappable--hovered-background"],opacity:T["Tappable--hovered-opacity"],none:""};function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,o=E[e];return void 0!==o?o:e}var A={background:T["Tappable--activated-background"],opacity:T["Tappable--activated-opacity"],none:""};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,o=A[e];return void 0!==o?o:e}try{C.displayName="hoverClass",C.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:C.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{X.displayName="activeClass",X.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:X.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{R.displayName="DEFAULT_STATE_MODE",R.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:R.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function P(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(o.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var N={none:T["Tappable--sizeX-none"],compact:T["Tappable--sizeX-compact"]},I=function(e){var o=e.baseClassName,t=e.borderRadiusMode,l=e.children,d=e.hoverMode,u=void 0===d?R:d,c=e.activeMode,m=void 0===c?R:c,_=e.onPointerDown,b=e.onPointerCancel,f=P(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),v=(0,p.T)(f),h=(0,a.g)(),y=h.sizeX,g=void 0===y?"none":y,G=h.hasPointer,O=S(m,G),k=j(O,G),x=k.clicks,E=P(k,["clicks"]),A=(0,s.O)(E,{onPointerDown:_,onPointerCancel:b});return r.createElement(p.P,function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(o){!function(e,o,t){o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t}(e,o,t[o])})}return e}({baseClassName:(0,n.AK)(o,T.Tappable,g!==i.n$.REGULAR&&N[g],"inherit"===(void 0===t?"auto":t)&&T["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return T["Tappable--hasPointer-none"];case!1:return T["Tappable--hasPointer-false"]}}(G)),hoverClassName:C(u),activeClassName:X(m)},A,f),l,v&&("background"===u||"background"===m)&&r.createElement(w,{needRipple:O,clicks:x}))};try{I.displayName="Tappable",I.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:I.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}}}]);