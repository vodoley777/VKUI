"use strict";(self.webpackChunk_vkontakte_vkui=self.webpackChunk_vkontakte_vkui||[]).push([[1863],{"../../node_modules/@swc/helpers/esm/_array_like_to_array.js":function(e,t,n){n.d(t,{F:function(){return r}});function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}},"../../node_modules/@swc/helpers/esm/_async_to_generator.js":function(e,t,n){function r(e,t,n,r,o,i,s){try{var u=e[i](s),a=u.value}catch(e){n(e);return}u.done?t(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var s=e.apply(t,n);function u(e){r(s,o,i,u,a,"next",e)}function a(e){r(s,o,i,u,a,"throw",e)}u(void 0)})}}n.d(t,{_:function(){return o}})},"../../node_modules/@swc/helpers/esm/_object_without_properties.js":function(e,t,n){n.d(t,{_:function(){return r}});function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},"../../node_modules/@swc/helpers/esm/_sliced_to_array.js":function(e,t,n){n.d(t,{_:function(){return o}});var r=n("../../node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],s=!0,u=!1;try{for(o=o.call(e);!(s=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(u)throw r}}return i}}(e,t)||(0,r.N)(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/@swc/helpers/esm/_to_consumable_array.js":function(e,t,n){n.d(t,{_:function(){return i}});var r=n("../../node_modules/@swc/helpers/esm/_array_like_to_array.js"),o=n("../../node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js");function i(e){return function(e){if(Array.isArray(e))return(0,r.F)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.N)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"../../node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js":function(e,t,n){n.d(t,{N:function(){return o}});var r=n("../../node_modules/@swc/helpers/esm/_array_like_to_array.js");function o(e,t){if(e){if("string"==typeof e)return(0,r.F)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return(0,r.F)(e,t)}}},"../../node_modules/@vkontakte/icons-sprite/dist/index.js":function(e,t,n){n.d(t,{De:function(){return g}});var r,o=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),u=n("../../node_modules/react/index.js"),a=n("../../node_modules/@swc/helpers/esm/_class_call_check.js"),l=n("../../node_modules/@swc/helpers/esm/_create_class.js"),c=n("../../node_modules/@swc/helpers/esm/_define_property.js"),f=function(){function e(t){var n=t.content;(0,a._)(this,e),(0,c._)(this,"isMounted",!1),(0,c._)(this,"node",void 0),this.node=function(e){var t=!!document.importNode,n=new DOMParser().parseFromString(e,"image/svg+xml").documentElement;return t?document.importNode(n,!0):n}(n)}return(0,l._)(e,[{key:"id",get:function(){return this.node.id}},{key:"mount",value:function(e){return this.isMounted||(this.isMounted=!0,e.appendChild(this.node)),this.node}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&(this.node.parentNode.removeChild(this.node),this.isMounted=!1)}}],[{key:"createFromExistingNode",value:function(t){var n=new e({content:""});return n.node=t,n}}]),e}(),d="http://www.w3.org/2000/svg",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a._)(this,e),(0,c._)(this,"symbols",new Map),(0,c._)(this,"config",{attrs:{xmlns:d,"xmlns:xlink":"http://www.w3.org/1999/xlink",style:"position:absolute;width:0;height:0","aria-hidden":"true"}}),(0,c._)(this,"node",null),Object.assign(this.config.attrs,t.attrs)}return(0,l._)(e,[{key:"push",value:function(e){var t=this.symbols,n=t.has(e.id);return t.set(e.id,e),!n}},{key:"add",value:function(e){var t=this.push(e);return this.node&&t&&e.mount(this.node),t}},{key:"attach",value:function(e){var t=this;this.node||(this.node=e,this.symbols.forEach(function(t){t.mount(e)}),e.querySelectorAll("symbol").forEach(function(e){var n=f.createFromExistingNode(e);t.add(n)}))}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.node||(this.node=this.render(),t&&e.childNodes[0]?e.insertBefore(this.node,e.firstChild):e.appendChild(this.node)),this.node}},{key:"render",value:function(){var e=document.createElementNS(d,"svg");return Object.entries(this.config.attrs).forEach(function(t){return e.setAttribute(t[0],t[1])}),this.symbols.forEach(function(t){return e.appendChild(t.node)}),e}},{key:"unmount",value:function(){this.node&&this.node.parentNode&&this.node.parentNode.removeChild(this.node)}}]),e}(),h=!!("undefined"!=typeof window&&window.document&&window.document.createElement);if(h){var p="__SVG_SPRITE_NODE__";r=new m({attrs:{id:p}});var v=function(){var e=document.getElementById(p);e?r.attach(e):r.mount(document.body),document.removeEventListener("DOMContentLoaded",v)};document.querySelector("body")?v():document.addEventListener("DOMContentLoaded",v)}else r=null;var y=h?u.useLayoutEffect:u.useEffect,_=function(e){var t=e.width,n=void 0===t?0:t,r=e.height,a=void 0===r?0:r,l=e.viewBox,c=e.id,f=e.className,d=e.fill,m=e.getRootRef,h=e.style,p=e.title,v=e.children,y=(0,s._)(e,["width","height","viewBox","id","className","fill","getRootRef","style","title","children"]),_=Math.max(n,a),g=(0,o._)({width:n,height:a},void 0===h?{}:h);return u.createElement("svg",(0,i._)((0,o._)({"aria-hidden":"true",display:"block"},y),{className:["vkuiIcon","vkuiIcon--".concat(_),"vkuiIcon--w-".concat(n),"vkuiIcon--h-".concat(a),"vkuiIcon--".concat(c),void 0===f?"":f].join(" ").trim(),viewBox:l,width:n,height:a,style:g,ref:m}),p&&u.createElement("title",null,p),u.createElement("use",{xlinkHref:"#".concat(c),style:{fill:"currentColor",color:d}},v))};function g(e,t,n,s,a,l,c,d){var m=function(){h||(!function(e){r&&r.add(e)}(new f({content:s})),h=!0)},h=!1,p=function(e){var t={};return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warn";t[n]||(console[r]("[@vkontakte/icons][".concat(e,"] ").concat(n)),t[n]=!0)}}(e),v=function(e){return y(m,[]),c&&p("Иконка устарела"+(d?". Замените на ".concat(d):"")),u.createElement(_,(0,i._)((0,o._)({},e),{viewBox:n,id:t,width:void 0===e.width||isNaN(e.width)?a:+e.width,height:void 0===e.height||isNaN(e.height)?l:+e.height}))};return v.mountIcon=m,v.displayName=e,v}},"../../node_modules/@vkontakte/vkui-floating-ui/core/dist/floating-ui.core.esm.js":function(e,t,n){n.d(t,{Cp:function(){return w},RR:function(){return y},X5:function(){return v},cv:function(){return x},dp:function(){return j},oo:function(){return d},uY:function(){return k},x7:function(){return p}});var r=n("../../node_modules/@swc/helpers/esm/_async_to_generator.js"),o=n("../../node_modules/@swc/helpers/esm/_define_property.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),s=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),u=n("../../node_modules/@swc/helpers/esm/_object_without_properties.js"),a=n("../../node_modules/@swc/helpers/esm/_to_consumable_array.js"),l=n("../../node_modules/tslib/tslib.es6.mjs"),c=n("../../node_modules/@vkontakte/vkui-floating-ui/utils/dist/floating-ui.utils.esm.js");function f(e,t,n){var r,o=e.reference,i=e.floating,s=(0,c.Qq)(t),u=(0,c.Wh)(t),a=(0,c.I4)(u),l=(0,c.k3)(t),f="y"===s,d=o.x+o.width/2-i.width/2,m=o.y+o.height/2-i.height/2,h=o[a]/2-i[a]/2;switch(l){case"top":r={x:d,y:o.y-i.height};break;case"bottom":r={x:d,y:o.y+o.height};break;case"right":r={x:o.x+o.width,y:m};break;case"left":r={x:o.x-i.width,y:m};break;default:r={x:o.x,y:o.y}}switch((0,c.hp)(t)){case"start":r[u]-=h*(n&&f?-1:1);break;case"end":r[u]+=h*(n&&f?-1:1)}return r}var d=function(){var e=(0,r._)(function(e,t,n){var r,u,a,c,d,m,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return u=void 0===(r=n.placement)?"bottom":r,c=void 0===(a=n.strategy)?"absolute":a,m=void 0===(d=n.middleware)?[]:d,h=n.platform,p=m.filter(Boolean),[4,null==h.isRTL?void 0:h.isRTL(t)];case 1:return v=l.sent(),[4,h.getElementRects({reference:e,floating:t,strategy:c})];case 2:g=(_=f(y=l.sent(),u,v)).x,w=_.y,b=u,x={},k=0,j=0,l.label=3;case 3:if(!(j<p.length))return[3,11];return E=(R=p[j]).name,[4,(0,R.fn)({x:g,y:w,initialPlacement:u,placement:b,strategy:c,middlewareData:x,rects:y,platform:h,elements:{reference:e,floating:t}})];case 4:if(O=(A=l.sent()).x,F=A.y,P=A.data,L=A.reset,g=null!=O?O:g,w=null!=F?F:w,x=(0,s._)((0,i._)({},x),(0,o._)({},E,(0,i._)({},x[E],P))),!(L&&k<=50))return[3,10];if(k++,"object"!=typeof L)return[3,9];if(L.placement&&(b=L.placement),!L.rects)return[3,8];if(!0!==L.rects)return[3,6];return[4,h.getElementRects({reference:e,floating:t,strategy:c})];case 5:return S=l.sent(),[3,7];case 6:S=L.rects,l.label=7;case 7:y=S,l.label=8;case 8:g=(D=f(y,b,v)).x,w=D.y,l.label=9;case 9:return j=-1,[3,10];case 10:return j++,[3,3];case 11:return[2,{x:g,y:w,placement:b,strategy:c,middlewareData:x}]}})});return function(t,n,r){return e.apply(this,arguments)}}();function m(e,t){return h.apply(this,arguments)}function h(){return(h=(0,r._)(function(e,t){var n,r,o,u,a,f,d,m,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T,C,N,M;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return void 0===t&&(t={}),r=e.x,o=e.y,u=e.platform,a=e.rects,f=e.elements,d=e.strategy,p=void 0===(h=(m=(0,c.ku)(t,e)).boundary)?"clippingAncestors":h,y=void 0===(v=m.rootBoundary)?"viewport":v,g=void 0===(_=m.elementContext)?"floating":_,b=void 0!==(w=m.altBoundary)&&w,k=void 0===(x=m.padding)?0:x,j=(0,c.yd)(k),R="floating"===g?"reference":"floating",E=f[b?R:g],O=u.getClippingRect,F={},[4,null==u.isElement?void 0:u.isElement(E)];case 1:if(!(null==(n=l.sent())||n))return[3,2];return P=E,[3,5];case 2:if(L=E.contextElement)return[3,4];return[4,null==u.getDocumentElement?void 0:u.getDocumentElement(f.floating)];case 3:L=l.sent(),l.label=4;case 4:P=L,l.label=5;case 5:return[4,O.apply(u,[(F.element=P,F.boundary=p,F.rootBoundary=y,F.strategy=d,F)])];case 6:return A=c.JB.apply(void 0,[l.sent()]),S="floating"===g?(0,s._)((0,i._)({},a.floating),{x:r,y:o}):a.reference,[4,null==u.getOffsetParent?void 0:u.getOffsetParent(f.floating)];case 7:return D=l.sent(),[4,null==u.isElement?void 0:u.isElement(D)];case 8:if(!l.sent())return[3,10];return[4,null==u.getScale?void 0:u.getScale(D)];case 9:return C=l.sent()||{x:1,y:1},[3,11];case 10:C={x:1,y:1},l.label=11;case 11:if(T=C,!u.convertOffsetParentRelativeRectToViewportRelativeRect)return[3,13];return[4,u.convertOffsetParentRelativeRectToViewportRelativeRect({rect:S,offsetParent:D,strategy:d})];case 12:return M=l.sent(),[3,14];case 13:M=S,l.label=14;case 14:return N=c.JB.apply(void 0,[M]),[2,{top:(A.top-N.top+j.top)/T.y,bottom:(N.bottom-A.bottom+j.bottom)/T.y,left:(A.left-N.left+j.left)/T.x,right:(N.right-A.right+j.right)/T.x}]}})})).apply(this,arguments)}var p=function(e){return{name:"arrow",options:e,fn:function(t){return(0,r._)(function(){var n,r,s,u,a,f,d,m,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T,C,N,M,J,V,B,I,W;return(0,l.Jh)(this,function(l){switch(l.label){case 0:if(n=t.x,r=t.y,s=t.placement,u=t.rects,a=t.platform,f=t.elements,d=t.middlewareData,h=(m=(0,c.ku)(e,t)||{}).element,v=void 0===(p=m.padding)?0:p,null==h)return[2,{}];return y=(0,c.yd)(v),_={x:n,y:r},g=(0,c.Wh)(s),w=(0,c.I4)(g),[4,a.getDimensions(h)];case 1:return b=l.sent(),k=(x="y"===g)?"top":"left",j=x?"bottom":"right",R=x?"clientHeight":"clientWidth",E=u.reference[w]+u.reference[g]-_[g]-u.floating[w],A=_[g]-u.reference[g],[4,null==a.getOffsetParent?void 0:a.getOffsetParent(h)];case 2:if(P=!(F=(O=l.sent())?O[R]:0))return[3,4];return[4,null==a.isElement?void 0:a.isElement(O)];case 3:P=!l.sent(),l.label=4;case 4:return P&&(F=f.floating[R]||u.floating[w]),L=E/2-A/2,S=F/2-b[w]/2-1,D=(0,c.VV)(y[k],S),T=(0,c.VV)(y[j],S),C=D,N=F-b[w]-T,M=F/2-b[w]/2+L,J=(0,c.uZ)(C,M,N),B=(V=!d.arrow&&null!=(0,c.hp)(s)&&M!=J&&u.reference[w]/2-(M<C?D:T)-b[w]/2<0)?M<C?M-C:M-N:0,[2,(W={},(0,o._)(W,g,_[g]+B),(0,o._)(W,"data",(0,i._)((I={},(0,o._)(I,g,J),(0,o._)(I,"centerOffset",M-J-B),I),V&&{alignmentOffset:B})),(0,o._)(W,"reset",V),W)]}})})()}}},v=function(e){return void 0===e&&(e={}),{name:"autoPlacement",options:e,fn:function(t){return(0,r._)(function(){var n,r,o,i,s,f,d,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return i=t.rects,s=t.middlewareData,f=t.placement,d=t.platform,h=t.elements,y=void 0!==(v=(p=(0,c.ku)(e,t)).crossAxis)&&v,_=p.alignment,w=void 0===(g=p.allowedPlacements)?c.Ct:g,x=void 0===(b=p.autoAlignment)||b,k=(0,u._)(p,["crossAxis","alignment","allowedPlacements","autoAlignment"]),j=void 0!==_||w===c.Ct?function(e,t,n){return(e?(0,a._)(n.filter(function(t){return(0,c.hp)(t)===e})).concat((0,a._)(n.filter(function(t){return(0,c.hp)(t)!==e}))):n.filter(function(e){return(0,c.k3)(e)===e})).filter(function(n){return!e||(0,c.hp)(n)===e||!!t&&(0,c.Go)(n)!==n})}(_||null,x,w):w,[4,m(t,k)];case 1:if(R=l.sent(),null==(A=j[E=(null==(n=s.autoPlacement)?void 0:n.index)||0]))return[2,{}];return F=[A,i],[4,null==d.isRTL?void 0:d.isRTL(h.floating)];case 2:if(O=c.i8.apply(void 0,F.concat([l.sent()])),f!==A)return[2,{reset:{placement:j[0]}}];if(P=[R[(0,c.k3)(A)],R[O[0]],R[O[1]]],L=(0,a._)((null==(r=s.autoPlacement)?void 0:r.overflows)||[]).concat([{placement:A,overflows:P}]),S=j[E+1])return[2,{data:{index:E+1,overflows:L},reset:{placement:S}}];if((T=(null==(o=(D=L.map(function(e){var t=(0,c.hp)(e.placement);return[e.placement,t&&y?e.overflows.slice(0,2).reduce(function(e,t){return e+t},0):e.overflows[0],e.overflows]}).sort(function(e,t){return e[1]-t[1]})).filter(function(e){return e[2].slice(0,(0,c.hp)(e[0])?2:3).every(function(e){return e<=0})})[0])?void 0:o[0])||D[0][0])!==f)return[2,{data:{index:E+1,overflows:L},reset:{placement:T}}];return[2,{}]}})})()}}},y=function(e){return void 0===e&&(e={}),{name:"flip",options:e,fn:function(t){return(0,r._)(function(){var n,r,o,i,s,f,d,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T,C,N,M,J,V,B,I,W,z,H;return(0,l.Jh)(this,function(l){switch(l.label){case 0:if(o=t.placement,i=t.middlewareData,s=t.rects,f=t.initialPlacement,d=t.platform,h=t.elements,y=void 0===(v=(p=(0,c.ku)(e,t)).mainAxis)||v,g=void 0===(_=p.crossAxis)||_,w=p.fallbackPlacements,x=void 0===(b=p.fallbackStrategy)?"bestFit":b,j=void 0===(k=p.fallbackAxisSideDirection)?"none":k,E=void 0===(R=p.flipAlignment)||R,A=(0,u._)(p,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),null!=(n=i.arrow)&&n.alignmentOffset)return[2,{}];return O=(0,c.k3)(o),F=(0,c.k3)(f)===f,[4,null==d.isRTL?void 0:d.isRTL(h.floating)];case 1:return P=l.sent(),L=w||(F||!E?[(0,c.pw)(f)]:(0,c.gy)(f)),w||"none"===j||(S=L).push.apply(S,(0,a._)((0,c.KX)(f,E,j,P))),D=[f].concat((0,a._)(L)),[4,m(t,A)];case 2:if(T=l.sent(),C=[],N=(null==(r=i.flip)?void 0:r.overflows)||[],y&&C.push(T[O]),g&&(M=(0,c.i8)(o,s,P),C.push(T[M[0]],T[M[1]])),N=(0,a._)(N).concat([{placement:o,overflows:C}]),!C.every(function(e){return e<=0})){if(I=D[B=((null==(J=i.flip)?void 0:J.index)||0)+1])return[2,{data:{index:B,overflows:N},reset:{placement:I}}];if(!(W=null==(V=N.filter(function(e){return e.overflows[0]<=0}).sort(function(e,t){return e.overflows[1]-t.overflows[1]})[0])?void 0:V.placement))switch(x){case"bestFit":(H=null==(z=N.map(function(e){return[e.placement,e.overflows.filter(function(e){return e>0}).reduce(function(e,t){return e+t},0)]}).sort(function(e,t){return e[1]-t[1]})[0])?void 0:z[0])&&(W=H);break;case"initialPlacement":W=f}if(o!==W)return[2,{reset:{placement:W}}]}return[2,{}]}})})()}}};function _(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function g(e){return c.mA.some(function(t){return e[t]>=0})}var w=function(e){return void 0===e&&(e={}),{name:"hide",options:e,fn:function(t){return(0,r._)(function(){var n,r,o,a,f,d,h;return(0,l.Jh)(this,function(l){switch(l.label){case 0:switch(n=t.rects,a=void 0===(o=(r=(0,c.ku)(e,t)).strategy)?"referenceHidden":o,f=(0,u._)(r,["strategy"]),a){case"referenceHidden":return[3,1];case"escaped":return[3,3]}return[3,5];case 1:return[4,m(t,(0,s._)((0,i._)({},f),{elementContext:"reference"}))];case 2:return[2,{data:{referenceHiddenOffsets:d=_(l.sent(),n.reference),referenceHidden:g(d)}}];case 3:return[4,m(t,(0,s._)((0,i._)({},f),{altBoundary:!0}))];case 4:return[2,{data:{escapedOffsets:h=_(l.sent(),n.floating),escaped:g(h)}}];case 5:return[2,{}];case 6:return[2]}})})()}}};function b(){return(b=(0,r._)(function(e,t){var n,r,o,s,u,a,f,d,m,h,p,v,y,_;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return n=e.placement,r=e.platform,o=e.elements,[4,null==r.isRTL?void 0:r.isRTL(o.floating)];case 1:return s=l.sent(),u=(0,c.k3)(n),a=(0,c.hp)(n),f="y"===(0,c.Qq)(n),d=["left","top"].includes(u)?-1:1,m=s&&f?-1:1,v=(p="number"==typeof(h=(0,c.ku)(t,e))?{mainAxis:h,crossAxis:0,alignmentAxis:null}:(0,i._)({mainAxis:0,crossAxis:0,alignmentAxis:null},h)).mainAxis,y=p.crossAxis,_=p.alignmentAxis,a&&"number"==typeof _&&(y="end"===a?-1*_:_),[2,f?{x:y*m,y:v*d}:{x:v*d,y:y*m}]}})})).apply(this,arguments)}var x=function(e){return void 0===e&&(e=0),{name:"offset",options:e,fn:function(t){return(0,r._)(function(){var n,r,o;return(0,l.Jh)(this,function(i){switch(i.label){case 0:return n=t.x,r=t.y,[4,function(e,t){return b.apply(this,arguments)}(t,e)];case 1:return o=i.sent(),[2,{x:n+o.x,y:r+o.y,data:o}]}})})()}}},k=function(e){return void 0===e&&(e={}),{name:"shift",options:e,fn:function(t){return(0,r._)(function(){var n,r,a,f,d,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T,C;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return n=t.x,r=t.y,a=t.placement,h=void 0===(d=(f=(0,c.ku)(e,t)).mainAxis)||d,v=void 0!==(p=f.crossAxis)&&p,_=void 0===(y=f.limiter)?{fn:function(e){return{x:e.x,y:e.y}}}:y,g=(0,u._)(f,["mainAxis","crossAxis","limiter"]),w={x:n,y:r},[4,m(t,g)];case 1:return b=l.sent(),x=(0,c.Qq)((0,c.k3)(a)),j=w[k=(0,c.Rn)(x)],R=w[x],h&&(E="y"===k?"top":"left",A="y"===k?"bottom":"right",O=j+b[E],F=j-b[A],j=(0,c.uZ)(O,j,F)),v&&(P="y"===x?"top":"left",L="y"===x?"bottom":"right",S=R+b[P],D=R-b[L],R=(0,c.uZ)(S,R,D)),C=_.fn((0,s._)((0,i._)({},t),(T={},(0,o._)(T,k,j),(0,o._)(T,x,R),T))),[2,(0,s._)((0,i._)({},C),{data:{x:C.x-n,y:C.y-r}})]}})})()}}},j=function(e){return void 0===e&&(e={}),{name:"size",options:e,fn:function(t){return(0,r._)(function(){var n,r,o,a,f,d,h,p,v,y,_,g,w,b,x,k,j,R,E,A,O,F,P,L,S,D,T,C;return(0,l.Jh)(this,function(l){switch(l.label){case 0:return n=t.placement,r=t.rects,o=t.platform,a=t.elements,h=void 0===(d=(f=(0,c.ku)(e,t)).apply)?function(){}:d,[4,m(t,(0,u._)(f,["apply"]))];case 1:if(p=l.sent(),v=(0,c.k3)(n),y=(0,c.hp)(n),_="y"===(0,c.Qq)(n),w=(g=r.floating).width,b=g.height,!("top"===v||"bottom"===v))return[3,3];return x=v,[4,null==o.isRTL?void 0:o.isRTL(a.floating)];case 2:return k=y===(l.sent()?"start":"end")?"left":"right",[3,4];case 3:k=v,x="end"===y?"top":"bottom",l.label=4;case 4:return j=b-p[x],R=w-p[k],E=!t.middlewareData.shift,A=j,O=R,_?(F=w-p.left-p.right,O=y||E?(0,c.VV)(R,F):F):(P=b-p.top-p.bottom,A=y||E?(0,c.VV)(j,P):P),E&&!y&&(L=(0,c.Fp)(p.left,0),S=(0,c.Fp)(p.right,0),D=(0,c.Fp)(p.top,0),T=(0,c.Fp)(p.bottom,0),_?O=w-2*(0!==L||0!==S?L+S:(0,c.Fp)(p.left,p.right)):A=b-2*(0!==D||0!==T?D+T:(0,c.Fp)(p.top,p.bottom))),[4,h((0,s._)((0,i._)({},t),{availableWidth:O,availableHeight:A}))];case 5:return l.sent(),[4,o.getDimensions(a.floating)];case 6:if(C=l.sent(),w!==C.width||b!==C.height)return[2,{reset:{rects:!0}}];return[2,{}]}})})()}}}},"../../node_modules/@vkontakte/vkui-floating-ui/dom/dist/floating-ui.dom.esm.js":function(e,t,n){n.d(t,{Me:function(){return R},oo:function(){return E}});var r=n("../../node_modules/@swc/helpers/esm/_async_to_generator.js"),o=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),i=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),s=n("../../node_modules/@swc/helpers/esm/_sliced_to_array.js"),u=n("../../node_modules/@swc/helpers/esm/_to_consumable_array.js"),a=n("../../node_modules/tslib/tslib.es6.mjs"),l=n("../../node_modules/@vkontakte/vkui-floating-ui/utils/dist/floating-ui.utils.esm.js"),c=n("../../node_modules/@vkontakte/vkui-floating-ui/core/dist/floating-ui.core.esm.js"),f=n("../../node_modules/@vkontakte/vkui-floating-ui/utils/dom/dist/floating-ui.utils.dom.esm.js");function d(e){var t=(0,f.Dx)(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=(0,f.Re)(e),i=o?e.offsetWidth:n,s=o?e.offsetHeight:r,u=(0,l.NM)(n)!==i||(0,l.NM)(r)!==s;return u&&(n=i,r=s),{width:n,height:r,$:u}}function m(e){return(0,f.kK)(e)?e:e.contextElement}function h(e){var t=m(e);if(!(0,f.Re)(t))return(0,l.ze)(1);var n=t.getBoundingClientRect(),r=d(t),o=r.width,i=r.height,s=r.$,u=(s?(0,l.NM)(n.width):n.width)/o,a=(s?(0,l.NM)(n.height):n.height)/i;return u&&Number.isFinite(u)||(u=1),a&&Number.isFinite(a)||(a=1),{x:u,y:a}}var p=(0,l.ze)(0);function v(e){var t=(0,f.Jj)(e);return(0,f.Pf)()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:p}function y(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);var o=e.getBoundingClientRect(),i=m(e),s=(0,l.ze)(1);t&&(r?(0,f.kK)(r)&&(s=h(r)):s=h(e));var u=!function(e,t,n){return void 0===t&&(t=!1),!!n&&(!t||n===(0,f.Jj)(e))&&t}(i,n,r)?(0,l.ze)(0):v(i),a=(o.left+u.x)/s.x,c=(o.top+u.y)/s.y,d=o.width/s.x,p=o.height/s.y;if(i)for(var y=(0,f.Jj)(i),_=r&&(0,f.kK)(r)?(0,f.Jj)(r):r,g=y.frameElement;g&&r&&_!==y;){var w=h(g),b=g.getBoundingClientRect(),x=(0,f.Dx)(g),k=b.left+(g.clientLeft+parseFloat(x.paddingLeft))*w.x,j=b.top+(g.clientTop+parseFloat(x.paddingTop))*w.y;a*=w.x,c*=w.y,d*=w.x,p*=w.y,a+=k,c+=j,g=(0,f.Jj)(g).frameElement}return(0,l.JB)({width:d,height:p,x:a,y:c})}function _(e){return y((0,f.tF)(e)).left+(0,f.Lw)(e).scrollLeft}function g(e,t,n){var r;if("viewport"===t)r=function(e,t){var n=(0,f.Jj)(e),r=(0,f.tF)(e),o=n.visualViewport,i=r.clientWidth,s=r.clientHeight,u=0,a=0;if(o){i=o.width,s=o.height;var l=(0,f.Pf)();(!l||l&&"fixed"===t)&&(u=o.offsetLeft,a=o.offsetTop)}return{width:i,height:s,x:u,y:a}}(e,n);else if("document"===t)r=function(e){var t=(0,f.tF)(e),n=(0,f.Lw)(e),r=e.ownerDocument.body,o=(0,l.Fp)(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=(0,l.Fp)(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),s=-n.scrollLeft+_(e),u=-n.scrollTop;return"rtl"===(0,f.Dx)(r).direction&&(s+=(0,l.Fp)(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:s,y:u}}((0,f.tF)(e));else if((0,f.kK)(t))r=function(e,t){var n=y(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=(0,f.Re)(e)?h(e):(0,l.ze)(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{var s=v(e);r=(0,i._)((0,o._)({},t),{x:t.x-s.x,y:t.y-s.y})}return(0,l.JB)(r)}function w(e,t,n){var r=(0,f.Re)(t),o=(0,f.tF)(t),i="fixed"===n,s=y(e,!0,i,t),u={scrollLeft:0,scrollTop:0},a=(0,l.ze)(0);if(r||!r&&!i){if(("body"!==(0,f.wk)(t)||(0,f.ao)(o))&&(u=(0,f.Lw)(t)),r){var c=y(t,!0,i,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else o&&(a.x=_(o))}return{x:s.left+u.scrollLeft-a.x,y:s.top+u.scrollTop-a.y,width:s.width,height:s.height}}function b(e,t){return(0,f.Re)(e)&&"fixed"!==(0,f.Dx)(e).position?t?t(e):e.offsetParent:null}function x(e,t){var n=(0,f.Jj)(e);if(!(0,f.Re)(e))return n;for(var r=b(e,t);r&&(0,f.Ze)(r)&&"static"===(0,f.Dx)(r).position;)r=b(r,t);return r&&("html"===(0,f.wk)(r)||"body"===(0,f.wk)(r)&&"static"===(0,f.Dx)(r).position&&!(0,f.hT)(r))?n:r||(0,f.gQ)(e)||n}var k=function(){var e=(0,r._)(function(e){var t,n,r,i,s,u,l,c;return(0,a.Jh)(this,function(a){switch(a.label){case 0:return t=e.reference,n=e.floating,r=e.strategy,i=this.getOffsetParent||x,s=this.getDimensions,u={},l=[t],[4,i(n)];case 1:return u.reference=w.apply(void 0,l.concat([a.sent(),r])),c=[{x:0,y:0}],[4,s(n)];case 2:return[2,(u.floating=o._.apply(void 0,c.concat([a.sent()])),u)]}})});return function(t){return e.apply(this,arguments)}}(),j={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){var t=e.rect,n=e.offsetParent,r=e.strategy,o=(0,f.Re)(n),i=(0,f.tF)(n);if(n===i)return t;var s={scrollLeft:0,scrollTop:0},u=(0,l.ze)(1),a=(0,l.ze)(0);if((o||!o&&"fixed"!==r)&&(("body"!==(0,f.wk)(n)||(0,f.ao)(i))&&(s=(0,f.Lw)(n)),(0,f.Re)(n))){var c=y(n);u=h(n),a.x=c.x+n.clientLeft,a.y=c.y+n.clientTop}return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-s.scrollLeft*u.x+a.x,y:t.y*u.y-s.scrollTop*u.y+a.y}},getDocumentElement:f.tF,getClippingRect:function(e){var t=e.element,n=e.boundary,r=e.rootBoundary,o=e.strategy,i="clippingAncestors"===n?function(e,t){var n=t.get(e);if(n)return n;for(var r=(0,f.Kx)(e,[],!1).filter(function(e){return(0,f.kK)(e)&&"body"!==(0,f.wk)(e)}),o=null,i="fixed"===(0,f.Dx)(e).position,s=i?(0,f.Ow)(e):e;(0,f.kK)(s)&&!(0,f.Py)(s);){var u=(0,f.Dx)(s),a=(0,f.hT)(s);a||"fixed"!==u.position||(o=null),(i?!a&&!o:!a&&"static"===u.position&&!!o&&["absolute","fixed"].includes(o.position)||(0,f.ao)(s)&&!a&&function e(t,n){var r=(0,f.Ow)(t);return!(r===n||!(0,f.kK)(r)||(0,f.Py)(r))&&("fixed"===(0,f.Dx)(r).position||e(r,n))}(e,s))?r=r.filter(function(e){return e!==s}):o=u,s=(0,f.Ow)(s)}return t.set(e,r),r}(t,this._c):[].concat(n),s=(0,u._)(i).concat([r]),a=s[0],c=s.reduce(function(e,n){var r=g(t,n,o);return e.top=(0,l.Fp)(r.top,e.top),e.right=(0,l.VV)(r.right,e.right),e.bottom=(0,l.VV)(r.bottom,e.bottom),e.left=(0,l.Fp)(r.left,e.left),e},g(t,a,o));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},getOffsetParent:x,getElementRects:k,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){return d(e)},getScale:h,isElement:f.kK,isRTL:function(e){return"rtl"===(0,f.Dx)(e).direction}};function R(e,t,n,r){void 0===r&&(r={});var a,c=r.ancestorScroll,d=void 0===c||c,h=r.ancestorResize,p=void 0===h||h,v=r.elementResize,_=void 0===v?"function"==typeof ResizeObserver:v,g=r.layoutShift,w=void 0===g?"function"==typeof IntersectionObserver:g,b=r.animationFrame,x=void 0!==b&&b,k=m(e),j=d||p?(0,u._)(k?(0,f.Kx)(k):[]).concat((0,u._)((0,f.Kx)(t))):[];j.forEach(function(e){d&&e.addEventListener("scroll",n,{passive:!0}),p&&e.addEventListener("resize",n)});var R=k&&w?function(e,t){var n,r=null,s=(0,f.tF)(e);function u(){clearTimeout(n),r&&r.disconnect(),r=null}return!function a(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),u();var d=e.getBoundingClientRect(),m=d.left,h=d.top,p=d.width,v=d.height;if(c||t(),p&&v){var y={rootMargin:-(0,l.GW)(h)+"px "+-(0,l.GW)(s.clientWidth-(m+p))+"px "+-(0,l.GW)(s.clientHeight-(h+v))+"px "+-(0,l.GW)(m)+"px",threshold:(0,l.Fp)(0,(0,l.VV)(1,f))||1},_=!0;try{r=new IntersectionObserver(g,(0,i._)((0,o._)({},y),{root:s.ownerDocument}))}catch(e){r=new IntersectionObserver(g,y)}r.observe(e)}function g(e){var t=e[0].intersectionRatio;if(t!==f){if(!_)return a();t?a(!1,t):n=setTimeout(function(){a(!1,1e-7)},100)}_=!1}}(!0),u}(k,n):null,E=-1,A=null;_&&(A=new ResizeObserver(function(e){var r=(0,s._)(e,1)[0];r&&r.target===k&&A&&(A.unobserve(t),cancelAnimationFrame(E),E=requestAnimationFrame(function(){A&&A.observe(t)})),n()}),k&&!x&&A.observe(k),A.observe(t));var O=x?y(e):null;return x&&function t(){var r=y(e);O&&(r.x!==O.x||r.y!==O.y||r.width!==O.width||r.height!==O.height)&&n(),O=r,a=requestAnimationFrame(t)}(),n(),function(){j.forEach(function(e){d&&e.removeEventListener("scroll",n),p&&e.removeEventListener("resize",n)}),R&&R(),A&&A.disconnect(),A=null,x&&cancelAnimationFrame(a)}}var E=function(e,t,n){var r=new Map,s=(0,o._)({platform:j},n),u=(0,i._)((0,o._)({},s.platform),{_c:r});return(0,c.oo)(e,t,(0,i._)((0,o._)({},s),{platform:u}))}},"../../node_modules/@vkontakte/vkui-floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(e,t,n){n.d(t,{YF:function(){return y},x7:function(){return f}});var r=n("../../node_modules/@swc/helpers/esm/_object_spread.js"),o=n("../../node_modules/@swc/helpers/esm/_object_spread_props.js"),i=n("../../node_modules/@swc/helpers/esm/_sliced_to_array.js"),s=n("../../node_modules/@swc/helpers/esm/_type_of.js"),u=n("../../node_modules/@vkontakte/vkui-floating-ui/core/dist/floating-ui.core.esm.js"),a=n("../../node_modules/@vkontakte/vkui-floating-ui/dom/dist/floating-ui.dom.esm.js"),l=n("../../node_modules/react/index.js"),c=n("../../node_modules/react-dom/index.js"),f=function(e){return{name:"arrow",options:e,fn:function(t){var n="function"==typeof e?e(t):e,r=n.element,o=n.padding;if(r&&function(e){return({}).hasOwnProperty.call(e,"current")}(r)){if(null!=r.current)return(0,u.x7)({element:r.current,padding:o}).fn(t)}else if(r)return(0,u.x7)({element:r,padding:o}).fn(t);return{}}}},d="undefined"!=typeof document?l.useLayoutEffect:l.useEffect;function m(e,t){if(e===t)return!0;if((void 0===e?"undefined":(0,s._)(e))!==(void 0===t?"undefined":(0,s._)(t)))return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!=t.length)return!1;for(r=n;0!=r--;)if(!m(e[r],t[r]))return!1;return!0}if((n=(o=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,o[r]))return!1;for(r=n;0!=r--;){var n,r,o,i=o[r];if(("_owner"!==i||!e.$$typeof)&&!m(e[i],t[i]))return!1}return!0}return e!=e&&t!=t}function h(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function p(e,t){var n=h(e);return Math.round(t*n)/n}function v(e){var t=l.useRef(e);return d(function(){t.current=e}),t}function y(e){void 0===e&&(e={});var t=e.placement,n=void 0===t?"bottom":t,s=e.strategy,u=void 0===s?"absolute":s,f=e.middleware,y=void 0===f?[]:f,_=e.platform,g=e.elements,w=void 0===g?{}:g,b=w.reference,x=w.floating,k=e.transform,j=void 0===k||k,R=e.whileElementsMounted,E=e.open,A=(0,i._)(l.useState({x:0,y:0,strategy:u,placement:n,middlewareData:{},isPositioned:!1}),2),O=A[0],F=A[1],P=(0,i._)(l.useState(y),2),L=P[0],S=P[1];m(L,y)||S(y);var D=(0,i._)(l.useState(null),2),T=D[0],C=D[1],N=(0,i._)(l.useState(null),2),M=N[0],J=N[1],V=l.useCallback(function(e){e!=z.current&&(z.current=e,C(e))},[C]),B=l.useCallback(function(e){e!==H.current&&(H.current=e,J(e))},[J]),I=b||T,W=x||M,z=l.useRef(null),H=l.useRef(null),K=l.useRef(O),q=v(R),G=v(_),Q=l.useCallback(function(){if(z.current&&H.current){var e={placement:n,strategy:u,middleware:L};G.current&&(e.platform=G.current),(0,a.oo)(z.current,H.current,e).then(function(e){var t=(0,o._)((0,r._)({},e),{isPositioned:!0});Z.current&&!m(K.current,t)&&(K.current=t,c.flushSync(function(){F(t)}))})}},[L,n,u,G]);d(function(){!1===E&&K.current.isPositioned&&(K.current.isPositioned=!1,F(function(e){return(0,o._)((0,r._)({},e),{isPositioned:!1})}))},[E]);var Z=l.useRef(!1);d(function(){return Z.current=!0,function(){Z.current=!1}},[]),d(function(){if(I&&(z.current=I),W&&(H.current=W),I&&W){if(q.current)return q.current(I,W,Q);Q()}},[I,W,Q,q]);var $=l.useMemo(function(){return{reference:z,floating:H,setReference:V,setFloating:B}},[V,B]),X=l.useMemo(function(){return{reference:I,floating:W}},[I,W]),Y=l.useMemo(function(){var e={position:u,left:0,top:0};if(!X.floating)return e;var t=p(X.floating,O.x),n=p(X.floating,O.y);return j?(0,r._)((0,o._)((0,r._)({},e),{transform:"translate("+t+"px, "+n+"px)"}),h(X.floating)>=1.5&&{willChange:"transform"}):{position:u,left:t,top:n}},[u,j,X.floating,O.x,O.y]);return l.useMemo(function(){return(0,o._)((0,r._)({},O),{update:Q,refs:$,elements:X,floatingStyles:Y})},[O,Q,$,X,Y])}},"../../node_modules/mitt/dist/mitt.mjs":function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return{all:e=e||new Map,on:function(t,n){var r=e.get(t);r?r.push(n):e.set(t,[n])},off:function(t,n){var r=e.get(t);r&&(n?r.splice(r.indexOf(n)>>>0,1):e.set(t,[]))},emit:function(t,n){var r=e.get(t);r&&r.slice().map(function(e){e(n)}),(r=e.get("*"))&&r.slice().map(function(e){e(t,n)})}}}},"../../node_modules/tslib/tslib.es6.mjs":function(e,t,n){function r(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,r=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){s=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){s.label=u[1];break}if(6===u[0]&&s.label<o[1]){s.label=o[1],o=u;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(u);break}o[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}n.d(t,{Jh:function(){return r}}),"function"==typeof SuppressedError&&SuppressedError}}]);