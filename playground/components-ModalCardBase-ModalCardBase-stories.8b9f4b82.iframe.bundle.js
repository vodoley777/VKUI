"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1895],{"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ModalDismissButton/ModalDismissButton.module.css":function(e,t,o){var s=o("../../node_modules/css-loader/dist/runtime/noSourceMaps.js"),n=o.n(s),r=o("../../node_modules/css-loader/dist/runtime/api.js"),i=o.n(r)()(n());i.push([e.id,'.ModalDismissButton--wR4Ll{box-sizing:border-box;color:#fff;color:var(--vkui--color_icon_contrast);height:56px;justify-content:center;padding:18px;position:absolute;right:-56px;top:0;transition:opacity .15s ease-out;width:56px}.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.4);background:var(--vkui--color_overlay_primary);border-radius:50%;bottom:14px;content:"";display:block;left:14px;position:absolute;right:14px;top:14px}.ModalDismissButton--wR4Ll .vkuiIcon{transform:translateX(0)}.ModalDismissButton--hover--NGjCj.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.44);background:var(--vkui--color_overlay_primary--hover)}.ModalDismissButton--active--fSG9o.ModalDismissButton--wR4Ll:before{background:rgba(0,0,0,.48);background:var(--vkui--color_overlay_primary--active)}',""]),i.locals={ModalDismissButton:"ModalDismissButton--wR4Ll","ModalDismissButton--hover":"ModalDismissButton--hover--NGjCj","ModalDismissButton--active":"ModalDismissButton--active--fSG9o"},t.Z=i},"./src/components/ModalCardBase/ModalCardBase.stories.tsx":function(e,t,o){o.r(t),o.d(t,{Playground:function(){return p}});var s,n,r,i=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var a=o("../../node_modules/@vkontakte/icons/dist/es6/56/money_transfer_outline.js"),l=o("./src/storybook/constants.ts"),c=o("./src/components/Button/Button.tsx");function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,s)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}var m={title:"Blocks/ModalCardBase",component:o("./src/components/ModalCardBase/ModalCardBase.tsx").b,parameters:u({},l.tW,l.nB)};t.default=m;var p={args:{style:{width:450,marginBottom:20},header:"Отправляйте деньги друзьям, используя банковскую карту",subheader:"Номер карты получателя не нужен — он сам решит, куда зачислить средства.",actions:(0,i.jsx)(c.z,{size:"l",mode:"primary",stretched:!0,children:"Попробовать"}),icon:(0,i.jsx)(a.Z,{},"icon")}};p.parameters=d(u({},p.parameters),{docs:d(u({},null===(s=p.parameters)||void 0===s?void 0:s.docs),{source:u({originalSource:'{\n  args: {\n    style: {\n      width: 450,\n      marginBottom: 20\n    },\n    header: \'Отправляйте деньги друзьям, используя банковскую карту\',\n    subheader: \'Номер карты получателя не нужен — он сам решит, куда зачислить средства.\',\n    actions: <Button size="l" mode="primary" stretched>\n        Попробовать\n      </Button>,\n    icon: <Icon56MoneyTransferOutline key="icon" />\n  }\n}'},null===(n=p.parameters)||void 0===n?void 0:null===(r=n.docs)||void 0===r?void 0:r.source)})})},"./src/components/ModalDismissButton/ModalDismissButton.tsx":function(e,t,o){o.d(t,{t:function(){return g}});var s=o("../../node_modules/react/jsx-runtime.js");o("../../node_modules/react/index.js");var n=(0,o("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon20Cancel","cancel_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="cancel_20"><path fill="currentColor" fill-rule="evenodd" d="M4.72 4.72a.75.75 0 0 1 1.06 0L10 8.94l4.22-4.22a.75.75 0 1 1 1.06 1.06L11.06 10l4.22 4.22a.75.75 0 1 1-1.06 1.06L10 11.06l-4.22 4.22a.75.75 0 0 1-1.06-1.06L8.94 10 4.72 5.78a.75.75 0 0 1 0-1.06z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0),r=o("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),i=o("./src/components/Tappable/Tappable.tsx"),a=o("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),l=o.n(a),c=o("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),u=o.n(c),d=o("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),m=o.n(d),p=o("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),b=o.n(p),y=o("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),f=o.n(y),j=o("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./src/components/ModalDismissButton/ModalDismissButton.module.css"),v={attributes:{class:"vkui-style"}};v.setAttributes=b(),v.insert=m().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=f(),l()(j.Z,v);var O=j.Z&&j.Z.locals?j.Z.locals:void 0,g=function(e){var t=e["aria-label"],o=e.className,a=function(e,t){if(null==e)return{};var o,s,n=function(e,t){if(null==e)return{};var o,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}(e,["aria-label","className"]);return(0,s.jsx)(i.KR,function(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,s)}return o})(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}),e}(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),s.forEach(function(t){!function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o}(e,t,o[t])})}return e}({className:(0,r.AK)(O.ModalDismissButton,o)},a),{"aria-label":void 0===t?"Закрыть":t,activeMode:O["ModalDismissButton--active"],hoverMode:O["ModalDismissButton--hover"],children:(0,s.jsx)(n,{})}))};try{g.displayName="ModalDismissButton",g.__docgenInfo={description:"",displayName:"ModalDismissButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"]={docgenInfo:g.__docgenInfo,name:"ModalDismissButton",path:"src/components/ModalDismissButton/ModalDismissButton.tsx#ModalDismissButton"})}catch(e){}}}]);