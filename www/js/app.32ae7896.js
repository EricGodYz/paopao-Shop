(function(e){function n(n){for(var o,c,u=n[0],i=n[1],d=n[2],s=0,l=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);f&&f(n);while(l.length)l.shift()();return r.push.apply(r,d||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(o=!1)}o&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},c={app:0},a={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2bd3de5a":"22ac1f7b","chunk-2d0a38c7":"0fbe0cd8","chunk-2d0af533":"f5280bd9","chunk-2d0b7230":"eab04463","chunk-2d0c55e7":"44ff3e6a","chunk-2d0c81dd":"1075c870","chunk-2d0c8f6b":"90556729","chunk-2d0e60c2":"9a0a0827","chunk-2d2167ab":"2a71db2a","chunk-2d217632":"26e5fe14","chunk-70c55090":"bcb03d70","chunk-9cee972a":"1679cc99","chunk-ccf9ca9e":"c99854b2","chunk-0db9e4fa":"0ffb248b","chunk-195b1944":"523a2787","chunk-9f864c6c":"4de5a2de","chunk-3818836f":"1e200891","chunk-3f1d14aa":"d16d10a9","chunk-6dab9f16":"f21c6f7a"}[e]+".js"}function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-2bd3de5a":1,"chunk-70c55090":1,"chunk-9cee972a":1,"chunk-ccf9ca9e":1,"chunk-0db9e4fa":1,"chunk-195b1944":1,"chunk-9f864c6c":1,"chunk-3818836f":1,"chunk-3f1d14aa":1,"chunk-6dab9f16":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var o="css/"+({}[e]||e)+"."+{"chunk-2bd3de5a":"3c3a5ee9","chunk-2d0a38c7":"31d6cfe0","chunk-2d0af533":"31d6cfe0","chunk-2d0b7230":"31d6cfe0","chunk-2d0c55e7":"31d6cfe0","chunk-2d0c81dd":"31d6cfe0","chunk-2d0c8f6b":"31d6cfe0","chunk-2d0e60c2":"31d6cfe0","chunk-2d2167ab":"31d6cfe0","chunk-2d217632":"31d6cfe0","chunk-70c55090":"adb32f6c","chunk-9cee972a":"2b20d116","chunk-ccf9ca9e":"41391236","chunk-0db9e4fa":"ab8f012d","chunk-195b1944":"95250899","chunk-9f864c6c":"e2bfec4e","chunk-3818836f":"065c93eb","chunk-3f1d14aa":"611764f7","chunk-6dab9f16":"1ca39618"}[e]+".css",a=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var d=r[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===o||s===a))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===o||s===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete c[e],f.parentNode.removeChild(f),t(r)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=r);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,t[1](l)}a[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/pc/static/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"02e6":function(e,n,t){},"034f":function(e,n,t){"use strict";var o=t("85ec"),c=t.n(o);c.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],r=(t("ac1f"),t("5319"),t("5530")),u=t("2f62"),i={computed:Object(r["a"])({},Object(u["c"])({isLogin:function(e){return e.user.isLogin}})),watch:{isLogin:{handler:function(e){e||this.$router.replace("/auth")},immediate:!0}},created:function(){this.isLogin&&this.$store.dispatch("user/checkLogin")}},d=i,s=(t("034f"),t("2877")),l=Object(s["a"])(d,c,a,!1,null,null,null),f=l.exports,h=(t("b0c0"),t("d3b7"),t("8c4f")),m=(t("a9e3"),t("bc3a")),p=t.n(m),g={namespaced:!0,state:{isLogin:Boolean(Number(localStorage.getItem("isLogin"))),info:{}},getters:{userAuth:function(e){return e.info.auth||[]}},mutations:{setIsLogin:function(e,n){e.isLogin=n},setInfo:function(e,n){e.info=n}},actions:{changeLoginAction:function(e,n){n?localStorage.setItem("isLogin",1):localStorage.setItem("isLogin",0),e.commit("setIsLogin",n)},checkLogin:function(e,n){p.a.get("/pc/api/user/check_login").then((function(n){0===n.data.code?(localStorage.setItem("isLogin",1),e.commit("setIsLogin",!0),e.dispatch("requestUserInfo")):(localStorage.setItem("isLogin",0),e.commit("setIsLogin",!1))}))},requestUserInfo:function(e,n){p.a.get("/pc/api/user/user_info").then((function(n){e.commit("setInfo",n.data.data)}))}}},b={namespaced:!0,state:{goodsAll:[],goodsPart:[],goodsCate:[],goods:[]},mutations:{setGoodsInfo:function(e,n){e.goodsAll=n.goodsAll,e.goodsPart=n.goodsPart},setGoodsCate:function(e,n){e.goodsCate=n},setGoodsAll:function(e,n){e.goods=n}},actions:{requestGoodsInfo:function(e,n){p.a.post("/pc/api/goods/goods_info",{index:n}).then((function(n){var t=n.data.data,o=t.goodsAll,c=t.goodsPart;e.commit("setGoodsInfo",{goodsAll:o,goodsPart:c})}))},requestGoodsAll:function(e,n){p.a.post("/pc/api/goods/goods_info").then((function(n){var t=n.data.data.goodsAll;e.commit("setGoodsAll",t)}))},requestDelete:function(e,n){p.a.post("/pc/api/goods/goods_del",{id:n}).then((function(e){}))},requestAdd:function(e,n){p.a.post("/pc/api/goods/goods_add",{id:n.goodsId,name:n.goodsName,price:n.goodsPrice,category:n.category}).then((function(e){}))},requireCategoryInfo:function(e,n){p.a.post("/pc/api/goods/goods_category",{category:n}).then((function(n){var t=n.data.data.goodsCate;console.log(t),e.commit("setGoodsCate",t)})).catch((function(e){console.log(e)}))}}};o["a"].use(u["a"]);var k=new u["a"].Store({modules:{user:g,goods:b}}),v={path:"/auth",name:"auth",redirect:"/auth/login",component:function(){return t.e("chunk-2bd3de5a").then(t.bind(null,"119d"))},children:[{path:"login",name:"login",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-0db9e4fa"),t.e("chunk-3f1d14aa")]).then(t.bind(null,"5326"))}},{path:"register",name:"register",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-0db9e4fa"),t.e("chunk-3818836f")]).then(t.bind(null,"935e"))}}]};t("b1cb");o["a"].use(h["a"]);var y=new h["a"]({mode:"history",base:"/pc/static/",routes:[v,{path:"/",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-195b1944"),t.e("chunk-6dab9f16")]).then(t.bind(null,"eaf6"))},name:"app",redirect:{name:"home"},children:[{path:"",name:"home",component:function(){return t.e("chunk-70c55090").then(t.bind(null,"b3d7"))},meta:{icon:"home",title:"系统首页"}}]},{path:"/",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-195b1944"),t.e("chunk-6dab9f16")]).then(t.bind(null,"eaf6"))},children:[{path:"404",component:function(){return t.e("chunk-2d217632").then(t.bind(null,"c708"))}}]},{path:"*",redirect:{name:"home"}}]});y.beforeEach((function(e,n,t){"login"===e.name||"register"===e.name||k.state.user.isLogin?t():t({name:"login"})}));var w=y;t("02e6");new o["a"]({router:w,store:k,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,n,t){},b1cb:function(e,n,t){"use strict";t("d3b7");n["a"]={path:"/",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-195b1944"),t.e("chunk-6dab9f16")]).then(t.bind(null,"eaf6"))},children:[{path:"home",name:"home",component:function(){return t.e("chunk-70c55090").then(t.bind(null,"b3d7"))},meta:{icon:"home",title:"系统首页"}},{path:"goods-manage",name:"goods-manage",component:{render:function(e){return e("router-view")}},redirect:"/goods-manage/goods-list",meta:{icon:"inbox",title:"商品管理"},children:[{path:"goods-list",name:"goods-list",component:function(){return Promise.all([t.e("chunk-ccf9ca9e"),t.e("chunk-0db9e4fa"),t.e("chunk-195b1944"),t.e("chunk-9f864c6c")]).then(t.bind(null,"384b"))},meta:{title:"商品列表"}},{path:"goods-add",name:"goods-add",component:function(){return t.e("chunk-9cee972a").then(t.bind(null,"f34a"))},meta:{title:"添加商品"}}]},{path:"order-manage",name:"order-manage",component:{render:function(e){return e("router-view")}},redirect:"/order-manage/order-list",meta:{title:"订单管理",icon:"profile"},children:[{path:"order-list",name:"order-list",component:function(){return t.e("chunk-2d0c81dd").then(t.bind(null,"5408"))},meta:{title:"订单列表"}},{path:"order-set",name:"order-set",component:function(){return t.e("chunk-2d0a38c7").then(t.bind(null,"033a"))},meta:{title:"订单设置"}},{path:"order-refund",name:"order-refund",component:function(){return t.e("chunk-2d0c8f6b").then(t.bind(null,"56b6"))},meta:{title:"退款申请"}},{path:"order-sale",name:"order-sale",component:function(){return t.e("chunk-2d0e60c2").then(t.bind(null,"96a0"))},meta:{title:"退货申请"}}]},{path:"user-manage",name:"user-manage",component:{render:function(e){return e("router-view")}},redirect:"/user-manage/user-list",meta:{icon:"user",title:"用户管理"},children:[{path:"user-list",name:"user-list",component:function(){return t.e("chunk-2d0b7230").then(t.bind(null,"1faf"))},meta:{title:"用户列表"}}]},{path:"stat-manage",name:"stat-manage",component:{render:function(e){return e("router-view")}},redirect:"/stat-manage/deal-stat",meta:{icon:"hdd",title:"数据统计"},children:[{path:"deal-stat",name:"deal-stat",component:function(){return t.e("chunk-2d2167ab").then(t.bind(null,"c349"))},meta:{title:"交易统计"}},{path:"goods-stat",name:"goods-stat",component:function(){return t.e("chunk-2d0af533").then(t.bind(null,"0e9a"))},meta:{title:"商品统计"}}]},{path:"rights-manage",name:"rights-manage",component:function(){return t.e("chunk-2d0c55e7").then(t.bind(null,"3f97"))},meta:{title:"权限管理"}}]}}});
//# sourceMappingURL=app.32ae7896.js.map