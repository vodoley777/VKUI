"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[2175],{"./src/components/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Skeleton_stories});var constants=__webpack_require__("./src/storybook/constants.ts"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js");Math.pow(10,8);var useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),useGlobalEventListener=__webpack_require__("./src/hooks/useGlobalEventListener.ts"),usePrevious=__webpack_require__("./src/hooks/usePrevious.ts"),dom=__webpack_require__("./src/lib/dom.tsx"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Skeleton_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Skeleton/Skeleton.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Skeleton_module.A,options);const Skeleton_Skeleton_module=Skeleton_module.A&&Skeleton_module.A.locals?Skeleton_module.A.locals:void 0,CUSTOM_PROPERTY_GRADIENT_LEFT="--vkui_internal--skeleton_gradient_left";const Skeleton=({width,height,inlineSize,blockSize,maxWidth,maxInlineSize,borderRadius,style,children,colorFrom,colorTo,noAnimation=!1,duration,margin,getRootRef,...restProps})=>{const rootRef=(0,useExternRef.Z)(getRootRef),disableAnimation=!function useSkeletonSyncAnimation(disableAnimation,duration=1.5){const[isAnimationStarted,setIsAnimationStarted]=react.useState(!1),timer=react.useRef(void 0),syncAnimation=react.useCallback((()=>{clearTimeout(timer.current),setIsAnimationStarted(!1);const durationInMilliseconds=1e3*duration,delay=durationInMilliseconds-performance.now()%durationInMilliseconds;return timer.current=setTimeout((()=>setIsAnimationStarted(!0)),delay),()=>clearTimeout(timer.current)}),[duration]);return react.useEffect((()=>{if(disableAnimation)setIsAnimationStarted(!1);else if(!isAnimationStarted)return syncAnimation()}),[disableAnimation,isAnimationStarted,syncAnimation]),isAnimationStarted}(noAnimation,duration),skeletonGradientLeft=function useSkeletonPosition(rootRef){const{document,window}=(0,dom.a4)(),[skeletonGradientLeft,setSkeletonGradientLeft]=react.useState("0"),prevSkeletonGradientLeft=(0,usePrevious.Z)(skeletonGradientLeft),updatePosition=react.useCallback((()=>{const el=rootRef.current;if(!el||!document)return;const value=-(el.getBoundingClientRect().left-document.body.getBoundingClientRect().left),gradientValue=0===value?"0":`${value}px`;prevSkeletonGradientLeft!==gradientValue&&setSkeletonGradientLeft(gradientValue)}),[document,prevSkeletonGradientLeft,rootRef]);return react.useEffect(updatePosition,[updatePosition]),(0,useGlobalEventListener.l)(window,"resize",updatePosition),skeletonGradientLeft}(rootRef),skeletonStyle={width,height,inlineSize,blockSize,maxWidth,maxInlineSize,borderRadius,margin,[CUSTOM_PROPERTY_GRADIENT_LEFT]:skeletonGradientLeft};return colorFrom&&(skeletonStyle["--vkui_internal--skeleton_color_from"]=colorFrom),colorTo&&(skeletonStyle["--vkui_internal--skeleton_color_to"]=colorTo),Number.isFinite(duration)&&(skeletonStyle["--vkui_internal--skeleton_animation_duration"]=`${duration}s`),(0,jsx_runtime.jsx)(RootComponent.I,{getRootRef:rootRef,Component:"span",baseClassName:(0,es6.xW)(Skeleton_Skeleton_module.Skeleton,disableAnimation&&Skeleton_Skeleton_module["Skeleton--disableAnimation"]),style:{...skeletonStyle,...style},...restProps,children:children||(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"‌"})})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:"> Старайтесь минимизировать количество заглушек на экране. Не каждый элемент\n> на экране должен заменяться заглушкой.\n>\n> Текстовые блоки лучше сокращать до трёх строк. Ширина последней строки\n> скелета вычисляется, как 75% от ширины текстового блока. Высота скелетона\n> автоматически подстраивается под размер шрифта, поэтому идеально\n> вписывается в слоты компонентов, которые обычно ожидают текст.",displayName:"Skeleton",props:{colorFrom:{defaultValue:null,description:"Начальный цвет анимации",name:"colorFrom",required:!1,type:{name:"string"}},colorTo:{defaultValue:null,description:"Финальный цвет анимации",name:"colorTo",required:!1,type:{name:"string"}},noAnimation:{defaultValue:{value:"false"},description:"Выключает анимацию, в результате чего показывается только один цвет",name:"noAnimation",required:!1,type:{name:"boolean"}},duration:{defaultValue:null,description:"Длительность анимации в секундах",name:"duration",required:!1,type:{name:"number"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement | HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}const Skeleton_stories={title:"Blocks/Skeleton",component:Skeleton,parameters:{...constants.eb,...constants.eC}},Playground={},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{}",...Playground.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Skeleton/Skeleton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.Skeleton--Mlrfv{--vkui_internal--skeleton_color_from:var(--vkui--color_skeleton_from);--vkui_internal--skeleton_color_to:var(--vkui--color_skeleton_to);--vkui_internal--skeleton_animation_duration:1.5s;--vkui_internal--skeleton_gradient_left:0;background-color:var(--vkui_internal--skeleton_color_from);border-radius:6px;display:inline-flex;inline-size:100%;line-height:1;max-inline-size:100%;overflow:hidden;position:relative}.Skeleton--Mlrfv .Skeleton--Mlrfv{--vkui_internal--skeleton_color_from:var(--vkui--color_background_content);--vkui_internal--skeleton_color_to:var(--vkui--color_background_tertiary)}.Skeleton--Mlrfv .Skeleton--Mlrfv .Skeleton--Mlrfv{--vkui_internal--skeleton_color_from:var(--vkui--color_skeleton_from);--vkui_internal--skeleton_color_to:var(--vkui--color_skeleton_to)}.Skeleton--Mlrfv:before{animation-direction:normal;animation-duration:1.5s;animation-iteration-count:infinite;animation-name:animation-skeleton--GFmkY;animation-timing-function:ease-in-out;background-image:linear-gradient(90deg,var(--vkui_internal--skeleton_color_from),var(--vkui_internal--skeleton_color_to),var(--vkui_internal--skeleton_color_from));block-size:100%;content:" ";inline-size:100vw;inset-block-start:0;inset-inline-start:var(--vkui_internal--skeleton_gradient_left);position:absolute;transform:translateX(-100vw)}@keyframes animation-skeleton--GFmkY{to{transform:translateX(100vw)}}.Skeleton--disableAnimation--eUWMd:before{animation-name:none;background-image:none}@media screen and (prefers-reduced-motion:reduce){.Skeleton--Mlrfv:before{animation-name:none;background-image:none}}',"",{version:3,sources:["webpack://./src/components/Skeleton/Skeleton.module.css"],names:[],mappings:"AAAA,iBACE,qEAAsE,CACtE,iEAAkE,CAClE,iDAAkD,CAClD,yCAA0C,CAS1C,0DAA2D,CAF3D,iBAAkB,CALlB,mBAAoB,CAEpB,gBAAiB,CAEjB,aAAc,CADd,oBAAqB,CAGrB,eAAgB,CALhB,iBAOF,CAGA,kCACE,0EAA2E,CAC3E,yEACF,CAEA,mDACE,qEAAsE,CACtE,iEACF,CAEA,wBAeE,0BAA2C,CAC3C,uBAAwB,CAExB,kCAAmC,CAJnC,wCAAkC,CAGlC,qCAAsC,CAVtC,mKAKC,CAND,eAAgB,CAFhB,WAAY,CACZ,iBAAkB,CAFlB,mBAAoB,CADpB,+DAAgE,CADhE,iBAAkB,CAYlB,4BAMF,CAEA,qCACE,GACE,2BACF,CACF,CAEA,0CAKE,mBAAoB,CACpB,qBACF,CAEA,kDACE,wBACE,mBAAoB,CACpB,qBACF,CACF",sourcesContent:[".Skeleton {\n  --vkui_internal--skeleton_color_from: var(--vkui--color_skeleton_from);\n  --vkui_internal--skeleton_color_to: var(--vkui--color_skeleton_to);\n  --vkui_internal--skeleton_animation_duration: 1.5s;\n  --vkui_internal--skeleton_gradient_left: 0;\n\n  display: inline-flex;\n  position: relative;\n  inline-size: 100%;\n  max-inline-size: 100%;\n  line-height: 1;\n  border-radius: 6px;\n  overflow: hidden;\n  background-color: var(--vkui_internal--skeleton_color_from);\n}\n\n/* Если скелетон находится внутри другого скелетона он меняет цвет */\n.Skeleton .Skeleton {\n  --vkui_internal--skeleton_color_from: var(--vkui--color_background_content);\n  --vkui_internal--skeleton_color_to: var(--vkui--color_background_tertiary);\n}\n\n.Skeleton .Skeleton .Skeleton {\n  --vkui_internal--skeleton_color_from: var(--vkui--color_skeleton_from);\n  --vkui_internal--skeleton_color_to: var(--vkui--color_skeleton_to);\n}\n\n.Skeleton::before {\n  position: absolute;\n  inset-inline-start: var(--vkui_internal--skeleton_gradient_left);\n  inset-block-start: 0;\n  content: ' ';\n  inline-size: 100vw;\n  block-size: 100%;\n  background-image: linear-gradient(\n    90deg,\n    var(--vkui_internal--skeleton_color_from),\n    var(--vkui_internal--skeleton_color_to),\n    var(--vkui_internal--skeleton_color_from)\n  );\n  transform: translateX(-100vw);\n  animation-name: animation-skeleton;\n  animation-direction: normal /*rtl:reverse*/;\n  animation-duration: 1.5s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n}\n\n@keyframes animation-skeleton {\n  100% {\n    transform: translateX(100vw);\n  }\n}\n\n.Skeleton--disableAnimation::before {\n  /**\n   * Safari тратит время не пересчет анимации даже если элемент скрыт\n   * Для повышения производительности анимацию необходимо выключить\n   */\n  animation-name: none;\n  background-image: none;\n}\n\n@media (--reduce-motion) {\n  .Skeleton::before {\n    animation-name: none;\n    background-image: none;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Skeleton:"Skeleton--Mlrfv","animation-skeleton":"animation-skeleton--GFmkY","Skeleton--disableAnimation":"Skeleton--disableAnimation--eUWMd"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/storybook/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{eC:()=>DisableCartesianParam,eb:()=>CanvasFullLayout,oL:()=>StringArg});const CanvasFullLayout={layout:"fullscreen",centered:!0},DisableCartesianParam={cartesian:{disable:!0}},StringArg={control:"text"}}}]);