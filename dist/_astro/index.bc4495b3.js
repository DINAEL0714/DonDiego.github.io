import{l as N,m as F,p as C,r as M,q as D,s as _,k as U,o as W,u as $,v as q,w as x,x as H,y as V}from"./runtime-core.esm-bundler.d90b5eb8.js";function L(e){return H()?(V(e),!0):!1}function c(e){return typeof e=="function"?e():q(e)}const k=typeof window<"u"&&typeof document<"u",Q=e=>e!=null,z=Object.prototype.toString,X=e=>z.call(e)==="[object Object]",T=()=>{},Y=E();function E(){var e;return k&&((e=window?.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function G(e,n){function r(...t){return new Promise((o,s)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(o).catch(s)})}return r}function J(e,n={}){let r,t,o=T;const s=i=>{clearTimeout(i),o(),o=T};return i=>{const w=c(e),f=c(n.maxWait);return r&&s(r),w<=0||f!==void 0&&f<=0?(t&&(s(t),t=null),Promise.resolve(i())):new Promise((d,u)=>{o=n.rejectOnCancel?u:d,f&&!t&&(t=setTimeout(()=>{r&&s(r),t=null,d(i())},f)),r=setTimeout(()=>{t&&s(t),t=null,d(i())},w)})}}const Z={mounted:"mounted",updated:"updated",unmounted:"unmounted"};function B(e,n=!1,r="Timeout"){return new Promise((t,o)=>{setTimeout(n?()=>o(r):t,e)})}function b(e,n,r=!1){return n.reduce((t,o)=>(o in e&&(!r||e[o]!==void 0)&&(t[o]=e[o]),t),{})}function R(...e){if(e.length!==1)return N(...e);const n=e[0];return typeof n=="function"?F(C(()=>({get:n,set:T}))):M(n)}function j(e,n=200,r={}){return G(J(n,r),e)}function ee(e,n={}){if(!D(e))return _(e);const r=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const t in e.value)r[t]=C(()=>({get(){return e.value[t]},set(o){var s;if((s=c(n.replaceRef))!=null?s:!0)if(Array.isArray(e.value)){const i=[...e.value];i[t]=o,e.value=i}else{const i={...e.value,[t]:o};Object.setPrototypeOf(i,Object.getPrototypeOf(e.value)),e.value=i}else e.value[t]=o}}));return r}function te(e,n=!0){U()?W(e):n?e():$(e)}function A(e,n=!1){function r(u,{flush:a="sync",deep:l=!1,timeout:m,throwOnTimeout:g}={}){let p=null;const P=[new Promise(v=>{p=x(e,h=>{u(h)!==n&&(p?.(),v(h))},{flush:a,deep:l,immediate:!0})})];return m!=null&&P.push(B(m,g).then(()=>c(e)).finally(()=>p?.())),Promise.race(P)}function t(u,a){if(!D(u))return r(h=>h===u,a);const{flush:l="sync",deep:m=!1,timeout:g,throwOnTimeout:p}=a??{};let y=null;const v=[new Promise(h=>{y=x([e,u],([S,I])=>{n!==(S===I)&&(y?.(),h(S))},{flush:l,deep:m,immediate:!0})})];return g!=null&&v.push(B(g,p).then(()=>c(e)).finally(()=>(y?.(),c(e)))),Promise.race(v)}function o(u){return r(a=>!!a,u)}function s(u){return t(null,u)}function O(u){return t(void 0,u)}function i(u){return r(Number.isNaN,u)}function w(u,a){return r(l=>{const m=Array.from(l);return m.includes(u)||m.includes(c(u))},a)}function f(u){return d(1,u)}function d(u=1,a){let l=-1;return r(()=>(l+=1,l>=u),a)}return Array.isArray(c(e))?{toMatch:r,toContains:w,changed:f,changedTimes:d,get not(){return A(e,!n)}}:{toMatch:r,toBe:t,toBeTruthy:o,toBeNull:s,toBeNaN:i,toBeUndefined:O,changed:f,changedTimes:d,get not(){return A(e,!n)}}}function ne(e){return A(e)}export{R as a,te as b,X as c,c as d,Y as e,L as f,Z as g,Q as h,k as i,ne as j,T as n,b as o,ee as t,j as u};