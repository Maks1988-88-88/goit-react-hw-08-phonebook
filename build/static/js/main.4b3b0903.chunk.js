(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{18:function(e,t,n){"use strict";n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return h}));var r=n(6),c=n.n(r),a=n(19),s=n(5),u=n(14),i=n.n(u),o=n(15);i.a.defaults.baseURL="https://connections-api.herokuapp.com/";var l=function(e){i.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){i.a.defaults.headers.common.Authorization=""},j=Object(s.b)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/signup",t);case 4:return a=e.sent,s=a.data,l(s.token),o.b.success("success "),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(1),o.b.error("error"),e.abrupt("return",r(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),d=Object(s.b)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/login",t);case 4:return a=e.sent,s=a.data,l(s.token),o.b.success("success"),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(1),o.b.error("error"),e.abrupt("return",r(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(s.b)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,i.a.post("/users/logout");case 4:b(),o.b.success("success"),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(s.b)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,s,u,o,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState,a=n.rejectWithValue,s=r(),null!==(u=s.auth.token)){e.next=5;break}return e.abrupt("return",a());case 5:return l(u),e.prev=6,e.next=9,i.a.get("/users/current");case 9:return o=e.sent,b=o.data,e.abrupt("return",b);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",a(e.t0.message));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},23:function(e,t,n){e.exports={link:"AuthNav_link__oVT80",activeLink:"AuthNav_activeLink__2kGir"}},26:function(e,t,n){e.exports={link:"Navigation_link__282vg",activeLink:"Navigation_activeLink__3tPE5"}},29:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var r=n(6),c=n.n(r),a=n(19),s=n(15),u=n(5),i=n(14),o=n.n(i);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var l=Object(u.b)("contacts/fetchContacts",Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("/contacts");case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),s.b.error("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),b=Object(u.b)("contacts/addContacts",function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/contacts",t);case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),s.b.error("error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),j=Object(u.b)("contacts/deleteContacts",function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.delete("/contacts/".concat(t));case 3:return e.abrupt("return",t);case 6:e.prev=6,e.t0=e.catch(0),s.b.error("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}())},32:function(e,t,n){e.exports={userMenu:"UserMenu_userMenu__39TDO",avatar:"UserMenu_avatar__3nNbD",userName:"UserMenu_userName__D4Z5W",btnLogout:"UserMenu_btnLogout__2mFnG"}},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(49),c=n.n(r),a=n(1);function s(e){var t=e.children;return Object(a.jsx)("div",{className:c.a.container,children:t})}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,c=n(12),a=n(30),s=n(7),u=n(5),i=n(29),o=Object(u.c)({name:"contacts",initialState:{items:[],filter:""},reducers:{changeFilter:function(e,t){var n=t.payload;return Object(s.a)(Object(s.a)({},e),{},{filter:n})}},extraReducers:(r={},Object(c.a)(r,i.c.fulfilled,(function(e,t){var n=t.payload;return Object(s.a)(Object(s.a)({},e),{},{items:n})})),Object(c.a)(r,i.a.fulfilled,(function(e,t){var n=t.payload;return Object(s.a)(Object(s.a)({},e),{},{items:[].concat(Object(a.a)(e.items),[n])})})),Object(c.a)(r,i.b.fulfilled,(function(e,t){var n=t.payload;return Object(s.a)(Object(s.a)({},e),{},{items:e.items.filter((function(e){return e.id!==n}))})})),r)}),l=o.actions.changeFilter;t.b=o.reducer},49:function(e,t,n){e.exports={container:"Container_container__3YGh_"}},50:function(e,t,n){e.exports={header:"AppBar_header__37Qc0"}},59:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(22),s=n.n(a),u=n(17),i=n(4),o=n(48),l=(n(59),n(3)),b=(n(60),n(15)),j=n(38),d=function(e){return e.auth.isLoggedIn},f=function(e){return e.auth.user.name},h=function(e){return e.auth.isFetchingCurrentUser},p=n(18),O=n(32),v=n.n(O),x=n(1);function g(){var e=Object(i.b)(),t=Object(i.c)(f);return Object(x.jsxs)("div",{className:v.a.userMenu,children:[Object(x.jsxs)("span",{className:v.a.userName,children:["Wellcome, ",t]}),Object(x.jsx)("button",{type:"button",className:v.a.btnLogout,onClick:function(){return e(Object(p.c)())},children:"Log Out"})]})}var m=n(50),k=n.n(m),_=n(26),y=n.n(_);function L(){var e=Object(i.c)(d);return Object(x.jsxs)("nav",{children:[Object(x.jsx)(u.b,{to:"/",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"Home"}),e&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(u.b,{to:"/contacts",exact:!0,className:y.a.link,activeClassName:y.a.activeLink,children:"Contacts"})})]})}var N=n(23),w=n.n(N);function C(){return Object(x.jsxs)("div",{className:w.a.authNavigatin,children:[Object(x.jsx)(u.b,{to:"/register",exact:!0,className:w.a.link,activeClassName:w.a.activeLink,children:"Registration"}),Object(x.jsx)(u.b,{to:"/login",exact:!0,className:w.a.link,activeClassName:w.a.activeLink,children:"Log In"})]})}function U(){var e=Object(i.c)(d);return Object(x.jsxs)("header",{className:k.a.header,children:[Object(x.jsx)(L,{}),e?Object(x.jsx)(g,{}):Object(x.jsx)(C,{})]})}var F=n(7),T=n(31),I=["children","redirectTo"];function M(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,c=Object(T.a)(e,I),a=Object(i.c)(d);return Object(x.jsx)(l.b,Object(F.a)(Object(F.a)({},c),{},{children:a?t:Object(x.jsx)(l.a,{to:r})}))}var z=["children","restricted","redirectTo"];function A(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,c=e.redirectTo,a=void 0===c?"/":c,s=Object(T.a)(e,z),u=Object(i.c)(d)&&r;return Object(x.jsx)(l.b,Object(F.a)(Object(F.a)({},s),{},{children:u?Object(x.jsx)(l.a,{to:a}):t}))}var W=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,92))})),R=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,93))})),S=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,94))})),V=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,95))}));function B(){var e=Object(i.b)(),t=Object(i.c)(h);return Object(r.useEffect)((function(){return e(Object(p.a)())}),[e]),Object(x.jsx)(j.a,{children:t?Object(x.jsx)("h2",{children:"Loading"}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U,{}),Object(x.jsx)(r.Suspense,{fallback:Object(x.jsx)("p",{children:"Loading..."}),children:Object(x.jsxs)(l.d,{children:[Object(x.jsx)(A,{exact:!0,path:"/",children:Object(x.jsx)(W,{})}),Object(x.jsx)(A,{path:"/register",restricted:!0,children:Object(x.jsx)(R,{})}),Object(x.jsx)(A,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(x.jsx)(S,{})}),Object(x.jsx)(M,{exact:!0,path:"/contacts",redirectTo:"/login",children:Object(x.jsx)(V,{})}),Object(x.jsx)(l.a,{to:"/"})]})}),Object(x.jsx)(b.a,{position:"bottom-left",autoClose:3e3})]})})}var D,E=n(30),G=n(5),J=n(47),H=n(12),P=Object(G.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(D={},Object(H.a)(D,p.d.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(H.a)(D,p.b.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(H.a)(D,p.c.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(H.a)(D,p.a.pending,(function(e,t){e.isFetchingCurrentUser=!0,e.token=t.payload.token})),Object(H.a)(D,p.a.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(H.a)(D,p.a.rejected,(function(e){e.isFetchingCurrentUser=!1})),D)}).reducer,Q=n(51),Y=n.n(Q),Z=n(20),q=Object(E.a)(Object(G.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),K={key:"auth",storage:Y.a,whitelist:["token"]},X=Object(G.a)({reducer:{contacts:J.b,auth:Object(Z.g)(K,P)},middleware:q,devTools:!1}),$=Object(Z.h)(X);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(i.a,{store:X,children:Object(x.jsx)(o.a,{loading:null,persistor:$,children:Object(x.jsx)(u.a,{children:Object(x.jsx)(B,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.4b3b0903.chunk.js.map