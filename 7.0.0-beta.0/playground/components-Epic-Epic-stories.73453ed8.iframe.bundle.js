"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[8975],{"./src/components/Epic/Epic.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Epic_stories});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),newsfeed_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/newsfeed_outline_28.js"),services_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/services_outline_28.js"),message_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/message_outline_28.js"),clip_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/clip_outline_28.js"),user_circle_outline_28=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/user_circle_outline_28.js"),newsfeed_outline_56=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/56/newsfeed_outline_56.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),useAdaptivityConditionalRender=__webpack_require__("./src/hooks/useAdaptivityConditionalRender/useAdaptivityConditionalRender.tsx"),usePlatform=__webpack_require__("./src/hooks/usePlatform.ts"),constants=__webpack_require__("./src/storybook/constants.ts"),Badge=__webpack_require__("./src/components/Badge/Badge.tsx"),Cell=__webpack_require__("./src/components/Cell/Cell.tsx"),Counter=__webpack_require__("./src/components/Counter/Counter.tsx"),Group=__webpack_require__("./src/components/Group/Group.tsx"),Panel=__webpack_require__("./src/components/Panel/Panel.tsx"),PanelHeader=__webpack_require__("./src/components/PanelHeader/PanelHeader.tsx"),PanelHeaderBack=__webpack_require__("./src/components/PanelHeaderBack/PanelHeaderBack.tsx"),Placeholder=__webpack_require__("./src/components/Placeholder/Placeholder.tsx"),SplitCol=__webpack_require__("./src/components/SplitCol/SplitCol.tsx"),SplitLayout=__webpack_require__("./src/components/SplitLayout/SplitLayout.tsx"),Tabbar=__webpack_require__("./src/components/Tabbar/Tabbar.tsx"),TabbarItem=__webpack_require__("./src/components/TabbarItem/TabbarItem.tsx"),View=__webpack_require__("./src/components/View/View.tsx"),getNavId=__webpack_require__("./src/lib/getNavId.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),ScrollContext=__webpack_require__("./src/components/AppRoot/ScrollContext.tsx");const ScrollSaver=({children,initialScroll,saveScroll})=>{const{getScroll,scrollTo}=react.useContext(ScrollContext.z_);return(0,useIsomorphicLayoutEffect.E)((()=>("number"==typeof initialScroll&&scrollTo(0,initialScroll),()=>saveScroll(getScroll().y))),[]),(0,jsx_runtime.jsx)(react.Fragment,{children})};try{ScrollSaver.displayName="ScrollSaver",ScrollSaver.__docgenInfo={description:"",displayName:"ScrollSaver",props:{initialScroll:{defaultValue:null,description:"",name:"initialScroll",required:!1,type:{name:"number"}},saveScroll:{defaultValue:null,description:"",name:"saveScroll",required:!0,type:{name:"(this: void, scroll: number) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Epic/ScrollSaver.tsx#ScrollSaver"]={docgenInfo:ScrollSaver.__docgenInfo,name:"ScrollSaver",path:"src/components/Epic/ScrollSaver.tsx#ScrollSaver"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Epic_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Epic/Epic.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Epic_module.A,options);const Epic_Epic_module=Epic_module.A&&Epic_module.A.locals?Epic_module.A.locals:void 0,warn=(0,warnOnce.m)("Epic"),Epic=({activeStory,tabbar,children,...restProps})=>{const scroll=react.useRef({}).current,story=react.Children.toArray(children).find((story=>react.isValidElement(story)&&(0,getNavId.p)(story.props,warn)===activeStory))??null;return(0,jsx_runtime.jsxs)(RootComponent.I,{...restProps,baseClassName:(0,es6.xW)(Epic_Epic_module.host,tabbar&&"vkuiInternalEpic--hasTabbar"),children:[(0,jsx_runtime.jsx)(ScrollSaver,{initialScroll:scroll[activeStory]||0,saveScroll:value=>scroll[activeStory]=value,children:story},activeStory),tabbar]})};try{Epic.displayName="Epic",Epic.__docgenInfo={description:"",displayName:"Epic",props:{tabbar:{defaultValue:null,description:"",name:"tabbar",required:!1,type:{name:"ReactNode"}},activeStory:{defaultValue:null,description:"",name:"activeStory",required:!0,type:{name:"string"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Epic/Epic.tsx#Epic"]={docgenInfo:Epic.__docgenInfo,name:"Epic",path:"src/components/Epic/Epic.tsx#Epic"})}catch(__react_docgen_typescript_loader_error){}const Epic_stories={title:"Layout/Epic",component:Epic,parameters:{...constants.eb,...constants.eC}},ActiveStoryStyle={backgroundColor:"var(--vkui--color_background_secondary)",borderRadius:8},Example={render:function Render(){const platform=(0,usePlatform.V)(),{viewWidth}=(0,useAdaptivityConditionalRender.V)(),[activeStory,setActiveStory]=react.useState("profile"),onStoryChange=e=>setActiveStory(e.currentTarget.dataset.story),hasHeader="vkcom"!==platform;return(0,jsx_runtime.jsxs)(SplitLayout.n,{header:hasHeader&&(0,jsx_runtime.jsx)(PanelHeader.a,{delimiter:"none"}),center:!0,children:[viewWidth.tabletPlus&&(0,jsx_runtime.jsx)(SplitCol.L,{className:viewWidth.tabletPlus.className,fixed:!0,width:280,maxWidth:280,children:(0,jsx_runtime.jsxs)(Panel.Z,{children:[hasHeader&&(0,jsx_runtime.jsx)(PanelHeader.a,{}),(0,jsx_runtime.jsxs)(Group.Y,{children:[(0,jsx_runtime.jsx)(Cell.f,{disabled:"feed"===activeStory,style:"feed"===activeStory?ActiveStoryStyle:void 0,"data-story":"feed",onClick:onStoryChange,before:(0,jsx_runtime.jsx)(newsfeed_outline_28.v,{}),children:"feed"}),(0,jsx_runtime.jsx)(Cell.f,{disabled:"services"===activeStory,style:"services"===activeStory?ActiveStoryStyle:void 0,"data-story":"services",onClick:onStoryChange,before:(0,jsx_runtime.jsx)(services_outline_28.I,{}),children:"services"}),(0,jsx_runtime.jsx)(Cell.f,{disabled:"messages"===activeStory,style:"messages"===activeStory?ActiveStoryStyle:void 0,"data-story":"messages",onClick:onStoryChange,before:(0,jsx_runtime.jsx)(message_outline_28.P,{}),children:"messages"}),(0,jsx_runtime.jsx)(Cell.f,{disabled:"clips"===activeStory,style:"clips"===activeStory?ActiveStoryStyle:void 0,"data-story":"clips",onClick:onStoryChange,before:(0,jsx_runtime.jsx)(clip_outline_28.e,{}),children:"clips"}),(0,jsx_runtime.jsx)(Cell.f,{disabled:"profile"===activeStory,style:"profile"===activeStory?ActiveStoryStyle:void 0,"data-story":"profile",onClick:onStoryChange,before:(0,jsx_runtime.jsx)(user_circle_outline_28.T,{}),children:"profile"})]})]})}),(0,jsx_runtime.jsx)(SplitCol.L,{width:"100%",maxWidth:"560px",stretchedOnMobile:!0,autoSpaced:!0,children:(0,jsx_runtime.jsxs)(Epic,{activeStory,tabbar:viewWidth.tabletMinus&&(0,jsx_runtime.jsxs)(Tabbar.H,{className:viewWidth.tabletMinus.className,children:[(0,jsx_runtime.jsx)(TabbarItem.g,{onClick:onStoryChange,selected:"feed"===activeStory,"data-story":"feed",text:"Новости",children:(0,jsx_runtime.jsx)(newsfeed_outline_28.v,{})}),(0,jsx_runtime.jsx)(TabbarItem.g,{onClick:onStoryChange,selected:"services"===activeStory,"data-story":"services",text:"Сервисы",children:(0,jsx_runtime.jsx)(services_outline_28.I,{})}),(0,jsx_runtime.jsx)(TabbarItem.g,{onClick:onStoryChange,selected:"messages"===activeStory,"data-story":"messages",indicator:(0,jsx_runtime.jsx)(Counter.p,{size:"s",mode:"prominent",children:"12"}),text:"Сообщения",children:(0,jsx_runtime.jsx)(message_outline_28.P,{})}),(0,jsx_runtime.jsx)(TabbarItem.g,{onClick:onStoryChange,selected:"clips"===activeStory,"data-story":"clips",text:"Клипы",children:(0,jsx_runtime.jsx)(clip_outline_28.e,{})}),(0,jsx_runtime.jsx)(TabbarItem.g,{onClick:onStoryChange,selected:"profile"===activeStory,"data-story":"profile",indicator:(0,jsx_runtime.jsx)(Badge.E,{mode:"prominent",children:"Есть обновления"}),text:"Профиль",children:(0,jsx_runtime.jsx)(user_circle_outline_28.T,{})})]}),children:[(0,jsx_runtime.jsx)(View.S,{id:"feed",activePanel:"feed",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"feed",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{before:(0,jsx_runtime.jsx)(PanelHeaderBack.H,{onClick:es6.lQ}),children:"Новости"}),(0,jsx_runtime.jsx)(Group.Y,{style:{height:"1000px"},children:(0,jsx_runtime.jsx)(Placeholder.O,{icon:(0,jsx_runtime.jsx)(newsfeed_outline_56.c,{width:56,height:56})})})]})}),(0,jsx_runtime.jsx)(View.S,{id:"services",activePanel:"services",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"services",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{before:(0,jsx_runtime.jsx)(PanelHeaderBack.H,{onClick:es6.lQ}),children:"Сервисы"}),(0,jsx_runtime.jsx)(Group.Y,{style:{height:"1000px"},children:(0,jsx_runtime.jsx)(Placeholder.O,{icon:(0,jsx_runtime.jsx)(services_outline_28.I,{width:56,height:56})})})]})}),(0,jsx_runtime.jsx)(View.S,{id:"messages",activePanel:"messages",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"messages",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{before:(0,jsx_runtime.jsx)(PanelHeaderBack.H,{onClick:es6.lQ}),children:"Сообщения"}),(0,jsx_runtime.jsx)(Group.Y,{style:{height:"1000px"},children:(0,jsx_runtime.jsx)(Placeholder.O,{icon:(0,jsx_runtime.jsx)(message_outline_28.P,{width:56,height:56})})})]})}),(0,jsx_runtime.jsx)(View.S,{id:"clips",activePanel:"clips",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"clips",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{before:(0,jsx_runtime.jsx)(PanelHeaderBack.H,{onClick:es6.lQ}),children:"Клипы"}),(0,jsx_runtime.jsx)(Group.Y,{style:{height:"1000px"},children:(0,jsx_runtime.jsx)(Placeholder.O,{icon:(0,jsx_runtime.jsx)(clip_outline_28.e,{width:56,height:56})})})]})}),(0,jsx_runtime.jsx)(View.S,{id:"profile",activePanel:"profile",children:(0,jsx_runtime.jsxs)(Panel.Z,{id:"profile",children:[(0,jsx_runtime.jsx)(PanelHeader.a,{before:(0,jsx_runtime.jsx)(PanelHeaderBack.H,{onClick:es6.lQ}),children:"Профиль"}),(0,jsx_runtime.jsx)(Group.Y,{style:{height:"1000px"},children:(0,jsx_runtime.jsx)(Placeholder.O,{icon:(0,jsx_runtime.jsx)(user_circle_outline_28.T,{width:56,height:56})})})]})})]})})]})}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: function Render() {\n    const platform = usePlatform();\n    const {\n      viewWidth\n    } = useAdaptivityConditionalRender();\n    const [activeStory, setActiveStory] = React.useState<string>(\'profile\');\n    const onStoryChange = (e: React.MouseEvent<HTMLElement>) => setActiveStory(e.currentTarget.dataset.story!);\n    const hasHeader = platform !== \'vkcom\';\n    return <SplitLayout header={hasHeader && <PanelHeader delimiter="none" />} center>\n        {viewWidth.tabletPlus && <SplitCol className={viewWidth.tabletPlus.className} fixed width={280} maxWidth={280}>\n            <Panel>\n              {hasHeader && <PanelHeader />}\n              <Group>\n                <Cell disabled={activeStory === \'feed\'} style={activeStory === \'feed\' ? ActiveStoryStyle : undefined} data-story="feed" onClick={onStoryChange} before={<Icon28NewsfeedOutline />}>\n                  feed\n                </Cell>\n                <Cell disabled={activeStory === \'services\'} style={activeStory === \'services\' ? ActiveStoryStyle : undefined} data-story="services" onClick={onStoryChange} before={<Icon28ServicesOutline />}>\n                  services\n                </Cell>\n                <Cell disabled={activeStory === \'messages\'} style={activeStory === \'messages\' ? ActiveStoryStyle : undefined} data-story="messages" onClick={onStoryChange} before={<Icon28MessageOutline />}>\n                  messages\n                </Cell>\n                <Cell disabled={activeStory === \'clips\'} style={activeStory === \'clips\' ? ActiveStoryStyle : undefined} data-story="clips" onClick={onStoryChange} before={<Icon28ClipOutline />}>\n                  clips\n                </Cell>\n                <Cell disabled={activeStory === \'profile\'} style={activeStory === \'profile\' ? ActiveStoryStyle : undefined} data-story="profile" onClick={onStoryChange} before={<Icon28UserCircleOutline />}>\n                  profile\n                </Cell>\n              </Group>\n            </Panel>\n          </SplitCol>}\n\n        <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>\n          <Epic activeStory={activeStory} tabbar={viewWidth.tabletMinus && <Tabbar className={viewWidth.tabletMinus.className}>\n                  <TabbarItem onClick={onStoryChange} selected={activeStory === \'feed\'} data-story="feed" text="Новости">\n                    <Icon28NewsfeedOutline />\n                  </TabbarItem>\n                  <TabbarItem onClick={onStoryChange} selected={activeStory === \'services\'} data-story="services" text="Сервисы">\n                    <Icon28ServicesOutline />\n                  </TabbarItem>\n                  <TabbarItem onClick={onStoryChange} selected={activeStory === \'messages\'} data-story="messages" indicator={<Counter size="s" mode="prominent">\n                        12\n                      </Counter>} text="Сообщения">\n                    <Icon28MessageOutline />\n                  </TabbarItem>\n                  <TabbarItem onClick={onStoryChange} selected={activeStory === \'clips\'} data-story="clips" text="Клипы">\n                    <Icon28ClipOutline />\n                  </TabbarItem>\n                  <TabbarItem onClick={onStoryChange} selected={activeStory === \'profile\'} data-story="profile" indicator={<Badge mode="prominent">Есть обновления</Badge>} text="Профиль">\n                    <Icon28UserCircleOutline />\n                  </TabbarItem>\n                </Tabbar>}>\n            <View id="feed" activePanel="feed">\n              <Panel id="feed">\n                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Новости</PanelHeader>\n                <Group style={{\n                height: \'1000px\'\n              }}>\n                  <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />\n                </Group>\n              </Panel>\n            </View>\n            <View id="services" activePanel="services">\n              <Panel id="services">\n                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сервисы</PanelHeader>\n                <Group style={{\n                height: \'1000px\'\n              }}>\n                  <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}></Placeholder>\n                </Group>\n              </Panel>\n            </View>\n            <View id="messages" activePanel="messages">\n              <Panel id="messages">\n                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Сообщения</PanelHeader>\n                <Group style={{\n                height: \'1000px\'\n              }}>\n                  <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}></Placeholder>\n                </Group>\n              </Panel>\n            </View>\n            <View id="clips" activePanel="clips">\n              <Panel id="clips">\n                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Клипы</PanelHeader>\n                <Group style={{\n                height: \'1000px\'\n              }}>\n                  <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}></Placeholder>\n                </Group>\n              </Panel>\n            </View>\n            <View id="profile" activePanel="profile">\n              <Panel id="profile">\n                <PanelHeader before={<PanelHeaderBack onClick={noop} />}>Профиль</PanelHeader>\n                <Group style={{\n                height: \'1000px\'\n              }}>\n                  <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}></Placeholder>\n                </Group>\n              </Panel>\n            </View>\n          </Epic>\n        </SplitCol>\n      </SplitLayout>;\n  }\n}',...Example.parameters?.docs?.source}}}},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Epic/Epic.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Epic__host--XoGQZ{block-size:100%;inline-size:100%}.vkuiInternalEpic--hasTabbar.Epic__host--XoGQZ{--vkui_internal--snackbar_safe_area_inset_bottom:calc(var(--vkui_internal--tabbar_height) + var(--vkui_internal--safe_area_inset_bottom))}","",{version:3,sources:["webpack://./src/components/Epic/Epic.module.css"],names:[],mappings:"AAAA,mBAEE,eAAgB,CADhB,gBAEF,CAGA,+CACE,yIAGF",sourcesContent:[".host {\n  inline-size: 100%;\n  block-size: 100%;\n}\n\n/* stylelint-disable-next-line selector-pseudo-class-disallowed-list */\n:global(.vkuiInternalEpic--hasTabbar).host {\n  --vkui_internal--snackbar_safe_area_inset_bottom: calc(\n    var(--vkui_internal--tabbar_height) + var(--vkui_internal--safe_area_inset_bottom)\n  );\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Epic__host--XoGQZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Placeholder/Placeholder.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Placeholder__host--aUv_F{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;text-align:center}.Placeholder__withPadding--mKEFJ{padding-block:48px;padding-inline:32px}.Placeholder__stretched--zhq6y{block-size:100%;flex:1 0}.Placeholder__icon--LDmLx{-webkit-margin-after:12px;color:var(--vkui--color_icon_secondary);display:inline-block;margin-block-end:12px;vertical-align:top}.Placeholder__header--Wkobi{color:var(--vkui--color_text_primary)}.Placeholder__text--VHebq{color:var(--vkui--color_text_secondary)}.Placeholder__header--Wkobi+.Placeholder__text--VHebq{-webkit-margin-before:8px;margin-block-start:8px}.Placeholder__action--x2nDa:not(:first-child){-webkit-margin-before:16px;margin-block-start:16px}","",{version:3,sources:["webpack://./src/components/Placeholder/Placeholder.module.css"],names:[],mappings:"AAAA,0BAEE,kBAAmB,CAInB,qBAAsB,CALtB,YAAa,CAGb,qBAAsB,CADtB,sBAAuB,CAEvB,iBAEF,CAEA,iCACE,kBAAmB,CACnB,mBACF,CAEA,+BAEE,eAAgB,CADhB,QAEF,CAEA,0BACE,yBAAsB,CAGtB,uCAAwC,CAFxC,oBAAqB,CADrB,qBAAsB,CAEtB,kBAEF,CAEA,4BACE,qCACF,CAEA,0BACE,uCACF,CAEA,sDACE,yBAAuB,CAAvB,sBACF,CAEA,8CACE,0BAAwB,CAAxB,uBACF",sourcesContent:[".host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.withPadding {\n  padding-block: 48px;\n  padding-inline: 32px;\n}\n\n.stretched {\n  flex: 1 0;\n  block-size: 100%;\n}\n\n.icon {\n  margin-block-end: 12px;\n  display: inline-block;\n  vertical-align: top;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.header {\n  color: var(--vkui--color_text_primary);\n}\n\n.text {\n  color: var(--vkui--color_text_secondary);\n}\n\n.header + .text {\n  margin-block-start: 8px;\n}\n\n.action:not(:first-child) {\n  margin-block-start: 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={host:"Placeholder__host--aUv_F",withPadding:"Placeholder__withPadding--mKEFJ",stretched:"Placeholder__stretched--zhq6y",icon:"Placeholder__icon--LDmLx",header:"Placeholder__header--Wkobi",text:"Placeholder__text--VHebq",action:"Placeholder__action--x2nDa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/PanelHeaderBack/PanelHeaderBack.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>PanelHeaderBack});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/chevron_back_28.js")),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/20/chevron_left_outline_20.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/chevron_left_outline_28.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/24/arrow_left_outline_24.js"),_vkontakte_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../../node_modules/@vkontakte/icons/dist_es6/28/arrow_left_outline_28.js"),_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/hooks/useAdaptivity.ts"),_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/hooks/usePlatform.ts"),_AdaptiveIconRenderer_AdaptiveIconRenderer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx"),_PanelHeaderButton_PanelHeaderButton__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/components/PanelHeaderButton/PanelHeaderButton.tsx"),_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/components/VisuallyHidden/VisuallyHidden.tsx"),_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/PanelHeaderButton/PanelHeaderButton.module.css");const sizeXClassNames={none:_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__.A.backSizeXNone,compact:_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__.A.backSizeXCompact},getBackIcon=platform=>{switch(platform){case"ios":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_vkontakte_icons__WEBPACK_IMPORTED_MODULE_4__.E,{});case"vkcom":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdaptiveIconRenderer_AdaptiveIconRenderer__WEBPACK_IMPORTED_MODULE_5__.p,{IconCompact:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_6__.m,IconRegular:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_7__.K});default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdaptiveIconRenderer_AdaptiveIconRenderer__WEBPACK_IMPORTED_MODULE_5__.p,{IconCompact:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_8__.M,IconRegular:_vkontakte_icons__WEBPACK_IMPORTED_MODULE_9__._})}},PanelHeaderBack=({label,className,children="Назад",...restProps})=>{const platform=(0,_hooks_usePlatform__WEBPACK_IMPORTED_MODULE_10__.V)(),{sizeX="none"}=(0,_hooks_useAdaptivity__WEBPACK_IMPORTED_MODULE_11__.L)(),showLabel="vkcom"===platform||"ios"===platform;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_PanelHeaderButton_PanelHeaderButton__WEBPACK_IMPORTED_MODULE_12__.q,{...restProps,className:(0,_vkontakte_vkjs__WEBPACK_IMPORTED_MODULE_2__.xW)("regular"!==sizeX&&sizeXClassNames[sizeX],"ios"===platform&&_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__.A.backIos,"vkcom"===platform&&_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__.A.backVkcom,showLabel&&!!label&&_PanelHeaderButton_PanelHeaderButton_module_css__WEBPACK_IMPORTED_MODULE_3__.A.backHasLabel,className),label:showLabel&&label,children:[children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_VisuallyHidden_VisuallyHidden__WEBPACK_IMPORTED_MODULE_13__.s,{children}),getBackIcon(platform)]})};try{PanelHeaderBack.displayName="PanelHeaderBack",PanelHeaderBack.__docgenInfo={description:"",displayName:"PanelHeaderBack",props:{primary:{defaultValue:null,description:"",name:"primary",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},hasHover:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на hover-состояние",name:"hasHover",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},baseClassName:{defaultValue:null,description:"",name:"baseClassName",required:!1,type:{name:"string | false"}},borderRadiusMode:{defaultValue:null,description:"Задает border-radius элементу\nВ режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`",name:"borderRadiusMode",required:!1,type:{name:"enum",value:[{value:'"inherit"'},{value:'"auto"'}]}},focusVisibleMode:{defaultValue:null,description:"Стиль аутлайна focus visible. Если передать произвольную строку, она добавится как css-класс при :focus-visible",name:"focusVisibleMode",required:!1,type:{name:"FocusVisibleMode"}},hovered:{defaultValue:null,description:"Позволяет управлять hovered-состоянием извне",name:"hovered",required:!1,type:{name:"boolean"}},activated:{defaultValue:null,description:"Позволяет управлять activated-состоянием извне",name:"activated",required:!1,type:{name:"boolean"}},hasActive:{defaultValue:null,description:"Указывает, должен ли компонент реагировать на active-состояние",name:"hasActive",required:!1,type:{name:"boolean"}},hasHoverWithChildren:{defaultValue:null,description:"Позволяет родительскому компоненту\nиметь hovered-cостояние при наведении\nна любой дочерний элемент.\nПо умолчанию состояние hovered у родителя сбрасывается.\n\nПрисваивается родителькому компоненту.\n@example <Tappable hasHoverWithChildren>\n  <IconButton />\n  <IconButton />\n  <IconButton />\n</Tappable>",name:"hasHoverWithChildren",required:!1,type:{name:"boolean"}},unlockParentHover:{defaultValue:null,description:"Позволяет родительскому компоненту показывать hovered-состояние при наведении\nна текущий дочерний компонент.\n\nПрисваивается дочернему компоненту.\n@example <Tappable>\n  <IconButton unlockParentHover />\n  <IconButton unlockParentHover />\n  <IconButton />\n</Tappable>",name:"unlockParentHover",required:!1,type:{name:"boolean"}},activeEffectDelay:{defaultValue:null,description:"Длительность показа `activated`-состояния",name:"activeEffectDelay",required:!1,type:{name:"number"}},activeClassName:{defaultValue:null,description:"Стиль подсветки active-состояния",name:"activeClassName",required:!1,type:{name:"string"}},hoverClassName:{defaultValue:null,description:"Стиль подсветки hover-состояния",name:"hoverClassName",required:!1,type:{name:"string"}},activeMode:{defaultValue:null,description:"Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active",name:"activeMode",required:!1,type:{name:"StateModeLiteral"}},hoverMode:{defaultValue:null,description:"Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover",name:"hoverMode",required:!1,type:{name:"StateModeLiteral"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PanelHeaderBack/PanelHeaderBack.tsx#PanelHeaderBack"]={docgenInfo:PanelHeaderBack.__docgenInfo,name:"PanelHeaderBack",path:"src/components/PanelHeaderBack/PanelHeaderBack.tsx#PanelHeaderBack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Placeholder/Placeholder.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>Placeholder});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),es6=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js")),RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Headline=__webpack_require__("./src/components/Typography/Headline/Headline.tsx"),Title=__webpack_require__("./src/components/Typography/Title/Title.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),Placeholder_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Placeholder/Placeholder.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Placeholder_module.A,options);const Placeholder_Placeholder_module=Placeholder_module.A&&Placeholder_module.A.locals?Placeholder_module.A.locals:void 0,PlaceholderContainer=({stretched,noPadding=!1,...restProps})=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:(0,es6.xW)(Placeholder_Placeholder_module.host,stretched&&Placeholder_Placeholder_module.stretched,!noPadding&&Placeholder_Placeholder_module.withPadding),...restProps}),PlaceholderIcon=props=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:Placeholder_Placeholder_module.icon,...props}),PlaceholderHeader=({className,...restProps})=>(0,jsx_runtime.jsx)(Title.h,{level:"2",weight:"2",className:(0,es6.xW)(className,Placeholder_Placeholder_module.header),...restProps}),PlaceholderText=({className,...restProps})=>(0,jsx_runtime.jsx)(Headline.$,{weight:"3",className:(0,es6.xW)(className,Placeholder_Placeholder_module.text),...restProps}),PlaceholderActions=props=>(0,jsx_runtime.jsx)(RootComponent.I,{baseClassName:Placeholder_Placeholder_module.action,...props}),Placeholder=({icon,header,children,action,noPadding=!1,...restProps})=>(0,jsx_runtime.jsxs)(PlaceholderContainer,{noPadding,...restProps,children:[(0,es6.G1)(icon)&&(0,jsx_runtime.jsx)(PlaceholderIcon,{children:icon}),(0,es6.G1)(header)&&(0,jsx_runtime.jsx)(PlaceholderHeader,{children:header}),(0,es6.G1)(children)&&(0,jsx_runtime.jsx)(PlaceholderText,{children}),(0,es6.G1)(action)&&(0,jsx_runtime.jsx)(PlaceholderActions,{children:action})]});Placeholder.Container=PlaceholderContainer,Placeholder.Icon=PlaceholderIcon,Placeholder.Header=PlaceholderHeader,Placeholder.Text=PlaceholderText,Placeholder.Actions=PlaceholderActions;try{Placeholder.displayName="Placeholder",Placeholder.__docgenInfo={description:"",displayName:"Placeholder",props:{icon:{defaultValue:null,description:"Иконка",name:"icon",required:!1,type:{name:"ReactNode"}},header:{defaultValue:null,description:"Заголовок плейсхолдера",name:"header",required:!1,type:{name:"ReactNode"}},action:{defaultValue:null,description:"Кнопка действия",name:"action",required:!1,type:{name:"ReactNode"}},stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"Убирает отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder"]={docgenInfo:Placeholder.__docgenInfo,name:"Placeholder",path:"src/components/Placeholder/Placeholder.tsx#Placeholder"})}catch(__react_docgen_typescript_loader_error){}try{Container.displayName="Placeholder.Container",Container.__docgenInfo={description:"",displayName:"Placeholder.Container",props:{stretched:{defaultValue:null,description:"Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер",name:"stretched",required:!1,type:{name:"boolean"}},noPadding:{defaultValue:{value:"false"},description:"Убирает отступы у компонента",name:"noPadding",required:!1,type:{name:"boolean"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Container"]={docgenInfo:Placeholder.Container.__docgenInfo,name:"Placeholder.Container",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Container"})}catch(__react_docgen_typescript_loader_error){}try{Icon.displayName="Placeholder.Icon",Icon.__docgenInfo={description:"",displayName:"Placeholder.Icon",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"]={docgenInfo:Placeholder.Icon.__docgenInfo,name:"Placeholder.Icon",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Icon"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="Placeholder.Header",Header.__docgenInfo={description:"",displayName:"Placeholder.Header",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Header"]={docgenInfo:Placeholder.Header.__docgenInfo,name:"Placeholder.Header",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Header"})}catch(__react_docgen_typescript_loader_error){}try{Text.displayName="Placeholder.Text",Text.__docgenInfo={description:"",displayName:"Placeholder.Text",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLElement>"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Text"]={docgenInfo:Placeholder.Text.__docgenInfo,name:"Placeholder.Text",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Text"})}catch(__react_docgen_typescript_loader_error){}try{Actions.displayName="Placeholder.Actions",Actions.__docgenInfo={description:"",displayName:"Placeholder.Actions",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"]={docgenInfo:Placeholder.Actions.__docgenInfo,name:"Placeholder.Actions",path:"src/components/Placeholder/Placeholder.tsx#Placeholder.Actions"})}catch(__react_docgen_typescript_loader_error){}}}]);