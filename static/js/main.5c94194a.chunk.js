(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),a=c(4),l=c.n(a),r=(c(11),c(2)),s=(c(12),c(0));function d(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat("light"===e.mode?"light":"dark","  bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{className:"nav-link ","aria-current":"page",href:"#",children:"Home"})})}),Object(s.jsx)("div",{className:"circle ",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModeDark,style:{backgroundColor:"black"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area border-".concat("light"===e.mode?"dark":"light"),onClick:e.toggleModeLight,style:{backgroundColor:"white"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModeSuccess,style:{backgroundColor:"green"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModePrimary,style:{backgroundColor:"blue"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModeDanger,style:{backgroundColor:"red"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModeWarning,style:{backgroundColor:"yellow"}})}),Object(s.jsx)("div",{className:"circle",children:Object(s.jsx)("div",{className:"area",onClick:e.toggleModeInfo,style:{backgroundColor:"skyblue"}})})]})]})})}function i(e){var t=Object(o.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h1",{className:"mb-4",children:[e.heading," "]}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control ",value:n,onChange:function(e){a(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:e.bgColor,color:"light"===e.mode?"black":"white"}})}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat(e.mode," border-").concat("light"===e.mode?"dark":"light"," me-2 my-1"),onClick:function(){var t=n.toUpperCase();a(t),e.showAlert("Connverted to uppercase","success")},children:"Convert to Uppercase"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat(e.mode," border-").concat("light"===e.mode?"dark":"light"," me-2 my-1"),onClick:function(){var t=n.toLowerCase();a(t),e.showAlert("Connverted to lowercase","success")},children:"Convert to Lowercase"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat(e.mode," border-").concat("light"===e.mode?"dark":"light"," me-2 my-1"),onClick:function(){a(""),e.showAlert("All text cleared","success")},children:"Clear Text"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat(e.mode," border-").concat("light"===e.mode?"dark":"light"," me-2 my-1"),onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Copied to clipboard!","success")},children:"Copy"}),Object(s.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat(e.mode," border-").concat("light"===e.mode?"dark":"light"," me-2 my-1"),onClick:function(){var t=n.split(/[ ]+/);a(t.join(" ")),e.showAlert("Extra Spaces removed","success")},children:"Remove ExtraSpaces"})]}),Object(s.jsxs)("div",{className:"container my-3",children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(s.jsxs)("p",{children:[.008*n.split(/\s+/).filter((function(e){return 0!==e.length})).length," Minutes read"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:n.length>0?n:"Nothing to preview"})]})]})}function b(e){return Object(s.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(s.jsx)("div",{className:"alert alert-".concat(e.alert.type," rounded-0 alert-dismissible fade show"),role:"alert",children:e.alert.msg})})}d.defaultProps={title:"Set title here",aboutText:"About"};var g=function(){var e=Object(o.useState)("dark"),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)(null),l=Object(r.a)(a,2),g=l[0],u=l[1],m=Object(o.useState)("#13466e"),h=Object(r.a)(m,2),j=h[0],x=h[1],y=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(d,{title:"TextUtils",mode:c,toggleModeLight:function(){"light"!==c&&(n("light"),document.body.style.backgroundColor="#f8f9fa",document.body.style.color="black",y("Light mode has been enabled","dark"),x("#f8f9fa"))},toggleModeDark:function(){"dark"!==c&&(n("dark"),document.body.style.backgroundColor="#042743",document.body.style.color="white",y("Dark mode has been enabled","light"),x("#13466e"))},toggleModeDanger:function(){"danger"!==c&&(n("danger"),document.body.style.backgroundColor="rgb(248, 113, 113)",document.body.style.color="white",y("Danger mode has been enabled","danger"),x("red"))},toggleModeSuccess:function(){"success"!==c&&(n("success"),document.body.style.backgroundColor="rgb(103, 233, 103)",document.body.style.color="white",y("Success mode has been enabled","success"),x("green"))},toggleModePrimary:function(){"primary"!==c&&(n("primary"),document.body.style.backgroundColor="rgb(99, 149, 241)",document.body.style.color="white",y("Primary mode has been enabled","primary"),x("blue"))},toggleModeInfo:function(){"info"!==c&&(n("info"),document.body.style.backgroundColor="lightskyblue",document.body.style.color="white",y("Info mode has been enabled","info"),x("lightblue"))},toggleModeWarning:function(){"warning"!==c&&(n("warning"),document.body.style.backgroundColor="rgb(241, 197, 74)",document.body.style.color="white",y("Warning mode has been enabled","warning"),x("rgb(236, 177, 12)"))}}),Object(s.jsx)(b,{alert:g}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(i,{showAlert:y,heading:"Enter the text to analyze below",mode:c,bgColor:j})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),o(e),n(e),a(e),l(e)}))};l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),u()}},[[14,1,2]]]);
//# sourceMappingURL=main.5c94194a.chunk.js.map