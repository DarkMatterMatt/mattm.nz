(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{372:function(t,e,n){var content=n(377);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("22515956",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(379);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("895697e2",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("ca8f6114",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(372)},377:function(t,e,n){(e=n(10)(!1)).push([t.i,".m-container[data-v-713fd07e]{position:fixed;overflow-y:scroll;height:100%;width:100%;scroll-behavior:smooth;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch}.m-page[data-v-713fd07e]{height:90%;width:100%;scroll-snap-align:start}.m-between-pages[data-v-713fd07e]{justify-content:center;height:10%;width:100%}",""]),t.exports=e},378:function(t,e,n){"use strict";n(373)},379:function(t,e,n){(e=n(10)(!1)).push([t.i,".m-subtitle-container[data-v-f468e960]{display:flex;justify-content:center;align-items:center}",""]),t.exports=e},380:function(t,e,n){"use strict";n(374)},381:function(t,e,n){(e=n(10)(!1)).push([t.i,".m-about[data-v-35c3233e]{align-items:center}",""]),t.exports=e},382:function(t,e,n){"use strict";n.r(e);n(44);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw l}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={name:"HomeAbout",props:{initialPage:{type:String,default:""}},data:function(){return{hideTooltips:!1,currentPage:"home",scrollFinishedTimeout:null,pages:{Home:{url:"/"},About:{url:"/about/"}}}},mounted:function(){this.initialPage&&this.scrollToPage(this.initialPage)},methods:{scrollToPage:function(t){var e=document.querySelector("*[data-page='".concat(t,"'"));e&&this.$el.scroll(0,e.offsetTop)},onScroll:function(){var t=this;clearTimeout(this.scrollFinishedTimeout),this.scrollFinishedTimeout=setTimeout((function(){return t.onScrollFinish()}),50);var e=this.$el.scrollTop/(this.$el.scrollHeight-this.$el.clientHeight);this.$el.querySelector(".m-rotate").style.setProperty("--rotate",1.5*e),this.hideTooltips=!0},onScrollFinish:function(){this.hideTooltips=!1;var t=this.findMostTopPage();this.currentPage=t.getAttribute("data-page"),this.updateURL(this.currentPage)},updateURL:function(t){if(t&&Object.prototype.hasOwnProperty.call(this.pages,t)&&window.history&&window.history.replaceState){var path=this.pages[t].url;window.location.pathname!==path&&window.history.replaceState({},t,path)}},findMostTopPage:function(){var t,e=null,n=1/0,r=o(this.$el.getElementsByClassName("m-page"));try{for(r.s();!(t=r.n()).done;){var l=t.value,rect=l.getBoundingClientRect(),c=Math.abs(rect.y);c<n&&(e=l,n=c)}}catch(t){r.e(t)}finally{r.f()}return e}}},c=(n(376),n(56)),f=n(371),d=n.n(f),m=n(174),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll.self",value:t.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"m-container"},[n("home",{staticClass:"m-page",staticStyle:{"padding-top":"10%"},attrs:{"data-page":"Home","hide-tooltips":t.hideTooltips}}),t._v(" "),n("between-pages",{staticClass:"m-between-pages",attrs:{"current-page":t.currentPage,"after-page":"About","before-page":"Home","hide-tooltips":t.hideTooltips,"scroll-to-page":t.scrollToPage}}),t._v(" "),n("about",{staticClass:"m-page",staticStyle:{"padding-bottom":"10%"},attrs:{"data-page":"About","hide-tooltips":t.hideTooltips}})],1)}),[],!1,null,"713fd07e",null);e.default=component.exports;installComponents(component,{Home:n(383).default,BetweenPages:n(384).default,About:n(385).default}),d()(component,{Scroll:m.b})},383:function(t,e,n){"use strict";n.r(e);var o={name:"Home",props:{hideTooltips:Boolean},data:function(){return{links:{about:"#about",blog:"/blog",github:"//github.com/DarkMatterMatt",linkedin:"//linkedin.com/in/matt-moran-a0b74318b/"}}}},r=(n(378),n(56)),l=n(74),c=n.n(l),f=n(164),d=n(407),m=n(371),v=n.n(m),h=n(78),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-flex-column"},[n("div",{staticStyle:{flex:"3 0 0"}}),t._v(" "),n("div",{staticClass:"m-small-caps text-h1 font-weight-regular mb-6 text-center"},[t._v("\n    Matt Moran\n  ")]),t._v(" "),n("div",{staticClass:"m-subtitle-container"},[n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-github"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",attrs:{id:"link-github",href:t.links.github}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3"},[t._v(" mdi-github ")])],1)]}}])},[t._v(" "),n("span",[t._v("GitHub")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-blog"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("NuxtLink",{staticClass:"m-no-decoration",attrs:{id:"link-blog",to:t.links.blog}},[n("v-icon",t._g({directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3 mx-4"},o),[t._v("\n            mdi-pencil-box-multiple\n          ")])],1)]}}])},[t._v(" "),n("span",[t._v("Blog")])]),t._v(" "),n("v-tooltip",{attrs:{bottom:"",disabled:t.hideTooltips,attach:"#link-linkedin"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",attrs:{id:"link-linkedin",href:t.links.linkedin}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable text-h3"},[t._v("\n            mdi-linkedin\n          ")])],1)]}}])},[t._v(" "),n("span",[t._v("LinkedIn")])])],1),t._v(" "),n("div",{staticStyle:{flex:"4 0 0"}})])}),[],!1,null,"f468e960",null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:d.a}),v()(component,{Ripple:h.a})},384:function(t,e,n){"use strict";n.r(e);n(386);var o=n(17),r=n(30),l=n(31),c=n(27),f=n(16),d=n(7),m=n(387);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,l=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=v(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"onPageJumpClick",value:function(){this.scrollToPage(this.otherPage)}},{key:"isPage1",get:function(){return this.currentPage!==this.afterPage}},{key:"isPage2",get:function(){return!this.isPage1}},{key:"otherPage",get:function(){return this.isPage1?this.afterPage:this.beforePage}}]),n}(m.c);h([Object(m.b)({default:!1})],y.prototype,"hideTooltips",void 0),h([Object(m.b)({type:String,required:!0})],y.prototype,"currentPage",void 0),h([Object(m.b)({type:String,required:!0})],y.prototype,"afterPage",void 0),h([Object(m.b)({type:String,required:!0})],y.prototype,"beforePage",void 0),h([Object(m.b)({type:Function,required:!0})],y.prototype,"scrollToPage",void 0);var _=y=h([Object(m.a)({})],y),k=n(56),P=n(74),w=n.n(P),x=n(164),S=n(407),T=n(371),C=n.n(T),j=n(78),component=Object(k.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-flex-column text-center"},[n("v-tooltip",{attrs:{top:t.isPage1,bottom:t.isPage2,disabled:t.hideTooltips,"nudge-top":t.isPage1?-8:8},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("a",t._g({staticClass:"m-no-decoration",on:{click:function(e){return e.preventDefault(),t.onPageJumpClick(e)}}},o),[n("v-icon",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"m-clickable m-rotate m-reverse text-h3 mx-4"},[t._v("\n          mdi-menu-down\n        ")])],1)]}}])},[t._v(" "),n("span",{domProps:{textContent:t._s(t.otherPage)}})])],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VIcon:x.a,VTooltip:S.a}),C()(component,{Ripple:j.a})},385:function(t,e,n){"use strict";n.r(e);var o={name:"About",props:{hideTooltips:Boolean},data:function(){return{items:[{active:!0,title:"Summary",icon:"mdi-account",subItems:["Fields of interest: cyber security & software development"]},{title:"Work Experience",icon:"mdi-briefcase",subItems:["Summer 2020/2021. Security Intern at Aura Information Security","Summer 2019/2020. Security Intern at Aura Information Security"]},{title:"Education",icon:"mdi-school",subItems:["Currently studying Software Engineering at the University of Auckland","Available to begin graduate roles from Jan 2023","A+ GPA (2019 & 2020 Dean's Honours list)","2020 Dean's Leadership Programme"]}]}}},r=(n(380),n(56)),l=n(74),c=n.n(l),f=n(165),d=n(167),m=n(105),v=n(69),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-flex-column m-about"},[n("div",{staticStyle:{flex:"3 0 0"}}),t._v(" "),n("div",{staticClass:"m-small-caps text-h2 font-weight-regular mb-6 text-center"},[t._v("\n    About Me\n  ")]),t._v(" "),n("v-list",{staticClass:"m-list",attrs:{width:this.$vuetify.breakpoint.mobile?"90%":"600"}},t._l(t.items,(function(e){return n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(n){t.$set(e,"active",n)},expression:"item.active"}},[t._v(" "),n("v-list",{attrs:{dense:""}},t._l(e.subItems,(function(text){return n("v-list-item",{key:text},[n("v-list-item-content",{domProps:{textContent:t._s(text)}})],1)})),1)],1)})),1),t._v(" "),n("div",{staticStyle:{flex:"4 0 0"}})],1)}),[],!1,null,"35c3233e",null);e.default=component.exports;c()(component,{VList:f.a,VListGroup:d.a,VListItem:m.a,VListItemContent:v.a,VListItemTitle:v.b})},408:function(t,e,n){"use strict";n.r(e);var o={name:"About",layout:"minimal",head:{title:"Matt Moran",titleTemplate:"%s"}},r=n(56),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("home-about",{attrs:{"initial-page":"About"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeAbout:n(382).default})}}]);