(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UYAy:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),r=u("SVse"),c=u("mrSG"),b=u("gKry"),i=u("e1JD");let d=(()=>{let l=class extends b.a{addTodo(l){this.ctx.setState(n=>n.concat(l))}removeTodo(l){this.ctx.setState(n=>n.filter((n,u)=>u!==l))}};return Object(c.a)([Object(b.d)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[String]),Object(c.b)("design:returntype",void 0)],l.prototype,"addTodo",null),Object(c.a)([Object(b.d)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Number]),Object(c.b)("design:returntype",void 0)],l.prototype,"removeTodo",null),l=Object(c.a)([Object(b.b)(),Object(b.c)(),Object(i.f)({name:"todo",defaults:[]})],l),l})();class a{constructor(l){this.todo=l}}var s=t.pb({encapsulation:2,styles:[],data:{}});function p(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,3,"li",[["class","todo"]],null,null,null,null,null)),(l()(),t.Gb(1,null,[" "," "])),(l()(),t.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.todo.removeTodo(l.context.index)&&t),t}),null,null)),(l()(),t.Gb(-1,null,["\u{1f5d1}"]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function f(l){return t.Ib(2,[(l()(),t.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Gb(-1,null,["Todo Form"])),(l()(),t.rb(2,0,null,null,5,"div",[["class","add-todo"]],null,null,null,null,null)),(l()(),t.rb(3,0,[["text",1]],null,0,"input",[["placeholder","New Todo"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.todo.addTodo(t.Bb(l,3).value)&&o),o}),null,null)),(l()(),t.Gb(-1,null,["Add"])),(l()(),t.rb(6,0,null,null,1,"button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.todo.reset()&&t),t}),null,null)),(l()(),t.Gb(-1,null,["Reset"])),(l()(),t.rb(8,0,null,null,3,"ul",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,2,null,p)),t.qb(10,278528,null,0,r.j,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,r.b,[t.i])],(function(l,n){var u=n.component;l(n,10,0,t.Hb(n,10,0,t.Bb(n,11).transform(u.todo.state$)))}),null)}function m(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"first",[],null,null,null,f,s)),t.qb(1,49152,null,0,a,[d],null,null)],null,null)}var v=t.nb("first",a,m,{},{},[]),O=u("Mrqg"),j=u("iInd");u.d(n,"SecondModuleNgFactory",(function(){return A}));var A=t.ob(o,[],(function(l){return t.zb([t.Ab(512,t.k,t.Z,[[8,[e.a,v]],[3,t.k],t.w]),t.Ab(4608,r.l,r.k,[t.t,[2,r.r]]),t.Ab(4608,i.C,i.C,[[3,i.C],[2,i.c]]),t.Ab(4608,d,d,[]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(512,i.x,i.x,[t.q,i.u,[3,i.x],i.p,i.y,i.A,[2,O.a]]),t.Ab(1024,i.r,(function(){return[[d]]}),[]),t.Ab(1073742336,i.I,i.I,[i.i,i.B,i.x,[2,i.r],i.H]),t.Ab(1073742336,j.m,j.m,[[2,j.r],[2,j.k]]),t.Ab(1073742336,o,o,[]),t.Ab(1024,j.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);