(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6890],{40478:function(e,t,r){"use strict";r.d(t,{a:function(){return NoSsr}});var n=r(92379),s=r(6847),o=r(651);function NoSsr(e){let{children:t,defer:r=!1,fallback:a=null}=e,[i,c]=n.useState(!1);return(0,s.Z)(()=>{r||c(!0)},[r]),n.useEffect(()=>{r&&c(!0)},[r]),(0,o.jsx)(n.Fragment,{children:i?t:a})}},71023:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return TableHook}});var n,s=r(36063),o=r(65784),a=r(53020),i=r.n(a),c=r(92379),u=r(94458),l=r(187),f=r(44364);function mergeClasses(e={}){let{baseClasses:t,newClasses:r,Component:n}=e;if(!r)return t;let s=(0,l.Z)({},t);return Object.keys(r).forEach(e=>{r[e]&&(s[e]=`${t[e]} ${r[e]}`)}),s}var h={set:(e,t,r,n)=>{let s=e.get(t);s||(s=new Map,e.set(t,s)),s.set(r,n)},get:(e,t,r)=>{let n=e.get(t);return n?n.get(r):void 0},delete:(e,t,r)=>{let n=e.get(t);n.delete(r)}},y=r(30890),p=r(2697);let d=-1e9;var m=r(70043),b=r(3255);let v=["variant"];function isEmpty(e){return 0===e.length}var S={};let g=["name","classNamePrefix","Component","defaultTheme"];var C=r(40478),Z=r(651),_=["component"],createComponent=function(e){var t=function(e,t={}){let{name:r,classNamePrefix:n,Component:s,defaultTheme:o=S}=t,a=(0,u.Z)(t,g),i=function(e){let t="function"==typeof e;return{create:(r,n)=>{let s;try{s=t?e(r):e}catch(e){throw e}if(!n||!r.components||!r.components[n]||!r.components[n].styleOverrides&&!r.components[n].variants)return s;let o=r.components[n].styleOverrides||{},a=r.components[n].variants||[],i=(0,l.Z)({},s);return Object.keys(o).forEach(e=>{i[e]=(0,m.Z)(i[e]||{},o[e])}),a.forEach(e=>{let t=function(e){let{variant:t}=e,r=(0,u.Z)(e,v),n=t||"";return Object.keys(r).sort().forEach(t=>{"color"===t?n+=isEmpty(n)?e[t]:(0,b.Z)(e[t]):n+=`${isEmpty(n)?t:(0,b.Z)(t)}${(0,b.Z)(e[t].toString())}`}),n}(e.props);i[t]=(0,m.Z)(i[t]||{},e.style)}),i},options:{}}}(e),C=r||n||"makeStyles";return i.options={index:d+=1,name:r,meta:C,classNamePrefix:C},(e={})=>{let t=function(){var e;let t=(0,y.Z)();return null!=(e=null==t?void 0:t.$$material)?e:t}()||o,n=(0,l.Z)({},c.useContext(p.NU),a),u=c.useRef(),d=c.useRef();(function(e,t){let r;let n=c.useRef([]),s=c.useMemo(()=>({}),t);n.current!==s&&(n.current=s,r=e()),c.useEffect(()=>()=>{r&&r()},[s])})(()=>{let s={name:r,state:{},stylesCreator:i,stylesOptions:n,theme:t};return function({state:e,theme:t,stylesOptions:r,stylesCreator:n,name:s},o){if(r.disableGeneration)return;let a=h.get(r.sheetsManager,n,t);a||(a={refs:0,staticSheet:null,dynamicStyles:null},h.set(r.sheetsManager,n,t,a));let i=(0,l.Z)({},n.options,r,{theme:t,flip:"boolean"==typeof r.flip?r.flip:"rtl"===t.direction});i.generateId=i.serverGenerateClassName||i.generateClassName;let c=r.sheetsRegistry;if(0===a.refs){let e;r.sheetsCache&&(e=h.get(r.sheetsCache,n,t));let o=n.create(t,s);!e&&((e=r.jss.createStyleSheet(o,(0,l.Z)({link:!1},i))).attach(),r.sheetsCache&&h.set(r.sheetsCache,n,t,e)),c&&c.add(e),a.staticSheet=e,a.dynamicStyles=(0,f._$)(o)}if(a.dynamicStyles){let t=r.jss.createStyleSheet(a.dynamicStyles,(0,l.Z)({link:!0},i));t.update(o),t.attach(),e.dynamicSheet=t,e.classes=mergeClasses({baseClasses:a.staticSheet.classes,newClasses:t.classes}),c&&c.add(t)}else e.classes=a.staticSheet.classes;a.refs+=1}(s,e),d.current=!1,u.current=s,()=>{!function({state:e,theme:t,stylesOptions:r,stylesCreator:n}){if(r.disableGeneration)return;let s=h.get(r.sheetsManager,n,t);s.refs-=1;let o=r.sheetsRegistry;0===s.refs&&(h.delete(r.sheetsManager,n,t),r.jss.removeStyleSheet(s.staticSheet),o&&o.remove(s.staticSheet)),e.dynamicSheet&&(r.jss.removeStyleSheet(e.dynamicSheet),o&&o.remove(e.dynamicSheet))}(s)}},[t,i]),c.useEffect(()=>{d.current&&function({state:e},t){e.dynamicSheet&&e.dynamicSheet.update(t)}(u.current,e),d.current=!0});let m=function({state:e,stylesOptions:t},r,n){if(t.disableGeneration)return r||{};e.cacheClasses||(e.cacheClasses={value:null,lastProp:null,lastJSS:{}});let s=!1;return e.classes!==e.cacheClasses.lastJSS&&(e.cacheClasses.lastJSS=e.classes,s=!0),r!==e.cacheClasses.lastProp&&(e.cacheClasses.lastProp=r,s=!0),s&&(e.cacheClasses.value=mergeClasses({baseClasses:e.cacheClasses.lastJSS,newClasses:r,Component:n})),e.cacheClasses.value}(u.current,e.classes,s);return m}}({root:{background:"pink"}});return c.forwardRef(function(r,n){var a=r.component,i=void 0===a?e:a,c=(0,o.Z)(r,_),u=t();return(0,Z.jsx)(i,(0,s.Z)((0,s.Z)({ref:n},c),{},{className:u.root}))})},j=createComponent("table"),x=createComponent("thead"),P=createComponent("tr"),E=createComponent("td"),k=createComponent("tbody"),O={name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},w=i()(Array(100)).map(function(){return O});function TableHook(){return(0,Z.jsx)(C.a,{defer:!0,children:(0,Z.jsxs)(j,{children:[n||(n=(0,Z.jsx)(x,{children:(0,Z.jsxs)(P,{children:[(0,Z.jsx)(E,{children:"Dessert (100g serving)"}),(0,Z.jsx)(E,{children:"Calories"}),(0,Z.jsx)(E,{children:"Fat\xa0(g)"}),(0,Z.jsx)(E,{children:"Carbs\xa0(g)"}),(0,Z.jsx)(E,{children:"Protein\xa0(g)"})]})})),(0,Z.jsx)(k,{children:w.map(function(e,t){return(0,Z.jsxs)(P,{children:[(0,Z.jsx)(E,{component:"th",scope:"row",children:e.name}),(0,Z.jsx)(E,{children:e.calories}),(0,Z.jsx)(E,{children:e.fat}),(0,Z.jsx)(E,{children:e.carbs}),(0,Z.jsx)(E,{children:e.protein})]},t)})})]})})}},33137:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/performance/table-hook",function(){return r(71023)}])},65784:function(e,t,r){"use strict";r.d(t,{Z:function(){return _objectWithoutProperties}});var n=r(88078);function _objectWithoutProperties(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(n){var a=n(e);for(s=0;s<a.length;s++)r=a[s],t.includes(r)||({}).propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},28274:function(e,t,r){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return _arrayLikeToArray}})},30087:function(e,t,r){"use strict";function _assertThisInitialized(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return _assertThisInitialized}})},53096:function(e,t,r){"use strict";r.d(t,{Z:function(){return _inheritsLoose}});var n=r(60327);function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,n.Z)(e,t)}},60327:function(e,t,r){"use strict";function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}r.d(t,{Z:function(){return _setPrototypeOf}})},25452:function(e,t,r){"use strict";r.d(t,{Z:function(){return _toConsumableArray}});var n=r(28274),s=r(92480);function _toConsumableArray(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,s.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},80181:function(e,t,r){"use strict";r.d(t,{Z:function(){return toPropertyKey}});var n=r(8132);function toPropertyKey(e){var t=function(e,t){if("object"!=(0,n.Z)(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=(0,n.Z)(s))return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==(0,n.Z)(t)?t:t+""}},8132:function(e,t,r){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{Z:function(){return _typeof}})},92480:function(e,t,r){"use strict";r.d(t,{Z:function(){return _unsupportedIterableToArray}});var n=r(28274);function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=({}).toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[2697,9774,2888,179],function(){return e(e.s=33137)}),_N_E=e.O()}]);