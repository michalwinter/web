(function(e){function t(t){for(var s,i,r=t[0],u=t[1],d=t[2],l=0,f=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},o=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/web/vue.js/countdown/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=n("ecee"),o=n("c074"),i=n("ad3d");a["c"].add(o["b"]),s["a"].component("font-awesome-icon",i["a"]);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"disable-select",attrs:{id:"app"}},[n("fa-icon",{staticClass:"menu-icon",class:e.menu?"active-menu-icon":"",attrs:{icon:"bars"},on:{click:function(t){e.menu=!e.menu}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.menu,expression:"menu"}],staticClass:"menu"},[n("h3",{staticClass:"menu-title"},[e._v("Settings")]),n("div",{staticClass:"menu-content"},[n("div",{staticClass:"menu-content-item"},[n("h3",[e._v("Countdown Options")]),n("div",{staticStyle:{margin:"10px 0px"}},[n("h4",[e._v("Title:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}})]),n("button",{attrs:{disabled:e.countdown||e.duration.asSeconds()<1},on:{click:function(t){e.countdown=!0}}},[e._v(" Start ")]),n("button",{attrs:{disabled:!e.countdown||"setdatetime"===e.newCountdown.type},on:{click:function(t){e.countdown=!1}}},[e._v(" Pause ")])]),n("div",{staticClass:"menu-content-item"},[n("h3",[e._v("New Countdown")]),n("h4",[e._v("Countdown Type:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCountdown.type,expression:"newCountdown.type"}],staticStyle:{"margin-bottom":"10px"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCountdown,"type",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"settime"}},[e._v("Set hours etc.")]),n("option",{attrs:{value:"setdatetime"}},[e._v("Till Date and Time")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:"settime"===e.newCountdown.type,expression:"newCountdown.type === 'settime'"}],staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("div",{staticStyle:{display:"inline-flex"}},[n("h4",[e._v("Days:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCountdown.days,expression:"newCountdown.days"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCountdown,"days",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[e._v("0")]),e._l(99,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]),n("div",{staticStyle:{display:"inline-flex"}},[n("h4",[e._v("H:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCountdown.hours,expression:"newCountdown.hours"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCountdown,"hours",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[e._v("0")]),e._l(24,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),n("h4",[e._v("M:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCountdown.minutes,expression:"newCountdown.minutes"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCountdown,"minutes",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[e._v("0")]),e._l(60,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2),n("h4",[e._v("S:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.newCountdown.seconds,expression:"newCountdown.seconds"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.newCountdown,"seconds",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[e._v("0")]),e._l(60,(function(t){return n("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)])]),n("input",{directives:[{name:"show",rawName:"v-show",value:"setdatetime"===e.newCountdown.type,expression:"newCountdown.type === 'setdatetime'"},{name:"model",rawName:"v-model",value:e.newCountdown.datetime,expression:"newCountdown.datetime"}],attrs:{type:"datetime-local"},domProps:{value:e.newCountdown.datetime},on:{input:function(t){t.target.composing||e.$set(e.newCountdown,"datetime",t.target.value)}}}),n("br"),n("button",{staticStyle:{"margin-top":"10px"},on:{click:e.newCountdownFun}},[e._v(" Create ")])]),n("div",{staticClass:"menu-content-item"},[n("h3",[e._v("Countdown Style")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.style,expression:"style"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.style=t.target.multiple?n:n[0]}}},e._l(e.styles,(function(t){return n("option",{key:t.name,domProps:{selected:t.selected,value:t.name}},[e._v(" "+e._s(t.name)+" ")])})),0)])])]),n("div",{staticClass:"content"},[n("h2",{staticClass:"heading"},[e._v(e._s(e.title))]),n("div",{staticClass:"countdown"},[n("div",{staticClass:"countdown-unit"},[n("span",[e._v(e._s(1===Math.floor(e.duration.asDays()).toString().split("").length?"0"+Math.floor(e.duration.asDays()):Math.floor(e.duration.asDays())))]),n("span",{staticClass:"countdown-unit-title"},[e._v(" DAYS ")])]),n("div",{staticClass:"countdown-colon"},[e._v(":")]),n("div",{staticClass:"countdown-unit"},[n("span",[e._v(e._s(1===e.duration.hours().toString().split("").length?"0"+e.duration.hours():e.duration.hours()))]),n("span",{staticClass:"countdown-unit-title"},[e._v(" HOURS ")])]),n("div",{staticClass:"countdown-colon"},[e._v(":")]),n("div",{staticClass:"countdown-unit"},[n("span",[e._v(e._s(1===e.duration.minutes().toString().split("").length?"0"+e.duration.minutes():e.duration.minutes()))]),n("span",{staticClass:"countdown-unit-title"},[e._v(" MINUTES ")])]),n("div",{staticClass:"countdown-colon"},[e._v(":")]),n("div",{staticClass:"countdown-unit"},[n("span",[e._v(e._s(1===e.duration.seconds().toString().split("").length?"0"+e.duration.seconds():e.duration.seconds()))]),n("span",{staticClass:"countdown-unit-title"},[e._v(" SECONDS ")])])])])],1)},u=[],d=n("c1df"),c=n.n(d),l={name:"App",data:function(){return{moment:c.a,menu:!1,countdown:!1,newCountdown:{type:"",days:"",hours:"",minutes:"",seconds:"",datetime:void 0},title:"Countdown ⌚",duration:c.a.duration(),style:"SimpleBlueBlack",styles:[{name:"SimpleBlueBlack",selected:!0}]}},created:function(){var e=this;this.duration=c.a.duration(),setInterval((function(){e.countdown&&(e.duration=c.a.duration(e.duration-1e3,"milliseconds"))}),1e3)},methods:{newCountdownFun:function(){if("settime"===this.newCountdown.type)this.duration=c.a.duration(this.newCountdown.days||0,"days").add(this.newCountdown.hours||0,"hours").add(this.newCountdown.minutes||0,"minutes").add(this.newCountdown.seconds||0,"seconds");else if("setdatetime"===this.newCountdown.type){var e=c()(this.newCountdown.datetime,c.a.HTML5_FMT.DATETIME_LOCAL).unix(),t=e-c()().unix();this.duration=c.a.duration(1e3*t,"milliseconds"),this.countdown=!0,console.log(this.duration.humanize())}}}},f=l,m=(n("034f"),n("2877")),v=Object(m["a"])(f,r,u,!1,null,null,null),p=v.exports;a["c"].add(o["a"]),s["a"].component("fa-icon",i["a"]),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.3a8c6536.js.map