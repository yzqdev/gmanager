(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bab27f0"],{"0bcb":function(e,t,a){"use strict";var r=a("2637"),l=a.n(r);l.a},"235c":function(e,t,a){},2637:function(e,t,a){},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",pagination:e.pagination,"page-size":e.pagination.pageSize,"current-page":e.pagination.currentPage,total:e.pagination.total,"page-sizes":e.pagination.pageSizes},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},l=[],s={props:{pagination:{type:Object,default:()=>({pageSizes:[5,10,15,20,25,30],pageSize:5,currentPage:1,total:0})}},methods:{handleCurrentChange:function(e){this.pagination.currentPage=e},handleSizeChange:function(e){this.pagination.pageSize=e}}},o=s,i=(a("5c29"),a("2877")),n=Object(i["a"])(o,r,l,!1,null,null,null);t["a"]=n.exports},"43ae":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"search-form",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticClass:"mr-20",staticStyle:{width:"200px"},attrs:{size:"small",clearable:"",placeholder:"请输入名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}}),a("el-input",{staticClass:"mr-20",staticStyle:{width:"200px"},attrs:{size:"small",clearable:"",placeholder:"请输入键"},model:{value:e.searchForm.key,callback:function(t){e.$set(e.searchForm,"key",t)},expression:"searchForm.key"}}),a("el-select",{staticClass:"mr-20",attrs:{size:"small",clearable:"",filterable:"",placeholder:"请选择类型"},model:{value:e.searchForm.parentId,callback:function(t){e.$set(e.searchForm,"parentId",t)},expression:"searchForm.parentId"}},e._l(e.typeMaps,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.fetchData}},[e._v(" 查询 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addOrUpdate(null)}}},[e._v(" 新增 ")])],1),a("div",{staticClass:"div-table"},[a("el-table",{attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.typeName?t.row.typeName:"类型")+" ")]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{label:"键"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.key))])]}}])}),a("el-table-column",{attrs:{label:"值"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.value))])]}}])}),a("el-table-column",{attrs:{label:"编码",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.code))])]}}])}),a("el-table-column",{attrs:{label:"排序",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sort)+" ")]}}])}),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",[e._v(e._s(t.row.updateTime))])]}}])}),a("el-table-column",{attrs:{label:"更新人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updateName))])]}}])}),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{label:"创建人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createName))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return e.addOrUpdate(t.row)}}},[e._v("编辑 ")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return e.del(t.row)}}},[e._v("删除 ")])]}}])})],1)],1),a("div",[a("pagination",{attrs:{pagination:e.pagination}})],1),a("el-dialog",{attrs:{title:e.activeTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.ruleList}},[a("el-form-item",{attrs:{label:"编辑类型","label-width":e.formLabelWidth}},[a("el-radio-group",{on:{change:e.resetFileds},model:{value:e.operType,callback:function(t){e.operType=t},expression:"operType"}},[a("el-radio",{attrs:{label:1}},[e._v("数据")]),a("el-radio",{attrs:{label:2}},[e._v("类型")])],1)],1),1==e.operType?a("el-form-item",{attrs:{label:"类型","label-width":e.formLabelWidth,prop:"parentId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:"",placeholder:"请选择类型"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},e._l(e.typeMaps,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),a("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"键","label-width":e.formLabelWidth,prop:"key"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.key,callback:function(t){e.$set(e.form,"key",t)},expression:"form.key"}})],1),1==e.operType?a("el-form-item",{attrs:{label:"值","label-width":e.formLabelWidth,prop:"value"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}})],1):e._e(),1===e.operType?a("el-form-item",{attrs:{label:"编码","label-width":e.formLabelWidth,prop:"code"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1):e._e(),a("el-form-item",{attrs:{label:"排序号","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1),a("el-form-item",{attrs:{label:"是否启用","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[a("el-radio",{attrs:{label:1}},[e._v("启用")]),a("el-radio",{attrs:{label:2}},[e._v("禁用")])],1)],1),1==e.operType?a("el-form-item",{attrs:{label:"是否拷贝","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.copyStatus,callback:function(t){e.$set(e.form,"copyStatus",t)},expression:"form.copyStatus"}},[a("el-radio",{attrs:{label:"1"}},[e._v("拷贝")]),a("el-radio",{attrs:{label:"2"}},[e._v("不拷贝")])],1)],1):e._e(),1===e.operType?a("el-form-item",{attrs:{label:"是否可更改","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.changeStatus,callback:function(t){e.$set(e.form,"changeStatus",t)},expression:"form.changeStatus"}},[a("el-radio",{attrs:{label:"1"}},[e._v("可更改")]),a("el-radio",{attrs:{label:"2"}},[e._v("不可更改")])],1)],1):e._e()],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},l=[],s=a("333d"),o=a("b775");function i(e){return Object(o["a"])({url:"/system/config/page",method:"post",data:e})}function n(e){return Object(o["a"])({url:"/system/config/get/"+e,method:"get"})}function c(){return Object(o["a"])({url:"/system/config/type",method:"get"})}function u(e){return Object(o["a"])({url:"/system/config/save",method:"post",data:e})}function m(e){return Object(o["a"])({url:"/system/config/delete/"+e,method:"post"})}var p=a("83d6"),d={components:{pagination:s["a"]},data(){return{treeData:null,list:null,typeMaps:null,listLoading:!0,searchForm:{name:"",key:"",parentId:"",rows:5,page:"1"},activeTitle:"新增菜单",dialogFormVisible:!1,formLabelWidth:"100px",operType:1,form:{parentId:"",name:"",key:"",value:"",code:"",sort:"",enable:1,copyStatus:"1",changeStatus:"1"},rules1:{parentId:[{required:!0,message:"请选择类型",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],key:[{required:!0,message:"请输入键",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],value:[{required:!0,message:"请输入值",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},rules2:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],key:[{required:!0,message:"请输入键",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},pagination:p["pageParams"]}},computed:{ruleList:function(){return 1===this.operType?this.rules1:2===this.operType?this.rules2:{}}},watch:{"pagination.currentPage":function(){this.searchForm.page=this.pagination.currentPage,this.fetchData()},"pagination.pageSize":function(){this.searchForm.rows=this.pagination.pageSize,this.searchForm.page=1,this.fetchData()}},created(){this.getTypeList(),this.fetchData()},methods:{getTypeList(){c().then(e=>{this.typeMaps=e.data})},fetchData(){this.listLoading=!0,i({...this.searchForm}).then(e=>{this.list=e.data.rows,this.pagination.total=e.data.records,this.listLoading=!1})},del(e){this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{m(e.id).then(e=>{0===e.code?(this.$message({message:"删除成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData()):this.$message({message:e.msg,type:"error"})})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},addOrUpdate(e){this.resetFileds(),this.form={parentId:"",name:"",key:"",value:"",code:"",sort:"",enable:1,copyStatus:"1",changeStatus:"1"},this.getTypeList(),this.activeTitle="新增配置",e?(this.activeTitle="编辑配置",n(e.id).then(e=>{this.form=e.data,this.getTypeList(),0===this.form.parentId?this.operType=2:this.operType=1,this.dialogFormVisible=!0})):(this.operType=1,this.dialogFormVisible=!0)},save(){this.$refs["ruleForm"].validate(e=>{if(!e)return!1;u(this.form).then(e=>{0===e.code?(this.$message({message:"操作成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData()):this.$message({message:e.msg,type:"error"})})})},resetFileds(){this.form={parentId:"",name:"",key:"",value:"",code:"",sort:"",enable:1,copyStatus:"1",changeStatus:"1"},this.$refs["ruleForm"]&&this.$refs["ruleForm"].resetFields()}}},f=d,b=(a("0bcb"),a("2877")),g=Object(b["a"])(f,r,l,!1,null,"41734ad1",null);t["default"]=g.exports},"5c29":function(e,t,a){"use strict";var r=a("235c"),l=a.n(r);l.a}}]);