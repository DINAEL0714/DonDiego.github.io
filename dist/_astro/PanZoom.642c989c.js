import{_ as wt}from"./_plugin-vue_export-helper.c27b6911.js";import{r as D,o as ut,c as bt,a as lt,e as xt}from"./runtime-core.esm-bundler.d90b5eb8.js";var h=function(){return h=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},h.apply(this,arguments)};function dt(t,e){for(var n=t.length;n--;)if(t[n].pointerId===e.pointerId)return n;return-1}function nt(t,e){var n;if(e.touches){n=0;for(var o=0,r=e.touches;o<r.length;o++){var a=r[o];a.pointerId=n++,nt(t,a)}}else(n=dt(t,e))>-1&&t.splice(n,1),t.push(e)}function Et(t,e){if(e.touches)for(;t.length;)t.pop();else{var n=dt(t,e);n>-1&&t.splice(n,1)}}function ft(t){for(var e,n=(t=t.slice(0)).pop();e=t.pop();)n={clientX:(e.clientX-n.clientX)/2+n.clientX,clientY:(e.clientY-n.clientY)/2+n.clientY};return n}function K(t){if(t.length<2)return 0;var e=t[0],n=t[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-e.clientX),2)+Math.pow(Math.abs(n.clientY-e.clientY),2))}typeof window<"u"&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}));var M={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};function Q(t,e,n,o){M[t].split(" ").forEach((function(t){e.addEventListener(t,n,o)}))}function H(t,e,n){M[t].split(" ").forEach((function(t){e.removeEventListener(t,n)}))}typeof window<"u"&&("function"==typeof window.PointerEvent?M={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:"function"==typeof window.TouchEvent&&(M={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));var tt,Pt=typeof document<"u"&&!!document.documentMode;function zt(){return tt||(tt=document.createElement("div").style)}var st=["webkit","moz","ms"],I={};function at(t){if(I[t])return I[t];var e=zt();if(t in e)return I[t]=t;for(var n=t[0].toUpperCase()+t.slice(1),o=st.length;o--;){var r="".concat(st[o]).concat(n);if(r in e)return I[t]=r}}function B(t,e){return parseFloat(e[at(t)])||0}function G(t,e,n){void 0===n&&(n=window.getComputedStyle(t));var o="border"===e?"Width":"";return{left:B("".concat(e,"Left").concat(o),n),right:B("".concat(e,"Right").concat(o),n),top:B("".concat(e,"Top").concat(o),n),bottom:B("".concat(e,"Bottom").concat(o),n)}}function E(t,e,n){t.style[at(e)]=n}function Mt(t,e){var n=at("transform");E(t,"transition","".concat(n," ").concat(e.duration,"ms ").concat(e.easing))}function St(t,e,n){var o=e.x,r=e.y,a=e.scale,i=e.isSVG;if(E(t,"transform","scale(".concat(a,") translate(").concat(o,"px, ").concat(r,"px)")),i&&Pt){var c=window.getComputedStyle(t).getPropertyValue("transform");t.setAttribute("transform",c)}}function et(t){var e=t.parentNode,n=window.getComputedStyle(t),o=window.getComputedStyle(e),r=t.getBoundingClientRect(),a=e.getBoundingClientRect();return{elem:{style:n,width:r.width,height:r.height,top:r.top,bottom:r.bottom,left:r.left,right:r.right,margin:G(t,"margin",n),border:G(t,"border",n)},parent:{style:o,width:a.width,height:a.height,top:a.top,bottom:a.bottom,left:a.left,right:a.right,padding:G(e,"padding",o),border:G(e,"border",o)}}}function Ot(t){var e=t.ownerDocument,n=t.parentNode;return e&&n&&9===e.nodeType&&1===n.nodeType&&e.documentElement.contains(n)}function At(t){return(t.getAttribute("class")||"").trim()}function Ct(t,e){return 1===t.nodeType&&" ".concat(At(t)," ").indexOf(" ".concat(e," "))>-1}function Xt(t,e){for(var n=t;null!=n;n=n.parentNode)if(Ct(n,e.excludeClass)||e.exclude.indexOf(n)>-1)return!0;return!1}var Yt=/^http:[\w\.\/]+svg$/;function _t(t){return Yt.test(t.namespaceURI)&&"svg"!==t.nodeName.toLowerCase()}function Tt(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var vt={animate:!1,canvas:!1,cursor:"move",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(t){t.preventDefault(),t.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:St,startX:0,startY:0,startScale:1,step:.3,touchAction:"none"};function rt(t,e){if(!t)throw new Error("Panzoom requires an element as an argument");if(1!==t.nodeType)throw new Error("Panzoom requires an element with a nodeType of 1");if(!Ot(t))throw new Error("Panzoom should be called on elements that have been attached to the DOM");e=h(h({},vt),e);var n=_t(t),o=t.parentNode;o.style.overflow=e.overflow,o.style.userSelect="none",o.style.touchAction=e.touchAction,(e.canvas?o:t).style.cursor=e.cursor,t.style.userSelect="none",t.style.touchAction=e.touchAction,E(t,"transformOrigin","string"==typeof e.origin?e.origin:n?"0 0":"50% 50%");var r=0,a=0,i=1,c=!1;function l(e,n,o){if(!o.silent){var r=new CustomEvent(e,{detail:n});t.dispatchEvent(r)}}function s(e,o,c){var s={x:r,y:a,scale:i,isSVG:n,originalEvent:c};return requestAnimationFrame((function(){"boolean"==typeof o.animate&&(o.animate?Mt(t,o):E(t,"transition","none")),o.setTransform(t,s,o),l(e,s,o),l("panzoomchange",s,o)})),s}function u(n,o,c,l){var s=h(h({},e),l),u={x:r,y:a,opts:s};if(!s.force&&(s.disablePan||s.panOnlyWhenZoomed&&i===s.startScale))return u;if(n=parseFloat(n),o=parseFloat(o),s.disableXAxis||(u.x=(s.relative?r:0)+n),s.disableYAxis||(u.y=(s.relative?a:0)+o),s.contain){var p=et(t),d=p.elem.width/i,f=p.elem.height/i,m=d*c,v=f*c,g=(m-d)/2,y=(v-f)/2;if("inside"===s.contain){var w=(-p.elem.margin.left-p.parent.padding.left+g)/c,b=(p.parent.width-m-p.parent.padding.left-p.elem.margin.left-p.parent.border.left-p.parent.border.right+g)/c;u.x=Math.max(Math.min(u.x,b),w);var x=(-p.elem.margin.top-p.parent.padding.top+y)/c,E=(p.parent.height-v-p.parent.padding.top-p.elem.margin.top-p.parent.border.top-p.parent.border.bottom+y)/c;u.y=Math.max(Math.min(u.y,E),x)}else if("outside"===s.contain){w=(-(m-p.parent.width)-p.parent.padding.left-p.parent.border.left-p.parent.border.right+g)/c,b=(g-p.parent.padding.left)/c;u.x=Math.max(Math.min(u.x,b),w);x=(-(v-p.parent.height)-p.parent.padding.top-p.parent.border.top-p.parent.border.bottom+y)/c,E=(y-p.parent.padding.top)/c;u.y=Math.max(Math.min(u.y,E),x)}}return s.roundPixels&&(u.x=Math.round(u.x),u.y=Math.round(u.y)),u}function p(n,o){var r=h(h({},e),o),a={scale:i,opts:r};if(!r.force&&r.disableZoom)return a;var c=e.minScale,l=e.maxScale;if(r.contain){var s=et(t),u=s.elem.width/i,p=s.elem.height/i;if(u>1&&p>1){var d=(s.parent.width-s.parent.border.left-s.parent.border.right)/u,f=(s.parent.height-s.parent.border.top-s.parent.border.bottom)/p;"inside"===e.contain?l=Math.min(l,d,f):"outside"===e.contain&&(c=Math.max(c,d,f))}}return a.scale=Math.min(Math.max(n,c),l),a}function d(t,e,o,c){var l=u(t,e,i,o);return r!==l.x||a!==l.y?(r=l.x,a=l.y,s("panzoompan",l.opts,c)):{x:r,y:a,scale:i,isSVG:n,originalEvent:c}}function f(t,e,n){var o=p(t,e),c=o.opts;if(c.force||!c.disableZoom){t=o.scale;var l=r,d=a;if(c.focal){var f=c.focal;l=(f.x/t-f.x/i+r*t)/t,d=(f.y/t-f.y/i+a*t)/t}var m=u(l,d,t,{relative:!1,force:!0});return r=m.x,a=m.y,i=t,s("panzoomzoom",c,n)}}function m(t,n){var o=h(h(h({},e),{animate:!0}),n);return f(i*Math.exp((t?1:-1)*o.step),o)}function v(e,o,r,a){var c=et(t),l=c.parent.width-c.parent.padding.left-c.parent.padding.right-c.parent.border.left-c.parent.border.right,s=c.parent.height-c.parent.padding.top-c.parent.padding.bottom-c.parent.border.top-c.parent.border.bottom,u=o.clientX-c.parent.left-c.parent.padding.left-c.parent.border.left-c.elem.margin.left,p=o.clientY-c.parent.top-c.parent.padding.top-c.parent.border.top-c.elem.margin.top;n||(u-=c.elem.width/i/2,p-=c.elem.height/i/2);var d={x:u/l*(l*e),y:p/s*(s*e)};return f(e,h(h({},r),{animate:!1,focal:d}),a)}f(e.startScale,{animate:!1,force:!0}),setTimeout((function(){d(e.startX,e.startY,{animate:!1,force:!0})}));var g,y,w,b,x,S,z=[];function P(t){if(!Xt(t.target,e)){nt(z,t),c=!0,e.handleStartEvent(t),g=r,y=a,l("panzoomstart",{x:r,y:a,scale:i,isSVG:n,originalEvent:t},e);var o=ft(z);w=o.clientX,b=o.clientY,x=i,S=K(z)}}function A(t){if(c&&void 0!==g&&void 0!==y&&void 0!==w&&void 0!==b){nt(z,t);var n=ft(z),o=z.length>1,r=i;if(o)0===S&&(S=K(z)),v(r=p((K(z)-S)*e.step/80+x).scale,n,{animate:!1},t);(!o||e.pinchAndPan)&&d(g+(n.clientX-w)/r,y+(n.clientY-b)/r,{animate:!1},t)}}function O(t){1===z.length&&l("panzoomend",{x:r,y:a,scale:i,isSVG:n,originalEvent:t},e),Et(z,t),c&&(c=!1,g=y=w=b=void 0)}var X=!1;function Y(){X||(X=!0,Q("down",e.canvas?o:t,P),Q("move",document,A,{passive:!0}),Q("up",document,O,{passive:!0}))}return e.noBind||Y(),{bind:Y,destroy:function(){X=!1,H("down",e.canvas?o:t,P),H("move",document,A),H("up",document,O)},eventNames:M,getPan:function(){return{x:r,y:a}},getScale:function(){return i},getOptions:function(){return Tt(e)},handleDown:P,handleMove:A,handleUp:O,pan:d,reset:function(t){var n=h(h(h({},e),{animate:!0,force:!0}),t);i=p(n.startScale,n).scale;var o=u(n.startX,n.startY,i,n);return r=o.x,a=o.y,s("panzoomreset",n)},resetStyle:function(){o.style.overflow="",o.style.userSelect="",o.style.touchAction="",o.style.cursor="",t.style.cursor="",t.style.userSelect="",t.style.touchAction="",E(t,"transformOrigin","")},setOptions:function(n){for(var r in void 0===n&&(n={}),n)n.hasOwnProperty(r)&&(e[r]=n[r]);(n.hasOwnProperty("cursor")||n.hasOwnProperty("canvas"))&&(o.style.cursor=t.style.cursor="",(e.canvas?o:t).style.cursor=e.cursor),n.hasOwnProperty("overflow")&&(o.style.overflow=n.overflow),n.hasOwnProperty("touchAction")&&(o.style.touchAction=n.touchAction,t.style.touchAction=n.touchAction)},setStyle:function(e,n){return E(t,e,n)},zoom:f,zoomIn:function(t){return m(!0,t)},zoomOut:function(t){return m(!1,t)},zoomToPoint:v,zoomWithWheel:function(t,n){t.preventDefault();var o=h(h(h({},e),n),{animate:!1}),r=(0===t.deltaY&&t.deltaX?t.deltaX:t.deltaY)<0?1:-1;return v(p(i*Math.exp(r*o.step/3),o).scale,t,o,t)}}}rt.defaultOptions=vt;const Nt={__name:"PanZoom",props:{image:{type:String,required:!0},alt:{type:String,required:!0}},setup(t,{expose:e}){e();const n=t,o=D(null),r=D(null),a=D(null);ut((()=>{a.value=rt(o.value,{maxScale:5,minScale:.9,overflow:"visible"})}));const i={zoom:o,container:r,panzoom:a,props:n,get Panzoom(){return rt},ref:D,onMounted:ut};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}},Dt={ref:"container",class:"z-20 grid h-full max-h-screen w-full place-items-center justify-center overflow-hidden"},It=["src","alt"];function Bt(t,e,n,o,r,a){return xt(),bt("div",Dt,[lt("div",{onWheel:e[0]||(e[0]=(...t)=>o.panzoom.zoomWithWheel&&o.panzoom.zoomWithWheel(...t))},[lt("img",{ref:"zoom",src:n.image,alt:n.alt,class:"block max-h-screen w-auto"},null,8,It)],32)],512)}const Lt=wt(Nt,[["render",Bt]]);export{Lt as default};