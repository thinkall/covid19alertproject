(function(t){function e(e){for(var n,i,l=e[0],s=e[1],c=e[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9a0b5f10"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=i(t);var c=new Error;o=function(e){s.onerror=s.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("7faf"),a("2877")),l={},s=Object(i["a"])(l,r,o,!1,null,null,null),c=s.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"100vh",width:"100vw",border:"1px solid #eee"}},[a("el-container",[a("el-main",[a("div",{attrs:{width:"100vw",height:"100vh"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData&&t.tableData.filter(function(e){return!t.search||e.patientName.toLowerCase().includes(t.search.toLowerCase())})},on:{"row-click":t.rowClick}},[a("el-table-column",{attrs:{align:"center",label:"patientId",prop:"patientId"}}),a("el-table-column",{attrs:{align:"center",label:"patientName",prop:"patientName"}}),a("el-table-column",{attrs:{align:"center",label:"patientAge",prop:"patientAge"}}),a("el-table-column",{attrs:{align:"center",label:"patientMobile",prop:"patientMobile"}}),a("el-table-column",{attrs:{align:"center",label:"patientSex",prop:"patientSex"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n           "+t._s(1==e.row.patientSex?"male":"female")+" \n           ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"patientStatus",prop:"patientStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.patientStatus?a("el-tag",[t._v("normal")]):1==e.row.patientStatus?a("el-tag",{attrs:{type:"warning"}},[t._v("suspect")]):2==e.row.patientStatus?a("el-tag",{attrs:{type:"danger"}},[t._v("confirm")]):3==e.row.patientStatus?a("el-tag",{attrs:{type:"success"}},[t._v("cured")]):a("el-tag",{attrs:{type:"info"}},[t._v("canceel")])]}}])}),a("el-table-column",{attrs:{align:"center",label:"patientAddress",prop:"patientAddress"}}),a("el-table-column",{attrs:{align:"center",label:"doctorName",prop:"doctorName"}}),a("el-table-column",{attrs:{align:"center",label:"doctorTel",prop:"doctorTel"}}),a("el-table-column",{attrs:{align:"center",label:"doctorHospitalAddress",prop:"doctorHospitalAddress"}}),a("el-table-column",{attrs:{align:"right",width:"300"},scopedSlots:t._u([{key:"header",fn:function(e){return[a("el-input",{attrs:{size:"mini",placeholder:"search by patientName"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})]}},{key:"default",fn:function(e){return[1==e.row.patientStatus?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return a.stopPropagation(),t.confirm(e.$index,e.row)}}},[t._v(t._s(t.opera.confirm))]):t._e(),1==e.row.patientStatus?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return a.stopPropagation(),t.normal(e.$index,e.row)}}},[t._v(t._s(t.opera.normal))]):t._e(),2==e.row.patientStatus?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return a.stopPropagation(),t.cured(e.$index,e.row)}}},[t._v(t._s(t.opera.cured))]):t._e()]}}])})],1),a("el-pagination",{staticStyle:{padding:"10px"},attrs:{background:"","current-page":t.currentPage1,"page-sizes":[10,20,50,100],"page-size":t.currentPageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalLen},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),a("el-dialog",{attrs:{title:"patientDetail",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"patientId","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.patientId))])]),a("el-form-item",{attrs:{label:"patientName","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.patientName))])]),a("el-form-item",{attrs:{label:"patientAge","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.patientAge))])]),a("el-form-item",{attrs:{label:"patientMobile","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.patientMobile))])]),a("el-form-item",{attrs:{label:"patientSex","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(1==t.form.patientSex?"male":"female"))])]),a("el-form-item",{attrs:{label:"patientStatus","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.patientStatus))])]),a("el-form-item",{attrs:{label:"doctorName","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.doctorName))])]),a("el-form-item",{attrs:{label:"doctorTel","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.doctorTel))])]),a("el-form-item",{attrs:{label:"doctorHospitalAddress","label-width":t.formLabelWidth}},[a("span",[t._v(t._s(t.form.doctorHospitalAddress))])])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("ok")])],1)],1)],1)])],1)],1)},d=[],f=(a("386d"),{confirm:"/admin/updatePatientToConfirm",normal:"/admin/updatePatientToNormal",cured:"/admin/updatePatientToCured",getList:"/admin/getPatientListForPages",getSinglePatient:"/admin/getPatientDetailById"}),m={data:function(){return{dialogFormVisible:!1,formLabelWidth:"120px",tableData:[],search:"",opera:{confirm:"confirm",normal:"normal",cured:"cured"},currentPage1:1,currentPageSize:50,totalLen:0,form:{patientId:"1",patientName:"3",patientAge:"4",patientMobile:"",patientSex:"",patientStatus:"",doctorName:"",doctorTel:"",doctorHospitalAddress:""}}},created:function(){this.getUsers()},methods:{getUsers:function(){var t=this,e={currentPage:String(this.currentPage1),pageSize:String(this.currentPageSize)};this.$http.post(f.getList,e).then(function(e){var a=e.result,n=e.totalCount;t.tableData=a,t.totalLen=n}).catch(function(t){console.log(t)})},changeStatus:function(t,e){var a=this,n={patientId:e},r=f[t];this.$http.post(r,n).then(function(t){1==t.data.flag&&a.getUsers()})},confirm:function(t,e){this.changeStatus("confirm",e.patientId)},normal:function(t,e){this.changeStatus("normal",e.patientId)},cured:function(t,e){this.changeStatus("cured",e.patientId)},rowClick:function(t){this.dialogFormVisible=!0,this.form=t},handleSizeChange:function(t){this.search&&(this.search=""),this.currentPageSize=t,this.getUsers()},handleCurrentChange:function(t){this.search&&(this.search=""),this.currentPage1=t,this.getUsers()}}},h=m,b=Object(i["a"])(h,p,d,!1,null,null,null),g=b.exports;n["default"].use(u["a"]);var v=new u["a"]({routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),w=a("2f62");n["default"].use(w["a"]);var _=new w["a"].Store({state:{},mutations:{},actions:{}}),S=a("5c96"),y=a.n(S),P=(a("0fae"),a("bc3a")),x=a.n(P),L="http://anticovid19.noprod-b.kmt.orange.com",k=L;console.log(k);var j=2e3,C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({message:"success!",type:"success",center:!0,duration:j},t);Object(S["Message"])(e)},z=x.a.create({baseURL:k,timeout:3e3});z.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),z.interceptors.response.use(function(t){if(t&&200==t.status&&1==t.data.flag){if(t.data.data.result&&t.data.data.result.length>0){C();var e=t.data.data;return e}}else C({message:t.data.message||"fail",type:"error"});return t},function(t){Promise.reject(t)});var O=z,A=a("b2d6"),N=a.n(A);n["default"].use(y.a,{locale:N.a}),n["default"].config.productionTip=!1,n["default"].prototype.$http=O,new n["default"]({router:v,store:_,render:function(t){return t(c)}}).$mount("#app")},"7faf":function(t,e,a){"use strict";var n=a("8fba"),r=a.n(n);r.a},"8fba":function(t,e,a){}});
//# sourceMappingURL=app.1b2c9347.js.map