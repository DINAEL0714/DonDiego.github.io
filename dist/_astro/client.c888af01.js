import{b as p,c as f}from"./runtime-dom.esm-bundler.4cbeeb3c.js";import y from"./_astro-entry_vue3-popper.226b28b8.js";import{d as A}from"./index.f357d3c2.js";import{A as S,G as s,a3 as b}from"./runtime-core.esm-bundler.d90b5eb8.js";const h=t=>{t.component("Popper",y),t.use(A,{autoClose:3e3,theme:"colored"})},H=S({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:e,hydrate:n}){if(!e)return()=>null;let o=n?"astro-slot":"astro-static-slot";return()=>s(o,{name:t,innerHTML:e})}}),x=t=>async(e,n,o,{client:l})=>{if(delete n.class,!t.hasAttribute("ssr"))return;const m=e.name?`${e.name} Host`:void 0,u={};for(const[c,d]of Object.entries(o))u[c]=()=>s(H,{value:d,name:c==="default"?void 0:c});let r=s(e,n,u);g(e.setup)&&(r=s(b,null,r));const i=l!=="only",a=(i?p:f)({name:m,render:()=>r});await h(a),a.mount(t,i),t.addEventListener("astro:unmount",()=>a.unmount(),{once:!0})};function g(t){const e=t?.constructor;return e&&e.name==="AsyncFunction"}export{x as default};
