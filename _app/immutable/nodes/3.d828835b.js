import{s as J,n as B,c as Q,u as V,g as W,d as X}from"../chunks/scheduler.b108d059.js";import{S as K,i as M,g,s as S,h as v,j as E,x as Y,c as A,f as m,k as p,a as q,z as f,B as Z,m as b,n as w,o as N,r as tt,u as et,v as st,d as D,t as H,w as at}from"../chunks/index.87bd9e39.js";import{e as O}from"../chunks/each.e59479a4.js";import{b as U}from"../chunks/paths.0934c250.js";function F(r,e,s){const i=r.slice();return i[1]=e[s],i}function G(r){let e,s,i,o=r[1].title+"",c,l,t,a=r[1].description.substring(0,100)+"",u,n,d,x,C=r[1].date+"",k,T,P=r[1].readTime+"",y,L,j;return{c(){e=g("li"),s=g("a"),i=g("span"),c=b(o),l=S(),t=g("p"),u=b(a),n=b("..."),d=S(),x=g("span"),k=b(C),T=b(" · "),y=b(P),j=S(),this.h()},l(h){e=v(h,"LI",{class:!0});var _=E(e);s=v(_,"A",{href:!0});var $=E(s);i=v($,"SPAN",{class:!0});var z=E(i);c=w(z,o),z.forEach(m),l=A($),t=v($,"P",{class:!0});var R=E(t);u=w(R,a),n=w(R,"..."),R.forEach(m),d=A($),x=v($,"SPAN",{class:!0});var I=E(x);k=w(I,C),T=w(I," · "),y=w(I,P),I.forEach(m),$.forEach(m),j=A(_),_.forEach(m),this.h()},h(){p(i,"class","font-medium text-emerald-600"),p(t,"class","font-light md:text-xs text-sm text-slate-500"),p(x,"class","font-extralight md:text-xs text-sm text-slate-400"),p(s,"href",L=U+"/posts/"+r[1].slug),p(e,"class","hover:underline")},m(h,_){q(h,e,_),f(e,s),f(s,i),f(i,c),f(s,l),f(s,t),f(t,u),f(t,n),f(s,d),f(s,x),f(x,k),f(x,T),f(x,y),f(e,j)},p(h,_){_&1&&o!==(o=h[1].title+"")&&N(c,o),_&1&&a!==(a=h[1].description.substring(0,100)+"")&&N(u,a),_&1&&C!==(C=h[1].date+"")&&N(k,C),_&1&&P!==(P=h[1].readTime+"")&&N(y,P),_&1&&L!==(L=U+"/posts/"+h[1].slug)&&p(s,"href",L)},d(h){h&&m(e)}}}function lt(r){let e,s,i="Related Posts",o,c,l=O(r[0]),t=[];for(let a=0;a<l.length;a+=1)t[a]=G(F(r,l,a));return{c(){e=g("aside"),s=g("h3"),s.textContent=i,o=S(),c=g("ul");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=v(a,"ASIDE",{class:!0});var u=E(e);s=v(u,"H3",{class:!0,"data-svelte-h":!0}),Y(s)!=="svelte-g3vaeu"&&(s.textContent=i),o=A(u),c=v(u,"UL",{class:!0});var n=E(c);for(let d=0;d<t.length;d+=1)t[d].l(n);n.forEach(m),u.forEach(m),this.h()},h(){p(s,"class","font-bold"),p(c,"class","text-sm font-light space-y-3"),p(e,"class","max-w-xs mr-auto sm:mr-6 sm:max-w-[12rem] font-light space-y-4 text-slate-600")},m(a,u){q(a,e,u),f(e,s),f(e,o),f(e,c);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(c,null)},p(a,[u]){if(u&1){l=O(a[0]);let n;for(n=0;n<l.length;n+=1){const d=F(a,l,n);t[n]?t[n].p(d,u):(t[n]=G(d),t[n].c(),t[n].m(c,null))}for(;n<t.length;n+=1)t[n].d(1);t.length=l.length}},i:B,o:B,d(a){a&&m(e),Z(t,a)}}}function nt(r,e,s){let{posts:i}=e;return r.$$set=o=>{"posts"in o&&s(0,i=o.posts)},[i]}class ot extends K{constructor(e){super(),M(this,e,nt,lt,J,{posts:0})}}function rt(r){let e,s,i,o;s=new ot({props:{posts:r[0]}});const c=r[3].default,l=Q(c,r,r[2],null);return{c(){e=g("section"),tt(s.$$.fragment),i=S(),l&&l.c(),this.h()},l(t){e=v(t,"SECTION",{class:!0});var a=E(e);et(s.$$.fragment,a),i=A(a),l&&l.l(a),a.forEach(m),this.h()},h(){p(e,"class","flex justify-center flex-wrap-reverse")},m(t,a){q(t,e,a),st(s,e,null),f(e,i),l&&l.m(e,null),o=!0},p(t,[a]){l&&l.p&&(!o||a&4)&&V(l,c,t,t[2],o?X(c,t[2],a,null):W(t[2]),null)},i(t){o||(D(s.$$.fragment,t),D(l,t),o=!0)},o(t){H(s.$$.fragment,t),H(l,t),o=!1},d(t){t&&m(e),at(s),l&&l.d(t)}}}function it(r,e,s){let{$$slots:i={},$$scope:o}=e,{data:c}=e;const l=c.posts.map(t=>({...t,slug:t.title.replaceAll(" ","_").toLowerCase()}));return r.$$set=t=>{"data"in t&&s(1,c=t.data),"$$scope"in t&&s(2,o=t.$$scope)},[l,c,o,i]}class _t extends K{constructor(e){super(),M(this,e,it,rt,J,{data:1})}}export{_t as component};