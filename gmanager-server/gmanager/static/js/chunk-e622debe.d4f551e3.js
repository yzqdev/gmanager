(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e622debe"],{2128:function(e,t,a){},"235c":function(e,t,a){},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",pagination:e.pagination,"page-size":e.pagination.pageSize,"current-page":e.pagination.currentPage,total:e.pagination.total,"page-sizes":e.pagination.pageSizes},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},n=[],l={props:{pagination:{type:Object,default:()=>({pageSizes:[5,10,15,20,25,30],pageSize:5,currentPage:1,total:0})}},methods:{handleCurrentChange:function(e){this.pagination.currentPage=e},handleSizeChange:function(e){this.pagination.pageSize=e}}},i=l,s=(a("5c29"),a("2877")),o=Object(s["a"])(i,r,n,!1,null,null,null);t["a"]=o.exports},"5c29":function(e,t,a){"use strict";var r=a("235c"),n=a.n(r);n.a},"92d5":function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return o}));var r=a("b775");function n(e){return Object(r["a"])({url:"/system/department/page",method:"post",data:e})}function l(){return Object(r["a"])({url:"/system/department/list",method:"post"})}function i(e){return Object(r["a"])({url:"/system/department/get/"+e,method:"get"})}function s(e){return Object(r["a"])({url:"/system/department/save",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/system/department/delete/"+e,method:"post"})}},b0f3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"div-tree"},[a("el-tree",{attrs:{data:e.treeData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var r=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(r.name))]),a("span",[a("el-button",{staticClass:"el-icon-edit",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addOrUpdate(r)}}}),a("el-button",{staticClass:"el-icon-delete",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.del(r)}}})],1)])}}])})],1),a("div",{staticClass:"div-table"},[a("div",{staticClass:"search-form",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticStyle:{width:"200px","margin-right":"20px"},attrs:{size:"small",clearable:"",placeholder:"请输入机构名称"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchData(t)}},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}}),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.fetchData}},[e._v(" 查询 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addOrUpdate(e.data)}}},[e._v(" 新增 ")])],1),a("el-table",{attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"上级机构"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.parentName||"--"))])]}}])}),a("el-table-column",{attrs:{label:"机构编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.code)+" ")]}}])}),a("el-table-column",{attrs:{label:"机构描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.remark?t.row.remark:"无描述")+" ")]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusTypeFilter")(t.row.enable)}},[e._v(e._s(e._f("statusFilter")(t.row.enable))+" ")])]}}])}),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",[e._v(e._s(t.row.updateTime))])]}}])}),a("el-table-column",{attrs:{label:"创建人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createName))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.addOrUpdate(t.row)}}},[e._v("编辑 ")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(){return e.del(t.row)}}},[e._v("删除 ")])]}}])})],1),a("div",[a("pagination",{attrs:{pagination:e.pagination}})],1)],1),a("el-dialog",{attrs:{title:e.activeTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.formrules}},[a("el-form-item",{attrs:{label:"上级机构","label-width":e.formLabelWidth,prop:"parentId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",fliterable:"",placeholder:"请选择"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},e._l(e.departlist,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"机构名称","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"机构编码",clearable:"","label-width":e.formLabelWidth,prop:"code"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"联系人",clearable:"","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.linkman,callback:function(t){e.$set(e.form,"linkman",t)},expression:"form.linkman"}})],1),a("el-form-item",{attrs:{label:"机构描述",clearable:"","label-width":e.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[a("el-radio",{attrs:{label:1,value:1}},[e._v("启用")]),a("el-radio",{attrs:{label:0,value:0}},[e._v("禁用")])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},n=[],l=a("333d"),i=a("92d5"),s=a("ed08"),o=a("83d6"),c={components:{pagination:l["a"]},filters:{typeFilter(e){const t={1:"目录",2:"菜单"};return t[e]},statusFilter(e){const t={1:"启用",0:"禁用"};return t[e]},statusTypeFilter(e){const t={1:"success",0:"danger"};return t[e]}},data(){return{treeData:null,list:null,listLoading:!0,departlist:null,defaultProps:{children:"children",label:"name",id:"id"},searchForm:{name:"",rows:"10",page:"1"},activeTitle:"新增机构",dialogFormVisible:!1,formLabelWidth:"100px",form:{name:"",parentId:"",code:"",remark:"",linkman:"",enable:1},formrules:{parentId:[{required:!0,message:"请选择上级机构",trigger:"change"}],name:[{required:!0,message:"请输入机构名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入机构编码",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},pagination:o["pageParams"]}},watch:{"pagination.currentPage":function(){this.searchForm.page=this.pagination.currentPage,this.fetchData()},"pagination.pageSize":function(){this.searchForm.rows=this.pagination.pageSize,this.searchForm.page=1,this.fetchData()},"searchForm.name":function(e){e||this.fetchData()}},created(){this.fetchData(),this.fetchTreeData()},methods:{fetchData(){this.listLoading=!0,Object(i["c"])({...this.searchForm}).then(e=>{this.list=e.data.rows,this.pagination.total=e.data.records,this.listLoading=!1})},fetchTreeData(){this.listLoading=!0,Object(i["d"])().then(e=>{this.departlist=e.data,this.treeData=Object(s["b"])(e.data),this.listLoading=!1})},del(e){this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(i["a"])(e.id).then(e=>{0===e.code?(this.$message({message:"删除成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData(),this.fetchTreeData()):this.$message({message:e.msg,type:"error"})})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},addOrUpdate(e){this.resetFileds(),this.form={name:"",parentId:"",code:"",remark:"",linkman:"",enable:1},this.dialogFormVisible=!0,this.activeTitle="新增机构",e&&(this.activeTitle="编辑机构",Object(i["b"])(e.id).then(e=>{this.form=e.data,delete this.form.childs}))},save(){this.$refs["ruleForm"].validate(e=>{if(!e)return!1;Object(i["e"])(this.form).then(e=>{0===e.code?(this.$message({message:"操作成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData(),this.fetchTreeData()):this.$message({message:e.msg,type:"error"})})})},resetFileds(){this.$refs["ruleForm"]&&this.$refs["ruleForm"].resetFields()}}},u=c,d=(a("f18a"),a("2877")),m=Object(d["a"])(u,r,n,!1,null,"49138d42",null);t["default"]=m.exports},f18a:function(e,t,a){"use strict";var r=a("2128"),n=a.n(r);n.a}}]);