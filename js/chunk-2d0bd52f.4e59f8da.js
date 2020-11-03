(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd52f"],{"2c08":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.loaded?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8 col-sm-12"},[s("h4",{staticClass:"mb-3 text-capitalize"},[e._v(e._s(e.isNew?"Add":"Update")+" User")]),s("b-form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("b-form-group",{attrs:{label:"First Name"}},[s("b-form-input",{attrs:{type:"text",placeholder:"First Name",required:"",autofocus:"",autocomplete:""},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}})],1)],1),s("div",{staticClass:"col-md-6"},[s("b-form-group",{attrs:{label:"Last Name"}},[s("b-form-input",{attrs:{type:"text",placeholder:"Last Name",required:"",autocomplete:""},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("b-form-group",{attrs:{label:"Email"}},[s("b-form-input",{attrs:{type:"email",placeholder:"Email address",required:"",autocomplete:"",disabled:!e.isNew},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("b-form-group",{attrs:{label:"User Role"}},[s("b-form-select",{attrs:{options:e.list.userRoles,"value-field":"userRoleId","text-field":"name"},model:{value:e.userRoleId,callback:function(t){e.userRoleId=t},expression:"userRoleId"}})],1)],1),s("div",{staticClass:"col-md-6"},[s("b-form-group",{attrs:{label:"Access Level"}},[s("b-form-select",{attrs:{options:e.list.accessLevels,"value-field":"accessLevelId","text-field":"name"},model:{value:e.accessLevelId,callback:function(t){e.accessLevelId=t},expression:"accessLevelId"}})],1)],1)]),s("hr",{staticClass:"mb-4"}),s("b-button",{attrs:{squared:"",block:"",variant:"dark",type:"submit"}},[e._v("Save")])],1)],1)]):e._e()},a=[],l=(s("4de4"),s("96cf"),s("1da1")),n={props:{userTypeId:String,userId:String},computed:{isNew:function(){return"new"==this.userId}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:case"end":return t.stop()}}),t)})))()},methods:{load:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s={includes:"filterlist.userroles,filterlist.accesslevels"},r="BackendServices/Users/".concat(e.userId),t.next=5,e.$http.get(r,{query:s});case 5:a=t.sent,e.firstName=a.firstName,e.lastName=a.lastName,e.email=a.email,e.userRoleId=a.userRoleId,e.accessLevelId=a.accessLevelId,e.list.userRoles=a.filterList.userRoles.filter((function(t){return t.userTypeId==e.userTypeId})),e.list.accessLevels=a.filterList.accessLevels,e.loaded=!0,t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),e.$event.$emit("error",t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()},submit:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isNew){t.next=5;break}return t.next=3,e.add();case 3:t.next=7;break;case 5:return t.next=7,e.update();case 7:case"end":return t.stop()}}),t)})))()},add:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s={firstName:e.firstName,lastName:e.lastName,email:e.email,userTypeId:e.userTypeId,userRoleId:e.userRoleId,accessLevelId:e.accessLevelId},r="BackendServices/Users",t.next=5,e.$http.post(r,{body:s});case 5:e.$router.push({name:"users"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$event.$emit("error",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s={firstName:e.firstName,lastName:e.lastName,userTypeId:e.userTypeId,userRoleId:e.userRoleId,accessLevelId:e.accessLevelId},r="BackendServices/Users/".concat(e.userId),t.next=5,e.$http.patch(r,{body:s});case 5:e.$router.push({name:"users"}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$event.$emit("error",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},data:function(){return{firstName:"",lastName:"",email:"",userRoleId:"",accessLevelId:"",list:{userRoles:[],accessLevels:[]},loaded:!1}}},c=n,i=s("2877"),u=Object(i["a"])(c,r,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0bd52f.4e59f8da.js.map