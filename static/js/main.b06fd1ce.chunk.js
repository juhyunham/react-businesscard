(this["webpackJsonpreact-card-maker"]=this["webpackJsonpreact-card-maker"]||[]).push([[0],{10:function(e,t,a){e.exports={makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",card:"card_card__1APMW",dark:"card_dark__2_0oe",light:"card_light__3VHjN",colorful:"card_colorful__2YfBq",avatar:"card_avatar__35pxs",info:"card_info__BHv3k",name:"card_name__2_o7Y",company:"card_company__1KrJX"}},13:function(e,t,a){e.exports={makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",form:"card_add_form_form__2jGQF",input:"card_add_form_input__14vo9",textarea:"card_add_form_textarea__1lvPM",select:"card_add_form_select__xRG6z",button:"card_add_form_button__3UB-1",fileInput:"card_add_form_fileInput__1vcvI"}},14:function(e,t,a){e.exports={makerShadow:"rgba(217, 217, 217, 1)",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",form:"card_edit_form_form__DZZ1j",input:"card_edit_form_input__23ewX",textarea:"card_edit_form_textarea__xaPCD",select:"card_edit_form_select__EH6ho",button:"card_edit_form_button__3-QuY",fileInput:"card_edit_form_fileInput__2oFcz"}},18:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerLightPink:"#ffeae8",login:"login_login__34laY",list:"login_list__3Rmxs",item:"login_item__2gtxq",button:"login_button__3H83U"}},19:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",makerPink:"pink",makerWhite:"white",container:"image_file_input_container__2-Fkh",input:"image_file_input_input__2etBu",button:"image_file_input_button__1h1y-",pink:"image_file_input_pink__1EwLk",grey:"image_file_input_grey__10JR3",loading:"image_file_input_loading__1Pnz_",spin:"image_file_input_spin__3qFM5"}},24:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerBlack:"black",header:"header_header__3Mmzm",logo:"header_logo__3bZLj",title:"header_title__1d7mw",logout:"header_logout__3pLfB"}},28:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__1bZKE",title:"preview_title__1jnn5",cards:"preview_cards__4c-zG"}},33:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",footer:"footer_footer__PTkjL",title:"footer_title___rRrv"}},36:function(e,t,a){e.exports={makerGreen:"#385461",makerWhite:"white",makerLightPink:"#ffeae8",mediaQuery:"62rem",maker:"maker_maker__l-Zoi",container:"maker_container__3z7PT"}},37:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",mediaQuery:"62rem",editor:"editor_editor__3vb7o",title:"editor_title__wBdwZ"}},40:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__1hWRX"}},42:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerWheat:"wheat",button:"button_button__2qYPP"}},47:function(e,t,a){e.exports={makerWhite:"white"}},60:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(2),c=a.n(r),i=a(39),s=a.n(i),o=(a(47),a(25)),l=a(5),u=a(40),d=a.n(u),m=a(24),f=a.n(m),j=a(1),b=function(e){var t=e.onLogout;return Object(j.jsxs)("header",{className:f.a.header,children:[t&&Object(j.jsx)("button",{type:"button",className:f.a.logout,onClick:t,children:"Logout"}),Object(j.jsx)("img",{src:"/images/logo.png",alt:"logo",className:f.a.logo}),Object(j.jsx)("h1",{className:f.a.title,children:"Business Card Maker"})]})},p=a(33),_=a.n(p),h=function(e){return Object(j.jsx)("footer",{className:_.a.footer,children:Object(j.jsx)("strong",{className:_.a.title,children:" Copyright HamJu "})})},g=a(18),O=a.n(g),x=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},c=function(e){t.login(e.target.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.id)}))})),Object(j.jsxs)("section",{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("section",{className:O.a.login,children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:c,type:"button",children:"Google"})}),Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:c,type:"button",children:"Github"})})]})]}),Object(j.jsx)(h,{})]})},k=a(15),v=a(36),N=a.n(v),y=a(42),w=a.n(y),C=function(e){var t=e.name,a=e.onClick;return Object(j.jsx)("button",{className:w.a.button,onClick:a,children:t})},R=a(13),I=a.n(R),G=function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(k.a)(d,2),f=m[0],b=m[1];return Object(j.jsxs)("form",{ref:n,className:I.a.form,children:[Object(j.jsx)("input",{ref:c,className:I.a.input,type:"text",name:"message",placeholder:"name"}),Object(j.jsx)("input",{ref:i,className:I.a.input,type:"text",name:"message",placeholder:"company"}),Object(j.jsxs)("select",{ref:s,className:I.a.select,name:"theme",placeholder:"message",children:[Object(j.jsx)("option",{placeholder:"light",children:"light"}),Object(j.jsx)("option",{placeholder:"dark",children:"dark"}),Object(j.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{ref:o,className:I.a.input,type:"text",name:"message",placeholder:"title"}),Object(j.jsx)("input",{ref:l,className:I.a.input,type:"email",name:"message",placeholder:"email"}),Object(j.jsx)("textarea",{ref:u,className:I.a.textarea,name:"message",cols:"30",rows:"10",placeholder:"message"}),Object(j.jsxs)("div",{className:I.a.fileInput,children:[Object(j.jsx)(t,{name:f.fileName,onFileChange:function(e){b({fileName:e.name,fileURL:e.url})}}),Object(j.jsx)(C,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:s.current.value,title:o.current.value||"",email:l.current.value||"",message:u.current.value||"",fileName:f.fileName||"",fileURL:f.fileURL||""};n.current.reset(),b({fileName:null,fileURL:null}),a(t)}})]})]})},L=a(26),P=a(14),F=a.n(P),S=function(e){var t=e.FileInput,a=e.card,c=e.updateCard,i=e.deleteCard,s=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useRef)(),f=a.name,b=a.company,p=a.title,_=a.email,h=a.message,g=a.theme,O=a.fileName,x=function(e){null!==e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},a),{},Object(L.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(j.jsxs)("form",{className:F.a.form,children:[Object(j.jsx)("input",{ref:s,className:F.a.input,type:"text",name:"name",value:f,onChange:x}),Object(j.jsx)("input",{ref:o,className:F.a.input,type:"text",name:"company",value:b,onChange:x}),Object(j.jsxs)("select",{ref:l,className:F.a.select,name:"theme",value:g,onChange:x,children:[Object(j.jsx)("option",{value:"light",children:"light"}),Object(j.jsx)("option",{value:"dark",children:"dark"}),Object(j.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(j.jsx)("input",{ref:u,className:F.a.input,type:"text",name:"title",value:p,onChange:x}),Object(j.jsx)("input",{ref:d,className:F.a.input,type:"email",name:"email",value:_,onChange:x}),Object(j.jsx)("textarea",{ref:m,className:F.a.textarea,name:"message",cols:"30",rows:"10",value:h,onChange:x}),Object(j.jsxs)("div",{className:F.a.fileInput,children:[Object(j.jsx)(t,{name:O,onFileChange:function(e){c(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}}),Object(j.jsx)(C,{name:"Delete",onClick:function(e){e.preventDefault(),i(a)}})]})]})},W=a(37),A=a.n(W),B=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(j.jsxs)("section",{className:A.a.editor,children:[Object(j.jsx)("h1",{className:A.a.title,children:"Card Maker"}),Object(j.jsxs)("ul",{children:[Object.keys(a).map((function(e){return Object(j.jsx)(S,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(j.jsx)(G,{FileInput:t,onAdd:n})]})]})},D=a(10),U=a.n(D),E=function(e){switch(e){case"dark":return U.a.dark;case"light":return U.a.light;case"colorful":return U.a.colorful;default:throw new Error("unknown theme: ".concat(e))}},z=function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,s=t.theme,o=t.fileURL||"/images/default_logo.png";return Object(j.jsxs)("li",{className:"".concat(U.a.card," ").concat(E(s)),children:[Object(j.jsx)("img",{className:U.a.avatar,src:o,alt:"profile"}),Object(j.jsxs)("div",{className:U.a.info,children:[Object(j.jsx)("h2",{className:U.a.name,children:a}),Object(j.jsx)("p",{className:U.a.company,children:n}),Object(j.jsx)("p",{className:U.a.title,children:r}),Object(j.jsx)("p",{className:U.a.email,children:c}),Object(j.jsx)("p",{className:U.a.message,children:i})]})]})},M=a(28),T=a.n(M),Z=function(e){var t=e.cards;return Object(j.jsxs)("section",{className:T.a.preview,children:[Object(j.jsx)("h1",{className:T.a.title,children:"Card Preview"}),Object(j.jsx)("ul",{className:T.a.cards,children:Object.keys(t).map((function(e){return Object(j.jsx)(z,{card:t[e]},e)}))})]})},H=function(e){var t=e.FileInput,a=e.authService,c=e.cardRepository,i=Object(l.f)().state,s=Object(r.useState)({}),o=Object(k.a)(s,2),u=o[0],d=o[1],m=Object(r.useState)(i&&i.id),f=Object(k.a)(m,2),p=f[0],_=f[1],g=Object(l.f)();Object(r.useEffect)((function(){if(p){var e=c.syncCards(p,(function(e){d(e)}));return function(){e()}}}),[p,c]),Object(r.useEffect)((function(){a.onAuthChange((function(e){e?_(e.uid):g.push("/")}))}),[p,g,a]);var O=function(e){d((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),c.saveCard(p,e)};return Object(j.jsxs)("section",{className:N.a.maker,children:[Object(j.jsx)(b,{onLogout:function(){a.logout()}}),Object(j.jsxs)("div",{className:N.a.container,children:[Object(j.jsx)(B,{FileInput:t,cards:u,addCard:O,updateCard:O,deleteCard:function(e){d((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),c.removeCard(p,e)}}),Object(j.jsx)(Z,{cards:u})]}),Object(j.jsx)(h,{})]})};var J=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(j.jsx)("div",{className:d.a.app,children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{authService:a})}),Object(j.jsx)(l.a,{path:"/maker",children:Object(j.jsx)(H,{FileInput:t,authService:a,cardRepository:n})})]})})})},Y=a(20),q=a(21),Q=a(29),K=(a(53),a(55),Q.a.initializeApp({apiKey:"AIzaSyDww32y5sVxs9E4AgzGEPgGht8gDbRIA08",authDomain:"business-card-f965b.firebaseapp.com",databaseURL:"https://business-card-f965b-default-rtdb.firebaseio.com/",projectId:"business-card-f965b"})),X=K.auth(),V=K.database(),$=new Q.a.auth.GoogleAuthProvider,ee=new Q.a.auth.GithubAuthProvider,te=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return X.signInWithPopup(t)}},{key:"logout",value:function(){X.signOut()}},{key:"onAuthChange",value:function(e){X.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return $;case"Github":return ee;default:throw new Error("not suppoterd provider : ".concat(e))}}}]),e}(),ae=a(22),ne=a.n(ae),re=a(27),ce=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"upload",value:function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","docs_upload_example_us_preset"),e.next=5,fetch("https://api.cloudinary.com/v1_1/demo/image/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=a(19),se=a.n(ie),oe=function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(k.a)(c,2),s=i[0],o=i[1],l=Object(r.useRef)(),u=function(){var e=Object(re.a)(ne.a.mark((function e(a){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,o(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:se.a.container,children:[Object(j.jsx)("input",{ref:l,className:se.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!s&&Object(j.jsxs)("button",{className:"".concat(se.a.button," ").concat(a?se.a.pink:se.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:[" ",a||"No File!"," "]}),s&&Object(j.jsx)("div",{className:se.a.loading})]})},le=function(){function e(){Object(Y.a)(this,e)}return Object(q.a)(e,[{key:"syncCards",value:function(e,t){var a=V.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){a.off()}}},{key:"saveCard",value:function(e,t){V.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){V.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=new te,de=new le,me=new ce;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(J,{authService:ue,FileInput:function(e){return Object(j.jsx)(oe,Object(n.a)(Object(n.a)({},e),{},{imageUploader:me}))},cardRepository:de})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.b06fd1ce.chunk.js.map