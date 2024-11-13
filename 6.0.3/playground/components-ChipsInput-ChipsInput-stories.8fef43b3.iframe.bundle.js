"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[3859],{"./src/components/ChipsInput/ChipsInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ChipsInput_stories});var react=__webpack_require__("../../node_modules/react/index.js"),constants=__webpack_require__("./src/storybook/constants.ts"),FormItem=__webpack_require__("./src/components/FormItem/FormItem.tsx"),useExternRef=__webpack_require__("./src/hooks/useExternRef.ts"),ChipsInputBase=__webpack_require__("./src/components/ChipsInputBase/ChipsInputBase.tsx"),ChipsInputBase_constants=__webpack_require__("./src/components/ChipsInputBase/constants.tsx"),useChipsInput=__webpack_require__("./src/components/ChipsInput/useChipsInput.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ChipsInput=function(_param){var valueProp=_param.value,defaultValue=_param.defaultValue,onChange=_param.onChange,getRef=_param.getRef,inputValueProp=_param.inputValue,inputDefaultValueProp=_param.defaultInputValue,onInputChangeProp=_param.onInputChange,_param_getOptionValue=_param.getOptionValue,getOptionValue=void 0===_param_getOptionValue?ChipsInputBase_constants.ry:_param_getOptionValue,_param_getOptionLabel=_param.getOptionLabel,getOptionLabel=void 0===_param_getOptionLabel?ChipsInputBase_constants.My:_param_getOptionLabel,_param_getNewOptionData=_param.getNewOptionData,getNewOptionData=void 0===_param_getNewOptionData?ChipsInputBase_constants.lR:_param_getNewOptionData,disabled=_param.disabled,restProps=_object_without_properties(_param,["value","defaultValue","onChange","getRef","inputValue","defaultInputValue","onInputChange","getOptionValue","getOptionLabel","getNewOptionData","disabled"]),_useChipsInput=(0,useChipsInput.v)({value:valueProp,defaultValue:defaultValue,onChange:onChange,getOptionLabel:getOptionLabel,getOptionValue:getOptionValue,getNewOptionData:getNewOptionData,inputValue:inputValueProp,defaultInputValue:inputDefaultValueProp,onInputChange:onInputChangeProp,disabled:disabled}),value=_useChipsInput.value,addOptionFromInput=_useChipsInput.addOptionFromInput,removeOption=_useChipsInput.removeOption,inputRefHook=_useChipsInput.inputRef,inputValue=_useChipsInput.inputValue,onInputChange=_useChipsInput.onInputChange,inputRef=(0,useExternRef.Q)(getRef,inputRefHook);return react.createElement(ChipsInputBase.J,_object_spread_props(_object_spread({},restProps),{disabled:disabled,value:value,onAddChipOption:addOptionFromInput,onRemoveChipOption:removeOption,getRef:inputRef,inputValue:inputValue,onInputChange:onInputChange}))};try{ChipsInput.displayName="ChipsInput",ChipsInput.__docgenInfo={description:"",displayName:"ChipsInput",props:{getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},addOnBlur:{defaultValue:null,description:"Добавляет значение в список на событие `onBlur`",name:"addOnBlur",required:!1,type:{name:"boolean"}},renderChip:{defaultValue:{value:"Используется [Chip](#/Chip)"},description:"Render prop функция для возврата своего компонента.",name:"renderChip",required:!1,type:{name:"RenderChip<ChipOption>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Option[]"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"OnInputChange"}},inputValue:{defaultValue:null,description:"",name:"inputValue",required:!1,type:{name:"string"}},getRef:{defaultValue:null,description:"",name:"getRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"right"'},{value:'"left"'}]}},getOptionValue:{defaultValue:null,description:"Селектор значения.",name:"getOptionValue",required:!1,type:{name:"GetOptionValue<Option>"}},getOptionLabel:{defaultValue:null,description:"Селектор пользовательского представления.",name:"getOptionLabel",required:!1,type:{name:"GetOptionLabel<Option>"}},getNewOptionData:{defaultValue:null,description:"Функция для создания новой опции.",name:"getNewOptionData",required:!1,type:{name:"GetNewOptionData<Option>"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"Option[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"OnChange<Option>"}},defaultInputValue:{defaultValue:null,description:"",name:"defaultInputValue",required:!1,type:{name:"string"}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"plain"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"error"'},{value:'"valid"'}]}},before:{defaultValue:null,description:"Добавляет иконку слева.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"before",required:!1,type:{name:"ReactNode"}},after:{defaultValue:null,description:"Добавляет иконку справа.\n\nРекомендации:\n\n- Используйте следующие размеры иконок `12` | `16` | `20` | `24` | `28`.\n- Используйте [IconButton](https://vkcom.github.io/VKUI/#/IconButton), если вам нужна кликабельная иконка.",name:"after",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChipsInput/ChipsInput.tsx#ChipsInput"]={docgenInfo:ChipsInput.__docgenInfo,name:"ChipsInput",path:"src/components/ChipsInput/ChipsInput.tsx#ChipsInput"})}catch(__react_docgen_typescript_loader_error){}function ChipsInput_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ChipsInput_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){ChipsInput_stories_define_property(target,key,source[key])})}return target}function ChipsInput_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function ChipsInput_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ChipsInput_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let ChipsInput_stories={title:"Forms/ChipsInput",component:ChipsInput,parameters:ChipsInput_stories_object_spread({},constants.tW,constants.nB)};var Playground={render:function(args){return react.createElement(FormItem.x,{top:"Добавьте любимые теги",htmlFor:"chips-input",style:{width:320}},react.createElement(ChipsInput,ChipsInput_stories_object_spread_props(ChipsInput_stories_object_spread({},args),{id:"chips-input"})))}};Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => <FormItem top="Добавьте любимые теги" htmlFor="chips-input" style={{\n    width: 320\n  }}>\n      <ChipsInput {...args} id="chips-input" />\n    </FormItem>\n}',...Playground.parameters?.docs?.source}}};let __namedExportsOrder=["Playground"]},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{_:()=>_object_without_properties})},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{De:()=>makeIcon});var browserSprite,_object_spread=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread.js"),_object_spread_props=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),_object_without_properties=__webpack_require__("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),react=__webpack_require__("../../node_modules/react/index.js"),_class_call_check=__webpack_require__("../../node_modules/@swc/helpers/esm/_class_call_check.js"),_create_class=__webpack_require__("../../node_modules/@swc/helpers/esm/_create_class.js"),_define_property=__webpack_require__("../../node_modules/@swc/helpers/esm/_define_property.js");function parse(content){var hasImportNode=!!document.importNode,el=new DOMParser().parseFromString(content,"image/svg+xml").documentElement;return hasImportNode?document.importNode(el,!0):el}var BrowserSymbol=function(){function BrowserSymbol(param){var content=param.content;(0,_class_call_check._)(this,BrowserSymbol),(0,_define_property._)(this,"isMounted",!1),(0,_define_property._)(this,"node",void 0),this.node=parse(content)}return(0,_create_class._)(BrowserSymbol,[{key:"id",get:function get(){return this.node.id}},{key:"mount",value:function mount(target){return this.isMounted||(this.isMounted=!0,target.appendChild(this.node)),this.node}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function createFromExistingNode(node){var symbol=new BrowserSymbol({content:""});return symbol.node=node,symbol}}]),BrowserSymbol}(),namespaceURI="http://www.w3.org/2000/svg",BrowserSprite=function(){function BrowserSprite(){var config=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,_class_call_check._)(this,BrowserSprite),(0,_define_property._)(this,"symbols",new Map),(0,_define_property._)(this,"config",{attrs:{xmlns:namespaceURI,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,_define_property._)(this,"node",null),Object.assign(this.config.attrs,config.attrs)}return(0,_create_class._)(BrowserSprite,[{key:"push",value:function push(symbol){var symbols=this.symbols,existing=symbols.has(symbol.id);return symbols.set(symbol.id,symbol),!existing}},{key:"add",value:function add(symbol){var isNewSymbol=this.push(symbol);return this.node&&isNewSymbol&&symbol.mount(this.node),isNewSymbol}},{key:"attach",value:function attach(target){var _this=this;this.node||(this.node=target,this.symbols.forEach(function(symbol){symbol.mount(target)}),target.querySelectorAll("symbol").forEach(function(symbolNode){var symbol=BrowserSymbol.createFromExistingNode(symbolNode);_this.add(symbol)}))}},{key:"mount",value:function mount(target){var prepend=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),prepend&&target.childNodes[0]?target.insertBefore(this.node,target.firstChild):target.appendChild(this.node)),this.node}},{key:"render",value:function render(){var el=document.createElementNS(namespaceURI,"svg");return Object.entries(this.config.attrs).forEach(function(entry){return el.setAttribute(entry[0],entry[1])}),this.symbols.forEach(function(symbol){return el.appendChild(symbol.node)}),el}},{key:"unmount",value:function unmount(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),BrowserSprite}(),canUseDOM=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(canUseDOM){var spriteId="__SVG_SPRITE_NODE__";browserSprite=new BrowserSprite({attrs:{id:spriteId}});var mount=function(){var spriteNode=document.getElementById(spriteId);spriteNode?browserSprite.attach(spriteNode):browserSprite.mount(document.body),document.removeEventListener("DOMContentLoaded",mount)};document.querySelector("body")?mount():document.addEventListener("DOMContentLoaded",mount)}else browserSprite=null;function addSpriteSymbol(symbol){browserSprite&&browserSprite.add(symbol)}var useIsomorphicLayoutEffect=canUseDOM?react.useLayoutEffect:react.useEffect;function warnOnce(componentName){var didWarn={};return function(message){var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";didWarn[message]||(console[type]("[@vkontakte/icons][".concat(componentName,"] ").concat(message)),didWarn[message]=!0)}}var SvgIcon=function(_param){var _param_width=_param.width,width=void 0===_param_width?0:_param_width,_param_height=_param.height,height=void 0===_param_height?0:_param_height,viewBox=_param.viewBox,id=_param.id,_param_className=_param.className,fill=_param.fill,getRootRef=_param.getRootRef,tmp=_param.style,title=_param.title,children=_param.children,restProps=(0,_object_without_properties._)(_param,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),size=Math.max(width,height),style=(0,_object_spread._)({width:width,height:height},void 0===tmp?{}:tmp);return react.createElement("svg",(0,_object_spread_props._)((0,_object_spread._)({"aria-hidden":"true",display:"block"},restProps),{className:["vkuiIcon","vkuiIcon--".concat(size),"vkuiIcon--w-".concat(width),"vkuiIcon--h-".concat(height),"vkuiIcon--".concat(id),void 0===_param_className?"":_param_className].join(" ").trim(),viewBox:viewBox,width:width,height:height,style:style,ref:getRootRef}),title&&react.createElement("title",null,title),react.createElement("use",{xlinkHref:"#".concat(id),style:{fill:"currentColor",color:fill}},children))};function makeIcon(componentName,id,viewBox,content,width,height,deprecated,replacement){var mountIcon=function(){isMounted||(addSpriteSymbol(new BrowserSymbol({content:content})),isMounted=!0)},isMounted=!1,warn=warnOnce(componentName),Icon=function(props){return useIsomorphicLayoutEffect(mountIcon,[]),deprecated&&warn("Иконка устарела"+(replacement?". Замените на ".concat(replacement):"")),react.createElement(SvgIcon,(0,_object_spread_props._)((0,_object_spread._)({},props),{viewBox:viewBox,id:id,width:void 0===props.width||isNaN(props.width)?width:+props.width,height:void 0===props.height||isNaN(props.height)?height:+props.height}))};return Icon.mountIcon=mountIcon,Icon.displayName=componentName,Icon}},"../../node_modules/@vkontakte/icons/dist/es6/16/cancel_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>Icon16Cancel});var Icon16Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").De)("Icon16Cancel","cancel_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="cancel_16"><path fill="currentColor" d="M12.736 3.264a.9.9 0 0 1 0 1.272L9.273 8l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L8 9.273l-3.464 3.463a.9.9 0 0 1-1.272-1.272L6.727 8 3.264 4.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L8 6.727l3.464-3.463a.9.9 0 0 1 1.272 0Z" /></symbol>',16,16,!1,void 0)}}]);