(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(t,e,n){var content=n(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("736d707f",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(347);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("18f98982",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";var o={data:function(){return{menu:[{name:"Blog",icon:"mdi-pencil-box-multiple",link:"/blog"},{name:"Projects",icon:"mdi-puzzle",link:"/projects"},{name:"About",icon:"mdi-account",link:"/#about"}],drawer:!1}},computed:{currentRouteName:function(){return this.$store.state.layout.title}},methods:{isMobile:function(){return this.$vuetify.breakpoint.mobile}}},r=n(65),l=n(83),c=n.n(l),v=n(363),m=n(368),f=n(364),d=n(245),_=n(369),x=n(164),h=n(165),k=n(105),V=n(166),w=n(69),y=n(365),M=n(367),C=n(366),N=n(239),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[t.isMobile()?n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{to:"/",router:"",exact:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("\n            Matt Moran\n          ")])],1)],1),t._v(" "),t._l(t.menu,(function(e){return n("v-list-item",{key:e.name,attrs:{to:e.link,router:""}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)}))],2)],1):t._e(),t._v(" "),t.isMobile()?n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"pl-2",domProps:{textContent:t._s(t.currentRouteName)}})],1):t._e(),t._v(" "),t.isMobile()?t._e():n("v-app-bar",{attrs:{app:""}},[n("NuxtLink",{staticClass:"m-no-decoration",attrs:{to:"/"}},[n("v-toolbar-title",[t._v("Matt Moran")])],1),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.menu,(function(e){return n("v-btn",{key:e.name,attrs:{to:e.link}},[n("v-icon",{attrs:{left:""},domProps:{textContent:t._s(e.icon)}}),t._v("\n      "+t._s(e.name)+"\n    ")],1)}))],2),t._v(" "),n("v-main",[n("v-container",{staticStyle:{height:"100%"}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:m.a,VAppBarNavIcon:f.a,VBtn:d.a,VContainer:_.a,VIcon:x.a,VList:h.a,VListItem:k.a,VListItemAction:V.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:y.a,VNavigationDrawer:M.a,VSpacer:C.a,VToolbarTitle:N.a})},244:function(t,e,n){"use strict";n(346);var o=n(65),r=n(83),l=n.n(r),c=n(363),v=n(365),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:c.a,VMain:v.a})},253:function(t,e,n){n(254),t.exports=n(255)},281:function(t,e,n){"use strict";n(210)},282:function(t,e,n){(e=n(9)(!1)).push([t.i,"h1[data-v-6ab8854e]{font-size:20px}",""]),t.exports=e},287:function(t,e,n){var content=n(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("be3f3eb6",content,!0,{sourceMap:!1})},288:function(t,e,n){(e=n(9)(!1)).push([t.i,'.m-clickable{cursor:pointer}.m-clickable:hover{opacity:.7}.m-no-decoration{text-decoration:none}.m-small-caps{font-feature-settings:"smcp";font-variant:small-caps}.m-flex-column{display:flex;flex-direction:column}.m-flex-spacer{flex:1 1 0}',""]),t.exports=e},346:function(t,e,n){"use strict";n(224)},347:function(t,e,n){(e=n(9)(!1)).push([t.i,"::-webkit-scrollbar{display:none}",""]),t.exports=e},348:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{title:""}},r={updateTitle:function(t,e){t.title=e}}},66:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(281),n(65)),l=n(83),c=n.n(l),v=n(363),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"6ab8854e",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[253,5,1,6]]]);