"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2580,1238],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css":function(e,r,t){var n=t("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),a=t.n(n),o=t("../../node_modules/css-loader/dist/runtime/api.js"),s=t.n(o)()(a());s.push([e.id,".ImageBaseOverlay--NP8gp{align-items:center;border:none;border-radius:inherit;box-shadow:inherit;box-sizing:border-box;display:flex;height:100%;justify-content:center;left:0;opacity:0;position:absolute;top:0;transition:opacity .3s ease-in-out;width:100%;z-index:0;z-index:var(--vkui_internal--z_index_image_base_overlay)}.ImageBaseOverlay--visible--ENmQO{opacity:1}.ImageBaseOverlay--focus-visible--U6JMn{box-shadow:inset 0 0 0 2px #2688eb;box-shadow:inset 0 0 0 2px var(--vkui--color_stroke_accent);opacity:1}.ImageBaseOverlay--theme-light--oSlo8{background-color:hsla(0,0%,100%,.85);background-color:var(--vkui--color_avatar_overlay_inverse_alpha);color:#2688eb;color:var(--vkui--color_icon_accent)}.ImageBaseOverlay--theme-dark--vG21o{background-color:rgba(0,0,0,.6);background-color:var(--vkui--color_avatar_overlay);color:#fff;color:var(--vkui--color_icon_contrast)}",""]),s.locals={ImageBaseOverlay:"ImageBaseOverlay--NP8gp","ImageBaseOverlay--visible":"ImageBaseOverlay--visible--ENmQO","ImageBaseOverlay--focus-visible":"ImageBaseOverlay--focus-visible--U6JMn","ImageBaseOverlay--theme-light":"ImageBaseOverlay--theme-light--oSlo8","ImageBaseOverlay--theme-dark":"ImageBaseOverlay--theme-dark--vG21o"},r.Z=s},"../../node_modules/mitt/dist/mitt.mjs":function(e,r,t){t.d(r,{Z:function(){return n}});function n(e){return{all:e=e||new Map,on:function(r,t){var n=e.get(r);n?n.push(t):e.set(r,[t])},off:function(r,t){var n=e.get(r);n&&(t?n.splice(n.indexOf(t)>>>0,1):e.set(r,[]))},emit:function(r,t){var n=e.get(r);n&&n.slice().map(function(e){e(t)}),(n=e.get("*"))&&n.slice().map(function(e){e(r,t)})}}}},"./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.stories.tsx":function(e,r,t){t.r(r),t.d(r,{Playground:function(){return m}});var n,a,o,s=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var l=t("./src/storybook/constants.ts"),i=t("./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx");function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}function u(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}var d={title:"Blocks/ImageBaseOverlay",component:i.r,parameters:c({},l.tW,l.nB)};r.default=d;var m={render:function(e){var r=e.children,t=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["children"]);return(0,s.jsx)(i.r,u(c({},t),{children:r}))},decorators:[function(e,r){return(0,s.jsx)("div",{style:{width:50,height:50,border:"1px dashed red",position:"relative"},children:(0,s.jsx)(e,{args:c({},r.args)})})}]};m.parameters=u(c({},m.parameters),{docs:u(c({},null===(n=m.parameters)||void 0===n?void 0:n.docs),{source:c({originalSource:"{\n  render: ({\n    children,\n    ...args\n  }) => <ImageBaseOverlay {...args}>{children}</ImageBaseOverlay>,\n  decorators: [(Component, context) => <div style={{\n    width: 50,\n    height: 50,\n    border: '1px dashed red',\n    position: 'relative'\n  }}>\n        <Component args={{\n      ...context.args\n    }} />\n      </div>]\n}"},null===(a=m.parameters)||void 0===a?void 0:null===(o=a.docs)||void 0===o?void 0:o.source)})})},"./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx":function(e,r,t){t.d(r,{r:function(){return j}});var n=t("../../node_modules/react/jsx-runtime.js");t("../../node_modules/react/index.js");var a=t("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),o=t("./src/hooks/useAdaptivityHasPointer.ts"),s=t("./src/hooks/useAppearance.ts"),l=t("./src/components/Tappable/Tappable.tsx"),i=t("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=t.n(i),u=t("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),d=t.n(u),m=t("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),v=t.n(m),y=t("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),p=t.n(y),g=t("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),O=t.n(g),b=t("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.module.css"),f={attributes:{class:"vkui-style"}};f.setAttributes=p(),f.insert=v().bind(null,"head"),f.domAPI=d(),f.insertStyleElement=O(),c()(b.Z,f);var h=b.Z&&b.Z.locals?b.Z.locals:void 0,j=function(e){var r=e.className,t=e.theme,i=e.visibility,c=e.children,u=e.onClick,d=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["className","theme","visibility","children","onClick"]),m=(0,s.M)(),v=(0,o.K)(),y=null!=t?t:m,p=null!=i?i:v?"on-hover":"always";return(0,n.jsx)(l.KR,function(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){!function(e,r,t){r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t}(e,r,t[r])})}return e}({},d),{type:"button",Component:"button",className:(0,a.AK)(h.ImageBaseOverlay,"always"===p&&h["ImageBaseOverlay--visible"],"light"===y&&h["ImageBaseOverlay--theme-light"],"dark"===y&&h["ImageBaseOverlay--theme-dark"],r),hasHover:"on-hover"===p,hoverMode:"on-hover"===p?h["ImageBaseOverlay--visible"]:void 0,focusVisibleMode:h["ImageBaseOverlay--focus-visible"],hasActive:!1,onClick:u,children:c}))};try{j.displayName="ImageBaseOverlay",j.__docgenInfo={description:"Интерактивный оверлей над картинкой.",displayName:"ImageBaseOverlay",props:{theme:{defaultValue:null,description:"Задаёт тему оформления.\n\n> По умолчанию берётся из параметра `appearance` в `ConfigProvider`.",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},visibility:{defaultValue:null,description:'Определяет каким образом должен показываться оверлей.\n\n- `"on-hover"` – на наведение указателя мыши.\n- `"always"` – всегда показывать.\n\n> По умолчанию определяется в зависимости от того, есть ли у пользователя мышь или нет.',name:"visibility",required:!1,type:{name:"enum",value:[{value:'"always"'},{value:'"on-hover"'}]}},children:{defaultValue:null,description:"Принимает иконку.\n\n\n> \uD83D\uDCDD Нужный для `<ImageBase size={...} />` размер можно узнать из функции `getOverlayIconSizeByImageBaseSize()`.\n\n> Предпочтительней использовать иконки из `@vkontakte/icons`.\n\n> \uD83D\uDCCA️ Если вы хотите передать кастомную иконку, то следует именовать её по шаблону `Icon<size><name>`. Или же\n> чтобы в неё был передан параметр `width`. Тогда мы сможем выводить в консоль подсказку правильного ли размера вы\n> использовали иконку.",name:"children",required:!0,type:{name:"ReactElement<ImageBaseExpectedIconProps, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"]={docgenInfo:j.__docgenInfo,name:"ImageBaseOverlay",path:"src/components/ImageBase/ImageBaseOverlay/ImageBaseOverlay.tsx#ImageBaseOverlay"})}catch(e){}}}]);