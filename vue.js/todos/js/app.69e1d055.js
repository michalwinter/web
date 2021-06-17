(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue.js/todos/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"disable-select",attrs:{id:"app"}},[t._m(0),a("main",[a("div",{staticClass:"text-greeting"},[t._v(" Welcome, "),a("span",{staticClass:"greeting-name"},[t._v(t._s(t.name))])]),a("div",{staticClass:"tasks-div"},[a("div",{staticClass:"text-section-title"},[a("span",[t._v(t._s(t.taskEdit?"Settings":"Your tasks"))])]),t.taskEdit?t._e():a("div",{staticClass:"tasks"},[0===t.tasks.length?a("div",{staticClass:"tasks"},[a("div",{staticClass:"task-item"},[t._v("There are no tasks!")])]):t._e(),t._l(t.tasks,(function(e){return a("div",{key:e.title,staticClass:"task-item"},[e.done?a("i",{staticClass:"fas fa-check-circle task-icon",on:{click:function(t){e.done=!1}}}):t._e(),e.done?t._e():a("i",{staticClass:"far fa-circle task-icon",on:{click:function(t){e.done=!0}}}),a("div",{staticClass:"task-text"},[t._v(t._s(e.title))])])}))],2),t.taskEdit?a("div",[a("div",{staticClass:"tasks-add-item"},[a("div",{staticClass:"tasks-add-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskTitle,expression:"newTaskTitle"}],attrs:{type:"text",placeholder:"Task title"},domProps:{value:t.newTaskTitle},on:{input:function(e){e.target.composing||(t.newTaskTitle=e.target.value)}}})]),a("i",{staticClass:"fas fa-plus",on:{click:function(e){return t.addTask()}}})]),a("div",{staticClass:"tasks-edit-item"},[a("i",{staticClass:"fas fa-user-tag"}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.name},on:{change:function(e){return t.nameChange()},input:function(e){e.target.composing||(t.name=e.target.value)}}})])]):t._e()])]),a("i",{directives:[{name:"show",rawName:"v-show",value:!t.taskEdit,expression:"!taskEdit"}],staticClass:"fas fa-pen fab-edit",on:{click:function(e){t.taskEdit=!t.taskEdit}}}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.taskEdit,expression:"taskEdit"}],staticClass:"fas fa-times fab-edit",on:{click:function(e){t.taskEdit=!t.taskEdit}}})])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-panel"},[a("a",{attrs:{href:"/"}},[t._v("All Projects >")])])}],o=(a("b0c0"),{name:"App",data:function(){return{name:"Your Name",taskEdit:!1,newTaskTitle:"",tasks:[]}},created:function(){localStorage.getItem("todo_tasks")?this.updateData():localStorage.setItem("todo_tasks","[]"),localStorage.getItem("todo_name")?this.updateName():localStorage.setItem("todo_name",this.name)},methods:{addTask:function(){if(""!==this.newTaskTitle){var t={title:this.newTaskTitle,done:!1};this.tasks.push(t),console.log(t,this.tasks),this.uploadData(),this.newTaskTitle=""}},uploadData:function(){localStorage.setItem("todo_tasks",JSON.stringify(this.tasks))},updateData:function(){this.tasks=JSON.parse(localStorage.getItem("todo_tasks"))},nameChange:function(){localStorage.setItem("todo_name",this.name)},updateName:function(){this.name=localStorage.getItem("todo_name")}},watch:{tasks:{handler:function(t){localStorage.setItem("todo_tasks",JSON.stringify(t))},deep:!0}}}),r=o,c=(a("034f"),a("2877")),l=Object(c["a"])(r,n,i,!1,null,null,null),u=l.exports,d=a("2b27"),f=a.n(d);s["a"].config.productionTip=!1,s["a"].use(f.a),s["a"].$cookies.config("30d"),new s["a"]({render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.69e1d055.js.map