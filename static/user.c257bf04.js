import{P as reactive,r as ref,w as watch,J as resolveComponent,a as openBlock,b as createElementBlock,B as createVNode,d as createBaseVNode,t as toDisplayString,Q as defineComponent,h as withCtx,F as Fragment,f as renderList,g as createBlock,l as createCommentVNode,R as formatTime,S as renderSlot,n as normalizeClass,L as createTextVNode,T as Transition,U as ajax}from"./index.adfd1ee8.js";import{_ as _export_sfc}from"./plugin-vue_export-helper.db4a78ed.js";var index_vue_vue_type_style_index_0_lang$1="";const _hoisted_1$3={class:"paginate"},_hoisted_2$2={class:"right-tips mr-2"},_sfc_main$3={__name:"index",props:{page:{}},setup(e){const t=e,a=reactive([10,20,50]),l=ref(t.page.per_page||20),o=ref(t.page.current_page||1),n=ref(t.page.total||0),r=e=>{s()},c=e=>{s()},i=t.page,s=()=>{const e={per_page:l.value,current_page:o.value};null==i||i.refresh(e)};return watch(i,(e=>{o.value=null==e?void 0:e.current_page,l.value=null==e?void 0:e.per_page,n.value=null==e?void 0:e.total})),(e,t)=>{const i=resolveComponent("el-pagination");return openBlock(),createElementBlock("div",_hoisted_1$3,[createVNode(i,{currentPage:o.value,"onUpdate:currentPage":t[0]||(t[0]=e=>o.value=e),"page-size":l.value,"onUpdate:page-size":t[1]||(t[1]=e=>l.value=e),"page-sizes":a,total:n.value,background:"",class:"mt-4",layout:"prev, pager, next,sizes,total,jumper","next-text":"下一页",small:"",onSizeChange:r,onCurrentChange:c},null,8,["currentPage","page-size","page-sizes","total"]),createBaseVNode("div",_hoisted_2$2,"本页显示 "+toDisplayString(l.value)+"条记录，共"+toDisplayString(n.value)+"条数据",1)])}}};var index_vue_vue_type_style_index_0_scoped_true_lang="";const _sfc_main$2=defineComponent({components:{Paginate:_sfc_main$3},props:{border:{value:Boolean,default:!1},tableList:Object,tableConfig:Object,height:String,page:Object,isShowPage:{type:Boolean,default:!0}},setup(props,context){context.emit;const multipleTableRef=ref(),multipleSelection=ref([]),page=reactive(props.page||{}),height=ref(props.height),List=null==props?void 0:props.tableList,tableData=reactive({list:List}),config=null==props?void 0:props.tableConfig,tableConfig=reactive(config),handleSelectionChange=e=>{multipleSelection.value=e,null==tableConfig||tableConfig.forEach((t=>{"selection"==t.type&&t.select&&t.select(e)}))},callTo=(e,t,a)=>e.path?e.path(t,a):"/",callClick=(e,t,a)=>(e.click&&e.click(t,a),!0),callFormat=(e,t,a)=>e.format&&e.format(t,a),getKeyValue=(item,propInfo)=>{const key=propInfo.prop;try{const data=eval(`item.${key}`);return null!=data||null!=data?propInfo.type&&"time"==propInfo.type?formatTime(data):data:(null==propInfo?void 0:propInfo.defaultText)?null==propInfo?void 0:propInfo.defaultText:null}catch(error){return console.error(error),null}};return watch((()=>props.tableList),(e=>{tableData.list=e})),{page:page,height:height,tableData:tableData,tableConfig:tableConfig,handleSelectionChange:handleSelectionChange,multipleTableRef:multipleTableRef,getKeyValue:getKeyValue,callTo:callTo,callClick:callClick,callFormat:callFormat}}}),_hoisted_1$2={class:"table-com"},_hoisted_2$1={key:0},_hoisted_3={class:"table-btn"},_hoisted_4={key:1},_hoisted_5=["onClick"],_hoisted_6=["onClick","innerHTML"];function _sfc_render$1(e,t,a,l,o,n){const r=resolveComponent("el-table-column"),c=resolveComponent("el-button"),i=resolveComponent("el-link"),s=resolveComponent("router-link"),p=resolveComponent("el-image"),d=resolveComponent("el-table"),m=resolveComponent("Paginate");return openBlock(),createElementBlock("div",_hoisted_1$2,[createVNode(d,{border:e.border,ref:"multipleTableRef",data:e.tableData.list,height:e.height,"row-class-name":"table-row",onSelectionChange:e.handleSelectionChange},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.tableConfig,((t,a)=>(openBlock(),createBlock(Transition,{key:a},{default:withCtx((()=>["selection"===t.type?(openBlock(),createBlock(r,{key:0,fixed:"",type:"selection",width:"55"})):(openBlock(),createBlock(r,{key:1,align:t.align,fixed:t.fixed,label:t.name,"max-width":t.maxWidth,propKey:t.prop,width:t.width||""},{default:withCtx((a=>[createBaseVNode("div",{class:normalizeClass(t.align||"left")},[t.slot?renderSlot(e.$slots,t.slot,{key:0,row:a.row},void 0,!0):"control"===t.type?(openBlock(),createElementBlock("div",{key:1,class:normalizeClass(["control",t.class])},[t.button&&t.button.length?(openBlock(),createElementBlock("div",_hoisted_2$1,[createBaseVNode("div",_hoisted_3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(t.button,((t,l)=>(openBlock(),createElementBlock("div",{key:l},[createVNode(c,{type:t.typeof,size:null==t?void 0:t.size,onClick:l=>e.callClick(t,a.row,a.$index)},{default:withCtx((()=>[createTextVNode(toDisplayString(t.text),1)])),_:2},1032,["type","size","onClick"])])))),128))])])):createCommentVNode("",!0),t.link&&t.link.length?(openBlock(),createElementBlock("div",_hoisted_4,[(openBlock(!0),createElementBlock(Fragment,null,renderList(t.link,((t,l)=>(openBlock(),createElementBlock("div",{key:l},[createVNode(s,{to:e.callTo(t,a.row,a.$index)},{default:withCtx((()=>[createVNode(i,{type:t.typeof,onClick:l=>e.callClick(t,a.row,a.$index)},{default:withCtx((()=>[createTextVNode(toDisplayString(t.text),1)])),_:2},1032,["type","onClick"])])),_:2},1032,["to"])])))),128))])):createCommentVNode("",!0)],2)):"image"===t.type?(openBlock(),createElementBlock("div",{key:2,class:normalizeClass([t.class])},[createVNode(p,{"preview-src-list":[e.getKeyValue(a.row,t)],src:e.getKeyValue(a.row,t),class:"table-img","preview-teleported":""},null,8,["preview-src-list","src"])],2)):(openBlock(),createElementBlock("div",{key:3,class:normalizeClass([t.class]),onClick:l=>e.callClick(t,a.row,a.$index)},[t.format?(openBlock(),createBlock(Transition,{key:0},{default:withCtx((()=>[createBaseVNode("span",{onClick:l=>e.callClick(t,a.row,a.$index),innerHTML:e.callFormat(t,a.row,a.$index)},null,8,_hoisted_6)])),_:2},1024)):(openBlock(),createBlock(Transition,{key:1},{default:withCtx((()=>[createTextVNode(toDisplayString(e.getKeyValue(a.row,t)),1)])),_:2},1024))],10,_hoisted_5))],2)])),_:2},1032,["align","fixed","label","max-width","propKey","width"]))])),_:2},1024)))),128))])),_:3},8,["border","data","height","onSelectionChange"]),e.isShowPage?(openBlock(),createBlock(m,{key:0,class:"ml15 mr15",page:e.page},null,8,["page"])):createCommentVNode("",!0)])}var BaseTable=_export_sfc(_sfc_main$2,[["render",_sfc_render$1],["__scopeId","data-v-12d689da"]]),index_vue_vue_type_style_index_0_lang="";const _sfc_main$1=defineComponent({props:{formConfig:Array,gutter:{type:Number,default:24},labeWidth:{type:String,default:"94px"},btnObj:Object},setup(e,{emit:t}){const a=reactive({});return{btnObj:Object.assign({span:6,isShow:!0,text:"查询"},e.btnObj),dataForm:a,submitForm:()=>{const l={};Object.keys(a).map((t=>{const o=e.formConfig,n=e.formConfig.findIndex((e=>e.alias==t));if(o[n]&&o[n].format){const e=o[n].format(a[t],a);e&&"object"==typeof e&&Object.keys(e).map((t=>{l[t]=e[t]}))}else l[t]=a[t]})),Object.keys(l).map((e=>{l[e]||delete l[e]})),t("submitForm",l)},props1:{checkStrictly:!0,value:"code",label:"name"}}}}),_hoisted_1$1={class:"formBox"},_hoisted_2={class:"ml15 mb15"};function _sfc_render(e,t,a,l,o,n){const r=resolveComponent("el-input"),c=resolveComponent("el-date-picker"),i=resolveComponent("el-option"),s=resolveComponent("el-select"),p=resolveComponent("el-cascader"),d=resolveComponent("el-form-item"),m=resolveComponent("el-button"),u=resolveComponent("el-form");return openBlock(),createBlock(u,{ref:"formRef","label-width":e.labeWidth,model:e.dataForm,class:"form-box add-border"},{default:withCtx((()=>[createBaseVNode("form",_hoisted_1$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(e.formConfig,((t,a)=>(openBlock(),createBlock(Transition,{key:a},{default:withCtx((()=>[createBaseVNode("div",null,[(openBlock(),createBlock(d,{key:a,label:t.label,prop:t.alias},{default:withCtx((()=>["input"===t.type?(openBlock(),createBlock(r,{key:0,style:{width:"200px"},modelValue:e.dataForm[t.alias],"onUpdate:modelValue":a=>e.dataForm[t.alias]=a,clearable:t.clearable||!0,maxlength:t.max||40,placeholder:t.placeholder||`请输入${t.label}`},null,8,["modelValue","onUpdate:modelValue","clearable","maxlength","placeholder"])):createCommentVNode("",!0),"daterange"===t.type?(openBlock(),createBlock(c,{key:1,modelValue:e.dataForm[t.alias],"onUpdate:modelValue":a=>e.dataForm[t.alias]=a,"end-placeholder":"结束时间","range-separator":"→","start-placeholder":"开始时间",type:"daterange"},null,8,["modelValue","onUpdate:modelValue"])):createCommentVNode("",!0),"select"===t.type?(openBlock(),createBlock(s,{key:2,style:{width:"200px"},modelValue:e.dataForm[t.alias],"onUpdate:modelValue":a=>e.dataForm[t.alias]=a,clearable:t.clearable||!0,placeholder:`请选择${t.label}`},{default:withCtx((()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(t.options,(e=>(openBlock(),createBlock(i,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","clearable","placeholder"])):createCommentVNode("",!0),"selects"===t.type?(openBlock(),createBlock(p,{key:3,modelValue:e.dataForm[t.alias],"onUpdate:modelValue":a=>e.dataForm[t.alias]=a,options:t.options,placeholder:`请选择${t.label}`,clearable:""},null,8,["modelValue","onUpdate:modelValue","options","placeholder"])):createCommentVNode("",!0),"selectsOne"===t.type?(openBlock(),createBlock(p,{key:4,modelValue:e.dataForm[t.alias],"onUpdate:modelValue":a=>e.dataForm[t.alias]=a,options:t.options,props:e.props1,clearable:""},null,8,["modelValue","onUpdate:modelValue","options","props"])):createCommentVNode("",!0)])),_:2},1032,["label","prop"]))])])),_:2},1024)))),128)),createBaseVNode("div",_hoisted_2,[e.btnObj.isShow?(openBlock(),createBlock(m,{key:0,type:"primary",class:"bg-blue-400 ml-3",onClick:t[0]||(t[0]=t=>e.submitForm())},{default:withCtx((()=>[createTextVNode(toDisplayString(e.btnObj.text),1)])),_:1})):createCommentVNode("",!0),renderSlot(e.$slots,"control")])])])),_:3},8,["label-width","model"])}var BaseForm=_export_sfc(_sfc_main$1,[["render",_sfc_render]]);const _hoisted_1={class:"userManager bg-white p-4 rounded-lg"},_sfc_main={__name:"user",setup(e){const t=[{label:"邮箱搜索",alias:"mail",type:"input",placeholder:"请输入邮箱"}];let a={};const l=e=>{a=e,c()},o=ref({current_page:1,per_page:50,total:0,refresh(e){Object.assign(o.value,e),c()}}),n=ref([]),r=[{prop:"id",name:"ID",align:"center",width:100},{prop:"mail",name:"邮箱账号",align:"center"},{prop:"createtime",type:"time",align:"center",name:"创建时间"},{prop:"manager",name:"权限",align:"center",width:100,format:e=>1==e.manager?'<span class="text-red-400">管理员</span>':'<span class="text-blue-400">用户</span>'},{type:"control",name:"操作",align:"center",width:150,button:[{typeof:"primary",size:"small",text:"发送邮件",click(e){console.log(e)}}]}],c=()=>{ajax({url:"/admin/UserList",method:"post",data:{...a,page:o.value.current_page,limit:o.value.per_page}}).then((e=>{n.value=e.data.data,Object.assign(o.value,e.data)}))};return c(),(e,a)=>(openBlock(),createElementBlock("div",_hoisted_1,[createVNode(BaseForm,{formConfig:t,onSubmitForm:l}),createVNode(BaseTable,{class:"mt-4",tableList:n.value,border:"",page:o.value,tableConfig:r},null,8,["tableList","page"])]))}};export{_sfc_main as default};
