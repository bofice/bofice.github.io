(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{50:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c,i,s=n(0),r=n.n(s),a=n(12),d=n.n(a),o=(n(50),n(24)),l=n.n(o),j=n(35),p=n(11),h={fetchComments:"https://jsonplaceholder.typicode.com/comments"},u=n(36),b=n.n(u).a.create({baseUrl:"https://jsonplaceholder.typicode.com/"}),x=n(15),m=n(16),O=n(90),g=n(89),v=n(2),f=new Date;var y,w,k=function(e){var t,n,c=e.comment,i=e.index,r=Object(s.useState)(50),a=Object(p.a)(r,2),d=a[0],o=a[1];return Object(v.jsx)(C,{children:Object(v.jsx)("header",{children:Object(v.jsxs)(S,{style:{width:"95%",margin:"10px",backgroundColor:"white",padding:"10px"},children:[Object(v.jsxs)("div",{style:{marginTop:"10px",marginLeft:"10px"},children:[Object(v.jsx)("div",{children:Object(v.jsx)(O.a,{style:{backgroundColor:"#e53f64"},children:c.name.charAt(0).toUpperCase()})}),Object(v.jsx)("div",{style:{marginTop:"35%",marginLeft:"14px"},children:i})]}),Object(v.jsxs)("div",{style:{margin:"10px"},children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:["From :"," ",Object(v.jsxs)("span",{children:[" ",Object(v.jsx)("span",{children:c.email},c.id)]})]}),Object(v.jsxs)("div",{children:["Subject : ",Object(v.jsx)("span",{children:c.name})]})]}),Object(v.jsxs)("div",{children:[" ",Object(v.jsx)("p",{children:(t=" ".concat(c.body),n=d,(null===t||void 0===t?void 0:t.length)&&console.log(t.length),(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]}),Object(v.jsx)(g.a,{style:{size:"10px"},onClick:function(){if(console.log(c),o(1e3),d>50)return o(50)},variant:"contained",children:50===d?"readmore":"readless"})," ",Object(v.jsxs)("div",{style:{paddingTop:"10px"},children:[f.getDate()+"/"+Number(f.getMonth()+1)+"/"+f.getFullYear()," ",f.getHours()>12?f.getHours()-12:f.getHours(),":"+f.getMinutes(),f.getHours()<12?"am":"pm"]})]})]})})})},C=m.a.div(c||(c=Object(x.a)(["\n  display: grid;\n  grid-template-rows: auto;\n  width: 100%;\n"]))),S=m.a.div(i||(i=Object(x.a)(["\n  display: grid;\n  grid-template-columns: 100px auto;\n"])));var F=function(e){var t=e.comments,n=Object(s.useState)(10),c=Object(p.a)(n,2),i=c[0],r=c[1],a=Object(s.useState)(0),d=Object(p.a)(a,2),o=d[0],l=d[1];return Object(v.jsx)(T,{children:Object(v.jsx)("header",{children:Object(v.jsxs)("div",{children:[t.slice(o,i).map((function(e,t){return Object(v.jsx)("div",{style:{backgroundColor:"whitesmoke"},children:Object(v.jsx)(k,{comment:e,index:e.id})})})),Object(v.jsxs)(H,{style:{position:"sticky"},children:[i>10?Object(v.jsx)("div",{onClick:function(){i>10&&(r(i-10),l(o-10))},children:"prev"}):"",Object(v.jsx)("div",{onClick:function(){return r(i+10),void l(o+10)},children:"next"})]})]})})})},T=m.a.div(y||(y=Object(x.a)(["\n  display: grid;\n  width: 100%;\n\n  @media (max-width: 360px) {\n    width: 100px;\n    font-size: 0.8em;\n  }\n"]))),H=m.a.div(w||(w=Object(x.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  position: fixed;\n  bottom: 10px;\n  left: 100%;\n  width: 120px;\n  background: #e53f64;\n  color: white;\n  padding: 10px;\n"])));var L=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get(h.fetchComments);case 2:return t=e.sent,c(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(n,"comments"),Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)(F,{comments:n})})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};d.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(L,{})}),document.getElementById("root")),A()}},[[73,1,2]]]);
//# sourceMappingURL=main.d62b3959.chunk.js.map