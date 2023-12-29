"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1325,3778],{"./src/components/Tooltip/Tooltip.stories.tsx":(e,t,n)=>{n.r(t),n.d(t,{Playground:()=>O,__namedExportsOrder:()=>R,default:()=>T});var a=n("../../node_modules/react/index.js"),o=n("./src/storybook/constants.ts"),r=n("./src/components/Button/Button.tsx"),i=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),l=n("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/dist/floating-ui.utils.dom.esm.js"),s=n("./src/hooks/useExternRef.ts"),u=n("./src/hooks/usePatchChildren.ts"),d=n("./src/lib/accessibility.ts"),p=n("./src/lib/cssAnimation/fades.ts"),c=n("./src/lib/floating/useFloatingMiddlewaresBootstrap/index.ts"),m=n("./src/lib/floating/useFloatingWithInteractions/useFloatingWithInteractions.ts"),f=n("./src/lib/floating/functions.ts"),b=n("./src/lib/useIsomorphicLayoutEffect.ts"),y=n("./src/components/AppRoot/AppRootPortal.tsx"),v=n("./src/components/TooltipBase/TooltipBase.tsx"),h=n("./src/components/Typography/Subhead/Subhead.tsx");function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,a,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(e){var t=e.placement,n=e.arrowPadding,o=e.arrowHeight,r=e.offsetByMainAxis,g=e.offsetByCrossAxis,_=e.hideWhenReferenceHidden,T=e.defaultShown,O=e.shown,R=e.onShownChange,j=e.hoverDelay,w=e.enableInteractive,A=e.disableArrow,C=void 0!==A&&A,E=e.disableCloseAfterClick,k=e.children,x=e.usePortal,P=e.id,I=e.getRootRef,V=e.text,N=e.header,M=e.appearance,z=e.style,B=e.className,q=e.zIndex,L=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["placement","arrowPadding","arrowHeight","offsetByMainAxis","offsetByCrossAxis","hideWhenReferenceHidden","defaultShown","shown","onShownChange","hoverDelay","enableInteractive","disableArrow","disableCloseAfterClick","children","usePortal","id","getRootRef","text","header","appearance","style","className","zIndex"]),H=a.useId(),D=P||H,K=S(a.useState(null),2),Y=K[0],Z=K[1],X=(0,c.w)({placement:void 0===t?"bottom":t,offsetByMainAxis:void 0===r?8:r,offsetByCrossAxis:void 0===g?0:g,hideWhenReferenceHidden:_,arrow:!C,arrowRef:Y,arrowPadding:void 0===n?10:n,arrowHeight:void 0===o?8:o}),W=X.middlewares,U=X.strictPlacement,F=(0,m.D)({defaultShown:T,shown:O,onShownChange:R,placement:U,trigger:["hover","focus"],hoverDelay:void 0===j?150:j,closeAfterClick:!(void 0!==E&&E),disableInteractive:!(void 0!==w&&w),middlewares:W}),G=F.shown,J=F.willBeHide,$=F.placement,Q=F.refs,ee=F.referenceProps,et=F.floatingProps,en=F.middlewareData,ea=F.onEscapeKeyDown,eo=(0,s.Q)(I,Q.setFloating),er=null;G&&(ee["aria-describedby"]=D,et.style.zIndex=void 0===q?"var(--vkui--z_index_popout)":q,z&&Object.assign(et.style,z),er=a.createElement(y.P,{usePortal:x},a.createElement(v.P,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({},L,et),{id:D,getRootRef:eo,appearance:void 0===M?"neutral":M,arrowProps:C?void 0:{placement:$,coords:(0,f.S1)(en),getRootRef:Z},text:a.createElement(a.Fragment,null,(0,i.p7)(N)&&a.createElement(h.v,{weight:"2"},N),(0,i.p7)(V)&&a.createElement(h.v,null,V)),className:(0,i.AK)(J?p.x.out:p.x.in,B)}))));var ei=S((0,u.q)(k,ee,Q.setReference),2),el=ei[0],es=ei[1];return(0,b.L)(function(){if(ea&&G){var e=function(e){(0,d.Vk)(e)===d.R8.ESCAPE&&ea()},t=(0,l.Jj)(el.current).document;return t.addEventListener("keydown",e,{passive:!0,capture:!0}),function(){t.removeEventListener("keydown",e,{capture:!0})}}},[G,el,ea]),a.createElement(a.Fragment,null,es,er)};try{_.displayName="Tooltip",_.__docgenInfo={description:"",displayName:"Tooltip",props:{shown:{defaultValue:null,description:"Передача `boolean` позволяет контролировать состояния показа и скрытия вручную. Используйте\nсовместно с `onShawnChange`.\n\n> Если нужно разово инициировать показ тултипа при первом рендере, то используйте `defaultShown`.",name:"shown",required:!1,type:{name:"boolean"}},enableInteractive:{defaultValue:{value:"false"},description:"Добавляет возможность наводить на тултип.",name:"enableInteractive",required:!1,type:{name:"boolean"}},disableArrow:{defaultValue:{value:"false"},description:"Скрывает стрелку, указывающую на якорный элемент.",name:"disableArrow",required:!1,type:{name:"boolean"}},disableCloseAfterClick:{defaultValue:{value:"false"},description:"Отключает закрытие по клику.",name:"disableCloseAfterClick",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Целевой элемент. Всплывающее окно появится возле него.\n\n> ⚠️ Если это пользовательский компонент, то он должен:\n> 1. предоставлять параметры либо `getRootRef`, либо `ref` (cм. `React.forwardRef()`) для получения ссылки на DOM-узел;\n> 2. принимать DOM атрибуты и события.",name:"children",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},arrowHeight:{defaultValue:{value:"8"},description:"Высота стрелки. Складывается с `mainAxis`, чтобы стрелка не залезала на якорный элемент.",name:"arrowHeight",required:!1,type:{name:"number"}},arrowPadding:{defaultValue:{value:"10"},description:"Безопасная зона вокруг стрелки, чтобы та не выходила за края контента.",name:"arrowPadding",required:!1,type:{name:"number"}},hoverDelay:{defaultValue:{value:"150"},description:'Количество миллисекунд, после которых произойдёт показ/скрытие всплывающего элемента\nпри наведении.\n\n> Чтобы задать разное время на показ и скрытие, передайте массив типа `[<показ>, <скрытие>]`.\n\n> Используется только для `trigger="hover"`.',name:"hoverDelay",required:!1,type:{name:"number | [number, number]"}},placement:{defaultValue:null,description:"По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offsetByMainAxis:{defaultValue:{value:"8"},description:"Отступ по главной оси.",name:"offsetByMainAxis",required:!1,type:{name:"number"}},offsetByCrossAxis:{defaultValue:{value:"0"},description:"Отступ по вспомогательной оси.",name:"offsetByCrossAxis",required:!1,type:{name:"number"}},defaultShown:{defaultValue:null,description:"Начальное состояние всплывающего элемента.",name:"defaultShown",required:!1,type:{name:"boolean"}},onShownChange:{defaultValue:null,description:"Вызывается при каждом изменении видимости всплывающего элемента.",name:"onShownChange",required:!1,type:{name:"OnShownChange"}},hideWhenReferenceHidden:{defaultValue:null,description:"Принудительно скрывает компонент если целевой элемент вышел за область видимости.",name:"hideWhenReferenceHidden",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"var(--vkui--z_index_popout)"},description:"Перебивает zIndex заданный по умолчанию.",name:"zIndex",required:!1,type:{name:"string | number"}},usePortal:{defaultValue:null,description:"По умолчанию используется document.body.",name:"usePortal",required:!1,type:{name:"boolean | HTMLElement | RefObject<HTMLElement>"}},className:{defaultValue:null,description:"Пользовательские css-классы, будут добавлены на root-элемент",name:"className",required:!1,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},text:{defaultValue:null,description:"Текст тултипа.",name:"text",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Заголовок тултипа.",name:"header",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:{value:"neutral"},description:"Стиль отображения подсказки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"neutral"'},{value:'"white"'},{value:'"black"'},{value:'"inversion"'}]}},ArrowIcon:{defaultValue:null,description:'Пользовательская SVG иконка.\n\nТребования:\n\n1. Иконка по умолчанию должна быть направлена вверх (a.k.a `IconUp`).\n2. Чтобы избежать проблемы с пространством между стрелкой и контентом на некоторых экранах,\n   растяните кривую по высоте на `1px` и увеличьте на этот размер `height` и `viewBox` SVG.\n   (см. https://github.com/VKCOM/VKUI/pull/4496).\n3. Убедитесь, что компонент принимает все валидные для SVG параметры.\n4. Убедитесь, что SVG и её элементы наследует цвет через `fill="currentColor"`.\n5. Если стрелка наезжает на якорный элемент, то увеличьте смещение между целевым и всплывающим элементами.',name:"ArrowIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>>"}},maxWidth:{defaultValue:null,description:"Перебивает максимальную ширину заданную по умолчанию.\n\nПередача `null` полностью сбрасывает установку `max-width` на элемент.",name:"maxWidth",required:!1,type:{name:"string | number | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:_.__docgenInfo,name:"Tooltip",path:"src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(e){}let T={title:"Poppers/Tooltip",component:_,parameters:o.nB};var O={render:function(e){return a.createElement(_,e,a.createElement(r.z,{style:{margin:20}},"Наведи"))},args:{text:"Привет"}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"{\n  render: args => <Tooltip {...args}>\n      <Button style={{\n      margin: 20\n    }}>Наведи</Button>\n    </Tooltip>,\n  args: {\n    text: 'Привет'\n  }\n}",...O.parameters?.docs?.source}}};let R=["Playground"]},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var a=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(a),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(o());i.push([e.id,'.Tappable--SKpjX{border-radius:var(--vkui--size_border_radius--regular);isolation:isolate;position:relative}.Tappable--SKpjX>*{position:relative;z-index:var(--vkui_internal--z_index_tappable_element)}.Tappable--sizeX-compact--cb0EA{border-radius:0}@media (max-width:767.9px){.Tappable--sizeX-none--OUJ8R{border-radius:0}}.Tappable--SKpjX.Tappable--borderRadiusInherit--TjTZm{border-radius:inherit}.Tappable__stateLayer--vrNPb{border-radius:inherit;bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0;transition:background-color .15s ease-out;will-change:transform;z-index:var(--vkui_internal--z_index_tappable_state)}.Tappable--hasPointer-false--U2ndI .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}@media (pointer:coarse),(pointer:none){.Tappable--hasPointer-none--_tMdP .Tappable__ripple--H2dci{transition:background-color .15s ease-out .15s}}.Tappable--hovered-background--BLT_y>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--hover)}.Tappable--activated-background--zlJ2e>.Tappable__stateLayer--vrNPb{background-color:var(--vkui--color_transparent--active)}.Tappable--activated-opacity--HlTNV,.Tappable--hovered-opacity--gg3b1{transition:opacity .15s ease-out}.Tappable--hovered-opacity--gg3b1{opacity:.8}.Tappable--activated-opacity--HlTNV{opacity:.7}.Tappable__wave--iRi3O{animation:animation-wave--Spk35 .3s var(--vkui--animation_easing_platform);background:var(--vkui--color_transparent--active);border-radius:50%;content:"";height:24px;left:0;margin:-12px -12px 0 0;opacity:0;position:absolute;top:0;width:24px}@keyframes animation-wave--Spk35{0%{opacity:1;transform:scale(1)}30%{opacity:1}to{opacity:0;transform:scale(8)}}',""]),i.locals={Tappable:"Tappable--SKpjX","Tappable--sizeX-compact":"Tappable--sizeX-compact--cb0EA","Tappable--sizeX-none":"Tappable--sizeX-none--OUJ8R","Tappable--borderRadiusInherit":"Tappable--borderRadiusInherit--TjTZm",Tappable__stateLayer:"Tappable__stateLayer--vrNPb","Tappable--hasPointer-false":"Tappable--hasPointer-false--U2ndI",Tappable__ripple:"Tappable__ripple--H2dci","Tappable--hasPointer-none":"Tappable--hasPointer-none--_tMdP","Tappable--hovered-background":"Tappable--hovered-background--BLT_y","Tappable--activated-background":"Tappable--activated-background--zlJ2e","Tappable--activated-opacity":"Tappable--activated-opacity--HlTNV","Tappable--hovered-opacity":"Tappable--hovered-opacity--gg3b1",Tappable__wave:"Tappable__wave--iRi3O","animation-wave":"animation-wave--Spk35"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var a=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(a),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(o());i.push([e.id,".Subhead--aLKgN{font-family:var(--vkui--font_subhead--font_family--regular);font-size:var(--vkui--font_subhead--font_size--regular);font-weight:var(--vkui--font_subhead--font_weight--regular);line-height:var(--vkui--font_subhead--line_height--regular)}.Subhead--sizeY-compact--bY5aX{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}@media (max-height:414.9px),(pointer:fine) and (min-width:768px){.Subhead--sizeY-none--zWIAB{font-size:var(--vkui--font_subhead--font_size--compact);line-height:var(--vkui--font_subhead--line_height--compact)}}",""]),i.locals={Subhead:"Subhead--aLKgN","Subhead--sizeY-compact":"Subhead--sizeY-compact--bY5aX","Subhead--sizeY-none":"Subhead--sizeY-none--zWIAB"};let l=i},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css":(e,t,n)=>{n.d(t,{Z:()=>l});var a=n("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),o=n.n(a),r=n("../../node_modules/css-loader/dist/runtime/api.js"),i=n.n(r)()(o());i.push([e.id,".VisuallyHidden--bAIOu{height:1px!important;margin:-1px!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important;clip:rect(0,0,0,0)!important;border:0!important;-webkit-clip-path:inset(50%);clip-path:inset(50%);opacity:0;overflow:hidden!important}",""]),i.locals={VisuallyHidden:"VisuallyHidden--bAIOu"};let l=i},"./src/components/Tappable/Tappable.tsx":(e,t,n)=>{n.d(t,{K:()=>M});var a=n("../../node_modules/react/index.js"),o=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),i=n("./src/lib/adaptivity/constants.ts"),l=n("./src/lib/mergeCalls.ts"),s=n("./src/components/Clickable/Clickable.tsx"),u=n("./src/hooks/usePlatform.ts"),d=n("./src/hooks/useTimeout.ts"),p=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=n.n(p),m=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),f=n.n(m),b=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),y=n.n(b),v=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),h=n.n(v),g=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),S=n.n(g),_=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Tappable/Tappable.module.css"),T={attributes:{class:"vkui-style"}};T.setAttributes=h(),T.insert=y().bind(null,"head"),T.domAPI=f(),T.insertStyleElement=S(),c()(_.Z,T);let O=_.Z&&_.Z.locals?_.Z.locals:void 0;function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function j(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}}var w=function(e,t){return"android"===(0,u.F)()&&!t&&"background"===e},A=function(e,t){var n=function(e,t,n){var a=Date.now();l((function(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||j(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()})(i.filter(function(e){return e.id+225>a})).concat([{x:e,y:t,id:a,pointerId:n}])),u.set(),s.delete(n)},r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,a,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(r.push(n.value),!t||r.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw a}}return r}}(e,t)||j(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(a.useState([]),2),i=r[0],l=r[1],s=a.useMemo(function(){return new Map},[]),u=(0,d.K)(function(){return l([])},225),p=(!o.RX||!1===t)&&e;return{clicks:i,onPointerDown:p?function(e){var t=function(e){var t=null==e?void 0:e.getBoundingClientRect();return{top:null==t?void 0:t.top,left:null==t?void 0:t.left,width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight}}(e.currentTarget),a=t.top,o=t.left,r=e.clientX-(null!=o?o:0),i=e.clientY-(null!=a?a:0);s.set(e.pointerId,setTimeout(function(){return n(r,i,e.pointerId)},70))}:o.ZT,onPointerCancel:p?function(e){clearTimeout(s.get(e.pointerId)),s.delete(e.pointerId)}:o.ZT}},C=function(e){var t=e.needRipple,n=e.clicks;return a.createElement("span",{"aria-hidden":!0,className:(0,o.AK)(O.Tappable__stateLayer,(void 0===t||t)&&O.Tappable__ripple)},n.map(function(e){return a.createElement("span",{key:e.id,className:O.Tappable__wave,style:{top:e.y,left:e.x}})}))};try{w.displayName="useMaybeNeedRipple",w.__docgenInfo={description:"Возможно нужен Ripple эффект. Данный хук нужен для отказа\nот двойного ререндера.",displayName:"useMaybeNeedRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"]={docgenInfo:w.__docgenInfo,name:"useMaybeNeedRipple",path:"src/components/Tappable/Ripple.tsx#useMaybeNeedRipple"})}catch(e){}try{A.displayName="useRipple",A.__docgenInfo={description:"Хук для создания Ripple эффектов",displayName:"useRipple",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#useRipple"]={docgenInfo:A.__docgenInfo,name:"useRipple",path:"src/components/Tappable/Ripple.tsx#useRipple"})}catch(e){}try{C.displayName="Ripple",C.__docgenInfo={description:"",displayName:"Ripple",props:{needRipple:{defaultValue:{value:"true"},description:"",name:"needRipple",required:!1,type:{name:"boolean"}},clicks:{defaultValue:null,description:"",name:"clicks",required:!0,type:{name:"Wave[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Ripple.tsx#Ripple"]={docgenInfo:C.__docgenInfo,name:"Ripple",path:"src/components/Tappable/Ripple.tsx#Ripple"})}catch(e){}var E="background",k={background:O["Tappable--hovered-background"],opacity:O["Tappable--hovered-opacity"],none:""};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=k[e];return void 0!==t?t:e}var P={background:O["Tappable--activated-background"],opacity:O["Tappable--activated-opacity"],none:""};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=P[e];return void 0!==t?t:e}try{x.displayName="hoverClass",x.__docgenInfo={description:"Определяем класс наведения",displayName:"hoverClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#hoverClass"]={docgenInfo:x.__docgenInfo,name:"hoverClass",path:"src/components/Tappable/state.tsx#hoverClass"})}catch(e){}try{I.displayName="activeClass",I.__docgenInfo={description:"Определяем класс наведения",displayName:"activeClass",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#activeClass"]={docgenInfo:I.__docgenInfo,name:"activeClass",path:"src/components/Tappable/state.tsx#activeClass"})}catch(e){}try{E.displayName="DEFAULT_STATE_MODE",E.__docgenInfo={description:"Состояние по умолчанию",displayName:"DEFAULT_STATE_MODE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"]={docgenInfo:E.__docgenInfo,name:"DEFAULT_STATE_MODE",path:"src/components/Tappable/state.tsx#DEFAULT_STATE_MODE"})}catch(e){}function V(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var N={none:O["Tappable--sizeX-none"],compact:O["Tappable--sizeX-compact"]},M=function(e){var t=e.baseClassName,n=e.borderRadiusMode,u=e.children,d=e.hoverMode,p=void 0===d?E:d,c=e.activeMode,m=void 0===c?E:c,f=e.onPointerDown,b=e.onPointerCancel,y=V(e,["baseClassName","borderRadiusMode","children","hoverMode","activeMode","onPointerDown","onPointerCancel"]),v=(0,s.T)(y),h=(0,r.g)(),g=h.sizeX,S=void 0===g?"none":g,_=h.hasPointer,T=w(m,_),R=A(T,_),j=R.clicks,k=V(R,["clicks"]),P=(0,l.O)(k,{onPointerDown:f,onPointerCancel:b});return a.createElement(s.P,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({baseClassName:(0,o.AK)(t,O.Tappable,S!==i.n$.REGULAR&&N[S],"inherit"===(void 0===n?"auto":n)&&O["Tappable--borderRadiusInherit"],function(e){switch(e){case void 0:return O["Tappable--hasPointer-none"];case!1:return O["Tappable--hasPointer-false"]}}(_)),hoverClassName:x(p),activeClassName:I(m)},P,y),u,v&&("background"===p||"background"===m)&&a.createElement(C,{needRipple:T,clicks:j}))};try{M.displayName="Tappable",M.__docgenInfo={description:"",displayName:"Tappable",props:{borderRadiusMode:{defaultValue:{value:"auto"},description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:{value:"background"},description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:{value:"background"},description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tappable/Tappable.tsx#Tappable"]={docgenInfo:M.__docgenInfo,name:"Tappable",path:"src/components/Tappable/Tappable.tsx#Tappable"})}catch(e){}},"./src/components/Typography/Subhead/Subhead.tsx":(e,t,n)=>{n.d(t,{v:()=>T});var a=n("../../node_modules/react/index.js"),o=n("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),r=n("./src/hooks/useAdaptivity.ts"),i=n("./src/components/Typography/Typography.tsx"),l=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),s=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=n.n(u),p=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),c=n.n(p),m=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),f=n.n(m),b=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),y=n.n(b),v=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/Typography/Subhead/Subhead.module.css"),h={attributes:{class:"vkui-style"}};h.setAttributes=f(),h.insert=c().bind(null,"head"),h.domAPI=d(),h.insertStyleElement=y(),s()(v.Z,h);let g=v.Z&&v.Z.locals?v.Z.locals:void 0;function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=S({none:g["Subhead--sizeY-none"]},"compact",g["Subhead--sizeY-compact"]),T=function(e){var t=e.className,n=e.Component,l=e.normalize,s=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","Component","normalize"]),u=(0,r.g)().sizeY,d=void 0===u?"none":u;return a.createElement(i.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){S(e,t,n[t])})}return e}({Component:void 0===n?"span":n,normalize:void 0===l||l,className:(0,o.AK)(t,g.Subhead,"regular"!==d&&_[d])},s))};try{T.displayName="Subhead",T.__docgenInfo={description:"Используется для подзаголовков 2 уровня.",displayName:"Subhead",props:{weight:{defaultValue:null,description:"Задаёт начертание шрифта, отличное от стандартного.",name:"weight",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'}]}},normalize:{defaultValue:{value:"true"},description:"Убирает внешние отступы",name:"normalize",required:!1,type:{name:"boolean"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typography/Subhead/Subhead.tsx#Subhead"]={docgenInfo:T.__docgenInfo,name:"Subhead",path:"src/components/Typography/Subhead/Subhead.tsx#Subhead"})}catch(e){}},"./src/components/VisuallyHidden/VisuallyHidden.tsx":(e,t,n)=>{n.d(t,{T:()=>h});var a=n("../../node_modules/react/index.js"),o=n("./src/components/RootComponent/RootComponent.tsx"),r=n("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),i=n.n(r),l=n("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),s=n.n(l),u=n("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),d=n.n(u),p=n("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),c=n.n(p),m=n("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=n.n(m),b=n("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[15].use[2]!./src/components/VisuallyHidden/VisuallyHidden.module.css"),y={attributes:{class:"vkui-style"}};y.setAttributes=c(),y.insert=d().bind(null,"head"),y.domAPI=s(),y.insertStyleElement=f(),i()(b.Z,y);let v=b.Z&&b.Z.locals?b.Z.locals:void 0;var h=function(e){var t=e.Component,n=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["Component"]);return a.createElement(o.U,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(e,t,n[t])})}return e}({Component:void 0===t?"span":t},n),{baseClassName:v.VisuallyHidden}))};try{h.displayName="VisuallyHidden",h.__docgenInfo={description:"Компонент-обертка. Позволяет скрыть контент визуально, но оставить его\nдоступным для ассистивных технологий. По умолчанию — `span`.",displayName:"VisuallyHidden",props:{baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<T>"}},Component:{defaultValue:{value:"span"},description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:h.__docgenInfo,name:"VisuallyHidden",path:"src/components/VisuallyHidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(e){}}}]);