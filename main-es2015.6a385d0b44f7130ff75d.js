(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(n,t,e){n.exports=e("Ea2l")},"1GJH":function(n,t,e){"use strict";function l(n){return JSON.parse(JSON.stringify(void 0===n?{}:n))}e.d(t,"a",(function(){return l}))},"5FaK":function(n,t,e){"use strict";var l=function(n){return n.NGXS_PERSISTENCE_STATE="@Persistence should be add before decorator @State and @StateRepository",n.NGXS_DATA_STATE="@StateRepository should be add before decorator @State",n.NGXS_DATA_STATE_NAME_NOT_FOUND="State name not provided in class",n.NGXS_DATA_MODULE_EXCEPTION="Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule\n Also, you cannot use this.ctx.* until the application is fully rendered \n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!",n.NGXS_DATA_STATE_DECORATOR="You forgot add decorator @StateRepository or initialize state!\n Example: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])",n.NGXS_DATA_STATIC_ACTION="Cannot support static methods with @action",n.NGXS_DATA_ACTION="@action can only decorate a method implementation",n.NGXS_DATA_ACTION_RETURN_TYPE="RECOMMENDATION: If you use asynchronous actions `@action({ async: true })`, the return result type should only be Observable or void instead",n.NGXS_PERSISTENCE_ENGINE="Not declare storage engine in `existingEngine` or not found after injecting by `useClass`",n.NGXS_PERSISTENCE_SERIALIZE="Error occurred while serializing the store value, value not updated.",n.NGXS_PERSISTENCE_DESERIALIZE="Error occurred while deserializing the store value, falling back to empty object.",n.NGXS_DATA_CHILDREN_CONVERT="Child states can only be added to an object",n}({});e.d(t,"a",(function(){return"NEED_SYNC_WITH_STORAGE"})),e.d(t,"c",(function(){return"NGXS_DATA_META"})),e.d(t,"b",(function(){return l}))},Ea2l:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J");class r{}var u=e("e1JD");class o{constructor(n){this.store=n,this.snapshot=this.store.select(n=>n)}ngOnInit(){console.log("[isDevMode]",Object(l.V)())}}var a=e("pMnS"),s=e("SVse"),i=e("iInd"),c=l.pb({encapsulation:2,styles:[],data:{}});function b(n){return l.Ib(2,[(n()(),l.rb(0,0,null,null,8,"div",[["class","panel"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,0,"img",[["class","logo"],["src","https://habrastorage.org/webt/k7/ih/pc/k7ihpcg6w-jz-rzksmiyuip5_so.png"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,6,"div",[["class","panel-content"]],null,null,null,null,null)),(n()(),l.rb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Store:"])),(n()(),l.rb(5,0,null,null,3,"pre",[],null,null,null,null,null)),(n()(),l.Gb(6,null,["",""])),l.Db(131072,s.b,[l.i]),l.Db(0,s.f,[]),(n()(),l.rb(9,0,null,null,17,"div",[["class","menu"]],null,null,null,null,null)),(n()(),l.Gb(-1,null,[" Examples: "])),(n()(),l.rb(11,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f680} "])),(n()(),l.rb(13,0,null,null,1,"a",[["class","link"],["href","https://stackblitz.io/github/ngxs-labs/data"],["target","_blank"]],null,null,null,null,null)),(n()(),l.Gb(-1,null,["Stackblitz"])),(n()(),l.rb(15,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f3c0} "])),(n()(),l.rb(17,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,18).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(18,671744,null,0,i.l,[i.k,i.a,s.i],{routerLink:[0,"routerLink"]},null),l.Cb(19,1),(n()(),l.Gb(-1,null,["CountState"])),(n()(),l.rb(21,0,null,null,5,"span",[],null,null,null,null,null)),(n()(),l.Gb(-1,null,["\u{1f9ed} "])),(n()(),l.rb(23,0,null,null,3,"a",[["class","link"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,t,e){var r=!0;return"click"===t&&(r=!1!==l.Bb(n,24).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&r),r}),null,null)),l.qb(24,671744,null,0,i.l,[i.k,i.a,s.i],{routerLink:[0,"routerLink"]},null),l.Cb(25,1),(n()(),l.Gb(-1,null,["TodoState"])),(n()(),l.rb(27,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.rb(28,0,null,null,3,"div",[["class","container"]],null,null,null,null,null)),(n()(),l.rb(29,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),l.rb(30,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.qb(31,212992,null,0,i.n,[i.b,l.N,l.k,[8,null],l.i],null,null)],(function(n,t){var e=n(t,19,0,"count");n(t,18,0,e);var l=n(t,25,0,"todo");n(t,24,0,l),n(t,31,0)}),(function(n,t){var e=t.component;n(t,6,0,l.Hb(t,6,0,l.Bb(t,8).transform(l.Hb(t,6,0,l.Bb(t,7).transform(e.snapshot))))),n(t,17,0,l.Bb(t,18).target,l.Bb(t,18).href),n(t,23,0,l.Bb(t,24).target,l.Bb(t,24).href)}))}function d(n){return l.Ib(0,[(n()(),l.rb(0,0,null,null,1,"app-root",[],null,null,null,b,c)),l.qb(1,114688,null,0,o,[u.h],null,null)],(function(n,t){n(t,1,0)}),null)}var A=l.nb("app-root",o,d,{},{},[]),f=e("cUpR"),h=e("s7LF"),p=e("Mrqg");const E=()=>Promise.all([e.e(1),e.e(7)]).then(e.bind(null,"cY3I")).then(n=>n.CountModuleNgFactory),g=()=>Promise.all([e.e(1),e.e(8)]).then(e.bind(null,"xG8Z")).then(n=>n.TodoModuleNgFactory);class y{}var S=e("ZArt"),N=e("gbQ/"),_=e("j+hP"),v=e("jf0I"),T=e("lLvT"),O=l.ob(r,[o],(function(n){return l.zb([l.Ab(512,l.k,l.Z,[[8,[a.a,A]],[3,l.k],l.w]),l.Ab(5120,l.t,l.lb,[[3,l.t]]),l.Ab(4608,s.l,s.k,[l.t,[2,s.r]]),l.Ab(5120,l.hb,l.mb,[l.y]),l.Ab(5120,l.c,l.ib,[]),l.Ab(5120,l.r,l.jb,[]),l.Ab(5120,l.s,l.kb,[]),l.Ab(4608,f.b,f.k,[s.d]),l.Ab(6144,l.F,null,[f.b]),l.Ab(4608,f.e,f.g,[]),l.Ab(5120,f.c,(function(n,t,e,l,r,u,o,a){return[new f.i(n,t,e),new f.n(l),new f.m(r,u,o,a)]}),[s.d,l.y,l.A,s.d,s.d,f.e,l.ab,[2,f.f]]),l.Ab(4608,f.d,f.d,[f.c,l.y]),l.Ab(135680,f.l,f.l,[s.d]),l.Ab(4608,f.j,f.j,[f.d,f.l,l.c]),l.Ab(6144,l.D,null,[f.j]),l.Ab(6144,f.o,null,[f.l]),l.Ab(4608,l.L,l.L,[l.y]),l.Ab(4608,h.i,h.i,[]),l.Ab(5120,i.a,i.x,[i.k]),l.Ab(4608,i.d,i.d,[]),l.Ab(6144,i.f,null,[i.d]),l.Ab(135680,i.o,i.o,[i.k,l.v,l.j,l.q,i.f]),l.Ab(4608,i.e,i.e,[]),l.Ab(5120,i.C,i.t,[i.k,s.o,i.g]),l.Ab(5120,i.h,i.A,[i.y]),l.Ab(5120,l.b,(function(n,t){return[n,u.d.appBootstrapListenerFactory(t)]}),[i.h,p.e]),l.Ab(4608,u.a,u.a,[u.n,u.E]),l.Ab(1073742336,s.c,s.c,[]),l.Ab(1024,l.m,f.p,[]),l.Ab(1024,l.x,(function(){return[i.s()]}),[]),l.Ab(512,i.y,i.y,[l.q]),l.Ab(1024,l.d,(function(n,t){return[f.q(n),i.z(t)]}),[[2,l.x],i.y]),l.Ab(512,l.e,l.e,[[2,l.d]]),l.Ab(131584,l.g,l.g,[l.y,l.ab,l.q,l.m,l.k,l.e]),l.Ab(1073742336,l.f,l.f,[l.g]),l.Ab(1073742336,f.a,f.a,[[3,f.a]]),l.Ab(1073742336,h.h,h.h,[]),l.Ab(1073742336,h.c,h.c,[]),l.Ab(1024,i.r,i.v,[[3,i.k]]),l.Ab(512,i.q,i.c,[]),l.Ab(512,i.b,i.b,[]),l.Ab(256,i.g,{useHash:!0},[]),l.Ab(1024,s.i,i.u,[s.n,[2,s.a],i.g]),l.Ab(512,s.h,s.h,[s.i,s.n]),l.Ab(512,l.j,l.j,[]),l.Ab(512,l.v,l.I,[l.j,[2,l.J]]),l.Ab(1024,i.i,(function(){return[[{path:"",redirectTo:"count",pathMatch:"full"},{path:"count",loadChildren:E},{path:"todo",loadChildren:g}]]}),[]),l.Ab(1024,i.k,i.w,[l.g,i.q,i.b,s.h,l.q,l.v,l.j,i.i,i.g,[2,i.p],[2,i.j]]),l.Ab(1073742336,i.m,i.m,[[2,i.r],[2,i.k]]),l.Ab(1073742336,y,y,[]),l.Ab(256,u.d.ROOT_OPTIONS,{developmentMode:!1},[]),l.Ab(1024,u.v,u.d.ngxsConfigFactory,[u.d.ROOT_OPTIONS]),l.Ab(512,u.n,u.n,[]),l.Ab(512,u.z,u.z,[]),l.Ab(512,u.f,u.f,[]),l.Ab(256,S.d,void 0,[]),l.Ab(1024,S.a,S.e,[S.d]),l.Ab(1024,u.c,(function(n,t,e,l){return[new S.b(n,t),new N.a(e,l)]}),[S.a,l.q,l.A,l.q]),l.Ab(512,u.D,u.D,[[3,u.D],[2,u.c]]),l.Ab(512,u.w,u.q,[l.y,l.A]),l.Ab(512,u.E,u.E,[u.w]),l.Ab(512,u.A,u.A,[l.m,u.n,u.z,u.D,u.f,u.E]),l.Ab(256,u.u,l.V,[]),l.Ab(256,u.t,p.f,[]),l.Ab(512,u.G,u.G,[u.u,u.t]),l.Ab(512,u.F,u.F,[u.G,u.v]),l.Ab(512,u.C,u.C,[u.f,u.A,u.v,u.F]),l.Ab(512,u.B,u.B,[u.C]),l.Ab(1024,p.a,u.d.getInitialState,[]),l.Ab(512,u.y,u.y,[l.q,u.v,[3,u.y],u.n,u.z,u.B,[2,p.a]]),l.Ab(512,u.h,u.h,[u.f,u.C,u.v,u.E,u.y,[2,p.a]]),l.Ab(512,u.H,u.H,[u.h,u.v]),l.Ab(256,u.r,[],[]),l.Ab(512,p.e,p.e,[]),l.Ab(512,u.o,u.o,[u.C,u.B,p.e]),l.Ab(1073742336,u.x,u.x,[u.y,u.C,u.h,u.H,[2,u.r],u.o]),l.Ab(1073742336,S.c,S.c,[]),l.Ab(2048,p.d,null,[u.y]),l.Ab(2048,p.c,null,[u.B]),l.Ab(512,_.a,_.a,[l.q,p.d,p.c]),l.Ab(1073742336,v.a,v.a,[[4,_.a]]),l.Ab(1073742336,T.a,T.a,[]),l.Ab(1073742336,r,r,[]),l.Ab(256,l.Y,!0,[])])}));Object(l.R)(),f.h().bootstrapModuleFactory(O).catch(n=>console.log(n))},IlWk:function(n,t,e){"use strict";function l(n){return"object"==typeof n&&!Array.isArray(n)&&null!==n}e.d(t,"a",(function(){return l}))},NZHw:function(n,t,e){"use strict";function l(n){return"undefined"!==n&&null!=n}e("1GJH"),e("IlWk"),e("dZYH"),e.d(t,"a",(function(){return l}))},"U+rF":function(n,t){function e(n){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}))}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="U+rF"},dZYH:function(n,t,e){"use strict";function l(n){return n.NGXS_OPTIONS_META||{}}e.d(t,"a",(function(){return l}))},etJN:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return u}));var l=e("5FaK");function r(n){return n[l.c]||Object.defineProperty(n,l.c,{value:{stateMeta:null,operations:{}}}),u(n)}function u(n){return n[l.c]}},"gbQ/":function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var l=e("SVse"),r=e("5FaK"),u=e("NZHw"),o=e("e1JD"),a=e("xgIS"),s=e("vkgz");let i=(()=>{class n{constructor(t,e){this._platformId=t,this.injector=e,Object(l.p)(this._platformId)||Object(a.a)(window,"storage").subscribe(t=>{n.keys.has(t.key)&&this.store.dispatch({type:r.a})})}get store(){return this.injector.get(o.h,null)}get size(){return this.providers.size}get providers(){return n.providers}get entries(){return this.providers.entries()}static getProvidedKeys(){return Array.from(n.keys.keys())}static clear(){n.keys.clear(),n.providers.clear()}handle(t,e,a){if(0===this.size||Object(l.p)(this._platformId))return a(t,e);const i=Object(o.j)(e),c=i(o.b)||i(o.i);if(this.size>0&&(c||e.type===r.a))for(const[l]of this.entries){const e=this.exposeEngine(l),a=this.ensureKey(l),s=e.getItem(a);if(Object(u.a)(s))try{const r=this.deserialize(s);Object(u.a)(r)||l.nullable?(n.keys.set(a),t=Object(o.m)(t,l.path,r)):(e.removeItem(a),n.keys.delete(a))}catch(b){console.error(`${r.b.NGXS_PERSISTENCE_DESERIALIZE}:::${l.path}`)}}return a(t,e).pipe(Object(s.a)(e=>{for(const[u]of this.entries){const a=Object(o.l)(t,u.path),s=Object(o.l)(e,u.path);if(a!==s||c){const t=this.exposeEngine(u);try{const e=this.serialize(s,u),l=this.ensureKey(u);t.setItem(l,e),n.keys.set(l)}catch(l){console.error(`${r.b.NGXS_PERSISTENCE_SERIALIZE}:::${u.path}`)}}}}))}serialize(n,t){return JSON.stringify({lastChanged:(new Date).toISOString(),version:t.version,data:Object(u.a)(n)?n:null})}deserialize(n){const t=JSON.parse(n);if(t.lastChanged)return t.data;throw new Error("Not found lastChanged in meta")}ensureKey(n){return`${n.prefixKey}${n.path}`}exposeEngine(n){const t=n.existingEngine||this.injector.get(n.useClass,null);if(!t)throw new Error(`${r.b.NGXS_PERSISTENCE_ENGINE}:::${n.path}`);return t}}return n.providers=new Set,n.keys=new Map,n})()},"j+hP":function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var l=e("8Y7J"),r=e("5FaK"),u=e("e1JD"),o=(e("Mrqg"),e("etJN"));let a=(()=>{class n{constructor(t,e,r){n.statesCachedMeta.clear(),n.store=t.get(u.h),n.ngZone=t.get(l.y),n.factory=e,n.context=r}static createStateContext(t){return n.context.createStateContext(t)}static ensureMappedState(t){if(!n.factory||!t)throw new Error(r.b.NGXS_DATA_MODULE_EXCEPTION);const e=(t.name?n.statesCachedMeta.get(t.name):null)||null;if(!e){const e=t.name?n.factory.states.find(n=>n.name===t.name):null;return e&&t.name&&n.statesCachedMeta.set(t.name,e),e}return e}static getRepositoryByInstance(n){const t=Object(o.b)((n||{}).constructor)||null;if(!t)throw new Error(r.b.NGXS_DATA_STATE_DECORATOR);return t}static createPayload(n,t){const e={},l=Array.from(n);return t.argumentsNames.forEach((n,t)=>{e[n]=l[t]}),e}}return n.store=null,n.context=null,n.factory=null,n.ngZone=null,n.statesCachedMeta=new Map,n})()},jf0I:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var l=e("e1JD"),r=e("j+hP"),u=e("gbQ/");class o{constructor(n){this.accessor=n}static forRoot(){return{ngModule:o,providers:[r.a,{provide:l.c,useClass:u.a,multi:!0}]}}}},lLvT:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));class l{}}},[[0,0,6]]]);