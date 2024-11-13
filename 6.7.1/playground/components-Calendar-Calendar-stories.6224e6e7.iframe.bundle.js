"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[9905],{"./src/components/Calendar/Calendar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("storybook/internal/preview-api"),_storybook_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/storybook/constants.ts"),_testing_presets_createCalendarDayRenderField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/testing/presets/createCalendarDayRenderField.tsx"),_Calendar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Calendar/Calendar.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/Calendar",component:_Calendar__WEBPACK_IMPORTED_MODULE_2__.V,parameters:{..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eb,..._storybook_constants__WEBPACK_IMPORTED_MODULE_3__.eC},argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:(0,_testing_presets_createCalendarDayRenderField__WEBPACK_IMPORTED_MODULE_4__.R)()}},Playground={render:function Render({value,minDateTime,maxDateTime,...args}){const[,updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),parsedValue=value?new Date(value):value,parsedMinDateTime=minDateTime?new Date(minDateTime):minDateTime,parsedMaxDateTime=maxDateTime?new Date(maxDateTime):maxDateTime;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Calendar__WEBPACK_IMPORTED_MODULE_2__.V,{value:parsedValue,minDateTime:parsedMinDateTime,maxDateTime:parsedMaxDateTime,...args,onChange:newDate=>{updateArgs({value:newDate?.getTime()})}})}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: function Render({\n    value,\n    minDateTime,\n    maxDateTime,\n    ...args\n  }) {\n    const [, updateArgs] = useArgs();\n    const parsedValue = value ? new Date(value) : value;\n    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;\n    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;\n    const updateValue = (newDate: Date | undefined) => {\n      updateArgs({\n        value: newDate?.getTime()\n      });\n    };\n    return <Calendar value={parsedValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} onChange={updateValue} />;\n  }\n}",...Playground.parameters?.docs?.source}}}},"../../node_modules/@vkontakte/icons/dist_es6/12/dropdown_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Icon12Dropdown});var Icon12Dropdown=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12Dropdown","dropdown_12","0 0 12 8",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 8" id="dropdown_12"><path fill="currentColor" fill-rule="evenodd" d="M2.156 2.295a.75.75 0 0 1 1.051-.137L6 4.306l2.793-2.148a.75.75 0 1 1 .914 1.189l-3.25 2.5a.75.75 0 0 1-.914 0l-3.25-2.5a.75.75 0 0 1-.137-1.052" clip-rule="evenodd" /></symbol>',12,8,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/12/education_12.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Icon12Education});var Icon12Education=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon12Education","education_12","0 0 12 12",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 12" id="education_12"><path fill-rule="evenodd" d="M5.625 1.128.76 3.697l-.078.04c-.374.199-.565.306-.631.448a.5.5 0 0 0-.005.416c.068.153.279.27.699.503l4.87 2.704c.142.078.213.118.288.133a.5.5 0 0 0 .202 0c.075-.015.146-.055.287-.134L11 5.243V7.5a.5.5 0 1 0 1 0V4.444c0-.104-.031-.2-.085-.28-.066-.108-.21-.2-.46-.336l-.23-.124h-.002L6.374 1.128c-.137-.072-.205-.109-.277-.123a.5.5 0 0 0-.194 0c-.072.014-.14.05-.278.123M1.99 6.998v-.062l2.847 1.58c.426.237.639.355.864.402.2.04.405.04.605 0 .225-.047.438-.165.863-.402l2.817-1.568v.05a3.998 3.998 0 0 1-7.996 0" clip-rule="evenodd" /></symbol>',12,12,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/16/cancel_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Icon16Cancel});var Icon16Cancel=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Cancel","cancel_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="cancel_16"><path fill="currentColor" d="M12.736 3.264a.9.9 0 0 1 0 1.272L9.273 8l3.463 3.464a.9.9 0 0 1 .081 1.18l-.08.092a.9.9 0 0 1-1.273 0L8 9.273l-3.464 3.463a.9.9 0 0 1-1.272-1.272L6.727 8 3.264 4.536a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.272 0L8 6.727l3.464-3.463a.9.9 0 0 1 1.272 0" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/16/done_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Icon16Done});var Icon16Done=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Done","done_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="done_16"><path fill="currentColor" d="M13.743 3.756a.87.87 0 0 1 0 1.237l-7.317 7.25a.88.88 0 0 1-1.242 0L2.257 9.366a.87.87 0 0 1 0-1.237.88.88 0 0 1 1.242 0l2.306 2.261L12.5 3.756a.88.88 0 0 1 1.242 0" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/16/spinner_16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon16Spinner});var Icon16Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon16Spinner","spinner_16","0 0 16 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="spinner_16"><path fill-rule="evenodd" d="M8 3.25a4.75 4.75 0 0 0-4.149 7.065.75.75 0 1 1-1.31.732A6.25 6.25 0 1 1 8 14.25a.75.75 0 0 1 .001-1.5 4.75 4.75 0 1 0 0-9.5Z" clip-rule="evenodd" /></symbol>',16,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/chevron_left_outline_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Icon20ChevronLeftOutline});var Icon20ChevronLeftOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20ChevronLeftOutline","chevron_left_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="chevron_left_outline_20"><path fill="currentColor" fill-rule="evenodd" d="M12.526 4.217a.75.75 0 0 1 0 1.06L7.81 10l4.716 4.721a.75.75 0 1 1-1.061 1.06l-5.246-5.25a.75.75 0 0 1 0-1.061l5.246-5.252a.75.75 0 0 1 1.06-.001z" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/chevron_right_outline_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>Icon20ChevronRightOutline});var Icon20ChevronRightOutline=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20ChevronRightOutline","chevron_right_outline_20","0 0 20 20",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" id="chevron_right_outline_20"><path fill="currentColor" fill-rule="evenodd" d="M7.47 4.217a.75.75 0 0 0 0 1.06L12.185 10l-4.716 4.72a.75.75 0 1 0 1.062 1.06l5.245-5.25a.75.75 0 0 0 0-1.061L8.531 4.218a.75.75 0 0 0-1.061-.001" clip-rule="evenodd" /></symbol>',20,20,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/chevron_up_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Icon20ChevronUp});var Icon20ChevronUp=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20ChevronUp","chevron_up_20","0 0 20 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" id="chevron_up_20"><path fill-rule="evenodd" d="M15.78 11.125a1 1 0 0 1-1.405.156L10 7.78l-4.375 3.5a1 1 0 0 1-1.25-1.562l5-4a1 1 0 0 1 1.25 0l5 4a1 1 0 0 1 .156 1.406Z" clip-rule="evenodd" /></symbol>',20,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/20/dropdown_20.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Icon20Dropdown});var Icon20Dropdown=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon20Dropdown","dropdown_20","0 0 20 16",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16" id="dropdown_20"><path fill-rule="evenodd" d="M4.22 5.875a1 1 0 0 1 1.405-.156L10 9.22l4.375-3.5a1 1 0 0 1 1.25 1.562l-5 4a1 1 0 0 1-1.25 0l-5-4a1 1 0 0 1-.156-1.406Z" clip-rule="evenodd" /></symbol>',20,16,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_down_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Icon24ChevronDown});var Icon24ChevronDown=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ChevronDown","chevron_down_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_down_24"><path d="M12 13.698 6.64 9.232a1 1 0 0 0-1.28 1.536l6 5a1 1 0 0 0 1.28 0l6-5a1 1 0 1 0-1.28-1.536z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/chevron_up_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Icon24ChevronUp});var Icon24ChevronUp=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24ChevronUp","chevron_up_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="chevron_up_24"><path d="m12 10.302-5.36 4.466a1 1 0 1 1-1.28-1.536l6-5a1 1 0 0 1 1.28 0l6 5a1 1 0 1 1-1.28 1.536z" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/24/spinner_24.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Icon24Spinner});var Icon24Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon24Spinner","spinner_24","0 0 24 24",'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="spinner_24"><path fill="currentColor" fill-rule="evenodd" d="M16.394 5.077A8.2 8.2 0 0 0 4.58 15.49a.9.9 0 0 1-1.628.767A10 10 0 1 1 12 22a.9.9 0 0 1 0-1.8 8.2 8.2 0 0 0 4.394-15.123" clip-rule="evenodd" /></symbol>',24,24,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/32/spinner_32.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>Icon32Spinner});var Icon32Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon32Spinner","spinner_32","0 0 32 32",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="spinner_32"><path fill="currentColor" d="M16 32a1.5 1.5 0 0 1 0-3c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16c0 1.557.273 3.074.8 4.502A1.5 1.5 0 1 1 .986 21.54 16 16 0 0 1 0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16" /></symbol>',32,32,!1,void 0)},"../../node_modules/@vkontakte/icons/dist_es6/44/spinner_44.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Icon44Spinner});var Icon44Spinner=(0,__webpack_require__("../../node_modules/@vkontakte/icons-sprite/dist/index.js").mT)("Icon44Spinner","spinner_44","0 0 44 44",'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44"><path fill="currentColor" d="M22 44a1.5 1.5 0 0 1 0-3c10.493 0 19-8.507 19-19S32.493 3 22 3 3 11.507 3 22c0 2.208.376 4.363 1.103 6.397a1.5 1.5 0 1 1-2.825 1.01A22 22 0 0 1 0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22" /></symbol>',44,44,!1,void 0)},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Calendar/Calendar.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Calendar--zTx5x{background:var(--vkui--color_background_contrast_themed);border:.5px solid var(--vkui--color_separator_primary);border-radius:8px;box-shadow:var(--vkui--elevation1);box-sizing:border-box;display:flex;flex-direction:column;inline-size:305px;padding:12px}.Calendar__time--CmaHe{-webkit-border-before:1px solid var(--vkui--color_separator_primary);border-block-start:1px solid var(--vkui--color_separator_primary);margin-block:12px 0;margin-inline:-12px;padding-block:12px 0;padding-inline:12px}.Calendar__header--X9nkm{-webkit-margin-after:4px;margin-block-end:4px}.Calendar--size-s--Ywffx{inline-size:220px;padding:8px}.Calendar--size-s--Ywffx .Calendar__header--X9nkm{-webkit-margin-after:0;margin-block-end:0}","",{version:3,sources:["webpack://./src/components/Calendar/Calendar.module.css"],names:[],mappings:"AAAA,iBAGE,wDAAyD,CACzD,sDAAwD,CAGxD,iBAAkB,CADlB,kCAAmC,CADnC,qBAAsB,CAJtB,YAAa,CACb,qBAAsB,CAMtB,iBAAkB,CAClB,YACF,CAEA,uBACE,oEAAkE,CAAlE,iEAAkE,CAClE,mBAAoB,CACpB,mBAAoB,CACpB,oBAAqB,CACrB,mBACF,CAEA,yBACE,wBAAqB,CAArB,oBACF,CAEA,yBACE,iBAAkB,CAClB,WACF,CAEA,kDACE,sBAAmB,CAAnB,kBACF",sourcesContent:[".Calendar {\n  display: flex;\n  flex-direction: column;\n  background: var(--vkui--color_background_contrast_themed);\n  border: 0.5px solid var(--vkui--color_separator_primary);\n  box-sizing: border-box;\n  box-shadow: var(--vkui--elevation1);\n  border-radius: 8px;\n  inline-size: 305px;\n  padding: 12px;\n}\n\n.Calendar__time {\n  border-block-start: 1px solid var(--vkui--color_separator_primary);\n  margin-block: 12px 0;\n  margin-inline: -12px;\n  padding-block: 12px 0;\n  padding-inline: 12px;\n}\n\n.Calendar__header {\n  margin-block-end: 4px;\n}\n\n.Calendar--size-s {\n  inline-size: 220px;\n  padding: 8px;\n}\n\n.Calendar--size-s .Calendar__header {\n  margin-block-end: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Calendar:"Calendar--zTx5x",Calendar__time:"Calendar__time--CmaHe",Calendar__header:"Calendar__header--X9nkm","Calendar--size-s":"Calendar--size-s--Ywffx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CalendarTime/CalendarTime.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".CalendarTime--m0_Km{align-items:center;display:flex}.CalendarTime__picker--UXQ5i{inline-size:77px}.CalendarTime__divider--aqVbQ{color:var(--vkui--color_text_primary);font-family:var(--vkui--font_family_base);margin-inline:6px}.CalendarTime__button--wWQWx{-webkit-margin-start:auto;margin-inline-start:auto}","",{version:3,sources:["webpack://./src/components/CalendarTime/CalendarTime.module.css"],names:[],mappings:"AAAA,qBAEE,kBAAmB,CADnB,YAEF,CAEA,6BACE,gBACF,CAEA,8BAEE,qCAAsC,CACtC,yCAA0C,CAF1C,iBAGF,CAEA,6BACE,yBAAyB,CAAzB,wBACF",sourcesContent:[".CalendarTime {\n  display: flex;\n  align-items: center;\n}\n\n.CalendarTime__picker {\n  inline-size: 77px;\n}\n\n.CalendarTime__divider {\n  margin-inline: 6px;\n  color: var(--vkui--color_text_primary);\n  font-family: var(--vkui--font_family_base);\n}\n\n.CalendarTime__button {\n  margin-inline-start: auto;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={CalendarTime:"CalendarTime--m0_Km",CalendarTime__picker:"CalendarTime__picker--UXQ5i",CalendarTime__divider:"CalendarTime__divider--aqVbQ",CalendarTime__button:"CalendarTime__button--wWQWx"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/Calendar/Calendar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Calendar});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),es6=__webpack_require__("../../node_modules/@vkontakte/vkjs/lib/es6/index.js"),isSameMonth=__webpack_require__("../../node_modules/date-fns/isSameMonth.mjs"),isSameDay=__webpack_require__("../../node_modules/date-fns/isSameDay.mjs"),useCalendar=__webpack_require__("./src/hooks/useCalendar.ts"),calendar=__webpack_require__("./src/lib/calendar.ts"),useIsomorphicLayoutEffect=__webpack_require__("./src/lib/useIsomorphicLayoutEffect.ts"),warnOnce=__webpack_require__("./src/lib/warnOnce.ts"),CalendarDays=__webpack_require__("./src/components/CalendarDays/CalendarDays.tsx"),CalendarHeader=__webpack_require__("./src/components/CalendarHeader/CalendarHeader.tsx"),toDate=__webpack_require__("../../node_modules/date-fns/toDate.mjs");function setHours(date,hours){const _date=(0,toDate.a)(date);return _date.setHours(hours),_date}function setMinutes(date,minutes){const _date=(0,toDate.a)(date);return _date.setMinutes(minutes),_date}var AdaptivityProvider=__webpack_require__("./src/components/AdaptivityProvider/AdaptivityProvider.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),CustomSelect=__webpack_require__("./src/components/CustomSelect/CustomSelect.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),singletonStyleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js"),singletonStyleDomAPI_default=__webpack_require__.n(singletonStyleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithAttributesAndNonce=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js"),setAttributesWithAttributesAndNonce_default=__webpack_require__.n(setAttributesWithAttributesAndNonce),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),CalendarTime_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/CalendarTime/CalendarTime.module.css"),options={attributes:{class:"vkui-style"}};options.setAttributes=setAttributesWithAttributesAndNonce_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=singletonStyleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(CalendarTime_module.A,options);const CalendarTime_CalendarTime_module=CalendarTime_module.A&&CalendarTime_module.A.locals?CalendarTime_module.A.locals:void 0,hours=[];for(let i=0;i<24;i+=1)hours.push({value:i,label:String(i).padStart(2,"0")});const minutes=[];for(let i=0;i<60;i+=1)minutes.push({value:i,label:String(i).padStart(2,"0")});const CalendarTime=({value,doneButtonText="Готово",onChange,onClose,changeHoursLabel,changeMinutesLabel,isDayDisabled})=>{const localHours=isDayDisabled?hours.map((hour=>({...hour,disabled:isDayDisabled(setHours(value,hour.value),!0)}))):hours,localMinutes=isDayDisabled?minutes.map((minute=>({...minute,disabled:isDayDisabled(setMinutes(value,minute.value),!0)}))):minutes,onHoursChange=react.useCallback((event=>onChange?.(setHours(value,Number(event.target.value)))),[onChange,value]),onMinutesChange=react.useCallback((event=>onChange?.(setMinutes(value,Number(event.target.value)))),[onChange,value]);return(0,jsx_runtime.jsxs)("div",{className:CalendarTime_CalendarTime_module.CalendarTime,children:[(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__picker,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(CustomSelect.A,{value:value.getHours(),options:localHours,onChange:onHoursChange,forceDropdownPortal:!1,"aria-label":changeHoursLabel})})}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__divider,children:":"}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__picker,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(CustomSelect.A,{value:value.getMinutes(),options:localMinutes,onChange:onMinutesChange,forceDropdownPortal:!1,"aria-label":changeMinutesLabel})})}),(0,jsx_runtime.jsx)("div",{className:CalendarTime_CalendarTime_module.CalendarTime__button,children:(0,jsx_runtime.jsx)(AdaptivityProvider.Z,{sizeY:"compact",children:(0,jsx_runtime.jsx)(Button.$,{mode:"secondary",onClick:onClose,size:"l",children:doneButtonText})})})]})};try{CalendarTime.displayName="CalendarTime",CalendarTime.__docgenInfo={description:"",displayName:"CalendarTime",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"Date"}},doneButtonText:{defaultValue:{value:"Готово"},description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeHoursLabel:{defaultValue:null,description:"",name:"changeHoursLabel",required:!1,type:{name:"string"}},changeMinutesLabel:{defaultValue:null,description:"",name:"changeMinutesLabel",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: Date) => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isDayDisabled:{defaultValue:null,description:"",name:"isDayDisabled",required:!1,type:{name:"((day: Date, withTime?: boolean) => boolean)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CalendarTime/CalendarTime.tsx#CalendarTime"]={docgenInfo:CalendarTime.__docgenInfo,name:"CalendarTime",path:"src/components/CalendarTime/CalendarTime.tsx#CalendarTime"})}catch(__react_docgen_typescript_loader_error){}var RootComponent=__webpack_require__("./src/components/RootComponent/RootComponent.tsx"),Calendar_module=__webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[14].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[14].use[2]!./src/components/Calendar/Calendar.module.css"),Calendar_module_options={attributes:{class:"vkui-style"}};Calendar_module_options.setAttributes=setAttributesWithAttributesAndNonce_default(),Calendar_module_options.insert=insertBySelector_default().bind(null,"head"),Calendar_module_options.domAPI=singletonStyleDomAPI_default(),Calendar_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Calendar_module.A,Calendar_module_options);const Calendar_Calendar_module=Calendar_module.A&&Calendar_module.A.locals?Calendar_module.A.locals:void 0,Calendar=((0,warnOnce.m)("Calendar"),({value,onChange,disablePast,disableFuture,shouldDisableDate,onClose,enableTime=!1,doneButtonText,weekStartsOn=1,disablePickers,changeHoursLabel="Изменить час",changeMinutesLabel="Изменить минуту",prevMonthLabel="Предыдущий месяц",nextMonthLabel="Следующий месяц",changeMonthLabel="Изменить месяц",changeYearLabel="Изменить год",showNeighboringMonth,changeDayLabel="Изменить день",size="m",viewDate:externalViewDate,onHeaderChange,onNextMonth,onPrevMonth,prevMonthIcon,nextMonthIcon,prevMonthProps,nextMonthProps,dayProps,listenDayChangesForUpdate,renderDayContent,minDateTime,maxDateTime,...props})=>{const{viewDate,setViewDate,setPrevMonth,setNextMonth,focusedDay,setFocusedDay,isDayFocused,isDayDisabled,resetSelectedDay,isMonthDisabled,isYearDisabled}=(0,useCalendar._)({value,disableFuture,disablePast,shouldDisableDate,onHeaderChange,onNextMonth,onPrevMonth,minDateTime,maxDateTime});(0,useIsomorphicLayoutEffect.E)((()=>{value&&setViewDate(value)}),[value]);const handleKeyDown=react.useCallback((event=>{["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(event.key)&&event.preventDefault();const newFocusedDay=(0,calendar.ul)(focusedDay??value,event.key);newFocusedDay&&!(0,isSameMonth.t)(newFocusedDay,viewDate)&&setViewDate(newFocusedDay),setFocusedDay(newFocusedDay)}),[focusedDay,setFocusedDay,setViewDate,value,viewDate]),onDayChange=react.useCallback((date=>{let actualDate=(0,calendar.mf)(date,value);(minDateTime||maxDateTime)&&(actualDate=(0,calendar.qE)(actualDate,{min:minDateTime,max:maxDateTime})),onChange?.(actualDate)}),[value,onChange,maxDateTime,minDateTime]),isDayActive=react.useCallback((day=>Boolean(value&&(0,isSameDay.r)(day,value))),[value]);return(0,jsx_runtime.jsxs)(RootComponent.I,{...props,baseClassName:(0,es6.xW)(Calendar_Calendar_module.Calendar,"s"===size&&Calendar_Calendar_module["Calendar--size-s"]),children:[(0,jsx_runtime.jsx)(CalendarHeader.M,{viewDate:externalViewDate||viewDate,onChange:setViewDate,onNextMonth:setNextMonth,onPrevMonth:setPrevMonth,disablePickers:disablePickers||"s"===size,className:Calendar_Calendar_module.Calendar__header,prevMonthLabel,nextMonthLabel,changeMonthLabel,changeYearLabel,prevMonthIcon,nextMonthIcon,prevMonthProps,nextMonthProps,isMonthDisabled,isYearDisabled}),(0,jsx_runtime.jsx)(CalendarDays.A,{viewDate:externalViewDate||viewDate,value,weekStartsOn,isDayFocused,tabIndex:0,"aria-label":changeDayLabel,onKeyDown:handleKeyDown,onDayChange,isDayActive,isDaySelectionStart:calendar.vP,isDaySelectionEnd:calendar.pE,isDayDisabled,onBlur:resetSelectedDay,showNeighboringMonth,size,dayProps,listenDayChangesForUpdate,renderDayContent}),enableTime&&value&&"s"!==size&&(0,jsx_runtime.jsx)("div",{className:Calendar_Calendar_module.Calendar__time,children:(0,jsx_runtime.jsx)(CalendarTime,{value,onChange,onClose,doneButtonText,changeHoursLabel,changeMinutesLabel,isDayDisabled:minDateTime||maxDateTime?isDayDisabled:void 0})})]})});try{Calendar.displayName="Calendar",Calendar.__docgenInfo={description:"",displayName:"Calendar",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},disablePast:{defaultValue:null,description:"Запрещает выбор даты в прошлом.\nПрименяется, если не заданы `shouldDisableDate` и `disableFuture`.",name:"disablePast",required:!1,type:{name:"boolean"}},disableFuture:{defaultValue:null,description:"Запрещает выбор даты в будущем.\nПрименяется, если не задано `shouldDisableDate`.",name:"disableFuture",required:!1,type:{name:"boolean"}},enableTime:{defaultValue:{value:"false"},description:"",name:"enableTime",required:!1,type:{name:"boolean"}},disablePickers:{defaultValue:null,description:"",name:"disablePickers",required:!1,type:{name:"boolean"}},doneButtonText:{defaultValue:null,description:"",name:"doneButtonText",required:!1,type:{name:"string"}},changeDayLabel:{defaultValue:{value:"Изменить день"},description:"",name:"changeDayLabel",required:!1,type:{name:"string"}},weekStartsOn:{defaultValue:{value:"1"},description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},showNeighboringMonth:{defaultValue:null,description:"",name:"showNeighboringMonth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"m"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: Date) => void)"}},shouldDisableDate:{defaultValue:null,description:"Позволяет запретить выбор даты.",name:"shouldDisableDate",required:!1,type:{name:"((value: Date) => boolean)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},viewDate:{defaultValue:null,description:"Дата отображаемого месяца.\nПри использовании обновление даты должно происходить вне компонента.",name:"viewDate",required:!1,type:{name:"Date"}},onHeaderChange:{defaultValue:null,description:"Изменение даты в шапке календаря.",name:"onHeaderChange",required:!1,type:{name:"((value: Date) => void)"}},minDateTime:{defaultValue:null,description:"Минимальные дата и время, которые можно выбрать\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"minDateTime",required:!1,type:{name:"Date"}},maxDateTime:{defaultValue:null,description:"Максимальные дата и время, которые можно выбрать.\nПрименяется, если не заданы `shouldDisableDate` и `disablePast`/`disableFuture`.",name:"maxDateTime",required:!1,type:{name:"Date"}},getRootRef:{defaultValue:null,description:"",name:"getRootRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},changeHoursLabel:{defaultValue:{value:"Изменить час"},description:"",name:"changeHoursLabel",required:!1,type:{name:"string"}},changeMinutesLabel:{defaultValue:{value:"Изменить минуту"},description:"",name:"changeMinutesLabel",required:!1,type:{name:"string"}},prevMonthLabel:{defaultValue:{value:"Предыдущий месяц"},description:"",name:"prevMonthLabel",required:!1,type:{name:"string"}},nextMonthLabel:{defaultValue:{value:"Следующий месяц"},description:"",name:"nextMonthLabel",required:!1,type:{name:"string"}},changeMonthLabel:{defaultValue:{value:"Изменить месяц"},description:"",name:"changeMonthLabel",required:!1,type:{name:"string"}},changeYearLabel:{defaultValue:{value:"Изменить год"},description:"",name:"changeYearLabel",required:!1,type:{name:"string"}},prevMonthIcon:{defaultValue:null,description:"",name:"prevMonthIcon",required:!1,type:{name:"ReactNode"}},nextMonthIcon:{defaultValue:null,description:"",name:"nextMonthIcon",required:!1,type:{name:"ReactNode"}},onNextMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на следующий месяц.",name:"onNextMonth",required:!1,type:{name:"(() => void)"}},onPrevMonth:{defaultValue:null,description:"Нажатие на кнопку переключения на предыдущий месяц.",name:"onPrevMonth",required:!1,type:{name:"(() => void)"}},prevMonthProps:{defaultValue:null,description:"",name:"prevMonthProps",required:!1,type:{name:"ArrowMonthProps"}},nextMonthProps:{defaultValue:null,description:"",name:"nextMonthProps",required:!1,type:{name:"ArrowMonthProps"}},renderDayContent:{defaultValue:null,description:"",name:"renderDayContent",required:!1,type:{name:"((day: Date) => ReactNode)"}},listenDayChangesForUpdate:{defaultValue:null,description:"",name:"listenDayChangesForUpdate",required:!1,type:{name:"boolean"}},dayProps:{defaultValue:null,description:"",name:"dayProps",required:!1,type:{name:"CalendarDayElementProps"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Calendar/Calendar.tsx#Calendar"]={docgenInfo:Calendar.__docgenInfo,name:"Calendar",path:"src/components/Calendar/Calendar.tsx#Calendar"})}catch(__react_docgen_typescript_loader_error){}}}]);