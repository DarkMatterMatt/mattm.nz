(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{435:function(e,n,t){"use strict";t.r(n),n.default=[{active:!0,title:"Personal Interests",icon:"mdi-account",subItems:["🛠️ Software development","🕵 Cybersecurity","🧁 Baking","🛩️ Flying gliders"]},{title:"Work Experience",icon:"mdi-briefcase",subItems:["Summer 2021/2022. Software Engineer Intern @ Canva","Summer 2020/2021. Security Intern @ Aura Information Security","Summer 2019/2020. Security Intern @ Aura Information Security"]},{title:"Education",icon:"mdi-school",subItems:["Software Engineering @ University of Auckland","A+ GPA. 2019, 2020 & 2021 Dean's Honours list","2020 Dean's Leadership Programme"]}]},438:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return d}));t(26),t(57),t(36);function o(component){var e=component.dir;if(!e)try{e=component.$parent.$props.document.dir}catch(e){}if(!e)try{e=component.$ssrContext.url}catch(e){}if(!e)try{e=component.$parent.blog.dir}catch(e){}if(!e)throw new Error("Prop `dir` must be set if not in blog/post/index.md");return e}function r(e,n){return e=e.replace(/^\/+|\/+$/g,""),t(441)("./".concat(e,"/media/").concat(n))}function c(component){return r(o(component),component.src)}function d(component){if(!/\.mp4$/.test(component.src))throw new Error("Video must be an mp4 file.");var e=o(component),n=r(e,component.src);try{return[{src:r(e,component.src.replace(/\.mp4$/,".webm")),type:"video/webm"},{src:n,type:"video/mp4"}]}catch(e){return[{src:n,type:"video/mp4"}]}}},441:function(e,n,t){var map={"./about/data":435,"./about/data.js":435,"./blog/directory-traversal-on-routers-running-asuswrt/index.md":442,"./blog/discord-dos-with-single-message/index.md":443,"./blog/discord-dos-with-single-message/media/discord_1.png":444,"./blog/discord-dos-with-single-message/media/discord_2.png":445,"./blog/discord-embed-spoofing/index.md":446,"./blog/discord-embed-spoofing/media/discord_1.png":447,"./blog/discord-embed-spoofing/media/discord_2.png":448,"./blog/edit-inspera-exam-after-submission/index.md":449,"./blog/edit-inspera-exam-after-submission/media/changing-image.mp4":450,"./blog/hello/index.md":451,"./blog/sync-facebook-events-calendar/index.md":452,"./blog/sync-facebook-events-calendar/media/facebook-events-calendar.png":453,"./blog/sync-facebook-events-calendar/media/google-calendar-add.png":454,"./blog/sync-facebook-events-calendar/media/google-calendar-url.png":455,"./blog/sync-facebook-events-calendar/media/outlook-calendar-add.png":456,"./blog/sync-facebook-events-calendar/media/outlook-calendar-url.png":457,"./projects/commute-live/index.md":458,"./projects/commute-live/media/screenshot.png":459};function o(e){var n=r(e);return t(n)}function r(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=441},442:function(e,n){},443:function(e,n){},444:function(e,n,t){e.exports=t.p+"img/discord_1.e18e4ae.png"},445:function(e,n,t){e.exports=t.p+"img/discord_2.1a4d2ee.png"},446:function(e,n){},447:function(e,n,t){e.exports=t.p+"img/discord_1.1d91b22.png"},448:function(e,n,t){e.exports=t.p+"img/discord_2.cf1bc4a.png"},449:function(e,n){},450:function(e,n,t){e.exports=t.p+"videos/changing-image.c26fb94.mp4"},451:function(e,n){},452:function(e,n){},453:function(e,n,t){e.exports=t.p+"img/facebook-events-calendar.59899d5.png"},454:function(e,n,t){e.exports=t.p+"img/google-calendar-add.45a7b7b.png"},455:function(e,n,t){e.exports=t.p+"img/google-calendar-url.ef919ed.png"},456:function(e,n,t){e.exports=t.p+"img/outlook-calendar-add.5dab655.png"},457:function(e,n,t){e.exports=t.p+"img/outlook-calendar-url.6442911.png"},458:function(e,n){},459:function(e,n,t){e.exports=t.p+"img/screenshot.3111954.png"},466:function(e,n,t){var content=t(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(22).default)("17579a94",content,!0,{sourceMap:!1})},485:function(e,n,t){"use strict";t(466)},486:function(e,n,t){var o=t(21)(!1);o.push([e.i,"img[data-v-80e199c0]{max-width:100%}",""]),e.exports=o},507:function(e,n,t){"use strict";t.r(n);var o=t(438),r={props:{dir:{type:String,default:""},src:{type:String,required:!0},alt:{type:String,default:""}},computed:{computedSrc:function(){return Object(o.a)(this)},computedAlt:function(){return this.alt||this.src}}},c=(t(485),t(72)),component=Object(c.a)(r,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"my-8"},[n("img",{attrs:{src:e.computedSrc,alt:e.computedAlt}}),e._v(" "),e.$slots.default?n("div",{staticClass:"text-caption text-center mb-2"},[e._t("default")],2):e._e()])}),[],!1,null,"80e199c0",null);n.default=component.exports}}]);