(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3982],{30379:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return ComponentsGallery}});var n,t,s,r,i,c,o,d,u,m,p,h,x,y,b,N,j,g,f=l(98959),G=l(45234),w=l(53710),S=l(45711),k=l(36063),v=l(65784),Z=l(53882),P=l.n(Z),C=l(92379),T=l(37253),B=l(76742),E=l(95880),O=l(52864),_=l(32527),I=l(81538),W=l(96389),L=l(61813),M=l(23850),z=l(25331),D=l(54879),R=l(58229),X=l(86430),A=l(50600),F=l(61829),V=l(26939),H=l(58661),Y=l(97403),q=l(10807),J=l(31120),K=l(6040),Q=l(38934),U=l(49961),$=l(82372),ee=l(98398),ea=l(84832),el=l(37706),en=l(84967),et=l(11691),es=l(52148),er=l(43223),ei=l(67868),ec=l(74128),eo=l(651),ed=["ownerState"],eu={entering:"translateX(0)",entered:"translateX(0)",exiting:"translateX(500px)",exited:"translateX(500px)",unmounted:"translateX(500px)"},em=C.forwardRef(function(e,a){e.ownerState;var l=(0,v.Z)(e,ed);return(0,eo.jsxs)("button",(0,k.Z)((0,k.Z)({type:"button"},l),{},{ref:a,children:[l.children,n||(n=(0,eo.jsx)(el.Z,{}))]}))}),ep=(0,S.Z)(Array(36)).map(function(e,a){return"hsl(".concat(10*a,", 68%, 38%)")}).join(","),eh=(0,E.Z)(H.i)(function(e){var a=e.theme;return"\n    width: 100%;\n    background: -webkit-linear-gradient(left, ".concat(ep,");\n    margin: 16px 0;\n    height: 8px;\n    border-radius: 8px;\n  \n    & .MuiSlider-thumb {\n      position: absolute;\n      width: 20px;\n      height: 20px;\n      margin-left: -6px;\n      margin-top: -6.5px;\n      border-radius: 50%;\n      background-color: white;\n      border: 1px solid;\n      border-color: ").concat("dark"===a.palette.mode?"white":"#CBCBCB",";\n      transition: all 120ms ease;\n  \n      &:hover {\n        box-shadow: 0 0 0 4px ").concat("dark"===a.palette.mode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)",";\n      }\n  \n      &:active {\n        box-shadow: 0 0 0 6px ").concat("dark"===a.palette.mode?"rgba(255,255,255,0.2)":"rgba(0,0,0,0.2)",";\n        transform: scale(1.2);\n      },\n    },\n    ")}),ex=(0,E.Z)(I.z)({float:"right"}),ey=(0,E.Z)(I.z)({display:"flex",alignItems:"center",float:"right",padding:"6px !important"}),eb=(0,E.Z)("div")({display:"flex",flexDirection:"column",width:"250px",marginTop:"12px !important"});function ComponentsGallery(){var e,a,l=C.useState(null),n=(0,w.Z)(l,2),S=n[0],v=n[1],Z=!!S,E=Z?"simple-popper":void 0,el=C.useState(null),ed=(0,w.Z)(el,2),ep=ed[0],eN=ed[1],ej=!!ep,eg=C.useState(!1),ef=(0,w.Z)(eg,2),eG=ef[0],ew=ef[1],eS=C.useState(!0),ek=(0,w.Z)(eS,2),ev=ek[0],eZ=ek[1],eP=C.useRef(null),handleClose=function(e,a){"clickaway"!==a&&ew(!1)},eC={"aria-label":"Demo switch"},eT=C.useState(0),eB=(0,w.Z)(eT,2),eE=eB[0],eO=eB[1],e_=C.useState(5),eI=(0,w.Z)(e_,2),eW=eI[0],eL=eI[1],eM=C.useState(!1),ez=(0,w.Z)(eM,2),eD=ez[0],eR=ez[1],eX=C.useState(!0),eA=(0,w.Z)(eX,2),eF=eA[0],eV=eA[1],eH=C.useState(""),eY=(0,w.Z)(eH,2),eq=eY[0],eJ=eY[1],eK=C.useRef(null);function _copyTheme(){return(_copyTheme=(0,G.Z)((0,f.Z)().mark(function _callee(){var e,a;return(0,f.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,fetch("/static/components-gallery/base-theme.css");case 2:return e=l.sent,l.next=5,e.text();case 5:a=l.sent,eq.split("\n").map(function(e){return e.trim()}).filter(function(e){return e.startsWith("--")&&e.endsWith(";")}).forEach(function(e){var l=e.split(":")[0].trim();a=a.replace(new RegExp("".concat(l,":.*;")),e)}),navigator.clipboard.writeText(a),eR(!0);case 9:case"end":return l.stop()}},_callee)}))).apply(this,arguments)}var handleCopyClose=function(e,a){"clickaway"!==a&&eR(!1)},eQ=C.useState(null),eU=(0,w.Z)(eQ,2),e$=eU[0],e0=eU[1],e1=!!e$,e2=e1?"settings-popup":void 0;return(0,eo.jsxs)(B.Z,{className:"GalleryContainer",gap:2,children:[(0,eo.jsxs)(B.Z,{direction:"row",spacing:1.5,sx:{position:"absolute",right:24},children:[(0,eo.jsx)(ey,{"aria-describedby":e2,className:"GalleryButtonOutlined",onClick:function(e){e0(e$?null:e.currentTarget)},children:t||(t=(0,eo.jsx)(en.Z,{}))}),(0,eo.jsx)(R.r,{id:e2,open:e1,anchorEl:e$,children:(0,eo.jsxs)(eb,{className:"GalleryPopup",children:[(0,eo.jsx)(T.Z,{component:"h3",sx:{fontWeight:500,fontSize:"0.875rem",m:0},children:"Change the primary color:"}),(0,eo.jsx)(eh,{defaultValue:210,min:0,max:360,onChange:function(e,a){eJ("\n:root {\n  --primary-50: ".concat(a,", 90%, 97%;\n  --primary-100: ").concat(a,", 90%, 88%;\n  --primary-200: ").concat(a,", 90%, 78%;\n  --primary-300: ").concat(a,", 90%, 65%;\n  --primary-400: ").concat(a,", 90%, 41%;\n  --primary-500: ").concat(a,", 90%, 26%;\n  --primary-600: ").concat(a,", 90%, 22%;\n  --primary-700: ").concat(a,", 90%, 17%;\n  --primary-800: ").concat(a,", 90%, 14%;\n  --primary-900: ").concat(a,", 90%, 12%;\n}\n    "));var l,n=null!==(l=document.getElementById("gallery-overrides"))&&void 0!==l?l:document.createElement("style");n.id="gallery-overrides",n.innerHTML=eq,document.getElementsByTagName("head")[0].appendChild(n)}})]})}),(0,eo.jsx)(ex,{className:"GalleryButton",style:{float:"right"},onClick:function(){return _copyTheme.apply(this,arguments)},children:"Export theme"}),(0,eo.jsx)(Y.A,{autoHideDuration:5e3,open:eD,onClose:handleCopyClose,exited:eF,className:"GallerySnackbar",children:(0,eo.jsx)(O.ZP,{timeout:{enter:400,exit:400},in:eD,appear:!0,unmountOnExit:!0,onEnter:function(){eV(!1)},onExited:function(){eV(!0)},nodeRef:eK,children:function(a){return(0,eo.jsxs)("div",{className:"GallerySnackbar-content",style:{transform:eu[a],transition:"transform 300ms ease"},ref:eK,children:[(0,eo.jsx)(ea.Z,{sx:{color:"success.main",flexShrink:0,width:"1.25rem",height:"1.5rem"}}),s||(s=(0,eo.jsxs)("div",{className:"snackbar-message",children:[(0,eo.jsx)("p",{className:"snackbar-title",children:"Theme exported!"}),(0,eo.jsx)("p",{className:"snackbar-description",children:"The theme stylesheet has been copied to your clipboard."})]})),e||(e=(0,eo.jsx)(ec.Z,{onClick:handleCopyClose,className:"snackbar-close-icon"}))]})}})})]}),(0,eo.jsx)("div",{children:(0,eo.jsx)(_.C,{slotProps:{root:{className:"GalleryBadge-root"},badge:{className:"GalleryBadge-badge"}},badgeContent:5,children:r||(r=(0,eo.jsx)("span",{className:"GalleryBadge-content"}))})}),i||(i=(0,eo.jsxs)(B.Z,{direction:"row",spacing:1,useFlexGap:!0,flexWrap:"wrap",children:[(0,eo.jsx)(I.z,{className:"GalleryButton",children:"Solid button"}),(0,eo.jsx)(I.z,{className:"GalleryButtonOutlined",children:"Outlined button"}),(0,eo.jsx)(I.z,{className:"GalleryButtonPlain",children:"Plain button"}),(0,eo.jsx)(I.z,{className:"GalleryButton",disabled:!0,children:"Disabled button"})]})),c||(c=(0,eo.jsx)(W.I,{placeholder:"Write something here",className:"GalleryInput"})),o||(o=(0,eo.jsx)(ee.u,{className:"GalleryTextarea","aria-label":"empty textarea",placeholder:"Write something here"})),(0,eo.jsx)(A.Y,{slotProps:{root:{className:"GalleryNumberInput"},input:{className:"input"},decrementButton:{className:"btn decrement",children:"▾"},incrementButton:{className:"btn increment",children:"▴"}},"aria-label":"Demo number input",placeholder:"Type a number…"}),(0,eo.jsxs)(F.P,{className:"GallerySelect",slots:{root:em},slotProps:{listbox:{className:"GallerySelect-listbox"},popup:{className:"GallerySelect-popup"}},defaultValue:10,children:[d||(d=(0,eo.jsx)(V.W,{className:"GallerySelect-option",value:10,children:"Documentation"})),u||(u=(0,eo.jsx)(V.W,{className:"GallerySelect-option",value:20,children:"Components"})),m||(m=(0,eo.jsx)(V.W,{className:"GallerySelect-option",value:30,children:"Features"}))]}),(0,eo.jsxs)(B.Z,{direction:"row",spacing:1,useFlexGap:!0,flexWrap:"wrap",children:[(0,eo.jsx)("div",{children:(0,eo.jsxs)(D.L,{children:[p||(p=(0,eo.jsx)(z.j,{className:"GalleryButtonOutlined",children:"Open menu"})),(0,eo.jsxs)(L.v,{className:"GalleryMenu",slotProps:{listbox:{className:"GalleryMenu-listbox"}},children:[h||(h=(0,eo.jsx)(M.s,{className:"GalleryMenu-item",children:"Profile"})),x||(x=(0,eo.jsx)(M.s,{className:"GalleryMenu-item",children:"Language settings"})),y||(y=(0,eo.jsx)(M.s,{className:"GalleryMenu-item",children:"Log out"}))]})]})}),(0,eo.jsxs)("div",{children:[(0,eo.jsxs)("button",{type:"button","aria-describedby":E,className:"GalleryButtonOutlined",onClick:function(e){v(S?null:e.currentTarget)},children:[Z?"Close":"Open"," Popper"]}),(0,eo.jsx)(R.r,{id:E,open:Z,anchorEl:S,children:b||(b=(0,eo.jsx)("div",{className:"GalleryPopper",children:"Popper content"}))})]}),(0,eo.jsxs)("div",{children:[(0,eo.jsxs)("button",{type:"button","aria-describedby":E,className:"GalleryButtonOutlined",onClick:function(e){eN(ep?null:e.currentTarget)},children:[ej?"Close":"Open"," Popup"]}),(0,eo.jsx)(X.G,{id:ej?"simple-popup":void 0,open:ej,anchor:ep,children:N||(N=(0,eo.jsx)("div",{className:"GalleryPopup",children:"Popup content"}))})]}),(0,eo.jsxs)("div",{children:[(0,eo.jsx)("button",{className:"GalleryButtonOutlined",type:"button",onClick:function(){ew(!0)},children:"Open snackbar"}),(0,eo.jsx)(Y.A,{autoHideDuration:5e3,open:eG,onClose:handleClose,exited:ev,className:"GallerySnackbar",children:(0,eo.jsx)(O.ZP,{timeout:{enter:400,exit:400},in:eG,appear:!0,unmountOnExit:!0,onEnter:function(){eZ(!1)},onExited:function(){eZ(!0)},nodeRef:eP,children:function(e){return(0,eo.jsxs)("div",{className:"GallerySnackbar-content",style:{transform:eu[e],transition:"transform 300ms ease"},ref:eP,children:[(0,eo.jsx)(ea.Z,{sx:{color:"success.main",flexShrink:0,width:"1.25rem",height:"1.5rem"}}),j||(j=(0,eo.jsxs)("div",{className:"snackbar-message",children:[(0,eo.jsx)("p",{className:"snackbar-title",children:"Notifications sent"}),(0,eo.jsx)("p",{className:"snackbar-description",children:"Everything was sent to the desired address."})]})),a||(a=(0,eo.jsx)(ec.Z,{onClick:handleClose,className:"snackbar-close-icon"}))]})}})})]})]}),(0,eo.jsxs)("div",{style:{width:300},children:[(0,eo.jsx)(H.i,{slotProps:{root:{className:"GallerySlider"},rail:{className:"GallerySlider-rail"},track:{className:"GallerySlider-track"},thumb:{className:"GallerySlider-thumb",tabIndex:0}},defaultValue:50}),(0,eo.jsx)(H.i,{slotProps:{root:{className:"GallerySlider"},rail:{className:"GallerySlider-rail"},track:{className:"GallerySlider-track"},thumb:{className:"GallerySlider-thumb"}},defaultValue:10,disabled:!0})]}),(0,eo.jsxs)(B.Z,{direction:"row",spacing:2,useFlexGap:!0,children:[(0,eo.jsx)(q.r,{slotProps:{root:{className:"GallerySwitch"},input:(0,k.Z)((0,k.Z)({},eC),{},{className:"GallerySwitch-input"}),thumb:{className:"GallerySwitch-thumb"},track:{className:"GallerySwitch-track"}},defaultChecked:!0}),(0,eo.jsx)(q.r,{slotProps:{root:{className:"GallerySwitch"},input:(0,k.Z)((0,k.Z)({},eC),{},{className:"GallerySwitch-input"}),thumb:{className:"GallerySwitch-thumb"},track:{className:"GallerySwitch-track"}}}),(0,eo.jsx)(q.r,{slotProps:{root:{className:"GallerySwitch"},input:(0,k.Z)((0,k.Z)({},eC),{},{className:"GallerySwitch-input"}),thumb:{className:"GallerySwitch-thumb"},track:{className:"GallerySwitch-track"}},defaultChecked:!0,disabled:!0}),(0,eo.jsx)(q.r,{slotProps:{root:{className:"GallerySwitch"},input:(0,k.Z)((0,k.Z)({},eC),{},{className:"GallerySwitch-input"}),thumb:{className:"GallerySwitch-thumb"},track:{className:"GallerySwitch-track"}},disabled:!0})]}),(0,eo.jsx)("table",{"aria-label":"custom pagination table",children:(0,eo.jsx)("tfoot",{children:(0,eo.jsx)("tr",{children:(0,eo.jsx)(J.v,{className:"GalleryTablePagination",rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:13,rowsPerPage:eW,page:eE,onPageChange:function(e,a){eO(a)},onRowsPerPageChange:function(e){eL(P()(e.target.value,10)),eO(0)},slotProps:{select:{"aria-label":"rows per page"},actions:{showFirstButton:!0,showLastButton:!0,slots:{firstPageIcon:et.Z,lastPageIcon:es.Z,nextPageIcon:ei.Z,backPageIcon:er.Z}}}})})})}),g||(g=(0,eo.jsxs)(K.m,{defaultValue:0,children:[(0,eo.jsxs)(Q.d,{className:"GalleryTabsList",children:[(0,eo.jsx)($.O,{className:"GalleryTab",value:0,children:"Account"}),(0,eo.jsx)($.O,{className:"GalleryTab",value:1,children:"Notifications"}),(0,eo.jsx)($.O,{className:"GalleryTab",value:2,children:"Language"}),(0,eo.jsx)($.O,{className:"GalleryTab",value:3,disabled:!0,children:"Calendar"})]}),(0,eo.jsx)(U.x,{className:"GalleryTabPanel",value:0,children:"My account page"}),(0,eo.jsx)(U.x,{className:"GalleryTabPanel",value:1,children:"Profile page"}),(0,eo.jsx)(U.x,{className:"GalleryTabPanel",value:2,children:"Language page"}),(0,eo.jsx)(U.x,{className:"GalleryTabPanel",value:3,children:"Calendar page"})]}))]})}},39486:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/experiments/base/components-gallery",function(){return l(30379)}])}},function(e){e.O(0,[7146,9738,947,634,6430,7667,6609,1278,1481,9774,2888,179],function(){return e(e.s=39486)}),_N_E=e.O()}]);