(()=>{"use strict";var __webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,(()=>{__webpack_require__.amdO={}})(),(()=>{var deferred=[];__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(chunkIds){priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority];return}for(var notFulfilled=1/0,i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)notFulfilled>=priority&&Object.keys(__webpack_require__.O).every(key=>__webpack_require__.O[key](chunkIds[j]))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}})(),(()=>{__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter}})(),(()=>{var leafPrototypes,getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__;__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode||"object"==typeof value&&value&&(4&mode&&value.__esModule||16&mode&&"function"==typeof value.then))return value;var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach(key=>def[key]=()=>value[key]);return def.default=()=>value,__webpack_require__.d(ns,def),ns}})(),(()=>{__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})}})(),(()=>{__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises),[]))})(),(()=>{__webpack_require__.u=chunkId=>""+(({234:"components-Pagination-Pagination-stories",278:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",650:"components-Progress-Progress-stories",736:"components-WriteBar-WriteBar-stories",969:"components-PullToRefresh-PullToRefresh-stories",1037:"components-CardGrid-CardGrid-stories",1065:"components-Badge-Badge-stories",1067:"components-CardScroll-CardScroll-stories",1195:"components-Input-Input-stories",1238:"components-SubnavigationButton-SubnavigationButton-stories",1274:"components-Snackbar-subcomponents-Basic-Basic-stories",1310:"components-GridAvatar-GridAvatar-stories",1314:"components-Header-Header-stories",1325:"components-Tooltip-Tooltip-stories",1385:"components-Root-Root-stories",1574:"components-ScreenSpinner-ScreenSpinner-stories",1739:"components-CustomSelectOption-CustomSelectOption-stories",1747:"components-Button-Button-stories",1857:"components-Snackbar-Snackbar-stories",1895:"components-ModalCardBase-ModalCardBase-stories",1957:"components-VisuallyHidden-VisuallyHidden-stories",1975:"components-File-File-stories",2106:"components-ChipsInputBase-Chip-Chip-stories",2178:"components-UsersStack-UsersStack-stories",2358:"components-AdaptivityProvider-AdaptivityProvider-stories",2503:"components-ContentCard-ContentCard-stories",2580:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",2612:"components-InfoRow-InfoRow-stories",2748:"components-SplitLayout-SplitLayout-stories",2753:"components-CellButton-CellButton-stories",2968:"components-SegmentedControl-SegmentedControl-stories",3046:"components-Typography-Paragraph-Paragraph-stories",3067:"components-CalendarRange-CalendarRange-stories",3083:"components-TabsItem-TabsItem-stories",3106:"components-Link-Link-stories",3150:"components-PlatformProvider-PlatformProvider-stories",3288:"components-PanelHeaderButton-PanelHeaderButton-stories",3317:"components-PopoutWrapper-PopoutWrapper-stories",3358:"components-Image-Image-stories",3423:"components-ConfigProvider-ConfigProvider-stories",3424:"components-ModalDismissButton-ModalDismissButton-stories",3430:"components-SubnavigationBar-SubnavigationBar-stories",3551:"components-MiniInfoCell-MiniInfoCell-stories",3779:"components-AspectRatio-AspectRatio-stories",3859:"components-ChipsInput-ChipsInput-stories",3929:"components-Slider-Slider-stories",4072:"components-ModalRoot-ModalRoot-stories",4197:"components-NativeSelect-NativeSelect-stories",4249:"components-LocaleProvider-LocaleProvider-stories",4395:"components-Gallery-Gallery-stories",4612:"components-Checkbox-Checkbox-stories",4679:"components-Textarea-Textarea-stories",4753:"components-SplitCol-SplitCol-stories",4758:"components-Placeholder-Placeholder-stories",4795:"components-SimpleCell-SimpleCell-stories",4865:"components-ModalPageHeader-ModalPageHeader-stories",4869:"components-Tappable-Tappable-stories",5051:"components-FormLayoutGroup-FormLayoutGroup-stories",5179:"components-ChipsSelect-ChipsSelect-stories",5236:"components-AppRoot-AppRoot-stories-mdx",5266:"components-Typography-Footnote-Footnote-stories",5385:"components-Clickable-Clickable-stories",5523:"components-Div-Div-stories",5571:"components-TabbarItem-TabbarItem-stories",5632:"components-Search-Search-stories",5646:"components-Typography-Typography-stories",5689:"components-Banner-Banner-stories",5739:"components-PanelHeaderContext-PanelHeaderContext-stories",5783:"components-Typography-Title-Title-stories",5838:"components-ActionSheetItem-ActionSheetItem-stories",5846:"components-HorizontalScroll-HorizontalScroll-stories",5961:"components-FormItem-FormItem-stories",5989:"components-Avatar-Avatar-stories",6027:"components-Typography-Caption-Caption-stories",6038:"components-ActionSheet-ActionSheet-stories",6103:"components-Gradient-Gradient-stories",6144:"components-DatePicker-DatePicker-stories",6171:"components-FormField-FormField-stories",6256:"components-IconButton-IconButton-stories",6298:"components-FormStatus-FormStatus-stories",6311:"components-Switch-Switch-stories",6550:"components-ModalPage-ModalPage-stories",6575:"components-FixedLayout-FixedLayout-stories",6606:"components-Spacing-Spacing-stories",6615:"components-Cell-Cell-stories",6714:"components-Panel-Panel-stories",6742:"components-ScrollArrow-ScrollArrow-stories",6908:"components-HorizontalScroll-HorizontalCellShowMore-HorizontalCellShowMore-stories",6980:"components-AppearanceProvider-AppearanceProvider-stories",7149:"components-SelectMimicry-SelectMimicry-stories",7202:"components-CustomSelect-CustomSelect-stories",7216:"components-Separator-Separator-stories",7302:"components-Epic-Epic-stories",7478:"components-Touch-Touch-stories",7489:"components-Popper-Popper-stories",7518:"components-Card-Card-stories",7524:"components-DateRangeInput-DateRangeInput-stories",7531:"components-Select-Select-stories",7586:"components-Alert-Alert-stories",7712:"components-Tabbar-Tabbar-stories",7717:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",7773:"components-PanelHeader-PanelHeader-stories",7867:"components-DateInput-DateInput-stories",7978:"components-Calendar-Calendar-stories",8016:"components-Typography-Text-Text-stories",8034:"components-HorizontalCell-HorizontalCell-stories",8101:"components-List-List-stories",8110:"components-Footer-Footer-stories",8232:"components-Typography-Headline-Headline-stories",8258:"components-ModalCard-ModalCard-stories",8313:"components-Accordion-Accordion-stories",8488:"components-RichCell-RichCell-stories",8620:"components-Tabs-Tabs-stories",8783:"components-Spinner-Spinner-stories",8832:"components-Group-Group-stories",8911:"components-OnboardingTooltip-OnboardingTooltip-stories",8991:"components-View-View-stories",9212:"components-ButtonGroup-ButtonGroup-stories",9469:"components-Cell-CellCheckbox-CellCheckbox-stories",9495:"components-Radio-Radio-stories",9624:"components-WriteBarIcon-WriteBarIcon-stories",9704:"components-RadioGroup-RadioGroup-stories",9705:"components-Popover-Popover-stories",9802:"components-Typography-Subhead-Subhead-stories",9873:"components-PanelSpinner-PanelSpinner-stories",9907:"components-PanelHeaderContent-PanelHeaderContent-stories",9908:"components-Counter-Counter-stories"})[chunkId]||chunkId)+"."+({234:"181d6a5b",278:"64aeee14",406:"9cfad106",516:"9070e047",544:"cbd8def0",571:"a2082ea6",650:"b0c51282",687:"5ca0afdc",736:"7105a786",969:"b3428f77",1037:"a5ecd39c",1040:"720d064e",1065:"3c909a87",1067:"803e4fc8",1069:"9f64b741",1195:"4df2a79e",1238:"34cbb903",1274:"299e36c9",1299:"e6b26e92",1310:"fcbb15ae",1314:"53150f49",1325:"430abc4a",1343:"51ff804e",1345:"9fb51718",1385:"02db0d16",1503:"0826404c",1574:"878b715a",1654:"d5069487",1739:"1ea21a2b",1747:"7e400c6a",1857:"4e8040c8",1867:"a92f4a3d",1895:"dcb3ef6c",1957:"6b08651c",1975:"73ccf582",1976:"bb0b5ecf",2096:"be4a7050",2106:"eb61892b",2173:"c9463eb0",2178:"05bddbfe",2224:"e6559f3b",2358:"e72ff6ab",2499:"3fe1bcfc",2503:"78cc6295",2557:"369eed43",2580:"ea4aee10",2612:"60879464",2748:"607b3c92",2753:"a8c56af6",2822:"353d7c73",2906:"1861e0f7",2968:"18d5161b",2997:"db265f22",3026:"404139db",3046:"77d89f91",3067:"9c5cf650",3083:"8a56efc7",3106:"f06d9654",3150:"b4422a77",3288:"81514d32",3297:"78a7405f",3317:"cb357dfa",3358:"1aaea5d9",3418:"32cfad92",3421:"32e70a0b",3423:"062d7011",3424:"68700f6c",3430:"88e305e8",3521:"c8dace98",3551:"8a26943d",3632:"1f574b20",3717:"5dfbbd3b",3779:"45d1154c",3859:"8fef43b3",3929:"74de01f9",3978:"cc6eaad7",4055:"71c2dc57",4072:"5fe768ba",4194:"f7974e46",4197:"84efd37e",4249:"cc42f746",4260:"1e8febc8",4265:"8bfac4f9",4354:"ee305d0f",4395:"ddd17a75",4490:"08063295",4605:"5522b221",4612:"e682b0c9",4651:"98cd899a",4679:"fea43e26",4753:"3e578ef5",4758:"540c0c54",4762:"f2dc6605",4773:"ee83f30f",4795:"86bdf0b6",4865:"f6a66af7",4869:"53169a91",4984:"a707b1aa",5051:"696d85e7",5070:"3811e999",5179:"52f53fb5",5236:"f0588432",5266:"95ba3d60",5385:"736ce302",5523:"4fcf3fc2",5571:"3e013969",5587:"326a9437",5632:"334b8244",5646:"25d90da6",5689:"6a2b17be",5727:"2dfadeb2",5739:"f094c19e",5746:"a68d37b1",5783:"9946698b",5834:"29601c19",5838:"13073eae",5846:"035dbef6",5961:"39190b36",5989:"2b835da9",5994:"10945e6d",6027:"70886f36",6038:"c80ddd14",6088:"428f7450",6103:"1a539c35",6144:"bf4a39f7",6171:"773df7a4",6256:"c8db6a11",6298:"b49d50e5",6311:"ecb6e7f7",6322:"e870b84b",6539:"dec48937",6550:"cc94f84d",6575:"7e9273bc",6606:"c1597f29",6615:"8f40c880",6714:"0a09f0ba",6742:"9e02f4d3",6895:"44295abf",6908:"2f72c989",6980:"b2adf702",7149:"b1bfeb22",7202:"b713f349",7216:"044f1ed6",7302:"e3d79479",7313:"203e9487",7407:"deaf4d98",7446:"ee7fffde",7478:"8ad66cb8",7489:"ae8c6517",7518:"e99e40ae",7524:"62d24de4",7531:"8115f9e3",7586:"c2b50fda",7590:"32b68ecf",7637:"77b846cd",7712:"ea0bc50c",7717:"ec10c36b",7731:"580840f0",7773:"9f4f2d78",7786:"6ad31c84",7867:"f43d5af5",7978:"d22303ea",7998:"6c680682",8016:"fc42c249",8034:"cd3d0edb",8101:"8d54a905",8110:"81a9c4f4",8163:"0530cc76",8232:"901bcd0b",8241:"c22dce44",8258:"3a352743",8313:"7d7dd1ed",8488:"b0796c65",8620:"83c4c098",8671:"97f7363c",8783:"c61d23d0",8832:"380225df",8911:"68d6daca",8991:"6a9d4e75",9097:"ea918f61",9178:"66bb93da",9212:"c8826af9",9263:"3d0bd916",9289:"01d66e98",9437:"08daeb90",9455:"e27e4316",9469:"d66bb375",9495:"168cd6f6",9536:"80c01dfb",9556:"1e8239b3",9624:"71cd04f6",9690:"8cd76d07",9704:"faea7f03",9705:"9b0b0c06",9802:"e2e09be3",9873:"7bbea57d",9907:"792744b1",9908:"571d9f33"})[chunkId]+".iframe.bundle.js"})(),(()=>{__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}()})(),(()=>{__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop)})(),(()=>{var inProgress={},dataWebpackPrefix="@vkontakte/vkui:";__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url]){inProgress[url].push(done);return}if(void 0!==key)for(var script,needAttach,scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")==dataWebpackPrefix+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack",dataWebpackPrefix+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach(fn=>fn(event)),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}})(),(()=>{__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})}})(),(()=>{__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module)})(),(()=>{__webpack_require__.p=""})(),(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData){if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]);promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=Error();__webpack_require__.l(url,event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}},"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some(id=>0!==installedChunks[id])){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),(()=>{__webpack_require__.nc=void 0})()})();