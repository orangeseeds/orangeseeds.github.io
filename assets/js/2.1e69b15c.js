(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{259:function(t,s,a){},260:function(t,s,a){"use strict";a(259)},261:function(t,s,a){"use strict";a.r(s);var e=a(3),i=a(98),o=a(100),r=a(99),l={data:()=>({header:{showCover:!1,coverImage:null,title:null,description:null}}),components:{SiteHeader:o.a,Card:i.a,Error:r.a},methods:{...Object(e.b)(["updateSite","updatePage","updateParams"]),updateLayoutClass(){this.$el.parentNode.className="error-template"}},computed:{...Object(e.c)(["type","blog","posts"])},watch:{$page(){this.updatePage(this.$page),this.updateLayoutClass()},$route(){this.updateParams(this.$route.params)}},mounted(){this.updatePage(this.$page),this.updateSite(this.$site),this.updateParams(this.$route.params),this.updateLayoutClass()}},n=(a(260),a(0)),u=Object(n.a)(l,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"site-wrapper"},[s("site-header",{attrs:{blog:t.blog,header:t.header}},[s("nav",{staticClass:"site-nav-center"},[s("a",{staticClass:"site-nav-logo",attrs:{href:t.blog.base}},[t.blog.logo?s("img",{staticClass:"site-logo",attrs:{src:t.blog.logo,alt:t.blog.title}}):s("span",[t._v(t._s(t.blog.title))])])])]),t._v(" "),s("main",{staticClass:"site-main outer",attrs:{id:"site-main"}},[s("div",{staticClass:"inner"},[s("error",{attrs:{description:"Page not found",code:"404",link:t.blog.base}})],1)]),t._v(" "),t.posts.length>0?s("aside",{staticClass:"outer"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"post-feed"},t._l(t.posts.slice(0,3),(function(t,a){return s("card",{key:a,attrs:{post:t}})})),1)])]):t._e()],1)}),[],!1,null,null,null);s.default=u.exports}}]);