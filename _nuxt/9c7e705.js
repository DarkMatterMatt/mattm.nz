(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2f487ebe",content,!0,{sourceMap:!1})},371:function(t,e,n){var content=n(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("895697e2",content,!0,{sourceMap:!1})},372:function(t,e,n){var content=n(380);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("ca8f6114",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";n(370)},376:function(t,e,n){(e=n(9)(!1)).push([t.i,".m-container[data-v-7faf509f]{position:fixed;overflow-y:scroll;height:100%;width:100%;scroll-behavior:smooth;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch}.m-page[data-v-7faf509f]{height:90%;width:100%;scroll-snap-align:start}.m-between-pages[data-v-7faf509f]{justify-content:center;height:10%;width:100%}",""]),t.exports=e},377:function(t,e,n){"use strict";n(371)},378:function(t,e,n){(e=n(9)(!1)).push([t.i,".m-subtitle-container[data-v-f468e960]{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},379:function(t,e,n){"use strict";n(372)},380:function(t,e,n){(e=n(9)(!1)).push([t.i,".m-about[data-v-35c3233e]{align-items:center}",""]),t.exports=e},381:function(t,e,n){"use strict";n.r(e);n(44);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw r}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var r={name:"HomeAbout",props:{initialPage:{type:String,default:""}},data:function(){return{hideTooltips:!1,scrollFinishedTimeout:null,pageURLs:{home:"/",about:"/about/"}}},mounted:function(){this.$el.addEventListener("scroll",this.onScroll),this.initialPage&&this.scrollToPage(this.initialPage)},unmounted:function(){this.$el.removeEventListener("scroll",this.onScroll)},methods:{scrollToPage:function(t){var e=document.querySelector("*[data-page='".concat(t,"'"));e&&this.$el.scroll(0,e.offsetTop)},onScroll:function(){var t=this;clearTimeout(this.scrollFinishedTimeout),this.scrollFinishedTimeout=setTimeout((function(){return t.onScrollFinish()}),50),this.hideTooltips=!0},onScrollFinish:function(){this.hideTooltips=!1;var t=this.findMostTopPage();this.updateURL(t&&t.getAttribute("data-page")||"")},updateURL:function(t){if(t&&Object.prototype.hasOwnProperty.call(this.pageURLs,t)&&window.history&&window.history.replaceState){var path=this.pageURLs[t];window.location.pathname!==path&&window.history.replaceState({},t,path)}},findMostTopPage:function(){var t,e=null,n=1/0,l=o(this.$el.getElementsByClassName("m-page"));try{for(l.s();!(t=l.n()).done;){var r=t.value,rect=r.getBoundingClientRect(),c=Math.abs(rect.y);c<n&&(e=r,n=c)}}catch(t){l.e(t)}finally{l.f()}return e}}},c=(n(375),n(56)),d=n(74),m=n.n(d),f=n(164),v=n(400),h=n(373),y=n.n(h),_=n(78),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-container"},[n("home",{staticClass:"m-page",staticStyle:{"padding-top":"10%"},attrs:{"data-page":"home","hide-tooltips":t.hideTooltips}}),t._v(" "),n("div",{staticClass:"m-between-pages m-flex-column text-center"},[n("v-tooltip",{attrs:{top:"",disabled:t.hideTooltips,attach:"#link-about"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",attrs:{id:"link-about"},on:{click:function(e){return e.preventDefault(),t.scrollToPage("about")}}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3 mx-4"},[t._v("\n            mdi-menu-down\n          ")])],1)]}}])},[t._v(" "),n("span",[t._v("About")])])],1),t._v(" "),n("about",{staticClass:"m-page",staticStyle:{"padding-bottom":"10%"},attrs:{"data-page":"about","hide-tooltips":t.hideTooltips}})],1)}),[],!1,null,"7faf509f",null);e.default=component.exports;m()(component,{Home:n(382).default,About:n(383).default}),m()(component,{VIcon:f.a,VTooltip:v.a}),y()(component,{Ripple:_.a})},382:function(t,e,n){"use strict";n.r(e);var o={name:"Home",props:{hideTooltips:Boolean},data:function(){return{links:{about:"#about",blog:"/blog",github:"//github.com/DarkMatterMatt",linkedin:"//linkedin.com/in/matt-moran-a0b74318b/"}}}},l=(n(377),n(56)),r=n(74),c=n.n(r),d=n(164),m=n(400),f=n(373),v=n.n(f),h=n(78),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-flex-column"},[n("div",{staticStyle:{flex:"3 0 0"}}),t._v(" "),n("div",{staticClass:"m-small-caps text-h1 font-weight-regular mb-6 text-center"},[t._v("\n    Matt Moran\n  ")]),t._v(" "),n("div",{staticClass:"m-subtitle-container"},[n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-github"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",attrs:{id:"link-github",href:t.links.github}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3"},[t._v(" mdi-github ")])],1)]}}])},[t._v(" "),n("span",[t._v("GitHub")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-blog"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("NuxtLink",{staticClass:"m-no-decoration",attrs:{id:"link-blog",to:t.links.blog}},[n("v-icon",t._g({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3 mx-4"},o),[t._v("\n            mdi-pencil-box-multiple\n          ")])],1)]}}])},[t._v(" "),n("span",[t._v("Blog")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-linkedin"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",attrs:{id:"link-linkedin",href:t.links.linkedin}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3"},[t._v("\n            mdi-linkedin\n          ")])],1)]}}])},[t._v(" "),n("span",[t._v("LinkedIn")])])],1),t._v(" "),n("div",{staticStyle:{flex:"4 0 0"}})])}),[],!1,null,"f468e960",null);e.default=component.exports;c()(component,{VIcon:d.a,VTooltip:m.a}),v()(component,{Ripple:h.a})},383:function(t,e,n){"use strict";n.r(e);var o={name:"About",props:{hideTooltips:Boolean},data:function(){return{items:[{active:!0,title:"Summary",icon:"mdi-account",subItems:["Fields of interest: cyber security & software development"]},{title:"Work Experience",icon:"mdi-briefcase",subItems:["Summer 2020/2021. Security Intern at Aura Information Security","Summer 2019/2020. Security Intern at Aura Information Security"]},{title:"Education",icon:"mdi-school",subItems:["Currently studying Software Engineering at the University of Auckland","Available to begin graduate roles from Jan 2023","A+ GPA (2019 & 2020 Dean's Honours list)","2020 Dean's Leadership Programme"]}]}}},l=(n(379),n(56)),r=n(74),c=n.n(r),d=n(165),m=n(167),f=n(105),v=n(69),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-flex-column m-about"},[n("div",{staticStyle:{flex:"3 0 0"}}),t._v(" "),n("div",{staticClass:"m-small-caps text-h2 font-weight-regular mb-6 text-center"},[t._v("\n    About Me\n  ")]),t._v(" "),n("v-list",{staticClass:"m-list",attrs:{width:this.$vuetify.breakpoint.mobile?"90%":"600"}},t._l(t.items,(function(e){return n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(e.subItems,(function(text){return n("v-list-item",{key:text},[n("v-list-item-content",{domProps:{textContent:t._s(text)}})],1)})),1)],1)})),1),t._v(" "),n("div",{staticStyle:{flex:"4 0 0"}})],1)}),[],!1,null,"35c3233e",null);e.default=component.exports;c()(component,{VList:d.a,VListGroup:m.a,VListItem:f.a,VListItemContent:v.a,VListItemTitle:v.b})},401:function(t,e,n){"use strict";n.r(e);var o={name:"About",layout:"minimal",head:{title:"Matt Moran",titleTemplate:"%s"}},l=n(56),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("home-about",{attrs:{"initial-page":"about"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeAbout:n(381).default})}}]);