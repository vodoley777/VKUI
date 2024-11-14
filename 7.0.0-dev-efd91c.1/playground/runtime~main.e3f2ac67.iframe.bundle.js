(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({15:"components-Popover-Popover-stories",20:"components-Snackbar-subcomponents-Basic-Basic-stories",83:"components-DateInput-DateInput-stories",289:"components-Gradient-Gradient-stories",291:"components-Badge-Badge-stories",341:"components-PanelHeaderContext-PanelHeaderContext-stories",543:"components-ModalCard-ModalCard-stories",547:"components-Radio-Radio-stories",803:"components-Clickable-Clickable-stories",925:"components-UnstyledTextField-UnstyledTextField-mdx",943:"components-ScrollArrow-ScrollArrow-stories",1041:"components-Search-Search-stories",1109:"components-UsersStack-UsersStack-stories",1171:"components-MiniInfoCell-MiniInfoCell-stories",1195:"components-PanelHeader-PanelHeader-stories",1243:"components-ContentCard-ContentCard-stories",1244:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",1405:"components-Typography-Headline-Headline-stories",1447:"components-NativeSelect-NativeSelect-stories",1455:"components-SubnavigationButton-SubnavigationButton-stories",1519:"components-PullToRefresh-PullToRefresh-stories",1583:"components-Typography-Caption-Caption-stories",1631:"components-FixedLayout-FixedLayout-stories",1759:"components-IconButton-IconButton-stories",1791:"components-Image-Image-stories",1807:"components-Mark-Mark-stories",1907:"components-Gallery-Gallery-stories",1935:"components-View-View-stories",2123:"components-SelectMimicry-SelectMimicry-stories",2130:"components-Typography-EllipsisText-EllipsisText-stories",2175:"components-Skeleton-Skeleton-stories",2461:"components-AppRoot-AppRoot-mdx",2513:"components-Card-Card-stories",2585:"components-ContentBadge-ContentBadge-stories",2735:"components-Counter-Counter-stories",2827:"components-ModalDismissButton-ModalDismissButton-stories",2851:"components-Accordion-Accordion-stories",2857:"components-Switch-Switch-stories",2883:"components-CustomScrollView-CustomScrollView-stories",2925:"components-Select-Select-stories",2959:"components-Typography-Title-Title-stories",3035:"components-Touch-Touch-stories",3049:"components-Root-Root-stories",3113:"components-Popper-Popper-stories",3131:"components-DropZone-DropZone-stories",3151:"components-Footer-Footer-stories",3185:"components-WriteBar-WriteBar-stories",3193:"components-SplitCol-SplitCol-stories",3253:"components-File-File-stories",3339:"components-VisuallyHidden-VisuallyHidden-stories",3375:"components-Slider-Slider-stories",3575:"components-ModalRoot-ModalRoot-stories",3667:"components-ConfigProvider-ConfigProvider-stories",3815:"components-Progress-Progress-stories",3983:"components-SegmentedControl-SegmentedControl-stories",4105:"components-Tabs-Tabs-stories",4287:"components-Alert-Alert-stories",4413:"components-Typography-Footnote-Footnote-stories",4447:"components-WriteBarIcon-WriteBarIcon-stories",4489:"components-SimpleCell-SimpleCell-stories",4619:"components-Tappable-Tappable-stories",4725:"components-CustomSelectOption-CustomSelectOption-stories",4879:"components-Placeholder-Placeholder-stories",5017:"components-HorizontalScroll-HorizontalCellShowMore-HorizontalCellShowMore-stories",5103:"components-ModalPageHeader-ModalPageHeader-stories",5147:"components-Separator-Separator-stories",5311:"components-ColorSchemeProvider-ColorSchemeProvider-stories",5439:"components-Typography-Subhead-Subhead-stories",5457:"components-Link-Link-stories",5477:"components-CardGrid-CardGrid-stories",5511:"components-GridAvatar-GridAvatar-stories",5599:"components-Typography-Text-Text-stories",5633:"components-Banner-Banner-stories",5659:"components-FormField-FormField-stories",5773:"components-FormStatus-FormStatus-stories",5821:"components-FormItem-FormItemTop-FormItemTop-mdx",5966:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",6063:"components-Spacing-Spacing-stories",6115:"components-Input-Input-stories",6151:"components-Checkbox-Checkbox-stories",6235:"components-InfoRow-InfoRow-stories",6245:"components-RadioGroup-RadioGroup-stories",6255:"components-SubnavigationBar-SubnavigationBar-stories",6323:"components-Panel-Panel-stories",6343:"components-Snackbar-Snackbar-stories",6383:"components-Group-Group-stories",6443:"components-OnboardingTooltip-OnboardingTooltip-stories",6591:"components-FormItem-FormItem-stories",6657:"components-Textarea-Textarea-stories",6807:"components-Avatar-Avatar-stories",6859:"components-CalendarRange-CalendarRange-stories",6891:"components-AspectRatio-AspectRatio-stories",7031:"components-HorizontalScroll-HorizontalScroll-stories",7279:"components-Header-Header-stories",7317:"components-RichCell-RichCell-stories",7477:"components-Tabbar-Tabbar-stories",7521:"components-AdaptivityProvider-AdaptivityProvider-stories",7539:"components-ChipsSelect-ChipsSelect-stories",7549:"components-Typography-DisplayTitle-DisplayTitle-stories",7615:"components-DateRangeInput-DateRangeInput-stories",7639:"components-ActionSheetItem-ActionSheetItem-stories",7647:"components-Typography-Typography-stories",7721:"components-Button-Button-stories",7751:"components-Div-Div-stories",7831:"components-PanelHeaderButton-PanelHeaderButton-stories",7863:"components-TabsItem-TabsItem-stories",7867:"components-CustomSelect-CustomSelect-stories",7926:"components-ChipsInputBase-Chip-Chip-stories",7957:"lib-animation-useCSSTransition-stories",7971:"components-PopoutWrapper-PopoutWrapper-stories",7981:"components-Cell-Cell-stories",7983:"components-Typography-Paragraph-Paragraph-stories",8059:"components-PanelSpinner-PanelSpinner-stories",8079:"components-ActionSheet-ActionSheet-stories",8175:"components-LocaleProvider-LocaleProvider-stories",8619:"components-Flex-Flex-stories",8667:"components-TabbarItem-TabbarItem-stories",8727:"components-ModalPage-ModalPage-stories",8875:"components-ButtonGroup-ButtonGroup-stories",8879:"components-Spinner-Spinner-stories",8967:"components-FormLayoutGroup-FormLayoutGroup-stories",8975:"components-Epic-Epic-stories",9009:"components-SimpleGrid-SimpleGrid-stories",9085:"components-PlatformProvider-PlatformProvider-stories",9327:"components-ChipsInput-ChipsInput-stories",9407:"components-CardScroll-CardScroll-stories",9416:"components-Cell-CellCheckbox-CellCheckbox-stories",9445:"components-HorizontalCell-HorizontalCell-stories",9459:"components-Tooltip-Tooltip-stories",9487:"components-ScreenSpinner-ScreenSpinner-stories",9503:"components-ModalCardBase-ModalCardBase-stories",9709:"components-PanelHeaderContent-PanelHeaderContent-stories",9749:"components-List-List-stories",9853:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",9869:"components-ToolButton-ToolButton-stories",9889:"components-Pagination-Pagination-stories",9905:"components-Calendar-Calendar-stories",9996:"components-SplitLayout-SplitLayout-stories"}[chunkId]||chunkId)+"."+{15:"f5dc52df",20:"d05914bd",83:"c2ff6ef1",168:"8639678b",289:"469d0895",291:"01695784",301:"8c8e502f",341:"893fb81a",446:"2043ae04",452:"0f48f15d",543:"c85c022a",547:"9ec76726",552:"51cc1dc3",803:"c3d26cc0",849:"8890ca65",925:"57d4c3d0",943:"a8d2294d",958:"5ed943d3",1008:"1a48ad7a",1041:"8bb26fa3",1109:"ab2a56b2",1171:"01e6497a",1195:"e929edee",1243:"cbf32f6f",1244:"56c5d651",1260:"91de66b7",1356:"486a1dfc",1405:"51557fac",1447:"50df67d7",1455:"d735b5c5",1519:"b7783a20",1583:"828c4496",1631:"4c7d2013",1759:"dd19cc6d",1761:"8b9ac90c",1791:"a3573b2f",1807:"38122584",1907:"bb9fde3d",1935:"33f5be95",2123:"af9733e7",2130:"5d9a9297",2175:"c7d88e96",2194:"dcb256c9",2336:"c0b82300",2411:"f1075b1a",2461:"989a930e",2513:"9f63ecb0",2582:"8905cb3d",2585:"5cf86aea",2735:"fd5974aa",2744:"709f3c4d",2808:"b12000ff",2827:"c9ba73b8",2851:"3f6fb018",2857:"aa9b378a",2883:"43596dc9",2893:"335c19b8",2925:"d692d2a2",2959:"08cddf71",3035:"86aababf",3049:"b0cd27cc",3096:"6296091b",3113:"62ea8b56",3131:"9e1f798c",3151:"82ed69ea",3185:"9b260dc5",3193:"cc20fb1d",3253:"aa9c5171",3339:"0874cd0a",3362:"6a02547c",3372:"e69eb923",3375:"6c382a96",3379:"4b994f3a",3422:"cd12a195",3575:"3871954c",3667:"94461844",3681:"3d065fad",3815:"1fa7ff9a",3837:"d664fc9a",3838:"8e69d048",3876:"adee688c",3983:"c9dbfe94",4046:"9000ffae",4105:"a8eaa8c4",4160:"faab01fe",4287:"46783a46",4413:"38dc9968",4447:"41aa0cc5",4489:"dc4b92d3",4585:"e2234962",4619:"d92fbe99",4725:"68ee18f5",4851:"abf24ff4",4876:"72db06a0",4879:"b874b0f8",5017:"af97fda8",5023:"6b0782cd",5103:"28a0ce3e",5147:"70d81a17",5231:"24b63206",5311:"6f805d95",5439:"03671757",5457:"26dfe3bc",5458:"68344a47",5477:"be3c6f18",5511:"15f64f5e",5553:"27495bef",5599:"d6203e57",5633:"0be04ba3",5659:"7379c5a5",5773:"6f2d6ad1",5812:"b810fc1a",5821:"20120290",5844:"d103971b",5854:"c753e003",5966:"aceb37a3",6063:"5054b030",6115:"1b4faaca",6151:"86341809",6235:"2d3d1cc6",6245:"e980b34c",6255:"8bcae480",6323:"0997fe13",6343:"cd25150d",6352:"21c8689d",6356:"d6835045",6357:"80b7ead3",6383:"0821e38a",6443:"f068d227",6591:"991badf0",6657:"39c734f4",6807:"af1c1b21",6818:"435fd153",6859:"3eaca08f",6891:"8bde3627",6952:"93cca725",6971:"7dfb6990",7009:"a6449236",7031:"f73839e4",7279:"e847f9f5",7317:"17abba1c",7372:"edfc664a",7477:"93fd0255",7521:"e13d2889",7539:"10c1e219",7549:"e7748d34",7615:"f2756854",7634:"607c9056",7639:"1b535eae",7647:"db0571bb",7721:"e198e7cf",7735:"9de983c2",7751:"f8adbcef",7831:"eadd3cbf",7863:"49b88c1f",7867:"ed96caa1",7926:"929e4966",7957:"7f206baf",7971:"d57195d1",7981:"4705c3c7",7983:"5da26f90",8059:"fb738a6e",8079:"923d3fb2",8175:"e847f62a",8315:"e7fbfbb5",8394:"c4048b08",8619:"5ed45bff",8667:"8ffd1b22",8727:"37dca004",8805:"99b2fc0f",8873:"d23d3aaf",8875:"3a3fbd73",8879:"816d9331",8967:"89369825",8975:"70dc2150",8977:"4444e05e",9009:"397f543d",9039:"8709afed",9085:"ccc82878",9086:"f8516ae3",9268:"ebc0e0eb",9327:"0c78d476",9407:"1e1d1c0f",9416:"0ca0fd6b",9445:"33b62072",9459:"36767609",9487:"6e1c7288",9503:"d985a74c",9545:"3c7f9fac",9709:"d10ca453",9749:"992b1d74",9812:"fa5472db",9853:"c8decba3",9869:"a5ce97ba",9889:"a6fef531",9905:"e1fb551b",9996:"e3e79d6b"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@vkontakte/vkui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@vkontakte/vkui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();