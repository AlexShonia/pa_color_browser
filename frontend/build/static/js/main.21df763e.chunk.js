(this.webpackJsonppixelart=this.webpackJsonppixelart||[]).push([[0],{122:function(t,e,n){},307:function(t,e,n){"use strict";n.r(e);var c=n(6),o=n(0),i=n(109),a=n.n(i),r=(n(122),n(63)),u=n(39),s=n(110),h=n(60),f=n.n(h),l=function(){function t(){Object(u.a)(this,t)}return Object(s.a)(t,null,[{key:"get",value:function(t,e,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};f.a.get(t,this.getRequestConfig(o)).then((function(t){try{e(t),n(t)}catch(o){c(o)}})).catch((function(t){c(t)})).then((function(){}))}},{key:"post",value:function(t,e,n,c){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=this.getRequestConfig(o);f.a.post(t,i||a.data,a).then((function(t){try{e(t),n(t)}catch(o){c(o)}})).catch((function(t){c(t)})).then((function(){}))}},{key:"getRequestConfig",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL},n={};e.headers=n;var c=Object.assign(e,t);return c}}]),t}(),j=n(111),d=n(115),O=n(116),b=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).name="ValidationError",c}return n}(Object(O.a)(Error)),v=n(112);function g(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],i=e[1],a=Object(o.useState)(!0),u=Object(r.a)(a,2),s=u[0],h=u[1];return Object(o.useEffect)((function(){!function(){function t(t){if(!t.data)throw new b("No data")}function e(t){i(t.data),h(!1)}function n(){throw new b("Failed")}l.get("/api/react",t,e,n)}()}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v.ChromePicker,{color:"#ffffff"}),Object(c.jsx)(f,{})]});function f(){return s?Object(c.jsx)("h1",{children:"Loading..."}):n.map((function(t,e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("img",{src:t.url,alt:t.title})]},e)}))}}var p=n(113),x=n(3);var m=function(){return Object(c.jsx)(p.a,{children:Object(c.jsx)(x.c,{children:Object(c.jsx)(x.a,{path:"/",exact:!0,component:g})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(c.jsx)(m,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[307,1,2]]]);
//# sourceMappingURL=main.21df763e.chunk.js.map