(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{212:function(t,e,n){var content=n(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("736d707f",content,!0,{sourceMap:!1})},227:function(t,e,n){var content=n(348);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("18f98982",content,!0,{sourceMap:!1})},247:function(t,e,n){"use strict";var o={data:function(){return{menu:[{name:"Blog",icon:"mdi-pencil-box-multiple",link:"/blog"},{name:"Projects",icon:"mdi-puzzle",link:"/projects"},{name:"About",icon:"mdi-account",link:"/about"}],drawer:!1}},computed:{currentRouteName:function(){return this.$store.state.layout.title}},methods:{isMobile:function(){return this.$vuetify.breakpoint.mobile}}},r=n(67),l=n(82),c=n.n(l),d=n(362),m=n(367),v=n(363),f=n(249),_=n(368),x=n(165),h=n(166),k=n(107),w=n(167),V=n(77),y=n(364),M=n(366),C=n(365),N=n(242),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[t.isMobile()?n("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{attrs:{to:"/",router:"",exact:""}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"font-weight-bold"},[t._v("\n            Matt Moran\n          ")])],1)],1),t._v(" "),t._l(t.menu,(function(e){return n("v-list-item",{key:e.name,attrs:{to:e.link,router:""}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1)],1)}))],2)],1):t._e(),t._v(" "),t.isMobile()?n("v-app-bar",{attrs:{app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"pl-2",domProps:{textContent:t._s(t.currentRouteName)}})],1):t._e(),t._v(" "),t.isMobile()?t._e():n("v-app-bar",{attrs:{app:""}},[n("NuxtLink",{staticClass:"m-no-decoration",attrs:{to:"/"}},[n("v-toolbar-title",[t._v("Matt Moran")])],1),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.menu,(function(e){return n("v-btn",{key:e.name,attrs:{to:e.link}},[n("v-icon",{attrs:{left:""},domProps:{textContent:t._s(e.icon)}}),t._v("\n      "+t._s(e.name)+"\n    ")],1)}))],2),t._v(" "),n("v-main",[n("v-container",{staticStyle:{height:"100%"}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:v.a,VBtn:f.a,VContainer:_.a,VIcon:x.a,VList:h.a,VListItem:k.a,VListItemAction:w.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:y.a,VNavigationDrawer:M.a,VSpacer:C.a,VToolbarTitle:N.a})},248:function(t,e,n){"use strict";n(347);var o=n(67),r=n(82),l=n.n(r),c=n(362),d=n(364),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{dark:""}},[e("v-main",[e("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:c.a,VMain:d.a})},256:function(t,e,n){n(257),t.exports=n(258)},285:function(t,e,n){"use strict";n(212)},286:function(t,e,n){var o=n(15)(!1);o.push([t.i,"h1[data-v-6ab8854e]{font-size:20px}",""]),t.exports=o},291:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("be3f3eb6",content,!0,{sourceMap:!1})},292:function(t,e,n){var o=n(15)(!1);o.push([t.i,'@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}table{border-collapse:collapse;width:100%}table td,table th{border:1px solid var(--v-primary-base);padding:8px}table th{padding-top:12px;padding-bottom:12px;text-align:left}.m-clickable{cursor:pointer}.m-clickable:hover{opacity:.7}.m-no-decoration{text-decoration:none}.m-small-caps{font-feature-settings:"smcp";font-variant:small-caps}.m-flex-column{display:flex;flex-direction:column;height:100%}.m-flex-spacer{flex:1 1 0}.m-rotate{--rotate:0;-webkit-animation:rotate 1s linear calc(var(--rotate)*-1s) infinite paused;animation:rotate 1s linear calc(var(--rotate)*-1s) infinite paused}.m-reverse{animation-direction:reverse}.m-reading-width{max-width:740px;margin:0 auto}',""]),t.exports=o},347:function(t,e,n){"use strict";n(227)},348:function(t,e,n){var o=n(15)(!1);o.push([t.i,"::-webkit-scrollbar{display:none}",""]),t.exports=o},349:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{title:""}},r={updateTitle:function(t,e){t.title=e}}},74:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(285),n(67)),l=n(82),c=n.n(l),d=n(362),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"6ab8854e",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[256,18,3,19]]]);