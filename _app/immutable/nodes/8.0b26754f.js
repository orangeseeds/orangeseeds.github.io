import{_ as _e}from"../chunks/preload-helper.cf010ec4.js";import{H as ye}from"../chunks/control.f5b05b5f.js";import{s as re,n as Q,f as xe,r as Ie,o as Ce}from"../chunks/scheduler.b108d059.js";import{S as ae,i as ie,g as b,s as O,h as w,j as x,y as ce,c as D,f as _,k as v,a as P,A as m,C as X,D as Te,m as C,n as H,E as A,o as j,q as pe,r as Y,u as ne,v as F,t as G,b as He,d as J,w as K,p as Oe}from"../chunks/index.38b16d84.js";import{a as Ee}from"../chunks/app.dbbfbda5.js";import{e as Z}from"../chunks/each.e59479a4.js";import{w as De}from"../chunks/singletons.1928473d.js";const $e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,Pe=(o,e)=>{const t=o[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,a)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(a.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function Le(o,e){return new ye(o,e)}new TextEncoder;async function Ve({fetch:o,params:e}){try{const t=await Pe(Object.assign({"../../../lib/posts/new_post_testing_progress.md":()=>_e(()=>import("../chunks/new_post_testing_progress.a60d4799.js"),["_app/immutable/chunks/new_post_testing_progress.a60d4799.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.38b16d84.js","_app/immutable/chunks/app.dbbfbda5.js","_app/immutable/chunks/singletons.1928473d.js","_app/immutable/chunks/paths.5908ee03.js","_app/immutable/assets/app.c02b90dd.css"]),"../../../lib/posts/testing_out_this_new_build.md":()=>_e(()=>import("../chunks/testing_out_this_new_build.52ed3cec.js"),["_app/immutable/chunks/testing_out_this_new_build.52ed3cec.js","_app/immutable/chunks/scheduler.b108d059.js","_app/immutable/chunks/index.38b16d84.js","_app/immutable/chunks/app.dbbfbda5.js","_app/immutable/chunks/singletons.1928473d.js","_app/immutable/chunks/paths.5908ee03.js","_app/immutable/assets/app.c02b90dd.css"])}),`../../../lib/posts/${e.slug}.md`);return{post:t.metadata,component:t.default,layout:{fullWidth:!0}}}catch{throw Le(404)}}const Xe=Object.freeze(Object.defineProperty({__proto__:null,load:Ve},Symbol.toStringTag,{value:"Module"})),ke=De({}),{window:Me}=$e;function ge(o,e,t){const r=o.slice();return r[5]=e[t],r[7]=t,r}function ve(o){let e,t,r=o[5].innerText+"",a,i,f,c;function n(){return o[3](o[5])}return{c(){e=b("button"),t=b("li"),a=C(r),i=O(),this.h()},l(l){e=w(l,"BUTTON",{class:!0});var s=x(e);t=w(s,"LI",{type:!0});var u=x(t);a=H(u,r),u.forEach(_),i=D(s),s.forEach(_),this.h()},h(){v(t,"type","1"),v(e,"class","text-left w-fit hover:underline text-emerald-600 text-sm px-10 box-border border border-0 border-l py-2 hover:border-l-1 hover:border-slate-500 transition-all duration-75 box-border"),A(e,"border-l-2",o[1][o[7]]),A(e,"border-slate-600",o[1][o[7]]),A(e,"font-semibold",o[1][o[7]])},m(l,s){P(l,e,s),m(e,t),m(t,a),m(e,i),f||(c=X(e,"click",n),f=!0)},p(l,s){o=l,s&1&&r!==(r=o[5].innerText+"")&&j(a,r),s&2&&A(e,"border-l-2",o[1][o[7]]),s&2&&A(e,"border-slate-600",o[1][o[7]]),s&2&&A(e,"font-semibold",o[1][o[7]])},d(l){l&&_(e),f=!1,c()}}}function Ae(o){let e,t,r="Contents",a,i,f,c,n=Z(o[0]),l=[];for(let s=0;s<n.length;s+=1)l[s]=ve(ge(o,n,s));return{c(){e=b("div"),t=b("h2"),t.textContent=r,a=O(),i=b("ol");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=w(s,"DIV",{class:!0});var u=x(e);t=w(u,"H2",{class:!0,"data-svelte-h":!0}),ce(t)!=="svelte-2urmw0"&&(t.textContent=r),a=D(u),i=w(u,"OL",{class:!0});var d=x(i);for(let T=0;T<l.length;T+=1)l[T].l(d);d.forEach(_),u.forEach(_),this.h()},h(){v(t,"class","font-bold"),v(i,"class","text-sm font-light h-40 max-h-screen overflow-y"),v(e,"class","w-92 max-w-sm sm:max-w-[14rem] font-light space-y-4 text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block sticky top-14")},m(s,u){P(s,e,u),m(e,t),m(e,a),m(e,i);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(i,null);f||(c=X(Me,"scroll",o[2]),f=!0)},p(s,[u]){if(u&3){n=Z(s[0]);let d;for(d=0;d<n.length;d+=1){const T=ge(s,n,d);l[d]?l[d].p(T,u):(l[d]=ve(T),l[d].c(),l[d].m(i,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=n.length}},i:Q,o:Q,d(s){s&&_(e),Te(l,s),f=!1,c()}}}function Se(o,e,t){let{toc:r}=e,a=Array(r.length).fill(!1);const i=ke.subscribe(n=>{const l=r.indexOf(n);a.fill(!1),t(1,a[l]=!0,a),t(1,a)});Ee(()=>{t(1,a=a.fill(!1))}),xe(()=>{i()});const f=()=>{window.scrollY<10&&t(1,a=a.fill(!1))},c=n=>{n.scrollIntoView({behavior:"smooth"})};return o.$$set=n=>{"toc"in n&&t(0,r=n.toc)},[r,a,f,c]}class Re extends ae{constructor(e){super(),ie(this,e,Se,Ae,re,{toc:0})}}function be(o,e,t){const r=o.slice();return r[1]=e[t],r}function we(o){let e,t=o[1]+"",r,a;return{c(){e=b("a"),r=C(t),this.h()},l(i){e=w(i,"A",{href:!0,class:!0});var f=x(e);r=H(f,t),f.forEach(_),this.h()},h(){v(e,"href",a="/tags/"+o[1]),v(e,"class","py-1 px-3 mb-2 rounded-full text-slate-500 text-sm font-medium border border-slate-300 mr-1 hover:cursor-pointer hover:bg-gray-100 hover:underline")},m(i,f){P(i,e,f),m(e,r)},p(i,f){f&1&&t!==(t=i[1]+"")&&j(r,t),f&1&&a!==(a="/tags/"+i[1])&&v(e,"href",a)},d(i){i&&_(e)}}}function je(o){let e,t,r="Tags",a,i,f=Z(o[0]),c=[];for(let n=0;n<f.length;n+=1)c[n]=we(be(o,f,n));return{c(){e=b("div"),t=b("h2"),t.textContent=r,a=O(),i=b("div");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){e=w(n,"DIV",{class:!0});var l=x(e);t=w(l,"H2",{class:!0,"data-svelte-h":!0}),ce(t)!=="svelte-1yxekda"&&(t.textContent=r),a=D(l),i=w(l,"DIV",{class:!0});var s=x(i);for(let u=0;u<c.length;u+=1)c[u].l(s);s.forEach(_),l.forEach(_),this.h()},h(){v(t,"class","font-bold mb-5"),v(i,"class","flex flex-wrap"),v(e,"class","max-w-sm sm:max-w-[14rem] font-light text-slate-600 rounded-sm shadow-xs bg-base-100 hidden lg:block")},m(n,l){P(n,e,l),m(e,t),m(e,a),m(e,i);for(let s=0;s<c.length;s+=1)c[s]&&c[s].m(i,null)},p(n,[l]){if(l&1){f=Z(n[0]);let s;for(s=0;s<f.length;s+=1){const u=be(n,f,s);c[s]?c[s].p(u,l):(c[s]=we(u),c[s].c(),c[s].m(i,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=f.length}},i:Q,o:Q,d(n){n&&_(e),Te(c,n)}}}function qe(o,e,t){let{tags:r}=e;return o.$$set=a=>{"tags"in a&&t(0,r=a.tags)},[r]}class Be extends ae{constructor(e){super(),ie(this,e,qe,je,re,{tags:0})}}const{window:Ne}=$e;function Ue(o){let e,t,r,a=o[0].post.title+"",i,f,c,n,l=o[0].post.date+"",s,u,d=o[0].post.readTime+"",T,ee,te,S,q=o[0].post.description+"",N,se,L,p,U,$,V,oe,M,z,E,fe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-slate-500 fill-current w-5"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"></path></svg>',k,le,ue;var R=o[0].component;function de(h,g){return{}}return R&&(p=pe(R,de())),V=new Be({props:{tags:o[0].post.tags}}),M=new Re({props:{toc:o[1]}}),{c(){e=b("div"),t=b("div"),r=b("h2"),i=C(a),f=O(),c=b("span"),n=C("Posted "),s=C(l),u=C(" · "),T=C(d),ee=C(" read"),te=O(),S=b("p"),N=C(q),se=O(),L=b("article"),p&&Y(p.$$.fragment),U=O(),$=b("div"),Y(V.$$.fragment),oe=O(),Y(M.$$.fragment),z=O(),E=b("button"),E.innerHTML=fe,this.h()},l(h){e=w(h,"DIV",{class:!0});var g=x(e);t=w(g,"DIV",{class:!0});var y=x(t);r=w(y,"H2",{class:!0});var B=x(r);i=H(B,a),B.forEach(_),f=D(y),c=w(y,"SPAN",{class:!0});var I=x(c);n=H(I,"Posted "),s=H(I,l),u=H(I," · "),T=H(I,d),ee=H(I," read"),I.forEach(_),te=D(y),S=w(y,"P",{class:!0});var he=x(S);N=H(he,q),he.forEach(_),y.forEach(_),se=D(g),L=w(g,"ARTICLE",{id:!0,class:!0});var me=x(L);p&&ne(p.$$.fragment,me),me.forEach(_),g.forEach(_),U=D(h),$=w(h,"DIV",{class:!0});var W=x($);ne(V.$$.fragment,W),oe=D(W),ne(M.$$.fragment,W),W.forEach(_),z=D(h),E=w(h,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(E)!=="svelte-grxxax"&&(E.innerHTML=fe),this.h()},h(){v(r,"class","mb-1 font-semibold text-3xl"),v(c,"class","text-sm font-normal text-slate-400 my-2"),v(S,"class","font-light text-slate-500 mt-4"),v(t,"class","mb-1 max-w-2xl"),v(L,"id","article"),v(L,"class","prose prose-slate-800 dark:prose-invert prose-img:rounded-sm prose-a:text-blue-600 prose-p:font-normal prose-p:text-md max-w-2xl"),v(e,"class","lg:mb-0 mb-24"),v($,"class","space-y-8 ml-10"),v(E,"class","btn btn-circle btn-outline fixed bottom-16 right-14 text-3xl text-center shadow-lg border-slate-200 text-slate-500 hover:bg-slate-600 hover:text-white hidden"),A(E,"hidden",!o[2])},m(h,g){P(h,e,g),m(e,t),m(t,r),m(r,i),m(t,f),m(t,c),m(c,n),m(c,s),m(c,u),m(c,T),m(c,ee),m(t,te),m(t,S),m(S,N),m(e,se),m(e,L),p&&F(p,L,null),P(h,U,g),P(h,$,g),F(V,$,null),m($,oe),F(M,$,null),P(h,z,g),P(h,E,g),k=!0,le||(ue=[X(Ne,"scroll",o[3]),X(E,"click",o[4])],le=!0)},p(h,[g]){if((!k||g&1)&&a!==(a=h[0].post.title+"")&&j(i,a),(!k||g&1)&&l!==(l=h[0].post.date+"")&&j(s,l),(!k||g&1)&&d!==(d=h[0].post.readTime+"")&&j(T,d),(!k||g&1)&&q!==(q=h[0].post.description+"")&&j(N,q),g&1&&R!==(R=h[0].component)){if(p){Oe();const I=p;G(I.$$.fragment,1,0,()=>{K(I,1)}),He()}R?(p=pe(R,de()),Y(p.$$.fragment),J(p.$$.fragment,1),F(p,L,null)):p=null}const y={};g&1&&(y.tags=h[0].post.tags),V.$set(y);const B={};g&2&&(B.toc=h[1]),M.$set(B),(!k||g&4)&&A(E,"hidden",!h[2])},i(h){k||(p&&J(p.$$.fragment,h),J(V.$$.fragment,h),J(M.$$.fragment,h),k=!0)},o(h){p&&G(p.$$.fragment,h),G(V.$$.fragment,h),G(M.$$.fragment,h),k=!1},d(h){h&&(_(e),_(U),_($),_(z),_(E)),p&&K(p),K(V),K(M),le=!1,Ie(ue)}}}function ze(o,e,t){let{data:r}=e,a=[];function i(){const u=document.getElementById("article");t(1,a=Array.from(u.children).filter(d=>d instanceof HTMLHeadingElement?(c(d),!0):!1))}Ce(()=>{i()}),Ee(()=>{i()});let f;function c(u){f=new IntersectionObserver(d=>{u instanceof HTMLHeadingElement&&d[0].boundingClientRect.top<=0&&ke.set(u)},{}),f.observe(u)}let n=!1;xe(()=>{f==null||f.disconnect()});const l=()=>{window.scrollY>20?t(2,n=!0):t(2,n=!1)},s=()=>{window.scrollTo({top:0,behavior:"smooth"}),t(2,n=!1)};return o.$$set=u=>{"data"in u&&t(0,r=u.data)},[r,a,n,l,s]}class Ze extends ae{constructor(e){super(),ie(this,e,ze,Ue,re,{data:0})}}export{Ze as component,Xe as universal};
