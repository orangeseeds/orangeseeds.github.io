import{s as q,n as d}from"../chunks/scheduler.b108d059.js";import{S as A,i as E,g as _,s as C,h as m,y as L,c as k,j as g,f as h,k as f,a as u,D as j,m as w,n as P,A as p}from"../chunks/index.38b16d84.js";import{e as v}from"../chunks/each.e59479a4.js";import{b as S}from"../chunks/paths.5908ee03.js";function y(c,e,r){const n=c.slice();return n[2]=e[r],n}function b(c){let e,r,n=c[2].title+"",o,s;return{c(){e=_("li"),r=_("a"),o=w(n),s=C(),this.h()},l(l){e=m(l,"LI",{type:!0,class:!0});var t=g(e);r=m(t,"A",{href:!0});var i=g(r);o=P(i,n),i.forEach(h),s=k(t),t.forEach(h),this.h()},h(){f(r,"href",S+"/posts/"+c[2].slug),f(e,"type","1"),f(e,"class","text-emerald-600 hover:underline ml-6")},m(l,t){u(l,e,t),p(e,r),p(r,o),p(e,s)},p:d,d(l){l&&h(e)}}}function D(c){let e,r="Posts",n,o,s=v(c[0]),l=[];for(let t=0;t<s.length;t+=1)l[t]=b(y(c,s,t));return{c(){e=_("h1"),e.textContent=r,n=C(),o=_("ol");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=m(t,"H1",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-apqjql"&&(e.textContent=r),n=k(t),o=m(t,"OL",{class:!0});var i=g(o);for(let a=0;a<l.length;a+=1)l[a].l(i);i.forEach(h),this.h()},h(){f(e,"class","text-2xl font-bold"),f(o,"class","max-w-lg")},m(t,i){u(t,e,i),u(t,n,i),u(t,o,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(o,null)},p(t,[i]){if(i&1){s=v(t[0]);let a;for(a=0;a<s.length;a+=1){const x=y(t,s,a);l[a]?l[a].p(x,i):(l[a]=b(x),l[a].c(),l[a].m(o,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}},i:d,o:d,d(t){t&&(h(e),h(n),h(o)),j(l,t)}}}function H(c,e,r){let{data:n}=e;const o=n.posts.map(s=>({...s,slug:s.title.replaceAll(" ","_").toLowerCase()}));return c.$$set=s=>{"data"in s&&r(1,n=s.data)},[o,n]}class F extends A{constructor(e){super(),E(this,e,H,D,q,{data:1})}}export{F as component};