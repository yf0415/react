(this.webpackJsonpex02=this.webpackJsonpex02||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(5),r=n.n(a),j=(n(11),n(2));n(3);function o(){return Object(c.jsx)("div",{children:"component01"})}function l(){return Object(c.jsx)("div",{children:"component02"})}var d=function(){var e=Object(i.useState)(0),t=Object(j.a)(e,2),n=t[0],s=t[1],a=[Object(c.jsx)(o,{}),Object(c.jsx)(l,{})];function r(e){var t=e.target.dataset.num;document.querySelectorAll("header a").forEach((function(e,n){t==n?e.classList.add("active"):e.classList.remove("active")})),s(t)}return Object(c.jsxs)("div",{className:"navlist",children:[Object(c.jsx)("a",{onClick:r,"data-num":"0",children:"nav01"}),Object(c.jsx)("a",{onClick:r,"data-num":"1",children:"nav02"}),Object(c.jsx)("div",{children:a[n]})]})};var u=function(){var e=Object(i.useState)(),t=Object(j.a)(e,2),n=t[0],s=t[1],a=new Date;return a=a.getFullYear()+"-"+a.getMonth()+"-"+a.getDay(),setTimeout((function(){var e=new Date;e=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),s(e)}),1e3),Object(c.jsxs)("div",{className:"timelist",children:["Now...",Object(c.jsx)("span",{children:a}),Object(c.jsx)("span",{children:n})]})};var b=function(){var e=[];return[{src:"img/01.png",tit:"01",info:"01"},{src:"img/02.png",tit:"02",info:"02"},{src:"img/03.png",tit:"03",info:"\uc120\uc0dd\ub2d8.."},{src:"img/04.png",tit:"04",info:"\uc774\uac70\ub108\ubb34\uc5b4\ub824\uc6cc\uc694...,,"}].forEach((function(t,n){e.push(Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:t.src}),Object(c.jsx)("h3",{children:t.tit}),Object(c.jsx)("p",{children:t.info})]},n))})),Object(c.jsx)("article",{className:"imglist",children:e})};var O=function(){var e={Nav:Object(c.jsx)(d,{}),Time:Object(c.jsx)(u,{}),Img:Object(c.jsx)(b,{})},t=Object(i.useState)(e.Nav),n=Object(j.a)(t,2),s=n[0],a=n[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{className:"mainnav",children:Object(c.jsxs)("nav",{onClick:function(t){var n=t.target.textContent;a(e[n])},children:[Object(c.jsx)("a",{children:"Nav"}),Object(c.jsx)("a",{children:"Time"}),Object(c.jsx)("a",{children:"Img"})]})}),Object(c.jsx)("main",{children:s})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),h()},3:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8b3624d5.chunk.js.map