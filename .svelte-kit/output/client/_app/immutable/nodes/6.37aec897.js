import{_ as $}from"../chunks/preload-helper.cf010ec4.js";import{s as g}from"../chunks/scheduler.e108d1fd.js";import{S as v,i as y,q as u,r as m,e as f,u as b,v as l,a as w,t as _,b as h,d as p,f as P,w as d,p as k}from"../chunks/index.b170b7b1.js";const q=(r,t)=>{const e=r[t];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((a,o)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(o.bind(null,new Error("Unknown variable dynamic import: "+t)))})};async function O({fetch:r,params:t}){const e=await q(Object.assign({"../../../lib/posts/post.md":()=>$(()=>import("../chunks/post.f64fac03.js"),["_app/immutable/chunks/post.f64fac03.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.b170b7b1.js"])}),`../../../lib/posts/${t.slug}.md`);return{post:e.metadata,component:e.default,layout:{fullWidth:!0}}}const T=Object.freeze(Object.defineProperty({__proto__:null,load:O},Symbol.toStringTag,{value:"Module"}));function S(r){let t,e,a;var o=r[0].component;function s(n,i){return{}}return o&&(t=u(o,s())),{c(){t&&m(t.$$.fragment),e=f()},l(n){t&&b(t.$$.fragment,n),e=f()},m(n,i){t&&l(t,n,i),w(n,e,i),a=!0},p(n,[i]){if(i&1&&o!==(o=n[0].component)){if(t){k();const c=t;_(c.$$.fragment,1,0,()=>{d(c,1)}),h()}o?(t=u(o,s()),m(t.$$.fragment),p(t.$$.fragment,1),l(t,e.parentNode,e)):t=null}},i(n){a||(t&&p(t.$$.fragment,n),a=!0)},o(n){t&&_(t.$$.fragment,n),a=!1},d(n){n&&P(e),t&&d(t,n)}}}function j(r,t,e){let{data:a}=t;return r.$$set=o=>{"data"in o&&e(0,a=o.data)},[a]}class D extends v{constructor(t){super(),y(this,t,j,S,g,{data:0})}}export{D as component,T as universal};