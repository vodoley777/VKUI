!function(){"use strict";var e={},o={};function t(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={id:n,loaded:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(o,n,r,s){if(n){s=s||0;for(var a=e.length;a>0&&e[a-1][2]>s;a--)e[a]=e[a-1];e[a]=[n,r,s];return}for(var i=1/0,a=0;a<e.length;a++){for(var n=e[a][0],r=e[a][1],s=e[a][2],c=!0,p=0;p<n.length;p++)i>=s&&Object.keys(t.O).every(function(e){return t.O[e](n[p])})?n.splice(p--,1):(c=!1,s<i&&(i=s));if(c){e.splice(a--,1);var d=r();void 0!==d&&(o=d)}}return o}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};t.t=function(n,r){if(1&r&&(n=this(n)),8&r||"object"==typeof n&&n&&(4&r&&n.__esModule||16&r&&"function"==typeof n.then))return n;var s=Object.create(null);t.r(s);var a={};e=e||[null,o({}),o([]),o(o)];for(var i=2&r&&n;"object"==typeof i&&!~e.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},t.d(s,a),s}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce(function(o,n){return t.f[n](e,o),o},[]))}}(),function(){t.u=function(e){return""+(({234:"components-Pagination-Pagination-stories",278:"components-AdaptiveIconRenderer-AdaptiveIconRenderer-stories",643:"components-RichTooltip-RichTooltip-stories",650:"components-Progress-Progress-stories",736:"components-WriteBar-WriteBar-stories",969:"components-PullToRefresh-PullToRefresh-stories",1037:"components-CardGrid-CardGrid-stories",1065:"components-Badge-Badge-stories",1067:"components-CardScroll-CardScroll-stories",1195:"components-Input-Input-stories",1238:"components-SubnavigationButton-SubnavigationButton-stories",1310:"components-GridAvatar-GridAvatar-stories",1314:"components-Header-Header-stories",1325:"components-Tooltip-Tooltip-stories",1385:"components-Root-Root-stories",1574:"components-ScreenSpinner-ScreenSpinner-stories",1739:"components-CustomSelectOption-CustomSelectOption-stories",1747:"components-Button-Button-stories",1857:"components-Snackbar-Snackbar-stories",1895:"components-ModalCardBase-ModalCardBase-stories",1957:"components-VisuallyHidden-VisuallyHidden-stories",1975:"components-File-File-stories",2178:"components-UsersStack-UsersStack-stories",2358:"components-AdaptivityProvider-AdaptivityProvider-stories",2503:"components-ContentCard-ContentCard-stories",2580:"components-ImageBase-ImageBaseOverlay-ImageBaseOverlay-stories",2612:"components-InfoRow-InfoRow-stories",2748:"components-SplitLayout-SplitLayout-stories",2753:"components-CellButton-CellButton-stories",2968:"components-SegmentedControl-SegmentedControl-stories",3046:"components-Typography-Paragraph-Paragraph-stories",3067:"components-CalendarRange-CalendarRange-stories",3083:"components-TabsItem-TabsItem-stories",3106:"components-Link-Link-stories",3150:"components-PlatformProvider-PlatformProvider-stories",3317:"components-PopoutWrapper-PopoutWrapper-stories",3423:"components-ConfigProvider-ConfigProvider-stories",3430:"components-SubnavigationBar-SubnavigationBar-stories",3551:"components-MiniInfoCell-MiniInfoCell-stories",3779:"components-AspectRatio-AspectRatio-stories",3859:"components-ChipsInput-ChipsInput-stories",3929:"components-Slider-Slider-stories",4072:"components-ModalRoot-ModalRoot-stories",4197:"components-NativeSelect-NativeSelect-stories",4249:"components-LocaleProvider-LocaleProvider-stories",4395:"components-Gallery-Gallery-stories",4529:"components-Chip-Chip-stories",4612:"components-Checkbox-Checkbox-stories",4679:"components-Textarea-Textarea-stories",4758:"components-Placeholder-Placeholder-stories",4759:"components-PromoBanner-PromoBanner-stories",4795:"components-SimpleCell-SimpleCell-stories",4869:"components-Tappable-Tappable-stories",5051:"components-FormLayoutGroup-FormLayoutGroup-stories",5179:"components-ChipsSelect-ChipsSelect-stories",5266:"components-Typography-Footnote-Footnote-stories",5523:"components-Div-Div-stories",5571:"components-TabbarItem-TabbarItem-stories",5632:"components-Search-Search-stories",5646:"components-Typography-Typography-stories",5689:"components-Banner-Banner-stories",5783:"components-Typography-Title-Title-stories",5838:"components-ActionSheetItem-ActionSheetItem-stories",5846:"components-HorizontalScroll-HorizontalScroll-stories",5961:"components-FormItem-FormItem-stories",5989:"components-Avatar-Avatar-stories",6027:"components-Typography-Caption-Caption-stories",6038:"components-ActionSheet-ActionSheet-stories",6103:"components-Gradient-Gradient-stories",6144:"components-DatePicker-DatePicker-stories",6171:"components-FormField-FormField-stories",6256:"components-IconButton-IconButton-stories",6298:"components-FormStatus-FormStatus-stories",6311:"components-Switch-Switch-stories",6550:"components-ModalPage-ModalPage-stories",6575:"components-FixedLayout-FixedLayout-stories",6606:"components-Spacing-Spacing-stories",6615:"components-Cell-Cell-stories",6714:"components-Panel-Panel-stories",6980:"components-AppearanceProvider-AppearanceProvider-stories",7149:"components-SelectMimicry-SelectMimicry-stories",7202:"components-CustomSelect-CustomSelect-stories",7216:"components-Separator-Separator-stories",7302:"components-Epic-Epic-stories",7478:"components-Touch-Touch-stories",7518:"components-Card-Card-stories",7524:"components-DateRangeInput-DateRangeInput-stories",7531:"components-Select-Select-stories",7586:"components-Alert-Alert-stories",7712:"components-Tabbar-Tabbar-stories",7717:"components-ImageBase-ImageBaseBadge-ImageBaseBadge-stories",7773:"components-PanelHeader-PanelHeader-stories",7867:"components-DateInput-DateInput-stories",7978:"components-Calendar-Calendar-stories",8016:"components-Typography-Text-Text-stories",8034:"components-HorizontalCell-HorizontalCell-stories",8101:"components-List-List-stories",8110:"components-Footer-Footer-stories",8232:"components-Typography-Headline-Headline-stories",8258:"components-ModalCard-ModalCard-stories",8313:"components-Accordion-Accordion-stories",8488:"components-RichCell-RichCell-stories",8620:"components-Tabs-Tabs-stories",8783:"components-Spinner-Spinner-stories",8832:"components-Group-Group-stories",8991:"components-View-View-stories",9212:"components-ButtonGroup-ButtonGroup-stories",9285:"components-TextTooltip-TextTooltip-stories",9469:"components-Cell-CellCheckbox-CellCheckbox-stories",9495:"components-Radio-Radio-stories",9704:"components-RadioGroup-RadioGroup-stories",9705:"components-Popover-Popover-stories",9802:"components-Typography-Subhead-Subhead-stories",9873:"components-PanelSpinner-PanelSpinner-stories",9904:"components-RangeSlider-RangeSlider-stories",9908:"components-Counter-Counter-stories"})[e]||e)+"."+({26:"1f4793aa",234:"843b0dbc",278:"342966f8",409:"cb325240",643:"aa738935",650:"31a26f7e",715:"3a0a4460",736:"a7a08267",969:"ee65e4ca",1037:"4fac2e55",1065:"fc6f1486",1067:"f72a635b",1127:"74a07b22",1195:"68eff7eb",1238:"a2c647f5",1264:"64f0bce5",1285:"346bb373",1310:"bc5d435e",1314:"85fcf84b",1325:"4fd1d71a",1330:"63b1c862",1345:"5589340f",1385:"85770651",1475:"250651b0",1526:"849dd15a",1539:"e1b61150",1574:"57279ccc",1716:"3a2828fe",1739:"97531a34",1747:"09275926",1849:"87a924b3",1857:"7a739c3f",1891:"b6b38a9e",1895:"8b9f4b82",1957:"aa6e7010",1975:"2c50964d",2068:"c440447f",2161:"e4078479",2178:"29aa2ee8",2229:"982fc412",2358:"d0055f7b",2368:"9fd88258",2503:"7409204a",2580:"353534c1",2585:"2f4dccb0",2612:"d0b01f3a",2748:"000248fd",2753:"852286f9",2968:"7866bbf6",3046:"22b6e511",3067:"6f62e23f",3083:"43c640c3",3106:"69f8dea4",3150:"c1f0b33d",3317:"7162ff4e",3423:"e1012452",3430:"2460c724",3551:"508abd55",3779:"382e4672",3843:"a87abfc8",3859:"c968fb35",3929:"b67e3210",4033:"fb28c23d",4072:"c0d3de16",4197:"e55a9e13",4249:"03427925",4395:"1ac81e23",4529:"d36c8d9d",4534:"90173110",4612:"8ff23bec",4679:"f3a3c2c8",4758:"1d89aeb7",4759:"d57b34cd",4795:"38e3e2eb",4869:"fb089c3a",5019:"9f65229e",5051:"01684fcd",5141:"ad5ee46d",5179:"ce733ae8",5191:"0fd16596",5266:"4da8ee56",5516:"c26ee835",5523:"9745105b",5571:"586c3b5e",5632:"fe8f4298",5646:"a3c5726e",5689:"9c55a82a",5719:"013ee988",5783:"da2a7f3c",5838:"4713e7b0",5846:"e22e0e8d",5853:"7f67fc32",5925:"ff106db5",5961:"93de0327",5989:"ed9a52a9",6027:"a603d6ac",6038:"0a168f0f",6103:"65f3ad15",6116:"6e0a2f98",6132:"ef10ddfc",6144:"42a41fe3",6145:"fc0d9dbc",6171:"21702112",6256:"c4c25c2b",6298:"37246c68",6311:"649ad662",6351:"fff1efdd",6550:"f60a5061",6575:"123d33de",6606:"05639258",6615:"570f5ffd",6714:"f2500fba",6721:"a3452542",6980:"7cf8b360",7149:"45bef378",7202:"27f81a90",7216:"036f9a8d",7232:"9b8db460",7302:"6591a02b",7478:"4f98bb9a",7518:"fafd9197",7524:"2ef2f3c2",7531:"1917f2f8",7586:"095741c3",7587:"7d85fa6e",7712:"af54e4f8",7717:"fea3de7b",7773:"660518ba",7867:"200232bf",7978:"52e509c7",8001:"42183bd1",8016:"dac5c14d",8034:"5df97474",8036:"5d2910c2",8101:"207737c3",8110:"3f9f7422",8232:"3d7ef2c7",8258:"664ce0a4",8295:"35949fba",8313:"82214b5b",8488:"45eb617f",8620:"8231c8ef",8681:"11ea0cca",8783:"4603e2f3",8821:"62b8066b",8832:"34ce7cfa",8898:"15d4f2b9",8991:"d56d111e",9011:"7ffde4ff",9212:"805eb140",9285:"591fd0f5",9355:"fdb61bc3",9393:"be7b71bd",9409:"afe66f7d",9469:"01870091",9495:"1a5698c4",9704:"9efcf949",9705:"c6ed8ed1",9802:"e40ce496",9873:"818490a4",9904:"2e4d1ac7",9908:"563d5317",9954:"80b55e12"})[e]+".iframe.bundle.js"}}(),function(){t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="@vkontakte/vkui:";t.l=function(n,r,s,a){if(e[n]){e[n].push(r);return}if(void 0!==s)for(var i,c,p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var l=p[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==o+s){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",o+s),i.src=n),e[n]=[r];var f=function(o,t){i.onerror=i.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach(function(e){return e(t)}),o)return o(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}(),function(){t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p=""}(),function(){var e={1303:0};t.f.j=function(o,n){var r=t.o(e,o)?e[o]:void 0;if(0!==r){if(r)n.push(r[2]);else if(1303!=o){var s=new Promise(function(t,n){r=e[o]=[t,n]});n.push(r[2]=s);var a=t.p+t.u(o),i=Error();t.l(a,function(n){if(t.o(e,o)&&(0!==(r=e[o])&&(e[o]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+o+" failed.\n("+s+": "+a+")",i.name="ChunkLoadError",i.type=s,i.request=a,r[1](i)}},"chunk-"+o,o)}else e[o]=0}},t.O.j=function(o){return 0===e[o]};var o=function(o,n){var r,s,a=n[0],i=n[1],c=n[2],p=0;if(a.some(function(o){return 0!==e[o]})){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var d=c(t)}for(o&&o(n);p<a.length;p++)s=a[p],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}(),function(){t.nc=void 0}()}();