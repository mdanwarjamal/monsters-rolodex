(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(5),s=n.n(c),a=(n(12),n(3)),o=n.n(a),i=n(6),u=n(4),l=n(1),j=(n(14),function(e){var t=e.monster;return Object(r.jsxs)("div",{className:"card-container",children:[Object(r.jsx)("h1",{children:t.name}),Object(r.jsx)("img",{alt:"Monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=160x180")}),Object(r.jsx)("p",{children:t.email})]})}),h=(n(15),function(e){var t=e.monsters;return Object(r.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(r.jsx)(j,{monster:e},e.id)}))})}),d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(r.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(17),function(){var e=Object(l.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(l.useState)(""),a=Object(u.a)(s,2),j=a[0],p=a[1];Object(l.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Some error occured");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Monsters Rolodex"})}),Object(r.jsx)(d,{placeholder:"Search Monster...",handleChange:function(e){return p(e.target.value)}}),Object(r.jsx)(h,{monsters:b})]})});s.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.bc6d2e94.chunk.js.map