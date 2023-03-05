(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=c(2),r=(c(20),c(21),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},o=(c(23),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})}),b=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(8),h=c(11),x=c(4),O=c(1),u=(c(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),m="https://mate-academy.github.io/react_people-table/api/people.json";function p(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(m)})).then((function(e){return e.json()}));var e}var f=function(e){var t=e.selectedPersonSlug,c=Object(O.useState)([]),n=Object(x.a)(c,2),s=n[0],r=n[1],l=Object(O.useState)(!1),o=Object(x.a)(l,2),b=o[0],m=o[1],f=Object(O.useState)(!1),v=Object(x.a)(f,2),g=v[0],N=v[1],w=function(e){return e.slug===t},y=function(e){return s.find((function(t){return e===t.name}))};return Object(O.useEffect)((function(){Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,p();case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),N(!0);case 11:return e.prev=11,m(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}),[]),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[b&&Object(i.jsx)(u,{}),g&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!b&&!s.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!b&&s.length&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:s.map((function(e){var t,c;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":w(e)}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"../".concat(e.slug),className:j()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.motherName?y(e.motherName)?Object(i.jsx)(a.b,{to:"../".concat(null===(t=y(e.motherName))||void 0===t?void 0:t.slug),className:"has-text-danger",children:e.motherName}):e.motherName:"-"}),Object(i.jsx)("td",{children:e.fatherName?y(e.fatherName)?Object(i.jsx)(a.b,{to:"../".concat(null===(c=y(e.fatherName))||void 0===c?void 0:c.slug),children:e.fatherName}):e.fatherName:"-"})]},"".concat(e.name))}))})]})]})})},v=function(){var e=Object(s.i)().slug,t=void 0===e?"":e;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)(f,{selectedPersonSlug:t})]})},g=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(b,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(s.c,{path:":slug",element:Object(i.jsx)(v,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(g,{})})]})})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.3ff4aac6.chunk.js.map