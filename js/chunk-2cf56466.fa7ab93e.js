(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf56466"],{"103f":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-form-group",[r("b-input-group",[r("b-form-input",{attrs:{type:"search",placeholder:"Search...",autofocus:"",debounce:"300"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),r("b-input-group-append",[r("b-button",[r("b-icon",{attrs:{icon:"search"}})],1)],1)],1)],1),r("b-table",{attrs:{striped:"",hover:"",small:"",items:e.packages,fields:e.fields,"sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"cell(name)",fn:function(t){var n=t.item,a=t.value;return[r("router-link",{attrs:{to:{path:"/"+e.productType+"/"+n.packageId}}},[e._v(e._s(a))])]}}])})],1)},a=[],o=(r("4de4"),r("caad"),r("d81d"),r("2532"),r("96cf"),r("1da1")),s={props:{productType:String},computed:{packages:function(){var e=this,t=this.fields.map((function(e){return e.key}));return this.items.filter((function(r){for(var n in t){var a=t[n],o=r[a].toLowerCase().includes(e.searchText.toLowerCase());if(o)return o}return!1}))}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:case"end":return t.stop()}}),t)})))()},methods:{load:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r="BackendServices/Packages",t.next=4,e.$http.get(r);case 4:n=t.sent,e.items=n.result,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.$event.$emit("error",t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},data:function(){return{items:[],fields:[{key:"name",sortable:!0},{key:"description",sortable:!0}],sortBy:"name",sortDesc:!1,searchText:""}}},c=s,i=r("2877"),u=Object(i["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports},2532:function(e,t,r){"use strict";var n=r("23e7"),a=r("5a34"),o=r("1d80"),s=r("ab13");n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~String(o(this)).indexOf(a(e),arguments.length>1?arguments[1]:void 0)}})},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),s=r("ae40"),c=o("filter"),i=s("filter");n({target:"Array",proto:!0,forced:!c||!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,r){var n=r("b622"),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},caad:function(e,t,r){"use strict";var n=r("23e7"),a=r("4d64").includes,o=r("44d2"),s=r("ae40"),c=s("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")}}]);
//# sourceMappingURL=chunk-2cf56466.fa7ab93e.js.map