(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{490:function(t,e,n){"use strict";n.r(e);n(8),n(54);var r=n(20),o=n(24),c=(n(73),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("blog",{deep:!0}).where({dir:"/blog/".concat(o.slug)}).fetch();case 3:return c=e.sent,l=Object(r.a)(c,1),d=l[0],e.abrupt("return",{blog:d});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.blog.title}},mounted:function(){this.$store.commit("layout/updateTitle","Blog")}}),l=n(72),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-flex-column m-reading-width",staticStyle:{height:"100%"}},[e("h1",{domProps:{textContent:t._s(t.blog.title)}}),t._v(" "),t.blog.description?e("div",[e("p",{domProps:{textContent:t._s(t.blog.description)}}),t._v(" "),e("hr",{staticClass:"mb-4"})]):t._e(),t._v(" "),e("nuxt-content",{attrs:{document:t.blog}}),t._v(" "),e("div",{staticClass:"m-flex-spacer"}),t._v(" "),e("div",{staticClass:"text-body-2 mt-1"},[t._v("\n    Last updated: "+t._s(t._f("formatDate")(t.blog.updatedAt))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);