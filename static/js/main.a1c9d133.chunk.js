(this.webpackJsonpsand=this.webpackJsonpsand||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),i=a.n(o),r=a(31),s=a(5),l=Object(s.a)(),u=a(6),m=a(1);a(20);function d(e){return Object(n.useEffect)((function(){e.page})),"hide"===e.page?c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"buttonArea",onClick:function(){return l.push("/")}},c.a.createElement("div",{className:"findSomething"},c.a.createElement("img",{className:"searchIcon",src:"https://img.icons8.com/ios-glyphs/60/000000/search.png"}))),c.a.createElement("div",{className:"info"})):c.a.createElement("div",{className:"buttons"},c.a.createElement("div",{className:"buttonArea",onClick:function(){return l.push("/hide")}},c.a.createElement("div",{className:"hideSomething"})),c.a.createElement("div",{className:"info"}))}a(21);function b(e){var t=Object(n.useState)(10),a=Object(m.a)(t,2),o=(a[0],a[1]),i=Object(n.useState)(10),r=Object(m.a)(i,2),s=(r[0],r[1]),l=Object(n.useState)(!0),d=Object(m.a)(l,2),b=d[0],h=(d[1],Object(n.useState)("")),f=Object(m.a)(h,2),g=f[0],p=f[1],v={shaded:{position:"fixed",display:"flex",justifyContent:"center",width:"100vw",height:"100vh",top:0,left:0,backgroundColro:"rgb(0,0,0)",backgroundColor:"rgba(0,0,0,0.6)"},popup:Object(u.a)({marginTop:20,maxWidth:600,width:"97vw",height:"92vh",borderRadius:5,backgroundColor:"white",transition:"all 0.3s ease-in-out",textAlign:"center",fontFamily:"Fredoka One, cursive",fontSize:40},"backgroundColor","white"),img:{width:"100%",height:180,borderTopLeftRadius:5,borderTopRightRadius:5},close:{position:"fixed",top:30}};return Object(n.useEffect)((function(){o(350),s(400),"eth"===e.type&&e.amount&&p("You've found 1 free stock!")})),b?c.a.createElement("div",null,c.a.createElement("div",{style:v.shaded},c.a.createElement("div",{style:v.popup},c.a.createElement("img",{style:v.img,src:"https://image.freepik.com/free-vector/business-candle-stick-graph-chart-stock-market-investment-trading-blue-background_62391-93.jpg",alt:"backdrop"}),c.a.createElement("img",{className:"roundImg",src:"https://pbs.twimg.com/profile_images/1122884534377357313/WVB5dcBa_400x400.png",alt:"round photo"}),c.a.createElement("div",{style:v.close,onClick:function(){return e.closeModal()}},"x"),c.a.createElement("div",{className:"message"},g),c.a.createElement("div",{className:"area"},c.a.createElement("div",{className:"claimPrize",onClick:function(){return window.location.href="https://act.webull.com/mo/dAIYgeYXCzDD/ebe/inviteUs/"}},"Claim prize",c.a.createElement("img",{className:"linkIcon",src:"https://mymo-secure-content.s3.us-east-2.amazonaws.com/15992565776800.7710307302014743",alt:"External link"})))))):null}a(22);function h(){var e,t=Object(n.useState)({x:null,y:null}),a=Object(m.a)(t,2),o=a[0],i=a[1],r=Object(n.useState)(!1),s=Object(m.a)(r,2),l=s[0],h=s[1],f=Object(n.useState)(125),g=Object(m.a)(f,2),p=g[0],v=g[1],E=Object(n.useState)(170),k=Object(m.a)(E,2),O=k[0],j=k[1],w=Object(n.useState)(40),y=Object(m.a)(w,2),S=y[0],x=y[1],N=Object(n.useState)("https://mymo-secure-content.s3.us-east-2.amazonaws.com/15989309663050.7647081174685721"),C=Object(m.a)(N,2),Y=C[0],z=(C[1],{searchBox:(e={background:"url(".concat(Y,")"),backgroundSize:"200vw 200vh",backgroundColor:"gray",backgroundPositionX:o.x,backgroundPositionY:o.y,fontFamily:"Fredoka One, cursive",position:"fixed",fontSize:225,width:p,height:p,borderRadius:10,bottom:20,left:25},Object(u.a)(e,"backgroundColor","transparent"),Object(u.a)(e,"margin",0),e),title:{fontFamily:"Fredoka One, cursive",position:"fixed",fontSize:S,bottom:25,left:O,margin:0}});function X(e){i({x:e.touches[0].clientX,y:e.touches[0].clientY}),e.touches[0].clientX>155&&e.touches[0].clientX<=230&&e.touches[0].clientY>262&&e.touches[0].clientY<=334&&h(!0)}function B(e){i({x:e.clientX,y:e.clientY}),e.clientX>155&&e.clientX<=230&&e.clientY>262&&e.clientY<=334&&h(!0)}return Object(n.useEffect)((function(){v(80),j(125),x(30),window.addEventListener("touchmove",X),window.addEventListener("touchStart",X),window.addEventListener("mousemove",B)}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"treasureHuntBackground"}),c.a.createElement("div",{className:"searchBox",style:z.searchBox}),c.a.createElement("div",{className:"tr"}),c.a.createElement(d,null),l?c.a.createElement(b,{type:"eth",amount:"0.05",closeModal:function(){h(!1)}}):null)}a(23);function f(){var e=Object(n.useState)(1e3),t=Object(m.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(-1e3),r=Object(m.a)(i,2),s=r[0],l=r[1],u={title:{fontFamily:"Fredoka One, cursive",backgroundRepeat:"no-repeat",backgroundPositionX:a,backgroundPositionY:s,height:60,fontSize:45,marginLeft:30,marginTop:70,transition:"all 0.5s ease-in-out",color:"white"},background:{height:"100vh",width:"100vw",backgroundColor:"black",position:"fixed",top:0,left:0}};return Object(n.useEffect)((function(){o(0),l(0)})),c.a.createElement("div",null,c.a.createElement("div",{style:u.background,className:"blackBack"},c.a.createElement(d,{page:"hide"}),c.a.createElement("div",{style:u.title},"Hide Something")))}var g=function(){return c.a.createElement(r.b,{history:l},c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/"},c.a.createElement(h,null)),c.a.createElement(r.a,{exact:!0,path:"/hide",component:f})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a1c9d133.chunk.js.map