"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2208],{65843:function(e,t,r){r.d(t,{Z:function(){return createCssVarsProvider}});var o=r(187),s=r(94458),n=r(96091),l=r(92379),a=r(70043),c=r(71584),i=r(30890),d=r(5313),m=r(651);let h="mode",u="color-scheme",f="data-color-scheme";function getSystemMode(e){if("undefined"!=typeof window&&"system"===e){let e=window.matchMedia("(prefers-color-scheme: dark)");return e.matches?"dark":"light"}}function processState(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function initializeValue(e,t){let r;if("undefined"!=typeof window){try{(r=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return r||t}}let g=["colorSchemes","components","generateCssVars","cssVarPrefix"];function createCssVarsProvider(e){let{themeId:t,theme:r={},attribute:y=f,modeStorageKey:p=h,colorSchemeStorageKey:S=u,defaultMode:v="light",defaultColorScheme:$,disableTransitionOnChange:k=!1,resolveTheme:C,excludeVariablesFromRoot:w}=e;r.colorSchemes&&("string"!=typeof $||r.colorSchemes[$])&&("object"!=typeof $||r.colorSchemes[null==$?void 0:$.light])&&("object"!=typeof $||r.colorSchemes[null==$?void 0:$.dark])||console.error(`MUI: \`${$}\` does not exist in \`theme.colorSchemes\`.`);let b=l.createContext(void 0),Z="string"==typeof $?$:$.light,V="string"==typeof $?$:$.dark;return{CssVarsProvider:function(e){let{children:n,theme:f=r,modeStorageKey:Z=p,colorSchemeStorageKey:V=S,attribute:j=y,defaultMode:x=v,defaultColorScheme:E=$,disableTransitionOnChange:I=k,storageWindow:M="undefined"==typeof window?void 0:window,documentNode:O="undefined"==typeof document?void 0:document,colorSchemeNode:P="undefined"==typeof document?void 0:document.documentElement,colorSchemeSelector:_=":root",disableNestedContext:K=!1,disableStyleSheetGeneration:N=!1}=e,z=l.useRef(!1),A=(0,i.Z)(),L=l.useContext(b),W=!!L&&!K,T=f[t],D=T||f,{colorSchemes:H={},components:q={},generateCssVars:F=()=>({vars:{},css:{}}),cssVarPrefix:G}=D,R=(0,s.Z)(D,g),U=Object.keys(H),B="string"==typeof E?E:E.light,J="string"==typeof E?E:E.dark,{mode:Q,setMode:X,systemMode:Y,lightColorScheme:ee,darkColorScheme:et,colorScheme:er,setColorScheme:eo}=function(e){let{defaultMode:t="light",defaultLightColorScheme:r,defaultDarkColorScheme:s,supportedColorSchemes:n=[],modeStorageKey:a=h,colorSchemeStorageKey:c=u,storageWindow:i="undefined"==typeof window?void 0:window}=e,d=n.join(","),[m,f]=l.useState(()=>{let e=initializeValue(a,t),o=initializeValue(`${c}-light`,r),n=initializeValue(`${c}-dark`,s);return{mode:e,systemMode:getSystemMode(e),lightColorScheme:o,darkColorScheme:n}}),g=processState(m,e=>"light"===e?m.lightColorScheme:"dark"===e?m.darkColorScheme:void 0),y=l.useCallback(e=>{f(r=>{if(e===r.mode)return r;let s=null!=e?e:t;try{localStorage.setItem(a,s)}catch(e){}return(0,o.Z)({},r,{mode:s,systemMode:getSystemMode(s)})})},[a,t]),p=l.useCallback(e=>{e?"string"==typeof e?e&&!d.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):f(t=>{let r=(0,o.Z)({},t);return processState(t,t=>{try{localStorage.setItem(`${c}-${t}`,e)}catch(e){}"light"===t&&(r.lightColorScheme=e),"dark"===t&&(r.darkColorScheme=e)}),r}):f(t=>{let n=(0,o.Z)({},t),l=null===e.light?r:e.light,a=null===e.dark?s:e.dark;if(l){if(d.includes(l)){n.lightColorScheme=l;try{localStorage.setItem(`${c}-light`,l)}catch(e){}}else console.error(`\`${l}\` does not exist in \`theme.colorSchemes\`.`)}if(a){if(d.includes(a)){n.darkColorScheme=a;try{localStorage.setItem(`${c}-dark`,a)}catch(e){}}else console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`)}return n}):f(e=>{try{localStorage.setItem(`${c}-light`,r),localStorage.setItem(`${c}-dark`,s)}catch(e){}return(0,o.Z)({},e,{lightColorScheme:r,darkColorScheme:s})})},[d,c,r,s]),S=l.useCallback(e=>{"system"===m.mode&&f(t=>{let r=null!=e&&e.matches?"dark":"light";return t.systemMode===r?t:(0,o.Z)({},t,{systemMode:r})})},[m.mode]),v=l.useRef(S);return v.current=S,l.useEffect(()=>{let handler=(...e)=>v.current(...e),e=window.matchMedia("(prefers-color-scheme: dark)");return e.addListener(handler),handler(e),()=>{e.removeListener(handler)}},[]),l.useEffect(()=>{if(i){let handleStorage=e=>{let r=e.newValue;"string"==typeof e.key&&e.key.startsWith(c)&&(!r||d.match(r))&&(e.key.endsWith("light")&&p({light:r}),e.key.endsWith("dark")&&p({dark:r})),e.key===a&&(!r||["light","dark","system"].includes(r))&&y(r||t)};return i.addEventListener("storage",handleStorage),()=>{i.removeEventListener("storage",handleStorage)}}},[p,y,a,c,d,t,i]),(0,o.Z)({},m,{colorScheme:g,setMode:y,setColorScheme:p})}({supportedColorSchemes:U,defaultLightColorScheme:B,defaultDarkColorScheme:J,modeStorageKey:Z,colorSchemeStorageKey:V,defaultMode:x,storageWindow:M}),es=Q,en=er;W&&(es=L.mode,en=L.colorScheme);let el=es||("system"===x?v:x),ea=en||("dark"===el?J:B),{css:ec,vars:ei}=F(),ed=(0,o.Z)({},R,{components:q,colorSchemes:H,cssVarPrefix:G,vars:ei,getColorSchemeSelector:e=>`[${j}="${e}"] &`}),em={},eh={};Object.entries(H).forEach(([e,t])=>{let{css:r,vars:s}=F(e);ed.vars=(0,a.Z)(ed.vars,s),e===ea&&(Object.keys(t).forEach(e=>{t[e]&&"object"==typeof t[e]?ed[e]=(0,o.Z)({},ed[e],t[e]):ed[e]=t[e]}),ed.palette&&(ed.palette.colorScheme=e));let n="string"==typeof E?E:"dark"===x?E.dark:E.light;if(e===n){if(w){let t={};w(G).forEach(e=>{t[e]=r[e],delete r[e]}),em[`[${j}="${e}"]`]=t}em[`${_}, [${j}="${e}"]`]=r}else eh[`${":root"===_?"":_}[${j}="${e}"]`]=r}),ed.vars=(0,a.Z)(ed.vars,ei),l.useEffect(()=>{en&&P&&P.setAttribute(j,en)},[en,j,P]),l.useEffect(()=>{let e;if(I&&z.current&&O){let t=O.createElement("style");t.appendChild(O.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),O.head.appendChild(t),window.getComputedStyle(O.body),e=setTimeout(()=>{O.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[en,I,O]),l.useEffect(()=>(z.current=!0,()=>{z.current=!1}),[]);let eu=l.useMemo(()=>({allColorSchemes:U,colorScheme:en,darkColorScheme:et,lightColorScheme:ee,mode:es,setColorScheme:eo,setMode:X,systemMode:Y}),[U,en,et,ee,es,eo,X,Y]),ef=!0;(N||W&&(null==A?void 0:A.cssVarPrefix)===G)&&(ef=!1);let eg=(0,m.jsxs)(l.Fragment,{children:[ef&&(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)(c.Z,{styles:{[_]:ec}}),(0,m.jsx)(c.Z,{styles:em}),(0,m.jsx)(c.Z,{styles:eh})]}),(0,m.jsx)(d.Z,{themeId:T?t:void 0,theme:C?C(ed):ed,children:n})]});return W?eg:(0,m.jsx)(b.Provider,{value:eu,children:eg})},useColorScheme:()=>{let e=l.useContext(b);if(!e)throw Error((0,n.Z)(19));return e},getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="light",defaultLightColorScheme:r="light",defaultDarkColorScheme:o="dark",modeStorageKey:s=h,colorSchemeStorageKey:n=u,attribute:l=f,colorSchemeNode:a="document.documentElement",nonce:c}=e||{};return(0,m.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  var mode = localStorage.getItem('${s}') || '${t}';
  var colorScheme = '';
  if (mode === 'system') {
    // handle system mode
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = localStorage.getItem('${n}-dark') || '${o}';
    } else {
      colorScheme = localStorage.getItem('${n}-light') || '${r}';
    }
  }
  if (mode === 'light') {
    colorScheme = localStorage.getItem('${n}-light') || '${r}';
  }
  if (mode === 'dark') {
    colorScheme = localStorage.getItem('${n}-dark') || '${o}';
  }
  if (colorScheme) {
    ${a}.setAttribute('${l}', colorScheme);
  }
} catch(e){}})();`}},"mui-color-scheme-init")})((0,o.Z)({attribute:y,colorSchemeStorageKey:S,defaultMode:v,defaultLightColorScheme:Z,defaultDarkColorScheme:V,modeStorageKey:p},e))}}},36079:function(e,t,r){r.d(t,{Z:function(){return createGetCssVar}});function createGetCssVar(e=""){return(t,...r)=>`var(--${e?`${e}-`:""}${t}${function appendVar(...t){if(!t.length)return"";let r=t[0];return"string"!=typeof r||r.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, ${r}`:`, var(--${e?`${e}-`:""}${r}${appendVar(...t.slice(1))})`}(...r)})`}},29200:function(e,t,r){r.d(t,{Z:function(){return cssVars_prepareCssVars}});var o=r(187),s=r(80181),n=r(94458),l=r(70043);let assignNestedKeys=(e,t,r,o=[])=>{let s=e;t.forEach((e,n)=>{n===t.length-1?Array.isArray(s)?s[Number(e)]=r:s&&"object"==typeof s&&(s[e]=r):s&&"object"==typeof s&&(s[e]||(s[e]=o.includes(e)?[]:{}),s=s[e])})},walkObjectDeep=(e,t,r)=>{!function recurse(e,o=[],s=[]){Object.entries(e).forEach(([e,n])=>{r&&(!r||r([...o,e]))||null==n||("object"==typeof n&&Object.keys(n).length>0?recurse(n,[...o,e],Array.isArray(n)?[...s,e]:s):t([...o,e],n,s))})}(e)},getCssValue=(e,t)=>{if("number"==typeof t){if(["lineHeight","fontWeight","opacity","zIndex"].some(t=>e.includes(t)))return t;let r=e[e.length-1];return r.toLowerCase().indexOf("opacity")>=0?t:`${t}px`}return t};function cssVarsParser(e,t){let{prefix:r,shouldSkipGeneratingVar:o}=t||{},s={},n={},l={};return walkObjectDeep(e,(e,t,a)=>{if(("string"==typeof t||"number"==typeof t)&&(!o||!o(e,t))){let o=`--${r?`${r}-`:""}${e.join("-")}`;Object.assign(s,{[o]:getCssValue(e,t)}),assignNestedKeys(n,e,`var(${o})`,a),assignNestedKeys(l,e,`var(${o}, ${t})`,a)}},e=>"vars"===e[0]),{css:s,vars:n,varsWithDefaults:l}}let a=["colorSchemes","components","defaultColorScheme"];var cssVars_prepareCssVars=function(e,t){let{colorSchemes:r={},defaultColorScheme:c="light"}=e,i=(0,n.Z)(e,a),{vars:d,css:m,varsWithDefaults:h}=cssVarsParser(i,t),u=h,f={},{[c]:g}=r,y=(0,n.Z)(r,[c].map(s.Z));if(Object.entries(y||{}).forEach(([e,r])=>{let{vars:o,css:s,varsWithDefaults:n}=cssVarsParser(r,t);u=(0,l.Z)(u,n),f[e]={css:s,vars:o}}),g){let{css:e,vars:r,varsWithDefaults:o}=cssVarsParser(g,t);u=(0,l.Z)(u,o),f[c]={css:e,vars:r}}return{vars:u,generateCssVars:e=>{var r,s;if(!e){let r=(0,o.Z)({},m);return{css:r,vars:d,selector:(null==t||null==(s=t.getSelector)?void 0:s.call(t,e,r))||":root"}}let n=(0,o.Z)({},f[e].css);return{css:n,vars:f[e].vars,selector:(null==t||null==(r=t.getSelector)?void 0:r.call(t,e,n))||":root"}}}}}}]);