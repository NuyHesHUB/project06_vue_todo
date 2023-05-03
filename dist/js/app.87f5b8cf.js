(function(){"use strict";var e={9305:function(e,t,o){var n=o(9242),a=o(3396);const l=e=>((0,a.dD)("data-v-b555cbba"),e=e(),(0,a.Cn)(),e),c={class:"app-container"},i={class:"app-navigation"},d=l((()=>(0,a._)("h1",null,"Vue",-1))),s=l((()=>(0,a._)("div",{class:"divide"},null,-1)));function r(e,t,o,n,l,r){const u=(0,a.up)("router-link"),p=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("nav",i,[d,s,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(u,{to:{name:"Todos"}},{default:(0,a.w5)((()=>[(0,a.Uk)("TO-DO")])),_:1})])])]),(0,a.Wm)(p)])}var u={},p=o(89);const v=(0,p.Z)(u,[["render",r],["__scopeId","data-v-b555cbba"]]);var g=v,m=o(2483),f=o(7139);const b=e=>((0,a.dD)("data-v-07e3cce9"),e=e(),(0,a.Cn)(),e),h={class:"todo-container"},_=b((()=>(0,a._)("h2",null,"TO-DO",-1))),y={style:{display:"flex","align-items":"center","justify-content":"space-between"}},T={style:{"margin-right":"0.5rem",width:"80%"}},w={key:0,style:{"font-size":"14px","text-align":"center",color:"#888",padding:"5rem 0"}},k=b((()=>(0,a._)("br",null,null,-1))),x={class:"pagination"},C={class:"page-item"},j=b((()=>(0,a._)("i",{class:"fa-solid fa-chevron-left"},null,-1))),D=[j],O=["onClick"],P={class:"page-item"},Z=b((()=>(0,a._)("i",{class:"fa-solid fa-chevron-right"},null,-1))),H=[Z];function E(e,t,o,l,c,i){const d=(0,a.up)("TodoList");return(0,a.wg)(),(0,a.iD)("div",h,[_,(0,a._)("div",y,[(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"TO-DO 검색",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.serchText=e),style:{margin:"1rem 0",width:"300px",padding:"5px 20px"}},null,512),[[n.nr,l.serchText]])]),(0,a._)("div",null,[(0,a._)("button",{class:"btn create-btn",onClick:t[1]||(t[1]=(...e)=>l.moveToCreatePage&&l.moveToCreatePage(...e))},"CREATE TODO")])]),l.todos.length?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",w," 찾는 문장이 없습니다 ")),(0,a.Wm)(d,{todos:l.todos,onDeleteTodo:l.deleteTodo,onToggleTodo:l.toggleTodo},null,8,["todos","onDeleteTodo","onToggleTodo"]),k,(0,a._)("nav",null,[(0,a._)("ul",x,[(0,a._)("li",C,[(0,a._)("a",{href:"#!",class:"page-link",onClick:t[2]||(t[2]=e=>l.getTodos(l.currentPage-1))},D)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.numberofPages,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e,class:(0,f.C_)(["page-item",l.currentPage===e?"active":""])},[(0,a._)("a",{href:"#!",onClick:t=>l.getTodos(e),class:(0,f.C_)(["page-link",l.currentPage===e?"active":""])},(0,f.zw)(e),11,O)],2)))),128)),(0,a._)("li",P,[(0,a._)("a",{href:"#!",onClick:t[3]||(t[3]=e=>l.getTodos(l.currentPage+1)),class:"page-link"},H)])])])])}o(7658);var F=o(4870);const M=["onClick"],S=["checked","onChange"],z=["onClick"];function U(e,t,o,l,c,i){return(0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.todos,((e,o)=>((0,a.wg)(),(0,a.iD)("div",{class:"todo-list",key:e.id},[(0,a._)("div",{onClick:t=>l.moveToPage(e.id),style:{display:"flex",border:"1px solid #ccc",padding:"10px 20px","justify-content":"space-between","align-items":"center","margin-bottom":"5px"}},[(0,a._)("div",null,[(0,a._)("input",{type:"checkbox",class:"form-check-input",checked:e.completed,style:{"margin-right":"10px"},onChange:e=>l.toggleTodo(o,e),onClick:t[0]||(t[0]=(0,n.iM)((()=>{}),["stop"]))},null,40,S),(0,a._)("label",{class:(0,f.C_)({completed:e.completed})},(0,f.zw)(e.subject),3)]),(0,a._)("div",null,[(0,a._)("button",{class:"btn",style:{padding:"5px 10px",background:"#555"},onClick:(0,n.iM)((e=>l.deleteTodo(o)),["stop"])},"삭제",8,z)])],8,M)])))),128))])}var q={props:{todos:{type:Array,required:!0}},emits:["toggle-todo","delete-todo"],setup(e,t){const o=(0,m.tv)(),n=e=>{t.emit("delete-todo",e)},a=(e,o)=>{t.emit("toggle-todo",e,o.target.checked)},l=e=>{o.push({name:"Todo",params:{id:e}})};return{deleteTodo:n,toggleTodo:a,moveToPage:l}}};const I=(0,p.Z)(q,[["render",U],["__scopeId","data-v-0ae590b4"]]);var L=I,W=o(5939),$={components:{TodoList:L},setup(){const e=(0,m.tv)(),t=(0,F.iH)([]),o=(0,F.iH)(""),n=(0,F.iH)(""),l=5,c=(0,F.iH)(0),i=(0,F.iH)(1),d=(0,a.Fl)((()=>Math.ceil(c.value/l))),s=async(e=i.value)=>{i.value=e;try{const n=await W.Z.get(`http://localhost:3000/todos?_sort=id&_order=desc&subject_like=${o.value}&_page=${e}&_limit=${l}`);c.value=n.headers["x-total-count"],t.value=n.data}catch(a){console.log(a),n.value="찾는 문장이 없습니다"}i.value<1&&(i.value=1),i.value>d.value&&(i.value=d.value)};s();const r=()=>{e.push({name:"TodoCreate"})},u=async e=>{n.value="";try{await W.Z.post("http://localhost:3000/todos",{subject:e.subject,completed:e.completed}),s(1)}catch(t){console.log(t),n.value="잘못된 입력입니다."}};(0,a.YP)(o,(()=>{s(1)}));const p=async e=>{n.value="";const o=t.value[e].id;try{await W.Z["delete"]("http://localhost:3000/todos/"+o),s(1)}catch(a){console.log(a),n.value="찾는 문장이 없습니다"}},v=async(e,o)=>{n.value="";const a=t.value[e].id;try{await W.Z.patch("http://localhost:3000/todos/"+a,{completed:o}),t.value[e].completed=o}catch(l){console.log(l),n.value="찾는 문장이 없습니다"}};return{todos:t,deleteTodo:p,addTodo:u,toggleTodo:v,serchText:o,getTodos:s,numberofPages:d,currentPage:i,moveToCreatePage:r}}};const V=(0,p.Z)($,[["render",E],["__scopeId","data-v-07e3cce9"]]);var R=V;const Y=e=>((0,a.dD)("data-v-7c0d0df4"),e=e(),(0,a.Cn)(),e),A={class:"todo-container"},G=Y((()=>(0,a._)("h2",null,"To-do Page",-1)));function K(e,t,o,n,l,c){const i=(0,a.up)("TodoForm");return(0,a.wg)(),(0,a.iD)("div",A,[G,(0,a.Wm)(i,{editing:!0})])}const B=e=>((0,a.dD)("data-v-12a7701e"),e=e(),(0,a.Cn)(),e),J={class:"page-container"},N={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"1rem"}},Q={style:{display:"flex","align-items":"center"}},X=B((()=>(0,a._)("label",{style:{"text-align":"center","margin-right":"10px"}},"To-Do",-1))),ee={key:0},te={key:0},oe={style:{display:"flex","flex-direction":"column","margin-bottom":"1rem"}},ne=B((()=>(0,a._)("label",{style:{"margin-bottom":"5px"}},"MEMO",-1))),ae={style:{"text-align":"center"}},le=["disabled"];function ce(e,t,o,l,c,i){return(0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("form",{onSubmit:t[4]||(t[4]=(0,n.iM)(((...e)=>l.onSave&&l.onSave(...e)),["prevent"]))},[(0,a._)("div",N,[(0,a._)("div",null,[(0,a._)("div",Q,[X,(0,a.wy)((0,a._)("input",{type:"text",class:"from-control","onUpdate:modelValue":t[0]||(t[0]=e=>l.todo.subject=e)},null,512),[[n.nr,l.todo.subject]]),l.subjectError?((0,a.wg)(),(0,a.iD)("div",ee,(0,f.zw)(l.subjectError),1)):(0,a.kq)("",!0)])]),o.editing?((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("div",null,[(0,a._)("div",null,[(0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>l.toggleTodoStatus&&l.toggleTodoStatus(...e)),type:"button",class:(0,f.C_)(["btn",l.todo.completed?"btnGG":"btnRR"])},(0,f.zw)(l.todo.completed?"완료":"미완료"),3)])])])):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a._)("div",oe,[ne,(0,a.wy)((0,a._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.todo.body=e),cols:"30",rows:"10"},null,512),[[n.nr,l.todo.body]])])]),(0,a._)("div",ae,[(0,a._)("button",{class:"default-btn",type:"submit",disabled:!l.todoUpdated},(0,f.zw)(o.editing?"저장":"만들기"),9,le),(0,a._)("button",{class:"default-btn",onClick:t[3]||(t[3]=(...e)=>l.moveToTodoListPage&&l.moveToTodoListPage(...e))},"취소")])],32)])}var ie=o(4806),de=o.n(ie),se={props:{editing:{type:Boolean,default:!1}},setup(e){const t=(0,m.yj)(),o=(0,m.tv)(),n=(0,F.iH)(""),l=(0,F.iH)({subject:"",completed:!1,body:""}),c=(0,F.iH)(null),i=t.params.id,d=async()=>{const e=await W.Z.get(`http://localhost:3000/todos/${i} `);l.value=e.data,c.value={...e.data}},s=()=>{l.value.completed=!l.value.completed},r=()=>{o.push({name:"Todos"})};e.editing&&d();const u=async()=>{if(l.value.subject)try{let t;const o={subject:l.value.subject,completed:l.value.completed,body:l.value.body};e.editing?t=await W.Z.put(`http://localhost:3000/todos/${i}`,o):(t=await W.Z.post("http://localhost:3000/todos",o),l.value.subject="",l.value.body=""),c.value={...t.data}}catch(t){console.log(t)}else n.value="내용을 작성해주세요"},p=(0,a.Fl)((()=>!de().isEqual(l.value,c.value)));return{todo:l,toggleTodoStatus:s,moveToTodoListPage:r,onSave:u,todoUpdated:p,subjectError:n}}};const re=(0,p.Z)(se,[["render",ce],["__scopeId","data-v-12a7701e"]]);var ue=re,pe={components:{TodoForm:ue}};const ve=(0,p.Z)(pe,[["render",K],["__scopeId","data-v-7c0d0df4"]]);var ge=ve;const me={class:"todo-container"},fe=(0,a._)("h2",null,"Create To-do",-1);function be(e,t,o,n,l,c){const i=(0,a.up)("TodoForm");return(0,a.wg)(),(0,a.iD)("div",me,[fe,(0,a.Wm)(i)])}var he={components:{TodoForm:ue}};const _e=(0,p.Z)(he,[["render",be]]);var ye=_e;const Te=(0,m.p7)({history:(0,m.PO)(),routes:[{path:"/",name:"Todos",component:R},{path:"/todos/create",name:"TodoCreate",component:ye},{path:"/todos/:id",name:"Todo",component:ge}]});var we=Te;(0,n.ri)(g).use(we).mount("#app")}},t={};function o(n){var a=t[n];if(void 0!==a)return a.exports;var l=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.loaded=!0,l.exports}o.m=e,function(){var e=[];o.O=function(t,n,a,l){if(!n){var c=1/0;for(r=0;r<e.length;r++){n=e[r][0],a=e[r][1],l=e[r][2];for(var i=!0,d=0;d<n.length;d++)(!1&l||c>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(i=!1,l<c&&(c=l));if(i){e.splice(r--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var r=e.length;r>0&&e[r-1][2]>l;r--)e[r]=e[r-1];e[r]=[n,a,l]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,c=n[0],i=n[1],d=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(d)var r=d(o)}for(t&&t(n);s<c.length;s++)l=c[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(r)},n=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(9305)}));n=o.O(n)})();
//# sourceMappingURL=app.87f5b8cf.js.map