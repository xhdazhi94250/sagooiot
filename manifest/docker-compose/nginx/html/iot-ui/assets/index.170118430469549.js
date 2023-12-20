import{i as _}from"./echarts.1701184304695.js";import"./wordCloud.1701184304695.js";import{_ as M,g as j,d as G}from"./index.1701184304695.js";import{L as H,a2 as I,k as K,ab as Z,a as Y,b as e,_ as o,T as s,ai as v,o as q,Z as d,Y as f,j as Q,aB as X,aC as ee}from"./vue.1701184304695.js";const te=H({name:"monitor",components:{},setup(){const{proxy:t}=Q(),a=I({myCharts:[],sysInfo:{}});let i,p,y,g,r,h;const m=I({bootTime:"2022-11-24T11:12:13+08:00",hostId:"8be74718-1a53-4208-be22-9c126d891ddd",hostname:"iZ2zee04uvnkmhvglw9oghZ",intranet_ip:"172.17.47.62",kernelArch:"x86_64",kernelVersion:"3.10.0-1127.19.1.el7.x86_64",os:"linux",platform:"centos",platformFamily:"rhel",platformVersion:"7.7.1908",procs:138,public_ip:"101.200.198.249",uptime:6393278,virtualizationRole:"guest",virtualizationSystem:""}),c=I({goOs:"-",arch:"-",goVersion:"-",goMem:"-",goName:"-",goSize:"-",goVersion:"-",goroutine:"-",pwd:"-",rootPath:"-",runTime:"",startTime:"-",intranet_ip:"-"});function b(l){const n=JSON.parse(l.data);Object.assign(c,n)}function w(l){const n=JSON.parse(l.data);Object.assign(m,n)}const A={name:[],value:[]},B={name:[],value:[]},O={name:[],value:[]},F={tooltip:{trigger:"axis"},grid:{top:10,bottom:20,left:10,right:10,containLabel:!0},xAxis:{type:"category",splitLine:{show:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1}},series:[{name:"\u4F7F\u7528\u7387",type:"line",showSymbol:!1,data:[]}]};function x(l){i.setOption({series:[{data:[{value:l,name:""}]}]})}function S(l){p.setOption({series:[{data:[{value:l,name:""}]}]})}function D(l){y.setOption({series:[{data:[{value:l,name:""}]}]})}function C(l,n,J){n.name.push(G().format("HH:mm:ss")),n.value.push(J),l.setOption({xAxis:{data:n.name},series:[{data:n.value}]})}const U=()=>{i=_(t.$refs.chartsWarningRef1);const l={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"gauge",name:"CPU",radius:"90%",title:{show:!0,fontSize:12,color:"green",offsetCenter:[-2,"30%"]},axisLine:{show:!0,lineStyle:{color:[[.3,"#4dabf7"],[.6,"#69db7c"],[.8,"#ffa94d"],[1,"#ff6b6b"]]}},splitNumber:5,detail:{valueAnimation:!0,formatter:"{value}%",textStyle:{fontSize:20,color:"red"},offsetCenter:["0","80%"]}}]};i.setOption(l),a.myCharts.push(i)},k=()=>{p=_(t.$refs.chartsWarningRef2);const l={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"gauge",name:"\u5185\u5B58",radius:"90%",title:{show:!0,fontSize:12,color:"green",offsetCenter:[-2,"30%"]},axisLine:{show:!0,lineStyle:{color:[[.3,"#4dabf7"],[.6,"#69db7c"],[.8,"#ffa94d"],[1,"#ff6b6b"]]}},splitNumber:5,detail:{valueAnimation:!0,formatter:"{value}%",textStyle:{fontSize:20,color:"red"},offsetCenter:["0","80%"]}}]};p.setOption(l),a.myCharts.push(p)},R=()=>{y=_(t.$refs.chartsWarningRef3);const l={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{type:"gauge",name:"\u78C1\u76D8",radius:"90%",title:{show:!0,fontSize:12,color:"green",offsetCenter:[-2,"30%"]},axisLine:{show:!0,lineStyle:{color:[[.3,"#4dabf7"],[.6,"#69db7c"],[.8,"#ffa94d"],[1,"#ff6b6b"]]}},splitNumber:5,detail:{valueAnimation:!0,formatter:"{value}%",textStyle:{fontSize:20,color:"red"},offsetCenter:["0","80%"]}}]};y.setOption(l),a.myCharts.push(y)},N=()=>{g=_(t.$refs.chartsWarningRef4),g.setOption({...F}),a.myCharts.push(g)},L=()=>{r=_(t.$refs.chartsWarningRef5),r.setOption({...F}),a.myCharts.push(r)},T=()=>{h=_(t.$refs.chartsWarningRef6),h.setOption({...F}),a.myCharts.push(h)};K(()=>{U(),k(),R(),N(),L(),T()});function E(){const l=new EventSource(j("/base-api/subscribe/sysenv"));l.addEventListener("host",P),l.addEventListener("mem",z),l.addEventListener("cpu",W),l.addEventListener("sysLoad",$),l.addEventListener("disk",V),l.addEventListener("go",b),l.addEventListener("host",w)}E();function P(l){const n=JSON.parse(l.data);a.sysInfo.os=n.os,a.sysInfo.kernelArch=n.kernelArch,a.sysInfo.sysComputerName=n.hostname,a.sysInfo.goStartTime=n.bootTime,a.sysInfo.goRunTime=n.uptime}function z(l){const n=JSON.parse(l.data);S(n.usedPercent.toFixed(2)),a.sysInfo.memTotal=n.total,a.sysInfo.memUsed=n.used,a.sysInfo.memFree=n.free,a.sysInfo.goUsed=n.goUsed,a.sysInfo.memUsage=n.usedPercent.toFixed(2),C(r,B,a.sysInfo.memUsage)}function W(l){const n=JSON.parse(l.data);a.sysInfo.cpuNum=n.Number,a.sysInfo.cpuCores=n.Cores,a.sysInfo.cpuUsed=n.UsedPercent[0].toFixed(2),x(n.UsedPercent[0].toFixed(2)),C(g,A,a.sysInfo.cpuUsed)}function $(l){const n=JSON.parse(l.data);a.sysInfo.cpuAvg5=n.load5.toFixed(2),a.sysInfo.cpuAvg15=n.load15.toFixed(2)}function V(l){const n=JSON.parse(l.data);a.sysInfo.diskTotal=n.total,a.sysInfo.diskUsed=n.used,a.sysInfo.diskUsedPercent=n.usedPercent.toFixed(2),D(n.usedPercent.toFixed(2)),C(h,O,a.sysInfo.diskUsedPercent)}return{...Z(a),goInfoData:c,hostData:m,setOptChart1:x,setOptChart2:S,setOptChart3:D}},created(){},unmounted(){},data(){return{}},methods:{memorySizeFormat(t){t=parseFloat(t);let a=0,i="Bytes";for(;t>1024&&i!="TB";)t=t/1024,a++,a==1?i="KB":a==2?i="MB":a==3?i="GB":a==4&&(i="TB");return t.toFixed(2)+" "+i},timeFormat(t){if(!t)return"-";t=parseFloat(t);let a=0,i="\u79D2";for(;t>60&&i!="\u5C0F\u65F6"&&i!="\u5929"||t>24&&i=="\u5C0F\u65F6";)i=="\u5C0F\u65F6"?t=t/24:t=t/60,a++,a==1?i="\u5206":a==2?i="\u5C0F\u65F6":a==3&&(i="\u5929");return t.toFixed(2)+" "+i}}}),u=t=>(X("data-v-516089a9"),t=t(),ee(),t),se={class:"system-user-container"},ae={class:"flex-row gap-3"},oe={class:"el-table--enable-row-hover el-table--medium"},le={cellspacing:"0",style:{width:"100%"}},ne=u(()=>e("td",null,[e("div",{class:"cell-card"},"CPU\u6570: ")],-1)),de={class:"cell-card"},ie=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u6838\u5FC3\u6570: ")],-1)),re={class:"cell-card"},ue=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u4F7F\u7528\u7387:")],-1)),ce={class:"cell-card"},fe=u(()=>e("td",null,[e("div",{class:"cell-card"},"LA5:")],-1)),me={class:"cell-card"},he=u(()=>e("td",null,[e("div",{class:"cell-card"},"LA15:")],-1)),_e={class:"cell-card"},pe={style:{"min-height":"180px"},ref:"chartsWarningRef1"},ye={class:"el-table--enable-row-hover el-table--medium"},ge={cellspacing:"0",style:{width:"100%"}},be=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u5185\u5B58\u603B\u6570:")],-1)),ve={class:"cell-card"},Fe=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u5DF2\u4F7F\u7528:")],-1)),Ce={class:"cell-card"},Ie=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u5269\u4F59:")],-1)),xe={class:"cell-card"},Se=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u7CFB\u7EDF\u4F7F\u7528:")],-1)),De={class:"cell-card"},we=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u4F7F\u7528\u7387:")],-1)),Ae={class:"cell-card"},Be={style:{"min-height":"180px"},ref:"chartsWarningRef2"},Oe={class:"el-table--enable-row-hover el-table--medium"},Ue={cellspacing:"0",style:{width:"100%"}},ke=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u78C1\u76D8\u5BB9\u91CF:")],-1)),Re={class:"cell-card"},Ne=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u5DF2\u4F7F\u7528:")],-1)),Le={class:"cell-card"},Te=u(()=>e("td",null,[e("div",{class:"cell-card"},"\u4F7F\u7528\u7387:")],-1)),Ee={class:"cell-card"},Pe={style:{"min-height":"180px"},ref:"chartsWarningRef3"},ze={class:"flex-row gap-3"},We=u(()=>e("div",{class:"card-header"},[e("span",null,"CPU\u8FD0\u884C\u60C5\u51B5")],-1)),$e={style:{height:"250px"},ref:"chartsWarningRef4"},Ve=u(()=>e("div",{class:"card-header"},[e("span",null,"\u5185\u5B58\u8FD0\u884C\u60C5\u51B5")],-1)),Je={style:{height:"250px"},ref:"chartsWarningRef5"},Me=u(()=>e("div",{class:"card-header"},[e("span",null,"\u78C1\u76D8\u4F7F\u7528\u60C5\u51B5")],-1)),je={style:{height:"250px"},ref:"chartsWarningRef6"},Ge={class:"flex-row gap-3"},He=u(()=>e("div",{class:"card-header"},[e("span",null,"\u8FD0\u884C\u73AF\u5883\u4FE1\u606F")],-1)),Ke={class:"flex-row"};function Ze(t,a,i,p,y,g){const r=v("el-col"),h=v("el-row"),m=v("el-card"),c=v("el-form-item"),b=v("el-form");return q(),Y("div",se,[e("div",ae,[o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-meter"},{default:s(()=>[e("div",oe,[o(h,{gutter:30},{default:s(()=>[o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("table",le,[e("tbody",null,[e("tr",null,[ne,e("td",null,[e("div",de,d(t.sysInfo.cpuNum),1)])]),e("tr",null,[ie,e("td",null,[e("div",re,d(t.sysInfo.cpuCores),1)])]),e("tr",null,[ue,e("td",null,[e("div",ce,d(t.sysInfo.cpuUsed)+"%",1)])]),e("tr",null,[fe,e("td",null,[e("div",me,d(t.sysInfo.cpuAvg5)+"%",1)])]),e("tr",null,[he,e("td",null,[e("div",_e,d(t.sysInfo.cpuAvg15)+"%",1)])])])])]),_:1}),o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("div",pe,null,512)]),_:1})]),_:1})])]),_:1})]),_:1}),o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-meter"},{default:s(()=>[e("div",ye,[o(h,{gutter:30},{default:s(()=>[o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("table",ge,[e("tbody",null,[e("tr",null,[be,e("td",null,[e("div",ve,d(t.memorySizeFormat(t.sysInfo.memTotal)),1)])]),e("tr",null,[Fe,e("td",null,[e("div",Ce,d(t.memorySizeFormat(t.sysInfo.memUsed)),1)])]),e("tr",null,[Ie,e("td",null,[e("div",xe,d(t.memorySizeFormat(t.sysInfo.memFree)),1)])]),e("tr",null,[Se,e("td",null,[e("div",De,d(t.memorySizeFormat(t.sysInfo.goUsed)),1)])]),e("tr",null,[we,e("td",null,[e("div",Ae,d(t.sysInfo.memUsage)+"%",1)])])])])]),_:1}),o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("div",Be,null,512)]),_:1})]),_:1})])]),_:1})]),_:1}),o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-meter"},{default:s(()=>[e("div",Oe,[o(h,{gutter:30},{default:s(()=>[o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("table",Ue,[e("tbody",null,[e("tr",null,[ke,e("td",null,[e("div",Re,d(t.memorySizeFormat(t.sysInfo.diskTotal)),1)])]),e("tr",null,[Ne,e("td",null,[e("div",Le,d(t.memorySizeFormat(t.sysInfo.diskUsed)),1)])]),e("tr",null,[Te,e("td",null,[e("div",Ee,d(t.sysInfo.diskUsedPercent)+"%",1)])])])])]),_:1}),o(r,{xs:24,sm:24,md:12},{default:s(()=>[e("div",Pe,null,512)]),_:1})]),_:1})])]),_:1})]),_:1})]),e("div",ze,[o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-height",style:{height:"auto"}},{header:s(()=>[We]),default:s(()=>[e("div",$e,null,512)]),_:1})]),_:1}),o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-height",style:{height:"auto"}},{header:s(()=>[Ve]),default:s(()=>[e("div",Je,null,512)]),_:1})]),_:1}),o(r,{xs:24,sm:12,md:8,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-height",style:{height:"auto"}},{header:s(()=>[Me]),default:s(()=>[e("div",je,null,512)]),_:1})]),_:1})]),e("div",Ge,[o(r,{xs:24,sm:24,md:24,class:"marg-b-15"},{default:s(()=>[o(m,{class:"box-card-height",style:{height:"auto"}},{header:s(()=>[He]),default:s(()=>[e("div",Ke,[o(b,{"label-position":"right","label-width":"100px",class:"flex1",style:{"max-width":"460px"}},{default:s(()=>[o(c,{label:"\u64CD\u4F5C\u7CFB\u7EDF"},{default:s(()=>[f(d(t.hostData.os),1)]),_:1}),o(c,{label:"\u542F\u52A8\u65F6\u95F4"},{default:s(()=>[f(d(t.goInfoData.startTime),1)]),_:1}),o(c,{label:"\u8FD0\u884C\u65F6\u957F"},{default:s(()=>[f(d(t.timeFormat(t.goInfoData.runTime)),1)]),_:1}),o(c,{label:"\u8FD0\u884C\u5185\u5B58"},{default:s(()=>[f(d(t.goInfoData.goMem),1)]),_:1})]),_:1}),o(b,{"label-position":"right","label-width":"100px",class:"flex1",style:{"max-width":"460px"}},{default:s(()=>[o(c,{label:"\u7CFB\u7EDF\u67B6\u6784"},{default:s(()=>[f(d(t.goInfoData.arch),1)]),_:1}),o(c,{label:"\u8BED\u8A00\u73AF\u5883"},{default:s(()=>[f(d(t.goInfoData.goName),1)]),_:1}),o(c,{label:"\u78C1\u76D8\u5360\u7528"},{default:s(()=>[f(d(t.goInfoData.goSize),1)]),_:1}),o(c,{label:"\u9879\u76EE\u5730\u5740"},{default:s(()=>[f(d(t.goInfoData.pwd),1)]),_:1})]),_:1}),o(b,{"label-position":"right","label-width":"100px",class:"flex1",style:{"max-width":"460px"}},{default:s(()=>[o(c,{label:"\u67B6\u6784\u7248\u672C"},{default:s(()=>[f(d(t.hostData.kernelArch),1)]),_:1}),o(c,{label:"GO \u7248\u672C"},{default:s(()=>[f(d(t.goInfoData.goVersion),1)]),_:1}),o(c,{label:"\u534F\u7A0B\u6570\u91CF"},{default:s(()=>[f(d(t.goInfoData.goroutine),1)]),_:1}),o(c,{label:"\u670D\u52A1\u5668IP"},{default:s(()=>[f(d(t.hostData.intranet_ip)+" (\u5185) \xA0\xA0\xA0 "+d(t.hostData.public_ip)+" (\u516C) ",1)]),_:1})]),_:1})])]),_:1})]),_:1})])])}var et=M(te,[["render",Ze],["__scopeId","data-v-516089a9"]]);export{et as default};