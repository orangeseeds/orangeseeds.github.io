import{s as j,n as E,o as W,c as X,u as Y,g as ee,d as te}from"../chunks/scheduler.e108d1fd.js";import{S as C,i as S,g as b,h as $,x as ae,k as o,a as N,f as d,s as T,y as k,j as _,c as B,z as L,A as m,B as se,C as ne,m as le,n as re,r as U,u as q,v as R,d as O,t as I,w as G}from"../chunks/index.268bf6f5.js";import{e as J}from"../chunks/each.e59479a4.js";/* empty css                    */const oe=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:oe},Symbol.toStringTag,{value:"Module"})),ie="/_app/immutable/assets/favicon.f7e00d5a.svg";function ce(i){let e,a=`<img width="24" height="24" src="${ie}"/> <p class="text-xs sm:text-sm font-medium flex">Copyright © 2023 - All right reserved by <a class="font-semibold hover:underline" href="https://github.com/orangeseeds">Orangeseeds</a></p>`;return{c(){e=b("footer"),e.innerHTML=a,this.h()},l(n){e=$(n,"FOOTER",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-z8dc4g"&&(e.innerHTML=a),this.h()},h(){o(e,"class","footer footer-center px-4 py-2 bg-base-300 text-base-content flex justify-center")},m(n,t){N(n,e,t)},p:E,i:E,o:E,d(n){n&&d(e)}}}class he extends C{constructor(e){super(),S(this,e,null,ce,j,{})}}function K(i,e,a){const n=i.slice();return n[3]=e[a].name,n[4]=e[a].path,n}function Q(i){let e,a=i[3]+"",n;return{c(){e=b("a"),n=le(a),this.h()},l(t){e=$(t,"A",{class:!0,href:!0});var c=_(e);n=re(c,a),c.forEach(d),this.h()},h(){o(e,"class","transition-all duration-200 border-y-2 border-transparent hover:border-b-slate-500"),o(e,"href",i[4])},m(t,c){N(t,e,c),m(e,n)},p:E,d(t){t&&d(e)}}}function ue(i){let e,a,n,t,c,h,v,A,l,s,p,g,M,V,z,x=J(i[1]),f=[];for(let u=0;u<x.length;u+=1)f[u]=Q(K(i,x,u));return{c(){e=b("nav"),a=b("div");for(let u=0;u<f.length;u+=1)f[u].c();n=T(),t=b("div"),c=b("button"),h=b("label"),v=b("input"),A=T(),l=k("svg"),s=k("path"),p=T(),g=k("svg"),M=k("path"),this.h()},l(u){e=$(u,"NAV",{class:!0});var w=_(e);a=$(w,"DIV",{class:!0});var r=_(a);for(let H=0;H<f.length;H+=1)f[H].l(r);r.forEach(d),n=B(w),t=$(w,"DIV",{class:!0});var Z=_(t);c=$(Z,"BUTTON",{class:!0});var D=_(c);h=$(D,"LABEL",{class:!0});var y=_(h);v=$(y,"INPUT",{type:!0}),A=B(y),l=L(y,"svg",{class:!0,xmlns:!0,viewBox:!0});var P=_(l);s=L(P,"path",{d:!0}),_(s).forEach(d),P.forEach(d),p=B(y),g=L(y,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0});var F=_(g);M=L(F,"path",{d:!0}),_(M).forEach(d),F.forEach(d),y.forEach(d),D.forEach(d),Z.forEach(d),w.forEach(d),this.h()},h(){o(a,"class","navbar-start font-bold space-x-8"),o(v,"type","checkbox"),o(s,"d","M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"),o(l,"class","swap-on fill-current w-10 h-10"),o(l,"xmlns","http://www.w3.org/2000/svg"),o(l,"viewBox","0 0 24 24"),o(M,"d","M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"),o(g,"class","swap-off fill-current w-10 h-10"),o(g,"xmlns","http://www.w3.org/2000/svg"),o(g,"viewBox","0 0 24 24"),o(g,"fill","white"),o(h,"class","swap swap-rotate scale-[60%] w-full h-full"),o(c,"class","btn btn-ghost btn-circle"),o(t,"class","navbar-end"),o(e,"class","navbar bg-base-100 px-8 py-2")},m(u,w){N(u,e,w),m(e,a);for(let r=0;r<f.length;r+=1)f[r]&&f[r].m(a,null);m(e,n),m(e,t),m(t,c),m(c,h),m(h,v),m(h,A),m(h,l),m(l,s),m(h,p),m(h,g),m(g,M),V||(z=se(v,"change",i[0]),V=!0)},p(u,[w]){if(w&2){x=J(u[1]);let r;for(r=0;r<x.length;r+=1){const Z=K(u,x,r);f[r]?f[r].p(Z,w):(f[r]=Q(Z),f[r].c(),f[r].m(a,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=x.length}},i:E,o:E,d(u){u&&d(e),ne(f,u),V=!1,z()}}}function fe(i){let e=!1;W(()=>{var t;(t=document.getElementsByTagName("html")[0])==null||t.setAttribute("data-theme",e?"halloween":"light")});function a(){var t;e=!e,(t=document.getElementsByTagName("html")[0])==null||t.setAttribute("data-theme",e?"halloween":"light")}return[a,[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Posts",path:"/posts"}]]}class me extends C{constructor(e){super(),S(this,e,fe,ue,j,{})}}function de(i){let e,a,n,t,c,h,v;a=new me({});const A=i[1].default,l=X(A,i,i[0],null);return h=new he({}),{c(){e=b("div"),U(a.$$.fragment),n=T(),t=b("main"),l&&l.c(),c=T(),U(h.$$.fragment),this.h()},l(s){e=$(s,"DIV",{class:!0});var p=_(e);q(a.$$.fragment,p),n=B(p),t=$(p,"MAIN",{class:!0});var g=_(t);l&&l.l(g),g.forEach(d),c=B(p),q(h.$$.fragment,p),p.forEach(d),this.h()},h(){o(t,"class","px-8 py-5 mb-6"),o(e,"class","relative min-h-[100vh]")},m(s,p){N(s,e,p),R(a,e,null),m(e,n),m(e,t),l&&l.m(t,null),m(e,c),R(h,e,null),v=!0},p(s,[p]){l&&l.p&&(!v||p&1)&&Y(l,A,s,s[0],v?te(A,s[0],p,null):ee(s[0]),null)},i(s){v||(O(a.$$.fragment,s),O(l,s),O(h.$$.fragment,s),v=!0)},o(s){I(a.$$.fragment,s),I(l,s),I(h.$$.fragment,s),v=!1},d(s){s&&d(e),G(a),l&&l.d(s),G(h)}}}function pe(i,e,a){let{$$slots:n={},$$scope:t}=e;return i.$$set=c=>{"$$scope"in c&&a(0,t=c.$$scope)},[t,n]}class we extends C{constructor(e){super(),S(this,e,pe,de,j,{})}}export{we as component,$e as universal};