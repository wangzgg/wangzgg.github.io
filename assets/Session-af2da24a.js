var C=Object.defineProperty,N=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(t,e,s)=>e in t?C(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))S.call(e,s)&&b(t,s,e[s]);if(w)for(var s of w(e))E.call(e,s)&&b(t,s,e[s]);return t},v=(t,e)=>N(t,V(e));var g=(t,e,s)=>new Promise((o,l)=>{var a=r=>{try{_(s.next(r))}catch(u){l(u)}},d=r=>{try{_(s.throw(r))}catch(u){l(u)}},_=r=>r.done?o(r.value):Promise.resolve(r.value).then(a,d);_((s=s.apply(t,e)).next())});import{z as removeClass,s as isClient,x as getStyle,y as addClass,_ as _export_sfc}from"./_plugin-vue_export-helper-bb195905.js";import{b as ElSelect,a as ElInput,c as ElOption}from"./el-select-e6008b2b.js";import{E as ElScrollbar,a as ElButton}from"./el-scrollbar-89e55af6.js";import{b as ElImage,a as ElCol,E as ElRow}from"./el-col-4eb2b59a.js";import{r as ref,a as reactive,a1 as createApp,M as toRefs,B as defineComponent,W as h,w as withCtx,i as withDirectives,b as createVNode,Z as vShow,_ as Transition,s as nextTick,k as isString,z as isObject,D as isRef,a2 as hyphenate,a3 as useRoute,O as onMounted,o as openBlock,e as createElementBlock,d as createBaseVNode,g as unref,c as createBlock,F as Fragment,f as renderList,h as createTextVNode,a4 as createStaticVNode,t as toDisplayString,I as createCommentVNode,p as pushScopeId,j as popScopeId}from"./index-f69b9d97.js";import{d as useGlobalComponentSettings,p as post,e as del}from"./http-2c624b71.js";import{E as ElMessage}from"./el-message-97e3ad3d.js";function createLoadingComponent(t){let e;const s=ref(!1),o=reactive(v(f({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function l(i){o.text=i}function a(){const i=o.parent,c=n.ns;if(!i.vLoadingAddClassList){let p=i.getAttribute("loading-number");p=Number.parseInt(p)-1,p?i.setAttribute("loading-number",p.toString()):(removeClass(i,c.bm("parent","relative")),i.removeAttribute("loading-number")),removeClass(i,c.bm("parent","hidden"))}d(),m.unmount()}function d(){var i,c;(c=(i=n.$el)==null?void 0:i.parentNode)==null||c.removeChild(n.$el)}function _(){var i;t.beforeClose&&!t.beforeClose()||(s.value=!0,clearTimeout(e),e=window.setTimeout(r,400),o.visible=!1,(i=t.closed)==null||i.call(t))}function r(){if(!s.value)return;const i=o.parent;s.value=!1,i.vLoadingAddClassList=void 0,a()}const u=defineComponent({name:"ElLoading",setup(i,{expose:c}){const{ns:p,zIndex:y}=useGlobalComponentSettings("loading");return c({ns:p,zIndex:y}),()=>{const x=o.spinner||o.svg,k=h("svg",f({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"0 0 50 50"},x?{innerHTML:x}:{}),[h("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),B=o.text?h("p",{class:p.b("text")},[o.text]):void 0;return h(Transition,{name:p.b("fade"),onAfterLeave:r},{default:withCtx(()=>[withDirectives(createVNode("div",{style:{backgroundColor:o.background||""},class:[p.b("mask"),o.customClass,o.fullscreen?"is-fullscreen":""]},[h("div",{class:p.b("spinner")},[k,B])]),[[vShow,o.visible]])])})}}}),m=createApp(u),n=m.mount(document.createElement("div"));return v(f({},toRefs(o)),{setText:l,removeElLoadingChild:d,close:_,handleAfterLeave:r,vm:n,get $el(){return n.$el}})}let fullscreenInstance;const Loading=function(t={}){if(!isClient)return;const e=resolveOptions(t);if(e.fullscreen&&fullscreenInstance)return fullscreenInstance;const s=createLoadingComponent(v(f({},e),{closed:()=>{var l;(l=e.closed)==null||l.call(e),e.fullscreen&&(fullscreenInstance=void 0)}}));addStyle(e,e.parent,s),addClassList(e,e.parent,s),e.parent.vLoadingAddClassList=()=>addClassList(e,e.parent,s);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(s.$el),nextTick(()=>s.visible.value=e.visible),e.fullscreen&&(fullscreenInstance=s),s},resolveOptions=t=>{var e,s,o,l;let a;return isString(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((s=t.fullscreen)!=null?s:!0),lock:(o=t.lock)!=null?o:!1,customClass:t.customClass||"",visible:(l=t.visible)!=null?l:!0,target:a}},addStyle=(t,e,s)=>g(void 0,null,function*(){const{nextZIndex:o}=s.vm.zIndex||s.vm._.exposed.zIndex,l={};if(t.fullscreen)s.originalPosition.value=getStyle(document.body,"position"),s.originalOverflow.value=getStyle(document.body,"overflow"),l.zIndex=o();else if(t.parent===document.body){s.originalPosition.value=getStyle(document.body,"position"),yield nextTick();for(const a of["top","left"]){const d=a==="top"?"scrollTop":"scrollLeft";l[a]=`${t.target.getBoundingClientRect()[a]+document.body[d]+document.documentElement[d]-Number.parseInt(getStyle(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])l[a]=`${t.target.getBoundingClientRect()[a]}px`}else s.originalPosition.value=getStyle(e,"position");for(const[a,d]of Object.entries(l))s.$el.style[a]=d}),addClassList=(t,e,s)=>{const o=s.vm.ns||s.vm._.exposed.ns;["absolute","fixed","sticky"].includes(s.originalPosition.value)?removeClass(e,o.bm("parent","relative")):addClass(e,o.bm("parent","relative")),t.fullscreen&&t.lock?addClass(e,o.bm("parent","hidden")):removeClass(e,o.bm("parent","hidden"))},INSTANCE_KEY=Symbol("ElLoading"),createInstance=(t,e)=>{var s,o,l,a;const d=e.instance,_=i=>isObject(e.value)?e.value[i]:void 0,r=i=>{const c=isString(i)&&(d==null?void 0:d[i])||i;return c&&ref(c)},u=i=>r(_(i)||t.getAttribute(`element-loading-${hyphenate(i)}`)),m=(s=_("fullscreen"))!=null?s:e.modifiers.fullscreen,n={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:m,target:(o=_("target"))!=null?o:m?void 0:t,body:(l=_("body"))!=null?l:e.modifiers.body,lock:(a=_("lock"))!=null?a:e.modifiers.lock};t[INSTANCE_KEY]={options:n,instance:Loading(n)}},updateOptions=(t,e)=>{for(const s of Object.keys(e))isRef(e[s])&&(e[s].value=t[s])},vLoading={mounted(t,e){e.value&&createInstance(t,e)},updated(t,e){const s=t[INSTANCE_KEY];e.oldValue!==e.value&&(e.value&&!e.oldValue?createInstance(t,e):e.value&&e.oldValue?isObject(e.value)&&updateOptions(e.value,s.options):s==null||s.instance.close())},unmounted(t){var e;(e=t[INSTANCE_KEY])==null||e.instance.close(),t[INSTANCE_KEY]=null}},elLoading="";function fetchStream(t,e){const{onmessage:s,onclose:o,method:l,headers:a,body:d}=e,_=(r,u)=>g(this,null,function*(){const{value:m,done:n}=yield u.read();n?(r.close(),o==null||o()):(s==null||s(new TextDecoder().decode(m)),r.enqueue(m),_(r,u))});return fetch(t,{method:l,headers:a,body:d}).then(r=>{const u=r.body.getReader();return new ReadableStream({start(n){_(n,u)}})}).then(r=>new Response(r,{headers:{"Content-Type":"text/html"}}).text())}const Session_vue_vue_type_style_index_0_scoped_a84a1297_lang="",_withScopeId=t=>(pushScopeId("data-v-a84a1297"),t=t(),popScopeId(),t),_hoisted_1={class:"session_m"},_hoisted_2={style:{display:"flex","align-items":"center","justify-content":"center",width:"100%"}},_hoisted_3={class:"text_m"},_hoisted_4=_withScopeId(()=>createBaseVNode("span",null,"您好，我是智慧差旅智能体Agent，将为您提供一站式自主提交出差申请功能。您可以试着按以下格式向我提问：",-1)),_hoisted_5={class:"session_c"},_hoisted_6={class:"user"},_hoisted_7={class:"text_n1",style:{"white-space":"pre-wrap"}},_hoisted_8={key:0,class:"user"},_hoisted_9={class:"text_n"},_hoisted_10=["onClick"],_hoisted_11={key:0,class:"refer_content"},_hoisted_12=_withScopeId(()=>createBaseVNode("div",{class:"text_doc"},"引用文档：",-1)),_hoisted_13={class:"doc_name"},_hoisted_14={key:1,class:"user"},_hoisted_15={class:"text_n"},_hoisted_16={style:{width:"100%",height:"fit-content"}},_hoisted_17={key:0,class:"text_down"},_hoisted_18={class:"left"},_hoisted_19={key:0,class:"refer_content"},_hoisted_20=_withScopeId(()=>createBaseVNode("div",{class:"text_doc"},"引用文档：",-1)),_hoisted_21={class:"doc_name"},_hoisted_22={class:"text_mm"},_hoisted_23={class:"waarning"},_hoisted_24=_withScopeId(()=>createBaseVNode("span",null,"以上自动回复内容为 AI 生成，不代表开发者立场，请您仔细核对。",-1)),_hoisted_25={class:"session_input","element-loading-text":"执行中，请稍候……"},_hoisted_26={class:"input_t"},_hoisted_27={key:2,class:"music send_btn1"},_hoisted_28=createStaticVNode('<div class="item1 one1" data-v-a84a1297></div><div class="item1 two1" data-v-a84a1297></div><div class="item1 three1" data-v-a84a1297></div><div class="item1 four1" data-v-a84a1297></div><div class="item1 five1" data-v-a84a1297></div><div class="item1 six1" data-v-a84a1297></div><div class="item1 seven1" data-v-a84a1297></div>',7),_hoisted_35=[_hoisted_28],_hoisted_36={class:"copyright"},_sfc_main={__name:"Session",emits:["updateSeeeionName"],setup(__props,{emit:__emit}){let session_input=ref("");const fill=(t="t",e)=>{t=="c"?((e.indexOf("日期")!==-1||e.indexOf("时间")!==-1)&&(e=e.replace(": ***",": YYYY-MM-DD")),session_input.value+=" "+e):session_input.value=e},route=useRoute();let systemGenerating=ref(!1);const loading=ref(!1);let content=reactive([]);const scrollbarRef=ref(),sessionTitles=[{session_type:"reactor_engineer",title:"您好，我是反应堆控制保护工程师助理，您可以就该领域相关的工作手册、规程、系统标准、参数等相关知识向我提问。"},{session_type:"financial_budget",title:"您好，我是财务预算知识助理，您可以就财务预算制度相关的知识向我提问。"},{session_type:"financial_travel",title:"您好，我是财务差旅费知识助理，您可以就财务差旅费制度相关的知识向我提问。"},{session_type:"digital_briefing",title:"您好，我是智慧差旅智能体Agent，将为您提供一站式自主提交出差申请功能。"}],sessionTitle=ref(""),selected_model=ref("龙吟Agent"),options=[{value:"龙吟Agent",label:"龙吟Agent"},{value:"欧拉Agent",label:"欧拉Agent"},{value:"达芬奇Agent",label:"达芬奇Agent"}],dialogFormVisible=ref(!1),current_ques=ref("");let mediaRecorder,audio_stream,audioChunks=[];const startAudio=()=>{dialogFormVisible.value=!0,navigator.mediaDevices.getUserMedia({audio:!0}).then(t=>{audio_stream=t,mediaRecorder=new MediaRecorder(t),mediaRecorder.addEventListener("dataavailable",e=>{e.data.size>0&&(audioChunks.push(e.data),console.log(e.data))}),mediaRecorder.start()}).catch(t=>{console.log("获取麦克风失败：",t)})},stopAudio=()=>{dialogFormVisible.value=!1,mediaRecorder&&(mediaRecorder.addEventListener("stop",()=>{audio_stream.getAudioTracks()[0].stop()}),mediaRecorder.stop()),uploadRecording()},uploadRecording=()=>g(this,null,function*(){const t=new Blob(audioChunks,{type:"audio/wav"}),e=new FormData;e.append("file",t,"recording.wav");try{const s=yield fetch("https://wanjie.ai:7888/transcribe_audio",{method:"POST",body:e,headers:{"Content-Type":"multipart/form-data"}});yield new Promise(l=>setTimeout(l,2e4));const o=yield s.json();console.log(o),session_input.value=o.text}catch(s){console.error("Error:",s)}});onMounted(()=>{console.log("TravelExpensesSession onMounted :>> "),console.log("output->route",route),loadOneSession(),setTimeout(()=>{scrollToBottom()},200)});const scrollToBottom=()=>{let t=document.getElementsByClassName("el-scrollbar__view");requestAnimationFrame(()=>{scrollbarRef.value.setScrollTop(t[0].clientHeight)})},loadOneSession=()=>g(this,null,function*(){const res=yield post("/api/digital/load-one-session",{session_id:localStorage.getItem("session_id")});console.log("output->res",res),res.code===200&&(res.msgs.map(item=>{switch(item.resp_msg=eval(item.resp_msg),console.log(item.resp_msg[0]),item.resp_msg[0]){case"0":{let t=`请确认以下信息:
`;json_msg=JSON.parse(item.resp_msg[1]);for(const e in json_msg)json_msg.hasOwnProperty(e)&&(t+=e+" : "+json_msg[e]+`
`);item.resp_msg=t,content.push(item),scrollToBottom();return}case"1":{let t="信息不完整，请补充:"+item.resp_msg[1];item.resp_msg=t,content.push(item),scrollToBottom();break}case"2":{item.resp_msg="出发城市或目的城市不支持请更换",content.push(item),scrollToBottom();break}case"3":{item.resp_msg="请确保出发日期晚于当前时间，返回时间晚于出发日期",content.push(item),scrollToBottom();break}}}),sessionTitles.forEach(t=>{t.session_type==res.session_type&&(sessionTitle.value=t.title)})),scrollToBottom()});let json_msg={};const send_msg=()=>g(this,null,function*(){if(session_input.value==""){ElMessage({message:"内容为空不可发送",type:"warning",center:!0,appendTo:document.getElementsByClassName("el-main")[0],offset:1e3});return}if(systemGenerating.value){ElMessage({message:"请等待系统回复完毕",type:"warning",center:!0,appendTo:document.getElementsByClassName("el-main")[0],offset:1e3});return}content.push({msg_id:null,resp_msg:"",msg:session_input.value,refer_doc:[],is_show_doc:!1,show_button:!0,is_confirm:!1,lost_list:[],confirm_msg:{}}),console.log(content),scrollToBottom();const t=session_input.value;session_input.value="";const e=yield post("/api/digital/smart-trip-brain",{session_id:localStorage.getItem("session_id"),query:t,history_query:current_ques.value});switch(console.log(e),e.data.answer[0]){case"0":{content[content.length-1].resp_msg=`请确认以下信息:
`,content[content.length-1].is_confirm=!0,json_msg=e.data.answer[1];for(const s in e.data.answer[1])e.data.answer[1].hasOwnProperty(s)&&(content[content.length-1].resp_msg+=s+" : "+e.data.answer[1][s]+`
`);scrollToBottom(),current_ques.value="",scrollToBottom();return}case"1":{content[content.length-1].resp_msg="信息不完整，请补充:",content[content.length-1].lost_list=e.data.answer[1],scrollToBottom();break}case"2":{content[content.length-1].resp_msg="出发城市或目的城市不支持请更换:",content[content.length-1].lost_list=["出发城市","目的城市"],scrollToBottom();break}case"3":{content[content.length-1].resp_msg="请确保出发日期晚于当前时间，返回时间晚于出发日期：",content[content.length-1].lost_list=["出发日期","返回时间"],scrollToBottom();break}}scrollToBottom(),current_ques.value==""?current_ques.value=t:current_ques.value=current_ques.value+","+t,scrollToBottom()}),confirm_exec=(t,e)=>{t.show_button=!1,loading.value=!0;try{fetchStream("/api/api/digital/smart-trip-rpa",{method:"POST",headers:{Authorization:localStorage.getItem("token")},body:JSON.stringify(json_msg),onmessage:s=>{s.indexOf("done")!==-1&&(loading.value=!1,ElMessage({message:"执行成功",type:"success"}))},onclose(){}})}catch(s){throw session_input.value="",s}},not_confirm_exec=(t,e)=>{t.show_button=!1},handleKeyDown=t=>{t.keyCode===13&&!t.shiftKey?(t.preventDefault(),send_msg()):t.keyCode===13&&t.shiftKey&&(t.preventDefault(),session_input.value+=`
`)},stopGenerate=()=>g(this,null,function*(){const t=yield del(`/digital/messages/${localStorage.getItem("session_id")}`);console.log("output->res",t)});return(t,e)=>{const s=ElOption,o=ElSelect,l=ElImage,a=ElCol,d=ElRow,_=ElButton,r=ElScrollbar,u=ElInput,m=vLoading;return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createVNode(o,{modelValue:selected_model.value,"onUpdate:modelValue":e[0]||(e[0]=n=>selected_model.value=n),class:"m-2",placeholder:"模型选择"},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(options,n=>createVNode(s,{key:n.value,label:n.label,value:n.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),createVNode(r,{ref_key:"scrollbarRef",ref:scrollbarRef,noresize:"true"},{default:withCtx(()=>[createBaseVNode("div",null,[createVNode(d,{gutter:16},{default:withCtx(()=>[createVNode(a,{span:1.5},{default:withCtx(()=>[createVNode(l,{style:{width:"40px",height:"40px"},src:"session_logo.svg"})]),_:1}),createVNode(a,{span:22.5},{default:withCtx(()=>[createTextVNode(", "),createBaseVNode("div",_hoisted_3,[_hoisted_4,createBaseVNode("span",{style:{"font-size":"smaller","background-color":"#f1f7ff",padding:"10px",height:"max-content","border-radius":"10px",width:"700px",cursor:"pointer"},onClick:e[1]||(e[1]=n=>fill("t","'账号姓名': '***', '出差人': '***', '出发城市': '**', '目的城市': '**', '出发日期': 'YYYY-MM-DD', '返回时间':'YYYY-MM-DD', '出差备注(内容)': '***'"))},"'账号姓名': '***', '出差人': '***', '出发城市': '**', '目的城市': '**', '出发日期': 'YYYY-MM-DD', '返回时间':'YYYY-MM-DD', '出差备注(内容)': '***'")])]),_:1})]),_:1}),(openBlock(!0),createElementBlock(Fragment,null,renderList(unref(content),(n,i)=>(openBlock(),createElementBlock("div",_hoisted_5,[createBaseVNode("div",_hoisted_6,[createVNode(d,{gutter:16},{default:withCtx(()=>[createVNode(a,{span:1.5},{default:withCtx(()=>[createVNode(l,{style:{width:"40px",height:"40px"},src:"user_logo.svg"})]),_:1}),createVNode(a,{span:22.5},{default:withCtx(()=>[createBaseVNode("div",_hoisted_7,toDisplayString(n.msg),1)]),_:2},1024)]),_:2},1024)]),n.is_confirm?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_8,[createVNode(d,{gutter:16},{default:withCtx(()=>[createVNode(a,{span:1.5},{default:withCtx(()=>[createVNode(l,{style:{width:"40px",height:"40px"},src:"session_logo.svg"})]),_:1}),createVNode(a,{span:22.5},{default:withCtx(()=>[createBaseVNode("div",_hoisted_9,[createTextVNode(toDisplayString(n.resp_msg)+" ",1),(openBlock(!0),createElementBlock(Fragment,null,renderList(n.lost_list,(c,p)=>(openBlock(),createElementBlock("span",{style:{"font-size":"smaller","background-color":"#f1f7ff","padding-left":"20px","padding-right":"20px","padding-top":"0px","padding-bottom":"0px",height:"max-content","border-radius":"50px",width:"fit-content",cursor:"pointer",display:"inline-flex","margin-right":"5px"},onClick:y=>fill("c",c+": ***")},toDisplayString(c),9,_hoisted_10))),256))]),n.is_show_doc?(openBlock(),createElementBlock("div",_hoisted_11,[_hoisted_12,(openBlock(!0),createElementBlock(Fragment,null,renderList(n.refer_doc,c=>(openBlock(),createElementBlock("div",_hoisted_13,toDisplayString(c),1))),256))])):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024)])),n.is_confirm?(openBlock(),createElementBlock("div",_hoisted_14,[createVNode(d,{gutter:16},{default:withCtx(()=>[createVNode(a,{span:1.5},{default:withCtx(()=>[createVNode(l,{style:{width:"40px",height:"40px"},src:"session_logo.svg"})]),_:1}),createVNode(a,{span:22.5},{default:withCtx(()=>[createBaseVNode("div",_hoisted_15,[createBaseVNode("span",_hoisted_16,toDisplayString(n.resp_msg),1),n.show_button?(openBlock(),createElementBlock("div",_hoisted_17,[createBaseVNode("div",_hoisted_18,[createBaseVNode("span",null,[createVNode(_,{size:"small",plain:"",round:"",onClick:c=>not_confirm_exec(n,i)},{default:withCtx(()=>[createTextVNode("放弃执行")]),_:2},1032,["onClick"])]),createBaseVNode("span",null,[createVNode(_,{size:"small",plain:"",round:"",onClick:c=>confirm_exec(n,i)},{default:withCtx(()=>[createTextVNode("确认执行")]),_:2},1032,["onClick"])])])])):createCommentVNode("",!0)]),n.is_show_doc?(openBlock(),createElementBlock("div",_hoisted_19,[_hoisted_20,(openBlock(!0),createElementBlock(Fragment,null,renderList(n.refer_doc,c=>(openBlock(),createElementBlock("div",_hoisted_21,toDisplayString(c),1))),256))])):createCommentVNode("",!0)]),_:2},1024)]),_:2},1024)])):createCommentVNode("",!0)]))),256))]),createBaseVNode("div",_hoisted_22,[createBaseVNode("div",_hoisted_23,[createVNode(l,{style:{width:"15px",height:"15px"},src:"warning.svg"}),_hoisted_24]),withDirectives(createBaseVNode("div",{class:"stop_gen",onClick:stopGenerate}," 停止生成 ",512),[[vShow,unref(systemGenerating)]])])]),_:1},512)]),withDirectives((openBlock(),createElementBlock("div",_hoisted_25,[createBaseVNode("div",_hoisted_26,[createVNode(u,{modelValue:unref(session_input),"onUpdate:modelValue":e[2]||(e[2]=n=>isRef(session_input)?session_input.value=n:session_input=n),rows:3,type:"textarea",maxlength:"2000","show-word-limit":"",onKeydown:handleKeyDown,placeholder:"请输入内容，Enter发送，Shift+Enter换行。"},null,8,["modelValue"])]),dialogFormVisible.value?(openBlock(),createBlock(l,{key:0,class:"audio",title:"暂停",style:{width:"24px",height:"24px",cursor:"pointer"},src:"pause.svg",onClick:stopAudio})):(openBlock(),createBlock(l,{key:1,class:"audio",title:"开始录音",style:{width:"24px",height:"24px",cursor:"pointer"},src:"audio.svg",onClick:startAudio})),dialogFormVisible.value?(openBlock(),createElementBlock("div",_hoisted_27,_hoisted_35)):(openBlock(),createElementBlock("button",{key:3,class:"send_btn",onClick:send_msg},"发送"))])),[[m,loading.value]]),createBaseVNode("div",_hoisted_36,[createVNode(l,{style:{width:"372px",height:"25px","margin-left":"409px"},src:"copyright.svg"})])],64)}}},Session=_export_sfc(_sfc_main,[["__scopeId","data-v-a84a1297"]]);export{Session as default};
