(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8840],{71921:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Page}});var t,i,a,o,s=n(92379),u=n(19473),c=n(53710),d=n(33322),l=n(21174),p=n(88346),m=n(90714),f=n(93069),g=n(84245),h=n(67803),Z=n(2663),x=n(62918),b=n(20997),v=n(43027),j=n(651),y=(0,v.Z)(function(){var r=s.useState(!1),e=(0,c.Z)(r,2),n=e[0],o=e[1];return(0,j.jsxs)(s.Fragment,{children:[t||(t=(0,j.jsx)(f.Z,{})),(0,j.jsxs)(g.Z,{children:[i||(i=(0,j.jsxs)(s.Fragment,{children:[(0,j.jsx)(p.Z,{variant:"h3",gutterBottom:!0,marked:"center",align:"center",children:"Forgot your password?"}),(0,j.jsx)(p.Z,{variant:"body2",align:"center",children:"Enter your email address below and we'll send you a link to reset your password."})]})),(0,j.jsx)(d.l0,{onSubmit:function(){o(!0)},subscription:{submitting:!0},validate:function(r){var e=(0,h.C)(["email"],r);if(!e.email){var n=(0,h.D)(r.email);n&&(e.email=n)}return e},children:function(r){var e=r.handleSubmit,t=r.submitting;return(0,j.jsxs)(l.Z,{component:"form",onSubmit:e,noValidate:!0,sx:{mt:6},children:[(0,j.jsx)(d.gN,{autoFocus:!0,autoComplete:"email",component:Z.Z,disabled:t||n,fullWidth:!0,label:"Email",margin:"normal",name:"email",required:!0,size:"large"}),(0,j.jsx)(d.lP,{subscription:{submitError:!0},children:function(r){var e=r.submitError;return e?(0,j.jsx)(b.Z,{error:!0,sx:{mt:2},children:e}):null}}),(0,j.jsx)(x.Z,{sx:{mt:3,mb:2},disabled:t||n,size:"large",color:"secondary",fullWidth:!0,children:t||n?"In progress…":"Send reset link"})]})}})]}),a||(a=(0,j.jsx)(m.Z,{}))]})});function Page(){return o||(o=(0,j.jsx)(u.Z,{title:"Onepirate theme - SUI",description:"A onepirate theme",children:(0,j.jsx)(y,{})}))}},72468:function(r,e,n){"use strict";var t=n(36063),i=n(5652),a=n(26370),o=n(651),s=(0,i.ZP)(a.Z)(function(r){var e=r.theme,n=r.size;return(0,t.Z)((0,t.Z)({borderRadius:0,fontWeight:e.typography.fontWeightMedium,fontFamily:e.typography.h1.fontFamily,padding:e.spacing(2,4),fontSize:e.typography.pxToRem(14),boxShadow:"none","&:active, &:focus":{boxShadow:"none"}},"small"===n&&{padding:e.spacing(1,3),fontSize:e.typography.pxToRem(13)}),"large"===n&&{padding:e.spacing(2,5),fontSize:e.typography.pxToRem(16)})});e.Z=function(r){return(0,o.jsx)(s,(0,t.Z)({},r))}},62918:function(r,e,n){"use strict";n.d(e,{Z:function(){return l}});var t,i=n(36063),a=n(65784),o=n(72468),s=n(53710),u=n(92379),c=n(651),d=["disabled","mounted"],l=(t=function(r){var e=r.disabled,n=r.mounted,t=(0,a.Z)(r,d);return(0,c.jsx)(o.Z,(0,i.Z)({disabled:!n||!!e,type:"submit",variant:"contained"},t))},function(r){var e=u.useState(!1),n=(0,s.Z)(e,2),a=n[0],o=n[1];return u.useEffect(function(){o(!0)},[]),(0,c.jsx)(t,(0,i.Z)({mounted:a},r))})},20997:function(r,e,n){"use strict";n.d(e,{Z:function(){return FormFeedback}});var t=n(65784),i=n(36063),a=n(5652),o=n(88346),s=n(651),u=["className","children","error","success"],c=(0,a.ZP)("div",{shouldForwardProp:function(r){return"error"!==r&&"success"!==r}})(function(r){var e=r.theme,n=r.error,t=r.success;return(0,i.Z)((0,i.Z)({padding:e.spacing(2)},n&&{backgroundColor:e.palette.error.light,color:e.palette.error.dark}),t&&{backgroundColor:e.palette.success.light,color:e.palette.success.dark})});function FormFeedback(r){var e=r.className,n=r.children,a=r.error,d=r.success,l=(0,t.Z)(r,u);return(0,s.jsx)(c,(0,i.Z)((0,i.Z)({error:a,success:d,className:e},l),{},{children:(0,s.jsx)(o.Z,{color:"inherit",children:n})}))}},2663:function(r,e,n){"use strict";var t=n(36063),i=n(65784),a=n(68505),o=n(651),s=["autoComplete","input","InputProps","meta"];e.Z=function(r){var e=r.autoComplete,n=r.input,u=r.InputProps,c=r.meta,d=c.touched,l=c.error,p=c.submitError,m=(0,i.Z)(r,s);return(0,o.jsx)(a.Z,(0,t.Z)((0,t.Z)((0,t.Z)({error:!!(d&&(l||p))},n),m),{},{InputProps:(0,t.Z)({inputProps:{autoComplete:e}},u),helperText:d?l||p:"",variant:"standard"}))}},67803:function(r,e,n){"use strict";n.d(e,{C:function(){return required},D:function(){return email}});var t=n(43640),i=n(36063);function email(r){var e;return r&&(e=r.trim(),!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(e))?"Invalid email":null}function required(r,e){return r.reduce(function(r,n){var a;return(0,i.Z)((0,i.Z)({},r),(a=e[n])||0===a?void 0:(0,t.Z)({},n,"Required"))},{})}},84245:function(r,e,n){"use strict";n.d(e,{Z:function(){return AppForm}});var t=n(26719),i=n(21174),a=n(65784),o=n(36063),s=n(82145),u=n(5652),c=n(651),d=["background","classes","className","padding"],l=(0,u.ZP)(s.Z,{shouldForwardProp:function(r){return"background"!==r&&"padding"!==r}})(function(r){var e=r.theme,n=r.background,t=r.padding;return(0,o.Z)({backgroundColor:e.palette.secondary[n]},t&&{padding:e.spacing(1)})});function Paper_Paper(r){var e=r.background,n=(r.classes,r.className),t=r.padding,i=(0,a.Z)(r,d);return(0,c.jsx)(l,(0,o.Z)({square:!0,elevation:0,background:e,padding:void 0!==t&&t,className:n},i))}function AppForm(r){var e=r.children;return(0,c.jsx)(i.Z,{sx:{display:"flex",backgroundImage:"url(/static/onepirate/appCurvyLines.png)",backgroundRepeat:"no-repeat"},children:(0,c.jsx)(t.Z,{maxWidth:"sm",children:(0,c.jsx)(i.Z,{sx:{mt:7,mb:12},children:(0,c.jsx)(Paper_Paper,{background:"light",sx:{py:{xs:4,md:8},px:{xs:3,md:6}},children:e})})})})}},70100:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/premium-themes/onepirate/forgot-password",function(){return n(71921)}])}},function(r){r.O(0,[9477,6221,3989,7900,8657,6985,6417,9774,2888,179],function(){return r(r.s=70100)}),_N_E=r.O()}]);