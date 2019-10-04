webpackJsonp([3],{F1RE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{dialogVisible:!1,tableLoading:!1,index:0,salaries:[],multipleSelection:[],salary:{id:"",eid:"",afterDepId:"",afterJobId:"",removeDate:"",reason:"",remark:""}}},methods:{deleteAll:function(){var e=this;this.$confirm("Delete["+this.multipleSelection.length+"]rows, continue?","Reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){var t="";e.multipleSelection.forEach(function(e){t=t+e.id+","}),e.doDelete(t)}).catch(function(){e.$message({type:"info",message:"Delete canceled"})})},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e,t){this.dialogVisible=!0,t.removeDate=new Date(t.removeDate),this.salary=t},handleDelete:function(e,t){var a=this;this.$confirm("Delete["+t.eid+"], continue?","Reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){a.doDelete(t.id)}).catch(function(){a.$message({type:"info",message:"Delete canceled"})})},doDelete:function(e){var t=this;t.tableLoading=!0,this.deleteRequest("/personnel/remove/move"+e).then(function(e){if(t.tableLoading=!1,e&&200==e.status){e.data;t.loadSalaryCfg()}})},next:function(){var e=this;5==this.index?this.salary.eid&&this.salary.afterDepId&&this.salary.afterJobId&&this.salary.removeDate&&this.salary.reason&&this.salary.remark?this.salary.id?(e.tableLoading=!0,this.putRequest("/personnel/remove/move",this.salary).then(function(t){if(e.tableLoading=!1,t&&200==t.status){t.data;_,e.dialogVisible=!1,e.index=0,e.loadSalaryCfg()}})):this.postRequest("/personnel/remove/move",this.salary).then(function(t){if(t&&200==t.status){t.data;e.dialogVisible=!1,e.index=0,e.loadSalaryCfg()}}):this.$message({type:"error",message:"Empty content not accepted!"}):this.index++},loadSalaryCfg:function(){this.tableLoading=!0;var e=this;this.getRequest("/personnel/remove/move").then(function(t){e.tableLoading=!1,t&&200==t.status&&(e.salaries=t.data)})},emptySalary:function(){this.salary={id:"",eid:"",afterDepId:"",afterJobId:"",removeDate:"",reason:"",remark:""},this.index=0}},mounted:function(){this.loadSalaryCfg()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","padding-left":"0px"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("Add Employee Transfer")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:e.loadSalaryCfg}})],1),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.salaries,stripe:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"120",prop:"eid",label:"Employee Job Number"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"70",prop:"afterDepId",label:"Department Transferred to"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"70",prop:"afterJobId",label:"Position Transferred to"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"Date of Transfer"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.removeDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"reason",label:"Reason of Transfer"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"remark",width:"350",label:"Remark"}}),e._v(" "),a("el-table-column",{attrs:{label:"Operating",align:"center"}},[a("el-table-column",{attrs:{label:"Edit",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("Edit\n                ")])]}}])})],1)],1)],1)])],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[a("el-dialog",{attrs:{title:"Add Transfer",visible:e.dialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.emptySalary}},[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-steps",{attrs:{active:e.index,direction:"vertical"}},[a("el-step",{attrs:{title:"Employee Job Number",size:"mini"}}),e._v(" "),a("el-step",{attrs:{title:"Department Transferred to"}}),e._v(" "),a("el-step",{attrs:{title:"Position Transferred to"}}),e._v(" "),a("el-step",{attrs:{title:"Date of Transfer"}}),e._v(" "),a("el-step",{attrs:{title:"Reason of Transfer"}}),e._v(" "),a("el-step",{attrs:{title:"Remark"}})],1),e._v(" "),a("div",{staticStyle:{"margin-left":"30px",display:"flex","justify-content":"center","align-items":"center",width:"80%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.index,expression:"index==0"}]},[e._v("\n            Employee Job Number\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input job number...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.eid,callback:function(t){e.$set(e.salary,"eid",t)},expression:"salary.eid"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]},[e._v("\n            Department Transferred to:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input Department Transferred to...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.afterDepId,callback:function(t){e.$set(e.salary,"afterDepId",t)},expression:"salary.afterDepId"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]},[e._v("\n            Position Transferred to:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input Position Transferred to...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.afterJobId,callback:function(t){e.$set(e.salary,"afterJobId",t)},expression:"salary.afterJobId"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]},[e._v("\n            Date of Transfer\n            "),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"Select Date"},model:{value:e.salary.removeDate,callback:function(t){e.$set(e.salary,"removeDate",t)},expression:"salary.removeDate"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==e.index,expression:"index==4"}]},[e._v("\n            Reason of Transfer:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input the Reason of Transfer...",size:"mini",type:"textarea"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.reason,callback:function(t){e.$set(e.salary,"reason",t)},expression:"salary.reason"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==e.index,expression:"index==5"}]},[e._v("\n            Remark:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input the remark...",size:"mini",type:"textarea"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.remark,callback:function(t){e.$set(e.salary,"remark",t)},expression:"salary.remark"}})],1)])],1),e._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",padding:"0px",margin:"0px"}},[0!=e.index?a("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.index--}}},[e._v("Previous Step")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",round:"",size:"mini"},domProps:{textContent:e._s(5==e.index?"Finish":"Next Step")},on:{click:e.next}})],1)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(e){a("P/cq")},null,null);t.default=l.exports},GZY3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Employee Reward and Punishment ")]),e._v(" "),a("el-dialog",{staticStyle:{padding:"0px"},attrs:{visible:e.dialogVisible,title:e.dialogTitle,"close-on-click-modal":!1,width:"33%"},on:{"update:visible":function(t){e.dialogVisible=t}}}),e._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"50px","margin-left":"40%"}},[a("el-form",{ref:"addReasonForm",attrs:{model:e.ec,rules:e.ecrules}},[a("div",[a("el-row",[a("el-col",{attrs:{span:5}},[a("div",[a("el-form-item",{attrs:{label:"Employee's Job Number:",prop:"eid"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{"prefix-icon":"el-icon-edit",size:"mini",placeholder:"Please input employee's job number"},model:{value:e.ec.eid,callback:function(t){e.$set(e.ec,"eid",t)},expression:"ec.eid"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("div",[a("el-form-item",{attrs:{label:"Date of Reward and Punishment:",prop:"ecDate"}},[a("el-date-picker",{staticStyle:{width:"300px"},attrs:{size:"mini","value-format":"yyyy-MM-dd HH:mm:ss",type:"date",placeholder:"Date of Reward and Punishment"},model:{value:e.ec.ecDate,callback:function(t){e.$set(e.ec,"ecDate",t)},expression:"ec.ecDate"}})],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("div",[a("el-form-item",{attrs:{label:"Reason of Reward and Punishment:",prop:"ecReason"}},[a("el-radio-group",{model:{value:e.ec.ecReason,callback:function(t){e.$set(e.ec,"ecReason",t)},expression:"ec.ecReason"}},[a("el-radio",{attrs:{label:"Being Late"}},[e._v("Being Late")]),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"15px"},attrs:{label:"Asking Leave"}},[e._v("Asking Leave")]),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"15px"},attrs:{label:"Working Overtime"}},[e._v("Working Overtime")])],1)],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("div",[a("el-form-item",{attrs:{label:"Type of Reward and Punishment:",prop:"ecType"}},[a("el-radio-group",{model:{value:e.ec.ecType,callback:function(t){e.$set(e.ec,"ecType",t)},expression:"ec.ecType"}},[a("el-radio",{attrs:{label:"0"}},[e._v("Reward")]),e._v(" "),a("el-radio",{staticStyle:{"margin-left":"15px"},attrs:{label:"1"}},[e._v("Punishment")])],1)],1)],1)])],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("div",[a("el-form-item",{attrs:{label:"Remark:",prop:"remark"}},[a("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",size:"mini",autosize:{minRows:5,maxRows:10},placeholder:"Please input remark message..."},model:{value:e.ec.remark,callback:function(t){e.$set(e.ec,"remark",t)},expression:"ec.remark"}})],1)],1),e._v(" "),a("div",{staticStyle:{"margin-left":"240px"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.addEc("addReasonForm")}}},[e._v("Confirm")])],1)])],1)],1)])],1)],1)},staticRenderFns:[]},i=a("VU/8")({data:function(){return{dialogTitle:"Success",dialogVisible:!1,ec:{eid:"",ecDate:"",ecReason:"",ecType:"",remark:""},ecrules:{name:[{required:!0,message:"Required:Employee Name",trigger:"blur"}],workID:[{required:!0,message:"Required:Employee Job Number",trigger:"blur"}],ecDate:[{required:!0,message:"Required:Date of Reward and Punishment",trigger:"blur"}],ecReason:[{required:!0,message:"Required:Reason of Reward and Punishment",trigger:"blur"}],ecType:[{required:!0,message:"Required:Type of Reward and Punishment",trigger:"blur"}]}}},methods:{addEc:function(e){var t=this,a=this;this.$refs[e].validate(function(e){if(!e)return!1;t.postRequest("/personnel/ec/addec",t.ec).then(function(e){e&&200==e.status&&(e.data,a.dialogVisible=!1,a.emptyEcData())})})},emptyEcData:function(){this.ec={eid:"",ecDate:"",ecReason:"",ecType:"",remark:""}}}},n,!1,null,null,null);t.default=i.exports},K5YU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{dialogVisible:!1,trains:[],index:0,tableLoading:!1,multipleSelection:[],empTrain:{id:"",eid:"",trainDate:"",trainContent:"",remark:""}}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},loadTrainList:function(){this.tableLoading=!0;var e=this;this.getRequest("/personnel/train/trains").then(function(t){e.tableLoading=!1,t&&200==t.status&&(e.trains=t.data)})},handleEdit:function(e,t){this.dialogVisible=!0,t.trainDate=new Date(t.trainDate),this.empTrain=t},handleDelete:function(e,t){var a=this;this.$confirm("Delete["+t.eid+"]rows, continue","reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){a.doDelete(t.id)}).catch(function(){a.$message({type:"info",message:"Delete canceled"})})},doDelete:function(e){var t=this;t.tableLoading=!0,this.deleteRequest("/personnel/train/trains/"+e).then(function(e){if(t.tableLoading=!1,e&&200==e.status){e.data;t.loadTrainList()}})},deleteAll:function(){var e=this;this.$confirm("Delete["+this.multipleSelection.length+"]rows, continue?","reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){var t="";e.multipleSelection.forEach(function(e){t=t+e.id+","}),e.doDelete(t)}).catch(function(){e.$message({type:"info",message:"Delete Canceled"})})},emptyTrain:function(){this.empTrain={id:"",eid:"",trainDate:"",trainContent:"",remark:""},this.index=0},next:function(){var e=this;3==this.index?this.empTrain.eid&&this.empTrain.trainDate&&this.empTrain.trainContent&&this.empTrain.remark?this.empTrain.id?(e.tableLoading=!0,this.putRequest("/personnel/train/trains",this.empTrain).then(function(t){if(e.tableLoading=!1,t&&200==t.status){t.data;_,e.dialogVisible=!1,e.index=0,e.loadTrainList()}})):this.postRequest("/personnel/train/trains",this.empTrain).then(function(t){if(t&&200==t.status){t.data;e.dialogVisible=!1,e.index=0,e.loadTrainList()}}):this.$message({type:"error",message:"Please input something!"}):this.index++},mounted:function(){this.loadSalaryCfg()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","padding-left":"0px"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("Add Training")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:e.loadTrainList}})],1),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.trains,stripe:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{width:"90",prop:"eid",label:"Employee's Job Number",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{width:"120",label:"Date of Training",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.trainDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"400",prop:"trainContent",label:"Training content",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{width:"400",prop:"remark",label:"Remark",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"Operating",align:"center"}},[a("el-table-column",{attrs:{label:"Edit",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("Edit\n                ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Delete",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("Delete\n                ")])]}}])})],1)],1)],1),e._v(" "),0!=e.trains?a("div",{staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-button",{attrs:{type:"danger",round:"",size:"mini",disabled:0==e.multipleSelection.length},on:{click:e.deleteAll}},[e._v("Batch Delete\n        ")])],1):e._e()])],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[a("el-dialog",{attrs:{title:"Add Training information",visible:e.dialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.emptyTrain}},[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-steps",{attrs:{active:e.index,direction:"vertical"}},[a("el-step",{attrs:{title:"Employee's Job Number",size:"mini"}}),e._v(" "),a("el-step",{attrs:{title:"Date of Training"}}),e._v(" "),a("el-step",{attrs:{title:"Training Content"}}),e._v(" "),a("el-step",{attrs:{title:"Remark"}})],1),e._v(" "),a("div",{staticStyle:{"margin-left":"30px",display:"flex","justify-content":"center","align-items":"center",width:"80%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.index,expression:"index==0"}]},[e._v("\n            Employee's Job Number:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input Employee's Job Number...",size:"mini"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.empTrain.eid,callback:function(t){e.$set(e.empTrain,"eid",t)},expression:"empTrain.eid"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]},[e._v("\n            Date of Training:\n            "),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"Select Date"},model:{value:e.empTrain.trainDate,callback:function(t){e.$set(e.empTrain,"trainDate",t)},expression:"empTrain.trainDate"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]},[e._v("\n            Training Content:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",size:"mini",autosize:{minRows:5,maxRows:10},placeholder:"Please input Training Content..."},model:{value:e.empTrain.trainContent,callback:function(t){e.$set(e.empTrain,"trainContent",t)},expression:"empTrain.trainContent"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]},[e._v("\n            Remark:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{type:"textarea",size:"mini",autosize:{minRows:5,maxRows:10},placeholder:"Please input remark..."},model:{value:e.empTrain.remark,callback:function(t){e.$set(e.empTrain,"remark",t)},expression:"empTrain.remark"}})],1)])],1),e._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",padding:"0px",margin:"0px"}},[0!=e.index?a("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.index--}}},[e._v("Previous Step")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",round:"",size:"mini"},domProps:{textContent:e._s(3==e.index?"Finish":"Next Step")},on:{click:e.next}})],1)])],1)],1)},staticRenderFns:[]},l=a("VU/8")(n,i,!1,null,null,null);t.default=l.exports},"P/cq":function(e,t){},nSLl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{dialogVisible:!1,tableLoading:!1,index:0,salaries:[],multipleSelection:[],salary:{id:"",eid:"",asDate:"",beforeSalary:"",afterSalary:"",reason:"",remark:""}}},methods:{deleteAll:function(){var e=this;this.$confirm("Delete["+this.multipleSelection.length+"]rows, continue?","reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){var t="";e.multipleSelection.forEach(function(e){t=t+e.id+","}),e.doDelete(t)}).catch(function(){e.$message({type:"info",message:"Delete Canceled"})})},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e,t){this.dialogVisible=!0,t.asDate=new Date(t.asDate),this.salary=t},handleDelete:function(e,t){var a=this;this.$confirm("Delete["+t.eid+"], continue?","reminder",{confirmButtonText:"Confirm",cancelButtonText:"Cancel",type:"warning"}).then(function(){a.doDelete(t.id)}).catch(function(){a.$message({type:"info",message:"Delete Canceled"})})},doDelete:function(e){var t=this;t.tableLoading=!0,this.deleteRequest("/personnel/adjust/salary/"+e).then(function(e){if(t.tableLoading=!1,e&&200==e.status){e.data;t.loadSalaryCfg()}})},next:function(){var e=this;5==this.index?this.salary.eid&&this.salary.asDate&&this.salary.beforeSalary&&this.salary.afterSalary&&this.salary.reason&&this.salary.remark?this.salary.id?(e.tableLoading=!0,this.putRequest("/personnel/adjust/salary",this.salary).then(function(t){if(e.tableLoading=!1,t&&200==t.status){t.data;_,e.dialogVisible=!1,e.index=0,e.loadSalaryCfg()}})):this.postRequest("/personnel/adjust/salary",this.salary).then(function(t){if(t&&200==t.status){t.data;e.dialogVisible=!1,e.index=0,e.loadSalaryCfg()}}):this.$message({type:"error",message:"Please input something!"}):this.index++},loadSalaryCfg:function(){this.tableLoading=!0;var e=this;this.getRequest("/personnel/adjust/salary").then(function(t){e.tableLoading=!1,t&&200==t.status&&(e.salaries=t.data)})},emptySalary:function(){this.salary={id:"",eid:"",asDate:"",beforeSalary:"",afterSalary:"",reason:"",remark:""},this.index=0}},mounted:function(){this.loadSalaryCfg()}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","padding-left":"0px"}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("Add Salary Adjustment")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success",icon:"el-icon-refresh"},on:{click:e.loadSalaryCfg}})],1),e._v(" "),a("el-main",{staticStyle:{"padding-left":"0px","padding-top":"0px"}},[a("div",[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],staticStyle:{width:"100%"},attrs:{data:e.salaries,stripe:"",size:"mini"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"120",prop:"eid",label:"Employee's Job Number"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"100",label:"Date of Salary Adjustment"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.asDate)))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"70",prop:"beforeSalary",label:"Previous Salary"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"70",prop:"afterSalary",label:"Salary after Adjustment"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"350",prop:"reason",label:"Reason of Adjustment"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"remark",width:"350",label:"Remark"}}),e._v(" "),a("el-table-column",{attrs:{label:"Operating",align:"center"}},[a("el-table-column",{attrs:{label:"Edit",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("Edit\n                ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Delete",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("Delete\n                ")])]}}])})],1)],1)],1),e._v(" "),0!=e.salaries?a("div",{staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-button",{attrs:{type:"danger",round:"",size:"mini",disabled:0==e.multipleSelection.length},on:{click:e.deleteAll}},[e._v("Batch Delete\n        ")])],1):e._e()])],1),e._v(" "),a("div",{staticStyle:{"text-align":"left"}},[a("el-dialog",{attrs:{title:"Add Adjustment",visible:e.dialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.emptySalary}},[a("div",{staticStyle:{display:"flex","justify-content":"flex-start"}},[a("el-steps",{attrs:{active:e.index,direction:"vertical"}},[a("el-step",{attrs:{title:"Employee's Job Number",size:"mini"}}),e._v(" "),a("el-step",{attrs:{title:"Date of Adjustment"}}),e._v(" "),a("el-step",{attrs:{title:"Previous Salary"}}),e._v(" "),a("el-step",{attrs:{title:"Salary after Adjustment"}}),e._v(" "),a("el-step",{attrs:{title:"Reason of Adjustment"}}),e._v(" "),a("el-step",{attrs:{title:"Remark"}})],1),e._v(" "),a("div",{staticStyle:{"margin-left":"30px",display:"flex","justify-content":"center","align-items":"center",width:"80%"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0==e.index,expression:"index==0"}]},[e._v("\n            Employee's Job Number\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input Employee's Job Number...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.eid,callback:function(t){e.$set(e.salary,"eid",t)},expression:"salary.eid"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.index,expression:"index==1"}]},[e._v("\n            Date of Adjustment\n            "),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",size:"mini","value-format":"yyyy-MM-dd",placeholder:"Select Date"},model:{value:e.salary.asDate,callback:function(t){e.$set(e.salary,"asDate",t)},expression:"salary.asDate"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.index,expression:"index==2"}]},[e._v("\n            Previous Salary:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input previous salary...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.beforeSalary,callback:function(t){e.$set(e.salary,"beforeSalary",t)},expression:"salary.beforeSalary"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.index,expression:"index==3"}]},[e._v("\n            Salary after Adjustment:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input salary after Adjustment...",size:"mini",type:"number"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.afterSalary,callback:function(t){e.$set(e.salary,"afterSalary",t)},expression:"salary.afterSalary"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==e.index,expression:"index==4"}]},[e._v("\n            Reason of Adjustment:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input the reason of Adjustment...",size:"mini",type:"textarea"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.reason,callback:function(t){e.$set(e.salary,"reason",t)},expression:"salary.reason"}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==e.index,expression:"index==5"}]},[e._v("\n            Remark:\n            "),a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"Please input the remark...",size:"mini",type:"textarea"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.next(t)}},model:{value:e.salary.remark,callback:function(t){e.$set(e.salary,"remark",t)},expression:"salary.remark"}})],1)])],1),e._v(" "),a("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center",padding:"0px",margin:"0px"}},[0!=e.index?a("el-button",{attrs:{round:"",size:"mini"},on:{click:function(t){e.index--}}},[e._v("Previous Step")]):e._e(),e._v(" "),a("el-button",{attrs:{type:"primary",round:"",size:"mini"},domProps:{textContent:e._s(5==e.index?"Finish":"Next Step")},on:{click:e.next}})],1)])],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(e){a("ne97")},null,null);t.default=l.exports},ne97:function(e,t){},sALK:function(e,t,a){var n={"./PerEc.vue":"GZY3","./PerMv.vue":"F1RE","./PerSalary.vue":"nSLl","./PerTrain.vue":"K5YU"};function i(e){return a(l(e))}function l(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=l,e.exports=i,i.id="sALK"}});
//# sourceMappingURL=3.fe3103c4ea118cb168f5.js.map