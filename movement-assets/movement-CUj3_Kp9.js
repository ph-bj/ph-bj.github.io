(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var Ld={exports:{}},Ml={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Gy(){if(E_)return Ml;E_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var h in o)h!=="key"&&(l[h]=o[h])}else l=o;return o=l.ref,{$$typeof:s,type:a,key:c,ref:o!==void 0?o:null,props:l}}return Ml.Fragment=t,Ml.jsx=n,Ml.jsxs=n,Ml}var T_;function Vy(){return T_||(T_=1,Ld.exports=Gy()),Ld.exports}var ue=Vy(),Pd={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function ky(){if(A_)return be;A_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(I,at,yt){this.props=I,this.context=at,this.refs=y,this.updater=yt||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,at){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,at,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=x.prototype;function D(I,at,yt){this.props=I,this.context=at,this.refs=y,this.updater=yt||b}var A=D.prototype=new R;A.constructor=D,C(A,x.prototype),A.isPureReactComponent=!0;var P=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function z(I,at,yt){var Lt=yt.ref;return{$$typeof:s,type:I,key:at,ref:Lt!==void 0?Lt:null,props:yt}}function H(I,at){return z(I.type,at,I.props)}function X(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function W(I){var at={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(yt){return at[yt]})}var tt=/\/+/g;function G(I,at){return typeof I=="object"&&I!==null&&I.key!=null?W(""+I.key):at.toString(36)}function $(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(at){I.status==="pending"&&(I.status="fulfilled",I.value=at)},function(at){I.status==="pending"&&(I.status="rejected",I.reason=at)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,at,yt,Lt,Ht){var Wt=typeof I;(Wt==="undefined"||Wt==="boolean")&&(I=null);var rt=!1;if(I===null)rt=!0;else switch(Wt){case"bigint":case"string":case"number":rt=!0;break;case"object":switch(I.$$typeof){case s:case t:rt=!0;break;case g:return rt=I._init,F(rt(I._payload),at,yt,Lt,Ht)}}if(rt)return Ht=Ht(I),rt=Lt===""?"."+G(I,0):Lt,P(Ht)?(yt="",rt!=null&&(yt=rt.replace(tt,"$&/")+"/"),F(Ht,at,yt,"",function(Yt){return Yt})):Ht!=null&&(X(Ht)&&(Ht=H(Ht,yt+(Ht.key==null||I&&I.key===Ht.key?"":(""+Ht.key).replace(tt,"$&/")+"/")+rt)),at.push(Ht)),1;rt=0;var et=Lt===""?".":Lt+":";if(P(I))for(var Et=0;Et<I.length;Et++)Lt=I[Et],Wt=et+G(Lt,Et),rt+=F(Lt,at,yt,Wt,Ht);else if(Et=S(I),typeof Et=="function")for(I=Et.call(I),Et=0;!(Lt=I.next()).done;)Lt=Lt.value,Wt=et+G(Lt,Et++),rt+=F(Lt,at,yt,Wt,Ht);else if(Wt==="object"){if(typeof I.then=="function")return F($(I),at,yt,Lt,Ht);throw at=String(I),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return rt}function V(I,at,yt){if(I==null)return I;var Lt=[],Ht=0;return F(I,Lt,"","",function(Wt){return at.call(yt,Wt,Ht++)}),Lt}function ft(I){if(I._status===-1){var at=I._result;at=at(),at.then(function(yt){(I._status===0||I._status===-1)&&(I._status=1,I._result=yt)},function(yt){(I._status===0||I._status===-1)&&(I._status=2,I._result=yt)}),I._status===-1&&(I._status=0,I._result=at)}if(I._status===1)return I._result.default;throw I._result}var ot=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},gt={map:V,forEach:function(I,at,yt){V(I,function(){at.apply(this,arguments)},yt)},count:function(I){var at=0;return V(I,function(){at++}),at},toArray:function(I){return V(I,function(at){return at})||[]},only:function(I){if(!X(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return be.Activity=v,be.Children=gt,be.Component=x,be.Fragment=n,be.Profiler=o,be.PureComponent=D,be.StrictMode=a,be.Suspense=p,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,be.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},be.cache=function(I){return function(){return I.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(I,at,yt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Lt=C({},I.props),Ht=I.key;if(at!=null)for(Wt in at.key!==void 0&&(Ht=""+at.key),at)!E.call(at,Wt)||Wt==="key"||Wt==="__self"||Wt==="__source"||Wt==="ref"&&at.ref===void 0||(Lt[Wt]=at[Wt]);var Wt=arguments.length-2;if(Wt===1)Lt.children=yt;else if(1<Wt){for(var rt=Array(Wt),et=0;et<Wt;et++)rt[et]=arguments[et+2];Lt.children=rt}return z(I.type,Ht,Lt)},be.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},be.createElement=function(I,at,yt){var Lt,Ht={},Wt=null;if(at!=null)for(Lt in at.key!==void 0&&(Wt=""+at.key),at)E.call(at,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(Ht[Lt]=at[Lt]);var rt=arguments.length-2;if(rt===1)Ht.children=yt;else if(1<rt){for(var et=Array(rt),Et=0;Et<rt;Et++)et[Et]=arguments[Et+2];Ht.children=et}if(I&&I.defaultProps)for(Lt in rt=I.defaultProps,rt)Ht[Lt]===void 0&&(Ht[Lt]=rt[Lt]);return z(I,Wt,Ht)},be.createRef=function(){return{current:null}},be.forwardRef=function(I){return{$$typeof:h,render:I}},be.isValidElement=X,be.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:ft}},be.memo=function(I,at){return{$$typeof:d,type:I,compare:at===void 0?null:at}},be.startTransition=function(I){var at=O.T,yt={};O.T=yt;try{var Lt=I(),Ht=O.S;Ht!==null&&Ht(yt,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(U,ot)}catch(Wt){ot(Wt)}finally{at!==null&&yt.types!==null&&(at.types=yt.types),O.T=at}},be.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},be.use=function(I){return O.H.use(I)},be.useActionState=function(I,at,yt){return O.H.useActionState(I,at,yt)},be.useCallback=function(I,at){return O.H.useCallback(I,at)},be.useContext=function(I){return O.H.useContext(I)},be.useDebugValue=function(){},be.useDeferredValue=function(I,at){return O.H.useDeferredValue(I,at)},be.useEffect=function(I,at){return O.H.useEffect(I,at)},be.useEffectEvent=function(I){return O.H.useEffectEvent(I)},be.useId=function(){return O.H.useId()},be.useImperativeHandle=function(I,at,yt){return O.H.useImperativeHandle(I,at,yt)},be.useInsertionEffect=function(I,at){return O.H.useInsertionEffect(I,at)},be.useLayoutEffect=function(I,at){return O.H.useLayoutEffect(I,at)},be.useMemo=function(I,at){return O.H.useMemo(I,at)},be.useOptimistic=function(I,at){return O.H.useOptimistic(I,at)},be.useReducer=function(I,at,yt){return O.H.useReducer(I,at,yt)},be.useRef=function(I){return O.H.useRef(I)},be.useState=function(I){return O.H.useState(I)},be.useSyncExternalStore=function(I,at,yt){return O.H.useSyncExternalStore(I,at,yt)},be.useTransition=function(){return O.H.useTransition()},be.version="19.2.7",be}var w_;function f0(){return w_||(w_=1,Pd.exports=ky()),Pd.exports}var ai=f0(),Od={exports:{}},bl={},zd={exports:{}},Id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Xy(){return C_||(C_=1,(function(s){function t(F,V){var ft=F.length;F.push(V);t:for(;0<ft;){var ot=ft-1>>>1,gt=F[ot];if(0<o(gt,V))F[ot]=V,F[ft]=gt,ft=ot;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var V=F[0],ft=F.pop();if(ft!==V){F[0]=ft;t:for(var ot=0,gt=F.length,I=gt>>>1;ot<I;){var at=2*(ot+1)-1,yt=F[at],Lt=at+1,Ht=F[Lt];if(0>o(yt,ft))Lt<gt&&0>o(Ht,yt)?(F[ot]=Ht,F[Lt]=ft,ot=Lt):(F[ot]=yt,F[at]=ft,ot=at);else if(Lt<gt&&0>o(Ht,ft))F[ot]=Ht,F[Lt]=ft,ot=Lt;else break t}}return V}function o(F,V){var ft=F.sortIndex-V.sortIndex;return ft!==0?ft:F.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var p=[],d=[],g=1,v=null,_=3,S=!1,b=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var V=n(d);V!==null;){if(V.callback===null)a(d);else if(V.startTime<=F)a(d),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(d)}}function P(F){if(C=!1,A(F),!b)if(n(p)!==null)b=!0,U||(U=!0,W());else{var V=n(d);V!==null&&$(P,V.startTime-F)}}var U=!1,O=-1,E=5,z=-1;function H(){return y?!0:!(s.unstable_now()-z<E)}function X(){if(y=!1,U){var F=s.unstable_now();z=F;var V=!0;try{t:{b=!1,C&&(C=!1,R(O),O=-1),S=!0;var ft=_;try{e:{for(A(F),v=n(p);v!==null&&!(v.expirationTime>F&&H());){var ot=v.callback;if(typeof ot=="function"){v.callback=null,_=v.priorityLevel;var gt=ot(v.expirationTime<=F);if(F=s.unstable_now(),typeof gt=="function"){v.callback=gt,A(F),V=!0;break e}v===n(p)&&a(p),A(F)}else a(p);v=n(p)}if(v!==null)V=!0;else{var I=n(d);I!==null&&$(P,I.startTime-F),V=!1}}break t}finally{v=null,_=ft,S=!1}V=void 0}}finally{V?W():U=!1}}}var W;if(typeof D=="function")W=function(){D(X)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,G=tt.port2;tt.port1.onmessage=X,W=function(){G.postMessage(null)}}else W=function(){x(X,0)};function $(F,V){O=x(function(){F(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var ft=_;_=V;try{return F()}finally{_=ft}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ft=_;_=F;try{return V()}finally{_=ft}},s.unstable_scheduleCallback=function(F,V,ft){var ot=s.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?ot+ft:ot):ft=ot,F){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=ft+gt,F={id:g++,callback:V,priorityLevel:F,startTime:ft,expirationTime:gt,sortIndex:-1},ft>ot?(F.sortIndex=ft,t(d,F),n(p)===null&&F===n(d)&&(C?(R(O),O=-1):C=!0,$(P,ft-ot))):(F.sortIndex=gt,t(p,F),b||S||(b=!0,U||(U=!0,W()))),F},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(F){var V=_;return function(){var ft=_;_=V;try{return F.apply(this,arguments)}finally{_=ft}}}})(Id)),Id}var R_;function Wy(){return R_||(R_=1,zd.exports=Xy()),zd.exports}var Bd={exports:{}},Kn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function qy(){if(D_)return Kn;D_=1;var s=f0();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:d,implementation:g}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Kn.createPortal=function(p,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,g)},Kn.flushSync=function(p){var d=c.T,g=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=g,a.d.f()}},Kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:S}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:_,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=h(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=h(g,d.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var g=h(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Kn.requestFormReset=function(p){a.d.r(p)},Kn.unstable_batchedUpdates=function(p,d){return p(d)},Kn.useFormState=function(p,d,g){return c.H.useFormState(p,d,g)},Kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Kn.version="19.2.7",Kn}var U_;function Yy(){if(U_)return Bd.exports;U_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Bd.exports=qy(),Bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Zy(){if(N_)return bl;N_=1;var s=Wy(),t=f0(),n=Yy();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,u=i;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){r=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return p(f),e;if(m===u)return p(f),i;m=m.sibling}throw Error(a(188))}if(r.return!==u.return)r=f,u=m;else{for(var M=!1,N=f.child;N;){if(N===r){M=!0,r=f,u=m;break}if(N===u){M=!0,u=f,r=m;break}N=N.sibling}if(!M){for(N=m.child;N;){if(N===r){M=!0,r=m,u=f;break}if(N===u){M=!0,u=m,r=f;break}N=N.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==u)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),H=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case U:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:G(e.type)||"Memo";case E:i=e._payload,e=e._init;try{return G(e(i))}catch{}}return null}var $=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},ot=[],gt=-1;function I(e){return{current:e}}function at(e){0>gt||(e.current=ot[gt],ot[gt]=null,gt--)}function yt(e,i){gt++,ot[gt]=e.current,e.current=i}var Lt=I(null),Ht=I(null),Wt=I(null),rt=I(null);function et(e,i){switch(yt(Wt,i),yt(Ht,e),yt(Lt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Yv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Yv(i),e=Zv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Lt),yt(Lt,e)}function Et(){at(Lt),at(Ht),at(Wt)}function Yt(e){e.memoizedState!==null&&yt(rt,e);var i=Lt.current,r=Zv(i,e.type);i!==r&&(yt(Ht,e),yt(Lt,r))}function zt(e){Ht.current===e&&(at(Lt),at(Ht)),rt.current===e&&(at(rt),_l._currentValue=ft)}var Zt,de;function ct(e){if(Zt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Zt=i&&i[1]||"",de=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+de}var Ct=!1;function Nt(e,i){if(!e||Ct)return"";Ct=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var Ut=function(){throw Error()};if(Object.defineProperty(Ut.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ut,[])}catch(bt){var vt=bt}Reflect.construct(e,[],Ut)}else{try{Ut.call()}catch(bt){vt=bt}e.call(Ut.prototype)}}else{try{throw Error()}catch(bt){vt=bt}(Ut=e())&&typeof Ut.catch=="function"&&Ut.catch(function(){})}}catch(bt){if(bt&&vt&&typeof bt.stack=="string")return[bt.stack,vt.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),M=m[0],N=m[1];if(M&&N){var q=M.split(`
`),mt=N.split(`
`);for(f=u=0;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;for(;f<mt.length&&!mt[f].includes("DetermineComponentFrameRoot");)f++;if(u===q.length||f===mt.length)for(u=q.length-1,f=mt.length-1;1<=u&&0<=f&&q[u]!==mt[f];)f--;for(;1<=u&&0<=f;u--,f--)if(q[u]!==mt[f]){if(u!==1||f!==1)do if(u--,f--,0>f||q[u]!==mt[f]){var At=`
`+q[u].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=u&&0<=f);break}}}finally{Ct=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?ct(r):""}function Pt(e,i){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==i&&i!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return Nt(e.type,!1);case 11:return Nt(e.type.render,!1);case 1:return Nt(e.type,!0);case 31:return ct("Activity");default:return""}}function Ft(e){try{var i="",r=null;do i+=Pt(e,r),r=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var ce=Object.prototype.hasOwnProperty,se=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,ge=s.unstable_shouldYield,Z=s.unstable_requestPaint,_e=s.unstable_now,ye=s.unstable_getCurrentPriorityLevel,B=s.unstable_ImmediatePriority,T=s.unstable_UserBlockingPriority,it=s.unstable_NormalPriority,lt=s.unstable_LowPriority,Mt=s.unstable_IdlePriority,Bt=s.log,Vt=s.unstable_setDisableYieldValue,St=null,_t=null;function It(e){if(typeof Bt=="function"&&Vt(e),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(St,e)}catch{}}var Jt=Math.clz32?Math.clz32:ae,qt=Math.log,Xt=Math.LN2;function ae(e){return e>>>=0,e===0?32:31-(qt(e)/Xt|0)|0}var oe=256,pe=262144,J=4194304;function Gt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Tt(e,i,r){var u=e.pendingLanes;if(u===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?f=Gt(u):(M&=N,M!==0?f=Gt(M):r||(r=N&~e,r!==0&&(f=Gt(r))))):(N=u&~m,N!==0?f=Gt(N):M!==0?f=Gt(M):r||(r=u&~e,r!==0&&(f=Gt(r)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:f}function kt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Y(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L(){var e=J;return J<<=1,(J&62914560)===0&&(J=4194304),e}function nt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function K(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,i,r,u,f,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var N=e.entanglements,q=e.expirationTimes,mt=e.hiddenUpdates;for(r=M&~r;0<r;){var At=31-Jt(r),Ut=1<<At;N[At]=0,q[At]=-1;var vt=mt[At];if(vt!==null)for(mt[At]=null,At=0;At<vt.length;At++){var bt=vt[At];bt!==null&&(bt.lane&=-536870913)}r&=~Ut}u!==0&&Dt(e,u,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~i))}function Dt(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Jt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|r&261930}function fe(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var u=31-Jt(r),f=1<<u;f&i|e[u]&i&&(e[u]|=i),r&=~f}}function Me(e,i){var r=i&-i;return r=(r&42)!==0?1:Qe(r),(r&(e.suspendedLanes|i))!==0?0:r}function Qe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ke(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:v_(e.type))}function Be(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var Ce=Math.random().toString(36).slice(2),Se="__reactFiber$"+Ce,cn="__reactProps$"+Ce,Zn="__reactContainer$"+Ce,Fs="__reactEvents$"+Ce,lu="__reactListeners$"+Ce,uu="__reactHandles$"+Ce,Hs="__reactResources$"+Ce,Qa="__reactMarker$"+Ce;function ja(e){delete e[Se],delete e[cn],delete e[Fs],delete e[lu],delete e[uu]}function Ea(e){var i=e[Se];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Zn]||r[Se]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=e_(e);e!==null;){if(r=e[Se])return r;e=e_(e)}return i}e=r,r=e.parentNode}return null}function Ta(e){if(e=e[Se]||e[Zn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Gs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function $a(e){var i=e[Hs];return i||(i=e[Hs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function En(e){e[Qa]=!0}var cu=new Set,Po={};function w(e,i){Q(e,i),Q(e+"Capture",i)}function Q(e,i){for(Po[e]=i,e=0;e<i.length;e++)cu.add(i[e])}var xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ht={},dt={};function Qt(e){return ce.call(dt,e)?!0:ce.call(ht,e)?!1:xt.test(e)?dt[e]=!0:(ht[e]=!0,!1)}function ne(e,i,r){if(Qt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Kt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function $t(e,i,r,u){if(u===null)e.removeAttribute(r);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+u)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(e,i,r){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var f=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function re(e){if(!e._valueTracker){var i=Te(e)?"checked":"value";e._valueTracker=Pe(e,i,""+e[i])}}function We(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),u="";return e&&(u=Te(e)?e.checked?"true":"false":e.value),e=u,e!==r?(i.setValue(e),!0):!1}function hn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ln=/[\n"\\]/g;function De(e){return e.replace(ln,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(e,i,r,u,f,m,M,N){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+te(i)):e.value!==""+te(i)&&(e.value=""+te(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Un(e,M,te(i)):r!=null?Un(e,M,te(r)):u!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+te(N):e.removeAttribute("name")}function ie(e,i,r,u,f,m,M,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){re(e);return}r=r!=null?""+te(r):"",i=i!=null?""+te(i):r,N||i===e.value||(e.value=i),e.defaultValue=i}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=N?e.checked:!!u,e.defaultChecked=!!u,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),re(e)}function Un(e,i,r){i==="number"&&hn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Ue(e,i,r,u){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&u&&(e[r].defaultSelected=!0)}else{for(r=""+te(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,u&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function ei(e,i,r){if(i!=null&&(i=""+te(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+te(r):""}function bi(e,i,r,u){if(i==null){if(u!=null){if(r!=null)throw Error(a(92));if($(u)){if(1<u.length)throw Error(a(93));u=u[0]}r=u}r==null&&(r=""),i=r}r=te(i),e.defaultValue=r,u=e.textContent,u===r&&u!==""&&u!==null&&(e.value=u),re(e)}function ni(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var ts=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ke(e,i,r){var u=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,r):typeof r!="number"||r===0||ts.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function mn(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var u in r)!r.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var f in i)u=i[f],i.hasOwnProperty(f)&&r[f]!==u&&Ke(e,f,u)}else for(var m in i)i.hasOwnProperty(m)&&Ke(e,m,i[m])}function Ii(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),la=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ji(e){return la.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Df=null;function Uf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yr=null,Mr=null;function q0(e){var i=Ta(e);if(i&&(e=i.stateNode)){var r=e[cn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Tn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+De(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var u=r[i];if(u!==e&&u.form===e.form){var f=u[cn]||null;if(!f)throw Error(a(90));Tn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)u=r[i],u.form===e.form&&We(u)}break t;case"textarea":ei(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Ue(e,!!r.multiple,i,!1)}}}var Nf=!1;function Y0(e,i,r){if(Nf)return e(i,r);Nf=!0;try{var u=e(i);return u}finally{if(Nf=!1,(yr!==null||Mr!==null)&&(Qu(),yr&&(i=yr,e=Mr,Mr=yr=null,q0(i),e)))for(i=0;i<e.length;i++)q0(e[i])}}function Oo(e,i){var r=e.stateNode;if(r===null)return null;var u=r[cn]||null;if(u===null)return null;r=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lf=!1;if(Aa)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{Lf=!1}var es=null,Pf=null,fu=null;function Z0(){if(fu)return fu;var e,i=Pf,r=i.length,u,f="value"in es?es.value:es.textContent,m=f.length;for(e=0;e<r&&i[e]===f[e];e++);var M=r-e;for(u=1;u<=M&&i[r-u]===f[m-u];u++);return fu=f.slice(e,1<u?1-u:void 0)}function hu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function du(){return!0}function K0(){return!1}function pi(e){function i(r,u,f,m,M){this._reactName=r,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(r=e[N],this[N]=r?r(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?du:K0,this.isPropagationStopped=K0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),i}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=pi(Vs),Io=v({},Vs,{view:0,detail:0}),FS=pi(Io),Of,zf,Bo,mu=v({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bo&&(Bo&&e.type==="mousemove"?(Of=e.screenX-Bo.screenX,zf=e.screenY-Bo.screenY):zf=Of=0,Bo=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:zf}}),J0=pi(mu),HS=v({},mu,{dataTransfer:0}),GS=pi(HS),VS=v({},Io,{relatedTarget:0}),If=pi(VS),kS=v({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=pi(kS),WS=v({},Vs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qS=pi(WS),YS=v({},Vs,{data:0}),Q0=pi(YS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=JS[e])?!!i[e]:!1}function Bf(){return QS}var jS=v({},Io,{key:function(e){if(e.key){var i=ZS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=hu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?KS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(e){return e.type==="keypress"?hu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$S=pi(jS),tx=v({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),j0=pi(tx),ex=v({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),nx=pi(ex),ix=v({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=pi(ix),sx=v({},mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rx=pi(sx),ox=v({},Vs,{newState:0,oldState:0}),lx=pi(ox),ux=[9,13,27,32],Ff=Aa&&"CompositionEvent"in window,Fo=null;Aa&&"documentMode"in document&&(Fo=document.documentMode);var cx=Aa&&"TextEvent"in window&&!Fo,$0=Aa&&(!Ff||Fo&&8<Fo&&11>=Fo),tm=" ",em=!1;function nm(e,i){switch(e){case"keyup":return ux.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function fx(e,i){switch(e){case"compositionend":return im(i);case"keypress":return i.which!==32?null:(em=!0,tm);case"textInput":return e=i.data,e===tm&&em?null:e;default:return null}}function hx(e,i){if(br)return e==="compositionend"||!Ff&&nm(e,i)?(e=Z0(),fu=Pf=es=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $0&&i.locale!=="ko"?null:i.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!dx[e.type]:i==="textarea"}function sm(e,i,r,u){yr?Mr?Mr.push(u):Mr=[u]:yr=u,i=ac(i,"onChange"),0<i.length&&(r=new pu("onChange","change",null,r,u),e.push({event:r,listeners:i}))}var Ho=null,Go=null;function px(e){Gv(e,0)}function gu(e){var i=Gs(e);if(We(i))return e}function rm(e,i){if(e==="change")return i}var om=!1;if(Aa){var Hf;if(Aa){var Gf="oninput"in document;if(!Gf){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Gf=typeof lm.oninput=="function"}Hf=Gf}else Hf=!1;om=Hf&&(!document.documentMode||9<document.documentMode)}function um(){Ho&&(Ho.detachEvent("onpropertychange",cm),Go=Ho=null)}function cm(e){if(e.propertyName==="value"&&gu(Go)){var i=[];sm(i,Go,e,Uf(e)),Y0(px,i)}}function mx(e,i,r){e==="focusin"?(um(),Ho=i,Go=r,Ho.attachEvent("onpropertychange",cm)):e==="focusout"&&um()}function gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gu(Go)}function vx(e,i){if(e==="click")return gu(i)}function _x(e,i){if(e==="input"||e==="change")return gu(i)}function Sx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Ei=typeof Object.is=="function"?Object.is:Sx;function Vo(e,i){if(Ei(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),u=Object.keys(i);if(r.length!==u.length)return!1;for(u=0;u<r.length;u++){var f=r[u];if(!ce.call(i,f)||!Ei(e[f],i[f]))return!1}return!0}function fm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hm(e,i){var r=fm(e);e=0;for(var u;r;){if(r.nodeType===3){if(u=e+r.textContent.length,e<=i&&u>=i)return{node:r,offset:i-e};e=u}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=fm(r)}}function dm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?dm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function pm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=hn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=hn(e.document)}return i}function Vf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var xx=Aa&&"documentMode"in document&&11>=document.documentMode,Er=null,kf=null,ko=null,Xf=!1;function mm(e,i,r){var u=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xf||Er==null||Er!==hn(u)||(u=Er,"selectionStart"in u&&Vf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ko&&Vo(ko,u)||(ko=u,u=ac(kf,"onSelect"),0<u.length&&(i=new pu("onSelect","select",null,i,r),e.push({event:i,listeners:u}),i.target=Er)))}function ks(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Tr={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionrun:ks("Transition","TransitionRun"),transitionstart:ks("Transition","TransitionStart"),transitioncancel:ks("Transition","TransitionCancel"),transitionend:ks("Transition","TransitionEnd")},Wf={},gm={};Aa&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Xs(e){if(Wf[e])return Wf[e];if(!Tr[e])return e;var i=Tr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in gm)return Wf[e]=i[r];return e}var vm=Xs("animationend"),_m=Xs("animationiteration"),Sm=Xs("animationstart"),yx=Xs("transitionrun"),Mx=Xs("transitionstart"),bx=Xs("transitioncancel"),xm=Xs("transitionend"),ym=new Map,qf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qf.push("scrollEnd");function Qi(e,i){ym.set(e,i),w(i,[e])}var vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fi=[],Ar=0,Yf=0;function _u(){for(var e=Ar,i=Yf=Ar=0;i<e;){var r=Fi[i];Fi[i++]=null;var u=Fi[i];Fi[i++]=null;var f=Fi[i];Fi[i++]=null;var m=Fi[i];if(Fi[i++]=null,u!==null&&f!==null){var M=u.pending;M===null?f.next=f:(f.next=M.next,M.next=f),u.pending=f}m!==0&&Mm(r,f,m)}}function Su(e,i,r,u){Fi[Ar++]=e,Fi[Ar++]=i,Fi[Ar++]=r,Fi[Ar++]=u,Yf|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function Zf(e,i,r,u){return Su(e,i,r,u),xu(e)}function Ws(e,i){return Su(e,null,null,i),xu(e)}function Mm(e,i,r){e.lanes|=r;var u=e.alternate;u!==null&&(u.lanes|=r);for(var f=!1,m=e.return;m!==null;)m.childLanes|=r,u=m.alternate,u!==null&&(u.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-Jt(r),e=m.hiddenUpdates,u=e[f],u===null?e[f]=[i]:u.push(i),i.lane=r|536870912),m):null}function xu(e){if(50<fl)throw fl=0,id=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var wr={};function Ex(e,i,r,u){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(e,i,r,u){return new Ex(e,i,r,u)}function Kf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wa(e,i){var r=e.alternate;return r===null?(r=Ti(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function bm(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function yu(e,i,r,u,f,m){var M=0;if(u=e,typeof e=="function")Kf(e)&&(M=1);else if(typeof e=="string")M=Ry(e,r,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=Ti(31,r,i,f),e.elementType=z,e.lanes=m,e;case C:return qs(r.children,f,m,i);case y:M=8,f|=24;break;case x:return e=Ti(12,r,i,f|2),e.elementType=x,e.lanes=m,e;case P:return e=Ti(13,r,i,f),e.elementType=P,e.lanes=m,e;case U:return e=Ti(19,r,i,f),e.elementType=U,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case R:M=9;break t;case A:M=11;break t;case O:M=14;break t;case E:M=16,u=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=Ti(M,r,i,f),i.elementType=e,i.type=u,i.lanes=m,i}function qs(e,i,r,u){return e=Ti(7,e,u,i),e.lanes=r,e}function Jf(e,i,r){return e=Ti(6,e,null,i),e.lanes=r,e}function Em(e){var i=Ti(18,null,null,0);return i.stateNode=e,i}function Qf(e,i,r){return i=Ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Tm=new WeakMap;function Hi(e,i){if(typeof e=="object"&&e!==null){var r=Tm.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ft(i)},Tm.set(e,i),i)}return{value:e,source:i,stack:Ft(i)}}var Cr=[],Rr=0,Mu=null,Xo=0,Gi=[],Vi=0,ns=null,ua=1,ca="";function Ca(e,i){Cr[Rr++]=Xo,Cr[Rr++]=Mu,Mu=e,Xo=i}function Am(e,i,r){Gi[Vi++]=ua,Gi[Vi++]=ca,Gi[Vi++]=ns,ns=e;var u=ua;e=ca;var f=32-Jt(u)-1;u&=~(1<<f),r+=1;var m=32-Jt(i)+f;if(30<m){var M=f-f%5;m=(u&(1<<M)-1).toString(32),u>>=M,f-=M,ua=1<<32-Jt(i)+f|r<<f|u,ca=m+e}else ua=1<<m|r<<f|u,ca=e}function jf(e){e.return!==null&&(Ca(e,1),Am(e,1,0))}function $f(e){for(;e===Mu;)Mu=Cr[--Rr],Cr[Rr]=null,Xo=Cr[--Rr],Cr[Rr]=null;for(;e===ns;)ns=Gi[--Vi],Gi[Vi]=null,ca=Gi[--Vi],Gi[Vi]=null,ua=Gi[--Vi],Gi[Vi]=null}function wm(e,i){Gi[Vi++]=ua,Gi[Vi++]=ca,Gi[Vi++]=ns,ua=i.id,ca=i.overflow,ns=e}var Gn=null,dn=null,Ve=!1,is=null,ki=!1,th=Error(a(519));function as(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wo(Hi(i,e)),th}function Cm(e){var i=e.stateNode,r=e.type,u=e.memoizedProps;switch(i[Se]=e,i[cn]=u,r){case"dialog":Ie("cancel",i),Ie("close",i);break;case"iframe":case"object":case"embed":Ie("load",i);break;case"video":case"audio":for(r=0;r<dl.length;r++)Ie(dl[r],i);break;case"source":Ie("error",i);break;case"img":case"image":case"link":Ie("error",i),Ie("load",i);break;case"details":Ie("toggle",i);break;case"input":Ie("invalid",i),ie(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Ie("invalid",i);break;case"textarea":Ie("invalid",i),bi(i,u.value,u.defaultValue,u.children)}r=u.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||u.suppressHydrationWarning===!0||Wv(i.textContent,r)?(u.popover!=null&&(Ie("beforetoggle",i),Ie("toggle",i)),u.onScroll!=null&&Ie("scroll",i),u.onScrollEnd!=null&&Ie("scrollend",i),u.onClick!=null&&(i.onclick=Bi),i=!0):i=!1,i||as(e,!0)}function Rm(e){for(Gn=e.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:ki=!1;return;case 27:case 3:ki=!0;return;default:Gn=Gn.return}}function Dr(e){if(e!==Gn)return!1;if(!Ve)return Rm(e),Ve=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||_d(e.type,e.memoizedProps)),r=!r),r&&dn&&as(e),Rm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));dn=t_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));dn=t_(e)}else i===27?(i=dn,_s(e.type)?(e=bd,bd=null,dn=e):dn=i):dn=Gn?Wi(e.stateNode.nextSibling):null;return!0}function Ys(){dn=Gn=null,Ve=!1}function eh(){var e=is;return e!==null&&(_i===null?_i=e:_i.push.apply(_i,e),is=null),e}function Wo(e){is===null?is=[e]:is.push(e)}var nh=I(null),Zs=null,Ra=null;function ss(e,i,r){yt(nh,i._currentValue),i._currentValue=r}function Da(e){e._currentValue=nh.current,at(nh)}function ih(e,i,r){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===r)break;e=e.return}}function ah(e,i,r,u){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=f;for(var q=0;q<i.length;q++)if(N.context===i[q]){m.lanes|=r,N=m.alternate,N!==null&&(N.lanes|=r),ih(m.return,r,e),u||(M=null);break t}m=N.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),ih(M,r,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function Ur(e,i,r,u){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var N=f.type;Ei(f.pendingProps.value,M.value)||(e!==null?e.push(N):e=[N])}}else if(f===rt.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}f=f.return}e!==null&&ah(i,e,r,u),i.flags|=262144}function bu(e){for(e=e.firstContext;e!==null;){if(!Ei(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ks(e){Zs=e,Ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vn(e){return Dm(Zs,e)}function Eu(e,i){return Zs===null&&Ks(e),Dm(e,i)}function Dm(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ra===null){if(e===null)throw Error(a(308));Ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ra=Ra.next=i;return r}var Tx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Ax=s.unstable_scheduleCallback,wx=s.unstable_NormalPriority,An={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sh(){return{controller:new Tx,data:new Map,refCount:0}}function qo(e){e.refCount--,e.refCount===0&&Ax(wx,function(){e.controller.abort()})}var Yo=null,rh=0,Nr=0,Lr=null;function Cx(e,i){if(Yo===null){var r=Yo=[];rh=0,Nr=ud(),Lr={status:"pending",value:void 0,then:function(u){r.push(u)}}}return rh++,i.then(Um,Um),i}function Um(){if(--rh===0&&Yo!==null){Lr!==null&&(Lr.status="fulfilled");var e=Yo;Yo=null,Nr=0,Lr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Rx(e,i){var r=[],u={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(u.status="rejected",u.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),u}var Nm=F.S;F.S=function(e,i){mv=_e(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Cx(e,i),Nm!==null&&Nm(e,i)};var Js=I(null);function oh(){var e=Js.current;return e!==null?e:un.pooledCache}function Tu(e,i){i===null?yt(Js,Js.current):yt(Js,i.pool)}function Lm(){var e=oh();return e===null?null:{parent:An._currentValue,pool:e}}var Pr=Error(a(460)),lh=Error(a(474)),Au=Error(a(542)),wu={then:function(){}};function Pm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Om(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Bi,Bi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Im(e),e;default:if(typeof i.status=="string")i.then(Bi,Bi);else{if(e=un,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=u}},function(u){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Im(e),e}throw js=i,Pr}}function Qs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(js=r,Pr):r}}var js=null;function zm(){if(js===null)throw Error(a(459));var e=js;return js=null,e}function Im(e){if(e===Pr||e===Au)throw Error(a(483))}var Or=null,Zo=0;function Cu(e){var i=Zo;return Zo+=1,Or===null&&(Or=[]),Om(Or,e,i)}function Ko(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ru(e,i){throw i.$$typeof===_?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Bm(e){function i(st,j){if(e){var pt=st.deletions;pt===null?(st.deletions=[j],st.flags|=16):pt.push(j)}}function r(st,j){if(!e)return null;for(;j!==null;)i(st,j),j=j.sibling;return null}function u(st){for(var j=new Map;st!==null;)st.key!==null?j.set(st.key,st):j.set(st.index,st),st=st.sibling;return j}function f(st,j){return st=wa(st,j),st.index=0,st.sibling=null,st}function m(st,j,pt){return st.index=pt,e?(pt=st.alternate,pt!==null?(pt=pt.index,pt<j?(st.flags|=67108866,j):pt):(st.flags|=67108866,j)):(st.flags|=1048576,j)}function M(st){return e&&st.alternate===null&&(st.flags|=67108866),st}function N(st,j,pt,Rt){return j===null||j.tag!==6?(j=Jf(pt,st.mode,Rt),j.return=st,j):(j=f(j,pt),j.return=st,j)}function q(st,j,pt,Rt){var me=pt.type;return me===C?At(st,j,pt.props.children,Rt,pt.key):j!==null&&(j.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===E&&Qs(me)===j.type)?(j=f(j,pt.props),Ko(j,pt),j.return=st,j):(j=yu(pt.type,pt.key,pt.props,null,st.mode,Rt),Ko(j,pt),j.return=st,j)}function mt(st,j,pt,Rt){return j===null||j.tag!==4||j.stateNode.containerInfo!==pt.containerInfo||j.stateNode.implementation!==pt.implementation?(j=Qf(pt,st.mode,Rt),j.return=st,j):(j=f(j,pt.children||[]),j.return=st,j)}function At(st,j,pt,Rt,me){return j===null||j.tag!==7?(j=qs(pt,st.mode,Rt,me),j.return=st,j):(j=f(j,pt),j.return=st,j)}function Ut(st,j,pt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Jf(""+j,st.mode,pt),j.return=st,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return pt=yu(j.type,j.key,j.props,null,st.mode,pt),Ko(pt,j),pt.return=st,pt;case b:return j=Qf(j,st.mode,pt),j.return=st,j;case E:return j=Qs(j),Ut(st,j,pt)}if($(j)||W(j))return j=qs(j,st.mode,pt,null),j.return=st,j;if(typeof j.then=="function")return Ut(st,Cu(j),pt);if(j.$$typeof===D)return Ut(st,Eu(st,j),pt);Ru(st,j)}return null}function vt(st,j,pt,Rt){var me=j!==null?j.key:null;if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return me!==null?null:N(st,j,""+pt,Rt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return pt.key===me?q(st,j,pt,Rt):null;case b:return pt.key===me?mt(st,j,pt,Rt):null;case E:return pt=Qs(pt),vt(st,j,pt,Rt)}if($(pt)||W(pt))return me!==null?null:At(st,j,pt,Rt,null);if(typeof pt.then=="function")return vt(st,j,Cu(pt),Rt);if(pt.$$typeof===D)return vt(st,j,Eu(st,pt),Rt);Ru(st,pt)}return null}function bt(st,j,pt,Rt,me){if(typeof Rt=="string"&&Rt!==""||typeof Rt=="number"||typeof Rt=="bigint")return st=st.get(pt)||null,N(j,st,""+Rt,me);if(typeof Rt=="object"&&Rt!==null){switch(Rt.$$typeof){case S:return st=st.get(Rt.key===null?pt:Rt.key)||null,q(j,st,Rt,me);case b:return st=st.get(Rt.key===null?pt:Rt.key)||null,mt(j,st,Rt,me);case E:return Rt=Qs(Rt),bt(st,j,pt,Rt,me)}if($(Rt)||W(Rt))return st=st.get(pt)||null,At(j,st,Rt,me,null);if(typeof Rt.then=="function")return bt(st,j,pt,Cu(Rt),me);if(Rt.$$typeof===D)return bt(st,j,pt,Eu(j,Rt),me);Ru(j,Rt)}return null}function le(st,j,pt,Rt){for(var me=null,qe=null,he=j,Re=j=0,He=null;he!==null&&Re<pt.length;Re++){he.index>Re?(He=he,he=null):He=he.sibling;var Ye=vt(st,he,pt[Re],Rt);if(Ye===null){he===null&&(he=He);break}e&&he&&Ye.alternate===null&&i(st,he),j=m(Ye,j,Re),qe===null?me=Ye:qe.sibling=Ye,qe=Ye,he=He}if(Re===pt.length)return r(st,he),Ve&&Ca(st,Re),me;if(he===null){for(;Re<pt.length;Re++)he=Ut(st,pt[Re],Rt),he!==null&&(j=m(he,j,Re),qe===null?me=he:qe.sibling=he,qe=he);return Ve&&Ca(st,Re),me}for(he=u(he);Re<pt.length;Re++)He=bt(he,st,Re,pt[Re],Rt),He!==null&&(e&&He.alternate!==null&&he.delete(He.key===null?Re:He.key),j=m(He,j,Re),qe===null?me=He:qe.sibling=He,qe=He);return e&&he.forEach(function(bs){return i(st,bs)}),Ve&&Ca(st,Re),me}function ve(st,j,pt,Rt){if(pt==null)throw Error(a(151));for(var me=null,qe=null,he=j,Re=j=0,He=null,Ye=pt.next();he!==null&&!Ye.done;Re++,Ye=pt.next()){he.index>Re?(He=he,he=null):He=he.sibling;var bs=vt(st,he,Ye.value,Rt);if(bs===null){he===null&&(he=He);break}e&&he&&bs.alternate===null&&i(st,he),j=m(bs,j,Re),qe===null?me=bs:qe.sibling=bs,qe=bs,he=He}if(Ye.done)return r(st,he),Ve&&Ca(st,Re),me;if(he===null){for(;!Ye.done;Re++,Ye=pt.next())Ye=Ut(st,Ye.value,Rt),Ye!==null&&(j=m(Ye,j,Re),qe===null?me=Ye:qe.sibling=Ye,qe=Ye);return Ve&&Ca(st,Re),me}for(he=u(he);!Ye.done;Re++,Ye=pt.next())Ye=bt(he,st,Re,Ye.value,Rt),Ye!==null&&(e&&Ye.alternate!==null&&he.delete(Ye.key===null?Re:Ye.key),j=m(Ye,j,Re),qe===null?me=Ye:qe.sibling=Ye,qe=Ye);return e&&he.forEach(function(Hy){return i(st,Hy)}),Ve&&Ca(st,Re),me}function rn(st,j,pt,Rt){if(typeof pt=="object"&&pt!==null&&pt.type===C&&pt.key===null&&(pt=pt.props.children),typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:t:{for(var me=pt.key;j!==null;){if(j.key===me){if(me=pt.type,me===C){if(j.tag===7){r(st,j.sibling),Rt=f(j,pt.props.children),Rt.return=st,st=Rt;break t}}else if(j.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===E&&Qs(me)===j.type){r(st,j.sibling),Rt=f(j,pt.props),Ko(Rt,pt),Rt.return=st,st=Rt;break t}r(st,j);break}else i(st,j);j=j.sibling}pt.type===C?(Rt=qs(pt.props.children,st.mode,Rt,pt.key),Rt.return=st,st=Rt):(Rt=yu(pt.type,pt.key,pt.props,null,st.mode,Rt),Ko(Rt,pt),Rt.return=st,st=Rt)}return M(st);case b:t:{for(me=pt.key;j!==null;){if(j.key===me)if(j.tag===4&&j.stateNode.containerInfo===pt.containerInfo&&j.stateNode.implementation===pt.implementation){r(st,j.sibling),Rt=f(j,pt.children||[]),Rt.return=st,st=Rt;break t}else{r(st,j);break}else i(st,j);j=j.sibling}Rt=Qf(pt,st.mode,Rt),Rt.return=st,st=Rt}return M(st);case E:return pt=Qs(pt),rn(st,j,pt,Rt)}if($(pt))return le(st,j,pt,Rt);if(W(pt)){if(me=W(pt),typeof me!="function")throw Error(a(150));return pt=me.call(pt),ve(st,j,pt,Rt)}if(typeof pt.then=="function")return rn(st,j,Cu(pt),Rt);if(pt.$$typeof===D)return rn(st,j,Eu(st,pt),Rt);Ru(st,pt)}return typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint"?(pt=""+pt,j!==null&&j.tag===6?(r(st,j.sibling),Rt=f(j,pt),Rt.return=st,st=Rt):(r(st,j),Rt=Jf(pt,st.mode,Rt),Rt.return=st,st=Rt),M(st)):r(st,j)}return function(st,j,pt,Rt){try{Zo=0;var me=rn(st,j,pt,Rt);return Or=null,me}catch(he){if(he===Pr||he===Au)throw he;var qe=Ti(29,he,null,st.mode);return qe.lanes=Rt,qe.return=st,qe}finally{}}}var $s=Bm(!0),Fm=Bm(!1),rs=!1;function uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ch(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function os(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ls(e,i,r){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Je&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,i=xu(e),Mm(e,null,r),i}return Su(e,u,i,r),xu(e)}function Jo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,fe(e,r)}}function fh(e,i){var r=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,r===u)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?f=m=i:m=m.next=i}else f=m=i;r={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var hh=!1;function Qo(){if(hh){var e=Lr;if(e!==null)throw e}}function jo(e,i,r,u){hh=!1;var f=e.updateQueue;rs=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var q=N,mt=q.next;q.next=null,M===null?m=mt:M.next=mt,M=q;var At=e.alternate;At!==null&&(At=At.updateQueue,N=At.lastBaseUpdate,N!==M&&(N===null?At.firstBaseUpdate=mt:N.next=mt,At.lastBaseUpdate=q))}if(m!==null){var Ut=f.baseState;M=0,At=mt=q=null,N=m;do{var vt=N.lane&-536870913,bt=vt!==N.lane;if(bt?(Fe&vt)===vt:(u&vt)===vt){vt!==0&&vt===Nr&&(hh=!0),At!==null&&(At=At.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var le=e,ve=N;vt=i;var rn=r;switch(ve.tag){case 1:if(le=ve.payload,typeof le=="function"){Ut=le.call(rn,Ut,vt);break t}Ut=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ve.payload,vt=typeof le=="function"?le.call(rn,Ut,vt):le,vt==null)break t;Ut=v({},Ut,vt);break t;case 2:rs=!0}}vt=N.callback,vt!==null&&(e.flags|=64,bt&&(e.flags|=8192),bt=f.callbacks,bt===null?f.callbacks=[vt]:bt.push(vt))}else bt={lane:vt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},At===null?(mt=At=bt,q=Ut):At=At.next=bt,M|=vt;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;bt=N,N=bt.next,bt.next=null,f.lastBaseUpdate=bt,f.shared.pending=null}}while(!0);At===null&&(q=Ut),f.baseState=q,f.firstBaseUpdate=mt,f.lastBaseUpdate=At,m===null&&(f.shared.lanes=0),ds|=M,e.lanes=M,e.memoizedState=Ut}}function Hm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Gm(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)Hm(r[e],i)}var zr=I(null),Du=I(0);function Vm(e,i){e=Fa,yt(Du,e),yt(zr,i),Fa=e|i.baseLanes}function dh(){yt(Du,Fa),yt(zr,zr.current)}function ph(){Fa=Du.current,at(zr),at(Du)}var Ai=I(null),Xi=null;function us(e){var i=e.alternate;yt(Mn,Mn.current&1),yt(Ai,e),Xi===null&&(i===null||zr.current!==null||i.memoizedState!==null)&&(Xi=e)}function mh(e){yt(Mn,Mn.current),yt(Ai,e),Xi===null&&(Xi=e)}function km(e){e.tag===22?(yt(Mn,Mn.current),yt(Ai,e),Xi===null&&(Xi=e)):cs()}function cs(){yt(Mn,Mn.current),yt(Ai,Ai.current)}function wi(e){at(Ai),Xi===e&&(Xi=null),at(Mn)}var Mn=I(0);function Uu(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||yd(r)||Md(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ua=0,Ae=null,an=null,wn=null,Nu=!1,Ir=!1,tr=!1,Lu=0,$o=0,Br=null,Dx=0;function xn(){throw Error(a(321))}function gh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!Ei(e[r],i[r]))return!1;return!0}function vh(e,i,r,u,f,m){return Ua=m,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Ag:Nh,tr=!1,m=r(u,f),tr=!1,Ir&&(m=Wm(i,r,u,f)),Xm(e),m}function Xm(e){F.H=nl;var i=an!==null&&an.next!==null;if(Ua=0,wn=an=Ae=null,Nu=!1,$o=0,Br=null,i)throw Error(a(300));e===null||Cn||(e=e.dependencies,e!==null&&bu(e)&&(Cn=!0))}function Wm(e,i,r,u){Ae=e;var f=0;do{if(Ir&&(Br=null),$o=0,Ir=!1,25<=f)throw Error(a(301));if(f+=1,wn=an=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=wg,m=i(r,u)}while(Ir);return m}function Ux(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?tl(i):i,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(Ae.flags|=1024),i}function _h(){var e=Lu!==0;return Lu=0,e}function Sh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function xh(e){if(Nu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nu=!1}Ua=0,wn=an=Ae=null,Ir=!1,$o=Lu=0,Br=null}function ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ae.memoizedState=wn=e:wn=wn.next=e,wn}function bn(){if(an===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var i=wn===null?Ae.memoizedState:wn.next;if(i!==null)wn=i,an=e;else{if(e===null)throw Ae.alternate===null?Error(a(467)):Error(a(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},wn===null?Ae.memoizedState=wn=e:wn=wn.next=e}return wn}function Pu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(e){var i=$o;return $o+=1,Br===null&&(Br=[]),e=Om(Br,e,i),i=Ae,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Ag:Nh),e}function Ou(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return tl(e);if(e.$$typeof===D)return Vn(e)}throw Error(a(438,String(e)))}function yh(e){var i=null,r=Ae.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var u=Ae.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Pu(),Ae.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),u=0;u<e;u++)r[u]=H;return i.index++,r}function Na(e,i){return typeof i=="function"?i(e):i}function zu(e){var i=bn();return Mh(i,an,e)}function Mh(e,i,r){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=r;var f=e.baseQueue,m=u.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,u.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var N=M=null,q=null,mt=i,At=!1;do{var Ut=mt.lane&-536870913;if(Ut!==mt.lane?(Fe&Ut)===Ut:(Ua&Ut)===Ut){var vt=mt.revertLane;if(vt===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null}),Ut===Nr&&(At=!0);else if((Ua&vt)===vt){mt=mt.next,vt===Nr&&(At=!0);continue}else Ut={lane:0,revertLane:mt.revertLane,gesture:null,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},q===null?(N=q=Ut,M=m):q=q.next=Ut,Ae.lanes|=vt,ds|=vt;Ut=mt.action,tr&&r(m,Ut),m=mt.hasEagerState?mt.eagerState:r(m,Ut)}else vt={lane:Ut,revertLane:mt.revertLane,gesture:mt.gesture,action:mt.action,hasEagerState:mt.hasEagerState,eagerState:mt.eagerState,next:null},q===null?(N=q=vt,M=m):q=q.next=vt,Ae.lanes|=Ut,ds|=Ut;mt=mt.next}while(mt!==null&&mt!==i);if(q===null?M=m:q.next=N,!Ei(m,e.memoizedState)&&(Cn=!0,At&&(r=Lr,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=q,u.lastRenderedState=m}return f===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function bh(e){var i=bn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var u=r.dispatch,f=r.pending,m=i.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);Ei(m,i.memoizedState)||(Cn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,u]}function qm(e,i,r){var u=Ae,f=bn(),m=Ve;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!Ei((an||f).memoizedState,r);if(M&&(f.memoizedState=r,Cn=!0),f=f.queue,Ah(Km.bind(null,u,f,e),[e]),f.getSnapshot!==i||M||wn!==null&&wn.memoizedState.tag&1){if(u.flags|=2048,Fr(9,{destroy:void 0},Zm.bind(null,u,f,r,i),null),un===null)throw Error(a(349));m||(Ua&127)!==0||Ym(u,i,r)}return r}function Ym(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=Ae.updateQueue,i===null?(i=Pu(),Ae.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function Zm(e,i,r,u){i.value=r,i.getSnapshot=u,Jm(i)&&Qm(e)}function Km(e,i,r){return r(function(){Jm(i)&&Qm(e)})}function Jm(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!Ei(e,r)}catch{return!0}}function Qm(e){var i=Ws(e,2);i!==null&&Si(i,e,2)}function Eh(e){var i=ii();if(typeof e=="function"){var r=e;if(e=r(),tr){It(!0);try{r()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},i}function jm(e,i,r,u){return e.baseState=r,Mh(e,an,typeof u=="function"?u:Na)}function Nx(e,i,r,u,f){if(Fu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?r(!0):m.isTransition=!1,u(m),r=i.pending,r===null?(m.next=i.pending=m,$m(i,m)):(m.next=r.next,i.pending=r.next=m)}}function $m(e,i){var r=i.action,u=i.payload,f=e.state;if(i.isTransition){var m=F.T,M={};F.T=M;try{var N=r(f,u),q=F.S;q!==null&&q(M,N),tg(e,i,N)}catch(mt){Th(e,i,mt)}finally{m!==null&&M.types!==null&&(m.types=M.types),F.T=m}}else try{m=r(f,u),tg(e,i,m)}catch(mt){Th(e,i,mt)}}function tg(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(u){eg(e,i,u)},function(u){return Th(e,i,u)}):eg(e,i,r)}function eg(e,i,r){i.status="fulfilled",i.value=r,ng(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,$m(e,r)))}function Th(e,i,r){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=r,ng(i),i=i.next;while(i!==u)}e.action=null}function ng(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function ig(e,i){return i}function ag(e,i){if(Ve){var r=un.formState;if(r!==null){t:{var u=Ae;if(Ve){if(dn){e:{for(var f=dn,m=ki;f.nodeType!==8;){if(!m){f=null;break e}if(f=Wi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){dn=Wi(f.nextSibling),u=f.data==="F!";break t}}as(u)}u=!1}u&&(i=r[0])}}return r=ii(),r.memoizedState=r.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:i},r.queue=u,r=bg.bind(null,Ae,u),u.dispatch=r,u=Eh(!1),m=Uh.bind(null,Ae,!1,u.queue),u=ii(),f={state:i,dispatch:null,action:e,pending:null},u.queue=f,r=Nx.bind(null,Ae,f,m,r),f.dispatch=r,u.memoizedState=e,[i,r,!1]}function sg(e){var i=bn();return rg(i,an,e)}function rg(e,i,r){if(i=Mh(e,i,ig)[0],e=zu(Na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=tl(i)}catch(M){throw M===Pr?Au:M}else u=i;i=bn();var f=i.queue,m=f.dispatch;return r!==i.memoizedState&&(Ae.flags|=2048,Fr(9,{destroy:void 0},Lx.bind(null,f,r),null)),[u,m,e]}function Lx(e,i){e.action=i}function og(e){var i=bn(),r=an;if(r!==null)return rg(i,r,e);bn(),i=i.memoizedState,r=bn();var u=r.queue.dispatch;return r.memoizedState=e,[i,u,!1]}function Fr(e,i,r,u){return e={tag:e,create:r,deps:u,inst:i,next:null},i=Ae.updateQueue,i===null&&(i=Pu(),Ae.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(u=r.next,r.next=e,e.next=u,i.lastEffect=e),e}function lg(){return bn().memoizedState}function Iu(e,i,r,u){var f=ii();Ae.flags|=e,f.memoizedState=Fr(1|i,{destroy:void 0},r,u===void 0?null:u)}function Bu(e,i,r,u){var f=bn();u=u===void 0?null:u;var m=f.memoizedState.inst;an!==null&&u!==null&&gh(u,an.memoizedState.deps)?f.memoizedState=Fr(i,m,r,u):(Ae.flags|=e,f.memoizedState=Fr(1|i,m,r,u))}function ug(e,i){Iu(8390656,8,e,i)}function Ah(e,i){Bu(2048,8,e,i)}function Px(e){Ae.flags|=4;var i=Ae.updateQueue;if(i===null)i=Pu(),Ae.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function cg(e){var i=bn().memoizedState;return Px({ref:i,nextImpl:e}),function(){if((Je&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function fg(e,i){return Bu(4,2,e,i)}function hg(e,i){return Bu(4,4,e,i)}function dg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function pg(e,i,r){r=r!=null?r.concat([e]):null,Bu(4,4,dg.bind(null,i,e),r)}function wh(){}function mg(e,i){var r=bn();i=i===void 0?null:i;var u=r.memoizedState;return i!==null&&gh(i,u[1])?u[0]:(r.memoizedState=[e,i],e)}function gg(e,i){var r=bn();i=i===void 0?null:i;var u=r.memoizedState;if(i!==null&&gh(i,u[1]))return u[0];if(u=e(),tr){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[u,i],u}function Ch(e,i,r){return r===void 0||(Ua&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=vv(),Ae.lanes|=e,ds|=e,r)}function vg(e,i,r,u){return Ei(r,i)?r:zr.current!==null?(e=Ch(e,r,u),Ei(e,i)||(Cn=!0),e):(Ua&42)===0||(Ua&1073741824)!==0&&(Fe&261930)===0?(Cn=!0,e.memoizedState=r):(e=vv(),Ae.lanes|=e,ds|=e,i)}function _g(e,i,r,u,f){var m=V.p;V.p=m!==0&&8>m?m:8;var M=F.T,N={};F.T=N,Uh(e,!1,i,r);try{var q=f(),mt=F.S;if(mt!==null&&mt(N,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var At=Rx(q,u);el(e,i,At,Di(e))}else el(e,i,u,Di(e))}catch(Ut){el(e,i,{then:function(){},status:"rejected",reason:Ut},Di())}finally{V.p=m,M!==null&&N.types!==null&&(M.types=N.types),F.T=M}}function Ox(){}function Rh(e,i,r,u){if(e.tag!==5)throw Error(a(476));var f=Sg(e).queue;_g(e,f,i,ft,r===null?Ox:function(){return xg(e),r(u)})}function Sg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ft},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function xg(e){var i=Sg(e);i.next===null&&(i=e.alternate.memoizedState),el(e,i.next.queue,{},Di())}function Dh(){return Vn(_l)}function yg(){return bn().memoizedState}function Mg(){return bn().memoizedState}function zx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Di();e=os(r);var u=ls(i,e,r);u!==null&&(Si(u,i,r),Jo(u,i,r)),i={cache:sh()},e.payload=i;return}i=i.return}}function Ix(e,i,r){var u=Di();r={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Fu(e)?Eg(i,r):(r=Zf(e,i,r,u),r!==null&&(Si(r,e,u),Tg(r,i,u)))}function bg(e,i,r){var u=Di();el(e,i,r,u)}function el(e,i,r,u){var f={lane:u,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Eg(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,N=m(M,r);if(f.hasEagerState=!0,f.eagerState=N,Ei(N,M))return Su(e,i,f,0),un===null&&_u(),!1}catch{}finally{}if(r=Zf(e,i,f,u),r!==null)return Si(r,e,u),Tg(r,i,u),!0}return!1}function Uh(e,i,r,u){if(u={lane:2,revertLane:ud(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Fu(e)){if(i)throw Error(a(479))}else i=Zf(e,r,u,2),i!==null&&Si(i,e,2)}function Fu(e){var i=e.alternate;return e===Ae||i!==null&&i===Ae}function Eg(e,i){Ir=Nu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Tg(e,i,r){if((r&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,r|=u,i.lanes=r,fe(e,r)}}var nl={readContext:Vn,use:Ou,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};nl.useEffectEvent=xn;var Ag={readContext:Vn,use:Ou,useCallback:function(e,i){return ii().memoizedState=[e,i===void 0?null:i],e},useContext:Vn,useEffect:ug,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Iu(4194308,4,dg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Iu(4194308,4,e,i)},useInsertionEffect:function(e,i){Iu(4,2,e,i)},useMemo:function(e,i){var r=ii();i=i===void 0?null:i;var u=e();if(tr){It(!0);try{e()}finally{It(!1)}}return r.memoizedState=[u,i],u},useReducer:function(e,i,r){var u=ii();if(r!==void 0){var f=r(i);if(tr){It(!0);try{r(i)}finally{It(!1)}}}else f=i;return u.memoizedState=u.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},u.queue=e,e=e.dispatch=Ix.bind(null,Ae,e),[u.memoizedState,e]},useRef:function(e){var i=ii();return e={current:e},i.memoizedState=e},useState:function(e){e=Eh(e);var i=e.queue,r=bg.bind(null,Ae,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:wh,useDeferredValue:function(e,i){var r=ii();return Ch(r,e,i)},useTransition:function(){var e=Eh(!1);return e=_g.bind(null,Ae,e.queue,!0,!1),ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var u=Ae,f=ii();if(Ve){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),un===null)throw Error(a(349));(Fe&127)!==0||Ym(u,i,r)}f.memoizedState=r;var m={value:r,getSnapshot:i};return f.queue=m,ug(Km.bind(null,u,m,e),[e]),u.flags|=2048,Fr(9,{destroy:void 0},Zm.bind(null,u,m,r,i),null),r},useId:function(){var e=ii(),i=un.identifierPrefix;if(Ve){var r=ca,u=ua;r=(u&~(1<<32-Jt(u)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Lu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Dx++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Dh,useFormState:ag,useActionState:ag,useOptimistic:function(e){var i=ii();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Uh.bind(null,Ae,!0,r),r.dispatch=i,[e,i]},useMemoCache:yh,useCacheRefresh:function(){return ii().memoizedState=zx.bind(null,Ae)},useEffectEvent:function(e){var i=ii(),r={impl:e};return i.memoizedState=r,function(){if((Je&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Nh={readContext:Vn,use:Ou,useCallback:mg,useContext:Vn,useEffect:Ah,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:zu,useRef:lg,useState:function(){return zu(Na)},useDebugValue:wh,useDeferredValue:function(e,i){var r=bn();return vg(r,an.memoizedState,e,i)},useTransition:function(){var e=zu(Na)[0],i=bn().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:qm,useId:yg,useHostTransitionStatus:Dh,useFormState:sg,useActionState:sg,useOptimistic:function(e,i){var r=bn();return jm(r,an,e,i)},useMemoCache:yh,useCacheRefresh:Mg};Nh.useEffectEvent=cg;var wg={readContext:Vn,use:Ou,useCallback:mg,useContext:Vn,useEffect:Ah,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:bh,useRef:lg,useState:function(){return bh(Na)},useDebugValue:wh,useDeferredValue:function(e,i){var r=bn();return an===null?Ch(r,e,i):vg(r,an.memoizedState,e,i)},useTransition:function(){var e=bh(Na)[0],i=bn().memoizedState;return[typeof e=="boolean"?e:tl(e),i]},useSyncExternalStore:qm,useId:yg,useHostTransitionStatus:Dh,useFormState:og,useActionState:og,useOptimistic:function(e,i){var r=bn();return an!==null?jm(r,an,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:yh,useCacheRefresh:Mg};wg.useEffectEvent=cg;function Lh(e,i,r,u){i=e.memoizedState,r=r(u,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ph={enqueueSetState:function(e,i,r){e=e._reactInternals;var u=Di(),f=os(u);f.payload=i,r!=null&&(f.callback=r),i=ls(e,f,u),i!==null&&(Si(i,e,u),Jo(i,e,u))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var u=Di(),f=os(u);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=ls(e,f,u),i!==null&&(Si(i,e,u),Jo(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Di(),u=os(r);u.tag=2,i!=null&&(u.callback=i),i=ls(e,u,r),i!==null&&(Si(i,e,r),Jo(i,e,r))}};function Cg(e,i,r,u,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,M):i.prototype&&i.prototype.isPureReactComponent?!Vo(r,u)||!Vo(f,m):!0}function Rg(e,i,r,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,u),i.state!==e&&Ph.enqueueReplaceState(i,i.state,null)}function er(e,i){var r=i;if("ref"in i){r={};for(var u in i)u!=="ref"&&(r[u]=i[u])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Dg(e){vu(e)}function Ug(e){console.error(e)}function Ng(e){vu(e)}function Hu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Lg(e,i,r){try{var u=e.onCaughtError;u(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Oh(e,i,r){return r=os(r),r.tag=3,r.payload={element:null},r.callback=function(){Hu(e,i)},r}function Pg(e){return e=os(e),e.tag=3,e}function Og(e,i,r,u){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;e.payload=function(){return f(m)},e.callback=function(){Lg(i,r,u)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Lg(i,r,u),typeof f!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function Bx(e,i,r,u,f){if(r.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=r.alternate,i!==null&&Ur(i,r,f,!0),r=Ai.current,r!==null){switch(r.tag){case 31:case 13:return Xi===null?ju():r.alternate===null&&yn===0&&(yn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,u===wu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([u]):i.add(u),rd(e,u,f)),!1;case 22:return r.flags|=65536,u===wu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([u]):r.add(u)),rd(e,u,f)),!1}throw Error(a(435,r.tag))}return rd(e,u,f),ju(),!1}if(Ve)return i=Ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,u!==th&&(e=Error(a(422),{cause:u}),Wo(Hi(e,r)))):(u!==th&&(i=Error(a(423),{cause:u}),Wo(Hi(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,u=Hi(u,r),f=Oh(e.stateNode,u,f),fh(e,f),yn!==4&&(yn=2)),!1;var m=Error(a(520),{cause:u});if(m=Hi(m,r),cl===null?cl=[m]:cl.push(m),yn!==4&&(yn=2),i===null)return!0;u=Hi(u,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Oh(r.stateNode,u,e),fh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ps===null||!ps.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Pg(f),Og(f,e,r,u),fh(r,f),!1}r=r.return}while(r!==null);return!1}var zh=Error(a(461)),Cn=!1;function kn(e,i,r,u){i.child=e===null?Fm(i,null,r,u):$s(i,e.child,r,u)}function zg(e,i,r,u,f){r=r.render;var m=i.ref;if("ref"in u){var M={};for(var N in u)N!=="ref"&&(M[N]=u[N])}else M=u;return Ks(i),u=vh(e,i,r,M,m,f),N=_h(),e!==null&&!Cn?(Sh(e,i,f),La(e,i,f)):(Ve&&N&&jf(i),i.flags|=1,kn(e,i,u,f),i.child)}function Ig(e,i,r,u,f){if(e===null){var m=r.type;return typeof m=="function"&&!Kf(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Bg(e,i,m,u,f)):(e=yu(r.type,null,u,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Xh(e,f)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Vo,r(M,u)&&e.ref===i.ref)return La(e,i,f)}return i.flags|=1,e=wa(m,u),e.ref=i.ref,e.return=i,i.child=e}function Bg(e,i,r,u,f){if(e!==null){var m=e.memoizedProps;if(Vo(m,u)&&e.ref===i.ref)if(Cn=!1,i.pendingProps=u=m,Xh(e,f))(e.flags&131072)!==0&&(Cn=!0);else return i.lanes=e.lanes,La(e,i,f)}return Ih(e,i,r,u,f)}function Fg(e,i,r,u){var f=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(u=i.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;u=f&~m}else u=0,i.child=null;return Hg(e,i,m,r,u)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Tu(i,m!==null?m.cachePool:null),m!==null?Vm(i,m):dh(),km(i);else return u=i.lanes=536870912,Hg(e,i,m!==null?m.baseLanes|r:r,r,u)}else m!==null?(Tu(i,m.cachePool),Vm(i,m),cs(),i.memoizedState=null):(e!==null&&Tu(i,null),dh(),cs());return kn(e,i,f,r),i.child}function il(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Hg(e,i,r,u,f){var m=oh();return m=m===null?null:{parent:An._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Tu(i,null),dh(),km(i),e!==null&&Ur(e,i,u,!0),i.childLanes=f,null}function Gu(e,i){return i=ku({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Gg(e,i,r){return $s(i,e.child,null,r),e=Gu(i,i.pendingProps),e.flags|=2,wi(i),i.memoizedState=null,e}function Fx(e,i,r){var u=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ve){if(u.mode==="hidden")return e=Gu(i,u),i.lanes=536870912,il(null,e);if(mh(i),(e=dn)?(e=$v(e,ki),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ns!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=Em(e),r.return=i,i.child=r,Gn=i,dn=null)):e=null,e===null)throw as(i);return i.lanes=536870912,null}return Gu(i,u)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(mh(i),f)if(i.flags&256)i.flags&=-257,i=Gg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Cn||Ur(e,i,r,!1),f=(r&e.childLanes)!==0,Cn||f){if(u=un,u!==null&&(M=Me(u,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,Ws(e,M),Si(u,e,M),zh;ju(),i=Gg(e,i,r)}else e=m.treeContext,dn=Wi(M.nextSibling),Gn=i,Ve=!0,is=null,ki=!1,e!==null&&wm(i,e),i=Gu(i,u),i.flags|=4096;return i}return e=wa(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Vu(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Ih(e,i,r,u,f){return Ks(i),r=vh(e,i,r,u,void 0,f),u=_h(),e!==null&&!Cn?(Sh(e,i,f),La(e,i,f)):(Ve&&u&&jf(i),i.flags|=1,kn(e,i,r,f),i.child)}function Vg(e,i,r,u,f,m){return Ks(i),i.updateQueue=null,r=Wm(i,u,r,f),Xm(e),u=_h(),e!==null&&!Cn?(Sh(e,i,m),La(e,i,m)):(Ve&&u&&jf(i),i.flags|=1,kn(e,i,r,m),i.child)}function kg(e,i,r,u,f){if(Ks(i),i.stateNode===null){var m=wr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Vn(M)),m=new r(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ph,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},uh(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Vn(M):wr,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Lh(i,r,M,u),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&Ph.enqueueReplaceState(m,m.state,null),jo(i,u,m,f),Qo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,q=er(r,N);m.props=q;var mt=m.context,At=r.contextType;M=wr,typeof At=="object"&&At!==null&&(M=Vn(At));var Ut=r.getDerivedStateFromProps;At=typeof Ut=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,At||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||mt!==M)&&Rg(i,m,u,M),rs=!1;var vt=i.memoizedState;m.state=vt,jo(i,u,m,f),Qo(),mt=i.memoizedState,N||vt!==mt||rs?(typeof Ut=="function"&&(Lh(i,r,Ut,u),mt=i.memoizedState),(q=rs||Cg(i,r,q,u,vt,mt,M))?(At||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=mt),m.props=u,m.state=mt,m.context=M,u=q):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,ch(e,i),M=i.memoizedProps,At=er(r,M),m.props=At,Ut=i.pendingProps,vt=m.context,mt=r.contextType,q=wr,typeof mt=="object"&&mt!==null&&(q=Vn(mt)),N=r.getDerivedStateFromProps,(mt=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==Ut||vt!==q)&&Rg(i,m,u,q),rs=!1,vt=i.memoizedState,m.state=vt,jo(i,u,m,f),Qo();var bt=i.memoizedState;M!==Ut||vt!==bt||rs||e!==null&&e.dependencies!==null&&bu(e.dependencies)?(typeof N=="function"&&(Lh(i,r,N,u),bt=i.memoizedState),(At=rs||Cg(i,r,At,u,vt,bt,q)||e!==null&&e.dependencies!==null&&bu(e.dependencies))?(mt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,bt,q),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,bt,q)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=bt),m.props=u,m.state=bt,m.context=q,u=At):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&vt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&vt===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,Vu(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,r=u&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=$s(i,e.child,null,f),i.child=$s(i,null,r,f)):kn(e,i,r,f),i.memoizedState=m.state,e=i.child):e=La(e,i,f),e}function Xg(e,i,r,u){return Ys(),i.flags|=256,kn(e,i,r,u),i.child}var Bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fh(e){return{baseLanes:e,cachePool:Lm()}}function Hh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Ri),e}function Wg(e,i,r){var u=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ve){if(f?us(i):cs(),(e=dn)?(e=$v(e,ki),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ns!==null?{id:ua,overflow:ca}:null,retryLane:536870912,hydrationErrors:null},r=Em(e),r.return=i,i.child=r,Gn=i,dn=null)):e=null,e===null)throw as(i);return Md(e)?i.lanes=32:i.lanes=536870912,null}var N=u.children;return u=u.fallback,f?(cs(),f=i.mode,N=ku({mode:"hidden",children:N},f),u=qs(u,f,r,null),N.return=i,u.return=i,N.sibling=u,i.child=N,u=i.child,u.memoizedState=Fh(r),u.childLanes=Hh(e,M,r),i.memoizedState=Bh,il(null,u)):(us(i),Gh(i,N))}var q=e.memoizedState;if(q!==null&&(N=q.dehydrated,N!==null)){if(m)i.flags&256?(us(i),i.flags&=-257,i=Vh(e,i,r)):i.memoizedState!==null?(cs(),i.child=e.child,i.flags|=128,i=null):(cs(),N=u.fallback,f=i.mode,u=ku({mode:"visible",children:u.children},f),N=qs(N,f,r,null),N.flags|=2,u.return=i,N.return=i,u.sibling=N,i.child=u,$s(i,e.child,null,r),u=i.child,u.memoizedState=Fh(r),u.childLanes=Hh(e,M,r),i.memoizedState=Bh,i=il(null,u));else if(us(i),Md(N)){if(M=N.nextSibling&&N.nextSibling.dataset,M)var mt=M.dgst;M=mt,u=Error(a(419)),u.stack="",u.digest=M,Wo({value:u,source:null,stack:null}),i=Vh(e,i,r)}else if(Cn||Ur(e,i,r,!1),M=(r&e.childLanes)!==0,Cn||M){if(M=un,M!==null&&(u=Me(M,r),u!==0&&u!==q.retryLane))throw q.retryLane=u,Ws(e,u),Si(M,e,u),zh;yd(N)||ju(),i=Vh(e,i,r)}else yd(N)?(i.flags|=192,i.child=e.child,i=null):(e=q.treeContext,dn=Wi(N.nextSibling),Gn=i,Ve=!0,is=null,ki=!1,e!==null&&wm(i,e),i=Gh(i,u.children),i.flags|=4096);return i}return f?(cs(),N=u.fallback,f=i.mode,q=e.child,mt=q.sibling,u=wa(q,{mode:"hidden",children:u.children}),u.subtreeFlags=q.subtreeFlags&65011712,mt!==null?N=wa(mt,N):(N=qs(N,f,r,null),N.flags|=2),N.return=i,u.return=i,u.sibling=N,i.child=u,il(null,u),u=i.child,N=e.child.memoizedState,N===null?N=Fh(r):(f=N.cachePool,f!==null?(q=An._currentValue,f=f.parent!==q?{parent:q,pool:q}:f):f=Lm(),N={baseLanes:N.baseLanes|r,cachePool:f}),u.memoizedState=N,u.childLanes=Hh(e,M,r),i.memoizedState=Bh,il(e.child,u)):(us(i),r=e.child,e=r.sibling,r=wa(r,{mode:"visible",children:u.children}),r.return=i,r.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=r,i.memoizedState=null,r)}function Gh(e,i){return i=ku({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ku(e,i){return e=Ti(22,e,null,i),e.lanes=0,e}function Vh(e,i,r){return $s(i,e.child,null,r),e=Gh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function qg(e,i,r){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),ih(e.return,i,r)}function kh(e,i,r,u,f,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:r,tailMode:f,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=u,M.tail=r,M.tailMode=f,M.treeForkCount=m)}function Yg(e,i,r){var u=i.pendingProps,f=u.revealOrder,m=u.tail;u=u.children;var M=Mn.current,N=(M&2)!==0;if(N?(M=M&1|2,i.flags|=128):M&=1,yt(Mn,M),kn(e,i,u,r),u=Ve?Xo:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qg(e,r,i);else if(e.tag===19)qg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Uu(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),kh(i,!1,f,r,m,u);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Uu(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}kh(i,!0,r,null,m,u);break;case"together":kh(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function La(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ds|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ur(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=wa(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=wa(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Xh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&bu(e)))}function Hx(e,i,r){switch(i.tag){case 3:et(i,i.stateNode.containerInfo),ss(i,An,e.memoizedState.cache),Ys();break;case 27:case 5:Yt(i);break;case 4:et(i,i.stateNode.containerInfo);break;case 10:ss(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,mh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(us(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Wg(e,i,r):(us(i),e=La(e,i,r),e!==null?e.sibling:null);us(i);break;case 19:var f=(e.flags&128)!==0;if(u=(r&i.childLanes)!==0,u||(Ur(e,i,r,!1),u=(r&i.childLanes)!==0),f){if(u)return Yg(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),yt(Mn,Mn.current),u)break;return null;case 22:return i.lanes=0,Fg(e,i,r,i.pendingProps);case 24:ss(i,An,e.memoizedState.cache)}return La(e,i,r)}function Zg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Cn=!0;else{if(!Xh(e,r)&&(i.flags&128)===0)return Cn=!1,Hx(e,i,r);Cn=(e.flags&131072)!==0}else Cn=!1,Ve&&(i.flags&1048576)!==0&&Am(i,Xo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=Qs(i.elementType),i.type=e,typeof e=="function")Kf(e)?(u=er(e,u),i.tag=1,i=kg(null,i,e,u,r)):(i.tag=0,i=Ih(null,i,e,u,r));else{if(e!=null){var f=e.$$typeof;if(f===A){i.tag=11,i=zg(null,i,e,u,r);break t}else if(f===O){i.tag=14,i=Ig(null,i,e,u,r);break t}}throw i=G(e)||e,Error(a(306,i,""))}}return i;case 0:return Ih(e,i,i.type,i.pendingProps,r);case 1:return u=i.type,f=er(u,i.pendingProps),kg(e,i,u,f,r);case 3:t:{if(et(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;f=m.element,ch(e,i),jo(i,u,null,r);var M=i.memoizedState;if(u=M.cache,ss(i,An,u),u!==m.cache&&ah(i,[An],r,!0),Qo(),u=M.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Xg(e,i,u,r);break t}else if(u!==f){f=Hi(Error(a(424)),i),Wo(f),i=Xg(e,i,u,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(dn=Wi(e.firstChild),Gn=i,Ve=!0,is=null,ki=!0,r=Fm(i,null,u,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ys(),u===f){i=La(e,i,r);break t}kn(e,i,u,r)}i=i.child}return i;case 26:return Vu(e,i),e===null?(r=s_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ve||(r=i.type,e=i.pendingProps,u=sc(Wt.current).createElement(r),u[Se]=i,u[cn]=e,Xn(u,r,e),En(u),i.stateNode=u):i.memoizedState=s_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Yt(i),e===null&&Ve&&(u=i.stateNode=n_(i.type,i.pendingProps,Wt.current),Gn=i,ki=!0,f=dn,_s(i.type)?(bd=f,dn=Wi(u.firstChild)):dn=f),kn(e,i,i.pendingProps.children,r),Vu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ve&&((f=u=dn)&&(u=gy(u,i.type,i.pendingProps,ki),u!==null?(i.stateNode=u,Gn=i,dn=Wi(u.firstChild),ki=!1,f=!0):f=!1),f||as(i)),Yt(i),f=i.type,m=i.pendingProps,M=e!==null?e.memoizedProps:null,u=m.children,_d(f,m)?u=null:M!==null&&_d(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=vh(e,i,Ux,null,null,r),_l._currentValue=f),Vu(e,i),kn(e,i,u,r),i.child;case 6:return e===null&&Ve&&((e=r=dn)&&(r=vy(r,i.pendingProps,ki),r!==null?(i.stateNode=r,Gn=i,dn=null,e=!0):e=!1),e||as(i)),null;case 13:return Wg(e,i,r);case 4:return et(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=$s(i,null,u,r):kn(e,i,u,r),i.child;case 11:return zg(e,i,i.type,i.pendingProps,r);case 7:return kn(e,i,i.pendingProps,r),i.child;case 8:return kn(e,i,i.pendingProps.children,r),i.child;case 12:return kn(e,i,i.pendingProps.children,r),i.child;case 10:return u=i.pendingProps,ss(i,i.type,u.value),kn(e,i,u.children,r),i.child;case 9:return f=i.type._context,u=i.pendingProps.children,Ks(i),f=Vn(f),u=u(f),i.flags|=1,kn(e,i,u,r),i.child;case 14:return Ig(e,i,i.type,i.pendingProps,r);case 15:return Bg(e,i,i.type,i.pendingProps,r);case 19:return Yg(e,i,r);case 31:return Fx(e,i,r);case 22:return Fg(e,i,r,i.pendingProps);case 24:return Ks(i),u=Vn(An),e===null?(f=oh(),f===null&&(f=un,m=sh(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),i.memoizedState={parent:u,cache:f},uh(i),ss(i,An,f)):((e.lanes&r)!==0&&(ch(e,i),jo(i,null,null,r),Qo()),f=e.memoizedState,m=i.memoizedState,f.parent!==u?(f={parent:u,cache:u},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ss(i,An,u)):(u=m.cache,ss(i,An,u),u!==f.cache&&ah(i,[An],r,!0))),kn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Pa(e){e.flags|=4}function Wh(e,i,r,u,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(yv())e.flags|=8192;else throw js=wu,lh}else e.flags&=-16777217}function Kg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!c_(i))if(yv())e.flags|=8192;else throw js=wu,lh}function Xu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?L():536870912,e.lanes|=i,kr|=i)}function al(e,i){if(!Ve)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var u=null;r!==null;)r.alternate!==null&&(u=r),r=r.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function pn(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,u=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=u,e.childLanes=r,i}function Gx(e,i,r){var u=i.pendingProps;switch($f(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return pn(i),null;case 3:return r=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Da(An),Et(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Dr(i)?Pa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,eh())),pn(i),null;case 26:var f=i.type,m=i.memoizedState;return e===null?(Pa(i),m!==null?(pn(i),Kg(i,m)):(pn(i),Wh(i,f,null,u,r))):m?m!==e.memoizedState?(Pa(i),pn(i),Kg(i,m)):(pn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&Pa(i),pn(i),Wh(i,f,e,u,r)),null;case 27:if(zt(i),r=Wt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return pn(i),null}e=Lt.current,Dr(i)?Cm(i):(e=n_(f,u,r),i.stateNode=e,Pa(i))}return pn(i),null;case 5:if(zt(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return pn(i),null}if(m=Lt.current,Dr(i))Cm(i);else{var M=sc(Wt.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?M.createElement("select",{is:u.is}):M.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?M.createElement(f,{is:u.is}):M.createElement(f)}}m[Se]=i,m[cn]=u;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;t:switch(Xn(m,f,u),f){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&Pa(i)}}return pn(i),Wh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&Pa(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=Wt.current,Dr(i)){if(e=i.stateNode,r=i.memoizedProps,u=null,f=Gn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}e[Se]=i,e=!!(e.nodeValue===r||u!==null&&u.suppressHydrationWarning===!0||Wv(e.nodeValue,r)),e||as(i,!0)}else e=sc(e).createTextNode(u),e[Se]=i,i.stateNode=e}return pn(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(u=Dr(i),r!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[Se]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),e=!1}else r=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(wi(i),i):(wi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return pn(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Dr(i),u!==null&&u.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[Se]=i}else Ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),f=!1}else f=eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(wi(i),i):(wi(i),null)}return wi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=u!==null,e=e!==null&&e.memoizedState!==null,r&&(u=i.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Xu(i,i.updateQueue),pn(i),null);case 4:return Et(),e===null&&dd(i.stateNode.containerInfo),pn(i),null;case 10:return Da(i.type),pn(i),null;case 19:if(at(Mn),u=i.memoizedState,u===null)return pn(i),null;if(f=(i.flags&128)!==0,m=u.rendering,m===null)if(f)al(u,!1);else{if(yn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Uu(e),m!==null){for(i.flags|=128,al(u,!1),e=m.updateQueue,i.updateQueue=e,Xu(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)bm(r,e),r=r.sibling;return yt(Mn,Mn.current&1|2),Ve&&Ca(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&_e()>Ku&&(i.flags|=128,f=!0,al(u,!1),i.lanes=4194304)}else{if(!f)if(e=Uu(m),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Xu(i,e),al(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Ve)return pn(i),null}else 2*_e()-u.renderingStartTime>Ku&&r!==536870912&&(i.flags|=128,f=!0,al(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=_e(),e.sibling=null,r=Mn.current,yt(Mn,f?r&1|2:r&1),Ve&&Ca(i,u.treeForkCount),e):(pn(i),null);case 22:case 23:return wi(i),ph(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(r&536870912)!==0&&(i.flags&128)===0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),r=i.updateQueue,r!==null&&Xu(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==r&&(i.flags|=2048),e!==null&&at(Js),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Da(An),pn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Vx(e,i){switch($f(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Da(An),Et(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return zt(i),null;case 31:if(i.memoizedState!==null){if(wi(i),i.alternate===null)throw Error(a(340));Ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(wi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(Mn),null;case 4:return Et(),null;case 10:return Da(i.type),null;case 22:case 23:return wi(i),ph(),e!==null&&at(Js),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Da(An),null;case 25:return null;default:return null}}function Jg(e,i){switch($f(i),i.tag){case 3:Da(An),Et();break;case 26:case 27:case 5:zt(i);break;case 4:Et();break;case 31:i.memoizedState!==null&&wi(i);break;case 13:wi(i);break;case 19:at(Mn);break;case 10:Da(i.type);break;case 22:case 23:wi(i),ph(),e!==null&&at(Js);break;case 24:Da(An)}}function sl(e,i){try{var r=i.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){u=void 0;var m=r.create,M=r.inst;u=m(),M.destroy=u}r=r.next}while(r!==f)}}catch(N){tn(i,i.return,N)}}function fs(e,i,r){try{var u=i.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&e)===e){var M=u.inst,N=M.destroy;if(N!==void 0){M.destroy=void 0,f=i;var q=r,mt=N;try{mt()}catch(At){tn(f,q,At)}}}u=u.next}while(u!==m)}}catch(At){tn(i,i.return,At)}}function Qg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{Gm(i,r)}catch(u){tn(e,e.return,u)}}}function jg(e,i,r){r.props=er(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(u){tn(e,i,u)}}function rl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof r=="function"?e.refCleanup=r(u):r.current=u}}catch(f){tn(e,i,f)}}function fa(e,i){var r=e.ref,u=e.refCleanup;if(r!==null)if(typeof u=="function")try{u()}catch(f){tn(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){tn(e,i,f)}else r.current=null}function $g(e){var i=e.type,r=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&u.focus();break t;case"img":r.src?u.src=r.src:r.srcSet&&(u.srcset=r.srcSet)}}catch(f){tn(e,e.return,f)}}function qh(e,i,r){try{var u=e.stateNode;cy(u,e.type,r,i),u[cn]=i}catch(f){tn(e,e.return,f)}}function tv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_s(e.type)||e.tag===4}function Yh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||tv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_s(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zh(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Bi));else if(u!==4&&(u===27&&_s(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Zh(e,i,r),e=e.sibling;e!==null;)Zh(e,i,r),e=e.sibling}function Wu(e,i,r){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(u!==4&&(u===27&&_s(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Wu(e,i,r),e=e.sibling;e!==null;)Wu(e,i,r),e=e.sibling}function ev(e){var i=e.stateNode,r=e.memoizedProps;try{for(var u=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Xn(i,u,r),i[Se]=e,i[cn]=r}catch(m){tn(e,e.return,m)}}var Oa=!1,Rn=!1,Kh=!1,nv=typeof WeakSet=="function"?WeakSet:Set,In=null;function kx(e,i){if(e=e.containerInfo,gd=hc,e=pm(e),Vf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,N=-1,q=-1,mt=0,At=0,Ut=e,vt=null;e:for(;;){for(var bt;Ut!==r||f!==0&&Ut.nodeType!==3||(N=M+f),Ut!==m||u!==0&&Ut.nodeType!==3||(q=M+u),Ut.nodeType===3&&(M+=Ut.nodeValue.length),(bt=Ut.firstChild)!==null;)vt=Ut,Ut=bt;for(;;){if(Ut===e)break e;if(vt===r&&++mt===f&&(N=M),vt===m&&++At===u&&(q=M),(bt=Ut.nextSibling)!==null)break;Ut=vt,vt=Ut.parentNode}Ut=bt}r=N===-1||q===-1?null:{start:N,end:q}}else r=null}r=r||{start:0,end:0}}else r=null;for(vd={focusedElem:e,selectionRange:r},hc=!1,In=i;In!==null;)if(i=In,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,In=e;else for(;In!==null;){switch(i=In,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,f=m.memoizedProps,m=m.memoizedState,u=r.stateNode;try{var le=er(r.type,f);e=u.getSnapshotBeforeUpdate(le,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(ve){tn(r,r.return,ve)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)xd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":xd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,In=e;break}In=i.return}}function iv(e,i,r){var u=r.flags;switch(r.tag){case 0:case 11:case 15:Ia(e,r),u&4&&sl(5,r);break;case 1:if(Ia(e,r),u&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(M){tn(r,r.return,M)}else{var f=er(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){tn(r,r.return,M)}}u&64&&Qg(r),u&512&&rl(r,r.return);break;case 3:if(Ia(e,r),u&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Gm(e,i)}catch(M){tn(r,r.return,M)}}break;case 27:i===null&&u&4&&ev(r);case 26:case 5:Ia(e,r),i===null&&u&4&&$g(r),u&512&&rl(r,r.return);break;case 12:Ia(e,r);break;case 31:Ia(e,r),u&4&&rv(e,r);break;case 13:Ia(e,r),u&4&&ov(e,r),u&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=jx.bind(null,r),_y(e,r))));break;case 22:if(u=r.memoizedState!==null||Oa,!u){i=i!==null&&i.memoizedState!==null||Rn,f=Oa;var m=Rn;Oa=u,(Rn=i)&&!m?Ba(e,r,(r.subtreeFlags&8772)!==0):Ia(e,r),Oa=f,Rn=m}break;case 30:break;default:Ia(e,r)}}function av(e){var i=e.alternate;i!==null&&(e.alternate=null,av(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ja(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gn=null,mi=!1;function za(e,i,r){for(r=r.child;r!==null;)sv(e,i,r),r=r.sibling}function sv(e,i,r){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(St,r)}catch{}switch(r.tag){case 26:Rn||fa(r,i),za(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Rn||fa(r,i);var u=gn,f=mi;_s(r.type)&&(gn=r.stateNode,mi=!1),za(e,i,r),ml(r.stateNode),gn=u,mi=f;break;case 5:Rn||fa(r,i);case 6:if(u=gn,f=mi,gn=null,za(e,i,r),gn=u,mi=f,gn!==null)if(mi)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(r.stateNode)}catch(m){tn(r,i,m)}else try{gn.removeChild(r.stateNode)}catch(m){tn(r,i,m)}break;case 18:gn!==null&&(mi?(e=gn,Qv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Qr(e)):Qv(gn,r.stateNode));break;case 4:u=gn,f=mi,gn=r.stateNode.containerInfo,mi=!0,za(e,i,r),gn=u,mi=f;break;case 0:case 11:case 14:case 15:fs(2,r,i),Rn||fs(4,r,i),za(e,i,r);break;case 1:Rn||(fa(r,i),u=r.stateNode,typeof u.componentWillUnmount=="function"&&jg(r,i,u)),za(e,i,r);break;case 21:za(e,i,r);break;case 22:Rn=(u=Rn)||r.memoizedState!==null,za(e,i,r),Rn=u;break;default:za(e,i,r)}}function rv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(r){tn(i,i.return,r)}}}function ov(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(r){tn(i,i.return,r)}}function Xx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new nv),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new nv),i;default:throw Error(a(435,e.tag))}}function qu(e,i){var r=Xx(e);i.forEach(function(u){if(!r.has(u)){r.add(u);var f=$x.bind(null,e,u);u.then(f,f)}})}function gi(e,i){var r=i.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],m=e,M=i,N=M;t:for(;N!==null;){switch(N.tag){case 27:if(_s(N.type)){gn=N.stateNode,mi=!1;break t}break;case 5:gn=N.stateNode,mi=!1;break t;case 3:case 4:gn=N.stateNode.containerInfo,mi=!0;break t}N=N.return}if(gn===null)throw Error(a(160));sv(m,M,f),gn=null,mi=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)lv(i,e),i=i.sibling}var ji=null;function lv(e,i){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gi(i,e),vi(e),u&4&&(fs(3,e,e.return),sl(3,e),fs(5,e,e.return));break;case 1:gi(i,e),vi(e),u&512&&(Rn||r===null||fa(r,r.return)),u&64&&Oa&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?u:r.concat(u))));break;case 26:var f=ji;if(gi(i,e),vi(e),u&512&&(Rn||r===null||fa(r,r.return)),u&4){var m=r!==null?r.memoizedState:null;if(u=e.memoizedState,r===null)if(u===null)if(e.stateNode===null){t:{u=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Qa]||m[Se]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Xn(m,u,r),m[Se]=e,En(m),u=m;break t;case"link":var M=l_("link","href",f).get(u+(r.href||""));if(M){for(var N=0;N<M.length;N++)if(m=M[N],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(N,1);break e}}m=f.createElement(u),Xn(m,u,r),f.head.appendChild(m);break;case"meta":if(M=l_("meta","content",f).get(u+(r.content||""))){for(N=0;N<M.length;N++)if(m=M[N],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(N,1);break e}}m=f.createElement(u),Xn(m,u,r),f.head.appendChild(m);break;default:throw Error(a(468,u))}m[Se]=e,En(m),u=m}e.stateNode=u}else u_(f,e.type,e.stateNode);else e.stateNode=o_(f,u,e.memoizedProps);else m!==u?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,u===null?u_(f,e.type,e.stateNode):o_(f,u,e.memoizedProps)):u===null&&e.stateNode!==null&&qh(e,e.memoizedProps,r.memoizedProps)}break;case 27:gi(i,e),vi(e),u&512&&(Rn||r===null||fa(r,r.return)),r!==null&&u&4&&qh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(gi(i,e),vi(e),u&512&&(Rn||r===null||fa(r,r.return)),e.flags&32){f=e.stateNode;try{ni(f,"")}catch(le){tn(e,e.return,le)}}u&4&&e.stateNode!=null&&(f=e.memoizedProps,qh(e,f,r!==null?r.memoizedProps:f)),u&1024&&(Kh=!0);break;case 6:if(gi(i,e),vi(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,r=e.stateNode;try{r.nodeValue=u}catch(le){tn(e,e.return,le)}}break;case 3:if(lc=null,f=ji,ji=rc(i.containerInfo),gi(i,e),ji=f,vi(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(i.containerInfo)}catch(le){tn(e,e.return,le)}Kh&&(Kh=!1,uv(e));break;case 4:u=ji,ji=rc(e.stateNode.containerInfo),gi(i,e),vi(e),ji=u;break;case 12:gi(i,e),vi(e);break;case 31:gi(i,e),vi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,qu(e,u)));break;case 13:gi(i,e),vi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zu=_e()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,qu(e,u)));break;case 22:f=e.memoizedState!==null;var q=r!==null&&r.memoizedState!==null,mt=Oa,At=Rn;if(Oa=mt||f,Rn=At||q,gi(i,e),Rn=At,Oa=mt,vi(e),u&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||q||Oa||Rn||nr(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){q=r=i;try{if(m=q.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{N=q.stateNode;var Ut=q.memoizedProps.style,vt=Ut!=null&&Ut.hasOwnProperty("display")?Ut.display:null;N.style.display=vt==null||typeof vt=="boolean"?"":(""+vt).trim()}}catch(le){tn(q,q.return,le)}}}else if(i.tag===6){if(r===null){q=i;try{q.stateNode.nodeValue=f?"":q.memoizedProps}catch(le){tn(q,q.return,le)}}}else if(i.tag===18){if(r===null){q=i;try{var bt=q.stateNode;f?jv(bt,!0):jv(q.stateNode,!1)}catch(le){tn(q,q.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(r=u.retryQueue,r!==null&&(u.retryQueue=null,qu(e,r))));break;case 19:gi(i,e),vi(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,qu(e,u)));break;case 30:break;case 21:break;default:gi(i,e),vi(e)}}function vi(e){var i=e.flags;if(i&2){try{for(var r,u=e.return;u!==null;){if(tv(u)){r=u;break}u=u.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,m=Yh(e);Wu(e,m,f);break;case 5:var M=r.stateNode;r.flags&32&&(ni(M,""),r.flags&=-33);var N=Yh(e);Wu(e,N,M);break;case 3:case 4:var q=r.stateNode.containerInfo,mt=Yh(e);Zh(e,mt,q);break;default:throw Error(a(161))}}catch(At){tn(e,e.return,At)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function uv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;uv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ia(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)iv(e,i.alternate,i),i=i.sibling}function nr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:fs(4,i,i.return),nr(i);break;case 1:fa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&jg(i,i.return,r),nr(i);break;case 27:ml(i.stateNode);case 26:case 5:fa(i,i.return),nr(i);break;case 22:i.memoizedState===null&&nr(i);break;case 30:nr(i);break;default:nr(i)}e=e.sibling}}function Ba(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,f=e,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Ba(f,m,r),sl(4,m);break;case 1:if(Ba(f,m,r),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(mt){tn(u,u.return,mt)}if(u=m,f=u.updateQueue,f!==null){var N=u.stateNode;try{var q=f.shared.hiddenCallbacks;if(q!==null)for(f.shared.hiddenCallbacks=null,f=0;f<q.length;f++)Hm(q[f],N)}catch(mt){tn(u,u.return,mt)}}r&&M&64&&Qg(m),rl(m,m.return);break;case 27:ev(m);case 26:case 5:Ba(f,m,r),r&&u===null&&M&4&&$g(m),rl(m,m.return);break;case 12:Ba(f,m,r);break;case 31:Ba(f,m,r),r&&M&4&&rv(f,m);break;case 13:Ba(f,m,r),r&&M&4&&ov(f,m);break;case 22:m.memoizedState===null&&Ba(f,m,r),rl(m,m.return);break;case 30:break;default:Ba(f,m,r)}i=i.sibling}}function Jh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&qo(r))}function Qh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&qo(e))}function $i(e,i,r,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)cv(e,i,r,u),i=i.sibling}function cv(e,i,r,u){var f=i.flags;switch(i.tag){case 0:case 11:case 15:$i(e,i,r,u),f&2048&&sl(9,i);break;case 1:$i(e,i,r,u);break;case 3:$i(e,i,r,u),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&qo(e)));break;case 12:if(f&2048){$i(e,i,r,u),e=i.stateNode;try{var m=i.memoizedProps,M=m.id,N=m.onPostCommit;typeof N=="function"&&N(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){tn(i,i.return,q)}}else $i(e,i,r,u);break;case 31:$i(e,i,r,u);break;case 13:$i(e,i,r,u);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?$i(e,i,r,u):ol(e,i):m._visibility&2?$i(e,i,r,u):(m._visibility|=2,Hr(e,i,r,u,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Jh(M,i);break;case 24:$i(e,i,r,u),f&2048&&Qh(i.alternate,i);break;default:$i(e,i,r,u)}}function Hr(e,i,r,u,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,M=i,N=r,q=u,mt=M.flags;switch(M.tag){case 0:case 11:case 15:Hr(m,M,N,q,f),sl(8,M);break;case 23:break;case 22:var At=M.stateNode;M.memoizedState!==null?At._visibility&2?Hr(m,M,N,q,f):ol(m,M):(At._visibility|=2,Hr(m,M,N,q,f)),f&&mt&2048&&Jh(M.alternate,M);break;case 24:Hr(m,M,N,q,f),f&&mt&2048&&Qh(M.alternate,M);break;default:Hr(m,M,N,q,f)}i=i.sibling}}function ol(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,u=i,f=u.flags;switch(u.tag){case 22:ol(r,u),f&2048&&Jh(u.alternate,u);break;case 24:ol(r,u),f&2048&&Qh(u.alternate,u);break;default:ol(r,u)}i=i.sibling}}var ll=8192;function Gr(e,i,r){if(e.subtreeFlags&ll)for(e=e.child;e!==null;)fv(e,i,r),e=e.sibling}function fv(e,i,r){switch(e.tag){case 26:Gr(e,i,r),e.flags&ll&&e.memoizedState!==null&&Dy(r,ji,e.memoizedState,e.memoizedProps);break;case 5:Gr(e,i,r);break;case 3:case 4:var u=ji;ji=rc(e.stateNode.containerInfo),Gr(e,i,r),ji=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=ll,ll=16777216,Gr(e,i,r),ll=u):Gr(e,i,r));break;default:Gr(e,i,r)}}function hv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ul(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];In=u,pv(u,e)}hv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dv(e),e=e.sibling}function dv(e){switch(e.tag){case 0:case 11:case 15:ul(e),e.flags&2048&&fs(9,e,e.return);break;case 3:ul(e);break;case 12:ul(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Yu(e)):ul(e);break;default:ul(e)}}function Yu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var u=i[r];In=u,pv(u,e)}hv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:fs(8,i,i.return),Yu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Yu(i));break;default:Yu(i)}e=e.sibling}}function pv(e,i){for(;In!==null;){var r=In;switch(r.tag){case 0:case 11:case 15:fs(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var u=r.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:qo(r.memoizedState.cache)}if(u=r.child,u!==null)u.return=r,In=u;else t:for(r=e;In!==null;){u=In;var f=u.sibling,m=u.return;if(av(u),u===r){In=null;break t}if(f!==null){f.return=m,In=f;break t}In=m}}}var Wx={getCacheForType:function(e){var i=Vn(An),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Vn(An).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Je=0,un=null,ze=null,Fe=0,$e=0,Ci=null,hs=!1,Vr=!1,jh=!1,Fa=0,yn=0,ds=0,ir=0,$h=0,Ri=0,kr=0,cl=null,_i=null,td=!1,Zu=0,mv=0,Ku=1/0,Ju=null,ps=null,Nn=0,ms=null,Xr=null,Ha=0,ed=0,nd=null,gv=null,fl=0,id=null;function Di(){return(Je&2)!==0&&Fe!==0?Fe&-Fe:F.T!==null?ud():ke()}function vv(){if(Ri===0)if((Fe&536870912)===0||Ve){var e=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),Ri=e}else Ri=536870912;return e=Ai.current,e!==null&&(e.flags|=32),Ri}function Si(e,i,r){(e===un&&($e===2||$e===9)||e.cancelPendingCommit!==null)&&(Wr(e,0),gs(e,Fe,Ri,!1)),K(e,r),((Je&2)===0||e!==un)&&(e===un&&((Je&2)===0&&(ir|=r),yn===4&&gs(e,Fe,Ri,!1)),ha(e))}function _v(e,i,r){if((Je&6)!==0)throw Error(a(327));var u=!r&&(i&127)===0&&(i&e.expiredLanes)===0||kt(e,i),f=u?Kx(e,i):sd(e,i,!0),m=u;do{if(f===0){Vr&&!u&&gs(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!Yx(r)){f=sd(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var N=e;f=cl;var q=N.current.memoizedState.isDehydrated;if(q&&(Wr(N,M).flags|=256),M=sd(N,M,!1),M!==2){if(jh&&!q){N.errorRecoveryDisabledLanes|=m,ir|=m,f=4;break t}m=_i,_i=f,m!==null&&(_i===null?_i=m:_i.push.apply(_i,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){Wr(e,0),gs(e,i,0,!0);break}t:{switch(u=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:gs(u,i,Ri,!hs);break t;case 2:_i=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Zu+300-_e(),10<f)){if(gs(u,i,Ri,!hs),Tt(u,0,!0)!==0)break t;Ha=i,u.timeoutHandle=Kv(Sv.bind(null,u,r,_i,Ju,td,i,Ri,ir,kr,hs,m,"Throttled",-0,0),f);break t}Sv(u,r,_i,Ju,td,i,Ri,ir,kr,hs,m,null,-0,0)}}break}while(!0);ha(e)}function Sv(e,i,r,u,f,m,M,N,q,mt,At,Ut,vt,bt){if(e.timeoutHandle=-1,Ut=i.subtreeFlags,Ut&8192||(Ut&16785408)===16785408){Ut={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},fv(i,m,Ut);var le=(m&62914560)===m?Zu-_e():(m&4194048)===m?mv-_e():0;if(le=Uy(Ut,le),le!==null){Ha=m,e.cancelPendingCommit=le(wv.bind(null,e,i,m,r,u,f,M,N,q,At,Ut,null,vt,bt)),gs(e,m,M,!mt);return}}wv(e,i,m,r,u,f,M,N,q)}function Yx(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var u=0;u<r.length;u++){var f=r[u],m=f.getSnapshot;f=f.value;try{if(!Ei(m(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function gs(e,i,r,u){i&=~$h,i&=~ir,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var f=i;0<f;){var m=31-Jt(f),M=1<<m;u[m]=-1,f&=~M}r!==0&&Dt(e,r,i)}function Qu(){return(Je&6)===0?(hl(0),!1):!0}function ad(){if(ze!==null){if($e===0)var e=ze.return;else e=ze,Ra=Zs=null,xh(e),Or=null,Zo=0,e=ze;for(;e!==null;)Jg(e.alternate,e),e=e.return;ze=null}}function Wr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,dy(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ha=0,ad(),un=e,ze=r=wa(e.current,null),Fe=i,$e=0,Ci=null,hs=!1,Vr=kt(e,i),jh=!1,kr=Ri=$h=ir=ds=yn=0,_i=cl=null,td=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var f=31-Jt(u),m=1<<f;i|=e[f],u&=~m}return Fa=i,_u(),r}function xv(e,i){Ae=null,F.H=nl,i===Pr||i===Au?(i=zm(),$e=3):i===lh?(i=zm(),$e=4):$e=i===zh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ci=i,ze===null&&(yn=1,Hu(e,Hi(i,e.current)))}function yv(){var e=Ai.current;return e===null?!0:(Fe&4194048)===Fe?Xi===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===Xi:!1}function Mv(){var e=F.H;return F.H=nl,e===null?nl:e}function bv(){var e=F.A;return F.A=Wx,e}function ju(){yn=4,hs||(Fe&4194048)!==Fe&&Ai.current!==null||(Vr=!0),(ds&134217727)===0&&(ir&134217727)===0||un===null||gs(un,Fe,Ri,!1)}function sd(e,i,r){var u=Je;Je|=2;var f=Mv(),m=bv();(un!==e||Fe!==i)&&(Ju=null,Wr(e,i)),i=!1;var M=yn;t:do try{if($e!==0&&ze!==null){var N=ze,q=Ci;switch($e){case 8:ad(),M=6;break t;case 3:case 2:case 9:case 6:Ai.current===null&&(i=!0);var mt=$e;if($e=0,Ci=null,qr(e,N,q,mt),r&&Vr){M=0;break t}break;default:mt=$e,$e=0,Ci=null,qr(e,N,q,mt)}}Zx(),M=yn;break}catch(At){xv(e,At)}while(!0);return i&&e.shellSuspendCounter++,Ra=Zs=null,Je=u,F.H=f,F.A=m,ze===null&&(un=null,Fe=0,_u()),M}function Zx(){for(;ze!==null;)Ev(ze)}function Kx(e,i){var r=Je;Je|=2;var u=Mv(),f=bv();un!==e||Fe!==i?(Ju=null,Ku=_e()+500,Wr(e,i)):Vr=kt(e,i);t:do try{if($e!==0&&ze!==null){i=ze;var m=Ci;e:switch($e){case 1:$e=0,Ci=null,qr(e,i,m,1);break;case 2:case 9:if(Pm(m)){$e=0,Ci=null,Tv(i);break}i=function(){$e!==2&&$e!==9||un!==e||($e=7),ha(e)},m.then(i,i);break t;case 3:$e=7;break t;case 4:$e=5;break t;case 7:Pm(m)?($e=0,Ci=null,Tv(i)):($e=0,Ci=null,qr(e,i,m,7));break;case 5:var M=null;switch(ze.tag){case 26:M=ze.memoizedState;case 5:case 27:var N=ze;if(M?c_(M):N.stateNode.complete){$e=0,Ci=null;var q=N.sibling;if(q!==null)ze=q;else{var mt=N.return;mt!==null?(ze=mt,$u(mt)):ze=null}break e}}$e=0,Ci=null,qr(e,i,m,5);break;case 6:$e=0,Ci=null,qr(e,i,m,6);break;case 8:ad(),yn=6;break t;default:throw Error(a(462))}}Jx();break}catch(At){xv(e,At)}while(!0);return Ra=Zs=null,F.H=u,F.A=f,Je=r,ze!==null?0:(un=null,Fe=0,_u(),yn)}function Jx(){for(;ze!==null&&!ge();)Ev(ze)}function Ev(e){var i=Zg(e.alternate,e,Fa);e.memoizedProps=e.pendingProps,i===null?$u(e):ze=i}function Tv(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Vg(r,i,i.pendingProps,i.type,void 0,Fe);break;case 11:i=Vg(r,i,i.pendingProps,i.type.render,i.ref,Fe);break;case 5:xh(i);default:Jg(r,i),i=ze=bm(i,Fa),i=Zg(r,i,Fa)}e.memoizedProps=e.pendingProps,i===null?$u(e):ze=i}function qr(e,i,r,u){Ra=Zs=null,xh(i),Or=null,Zo=0;var f=i.return;try{if(Bx(e,f,i,r,Fe)){yn=1,Hu(e,Hi(r,e.current)),ze=null;return}}catch(m){if(f!==null)throw ze=f,m;yn=1,Hu(e,Hi(r,e.current)),ze=null;return}i.flags&32768?(Ve||u===1?e=!0:Vr||(Fe&536870912)!==0?e=!1:(hs=e=!0,(u===2||u===9||u===3||u===6)&&(u=Ai.current,u!==null&&u.tag===13&&(u.flags|=16384))),Av(i,e)):$u(i)}function $u(e){var i=e;do{if((i.flags&32768)!==0){Av(i,hs);return}e=i.return;var r=Gx(i.alternate,i,Fa);if(r!==null){ze=r;return}if(i=i.sibling,i!==null){ze=i;return}ze=i=e}while(i!==null);yn===0&&(yn=5)}function Av(e,i){do{var r=Vx(e.alternate,e);if(r!==null){r.flags&=32767,ze=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){ze=e;return}ze=e=r}while(e!==null);yn=6,ze=null}function wv(e,i,r,u,f,m,M,N,q){e.cancelPendingCommit=null;do tc();while(Nn!==0);if((Je&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Yf,ut(e,r,m,M,N,q),e===un&&(ze=un=null,Fe=0),Xr=i,ms=e,Ha=r,ed=m,nd=f,gv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ty(it,function(){return Nv(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=F.T,F.T=null,f=V.p,V.p=2,M=Je,Je|=4;try{kx(e,i,r)}finally{Je=M,V.p=f,F.T=u}}Nn=1,Cv(),Rv(),Dv()}}function Cv(){if(Nn===1){Nn=0;var e=ms,i=Xr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var u=V.p;V.p=2;var f=Je;Je|=4;try{lv(i,e);var m=vd,M=pm(e.containerInfo),N=m.focusedElem,q=m.selectionRange;if(M!==N&&N&&N.ownerDocument&&dm(N.ownerDocument.documentElement,N)){if(q!==null&&Vf(N)){var mt=q.start,At=q.end;if(At===void 0&&(At=mt),"selectionStart"in N)N.selectionStart=mt,N.selectionEnd=Math.min(At,N.value.length);else{var Ut=N.ownerDocument||document,vt=Ut&&Ut.defaultView||window;if(vt.getSelection){var bt=vt.getSelection(),le=N.textContent.length,ve=Math.min(q.start,le),rn=q.end===void 0?ve:Math.min(q.end,le);!bt.extend&&ve>rn&&(M=rn,rn=ve,ve=M);var st=hm(N,ve),j=hm(N,rn);if(st&&j&&(bt.rangeCount!==1||bt.anchorNode!==st.node||bt.anchorOffset!==st.offset||bt.focusNode!==j.node||bt.focusOffset!==j.offset)){var pt=Ut.createRange();pt.setStart(st.node,st.offset),bt.removeAllRanges(),ve>rn?(bt.addRange(pt),bt.extend(j.node,j.offset)):(pt.setEnd(j.node,j.offset),bt.addRange(pt))}}}}for(Ut=[],bt=N;bt=bt.parentNode;)bt.nodeType===1&&Ut.push({element:bt,left:bt.scrollLeft,top:bt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Ut.length;N++){var Rt=Ut[N];Rt.element.scrollLeft=Rt.left,Rt.element.scrollTop=Rt.top}}hc=!!gd,vd=gd=null}finally{Je=f,V.p=u,F.T=r}}e.current=i,Nn=2}}function Rv(){if(Nn===2){Nn=0;var e=ms,i=Xr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var u=V.p;V.p=2;var f=Je;Je|=4;try{iv(e,i.alternate,i)}finally{Je=f,V.p=u,F.T=r}}Nn=3}}function Dv(){if(Nn===4||Nn===3){Nn=0,Z();var e=ms,i=Xr,r=Ha,u=gv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Nn=5:(Nn=0,Xr=ms=null,Uv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(ps=null),zn(r),i=i.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(St,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=F.T,f=V.p,V.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<u.length;M++){var N=u[M];m(N.value,{componentStack:N.stack})}}finally{F.T=i,V.p=f}}(Ha&3)!==0&&tc(),ha(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===id?fl++:(fl=0,id=e):fl=0,hl(0)}}function Uv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,qo(i)))}function tc(){return Cv(),Rv(),Dv(),Nv()}function Nv(){if(Nn!==5)return!1;var e=ms,i=ed;ed=0;var r=zn(Ha),u=F.T,f=V.p;try{V.p=32>r?32:r,F.T=null,r=nd,nd=null;var m=ms,M=Ha;if(Nn=0,Xr=ms=null,Ha=0,(Je&6)!==0)throw Error(a(331));var N=Je;if(Je|=4,dv(m.current),cv(m,m.current,M,r),Je=N,hl(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(St,m)}catch{}return!0}finally{V.p=f,F.T=u,Uv(e,i)}}function Lv(e,i,r){i=Hi(r,i),i=Oh(e.stateNode,i,2),e=ls(e,i,2),e!==null&&(K(e,2),ha(e))}function tn(e,i,r){if(e.tag===3)Lv(e,e,r);else for(;i!==null;){if(i.tag===3){Lv(i,e,r);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ps===null||!ps.has(u))){e=Hi(r,e),r=Pg(2),u=ls(i,r,2),u!==null&&(Og(r,u,i,e),K(u,2),ha(u));break}}i=i.return}}function rd(e,i,r){var u=e.pingCache;if(u===null){u=e.pingCache=new qx;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(r)||(jh=!0,f.add(r),e=Qx.bind(null,e,i,r),i.then(e,e))}function Qx(e,i,r){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,un===e&&(Fe&r)===r&&(yn===4||yn===3&&(Fe&62914560)===Fe&&300>_e()-Zu?(Je&2)===0&&Wr(e,0):$h|=r,kr===Fe&&(kr=0)),ha(e)}function Pv(e,i){i===0&&(i=L()),e=Ws(e,i),e!==null&&(K(e,i),ha(e))}function jx(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Pv(e,r)}function $x(e,i){var r=0;switch(e.tag){case 31:case 13:var u=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Pv(e,r)}function ty(e,i){return se(e,i)}var ec=null,Yr=null,od=!1,nc=!1,ld=!1,vs=0;function ha(e){e!==Yr&&e.next===null&&(Yr===null?ec=Yr=e:Yr=Yr.next=e),nc=!0,od||(od=!0,ny())}function hl(e,i){if(!ld&&nc){ld=!0;do for(var r=!1,u=ec;u!==null;){if(e!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var M=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Jt(42|e)+1)-1,m&=f&~(M&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Bv(u,m))}else m=Fe,m=Tt(u,u===un?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||kt(u,m)||(r=!0,Bv(u,m));u=u.next}while(r);ld=!1}}function ey(){Ov()}function Ov(){nc=od=!1;var e=0;vs!==0&&hy()&&(e=vs);for(var i=_e(),r=null,u=ec;u!==null;){var f=u.next,m=zv(u,i);m===0?(u.next=null,r===null?ec=f:r.next=f,f===null&&(Yr=r)):(r=u,(e!==0||(m&3)!==0)&&(nc=!0)),u=f}Nn!==0&&Nn!==5||hl(e),vs!==0&&(vs=0)}function zv(e,i){for(var r=e.suspendedLanes,u=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-Jt(m),N=1<<M,q=f[M];q===-1?((N&r)===0||(N&u)!==0)&&(f[M]=Y(N,i)):q<=i&&(e.expiredLanes|=N),m&=~N}if(i=un,r=Fe,r=Tt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,r===0||e===i&&($e===2||$e===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Ot(u),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||kt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(u!==null&&Ot(u),zn(r)){case 2:case 8:r=T;break;case 32:r=it;break;case 268435456:r=Mt;break;default:r=it}return u=Iv.bind(null,e),r=se(r,u),e.callbackPriority=i,e.callbackNode=r,i}return u!==null&&u!==null&&Ot(u),e.callbackPriority=2,e.callbackNode=null,2}function Iv(e,i){if(Nn!==0&&Nn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(tc()&&e.callbackNode!==r)return null;var u=Fe;return u=Tt(e,e===un?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(_v(e,u,i),zv(e,_e()),e.callbackNode!=null&&e.callbackNode===r?Iv.bind(null,e):null)}function Bv(e,i){if(tc())return null;_v(e,i,!0)}function ny(){py(function(){(Je&6)!==0?se(B,ey):Ov()})}function ud(){if(vs===0){var e=Nr;e===0&&(e=oe,oe<<=1,(oe&261888)===0&&(oe=256)),vs=e}return vs}function Fv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ji(""+e)}function Hv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function iy(e,i,r,u,f){if(i==="submit"&&r&&r.stateNode===f){var m=Fv((f[cn]||null).action),M=u.submitter;M&&(i=(i=M[cn]||null)?Fv(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var N=new pu("action","action",null,u,f);e.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(vs!==0){var q=M?Hv(f,M):new FormData(f);Rh(r,{pending:!0,data:q,method:f.method,action:m},null,q)}}else typeof m=="function"&&(N.preventDefault(),q=M?Hv(f,M):new FormData(f),Rh(r,{pending:!0,data:q,method:f.method,action:m},m,q))},currentTarget:f}]})}}for(var cd=0;cd<qf.length;cd++){var fd=qf[cd],ay=fd.toLowerCase(),sy=fd[0].toUpperCase()+fd.slice(1);Qi(ay,"on"+sy)}Qi(vm,"onAnimationEnd"),Qi(_m,"onAnimationIteration"),Qi(Sm,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(yx,"onTransitionRun"),Qi(Mx,"onTransitionStart"),Qi(bx,"onTransitionCancel"),Qi(xm,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ry=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dl));function Gv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var u=e[r],f=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var M=u.length-1;0<=M;M--){var N=u[M],q=N.instance,mt=N.currentTarget;if(N=N.listener,q!==m&&f.isPropagationStopped())break t;m=N,f.currentTarget=mt;try{m(f)}catch(At){vu(At)}f.currentTarget=null,m=q}else for(M=0;M<u.length;M++){if(N=u[M],q=N.instance,mt=N.currentTarget,N=N.listener,q!==m&&f.isPropagationStopped())break t;m=N,f.currentTarget=mt;try{m(f)}catch(At){vu(At)}f.currentTarget=null,m=q}}}}function Ie(e,i){var r=i[Fs];r===void 0&&(r=i[Fs]=new Set);var u=e+"__bubble";r.has(u)||(Vv(i,e,2,!1),r.add(u))}function hd(e,i,r){var u=0;i&&(u|=4),Vv(r,e,u,i)}var ic="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[ic]){e[ic]=!0,cu.forEach(function(r){r!=="selectionchange"&&(ry.has(r)||hd(r,!1,e),hd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ic]||(i[ic]=!0,hd("selectionchange",!1,i))}}function Vv(e,i,r,u){switch(v_(i)){case 2:var f=Py;break;case 8:f=Oy;break;default:f=Cd}r=f.bind(null,i,r,e),f=void 0,!Lf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function pd(e,i,r,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var N=u.stateNode.containerInfo;if(N===f)break;if(M===4)for(M=u.return;M!==null;){var q=M.tag;if((q===3||q===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;N!==null;){if(M=Ea(N),M===null)return;if(q=M.tag,q===5||q===6||q===26||q===27){u=m=M;continue t}N=N.parentNode}}u=u.return}Y0(function(){var mt=m,At=Uf(r),Ut=[];t:{var vt=ym.get(e);if(vt!==void 0){var bt=pu,le=e;switch(e){case"keypress":if(hu(r)===0)break t;case"keydown":case"keyup":bt=$S;break;case"focusin":le="focus",bt=If;break;case"focusout":le="blur",bt=If;break;case"beforeblur":case"afterblur":bt=If;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":bt=J0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":bt=GS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":bt=nx;break;case vm:case _m:case Sm:bt=XS;break;case xm:bt=ax;break;case"scroll":case"scrollend":bt=FS;break;case"wheel":bt=rx;break;case"copy":case"cut":case"paste":bt=qS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":bt=j0;break;case"toggle":case"beforetoggle":bt=lx}var ve=(i&4)!==0,rn=!ve&&(e==="scroll"||e==="scrollend"),st=ve?vt!==null?vt+"Capture":null:vt;ve=[];for(var j=mt,pt;j!==null;){var Rt=j;if(pt=Rt.stateNode,Rt=Rt.tag,Rt!==5&&Rt!==26&&Rt!==27||pt===null||st===null||(Rt=Oo(j,st),Rt!=null&&ve.push(pl(j,Rt,pt))),rn)break;j=j.return}0<ve.length&&(vt=new bt(vt,le,null,r,At),Ut.push({event:vt,listeners:ve}))}}if((i&7)===0){t:{if(vt=e==="mouseover"||e==="pointerover",bt=e==="mouseout"||e==="pointerout",vt&&r!==Df&&(le=r.relatedTarget||r.fromElement)&&(Ea(le)||le[Zn]))break t;if((bt||vt)&&(vt=At.window===At?At:(vt=At.ownerDocument)?vt.defaultView||vt.parentWindow:window,bt?(le=r.relatedTarget||r.toElement,bt=mt,le=le?Ea(le):null,le!==null&&(rn=l(le),ve=le.tag,le!==rn||ve!==5&&ve!==27&&ve!==6)&&(le=null)):(bt=null,le=mt),bt!==le)){if(ve=J0,Rt="onMouseLeave",st="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ve=j0,Rt="onPointerLeave",st="onPointerEnter",j="pointer"),rn=bt==null?vt:Gs(bt),pt=le==null?vt:Gs(le),vt=new ve(Rt,j+"leave",bt,r,At),vt.target=rn,vt.relatedTarget=pt,Rt=null,Ea(At)===mt&&(ve=new ve(st,j+"enter",le,r,At),ve.target=pt,ve.relatedTarget=rn,Rt=ve),rn=Rt,bt&&le)e:{for(ve=oy,st=bt,j=le,pt=0,Rt=st;Rt;Rt=ve(Rt))pt++;Rt=0;for(var me=j;me;me=ve(me))Rt++;for(;0<pt-Rt;)st=ve(st),pt--;for(;0<Rt-pt;)j=ve(j),Rt--;for(;pt--;){if(st===j||j!==null&&st===j.alternate){ve=st;break e}st=ve(st),j=ve(j)}ve=null}else ve=null;bt!==null&&kv(Ut,vt,bt,ve,!1),le!==null&&rn!==null&&kv(Ut,rn,le,ve,!0)}}t:{if(vt=mt?Gs(mt):window,bt=vt.nodeName&&vt.nodeName.toLowerCase(),bt==="select"||bt==="input"&&vt.type==="file")var qe=rm;else if(am(vt))if(om)qe=_x;else{qe=gx;var he=mx}else bt=vt.nodeName,!bt||bt.toLowerCase()!=="input"||vt.type!=="checkbox"&&vt.type!=="radio"?mt&&Ii(mt.elementType)&&(qe=rm):qe=vx;if(qe&&(qe=qe(e,mt))){sm(Ut,qe,r,At);break t}he&&he(e,vt,mt),e==="focusout"&&mt&&vt.type==="number"&&mt.memoizedProps.value!=null&&Un(vt,"number",vt.value)}switch(he=mt?Gs(mt):window,e){case"focusin":(am(he)||he.contentEditable==="true")&&(Er=he,kf=mt,ko=null);break;case"focusout":ko=kf=Er=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,mm(Ut,r,At);break;case"selectionchange":if(xx)break;case"keydown":case"keyup":mm(Ut,r,At)}var Re;if(Ff)t:{switch(e){case"compositionstart":var He="onCompositionStart";break t;case"compositionend":He="onCompositionEnd";break t;case"compositionupdate":He="onCompositionUpdate";break t}He=void 0}else br?nm(e,r)&&(He="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(He="onCompositionStart");He&&($0&&r.locale!=="ko"&&(br||He!=="onCompositionStart"?He==="onCompositionEnd"&&br&&(Re=Z0()):(es=At,Pf="value"in es?es.value:es.textContent,br=!0)),he=ac(mt,He),0<he.length&&(He=new Q0(He,e,null,r,At),Ut.push({event:He,listeners:he}),Re?He.data=Re:(Re=im(r),Re!==null&&(He.data=Re)))),(Re=cx?fx(e,r):hx(e,r))&&(He=ac(mt,"onBeforeInput"),0<He.length&&(he=new Q0("onBeforeInput","beforeinput",null,r,At),Ut.push({event:he,listeners:He}),he.data=Re)),iy(Ut,e,mt,r,At)}Gv(Ut,i)})}function pl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function ac(e,i){for(var r=i+"Capture",u=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Oo(e,r),f!=null&&u.unshift(pl(e,f,m)),f=Oo(e,i),f!=null&&u.push(pl(e,f,m))),e.tag===3)return u;e=e.return}return[]}function oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function kv(e,i,r,u,f){for(var m=i._reactName,M=[];r!==null&&r!==u;){var N=r,q=N.alternate,mt=N.stateNode;if(N=N.tag,q!==null&&q===u)break;N!==5&&N!==26&&N!==27||mt===null||(q=mt,f?(mt=Oo(r,m),mt!=null&&M.unshift(pl(r,mt,q))):f||(mt=Oo(r,m),mt!=null&&M.push(pl(r,mt,q)))),r=r.return}M.length!==0&&e.push({event:i,listeners:M})}var ly=/\r\n?/g,uy=/\u0000|\uFFFD/g;function Xv(e){return(typeof e=="string"?e:""+e).replace(ly,`
`).replace(uy,"")}function Wv(e,i){return i=Xv(i),Xv(e)===i}function sn(e,i,r,u,f,m){switch(r){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||ni(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&ni(e,""+u);break;case"className":Kt(e,"class",u);break;case"tabIndex":Kt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,r,u);break;case"style":mn(e,u,m);break;case"data":if(i!=="object"){Kt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=Ji(""+u),e.setAttribute(r,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&sn(e,i,"name",f.name,f,null),sn(e,i,"formEncType",f.formEncType,f,null),sn(e,i,"formMethod",f.formMethod,f,null),sn(e,i,"formTarget",f.formTarget,f,null)):(sn(e,i,"encType",f.encType,f,null),sn(e,i,"method",f.method,f,null),sn(e,i,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(r);break}u=Ji(""+u),e.setAttribute(r,u);break;case"onClick":u!=null&&(e.onclick=Bi);break;case"onScroll":u!=null&&Ie("scroll",e);break;case"onScrollEnd":u!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}r=Ji(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""+u):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":u===!0?e.setAttribute(r,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(r,u):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(r,u):e.removeAttribute(r);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(r):e.setAttribute(r,u);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),ne(e,"popover",u);break;case"xlinkActuate":$t(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$t(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$t(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$t(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$t(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$t(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$t(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ne(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=nn.get(r)||r,ne(e,r,u))}}function md(e,i,r,u,f,m){switch(r){case"style":mn(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(r=u.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof u=="string"?ni(e,u):(typeof u=="number"||typeof u=="bigint")&&ni(e,""+u);break;case"onScroll":u!=null&&Ie("scroll",e);break;case"onScrollEnd":u!=null&&Ie("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Po.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),m=e[cn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,u,f);break t}r in e?e[r]=u:u===!0?e.setAttribute(r,""):ne(e,r,u)}}}function Xn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var u=!1,f=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,m,M,r,null)}}f&&sn(e,i,"srcSet",r.srcSet,r,null),u&&sn(e,i,"src",r.src,r,null);return;case"input":Ie("invalid",e);var N=m=M=f=null,q=null,mt=null;for(u in r)if(r.hasOwnProperty(u)){var At=r[u];if(At!=null)switch(u){case"name":f=At;break;case"type":M=At;break;case"checked":q=At;break;case"defaultChecked":mt=At;break;case"value":m=At;break;case"defaultValue":N=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(a(137,i));break;default:sn(e,i,u,At,r,null)}}ie(e,m,N,q,mt,M,f,!1);return;case"select":Ie("invalid",e),u=M=m=null;for(f in r)if(r.hasOwnProperty(f)&&(N=r[f],N!=null))switch(f){case"value":m=N;break;case"defaultValue":M=N;break;case"multiple":u=N;default:sn(e,i,f,N,r,null)}i=m,r=M,e.multiple=!!u,i!=null?Ue(e,!!u,i,!1):r!=null&&Ue(e,!!u,r,!0);return;case"textarea":Ie("invalid",e),m=f=u=null;for(M in r)if(r.hasOwnProperty(M)&&(N=r[M],N!=null))switch(M){case"value":u=N;break;case"defaultValue":f=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:sn(e,i,M,N,r,null)}bi(e,u,f,m);return;case"option":for(q in r)if(r.hasOwnProperty(q)&&(u=r[q],u!=null))switch(q){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:sn(e,i,q,u,r,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(u=0;u<dl.length;u++)Ie(dl[u],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(mt in r)if(r.hasOwnProperty(mt)&&(u=r[mt],u!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:sn(e,i,mt,u,r,null)}return;default:if(Ii(i)){for(At in r)r.hasOwnProperty(At)&&(u=r[At],u!==void 0&&md(e,i,At,u,r,void 0));return}}for(N in r)r.hasOwnProperty(N)&&(u=r[N],u!=null&&sn(e,i,N,u,r,null))}function cy(e,i,r,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,N=null,q=null,mt=null,At=null;for(bt in r){var Ut=r[bt];if(r.hasOwnProperty(bt)&&Ut!=null)switch(bt){case"checked":break;case"value":break;case"defaultValue":q=Ut;default:u.hasOwnProperty(bt)||sn(e,i,bt,null,u,Ut)}}for(var vt in u){var bt=u[vt];if(Ut=r[vt],u.hasOwnProperty(vt)&&(bt!=null||Ut!=null))switch(vt){case"type":m=bt;break;case"name":f=bt;break;case"checked":mt=bt;break;case"defaultChecked":At=bt;break;case"value":M=bt;break;case"defaultValue":N=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(a(137,i));break;default:bt!==Ut&&sn(e,i,vt,bt,u,Ut)}}Tn(e,M,N,q,mt,At,m,f);return;case"select":bt=M=N=vt=null;for(m in r)if(q=r[m],r.hasOwnProperty(m)&&q!=null)switch(m){case"value":break;case"multiple":bt=q;default:u.hasOwnProperty(m)||sn(e,i,m,null,u,q)}for(f in u)if(m=u[f],q=r[f],u.hasOwnProperty(f)&&(m!=null||q!=null))switch(f){case"value":vt=m;break;case"defaultValue":N=m;break;case"multiple":M=m;default:m!==q&&sn(e,i,f,m,u,q)}i=N,r=M,u=bt,vt!=null?Ue(e,!!r,vt,!1):!!u!=!!r&&(i!=null?Ue(e,!!r,i,!0):Ue(e,!!r,r?[]:"",!1));return;case"textarea":bt=vt=null;for(N in r)if(f=r[N],r.hasOwnProperty(N)&&f!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:sn(e,i,N,null,u,f)}for(M in u)if(f=u[M],m=r[M],u.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":vt=f;break;case"defaultValue":bt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&sn(e,i,M,f,u,m)}ei(e,vt,bt);return;case"option":for(var le in r)if(vt=r[le],r.hasOwnProperty(le)&&vt!=null&&!u.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:sn(e,i,le,null,u,vt)}for(q in u)if(vt=u[q],bt=r[q],u.hasOwnProperty(q)&&vt!==bt&&(vt!=null||bt!=null))switch(q){case"selected":e.selected=vt&&typeof vt!="function"&&typeof vt!="symbol";break;default:sn(e,i,q,vt,u,bt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in r)vt=r[ve],r.hasOwnProperty(ve)&&vt!=null&&!u.hasOwnProperty(ve)&&sn(e,i,ve,null,u,vt);for(mt in u)if(vt=u[mt],bt=r[mt],u.hasOwnProperty(mt)&&vt!==bt&&(vt!=null||bt!=null))switch(mt){case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,i));break;default:sn(e,i,mt,vt,u,bt)}return;default:if(Ii(i)){for(var rn in r)vt=r[rn],r.hasOwnProperty(rn)&&vt!==void 0&&!u.hasOwnProperty(rn)&&md(e,i,rn,void 0,u,vt);for(At in u)vt=u[At],bt=r[At],!u.hasOwnProperty(At)||vt===bt||vt===void 0&&bt===void 0||md(e,i,At,vt,u,bt);return}}for(var st in r)vt=r[st],r.hasOwnProperty(st)&&vt!=null&&!u.hasOwnProperty(st)&&sn(e,i,st,null,u,vt);for(Ut in u)vt=u[Ut],bt=r[Ut],!u.hasOwnProperty(Ut)||vt===bt||vt==null&&bt==null||sn(e,i,Ut,vt,u,bt)}function qv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),u=0;u<r.length;u++){var f=r[u],m=f.transferSize,M=f.initiatorType,N=f.duration;if(m&&N&&qv(M)){for(M=0,N=f.responseEnd,u+=1;u<r.length;u++){var q=r[u],mt=q.startTime;if(mt>N)break;var At=q.transferSize,Ut=q.initiatorType;At&&qv(Ut)&&(q=q.responseEnd,M+=At*(q<N?1:(N-mt)/(q-mt)))}if(--u,i+=8*(m+M)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,vd=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function Yv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function _d(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function hy(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var Kv=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(e){return Jv.resolve(null).then(e).catch(my)}:Kv;function my(e){setTimeout(function(){throw e})}function _s(e){return e==="head"}function Qv(e,i){var r=i,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(u===0){e.removeChild(f),Qr(i);return}u--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")u++;else if(r==="html")ml(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,ml(r);for(var m=r.firstChild;m;){var M=m.nextSibling,N=m.nodeName;m[Qa]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&ml(e.ownerDocument.body);r=f}while(r);Qr(i)}function jv(e,i){var r=e;e=0;do{var u=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),u&&u.nodeType===8)if(r=u.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=u}while(r)}function xd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":xd(r),ja(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function gy(e,i,r,u){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Qa])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Wi(e.nextSibling),e===null)break}return null}function vy(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Wi(e.nextSibling),e===null))return null;return e}function $v(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Wi(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _y(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var u=function(){i(),r.removeEventListener("DOMContentLoaded",u)};r.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function Wi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var bd=null;function t_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Wi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function e_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function n_(e,i,r){switch(i=sc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function ml(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ja(e)}var qi=new Map,i_=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ga=V.d;V.d={f:Sy,r:xy,D:yy,C:My,L:by,m:Ey,X:Ay,S:Ty,M:wy};function Sy(){var e=Ga.f(),i=Qu();return e||i}function xy(e){var i=Ta(e);i!==null&&i.tag===5&&i.type==="form"?xg(i):Ga.r(e)}var Zr=typeof document>"u"?null:document;function a_(e,i,r){var u=Zr;if(u&&typeof i=="string"&&i){var f=De(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),i_.has(f)||(i_.add(f),e={rel:e,crossOrigin:r,href:i},u.querySelector(f)===null&&(i=u.createElement("link"),Xn(i,"link",e),En(i),u.head.appendChild(i)))}}function yy(e){Ga.D(e),a_("dns-prefetch",e,null)}function My(e,i){Ga.C(e,i),a_("preconnect",e,i)}function by(e,i,r){Ga.L(e,i,r);var u=Zr;if(u&&e&&i){var f='link[rel="preload"][as="'+De(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+De(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+De(r.imageSizes)+'"]')):f+='[href="'+De(e)+'"]';var m=f;switch(i){case"style":m=Kr(e);break;case"script":m=Jr(e)}qi.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),qi.set(m,e),u.querySelector(f)!==null||i==="style"&&u.querySelector(gl(m))||i==="script"&&u.querySelector(vl(m))||(i=u.createElement("link"),Xn(i,"link",e),En(i),u.head.appendChild(i)))}}function Ey(e,i){Ga.m(e,i);var r=Zr;if(r&&e){var u=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+De(u)+'"][href="'+De(e)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Jr(e)}if(!qi.has(m)&&(e=v({rel:"modulepreload",href:e},i),qi.set(m,e),r.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(vl(m)))return}u=r.createElement("link"),Xn(u,"link",e),En(u),r.head.appendChild(u)}}}function Ty(e,i,r){Ga.S(e,i,r);var u=Zr;if(u&&e){var f=$a(u).hoistableStyles,m=Kr(e);i=i||"default";var M=f.get(m);if(!M){var N={loading:0,preload:null};if(M=u.querySelector(gl(m)))N.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=qi.get(m))&&Ed(e,r);var q=M=u.createElement("link");En(q),Xn(q,"link",e),q._p=new Promise(function(mt,At){q.onload=mt,q.onerror=At}),q.addEventListener("load",function(){N.loading|=1}),q.addEventListener("error",function(){N.loading|=2}),N.loading|=4,oc(M,i,u)}M={type:"stylesheet",instance:M,count:1,state:N},f.set(m,M)}}}function Ay(e,i){Ga.X(e,i);var r=Zr;if(r&&e){var u=$a(r).hoistableScripts,f=Jr(e),m=u.get(f);m||(m=r.querySelector(vl(f)),m||(e=v({src:e,async:!0},i),(i=qi.get(f))&&Td(e,i),m=r.createElement("script"),En(m),Xn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function wy(e,i){Ga.M(e,i);var r=Zr;if(r&&e){var u=$a(r).hoistableScripts,f=Jr(e),m=u.get(f);m||(m=r.querySelector(vl(f)),m||(e=v({src:e,async:!0,type:"module"},i),(i=qi.get(f))&&Td(e,i),m=r.createElement("script"),En(m),Xn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function s_(e,i,r,u){var f=(f=Wt.current)?rc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Kr(r.href),r=$a(f).hoistableStyles,u=r.get(i),u||(u={type:"style",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Kr(r.href);var m=$a(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(gl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),qi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},qi.set(e,r),m||Cy(f,e,r,M.state))),i&&u===null)throw Error(a(528,""));return M}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Jr(r),r=$a(f).hoistableScripts,u=r.get(i),u||(u={type:"script",instance:null,count:0,state:null},r.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Kr(e){return'href="'+De(e)+'"'}function gl(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Cy(e,i,r,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Xn(i,"link",r),En(i),e.head.appendChild(i))}function Jr(e){return'[src="'+De(e)+'"]'}function vl(e){return"script[async]"+e}function o_(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+De(r.href)+'"]');if(u)return i.instance=u,En(u),u;var f=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),En(u),Xn(u,"style",f),oc(u,r.precedence,e),i.instance=u;case"stylesheet":f=Kr(r.href);var m=e.querySelector(gl(f));if(m)return i.state.loading|=4,i.instance=m,En(m),m;u=r_(r),(f=qi.get(f))&&Ed(u,f),m=(e.ownerDocument||e).createElement("link"),En(m);var M=m;return M._p=new Promise(function(N,q){M.onload=N,M.onerror=q}),Xn(m,"link",u),i.state.loading|=4,oc(m,r.precedence,e),i.instance=m;case"script":return m=Jr(r.src),(f=e.querySelector(vl(m)))?(i.instance=f,En(f),f):(u=r,(f=qi.get(m))&&(u=v({},r),Td(u,f)),e=e.ownerDocument||e,f=e.createElement("script"),En(f),Xn(f,"link",u),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,oc(u,r.precedence,e));return i.instance}function oc(e,i,r){for(var u=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,M=0;M<u.length;M++){var N=u[M];if(N.dataset.precedence===i)m=N;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Ed(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var lc=null;function l_(e,i,r){if(lc===null){var u=new Map,f=lc=new Map;f.set(r,u)}else f=lc,u=f.get(r),u||(u=new Map,f.set(r,u));if(u.has(e))return u;for(u.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var m=r[f];if(!(m[Qa]||m[Se]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=e+M;var N=u.get(M);N?N.push(m):u.set(M,[m])}}return u}function u_(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function Ry(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function c_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dy(e,i,r,u){if(r.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Kr(u.href),m=i.querySelector(gl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=uc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,En(m);return}m=i.ownerDocument||i,u=r_(u),(f=qi.get(f))&&Ed(u,f),m=m.createElement("link"),En(m);var M=m;M._p=new Promise(function(N,q){M.onload=N,M.onerror=q}),Xn(m,"link",u),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=uc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Ad=0;function Uy(e,i){return e.stylesheets&&e.count===0&&fc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var u=setTimeout(function(){if(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Ad===0&&(Ad=62500*fy());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Ad?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(f)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function fc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,i.forEach(Ny,e),cc=null,uc.call(e))}function Ny(e,i){if(!(i.state.loading&4)){var r=cc.get(e);if(r)var u=r.get(null);else{r=new Map,cc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),u=M)}u&&r.set(null,u)}f=i.instance,M=f.getAttribute("data-precedence"),m=r.get(M)||u,m===u&&r.set(null,f),r.set(M,f),this.count++,u=uc.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var _l={$$typeof:D,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function Ly(e,i,r,u,f,m,M,N,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function f_(e,i,r,u,f,m,M,N,q,mt,At,Ut){return e=new Ly(e,i,r,M,q,mt,At,Ut,N),i=1,m===!0&&(i|=24),m=Ti(3,null,null,i),e.current=m,m.stateNode=e,i=sh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:r,cache:i},uh(m),e}function h_(e){return e?(e=wr,e):wr}function d_(e,i,r,u,f,m){f=h_(f),u.context===null?u.context=f:u.pendingContext=f,u=os(i),u.payload={element:r},m=m===void 0?null:m,m!==null&&(u.callback=m),r=ls(e,u,i),r!==null&&(Si(r,e,i),Jo(r,e,i))}function p_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function wd(e,i){p_(e,i),(e=e.alternate)&&p_(e,i)}function m_(e){if(e.tag===13||e.tag===31){var i=Ws(e,67108864);i!==null&&Si(i,e,67108864),wd(e,67108864)}}function g_(e){if(e.tag===13||e.tag===31){var i=Di();i=Qe(i);var r=Ws(e,i);r!==null&&Si(r,e,i),wd(e,i)}}var hc=!0;function Py(e,i,r,u){var f=F.T;F.T=null;var m=V.p;try{V.p=2,Cd(e,i,r,u)}finally{V.p=m,F.T=f}}function Oy(e,i,r,u){var f=F.T;F.T=null;var m=V.p;try{V.p=8,Cd(e,i,r,u)}finally{V.p=m,F.T=f}}function Cd(e,i,r,u){if(hc){var f=Rd(u);if(f===null)pd(e,i,u,dc,r),__(e,u);else if(Iy(f,e,i,r,u))u.stopPropagation();else if(__(e,u),i&4&&-1<zy.indexOf(e)){for(;f!==null;){var m=Ta(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Gt(m.pendingLanes);if(M!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;M;){var q=1<<31-Jt(M);N.entanglements[1]|=q,M&=~q}ha(m),(Je&6)===0&&(Ku=_e()+500,hl(0))}}break;case 31:case 13:N=Ws(m,2),N!==null&&Si(N,m,2),Qu(),wd(m,2)}if(m=Rd(u),m===null&&pd(e,i,u,dc,r),m===f)break;f=m}f!==null&&u.stopPropagation()}else pd(e,i,u,null,r)}}function Rd(e){return e=Uf(e),Dd(e)}var dc=null;function Dd(e){if(dc=null,e=Ea(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return dc=e,null}function v_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case B:return 2;case T:return 8;case it:case lt:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var Ud=!1,Ss=null,xs=null,ys=null,Sl=new Map,xl=new Map,Ms=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,i){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":Sl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function yl(e,i,r,u,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&m_(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function Iy(e,i,r,u,f){switch(i){case"focusin":return Ss=yl(Ss,e,i,r,u,f),!0;case"dragenter":return xs=yl(xs,e,i,r,u,f),!0;case"mouseover":return ys=yl(ys,e,i,r,u,f),!0;case"pointerover":var m=f.pointerId;return Sl.set(m,yl(Sl.get(m)||null,e,i,r,u,f)),!0;case"gotpointercapture":return m=f.pointerId,xl.set(m,yl(xl.get(m)||null,e,i,r,u,f)),!0}return!1}function S_(e){var i=Ea(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Be(e.priority,function(){g_(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,Be(e.priority,function(){g_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Rd(e.nativeEvent);if(r===null){r=e.nativeEvent;var u=new r.constructor(r.type,r);Df=u,r.target.dispatchEvent(u),Df=null}else return i=Ta(r),i!==null&&m_(i),e.blockedOn=r,!1;i.shift()}return!0}function x_(e,i,r){pc(e)&&r.delete(i)}function By(){Ud=!1,Ss!==null&&pc(Ss)&&(Ss=null),xs!==null&&pc(xs)&&(xs=null),ys!==null&&pc(ys)&&(ys=null),Sl.forEach(x_),xl.forEach(x_)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ud||(Ud=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,By)))}var gc=null;function y_(e){gc!==e&&(gc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var i=0;i<e.length;i+=3){var r=e[i],u=e[i+1],f=e[i+2];if(typeof u!="function"){if(Dd(u||r)===null)continue;break}var m=Ta(r);m!==null&&(e.splice(i,3),i-=3,Rh(m,{pending:!0,data:f,method:r.method,action:u},u,f))}}))}function Qr(e){function i(q){return mc(q,e)}Ss!==null&&mc(Ss,e),xs!==null&&mc(xs,e),ys!==null&&mc(ys,e),Sl.forEach(i),xl.forEach(i);for(var r=0;r<Ms.length;r++){var u=Ms[r];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Ms.length&&(r=Ms[0],r.blockedOn===null);)S_(r),r.blockedOn===null&&Ms.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(u=0;u<r.length;u+=3){var f=r[u],m=r[u+1],M=f[cn]||null;if(typeof m=="function")M||y_(r);else if(M){var N=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[cn]||null)N=M.formAction;else if(Dd(f)!==null)continue}else N=M.action;typeof N=="function"?r[u+1]=N:(r.splice(u,3),u-=3),y_(r)}}}function M_(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),u||setTimeout(r,20)}function r(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Nd(e){this._internalRoot=e}vc.prototype.render=Nd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,u=Di();d_(r,u,e,i,null,null)},vc.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;d_(e.current,2,null,e,null,null),Qu(),i[Zn]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var i=ke();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Ms.length&&i!==0&&i<Ms[r].priority;r++);Ms.splice(r,0,e),r===0&&S_(e)}};var b_=t.version;if(b_!=="19.2.7")throw Error(a(527,b_,"19.2.7"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Fy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{St=_c.inject(Fy),_t=_c}catch{}}return bl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,u="",f=Dg,m=Ug,M=Ng;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=f_(e,1,!1,null,null,r,u,null,f,m,M,M_),e[Zn]=i.current,dd(e),new Nd(i)},bl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var u=!1,f="",m=Dg,M=Ug,N=Ng,q=null;return r!=null&&(r.unstable_strictMode===!0&&(u=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(N=r.onRecoverableError),r.formState!==void 0&&(q=r.formState)),i=f_(e,1,!0,i,r??null,u,f,q,m,M,N,M_),i.context=h_(null),r=i.current,u=Di(),u=Qe(u),f=os(u),f.callback=null,ls(r,f,u),r=u,i.current.lanes=r,K(i,r),ha(i),e[Zn]=i.current,dd(e),new vc(i)},bl.version="19.2.7",bl}var L_;function Ky(){if(L_)return Od.exports;L_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Od.exports=Zy(),Od.exports}var Jy=Ky();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const h0="186",Qy=0,P_=1,jy=2,Qc=1,$y=2,Il=3,dr=0,fi=1,fn=2,Sa=0,Gl=1,zs=2,O_=3,z_=4,tM=5,vo=100,eM=101,nM=102,iM=103,aM=104,sM=200,rM=201,oM=202,lM=203,Y1=204,Z1=205,uM=206,cM=207,fM=208,hM=209,dM=210,pM=211,mM=212,gM=213,vM=214,yp=0,Mp=1,bp=2,ql=3,Ep=4,Tp=5,Ap=6,wp=7,d0=0,_M=1,SM=2,xa=0,p0=1,m0=2,g0=3,xf=4,v0=5,_0=6,S0=7,K1=300,pr=301,bo=302,Fd=303,Hd=304,yf=306,Cp=1e3,Ya=1001,Rp=1002,Yn=1003,xM=1004,Sc=1005,$n=1006,Gd=1007,cr=1008,Oi=1009,J1=1010,Q1=1011,Yl=1012,x0=1013,Ma=1014,aa=1015,Mi=1016,y0=1017,M0=1018,Zl=1020,j1=35902,$1=35899,tS=1021,eS=1022,sa=1023,Ja=1026,fr=1027,b0=1028,E0=1029,mr=1030,T0=1031,A0=1033,jc=33776,$c=33777,tf=33778,ef=33779,Dp=35840,Up=35841,Np=35842,Lp=35843,Pp=36196,Op=37492,zp=37496,Ip=37488,Bp=37489,sf=37490,Fp=37491,Hp=37808,Gp=37809,Vp=37810,kp=37811,Xp=37812,Wp=37813,qp=37814,Yp=37815,Zp=37816,Kp=37817,Jp=37818,Qp=37819,jp=37820,$p=37821,t0=36492,e0=36494,n0=36495,i0=36283,a0=36284,rf=36285,s0=36286,yM=3200,of=0,MM=1,Ps="",xi="srgb",lf="srgb-linear",uf="linear",je="srgb",Vd=7680,bM=519,EM=512,TM=513,AM=514,w0=515,wM=516,CM=517,C0=518,RM=519,nS=35044,I_="300 es",va=2e3,Kl=2001;function DM(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function cf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function UM(){const s=cf("canvas");return s.style.display="block",s}const B_={};function ff(...s){const t="THREE."+s.shift();console.log(t,...s)}function iS(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xe(...s){s=iS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function Xe(...s){s=iS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function So(...s){const t=s.join(" ");t in B_||(B_[t]=!0,xe(...s))}function NM(s,t,n){return new Promise(function(a,o){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const LM={[yp]:Mp,[bp]:Ap,[Ep]:wp,[ql]:Tp,[Mp]:yp,[Ap]:bp,[wp]:Ep,[Tp]:ql};class _r{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,t);t.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let F_=1234567;const Vl=Math.PI/180,Jl=180/Math.PI;function ya(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[n&63|128]+Jn[n>>8&255]+"-"+Jn[n>>16&255]+Jn[n>>24&255]+Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]).toLowerCase()}function Oe(s,t,n){return Math.max(t,Math.min(n,s))}function R0(s,t){return(s%t+t)%t}function PM(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function OM(s,t,n){return s!==t?(n-s)/(t-s):0}function kl(s,t,n){return(1-n)*s+n*t}function zM(s,t,n,a){return kl(s,t,1-Math.exp(-n*a))}function IM(s,t=1){return t-Math.abs(R0(s,t*2)-t)}function BM(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function FM(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function HM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function GM(s,t){return s+Math.random()*(t-s)}function VM(s){return s*(.5-Math.random())}function kM(s){s!==void 0&&(F_=s);let t=F_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function XM(s){return s*Vl}function WM(s){return s*Jl}function qM(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function YM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ZM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function KM(s,t,n,a,o){const l=Math.cos,c=Math.sin,h=l(n/2),p=c(n/2),d=l((t+a)/2),g=c((t+a)/2),v=l((t-a)/2),_=c((t-a)/2),S=l((a-t)/2),b=c((a-t)/2);switch(o){case"XYX":s.set(h*g,p*v,p*_,h*d);break;case"YZY":s.set(p*_,h*g,p*v,h*d);break;case"ZXZ":s.set(p*v,p*_,h*g,h*d);break;case"XZX":s.set(h*g,p*b,p*S,h*d);break;case"YXY":s.set(p*S,h*g,p*b,h*d);break;case"ZYZ":s.set(p*b,p*S,h*g,h*d);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ia(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ki={DEG2RAD:Vl,RAD2DEG:Jl,generateUUID:ya,clamp:Oe,euclideanModulo:R0,mapLinear:PM,inverseLerp:OM,lerp:kl,damp:zM,pingpong:IM,smoothstep:BM,smootherstep:FM,randInt:HM,randFloat:GM,randFloatSpread:VM,seededRandom:kM,degToRad:XM,radToDeg:WM,isPowerOfTwo:qM,ceilPowerOfTwo:YM,floorPowerOfTwo:ZM,setQuaternionFromProperEuler:KM,normalize:en,denormalize:ia},G0=class G0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Oe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*o+t.x,this.y=l*o+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};G0.prototype.isVector2=!0;let wt=G0;class Is{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,l,c,h){let p=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3],_=l[c+0],S=l[c+1],b=l[c+2],C=l[c+3];if(v!==C||p!==_||d!==S||g!==b){let y=p*_+d*S+g*b+v*C;y<0&&(_=-_,S=-S,b=-b,C=-C,y=-y);let x=1-h;if(y<.9995){const R=Math.acos(y),D=Math.sin(R);x=Math.sin(x*R)/D,h=Math.sin(h*R)/D,p=p*x+_*h,d=d*x+S*h,g=g*x+b*h,v=v*x+C*h}else{p=p*x+_*h,d=d*x+S*h,g=g*x+b*h,v=v*x+C*h;const R=1/Math.sqrt(p*p+d*d+g*g+v*v);p*=R,d*=R,g*=R,v*=R}}t[n]=p,t[n+1]=d,t[n+2]=g,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,o,l,c){const h=a[o],p=a[o+1],d=a[o+2],g=a[o+3],v=l[c],_=l[c+1],S=l[c+2],b=l[c+3];return t[n]=h*b+g*v+p*S-d*_,t[n+1]=p*b+g*_+d*v-h*S,t[n+2]=d*b+g*S+h*_-p*v,t[n+3]=g*b-h*v-p*_-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,l=t._z,c=t._order,h=Math.cos,p=Math.sin,d=h(a/2),g=h(o/2),v=h(l/2),_=p(a/2),S=p(o/2),b=p(l/2);switch(c){case"XYZ":this._x=_*g*v+d*S*b,this._y=d*S*v-_*g*b,this._z=d*g*b+_*S*v,this._w=d*g*v-_*S*b;break;case"YXZ":this._x=_*g*v+d*S*b,this._y=d*S*v-_*g*b,this._z=d*g*b-_*S*v,this._w=d*g*v+_*S*b;break;case"ZXY":this._x=_*g*v-d*S*b,this._y=d*S*v+_*g*b,this._z=d*g*b+_*S*v,this._w=d*g*v-_*S*b;break;case"ZYX":this._x=_*g*v-d*S*b,this._y=d*S*v+_*g*b,this._z=d*g*b-_*S*v,this._w=d*g*v+_*S*b;break;case"YZX":this._x=_*g*v+d*S*b,this._y=d*S*v+_*g*b,this._z=d*g*b-_*S*v,this._w=d*g*v-_*S*b;break;case"XZY":this._x=_*g*v-d*S*b,this._y=d*S*v-_*g*b,this._z=d*g*b+_*S*v,this._w=d*g*v+_*S*b;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],l=n[8],c=n[1],h=n[5],p=n[9],d=n[2],g=n[6],v=n[10],_=a+h+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-p)*S,this._y=(l-d)*S,this._z=(c-o)*S}else if(a>h&&a>v){const S=2*Math.sqrt(1+a-h-v);this._w=(g-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+d)/S}else if(h>v){const S=2*Math.sqrt(1+h-a-v);this._w=(l-d)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+v-a-h);this._w=(c-o)/S,this._x=(l+d)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,l=t._z,c=t._w,h=n._x,p=n._y,d=n._z,g=n._w;return this._x=a*g+c*h+o*d-l*p,this._y=o*g+c*p+l*h-a*d,this._z=l*g+c*d+a*p-o*h,this._w=c*g-a*h-o*p-l*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,l=t._z,c=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,l=-l,c=-c,h=-h);let p=1-n;if(h<.9995){const d=Math.acos(h),g=Math.sin(d);p=Math.sin(p*d)/g,n=Math.sin(n*d)/g,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const V0=class V0{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(H_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(H_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*o,this.y=l[1]*n+l[4]*a+l[7]*o,this.z=l[2]*n+l[5]*a+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*o+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,l=t.x,c=t.y,h=t.z,p=t.w,d=2*(c*o-h*a),g=2*(h*n-l*o),v=2*(l*a-c*n);return this.x=n+p*d+c*v-h*g,this.y=a+p*g+h*d-l*v,this.z=o+p*v+l*g-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*o,this.y=l[1]*n+l[5]*a+l[9]*o,this.z=l[2]*n+l[6]*a+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this.z=Oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this.z=Oe(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,l=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-l*h,this.y=l*c-a*p,this.z=a*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return kd.copy(this).projectOnVector(t),this.sub(kd)}reflect(t){return this.sub(kd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Oe(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};V0.prototype.isVector3=!0;let k=V0;const kd=new k,H_=new Is,k0=class k0{constructor(t,n,a,o,l,c,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,c,h,p,d)}set(t,n,a,o,l,c,h,p,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=l,g[5]=p,g[6]=a,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,c=a[0],h=a[3],p=a[6],d=a[1],g=a[4],v=a[7],_=a[2],S=a[5],b=a[8],C=o[0],y=o[3],x=o[6],R=o[1],D=o[4],A=o[7],P=o[2],U=o[5],O=o[8];return l[0]=c*C+h*R+p*P,l[3]=c*y+h*D+p*U,l[6]=c*x+h*A+p*O,l[1]=d*C+g*R+v*P,l[4]=d*y+g*D+v*U,l[7]=d*x+g*A+v*O,l[2]=_*C+S*R+b*P,l[5]=_*y+S*D+b*U,l[8]=_*x+S*A+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8];return n*c*g-n*h*d-a*l*g+a*h*p+o*l*d-o*c*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=g*c-h*d,_=h*p-g*l,S=d*l-c*p,b=n*v+a*_+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=v*C,t[1]=(o*d-g*a)*C,t[2]=(h*a-o*c)*C,t[3]=_*C,t[4]=(g*n-o*p)*C,t[5]=(o*l-h*n)*C,t[6]=S*C,t[7]=(a*p-d*n)*C,t[8]=(c*n-a*l)*C,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,l,c,h){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*h)+c+t,-o*d,o*p,-o*(-d*c+p*h)+h+n,0,0,1),this}scale(t,n){return So("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xd.makeScale(t,n)),this}rotate(t){return So("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xd.makeRotation(-t)),this}translate(t,n){return So("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};k0.prototype.isMatrix3=!0;let Ee=k0;const Xd=new Ee,G_=new Ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new Ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JM(){const s={enabled:!0,workingColorSpace:lf,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===je&&(o.r=Ka(o.r),o.g=Ka(o.g),o.b=Ka(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===je&&(o.r=xo(o.r),o.g=xo(o.g),o.b=xo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ps?uf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return So("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return So("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[lf]:{primaries:t,whitePoint:a,transfer:uf,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:a,transfer:je,toXYZ:G_,fromXYZ:V_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Ge=JM();function Ka(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jr;class QM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{jr===void 0&&(jr=cf("canvas")),jr.width=t.width,jr.height=t.height;const o=jr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=jr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=cf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Ka(l[c]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ka(n[a]/255)*255):n[a]=Ka(n[a]);return{data:n,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jM=0;class D0{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=ya(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?l.push(Wd(o[c].image)):l.push(Wd(o[c]))}else l=Wd(o);a.url=l}return n||(t.images[this.uuid]=a),a}}function Wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?QM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let $M=0;const qd=new k;class ti extends _r{constructor(t=ti.DEFAULT_IMAGE,n=ti.DEFAULT_MAPPING,a=Ya,o=Ya,l=$n,c=cr,h=sa,p=Oi,d=ti.DEFAULT_ANISOTROPY,g=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ya(),this.name="",this.source=new D0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==K1)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cp:t.x=t.x-Math.floor(t.x);break;case Ya:t.x=t.x<0?0:1;break;case Rp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cp:t.y=t.y-Math.floor(t.y);break;case Ya:t.y=t.y<0?0:1;break;case Rp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=K1;ti.DEFAULT_ANISOTROPY=1;const X0=class X0{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,l;const p=t.elements,d=p[0],g=p[4],v=p[8],_=p[1],S=p[5],b=p[9],C=p[2],y=p[6],x=p[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(d+1)/2,A=(S+1)/2,P=(x+1)/2,U=(g+_)/4,O=(v+C)/4,E=(b+y)/4;return D>A&&D>P?D<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(D),o=U/a,l=O/a):A>P?A<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),a=U/o,l=E/o):P<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(P),a=O/l,o=E/l),this.set(a,o,l,n),this}let R=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-C)/R,this.z=(_-g)/R,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Oe(this.x,t.x,n.x),this.y=Oe(this.y,t.y,n.y),this.z=Oe(this.z,t.z,n.z),this.w=Oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Oe(this.x,t,n),this.y=Oe(this.y,t,n),this.z=Oe(this.z,t,n),this.w=Oe(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Oe(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};X0.prototype.isVector4=!0;let _n=X0;class tb extends _r{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new _n(0,0,t,n),this.scissorTest=!1,this.viewport=new _n(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},l=new ti(o),c=a.count;for(let h=0;h<c;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new D0(o)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends tb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class aS extends ti{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class eb extends ti{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Sf=class Sf{constructor(t,n,a,o,l,c,h,p,d,g,v,_,S,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,c,h,p,d,g,v,_,S,b,C,y)}set(t,n,a,o,l,c,h,p,d,g,v,_,S,b,C,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=l,x[5]=c,x[9]=h,x[13]=p,x[2]=d,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=b,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sf().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/$r.setFromMatrixColumn(t,0).length(),l=1/$r.setFromMatrixColumn(t,1).length(),c=1/$r.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,l=t.z,c=Math.cos(a),h=Math.sin(a),p=Math.cos(o),d=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=c*g,S=c*v,b=h*g,C=h*v;n[0]=p*g,n[4]=-p*v,n[8]=d,n[1]=S+b*d,n[5]=_-C*d,n[9]=-h*p,n[2]=C-_*d,n[6]=b+S*d,n[10]=c*p}else if(t.order==="YXZ"){const _=p*g,S=p*v,b=d*g,C=d*v;n[0]=_+C*h,n[4]=b*h-S,n[8]=c*d,n[1]=c*v,n[5]=c*g,n[9]=-h,n[2]=S*h-b,n[6]=C+_*h,n[10]=c*p}else if(t.order==="ZXY"){const _=p*g,S=p*v,b=d*g,C=d*v;n[0]=_-C*h,n[4]=-c*v,n[8]=b+S*h,n[1]=S+b*h,n[5]=c*g,n[9]=C-_*h,n[2]=-c*d,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const _=c*g,S=c*v,b=h*g,C=h*v;n[0]=p*g,n[4]=b*d-S,n[8]=_*d+C,n[1]=p*v,n[5]=C*d+_,n[9]=S*d-b,n[2]=-d,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const _=c*p,S=c*d,b=h*p,C=h*d;n[0]=p*g,n[4]=C-_*v,n[8]=b*v+S,n[1]=v,n[5]=c*g,n[9]=-h*g,n[2]=-d*g,n[6]=S*v+b,n[10]=_-C*v}else if(t.order==="XZY"){const _=c*p,S=c*d,b=h*p,C=h*d;n[0]=p*g,n[4]=-v,n[8]=d*g,n[1]=_*v+C,n[5]=c*g,n[9]=S*v-b,n[2]=b*v-S,n[6]=h*g,n[10]=C*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nb,t,ib)}lookAt(t,n,a){const o=this.elements;return Ui.subVectors(t,n),Ui.lengthSq()===0&&(Ui.z=1),Ui.normalize(),Es.crossVectors(a,Ui),Es.lengthSq()===0&&(Math.abs(a.z)===1?Ui.x+=1e-4:Ui.z+=1e-4,Ui.normalize(),Es.crossVectors(a,Ui)),Es.normalize(),xc.crossVectors(Ui,Es),o[0]=Es.x,o[4]=xc.x,o[8]=Ui.x,o[1]=Es.y,o[5]=xc.y,o[9]=Ui.y,o[2]=Es.z,o[6]=xc.z,o[10]=Ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,c=a[0],h=a[4],p=a[8],d=a[12],g=a[1],v=a[5],_=a[9],S=a[13],b=a[2],C=a[6],y=a[10],x=a[14],R=a[3],D=a[7],A=a[11],P=a[15],U=o[0],O=o[4],E=o[8],z=o[12],H=o[1],X=o[5],W=o[9],tt=o[13],G=o[2],$=o[6],F=o[10],V=o[14],ft=o[3],ot=o[7],gt=o[11],I=o[15];return l[0]=c*U+h*H+p*G+d*ft,l[4]=c*O+h*X+p*$+d*ot,l[8]=c*E+h*W+p*F+d*gt,l[12]=c*z+h*tt+p*V+d*I,l[1]=g*U+v*H+_*G+S*ft,l[5]=g*O+v*X+_*$+S*ot,l[9]=g*E+v*W+_*F+S*gt,l[13]=g*z+v*tt+_*V+S*I,l[2]=b*U+C*H+y*G+x*ft,l[6]=b*O+C*X+y*$+x*ot,l[10]=b*E+C*W+y*F+x*gt,l[14]=b*z+C*tt+y*V+x*I,l[3]=R*U+D*H+A*G+P*ft,l[7]=R*O+D*X+A*$+P*ot,l[11]=R*E+D*W+A*F+P*gt,l[15]=R*z+D*tt+A*V+P*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],l=t[12],c=t[1],h=t[5],p=t[9],d=t[13],g=t[2],v=t[6],_=t[10],S=t[14],b=t[3],C=t[7],y=t[11],x=t[15],R=p*S-d*_,D=h*S-d*v,A=h*_-p*v,P=c*S-d*g,U=c*_-p*g,O=c*v-h*g;return n*(C*R-y*D+x*A)-a*(b*R-y*P+x*U)+o*(b*D-C*P+x*O)-l*(b*A-C*U+y*O)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],l=t[1],c=t[5],h=t[9],p=t[2],d=t[6],g=t[10];return n*(c*g-h*d)-a*(l*g-h*p)+o*(l*d-c*p)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],h=t[5],p=t[6],d=t[7],g=t[8],v=t[9],_=t[10],S=t[11],b=t[12],C=t[13],y=t[14],x=t[15],R=n*h-a*c,D=n*p-o*c,A=n*d-l*c,P=a*p-o*h,U=a*d-l*h,O=o*d-l*p,E=g*C-v*b,z=g*y-_*b,H=g*x-S*b,X=v*y-_*C,W=v*x-S*C,tt=_*x-S*y,G=R*tt-D*W+A*X+P*H-U*z+O*E;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/G;return t[0]=(h*tt-p*W+d*X)*$,t[1]=(o*W-a*tt-l*X)*$,t[2]=(C*O-y*U+x*P)*$,t[3]=(_*U-v*O-S*P)*$,t[4]=(p*H-c*tt-d*z)*$,t[5]=(n*tt-o*H+l*z)*$,t[6]=(y*A-b*O-x*D)*$,t[7]=(g*O-_*A+S*D)*$,t[8]=(c*W-h*H+d*E)*$,t[9]=(a*H-n*W-l*E)*$,t[10]=(b*U-C*A+x*R)*$,t[11]=(v*A-g*U-S*R)*$,t[12]=(h*z-c*X-p*E)*$,t[13]=(n*X-a*z+o*E)*$,t[14]=(C*D-b*P-y*R)*$,t[15]=(g*P-v*D+_*R)*$,this}scale(t){const n=this.elements,a=t.x,o=t.y,l=t.z;return n[0]*=a,n[4]*=o,n[8]*=l,n[1]*=a,n[5]*=o,n[9]*=l,n[2]*=a,n[6]*=o,n[10]*=l,n[3]*=a,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),l=1-a,c=t.x,h=t.y,p=t.z,d=l*c,g=l*h;return this.set(d*c+a,d*h-o*p,d*p+o*h,0,d*h+o*p,g*h+a,g*p-o*c,0,d*p-o*h,g*p+o*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,l,c){return this.set(1,a,l,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,l=n._x,c=n._y,h=n._z,p=n._w,d=l+l,g=c+c,v=h+h,_=l*d,S=l*g,b=l*v,C=c*g,y=c*v,x=h*v,R=p*d,D=p*g,A=p*v,P=a.x,U=a.y,O=a.z;return o[0]=(1-(C+x))*P,o[1]=(S+A)*P,o[2]=(b-D)*P,o[3]=0,o[4]=(S-A)*U,o[5]=(1-(_+x))*U,o[6]=(y+R)*U,o[7]=0,o[8]=(b+D)*O,o[9]=(y-R)*O,o[10]=(1-(_+C))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),n.identity(),this;let c=$r.set(o[0],o[1],o[2]).length();const h=$r.set(o[4],o[5],o[6]).length(),p=$r.set(o[8],o[9],o[10]).length();l<0&&(c=-c),ta.copy(this);const d=1/c,g=1/h,v=1/p;return ta.elements[0]*=d,ta.elements[1]*=d,ta.elements[2]*=d,ta.elements[4]*=g,ta.elements[5]*=g,ta.elements[6]*=g,ta.elements[8]*=v,ta.elements[9]*=v,ta.elements[10]*=v,n.setFromRotationMatrix(ta),a.x=c,a.y=h,a.z=p,this}makePerspective(t,n,a,o,l,c,h=va,p=!1){const d=this.elements,g=2*l/(n-t),v=2*l/(a-o),_=(n+t)/(n-t),S=(a+o)/(a-o);let b,C;if(p)b=l/(c-l),C=c*l/(c-l);else if(h===va)b=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(h===Kl)b=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,l,c,h=va,p=!1){const d=this.elements,g=2/(n-t),v=2/(a-o),_=-(n+t)/(n-t),S=-(a+o)/(a-o);let b,C;if(p)b=1/(c-l),C=c/(c-l);else if(h===va)b=-2/(c-l),C=-(c+l)/(c-l);else if(h===Kl)b=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=b,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Sf.prototype.isMatrix4=!0;let Ze=Sf;const $r=new k,ta=new Ze,nb=new k(0,0,0),ib=new k(1,1,1),Es=new k,xc=new k,Ui=new k,k_=new Ze,X_=new Is;class oa{constructor(t=0,n=0,a=0,o=oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,l=o[0],c=o[4],h=o[8],p=o[1],d=o[5],g=o[9],v=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Oe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oa.DEFAULT_ORDER="XYZ";class sS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ab=0;const W_=new k,to=new Is,Va=new Ze,yc=new k,El=new k,sb=new k,rb=new Is,q_=new k(1,0,0),Y_=new k(0,1,0),Z_=new k(0,0,1),K_={type:"added"},ob={type:"removed"},eo={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Ln extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new k,n=new oa,a=new Is,o=new k(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ze},normalMatrix:{value:new Ee}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return to.setFromAxisAngle(t,n),this.quaternion.multiply(to),this}rotateOnWorldAxis(t,n){return to.setFromAxisAngle(t,n),this.quaternion.premultiply(to),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,n){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?yc.copy(t):yc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(El,yc,this.up):Va.lookAt(yc,El,this.up),this.quaternion.setFromRotationMatrix(Va),o&&(Va.extractRotation(o.matrixWorld),to.setFromRotationMatrix(Va),this.quaternion.premultiply(to.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K_),eo.child=t,this.dispatchEvent(eo),eo.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ob),Yd.child=t,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Va.multiply(t.parent.matrixWorld)),t.applyMatrix4(Va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K_),eo.child=t,this.dispatchEvent(eo),eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,sb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,rb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*o,l[13]+=a-l[1]*n-l[5]*a-l[9]*o,l[14]+=o-l[2]*n-l[6]*a-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,g=p.length;d<g;d++){const v=p[d];l(t.shapes,v)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(l(t.materials,this.material[p]));o.material=h}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(l(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),d=c(t.textures),g=c(t.images),v=c(t.shapes),_=c(t.skeletons),S=c(t.animations),b=c(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),S.length>0&&(a.animations=S),b.length>0&&(a.nodes=b)}return a.object=o,a;function c(h){const p=[];for(const d in h){const g=h[d];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ln.DEFAULT_UP=new k(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,l=null,c=null;const h=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const C of t.hand.values()){const y=n.getJointPose(C,a),x=this._getHandJoint(d,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,b=.005;d.inputState.pinching&&_>S+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=S-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Bl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const rS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Kd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ee{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Ge.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ge.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Ge.workingColorSpace){if(t=R0(t,1),n=Oe(n,0,1),a=Oe(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Kd(c,l,t+1/3),this.g=Kd(c,l,t),this.b=Kd(c,l,t-1/3)}return Ge.colorSpaceToWorking(this,o),this}setStyle(t,n=xi){function a(l){l!==void 0&&parseFloat(l)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:xe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=xi){const a=rS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ka(t.r),this.g=Ka(t.g),this.b=Ka(t.b),this}copyLinearToSRGB(t){return this.r=xo(t.r),this.g=xo(t.g),this.b=xo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Ge.workingToColorSpace(Qn.copy(this),t),Math.round(Oe(Qn.r*255,0,255))*65536+Math.round(Oe(Qn.g*255,0,255))*256+Math.round(Oe(Qn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ge.workingColorSpace){Ge.workingToColorSpace(Qn.copy(this),n);const a=Qn.r,o=Qn.g,l=Qn.b,c=Math.max(a,o,l),h=Math.min(a,o,l);let p,d;const g=(h+c)/2;if(h===c)p=0,d=0;else{const v=c-h;switch(d=g<=.5?v/(c+h):v/(2-c-h),c){case a:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-a)/v+2;break;case l:p=(a-o)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=g,t}getRGB(t,n=Ge.workingColorSpace){return Ge.workingToColorSpace(Qn.copy(this),n),t.r=Qn.r,t.g=Qn.g,t.b=Qn.b,t}getStyle(t=xi){Ge.workingToColorSpace(Qn.copy(this),t);const n=Qn.r,a=Qn.g,o=Qn.b;return t!==xi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Ts),this.setHSL(Ts.h+t,Ts.s+n,Ts.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ts),t.getHSL(Mc);const a=kl(Ts.h,Mc.h,n),o=kl(Ts.s,Mc.s,n),l=kl(Ts.l,Mc.l,n);return this.setHSL(a,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*o,this.g=l[1]*n+l[4]*a+l[7]*o,this.b=l[2]*n+l[5]*a+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new ee;ee.NAMES=rS;class U0{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=n}clone(){return new U0(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ub extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oa,this.environmentIntensity=1,this.environmentRotation=new oa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ea=new k,ka=new k,Jd=new k,Xa=new k,no=new k,io=new k,J_=new k,Qd=new k,jd=new k,$d=new k,tp=new _n,ep=new _n,np=new _n;class Zi{constructor(t=new k,n=new k,a=new k){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),ea.subVectors(t,n),o.cross(ea);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,n,a,o,l){ea.subVectors(o,n),ka.subVectors(a,n),Jd.subVectors(t,n);const c=ea.dot(ea),h=ea.dot(ka),p=ea.dot(Jd),d=ka.dot(ka),g=ka.dot(Jd),v=c*d-h*h;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(d*p-h*g)*_,b=(c*g-h*p)*_;return l.set(1-S-b,b,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,n,a,o,l,c,h,p){return this.getBarycoord(t,n,a,o,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Xa.x),p.addScaledVector(c,Xa.y),p.addScaledVector(h,Xa.z),p)}static getInterpolatedAttribute(t,n,a,o,l,c){return tp.setScalar(0),ep.setScalar(0),np.setScalar(0),tp.fromBufferAttribute(t,n),ep.fromBufferAttribute(t,a),np.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(tp,l.x),c.addScaledVector(ep,l.y),c.addScaledVector(np,l.z),c}static isFrontFacing(t,n,a,o){return ea.subVectors(a,n),ka.subVectors(t,n),ea.cross(ka).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ea.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),ea.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Zi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,l){return Zi.getInterpolation(t,this.a,this.b,this.c,n,a,o,l)}containsPoint(t){return Zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,l=this.c;let c,h;no.subVectors(o,a),io.subVectors(l,a),Qd.subVectors(t,a);const p=no.dot(Qd),d=io.dot(Qd);if(p<=0&&d<=0)return n.copy(a);jd.subVectors(t,o);const g=no.dot(jd),v=io.dot(jd);if(g>=0&&v<=g)return n.copy(o);const _=p*v-g*d;if(_<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(a).addScaledVector(no,c);$d.subVectors(t,l);const S=no.dot($d),b=io.dot($d);if(b>=0&&S<=b)return n.copy(l);const C=S*d-p*b;if(C<=0&&d>=0&&b<=0)return h=d/(d-b),n.copy(a).addScaledVector(io,h);const y=g*b-S*v;if(y<=0&&v-g>=0&&S-b>=0)return J_.subVectors(l,o),h=(v-g)/(v-g+(S-b)),n.copy(o).addScaledVector(J_,h);const x=1/(y+C+_);return c=C*x,h=_*x,n.copy(a).addScaledVector(no,c).addScaledVector(io,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Sr{constructor(t=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(na.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(na.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=na.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=l.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,na):na.fromBufferAttribute(l,c),na.applyMatrix4(t.matrixWorld),this.expandByPoint(na);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bc.copy(a.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const o=t.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,na),na.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),Ec.subVectors(this.max,Tl),ao.subVectors(t.a,Tl),so.subVectors(t.b,Tl),ro.subVectors(t.c,Tl),As.subVectors(so,ao),ws.subVectors(ro,so),ar.subVectors(ao,ro);let n=[0,-As.z,As.y,0,-ws.z,ws.y,0,-ar.z,ar.y,As.z,0,-As.x,ws.z,0,-ws.x,ar.z,0,-ar.x,-As.y,As.x,0,-ws.y,ws.x,0,-ar.y,ar.x,0];return!ip(n,ao,so,ro,Ec)||(n=[1,0,0,0,1,0,0,0,1],!ip(n,ao,so,ro,Ec))?!1:(Tc.crossVectors(As,ws),n=[Tc.x,Tc.y,Tc.z],ip(n,ao,so,ro,Ec))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,na).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(na).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wa=[new k,new k,new k,new k,new k,new k,new k,new k],na=new k,bc=new Sr,ao=new k,so=new k,ro=new k,As=new k,ws=new k,ar=new k,Tl=new k,Ec=new k,Tc=new k,sr=new k;function ip(s,t,n,a,o){for(let l=0,c=s.length-3;l<=c;l+=3){sr.fromArray(s,l);const h=o.x*Math.abs(sr.x)+o.y*Math.abs(sr.y)+o.z*Math.abs(sr.z),p=t.dot(sr),d=n.dot(sr),g=a.dot(sr);if(Math.max(-Math.max(p,d,g),Math.min(p,d,g))>h)return!1}return!0}const Dn=new k,Ac=new wt;let cb=0;class we extends _r{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=nS,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ac.fromBufferAttribute(this,n),Ac.applyMatrix3(t),this.setXY(n,Ac.x,Ac.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix3(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=ia(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=en(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ia(n,this.array)),n}setX(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ia(n,this.array)),n}setY(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ia(n,this.array)),n}setZ(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ia(n,this.array)),n}setW(t,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),a=en(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),a=en(a,this.array),o=en(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,l){return t*=this.itemSize,this.normalized&&(n=en(n,this.array),a=en(a,this.array),o=en(o,this.array),l=en(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class oS extends we{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class lS extends we{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Le extends we{constructor(t,n,a){super(new Float32Array(t),n,a)}}const fb=new Sr,Al=new k,ap=new k;class Uo{constructor(t=new k,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):fb.setFromPoints(t).getCenter(a);let o=0;for(let l=0,c=t.length;l<c;l++)o=Math.max(o,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Al.subVectors(t,this.center);const n=Al.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Al,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ap.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Al.copy(t.center).add(ap)),this.expandByPoint(Al.copy(t.center).sub(ap))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let hb=0;const Yi=new Ze,sp=new Ln,oo=new k,Ni=new Sr,wl=new Sr,Bn=new k;class on extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(DM(t)?lS:oS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new Ee().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yi.makeRotationFromQuaternion(t),this.applyMatrix4(Yi),this}rotateX(t){return Yi.makeRotationX(t),this.applyMatrix4(Yi),this}rotateY(t){return Yi.makeRotationY(t),this.applyMatrix4(Yi),this}rotateZ(t){return Yi.makeRotationZ(t),this.applyMatrix4(Yi),this}translate(t,n,a){return Yi.makeTranslation(t,n,a),this.applyMatrix4(Yi),this}scale(t,n,a){return Yi.makeScale(t,n,a),this.applyMatrix4(Yi),this}lookAt(t){return sp.lookAt(t),sp.updateMatrix(),this.applyMatrix4(sp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Le(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const l=t[o];n.setXYZ(o,l.x,l.y,l.z||0)}t.length>n.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const l=n[a];Ni.setFromBufferAttribute(l),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const a=this.boundingSphere.center;if(Ni.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const h=n[l];wl.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(Ni.min,wl.min),Ni.expandByPoint(Bn),Bn.addVectors(Ni.max,wl.max),Ni.expandByPoint(Bn)):(Ni.expandByPoint(wl.min),Ni.expandByPoint(wl.max))}Ni.getCenter(a);let o=0;for(let l=0,c=t.count;l<c;l++)Bn.fromBufferAttribute(t,l),o=Math.max(o,a.distanceToSquared(Bn));if(n)for(let l=0,c=n.length;l<c;l++){const h=n[l],p=this.morphTargetsRelative;for(let d=0,g=h.count;d<g;d++)Bn.fromBufferAttribute(h,d),p&&(oo.fromBufferAttribute(t,d),Bn.add(oo)),o=Math.max(o,a.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,l=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==a.count)&&(c=new we(new Float32Array(4*a.count),4),this.setAttribute("tangent",c));const h=[],p=[];for(let E=0;E<a.count;E++)h[E]=new k,p[E]=new k;const d=new k,g=new k,v=new k,_=new wt,S=new wt,b=new wt,C=new k,y=new k;function x(E,z,H){d.fromBufferAttribute(a,E),g.fromBufferAttribute(a,z),v.fromBufferAttribute(a,H),_.fromBufferAttribute(l,E),S.fromBufferAttribute(l,z),b.fromBufferAttribute(l,H),g.sub(d),v.sub(d),S.sub(_),b.sub(_);const X=1/(S.x*b.y-b.x*S.y);isFinite(X)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(X),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(X),h[E].add(C),h[z].add(C),h[H].add(C),p[E].add(y),p[z].add(y),p[H].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let E=0,z=R.length;E<z;++E){const H=R[E],X=H.start,W=H.count;for(let tt=X,G=X+W;tt<G;tt+=3)x(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const D=new k,A=new k,P=new k,U=new k;function O(E){P.fromBufferAttribute(o,E),U.copy(P);const z=h[E];D.copy(z),D.sub(P.multiplyScalar(P.dot(z))).normalize(),A.crossVectors(U,z);const X=A.dot(p[E])<0?-1:1;c.setXYZW(E,D.x,D.y,D.z,X)}for(let E=0,z=R.length;E<z;++E){const H=R[E],X=H.start,W=H.count;for(let tt=X,G=X+W;tt<G;tt+=3)O(t.getX(tt+0)),O(t.getX(tt+1)),O(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new we(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,S=a.count;_<S;_++)a.setXYZ(_,0,0,0);const o=new k,l=new k,c=new k,h=new k,p=new k,d=new k,g=new k,v=new k;if(t)for(let _=0,S=t.count;_<S;_+=3){const b=t.getX(_+0),C=t.getX(_+1),y=t.getX(_+2);o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,C),c.fromBufferAttribute(n,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),h.fromBufferAttribute(a,b),p.fromBufferAttribute(a,C),d.fromBufferAttribute(a,y),h.add(g),p.add(g),d.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(C,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),a.setXYZ(_+0,g.x,g.y,g.z),a.setXYZ(_+1,g.x,g.y,g.z),a.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Bn.fromBufferAttribute(t,n),Bn.normalize(),t.setXYZ(n,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(h,p){const d=h.array,g=h.itemSize,v=h.normalized,_=new d.constructor(p.length*g);let S=0,b=0;for(let C=0,y=p.length;C<y;C++){h.isInterleavedBufferAttribute?S=p[C]*h.data.stride+h.offset:S=p[C]*g;for(let x=0;x<g;x++)_[b++]=d[S++]}return new we(_,g,v)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],d=t(p,a);n.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const p=[],d=l[h];for(let g=0,v=d.length;g<v;g++){const _=d[g],S=t(_,a);p.push(S)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const d=c[h];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],g=[];for(let v=0,_=d.length;v<_;v++){const S=d[v];g.push(S.toJSON(t.data))}g.length>0&&(o[p]=g,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(n))}const l=t.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(n));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class db{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=nS,this.updateRanges=[],this.version=0,this.uuid=ya()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,l=this.stride;o<l;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ya()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const si=new k;class hf{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)si.fromBufferAttribute(this,n),si.applyMatrix4(t),this.setXYZ(n,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)si.fromBufferAttribute(this,n),si.applyNormalMatrix(t),this.setXYZ(n,si.x,si.y,si.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)si.fromBufferAttribute(this,n),si.transformDirection(t),this.setXYZ(n,si.x,si.y,si.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=ia(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=en(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=en(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=en(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=en(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=en(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=ia(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=ia(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=ia(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=ia(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=en(n,this.array),a=en(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=en(n,this.array),a=en(a,this.array),o=en(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=en(n,this.array),a=en(a,this.array),o=en(o,this.array),l=en(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=l,this}clone(t){if(t===void 0){ff("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return new we(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ff("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)n.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rp=new k,pb=new k,mb=new Ee;class Ls{constructor(t=new k(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=rp.subVectors(a,n).cross(pb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(rp),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return a===!0&&(c<0||c>1)?null:n.copy(t.start).addScaledVector(o,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||mb.getNormalMatrix(t),o=this.coplanarPoint(rp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let gb=0;class Bs extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=ya(),this.name="",this.type="Material",this.blending=Gl,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Y1,this.blendDst=Z1,this.blendEquation=vo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vd,this.stencilZFail=Vd,this.stencilZPass=Vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){xe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const c=[];for(const h in l){const p=l[h];delete p.metadata,c.push(p)}return c}if(n){const l=o(t.textures),c=o(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(a=>new Ls().fromJSON(a))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new wt().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class N0 extends Bs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let lo;const Cl=new k,uo=new k,co=new k,fo=new wt,Rl=new wt,uS=new Ze,wc=new k,Dl=new k,Cc=new k,Q_=new wt,op=new wt,j_=new wt;class L0 extends Ln{constructor(t=new N0){if(super(),this.isSprite=!0,this.type="Sprite",lo===void 0){lo=new on;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new db(n,5);lo.setIndex([0,1,2,0,2,3]),lo.setAttribute("position",new hf(a,3,0,!1)),lo.setAttribute("uv",new hf(a,2,3,!1))}this.geometry=lo,this.material=t,this.center=new wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),uS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),co.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-co.z);const a=this.material.rotation;let o,l;a!==0&&(l=Math.cos(a),o=Math.sin(a));const c=this.center;Rc(wc.set(-.5,-.5,0),co,c,uo,o,l),Rc(Dl.set(.5,-.5,0),co,c,uo,o,l),Rc(Cc.set(.5,.5,0),co,c,uo,o,l),Q_.set(0,0),op.set(1,0),j_.set(1,1);let h=t.ray.intersectTriangle(wc,Dl,Cc,!1,Cl);if(h===null&&(Rc(Dl.set(-.5,.5,0),co,c,uo,o,l),op.set(0,1),h=t.ray.intersectTriangle(wc,Cc,Dl,!1,Cl),h===null))return;const p=t.ray.origin.distanceTo(Cl);p<t.near||p>t.far||n.push({distance:p,point:Cl.clone(),uv:Zi.getInterpolation(Cl,wc,Dl,Cc,Q_,op,j_,new wt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rc(s,t,n,a,o,l){fo.subVectors(s,n).addScalar(.5).multiply(a),o!==void 0?(Rl.x=l*fo.x-o*fo.y,Rl.y=o*fo.x+l*fo.y):Rl.copy(fo),s.copy(t),s.x+=Rl.x,s.y+=Rl.y,s.applyMatrix4(uS)}const qa=new k,lp=new k,Dc=new k,Uc=new k;class cS{constructor(t=new k,n=new k(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=qa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(qa.copy(this.origin).addScaledVector(this.direction,n),qa.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){lp.copy(t).add(n).multiplyScalar(.5),Dc.copy(n).sub(t).normalize(),Uc.copy(this.origin).sub(lp);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Dc),h=Uc.dot(this.direction),p=-Uc.dot(Dc),d=Uc.lengthSq(),g=Math.abs(1-c*c);let v,_,S,b;if(g>0)if(v=c*p-h,_=c*h-p,b=l*g,v>=0)if(_>=-b)if(_<=b){const C=1/g;v*=C,_*=C,S=v*(v+c*_+2*h)+_*(c*v+_+2*p)+d}else _=l,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;else _=-l,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;else _<=-b?(v=Math.max(0,-(-c*l+h)),_=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+_*(_+2*p)+d):_<=b?(v=0,_=Math.min(Math.max(-l,-p),l),S=_*(_+2*p)+d):(v=Math.max(0,-(c*l+h)),_=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+_*(_+2*p)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+h)),S=-v*v+_*(_+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(lp).addScaledVector(Dc,_),S}intersectSphere(t,n){if(t.radius<0)return null;qa.subVectors(t.center,this.origin);const a=qa.dot(this.direction),o=qa.dot(qa)-a*a,l=t.radius*t.radius;if(o>l)return null;const c=Math.sqrt(l-o),h=a-c,p=a+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,l,c,h,p;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(a=(t.min.x-_.x)*d,o=(t.max.x-_.x)*d):(a=(t.max.x-_.x)*d,o=(t.min.x-_.x)*d),g>=0?(l=(t.min.y-_.y)*g,c=(t.max.y-_.y)*g):(l=(t.max.y-_.y)*g,c=(t.min.y-_.y)*g),a>c||l>o||((l>a||isNaN(a))&&(a=l),(c<o||isNaN(o))&&(o=c),v>=0?(h=(t.min.z-_.z)*v,p=(t.max.z-_.z)*v):(h=(t.max.z-_.z)*v,p=(t.min.z-_.z)*v),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,qa)!==null}intersectTriangle(t,n,a,o,l){const c=this.origin,h=this.direction,p=h.x,d=h.y,g=h.z,v=t.x-c.x,_=t.y-c.y,S=t.z-c.z,b=n.x-c.x,C=n.y-c.y,y=n.z-c.z,x=a.x-c.x,R=a.y-c.y,D=a.z-c.z,A=Math.abs(p),P=Math.abs(d),U=Math.abs(g);let O,E,z,H,X,W,tt,G,$,F,V,ft;if(A>=P&&A>=U?(z=p,W=v,$=b,ft=x,p>=0?(O=d,E=g,H=_,X=S,tt=C,G=y,F=R,V=D):(O=g,E=d,H=S,X=_,tt=y,G=C,F=D,V=R)):P>=U?(z=d,W=_,$=C,ft=R,d>=0?(O=g,E=p,H=S,X=v,tt=y,G=b,F=D,V=x):(O=p,E=g,H=v,X=S,tt=b,G=y,F=x,V=D)):(z=g,W=S,$=y,ft=D,g>=0?(O=p,E=d,H=v,X=_,tt=b,G=C,F=x,V=R):(O=d,E=p,H=_,X=v,tt=C,G=b,F=R,V=x)),z===0)return null;const ot=O/z,gt=E/z,I=1/z,at=H-ot*W,yt=X-gt*W,Lt=tt-ot*$,Ht=G-gt*$,Wt=F-ot*ft,rt=V-gt*ft,et=Wt*Ht-rt*Lt,Et=at*rt-yt*Wt,Yt=Lt*yt-Ht*at;if(o){if(et<0||Et<0||Yt<0)return null}else if((et<0||Et<0||Yt<0)&&(et>0||Et>0||Yt>0))return null;const zt=et+Et+Yt;if(zt===0)return null;const Zt=I*(et*W+Et*$+Yt*ft);return(zt>0?Zt<0:Zt>0)?null:this.at(Zt/zt,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yi extends Bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $_=new Ze,rr=new cS,Nc=new Uo,t1=new k,Lc=new k,Pc=new k,Oc=new k,up=new k,zc=new k,e1=new k,Ic=new k;class di extends Ln{constructor(t=new on,n=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(l&&h){zc.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const g=h[p],v=l[p];g!==0&&(up.fromBufferAttribute(v,t),c?zc.addScaledVector(up,g):zc.addScaledVector(up.sub(n),g))}n.add(zc)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(l),rr.copy(t.ray).recast(t.near),!(Nc.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Nc,t1)===null||rr.origin.distanceToSquared(t1)>(t.far-t.near)**2))&&($_.copy(l).invert(),rr.copy(t.ray).applyMatrix4($_),!(a.boundingBox!==null&&rr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,rr)))}_computeIntersections(t,n,a){let o;const l=this.geometry,c=this.material,h=l.index,p=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(c))for(let b=0,C=_.length;b<C;b++){const y=_[b],x=c[y.materialIndex],R=Math.max(y.start,S.start),D=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let A=R,P=D;A<P;A+=3){const U=h.getX(A),O=h.getX(A+1),E=h.getX(A+2);o=Bc(this,x,t,a,d,g,v,U,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let y=b,x=C;y<x;y+=3){const R=h.getX(y),D=h.getX(y+1),A=h.getX(y+2);o=Bc(this,c,t,a,d,g,v,R,D,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let b=0,C=_.length;b<C;b++){const y=_[b],x=c[y.materialIndex],R=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let A=R,P=D;A<P;A+=3){const U=A,O=A+1,E=A+2;o=Bc(this,x,t,a,d,g,v,U,O,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=b,x=C;y<x;y+=3){const R=y,D=y+1,A=y+2;o=Bc(this,c,t,a,d,g,v,R,D,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function vb(s,t,n,a,o,l,c,h){let p;if(t.side===fi?p=a.intersectTriangle(c,l,o,!0,h):p=a.intersectTriangle(o,l,c,t.side===dr,h),p===null)return null;Ic.copy(h),Ic.applyMatrix4(s.matrixWorld);const d=n.ray.origin.distanceTo(Ic);return d<n.near||d>n.far?null:{distance:d,point:Ic.clone(),object:s}}function Bc(s,t,n,a,o,l,c,h,p,d){s.getVertexPosition(h,Lc),s.getVertexPosition(p,Pc),s.getVertexPosition(d,Oc);const g=vb(s,t,n,a,Lc,Pc,Oc,e1);if(g){const v=new k;Zi.getBarycoord(e1,Lc,Pc,Oc,v),o&&(g.uv=Zi.getInterpolatedAttribute(o,h,p,d,v,new wt)),l&&(g.uv1=Zi.getInterpolatedAttribute(l,h,p,d,v,new wt)),c&&(g.normal=Zi.getInterpolatedAttribute(c,h,p,d,v,new k),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:p,c:d,normal:new k,materialIndex:0};Zi.getNormal(Lc,Pc,Oc,_.normal),g.face=_,g.barycoord=v}return g}class fS extends ti{constructor(t=null,n=1,a=1,o,l,c,h,p,d=Yn,g=Yn,v,_){super(null,c,h,p,d,g,o,l,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n1 extends we{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ho=new Ze,i1=new Ze,Fc=[],a1=new Sr,_b=new Ze,Ul=new di,Nl=new Uo;class ga extends di{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new n1(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,_b)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Sr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ho),a1.copy(t.boundingBox).applyMatrix4(ho),this.boundingBox.union(a1)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Uo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ho),Nl.copy(t.boundingSphere).applyMatrix4(ho),this.boundingSphere.union(Nl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,l=a.length+1,c=t*l+1;for(let h=0;h<a.length;h++)a[h]=o[c+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(Ul.geometry=this.geometry,Ul.material=this.material,Ul.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(a),t.ray.intersectsSphere(Nl)!==!1))for(let l=0;l<o;l++){this.getMatrixAt(l,ho),i1.multiplyMatrices(a,ho),Ul.matrixWorld=i1,Ul.raycast(t,Fc);for(let c=0,h=Fc.length;c<h;c++){const p=Fc[c];p.instanceId=l,p.object=this,n.push(p)}Fc.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new n1(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new fS(new Float32Array(o*this.count),o,this.count,b0,aa));const l=this.morphTexture.source.data.data;let c=0;for(let d=0;d<a.length;d++)c+=a[d];const h=this.geometry.morphTargetsRelative?1:1-c,p=o*t;return l[p]=h,l.set(a,p+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const or=new Uo,Sb=new wt(.5,.5),Hc=new k;class P0{constructor(t=new Ls,n=new Ls,a=new Ls,o=new Ls,l=new Ls,c=new Ls){this.planes=[t,n,a,o,l,c]}set(t,n,a,o,l,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(l),h[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=va,a=!1){const o=this.planes,l=t.elements,c=l[0],h=l[1],p=l[2],d=l[3],g=l[4],v=l[5],_=l[6],S=l[7],b=l[8],C=l[9],y=l[10],x=l[11],R=l[12],D=l[13],A=l[14],P=l[15];if(o[0].setComponents(d-c,S-g,x-b,P-R).normalize(),o[1].setComponents(d+c,S+g,x+b,P+R).normalize(),o[2].setComponents(d+h,S+v,x+C,P+D).normalize(),o[3].setComponents(d-h,S-v,x-C,P-D).normalize(),a)o[4].setComponents(p,_,y,A).normalize(),o[5].setComponents(d-p,S-_,x-y,P-A).normalize();else if(o[4].setComponents(d-p,S-_,x-y,P-A).normalize(),n===va)o[5].setComponents(d+p,S+_,x+y,P+A).normalize();else if(n===Kl)o[5].setComponents(p,_,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(t){or.center.set(0,0,0);const n=Sb.distanceTo(t.center);return or.radius=.7071067811865476+n,or.applyMatrix4(t.matrixWorld),this.intersectsSphere(or)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Hc.x=o.normal.x>0?t.max.x:t.min.x,Hc.y=o.normal.y>0?t.max.y:t.min.y,Hc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Hc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xb extends Bs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const s1=new Ze,r0=new cS,Gc=new Uo,Vc=new k;class Ql extends Ln{constructor(t=new on,n=new xb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.matrixWorld,l=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Gc.copy(a.boundingSphere),Gc.applyMatrix4(o),Gc.radius+=l,t.ray.intersectsSphere(Gc)===!1)return;s1.copy(o).invert(),r0.copy(t.ray).applyMatrix4(s1);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=a.index,v=a.attributes.position;if(d!==null){const _=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let b=_,C=S;b<C;b++){const y=d.getX(b);Vc.fromBufferAttribute(v,y),r1(Vc,y,p,o,t,n,this)}}else{const _=Math.max(0,c.start),S=Math.min(v.count,c.start+c.count);for(let b=_,C=S;b<C;b++)Vc.fromBufferAttribute(v,b),r1(Vc,b,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function r1(s,t,n,a,o,l,c){const h=r0.distanceSqToPoint(s);if(h<n){const p=new k;r0.closestPointToPoint(s,p),p.applyMatrix4(a);const d=o.ray.origin.distanceTo(p);if(d<o.near||d>o.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class hS extends ti{constructor(t=[],n=pr,a,o,l,c,h,p,d,g){super(t,n,a,o,l,c,h,p,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yb extends ti{constructor(t,n,a,o,l,c,h,p,d){super(t,n,a,o,l,c,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jl extends ti{constructor(t,n,a=Ma,o,l,c,h=Yn,p=Yn,d,g=Ja,v=1){if(g!==Ja&&g!==fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,o,l,c,h,p,g,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new D0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}}class Mb extends jl{constructor(t,n=Ma,a=pr,o,l,c=Yn,h=Yn,p,d=Ja){const g={width:t,height:t,depth:1},v=[g,g,g,g,g,g];super(t,t,n,a,o,l,c,h,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dS extends ti{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xr extends on{constructor(t=1,n=1,a=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:l,depthSegments:c};const h=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],g=[],v=[];let _=0,S=0;b("z","y","x",-1,-1,a,n,t,c,l,0),b("z","y","x",1,-1,a,n,-t,c,l,1),b("x","z","y",1,1,t,a,n,o,c,2),b("x","z","y",1,-1,t,a,-n,o,c,3),b("x","y","z",1,-1,t,n,a,o,l,4),b("x","y","z",-1,-1,t,n,-a,o,l,5),this.setIndex(p),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(v,2));function b(C,y,x,R,D,A,P,U,O,E,z){const H=A/O,X=P/E,W=A/2,tt=P/2,G=U/2,$=O+1,F=E+1;let V=0,ft=0;const ot=new k;for(let gt=0;gt<F;gt++){const I=gt*X-tt;for(let at=0;at<$;at++){const yt=at*H-W;ot[C]=yt*R,ot[y]=I*D,ot[x]=G,d.push(ot.x,ot.y,ot.z),ot[C]=0,ot[y]=0,ot[x]=U>0?1:-1,g.push(ot.x,ot.y,ot.z),v.push(at/O),v.push(1-gt/E),V+=1}}for(let gt=0;gt<E;gt++)for(let I=0;I<O;I++){const at=_+I+$*gt,yt=_+I+$*(gt+1),Lt=_+(I+1)+$*(gt+1),Ht=_+(I+1)+$*gt;p.push(at,yt,Ht),p.push(yt,Lt,Ht),ft+=6}h.addGroup(S,ft,z),S+=ft,_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Mf extends on{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const l=[],c=[],h=[],p=[],d=new k,g=new wt;c.push(0,0,0),h.push(0,0,1),p.push(.5,.5);for(let v=0,_=3;v<=n;v++,_+=3){const S=a+v/n*o;d.x=t*Math.cos(S),d.y=t*Math.sin(S),c.push(d.x,d.y,d.z),h.push(0,0,1),g.x=(c[_]/t+1)/2,g.y=(c[_+1]/t+1)/2,p.push(g.x,g.y)}for(let v=1;v<=n;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mf(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qn extends on{constructor(t=1,n=1,a=1,o=32,l=1,c=!1,h=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:p};const d=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],_=[],S=[];let b=0;const C=[],y=a/2;let x=0;R(),c===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new Le(v,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(S,2));function R(){const A=new k,P=new k;let U=0;const O=(n-t)/a;for(let E=0;E<=l;E++){const z=[],H=E/l,X=H*(n-t)+t;for(let W=0;W<=o;W++){const tt=W/o,G=tt*p+h,$=Math.sin(G),F=Math.cos(G);P.x=X*$,P.y=-H*a+y,P.z=X*F,v.push(P.x,P.y,P.z),A.set($,O,F).normalize(),_.push(A.x,A.y,A.z),S.push(tt,1-H),z.push(b++)}C.push(z)}for(let E=0;E<o;E++)for(let z=0;z<l;z++){const H=C[z][E],X=C[z+1][E],W=C[z+1][E+1],tt=C[z][E+1];(t>0||z!==0)&&(g.push(H,X,tt),U+=3),(n>0||z!==l-1)&&(g.push(X,W,tt),U+=3)}d.addGroup(x,U,0),x+=U}function D(A){const P=b,U=new wt,O=new k;let E=0;const z=A===!0?t:n,H=A===!0?1:-1;for(let W=1;W<=o;W++)v.push(0,y*H,0),_.push(0,H,0),S.push(.5,.5),b++;const X=b;for(let W=0;W<=o;W++){const G=W/o*p+h,$=Math.cos(G),F=Math.sin(G);O.x=z*F,O.y=y*H,O.z=z*$,v.push(O.x,O.y,O.z),_.push(0,H,0),U.x=$*.5+.5,U.y=F*.5*H+.5,S.push(U.x,U.y),b++}for(let W=0;W<o;W++){const tt=P+W,G=X+W;A===!0?g.push(G,G+1,tt):g.push(G+1,G,tt),E+=3}d.addGroup(x,E,A===!0?1:2),x+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bf extends qn{constructor(t=1,n=1,a=32,o=1,l=!1,c=0,h=Math.PI*2){super(0,t,n,a,o,l,c,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:h}}static fromJSON(t){return new bf(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class O0 extends on{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const l=[],c=[];h(o),d(a),g(),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(l.slice(),3)),this.setAttribute("uv",new Le(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(R){const D=new k,A=new k,P=new k;for(let U=0;U<n.length;U+=3)S(n[U+0],D),S(n[U+1],A),S(n[U+2],P),p(D,A,P,R)}function p(R,D,A,P){const U=P+1,O=[];for(let E=0;E<=U;E++){O[E]=[];const z=R.clone().lerp(A,E/U),H=D.clone().lerp(A,E/U),X=U-E;for(let W=0;W<=X;W++)W===0&&E===U?O[E][W]=z:O[E][W]=z.clone().lerp(H,W/X)}for(let E=0;E<U;E++)for(let z=0;z<2*(U-E)-1;z++){const H=Math.floor(z/2);z%2===0?(_(O[E][H+1]),_(O[E+1][H]),_(O[E][H])):(_(O[E][H+1]),_(O[E+1][H+1]),_(O[E+1][H]))}}function d(R){const D=new k;for(let A=0;A<l.length;A+=3)D.x=l[A+0],D.y=l[A+1],D.z=l[A+2],D.normalize().multiplyScalar(R),l[A+0]=D.x,l[A+1]=D.y,l[A+2]=D.z}function g(){const R=new k;for(let D=0;D<l.length;D+=3){R.x=l[D+0],R.y=l[D+1],R.z=l[D+2];const A=y(R)/2/Math.PI+.5,P=x(R)/Math.PI+.5;c.push(A,1-P)}b(),v()}function v(){for(let R=0;R<c.length;R+=6){const D=c[R+0],A=c[R+2],P=c[R+4],U=Math.max(D,A,P),O=Math.min(D,A,P);U>.9&&O<.1&&(D<.2&&(c[R+0]+=1),A<.2&&(c[R+2]+=1),P<.2&&(c[R+4]+=1))}}function _(R){l.push(R.x,R.y,R.z)}function S(R,D){const A=R*3;D.x=t[A+0],D.y=t[A+1],D.z=t[A+2]}function b(){const R=new k,D=new k,A=new k,P=new k,U=new wt,O=new wt,E=new wt;for(let z=0,H=0;z<l.length;z+=9,H+=6){R.set(l[z+0],l[z+1],l[z+2]),D.set(l[z+3],l[z+4],l[z+5]),A.set(l[z+6],l[z+7],l[z+8]),U.set(c[H+0],c[H+1]),O.set(c[H+2],c[H+3]),E.set(c[H+4],c[H+5]),P.copy(R).add(D).add(A).divideScalar(3);const X=y(P);C(U,H+0,R,X),C(O,H+2,D,X),C(E,H+4,A,X)}}function C(R,D,A,P){P<0&&R.x===1&&(c[D]=R.x-1),A.x===0&&A.z===0&&(c[D]=P/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O0(t.vertices,t.indices,t.radius,t.detail)}}class Ef extends O0{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=1/a,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ef(t.radius,t.detail)}}class ba{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),l=0;n.push(0);for(let c=1;c<=t;c++)a=this.getPoint(c/t),l+=a.distanceTo(o),n.push(l),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const l=a.length;let c;n?c=n:c=t*a[l-1];let h=0,p=l-1,d;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),d=a[o]-c,d<0)h=o+1;else if(d>0)p=o-1;else{p=o;break}if(o=p,a[o]===c)return o/(l-1);const g=a[o],_=a[o+1]-g,S=(c-g)/_;return(o+S)/(l-1)}getTangent(t,n){let o=t-1e-4,l=t+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),h=this.getPoint(l),p=n||(c.isVector2?new wt:new k);return p.copy(h).sub(c).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new k,o=[],l=[],c=[],h=new k,p=new Ze;for(let S=0;S<=t;S++){const b=S/t;o[S]=this.getTangentAt(b,new k)}l[0]=new k,c[0]=new k;let d=Number.MAX_VALUE;const g=Math.abs(o[0].x),v=Math.abs(o[0].y),_=Math.abs(o[0].z);g<=d&&(d=g,a.set(1,0,0)),v<=d&&(d=v,a.set(0,1,0)),_<=d&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),l[0].crossVectors(o[0],h),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=t;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Oe(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(h,b))}c[S].crossVectors(o[S],l[S])}if(n===!0){let S=Math.acos(Oe(l[0].dot(l[t]),-1,1));S/=t,o[0].dot(h.crossVectors(l[0],l[t]))>0&&(S=-S);for(let b=1;b<=t;b++)l[b].applyMatrix4(p.makeRotationAxis(o[b],S*b)),c[b].crossVectors(o[b],l[b])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class z0 extends ba{constructor(t=0,n=0,a=1,o=1,l=0,c=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new wt){const a=n,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const h=this.aStartAngle+t*l;let p=this.aX+this.xRadius*Math.cos(h),d=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),_=p-this.aX,S=d-this.aY;p=_*g-S*v+this.aX,d=_*v+S*g+this.aY}return a.set(p,d)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bb extends z0{constructor(t,n,a,o,l,c){super(t,n,a,a,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function I0(){let s=0,t=0,n=0,a=0;function o(l,c,h,p){s=l,t=h,n=-3*l+3*c-2*h-p,a=2*l-2*c+h+p}return{initCatmullRom:function(l,c,h,p,d){o(c,h,d*(h-l),d*(p-c))},initNonuniformCatmullRom:function(l,c,h,p,d,g,v){let _=(c-l)/d-(h-l)/(d+g)+(h-c)/g,S=(h-c)/g-(p-c)/(g+v)+(p-h)/v;_*=g,S*=g,o(c,h,_,S)},calc:function(l){const c=l*l,h=c*l;return s+t*l+n*c+a*h}}}const o1=new k,l1=new k,cp=new I0,fp=new I0,hp=new I0;class gr extends ba{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new k){const a=n,o=this.points,l=o.length,c=(l-(this.closed?0:1))*t;let h=Math.floor(c),p=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:p===0&&h===l-1&&(h=l-2,p=1);let d,g;this.closed||h>0?d=o[(h-1)%l]:(l1.subVectors(o[0],o[1]).add(o[0]),d=l1);const v=o[h%l],_=o[(h+1)%l];if(this.closed||h+2<l?g=o[(h+2)%l]:(o1.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=o1),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let b=Math.pow(d.distanceToSquared(v),S),C=Math.pow(v.distanceToSquared(_),S),y=Math.pow(_.distanceToSquared(g),S);C<1e-4&&(C=1),b<1e-4&&(b=C),y<1e-4&&(y=C),cp.initNonuniformCatmullRom(d.x,v.x,_.x,g.x,b,C,y),fp.initNonuniformCatmullRom(d.y,v.y,_.y,g.y,b,C,y),hp.initNonuniformCatmullRom(d.z,v.z,_.z,g.z,b,C,y)}else this.curveType==="catmullrom"&&(cp.initCatmullRom(d.x,v.x,_.x,g.x,this.tension),fp.initCatmullRom(d.y,v.y,_.y,g.y,this.tension),hp.initCatmullRom(d.z,v.z,_.z,g.z,this.tension));return a.set(cp.calc(p),fp.calc(p),hp.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new k().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function u1(s,t,n,a,o){const l=(a-t)*.5,c=(o-n)*.5,h=s*s,p=s*h;return(2*n-2*a+l+c)*p+(-3*n+3*a-2*l-c)*h+l*s+n}function Eb(s,t){const n=1-s;return n*n*t}function Tb(s,t){return 2*(1-s)*s*t}function Ab(s,t){return s*s*t}function Xl(s,t,n,a){return Eb(s,t)+Tb(s,n)+Ab(s,a)}function wb(s,t){const n=1-s;return n*n*n*t}function Cb(s,t){const n=1-s;return 3*n*n*s*t}function Rb(s,t){return 3*(1-s)*s*s*t}function Db(s,t){return s*s*s*t}function Wl(s,t,n,a,o){return wb(s,t)+Cb(s,n)+Rb(s,a)+Db(s,o)}class pS extends ba{constructor(t=new wt,n=new wt,a=new wt,o=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new wt){const a=n,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return a.set(Wl(t,o.x,l.x,c.x,h.x),Wl(t,o.y,l.y,c.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ub extends ba{constructor(t=new k,n=new k,a=new k,o=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new k){const a=n,o=this.v0,l=this.v1,c=this.v2,h=this.v3;return a.set(Wl(t,o.x,l.x,c.x,h.x),Wl(t,o.y,l.y,c.y,h.y),Wl(t,o.z,l.z,c.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mS extends ba{constructor(t=new wt,n=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new wt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new wt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nb extends ba{constructor(t=new k,n=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new k){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new k){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gS extends ba{constructor(t=new wt,n=new wt,a=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new wt){const a=n,o=this.v0,l=this.v1,c=this.v2;return a.set(Xl(t,o.x,l.x,c.x),Xl(t,o.y,l.y,c.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vS extends ba{constructor(t=new k,n=new k,a=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new k){const a=n,o=this.v0,l=this.v1,c=this.v2;return a.set(Xl(t,o.x,l.x,c.x),Xl(t,o.y,l.y,c.y),Xl(t,o.z,l.z,c.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _S extends ba{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new wt){const a=n,o=this.points,l=(o.length-1)*t,c=Math.floor(l),h=l-c,p=o[c===0?c:c-1],d=o[c],g=o[c>o.length-2?o.length-1:c+1],v=o[c>o.length-3?o.length-1:c+2];return a.set(u1(h,p.x,d.x,g.x,v.x),u1(h,p.y,d.y,g.y,v.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new wt().fromArray(o))}return this}}var df=Object.freeze({__proto__:null,ArcCurve:bb,CatmullRomCurve3:gr,CubicBezierCurve:pS,CubicBezierCurve3:Ub,EllipseCurve:z0,LineCurve:mS,LineCurve3:Nb,QuadraticBezierCurve:gS,QuadraticBezierCurve3:vS,SplineCurve:_S});class Lb extends ba{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new df[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=a){const c=o[l]-a,h=this.curves[l],p=h.getLength(),d=p===0?0:1-c/p;return h.getPointAt(d,n)}l++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],h=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,p=c.getPoints(h);for(let d=0;d<p.length;d++){const g=p[d];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new df[o.type]().fromJSON(o))}return this}}class pf extends Lb{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new mS(this.currentPoint.clone(),new wt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const l=new gS(this.currentPoint.clone(),new wt(t,n),new wt(a,o));return this.curves.push(l),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,l,c){const h=new pS(this.currentPoint.clone(),new wt(t,n),new wt(a,o),new wt(l,c));return this.curves.push(h),this.currentPoint.set(l,c),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new _S(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,l,c){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,a,o,l,c),this}absarc(t,n,a,o,l,c){return this.absellipse(t,n,a,a,o,l,c),this}ellipse(t,n,a,o,l,c,h,p){const d=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+d,n+g,a,o,l,c,h,p),this}absellipse(t,n,a,o,l,c,h,p){const d=new z0(t,n,a,o,l,c,h,p);if(this.curves.length>0){const v=d.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(d);const g=d.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zi extends pf{constructor(t){super(t),this.uuid=ya(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new pf().fromJSON(o))}return this}}function Pb(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let l=SS(s,0,o,n,!0);const c=[];if(!l||l.next===l.prev)return c;let h,p,d;if(a&&(l=Fb(s,t,l,n)),s.length>80*n){h=s[0],p=s[1];let g=h,v=p;for(let _=n;_<o;_+=n){const S=s[_],b=s[_+1];S<h&&(h=S),b<p&&(p=b),S>g&&(g=S),b>v&&(v=b)}d=Math.max(g-h,v-p),d=d!==0?32767/d:0}return $l(l,c,n,h,p,d,0),c}function SS(s,t,n,a,o){let l;if(o===Jb(s,t,n,a)>0)for(let c=t;c<n;c+=a)l=c1(c/a|0,s[c],s[c+1],l);else for(let c=n-a;c>=t;c-=a)l=c1(c/a|0,s[c],s[c+1],l);return l&&Eo(l,l.next)&&(eu(l),l=l.next),l}function vr(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(Eo(n,n.next)||Sn(n.prev,n,n.next)===0)){if(eu(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function $l(s,t,n,a,o,l,c){if(!s)return;!c&&l&&Xb(s,a,o,l);let h=s;for(;s.prev!==s.next;){const p=s.prev,d=s.next;if(l?zb(s,a,o,l):Ob(s)){t.push(p.i,s.i,d.i),eu(s),s=d.next,h=d.next;continue}if(s=d,s===h){c?c===1?(s=Ib(vr(s),t),$l(s,t,n,a,o,l,2)):c===2&&Bb(s,t,n,a,o,l):$l(vr(s),t,n,a,o,l,1);break}}}function Ob(s){const t=s.prev,n=s,a=s.next;if(Sn(t,n,a)>=0)return!1;const o=t.x,l=n.x,c=a.x,h=t.y,p=n.y,d=a.y,g=Math.min(o,l,c),v=Math.min(h,p,d),_=Math.max(o,l,c),S=Math.max(h,p,d);let b=a.next;for(;b!==t;){if(b.x>=g&&b.x<=_&&b.y>=v&&b.y<=S&&Fl(o,h,l,p,c,d,b.x,b.y)&&Sn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function zb(s,t,n,a){const o=s.prev,l=s,c=s.next;if(Sn(o,l,c)>=0)return!1;const h=o.x,p=l.x,d=c.x,g=o.y,v=l.y,_=c.y,S=Math.min(h,p,d),b=Math.min(g,v,_),C=Math.max(h,p,d),y=Math.max(g,v,_),x=o0(S,b,t,n,a),R=o0(C,y,t,n,a);let D=s.prevZ,A=s.nextZ;for(;D&&D.z>=x&&A&&A.z<=R;){if(D.x>=S&&D.x<=C&&D.y>=b&&D.y<=y&&D!==o&&D!==c&&Fl(h,g,p,v,d,_,D.x,D.y)&&Sn(D.prev,D,D.next)>=0||(D=D.prevZ,A.x>=S&&A.x<=C&&A.y>=b&&A.y<=y&&A!==o&&A!==c&&Fl(h,g,p,v,d,_,A.x,A.y)&&Sn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;D&&D.z>=x;){if(D.x>=S&&D.x<=C&&D.y>=b&&D.y<=y&&D!==o&&D!==c&&Fl(h,g,p,v,d,_,D.x,D.y)&&Sn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;A&&A.z<=R;){if(A.x>=S&&A.x<=C&&A.y>=b&&A.y<=y&&A!==o&&A!==c&&Fl(h,g,p,v,d,_,A.x,A.y)&&Sn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Ib(s,t){let n=s;do{const a=n.prev,o=n.next.next;!Eo(a,o)&&yS(a,n,n.next,o)&&tu(a,o)&&tu(o,a)&&(t.push(a.i,n.i,o.i),eu(n),eu(n.next),n=s=o),n=n.next}while(n!==s);return vr(n)}function Bb(s,t,n,a,o,l){let c=s;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&Yb(c,h)){let p=MS(c,h);c=vr(c,c.next),p=vr(p,p.next),$l(c,t,n,a,o,l,0),$l(p,t,n,a,o,l,0);return}h=h.next}c=c.next}while(c!==s)}function Fb(s,t,n,a){const o=[];for(let l=0,c=t.length;l<c;l++){const h=t[l]*a,p=l<c-1?t[l+1]*a:s.length,d=SS(s,h,p,a,!1);d===d.next&&(d.steiner=!0),o.push(qb(d))}o.sort(Hb);for(let l=0;l<o.length;l++)n=Gb(o[l],n);return n}function Hb(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function Gb(s,t){const n=Vb(s,t);if(!n)return t;const a=MS(n,s);return vr(a,a.next),vr(n,n.next)}function Vb(s,t){let n=t;const a=s.x,o=s.y;let l=-1/0,c;if(Eo(s,n))return n;do{if(Eo(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const v=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=a&&v>l&&(l=v,c=n.x<n.next.x?n:n.next,v===a))return c}n=n.next}while(n!==t);if(!c)return null;const h=c,p=c.x,d=c.y;let g=1/0;n=c;do{if(a>=n.x&&n.x>=p&&a!==n.x&&xS(o<d?a:l,o,p,d,o<d?l:a,o,n.x,n.y)){const v=Math.abs(o-n.y)/(a-n.x);tu(n,s)&&(v<g||v===g&&(n.x>c.x||n.x===c.x&&kb(c,n)))&&(c=n,g=v)}n=n.next}while(n!==h);return c}function kb(s,t){return Sn(s.prev,s,t.prev)<0&&Sn(t.next,s,s.next)<0}function Xb(s,t,n,a){let o=s;do o.z===0&&(o.z=o0(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Wb(o)}function Wb(s){let t,n=1;do{let a=s,o;s=null;let l=null;for(t=0;a;){t++;let c=a,h=0;for(let d=0;d<n&&(h++,c=c.nextZ,!!c);d++);let p=n;for(;h>0||p>0&&c;)h!==0&&(p===0||!c||a.z<=c.z)?(o=a,a=a.nextZ,h--):(o=c,c=c.nextZ,p--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;a=c}l.nextZ=null,n*=2}while(t>1);return s}function o0(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function qb(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function xS(s,t,n,a,o,l,c,h){return(o-c)*(t-h)>=(s-c)*(l-h)&&(s-c)*(a-h)>=(n-c)*(t-h)&&(n-c)*(l-h)>=(o-c)*(a-h)}function Fl(s,t,n,a,o,l,c,h){return!(s===c&&t===h)&&xS(s,t,n,a,o,l,c,h)}function Yb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Zb(s,t)&&(tu(s,t)&&tu(t,s)&&Kb(s,t)&&(Sn(s.prev,s,t.prev)||Sn(s,t.prev,t))||Eo(s,t)&&Sn(s.prev,s,s.next)>0&&Sn(t.prev,t,t.next)>0)}function Sn(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function Eo(s,t){return s.x===t.x&&s.y===t.y}function yS(s,t,n,a){const o=Xc(Sn(s,t,n)),l=Xc(Sn(s,t,a)),c=Xc(Sn(n,a,s)),h=Xc(Sn(n,a,t));return!!(o!==l&&c!==h||o===0&&kc(s,n,t)||l===0&&kc(s,a,t)||c===0&&kc(n,s,a)||h===0&&kc(n,t,a))}function kc(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function Xc(s){return s>0?1:s<0?-1:0}function Zb(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&yS(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function tu(s,t){return Sn(s.prev,s,s.next)<0?Sn(s,t,s.next)>=0&&Sn(s,s.prev,t)>=0:Sn(s,t,s.prev)<0||Sn(s,s.next,t)<0}function Kb(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,l=(s.y+t.y)/2;do n.y>l!=n.next.y>l&&n.next.y!==n.y&&o<(n.next.x-n.x)*(l-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function MS(s,t){const n=l0(s.i,s.x,s.y),a=l0(t.i,t.x,t.y),o=s.next,l=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,l.next=a,a.prev=l,a}function c1(s,t,n,a){const o=l0(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function eu(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function l0(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jb(s,t,n,a){let o=0;for(let l=t,c=n-a;l<n;l+=a)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Qb{static triangulate(t,n,a=2){return Pb(t,n,a)}}class Za{static area(t){const n=t.length;let a=0;for(let o=n-1,l=0;l<n;o=l++)a+=t[o].x*t[l].y-t[l].x*t[o].y;return a*.5}static isClockWise(t){return Za.area(t)<0}static triangulateShape(t,n){const a=[],o=[],l=[];f1(t),h1(a,t);let c=t.length;n.forEach(f1);for(let p=0;p<n.length;p++)o.push(c),c+=n[p].length,h1(a,n[p]);const h=Qb.triangulate(a,o);for(let p=0;p<h.length;p+=3)l.push(h.slice(p,p+3));return l}}function f1(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function h1(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class To extends on{constructor(t=new zi([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],l=[];for(let h=0,p=t.length;h<p;h++){const d=t[h];c(d)}this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(l,2)),this.computeVertexNormals();function c(h){const p=[],d=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,v=n.depth!==void 0?n.depth:1;let _=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:S-.1,C=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,R=n.UVGenerator!==void 0?n.UVGenerator:jb;let D,A=!1,P,U,O,E;if(x){D=x.getSpacedPoints(g),A=!0,_=!1;const ct=x.isCatmullRomCurve3?x.closed:!1;P=x.computeFrenetFrames(g,ct),U=new k,O=new k,E=new k}_||(y=0,S=0,b=0,C=0);const z=h.extractPoints(d);let H=z.shape;const X=z.holes;if(!Za.isClockWise(H)){H=H.reverse();for(let ct=0,Ct=X.length;ct<Ct;ct++){const Nt=X[ct];Za.isClockWise(Nt)&&(X[ct]=Nt.reverse())}}function tt(ct){const Nt=10000000000000001e-36;let Pt=ct[0];for(let Ft=1;Ft<=ct.length;Ft++){const ce=Ft%ct.length,se=ct[ce],Ot=se.x-Pt.x,ge=se.y-Pt.y,Z=Ot*Ot+ge*ge,_e=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(Pt.x),Math.abs(Pt.y)),ye=Nt*_e*_e;if(Z<=ye){ct.splice(ce,1),Ft--;continue}Pt=se}}tt(H),X.forEach(tt);const G=X.length,$=H;for(let ct=0;ct<G;ct++){const Ct=X[ct];H=H.concat(Ct)}function F(ct,Ct,Nt){return Ct||Xe("ExtrudeGeometry: vec does not exist"),ct.clone().addScaledVector(Ct,Nt)}const V=H.length;function ft(ct,Ct,Nt){let Pt,Ft,ce;const se=ct.x-Ct.x,Ot=ct.y-Ct.y,ge=Nt.x-ct.x,Z=Nt.y-ct.y,_e=se*se+Ot*Ot,ye=se*Z-Ot*ge;if(Math.abs(ye)>Number.EPSILON){const B=Math.sqrt(_e),T=Math.sqrt(ge*ge+Z*Z),it=Ct.x-Ot/B,lt=Ct.y+se/B,Mt=Nt.x-Z/T,Bt=Nt.y+ge/T,Vt=((Mt-it)*Z-(Bt-lt)*ge)/(se*Z-Ot*ge);Pt=it+se*Vt-ct.x,Ft=lt+Ot*Vt-ct.y;const St=Pt*Pt+Ft*Ft;if(St<=2)return new wt(Pt,Ft);ce=Math.sqrt(St/2)}else{let B=!1;se>Number.EPSILON?ge>Number.EPSILON&&(B=!0):se<-Number.EPSILON?ge<-Number.EPSILON&&(B=!0):Math.sign(Ot)===Math.sign(Z)&&(B=!0),B?(Pt=-Ot,Ft=se,ce=Math.sqrt(_e)):(Pt=se,Ft=Ot,ce=Math.sqrt(_e/2))}return new wt(Pt/ce,Ft/ce)}const ot=[];for(let ct=0,Ct=$.length,Nt=Ct-1,Pt=ct+1;ct<Ct;ct++,Nt++,Pt++)Nt===Ct&&(Nt=0),Pt===Ct&&(Pt=0),ot[ct]=ft($[ct],$[Nt],$[Pt]);const gt=[];let I,at=ot.concat();for(let ct=0,Ct=G;ct<Ct;ct++){const Nt=X[ct];I=[];for(let Pt=0,Ft=Nt.length,ce=Ft-1,se=Pt+1;Pt<Ft;Pt++,ce++,se++)ce===Ft&&(ce=0),se===Ft&&(se=0),I[Pt]=ft(Nt[Pt],Nt[ce],Nt[se]);gt.push(I),at=at.concat(I)}let yt;if(y===0)yt=Za.triangulateShape($,X);else{const ct=[],Ct=[];for(let Nt=0;Nt<y;Nt++){const Pt=Nt/y,Ft=S*Math.cos(Pt*Math.PI/2),ce=b*Math.sin(Pt*Math.PI/2)+C;for(let se=0,Ot=$.length;se<Ot;se++){const ge=F($[se],ot[se],ce);Et(ge.x,ge.y,-Ft),Pt===0&&ct.push(ge)}for(let se=0,Ot=G;se<Ot;se++){const ge=X[se];I=gt[se];const Z=[];for(let _e=0,ye=ge.length;_e<ye;_e++){const B=F(ge[_e],I[_e],ce);Et(B.x,B.y,-Ft),Pt===0&&Z.push(B)}Pt===0&&Ct.push(Z)}}yt=Za.triangulateShape(ct,Ct)}const Lt=yt.length,Ht=b+C;for(let ct=0;ct<V;ct++){const Ct=_?F(H[ct],at[ct],Ht):H[ct];A?(O.copy(P.normals[0]).multiplyScalar(Ct.x),U.copy(P.binormals[0]).multiplyScalar(Ct.y),E.copy(D[0]).add(O).add(U),Et(E.x,E.y,E.z)):Et(Ct.x,Ct.y,0)}for(let ct=1;ct<=g;ct++)for(let Ct=0;Ct<V;Ct++){const Nt=_?F(H[Ct],at[Ct],Ht):H[Ct];A?(O.copy(P.normals[ct]).multiplyScalar(Nt.x),U.copy(P.binormals[ct]).multiplyScalar(Nt.y),E.copy(D[ct]).add(O).add(U),Et(E.x,E.y,E.z)):Et(Nt.x,Nt.y,v/g*ct)}for(let ct=y-1;ct>=0;ct--){const Ct=ct/y,Nt=S*Math.cos(Ct*Math.PI/2),Pt=b*Math.sin(Ct*Math.PI/2)+C;for(let Ft=0,ce=$.length;Ft<ce;Ft++){const se=F($[Ft],ot[Ft],Pt);Et(se.x,se.y,v+Nt)}for(let Ft=0,ce=X.length;Ft<ce;Ft++){const se=X[Ft];I=gt[Ft];for(let Ot=0,ge=se.length;Ot<ge;Ot++){const Z=F(se[Ot],I[Ot],Pt);A?Et(Z.x,Z.y+D[g-1].y,D[g-1].x+Nt):Et(Z.x,Z.y,v+Nt)}}}Wt(),rt();function Wt(){const ct=o.length/3;if(_){let Ct=0,Nt=V*Ct;for(let Pt=0;Pt<Lt;Pt++){const Ft=yt[Pt];Yt(Ft[2]+Nt,Ft[1]+Nt,Ft[0]+Nt)}Ct=g+y*2,Nt=V*Ct;for(let Pt=0;Pt<Lt;Pt++){const Ft=yt[Pt];Yt(Ft[0]+Nt,Ft[1]+Nt,Ft[2]+Nt)}}else{for(let Ct=0;Ct<Lt;Ct++){const Nt=yt[Ct];Yt(Nt[2],Nt[1],Nt[0])}for(let Ct=0;Ct<Lt;Ct++){const Nt=yt[Ct];Yt(Nt[0]+V*g,Nt[1]+V*g,Nt[2]+V*g)}}a.addGroup(ct,o.length/3-ct,0)}function rt(){const ct=o.length/3;let Ct=0;et($,Ct),Ct+=$.length;for(let Nt=0,Pt=X.length;Nt<Pt;Nt++){const Ft=X[Nt];et(Ft,Ct),Ct+=Ft.length}a.addGroup(ct,o.length/3-ct,1)}function et(ct,Ct){let Nt=ct.length;for(;--Nt>=0;){const Pt=Nt;let Ft=Nt-1;Ft<0&&(Ft=ct.length-1);for(let ce=0,se=g+y*2;ce<se;ce++){const Ot=V*ce,ge=V*(ce+1),Z=Ct+Pt+Ot,_e=Ct+Ft+Ot,ye=Ct+Ft+ge,B=Ct+Pt+ge;zt(Z,_e,ye,B)}}}function Et(ct,Ct,Nt){p.push(ct),p.push(Ct),p.push(Nt)}function Yt(ct,Ct,Nt){Zt(ct),Zt(Ct),Zt(Nt);const Pt=o.length/3,Ft=R.generateTopUV(a,o,Pt-3,Pt-2,Pt-1);de(Ft[0]),de(Ft[1]),de(Ft[2])}function zt(ct,Ct,Nt,Pt){Zt(ct),Zt(Ct),Zt(Pt),Zt(Ct),Zt(Nt),Zt(Pt);const Ft=o.length/3,ce=R.generateSideWallUV(a,o,Ft-6,Ft-3,Ft-2,Ft-1);de(ce[0]),de(ce[1]),de(ce[3]),de(ce[1]),de(ce[2]),de(ce[3])}function Zt(ct){o.push(p[ct*3+0]),o.push(p[ct*3+1]),o.push(p[ct*3+2])}function de(ct){l.push(ct.x),l.push(ct.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return $b(n,a,t)}static fromJSON(t,n){const a=[];for(let l=0,c=t.shapes.length;l<c;l++){const h=n[t.shapes[l]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new df[o.type]().fromJSON(o)),new To(a,t.options)}}const jb={generateTopUV:function(s,t,n,a,o){const l=t[n*3],c=t[n*3+1],h=t[a*3],p=t[a*3+1],d=t[o*3],g=t[o*3+1];return[new wt(l,c),new wt(h,p),new wt(d,g)]},generateSideWallUV:function(s,t,n,a,o,l){const c=t[n*3],h=t[n*3+1],p=t[n*3+2],d=t[a*3],g=t[a*3+1],v=t[a*3+2],_=t[o*3],S=t[o*3+1],b=t[o*3+2],C=t[l*3],y=t[l*3+1],x=t[l*3+2];return Math.abs(h-g)<Math.abs(c-d)?[new wt(c,1-p),new wt(d,1-v),new wt(_,1-b),new wt(C,1-x)]:[new wt(h,1-p),new wt(g,1-v),new wt(S,1-b),new wt(y,1-x)]}};function $b(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const l=s[a];n.shapes.push(l.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Ao extends on{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=Oe(o,0,Math.PI*2);const l=[],c=[],h=[],p=[],d=[],g=1/n,v=new k,_=new wt,S=new k,b=new k,C=new k;let y=0,x=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:y=t[R+1].x-t[R].x,x=t[R+1].y-t[R].y,S.x=x*1,S.y=-y,S.z=x*0,C.copy(S),S.normalize(),p.push(S.x,S.y,S.z);break;case t.length-1:p.push(C.x,C.y,C.z);break;default:y=t[R+1].x-t[R].x,x=t[R+1].y-t[R].y,S.x=x*1,S.y=-y,S.z=x*0,b.copy(S),S.x+=C.x,S.y+=C.y,S.z+=C.z,S.normalize(),p.push(S.x,S.y,S.z),C.copy(b)}for(let R=0;R<=n;R++){const D=a+R*g*o,A=Math.sin(D),P=Math.cos(D);for(let U=0;U<=t.length-1;U++){v.x=t[U].x*A,v.y=t[U].y,v.z=t[U].x*P,c.push(v.x,v.y,v.z),_.x=R/n,_.y=U/(t.length-1),h.push(_.x,_.y);const O=p[3*U+0]*A,E=p[3*U+1],z=p[3*U+0]*P;d.push(O,E,z)}}for(let R=0;R<n;R++)for(let D=0;D<t.length-1;D++){const A=D+R*t.length,P=A,U=A+t.length,O=A+t.length+1,E=A+1;l.push(P,U,E),l.push(O,E,U)}this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("uv",new Le(h,2)),this.setAttribute("normal",new Le(d,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.points,t.segments,t.phiStart,t.phiLength)}}class Wn extends on{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const l=t/2,c=n/2,h=Math.floor(a),p=Math.floor(o),d=h+1,g=p+1,v=t/h,_=n/p,S=[],b=[],C=[],y=[];for(let x=0;x<g;x++){const R=x*_-c;for(let D=0;D<d;D++){const A=D*v-l;b.push(A,-R,0),C.push(0,0,1),y.push(D/h),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let R=0;R<h;R++){const D=R+d*x,A=R+d*(x+1),P=R+1+d*(x+1),U=R+1+d*x;S.push(D,A,U),S.push(A,P,U)}this.setIndex(S),this.setAttribute("position",new Le(b,3)),this.setAttribute("normal",new Le(C,3)),this.setAttribute("uv",new Le(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tf extends on{constructor(t=new zi([new wt(0,.5),new wt(-.5,-.5),new wt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],l=[],c=[];let h=0,p=0;if(Array.isArray(t)===!1)d(t);else for(let g=0;g<t.length;g++)d(t[g]),this.addGroup(h,p,g),h+=p,p=0;this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2));function d(g){const v=o.length/3,_=g.extractPoints(n);let S=_.shape;const b=_.holes;Za.isClockWise(S)===!1&&(S=S.reverse());for(let y=0,x=b.length;y<x;y++){const R=b[y];Za.isClockWise(R)===!0&&(b[y]=R.reverse())}const C=Za.triangulateShape(S,b);for(let y=0,x=b.length;y<x;y++){const R=b[y];S=S.concat(R)}for(let y=0,x=S.length;y<x;y++){const R=S[y];o.push(R.x,R.y,0),l.push(0,0,1),c.push(R.x,R.y)}for(let y=0,x=C.length;y<x;y++){const R=C[y],D=R[0]+v,A=R[1]+v,P=R[2]+v;a.push(D,A,P),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return tE(n,t)}static fromJSON(t,n){const a=[];for(let o=0,l=t.shapes.length;o<l;o++){const c=n[t.shapes[o]];a.push(c)}return new Tf(a,t.curveSegments)}}function tE(s,t){if(t.shapes=[],Array.isArray(s))for(let n=0,a=s.length;n<a;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t}class jn extends on{constructor(t=1,n=32,a=16,o=0,l=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:l,thetaStart:c,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(c+h,Math.PI);let d=0;const g=[],v=new k,_=new k,S=[],b=[],C=[],y=[];for(let x=0;x<=a;x++){const R=[],D=x/a,A=c+D*h,P=t*Math.cos(A),U=Math.sqrt(t*t-P*P);let O=0;x===0&&c===0?O=.5/n:x===a&&p===Math.PI&&(O=-.5/n);for(let E=0;E<=n;E++){const z=E/n,H=o+z*l;v.x=-U*Math.cos(H),v.y=P,v.z=U*Math.sin(H),b.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(z+O,1-D),R.push(d++)}g.push(R)}for(let x=0;x<a;x++)for(let R=0;R<n;R++){const D=g[x][R+1],A=g[x][R],P=g[x+1][R],U=g[x+1][R+1];(x!==0||c>0)&&S.push(D,A,U),(x!==a-1||p<Math.PI)&&S.push(A,P,U)}this.setIndex(S),this.setAttribute("position",new Le(b,3)),this.setAttribute("normal",new Le(C,3)),this.setAttribute("uv",new Le(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Af extends on{constructor(t=1,n=.4,a=12,o=48,l=Math.PI*2,c=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:l,thetaStart:c,thetaLength:h},a=Math.floor(a),o=Math.floor(o);const p=[],d=[],g=[],v=[],_=new k,S=new k,b=new k;for(let C=0;C<=a;C++){const y=c+C/a*h;for(let x=0;x<=o;x++){const R=x/o*l;S.x=(t+n*Math.cos(y))*Math.cos(R),S.y=(t+n*Math.cos(y))*Math.sin(R),S.z=n*Math.sin(y),d.push(S.x,S.y,S.z),_.x=t*Math.cos(R),_.y=t*Math.sin(R),b.subVectors(S,_).normalize(),g.push(b.x,b.y,b.z),v.push(x/o),v.push(C/a)}}for(let C=1;C<=a;C++)for(let y=1;y<=o;y++){const x=(o+1)*C+y-1,R=(o+1)*(C-1)+y-1,D=(o+1)*(C-1)+y,A=(o+1)*C+y;p.push(x,R,A),p.push(R,D,A)}this.setIndex(p),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Af(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class wo extends on{constructor(t=new vS(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),n=64,a=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:l};const c=t.computeFrenetFrames(n,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const h=new k,p=new k,d=new wt;let g=new k;const v=[],_=[],S=[],b=[];C(),this.setIndex(b),this.setAttribute("position",new Le(v,3)),this.setAttribute("normal",new Le(_,3)),this.setAttribute("uv",new Le(S,2));function C(){for(let D=0;D<n;D++)y(D);y(l===!1?n:0),R(),x()}function y(D){g=t.getPointAt(D/n,g);const A=c.normals[D],P=c.binormals[D];for(let U=0;U<=o;U++){const O=U/o*Math.PI*2,E=Math.sin(O),z=-Math.cos(O);p.x=z*A.x+E*P.x,p.y=z*A.y+E*P.y,p.z=z*A.z+E*P.z,p.normalize(),_.push(p.x,p.y,p.z),h.x=g.x+a*p.x,h.y=g.y+a*p.y,h.z=g.z+a*p.z,v.push(h.x,h.y,h.z)}}function x(){for(let D=1;D<=n;D++)for(let A=1;A<=o;A++){const P=(o+1)*(D-1)+(A-1),U=(o+1)*D+(A-1),O=(o+1)*D+A,E=(o+1)*(D-1)+A;b.push(P,U,E),b.push(U,O,E)}}function R(){for(let D=0;D<=n;D++)for(let A=0;A<=o;A++)d.x=D/n,d.y=A/o,S.push(d.x,d.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wo(new df[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Co(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(d1(o))o.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(d1(o[0])){const l=[];for(let c=0,h=o.length;c<h;c++)l[c]=o[c].clone();t[n][a]=l}else t[n][a]=o.slice();else t[n][a]=o}}return t}function li(s){const t={};for(let n=0;n<s.length;n++){const a=Co(s[n]);for(const o in a)t[o]=a[o]}return t}function d1(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function eE(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function bS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ge.workingColorSpace}const nu={clone:Co,merge:li};var nE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nE,this.fragmentShader=iE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Co(t.uniforms),this.uniformsGroups=eE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new ee().setHex(o.value);break;case"v2":this.uniforms[a].value=new wt().fromArray(o.value);break;case"v3":this.uniforms[a].value=new k().fromArray(o.value);break;case"v4":this.uniforms[a].value=new _n().fromArray(o.value);break;case"m3":this.uniforms[a].value=new Ee().fromArray(o.value);break;case"m4":this.uniforms[a].value=new Ze().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ES extends vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _a extends Bs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aE extends Bs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=of,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oa,this.combine=d0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sE extends Bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rE extends Bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class B0 extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class oE extends B0{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const dp=new Ze,p1=new k,m1=new k;class TS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new P0,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new _n(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera;p1.setFromMatrixPosition(t.matrixWorld),n.position.copy(p1),m1.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(m1),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,a,o){dp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),a.setFromProjectionMatrix(dp,t.coordinateSystem,t.reversedDepth);const l=this._frameExtents,c=o?o.z/l.x:1,h=o?o.w/l.y:1,p=o?o.x/l.x:0,d=o?o.y/l.y:0;t.coordinateSystem===Kl||t.reversedDepth?n.set(.5*c,0,0,.5*c+p,0,.5*h,0,.5*h+d,0,0,1,0,0,0,0,1):n.set(.5*c,0,0,.5*c+p,0,.5*h,0,.5*h+d,0,0,.5,.5,0,0,0,1),n.multiply(dp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wc=new k,qc=new Is,da=new k;class AS extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=va,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wc,qc,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,da.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(Wc,qc,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,qc,da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new k,g1=new wt,v1=new wt;class Pi extends AS{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Jl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(Vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Cs.x,Cs.y).multiplyScalar(-t/Cs.z)}getViewSize(t,n){return this.getViewBounds(t,g1,v1),n.subVectors(v1,g1)}setViewOffset(t,n,a,o,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Vl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/p,n-=c.offsetY*a/d,o*=c.width/p,a*=c.height/d}const h=this.filmOffset;h!==0&&(l+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class lE extends TS{constructor(){super(new Pi(90,1,.5,500)),this.isPointLightShadow=!0}}class Os extends B0{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new lE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class wf extends AS{constructor(t=-1,n=1,a=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-t,c=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uE extends TS{constructor(){super(new wf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F0 extends B0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new uE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const po=-90,mo=1;class cE extends Ln{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(po,mo,t,n);o.layers=this.layers,this.add(o);const l=new Pi(po,mo,t,n);l.layers=this.layers,this.add(l);const c=new Pi(po,mo,t,n);c.layers=this.layers,this.add(c);const h=new Pi(po,mo,t,n);h.layers=this.layers,this.add(h);const p=new Pi(po,mo,t,n);p.layers=this.layers,this.add(p);const d=new Pi(po,mo,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,l,c,h,p]=n;for(const d of n)this.remove(d);if(t===va)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Kl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,h,p,d,g]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=C,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(v,_,S),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class fE extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=dE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function dE(){this._document.hidden===!1&&this.reset()}const W0=class W0{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const l=this.elements;return l[0]=t,l[2]=n,l[1]=a,l[3]=o,this}};W0.prototype.isMatrix2=!0;let _1=W0;function S1(s,t,n,a){const o=pE(a);switch(n){case tS:return s*t;case b0:return s*t/o.components*o.byteLength;case E0:return s*t/o.components*o.byteLength;case mr:return s*t*2/o.components*o.byteLength;case T0:return s*t*2/o.components*o.byteLength;case eS:return s*t*3/o.components*o.byteLength;case sa:return s*t*4/o.components*o.byteLength;case A0:return s*t*4/o.components*o.byteLength;case jc:case $c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case tf:case ef:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Up:case Lp:return Math.max(s,16)*Math.max(t,8)/4;case Dp:case Np:return Math.max(s,8)*Math.max(t,8)/2;case Pp:case Op:case Ip:case Bp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zp:case sf:case Fp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case kp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case qp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Yp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Zp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Qp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case jp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case $p:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case t0:case e0:case n0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case i0:case a0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case rf:case s0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pE(s){switch(s){case Oi:case J1:return{byteLength:1,components:1};case Yl:case Q1:case Mi:return{byteLength:2,components:1};case y0:case M0:return{byteLength:2,components:4};case Ma:case x0:case aa:return{byteLength:4,components:1};case j1:case $1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:h0}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=h0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wS(){let s=null,t=!1,n=null,a=null;function o(l,c){a=s.requestAnimationFrame(o),n(l,c)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function mE(s){const t=new WeakMap;function n(h,p){const d=h.array,g=h.usage,v=d.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,d,g),h.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:v}}function a(h,p,d){const g=p.array,v=p.updateRanges;if(s.bindBuffer(d,h),v.length===0)s.bufferSubData(d,0,g);else{v.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<v.length;S++){const b=v[_],C=v[S];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let S=0,b=v.length;S<b;S++){const C=v[S];s.bufferSubData(d,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=t.get(h);if(d===void 0)t.set(h,n(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,h,p),d.version=h.version}}return{get:o,remove:l,update:c}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,_E=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ME=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EE=`#ifdef USE_BATCHING
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
#endif`,TE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RE=`#ifdef USE_IRIDESCENCE
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
#endif`,DE=`#ifdef USE_BUMPMAP
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,FE=`#define PI 3.141592653589793
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
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i2=`#ifdef USE_GRADIENTMAP
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
}`,a2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l2=`#ifdef USE_ENVMAP
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
#endif`,u2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d2=`PhysicalMaterial material;
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
#endif`,p2=`uniform sampler2D dfgLUT;
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
}`,m2=`
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
#endif`,g2=`#if defined( RE_IndirectDiffuse )
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
#endif`,v2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,S2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A2=`#if defined( USE_POINTS_UV )
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
#endif`,w2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N2=`#ifdef USE_MORPHTARGETS
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
#endif`,L2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F2=`#ifdef USE_NORMALMAP
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
#endif`,H2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,bT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,PT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,zT=`#define NORMAL
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
}`,IT=`#define NORMAL
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
}`,BT=`#define PHONG
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
}`,FT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,kT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,ZT=`uniform float rotation;
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
}`,KT=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:gE,alphahash_pars_fragment:vE,alphamap_fragment:_E,alphamap_pars_fragment:SE,alphatest_fragment:xE,alphatest_pars_fragment:yE,aomap_fragment:ME,aomap_pars_fragment:bE,batching_pars_vertex:EE,batching_vertex:TE,begin_vertex:AE,beginnormal_vertex:wE,bsdfs:CE,iridescence_fragment:RE,bumpmap_pars_fragment:DE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:PE,color_fragment:OE,color_pars_fragment:zE,color_pars_vertex:IE,color_vertex:BE,common:FE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:kE,emissivemap_fragment:XE,emissivemap_pars_fragment:WE,colorspace_fragment:qE,colorspace_pars_fragment:YE,envmap_fragment:ZE,envmap_common_pars_fragment:KE,envmap_pars_fragment:JE,envmap_pars_vertex:QE,envmap_physical_pars_fragment:l2,envmap_vertex:jE,fog_vertex:$E,fog_pars_vertex:t2,fog_fragment:e2,fog_pars_fragment:n2,gradientmap_pars_fragment:i2,lightmap_pars_fragment:a2,lights_lambert_fragment:s2,lights_lambert_pars_fragment:r2,lights_pars_begin:o2,lights_toon_fragment:u2,lights_toon_pars_fragment:c2,lights_phong_fragment:f2,lights_phong_pars_fragment:h2,lights_physical_fragment:d2,lights_physical_pars_fragment:p2,lights_fragment_begin:m2,lights_fragment_maps:g2,lights_fragment_end:v2,lightprobes_pars_fragment:_2,logdepthbuf_fragment:S2,logdepthbuf_pars_fragment:x2,logdepthbuf_pars_vertex:y2,logdepthbuf_vertex:M2,map_fragment:b2,map_pars_fragment:E2,map_particle_fragment:T2,map_particle_pars_fragment:A2,metalnessmap_fragment:w2,metalnessmap_pars_fragment:C2,morphinstance_vertex:R2,morphcolor_vertex:D2,morphnormal_vertex:U2,morphtarget_pars_vertex:N2,morphtarget_vertex:L2,normal_fragment_begin:P2,normal_fragment_maps:O2,normal_pars_fragment:z2,normal_pars_vertex:I2,normal_vertex:B2,normalmap_pars_fragment:F2,clearcoat_normal_fragment_begin:H2,clearcoat_normal_fragment_maps:G2,clearcoat_pars_fragment:V2,iridescence_pars_fragment:k2,opaque_fragment:X2,packing:W2,premultiplied_alpha_fragment:q2,project_vertex:Y2,dithering_fragment:Z2,dithering_pars_fragment:K2,roughnessmap_fragment:J2,roughnessmap_pars_fragment:Q2,shadowmap_pars_fragment:j2,shadowmap_pars_vertex:$2,shadowmap_vertex:tT,shadowmask_pars_fragment:eT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:aT,skinnormal_vertex:sT,specularmap_fragment:rT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:uT,transmission_fragment:cT,transmission_pars_fragment:fT,uv_pars_fragment:hT,uv_pars_vertex:dT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:vT,backgroundCube_vert:_T,backgroundCube_frag:ST,cube_vert:xT,cube_frag:yT,depth_vert:MT,depth_frag:bT,distance_vert:ET,distance_frag:TT,equirect_vert:AT,equirect_frag:wT,linedashed_vert:CT,linedashed_frag:RT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:NT,meshlambert_frag:LT,meshmatcap_vert:PT,meshmatcap_frag:OT,meshnormal_vert:zT,meshnormal_frag:IT,meshphong_vert:BT,meshphong_frag:FT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:kT,points_vert:XT,points_frag:WT,shadow_vert:qT,shadow_frag:YT,sprite_vert:ZT,sprite_frag:KT},jt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ee}},envmap:{envMap:{value:null},envMapRotation:{value:new Ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ee},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0},uvTransform:{value:new Ee}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ee},alphaMap:{value:null},alphaMapTransform:{value:new Ee},alphaTest:{value:0}}},ma={basic:{uniforms:li([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:li([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:li([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:li([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:li([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new ee(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:li([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:li([jt.points,jt.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:li([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:li([jt.common,jt.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:li([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:li([jt.sprite,jt.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ee}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distance:{uniforms:li([jt.common,jt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distance_vert,fragmentShader:Ne.distance_frag},shadow:{uniforms:li([jt.lights,jt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};ma.physical={uniforms:li([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ee},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ee},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ee},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ee},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ee},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ee}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Yc={r:0,b:0,g:0},JT=new Ze,CS=new Ee;CS.set(-1,0,0,0,1,0,0,0,1);function QT(s,t,n,a,o,l){const c=new ee(0);let h=o===!0?0:1,p,d,g=null,v=0,_=null;function S(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const A=R.backgroundBlurriness>0;D=t.get(D,A)}return D}function b(R){let D=!1;const A=S(R);A===null?y(c,h):A&&A.isColor&&(y(A,1),D=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,D){const A=S(D);A&&(A.isCubeTexture||A.mapping===yf)?(d===void 0&&(d=new di(new xr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Co(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=A,d.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(CS),d.material.toneMapped=Ge.getTransfer(A.colorSpace)!==je,(g!==A||v!==A.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=A,v=A.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new di(new Wn(2,2),new vn({name:"BackgroundMaterial",uniforms:Co(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ge.getTransfer(A.colorSpace)!==je,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||v!==A.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=A,v=A.version,_=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function y(R,D){R.getRGB(Yc,bS(s)),n.buffers.color.setClear(Yc.r,Yc.g,Yc.b,D,l)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,D=1){c.set(R),h=D,y(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(c,h)},render:b,addToRenderList:C,dispose:x}}function jT(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=_(null);let l=o,c=!1;function h(X,W,tt,G,$){let F=!1;const V=v(X,G,tt,W);l!==V&&(l=V,d(l.object)),F=S(X,G,tt,$),F&&b(X,G,tt,$),$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,A(X,W,tt,G),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function p(){return s.createVertexArray()}function d(X){return s.bindVertexArray(X)}function g(X){return s.deleteVertexArray(X)}function v(X,W,tt,G){const $=G.wireframe===!0;let F=a[W.id];F===void 0&&(F={},a[W.id]=F);const V=X.isInstancedMesh===!0?X.id:0;let ft=F[V];ft===void 0&&(ft={},F[V]=ft);let ot=ft[tt.id];ot===void 0&&(ot={},ft[tt.id]=ot);let gt=ot[$];return gt===void 0&&(gt=_(p()),ot[$]=gt),gt}function _(X){const W=[],tt=[],G=[];for(let $=0;$<n;$++)W[$]=0,tt[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:tt,attributeDivisors:G,object:X,attributes:{},index:null}}function S(X,W,tt,G){const $=l.attributes,F=W.attributes;let V=0;const ft=tt.getAttributes();for(const ot in ft)if(ft[ot].location>=0){const I=$[ot];let at=F[ot];if(at===void 0&&(ot==="instanceMatrix"&&X.instanceMatrix&&(at=X.instanceMatrix),ot==="instanceColor"&&X.instanceColor&&(at=X.instanceColor)),I===void 0||I.attribute!==at||at&&I.data!==at.data)return!0;V++}return l.attributesNum!==V||l.index!==G}function b(X,W,tt,G){const $={},F=W.attributes;let V=0;const ft=tt.getAttributes();for(const ot in ft)if(ft[ot].location>=0){let I=F[ot];I===void 0&&(ot==="instanceMatrix"&&X.instanceMatrix&&(I=X.instanceMatrix),ot==="instanceColor"&&X.instanceColor&&(I=X.instanceColor));const at={};at.attribute=I,I&&I.data&&(at.data=I.data),$[ot]=at,V++}l.attributes=$,l.attributesNum=V,l.index=G}function C(){const X=l.newAttributes;for(let W=0,tt=X.length;W<tt;W++)X[W]=0}function y(X){x(X,0)}function x(X,W){const tt=l.newAttributes,G=l.enabledAttributes,$=l.attributeDivisors;tt[X]=1,G[X]===0&&(s.enableVertexAttribArray(X),G[X]=1),$[X]!==W&&(s.vertexAttribDivisor(X,W),$[X]=W)}function R(){const X=l.newAttributes,W=l.enabledAttributes;for(let tt=0,G=W.length;tt<G;tt++)W[tt]!==X[tt]&&(s.disableVertexAttribArray(tt),W[tt]=0)}function D(X,W,tt,G,$,F,V){V===!0?s.vertexAttribIPointer(X,W,tt,$,F):s.vertexAttribPointer(X,W,tt,G,$,F)}function A(X,W,tt,G){C();const $=G.attributes,F=tt.getAttributes(),V=W.defaultAttributeValues;for(const ft in F){const ot=F[ft];if(ot.location>=0){let gt=$[ft];if(gt===void 0&&(ft==="instanceMatrix"&&X.instanceMatrix&&(gt=X.instanceMatrix),ft==="instanceColor"&&X.instanceColor&&(gt=X.instanceColor)),gt!==void 0){const I=gt.normalized,at=gt.itemSize,yt=t.get(gt);if(yt===void 0)continue;const Lt=yt.buffer,Ht=yt.type,Wt=yt.bytesPerElement,rt=Ht===s.INT||Ht===s.UNSIGNED_INT||gt.gpuType===x0;if(gt.isInterleavedBufferAttribute){const et=gt.data,Et=et.stride,Yt=gt.offset;if(et.isInstancedInterleavedBuffer){for(let zt=0;zt<ot.locationSize;zt++)x(ot.location+zt,et.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let zt=0;zt<ot.locationSize;zt++)y(ot.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let zt=0;zt<ot.locationSize;zt++)D(ot.location+zt,at/ot.locationSize,Ht,I,Et*Wt,(Yt+at/ot.locationSize*zt)*Wt,rt)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<ot.locationSize;et++)x(ot.location+et,gt.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<ot.locationSize;et++)y(ot.location+et);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let et=0;et<ot.locationSize;et++)D(ot.location+et,at/ot.locationSize,Ht,I,at*Wt,at/ot.locationSize*et*Wt,rt)}}else if(V!==void 0){const I=V[ft];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(ot.location,I);break;case 3:s.vertexAttrib3fv(ot.location,I);break;case 4:s.vertexAttrib4fv(ot.location,I);break;default:s.vertexAttrib1fv(ot.location,I)}}}}R()}function P(){z();for(const X in a){const W=a[X];for(const tt in W){const G=W[tt];for(const $ in G){const F=G[$];for(const V in F)g(F[V].object),delete F[V];delete G[$]}}delete a[X]}}function U(X){if(a[X.id]===void 0)return;const W=a[X.id];for(const tt in W){const G=W[tt];for(const $ in G){const F=G[$];for(const V in F)g(F[V].object),delete F[V];delete G[$]}}delete a[X.id]}function O(X){for(const W in a){const tt=a[W];for(const G in tt){const $=tt[G];if($[X.id]===void 0)continue;const F=$[X.id];for(const V in F)g(F[V].object),delete F[V];delete $[X.id]}}}function E(X){for(const W in a){const tt=a[W],G=X.isInstancedMesh===!0?X.id:0,$=tt[G];if($!==void 0){for(const F in $){const V=$[F];for(const ft in V)g(V[ft].object),delete V[ft];delete $[F]}delete tt[G],Object.keys(tt).length===0&&delete a[W]}}}function z(){H(),c=!0,l!==o&&(l=o,d(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:U,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function $T(s,t,n){let a;function o(p){a=p}function l(p,d){s.drawArrays(a,p,d),n.update(d,a,1)}function c(p,d,g){g!==0&&(s.drawArraysInstanced(a,p,d,g),n.update(d,a,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,g);let _=0;for(let S=0;S<g;S++)_+=d[S];n.update(_,a,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function tA(s,t,n,a){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==sa&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const E=O===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Oi&&O!==aa&&!E&&a.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const g=p(d);g!==d&&(xe("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&_===!1&&xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:A,maxSamples:P,samples:U}}function eA(s){const t=this;let n=null,a=0,o=!1,l=!1;const c=new Ls,h=new Ee,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||a!==0||o;return o=_,a=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=g(v,_,0)},this.setState=function(v,_,S){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,x=s.get(v);if(!o||b===null||b.length===0||l&&!y)l?g(null):d();else{const R=l?0:a,D=R*4;let A=x.clippingState||null;p.value=A,A=g(b,_,D,S);for(let P=0;P!==D;++P)A[P]=n[P];x.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(v,_,S,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=p.value,b!==!0||y===null){const x=S+C*4,R=_.matrixWorldInverse;h.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let D=0,A=S;D!==C;++D,A+=4)c.copy(v[D]).applyMatrix4(R,h),c.normal.toArray(y,A),y[A+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}const _o=4,nA=6,iA=20,aA=256,Ll=new wf,x1=new ee;let pp=null,mp=0,gp=0,vp=!1;const sA=new k,lr=new k;class y1{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,l={}){const{size:c=256,position:h=sA}=l;pp=this._renderer.getRenderTarget(),mp=this._renderer.getActiveCubeFace(),gp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=E1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=b1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pp,mp,gp),this._renderer.xr.enabled=vp,t.scissorTest=!1,go(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===pr||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pp=this._renderer.getRenderTarget(),mp=this._renderer.getActiveCubeFace(),gp=this._renderer.getActiveMipmapLevel(),vp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Mi,format:sa,colorSpace:lf,depthBuffer:!1},o=M1(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M1(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rA(l)),this._blurMaterial=lA(l,t,n),this._ggxMaterial=oA(l,t,n)}return o}_compileMaterial(t){const n=new di(new on,t);this._renderer.compile(n,Ll)}_sceneToCubeUV(t,n,a,o,l){const p=new Pi(90,1,n,a),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(x1),v.toneMapping=xa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new xr,new yi({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,x=!0):(y.color.copy(x1),x=!0);for(let D=0;D<6;D++){const A=D%3;A===0?(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[D],l.y,l.z)):A===1?(p.up.set(0,0,d[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[D],l.z)):(p.up.set(0,d[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[D]));const P=this._cubeSize;go(o,A*P,D>2?P:0,P,P),v.setRenderTarget(o),x&&v.render(C,p),v.render(t,p)}v.toneMapping=S,v.autoClear=_,t.background=R}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===pr||t.mapping===bo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=E1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=b1());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const h=l.uniforms;h.envMap.value=t;const p=this._cubeSize;go(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,Ll)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[a];h.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=d*1.25,S=v*_,{_lodMax:b}=this,C=this._sizeLods[a],y=3*C*(a>b-_o?a-b+_o:0),x=4*(this._cubeSize-C);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=b-n,go(l,y,x,3*C,2*C),o.setRenderTarget(l),o.render(h,Ll),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-a,go(t,y,x,3*C,2*C),o.setRenderTarget(t),o.render(h,Ll)}_blur(t,n,a,o){const l=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(t,l,n,a,c),this._blurPass(l,t,a,a,c)}_blurPass(t,n,a,o,l){const c=this._renderer,h=this._blurMaterial,p=this._lodMeshes[o];p.material=h;const d=h.uniforms;d.envMap.value=t.texture,d.sigma.value=l,d.mipInt.value=this._lodMax-a;const g=this._sizeLods[o],v=3*g*(o>this._lodMax-_o?o-this._lodMax+_o:0),_=4*(this._cubeSize-g);go(n,v,_,3*g,2*g),c.setRenderTarget(n),c.render(p,Ll)}}function rA(s){const t=[],n=[];let a=s;const o=s-_o+1+nA;for(let l=0;l<o;l++){const c=Math.pow(2,a);t.push(c);const h=1/(c-2),p=-h,d=1+h,g=[p,p,d,p,d,d,p,p,d,d,p,d],v=6,_=6,S=3,b=new Float32Array(S*_*v),C=new Float32Array(S*_*v);for(let x=0;x<v;x++){const R=x%3*2/3-1,D=x>2?0:-1,A=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];b.set(A,S*_*x);for(let P=0;P<_;P++){const U=g[P*2]*2-1,O=g[P*2+1]*2-1;x===0?lr.set(1,O,U):x===1?lr.set(-U,1,-O):x===2?lr.set(-U,O,1):x===3?lr.set(-1,O,-U):x===4?lr.set(-U,-1,O):lr.set(U,O,-1),lr.toArray(C,(x*_+P)*S)}}const y=new on;y.setAttribute("position",new we(b,S)),y.setAttribute("outputDirection",new we(C,S)),n.push(new di(y,null)),a>_o&&a--}return{lodMeshes:n,sizeLods:t}}function M1(s,t,n){const a=new hi(s,t,n);return a.texture.mapping=yf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function go(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function oA(s,t,n){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function lA(s,t,n){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:iA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function b1(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function E1(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Cf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class RS extends hi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new hS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xr(5,5,5),l=new vn({name:"CubemapFromEquirect",uniforms:Co(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:fi,blending:Sa});l.uniforms.tEquirect.value=n;const c=new di(o,l),h=n.minFilter;return n.minFilter===cr&&(n.minFilter=$n),new cE(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,o);t.setRenderTarget(l)}}function uA(s){let t=new WeakMap,n=new WeakMap,a=null;function o(_,S=!1){return _==null?null:S?c(_):l(_)}function l(_){if(_&&_.isTexture){const S=_.mapping;if(S===Fd||S===Hd)if(t.has(_)){const b=t.get(_).texture;return h(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new RS(b.height);return C.fromEquirectangularTexture(s,_),t.set(_,C),_.addEventListener("dispose",d),h(C.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const S=_.mapping,b=S===Fd||S===Hd,C=S===pr||S===bo;if(b||C){let y=n.get(_);const x=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return a===null&&(a=new y1(s)),y=b?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||C&&R&&p(R)?(a===null&&(a=new y1(s)),y=b?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function h(_,S){return S===Fd?_.mapping=pr:S===Hd&&(_.mapping=bo),_}function p(_){let S=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&S++;return S===b}function d(_){const S=_.target;S.removeEventListener("dispose",d);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function g(_){const S=_.target;S.removeEventListener("dispose",g);const b=n.get(S);b!==void 0&&(n.delete(S),b.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:v}}function cA(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&So("WebGLRenderer: "+a+" extension not supported."),o}}}function fA(s,t,n,a){const o={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",c),delete o[_.id];const S=l.get(_);S&&(t.remove(S),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(v,_){return o[_.id]===!0||(_.addEventListener("dispose",c),o[_.id]=!0,n.memory.geometries++),_}function p(v){const _=v.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function d(v){const _=[],S=v.index,b=v.attributes.position;let C=0;if(b===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let D=0,A=R.length;D<A;D+=3){const P=R[D+0],U=R[D+1],O=R[D+2];_.push(P,U,U,O,O,P)}}else{const R=b.array;C=b.version;for(let D=0,A=R.length/3-1;D<A;D+=3){const P=D+0,U=D+1,O=D+2;_.push(P,U,U,O,O,P)}}const y=new(b.count>=65535?lS:oS)(_,1);y.version=C;const x=l.get(v);x&&t.remove(x),l.set(v,y)}function g(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&d(v)}else d(v);return l.get(v)}return{get:h,update:p,getWireframeAttribute:g}}function hA(s,t,n){let a;function o(v){a=v}let l,c;function h(v){l=v.type,c=v.bytesPerElement}function p(v,_){s.drawElements(a,_,l,v*c),n.update(_,a,1)}function d(v,_,S){S!==0&&(s.drawElementsInstanced(a,_,l,v*c,S),n.update(_,a,S))}function g(v,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,v,0,S);let C=0;for(let y=0;y<S;y++)C+=_[y];n.update(C,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=g}function dA(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,h){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=h*(l/3);break;case s.LINES:n.lines+=h*(l/2);break;case s.LINE_STRIP:n.lines+=h*(l-1);break;case s.LINE_LOOP:n.lines+=h*l;break;case s.POINTS:n.points+=h*l;break;default:Xe("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function pA(s,t,n){const a=new WeakMap,o=new _n;function l(c,h,p){const d=c.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=a.get(h);if(_===void 0||_.count!==v){let H=function(){E.dispose(),a.delete(h),h.removeEventListener("dispose",H)};var S=H;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let A=0;b===!0&&(A=1),C===!0&&(A=2),y===!0&&(A=3);let P=h.attributes.position.count*A,U=1;P>t.maxTextureSize&&(U=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*U*4*v),E=new aS(O,P,U,v);E.type=aa,E.needsUpdate=!0;const z=A*4;for(let X=0;X<v;X++){const W=x[X],tt=R[X],G=D[X],$=P*U*4*X;for(let F=0;F<W.count;F++){const V=F*z;b===!0&&(o.fromBufferAttribute(W,F),O[$+V+0]=o.x,O[$+V+1]=o.y,O[$+V+2]=o.z,O[$+V+3]=0),C===!0&&(o.fromBufferAttribute(tt,F),O[$+V+4]=o.x,O[$+V+5]=o.y,O[$+V+6]=o.z,O[$+V+7]=0),y===!0&&(o.fromBufferAttribute(G,F),O[$+V+8]=o.x,O[$+V+9]=o.y,O[$+V+10]=o.z,O[$+V+11]=G.itemSize===4?o.w:1)}}_={count:v,texture:E,size:new wt(P,U)},a.set(h,_),h.addEventListener("dispose",H)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const C=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function mA(s,t,n,a,o){let l=new WeakMap;function c(d){const g=o.render.frame,v=d.geometry,_=t.get(d,v);if(l.get(_)!==g&&(t.update(_),l.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==g&&(n.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,s.ARRAY_BUFFER),l.set(d,g))),d.isSkinnedMesh){const S=d.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return _}function h(){l=new WeakMap}function p(d){const g=d.target;g.removeEventListener("dispose",p),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:c,dispose:h}}const gA={[p0]:"LINEAR_TONE_MAPPING",[m0]:"REINHARD_TONE_MAPPING",[g0]:"CINEON_TONE_MAPPING",[xf]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[S0]:"NEUTRAL_TONE_MAPPING",[v0]:"CUSTOM_TONE_MAPPING"};function vA(s,t,n,a,o,l){const c=new hi(t,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null;const d=new on;d.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Le([0,2,0,0,2,0],2));const g=new ES({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new di(d,g),_=new wf(-1,1,1,-1,0,1);let S=null,b=null,C=!1,y,x=null,R=[],D=!1;this.setSize=function(A,P){c.setSize(A,P),h!==null&&h.setSize(A,P),p!==null&&p.setSize(A,P);for(let U=0;U<R.length;U++){const O=R[U];O.setSize&&O.setSize(A,P)}},this.setEffects=function(A){R=A,D=R.length>0&&R[0].isRenderPass===!0;const P=c.width,U=c.height;R.length>0&&h===null&&(h=new hi(P,U,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),p=new hi(P,U,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<R.length;O++){const E=R[O];E.setSize&&E.setSize(P,U)}},this.begin=function(A,P){if(C||A.toneMapping===xa&&R.length===0)return!1;if(x=P,P!==null){const U=P.width,O=P.height;(c.width!==U||c.height!==O)&&this.setSize(U,O)}return D===!1&&A.setRenderTarget(c),y=A.toneMapping,A.toneMapping=xa,!0},this.hasRenderPass=function(){return D},this.end=function(A,P){A.toneMapping=y,C=!0;let U=c,O=h;for(let E=0;E<R.length;E++){const z=R[E];z.enabled!==!1&&(z.render(A,O,U,P),z.needsSwap!==!1&&(U=O,O=O===h?p:h))}if(S!==A.outputColorSpace||b!==A.toneMapping){S=A.outputColorSpace,b=A.toneMapping,g.defines={},Ge.getTransfer(S)===je&&(g.defines.SRGB_TRANSFER="");const E=gA[b];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=U.texture,A.setRenderTarget(x),A.render(v,_),x=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){c.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),d.dispose(),g.dispose()}}const DS=new ti,u0=new jl(1,1),US=new aS,NS=new eb,LS=new hS,T1=[],A1=[],w1=new Float32Array(16),C1=new Float32Array(9),R1=new Float32Array(4);function No(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let l=T1[o];if(l===void 0&&(l=new Float32Array(o),T1[o]=l),t!==0){a.toArray(l,0);for(let c=1,h=0;c!==t;++c)h+=n,s[c].toArray(l,h)}return l}function Pn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function On(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Rf(s,t){let n=A1[t];n===void 0&&(n=new Int32Array(t),A1[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function _A(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function SA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2fv(this.addr,t),On(n,t)}}function xA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Pn(n,t))return;s.uniform3fv(this.addr,t),On(n,t)}}function yA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4fv(this.addr,t),On(n,t)}}function MA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),On(n,t)}else{if(Pn(n,a))return;R1.set(a),s.uniformMatrix2fv(this.addr,!1,R1),On(n,a)}}function bA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),On(n,t)}else{if(Pn(n,a))return;C1.set(a),s.uniformMatrix3fv(this.addr,!1,C1),On(n,a)}}function EA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),On(n,t)}else{if(Pn(n,a))return;w1.set(a),s.uniformMatrix4fv(this.addr,!1,w1),On(n,a)}}function TA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function AA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2iv(this.addr,t),On(n,t)}}function wA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pn(n,t))return;s.uniform3iv(this.addr,t),On(n,t)}}function CA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4iv(this.addr,t),On(n,t)}}function RA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function DA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2uiv(this.addr,t),On(n,t)}}function UA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pn(n,t))return;s.uniform3uiv(this.addr,t),On(n,t)}}function NA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4uiv(this.addr,t),On(n,t)}}function LA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(u0.compareFunction=n.isReversedDepthBuffer()?C0:w0,l=u0):l=DS,n.setTexture2D(t||l,o)}function PA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||NS,o)}function OA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||LS,o)}function zA(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||US,o)}function IA(s){switch(s){case 5126:return _A;case 35664:return SA;case 35665:return xA;case 35666:return yA;case 35674:return MA;case 35675:return bA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return wA;case 35669:case 35673:return CA;case 5125:return RA;case 36294:return DA;case 36295:return UA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return zA}}function BA(s,t){s.uniform1fv(this.addr,t)}function FA(s,t){const n=No(t,this.size,2);s.uniform2fv(this.addr,n)}function HA(s,t){const n=No(t,this.size,3);s.uniform3fv(this.addr,n)}function GA(s,t){const n=No(t,this.size,4);s.uniform4fv(this.addr,n)}function VA(s,t){const n=No(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function kA(s,t){const n=No(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function XA(s,t){const n=No(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function WA(s,t){s.uniform1iv(this.addr,t)}function qA(s,t){s.uniform2iv(this.addr,t)}function YA(s,t){s.uniform3iv(this.addr,t)}function ZA(s,t){s.uniform4iv(this.addr,t)}function KA(s,t){s.uniform1uiv(this.addr,t)}function JA(s,t){s.uniform2uiv(this.addr,t)}function QA(s,t){s.uniform3uiv(this.addr,t)}function jA(s,t){s.uniform4uiv(this.addr,t)}function $A(s,t,n){const a=this.cache,o=t.length,l=Rf(n,o);Pn(a,l)||(s.uniform1iv(this.addr,l),On(a,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=u0:c=DS;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||c,l[h])}function t3(s,t,n){const a=this.cache,o=t.length,l=Rf(n,o);Pn(a,l)||(s.uniform1iv(this.addr,l),On(a,l));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||NS,l[c])}function e3(s,t,n){const a=this.cache,o=t.length,l=Rf(n,o);Pn(a,l)||(s.uniform1iv(this.addr,l),On(a,l));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||LS,l[c])}function n3(s,t,n){const a=this.cache,o=t.length,l=Rf(n,o);Pn(a,l)||(s.uniform1iv(this.addr,l),On(a,l));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||US,l[c])}function i3(s){switch(s){case 5126:return BA;case 35664:return FA;case 35665:return HA;case 35666:return GA;case 35674:return VA;case 35675:return kA;case 35676:return XA;case 5124:case 35670:return WA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return ZA;case 5125:return KA;case 36294:return JA;case 36295:return QA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return e3;case 36289:case 36303:case 36311:case 36292:return n3}}class a3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=IA(n.type)}}class s3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i3(n.type)}}class r3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const h=o[l];h.setValue(t,n[h.id],a)}}}const _p=/(\w+)(\])?(\[|\.)?/g;function D1(s,t){s.seq.push(t),s.map[t.id]=t}function o3(s,t,n){const a=s.name,o=a.length;for(_p.lastIndex=0;;){const l=_p.exec(a),c=_p.lastIndex;let h=l[1];const p=l[2]==="]",d=l[3];if(p&&(h=h|0),d===void 0||d==="["&&c+2===o){D1(n,d===void 0?new a3(h,s,t):new s3(h,s,t));break}else{let v=n.map[h];v===void 0&&(v=new r3(h),D1(n,v)),n=v}}}class nf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const h=t.getActiveUniform(n,c),p=t.getUniformLocation(n,h.name);o3(h,p,this)}const o=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(t,n,a,o){const l=this.map[n];l!==void 0&&l.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let l=0,c=n.length;l!==c;++l){const h=n[l],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,l=t.length;o!==l;++o){const c=t[o];c.id in n&&a.push(c)}return a}}function U1(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const l3=37297;let u3=0;function c3(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=o;c<l;c++){const h=c+1;a.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return a.join(`
`)}const N1=new Ee;function f3(s){Ge._getMatrix(N1,Ge.workingColorSpace,s);const t=`mat3( ${N1.elements.map(n=>n.toFixed(4))} )`;switch(Ge.getTransfer(s)){case uf:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function L1(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),l=(s.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+c3(s.getShaderSource(t),h)}else return l}function h3(s,t){const n=f3(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const d3={[p0]:"Linear",[m0]:"Reinhard",[g0]:"Cineon",[xf]:"ACESFilmic",[_0]:"AgX",[S0]:"Neutral",[v0]:"Custom"};function p3(s,t){const n=d3[t];return n===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zc=new k;function m3(){Ge.getLuminanceCoefficients(Zc);const s=Zc.x.toFixed(4),t=Zc.y.toFixed(4),n=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function v3(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function _3(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=s.getActiveAttrib(t,o),c=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),n[c]={type:l.type,location:s.getAttribLocation(t,c),locationSize:h}}return n}function Hl(s){return s!==""}function P1(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function O1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S3=/^[ \t]*#include +<([\w\d./]+)>/gm;function c0(s){return s.replace(S3,y3)}const x3=new Map;function y3(s,t){let n=Ne[t];if(n===void 0){const a=x3.get(t);if(a!==void 0)n=Ne[a],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return c0(n)}const M3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function z1(s){return s.replace(M3,b3)}function b3(s,t,n,a){let o="";for(let l=parseInt(t);l<parseInt(n);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I1(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const E3={[Qc]:"SHADOWMAP_TYPE_PCF",[Il]:"SHADOWMAP_TYPE_VSM"};function T3(s){return E3[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A3={[pr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[yf]:"ENVMAP_TYPE_CUBE_UV"};function w3(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":A3[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const C3={[bo]:"ENVMAP_MODE_REFRACTION"};function R3(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D3={[d0]:"ENVMAP_BLENDING_MULTIPLY",[_M]:"ENVMAP_BLENDING_MIX",[SM]:"ENVMAP_BLENDING_ADD"};function U3(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":D3[s.combine]||"ENVMAP_BLENDING_NONE"}function N3(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function L3(s,t,n,a){const o=s.getContext(),l=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=T3(n),d=w3(n),g=R3(n),v=U3(n),_=N3(n),S=g3(n),b=v3(l),C=o.createProgram();let y,x,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Hl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Hl).join(`
`),x.length>0&&(x+=`
`)):(y=[I1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),x=[I1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xa?"#define TONE_MAPPING":"",n.toneMapping!==xa?Ne.tonemapping_pars_fragment:"",n.toneMapping!==xa?p3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,h3("linearToOutputTexel",n.outputColorSpace),m3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),c=c0(c),c=P1(c,n),c=O1(c,n),h=c0(h),h=P1(h,n),h=O1(h,n),c=z1(c),h=z1(h),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=R+y+c,A=R+x+h,P=U1(o,o.VERTEX_SHADER,D),U=U1(o,o.FRAGMENT_SHADER,A);o.attachShader(C,P),o.attachShader(C,U),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(X){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(C)||"",tt=o.getShaderInfoLog(P)||"",G=o.getShaderInfoLog(U)||"",$=W.trim(),F=tt.trim(),V=G.trim();let ft=!0,ot=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(ft=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,P,U);else{const gt=L1(o,P,"vertex"),I=L1(o,U,"fragment");Xe("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+$+`
`+gt+`
`+I)}else $!==""?xe("WebGLProgram: Program Info Log:",$):(F===""||V==="")&&(ot=!1);ot&&(X.diagnostics={runnable:ft,programLog:$,vertexShader:{log:F,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(P),o.deleteShader(U),E=new nf(o,C),z=_3(o,C)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let z;this.getAttributes=function(){return z===void 0&&O(this),z};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(C,l3)),H},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u3++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=U,this}let P3=0;class O3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new z3(t),n.set(t,a)),a}}class z3{constructor(t){this.id=P3++,this.code=t,this.usedTimes=0}}function I3(s){return s===mr||s===sf||s===rf}function B3(s,t,n,a,o,l){const c=new sS,h=new O3,p=new Set,d=[],g=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return p.add(E),E===0?"uv":`uv${E}`}function C(E,z,H,X,W,tt){const G=X.fog,$=W.geometry,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?X.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ft=t.get(E.envMap||F,V),ot=ft&&ft.mapping===yf?ft.image.height:null,gt=S[E.type];E.precision!==null&&(_=a.getMaxPrecision(E.precision),_!==E.precision&&xe("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const I=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,at=I!==void 0?I.length:0;let yt=0;$.morphAttributes.position!==void 0&&(yt=1),$.morphAttributes.normal!==void 0&&(yt=2),$.morphAttributes.color!==void 0&&(yt=3);let Lt,Ht,Wt,rt;if(gt){const ut=ma[gt];Lt=ut.vertexShader,Ht=ut.fragmentShader}else{Lt=E.vertexShader,Ht=E.fragmentShader;const ut=h.getVertexShaderStage(E),Dt=h.getFragmentShaderStage(E);h.update(E,ut,Dt),Wt=ut.id,rt=Dt.id}const et=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),Yt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Zt=!!E.map,de=!!E.matcap,ct=!!ft,Ct=!!E.aoMap,Nt=!!E.lightMap,Pt=!!E.bumpMap&&E.wireframe===!1,Ft=!!E.normalMap,ce=!!E.displacementMap,se=!!E.emissiveMap,Ot=!!E.metalnessMap,ge=!!E.roughnessMap,Z=E.anisotropy>0,_e=E.clearcoat>0,ye=E.dispersion>0,B=E.retroreflectivity>0,T=E.iridescence>0,it=E.sheen>0,lt=E.transmission>0,Mt=Z&&!!E.anisotropyMap,Bt=_e&&!!E.clearcoatMap,Vt=_e&&!!E.clearcoatNormalMap,St=_e&&!!E.clearcoatRoughnessMap,_t=T&&!!E.iridescenceMap,It=T&&!!E.iridescenceThicknessMap,Jt=it&&!!E.sheenColorMap,qt=it&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,ae=!!E.specularColorMap,oe=!!E.specularIntensityMap,pe=lt&&!!E.transmissionMap,J=lt&&!!E.thicknessMap,Gt=!!E.gradientMap,Tt=!!E.alphaMap,kt=E.alphaTest>0,Y=!!E.alphaHash,L=!!E.extensions;let nt=xa;E.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(nt=s.toneMapping);const K={shaderID:gt,shaderType:E.type,shaderName:E.name,vertexShader:Lt,fragmentShader:Ht,defines:E.defines,customVertexShaderID:Wt,customFragmentShaderID:rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&W.instanceColor!==null,instancingMorph:Yt&&W.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:de,envMap:ct,envMapMode:ct&&ft.mapping,envMapCubeUVHeight:ot,aoMap:Ct,lightMap:Nt,bumpMap:Pt,normalMap:Ft,displacementMap:ce,emissiveMap:se,normalMapObjectSpace:Ft&&E.normalMapType===MM,normalMapTangentSpace:Ft&&E.normalMapType===of,packedNormalMap:Ft&&E.normalMapType===of&&I3(E.normalMap.format),metalnessMap:Ot,roughnessMap:ge,anisotropy:Z,anisotropyMap:Mt,clearcoat:_e,clearcoatMap:Bt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:St,dispersion:ye,retroreflection:B,iridescence:T,iridescenceMap:_t,iridescenceThicknessMap:It,sheen:it,sheenColorMap:Jt,sheenRoughnessMap:qt,specularMap:Xt,specularColorMap:ae,specularIntensityMap:oe,transmission:lt,transmissionMap:pe,thicknessMap:J,gradientMap:Gt,opaque:E.transparent===!1&&E.blending===Gl&&E.alphaToCoverage===!1,alphaMap:Tt,alphaTest:kt,alphaHash:Y,combine:E.combine,mapUv:Zt&&b(E.map.channel),aoMapUv:Ct&&b(E.aoMap.channel),lightMapUv:Nt&&b(E.lightMap.channel),bumpMapUv:Pt&&b(E.bumpMap.channel),normalMapUv:Ft&&b(E.normalMap.channel),displacementMapUv:ce&&b(E.displacementMap.channel),emissiveMapUv:se&&b(E.emissiveMap.channel),metalnessMapUv:Ot&&b(E.metalnessMap.channel),roughnessMapUv:ge&&b(E.roughnessMap.channel),anisotropyMapUv:Mt&&b(E.anisotropyMap.channel),clearcoatMapUv:Bt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:It&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:qt&&b(E.sheenRoughnessMap.channel),specularMapUv:Xt&&b(E.specularMap.channel),specularColorMapUv:ae&&b(E.specularColorMap.channel),specularIntensityMapUv:oe&&b(E.specularIntensityMap.channel),transmissionMapUv:pe&&b(E.transmissionMap.channel),thicknessMapUv:J&&b(E.thicknessMap.channel),alphaMapUv:Tt&&b(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ft||Z),vertexNormals:!!$.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!$.attributes.uv&&(Zt||Tt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||$.attributes.normal===void 0&&Ft===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:yt,numSunLights:z.sun.length,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numSunLightShadows:z.sunShadowMap.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&Ge.getTransfer(E.map.colorSpace)===je,decodeVideoTextureEmissive:se&&E.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(E.emissiveMap.colorSpace)===je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===fi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:L&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return K.vertexUv1s=p.has(1),K.vertexUv2s=p.has(2),K.vertexUv3s=p.has(3),p.clear(),K}function y(E){const z=[];if(E.shaderID?z.push(E.shaderID):(z.push(E.customVertexShaderID),z.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)z.push(H),z.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(x(z,E),R(z,E),z.push(s.outputColorSpace)),z.push(E.customProgramCacheKey),z.join()}function x(E,z){E.push(z.precision),E.push(z.outputColorSpace),E.push(z.envMapMode),E.push(z.envMapCubeUVHeight),E.push(z.mapUv),E.push(z.alphaMapUv),E.push(z.lightMapUv),E.push(z.aoMapUv),E.push(z.bumpMapUv),E.push(z.normalMapUv),E.push(z.displacementMapUv),E.push(z.emissiveMapUv),E.push(z.metalnessMapUv),E.push(z.roughnessMapUv),E.push(z.anisotropyMapUv),E.push(z.clearcoatMapUv),E.push(z.clearcoatNormalMapUv),E.push(z.clearcoatRoughnessMapUv),E.push(z.iridescenceMapUv),E.push(z.iridescenceThicknessMapUv),E.push(z.sheenColorMapUv),E.push(z.sheenRoughnessMapUv),E.push(z.specularMapUv),E.push(z.specularColorMapUv),E.push(z.specularIntensityMapUv),E.push(z.transmissionMapUv),E.push(z.thicknessMapUv),E.push(z.combine),E.push(z.fogExp2),E.push(z.sizeAttenuation),E.push(z.morphTargetsCount),E.push(z.morphAttributeCount),E.push(z.numSunLights),E.push(z.numDirLights),E.push(z.numPointLights),E.push(z.numSpotLights),E.push(z.numSpotLightMaps),E.push(z.numHemiLights),E.push(z.numRectAreaLights),E.push(z.numSunLightShadows),E.push(z.numDirLightShadows),E.push(z.numPointLightShadows),E.push(z.numSpotLightShadows),E.push(z.numSpotLightShadowsWithMaps),E.push(z.numLightProbes),E.push(z.shadowMapType),E.push(z.toneMapping),E.push(z.numClippingPlanes),E.push(z.numClipIntersection),E.push(z.depthPacking)}function R(E,z){c.disableAll(),z.instancing&&c.enable(0),z.instancingColor&&c.enable(1),z.instancingMorph&&c.enable(2),z.matcap&&c.enable(3),z.envMap&&c.enable(4),z.normalMapObjectSpace&&c.enable(5),z.normalMapTangentSpace&&c.enable(6),z.clearcoat&&c.enable(7),z.iridescence&&c.enable(8),z.alphaTest&&c.enable(9),z.vertexColors&&c.enable(10),z.vertexAlphas&&c.enable(11),z.vertexUv1s&&c.enable(12),z.vertexUv2s&&c.enable(13),z.vertexUv3s&&c.enable(14),z.vertexTangents&&c.enable(15),z.anisotropy&&c.enable(16),z.alphaHash&&c.enable(17),z.batching&&c.enable(18),z.dispersion&&c.enable(19),z.retroreflection&&c.enable(24),z.batchingColor&&c.enable(20),z.gradientMap&&c.enable(21),z.packedNormalMap&&c.enable(22),z.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),z.fog&&c.enable(0),z.useFog&&c.enable(1),z.flatShading&&c.enable(2),z.logarithmicDepthBuffer&&c.enable(3),z.reversedDepthBuffer&&c.enable(4),z.skinning&&c.enable(5),z.morphTargets&&c.enable(6),z.morphNormals&&c.enable(7),z.morphColors&&c.enable(8),z.premultipliedAlpha&&c.enable(9),z.shadowMapEnabled&&c.enable(10),z.doubleSided&&c.enable(11),z.flipSided&&c.enable(12),z.useDepthPacking&&c.enable(13),z.dithering&&c.enable(14),z.transmission&&c.enable(15),z.sheen&&c.enable(16),z.opaque&&c.enable(17),z.pointsUvs&&c.enable(18),z.decodeVideoTexture&&c.enable(19),z.decodeVideoTextureEmissive&&c.enable(20),z.alphaToCoverage&&c.enable(21),z.numLightProbeGrids>0&&c.enable(22),z.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function D(E){const z=S[E.type];let H;if(z){const X=ma[z];H=nu.clone(X.uniforms)}else H=E.uniforms;return H}function A(E,z){let H=g.get(z);return H!==void 0?++H.usedTimes:(H=new L3(s,z,E,o),d.push(H),g.set(z,H)),H}function P(E){if(--E.usedTimes===0){const z=d.indexOf(E);d[z]=d[d.length-1],d.pop(),g.delete(E.cacheKey),E.destroy()}}function U(E){h.remove(E)}function O(){h.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:D,acquireProgram:A,releaseProgram:P,releaseShaderCache:U,programs:d,dispose:O}}function F3(){let s=new WeakMap;function t(c){return s.has(c)}function n(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function a(c){s.delete(c)}function o(c,h,p){s.get(c)[h]=p}function l(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:l}}function H3(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function B1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function F1(){const s=[];let t=0;const n=[],a=[],o=[];function l(){t=0,n.length=0,a.length=0,o.length=0}function c(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function h(_,S,b,C,y,x){let R=s[t];return R===void 0?(R={id:_.id,object:_,geometry:S,material:b,materialVariant:c(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:x},s[t]=R):(R.id=_.id,R.object=_,R.geometry=S,R.material=b,R.materialVariant=c(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=y,R.group=x),t++,R}function p(_,S,b,C,y,x,R){R.reversedDepth===!0&&(y=-y);const D=h(_,S,b,C,y,x);b.transmission>0?a.push(D):b.transparent===!0?o.push(D):n.push(D)}function d(_,S,b,C,y,x){const R=h(_,S,b,C,y,x);b.transmission>0?a.unshift(R):b.transparent===!0?o.unshift(R):n.unshift(R)}function g(_,S){n.length>1&&n.sort(_||H3),a.length>1&&a.sort(S||B1),o.length>1&&o.sort(S||B1)}function v(){for(let _=t,S=s.length;_<S;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:l,push:p,unshift:d,finish:v,sort:g}}function G3(){let s=new WeakMap;function t(a,o){const l=s.get(a);let c;return l===void 0?(c=new F1,s.set(a,[c])):o>=l.length?(c=new F1,l.push(c)):c=l[o],c}function n(){s=new WeakMap}return{get:t,dispose:n}}function V3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new ee};break;case"SpotLight":n={position:new k,direction:new k,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new ee,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":n={color:new ee,position:new k,halfWidth:new k,halfHeight:new k};break}return s[t.id]=n,n}}}function k3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let X3=0;function W3(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function q3(s){const t=new V3,n=k3(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new k);const o=new k,l=new Ze,c=new Ze;function h(d){let g=0,v=0,_=0;for(let W=0;W<9;W++)a.probe[W].set(0,0,0);let S=0,b=0,C=0,y=0,x=0,R=0,D=0,A=0,P=0,U=0,O=0,E=0,z=0,H=0;d.sort(W3);for(let W=0,tt=d.length;W<tt;W++){const G=d[W],$=G.color,F=G.intensity,V=G.distance;let ft=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===mr?ft=G.shadow.map.texture:ft=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=$.r*F,v+=$.g*F,_+=$.b*F;else if(G.isLightProbe){for(let ot=0;ot<9;ot++)a.probe[ot].addScaledVector(G.sh.coefficients[ot],F);H++}else if(G.isSunLight){const ot=t.get(G);if(ot.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const gt=G.shadow,I=n.get(G);I.shadowIntensity=gt.intensity,I.shadowBias=gt.bias,I.shadowNormalBias=gt.normalBias,I.shadowRadius=gt.radius,I.shadowMapSize.copy(gt.mapSize).multiply(gt.getFrameExtents()),a.sunShadow[b]=I,a.sunShadowMap[b]=ft;const at=gt.getViewportCount();for(let yt=0;yt<at;yt++)a.sunShadowMatrix[C+yt]=gt.getMatrix(yt),a.sunShadowCascade[C+yt]=gt._cascadeData[yt];C+=at,b++}a.sun[S]=ot,S++}else if(G.isDirectionalLight){const ot=t.get(G);if(ot.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const gt=G.shadow,I=n.get(G);I.shadowIntensity=gt.intensity,I.shadowBias=gt.bias,I.shadowNormalBias=gt.normalBias,I.shadowRadius=gt.radius,I.shadowMapSize=gt.mapSize,a.directionalShadow[y]=I,a.directionalShadowMap[y]=ft,a.directionalShadowMatrix[y]=G.shadow.matrix,P++}a.directional[y]=ot,y++}else if(G.isSpotLight){const ot=t.get(G);ot.position.setFromMatrixPosition(G.matrixWorld),ot.color.copy($).multiplyScalar(F),ot.distance=V,ot.coneCos=Math.cos(G.angle),ot.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ot.decay=G.decay,a.spot[R]=ot;const gt=G.shadow;if(G.map&&(a.spotLightMap[E]=G.map,E++,gt.updateMatrices(G),G.castShadow&&z++),a.spotLightMatrix[R]=gt.matrix,G.castShadow){const I=n.get(G);I.shadowIntensity=gt.intensity,I.shadowBias=gt.bias,I.shadowNormalBias=gt.normalBias,I.shadowRadius=gt.radius,I.shadowMapSize=gt.mapSize,a.spotShadow[R]=I,a.spotShadowMap[R]=ft,O++}R++}else if(G.isRectAreaLight){const ot=t.get(G);ot.color.copy($).multiplyScalar(F),ot.halfWidth.set(G.width*.5,0,0),ot.halfHeight.set(0,G.height*.5,0),a.rectArea[D]=ot,D++}else if(G.isPointLight){const ot=t.get(G);if(ot.color.copy(G.color).multiplyScalar(G.intensity),ot.distance=G.distance,ot.decay=G.decay,G.castShadow){const gt=G.shadow,I=n.get(G);I.shadowIntensity=gt.intensity,I.shadowBias=gt.bias,I.shadowNormalBias=gt.normalBias,I.shadowRadius=gt.radius,I.shadowMapSize=gt.mapSize,I.shadowCameraNear=gt.camera.near,I.shadowCameraFar=gt.camera.far,a.pointShadow[x]=I,a.pointShadowMap[x]=ft,a.pointShadowMatrix[x]=G.shadow.matrix,U++}a.point[x]=ot,x++}else if(G.isHemisphereLight){const ot=t.get(G);ot.skyColor.copy(G.color).multiplyScalar(F),ot.groundColor.copy(G.groundColor).multiplyScalar(F),a.hemi[A]=ot,A++}}D>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=jt.LTC_FLOAT_1,a.rectAreaLTC2=jt.LTC_FLOAT_2):(a.rectAreaLTC1=jt.LTC_HALF_1,a.rectAreaLTC2=jt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=_;const X=a.hash;(X.sunLength!==S||X.directionalLength!==y||X.pointLength!==x||X.spotLength!==R||X.rectAreaLength!==D||X.hemiLength!==A||X.numSunShadows!==b||X.numDirectionalShadows!==P||X.numPointShadows!==U||X.numSpotShadows!==O||X.numSpotMaps!==E||X.numLightProbes!==H)&&(a.sun.length=S,a.directional.length=y,a.spot.length=R,a.rectArea.length=D,a.point.length=x,a.hemi.length=A,a.sunShadow.length=b,a.sunShadowMap.length=b,a.sunShadowMatrix.length=C,a.sunShadowCascade.length=C,a.directionalShadow.length=P,a.directionalShadowMap.length=P,a.directionalShadowMatrix.length=P,a.pointShadow.length=U,a.pointShadowMap.length=U,a.pointShadowMatrix.length=U,a.spotShadow.length=O,a.spotShadowMap.length=O,a.spotLightMatrix.length=O+E-z,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=H,X.sunLength=S,X.directionalLength=y,X.pointLength=x,X.spotLength=R,X.rectAreaLength=D,X.hemiLength=A,X.numSunShadows=b,X.numDirectionalShadows=P,X.numPointShadows=U,X.numSpotShadows=O,X.numSpotMaps=E,X.numLightProbes=H,a.version=X3++)}function p(d,g){let v=0,_=0,S=0,b=0,C=0,y=0;const x=g.matrixWorldInverse;for(let R=0,D=d.length;R<D;R++){const A=d[R];if(A.isSunLight){const P=a.sun[v];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(x),v++}else if(A.isDirectionalLight){const P=a.directional[_];P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),_++}else if(A.isSpotLight){const P=a.spot[b];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),b++}else if(A.isRectAreaLight){const P=a.rectArea[C];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(A.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),C++}else if(A.isPointLight){const P=a.point[S];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(x),S++}else if(A.isHemisphereLight){const P=a.hemi[y];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(x),y++}}}return{setup:h,setupView:p,state:a}}function H1(s){const t=new q3(s),n=[],a=[],o=[];function l(_){v.camera=_,n.length=0,a.length=0,o.length=0}function c(_){n.push(_)}function h(_){a.push(_)}function p(_){o.push(_)}function d(){t.setup(n)}function g(_){t.setupView(n,_)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:h,pushLightProbeGrid:p}}function Y3(s){let t=new WeakMap;function n(o,l=0){const c=t.get(o);let h;return c===void 0?(h=new H1(s),t.set(o,[h])):l>=c.length?(h=new H1(s),c.push(h)):h=c[l],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const Z3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K3=`uniform sampler2D shadow_pass;
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
}`,J3=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Q3=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],G1=new Ze,Pl=new k,Sp=new k;function j3(s,t,n){let a=new P0;const o=new wt,l=new wt,c=new _n,h=new sE,p=new rE,d={},g=n.maxTextureSize,v={[dr]:fi,[fi]:dr,[fn]:fn},_=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Z3,fragmentShader:K3}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const b=new on;b.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new di(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let x=this.type;this.render=function(U,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===$y&&(xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qc);const z=s.getRenderTarget(),H=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Sa),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const tt=x!==this.type;tt&&O.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach($=>$.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,$=U.length;G<$;G++){const F=U[G],V=F.shadow;if(V===void 0){xe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ft=V.getFrameExtents();o.multiply(ft),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ft.x),o.x=l.x*ft.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ft.y),o.y=l.y*ft.y,V.mapSize.y=l.y));const ot=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ot,V.map===null||tt===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Il){if(F.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new hi(o.x,o.y,{format:mr,type:Mi,minFilter:$n,magFilter:$n,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new jl(o.x,o.y,aa),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Ja,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn}else F.isPointLight?(V.map=new RS(o.x),V.map.depthTexture=new Mb(o.x,Ma)):(V.map=new hi(o.x,o.y),V.map.depthTexture=new jl(o.x,o.y,Ma)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Ja,this.type===Qc?(V.map.depthTexture.compareFunction=ot?C0:w0,V.map.depthTexture.minFilter=$n,V.map.depthTexture.magFilter=$n):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Yn,V.map.depthTexture.magFilter=Yn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==o.x||V.map.height!==o.y)&&V.map.setSize(o.x,o.y);const gt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();F.isPointLight!==!0&&V.updateMatrices(F,E);for(let I=0;I<gt;I++){const at=V.getCamera(I);if(F.isPointLight){const yt=V.camera,Lt=V.matrix,Ht=F.distance||yt.far;Ht!==yt.far&&(yt.far=Ht,yt.updateProjectionMatrix()),Pl.setFromMatrixPosition(F.matrixWorld),yt.position.copy(Pl),Sp.copy(yt.position),Sp.add(J3[I]),yt.up.copy(Q3[I]),yt.lookAt(Sp),yt.updateMatrixWorld(),Lt.makeTranslation(-Pl.x,-Pl.y,-Pl.z),G1.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(G1,yt.coordinateSystem,yt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,I),s.clear();else{I===0&&(s.setRenderTarget(V.map),s.clear());const yt=V.getViewport(I);c.set(l.x*yt.x,l.y*yt.y,l.x*yt.z,l.y*yt.w),W.viewport(c)}a=V.getFrustum(I),A(O,E,at,F,this.type)}V.isPointLightShadow!==!0&&this.type===Il&&R(V,E),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(z,H,X)};function R(U,O){const E=t.update(C);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new hi(o.x,o.y,{format:mr,type:Mi}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,E,_,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,E,S,C,null)}function D(U,O,E,z){let H=null;const X=E.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(X!==void 0)H=X;else if(H=E.isPointLight===!0?p:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=H.uuid,tt=O.uuid;let G=d[W];G===void 0&&(G={},d[W]=G);let $=G[tt];$===void 0&&($=H.clone(),G[tt]=$,O.addEventListener("dispose",P)),H=$}if(H.visible=O.visible,H.wireframe=O.wireframe,z===Il?H.side=O.shadowSide!==null?O.shadowSide:O.side:H.side=O.shadowSide!==null?O.shadowSide:v[O.side],H.alphaMap=O.alphaMap,H.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,H.map=O.map,H.clipShadows=O.clipShadows,H.clippingPlanes=O.clippingPlanes,H.clipIntersection=O.clipIntersection,H.displacementMap=O.displacementMap,H.displacementScale=O.displacementScale,H.displacementBias=O.displacementBias,H.wireframeLinewidth=O.wireframeLinewidth,H.linewidth=O.linewidth,E.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const W=s.properties.get(H);W.light=E}return H}function A(U,O,E,z,H){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&H===Il)&&(!U.frustumCulled||U.intersectsFrustum(a))){U.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,U.matrixWorld);const tt=t.update(U),G=U.material;if(Array.isArray(G)){const $=tt.groups;for(let F=0,V=$.length;F<V;F++){const ft=$[F],ot=G[ft.materialIndex];if(ot&&ot.visible){const gt=D(U,ot,z,H);U.onBeforeShadow(s,U,O,E,tt,gt,ft),s.renderBufferDirect(E,null,tt,gt,U,ft),U.onAfterShadow(s,U,O,E,tt,gt,ft)}}}else if(G.visible){const $=D(U,G,z,H);U.onBeforeShadow(s,U,O,E,tt,$,null),s.renderBufferDirect(E,null,tt,$,U,null),U.onAfterShadow(s,U,O,E,tt,$,null)}}const W=U.children;for(let tt=0,G=W.length;tt<G;tt++)A(W[tt],O,E,z,H)}function P(U){U.target.removeEventListener("dispose",P);for(const E in d){const z=d[E],H=U.target.uuid;H in z&&(z[H].dispose(),delete z[H])}}}function $3(s,t){function n(){let J=!1;const Gt=new _n;let Tt=null;const kt=new _n(0,0,0,0);return{setMask:function(Y){Tt!==Y&&!J&&(s.colorMask(Y,Y,Y,Y),Tt=Y)},setLocked:function(Y){J=Y},setClear:function(Y,L,nt,K,ut){ut===!0&&(Y*=K,L*=K,nt*=K),Gt.set(Y,L,nt,K),kt.equals(Gt)===!1&&(s.clearColor(Y,L,nt,K),kt.copy(Gt))},reset:function(){J=!1,Tt=null,kt.set(-1,0,0,0)}}}function a(){let J=!1,Gt=!1,Tt=null,kt=null,Y=null;return{setReversed:function(L){if(Gt!==L){const nt=t.get("EXT_clip_control");L?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Gt=L;const K=Y;Y=null,this.setClear(K)}},getReversed:function(){return Gt},setTest:function(L){L?et(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(L){Tt!==L&&!J&&(s.depthMask(L),Tt=L)},setFunc:function(L){if(Gt&&(L=LM[L]),kt!==L){switch(L){case yp:s.depthFunc(s.NEVER);break;case Mp:s.depthFunc(s.ALWAYS);break;case bp:s.depthFunc(s.LESS);break;case ql:s.depthFunc(s.LEQUAL);break;case Ep:s.depthFunc(s.EQUAL);break;case Tp:s.depthFunc(s.GEQUAL);break;case Ap:s.depthFunc(s.GREATER);break;case wp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}kt=L}},setLocked:function(L){J=L},setClear:function(L){Y!==L&&(Y=L,Gt&&(L=1-L),s.clearDepth(L))},reset:function(){J=!1,Tt=null,kt=null,Y=null,Gt=!1}}}function o(){let J=!1,Gt=null,Tt=null,kt=null,Y=null,L=null,nt=null,K=null,ut=null;return{setTest:function(Dt){J||(Dt?et(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Dt){Gt!==Dt&&!J&&(s.stencilMask(Dt),Gt=Dt)},setFunc:function(Dt,fe,Me){(Tt!==Dt||kt!==fe||Y!==Me)&&(s.stencilFunc(Dt,fe,Me),Tt=Dt,kt=fe,Y=Me)},setOp:function(Dt,fe,Me){(L!==Dt||nt!==fe||K!==Me)&&(s.stencilOp(Dt,fe,Me),L=Dt,nt=fe,K=Me)},setLocked:function(Dt){J=Dt},setClear:function(Dt){ut!==Dt&&(s.clearStencil(Dt),ut=Dt)},reset:function(){J=!1,Gt=null,Tt=null,kt=null,Y=null,L=null,nt=null,K=null,ut=null}}}const l=new n,c=new a,h=new o,p=new WeakMap,d=new WeakMap;let g={},v={},_={},S=new WeakMap,b=[],C=null,y=!1,x=null,R=null,D=null,A=null,P=null,U=null,O=null,E=new ee(0,0,0),z=0,H=!1,X=null,W=null,tt=null,G=null,$=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ft=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(ot)[1]),V=ft>=1):ot.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),V=ft>=2);let gt=null,I={};const at=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Lt=new _n().fromArray(at),Ht=new _n().fromArray(yt);function Wt(J,Gt,Tt,kt){const Y=new Uint8Array(4),L=s.createTexture();s.bindTexture(J,L),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let nt=0;nt<Tt;nt++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Gt,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Y):s.texImage2D(Gt+nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Y);return L}const rt={};rt[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),rt[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),rt[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),et(s.DEPTH_TEST),c.setFunc(ql),Pt(!1),Ft(P_),et(s.CULL_FACE),Ct(Sa);function et(J){g[J]!==!0&&(s.enable(J),g[J]=!0)}function Et(J){g[J]!==!1&&(s.disable(J),g[J]=!1)}function Yt(J,Gt){return _[J]!==Gt?(s.bindFramebuffer(J,Gt),_[J]=Gt,J===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Gt),J===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Gt),!0):!1}function zt(J,Gt){let Tt=b,kt=!1;if(J){Tt=S.get(Gt),Tt===void 0&&(Tt=[],S.set(Gt,Tt));const Y=J.textures;if(Tt.length!==Y.length||Tt[0]!==s.COLOR_ATTACHMENT0){for(let L=0,nt=Y.length;L<nt;L++)Tt[L]=s.COLOR_ATTACHMENT0+L;Tt.length=Y.length,kt=!0}}else Tt[0]!==s.BACK&&(Tt[0]=s.BACK,kt=!0);kt&&s.drawBuffers(Tt)}function Zt(J){return C!==J?(s.useProgram(J),C=J,!0):!1}const de={[vo]:s.FUNC_ADD,[eM]:s.FUNC_SUBTRACT,[nM]:s.FUNC_REVERSE_SUBTRACT};de[iM]=s.MIN,de[aM]=s.MAX;const ct={[sM]:s.ZERO,[rM]:s.ONE,[oM]:s.SRC_COLOR,[Y1]:s.SRC_ALPHA,[dM]:s.SRC_ALPHA_SATURATE,[fM]:s.DST_COLOR,[uM]:s.DST_ALPHA,[lM]:s.ONE_MINUS_SRC_COLOR,[Z1]:s.ONE_MINUS_SRC_ALPHA,[hM]:s.ONE_MINUS_DST_COLOR,[cM]:s.ONE_MINUS_DST_ALPHA,[pM]:s.CONSTANT_COLOR,[mM]:s.ONE_MINUS_CONSTANT_COLOR,[gM]:s.CONSTANT_ALPHA,[vM]:s.ONE_MINUS_CONSTANT_ALPHA};function Ct(J,Gt,Tt,kt,Y,L,nt,K,ut,Dt){if(J===Sa){y===!0&&(Et(s.BLEND),y=!1);return}if(y===!1&&(et(s.BLEND),y=!0),J!==tM){if(J!==x||Dt!==H){if((R!==vo||P!==vo)&&(s.blendEquation(s.FUNC_ADD),R=vo,P=vo),Dt)switch(J){case Gl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zs:s.blendFunc(s.ONE,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case z_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xe("WebGLState: Invalid blending: ",J);break}else switch(J){case Gl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case O_:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",J);break}D=null,A=null,U=null,O=null,E.set(0,0,0),z=0,x=J,H=Dt}return}Y=Y||Gt,L=L||Tt,nt=nt||kt,(Gt!==R||Y!==P)&&(s.blendEquationSeparate(de[Gt],de[Y]),R=Gt,P=Y),(Tt!==D||kt!==A||L!==U||nt!==O)&&(s.blendFuncSeparate(ct[Tt],ct[kt],ct[L],ct[nt]),D=Tt,A=kt,U=L,O=nt),(K.equals(E)===!1||ut!==z)&&(s.blendColor(K.r,K.g,K.b,ut),E.copy(K),z=ut),x=J,H=!1}function Nt(J,Gt){J.side===fn?Et(s.CULL_FACE):et(s.CULL_FACE);let Tt=J.side===fi;Gt&&(Tt=!Tt),Pt(Tt),J.blending===Gl&&J.transparent===!1?Ct(Sa):Ct(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),c.setFunc(J.depthFunc),c.setTest(J.depthTest),c.setMask(J.depthWrite),l.setMask(J.colorWrite);const kt=J.stencilWrite;h.setTest(kt),kt&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),se(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(J){X!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),X=J)}function Ft(J){J!==Qy?(et(s.CULL_FACE),J!==W&&(J===P_?s.cullFace(s.BACK):J===jy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),W=J}function ce(J){J!==tt&&(V&&s.lineWidth(J),tt=J)}function se(J,Gt,Tt){J?(et(s.POLYGON_OFFSET_FILL),(G!==Gt||$!==Tt)&&(G=Gt,$=Tt,c.getReversed()&&(Gt=-Gt),s.polygonOffset(Gt,Tt))):Et(s.POLYGON_OFFSET_FILL)}function Ot(J){J?et(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function ge(J){J===void 0&&(J=s.TEXTURE0+F-1),gt!==J&&(s.activeTexture(J),gt=J)}function Z(J,Gt,Tt){Tt===void 0&&(gt===null?Tt=s.TEXTURE0+F-1:Tt=gt);let kt=I[Tt];kt===void 0&&(kt={type:void 0,texture:void 0},I[Tt]=kt),(kt.type!==J||kt.texture!==Gt)&&(gt!==Tt&&(s.activeTexture(Tt),gt=Tt),s.bindTexture(J,Gt||rt[J]),kt.type=J,kt.texture=Gt)}function _e(){const J=I[gt];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function ye(){try{s.compressedTexImage2D(...arguments)}catch(J){Xe("WebGLState:",J)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(J){Xe("WebGLState:",J)}}function T(){try{s.texSubImage2D(...arguments)}catch(J){Xe("WebGLState:",J)}}function it(){try{s.texSubImage3D(...arguments)}catch(J){Xe("WebGLState:",J)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(J){Xe("WebGLState:",J)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(J){Xe("WebGLState:",J)}}function Bt(){try{s.texStorage2D(...arguments)}catch(J){Xe("WebGLState:",J)}}function Vt(){try{s.texStorage3D(...arguments)}catch(J){Xe("WebGLState:",J)}}function St(){try{s.texImage2D(...arguments)}catch(J){Xe("WebGLState:",J)}}function _t(){try{s.texImage3D(...arguments)}catch(J){Xe("WebGLState:",J)}}function It(J){return v[J]!==void 0?v[J]:s.getParameter(J)}function Jt(J,Gt){v[J]!==Gt&&(s.pixelStorei(J,Gt),v[J]=Gt)}function qt(J){Lt.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),Lt.copy(J))}function Xt(J){Ht.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),Ht.copy(J))}function ae(J,Gt){let Tt=d.get(Gt);Tt===void 0&&(Tt=new WeakMap,d.set(Gt,Tt));let kt=Tt.get(J);kt===void 0&&(kt=s.getUniformBlockIndex(Gt,J.name),Tt.set(J,kt))}function oe(J,Gt){const kt=d.get(Gt).get(J);p.get(Gt)!==kt&&(s.uniformBlockBinding(Gt,kt,J.__bindingPointIndex),p.set(Gt,kt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},gt=null,I={},_={},S=new WeakMap,b=[],C=null,y=!1,x=null,R=null,D=null,A=null,P=null,U=null,O=null,E=new ee(0,0,0),z=0,H=!1,X=null,W=null,tt=null,G=null,$=null,Lt.set(0,0,s.canvas.width,s.canvas.height),Ht.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:et,disable:Et,bindFramebuffer:Yt,drawBuffers:zt,useProgram:Zt,setBlending:Ct,setMaterial:Nt,setFlipSided:Pt,setCullFace:Ft,setLineWidth:ce,setPolygonOffset:se,setScissorTest:Ot,activeTexture:ge,bindTexture:Z,unbindTexture:_e,compressedTexImage2D:ye,compressedTexImage3D:B,texImage2D:St,texImage3D:_t,pixelStorei:Jt,getParameter:It,updateUBOMapping:ae,uniformBlockBinding:oe,texStorage2D:Bt,texStorage3D:Vt,texSubImage2D:T,texSubImage3D:it,compressedTexSubImage2D:lt,compressedTexSubImage3D:Mt,scissor:qt,viewport:Xt,reset:pe}}function tw(s,t,n,a,o,l,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new wt,g=new WeakMap,v=new Set;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(B,T){return b?new OffscreenCanvas(B,T):cf("canvas")}function y(B,T,it){let lt=1;const Mt=ye(B);if((Mt.width>it||Mt.height>it)&&(lt=it/Math.max(Mt.width,Mt.height)),lt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Bt=Math.floor(lt*Mt.width),Vt=Math.floor(lt*Mt.height);_===void 0&&(_=C(Bt,Vt));const St=T?C(Bt,Vt):_;return St.width=Bt,St.height=Vt,St.getContext("2d").drawImage(B,0,0,Bt,Vt),xe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+Bt+"x"+Vt+")."),St}else return"data"in B&&xe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),B;return B}function x(B){return B.generateMipmaps}function R(B){s.generateMipmap(B)}function D(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(B,T,it,lt,Mt,Bt=!1){if(B!==null){if(s[B]!==void 0)return s[B];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Vt;lt&&(Vt=t.get("EXT_texture_norm16"),Vt||xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let St=T;if(T===s.RED&&(it===s.FLOAT&&(St=s.R32F),it===s.HALF_FLOAT&&(St=s.R16F),it===s.UNSIGNED_BYTE&&(St=s.R8),it===s.UNSIGNED_SHORT&&Vt&&(St=Vt.R16_EXT),it===s.SHORT&&Vt&&(St=Vt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(it===s.UNSIGNED_BYTE&&(St=s.R8UI),it===s.UNSIGNED_SHORT&&(St=s.R16UI),it===s.UNSIGNED_INT&&(St=s.R32UI),it===s.BYTE&&(St=s.R8I),it===s.SHORT&&(St=s.R16I),it===s.INT&&(St=s.R32I)),T===s.RG&&(it===s.FLOAT&&(St=s.RG32F),it===s.HALF_FLOAT&&(St=s.RG16F),it===s.UNSIGNED_BYTE&&(St=s.RG8),it===s.UNSIGNED_SHORT&&Vt&&(St=Vt.RG16_EXT),it===s.SHORT&&Vt&&(St=Vt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(it===s.UNSIGNED_BYTE&&(St=s.RG8UI),it===s.UNSIGNED_SHORT&&(St=s.RG16UI),it===s.UNSIGNED_INT&&(St=s.RG32UI),it===s.BYTE&&(St=s.RG8I),it===s.SHORT&&(St=s.RG16I),it===s.INT&&(St=s.RG32I)),T===s.RGB_INTEGER&&(it===s.UNSIGNED_BYTE&&(St=s.RGB8UI),it===s.UNSIGNED_SHORT&&(St=s.RGB16UI),it===s.UNSIGNED_INT&&(St=s.RGB32UI),it===s.BYTE&&(St=s.RGB8I),it===s.SHORT&&(St=s.RGB16I),it===s.INT&&(St=s.RGB32I)),T===s.RGBA_INTEGER&&(it===s.UNSIGNED_BYTE&&(St=s.RGBA8UI),it===s.UNSIGNED_SHORT&&(St=s.RGBA16UI),it===s.UNSIGNED_INT&&(St=s.RGBA32UI),it===s.BYTE&&(St=s.RGBA8I),it===s.SHORT&&(St=s.RGBA16I),it===s.INT&&(St=s.RGBA32I)),T===s.RGB&&(it===s.UNSIGNED_SHORT&&Vt&&(St=Vt.RGB16_EXT),it===s.SHORT&&Vt&&(St=Vt.RGB16_SNORM_EXT),it===s.UNSIGNED_INT_5_9_9_9_REV&&(St=s.RGB9_E5),it===s.UNSIGNED_INT_10F_11F_11F_REV&&(St=s.R11F_G11F_B10F)),T===s.RGBA){const _t=Bt?uf:Ge.getTransfer(Mt);it===s.FLOAT&&(St=s.RGBA32F),it===s.HALF_FLOAT&&(St=s.RGBA16F),it===s.UNSIGNED_BYTE&&(St=_t===je?s.SRGB8_ALPHA8:s.RGBA8),it===s.UNSIGNED_SHORT&&Vt&&(St=Vt.RGBA16_EXT),it===s.SHORT&&Vt&&(St=Vt.RGBA16_SNORM_EXT),it===s.UNSIGNED_SHORT_4_4_4_4&&(St=s.RGBA4),it===s.UNSIGNED_SHORT_5_5_5_1&&(St=s.RGB5_A1)}return(St===s.R16F||St===s.R32F||St===s.RG16F||St===s.RG32F||St===s.RGBA16F||St===s.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function P(B,T){let it;return B?T===null||T===Ma||T===Zl?it=s.DEPTH24_STENCIL8:T===aa?it=s.DEPTH32F_STENCIL8:T===Yl&&(it=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ma||T===Zl?it=s.DEPTH_COMPONENT24:T===aa?it=s.DEPTH_COMPONENT32F:T===Yl&&(it=s.DEPTH_COMPONENT16),it}function U(B,T){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Yn&&B.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?T.mipmaps.length:1}function O(B){const T=B.target;T.removeEventListener("dispose",O),z(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&v.delete(T)}function E(B){const T=B.target;T.removeEventListener("dispose",E),X(T)}function z(B){const T=a.get(B);if(T.__webglInit===void 0)return;const it=B.source,lt=S.get(it);if(lt){const Mt=lt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&H(B),Object.keys(lt).length===0&&S.delete(it)}a.remove(B)}function H(B){const T=a.get(B);s.deleteTexture(T.__webglTexture);const it=B.source,lt=S.get(it);delete lt[T.__cacheKey],c.memory.textures--}function X(B){const T=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(T.__webglFramebuffer[lt]))for(let Mt=0;Mt<T.__webglFramebuffer[lt].length;Mt++)s.deleteFramebuffer(T.__webglFramebuffer[lt][Mt]);else s.deleteFramebuffer(T.__webglFramebuffer[lt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[lt])}else{if(Array.isArray(T.__webglFramebuffer))for(let lt=0;lt<T.__webglFramebuffer.length;lt++)s.deleteFramebuffer(T.__webglFramebuffer[lt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let lt=0;lt<T.__webglColorRenderbuffer.length;lt++)T.__webglColorRenderbuffer[lt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[lt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=B.textures;for(let lt=0,Mt=it.length;lt<Mt;lt++){const Bt=a.get(it[lt]);Bt.__webglTexture&&(s.deleteTexture(Bt.__webglTexture),c.memory.textures--),a.remove(it[lt])}a.remove(B)}let W=0;function tt(){W=0}function G(){return W}function $(B){W=B}function F(){const B=W;return B>=o.maxTextures&&xe("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),W+=1,B}function V(B){const T=[];return T.push(B.wrapS),T.push(B.wrapT),T.push(B.wrapR||0),T.push(B.magFilter),T.push(B.minFilter),T.push(B.anisotropy),T.push(B.internalFormat),T.push(B.format),T.push(B.type),T.push(B.generateMipmaps),T.push(B.premultiplyAlpha),T.push(B.flipY),T.push(B.unpackAlignment),T.push(B.colorSpace),T.join()}function ft(B,T){const it=a.get(B);if(B.isVideoTexture&&Z(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&it.__version!==B.version){const lt=B.image;if(lt===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Et(it,B,T);return}}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,it.__webglTexture,s.TEXTURE0+T)}function ot(B,T){const it=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){Et(it,B,T);return}else B.isExternalTexture&&(it.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,it.__webglTexture,s.TEXTURE0+T)}function gt(B,T){const it=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&it.__version!==B.version){Et(it,B,T);return}n.bindTexture(s.TEXTURE_3D,it.__webglTexture,s.TEXTURE0+T)}function I(B,T){const it=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&it.__version!==B.version){Yt(it,B,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture,s.TEXTURE0+T)}const at={[Cp]:s.REPEAT,[Ya]:s.CLAMP_TO_EDGE,[Rp]:s.MIRRORED_REPEAT},yt={[Yn]:s.NEAREST,[xM]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[$n]:s.LINEAR,[Gd]:s.LINEAR_MIPMAP_NEAREST,[cr]:s.LINEAR_MIPMAP_LINEAR},Lt={[EM]:s.NEVER,[RM]:s.ALWAYS,[TM]:s.LESS,[w0]:s.LEQUAL,[AM]:s.EQUAL,[C0]:s.GEQUAL,[wM]:s.GREATER,[CM]:s.NOTEQUAL};function Ht(B,T){if(T.type===aa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Gd||T.magFilter===Sc||T.magFilter===cr||T.minFilter===$n||T.minFilter===Gd||T.minFilter===Sc||T.minFilter===cr)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,at[T.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,at[T.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,at[T.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,yt[T.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Yn||T.minFilter!==Sc&&T.minFilter!==cr||T.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Wt(B,T){let it=!1;B.__webglInit===void 0&&(B.__webglInit=!0,T.addEventListener("dispose",O));const lt=T.source;let Mt=S.get(lt);Mt===void 0&&(Mt={},S.set(lt,Mt));const Bt=V(T);if(Bt!==B.__cacheKey){Mt[Bt]===void 0&&(Mt[Bt]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,it=!0),Mt[Bt].usedTimes++;const Vt=Mt[B.__cacheKey];Vt!==void 0&&(Mt[B.__cacheKey].usedTimes--,Vt.usedTimes===0&&H(T)),B.__cacheKey=Bt,B.__webglTexture=Mt[Bt].texture}return it}function rt(B,T,it){return Math.floor(Math.floor(B/it)/T)}function et(B,T,it,lt){const Bt=B.updateRanges;if(Bt.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,it,lt,T.data);else{Bt.sort((Jt,qt)=>Jt.start-qt.start);let Vt=0;for(let Jt=1;Jt<Bt.length;Jt++){const qt=Bt[Vt],Xt=Bt[Jt],ae=qt.start+qt.count,oe=rt(Xt.start,T.width,4),pe=rt(qt.start,T.width,4);Xt.start<=ae+1&&oe===pe&&rt(Xt.start+Xt.count-1,T.width,4)===oe?qt.count=Math.max(qt.count,Xt.start+Xt.count-qt.start):(++Vt,Bt[Vt]=Xt)}Bt.length=Vt+1;const St=n.getParameter(s.UNPACK_ROW_LENGTH),_t=n.getParameter(s.UNPACK_SKIP_PIXELS),It=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Jt=0,qt=Bt.length;Jt<qt;Jt++){const Xt=Bt[Jt],ae=Math.floor(Xt.start/4),oe=Math.ceil(Xt.count/4),pe=ae%T.width,J=Math.floor(ae/T.width),Gt=oe,Tt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(s.UNPACK_SKIP_ROWS,J),n.texSubImage2D(s.TEXTURE_2D,0,pe,J,Gt,Tt,it,lt,T.data)}B.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,St),n.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),n.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function Et(B,T,it){let lt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=s.TEXTURE_3D);const Mt=Wt(B,T),Bt=T.source;n.bindTexture(lt,B.__webglTexture,s.TEXTURE0+it);const Vt=a.get(Bt);if(Bt.version!==Vt.__version||Mt===!0){if(n.activeTexture(s.TEXTURE0+it),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Tt=Ge.getPrimaries(Ge.workingColorSpace),kt=T.colorSpace===Ps?null:Ge.getPrimaries(T.colorSpace),Y=T.colorSpace===Ps||Tt===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y)}n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let _t=y(T.image,!1,o.maxTextureSize);_t=_e(T,_t);const It=l.convert(T.format,T.colorSpace),Jt=l.convert(T.type);let qt=A(T.internalFormat,It,Jt,T.normalized,T.colorSpace,T.isVideoTexture);Ht(lt,T);let Xt;const ae=T.mipmaps,oe=T.isVideoTexture!==!0,pe=Vt.__version===void 0||Mt===!0,J=Bt.dataReady,Gt=U(T,_t);if(T.isDepthTexture)qt=P(T.format===fr,T.type),pe&&(oe?n.texStorage2D(s.TEXTURE_2D,1,qt,_t.width,_t.height):n.texImage2D(s.TEXTURE_2D,0,qt,_t.width,_t.height,0,It,Jt,null));else if(T.isDataTexture)if(ae.length>0){oe&&pe&&n.texStorage2D(s.TEXTURE_2D,Gt,qt,ae[0].width,ae[0].height);for(let Tt=0,kt=ae.length;Tt<kt;Tt++)Xt=ae[Tt],oe?J&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Xt.width,Xt.height,It,Jt,Xt.data):n.texImage2D(s.TEXTURE_2D,Tt,qt,Xt.width,Xt.height,0,It,Jt,Xt.data);T.generateMipmaps=!1}else oe?(pe&&n.texStorage2D(s.TEXTURE_2D,Gt,qt,_t.width,_t.height),J&&et(T,_t,It,Jt)):n.texImage2D(s.TEXTURE_2D,0,qt,_t.width,_t.height,0,It,Jt,_t.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,qt,ae[0].width,ae[0].height,_t.depth);for(let Tt=0,kt=ae.length;Tt<kt;Tt++)if(Xt=ae[Tt],T.format!==sa)if(It!==null)if(oe){if(J)if(T.layerUpdates.size>0){const Y=S1(Xt.width,Xt.height,T.format,T.type);for(const L of T.layerUpdates){const nt=Xt.data.subarray(L*Y/Xt.data.BYTES_PER_ELEMENT,(L+1)*Y/Xt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,L,Xt.width,Xt.height,1,It,nt)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Xt.width,Xt.height,_t.depth,It,Xt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,qt,Xt.width,Xt.height,_t.depth,0,Xt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?J&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Xt.width,Xt.height,_t.depth,It,Jt,Xt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Tt,qt,Xt.width,Xt.height,_t.depth,0,It,Jt,Xt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{oe&&pe&&n.texStorage2D(s.TEXTURE_2D,Gt,qt,ae[0].width,ae[0].height);for(let Tt=0,kt=ae.length;Tt<kt;Tt++)Xt=ae[Tt],T.format!==sa?It!==null?oe?J&&n.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Xt.width,Xt.height,It,Xt.data):n.compressedTexImage2D(s.TEXTURE_2D,Tt,qt,Xt.width,Xt.height,0,Xt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?J&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Xt.width,Xt.height,It,Jt,Xt.data):n.texImage2D(s.TEXTURE_2D,Tt,qt,Xt.width,Xt.height,0,It,Jt,Xt.data)}else if(T.isDataArrayTexture)if(oe){if(pe&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,qt,_t.width,_t.height,_t.depth),J)if(T.layerUpdates.size>0){const Tt=S1(_t.width,_t.height,T.format,T.type);for(const kt of T.layerUpdates){const Y=_t.data.subarray(kt*Tt/_t.data.BYTES_PER_ELEMENT,(kt+1)*Tt/_t.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,kt,_t.width,_t.height,1,It,Jt,Y)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,It,Jt,_t.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,qt,_t.width,_t.height,_t.depth,0,It,Jt,_t.data);else if(T.isData3DTexture)oe?(pe&&n.texStorage3D(s.TEXTURE_3D,Gt,qt,_t.width,_t.height,_t.depth),J&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,It,Jt,_t.data)):n.texImage3D(s.TEXTURE_3D,0,qt,_t.width,_t.height,_t.depth,0,It,Jt,_t.data);else if(T.isFramebufferTexture){if(pe)if(oe)n.texStorage2D(s.TEXTURE_2D,Gt,qt,_t.width,_t.height);else{let Tt=_t.width,kt=_t.height;for(let Y=0;Y<Gt;Y++)n.texImage2D(s.TEXTURE_2D,Y,qt,Tt,kt,0,It,Jt,null),Tt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Tt=s.canvas;if(Tt.hasAttribute("layoutsubtree")||Tt.setAttribute("layoutsubtree","true"),_t.parentNode!==Tt){Tt.appendChild(_t),v.add(T),Tt.onpaint=kt=>{const Y=kt.changedElements;for(const L of v)Y.includes(L.image)&&(L.needsUpdate=!0)},Tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_t);else{const Y=s.RGBA,L=s.RGBA,nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Y,L,nt,_t)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ae.length>0){if(oe&&pe){const Tt=ye(ae[0]);n.texStorage2D(s.TEXTURE_2D,Gt,qt,Tt.width,Tt.height)}for(let Tt=0,kt=ae.length;Tt<kt;Tt++)Xt=ae[Tt],oe?J&&n.texSubImage2D(s.TEXTURE_2D,Tt,0,0,It,Jt,Xt):n.texImage2D(s.TEXTURE_2D,Tt,qt,It,Jt,Xt);T.generateMipmaps=!1}else if(oe){if(pe){const Tt=ye(_t);n.texStorage2D(s.TEXTURE_2D,Gt,qt,Tt.width,Tt.height)}J&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,It,Jt,_t)}else n.texImage2D(s.TEXTURE_2D,0,qt,It,Jt,_t);x(T)&&R(lt),Vt.__version=Bt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function Yt(B,T,it){if(T.image.length!==6)return;const lt=Wt(B,T),Mt=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+it);const Bt=a.get(Mt);if(Mt.version!==Bt.__version||lt===!0){n.activeTexture(s.TEXTURE0+it);const Vt=Ge.getPrimaries(Ge.workingColorSpace),St=T.colorSpace===Ps?null:Ge.getPrimaries(T.colorSpace),_t=T.colorSpace===Ps||Vt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const It=T.isCompressedTexture||T.image[0].isCompressedTexture,Jt=T.image[0]&&T.image[0].isDataTexture,qt=[];for(let L=0;L<6;L++)!It&&!Jt?qt[L]=y(T.image[L],!0,o.maxCubemapSize):qt[L]=Jt?T.image[L].image:T.image[L],qt[L]=_e(T,qt[L]);const Xt=qt[0],ae=l.convert(T.format,T.colorSpace),oe=l.convert(T.type),pe=A(T.internalFormat,ae,oe,T.normalized,T.colorSpace),J=T.isVideoTexture!==!0,Gt=Bt.__version===void 0||lt===!0,Tt=Mt.dataReady;let kt=U(T,Xt);Ht(s.TEXTURE_CUBE_MAP,T);let Y;if(It){J&&Gt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,kt,pe,Xt.width,Xt.height);for(let L=0;L<6;L++){Y=qt[L].mipmaps;for(let nt=0;nt<Y.length;nt++){const K=Y[nt];T.format!==sa?ae!==null?J?Tt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt,0,0,K.width,K.height,ae,K.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt,pe,K.width,K.height,0,K.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt,0,0,K.width,K.height,ae,oe,K.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt,pe,K.width,K.height,0,ae,oe,K.data)}}}else{if(Y=T.mipmaps,J&&Gt){Y.length>0&&kt++;const L=ye(qt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,kt,pe,L.width,L.height)}for(let L=0;L<6;L++)if(Jt){J?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,qt[L].width,qt[L].height,ae,oe,qt[L].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,pe,qt[L].width,qt[L].height,0,ae,oe,qt[L].data);for(let nt=0;nt<Y.length;nt++){const ut=Y[nt].image[L].image;J?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt+1,0,0,ut.width,ut.height,ae,oe,ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt+1,pe,ut.width,ut.height,0,ae,oe,ut.data)}}else{J?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ae,oe,qt[L]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,pe,ae,oe,qt[L]);for(let nt=0;nt<Y.length;nt++){const K=Y[nt];J?Tt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt+1,0,0,ae,oe,K.image[L]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,nt+1,pe,ae,oe,K.image[L])}}}x(T)&&R(s.TEXTURE_CUBE_MAP),Bt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}B.__version=T.version}function zt(B,T,it,lt,Mt,Bt){const Vt=l.convert(it.format,it.colorSpace),St=l.convert(it.type),_t=A(it.internalFormat,Vt,St,it.normalized,it.colorSpace),It=a.get(T),Jt=a.get(it);if(Jt.__renderTarget=T,!It.__hasExternalTextures){const qt=Math.max(1,T.width>>Bt),Xt=Math.max(1,T.height>>Bt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?n.texImage3D(Mt,Bt,_t,qt,Xt,T.depth,0,Vt,St,null):n.texImage2D(Mt,Bt,_t,qt,Xt,0,Vt,St,null)}n.bindFramebuffer(s.FRAMEBUFFER,B),ge(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,Mt,Jt.__webglTexture,0,Ot(T)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,Mt,Jt.__webglTexture,Bt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(B,T,it){if(s.bindRenderbuffer(s.RENDERBUFFER,B),T.depthBuffer){const lt=T.depthTexture,Mt=lt&&lt.isDepthTexture?lt.type:null,Bt=P(T.stencilBuffer,Mt),Vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ge(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(T),Bt,T.width,T.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(T),Bt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Bt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,B)}else{const lt=T.textures;for(let Mt=0;Mt<lt.length;Mt++){const Bt=lt[Mt],Vt=l.convert(Bt.format,Bt.colorSpace),St=l.convert(Bt.type),_t=A(Bt.internalFormat,Vt,St,Bt.normalized,Bt.colorSpace);ge(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot(T),_t,T.width,T.height):it?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot(T),_t,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,_t,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(B,T,it){const lt=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,B),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Mt=a.get(T.depthTexture);if(Mt.__renderTarget=T,(!Mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt){if(Mt.__webglInit===void 0&&(Mt.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),Mt.__webglTexture===void 0){Mt.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,Mt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,T.depthTexture);const It=l.convert(T.depthTexture.format),Jt=l.convert(T.depthTexture.type);let qt;T.depthTexture.format===Ja?qt=s.DEPTH_COMPONENT24:T.depthTexture.format===fr&&(qt=s.DEPTH24_STENCIL8);for(let Xt=0;Xt<6;Xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,qt,T.width,T.height,0,It,Jt,null)}}else ft(T.depthTexture,0);const Bt=Mt.__webglTexture,Vt=Ot(T),St=lt?s.TEXTURE_CUBE_MAP_POSITIVE_X+it:s.TEXTURE_2D,_t=T.depthTexture.format===fr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ja)ge(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,St,Bt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,_t,St,Bt,0);else if(T.depthTexture.format===fr)ge(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_t,St,Bt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,_t,St,Bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(B){const T=a.get(B),it=B.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==B.depthTexture){const lt=B.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",Mt)};lt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=lt}if(B.depthTexture&&!T.__autoAllocateDepthBuffer)if(it)for(let lt=0;lt<6;lt++)de(T.__webglFramebuffer[lt],B,lt);else{const lt=B.texture.mipmaps;lt&&lt.length>0?de(T.__webglFramebuffer[0],B,0):de(T.__webglFramebuffer,B,0)}else if(it){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=s.createRenderbuffer(),Zt(T.__webglDepthbuffer[lt],B,!1);else{const Mt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=T.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,Bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,Bt)}}else{const lt=B.texture.mipmaps;if(lt&&lt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Zt(T.__webglDepthbuffer,B,!1);else{const Mt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,Bt)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(B,T,it){const lt=a.get(B);T!==void 0&&zt(lt.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),it!==void 0&&ct(B)}function Nt(B){const T=B.texture,it=a.get(B),lt=a.get(T);B.addEventListener("dispose",E);const Mt=B.textures,Bt=B.isWebGLCubeRenderTarget===!0,Vt=Mt.length>1;if(Vt||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=T.version,c.memory.textures++),Bt){it.__webglFramebuffer=[];for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[St]=[];for(let _t=0;_t<T.mipmaps.length;_t++)it.__webglFramebuffer[St][_t]=s.createFramebuffer()}else it.__webglFramebuffer[St]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)it.__webglFramebuffer[St]=s.createFramebuffer()}else it.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let St=0,_t=Mt.length;St<_t;St++){const It=a.get(Mt[St]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),c.memory.textures++)}if(B.samples>0&&ge(B)===!1){it.__webglMultisampledFramebuffer=s.createFramebuffer(),it.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let St=0;St<Mt.length;St++){const _t=Mt[St];it.__webglColorRenderbuffer[St]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,it.__webglColorRenderbuffer[St]);const It=l.convert(_t.format,_t.colorSpace),Jt=l.convert(_t.type),qt=A(_t.internalFormat,It,Jt,_t.normalized,_t.colorSpace,B.isXRRenderTarget===!0),Xt=Ot(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,qt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,it.__webglColorRenderbuffer[St])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(it.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(it.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Bt){n.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,T);for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)zt(it.__webglFramebuffer[St][_t],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,_t);else zt(it.__webglFramebuffer[St],B,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);x(T)&&R(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Vt){for(let St=0,_t=Mt.length;St<_t;St++){const It=Mt[St],Jt=a.get(It);let qt=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(qt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(qt,Jt.__webglTexture),Ht(qt,It),zt(it.__webglFramebuffer,B,It,s.COLOR_ATTACHMENT0+St,qt,0),x(It)&&R(qt)}n.unbindTexture()}else{let St=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(St=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(St,lt.__webglTexture),Ht(St,T),T.mipmaps&&T.mipmaps.length>0)for(let _t=0;_t<T.mipmaps.length;_t++)zt(it.__webglFramebuffer[_t],B,T,s.COLOR_ATTACHMENT0,St,_t);else zt(it.__webglFramebuffer,B,T,s.COLOR_ATTACHMENT0,St,0);x(T)&&R(St),n.unbindTexture()}B.depthBuffer&&ct(B)}function Pt(B){const T=B.textures;for(let it=0,lt=T.length;it<lt;it++){const Mt=T[it];if(x(Mt)){const Bt=D(B),Vt=a.get(Mt).__webglTexture;n.bindTexture(Bt,Vt),R(Bt),n.unbindTexture()}}}const Ft=[],ce=[];function se(B){if(B.samples>0){if(ge(B)===!1){const T=B.textures,it=B.width,lt=B.height;let Mt=s.COLOR_BUFFER_BIT;const Bt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=a.get(B),St=T.length>1;if(St)for(let It=0;It<T.length;It++)n.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const _t=B.texture.mipmaps;_t&&_t.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),St){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const Jt=a.get(T[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,it,lt,0,0,it,lt,Mt,s.NEAREST),p===!0&&(Ft.length=0,ce.length=0,Ft.push(s.COLOR_ATTACHMENT0+It),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Ft.push(Bt),ce.push(Bt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ce)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),St)for(let It=0;It<T.length;It++){n.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const Jt=a.get(T[It]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,Jt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&p){const T=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ot(B){return Math.min(o.maxSamples,B.samples)}function ge(B){const T=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Z(B){const T=c.render.frame;g.get(B)!==T&&(g.set(B,T),B.update())}function _e(B,T){const it=B.colorSpace,lt=B.format,Mt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||it!==lf&&it!==Ps&&(Ge.getTransfer(it)===je?(lt!==sa||Mt!==Oi)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",it)),T}function ye(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=F,this.resetTextureUnits=tt,this.getTextureUnits=G,this.setTextureUnits=$,this.setTexture2D=ft,this.setTexture2DArray=ot,this.setTexture3D=gt,this.setTextureCube=I,this.rebindTextures=Ct,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ew(s,t){function n(a,o=Ps){let l;const c=Ge.getTransfer(o);if(a===Oi)return s.UNSIGNED_BYTE;if(a===y0)return s.UNSIGNED_SHORT_4_4_4_4;if(a===M0)return s.UNSIGNED_SHORT_5_5_5_1;if(a===j1)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===$1)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===J1)return s.BYTE;if(a===Q1)return s.SHORT;if(a===Yl)return s.UNSIGNED_SHORT;if(a===x0)return s.INT;if(a===Ma)return s.UNSIGNED_INT;if(a===aa)return s.FLOAT;if(a===Mi)return s.HALF_FLOAT;if(a===tS)return s.ALPHA;if(a===eS)return s.RGB;if(a===sa)return s.RGBA;if(a===Ja)return s.DEPTH_COMPONENT;if(a===fr)return s.DEPTH_STENCIL;if(a===b0)return s.RED;if(a===E0)return s.RED_INTEGER;if(a===mr)return s.RG;if(a===T0)return s.RG_INTEGER;if(a===A0)return s.RGBA_INTEGER;if(a===jc||a===$c||a===tf||a===ef)if(c===je)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===jc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===tf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ef)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===jc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===tf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ef)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Dp||a===Up||a===Np||a===Lp)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Dp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Up)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Np)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Lp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pp||a===Op||a===zp||a===Ip||a===Bp||a===sf||a===Fp)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Pp||a===Op)return c===je?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===zp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ip)return l.COMPRESSED_R11_EAC;if(a===Bp)return l.COMPRESSED_SIGNED_R11_EAC;if(a===sf)return l.COMPRESSED_RG11_EAC;if(a===Fp)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Hp||a===Gp||a===Vp||a===kp||a===Xp||a===Wp||a===qp||a===Yp||a===Zp||a===Kp||a===Jp||a===Qp||a===jp||a===$p)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Hp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Gp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===kp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Xp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Wp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===qp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Yp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Zp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Kp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Jp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Qp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jp)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===$p)return c===je?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===t0||a===e0||a===n0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===t0)return c===je?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===e0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===n0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===i0||a===a0||a===rf||a===s0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===i0)return l.COMPRESSED_RED_RGTC1_EXT;if(a===a0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===rf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===s0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Zl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
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

}`;class aw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new dS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new vn({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new di(new Wn(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends _r{constructor(t,n){super();const a=this;let o=null,l=1,c=null,h="local-floor",p=1,d=null,g=null,v=null,_=null,S=null,b=null;const C=typeof XRWebGLBinding<"u",y=new aw,x={},R=n.getContextAttributes();let D=null,A=null;const P=[],U=[],O=new wt;let E=null,z=null;const H=new Pi;H.viewport=new _n;const X=new Pi;X.viewport=new _n;const W=[H,X],tt=new fE;let G=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let et=P[rt];return et===void 0&&(et=new Zd,P[rt]=et),et.getTargetRaySpace()},this.getControllerGrip=function(rt){let et=P[rt];return et===void 0&&(et=new Zd,P[rt]=et),et.getGripSpace()},this.getHand=function(rt){let et=P[rt];return et===void 0&&(et=new Zd,P[rt]=et),et.getHandSpace()};function F(rt){const et=U.indexOf(rt.inputSource);if(et===-1)return;const Et=P[et];Et!==void 0&&(Et.update(rt.inputSource,rt.frame,d||c),Et.dispatchEvent({type:rt.type,data:rt.inputSource}))}function V(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",ft);for(let rt=0;rt<P.length;rt++){const et=U[rt];et!==null&&(U[rt]=null,P[rt].disconnect(et))}G=null,$=null,y.reset();for(const rt in x)delete x[rt];if(t.setRenderTarget(D),S=null,_=null,v=null,o=null,A=null,Wt.stop(),a.isPresenting=!1,t.setPixelRatio(E),t.setSize(O.width,O.height,!1),z!==null){const rt=z.camera;rt.fov=z.fov,rt.zoom=z.zoom,rt.updateProjectionMatrix(),z=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){l=rt,a.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){h=rt,a.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(rt){d=rt},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(rt){if(o=rt,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",V),o.addEventListener("inputsourceschange",ft),R.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Yt=null,zt=null;R.depth&&(zt=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Et=R.stencil?fr:Ja,Yt=R.stencil?Zl:Ma);const Zt={colorFormat:n.RGBA8,depthFormat:zt,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Zt),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new hi(_.textureWidth,_.textureHeight,{format:sa,type:Oi,depthTexture:new jl(_.textureWidth,_.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Et),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new hi(S.framebufferWidth,S.framebufferHeight,{format:sa,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(h),Wt.setContext(o),Wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ft(rt){for(let et=0;et<rt.removed.length;et++){const Et=rt.removed[et],Yt=U.indexOf(Et);Yt>=0&&(U[Yt]=null,P[Yt].disconnect(Et))}for(let et=0;et<rt.added.length;et++){const Et=rt.added[et];let Yt=U.indexOf(Et);if(Yt===-1){for(let Zt=0;Zt<P.length;Zt++)if(Zt>=U.length){U.push(Et),Yt=Zt;break}else if(U[Zt]===null){U[Zt]=Et,Yt=Zt;break}if(Yt===-1)break}const zt=P[Yt];zt&&zt.connect(Et)}}const ot=new k,gt=new k;function I(rt,et,Et){ot.setFromMatrixPosition(et.matrixWorld),gt.setFromMatrixPosition(Et.matrixWorld);const Yt=ot.distanceTo(gt),zt=et.projectionMatrix.elements,Zt=Et.projectionMatrix.elements,de=zt[14]/(zt[10]-1),ct=zt[14]/(zt[10]+1),Ct=(zt[9]+1)/zt[5],Nt=(zt[9]-1)/zt[5],Pt=(zt[8]-1)/zt[0],Ft=(Zt[8]+1)/Zt[0],ce=de*Pt,se=de*Ft,Ot=Yt/(-Pt+Ft),ge=Ot*-Pt;if(et.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ge),rt.translateZ(Ot),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),zt[10]===-1)rt.projectionMatrix.copy(et.projectionMatrix),rt.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Z=de+Ot,_e=ct+Ot,ye=ce-ge,B=se+(Yt-ge),T=Ct*ct/_e*Z,it=Nt*ct/_e*Z;rt.projectionMatrix.makePerspective(ye,B,T,it,Z,_e),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function at(rt,et){et===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(et.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(o===null)return;let et=rt.near,Et=rt.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),tt.near=X.near=H.near=et,tt.far=X.far=H.far=Et,(G!==tt.near||$!==tt.far)&&(o.updateRenderState({depthNear:tt.near,depthFar:tt.far}),G=tt.near,$=tt.far),tt.layers.mask=rt.layers.mask|6,H.layers.mask=tt.layers.mask&-5,X.layers.mask=tt.layers.mask&-3;const Yt=rt.parent,zt=tt.cameras;at(tt,Yt);for(let Zt=0;Zt<zt.length;Zt++)at(zt[Zt],Yt);zt.length===2?I(tt,H,X):tt.projectionMatrix.copy(H.projectionMatrix),z===null&&rt.isPerspectiveCamera&&(z={camera:rt,fov:rt.fov,zoom:rt.zoom}),yt(rt,tt,Yt)};function yt(rt,et,Et){Et===null?rt.matrix.copy(et.matrixWorld):(rt.matrix.copy(Et.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(et.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(et.projectionMatrix),rt.projectionMatrixInverse.copy(et.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Jl*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(rt){p=rt,_!==null&&(_.fixedFoveation=rt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(rt){return x[rt]};let Lt=null;function Ht(rt,et){if(g=et.getViewerPose(d||c),b=et,g!==null){const Et=g.views;S!==null&&(t.setRenderTargetFramebuffer(A,S.framebuffer),t.setRenderTarget(A));let Yt=!1;Et.length!==tt.cameras.length&&(tt.cameras.length=0,Yt=!0);for(let ct=0;ct<Et.length;ct++){const Ct=Et[ct];let Nt=null;if(S!==null)Nt=S.getViewport(Ct);else{const Ft=v.getViewSubImage(_,Ct);Nt=Ft.viewport,ct===0&&(t.setRenderTargetTextures(A,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(A))}let Pt=W[ct];Pt===void 0&&(Pt=new Pi,Pt.layers.enable(ct),Pt.viewport=new _n,W[ct]=Pt),Pt.matrix.fromArray(Ct.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Ct.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ct===0&&(tt.matrix.copy(Pt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Yt===!0&&tt.cameras.push(Pt)}const zt=o.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=a.getBinding();const ct=v.getDepthInformation(Et[0]);ct&&ct.isValid&&ct.texture&&y.init(ct,o.renderState)}if(zt&&zt.includes("camera-access")&&C){t.state.unbindTexture(),v=a.getBinding();for(let ct=0;ct<Et.length;ct++){const Ct=Et[ct].camera;if(Ct){let Nt=x[Ct];Nt||(Nt=new dS,x[Ct]=Nt);const Pt=v.getCameraImage(Ct);Nt.sourceTexture=Pt}}}}for(let Et=0;Et<P.length;Et++){const Yt=U[Et],zt=P[Et];Yt!==null&&zt!==void 0&&zt.update(Yt,et,d||c)}Lt&&Lt(rt,et),et.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:et}),b=null}const Wt=new wS;Wt.setAnimationLoop(Ht),this.setAnimationLoop=function(rt){Lt=rt},this.dispose=function(){}}}const rw=new Ze,PS=new Ee;PS.set(-1,0,0,0,1,0,0,0,1);function ow(s,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,bS(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,R,D,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),v(y,x)):x.isMeshPhongMaterial?(l(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,A)):x.isMeshMatcapMaterial?(l(y,x),b(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),C(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?p(y,x,R,D):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===fi&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===fi&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=t.get(x),D=R.envMap,A=R.envMapRotation;D&&(y.envMap.value=D,y.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(PS),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,R,D){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=D*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.retroreflectivity>0&&(y.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const R=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function lw(s,t,n,a){let o={},l={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,P){const U=P.program;a.uniformBlockBinding(A,U)}function d(A,P){let U=o[A.id];U===void 0&&(y(A),U=g(A),o[A.id]=U,A.addEventListener("dispose",R));const O=P.program;a.updateUBOMapping(A,O);const E=t.render.frame;l[A.id]!==E&&(_(A),l[A.id]=E)}function g(A){const P=v();A.__bindingPointIndex=P;const U=s.createBuffer(),O=A.__size,E=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,O,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,U),U}function v(){for(let A=0;A<h;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const P=o[A.id],U=A.uniforms,O=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let E=0,z=U.length;E<z;E++){const H=U[E];if(Array.isArray(H))for(let X=0,W=H.length;X<W;X++)S(H[X],E,X,O);else S(H,E,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,P,U,O){if(C(A,P,U,O)===!0){const E=A.__offset,z=A.value;if(Array.isArray(z)){let H=0;for(let X=0;X<z.length;X++){const W=z[X],tt=x(W);b(W,A.__data,H),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(z,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,A.__data)}}function b(A,P,U){typeof A=="number"||typeof A=="boolean"?P[0]=A:A.isMatrix3?(P[0]=A.elements[0],P[1]=A.elements[1],P[2]=A.elements[2],P[3]=0,P[4]=A.elements[3],P[5]=A.elements[4],P[6]=A.elements[5],P[7]=0,P[8]=A.elements[6],P[9]=A.elements[7],P[10]=A.elements[8],P[11]=0):ArrayBuffer.isView(A)?P.set(new A.constructor(A.buffer,A.byteOffset,P.length)):A.toArray(P,U)}function C(A,P,U,O){const E=A.value,z=P+"_"+U;if(O[z]===void 0)return typeof E=="number"||typeof E=="boolean"?O[z]=E:ArrayBuffer.isView(E)?O[z]=E.slice():O[z]=E.clone(),!0;{const H=O[z];if(typeof E=="number"||typeof E=="boolean"){if(H!==E)return O[z]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(H.equals(E)===!1)return H.copy(E),!0}}return!1}function y(A){const P=A.uniforms;let U=0;const O=16;for(let z=0,H=P.length;z<H;z++){const X=Array.isArray(P[z])?P[z]:[P[z]];for(let W=0,tt=X.length;W<tt;W++){const G=X[W],$=Array.isArray(G.value)?G.value:[G.value];for(let F=0,V=$.length;F<V;F++){const ft=$[F],ot=x(ft),gt=U%O,I=gt%ot.boundary,at=gt+I;U+=I,at!==0&&O-at<ot.storage&&(U+=O-at),G.__data=new Float32Array(ot.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=U,U+=ot.storage}}}const E=U%O;return E>0&&(U+=O-E),A.__size=U,A.__cache={},this}function x(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):xe("WebGLRenderer: Unsupported uniform value type.",A),P}function R(A){const P=A.target;P.removeEventListener("dispose",R);const U=c.indexOf(P.__bindingPointIndex);c.splice(U,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function D(){for(const A in o)s.deleteBuffer(o[A]);c=[],o={},l={}}return{bind:p,update:d,dispose:D}}const uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function cw(){return pa===null&&(pa=new fS(uw,16,16,mr,Mi),pa.name="DFG_LUT",pa.minFilter=$n,pa.magFilter=$n,pa.wrapS=Ya,pa.wrapT=Ya,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class fw{constructor(t={}){const{canvas:n=UM(),context:a=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Oi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const C=S,y=new Set([A0,T0,E0]),x=new Set([Oi,Ma,Yl,Zl,y0,M0]),R=new Uint32Array(4),D=new Int32Array(4),A=new k;let P=null,U=null;const O=[],E=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let X=!1,W=null,tt=null,G=null,$=null;this._outputColorSpace=xi;let F=0,V=0,ft=null,ot=-1,gt=null;const I=new _n,at=new _n;let yt=null;const Lt=new ee(0);let Ht=0,Wt=n.width,rt=n.height,et=1,Et=null,Yt=null;const zt=new _n(0,0,Wt,rt),Zt=new _n(0,0,Wt,rt);let de=!1;const ct=new P0;let Ct=!1,Nt=!1;const Pt=new Ze,Ft=new k,ce=new _n,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function ge(){return ft===null?et:1}let Z=a;function _e(w,Q){return n.getContext(w,Q)}let ye,B,T,it,lt,Mt,Bt,Vt,St,_t,It,Jt,qt,Xt,ae,oe,pe,J,Gt,Tt,kt,Y,L;try{const w={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${h0}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",Dt,!1),n.addEventListener("webglcontextcreationerror",fe,!1),Z===null){const Q="webgl2";if(Z=_e(Q,w),Z===null)throw _e(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(w){throw n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Xe("WebGLRenderer: "+w.message),w}function nt(){ye=new cA(Z),ye.init(),kt=new ew(Z,ye),B=new tA(Z,ye,t,kt),T=new $3(Z,ye),B.reversedDepthBuffer&&_&&T.buffers.depth.setReversed(!0),tt=Z.createFramebuffer(),G=Z.createFramebuffer(),$=Z.createFramebuffer(),it=new dA(Z),lt=new F3,Mt=new tw(Z,ye,T,lt,B,kt,it),Bt=new uA(H),Vt=new mE(Z),Y=new jT(Z,Vt),St=new fA(Z,Vt,it,Y),_t=new mA(Z,St,Vt,Y,it),J=new pA(Z,B,Mt),ae=new eA(lt),It=new B3(H,Bt,ye,B,Y,ae),Jt=new ow(H,lt),qt=new G3,Xt=new Y3(ye),pe=new QT(H,Bt,T,_t,b,p),oe=new j3(H,_t,B),L=new lw(Z,it,B,T),Gt=new $T(Z,ye,it),Tt=new hA(Z,ye,it),it.programs=It.programs,H.capabilities=B,H.extensions=ye,H.properties=lt,H.renderLists=qt,H.shadowMap=oe,H.state=T,H.info=it}C!==Oi&&(z=new vA(C,n.width,n.height,h,o,l));const K=new sw(H,Z);this.xr=K,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const w=ye.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ye.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(Wt,rt,!1))},this.getSize=function(w){return w.set(Wt,rt)},this.setSize=function(w,Q,xt=!0){if(K.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=w,rt=Q,n.width=Math.floor(w*et),n.height=Math.floor(Q*et),xt===!0&&(n.style.width=w+"px",n.style.height=Q+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(Wt*et,rt*et).floor()},this.setDrawingBufferSize=function(w,Q,xt){Wt=w,rt=Q,et=xt,n.width=Math.floor(w*xt),n.height=Math.floor(Q*xt),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(C===Oi){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(zt)},this.setViewport=function(w,Q,xt,ht){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,Q,xt,ht),T.viewport(I.copy(zt).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(Zt)},this.setScissor=function(w,Q,xt,ht){w.isVector4?Zt.set(w.x,w.y,w.z,w.w):Zt.set(w,Q,xt,ht),T.scissor(at.copy(Zt).multiplyScalar(et).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(w){T.setScissorTest(de=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){Yt=w},this.getClearColor=function(w){return w.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,xt=!0){let ht=0;if(w){let dt=!1;if(ft!==null){const Qt=ft.texture.format;dt=y.has(Qt)}if(dt){const Qt=ft.texture.type,ne=x.has(Qt),Kt=pe.getClearColor(),$t=pe.getClearAlpha(),te=Kt.r,Te=Kt.g,Pe=Kt.b;ne?(R[0]=te,R[1]=Te,R[2]=Pe,R[3]=$t,Z.clearBufferuiv(Z.COLOR,0,R)):(D[0]=te,D[1]=Te,D[2]=Pe,D[3]=$t,Z.clearBufferiv(Z.COLOR,0,D))}else ht|=Z.COLOR_BUFFER_BIT}Q&&(ht|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),xt&&(ht|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ht!==0&&Z.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),W=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",Dt,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),qt.dispose(),Xt.dispose(),lt.dispose(),Bt.dispose(),_t.dispose(),Y.dispose(),L.dispose(),It.dispose(),K.dispose(),K.removeEventListener("sessionstart",Se),K.removeEventListener("sessionend",cn),Zn.stop()};function ut(w){w.preventDefault(),ff("WebGLRenderer: Context Lost."),X=!0}function Dt(){ff("WebGLRenderer: Context Restored."),X=!1;const w=it.autoReset,Q=oe.enabled,xt=oe.autoUpdate,ht=oe.needsUpdate,dt=oe.type;nt(),it.autoReset=w,oe.enabled=Q,oe.autoUpdate=xt,oe.needsUpdate=ht,oe.type=dt}function fe(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Me(w){const Q=w.target;Q.removeEventListener("dispose",Me),Qe(Q)}function Qe(w){zn(w),lt.remove(w)}function zn(w){const Q=lt.get(w).programs;Q!==void 0&&(Q.forEach(function(xt){It.releaseProgram(xt)}),w.isShaderMaterial&&It.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,xt,ht,dt,Qt){Q===null&&(Q=se);const ne=dt.isMesh&&dt.matrixWorld.determinantAffine()<0,Kt=$a(w,Q,xt,ht,dt);T.setMaterial(ht,ne);let $t=xt.index,te=1;if(ht.wireframe===!0){if($t=St.getWireframeAttribute(xt),$t===void 0)return;te=2}const Te=xt.drawRange,Pe=xt.attributes.position;let re=Te.start*te,We=(Te.start+Te.count)*te;Qt!==null&&(re=Math.max(re,Qt.start*te),We=Math.min(We,(Qt.start+Qt.count)*te)),$t!==null?(re=Math.max(re,0),We=Math.min(We,$t.count)):Pe!=null&&(re=Math.max(re,0),We=Math.min(We,Pe.count));const hn=We-re;if(hn<0||hn===1/0)return;Y.setup(dt,ht,Kt,xt,$t);let ln,De=Gt;if($t!==null&&(ln=Vt.get($t),De=Tt,De.setIndex(ln)),dt.isMesh)ht.wireframe===!0?(T.setLineWidth(ht.wireframeLinewidth*ge()),De.setMode(Z.LINES)):De.setMode(Z.TRIANGLES);else if(dt.isLine){let Tn=ht.linewidth;Tn===void 0&&(Tn=1),T.setLineWidth(Tn*ge()),dt.isLineSegments?De.setMode(Z.LINES):dt.isLineLoop?De.setMode(Z.LINE_LOOP):De.setMode(Z.LINE_STRIP)}else dt.isPoints?De.setMode(Z.POINTS):dt.isSprite&&De.setMode(Z.TRIANGLES);if(dt.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))De.renderMultiDraw(dt._multiDrawStarts,dt._multiDrawCounts,dt._multiDrawCount);else{const Tn=dt._multiDrawStarts,ie=dt._multiDrawCounts,Un=dt._multiDrawCount,Ue=$t?Vt.get($t).bytesPerElement:1,ei=lt.get(ht).currentProgram.getUniforms();for(let bi=0;bi<Un;bi++)ei.setValue(Z,"_gl_DrawID",bi),De.render(Tn[bi]/Ue,ie[bi])}else if(dt.isInstancedMesh)De.renderInstances(re,hn,dt.count);else if(xt.isInstancedBufferGeometry){const Tn=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,ie=Math.min(xt.instanceCount,Tn);De.renderInstances(re,hn,ie)}else De.render(re,hn)};function ke(w,Q,xt,ht){W!==null&&w.isNodeMaterial&&W.setObject(ht,w),Ct===!0&&ae.setState(w,xt,!1),w.transparent===!0&&w.side===fn&&w.forceSinglePass===!1?(w.side=fi,w.needsUpdate=!0,ja(w,Q,ht),w.side=dr,w.needsUpdate=!0,ja(w,Q,ht),w.side=fn):ja(w,Q,ht)}this.compile=function(w,Q,xt=null){xt===null&&(xt=w),W!==null&&W.renderStart(w,Q,xt),U=Xt.get(xt),U.init(Q),E.push(U),xt.traverseVisible(function(dt){dt.isLight&&dt.layers.test(Q.layers)&&(U.pushLight(dt),dt.castShadow&&U.pushShadow(dt))}),w!==xt&&w.traverseVisible(function(dt){dt.isLight&&dt.layers.test(Q.layers)&&(U.pushLight(dt),dt.castShadow&&U.pushShadow(dt))}),U.setupLights(),W!==null&&W.updateLights(U.state.lightsArray),Nt=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,Nt),Ct===!0&&ae.setGlobalState(this.clippingPlanes,Q),W!==null&&oe.render(U.state.shadowsArray,xt,Q);const ht=new Set;return w.traverse(function(dt){if(!(dt.isMesh||dt.isPoints||dt.isLine||dt.isSprite))return;const Qt=dt.material;if(Qt)if(Array.isArray(Qt))for(let ne=0;ne<Qt.length;ne++){const Kt=Qt[ne];ke(Kt,xt,Q,dt),ht.add(Kt)}else ke(Qt,xt,Q,dt),ht.add(Qt)}),U=E.pop(),W!==null&&W.renderEnd(),ht},this.compileAsync=function(w,Q,xt=null){const ht=this.compile(w,Q,xt);return new Promise(dt=>{function Qt(){if(ht.forEach(function(ne){const $t=lt.get(ne).currentProgram;($t===void 0||$t.isReady())&&ht.delete(ne)}),ht.size===0){dt(w);return}setTimeout(Qt,10)}ye.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let Be=null;function Ce(w){Be&&Be(w)}function Se(){Zn.stop()}function cn(){Zn.start()}const Zn=new wS;Zn.setAnimationLoop(Ce),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(w){Be=w,K.setAnimationLoop(w),w===null?Zn.stop():Zn.start()},K.addEventListener("sessionstart",Se),K.addEventListener("sessionend",cn),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;W!==null&&W.renderStart(w,Q);const xt=K.enabled===!0&&K.isPresenting===!0,ht=z!==null&&(ft===null||xt)&&z.begin(H,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(Q),Q=K.getCamera()),w.isScene===!0&&w.onBeforeRender(H,w,Q,ft),U=Xt.get(w,E.length),U.init(Q),U.state.textureUnits=Mt.getTextureUnits(),E.push(U),Pt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ct.setFromProjectionMatrix(Pt,va,Q.reversedDepth),Nt=this.localClippingEnabled,Ct=ae.init(this.clippingPlanes,Nt),P=qt.get(w,O.length),P.init(),O.push(P),K.enabled===!0&&K.isPresenting===!0){const ne=H.xr.getDepthSensingMesh();ne!==null&&Fs(ne,Q,-1/0,H.sortObjects)}Fs(w,Q,0,H.sortObjects),P.finish(),W!==null&&W.updateLights(U.state.lightsArray),H.sortObjects===!0&&P.sort(Et,Yt),Ot=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ot&&pe.addToRenderList(P,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ct===!0&&ae.beginShadows();const dt=U.state.shadowsArray;if(oe.render(dt,w,Q),Ct===!0&&ae.endShadows(),(ht&&z.hasRenderPass())===!1){const ne=P.opaque,Kt=P.transmissive;if(U.setupLights(),Q.isArrayCamera){const $t=Q.cameras;if(Kt.length>0)for(let te=0,Te=$t.length;te<Te;te++){const Pe=$t[te];uu(ne,Kt,w,Pe)}Ot&&pe.render(w);for(let te=0,Te=$t.length;te<Te;te++){const Pe=$t[te];lu(P,w,Pe,Pe.viewport)}}else Kt.length>0&&uu(ne,Kt,w,Q),Ot&&pe.render(w),lu(P,w,Q)}ft!==null&&V===0&&(Mt.updateMultisampleRenderTarget(ft),Mt.updateRenderTargetMipmap(ft)),ht&&z.end(H),w.isScene===!0&&w.onAfterRender(H,w,Q),Y.resetDefaultState(),ot=-1,gt=null,E.pop(),E.length>0?(U=E[E.length-1],Mt.setTextureUnits(U.state.textureUnits),Ct===!0&&ae.setGlobalState(H.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,W!==null&&W.renderEnd()};function Fs(w,Q,xt,ht){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)xt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLightProbeGrid)U.pushLightProbeGrid(w);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ct)){ht&&ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pt);const ne=_t.update(w),Kt=w.material;Kt.visible&&P.push(w,ne,Kt,xt,ce.z,null,Q)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ct))){const ne=_t.update(w),Kt=w.material;if(ht&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ce.copy(w.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),ce.copy(ne.boundingSphere.center)),ce.applyMatrix4(w.matrixWorld).applyMatrix4(Pt)),Array.isArray(Kt)){const $t=ne.groups;for(let te=0,Te=$t.length;te<Te;te++){const Pe=$t[te],re=Kt[Pe.materialIndex];re&&re.visible&&P.push(w,ne,re,xt,ce.z,Pe,Q)}}else Kt.visible&&P.push(w,ne,Kt,xt,ce.z,null,Q)}}const Qt=w.children;for(let ne=0,Kt=Qt.length;ne<Kt;ne++)Fs(Qt[ne],Q,xt,ht)}function lu(w,Q,xt,ht){const{opaque:dt,transmissive:Qt,transparent:ne}=w;U.setupLightsView(xt),Ct===!0&&ae.setGlobalState(H.clippingPlanes,xt),ht&&T.viewport(I.copy(ht)),dt.length>0&&Hs(dt,Q,xt),Qt.length>0&&Hs(Qt,Q,xt),ne.length>0&&Hs(ne,Q,xt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function uu(w,Q,xt,ht){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ht.id]===void 0){const re=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ht.id]=new hi(1,1,{generateMipmaps:!0,type:re?Mi:Oi,minFilter:cr,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const Qt=U.state.transmissionRenderTarget[ht.id],ne=ht.viewport||I;Qt.setSize(ne.z*H.transmissionResolutionScale,ne.w*H.transmissionResolutionScale);const Kt=H.getRenderTarget(),$t=H.getActiveCubeFace(),te=H.getActiveMipmapLevel();H.setRenderTarget(Qt),H.getClearColor(Lt),Ht=H.getClearAlpha(),Ht<1&&H.setClearColor(16777215,.5),H.clear(),Ot&&pe.render(xt);const Te=H.toneMapping;H.toneMapping=xa;const Pe=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),U.setupLightsView(ht),Ct===!0&&ae.setGlobalState(H.clippingPlanes,ht),Hs(w,xt,ht),Mt.updateMultisampleRenderTarget(Qt),Mt.updateRenderTargetMipmap(Qt),ye.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let We=0,hn=Q.length;We<hn;We++){const ln=Q[We],{object:De,geometry:Tn,material:ie,group:Un}=ln;if(ie.side===fn&&De.layers.test(ht.layers)){const Ue=ie.side;ie.side=fi,ie.needsUpdate=!0,Qa(De,xt,ht,Tn,ie,Un),ie.side=Ue,ie.needsUpdate=!0,re=!0}}re===!0&&(Mt.updateMultisampleRenderTarget(Qt),Mt.updateRenderTargetMipmap(Qt))}H.setRenderTarget(Kt,$t,te),H.setClearColor(Lt,Ht),Pe!==void 0&&(ht.viewport=Pe),H.toneMapping=Te}function Hs(w,Q,xt){const ht=Q.isScene===!0?Q.overrideMaterial:null;for(let dt=0,Qt=w.length;dt<Qt;dt++){const ne=w[dt],{object:Kt,geometry:$t,group:te}=ne;let Te=ne.material;Te.allowOverride===!0&&ht!==null&&(Te=ht),Kt.layers.test(xt.layers)&&Qa(Kt,Q,xt,$t,Te,te)}}function Qa(w,Q,xt,ht,dt,Qt){W!==null&&dt.isNodeMaterial&&W.setObject(w,dt),w.onBeforeRender(H,Q,xt,ht,dt,Qt),w.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),dt.onBeforeRender(H,Q,xt,ht,w,Qt),dt.transparent===!0&&dt.side===fn&&dt.forceSinglePass===!1?(dt.side=fi,dt.needsUpdate=!0,H.renderBufferDirect(xt,Q,ht,dt,w,Qt),dt.side=dr,dt.needsUpdate=!0,H.renderBufferDirect(xt,Q,ht,dt,w,Qt),dt.side=fn):H.renderBufferDirect(xt,Q,ht,dt,w,Qt),w.onAfterRender(H,Q,xt,ht,dt,Qt)}function ja(w,Q,xt){Q.isScene!==!0&&(Q=se);const ht=lt.get(w),dt=U.state.lights,Qt=U.state.shadowsArray,ne=dt.state.version,Kt=It.getParameters(w,dt.state,Qt,Q,xt,U.state.lightProbeGridArray),$t=It.getProgramCacheKey(Kt);let te=ht.programs;ht.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Q.environment:null,ht.fog=Q.fog;const Te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ht.envMap=Bt.get(w.envMap||ht.environment,Te),ht.envMapRotation=ht.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",Me),te=new Map,ht.programs=te);let Pe=te.get($t);if(Pe!==void 0){if(ht.currentProgram===Pe&&ht.lightsStateVersion===ne)return Ta(w,Kt),Pe}else Kt.uniforms=It.getUniforms(w),W!==null&&w.isNodeMaterial&&W.build(w,xt,Kt),w.onBeforeCompile(Kt,H),Pe=It.acquireProgram(Kt,$t),te.set($t,Pe),ht.uniforms=Kt.uniforms;const re=ht.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(re.clippingPlanes=ae.uniform),Ta(w,Kt),ht.needsLights=cu(w),ht.lightsStateVersion=ne,ht.needsLights&&(re.ambientLightColor.value=dt.state.ambient,re.lightProbe.value=dt.state.probe,re.sunLights.value=dt.state.sun,re.sunLightShadows.value=dt.state.sunShadow,re.directionalLights.value=dt.state.directional,re.directionalLightShadows.value=dt.state.directionalShadow,re.spotLights.value=dt.state.spot,re.spotLightShadows.value=dt.state.spotShadow,re.rectAreaLights.value=dt.state.rectArea,re.ltc_1.value=dt.state.rectAreaLTC1,re.ltc_2.value=dt.state.rectAreaLTC2,re.pointLights.value=dt.state.point,re.pointLightShadows.value=dt.state.pointShadow,re.hemisphereLights.value=dt.state.hemi,re.sunShadowMatrix.value=dt.state.sunShadowMatrix,re.sunShadowCascade.value=dt.state.sunShadowCascade,re.directionalShadowMatrix.value=dt.state.directionalShadowMatrix,re.spotLightMatrix.value=dt.state.spotLightMatrix,re.spotLightMap.value=dt.state.spotLightMap,re.pointShadowMatrix.value=dt.state.pointShadowMatrix),ht.lightProbeGrid=U.state.lightProbeGridArray.length>0,ht.currentProgram=Pe,ht.uniformsList=null,Pe}function Ea(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=nf.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Ta(w,Q){const xt=lt.get(w);xt.outputColorSpace=Q.outputColorSpace,xt.batching=Q.batching,xt.batchingColor=Q.batchingColor,xt.instancing=Q.instancing,xt.instancingColor=Q.instancingColor,xt.instancingMorph=Q.instancingMorph,xt.skinning=Q.skinning,xt.morphTargets=Q.morphTargets,xt.morphNormals=Q.morphNormals,xt.morphColors=Q.morphColors,xt.morphTargetsCount=Q.morphTargetsCount,xt.numClippingPlanes=Q.numClippingPlanes,xt.numIntersection=Q.numClipIntersection,xt.vertexAlphas=Q.vertexAlphas,xt.vertexTangents=Q.vertexTangents,xt.toneMapping=Q.toneMapping}function Gs(w,Q){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;A.setFromMatrixPosition(Q.matrixWorld);for(let xt=0,ht=w.length;xt<ht;xt++){const dt=w[xt];if(dt.texture!==null&&dt.boundingBox.containsPoint(A))return dt}return null}function $a(w,Q,xt,ht,dt){Q.isScene!==!0&&(Q=se),Mt.resetTextureUnits();const Qt=Q.fog,ne=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial?Q.environment:null,Kt=ft===null?H.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Ge.workingColorSpace,$t=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial&&!ht.envMap||ht.isMeshPhongMaterial&&!ht.envMap,te=Bt.get(ht.envMap||ne,$t),Te=ht.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,Pe=!!xt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),re=!!xt.morphAttributes.position,We=!!xt.morphAttributes.normal,hn=!!xt.morphAttributes.color;let ln=xa;ht.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ln=H.toneMapping);const De=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Tn=De!==void 0?De.length:0,ie=lt.get(ht),Un=U.state.lights;if(Ct===!0&&(Nt===!0||w!==gt)){const nn=w===gt&&ht.id===ot;ae.setState(ht,w,nn)}let Ue=!1;ht.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Un.state.version||ie.outputColorSpace!==Kt||dt.isBatchedMesh&&ie.batching===!1||!dt.isBatchedMesh&&ie.batching===!0||dt.isBatchedMesh&&ie.batchingColor===!0&&dt._colorsTexture===null||dt.isBatchedMesh&&ie.batchingColor===!1&&dt._colorsTexture!==null||dt.isInstancedMesh&&ie.instancing===!1||!dt.isInstancedMesh&&ie.instancing===!0||dt.isSkinnedMesh&&ie.skinning===!1||!dt.isSkinnedMesh&&ie.skinning===!0||dt.isInstancedMesh&&ie.instancingColor===!0&&dt.instanceColor===null||dt.isInstancedMesh&&ie.instancingColor===!1&&dt.instanceColor!==null||dt.isInstancedMesh&&ie.instancingMorph===!0&&dt.morphTexture===null||dt.isInstancedMesh&&ie.instancingMorph===!1&&dt.morphTexture!==null||ie.envMap!==te||ht.fog===!0&&ie.fog!==Qt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==ae.numPlanes||ie.numIntersection!==ae.numIntersection)||ie.vertexAlphas!==Te||ie.vertexTangents!==Pe||ie.morphTargets!==re||ie.morphNormals!==We||ie.morphColors!==hn||ie.toneMapping!==ln||ie.morphTargetsCount!==Tn||!!ie.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,ie.__version=ht.version);let ei=ie.currentProgram;Ue===!0&&(ei=ja(ht,Q,dt),W&&ht.isNodeMaterial&&W.onUpdateProgram(ht,ei,ie));let bi=!1,ni=!1,ts=!1;const Ke=ei.getUniforms(),mn=ie.uniforms;if(T.useProgram(ei.program)&&(bi=!0,ni=!0,ts=!0),ht.id!==ot&&(ot=ht.id,ni=!0),ie.needsLights){const nn=Gs(U.state.lightProbeGridArray,dt);ie.lightProbeGrid!==nn&&(ie.lightProbeGrid=nn,ni=!0)}if(bi||gt!==w){T.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ke.setValue(Z,"projectionMatrix",w.projectionMatrix),Ke.setValue(Z,"viewMatrix",w.matrixWorldInverse);const la=Ke.map.cameraPosition;la!==void 0&&la.setValue(Z,Ft.setFromMatrixPosition(w.matrixWorld)),B.logarithmicDepthBuffer&&Ke.setValue(Z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Ke.setValue(Z,"isOrthographic",w.isOrthographicCamera===!0),gt!==w&&(gt=w,ni=!0,ts=!0)}if(ie.needsLights&&(Un.state.sunShadowMap.length>0&&Ke.setValue(Z,"sunShadowMap",Un.state.sunShadowMap,Mt),Un.state.directionalShadowMap.length>0&&Ke.setValue(Z,"directionalShadowMap",Un.state.directionalShadowMap,Mt),Un.state.spotShadowMap.length>0&&Ke.setValue(Z,"spotShadowMap",Un.state.spotShadowMap,Mt),Un.state.pointShadowMap.length>0&&Ke.setValue(Z,"pointShadowMap",Un.state.pointShadowMap,Mt)),dt.isSkinnedMesh){Ke.setOptional(Z,dt,"bindMatrix"),Ke.setOptional(Z,dt,"bindMatrixInverse");const nn=dt.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ke.setValue(Z,"boneTexture",nn.boneTexture,Mt))}dt.isBatchedMesh&&(Ke.setOptional(Z,dt,"batchingTexture"),Ke.setValue(Z,"batchingTexture",dt._matricesTexture,Mt),Ke.setOptional(Z,dt,"batchingIdTexture"),Ke.setValue(Z,"batchingIdTexture",dt._indirectTexture,Mt),Ke.setOptional(Z,dt,"batchingColorTexture"),dt._colorsTexture!==null&&Ke.setValue(Z,"batchingColorTexture",dt._colorsTexture,Mt));const Ii=xt.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&J.update(dt,xt,ei),(ni||ie.receiveShadow!==dt.receiveShadow)&&(ie.receiveShadow=dt.receiveShadow,Ke.setValue(Z,"receiveShadow",dt.receiveShadow)),(ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial)&&ht.envMap===null&&Q.environment!==null&&(mn.envMapIntensity.value=Q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=cw()),ni){if(Ke.setValue(Z,"toneMappingExposure",H.toneMappingExposure),ie.needsLights&&En(mn,ts),Qt&&ht.fog===!0&&Jt.refreshFogUniforms(mn,Qt),Jt.refreshMaterialUniforms(mn,ht,et,rt,U.state.transmissionRenderTarget[w.id]),ie.needsLights&&ie.lightProbeGrid){const nn=ie.lightProbeGrid;mn.probesSH.value=nn.texture,mn.probesMin.value.copy(nn.boundingBox.min),mn.probesMax.value.copy(nn.boundingBox.max),mn.probesResolution.value.copy(nn.resolution)}nf.upload(Z,Ea(ie),mn,Mt)}if(ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(nf.upload(Z,Ea(ie),mn,Mt),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Ke.setValue(Z,"center",dt.center),Ke.setValue(Z,"modelViewMatrix",dt.modelViewMatrix),Ke.setValue(Z,"normalMatrix",dt.normalMatrix),Ke.setValue(Z,"modelMatrix",dt.matrixWorld),ht.uniformsGroups!==void 0){const nn=ht.uniformsGroups;for(let la=0,Ji=nn.length;la<Ji;la++){const Bi=nn[la];L.update(Bi,ei),L.bind(Bi,ei)}}return ei}function En(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.sunLights.needsUpdate=Q,w.sunLightShadows.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function cu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,Q,xt){const ht=lt.get(w);ht.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),lt.get(w.texture).__webglTexture=Q,lt.get(w.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:xt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const xt=lt.get(w);xt.__webglFramebuffer=Q,xt.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(w,Q=0,xt=0){ft=w,F=Q,V=xt;let ht=null,dt=!1,Qt=!1;if(w){const Kt=lt.get(w);if(Kt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(Z.FRAMEBUFFER,Kt.__webglFramebuffer),I.copy(w.viewport),at.copy(w.scissor),yt=w.scissorTest,T.viewport(I),T.scissor(at),T.setScissorTest(yt),ot=-1;return}else if(Kt.__webglFramebuffer===void 0)Mt.setupRenderTarget(w);else if(Kt.__hasExternalTextures)Mt.rebindTextures(w,lt.get(w.texture).__webglTexture,lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(Kt.__boundDepthTexture!==Te){if(Te!==null&&lt.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Qt=!0);const te=lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(te[Q])?ht=te[Q][xt]:ht=te[Q],dt=!0):w.samples>0&&Mt.useMultisampledRTT(w)===!1?ht=lt.get(w).__webglMultisampledFramebuffer:Array.isArray(te)?ht=te[xt]:ht=te,I.copy(w.viewport),at.copy(w.scissor),yt=w.scissorTest}else I.copy(zt).multiplyScalar(et).floor(),at.copy(Zt).multiplyScalar(et).floor(),yt=de;if(xt!==0&&(ht=tt),T.bindFramebuffer(Z.FRAMEBUFFER,ht)&&T.drawBuffers(w,ht),T.viewport(I),T.scissor(at),T.setScissorTest(yt),dt){const Kt=lt.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Kt.__webglTexture,xt)}else if(Qt){const Kt=Q;for(let $t=0;$t<w.textures.length;$t++){const te=lt.get(w.textures[$t]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+$t,te.__webglTexture,xt,Kt)}}else if(w!==null&&xt!==0){const Kt=lt.get(w.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Kt.__webglTexture,xt)}ot=-1};function Po(w){const Q=lt.get(w);return(Q.__readFormat!==w.format||Q.__readType!==w.type)&&(Q.__readFormat=w.format,Q.__readType=w.type,Q.__formatReadable=B.textureFormatReadable(w.format),Q.__typeReadable=B.textureTypeReadable(w.type)),Q}this.readRenderTargetPixels=function(w,Q,xt,ht,dt,Qt,ne,Kt=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&($t=$t[ne]),$t){T.bindFramebuffer(Z.FRAMEBUFFER,$t);try{const te=w.textures[Kt],Te=te.format,Pe=te.type;w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Kt);const re=Po(te);if(re.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-ht&&xt>=0&&xt<=w.height-dt&&Z.readPixels(Q,xt,ht,dt,kt.convert(Te),kt.convert(Pe),Qt)}finally{const te=ft!==null?lt.get(ft).__webglFramebuffer:null;T.bindFramebuffer(Z.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(w,Q,xt,ht,dt,Qt,ne,Kt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ne!==void 0&&($t=$t[ne]),$t)if(Q>=0&&Q<=w.width-ht&&xt>=0&&xt<=w.height-dt){T.bindFramebuffer(Z.FRAMEBUFFER,$t);const te=w.textures[Kt],Te=te.format,Pe=te.type;w.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+Kt);const re=Po(te);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,We),Z.bufferData(Z.PIXEL_PACK_BUFFER,Qt.byteLength,Z.STREAM_READ),Z.readPixels(Q,xt,ht,dt,kt.convert(Te),kt.convert(Pe),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const hn=ft!==null?lt.get(ft).__webglFramebuffer:null;T.bindFramebuffer(Z.FRAMEBUFFER,hn);const ln=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await NM(Z,ln,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,We),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Qt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(We),Z.deleteSync(ln),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,xt=0){const ht=Math.pow(2,-xt),dt=Math.floor(w.image.width*ht),Qt=Math.floor(w.image.height*ht),ne=Q!==null?Q.x:0,Kt=Q!==null?Q.y:0;Mt.setTexture2D(w,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,xt,0,0,ne,Kt,dt,Qt),T.unbindTexture()},this.copyTextureToTexture=function(w,Q,xt=null,ht=null,dt=0,Qt=0){let ne,Kt,$t,te,Te,Pe,re,We,hn;const ln=w.isCompressedTexture?w.mipmaps[Qt]:w.image;if(xt!==null)ne=xt.max.x-xt.min.x,Kt=xt.max.y-xt.min.y,$t=xt.isBox3?xt.max.z-xt.min.z:1,te=xt.min.x,Te=xt.min.y,Pe=xt.isBox3?xt.min.z:0;else{const mn=Math.pow(2,-dt);ne=Math.floor(ln.width*mn),Kt=Math.floor(ln.height*mn),w.isDataArrayTexture?$t=ln.depth:w.isData3DTexture?$t=Math.floor(ln.depth*mn):$t=1,te=0,Te=0,Pe=0}ht!==null?(re=ht.x,We=ht.y,hn=ht.z):(re=0,We=0,hn=0);const De=kt.convert(Q.format),Tn=kt.convert(Q.type);let ie;Q.isData3DTexture?(Mt.setTexture3D(Q,0),ie=Z.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Mt.setTexture2DArray(Q,0),ie=Z.TEXTURE_2D_ARRAY):(Mt.setTexture2D(Q,0),ie=Z.TEXTURE_2D),T.activeTexture(Z.TEXTURE0),T.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),T.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),T.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const Un=T.getParameter(Z.UNPACK_ROW_LENGTH),Ue=T.getParameter(Z.UNPACK_IMAGE_HEIGHT),ei=T.getParameter(Z.UNPACK_SKIP_PIXELS),bi=T.getParameter(Z.UNPACK_SKIP_ROWS),ni=T.getParameter(Z.UNPACK_SKIP_IMAGES);T.pixelStorei(Z.UNPACK_ROW_LENGTH,ln.width),T.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,ln.height),T.pixelStorei(Z.UNPACK_SKIP_PIXELS,te),T.pixelStorei(Z.UNPACK_SKIP_ROWS,Te),T.pixelStorei(Z.UNPACK_SKIP_IMAGES,Pe);const ts=w.isDataArrayTexture||w.isData3DTexture,Ke=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const mn=lt.get(w),Ii=lt.get(Q),nn=lt.get(mn.__renderTarget),la=lt.get(Ii.__renderTarget);T.bindFramebuffer(Z.READ_FRAMEBUFFER,nn.__webglFramebuffer),T.bindFramebuffer(Z.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let Ji=0;Ji<$t;Ji++)ts&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(w).__webglTexture,dt,Pe+Ji),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,lt.get(Q).__webglTexture,Qt,hn+Ji)),Z.blitFramebuffer(te,Te,ne,Kt,re,We,ne,Kt,Z.DEPTH_BUFFER_BIT,Z.NEAREST);T.bindFramebuffer(Z.READ_FRAMEBUFFER,null),T.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(dt!==0||w.isRenderTargetTexture||lt.has(w)){const mn=lt.get(w),Ii=lt.get(Q);T.bindFramebuffer(Z.READ_FRAMEBUFFER,G),T.bindFramebuffer(Z.DRAW_FRAMEBUFFER,$);for(let nn=0;nn<$t;nn++)ts?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,mn.__webglTexture,dt,Pe+nn):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,mn.__webglTexture,dt),Ke?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ii.__webglTexture,Qt,hn+nn):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ii.__webglTexture,Qt),dt!==0?Z.blitFramebuffer(te,Te,ne,Kt,re,We,ne,Kt,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ke?Z.copyTexSubImage3D(ie,Qt,re,We,hn+nn,te,Te,ne,Kt):Z.copyTexSubImage2D(ie,Qt,re,We,te,Te,ne,Kt);T.bindFramebuffer(Z.READ_FRAMEBUFFER,null),T.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ke?w.isDataTexture||w.isData3DTexture?Z.texSubImage3D(ie,Qt,re,We,hn,ne,Kt,$t,De,Tn,ln.data):Q.isCompressedArrayTexture?Z.compressedTexSubImage3D(ie,Qt,re,We,hn,ne,Kt,$t,De,ln.data):Z.texSubImage3D(ie,Qt,re,We,hn,ne,Kt,$t,De,Tn,ln):w.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Qt,re,We,ne,Kt,De,Tn,ln.data):w.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Qt,re,We,ln.width,ln.height,De,ln.data):Z.texSubImage2D(Z.TEXTURE_2D,Qt,re,We,ne,Kt,De,Tn,ln);T.pixelStorei(Z.UNPACK_ROW_LENGTH,Un),T.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Ue),T.pixelStorei(Z.UNPACK_SKIP_PIXELS,ei),T.pixelStorei(Z.UNPACK_SKIP_ROWS,bi),T.pixelStorei(Z.UNPACK_SKIP_IMAGES,ni),Qt===0&&Q.generateMipmaps&&Z.generateMipmap(ie),T.unbindTexture()},this.initRenderTarget=function(w){lt.get(w).__webglFramebuffer===void 0&&Mt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Mt.setTextureCube(w,0):w.isData3DTexture?Mt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Mt.setTexture2DArray(w,0):Mt.setTexture2D(w,0),T.unbindTexture()},this.resetState=function(){F=0,V=0,ft=null,T.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return va}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ge._getUnpackColorSpace()}}const mf=[{start:0,end:7,title:{en:"A foot and five from heaven",zh:"尺五天边"},quote:"京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭",caption:{en:"Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.",zh:"自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。"}},{start:7,end:15,title:{en:"Drunk on the moon, judging flowers",zh:"醉月评花"},quote:"人在大千队里，时时醉月评花。",caption:{en:"Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.",zh:"楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。"}},{start:15,end:22,title:{en:"A playful brush",zh:"游戏之笔"},quote:"遂以游戏之笔，摹写游戏之人。",caption:{en:"On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.",zh:"灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。"}},{start:22,end:29,title:{en:"Fond, never wanton",zh:"好色不淫"},quote:"几个用情守礼之君子，与几个洁身自好的优伶",caption:{en:"At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.",zh:"月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。"}},{start:29,end:36,title:{en:"One word: feeling",zh:"皆是一个情字"},quote:"先将缙绅中子弟分作十种，皆是一个情字。",caption:{en:"The city’s lights gather into ten kinds of people, and all ten are written with the same character: 情, feeling.",zh:"满城灯火聚成十种人物，十种终归一字——情。"}}];function OS(s){const t=mf.findIndex(n=>s<n.end);return t===-1?mf.length-1:t}const Rs=1024,Ds=576,V1="#1b110c",Ol=470,gf=s=>Math.min(1,Math.max(0,s)),zS=s=>{const t=gf(s);return t*t*(3-2*t)};function ui(s,t,n){s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),t.forEach(([a,o],l)=>l?s.lineTo(a,o):s.moveTo(a,o)),s.stroke()}function Fn(s,t,n,a,o=a){s.beginPath(),s.ellipse(t,n,a,o,0,0,Math.PI*2),s.fill()}function vf(s,t,n,a,o,l,c=0){s.beginPath(),s.moveTo(t-o,n),s.quadraticCurveTo(t-o-4,(n+a)/2,t-l+c,a),s.quadraticCurveTo(t+c,a+8,t+l+c,a),s.quadraticCurveTo(t+o+4,(n+a)/2,t+o,n),s.closePath(),s.fill()}function iu(s,t){s.save(),s.shadowBlur=0,s.strokeStyle=s.fillStyle="rgba(255,214,150,0.4)",t(),s.restore()}function hw(s,t,n,a){const o=Math.sin(a*1.3)*3;vf(s,t,n-150,n-4,24,46,o),Fn(s,t,n-150,28,10),Fn(s,t-14,n-2,12,5),Fn(s,t+14+o,n-2,12,5),s.fillRect(t-5,n-168,10,16),Fn(s,t,n-178,15,17),s.beginPath(),s.moveTo(t-16,n-184),s.lineTo(t-14,n-204),s.lineTo(t+14,n-204),s.lineTo(t+16,n-184),s.fill();for(const d of[-1,1])ui(s,[[t+d*12,n-198],[t+d*30,n-186+Math.sin(a*2+d)*4],[t+d*40,n-165+Math.sin(a*2.3+d)*6]],4);ui(s,[[t-24,n-145],[t-36,n-105],[t-30,n-78]],13),Fn(s,t-30,n-72,7);const l=n-150+Math.sin(a*2.1)*10;ui(s,[[t+24,n-145],[t+50,n-118],[t+60,l]],12);const c=.5+1.1*(.5+.5*Math.sin(a*1.6)),h=-Math.PI/2+.35,p=54;s.beginPath(),s.moveTo(t+60,l),s.arc(t+60,l,p,h-c/2,h+c/2),s.closePath(),s.fill(),iu(s,()=>{s.lineWidth=1.5;for(let d=1;d<8;d++){const g=h-c/2+c*d/8;s.beginPath(),s.moveTo(t+60+Math.cos(g)*12,l+Math.sin(g)*12),s.lineTo(t+60+Math.cos(g)*(p-6),l+Math.sin(g)*(p-6)),s.stroke()}vf(s,t,n-120,n-112,10,10)})}function dw(s,t,n,a){const o=Math.cos(a*1.5);s.save(),s.translate(t,0),s.scale((o<0?-1:1)*(.42+.58*Math.abs(o)),1);const l=Math.sin(a*3)*3;vf(s,0,n-148+l,n-4,20,60+Math.sin(a*3)*6,Math.sin(a*1.5)*8),Fn(s,0,n-148+l,24,9),s.fillRect(-4,n-166+l,8,14),Fn(s,0,n-176+l,14,16),Fn(s,0,n-195+l,12,9);for(let c=-2;c<=2;c++)Fn(s,c*9,n-201+l-(2-Math.abs(c))*3,3.2);ui(s,[[12,n-196+l],[26,n-186+l],[28,n-168+l]],2);for(const c of[-1,1]){const h=a*2.2+(c>0?0:Math.PI*.6),p=[c*(58+Math.cos(h)*10),n-196+l-Math.sin(h)*30];ui(s,[[c*22,n-144+l],[c*(44+Math.sin(h)*6),n-160+l-Math.sin(h)*20],p],11);let d=p;for(let g=1;g<=11;g++){const v=[p[0]+c*g*9+Math.sin(h*1.3-g*.6)*g*3.2,p[1]-Math.sin(h-g*.5)*g*4+g*g*1.1];ui(s,[d,v],17-g),d=v}}iu(s,()=>{for(let c=0;c<3;c++)Fn(s,0,n-120+l+c*22,4)}),s.restore()}function pw(s,t,n,a){const o=a%2.2/2.2,l=gf((o-.25)/.6),c=Math.sin(Math.PI*l)*120,h=o<.25?Math.sin(o/.25*Math.PI)*12:0,p=Math.sin(Math.PI*l);s.save(),s.translate(t,n-78-c+h),s.rotate(zS(l)*Math.PI*2);for(const d of[-1,1])ui(s,[[d*9,0],[d*(14+p*6+h*.6),38-p*30-h],[d*12,74-p*50-h]],12),Fn(s,d*16,78-p*50-h,9,5);s.beginPath(),s.moveTo(-18,-62),s.lineTo(18,-62),s.lineTo(24,6),s.lineTo(-24,6),s.closePath(),s.fill(),Fn(s,0,-62,22,8),Fn(s,0,-86,14,15),ui(s,[[-12,-92],[-30,-86+Math.sin(a*9)*4],[-42,-94+Math.sin(a*7)*6]],3);for(const d of[-1,1])ui(s,[[d*18,-58],[d*(40-p*14),-58+p*20-(1-p)*18],[d*(52-p*30),-78+p*50]],10);iu(s,()=>{s.lineWidth=2,s.beginPath(),s.moveTo(-14,-30),s.lineTo(14,-30),s.moveTo(-16,-14),s.lineTo(16,-14),s.stroke()}),s.restore()}function mw(s,t,n,a){const o=Math.abs(Math.sin(a*3.2))*16;s.save(),s.translate(t,n-o),s.rotate(Math.sin(a*3.2)*.08),vf(s,0,-120,-30,26,42);for(const p of[-1,1])ui(s,[[p*14,-34],[p*22,-16],[p*16,0]],11),Fn(s,p*20,2,11,5);Fn(s,0,-120,30,10),Fn(s,0,-142,16,15),s.beginPath(),s.moveTo(-17,-150),s.quadraticCurveTo(-6,-200,22,-222),s.quadraticCurveTo(4,-190,17,-150),s.closePath(),s.fill(),Fn(s,24,-224,7),iu(s,()=>s.fillRect(-6,-148,12,9)),ui(s,[[-24,-116],[-44,-96],[-26,-80]],10),ui(s,[[24,-116],[44,-100],[52,-120]],10),ui(s,[[52,-120],[66,-232]],4);const l=Math.sin(a*3.2+.8)*.3,c=88+Math.sin(l)*18,h=-192;ui(s,[[66,-232],[84,-226],[c,h-18]],2),Fn(s,c,h,15,19),iu(s,()=>{s.lineWidth=1.6;for(const p of[-7,0,7])s.beginPath(),s.moveTo(c+p,h-14),s.lineTo(c+p,h+14),s.stroke()}),ui(s,[[c,h+18],[c,h+32]],3),s.restore()}function gw(s,t,n,a){s.save(),s.shadowBlur=16,s.shadowColor="rgba(27,17,12,0.8)",s.translate(t,n),s.rotate(.38+a),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-10,-22,-7,-46),s.lineTo(7,-46),s.quadraticCurveTo(10,-22,0,0),s.fill(),s.fillRect(-7,-58,14,12),s.fillRect(-5,-260,10,204),s.restore()}const vw=[{x:190,draw:hw},{x:420,draw:dw},{x:650,draw:pw},{x:860,draw:mw}];function _w(){const s=document.createElement("canvas");s.width=Rs,s.height=Ds;const t=s.getContext("2d"),n=document.createElement("canvas");n.width=Rs,n.height=Ds;const a=n.getContext("2d"),o=a.createRadialGradient(Rs/2,Ds*.62,40,Rs/2,Ds*.55,Rs*.62);o.addColorStop(0,"#fff1cc"),o.addColorStop(.45,"#f3c27c"),o.addColorStop(1,"#8a4a1e"),a.fillStyle=o,a.fillRect(0,0,Rs,Ds);let l=7;const c=()=>(l=l*16807%2147483647)/2147483647;a.globalAlpha=.08,a.strokeStyle="#6b3b16",a.lineWidth=1;for(let p=0;p<280;p++){const d=c()*Rs,g=c()*Ds,v=10+c()*40,_=c()*Math.PI;a.beginPath(),a.moveTo(d,g),a.quadraticCurveTo(d+Math.cos(_)*v*.5+(c()-.5)*8,g+Math.sin(_)*v*.5,d+Math.cos(_)*v,g+Math.sin(_)*v),a.stroke()}function h(p){t.shadowBlur=0,t.drawImage(n,0,0),t.fillStyle=`rgba(60,25,5,${.07+.04*Math.sin(p*9.1)*Math.sin(p*3.3)})`,t.fillRect(0,0,Rs,Ds),t.fillStyle=V1,t.strokeStyle=V1,t.shadowColor="rgba(27,17,12,0.7)",t.shadowBlur=5;const d=zS((p-.2)/1.2);let g=null;if(d>0){const b=50+924*d,C=[],y=[];for(let x=50;x<=b;x+=8){const R=(x-50)/924,D=1.5+6*Math.pow(Math.sin(Math.PI*R),.5),A=Ol+8+Math.sin(x*.013)*3;C.push([x,A-D]),y.push([x,A+D*.8])}t.beginPath(),[...C,...y.reverse()].forEach(([x,R],D)=>D?t.lineTo(x,R):t.moveTo(x,R)),t.closePath(),t.fill(),d<1&&(g=[b,Ol+8])}vw.forEach((_,S)=>{const b=gf((p-1.3-S*1.05)/.9);if(b<=0)return;const C=Ol+30-b*330;t.save(),t.beginPath(),t.rect(_.x-140,C,280,Ds),t.clip(),_.draw(t,_.x,Ol,p),t.restore(),b<1&&(g=[_.x+Math.sin(p*22)*55*(1-b*.4),C+Math.cos(p*17)*8])});const v=gf((p-5.4)/.9);!g&&v<1&&(g=p<5.4?null:[860+v*180,Ol-300-v*260]),g&&gw(t,g[0],g[1],Math.sin(p*20)*.12)}return{canvas:s,draw:h}}const af={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sw=new wf(-1,1,1,-1,0,1);class xw extends on{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const yw=new xw;class H0{constructor(t){this._mesh=new di(yw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Sw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mw extends Lo{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof vn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=nu.clone(t.uniforms),this.material=new vn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new H0(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class k1 extends Lo{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,h;this.inverse?(c=0,h=1):(c=1,h=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,c,4294967295),l.buffers.stencil.setClear(h),l.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class bw extends Lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ew{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new wt);this._width=a.width,this._height=a.height,n=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mw(af),this.copyPass.material.blending=Sa,this.timer=new hE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,l=this.passes.length;o<l;o++){const c=this.passes[o];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),c.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),c.needsSwap){if(a){const h=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}k1!==void 0&&(c instanceof k1?a=!0:c instanceof bw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tw extends Lo{constructor(t,n,a=null,o=null,l=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),t.autoClear=o}}const Aw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ee(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ro extends Lo{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(l,c,{type:Mi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const v=new hi(l,c,{type:Mi,depthBuffer:!1});v.texture.name="UnrealBloomPass.h"+g,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new hi(l,c,{type:Mi,depthBuffer:!1});_.texture.name="UnrealBloomPass.v"+g,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),l=Math.round(l/2),c=Math.round(c/2)}const h=Aw;this.highPassUniforms=nu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new wt(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=nu.clone(af.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:af.vertexShader,fragmentShader:af.fragmentShader,premultipliedAlpha:!0,blending:zs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ee,this._oldClearAlpha=1,this._basic=new yi,this._fsQuad=new H0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(a,o),this.renderTargetsVertical[l].setSize(a,o),this.separableBlurMaterials[l].uniforms.invSize.value=new wt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const c=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[p].uniforms.direction.value=Ro.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Ro.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=c}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let c=0;c<t;c++)n.push(.39894*Math.exp(-.5*c*c/(a*a))/a);const o=[],l=[];for(let c=1;c<t;c+=2){const h=n[c],p=c+1<t?n[c+1]:0,d=h+p;o.push((c*h+(c+1)*p)/d),l.push(d)}return new vn({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:o},gaussianWeights:{value:l}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new vn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ro.BlurDirectionX=new wt(1,0);Ro.BlurDirectionY=new wt(0,1);const Kc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ww extends Lo{constructor(){super(),this.isOutputPass=!0,this.uniforms=nu.clone(Kc.uniforms),this.material=new ES({name:Kc.name,uniforms:this.uniforms,vertexShader:Kc.vertexShader,fragmentShader:Kc.fragmentShader}),this._fsQuad=new H0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===p0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===m0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===g0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===S0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===v0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Cw(s,t=!1){const n=s[0].index!==null,a=new Set(Object.keys(s[0].attributes)),o=new Set(Object.keys(s[0].morphAttributes)),l={},c={},h=s[0].morphTargetsRelative,p=new on;let d=0;for(let g=0;g<s.length;++g){const v=s[g];let _=0;if(n!==(v.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in v.attributes){if(!a.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;l[S]===void 0&&(l[S]=[]),l[S].push(v.attributes[S]),_++}if(_!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==v.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in v.morphAttributes){if(!o.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;c[S]===void 0&&(c[S]=[]),c[S].push(v.morphAttributes[S])}if(t){let S;if(n)S=v.index.count;else if(v.attributes.position!==void 0)S=v.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;p.addGroup(d,S,g),d+=S}}if(n){let g=0;const v=[];for(let _=0;_<s.length;++_){const S=s[_].index;for(let b=0;b<S.count;++b)v.push(S.getX(b)+g);g+=s[_].attributes.position.count}p.setIndex(v)}for(const g in l){const v=X1(l[g]);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;p.setAttribute(g,v)}for(const g in c){const v=c[g][0].length;if(v!==0){p.morphAttributes=p.morphAttributes||{},p.morphAttributes[g]=[];for(let _=0;_<v;++_){const S=[];for(let C=0;C<c[g].length;++C)S.push(c[g][C][_]);const b=X1(S);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;p.morphAttributes[g].push(b)}}}return p}function X1(s){let t,n,a,o=-1,l=0;for(let d=0;d<s.length;++d){const g=s[d];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;l+=g.count*n}const c=new t(l),h=new we(c,n,a);let p=0;for(let d=0;d<s.length;++d){const g=s[d];if(g.isInterleavedBufferAttribute){const v=p/n;for(let _=0,S=g.count;_<S;_++)for(let b=0;b<n;b++){const C=g.getComponent(_,b);h.setComponent(_+v,b,C)}}else c.set(g.array,p);p+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const hr=36;new ee(.11,.09,.08),new ee(.64,.19,.13);const Do=s=>Math.min(1,Math.max(0,s)),Li=s=>{const t=Do(s);return t*t*(3-2*t)};function Rw(s){return()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function IS(s,t){const n=s.getAttribute("position").count,a=new Float32Array(n*3);for(let o=0;o<n;o++)t.toArray(a,o*3);return s.setAttribute("color",new we(a,3)),s}function au(s,t,n,a){const c=[],h=[],p=[];for(let g=0;g<=8;g++)for(let v=0;v<=12;v++){const _=v/12*2-1,S=g/8*2-1,b=Math.min((1-Math.abs(S))*t/2,(1-Math.abs(_))*s/2)/(t/2);if(c.push(_*s/2,n*Math.pow(Math.min(1,b),1.5)+n*.25*Math.pow(Math.abs(_*S),5),S*t/2),h.push(v/12,g/8),v<12&&g<8){const C=g*13+v,y=C+12+1;p.push(C,y,C+1,C+1,y,y+1)}}const d=new on;return d.setAttribute("position",new Le(c,3)),d.setAttribute("uv",new Le(h,2)),d.setIndex(p),d.computeVertexNormals(),IS(d.toNonIndexed(),a)}function yo(s,t,n){const a=(o,l,c,h,p)=>IS(new xr(o,l,c).translate(0,h,0).toNonIndexed(),new ee(p));return Cw([a(.96,.08,.72,.04,n),a(.8,.42,.56,.29,t),au(1.12,.86,.36,new ee(s)).translate(0,.5,0)])}function Mo(s,t,n,a){const o=new Wn(s,t,4,6).translate(0,t/2,0),l=o.getAttribute("position"),c=[],h=new ee(n),p=new ee(a),d=new ee;for(let g=0;g<l.count;g++){const v=l.getX(g),_=l.getY(g)/t,S=.3+.7*Math.sin(Math.min(1,_*1.6)*Math.PI/2);l.setXYZ(g,v*S,l.getY(g)+Math.sin(v*60)*.004*_,(v/(s/2))**2*s*.3+Math.sin(_*Math.PI)*t*.1),d.lerpColors(h,p,Math.pow(Math.max(0,_),.8)).toArray(c,c.length)}return o.setAttribute("color",new Le(c,3)),o.computeVertexNormals(),o}const Dw=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,Uw=`
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
  }`,Nw=`
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
  }`,su=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`;function BS(s,t,n,a,o){const l=new fw({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(devicePixelRatio,1.6)),l.outputColorSpace=xi,l.toneMapping=xf,l.toneMappingExposure=1.1,l.domElement.setAttribute("aria-hidden","true"),l.domElement.style.cssText="width:100%;height:100%;display:block",s.appendChild(l.domElement);const c=new ub,h=new U0(2763846,.0055);c.fog=h;const p=new Pi(40,1,.05,1200),d=new Ew(l);d.addPass(new Tw(c,p));const g=new Ro(new wt(256,256),.9,.55,.85);d.addPass(g),d.addPass(new ww);const v=new Set;let _=!1,S=!1,b=0,C=0,y=-1,x,R=()=>{};const D=P=>{P.preventDefault(),S=!1,R(),n()},A=()=>{if(_)return;_=!0,x==null||x.disconnect(),l.setAnimationLoop(null),document.removeEventListener("visibilitychange",R),l.domElement.removeEventListener("webglcontextlost",D);const P=new Set;c.traverse(U=>{const O=U;O.geometry&&!(U instanceof L0)&&O.geometry.dispose(),O.material&&[].concat(O.material).forEach(E=>P.add(E))}),P.forEach(U=>U.dispose()),v.forEach(U=>U.dispose()),g.dispose(),d.dispose(),l.dispose(),l.forceContextLoss(),l.domElement.remove()};try{const P=Rw(a),U={uTime:{value:0},uScale:{value:1}},O=(et,Et=0,Yt=0,zt=0)=>{const Zt=new Bl;return Zt.position.set(Et,Yt,zt),et.add(Zt),Zt},E=(et,Et,Yt,zt=0,Zt=0,de=0)=>{const ct=new di(et,Et);return ct.position.set(zt,Zt,de),Yt.add(ct),ct},z=(et,Et,[Yt,zt,Zt],[de,ct,Ct])=>E(new xr(de,ct,Ct),Et,et,Yt,zt,Zt),H=et=>{const Et=new yb(et);return Et.colorSpace=xi,v.add(Et),Et},X=(et,Et={})=>new aE({color:et,...Et}),W=new yi({color:329483,side:fn}),tt=(et,Et)=>{const Yt=new on,zt=new Float32Array(Et.length*3),Zt=new Float32Array(Et.length*3),de=new Float32Array(Et.length),ct=new Float32Array(Et.length),Ct=new Float32Array(Et.length);Et.forEach(([Pt,Ft,ce,se],Ot)=>{zt.set(Pt,Ot*3),Ft.toArray(Zt,Ot*3),de[Ot]=ce,ct[Ot]=se,Ct[Ot]=P()}),Yt.setAttribute("position",new we(zt,3)),Yt.setAttribute("aColor",new we(Zt,3)),Yt.setAttribute("aSize",new we(de,1)),Yt.setAttribute("aOn",new we(ct,1)),Yt.setAttribute("aSeed",new we(Ct,1));const Nt=new Ql(Yt,new vn({uniforms:U,vertexShader:Nw,fragmentShader:su,blending:zs,transparent:!0,depthWrite:!1}));return Nt.frustumCulled=!1,et.add(Nt),Nt},G=(et,Et=16753228)=>new ee(Et).multiplyScalar(et),$=(et,[Et,Yt,zt],Zt=1)=>{const de=O(et,Et,Yt,zt);de.scale.setScalar(Zt);const ct=new _a({color:13123626,emissive:16734756,emissiveIntensity:1.8,roughness:.6}),Ct=new _a({color:9071156,roughness:.5,metalness:.4});return E(new jn(1,16,12),ct,de).scale.set(.22,.27,.22),E(new qn(.12,.12,.05,12),Ct,de,0,.27,0),E(new qn(.12,.12,.05,12),Ct,de,0,-.27,0),E(new qn(.008,.008,.6,4),Ct,de,0,.58,0),E(new qn(.03,.005,.28,6),ct,de,0,-.43,0),de},F=et=>{const Et=new gr(et.map(([,Zt])=>new k(...Zt)),!1,"centripetal"),Yt=new gr(et.map(([,,Zt])=>new k(...Zt)),!1,"centripetal"),zt=new k;return Zt=>{const de=et[0][0],ct=et[et.length-1][0],Ct=de+(ct-de)*Li((Zt-de)/(ct-de));let Nt=0;for(;Nt<et.length-2&&Ct>et[Nt+1][0];)Nt++;const Pt=(Nt+Do((Ct-et[Nt][0])/(et[Nt+1][0]-et[Nt][0])))/(et.length-1);p.position.copy(Et.getPoint(Pt)),p.lookAt(Yt.getPoint(Pt,zt))}},V=new vn({uniforms:{uTop:{value:new ee},uHorizon:{value:new ee},uGlow:{value:new ee},uMoon:{value:new k},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:Dw,fragmentShader:Uw,side:fi,depthWrite:!1,fog:!1}),ft=E(new jn(500,48,24),V,c);ft.renderOrder=-1,ft.frustumCulled=!1,c.add(new oE(8228799,2760476,.55));const ot=new F0(11124198,1.1);c.add(ot,ot.target);const gt=new k;let I;const yt=o({scene:c,camera:p,rand:P,shared:U,ink:W,group:O,mesh:E,box:z,lambert:X,canvasTexture:H,glows:tt,warm:G,lantern:$,path:F,setEnv:et=>{et!==I&&(I=et,V.uniforms.uTop.value.setHex(et.top),V.uniforms.uHorizon.value.setHex(et.horizon),V.uniforms.uGlow.value.setHex(et.glow),gt.set(et.moon[0],et.moon[1],et.moon[2]).normalize(),V.uniforms.uMoon.value.copy(gt),V.uniforms.uMoonSize.value=et.moonSize,V.uniforms.uMoonGain.value=et.moonGain,V.uniforms.uStars.value=et.stars,g.strength=et.bloom,h.color.setHex(et.fog),h.density=et.density,ot.intensity=et.moon[1]>0?1.1:.15)},portrait:()=>p.aspect<.9}),Lt=()=>{U.uTime.value=b,yt(b),ot.position.copy(p.position).addScaledVector(gt,100),ot.target.position.copy(p.position),ft.position.copy(p.position),d.render()},Ht=40,Wt=()=>{if(_)return;const{width:et,height:Et}=s.getBoundingClientRect(),Yt=Math.max(1,et),zt=Math.max(1,Et);l.setSize(Yt,zt,!1),d.setPixelRatio(l.getPixelRatio()),d.setSize(Yt,zt),p.aspect=Yt/zt;const Zt=2*Math.atan(Math.tan(Ki.degToRad(Ht)/2)*1.6);p.fov=Math.min(75,Math.max(Ht,Ki.radToDeg(2*Math.atan(Math.tan(Zt/2)/p.aspect)))),p.updateProjectionMatrix(),U.uScale.value=zt*l.getPixelRatio()/(2*Math.tan(Ki.degToRad(p.fov)/2)),Lt()},rt=et=>{C&&S&&!document.hidden&&(b=Math.min(hr,b+Math.min((et-C)/1e3,.1))),C=et,Lt(),Math.floor(b*12)!==y&&(y=Math.floor(b*12),t(b)),b>=hr&&(S=!1,l.setAnimationLoop(null))};return R=()=>{C=0,l.setAnimationLoop(S&&!document.hidden?rt:null)},x=new ResizeObserver(Wt),x.observe(s),document.addEventListener("visibilitychange",R),l.domElement.addEventListener("webglcontextlost",D),Wt(),{setPlaying(et){S=et,R()},seek(et){b=Ki.clamp(et,0,hr),t(b),Lt(),R()},replay(){b=0,t(0),Lt(),R()},dispose:A}}catch(P){throw A(),P}}const ri={shadow:400,gate:800,glyph:1200},Lw=[{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:329483,horizon:1314315,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:.6,stars:.3,fog:723208,density:.02},{top:858673,horizon:4082280,glow:0,moon:[0,.075,-1],moonSize:.07,moonGain:1.05,bloom:.5,stars:.6,fog:3029590,density:.016},{top:197899,horizon:724506,glow:1575942,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:1,stars:1,fog:197899,density:0}],Pw=`
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
  }`,Ow=`
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
  }`,zw=`
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
  }`;function Iw(s,t,n){return BS(s,t,n,20260925,({scene:a,camera:o,rand:l,shared:c,ink:h,group:p,mesh:d,box:g,lambert:v,canvasTexture:_,glows:S,warm:b,lantern:C,path:y,setEnv:x,portrait:R})=>{const D=p(a);d(new Wn(1400,1400).rotateX(-Math.PI/2),v(1185053),D);const A=[];for(let L=-9;L<=9;L++)for(let nt=-10;nt<=2;nt++){const K=L*16,ut=nt*16;if(!(L===0&&ut>-40)&&!(Math.abs(L)<=2&&ut<=-36))for(const Dt of[-3.25,3.25])for(const fe of[-3.25,3.25]){if(l()>.82)continue;const Me=4+l()*2.2,Qe=l()<.06;A.push({x:K+Dt+(l()-.5),z:ut+fe+(l()-.5),w:Me,h:Me*(.75+l()*.3)*(Qe?1.45:1),d:Me*(.7+l()*.15),stage:Qe})}}const P=v(16777215,{vertexColors:!0,side:fn}),U=new ga(yo(1712691,3352095,3816773),P,A.length),O=new Ze,E=new ee;A.forEach((L,nt)=>{O.makeScale(L.w,L.h,L.d).setPosition(L.x,0,L.z),U.setMatrixAt(nt,O),U.setColorAt(nt,E.setScalar(.8+l()*.4))}),D.add(U);const z=yo(7163936,5904660,9342870),H=new ga(z,P,4);[[0,6,-38,28],[0,2.4,-64,30],[0,2.4,-88,20],[0,2.4,-112,32]].forEach(([L,nt,K,ut],Dt)=>{H.setMatrixAt(Dt,O.makeScale(ut,ut*.85,ut*.72).setPosition(L,nt,K))}),D.add(H);const X=v(5117716),W=v(8224648);g(D,X,[0,3,-38],[34,6,10]);for(const L of[-64,-88,-112])g(D,W,[0,1.2,L],[40,2.4,26]);for(const L of[-38,38])g(D,X,[L,3,-86],[1.2,6,96]);g(D,X,[0,3,-134],[77,6,1.2]),[[-430,1777718,60],[-360,2304066,36]].forEach(([L,nt,K])=>{const ut=new zi;ut.moveTo(-900,-40);for(let Dt=-900;Dt<=900;Dt+=30)ut.lineTo(Dt,8+K*(.5+.3*Math.sin(Dt*.011+L)+.2*Math.sin(Dt*.031)));ut.lineTo(900,-40),d(new Tf(ut),new yi({color:nt,fog:!1}),D,0,0,L)});const tt=[];for(const L of A){const nt=Math.hypot(L.x,L.z+60);for(const ut of[-.2,.2])l()<.55&&tt.push([[L.x+ut*L.w,.3*L.h,L.z+.3*L.d],b(.45+l()*.3,16758896),.9,-1]);if(!L.stage)continue;const K=1.4+nt/180*4.2+l()*.4;for(let ut=0;ut<6;ut++)tt.push([[L.x+(ut/5-.5)*.8*L.w,.46*L.h,L.z+.46*L.d],b(2.6,16742970),.55,K+ut*.05]);tt.push([[L.x,.3*L.h,L.z+.6*L.d],b(.35),16,K])}for(let L=0;L<12;L++)for(const nt of[-6,6])tt.push([[nt,1.6,30-L*6],b(2.2,16734762),.5,.9+(12-L)*.08]);for(let L=0;L<9;L++)tt.push([[(L-4)*3.2,7.5,-32.5],b(2.4,16736304),.6,.6]);S(D,tt);{const nt=new on,K=new Float32Array(3200*3),ut=new Float32Array(3200*3),Dt=new Float32Array(3200*3),fe=new Float32Array(3200),Me=new Float32Array(3200),Qe=new Float32Array(3200),zn=[16752714,16741176,16762496];for(let Be=0;Be<3200;Be++){const Ce=l()<.5?1:-1;if(Be<1500)K.set([(l()-.5)*9,1,Ce>0?-34:50],Be*3),ut.set([0,0,Ce],Be*3),fe[Be]=84;else if(l()<.5){const Se=(Math.floor(l()*18)-9)*16+8+(l()-.5)*2;K.set([Se,1,Ce>0?-168:40],Be*3),ut.set([0,0,Ce],Be*3),fe[Be]=208}else{const Se=(Math.floor(l()*13)-10)*16+8+(l()-.5)*2;K.set([Ce>0?-152:152,1,Se],Be*3),ut.set([Ce,0,0],Be*3),fe[Be]=304}new ee(zn[Be%3]).multiplyScalar(1.1+l()*.9).toArray(Dt,Be*3),Me[Be]=1+l()*1.2,Qe[Be]=l()}nt.setAttribute("position",new we(K,3)),nt.setAttribute("aDirection",new we(ut,3)),nt.setAttribute("aColor",new we(Dt,3)),nt.setAttribute("aLength",new we(fe,1)),nt.setAttribute("aSpeed",new we(Me,1)),nt.setAttribute("aSeed",new we(Qe,1));const ke=new Ql(nt,new vn({uniforms:c,vertexShader:Pw,fragmentShader:su,blending:zs,transparent:!0,depthWrite:!1}));ke.frustumCulled=!1,D.add(ke)}{const L=document.createElement("canvas");L.width=L.height=256;const nt=L.getContext("2d");for(let ut=0;ut<14;ut++){const Dt=60+l()*136,fe=90+l()*76,Me=30+l()*60,Qe=nt.createRadialGradient(Dt,fe,0,Dt,fe,Me);Qe.addColorStop(0,"rgba(255,255,255,0.35)"),Qe.addColorStop(1,"rgba(255,255,255,0)"),nt.fillStyle=Qe,nt.fillRect(0,0,256,256)}const K=new N0({map:_(L),color:5924240,transparent:!0,opacity:.42,depthWrite:!1,fog:!1});for(let ut=0;ut<16;ut++){const Dt=new L0(K);Dt.position.set((l()-.5)*170,55+l()*55,-30+l()*170),Dt.scale.set(50+l()*50,22+l()*18,1),D.add(Dt)}}const G=p(D,0,16,52),$=v(3806482),F=v(2824724);g(G,F,[0,-.1,.5],[8,.2,5]),g(G,$,[0,.92,-1.3],[7.4,.07,.08]),g(G,$,[0,.12,-1.3],[7.4,.07,.08]);for(let L=-3.6;L<=3.61;L+=.4)g(G,$,[L,.52,-1.3],[.045,.8,.045]);for(const L of[-3.7,3.7])g(G,$,[L,2.2,-1.3],[.2,4.6,.2]);g(G,$,[0,4.4,-1.3],[7.8,.25,.22]),g(G,F,[0,.77,.5],[1.7,.06,1]);for(const L of[-.75,.75])for(const nt of[.1,.9])g(G,F,[L,.37,nt],[.06,.74,.06]);const V=new _a({color:9418918,roughness:.25,side:fn}),ft=d(new Ao([[0,0],[.03,0],[.035,.008],[.06,.03],[.075,.062],[.071,.064]].map(([L,nt])=>new wt(L,nt)),32),V,G,.35,.8,.55),ot=new vn({uniforms:{uTime:c.uTime,uHit:{value:13.4}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:zw,transparent:!0});d(new Mf(.068,48).rotateX(-Math.PI/2),ot,ft,0,.05,0);const gt=d(new Ao([[0,0],[.06,0],[.085,.03],[.1,.1],[.085,.2],[.05,.27],[.042,.3],[.055,.33]].map(([L,nt])=>new wt(L,nt)),48),new _a({color:2902630,roughness:.3}),G,-.15,.8,.28);d(new qn(.008,.01,.2,5),v(2637854),gt,0,.42,0);const I=v(3099174,{side:fn});for(const[L,nt]of[[.6,.4],[2.6,.44],[4.4,.37]]){const K=d(new jn(1,8,6),I,gt,Math.cos(L)*.09,nt,Math.sin(L)*.09);K.scale.set(.1,.012,.04),K.rotation.set(0,-L,-.4)}const at=p(gt,0,.5,0);at.scale.setScalar(1.4);const yt=new _a({vertexColors:!0,roughness:.55,side:fn,emissive:3803154}),Lt=[{n:6,r:.01,w:.05,h:.06},{n:9,r:.025,w:.08,h:.09},{n:12,r:.04,w:.1,h:.11},{n:14,r:.055,w:.12,h:.12}],Ht=new ga(Mo(1,1,6949922,16098228),yt,Lt.reduce((L,nt)=>L+nt.n,0));at.add(Ht),d(new jn(.025,10,8),new _a({color:15253578,emissive:5913096}),at);const Wt=new oa(0,0,0,"YXZ"),rt=new Is,et=new k,Et=new k,Yt=L=>{let nt=0;Lt.forEach((K,ut)=>{for(let Dt=0;Dt<K.n;Dt++){const fe=Dt/K.n*Math.PI*2+ut*.7,Me=Ki.lerp(.12+ut*.08,.3+ut*.38,L);et.set(-Math.sin(fe)*K.r,0,-Math.cos(fe)*K.r),rt.setFromEuler(Wt.set(-Me,fe,0)),Ht.setMatrixAt(nt++,O.compose(et,rt,Et.set(K.w,K.h,K.w)))}}),Ht.instanceMatrix.needsUpdate=!0},zt=d(Mo(.08,.1,11546698,16098228),yt,G);C(G,[-1.5,2.3,.1],.9);const Zt=new Os(16752720,3,9,1.6);Zt.position.set(-1.5,2.2,.3),G.add(Zt),d(new qn(.018,.02,.14,12),v(15326400),G,.12,.87,.12),d(new bf(.008,.03,8),new yi({color:new ee(16765066).multiplyScalar(3)}),G,.12,.965,.12);const de=new Os(16757864,1.4,3,1.4);de.position.set(.12,1,.16),G.add(de),S(G,[[[-1.5,2.3,.1],b(.9),2.2,-1],[[.12,.97,.12],b(1.4,16760944),.12,-1]]);const ct=p(a,ri.shadow),Ct=_w(),Nt=_(Ct.canvas);d(new Wn(40,40).rotateX(-Math.PI/2),v(1445901),ct);const Pt=new yi({map:Nt,fog:!1});Pt.color.setRGB(1.08,1,.9),d(new Wn(7.2,4.05),Pt,ct,0,2.55,0);const Ft=v(3808532);for(const L of[-3.72,3.72])g(ct,Ft,[L,2.6,0],[.22,5.2,.2]);g(ct,Ft,[0,4.66,0],[7.8,.22,.22]),g(ct,Ft,[0,.52,0],[7.8,.12,.22]),g(ct,v(2757646),[0,.24,.02],[7.6,.46,.14]),d(au(8.8,1.6,.55,new ee(1711140)),v(16777215,{vertexColors:!0,side:fn}),ct,0,4.78,0);for(const L of[-4.4,4.4])C(ct,[L,3.9,.3]);S(ct,[[[-4.4,3.9,.3],b(1.2),3,-1],[[4.4,3.9,.3],b(1.2),3,-1]]);const ce=new Os(16761466,9,14,1.4);ce.position.set(0,2.5,1.2),ct.add(ce);const se=[];for(const[L,nt]of[[-1.95,6.8],[-.7,7],[.65,6.8],[1.9,6.9],[-1.3,5],[1.3,5.1]]){const K=p(ct,L,0,nt);d(new jn(1,16,12),h,K,0,1.2,0).scale.set(.3,.36,.22),d(new qn(.06,.07,.14,8),h,K,0,1.52,0);const ut=p(K,0,1.64,0);d(new jn(.13,16,12),h,ut),d(new jn(.137,16,8,0,Math.PI*2,0,Math.PI/2),h,ut,0,.03,0),d(new jn(.025,8,6),h,ut,0,.17,0),d(new qn(.018,.01,.6,5),h,ut,0,-.32,.13).rotation.x=.12,se.push(ut)}const Ot=p(a,ri.gate);d(new Wn(80,80).rotateX(-Math.PI/2),v(2764083),Ot);const ge=new zi([new wt(-9,0),new wt(9,0),new wt(9,5.4),new wt(-9,5.4)]),Z=new pf;Z.absarc(0,2.55,2.25,0,Math.PI*2,!0),ge.holes.push(Z),d(new To(ge,{depth:.5,bevelEnabled:!1,curveSegments:72}).translate(0,0,-.25),v(14208959),Ot);for(const L of[-4.95,4.95])g(Ot,v(4672080),[L,.22,0],[8.1,.44,.56]);const _e=v(3882564);for(const L of[.26,-.26])d(new Af(2.3,.08,8,72),_e,Ot,0,2.55,L);d(au(19,1.2,.4,new ee(2106414)),v(16777215,{vertexColors:!0,side:fn}),Ot,0,5.4,0);const ye=new di(yo(1382946,1841690,2237738),v(16777215,{vertexColors:!0,side:fn}));ye.position.set(-3.2,0,-16),ye.scale.set(7,6,5),Ot.add(ye),d(new Ef(1),h,Ot,-2.6,.7,-5.5).scale.set(1.2,1.5,.9);const B=[];for(let L=0;L<9;L++){const nt=2.2+l()*2.6,K=-3-l()*4,ut=6.5+l()*2;d(new qn(.04,.06,ut,6),h,Ot,nt,ut/2,K).rotation.z=(l()-.5)*.1;for(let Dt=0;Dt<30;Dt++)rt.setFromEuler(Wt.set(l()*2-1,l()*Math.PI*2,.6+l()*.9)),B.push(new Ze().compose(et.set(nt+(l()-.5)*1.2,3+l()*(ut-3),K+(l()-.5)*1.2),rt,Et.set(1,1,1)))}const T=new ga(new Wn(.4,.06),h,B.length);B.forEach((L,nt)=>T.setMatrixAt(nt,L)),Ot.add(T);const it=new gr([[4.8,5.7,.35],[3.7,5.3,.45],[2.6,5,.5],[1.6,4.95,.55],[.7,4.6,.6],[0,4.15,.62]].map(([L,nt,K])=>new k(L,nt,K)));d(new wo(it,48,.045,6),h,Ot);const lt=[];for(const[L,nt]of[[.3,[2.9,4.4,.6]],[.55,[1.8,5.5,.5]],[.75,[.9,4.2,.7]]]){const K=it.getPoint(L),ut=new gr([K,K.clone().lerp(new k(...nt),.5).add(new k(0,.12,0)),new k(...nt)]);d(new wo(ut,12,.02,5),h,Ot);for(let Dt=0;Dt<6;Dt++)lt.push([ut.getPoint(.2+Dt*.15).add(new k((l()-.5)*.1,(l()-.5)*.1,0)).toArray(),new ee(16766172).multiplyScalar(.8),.14,-1])}for(let L=0;L<26;L++)lt.push([it.getPoint(l()).add(new k((l()-.5)*.14,(l()-.5)*.14,.05)).toArray(),new ee(16766172).multiplyScalar(.7+l()*.4),.13,-1]);for(const L of[-3.6,3.6]){C(Ot,[L,3.7,.6]),lt.push([[L,3.7,.6],b(.9),1.1,-1]);const nt=new Os(16752720,9,9,1.5);nt.position.set(L,3.6,.9),Ot.add(nt),g(Ot,h,[L,4.35,.42],[.05,.05,.4])}lt.push([[0,.8,-6],new ee(10466520).multiplyScalar(.16),8,-1]);const Mt=new F0(9084104,.6);Mt.position.set(-4,7,12),Ot.add(Mt,Mt.target),S(Ot,lt);const Bt=new ga(Mo(.05,.06,14195366,16769766),new yi({vertexColors:!0,side:fn}),90),Vt=Array.from({length:90},()=>[l(),l(),l(),l()]);Ot.add(Bt);const St=L=>{const nt=new zi;return nt.moveTo(L[0][0],L[0][1]),nt.splineThru(L.slice(1).map(([K,ut])=>new wt(K,ut))),nt.closePath(),nt},_t=L=>new zi(L.map(([nt,K])=>new wt(nt,K))),It=(L,nt,K)=>{const ut=new zi;return ut.absarc(L,nt,K,0,Math.PI*2,!1),ut},Jt=(L,nt)=>d(new To(L,{depth:.04,bevelEnabled:!1,curveSegments:16}),h,nt);function qt(L,nt,K,ut){const Dt=p(Ot,...K);Dt.scale.x=ut,Jt([St(L)],Dt);const fe=p(Dt,0,.95,0);return Jt(nt,fe),{root:Dt,torso:fe}}const Xt=qt([[-.15,.97],[-.2,.6],[-.27,.15],[-.31,.01],[0,0],[.3,.01],[.26,.2],[.18,.6],[.14,.97]],[St([[-.16,0],[-.19,.25],[-.15,.45],[-.06,.53],[.06,.52],[.14,.44],[.16,.2],[.14,0]]),_t([[-.04,.5],[.06,.5],[.06,.62],[-.04,.62]]),It(.02,.7,.105),_t([[.11,.73],[.145,.685],[.11,.665]]),_t([[-.1,.75],[-.1,.9],[.1,.9],[.12,.76]]),_t([[-.1,.87],[-.24,.6],[-.21,.58],[-.08,.8]]),St([[-.02,.45],[.12,.4],[.28,.28],[.34,.18],[.3,.08],[.18,.04],[.06,.14],[-.04,.3]]),It(.35,.23,.045)],[-2.7,0,1.4],1),ae=qt([[-.13,.97],[-.17,.6],[-.25,.12],[-.28,.01],[0,0],[.27,.01],[.22,.2],[.15,.6],[.12,.97]],[St([[-.13,0],[-.16,.25],[-.12,.44],[-.05,.5],[.05,.5],[.12,.43],[.14,.2],[.12,0]]),_t([[-.035,.47],[.045,.47],[.045,.6],[-.035,.6]]),It(.02,.67,.095),_t([[.1,.7],[.13,.66],[.1,.645]]),It(-.08,.74,.07),It(0,.78,.06),_t([[-.15,.8],[.07,.865],[.075,.845],[-.15,.782]]),_t([[-.145,.79],[-.175,.58],[-.158,.58],[-.13,.78]]),St([[-.01,.44],[.1,.38],[.2,.2],[.24,-.1],[.25,-.42],[.17,-.47],[.13,-.12],[.06,.18],[-.03,.3]])],[1,0,-1.2],-1),oe=p(a,ri.glyph),pe={uTime:c.uTime,uScale:c.uScale,uCols:{value:5},uSpacing:{value:6.8},uSmall:{value:5.2},uBig:{value:21}};{const L=document.createElement("canvas");L.width=L.height=200;const nt=L.getContext("2d",{willReadFrequently:!0});nt.fillStyle="#fff",nt.textAlign="center",nt.textBaseline="middle",nt.font='bold 176px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif',nt.fillText("情",100,104);const K=nt.getImageData(0,0,200,200).data,ut=[];for(let Se=0;Se<200;Se+=1)for(let cn=0;cn<200;cn+=1)K[(Se*200+cn)*4+3]>128&&ut.push([cn,Se]);if(!ut.length)for(let Se=0;Se<400;Se++)ut.push([40+l()*120,40+l()*120]);const Dt=7e3,fe=new on,Me=new Float32Array(Dt*3),Qe=new Float32Array(Dt*2),zn=new Float32Array(Dt*3),ke=new Float32Array(Dt),Be=new Float32Array(Dt);for(let Se=0;Se<Dt;Se++){const[cn,Zn]=ut[Math.floor(l()*ut.length)];Qe.set([(cn+l())/200-.5,.5-(Zn+l())/200],Se*2),Me.set([(l()-.5)*70,-24+l()*22,-l()*26+6],Se*3),new ee(l()<.12?16734778:l()<.5?16760944:16752714).toArray(zn,Se*3),ke[Se]=Se%10,Be[Se]=l()}fe.setAttribute("position",new we(Me,3)),fe.setAttribute("aStart",new we(Me,3)),fe.setAttribute("aGlyph",new we(Qe,2)),fe.setAttribute("aColor",new we(zn,3)),fe.setAttribute("aCluster",new we(ke,1)),fe.setAttribute("aSeed",new we(Be,1));const Ce=new Ql(fe,new vn({uniforms:pe,vertexShader:Ow,fragmentShader:su,blending:zs,transparent:!0,depthWrite:!1}));Ce.frustumCulled=!1,oe.add(Ce)}const J=document.createElement("canvas");J.width=J.height=128;{const L=J.getContext("2d");L.fillStyle="#a3261c",L.fillRect(6,6,116,116),L.fillStyle="#f4e3c4",L.textAlign="center",L.textBaseline="middle",L.font='bold 50px "KaiTi", "STKaiti", "Noto Serif SC", serif',L.fillText("品",64,38),L.fillText("花",64,92)}const Gt=new yi({map:_(J),transparent:!0,opacity:0,fog:!1}),Tt=d(new Wn(1.8,1.8),Gt,oe,0,0,1),kt=[y([[0,[0,112,150],[0,70,-200]],[3.5,[0,78,118],[0,24,-100]],[7,[0,40,88],[0,4,-70]]]),y([[7,[2.2,18.6,60],[0,8,-80]],[10,[1.2,17.9,55.8],[-.2,14,-20]],[12.4,[.45,17.75,54],[.05,17.22,52.42]],[15,[.45,17.1,52.95],[.35,16.84,52.55]]]),y([[15,[ri.shadow+.5,1.7,11],[ri.shadow,2.3,0]],[18.5,[ri.shadow+.2,1.95,8.2],[ri.shadow,2.45,0]],[22,[ri.shadow,2.55,5.7],[ri.shadow,2.55,0]]]),y([[22,[ri.gate+.4,1.95,10.4],[ri.gate-.35,2.1,0]],[29,[ri.gate,2.05,7.4],[ri.gate,2.35,0]]])],Y=[D,D,ct,Ot,oe];return L=>{const nt=OS(L);for(const ut of[D,ct,Ot,oe])ut.visible=ut===Y[nt];G.visible=nt===1,x(Lw[nt]);const K=R();if(nt<4)kt[nt](L);else{const ut=Do((L-mf[4].start)/7),Dt=(K?58:44)-Li(ut)*8;o.position.set(ri.glyph+Math.sin(ut*1.4)*3,.6,Dt),o.lookAt(ri.glyph,0,0)}if(nt===1){Yt(Li((L-8.2)/3.8));const ut=Do((L-12.2)/1.2);zt.visible=L>12.2;const Dt=Math.max(0,L-13.4);zt.position.set(Ki.lerp(-.13,.334,Li(ut))+Math.sin(ut*9)*.05*(1-ut)+Dt*.004,Ki.lerp(1.34,.852,ut*ut),Ki.lerp(.3,.543,ut)+Math.cos(ut*7)*.04*(1-ut)),zt.rotation.set(ut<1?ut*8:-Math.PI/2,ut*5+Dt*.2,ut<1?Math.sin(ut*11):0)}if(nt===2&&(Ct.draw(L-15),Nt.needsUpdate=!0,se.forEach((ut,Dt)=>{ut.rotation.y=Math.sin(L*.7+Dt*1.9)*.35*Math.max(0,Math.sin(L*.4+Dt))})),nt===3){const ut=(Dt,fe)=>fe*Li((L-Dt)/1.1)*(1-Li((L-Dt-2.2)/1.2));Xt.torso.rotation.z=-ut(23,.55),ae.torso.rotation.z=-ut(24.3,.38),ae.root.position.y=-ut(24.3,.05),Vt.forEach(([Dt,fe,Me,Qe],zn)=>{const ke=(L*(.3+Me*.3)+Qe*6)%5.4;et.set(-.8+Dt*4.6-ke*.35+Math.sin(L*1.3+Qe*10)*.15,5.3-ke,-1+fe*2.4),rt.setFromEuler(Wt.set(L*(1+Dt)+Qe*6,L*.7+fe*6,L*(.5+Me))),Bt.setMatrixAt(zn,O.compose(et,rt,Et.set(1,1,1)))}),Bt.instanceMatrix.needsUpdate=!0}if(nt===4){const ut=pe.uBig.value;pe.uCols.value=K?2:5,Tt.position.set(ut*.42,-ut*.42,1),Gt.opacity=Li((L-34.4)/.5),Tt.scale.setScalar(1+.4*(1-Li((L-34.4)/.35)))}}})}const Us=1024,Ns=576,W1="#1b110c",zl=470,ru=s=>Math.min(1,Math.max(0,s)),Bw=s=>{const t=ru(s);return t*t*(3-2*t)},Fw=s=>{const t=ru(s);return t*t*t*(t*(t*6-15)+10)};function ci(s,t,n){s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),t.forEach(([a,o],l)=>l?s.lineTo(a,o):s.moveTo(a,o)),s.stroke()}function Hn(s,t,n,a,o=a){s.beginPath(),s.ellipse(t,n,a,o,0,0,Math.PI*2),s.fill()}function _f(s,t,n,a,o,l,c=0){s.beginPath(),s.moveTo(t-o,n),s.quadraticCurveTo(t-o-4,(n+a)/2,t-l+c,a),s.quadraticCurveTo(t+c,a+8,t+l+c,a),s.quadraticCurveTo(t+o+4,(n+a)/2,t+o,n),s.closePath(),s.fill()}function ou(s,t){s.save(),s.shadowBlur=0,s.strokeStyle=s.fillStyle="rgba(255,214,150,0.4)",t(),s.restore()}function Hw(s,t,n,a){const o=Math.sin(a*1.3)*3;_f(s,t,n-150,n-4,24,46,o),Hn(s,t,n-150,28,10),Hn(s,t-14,n-2,12,5),Hn(s,t+14+o,n-2,12,5),s.fillRect(t-5,n-168,10,16),Hn(s,t,n-178,15,17),s.beginPath(),s.moveTo(t-16,n-184),s.lineTo(t-14,n-204),s.lineTo(t+14,n-204),s.lineTo(t+16,n-184),s.fill();for(const d of[-1,1])ci(s,[[t+d*12,n-198],[t+d*30,n-186+Math.sin(a*2+d)*4],[t+d*40,n-165+Math.sin(a*2.3+d)*6]],4);ci(s,[[t-24,n-145],[t-36,n-105],[t-30,n-78]],13),Hn(s,t-30,n-72,7);const l=n-150+Math.sin(a*2.1)*10;ci(s,[[t+24,n-145],[t+50,n-118],[t+60,l]],12);const c=.5+1.1*(.5+.5*Math.sin(a*1.6)),h=-Math.PI/2+.35,p=54;s.beginPath(),s.moveTo(t+60,l),s.arc(t+60,l,p,h-c/2,h+c/2),s.closePath(),s.fill(),ou(s,()=>{s.lineWidth=1.5;for(let d=1;d<8;d++){const g=h-c/2+c*d/8;s.beginPath(),s.moveTo(t+60+Math.cos(g)*12,l+Math.sin(g)*12),s.lineTo(t+60+Math.cos(g)*(p-6),l+Math.sin(g)*(p-6)),s.stroke()}_f(s,t,n-120,n-112,10,10)})}function Gw(s,t,n,a){const o=Math.cos(a*1.5);s.save(),s.translate(t,0),s.scale(o,1);const l=Math.sin(a*3)*3;_f(s,0,n-148+l,n-4,20,60+Math.sin(a*3)*6,Math.sin(a*1.5)*8),Hn(s,0,n-148+l,24,9),s.fillRect(-4,n-166+l,8,14),Hn(s,0,n-176+l,14,16),Hn(s,0,n-195+l,12,9);for(let c=-2;c<=2;c++)Hn(s,c*9,n-201+l-(2-Math.abs(c))*3,3.2);ci(s,[[12,n-196+l],[26,n-186+l],[28,n-168+l]],2);for(const c of[-1,1]){const h=a*2.2+(c>0?0:Math.PI*.6),p=[c*(58+Math.cos(h)*10),n-196+l-Math.sin(h)*30];ci(s,[[c*22,n-144+l],[c*(44+Math.sin(h)*6),n-160+l-Math.sin(h)*20],p],11);let d=p;for(let g=1;g<=11;g++){const v=[p[0]+c*g*9+Math.sin(h*1.3-g*.6)*g*3.2,p[1]-Math.sin(h-g*.5)*g*4+g*g*1.1];ci(s,[d,v],17-g),d=v}}ou(s,()=>{for(let c=0;c<3;c++)Hn(s,0,n-120+l+c*22,4)}),s.restore()}function Vw(s,t,n,a){const o=a%2.2/2.2,l=ru((o-.25)/.6),c=Math.sin(Math.PI*l)**2*120,h=o<.25?Math.sin(o/.25*Math.PI)**2*12:0,p=Math.sin(Math.PI*l)**2;s.save(),s.translate(t,n-78-c+h),s.rotate(Fw(l)*Math.PI*2);for(const d of[-1,1])ci(s,[[d*9,0],[d*(14+p*6+h*.6),38-p*30-h],[d*12,74-p*50-h]],12),Hn(s,d*16,78-p*50-h,9,5);s.beginPath(),s.moveTo(-18,-62),s.lineTo(18,-62),s.lineTo(24,6),s.lineTo(-24,6),s.closePath(),s.fill(),Hn(s,0,-62,22,8),Hn(s,0,-86,14,15),ci(s,[[-12,-92],[-30,-86+Math.sin(a*9)*4],[-42,-94+Math.sin(a*7)*6]],3);for(const d of[-1,1])ci(s,[[d*18,-58],[d*(40-p*14),-58+p*20-(1-p)*18],[d*(52-p*30),-78+p*50]],10);ou(s,()=>{s.lineWidth=2,s.beginPath(),s.moveTo(-14,-30),s.lineTo(14,-30),s.moveTo(-16,-14),s.lineTo(16,-14),s.stroke()}),s.restore()}function kw(s,t,n,a){const o=Math.sin(a*3.2)**2*16;s.save(),s.translate(t,n-o),s.rotate(Math.sin(a*3.2)*.08),_f(s,0,-120,-30,26,42);for(const p of[-1,1])ci(s,[[p*14,-34],[p*22,-16],[p*16,0]],11),Hn(s,p*20,2,11,5);Hn(s,0,-120,30,10),Hn(s,0,-142,16,15),s.beginPath(),s.moveTo(-17,-150),s.quadraticCurveTo(-6,-200,22,-222),s.quadraticCurveTo(4,-190,17,-150),s.closePath(),s.fill(),Hn(s,24,-224,7),ou(s,()=>s.fillRect(-6,-148,12,9)),ci(s,[[-24,-116],[-44,-96],[-26,-80]],10),ci(s,[[24,-116],[44,-100],[52,-120]],10),ci(s,[[52,-120],[66,-232]],4);const l=Math.sin(a*3.2+.8)*.3,c=88+Math.sin(l)*18,h=-192;ci(s,[[66,-232],[84,-226],[c,h-18]],2),Hn(s,c,h,15,19),ou(s,()=>{s.lineWidth=1.6;for(const p of[-7,0,7])s.beginPath(),s.moveTo(c+p,h-14),s.lineTo(c+p,h+14),s.stroke()}),ci(s,[[c,h+18],[c,h+32]],3),s.restore()}function Xw(s,t,n,a){s.save(),s.shadowBlur=16,s.shadowColor="rgba(27,17,12,0.8)",s.translate(t,n),s.rotate(.38+a),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-10,-22,-7,-46),s.lineTo(7,-46),s.quadraticCurveTo(10,-22,0,0),s.fill(),s.fillRect(-7,-58,14,12),s.fillRect(-5,-260,10,204),s.restore()}const Ww=[{x:190,draw:Hw},{x:420,draw:Gw},{x:650,draw:Vw},{x:860,draw:kw}];function qw(){const s=document.createElement("canvas");s.width=Us,s.height=Ns;const t=s.getContext("2d"),n=document.createElement("canvas");n.width=Us,n.height=Ns;const a=n.getContext("2d"),o=a.createRadialGradient(Us/2,Ns*.62,40,Us/2,Ns*.55,Us*.62);o.addColorStop(0,"#fff1cc"),o.addColorStop(.45,"#f3c27c"),o.addColorStop(1,"#8a4a1e"),a.fillStyle=o,a.fillRect(0,0,Us,Ns);let l=7;const c=()=>(l=l*16807%2147483647)/2147483647;a.globalAlpha=.08,a.strokeStyle="#6b3b16",a.lineWidth=1;for(let p=0;p<280;p++){const d=c()*Us,g=c()*Ns,v=10+c()*40,_=c()*Math.PI;a.beginPath(),a.moveTo(d,g),a.quadraticCurveTo(d+Math.cos(_)*v*.5+(c()-.5)*8,g+Math.sin(_)*v*.5,d+Math.cos(_)*v,g+Math.sin(_)*v),a.stroke()}function h(p){t.shadowBlur=0,t.drawImage(n,0,0),t.fillStyle=`rgba(60,25,5,${.07+.04*Math.sin(p*9.1)*Math.sin(p*3.3)})`,t.fillRect(0,0,Us,Ns),t.fillStyle=W1,t.strokeStyle=W1,t.shadowColor="rgba(27,17,12,0.7)",t.shadowBlur=5;const d=Bw((p-.2)/1.2);let g=null;if(d>0){const b=50+924*d,C=[],y=[];for(let x=50;x<=b;x+=8){const R=(x-50)/924,D=1.5+6*Math.pow(Math.sin(Math.PI*R),.5),A=zl+8+Math.sin(x*.013)*3;C.push([x,A-D]),y.push([x,A+D*.8])}t.beginPath(),[...C,...y.reverse()].forEach(([x,R],D)=>D?t.lineTo(x,R):t.moveTo(x,R)),t.closePath(),t.fill(),d<1&&(g=[b,zl+8])}Ww.forEach((_,S)=>{const b=ru((p-1.3-S*1.05)/.9);if(b<=0)return;const C=zl+30-b*330;t.save(),t.beginPath(),t.rect(_.x-140,C,280,Ns),t.clip(),_.draw(t,_.x,zl,p),t.restore(),b<1&&(g=[_.x+Math.sin(p*22)*55*(1-b*.4),C+Math.cos(p*17)*8])});const v=ru((p-5.4)/.9);!g&&v<1&&(g=p<5.4?null:[860+v*180,zl-300-v*260]),g&&Xw(t,g[0],g[1],Math.sin(p*20)*.12)}return{canvas:s,draw:h}}function ra(s){const t=Math.max(0,Math.min(1,s));return t*t*t*(t*(t*6-15)+10)}function xp(s){return-.045*ra((s+.5)/.5)+.545*ra(s/1.5)-.5*ra((s-2.05)/1.85)}function Yw(s,t=!1){const n=s-(t?24:22.8),a=t?.82:1,o=xp(n)*a,l=xp(n-.24)*a,c=Math.sin(s*1.45+(t?1.1:0)),h=ra((n+.4)/.9)*(1-ra((n-2.5)/1.25));return{bow:o,hipX:-.065*Math.max(0,o),hipY:-.06*Math.max(0,o),head:-.105*ra((n+.55)/.7)+.105*ra((n-2.2)/1.4)+o*.22,shoulder:o*.35-h*.2,elbow:h*.27+(l-o)*.55,wrist:h*-.1+(xp(n-.4)*a-l)*.7,cloth:(l-o)*.6+Math.sin(s*1.1+(t?2:0))*.008,breath:c*.006}}function Zw(s,t,n,a,o,l){const c=l===-1,h=s.group(t,...o);h.scale.x=l;const p=(U,O,E=0,z=0)=>{const H=new To(U,{depth:.04,bevelEnabled:!1,curveSegments:16});return H.translate(-E,-z,0),s.mesh(H,s.ink,O)},d=p([n],h),g=s.group(h,0,.95,0),v=new zi;v.absarc(0,0,.16,0,Math.PI*2,!1),p([v],g),p([a[0],a[1]],g);const _=s.group(g,0,.56,0),S=c?8:6;p(a.slice(2,S),_,0,.56);const b=s.group(g,.015,.43,.002),C=p(a.slice(S),b,.015,.43),y=d.geometry.getAttribute("position"),x=Float32Array.from(y.array),R=C.geometry.getAttribute("position"),D=Float32Array.from(R.array),A=new wt,P=(U,O,E,z,H)=>{const X=Math.cos(H),W=Math.sin(H);A.set(E+(U-E)*X-(O-z)*W,z+(U-E)*W+(O-z)*X)};return{root:h,torso:g,animate(U){const O=Yw(U,c);g.position.set(O.hipX,.95+O.hipY+O.breath,0),g.rotation.z=-O.bow,_.rotation.z=O.head,b.rotation.z=O.shoulder;for(let E=0;E<y.count;E++){const z=x[E*3],H=x[E*3+1],X=ra(H/.95);y.setXY(E,z+O.hipX*X,H+(O.hipY+O.breath)*X)}y.needsUpdate=!0;for(let E=0;E<R.count;E++){const z=D[E*3],H=D[E*3+1],X=ra((-H-.07)/.25);P(z,H,.16,-.16,O.elbow*X);let W=A.x,tt=A.y;const G=ra((-H-.27)/.3);P(W,tt,.24,-.32,O.wrist*G),W=A.x+O.cloth*ra(-H/(c?.8:.4)),tt=A.y,R.setXY(E,W,tt)}R.needsUpdate=!0}}}const oi={shadow:400,gate:800,glyph:1200},Kw=[{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:660520,horizon:3816280,glow:3809062,moon:[-.3,.15,-1],moonSize:.035,moonGain:2.4,bloom:.9,stars:1,fog:2763846,density:.0055},{top:329483,horizon:1314315,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:.6,stars:.3,fog:723208,density:.02},{top:858673,horizon:4082280,glow:0,moon:[0,.075,-1],moonSize:.07,moonGain:1.05,bloom:.5,stars:.6,fog:3029590,density:.016},{top:197899,horizon:724506,glow:1575942,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:1,stars:1,fog:197899,density:0}],Jw=`
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
  }`,Qw=`
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
  }`,jw=`
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
  }`;function $w(s,t,n){return BS(s,t,n,20260925,({scene:a,camera:o,rand:l,shared:c,ink:h,group:p,mesh:d,box:g,lambert:v,canvasTexture:_,glows:S,warm:b,lantern:C,path:y,setEnv:x,portrait:R})=>{const D=p(a);d(new Wn(1400,1400).rotateX(-Math.PI/2),v(1185053),D);const A=[];for(let Y=-9;Y<=9;Y++)for(let L=-10;L<=2;L++){const nt=Y*16,K=L*16;if(!(Y===0&&K>-40)&&!(Math.abs(Y)<=2&&K<=-36))for(const ut of[-3.25,3.25])for(const Dt of[-3.25,3.25]){if(l()>.82)continue;const fe=4+l()*2.2,Me=l()<.06;A.push({x:nt+ut+(l()-.5),z:K+Dt+(l()-.5),w:fe,h:fe*(.75+l()*.3)*(Me?1.45:1),d:fe*(.7+l()*.15),stage:Me})}}const P=v(16777215,{vertexColors:!0,side:fn}),U=new ga(yo(1712691,3352095,3816773),P,A.length),O=new Ze,E=new ee;A.forEach((Y,L)=>{O.makeScale(Y.w,Y.h,Y.d).setPosition(Y.x,0,Y.z),U.setMatrixAt(L,O),U.setColorAt(L,E.setScalar(.8+l()*.4))}),D.add(U);const z=yo(7163936,5904660,9342870),H=new ga(z,P,4);[[0,6,-38,28],[0,2.4,-64,30],[0,2.4,-88,20],[0,2.4,-112,32]].forEach(([Y,L,nt,K],ut)=>{H.setMatrixAt(ut,O.makeScale(K,K*.85,K*.72).setPosition(Y,L,nt))}),D.add(H);const X=v(5117716),W=v(8224648);g(D,X,[0,3,-38],[34,6,10]);for(const Y of[-64,-88,-112])g(D,W,[0,1.2,Y],[40,2.4,26]);for(const Y of[-38,38])g(D,X,[Y,3,-86],[1.2,6,96]);g(D,X,[0,3,-134],[77,6,1.2]),[[-430,1777718,60],[-360,2304066,36]].forEach(([Y,L,nt])=>{const K=new zi;K.moveTo(-900,-40);for(let ut=-900;ut<=900;ut+=30)K.lineTo(ut,8+nt*(.5+.3*Math.sin(ut*.011+Y)+.2*Math.sin(ut*.031)));K.lineTo(900,-40),d(new Tf(K),new yi({color:L,fog:!1}),D,0,0,Y)});const tt=[];for(const Y of A){const L=Math.hypot(Y.x,Y.z+60);for(const K of[-.2,.2])l()<.55&&tt.push([[Y.x+K*Y.w,.3*Y.h,Y.z+.3*Y.d],b(.45+l()*.3,16758896),.9,-1]);if(!Y.stage)continue;const nt=1.4+L/180*4.2+l()*.4;for(let K=0;K<6;K++)tt.push([[Y.x+(K/5-.5)*.8*Y.w,.46*Y.h,Y.z+.46*Y.d],b(2.6,16742970),.55,nt+K*.05]);tt.push([[Y.x,.3*Y.h,Y.z+.6*Y.d],b(.35),16,nt])}for(let Y=0;Y<12;Y++)for(const L of[-6,6])tt.push([[L,1.6,30-Y*6],b(2.2,16734762),.5,.9+(12-Y)*.08]);for(let Y=0;Y<9;Y++)tt.push([[(Y-4)*3.2,7.5,-32.5],b(2.4,16736304),.6,.6]);S(D,tt);{const L=new on,nt=new Float32Array(3200*3),K=new Float32Array(3200*3),ut=new Float32Array(3200*3),Dt=new Float32Array(3200),fe=new Float32Array(3200),Me=new Float32Array(3200),Qe=[16752714,16741176,16762496];for(let ke=0;ke<3200;ke++){const Be=l()<.5?1:-1;if(ke<1500)nt.set([(l()-.5)*9,1,Be>0?-34:50],ke*3),K.set([0,0,Be],ke*3),Dt[ke]=84;else if(l()<.5){const Ce=(Math.floor(l()*18)-9)*16+8+(l()-.5)*2;nt.set([Ce,1,Be>0?-168:40],ke*3),K.set([0,0,Be],ke*3),Dt[ke]=208}else{const Ce=(Math.floor(l()*13)-10)*16+8+(l()-.5)*2;nt.set([Be>0?-152:152,1,Ce],ke*3),K.set([Be,0,0],ke*3),Dt[ke]=304}new ee(Qe[ke%3]).multiplyScalar(1.1+l()*.9).toArray(ut,ke*3),fe[ke]=1+l()*1.2,Me[ke]=l()}L.setAttribute("position",new we(nt,3)),L.setAttribute("aDirection",new we(K,3)),L.setAttribute("aColor",new we(ut,3)),L.setAttribute("aLength",new we(Dt,1)),L.setAttribute("aSpeed",new we(fe,1)),L.setAttribute("aSeed",new we(Me,1));const zn=new Ql(L,new vn({uniforms:c,vertexShader:Jw,fragmentShader:su,blending:zs,transparent:!0,depthWrite:!1}));zn.frustumCulled=!1,D.add(zn)}{const Y=document.createElement("canvas");Y.width=Y.height=256;const L=Y.getContext("2d");for(let K=0;K<14;K++){const ut=60+l()*136,Dt=90+l()*76,fe=30+l()*60,Me=L.createRadialGradient(ut,Dt,0,ut,Dt,fe);Me.addColorStop(0,"rgba(255,255,255,0.35)"),Me.addColorStop(1,"rgba(255,255,255,0)"),L.fillStyle=Me,L.fillRect(0,0,256,256)}const nt=new N0({map:_(Y),color:5924240,transparent:!0,opacity:.42,depthWrite:!1,fog:!1});for(let K=0;K<16;K++){const ut=new L0(nt);ut.position.set((l()-.5)*170,55+l()*55,-30+l()*170),ut.scale.set(50+l()*50,22+l()*18,1),D.add(ut)}}const G=p(D,0,16,52),$=v(3806482),F=v(2824724);g(G,F,[0,-.1,.5],[8,.2,5]),g(G,$,[0,.92,-1.3],[7.4,.07,.08]),g(G,$,[0,.12,-1.3],[7.4,.07,.08]);for(let Y=-3.6;Y<=3.61;Y+=.4)g(G,$,[Y,.52,-1.3],[.045,.8,.045]);for(const Y of[-3.7,3.7])g(G,$,[Y,2.2,-1.3],[.2,4.6,.2]);g(G,$,[0,4.4,-1.3],[7.8,.25,.22]),g(G,F,[0,.77,.5],[1.7,.06,1]);for(const Y of[-.75,.75])for(const L of[.1,.9])g(G,F,[Y,.37,L],[.06,.74,.06]);const V=new _a({color:9418918,roughness:.25,side:fn}),ft=d(new Ao([[0,0],[.03,0],[.035,.008],[.06,.03],[.075,.062],[.071,.064]].map(([Y,L])=>new wt(Y,L)),32),V,G,.35,.8,.55),ot=new vn({uniforms:{uTime:c.uTime,uHit:{value:13.4}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:jw,transparent:!0});d(new Mf(.068,48).rotateX(-Math.PI/2),ot,ft,0,.05,0);const gt=d(new Ao([[0,0],[.06,0],[.085,.03],[.1,.1],[.085,.2],[.05,.27],[.042,.3],[.055,.33]].map(([Y,L])=>new wt(Y,L)),48),new _a({color:2902630,roughness:.3}),G,-.15,.8,.28);d(new qn(.008,.01,.2,5),v(2637854),gt,0,.42,0);const I=v(3099174,{side:fn});for(const[Y,L]of[[.6,.4],[2.6,.44],[4.4,.37]]){const nt=d(new jn(1,8,6),I,gt,Math.cos(Y)*.09,L,Math.sin(Y)*.09);nt.scale.set(.1,.012,.04),nt.rotation.set(0,-Y,-.4)}const at=p(gt,0,.5,0);at.scale.setScalar(1.4);const yt=new _a({vertexColors:!0,roughness:.55,side:fn,emissive:3803154}),Lt=[{n:6,r:.01,w:.05,h:.06},{n:9,r:.025,w:.08,h:.09},{n:12,r:.04,w:.1,h:.11},{n:14,r:.055,w:.12,h:.12}],Ht=new ga(Mo(1,1,6949922,16098228),yt,Lt.reduce((Y,L)=>Y+L.n,0));at.add(Ht),d(new jn(.025,10,8),new _a({color:15253578,emissive:5913096}),at);const Wt=new oa(0,0,0,"YXZ"),rt=new Is,et=new k,Et=new k,Yt=Y=>{let L=0;Lt.forEach((nt,K)=>{for(let ut=0;ut<nt.n;ut++){const Dt=ut/nt.n*Math.PI*2+K*.7,fe=Ki.lerp(.12+K*.08,.3+K*.38,Y);et.set(-Math.sin(Dt)*nt.r,0,-Math.cos(Dt)*nt.r),rt.setFromEuler(Wt.set(-fe,Dt,0)),Ht.setMatrixAt(L++,O.compose(et,rt,Et.set(nt.w,nt.h,nt.w)))}}),Ht.instanceMatrix.needsUpdate=!0},zt=d(Mo(.08,.1,11546698,16098228),yt,G);C(G,[-1.5,2.3,.1],.9);const Zt=new Os(16752720,3,9,1.6);Zt.position.set(-1.5,2.2,.3),G.add(Zt),d(new qn(.018,.02,.14,12),v(15326400),G,.12,.87,.12),d(new bf(.008,.03,8),new yi({color:new ee(16765066).multiplyScalar(3)}),G,.12,.965,.12);const de=new Os(16757864,1.4,3,1.4);de.position.set(.12,1,.16),G.add(de),S(G,[[[-1.5,2.3,.1],b(.9),2.2,-1],[[.12,.97,.12],b(1.4,16760944),.12,-1]]);const ct=p(a,oi.shadow),Ct=qw(),Nt=_(Ct.canvas);d(new Wn(40,40).rotateX(-Math.PI/2),v(1445901),ct);const Pt=new yi({map:Nt,fog:!1});Pt.color.setRGB(1.08,1,.9),d(new Wn(7.2,4.05),Pt,ct,0,2.55,0);const Ft=v(3808532);for(const Y of[-3.72,3.72])g(ct,Ft,[Y,2.6,0],[.22,5.2,.2]);g(ct,Ft,[0,4.66,0],[7.8,.22,.22]),g(ct,Ft,[0,.52,0],[7.8,.12,.22]),g(ct,v(2757646),[0,.24,.02],[7.6,.46,.14]),d(au(8.8,1.6,.55,new ee(1711140)),v(16777215,{vertexColors:!0,side:fn}),ct,0,4.78,0);for(const Y of[-4.4,4.4])C(ct,[Y,3.9,.3]);S(ct,[[[-4.4,3.9,.3],b(1.2),3,-1],[[4.4,3.9,.3],b(1.2),3,-1]]);const ce=new Os(16761466,9,14,1.4);ce.position.set(0,2.5,1.2),ct.add(ce);const se=[];for(const[Y,L]of[[-1.95,6.8],[-.7,7],[.65,6.8],[1.9,6.9],[-1.3,5],[1.3,5.1]]){const nt=p(ct,Y,0,L);d(new jn(1,16,12),h,nt,0,1.2,0).scale.set(.3,.36,.22),d(new qn(.06,.07,.14,8),h,nt,0,1.52,0);const K=p(nt,0,1.64,0);d(new jn(.13,16,12),h,K),d(new jn(.137,16,8,0,Math.PI*2,0,Math.PI/2),h,K,0,.03,0),d(new jn(.025,8,6),h,K,0,.17,0),d(new qn(.018,.01,.6,5),h,K,0,-.32,.13).rotation.x=.12,se.push(K)}const Ot=p(a,oi.gate);d(new Wn(80,80).rotateX(-Math.PI/2),v(2764083),Ot);const ge=new zi([new wt(-9,0),new wt(9,0),new wt(9,5.4),new wt(-9,5.4)]),Z=new pf;Z.absarc(0,2.55,2.25,0,Math.PI*2,!0),ge.holes.push(Z),d(new To(ge,{depth:.5,bevelEnabled:!1,curveSegments:72}).translate(0,0,-.25),v(14208959),Ot);for(const Y of[-4.95,4.95])g(Ot,v(4672080),[Y,.22,0],[8.1,.44,.56]);const _e=v(3882564);for(const Y of[.26,-.26])d(new Af(2.3,.08,8,72),_e,Ot,0,2.55,Y);d(au(19,1.2,.4,new ee(2106414)),v(16777215,{vertexColors:!0,side:fn}),Ot,0,5.4,0);const ye=new di(yo(1382946,1841690,2237738),v(16777215,{vertexColors:!0,side:fn}));ye.position.set(-3.2,0,-16),ye.scale.set(7,6,5),Ot.add(ye),d(new Ef(1),h,Ot,-2.6,.7,-5.5).scale.set(1.2,1.5,.9);const B=[];for(let Y=0;Y<9;Y++){const L=2.2+l()*2.6,nt=-3-l()*4,K=6.5+l()*2;d(new qn(.04,.06,K,6),h,Ot,L,K/2,nt).rotation.z=(l()-.5)*.1;for(let ut=0;ut<30;ut++)rt.setFromEuler(Wt.set(l()*2-1,l()*Math.PI*2,.6+l()*.9)),B.push(new Ze().compose(et.set(L+(l()-.5)*1.2,3+l()*(K-3),nt+(l()-.5)*1.2),rt,Et.set(1,1,1)))}const T=new ga(new Wn(.4,.06),h,B.length);B.forEach((Y,L)=>T.setMatrixAt(L,Y)),Ot.add(T);const it=new gr([[4.8,5.7,.35],[3.7,5.3,.45],[2.6,5,.5],[1.6,4.95,.55],[.7,4.6,.6],[0,4.15,.62]].map(([Y,L,nt])=>new k(Y,L,nt)));d(new wo(it,48,.045,6),h,Ot);const lt=[];for(const[Y,L]of[[.3,[2.9,4.4,.6]],[.55,[1.8,5.5,.5]],[.75,[.9,4.2,.7]]]){const nt=it.getPoint(Y),K=new gr([nt,nt.clone().lerp(new k(...L),.5).add(new k(0,.12,0)),new k(...L)]);d(new wo(K,12,.02,5),h,Ot);for(let ut=0;ut<6;ut++)lt.push([K.getPoint(.2+ut*.15).add(new k((l()-.5)*.1,(l()-.5)*.1,0)).toArray(),new ee(16766172).multiplyScalar(.8),.14,-1])}for(let Y=0;Y<26;Y++)lt.push([it.getPoint(l()).add(new k((l()-.5)*.14,(l()-.5)*.14,.05)).toArray(),new ee(16766172).multiplyScalar(.7+l()*.4),.13,-1]);for(const Y of[-3.6,3.6]){C(Ot,[Y,3.7,.6]),lt.push([[Y,3.7,.6],b(.9),1.1,-1]);const L=new Os(16752720,9,9,1.5);L.position.set(Y,3.6,.9),Ot.add(L),g(Ot,h,[Y,4.35,.42],[.05,.05,.4])}lt.push([[0,.8,-6],new ee(10466520).multiplyScalar(.16),8,-1]);const Mt=new F0(9084104,.6);Mt.position.set(-4,7,12),Ot.add(Mt,Mt.target),S(Ot,lt);const Bt=new ga(Mo(.05,.06,14195366,16769766),new yi({vertexColors:!0,side:fn}),90),Vt=Array.from({length:90},()=>[l(),l(),l(),l()]);Ot.add(Bt);const St=Y=>{const L=new zi;return L.moveTo(Y[0][0],Y[0][1]),L.splineThru(Y.slice(1).map(([nt,K])=>new wt(nt,K))),L.closePath(),L},_t=Y=>new zi(Y.map(([L,nt])=>new wt(L,nt))),It=(Y,L,nt)=>{const K=new zi;return K.absarc(Y,L,nt,0,Math.PI*2,!1),K};function Jt(Y,L,nt,K){return Zw({group:p,mesh:d,ink:h},Ot,St(Y),L,nt,K)}const qt=Jt([[-.15,.97],[-.2,.6],[-.27,.15],[-.31,.01],[0,0],[.3,.01],[.26,.2],[.18,.6],[.14,.97]],[St([[-.16,0],[-.19,.25],[-.15,.45],[-.06,.53],[.06,.52],[.14,.44],[.16,.2],[.14,0]]),_t([[-.04,.5],[.06,.5],[.06,.62],[-.04,.62]]),It(.02,.7,.105),_t([[.11,.73],[.145,.685],[.11,.665]]),_t([[-.1,.75],[-.1,.9],[.1,.9],[.12,.76]]),_t([[-.1,.87],[-.24,.6],[-.21,.58],[-.08,.8]]),St([[-.02,.45],[.12,.4],[.28,.28],[.34,.18],[.3,.08],[.18,.04],[.06,.14],[-.04,.3]]),It(.35,.23,.045)],[-2.7,0,1.4],1),Xt=Jt([[-.13,.97],[-.17,.6],[-.25,.12],[-.28,.01],[0,0],[.27,.01],[.22,.2],[.15,.6],[.12,.97]],[St([[-.13,0],[-.16,.25],[-.12,.44],[-.05,.5],[.05,.5],[.12,.43],[.14,.2],[.12,0]]),_t([[-.035,.47],[.045,.47],[.045,.6],[-.035,.6]]),It(.02,.67,.095),_t([[.1,.7],[.13,.66],[.1,.645]]),It(-.08,.74,.07),It(0,.78,.06),_t([[-.15,.8],[.07,.865],[.075,.845],[-.15,.782]]),_t([[-.145,.79],[-.175,.58],[-.158,.58],[-.13,.78]]),St([[-.01,.44],[.1,.38],[.2,.2],[.24,-.1],[.25,-.42],[.17,-.47],[.13,-.12],[.06,.18],[-.03,.3]])],[1,0,-1.2],-1),ae=p(a,oi.glyph),oe={uTime:c.uTime,uScale:c.uScale,uCols:{value:5},uSpacing:{value:6.8},uSmall:{value:5.2},uBig:{value:21}};{const Y=document.createElement("canvas");Y.width=Y.height=200;const L=Y.getContext("2d",{willReadFrequently:!0});L.fillStyle="#fff",L.textAlign="center",L.textBaseline="middle",L.font='bold 176px "KaiTi", "STKaiti", "Kaiti SC", "Noto Serif SC", "Songti SC", serif',L.fillText("情",100,104);const nt=L.getImageData(0,0,200,200).data,K=[];for(let Ce=0;Ce<200;Ce+=1)for(let Se=0;Se<200;Se+=1)nt[(Ce*200+Se)*4+3]>128&&K.push([Se,Ce]);if(!K.length)for(let Ce=0;Ce<400;Ce++)K.push([40+l()*120,40+l()*120]);const ut=7e3,Dt=new on,fe=new Float32Array(ut*3),Me=new Float32Array(ut*2),Qe=new Float32Array(ut*3),zn=new Float32Array(ut),ke=new Float32Array(ut);for(let Ce=0;Ce<ut;Ce++){const[Se,cn]=K[Math.floor(l()*K.length)];Me.set([(Se+l())/200-.5,.5-(cn+l())/200],Ce*2),fe.set([(l()-.5)*70,-24+l()*22,-l()*26+6],Ce*3),new ee(l()<.12?16734778:l()<.5?16760944:16752714).toArray(Qe,Ce*3),zn[Ce]=Ce%10,ke[Ce]=l()}Dt.setAttribute("position",new we(fe,3)),Dt.setAttribute("aStart",new we(fe,3)),Dt.setAttribute("aGlyph",new we(Me,2)),Dt.setAttribute("aColor",new we(Qe,3)),Dt.setAttribute("aCluster",new we(zn,1)),Dt.setAttribute("aSeed",new we(ke,1));const Be=new Ql(Dt,new vn({uniforms:oe,vertexShader:Qw,fragmentShader:su,blending:zs,transparent:!0,depthWrite:!1}));Be.frustumCulled=!1,ae.add(Be)}const pe=document.createElement("canvas");pe.width=pe.height=128;{const Y=pe.getContext("2d");Y.fillStyle="#a3261c",Y.fillRect(6,6,116,116),Y.fillStyle="#f4e3c4",Y.textAlign="center",Y.textBaseline="middle",Y.font='bold 50px "KaiTi", "STKaiti", "Noto Serif SC", serif',Y.fillText("品",64,38),Y.fillText("花",64,92)}const J=new yi({map:_(pe),transparent:!0,opacity:0,fog:!1}),Gt=d(new Wn(1.8,1.8),J,ae,0,0,1),Tt=[y([[0,[0,112,150],[0,70,-200]],[3.5,[0,78,118],[0,24,-100]],[7,[0,40,88],[0,4,-70]]]),y([[7,[2.2,18.6,60],[0,8,-80]],[10,[1.2,17.9,55.8],[-.2,14,-20]],[12.4,[.45,17.75,54],[.05,17.22,52.42]],[15,[.45,17.1,52.95],[.35,16.84,52.55]]]),y([[15,[oi.shadow+.5,1.7,11],[oi.shadow,2.3,0]],[18.5,[oi.shadow+.2,1.95,8.2],[oi.shadow,2.45,0]],[22,[oi.shadow,2.55,5.7],[oi.shadow,2.55,0]]]),y([[22,[oi.gate+.4,1.95,10.4],[oi.gate-.35,2.1,0]],[29,[oi.gate,2.05,7.4],[oi.gate,2.35,0]]])],kt=[D,D,ct,Ot,ae];return Y=>{const L=OS(Y);for(const K of[D,ct,Ot,ae])K.visible=K===kt[L];G.visible=L===1,x(Kw[L]);const nt=R();if(L<4)Tt[L](Y);else{const K=Do((Y-mf[4].start)/7),ut=(nt?58:44)-Li(K)*8;o.position.set(oi.glyph+Math.sin(K*1.4)*3,.6,ut),o.lookAt(oi.glyph,0,0)}if(L===1){Yt(Li((Y-8.2)/3.8));const K=Do((Y-12.2)/1.2);zt.visible=Y>12.2;const ut=Math.max(0,Y-13.4);zt.position.set(Ki.lerp(-.13,.334,Li(K))+Math.sin(K*9)*.05*(1-K)+ut*.004,Ki.lerp(1.34,.852,K*K),Ki.lerp(.3,.543,K)+Math.cos(K*7)*.04*(1-K)),zt.rotation.set(K<1?K*8:-Math.PI/2,K*5+ut*.2,K<1?Math.sin(K*11):0)}if(L===2&&(Ct.draw(Y-15),Nt.needsUpdate=!0,se.forEach((K,ut)=>{K.rotation.y=Math.sin(Y*.7+ut*1.9)*.35*Math.max(0,Math.sin(Y*.4+ut))})),L===3&&(qt.animate(Y),Xt.animate(Y),Vt.forEach(([K,ut,Dt,fe],Me)=>{const Qe=(Y*(.3+Dt*.3)+fe*6)%5.4;et.set(-.8+K*4.6-Qe*.35+Math.sin(Y*1.3+fe*10)*.15,5.3-Qe,-1+ut*2.4),rt.setFromEuler(Wt.set(Y*(1+K)+fe*6,Y*.7+ut*6,Y*(.5+Dt))),Bt.setMatrixAt(Me,O.compose(et,rt,Et.set(1,1,1)))}),Bt.instanceMatrix.needsUpdate=!0),L===4){const K=oe.uBig.value;oe.uCols.value=nt?2:5,Gt.position.set(K*.42,-K*.42,1),J.opacity=Li((Y-34.4)/.5),Gt.scale.setScalar(1+.4*(1-Li((Y-34.4)/.35)))}}})}function tC(s){var a;const t=[],{shots:n}=s;if(n.length||t.push("it has no shots"),n.forEach((o,l)=>{const c=l===0?0:n[l-1].end;o.start!==c&&t.push(`shot ${l+1} starts at ${o.start}s, expected ${c}s`),o.end<=o.start&&t.push(`shot ${l+1} ends before it starts`);for(const[h,p]of[["title.en",o.title.en],["title.zh",o.title.zh],["caption.en",o.caption.en],["caption.zh",o.caption.zh],["quote",o.quote]])p.trim()||t.push(`shot ${l+1} has an empty ${h}`)}),n.length&&n[n.length-1].end!==hr&&t.push(`the last shot must end at ${hr}s`),((a=n[0])==null?void 0:a.cut)===!1&&t.push("the first shot cannot continue a previous one"),s.subtitles.forEach((o,l)=>{(o.start<0||o.end>hr||o.end<=o.start)&&t.push(`subtitle ${l+1} must lie between 0 and ${hr}s and end after it starts`),l>0&&o.start<s.subtitles[l-1].end&&t.push(`subtitle ${l+1} overlaps the one before it`),(!o.zh.trim()||!o.en.trim())&&t.push(`subtitle ${l+1} needs both Chinese and English text`)}),t.length)throw new Error(`Invalid cinema story "${s.title.en}": ${t.join("; ")}.`);return s}function eC(s,t){const n=s.findIndex(a=>t<a.end);return n===-1?s.length-1:n}function nC(s,t){return s.find(n=>t>=n.start&&t<n.end)}function iC(s,t){const n=s.slice(1).filter(o=>o.cut!==!1);if(!n.length)return 0;const a=Math.min(...n.map(o=>Math.abs(t-o.start)));return Math.max(0,1-a/.5)}const Jc=tC({title:{en:"The capital, a theatre of feeling",zh:"京华繁梦，一字情深"},description:{en:"From the clouds above the capital, through a moon in a wine cup, a shadow-play screen and a moon gate, to a single word: feeling. The figures represent the unnamed gentlemen and performers in this passage.",zh:"自天边云端降入京城，经杯中月、灯下影、月洞门，终归一个“情”字。画中人物为本段所写的无名君子与优伶。"},shots:[{start:0,end:7,title:{en:"A foot and five from heaven",zh:"尺五天边"},quote:"京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭",caption:{en:"Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.",zh:"自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。"}},{start:7,end:15,title:{en:"Drunk on the moon, judging flowers",zh:"醉月评花"},quote:"人在大千队里，时时醉月评花。",caption:{en:"Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.",zh:"楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。"}},{start:15,end:22,title:{en:"A playful brush",zh:"游戏之笔"},quote:"遂以游戏之笔，摹写游戏之人。",caption:{en:"On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.",zh:"灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。"}},{start:22,end:29,title:{en:"Fond, never wanton",zh:"好色不淫"},quote:"几个用情守礼之君子，与几个洁身自好的优伶",caption:{en:"At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.",zh:"月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。"}},{start:29,end:36,title:{en:"One word: feeling",zh:"皆是一个情字"},quote:"先将缙绅中子弟分作十种，皆是一个情字。",caption:{en:"Drops of ink gather into ten kinds of people, and all ten are written with the same character: 情, feeling.",zh:"点点墨迹聚成十种人物，十种终归一字——情。"}}],subtitles:[{start:.4,end:3.6,zh:"京师演戏之盛，甲于天下。",en:"The theatrical arts of the capital are renowned as the finest under heaven."},{start:3.6,end:6.8,zh:"地当尺五天边，处处歌台舞榭；",en:"Here, at the very foot of the celestial throne, singing pavilions and dancing terraces grace every corner;"},{start:7.4,end:11,zh:"人在大千队里，时时醉月评花。",en:"within the bustling multitudes, people spend their days intoxicated by moonlight and evaluating the beauty of the flowers."},{start:11,end:14.6,zh:"真乃说不尽的繁华，描不尽的情态。",en:"Truly, its prosperity defies description and its myriad sentiments exceed depiction."},{start:15.4,end:18.6,zh:"一时闻闻见见，怪怪奇奇，事不出于理之所无，人尽入于情之所有，",en:"The bizarre and wondrous sights here, though strange, do not stray beyond reason, yet touch the depths of human feeling."},{start:18.6,end:21.6,zh:"遂以游戏之笔，摹写游戏之人。",en:"Thus, with a playful brush, I trace the lives of playful souls."},{start:22.4,end:25.8,zh:"而游戏之中最难得者，几个用情守礼之君子，与几个洁身自好的优伶，",en:"Yet the rarest among them are a few gentlemen who love deeply while holding fast to propriety, and a few performers who keep themselves pure,"},{start:25.8,end:28.6,zh:"真合着《国风》好色不淫一句。",en:"perfectly embodying the Airs of the States: “fond of beauty yet not licentious.”"},{start:29.4,end:35.6,zh:"先将缙绅中子弟分作十种，皆是一个情字。",en:"Let me first classify the young lords of the gentry into ten kinds, all united by the single word: feeling."}]}),ur={bow:{start:22,end:29,label:"The bow"},theatre:{start:15,end:22,label:"Shadow play"},full:{start:0,end:36,label:"Full film"}},q1=[{title:"The original gesture",tag:"A / ORIGINAL",description:"The original lantern-lit film from 3d35dc54. A single waist pivot carries the upper body through each bow.",factory:Iw},{title:"A more fluid performance",tag:"B / SMOOTH MOVEMENT",description:"The head leads, the body follows, and the sleeves settle last. Independent articulation gives each gesture a softer rhythm.",factory:$w}];function aC(){const s=ai.useRef([]),t=ai.useRef([]),n=ai.useRef(22.6),[a,o]=ai.useState(22.6),[l,c]=ai.useState(!1),[h,p]=ai.useState(!1),[d,g]=ai.useState(""),[v,_]=ai.useState("bow"),[S,b]=ai.useState(!0),[C,y]=ai.useState(1),[x,R]=ai.useState("en"),[D,A]=ai.useState(!0),[P,U]=ai.useState(!0);ai.useEffect(()=>{const W=()=>{g("The film could not render. Please reload with WebGL and hardware acceleration enabled."),c(!1),p(!1)};try{q1.forEach((tt,G)=>{const $=tt.factory(s.current[G],()=>{},W);t.current.push($),$.seek(n.current)}),p(!0)}catch(tt){console.error(tt),W()}return()=>{t.current.forEach(tt=>tt.dispose()),t.current=[]}},[]);const O=W=>{n.current=W,t.current.forEach(tt=>tt.seek(W)),o(W)};ai.useEffect(()=>{if(!l||!h)return;let W=0,tt=0;const G=()=>{tt=0};document.addEventListener("visibilitychange",G);const $=F=>{if(!document.hidden&&tt){const V=ur[v];let ft=n.current+(F-tt)/1e3*C;if(ft>=V.end)if(S)ft=V.start+(ft-V.start)%(V.end-V.start);else{O(V.end),c(!1);return}O(ft)}tt=F,W=requestAnimationFrame($)};return W=requestAnimationFrame($),()=>{cancelAnimationFrame(W),document.removeEventListener("visibilitychange",G)}},[l,h,v,C,S]);const E=W=>{_(W),O(ur[W].start+.05),c(!0)},z=Jc.shots[eC(Jc.shots,a)],H=nC(Jc.subtitles,a),X=ur[v];return ue.jsxs("main",{className:"movement-study",children:[ue.jsxs("header",{children:[ue.jsxs("a",{className:"brand",href:"https://ph-bj.github.io",children:["品花宝境 ",ue.jsx("span",{children:"PRECIOUS VIBE"})]}),ue.jsx("span",{className:"edition",children:"MOVEMENT STUDY / 002"})]}),ue.jsxs("section",{className:"intro",children:[ue.jsx("div",{className:"eyebrow",children:"CHAPTER ONE · PARAGRAPH ONE · LANTERN-LIT ORIGINAL"}),ue.jsxs("h1",{children:["The feeling in ",ue.jsx("em",{children:"a gesture."})]}),ue.jsxs("p",{children:["Original movement on the left. A smoother performance on the right.",ue.jsx("br",{}),"The same moonlight, silhouettes and camera. Watch what changes when the body moves in parts."]})]}),ue.jsxs("div",{className:"motion-options",children:[ue.jsx("div",{className:"excerpt-buttons",role:"group","aria-label":"Choose a passage",children:Object.keys(ur).map(W=>ue.jsxs("button",{disabled:!h,"aria-pressed":v===W,onClick:()=>E(W),children:[ur[W].label,ue.jsxs("span",{children:[ur[W].start,"–",ur[W].end,"s"]})]},W))}),ue.jsxs("label",{className:"detail-toggle",children:[ue.jsx("input",{type:"checkbox",checked:P,onChange:W=>U(W.target.checked)})," Close view of gestures"]})]}),ue.jsx("section",{className:`motion-gallery ${P&&v!=="full"?"close-view":""}`,"aria-label":"Original and smooth movement side by side",children:q1.map((W,tt)=>ue.jsxs("article",{className:"study",children:[ue.jsxs("div",{className:"screen",children:[ue.jsx("div",{className:"canvas-host",ref:G=>{s.current[tt]=G}}),ue.jsx("div",{className:"cut",style:{opacity:iC(Jc.shots,a)}}),ue.jsx("span",{className:"screen-label",children:W.tag})]}),ue.jsxs("div",{className:"study-copy",children:[ue.jsx("span",{children:tt===0?"01 / ARCHIVED PERFORMANCE":"02 / ARTICULATED PERFORMANCE"}),ue.jsx("h2",{children:W.title}),ue.jsx("p",{children:W.description})]})]},W.tag))}),d&&ue.jsx("div",{className:"error",role:"alert",children:d}),ue.jsxs("section",{className:"transport","aria-label":"Shared playback controls",children:[ue.jsx("button",{className:"play",disabled:!h,onClick:()=>{n.current>=X.end&&O(X.start),c(!l)},children:l?"Ⅱ Pause":"▶ Play both"}),ue.jsx("button",{disabled:!h,onClick:()=>{O(X.start),c(!0)},children:"↺ Replay"}),ue.jsx("input",{"aria-label":"Shared film timeline",type:"range",min:X.start,max:X.end,step:".01",value:a,disabled:!h,onChange:W=>O(Number(W.target.value))}),ue.jsxs("output",{children:[a.toFixed(1)," ",ue.jsxs("span",{children:["/ ",X.end,"s"]})]}),ue.jsxs("label",{className:"rate",children:["Speed ",ue.jsxs("select",{"aria-label":"Playback speed",value:C,onChange:W=>y(Number(W.target.value)),children:[ue.jsx("option",{value:"1",children:"1×"}),ue.jsx("option",{value:"0.5",children:"½×"})]})]}),ue.jsxs("button",{"aria-pressed":S,onClick:()=>b(!S),children:["Loop ",S?"on":"off"]})]}),ue.jsxs("div",{className:"caption-row",children:[ue.jsx("span",{children:z.title[x]}),ue.jsxs("div",{children:[ue.jsxs("button",{"aria-pressed":D,onClick:()=>A(!D),children:["Captions ",D?"on":"off"]}),ue.jsx("button",{onClick:()=>R(x==="en"?"zh":"en"),children:x==="en"?"中文":"English"})]})]}),D&&ue.jsx("p",{className:"shared-caption",children:(H==null?void 0:H[x])??z.quote}),ue.jsxs("section",{className:"motion-notes",children:[ue.jsxs("div",{children:[ue.jsx("span",{className:"eyebrow",children:"WHAT TO WATCH"}),ue.jsxs("h3",{children:["A gesture has a beginning,",ue.jsx("br",{}),"a weight, and an afterlife."]})]}),ue.jsxs("ol",{children:[ue.jsxs("li",{children:[ue.jsx("strong",{children:"Before the bow"}),ue.jsx("p",{children:"A small acknowledgement of the head and preparation of the hands."})]}),ue.jsxs("li",{children:[ue.jsx("strong",{children:"Through the movement"}),ue.jsx("p",{children:"A softer descent, a slight weight shift and feet that remain on the ground."})]}),ue.jsxs("li",{children:[ue.jsx("strong",{children:"After the gesture"}),ue.jsx("p",{children:"The head, elbows and sleeves return at different moments, then settle."})]})]})]}),ue.jsxs("footer",{children:[ue.jsx("span",{children:"Both views use the lantern-lit original. A single clock keeps them synchronized."}),ue.jsx("a",{href:"./aesthetics.html",children:"Explore the five aesthetic studies ↗"})]})]})}Jy.createRoot(document.getElementById("root")).render(ue.jsx(aC,{}));
