function _defineProperties(n,t){for(var l=0;l<t.length;l++){var e=t[l];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,t,l){return t&&_defineProperties(n.prototype,t),l&&_defineProperties(n,l),n}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{xG8Z:function(n,t,l){"use strict";l.r(t);var e,o=l("8Y7J"),u=function n(){_classCallCheck(this,n)},r=l("pMnS"),i=l("SVse"),c=l("mrSG"),a=l("gKry"),s=l("e1JD"),b=(e=function(n){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,n),_createClass(t,[{key:"addTodo",value:function(n){n&&this.ctx.setState((function(t){return t.concat(n)}))}},{key:"removeTodo",value:function(n){this.ctx.setState((function(t){return t.filter((function(t,l){return l!==n}))}))}}]),t}(a.a),Object(c.a)([Object(a.d)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[String]),Object(c.b)("design:returntype",void 0)],e.prototype,"addTodo",null),Object(c.a)([Object(a.d)(),Object(c.b)("design:type",Function),Object(c.b)("design:paramtypes",[Number]),Object(c.b)("design:returntype",void 0)],e.prototype,"removeTodo",null),e=Object(c.a)([Object(a.b)(),Object(a.c)(),Object(s.e)({name:"todo",defaults:[]})],e)),p=function n(t){_classCallCheck(this,n),this.todo=t},f=o.pb({encapsulation:2,styles:[],data:{}});function d(n){return o.Ib(0,[(n()(),o.rb(0,0,null,null,3,"li",[["class","todo"]],null,null,null,null,null)),(n()(),o.Gb(1,null,[" "," "])),(n()(),o.rb(2,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.todo.removeTodo(n.context.index)&&e),e}),null,null)),(n()(),o.Gb(-1,null,["\ud83d\uddd1"]))],null,(function(n,t){n(t,1,0,t.context.$implicit)}))}function y(n){return o.Ib(2,[(n()(),o.rb(0,0,null,null,1,"a",[["href","http://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Ftodo%2Ftodo.state.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Gb(-1,null,["TodoState"])),(n()(),o.Gb(-1,null,[" PS: TodoState will be persistence in localStorage "])),(n()(),o.rb(5,0,null,null,5,"div",[["class","add-todo"]],null,null,null,null,null)),(n()(),o.rb(6,0,[["text",1]],null,0,"input",[["placeholder","New Todo"]],null,null,null,null,null)),(n()(),o.rb(7,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.todo.addTodo(o.Bb(n,6).value)&&e),e}),null,null)),(n()(),o.Gb(-1,null,["Add"])),(n()(),o.rb(9,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.todo.reset()&&e),e}),null,null)),(n()(),o.Gb(-1,null,["Reset"])),(n()(),o.rb(11,0,null,null,3,"ul",[],null,null,null,null,null)),(n()(),o.gb(16777216,null,null,2,null,d)),o.qb(13,278528,null,0,i.j,[o.N,o.K,o.r],{ngForOf:[0,"ngForOf"]},null),o.Db(131072,i.b,[o.i])],(function(n,t){var l=t.component;n(t,13,0,o.Hb(t,13,0,o.Bb(t,14).transform(l.todo.state$)))}),null)}var h=o.nb("todo",p,(function(n){return o.Ib(0,[(n()(),o.rb(0,0,null,null,1,"todo",[],null,null,null,y,f)),o.qb(1,49152,null,0,p,[b],null,null)],null,null)}),{},{},[]),O=l("Mrqg"),g=l("iInd");l.d(t,"TodoModuleNgFactory",(function(){return _}));var _=o.ob(u,[],(function(n){return o.zb([o.Ab(512,o.k,o.Z,[[8,[r.a,h]],[3,o.k],o.w]),o.Ab(4608,i.l,i.k,[o.t,[2,i.r]]),o.Ab(4608,s.D,s.D,[[3,s.D],[2,s.c]]),o.Ab(4608,b,b,[]),o.Ab(1073742336,i.c,i.c,[]),o.Ab(512,s.y,s.y,[o.q,s.v,[3,s.y],s.n,s.z,s.B,[2,O.a]]),o.Ab(1024,s.s,(function(){return[[b]]}),[]),o.Ab(1073742336,s.p,s.p,[s.h,s.C,s.y,[2,s.s],s.o]),o.Ab(1073742336,g.m,g.m,[[2,g.r],[2,g.k]]),o.Ab(1073742336,u,u,[]),o.Ab(1024,g.i,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);