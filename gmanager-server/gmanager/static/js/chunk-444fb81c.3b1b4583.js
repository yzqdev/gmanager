(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-444fb81c"],{"235c":function(e,t,a){},"2a97":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"menu-tree"},[a("el-tree",{attrs:{data:e.treeData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var r=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(r.name))]),a("span",[a("el-button",{staticClass:"el-icon-edit",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.addOrUpdate(r)}}}),a("el-button",{staticClass:"el-icon-delete",attrs:{type:"text",size:"mini"},on:{click:function(t){return e.del(r)}}})],1)])}}])})],1),a("div",{staticClass:"menu-table"},[a("div",{staticClass:"search-form",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticClass:"mr-20",staticStyle:{width:"200px"},attrs:{size:"small",clearable:"",placeholder:"菜单名称"},model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}}),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.fetchData}},[e._v(" 查询 ")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.addOrUpdate(null)}}},[e._v(" 新增 ")])],1),a("el-table",{attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),a("el-table-column",{attrs:{label:"图标",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[+t.row.isSvg?a("svg-icon",{staticStyle:{"font-size":"20px"},attrs:{"icon-class":t.row.icon}}):e._e(),+t.row.isSvg?e._e():a("i",{class:t.row.icon,staticStyle:{"font-size":"20px"}})]}}])}),a("el-table-column",{attrs:{label:"类型",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("typeFilter")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.url)+" ")]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"排序",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sort)+" ")]}}])}),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.statusTypeFilter(t.row.enable)}},[e._v(e._s(e.statusFilter(t.row.enable)))])]}}])}),a("el-table-column",{attrs:{label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),a("span",[e._v(e._s(t.row.createTime))])]}}])}),a("el-table-column",{attrs:{label:"创建人"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.createName))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(){return e.addOrUpdate(t.row)}}},[e._v("编辑 ")]),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(){return e.del(t.row)}}},[e._v("删除 ")])]}}])})],1),a("div",[a("pagination",{attrs:{pagination:e.pagination}})],1)],1),a("el-dialog",{attrs:{title:e.activeTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,rules:e.ruleList}},[a("el-form-item",{attrs:{label:"类型","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio",{attrs:{label:1}},[e._v("目录")]),a("el-radio",{attrs:{label:2}},[e._v("菜单")])],1)],1),2==e.form.type?a("el-form-item",{attrs:{label:"父节点","label-width":e.formLabelWidth,prop:"parentId"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:"",placeholder:"请选择父级节点"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}},e._l(e.menulist,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),a("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"图标","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1),2==e.form.type?a("el-form-item",{attrs:{label:"链接地址","label-width":e.formLabelWidth,prop:"url"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1):e._e(),a("el-form-item",{attrs:{label:"是否是svg","label-width":e.formLabelWidth,prop:"isSvg"}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.isSvg,callback:function(t){e.$set(e.form,"isSvg",t)},expression:"form.isSvg"}})],1),a("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth}},[a("el-radio-group",{model:{value:e.form.enable,callback:function(t){e.$set(e.form,"enable",t)},expression:"form.enable"}},[a("el-radio",{attrs:{label:1,value:1}},[e._v("启用")]),a("el-radio",{attrs:{label:0,value:0}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"排序","label-width":e.formLabelWidth}},[a("el-input",{attrs:{clearable:"",autocomplete:"off"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.save}},[e._v("确 定")])],1)],1)],1)},l=[],s=a("333d"),i=a("7a49"),n=a("ed08"),o=a("83d6"),c={components:{pagination:s["a"]},filters:{typeFilter(e){const t={1:"目录",2:"菜单"};return t[e]}},data(){return{treeData:null,list:null,menuList:null,listLoading:!0,defaultProps:{children:"children",label:"name",id:"id"},searchForm:{name:"",rows:5,page:"1"},activeTitle:"新增菜单",dialogFormVisible:!1,formLabelWidth:"100px",form:{name:"",isSvg:!1,parentId:"",type:1,icon:"",url:"",enable:1,sort:""},rules1:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}]},rules2:{parentId:[{required:!0,message:"请选择父级节点",trigger:"change"}],name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入菜单地址",trigger:"blur"}]},pagination:o["pageParams"]}},computed:{ruleList:function(){return 1===this.form.type?this.rules1:2===this.form.type?this.rules2:{}}},watch:{"pagination.currentPage":function(){this.searchForm.page=this.pagination.currentPage,this.fetchData()},"pagination.pageSize":function(){this.searchForm.rows=this.pagination.pageSize,this.searchForm.page=1,this.fetchData()}},created(){this.fetchData(),this.fetchTreeData()},methods:{statusFilter(e){const t={1:"启用",0:"禁用"};return t[e]},statusTypeFilter(e){const t={1:"success",0:"danger"};return t[e]},fetchData(){this.listLoading=!0,Object(i["c"])({...this.searchForm}).then(e=>{this.list=e.data.rows,this.pagination.total=e.data.records,this.listLoading=!1})},fetchTreeData(){this.listLoading=!0,Object(i["d"])().then(e=>{this.menulist=e.data,this.treeData=Object(n["b"])(e.data),this.listLoading=!1})},del(e){this.$confirm("是否确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Object(i["a"])(e.id).then(e=>{0===e.code?(this.$message({message:"删除成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData(),this.fetchTreeData()):this.$message({message:e.msg,type:"error"})})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},addOrUpdate(e){this.resetFileds(),this.form={name:"",parentId:"",type:1,icon:"",url:"",enable:1,sort:""},this.dialogFormVisible=!0,this.activeTitle="新增菜单",e&&(this.activeTitle="编辑菜单",Object(i["b"])(e.id).then(e=>{this.form=e.data,delete this.form.childs}))},save(){this.$refs["ruleForm"].validate(e=>{if(!e)return!1;Object(i["e"])(this.form).then(e=>{0===e.code?(this.$message({message:"操作成功",type:"success"}),this.dialogFormVisible=!1,this.fetchData(),this.fetchTreeData()):this.$message({message:e.msg,type:"error"})})})},resetFileds(){this.$refs["ruleForm"]&&this.$refs["ruleForm"].resetFields()}}},u=c,m=(a("6b23"),a("2877")),d=Object(m["a"])(u,r,l,!1,null,"7c8e47c2",null);t["default"]=d.exports},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper",pagination:e.pagination,"page-size":e.pagination.pageSize,"current-page":e.pagination.currentPage,total:e.pagination.total,"page-sizes":e.pagination.pageSizes},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},l=[],s={props:{pagination:{type:Object,default:()=>({pageSizes:[5,10,15,20,25,30],pageSize:5,currentPage:1,total:0})}},methods:{handleCurrentChange:function(e){this.pagination.currentPage=e},handleSizeChange:function(e){this.pagination.pageSize=e}}},i=s,n=(a("5c29"),a("2877")),o=Object(n["a"])(i,r,l,!1,null,null,null);t["a"]=o.exports},3557:function(e,t,a){},"5c29":function(e,t,a){"use strict";var r=a("235c"),l=a.n(r);l.a},"6b23":function(e,t,a){"use strict";var r=a("3557"),l=a.n(r);l.a},"7a49":function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return n})),a.d(t,"a",(function(){return o}));var r=a("b775");function l(e){return Object(r["a"])({url:"/system/menu/page",method:"post",data:e})}function s(){return Object(r["a"])({url:"/system/menu/tree",method:"post"})}function i(e){return Object(r["a"])({url:"/system/menu/get/"+e,method:"get"})}function n(e){return Object(r["a"])({url:"/system/menu/save",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/system/menu/delete/"+e,method:"post"})}}}]);