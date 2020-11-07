(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224d50"],{e28e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"bg-light sidebar"},[e._m(0),s("div",{staticClass:"input-group mt-2"},[e.realtime?s("input",{ref:"classSearch",staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Title/Topic/Prof./Desc.",disabled:!e.workerLoaded},on:{input:function(t){return e.onInput(t.target.value)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getClass(t.target.value)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeClassList()}}}):s("input",{ref:"classSearch",staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"Title/Topic/Prof./Desc.",disabled:!e.workerLoaded},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getClass(t.target.value)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closeClassList()}}}),s("div",{staticClass:"input-group-append"},[e.loading?s("div",{staticClass:"spinner-border my-auto text-primary mx-1",staticStyle:{width:"1.4rem",height:"1.4rem"},attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):s("span",{staticClass:"input-group-text px-2 click-icon"},[s("i",{staticClass:"fas fa-search"})])])]),e.inputCourses.length?s("div",{ref:"classList",staticClass:"card card-body p-1"},[s("ClassList",{ref:"enteringClassList",attrs:{courses:e.inputCourses,matches:e.inputMatches,schedule:e.schedule.currentSchedule,"is-entering":!0,"show-classlist-title":e.display.showClasslistTitle,"expand-on-entering":e.display.expandOnEntering},on:{"update-course":e.updateCourse,"course-modal":function(t){return e.modal.showCourseModal(t.crs,t.match)},close:function(t){return e.closeClassList()}}})],1):s("div",{staticClass:"mx-3 my-2"},[s("div",{staticClass:"form-group row no-gutters mt-0 mb-1 mx-2"},[e._m(1),s("div",[s("div",{staticClass:"custom-control custom-checkbox ml-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.realtime,expression:"realtime"}],staticClass:"custom-control-input",attrs:{id:"realtime",type:"checkbox"},domProps:{checked:Array.isArray(e.realtime)?e._i(e.realtime,null)>-1:e.realtime},on:{change:function(t){var s=e.realtime,a=t.target,r=!!a.checked;if(Array.isArray(s)){var n=null,i=e._i(s,n);a.checked?i<0&&(e.realtime=s.concat([n])):i>-1&&(e.realtime=s.slice(0,i).concat(s.slice(i+1)))}else e.realtime=r}}}),s("label",{staticClass:"custom-control-label",attrs:{for:"realtime"}})])])]),e._m(2)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("button",{staticClass:"btn btn-info nav-btn"},[e._v(" Fuzzy Search "),s("span",{staticClass:"badge badge-secondary"},[e._v("Beta")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{staticClass:"m-0",attrs:{for:"realtime"}},[s("small",[e._v("Real Time")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",{staticClass:"pl-2"},[s("li",{staticClass:"mb-2 pl-1"},[e._v(" You should use fuzzy search only when you want do an "),s("b",[e._v("approximate")]),e._v(" match to your query. If you know exactly what your target course's course number/title/etc., please use the ordinary search instead. ")]),s("li",{staticClass:"mb-2 pl-1"},[e._v(" Searching for course numbers (e.g. CS 2102) is not supported. ")])])}],n=s("3835"),i=(s("96cf"),s("1da1")),o=s("d4ec"),c=s("bee2"),l=s("262e"),u=s("2caf"),d=s("9ab4"),h=s("0613"),p=s("60a3"),m=s("4b4d"),f=function(e){Object(l["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(o["a"])(this,s),e=t.apply(this,arguments),e.inputCourses=[],e.inputMatches=[],e.loading=!1,e.workerLoaded=!!window.catalog.worker,e.realtime=!0,e}return Object(c["a"])(s,[{key:"initWorker",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.catalog.worker){e.next=8;break}return this.loading=!0,this.noti.info("Gathering data for fuzzy search..."),e.next=5,window.catalog.initWorker();case 5:this.noti.success("Success!",2.5),this.loading=!1,this.workerLoaded=!0;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"mounted",value:function(){this.workerLoaded||this.initWorker()}},{key:"destroyed",value:function(){this.workerLoaded&&this.disposeWorker()}},{key:"onInput",value:function(e){this.realtime?this.getClass(e):e||this.getClass("")}},{key:"disposeWorker",value:function(){window.catalog.disposeWorker(),this.workerLoaded=!1}},{key:"getClass",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return this.inputCourses=[],this.inputMatches=[],e.abrupt("return");case 4:return this.loading=!0,this.schedule.generated&&this.schedule.switchSchedule(!1),window.catalog.initWorker(),e.prev=7,e.next=10,window.catalog.fuzzySearch(t);case 10:s=e.sent,a=Object(n["a"])(s,2),this.inputCourses=a[0],this.inputMatches=a[1],e.next=20;break;case 16:e.prev=16,e.t0=e["catch"](7),this.noti.error(e.t0.message),console.error(e.t0);case 20:return e.prev=20,this.loading=!1,e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[7,16,20,23]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"closeClassList",value:function(){this.$refs.classSearch.value="",this.getClass("")}},{key:"updateCourse",value:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.schedule.currentSchedule.update(e,t,s,a);var r=this.$refs.enteringClassList;r instanceof p["c"]&&r.$forceUpdate(),this.saveStatus()}}]),s}(h["b"]);f=Object(d["a"])([Object(p["a"])({components:{ClassList:m["a"]}})],f);var y=f,k=y,v=s("2877"),g=Object(v["a"])(k,a,r,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d224d50-legacy.fb96c99a.js.map