"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{82372:function(e,t,l){l.d(t,{O:function(){return m}});var r=l(187),o=l(94458),n=l(92379),a=l(69974),s=l(62534),u=l(19982),i=l(34453),d=l(67747),c=l(68225),v=l(45514),f=l(28679),b=l(49465),h=l(37600);function tabValueGenerator(e){return e.size}var g=l(77539),C=l(38946),p=l(651);let P=["action","children","disabled","onChange","onClick","onFocus","slotProps","slots","value"],useUtilityClasses=e=>{let{selected:t,disabled:l}=e;return(0,s.Z)({root:["root",t&&"selected",l&&"disabled"]},(0,C.T)(u.V))},m=n.forwardRef(function(e,t){var l;let{children:s,disabled:u=!1,slotProps:C={},slots:m={},value:x}=e,R=(0,o.Z)(e,P),Z=n.useRef(),y=(0,a.Z)(Z,t),{active:T,highlighted:V,selected:U,getRootProps:k}=function(e){let{value:t,rootRef:l,disabled:o=!1,id:s}=e,u=n.useRef(null),g=(0,i.Z)(s),{value:C,selectionFollowsFocus:p,getTabPanelId:P}=(0,d.g)(),m=n.useMemo(()=>({disabled:o,ref:u,id:g}),[o,u,g]),{id:x,index:R,totalItemCount:Z}=(0,v.B)(null!=t?t:tabValueGenerator,m),{getRootProps:y,highlighted:T,selected:V}=(0,f.J)({item:x}),{getRootProps:U,rootRef:k,active:w,focusVisible:M,setFocusVisible:F}=(0,b.U)({disabled:o,focusableWhenDisabled:!p,type:"button"}),j=(0,a.Z)(u,l,k),z=void 0!==x?P(x):void 0;return{getRootProps:(e={})=>{let t=(0,c._)(e),l=(0,h.f)(y,U);return(0,r.Z)({},e,l(t),{role:"tab","aria-controls":z,"aria-selected":V,id:g,ref:j})},active:w,focusVisible:M,highlighted:T,index:R,rootRef:j,selected:V||x===C,setFocusVisible:F,totalTabsCount:Z}}((0,r.Z)({},e,{rootRef:y,value:x})),w=(0,r.Z)({},e,{active:T,disabled:u,highlighted:V,selected:U}),M=useUtilityClasses(w),F=null!=(l=m.root)?l:"button",j=(0,g.y)({elementType:F,getSlotProps:k,externalSlotProps:C.root,externalForwardedProps:R,additionalProps:{ref:t},ownerState:w,className:M.root});return(0,p.jsx)(F,(0,r.Z)({},j,{children:s}))})},19982:function(e,t,l){l.d(t,{V:function(){return getTabUtilityClass},m:function(){return n}});var r=l(6502),o=l(31429);function getTabUtilityClass(e){return(0,r.d)("Tab",e)}let n=(0,o.s)("Tab",["root","selected","disabled"])},49961:function(e,t,l){l.d(t,{x:function(){return p}});var r=l(187),o=l(94458),n=l(92379),a=l(77539),s=l(62534),u=l(6502),i=l(31429);let d="TabPanel";function getTabPanelUtilityClass(e){return(0,u.d)(d,e)}(0,i.s)(d,["root","hidden"]);var c=l(34453),v=l(69974),f=l(67747),b=l(45514);function tabPanelValueGenerator(e){return e.size}var h=l(38946),g=l(651);let C=["children","value","slotProps","slots"],useUtilityClasses=e=>{let{hidden:t}=e;return(0,s.Z)({root:["root",t&&"hidden"]},(0,h.T)(getTabPanelUtilityClass))},p=n.forwardRef(function(e,t){var l;let{children:s,slotProps:u={},slots:i={}}=e,d=(0,o.Z)(e,C),{hidden:h,getRootProps:p}=function(e){let{value:t,id:l,rootRef:o}=e,a=(0,f.g)();if(null===a)throw Error("No TabContext provided");let{value:s,getTabId:u}=a,i=(0,c.Z)(l),d=n.useRef(null),h=(0,v.Z)(d,o),g=n.useMemo(()=>({id:i,ref:d}),[i]),{id:C}=(0,b.B)(null!=t?t:tabPanelValueGenerator,g),p=C!==s,P=void 0!==C?u(C):void 0;return{hidden:p,getRootProps:(e={})=>(0,r.Z)({"aria-labelledby":null!=P?P:void 0,hidden:p,id:null!=i?i:void 0},e,{ref:h}),rootRef:h}}(e),P=(0,r.Z)({},e,{hidden:h}),m=useUtilityClasses(P),x=null!=(l=i.root)?l:"div",R=(0,a.y)({elementType:x,getSlotProps:p,externalSlotProps:u.root,externalForwardedProps:d,additionalProps:{role:"tabpanel",ref:t},ownerState:P,className:m.root});return(0,g.jsx)(x,(0,r.Z)({},R,{children:!h&&s}))})},6040:function(e,t,l){l.d(t,{m:function(){return C}});var r=l(187),o=l(94458),n=l(92379),a=l(77539),s=l(62534),u=l(6502),i=l(31429);let d="Tabs";function getTabsUtilityClass(e){return(0,u.d)(d,e)}(0,i.s)(d,["root","horizontal","vertical"]);var c=l(81987),v=l(35366),f=l(67747),b=l(651);function TabsProvider(e){let{value:t,children:l}=e,{direction:r,getItemIndex:o,onSelected:a,orientation:s,registerItem:u,registerTabIdLookup:i,selectionFollowsFocus:d,totalSubitemCount:c,value:h,getTabId:g,getTabPanelId:C}=t,p=n.useMemo(()=>({getItemIndex:o,registerItem:u,totalSubitemCount:c}),[u,o,c]),P=n.useMemo(()=>({direction:r,getTabId:g,getTabPanelId:C,onSelected:a,orientation:s,registerTabIdLookup:i,selectionFollowsFocus:d,value:h}),[r,g,C,a,s,i,d,h]);return(0,b.jsx)(v.s.Provider,{value:p,children:(0,b.jsx)(f.R.Provider,{value:P,children:l})})}var h=l(38946);let g=["children","value","defaultValue","orientation","direction","onChange","selectionFollowsFocus","slotProps","slots"],useUtilityClasses=e=>{let{orientation:t}=e;return(0,s.Z)({root:["root",t]},(0,h.T)(getTabsUtilityClass))},C=n.forwardRef(function(e,t){var l;let{children:s,orientation:u="horizontal",direction:i="ltr",slotProps:d={},slots:f={}}=e,h=(0,o.Z)(e,g),C=(0,r.Z)({},e,{orientation:u,direction:i}),{contextValue:p}=function(e){let{value:t,defaultValue:l,onChange:o,orientation:a="horizontal",direction:s="ltr",selectionFollowsFocus:u=!1}=e,[i,d]=(0,c.Z)({controlled:t,default:l,name:"Tabs",state:"value"}),f=n.useCallback((e,t)=>{d(t),null==o||o(e,t)},[o,d]),{subitems:b,contextValue:h}=(0,v.Y)(),g=n.useRef(()=>void 0),C=n.useCallback(e=>{var t;return null==(t=b.get(e))?void 0:t.id},[b]),p=n.useCallback(e=>g.current(e),[]),P=n.useCallback(e=>{g.current=e},[]);return{contextValue:(0,r.Z)({direction:s,getTabId:p,getTabPanelId:C,onSelected:f,orientation:a,registerTabIdLookup:P,selectionFollowsFocus:u,value:i},h)}}(C),P=useUtilityClasses(C),m=null!=(l=f.root)?l:"div",x=(0,a.y)({elementType:m,externalSlotProps:d.root,externalForwardedProps:h,additionalProps:{ref:t},ownerState:C,className:P.root});return(0,b.jsx)(m,(0,r.Z)({},x,{children:(0,b.jsx)(TabsProvider,{value:p,children:s})}))})},67747:function(e,t,l){l.d(t,{R:function(){return o},g:function(){return useTabsContext}});var r=l(92379);let o=r.createContext(null);function useTabsContext(){let e=r.useContext(o);if(null==e)throw Error("No TabsContext provided");return e}},38934:function(e,t,l){l.d(t,{d:function(){return x}});var r=l(187),o=l(94458),n=l(92379),a=l(62534),s=l(77539),u=l(6502),i=l(31429);let d="TabsList";function getTabsListUtilityClass(e){return(0,u.d)(d,e)}(0,i.s)(d,["root","horizontal","vertical"]);var c=l(67747);let v={valueChange:"valueChange"};var f=l(35366),b=l(10539),h=l(74338),g=l(25399);function tabsListReducer(e,t){if(t.type===v.valueChange)return(0,r.Z)({},e,{highlightedValue:t.value});let l=(0,h.R$)(e,t),{context:{selectionFollowsFocus:o}}=t;if(t.type===g.F.itemsChange){if(l.selectedValues.length>0)return(0,r.Z)({},l,{highlightedValue:l.selectedValues[0]});(0,h.Rl)(null,"reset",t.context)}return o&&null!=l.highlightedValue?(0,r.Z)({},l,{selectedValues:[l.highlightedValue]}):l}var C=l(38946),p=l(63812),P=l(651);function TabsListProvider(e){let{value:t,children:l}=e,{dispatch:r,getItemIndex:o,getItemState:a,registerItem:s,totalSubitemCount:u}=t,i=n.useMemo(()=>({dispatch:r,getItemState:a,getItemIndex:o}),[r,o,a]),d=n.useMemo(()=>({getItemIndex:o,registerItem:s,totalSubitemCount:u}),[s,o,u]);return(0,P.jsx)(f.s.Provider,{value:d,children:(0,P.jsx)(p.Z.Provider,{value:i,children:l})})}let m=["children","slotProps","slots"],useUtilityClasses=e=>{let{orientation:t}=e;return(0,a.Z)({root:["root",t]},(0,C.T)(getTabsListUtilityClass))},x=n.forwardRef(function(e,t){var l;let{children:a,slotProps:u={},slots:i={}}=e,d=(0,o.Z)(e,m),{isRtl:h,orientation:g,getRootProps:C,contextValue:p}=function(e){var t;let{rootRef:l}=e,{direction:o="ltr",onSelected:a,orientation:s="horizontal",value:u,registerTabIdLookup:i,selectionFollowsFocus:d}=(0,c.g)(),{subitems:h,contextValue:g}=(0,f.Y)(),C=n.useCallback(e=>{var t;return null==(t=h.get(e))?void 0:t.id},[h]);i(C);let p=n.useMemo(()=>Array.from(h.keys()),[h]),P=n.useCallback(e=>{var t,l;return null==e?null:null!=(t=null==(l=h.get(e))?void 0:l.ref.current)?t:null},[h]),m="rtl"===o,x=n.useCallback((e,t)=>{var l;a(e,null!=(l=t[0])?l:null)},[a]),R=n.useMemo(()=>void 0===u?{}:null!=u?{selectedValues:[u]}:{selectedValues:[]},[u]),Z=n.useCallback(e=>{var t,l;return null!=(t=null==(l=h.get(e))?void 0:l.disabled)&&t},[h]),{contextValue:y,dispatch:T,getRootProps:V,state:{highlightedValue:U,selectedValues:k},rootRef:w}=(0,b.s)({controlledProps:R,disabledItemsFocusable:!d,focusManagement:"DOM",getItemDomElement:P,isItemDisabled:Z,items:p,rootRef:l,onChange:x,orientation:"vertical"===s?"vertical":m?"horizontal-rtl":"horizontal-ltr",reducerActionContext:n.useMemo(()=>({selectionFollowsFocus:d||!1}),[d]),selectionMode:"single",stateReducer:tabsListReducer});n.useEffect(()=>{void 0!==u&&null!=u&&T({type:v.valueChange,value:u})},[T,u]);let M=n.useMemo(()=>(0,r.Z)({},g,y),[g,y]);return{contextValue:M,dispatch:T,getRootProps:(e={})=>(0,r.Z)({},e,V(e),{"aria-orientation":"vertical"===s?"vertical":void 0,role:"tablist"}),highlightedValue:U,isRtl:m,orientation:s,rootRef:w,selectedValue:null!=(t=k[0])?t:null}}({rootRef:t}),x=(0,r.Z)({},e,{isRtl:h,orientation:g}),R=useUtilityClasses(x),Z=null!=(l=i.root)?l:"div",y=(0,s.y)({elementType:Z,getSlotProps:C,externalSlotProps:u.root,externalForwardedProps:d,ownerState:x,className:R.root});return(0,P.jsx)(TabsListProvider,{value:p,children:(0,P.jsx)(Z,(0,r.Z)({},y,{children:a}))})})}}]);