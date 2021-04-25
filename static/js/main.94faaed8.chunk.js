(this["webpackJsonpbuscador-react"]=this["webpackJsonpbuscador-react"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(0),n=s.n(i),a=s(31),r=s.n(a),o=(s(38),s(39),s(10)),j=s.n(o),d=s(12),h=s(8),l=s(2),b=function(){return Object(c.jsx)("header",{children:Object(c.jsxs)(l.b.h1,{drag:!0,children:[Object(c.jsx)("span",{children:"TV Shows"}),Object(c.jsx)("span",{children:"Movies"}),Object(c.jsx)("span",{className:"resaltar",children:"Search"})]})})};function u(e){return Object(c.jsxs)("form",{onSubmit:e.submit,children:[Object(c.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Matrix",onChange:e.change}),Object(c.jsx)("button",{type:"button",children:Object(c.jsx)(l.b.i,{whileHover:{transform:"rotate(-90deg)"},class:"fas fa-search"})})]})}var x=s(19),O=s(11);function p(e){var t,s={hidden:{opacity:0,x:"100vw"},visible:(t={opacity:1,x:0},Object(x.a)(t,"x","0"),Object(x.a)(t,"transition",{delay:.5,stiffnes:1}),t),exit:{opacity:0,x:"-100vw"}};return Object(c.jsx)("section",{id:"show-list-container",children:"empty"!=e.shows?Object(c.jsx)(l.b.div,{id:"show-list",drag:"x",dragConstraints:{right:0,left:e.items},children:e.shows.map((function(e){return Object(c.jsxs)(l.b.article,{variants:s,initial:"hidden",animate:"visible",exit:"exit",children:[Object(c.jsx)("article",{className:"show-image",style:{backgroundImage:e.show.image&&"url(".concat(e.show.image.medium,")")}}),Object(c.jsxs)(O.b,{to:"/show/".concat(e.show.id),children:[" ",e.show.name," "]},e.show.id)]},e.show.id)}))}):Object(c.jsx)("p",{className:"error",children:"No shows has been found (\u256f\xb0\u76ca\xb0)\u256f\u5f61\u253b\u2501\u253b"})})}var m=s(15),f=s.n(m),w=function(){var e=Object(i.useState)(""),t=Object(h.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)([]),r=Object(h.a)(a,2),o=r[0],x=r[1],O=Object(i.useState)(0),m=Object(h.a)(O,2),w=m[0],v=m[1];Object(i.useEffect)((function(){var e=document.querySelector(".App").getBoundingClientRect().width-80,t=200*o.length;v(t>e?e-t:0)}));var y=function(){var e=Object(d.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,f.a.get("https://api.tvmaze.com/search/shows?q=".concat(s));case 3:0!=(c=e.sent).data.length?x(c.data):x("empty");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)(l.b.div,{className:"App",variants:{hidden:{opacity:0},visible:{opacity:1,x:0,transition:{delay:.5}},exit:{opacity:0}},initial:"hidden",animate:"visible",exit:"exit",children:[Object(c.jsx)(b,{}),Object(c.jsx)(u,{submit:y,change:function(e){n(e.target.value)}}),Object(c.jsx)(p,{shows:o,items:w})]})},v=s(3),y=s(16),g=s.n(y),k=function(e){var t=Object(i.useState)(!0),s=Object(h.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)(!1),o=Object(h.a)(r,2),b=o[0],u=o[1],x={hidden:{opacity:0,y:-10},visible:{opacity:1,y:0,transition:{delay:.2*e.i}},exit:{opacity:0,y:-10}};Object(i.useEffect)(Object(d.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===e.episode.summary||!e.episode.summary){t.next=4;break}return t.next=3,e.episode.summary.replace("</p><p><br />","");case 3:e.episode.summary=t.sent;case 4:a(!n);case 5:case"end":return t.stop()}}),t)}))),[]);return Object(c.jsx)(l.b.article,{className:"episode-article",variants:x,initial:"hidden",animate:"visible",exit:"exit",children:n?null:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"episode-header",children:[Object(c.jsxs)("span",{className:"episode-number",children:["#",e.episode.number]}),Object(c.jsx)("p",{className:"episode-title",children:e.episode.name}),e.episode.summary?Object(c.jsx)("span",{className:"episode-infoButton",onClick:function(){u(!b)},children:b?"\u290a":"\u290b"}):null]}),Object(c.jsx)(l.a,{children:b?Object(c.jsxs)(l.b.div,{className:"episode-info",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},children:[Object(c.jsx)("p",{className:"tick",children:"\u2554"}),Object(c.jsx)("i",{dangerouslySetInnerHTML:{__html:g.a.sanitize(e.episode.summary)}}),Object(c.jsx)("p",{className:"tick",children:"\u255d"})]},e.episode.id):null})]})})},N=function(e){var t=Object(i.useState)(!0),s=Object(h.a)(t,2),n=s[0],a=s[1],r={hidden:{opacity:0},visible:{opacity:1,x:0,transition:{delay:.5}},exit:{opacity:0}},o=function(){a(!n),console.log(e.show),console.log(n)};return Object(c.jsxs)(l.b.div,{className:"App info",variants:r,initial:"hidden",animate:"visible",exit:"exit",children:[Object(c.jsxs)("section",{className:"info-left",children:[Object(c.jsxs)("h2",{children:[" ",e.show.name," "]}),Object(c.jsx)("article",{className:"info-show-image",style:{backgroundImage:e.show.image&&"url(".concat(e.show.image.medium,")")}}),Object(c.jsx)("div",{className:"info-show-summary",dangerouslySetInnerHTML:{__html:g.a.sanitize(e.show.summary)}}),Object(c.jsx)(O.b,{to:"/",children:" Go Back "})]}),Object(c.jsxs)("section",{className:"info-right",children:[Object(c.jsxs)("section",{id:"show-menu",children:[Object(c.jsx)("h2",{id:"selected",onClick:o,children:" Information"}),Object(c.jsx)("h2",{onClick:o,children:"Episodes"})]}),n?Object(c.jsx)(l.a,{children:Object(c.jsxs)(l.b.section,{id:"show-information",variants:r,initial:"hidden",animate:"visible",exit:"exit",children:[Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Field"}),Object(c.jsx)("th",{children:"Data"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Status"}),Object(c.jsx)("td",{children:e.show.status})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Genres"}),Object(c.jsx)("td",{children:"xD"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Network"}),Object(c.jsxs)("td",{children:[e.show.network.name," (",e.show.network.country.name,")"]})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Premiered"}),Object(c.jsx)("td",{children:e.show.premiered})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Type"}),Object(c.jsx)("td",{children:e.show.type})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Runtime"}),Object(c.jsx)("td",{children:e.show.runtime})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Schedule"}),Object(c.jsxs)("td",{children:[e.show.schedule.days[0]," - ",e.show.schedule.time]})]}),Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:"2",children:Object(c.jsx)("a",{href:e.show.officialSite,children:"Official Site"})})})]})]}),Object(c.jsx)("article",{children:Object(c.jsx)("p",{children:Object(c.jsxs)("i",{children:["Network: ",e.show.network.name," (",e.show.network.country.name,")"]})})})]})}):Object(c.jsx)(l.a,{children:Object(c.jsx)(l.b.section,{className:"episodes",variants:r,initial:"hidden",animate:"visible",exit:"exit",children:e.show.episodes.map((function(e,t){return Object(c.jsx)(k,{episode:e,i:t},e.id)}))},e.show.id)})]})]})},S=function(e){e.Match;var t=Object(i.useState)([]),s=Object(h.a)(t,2),n=s[0],a=s[1],r=Object(i.useState)(!0),o=Object(h.a)(r,2),l=o[0],b=o[1],u=Object(v.g)().id,x=function(){var e=Object(d.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://api.tvmaze.com/shows/".concat(u));case 2:return t=(t=e.sent).data,e.next=6,f.a.get("https://api.tvmaze.com/shows/".concat(u,"/episodes"));case 6:return s=e.sent,t.episodes=s.data,e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)(Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a(t),b(!l);case 5:case"end":return e.stop()}}),e)}))),[]),l?null:Object(c.jsx)(N,{show:n})};var C=function(){var e=Object(v.f)();return Object(c.jsx)("div",{children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(v.c,{location:e,children:[Object(c.jsx)(v.a,{path:"/",exact:!0,component:w}),Object(c.jsx)(v.a,{path:"/show/:id",component:S})]},e.key)})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,66)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(C,{})})}),document.getElementById("root")),I()}},[[64,1,2]]]);
//# sourceMappingURL=main.94faaed8.chunk.js.map