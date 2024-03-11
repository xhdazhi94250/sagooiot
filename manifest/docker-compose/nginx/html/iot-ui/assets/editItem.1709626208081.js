import e from"./addSign.1709626208081.js";import a from"./setTask.1709626208081.js";import{a as l}from"./index.170962620808141.js";import{_ as t,E as o,h as i}from"./index.1709626208081.js";import{d as n,h as r,a1 as s,aa as d,a as u,Y as m,S as p,ah as c,o as g,b as f,W as h,F as w,a7 as b,R as D,X as _}from"./vue.1709626208081.js";const S=n({name:"systemAddUser",components:{AddSign:e,SetTask:a},setup(e,{emit:a}){const t=r(),n=r(),u=s({isShowDialog:!1,ruleForm:{title:"",explain:"",config:"",item_code:"",targets:[]},tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),m=r(),p=s({title:[{required:!0,message:"评价名称",trigger:"blur"}]}),c=()=>{u.isShowDialog=!1};return{rules:p,ruleFormRef:m,setTaskRef:n,addSignRef:t,onOpenAddSign:()=>{t.value.openDialog(null,null,!1)},onOpenEditSign:(e,a)=>{t.value.openDialog(e,a,!0)},onRowDel:(e,a)=>{i.confirm(`此操作将永久删除指标：“${e.title}”，是否继续?`,"提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((()=>{u.tableData.data.splice(a,1),o.success("删除成功")}))},onRowDetail:e=>{n.value.openDialog(e,u.ruleForm.item_code)},onHandleSizeChange:e=>{u.tableData.param.pageSize=e},onHandleCurrentChange:e=>{u.tableData.param.pageNum=e},handleChange:(e,a,l)=>{l?u.tableData.data[a]=e:u.tableData.data.push(e)},openDialog:e=>{e?l.getList({itemcode:e.item_code}).then((e=>{u.ruleForm=e,u.tableData.data=e.targets,u.isShowDialog=!0})):(u.ruleForm={title:"",explain:"",config:"",item_code:"",targets:[]},u.tableData.data=[],u.isShowDialog=!0)},closeDialog:c,onCancel:()=>{c()},onSubmit:async e=>{e&&await e.validate(((e,t)=>{e&&(u.ruleForm.targets=u.tableData.data,l.setItem(u.ruleForm).then((e=>{o.success("提交成功"),a("fetchList"),c()})))}))},...d(u)}}}),C={"class":"system-add-user-container"},x={"class":"dialog-footer"};var k=t(S,[["render",function(e,a,l,t,o,i){const n=c("el-input"),r=c("el-form-item"),s=c("el-form"),d=c("ele-FolderAdd"),S=c("el-icon"),k=c("el-button"),F=c("el-table-column"),y=c("el-tag"),v=c("el-table"),R=c("el-dialog"),z=c("AddSign"),V=c("SetTask");return g(),u("div",C,[m(R,{title:e.ruleForm.item_code?"编辑指标":"新增指标",modelValue:e.isShowDialog,"onUpdate:modelValue":a[3]||(a[3]=a=>e.isShowDialog=a),width:"769px"},{footer:p((()=>[f("span",x,[m(k,{onClick:e.onCancel},{"default":p((()=>[h("取 消")])),_:1},8,["onClick"]),m(k,{type:"primary",onClick:a[2]||(a[2]=a=>e.onSubmit(e.ruleFormRef))},{"default":p((()=>[h("保 存")])),_:1})])])),"default":p((()=>[m(s,{ref:"ruleFormRef",rules:e.rules,model:e.ruleForm,"label-width":"90px"},{"default":p((()=>[m(r,{label:"评价名称",prop:"title","class":"mb20"},{"default":p((()=>[m(n,{size:"small",modelValue:e.ruleForm.title,"onUpdate:modelValue":a[0]||(a[0]=a=>e.ruleForm.title=a),placeholder:"请输入评价名称",clearable:""},null,8,["modelValue"])])),_:1}),m(r,{label:"描述"},{"default":p((()=>[m(n,{width:"400",size:"small",modelValue:e.ruleForm.explain,"onUpdate:modelValue":a[1]||(a[1]=a=>e.ruleForm.explain=a),type:"textarea",placeholder:"请输入描述",maxlength:"150"},null,8,["modelValue"])])),_:1})])),_:1},8,["rules","model"]),m(k,{type:"primary","class":"mb10 mt10",onClick:e.onOpenAddSign},{"default":p((()=>[m(S,null,{"default":p((()=>[m(d)])),_:1}),h(" 增加 ")])),_:1},8,["onClick"]),m(v,{border:"",stripe:"",data:e.tableData.data,style:{width:"100%"}},{"default":p((()=>[m(F,{align:"center",type:"index",label:"序号",width:"58"}),m(F,{align:"center",prop:"name",label:"标识","show-overflow-tooltip":""}),m(F,{align:"center",prop:"title",label:"数据项","show-overflow-tooltip":""}),m(F,{align:"center",prop:"weight",label:"权重(%)",width:"90","show-overflow-tooltip":""}),m(F,{align:"center",prop:"description",label:"取值范围","show-overflow-tooltip":"",width:"200"},{"default":p((e=>[(g(!0),u(w,null,b(e.row.ranges,((e,a)=>(g(),D(y,{size:"small","class":"mr6",key:a},{"default":p((()=>[h(_(`${e.start_value}~${e.end_value}`),1)])),_:2},1024)))),128))])),_:1}),m(F,{align:"center",label:"操作",width:"160"},{"default":p((a=>[m(k,{size:"small",type:"text",onClick:l=>e.onOpenEditSign(a.row,a.$index)},{"default":p((()=>[h("编辑")])),_:2},1032,["onClick"]),m(k,{size:"small",type:"text",onClick:l=>e.onRowDel(a.row,a.$index)},{"default":p((()=>[h("删除")])),_:2},1032,["onClick"]),m(k,{size:"small",type:"text",onClick:l=>e.onRowDetail(a.row)},{"default":p((()=>[h("任务接口")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1},8,["title","modelValue"]),m(z,{ref:"addSignRef",onHandleChange:e.handleChange},null,8,["onHandleChange"]),m(V,{ref:"setTaskRef"},null,512)])}],["__scopeId","data-v-670c3b5f"]]);export{k as default};