(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{435:function(t,e,n){"use strict";n.r(e),e.default=[{active:!0,title:"Personal Interests",icon:"mdi-account",subItems:["🛠️ Software development","🕵 Cybersecurity","🧁 Baking","🛩️ Flying gliders"]},{title:"Work Experience",icon:"mdi-briefcase",subItems:["Summer 2021/2022. Software Engineer Intern @ Canva","Summer 2020/2021. Security Intern @ Aura Information Security","Summer 2019/2020. Security Intern @ Aura Information Security"]},{title:"Education",icon:"mdi-school",subItems:["Software Engineering @ University of Auckland","A+ GPA. 2019, 2020 & 2021 Dean's Honours list","2020 Dean's Leadership Programme"]}]},440:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("30b3c34d",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(440)},464:function(t,e,n){var o=n(21)(!1);o.push([t.i,".m-about[data-v-21cf74d0]{align-items:center}",""]),t.exports=o},474:function(t,e,n){"use strict";n.r(e);var o=n(189),r=n(190),c=n(128),l=n(66),m=n(435),d={name:"About",props:{hideTooltips:Boolean},data:function(){return{items:m.default}}},f=(n(463),n(72)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-flex-column m-about"},[e("div",{staticStyle:{flex:"3 0 0"}}),t._v(" "),e("div",{staticClass:"m-small-caps text-h2 font-weight-regular mb-6 text-center"},[t._v("\n    About Me\n  ")]),t._v(" "),e(o.a,{staticClass:"m-list",attrs:{width:t.$vuetify.breakpoint.mobile?"90%":600}},t._l(t.items,(function(n){return e(r.a,{key:n.title,attrs:{"prepend-icon":n.icon,role:"listitem"},scopedSlots:t._u([{key:"activator",fn:function(){return[e(l.a,[e(l.b,{domProps:{textContent:t._s(n.title)}})],1)]},proxy:!0}],null,!0),model:{value:n.active,callback:function(e){t.$set(n,"active",e)},expression:"item.active"}},[t._v(" "),e(o.a,{attrs:{dense:""}},t._l(n.subItems,(function(text){return e(c.a,{key:text},[e(l.a,{domProps:{textContent:t._s(text)}})],1)})),1)],1)})),1),t._v(" "),e("div",{staticStyle:{flex:"4 0 0"}})],1)}),[],!1,null,"21cf74d0",null);e.default=component.exports}}]);