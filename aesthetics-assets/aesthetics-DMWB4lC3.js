(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Fd={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function xM(){if(H_)return El;H_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var u=null;if(l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:l}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var G_;function SM(){return G_||(G_=1,Fd.exports=xM()),Fd.exports}var Se=SM(),Hd={exports:{}},Te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function yM(){if(V_)return Te;V_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function S(I,st,xt){this.props=I,this.context=st,this.refs=y,this.updater=xt||M}S.prototype.isReactComponent={},S.prototype.setState=function(I,st){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,st,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(I,st,xt){this.props=I,this.context=st,this.refs=y,this.updater=xt||M}var A=N.prototype=new C;A.constructor=N,w(A,S.prototype),A.isPureReactComponent=!0;var P=Array.isArray;function D(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function z(I,st,xt){var zt=xt.ref;return{$$typeof:s,type:I,key:st,ref:zt!==void 0?zt:null,props:xt}}function F(I,st){return z(I.type,st,I.props)}function q(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function Z(I){var st={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xt){return st[xt]})}var it=/\/+/g;function Y(I,st){return typeof I=="object"&&I!==null&&I.key!=null?Z(""+I.key):st.toString(36)}function tt(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(D,D):(I.status="pending",I.then(function(st){I.status==="pending"&&(I.status="fulfilled",I.value=st)},function(st){I.status==="pending"&&(I.status="rejected",I.reason=st)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function H(I,st,xt,zt,Vt){var qt=typeof I;(qt==="undefined"||qt==="boolean")&&(I=null);var ot=!1;if(I===null)ot=!0;else switch(qt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(I.$$typeof){case s:case t:ot=!0;break;case g:return ot=I._init,H(ot(I._payload),st,xt,zt,Vt)}}if(ot)return Vt=Vt(I),ot=zt===""?"."+Y(I,0):zt,P(Vt)?(xt="",ot!=null&&(xt=ot.replace(it,"$&/")+"/"),H(Vt,st,xt,"",function(Yt){return Yt})):Vt!=null&&(q(Vt)&&(Vt=F(Vt,xt+(Vt.key==null||I&&I.key===Vt.key?"":(""+Vt.key).replace(it,"$&/")+"/")+ot)),st.push(Vt)),1;ot=0;var $=zt===""?".":zt+":";if(P(I))for(var wt=0;wt<I.length;wt++)zt=I[wt],qt=$+Y(zt,wt),ot+=H(zt,st,xt,qt,Vt);else if(wt=x(I),typeof wt=="function")for(I=wt.call(I),wt=0;!(zt=I.next()).done;)zt=zt.value,qt=$+Y(zt,wt++),ot+=H(zt,st,xt,qt,Vt);else if(qt==="object"){if(typeof I.then=="function")return H(tt(I),st,xt,zt,Vt);throw st=String(I),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return ot}function V(I,st,xt){if(I==null)return I;var zt=[],Vt=0;return H(I,zt,"","",function(qt){return st.call(xt,qt,Vt++)}),zt}function ht(I){if(I._status===-1){var st=I._result;st=st(),st.then(function(xt){(I._status===0||I._status===-1)&&(I._status=1,I._result=xt)},function(xt){(I._status===0||I._status===-1)&&(I._status=2,I._result=xt)}),I._status===-1&&(I._status=0,I._result=st)}if(I._status===1)return I._result.default;throw I._result}var at=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},mt={map:V,forEach:function(I,st,xt){V(I,function(){st.apply(this,arguments)},xt)},count:function(I){var st=0;return V(I,function(){st++}),st},toArray:function(I){return V(I,function(st){return st})||[]},only:function(I){if(!q(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return Te.Activity=_,Te.Children=mt,Te.Component=S,Te.Fragment=n,Te.Profiler=o,Te.PureComponent=N,Te.StrictMode=a,Te.Suspense=d,Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Te.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},Te.cache=function(I){return function(){return I.apply(null,arguments)}},Te.cacheSignal=function(){return null},Te.cloneElement=function(I,st,xt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var zt=w({},I.props),Vt=I.key;if(st!=null)for(qt in st.key!==void 0&&(Vt=""+st.key),st)!E.call(st,qt)||qt==="key"||qt==="__self"||qt==="__source"||qt==="ref"&&st.ref===void 0||(zt[qt]=st[qt]);var qt=arguments.length-2;if(qt===1)zt.children=xt;else if(1<qt){for(var ot=Array(qt),$=0;$<qt;$++)ot[$]=arguments[$+2];zt.children=ot}return z(I.type,Vt,zt)},Te.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},Te.createElement=function(I,st,xt){var zt,Vt={},qt=null;if(st!=null)for(zt in st.key!==void 0&&(qt=""+st.key),st)E.call(st,zt)&&zt!=="key"&&zt!=="__self"&&zt!=="__source"&&(Vt[zt]=st[zt]);var ot=arguments.length-2;if(ot===1)Vt.children=xt;else if(1<ot){for(var $=Array(ot),wt=0;wt<ot;wt++)$[wt]=arguments[wt+2];Vt.children=$}if(I&&I.defaultProps)for(zt in ot=I.defaultProps,ot)Vt[zt]===void 0&&(Vt[zt]=ot[zt]);return z(I,qt,Vt)},Te.createRef=function(){return{current:null}},Te.forwardRef=function(I){return{$$typeof:f,render:I}},Te.isValidElement=q,Te.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ht}},Te.memo=function(I,st){return{$$typeof:p,type:I,compare:st===void 0?null:st}},Te.startTransition=function(I){var st=O.T,xt={};O.T=xt;try{var zt=I(),Vt=O.S;Vt!==null&&Vt(xt,zt),typeof zt=="object"&&zt!==null&&typeof zt.then=="function"&&zt.then(D,at)}catch(qt){at(qt)}finally{st!==null&&xt.types!==null&&(st.types=xt.types),O.T=st}},Te.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Te.use=function(I){return O.H.use(I)},Te.useActionState=function(I,st,xt){return O.H.useActionState(I,st,xt)},Te.useCallback=function(I,st){return O.H.useCallback(I,st)},Te.useContext=function(I){return O.H.useContext(I)},Te.useDebugValue=function(){},Te.useDeferredValue=function(I,st){return O.H.useDeferredValue(I,st)},Te.useEffect=function(I,st){return O.H.useEffect(I,st)},Te.useEffectEvent=function(I){return O.H.useEffectEvent(I)},Te.useId=function(){return O.H.useId()},Te.useImperativeHandle=function(I,st,xt){return O.H.useImperativeHandle(I,st,xt)},Te.useInsertionEffect=function(I,st){return O.H.useInsertionEffect(I,st)},Te.useLayoutEffect=function(I,st){return O.H.useLayoutEffect(I,st)},Te.useMemo=function(I,st){return O.H.useMemo(I,st)},Te.useOptimistic=function(I,st){return O.H.useOptimistic(I,st)},Te.useReducer=function(I,st,xt){return O.H.useReducer(I,st,xt)},Te.useRef=function(I){return O.H.useRef(I)},Te.useState=function(I){return O.H.useState(I)},Te.useSyncExternalStore=function(I,st,xt){return O.H.useSyncExternalStore(I,st,xt)},Te.useTransition=function(){return O.H.useTransition()},Te.version="19.2.7",Te}var k_;function R0(){return k_||(k_=1,Hd.exports=yM()),Hd.exports}var Li=R0(),Gd={exports:{}},Tl={},Vd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function MM(){return X_||(X_=1,(function(s){function t(H,V){var ht=H.length;H.push(V);t:for(;0<ht;){var at=ht-1>>>1,mt=H[at];if(0<o(mt,V))H[at]=V,H[ht]=mt,ht=at;else break t}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var V=H[0],ht=H.pop();if(ht!==V){H[0]=ht;t:for(var at=0,mt=H.length,I=mt>>>1;at<I;){var st=2*(at+1)-1,xt=H[st],zt=st+1,Vt=H[zt];if(0>o(xt,ht))zt<mt&&0>o(Vt,xt)?(H[at]=Vt,H[zt]=ht,at=zt):(H[at]=xt,H[st]=ht,at=st);else if(zt<mt&&0>o(Vt,ht))H[at]=Vt,H[zt]=ht,at=zt;else break t}}return V}function o(H,V){var ht=H.sortIndex-V.sortIndex;return ht!==0?ht:H.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,_=null,v=3,x=!1,M=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function A(H){for(var V=n(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=H)a(p),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(p)}}function P(H){if(w=!1,A(H),!M)if(n(d)!==null)M=!0,D||(D=!0,Z());else{var V=n(p);V!==null&&tt(P,V.startTime-H)}}var D=!1,O=-1,E=5,z=-1;function F(){return y?!0:!(s.unstable_now()-z<E)}function q(){if(y=!1,D){var H=s.unstable_now();z=H;var V=!0;try{t:{M=!1,w&&(w=!1,C(O),O=-1),x=!0;var ht=v;try{e:{for(A(H),_=n(d);_!==null&&!(_.expirationTime>H&&F());){var at=_.callback;if(typeof at=="function"){_.callback=null,v=_.priorityLevel;var mt=at(_.expirationTime<=H);if(H=s.unstable_now(),typeof mt=="function"){_.callback=mt,A(H),V=!0;break e}_===n(d)&&a(d),A(H)}else a(d);_=n(d)}if(_!==null)V=!0;else{var I=n(p);I!==null&&tt(P,I.startTime-H),V=!1}}break t}finally{_=null,v=ht,x=!1}V=void 0}}finally{V?Z():D=!1}}}var Z;if(typeof N=="function")Z=function(){N(q)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,Y=it.port2;it.port1.onmessage=q,Z=function(){Y.postMessage(null)}}else Z=function(){S(q,0)};function tt(H,V){O=S(function(){H(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var ht=v;v=V;try{return H()}finally{v=ht}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(H,V){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ht=v;v=H;try{return V()}finally{v=ht}},s.unstable_scheduleCallback=function(H,V,ht){var at=s.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?at+ht:at):ht=at,H){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=ht+mt,H={id:g++,callback:V,priorityLevel:H,startTime:ht,expirationTime:mt,sortIndex:-1},ht>at?(H.sortIndex=ht,t(p,H),n(d)===null&&H===n(p)&&(w?(C(O),O=-1):w=!0,tt(P,ht-at))):(H.sortIndex=mt,t(d,H),M||x||(M=!0,D||(D=!0,Z()))),H},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(H){var V=v;return function(){var ht=v;v=V;try{return H.apply(this,arguments)}finally{v=ht}}}})(kd)),kd}var W_;function bM(){return W_||(W_=1,Vd.exports=MM()),Vd.exports}var Xd={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_;function EM(){if(q_)return $n;q_=1;var s=R0();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$n.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},$n.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},$n.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},$n.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},$n.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},$n.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},$n.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},$n.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},$n.requestFormReset=function(d){a.d.r(d)},$n.unstable_batchedUpdates=function(d,p){return d(p)},$n.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},$n.useFormStatus=function(){return u.H.useHostTransitionStatus()},$n.version="19.2.7",$n}var Y_;function TM(){if(Y_)return Xd.exports;Y_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Xd.exports=EM(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function AM(){if(Z_)return Tl;Z_=1;var s=bM(),t=R0(),n=TM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,c=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){r=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return d(h),e;if(m===c)return d(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=h,c=m;else{for(var b=!1,L=h.child;L;){if(L===r){b=!0,r=h,c=m;break}if(L===c){b=!0,c=h,r=m;break}L=L.sibling}if(!b){for(L=m.child;L;){if(L===r){b=!0,r=m,c=h;break}if(L===c){b=!0,c=m,r=h;break}L=L.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case D:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case N:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:Y(e.type)||"Memo";case E:i=e._payload,e=e._init;try{return Y(e(i))}catch{}}return null}var tt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},at=[],mt=-1;function I(e){return{current:e}}function st(e){0>mt||(e.current=at[mt],at[mt]=null,mt--)}function xt(e,i){mt++,at[mt]=e.current,e.current=i}var zt=I(null),Vt=I(null),qt=I(null),ot=I(null);function $(e,i){switch(xt(qt,i),xt(Vt,e),xt(zt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?c_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=c_(i),e=u_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}st(zt),xt(zt,e)}function wt(){st(zt),st(Vt),st(qt)}function Yt(e){e.memoizedState!==null&&xt(ot,e);var i=zt.current,r=u_(i,e.type);i!==r&&(xt(Vt,e),xt(zt,r))}function Bt(e){Vt.current===e&&(st(zt),st(Vt)),ot.current===e&&(st(ot),Sl._currentValue=ht)}var Qt,Dt;function et(e){if(Qt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Qt=i&&i[1]||"",Dt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Dt}var gt=!1;function Et(e,i){if(!e||gt)return"";gt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var Pt=function(){throw Error()};if(Object.defineProperty(Pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Pt,[])}catch(Tt){var vt=Tt}Reflect.construct(e,[],Pt)}else{try{Pt.call()}catch(Tt){vt=Tt}e.call(Pt.prototype)}}else{try{throw Error()}catch(Tt){vt=Tt}(Pt=e())&&typeof Pt.catch=="function"&&Pt.catch(function(){})}}catch(Tt){if(Tt&&vt&&typeof Tt.stack=="string")return[Tt.stack,vt.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],L=m[1];if(b&&L){var W=b.split(`
`),pt=L.split(`
`);for(h=c=0;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;for(;h<pt.length&&!pt[h].includes("DetermineComponentFrameRoot");)h++;if(c===W.length||h===pt.length)for(c=W.length-1,h=pt.length-1;1<=c&&0<=h&&W[c]!==pt[h];)h--;for(;1<=c&&0<=h;c--,h--)if(W[c]!==pt[h]){if(c!==1||h!==1)do if(c--,h--,0>h||W[c]!==pt[h]){var Ut=`
`+W[c].replace(" at new "," at ");return e.displayName&&Ut.includes("<anonymous>")&&(Ut=Ut.replace("<anonymous>",e.displayName)),Ut}while(1<=c&&0<=h);break}}}finally{gt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?et(r):""}function At(e,i){switch(e.tag){case 26:case 27:case 5:return et(e.type);case 16:return et("Lazy");case 13:return e.child!==i&&i!==null?et("Suspense Fallback"):et("Suspense");case 19:return et("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return et("Activity");default:return""}}function Ct(e){try{var i="",r=null;do i+=At(e,r),r=e,e=e.return;while(e);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Ft=Object.prototype.hasOwnProperty,Ot=s.unstable_scheduleCallback,It=s.unstable_cancelCallback,le=s.unstable_shouldYield,X=s.unstable_requestPaint,pe=s.unstable_now,ve=s.unstable_getCurrentPriorityLevel,B=s.unstable_ImmediatePriority,T=s.unstable_UserBlockingPriority,nt=s.unstable_NormalPriority,lt=s.unstable_LowPriority,bt=s.unstable_IdlePriority,Ht=s.log,kt=s.unstable_setDisableYieldValue,_t=null,yt=null;function Gt(e){if(typeof Ht=="function"&&kt(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(_t,e)}catch{}}var $t=Math.clz32?Math.clz32:ce,Jt=Math.log,Kt=Math.LN2;function ce(e){return e>>>=0,e===0?32:31-(Jt(e)/Kt|0)|0}var fe=256,me=262144,K=4194304;function Xt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rt(e,i,r){var c=e.pendingLanes;if(c===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var L=c&134217727;return L!==0?(c=L&~m,c!==0?h=Xt(c):(b&=L,b!==0?h=Xt(b):r||(r=L&~e,r!==0&&(h=Xt(r))))):(L=c&~m,L!==0?h=Xt(L):b!==0?h=Xt(b):r||(r=c&~e,r!==0&&(h=Xt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Wt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function te(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R(){var e=K;return K<<=1,(K&62914560)===0&&(K=4194304),e}function k(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function ct(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q(e,i,r,c,h,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var L=e.entanglements,W=e.expirationTimes,pt=e.hiddenUpdates;for(r=b&~r;0<r;){var Ut=31-$t(r),Pt=1<<Ut;L[Ut]=0,W[Ut]=-1;var vt=pt[Ut];if(vt!==null)for(pt[Ut]=null,Ut=0;Ut<vt.length;Ut++){var Tt=vt[Ut];Tt!==null&&(Tt.lane&=-536870913)}r&=~Pt}c!==0&&Mt(e,c,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function Mt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var c=31-$t(i);e.entangledLanes|=i,e.entanglements[c]=e.entanglements[c]|1073741824|r&261930}function ie(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var c=31-$t(r),h=1<<c;h&i|e[c]&i&&(e[c]|=i),r&=~h}}function _e(e,i){var r=i&-i;return r=(r&42)!==0?1:Ne(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ne(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function In(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _n(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:L_(e.type))}function Ee(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var je=Math.random().toString(36).slice(2),Me="__reactFiber$"+je,De="__reactProps$"+je,xn="__reactContainer$"+je,Ta="__reactEvents$"+je,fc="__reactListeners$"+je,hc="__reactHandles$"+je,ks="__reactResources$"+je,ns="__reactMarker$"+je;function is(e){delete e[Me],delete e[De],delete e[Ta],delete e[fc],delete e[hc]}function Aa(e){var i=e[Me];if(i)return i;for(var r=e.parentNode;r;){if(i=r[xn]||r[Me]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=v_(e);e!==null;){if(r=e[Me])return r;e=v_(e)}return i}e=r,r=e.parentNode}return null}function wa(e){if(e=e[Me]||e[xn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Xs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function as(e){var i=e[ks];return i||(i=e[ks]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Rn(e){e[ns]=!0}var dc=new Set,zo={};function U(e,i){J(e,i),J(e+"Capture",i)}function J(e,i){for(zo[e]=i,e=0;e<i.length;e++)dc.add(i[e])}var St=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},ft={};function ee(e){return Ft.call(ft,e)?!0:Ft.call(ut,e)?!1:St.test(e)?ft[e]=!0:(ut[e]=!0,!1)}function re(e,i,r){if(ee(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function jt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function ae(e,i,r,c){if(c===null)e.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+c)}}function se(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(e,i,r){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,m=c.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ue(e){if(!e._valueTracker){var i=we(e)?"checked":"value";e._valueTracker=ze(e,i,""+e[i])}}function We(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return e&&(c=we(e)?e.checked?"true":"false":e.value),e=c,e!==r?(i.setValue(e),!0):!1}function hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var cn=/[\n"\\]/g;function Le(e){return e.replace(cn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Dn(e,i,r,c,h,m,b,L){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+se(i)):e.value!==""+se(i)&&(e.value=""+se(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Bn(e,b,se(i)):r!=null?Bn(e,b,se(r)):c!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?e.name=""+se(L):e.removeAttribute("name")}function oe(e,i,r,c,h,m,b,L){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){ue(e);return}r=r!=null?""+se(r):"",i=i!=null?""+se(i):r,L||i===e.value||(e.value=i),e.defaultValue=i}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=L?e.checked:!!c,e.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),ue(e)}function Bn(e,i,r){i==="number"&&hn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Pe(e,i,r,c){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&c&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,c&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function oi(e,i,r){if(i!=null&&(i=""+se(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+se(r):""}function Ti(e,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(tt(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=se(i),e.defaultValue=r,c=e.textContent,c===r&&c!==""&&c!==null&&(e.value=c),ue(e)}function li(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var ss=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ke(e,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":c?e.setProperty(i,r):typeof r!="number"||r===0||ss.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function mn(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var h in i)c=i[h],i.hasOwnProperty(h)&&r[h]!==c&&Ke(e,h,c)}else for(var m in i)i.hasOwnProperty(m)&&Ke(e,m,i[m])}function Bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var an=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ua=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qi(e){return ua.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var zf=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ar=null,wr=null;function lm(e){var i=wa(e);if(i&&(e=i.stateNode)){var r=e[De]||null;t:switch(e=i.stateNode,i.type){case"input":if(Dn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Le(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==e&&c.form===e.form){var h=c[De]||null;if(!h)throw Error(a(90));Dn(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===e.form&&We(c)}break t;case"textarea":oi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Pe(e,!!r.multiple,i,!1)}}}var Bf=!1;function cm(e,i,r){if(Bf)return e(i,r);Bf=!0;try{var c=e(i);return c}finally{if(Bf=!1,(Ar!==null||wr!==null)&&(tu(),Ar&&(i=Ar,e=wr,wr=Ar=null,lm(i),e)))for(i=0;i<e.length;i++)lm(e[i])}}function Io(e,i){var r=e.stateNode;if(r===null)return null;var c=r[De]||null;if(c===null)return null;r=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ff=!1;if(Ca)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{Ff=!1}var rs=null,Hf=null,pc=null;function um(){if(pc)return pc;var e,i=Hf,r=i.length,c,h="value"in rs?rs.value:rs.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var b=r-e;for(c=1;c<=b&&i[r-c]===h[m-c];c++);return pc=h.slice(e,1<c?1-c:void 0)}function mc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function gc(){return!0}function fm(){return!1}function vi(e){function i(r,c,h,m,b){this._reactName=r,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var L in e)e.hasOwnProperty(L)&&(r=e[L],this[L]=r?r(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?gc:fm,this.isPropagationStopped=fm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gc)},persist:function(){},isPersistent:gc}),i}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=vi(Ws),Fo=_({},Ws,{view:0,detail:0}),vS=vi(Fo),Gf,Vf,Ho,_c=_({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(Gf=e.screenX-Ho.screenX,Vf=e.screenY-Ho.screenY):Vf=Gf=0,Ho=e),Gf)},movementY:function(e){return"movementY"in e?e.movementY:Vf}}),hm=vi(_c),_S=_({},_c,{dataTransfer:0}),xS=vi(_S),SS=_({},Fo,{relatedTarget:0}),kf=vi(SS),yS=_({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=vi(yS),bS=_({},Ws,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ES=vi(bS),TS=_({},Ws,{data:0}),dm=vi(TS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=CS[e])?!!i[e]:!1}function Xf(){return RS}var DS=_({},Fo,{key:function(e){if(e.key){var i=AS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=mc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(e){return e.type==="keypress"?mc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),US=vi(DS),NS=_({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pm=vi(NS),LS=_({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),PS=vi(LS),OS=_({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),zS=vi(OS),IS=_({},_c,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=vi(IS),FS=_({},Ws,{newState:0,oldState:0}),HS=vi(FS),GS=[9,13,27,32],Wf=Ca&&"CompositionEvent"in window,Go=null;Ca&&"documentMode"in document&&(Go=document.documentMode);var VS=Ca&&"TextEvent"in window&&!Go,mm=Ca&&(!Wf||Go&&8<Go&&11>=Go),gm=" ",vm=!1;function _m(e,i){switch(e){case"keyup":return GS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function kS(e,i){switch(e){case"compositionend":return xm(i);case"keypress":return i.which!==32?null:(vm=!0,gm);case"textInput":return e=i.data,e===gm&&vm?null:e;default:return null}}function XS(e,i){if(Cr)return e==="compositionend"||!Wf&&_m(e,i)?(e=um(),pc=Hf=rs=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return mm&&i.locale!=="ko"?null:i.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!WS[e.type]:i==="textarea"}function ym(e,i,r,c){Ar?wr?wr.push(c):wr=[c]:Ar=c,i=ou(i,"onChange"),0<i.length&&(r=new vc("onChange","change",null,r,c),e.push({event:r,listeners:i}))}var Vo=null,ko=null;function qS(e){i_(e,0)}function xc(e){var i=Xs(e);if(We(i))return e}function Mm(e,i){if(e==="change")return i}var bm=!1;if(Ca){var qf;if(Ca){var Yf="oninput"in document;if(!Yf){var Em=document.createElement("div");Em.setAttribute("oninput","return;"),Yf=typeof Em.oninput=="function"}qf=Yf}else qf=!1;bm=qf&&(!document.documentMode||9<document.documentMode)}function Tm(){Vo&&(Vo.detachEvent("onpropertychange",Am),ko=Vo=null)}function Am(e){if(e.propertyName==="value"&&xc(ko)){var i=[];ym(i,ko,e,If(e)),cm(qS,i)}}function YS(e,i,r){e==="focusin"?(Tm(),Vo=i,ko=r,Vo.attachEvent("onpropertychange",Am)):e==="focusout"&&Tm()}function ZS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xc(ko)}function KS(e,i){if(e==="click")return xc(i)}function JS(e,i){if(e==="input"||e==="change")return xc(i)}function QS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ai=typeof Object.is=="function"?Object.is:QS;function Xo(e,i){if(Ai(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var h=r[c];if(!Ft.call(i,h)||!Ai(e[h],i[h]))return!1}return!0}function wm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cm(e,i){var r=wm(e);e=0;for(var c;r;){if(r.nodeType===3){if(c=e+r.textContent.length,e<=i&&c>=i)return{node:r,offset:i-e};e=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=wm(r)}}function Rm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Rm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Dm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=hn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=hn(e.document)}return i}function Zf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jS=Ca&&"documentMode"in document&&11>=document.documentMode,Rr=null,Kf=null,Wo=null,Jf=!1;function Um(e,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Jf||Rr==null||Rr!==hn(c)||(c=Rr,"selectionStart"in c&&Zf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Wo&&Xo(Wo,c)||(Wo=c,c=ou(Kf,"onSelect"),0<c.length&&(i=new vc("onSelect","select",null,i,r),e.push({event:i,listeners:c}),i.target=Rr)))}function qs(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Dr={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},Qf={},Nm={};Ca&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ys(e){if(Qf[e])return Qf[e];if(!Dr[e])return e;var i=Dr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in Nm)return Qf[e]=i[r];return e}var Lm=Ys("animationend"),Pm=Ys("animationiteration"),Om=Ys("animationstart"),$S=Ys("transitionrun"),ty=Ys("transitionstart"),ey=Ys("transitioncancel"),zm=Ys("transitionend"),Im=new Map,jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jf.push("scrollEnd");function ji(e,i){Im.set(e,i),U(i,[e])}var Sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Hi=[],Ur=0,$f=0;function yc(){for(var e=Ur,i=$f=Ur=0;i<e;){var r=Hi[i];Hi[i++]=null;var c=Hi[i];Hi[i++]=null;var h=Hi[i];Hi[i++]=null;var m=Hi[i];if(Hi[i++]=null,c!==null&&h!==null){var b=c.pending;b===null?h.next=h:(h.next=b.next,b.next=h),c.pending=h}m!==0&&Bm(r,h,m)}}function Mc(e,i,r,c){Hi[Ur++]=e,Hi[Ur++]=i,Hi[Ur++]=r,Hi[Ur++]=c,$f|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function th(e,i,r,c){return Mc(e,i,r,c),bc(e)}function Zs(e,i){return Mc(e,null,null,i),bc(e)}function Bm(e,i,r){e.lanes|=r;var c=e.alternate;c!==null&&(c.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-$t(r),e=m.hiddenUpdates,c=e[h],c===null?e[h]=[i]:c.push(i),i.lane=r|536870912),m):null}function bc(e){if(50<dl)throw dl=0,cd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Nr={};function ny(e,i,r,c){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(e,i,r,c){return new ny(e,i,r,c)}function eh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ra(e,i){var r=e.alternate;return r===null?(r=wi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function Fm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ec(e,i,r,c,h,m){var b=0;if(c=e,typeof e=="function")eh(e)&&(b=1);else if(typeof e=="string")b=oM(e,r,zt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=wi(31,r,i,h),e.elementType=z,e.lanes=m,e;case w:return Ks(r.children,h,m,i);case y:b=8,h|=24;break;case S:return e=wi(12,r,i,h|2),e.elementType=S,e.lanes=m,e;case P:return e=wi(13,r,i,h),e.elementType=P,e.lanes=m,e;case D:return e=wi(19,r,i,h),e.elementType=D,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:b=10;break t;case C:b=9;break t;case A:b=11;break t;case O:b=14;break t;case E:b=16,c=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),c=null}return i=wi(b,r,i,h),i.elementType=e,i.type=c,i.lanes=m,i}function Ks(e,i,r,c){return e=wi(7,e,c,i),e.lanes=r,e}function nh(e,i,r){return e=wi(6,e,null,i),e.lanes=r,e}function Hm(e){var i=wi(18,null,null,0);return i.stateNode=e,i}function ih(e,i,r){return i=wi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Gm=new WeakMap;function Gi(e,i){if(typeof e=="object"&&e!==null){var r=Gm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ct(i)},Gm.set(e,i),i)}return{value:e,source:i,stack:Ct(i)}}var Lr=[],Pr=0,Tc=null,qo=0,Vi=[],ki=0,os=null,fa=1,ha="";function Da(e,i){Lr[Pr++]=qo,Lr[Pr++]=Tc,Tc=e,qo=i}function Vm(e,i,r){Vi[ki++]=fa,Vi[ki++]=ha,Vi[ki++]=os,os=e;var c=fa;e=ha;var h=32-$t(c)-1;c&=~(1<<h),r+=1;var m=32-$t(i)+h;if(30<m){var b=h-h%5;m=(c&(1<<b)-1).toString(32),c>>=b,h-=b,fa=1<<32-$t(i)+h|r<<h|c,ha=m+e}else fa=1<<m|r<<h|c,ha=e}function ah(e){e.return!==null&&(Da(e,1),Vm(e,1,0))}function sh(e){for(;e===Tc;)Tc=Lr[--Pr],Lr[Pr]=null,qo=Lr[--Pr],Lr[Pr]=null;for(;e===os;)os=Vi[--ki],Vi[ki]=null,ha=Vi[--ki],Vi[ki]=null,fa=Vi[--ki],Vi[ki]=null}function km(e,i){Vi[ki++]=fa,Vi[ki++]=ha,Vi[ki++]=os,fa=i.id,ha=i.overflow,os=e}var Yn=null,dn=null,ke=!1,ls=null,Xi=!1,rh=Error(a(519));function cs(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yo(Gi(i,e)),rh}function Xm(e){var i=e.stateNode,r=e.type,c=e.memoizedProps;switch(i[Me]=e,i[De]=c,r){case"dialog":Fe("cancel",i),Fe("close",i);break;case"iframe":case"object":case"embed":Fe("load",i);break;case"video":case"audio":for(r=0;r<ml.length;r++)Fe(ml[r],i);break;case"source":Fe("error",i);break;case"img":case"image":case"link":Fe("error",i),Fe("load",i);break;case"details":Fe("toggle",i);break;case"input":Fe("invalid",i),oe(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Fe("invalid",i);break;case"textarea":Fe("invalid",i),Ti(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||o_(i.textContent,r)?(c.popover!=null&&(Fe("beforetoggle",i),Fe("toggle",i)),c.onScroll!=null&&Fe("scroll",i),c.onScrollEnd!=null&&Fe("scrollend",i),c.onClick!=null&&(i.onclick=Fi),i=!0):i=!1,i||cs(e,!0)}function Wm(e){for(Yn=e.return;Yn;)switch(Yn.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Yn=Yn.return}}function Or(e){if(e!==Yn)return!1;if(!ke)return Wm(e),ke=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Ed(e.type,e.memoizedProps)),r=!r),r&&dn&&cs(e),Wm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));dn=g_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));dn=g_(e)}else i===27?(i=dn,bs(e.type)?(e=Rd,Rd=null,dn=e):dn=i):dn=Yn?qi(e.stateNode.nextSibling):null;return!0}function Js(){dn=Yn=null,ke=!1}function oh(){var e=ls;return e!==null&&(yi===null?yi=e:yi.push.apply(yi,e),ls=null),e}function Yo(e){ls===null?ls=[e]:ls.push(e)}var lh=I(null),Qs=null,Ua=null;function us(e,i,r){xt(lh,i._currentValue),i._currentValue=r}function Na(e){e._currentValue=lh.current,st(lh)}function ch(e,i,r){for(;e!==null;){var c=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),e===r)break;e=e.return}}function uh(e,i,r,c){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var L=m;m=h;for(var W=0;W<i.length;W++)if(L.context===i[W]){m.lanes|=r,L=m.alternate,L!==null&&(L.lanes|=r),ch(m.return,r,e),c||(b=null);break t}m=L.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),ch(b,r,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function zr(e,i,r,c){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var L=h.type;Ai(h.pendingProps.value,b.value)||(e!==null?e.push(L):e=[L])}}else if(h===ot.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Sl):e=[Sl])}h=h.return}e!==null&&uh(i,e,r,c),i.flags|=262144}function Ac(e){for(e=e.firstContext;e!==null;){if(!Ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function js(e){Qs=e,Ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Zn(e){return qm(Qs,e)}function wc(e,i){return Qs===null&&js(e),qm(e,i)}function qm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ua===null){if(e===null)throw Error(a(308));Ua=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ua=Ua.next=i;return r}var iy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,c){e.push(c)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},ay=s.unstable_scheduleCallback,sy=s.unstable_NormalPriority,Un={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fh(){return{controller:new iy,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&ay(sy,function(){e.controller.abort()})}var Ko=null,hh=0,Ir=0,Br=null;function ry(e,i){if(Ko===null){var r=Ko=[];hh=0,Ir=md(),Br={status:"pending",value:void 0,then:function(c){r.push(c)}}}return hh++,i.then(Ym,Ym),i}function Ym(){if(--hh===0&&Ko!==null){Br!==null&&(Br.status="fulfilled");var e=Ko;Ko=null,Ir=0,Br=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function oy(e,i){var r=[],c={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){c.status="fulfilled",c.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(c.status="rejected",c.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),c}var Zm=H.S;H.S=function(e,i){Uv=pe(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ry(e,i),Zm!==null&&Zm(e,i)};var $s=I(null);function dh(){var e=$s.current;return e!==null?e:un.pooledCache}function Cc(e,i){i===null?xt($s,$s.current):xt($s,i.pool)}function Km(){var e=dh();return e===null?null:{parent:Un._currentValue,pool:e}}var Fr=Error(a(460)),ph=Error(a(474)),Rc=Error(a(542)),Dc={then:function(){}};function Jm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qm(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Fi,Fi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$m(e),e;default:if(typeof i.status=="string")i.then(Fi,Fi);else{if(e=un,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(c){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=c}},function(c){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,$m(e),e}throw er=i,Fr}}function tr(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(er=r,Fr):r}}var er=null;function jm(){if(er===null)throw Error(a(459));var e=er;return er=null,e}function $m(e){if(e===Fr||e===Rc)throw Error(a(483))}var Hr=null,Jo=0;function Uc(e){var i=Jo;return Jo+=1,Hr===null&&(Hr=[]),Qm(Hr,e,i)}function Qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function tg(e){function i(rt,j){if(e){var dt=rt.deletions;dt===null?(rt.deletions=[j],rt.flags|=16):dt.push(j)}}function r(rt,j){if(!e)return null;for(;j!==null;)i(rt,j),j=j.sibling;return null}function c(rt){for(var j=new Map;rt!==null;)rt.key!==null?j.set(rt.key,rt):j.set(rt.index,rt),rt=rt.sibling;return j}function h(rt,j){return rt=Ra(rt,j),rt.index=0,rt.sibling=null,rt}function m(rt,j,dt){return rt.index=dt,e?(dt=rt.alternate,dt!==null?(dt=dt.index,dt<j?(rt.flags|=67108866,j):dt):(rt.flags|=67108866,j)):(rt.flags|=1048576,j)}function b(rt){return e&&rt.alternate===null&&(rt.flags|=67108866),rt}function L(rt,j,dt,Lt){return j===null||j.tag!==6?(j=nh(dt,rt.mode,Lt),j.return=rt,j):(j=h(j,dt),j.return=rt,j)}function W(rt,j,dt,Lt){var ge=dt.type;return ge===w?Ut(rt,j,dt.props.children,Lt,dt.key):j!==null&&(j.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===E&&tr(ge)===j.type)?(j=h(j,dt.props),Qo(j,dt),j.return=rt,j):(j=Ec(dt.type,dt.key,dt.props,null,rt.mode,Lt),Qo(j,dt),j.return=rt,j)}function pt(rt,j,dt,Lt){return j===null||j.tag!==4||j.stateNode.containerInfo!==dt.containerInfo||j.stateNode.implementation!==dt.implementation?(j=ih(dt,rt.mode,Lt),j.return=rt,j):(j=h(j,dt.children||[]),j.return=rt,j)}function Ut(rt,j,dt,Lt,ge){return j===null||j.tag!==7?(j=Ks(dt,rt.mode,Lt,ge),j.return=rt,j):(j=h(j,dt),j.return=rt,j)}function Pt(rt,j,dt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=nh(""+j,rt.mode,dt),j.return=rt,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return dt=Ec(j.type,j.key,j.props,null,rt.mode,dt),Qo(dt,j),dt.return=rt,dt;case M:return j=ih(j,rt.mode,dt),j.return=rt,j;case E:return j=tr(j),Pt(rt,j,dt)}if(tt(j)||Z(j))return j=Ks(j,rt.mode,dt,null),j.return=rt,j;if(typeof j.then=="function")return Pt(rt,Uc(j),dt);if(j.$$typeof===N)return Pt(rt,wc(rt,j),dt);Nc(rt,j)}return null}function vt(rt,j,dt,Lt){var ge=j!==null?j.key:null;if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return ge!==null?null:L(rt,j,""+dt,Lt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:return dt.key===ge?W(rt,j,dt,Lt):null;case M:return dt.key===ge?pt(rt,j,dt,Lt):null;case E:return dt=tr(dt),vt(rt,j,dt,Lt)}if(tt(dt)||Z(dt))return ge!==null?null:Ut(rt,j,dt,Lt,null);if(typeof dt.then=="function")return vt(rt,j,Uc(dt),Lt);if(dt.$$typeof===N)return vt(rt,j,wc(rt,dt),Lt);Nc(rt,dt)}return null}function Tt(rt,j,dt,Lt,ge){if(typeof Lt=="string"&&Lt!==""||typeof Lt=="number"||typeof Lt=="bigint")return rt=rt.get(dt)||null,L(j,rt,""+Lt,ge);if(typeof Lt=="object"&&Lt!==null){switch(Lt.$$typeof){case x:return rt=rt.get(Lt.key===null?dt:Lt.key)||null,W(j,rt,Lt,ge);case M:return rt=rt.get(Lt.key===null?dt:Lt.key)||null,pt(j,rt,Lt,ge);case E:return Lt=tr(Lt),Tt(rt,j,dt,Lt,ge)}if(tt(Lt)||Z(Lt))return rt=rt.get(dt)||null,Ut(j,rt,Lt,ge,null);if(typeof Lt.then=="function")return Tt(rt,j,dt,Uc(Lt),ge);if(Lt.$$typeof===N)return Tt(rt,j,dt,wc(j,Lt),ge);Nc(j,Lt)}return null}function he(rt,j,dt,Lt){for(var ge=null,Ye=null,de=j,Ue=j=0,Ge=null;de!==null&&Ue<dt.length;Ue++){de.index>Ue?(Ge=de,de=null):Ge=de.sibling;var Ze=vt(rt,de,dt[Ue],Lt);if(Ze===null){de===null&&(de=Ge);break}e&&de&&Ze.alternate===null&&i(rt,de),j=m(Ze,j,Ue),Ye===null?ge=Ze:Ye.sibling=Ze,Ye=Ze,de=Ge}if(Ue===dt.length)return r(rt,de),ke&&Da(rt,Ue),ge;if(de===null){for(;Ue<dt.length;Ue++)de=Pt(rt,dt[Ue],Lt),de!==null&&(j=m(de,j,Ue),Ye===null?ge=de:Ye.sibling=de,Ye=de);return ke&&Da(rt,Ue),ge}for(de=c(de);Ue<dt.length;Ue++)Ge=Tt(de,rt,Ue,dt[Ue],Lt),Ge!==null&&(e&&Ge.alternate!==null&&de.delete(Ge.key===null?Ue:Ge.key),j=m(Ge,j,Ue),Ye===null?ge=Ge:Ye.sibling=Ge,Ye=Ge);return e&&de.forEach(function(Cs){return i(rt,Cs)}),ke&&Da(rt,Ue),ge}function xe(rt,j,dt,Lt){if(dt==null)throw Error(a(151));for(var ge=null,Ye=null,de=j,Ue=j=0,Ge=null,Ze=dt.next();de!==null&&!Ze.done;Ue++,Ze=dt.next()){de.index>Ue?(Ge=de,de=null):Ge=de.sibling;var Cs=vt(rt,de,Ze.value,Lt);if(Cs===null){de===null&&(de=Ge);break}e&&de&&Cs.alternate===null&&i(rt,de),j=m(Cs,j,Ue),Ye===null?ge=Cs:Ye.sibling=Cs,Ye=Cs,de=Ge}if(Ze.done)return r(rt,de),ke&&Da(rt,Ue),ge;if(de===null){for(;!Ze.done;Ue++,Ze=dt.next())Ze=Pt(rt,Ze.value,Lt),Ze!==null&&(j=m(Ze,j,Ue),Ye===null?ge=Ze:Ye.sibling=Ze,Ye=Ze);return ke&&Da(rt,Ue),ge}for(de=c(de);!Ze.done;Ue++,Ze=dt.next())Ze=Tt(de,rt,Ue,Ze.value,Lt),Ze!==null&&(e&&Ze.alternate!==null&&de.delete(Ze.key===null?Ue:Ze.key),j=m(Ze,j,Ue),Ye===null?ge=Ze:Ye.sibling=Ze,Ye=Ze);return e&&de.forEach(function(_M){return i(rt,_M)}),ke&&Da(rt,Ue),ge}function on(rt,j,dt,Lt){if(typeof dt=="object"&&dt!==null&&dt.type===w&&dt.key===null&&(dt=dt.props.children),typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case x:t:{for(var ge=dt.key;j!==null;){if(j.key===ge){if(ge=dt.type,ge===w){if(j.tag===7){r(rt,j.sibling),Lt=h(j,dt.props.children),Lt.return=rt,rt=Lt;break t}}else if(j.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===E&&tr(ge)===j.type){r(rt,j.sibling),Lt=h(j,dt.props),Qo(Lt,dt),Lt.return=rt,rt=Lt;break t}r(rt,j);break}else i(rt,j);j=j.sibling}dt.type===w?(Lt=Ks(dt.props.children,rt.mode,Lt,dt.key),Lt.return=rt,rt=Lt):(Lt=Ec(dt.type,dt.key,dt.props,null,rt.mode,Lt),Qo(Lt,dt),Lt.return=rt,rt=Lt)}return b(rt);case M:t:{for(ge=dt.key;j!==null;){if(j.key===ge)if(j.tag===4&&j.stateNode.containerInfo===dt.containerInfo&&j.stateNode.implementation===dt.implementation){r(rt,j.sibling),Lt=h(j,dt.children||[]),Lt.return=rt,rt=Lt;break t}else{r(rt,j);break}else i(rt,j);j=j.sibling}Lt=ih(dt,rt.mode,Lt),Lt.return=rt,rt=Lt}return b(rt);case E:return dt=tr(dt),on(rt,j,dt,Lt)}if(tt(dt))return he(rt,j,dt,Lt);if(Z(dt)){if(ge=Z(dt),typeof ge!="function")throw Error(a(150));return dt=ge.call(dt),xe(rt,j,dt,Lt)}if(typeof dt.then=="function")return on(rt,j,Uc(dt),Lt);if(dt.$$typeof===N)return on(rt,j,wc(rt,dt),Lt);Nc(rt,dt)}return typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint"?(dt=""+dt,j!==null&&j.tag===6?(r(rt,j.sibling),Lt=h(j,dt),Lt.return=rt,rt=Lt):(r(rt,j),Lt=nh(dt,rt.mode,Lt),Lt.return=rt,rt=Lt),b(rt)):r(rt,j)}return function(rt,j,dt,Lt){try{Jo=0;var ge=on(rt,j,dt,Lt);return Hr=null,ge}catch(de){if(de===Fr||de===Rc)throw de;var Ye=wi(29,de,null,rt.mode);return Ye.lanes=Lt,Ye.return=rt,Ye}finally{}}}var nr=tg(!0),eg=tg(!1),fs=!1;function mh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ds(e,i,r){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(Je&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,i=bc(e),Bm(e,null,r),i}return Mc(e,c,i,r),bc(e)}function jo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,ie(e,r)}}function vh(e,i){var r=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var _h=!1;function $o(){if(_h){var e=Br;if(e!==null)throw e}}function tl(e,i,r,c){_h=!1;var h=e.updateQueue;fs=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var W=L,pt=W.next;W.next=null,b===null?m=pt:b.next=pt,b=W;var Ut=e.alternate;Ut!==null&&(Ut=Ut.updateQueue,L=Ut.lastBaseUpdate,L!==b&&(L===null?Ut.firstBaseUpdate=pt:L.next=pt,Ut.lastBaseUpdate=W))}if(m!==null){var Pt=h.baseState;b=0,Ut=pt=W=null,L=m;do{var vt=L.lane&-536870913,Tt=vt!==L.lane;if(Tt?(He&vt)===vt:(c&vt)===vt){vt!==0&&vt===Ir&&(_h=!0),Ut!==null&&(Ut=Ut.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});t:{var he=e,xe=L;vt=i;var on=r;switch(xe.tag){case 1:if(he=xe.payload,typeof he=="function"){Pt=he.call(on,Pt,vt);break t}Pt=he;break t;case 3:he.flags=he.flags&-65537|128;case 0:if(he=xe.payload,vt=typeof he=="function"?he.call(on,Pt,vt):he,vt==null)break t;Pt=_({},Pt,vt);break t;case 2:fs=!0}}vt=L.callback,vt!==null&&(e.flags|=64,Tt&&(e.flags|=8192),Tt=h.callbacks,Tt===null?h.callbacks=[vt]:Tt.push(vt))}else Tt={lane:vt,tag:L.tag,payload:L.payload,callback:L.callback,next:null},Ut===null?(pt=Ut=Tt,W=Pt):Ut=Ut.next=Tt,b|=vt;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;Tt=L,L=Tt.next,Tt.next=null,h.lastBaseUpdate=Tt,h.shared.pending=null}}while(!0);Ut===null&&(W=Pt),h.baseState=W,h.firstBaseUpdate=pt,h.lastBaseUpdate=Ut,m===null&&(h.shared.lanes=0),_s|=b,e.lanes=b,e.memoizedState=Pt}}function ng(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function ig(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)ng(r[e],i)}var Gr=I(null),Lc=I(0);function ag(e,i){e=Ga,xt(Lc,e),xt(Gr,i),Ga=e|i.baseLanes}function xh(){xt(Lc,Ga),xt(Gr,Gr.current)}function Sh(){Ga=Lc.current,st(Gr),st(Lc)}var Ci=I(null),Wi=null;function ps(e){var i=e.alternate;xt(An,An.current&1),xt(Ci,e),Wi===null&&(i===null||Gr.current!==null||i.memoizedState!==null)&&(Wi=e)}function yh(e){xt(An,An.current),xt(Ci,e),Wi===null&&(Wi=e)}function sg(e){e.tag===22?(xt(An,An.current),xt(Ci,e),Wi===null&&(Wi=e)):ms()}function ms(){xt(An,An.current),xt(Ci,Ci.current)}function Ri(e){st(Ci),Wi===e&&(Wi=null),st(An)}var An=I(0);function Pc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||wd(r)||Cd(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var La=0,Re=null,sn=null,Nn=null,Oc=!1,Vr=!1,ir=!1,zc=0,el=0,kr=null,ly=0;function bn(){throw Error(a(321))}function Mh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Ai(e[r],i[r]))return!1;return!0}function bh(e,i,r,c,h,m){return La=m,Re=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Vg:Bh,ir=!1,m=r(c,h),ir=!1,Vr&&(m=og(i,r,c,h)),rg(e),m}function rg(e){H.H=al;var i=sn!==null&&sn.next!==null;if(La=0,Nn=sn=Re=null,Oc=!1,el=0,kr=null,i)throw Error(a(300));e===null||Ln||(e=e.dependencies,e!==null&&Ac(e)&&(Ln=!0))}function og(e,i,r,c){Re=e;var h=0;do{if(Vr&&(kr=null),el=0,Vr=!1,25<=h)throw Error(a(301));if(h+=1,Nn=sn=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}H.H=kg,m=i(r,c)}while(Vr);return m}function cy(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?nl(i):i,e=e.useState()[0],(sn!==null?sn.memoizedState:null)!==e&&(Re.flags|=1024),i}function Eh(){var e=zc!==0;return zc=0,e}function Th(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Ah(e){if(Oc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Oc=!1}La=0,Nn=sn=Re=null,Vr=!1,el=zc=0,kr=null}function ci(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?Re.memoizedState=Nn=e:Nn=Nn.next=e,Nn}function wn(){if(sn===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=sn.next;var i=Nn===null?Re.memoizedState:Nn.next;if(i!==null)Nn=i,sn=e;else{if(e===null)throw Re.alternate===null?Error(a(467)):Error(a(310));sn=e,e={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},Nn===null?Re.memoizedState=Nn=e:Nn=Nn.next=e}return Nn}function Ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nl(e){var i=el;return el+=1,kr===null&&(kr=[]),e=Qm(kr,e,i),i=Re,(Nn===null?i.memoizedState:Nn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Vg:Bh),e}function Bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nl(e);if(e.$$typeof===N)return Zn(e)}throw Error(a(438,String(e)))}function wh(e){var i=null,r=Re.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=Re.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ic(),Re.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),c=0;c<e;c++)r[c]=F;return i.index++,r}function Pa(e,i){return typeof i=="function"?i(e):i}function Fc(e){var i=wn();return Ch(i,sn,e)}function Ch(e,i,r){var c=e.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var h=e.baseQueue,m=c.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,c.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var L=b=null,W=null,pt=i,Ut=!1;do{var Pt=pt.lane&-536870913;if(Pt!==pt.lane?(He&Pt)===Pt:(La&Pt)===Pt){var vt=pt.revertLane;if(vt===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:pt.action,hasEagerState:pt.hasEagerState,eagerState:pt.eagerState,next:null}),Pt===Ir&&(Ut=!0);else if((La&vt)===vt){pt=pt.next,vt===Ir&&(Ut=!0);continue}else Pt={lane:0,revertLane:pt.revertLane,gesture:null,action:pt.action,hasEagerState:pt.hasEagerState,eagerState:pt.eagerState,next:null},W===null?(L=W=Pt,b=m):W=W.next=Pt,Re.lanes|=vt,_s|=vt;Pt=pt.action,ir&&r(m,Pt),m=pt.hasEagerState?pt.eagerState:r(m,Pt)}else vt={lane:Pt,revertLane:pt.revertLane,gesture:pt.gesture,action:pt.action,hasEagerState:pt.hasEagerState,eagerState:pt.eagerState,next:null},W===null?(L=W=vt,b=m):W=W.next=vt,Re.lanes|=Pt,_s|=Pt;pt=pt.next}while(pt!==null&&pt!==i);if(W===null?b=m:W.next=L,!Ai(m,e.memoizedState)&&(Ln=!0,Ut&&(r=Br,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=W,c.lastRenderedState=m}return h===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function Rh(e){var i=wn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var c=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);Ai(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function lg(e,i,r){var c=Re,h=wn(),m=ke;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!Ai((sn||h).memoizedState,r);if(b&&(h.memoizedState=r,Ln=!0),h=h.queue,Nh(fg.bind(null,c,h,e),[e]),h.getSnapshot!==i||b||Nn!==null&&Nn.memoizedState.tag&1){if(c.flags|=2048,Xr(9,{destroy:void 0},ug.bind(null,c,h,r,i),null),un===null)throw Error(a(349));m||(La&127)!==0||cg(c,i,r)}return r}function cg(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=Re.updateQueue,i===null?(i=Ic(),Re.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function ug(e,i,r,c){i.value=r,i.getSnapshot=c,hg(i)&&dg(e)}function fg(e,i,r){return r(function(){hg(i)&&dg(e)})}function hg(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Ai(e,r)}catch{return!0}}function dg(e){var i=Zs(e,2);i!==null&&Mi(i,e,2)}function Dh(e){var i=ci();if(typeof e=="function"){var r=e;if(e=r(),ir){Gt(!0);try{r()}finally{Gt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},i}function pg(e,i,r,c){return e.baseState=r,Ch(e,sn,typeof c=="function"?c:Pa)}function uy(e,i,r,c,h){if(Vc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};H.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,mg(i,m)):(m.next=r.next,i.pending=r.next=m)}}function mg(e,i){var r=i.action,c=i.payload,h=e.state;if(i.isTransition){var m=H.T,b={};H.T=b;try{var L=r(h,c),W=H.S;W!==null&&W(b,L),gg(e,i,L)}catch(pt){Uh(e,i,pt)}finally{m!==null&&b.types!==null&&(m.types=b.types),H.T=m}}else try{m=r(h,c),gg(e,i,m)}catch(pt){Uh(e,i,pt)}}function gg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){vg(e,i,c)},function(c){return Uh(e,i,c)}):vg(e,i,r)}function vg(e,i,r){i.status="fulfilled",i.value=r,_g(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,mg(e,r)))}function Uh(e,i,r){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,_g(i),i=i.next;while(i!==c)}e.action=null}function _g(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function xg(e,i){return i}function Sg(e,i){if(ke){var r=un.formState;if(r!==null){t:{var c=Re;if(ke){if(dn){e:{for(var h=dn,m=Xi;h.nodeType!==8;){if(!m){h=null;break e}if(h=qi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){dn=qi(h.nextSibling),c=h.data==="F!";break t}}cs(c)}c=!1}c&&(i=r[0])}}return r=ci(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},r.queue=c,r=Fg.bind(null,Re,c),c.dispatch=r,c=Dh(!1),m=Ih.bind(null,Re,!1,c.queue),c=ci(),h={state:i,dispatch:null,action:e,pending:null},c.queue=h,r=uy.bind(null,Re,h,m,r),h.dispatch=r,c.memoizedState=e,[i,r,!1]}function yg(e){var i=wn();return Mg(i,sn,e)}function Mg(e,i,r){if(i=Ch(e,i,xg)[0],e=Fc(Pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=nl(i)}catch(b){throw b===Fr?Rc:b}else c=i;i=wn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(Re.flags|=2048,Xr(9,{destroy:void 0},fy.bind(null,h,r),null)),[c,m,e]}function fy(e,i){e.action=i}function bg(e){var i=wn(),r=sn;if(r!==null)return Mg(i,r,e);wn(),i=i.memoizedState,r=wn();var c=r.queue.dispatch;return r.memoizedState=e,[i,c,!1]}function Xr(e,i,r,c){return e={tag:e,create:r,deps:c,inst:i,next:null},i=Re.updateQueue,i===null&&(i=Ic(),Re.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(c=r.next,r.next=e,e.next=c,i.lastEffect=e),e}function Eg(){return wn().memoizedState}function Hc(e,i,r,c){var h=ci();Re.flags|=e,h.memoizedState=Xr(1|i,{destroy:void 0},r,c===void 0?null:c)}function Gc(e,i,r,c){var h=wn();c=c===void 0?null:c;var m=h.memoizedState.inst;sn!==null&&c!==null&&Mh(c,sn.memoizedState.deps)?h.memoizedState=Xr(i,m,r,c):(Re.flags|=e,h.memoizedState=Xr(1|i,m,r,c))}function Tg(e,i){Hc(8390656,8,e,i)}function Nh(e,i){Gc(2048,8,e,i)}function hy(e){Re.flags|=4;var i=Re.updateQueue;if(i===null)i=Ic(),Re.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Ag(e){var i=wn().memoizedState;return hy({ref:i,nextImpl:e}),function(){if((Je&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function wg(e,i){return Gc(4,2,e,i)}function Cg(e,i){return Gc(4,4,e,i)}function Rg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Dg(e,i,r){r=r!=null?r.concat([e]):null,Gc(4,4,Rg.bind(null,i,e),r)}function Lh(){}function Ug(e,i){var r=wn();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&Mh(i,c[1])?c[0]:(r.memoizedState=[e,i],e)}function Ng(e,i){var r=wn();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&Mh(i,c[1]))return c[0];if(c=e(),ir){Gt(!0);try{e()}finally{Gt(!1)}}return r.memoizedState=[c,i],c}function Ph(e,i,r){return r===void 0||(La&1073741824)!==0&&(He&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Lv(),Re.lanes|=e,_s|=e,r)}function Lg(e,i,r,c){return Ai(r,i)?r:Gr.current!==null?(e=Ph(e,r,c),Ai(e,i)||(Ln=!0),e):(La&42)===0||(La&1073741824)!==0&&(He&261930)===0?(Ln=!0,e.memoizedState=r):(e=Lv(),Re.lanes|=e,_s|=e,i)}function Pg(e,i,r,c,h){var m=V.p;V.p=m!==0&&8>m?m:8;var b=H.T,L={};H.T=L,Ih(e,!1,i,r);try{var W=h(),pt=H.S;if(pt!==null&&pt(L,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Ut=oy(W,c);il(e,i,Ut,Ni(e))}else il(e,i,c,Ni(e))}catch(Pt){il(e,i,{then:function(){},status:"rejected",reason:Pt},Ni())}finally{V.p=m,b!==null&&L.types!==null&&(b.types=L.types),H.T=b}}function dy(){}function Oh(e,i,r,c){if(e.tag!==5)throw Error(a(476));var h=Og(e).queue;Pg(e,h,i,ht,r===null?dy:function(){return zg(e),r(c)})}function Og(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:ht},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function zg(e){var i=Og(e);i.next===null&&(i=e.alternate.memoizedState),il(e,i.next.queue,{},Ni())}function zh(){return Zn(Sl)}function Ig(){return wn().memoizedState}function Bg(){return wn().memoizedState}function py(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ni();e=hs(r);var c=ds(i,e,r);c!==null&&(Mi(c,i,r),jo(c,i,r)),i={cache:fh()},e.payload=i;return}i=i.return}}function my(e,i,r){var c=Ni();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vc(e)?Hg(i,r):(r=th(e,i,r,c),r!==null&&(Mi(r,e,c),Gg(r,i,c)))}function Fg(e,i,r){var c=Ni();il(e,i,r,c)}function il(e,i,r,c){var h={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vc(e))Hg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,L=m(b,r);if(h.hasEagerState=!0,h.eagerState=L,Ai(L,b))return Mc(e,i,h,0),un===null&&yc(),!1}catch{}finally{}if(r=th(e,i,h,c),r!==null)return Mi(r,e,c),Gg(r,i,c),!0}return!1}function Ih(e,i,r,c){if(c={lane:2,revertLane:md(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},Vc(e)){if(i)throw Error(a(479))}else i=th(e,r,c,2),i!==null&&Mi(i,e,2)}function Vc(e){var i=e.alternate;return e===Re||i!==null&&i===Re}function Hg(e,i){Vr=Oc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Gg(e,i,r){if((r&4194048)!==0){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,ie(e,r)}}var al={readContext:Zn,use:Bc,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};al.useEffectEvent=bn;var Vg={readContext:Zn,use:Bc,useCallback:function(e,i){return ci().memoizedState=[e,i===void 0?null:i],e},useContext:Zn,useEffect:Tg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Hc(4194308,4,Rg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Hc(4194308,4,e,i)},useInsertionEffect:function(e,i){Hc(4,2,e,i)},useMemo:function(e,i){var r=ci();i=i===void 0?null:i;var c=e();if(ir){Gt(!0);try{e()}finally{Gt(!1)}}return r.memoizedState=[c,i],c},useReducer:function(e,i,r){var c=ci();if(r!==void 0){var h=r(i);if(ir){Gt(!0);try{r(i)}finally{Gt(!1)}}}else h=i;return c.memoizedState=c.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},c.queue=e,e=e.dispatch=my.bind(null,Re,e),[c.memoizedState,e]},useRef:function(e){var i=ci();return e={current:e},i.memoizedState=e},useState:function(e){e=Dh(e);var i=e.queue,r=Fg.bind(null,Re,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Lh,useDeferredValue:function(e,i){var r=ci();return Ph(r,e,i)},useTransition:function(){var e=Dh(!1);return e=Pg.bind(null,Re,e.queue,!0,!1),ci().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var c=Re,h=ci();if(ke){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),un===null)throw Error(a(349));(He&127)!==0||cg(c,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,Tg(fg.bind(null,c,m,e),[e]),c.flags|=2048,Xr(9,{destroy:void 0},ug.bind(null,c,m,r,i),null),r},useId:function(){var e=ci(),i=un.identifierPrefix;if(ke){var r=ha,c=fa;r=(c&~(1<<32-$t(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=zc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=ly++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:zh,useFormState:Sg,useActionState:Sg,useOptimistic:function(e){var i=ci();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Ih.bind(null,Re,!0,r),r.dispatch=i,[e,i]},useMemoCache:wh,useCacheRefresh:function(){return ci().memoizedState=py.bind(null,Re)},useEffectEvent:function(e){var i=ci(),r={impl:e};return i.memoizedState=r,function(){if((Je&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Bh={readContext:Zn,use:Bc,useCallback:Ug,useContext:Zn,useEffect:Nh,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ng,useReducer:Fc,useRef:Eg,useState:function(){return Fc(Pa)},useDebugValue:Lh,useDeferredValue:function(e,i){var r=wn();return Lg(r,sn.memoizedState,e,i)},useTransition:function(){var e=Fc(Pa)[0],i=wn().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:zh,useFormState:yg,useActionState:yg,useOptimistic:function(e,i){var r=wn();return pg(r,sn,e,i)},useMemoCache:wh,useCacheRefresh:Bg};Bh.useEffectEvent=Ag;var kg={readContext:Zn,use:Bc,useCallback:Ug,useContext:Zn,useEffect:Nh,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ng,useReducer:Rh,useRef:Eg,useState:function(){return Rh(Pa)},useDebugValue:Lh,useDeferredValue:function(e,i){var r=wn();return sn===null?Ph(r,e,i):Lg(r,sn.memoizedState,e,i)},useTransition:function(){var e=Rh(Pa)[0],i=wn().memoizedState;return[typeof e=="boolean"?e:nl(e),i]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:zh,useFormState:bg,useActionState:bg,useOptimistic:function(e,i){var r=wn();return sn!==null?pg(r,sn,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:wh,useCacheRefresh:Bg};kg.useEffectEvent=Ag;function Fh(e,i,r,c){i=e.memoizedState,r=r(c,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Hh={enqueueSetState:function(e,i,r){e=e._reactInternals;var c=Ni(),h=hs(c);h.payload=i,r!=null&&(h.callback=r),i=ds(e,h,c),i!==null&&(Mi(i,e,c),jo(i,e,c))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var c=Ni(),h=hs(c);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=ds(e,h,c),i!==null&&(Mi(i,e,c),jo(i,e,c))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ni(),c=hs(r);c.tag=2,i!=null&&(c.callback=i),i=ds(e,c,r),i!==null&&(Mi(i,e,r),jo(i,e,r))}};function Xg(e,i,r,c,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Xo(r,c)||!Xo(h,m):!0}function Wg(e,i,r,c){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==e&&Hh.enqueueReplaceState(i,i.state,null)}function ar(e,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function qg(e){Sc(e)}function Yg(e){console.error(e)}function Zg(e){Sc(e)}function kc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function Kg(e,i,r){try{var c=e.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Gh(e,i,r){return r=hs(r),r.tag=3,r.payload={element:null},r.callback=function(){kc(e,i)},r}function Jg(e){return e=hs(e),e.tag=3,e}function Qg(e,i,r,c){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;e.payload=function(){return h(m)},e.callback=function(){Kg(i,r,c)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){Kg(i,r,c),typeof h!="function"&&(xs===null?xs=new Set([this]):xs.add(this));var L=c.stack;this.componentDidCatch(c.value,{componentStack:L!==null?L:""})})}function gy(e,i,r,c,h){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&zr(i,r,h,!0),r=Ci.current,r!==null){switch(r.tag){case 31:case 13:return Wi===null?eu():r.alternate===null&&En===0&&(En=3),r.flags&=-257,r.flags|=65536,r.lanes=h,c===Dc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),hd(e,c,h)),!1;case 22:return r.flags|=65536,c===Dc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),hd(e,c,h)),!1}throw Error(a(435,r.tag))}return hd(e,c,h),eu(),!1}if(ke)return i=Ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,c!==rh&&(e=Error(a(422),{cause:c}),Yo(Gi(e,r)))):(c!==rh&&(i=Error(a(423),{cause:c}),Yo(Gi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,c=Gi(c,r),h=Gh(e.stateNode,c,h),vh(e,h),En!==4&&(En=2)),!1;var m=Error(a(520),{cause:c});if(m=Gi(m,r),hl===null?hl=[m]:hl.push(m),En!==4&&(En=2),i===null)return!0;c=Gi(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Gh(r.stateNode,c,e),vh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xs===null||!xs.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=Jg(h),Qg(h,e,r,c),vh(r,h),!1}r=r.return}while(r!==null);return!1}var Vh=Error(a(461)),Ln=!1;function Kn(e,i,r,c){i.child=e===null?eg(i,null,r,c):nr(i,e.child,r,c)}function jg(e,i,r,c,h){r=r.render;var m=i.ref;if("ref"in c){var b={};for(var L in c)L!=="ref"&&(b[L]=c[L])}else b=c;return js(i),c=bh(e,i,r,b,m,h),L=Eh(),e!==null&&!Ln?(Th(e,i,h),Oa(e,i,h)):(ke&&L&&ah(i),i.flags|=1,Kn(e,i,c,h),i.child)}function $g(e,i,r,c,h){if(e===null){var m=r.type;return typeof m=="function"&&!eh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,tv(e,i,m,c,h)):(e=Ec(r.type,null,c,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Jh(e,h)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:Xo,r(b,c)&&e.ref===i.ref)return Oa(e,i,h)}return i.flags|=1,e=Ra(m,c),e.ref=i.ref,e.return=i,i.child=e}function tv(e,i,r,c,h){if(e!==null){var m=e.memoizedProps;if(Xo(m,c)&&e.ref===i.ref)if(Ln=!1,i.pendingProps=c=m,Jh(e,h))(e.flags&131072)!==0&&(Ln=!0);else return i.lanes=e.lanes,Oa(e,i,h)}return kh(e,i,r,c,h)}function ev(e,i,r,c){var h=c.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(c=i.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~m}else c=0,i.child=null;return nv(e,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cc(i,m!==null?m.cachePool:null),m!==null?ag(i,m):xh(),sg(i);else return c=i.lanes=536870912,nv(e,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Cc(i,m.cachePool),ag(i,m),ms(),i.memoizedState=null):(e!==null&&Cc(i,null),xh(),ms());return Kn(e,i,h,r),i.child}function sl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function nv(e,i,r,c,h){var m=dh();return m=m===null?null:{parent:Un._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Cc(i,null),xh(),sg(i),e!==null&&zr(e,i,c,!0),i.childLanes=h,null}function Xc(e,i){return i=qc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function iv(e,i,r){return nr(i,e.child,null,r),e=Xc(i,i.pendingProps),e.flags|=2,Ri(i),i.memoizedState=null,e}function vy(e,i,r){var c=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ke){if(c.mode==="hidden")return e=Xc(i,c),i.lanes=536870912,sl(null,e);if(yh(i),(e=dn)?(e=m_(e,Xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:os!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=Hm(e),r.return=i,i.child=r,Yn=i,dn=null)):e=null,e===null)throw cs(i);return i.lanes=536870912,null}return Xc(i,c)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(yh(i),h)if(i.flags&256)i.flags&=-257,i=iv(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Ln||zr(e,i,r,!1),h=(r&e.childLanes)!==0,Ln||h){if(c=un,c!==null&&(b=_e(c,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Zs(e,b),Mi(c,e,b),Vh;eu(),i=iv(e,i,r)}else e=m.treeContext,dn=qi(b.nextSibling),Yn=i,ke=!0,ls=null,Xi=!1,e!==null&&km(i,e),i=Xc(i,c),i.flags|=4096;return i}return e=Ra(e.child,{mode:c.mode,children:c.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Wc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function kh(e,i,r,c,h){return js(i),r=bh(e,i,r,c,void 0,h),c=Eh(),e!==null&&!Ln?(Th(e,i,h),Oa(e,i,h)):(ke&&c&&ah(i),i.flags|=1,Kn(e,i,r,h),i.child)}function av(e,i,r,c,h,m){return js(i),i.updateQueue=null,r=og(i,c,r,h),rg(e),c=Eh(),e!==null&&!Ln?(Th(e,i,m),Oa(e,i,m)):(ke&&c&&ah(i),i.flags|=1,Kn(e,i,r,m),i.child)}function sv(e,i,r,c,h){if(js(i),i.stateNode===null){var m=Nr,b=r.contextType;typeof b=="object"&&b!==null&&(m=Zn(b)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Hh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},mh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Zn(b):Nr,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Fh(i,r,b,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Hh.enqueueReplaceState(m,m.state,null),tl(i,c,m,h),$o(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(e===null){m=i.stateNode;var L=i.memoizedProps,W=ar(r,L);m.props=W;var pt=m.context,Ut=r.contextType;b=Nr,typeof Ut=="object"&&Ut!==null&&(b=Zn(Ut));var Pt=r.getDerivedStateFromProps;Ut=typeof Pt=="function"||typeof m.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,Ut||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(L||pt!==b)&&Wg(i,m,c,b),fs=!1;var vt=i.memoizedState;m.state=vt,tl(i,c,m,h),$o(),pt=i.memoizedState,L||vt!==pt||fs?(typeof Pt=="function"&&(Fh(i,r,Pt,c),pt=i.memoizedState),(W=fs||Xg(i,r,W,c,vt,pt,b))?(Ut||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=pt),m.props=c,m.state=pt,m.context=b,c=W):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,gh(e,i),b=i.memoizedProps,Ut=ar(r,b),m.props=Ut,Pt=i.pendingProps,vt=m.context,pt=r.contextType,W=Nr,typeof pt=="object"&&pt!==null&&(W=Zn(pt)),L=r.getDerivedStateFromProps,(pt=typeof L=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==Pt||vt!==W)&&Wg(i,m,c,W),fs=!1,vt=i.memoizedState,m.state=vt,tl(i,c,m,h),$o();var Tt=i.memoizedState;b!==Pt||vt!==Tt||fs||e!==null&&e.dependencies!==null&&Ac(e.dependencies)?(typeof L=="function"&&(Fh(i,r,L,c),Tt=i.memoizedState),(Ut=fs||Xg(i,r,Ut,c,vt,Tt,W)||e!==null&&e.dependencies!==null&&Ac(e.dependencies))?(pt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,Tt,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,Tt,W)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Tt),m.props=c,m.state=Tt,m.context=W,c=Ut):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),c=!1)}return m=c,Wc(e,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&c?(i.child=nr(i,e.child,null,h),i.child=nr(i,null,r,h)):Kn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Oa(e,i,h),e}function rv(e,i,r,c){return Js(),i.flags|=256,Kn(e,i,r,c),i.child}var Xh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wh(e){return{baseLanes:e,cachePool:Km()}}function qh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Ui),e}function ov(e,i,r){var c=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(An.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(ke){if(h?ps(i):ms(),(e=dn)?(e=m_(e,Xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:os!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=Hm(e),r.return=i,i.child=r,Yn=i,dn=null)):e=null,e===null)throw cs(i);return Cd(e)?i.lanes=32:i.lanes=536870912,null}var L=c.children;return c=c.fallback,h?(ms(),h=i.mode,L=qc({mode:"hidden",children:L},h),c=Ks(c,h,r,null),L.return=i,c.return=i,L.sibling=c,i.child=L,c=i.child,c.memoizedState=Wh(r),c.childLanes=qh(e,b,r),i.memoizedState=Xh,sl(null,c)):(ps(i),Yh(i,L))}var W=e.memoizedState;if(W!==null&&(L=W.dehydrated,L!==null)){if(m)i.flags&256?(ps(i),i.flags&=-257,i=Zh(e,i,r)):i.memoizedState!==null?(ms(),i.child=e.child,i.flags|=128,i=null):(ms(),L=c.fallback,h=i.mode,c=qc({mode:"visible",children:c.children},h),L=Ks(L,h,r,null),L.flags|=2,c.return=i,L.return=i,c.sibling=L,i.child=c,nr(i,e.child,null,r),c=i.child,c.memoizedState=Wh(r),c.childLanes=qh(e,b,r),i.memoizedState=Xh,i=sl(null,c));else if(ps(i),Cd(L)){if(b=L.nextSibling&&L.nextSibling.dataset,b)var pt=b.dgst;b=pt,c=Error(a(419)),c.stack="",c.digest=b,Yo({value:c,source:null,stack:null}),i=Zh(e,i,r)}else if(Ln||zr(e,i,r,!1),b=(r&e.childLanes)!==0,Ln||b){if(b=un,b!==null&&(c=_e(b,r),c!==0&&c!==W.retryLane))throw W.retryLane=c,Zs(e,c),Mi(b,e,c),Vh;wd(L)||eu(),i=Zh(e,i,r)}else wd(L)?(i.flags|=192,i.child=e.child,i=null):(e=W.treeContext,dn=qi(L.nextSibling),Yn=i,ke=!0,ls=null,Xi=!1,e!==null&&km(i,e),i=Yh(i,c.children),i.flags|=4096);return i}return h?(ms(),L=c.fallback,h=i.mode,W=e.child,pt=W.sibling,c=Ra(W,{mode:"hidden",children:c.children}),c.subtreeFlags=W.subtreeFlags&65011712,pt!==null?L=Ra(pt,L):(L=Ks(L,h,r,null),L.flags|=2),L.return=i,c.return=i,c.sibling=L,i.child=c,sl(null,c),c=i.child,L=e.child.memoizedState,L===null?L=Wh(r):(h=L.cachePool,h!==null?(W=Un._currentValue,h=h.parent!==W?{parent:W,pool:W}:h):h=Km(),L={baseLanes:L.baseLanes|r,cachePool:h}),c.memoizedState=L,c.childLanes=qh(e,b,r),i.memoizedState=Xh,sl(e.child,c)):(ps(i),r=e.child,e=r.sibling,r=Ra(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Yh(e,i){return i=qc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function qc(e,i){return e=wi(22,e,null,i),e.lanes=0,e}function Zh(e,i,r){return nr(i,e.child,null,r),e=Yh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function lv(e,i,r){e.lanes|=i;var c=e.alternate;c!==null&&(c.lanes|=i),ch(e.return,i,r)}function Kh(e,i,r,c,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=r,b.tailMode=h,b.treeForkCount=m)}function cv(e,i,r){var c=i.pendingProps,h=c.revealOrder,m=c.tail;c=c.children;var b=An.current,L=(b&2)!==0;if(L?(b=b&1|2,i.flags|=128):b&=1,xt(An,b),Kn(e,i,c,r),c=ke?qo:0,!L&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,r,i);else if(e.tag===19)lv(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Pc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Kh(i,!1,h,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Pc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Kh(i,!0,r,null,m,c);break;case"together":Kh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Oa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),_s|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(zr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ra(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ra(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Jh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ac(e)))}function _y(e,i,r){switch(i.tag){case 3:$(i,i.stateNode.containerInfo),us(i,Un,e.memoizedState.cache),Js();break;case 27:case 5:Yt(i);break;case 4:$(i,i.stateNode.containerInfo);break;case 10:us(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,yh(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ps(i),i.flags|=128,null):(r&i.child.childLanes)!==0?ov(e,i,r):(ps(i),e=Oa(e,i,r),e!==null?e.sibling:null);ps(i);break;case 19:var h=(e.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(zr(e,i,r,!1),c=(r&i.childLanes)!==0),h){if(c)return cv(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),xt(An,An.current),c)break;return null;case 22:return i.lanes=0,ev(e,i,r,i.pendingProps);case 24:us(i,Un,e.memoizedState.cache)}return Oa(e,i,r)}function uv(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ln=!0;else{if(!Jh(e,r)&&(i.flags&128)===0)return Ln=!1,_y(e,i,r);Ln=(e.flags&131072)!==0}else Ln=!1,ke&&(i.flags&1048576)!==0&&Vm(i,qo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var c=i.pendingProps;if(e=tr(i.elementType),i.type=e,typeof e=="function")eh(e)?(c=ar(e,c),i.tag=1,i=sv(null,i,e,c,r)):(i.tag=0,i=kh(null,i,e,c,r));else{if(e!=null){var h=e.$$typeof;if(h===A){i.tag=11,i=jg(null,i,e,c,r);break t}else if(h===O){i.tag=14,i=$g(null,i,e,c,r);break t}}throw i=Y(e)||e,Error(a(306,i,""))}}return i;case 0:return kh(e,i,i.type,i.pendingProps,r);case 1:return c=i.type,h=ar(c,i.pendingProps),sv(e,i,c,h,r);case 3:t:{if($(i,i.stateNode.containerInfo),e===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;h=m.element,gh(e,i),tl(i,c,null,r);var b=i.memoizedState;if(c=b.cache,us(i,Un,c),c!==m.cache&&uh(i,[Un],r,!0),$o(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=rv(e,i,c,r);break t}else if(c!==h){h=Gi(Error(a(424)),i),Yo(h),i=rv(e,i,c,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(dn=qi(e.firstChild),Yn=i,ke=!0,ls=null,Xi=!0,r=eg(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Js(),c===h){i=Oa(e,i,r);break t}Kn(e,i,c,r)}i=i.child}return i;case 26:return Wc(e,i),e===null?(r=y_(i.type,null,i.pendingProps,null))?i.memoizedState=r:ke||(r=i.type,e=i.pendingProps,c=lu(qt.current).createElement(r),c[Me]=i,c[De]=e,Jn(c,r,e),Rn(c),i.stateNode=c):i.memoizedState=y_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&ke&&(c=i.stateNode=__(i.type,i.pendingProps,qt.current),Yn=i,Xi=!0,h=dn,bs(i.type)?(Rd=h,dn=qi(c.firstChild)):dn=h),Kn(e,i,i.pendingProps.children,r),Wc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ke&&((h=c=dn)&&(c=Zy(c,i.type,i.pendingProps,Xi),c!==null?(i.stateNode=c,Yn=i,dn=qi(c.firstChild),Xi=!1,h=!0):h=!1),h||cs(i)),Yt(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,c=m.children,Ed(h,m)?c=null:b!==null&&Ed(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=bh(e,i,cy,null,null,r),Sl._currentValue=h),Wc(e,i),Kn(e,i,c,r),i.child;case 6:return e===null&&ke&&((e=r=dn)&&(r=Ky(r,i.pendingProps,Xi),r!==null?(i.stateNode=r,Yn=i,dn=null,e=!0):e=!1),e||cs(i)),null;case 13:return ov(e,i,r);case 4:return $(i,i.stateNode.containerInfo),c=i.pendingProps,e===null?i.child=nr(i,null,c,r):Kn(e,i,c,r),i.child;case 11:return jg(e,i,i.type,i.pendingProps,r);case 7:return Kn(e,i,i.pendingProps,r),i.child;case 8:return Kn(e,i,i.pendingProps.children,r),i.child;case 12:return Kn(e,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,us(i,i.type,c.value),Kn(e,i,c.children,r),i.child;case 9:return h=i.type._context,c=i.pendingProps.children,js(i),h=Zn(h),c=c(h),i.flags|=1,Kn(e,i,c,r),i.child;case 14:return $g(e,i,i.type,i.pendingProps,r);case 15:return tv(e,i,i.type,i.pendingProps,r);case 19:return cv(e,i,r);case 31:return vy(e,i,r);case 22:return ev(e,i,r,i.pendingProps);case 24:return js(i),c=Zn(Un),e===null?(h=dh(),h===null&&(h=un,m=fh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:c,cache:h},mh(i),us(i,Un,h)):((e.lanes&r)!==0&&(gh(e,i),tl(i,null,null,r),$o()),h=e.memoizedState,m=i.memoizedState,h.parent!==c?(h={parent:c,cache:c},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),us(i,Un,c)):(c=m.cache,us(i,Un,c),c!==h.cache&&uh(i,[Un],r,!0))),Kn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function za(e){e.flags|=4}function Qh(e,i,r,c,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Iv())e.flags|=8192;else throw er=Dc,ph}else e.flags&=-16777217}function fv(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!A_(i))if(Iv())e.flags|=8192;else throw er=Dc,ph}function Yc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?R():536870912,e.lanes|=i,Zr|=i)}function rl(e,i){if(!ke)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function pn(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,c=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=c,e.childLanes=r,i}function xy(e,i,r){var c=i.pendingProps;switch(sh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return pn(i),null;case 3:return r=i.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),Na(Un),wt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(i)?za(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oh())),pn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(za(i),m!==null?(pn(i),fv(i,m)):(pn(i),Qh(i,h,null,c,r))):m?m!==e.memoizedState?(za(i),pn(i),fv(i,m)):(pn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==c&&za(i),pn(i),Qh(i,h,e,c,r)),null;case 27:if(Bt(i),r=qt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return pn(i),null}e=zt.current,Or(i)?Xm(i):(e=__(h,c,r),i.stateNode=e,za(i))}return pn(i),null;case 5:if(Bt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return pn(i),null}if(m=zt.current,Or(i))Xm(i);else{var b=lu(qt.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?b.createElement(h,{is:c.is}):b.createElement(h)}}m[Me]=i,m[De]=c;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(Jn(m,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&za(i)}}return pn(i),Qh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(e=qt.current,Or(i)){if(e=i.stateNode,r=i.memoizedProps,c=null,h=Yn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}e[Me]=i,e=!!(e.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||o_(e.nodeValue,r)),e||cs(i,!0)}else e=lu(e).createTextNode(c),e[Me]=i,i.stateNode=e}return pn(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(c=Or(i),r!==null){if(e===null){if(!c)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Me]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),e=!1}else r=oh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Ri(i),i):(Ri(i),null);if((i.flags&128)!==0)throw Error(a(558))}return pn(i),null;case 13:if(c=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Or(i),c!==null&&c.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Me]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),h=!1}else h=oh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ri(i),i):(Ri(i),null)}return Ri(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,e=e!==null&&e.memoizedState!==null,r&&(c=i.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Yc(i,i.updateQueue),pn(i),null);case 4:return wt(),e===null&&xd(i.stateNode.containerInfo),pn(i),null;case 10:return Na(i.type),pn(i),null;case 19:if(st(An),c=i.memoizedState,c===null)return pn(i),null;if(h=(i.flags&128)!==0,m=c.rendering,m===null)if(h)rl(c,!1);else{if(En!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Pc(e),m!==null){for(i.flags|=128,rl(c,!1),e=m.updateQueue,i.updateQueue=e,Yc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)Fm(r,e),r=r.sibling;return xt(An,An.current&1|2),ke&&Da(i,c.treeForkCount),i.child}e=e.sibling}c.tail!==null&&pe()>jc&&(i.flags|=128,h=!0,rl(c,!1),i.lanes=4194304)}else{if(!h)if(e=Pc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Yc(i,e),rl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!ke)return pn(i),null}else 2*pe()-c.renderingStartTime>jc&&r!==536870912&&(i.flags|=128,h=!0,rl(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(e=c.last,e!==null?e.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=pe(),e.sibling=null,r=An.current,xt(An,h?r&1|2:r&1),ke&&Da(i,c.treeForkCount),e):(pn(i),null);case 22:case 23:return Ri(i),Sh(),c=i.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),r=i.updateQueue,r!==null&&Yc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),e!==null&&st($s),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Na(Un),pn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Sy(e,i){switch(sh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Na(Un),wt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Bt(i),null;case 31:if(i.memoizedState!==null){if(Ri(i),i.alternate===null)throw Error(a(340));Js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Ri(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Js()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return st(An),null;case 4:return wt(),null;case 10:return Na(i.type),null;case 22:case 23:return Ri(i),Sh(),e!==null&&st($s),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Na(Un),null;case 25:return null;default:return null}}function hv(e,i){switch(sh(i),i.tag){case 3:Na(Un),wt();break;case 26:case 27:case 5:Bt(i);break;case 4:wt();break;case 31:i.memoizedState!==null&&Ri(i);break;case 13:Ri(i);break;case 19:st(An);break;case 10:Na(i.type);break;case 22:case 23:Ri(i),Sh(),e!==null&&st($s);break;case 24:Na(Un)}}function ol(e,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){c=void 0;var m=r.create,b=r.inst;c=m(),b.destroy=c}r=r.next}while(r!==h)}}catch(L){en(i,i.return,L)}}function gs(e,i,r){try{var c=i.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&e)===e){var b=c.inst,L=b.destroy;if(L!==void 0){b.destroy=void 0,h=i;var W=r,pt=L;try{pt()}catch(Ut){en(h,W,Ut)}}}c=c.next}while(c!==m)}}catch(Ut){en(i,i.return,Ut)}}function dv(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{ig(i,r)}catch(c){en(e,e.return,c)}}}function pv(e,i,r){r.props=ar(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(c){en(e,i,c)}}function ll(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(h){en(e,i,h)}}function da(e,i){var r=e.ref,c=e.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(h){en(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){en(e,i,h)}else r.current=null}function mv(e){var i=e.type,r=e.memoizedProps,c=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(h){en(e,e.return,h)}}function jh(e,i,r){try{var c=e.stateNode;Vy(c,e.type,r,i),c[De]=i}catch(h){en(e,e.return,h)}}function gv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bs(e.type)||e.tag===4}function $h(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||gv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function td(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Fi));else if(c!==4&&(c===27&&bs(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(td(e,i,r),e=e.sibling;e!==null;)td(e,i,r),e=e.sibling}function Zc(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(c!==4&&(c===27&&bs(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Zc(e,i,r),e=e.sibling;e!==null;)Zc(e,i,r),e=e.sibling}function vv(e){var i=e.stateNode,r=e.memoizedProps;try{for(var c=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Jn(i,c,r),i[Me]=e,i[De]=r}catch(m){en(e,e.return,m)}}var Ia=!1,Pn=!1,ed=!1,_v=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function yy(e,i){if(e=e.containerInfo,Md=mu,e=Dm(e),Zf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,L=-1,W=-1,pt=0,Ut=0,Pt=e,vt=null;e:for(;;){for(var Tt;Pt!==r||h!==0&&Pt.nodeType!==3||(L=b+h),Pt!==m||c!==0&&Pt.nodeType!==3||(W=b+c),Pt.nodeType===3&&(b+=Pt.nodeValue.length),(Tt=Pt.firstChild)!==null;)vt=Pt,Pt=Tt;for(;;){if(Pt===e)break e;if(vt===r&&++pt===h&&(L=b),vt===m&&++Ut===c&&(W=b),(Tt=Pt.nextSibling)!==null)break;Pt=vt,vt=Pt.parentNode}Pt=Tt}r=L===-1||W===-1?null:{start:L,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(bd={focusedElem:e,selectionRange:r},mu=!1,Vn=i;Vn!==null;)if(i=Vn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Vn=e;else for(;Vn!==null;){switch(i=Vn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var he=ar(r.type,h);e=c.getSnapshotBeforeUpdate(he,m),c.__reactInternalSnapshotBeforeUpdate=e}catch(xe){en(r,r.return,xe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Ad(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ad(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Vn=e;break}Vn=i.return}}function xv(e,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Fa(e,r),c&4&&ol(5,r);break;case 1:if(Fa(e,r),c&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){en(r,r.return,b)}else{var h=ar(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){en(r,r.return,b)}}c&64&&dv(r),c&512&&ll(r,r.return);break;case 3:if(Fa(e,r),c&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{ig(e,i)}catch(b){en(r,r.return,b)}}break;case 27:i===null&&c&4&&vv(r);case 26:case 5:Fa(e,r),i===null&&c&4&&mv(r),c&512&&ll(r,r.return);break;case 12:Fa(e,r);break;case 31:Fa(e,r),c&4&&Mv(e,r);break;case 13:Fa(e,r),c&4&&bv(e,r),c&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Dy.bind(null,r),Jy(e,r))));break;case 22:if(c=r.memoizedState!==null||Ia,!c){i=i!==null&&i.memoizedState!==null||Pn,h=Ia;var m=Pn;Ia=c,(Pn=i)&&!m?Ha(e,r,(r.subtreeFlags&8772)!==0):Fa(e,r),Ia=h,Pn=m}break;case 30:break;default:Fa(e,r)}}function Sv(e){var i=e.alternate;i!==null&&(e.alternate=null,Sv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&is(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,_i=!1;function Ba(e,i,r){for(r=r.child;r!==null;)yv(e,i,r),r=r.sibling}function yv(e,i,r){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(_t,r)}catch{}switch(r.tag){case 26:Pn||da(r,i),Ba(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Pn||da(r,i);var c=gn,h=_i;bs(r.type)&&(gn=r.stateNode,_i=!1),Ba(e,i,r),vl(r.stateNode),gn=c,_i=h;break;case 5:Pn||da(r,i);case 6:if(c=gn,h=_i,gn=null,Ba(e,i,r),gn=c,_i=h,gn!==null)if(_i)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(r.stateNode)}catch(m){en(r,i,m)}else try{gn.removeChild(r.stateNode)}catch(m){en(r,i,m)}break;case 18:gn!==null&&(_i?(e=gn,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),no(e)):d_(gn,r.stateNode));break;case 4:c=gn,h=_i,gn=r.stateNode.containerInfo,_i=!0,Ba(e,i,r),gn=c,_i=h;break;case 0:case 11:case 14:case 15:gs(2,r,i),Pn||gs(4,r,i),Ba(e,i,r);break;case 1:Pn||(da(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&pv(r,i,c)),Ba(e,i,r);break;case 21:Ba(e,i,r);break;case 22:Pn=(c=Pn)||r.memoizedState!==null,Ba(e,i,r),Pn=c;break;default:Ba(e,i,r)}}function Mv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{no(e)}catch(r){en(i,i.return,r)}}}function bv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{no(e)}catch(r){en(i,i.return,r)}}function My(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new _v),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new _v),i;default:throw Error(a(435,e.tag))}}function Kc(e,i){var r=My(e);i.forEach(function(c){if(!r.has(c)){r.add(c);var h=Uy.bind(null,e,c);c.then(h,h)}})}function xi(e,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],m=e,b=i,L=b;t:for(;L!==null;){switch(L.tag){case 27:if(bs(L.type)){gn=L.stateNode,_i=!1;break t}break;case 5:gn=L.stateNode,_i=!1;break t;case 3:case 4:gn=L.stateNode.containerInfo,_i=!0;break t}L=L.return}if(gn===null)throw Error(a(160));yv(m,b,h),gn=null,_i=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ev(i,e),i=i.sibling}var $i=null;function Ev(e,i){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xi(i,e),Si(e),c&4&&(gs(3,e,e.return),ol(3,e),gs(5,e,e.return));break;case 1:xi(i,e),Si(e),c&512&&(Pn||r===null||da(r,r.return)),c&64&&Ia&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var h=$i;if(xi(i,e),Si(e),c&512&&(Pn||r===null||da(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=e.memoizedState,r===null)if(c===null)if(e.stateNode===null){t:{c=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[ns]||m[Me]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),Jn(m,c,r),m[Me]=e,Rn(m),c=m;break t;case"link":var b=E_("link","href",h).get(c+(r.href||""));if(b){for(var L=0;L<b.length;L++)if(m=b[L],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(L,1);break e}}m=h.createElement(c),Jn(m,c,r),h.head.appendChild(m);break;case"meta":if(b=E_("meta","content",h).get(c+(r.content||""))){for(L=0;L<b.length;L++)if(m=b[L],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(L,1);break e}}m=h.createElement(c),Jn(m,c,r),h.head.appendChild(m);break;default:throw Error(a(468,c))}m[Me]=e,Rn(m),c=m}e.stateNode=c}else T_(h,e.type,e.stateNode);else e.stateNode=b_(h,c,e.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?T_(h,e.type,e.stateNode):b_(h,c,e.memoizedProps)):c===null&&e.stateNode!==null&&jh(e,e.memoizedProps,r.memoizedProps)}break;case 27:xi(i,e),Si(e),c&512&&(Pn||r===null||da(r,r.return)),r!==null&&c&4&&jh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(xi(i,e),Si(e),c&512&&(Pn||r===null||da(r,r.return)),e.flags&32){h=e.stateNode;try{li(h,"")}catch(he){en(e,e.return,he)}}c&4&&e.stateNode!=null&&(h=e.memoizedProps,jh(e,h,r!==null?r.memoizedProps:h)),c&1024&&(ed=!0);break;case 6:if(xi(i,e),Si(e),c&4){if(e.stateNode===null)throw Error(a(162));c=e.memoizedProps,r=e.stateNode;try{r.nodeValue=c}catch(he){en(e,e.return,he)}}break;case 3:if(fu=null,h=$i,$i=cu(i.containerInfo),xi(i,e),$i=h,Si(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(he){en(e,e.return,he)}ed&&(ed=!1,Tv(e));break;case 4:c=$i,$i=cu(e.stateNode.containerInfo),xi(i,e),Si(e),$i=c;break;case 12:xi(i,e),Si(e);break;case 31:xi(i,e),Si(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Kc(e,c)));break;case 13:xi(i,e),Si(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Qc=pe()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Kc(e,c)));break;case 22:h=e.memoizedState!==null;var W=r!==null&&r.memoizedState!==null,pt=Ia,Ut=Pn;if(Ia=pt||h,Pn=Ut||W,xi(i,e),Pn=Ut,Ia=pt,Si(e),c&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||W||Ia||Pn||sr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){W=r=i;try{if(m=W.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{L=W.stateNode;var Pt=W.memoizedProps.style,vt=Pt!=null&&Pt.hasOwnProperty("display")?Pt.display:null;L.style.display=vt==null||typeof vt=="boolean"?"":(""+vt).trim()}}catch(he){en(W,W.return,he)}}}else if(i.tag===6){if(r===null){W=i;try{W.stateNode.nodeValue=h?"":W.memoizedProps}catch(he){en(W,W.return,he)}}}else if(i.tag===18){if(r===null){W=i;try{var Tt=W.stateNode;h?p_(Tt,!0):p_(W.stateNode,!1)}catch(he){en(W,W.return,he)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=e.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,Kc(e,r))));break;case 19:xi(i,e),Si(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,Kc(e,c)));break;case 30:break;case 21:break;default:xi(i,e),Si(e)}}function Si(e){var i=e.flags;if(i&2){try{for(var r,c=e.return;c!==null;){if(gv(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=$h(e);Zc(e,m,h);break;case 5:var b=r.stateNode;r.flags&32&&(li(b,""),r.flags&=-33);var L=$h(e);Zc(e,L,b);break;case 3:case 4:var W=r.stateNode.containerInfo,pt=$h(e);td(e,pt,W);break;default:throw Error(a(161))}}catch(Ut){en(e,e.return,Ut)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Tv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Tv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Fa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xv(e,i.alternate,i),i=i.sibling}function sr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:gs(4,i,i.return),sr(i);break;case 1:da(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&pv(i,i.return,r),sr(i);break;case 27:vl(i.stateNode);case 26:case 5:da(i,i.return),sr(i);break;case 22:i.memoizedState===null&&sr(i);break;case 30:sr(i);break;default:sr(i)}e=e.sibling}}function Ha(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ha(h,m,r),ol(4,m);break;case 1:if(Ha(h,m,r),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(pt){en(c,c.return,pt)}if(c=m,h=c.updateQueue,h!==null){var L=c.stateNode;try{var W=h.shared.hiddenCallbacks;if(W!==null)for(h.shared.hiddenCallbacks=null,h=0;h<W.length;h++)ng(W[h],L)}catch(pt){en(c,c.return,pt)}}r&&b&64&&dv(m),ll(m,m.return);break;case 27:vv(m);case 26:case 5:Ha(h,m,r),r&&c===null&&b&4&&mv(m),ll(m,m.return);break;case 12:Ha(h,m,r);break;case 31:Ha(h,m,r),r&&b&4&&Mv(h,m);break;case 13:Ha(h,m,r),r&&b&4&&bv(h,m);break;case 22:m.memoizedState===null&&Ha(h,m,r),ll(m,m.return);break;case 30:break;default:Ha(h,m,r)}i=i.sibling}}function nd(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Zo(r))}function id(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e))}function ta(e,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Av(e,i,r,c),i=i.sibling}function Av(e,i,r,c){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ta(e,i,r,c),h&2048&&ol(9,i);break;case 1:ta(e,i,r,c);break;case 3:ta(e,i,r,c),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e)));break;case 12:if(h&2048){ta(e,i,r,c),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,L=m.onPostCommit;typeof L=="function"&&L(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){en(i,i.return,W)}}else ta(e,i,r,c);break;case 31:ta(e,i,r,c);break;case 13:ta(e,i,r,c);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?ta(e,i,r,c):cl(e,i):m._visibility&2?ta(e,i,r,c):(m._visibility|=2,Wr(e,i,r,c,(i.subtreeFlags&10256)!==0||!1)),h&2048&&nd(b,i);break;case 24:ta(e,i,r,c),h&2048&&id(i.alternate,i);break;default:ta(e,i,r,c)}}function Wr(e,i,r,c,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,L=r,W=c,pt=b.flags;switch(b.tag){case 0:case 11:case 15:Wr(m,b,L,W,h),ol(8,b);break;case 23:break;case 22:var Ut=b.stateNode;b.memoizedState!==null?Ut._visibility&2?Wr(m,b,L,W,h):cl(m,b):(Ut._visibility|=2,Wr(m,b,L,W,h)),h&&pt&2048&&nd(b.alternate,b);break;case 24:Wr(m,b,L,W,h),h&&pt&2048&&id(b.alternate,b);break;default:Wr(m,b,L,W,h)}i=i.sibling}}function cl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,c=i,h=c.flags;switch(c.tag){case 22:cl(r,c),h&2048&&nd(c.alternate,c);break;case 24:cl(r,c),h&2048&&id(c.alternate,c);break;default:cl(r,c)}i=i.sibling}}var ul=8192;function qr(e,i,r){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)wv(e,i,r),e=e.sibling}function wv(e,i,r){switch(e.tag){case 26:qr(e,i,r),e.flags&ul&&e.memoizedState!==null&&lM(r,$i,e.memoizedState,e.memoizedProps);break;case 5:qr(e,i,r);break;case 3:case 4:var c=$i;$i=cu(e.stateNode.containerInfo),qr(e,i,r),$i=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=ul,ul=16777216,qr(e,i,r),ul=c):qr(e,i,r));break;default:qr(e,i,r)}}function Cv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function fl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Vn=c,Dv(c,e)}Cv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rv(e),e=e.sibling}function Rv(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&gs(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Jc(e)):fl(e);break;default:fl(e)}}function Jc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Vn=c,Dv(c,e)}Cv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:gs(8,i,i.return),Jc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Jc(i));break;default:Jc(i)}e=e.sibling}}function Dv(e,i){for(;Vn!==null;){var r=Vn;switch(r.tag){case 0:case 11:case 15:gs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Zo(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Vn=c;else t:for(r=e;Vn!==null;){c=Vn;var h=c.sibling,m=c.return;if(Sv(c),c===r){Vn=null;break t}if(h!==null){h.return=m,Vn=h;break t}Vn=m}}}var by={getCacheForType:function(e){var i=Zn(Un),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Zn(Un).controller.signal}},Ey=typeof WeakMap=="function"?WeakMap:Map,Je=0,un=null,Be=null,He=0,tn=0,Di=null,vs=!1,Yr=!1,ad=!1,Ga=0,En=0,_s=0,rr=0,sd=0,Ui=0,Zr=0,hl=null,yi=null,rd=!1,Qc=0,Uv=0,jc=1/0,$c=null,xs=null,Fn=0,Ss=null,Kr=null,Va=0,od=0,ld=null,Nv=null,dl=0,cd=null;function Ni(){return(Je&2)!==0&&He!==0?He&-He:H.T!==null?md():_n()}function Lv(){if(Ui===0)if((He&536870912)===0||ke){var e=me;me<<=1,(me&3932160)===0&&(me=262144),Ui=e}else Ui=536870912;return e=Ci.current,e!==null&&(e.flags|=32),Ui}function Mi(e,i,r){(e===un&&(tn===2||tn===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),ys(e,He,Ui,!1)),ct(e,r),((Je&2)===0||e!==un)&&(e===un&&((Je&2)===0&&(rr|=r),En===4&&ys(e,He,Ui,!1)),pa(e))}function Pv(e,i,r){if((Je&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Wt(e,i),h=c?wy(e,i):fd(e,i,!0),m=c;do{if(h===0){Yr&&!c&&ys(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!Ty(r)){h=fd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var L=e;h=hl;var W=L.current.memoizedState.isDehydrated;if(W&&(Jr(L,b).flags|=256),b=fd(L,b,!1),b!==2){if(ad&&!W){L.errorRecoveryDisabledLanes|=m,rr|=m,h=4;break t}m=yi,yi=h,m!==null&&(yi===null?yi=m:yi.push.apply(yi,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){Jr(e,0),ys(e,i,0,!0);break}t:{switch(c=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ys(c,i,Ui,!vs);break t;case 2:yi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Qc+300-pe(),10<h)){if(ys(c,i,Ui,!vs),Rt(c,0,!0)!==0)break t;Va=i,c.timeoutHandle=f_(Ov.bind(null,c,r,yi,$c,rd,i,Ui,rr,Zr,vs,m,"Throttled",-0,0),h);break t}Ov(c,r,yi,$c,rd,i,Ui,rr,Zr,vs,m,null,-0,0)}}break}while(!0);pa(e)}function Ov(e,i,r,c,h,m,b,L,W,pt,Ut,Pt,vt,Tt){if(e.timeoutHandle=-1,Pt=i.subtreeFlags,Pt&8192||(Pt&16785408)===16785408){Pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},wv(i,m,Pt);var he=(m&62914560)===m?Qc-pe():(m&4194048)===m?Uv-pe():0;if(he=cM(Pt,he),he!==null){Va=m,e.cancelPendingCommit=he(kv.bind(null,e,i,m,r,c,h,b,L,W,Ut,Pt,null,vt,Tt)),ys(e,m,b,!pt);return}}kv(e,i,m,r,c,h,b,L,W)}function Ty(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var h=r[c],m=h.getSnapshot;h=h.value;try{if(!Ai(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ys(e,i,r,c){i&=~sd,i&=~rr,e.suspendedLanes|=i,e.pingedLanes&=~i,c&&(e.warmLanes|=i),c=e.expirationTimes;for(var h=i;0<h;){var m=31-$t(h),b=1<<m;c[m]=-1,h&=~b}r!==0&&Mt(e,r,i)}function tu(){return(Je&6)===0?(pl(0),!1):!0}function ud(){if(Be!==null){if(tn===0)var e=Be.return;else e=Be,Ua=Qs=null,Ah(e),Hr=null,Jo=0,e=Be;for(;e!==null;)hv(e.alternate,e),e=e.return;Be=null}}function Jr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Wy(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Va=0,ud(),un=e,Be=r=Ra(e.current,null),He=i,tn=0,Di=null,vs=!1,Yr=Wt(e,i),ad=!1,Zr=Ui=sd=rr=_s=En=0,yi=hl=null,rd=!1,(i&8)!==0&&(i|=i&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=i;0<c;){var h=31-$t(c),m=1<<h;i|=e[h],c&=~m}return Ga=i,yc(),r}function zv(e,i){Re=null,H.H=al,i===Fr||i===Rc?(i=jm(),tn=3):i===ph?(i=jm(),tn=4):tn=i===Vh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Di=i,Be===null&&(En=1,kc(e,Gi(i,e.current)))}function Iv(){var e=Ci.current;return e===null?!0:(He&4194048)===He?Wi===null:(He&62914560)===He||(He&536870912)!==0?e===Wi:!1}function Bv(){var e=H.H;return H.H=al,e===null?al:e}function Fv(){var e=H.A;return H.A=by,e}function eu(){En=4,vs||(He&4194048)!==He&&Ci.current!==null||(Yr=!0),(_s&134217727)===0&&(rr&134217727)===0||un===null||ys(un,He,Ui,!1)}function fd(e,i,r){var c=Je;Je|=2;var h=Bv(),m=Fv();(un!==e||He!==i)&&($c=null,Jr(e,i)),i=!1;var b=En;t:do try{if(tn!==0&&Be!==null){var L=Be,W=Di;switch(tn){case 8:ud(),b=6;break t;case 3:case 2:case 9:case 6:Ci.current===null&&(i=!0);var pt=tn;if(tn=0,Di=null,Qr(e,L,W,pt),r&&Yr){b=0;break t}break;default:pt=tn,tn=0,Di=null,Qr(e,L,W,pt)}}Ay(),b=En;break}catch(Ut){zv(e,Ut)}while(!0);return i&&e.shellSuspendCounter++,Ua=Qs=null,Je=c,H.H=h,H.A=m,Be===null&&(un=null,He=0,yc()),b}function Ay(){for(;Be!==null;)Hv(Be)}function wy(e,i){var r=Je;Je|=2;var c=Bv(),h=Fv();un!==e||He!==i?($c=null,jc=pe()+500,Jr(e,i)):Yr=Wt(e,i);t:do try{if(tn!==0&&Be!==null){i=Be;var m=Di;e:switch(tn){case 1:tn=0,Di=null,Qr(e,i,m,1);break;case 2:case 9:if(Jm(m)){tn=0,Di=null,Gv(i);break}i=function(){tn!==2&&tn!==9||un!==e||(tn=7),pa(e)},m.then(i,i);break t;case 3:tn=7;break t;case 4:tn=5;break t;case 7:Jm(m)?(tn=0,Di=null,Gv(i)):(tn=0,Di=null,Qr(e,i,m,7));break;case 5:var b=null;switch(Be.tag){case 26:b=Be.memoizedState;case 5:case 27:var L=Be;if(b?A_(b):L.stateNode.complete){tn=0,Di=null;var W=L.sibling;if(W!==null)Be=W;else{var pt=L.return;pt!==null?(Be=pt,nu(pt)):Be=null}break e}}tn=0,Di=null,Qr(e,i,m,5);break;case 6:tn=0,Di=null,Qr(e,i,m,6);break;case 8:ud(),En=6;break t;default:throw Error(a(462))}}Cy();break}catch(Ut){zv(e,Ut)}while(!0);return Ua=Qs=null,H.H=c,H.A=h,Je=r,Be!==null?0:(un=null,He=0,yc(),En)}function Cy(){for(;Be!==null&&!le();)Hv(Be)}function Hv(e){var i=uv(e.alternate,e,Ga);e.memoizedProps=e.pendingProps,i===null?nu(e):Be=i}function Gv(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=av(r,i,i.pendingProps,i.type,void 0,He);break;case 11:i=av(r,i,i.pendingProps,i.type.render,i.ref,He);break;case 5:Ah(i);default:hv(r,i),i=Be=Fm(i,Ga),i=uv(r,i,Ga)}e.memoizedProps=e.pendingProps,i===null?nu(e):Be=i}function Qr(e,i,r,c){Ua=Qs=null,Ah(i),Hr=null,Jo=0;var h=i.return;try{if(gy(e,h,i,r,He)){En=1,kc(e,Gi(r,e.current)),Be=null;return}}catch(m){if(h!==null)throw Be=h,m;En=1,kc(e,Gi(r,e.current)),Be=null;return}i.flags&32768?(ke||c===1?e=!0:Yr||(He&536870912)!==0?e=!1:(vs=e=!0,(c===2||c===9||c===3||c===6)&&(c=Ci.current,c!==null&&c.tag===13&&(c.flags|=16384))),Vv(i,e)):nu(i)}function nu(e){var i=e;do{if((i.flags&32768)!==0){Vv(i,vs);return}e=i.return;var r=xy(i.alternate,i,Ga);if(r!==null){Be=r;return}if(i=i.sibling,i!==null){Be=i;return}Be=i=e}while(i!==null);En===0&&(En=5)}function Vv(e,i){do{var r=Sy(e.alternate,e);if(r!==null){r.flags&=32767,Be=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Be=e;return}Be=e=r}while(e!==null);En=6,Be=null}function kv(e,i,r,c,h,m,b,L,W){e.cancelPendingCommit=null;do iu();while(Fn!==0);if((Je&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=$f,Q(e,r,m,b,L,W),e===un&&(Be=un=null,He=0),Kr=i,Ss=e,Va=r,od=m,ld=h,Nv=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ny(nt,function(){return Zv(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=H.T,H.T=null,h=V.p,V.p=2,b=Je,Je|=4;try{yy(e,i,r)}finally{Je=b,V.p=h,H.T=c}}Fn=1,Xv(),Wv(),qv()}}function Xv(){if(Fn===1){Fn=0;var e=Ss,i=Kr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var c=V.p;V.p=2;var h=Je;Je|=4;try{Ev(i,e);var m=bd,b=Dm(e.containerInfo),L=m.focusedElem,W=m.selectionRange;if(b!==L&&L&&L.ownerDocument&&Rm(L.ownerDocument.documentElement,L)){if(W!==null&&Zf(L)){var pt=W.start,Ut=W.end;if(Ut===void 0&&(Ut=pt),"selectionStart"in L)L.selectionStart=pt,L.selectionEnd=Math.min(Ut,L.value.length);else{var Pt=L.ownerDocument||document,vt=Pt&&Pt.defaultView||window;if(vt.getSelection){var Tt=vt.getSelection(),he=L.textContent.length,xe=Math.min(W.start,he),on=W.end===void 0?xe:Math.min(W.end,he);!Tt.extend&&xe>on&&(b=on,on=xe,xe=b);var rt=Cm(L,xe),j=Cm(L,on);if(rt&&j&&(Tt.rangeCount!==1||Tt.anchorNode!==rt.node||Tt.anchorOffset!==rt.offset||Tt.focusNode!==j.node||Tt.focusOffset!==j.offset)){var dt=Pt.createRange();dt.setStart(rt.node,rt.offset),Tt.removeAllRanges(),xe>on?(Tt.addRange(dt),Tt.extend(j.node,j.offset)):(dt.setEnd(j.node,j.offset),Tt.addRange(dt))}}}}for(Pt=[],Tt=L;Tt=Tt.parentNode;)Tt.nodeType===1&&Pt.push({element:Tt,left:Tt.scrollLeft,top:Tt.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Pt.length;L++){var Lt=Pt[L];Lt.element.scrollLeft=Lt.left,Lt.element.scrollTop=Lt.top}}mu=!!Md,bd=Md=null}finally{Je=h,V.p=c,H.T=r}}e.current=i,Fn=2}}function Wv(){if(Fn===2){Fn=0;var e=Ss,i=Kr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var c=V.p;V.p=2;var h=Je;Je|=4;try{xv(e,i.alternate,i)}finally{Je=h,V.p=c,H.T=r}}Fn=3}}function qv(){if(Fn===4||Fn===3){Fn=0,X();var e=Ss,i=Kr,r=Va,c=Nv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Fn=5:(Fn=0,Kr=Ss=null,Yv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(xs=null),In(r),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(_t,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=H.T,h=V.p,V.p=2,H.T=null;try{for(var m=e.onRecoverableError,b=0;b<c.length;b++){var L=c[b];m(L.value,{componentStack:L.stack})}}finally{H.T=i,V.p=h}}(Va&3)!==0&&iu(),pa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===cd?dl++:(dl=0,cd=e):dl=0,pl(0)}}function Yv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zo(i)))}function iu(){return Xv(),Wv(),qv(),Zv()}function Zv(){if(Fn!==5)return!1;var e=Ss,i=od;od=0;var r=In(Va),c=H.T,h=V.p;try{V.p=32>r?32:r,H.T=null,r=ld,ld=null;var m=Ss,b=Va;if(Fn=0,Kr=Ss=null,Va=0,(Je&6)!==0)throw Error(a(331));var L=Je;if(Je|=4,Rv(m.current),Av(m,m.current,b,r),Je=L,pl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(_t,m)}catch{}return!0}finally{V.p=h,H.T=c,Yv(e,i)}}function Kv(e,i,r){i=Gi(r,i),i=Gh(e.stateNode,i,2),e=ds(e,i,2),e!==null&&(ct(e,2),pa(e))}function en(e,i,r){if(e.tag===3)Kv(e,e,r);else for(;i!==null;){if(i.tag===3){Kv(i,e,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xs===null||!xs.has(c))){e=Gi(r,e),r=Jg(2),c=ds(i,r,2),c!==null&&(Qg(r,c,i,e),ct(c,2),pa(c));break}}i=i.return}}function hd(e,i,r){var c=e.pingCache;if(c===null){c=e.pingCache=new Ey;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(r)||(ad=!0,h.add(r),e=Ry.bind(null,e,i,r),i.then(e,e))}function Ry(e,i,r){var c=e.pingCache;c!==null&&c.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,un===e&&(He&r)===r&&(En===4||En===3&&(He&62914560)===He&&300>pe()-Qc?(Je&2)===0&&Jr(e,0):sd|=r,Zr===He&&(Zr=0)),pa(e)}function Jv(e,i){i===0&&(i=R()),e=Zs(e,i),e!==null&&(ct(e,i),pa(e))}function Dy(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Jv(e,r)}function Uy(e,i){var r=0;switch(e.tag){case 31:case 13:var c=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),Jv(e,r)}function Ny(e,i){return Ot(e,i)}var au=null,jr=null,dd=!1,su=!1,pd=!1,Ms=0;function pa(e){e!==jr&&e.next===null&&(jr===null?au=jr=e:jr=jr.next=e),su=!0,dd||(dd=!0,Py())}function pl(e,i){if(!pd&&su){pd=!0;do for(var r=!1,c=au;c!==null;){if(e!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var b=c.suspendedLanes,L=c.pingedLanes;m=(1<<31-$t(42|e)+1)-1,m&=h&~(b&~L),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,t_(c,m))}else m=He,m=Rt(c,c===un?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Wt(c,m)||(r=!0,t_(c,m));c=c.next}while(r);pd=!1}}function Ly(){Qv()}function Qv(){su=dd=!1;var e=0;Ms!==0&&Xy()&&(e=Ms);for(var i=pe(),r=null,c=au;c!==null;){var h=c.next,m=jv(c,i);m===0?(c.next=null,r===null?au=h:r.next=h,h===null&&(jr=r)):(r=c,(e!==0||(m&3)!==0)&&(su=!0)),c=h}Fn!==0&&Fn!==5||pl(e),Ms!==0&&(Ms=0)}function jv(e,i){for(var r=e.suspendedLanes,c=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-$t(m),L=1<<b,W=h[b];W===-1?((L&r)===0||(L&c)!==0)&&(h[b]=te(L,i)):W<=i&&(e.expiredLanes|=L),m&=~L}if(i=un,r=He,r=Rt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,r===0||e===i&&(tn===2||tn===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&It(c),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Wt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(c!==null&&It(c),In(r)){case 2:case 8:r=T;break;case 32:r=nt;break;case 268435456:r=bt;break;default:r=nt}return c=$v.bind(null,e),r=Ot(r,c),e.callbackPriority=i,e.callbackNode=r,i}return c!==null&&c!==null&&It(c),e.callbackPriority=2,e.callbackNode=null,2}function $v(e,i){if(Fn!==0&&Fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(iu()&&e.callbackNode!==r)return null;var c=He;return c=Rt(e,e===un?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(Pv(e,c,i),jv(e,pe()),e.callbackNode!=null&&e.callbackNode===r?$v.bind(null,e):null)}function t_(e,i){if(iu())return null;Pv(e,i,!0)}function Py(){qy(function(){(Je&6)!==0?Ot(B,Ly):Qv()})}function md(){if(Ms===0){var e=Ir;e===0&&(e=fe,fe<<=1,(fe&261888)===0&&(fe=256)),Ms=e}return Ms}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qi(""+e)}function n_(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function Oy(e,i,r,c,h){if(i==="submit"&&r&&r.stateNode===h){var m=e_((h[De]||null).action),b=c.submitter;b&&(i=(i=b[De]||null)?e_(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var L=new vc("action","action",null,c,h);e.push({event:L,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ms!==0){var W=b?n_(h,b):new FormData(h);Oh(r,{pending:!0,data:W,method:h.method,action:m},null,W)}}else typeof m=="function"&&(L.preventDefault(),W=b?n_(h,b):new FormData(h),Oh(r,{pending:!0,data:W,method:h.method,action:m},m,W))},currentTarget:h}]})}}for(var gd=0;gd<jf.length;gd++){var vd=jf[gd],zy=vd.toLowerCase(),Iy=vd[0].toUpperCase()+vd.slice(1);ji(zy,"on"+Iy)}ji(Lm,"onAnimationEnd"),ji(Pm,"onAnimationIteration"),ji(Om,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji($S,"onTransitionRun"),ji(ty,"onTransitionStart"),ji(ey,"onTransitionCancel"),ji(zm,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),U("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),U("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),U("onBeforeInput",["compositionend","keypress","textInput","paste"]),U("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),U("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function i_(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var c=e[r],h=c.event;c=c.listeners;t:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var L=c[b],W=L.instance,pt=L.currentTarget;if(L=L.listener,W!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=pt;try{m(h)}catch(Ut){Sc(Ut)}h.currentTarget=null,m=W}else for(b=0;b<c.length;b++){if(L=c[b],W=L.instance,pt=L.currentTarget,L=L.listener,W!==m&&h.isPropagationStopped())break t;m=L,h.currentTarget=pt;try{m(h)}catch(Ut){Sc(Ut)}h.currentTarget=null,m=W}}}}function Fe(e,i){var r=i[Ta];r===void 0&&(r=i[Ta]=new Set);var c=e+"__bubble";r.has(c)||(a_(i,e,2,!1),r.add(c))}function _d(e,i,r){var c=0;i&&(c|=4),a_(r,e,c,i)}var ru="_reactListening"+Math.random().toString(36).slice(2);function xd(e){if(!e[ru]){e[ru]=!0,dc.forEach(function(r){r!=="selectionchange"&&(By.has(r)||_d(r,!1,e),_d(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ru]||(i[ru]=!0,_d("selectionchange",!1,i))}}function a_(e,i,r,c){switch(L_(i)){case 2:var h=hM;break;case 8:h=dM;break;default:h=Pd}r=h.bind(null,i,r,e),h=void 0,!Ff||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function Sd(e,i,r,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)t:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var L=c.stateNode.containerInfo;if(L===h)break;if(b===4)for(b=c.return;b!==null;){var W=b.tag;if((W===3||W===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;L!==null;){if(b=Aa(L),b===null)return;if(W=b.tag,W===5||W===6||W===26||W===27){c=m=b;continue t}L=L.parentNode}}c=c.return}cm(function(){var pt=m,Ut=If(r),Pt=[];t:{var vt=Im.get(e);if(vt!==void 0){var Tt=vc,he=e;switch(e){case"keypress":if(mc(r)===0)break t;case"keydown":case"keyup":Tt=US;break;case"focusin":he="focus",Tt=kf;break;case"focusout":he="blur",Tt=kf;break;case"beforeblur":case"afterblur":Tt=kf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Tt=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Tt=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Tt=PS;break;case Lm:case Pm:case Om:Tt=MS;break;case zm:Tt=zS;break;case"scroll":case"scrollend":Tt=vS;break;case"wheel":Tt=BS;break;case"copy":case"cut":case"paste":Tt=ES;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Tt=pm;break;case"toggle":case"beforetoggle":Tt=HS}var xe=(i&4)!==0,on=!xe&&(e==="scroll"||e==="scrollend"),rt=xe?vt!==null?vt+"Capture":null:vt;xe=[];for(var j=pt,dt;j!==null;){var Lt=j;if(dt=Lt.stateNode,Lt=Lt.tag,Lt!==5&&Lt!==26&&Lt!==27||dt===null||rt===null||(Lt=Io(j,rt),Lt!=null&&xe.push(gl(j,Lt,dt))),on)break;j=j.return}0<xe.length&&(vt=new Tt(vt,he,null,r,Ut),Pt.push({event:vt,listeners:xe}))}}if((i&7)===0){t:{if(vt=e==="mouseover"||e==="pointerover",Tt=e==="mouseout"||e==="pointerout",vt&&r!==zf&&(he=r.relatedTarget||r.fromElement)&&(Aa(he)||he[xn]))break t;if((Tt||vt)&&(vt=Ut.window===Ut?Ut:(vt=Ut.ownerDocument)?vt.defaultView||vt.parentWindow:window,Tt?(he=r.relatedTarget||r.toElement,Tt=pt,he=he?Aa(he):null,he!==null&&(on=l(he),xe=he.tag,he!==on||xe!==5&&xe!==27&&xe!==6)&&(he=null)):(Tt=null,he=pt),Tt!==he)){if(xe=hm,Lt="onMouseLeave",rt="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(xe=pm,Lt="onPointerLeave",rt="onPointerEnter",j="pointer"),on=Tt==null?vt:Xs(Tt),dt=he==null?vt:Xs(he),vt=new xe(Lt,j+"leave",Tt,r,Ut),vt.target=on,vt.relatedTarget=dt,Lt=null,Aa(Ut)===pt&&(xe=new xe(rt,j+"enter",he,r,Ut),xe.target=dt,xe.relatedTarget=on,Lt=xe),on=Lt,Tt&&he)e:{for(xe=Fy,rt=Tt,j=he,dt=0,Lt=rt;Lt;Lt=xe(Lt))dt++;Lt=0;for(var ge=j;ge;ge=xe(ge))Lt++;for(;0<dt-Lt;)rt=xe(rt),dt--;for(;0<Lt-dt;)j=xe(j),Lt--;for(;dt--;){if(rt===j||j!==null&&rt===j.alternate){xe=rt;break e}rt=xe(rt),j=xe(j)}xe=null}else xe=null;Tt!==null&&s_(Pt,vt,Tt,xe,!1),he!==null&&on!==null&&s_(Pt,on,he,xe,!0)}}t:{if(vt=pt?Xs(pt):window,Tt=vt.nodeName&&vt.nodeName.toLowerCase(),Tt==="select"||Tt==="input"&&vt.type==="file")var Ye=Mm;else if(Sm(vt))if(bm)Ye=JS;else{Ye=ZS;var de=YS}else Tt=vt.nodeName,!Tt||Tt.toLowerCase()!=="input"||vt.type!=="checkbox"&&vt.type!=="radio"?pt&&Bi(pt.elementType)&&(Ye=Mm):Ye=KS;if(Ye&&(Ye=Ye(e,pt))){ym(Pt,Ye,r,Ut);break t}de&&de(e,vt,pt),e==="focusout"&&pt&&vt.type==="number"&&pt.memoizedProps.value!=null&&Bn(vt,"number",vt.value)}switch(de=pt?Xs(pt):window,e){case"focusin":(Sm(de)||de.contentEditable==="true")&&(Rr=de,Kf=pt,Wo=null);break;case"focusout":Wo=Kf=Rr=null;break;case"mousedown":Jf=!0;break;case"contextmenu":case"mouseup":case"dragend":Jf=!1,Um(Pt,r,Ut);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Um(Pt,r,Ut)}var Ue;if(Wf)t:{switch(e){case"compositionstart":var Ge="onCompositionStart";break t;case"compositionend":Ge="onCompositionEnd";break t;case"compositionupdate":Ge="onCompositionUpdate";break t}Ge=void 0}else Cr?_m(e,r)&&(Ge="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ge="onCompositionStart");Ge&&(mm&&r.locale!=="ko"&&(Cr||Ge!=="onCompositionStart"?Ge==="onCompositionEnd"&&Cr&&(Ue=um()):(rs=Ut,Hf="value"in rs?rs.value:rs.textContent,Cr=!0)),de=ou(pt,Ge),0<de.length&&(Ge=new dm(Ge,e,null,r,Ut),Pt.push({event:Ge,listeners:de}),Ue?Ge.data=Ue:(Ue=xm(r),Ue!==null&&(Ge.data=Ue)))),(Ue=VS?kS(e,r):XS(e,r))&&(Ge=ou(pt,"onBeforeInput"),0<Ge.length&&(de=new dm("onBeforeInput","beforeinput",null,r,Ut),Pt.push({event:de,listeners:Ge}),de.data=Ue)),Oy(Pt,e,pt,r,Ut)}i_(Pt,i)})}function gl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ou(e,i){for(var r=i+"Capture",c=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=Io(e,r),h!=null&&c.unshift(gl(e,h,m)),h=Io(e,i),h!=null&&c.push(gl(e,h,m))),e.tag===3)return c;e=e.return}return[]}function Fy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,i,r,c,h){for(var m=i._reactName,b=[];r!==null&&r!==c;){var L=r,W=L.alternate,pt=L.stateNode;if(L=L.tag,W!==null&&W===c)break;L!==5&&L!==26&&L!==27||pt===null||(W=pt,h?(pt=Io(r,m),pt!=null&&b.unshift(gl(r,pt,W))):h||(pt=Io(r,m),pt!=null&&b.push(gl(r,pt,W)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var Hy=/\r\n?/g,Gy=/\u0000|\uFFFD/g;function r_(e){return(typeof e=="string"?e:""+e).replace(Hy,`
`).replace(Gy,"")}function o_(e,i){return i=r_(i),r_(e)===i}function rn(e,i,r,c,h,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||li(e,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&li(e,""+c);break;case"className":jt(e,"class",c);break;case"tabIndex":jt(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,r,c);break;case"style":mn(e,c,m);break;case"data":if(i!=="object"){jt(e,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Qi(""+c),e.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&rn(e,i,"name",h.name,h,null),rn(e,i,"formEncType",h.formEncType,h,null),rn(e,i,"formMethod",h.formMethod,h,null),rn(e,i,"formTarget",h.formTarget,h,null)):(rn(e,i,"encType",h.encType,h,null),rn(e,i,"method",h.method,h,null),rn(e,i,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=Qi(""+c),e.setAttribute(r,c);break;case"onClick":c!=null&&(e.onclick=Fi);break;case"onScroll":c!=null&&Fe("scroll",e);break;case"onScrollEnd":c!=null&&Fe("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}r=Qi(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""+c):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":c===!0?e.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,c):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(r,c):e.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(r):e.setAttribute(r,c);break;case"popover":Fe("beforetoggle",e),Fe("toggle",e),re(e,"popover",c);break;case"xlinkActuate":ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ae(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ae(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ae(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ae(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":re(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=an.get(r)||r,re(e,r,c))}}function yd(e,i,r,c,h,m){switch(r){case"style":mn(e,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof c=="string"?li(e,c):(typeof c=="number"||typeof c=="bigint")&&li(e,""+c);break;case"onScroll":c!=null&&Fe("scroll",e);break;case"onScrollEnd":c!=null&&Fe("scrollend",e);break;case"onClick":c!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zo.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[De]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,c,h);break t}r in e?e[r]=c:c===!0?e.setAttribute(r,""):re(e,r,c)}}}function Jn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fe("error",e),Fe("load",e);var c=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:rn(e,i,m,b,r,null)}}h&&rn(e,i,"srcSet",r.srcSet,r,null),c&&rn(e,i,"src",r.src,r,null);return;case"input":Fe("invalid",e);var L=m=b=h=null,W=null,pt=null;for(c in r)if(r.hasOwnProperty(c)){var Ut=r[c];if(Ut!=null)switch(c){case"name":h=Ut;break;case"type":b=Ut;break;case"checked":W=Ut;break;case"defaultChecked":pt=Ut;break;case"value":m=Ut;break;case"defaultValue":L=Ut;break;case"children":case"dangerouslySetInnerHTML":if(Ut!=null)throw Error(a(137,i));break;default:rn(e,i,c,Ut,r,null)}}oe(e,m,L,W,pt,b,h,!1);return;case"select":Fe("invalid",e),c=b=m=null;for(h in r)if(r.hasOwnProperty(h)&&(L=r[h],L!=null))switch(h){case"value":m=L;break;case"defaultValue":b=L;break;case"multiple":c=L;default:rn(e,i,h,L,r,null)}i=m,r=b,e.multiple=!!c,i!=null?Pe(e,!!c,i,!1):r!=null&&Pe(e,!!c,r,!0);return;case"textarea":Fe("invalid",e),m=h=c=null;for(b in r)if(r.hasOwnProperty(b)&&(L=r[b],L!=null))switch(b){case"value":c=L;break;case"defaultValue":h=L;break;case"children":m=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:rn(e,i,b,L,r,null)}Ti(e,c,h,m);return;case"option":for(W in r)if(r.hasOwnProperty(W)&&(c=r[W],c!=null))switch(W){case"selected":e.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rn(e,i,W,c,r,null)}return;case"dialog":Fe("beforetoggle",e),Fe("toggle",e),Fe("cancel",e),Fe("close",e);break;case"iframe":case"object":Fe("load",e);break;case"video":case"audio":for(c=0;c<ml.length;c++)Fe(ml[c],e);break;case"image":Fe("error",e),Fe("load",e);break;case"details":Fe("toggle",e);break;case"embed":case"source":case"link":Fe("error",e),Fe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(pt in r)if(r.hasOwnProperty(pt)&&(c=r[pt],c!=null))switch(pt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:rn(e,i,pt,c,r,null)}return;default:if(Bi(i)){for(Ut in r)r.hasOwnProperty(Ut)&&(c=r[Ut],c!==void 0&&yd(e,i,Ut,c,r,void 0));return}}for(L in r)r.hasOwnProperty(L)&&(c=r[L],c!=null&&rn(e,i,L,c,r,null))}function Vy(e,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,L=null,W=null,pt=null,Ut=null;for(Tt in r){var Pt=r[Tt];if(r.hasOwnProperty(Tt)&&Pt!=null)switch(Tt){case"checked":break;case"value":break;case"defaultValue":W=Pt;default:c.hasOwnProperty(Tt)||rn(e,i,Tt,null,c,Pt)}}for(var vt in c){var Tt=c[vt];if(Pt=r[vt],c.hasOwnProperty(vt)&&(Tt!=null||Pt!=null))switch(vt){case"type":m=Tt;break;case"name":h=Tt;break;case"checked":pt=Tt;break;case"defaultChecked":Ut=Tt;break;case"value":b=Tt;break;case"defaultValue":L=Tt;break;case"children":case"dangerouslySetInnerHTML":if(Tt!=null)throw Error(a(137,i));break;default:Tt!==Pt&&rn(e,i,vt,Tt,c,Pt)}}Dn(e,b,L,W,pt,Ut,m,h);return;case"select":Tt=b=L=vt=null;for(m in r)if(W=r[m],r.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":Tt=W;default:c.hasOwnProperty(m)||rn(e,i,m,null,c,W)}for(h in c)if(m=c[h],W=r[h],c.hasOwnProperty(h)&&(m!=null||W!=null))switch(h){case"value":vt=m;break;case"defaultValue":L=m;break;case"multiple":b=m;default:m!==W&&rn(e,i,h,m,c,W)}i=L,r=b,c=Tt,vt!=null?Pe(e,!!r,vt,!1):!!c!=!!r&&(i!=null?Pe(e,!!r,i,!0):Pe(e,!!r,r?[]:"",!1));return;case"textarea":Tt=vt=null;for(L in r)if(h=r[L],r.hasOwnProperty(L)&&h!=null&&!c.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:rn(e,i,L,null,c,h)}for(b in c)if(h=c[b],m=r[b],c.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":vt=h;break;case"defaultValue":Tt=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&rn(e,i,b,h,c,m)}oi(e,vt,Tt);return;case"option":for(var he in r)if(vt=r[he],r.hasOwnProperty(he)&&vt!=null&&!c.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:rn(e,i,he,null,c,vt)}for(W in c)if(vt=c[W],Tt=r[W],c.hasOwnProperty(W)&&vt!==Tt&&(vt!=null||Tt!=null))switch(W){case"selected":e.selected=vt&&typeof vt!="function"&&typeof vt!="symbol";break;default:rn(e,i,W,vt,c,Tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in r)vt=r[xe],r.hasOwnProperty(xe)&&vt!=null&&!c.hasOwnProperty(xe)&&rn(e,i,xe,null,c,vt);for(pt in c)if(vt=c[pt],Tt=r[pt],c.hasOwnProperty(pt)&&vt!==Tt&&(vt!=null||Tt!=null))switch(pt){case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,i));break;default:rn(e,i,pt,vt,c,Tt)}return;default:if(Bi(i)){for(var on in r)vt=r[on],r.hasOwnProperty(on)&&vt!==void 0&&!c.hasOwnProperty(on)&&yd(e,i,on,void 0,c,vt);for(Ut in c)vt=c[Ut],Tt=r[Ut],!c.hasOwnProperty(Ut)||vt===Tt||vt===void 0&&Tt===void 0||yd(e,i,Ut,vt,c,Tt);return}}for(var rt in r)vt=r[rt],r.hasOwnProperty(rt)&&vt!=null&&!c.hasOwnProperty(rt)&&rn(e,i,rt,null,c,vt);for(Pt in c)vt=c[Pt],Tt=r[Pt],!c.hasOwnProperty(Pt)||vt===Tt||vt==null&&Tt==null||rn(e,i,Pt,vt,c,Tt)}function l_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ky(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var h=r[c],m=h.transferSize,b=h.initiatorType,L=h.duration;if(m&&L&&l_(b)){for(b=0,L=h.responseEnd,c+=1;c<r.length;c++){var W=r[c],pt=W.startTime;if(pt>L)break;var Ut=W.transferSize,Pt=W.initiatorType;Ut&&l_(Pt)&&(W=W.responseEnd,b+=Ut*(W<L?1:(L-pt)/(W-pt)))}if(--c,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Md=null,bd=null;function lu(e){return e.nodeType===9?e:e.ownerDocument}function c_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ed(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Td=null;function Xy(){var e=window.event;return e&&e.type==="popstate"?e===Td?!1:(Td=e,!0):(Td=null,!1)}var f_=typeof setTimeout=="function"?setTimeout:void 0,Wy=typeof clearTimeout=="function"?clearTimeout:void 0,h_=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof h_<"u"?function(e){return h_.resolve(null).then(e).catch(Yy)}:f_;function Yy(e){setTimeout(function(){throw e})}function bs(e){return e==="head"}function d_(e,i){var r=i,c=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(c===0){e.removeChild(h),no(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")vl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,vl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,L=m.nodeName;m[ns]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&vl(e.ownerDocument.body);r=h}while(r);no(i)}function p_(e,i){var r=e;e=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=c}while(r)}function Ad(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Ad(r),is(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Zy(e,i,r,c){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=qi(e.nextSibling),e===null)break}return null}function Ky(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=qi(e.nextSibling),e===null))return null;return e}function m_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=qi(e.nextSibling),e===null))return null;return e}function wd(e){return e.data==="$?"||e.data==="$~"}function Cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Jy(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function qi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Rd=null;function g_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return qi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function __(e,i,r){switch(i=lu(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function vl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);is(e)}var Yi=new Map,x_=new Set;function cu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=V.d;V.d={f:Qy,r:jy,D:$y,C:tM,L:eM,m:nM,X:aM,S:iM,M:sM};function Qy(){var e=ka.f(),i=tu();return e||i}function jy(e){var i=wa(e);i!==null&&i.tag===5&&i.type==="form"?zg(i):ka.r(e)}var $r=typeof document>"u"?null:document;function S_(e,i,r){var c=$r;if(c&&typeof i=="string"&&i){var h=Le(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),x_.has(h)||(x_.add(h),e={rel:e,crossOrigin:r,href:i},c.querySelector(h)===null&&(i=c.createElement("link"),Jn(i,"link",e),Rn(i),c.head.appendChild(i)))}}function $y(e){ka.D(e),S_("dns-prefetch",e,null)}function tM(e,i){ka.C(e,i),S_("preconnect",e,i)}function eM(e,i,r){ka.L(e,i,r);var c=$r;if(c&&e&&i){var h='link[rel="preload"][as="'+Le(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+Le(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+Le(r.imageSizes)+'"]')):h+='[href="'+Le(e)+'"]';var m=h;switch(i){case"style":m=to(e);break;case"script":m=eo(e)}Yi.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Yi.set(m,e),c.querySelector(h)!==null||i==="style"&&c.querySelector(_l(m))||i==="script"&&c.querySelector(xl(m))||(i=c.createElement("link"),Jn(i,"link",e),Rn(i),c.head.appendChild(i)))}}function nM(e,i){ka.m(e,i);var r=$r;if(r&&e){var c=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Le(c)+'"][href="'+Le(e)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=eo(e)}if(!Yi.has(m)&&(e=_({rel:"modulepreload",href:e},i),Yi.set(m,e),r.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(xl(m)))return}c=r.createElement("link"),Jn(c,"link",e),Rn(c),r.head.appendChild(c)}}}function iM(e,i,r){ka.S(e,i,r);var c=$r;if(c&&e){var h=as(c).hoistableStyles,m=to(e);i=i||"default";var b=h.get(m);if(!b){var L={loading:0,preload:null};if(b=c.querySelector(_l(m)))L.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Yi.get(m))&&Dd(e,r);var W=b=c.createElement("link");Rn(W),Jn(W,"link",e),W._p=new Promise(function(pt,Ut){W.onload=pt,W.onerror=Ut}),W.addEventListener("load",function(){L.loading|=1}),W.addEventListener("error",function(){L.loading|=2}),L.loading|=4,uu(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:L},h.set(m,b)}}}function aM(e,i){ka.X(e,i);var r=$r;if(r&&e){var c=as(r).hoistableScripts,h=eo(e),m=c.get(h);m||(m=r.querySelector(xl(h)),m||(e=_({src:e,async:!0},i),(i=Yi.get(h))&&Ud(e,i),m=r.createElement("script"),Rn(m),Jn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function sM(e,i){ka.M(e,i);var r=$r;if(r&&e){var c=as(r).hoistableScripts,h=eo(e),m=c.get(h);m||(m=r.querySelector(xl(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Yi.get(h))&&Ud(e,i),m=r.createElement("script"),Rn(m),Jn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function y_(e,i,r,c){var h=(h=qt.current)?cu(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=to(r.href),r=as(h).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=to(r.href);var m=as(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(_l(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Yi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Yi.set(e,r),m||rM(h,e,r,b.state))),i&&c===null)throw Error(a(528,""));return b}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=eo(r),r=as(h).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function to(e){return'href="'+Le(e)+'"'}function _l(e){return'link[rel="stylesheet"]['+e+"]"}function M_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function rM(e,i,r,c){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=e.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Jn(i,"link",r),Rn(i),e.head.appendChild(i))}function eo(e){return'[src="'+Le(e)+'"]'}function xl(e){return"script[async]"+e}function b_(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=e.querySelector('style[data-href~="'+Le(r.href)+'"]');if(c)return i.instance=c,Rn(c),c;var h=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),Rn(c),Jn(c,"style",h),uu(c,r.precedence,e),i.instance=c;case"stylesheet":h=to(r.href);var m=e.querySelector(_l(h));if(m)return i.state.loading|=4,i.instance=m,Rn(m),m;c=M_(r),(h=Yi.get(h))&&Dd(c,h),m=(e.ownerDocument||e).createElement("link"),Rn(m);var b=m;return b._p=new Promise(function(L,W){b.onload=L,b.onerror=W}),Jn(m,"link",c),i.state.loading|=4,uu(m,r.precedence,e),i.instance=m;case"script":return m=eo(r.src),(h=e.querySelector(xl(m)))?(i.instance=h,Rn(h),h):(c=r,(h=Yi.get(m))&&(c=_({},r),Ud(c,h)),e=e.ownerDocument||e,h=e.createElement("script"),Rn(h),Jn(h,"link",c),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,uu(c,r.precedence,e));return i.instance}function uu(e,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,b=0;b<c.length;b++){var L=c[b];if(L.dataset.precedence===i)m=L;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Dd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fu=null;function E_(e,i,r){if(fu===null){var c=new Map,h=fu=new Map;h.set(r,c)}else h=fu,c=h.get(r),c||(c=new Map,h.set(r,c));if(c.has(e))return c;for(c.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[ns]||m[Me]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var L=c.get(b);L?L.push(m):c.set(b,[m])}}return c}function T_(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function oM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function A_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lM(e,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=to(c.href),m=i.querySelector(_l(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=hu.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,Rn(m);return}m=i.ownerDocument||i,c=M_(c),(h=Yi.get(h))&&Dd(c,h),m=m.createElement("link"),Rn(m);var b=m;b._p=new Promise(function(L,W){b.onload=L,b.onerror=W}),Jn(m,"link",c),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=hu.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Nd=0;function cM(e,i){return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var c=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Nd===0&&(Nd=62500*ky());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Nd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function hu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var du=null;function pu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,i.forEach(uM,e),du=null,hu.call(e))}function uM(e,i){if(!(i.state.loading&4)){var r=du.get(e);if(r)var c=r.get(null);else{r=new Map,du.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),c=b)}c&&r.set(null,c)}h=i.instance,b=h.getAttribute("data-precedence"),m=r.get(b)||c,m===c&&r.set(null,h),r.set(b,h),this.count++,c=hu.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Sl={$$typeof:N,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function fM(e,i,r,c,h,m,b,L,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=k(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=k(0),this.hiddenUpdates=k(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function w_(e,i,r,c,h,m,b,L,W,pt,Ut,Pt){return e=new fM(e,i,r,b,W,pt,Ut,Pt,L),i=1,m===!0&&(i|=24),m=wi(3,null,null,i),e.current=m,m.stateNode=e,i=fh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},mh(m),e}function C_(e){return e?(e=Nr,e):Nr}function R_(e,i,r,c,h,m){h=C_(h),c.context===null?c.context=h:c.pendingContext=h,c=hs(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=ds(e,c,i),r!==null&&(Mi(r,e,i),jo(r,e,i))}function D_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Ld(e,i){D_(e,i),(e=e.alternate)&&D_(e,i)}function U_(e){if(e.tag===13||e.tag===31){var i=Zs(e,67108864);i!==null&&Mi(i,e,67108864),Ld(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var i=Ni();i=Ne(i);var r=Zs(e,i);r!==null&&Mi(r,e,i),Ld(e,i)}}var mu=!0;function hM(e,i,r,c){var h=H.T;H.T=null;var m=V.p;try{V.p=2,Pd(e,i,r,c)}finally{V.p=m,H.T=h}}function dM(e,i,r,c){var h=H.T;H.T=null;var m=V.p;try{V.p=8,Pd(e,i,r,c)}finally{V.p=m,H.T=h}}function Pd(e,i,r,c){if(mu){var h=Od(c);if(h===null)Sd(e,i,c,gu,r),P_(e,c);else if(mM(h,e,i,r,c))c.stopPropagation();else if(P_(e,c),i&4&&-1<pM.indexOf(e)){for(;h!==null;){var m=wa(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Xt(m.pendingLanes);if(b!==0){var L=m;for(L.pendingLanes|=2,L.entangledLanes|=2;b;){var W=1<<31-$t(b);L.entanglements[1]|=W,b&=~W}pa(m),(Je&6)===0&&(jc=pe()+500,pl(0))}}break;case 31:case 13:L=Zs(m,2),L!==null&&Mi(L,m,2),tu(),Ld(m,2)}if(m=Od(c),m===null&&Sd(e,i,c,gu,r),m===h)break;h=m}h!==null&&c.stopPropagation()}else Sd(e,i,c,null,r)}}function Od(e){return e=If(e),zd(e)}var gu=null;function zd(e){if(gu=null,e=Aa(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return gu=e,null}function L_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case B:return 2;case T:return 8;case nt:case lt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var Id=!1,Es=null,Ts=null,As=null,yl=new Map,Ml=new Map,ws=[],pM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(e,i){switch(e){case"focusin":case"focusout":Es=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(i.pointerId)}}function bl(e,i,r,c,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=wa(i),i!==null&&U_(i)),e):(e.eventSystemFlags|=c,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function mM(e,i,r,c,h){switch(i){case"focusin":return Es=bl(Es,e,i,r,c,h),!0;case"dragenter":return Ts=bl(Ts,e,i,r,c,h),!0;case"mouseover":return As=bl(As,e,i,r,c,h),!0;case"pointerover":var m=h.pointerId;return yl.set(m,bl(yl.get(m)||null,e,i,r,c,h)),!0;case"gotpointercapture":return m=h.pointerId,Ml.set(m,bl(Ml.get(m)||null,e,i,r,c,h)),!0}return!1}function O_(e){var i=Aa(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,Ee(e.priority,function(){N_(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Ee(e.priority,function(){N_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Od(e.nativeEvent);if(r===null){r=e.nativeEvent;var c=new r.constructor(r.type,r);zf=c,r.target.dispatchEvent(c),zf=null}else return i=wa(r),i!==null&&U_(i),e.blockedOn=r,!1;i.shift()}return!0}function z_(e,i,r){vu(e)&&r.delete(i)}function gM(){Id=!1,Es!==null&&vu(Es)&&(Es=null),Ts!==null&&vu(Ts)&&(Ts=null),As!==null&&vu(As)&&(As=null),yl.forEach(z_),Ml.forEach(z_)}function _u(e,i){e.blockedOn===i&&(e.blockedOn=null,Id||(Id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,gM)))}var xu=null;function I_(e){xu!==e&&(xu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xu===e&&(xu=null);for(var i=0;i<e.length;i+=3){var r=e[i],c=e[i+1],h=e[i+2];if(typeof c!="function"){if(zd(c||r)===null)continue;break}var m=wa(r);m!==null&&(e.splice(i,3),i-=3,Oh(m,{pending:!0,data:h,method:r.method,action:c},c,h))}}))}function no(e){function i(W){return _u(W,e)}Es!==null&&_u(Es,e),Ts!==null&&_u(Ts,e),As!==null&&_u(As,e),yl.forEach(i),Ml.forEach(i);for(var r=0;r<ws.length;r++){var c=ws[r];c.blockedOn===e&&(c.blockedOn=null)}for(;0<ws.length&&(r=ws[0],r.blockedOn===null);)O_(r),r.blockedOn===null&&ws.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var h=r[c],m=r[c+1],b=h[De]||null;if(typeof m=="function")b||I_(r);else if(b){var L=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[De]||null)L=b.formAction;else if(zd(h)!==null)continue}else L=b.action;typeof L=="function"?r[c+1]=L:(r.splice(c,3),c-=3),I_(r)}}}function B_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Bd(e){this._internalRoot=e}Su.prototype.render=Bd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=Ni();R_(r,c,e,i,null,null)},Su.prototype.unmount=Bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;R_(e.current,2,null,e,null,null),tu(),i[xn]=null}};function Su(e){this._internalRoot=e}Su.prototype.unstable_scheduleHydration=function(e){if(e){var i=_n();e={blockedOn:null,target:e,priority:i};for(var r=0;r<ws.length&&i!==0&&i<ws[r].priority;r++);ws.splice(r,0,e),r===0&&O_(e)}};var F_=t.version;if(F_!=="19.2.7")throw Error(a(527,F_,"19.2.7"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var vM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{_t=yu.inject(vM),yt=yu}catch{}}return Tl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,c="",h=qg,m=Yg,b=Zg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=w_(e,1,!1,null,null,r,c,null,h,m,b,B_),e[xn]=i.current,xd(e),new Bd(i)},Tl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var c=!1,h="",m=qg,b=Yg,L=Zg,W=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(L=r.onRecoverableError),r.formState!==void 0&&(W=r.formState)),i=w_(e,1,!0,i,r??null,c,h,W,m,b,L,B_),i.context=C_(null),r=i.current,c=Ni(),c=Ne(c),h=hs(c),h.callback=null,ds(r,h,c),r=c,i.current.lanes=r,ct(i,r),pa(i),e[xn]=i.current,xd(e),new Su(i)},Tl.version="19.2.7",Tl}var K_;function wM(){if(K_)return Gd.exports;K_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Gd.exports=AM(),Gd.exports}var CM=wM();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const D0="186",RM=0,J_=1,DM=2,tf=1,ux=2,Fl=3,gr=0,jn=1,ln=2,ya=0,To=1,vr=2,Q_=3,j_=4,UM=5,bo=100,NM=101,LM=102,PM=103,OM=104,zM=200,IM=201,BM=202,FM=203,fx=204,hx=205,HM=206,GM=207,VM=208,kM=209,XM=210,WM=211,qM=212,YM=213,ZM=214,Lp=0,Pp=1,Op=2,Kl=3,zp=4,Ip=5,Bp=6,Fp=7,U0=0,KM=1,JM=2,oa=0,N0=1,L0=2,P0=3,cc=4,O0=5,z0=6,I0=7,dx=300,_r=301,Co=302,Wd=303,qd=304,Ef=306,Hp=1e3,Ja=1001,Gp=1002,Qn=1003,QM=1004,Mu=1005,ii=1006,Yd=1007,dr=1008,zi=1009,px=1010,mx=1011,Jl=1012,B0=1013,ba=1014,sa=1015,Ei=1016,F0=1017,H0=1018,Ql=1020,gx=35902,vx=35899,_x=1021,xx=1022,ra=1023,ts=1026,pr=1027,G0=1028,V0=1029,xr=1030,k0=1031,X0=1033,ef=33776,nf=33777,af=33778,sf=33779,Vp=35840,kp=35841,Xp=35842,Wp=35843,qp=36196,Yp=37492,Zp=37496,Kp=37488,Jp=37489,of=37490,Qp=37491,jp=37808,$p=37809,t0=37810,e0=37811,n0=37812,i0=37813,a0=37814,s0=37815,r0=37816,o0=37817,l0=37818,c0=37819,u0=37820,f0=37821,h0=36492,d0=36494,p0=36495,m0=36283,g0=36284,lf=36285,v0=36286,jM=3200,cf=0,$M=1,Hs="",ni="srgb",uf="srgb-linear",ff="linear",$e="srgb",Zd=7680,t2=519,e2=512,n2=513,i2=514,W0=515,a2=516,s2=517,q0=518,r2=519,Sx=35044,$_="300 es",_a=2e3,jl=2001;function o2(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function hf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function l2(){const s=hf("canvas");return s.style.display="block",s}const t1={};function df(...s){const t="THREE."+s.shift();console.log(t,...s)}function yx(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function be(...s){s=yx(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function Xe(...s){s=yx(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function Ao(...s){const t=s.join(" ");t in t1||(t1[t]=!0,be(...s))}function c2(s,t,n){return new Promise(function(a,o){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const u2={[Lp]:Pp,[Op]:Bp,[zp]:Fp,[Kl]:Ip,[Pp]:Lp,[Bp]:Op,[Fp]:zp,[Ip]:Kl};class br{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,t);t.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let e1=1234567;const Vl=Math.PI/180,$l=180/Math.PI;function Ma(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[t&255]+ti[t>>8&255]+"-"+ti[t>>16&15|64]+ti[t>>24&255]+"-"+ti[n&63|128]+ti[n>>8&255]+"-"+ti[n>>16&255]+ti[n>>24&255]+ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]).toLowerCase()}function Ie(s,t,n){return Math.max(t,Math.min(n,s))}function Y0(s,t){return(s%t+t)%t}function f2(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function h2(s,t,n){return s!==t?(n-s)/(t-s):0}function kl(s,t,n){return(1-n)*s+n*t}function d2(s,t,n,a){return kl(s,t,1-Math.exp(-n*a))}function p2(s,t=1){return t-Math.abs(Y0(s,t*2)-t)}function m2(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function g2(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function v2(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _2(s,t){return s+Math.random()*(t-s)}function x2(s){return s*(.5-Math.random())}function S2(s){s!==void 0&&(e1=s);let t=e1+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function y2(s){return s*Vl}function M2(s){return s*$l}function b2(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function E2(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function T2(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function A2(s,t,n,a,o){const l=Math.cos,u=Math.sin,f=l(n/2),d=u(n/2),p=l((t+a)/2),g=u((t+a)/2),_=l((t-a)/2),v=u((t-a)/2),x=l((a-t)/2),M=u((a-t)/2);switch(o){case"XYX":s.set(f*g,d*_,d*v,f*p);break;case"YZY":s.set(d*v,f*g,d*_,f*p);break;case"ZXZ":s.set(d*_,d*v,f*g,f*p);break;case"XZX":s.set(f*g,d*M,d*x,f*p);break;case"YXY":s.set(d*x,f*g,d*M,f*p);break;case"ZYZ":s.set(d*M,d*x,f*g,f*p);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function aa(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ai={DEG2RAD:Vl,RAD2DEG:$l,generateUUID:Ma,clamp:Ie,euclideanModulo:Y0,mapLinear:f2,inverseLerp:h2,lerp:kl,damp:d2,pingpong:p2,smoothstep:m2,smootherstep:g2,randInt:v2,randFloat:_2,randFloatSpread:x2,seededRandom:S2,degToRad:y2,radToDeg:M2,isPowerOfTwo:b2,ceilPowerOfTwo:E2,floorPowerOfTwo:T2,setQuaternionFromProperEuler:A2,normalize:nn,denormalize:aa},im=class im{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ie(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ie(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*o+t.x,this.y=l*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};im.prototype.isVector2=!0;let Nt=im;class Gs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,l,u,f){let d=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=l[u+0],x=l[u+1],M=l[u+2],w=l[u+3];if(_!==w||d!==v||p!==x||g!==M){let y=d*v+p*x+g*M+_*w;y<0&&(v=-v,x=-x,M=-M,w=-w,y=-y);let S=1-f;if(y<.9995){const C=Math.acos(y),N=Math.sin(C);S=Math.sin(S*C)/N,f=Math.sin(f*C)/N,d=d*S+v*f,p=p*S+x*f,g=g*S+M*f,_=_*S+w*f}else{d=d*S+v*f,p=p*S+x*f,g=g*S+M*f,_=_*S+w*f;const C=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=C,p*=C,g*=C,_*=C}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,l,u){const f=a[o],d=a[o+1],p=a[o+2],g=a[o+3],_=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return t[n]=f*M+g*_+d*x-p*v,t[n+1]=d*M+g*v+p*_-f*x,t[n+2]=p*M+g*x+f*v-d*_,t[n+3]=g*M-f*_-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(a/2),g=f(o/2),_=f(l/2),v=d(a/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*x*M,this._y=p*x*_-v*g*M,this._z=p*g*M+v*x*_,this._w=p*g*_-v*x*M;break;case"YXZ":this._x=v*g*_+p*x*M,this._y=p*x*_-v*g*M,this._z=p*g*M-v*x*_,this._w=p*g*_+v*x*M;break;case"ZXY":this._x=v*g*_-p*x*M,this._y=p*x*_+v*g*M,this._z=p*g*M+v*x*_,this._w=p*g*_-v*x*M;break;case"ZYX":this._x=v*g*_-p*x*M,this._y=p*x*_+v*g*M,this._z=p*g*M-v*x*_,this._w=p*g*_+v*x*M;break;case"YZX":this._x=v*g*_+p*x*M,this._y=p*x*_+v*g*M,this._z=p*g*M-v*x*_,this._w=p*g*_-v*x*M;break;case"XZY":this._x=v*g*_-p*x*M,this._y=p*x*_-v*g*M,this._z=p*g*M+v*x*_,this._w=p*g*_+v*x*M;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],l=n[8],u=n[1],f=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(l-p)*x,this._z=(u-o)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(g-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+p)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(l-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(u-o)/x,this._x=(l+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,l=t._z,u=t._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*f+o*p-l*d,this._y=o*g+u*d+l*f-a*p,this._z=l*g+u*p+a*d-o*f,this._w=u*g-a*f-o*d-l*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,l=-l,u=-u,f=-f);let d=1-n;if(f<.9995){const p=Math.acos(f),g=Math.sin(p);d=Math.sin(d*p)/g,n=Math.sin(n*p)/g,this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+l*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+l*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const am=class am{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(n1.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(n1.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*o,this.y=l[1]*n+l[4]*a+l[7]*o,this.z=l[2]*n+l[5]*a+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*o+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*o-f*a),g=2*(f*n-l*o),_=2*(l*a-u*n);return this.x=n+d*p+u*_-f*g,this.y=a+d*g+f*p-l*_,this.z=o+d*_+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*o,this.y=l[1]*n+l[5]*a+l[9]*o,this.z=l[2]*n+l[6]*a+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ie(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,l=t.z,u=n.x,f=n.y,d=n.z;return this.x=o*d-l*f,this.y=l*u-a*d,this.z=a*f-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Kd.copy(this).projectOnVector(t),this.sub(Kd)}reflect(t){return this.sub(Kd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ie(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};am.prototype.isVector3=!0;let G=am;const Kd=new G,n1=new Gs,sm=class sm{constructor(t,n,a,o,l,u,f,d,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,u,f,d,p)}set(t,n,a,o,l,u,f,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=f,g[3]=n,g[4]=l,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,u=a[0],f=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],M=a[8],w=o[0],y=o[3],S=o[6],C=o[1],N=o[4],A=o[7],P=o[2],D=o[5],O=o[8];return l[0]=u*w+f*C+d*P,l[3]=u*y+f*N+d*D,l[6]=u*S+f*A+d*O,l[1]=p*w+g*C+_*P,l[4]=p*y+g*N+_*D,l[7]=p*S+g*A+_*O,l[2]=v*w+x*C+M*P,l[5]=v*y+x*N+M*D,l[8]=v*S+x*A+M*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*f*p-a*l*g+a*f*d+o*l*p-o*u*d}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],_=g*u-f*p,v=f*d-g*l,x=p*l-u*d,M=n*_+a*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return t[0]=_*w,t[1]=(o*p-g*a)*w,t[2]=(f*a-o*u)*w,t[3]=v*w,t[4]=(g*n-o*d)*w,t[5]=(o*l-f*n)*w,t[6]=x*w,t[7]=(a*d-p*n)*w,t[8]=(u*n-a*l)*w,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*u+p*f)+u+t,-o*p,o*d,-o*(-p*u+d*f)+f+n,0,0,1),this}scale(t,n){return Ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jd.makeScale(t,n)),this}rotate(t){return Ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jd.makeRotation(-t)),this}translate(t,n){return Ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sm.prototype.isMatrix3=!0;let Ae=sm;const Jd=new Ae,i1=new Ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a1=new Ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w2(){const s={enabled:!0,workingColorSpace:uf,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===$e&&(o.r=$a(o.r),o.g=$a(o.g),o.b=$a(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===$e&&(o.r=wo(o.r),o.g=wo(o.g),o.b=wo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hs?ff:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[uf]:{primaries:t,whitePoint:a,transfer:ff,toXYZ:i1,fromXYZ:a1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:a,transfer:$e,toXYZ:i1,fromXYZ:a1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const Ve=w2();function $a(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let io;class C2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{io===void 0&&(io=hf("canvas")),io.width=t.width,io.height=t.height;const o=io.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=io}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=hf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=$a(l[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor($a(n[a]/255)*255):n[a]=$a(n[a]);return{data:n,width:t.width,height:t.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R2=0;class Z0{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R2++}),this.uuid=Ma(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Qd(o[u].image)):l.push(Qd(o[u]))}else l=Qd(o);a.url=l}return n||(t.images[this.uuid]=a),a}}function Qd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let D2=0;const jd=new G;class ri extends br{constructor(t=ri.DEFAULT_IMAGE,n=ri.DEFAULT_MAPPING,a=Ja,o=Ja,l=ii,u=dr,f=ra,d=zi,p=ri.DEFAULT_ANISOTROPY,g=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D2++}),this.uuid=Ma(),this.name="",this.source=new Z0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){be(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hp:t.x=t.x-Math.floor(t.x);break;case Ja:t.x=t.x<0?0:1;break;case Gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hp:t.y=t.y-Math.floor(t.y);break;case Ja:t.y=t.y<0?0:1;break;case Gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=dx;ri.DEFAULT_ANISOTROPY=1;const rm=class rm{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,l;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],x=d[5],M=d[9],w=d[2],y=d[6],S=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(M+y)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,A=(x+1)/2,P=(S+1)/2,D=(g+v)/4,O=(_+w)/4,E=(M+y)/4;return N>A&&N>P?N<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(N),o=D/a,l=O/a):A>P?A<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),a=D/o,l=E/o):P<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),a=O/l,o=E/l),this.set(a,o,l,n),this}let C=Math.sqrt((y-M)*(y-M)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(_-w)/C,this.z=(v-g)/C,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this.w=Ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this.w=Ie(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ie(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rm.prototype.isVector4=!0;let yn=rm;class U2 extends br{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new yn(0,0,t,n),this.scissorTest=!1,this.viewport=new yn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},l=new ri(o),u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Z0(o)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends U2{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Mx extends ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N2 extends ri{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Ja,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const bf=class bf{constructor(t,n,a,o,l,u,f,d,p,g,_,v,x,M,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,u,f,d,p,g,_,v,x,M,w,y)}set(t,n,a,o,l,u,f,d,p,g,_,v,x,M,w,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=d,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=M,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bf().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/ao.setFromMatrixColumn(t,0).length(),l=1/ao.setFromMatrixColumn(t,1).length(),u=1/ao.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=u*g,x=u*_,M=f*g,w=f*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=x+M*p,n[5]=v-w*p,n[9]=-f*d,n[2]=w-v*p,n[6]=M+x*p,n[10]=u*d}else if(t.order==="YXZ"){const v=d*g,x=d*_,M=p*g,w=p*_;n[0]=v+w*f,n[4]=M*f-x,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=x*f-M,n[6]=w+v*f,n[10]=u*d}else if(t.order==="ZXY"){const v=d*g,x=d*_,M=p*g,w=p*_;n[0]=v-w*f,n[4]=-u*_,n[8]=M+x*f,n[1]=x+M*f,n[5]=u*g,n[9]=w-v*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(t.order==="ZYX"){const v=u*g,x=u*_,M=f*g,w=f*_;n[0]=d*g,n[4]=M*p-x,n[8]=v*p+w,n[1]=d*_,n[5]=w*p+v,n[9]=x*p-M,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(t.order==="YZX"){const v=u*d,x=u*p,M=f*d,w=f*p;n[0]=d*g,n[4]=w-v*_,n[8]=M*_+x,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=x*_+M,n[10]=v-w*_}else if(t.order==="XZY"){const v=u*d,x=u*p,M=f*d,w=f*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+w,n[5]=u*g,n[9]=x*_-M,n[2]=M*_-x,n[6]=f*g,n[10]=w*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(L2,t,P2)}lookAt(t,n,a){const o=this.elements;return Pi.subVectors(t,n),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Rs.crossVectors(a,Pi),Rs.lengthSq()===0&&(Math.abs(a.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Rs.crossVectors(a,Pi)),Rs.normalize(),bu.crossVectors(Pi,Rs),o[0]=Rs.x,o[4]=bu.x,o[8]=Pi.x,o[1]=Rs.y,o[5]=bu.y,o[9]=Pi.y,o[2]=Rs.z,o[6]=bu.z,o[10]=Pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,u=a[0],f=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],M=a[2],w=a[6],y=a[10],S=a[14],C=a[3],N=a[7],A=a[11],P=a[15],D=o[0],O=o[4],E=o[8],z=o[12],F=o[1],q=o[5],Z=o[9],it=o[13],Y=o[2],tt=o[6],H=o[10],V=o[14],ht=o[3],at=o[7],mt=o[11],I=o[15];return l[0]=u*D+f*F+d*Y+p*ht,l[4]=u*O+f*q+d*tt+p*at,l[8]=u*E+f*Z+d*H+p*mt,l[12]=u*z+f*it+d*V+p*I,l[1]=g*D+_*F+v*Y+x*ht,l[5]=g*O+_*q+v*tt+x*at,l[9]=g*E+_*Z+v*H+x*mt,l[13]=g*z+_*it+v*V+x*I,l[2]=M*D+w*F+y*Y+S*ht,l[6]=M*O+w*q+y*tt+S*at,l[10]=M*E+w*Z+y*H+S*mt,l[14]=M*z+w*it+y*V+S*I,l[3]=C*D+N*F+A*Y+P*ht,l[7]=C*O+N*q+A*tt+P*at,l[11]=C*E+N*Z+A*H+P*mt,l[15]=C*z+N*it+A*V+P*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],M=t[3],w=t[7],y=t[11],S=t[15],C=d*x-p*v,N=f*x-p*_,A=f*v-d*_,P=u*x-p*g,D=u*v-d*g,O=u*_-f*g;return n*(w*C-y*N+S*A)-a*(M*C-y*P+S*D)+o*(M*N-w*P+S*O)-l*(M*A-w*D+y*O)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],l=t[1],u=t[5],f=t[9],d=t[2],p=t[6],g=t[10];return n*(u*g-f*p)-a*(l*g-f*d)+o*(l*p-u*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],M=t[12],w=t[13],y=t[14],S=t[15],C=n*f-a*u,N=n*d-o*u,A=n*p-l*u,P=a*d-o*f,D=a*p-l*f,O=o*p-l*d,E=g*w-_*M,z=g*y-v*M,F=g*S-x*M,q=_*y-v*w,Z=_*S-x*w,it=v*S-x*y,Y=C*it-N*Z+A*q+P*F-D*z+O*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/Y;return t[0]=(f*it-d*Z+p*q)*tt,t[1]=(o*Z-a*it-l*q)*tt,t[2]=(w*O-y*D+S*P)*tt,t[3]=(v*D-_*O-x*P)*tt,t[4]=(d*F-u*it-p*z)*tt,t[5]=(n*it-o*F+l*z)*tt,t[6]=(y*A-M*O-S*N)*tt,t[7]=(g*O-v*A+x*N)*tt,t[8]=(u*Z-f*F+p*E)*tt,t[9]=(a*F-n*Z-l*E)*tt,t[10]=(M*D-w*A+S*C)*tt,t[11]=(_*A-g*D-x*C)*tt,t[12]=(f*z-u*q-d*E)*tt,t[13]=(n*q-a*z+o*E)*tt,t[14]=(w*N-M*P-y*C)*tt,t[15]=(g*P-_*N+v*C)*tt,this}scale(t){const n=this.elements,a=t.x,o=t.y,l=t.z;return n[0]*=a,n[4]*=o,n[8]*=l,n[1]*=a,n[5]*=o,n[9]*=l,n[2]*=a,n[6]*=o,n[10]*=l,n[3]*=a,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),l=1-a,u=t.x,f=t.y,d=t.z,p=l*u,g=l*f;return this.set(p*u+a,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+a,g*d-o*u,0,p*d-o*f,g*d+o*u,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,l,u){return this.set(1,a,l,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,l=n._x,u=n._y,f=n._z,d=n._w,p=l+l,g=u+u,_=f+f,v=l*p,x=l*g,M=l*_,w=u*g,y=u*_,S=f*_,C=d*p,N=d*g,A=d*_,P=a.x,D=a.y,O=a.z;return o[0]=(1-(w+S))*P,o[1]=(x+A)*P,o[2]=(M-N)*P,o[3]=0,o[4]=(x-A)*D,o[5]=(1-(v+S))*D,o[6]=(y+C)*D,o[7]=0,o[8]=(M+N)*O,o[9]=(y-C)*O,o[10]=(1-(v+w))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),n.identity(),this;let u=ao.set(o[0],o[1],o[2]).length();const f=ao.set(o[4],o[5],o[6]).length(),d=ao.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ea.copy(this);const p=1/u,g=1/f,_=1/d;return ea.elements[0]*=p,ea.elements[1]*=p,ea.elements[2]*=p,ea.elements[4]*=g,ea.elements[5]*=g,ea.elements[6]*=g,ea.elements[8]*=_,ea.elements[9]*=_,ea.elements[10]*=_,n.setFromRotationMatrix(ea),a.x=u,a.y=f,a.z=d,this}makePerspective(t,n,a,o,l,u,f=_a,d=!1){const p=this.elements,g=2*l/(n-t),_=2*l/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let M,w;if(d)M=l/(u-l),w=u*l/(u-l);else if(f===_a)M=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===jl)M=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,l,u,f=_a,d=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),x=-(a+o)/(a-o);let M,w;if(d)M=1/(u-l),w=u/(u-l);else if(f===_a)M=-2/(u-l),w=-(u+l)/(u-l);else if(f===jl)M=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=M,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};bf.prototype.isMatrix4=!0;let qe=bf;const ao=new G,ea=new qe,L2=new G(0,0,0),P2=new G(1,1,1),Rs=new G,bu=new G,Pi=new G,s1=new qe,r1=new Gs;class la{constructor(t=0,n=0,a=0,o=la.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,l=o[0],u=o[4],f=o[8],d=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ie(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return s1.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s1,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return r1.setFromEuler(this),this.setFromQuaternion(r1,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}la.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let O2=0;const o1=new G,so=new Gs,Xa=new qe,Eu=new G,Al=new G,z2=new G,I2=new Gs,l1=new G(1,0,0),c1=new G(0,1,0),u1=new G(0,0,1),f1={type:"added"},B2={type:"removed"},ro={type:"childadded",child:null},$d={type:"childremoved",child:null};class zn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new G,n=new la,a=new Gs,o=new G(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ae}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return so.setFromAxisAngle(t,n),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,n){return so.setFromAxisAngle(t,n),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(l1,t)}rotateY(t){return this.rotateOnAxis(c1,t)}rotateZ(t){return this.rotateOnAxis(u1,t)}translateOnAxis(t,n){return o1.copy(t).applyQuaternion(this.quaternion),this.position.add(o1.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(l1,t)}translateY(t){return this.translateOnAxis(c1,t)}translateZ(t){return this.translateOnAxis(u1,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Eu.copy(t):Eu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xa.lookAt(Al,Eu,this.up):Xa.lookAt(Eu,Al,this.up),this.quaternion.setFromRotationMatrix(Xa),o&&(Xa.extractRotation(o.matrixWorld),so.setFromRotationMatrix(Xa),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f1),ro.child=t,this.dispatchEvent(ro),ro.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(B2),$d.child=t,this.dispatchEvent($d),$d.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f1),ro.child=t,this.dispatchEvent(ro),ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,t,z2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,I2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*o,l[13]+=a-l[1]*n-l[5]*a-l[9]*o,l[14]+=o-l[2]*n-l[6]*a-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));o.material=f}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(t.animations,d))}}if(n){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zn.DEFAULT_UP=new G(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class mr extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F2={type:"move"};class tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const w of t.hand.values()){const y=n.getJointPose(w,a),S=this._getHandJoint(p,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,M=.005;p.inputState.pinching&&v>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(F2)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new mr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ds={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function ep(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Zt{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ve.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ve.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ve.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ve.workingColorSpace){if(t=Y0(t,1),n=Ie(n,0,1),a=Ie(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=ep(u,l,t+1/3),this.g=ep(u,l,t),this.b=ep(u,l,t-1/3)}return Ve.colorSpaceToWorking(this,o),this}setStyle(t,n=ni){function a(l){l!==void 0&&parseFloat(l)<1&&be("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:be("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);be("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ni){const a=Ex[t.toLowerCase()];return a!==void 0?this.setHex(a,n):be("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$a(t.r),this.g=$a(t.g),this.b=$a(t.b),this}copyLinearToSRGB(t){return this.r=wo(t.r),this.g=wo(t.g),this.b=wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return Ve.workingToColorSpace(ei.copy(this),t),Math.round(Ie(ei.r*255,0,255))*65536+Math.round(Ie(ei.g*255,0,255))*256+Math.round(Ie(ei.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ve.workingColorSpace){Ve.workingToColorSpace(ei.copy(this),n);const a=ei.r,o=ei.g,l=ei.b,u=Math.max(a,o,l),f=Math.min(a,o,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const _=u-f;switch(p=g<=.5?_/(u+f):_/(2-u-f),u){case a:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-a)/_+2;break;case l:d=(a-o)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=Ve.workingColorSpace){return Ve.workingToColorSpace(ei.copy(this),n),t.r=ei.r,t.g=ei.g,t.b=ei.b,t}getStyle(t=ni){Ve.workingToColorSpace(ei.copy(this),t);const n=ei.r,a=ei.g,o=ei.b;return t!==ni?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Ds),this.setHSL(Ds.h+t,Ds.s+n,Ds.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ds),t.getHSL(Tu);const a=kl(Ds.h,Tu.h,n),o=kl(Ds.s,Tu.s,n),l=kl(Ds.l,Tu.l,n);return this.setHSL(a,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*o,this.g=l[1]*n+l[4]*a+l[7]*o,this.b=l[2]*n+l[5]*a+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Zt;Zt.NAMES=Ex;class Tf{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=n}clone(){return new Tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class K0 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new la,this.environmentIntensity=1,this.environmentRotation=new la,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const na=new G,Wa=new G,np=new G,qa=new G,oo=new G,lo=new G,h1=new G,ip=new G,ap=new G,sp=new G,rp=new yn,op=new yn,lp=new yn;class Ki{constructor(t=new G,n=new G,a=new G){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),na.subVectors(t,n),o.cross(na);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,n,a,o,l){na.subVectors(o,n),Wa.subVectors(a,n),np.subVectors(t,n);const u=na.dot(na),f=na.dot(Wa),d=na.dot(np),p=Wa.dot(Wa),g=Wa.dot(np),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(p*d-f*g)*v,M=(u*g-f*d)*v;return l.set(1-x-M,M,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,qa)===null?!1:qa.x>=0&&qa.y>=0&&qa.x+qa.y<=1}static getInterpolation(t,n,a,o,l,u,f,d){return this.getBarycoord(t,n,a,o,qa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,qa.x),d.addScaledVector(u,qa.y),d.addScaledVector(f,qa.z),d)}static getInterpolatedAttribute(t,n,a,o,l,u){return rp.setScalar(0),op.setScalar(0),lp.setScalar(0),rp.fromBufferAttribute(t,n),op.fromBufferAttribute(t,a),lp.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(rp,l.x),u.addScaledVector(op,l.y),u.addScaledVector(lp,l.z),u}static isFrontFacing(t,n,a,o){return na.subVectors(a,n),Wa.subVectors(t,n),na.cross(Wa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return na.subVectors(this.c,this.b),Wa.subVectors(this.a,this.b),na.cross(Wa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ki.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,l){return Ki.getInterpolation(t,this.a,this.b,this.c,n,a,o,l)}containsPoint(t){return Ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,l=this.c;let u,f;oo.subVectors(o,a),lo.subVectors(l,a),ip.subVectors(t,a);const d=oo.dot(ip),p=lo.dot(ip);if(d<=0&&p<=0)return n.copy(a);ap.subVectors(t,o);const g=oo.dot(ap),_=lo.dot(ap);if(g>=0&&_<=g)return n.copy(o);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(oo,u);sp.subVectors(t,l);const x=oo.dot(sp),M=lo.dot(sp);if(M>=0&&x<=M)return n.copy(l);const w=x*p-d*M;if(w<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(a).addScaledVector(lo,f);const y=g*M-x*_;if(y<=0&&_-g>=0&&x-M>=0)return h1.subVectors(l,o),f=(_-g)/(_-g+(x-M)),n.copy(o).addScaledVector(h1,f);const S=1/(y+w+v);return u=w*S,f=v*S,n.copy(a).addScaledVector(oo,u).addScaledVector(lo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Er{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ia.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ia.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ia.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ia):ia.fromBufferAttribute(l,u),ia.applyMatrix4(t.matrixWorld),this.expandByPoint(ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Au.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Au.copy(a.boundingBox)),Au.applyMatrix4(t.matrixWorld),this.union(Au)}const o=t.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ia),ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wl),wu.subVectors(this.max,wl),co.subVectors(t.a,wl),uo.subVectors(t.b,wl),fo.subVectors(t.c,wl),Us.subVectors(uo,co),Ns.subVectors(fo,uo),or.subVectors(co,fo);let n=[0,-Us.z,Us.y,0,-Ns.z,Ns.y,0,-or.z,or.y,Us.z,0,-Us.x,Ns.z,0,-Ns.x,or.z,0,-or.x,-Us.y,Us.x,0,-Ns.y,Ns.x,0,-or.y,or.x,0];return!cp(n,co,uo,fo,wu)||(n=[1,0,0,0,1,0,0,0,1],!cp(n,co,uo,fo,wu))?!1:(Cu.crossVectors(Us,Ns),n=[Cu.x,Cu.y,Cu.z],cp(n,co,uo,fo,wu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ya=[new G,new G,new G,new G,new G,new G,new G,new G],ia=new G,Au=new Er,co=new G,uo=new G,fo=new G,Us=new G,Ns=new G,or=new G,wl=new G,wu=new G,Cu=new G,lr=new G;function cp(s,t,n,a,o){for(let l=0,u=s.length-3;l<=u;l+=3){lr.fromArray(s,l);const f=o.x*Math.abs(lr.x)+o.y*Math.abs(lr.y)+o.z*Math.abs(lr.z),d=t.dot(lr),p=n.dot(lr),g=a.dot(lr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const On=new G,Ru=new Nt;let H2=0;class ye extends br{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Sx,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ru.fromBufferAttribute(this,n),Ru.applyMatrix3(t),this.setXY(n,Ru.x,Ru.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix3(t),this.setXYZ(n,On.x,On.y,On.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyMatrix4(t),this.setXYZ(n,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.applyNormalMatrix(t),this.setXYZ(n,On.x,On.y,On.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)On.fromBufferAttribute(this,n),On.transformDirection(t),this.setXYZ(n,On.x,On.y,On.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=aa(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=nn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=aa(n,this.array)),n}setX(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=aa(n,this.array)),n}setY(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=aa(n,this.array)),n}setZ(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=aa(n,this.array)),n}setW(t,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array),o=nn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,l){return t*=this.itemSize,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array),o=nn(o,this.array),l=nn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Tx extends ye{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ax extends ye{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ce extends ye{constructor(t,n,a){super(new Float32Array(t),n,a)}}const G2=new Er,Cl=new G,up=new G;class Po{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):G2.setFromPoints(t).getCenter(a);let o=0;for(let l=0,u=t.length;l<u;l++)o=Math.max(o,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cl.subVectors(t,this.center);const n=Cl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Cl,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cl.copy(t.center).add(up)),this.expandByPoint(Cl.copy(t.center).sub(up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let V2=0;const Zi=new qe,fp=new zn,ho=new G,Oi=new Er,Rl=new Er,kn=new G;class Qe extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V2++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(o2(t)?Ax:Tx)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Ae().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zi.makeRotationFromQuaternion(t),this.applyMatrix4(Zi),this}rotateX(t){return Zi.makeRotationX(t),this.applyMatrix4(Zi),this}rotateY(t){return Zi.makeRotationY(t),this.applyMatrix4(Zi),this}rotateZ(t){return Zi.makeRotationZ(t),this.applyMatrix4(Zi),this}translate(t,n,a){return Zi.makeTranslation(t,n,a),this.applyMatrix4(Zi),this}scale(t,n,a){return Zi.makeScale(t,n,a),this.applyMatrix4(Zi),this}lookAt(t){return fp.lookAt(t),fp.updateMatrix(),this.applyMatrix4(fp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,l=t.length;o<l;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ce(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const l=t[o];n.setXYZ(o,l.x,l.y,l.z||0)}t.length>n.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const l=n[a];Oi.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,Oi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,Oi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(Oi.min),this.boundingBox.expandByPoint(Oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const a=this.boundingSphere.center;if(Oi.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Rl.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(Oi.min,Rl.min),Oi.expandByPoint(kn),kn.addVectors(Oi.max,Rl.max),Oi.expandByPoint(kn)):(Oi.expandByPoint(Rl.min),Oi.expandByPoint(Rl.max))}Oi.getCenter(a);let o=0;for(let l=0,u=t.count;l<u;l++)kn.fromBufferAttribute(t,l),o=Math.max(o,a.distanceToSquared(kn));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)kn.fromBufferAttribute(f,p),d&&(ho.fromBufferAttribute(t,p),kn.add(ho)),o=Math.max(o,a.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,l=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new ye(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let E=0;E<a.count;E++)f[E]=new G,d[E]=new G;const p=new G,g=new G,_=new G,v=new Nt,x=new Nt,M=new Nt,w=new G,y=new G;function S(E,z,F){p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,z),_.fromBufferAttribute(a,F),v.fromBufferAttribute(l,E),x.fromBufferAttribute(l,z),M.fromBufferAttribute(l,F),g.sub(p),_.sub(p),x.sub(v),M.sub(v);const q=1/(x.x*M.y-M.x*x.y);isFinite(q)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(q),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(q),f[E].add(w),f[z].add(w),f[F].add(w),d[E].add(y),d[z].add(y),d[F].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let E=0,z=C.length;E<z;++E){const F=C[E],q=F.start,Z=F.count;for(let it=q,Y=q+Z;it<Y;it+=3)S(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const N=new G,A=new G,P=new G,D=new G;function O(E){P.fromBufferAttribute(o,E),D.copy(P);const z=f[E];N.copy(z),N.sub(P.multiplyScalar(P.dot(z))).normalize(),A.crossVectors(D,z);const q=A.dot(d[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,q)}for(let E=0,z=C.length;E<z;++E){const F=C[E],q=F.start,Z=F.count;for(let it=q,Y=q+Z;it<Y;it+=3)O(t.getX(it+0)),O(t.getX(it+1)),O(t.getX(it+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new ye(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new G,l=new G,u=new G,f=new G,d=new G,p=new G,g=new G,_=new G;if(t)for(let v=0,x=t.count;v<x;v+=3){const M=t.getX(v+0),w=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,M),l.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(a,M),d.fromBufferAttribute(a,w),p.fromBufferAttribute(a,y),f.add(g),d.add(g),p.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(w,d.x,d.y,d.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)kn.fromBufferAttribute(t,n),kn.normalize(),t.setXYZ(n,kn.x,kn.y,kn.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(d.length*g);let x=0,M=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?x=d[w]*f.data.stride+f.offset:x=d[w]*g;for(let S=0;S<g;S++)v[M++]=p[x++]}return new ye(v,g,_)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qe,a=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=t(d,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,a);d.push(x)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(o[d]=g,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const l=t.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k2{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Sx,this.updateRanges=[],this.version=0,this.uuid=Ma()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,l=this.stride;o<l;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ma()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ma()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const ui=new G;class pf{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ui.fromBufferAttribute(this,n),ui.applyMatrix4(t),this.setXYZ(n,ui.x,ui.y,ui.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ui.fromBufferAttribute(this,n),ui.applyNormalMatrix(t),this.setXYZ(n,ui.x,ui.y,ui.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ui.fromBufferAttribute(this,n),ui.transformDirection(t),this.setXYZ(n,ui.x,ui.y,ui.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=aa(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=nn(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=aa(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=aa(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=aa(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=aa(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array),o=nn(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=nn(n,this.array),a=nn(a,this.array),o=nn(o,this.array),l=nn(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=l,this}clone(t){if(t===void 0){df("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return new ye(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){df("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hp=new G,X2=new G,W2=new Ae;class Fs{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=hp.subVectors(a,n).cross(X2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(hp),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||W2.getNormalMatrix(t),o=this.coplanarPoint(hp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let q2=0;class Vs extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q2++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=To,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fx,this.blendDst=hx,this.blendEquation=bo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Kl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zd,this.stencilZFail=Zd,this.stencilZPass=Zd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){be(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(n){const l=o(t.textures),u=o(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(a=>new Fs().fromJSON(a))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Nt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class J0 extends Vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let po;const Dl=new G,mo=new G,go=new G,vo=new Nt,Ul=new Nt,wx=new qe,Du=new G,Nl=new G,Uu=new G,d1=new Nt,dp=new Nt,p1=new Nt;class Af extends zn{constructor(t=new J0){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new Qe;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new k2(n,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new pf(a,3,0,!1)),po.setAttribute("uv",new pf(a,2,3,!1))}this.geometry=po,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),wx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);const a=this.material.rotation;let o,l;a!==0&&(l=Math.cos(a),o=Math.sin(a));const u=this.center;Nu(Du.set(-.5,-.5,0),go,u,mo,o,l),Nu(Nl.set(.5,-.5,0),go,u,mo,o,l),Nu(Uu.set(.5,.5,0),go,u,mo,o,l),d1.set(0,0),dp.set(1,0),p1.set(1,1);let f=t.ray.intersectTriangle(Du,Nl,Uu,!1,Dl);if(f===null&&(Nu(Nl.set(-.5,.5,0),go,u,mo,o,l),dp.set(0,1),f=t.ray.intersectTriangle(Du,Uu,Nl,!1,Dl),f===null))return;const d=t.ray.origin.distanceTo(Dl);d<t.near||d>t.far||n.push({distance:d,point:Dl.clone(),uv:Ki.getInterpolation(Dl,Du,Nl,Uu,d1,dp,p1,new Nt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nu(s,t,n,a,o,l){vo.subVectors(s,n).addScalar(.5).multiply(a),o!==void 0?(Ul.x=l*vo.x-o*vo.y,Ul.y=o*vo.x+l*vo.y):Ul.copy(vo),s.copy(t),s.x+=Ul.x,s.y+=Ul.y,s.applyMatrix4(wx)}const Za=new G,pp=new G,Lu=new G,Pu=new G;class Cx{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Za)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Za.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Za.copy(this.origin).addScaledVector(this.direction,n),Za.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){pp.copy(t).add(n).multiplyScalar(.5),Lu.copy(n).sub(t).normalize(),Pu.copy(this.origin).sub(pp);const l=t.distanceTo(n)*.5,u=-this.direction.dot(Lu),f=Pu.dot(this.direction),d=-Pu.dot(Lu),p=Pu.lengthSq(),g=Math.abs(1-u*u);let _,v,x,M;if(g>0)if(_=u*d-f,v=u*f-d,M=l*g,_>=0)if(v>=-M)if(v<=M){const w=1/g;_*=w,v*=w,x=_*(_+u*v+2*f)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+p):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(pp).addScaledVector(Lu,v),x}intersectSphere(t,n){if(t.radius<0)return null;Za.subVectors(t.center,this.origin);const a=Za.dot(this.direction),o=Za.dot(Za)-a*a,l=t.radius*t.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(l=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||l>o||((l>a||isNaN(a))&&(a=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),a>d||f>o)||((f>a||a!==a)&&(a=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Za)!==null}intersectTriangle(t,n,a,o,l){const u=this.origin,f=this.direction,d=f.x,p=f.y,g=f.z,_=t.x-u.x,v=t.y-u.y,x=t.z-u.z,M=n.x-u.x,w=n.y-u.y,y=n.z-u.z,S=a.x-u.x,C=a.y-u.y,N=a.z-u.z,A=Math.abs(d),P=Math.abs(p),D=Math.abs(g);let O,E,z,F,q,Z,it,Y,tt,H,V,ht;if(A>=P&&A>=D?(z=d,Z=_,tt=M,ht=S,d>=0?(O=p,E=g,F=v,q=x,it=w,Y=y,H=C,V=N):(O=g,E=p,F=x,q=v,it=y,Y=w,H=N,V=C)):P>=D?(z=p,Z=v,tt=w,ht=C,p>=0?(O=g,E=d,F=x,q=_,it=y,Y=M,H=N,V=S):(O=d,E=g,F=_,q=x,it=M,Y=y,H=S,V=N)):(z=g,Z=x,tt=y,ht=N,g>=0?(O=d,E=p,F=_,q=v,it=M,Y=w,H=S,V=C):(O=p,E=d,F=v,q=_,it=w,Y=M,H=C,V=S)),z===0)return null;const at=O/z,mt=E/z,I=1/z,st=F-at*Z,xt=q-mt*Z,zt=it-at*tt,Vt=Y-mt*tt,qt=H-at*ht,ot=V-mt*ht,$=qt*Vt-ot*zt,wt=st*ot-xt*qt,Yt=zt*xt-Vt*st;if(o){if($<0||wt<0||Yt<0)return null}else if(($<0||wt<0||Yt<0)&&($>0||wt>0||Yt>0))return null;const Bt=$+wt+Yt;if(Bt===0)return null;const Qt=I*($*Z+wt*tt+Yt*ht);return(Bt>0?Qt<0:Qt>0)?null:this.at(Qt/Bt,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Sn extends Vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const m1=new qe,cr=new Cx,Ou=new Po,g1=new G,zu=new G,Iu=new G,Bu=new G,mp=new G,Fu=new G,v1=new G,Hu=new G;class vn extends zn{constructor(t=new Qe,n=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(l&&f){Fu.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],_=l[d];g!==0&&(mp.fromBufferAttribute(_,t),u?Fu.addScaledVector(mp,g):Fu.addScaledVector(mp.sub(n),g))}n.add(Fu)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ou.copy(a.boundingSphere),Ou.applyMatrix4(l),cr.copy(t.ray).recast(t.near),!(Ou.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ou,g1)===null||cr.origin.distanceToSquared(g1)>(t.far-t.near)**2))&&(m1.copy(l).invert(),cr.copy(t.ray).applyMatrix4(m1),!(a.boundingBox!==null&&cr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,cr)))}_computeIntersections(t,n,a){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const y=v[M],S=u[y.materialIndex],C=Math.max(y.start,x.start),N=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let A=C,P=N;A<P;A+=3){const D=f.getX(A),O=f.getX(A+1),E=f.getX(A+2);o=Gu(this,S,t,a,p,g,_,D,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let y=M,S=w;y<S;y+=3){const C=f.getX(y),N=f.getX(y+1),A=f.getX(y+2);o=Gu(this,u,t,a,p,g,_,C,N,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,w=v.length;M<w;M++){const y=v[M],S=u[y.materialIndex],C=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=C,P=N;A<P;A+=3){const D=A,O=A+1,E=A+2;o=Gu(this,S,t,a,p,g,_,D,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let y=M,S=w;y<S;y+=3){const C=y,N=y+1,A=y+2;o=Gu(this,u,t,a,p,g,_,C,N,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Y2(s,t,n,a,o,l,u,f){let d;if(t.side===jn?d=a.intersectTriangle(u,l,o,!0,f):d=a.intersectTriangle(o,l,u,t.side===gr,f),d===null)return null;Hu.copy(f),Hu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Hu);return p<n.near||p>n.far?null:{distance:p,point:Hu.clone(),object:s}}function Gu(s,t,n,a,o,l,u,f,d,p){s.getVertexPosition(f,zu),s.getVertexPosition(d,Iu),s.getVertexPosition(p,Bu);const g=Y2(s,t,n,a,zu,Iu,Bu,v1);if(g){const _=new G;Ki.getBarycoord(v1,zu,Iu,Bu,_),o&&(g.uv=Ki.getInterpolatedAttribute(o,f,d,p,_,new Nt)),l&&(g.uv1=Ki.getInterpolatedAttribute(l,f,d,p,_,new Nt)),u&&(g.normal=Ki.getInterpolatedAttribute(u,f,d,p,_,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:d,c:p,normal:new G,materialIndex:0};Ki.getNormal(zu,Iu,Bu,v.normal),g.face=v,g.barycoord=_}return g}class Rx extends ri{constructor(t=null,n=1,a=1,o,l,u,f,d,p=Qn,g=Qn,_,v){super(null,u,f,d,p,g,o,l,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _1 extends ye{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _o=new qe,x1=new qe,Vu=[],S1=new Er,Z2=new qe,Ll=new vn,Pl=new Po;class Ii extends vn{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new _1(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,Z2)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,_o),S1.copy(t.boundingBox).applyMatrix4(_o),this.boundingBox.union(S1)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Po),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,_o),Pl.copy(t.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Pl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,l=a.length+1,u=t*l+1;for(let f=0;f<a.length;f++)a[f]=o[u+f]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(Ll.geometry=this.geometry,Ll.material=this.material,Ll.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(a),t.ray.intersectsSphere(Pl)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,_o),x1.multiplyMatrices(a,_o),Ll.matrixWorld=x1,Ll.raycast(t,Vu);for(let u=0,f=Vu.length;u<f;u++){const d=Vu[u];d.instanceId=l,d.object=this,n.push(d)}Vu.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new _1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new Rx(new Float32Array(o*this.count),o,this.count,G0,sa));const l=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const f=this.geometry.morphTargetsRelative?1:1-u,d=o*t;return l[d]=f,l.set(a,d+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ur=new Po,K2=new Nt(.5,.5),ku=new G;class Q0{constructor(t=new Fs,n=new Fs,a=new Fs,o=new Fs,l=new Fs,u=new Fs){this.planes=[t,n,a,o,l,u]}set(t,n,a,o,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=_a,a=!1){const o=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],p=l[3],g=l[4],_=l[5],v=l[6],x=l[7],M=l[8],w=l[9],y=l[10],S=l[11],C=l[12],N=l[13],A=l[14],P=l[15];if(o[0].setComponents(p-u,x-g,S-M,P-C).normalize(),o[1].setComponents(p+u,x+g,S+M,P+C).normalize(),o[2].setComponents(p+f,x+_,S+w,P+N).normalize(),o[3].setComponents(p-f,x-_,S-w,P-N).normalize(),a)o[4].setComponents(d,v,y,A).normalize(),o[5].setComponents(p-d,x-v,S-y,P-A).normalize();else if(o[4].setComponents(p-d,x-v,S-y,P-A).normalize(),n===_a)o[5].setComponents(p+d,x+v,S+y,P+A).normalize();else if(n===jl)o[5].setComponents(d,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(t){ur.center.set(0,0,0);const n=K2.distanceTo(t.center);return ur.radius=.7071067811865476+n,ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(ku.x=o.normal.x>0?t.max.x:t.min.x,ku.y=o.normal.y>0?t.max.y:t.min.y,ku.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ku)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dx extends Vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const y1=new qe,_0=new Cx,Xu=new Po,Wu=new G;class Sr extends zn{constructor(t=new Qe,n=new Dx){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.matrixWorld,l=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Xu.copy(a.boundingSphere),Xu.applyMatrix4(o),Xu.radius+=l,t.ray.intersectsSphere(Xu)===!1)return;y1.copy(o).invert(),_0.copy(t.ray).applyMatrix4(y1);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let M=v,w=x;M<w;M++){const y=p.getX(M);Wu.fromBufferAttribute(_,y),M1(Wu,y,d,o,t,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=v,w=x;M<w;M++)Wu.fromBufferAttribute(_,M),M1(Wu,M,d,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function M1(s,t,n,a,o,l,u){const f=_0.distanceSqToPoint(s);if(f<n){const d=new G;_0.closestPointToPoint(s,d),d.applyMatrix4(a);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class Ux extends ri{constructor(t=[],n=_r,a,o,l,u,f,d,p,g){super(t,n,a,o,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nx extends ri{constructor(t,n,a,o,l,u,f,d,p){super(t,n,a,o,l,u,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tc extends ri{constructor(t,n,a=ba,o,l,u,f=Qn,d=Qn,p,g=ts,_=1){if(g!==ts&&g!==pr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,l,u,f,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Z0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}}class J2 extends tc{constructor(t,n=ba,a=_r,o,l,u=Qn,f=Qn,d,p=ts){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,l,u,f,d,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lx extends ri{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ca extends Qe{constructor(t=1,n=1,a=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,x=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,o,u,2),M("x","z","y",1,-1,t,a,-n,o,u,3),M("x","y","z",1,-1,t,n,a,o,l,4),M("x","y","z",-1,-1,t,n,-a,o,l,5),this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(_,2));function M(w,y,S,C,N,A,P,D,O,E,z){const F=A/O,q=P/E,Z=A/2,it=P/2,Y=D/2,tt=O+1,H=E+1;let V=0,ht=0;const at=new G;for(let mt=0;mt<H;mt++){const I=mt*q-it;for(let st=0;st<tt;st++){const xt=st*F-Z;at[w]=xt*C,at[y]=I*N,at[S]=Y,p.push(at.x,at.y,at.z),at[w]=0,at[y]=0,at[S]=D>0?1:-1,g.push(at.x,at.y,at.z),_.push(st/O),_.push(1-mt/E),V+=1}}for(let mt=0;mt<E;mt++)for(let I=0;I<O;I++){const st=v+I+tt*mt,xt=v+I+tt*(mt+1),zt=v+(I+1)+tt*(mt+1),Vt=v+(I+1)+tt*mt;d.push(st,xt,Vt),d.push(xt,zt,Vt),ht+=6}f.addGroup(x,ht,z),x+=ht,v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class wf extends Qe{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const l=[],u=[],f=[],d=[],p=new G,g=new Nt;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let _=0,v=3;_<=n;_++,v+=3){const x=a+_/n*o;p.x=t*Math.cos(x),p.y=t*Math.sin(x),u.push(p.x,p.y,p.z),f.push(0,0,1),g.x=(u[v]/t+1)/2,g.y=(u[v+1]/t+1)/2,d.push(g.x,g.y)}for(let _=1;_<=n;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Cn extends Qe{constructor(t=1,n=1,a=1,o=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],_=[],v=[],x=[];let M=0;const w=[],y=a/2;let S=0;C(),u===!1&&(t>0&&N(!0),n>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new Ce(_,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(x,2));function C(){const A=new G,P=new G;let D=0;const O=(n-t)/a;for(let E=0;E<=l;E++){const z=[],F=E/l,q=F*(n-t)+t;for(let Z=0;Z<=o;Z++){const it=Z/o,Y=it*d+f,tt=Math.sin(Y),H=Math.cos(Y);P.x=q*tt,P.y=-F*a+y,P.z=q*H,_.push(P.x,P.y,P.z),A.set(tt,O,H).normalize(),v.push(A.x,A.y,A.z),x.push(it,1-F),z.push(M++)}w.push(z)}for(let E=0;E<o;E++)for(let z=0;z<l;z++){const F=w[z][E],q=w[z+1][E],Z=w[z+1][E+1],it=w[z][E+1];(t>0||z!==0)&&(g.push(F,q,it),D+=3),(n>0||z!==l-1)&&(g.push(q,Z,it),D+=3)}p.addGroup(S,D,0),S+=D}function N(A){const P=M,D=new Nt,O=new G;let E=0;const z=A===!0?t:n,F=A===!0?1:-1;for(let Z=1;Z<=o;Z++)_.push(0,y*F,0),v.push(0,F,0),x.push(.5,.5),M++;const q=M;for(let Z=0;Z<=o;Z++){const Y=Z/o*d+f,tt=Math.cos(Y),H=Math.sin(Y);O.x=z*H,O.y=y*F,O.z=z*tt,_.push(O.x,O.y,O.z),v.push(0,F,0),D.x=tt*.5+.5,D.y=H*.5*F+.5,x.push(D.x,D.y),M++}for(let Z=0;Z<o;Z++){const it=P+Z,Y=q+Z;A===!0?g.push(Y,Y+1,it):g.push(Y+1,Y,it),E+=3}p.addGroup(S,E,A===!0?1:2),S+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cf extends Cn{constructor(t=1,n=1,a=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,t,n,a,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(t){return new Cf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class j0 extends Qe{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const l=[],u=[];f(o),p(a),g(),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(l.slice(),3)),this.setAttribute("uv",new Ce(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const N=new G,A=new G,P=new G;for(let D=0;D<n.length;D+=3)x(n[D+0],N),x(n[D+1],A),x(n[D+2],P),d(N,A,P,C)}function d(C,N,A,P){const D=P+1,O=[];for(let E=0;E<=D;E++){O[E]=[];const z=C.clone().lerp(A,E/D),F=N.clone().lerp(A,E/D),q=D-E;for(let Z=0;Z<=q;Z++)Z===0&&E===D?O[E][Z]=z:O[E][Z]=z.clone().lerp(F,Z/q)}for(let E=0;E<D;E++)for(let z=0;z<2*(D-E)-1;z++){const F=Math.floor(z/2);z%2===0?(v(O[E][F+1]),v(O[E+1][F]),v(O[E][F])):(v(O[E][F+1]),v(O[E+1][F+1]),v(O[E+1][F]))}}function p(C){const N=new G;for(let A=0;A<l.length;A+=3)N.x=l[A+0],N.y=l[A+1],N.z=l[A+2],N.normalize().multiplyScalar(C),l[A+0]=N.x,l[A+1]=N.y,l[A+2]=N.z}function g(){const C=new G;for(let N=0;N<l.length;N+=3){C.x=l[N+0],C.y=l[N+1],C.z=l[N+2];const A=y(C)/2/Math.PI+.5,P=S(C)/Math.PI+.5;u.push(A,1-P)}M(),_()}function _(){for(let C=0;C<u.length;C+=6){const N=u[C+0],A=u[C+2],P=u[C+4],D=Math.max(N,A,P),O=Math.min(N,A,P);D>.9&&O<.1&&(N<.2&&(u[C+0]+=1),A<.2&&(u[C+2]+=1),P<.2&&(u[C+4]+=1))}}function v(C){l.push(C.x,C.y,C.z)}function x(C,N){const A=C*3;N.x=t[A+0],N.y=t[A+1],N.z=t[A+2]}function M(){const C=new G,N=new G,A=new G,P=new G,D=new Nt,O=new Nt,E=new Nt;for(let z=0,F=0;z<l.length;z+=9,F+=6){C.set(l[z+0],l[z+1],l[z+2]),N.set(l[z+3],l[z+4],l[z+5]),A.set(l[z+6],l[z+7],l[z+8]),D.set(u[F+0],u[F+1]),O.set(u[F+2],u[F+3]),E.set(u[F+4],u[F+5]),P.copy(C).add(N).add(A).divideScalar(3);const q=y(P);w(D,F+0,C,q),w(O,F+2,N,q),w(E,F+4,A,q)}}function w(C,N,A,P){P<0&&C.x===1&&(u[N]=C.x-1),A.x===0&&A.z===0&&(u[N]=P/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function S(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j0(t.vertices,t.indices,t.radius,t.detail)}}class Rf extends j0{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=1/a,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Rf(t.radius,t.detail)}}class Ea{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),l=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),l+=a.distanceTo(o),n.push(l),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const l=a.length;let u;n?u=n:u=t*a[l-1];let f=0,d=l-1,p;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),p=a[o]-u,p<0)f=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,a[o]===u)return o/(l-1);const g=a[o],v=a[o+1]-g,x=(u-g)/v;return(o+x)/(l-1)}getTangent(t,n){let o=t-1e-4,l=t+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),d=n||(u.isVector2?new Nt:new G);return d.copy(f).sub(u).normalize(),d}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new G,o=[],l=[],u=[],f=new G,d=new qe;for(let x=0;x<=t;x++){const M=x/t;o[x]=this.getTangentAt(M,new G)}l[0]=new G,u[0]=new G;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),v<=p&&a.set(0,0,1),f.crossVectors(o[0],a).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let x=1;x<=t;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),f.crossVectors(o[x-1],o[x]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Ie(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(d.makeRotationAxis(f,M))}u[x].crossVectors(o[x],l[x])}if(n===!0){let x=Math.acos(Ie(l[0].dot(l[t]),-1,1));x/=t,o[0].dot(f.crossVectors(l[0],l[t]))>0&&(x=-x);for(let M=1;M<=t;M++)l[M].applyMatrix4(d.makeRotationAxis(o[M],x*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $0 extends Ea{constructor(t=0,n=0,a=1,o=1,l=0,u=Math.PI*2,f=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=d}getPoint(t,n=new Nt){const a=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+t*l;let d=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=d-this.aX,x=p-this.aY;d=v*g-x*_+this.aX,p=v*_+x*g+this.aY}return a.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Q2 extends $0{constructor(t,n,a,o,l,u){super(t,n,a,a,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function tm(){let s=0,t=0,n=0,a=0;function o(l,u,f,d){s=l,t=f,n=-3*l+3*u-2*f-d,a=2*l-2*u+f+d}return{initCatmullRom:function(l,u,f,d,p){o(u,f,p*(f-l),p*(d-u))},initNonuniformCatmullRom:function(l,u,f,d,p,g,_){let v=(u-l)/p-(f-l)/(p+g)+(f-u)/g,x=(f-u)/g-(d-u)/(g+_)+(d-f)/_;v*=g,x*=g,o(u,f,v,x)},calc:function(l){const u=l*l,f=u*l;return s+t*l+n*u+a*f}}}const b1=new G,E1=new G,gp=new tm,vp=new tm,_p=new tm;class es extends Ea{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new G){const a=n,o=this.points,l=o.length,u=(l-(this.closed?0:1))*t;let f=Math.floor(u),d=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let p,g;this.closed||f>0?p=o[(f-1)%l]:(E1.subVectors(o[0],o[1]).add(o[0]),p=E1);const _=o[f%l],v=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(b1.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=b1),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);w<1e-4&&(w=1),M<1e-4&&(M=w),y<1e-4&&(y=w),gp.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,M,w,y),vp.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,M,w,y),_p.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,M,w,y)}else this.curveType==="catmullrom"&&(gp.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),vp.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),_p.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return a.set(gp.calc(d),vp.calc(d),_p.calc(d)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new G().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function T1(s,t,n,a,o){const l=(a-t)*.5,u=(o-n)*.5,f=s*s,d=s*f;return(2*n-2*a+l+u)*d+(-3*n+3*a-2*l-u)*f+l*s+n}function j2(s,t){const n=1-s;return n*n*t}function $2(s,t){return 2*(1-s)*s*t}function tb(s,t){return s*s*t}function Xl(s,t,n,a){return j2(s,t)+$2(s,n)+tb(s,a)}function eb(s,t){const n=1-s;return n*n*n*t}function nb(s,t){const n=1-s;return 3*n*n*s*t}function ib(s,t){return 3*(1-s)*s*s*t}function ab(s,t){return s*s*s*t}function Wl(s,t,n,a,o){return eb(s,t)+nb(s,n)+ib(s,a)+ab(s,o)}class Px extends Ea{constructor(t=new Nt,n=new Nt,a=new Nt,o=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Nt){const a=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Wl(t,o.x,l.x,u.x,f.x),Wl(t,o.y,l.y,u.y,f.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sb extends Ea{constructor(t=new G,n=new G,a=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new G){const a=n,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return a.set(Wl(t,o.x,l.x,u.x,f.x),Wl(t,o.y,l.y,u.y,f.y),Wl(t,o.z,l.z,u.z,f.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ox extends Ea{constructor(t=new Nt,n=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Nt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Nt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rb extends Ea{constructor(t=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new G){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zx extends Ea{constructor(t=new Nt,n=new Nt,a=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Nt){const a=n,o=this.v0,l=this.v1,u=this.v2;return a.set(Xl(t,o.x,l.x,u.x),Xl(t,o.y,l.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ix extends Ea{constructor(t=new G,n=new G,a=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new G){const a=n,o=this.v0,l=this.v1,u=this.v2;return a.set(Xl(t,o.x,l.x,u.x),Xl(t,o.y,l.y,u.y),Xl(t,o.z,l.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bx extends Ea{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Nt){const a=n,o=this.points,l=(o.length-1)*t,u=Math.floor(l),f=l-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return a.set(T1(f,d.x,p.x,g.x,_.x),T1(f,d.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Nt().fromArray(o))}return this}}var mf=Object.freeze({__proto__:null,ArcCurve:Q2,CatmullRomCurve3:es,CubicBezierCurve:Px,CubicBezierCurve3:sb,EllipseCurve:$0,LineCurve:Ox,LineCurve3:rb,QuadraticBezierCurve:zx,QuadraticBezierCurve3:Ix,SplineCurve:Bx});class ob extends Ea{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mf[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=a){const u=o[l]-a,f=this.curves[l],d=f.getLength(),p=d===0?0:1-u/d;return f.getPointAt(p,n)}l++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,d=u.getPoints(f);for(let p=0;p<d.length;p++){const g=d[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new mf[o.type]().fromJSON(o))}return this}}class gf extends ob{constructor(t){super(),this.type="Path",this.currentPoint=new Nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new Ox(this.currentPoint.clone(),new Nt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const l=new zx(this.currentPoint.clone(),new Nt(t,n),new Nt(a,o));return this.curves.push(l),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,l,u){const f=new Px(this.currentPoint.clone(),new Nt(t,n),new Nt(a,o),new Nt(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new Bx(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,l,u){const f=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(t+f,n+d,a,o,l,u),this}absarc(t,n,a,o,l,u){return this.absellipse(t,n,a,a,o,l,u),this}ellipse(t,n,a,o,l,u,f,d){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,l,u,f,d),this}absellipse(t,n,a,o,l,u,f,d){const p=new $0(t,n,a,o,l,u,f,d);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ji extends gf{constructor(t){super(t),this.uuid=Ma(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new gf().fromJSON(o))}return this}}function lb(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let l=Fx(s,0,o,n,!0);const u=[];if(!l||l.next===l.prev)return u;let f,d,p;if(a&&(l=db(s,t,l,n)),s.length>80*n){f=s[0],d=s[1];let g=f,_=d;for(let v=n;v<o;v+=n){const x=s[v],M=s[v+1];x<f&&(f=x),M<d&&(d=M),x>g&&(g=x),M>_&&(_=M)}p=Math.max(g-f,_-d),p=p!==0?32767/p:0}return ec(l,u,n,f,d,p,0),u}function Fx(s,t,n,a,o){let l;if(o===Eb(s,t,n,a)>0)for(let u=t;u<n;u+=a)l=A1(u/a|0,s[u],s[u+1],l);else for(let u=n-a;u>=t;u-=a)l=A1(u/a|0,s[u],s[u+1],l);return l&&Ro(l,l.next)&&(ic(l),l=l.next),l}function yr(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(Ro(n,n.next)||Mn(n.prev,n,n.next)===0)){if(ic(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function ec(s,t,n,a,o,l,u){if(!s)return;!u&&l&&_b(s,a,o,l);let f=s;for(;s.prev!==s.next;){const d=s.prev,p=s.next;if(l?ub(s,a,o,l):cb(s)){t.push(d.i,s.i,p.i),ic(s),s=p.next,f=p.next;continue}if(s=p,s===f){u?u===1?(s=fb(yr(s),t),ec(s,t,n,a,o,l,2)):u===2&&hb(s,t,n,a,o,l):ec(yr(s),t,n,a,o,l,1);break}}}function cb(s){const t=s.prev,n=s,a=s.next;if(Mn(t,n,a)>=0)return!1;const o=t.x,l=n.x,u=a.x,f=t.y,d=n.y,p=a.y,g=Math.min(o,l,u),_=Math.min(f,d,p),v=Math.max(o,l,u),x=Math.max(f,d,p);let M=a.next;for(;M!==t;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=x&&Hl(o,f,l,d,u,p,M.x,M.y)&&Mn(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ub(s,t,n,a){const o=s.prev,l=s,u=s.next;if(Mn(o,l,u)>=0)return!1;const f=o.x,d=l.x,p=u.x,g=o.y,_=l.y,v=u.y,x=Math.min(f,d,p),M=Math.min(g,_,v),w=Math.max(f,d,p),y=Math.max(g,_,v),S=x0(x,M,t,n,a),C=x0(w,y,t,n,a);let N=s.prevZ,A=s.nextZ;for(;N&&N.z>=S&&A&&A.z<=C;){if(N.x>=x&&N.x<=w&&N.y>=M&&N.y<=y&&N!==o&&N!==u&&Hl(f,g,d,_,p,v,N.x,N.y)&&Mn(N.prev,N,N.next)>=0||(N=N.prevZ,A.x>=x&&A.x<=w&&A.y>=M&&A.y<=y&&A!==o&&A!==u&&Hl(f,g,d,_,p,v,A.x,A.y)&&Mn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;N&&N.z>=S;){if(N.x>=x&&N.x<=w&&N.y>=M&&N.y<=y&&N!==o&&N!==u&&Hl(f,g,d,_,p,v,N.x,N.y)&&Mn(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;A&&A.z<=C;){if(A.x>=x&&A.x<=w&&A.y>=M&&A.y<=y&&A!==o&&A!==u&&Hl(f,g,d,_,p,v,A.x,A.y)&&Mn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function fb(s,t){let n=s;do{const a=n.prev,o=n.next.next;!Ro(a,o)&&Gx(a,n,n.next,o)&&nc(a,o)&&nc(o,a)&&(t.push(a.i,n.i,o.i),ic(n),ic(n.next),n=s=o),n=n.next}while(n!==s);return yr(n)}function hb(s,t,n,a,o,l){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&yb(u,f)){let d=Vx(u,f);u=yr(u,u.next),d=yr(d,d.next),ec(u,t,n,a,o,l,0),ec(d,t,n,a,o,l,0);return}f=f.next}u=u.next}while(u!==s)}function db(s,t,n,a){const o=[];for(let l=0,u=t.length;l<u;l++){const f=t[l]*a,d=l<u-1?t[l+1]*a:s.length,p=Fx(s,f,d,a,!1);p===p.next&&(p.steiner=!0),o.push(Sb(p))}o.sort(pb);for(let l=0;l<o.length;l++)n=mb(o[l],n);return n}function pb(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function mb(s,t){const n=gb(s,t);if(!n)return t;const a=Vx(n,s);return yr(a,a.next),yr(n,n.next)}function gb(s,t){let n=t;const a=s.x,o=s.y;let l=-1/0,u;if(Ro(s,n))return n;do{if(Ro(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>l&&(l=_,u=n.x<n.next.x?n:n.next,_===a))return u}n=n.next}while(n!==t);if(!u)return null;const f=u,d=u.x,p=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=d&&a!==n.x&&Hx(o<p?a:l,o,d,p,o<p?l:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);nc(n,s)&&(_<g||_===g&&(n.x>u.x||n.x===u.x&&vb(u,n)))&&(u=n,g=_)}n=n.next}while(n!==f);return u}function vb(s,t){return Mn(s.prev,s,t.prev)<0&&Mn(t.next,s,s.next)<0}function _b(s,t,n,a){let o=s;do o.z===0&&(o.z=x0(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,xb(o)}function xb(s){let t,n=1;do{let a=s,o;s=null;let l=null;for(t=0;a;){t++;let u=a,f=0;for(let p=0;p<n&&(f++,u=u.nextZ,!!u);p++);let d=n;for(;f>0||d>0&&u;)f!==0&&(d===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,f--):(o=u,u=u.nextZ,d--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;a=u}l.nextZ=null,n*=2}while(t>1);return s}function x0(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Sb(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function Hx(s,t,n,a,o,l,u,f){return(o-u)*(t-f)>=(s-u)*(l-f)&&(s-u)*(a-f)>=(n-u)*(t-f)&&(n-u)*(l-f)>=(o-u)*(a-f)}function Hl(s,t,n,a,o,l,u,f){return!(s===u&&t===f)&&Hx(s,t,n,a,o,l,u,f)}function yb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Mb(s,t)&&(nc(s,t)&&nc(t,s)&&bb(s,t)&&(Mn(s.prev,s,t.prev)||Mn(s,t.prev,t))||Ro(s,t)&&Mn(s.prev,s,s.next)>0&&Mn(t.prev,t,t.next)>0)}function Mn(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function Ro(s,t){return s.x===t.x&&s.y===t.y}function Gx(s,t,n,a){const o=Yu(Mn(s,t,n)),l=Yu(Mn(s,t,a)),u=Yu(Mn(n,a,s)),f=Yu(Mn(n,a,t));return!!(o!==l&&u!==f||o===0&&qu(s,n,t)||l===0&&qu(s,a,t)||u===0&&qu(n,s,a)||f===0&&qu(n,t,a))}function qu(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function Yu(s){return s>0?1:s<0?-1:0}function Mb(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&Gx(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function nc(s,t){return Mn(s.prev,s,s.next)<0?Mn(s,t,s.next)>=0&&Mn(s,s.prev,t)>=0:Mn(s,t,s.prev)<0||Mn(s,s.next,t)<0}function bb(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,l=(s.y+t.y)/2;do n.y>l!=n.next.y>l&&n.next.y!==n.y&&o<(n.next.x-n.x)*(l-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function Vx(s,t){const n=S0(s.i,s.x,s.y),a=S0(t.i,t.x,t.y),o=s.next,l=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,l.next=a,a.prev=l,a}function A1(s,t,n,a){const o=S0(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function ic(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function S0(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Eb(s,t,n,a){let o=0;for(let l=t,u=n-a;l<n;l+=a)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Tb{static triangulate(t,n,a=2){return lb(t,n,a)}}class Qa{static area(t){const n=t.length;let a=0;for(let o=n-1,l=0;l<n;o=l++)a+=t[o].x*t[l].y-t[l].x*t[o].y;return a*.5}static isClockWise(t){return Qa.area(t)<0}static triangulateShape(t,n){const a=[],o=[],l=[];w1(t),C1(a,t);let u=t.length;n.forEach(w1);for(let d=0;d<n.length;d++)o.push(u),u+=n[d].length,C1(a,n[d]);const f=Tb.triangulate(a,o);for(let d=0;d<f.length;d+=3)l.push(f.slice(d,d+3));return l}}function w1(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function C1(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class Do extends Qe{constructor(t=new Ji([new Nt(.5,.5),new Nt(-.5,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],l=[];for(let f=0,d=t.length;f<d;f++){const p=t[f];u(p)}this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2)),this.computeVertexNormals();function u(f){const d=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,x=n.bevelThickness!==void 0?n.bevelThickness:.2,M=n.bevelSize!==void 0?n.bevelSize:x-.1,w=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const S=n.extrudePath,C=n.UVGenerator!==void 0?n.UVGenerator:Ab;let N,A=!1,P,D,O,E;if(S){N=S.getSpacedPoints(g),A=!0,v=!1;const et=S.isCatmullRomCurve3?S.closed:!1;P=S.computeFrenetFrames(g,et),D=new G,O=new G,E=new G}v||(y=0,x=0,M=0,w=0);const z=f.extractPoints(p);let F=z.shape;const q=z.holes;if(!Qa.isClockWise(F)){F=F.reverse();for(let et=0,gt=q.length;et<gt;et++){const Et=q[et];Qa.isClockWise(Et)&&(q[et]=Et.reverse())}}function it(et){const Et=10000000000000001e-36;let At=et[0];for(let Ct=1;Ct<=et.length;Ct++){const Ft=Ct%et.length,Ot=et[Ft],It=Ot.x-At.x,le=Ot.y-At.y,X=It*It+le*le,pe=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(At.x),Math.abs(At.y)),ve=Et*pe*pe;if(X<=ve){et.splice(Ft,1),Ct--;continue}At=Ot}}it(F),q.forEach(it);const Y=q.length,tt=F;for(let et=0;et<Y;et++){const gt=q[et];F=F.concat(gt)}function H(et,gt,Et){return gt||Xe("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(gt,Et)}const V=F.length;function ht(et,gt,Et){let At,Ct,Ft;const Ot=et.x-gt.x,It=et.y-gt.y,le=Et.x-et.x,X=Et.y-et.y,pe=Ot*Ot+It*It,ve=Ot*X-It*le;if(Math.abs(ve)>Number.EPSILON){const B=Math.sqrt(pe),T=Math.sqrt(le*le+X*X),nt=gt.x-It/B,lt=gt.y+Ot/B,bt=Et.x-X/T,Ht=Et.y+le/T,kt=((bt-nt)*X-(Ht-lt)*le)/(Ot*X-It*le);At=nt+Ot*kt-et.x,Ct=lt+It*kt-et.y;const _t=At*At+Ct*Ct;if(_t<=2)return new Nt(At,Ct);Ft=Math.sqrt(_t/2)}else{let B=!1;Ot>Number.EPSILON?le>Number.EPSILON&&(B=!0):Ot<-Number.EPSILON?le<-Number.EPSILON&&(B=!0):Math.sign(It)===Math.sign(X)&&(B=!0),B?(At=-It,Ct=Ot,Ft=Math.sqrt(pe)):(At=Ot,Ct=It,Ft=Math.sqrt(pe/2))}return new Nt(At/Ft,Ct/Ft)}const at=[];for(let et=0,gt=tt.length,Et=gt-1,At=et+1;et<gt;et++,Et++,At++)Et===gt&&(Et=0),At===gt&&(At=0),at[et]=ht(tt[et],tt[Et],tt[At]);const mt=[];let I,st=at.concat();for(let et=0,gt=Y;et<gt;et++){const Et=q[et];I=[];for(let At=0,Ct=Et.length,Ft=Ct-1,Ot=At+1;At<Ct;At++,Ft++,Ot++)Ft===Ct&&(Ft=0),Ot===Ct&&(Ot=0),I[At]=ht(Et[At],Et[Ft],Et[Ot]);mt.push(I),st=st.concat(I)}let xt;if(y===0)xt=Qa.triangulateShape(tt,q);else{const et=[],gt=[];for(let Et=0;Et<y;Et++){const At=Et/y,Ct=x*Math.cos(At*Math.PI/2),Ft=M*Math.sin(At*Math.PI/2)+w;for(let Ot=0,It=tt.length;Ot<It;Ot++){const le=H(tt[Ot],at[Ot],Ft);wt(le.x,le.y,-Ct),At===0&&et.push(le)}for(let Ot=0,It=Y;Ot<It;Ot++){const le=q[Ot];I=mt[Ot];const X=[];for(let pe=0,ve=le.length;pe<ve;pe++){const B=H(le[pe],I[pe],Ft);wt(B.x,B.y,-Ct),At===0&&X.push(B)}At===0&&gt.push(X)}}xt=Qa.triangulateShape(et,gt)}const zt=xt.length,Vt=M+w;for(let et=0;et<V;et++){const gt=v?H(F[et],st[et],Vt):F[et];A?(O.copy(P.normals[0]).multiplyScalar(gt.x),D.copy(P.binormals[0]).multiplyScalar(gt.y),E.copy(N[0]).add(O).add(D),wt(E.x,E.y,E.z)):wt(gt.x,gt.y,0)}for(let et=1;et<=g;et++)for(let gt=0;gt<V;gt++){const Et=v?H(F[gt],st[gt],Vt):F[gt];A?(O.copy(P.normals[et]).multiplyScalar(Et.x),D.copy(P.binormals[et]).multiplyScalar(Et.y),E.copy(N[et]).add(O).add(D),wt(E.x,E.y,E.z)):wt(Et.x,Et.y,_/g*et)}for(let et=y-1;et>=0;et--){const gt=et/y,Et=x*Math.cos(gt*Math.PI/2),At=M*Math.sin(gt*Math.PI/2)+w;for(let Ct=0,Ft=tt.length;Ct<Ft;Ct++){const Ot=H(tt[Ct],at[Ct],At);wt(Ot.x,Ot.y,_+Et)}for(let Ct=0,Ft=q.length;Ct<Ft;Ct++){const Ot=q[Ct];I=mt[Ct];for(let It=0,le=Ot.length;It<le;It++){const X=H(Ot[It],I[It],At);A?wt(X.x,X.y+N[g-1].y,N[g-1].x+Et):wt(X.x,X.y,_+Et)}}}qt(),ot();function qt(){const et=o.length/3;if(v){let gt=0,Et=V*gt;for(let At=0;At<zt;At++){const Ct=xt[At];Yt(Ct[2]+Et,Ct[1]+Et,Ct[0]+Et)}gt=g+y*2,Et=V*gt;for(let At=0;At<zt;At++){const Ct=xt[At];Yt(Ct[0]+Et,Ct[1]+Et,Ct[2]+Et)}}else{for(let gt=0;gt<zt;gt++){const Et=xt[gt];Yt(Et[2],Et[1],Et[0])}for(let gt=0;gt<zt;gt++){const Et=xt[gt];Yt(Et[0]+V*g,Et[1]+V*g,Et[2]+V*g)}}a.addGroup(et,o.length/3-et,0)}function ot(){const et=o.length/3;let gt=0;$(tt,gt),gt+=tt.length;for(let Et=0,At=q.length;Et<At;Et++){const Ct=q[Et];$(Ct,gt),gt+=Ct.length}a.addGroup(et,o.length/3-et,1)}function $(et,gt){let Et=et.length;for(;--Et>=0;){const At=Et;let Ct=Et-1;Ct<0&&(Ct=et.length-1);for(let Ft=0,Ot=g+y*2;Ft<Ot;Ft++){const It=V*Ft,le=V*(Ft+1),X=gt+At+It,pe=gt+Ct+It,ve=gt+Ct+le,B=gt+At+le;Bt(X,pe,ve,B)}}}function wt(et,gt,Et){d.push(et),d.push(gt),d.push(Et)}function Yt(et,gt,Et){Qt(et),Qt(gt),Qt(Et);const At=o.length/3,Ct=C.generateTopUV(a,o,At-3,At-2,At-1);Dt(Ct[0]),Dt(Ct[1]),Dt(Ct[2])}function Bt(et,gt,Et,At){Qt(et),Qt(gt),Qt(At),Qt(gt),Qt(Et),Qt(At);const Ct=o.length/3,Ft=C.generateSideWallUV(a,o,Ct-6,Ct-3,Ct-2,Ct-1);Dt(Ft[0]),Dt(Ft[1]),Dt(Ft[3]),Dt(Ft[1]),Dt(Ft[2]),Dt(Ft[3])}function Qt(et){o.push(d[et*3+0]),o.push(d[et*3+1]),o.push(d[et*3+2])}function Dt(et){l.push(et.x),l.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return wb(n,a,t)}static fromJSON(t,n){const a=[];for(let l=0,u=t.shapes.length;l<u;l++){const f=n[t.shapes[l]];a.push(f)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new mf[o.type]().fromJSON(o)),new Do(a,t.options)}}const Ab={generateTopUV:function(s,t,n,a,o){const l=t[n*3],u=t[n*3+1],f=t[a*3],d=t[a*3+1],p=t[o*3],g=t[o*3+1];return[new Nt(l,u),new Nt(f,d),new Nt(p,g)]},generateSideWallUV:function(s,t,n,a,o,l){const u=t[n*3],f=t[n*3+1],d=t[n*3+2],p=t[a*3],g=t[a*3+1],_=t[a*3+2],v=t[o*3],x=t[o*3+1],M=t[o*3+2],w=t[l*3],y=t[l*3+1],S=t[l*3+2];return Math.abs(f-g)<Math.abs(u-p)?[new Nt(u,1-d),new Nt(p,1-_),new Nt(v,1-M),new Nt(w,1-S)]:[new Nt(f,1-d),new Nt(g,1-_),new Nt(x,1-M),new Nt(y,1-S)]}};function wb(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const l=s[a];n.shapes.push(l.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Uo extends Qe{constructor(t=[new Nt(0,-.5),new Nt(.5,0),new Nt(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=Ie(o,0,Math.PI*2);const l=[],u=[],f=[],d=[],p=[],g=1/n,_=new G,v=new Nt,x=new G,M=new G,w=new G;let y=0,S=0;for(let C=0;C<=t.length-1;C++)switch(C){case 0:y=t[C+1].x-t[C].x,S=t[C+1].y-t[C].y,x.x=S*1,x.y=-y,x.z=S*0,w.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case t.length-1:d.push(w.x,w.y,w.z);break;default:y=t[C+1].x-t[C].x,S=t[C+1].y-t[C].y,x.x=S*1,x.y=-y,x.z=S*0,M.copy(x),x.x+=w.x,x.y+=w.y,x.z+=w.z,x.normalize(),d.push(x.x,x.y,x.z),w.copy(M)}for(let C=0;C<=n;C++){const N=a+C*g*o,A=Math.sin(N),P=Math.cos(N);for(let D=0;D<=t.length-1;D++){_.x=t[D].x*A,_.y=t[D].y,_.z=t[D].x*P,u.push(_.x,_.y,_.z),v.x=C/n,v.y=D/(t.length-1),f.push(v.x,v.y);const O=d[3*D+0]*A,E=d[3*D+1],z=d[3*D+0]*P;p.push(O,E,z)}}for(let C=0;C<n;C++)for(let N=0;N<t.length-1;N++){const A=N+C*t.length,P=A,D=A+t.length,O=A+t.length+1,E=A+1;l.push(P,D,E),l.push(O,E,D)}this.setIndex(l),this.setAttribute("position",new Ce(u,3)),this.setAttribute("uv",new Ce(f,2)),this.setAttribute("normal",new Ce(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.points,t.segments,t.phiStart,t.phiLength)}}class Tn extends Qe{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const l=t/2,u=n/2,f=Math.floor(a),d=Math.floor(o),p=f+1,g=d+1,_=t/f,v=n/d,x=[],M=[],w=[],y=[];for(let S=0;S<g;S++){const C=S*v-u;for(let N=0;N<p;N++){const A=N*_-l;M.push(A,-C,0),w.push(0,0,1),y.push(N/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let C=0;C<f;C++){const N=C+p*S,A=C+p*(S+1),P=C+1+p*(S+1),D=C+1+p*S;x.push(N,A,D),x.push(A,P,D)}this.setIndex(x),this.setAttribute("position",new Ce(M,3)),this.setAttribute("normal",new Ce(w,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Df extends Qe{constructor(t=new Ji([new Nt(0,.5),new Nt(-.5,-.5),new Nt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],l=[],u=[];let f=0,d=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(f,d,g),f+=d,d=0;this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(u,2));function p(g){const _=o.length/3,v=g.extractPoints(n);let x=v.shape;const M=v.holes;Qa.isClockWise(x)===!1&&(x=x.reverse());for(let y=0,S=M.length;y<S;y++){const C=M[y];Qa.isClockWise(C)===!0&&(M[y]=C.reverse())}const w=Qa.triangulateShape(x,M);for(let y=0,S=M.length;y<S;y++){const C=M[y];x=x.concat(C)}for(let y=0,S=x.length;y<S;y++){const C=x[y];o.push(C.x,C.y,0),l.push(0,0,1),u.push(C.x,C.y)}for(let y=0,S=w.length;y<S;y++){const C=w[y],N=C[0]+_,A=C[1]+_,P=C[2]+_;a.push(N,A,P),d+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return Cb(n,t)}static fromJSON(t,n){const a=[];for(let o=0,l=t.shapes.length;o<l;o++){const u=n[t.shapes[o]];a.push(u)}return new Df(a,t.curveSegments)}}function Cb(s,t){if(t.shapes=[],Array.isArray(s))for(let n=0,a=s.length;n<a;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t}class Xn extends Qe{constructor(t=1,n=32,a=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let p=0;const g=[],_=new G,v=new G,x=[],M=[],w=[],y=[];for(let S=0;S<=a;S++){const C=[],N=S/a,A=u+N*f,P=t*Math.cos(A),D=Math.sqrt(t*t-P*P);let O=0;S===0&&u===0?O=.5/n:S===a&&d===Math.PI&&(O=-.5/n);for(let E=0;E<=n;E++){const z=E/n,F=o+z*l;_.x=-D*Math.cos(F),_.y=P,_.z=D*Math.sin(F),M.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),y.push(z+O,1-N),C.push(p++)}g.push(C)}for(let S=0;S<a;S++)for(let C=0;C<n;C++){const N=g[S][C+1],A=g[S][C],P=g[S+1][C],D=g[S+1][C+1];(S!==0||u>0)&&x.push(N,A,D),(S!==a-1||d<Math.PI)&&x.push(A,P,D)}this.setIndex(x),this.setAttribute("position",new Ce(M,3)),this.setAttribute("normal",new Ce(w,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Uf extends Qe{constructor(t=1,n=.4,a=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},a=Math.floor(a),o=Math.floor(o);const d=[],p=[],g=[],_=[],v=new G,x=new G,M=new G;for(let w=0;w<=a;w++){const y=u+w/a*f;for(let S=0;S<=o;S++){const C=S/o*l;x.x=(t+n*Math.cos(y))*Math.cos(C),x.y=(t+n*Math.cos(y))*Math.sin(C),x.z=n*Math.sin(y),p.push(x.x,x.y,x.z),v.x=t*Math.cos(C),v.y=t*Math.sin(C),M.subVectors(x,v).normalize(),g.push(M.x,M.y,M.z),_.push(S/o),_.push(w/a)}}for(let w=1;w<=a;w++)for(let y=1;y<=o;y++){const S=(o+1)*w+y-1,C=(o+1)*(w-1)+y-1,N=(o+1)*(w-1)+y,A=(o+1)*w+y;d.push(S,C,A),d.push(C,N,A)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class No extends Qe{constructor(t=new Ix(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,a=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:l};const u=t.computeFrenetFrames(n,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new G,d=new G,p=new Nt;let g=new G;const _=[],v=[],x=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new Ce(_,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(x,2));function w(){for(let N=0;N<n;N++)y(N);y(l===!1?n:0),C(),S()}function y(N){g=t.getPointAt(N/n,g);const A=u.normals[N],P=u.binormals[N];for(let D=0;D<=o;D++){const O=D/o*Math.PI*2,E=Math.sin(O),z=-Math.cos(O);d.x=z*A.x+E*P.x,d.y=z*A.y+E*P.y,d.z=z*A.z+E*P.z,d.normalize(),v.push(d.x,d.y,d.z),f.x=g.x+a*d.x,f.y=g.y+a*d.y,f.z=g.z+a*d.z,_.push(f.x,f.y,f.z)}}function S(){for(let N=1;N<=n;N++)for(let A=1;A<=o;A++){const P=(o+1)*(N-1)+(A-1),D=(o+1)*N+(A-1),O=(o+1)*N+A,E=(o+1)*(N-1)+A;M.push(P,D,E),M.push(D,O,E)}}function C(){for(let N=0;N<=n;N++)for(let A=0;A<=o;A++)p.x=N/n,p.y=A/o,x.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new No(new mf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Lo(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(R1(o))o.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(R1(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();t[n][a]=l}else t[n][a]=o.slice();else t[n][a]=o}}return t}function di(s){const t={};for(let n=0;n<s.length;n++){const a=Lo(s[n]);for(const o in a)t[o]=a[o]}return t}function R1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Rb(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function kx(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ve.workingColorSpace}const ac={clone:Lo,merge:di};var Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Lo(t.uniforms),this.uniformsGroups=Rb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new Zt().setHex(o.value);break;case"v2":this.uniforms[a].value=new Nt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new G().fromArray(o.value);break;case"v4":this.uniforms[a].value=new yn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new Ae().fromArray(o.value);break;case"m4":this.uniforms[a].value=new qe().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Xx extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class si extends Vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends Vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cf,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new la,this.combine=U0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nb extends Vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lb extends Vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class em extends zn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Wx extends em{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const xp=new qe,D1=new G,U1=new G;class qx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Q0,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera;D1.setFromMatrixPosition(t.matrixWorld),n.position.copy(D1),U1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(U1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,a,o){xp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),a.setFromProjectionMatrix(xp,t.coordinateSystem,t.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,d=o?o.x/l.x:0,p=o?o.y/l.y:0;t.coordinateSystem===jl||t.reversedDepth?n.set(.5*u,0,0,.5*u+d,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+d,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),n.multiply(xp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Zu=new G,Ku=new Gs,ma=new G;class Yx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=_a,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zu,Ku,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,Ku,ma.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(Zu,Ku,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,Ku,ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ls=new G,N1=new Nt,L1=new Nt;class bi extends Yx{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=$l*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $l*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ls.x,Ls.y).multiplyScalar(-t/Ls.z)}getViewSize(t,n){return this.getViewBounds(t,N1,L1),n.subVectors(L1,N1)}setViewOffset(t,n,a,o,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,n-=u.offsetY*a/p,o*=u.width/d,a*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Pb extends qx{constructor(){super(new bi(90,1,.5,500)),this.isPointLightShadow=!0}}class ja extends em{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new Pb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Lf extends Yx{constructor(t=-1,n=1,a=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ob extends qx{constructor(){super(new Lf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uc extends em{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new Ob}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const xo=-90,So=1;class zb extends zn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new bi(xo,So,t,n);o.layers=this.layers,this.add(o);const l=new bi(xo,So,t,n);l.layers=this.layers,this.add(l);const u=new bi(xo,So,t,n);u.layers=this.layers,this.add(u);const f=new bi(xo,So,t,n);f.layers=this.layers,this.add(f);const d=new bi(xo,So,t,n);d.layers=this.layers,this.add(d);const p=new bi(xo,So,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,l,u,f,d]=n;for(const p of n)this.remove(p);if(t===_a)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===jl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const w=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=w,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Ib extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bb{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Fb.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Fb(){this._document.hidden===!1&&this.reset()}const om=class om{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const l=this.elements;return l[0]=t,l[2]=n,l[1]=a,l[3]=o,this}};om.prototype.isMatrix2=!0;let P1=om;function O1(s,t,n,a){const o=Hb(a);switch(n){case _x:return s*t;case G0:return s*t/o.components*o.byteLength;case V0:return s*t/o.components*o.byteLength;case xr:return s*t*2/o.components*o.byteLength;case k0:return s*t*2/o.components*o.byteLength;case xx:return s*t*3/o.components*o.byteLength;case ra:return s*t*4/o.components*o.byteLength;case X0:return s*t*4/o.components*o.byteLength;case ef:case nf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case af:case sf:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kp:case Wp:return Math.max(s,16)*Math.max(t,8)/4;case Vp:case Xp:return Math.max(s,8)*Math.max(t,8)/2;case qp:case Yp:case Kp:case Jp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zp:case of:case Qp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $p:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case t0:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case e0:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case n0:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case i0:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case a0:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case s0:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case r0:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case o0:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case l0:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case c0:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case u0:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case f0:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case h0:case d0:case p0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case m0:case g0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case lf:case v0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hb(s){switch(s){case zi:case px:return{byteLength:1,components:1};case Jl:case mx:case Ei:return{byteLength:2,components:1};case F0:case H0:return{byteLength:2,components:4};case ba:case B0:case sa:return{byteLength:4,components:1};case gx:case vx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:D0}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=D0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zx(){let s=null,t=!1,n=null,a=null;function o(l,u){a=s.requestAnimationFrame(o),n(l,u)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Gb(s){const t=new WeakMap;function n(f,d){const p=f.array,g=f.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,p,g),f.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,d,p){const g=d.array,_=d.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<_.length;x++){const M=_[v],w=_[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++v,_[v]=w)}_.length=v+1;for(let x=0,M=_.length;x<M;x++){const w=_[x];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(s.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:u}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,PE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,OE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,WE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,DT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,KT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$T=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Vb,alphahash_pars_fragment:kb,alphamap_fragment:Xb,alphamap_pars_fragment:Wb,alphatest_fragment:qb,alphatest_pars_fragment:Yb,aomap_fragment:Zb,aomap_pars_fragment:Kb,batching_pars_vertex:Jb,batching_vertex:Qb,begin_vertex:jb,beginnormal_vertex:$b,bsdfs:tE,iridescence_fragment:eE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:sE,clipping_planes_vertex:rE,color_fragment:oE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:fE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:dE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:vE,colorspace_fragment:_E,colorspace_pars_fragment:xE,envmap_fragment:SE,envmap_common_pars_fragment:yE,envmap_pars_fragment:ME,envmap_pars_vertex:bE,envmap_physical_pars_fragment:PE,envmap_vertex:EE,fog_vertex:TE,fog_pars_vertex:AE,fog_fragment:wE,fog_pars_fragment:CE,gradientmap_pars_fragment:RE,lightmap_pars_fragment:DE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:NE,lights_pars_begin:LE,lights_toon_fragment:OE,lights_toon_pars_fragment:zE,lights_phong_fragment:IE,lights_phong_pars_fragment:BE,lights_physical_fragment:FE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:VE,lights_fragment_end:kE,lightprobes_pars_fragment:XE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:ZE,map_fragment:KE,map_pars_fragment:JE,map_particle_fragment:QE,map_particle_pars_fragment:jE,metalnessmap_fragment:$E,metalnessmap_pars_fragment:tT,morphinstance_vertex:eT,morphcolor_vertex:nT,morphnormal_vertex:iT,morphtarget_pars_vertex:aT,morphtarget_vertex:sT,normal_fragment_begin:rT,normal_fragment_maps:oT,normal_pars_fragment:lT,normal_pars_vertex:cT,normal_vertex:uT,normalmap_pars_fragment:fT,clearcoat_normal_fragment_begin:hT,clearcoat_normal_fragment_maps:dT,clearcoat_pars_fragment:pT,iridescence_pars_fragment:mT,opaque_fragment:gT,packing:vT,premultiplied_alpha_fragment:_T,project_vertex:xT,dithering_fragment:ST,dithering_pars_fragment:yT,roughnessmap_fragment:MT,roughnessmap_pars_fragment:bT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:TT,shadowmap_vertex:AT,shadowmask_pars_fragment:wT,skinbase_vertex:CT,skinning_pars_vertex:RT,skinning_vertex:DT,skinnormal_vertex:UT,specularmap_fragment:NT,specularmap_pars_fragment:LT,tonemapping_fragment:PT,tonemapping_pars_fragment:OT,transmission_fragment:zT,transmission_pars_fragment:IT,uv_pars_fragment:BT,uv_pars_vertex:FT,uv_vertex:HT,worldpos_vertex:GT,background_vert:VT,background_frag:kT,backgroundCube_vert:XT,backgroundCube_frag:WT,cube_vert:qT,cube_frag:YT,depth_vert:ZT,depth_frag:KT,distance_vert:JT,distance_frag:QT,equirect_vert:jT,equirect_frag:$T,linedashed_vert:tA,linedashed_frag:eA,meshbasic_vert:nA,meshbasic_frag:iA,meshlambert_vert:aA,meshlambert_frag:sA,meshmatcap_vert:rA,meshmatcap_frag:oA,meshnormal_vert:lA,meshnormal_frag:cA,meshphong_vert:uA,meshphong_frag:fA,meshphysical_vert:hA,meshphysical_frag:dA,meshtoon_vert:pA,meshtoon_frag:mA,points_vert:gA,points_frag:vA,shadow_vert:_A,shadow_frag:xA,sprite_vert:SA,sprite_frag:yA},ne={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},va={basic:{uniforms:di([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:di([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:di([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:di([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:di([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:di([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:di([ne.points,ne.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:di([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:di([ne.common,ne.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:di([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:di([ne.sprite,ne.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:di([ne.common,ne.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:di([ne.lights,ne.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};va.physical={uniforms:di([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ju={r:0,b:0,g:0},MA=new qe,Kx=new Ae;Kx.set(-1,0,0,0,1,0,0,0,1);function bA(s,t,n,a,o,l){const u=new Zt(0);let f=o===!0?0:1,d,p,g=null,_=0,v=null;function x(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const A=C.backgroundBlurriness>0;N=t.get(N,A)}return N}function M(C){let N=!1;const A=x(C);A===null?y(u,f):A&&A.isColor&&(y(A,1),N=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(C,N){const A=x(N);A&&(A.isCubeTexture||A.mapping===Ef)?(p===void 0&&(p=new vn(new ca(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Lo(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(MA.makeRotationFromEuler(N.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Kx),p.material.toneMapped=Ve.getTransfer(A.colorSpace)!==$e,(g!==A||_!==A.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new vn(new Tn(2,2),new fn({name:"BackgroundMaterial",uniforms:Lo(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=Ve.getTransfer(A.colorSpace)!==$e,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,N){C.getRGB(Ju,kx(s)),n.buffers.color.setClear(Ju.r,Ju.g,Ju.b,N,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,N=1){u.set(C),f=N,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(u,f)},render:M,addToRenderList:w,dispose:S}}function EA(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let l=o,u=!1;function f(q,Z,it,Y,tt){let H=!1;const V=_(q,Y,it,Z);l!==V&&(l=V,p(l.object)),H=x(q,Y,it,tt),H&&M(q,Y,it,tt),tt!==null&&t.update(tt,s.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,A(q,Z,it,Y),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function d(){return s.createVertexArray()}function p(q){return s.bindVertexArray(q)}function g(q){return s.deleteVertexArray(q)}function _(q,Z,it,Y){const tt=Y.wireframe===!0;let H=a[Z.id];H===void 0&&(H={},a[Z.id]=H);const V=q.isInstancedMesh===!0?q.id:0;let ht=H[V];ht===void 0&&(ht={},H[V]=ht);let at=ht[it.id];at===void 0&&(at={},ht[it.id]=at);let mt=at[tt];return mt===void 0&&(mt=v(d()),at[tt]=mt),mt}function v(q){const Z=[],it=[],Y=[];for(let tt=0;tt<n;tt++)Z[tt]=0,it[tt]=0,Y[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:it,attributeDivisors:Y,object:q,attributes:{},index:null}}function x(q,Z,it,Y){const tt=l.attributes,H=Z.attributes;let V=0;const ht=it.getAttributes();for(const at in ht)if(ht[at].location>=0){const I=tt[at];let st=H[at];if(st===void 0&&(at==="instanceMatrix"&&q.instanceMatrix&&(st=q.instanceMatrix),at==="instanceColor"&&q.instanceColor&&(st=q.instanceColor)),I===void 0||I.attribute!==st||st&&I.data!==st.data)return!0;V++}return l.attributesNum!==V||l.index!==Y}function M(q,Z,it,Y){const tt={},H=Z.attributes;let V=0;const ht=it.getAttributes();for(const at in ht)if(ht[at].location>=0){let I=H[at];I===void 0&&(at==="instanceMatrix"&&q.instanceMatrix&&(I=q.instanceMatrix),at==="instanceColor"&&q.instanceColor&&(I=q.instanceColor));const st={};st.attribute=I,I&&I.data&&(st.data=I.data),tt[at]=st,V++}l.attributes=tt,l.attributesNum=V,l.index=Y}function w(){const q=l.newAttributes;for(let Z=0,it=q.length;Z<it;Z++)q[Z]=0}function y(q){S(q,0)}function S(q,Z){const it=l.newAttributes,Y=l.enabledAttributes,tt=l.attributeDivisors;it[q]=1,Y[q]===0&&(s.enableVertexAttribArray(q),Y[q]=1),tt[q]!==Z&&(s.vertexAttribDivisor(q,Z),tt[q]=Z)}function C(){const q=l.newAttributes,Z=l.enabledAttributes;for(let it=0,Y=Z.length;it<Y;it++)Z[it]!==q[it]&&(s.disableVertexAttribArray(it),Z[it]=0)}function N(q,Z,it,Y,tt,H,V){V===!0?s.vertexAttribIPointer(q,Z,it,tt,H):s.vertexAttribPointer(q,Z,it,Y,tt,H)}function A(q,Z,it,Y){w();const tt=Y.attributes,H=it.getAttributes(),V=Z.defaultAttributeValues;for(const ht in H){const at=H[ht];if(at.location>=0){let mt=tt[ht];if(mt===void 0&&(ht==="instanceMatrix"&&q.instanceMatrix&&(mt=q.instanceMatrix),ht==="instanceColor"&&q.instanceColor&&(mt=q.instanceColor)),mt!==void 0){const I=mt.normalized,st=mt.itemSize,xt=t.get(mt);if(xt===void 0)continue;const zt=xt.buffer,Vt=xt.type,qt=xt.bytesPerElement,ot=Vt===s.INT||Vt===s.UNSIGNED_INT||mt.gpuType===B0;if(mt.isInterleavedBufferAttribute){const $=mt.data,wt=$.stride,Yt=mt.offset;if($.isInstancedInterleavedBuffer){for(let Bt=0;Bt<at.locationSize;Bt++)S(at.location+Bt,$.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Bt=0;Bt<at.locationSize;Bt++)y(at.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let Bt=0;Bt<at.locationSize;Bt++)N(at.location+Bt,st/at.locationSize,Vt,I,wt*qt,(Yt+st/at.locationSize*Bt)*qt,ot)}else{if(mt.isInstancedBufferAttribute){for(let $=0;$<at.locationSize;$++)S(at.location+$,mt.meshPerAttribute);q.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let $=0;$<at.locationSize;$++)y(at.location+$);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let $=0;$<at.locationSize;$++)N(at.location+$,st/at.locationSize,Vt,I,st*qt,st/at.locationSize*$*qt,ot)}}else if(V!==void 0){const I=V[ht];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(at.location,I);break;case 3:s.vertexAttrib3fv(at.location,I);break;case 4:s.vertexAttrib4fv(at.location,I);break;default:s.vertexAttrib1fv(at.location,I)}}}}C()}function P(){z();for(const q in a){const Z=a[q];for(const it in Z){const Y=Z[it];for(const tt in Y){const H=Y[tt];for(const V in H)g(H[V].object),delete H[V];delete Y[tt]}}delete a[q]}}function D(q){if(a[q.id]===void 0)return;const Z=a[q.id];for(const it in Z){const Y=Z[it];for(const tt in Y){const H=Y[tt];for(const V in H)g(H[V].object),delete H[V];delete Y[tt]}}delete a[q.id]}function O(q){for(const Z in a){const it=a[Z];for(const Y in it){const tt=it[Y];if(tt[q.id]===void 0)continue;const H=tt[q.id];for(const V in H)g(H[V].object),delete H[V];delete tt[q.id]}}}function E(q){for(const Z in a){const it=a[Z],Y=q.isInstancedMesh===!0?q.id:0,tt=it[Y];if(tt!==void 0){for(const H in tt){const V=tt[H];for(const ht in V)g(V[ht].object),delete V[ht];delete tt[H]}delete it[Y],Object.keys(it).length===0&&delete a[Z]}}}function z(){F(),u=!0,l!==o&&(l=o,p(l.object))}function F(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:F,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function TA(s,t,n){let a;function o(d){a=d}function l(d,p){s.drawArrays(a,d,p),n.update(p,a,1)}function u(d,p,g){g!==0&&(s.drawArraysInstanced(a,d,p,g),n.update(p,a,g))}function f(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,p,0,g);let v=0;for(let x=0;x<g;x++)v+=p[x];n.update(v,a,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function AA(s,t,n,a){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==ra&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const E=O===Ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==zi&&O!==sa&&!E&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(be("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:A,maxSamples:P,samples:D}}function wA(s){const t=this;let n=null,a=0,o=!1,l=!1;const u=new Fs,f=new Ae,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const M=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!o||M===null||M.length===0||l&&!y)l?g(null):p();else{const C=l?0:a,N=C*4;let A=S.clippingState||null;d.value=A,A=g(M,v,N,x);for(let P=0;P!==N;++P)A[P]=n[P];S.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,M){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=d.value,M!==!0||y===null){const S=x+w*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,A=x;N!==w;++N,A+=4)u.copy(_[N]).applyMatrix4(C,f),u.normal.toArray(y,A),y[A+3]=u.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const Eo=4,CA=6,RA=20,DA=256,Ol=new Lf,z1=new Zt;let Sp=null,yp=0,Mp=0,bp=!1;const UA=new G,fr=new G;class y0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,l={}){const{size:u=256,position:f=UA}=l;Sp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,o,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=F1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sp,yp,Mp),this._renderer.xr.enabled=bp,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_r||t.mapping===Co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sp=this._renderer.getRenderTarget(),yp=this._renderer.getActiveCubeFace(),Mp=this._renderer.getActiveMipmapLevel(),bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Ei,format:ra,colorSpace:uf,depthBuffer:!1},o=I1(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I1(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NA(l)),this._blurMaterial=PA(l,t,n),this._ggxMaterial=LA(l,t,n)}return o}_compileMaterial(t){const n=new vn(new Qe,t);this._renderer.compile(n,Ol)}_sceneToCubeUV(t,n,a,o,l){const d=new bi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(z1),_.toneMapping=oa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new ca,new Sn({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const C=t.background;C?C.isColor&&(y.color.copy(C),t.background=null,S=!0):(y.color.copy(z1),S=!0);for(let N=0;N<6;N++){const A=N%3;A===0?(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[N],l.y,l.z)):A===1?(d.up.set(0,0,p[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[N],l.z)):(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[N]));const P=this._cubeSize;yo(o,A*P,N>2?P:0,P,P),_.setRenderTarget(o),S&&_.render(w,d),_.render(t,d)}_.toneMapping=x,_.autoClear=v,t.background=C}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===_r||t.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=F1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B1());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;yo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Ol)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const d=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=p*1.25,x=_*v,{_lodMax:M}=this,w=this._sizeLods[a],y=3*w*(a>M-Eo?a-M+Eo:0),S=4*(this._cubeSize-w);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=M-n,yo(l,y,S,3*w,2*w),o.setRenderTarget(l),o.render(f,Ol),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=M-a,yo(t,y,S,3*w,2*w),o.setRenderTarget(t),o.render(f,Ol)}_blur(t,n,a,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(t,l,n,a,u),this._blurPass(l,t,a,a,u)}_blurPass(t,n,a,o,l){const u=this._renderer,f=this._blurMaterial,d=this._lodMeshes[o];d.material=f;const p=f.uniforms;p.envMap.value=t.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const g=this._sizeLods[o],_=3*g*(o>this._lodMax-Eo?o-this._lodMax+Eo:0),v=4*(this._cubeSize-g);yo(n,_,v,3*g,2*g),u.setRenderTarget(n),u.render(d,Ol)}}function NA(s){const t=[],n=[];let a=s;const o=s-Eo+1+CA;for(let l=0;l<o;l++){const u=Math.pow(2,a);t.push(u);const f=1/(u-2),d=-f,p=1+f,g=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,v=6,x=3,M=new Float32Array(x*v*_),w=new Float32Array(x*v*_);for(let S=0;S<_;S++){const C=S%3*2/3-1,N=S>2?0:-1,A=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];M.set(A,x*v*S);for(let P=0;P<v;P++){const D=g[P*2]*2-1,O=g[P*2+1]*2-1;S===0?fr.set(1,O,D):S===1?fr.set(-D,1,-O):S===2?fr.set(-D,O,1):S===3?fr.set(-1,O,-D):S===4?fr.set(-D,-1,O):fr.set(D,O,-1),fr.toArray(w,(S*v+P)*x)}}const y=new Qe;y.setAttribute("position",new ye(M,x)),y.setAttribute("outputDirection",new ye(w,x)),n.push(new vn(y,null)),a>Eo&&a--}return{lodMeshes:n,sizeLods:t}}function I1(s,t,n){const a=new gi(s,t,n);return a.texture.mapping=Ef,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function yo(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function LA(s,t,n){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function PA(s,t,n){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:RA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function B1(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function F1(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Pf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jx extends gi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Ux(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ca(5,5,5),l=new fn({name:"CubemapFromEquirect",uniforms:Lo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:ya});l.uniforms.tEquirect.value=n;const u=new vn(o,l),f=n.minFilter;return n.minFilter===dr&&(n.minFilter=ii),new zb(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(l)}}function OA(s){let t=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):l(v)}function l(v){if(v&&v.isTexture){const x=v.mapping;if(x===Wd||x===qd)if(t.has(v)){const M=t.get(v).texture;return f(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const w=new Jx(M.height);return w.fromEquirectangularTexture(s,v),t.set(v,w),v.addEventListener("dispose",p),f(w.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,M=x===Wd||x===qd,w=x===_r||x===Co;if(M||w){let y=n.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new y0(s)),y=M?a.fromEquirectangular(v,y):a.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),y.texture;if(y!==void 0)return y.texture;{const C=v.image;return M&&C&&C.height>0||w&&C&&d(C)?(a===null&&(a=new y0(s)),y=M?a.fromEquirectangular(v):a.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function f(v,x){return x===Wd?v.mapping=_r:x===qd&&(v.mapping=Co),v}function d(v){let x=0;const M=6;for(let w=0;w<M;w++)v[w]!==void 0&&x++;return x===M}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function zA(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Ao("WebGLRenderer: "+a+" extension not supported."),o}}}function IA(s,t,n,a){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(t.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)t.update(v[x],s.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,M=_.attributes.position;let w=0;if(M===void 0)return;if(x!==null){const C=x.array;w=x.version;for(let N=0,A=C.length;N<A;N+=3){const P=C[N+0],D=C[N+1],O=C[N+2];v.push(P,D,D,O,O,P)}}else{const C=M.array;w=M.version;for(let N=0,A=C.length/3-1;N<A;N+=3){const P=N+0,D=N+1,O=N+2;v.push(P,D,D,O,O,P)}}const y=new(M.count>=65535?Ax:Tx)(v,1);y.version=w;const S=l.get(_);S&&t.remove(S),l.set(_,y)}function g(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function BA(s,t,n){let a;function o(_){a=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,v){s.drawElements(a,v,l,_*u),n.update(v,a,1)}function p(_,v,x){x!==0&&(s.drawElementsInstanced(a,v,l,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,l,_,0,x);let w=0;for(let y=0;y<x;y++)w+=v[y];n.update(w,a,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g}function FA(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:Xe("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function HA(s,t,n){const a=new WeakMap,o=new yn;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let F=function(){E.dispose(),a.delete(f),f.removeEventListener("dispose",F)};var x=F;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),w===!0&&(A=2),y===!0&&(A=3);let P=f.attributes.position.count*A,D=1;P>t.maxTextureSize&&(D=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*D*4*_),E=new Mx(O,P,D,_);E.type=sa,E.needsUpdate=!0;const z=A*4;for(let q=0;q<_;q++){const Z=S[q],it=C[q],Y=N[q],tt=P*D*4*q;for(let H=0;H<Z.count;H++){const V=H*z;M===!0&&(o.fromBufferAttribute(Z,H),O[tt+V+0]=o.x,O[tt+V+1]=o.y,O[tt+V+2]=o.z,O[tt+V+3]=0),w===!0&&(o.fromBufferAttribute(it,H),O[tt+V+4]=o.x,O[tt+V+5]=o.y,O[tt+V+6]=o.z,O[tt+V+7]=0),y===!0&&(o.fromBufferAttribute(Y,H),O[tt+V+8]=o.x,O[tt+V+9]=o.y,O[tt+V+10]=o.z,O[tt+V+11]=Y.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Nt(P,D)},a.set(f,v),f.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const w=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function GA(s,t,n,a,o){let l=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==g&&(t.update(v),l.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return v}function f(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:f}}const VA={[N0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[z0]:"AGX_TONE_MAPPING",[I0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function kA(s,t,n,a,o,l){const u=new gi(t,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,d=null;const p=new Qe;p.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const g=new Xx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new vn(p,g),v=new Lf(-1,1,1,-1,0,1);let x=null,M=null,w=!1,y,S=null,C=[],N=!1;this.setSize=function(A,P){u.setSize(A,P),f!==null&&f.setSize(A,P),d!==null&&d.setSize(A,P);for(let D=0;D<C.length;D++){const O=C[D];O.setSize&&O.setSize(A,P)}},this.setEffects=function(A){C=A,N=C.length>0&&C[0].isRenderPass===!0;const P=u.width,D=u.height;C.length>0&&f===null&&(f=new gi(P,D,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),d=new gi(P,D,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<C.length;O++){const E=C[O];E.setSize&&E.setSize(P,D)}},this.begin=function(A,P){if(w||A.toneMapping===oa&&C.length===0)return!1;if(S=P,P!==null){const D=P.width,O=P.height;(u.width!==D||u.height!==O)&&this.setSize(D,O)}return N===!1&&A.setRenderTarget(u),y=A.toneMapping,A.toneMapping=oa,!0},this.hasRenderPass=function(){return N},this.end=function(A,P){A.toneMapping=y,w=!0;let D=u,O=f;for(let E=0;E<C.length;E++){const z=C[E];z.enabled!==!1&&(z.render(A,O,D,P),z.needsSwap!==!1&&(D=O,O=O===f?d:f))}if(x!==A.outputColorSpace||M!==A.toneMapping){x=A.outputColorSpace,M=A.toneMapping,g.defines={},Ve.getTransfer(x)===$e&&(g.defines.SRGB_TRANSFER="");const E=VA[M];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(S),A.render(_,v),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),d!==null&&d.dispose(),p.dispose(),g.dispose()}}const Qx=new ri,M0=new tc(1,1),jx=new Mx,$x=new N2,tS=new Ux,H1=[],G1=[],V1=new Float32Array(16),k1=new Float32Array(9),X1=new Float32Array(4);function Oo(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let l=H1[o];if(l===void 0&&(l=new Float32Array(o),H1[o]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,s[u].toArray(l,f)}return l}function Hn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Gn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Of(s,t){let n=G1[t];n===void 0&&(n=new Int32Array(t),G1[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function XA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function WA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;s.uniform2fv(this.addr,t),Gn(n,t)}}function qA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Hn(n,t))return;s.uniform3fv(this.addr,t),Gn(n,t)}}function YA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;s.uniform4fv(this.addr,t),Gn(n,t)}}function ZA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;X1.set(a),s.uniformMatrix2fv(this.addr,!1,X1),Gn(n,a)}}function KA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;k1.set(a),s.uniformMatrix3fv(this.addr,!1,k1),Gn(n,a)}}function JA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Hn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Gn(n,t)}else{if(Hn(n,a))return;V1.set(a),s.uniformMatrix4fv(this.addr,!1,V1),Gn(n,a)}}function QA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function jA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;s.uniform2iv(this.addr,t),Gn(n,t)}}function $A(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hn(n,t))return;s.uniform3iv(this.addr,t),Gn(n,t)}}function t3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;s.uniform4iv(this.addr,t),Gn(n,t)}}function e3(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function n3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hn(n,t))return;s.uniform2uiv(this.addr,t),Gn(n,t)}}function i3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hn(n,t))return;s.uniform3uiv(this.addr,t),Gn(n,t)}}function a3(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hn(n,t))return;s.uniform4uiv(this.addr,t),Gn(n,t)}}function s3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(M0.compareFunction=n.isReversedDepthBuffer()?q0:W0,l=M0):l=Qx,n.setTexture2D(t||l,o)}function r3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||$x,o)}function o3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||tS,o)}function l3(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||jx,o)}function c3(s){switch(s){case 5126:return XA;case 35664:return WA;case 35665:return qA;case 35666:return YA;case 35674:return ZA;case 35675:return KA;case 35676:return JA;case 5124:case 35670:return QA;case 35667:case 35671:return jA;case 35668:case 35672:return $A;case 35669:case 35673:return t3;case 5125:return e3;case 36294:return n3;case 36295:return i3;case 36296:return a3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}function u3(s,t){s.uniform1fv(this.addr,t)}function f3(s,t){const n=Oo(t,this.size,2);s.uniform2fv(this.addr,n)}function h3(s,t){const n=Oo(t,this.size,3);s.uniform3fv(this.addr,n)}function d3(s,t){const n=Oo(t,this.size,4);s.uniform4fv(this.addr,n)}function p3(s,t){const n=Oo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function m3(s,t){const n=Oo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function g3(s,t){const n=Oo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function v3(s,t){s.uniform1iv(this.addr,t)}function _3(s,t){s.uniform2iv(this.addr,t)}function x3(s,t){s.uniform3iv(this.addr,t)}function S3(s,t){s.uniform4iv(this.addr,t)}function y3(s,t){s.uniform1uiv(this.addr,t)}function M3(s,t){s.uniform2uiv(this.addr,t)}function b3(s,t){s.uniform3uiv(this.addr,t)}function E3(s,t){s.uniform4uiv(this.addr,t)}function T3(s,t,n){const a=this.cache,o=t.length,l=Of(n,o);Hn(a,l)||(s.uniform1iv(this.addr,l),Gn(a,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=M0:u=Qx;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||u,l[f])}function A3(s,t,n){const a=this.cache,o=t.length,l=Of(n,o);Hn(a,l)||(s.uniform1iv(this.addr,l),Gn(a,l));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||$x,l[u])}function w3(s,t,n){const a=this.cache,o=t.length,l=Of(n,o);Hn(a,l)||(s.uniform1iv(this.addr,l),Gn(a,l));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||tS,l[u])}function C3(s,t,n){const a=this.cache,o=t.length,l=Of(n,o);Hn(a,l)||(s.uniform1iv(this.addr,l),Gn(a,l));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||jx,l[u])}function R3(s){switch(s){case 5126:return u3;case 35664:return f3;case 35665:return h3;case 35666:return d3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return v3;case 35667:case 35671:return _3;case 35668:case 35672:return x3;case 35669:case 35673:return S3;case 5125:return y3;case 36294:return M3;case 36295:return b3;case 36296:return E3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return C3}}class D3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=c3(n.type)}}class U3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R3(n.type)}}class N3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(t,n[f.id],a)}}}const Ep=/(\w+)(\])?(\[|\.)?/g;function W1(s,t){s.seq.push(t),s.map[t.id]=t}function L3(s,t,n){const a=s.name,o=a.length;for(Ep.lastIndex=0;;){const l=Ep.exec(a),u=Ep.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===o){W1(n,p===void 0?new D3(f,s,t):new U3(f,s,t));break}else{let _=n.map[f];_===void 0&&(_=new N3(f),W1(n,_)),n=_}}}class rf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),d=t.getUniformLocation(n,f.name);L3(f,d,this)}const o=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(t,n,a,o){const l=this.map[n];l!==void 0&&l.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let l=0,u=n.length;l!==u;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,l=t.length;o!==l;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function q1(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const P3=37297;let O3=0;function z3(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=o;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const Y1=new Ae;function I3(s){Ve._getMatrix(Y1,Ve.workingColorSpace,s);const t=`mat3( ${Y1.elements.map(n=>n.toFixed(4))} )`;switch(Ve.getTransfer(s)){case ff:return[t,"LinearTransferOETF"];case $e:return[t,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Z1(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),l=(s.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+z3(s.getShaderSource(t),f)}else return l}function B3(s,t){const n=I3(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const F3={[N0]:"Linear",[L0]:"Reinhard",[P0]:"Cineon",[cc]:"ACESFilmic",[z0]:"AgX",[I0]:"Neutral",[O0]:"Custom"};function H3(s,t){const n=F3[t];return n===void 0?(be("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qu=new G;function G3(){Ve.getLuminanceCoefficients(Qu);const s=Qu.x.toFixed(4),t=Qu.y.toFixed(4),n=Qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function k3(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function X3(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=s.getActiveAttrib(t,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:s.getAttribLocation(t,u),locationSize:f}}return n}function Gl(s){return s!==""}function K1(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function b0(s){return s.replace(W3,Y3)}const q3=new Map;function Y3(s,t){let n=Oe[t];if(n===void 0){const a=q3.get(t);if(a!==void 0)n=Oe[a],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return b0(n)}const Z3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q1(s){return s.replace(Z3,K3)}function K3(s,t,n,a){let o="";for(let l=parseInt(t);l<parseInt(n);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function j1(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const J3={[tf]:"SHADOWMAP_TYPE_PCF",[Fl]:"SHADOWMAP_TYPE_VSM"};function Q3(s){return J3[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j3={[_r]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[Ef]:"ENVMAP_TYPE_CUBE_UV"};function $3(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":j3[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const tw={[Co]:"ENVMAP_MODE_REFRACTION"};function ew(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nw={[U0]:"ENVMAP_BLENDING_MULTIPLY",[KM]:"ENVMAP_BLENDING_MIX",[JM]:"ENVMAP_BLENDING_ADD"};function iw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":nw[s.combine]||"ENVMAP_BLENDING_NONE"}function aw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function sw(s,t,n,a){const o=s.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=Q3(n),p=$3(n),g=ew(n),_=iw(n),v=aw(n),x=V3(n),M=k3(l),w=o.createProgram();let y,S,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Gl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Gl).join(`
`),S.length>0&&(S+=`
`)):(y=[j1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),S=[j1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oa?"#define TONE_MAPPING":"",n.toneMapping!==oa?Oe.tonemapping_pars_fragment:"",n.toneMapping!==oa?H3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,B3("linearToOutputTexel",n.outputColorSpace),G3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Gl).join(`
`)),u=b0(u),u=K1(u,n),u=J1(u,n),f=b0(f),f=K1(f,n),f=J1(f,n),u=Q1(u),f=Q1(f),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===$_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+y+u,A=C+S+f,P=q1(o,o.VERTEX_SHADER,N),D=q1(o,o.FRAGMENT_SHADER,A);o.attachShader(w,P),o.attachShader(w,D),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(q){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(w)||"",it=o.getShaderInfoLog(P)||"",Y=o.getShaderInfoLog(D)||"",tt=Z.trim(),H=it.trim(),V=Y.trim();let ht=!0,at=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,D);else{const mt=Z1(o,P,"vertex"),I=Z1(o,D,"fragment");Xe("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+tt+`
`+mt+`
`+I)}else tt!==""?be("WebGLProgram: Program Info Log:",tt):(H===""||V==="")&&(at=!1);at&&(q.diagnostics={runnable:ht,programLog:tt,vertexShader:{log:H,prefix:y},fragmentShader:{log:V,prefix:S}})}o.deleteShader(P),o.deleteShader(D),E=new rf(o,w),z=X3(o,w)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let z;this.getAttributes=function(){return z===void 0&&O(this),z};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=o.getProgramParameter(w,P3)),F},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O3++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=D,this}let rw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new lw(t),n.set(t,a)),a}}class lw{constructor(t){this.id=rw++,this.code=t,this.usedTimes=0}}function cw(s){return s===xr||s===of||s===lf}function uw(s,t,n,a,o,l){const u=new bx,f=new ow,d=new Set,p=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function w(E,z,F,q,Z,it){const Y=q.fog,tt=Z.geometry,H=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?q.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ht=t.get(E.envMap||H,V),at=ht&&ht.mapping===Ef?ht.image.height:null,mt=x[E.type];E.precision!==null&&(v=a.getMaxPrecision(E.precision),v!==E.precision&&be("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const I=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,st=I!==void 0?I.length:0;let xt=0;tt.morphAttributes.position!==void 0&&(xt=1),tt.morphAttributes.normal!==void 0&&(xt=2),tt.morphAttributes.color!==void 0&&(xt=3);let zt,Vt,qt,ot;if(mt){const Q=va[mt];zt=Q.vertexShader,Vt=Q.fragmentShader}else{zt=E.vertexShader,Vt=E.fragmentShader;const Q=f.getVertexShaderStage(E),Mt=f.getFragmentShaderStage(E);f.update(E,Q,Mt),qt=Q.id,ot=Mt.id}const $=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),Yt=Z.isInstancedMesh===!0,Bt=Z.isBatchedMesh===!0,Qt=!!E.map,Dt=!!E.matcap,et=!!ht,gt=!!E.aoMap,Et=!!E.lightMap,At=!!E.bumpMap&&E.wireframe===!1,Ct=!!E.normalMap,Ft=!!E.displacementMap,Ot=!!E.emissiveMap,It=!!E.metalnessMap,le=!!E.roughnessMap,X=E.anisotropy>0,pe=E.clearcoat>0,ve=E.dispersion>0,B=E.retroreflectivity>0,T=E.iridescence>0,nt=E.sheen>0,lt=E.transmission>0,bt=X&&!!E.anisotropyMap,Ht=pe&&!!E.clearcoatMap,kt=pe&&!!E.clearcoatNormalMap,_t=pe&&!!E.clearcoatRoughnessMap,yt=T&&!!E.iridescenceMap,Gt=T&&!!E.iridescenceThicknessMap,$t=nt&&!!E.sheenColorMap,Jt=nt&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,ce=!!E.specularColorMap,fe=!!E.specularIntensityMap,me=lt&&!!E.transmissionMap,K=lt&&!!E.thicknessMap,Xt=!!E.gradientMap,Rt=!!E.alphaMap,Wt=E.alphaTest>0,te=!!E.alphaHash,R=!!E.extensions;let k=oa;E.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(k=s.toneMapping);const ct={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:zt,fragmentShader:Vt,defines:E.defines,customVertexShaderID:qt,customFragmentShaderID:ot,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:Bt,batchingColor:Bt&&Z._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&Z.instanceColor!==null,instancingMorph:Yt&&Z.morphTexture!==null,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Qt,matcap:Dt,envMap:et,envMapMode:et&&ht.mapping,envMapCubeUVHeight:at,aoMap:gt,lightMap:Et,bumpMap:At,normalMap:Ct,displacementMap:Ft,emissiveMap:Ot,normalMapObjectSpace:Ct&&E.normalMapType===$M,normalMapTangentSpace:Ct&&E.normalMapType===cf,packedNormalMap:Ct&&E.normalMapType===cf&&cw(E.normalMap.format),metalnessMap:It,roughnessMap:le,anisotropy:X,anisotropyMap:bt,clearcoat:pe,clearcoatMap:Ht,clearcoatNormalMap:kt,clearcoatRoughnessMap:_t,dispersion:ve,retroreflection:B,iridescence:T,iridescenceMap:yt,iridescenceThicknessMap:Gt,sheen:nt,sheenColorMap:$t,sheenRoughnessMap:Jt,specularMap:Kt,specularColorMap:ce,specularIntensityMap:fe,transmission:lt,transmissionMap:me,thicknessMap:K,gradientMap:Xt,opaque:E.transparent===!1&&E.blending===To&&E.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Wt,alphaHash:te,combine:E.combine,mapUv:Qt&&M(E.map.channel),aoMapUv:gt&&M(E.aoMap.channel),lightMapUv:Et&&M(E.lightMap.channel),bumpMapUv:At&&M(E.bumpMap.channel),normalMapUv:Ct&&M(E.normalMap.channel),displacementMapUv:Ft&&M(E.displacementMap.channel),emissiveMapUv:Ot&&M(E.emissiveMap.channel),metalnessMapUv:It&&M(E.metalnessMap.channel),roughnessMapUv:le&&M(E.roughnessMap.channel),anisotropyMapUv:bt&&M(E.anisotropyMap.channel),clearcoatMapUv:Ht&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:kt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&M(E.sheenRoughnessMap.channel),specularMapUv:Kt&&M(E.specularMap.channel),specularColorMapUv:ce&&M(E.specularColorMap.channel),specularIntensityMapUv:fe&&M(E.specularIntensityMap.channel),transmissionMapUv:me&&M(E.transmissionMap.channel),thicknessMapUv:K&&M(E.thicknessMap.channel),alphaMapUv:Rt&&M(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Ct||X),vertexNormals:!!tt.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!tt.attributes.uv&&(Qt||Rt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||tt.attributes.normal===void 0&&Ct===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:tt.attributes.position!==void 0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:xt,numSunLights:z.sun.length,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numSunLightShadows:z.sunShadowMap.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:it.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:k,decodeVideoTexture:Qt&&E.map.isVideoTexture===!0&&Ve.getTransfer(E.map.colorSpace)===$e,decodeVideoTextureEmissive:Ot&&E.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(E.emissiveMap.colorSpace)===$e,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ln,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:R&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=d.has(1),ct.vertexUv2s=d.has(2),ct.vertexUv3s=d.has(3),d.clear(),ct}function y(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)z.push(F),z.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(S(z,E),C(z,E),z.push(s.outputColorSpace)),z.push(E.customProgramCacheKey),z.join()}function S(E,z){E.push(z.precision),E.push(z.outputColorSpace),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.mapUv),E.push(z.alphaMapUv),E.push(z.lightMapUv),E.push(z.aoMapUv),E.push(z.bumpMapUv),E.push(z.normalMapUv),E.push(z.displacementMapUv),E.push(z.emissiveMapUv),E.push(z.metalnessMapUv),E.push(z.roughnessMapUv),E.push(z.anisotropyMapUv),E.push(z.clearcoatMapUv),E.push(z.clearcoatNormalMapUv),E.push(z.clearcoatRoughnessMapUv),E.push(z.iridescenceMapUv),E.push(z.iridescenceThicknessMapUv),E.push(z.sheenColorMapUv),E.push(z.sheenRoughnessMapUv),E.push(z.specularMapUv),E.push(z.specularColorMapUv),E.push(z.specularIntensityMapUv),E.push(z.transmissionMapUv),E.push(z.thicknessMapUv),E.push(z.combine),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numSunLights),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numSunLightShadows),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.numLightProbes),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function C(E,z){u.disableAll(),z.instancing&&u.enable(0),z.instancingColor&&u.enable(1),z.instancingMorph&&u.enable(2),z.matcap&&u.enable(3),z.envMap&&u.enable(4),z.normalMapObjectSpace&&u.enable(5),z.normalMapTangentSpace&&u.enable(6),z.clearcoat&&u.enable(7),z.iridescence&&u.enable(8),z.alphaTest&&u.enable(9),z.vertexColors&&u.enable(10),z.vertexAlphas&&u.enable(11),z.vertexUv1s&&u.enable(12),z.vertexUv2s&&u.enable(13),z.vertexUv3s&&u.enable(14),z.vertexTangents&&u.enable(15),z.anisotropy&&u.enable(16),z.alphaHash&&u.enable(17),z.batching&&u.enable(18),z.dispersion&&u.enable(19),z.retroreflection&&u.enable(24),z.batchingColor&&u.enable(20),z.gradientMap&&u.enable(21),z.packedNormalMap&&u.enable(22),z.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),z.fog&&u.enable(0),z.useFog&&u.enable(1),z.flatShading&&u.enable(2),z.logarithmicDepthBuffer&&u.enable(3),z.reversedDepthBuffer&&u.enable(4),z.skinning&&u.enable(5),z.morphTargets&&u.enable(6),z.morphNormals&&u.enable(7),z.morphColors&&u.enable(8),z.premultipliedAlpha&&u.enable(9),z.shadowMapEnabled&&u.enable(10),z.doubleSided&&u.enable(11),z.flipSided&&u.enable(12),z.useDepthPacking&&u.enable(13),z.dithering&&u.enable(14),z.transmission&&u.enable(15),z.sheen&&u.enable(16),z.opaque&&u.enable(17),z.pointsUvs&&u.enable(18),z.decodeVideoTexture&&u.enable(19),z.decodeVideoTextureEmissive&&u.enable(20),z.alphaToCoverage&&u.enable(21),z.numLightProbeGrids>0&&u.enable(22),z.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function N(E){const z=x[E.type];let F;if(z){const q=va[z];F=ac.clone(q.uniforms)}else F=E.uniforms;return F}function A(E,z){let F=g.get(z);return F!==void 0?++F.usedTimes:(F=new sw(s,z,E,o),p.push(F),g.set(z,F)),F}function P(E){if(--E.usedTimes===0){const z=p.indexOf(E);p[z]=p[p.length-1],p.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){f.remove(E)}function O(){f.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:N,acquireProgram:A,releaseProgram:P,releaseShaderCache:D,programs:p,dispose:O}}function fw(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function a(u){s.delete(u)}function o(u,f,d){s.get(u)[f]=d}function l(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:l}}function hw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function $1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tx(){const s=[];let t=0;const n=[],a=[],o=[];function l(){t=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function f(v,x,M,w,y,S){let C=s[t];return C===void 0?(C={id:v.id,object:v,geometry:x,material:M,materialVariant:u(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:S},s[t]=C):(C.id=v.id,C.object=v,C.geometry=x,C.material=M,C.materialVariant=u(v),C.groupOrder=w,C.renderOrder=v.renderOrder,C.z=y,C.group=S),t++,C}function d(v,x,M,w,y,S,C){C.reversedDepth===!0&&(y=-y);const N=f(v,x,M,w,y,S);M.transmission>0?a.push(N):M.transparent===!0?o.push(N):n.push(N)}function p(v,x,M,w,y,S){const C=f(v,x,M,w,y,S);M.transmission>0?a.unshift(C):M.transparent===!0?o.unshift(C):n.unshift(C)}function g(v,x){n.length>1&&n.sort(v||hw),a.length>1&&a.sort(x||$1),o.length>1&&o.sort(x||$1)}function _(){for(let v=t,x=s.length;v<x;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:o,init:l,push:d,unshift:p,finish:_,sort:g}}function dw(){let s=new WeakMap;function t(a,o){const l=s.get(a);let u;return l===void 0?(u=new tx,s.set(a,[u])):o>=l.length?(u=new tx,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function pw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new Zt};break;case"SpotLight":n={position:new G,direction:new G,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=n,n}}}function mw(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let gw=0;function vw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _w(s){const t=new pw,n=mw(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new G);const o=new G,l=new qe,u=new qe;function f(p){let g=0,_=0,v=0;for(let Z=0;Z<9;Z++)a.probe[Z].set(0,0,0);let x=0,M=0,w=0,y=0,S=0,C=0,N=0,A=0,P=0,D=0,O=0,E=0,z=0,F=0;p.sort(vw);for(let Z=0,it=p.length;Z<it;Z++){const Y=p[Z],tt=Y.color,H=Y.intensity,V=Y.distance;let ht=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===xr?ht=Y.shadow.map.texture:ht=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=tt.r*H,_+=tt.g*H,v+=tt.b*H;else if(Y.isLightProbe){for(let at=0;at<9;at++)a.probe[at].addScaledVector(Y.sh.coefficients[at],H);F++}else if(Y.isSunLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const mt=Y.shadow,I=n.get(Y);I.shadowIntensity=mt.intensity,I.shadowBias=mt.bias,I.shadowNormalBias=mt.normalBias,I.shadowRadius=mt.radius,I.shadowMapSize.copy(mt.mapSize).multiply(mt.getFrameExtents()),a.sunShadow[M]=I,a.sunShadowMap[M]=ht;const st=mt.getViewportCount();for(let xt=0;xt<st;xt++)a.sunShadowMatrix[w+xt]=mt.getMatrix(xt),a.sunShadowCascade[w+xt]=mt._cascadeData[xt];w+=st,M++}a.sun[x]=at,x++}else if(Y.isDirectionalLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const mt=Y.shadow,I=n.get(Y);I.shadowIntensity=mt.intensity,I.shadowBias=mt.bias,I.shadowNormalBias=mt.normalBias,I.shadowRadius=mt.radius,I.shadowMapSize=mt.mapSize,a.directionalShadow[y]=I,a.directionalShadowMap[y]=ht,a.directionalShadowMatrix[y]=Y.shadow.matrix,P++}a.directional[y]=at,y++}else if(Y.isSpotLight){const at=t.get(Y);at.position.setFromMatrixPosition(Y.matrixWorld),at.color.copy(tt).multiplyScalar(H),at.distance=V,at.coneCos=Math.cos(Y.angle),at.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),at.decay=Y.decay,a.spot[C]=at;const mt=Y.shadow;if(Y.map&&(a.spotLightMap[E]=Y.map,E++,mt.updateMatrices(Y),Y.castShadow&&z++),a.spotLightMatrix[C]=mt.matrix,Y.castShadow){const I=n.get(Y);I.shadowIntensity=mt.intensity,I.shadowBias=mt.bias,I.shadowNormalBias=mt.normalBias,I.shadowRadius=mt.radius,I.shadowMapSize=mt.mapSize,a.spotShadow[C]=I,a.spotShadowMap[C]=ht,O++}C++}else if(Y.isRectAreaLight){const at=t.get(Y);at.color.copy(tt).multiplyScalar(H),at.halfWidth.set(Y.width*.5,0,0),at.halfHeight.set(0,Y.height*.5,0),a.rectArea[N]=at,N++}else if(Y.isPointLight){const at=t.get(Y);if(at.color.copy(Y.color).multiplyScalar(Y.intensity),at.distance=Y.distance,at.decay=Y.decay,Y.castShadow){const mt=Y.shadow,I=n.get(Y);I.shadowIntensity=mt.intensity,I.shadowBias=mt.bias,I.shadowNormalBias=mt.normalBias,I.shadowRadius=mt.radius,I.shadowMapSize=mt.mapSize,I.shadowCameraNear=mt.camera.near,I.shadowCameraFar=mt.camera.far,a.pointShadow[S]=I,a.pointShadowMap[S]=ht,a.pointShadowMatrix[S]=Y.shadow.matrix,D++}a.point[S]=at,S++}else if(Y.isHemisphereLight){const at=t.get(Y);at.skyColor.copy(Y.color).multiplyScalar(H),at.groundColor.copy(Y.groundColor).multiplyScalar(H),a.hemi[A]=at,A++}}N>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ne.LTC_FLOAT_1,a.rectAreaLTC2=ne.LTC_FLOAT_2):(a.rectAreaLTC1=ne.LTC_HALF_1,a.rectAreaLTC2=ne.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.sunLength!==x||q.directionalLength!==y||q.pointLength!==S||q.spotLength!==C||q.rectAreaLength!==N||q.hemiLength!==A||q.numSunShadows!==M||q.numDirectionalShadows!==P||q.numPointShadows!==D||q.numSpotShadows!==O||q.numSpotMaps!==E||q.numLightProbes!==F)&&(a.sun.length=x,a.directional.length=y,a.spot.length=C,a.rectArea.length=N,a.point.length=S,a.hemi.length=A,a.sunShadow.length=M,a.sunShadowMap.length=M,a.sunShadowMatrix.length=w,a.sunShadowCascade.length=w,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.directionalShadowMatrix.length=P,a.pointShadow.length=D,a.pointShadowMap.length=D,a.pointShadowMatrix.length=D,a.spotShadow.length=O,a.spotShadowMap.length=O,a.spotLightMatrix.length=O+E-z,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=F,q.sunLength=x,q.directionalLength=y,q.pointLength=S,q.spotLength=C,q.rectAreaLength=N,q.hemiLength=A,q.numSunShadows=M,q.numDirectionalShadows=P,q.numPointShadows=D,q.numSpotShadows=O,q.numSpotMaps=E,q.numLightProbes=F,a.version=gw++)}function d(p,g){let _=0,v=0,x=0,M=0,w=0,y=0;const S=g.matrixWorldInverse;for(let C=0,N=p.length;C<N;C++){const A=p[C];if(A.isSunLight){const P=a.sun[_];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(S),_++}else if(A.isDirectionalLight){const P=a.directional[v];P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(A.isSpotLight){const P=a.spot[M];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),M++}else if(A.isRectAreaLight){const P=a.rectArea[w];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(S),u.identity(),l.copy(A.matrixWorld),l.premultiply(S),u.extractRotation(l),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),w++}else if(A.isPointLight){const P=a.point[x];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(S),x++}else if(A.isHemisphereLight){const P=a.hemi[y];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(S),y++}}}return{setup:f,setupView:d,state:a}}function ex(s){const t=new _w(s),n=[],a=[],o=[];function l(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function f(v){a.push(v)}function d(v){o.push(v)}function p(){t.setup(n)}function g(v){t.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function xw(s){let t=new WeakMap;function n(o,l=0){const u=t.get(o);let f;return u===void 0?(f=new ex(s),t.set(o,[f])):l>=u.length?(f=new ex(s),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const Sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mw=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],bw=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],nx=new qe,zl=new G,Tp=new G;function Ew(s,t,n){let a=new Q0;const o=new Nt,l=new Nt,u=new yn,f=new Nb,d=new Lb,p={},g=n.maxTextureSize,_={[gr]:jn,[jn]:gr,[ln]:ln},v=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Sw,fragmentShader:yw}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new Qe;M.setAttribute("position",new ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vn(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let S=this.type;this.render=function(D,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===ux&&(be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=tf);const z=s.getRenderTarget(),F=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ya),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const it=S!==this.type;it&&O.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(tt=>tt.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,tt=D.length;Y<tt;Y++){const H=D[Y],V=H.shadow;if(V===void 0){be("WebGLShadowMap:",H,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ht=V.getFrameExtents();o.multiply(ht),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ht.x),o.x=l.x*ht.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ht.y),o.y=l.y*ht.y,V.mapSize.y=l.y));const at=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=at,V.map===null||it===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fl){if(H.isPointLight){be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new gi(o.x,o.y,{format:xr,type:Ei,minFilter:ii,magFilter:ii,generateMipmaps:!1}),V.map.texture.name=H.name+".shadowMap",V.map.depthTexture=new tc(o.x,o.y,sa),V.map.depthTexture.name=H.name+".shadowMapDepth",V.map.depthTexture.format=ts,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qn,V.map.depthTexture.magFilter=Qn}else H.isPointLight?(V.map=new Jx(o.x),V.map.depthTexture=new J2(o.x,ba)):(V.map=new gi(o.x,o.y),V.map.depthTexture=new tc(o.x,o.y,ba)),V.map.depthTexture.name=H.name+".shadowMap",V.map.depthTexture.format=ts,this.type===tf?(V.map.depthTexture.compareFunction=at?q0:W0,V.map.depthTexture.minFilter=ii,V.map.depthTexture.magFilter=ii):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Qn,V.map.depthTexture.magFilter=Qn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==o.x||V.map.height!==o.y)&&V.map.setSize(o.x,o.y);const mt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();H.isPointLight!==!0&&V.updateMatrices(H,E);for(let I=0;I<mt;I++){const st=V.getCamera(I);if(H.isPointLight){const xt=V.camera,zt=V.matrix,Vt=H.distance||xt.far;Vt!==xt.far&&(xt.far=Vt,xt.updateProjectionMatrix()),zl.setFromMatrixPosition(H.matrixWorld),xt.position.copy(zl),Tp.copy(xt.position),Tp.add(Mw[I]),xt.up.copy(bw[I]),xt.lookAt(Tp),xt.updateMatrixWorld(),zt.makeTranslation(-zl.x,-zl.y,-zl.z),nx.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(nx,xt.coordinateSystem,xt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,I),s.clear();else{I===0&&(s.setRenderTarget(V.map),s.clear());const xt=V.getViewport(I);u.set(l.x*xt.x,l.y*xt.y,l.x*xt.z,l.y*xt.w),Z.viewport(u)}a=V.getFrustum(I),A(O,E,st,H,this.type)}V.isPointLightShadow!==!0&&this.type===Fl&&C(V,E),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(z,F,q)};function C(D,O){const E=t.update(w);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new gi(o.x,o.y,{format:xr,type:Ei}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,E,v,w,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,E,x,w,null)}function N(D,O,E,z){let F=null;const q=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(q!==void 0)F=q;else if(F=E.isPointLight===!0?d:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=F.uuid,it=O.uuid;let Y=p[Z];Y===void 0&&(Y={},p[Z]=Y);let tt=Y[it];tt===void 0&&(tt=F.clone(),Y[it]=tt,O.addEventListener("dispose",P)),F=tt}if(F.visible=O.visible,F.wireframe=O.wireframe,z===Fl?F.side=O.shadowSide!==null?O.shadowSide:O.side:F.side=O.shadowSide!==null?O.shadowSide:_[O.side],F.alphaMap=O.alphaMap,F.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,F.map=O.map,F.clipShadows=O.clipShadows,F.clippingPlanes=O.clippingPlanes,F.clipIntersection=O.clipIntersection,F.displacementMap=O.displacementMap,F.displacementScale=O.displacementScale,F.displacementBias=O.displacementBias,F.wireframeLinewidth=O.wireframeLinewidth,F.linewidth=O.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const Z=s.properties.get(F);Z.light=E}return F}function A(D,O,E,z,F){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===Fl)&&(!D.frustumCulled||D.intersectsFrustum(a))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const it=t.update(D),Y=D.material;if(Array.isArray(Y)){const tt=it.groups;for(let H=0,V=tt.length;H<V;H++){const ht=tt[H],at=Y[ht.materialIndex];if(at&&at.visible){const mt=N(D,at,z,F);D.onBeforeShadow(s,D,O,E,it,mt,ht),s.renderBufferDirect(E,null,it,mt,D,ht),D.onAfterShadow(s,D,O,E,it,mt,ht)}}}else if(Y.visible){const tt=N(D,Y,z,F);D.onBeforeShadow(s,D,O,E,it,tt,null),s.renderBufferDirect(E,null,it,tt,D,null),D.onAfterShadow(s,D,O,E,it,tt,null)}}const Z=D.children;for(let it=0,Y=Z.length;it<Y;it++)A(Z[it],O,E,z,F)}function P(D){D.target.removeEventListener("dispose",P);for(const E in p){const z=p[E],F=D.target.uuid;F in z&&(z[F].dispose(),delete z[F])}}}function Tw(s,t){function n(){let K=!1;const Xt=new yn;let Rt=null;const Wt=new yn(0,0,0,0);return{setMask:function(te){Rt!==te&&!K&&(s.colorMask(te,te,te,te),Rt=te)},setLocked:function(te){K=te},setClear:function(te,R,k,ct,Q){Q===!0&&(te*=ct,R*=ct,k*=ct),Xt.set(te,R,k,ct),Wt.equals(Xt)===!1&&(s.clearColor(te,R,k,ct),Wt.copy(Xt))},reset:function(){K=!1,Rt=null,Wt.set(-1,0,0,0)}}}function a(){let K=!1,Xt=!1,Rt=null,Wt=null,te=null;return{setReversed:function(R){if(Xt!==R){const k=t.get("EXT_clip_control");R?k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT):k.clipControlEXT(k.LOWER_LEFT_EXT,k.NEGATIVE_ONE_TO_ONE_EXT),Xt=R;const ct=te;te=null,this.setClear(ct)}},getReversed:function(){return Xt},setTest:function(R){R?$(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(R){Rt!==R&&!K&&(s.depthMask(R),Rt=R)},setFunc:function(R){if(Xt&&(R=u2[R]),Wt!==R){switch(R){case Lp:s.depthFunc(s.NEVER);break;case Pp:s.depthFunc(s.ALWAYS);break;case Op:s.depthFunc(s.LESS);break;case Kl:s.depthFunc(s.LEQUAL);break;case zp:s.depthFunc(s.EQUAL);break;case Ip:s.depthFunc(s.GEQUAL);break;case Bp:s.depthFunc(s.GREATER);break;case Fp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Wt=R}},setLocked:function(R){K=R},setClear:function(R){te!==R&&(te=R,Xt&&(R=1-R),s.clearDepth(R))},reset:function(){K=!1,Rt=null,Wt=null,te=null,Xt=!1}}}function o(){let K=!1,Xt=null,Rt=null,Wt=null,te=null,R=null,k=null,ct=null,Q=null;return{setTest:function(Mt){K||(Mt?$(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Mt){Xt!==Mt&&!K&&(s.stencilMask(Mt),Xt=Mt)},setFunc:function(Mt,ie,_e){(Rt!==Mt||Wt!==ie||te!==_e)&&(s.stencilFunc(Mt,ie,_e),Rt=Mt,Wt=ie,te=_e)},setOp:function(Mt,ie,_e){(R!==Mt||k!==ie||ct!==_e)&&(s.stencilOp(Mt,ie,_e),R=Mt,k=ie,ct=_e)},setLocked:function(Mt){K=Mt},setClear:function(Mt){Q!==Mt&&(s.clearStencil(Mt),Q=Mt)},reset:function(){K=!1,Xt=null,Rt=null,Wt=null,te=null,R=null,k=null,ct=null,Q=null}}}const l=new n,u=new a,f=new o,d=new WeakMap,p=new WeakMap;let g={},_={},v={},x=new WeakMap,M=[],w=null,y=!1,S=null,C=null,N=null,A=null,P=null,D=null,O=null,E=new Zt(0,0,0),z=0,F=!1,q=null,Z=null,it=null,Y=null,tt=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ht=0;const at=s.getParameter(s.VERSION);at.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(at)[1]),V=ht>=1):at.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),V=ht>=2);let mt=null,I={};const st=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),zt=new yn().fromArray(st),Vt=new yn().fromArray(xt);function qt(K,Xt,Rt,Wt){const te=new Uint8Array(4),R=s.createTexture();s.bindTexture(K,R),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let k=0;k<Rt;k++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(Xt,0,s.RGBA,1,1,Wt,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(Xt+k,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return R}const ot={};ot[s.TEXTURE_2D]=qt(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),$(s.DEPTH_TEST),u.setFunc(Kl),At(!1),Ct(J_),$(s.CULL_FACE),gt(ya);function $(K){g[K]!==!0&&(s.enable(K),g[K]=!0)}function wt(K){g[K]!==!1&&(s.disable(K),g[K]=!1)}function Yt(K,Xt){return v[K]!==Xt?(s.bindFramebuffer(K,Xt),v[K]=Xt,K===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Xt),K===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Xt),!0):!1}function Bt(K,Xt){let Rt=M,Wt=!1;if(K){Rt=x.get(Xt),Rt===void 0&&(Rt=[],x.set(Xt,Rt));const te=K.textures;if(Rt.length!==te.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let R=0,k=te.length;R<k;R++)Rt[R]=s.COLOR_ATTACHMENT0+R;Rt.length=te.length,Wt=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,Wt=!0);Wt&&s.drawBuffers(Rt)}function Qt(K){return w!==K?(s.useProgram(K),w=K,!0):!1}const Dt={[bo]:s.FUNC_ADD,[NM]:s.FUNC_SUBTRACT,[LM]:s.FUNC_REVERSE_SUBTRACT};Dt[PM]=s.MIN,Dt[OM]=s.MAX;const et={[zM]:s.ZERO,[IM]:s.ONE,[BM]:s.SRC_COLOR,[fx]:s.SRC_ALPHA,[XM]:s.SRC_ALPHA_SATURATE,[VM]:s.DST_COLOR,[HM]:s.DST_ALPHA,[FM]:s.ONE_MINUS_SRC_COLOR,[hx]:s.ONE_MINUS_SRC_ALPHA,[kM]:s.ONE_MINUS_DST_COLOR,[GM]:s.ONE_MINUS_DST_ALPHA,[WM]:s.CONSTANT_COLOR,[qM]:s.ONE_MINUS_CONSTANT_COLOR,[YM]:s.CONSTANT_ALPHA,[ZM]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(K,Xt,Rt,Wt,te,R,k,ct,Q,Mt){if(K===ya){y===!0&&(wt(s.BLEND),y=!1);return}if(y===!1&&($(s.BLEND),y=!0),K!==UM){if(K!==S||Mt!==F){if((C!==bo||P!==bo)&&(s.blendEquation(s.FUNC_ADD),C=bo,P=bo),Mt)switch(K){case To:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vr:s.blendFunc(s.ONE,s.ONE);break;case Q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case j_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",K);break}else switch(K){case To:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Q_:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",K);break}N=null,A=null,D=null,O=null,E.set(0,0,0),z=0,S=K,F=Mt}return}te=te||Xt,R=R||Rt,k=k||Wt,(Xt!==C||te!==P)&&(s.blendEquationSeparate(Dt[Xt],Dt[te]),C=Xt,P=te),(Rt!==N||Wt!==A||R!==D||k!==O)&&(s.blendFuncSeparate(et[Rt],et[Wt],et[R],et[k]),N=Rt,A=Wt,D=R,O=k),(ct.equals(E)===!1||Q!==z)&&(s.blendColor(ct.r,ct.g,ct.b,Q),E.copy(ct),z=Q),S=K,F=!1}function Et(K,Xt){K.side===ln?wt(s.CULL_FACE):$(s.CULL_FACE);let Rt=K.side===jn;Xt&&(Rt=!Rt),At(Rt),K.blending===To&&K.transparent===!1?gt(ya):gt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),l.setMask(K.colorWrite);const Wt=K.stencilWrite;f.setTest(Wt),Wt&&(f.setMask(K.stencilWriteMask),f.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),f.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ot(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function At(K){q!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),q=K)}function Ct(K){K!==RM?($(s.CULL_FACE),K!==Z&&(K===J_?s.cullFace(s.BACK):K===DM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),Z=K}function Ft(K){K!==it&&(V&&s.lineWidth(K),it=K)}function Ot(K,Xt,Rt){K?($(s.POLYGON_OFFSET_FILL),(Y!==Xt||tt!==Rt)&&(Y=Xt,tt=Rt,u.getReversed()&&(Xt=-Xt),s.polygonOffset(Xt,Rt))):wt(s.POLYGON_OFFSET_FILL)}function It(K){K?$(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function le(K){K===void 0&&(K=s.TEXTURE0+H-1),mt!==K&&(s.activeTexture(K),mt=K)}function X(K,Xt,Rt){Rt===void 0&&(mt===null?Rt=s.TEXTURE0+H-1:Rt=mt);let Wt=I[Rt];Wt===void 0&&(Wt={type:void 0,texture:void 0},I[Rt]=Wt),(Wt.type!==K||Wt.texture!==Xt)&&(mt!==Rt&&(s.activeTexture(Rt),mt=Rt),s.bindTexture(K,Xt||ot[K]),Wt.type=K,Wt.texture=Xt)}function pe(){const K=I[mt];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ve(){try{s.compressedTexImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function T(){try{s.texSubImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function nt(){try{s.texSubImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function bt(){try{s.compressedTexSubImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Ht(){try{s.texStorage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function kt(){try{s.texStorage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function _t(){try{s.texImage2D(...arguments)}catch(K){Xe("WebGLState:",K)}}function yt(){try{s.texImage3D(...arguments)}catch(K){Xe("WebGLState:",K)}}function Gt(K){return _[K]!==void 0?_[K]:s.getParameter(K)}function $t(K,Xt){_[K]!==Xt&&(s.pixelStorei(K,Xt),_[K]=Xt)}function Jt(K){zt.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),zt.copy(K))}function Kt(K){Vt.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Vt.copy(K))}function ce(K,Xt){let Rt=p.get(Xt);Rt===void 0&&(Rt=new WeakMap,p.set(Xt,Rt));let Wt=Rt.get(K);Wt===void 0&&(Wt=s.getUniformBlockIndex(Xt,K.name),Rt.set(K,Wt))}function fe(K,Xt){const Wt=p.get(Xt).get(K);d.get(Xt)!==Wt&&(s.uniformBlockBinding(Xt,Wt,K.__bindingPointIndex),d.set(Xt,Wt))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},mt=null,I={},v={},x=new WeakMap,M=[],w=null,y=!1,S=null,C=null,N=null,A=null,P=null,D=null,O=null,E=new Zt(0,0,0),z=0,F=!1,q=null,Z=null,it=null,Y=null,tt=null,zt.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:$,disable:wt,bindFramebuffer:Yt,drawBuffers:Bt,useProgram:Qt,setBlending:gt,setMaterial:Et,setFlipSided:At,setCullFace:Ct,setLineWidth:Ft,setPolygonOffset:Ot,setScissorTest:It,activeTexture:le,bindTexture:X,unbindTexture:pe,compressedTexImage2D:ve,compressedTexImage3D:B,texImage2D:_t,texImage3D:yt,pixelStorei:$t,getParameter:Gt,updateUBOMapping:ce,uniformBlockBinding:fe,texStorage2D:Ht,texStorage3D:kt,texSubImage2D:T,texSubImage3D:nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:bt,scissor:Jt,viewport:Kt,reset:me}}function Aw(s,t,n,a,o,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(B,T){return M?new OffscreenCanvas(B,T):hf("canvas")}function y(B,T,nt){let lt=1;const bt=ve(B);if((bt.width>nt||bt.height>nt)&&(lt=nt/Math.max(bt.width,bt.height)),lt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ht=Math.floor(lt*bt.width),kt=Math.floor(lt*bt.height);v===void 0&&(v=w(Ht,kt));const _t=T?w(Ht,kt):v;return _t.width=Ht,_t.height=kt,_t.getContext("2d").drawImage(B,0,0,Ht,kt),be("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+Ht+"x"+kt+")."),_t}else return"data"in B&&be("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),B;return B}function S(B){return B.generateMipmaps}function C(B){s.generateMipmap(B)}function N(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(B,T,nt,lt,bt,Ht=!1){if(B!==null){if(s[B]!==void 0)return s[B];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let kt;lt&&(kt=t.get("EXT_texture_norm16"),kt||be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _t=T;if(T===s.RED&&(nt===s.FLOAT&&(_t=s.R32F),nt===s.HALF_FLOAT&&(_t=s.R16F),nt===s.UNSIGNED_BYTE&&(_t=s.R8),nt===s.UNSIGNED_SHORT&&kt&&(_t=kt.R16_EXT),nt===s.SHORT&&kt&&(_t=kt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(_t=s.R8UI),nt===s.UNSIGNED_SHORT&&(_t=s.R16UI),nt===s.UNSIGNED_INT&&(_t=s.R32UI),nt===s.BYTE&&(_t=s.R8I),nt===s.SHORT&&(_t=s.R16I),nt===s.INT&&(_t=s.R32I)),T===s.RG&&(nt===s.FLOAT&&(_t=s.RG32F),nt===s.HALF_FLOAT&&(_t=s.RG16F),nt===s.UNSIGNED_BYTE&&(_t=s.RG8),nt===s.UNSIGNED_SHORT&&kt&&(_t=kt.RG16_EXT),nt===s.SHORT&&kt&&(_t=kt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(_t=s.RG8UI),nt===s.UNSIGNED_SHORT&&(_t=s.RG16UI),nt===s.UNSIGNED_INT&&(_t=s.RG32UI),nt===s.BYTE&&(_t=s.RG8I),nt===s.SHORT&&(_t=s.RG16I),nt===s.INT&&(_t=s.RG32I)),T===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(_t=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(_t=s.RGB16UI),nt===s.UNSIGNED_INT&&(_t=s.RGB32UI),nt===s.BYTE&&(_t=s.RGB8I),nt===s.SHORT&&(_t=s.RGB16I),nt===s.INT&&(_t=s.RGB32I)),T===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(_t=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(_t=s.RGBA16UI),nt===s.UNSIGNED_INT&&(_t=s.RGBA32UI),nt===s.BYTE&&(_t=s.RGBA8I),nt===s.SHORT&&(_t=s.RGBA16I),nt===s.INT&&(_t=s.RGBA32I)),T===s.RGB&&(nt===s.UNSIGNED_SHORT&&kt&&(_t=kt.RGB16_EXT),nt===s.SHORT&&kt&&(_t=kt.RGB16_SNORM_EXT),nt===s.UNSIGNED_INT_5_9_9_9_REV&&(_t=s.RGB9_E5),nt===s.UNSIGNED_INT_10F_11F_11F_REV&&(_t=s.R11F_G11F_B10F)),T===s.RGBA){const yt=Ht?ff:Ve.getTransfer(bt);nt===s.FLOAT&&(_t=s.RGBA32F),nt===s.HALF_FLOAT&&(_t=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(_t=yt===$e?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT&&kt&&(_t=kt.RGBA16_EXT),nt===s.SHORT&&kt&&(_t=kt.RGBA16_SNORM_EXT),nt===s.UNSIGNED_SHORT_4_4_4_4&&(_t=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(_t=s.RGB5_A1)}return(_t===s.R16F||_t===s.R32F||_t===s.RG16F||_t===s.RG32F||_t===s.RGBA16F||_t===s.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function P(B,T){let nt;return B?T===null||T===ba||T===Ql?nt=s.DEPTH24_STENCIL8:T===sa?nt=s.DEPTH32F_STENCIL8:T===Jl&&(nt=s.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ba||T===Ql?nt=s.DEPTH_COMPONENT24:T===sa?nt=s.DEPTH_COMPONENT32F:T===Jl&&(nt=s.DEPTH_COMPONENT16),nt}function D(B,T){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==Qn&&B.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function O(B){const T=B.target;T.removeEventListener("dispose",O),z(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(B){const T=B.target;T.removeEventListener("dispose",E),q(T)}function z(B){const T=a.get(B);if(T.__webglInit===void 0)return;const nt=B.source,lt=x.get(nt);if(lt){const bt=lt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&F(B),Object.keys(lt).length===0&&x.delete(nt)}a.remove(B)}function F(B){const T=a.get(B);s.deleteTexture(T.__webglTexture);const nt=B.source,lt=x.get(nt);delete lt[T.__cacheKey],u.memory.textures--}function q(B){const T=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let bt=0;bt<T.__webglFramebuffer[lt].length;bt++)s.deleteFramebuffer(T.__webglFramebuffer[lt][bt]);else s.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)s.deleteFramebuffer(T.__webglFramebuffer[lt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=B.textures;for(let lt=0,bt=nt.length;lt<bt;lt++){const Ht=a.get(nt[lt]);Ht.__webglTexture&&(s.deleteTexture(Ht.__webglTexture),u.memory.textures--),a.remove(nt[lt])}a.remove(B)}let Z=0;function it(){Z=0}function Y(){return Z}function tt(B){Z=B}function H(){const B=Z;return B>=o.maxTextures&&be("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,B}function V(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function ht(B,T){const nt=a.get(B);if(B.isVideoTexture&&X(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&nt.__version!==B.version){const lt=B.image;if(lt===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(nt,B,T);return}}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+T)}function at(B,T){const nt=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){wt(nt,B,T);return}else B.isExternalTexture&&(nt.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+T)}function mt(B,T){const nt=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){wt(nt,B,T);return}n.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+T)}function I(B,T){const nt=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&nt.__version!==B.version){Yt(nt,B,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+T)}const st={[Hp]:s.REPEAT,[Ja]:s.CLAMP_TO_EDGE,[Gp]:s.MIRRORED_REPEAT},xt={[Qn]:s.NEAREST,[QM]:s.NEAREST_MIPMAP_NEAREST,[Mu]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[Yd]:s.LINEAR_MIPMAP_NEAREST,[dr]:s.LINEAR_MIPMAP_LINEAR},zt={[e2]:s.NEVER,[r2]:s.ALWAYS,[n2]:s.LESS,[W0]:s.LEQUAL,[i2]:s.EQUAL,[q0]:s.GEQUAL,[a2]:s.GREATER,[s2]:s.NOTEQUAL};function Vt(B,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===Yd||T.magFilter===Mu||T.magFilter===dr||T.minFilter===ii||T.minFilter===Yd||T.minFilter===Mu||T.minFilter===dr)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,st[T.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,st[T.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,st[T.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,xt[T.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,zt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==Mu&&T.minFilter!==dr||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function qt(B,T){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",O));const lt=T.source;let bt=x.get(lt);bt===void 0&&(bt={},x.set(lt,bt));const Ht=V(T);if(Ht!==B.__cacheKey){bt[Ht]===void 0&&(bt[Ht]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,nt=!0),bt[Ht].usedTimes++;const kt=bt[B.__cacheKey];kt!==void 0&&(bt[B.__cacheKey].usedTimes--,kt.usedTimes===0&&F(T)),B.__cacheKey=Ht,B.__webglTexture=bt[Ht].texture}return nt}function ot(B,T,nt){return Math.floor(Math.floor(B/nt)/T)}function $(B,T,nt,lt){const Ht=B.updateRanges;if(Ht.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,nt,lt,T.data);else{Ht.sort(($t,Jt)=>$t.start-Jt.start);let kt=0;for(let $t=1;$t<Ht.length;$t++){const Jt=Ht[kt],Kt=Ht[$t],ce=Jt.start+Jt.count,fe=ot(Kt.start,T.width,4),me=ot(Jt.start,T.width,4);Kt.start<=ce+1&&fe===me&&ot(Kt.start+Kt.count-1,T.width,4)===fe?Jt.count=Math.max(Jt.count,Kt.start+Kt.count-Jt.start):(++kt,Ht[kt]=Kt)}Ht.length=kt+1;const _t=n.getParameter(s.UNPACK_ROW_LENGTH),yt=n.getParameter(s.UNPACK_SKIP_PIXELS),Gt=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let $t=0,Jt=Ht.length;$t<Jt;$t++){const Kt=Ht[$t],ce=Math.floor(Kt.start/4),fe=Math.ceil(Kt.count/4),me=ce%T.width,K=Math.floor(ce/T.width),Xt=fe,Rt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,me),n.pixelStorei(s.UNPACK_SKIP_ROWS,K),n.texSubImage2D(s.TEXTURE_2D,0,me,K,Xt,Rt,nt,lt,T.data)}B.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,_t),n.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Gt)}}function wt(B,T,nt){let lt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=s.TEXTURE_3D);const bt=qt(B,T),Ht=T.source;n.bindTexture(lt,B.__webglTexture,s.TEXTURE0+nt);const kt=a.get(Ht);if(Ht.version!==kt.__version||bt===!0){if(n.activeTexture(s.TEXTURE0+nt),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Rt=Ve.getPrimaries(Ve.workingColorSpace),Wt=T.colorSpace===Hs?null:Ve.getPrimaries(T.colorSpace),te=T.colorSpace===Hs||Rt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,te)}n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let yt=y(T.image,!1,o.maxTextureSize);yt=pe(T,yt);const Gt=l.convert(T.format,T.colorSpace),$t=l.convert(T.type);let Jt=A(T.internalFormat,Gt,$t,T.normalized,T.colorSpace,T.isVideoTexture);Vt(lt,T);let Kt;const ce=T.mipmaps,fe=T.isVideoTexture!==!0,me=kt.__version===void 0||bt===!0,K=Ht.dataReady,Xt=D(T,yt);if(T.isDepthTexture)Jt=P(T.format===pr,T.type),me&&(fe?n.texStorage2D(s.TEXTURE_2D,1,Jt,yt.width,yt.height):n.texImage2D(s.TEXTURE_2D,0,Jt,yt.width,yt.height,0,Gt,$t,null));else if(T.isDataTexture)if(ce.length>0){fe&&me&&n.texStorage2D(s.TEXTURE_2D,Xt,Jt,ce[0].width,ce[0].height);for(let Rt=0,Wt=ce.length;Rt<Wt;Rt++)Kt=ce[Rt],fe?K&&n.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Kt.width,Kt.height,Gt,$t,Kt.data):n.texImage2D(s.TEXTURE_2D,Rt,Jt,Kt.width,Kt.height,0,Gt,$t,Kt.data);T.generateMipmaps=!1}else fe?(me&&n.texStorage2D(s.TEXTURE_2D,Xt,Jt,yt.width,yt.height),K&&$(T,yt,Gt,$t)):n.texImage2D(s.TEXTURE_2D,0,Jt,yt.width,yt.height,0,Gt,$t,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Jt,ce[0].width,ce[0].height,yt.depth);for(let Rt=0,Wt=ce.length;Rt<Wt;Rt++)if(Kt=ce[Rt],T.format!==ra)if(Gt!==null)if(fe){if(K)if(T.layerUpdates.size>0){const te=O1(Kt.width,Kt.height,T.format,T.type);for(const R of T.layerUpdates){const k=Kt.data.subarray(R*te/Kt.data.BYTES_PER_ELEMENT,(R+1)*te/Kt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,R,Kt.width,Kt.height,1,Gt,k)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Kt.width,Kt.height,yt.depth,Gt,Kt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Rt,Jt,Kt.width,Kt.height,yt.depth,0,Kt.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?K&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Rt,0,0,0,Kt.width,Kt.height,yt.depth,Gt,$t,Kt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Rt,Jt,Kt.width,Kt.height,yt.depth,0,Gt,$t,Kt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{fe&&me&&n.texStorage2D(s.TEXTURE_2D,Xt,Jt,ce[0].width,ce[0].height);for(let Rt=0,Wt=ce.length;Rt<Wt;Rt++)Kt=ce[Rt],T.format!==ra?Gt!==null?fe?K&&n.compressedTexSubImage2D(s.TEXTURE_2D,Rt,0,0,Kt.width,Kt.height,Gt,Kt.data):n.compressedTexImage2D(s.TEXTURE_2D,Rt,Jt,Kt.width,Kt.height,0,Kt.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?K&&n.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Kt.width,Kt.height,Gt,$t,Kt.data):n.texImage2D(s.TEXTURE_2D,Rt,Jt,Kt.width,Kt.height,0,Gt,$t,Kt.data)}else if(T.isDataArrayTexture)if(fe){if(me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Xt,Jt,yt.width,yt.height,yt.depth),K)if(T.layerUpdates.size>0){const Rt=O1(yt.width,yt.height,T.format,T.type);for(const Wt of T.layerUpdates){const te=yt.data.subarray(Wt*Rt/yt.data.BYTES_PER_ELEMENT,(Wt+1)*Rt/yt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,yt.width,yt.height,1,Gt,$t,te)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Gt,$t,yt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Jt,yt.width,yt.height,yt.depth,0,Gt,$t,yt.data);else if(T.isData3DTexture)fe?(me&&n.texStorage3D(s.TEXTURE_3D,Xt,Jt,yt.width,yt.height,yt.depth),K&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Gt,$t,yt.data)):n.texImage3D(s.TEXTURE_3D,0,Jt,yt.width,yt.height,yt.depth,0,Gt,$t,yt.data);else if(T.isFramebufferTexture){if(me)if(fe)n.texStorage2D(s.TEXTURE_2D,Xt,Jt,yt.width,yt.height);else{let Rt=yt.width,Wt=yt.height;for(let te=0;te<Xt;te++)n.texImage2D(s.TEXTURE_2D,te,Jt,Rt,Wt,0,Gt,$t,null),Rt>>=1,Wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Rt=s.canvas;if(Rt.hasAttribute("layoutsubtree")||Rt.setAttribute("layoutsubtree","true"),yt.parentNode!==Rt){Rt.appendChild(yt),_.add(T),Rt.onpaint=Wt=>{const te=Wt.changedElements;for(const R of _)te.includes(R.image)&&(R.needsUpdate=!0)},Rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,yt);else{const te=s.RGBA,R=s.RGBA,k=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,te,R,k,yt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ce.length>0){if(fe&&me){const Rt=ve(ce[0]);n.texStorage2D(s.TEXTURE_2D,Xt,Jt,Rt.width,Rt.height)}for(let Rt=0,Wt=ce.length;Rt<Wt;Rt++)Kt=ce[Rt],fe?K&&n.texSubImage2D(s.TEXTURE_2D,Rt,0,0,Gt,$t,Kt):n.texImage2D(s.TEXTURE_2D,Rt,Jt,Gt,$t,Kt);T.generateMipmaps=!1}else if(fe){if(me){const Rt=ve(yt);n.texStorage2D(s.TEXTURE_2D,Xt,Jt,Rt.width,Rt.height)}K&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Gt,$t,yt)}else n.texImage2D(s.TEXTURE_2D,0,Jt,Gt,$t,yt);S(T)&&C(lt),kt.__version=Ht.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Yt(B,T,nt){if(T.image.length!==6)return;const lt=qt(B,T),bt=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+nt);const Ht=a.get(bt);if(bt.version!==Ht.__version||lt===!0){n.activeTexture(s.TEXTURE0+nt);const kt=Ve.getPrimaries(Ve.workingColorSpace),_t=T.colorSpace===Hs?null:Ve.getPrimaries(T.colorSpace),yt=T.colorSpace===Hs||kt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,$t=T.image[0]&&T.image[0].isDataTexture,Jt=[];for(let R=0;R<6;R++)!Gt&&!$t?Jt[R]=y(T.image[R],!0,o.maxCubemapSize):Jt[R]=$t?T.image[R].image:T.image[R],Jt[R]=pe(T,Jt[R]);const Kt=Jt[0],ce=l.convert(T.format,T.colorSpace),fe=l.convert(T.type),me=A(T.internalFormat,ce,fe,T.normalized,T.colorSpace),K=T.isVideoTexture!==!0,Xt=Ht.__version===void 0||lt===!0,Rt=bt.dataReady;let Wt=D(T,Kt);Vt(s.TEXTURE_CUBE_MAP,T);let te;if(Gt){K&&Xt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,me,Kt.width,Kt.height);for(let R=0;R<6;R++){te=Jt[R].mipmaps;for(let k=0;k<te.length;k++){const ct=te[k];T.format!==ra?ce!==null?K?Rt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k,0,0,ct.width,ct.height,ce,ct.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k,me,ct.width,ct.height,0,ct.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Rt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k,0,0,ct.width,ct.height,ce,fe,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k,me,ct.width,ct.height,0,ce,fe,ct.data)}}}else{if(te=T.mipmaps,K&&Xt){te.length>0&&Wt++;const R=ve(Jt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,me,R.width,R.height)}for(let R=0;R<6;R++)if($t){K?Rt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Jt[R].width,Jt[R].height,ce,fe,Jt[R].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,Jt[R].width,Jt[R].height,0,ce,fe,Jt[R].data);for(let k=0;k<te.length;k++){const Q=te[k].image[R].image;K?Rt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k+1,0,0,Q.width,Q.height,ce,fe,Q.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k+1,me,Q.width,Q.height,0,ce,fe,Q.data)}}else{K?Rt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ce,fe,Jt[R]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,ce,fe,Jt[R]);for(let k=0;k<te.length;k++){const ct=te[k];K?Rt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k+1,0,0,ce,fe,ct.image[R]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+R,k+1,me,ce,fe,ct.image[R])}}}S(T)&&C(s.TEXTURE_CUBE_MAP),Ht.__version=bt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Bt(B,T,nt,lt,bt,Ht){const kt=l.convert(nt.format,nt.colorSpace),_t=l.convert(nt.type),yt=A(nt.internalFormat,kt,_t,nt.normalized,nt.colorSpace),Gt=a.get(T),$t=a.get(nt);if($t.__renderTarget=T,!Gt.__hasExternalTextures){const Jt=Math.max(1,T.width>>Ht),Kt=Math.max(1,T.height>>Ht);bt===s.TEXTURE_3D||bt===s.TEXTURE_2D_ARRAY?n.texImage3D(bt,Ht,yt,Jt,Kt,T.depth,0,kt,_t,null):n.texImage2D(bt,Ht,yt,Jt,Kt,0,kt,_t,null)}n.bindFramebuffer(s.FRAMEBUFFER,B),le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,bt,$t.__webglTexture,0,It(T)):(bt===s.TEXTURE_2D||bt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,bt,$t.__webglTexture,Ht),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(B,T,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,B),T.depthBuffer){const lt=T.depthTexture,bt=lt&&lt.isDepthTexture?lt.type:null,Ht=P(T.stencilBuffer,bt),kt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;le(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),Ht,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),Ht,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ht,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,kt,s.RENDERBUFFER,B)}else{const lt=T.textures;for(let bt=0;bt<lt.length;bt++){const Ht=lt[bt],kt=l.convert(Ht.format,Ht.colorSpace),_t=l.convert(Ht.type),yt=A(Ht.internalFormat,kt,_t,Ht.normalized,Ht.colorSpace);le(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),yt,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),yt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,yt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(B,T,nt){const lt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const bt=a.get(T.depthTexture);if(bt.__renderTarget=T,(!bt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),bt.__webglTexture===void 0){bt.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,bt.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,T.depthTexture);const Gt=l.convert(T.depthTexture.format),$t=l.convert(T.depthTexture.type);let Jt;T.depthTexture.format===ts?Jt=s.DEPTH_COMPONENT24:T.depthTexture.format===pr&&(Jt=s.DEPTH24_STENCIL8);for(let Kt=0;Kt<6;Kt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Kt,0,Jt,T.width,T.height,0,Gt,$t,null)}}else ht(T.depthTexture,0);const Ht=bt.__webglTexture,kt=It(T),_t=lt?s.TEXTURE_CUBE_MAP_POSITIVE_X+nt:s.TEXTURE_2D,yt=T.depthTexture.format===pr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ts)le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,_t,Ht,0,kt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,_t,Ht,0);else if(T.depthTexture.format===pr)le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,_t,Ht,0,kt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,_t,Ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(B){const T=a.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const lt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",bt)};lt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=lt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(nt)for(let lt=0;lt<6;lt++)Dt(T.__webglFramebuffer[lt],B,lt);else{const lt=B.texture.mipmaps;lt&&lt.length>0?Dt(T.__webglFramebuffer[0],B,0):Dt(T.__webglFramebuffer,B,0)}else if(nt){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=s.createRenderbuffer(),Qt(T.__webglDepthbuffer[lt],B,!1);else{const bt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=T.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,Ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,Ht)}}else{const lt=B.texture.mipmaps;if(lt&&lt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Qt(T.__webglDepthbuffer,B,!1);else{const bt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,Ht)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function gt(B,T,nt){const lt=a.get(B);T!==void 0&&Bt(lt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&et(B)}function Et(B){const T=B.texture,nt=a.get(B),lt=a.get(T);B.addEventListener("dispose",E);const bt=B.textures,Ht=B.isWebGLCubeRenderTarget===!0,kt=bt.length>1;if(kt||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=T.version,u.memory.textures++),Ht){nt.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[_t]=[];for(let yt=0;yt<T.mipmaps.length;yt++)nt.__webglFramebuffer[_t][yt]=s.createFramebuffer()}else nt.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let _t=0;_t<T.mipmaps.length;_t++)nt.__webglFramebuffer[_t]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(kt)for(let _t=0,yt=bt.length;_t<yt;_t++){const Gt=a.get(bt[_t]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),u.memory.textures++)}if(B.samples>0&&le(B)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let _t=0;_t<bt.length;_t++){const yt=bt[_t];nt.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[_t]);const Gt=l.convert(yt.format,yt.colorSpace),$t=l.convert(yt.type),Jt=A(yt.internalFormat,Gt,$t,yt.normalized,yt.colorSpace,B.isXRRenderTarget===!0),Kt=It(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Jt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,nt.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Qt(nt.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ht){n.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,T);for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)Bt(nt.__webglFramebuffer[_t][yt],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,yt);else Bt(nt.__webglFramebuffer[_t],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);S(T)&&C(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(kt){for(let _t=0,yt=bt.length;_t<yt;_t++){const Gt=bt[_t],$t=a.get(Gt);let Jt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Jt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Jt,$t.__webglTexture),Vt(Jt,Gt),Bt(nt.__webglFramebuffer,B,Gt,s.COLOR_ATTACHMENT0+_t,Jt,0),S(Gt)&&C(Jt)}n.unbindTexture()}else{let _t=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(_t=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(_t,lt.__webglTexture),Vt(_t,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)Bt(nt.__webglFramebuffer[yt],B,T,s.COLOR_ATTACHMENT0,_t,yt);else Bt(nt.__webglFramebuffer,B,T,s.COLOR_ATTACHMENT0,_t,0);S(T)&&C(_t),n.unbindTexture()}B.depthBuffer&&et(B)}function At(B){const T=B.textures;for(let nt=0,lt=T.length;nt<lt;nt++){const bt=T[nt];if(S(bt)){const Ht=N(B),kt=a.get(bt).__webglTexture;n.bindTexture(Ht,kt),C(Ht),n.unbindTexture()}}}const Ct=[],Ft=[];function Ot(B){if(B.samples>0){if(le(B)===!1){const T=B.textures,nt=B.width,lt=B.height;let bt=s.COLOR_BUFFER_BIT;const Ht=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,kt=a.get(B),_t=T.length>1;if(_t)for(let Gt=0;Gt<T.length;Gt++)n.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const yt=B.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Gt=0;Gt<T.length;Gt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(bt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(bt|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,kt.__webglColorRenderbuffer[Gt]);const $t=a.get(T[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,nt,lt,0,0,nt,lt,bt,s.NEAREST),d===!0&&(Ct.length=0,Ft.length=0,Ct.push(s.COLOR_ATTACHMENT0+Gt),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Ct.push(Ht),Ft.push(Ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Gt=0;Gt<T.length;Gt++){n.bindFramebuffer(s.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,kt.__webglColorRenderbuffer[Gt]);const $t=a.get(T[Gt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,kt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,$t,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&d){const T=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function It(B){return Math.min(o.maxSamples,B.samples)}function le(B){const T=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(B){const T=u.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function pe(B,T){const nt=B.colorSpace,lt=B.format,bt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==uf&&nt!==Hs&&(Ve.getTransfer(nt)===$e?(lt!==ra||bt!==zi)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",nt)),T}function ve(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=H,this.resetTextureUnits=it,this.getTextureUnits=Y,this.setTextureUnits=tt,this.setTexture2D=ht,this.setTexture2DArray=at,this.setTexture3D=mt,this.setTextureCube=I,this.rebindTextures=gt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ww(s,t){function n(a,o=Hs){let l;const u=Ve.getTransfer(o);if(a===zi)return s.UNSIGNED_BYTE;if(a===F0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===H0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===gx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===vx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===px)return s.BYTE;if(a===mx)return s.SHORT;if(a===Jl)return s.UNSIGNED_SHORT;if(a===B0)return s.INT;if(a===ba)return s.UNSIGNED_INT;if(a===sa)return s.FLOAT;if(a===Ei)return s.HALF_FLOAT;if(a===_x)return s.ALPHA;if(a===xx)return s.RGB;if(a===ra)return s.RGBA;if(a===ts)return s.DEPTH_COMPONENT;if(a===pr)return s.DEPTH_STENCIL;if(a===G0)return s.RED;if(a===V0)return s.RED_INTEGER;if(a===xr)return s.RG;if(a===k0)return s.RG_INTEGER;if(a===X0)return s.RGBA_INTEGER;if(a===ef||a===nf||a===af||a===sf)if(u===$e)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===ef)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===ef)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===nf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===af)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===sf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Vp||a===kp||a===Xp||a===Wp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Vp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===kp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Xp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Wp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===qp||a===Yp||a===Zp||a===Kp||a===Jp||a===of||a===Qp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===qp||a===Yp)return u===$e?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Zp)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Kp)return l.COMPRESSED_R11_EAC;if(a===Jp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===of)return l.COMPRESSED_RG11_EAC;if(a===Qp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===jp||a===$p||a===t0||a===e0||a===n0||a===i0||a===a0||a===s0||a===r0||a===o0||a===l0||a===c0||a===u0||a===f0)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===jp)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$p)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===t0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===e0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===n0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===i0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===a0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===s0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===r0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===o0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===l0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===c0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===u0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===f0)return u===$e?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===h0||a===d0||a===p0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===h0)return u===$e?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===d0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===p0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===m0||a===g0||a===lf||a===v0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===m0)return l.COMPRESSED_RED_RGTC1_EXT;if(a===g0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===lf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===v0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ql?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Lx(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new fn({vertexShader:Cw,fragmentShader:Rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new Tn(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uw extends br{constructor(t,n){super();const a=this;let o=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,_=null,v=null,x=null,M=null;const w=typeof XRWebGLBinding<"u",y=new Dw,S={},C=n.getContextAttributes();let N=null,A=null;const P=[],D=[],O=new Nt;let E=null,z=null;const F=new bi;F.viewport=new yn;const q=new bi;q.viewport=new yn;const Z=[F,q],it=new Ib;let Y=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let $=P[ot];return $===void 0&&($=new tp,P[ot]=$),$.getTargetRaySpace()},this.getControllerGrip=function(ot){let $=P[ot];return $===void 0&&($=new tp,P[ot]=$),$.getGripSpace()},this.getHand=function(ot){let $=P[ot];return $===void 0&&($=new tp,P[ot]=$),$.getHandSpace()};function H(ot){const $=D.indexOf(ot.inputSource);if($===-1)return;const wt=P[$];wt!==void 0&&(wt.update(ot.inputSource,ot.frame,p||u),wt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function V(){o.removeEventListener("select",H),o.removeEventListener("selectstart",H),o.removeEventListener("selectend",H),o.removeEventListener("squeeze",H),o.removeEventListener("squeezestart",H),o.removeEventListener("squeezeend",H),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",ht);for(let ot=0;ot<P.length;ot++){const $=D[ot];$!==null&&(D[ot]=null,P[ot].disconnect($))}Y=null,tt=null,y.reset();for(const ot in S)delete S[ot];if(t.setRenderTarget(N),x=null,v=null,_=null,o=null,A=null,qt.stop(),a.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),z!==null){const ot=z.camera;ot.fov=z.fov,ot.zoom=z.zoom,ot.updateProjectionMatrix(),z=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){l=ot,a.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){f=ot,a.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ot){p=ot},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ot){if(o=ot,o!==null){if(N=t.getRenderTarget(),o.addEventListener("select",H),o.addEventListener("selectstart",H),o.addEventListener("selectend",H),o.addEventListener("squeeze",H),o.addEventListener("squeezestart",H),o.addEventListener("squeezeend",H),o.addEventListener("end",V),o.addEventListener("inputsourceschange",ht),C.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Yt=null,Bt=null;C.depth&&(Bt=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,wt=C.stencil?pr:ts,Yt=C.stencil?Ql:ba);const Qt={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(Qt),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new gi(v.textureWidth,v.textureHeight,{format:ra,type:zi,depthTexture:new tc(v.textureWidth,v.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,n,wt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new gi(x.framebufferWidth,x.framebufferHeight,{format:ra,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(f),qt.setContext(o),qt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ht(ot){for(let $=0;$<ot.removed.length;$++){const wt=ot.removed[$],Yt=D.indexOf(wt);Yt>=0&&(D[Yt]=null,P[Yt].disconnect(wt))}for(let $=0;$<ot.added.length;$++){const wt=ot.added[$];let Yt=D.indexOf(wt);if(Yt===-1){for(let Qt=0;Qt<P.length;Qt++)if(Qt>=D.length){D.push(wt),Yt=Qt;break}else if(D[Qt]===null){D[Qt]=wt,Yt=Qt;break}if(Yt===-1)break}const Bt=P[Yt];Bt&&Bt.connect(wt)}}const at=new G,mt=new G;function I(ot,$,wt){at.setFromMatrixPosition($.matrixWorld),mt.setFromMatrixPosition(wt.matrixWorld);const Yt=at.distanceTo(mt),Bt=$.projectionMatrix.elements,Qt=wt.projectionMatrix.elements,Dt=Bt[14]/(Bt[10]-1),et=Bt[14]/(Bt[10]+1),gt=(Bt[9]+1)/Bt[5],Et=(Bt[9]-1)/Bt[5],At=(Bt[8]-1)/Bt[0],Ct=(Qt[8]+1)/Qt[0],Ft=Dt*At,Ot=Dt*Ct,It=Yt/(-At+Ct),le=It*-At;if($.matrixWorld.decompose(ot.position,ot.quaternion,ot.scale),ot.translateX(le),ot.translateZ(It),ot.matrixWorld.compose(ot.position,ot.quaternion,ot.scale),ot.matrixWorldInverse.copy(ot.matrixWorld).invert(),Bt[10]===-1)ot.projectionMatrix.copy($.projectionMatrix),ot.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const X=Dt+It,pe=et+It,ve=Ft-le,B=Ot+(Yt-le),T=gt*et/pe*X,nt=Et*et/pe*X;ot.projectionMatrix.makePerspective(ve,B,T,nt,X,pe),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert()}}function st(ot,$){$===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices($.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(o===null)return;let $=ot.near,wt=ot.far;y.texture!==null&&(y.depthNear>0&&($=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),it.near=q.near=F.near=$,it.far=q.far=F.far=wt,(Y!==it.near||tt!==it.far)&&(o.updateRenderState({depthNear:it.near,depthFar:it.far}),Y=it.near,tt=it.far),it.layers.mask=ot.layers.mask|6,F.layers.mask=it.layers.mask&-5,q.layers.mask=it.layers.mask&-3;const Yt=ot.parent,Bt=it.cameras;st(it,Yt);for(let Qt=0;Qt<Bt.length;Qt++)st(Bt[Qt],Yt);Bt.length===2?I(it,F,q):it.projectionMatrix.copy(F.projectionMatrix),z===null&&ot.isPerspectiveCamera&&(z={camera:ot,fov:ot.fov,zoom:ot.zoom}),xt(ot,it,Yt)};function xt(ot,$,wt){wt===null?ot.matrix.copy($.matrixWorld):(ot.matrix.copy(wt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply($.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy($.projectionMatrix),ot.projectionMatrixInverse.copy($.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=$l*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return it},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(ot){d=ot,v!==null&&(v.fixedFoveation=ot),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ot)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(it)},this.getCameraTexture=function(ot){return S[ot]};let zt=null;function Vt(ot,$){if(g=$.getViewerPose(p||u),M=$,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let Yt=!1;wt.length!==it.cameras.length&&(it.cameras.length=0,Yt=!0);for(let et=0;et<wt.length;et++){const gt=wt[et];let Et=null;if(x!==null)Et=x.getViewport(gt);else{const Ct=_.getViewSubImage(v,gt);Et=Ct.viewport,et===0&&(t.setRenderTargetTextures(A,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(A))}let At=Z[et];At===void 0&&(At=new bi,At.layers.enable(et),At.viewport=new yn,Z[et]=At),At.matrix.fromArray(gt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(gt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Et.x,Et.y,Et.width,Et.height),et===0&&(it.matrix.copy(At.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale)),Yt===!0&&it.cameras.push(At)}const Bt=o.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=a.getBinding();const et=_.getDepthInformation(wt[0]);et&&et.isValid&&et.texture&&y.init(et,o.renderState)}if(Bt&&Bt.includes("camera-access")&&w){t.state.unbindTexture(),_=a.getBinding();for(let et=0;et<wt.length;et++){const gt=wt[et].camera;if(gt){let Et=S[gt];Et||(Et=new Lx,S[gt]=Et);const At=_.getCameraImage(gt);Et.sourceTexture=At}}}}for(let wt=0;wt<P.length;wt++){const Yt=D[wt],Bt=P[wt];Yt!==null&&Bt!==void 0&&Bt.update(Yt,$,p||u)}zt&&zt(ot,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),M=null}const qt=new Zx;qt.setAnimationLoop(Vt),this.setAnimationLoop=function(ot){zt=ot},this.dispose=function(){}}}const Nw=new qe,eS=new Ae;eS.set(-1,0,0,0,1,0,0,0,1);function Lw(s,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,kx(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,N,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),_(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),w(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,C,N):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=t.get(S),N=C.envMap,A=C.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(A)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(eS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,C,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=N*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const C=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function Pw(s,t,n,a){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,P){const D=P.program;a.uniformBlockBinding(A,D)}function p(A,P){let D=o[A.id];D===void 0&&(y(A),D=g(A),o[A.id]=D,A.addEventListener("dispose",C));const O=P.program;a.updateUBOMapping(A,O);const E=t.render.frame;l[A.id]!==E&&(v(A),l[A.id]=E)}function g(A){const P=_();A.__bindingPointIndex=P;const D=s.createBuffer(),O=A.__size,E=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,D),D}function _(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const P=o[A.id],D=A.uniforms,O=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,z=D.length;E<z;E++){const F=D[E];if(Array.isArray(F))for(let q=0,Z=F.length;q<Z;q++)x(F[q],E,q,O);else x(F,E,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,P,D,O){if(w(A,P,D,O)===!0){const E=A.__offset,z=A.value;if(Array.isArray(z)){let F=0;for(let q=0;q<z.length;q++){const Z=z[q],it=S(Z);M(Z,A.__data,F),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(F+=it.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(z,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,A.__data)}}function M(A,P,D){typeof A=="number"||typeof A=="boolean"?P[0]=A:A.isMatrix3?(P[0]=A.elements[0],P[1]=A.elements[1],P[2]=A.elements[2],P[3]=0,P[4]=A.elements[3],P[5]=A.elements[4],P[6]=A.elements[5],P[7]=0,P[8]=A.elements[6],P[9]=A.elements[7],P[10]=A.elements[8],P[11]=0):ArrayBuffer.isView(A)?P.set(new A.constructor(A.buffer,A.byteOffset,P.length)):A.toArray(P,D)}function w(A,P,D,O){const E=A.value,z=P+"_"+D;if(O[z]===void 0)return typeof E=="number"||typeof E=="boolean"?O[z]=E:ArrayBuffer.isView(E)?O[z]=E.slice():O[z]=E.clone(),!0;{const F=O[z];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return O[z]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(F.equals(E)===!1)return F.copy(E),!0}}return!1}function y(A){const P=A.uniforms;let D=0;const O=16;for(let z=0,F=P.length;z<F;z++){const q=Array.isArray(P[z])?P[z]:[P[z]];for(let Z=0,it=q.length;Z<it;Z++){const Y=q[Z],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let H=0,V=tt.length;H<V;H++){const ht=tt[H],at=S(ht),mt=D%O,I=mt%at.boundary,st=mt+I;D+=I,st!==0&&O-st<at.storage&&(D+=O-st),Y.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=at.storage}}}const E=D%O;return E>0&&(D+=O-E),A.__size=D,A.__cache={},this}function S(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):be("WebGLRenderer: Unsupported uniform value type.",A),P}function C(A){const P=A.target;P.removeEventListener("dispose",C);const D=u.indexOf(P.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function N(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:d,update:p,dispose:N}}const Ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ga=null;function zw(){return ga===null&&(ga=new Rx(Ow,16,16,xr,Ei),ga.name="DFG_LUT",ga.minFilter=ii,ga.magFilter=ii,ga.wrapS=Ja,ga.wrapT=Ja,ga.generateMipmaps=!1,ga.needsUpdate=!0),ga}class nS{constructor(t={}){const{canvas:n=l2(),context:a=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=zi}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const w=x,y=new Set([X0,k0,V0]),S=new Set([zi,ba,Jl,Ql,F0,H0]),C=new Uint32Array(4),N=new Int32Array(4),A=new G;let P=null,D=null;const O=[],E=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let q=!1,Z=null,it=null,Y=null,tt=null;this._outputColorSpace=ni;let H=0,V=0,ht=null,at=-1,mt=null;const I=new yn,st=new yn;let xt=null;const zt=new Zt(0);let Vt=0,qt=n.width,ot=n.height,$=1,wt=null,Yt=null;const Bt=new yn(0,0,qt,ot),Qt=new yn(0,0,qt,ot);let Dt=!1;const et=new Q0;let gt=!1,Et=!1;const At=new qe,Ct=new G,Ft=new yn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function le(){return ht===null?$:1}let X=a;function pe(U,J){return n.getContext(U,J)}let ve,B,T,nt,lt,bt,Ht,kt,_t,yt,Gt,$t,Jt,Kt,ce,fe,me,K,Xt,Rt,Wt,te,R;try{const U={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${D0}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",ie,!1),X===null){const J="webgl2";if(X=pe(J,U),X===null)throw pe(J)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}k()}catch(U){throw n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),Xe("WebGLRenderer: "+U.message),U}function k(){ve=new zA(X),ve.init(),Wt=new ww(X,ve),B=new AA(X,ve,t,Wt),T=new Tw(X,ve),B.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),it=X.createFramebuffer(),Y=X.createFramebuffer(),tt=X.createFramebuffer(),nt=new FA(X),lt=new fw,bt=new Aw(X,ve,T,lt,B,Wt,nt),Ht=new OA(F),kt=new Gb(X),te=new EA(X,kt),_t=new IA(X,kt,nt,te),yt=new GA(X,_t,kt,te,nt),K=new HA(X,B,bt),ce=new wA(lt),Gt=new uw(F,Ht,ve,B,te,ce),$t=new Lw(F,lt),Jt=new dw,Kt=new xw(ve),me=new bA(F,Ht,T,yt,M,d),fe=new Ew(F,yt,B),R=new Pw(X,nt,B,T),Xt=new TA(X,ve,nt),Rt=new BA(X,ve,nt),nt.programs=Gt.programs,F.capabilities=B,F.extensions=ve,F.properties=lt,F.renderLists=Jt,F.shadowMap=fe,F.state=T,F.info=nt}w!==zi&&(z=new kA(w,n.width,n.height,f,o,l));const ct=new Uw(F,X);this.xr=ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const U=ve.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ve.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(qt,ot,!1))},this.getSize=function(U){return U.set(qt,ot)},this.setSize=function(U,J,St=!0){if(ct.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=U,ot=J,n.width=Math.floor(U*$),n.height=Math.floor(J*$),St===!0&&(n.style.width=U+"px",n.style.height=J+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,U,J)},this.getDrawingBufferSize=function(U){return U.set(qt*$,ot*$).floor()},this.setDrawingBufferSize=function(U,J,St){qt=U,ot=J,$=St,n.width=Math.floor(U*St),n.height=Math.floor(J*St),this.setViewport(0,0,U,J)},this.setEffects=function(U){if(w===zi){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let J=0;J<U.length;J++)if(U[J].isOutputPass===!0){be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(Bt)},this.setViewport=function(U,J,St,ut){U.isVector4?Bt.set(U.x,U.y,U.z,U.w):Bt.set(U,J,St,ut),T.viewport(I.copy(Bt).multiplyScalar($).round())},this.getScissor=function(U){return U.copy(Qt)},this.setScissor=function(U,J,St,ut){U.isVector4?Qt.set(U.x,U.y,U.z,U.w):Qt.set(U,J,St,ut),T.scissor(st.copy(Qt).multiplyScalar($).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(U){T.setScissorTest(Dt=U)},this.setOpaqueSort=function(U){wt=U},this.setTransparentSort=function(U){Yt=U},this.getClearColor=function(U){return U.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(U=!0,J=!0,St=!0){let ut=0;if(U){let ft=!1;if(ht!==null){const ee=ht.texture.format;ft=y.has(ee)}if(ft){const ee=ht.texture.type,re=S.has(ee),jt=me.getClearColor(),ae=me.getClearAlpha(),se=jt.r,we=jt.g,ze=jt.b;re?(C[0]=se,C[1]=we,C[2]=ze,C[3]=ae,X.clearBufferuiv(X.COLOR,0,C)):(N[0]=se,N[1]=we,N[2]=ze,N[3]=ae,X.clearBufferiv(X.COLOR,0,N))}else ut|=X.COLOR_BUFFER_BIT}J&&(ut|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),St&&(ut|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ut!==0&&X.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),Z=U},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),me.dispose(),Jt.dispose(),Kt.dispose(),lt.dispose(),Ht.dispose(),yt.dispose(),te.dispose(),R.dispose(),Gt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Me),ct.removeEventListener("sessionend",De),xn.stop()};function Q(U){U.preventDefault(),df("WebGLRenderer: Context Lost."),q=!0}function Mt(){df("WebGLRenderer: Context Restored."),q=!1;const U=nt.autoReset,J=fe.enabled,St=fe.autoUpdate,ut=fe.needsUpdate,ft=fe.type;k(),nt.autoReset=U,fe.enabled=J,fe.autoUpdate=St,fe.needsUpdate=ut,fe.type=ft}function ie(U){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function _e(U){const J=U.target;J.removeEventListener("dispose",_e),Ne(J)}function Ne(U){In(U),lt.remove(U)}function In(U){const J=lt.get(U).programs;J!==void 0&&(J.forEach(function(St){Gt.releaseProgram(St)}),U.isShaderMaterial&&Gt.releaseShaderCache(U))}this.renderBufferDirect=function(U,J,St,ut,ft,ee){J===null&&(J=Ot);const re=ft.isMesh&&ft.matrixWorld.determinantAffine()<0,jt=as(U,J,St,ut,ft);T.setMaterial(ut,re);let ae=St.index,se=1;if(ut.wireframe===!0){if(ae=_t.getWireframeAttribute(St),ae===void 0)return;se=2}const we=St.drawRange,ze=St.attributes.position;let ue=we.start*se,We=(we.start+we.count)*se;ee!==null&&(ue=Math.max(ue,ee.start*se),We=Math.min(We,(ee.start+ee.count)*se)),ae!==null?(ue=Math.max(ue,0),We=Math.min(We,ae.count)):ze!=null&&(ue=Math.max(ue,0),We=Math.min(We,ze.count));const hn=We-ue;if(hn<0||hn===1/0)return;te.setup(ft,ut,jt,St,ae);let cn,Le=Xt;if(ae!==null&&(cn=kt.get(ae),Le=Rt,Le.setIndex(cn)),ft.isMesh)ut.wireframe===!0?(T.setLineWidth(ut.wireframeLinewidth*le()),Le.setMode(X.LINES)):Le.setMode(X.TRIANGLES);else if(ft.isLine){let Dn=ut.linewidth;Dn===void 0&&(Dn=1),T.setLineWidth(Dn*le()),ft.isLineSegments?Le.setMode(X.LINES):ft.isLineLoop?Le.setMode(X.LINE_LOOP):Le.setMode(X.LINE_STRIP)}else ft.isPoints?Le.setMode(X.POINTS):ft.isSprite&&Le.setMode(X.TRIANGLES);if(ft.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))Le.renderMultiDraw(ft._multiDrawStarts,ft._multiDrawCounts,ft._multiDrawCount);else{const Dn=ft._multiDrawStarts,oe=ft._multiDrawCounts,Bn=ft._multiDrawCount,Pe=ae?kt.get(ae).bytesPerElement:1,oi=lt.get(ut).currentProgram.getUniforms();for(let Ti=0;Ti<Bn;Ti++)oi.setValue(X,"_gl_DrawID",Ti),Le.render(Dn[Ti]/Pe,oe[Ti])}else if(ft.isInstancedMesh)Le.renderInstances(ue,hn,ft.count);else if(St.isInstancedBufferGeometry){const Dn=St._maxInstanceCount!==void 0?St._maxInstanceCount:1/0,oe=Math.min(St.instanceCount,Dn);Le.renderInstances(ue,hn,oe)}else Le.render(ue,hn)};function _n(U,J,St,ut){Z!==null&&U.isNodeMaterial&&Z.setObject(ut,U),gt===!0&&ce.setState(U,St,!1),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=jn,U.needsUpdate=!0,is(U,J,ut),U.side=gr,U.needsUpdate=!0,is(U,J,ut),U.side=ln):is(U,J,ut)}this.compile=function(U,J,St=null){St===null&&(St=U),Z!==null&&Z.renderStart(U,J,St),D=Kt.get(St),D.init(J),E.push(D),St.traverseVisible(function(ft){ft.isLight&&ft.layers.test(J.layers)&&(D.pushLight(ft),ft.castShadow&&D.pushShadow(ft))}),U!==St&&U.traverseVisible(function(ft){ft.isLight&&ft.layers.test(J.layers)&&(D.pushLight(ft),ft.castShadow&&D.pushShadow(ft))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Et=this.localClippingEnabled,gt=ce.init(this.clippingPlanes,Et),gt===!0&&ce.setGlobalState(this.clippingPlanes,J),Z!==null&&fe.render(D.state.shadowsArray,St,J);const ut=new Set;return U.traverse(function(ft){if(!(ft.isMesh||ft.isPoints||ft.isLine||ft.isSprite))return;const ee=ft.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const jt=ee[re];_n(jt,St,J,ft),ut.add(jt)}else _n(ee,St,J,ft),ut.add(ee)}),D=E.pop(),Z!==null&&Z.renderEnd(),ut},this.compileAsync=function(U,J,St=null){const ut=this.compile(U,J,St);return new Promise(ft=>{function ee(){if(ut.forEach(function(re){const ae=lt.get(re).currentProgram;(ae===void 0||ae.isReady())&&ut.delete(re)}),ut.size===0){ft(U);return}setTimeout(ee,10)}ve.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ee=null;function je(U){Ee&&Ee(U)}function Me(){xn.stop()}function De(){xn.start()}const xn=new Zx;xn.setAnimationLoop(je),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(U){Ee=U,ct.setAnimationLoop(U),U===null?xn.stop():xn.start()},ct.addEventListener("sessionstart",Me),ct.addEventListener("sessionend",De),this.render=function(U,J){if(J!==void 0&&J.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Z!==null&&Z.renderStart(U,J);const St=ct.enabled===!0&&ct.isPresenting===!0,ut=z!==null&&(ht===null||St)&&z.begin(F,ht);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(J),J=ct.getCamera()),U.isScene===!0&&U.onBeforeRender(F,U,J,ht),D=Kt.get(U,E.length),D.init(J),D.state.textureUnits=bt.getTextureUnits(),E.push(D),At.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),et.setFromProjectionMatrix(At,_a,J.reversedDepth),Et=this.localClippingEnabled,gt=ce.init(this.clippingPlanes,Et),P=Jt.get(U,O.length),P.init(),O.push(P),ct.enabled===!0&&ct.isPresenting===!0){const re=F.xr.getDepthSensingMesh();re!==null&&Ta(re,J,-1/0,F.sortObjects)}Ta(U,J,0,F.sortObjects),P.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),F.sortObjects===!0&&P.sort(wt,Yt),It=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,It&&me.addToRenderList(P,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),gt===!0&&ce.beginShadows();const ft=D.state.shadowsArray;if(fe.render(ft,U,J),gt===!0&&ce.endShadows(),(ut&&z.hasRenderPass())===!1){const re=P.opaque,jt=P.transmissive;if(D.setupLights(),J.isArrayCamera){const ae=J.cameras;if(jt.length>0)for(let se=0,we=ae.length;se<we;se++){const ze=ae[se];hc(re,jt,U,ze)}It&&me.render(U);for(let se=0,we=ae.length;se<we;se++){const ze=ae[se];fc(P,U,ze,ze.viewport)}}else jt.length>0&&hc(re,jt,U,J),It&&me.render(U),fc(P,U,J)}ht!==null&&V===0&&(bt.updateMultisampleRenderTarget(ht),bt.updateRenderTargetMipmap(ht)),ut&&z.end(F),U.isScene===!0&&U.onAfterRender(F,U,J),te.resetDefaultState(),at=-1,mt=null,E.pop(),E.length>0?(D=E[E.length-1],bt.setTextureUnits(D.state.textureUnits),gt===!0&&ce.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,Z!==null&&Z.renderEnd()};function Ta(U,J,St,ut){if(U.visible===!1)return;if(U.layers.test(J.layers)){if(U.isGroup)St=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(J);else if(U.isLightProbeGrid)D.pushLightProbeGrid(U);else if(U.isLight)D.pushLight(U),U.castShadow&&D.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(et)){ut&&Ft.setFromMatrixPosition(U.matrixWorld).applyMatrix4(At);const re=yt.update(U),jt=U.material;jt.visible&&P.push(U,re,jt,St,Ft.z,null,J)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(et))){const re=yt.update(U),jt=U.material;if(ut&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ft.copy(U.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ft.copy(re.boundingSphere.center)),Ft.applyMatrix4(U.matrixWorld).applyMatrix4(At)),Array.isArray(jt)){const ae=re.groups;for(let se=0,we=ae.length;se<we;se++){const ze=ae[se],ue=jt[ze.materialIndex];ue&&ue.visible&&P.push(U,re,ue,St,Ft.z,ze,J)}}else jt.visible&&P.push(U,re,jt,St,Ft.z,null,J)}}const ee=U.children;for(let re=0,jt=ee.length;re<jt;re++)Ta(ee[re],J,St,ut)}function fc(U,J,St,ut){const{opaque:ft,transmissive:ee,transparent:re}=U;D.setupLightsView(St),gt===!0&&ce.setGlobalState(F.clippingPlanes,St),ut&&T.viewport(I.copy(ut)),ft.length>0&&ks(ft,J,St),ee.length>0&&ks(ee,J,St),re.length>0&&ks(re,J,St),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hc(U,J,St,ut){if((St.isScene===!0?St.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ut.id]===void 0){const ue=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ut.id]=new gi(1,1,{generateMipmaps:!0,type:ue?Ei:zi,minFilter:dr,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const ee=D.state.transmissionRenderTarget[ut.id],re=ut.viewport||I;ee.setSize(re.z*F.transmissionResolutionScale,re.w*F.transmissionResolutionScale);const jt=F.getRenderTarget(),ae=F.getActiveCubeFace(),se=F.getActiveMipmapLevel();F.setRenderTarget(ee),F.getClearColor(zt),Vt=F.getClearAlpha(),Vt<1&&F.setClearColor(16777215,.5),F.clear(),It&&me.render(St);const we=F.toneMapping;F.toneMapping=oa;const ze=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),D.setupLightsView(ut),gt===!0&&ce.setGlobalState(F.clippingPlanes,ut),ks(U,St,ut),bt.updateMultisampleRenderTarget(ee),bt.updateRenderTargetMipmap(ee),ve.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let We=0,hn=J.length;We<hn;We++){const cn=J[We],{object:Le,geometry:Dn,material:oe,group:Bn}=cn;if(oe.side===ln&&Le.layers.test(ut.layers)){const Pe=oe.side;oe.side=jn,oe.needsUpdate=!0,ns(Le,St,ut,Dn,oe,Bn),oe.side=Pe,oe.needsUpdate=!0,ue=!0}}ue===!0&&(bt.updateMultisampleRenderTarget(ee),bt.updateRenderTargetMipmap(ee))}F.setRenderTarget(jt,ae,se),F.setClearColor(zt,Vt),ze!==void 0&&(ut.viewport=ze),F.toneMapping=we}function ks(U,J,St){const ut=J.isScene===!0?J.overrideMaterial:null;for(let ft=0,ee=U.length;ft<ee;ft++){const re=U[ft],{object:jt,geometry:ae,group:se}=re;let we=re.material;we.allowOverride===!0&&ut!==null&&(we=ut),jt.layers.test(St.layers)&&ns(jt,J,St,ae,we,se)}}function ns(U,J,St,ut,ft,ee){Z!==null&&ft.isNodeMaterial&&Z.setObject(U,ft),U.onBeforeRender(F,J,St,ut,ft,ee),U.modelViewMatrix.multiplyMatrices(St.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ft.onBeforeRender(F,J,St,ut,U,ee),ft.transparent===!0&&ft.side===ln&&ft.forceSinglePass===!1?(ft.side=jn,ft.needsUpdate=!0,F.renderBufferDirect(St,J,ut,ft,U,ee),ft.side=gr,ft.needsUpdate=!0,F.renderBufferDirect(St,J,ut,ft,U,ee),ft.side=ln):F.renderBufferDirect(St,J,ut,ft,U,ee),U.onAfterRender(F,J,St,ut,ft,ee)}function is(U,J,St){J.isScene!==!0&&(J=Ot);const ut=lt.get(U),ft=D.state.lights,ee=D.state.shadowsArray,re=ft.state.version,jt=Gt.getParameters(U,ft.state,ee,J,St,D.state.lightProbeGridArray),ae=Gt.getProgramCacheKey(jt);let se=ut.programs;ut.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?J.environment:null,ut.fog=J.fog;const we=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;ut.envMap=Ht.get(U.envMap||ut.environment,we),ut.envMapRotation=ut.environment!==null&&U.envMap===null?J.environmentRotation:U.envMapRotation,se===void 0&&(U.addEventListener("dispose",_e),se=new Map,ut.programs=se);let ze=se.get(ae);if(ze!==void 0){if(ut.currentProgram===ze&&ut.lightsStateVersion===re)return wa(U,jt),ze}else jt.uniforms=Gt.getUniforms(U),Z!==null&&U.isNodeMaterial&&Z.build(U,St,jt),U.onBeforeCompile(jt,F),ze=Gt.acquireProgram(jt,ae),se.set(ae,ze),ut.uniforms=jt.uniforms;const ue=ut.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ue.clippingPlanes=ce.uniform),wa(U,jt),ut.needsLights=dc(U),ut.lightsStateVersion=re,ut.needsLights&&(ue.ambientLightColor.value=ft.state.ambient,ue.lightProbe.value=ft.state.probe,ue.sunLights.value=ft.state.sun,ue.sunLightShadows.value=ft.state.sunShadow,ue.directionalLights.value=ft.state.directional,ue.directionalLightShadows.value=ft.state.directionalShadow,ue.spotLights.value=ft.state.spot,ue.spotLightShadows.value=ft.state.spotShadow,ue.rectAreaLights.value=ft.state.rectArea,ue.ltc_1.value=ft.state.rectAreaLTC1,ue.ltc_2.value=ft.state.rectAreaLTC2,ue.pointLights.value=ft.state.point,ue.pointLightShadows.value=ft.state.pointShadow,ue.hemisphereLights.value=ft.state.hemi,ue.sunShadowMatrix.value=ft.state.sunShadowMatrix,ue.sunShadowCascade.value=ft.state.sunShadowCascade,ue.directionalShadowMatrix.value=ft.state.directionalShadowMatrix,ue.spotLightMatrix.value=ft.state.spotLightMatrix,ue.spotLightMap.value=ft.state.spotLightMap,ue.pointShadowMatrix.value=ft.state.pointShadowMatrix),ut.lightProbeGrid=D.state.lightProbeGridArray.length>0,ut.currentProgram=ze,ut.uniformsList=null,ze}function Aa(U){if(U.uniformsList===null){const J=U.currentProgram.getUniforms();U.uniformsList=rf.seqWithValue(J.seq,U.uniforms)}return U.uniformsList}function wa(U,J){const St=lt.get(U);St.outputColorSpace=J.outputColorSpace,St.batching=J.batching,St.batchingColor=J.batchingColor,St.instancing=J.instancing,St.instancingColor=J.instancingColor,St.instancingMorph=J.instancingMorph,St.skinning=J.skinning,St.morphTargets=J.morphTargets,St.morphNormals=J.morphNormals,St.morphColors=J.morphColors,St.morphTargetsCount=J.morphTargetsCount,St.numClippingPlanes=J.numClippingPlanes,St.numIntersection=J.numClipIntersection,St.vertexAlphas=J.vertexAlphas,St.vertexTangents=J.vertexTangents,St.toneMapping=J.toneMapping}function Xs(U,J){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;A.setFromMatrixPosition(J.matrixWorld);for(let St=0,ut=U.length;St<ut;St++){const ft=U[St];if(ft.texture!==null&&ft.boundingBox.containsPoint(A))return ft}return null}function as(U,J,St,ut,ft){J.isScene!==!0&&(J=Ot),bt.resetTextureUnits();const ee=J.fog,re=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial?J.environment:null,jt=ht===null?F.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ve.workingColorSpace,ae=ut.isMeshStandardMaterial||ut.isMeshLambertMaterial&&!ut.envMap||ut.isMeshPhongMaterial&&!ut.envMap,se=Ht.get(ut.envMap||re,ae),we=ut.vertexColors===!0&&!!St.attributes.color&&St.attributes.color.itemSize===4,ze=!!St.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ue=!!St.morphAttributes.position,We=!!St.morphAttributes.normal,hn=!!St.morphAttributes.color;let cn=oa;ut.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(cn=F.toneMapping);const Le=St.morphAttributes.position||St.morphAttributes.normal||St.morphAttributes.color,Dn=Le!==void 0?Le.length:0,oe=lt.get(ut),Bn=D.state.lights;if(gt===!0&&(Et===!0||U!==mt)){const an=U===mt&&ut.id===at;ce.setState(ut,U,an)}let Pe=!1;ut.version===oe.__version?(oe.needsLights&&oe.lightsStateVersion!==Bn.state.version||oe.outputColorSpace!==jt||ft.isBatchedMesh&&oe.batching===!1||!ft.isBatchedMesh&&oe.batching===!0||ft.isBatchedMesh&&oe.batchingColor===!0&&ft._colorsTexture===null||ft.isBatchedMesh&&oe.batchingColor===!1&&ft._colorsTexture!==null||ft.isInstancedMesh&&oe.instancing===!1||!ft.isInstancedMesh&&oe.instancing===!0||ft.isSkinnedMesh&&oe.skinning===!1||!ft.isSkinnedMesh&&oe.skinning===!0||ft.isInstancedMesh&&oe.instancingColor===!0&&ft.instanceColor===null||ft.isInstancedMesh&&oe.instancingColor===!1&&ft.instanceColor!==null||ft.isInstancedMesh&&oe.instancingMorph===!0&&ft.morphTexture===null||ft.isInstancedMesh&&oe.instancingMorph===!1&&ft.morphTexture!==null||oe.envMap!==se||ut.fog===!0&&oe.fog!==ee||oe.numClippingPlanes!==void 0&&(oe.numClippingPlanes!==ce.numPlanes||oe.numIntersection!==ce.numIntersection)||oe.vertexAlphas!==we||oe.vertexTangents!==ze||oe.morphTargets!==ue||oe.morphNormals!==We||oe.morphColors!==hn||oe.toneMapping!==cn||oe.morphTargetsCount!==Dn||!!oe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Pe=!0):(Pe=!0,oe.__version=ut.version);let oi=oe.currentProgram;Pe===!0&&(oi=is(ut,J,ft),Z&&ut.isNodeMaterial&&Z.onUpdateProgram(ut,oi,oe));let Ti=!1,li=!1,ss=!1;const Ke=oi.getUniforms(),mn=oe.uniforms;if(T.useProgram(oi.program)&&(Ti=!0,li=!0,ss=!0),ut.id!==at&&(at=ut.id,li=!0),oe.needsLights){const an=Xs(D.state.lightProbeGridArray,ft);oe.lightProbeGrid!==an&&(oe.lightProbeGrid=an,li=!0)}if(Ti||mt!==U){T.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Ke.setValue(X,"projectionMatrix",U.projectionMatrix),Ke.setValue(X,"viewMatrix",U.matrixWorldInverse);const ua=Ke.map.cameraPosition;ua!==void 0&&ua.setValue(X,Ct.setFromMatrixPosition(U.matrixWorld)),B.logarithmicDepthBuffer&&Ke.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ke.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),mt!==U&&(mt=U,li=!0,ss=!0)}if(oe.needsLights&&(Bn.state.sunShadowMap.length>0&&Ke.setValue(X,"sunShadowMap",Bn.state.sunShadowMap,bt),Bn.state.directionalShadowMap.length>0&&Ke.setValue(X,"directionalShadowMap",Bn.state.directionalShadowMap,bt),Bn.state.spotShadowMap.length>0&&Ke.setValue(X,"spotShadowMap",Bn.state.spotShadowMap,bt),Bn.state.pointShadowMap.length>0&&Ke.setValue(X,"pointShadowMap",Bn.state.pointShadowMap,bt)),ft.isSkinnedMesh){Ke.setOptional(X,ft,"bindMatrix"),Ke.setOptional(X,ft,"bindMatrixInverse");const an=ft.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ke.setValue(X,"boneTexture",an.boneTexture,bt))}ft.isBatchedMesh&&(Ke.setOptional(X,ft,"batchingTexture"),Ke.setValue(X,"batchingTexture",ft._matricesTexture,bt),Ke.setOptional(X,ft,"batchingIdTexture"),Ke.setValue(X,"batchingIdTexture",ft._indirectTexture,bt),Ke.setOptional(X,ft,"batchingColorTexture"),ft._colorsTexture!==null&&Ke.setValue(X,"batchingColorTexture",ft._colorsTexture,bt));const Bi=St.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&K.update(ft,St,oi),(li||oe.receiveShadow!==ft.receiveShadow)&&(oe.receiveShadow=ft.receiveShadow,Ke.setValue(X,"receiveShadow",ft.receiveShadow)),(ut.isMeshStandardMaterial||ut.isMeshLambertMaterial||ut.isMeshPhongMaterial)&&ut.envMap===null&&J.environment!==null&&(mn.envMapIntensity.value=J.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=zw()),li){if(Ke.setValue(X,"toneMappingExposure",F.toneMappingExposure),oe.needsLights&&Rn(mn,ss),ee&&ut.fog===!0&&$t.refreshFogUniforms(mn,ee),$t.refreshMaterialUniforms(mn,ut,$,ot,D.state.transmissionRenderTarget[U.id]),oe.needsLights&&oe.lightProbeGrid){const an=oe.lightProbeGrid;mn.probesSH.value=an.texture,mn.probesMin.value.copy(an.boundingBox.min),mn.probesMax.value.copy(an.boundingBox.max),mn.probesResolution.value.copy(an.resolution)}rf.upload(X,Aa(oe),mn,bt)}if(ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(rf.upload(X,Aa(oe),mn,bt),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ke.setValue(X,"center",ft.center),Ke.setValue(X,"modelViewMatrix",ft.modelViewMatrix),Ke.setValue(X,"normalMatrix",ft.normalMatrix),Ke.setValue(X,"modelMatrix",ft.matrixWorld),ut.uniformsGroups!==void 0){const an=ut.uniformsGroups;for(let ua=0,Qi=an.length;ua<Qi;ua++){const Fi=an[ua];R.update(Fi,oi),R.bind(Fi,oi)}}return oi}function Rn(U,J){U.ambientLightColor.needsUpdate=J,U.lightProbe.needsUpdate=J,U.sunLights.needsUpdate=J,U.sunLightShadows.needsUpdate=J,U.directionalLights.needsUpdate=J,U.directionalLightShadows.needsUpdate=J,U.pointLights.needsUpdate=J,U.pointLightShadows.needsUpdate=J,U.spotLights.needsUpdate=J,U.spotLightShadows.needsUpdate=J,U.rectAreaLights.needsUpdate=J,U.hemisphereLights.needsUpdate=J}function dc(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(U,J,St){const ut=lt.get(U);ut.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),lt.get(U.texture).__webglTexture=J,lt.get(U.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:St,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,J){const St=lt.get(U);St.__webglFramebuffer=J,St.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(U,J=0,St=0){ht=U,H=J,V=St;let ut=null,ft=!1,ee=!1;if(U){const jt=lt.get(U);if(jt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,jt.__webglFramebuffer),I.copy(U.viewport),st.copy(U.scissor),xt=U.scissorTest,T.viewport(I),T.scissor(st),T.setScissorTest(xt),at=-1;return}else if(jt.__webglFramebuffer===void 0)bt.setupRenderTarget(U);else if(jt.__hasExternalTextures)bt.rebindTextures(U,lt.get(U.texture).__webglTexture,lt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const we=U.depthTexture;if(jt.__boundDepthTexture!==we){if(we!==null&&lt.has(we)&&(U.width!==we.image.width||U.height!==we.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(U)}}const ae=U.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(ee=!0);const se=lt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(se[J])?ut=se[J][St]:ut=se[J],ft=!0):U.samples>0&&bt.useMultisampledRTT(U)===!1?ut=lt.get(U).__webglMultisampledFramebuffer:Array.isArray(se)?ut=se[St]:ut=se,I.copy(U.viewport),st.copy(U.scissor),xt=U.scissorTest}else I.copy(Bt).multiplyScalar($).floor(),st.copy(Qt).multiplyScalar($).floor(),xt=Dt;if(St!==0&&(ut=it),T.bindFramebuffer(X.FRAMEBUFFER,ut)&&T.drawBuffers(U,ut),T.viewport(I),T.scissor(st),T.setScissorTest(xt),ft){const jt=lt.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,jt.__webglTexture,St)}else if(ee){const jt=J;for(let ae=0;ae<U.textures.length;ae++){const se=lt.get(U.textures[ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ae,se.__webglTexture,St,jt)}}else if(U!==null&&St!==0){const jt=lt.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,jt.__webglTexture,St)}at=-1};function zo(U){const J=lt.get(U);return(J.__readFormat!==U.format||J.__readType!==U.type)&&(J.__readFormat=U.format,J.__readType=U.type,J.__formatReadable=B.textureFormatReadable(U.format),J.__typeReadable=B.textureTypeReadable(U.type)),J}this.readRenderTargetPixels=function(U,J,St,ut,ft,ee,re,jt=0){if(!(U&&U.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=lt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&re!==void 0&&(ae=ae[re]),ae){T.bindFramebuffer(X.FRAMEBUFFER,ae);try{const se=U.textures[jt],we=se.format,ze=se.type;U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+jt);const ue=zo(se);if(ue.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ue.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=U.width-ut&&St>=0&&St<=U.height-ft&&X.readPixels(J,St,ut,ft,Wt.convert(we),Wt.convert(ze),ee)}finally{const se=ht!==null?lt.get(ht).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(U,J,St,ut,ft,ee,re,jt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=lt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&re!==void 0&&(ae=ae[re]),ae)if(J>=0&&J<=U.width-ut&&St>=0&&St<=U.height-ft){T.bindFramebuffer(X.FRAMEBUFFER,ae);const se=U.textures[jt],we=se.format,ze=se.type;U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+jt);const ue=zo(se);if(ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.bufferData(X.PIXEL_PACK_BUFFER,ee.byteLength,X.STREAM_READ),X.readPixels(J,St,ut,ft,Wt.convert(we),Wt.convert(ze),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const hn=ht!==null?lt.get(ht).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,hn);const cn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await c2(X,cn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,We),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ee),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(We),X.deleteSync(cn),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,J=null,St=0){const ut=Math.pow(2,-St),ft=Math.floor(U.image.width*ut),ee=Math.floor(U.image.height*ut),re=J!==null?J.x:0,jt=J!==null?J.y:0;bt.setTexture2D(U,0),X.copyTexSubImage2D(X.TEXTURE_2D,St,0,0,re,jt,ft,ee),T.unbindTexture()},this.copyTextureToTexture=function(U,J,St=null,ut=null,ft=0,ee=0){let re,jt,ae,se,we,ze,ue,We,hn;const cn=U.isCompressedTexture?U.mipmaps[ee]:U.image;if(St!==null)re=St.max.x-St.min.x,jt=St.max.y-St.min.y,ae=St.isBox3?St.max.z-St.min.z:1,se=St.min.x,we=St.min.y,ze=St.isBox3?St.min.z:0;else{const mn=Math.pow(2,-ft);re=Math.floor(cn.width*mn),jt=Math.floor(cn.height*mn),U.isDataArrayTexture?ae=cn.depth:U.isData3DTexture?ae=Math.floor(cn.depth*mn):ae=1,se=0,we=0,ze=0}ut!==null?(ue=ut.x,We=ut.y,hn=ut.z):(ue=0,We=0,hn=0);const Le=Wt.convert(J.format),Dn=Wt.convert(J.type);let oe;J.isData3DTexture?(bt.setTexture3D(J,0),oe=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(bt.setTexture2DArray(J,0),oe=X.TEXTURE_2D_ARRAY):(bt.setTexture2D(J,0),oe=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const Bn=T.getParameter(X.UNPACK_ROW_LENGTH),Pe=T.getParameter(X.UNPACK_IMAGE_HEIGHT),oi=T.getParameter(X.UNPACK_SKIP_PIXELS),Ti=T.getParameter(X.UNPACK_SKIP_ROWS),li=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,cn.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,cn.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,se),T.pixelStorei(X.UNPACK_SKIP_ROWS,we),T.pixelStorei(X.UNPACK_SKIP_IMAGES,ze);const ss=U.isDataArrayTexture||U.isData3DTexture,Ke=J.isDataArrayTexture||J.isData3DTexture;if(U.isDepthTexture){const mn=lt.get(U),Bi=lt.get(J),an=lt.get(mn.__renderTarget),ua=lt.get(Bi.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,an.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let Qi=0;Qi<ae;Qi++)ss&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(U).__webglTexture,ft,ze+Qi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,lt.get(J).__webglTexture,ee,hn+Qi)),X.blitFramebuffer(se,we,re,jt,ue,We,re,jt,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ft!==0||U.isRenderTargetTexture||lt.has(U)){const mn=lt.get(U),Bi=lt.get(J);T.bindFramebuffer(X.READ_FRAMEBUFFER,Y),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,tt);for(let an=0;an<ae;an++)ss?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,mn.__webglTexture,ft,ze+an):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,mn.__webglTexture,ft),Ke?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Bi.__webglTexture,ee,hn+an):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Bi.__webglTexture,ee),ft!==0?X.blitFramebuffer(se,we,re,jt,ue,We,re,jt,X.COLOR_BUFFER_BIT,X.NEAREST):Ke?X.copyTexSubImage3D(oe,ee,ue,We,hn+an,se,we,re,jt):X.copyTexSubImage2D(oe,ee,ue,We,se,we,re,jt);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Ke?U.isDataTexture||U.isData3DTexture?X.texSubImage3D(oe,ee,ue,We,hn,re,jt,ae,Le,Dn,cn.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(oe,ee,ue,We,hn,re,jt,ae,Le,cn.data):X.texSubImage3D(oe,ee,ue,We,hn,re,jt,ae,Le,Dn,cn):U.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ee,ue,We,re,jt,Le,Dn,cn.data):U.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ee,ue,We,cn.width,cn.height,Le,cn.data):X.texSubImage2D(X.TEXTURE_2D,ee,ue,We,re,jt,Le,Dn,cn);T.pixelStorei(X.UNPACK_ROW_LENGTH,Bn),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Pe),T.pixelStorei(X.UNPACK_SKIP_PIXELS,oi),T.pixelStorei(X.UNPACK_SKIP_ROWS,Ti),T.pixelStorei(X.UNPACK_SKIP_IMAGES,li),ee===0&&J.generateMipmaps&&X.generateMipmap(oe),T.unbindTexture()},this.initRenderTarget=function(U){lt.get(U).__webglFramebuffer===void 0&&bt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?bt.setTextureCube(U,0):U.isData3DTexture?bt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?bt.setTexture2DArray(U,0):bt.setTexture2D(U,0),T.unbindTexture()},this.resetState=function(){H=0,V=0,ht=null,T.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ve._getUnpackColorSpace()}}const ql={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Iw=new Lf(-1,1,1,-1,0,1);class Bw extends Qe{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const Fw=new Bw;class nm{constructor(t){this._mesh=new vn(Fw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Iw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class sc extends Tr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof fn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ac.clone(t.uniforms),this.material=new fn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new nm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ix extends Tr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class Hw extends Tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class iS{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Nt);this._width=a.width,this._height=a.height,n=new gi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new sc(ql),this.copyPass.material.blending=ya,this.timer=new Bb}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,l=this.passes.length;o<l;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}ix!==void 0&&(u instanceof ix?a=!0:u instanceof Hw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class aS extends Tr{constructor(t,n,a=null,o=null,l=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Zt}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const Gw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mr extends Tr{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new Zt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new gi(l,u,{type:Ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new gi(l,u,{type:Ei,depthBuffer:!1});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new gi(l,u,{type:Ei,depthBuffer:!1});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),l=Math.round(l/2),u=Math.round(u/2)}const f=Gw;this.highPassUniforms=ac.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Nt(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ac.clone(ql.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:ql.vertexShader,fragmentShader:ql.fragmentShader,premultipliedAlpha:!0,blending:vr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Zt,this._oldClearAlpha=1,this._basic=new Sn,this._fsQuad=new nm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,o),this.renderTargetsVertical[l].setSize(a,o),this.separableBlurMaterials[l].uniforms.invSize.value=new Nt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=Mr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=Mr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let u=0;u<t;u++)n.push(.39894*Math.exp(-.5*u*u/(a*a))/a);const o=[],l=[];for(let u=1;u<t;u+=2){const f=n[u],d=u+1<t?n[u+1]:0,p=f+d;o.push((u*f+(u+1)*d)/p),l.push(p)}return new fn({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:o},gaussianWeights:{value:l}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new fn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Mr.BlurDirectionX=new Nt(1,0);Mr.BlurDirectionY=new Nt(0,1);const ju={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class sS extends Tr{constructor(){super(),this.isOutputPass=!0,this.uniforms=ac.clone(ju.uniforms),this.material=new Xx({name:ju.name,uniforms:this.uniforms,vertexShader:ju.vertexShader,fragmentShader:ju.fragmentShader}),this._fsQuad=new nm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ve.getTransfer(this._outputColorSpace)===$e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===N0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===L0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===P0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===z0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===I0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===O0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function rS(s,t=!1){const n=s[0].index!==null,a=new Set(Object.keys(s[0].attributes)),o=new Set(Object.keys(s[0].morphAttributes)),l={},u={},f=s[0].morphTargetsRelative,d=new Qe;let p=0;for(let g=0;g<s.length;++g){const _=s[g];let v=0;if(n!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in _.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;l[x]===void 0&&(l[x]=[]),l[x].push(_.attributes[x]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(f!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in _.morphAttributes){if(!o.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(_.morphAttributes[x])}if(t){let x;if(n)x=_.index.count;else if(_.attributes.position!==void 0)x=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;d.addGroup(p,x,g),p+=x}}if(n){let g=0;const _=[];for(let v=0;v<s.length;++v){const x=s[v].index;for(let M=0;M<x.count;++M)_.push(x.getX(M)+g);g+=s[v].attributes.position.count}d.setIndex(_)}for(const g in l){const _=ax(l[g]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;d.setAttribute(g,_)}for(const g in u){const _=u[g][0].length;if(_!==0){d.morphAttributes=d.morphAttributes||{},d.morphAttributes[g]=[];for(let v=0;v<_;++v){const x=[];for(let w=0;w<u[g].length;++w)x.push(u[g][w][v]);const M=ax(x);if(!M)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;d.morphAttributes[g].push(M)}}}return d}function ax(s){let t,n,a,o=-1,l=0;for(let p=0;p<s.length;++p){const g=s[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;l+=g.count*n}const u=new t(l),f=new ye(u,n,a);let d=0;for(let p=0;p<s.length;++p){const g=s[p];if(g.isInterleavedBufferAttribute){const _=d/n;for(let v=0,x=g.count;v<x;v++)for(let M=0;M<n;M++){const w=g.getComponent(v,M);f.setComponent(v+_,M,w)}}else u.set(g.array,d);d+=g.count*n}return o!==void 0&&(f.gpuType=o),f}const Vw='"Inter", "Noto Sans SC", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',xa=(s,t=400)=>`${t} ${s}px ${Vw}`;function kw(s){const t=s.textBaseline;s.textBaseline="alphabetic";const n=s.measureText("国");return s.textBaseline=t,(n.actualBoundingBoxAscent-n.actualBoundingBoxDescent)/2}function rc(s,t,n,a){const o=s.textAlign,l=s.textBaseline,u=kw(s);s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,n,a+u),s.textAlign=o,s.textBaseline=l}function Yl(s){return null}const Ap=(s,t,n)=>{"letterSpacing"in s&&(s.letterSpacing=`${(t*n).toFixed(1)}px`)};function Xw(s,t,n){const a=t.split(/\s+/).filter(Boolean),o=[];let l="";for(const u of a){const f=l?`${l} ${u}`:u;l&&s.measureText(f).width>n?(o.push(l),l=u):l=f}return l&&o.push(l),o}function wp(s,t,n,a,o){const l=o?t.map(v=>v.toUpperCase()):t,u=a.weight??700,f=o?.08:0;let d=n.h/(l.length*1.18),p=l;for(;d>4&&(s.font=xa(d,u),Ap(s,f,d),p=l.flatMap(x=>Xw(s,x,n.w)),!(Math.max(...p.map(x=>s.measureText(x).width))<=n.w&&p.length*d*1.18<=n.h));d*=.94);s.font=xa(d,u),Ap(s,f,d),s.fillStyle=a.color,s.textAlign="center",s.textBaseline="middle";const g=d*1.18,_=n.y+n.h/2-p.length*g/2+g/2;p.forEach((v,x)=>s.fillText(v,n.x+n.w/2,_+x*g)),Ap(s,0,d)}function Ww(s,t,n,a){const l=t.toUpperCase().split(/\s+/).filter(Boolean).flatMap((g,_)=>_?[null,...g]:[...g]),u=l.reduce((g,_)=>g+(_===null?.5:1),0),f=Math.min(n.h/u,n.w*1.15),d=f*.8;s.font=xa(d,a.weight??700),s.fillStyle=a.color,s.textAlign="center",s.textBaseline="middle";let p=n.y+n.h/2-u*f/2;for(const g of l){if(g===null){p+=f*.5;continue}s.fillText(g,n.x+n.w/2,p+f/2),p+=f}}function Zl(s,t,n,a){if(s.save(),t.kind==="gloss"){const d=n.h*.72,p=Math.min(d,n.w)*.84;s.fillStyle=a.color,s.font=xa(p,a.weight??700),rc(s,t.char,n.x+n.w/2,n.y+d/2),wp(s,[t.gloss],{x:n.x,y:n.y+d,w:n.w,h:n.h-d},a,!1),s.restore();return}const o=t.lines,l=o.join(" ").split(/\s+/).filter(Boolean),u=l.length<=4&&o.every(d=>d.length<=26);if(n.h>n.w*1.7){const d=o.join("").replace(/\s/g,"").length;o.length===1&&l.length<=2&&d<=Math.max(4,Math.floor(n.h/n.w*1.6))?Ww(s,o[0],n,a):(s.translate(n.x+n.w/2,n.y+n.h/2),s.rotate(Math.PI/2),wp(s,o,{x:-n.h/2,y:-n.w/2,w:n.h,h:n.w},a,u))}else wp(s,o,n,a,u);s.restore()}const Sa=36,vf=s=>Math.min(1,Math.max(0,s)),Ka=s=>{const t=vf(s);return t*t*(3-2*t)};function qw(s){return()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function oS(s,t){const n=s.getAttribute("position").count,a=new Float32Array(n*3);for(let o=0;o<n;o++)t.toArray(a,o*3);return s.setAttribute("color",new ye(a,3)),s}function E0(s,t,n,a){const u=[],f=[],d=[];for(let g=0;g<=8;g++)for(let _=0;_<=12;_++){const v=_/12*2-1,x=g/8*2-1,M=Math.min((1-Math.abs(x))*t/2,(1-Math.abs(v))*s/2)/(t/2);if(u.push(v*s/2,n*Math.pow(Math.min(1,M),1.5)+n*.25*Math.pow(Math.abs(v*x),5),x*t/2),f.push(_/12,g/8),_<12&&g<8){const w=g*13+_,y=w+12+1;d.push(w,y,w+1,w+1,y,y+1)}}const p=new Qe;return p.setAttribute("position",new Ce(u,3)),p.setAttribute("uv",new Ce(f,2)),p.setIndex(d),p.computeVertexNormals(),oS(p.toNonIndexed(),a)}function Cp(s,t,n){const a=(o,l,u,f,d)=>oS(new ca(o,l,u).translate(0,f,0).toNonIndexed(),new Zt(d));return rS([a(.96,.08,.72,.04,n),a(.8,.42,.56,.29,t),E0(1.12,.86,.36,new Zt(s)).translate(0,.5,0)])}function Rp(s,t,n,a){const o=new Tn(s,t,4,6).translate(0,t/2,0),l=o.getAttribute("position"),u=[],f=new Zt(n),d=new Zt(a),p=new Zt;for(let g=0;g<l.count;g++){const _=l.getX(g),v=l.getY(g)/t,x=.3+.7*Math.sin(Math.min(1,v*1.6)*Math.PI/2);l.setXYZ(g,_*x,l.getY(g)+Math.sin(_*60)*.004*v,(_/(s/2))**2*s*.3+Math.sin(v*Math.PI)*t*.1),p.lerpColors(f,d,Math.pow(Math.max(0,v),.8)).toArray(u,u.length)}return o.setAttribute("color",new Ce(u,3)),o.computeVertexNormals(),o}const $u="#0000ff",lS="#b8283c",Yw=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,Zw=`
  uniform vec3 uTop, uHorizon, uGlow, uMoon;
  uniform float uMoonSize, uMoonGain, uStars;
  varying vec3 vDirection;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
  void main() {
    vec3 d = normalize(vDirection);
    float h = clamp(d.y, -0.3, 1.0);
    vec3 color = mix(uHorizon, uTop, smoothstep(-0.03, 0.5, h));
    color += uGlow * pow(1.0 - abs(h), 7.0);
    float m = dot(d, normalize(uMoon));
    float disc = smoothstep(cos(uMoonSize), cos(uMoonSize * 0.94), m);
    float mottle = 0.9 + 0.1 * sin(d.x * 900.0) * sin(d.y * 700.0 + d.z * 300.0);
    color += vec3(1.0, 0.93, 0.78) * disc * uMoonGain * mottle;
    color += vec3(0.7, 0.75, 0.9) * (pow(max(m, 0.0), 900.0) * 0.8 + pow(max(m, 0.0), 40.0) * 0.12) * min(1.0, uMoonGain);
    float star = step(0.9978, hash(floor(d * 300.0))) * smoothstep(0.04, 0.35, h) * uStars;
    color += vec3(0.8, 0.85, 1.0) * star * (1.0 - disc);
    gl_FragColor = vec4(color, 1.0);
  }`,Kw=`
  attribute vec3 aColor;
  attribute float aSize, aOn, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    float on = aOn < 0.0 ? 1.0 : smoothstep(aOn, aOn + 0.7, uTime);
    vColor = aColor * on * (0.82 + 0.18 * sin(uTime * (5.0 + aSeed * 4.0) + aSeed * 40.0));
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on < 0.01 ? 0.0 : min(180.0, aSize * uScale / -mv.z * (0.5 + 0.5 * on));
  }`,cS=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`,Jw=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`,uS=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`,Qw={uniforms:{tDiffuse:{value:null},uResolution:{value:new Nt(1,1)},uPaper:{value:new G(.94,.91,.84)},uInk:{value:new G(.11,.09,.08)},uSeal:{value:new G(.66,.2,.13)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${uS}
    float lum(vec2 uv) { return dot(texture2D(tDiffuse, uv).rgb, vec3(0.299, 0.587, 0.114)); }
    // Painted writing is drawn in WRITING_INK, pure blue, which nothing else in the films uses. How much
    // of a pixel is writing follows from its blue excess: 1 inside a stroke, falling to 0 across the
    // anti-aliased edge (paper, with blue below red, sits at about -0.17).
    float writingAt(vec3 c) {
      float e = c.b - max(c.r, c.g);
      // Only a strong blue counts (a faint cast is never writing); the edge's faintest sliver is let go.
      return clamp((e + 0.17) / 1.17, 0.0, 1.0) * smoothstep(0.1, 0.18, e);
    }
    // Vermilion writing (WRITING_RED) is red with its blue above its green; other reds have blue below.
    float redWritingAt(vec3 c) {
      return step(0.0, c.r - max(c.g, c.b) - 0.05) * clamp((c.b - c.g) / max(c.b, 0.004) * 3.0, 0.0, 1.0);
    }
    // Any writing within three pixels: no brush outline is drawn there, so characters are pure fill.
    float writingNear(vec2 uv, vec2 px) {
      float w = 0.0;
      for (int dx = -3; dx <= 3; dx++) for (int dy = -3; dy <= 3; dy++) {
        vec3 s = texture2D(tDiffuse, uv + px * vec2(float(dx), float(dy))).rgb;
        w = max(w, max(writingAt(s), redWritingAt(s)));
      }
      return w;
    }
    void main() {
      vec2 px = 1.0 / uResolution, frag = vUv * uResolution;
      // The brush never follows the geometry exactly; the offset is fixed so the paper does not swim.
      vec2 uv = vUv + (vec2(fbm(frag / 90.0), fbm(frag / 90.0 + 7.3)) - 0.5) * px * 3.0;
      // Writing is exempt from that wobble: its strokes are sampled exactly where they were drawn.
      float steady = 0.0;
      for (int k = 0; k < 5; k++) {
        vec2 o = k == 0 ? vec2(0.0) : vec2(k == 1 ? 2.0 : k == 2 ? -2.0 : 0.0, k == 3 ? 2.0 : k == 4 ? -2.0 : 0.0);
        vec3 s = texture2D(tDiffuse, vUv + px * o).rgb;
        steady = max(steady, max(writingAt(s), redWritingAt(s)));
      }
      uv = mix(uv, vUv, steady);
      vec3 raw = texture2D(tDiffuse, uv).rgb;
      // Separate painted writing from what lies behind it: its coverage, and the background colour.
      float writing = writingAt(raw);
      vec3 c = clamp((raw - writing * vec3(0.0, 0.0, 1.0)) / max(1.0 - writing, 0.05), 0.0, 1.0);
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      float tl = lum(uv + px * vec2(-1.0, 1.0)), t = lum(uv + px * vec2(0.0, 1.0)), tr = lum(uv + px * vec2(1.0, 1.0));
      float ml = lum(uv + px * vec2(-1.0, 0.0)), mr = lum(uv + px * vec2(1.0, 0.0));
      float bl = lum(uv + px * vec2(-1.0, -1.0)), b = lum(uv + px * vec2(0.0, -1.0)), br = lum(uv + px * vec2(1.0, -1.0));
      float edge = smoothstep(0.1, 0.55, length(vec2(-tl - 2.0 * ml - bl + tr + 2.0 * mr + br, -bl - 2.0 * b - br + tl + 2.0 * t + tr)));
      float grain = fbm(frag / 2.5), wash = fbm(frag / 140.0);
      // No brush outline is drawn beside writing, so characters are pure fill.
      float nearWriting = edge > 0.0 ? writingNear(uv, px) : 0.0;
      // Uneven washes: ink pools in some places and thins in others.
      float ink = smoothstep(0.03, 0.97, 1.0 - l) * (0.8 + 0.34 * wash);
      ink = clamp(max(ink, edge * 0.8 * (1.0 - nearWriting)), 0.0, 1.0);
      vec3 paper = uPaper * (0.93 + 0.07 * grain);
      paper *= 1.0 - 0.2 * pow(length(vUv - 0.5) * 1.3, 3.0);
      vec3 color = mix(paper, uInk, ink * (0.9 + 0.1 * grain));
      float red = clamp((c.r - max(c.g, c.b)) * 2.5, 0.0, 1.0);
      color = mix(color, uSeal * mix(0.85 + 0.15 * grain, 0.97, redWritingAt(c)), red);
      // Then the writing, in even, grain-free ink, anti-aliased by its own coverage.
      color = mix(color, uInk, writing);
      gl_FragColor = vec4(color, 1.0);
    }`};function sx(s,t=new Zt(1,1,1),{sharp:n=!1,flat:a}={}){return new fn({uniforms:{map:{value:s},uReveal:{value:0},uOpacity:{value:1},uColor:{value:t},uFlat:{value:a??new Zt},uFlatOn:{value:a?1:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor, uFlat;
      uniform float uFlatOn;
      varying vec2 vUv;
      ${uS}
      void main() {
        // Writing samples a sharper mip level, so characters stay crisp when shown small.
        vec4 texel = texture2D(map, vUv${n?", -0.5":""});
        float n = noise(vUv * vec2(5.0, 10.0)) * 0.6 + noise(vUv * 40.0) * 0.4;
        float alpha = texel.a * smoothstep(n - 0.08, n + 0.08, uReveal * 1.3 - 0.15) * uOpacity;
        if (alpha < 0.02) discard;
        // Writing drawn over the finished ink picture uses one flat, display-ready colour.
        gl_FragColor = vec4(uFlatOn > 0.5 ? uFlat : texel.rgb * uColor, alpha);
      }`,transparent:!0,depthWrite:!1})}const fS=1,jw={ink:new Zt(.11,.09,.08),red:new Zt(.64,.19,.13)};class $w extends Tr{constructor(t,n){super(),this.scene=t,this.camera=n,this.needsSwap=!1}render(t,n,a){const o=t.autoClear,l=this.camera.layers.mask;t.autoClear=!1,this.camera.layers.set(fS),t.setRenderTarget(this.renderToScreen?null:a),t.clearDepth(),t.render(this.scene,this.camera),this.camera.layers.mask=l,t.autoClear=o}}function Dp(s,t,n,a){s(),!(typeof document>"u"||!document.fonts)&&document.fonts.load(n,a).then(()=>{s(),t.needsUpdate=!0},()=>{})}function rx(s,t,n=jw.ink){s.layers.set(fS),t.uniforms.uFlat.value=n,t.uniforms.uFlatOn.value=1}function tC(s,t,n,a,o,l="night"){const u=new nS({antialias:!0,powerPreference:"high-performance"});u.setPixelRatio(Math.min(devicePixelRatio,2)),u.outputColorSpace=ni,u.toneMapping=l==="ink"?oa:cc,u.toneMappingExposure=1.1,u.domElement.setAttribute("aria-hidden","true"),u.domElement.style.cssText="width:100%;height:100%;display:block",s.appendChild(u.domElement);const f=new K0,d=new Tf(2763846,.0055);f.fog=d;const p=new bi(40,1,.05,1200),g=new iS(u);g.addPass(new aS(f,p));const _=new Mr(new Nt(256,256),.9,.55,.85);g.addPass(_),g.addPass(new sS);const v=l==="ink"?new sc(Qw):void 0;v&&(_.enabled=!1,g.addPass(v),g.addPass(new $w(f,p)),g.addPass(new sc(ql)));const x=new Set;let M=!1,w=!1,y=0,S=0,C=-1,N,A=()=>{};const P=O=>{O.preventDefault(),w=!1,A(),n()},D=()=>{if(M)return;M=!0,N==null||N.disconnect(),u.setAnimationLoop(null),document.removeEventListener("visibilitychange",A),u.domElement.removeEventListener("webglcontextlost",P);const O=new Set;f.traverse(E=>{const z=E;z.geometry&&!(E instanceof Af)&&z.geometry.dispose(),z.material&&[].concat(z.material).forEach(F=>O.add(F))}),O.forEach(E=>E.dispose()),x.forEach(E=>E.dispose()),g.passes.forEach(E=>E.dispose()),g.dispose(),u.dispose(),u.forceContextLoss(),u.domElement.remove()};try{const O=qw(a),E={uTime:{value:0},uScale:{value:1}},z=(Dt,et=0,gt=0,Et=0)=>{const At=new mr;return At.position.set(et,gt,Et),Dt.add(At),At},F=(Dt,et,gt,Et=0,At=0,Ct=0)=>{const Ft=new vn(Dt,et);return Ft.position.set(Et,At,Ct),gt.add(Ft),Ft},q=(Dt,et,[gt,Et,At],[Ct,Ft,Ot])=>F(new ca(Ct,Ft,Ot),et,Dt,gt,Et,At),Z=(Dt,et=!1)=>{const gt=new Nx(Dt);return gt.colorSpace=ni,et&&(gt.anisotropy=u.capabilities.getMaxAnisotropy()),x.add(gt),gt},it=(Dt,et={})=>new Nf({color:Dt,...et}),Y=new Sn({color:329483,side:ln}),tt=(Dt,et)=>{const gt=new Qe,Et=new Float32Array(et.length*3),At=new Float32Array(et.length*3),Ct=new Float32Array(et.length),Ft=new Float32Array(et.length),Ot=new Float32Array(et.length);et.forEach(([le,X,pe,ve],B)=>{Et.set(le,B*3),X.toArray(At,B*3),Ct[B]=pe,Ft[B]=ve,Ot[B]=O()}),gt.setAttribute("position",new ye(Et,3)),gt.setAttribute("aColor",new ye(At,3)),gt.setAttribute("aSize",new ye(Ct,1)),gt.setAttribute("aOn",new ye(Ft,1)),gt.setAttribute("aSeed",new ye(Ot,1));const It=new Sr(gt,new fn({uniforms:E,vertexShader:Kw,fragmentShader:l==="ink"?cS:Jw,blending:l==="ink"?To:vr,transparent:!0,depthWrite:!1}));return It.frustumCulled=!1,Dt.add(It),It},H=(Dt,et=16753228)=>new Zt(et).multiplyScalar(Dt),V=(Dt,[et,gt,Et],At=1)=>{const Ct=z(Dt,et,gt,Et);Ct.scale.setScalar(At);const Ft=new si({color:13123626,emissive:16734756,emissiveIntensity:1.8,roughness:.6}),Ot=new si({color:9071156,roughness:.5,metalness:.4});return F(new Xn(1,16,12),Ft,Ct).scale.set(.22,.27,.22),F(new Cn(.12,.12,.05,12),Ot,Ct,0,.27,0),F(new Cn(.12,.12,.05,12),Ot,Ct,0,-.27,0),F(new Cn(.008,.008,.6,4),Ot,Ct,0,.58,0),F(new Cn(.03,.005,.28,6),Ft,Ct,0,-.43,0),Ct},ht=Dt=>{const et=new es(Dt.map(([,At])=>new G(...At)),!1,"centripetal"),gt=new es(Dt.map(([,,At])=>new G(...At)),!1,"centripetal"),Et=new G;return At=>{const Ct=Dt[0][0],Ft=Dt[Dt.length-1][0],Ot=Ct+(Ft-Ct)*Ka((At-Ct)/(Ft-Ct));let It=0;for(;It<Dt.length-2&&Ot>Dt[It+1][0];)It++;const le=(It+vf((Ot-Dt[It][0])/(Dt[It+1][0]-Dt[It][0])))/(Dt.length-1);p.position.copy(et.getPoint(le)),p.lookAt(gt.getPoint(le,Et))}},at=new fn({uniforms:{uTop:{value:new Zt},uHorizon:{value:new Zt},uGlow:{value:new Zt},uMoon:{value:new G},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:Yw,fragmentShader:Zw,side:jn,depthWrite:!1,fog:!1}),mt=F(new Xn(500,48,24),at,f);mt.renderOrder=-1,mt.frustumCulled=!1,f.add(new Wx(l==="ink"?9408399:8228799,l==="ink"?2236962:2760476,.55));const I=new uc(l==="ink"?12369084:11124198,1.1);f.add(I,I.target);const st=new G;let xt;const $=o({renderer:u,addEffect:Dt=>g.addPass(Dt),scene:f,camera:p,rand:O,shared:E,ink:Y,group:z,mesh:F,box:q,lambert:it,canvasTexture:Z,glows:tt,warm:H,lantern:V,path:ht,setEnv:Dt=>{Dt!==xt&&(xt=Dt,at.uniforms.uTop.value.setHex(Dt.top),at.uniforms.uHorizon.value.setHex(Dt.horizon),at.uniforms.uGlow.value.setHex(Dt.glow),st.set(Dt.moon[0],Dt.moon[1],Dt.moon[2]).normalize(),at.uniforms.uMoon.value.copy(st),at.uniforms.uMoonSize.value=Dt.moonSize,at.uniforms.uMoonGain.value=Dt.moonGain,at.uniforms.uStars.value=Dt.stars,_.strength=Dt.bloom,d.color.setHex(Dt.fog),d.density=Dt.density,I.intensity=Dt.moon[1]>0?1.1:.15)},portrait:()=>p.aspect<.9,calligraphy:(Dt,et,{size:gt=1,columns:Et=1}={})=>{const At=[...et],Ct=Math.ceil(At.length/Et),Ft=Math.min(768,Math.max(256,Math.ceil(gt*320/64)*64),Math.floor(4096/Math.max(Ct,Et))),Ot=document.createElement("canvas");Ot.width=Et*Ft,Ot.height=Ct*Ft;const It=Ot.getContext("2d"),le=xa(Ft*.86,gt>=.8?700:500),X=Yl(Et>1?Array.from({length:Et},(nt,lt)=>At.slice(lt*Ct,(lt+1)*Ct).join("")):et),pe=()=>{if(It.clearRect(0,0,Ot.width,Ot.height),X){Zl(It,X,{x:Ft*.06,y:Ft*.06,w:Ot.width-Ft*.12,h:Ot.height-Ft*.12},{color:$u});return}It.fillStyle=$u,It.font=le,At.forEach((nt,lt)=>rc(It,nt,(Et-1-Math.floor(lt/Ct)+.5)*Ft,(lt%Ct+.5)*Ft))},ve=Z(Ot,!0);Dp(pe,ve,le,et);const B=sx(ve,void 0,{sharp:!0}),T=F(new Tn(Et*gt,Ct*gt),B,Dt);return l==="ink"&&rx(T,B),{mesh:T,material:B}},glyph:(Dt,et)=>{const At=document.createElement("canvas");At.width=At.height=1024;const Ct=At.getContext("2d");Ct.scale(5.12,5.12);const Ft=Yl(et),Ot=()=>{if(Ct.clearRect(0,0,200,200),Ft){Zl(Ct,Ft,{x:8,y:20,w:184,h:160},{color:$u});return}Ct.fillStyle=$u,Ct.textAlign="center",Ct.textBaseline="middle",Ct.font=xa(176,700),Ct.fillText(et,100,104)},It=Z(At,!0);Dp(Ot,It,xa(176,700),et);const le=sx(It,void 0,{sharp:!0}),X=F(new Tn(1,1),le,Dt);return l==="ink"&&rx(X,le),{mesh:X,material:le}},seal:(Dt,et="品花",gt=1.8)=>{const Ct=document.createElement("canvas");Ct.width=Ct.height=256;const Ft=Ct.getContext("2d");Ft.scale(2,2);const Ot=[...et],It=Ot.length>2?2:1,le=Math.ceil(Ot.length/It),X=xa(Math.floor(100/le),700),pe=Yl(et),ve=()=>{if(Ft.clearRect(0,0,128,128),Ft.fillStyle=lS,Ft.fillRect(6,6,116,116),pe){Zl(Ft,pe,{x:14,y:14,w:100,h:100},{color:"#f4ece0"});return}Ft.fillStyle="#f4ece0",Ft.font=X,Ot.forEach((nt,lt)=>rc(Ft,nt,64+(It===2?Math.floor(lt/le)?-26:26:0),12+(lt%le+.5)*(104/le)))},B=Z(Ct,!0);Dp(ve,B,X,et);const T=new Sn({map:B,transparent:!0,opacity:0,fog:!1});return{mesh:F(new Tn(gt,gt),T,Dt),material:T}}}),wt=()=>{E.uTime.value=y,$(y),I.position.copy(p.position).addScaledVector(st,100),I.target.position.copy(p.position),mt.position.copy(p.position),g.render()},Yt=40,Bt=()=>{if(M)return;const{width:Dt,height:et}=s.getBoundingClientRect(),gt=Math.max(1,Dt),Et=Math.max(1,et);u.setSize(gt,Et,!1),g.setPixelRatio(u.getPixelRatio()),g.setSize(gt,Et),v==null||v.uniforms.uResolution.value.set(gt*u.getPixelRatio(),Et*u.getPixelRatio()),p.aspect=gt/Et;const At=2*Math.atan(Math.tan(ai.degToRad(Yt)/2)*1.6);p.fov=Math.min(75,Math.max(Yt,ai.radToDeg(2*Math.atan(Math.tan(At/2)/p.aspect)))),p.updateProjectionMatrix(),E.uScale.value=Et*u.getPixelRatio()/(2*Math.tan(ai.degToRad(p.fov)/2)),wt()},Qt=Dt=>{S&&w&&!document.hidden&&(y=Math.min(Sa,y+Math.min((Dt-S)/1e3,.1))),S=Dt,wt(),Math.floor(y*12)!==C&&(C=Math.floor(y*12),t(y)),y>=Sa&&(w=!1,u.setAnimationLoop(null))};return A=()=>{S=0,u.setAnimationLoop(w&&!document.hidden?Qt:null)},N=new ResizeObserver(Bt),N.observe(s),document.addEventListener("visibilitychange",A),u.domElement.addEventListener("webglcontextlost",P),Bt(),{setPlaying(Dt){w=Dt,A()},seek(Dt){y=ai.clamp(Dt,0,Sa),t(y),wt(),A()},replay(){y=0,t(0),wt(),A()},dispose:D}}catch(O){throw D(),O}}function eC(s){var a;const t=[],{shots:n}=s;if(n.length||t.push("it has no shots"),n.forEach((o,l)=>{const u=l===0?0:n[l-1].end;o.start!==u&&t.push(`shot ${l+1} starts at ${o.start}s, expected ${u}s`),o.end<=o.start&&t.push(`shot ${l+1} ends before it starts`);for(const[f,d]of[["title.en",o.title.en],["title.zh",o.title.zh],["caption.en",o.caption.en],["caption.zh",o.caption.zh],["quote",o.quote]])d.trim()||t.push(`shot ${l+1} has an empty ${f}`)}),n.length&&n[n.length-1].end!==Sa&&t.push(`the last shot must end at ${Sa}s`),((a=n[0])==null?void 0:a.cut)===!1&&t.push("the first shot cannot continue a previous one"),s.subtitles.forEach((o,l)=>{(o.start<0||o.end>Sa||o.end<=o.start)&&t.push(`subtitle ${l+1} must lie between 0 and ${Sa}s and end after it starts`),l>0&&o.start<s.subtitles[l-1].end&&t.push(`subtitle ${l+1} overlaps the one before it`),(!o.zh.trim()||!o.en.trim())&&t.push(`subtitle ${l+1} needs both Chinese and English text`)}),t.length)throw new Error(`Invalid cinema story "${s.title.en}": ${t.join("; ")}.`);return s}function hS(s,t){const n=s.findIndex(a=>t<a.end);return n===-1?s.length-1:n}function nC(s,t){return s.find(n=>t>=n.start&&t<n.end)}function iC(s,t){const n=s.slice(1).filter(o=>o.cut!==!1);if(!n.length)return 0;const a=Math.min(...n.map(o=>Math.abs(t-o.start)));return Math.max(0,1-a/.5)}function dS(s){return(t,n,a,o)=>tC(t,a,o,s.seed,l=>{const u=s.build(l,n);return f=>u(f,hS(n.shots,f))},s.style??"ink")}const hr=eC({title:{en:"The capital, a theatre of feeling",zh:"京华繁梦，一字情深"},description:{en:"From the clouds above the capital, through a moon in a wine cup, a shadow-play screen and a moon gate, to a single word: feeling. The figures represent the unnamed gentlemen and performers in this passage.",zh:"自天边云端降入京城，经杯中月、灯下影、月洞门，终归一个“情”字。画中人物为本段所写的无名君子与优伶。"},shots:[{start:0,end:7,title:{en:"A foot and five from heaven",zh:"尺五天边"},quote:"京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭",caption:{en:"Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.",zh:"自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。"}},{start:7,end:15,title:{en:"Drunk on the moon, judging flowers",zh:"醉月评花"},quote:"人在大千队里，时时醉月评花。",caption:{en:"Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.",zh:"楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。"}},{start:15,end:22,title:{en:"A playful brush",zh:"游戏之笔"},quote:"遂以游戏之笔，摹写游戏之人。",caption:{en:"On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.",zh:"灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。"}},{start:22,end:29,title:{en:"Fond, never wanton",zh:"好色不淫"},quote:"几个用情守礼之君子，与几个洁身自好的优伶",caption:{en:"At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.",zh:"月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。"}},{start:29,end:36,title:{en:"One word: feeling",zh:"皆是一个情字"},quote:"先将缙绅中子弟分作十种，皆是一个情字。",caption:{en:"Drops of ink gather into ten kinds of people, and all ten are written with the same character: 情, feeling.",zh:"点点墨迹聚成十种人物，十种终归一字——情。"}}],subtitles:[{start:.4,end:3.6,zh:"京师演戏之盛，甲于天下。",en:"The theatrical arts of the capital are renowned as the finest under heaven."},{start:3.6,end:6.8,zh:"地当尺五天边，处处歌台舞榭；",en:"Here, at the very foot of the celestial throne, singing pavilions and dancing terraces grace every corner;"},{start:7.4,end:11,zh:"人在大千队里，时时醉月评花。",en:"within the bustling multitudes, people spend their days intoxicated by moonlight and evaluating the beauty of the flowers."},{start:11,end:14.6,zh:"真乃说不尽的繁华，描不尽的情态。",en:"Truly, its prosperity defies description and its myriad sentiments exceed depiction."},{start:15.4,end:18.6,zh:"一时闻闻见见，怪怪奇奇，事不出于理之所无，人尽入于情之所有，",en:"The bizarre and wondrous sights here, though strange, do not stray beyond reason, yet touch the depths of human feeling."},{start:18.6,end:21.6,zh:"遂以游戏之笔，摹写游戏之人。",en:"Thus, with a playful brush, I trace the lives of playful souls."},{start:22.4,end:25.8,zh:"而游戏之中最难得者，几个用情守礼之君子，与几个洁身自好的优伶，",en:"Yet the rarest among them are a few gentlemen who love deeply while holding fast to propriety, and a few performers who keep themselves pure,"},{start:25.8,end:28.6,zh:"真合着《国风》好色不淫一句。",en:"perfectly embodying the Airs of the States: “fond of beauty yet not licentious.”"},{start:29.4,end:35.6,zh:"先将缙绅中子弟分作十种，皆是一个情字。",en:"Let me first classify the young lords of the gentry into ten kinds, all united by the single word: feeling."}]});class aC extends K0{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new ca;t.deleteAttribute("uv");const n=new si({side:jn}),a=new si,o=new ja(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const l=new vn(t,n);l.position.set(-.757,13.219,.717),l.scale.set(31.713,28.305,28.591),this.add(l);const u=new Ii(t,a,6),f=new zn;f.position.set(-10.906,2.009,1.846),f.rotation.set(0,-.195,0),f.scale.set(2.328,7.905,4.651),f.updateMatrix(),u.setMatrixAt(0,f.matrix),f.position.set(-5.607,-.754,-.758),f.rotation.set(0,.994,0),f.scale.set(1.97,1.534,3.955),f.updateMatrix(),u.setMatrixAt(1,f.matrix),f.position.set(6.167,.857,7.803),f.rotation.set(0,.561,0),f.scale.set(3.927,6.285,3.687),f.updateMatrix(),u.setMatrixAt(2,f.matrix),f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),f.updateMatrix(),u.setMatrixAt(3,f.matrix),f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),f.updateMatrix(),u.setMatrixAt(4,f.matrix),f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),f.updateMatrix(),u.setMatrixAt(5,f.matrix),this.add(u);const d=new vn(t,Mo(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new vn(t,Mo(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new vn(t,Mo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new vn(t,Mo(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new vn(t,Mo(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new vn(t,Mo(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function Mo(s){return new Nf({color:0,emissive:16777215,emissiveIntensity:s})}function pi(s,t,n){s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),t.forEach(([a,o],l)=>l?s.lineTo(a,o):s.moveTo(a,o)),s.stroke()}function Wn(s,t,n,a,o=a){s.beginPath(),s.ellipse(t,n,a,o,0,0,Math.PI*2),s.fill()}function _f(s,t,n,a,o,l,u=0){s.beginPath(),s.moveTo(t-o,n),s.quadraticCurveTo(t-o-4,(n+a)/2,t-l+u,a),s.quadraticCurveTo(t+u,a+8,t+l+u,a),s.quadraticCurveTo(t+o+4,(n+a)/2,t+o,n),s.closePath(),s.fill()}function oc(s,t){s.save(),s.shadowBlur=0,s.strokeStyle=s.fillStyle="rgba(246,242,234,0.55)",t(),s.restore()}const Ps=1024,Os=576,ox="#1c1714",Il=470,xf=s=>Math.min(1,Math.max(0,s)),pS=s=>{const t=xf(s);return t*t*(3-2*t)};function sC(s,t,n,a){const o=Math.sin(a*1.3)*3;_f(s,t,n-150,n-4,24,46,o),Wn(s,t,n-150,28,10),Wn(s,t-14,n-2,12,5),Wn(s,t+14+o,n-2,12,5),s.fillRect(t-5,n-168,10,16),Wn(s,t,n-178,15,17),s.beginPath(),s.moveTo(t-16,n-184),s.lineTo(t-14,n-204),s.lineTo(t+14,n-204),s.lineTo(t+16,n-184),s.fill();for(const p of[-1,1])pi(s,[[t+p*12,n-198],[t+p*30,n-186+Math.sin(a*2+p)*4],[t+p*40,n-165+Math.sin(a*2.3+p)*6]],4);pi(s,[[t-24,n-145],[t-36,n-105],[t-30,n-78]],13),Wn(s,t-30,n-72,7);const l=n-150+Math.sin(a*2.1)*10;pi(s,[[t+24,n-145],[t+50,n-118],[t+60,l]],12);const u=.5+1.1*(.5+.5*Math.sin(a*1.6)),f=-Math.PI/2+.35,d=54;s.beginPath(),s.moveTo(t+60,l),s.arc(t+60,l,d,f-u/2,f+u/2),s.closePath(),s.fill(),oc(s,()=>{s.lineWidth=1.5;for(let p=1;p<8;p++){const g=f-u/2+u*p/8;s.beginPath(),s.moveTo(t+60+Math.cos(g)*12,l+Math.sin(g)*12),s.lineTo(t+60+Math.cos(g)*(d-6),l+Math.sin(g)*(d-6)),s.stroke()}_f(s,t,n-120,n-112,10,10)})}function rC(s,t,n,a){const o=Math.cos(a*1.5);s.save(),s.translate(t,0),s.scale((o<0?-1:1)*(.42+.58*Math.abs(o)),1);const l=Math.sin(a*3)*3;_f(s,0,n-148+l,n-4,20,60+Math.sin(a*3)*6,Math.sin(a*1.5)*8),Wn(s,0,n-148+l,24,9),s.fillRect(-4,n-166+l,8,14),Wn(s,0,n-176+l,14,16),Wn(s,0,n-195+l,12,9);for(let u=-2;u<=2;u++)Wn(s,u*9,n-201+l-(2-Math.abs(u))*3,3.2);pi(s,[[12,n-196+l],[26,n-186+l],[28,n-168+l]],2);for(const u of[-1,1]){const f=a*2.2+(u>0?0:Math.PI*.6),d=[u*(58+Math.cos(f)*10),n-196+l-Math.sin(f)*30];pi(s,[[u*22,n-144+l],[u*(44+Math.sin(f)*6),n-160+l-Math.sin(f)*20],d],11);let p=d;for(let g=1;g<=11;g++){const _=[d[0]+u*g*9+Math.sin(f*1.3-g*.6)*g*3.2,d[1]-Math.sin(f-g*.5)*g*4+g*g*1.1];pi(s,[p,_],17-g),p=_}}oc(s,()=>{for(let u=0;u<3;u++)Wn(s,0,n-120+l+u*22,4)}),s.restore()}function oC(s,t,n,a){const o=a%2.2/2.2,l=xf((o-.25)/.6),u=Math.sin(Math.PI*l)*120,f=o<.25?Math.sin(o/.25*Math.PI)*12:0,d=Math.sin(Math.PI*l);s.save(),s.translate(t,n-78-u+f),s.rotate(pS(l)*Math.PI*2);for(const p of[-1,1])pi(s,[[p*9,0],[p*(14+d*6+f*.6),38-d*30-f],[p*12,74-d*50-f]],12),Wn(s,p*16,78-d*50-f,9,5);s.beginPath(),s.moveTo(-18,-62),s.lineTo(18,-62),s.lineTo(24,6),s.lineTo(-24,6),s.closePath(),s.fill(),Wn(s,0,-62,22,8),Wn(s,0,-86,14,15),pi(s,[[-12,-92],[-30,-86+Math.sin(a*9)*4],[-42,-94+Math.sin(a*7)*6]],3);for(const p of[-1,1])pi(s,[[p*18,-58],[p*(40-d*14),-58+d*20-(1-d)*18],[p*(52-d*30),-78+d*50]],10);oc(s,()=>{s.lineWidth=2,s.beginPath(),s.moveTo(-14,-30),s.lineTo(14,-30),s.moveTo(-16,-14),s.lineTo(16,-14),s.stroke()}),s.restore()}function lC(s,t,n,a){const o=Math.abs(Math.sin(a*3.2))*16;s.save(),s.translate(t,n-o),s.rotate(Math.sin(a*3.2)*.08),_f(s,0,-120,-30,26,42);for(const d of[-1,1])pi(s,[[d*14,-34],[d*22,-16],[d*16,0]],11),Wn(s,d*20,2,11,5);Wn(s,0,-120,30,10),Wn(s,0,-142,16,15),s.beginPath(),s.moveTo(-17,-150),s.quadraticCurveTo(-6,-200,22,-222),s.quadraticCurveTo(4,-190,17,-150),s.closePath(),s.fill(),Wn(s,24,-224,7),oc(s,()=>s.fillRect(-6,-148,12,9)),pi(s,[[-24,-116],[-44,-96],[-26,-80]],10),pi(s,[[24,-116],[44,-100],[52,-120]],10),pi(s,[[52,-120],[66,-232]],4);const l=Math.sin(a*3.2+.8)*.3,u=88+Math.sin(l)*18,f=-192;pi(s,[[66,-232],[84,-226],[u,f-18]],2),Wn(s,u,f,15,19),oc(s,()=>{s.lineWidth=1.6;for(const d of[-7,0,7])s.beginPath(),s.moveTo(u+d,f-14),s.lineTo(u+d,f+14),s.stroke()}),pi(s,[[u,f+18],[u,f+32]],3),s.restore()}function cC(s,t,n,a){s.save(),s.shadowBlur=16,s.shadowColor="rgba(27,17,12,0.8)",s.translate(t,n),s.rotate(.38+a),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-10,-22,-7,-46),s.lineTo(7,-46),s.quadraticCurveTo(10,-22,0,0),s.fill(),s.fillRect(-7,-58,14,12),s.fillRect(-5,-260,10,204),s.restore()}const uC=[{x:190,draw:sC},{x:420,draw:rC},{x:650,draw:oC},{x:860,draw:lC}];function fC(){const s=document.createElement("canvas");s.width=Ps,s.height=Os;const t=s.getContext("2d"),n=document.createElement("canvas");n.width=Ps,n.height=Os;const a=n.getContext("2d"),o=a.createRadialGradient(Ps/2,Os*.62,40,Ps/2,Os*.55,Ps*.62);o.addColorStop(0,"#fbf8f1"),o.addColorStop(.45,"#ece6da"),o.addColorStop(1,"#bdb6ab"),a.fillStyle=o,a.fillRect(0,0,Ps,Os);let l=7;const u=()=>(l=l*16807%2147483647)/2147483647;a.globalAlpha=.08,a.strokeStyle="#6b635b",a.lineWidth=1;for(let d=0;d<280;d++){const p=u()*Ps,g=u()*Os,_=10+u()*40,v=u()*Math.PI;a.beginPath(),a.moveTo(p,g),a.quadraticCurveTo(p+Math.cos(v)*_*.5+(u()-.5)*8,g+Math.sin(v)*_*.5,p+Math.cos(v)*_,g+Math.sin(v)*_),a.stroke()}function f(d){t.shadowBlur=0,t.drawImage(n,0,0),t.fillStyle=`rgba(40,36,32,${.07+.04*Math.sin(d*9.1)*Math.sin(d*3.3)})`,t.fillRect(0,0,Ps,Os),t.fillStyle=ox,t.strokeStyle=ox,t.shadowColor="rgba(27,17,12,0.7)",t.shadowBlur=5;const p=pS((d-.2)/1.2);let g=null;if(p>0){const M=50+924*p,w=[],y=[];for(let S=50;S<=M;S+=8){const C=(S-50)/924,N=1.5+6*Math.pow(Math.sin(Math.PI*C),.5),A=Il+8+Math.sin(S*.013)*3;w.push([S,A-N]),y.push([S,A+N*.8])}t.beginPath(),[...w,...y.reverse()].forEach(([S,C],N)=>N?t.lineTo(S,C):t.moveTo(S,C)),t.closePath(),t.fill(),p<1&&(g=[M,Il+8])}uC.forEach((v,x)=>{const M=xf((d-1.3-x*1.05)/.9);if(M<=0)return;const w=Il+30-M*330;t.save(),t.beginPath(),t.rect(v.x-140,w,280,Os),t.clip(),v.draw(t,v.x,Il,d),t.restore(),M<1&&(g=[v.x+Math.sin(d*22)*55*(1-M*.4),w+Math.cos(d*17)*8])});const _=xf((d-5.4)/.9);!g&&_<1&&(g=d<5.4?null:[860+_*180,Il-300-_*260]),g&&cC(t,g[0],g[1],Math.sin(d*20)*.12)}return{canvas:s,draw:f}}const fi={shadow:400,gate:800,glyph:1200},hC=[{top:13486013,horizon:15789284,glow:0,moon:[-.3,.15,-1],moonSize:.035,moonGain:.5,bloom:0,stars:0,fog:15789284,density:.0055},{top:13486013,horizon:15789284,glow:0,moon:[-.3,.15,-1],moonSize:.035,moonGain:.5,bloom:0,stars:0,fog:15789284,density:.0055},{top:15723491,horizon:15723491,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:15723491,density:.02},{top:11840931,horizon:15131096,glow:0,moon:[0,.075,-1],moonSize:.07,moonGain:.62,bloom:0,stars:0,fog:15526112,density:.016},{top:16052456,horizon:16052456,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:16052456,density:0}],dC=`
  attribute vec3 aColor, aDirection;
  attribute float aLength, aSpeed, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    vec3 p = position + aDirection * mod(aSeed * aLength + uTime * aSpeed, aLength);
    p.y += sin(uTime * 4.0 + aSeed * 30.0) * 0.05;
    vColor = aColor * (0.85 + 0.15 * sin(uTime * 6.0 + aSeed * 50.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, 0.5 * uScale / -mv.z);
  }`,pC=`
  attribute vec3 aStart, aColor;
  attribute vec2 aGlyph;
  attribute float aCluster, aSeed;
  uniform float uTime, uScale, uCols, uSpacing, uSmall, uBig;
  varying vec3 vColor;
  void main() {
    float s = uTime - 29.0;
    vec3 drift = aStart + vec3(sin(aSeed * 20.0 + uTime * 0.6) * 0.5, s * 1.4, cos(aSeed * 13.0 + uTime * 0.5) * 0.5);
    float rows = 10.0 / uCols, column = mod(aCluster, uCols), row = floor(aCluster / uCols);
    vec3 center = vec3((column - (uCols - 1.0) * 0.5) * uSpacing, ((rows - 1.0) * 0.5 - row) * uSpacing * 1.08, 0.0);
    vec3 ten = center + vec3(aGlyph * uSmall, (aSeed - 0.5) * 0.5);
    vec3 one = vec3(aGlyph * uBig, (aSeed - 0.5) * 1.6);
    float gather = smoothstep(0.0, 1.0, clamp((s - 0.5 - aSeed * 1.1) / 1.7, 0.0, 1.0));
    float merge = smoothstep(0.0, 1.0, clamp((s - 3.5 - aSeed * 0.7) / 1.8, 0.0, 1.0));
    vec3 p = mix(mix(drift, ten, gather), one, merge);
    p += vec3(sin(uTime * 2.0 + aSeed * 50.0), cos(uTime * 1.7 + aSeed * 31.0), 0.0) * 0.03 * (1.0 + merge * 2.0);
    float pulse = 1.0 + 0.5 * exp(-pow((s - 6.0) * 2.2, 2.0));
    vColor = aColor * (0.6 + 0.5 * gather + 0.35 * merge) * pulse * (0.8 + 0.2 * sin(uTime * 3.0 + aSeed * 60.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, mix(0.95, 0.7, gather) * uScale / -mv.z);
  }`,mC=`
  uniform float uTime, uHit;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5, hit = vec2(-0.12, 0.05), moon = vec2(0.05, 0.13);
    float dt = uTime - uHit, r = length(p - hit), wave = 0.0;
    if (dt > 0.0) wave = sin(r * 95.0 - dt * 10.0) * exp(-dt * 0.8) * (1.0 - smoothstep(dt * 0.22, dt * 0.22 + 0.03, r)) * exp(-r * 3.0);
    vec2 q = p + normalize(p - hit + 1e-4) * wave * 0.014;
    float m = length(q - moon);
    vec3 color = vec3(0.09, 0.02, 0.015) + vec3(1.0, 0.9, 0.72) * (1.0 - smoothstep(0.1, 0.115, m)) * 1.25 + vec3(0.45, 0.4, 0.35) * exp(-m * 9.0) * 0.4;
    color += vec3(0.3, 0.2, 0.1) * max(wave, 0.0);
    gl_FragColor = vec4(color, 1.0 - smoothstep(0.46, 0.5, length(p)));
  }`,gC=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.42 * (1.0 - smoothstep(0.0, 1.0, r)));
  }`,T0={seed:20260925,build:({scene:s,camera:t,rand:n,shared:a,ink:o,group:l,mesh:u,box:f,lambert:d,canvasTexture:p,glyph:g,glows:_,warm:v,lantern:x,path:M,setEnv:w,portrait:y},S)=>{const C=l(s);u(new Tn(1400,1400).rotateX(-Math.PI/2),new Sn({color:15131096}),C);const N=[];for(let R=-9;R<=9;R++)for(let k=-10;k<=2;k++){const ct=R*16,Q=k*16;if(!(R===0&&Q>-40)&&!(Math.abs(R)<=2&&Q<=-36))for(const Mt of[-3.25,3.25])for(const ie of[-3.25,3.25]){if(n()>.82)continue;const _e=4+n()*2.2,Ne=n()<.06;N.push({x:ct+Mt+(n()-.5),z:Q+ie+(n()-.5),w:_e,h:_e*(.75+n()*.3)*(Ne?1.45:1),d:_e*(.7+n()*.15),stage:Ne})}}const A=d(16777215,{vertexColors:!0,side:ln}),P=new Ii(Cp(4867392,9275005,11840931),A,N.length),D=new qe,O=new Zt;N.forEach((R,k)=>{D.makeScale(R.w,R.h,R.d).setPosition(R.x,0,R.z),P.setMatrixAt(k,D),P.setColorAt(k,O.setScalar(.8+n()*.4))}),C.add(P);const E=Cp(3814448,10697254,13222841),z=new Ii(E,A,4);[[0,6,-38,28],[0,2.4,-64,30],[0,2.4,-88,20],[0,2.4,-112,32]].forEach(([R,k,ct,Q],Mt)=>{z.setMatrixAt(Mt,D.makeScale(Q,Q*.85,Q*.72).setPosition(R,k,ct))}),C.add(z);const F=d(10697254),q=d(13222841);f(C,F,[0,3,-38],[34,6,10]);for(const R of[-64,-88,-112])f(C,q,[0,1.2,R],[40,2.4,26]);for(const R of[-38,38])f(C,F,[R,3,-86],[1.2,6,96]);f(C,F,[0,3,-134],[77,6,1.2]),[[-430,12893876,60],[-360,10656657,36]].forEach(([R,k,ct])=>{const Q=new Ji;Q.moveTo(-900,-40);for(let Mt=-900;Mt<=900;Mt+=30)Q.lineTo(Mt,8+ct*(.5+.3*Math.sin(Mt*.011+R)+.2*Math.sin(Mt*.031)));Q.lineTo(900,-40),u(new Df(Q),new Sn({color:k,fog:!1}),C,0,0,R)});const Z=[];for(const R of N){const k=Math.hypot(R.x,R.z+60);if(!R.stage)continue;const ct=1.4+k/180*4.2+n()*.4;for(let Q=0;Q<6;Q++)Z.push([[R.x+(Q/5-.5)*.8*R.w,.46*R.h,R.z+.46*R.d],v(1,12595742),.8,ct+Q*.05])}for(let R=0;R<12;R++)for(const k of[-6,6])Z.push([[k,1.6,30-R*6],v(1,12595742),.7,.9+(12-R)*.08]);for(let R=0;R<9;R++)Z.push([[(R-4)*3.2,7.5,-32.5],v(1,12595742),.9,.6]);_(C,Z);{const k=new Qe,ct=new Float32Array(3200*3),Q=new Float32Array(3200*3),Mt=new Float32Array(3200*3),ie=new Float32Array(3200),_e=new Float32Array(3200),Ne=new Float32Array(3200),In=[3090982,4867134,12071455];for(let Ee=0;Ee<3200;Ee++){const je=n()<.5?1:-1;if(Ee<1500)ct.set([(n()-.5)*9,1,je>0?-34:50],Ee*3),Q.set([0,0,je],Ee*3),ie[Ee]=84;else if(n()<.5){const Me=(Math.floor(n()*18)-9)*16+8+(n()-.5)*2;ct.set([Me,1,je>0?-168:40],Ee*3),Q.set([0,0,je],Ee*3),ie[Ee]=208}else{const Me=(Math.floor(n()*13)-10)*16+8+(n()-.5)*2;ct.set([je>0?-152:152,1,Me],Ee*3),Q.set([je,0,0],Ee*3),ie[Ee]=304}new Zt(In[Ee%3]).toArray(Mt,Ee*3),_e[Ee]=1+n()*1.2,Ne[Ee]=n()}k.setAttribute("position",new ye(ct,3)),k.setAttribute("aDirection",new ye(Q,3)),k.setAttribute("aColor",new ye(Mt,3)),k.setAttribute("aLength",new ye(ie,1)),k.setAttribute("aSpeed",new ye(_e,1)),k.setAttribute("aSeed",new ye(Ne,1));const _n=new Sr(k,new fn({uniforms:a,vertexShader:dC,fragmentShader:cS,transparent:!0,depthWrite:!1}));_n.frustumCulled=!1,C.add(_n)}{const R=document.createElement("canvas");R.width=R.height=256;const k=R.getContext("2d");for(let Q=0;Q<14;Q++){const Mt=60+n()*136,ie=90+n()*76,_e=30+n()*60,Ne=k.createRadialGradient(Mt,ie,0,Mt,ie,_e);Ne.addColorStop(0,"rgba(255,255,255,0.35)"),Ne.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=Ne,k.fillRect(0,0,256,256)}const ct=new J0({map:p(R),color:10130571,transparent:!0,opacity:.35,depthWrite:!1,fog:!1});for(let Q=0;Q<16;Q++){const Mt=new Af(ct);Mt.position.set((n()-.5)*170,55+n()*55,-30+n()*170),Mt.scale.set(50+n()*50,22+n()*18,1),C.add(Mt)}}const it=l(C,0,16,52),Y=d(3814449),tt=d(3025190);f(it,d(13222583),[0,-.1,.5],[8,.2,5]),f(it,Y,[0,.92,-1.3],[7.4,.07,.08]),f(it,Y,[0,.12,-1.3],[7.4,.07,.08]);for(let R=-3.6;R<=3.61;R+=.4)f(it,Y,[R,.52,-1.3],[.045,.8,.045]);for(const R of[-3.7,3.7])f(it,Y,[R,2.2,-1.3],[.2,4.6,.2]);f(it,Y,[0,4.4,-1.3],[7.8,.25,.22]),f(it,d(10722192),[0,.77,.5],[1.7,.06,1]);for(const R of[-.75,.75])for(const k of[.1,.9])f(it,tt,[R,.37,k],[.06,.74,.06]);const H=new si({color:9418918,roughness:.25,side:ln}),V=u(new Uo([[0,0],[.03,0],[.035,.008],[.06,.03],[.075,.062],[.071,.064]].map(([R,k])=>new Nt(R,k)),32),H,it,.35,.8,.55),ht=new fn({uniforms:{uTime:a.uTime,uHit:{value:13.4}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:mC,transparent:!0});u(new wf(.068,48).rotateX(-Math.PI/2),ht,V,0,.05,0);const at=u(new Uo([[0,0],[.06,0],[.085,.03],[.1,.1],[.085,.2],[.05,.27],[.042,.3],[.055,.33]].map(([R,k])=>new Nt(R,k)),48),new si({color:2902630,roughness:.3}),it,-.15,.8,.28);u(new Cn(.008,.01,.2,5),d(2637854),at,0,.42,0);const mt=d(3099174,{side:ln});for(const[R,k]of[[.6,.4],[2.6,.44],[4.4,.37]]){const ct=u(new Xn(1,8,6),mt,at,Math.cos(R)*.09,k,Math.sin(R)*.09);ct.scale.set(.1,.012,.04),ct.rotation.set(0,-R,-.4)}const I=l(at,0,.5,0);I.scale.setScalar(1.4);const st=new si({vertexColors:!0,roughness:.55,side:ln,emissive:3803154}),xt=[{n:6,r:.01,w:.05,h:.06},{n:9,r:.025,w:.08,h:.09},{n:12,r:.04,w:.1,h:.11},{n:14,r:.055,w:.12,h:.12}],zt=new Ii(Rp(1,1,6949922,16098228),st,xt.reduce((R,k)=>R+k.n,0));I.add(zt),u(new Xn(.025,10,8),new si({color:15253578,emissive:5913096}),I);const Vt=new la(0,0,0,"YXZ"),qt=new Gs,ot=new G,$=new G,wt=R=>{let k=0;xt.forEach((ct,Q)=>{for(let Mt=0;Mt<ct.n;Mt++){const ie=Mt/ct.n*Math.PI*2+Q*.7,_e=ai.lerp(.12+Q*.08,.3+Q*.38,R);ot.set(-Math.sin(ie)*ct.r,0,-Math.cos(ie)*ct.r),qt.setFromEuler(Vt.set(-_e,ie,0)),zt.setMatrixAt(k++,D.compose(ot,qt,$.set(ct.w,ct.h,ct.w)))}}),zt.instanceMatrix.needsUpdate=!0},Yt=u(Rp(.08,.1,11546698,16098228),st,it);x(it,[-1.5,2.3,.1],.9);const Bt=new ja(16774890,3,9,1.6);Bt.position.set(-1.5,2.2,.3),it.add(Bt),u(new Cn(.018,.02,.14,12),d(15326400),it,.12,.87,.12),u(new Cf(.008,.03,8),new Sn({color:new Zt(16765066).multiplyScalar(3)}),it,.12,.965,.12);const Qt=new ja(16774890,1.4,3,1.4);Qt.position.set(.12,1,.16),it.add(Qt);const Dt=l(s,fi.shadow),et=fC(),gt=p(et.canvas);u(new Tn(40,40).rotateX(-Math.PI/2),new Sn({color:14209736}),Dt);const Et=new Sn({map:gt,fog:!1});Et.color.setRGB(1.08,1,.9),u(new Tn(7.2,4.05),Et,Dt,0,2.55,0);const At=d(3814449);for(const R of[-3.72,3.72])f(Dt,At,[R,2.6,0],[.22,5.2,.2]);f(Dt,At,[0,4.66,0],[7.8,.22,.22]),f(Dt,At,[0,.52,0],[7.8,.12,.22]),f(Dt,d(2762018),[0,.24,.02],[7.6,.46,.14]),u(E0(8.8,1.6,.55,new Zt(1711140)),d(16777215,{vertexColors:!0,side:ln}),Dt,0,4.78,0);for(const R of[-4.4,4.4])x(Dt,[R,3.9,.3]);const Ct=new ja(16774890,9,14,1.4);Ct.position.set(0,2.5,1.2),Dt.add(Ct);const Ft=[];for(const[R,k]of[[-1.95,6.8],[-.7,7],[.65,6.8],[1.9,6.9],[-1.3,5],[1.3,5.1]]){const ct=l(Dt,R,0,k);u(new Xn(1,16,12),o,ct,0,1.2,0).scale.set(.3,.36,.22),u(new Cn(.06,.07,.14,8),o,ct,0,1.52,0);const Q=l(ct,0,1.64,0);u(new Xn(.13,16,12),o,Q),u(new Xn(.137,16,8,0,Math.PI*2,0,Math.PI/2),o,Q,0,.03,0),u(new Xn(.025,8,6),o,Q,0,.17,0),u(new Cn(.018,.01,.6,5),o,Q,0,-.32,.13).rotation.x=.12,Ft.push(Q)}const Ot=l(s,fi.gate);u(new Tn(80,80).rotateX(-Math.PI/2),new Sn({color:14078150}),Ot);const It=new Ji([new Nt(-9,0),new Nt(9,0),new Nt(9,5.4),new Nt(-9,5.4)]),le=new gf;le.absarc(0,2.55,2.25,0,Math.PI*2,!0),It.holes.push(le),u(new Do(It,{depth:.5,bevelEnabled:!1,curveSegments:72}).translate(0,0,-.25),d(14208959),Ot);for(const R of[-4.95,4.95])f(Ot,d(4672080),[R,.22,0],[8.1,.44,.56]);const X=d(3882564);for(const R of[.26,-.26])u(new Uf(2.3,.08,8,72),X,Ot,0,2.55,R);u(E0(19,1.2,.4,new Zt(2106414)),d(16777215,{vertexColors:!0,side:ln}),Ot,0,5.4,0);const pe=new vn(Cp(1382946,1841690,2237738),d(16777215,{vertexColors:!0,side:ln}));pe.position.set(-3.2,0,-16),pe.scale.set(7,6,5),Ot.add(pe),u(new Rf(1),o,Ot,-2.6,.7,-5.5).scale.set(1.2,1.5,.9);const ve=[];for(let R=0;R<9;R++){const k=2.2+n()*2.6,ct=-3-n()*4,Q=6.5+n()*2;u(new Cn(.04,.06,Q,6),o,Ot,k,Q/2,ct).rotation.z=(n()-.5)*.1;for(let Mt=0;Mt<30;Mt++)qt.setFromEuler(Vt.set(n()*2-1,n()*Math.PI*2,.6+n()*.9)),ve.push(new qe().compose(ot.set(k+(n()-.5)*1.2,3+n()*(Q-3),ct+(n()-.5)*1.2),qt,$.set(1,1,1)))}const B=new Ii(new Tn(.4,.06),o,ve.length);ve.forEach((R,k)=>B.setMatrixAt(k,R)),Ot.add(B);const T=new es([[4.8,5.7,.35],[3.7,5.3,.45],[2.6,5,.5],[1.6,4.95,.55],[.7,4.6,.6],[0,4.15,.62]].map(([R,k,ct])=>new G(R,k,ct)));u(new No(T,48,.045,6),o,Ot);const nt=[];for(const[R,k]of[[.3,[2.9,4.4,.6]],[.55,[1.8,5.5,.5]],[.75,[.9,4.2,.7]]]){const ct=T.getPoint(R),Q=new es([ct,ct.clone().lerp(new G(...k),.5).add(new G(0,.12,0)),new G(...k)]);u(new No(Q,12,.02,5),o,Ot);for(let Mt=0;Mt<6;Mt++)nt.push([Q.getPoint(.2+Mt*.15).add(new G((n()-.5)*.1,(n()-.5)*.1,0)).toArray(),new Zt(12730682),.12,-1])}for(let R=0;R<26;R++)nt.push([T.getPoint(n()).add(new G((n()-.5)*.14,(n()-.5)*.14,.05)).toArray(),new Zt(n()<.5?12730682:11022892),.11,-1]);for(const R of[-3.6,3.6]){x(Ot,[R,3.7,.6]);const k=new ja(16774890,9,9,1.5);k.position.set(R,3.6,.9),Ot.add(k),f(Ot,o,[R,4.35,.42],[.05,.05,.4])}const lt=new uc(10263708,.6);lt.position.set(-4,7,12),Ot.add(lt,lt.target),_(Ot,nt);const bt=new Ii(Rp(.05,.06,14195366,16769766),new Sn({vertexColors:!0,side:ln}),90),Ht=Array.from({length:90},()=>[n(),n(),n(),n()]);Ot.add(bt);const kt=R=>{const k=new Ji;return k.moveTo(R[0][0],R[0][1]),k.splineThru(R.slice(1).map(([ct,Q])=>new Nt(ct,Q))),k.closePath(),k},_t=R=>new Ji(R.map(([k,ct])=>new Nt(k,ct))),yt=(R,k,ct)=>{const Q=new Ji;return Q.absarc(R,k,ct,0,Math.PI*2,!1),Q},Gt=(R,k)=>u(new Do(R,{depth:.04,bevelEnabled:!1,curveSegments:16}),o,k);function $t(R,k,ct,Q){const Mt=l(Ot,...ct);Mt.scale.x=Q,Gt([kt(R)],Mt);const ie=l(Mt,0,.95,0);return Gt(k,ie),{root:Mt,torso:ie}}const Jt=$t([[-.15,.97],[-.2,.6],[-.27,.15],[-.31,.01],[0,0],[.3,.01],[.26,.2],[.18,.6],[.14,.97]],[kt([[-.16,0],[-.19,.25],[-.15,.45],[-.06,.53],[.06,.52],[.14,.44],[.16,.2],[.14,0]]),_t([[-.04,.5],[.06,.5],[.06,.62],[-.04,.62]]),yt(.02,.7,.105),_t([[.11,.73],[.145,.685],[.11,.665]]),_t([[-.1,.75],[-.1,.9],[.1,.9],[.12,.76]]),_t([[-.1,.87],[-.24,.6],[-.21,.58],[-.08,.8]]),kt([[-.02,.45],[.12,.4],[.28,.28],[.34,.18],[.3,.08],[.18,.04],[.06,.14],[-.04,.3]]),yt(.35,.23,.045)],[-2.7,0,1.4],1),Kt=$t([[-.13,.97],[-.17,.6],[-.25,.12],[-.28,.01],[0,0],[.27,.01],[.22,.2],[.15,.6],[.12,.97]],[kt([[-.13,0],[-.16,.25],[-.12,.44],[-.05,.5],[.05,.5],[.12,.43],[.14,.2],[.12,0]]),_t([[-.035,.47],[.045,.47],[.045,.6],[-.035,.6]]),yt(.02,.67,.095),_t([[.1,.7],[.13,.66],[.1,.645]]),yt(-.08,.74,.07),yt(0,.78,.06),_t([[-.15,.8],[.07,.865],[.075,.845],[-.15,.782]]),_t([[-.145,.79],[-.175,.58],[-.158,.58],[-.13,.78]]),kt([[-.01,.44],[.1,.38],[.2,.2],[.24,-.1],[.25,-.42],[.17,-.47],[.13,-.12],[.06,.18],[-.03,.3]])],[1,0,-1.2],-1),ce=l(s,fi.glyph),fe={uTime:a.uTime,uScale:a.uScale,uCols:{value:5},uSpacing:{value:6.8},uSmall:{value:5.2},uBig:{value:21}};{const R=document.createElement("canvas");R.width=R.height=200;const k=R.getContext("2d",{willReadFrequently:!0});k.fillStyle="#fff",k.textAlign="center",k.textBaseline="middle",k.font=xa(176,700);const ct=Yl();ct?Zl(k,ct,{x:8,y:20,w:184,h:160},{color:"#fff"}):k.fillText("情",100,104);const Q=k.getImageData(0,0,200,200).data,Mt=[];for(let De=0;De<200;De+=1)for(let xn=0;xn<200;xn+=1)Q[(De*200+xn)*4+3]>128&&Mt.push([xn,De]);if(!Mt.length)for(let De=0;De<400;De++)Mt.push([40+n()*120,40+n()*120]);const ie=7e3,_e=new Qe,Ne=new Float32Array(ie*3),In=new Float32Array(ie*2),_n=new Float32Array(ie*3),Ee=new Float32Array(ie),je=new Float32Array(ie);for(let De=0;De<ie;De++){const[xn,Ta]=Mt[Math.floor(n()*Mt.length)];In.set([(xn+n())/200-.5,.5-(Ta+n())/200],De*2),Ne.set([(n()-.5)*70,-24+n()*22,-n()*26+6],De*3),new Zt(n()<.5?3090982:4143669).toArray(_n,De*3),Ee[De]=De%10,je[De]=n()}_e.setAttribute("position",new ye(Ne,3)),_e.setAttribute("aStart",new ye(Ne,3)),_e.setAttribute("aGlyph",new ye(In,2)),_e.setAttribute("aColor",new ye(_n,3)),_e.setAttribute("aCluster",new ye(Ee,1)),_e.setAttribute("aSeed",new ye(je,1));const Me=new Sr(_e,new fn({uniforms:fe,vertexShader:pC,fragmentShader:gC,transparent:!0,depthWrite:!1}));Me.frustumCulled=!1,ce.add(Me)}const me=document.createElement("canvas");me.width=me.height=128;{const R=me.getContext("2d");R.fillStyle=lS,R.fillRect(6,6,116,116),R.fillStyle="#f4e3c4",R.textAlign="center",R.textBaseline="middle",R.font=xa(50,700);const k=Yl();k?Zl(R,k,{x:14,y:14,w:100,h:100},{color:"#f4e3c4"}):(rc(R,"品",64,35),rc(R,"花",64,93))}const K=new Sn({map:p(me,!0),transparent:!0,opacity:0,fog:!1}),Xt=u(new Tn(1.8,1.8),K,ce,0,0,1),Rt=g(ce,"情");Rt.mesh.position.z=.9;const Wt=[M([[0,[0,112,150],[0,70,-200]],[3.5,[0,78,118],[0,24,-100]],[7,[0,40,88],[0,4,-70]]]),M([[7,[2.2,18.6,60],[0,8,-80]],[10,[1.2,17.9,55.8],[-.2,14,-20]],[12.4,[.45,17.75,54],[.05,17.22,52.42]],[15,[.45,17.1,52.95],[.35,16.84,52.55]]]),M([[15,[fi.shadow+.5,1.7,11],[fi.shadow,2.3,0]],[18.5,[fi.shadow+.2,1.95,8.2],[fi.shadow,2.45,0]],[22,[fi.shadow,2.55,5.7],[fi.shadow,2.55,0]]]),M([[22,[fi.gate+.4,1.95,10.4],[fi.gate-.35,2.1,0]],[29,[fi.gate,2.05,7.4],[fi.gate,2.35,0]]])],te=[C,C,Dt,Ot,ce];return(R,k)=>{for(const Q of[C,Dt,Ot,ce])Q.visible=Q===te[k];it.visible=k===1,w(hC[k]);const ct=y();if(k<4)Wt[k](R);else{const Q=vf((R-S.shots[4].start)/7),Mt=(ct?58:44)-Ka(Q)*8;t.position.set(fi.glyph+Math.sin(Q*1.4)*3,.6,Mt),t.lookAt(fi.glyph,0,0)}if(k===1){wt(Ka((R-8.2)/3.8));const Q=vf((R-12.2)/1.2);Yt.visible=R>12.2;const Mt=Math.max(0,R-13.4);Yt.position.set(ai.lerp(-.13,.334,Ka(Q))+Math.sin(Q*9)*.05*(1-Q)+Mt*.004,ai.lerp(1.34,.852,Q*Q),ai.lerp(.3,.543,Q)+Math.cos(Q*7)*.04*(1-Q)),Yt.rotation.set(Q<1?Q*8:-Math.PI/2,Q*5+Mt*.2,Q<1?Math.sin(Q*11):0)}if(k===2&&(et.draw(R-15),gt.needsUpdate=!0,Ft.forEach((Q,Mt)=>{Q.rotation.y=Math.sin(R*.7+Mt*1.9)*.35*Math.max(0,Math.sin(R*.4+Mt))})),k===3){const Q=(Mt,ie)=>ie*Ka((R-Mt)/1.1)*(1-Ka((R-Mt-2.2)/1.2));Jt.torso.rotation.z=-Q(23,.55),Kt.torso.rotation.z=-Q(24.3,.38),Kt.root.position.y=-Q(24.3,.05),Ht.forEach(([Mt,ie,_e,Ne],In)=>{const _n=(R*(.3+_e*.3)+Ne*6)%5.4;ot.set(-.8+Mt*4.6-_n*.35+Math.sin(R*1.3+Ne*10)*.15,5.3-_n,-1+ie*2.4),qt.setFromEuler(Vt.set(R*(1+Mt)+Ne*6,R*.7+ie*6,R*(.5+_e))),bt.setMatrixAt(In,D.compose(ot,qt,$.set(1,1,1)))}),bt.instanceMatrix.needsUpdate=!0}if(k===4){const Q=fe.uBig.value;fe.uCols.value=ct?2:5,Xt.position.set(Q*.42,-Q*.42,1),Rt.mesh.scale.setScalar(Q),Rt.material.uniforms.uReveal.value=Ka((R-34)/1),K.opacity=Ka((R-34.4)/.5),Xt.scale.setScalar(1+.4*(1-Ka((R-34.4)/.35)))}}}},vC=dS(T0),_C={cinematic:[1518133,10904648,14403996,5401963,3229783],monet:[7568810,14197915,15850150,9350809,9606845],cyberpunk:[1514299,7351425,3640730,2434887,1467256]};function xC(){return new sc({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      void main(){
        vec2 cells=vec2(260.,165.); vec2 g=vUv*cells; vec2 cell=floor(g);
        vec3 paint=vec3(0.); float weights=0.;
        for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){
          vec2 c=cell+vec2(float(x),float(y)); float n=hash(c);
          vec2 center=c+.5+vec2(n-.5,hash(c+9.)-.5)*.6;
          vec2 d=g-center; float a=(n-.5)*1.8;
          d=mat2(cos(a),-sin(a),sin(a),cos(a))*d;
          float w=exp(-dot(d*vec2(.85,1.9),d*vec2(.85,1.9))*2.);
          vec3 color=texture2D(tDiffuse,center/cells).rgb;
          color+=vec3(.065,.035,-.035)*(n-.5);
          paint+=color*w; weights+=w;
        }
        paint/=max(weights,.0001);
        float tooth=hash(floor(vUv*vec2(1900.,1200.)))-.5;
        vec3 original=texture2D(tDiffuse,vUv).rgb;
        paint=mix(paint,original,.12)*(.99+.018*tooth);
        paint=mix(paint,vec3(.96,.91,.79),.07);
        gl_FragColor=vec4(paint,1.);
      }`})}function SC(s,t){const n=_C[t].map(l=>new Zt(l)),a=new Map;let o=0;s.scene.traverse(l=>{if(!(l instanceof vn))return;const u=f=>{if(!(f instanceof Nf)&&!(f instanceof Sn)||f.map||f.transparent)return f;if(a.has(f))return a.get(f);const d=n[o++%n.length].clone(),p=new si({color:d,vertexColors:f.vertexColors,side:f.side,roughness:t==="monet"?1:t==="cyberpunk"?.24:.38,metalness:t==="monet"?0:.28,emissive:t==="cyberpunk"?d:0,emissiveIntensity:t==="cyberpunk"?.16:0});return a.set(f,p),p};l.material=Array.isArray(l.material)?l.material.map(u):u(l.material),l.castShadow=!l.material||!l.material.transparent,l.receiveShadow=!0}),a.forEach((l,u)=>u.dispose())}function yC(s,t){const n=new si({color:1054251,metalness:.65,roughness:.22}),a=new Sn({color:new Zt(2616575).multiplyScalar(2)}),o=new Sn({color:new Zt(16721549).multiplyScalar(2)}),l=new ca(1,1,1),u=new Ii(l,n,120),f=new Ii(l,a,3600),d=new qe;let p=0;for(let x=0;x<120;x++){const M=x%2?1:-1,w=M*(35+s.rand()*130),y=-30-s.rand()*220,S=18+s.rand()*85,C=5+s.rand()*8;d.makeScale(C,S,C).setPosition(w,S/2,y),u.setMatrixAt(x,d);for(let N=0;N<30;N++)d.makeScale(.65,.35,.12).setPosition(w+(N%3-1)*C*.27,3+Math.floor(N/3)*S/11,y+C/2+.1),f.setMatrixAt(p++,d);s.box(t,x%2?o:a,[w,S+.1,y],[C+.25,.18,C+.25])}t.add(u,f);for(const[x,M]of["歌台","舞榭","醉月","情"].entries()){const w=document.createElement("canvas");w.width=128,w.height=384;const y=w.getContext("2d");y.fillStyle="#131028",y.fillRect(0,0,128,384),y.strokeStyle=x%2?"#ff4eac":"#5bffff",y.lineWidth=8,y.strokeRect(5,5,118,374),y.fillStyle=y.strokeStyle,y.font="bold 84px serif",y.textAlign="center",[...M].forEach((C,N)=>y.fillText(C,64,135+N*120));const S=new Sn({map:s.canvasTexture(w),side:ln});s.mesh(new Tn(8,24),S,t,(x%2?1:-1)*(26+Math.floor(x/2)*18),25,-35-x*25)}const g=new Qe,_=new Float32Array(1800*3);for(let x=0;x<1800;x++)_.set([(s.rand()-.5)*230,s.rand()*110,s.rand()*280-180],x*3);g.setAttribute("position",new ye(_,3));const v=new Sr(g,new Dx({color:8437759,size:.12,transparent:!0,opacity:.5}));return t.add(v),x=>{v.position.y=-(x*18)%35}}function MC(s){return dS({seed:T0.seed,style:"night",build:(t,n)=>{t.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));const a=new Map,o=new Set(t.scene.children),l=T0.build({...t,setEnv:M=>{let w=a.get(M);if(!w){const y=s==="monet",S=s==="cyberpunk";w={...M,top:y?10268112:S?197912:1122104,horizon:y?15783608:S?4661092:12419169,glow:y?2235152:S?1246761:2298375,fog:y?14274e3:S?1119017:4016219,density:M.density*.6,bloom:y?.12:S?1.05:.45,moonGain:y?.55:1.3,stars:y?0:.5},a.set(M,w)}t.setEnv(w)}},n);SC(t,s);const u=t.scene.children.find(M=>!o.has(M)&&M instanceof mr),f=s==="cyberpunk"?yC(t,u):()=>{},d=new y0(t.renderer),p=new aC,g=d.fromScene(p,.06);t.scene.environment=g.texture,t.scene.environmentIntensity=s==="monet"?.6:.85,p.dispose(),d.dispose();const _=new sc({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){gl_FragColor=texture2D(tDiffuse,vUv);}"}),v=_.dispose.bind(_);_.dispose=()=>{v(),g.dispose()},t.addEffect(_);const x=new uc(s==="monet"?16769196:s==="cyberpunk"?16738251:16765851,s==="monet"?2:3);return x.position.set(-40,80,70),t.scene.add(x,x.target),s==="cinematic"&&(t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=ux,x.castShadow=!0,x.shadow.mapSize.set(2048,2048),x.shadow.camera.left=-65,x.shadow.camera.right=65,x.shadow.camera.top=65,x.shadow.camera.bottom=-65,x.shadow.camera.far=240,x.shadow.normalBias=.08),s==="monet"&&t.addEffect(xC()),(M,w)=>{l(M,w),f(M);const y=w===2?400:w===3?800:w===4?1200:0;x.position.set(y-40,80,70),x.target.position.set(y,0,0)}}})}const A0=[{start:0,end:7,title:{en:"A foot and five from heaven",zh:"尺五天边"},quote:"京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭",caption:{en:"Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.",zh:"自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。"}},{start:7,end:15,title:{en:"Drunk on the moon, judging flowers",zh:"醉月评花"},quote:"人在大千队里，时时醉月评花。",caption:{en:"Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.",zh:"楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。"}},{start:15,end:22,title:{en:"A playful brush",zh:"游戏之笔"},quote:"遂以游戏之笔，摹写游戏之人。",caption:{en:"On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.",zh:"灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。"}},{start:22,end:29,title:{en:"Fond, never wanton",zh:"好色不淫"},quote:"几个用情守礼之君子，与几个洁身自好的优伶",caption:{en:"At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.",zh:"月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。"}},{start:29,end:36,title:{en:"One word: feeling",zh:"皆是一个情字"},quote:"先将缙绅中子弟分作十种，皆是一个情字。",caption:{en:"The city’s lights gather into ten kinds of people, and all ten are written with the same character: 情, feeling.",zh:"满城灯火聚成十种人物，十种终归一字——情。"}}];function bC(s){const t=A0.findIndex(n=>s<n.end);return t===-1?A0.length-1:t}const zs=1024,Is=576,lx="#1b110c",Bl=470,Sf=s=>Math.min(1,Math.max(0,s)),mS=s=>{const t=Sf(s);return t*t*(3-2*t)};function mi(s,t,n){s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),t.forEach(([a,o],l)=>l?s.lineTo(a,o):s.moveTo(a,o)),s.stroke()}function qn(s,t,n,a,o=a){s.beginPath(),s.ellipse(t,n,a,o,0,0,Math.PI*2),s.fill()}function yf(s,t,n,a,o,l,u=0){s.beginPath(),s.moveTo(t-o,n),s.quadraticCurveTo(t-o-4,(n+a)/2,t-l+u,a),s.quadraticCurveTo(t+u,a+8,t+l+u,a),s.quadraticCurveTo(t+o+4,(n+a)/2,t+o,n),s.closePath(),s.fill()}function lc(s,t){s.save(),s.shadowBlur=0,s.strokeStyle=s.fillStyle="rgba(255,214,150,0.4)",t(),s.restore()}function EC(s,t,n,a){const o=Math.sin(a*1.3)*3;yf(s,t,n-150,n-4,24,46,o),qn(s,t,n-150,28,10),qn(s,t-14,n-2,12,5),qn(s,t+14+o,n-2,12,5),s.fillRect(t-5,n-168,10,16),qn(s,t,n-178,15,17),s.beginPath(),s.moveTo(t-16,n-184),s.lineTo(t-14,n-204),s.lineTo(t+14,n-204),s.lineTo(t+16,n-184),s.fill();for(const p of[-1,1])mi(s,[[t+p*12,n-198],[t+p*30,n-186+Math.sin(a*2+p)*4],[t+p*40,n-165+Math.sin(a*2.3+p)*6]],4);mi(s,[[t-24,n-145],[t-36,n-105],[t-30,n-78]],13),qn(s,t-30,n-72,7);const l=n-150+Math.sin(a*2.1)*10;mi(s,[[t+24,n-145],[t+50,n-118],[t+60,l]],12);const u=.5+1.1*(.5+.5*Math.sin(a*1.6)),f=-Math.PI/2+.35,d=54;s.beginPath(),s.moveTo(t+60,l),s.arc(t+60,l,d,f-u/2,f+u/2),s.closePath(),s.fill(),lc(s,()=>{s.lineWidth=1.5;for(let p=1;p<8;p++){const g=f-u/2+u*p/8;s.beginPath(),s.moveTo(t+60+Math.cos(g)*12,l+Math.sin(g)*12),s.lineTo(t+60+Math.cos(g)*(d-6),l+Math.sin(g)*(d-6)),s.stroke()}yf(s,t,n-120,n-112,10,10)})}function TC(s,t,n,a){const o=Math.cos(a*1.5);s.save(),s.translate(t,0),s.scale((o<0?-1:1)*(.42+.58*Math.abs(o)),1);const l=Math.sin(a*3)*3;yf(s,0,n-148+l,n-4,20,60+Math.sin(a*3)*6,Math.sin(a*1.5)*8),qn(s,0,n-148+l,24,9),s.fillRect(-4,n-166+l,8,14),qn(s,0,n-176+l,14,16),qn(s,0,n-195+l,12,9);for(let u=-2;u<=2;u++)qn(s,u*9,n-201+l-(2-Math.abs(u))*3,3.2);mi(s,[[12,n-196+l],[26,n-186+l],[28,n-168+l]],2);for(const u of[-1,1]){const f=a*2.2+(u>0?0:Math.PI*.6),d=[u*(58+Math.cos(f)*10),n-196+l-Math.sin(f)*30];mi(s,[[u*22,n-144+l],[u*(44+Math.sin(f)*6),n-160+l-Math.sin(f)*20],d],11);let p=d;for(let g=1;g<=11;g++){const _=[d[0]+u*g*9+Math.sin(f*1.3-g*.6)*g*3.2,d[1]-Math.sin(f-g*.5)*g*4+g*g*1.1];mi(s,[p,_],17-g),p=_}}lc(s,()=>{for(let u=0;u<3;u++)qn(s,0,n-120+l+u*22,4)}),s.restore()}function AC(s,t,n,a){const o=a%2.2/2.2,l=Sf((o-.25)/.6),u=Math.sin(Math.PI*l)*120,f=o<.25?Math.sin(o/.25*Math.PI)*12:0,d=Math.sin(Math.PI*l);s.save(),s.translate(t,n-78-u+f),s.rotate(mS(l)*Math.PI*2);for(const p of[-1,1])mi(s,[[p*9,0],[p*(14+d*6+f*.6),38-d*30-f],[p*12,74-d*50-f]],12),qn(s,p*16,78-d*50-f,9,5);s.beginPath(),s.moveTo(-18,-62),s.lineTo(18,-62),s.lineTo(24,6),s.lineTo(-24,6),s.closePath(),s.fill(),qn(s,0,-62,22,8),qn(s,0,-86,14,15),mi(s,[[-12,-92],[-30,-86+Math.sin(a*9)*4],[-42,-94+Math.sin(a*7)*6]],3);for(const p of[-1,1])mi(s,[[p*18,-58],[p*(40-d*14),-58+d*20-(1-d)*18],[p*(52-d*30),-78+d*50]],10);lc(s,()=>{s.lineWidth=2,s.beginPath(),s.moveTo(-14,-30),s.lineTo(14,-30),s.moveTo(-16,-14),s.lineTo(16,-14),s.stroke()}),s.restore()}function wC(s,t,n,a){const o=Math.abs(Math.sin(a*3.2))*16;s.save(),s.translate(t,n-o),s.rotate(Math.sin(a*3.2)*.08),yf(s,0,-120,-30,26,42);for(const d of[-1,1])mi(s,[[d*14,-34],[d*22,-16],[d*16,0]],11),qn(s,d*20,2,11,5);qn(s,0,-120,30,10),qn(s,0,-142,16,15),s.beginPath(),s.moveTo(-17,-150),s.quadraticCurveTo(-6,-200,22,-222),s.quadraticCurveTo(4,-190,17,-150),s.closePath(),s.fill(),qn(s,24,-224,7),lc(s,()=>s.fillRect(-6,-148,12,9)),mi(s,[[-24,-116],[-44,-96],[-26,-80]],10),mi(s,[[24,-116],[44,-100],[52,-120]],10),mi(s,[[52,-120],[66,-232]],4);const l=Math.sin(a*3.2+.8)*.3,u=88+Math.sin(l)*18,f=-192;mi(s,[[66,-232],[84,-226],[u,f-18]],2),qn(s,u,f,15,19),lc(s,()=>{s.lineWidth=1.6;for(const d of[-7,0,7])s.beginPath(),s.moveTo(u+d,f-14),s.lineTo(u+d,f+14),s.stroke()}),mi(s,[[u,f+18],[u,f+32]],3),s.restore()}function CC(s,t,n,a){s.save(),s.shadowBlur=16,s.shadowColor="rgba(27,17,12,0.8)",s.translate(t,n),s.rotate(.38+a),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-10,-22,-7,-46),s.lineTo(7,-46),s.quadraticCurveTo(10,-22,0,0),s.fill(),s.fillRect(-7,-58,14,12),s.fillRect(-5,-260,10,204),s.restore()}const RC=[{x:190,draw:EC},{x:420,draw:TC},{x:650,draw:AC},{x:860,draw:wC}];function DC(){const s=document.createElement("canvas");s.width=zs,s.height=Is;const t=s.getContext("2d"),n=document.createElement("canvas");n.width=zs,n.height=Is;const a=n.getContext("2d"),o=a.createRadialGradient(zs/2,Is*.62,40,zs/2,Is*.55,zs*.62);o.addColorStop(0,"#fff1cc"),o.addColorStop(.45,"#f3c27c"),o.addColorStop(1,"#8a4a1e"),a.fillStyle=o,a.fillRect(0,0,zs,Is);let l=7;const u=()=>(l=l*16807%2147483647)/2147483647;a.globalAlpha=.08,a.strokeStyle="#6b3b16",a.lineWidth=1;for(let d=0;d<280;d++){const p=u()*zs,g=u()*Is,_=10+u()*40,v=u()*Math.PI;a.beginPath(),a.moveTo(p,g),a.quadraticCurveTo(p+Math.cos(v)*_*.5+(u()-.5)*8,g+Math.sin(v)*_*.5,p+Math.cos(v)*_,g+Math.sin(v)*_),a.stroke()}function f(d){t.shadowBlur=0,t.drawImage(n,0,0),t.fillStyle=`rgba(60,25,5,${.07+.04*Math.sin(d*9.1)*Math.sin(d*3.3)})`,t.fillRect(0,0,zs,Is),t.fillStyle=lx,t.strokeStyle=lx,t.shadowColor="rgba(27,17,12,0.7)",t.shadowBlur=5;const p=mS((d-.2)/1.2);let g=null;if(p>0){const M=50+924*p,w=[],y=[];for(let S=50;S<=M;S+=8){const C=(S-50)/924,N=1.5+6*Math.pow(Math.sin(Math.PI*C),.5),A=Bl+8+Math.sin(S*.013)*3;w.push([S,A-N]),y.push([S,A+N*.8])}t.beginPath(),[...w,...y.reverse()].forEach(([S,C],N)=>N?t.lineTo(S,C):t.moveTo(S,C)),t.closePath(),t.fill(),p<1&&(g=[M,Bl+8])}RC.forEach((v,x)=>{const M=Sf((d-1.3-x*1.05)/.9);if(M<=0)return;const w=Bl+30-M*330;t.save(),t.beginPath(),t.rect(v.x-140,w,280,Is),t.clip(),v.draw(t,v.x,Bl,d),t.restore(),M<1&&(g=[v.x+Math.sin(d*22)*55*(1-M*.4),w+Math.cos(d*17)*8])});const _=Sf((d-5.4)/.9);!g&&_<1&&(g=d<5.4?null:[860+_*180,Bl-300-_*260]),g&&CC(t,g[0],g[1],Math.sin(d*20)*.12)}return{canvas:s,draw:f}}const Mf=s=>Math.min(1,Math.max(0,s)),Bs=s=>{const t=Mf(s);return t*t*(3-2*t)};function UC(s){return()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function gS(s,t){const n=s.getAttribute("position").count,a=new Float32Array(n*3);for(let o=0;o<n;o++)t.toArray(a,o*3);return s.setAttribute("color",new ye(a,3)),s}function w0(s,t,n,a){const u=[],f=[],d=[];for(let g=0;g<=8;g++)for(let _=0;_<=12;_++){const v=_/12*2-1,x=g/8*2-1,M=Math.min((1-Math.abs(x))*t/2,(1-Math.abs(v))*s/2)/(t/2);if(u.push(v*s/2,n*Math.pow(Math.min(1,M),1.5)+n*.25*Math.pow(Math.abs(v*x),5),x*t/2),f.push(_/12,g/8),_<12&&g<8){const w=g*13+_,y=w+12+1;d.push(w,y,w+1,w+1,y,y+1)}}const p=new Qe;return p.setAttribute("position",new Ce(u,3)),p.setAttribute("uv",new Ce(f,2)),p.setIndex(d),p.computeVertexNormals(),gS(p.toNonIndexed(),a)}function Up(s,t,n){const a=(o,l,u,f,d)=>gS(new ca(o,l,u).translate(0,f,0).toNonIndexed(),new Zt(d));return rS([a(.96,.08,.72,.04,n),a(.8,.42,.56,.29,t),w0(1.12,.86,.36,new Zt(s)).translate(0,.5,0)])}function Np(s,t,n,a){const o=new Tn(s,t,4,6).translate(0,t/2,0),l=o.getAttribute("position"),u=[],f=new Zt(n),d=new Zt(a),p=new Zt;for(let g=0;g<l.count;g++){const _=l.getX(g),v=l.getY(g)/t,x=.3+.7*Math.sin(Math.min(1,v*1.6)*Math.PI/2);l.setXYZ(g,_*x,l.getY(g)+Math.sin(_*60)*.004*v,(_/(s/2))**2*s*.3+Math.sin(v*Math.PI)*t*.1),p.lerpColors(f,d,Math.pow(Math.max(0,v),.8)).toArray(u,u.length)}return o.setAttribute("color",new Ce(u,3)),o.computeVertexNormals(),o}const NC=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,LC=`
  uniform vec3 uTop, uHorizon, uGlow, uMoon;
  uniform float uMoonSize, uMoonGain, uStars;
  varying vec3 vDirection;
  float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
  void main() {
    vec3 d = normalize(vDirection);
    float h = clamp(d.y, -0.3, 1.0);
    vec3 color = mix(uHorizon, uTop, smoothstep(-0.03, 0.5, h));
    color += uGlow * pow(1.0 - abs(h), 7.0);
    float m = dot(d, normalize(uMoon));
    float disc = smoothstep(cos(uMoonSize), cos(uMoonSize * 0.94), m);
    float mottle = 0.9 + 0.1 * sin(d.x * 900.0) * sin(d.y * 700.0 + d.z * 300.0);
    color += vec3(1.0, 0.93, 0.78) * disc * uMoonGain * mottle;
    color += vec3(0.7, 0.75, 0.9) * (pow(max(m, 0.0), 900.0) * 0.8 + pow(max(m, 0.0), 40.0) * 0.12) * min(1.0, uMoonGain);
    float star = step(0.9978, hash(floor(d * 300.0))) * smoothstep(0.04, 0.35, h) * uStars;
    color += vec3(0.8, 0.85, 1.0) * star * (1.0 - disc);
    gl_FragColor = vec4(color, 1.0);
  }`,PC=`
  attribute vec3 aColor;
  attribute float aSize, aOn, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    float on = aOn < 0.0 ? 1.0 : smoothstep(aOn, aOn + 0.7, uTime);
    vColor = aColor * on * (0.82 + 0.18 * sin(uTime * (5.0 + aSeed * 4.0) + aSeed * 40.0));
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on < 0.01 ? 0.0 : min(180.0, aSize * uScale / -mv.z * (0.5 + 0.5 * on));
  }`,C0=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`;function OC(s,t,n,a,o){const l=new nS({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(devicePixelRatio,1.6)),l.outputColorSpace=ni,l.toneMapping=cc,l.toneMappingExposure=1.1,l.domElement.setAttribute("aria-hidden","true"),l.domElement.style.cssText="width:100%;height:100%;display:block",s.appendChild(l.domElement);const u=new K0,f=new Tf(2763846,.0055);u.fog=f;const d=new bi(40,1,.05,1200),p=new iS(l);p.addPass(new aS(u,d));const g=new Mr(new Nt(256,256),.9,.55,.85);p.addPass(g),p.addPass(new sS);const _=new Set;let v=!1,x=!1,M=0,w=0,y=-1,S,C=()=>{};const N=P=>{P.preventDefault(),x=!1,C(),n()},A=()=>{if(v)return;v=!0,S==null||S.disconnect(),l.setAnimationLoop(null),document.removeEventListener("visibilitychange",C),l.domElement.removeEventListener("webglcontextlost",N);const P=new Set;u.traverse(D=>{const O=D;O.geometry&&!(D instanceof Af)&&O.geometry.dispose(),O.material&&[].concat(O.material).forEach(E=>P.add(E))}),P.forEach(D=>D.dispose()),_.forEach(D=>D.dispose()),g.dispose(),p.dispose(),l.dispose(),l.forceContextLoss(),l.domElement.remove()};try{const P=UC(a),D={uTime:{value:0},uScale:{value:1}},O=($,wt=0,Yt=0,Bt=0)=>{const Qt=new mr;return Qt.position.set(wt,Yt,Bt),$.add(Qt),Qt},E=($,wt,Yt,Bt=0,Qt=0,Dt=0)=>{const et=new vn($,wt);return et.position.set(Bt,Qt,Dt),Yt.add(et),et},z=($,wt,[Yt,Bt,Qt],[Dt,et,gt])=>E(new ca(Dt,et,gt),wt,$,Yt,Bt,Qt),F=$=>{const wt=new Nx($);return wt.colorSpace=ni,_.add(wt),wt},q=($,wt={})=>new Nf({color:$,...wt}),Z=new Sn({color:329483,side:ln}),it=($,wt)=>{const Yt=new Qe,Bt=new Float32Array(wt.length*3),Qt=new Float32Array(wt.length*3),Dt=new Float32Array(wt.length),et=new Float32Array(wt.length),gt=new Float32Array(wt.length);wt.forEach(([At,Ct,Ft,Ot],It)=>{Bt.set(At,It*3),Ct.toArray(Qt,It*3),Dt[It]=Ft,et[It]=Ot,gt[It]=P()}),Yt.setAttribute("position",new ye(Bt,3)),Yt.setAttribute("aColor",new ye(Qt,3)),Yt.setAttribute("aSize",new ye(Dt,1)),Yt.setAttribute("aOn",new ye(et,1)),Yt.setAttribute("aSeed",new ye(gt,1));const Et=new Sr(Yt,new fn({uniforms:D,vertexShader:PC,fragmentShader:C0,blending:vr,transparent:!0,depthWrite:!1}));return Et.frustumCulled=!1,$.add(Et),Et},Y=($,wt=16753228)=>new Zt(wt).multiplyScalar($),tt=($,[wt,Yt,Bt],Qt=1)=>{const Dt=O($,wt,Yt,Bt);Dt.scale.setScalar(Qt);const et=new si({color:13123626,emissive:16734756,emissiveIntensity:1.8,roughness:.6}),gt=new si({color:9071156,roughness:.5,metalness:.4});return E(new Xn(1,16,12),et,Dt).scale.set(.22,.27,.22),E(new Cn(.12,.12,.05,12),gt,Dt,0,.27,0),E(new Cn(.12,.12,.05,12),gt,Dt,0,-.27,0),E(new Cn(.008,.008,.6,4),gt,Dt,0,.58,0),E(new Cn(.03,.005,.28,6),et,Dt,0,-.43,0),Dt},H=$=>{const wt=new es($.map(([,Qt])=>new G(...Qt)),!1,"centripetal"),Yt=new es($.map(([,,Qt])=>new G(...Qt)),!1,"centripetal"),Bt=new G;return Qt=>{const Dt=$[0][0],et=$[$.length-1][0],gt=Dt+(et-Dt)*Bs((Qt-Dt)/(et-Dt));let Et=0;for(;Et<$.length-2&&gt>$[Et+1][0];)Et++;const At=(Et+Mf((gt-$[Et][0])/($[Et+1][0]-$[Et][0])))/($.length-1);d.position.copy(wt.getPoint(At)),d.lookAt(Yt.getPoint(At,Bt))}},V=new fn({uniforms:{uTop:{value:new Zt},uHorizon:{value:new Zt},uGlow:{value:new Zt},uMoon:{value:new G},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:NC,fragmentShader:LC,side:jn,depthWrite:!1,fog:!1}),ht=E(new Xn(500,48,24),V,u);ht.renderOrder=-1,ht.frustumCulled=!1,u.add(new Wx(8228799,2760476,.55));const at=new uc(11124198,1.1);u.add(at,at.target);const mt=new G;let I;const xt=o({scene:u,camera:d,rand:P,shared:D,ink:Z,group:O,mesh:E,box:z,lambert:q,canvasTexture:F,glows:it,warm:Y,lantern:tt,path:H,setEnv:$=>{$!==I&&(I=$,V.uniforms.uTop.value.setHex($.top),V.uniforms.uHorizon.value.setHex($.horizon),V.uniforms.uGlow.value.setHex($.glow),mt.set($.moon[0],$.moon[1],$.moon[2]).normalize(),V.uniforms.uMoon.value.copy(mt),V.uniforms.uMoonSize.value=$.moonSize,V.uniforms.uMoonGain.value=$.moonGain,V.uniforms.uStars.value=$.stars,g.strength=$.bloom,f.color.setHex($.fog),f.density=$.density,at.intensity=$.moon[1]>0?1.1:.15)},portrait:()=>d.aspect<.9}),zt=()=>{D.uTime.value=M,xt(M),at.position.copy(d.position).addScaledVector(mt,100),at.target.position.copy(d.position),ht.position.copy(d.position),p.render()},Vt=40,qt=()=>{if(v)return;const{width:$,height:wt}=s.getBoundingClientRect(),Yt=Math.max(1,$),Bt=Math.max(1,wt);l.setSize(Yt,Bt,!1),p.setPixelRatio(l.getPixelRatio()),p.setSize(Yt,Bt),d.aspect=Yt/Bt;const Qt=2*Math.atan(Math.tan(ai.degToRad(Vt)/2)*1.6);d.fov=Math.min(75,Math.max(Vt,ai.radToDeg(2*Math.atan(Math.tan(Qt/2)/d.aspect)))),d.updateProjectionMatrix(),D.uScale.value=Bt*l.getPixelRatio()/(2*Math.tan(ai.degToRad(d.fov)/2)),zt()},ot=$=>{w&&x&&!document.hidden&&(M=Math.min(Sa,M+Math.min(($-w)/1e3,.1))),w=$,zt(),Math.floor(M*12)!==y&&(y=Math.floor(M*12),t(M)),M>=Sa&&(x=!1,l.setAnimationLoop(null))};return C=()=>{w=0,l.setAnimationLoop(x&&!document.hidden?ot:null)},S=new ResizeObserver(qt),S.observe(s),document.addEventListener("visibilitychange",C),l.domElement.addEventListener("webglcontextlost",N),qt(),{setPlaying($){x=$,C()},seek($){M=ai.clamp($,0,Sa),t(M),zt(),C()},replay(){M=0,t(0),zt(),C()},dispose:A}}catch(P){throw A(),P}}const hi={shadow:400,gate:800,glyph:1200},zC=[{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:329483,horizon:1314315,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:.6,stars:.3,fog:723208,density:.02},{top:858673,horizon:4082280,glow:0,moon:[0,.075,-1],moonSize:.07,moonGain:1.05,bloom:.5,stars:.6,fog:3029590,density:.016},{top:197899,horizon:724506,glow:1575942,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:1,stars:1,fog:197899,density:0}],IC=`
  attribute vec3 aColor, aDirection;
  attribute float aLength, aSpeed, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    vec3 p = position + aDirection * mod(aSeed * aLength + uTime * aSpeed, aLength);
    p.y += sin(uTime * 4.0 + aSeed * 30.0) * 0.05;
    vColor = aColor * (0.85 + 0.15 * sin(uTime * 6.0 + aSeed * 50.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, 0.5 * uScale / -mv.z);
  }`,BC=`
  attribute vec3 aStart, aColor;
  attribute vec2 aGlyph;
  attribute float aCluster, aSeed;
  uniform float uTime, uScale, uCols, uSpacing, uSmall, uBig;
  varying vec3 vColor;
  void main() {
    float s = uTime - 29.0;
    vec3 drift = aStart + vec3(sin(aSeed * 20.0 + uTime * 0.6) * 0.5, s * 1.4, cos(aSeed * 13.0 + uTime * 0.5) * 0.5);
    float rows = 10.0 / uCols, column = mod(aCluster, uCols), row = floor(aCluster / uCols);
    vec3 center = vec3((column - (uCols - 1.0) * 0.5) * uSpacing, ((rows - 1.0) * 0.5 - row) * uSpacing * 1.08, 0.0);
    vec3 ten = center + vec3(aGlyph * uSmall, (aSeed - 0.5) * 0.5);
    vec3 one = vec3(aGlyph * uBig, (aSeed - 0.5) * 1.6);
    float gather = smoothstep(0.0, 1.0, clamp((s - 0.5 - aSeed * 1.1) / 1.7, 0.0, 1.0));
    float merge = smoothstep(0.0, 1.0, clamp((s - 3.5 - aSeed * 0.7) / 1.8, 0.0, 1.0));
    vec3 p = mix(mix(drift, ten, gather), one, merge);
    p += vec3(sin(uTime * 2.0 + aSeed * 50.0), cos(uTime * 1.7 + aSeed * 31.0), 0.0) * 0.03 * (1.0 + merge * 2.0);
    float pulse = 1.0 + 0.5 * exp(-pow((s - 6.0) * 2.2, 2.0));
    vColor = aColor * (0.6 + 0.5 * gather + 0.35 * merge) * pulse * (0.8 + 0.2 * sin(uTime * 3.0 + aSeed * 60.0));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(48.0, mix(0.34, 0.22, gather) * uScale / -mv.z);
  }`,FC=`
  uniform float uTime, uHit;
  varying vec2 vUv;
  void main() {
    vec2 p = vUv - 0.5, hit = vec2(-0.12, 0.05), moon = vec2(0.05, 0.13);
    float dt = uTime - uHit, r = length(p - hit), wave = 0.0;
    if (dt > 0.0) wave = sin(r * 95.0 - dt * 10.0) * exp(-dt * 0.8) * (1.0 - smoothstep(dt * 0.22, dt * 0.22 + 0.03, r)) * exp(-r * 3.0);
    vec2 q = p + normalize(p - hit + 1e-4) * wave * 0.014;
    float m = length(q - moon);
    vec3 color = vec3(0.09, 0.02, 0.015) + vec3(1.0, 0.9, 0.72) * (1.0 - smoothstep(0.1, 0.115, m)) * 1.25 + vec3(0.45, 0.4, 0.35) * exp(-m * 9.0) * 0.4;
    color += vec3(0.3, 0.2, 0.1) * max(wave, 0.0);
    gl_FragColor = vec4(color, 1.0 - smoothstep(0.46, 0.5, length(p)));
  }`;function HC(s,t,n){return OC(s,t,n,20260925,({scene:a,camera:o,rand:l,shared:u,ink:f,group:d,mesh:p,box:g,lambert:_,canvasTexture:v,glows:x,warm:M,lantern:w,path:y,setEnv:S,portrait:C})=>{const N=d(a);p(new Tn(1400,1400).rotateX(-Math.PI/2),_(1185053),N);const A=[];for(let R=-9;R<=9;R++)for(let k=-10;k<=2;k++){const ct=R*16,Q=k*16;if(!(R===0&&Q>-40)&&!(Math.abs(R)<=2&&Q<=-36))for(const Mt of[-3.25,3.25])for(const ie of[-3.25,3.25]){if(l()>.82)continue;const _e=4+l()*2.2,Ne=l()<.06;A.push({x:ct+Mt+(l()-.5),z:Q+ie+(l()-.5),w:_e,h:_e*(.75+l()*.3)*(Ne?1.45:1),d:_e*(.7+l()*.15),stage:Ne})}}const P=_(16777215,{vertexColors:!0,side:ln}),D=new Ii(Up(1712691,3352095,3816773),P,A.length),O=new qe,E=new Zt;A.forEach((R,k)=>{O.makeScale(R.w,R.h,R.d).setPosition(R.x,0,R.z),D.setMatrixAt(k,O),D.setColorAt(k,E.setScalar(.8+l()*.4))}),N.add(D);const z=Up(7163936,5904660,9342870),F=new Ii(z,P,4);[[0,6,-38,28],[0,2.4,-64,30],[0,2.4,-88,20],[0,2.4,-112,32]].forEach(([R,k,ct,Q],Mt)=>{F.setMatrixAt(Mt,O.makeScale(Q,Q*.85,Q*.72).setPosition(R,k,ct))}),N.add(F);const q=_(5117716),Z=_(8224648);g(N,q,[0,3,-38],[34,6,10]);for(const R of[-64,-88,-112])g(N,Z,[0,1.2,R],[40,2.4,26]);for(const R of[-38,38])g(N,q,[R,3,-86],[1.2,6,96]);g(N,q,[0,3,-134],[77,6,1.2]),[[-430,1777718,60],[-360,2304066,36]].forEach(([R,k,ct])=>{const Q=new Ji;Q.moveTo(-900,-40);for(let Mt=-900;Mt<=900;Mt+=30)Q.lineTo(Mt,8+ct*(.5+.3*Math.sin(Mt*.011+R)+.2*Math.sin(Mt*.031)));Q.lineTo(900,-40),p(new Df(Q),new Sn({color:k,fog:!1}),N,0,0,R)});const it=[];for(const R of A){const k=Math.hypot(R.x,R.z+60);for(const Q of[-.2,.2])l()<.55&&it.push([[R.x+Q*R.w,.3*R.h,R.z+.3*R.d],M(.45+l()*.3,16758896),.9,-1]);if(!R.stage)continue;const ct=1.4+k/180*4.2+l()*.4;for(let Q=0;Q<6;Q++)it.push([[R.x+(Q/5-.5)*.8*R.w,.46*R.h,R.z+.46*R.d],M(2.6,16742970),.55,ct+Q*.05]);it.push([[R.x,.3*R.h,R.z+.6*R.d],M(.35),16,ct])}for(let R=0;R<12;R++)for(const k of[-6,6])it.push([[k,1.6,30-R*6],M(2.2,16734762),.5,.9+(12-R)*.08]);for(let R=0;R<9;R++)it.push([[(R-4)*3.2,7.5,-32.5],M(2.4,16736304),.6,.6]);x(N,it);{const k=new Qe,ct=new Float32Array(3200*3),Q=new Float32Array(3200*3),Mt=new Float32Array(3200*3),ie=new Float32Array(3200),_e=new Float32Array(3200),Ne=new Float32Array(3200),In=[16752714,16741176,16762496];for(let Ee=0;Ee<3200;Ee++){const je=l()<.5?1:-1;if(Ee<1500)ct.set([(l()-.5)*9,1,je>0?-34:50],Ee*3),Q.set([0,0,je],Ee*3),ie[Ee]=84;else if(l()<.5){const Me=(Math.floor(l()*18)-9)*16+8+(l()-.5)*2;ct.set([Me,1,je>0?-168:40],Ee*3),Q.set([0,0,je],Ee*3),ie[Ee]=208}else{const Me=(Math.floor(l()*13)-10)*16+8+(l()-.5)*2;ct.set([je>0?-152:152,1,Me],Ee*3),Q.set([je,0,0],Ee*3),ie[Ee]=304}new Zt(In[Ee%3]).multiplyScalar(1.1+l()*.9).toArray(Mt,Ee*3),_e[Ee]=1+l()*1.2,Ne[Ee]=l()}k.setAttribute("position",new ye(ct,3)),k.setAttribute("aDirection",new ye(Q,3)),k.setAttribute("aColor",new ye(Mt,3)),k.setAttribute("aLength",new ye(ie,1)),k.setAttribute("aSpeed",new ye(_e,1)),k.setAttribute("aSeed",new ye(Ne,1));const _n=new Sr(k,new fn({uniforms:u,vertexShader:IC,fragmentShader:C0,blending:vr,transparent:!0,depthWrite:!1}));_n.frustumCulled=!1,N.add(_n)}{const R=document.createElement("canvas");R.width=R.height=256;const k=R.getContext("2d");for(let Q=0;Q<14;Q++){const Mt=60+l()*136,ie=90+l()*76,_e=30+l()*60,Ne=k.createRadialGradient(Mt,ie,0,Mt,ie,_e);Ne.addColorStop(0,"rgba(255,255,255,0.35)"),Ne.addColorStop(1,"rgba(255,255,255,0)"),k.fillStyle=Ne,k.fillRect(0,0,256,256)}const ct=new J0({map:v(R),color:5924240,transparent:!0,opacity:.42,depthWrite:!1,fog:!1});for(let Q=0;Q<16;Q++){const Mt=new Af(ct);Mt.position.set((l()-.5)*170,55+l()*55,-30+l()*170),Mt.scale.set(50+l()*50,22+l()*18,1),N.add(Mt)}}const Y=d(N,0,16,52),tt=_(3806482),H=_(2824724);g(Y,H,[0,-.1,.5],[8,.2,5]),g(Y,tt,[0,.92,-1.3],[7.4,.07,.08]),g(Y,tt,[0,.12,-1.3],[7.4,.07,.08]);for(let R=-3.6;R<=3.61;R+=.4)g(Y,tt,[R,.52,-1.3],[.045,.8,.045]);for(const R of[-3.7,3.7])g(Y,tt,[R,2.2,-1.3],[.2,4.6,.2]);g(Y,tt,[0,4.4,-1.3],[7.8,.25,.22]),g(Y,H,[0,.77,.5],[1.7,.06,1]);for(const R of[-.75,.75])for(const k of[.1,.9])g(Y,H,[R,.37,k],[.06,.74,.06]);const V=new si({color:9418918,roughness:.25,side:ln}),ht=p(new Uo([[0,0],[.03,0],[.035,.008],[.06,.03],[.075,.062],[.071,.064]].map(([R,k])=>new Nt(R,k)),32),V,Y,.35,.8,.55),at=new fn({uniforms:{uTime:u.uTime,uHit:{value:13.4}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:FC,transparent:!0});p(new wf(.068,48).rotateX(-Math.PI/2),at,ht,0,.05,0);const mt=p(new Uo([[0,0],[.06,0],[.085,.03],[.1,.1],[.085,.2],[.05,.27],[.042,.3],[.055,.33]].map(([R,k])=>new Nt(R,k)),48),new si({color:2902630,roughness:.3}),Y,-.15,.8,.28);p(new Cn(.008,.01,.2,5),_(2637854),mt,0,.42,0);const I=_(3099174,{side:ln});for(const[R,k]of[[.6,.4],[2.6,.44],[4.4,.37]]){const ct=p(new Xn(1,8,6),I,mt,Math.cos(R)*.09,k,Math.sin(R)*.09);ct.scale.set(.1,.012,.04),ct.rotation.set(0,-R,-.4)}const st=d(mt,0,.5,0);st.scale.setScalar(1.4);const xt=new si({vertexColors:!0,roughness:.55,side:ln,emissive:3803154}),zt=[{n:6,r:.01,w:.05,h:.06},{n:9,r:.025,w:.08,h:.09},{n:12,r:.04,w:.1,h:.11},{n:14,r:.055,w:.12,h:.12}],Vt=new Ii(Np(1,1,6949922,16098228),xt,zt.reduce((R,k)=>R+k.n,0));st.add(Vt),p(new Xn(.025,10,8),new si({color:15253578,emissive:5913096}),st);const qt=new la(0,0,0,"YXZ"),ot=new Gs,$=new G,wt=new G,Yt=R=>{let k=0;zt.forEach((ct,Q)=>{for(let Mt=0;Mt<ct.n;Mt++){const ie=Mt/ct.n*Math.PI*2+Q*.7,_e=ai.lerp(.12+Q*.08,.3+Q*.38,R);$.set(-Math.sin(ie)*ct.r,0,-Math.cos(ie)*ct.r),ot.setFromEuler(qt.set(-_e,ie,0)),Vt.setMatrixAt(k++,O.compose($,ot,wt.set(ct.w,ct.h,ct.w)))}}),Vt.instanceMatrix.needsUpdate=!0},Bt=p(Np(.08,.1,11546698,16098228),xt,Y);w(Y,[-1.5,2.3,.1],.9);const Qt=new ja(16752720,3,9,1.6);Qt.position.set(-1.5,2.2,.3),Y.add(Qt),p(new Cn(.018,.02,.14,12),_(15326400),Y,.12,.87,.12),p(new Cf(.008,.03,8),new Sn({color:new Zt(16765066).multiplyScalar(3)}),Y,.12,.965,.12);const Dt=new ja(16757864,1.4,3,1.4);Dt.position.set(.12,1,.16),Y.add(Dt),x(Y,[[[-1.5,2.3,.1],M(.9),2.2,-1],[[.12,.97,.12],M(1.4,16760944),.12,-1]]);const et=d(a,hi.shadow),gt=DC(),Et=v(gt.canvas);p(new Tn(40,40).rotateX(-Math.PI/2),_(1445901),et);const At=new Sn({map:Et,fog:!1});At.color.setRGB(1.08,1,.9),p(new Tn(7.2,4.05),At,et,0,2.55,0);const Ct=_(3808532);for(const R of[-3.72,3.72])g(et,Ct,[R,2.6,0],[.22,5.2,.2]);g(et,Ct,[0,4.66,0],[7.8,.22,.22]),g(et,Ct,[0,.52,0],[7.8,.12,.22]),g(et,_(2757646),[0,.24,.02],[7.6,.46,.14]),p(w0(8.8,1.6,.55,new Zt(1711140)),_(16777215,{vertexColors:!0,side:ln}),et,0,4.78,0);for(const R of[-4.4,4.4])w(et,[R,3.9,.3]);x(et,[[[-4.4,3.9,.3],M(1.2),3,-1],[[4.4,3.9,.3],M(1.2),3,-1]]);const Ft=new ja(16761466,9,14,1.4);Ft.position.set(0,2.5,1.2),et.add(Ft);const Ot=[];for(const[R,k]of[[-1.95,6.8],[-.7,7],[.65,6.8],[1.9,6.9],[-1.3,5],[1.3,5.1]]){const ct=d(et,R,0,k);p(new Xn(1,16,12),f,ct,0,1.2,0).scale.set(.3,.36,.22),p(new Cn(.06,.07,.14,8),f,ct,0,1.52,0);const Q=d(ct,0,1.64,0);p(new Xn(.13,16,12),f,Q),p(new Xn(.137,16,8,0,Math.PI*2,0,Math.PI/2),f,Q,0,.03,0),p(new Xn(.025,8,6),f,Q,0,.17,0),p(new Cn(.018,.01,.6,5),f,Q,0,-.32,.13).rotation.x=.12,Ot.push(Q)}const It=d(a,hi.gate);p(new Tn(80,80).rotateX(-Math.PI/2),_(2764083),It);const le=new Ji([new Nt(-9,0),new Nt(9,0),new Nt(9,5.4),new Nt(-9,5.4)]),X=new gf;X.absarc(0,2.55,2.25,0,Math.PI*2,!0),le.holes.push(X),p(new Do(le,{depth:.5,bevelEnabled:!1,curveSegments:72}).translate(0,0,-.25),_(14208959),It);for(const R of[-4.95,4.95])g(It,_(4672080),[R,.22,0],[8.1,.44,.56]);const pe=_(3882564);for(const R of[.26,-.26])p(new Uf(2.3,.08,8,72),pe,It,0,2.55,R);p(w0(19,1.2,.4,new Zt(2106414)),_(16777215,{vertexColors:!0,side:ln}),It,0,5.4,0);const ve=new vn(Up(1382946,1841690,2237738),_(16777215,{vertexColors:!0,side:ln}));ve.position.set(-3.2,0,-16),ve.scale.set(7,6,5),It.add(ve),p(new Rf(1),f,It,-2.6,.7,-5.5).scale.set(1.2,1.5,.9);const B=[];for(let R=0;R<9;R++){const k=2.2+l()*2.6,ct=-3-l()*4,Q=6.5+l()*2;p(new Cn(.04,.06,Q,6),f,It,k,Q/2,ct).rotation.z=(l()-.5)*.1;for(let Mt=0;Mt<30;Mt++)ot.setFromEuler(qt.set(l()*2-1,l()*Math.PI*2,.6+l()*.9)),B.push(new qe().compose($.set(k+(l()-.5)*1.2,3+l()*(Q-3),ct+(l()-.5)*1.2),ot,wt.set(1,1,1)))}const T=new Ii(new Tn(.4,.06),f,B.length);B.forEach((R,k)=>T.setMatrixAt(k,R)),It.add(T);const nt=new es([[4.8,5.7,.35],[3.7,5.3,.45],[2.6,5,.5],[1.6,4.95,.55],[.7,4.6,.6],[0,4.15,.62]].map(([R,k,ct])=>new G(R,k,ct)));p(new No(nt,48,.045,6),f,It);const lt=[];for(const[R,k]of[[.3,[2.9,4.4,.6]],[.55,[1.8,5.5,.5]],[.75,[.9,4.2,.7]]]){const ct=nt.getPoint(R),Q=new es([ct,ct.clone().lerp(new G(...k),.5).add(new G(0,.12,0)),new G(...k)]);p(new No(Q,12,.02,5),f,It);for(let Mt=0;Mt<6;Mt++)lt.push([Q.getPoint(.2+Mt*.15).add(new G((l()-.5)*.1,(l()-.5)*.1,0)).toArray(),new Zt(16766172).multiplyScalar(.8),.14,-1])}for(let R=0;R<26;R++)lt.push([nt.getPoint(l()).add(new G((l()-.5)*.14,(l()-.5)*.14,.05)).toArray(),new Zt(16766172).multiplyScalar(.7+l()*.4),.13,-1]);for(const R of[-3.6,3.6]){w(It,[R,3.7,.6]),lt.push([[R,3.7,.6],M(.9),1.1,-1]);const k=new ja(16752720,9,9,1.5);k.position.set(R,3.6,.9),It.add(k),g(It,f,[R,4.35,.42],[.05,.05,.4])}lt.push([[0,.8,-6],new Zt(10466520).multiplyScalar(.16),8,-1]);const bt=new uc(9084104,.6);bt.position.set(-4,7,12),It.add(bt,bt.target),x(It,lt);const Ht=new Ii(Np(.05,.06,14195366,16769766),new Sn({vertexColors:!0,side:ln}),90),kt=Array.from({length:90},()=>[l(),l(),l(),l()]);It.add(Ht);const _t=R=>{const k=new Ji;return k.moveTo(R[0][0],R[0][1]),k.splineThru(R.slice(1).map(([ct,Q])=>new Nt(ct,Q))),k.closePath(),k},yt=R=>new Ji(R.map(([k,ct])=>new Nt(k,ct))),Gt=(R,k,ct)=>{const Q=new Ji;return Q.absarc(R,k,ct,0,Math.PI*2,!1),Q},$t=(R,k)=>p(new Do(R,{depth:.04,bevelEnabled:!1,curveSegments:16}),f,k);function Jt(R,k,ct,Q){const Mt=d(It,...ct);Mt.scale.x=Q,$t([_t(R)],Mt);const ie=d(Mt,0,.95,0);return $t(k,ie),{root:Mt,torso:ie}}const Kt=Jt([[-.15,.97],[-.2,.6],[-.27,.15],[-.31,.01],[0,0],[.3,.01],[.26,.2],[.18,.6],[.14,.97]],[_t([[-.16,0],[-.19,.25],[-.15,.45],[-.06,.53],[.06,.52],[.14,.44],[.16,.2],[.14,0]]),yt([[-.04,.5],[.06,.5],[.06,.62],[-.04,.62]]),Gt(.02,.7,.105),yt([[.11,.73],[.145,.685],[.11,.665]]),yt([[-.1,.75],[-.1,.9],[.1,.9],[.12,.76]]),yt([[-.1,.87],[-.24,.6],[-.21,.58],[-.08,.8]]),_t([[-.02,.45],[.12,.4],[.28,.28],[.34,.18],[.3,.08],[.18,.04],[.06,.14],[-.04,.3]]),Gt(.35,.23,.045)],[-2.7,0,1.4],1),ce=Jt([[-.13,.97],[-.17,.6],[-.25,.12],[-.28,.01],[0,0],[.27,.01],[.22,.2],[.15,.6],[.12,.97]],[_t([[-.13,0],[-.16,.25],[-.12,.44],[-.05,.5],[.05,.5],[.12,.43],[.14,.2],[.12,0]]),yt([[-.035,.47],[.045,.47],[.045,.6],[-.035,.6]]),Gt(.02,.67,.095),yt([[.1,.7],[.13,.66],[.1,.645]]),Gt(-.08,.74,.07),Gt(0,.78,.06),yt([[-.15,.8],[.07,.865],[.075,.845],[-.15,.782]]),yt([[-.145,.79],[-.175,.58],[-.158,.58],[-.13,.78]]),_t([[-.01,.44],[.1,.38],[.2,.2],[.24,-.1],[.25,-.42],[.17,-.47],[.13,-.12],[.06,.18],[-.03,.3]])],[1,0,-1.2],-1),fe=d(a,hi.glyph),me={uTime:u.uTime,uScale:u.uScale,uCols:{value:5},uSpacing:{value:6.8},uSmall:{value:5.2},uBig:{value:21}};{const R=document.createElement("canvas");R.width=R.height=200;const k=R.getContext("2d",{willReadFrequently:!0});k.fillStyle="#fff",k.textAlign="center",k.textBaseline="middle",k.font='bold 176px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif',k.fillText("情",100,104);const ct=k.getImageData(0,0,200,200).data,Q=[];for(let Me=0;Me<200;Me+=1)for(let De=0;De<200;De+=1)ct[(Me*200+De)*4+3]>128&&Q.push([De,Me]);if(!Q.length)for(let Me=0;Me<400;Me++)Q.push([40+l()*120,40+l()*120]);const Mt=7e3,ie=new Qe,_e=new Float32Array(Mt*3),Ne=new Float32Array(Mt*2),In=new Float32Array(Mt*3),_n=new Float32Array(Mt),Ee=new Float32Array(Mt);for(let Me=0;Me<Mt;Me++){const[De,xn]=Q[Math.floor(l()*Q.length)];Ne.set([(De+l())/200-.5,.5-(xn+l())/200],Me*2),_e.set([(l()-.5)*70,-24+l()*22,-l()*26+6],Me*3),new Zt(l()<.12?16734778:l()<.5?16760944:16752714).toArray(In,Me*3),_n[Me]=Me%10,Ee[Me]=l()}ie.setAttribute("position",new ye(_e,3)),ie.setAttribute("aStart",new ye(_e,3)),ie.setAttribute("aGlyph",new ye(Ne,2)),ie.setAttribute("aColor",new ye(In,3)),ie.setAttribute("aCluster",new ye(_n,1)),ie.setAttribute("aSeed",new ye(Ee,1));const je=new Sr(ie,new fn({uniforms:me,vertexShader:BC,fragmentShader:C0,blending:vr,transparent:!0,depthWrite:!1}));je.frustumCulled=!1,fe.add(je)}const K=document.createElement("canvas");K.width=K.height=128;{const R=K.getContext("2d");R.fillStyle="#a3261c",R.fillRect(6,6,116,116),R.fillStyle="#f4e3c4",R.textAlign="center",R.textBaseline="middle",R.font='bold 50px "KaiTi", "STKaiti", "Noto Serif SC", serif',R.fillText("品",64,38),R.fillText("花",64,92)}const Xt=new Sn({map:v(K),transparent:!0,opacity:0,fog:!1}),Rt=p(new Tn(1.8,1.8),Xt,fe,0,0,1),Wt=[y([[0,[0,112,150],[0,70,-200]],[3.5,[0,78,118],[0,24,-100]],[7,[0,40,88],[0,4,-70]]]),y([[7,[2.2,18.6,60],[0,8,-80]],[10,[1.2,17.9,55.8],[-.2,14,-20]],[12.4,[.45,17.75,54],[.05,17.22,52.42]],[15,[.45,17.1,52.95],[.35,16.84,52.55]]]),y([[15,[hi.shadow+.5,1.7,11],[hi.shadow,2.3,0]],[18.5,[hi.shadow+.2,1.95,8.2],[hi.shadow,2.45,0]],[22,[hi.shadow,2.55,5.7],[hi.shadow,2.55,0]]]),y([[22,[hi.gate+.4,1.95,10.4],[hi.gate-.35,2.1,0]],[29,[hi.gate,2.05,7.4],[hi.gate,2.35,0]]])],te=[N,N,et,It,fe];return R=>{const k=bC(R);for(const Q of[N,et,It,fe])Q.visible=Q===te[k];Y.visible=k===1,S(zC[k]);const ct=C();if(k<4)Wt[k](R);else{const Q=Mf((R-A0[4].start)/7),Mt=(ct?58:44)-Bs(Q)*8;o.position.set(hi.glyph+Math.sin(Q*1.4)*3,.6,Mt),o.lookAt(hi.glyph,0,0)}if(k===1){Yt(Bs((R-8.2)/3.8));const Q=Mf((R-12.2)/1.2);Bt.visible=R>12.2;const Mt=Math.max(0,R-13.4);Bt.position.set(ai.lerp(-.13,.334,Bs(Q))+Math.sin(Q*9)*.05*(1-Q)+Mt*.004,ai.lerp(1.34,.852,Q*Q),ai.lerp(.3,.543,Q)+Math.cos(Q*7)*.04*(1-Q)),Bt.rotation.set(Q<1?Q*8:-Math.PI/2,Q*5+Mt*.2,Q<1?Math.sin(Q*11):0)}if(k===2&&(gt.draw(R-15),Et.needsUpdate=!0,Ot.forEach((Q,Mt)=>{Q.rotation.y=Math.sin(R*.7+Mt*1.9)*.35*Math.max(0,Math.sin(R*.4+Mt))})),k===3){const Q=(Mt,ie)=>ie*Bs((R-Mt)/1.1)*(1-Bs((R-Mt-2.2)/1.2));Kt.torso.rotation.z=-Q(23,.55),ce.torso.rotation.z=-Q(24.3,.38),ce.root.position.y=-Q(24.3,.05),kt.forEach(([Mt,ie,_e,Ne],In)=>{const _n=(R*(.3+_e*.3)+Ne*6)%5.4;$.set(-.8+Mt*4.6-_n*.35+Math.sin(R*1.3+Ne*10)*.15,5.3-_n,-1+ie*2.4),ot.setFromEuler(qt.set(R*(1+Mt)+Ne*6,R*.7+ie*6,R*(.5+_e))),Ht.setMatrixAt(In,O.compose($,ot,wt.set(1,1,1)))}),Ht.instanceMatrix.needsUpdate=!0}if(k===4){const Q=me.uBig.value;me.uCols.value=ct?2:5,Rt.position.set(Q*.42,-Q*.42,1),Xt.opacity=Bs((R-34.4)/.5),Rt.scale.setScalar(1+.4*(1-Bs((R-34.4)/.35)))}}})}const cx=[{id:"cinematic",name:"The gilded capital",tag:"01 / CINEMATIC GAME",description:"Lacquer, porcelain and warm light. Physical materials, soft shadows and a cinematic dusk."},{id:"monet",name:"An impression of feeling",tag:"02 / MONET INSPIRED",description:"Lavender shadows, apricot skies and broken colour. The city dissolves into moving brushstrokes."},{id:"cyberpunk",name:"Electric dreams",tag:"03 / CYBERPUNK CITY",description:"Neon theatres beneath a vertical city. Cyan windows, magenta signs and rain in the night."},{id:"inkwash",name:"Ink and atmosphere",tag:"04 / EXISTING INK WASH",description:"The current film, unchanged: flowing ink, pale paper, soft washes and vermilion accents."},{id:"archive",name:"The lantern-lit original",tag:"05 / ARCHIVE · 3d35dc54",description:"The original scene and renderer from commit 3d35dc54: a moonlit capital, warm lanterns and luminous particles."}];function GC(){const s=Li.useRef([]),t=Li.useRef([]),[n,a]=Li.useState(0),[o,l]=Li.useState(!1),[u,f]=Li.useState(!1),[d,p]=Li.useState([]),[g,_]=Li.useState(null),[v,x]=Li.useState("en"),[M,w]=Li.useState(!0),y=Li.useRef(!1);Li.useEffect(()=>{document.title="Five ways of feeling · Precious Vibe";let D=!1;const O=E=>{D||(p(z=>[...new Set([...z,E])]),t.current.forEach(z=>z.setPlaying(!1)),y.current=!1,l(!1))};try{cx.forEach((E,z)=>{const F=s.current[z],q=E.id==="archive"?HC(F,()=>{},()=>O(E.name)):E.id==="inkwash"?vC(F,hr,()=>{},()=>O(E.name)):MC(E.id)(F,hr,()=>{},()=>O(E.name));t.current.push(q),q.seek(3.5)}),a(3.5),f(!0)}catch(E){console.error(E),O("The renderer could not start. Enable WebGL and reload this page.")}return()=>{D=!0,t.current.forEach(E=>E.dispose()),t.current=[]}},[]);const S=Li.useRef(3.5);Li.useEffect(()=>{let D=0,O=0;const E=z=>{if(O&&!document.hidden&&(S.current=Math.min(36,S.current+Math.min((z-O)/1e3,.1)),t.current.forEach(F=>F.seek(S.current)),a(S.current)),O=z,S.current>=36){y.current=!1,l(!1);return}D=requestAnimationFrame(E)};return o&&(D=requestAnimationFrame(E)),()=>cancelAnimationFrame(D)},[o]);const C=D=>{S.current=D,t.current.forEach(O=>O.seek(D)),a(D)},N=()=>{S.current>=36&&C(0),y.current=!o,l(!o)},A=hr.shots[hS(hr.shots,n)],P=nC(hr.subtitles,n);return Se.jsxs("main",{children:[Se.jsxs("header",{children:[Se.jsxs("a",{className:"brand",href:"https://ph-bj.github.io",children:["品花宝境 ",Se.jsx("span",{children:"PRECIOUS VIBE"})]}),Se.jsx("span",{className:"edition",children:"VISUAL STUDIES / 001"})]}),Se.jsxs("section",{className:"intro",children:[Se.jsx("div",{className:"eyebrow",children:"CHAPTER ONE · PARAGRAPH ONE"}),Se.jsxs("h1",{children:["Five ways of ",Se.jsx("em",{children:"feeling."})]}),Se.jsxs("p",{children:["One passage. Five 36-second interpretations.",Se.jsx("br",{}),"Explore the opening of ",Se.jsx("i",{children:"Pinhua Baojian"})," through light, paint, neon and ink."]})]}),Se.jsxs("div",{className:"toolbar",children:[Se.jsxs("span",{className:"live",children:[Se.jsx("i",{})," THREE.JS · LIVE RENDERINGS"]}),Se.jsxs("div",{children:[Se.jsxs("button",{onClick:()=>w(!M),"aria-pressed":M,children:["Captions ",M?"on":"off"]}),Se.jsx("button",{onClick:()=>x(v==="en"?"zh":"en"),children:v==="en"?"中文":"English"}),g&&Se.jsx("button",{onClick:()=>_(null),children:"Compare all five ↗"})]})]}),Se.jsx("section",{className:`gallery ${g?"focused":""}`,"aria-label":"Five aesthetic renderings",children:cx.map((D,O)=>Se.jsxs("article",{className:`study ${g===D.id?"selected":""} ${g&&g!==D.id?"unfocused":""}`,children:[Se.jsxs("div",{className:"screen",children:[Se.jsx("div",{className:"canvas-host",ref:E=>{s.current[O]=E}}),Se.jsx("div",{className:"cut",style:{opacity:iC(hr.shots,n)}}),Se.jsx("div",{className:"screen-label",children:D.tag}),Se.jsx("button",{className:"expand","aria-label":`Focus ${D.name}`,onClick:()=>_(g===D.id?null:D.id),children:g===D.id?"↙":"↗"}),M&&P&&Se.jsx("p",{className:"subtitle",children:P[v]})]}),Se.jsxs("div",{className:"study-copy",children:[Se.jsx("span",{children:D.tag}),Se.jsx("h2",{children:D.name}),Se.jsx("p",{children:D.description})]})]},D.id))}),d.length>0&&Se.jsxs("div",{role:"alert",className:"error",children:["Rendering stopped: ",d.join(" · "),". Try reloading with hardware acceleration enabled."]}),Se.jsxs("section",{className:"transport","aria-label":"Synchronized playback",children:[Se.jsx("button",{className:"play",disabled:!u||!!d.length,onClick:N,children:o?"Ⅱ Pause all":"▶ Play all"}),Se.jsx("button",{disabled:!u,onClick:()=>{C(0),l(!0)},children:"↺ Replay"}),Se.jsx("input",{"aria-label":"Film timeline",type:"range",min:"0",max:"36",step:"0.05",value:n,disabled:!u,onChange:D=>C(Number(D.target.value))}),Se.jsxs("output",{children:[n.toFixed(1).padStart(4,"0")," ",Se.jsx("span",{children:"/ 36 s"})]})]}),Se.jsx("nav",{className:"chapters","aria-label":"Film scenes",children:hr.shots.map((D,O)=>Se.jsxs("button",{className:A===D?"active":"",disabled:!u,onClick:()=>C(D.start+.7),children:[Se.jsxs("span",{children:["0",O+1," · ",D.start.toString().padStart(2,"0"),"s"]}),D.title[v]]},D.start))}),Se.jsxs("section",{className:"passage",children:[Se.jsxs("div",{children:[Se.jsx("span",{className:"eyebrow",children:"THE MOMENT ON SCREEN"}),Se.jsx("h3",{children:A.title[v]}),Se.jsx("p",{children:A.caption[v]})]}),Se.jsx("blockquote",{lang:"zh",children:A.quote})]}),Se.jsxs("footer",{children:[Se.jsx("span",{children:"Same story, camera choreography and duration. Different aesthetic directions."}),Se.jsx("span",{children:"Silent animated studies · Chapter 01 / ¶ 01"})]})]})}CM.createRoot(document.getElementById("root")).render(Se.jsx(GC,{}));
