(this["webpackJsonpniblk-frontend"]=this["webpackJsonpniblk-frontend"]||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(2),o=s.n(c),a=s(16),l=s.n(a),r=(s(22),s(23),s(4)),i=s.n(r),d=s(5),u=s(3),j=s(7).default,b=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),s=t[0],o=t[1],a=Object(c.useState)(""),l=Object(u.a)(a,2),r=l[0],b=l[1],m=Object(c.useState)(""),p=Object(u.a)(m,2),h=p[0],x=p[1],f=function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={longURL:h,shortURL:s,password:r},e.prev=1,e.next=4,j.post("http://127.0.0.1:8080/update",t);case 4:"False"!==e.sent.data?alert("\ud83d\udc4d\ud83c\udffb Successfully Updated your url!!"):alert("\ud83d\ude44 Credentials look confusing! Kindly recheck before proceeding."),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{id:"formModal",className:"modal",children:Object(n.jsx)("div",{className:"modal-content",id:"modal-form",children:Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsx)("input",{type:"text",autoComplete:"off",id:"textbox1",name:"shorturl",placeholder:"ShortURL",onChange:function(e){o(e.target.value)}}),Object(n.jsx)("input",{type:"password",autoComplete:"off",id:"textbox2",name:"password",placeholder:"Enter the passcode...",onChange:function(e){b(e.target.value)}}),Object(n.jsx)("input",{type:"text",autoComplete:"off",id:"textbox3",name:"longurl",placeholder:"Your new LongURL",onChange:function(e){x(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"submit",onClick:f,children:"Submit"}),Object(n.jsx)("div",{className:"close",onClick:function(){document.getElementById("formModal").style.display="none",document.querySelector("body").style.overflow="auto"},children:"Close"})]})})})},m=function(){return Object(n.jsxs)("div",{className:"top-container",children:[Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)("img",{src:"./images/logo.svg",width:"4.5%",alt:""}),Object(n.jsx)("span",{className:"nav-font-pt1 nav-style",children:"nib."}),Object(n.jsx)("span",{className:"nav-font-pt2 nav-style",children:"l"}),Object(n.jsx)("span",{className:"nav-font-pt1 nav-style",children:"k"}),Object(n.jsx)("h3",{onClick:function(){document.getElementById("formModal").style.display="block",document.querySelector("body").style.overflow="hidden"},children:"Update"}),Object(n.jsxs)("div",{className:"btn",children:[Object(n.jsx)("img",{src:"./images/like.svg",width:"20px",heigth:"20px",alt:""}),Object(n.jsx)("h1",{children:"Donate"})]})]}),Object(n.jsxs)("div",{className:"hero-component",children:[Object(n.jsxs)("div",{className:"left-component",children:[Object(n.jsx)("h1",{children:"Shortify Hyperlinks, Amplify your reach"}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:"An hassle-free way to handle large links to quickly reach your public. "})]}),Object(n.jsx)("div",{className:"right-component",children:Object(n.jsx)("img",{src:"./images/hero.png",alt:"",width:"65%"})})]}),Object(n.jsx)(b,{})]})},p=s(7).default,h="http://127.0.0.1:8080/add",x=function(e){var t=e.props;return Object(n.jsx)("div",{id:"myModal",className:"modal",children:Object(n.jsx)("div",{className:"modal-content",children:Object(n.jsxs)("div",{className:"modal-body",children:[Object(n.jsxs)("p",{className:"modal-text",onClick:function(){navigator.clipboard.writeText("nib.lk/"+t),alert("\ud83d\udc4dCopied!!")},children:[" ",Object(n.jsx)("img",{src:"./images/copy.svg",alt:"",width:"2%",id:"copy"}),"nib.lk/"+t]}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{className:"close",onClick:function(){document.getElementById("myModal").style.display="none",document.querySelector("body").style.overflow="auto"},children:"Close"})]})})})},f=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),s=t[0],o=t[1],a=Object(c.useState)(""),l=Object(u.a)(a,2),r=l[0],j=l[1];function b(){return(b=Object(d.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.longurl.value,c={longURL:n,shortURL:s,password:r},e.prev=3,e.next=6,p.post(h,c);case 6:"exist"!==(a=e.sent).data?(document.getElementById("myModal").style.display="block",document.querySelector("body").style.overflow="hidden",o(a.data)):alert(c.shortURL+" already exist! \ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f Please try other combination or let the system decide. \ud83d\ude04"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}return Object(n.jsxs)("footer",{className:"lower",children:[Object(n.jsx)("div",{className:"longURL-box",children:Object(n.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(n.jsx)("input",{type:"text",required:"required",autoComplete:"off",id:"longtextbox",name:"longurl",placeholder:"LongURL"}),Object(n.jsx)("input",{type:"password",required:"required",autoComplete:"off",id:"passtextbox",name:"password",placeholder:"Use this passcode for updating your url...",onChange:function(e){j(e.target.value)}}),Object(n.jsx)("input",{type:"submit",className:"submit-btn",value:"Go"})]})}),Object(n.jsxs)("div",{className:"shortURL-box",children:[Object(n.jsxs)("div",{className:"label",children:[Object(n.jsxs)("div",{className:"button r",id:"button-1",children:[Object(n.jsx)("input",{type:"checkbox",className:"checkbox",id:"custom",name:"isCustom",onChange:function(e){e.target.checked?document.getElementById("shorttextbox").classList.remove("display"):(document.getElementById("shorttextbox").classList.add("display"),document.getElementById("shorttextbox").value="",o(""))}}),Object(n.jsx)("div",{className:"knobs"}),Object(n.jsx)("div",{className:"layer"})]}),Object(n.jsx)("label",{id:"customLabel",children:"Custom URL"})]}),Object(n.jsx)("input",{type:"text",autoComplete:"off",id:"shorttextbox",name:"shorturl",placeholder:"ShortURL(e.g. NewURL or GoogleHashCode)",className:"display",onChange:function(e){o(e.target.value)}})]}),Object(n.jsx)(x,{props:s})]})};var O=function(){return Object(c.useEffect)((function(){console.clear()})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{}),Object(n.jsx)(f,{})]})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),o(e),a(e)}))};l.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),y()}},[[42,1,2]]]);
//# sourceMappingURL=main.75811657.chunk.js.map