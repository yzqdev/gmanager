(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6257bbfc"],{"235c":function(e,t,a){},"333d":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",pagination:e.pagination,"page-size":e.pagination.pageSize,"current-page":e.pagination.currentPage,total:e.pagination.total,"page-sizes":e.pagination.pageSizes},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},o=[],i={props:{pagination:{type:Object,default:()=>({pageSizes:[5,10,15,20,25,30],pageSize:5,currentPage:1,total:0})}},methods:{handleCurrentChange:function(e){this.pagination.currentPage=e},handleSizeChange:function(e){this.pagination.pageSize=e}}},r=i,s=(a("5c29"),a("2877")),n=Object(s["a"])(r,l,o,!1,null,null,null);t["a"]=n.exports},"38a9":function(e,t,a){},"5c29":function(e,t,a){"use strict";var l=a("235c"),o=a.n(l);o.a},a650:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"search-form",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticStyle:{width:"200px","margin-right":"20px"},attrs:{size:"small",clearable:"",placeholder:"请输入操作对象"},model:{value:e.searchForm.operObject,callback:function(t){e.$set(e.searchForm,"operObject",t)},expression:"searchForm.operObject"}}),a("el-input",{staticStyle:{width:"200px","margin-right":"20px"},attrs:{size:"small",clearable:"",placeholder:"请输入操作表"},model:{value:e.searchForm.operTable,callback:function(t){e.$set(e.searchForm,"operTable",t)},expression:"searchForm.operTable"}}),a("el-select",{staticStyle:{"margin-right":"20px"},attrs:{size:"small",clearable:"",filterable:"",placeholder:"请选择类型"},model:{value:e.searchForm.logType,callback:function(t){e.$set(e.searchForm,"logType",t)},expression:"searchForm.logType"}},e._l(e.logTypeMaps,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.fetchData}},[e._v(" 查询 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.resetForm}},[e._v(" 重置 ")]),a("el-button",{attrs:{type:"warning",size:"small"},on:{click:e.deleteSelected}},[e._v("删除所选")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:e.deleteAll}},[e._v("删除所有")])],1),a("div",{staticClass:"div-table"},[a("el-table",{attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(1==t.row.logType?"类型":"数据")+" ")]}}])}),a("el-table-column",{attrs:{label:"操作对象"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.operObject))])]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"操作表"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",[e._v(e._s(t.row.operTable))])]}}])}),a("el-table-column",{attrs:{label:"操作主键"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.operId))])]}}])}),a("el-table-column",{attrs:{label:"操作类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.operType))])]}}])}),a("el-table-column",{attrs:{label:"创建时间",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{label:"创建人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createName))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.showDetail(t.row)}}},[e._v("查看 ")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return e.deleteLog(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),a("div",[a("pagination",{attrs:{pagination:e.pagination}})],1),a("el-dialog",{attrs:{title:e.activeTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"类型","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(1==e.form.logType?"系统类型":"操作类型"))])]),a("el-form-item",{attrs:{label:"操作对象","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.form.operObject))])]),a("el-form-item",{attrs:{label:"操作表","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.form.operTable))])]),a("el-form-item",{attrs:{label:"操作主键","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.form.operId))])]),a("el-form-item",{attrs:{label:"创建时间","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.form.createTime))])]),a("el-form-item",{attrs:{label:"创建人Id","label-width":e.formLabelWidth}},[a("span",[e._v(e._s(e.form.createId))])]),a("el-form-item",{attrs:{label:"日志","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:4,disabled:""},model:{value:e.form.operRemark,callback:function(t){e.$set(e.form,"operRemark",t)},expression:"form.operRemark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},o=[],i=a("333d"),r=a("b775");a("4328");function s(e){return Object(r["a"])({url:"/system/log/page",method:"post",data:e})}function n(e){return Object(r["a"])({url:"/system/log/get/"+e,method:"get"})}const c=e=>r["a"].delete("/system/log/delete/"+e),p=e=>r["a"].post("/system/log/deleteMany",e),u=()=>r["a"].post("/system/log/deleteAll");var m=a("83d6"),d={components:{pagination:i["a"]},data(){return{list:null,listLoading:!0,searchForm:{operObject:"",operTable:"",logType:"",rows:5,page:1},logTypeMaps:[{id:1,name:"系统类型"},{id:2,name:"操作类型"}],activeTitle:"查看日志详情",dialogFormVisible:!1,formLabelWidth:"100px",multipleSelection:[],form:{logType:"",operObject:"",operTable:"",operId:"",createTime:"",createId:"",operRemark:""},pagination:m["pageParams"]}},watch:{"pagination.currentPage":function(){this.searchForm.page=this.pagination.currentPage,this.fetchData()},"pagination.pageSize":function(){this.searchForm.rows=this.pagination.pageSize,this.searchForm.page=1,this.fetchData()}},created(){this.fetchData()},methods:{fetchData(){this.listLoading=!0,s({...this.searchForm}).then(e=>{this.list=e.data.rows,this.pagination.total=e.data.records,this.listLoading=!1})},handleSelectionChange(e){this.multipleSelection=e},deleteAll(){u().then(e=>{this.fetchData(),this.$message.success("删除成功!")})},deleteSelected(){let e=this.multipleSelection.map(e=>e.id);p({ids:e}).then(e=>{this.fetchData(),this.$message.success("删除成功!")})},resetForm(){this.searchForm={operObject:"",operTable:"",logType:"",rows:5,page:1},this.fetchData()},deleteLog(e){c(e).then(e=>{this.fetchData(),this.$message.success("删除成功!")})},showDetail(e){this.dialogFormVisible=!0,n(e.id).then(e=>{this.form=e.data})}}},h=d,f=(a("e33f"),a("2877")),g=Object(f["a"])(h,l,o,!1,null,"6ef857c2",null);t["default"]=g.exports},e33f:function(e,t,a){"use strict";var l=a("38a9"),o=a.n(l);o.a}}]);