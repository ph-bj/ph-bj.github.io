(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var _d={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function qM(){if(S_)return fl;S_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return fl.Fragment=t,fl.jsx=n,fl.jsxs=n,fl}var y_;function YM(){return y_||(y_=1,_d.exports=qM()),_d.exports}var ve=YM(),xd={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function ZM(){if(M_)return Se;M_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function S(P,et,gt){this.props=P,this.context=et,this.refs=y,this.updater=gt||b}S.prototype.isReactComponent={},S.prototype.setState=function(P,et){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,et,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function w(){}w.prototype=S.prototype;function N(P,et,gt){this.props=P,this.context=et,this.refs=y,this.updater=gt||b}var A=N.prototype=new w;A.constructor=N,R(A,S.prototype),A.isPureReactComponent=!0;var O=Array.isArray;function D(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function L(P,et,gt){var Pt=gt.ref;return{$$typeof:s,type:P,key:et,ref:Pt!==void 0?Pt:null,props:gt}}function B(P,et){return L(P.type,et,P.props)}function W(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function Z(P){var et={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(gt){return et[gt]})}var $=/\/+/g;function Y(P,et){return typeof P=="object"&&P!==null&&P.key!=null?Z(""+P.key):et.toString(36)}function j(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(et){P.status==="pending"&&(P.status="fulfilled",P.value=et)},function(et){P.status==="pending"&&(P.status="rejected",P.reason=et)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function F(P,et,gt,Pt,Vt){var Wt=typeof P;(Wt==="undefined"||Wt==="boolean")&&(P=null);var at=!1;if(P===null)at=!0;else switch(Wt){case"bigint":case"string":case"number":at=!0;break;case"object":switch(P.$$typeof){case s:case t:at=!0;break;case g:return at=P._init,F(at(P._payload),et,gt,Pt,Vt)}}if(at)return Vt=Vt(P),at=Pt===""?"."+Y(P,0):Pt,O(Vt)?(gt="",at!=null&&(gt=at.replace($,"$&/")+"/"),F(Vt,et,gt,"",function(ce){return ce})):Vt!=null&&(W(Vt)&&(Vt=B(Vt,gt+(Vt.key==null||P&&P.key===Vt.key?"":(""+Vt.key).replace($,"$&/")+"/")+at)),et.push(Vt)),1;at=0;var St=Pt===""?".":Pt+":";if(O(P))for(var Ot=0;Ot<P.length;Ot++)Pt=P[Ot],Wt=St+Y(Pt,Ot),at+=F(Pt,et,gt,Wt,Vt);else if(Ot=x(P),typeof Ot=="function")for(P=Ot.call(P),Ot=0;!(Pt=P.next()).done;)Pt=Pt.value,Wt=St+Y(Pt,Ot++),at+=F(Pt,et,gt,Wt,Vt);else if(Wt==="object"){if(typeof P.then=="function")return F(j(P),et,gt,Pt,Vt);throw et=String(P),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return at}function V(P,et,gt){if(P==null)return P;var Pt=[],Vt=0;return F(P,Pt,"","",function(Wt){return et.call(gt,Wt,Vt++)}),Pt}function ut(P){if(P._status===-1){var et=P._result;et=et(),et.then(function(gt){(P._status===0||P._status===-1)&&(P._status=1,P._result=gt)},function(gt){(P._status===0||P._status===-1)&&(P._status=2,P._result=gt)}),P._status===-1&&(P._status=0,P._result=et)}if(P._status===1)return P._result.default;throw P._result}var nt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ht={map:V,forEach:function(P,et,gt){V(P,function(){et.apply(this,arguments)},gt)},count:function(P){var et=0;return V(P,function(){et++}),et},toArray:function(P){return V(P,function(et){return et})||[]},only:function(P){if(!W(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return Se.Activity=_,Se.Children=ht,Se.Component=S,Se.Fragment=n,Se.Profiler=o,Se.PureComponent=N,Se.StrictMode=a,Se.Suspense=d,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Se.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},Se.cache=function(P){return function(){return P.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(P,et,gt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Pt=R({},P.props),Vt=P.key;if(et!=null)for(Wt in et.key!==void 0&&(Vt=""+et.key),et)!E.call(et,Wt)||Wt==="key"||Wt==="__self"||Wt==="__source"||Wt==="ref"&&et.ref===void 0||(Pt[Wt]=et[Wt]);var Wt=arguments.length-2;if(Wt===1)Pt.children=gt;else if(1<Wt){for(var at=Array(Wt),St=0;St<Wt;St++)at[St]=arguments[St+2];Pt.children=at}return L(P.type,Vt,Pt)},Se.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},Se.createElement=function(P,et,gt){var Pt,Vt={},Wt=null;if(et!=null)for(Pt in et.key!==void 0&&(Wt=""+et.key),et)E.call(et,Pt)&&Pt!=="key"&&Pt!=="__self"&&Pt!=="__source"&&(Vt[Pt]=et[Pt]);var at=arguments.length-2;if(at===1)Vt.children=gt;else if(1<at){for(var St=Array(at),Ot=0;Ot<at;Ot++)St[Ot]=arguments[Ot+2];Vt.children=St}if(P&&P.defaultProps)for(Pt in at=P.defaultProps,at)Vt[Pt]===void 0&&(Vt[Pt]=at[Pt]);return L(P,Wt,Vt)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:h,render:P}},Se.isValidElement=W,Se.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ut}},Se.memo=function(P,et){return{$$typeof:p,type:P,compare:et===void 0?null:et}},Se.startTransition=function(P){var et=z.T,gt={};z.T=gt;try{var Pt=P(),Vt=z.S;Vt!==null&&Vt(gt,Pt),typeof Pt=="object"&&Pt!==null&&typeof Pt.then=="function"&&Pt.then(D,nt)}catch(Wt){nt(Wt)}finally{et!==null&&gt.types!==null&&(et.types=gt.types),z.T=et}},Se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Se.use=function(P){return z.H.use(P)},Se.useActionState=function(P,et,gt){return z.H.useActionState(P,et,gt)},Se.useCallback=function(P,et){return z.H.useCallback(P,et)},Se.useContext=function(P){return z.H.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P,et){return z.H.useDeferredValue(P,et)},Se.useEffect=function(P,et){return z.H.useEffect(P,et)},Se.useEffectEvent=function(P){return z.H.useEffectEvent(P)},Se.useId=function(){return z.H.useId()},Se.useImperativeHandle=function(P,et,gt){return z.H.useImperativeHandle(P,et,gt)},Se.useInsertionEffect=function(P,et){return z.H.useInsertionEffect(P,et)},Se.useLayoutEffect=function(P,et){return z.H.useLayoutEffect(P,et)},Se.useMemo=function(P,et){return z.H.useMemo(P,et)},Se.useOptimistic=function(P,et){return z.H.useOptimistic(P,et)},Se.useReducer=function(P,et,gt){return z.H.useReducer(P,et,gt)},Se.useRef=function(P){return z.H.useRef(P)},Se.useState=function(P){return z.H.useState(P)},Se.useSyncExternalStore=function(P,et,gt){return z.H.useSyncExternalStore(P,et,gt)},Se.useTransition=function(){return z.H.useTransition()},Se.version="19.2.7",Se}var b_;function im(){return b_||(b_=1,xd.exports=ZM()),xd.exports}var Ei=im(),Sd={exports:{}},hl={},yd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function KM(){return E_||(E_=1,(function(s){function t(F,V){var ut=F.length;F.push(V);t:for(;0<ut;){var nt=ut-1>>>1,ht=F[nt];if(0<o(ht,V))F[nt]=V,F[ut]=ht,ut=nt;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var V=F[0],ut=F.pop();if(ut!==V){F[0]=ut;t:for(var nt=0,ht=F.length,P=ht>>>1;nt<P;){var et=2*(nt+1)-1,gt=F[et],Pt=et+1,Vt=F[Pt];if(0>o(gt,ut))Pt<ht&&0>o(Vt,gt)?(F[nt]=Vt,F[Pt]=ut,nt=Pt):(F[nt]=gt,F[et]=ut,nt=et);else if(Pt<ht&&0>o(Vt,ut))F[nt]=Vt,F[Pt]=ut,nt=Pt;else break t}}return V}function o(F,V){var ut=F.sortIndex-V.sortIndex;return ut!==0?ut:F.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,v=3,x=!1,b=!1,R=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function A(F){for(var V=n(p);V!==null;){if(V.callback===null)a(p);else if(V.startTime<=F)a(p),V.sortIndex=V.expirationTime,t(d,V);else break;V=n(p)}}function O(F){if(R=!1,A(F),!b)if(n(d)!==null)b=!0,D||(D=!0,Z());else{var V=n(p);V!==null&&j(O,V.startTime-F)}}var D=!1,z=-1,E=5,L=-1;function B(){return y?!0:!(s.unstable_now()-L<E)}function W(){if(y=!1,D){var F=s.unstable_now();L=F;var V=!0;try{t:{b=!1,R&&(R=!1,w(z),z=-1),x=!0;var ut=v;try{e:{for(A(F),_=n(d);_!==null&&!(_.expirationTime>F&&B());){var nt=_.callback;if(typeof nt=="function"){_.callback=null,v=_.priorityLevel;var ht=nt(_.expirationTime<=F);if(F=s.unstable_now(),typeof ht=="function"){_.callback=ht,A(F),V=!0;break e}_===n(d)&&a(d),A(F)}else a(d);_=n(d)}if(_!==null)V=!0;else{var P=n(p);P!==null&&j(O,P.startTime-F),V=!1}}break t}finally{_=null,v=ut,x=!1}V=void 0}}finally{V?Z():D=!1}}}var Z;if(typeof N=="function")Z=function(){N(W)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Y=$.port2;$.port1.onmessage=W,Z=function(){Y.postMessage(null)}}else Z=function(){S(W,0)};function j(F,V){z=S(function(){F(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var ut=v;v=V;try{return F()}finally{v=ut}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ut=v;v=F;try{return V()}finally{v=ut}},s.unstable_scheduleCallback=function(F,V,ut){var nt=s.unstable_now();switch(typeof ut=="object"&&ut!==null?(ut=ut.delay,ut=typeof ut=="number"&&0<ut?nt+ut:nt):ut=nt,F){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=ut+ht,F={id:g++,callback:V,priorityLevel:F,startTime:ut,expirationTime:ht,sortIndex:-1},ut>nt?(F.sortIndex=ut,t(p,F),n(d)===null&&F===n(p)&&(R?(w(z),z=-1):R=!0,j(O,ut-nt))):(F.sortIndex=ht,t(d,F),b||x||(b=!0,D||(D=!0,Z()))),F},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(F){var V=v;return function(){var ut=v;v=V;try{return F.apply(this,arguments)}finally{v=ut}}}})(Md)),Md}var T_;function JM(){return T_||(T_=1,yd.exports=KM()),yd.exports}var bd={exports:{}},qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function QM(){if(A_)return qn;A_=1;var s=im();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(d,p,null,g)},qn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},qn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},qn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},qn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},qn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},qn.requestFormReset=function(d){a.d.r(d)},qn.unstable_batchedUpdates=function(d,p){return d(p)},qn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},qn.version="19.2.7",qn}var w_;function jM(){if(w_)return bd.exports;w_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),bd.exports=QM(),bd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function $M(){if(R_)return hl;R_=1;var s=JM(),t=im(),n=jM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===r)return d(f),e;if(m===l)return d(f),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=m;else{for(var M=!1,U=f.child;U;){if(U===r){M=!0,r=f,l=m;break}if(U===l){M=!0,l=f,r=m;break}U=U.sibling}if(!M){for(U=m.child;U;){if(U===r){M=!0,r=m,l=f;break}if(U===l){M=!0,l=m,r=f;break}U=U.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),B=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function Y(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case D:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case A:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return i=e.displayName||null,i!==null?i:Y(e.type)||"Memo";case E:i=e._payload,e=e._init;try{return Y(e(i))}catch{}}return null}var j=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut={pending:!1,data:null,method:null,action:null},nt=[],ht=-1;function P(e){return{current:e}}function et(e){0>ht||(e.current=nt[ht],nt[ht]=null,ht--)}function gt(e,i){ht++,nt[ht]=e.current,e.current=i}var Pt=P(null),Vt=P(null),Wt=P(null),at=P(null);function St(e,i){switch(gt(Wt,i),gt(Vt,e),gt(Pt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?kv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=kv(i),e=Xv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(Pt),gt(Pt,e)}function Ot(){et(Pt),et(Vt),et(Wt)}function ce(e){e.memoizedState!==null&&gt(at,e);var i=Pt.current,r=Xv(i,e.type);i!==r&&(gt(Vt,e),gt(Pt,r))}function qt(e){Vt.current===e&&(et(Pt),et(Vt)),at.current===e&&(et(at),ol._currentValue=ut)}var he,Nt;function st(e){if(he===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);he=i&&i[1]||"",Nt=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+e+Nt}var vt=!1;function Et(e,i){if(!e||vt)return"";vt=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Dt=function(){throw Error()};if(Object.defineProperty(Dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Dt,[])}catch(_t){var ft=_t}Reflect.construct(e,[],Dt)}else{try{Dt.call()}catch(_t){ft=_t}e.call(Dt.prototype)}}else{try{throw Error()}catch(_t){ft=_t}(Dt=e())&&typeof Dt.catch=="function"&&Dt.catch(function(){})}}catch(_t){if(_t&&ft&&typeof _t.stack=="string")return[_t.stack,ft.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),M=m[0],U=m[1];if(M&&U){var k=M.split(`
`),ct=U.split(`
`);for(f=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ct.length&&!ct[f].includes("DetermineComponentFrameRoot");)f++;if(l===k.length||f===ct.length)for(l=k.length-1,f=ct.length-1;1<=l&&0<=f&&k[l]!==ct[f];)f--;for(;1<=l&&0<=f;l--,f--)if(k[l]!==ct[f]){if(l!==1||f!==1)do if(l--,f--,0>f||k[l]!==ct[f]){var At=`
`+k[l].replace(" at new "," at ");return e.displayName&&At.includes("<anonymous>")&&(At=At.replace("<anonymous>",e.displayName)),At}while(1<=l&&0<=f);break}}}finally{vt=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?st(r):""}function Tt(e,i){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==i&&i!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return st("Activity");default:return""}}function bt(e){try{var i="",r=null;do i+=Tt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var zt=Object.prototype.hasOwnProperty,Lt=s.unstable_scheduleCallback,Yt=s.unstable_cancelCallback,se=s.unstable_shouldYield,X=s.unstable_requestPaint,de=s.unstable_now,_e=s.unstable_getCurrentPriorityLevel,I=s.unstable_ImmediatePriority,T=s.unstable_UserBlockingPriority,Q=s.unstable_NormalPriority,it=s.unstable_LowPriority,xt=s.unstable_IdlePriority,It=s.log,Bt=s.unstable_setDisableYieldValue,mt=null,yt=null;function Ft(e){if(typeof It=="function"&&Bt(e),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(mt,e)}catch{}}var $t=Math.clz32?Math.clz32:oe,Zt=Math.log,Xt=Math.LN2;function oe(e){return e>>>=0,e===0?32:31-(Zt(e)/Xt|0)|0}var fe=256,me=262144,J=4194304;function Gt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,m=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var U=l&134217727;return U!==0?(l=U&~m,l!==0?f=Gt(l):(M&=U,M!==0?f=Gt(M):r||(r=U&~e,r!==0&&(f=Gt(r))))):(U=l&~m,U!==0?f=Gt(U):M!==0?f=Gt(M):r||(r=l&~e,r!==0&&(f=Gt(r)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:f}function kt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Jt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H(){var e=J;return J<<=1,(J&62914560)===0&&(J=4194304),e}function dt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Rt(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ut(e,i,r,l,f,m){var M=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var U=e.entanglements,k=e.expirationTimes,ct=e.hiddenUpdates;for(r=M&~r;0<r;){var At=31-$t(r),Dt=1<<At;U[At]=0,k[At]=-1;var ft=ct[At];if(ft!==null)for(ct[At]=null,At=0;At<ft.length;At++){var _t=ft[At];_t!==null&&(_t.lane&=-536870913)}r&=~Dt}l!==0&&Ht(e,l,0),m!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=m&~(M&~i))}function Ht(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-$t(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Me(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-$t(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function Ie(e,i){var r=i&-i;return r=(r&42)!==0?1:dn(r),(r&(e.suspendedLanes|i))!==0?0:r}function dn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ci(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oi(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function on(e,i){var r=V.p;try{return V.p=e,i()}finally{V.p=r}}var bn=Math.random().toString(36).slice(2),nn="__reactFiber$"+bn,Fe="__reactProps$"+bn,Sn="__reactContainer$"+bn,va="__reactEvents$"+bn,Jl="__reactListeners$"+bn,Ql="__reactHandles$"+bn,Ns="__reactResources$"+bn,Ya="__reactMarker$"+bn;function Za(e){delete e[nn],delete e[Fe],delete e[va],delete e[Jl],delete e[Ql]}function _a(e){var i=e[nn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Sn]||r[nn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Qv(e);e!==null;){if(r=e[nn])return r;e=Qv(e)}return i}e=r,r=e.parentNode}return null}function xa(e){if(e=e[nn]||e[Sn]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ls(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Ka(e){var i=e[Ns];return i||(i=e[Ns]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function En(e){e[Ya]=!0}var jl=new Set,bo={};function C(e,i){q(e,i),q(e+"Capture",i)}function q(e,i){for(bo[e]=i,e=0;e<i.length;e++)jl.add(i[e])}var pt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},ot={};function Qt(e){return zt.call(ot,e)?!0:zt.call(rt,e)?!1:pt.test(e)?ot[e]=!0:(rt[e]=!0,!1)}function ne(e,i,r){if(Qt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Kt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function te(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){r=""+M,m.call(this,M)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(M){r=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function re(e){if(!e._valueTracker){var i=be(e)?"checked":"value";e._valueTracker=De(e,i,""+e[i])}}function Ge(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=be(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var an=/[\n"\\]/g;function Ae(e){return e.replace(an,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Tn(e,i,r,l,f,m,M,U){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+ee(i)):e.value!==""+ee(i)&&(e.value=""+ee(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Nn(e,M,ee(i)):r!=null?Nn(e,M,ee(r)):l!=null&&e.removeAttribute("value"),f==null&&m!=null&&(e.defaultChecked=!!m),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+ee(U):e.removeAttribute("name")}function ie(e,i,r,l,f,m,M,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){re(e);return}r=r!=null?""+ee(r):"",i=i!=null?""+ee(i):r,U||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=U?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),re(e)}function Nn(e,i,r){i==="number"&&ln(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function we(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+ee(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function jn(e,i,r){if(i!=null&&(i=""+ee(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+ee(r):""}function gi(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(j(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=ee(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),re(e)}function $n(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Ja=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xe(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||Ja.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function fn(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Xe(e,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Xe(e,m,i[m])}function Di(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var je=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ta=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ki(e){return ta.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ui(){}var mf=null;function gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function Vm(e){var i=xa(e);if(i&&(e=i.stateNode)){var r=e[Fe]||null;t:switch(e=i.stateNode,i.type){case"input":if(Tn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ae(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[Fe]||null;if(!f)throw Error(a(90));Tn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Ge(l)}break t;case"textarea":jn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&we(e,!!r.multiple,i,!1)}}}var vf=!1;function km(e,i,r){if(vf)return e(i,r);vf=!0;try{var l=e(i);return l}finally{if(vf=!1,(dr!==null||pr!==null)&&(Fc(),dr&&(i=dr,e=pr,pr=dr=null,Vm(i),e)))for(i=0;i<e.length;i++)Vm(e[i])}}function Eo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Fe]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=!1;if(Sa)try{var To={};Object.defineProperty(To,"passive",{get:function(){_f=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{_f=!1}var Qa=null,xf=null,$l=null;function Xm(){if($l)return $l;var e,i=xf,r=i.length,l,f="value"in Qa?Qa.value:Qa.textContent,m=f.length;for(e=0;e<r&&i[e]===f[e];e++);var M=r-e;for(l=1;l<=M&&i[r-l]===f[m-l];l++);return $l=f.slice(e,1<l?1-l:void 0)}function tc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ec(){return!0}function Wm(){return!1}function li(e){function i(r,l,f,m,M){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(r=e[U],this[U]=r?r(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ec:Wm,this.isPropagationStopped=Wm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ec)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ec)},persist:function(){},isPersistent:ec}),i}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=li(Os),Ao=_({},Os,{view:0,detail:0}),XS=li(Ao),Sf,yf,wo,ic=_({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wo&&(wo&&e.type==="mousemove"?(Sf=e.screenX-wo.screenX,yf=e.screenY-wo.screenY):yf=Sf=0,wo=e),Sf)},movementY:function(e){return"movementY"in e?e.movementY:yf}}),qm=li(ic),WS=_({},ic,{dataTransfer:0}),qS=li(WS),YS=_({},Ao,{relatedTarget:0}),Mf=li(YS),ZS=_({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=li(ZS),JS=_({},Os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),QS=li(JS),jS=_({},Os,{data:0}),Ym=li(jS),$S={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ey={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ey[e])?!!i[e]:!1}function bf(){return ny}var iy=_({},Ao,{key:function(e){if(e.key){var i=$S[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=tc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(e){return e.type==="keypress"?tc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ay=li(iy),sy=_({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=li(sy),ry=_({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),oy=li(ry),ly=_({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=li(ly),uy=_({},ic,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fy=li(uy),hy=_({},Os,{newState:0,oldState:0}),dy=li(hy),py=[9,13,27,32],Ef=Sa&&"CompositionEvent"in window,Ro=null;Sa&&"documentMode"in document&&(Ro=document.documentMode);var my=Sa&&"TextEvent"in window&&!Ro,Km=Sa&&(!Ef||Ro&&8<Ro&&11>=Ro),Jm=" ",Qm=!1;function jm(e,i){switch(e){case"keyup":return py.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function gy(e,i){switch(e){case"compositionend":return $m(i);case"keypress":return i.which!==32?null:(Qm=!0,Jm);case"textInput":return e=i.data,e===Jm&&Qm?null:e;default:return null}}function vy(e,i){if(mr)return e==="compositionend"||!Ef&&jm(e,i)?(e=Xm(),$l=xf=Qa=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Km&&i.locale!=="ko"?null:i.data;default:return null}}var _y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function t0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!_y[e.type]:i==="textarea"}function e0(e,i,r,l){dr?pr?pr.push(l):pr=[l]:dr=l,i=qc(i,"onChange"),0<i.length&&(r=new nc("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var Co=null,Do=null;function xy(e){Iv(e,0)}function ac(e){var i=Ls(e);if(Ge(i))return e}function n0(e,i){if(e==="change")return i}var i0=!1;if(Sa){var Tf;if(Sa){var Af="oninput"in document;if(!Af){var a0=document.createElement("div");a0.setAttribute("oninput","return;"),Af=typeof a0.oninput=="function"}Tf=Af}else Tf=!1;i0=Tf&&(!document.documentMode||9<document.documentMode)}function s0(){Co&&(Co.detachEvent("onpropertychange",r0),Do=Co=null)}function r0(e){if(e.propertyName==="value"&&ac(Do)){var i=[];e0(i,Do,e,gf(e)),km(xy,i)}}function Sy(e,i,r){e==="focusin"?(s0(),Co=i,Do=r,Co.attachEvent("onpropertychange",r0)):e==="focusout"&&s0()}function yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ac(Do)}function My(e,i){if(e==="click")return ac(i)}function by(e,i){if(e==="input"||e==="change")return ac(i)}function Ey(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var vi=typeof Object.is=="function"?Object.is:Ey;function Uo(e,i){if(vi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!zt.call(i,f)||!vi(e[f],i[f]))return!1}return!0}function o0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function l0(e,i){var r=o0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=o0(r)}}function c0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?c0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function u0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ln(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=ln(e.document)}return i}function wf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Ty=Sa&&"documentMode"in document&&11>=document.documentMode,gr=null,Rf=null,No=null,Cf=!1;function f0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Cf||gr==null||gr!==ln(l)||(l=gr,"selectionStart"in l&&wf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Uo(No,l)||(No=l,l=qc(Rf,"onSelect"),0<l.length&&(i=new nc("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=gr)))}function Ps(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var vr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Df={},h0={};Sa&&(h0=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function zs(e){if(Df[e])return Df[e];if(!vr[e])return e;var i=vr[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in h0)return Df[e]=i[r];return e}var d0=zs("animationend"),p0=zs("animationiteration"),m0=zs("animationstart"),Ay=zs("transitionrun"),wy=zs("transitionstart"),Ry=zs("transitioncancel"),g0=zs("transitionend"),v0=new Map,Uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uf.push("scrollEnd");function Xi(e,i){v0.set(e,i),C(i,[e])}var sc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ni=[],_r=0,Nf=0;function rc(){for(var e=_r,i=Nf=_r=0;i<e;){var r=Ni[i];Ni[i++]=null;var l=Ni[i];Ni[i++]=null;var f=Ni[i];Ni[i++]=null;var m=Ni[i];if(Ni[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}m!==0&&_0(r,f,m)}}function oc(e,i,r,l){Ni[_r++]=e,Ni[_r++]=i,Ni[_r++]=r,Ni[_r++]=l,Nf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Lf(e,i,r,l){return oc(e,i,r,l),lc(e)}function Is(e,i){return oc(e,null,null,i),lc(e)}function _0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(f=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,f&&i!==null&&(f=31-$t(r),e=m.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),m):null}function lc(e){if(50<tl)throw tl=0,Vh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var xr={};function Cy(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,i,r,l){return new Cy(e,i,r,l)}function Of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,i){var r=e.alternate;return r===null?(r=_i(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function x0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function cc(e,i,r,l,f,m){var M=0;if(l=e,typeof e=="function")Of(e)&&(M=1);else if(typeof e=="string")M=OM(e,r,Pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=_i(31,r,i,f),e.elementType=L,e.lanes=m,e;case R:return Bs(r.children,f,m,i);case y:M=8,f|=24;break;case S:return e=_i(12,r,i,f|2),e.elementType=S,e.lanes=m,e;case O:return e=_i(13,r,i,f),e.elementType=O,e.lanes=m,e;case D:return e=_i(19,r,i,f),e.elementType=D,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:M=10;break t;case w:M=9;break t;case A:M=11;break t;case z:M=14;break t;case E:M=16,l=null;break t}M=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=_i(M,r,i,f),i.elementType=e,i.type=l,i.lanes=m,i}function Bs(e,i,r,l){return e=_i(7,e,l,i),e.lanes=r,e}function Pf(e,i,r){return e=_i(6,e,null,i),e.lanes=r,e}function S0(e){var i=_i(18,null,null,0);return i.stateNode=e,i}function zf(e,i,r){return i=_i(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var y0=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var r=y0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:bt(i)},y0.set(e,i),i)}return{value:e,source:i,stack:bt(i)}}var Sr=[],yr=0,uc=null,Lo=0,Oi=[],Pi=0,ja=null,ea=1,na="";function Ma(e,i){Sr[yr++]=Lo,Sr[yr++]=uc,uc=e,Lo=i}function M0(e,i,r){Oi[Pi++]=ea,Oi[Pi++]=na,Oi[Pi++]=ja,ja=e;var l=ea;e=na;var f=32-$t(l)-1;l&=~(1<<f),r+=1;var m=32-$t(i)+f;if(30<m){var M=f-f%5;m=(l&(1<<M)-1).toString(32),l>>=M,f-=M,ea=1<<32-$t(i)+f|r<<f|l,na=m+e}else ea=1<<m|r<<f|l,na=e}function If(e){e.return!==null&&(Ma(e,1),M0(e,1,0))}function Bf(e){for(;e===uc;)uc=Sr[--yr],Sr[yr]=null,Lo=Sr[--yr],Sr[yr]=null;for(;e===ja;)ja=Oi[--Pi],Oi[Pi]=null,na=Oi[--Pi],Oi[Pi]=null,ea=Oi[--Pi],Oi[Pi]=null}function b0(e,i){Oi[Pi++]=ea,Oi[Pi++]=na,Oi[Pi++]=ja,ea=i.id,na=i.overflow,ja=e}var Hn=null,cn=null,Be=!1,$a=null,zi=!1,Ff=Error(a(519));function ts(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Li(i,e)),Ff}function E0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[nn]=e,i[Fe]=l,r){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(r=0;r<nl.length;r++)Le(nl[r],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":Le("invalid",i),ie(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Le("invalid",i);break;case"textarea":Le("invalid",i),gi(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Gv(i.textContent,r)?(l.popover!=null&&(Le("beforetoggle",i),Le("toggle",i)),l.onScroll!=null&&Le("scroll",i),l.onScrollEnd!=null&&Le("scrollend",i),l.onClick!=null&&(i.onclick=Ui),i=!0):i=!1,i||ts(e,!0)}function T0(e){for(Hn=e.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Hn=Hn.return}}function Mr(e){if(e!==Hn)return!1;if(!Be)return T0(e),Be=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||id(e.type,e.memoizedProps)),r=!r),r&&cn&&ts(e),T0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));cn=Jv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));cn=Jv(e)}else i===27?(i=cn,ps(e.type)?(e=ld,ld=null,cn=e):cn=i):cn=Hn?Bi(e.stateNode.nextSibling):null;return!0}function Fs(){cn=Hn=null,Be=!1}function Hf(){var e=$a;return e!==null&&(hi===null?hi=e:hi.push.apply(hi,e),$a=null),e}function Oo(e){$a===null?$a=[e]:$a.push(e)}var Gf=P(null),Hs=null,ba=null;function es(e,i,r){gt(Gf,i._currentValue),i._currentValue=r}function Ea(e){e._currentValue=Gf.current,et(Gf)}function Vf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function kf(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var m=f.dependencies;if(m!==null){var M=f.child;m=m.firstContext;t:for(;m!==null;){var U=m;m=f;for(var k=0;k<i.length;k++)if(U.context===i[k]){m.lanes|=r,U=m.alternate,U!==null&&(U.lanes|=r),Vf(m.return,r,e),l||(M=null);break t}m=U.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=r,m=M.alternate,m!==null&&(m.lanes|=r),Vf(M,r,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function br(e,i,r,l){e=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var U=f.type;vi(f.pendingProps.value,M.value)||(e!==null?e.push(U):e=[U])}}else if(f===at.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}f=f.return}e!==null&&kf(i,e,r,l),i.flags|=262144}function fc(e){for(e=e.firstContext;e!==null;){if(!vi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gs(e){Hs=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gn(e){return A0(Hs,e)}function hc(e,i){return Hs===null&&Gs(e),A0(e,i)}function A0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},ba===null){if(e===null)throw Error(a(308));ba=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ba=ba.next=i;return r}var Dy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Uy=s.unstable_scheduleCallback,Ny=s.unstable_NormalPriority,An={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xf(){return{controller:new Dy,data:new Map,refCount:0}}function Po(e){e.refCount--,e.refCount===0&&Uy(Ny,function(){e.controller.abort()})}var zo=null,Wf=0,Er=0,Tr=null;function Ly(e,i){if(zo===null){var r=zo=[];Wf=0,Er=Zh(),Tr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return Wf++,i.then(w0,w0),i}function w0(){if(--Wf===0&&zo!==null){Tr!==null&&(Tr.status="fulfilled");var e=zo;zo=null,Er=0,Tr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Oy(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var R0=F.S;F.S=function(e,i){fv=de(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Ly(e,i),R0!==null&&R0(e,i)};var Vs=P(null);function qf(){var e=Vs.current;return e!==null?e:sn.pooledCache}function dc(e,i){i===null?gt(Vs,Vs.current):gt(Vs,i.pool)}function C0(){var e=qf();return e===null?null:{parent:An._currentValue,pool:e}}var Ar=Error(a(460)),Yf=Error(a(474)),pc=Error(a(542)),mc={then:function(){}};function D0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function U0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Ui,Ui),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,L0(e),e;default:if(typeof i.status=="string")i.then(Ui,Ui);else{if(e=sn,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,L0(e),e}throw Xs=i,Ar}}function ks(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Xs=r,Ar):r}}var Xs=null;function N0(){if(Xs===null)throw Error(a(459));var e=Xs;return Xs=null,e}function L0(e){if(e===Ar||e===pc)throw Error(a(483))}var wr=null,Io=0;function gc(e){var i=Io;return Io+=1,wr===null&&(wr=[]),U0(wr,e,i)}function Bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function vc(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function O0(e){function i(tt,K){if(e){var lt=tt.deletions;lt===null?(tt.deletions=[K],tt.flags|=16):lt.push(K)}}function r(tt,K){if(!e)return null;for(;K!==null;)i(tt,K),K=K.sibling;return null}function l(tt){for(var K=new Map;tt!==null;)tt.key!==null?K.set(tt.key,tt):K.set(tt.index,tt),tt=tt.sibling;return K}function f(tt,K){return tt=ya(tt,K),tt.index=0,tt.sibling=null,tt}function m(tt,K,lt){return tt.index=lt,e?(lt=tt.alternate,lt!==null?(lt=lt.index,lt<K?(tt.flags|=67108866,K):lt):(tt.flags|=67108866,K)):(tt.flags|=1048576,K)}function M(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function U(tt,K,lt,wt){return K===null||K.tag!==6?(K=Pf(lt,tt.mode,wt),K.return=tt,K):(K=f(K,lt),K.return=tt,K)}function k(tt,K,lt,wt){var pe=lt.type;return pe===R?At(tt,K,lt.props.children,wt,lt.key):K!==null&&(K.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===E&&ks(pe)===K.type)?(K=f(K,lt.props),Bo(K,lt),K.return=tt,K):(K=cc(lt.type,lt.key,lt.props,null,tt.mode,wt),Bo(K,lt),K.return=tt,K)}function ct(tt,K,lt,wt){return K===null||K.tag!==4||K.stateNode.containerInfo!==lt.containerInfo||K.stateNode.implementation!==lt.implementation?(K=zf(lt,tt.mode,wt),K.return=tt,K):(K=f(K,lt.children||[]),K.return=tt,K)}function At(tt,K,lt,wt,pe){return K===null||K.tag!==7?(K=Bs(lt,tt.mode,wt,pe),K.return=tt,K):(K=f(K,lt),K.return=tt,K)}function Dt(tt,K,lt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Pf(""+K,tt.mode,lt),K.return=tt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return lt=cc(K.type,K.key,K.props,null,tt.mode,lt),Bo(lt,K),lt.return=tt,lt;case b:return K=zf(K,tt.mode,lt),K.return=tt,K;case E:return K=ks(K),Dt(tt,K,lt)}if(j(K)||Z(K))return K=Bs(K,tt.mode,lt,null),K.return=tt,K;if(typeof K.then=="function")return Dt(tt,gc(K),lt);if(K.$$typeof===N)return Dt(tt,hc(tt,K),lt);vc(tt,K)}return null}function ft(tt,K,lt,wt){var pe=K!==null?K.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return pe!==null?null:U(tt,K,""+lt,wt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case x:return lt.key===pe?k(tt,K,lt,wt):null;case b:return lt.key===pe?ct(tt,K,lt,wt):null;case E:return lt=ks(lt),ft(tt,K,lt,wt)}if(j(lt)||Z(lt))return pe!==null?null:At(tt,K,lt,wt,null);if(typeof lt.then=="function")return ft(tt,K,gc(lt),wt);if(lt.$$typeof===N)return ft(tt,K,hc(tt,lt),wt);vc(tt,lt)}return null}function _t(tt,K,lt,wt,pe){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return tt=tt.get(lt)||null,U(K,tt,""+wt,pe);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case x:return tt=tt.get(wt.key===null?lt:wt.key)||null,k(K,tt,wt,pe);case b:return tt=tt.get(wt.key===null?lt:wt.key)||null,ct(K,tt,wt,pe);case E:return wt=ks(wt),_t(tt,K,lt,wt,pe)}if(j(wt)||Z(wt))return tt=tt.get(lt)||null,At(K,tt,wt,pe,null);if(typeof wt.then=="function")return _t(tt,K,lt,gc(wt),pe);if(wt.$$typeof===N)return _t(tt,K,lt,hc(K,wt),pe);vc(K,wt)}return null}function le(tt,K,lt,wt){for(var pe=null,Ve=null,ue=K,Te=K=0,Pe=null;ue!==null&&Te<lt.length;Te++){ue.index>Te?(Pe=ue,ue=null):Pe=ue.sibling;var ke=ft(tt,ue,lt[Te],wt);if(ke===null){ue===null&&(ue=Pe);break}e&&ue&&ke.alternate===null&&i(tt,ue),K=m(ke,K,Te),Ve===null?pe=ke:Ve.sibling=ke,Ve=ke,ue=Pe}if(Te===lt.length)return r(tt,ue),Be&&Ma(tt,Te),pe;if(ue===null){for(;Te<lt.length;Te++)ue=Dt(tt,lt[Te],wt),ue!==null&&(K=m(ue,K,Te),Ve===null?pe=ue:Ve.sibling=ue,Ve=ue);return Be&&Ma(tt,Te),pe}for(ue=l(ue);Te<lt.length;Te++)Pe=_t(ue,tt,Te,lt[Te],wt),Pe!==null&&(e&&Pe.alternate!==null&&ue.delete(Pe.key===null?Te:Pe.key),K=m(Pe,K,Te),Ve===null?pe=Pe:Ve.sibling=Pe,Ve=Pe);return e&&ue.forEach(function(xs){return i(tt,xs)}),Be&&Ma(tt,Te),pe}function ge(tt,K,lt,wt){if(lt==null)throw Error(a(151));for(var pe=null,Ve=null,ue=K,Te=K=0,Pe=null,ke=lt.next();ue!==null&&!ke.done;Te++,ke=lt.next()){ue.index>Te?(Pe=ue,ue=null):Pe=ue.sibling;var xs=ft(tt,ue,ke.value,wt);if(xs===null){ue===null&&(ue=Pe);break}e&&ue&&xs.alternate===null&&i(tt,ue),K=m(xs,K,Te),Ve===null?pe=xs:Ve.sibling=xs,Ve=xs,ue=Pe}if(ke.done)return r(tt,ue),Be&&Ma(tt,Te),pe;if(ue===null){for(;!ke.done;Te++,ke=lt.next())ke=Dt(tt,ke.value,wt),ke!==null&&(K=m(ke,K,Te),Ve===null?pe=ke:Ve.sibling=ke,Ve=ke);return Be&&Ma(tt,Te),pe}for(ue=l(ue);!ke.done;Te++,ke=lt.next())ke=_t(ue,tt,Te,ke.value,wt),ke!==null&&(e&&ke.alternate!==null&&ue.delete(ke.key===null?Te:ke.key),K=m(ke,K,Te),Ve===null?pe=ke:Ve.sibling=ke,Ve=ke);return e&&ue.forEach(function(WM){return i(tt,WM)}),Be&&Ma(tt,Te),pe}function en(tt,K,lt,wt){if(typeof lt=="object"&&lt!==null&&lt.type===R&&lt.key===null&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case x:t:{for(var pe=lt.key;K!==null;){if(K.key===pe){if(pe=lt.type,pe===R){if(K.tag===7){r(tt,K.sibling),wt=f(K,lt.props.children),wt.return=tt,tt=wt;break t}}else if(K.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===E&&ks(pe)===K.type){r(tt,K.sibling),wt=f(K,lt.props),Bo(wt,lt),wt.return=tt,tt=wt;break t}r(tt,K);break}else i(tt,K);K=K.sibling}lt.type===R?(wt=Bs(lt.props.children,tt.mode,wt,lt.key),wt.return=tt,tt=wt):(wt=cc(lt.type,lt.key,lt.props,null,tt.mode,wt),Bo(wt,lt),wt.return=tt,tt=wt)}return M(tt);case b:t:{for(pe=lt.key;K!==null;){if(K.key===pe)if(K.tag===4&&K.stateNode.containerInfo===lt.containerInfo&&K.stateNode.implementation===lt.implementation){r(tt,K.sibling),wt=f(K,lt.children||[]),wt.return=tt,tt=wt;break t}else{r(tt,K);break}else i(tt,K);K=K.sibling}wt=zf(lt,tt.mode,wt),wt.return=tt,tt=wt}return M(tt);case E:return lt=ks(lt),en(tt,K,lt,wt)}if(j(lt))return le(tt,K,lt,wt);if(Z(lt)){if(pe=Z(lt),typeof pe!="function")throw Error(a(150));return lt=pe.call(lt),ge(tt,K,lt,wt)}if(typeof lt.then=="function")return en(tt,K,gc(lt),wt);if(lt.$$typeof===N)return en(tt,K,hc(tt,lt),wt);vc(tt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,K!==null&&K.tag===6?(r(tt,K.sibling),wt=f(K,lt),wt.return=tt,tt=wt):(r(tt,K),wt=Pf(lt,tt.mode,wt),wt.return=tt,tt=wt),M(tt)):r(tt,K)}return function(tt,K,lt,wt){try{Io=0;var pe=en(tt,K,lt,wt);return wr=null,pe}catch(ue){if(ue===Ar||ue===pc)throw ue;var Ve=_i(29,ue,null,tt.mode);return Ve.lanes=wt,Ve.return=tt,Ve}finally{}}}var Ws=O0(!0),P0=O0(!1),ns=!1;function Zf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function is(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function as(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(We&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=lc(e),_0(e,null,r),i}return oc(e,l,i,r),lc(e)}function Fo(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Me(e,r)}}function Jf(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var M={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?f=m=M:m=m.next=M,r=r.next}while(r!==null);m===null?f=m=i:m=m.next=i}else f=m=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Qf=!1;function Ho(){if(Qf){var e=Tr;if(e!==null)throw e}}function Go(e,i,r,l){Qf=!1;var f=e.updateQueue;ns=!1;var m=f.firstBaseUpdate,M=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var k=U,ct=k.next;k.next=null,M===null?m=ct:M.next=ct,M=k;var At=e.alternate;At!==null&&(At=At.updateQueue,U=At.lastBaseUpdate,U!==M&&(U===null?At.firstBaseUpdate=ct:U.next=ct,At.lastBaseUpdate=k))}if(m!==null){var Dt=f.baseState;M=0,At=ct=k=null,U=m;do{var ft=U.lane&-536870913,_t=ft!==U.lane;if(_t?(Oe&ft)===ft:(l&ft)===ft){ft!==0&&ft===Er&&(Qf=!0),At!==null&&(At=At.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var le=e,ge=U;ft=i;var en=r;switch(ge.tag){case 1:if(le=ge.payload,typeof le=="function"){Dt=le.call(en,Dt,ft);break t}Dt=le;break t;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ge.payload,ft=typeof le=="function"?le.call(en,Dt,ft):le,ft==null)break t;Dt=_({},Dt,ft);break t;case 2:ns=!0}}ft=U.callback,ft!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=f.callbacks,_t===null?f.callbacks=[ft]:_t.push(ft))}else _t={lane:ft,tag:U.tag,payload:U.payload,callback:U.callback,next:null},At===null?(ct=At=_t,k=Dt):At=At.next=_t,M|=ft;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;_t=U,U=_t.next,_t.next=null,f.lastBaseUpdate=_t,f.shared.pending=null}}while(!0);At===null&&(k=Dt),f.baseState=k,f.firstBaseUpdate=ct,f.lastBaseUpdate=At,m===null&&(f.shared.lanes=0),cs|=M,e.lanes=M,e.memoizedState=Dt}}function z0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function I0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)z0(r[e],i)}var Rr=P(null),_c=P(0);function B0(e,i){e=La,gt(_c,e),gt(Rr,i),La=e|i.baseLanes}function jf(){gt(_c,La),gt(Rr,Rr.current)}function $f(){La=_c.current,et(Rr),et(_c)}var xi=P(null),Ii=null;function ss(e){var i=e.alternate;gt(yn,yn.current&1),gt(xi,e),Ii===null&&(i===null||Rr.current!==null||i.memoizedState!==null)&&(Ii=e)}function th(e){gt(yn,yn.current),gt(xi,e),Ii===null&&(Ii=e)}function F0(e){e.tag===22?(gt(yn,yn.current),gt(xi,e),Ii===null&&(Ii=e)):rs()}function rs(){gt(yn,yn.current),gt(xi,xi.current)}function Si(e){et(xi),Ii===e&&(Ii=null),et(yn)}var yn=P(0);function xc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||rd(r)||od(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ta=0,Ee=null,$e=null,wn=null,Sc=!1,Cr=!1,qs=!1,yc=0,Vo=0,Dr=null,Py=0;function gn(){throw Error(a(321))}function eh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!vi(e[r],i[r]))return!1;return!0}function nh(e,i,r,l,f,m){return Ta=m,Ee=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?Mg:vh,qs=!1,m=r(l,f),qs=!1,Cr&&(m=G0(i,r,l,f)),H0(e),m}function H0(e){F.H=Wo;var i=$e!==null&&$e.next!==null;if(Ta=0,wn=$e=Ee=null,Sc=!1,Vo=0,Dr=null,i)throw Error(a(300));e===null||Rn||(e=e.dependencies,e!==null&&fc(e)&&(Rn=!0))}function G0(e,i,r,l){Ee=e;var f=0;do{if(Cr&&(Dr=null),Vo=0,Cr=!1,25<=f)throw Error(a(301));if(f+=1,wn=$e=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=bg,m=i(r,l)}while(Cr);return m}function zy(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?ko(i):i,e=e.useState()[0],($e!==null?$e.memoizedState:null)!==e&&(Ee.flags|=1024),i}function ih(){var e=yc!==0;return yc=0,e}function ah(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function sh(e){if(Sc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Sc=!1}Ta=0,wn=$e=Ee=null,Cr=!1,Vo=yc=0,Dr=null}function ti(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Ee.memoizedState=wn=e:wn=wn.next=e,wn}function Mn(){if($e===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var i=wn===null?Ee.memoizedState:wn.next;if(i!==null)wn=i,$e=e;else{if(e===null)throw Ee.alternate===null?Error(a(467)):Error(a(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},wn===null?Ee.memoizedState=wn=e:wn=wn.next=e}return wn}function Mc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(e){var i=Vo;return Vo+=1,Dr===null&&(Dr=[]),e=U0(Dr,e,i),i=Ee,(wn===null?i.memoizedState:wn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?Mg:vh),e}function bc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===N)return Gn(e)}throw Error(a(438,String(e)))}function rh(e){var i=null,r=Ee.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=Ee.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Mc(),Ee.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=B;return i.index++,r}function Aa(e,i){return typeof i=="function"?i(e):i}function Ec(e){var i=Mn();return oh(i,$e,e)}function oh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,m=l.pending;if(m!==null){if(f!==null){var M=f.next;f.next=m.next,m.next=M}i.baseQueue=f=m,l.pending=null}if(m=e.baseState,f===null)e.memoizedState=m;else{i=f.next;var U=M=null,k=null,ct=i,At=!1;do{var Dt=ct.lane&-536870913;if(Dt!==ct.lane?(Oe&Dt)===Dt:(Ta&Dt)===Dt){var ft=ct.revertLane;if(ft===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null}),Dt===Er&&(At=!0);else if((Ta&ft)===ft){ct=ct.next,ft===Er&&(At=!0);continue}else Dt={lane:0,revertLane:ct.revertLane,gesture:null,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},k===null?(U=k=Dt,M=m):k=k.next=Dt,Ee.lanes|=ft,cs|=ft;Dt=ct.action,qs&&r(m,Dt),m=ct.hasEagerState?ct.eagerState:r(m,Dt)}else ft={lane:Dt,revertLane:ct.revertLane,gesture:ct.gesture,action:ct.action,hasEagerState:ct.hasEagerState,eagerState:ct.eagerState,next:null},k===null?(U=k=ft,M=m):k=k.next=ft,Ee.lanes|=Dt,cs|=Dt;ct=ct.next}while(ct!==null&&ct!==i);if(k===null?M=m:k.next=U,!vi(m,e.memoizedState)&&(Rn=!0,At&&(r=Tr,r!==null)))throw r;e.memoizedState=m,e.baseState=M,e.baseQueue=k,l.lastRenderedState=m}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function lh(e){var i=Mn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,m=i.memoizedState;if(f!==null){r.pending=null;var M=f=f.next;do m=e(m,M.action),M=M.next;while(M!==f);vi(m,i.memoizedState)||(Rn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function V0(e,i,r){var l=Ee,f=Mn(),m=Be;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var M=!vi(($e||f).memoizedState,r);if(M&&(f.memoizedState=r,Rn=!0),f=f.queue,fh(W0.bind(null,l,f,e),[e]),f.getSnapshot!==i||M||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Ur(9,{destroy:void 0},X0.bind(null,l,f,r,i),null),sn===null)throw Error(a(349));m||(Ta&127)!==0||k0(l,i,r)}return r}function k0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=Ee.updateQueue,i===null?(i=Mc(),Ee.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function X0(e,i,r,l){i.value=r,i.getSnapshot=l,q0(i)&&Y0(e)}function W0(e,i,r){return r(function(){q0(i)&&Y0(e)})}function q0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!vi(e,r)}catch{return!0}}function Y0(e){var i=Is(e,2);i!==null&&di(i,e,2)}function ch(e){var i=ti();if(typeof e=="function"){var r=e;if(e=r(),qs){Ft(!0);try{r()}finally{Ft(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},i}function Z0(e,i,r,l){return e.baseState=r,oh(e,$e,typeof l=="function"?l:Aa)}function Iy(e,i,r,l,f){if(wc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){m.listeners.push(M)}};F.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,K0(i,m)):(m.next=r.next,i.pending=r.next=m)}}function K0(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var m=F.T,M={};F.T=M;try{var U=r(f,l),k=F.S;k!==null&&k(M,U),J0(e,i,U)}catch(ct){uh(e,i,ct)}finally{m!==null&&M.types!==null&&(m.types=M.types),F.T=m}}else try{m=r(f,l),J0(e,i,m)}catch(ct){uh(e,i,ct)}}function J0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Q0(e,i,l)},function(l){return uh(e,i,l)}):Q0(e,i,r)}function Q0(e,i,r){i.status="fulfilled",i.value=r,j0(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,K0(e,r)))}function uh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,j0(i),i=i.next;while(i!==l)}e.action=null}function j0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function $0(e,i){return i}function tg(e,i){if(Be){var r=sn.formState;if(r!==null){t:{var l=Ee;if(Be){if(cn){e:{for(var f=cn,m=zi;f.nodeType!==8;){if(!m){f=null;break e}if(f=Bi(f.nextSibling),f===null){f=null;break e}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){cn=Bi(f.nextSibling),l=f.data==="F!";break t}}ts(l)}l=!1}l&&(i=r[0])}}return r=ti(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$0,lastRenderedState:i},r.queue=l,r=xg.bind(null,Ee,l),l.dispatch=r,l=ch(!1),m=gh.bind(null,Ee,!1,l.queue),l=ti(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=Iy.bind(null,Ee,f,m,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function eg(e){var i=Mn();return ng(i,$e,e)}function ng(e,i,r){if(i=oh(e,i,$0)[0],e=Ec(Aa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ko(i)}catch(M){throw M===Ar?pc:M}else l=i;i=Mn();var f=i.queue,m=f.dispatch;return r!==i.memoizedState&&(Ee.flags|=2048,Ur(9,{destroy:void 0},By.bind(null,f,r),null)),[l,m,e]}function By(e,i){e.action=i}function ig(e){var i=Mn(),r=$e;if(r!==null)return ng(i,r,e);Mn(),i=i.memoizedState,r=Mn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function Ur(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=Ee.updateQueue,i===null&&(i=Mc(),Ee.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function ag(){return Mn().memoizedState}function Tc(e,i,r,l){var f=ti();Ee.flags|=e,f.memoizedState=Ur(1|i,{destroy:void 0},r,l===void 0?null:l)}function Ac(e,i,r,l){var f=Mn();l=l===void 0?null:l;var m=f.memoizedState.inst;$e!==null&&l!==null&&eh(l,$e.memoizedState.deps)?f.memoizedState=Ur(i,m,r,l):(Ee.flags|=e,f.memoizedState=Ur(1|i,m,r,l))}function sg(e,i){Tc(8390656,8,e,i)}function fh(e,i){Ac(2048,8,e,i)}function Fy(e){Ee.flags|=4;var i=Ee.updateQueue;if(i===null)i=Mc(),Ee.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function rg(e){var i=Mn().memoizedState;return Fy({ref:i,nextImpl:e}),function(){if((We&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function og(e,i){return Ac(4,2,e,i)}function lg(e,i){return Ac(4,4,e,i)}function cg(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ug(e,i,r){r=r!=null?r.concat([e]):null,Ac(4,4,cg.bind(null,i,e),r)}function hh(){}function fg(e,i){var r=Mn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&eh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function hg(e,i){var r=Mn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&eh(i,l[1]))return l[0];if(l=e(),qs){Ft(!0);try{e()}finally{Ft(!1)}}return r.memoizedState=[l,i],l}function dh(e,i,r){return r===void 0||(Ta&1073741824)!==0&&(Oe&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=dv(),Ee.lanes|=e,cs|=e,r)}function dg(e,i,r,l){return vi(r,i)?r:Rr.current!==null?(e=dh(e,r,l),vi(e,i)||(Rn=!0),e):(Ta&42)===0||(Ta&1073741824)!==0&&(Oe&261930)===0?(Rn=!0,e.memoizedState=r):(e=dv(),Ee.lanes|=e,cs|=e,i)}function pg(e,i,r,l,f){var m=V.p;V.p=m!==0&&8>m?m:8;var M=F.T,U={};F.T=U,gh(e,!1,i,r);try{var k=f(),ct=F.S;if(ct!==null&&ct(U,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var At=Oy(k,l);Xo(e,i,At,bi(e))}else Xo(e,i,l,bi(e))}catch(Dt){Xo(e,i,{then:function(){},status:"rejected",reason:Dt},bi())}finally{V.p=m,M!==null&&U.types!==null&&(M.types=U.types),F.T=M}}function Hy(){}function ph(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=mg(e).queue;pg(e,f,i,ut,r===null?Hy:function(){return gg(e),r(l)})}function mg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ut,baseState:ut,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:ut},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function gg(e){var i=mg(e);i.next===null&&(i=e.alternate.memoizedState),Xo(e,i.next.queue,{},bi())}function mh(){return Gn(ol)}function vg(){return Mn().memoizedState}function _g(){return Mn().memoizedState}function Gy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=bi();e=is(r);var l=as(i,e,r);l!==null&&(di(l,i,r),Fo(l,i,r)),i={cache:Xf()},e.payload=i;return}i=i.return}}function Vy(e,i,r){var l=bi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wc(e)?Sg(i,r):(r=Lf(e,i,r,l),r!==null&&(di(r,e,l),yg(r,i,l)))}function xg(e,i,r){var l=bi();Xo(e,i,r,l)}function Xo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(wc(e))Sg(i,f);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,U=m(M,r);if(f.hasEagerState=!0,f.eagerState=U,vi(U,M))return oc(e,i,f,0),sn===null&&rc(),!1}catch{}finally{}if(r=Lf(e,i,f,l),r!==null)return di(r,e,l),yg(r,i,l),!0}return!1}function gh(e,i,r,l){if(l={lane:2,revertLane:Zh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},wc(e)){if(i)throw Error(a(479))}else i=Lf(e,r,l,2),i!==null&&di(i,e,2)}function wc(e){var i=e.alternate;return e===Ee||i!==null&&i===Ee}function Sg(e,i){Cr=Sc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function yg(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Me(e,r)}}var Wo={readContext:Gn,use:bc,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useLayoutEffect:gn,useInsertionEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useSyncExternalStore:gn,useId:gn,useHostTransitionStatus:gn,useFormState:gn,useActionState:gn,useOptimistic:gn,useMemoCache:gn,useCacheRefresh:gn};Wo.useEffectEvent=gn;var Mg={readContext:Gn,use:bc,useCallback:function(e,i){return ti().memoizedState=[e,i===void 0?null:i],e},useContext:Gn,useEffect:sg,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Tc(4194308,4,cg.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Tc(4194308,4,e,i)},useInsertionEffect:function(e,i){Tc(4,2,e,i)},useMemo:function(e,i){var r=ti();i=i===void 0?null:i;var l=e();if(qs){Ft(!0);try{e()}finally{Ft(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=ti();if(r!==void 0){var f=r(i);if(qs){Ft(!0);try{r(i)}finally{Ft(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Vy.bind(null,Ee,e),[l.memoizedState,e]},useRef:function(e){var i=ti();return e={current:e},i.memoizedState=e},useState:function(e){e=ch(e);var i=e.queue,r=xg.bind(null,Ee,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:hh,useDeferredValue:function(e,i){var r=ti();return dh(r,e,i)},useTransition:function(){var e=ch(!1);return e=pg.bind(null,Ee,e.queue,!0,!1),ti().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=Ee,f=ti();if(Be){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),sn===null)throw Error(a(349));(Oe&127)!==0||k0(l,i,r)}f.memoizedState=r;var m={value:r,getSnapshot:i};return f.queue=m,sg(W0.bind(null,l,m,e),[e]),l.flags|=2048,Ur(9,{destroy:void 0},X0.bind(null,l,m,r,i),null),r},useId:function(){var e=ti(),i=sn.identifierPrefix;if(Be){var r=na,l=ea;r=(l&~(1<<32-$t(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=yc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Py++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:mh,useFormState:tg,useActionState:tg,useOptimistic:function(e){var i=ti();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=gh.bind(null,Ee,!0,r),r.dispatch=i,[e,i]},useMemoCache:rh,useCacheRefresh:function(){return ti().memoizedState=Gy.bind(null,Ee)},useEffectEvent:function(e){var i=ti(),r={impl:e};return i.memoizedState=r,function(){if((We&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},vh={readContext:Gn,use:bc,useCallback:fg,useContext:Gn,useEffect:fh,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:Ec,useRef:ag,useState:function(){return Ec(Aa)},useDebugValue:hh,useDeferredValue:function(e,i){var r=Mn();return dg(r,$e.memoizedState,e,i)},useTransition:function(){var e=Ec(Aa)[0],i=Mn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:V0,useId:vg,useHostTransitionStatus:mh,useFormState:eg,useActionState:eg,useOptimistic:function(e,i){var r=Mn();return Z0(r,$e,e,i)},useMemoCache:rh,useCacheRefresh:_g};vh.useEffectEvent=rg;var bg={readContext:Gn,use:bc,useCallback:fg,useContext:Gn,useEffect:fh,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:lg,useMemo:hg,useReducer:lh,useRef:ag,useState:function(){return lh(Aa)},useDebugValue:hh,useDeferredValue:function(e,i){var r=Mn();return $e===null?dh(r,e,i):dg(r,$e.memoizedState,e,i)},useTransition:function(){var e=lh(Aa)[0],i=Mn().memoizedState;return[typeof e=="boolean"?e:ko(e),i]},useSyncExternalStore:V0,useId:vg,useHostTransitionStatus:mh,useFormState:ig,useActionState:ig,useOptimistic:function(e,i){var r=Mn();return $e!==null?Z0(r,$e,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:rh,useCacheRefresh:_g};bg.useEffectEvent=rg;function _h(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:_({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var xh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=bi(),f=is(l);f.payload=i,r!=null&&(f.callback=r),i=as(e,f,l),i!==null&&(di(i,e,l),Fo(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=bi(),f=is(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=as(e,f,l),i!==null&&(di(i,e,l),Fo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=bi(),l=is(r);l.tag=2,i!=null&&(l.callback=i),i=as(e,l,r),i!==null&&(di(i,e,r),Fo(i,e,r))}};function Eg(e,i,r,l,f,m,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,M):i.prototype&&i.prototype.isPureReactComponent?!Uo(r,l)||!Uo(f,m):!0}function Tg(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&xh.enqueueReplaceState(i,i.state,null)}function Ys(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=_({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Ag(e){sc(e)}function wg(e){console.error(e)}function Rg(e){sc(e)}function Rc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Cg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Sh(e,i,r){return r=is(r),r.tag=3,r.payload={element:null},r.callback=function(){Rc(e,i)},r}function Dg(e){return e=is(e),e.tag=3,e}function Ug(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;e.payload=function(){return f(m)},e.callback=function(){Cg(i,r,l)}}var M=r.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Cg(i,r,l),typeof f!="function"&&(us===null?us=new Set([this]):us.add(this));var U=l.stack;this.componentDidCatch(l.value,{componentStack:U!==null?U:""})})}function ky(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&br(i,r,f,!0),r=xi.current,r!==null){switch(r.tag){case 31:case 13:return Ii===null?Hc():r.alternate===null&&vn===0&&(vn=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===mc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),Wh(e,l,f)),!1;case 22:return r.flags|=65536,l===mc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),Wh(e,l,f)),!1}throw Error(a(435,r.tag))}return Wh(e,l,f),Hc(),!1}if(Be)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Ff&&(e=Error(a(422),{cause:l}),Oo(Li(e,r)))):(l!==Ff&&(i=Error(a(423),{cause:l}),Oo(Li(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Li(l,r),f=Sh(e.stateNode,l,f),Jf(e,f),vn!==4&&(vn=2)),!1;var m=Error(a(520),{cause:l});if(m=Li(m,r),$o===null?$o=[m]:$o.push(m),vn!==4&&(vn=2),i===null)return!0;l=Li(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Sh(r.stateNode,l,e),Jf(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(us===null||!us.has(m))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Dg(f),Ug(f,e,r,l),Jf(r,f),!1}r=r.return}while(r!==null);return!1}var yh=Error(a(461)),Rn=!1;function Vn(e,i,r,l){i.child=e===null?P0(i,null,r,l):Ws(i,e.child,r,l)}function Ng(e,i,r,l,f){r=r.render;var m=i.ref;if("ref"in l){var M={};for(var U in l)U!=="ref"&&(M[U]=l[U])}else M=l;return Gs(i),l=nh(e,i,r,M,m,f),U=ih(),e!==null&&!Rn?(ah(e,i,f),wa(e,i,f)):(Be&&U&&If(i),i.flags|=1,Vn(e,i,l,f),i.child)}function Lg(e,i,r,l,f){if(e===null){var m=r.type;return typeof m=="function"&&!Of(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Og(e,i,m,l,f)):(e=cc(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Ch(e,f)){var M=m.memoizedProps;if(r=r.compare,r=r!==null?r:Uo,r(M,l)&&e.ref===i.ref)return wa(e,i,f)}return i.flags|=1,e=ya(m,l),e.ref=i.ref,e.return=i,i.child=e}function Og(e,i,r,l,f){if(e!==null){var m=e.memoizedProps;if(Uo(m,l)&&e.ref===i.ref)if(Rn=!1,i.pendingProps=l=m,Ch(e,f))(e.flags&131072)!==0&&(Rn=!0);else return i.lanes=e.lanes,wa(e,i,f)}return Mh(e,i,r,l,f)}function Pg(e,i,r,l){var f=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return zg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&dc(i,m!==null?m.cachePool:null),m!==null?B0(i,m):jf(),F0(i);else return l=i.lanes=536870912,zg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(dc(i,m.cachePool),B0(i,m),rs(),i.memoizedState=null):(e!==null&&dc(i,null),jf(),rs());return Vn(e,i,f,r),i.child}function qo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function zg(e,i,r,l,f){var m=qf();return m=m===null?null:{parent:An._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&dc(i,null),jf(),F0(i),e!==null&&br(e,i,l,!0),i.childLanes=f,null}function Cc(e,i){return i=Uc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Ig(e,i,r){return Ws(i,e.child,null,r),e=Cc(i,i.pendingProps),e.flags|=2,Si(i),i.memoizedState=null,e}function Xy(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Be){if(l.mode==="hidden")return e=Cc(i,l),i.lanes=536870912,qo(null,e);if(th(i),(e=cn)?(e=Kv(e,zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=S0(e),r.return=i,i.child=r,Hn=i,cn=null)):e=null,e===null)throw ts(i);return i.lanes=536870912,null}return Cc(i,l)}var m=e.memoizedState;if(m!==null){var M=m.dehydrated;if(th(i),f)if(i.flags&256)i.flags&=-257,i=Ig(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(Rn||br(e,i,r,!1),f=(r&e.childLanes)!==0,Rn||f){if(l=sn,l!==null&&(M=Ie(l,r),M!==0&&M!==m.retryLane))throw m.retryLane=M,Is(e,M),di(l,e,M),yh;Hc(),i=Ig(e,i,r)}else e=m.treeContext,cn=Bi(M.nextSibling),Hn=i,Be=!0,$a=null,zi=!1,e!==null&&b0(i,e),i=Cc(i,l),i.flags|=4096;return i}return e=ya(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Dc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Mh(e,i,r,l,f){return Gs(i),r=nh(e,i,r,l,void 0,f),l=ih(),e!==null&&!Rn?(ah(e,i,f),wa(e,i,f)):(Be&&l&&If(i),i.flags|=1,Vn(e,i,r,f),i.child)}function Bg(e,i,r,l,f,m){return Gs(i),i.updateQueue=null,r=G0(i,l,r,f),H0(e),l=ih(),e!==null&&!Rn?(ah(e,i,m),wa(e,i,m)):(Be&&l&&If(i),i.flags|=1,Vn(e,i,r,m),i.child)}function Fg(e,i,r,l,f){if(Gs(i),i.stateNode===null){var m=xr,M=r.contextType;typeof M=="object"&&M!==null&&(m=Gn(M)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=xh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},Zf(i),M=r.contextType,m.context=typeof M=="object"&&M!==null?Gn(M):xr,m.state=i.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(_h(i,r,M,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(M=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),M!==m.state&&xh.enqueueReplaceState(m,m.state,null),Go(i,l,m,f),Ho(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var U=i.memoizedProps,k=Ys(r,U);m.props=k;var ct=m.context,At=r.contextType;M=xr,typeof At=="object"&&At!==null&&(M=Gn(At));var Dt=r.getDerivedStateFromProps;At=typeof Dt=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,At||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||ct!==M)&&Tg(i,m,l,M),ns=!1;var ft=i.memoizedState;m.state=ft,Go(i,l,m,f),Ho(),ct=i.memoizedState,U||ft!==ct||ns?(typeof Dt=="function"&&(_h(i,r,Dt,l),ct=i.memoizedState),(k=ns||Eg(i,r,k,l,ft,ct,M))?(At||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ct),m.props=l,m.state=ct,m.context=M,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Kf(e,i),M=i.memoizedProps,At=Ys(r,M),m.props=At,Dt=i.pendingProps,ft=m.context,ct=r.contextType,k=xr,typeof ct=="object"&&ct!==null&&(k=Gn(ct)),U=r.getDerivedStateFromProps,(ct=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(M!==Dt||ft!==k)&&Tg(i,m,l,k),ns=!1,ft=i.memoizedState,m.state=ft,Go(i,l,m,f),Ho();var _t=i.memoizedState;M!==Dt||ft!==_t||ns||e!==null&&e.dependencies!==null&&fc(e.dependencies)?(typeof U=="function"&&(_h(i,r,U,l),_t=i.memoizedState),(At=ns||Eg(i,r,At,l,ft,_t,k)||e!==null&&e.dependencies!==null&&fc(e.dependencies))?(ct||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,_t,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,_t,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=_t),m.props=l,m.state=_t,m.context=k,l=At):(typeof m.componentDidUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ft===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,Dc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=Ws(i,e.child,null,f),i.child=Ws(i,null,r,f)):Vn(e,i,r,f),i.memoizedState=m.state,e=i.child):e=wa(e,i,f),e}function Hg(e,i,r,l){return Fs(),i.flags|=256,Vn(e,i,r,l),i.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(e){return{baseLanes:e,cachePool:C0()}}function Th(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Mi),e}function Gg(e,i,r){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,M;if((M=m)||(M=e!==null&&e.memoizedState===null?!1:(yn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(Be){if(f?ss(i):rs(),(e=cn)?(e=Kv(e,zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ja!==null?{id:ea,overflow:na}:null,retryLane:536870912,hydrationErrors:null},r=S0(e),r.return=i,i.child=r,Hn=i,cn=null)):e=null,e===null)throw ts(i);return od(e)?i.lanes=32:i.lanes=536870912,null}var U=l.children;return l=l.fallback,f?(rs(),f=i.mode,U=Uc({mode:"hidden",children:U},f),l=Bs(l,f,r,null),U.return=i,l.return=i,U.sibling=l,i.child=U,l=i.child,l.memoizedState=Eh(r),l.childLanes=Th(e,M,r),i.memoizedState=bh,qo(null,l)):(ss(i),Ah(i,U))}var k=e.memoizedState;if(k!==null&&(U=k.dehydrated,U!==null)){if(m)i.flags&256?(ss(i),i.flags&=-257,i=wh(e,i,r)):i.memoizedState!==null?(rs(),i.child=e.child,i.flags|=128,i=null):(rs(),U=l.fallback,f=i.mode,l=Uc({mode:"visible",children:l.children},f),U=Bs(U,f,r,null),U.flags|=2,l.return=i,U.return=i,l.sibling=U,i.child=l,Ws(i,e.child,null,r),l=i.child,l.memoizedState=Eh(r),l.childLanes=Th(e,M,r),i.memoizedState=bh,i=qo(null,l));else if(ss(i),od(U)){if(M=U.nextSibling&&U.nextSibling.dataset,M)var ct=M.dgst;M=ct,l=Error(a(419)),l.stack="",l.digest=M,Oo({value:l,source:null,stack:null}),i=wh(e,i,r)}else if(Rn||br(e,i,r,!1),M=(r&e.childLanes)!==0,Rn||M){if(M=sn,M!==null&&(l=Ie(M,r),l!==0&&l!==k.retryLane))throw k.retryLane=l,Is(e,l),di(M,e,l),yh;rd(U)||Hc(),i=wh(e,i,r)}else rd(U)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,cn=Bi(U.nextSibling),Hn=i,Be=!0,$a=null,zi=!1,e!==null&&b0(i,e),i=Ah(i,l.children),i.flags|=4096);return i}return f?(rs(),U=l.fallback,f=i.mode,k=e.child,ct=k.sibling,l=ya(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,ct!==null?U=ya(ct,U):(U=Bs(U,f,r,null),U.flags|=2),U.return=i,l.return=i,l.sibling=U,i.child=l,qo(null,l),l=i.child,U=e.child.memoizedState,U===null?U=Eh(r):(f=U.cachePool,f!==null?(k=An._currentValue,f=f.parent!==k?{parent:k,pool:k}:f):f=C0(),U={baseLanes:U.baseLanes|r,cachePool:f}),l.memoizedState=U,l.childLanes=Th(e,M,r),i.memoizedState=bh,qo(e.child,l)):(ss(i),r=e.child,e=r.sibling,r=ya(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=r,i.memoizedState=null,r)}function Ah(e,i){return i=Uc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Uc(e,i){return e=_i(22,e,null,i),e.lanes=0,e}function wh(e,i,r){return Ws(i,e.child,null,r),e=Ah(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Vg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Vf(e.return,i,r)}function Rh(e,i,r,l,f,m){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:m}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=r,M.tailMode=f,M.treeForkCount=m)}function kg(e,i,r){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var M=yn.current,U=(M&2)!==0;if(U?(M=M&1|2,i.flags|=128):M&=1,gt(yn,M),Vn(e,i,l,r),l=Be?Lo:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vg(e,r,i);else if(e.tag===19)Vg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&xc(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Rh(i,!1,f,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&xc(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Rh(i,!0,r,null,m,l);break;case"together":Rh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function wa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),cs|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(br(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=ya(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=ya(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Ch(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&fc(e)))}function Wy(e,i,r){switch(i.tag){case 3:St(i,i.stateNode.containerInfo),es(i,An,e.memoizedState.cache),Fs();break;case 27:case 5:ce(i);break;case 4:St(i,i.stateNode.containerInfo);break;case 10:es(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,th(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ss(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Gg(e,i,r):(ss(i),e=wa(e,i,r),e!==null?e.sibling:null);ss(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(br(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return kg(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),gt(yn,yn.current),l)break;return null;case 22:return i.lanes=0,Pg(e,i,r,i.pendingProps);case 24:es(i,An,e.memoizedState.cache)}return wa(e,i,r)}function Xg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)Rn=!0;else{if(!Ch(e,r)&&(i.flags&128)===0)return Rn=!1,Wy(e,i,r);Rn=(e.flags&131072)!==0}else Rn=!1,Be&&(i.flags&1048576)!==0&&M0(i,Lo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=ks(i.elementType),i.type=e,typeof e=="function")Of(e)?(l=Ys(e,l),i.tag=1,i=Fg(null,i,e,l,r)):(i.tag=0,i=Mh(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===A){i.tag=11,i=Ng(null,i,e,l,r);break t}else if(f===z){i.tag=14,i=Lg(null,i,e,l,r);break t}}throw i=Y(e)||e,Error(a(306,i,""))}}return i;case 0:return Mh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Ys(l,i.pendingProps),Fg(e,i,l,f,r);case 3:t:{if(St(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,Kf(e,i),Go(i,l,null,r);var M=i.memoizedState;if(l=M.cache,es(i,An,l),l!==m.cache&&kf(i,[An],r,!0),Ho(),l=M.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Hg(e,i,l,r);break t}else if(l!==f){f=Li(Error(a(424)),i),Oo(f),i=Hg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=Bi(e.firstChild),Hn=i,Be=!0,$a=null,zi=!0,r=P0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Fs(),l===f){i=wa(e,i,r);break t}Vn(e,i,l,r)}i=i.child}return i;case 26:return Dc(e,i),e===null?(r=e_(i.type,null,i.pendingProps,null))?i.memoizedState=r:Be||(r=i.type,e=i.pendingProps,l=Yc(Wt.current).createElement(r),l[nn]=i,l[Fe]=e,kn(l,r,e),En(l),i.stateNode=l):i.memoizedState=e_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ce(i),e===null&&Be&&(l=i.stateNode=jv(i.type,i.pendingProps,Wt.current),Hn=i,zi=!0,f=cn,ps(i.type)?(ld=f,cn=Bi(l.firstChild)):cn=f),Vn(e,i,i.pendingProps.children,r),Dc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Be&&((f=l=cn)&&(l=yM(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,Hn=i,cn=Bi(l.firstChild),zi=!1,f=!0):f=!1),f||ts(i)),ce(i),f=i.type,m=i.pendingProps,M=e!==null?e.memoizedProps:null,l=m.children,id(f,m)?l=null:M!==null&&id(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=nh(e,i,zy,null,null,r),ol._currentValue=f),Dc(e,i),Vn(e,i,l,r),i.child;case 6:return e===null&&Be&&((e=r=cn)&&(r=MM(r,i.pendingProps,zi),r!==null?(i.stateNode=r,Hn=i,cn=null,e=!0):e=!1),e||ts(i)),null;case 13:return Gg(e,i,r);case 4:return St(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ws(i,null,l,r):Vn(e,i,l,r),i.child;case 11:return Ng(e,i,i.type,i.pendingProps,r);case 7:return Vn(e,i,i.pendingProps,r),i.child;case 8:return Vn(e,i,i.pendingProps.children,r),i.child;case 12:return Vn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,es(i,i.type,l.value),Vn(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Gs(i),f=Gn(f),l=l(f),i.flags|=1,Vn(e,i,l,r),i.child;case 14:return Lg(e,i,i.type,i.pendingProps,r);case 15:return Og(e,i,i.type,i.pendingProps,r);case 19:return kg(e,i,r);case 31:return Xy(e,i,r);case 22:return Pg(e,i,r,i.pendingProps);case 24:return Gs(i),l=Gn(An),e===null?(f=qf(),f===null&&(f=sn,m=Xf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=r),f=m),i.memoizedState={parent:l,cache:f},Zf(i),es(i,An,f)):((e.lanes&r)!==0&&(Kf(e,i),Go(i,null,null,r),Ho()),f=e.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),es(i,An,l)):(l=m.cache,es(i,An,l),l!==f.cache&&kf(i,[An],r,!0))),Vn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ra(e){e.flags|=4}function Dh(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(vv())e.flags|=8192;else throw Xs=mc,Yf}else e.flags&=-16777217}function Wg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!r_(i))if(vv())e.flags|=8192;else throw Xs=mc,Yf}function Nc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?H():536870912,e.lanes|=i,Pr|=i)}function Yo(e,i){if(!Be)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function un(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function qy(e,i,r){var l=i.pendingProps;switch(Bf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(i),null;case 1:return un(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ea(An),Ot(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mr(i)?Ra(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hf())),un(i),null;case 26:var f=i.type,m=i.memoizedState;return e===null?(Ra(i),m!==null?(un(i),Wg(i,m)):(un(i),Dh(i,f,null,l,r))):m?m!==e.memoizedState?(Ra(i),un(i),Wg(i,m)):(un(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ra(i),un(i),Dh(i,f,e,l,r)),null;case 27:if(qt(i),r=Wt.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return un(i),null}e=Pt.current,Mr(i)?E0(i):(e=jv(f,l,r),i.stateNode=e,Ra(i))}return un(i),null;case 5:if(qt(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return un(i),null}if(m=Pt.current,Mr(i))E0(i);else{var M=Yc(Wt.current);switch(m){case 1:m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=M.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}m[nn]=i,m[Fe]=l;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)m.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=m;t:switch(kn(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ra(i)}}return un(i),Dh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ra(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=Wt.current,Mr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Hn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[nn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Gv(e.nodeValue,r)),e||ts(i,!0)}else e=Yc(e).createTextNode(l),e[nn]=i,i.stateNode=e}return un(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Mr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[nn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),e=!1}else r=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Si(i),i):(Si(i),null);if((i.flags&128)!==0)throw Error(a(558))}return un(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Mr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[nn]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;un(i),f=!1}else f=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Si(i),i):(Si(i),null)}return Si(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),Nc(i,i.updateQueue),un(i),null);case 4:return Ot(),e===null&&jh(i.stateNode.containerInfo),un(i),null;case 10:return Ea(i.type),un(i),null;case 19:if(et(yn),l=i.memoizedState,l===null)return un(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)Yo(l,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=xc(e),m!==null){for(i.flags|=128,Yo(l,!1),e=m.updateQueue,i.updateQueue=e,Nc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)x0(r,e),r=r.sibling;return gt(yn,yn.current&1|2),Be&&Ma(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&de()>Ic&&(i.flags|=128,f=!0,Yo(l,!1),i.lanes=4194304)}else{if(!f)if(e=xc(m),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,Nc(i,e),Yo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Be)return un(i),null}else 2*de()-l.renderingStartTime>Ic&&r!==536870912&&(i.flags|=128,f=!0,Yo(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=de(),e.sibling=null,r=yn.current,gt(yn,f?r&1|2:r&1),Be&&Ma(i,l.treeForkCount),e):(un(i),null);case 22:case 23:return Si(i),$f(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(un(i),i.subtreeFlags&6&&(i.flags|=8192)):un(i),r=i.updateQueue,r!==null&&Nc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&et(Vs),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ea(An),un(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Yy(e,i){switch(Bf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ea(An),Ot(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return qt(i),null;case 31:if(i.memoizedState!==null){if(Si(i),i.alternate===null)throw Error(a(340));Fs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Si(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Fs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(yn),null;case 4:return Ot(),null;case 10:return Ea(i.type),null;case 22:case 23:return Si(i),$f(),e!==null&&et(Vs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ea(An),null;case 25:return null;default:return null}}function qg(e,i){switch(Bf(i),i.tag){case 3:Ea(An),Ot();break;case 26:case 27:case 5:qt(i);break;case 4:Ot();break;case 31:i.memoizedState!==null&&Si(i);break;case 13:Si(i);break;case 19:et(yn);break;case 10:Ea(i.type);break;case 22:case 23:Si(i),$f(),e!==null&&et(Vs);break;case 24:Ea(An)}}function Zo(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var m=r.create,M=r.inst;l=m(),M.destroy=l}r=r.next}while(r!==f)}}catch(U){Je(i,i.return,U)}}function os(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&e)===e){var M=l.inst,U=M.destroy;if(U!==void 0){M.destroy=void 0,f=i;var k=r,ct=U;try{ct()}catch(At){Je(f,k,At)}}}l=l.next}while(l!==m)}}catch(At){Je(i,i.return,At)}}function Yg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{I0(i,r)}catch(l){Je(e,e.return,l)}}}function Zg(e,i,r){r.props=Ys(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Je(e,i,l)}}function Ko(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){Je(e,i,f)}}function ia(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Je(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Je(e,i,f)}else r.current=null}function Kg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Je(e,e.return,f)}}function Uh(e,i,r){try{var l=e.stateNode;mM(l,e.type,r,i),l[Fe]=i}catch(f){Je(e,e.return,f)}}function Jg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ps(e.type)||e.tag===4}function Nh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Jg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ps(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ui));else if(l!==4&&(l===27&&ps(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Lh(e,i,r),e=e.sibling;e!==null;)Lh(e,i,r),e=e.sibling}function Lc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&ps(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(Lc(e,i,r),e=e.sibling;e!==null;)Lc(e,i,r),e=e.sibling}function Qg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);kn(i,l,r),i[nn]=e,i[Fe]=r}catch(m){Je(e,e.return,m)}}var Ca=!1,Cn=!1,Oh=!1,jg=typeof WeakSet=="function"?WeakSet:Set,In=null;function Zy(e,i){if(e=e.containerInfo,ed=tu,e=u0(e),wf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var M=0,U=-1,k=-1,ct=0,At=0,Dt=e,ft=null;e:for(;;){for(var _t;Dt!==r||f!==0&&Dt.nodeType!==3||(U=M+f),Dt!==m||l!==0&&Dt.nodeType!==3||(k=M+l),Dt.nodeType===3&&(M+=Dt.nodeValue.length),(_t=Dt.firstChild)!==null;)ft=Dt,Dt=_t;for(;;){if(Dt===e)break e;if(ft===r&&++ct===f&&(U=M),ft===m&&++At===l&&(k=M),(_t=Dt.nextSibling)!==null)break;Dt=ft,ft=Dt.parentNode}Dt=_t}r=U===-1||k===-1?null:{start:U,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(nd={focusedElem:e,selectionRange:r},tu=!1,In=i;In!==null;)if(i=In,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,In=e;else for(;In!==null;){switch(i=In,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,f=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var le=Ys(r.type,f);e=l.getSnapshotBeforeUpdate(le,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Je(r,r.return,ge)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)sd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,In=e;break}In=i.return}}function $g(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ua(e,r),l&4&&Zo(5,r);break;case 1:if(Ua(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(M){Je(r,r.return,M)}else{var f=Ys(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Je(r,r.return,M)}}l&64&&Yg(r),l&512&&Ko(r,r.return);break;case 3:if(Ua(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{I0(e,i)}catch(M){Je(r,r.return,M)}}break;case 27:i===null&&l&4&&Qg(r);case 26:case 5:Ua(e,r),i===null&&l&4&&Kg(r),l&512&&Ko(r,r.return);break;case 12:Ua(e,r);break;case 31:Ua(e,r),l&4&&nv(e,r);break;case 13:Ua(e,r),l&4&&iv(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=iM.bind(null,r),bM(e,r))));break;case 22:if(l=r.memoizedState!==null||Ca,!l){i=i!==null&&i.memoizedState!==null||Cn,f=Ca;var m=Cn;Ca=l,(Cn=i)&&!m?Na(e,r,(r.subtreeFlags&8772)!==0):Ua(e,r),Ca=f,Cn=m}break;case 30:break;default:Ua(e,r)}}function tv(e){var i=e.alternate;i!==null&&(e.alternate=null,tv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Za(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,ci=!1;function Da(e,i,r){for(r=r.child;r!==null;)ev(e,i,r),r=r.sibling}function ev(e,i,r){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(mt,r)}catch{}switch(r.tag){case 26:Cn||ia(r,i),Da(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Cn||ia(r,i);var l=hn,f=ci;ps(r.type)&&(hn=r.stateNode,ci=!1),Da(e,i,r),al(r.stateNode),hn=l,ci=f;break;case 5:Cn||ia(r,i);case 6:if(l=hn,f=ci,hn=null,Da(e,i,r),hn=l,ci=f,hn!==null)if(ci)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(r.stateNode)}catch(m){Je(r,i,m)}else try{hn.removeChild(r.stateNode)}catch(m){Je(r,i,m)}break;case 18:hn!==null&&(ci?(e=hn,Yv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),kr(e)):Yv(hn,r.stateNode));break;case 4:l=hn,f=ci,hn=r.stateNode.containerInfo,ci=!0,Da(e,i,r),hn=l,ci=f;break;case 0:case 11:case 14:case 15:os(2,r,i),Cn||os(4,r,i),Da(e,i,r);break;case 1:Cn||(ia(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Zg(r,i,l)),Da(e,i,r);break;case 21:Da(e,i,r);break;case 22:Cn=(l=Cn)||r.memoizedState!==null,Da(e,i,r),Cn=l;break;default:Da(e,i,r)}}function nv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{kr(e)}catch(r){Je(i,i.return,r)}}}function iv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{kr(e)}catch(r){Je(i,i.return,r)}}function Ky(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new jg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new jg),i;default:throw Error(a(435,e.tag))}}function Oc(e,i){var r=Ky(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=aM.bind(null,e,l);l.then(f,f)}})}function ui(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],m=e,M=i,U=M;t:for(;U!==null;){switch(U.tag){case 27:if(ps(U.type)){hn=U.stateNode,ci=!1;break t}break;case 5:hn=U.stateNode,ci=!1;break t;case 3:case 4:hn=U.stateNode.containerInfo,ci=!0;break t}U=U.return}if(hn===null)throw Error(a(160));ev(m,M,f),hn=null,ci=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)av(i,e),i=i.sibling}var Wi=null;function av(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ui(i,e),fi(e),l&4&&(os(3,e,e.return),Zo(3,e),os(5,e,e.return));break;case 1:ui(i,e),fi(e),l&512&&(Cn||r===null||ia(r,r.return)),l&64&&Ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Wi;if(ui(i,e),fi(e),l&512&&(Cn||r===null||ia(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ya]||m[nn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),kn(m,l,r),m[nn]=e,En(m),l=m;break t;case"link":var M=a_("link","href",f).get(l+(r.href||""));if(M){for(var U=0;U<M.length;U++)if(m=M[U],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){M.splice(U,1);break e}}m=f.createElement(l),kn(m,l,r),f.head.appendChild(m);break;case"meta":if(M=a_("meta","content",f).get(l+(r.content||""))){for(U=0;U<M.length;U++)if(m=M[U],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){M.splice(U,1);break e}}m=f.createElement(l),kn(m,l,r),f.head.appendChild(m);break;default:throw Error(a(468,l))}m[nn]=e,En(m),l=m}e.stateNode=l}else s_(f,e.type,e.stateNode);else e.stateNode=i_(f,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?s_(f,e.type,e.stateNode):i_(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Uh(e,e.memoizedProps,r.memoizedProps)}break;case 27:ui(i,e),fi(e),l&512&&(Cn||r===null||ia(r,r.return)),r!==null&&l&4&&Uh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ui(i,e),fi(e),l&512&&(Cn||r===null||ia(r,r.return)),e.flags&32){f=e.stateNode;try{$n(f,"")}catch(le){Je(e,e.return,le)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Uh(e,f,r!==null?r.memoizedProps:f)),l&1024&&(Oh=!0);break;case 6:if(ui(i,e),fi(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(le){Je(e,e.return,le)}}break;case 3:if(Jc=null,f=Wi,Wi=Zc(i.containerInfo),ui(i,e),Wi=f,fi(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{kr(i.containerInfo)}catch(le){Je(e,e.return,le)}Oh&&(Oh=!1,sv(e));break;case 4:l=Wi,Wi=Zc(e.stateNode.containerInfo),ui(i,e),fi(e),Wi=l;break;case 12:ui(i,e),fi(e);break;case 31:ui(i,e),fi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 13:ui(i,e),fi(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(zc=de()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 22:f=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,ct=Ca,At=Cn;if(Ca=ct||f,Cn=At||k,ui(i,e),Cn=At,Ca=ct,fi(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||k||Ca||Cn||Zs(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){k=r=i;try{if(m=k.stateNode,f)M=m.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{U=k.stateNode;var Dt=k.memoizedProps.style,ft=Dt!=null&&Dt.hasOwnProperty("display")?Dt.display:null;U.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(le){Je(k,k.return,le)}}}else if(i.tag===6){if(r===null){k=i;try{k.stateNode.nodeValue=f?"":k.memoizedProps}catch(le){Je(k,k.return,le)}}}else if(i.tag===18){if(r===null){k=i;try{var _t=k.stateNode;f?Zv(_t,!0):Zv(k.stateNode,!1)}catch(le){Je(k,k.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Oc(e,r))));break;case 19:ui(i,e),fi(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Oc(e,l)));break;case 30:break;case 21:break;default:ui(i,e),fi(e)}}function fi(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Jg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,m=Nh(e);Lc(e,m,f);break;case 5:var M=r.stateNode;r.flags&32&&($n(M,""),r.flags&=-33);var U=Nh(e);Lc(e,U,M);break;case 3:case 4:var k=r.stateNode.containerInfo,ct=Nh(e);Lh(e,ct,k);break;default:throw Error(a(161))}}catch(At){Je(e,e.return,At)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function sv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;sv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ua(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)$g(e,i.alternate,i),i=i.sibling}function Zs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:os(4,i,i.return),Zs(i);break;case 1:ia(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Zg(i,i.return,r),Zs(i);break;case 27:al(i.stateNode);case 26:case 5:ia(i,i.return),Zs(i);break;case 22:i.memoizedState===null&&Zs(i);break;case 30:Zs(i);break;default:Zs(i)}e=e.sibling}}function Na(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,m=i,M=m.flags;switch(m.tag){case 0:case 11:case 15:Na(f,m,r),Zo(4,m);break;case 1:if(Na(f,m,r),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ct){Je(l,l.return,ct)}if(l=m,f=l.updateQueue,f!==null){var U=l.stateNode;try{var k=f.shared.hiddenCallbacks;if(k!==null)for(f.shared.hiddenCallbacks=null,f=0;f<k.length;f++)z0(k[f],U)}catch(ct){Je(l,l.return,ct)}}r&&M&64&&Yg(m),Ko(m,m.return);break;case 27:Qg(m);case 26:case 5:Na(f,m,r),r&&l===null&&M&4&&Kg(m),Ko(m,m.return);break;case 12:Na(f,m,r);break;case 31:Na(f,m,r),r&&M&4&&nv(f,m);break;case 13:Na(f,m,r),r&&M&4&&iv(f,m);break;case 22:m.memoizedState===null&&Na(f,m,r),Ko(m,m.return);break;case 30:break;default:Na(f,m,r)}i=i.sibling}}function Ph(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Po(r))}function zh(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e))}function qi(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)rv(e,i,r,l),i=i.sibling}function rv(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:qi(e,i,r,l),f&2048&&Zo(9,i);break;case 1:qi(e,i,r,l);break;case 3:qi(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Po(e)));break;case 12:if(f&2048){qi(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,M=m.id,U=m.onPostCommit;typeof U=="function"&&U(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Je(i,i.return,k)}}else qi(e,i,r,l);break;case 31:qi(e,i,r,l);break;case 13:qi(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,M=i.alternate,i.memoizedState!==null?m._visibility&2?qi(e,i,r,l):Jo(e,i):m._visibility&2?qi(e,i,r,l):(m._visibility|=2,Nr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Ph(M,i);break;case 24:qi(e,i,r,l),f&2048&&zh(i.alternate,i);break;default:qi(e,i,r,l)}}function Nr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,M=i,U=r,k=l,ct=M.flags;switch(M.tag){case 0:case 11:case 15:Nr(m,M,U,k,f),Zo(8,M);break;case 23:break;case 22:var At=M.stateNode;M.memoizedState!==null?At._visibility&2?Nr(m,M,U,k,f):Jo(m,M):(At._visibility|=2,Nr(m,M,U,k,f)),f&&ct&2048&&Ph(M.alternate,M);break;case 24:Nr(m,M,U,k,f),f&&ct&2048&&zh(M.alternate,M);break;default:Nr(m,M,U,k,f)}i=i.sibling}}function Jo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:Jo(r,l),f&2048&&Ph(l.alternate,l);break;case 24:Jo(r,l),f&2048&&zh(l.alternate,l);break;default:Jo(r,l)}i=i.sibling}}var Qo=8192;function Lr(e,i,r){if(e.subtreeFlags&Qo)for(e=e.child;e!==null;)ov(e,i,r),e=e.sibling}function ov(e,i,r){switch(e.tag){case 26:Lr(e,i,r),e.flags&Qo&&e.memoizedState!==null&&PM(r,Wi,e.memoizedState,e.memoizedProps);break;case 5:Lr(e,i,r);break;case 3:case 4:var l=Wi;Wi=Zc(e.stateNode.containerInfo),Lr(e,i,r),Wi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Qo,Qo=16777216,Lr(e,i,r),Qo=l):Lr(e,i,r));break;default:Lr(e,i,r)}}function lv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function jo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];In=l,uv(l,e)}lv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cv(e),e=e.sibling}function cv(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&os(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Pc(e)):jo(e);break;default:jo(e)}}function Pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];In=l,uv(l,e)}lv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:os(8,i,i.return),Pc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,Pc(i));break;default:Pc(i)}e=e.sibling}}function uv(e,i){for(;In!==null;){var r=In;switch(r.tag){case 0:case 11:case 15:os(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Po(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,In=l;else t:for(r=e;In!==null;){l=In;var f=l.sibling,m=l.return;if(tv(l),l===r){In=null;break t}if(f!==null){f.return=m,In=f;break t}In=m}}}var Jy={getCacheForType:function(e){var i=Gn(An),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Gn(An).controller.signal}},Qy=typeof WeakMap=="function"?WeakMap:Map,We=0,sn=null,Ne=null,Oe=0,Ke=0,yi=null,ls=!1,Or=!1,Ih=!1,La=0,vn=0,cs=0,Ks=0,Bh=0,Mi=0,Pr=0,$o=null,hi=null,Fh=!1,zc=0,fv=0,Ic=1/0,Bc=null,us=null,Ln=0,fs=null,zr=null,Oa=0,Hh=0,Gh=null,hv=null,tl=0,Vh=null;function bi(){return(We&2)!==0&&Oe!==0?Oe&-Oe:F.T!==null?Zh():oi()}function dv(){if(Mi===0)if((Oe&536870912)===0||Be){var e=me;me<<=1,(me&3932160)===0&&(me=262144),Mi=e}else Mi=536870912;return e=xi.current,e!==null&&(e.flags|=32),Mi}function di(e,i,r){(e===sn&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)&&(Ir(e,0),hs(e,Oe,Mi,!1)),Rt(e,r),((We&2)===0||e!==sn)&&(e===sn&&((We&2)===0&&(Ks|=r),vn===4&&hs(e,Oe,Mi,!1)),aa(e))}function pv(e,i,r){if((We&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||kt(e,i),f=l?tM(e,i):Xh(e,i,!0),m=l;do{if(f===0){Or&&!l&&hs(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!jy(r)){f=Xh(e,i,!1),m=!1;continue}if(f===2){if(m=i,e.errorRecoveryDisabledLanes&m)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var U=e;f=$o;var k=U.current.memoizedState.isDehydrated;if(k&&(Ir(U,M).flags|=256),M=Xh(U,M,!1),M!==2){if(Ih&&!k){U.errorRecoveryDisabledLanes|=m,Ks|=m,f=4;break t}m=hi,hi=f,m!==null&&(hi===null?hi=m:hi.push.apply(hi,m))}f=M}if(m=!1,f!==2)continue}}if(f===1){Ir(e,0),hs(e,i,0,!0);break}t:{switch(l=e,m=f,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,Mi,!ls);break t;case 2:hi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=zc+300-de(),10<f)){if(hs(l,i,Mi,!ls),Mt(l,0,!0)!==0)break t;Oa=i,l.timeoutHandle=Wv(mv.bind(null,l,r,hi,Bc,Fh,i,Mi,Ks,Pr,ls,m,"Throttled",-0,0),f);break t}mv(l,r,hi,Bc,Fh,i,Mi,Ks,Pr,ls,m,null,-0,0)}}break}while(!0);aa(e)}function mv(e,i,r,l,f,m,M,U,k,ct,At,Dt,ft,_t){if(e.timeoutHandle=-1,Dt=i.subtreeFlags,Dt&8192||(Dt&16785408)===16785408){Dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ui},ov(i,m,Dt);var le=(m&62914560)===m?zc-de():(m&4194048)===m?fv-de():0;if(le=zM(Dt,le),le!==null){Oa=m,e.cancelPendingCommit=le(bv.bind(null,e,i,m,r,l,f,M,U,k,At,Dt,null,ft,_t)),hs(e,m,M,!ct);return}}bv(e,i,m,r,l,f,M,U,k)}function jy(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],m=f.getSnapshot;f=f.value;try{if(!vi(m(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(e,i,r,l){i&=~Bh,i&=~Ks,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var m=31-$t(f),M=1<<m;l[m]=-1,f&=~M}r!==0&&Ht(e,r,i)}function Fc(){return(We&6)===0?(el(0),!1):!0}function kh(){if(Ne!==null){if(Ke===0)var e=Ne.return;else e=Ne,ba=Hs=null,sh(e),wr=null,Io=0,e=Ne;for(;e!==null;)qg(e.alternate,e),e=e.return;Ne=null}}function Ir(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,_M(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Oa=0,kh(),sn=e,Ne=r=ya(e.current,null),Oe=i,Ke=0,yi=null,ls=!1,Or=kt(e,i),Ih=!1,Pr=Mi=Bh=Ks=cs=vn=0,hi=$o=null,Fh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-$t(l),m=1<<f;i|=e[f],l&=~m}return La=i,rc(),r}function gv(e,i){Ee=null,F.H=Wo,i===Ar||i===pc?(i=N0(),Ke=3):i===Yf?(i=N0(),Ke=4):Ke=i===yh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yi=i,Ne===null&&(vn=1,Rc(e,Li(i,e.current)))}function vv(){var e=xi.current;return e===null?!0:(Oe&4194048)===Oe?Ii===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?e===Ii:!1}function _v(){var e=F.H;return F.H=Wo,e===null?Wo:e}function xv(){var e=F.A;return F.A=Jy,e}function Hc(){vn=4,ls||(Oe&4194048)!==Oe&&xi.current!==null||(Or=!0),(cs&134217727)===0&&(Ks&134217727)===0||sn===null||hs(sn,Oe,Mi,!1)}function Xh(e,i,r){var l=We;We|=2;var f=_v(),m=xv();(sn!==e||Oe!==i)&&(Bc=null,Ir(e,i)),i=!1;var M=vn;t:do try{if(Ke!==0&&Ne!==null){var U=Ne,k=yi;switch(Ke){case 8:kh(),M=6;break t;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var ct=Ke;if(Ke=0,yi=null,Br(e,U,k,ct),r&&Or){M=0;break t}break;default:ct=Ke,Ke=0,yi=null,Br(e,U,k,ct)}}$y(),M=vn;break}catch(At){gv(e,At)}while(!0);return i&&e.shellSuspendCounter++,ba=Hs=null,We=l,F.H=f,F.A=m,Ne===null&&(sn=null,Oe=0,rc()),M}function $y(){for(;Ne!==null;)Sv(Ne)}function tM(e,i){var r=We;We|=2;var l=_v(),f=xv();sn!==e||Oe!==i?(Bc=null,Ic=de()+500,Ir(e,i)):Or=kt(e,i);t:do try{if(Ke!==0&&Ne!==null){i=Ne;var m=yi;e:switch(Ke){case 1:Ke=0,yi=null,Br(e,i,m,1);break;case 2:case 9:if(D0(m)){Ke=0,yi=null,yv(i);break}i=function(){Ke!==2&&Ke!==9||sn!==e||(Ke=7),aa(e)},m.then(i,i);break t;case 3:Ke=7;break t;case 4:Ke=5;break t;case 7:D0(m)?(Ke=0,yi=null,yv(i)):(Ke=0,yi=null,Br(e,i,m,7));break;case 5:var M=null;switch(Ne.tag){case 26:M=Ne.memoizedState;case 5:case 27:var U=Ne;if(M?r_(M):U.stateNode.complete){Ke=0,yi=null;var k=U.sibling;if(k!==null)Ne=k;else{var ct=U.return;ct!==null?(Ne=ct,Gc(ct)):Ne=null}break e}}Ke=0,yi=null,Br(e,i,m,5);break;case 6:Ke=0,yi=null,Br(e,i,m,6);break;case 8:kh(),vn=6;break t;default:throw Error(a(462))}}eM();break}catch(At){gv(e,At)}while(!0);return ba=Hs=null,F.H=l,F.A=f,We=r,Ne!==null?0:(sn=null,Oe=0,rc(),vn)}function eM(){for(;Ne!==null&&!se();)Sv(Ne)}function Sv(e){var i=Xg(e.alternate,e,La);e.memoizedProps=e.pendingProps,i===null?Gc(e):Ne=i}function yv(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=Bg(r,i,i.pendingProps,i.type,void 0,Oe);break;case 11:i=Bg(r,i,i.pendingProps,i.type.render,i.ref,Oe);break;case 5:sh(i);default:qg(r,i),i=Ne=x0(i,La),i=Xg(r,i,La)}e.memoizedProps=e.pendingProps,i===null?Gc(e):Ne=i}function Br(e,i,r,l){ba=Hs=null,sh(i),wr=null,Io=0;var f=i.return;try{if(ky(e,f,i,r,Oe)){vn=1,Rc(e,Li(r,e.current)),Ne=null;return}}catch(m){if(f!==null)throw Ne=f,m;vn=1,Rc(e,Li(r,e.current)),Ne=null;return}i.flags&32768?(Be||l===1?e=!0:Or||(Oe&536870912)!==0?e=!1:(ls=e=!0,(l===2||l===9||l===3||l===6)&&(l=xi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Mv(i,e)):Gc(i)}function Gc(e){var i=e;do{if((i.flags&32768)!==0){Mv(i,ls);return}e=i.return;var r=qy(i.alternate,i,La);if(r!==null){Ne=r;return}if(i=i.sibling,i!==null){Ne=i;return}Ne=i=e}while(i!==null);vn===0&&(vn=5)}function Mv(e,i){do{var r=Yy(e.alternate,e);if(r!==null){r.flags&=32767,Ne=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=r}while(e!==null);vn=6,Ne=null}function bv(e,i,r,l,f,m,M,U,k){e.cancelPendingCommit=null;do Vc();while(Ln!==0);if((We&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Nf,Ut(e,r,m,M,U,k),e===sn&&(Ne=sn=null,Oe=0),zr=i,fs=e,Oa=r,Hh=m,Gh=f,hv=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sM(Q,function(){return Rv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,f=V.p,V.p=2,M=We,We|=4;try{Zy(e,i,r)}finally{We=M,V.p=f,F.T=l}}Ln=1,Ev(),Tv(),Av()}}function Ev(){if(Ln===1){Ln=0;var e=fs,i=zr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=V.p;V.p=2;var f=We;We|=4;try{av(i,e);var m=nd,M=u0(e.containerInfo),U=m.focusedElem,k=m.selectionRange;if(M!==U&&U&&U.ownerDocument&&c0(U.ownerDocument.documentElement,U)){if(k!==null&&wf(U)){var ct=k.start,At=k.end;if(At===void 0&&(At=ct),"selectionStart"in U)U.selectionStart=ct,U.selectionEnd=Math.min(At,U.value.length);else{var Dt=U.ownerDocument||document,ft=Dt&&Dt.defaultView||window;if(ft.getSelection){var _t=ft.getSelection(),le=U.textContent.length,ge=Math.min(k.start,le),en=k.end===void 0?ge:Math.min(k.end,le);!_t.extend&&ge>en&&(M=en,en=ge,ge=M);var tt=l0(U,ge),K=l0(U,en);if(tt&&K&&(_t.rangeCount!==1||_t.anchorNode!==tt.node||_t.anchorOffset!==tt.offset||_t.focusNode!==K.node||_t.focusOffset!==K.offset)){var lt=Dt.createRange();lt.setStart(tt.node,tt.offset),_t.removeAllRanges(),ge>en?(_t.addRange(lt),_t.extend(K.node,K.offset)):(lt.setEnd(K.node,K.offset),_t.addRange(lt))}}}}for(Dt=[],_t=U;_t=_t.parentNode;)_t.nodeType===1&&Dt.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Dt.length;U++){var wt=Dt[U];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}tu=!!ed,nd=ed=null}finally{We=f,V.p=l,F.T=r}}e.current=i,Ln=2}}function Tv(){if(Ln===2){Ln=0;var e=fs,i=zr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=V.p;V.p=2;var f=We;We|=4;try{$g(e,i.alternate,i)}finally{We=f,V.p=l,F.T=r}}Ln=3}}function Av(){if(Ln===4||Ln===3){Ln=0,X();var e=fs,i=zr,r=Oa,l=hv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ln=5:(Ln=0,zr=fs=null,wv(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(us=null),Ci(r),i=i.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(mt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,f=V.p,V.p=2,F.T=null;try{for(var m=e.onRecoverableError,M=0;M<l.length;M++){var U=l[M];m(U.value,{componentStack:U.stack})}}finally{F.T=i,V.p=f}}(Oa&3)!==0&&Vc(),aa(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===Vh?tl++:(tl=0,Vh=e):tl=0,el(0)}}function wv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Po(i)))}function Vc(){return Ev(),Tv(),Av(),Rv()}function Rv(){if(Ln!==5)return!1;var e=fs,i=Hh;Hh=0;var r=Ci(Oa),l=F.T,f=V.p;try{V.p=32>r?32:r,F.T=null,r=Gh,Gh=null;var m=fs,M=Oa;if(Ln=0,zr=fs=null,Oa=0,(We&6)!==0)throw Error(a(331));var U=We;if(We|=4,cv(m.current),rv(m,m.current,M,r),We=U,el(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(mt,m)}catch{}return!0}finally{V.p=f,F.T=l,wv(e,i)}}function Cv(e,i,r){i=Li(r,i),i=Sh(e.stateNode,i,2),e=as(e,i,2),e!==null&&(Rt(e,2),aa(e))}function Je(e,i,r){if(e.tag===3)Cv(e,e,r);else for(;i!==null;){if(i.tag===3){Cv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(us===null||!us.has(l))){e=Li(r,e),r=Dg(2),l=as(i,r,2),l!==null&&(Ug(r,l,i,e),Rt(l,2),aa(l));break}}i=i.return}}function Wh(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Qy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Ih=!0,f.add(r),e=nM.bind(null,e,i,r),i.then(e,e))}function nM(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,sn===e&&(Oe&r)===r&&(vn===4||vn===3&&(Oe&62914560)===Oe&&300>de()-zc?(We&2)===0&&Ir(e,0):Bh|=r,Pr===Oe&&(Pr=0)),aa(e)}function Dv(e,i){i===0&&(i=H()),e=Is(e,i),e!==null&&(Rt(e,i),aa(e))}function iM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Dv(e,r)}function aM(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Dv(e,r)}function sM(e,i){return Lt(e,i)}var kc=null,Fr=null,qh=!1,Xc=!1,Yh=!1,ds=0;function aa(e){e!==Fr&&e.next===null&&(Fr===null?kc=Fr=e:Fr=Fr.next=e),Xc=!0,qh||(qh=!0,oM())}function el(e,i){if(!Yh&&Xc){Yh=!0;do for(var r=!1,l=kc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var M=l.suspendedLanes,U=l.pingedLanes;m=(1<<31-$t(42|e)+1)-1,m&=f&~(M&~U),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Ov(l,m))}else m=Oe,m=Mt(l,l===sn?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||kt(l,m)||(r=!0,Ov(l,m));l=l.next}while(r);Yh=!1}}function rM(){Uv()}function Uv(){Xc=qh=!1;var e=0;ds!==0&&vM()&&(e=ds);for(var i=de(),r=null,l=kc;l!==null;){var f=l.next,m=Nv(l,i);m===0?(l.next=null,r===null?kc=f:r.next=f,f===null&&(Fr=r)):(r=l,(e!==0||(m&3)!==0)&&(Xc=!0)),l=f}Ln!==0&&Ln!==5||el(e),ds!==0&&(ds=0)}function Nv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var M=31-$t(m),U=1<<M,k=f[M];k===-1?((U&r)===0||(U&l)!==0)&&(f[M]=Jt(U,i)):k<=i&&(e.expiredLanes|=U),m&=~U}if(i=sn,r=Oe,r=Mt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ke===2||Ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Yt(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||kt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Yt(l),Ci(r)){case 2:case 8:r=T;break;case 32:r=Q;break;case 268435456:r=xt;break;default:r=Q}return l=Lv.bind(null,e),r=Lt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Yt(l),e.callbackPriority=2,e.callbackNode=null,2}function Lv(e,i){if(Ln!==0&&Ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Vc()&&e.callbackNode!==r)return null;var l=Oe;return l=Mt(e,e===sn?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(pv(e,l,i),Nv(e,de()),e.callbackNode!=null&&e.callbackNode===r?Lv.bind(null,e):null)}function Ov(e,i){if(Vc())return null;pv(e,i,!0)}function oM(){xM(function(){(We&6)!==0?Lt(I,rM):Uv()})}function Zh(){if(ds===0){var e=Er;e===0&&(e=fe,fe<<=1,(fe&261888)===0&&(fe=256)),ds=e}return ds}function Pv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ki(""+e)}function zv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function lM(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var m=Pv((f[Fe]||null).action),M=l.submitter;M&&(i=(i=M[Fe]||null)?Pv(i.formAction):M.getAttribute("formAction"),i!==null&&(m=i,M=null));var U=new nc("action","action",null,l,f);e.push({event:U,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var k=M?zv(f,M):new FormData(f);ph(r,{pending:!0,data:k,method:f.method,action:m},null,k)}}else typeof m=="function"&&(U.preventDefault(),k=M?zv(f,M):new FormData(f),ph(r,{pending:!0,data:k,method:f.method,action:m},m,k))},currentTarget:f}]})}}for(var Kh=0;Kh<Uf.length;Kh++){var Jh=Uf[Kh],cM=Jh.toLowerCase(),uM=Jh[0].toUpperCase()+Jh.slice(1);Xi(cM,"on"+uM)}Xi(d0,"onAnimationEnd"),Xi(p0,"onAnimationIteration"),Xi(m0,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(Ay,"onTransitionRun"),Xi(wy,"onTransitionStart"),Xi(Ry,"onTransitionCancel"),Xi(g0,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function Iv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var M=l.length-1;0<=M;M--){var U=l[M],k=U.instance,ct=U.currentTarget;if(U=U.listener,k!==m&&f.isPropagationStopped())break t;m=U,f.currentTarget=ct;try{m(f)}catch(At){sc(At)}f.currentTarget=null,m=k}else for(M=0;M<l.length;M++){if(U=l[M],k=U.instance,ct=U.currentTarget,U=U.listener,k!==m&&f.isPropagationStopped())break t;m=U,f.currentTarget=ct;try{m(f)}catch(At){sc(At)}f.currentTarget=null,m=k}}}}function Le(e,i){var r=i[va];r===void 0&&(r=i[va]=new Set);var l=e+"__bubble";r.has(l)||(Bv(i,e,2,!1),r.add(l))}function Qh(e,i,r){var l=0;i&&(l|=4),Bv(r,e,l,i)}var Wc="_reactListening"+Math.random().toString(36).slice(2);function jh(e){if(!e[Wc]){e[Wc]=!0,jl.forEach(function(r){r!=="selectionchange"&&(fM.has(r)||Qh(r,!1,e),Qh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Wc]||(i[Wc]=!0,Qh("selectionchange",!1,i))}}function Bv(e,i,r,l){switch(d_(i)){case 2:var f=FM;break;case 8:f=HM;break;default:f=dd}r=f.bind(null,i,r,e),f=void 0,!_f||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function $h(e,i,r,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var U=l.stateNode.containerInfo;if(U===f)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;U!==null;){if(M=_a(U),M===null)return;if(k=M.tag,k===5||k===6||k===26||k===27){l=m=M;continue t}U=U.parentNode}}l=l.return}km(function(){var ct=m,At=gf(r),Dt=[];t:{var ft=v0.get(e);if(ft!==void 0){var _t=nc,le=e;switch(e){case"keypress":if(tc(r)===0)break t;case"keydown":case"keyup":_t=ay;break;case"focusin":le="focus",_t=Mf;break;case"focusout":le="blur",_t=Mf;break;case"beforeblur":case"afterblur":_t=Mf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=oy;break;case d0:case p0:case m0:_t=KS;break;case g0:_t=cy;break;case"scroll":case"scrollend":_t=XS;break;case"wheel":_t=fy;break;case"copy":case"cut":case"paste":_t=QS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=Zm;break;case"toggle":case"beforetoggle":_t=dy}var ge=(i&4)!==0,en=!ge&&(e==="scroll"||e==="scrollend"),tt=ge?ft!==null?ft+"Capture":null:ft;ge=[];for(var K=ct,lt;K!==null;){var wt=K;if(lt=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||lt===null||tt===null||(wt=Eo(K,tt),wt!=null&&ge.push(il(K,wt,lt))),en)break;K=K.return}0<ge.length&&(ft=new _t(ft,le,null,r,At),Dt.push({event:ft,listeners:ge}))}}if((i&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",ft&&r!==mf&&(le=r.relatedTarget||r.fromElement)&&(_a(le)||le[Sn]))break t;if((_t||ft)&&(ft=At.window===At?At:(ft=At.ownerDocument)?ft.defaultView||ft.parentWindow:window,_t?(le=r.relatedTarget||r.toElement,_t=ct,le=le?_a(le):null,le!==null&&(en=c(le),ge=le.tag,le!==en||ge!==5&&ge!==27&&ge!==6)&&(le=null)):(_t=null,le=ct),_t!==le)){if(ge=qm,wt="onMouseLeave",tt="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Zm,wt="onPointerLeave",tt="onPointerEnter",K="pointer"),en=_t==null?ft:Ls(_t),lt=le==null?ft:Ls(le),ft=new ge(wt,K+"leave",_t,r,At),ft.target=en,ft.relatedTarget=lt,wt=null,_a(At)===ct&&(ge=new ge(tt,K+"enter",le,r,At),ge.target=lt,ge.relatedTarget=en,wt=ge),en=wt,_t&&le)e:{for(ge=hM,tt=_t,K=le,lt=0,wt=tt;wt;wt=ge(wt))lt++;wt=0;for(var pe=K;pe;pe=ge(pe))wt++;for(;0<lt-wt;)tt=ge(tt),lt--;for(;0<wt-lt;)K=ge(K),wt--;for(;lt--;){if(tt===K||K!==null&&tt===K.alternate){ge=tt;break e}tt=ge(tt),K=ge(K)}ge=null}else ge=null;_t!==null&&Fv(Dt,ft,_t,ge,!1),le!==null&&en!==null&&Fv(Dt,en,le,ge,!0)}}t:{if(ft=ct?Ls(ct):window,_t=ft.nodeName&&ft.nodeName.toLowerCase(),_t==="select"||_t==="input"&&ft.type==="file")var Ve=n0;else if(t0(ft))if(i0)Ve=by;else{Ve=yy;var ue=Sy}else _t=ft.nodeName,!_t||_t.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ct&&Di(ct.elementType)&&(Ve=n0):Ve=My;if(Ve&&(Ve=Ve(e,ct))){e0(Dt,Ve,r,At);break t}ue&&ue(e,ft,ct),e==="focusout"&&ct&&ft.type==="number"&&ct.memoizedProps.value!=null&&Nn(ft,"number",ft.value)}switch(ue=ct?Ls(ct):window,e){case"focusin":(t0(ue)||ue.contentEditable==="true")&&(gr=ue,Rf=ct,No=null);break;case"focusout":No=Rf=gr=null;break;case"mousedown":Cf=!0;break;case"contextmenu":case"mouseup":case"dragend":Cf=!1,f0(Dt,r,At);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":f0(Dt,r,At)}var Te;if(Ef)t:{switch(e){case"compositionstart":var Pe="onCompositionStart";break t;case"compositionend":Pe="onCompositionEnd";break t;case"compositionupdate":Pe="onCompositionUpdate";break t}Pe=void 0}else mr?jm(e,r)&&(Pe="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Pe="onCompositionStart");Pe&&(Km&&r.locale!=="ko"&&(mr||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&mr&&(Te=Xm()):(Qa=At,xf="value"in Qa?Qa.value:Qa.textContent,mr=!0)),ue=qc(ct,Pe),0<ue.length&&(Pe=new Ym(Pe,e,null,r,At),Dt.push({event:Pe,listeners:ue}),Te?Pe.data=Te:(Te=$m(r),Te!==null&&(Pe.data=Te)))),(Te=my?gy(e,r):vy(e,r))&&(Pe=qc(ct,"onBeforeInput"),0<Pe.length&&(ue=new Ym("onBeforeInput","beforeinput",null,r,At),Dt.push({event:ue,listeners:Pe}),ue.data=Te)),lM(Dt,e,ct,r,At)}Iv(Dt,i)})}function il(e,i,r){return{instance:e,listener:i,currentTarget:r}}function qc(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Eo(e,r),f!=null&&l.unshift(il(e,f,m)),f=Eo(e,i),f!=null&&l.push(il(e,f,m))),e.tag===3)return l;e=e.return}return[]}function hM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fv(e,i,r,l,f){for(var m=i._reactName,M=[];r!==null&&r!==l;){var U=r,k=U.alternate,ct=U.stateNode;if(U=U.tag,k!==null&&k===l)break;U!==5&&U!==26&&U!==27||ct===null||(k=ct,f?(ct=Eo(r,m),ct!=null&&M.unshift(il(r,ct,k))):f||(ct=Eo(r,m),ct!=null&&M.push(il(r,ct,k)))),r=r.return}M.length!==0&&e.push({event:i,listeners:M})}var dM=/\r\n?/g,pM=/\u0000|\uFFFD/g;function Hv(e){return(typeof e=="string"?e:""+e).replace(dM,`
`).replace(pM,"")}function Gv(e,i){return i=Hv(i),Hv(e)===i}function tn(e,i,r,l,f,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||$n(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&$n(e,""+l);break;case"className":Kt(e,"class",l);break;case"tabIndex":Kt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,r,l);break;case"style":fn(e,l,m);break;case"data":if(i!=="object"){Kt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ki(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&tn(e,i,"name",f.name,f,null),tn(e,i,"formEncType",f.formEncType,f,null),tn(e,i,"formMethod",f.formMethod,f,null),tn(e,i,"formTarget",f.formTarget,f,null)):(tn(e,i,"encType",f.encType,f,null),tn(e,i,"method",f.method,f,null),tn(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=ki(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Ui);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=ki(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Le("beforetoggle",e),Le("toggle",e),ne(e,"popover",l);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ne(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=je.get(r)||r,ne(e,r,l))}}function td(e,i,r,l,f,m){switch(r){case"style":fn(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?$n(e,l):(typeof l=="number"||typeof l=="bigint")&&$n(e,""+l);break;case"onScroll":l!=null&&Le("scroll",e);break;case"onScrollEnd":l!=null&&Le("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ui);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!bo.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),m=e[Fe]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ne(e,r,l)}}}function kn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",e),Le("load",e);var l=!1,f=!1,m;for(m in r)if(r.hasOwnProperty(m)){var M=r[m];if(M!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(e,i,m,M,r,null)}}f&&tn(e,i,"srcSet",r.srcSet,r,null),l&&tn(e,i,"src",r.src,r,null);return;case"input":Le("invalid",e);var U=m=M=f=null,k=null,ct=null;for(l in r)if(r.hasOwnProperty(l)){var At=r[l];if(At!=null)switch(l){case"name":f=At;break;case"type":M=At;break;case"checked":k=At;break;case"defaultChecked":ct=At;break;case"value":m=At;break;case"defaultValue":U=At;break;case"children":case"dangerouslySetInnerHTML":if(At!=null)throw Error(a(137,i));break;default:tn(e,i,l,At,r,null)}}ie(e,m,U,k,ct,M,f,!1);return;case"select":Le("invalid",e),l=M=m=null;for(f in r)if(r.hasOwnProperty(f)&&(U=r[f],U!=null))switch(f){case"value":m=U;break;case"defaultValue":M=U;break;case"multiple":l=U;default:tn(e,i,f,U,r,null)}i=m,r=M,e.multiple=!!l,i!=null?we(e,!!l,i,!1):r!=null&&we(e,!!l,r,!0);return;case"textarea":Le("invalid",e),m=f=l=null;for(M in r)if(r.hasOwnProperty(M)&&(U=r[M],U!=null))switch(M){case"value":l=U;break;case"defaultValue":f=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:tn(e,i,M,U,r,null)}gi(e,l,f,m);return;case"option":for(k in r)if(r.hasOwnProperty(k)&&(l=r[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tn(e,i,k,l,r,null)}return;case"dialog":Le("beforetoggle",e),Le("toggle",e),Le("cancel",e),Le("close",e);break;case"iframe":case"object":Le("load",e);break;case"video":case"audio":for(l=0;l<nl.length;l++)Le(nl[l],e);break;case"image":Le("error",e),Le("load",e);break;case"details":Le("toggle",e);break;case"embed":case"source":case"link":Le("error",e),Le("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ct in r)if(r.hasOwnProperty(ct)&&(l=r[ct],l!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tn(e,i,ct,l,r,null)}return;default:if(Di(i)){for(At in r)r.hasOwnProperty(At)&&(l=r[At],l!==void 0&&td(e,i,At,l,r,void 0));return}}for(U in r)r.hasOwnProperty(U)&&(l=r[U],l!=null&&tn(e,i,U,l,r,null))}function mM(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,M=null,U=null,k=null,ct=null,At=null;for(_t in r){var Dt=r[_t];if(r.hasOwnProperty(_t)&&Dt!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":k=Dt;default:l.hasOwnProperty(_t)||tn(e,i,_t,null,l,Dt)}}for(var ft in l){var _t=l[ft];if(Dt=r[ft],l.hasOwnProperty(ft)&&(_t!=null||Dt!=null))switch(ft){case"type":m=_t;break;case"name":f=_t;break;case"checked":ct=_t;break;case"defaultChecked":At=_t;break;case"value":M=_t;break;case"defaultValue":U=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(a(137,i));break;default:_t!==Dt&&tn(e,i,ft,_t,l,Dt)}}Tn(e,M,U,k,ct,At,m,f);return;case"select":_t=M=U=ft=null;for(m in r)if(k=r[m],r.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":_t=k;default:l.hasOwnProperty(m)||tn(e,i,m,null,l,k)}for(f in l)if(m=l[f],k=r[f],l.hasOwnProperty(f)&&(m!=null||k!=null))switch(f){case"value":ft=m;break;case"defaultValue":U=m;break;case"multiple":M=m;default:m!==k&&tn(e,i,f,m,l,k)}i=U,r=M,l=_t,ft!=null?we(e,!!r,ft,!1):!!l!=!!r&&(i!=null?we(e,!!r,i,!0):we(e,!!r,r?[]:"",!1));return;case"textarea":_t=ft=null;for(U in r)if(f=r[U],r.hasOwnProperty(U)&&f!=null&&!l.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:tn(e,i,U,null,l,f)}for(M in l)if(f=l[M],m=r[M],l.hasOwnProperty(M)&&(f!=null||m!=null))switch(M){case"value":ft=f;break;case"defaultValue":_t=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==m&&tn(e,i,M,f,l,m)}jn(e,ft,_t);return;case"option":for(var le in r)if(ft=r[le],r.hasOwnProperty(le)&&ft!=null&&!l.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:tn(e,i,le,null,l,ft)}for(k in l)if(ft=l[k],_t=r[k],l.hasOwnProperty(k)&&ft!==_t&&(ft!=null||_t!=null))switch(k){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:tn(e,i,k,ft,l,_t)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in r)ft=r[ge],r.hasOwnProperty(ge)&&ft!=null&&!l.hasOwnProperty(ge)&&tn(e,i,ge,null,l,ft);for(ct in l)if(ft=l[ct],_t=r[ct],l.hasOwnProperty(ct)&&ft!==_t&&(ft!=null||_t!=null))switch(ct){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:tn(e,i,ct,ft,l,_t)}return;default:if(Di(i)){for(var en in r)ft=r[en],r.hasOwnProperty(en)&&ft!==void 0&&!l.hasOwnProperty(en)&&td(e,i,en,void 0,l,ft);for(At in l)ft=l[At],_t=r[At],!l.hasOwnProperty(At)||ft===_t||ft===void 0&&_t===void 0||td(e,i,At,ft,l,_t);return}}for(var tt in r)ft=r[tt],r.hasOwnProperty(tt)&&ft!=null&&!l.hasOwnProperty(tt)&&tn(e,i,tt,null,l,ft);for(Dt in l)ft=l[Dt],_t=r[Dt],!l.hasOwnProperty(Dt)||ft===_t||ft==null&&_t==null||tn(e,i,Dt,ft,l,_t)}function Vv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],m=f.transferSize,M=f.initiatorType,U=f.duration;if(m&&U&&Vv(M)){for(M=0,U=f.responseEnd,l+=1;l<r.length;l++){var k=r[l],ct=k.startTime;if(ct>U)break;var At=k.transferSize,Dt=k.initiatorType;At&&Vv(Dt)&&(k=k.responseEnd,M+=At*(k<U?1:(U-ct)/(k-ct)))}if(--l,i+=8*(m+M)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ed=null,nd=null;function Yc(e){return e.nodeType===9?e:e.ownerDocument}function kv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function id(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ad=null;function vM(){var e=window.event;return e&&e.type==="popstate"?e===ad?!1:(ad=e,!0):(ad=null,!1)}var Wv=typeof setTimeout=="function"?setTimeout:void 0,_M=typeof clearTimeout=="function"?clearTimeout:void 0,qv=typeof Promise=="function"?Promise:void 0,xM=typeof queueMicrotask=="function"?queueMicrotask:typeof qv<"u"?function(e){return qv.resolve(null).then(e).catch(SM)}:Wv;function SM(e){setTimeout(function(){throw e})}function ps(e){return e==="head"}function Yv(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),kr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")al(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,al(r);for(var m=r.firstChild;m;){var M=m.nextSibling,U=m.nodeName;m[Ya]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=M}}else r==="body"&&al(e.ownerDocument.body);r=f}while(r);kr(i)}function Zv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function sd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":sd(r),Za(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function yM(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ya])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Bi(e.nextSibling),e===null)break}return null}function MM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Bi(e.nextSibling),e===null))return null;return e}function Kv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Bi(e.nextSibling),e===null))return null;return e}function rd(e){return e.data==="$?"||e.data==="$~"}function od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bM(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Bi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var ld=null;function Jv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Bi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Qv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function jv(e,i,r){switch(i=Yc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function al(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Za(e)}var Fi=new Map,$v=new Set;function Zc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Pa=V.d;V.d={f:EM,r:TM,D:AM,C:wM,L:RM,m:CM,X:UM,S:DM,M:NM};function EM(){var e=Pa.f(),i=Fc();return e||i}function TM(e){var i=xa(e);i!==null&&i.tag===5&&i.type==="form"?gg(i):Pa.r(e)}var Hr=typeof document>"u"?null:document;function t_(e,i,r){var l=Hr;if(l&&typeof i=="string"&&i){var f=Ae(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),$v.has(f)||($v.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),kn(i,"link",e),En(i),l.head.appendChild(i)))}}function AM(e){Pa.D(e),t_("dns-prefetch",e,null)}function wM(e,i){Pa.C(e,i),t_("preconnect",e,i)}function RM(e,i,r){Pa.L(e,i,r);var l=Hr;if(l&&e&&i){var f='link[rel="preload"][as="'+Ae(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Ae(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Ae(r.imageSizes)+'"]')):f+='[href="'+Ae(e)+'"]';var m=f;switch(i){case"style":m=Gr(e);break;case"script":m=Vr(e)}Fi.has(m)||(e=_({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Fi.set(m,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(sl(m))||i==="script"&&l.querySelector(rl(m))||(i=l.createElement("link"),kn(i,"link",e),En(i),l.head.appendChild(i)))}}function CM(e,i){Pa.m(e,i);var r=Hr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ae(l)+'"][href="'+Ae(e)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Vr(e)}if(!Fi.has(m)&&(e=_({rel:"modulepreload",href:e},i),Fi.set(m,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(rl(m)))return}l=r.createElement("link"),kn(l,"link",e),En(l),r.head.appendChild(l)}}}function DM(e,i,r){Pa.S(e,i,r);var l=Hr;if(l&&e){var f=Ka(l).hoistableStyles,m=Gr(e);i=i||"default";var M=f.get(m);if(!M){var U={loading:0,preload:null};if(M=l.querySelector(sl(m)))U.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Fi.get(m))&&cd(e,r);var k=M=l.createElement("link");En(k),kn(k,"link",e),k._p=new Promise(function(ct,At){k.onload=ct,k.onerror=At}),k.addEventListener("load",function(){U.loading|=1}),k.addEventListener("error",function(){U.loading|=2}),U.loading|=4,Kc(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:U},f.set(m,M)}}}function UM(e,i){Pa.X(e,i);var r=Hr;if(r&&e){var l=Ka(r).hoistableScripts,f=Vr(e),m=l.get(f);m||(m=r.querySelector(rl(f)),m||(e=_({src:e,async:!0},i),(i=Fi.get(f))&&ud(e,i),m=r.createElement("script"),En(m),kn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function NM(e,i){Pa.M(e,i);var r=Hr;if(r&&e){var l=Ka(r).hoistableScripts,f=Vr(e),m=l.get(f);m||(m=r.querySelector(rl(f)),m||(e=_({src:e,async:!0,type:"module"},i),(i=Fi.get(f))&&ud(e,i),m=r.createElement("script"),En(m),kn(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function e_(e,i,r,l){var f=(f=Wt.current)?Zc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Gr(r.href),r=Ka(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Gr(r.href);var m=Ka(f).hoistableStyles,M=m.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,M),(m=f.querySelector(sl(e)))&&!m._p&&(M.instance=m,M.state.loading=5),Fi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Fi.set(e,r),m||LM(f,e,r,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Vr(r),r=Ka(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Gr(e){return'href="'+Ae(e)+'"'}function sl(e){return'link[rel="stylesheet"]['+e+"]"}function n_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function LM(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),kn(i,"link",r),En(i),e.head.appendChild(i))}function Vr(e){return'[src="'+Ae(e)+'"]'}function rl(e){return"script[async]"+e}function i_(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ae(r.href)+'"]');if(l)return i.instance=l,En(l),l;var f=_({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),En(l),kn(l,"style",f),Kc(l,r.precedence,e),i.instance=l;case"stylesheet":f=Gr(r.href);var m=e.querySelector(sl(f));if(m)return i.state.loading|=4,i.instance=m,En(m),m;l=n_(r),(f=Fi.get(f))&&cd(l,f),m=(e.ownerDocument||e).createElement("link"),En(m);var M=m;return M._p=new Promise(function(U,k){M.onload=U,M.onerror=k}),kn(m,"link",l),i.state.loading|=4,Kc(m,r.precedence,e),i.instance=m;case"script":return m=Vr(r.src),(f=e.querySelector(rl(m)))?(i.instance=f,En(f),f):(l=r,(f=Fi.get(m))&&(l=_({},r),ud(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),En(f),kn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Kc(l,r.precedence,e));return i.instance}function Kc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,M=0;M<l.length;M++){var U=l[M];if(U.dataset.precedence===i)m=U;else if(m!==f)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function ud(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Jc=null;function a_(e,i,r){if(Jc===null){var l=new Map,f=Jc=new Map;f.set(r,l)}else f=Jc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var m=r[f];if(!(m[Ya]||m[nn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var M=m.getAttribute(i)||"";M=e+M;var U=l.get(M);U?U.push(m):l.set(M,[m])}}return l}function s_(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function OM(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function r_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function PM(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Gr(l.href),m=i.querySelector(sl(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Qc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,En(m);return}m=i.ownerDocument||i,l=n_(l),(f=Fi.get(f))&&cd(l,f),m=m.createElement("link"),En(m);var M=m;M._p=new Promise(function(U,k){M.onload=U,M.onerror=k}),kn(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Qc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var fd=0;function zM(e,i){return e.stylesheets&&e.count===0&&$c(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&fd===0&&(fd=62500*gM());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$c(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>fd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Qc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jc=null;function $c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jc=new Map,i.forEach(IM,e),jc=null,Qc.call(e))}function IM(e,i){if(!(i.state.loading&4)){var r=jc.get(e);if(r)var l=r.get(null);else{r=new Map,jc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var M=f[m];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(r.set(M.dataset.precedence,M),l=M)}l&&r.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),m=r.get(M)||l,m===l&&r.set(null,f),r.set(M,f),this.count++,l=Qc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var ol={$$typeof:N,Provider:null,Consumer:null,_currentValue:ut,_currentValue2:ut,_threadCount:0};function BM(e,i,r,l,f,m,M,U,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function o_(e,i,r,l,f,m,M,U,k,ct,At,Dt){return e=new BM(e,i,r,M,k,ct,At,Dt,U),i=1,m===!0&&(i|=24),m=_i(3,null,null,i),e.current=m,m.stateNode=e,i=Xf(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},Zf(m),e}function l_(e){return e?(e=xr,e):xr}function c_(e,i,r,l,f,m){f=l_(f),l.context===null?l.context=f:l.pendingContext=f,l=is(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=as(e,l,i),r!==null&&(di(r,e,i),Fo(r,e,i))}function u_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function hd(e,i){u_(e,i),(e=e.alternate)&&u_(e,i)}function f_(e){if(e.tag===13||e.tag===31){var i=Is(e,67108864);i!==null&&di(i,e,67108864),hd(e,67108864)}}function h_(e){if(e.tag===13||e.tag===31){var i=bi();i=dn(i);var r=Is(e,i);r!==null&&di(r,e,i),hd(e,i)}}var tu=!0;function FM(e,i,r,l){var f=F.T;F.T=null;var m=V.p;try{V.p=2,dd(e,i,r,l)}finally{V.p=m,F.T=f}}function HM(e,i,r,l){var f=F.T;F.T=null;var m=V.p;try{V.p=8,dd(e,i,r,l)}finally{V.p=m,F.T=f}}function dd(e,i,r,l){if(tu){var f=pd(l);if(f===null)$h(e,i,l,eu,r),p_(e,l);else if(VM(f,e,i,r,l))l.stopPropagation();else if(p_(e,l),i&4&&-1<GM.indexOf(e)){for(;f!==null;){var m=xa(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var M=Gt(m.pendingLanes);if(M!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;M;){var k=1<<31-$t(M);U.entanglements[1]|=k,M&=~k}aa(m),(We&6)===0&&(Ic=de()+500,el(0))}}break;case 31:case 13:U=Is(m,2),U!==null&&di(U,m,2),Fc(),hd(m,2)}if(m=pd(l),m===null&&$h(e,i,l,eu,r),m===f)break;f=m}f!==null&&l.stopPropagation()}else $h(e,i,l,null,r)}}function pd(e){return e=gf(e),md(e)}var eu=null;function md(e){if(eu=null,e=_a(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return eu=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_e()){case I:return 2;case T:return 8;case Q:case it:return 32;case xt:return 268435456;default:return 32}default:return 32}}var gd=!1,ms=null,gs=null,vs=null,ll=new Map,cl=new Map,_s=[],GM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,i){switch(e){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":ll.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(i.pointerId)}}function ul(e,i,r,l,f,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=xa(i),i!==null&&f_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function VM(e,i,r,l,f){switch(i){case"focusin":return ms=ul(ms,e,i,r,l,f),!0;case"dragenter":return gs=ul(gs,e,i,r,l,f),!0;case"mouseover":return vs=ul(vs,e,i,r,l,f),!0;case"pointerover":var m=f.pointerId;return ll.set(m,ul(ll.get(m)||null,e,i,r,l,f)),!0;case"gotpointercapture":return m=f.pointerId,cl.set(m,ul(cl.get(m)||null,e,i,r,l,f)),!0}return!1}function m_(e){var i=_a(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,on(e.priority,function(){h_(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,on(e.priority,function(){h_(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=pd(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);mf=l,r.target.dispatchEvent(l),mf=null}else return i=xa(r),i!==null&&f_(i),e.blockedOn=r,!1;i.shift()}return!0}function g_(e,i,r){nu(e)&&r.delete(i)}function kM(){gd=!1,ms!==null&&nu(ms)&&(ms=null),gs!==null&&nu(gs)&&(gs=null),vs!==null&&nu(vs)&&(vs=null),ll.forEach(g_),cl.forEach(g_)}function iu(e,i){e.blockedOn===i&&(e.blockedOn=null,gd||(gd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kM)))}var au=null;function v_(e){au!==e&&(au=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){au===e&&(au=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(md(l||r)===null)continue;break}var m=xa(r);m!==null&&(e.splice(i,3),i-=3,ph(m,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function kr(e){function i(k){return iu(k,e)}ms!==null&&iu(ms,e),gs!==null&&iu(gs,e),vs!==null&&iu(vs,e),ll.forEach(i),cl.forEach(i);for(var r=0;r<_s.length;r++){var l=_s[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<_s.length&&(r=_s[0],r.blockedOn===null);)m_(r),r.blockedOn===null&&_s.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],m=r[l+1],M=f[Fe]||null;if(typeof m=="function")M||v_(r);else if(M){var U=null;if(m&&m.hasAttribute("formAction")){if(f=m,M=m[Fe]||null)U=M.formAction;else if(md(f)!==null)continue}else U=M.action;typeof U=="function"?r[l+1]=U:(r.splice(l,3),l-=3),v_(r)}}}function __(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function vd(e){this._internalRoot=e}su.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=bi();c_(r,l,e,i,null,null)},su.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;c_(e.current,2,null,e,null,null),Fc(),i[Sn]=null}};function su(e){this._internalRoot=e}su.prototype.unstable_scheduleHydration=function(e){if(e){var i=oi();e={blockedOn:null,target:e,priority:i};for(var r=0;r<_s.length&&i!==0&&i<_s[r].priority;r++);_s.splice(r,0,e),r===0&&m_(e)}};var x_=t.version;if(x_!=="19.2.7")throw Error(a(527,x_,"19.2.7"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var XM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{mt=ru.inject(XM),yt=ru}catch{}}return hl.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=Ag,m=wg,M=Rg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=o_(e,1,!1,null,null,r,l,null,f,m,M,__),e[Sn]=i.current,jh(e),new vd(i)},hl.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",m=Ag,M=wg,U=Rg,k=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(M=r.onCaughtError),r.onRecoverableError!==void 0&&(U=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),i=o_(e,1,!0,i,r??null,l,f,k,m,M,U,__),i.context=l_(null),r=i.current,l=bi(),l=dn(l),f=is(l),f.callback=null,as(r,f,l),r=l,i.current.lanes=r,Rt(i,r),aa(i),e[Sn]=i.current,jh(e),new su(i)},hl.version="19.2.7",hl}var C_;function t1(){if(C_)return Sd.exports;C_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Sd.exports=$M(),Sd.exports}var e1=t1();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const am="186",n1=0,D_=1,i1=2,Fu=1,Xx=2,Tl=3,sr=0,Jn=1,On=2,ha=0,po=1,Wu=2,U_=3,N_=4,a1=5,uo=100,s1=101,r1=102,o1=103,l1=104,c1=200,u1=201,f1=202,h1=203,Wx=204,qx=205,d1=206,p1=207,m1=208,g1=209,v1=210,_1=211,x1=212,S1=213,y1=214,up=0,fp=1,hp=2,zl=3,dp=4,pp=5,mp=6,gp=7,sm=0,M1=1,b1=2,$i=0,rm=1,om=2,lm=3,uf=4,cm=5,um=6,fm=7,Yx=300,rr=301,vo=302,Ed=303,Td=304,ff=306,vp=1e3,Va=1001,_p=1002,Wn=1003,E1=1004,ou=1005,Kn=1006,Ad=1007,nr=1008,Ri=1009,Zx=1010,Kx=1011,Il=1012,hm=1013,pa=1014,Qi=1015,mi=1016,dm=1017,pm=1018,Bl=1020,Jx=35902,Qx=35899,jx=1021,$x=1022,ji=1023,Wa=1026,ir=1027,mm=1028,gm=1029,or=1030,vm=1031,_m=1033,Hu=33776,Gu=33777,Vu=33778,ku=33779,xp=35840,Sp=35841,yp=35842,Mp=35843,bp=36196,Ep=37492,Tp=37496,Ap=37488,wp=37489,qu=37490,Rp=37491,Cp=37808,Dp=37809,Up=37810,Np=37811,Lp=37812,Op=37813,Pp=37814,zp=37815,Ip=37816,Bp=37817,Fp=37818,Hp=37819,Gp=37820,Vp=37821,kp=36492,Xp=36494,Wp=36495,qp=36283,Yp=36284,Yu=36285,Zp=36286,T1=3200,Zu=0,A1=1,Rs="",pi="srgb",Ku="srgb-linear",Ju="linear",Ze="srgb",wd=7680,w1=519,R1=512,C1=513,D1=514,xm=515,U1=516,N1=517,Sm=518,L1=519,tS=35044,L_="300 es",ca=2e3,Fl=2001;function O1(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Qu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function P1(){const s=Qu("canvas");return s.style.display="block",s}const O_={};function ju(...s){const t="THREE."+s.shift();console.log(t,...s)}function eS(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xe(...s){s=eS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...s)}}function He(...s){s=eS(s);const t="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...s)}}function mo(...s){const t=s.join(" ");t in O_||(O_[t]=!0,xe(...s))}function z1(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}const I1={[up]:fp,[hp]:mp,[dp]:gp,[zl]:pp,[fp]:up,[mp]:hp,[gp]:dp,[pp]:zl};class cr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let P_=1234567;const Cl=Math.PI/180,Hl=180/Math.PI;function da(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[a&255]+Yn[a>>8&255]+Yn[a>>16&255]+Yn[a>>24&255]).toLowerCase()}function Ue(s,t,n){return Math.max(t,Math.min(n,s))}function ym(s,t){return(s%t+t)%t}function B1(s,t,n,a,o){return a+(s-t)*(o-a)/(n-t)}function F1(s,t,n){return s!==t?(n-s)/(t-s):0}function Dl(s,t,n){return(1-n)*s+n*t}function H1(s,t,n,a){return Dl(s,t,1-Math.exp(-n*a))}function G1(s,t=1){return t-Math.abs(ym(s,t*2)-t)}function V1(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function k1(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function X1(s,t){return s+Math.floor(Math.random()*(t-s+1))}function W1(s,t){return s+Math.random()*(t-s)}function q1(s){return s*(.5-Math.random())}function Y1(s){s!==void 0&&(P_=s);let t=P_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z1(s){return s*Cl}function K1(s){return s*Hl}function J1(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Q1(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function j1(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $1(s,t,n,a,o){const c=Math.cos,u=Math.sin,h=c(n/2),d=u(n/2),p=c((t+a)/2),g=u((t+a)/2),_=c((t-a)/2),v=u((t-a)/2),x=c((a-t)/2),b=u((a-t)/2);switch(o){case"XYX":s.set(h*g,d*_,d*v,h*p);break;case"YZY":s.set(d*v,h*g,d*_,h*p);break;case"ZXZ":s.set(d*_,d*v,h*g,h*p);break;case"XZX":s.set(h*g,d*b,d*x,h*p);break;case"YXY":s.set(d*x,h*g,d*b,h*p);break;case"ZYZ":s.set(d*b,d*x,h*g,h*p);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ds={DEG2RAD:Cl,RAD2DEG:Hl,generateUUID:da,clamp:Ue,euclideanModulo:ym,mapLinear:B1,inverseLerp:F1,lerp:Dl,damp:H1,pingpong:G1,smoothstep:V1,smootherstep:k1,randInt:X1,randFloat:W1,randFloatSpread:q1,seededRandom:Y1,degToRad:Z1,radToDeg:K1,isPowerOfTwo:J1,ceilPowerOfTwo:Q1,floorPowerOfTwo:j1,setQuaternionFromProperEuler:$1,normalize:Qe,denormalize:Ji},Im=class Im{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ue(this.x,t.x,n.x),this.y=Ue(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ue(this.x,t,n),this.y=Ue(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ue(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let Ct=Im;class ur{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let d=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],v=c[u+0],x=c[u+1],b=c[u+2],R=c[u+3];if(_!==R||d!==v||p!==x||g!==b){let y=d*v+p*x+g*b+_*R;y<0&&(v=-v,x=-x,b=-b,R=-R,y=-y);let S=1-h;if(y<.9995){const w=Math.acos(y),N=Math.sin(w);S=Math.sin(S*w)/N,h=Math.sin(h*w)/N,d=d*S+v*h,p=p*S+x*h,g=g*S+b*h,_=_*S+R*h}else{d=d*S+v*h,p=p*S+x*h,g=g*S+b*h,_=_*S+R*h;const w=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=w,p*=w,g*=w,_*=w}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],d=a[o+1],p=a[o+2],g=a[o+3],_=c[u],v=c[u+1],x=c[u+2],b=c[u+3];return t[n]=h*b+g*_+d*x-p*v,t[n+1]=d*b+g*v+p*_-h*x,t[n+2]=p*b+g*x+h*v-d*_,t[n+3]=g*b-h*_-d*v-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,d=Math.sin,p=h(a/2),g=h(o/2),_=h(c/2),v=d(a/2),x=d(o/2),b=d(c/2);switch(u){case"XYZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"YXZ":this._x=v*g*_+p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"ZXY":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_-v*x*b;break;case"ZYX":this._x=v*g*_-p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_+v*x*b;break;case"YZX":this._x=v*g*_+p*x*b,this._y=p*x*_+v*g*b,this._z=p*g*b-v*x*_,this._w=p*g*_-v*x*b;break;case"XZY":this._x=v*g*_-p*x*b,this._y=p*x*_-v*g*b,this._z=p*g*b+v*x*_,this._w=p*g*_+v*x*b;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+h+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-d)*x,this._y=(c-p)*x,this._z=(u-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(g-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(c+p)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(c-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(u-o)/x,this._x=(c+p)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*d,this._y=o*g+u*d+c*h-a*p,this._z=c*g+u*p+a*d-o*h,this._w=u*g-a*h-o*d-c*p,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let d=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);d=Math.sin(d*p)/g,n=Math.sin(n*p)/g,this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+o*n,this._z=this._z*d+c*n,this._w=this._w*d+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bm=class Bm{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(z_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(z_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,d=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),_=2*(c*a-u*n);return this.x=n+d*p+u*_-h*g,this.y=a+d*g+h*p-c*_,this.z=o+d*_+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ue(this.x,t.x,n.x),this.y=Ue(this.y,t.y,n.y),this.z=Ue(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ue(this.x,t,n),this.y=Ue(this.y,t,n),this.z=Ue(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,d=n.z;return this.x=o*d-c*h,this.y=c*u-a*d,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Rd.copy(this).projectOnVector(t),this.sub(Rd)}reflect(t){return this.sub(Rd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ue(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bm.prototype.isVector3=!0;let G=Bm;const Rd=new G,z_=new ur,Fm=class Fm{constructor(t,n,a,o,c,u,h,d,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p)}set(t,n,a,o,c,u,h,d,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],x=a[5],b=a[8],R=o[0],y=o[3],S=o[6],w=o[1],N=o[4],A=o[7],O=o[2],D=o[5],z=o[8];return c[0]=u*R+h*w+d*O,c[3]=u*y+h*N+d*D,c[6]=u*S+h*A+d*z,c[1]=p*R+g*w+_*O,c[4]=p*y+g*N+_*D,c[7]=p*S+g*A+_*z,c[2]=v*R+x*w+b*O,c[5]=v*y+x*N+b*D,c[8]=v*S+x*A+b*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*d+o*c*p-o*u*d}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=g*u-h*p,v=h*d-g*c,x=p*c-u*d,b=n*_+a*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(o*p-g*a)*R,t[2]=(h*a-o*u)*R,t[3]=v*R,t[4]=(g*n-o*d)*R,t[5]=(o*c-h*n)*R,t[6]=x*R,t[7]=(a*d-p*n)*R,t[8]=(u*n-a*c)*R,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const d=Math.cos(c),p=Math.sin(c);return this.set(a*d,a*p,-a*(d*u+p*h)+u+t,-o*p,o*d,-o*(-p*u+d*h)+h+n,0,0,1),this}scale(t,n){return mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cd.makeScale(t,n)),this}rotate(t){return mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cd.makeRotation(-t)),this}translate(t,n){return mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Fm.prototype.isMatrix3=!0;let ye=Fm;const Cd=new ye,I_=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),B_=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tb(){const s={enabled:!0,workingColorSpace:Ku,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Ze&&(o.r=Xa(o.r),o.g=Xa(o.g),o.b=Xa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ze&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Rs?Ju:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Ku]:{primaries:t,whitePoint:a,transfer:Ju,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:a,transfer:Ze,toXYZ:I_,fromXYZ:B_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const ze=tb();function Xa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xr;class eb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Xr===void 0&&(Xr=Qu("canvas")),Xr.width=t.width,Xr.height=t.height;const o=Xr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Xr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Qu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Xa(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Xa(n[a]/255)*255):n[a]=Xa(n[a]);return{data:n,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nb=0;class Mm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=da(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Dd(o[u].image)):c.push(Dd(o[u]))}else c=Dd(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function Dd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let ib=0;const Ud=new G;class Qn extends cr{constructor(t=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,a=Va,o=Va,c=Kn,u=nr,h=ji,d=Ri,p=Qn.DEFAULT_ANISOTROPY,g=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=da(),this.name="",this.source=new Mm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ud).x}get height(){return this.source.getSize(Ud).y}get depth(){return this.source.getSize(Ud).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vp:t.x=t.x-Math.floor(t.x);break;case Va:t.x=t.x<0?0:1;break;case _p:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vp:t.y=t.y-Math.floor(t.y);break;case Va:t.y=t.y<0?0:1;break;case _p:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Yx;Qn.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],x=d[5],b=d[9],R=d[2],y=d[6],S=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(p+1)/2,A=(x+1)/2,O=(S+1)/2,D=(g+v)/4,z=(_+R)/4,E=(b+y)/4;return N>A&&N>O?N<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(N),o=D/a,c=z/a):A>O?A<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(A),a=D/o,c=E/o):O<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(O),a=z/c,o=E/c),this.set(a,o,c,n),this}let w=Math.sqrt((y-b)*(y-b)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(w)<.001&&(w=1),this.x=(y-b)/w,this.y=(_-R)/w,this.z=(v-g)/w,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ue(this.x,t.x,n.x),this.y=Ue(this.y,t.y,n.y),this.z=Ue(this.z,t.z,n.z),this.w=Ue(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ue(this.x,t,n),this.y=Ue(this.y,t,n),this.z=Ue(this.z,t,n),this.w=Ue(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let pn=Hm;class ab extends cr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new pn(0,0,t,n),this.scissorTest=!1,this.viewport=new pn(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},c=new Qn(o),u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Mm(o)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends ab{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class nS extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends Qn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const cf=class cf{constructor(t,n,a,o,c,u,h,d,p,g,_,v,x,b,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,d,p,g,_,v,x,b,R,y)}set(t,n,a,o,c,u,h,d,p,g,_,v,x,b,R,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=o,S[1]=c,S[5]=u,S[9]=h,S[13]=d,S[2]=p,S[6]=g,S[10]=_,S[14]=v,S[3]=x,S[7]=b,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cf().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Wr.setFromMatrixColumn(t,0).length(),c=1/Wr.setFromMatrixColumn(t,1).length(),u=1/Wr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),d=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=x+b*p,n[5]=v-R*p,n[9]=-h*d,n[2]=R-v*p,n[6]=b+x*p,n[10]=u*d}else if(t.order==="YXZ"){const v=d*g,x=d*_,b=p*g,R=p*_;n[0]=v+R*h,n[4]=b*h-x,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-h,n[2]=x*h-b,n[6]=R+v*h,n[10]=u*d}else if(t.order==="ZXY"){const v=d*g,x=d*_,b=p*g,R=p*_;n[0]=v-R*h,n[4]=-u*_,n[8]=b+x*h,n[1]=x+b*h,n[5]=u*g,n[9]=R-v*h,n[2]=-u*p,n[6]=h,n[10]=u*d}else if(t.order==="ZYX"){const v=u*g,x=u*_,b=h*g,R=h*_;n[0]=d*g,n[4]=b*p-x,n[8]=v*p+R,n[1]=d*_,n[5]=R*p+v,n[9]=x*p-b,n[2]=-p,n[6]=h*d,n[10]=u*d}else if(t.order==="YZX"){const v=u*d,x=u*p,b=h*d,R=h*p;n[0]=d*g,n[4]=R-v*_,n[8]=b*_+x,n[1]=_,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=x*_+b,n[10]=v-R*_}else if(t.order==="XZY"){const v=u*d,x=u*p,b=h*d,R=h*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+R,n[5]=u*g,n[9]=x*_-b,n[2]=b*_-x,n[6]=h*g,n[10]=R*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rb,t,ob)}lookAt(t,n,a){const o=this.elements;return Ti.subVectors(t,n),Ti.lengthSq()===0&&(Ti.z=1),Ti.normalize(),Ss.crossVectors(a,Ti),Ss.lengthSq()===0&&(Math.abs(a.z)===1?Ti.x+=1e-4:Ti.z+=1e-4,Ti.normalize(),Ss.crossVectors(a,Ti)),Ss.normalize(),lu.crossVectors(Ti,Ss),o[0]=Ss.x,o[4]=lu.x,o[8]=Ti.x,o[1]=Ss.y,o[5]=lu.y,o[9]=Ti.y,o[2]=Ss.z,o[6]=lu.z,o[10]=Ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],x=a[13],b=a[2],R=a[6],y=a[10],S=a[14],w=a[3],N=a[7],A=a[11],O=a[15],D=o[0],z=o[4],E=o[8],L=o[12],B=o[1],W=o[5],Z=o[9],$=o[13],Y=o[2],j=o[6],F=o[10],V=o[14],ut=o[3],nt=o[7],ht=o[11],P=o[15];return c[0]=u*D+h*B+d*Y+p*ut,c[4]=u*z+h*W+d*j+p*nt,c[8]=u*E+h*Z+d*F+p*ht,c[12]=u*L+h*$+d*V+p*P,c[1]=g*D+_*B+v*Y+x*ut,c[5]=g*z+_*W+v*j+x*nt,c[9]=g*E+_*Z+v*F+x*ht,c[13]=g*L+_*$+v*V+x*P,c[2]=b*D+R*B+y*Y+S*ut,c[6]=b*z+R*W+y*j+S*nt,c[10]=b*E+R*Z+y*F+S*ht,c[14]=b*L+R*$+y*V+S*P,c[3]=w*D+N*B+A*Y+O*ut,c[7]=w*z+N*W+A*j+O*nt,c[11]=w*E+N*Z+A*F+O*ht,c[15]=w*L+N*$+A*V+O*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],x=t[14],b=t[3],R=t[7],y=t[11],S=t[15],w=d*x-p*v,N=h*x-p*_,A=h*v-d*_,O=u*x-p*g,D=u*v-d*g,z=u*_-h*g;return n*(R*w-y*N+S*A)-a*(b*w-y*O+S*D)+o*(b*N-R*O+S*z)-c*(b*A-R*D+y*z)}determinantAffine(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10];return n*(u*g-h*p)-a*(c*g-h*d)+o*(c*p-u*d)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],x=t[11],b=t[12],R=t[13],y=t[14],S=t[15],w=n*h-a*u,N=n*d-o*u,A=n*p-c*u,O=a*d-o*h,D=a*p-c*h,z=o*p-c*d,E=g*R-_*b,L=g*y-v*b,B=g*S-x*b,W=_*y-v*R,Z=_*S-x*R,$=v*S-x*y,Y=w*$-N*Z+A*W+O*B-D*L+z*E;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/Y;return t[0]=(h*$-d*Z+p*W)*j,t[1]=(o*Z-a*$-c*W)*j,t[2]=(R*z-y*D+S*O)*j,t[3]=(v*D-_*z-x*O)*j,t[4]=(d*B-u*$-p*L)*j,t[5]=(n*$-o*B+c*L)*j,t[6]=(y*A-b*z-S*N)*j,t[7]=(g*z-v*A+x*N)*j,t[8]=(u*Z-h*B+p*E)*j,t[9]=(a*B-n*Z-c*E)*j,t[10]=(b*D-R*A+S*w)*j,t[11]=(_*A-g*D-x*w)*j,t[12]=(h*L-u*W-d*E)*j,t[13]=(n*W-a*L+o*E)*j,t[14]=(R*N-b*O-y*w)*j,t[15]=(g*O-_*N+v*w)*j,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,d=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+a,g*d-o*u,0,p*d-o*h,g*d+o*u,c*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,d=n._w,p=c+c,g=u+u,_=h+h,v=c*p,x=c*g,b=c*_,R=u*g,y=u*_,S=h*_,w=d*p,N=d*g,A=d*_,O=a.x,D=a.y,z=a.z;return o[0]=(1-(R+S))*O,o[1]=(x+A)*O,o[2]=(b-N)*O,o[3]=0,o[4]=(x-A)*D,o[5]=(1-(v+S))*D,o[6]=(y+w)*D,o[7]=0,o[8]=(b+N)*z,o[9]=(y-w)*z,o[10]=(1-(v+R))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const c=this.determinantAffine();if(c===0)return a.set(1,1,1),n.identity(),this;let u=Wr.set(o[0],o[1],o[2]).length();const h=Wr.set(o[4],o[5],o[6]).length(),d=Wr.set(o[8],o[9],o[10]).length();c<0&&(u=-u),Yi.copy(this);const p=1/u,g=1/h,_=1/d;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=g,Yi.elements[5]*=g,Yi.elements[6]*=g,Yi.elements[8]*=_,Yi.elements[9]*=_,Yi.elements[10]*=_,n.setFromRotationMatrix(Yi),a.x=u,a.y=h,a.z=d,this}makePerspective(t,n,a,o,c,u,h=ca,d=!1){const p=this.elements,g=2*c/(n-t),_=2*c/(a-o),v=(n+t)/(n-t),x=(a+o)/(a-o);let b,R;if(d)b=c/(u-c),R=u*c/(u-c);else if(h===ca)b=-(u+c)/(u-c),R=-2*u*c/(u-c);else if(h===Fl)b=-u/(u-c),R=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ca,d=!1){const p=this.elements,g=2/(n-t),_=2/(a-o),v=-(n+t)/(n-t),x=-(a+o)/(a-o);let b,R;if(d)b=1/(u-c),R=u/(u-c);else if(h===ca)b=-2/(u-c),R=-(u+c)/(u-c);else if(h===Fl)b=-1/(u-c),R=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};cf.prototype.isMatrix4=!0;let Ye=cf;const Wr=new G,Yi=new Ye,rb=new G(0,0,0),ob=new G(1,1,1),Ss=new G,lu=new G,Ti=new G,F_=new Ye,H_=new ur;class ma{constructor(t=0,n=0,a=0,o=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],_=o[2],v=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,c));break;case"ZYX":this._y=Math.asin(-Ue(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ue(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return H_.setFromEuler(this),this.setFromQuaternion(H_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class iS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lb=0;const G_=new G,qr=new ur,za=new Ye,cu=new G,dl=new G,cb=new G,ub=new ur,V_=new G(1,0,0),k_=new G(0,1,0),X_=new G(0,0,1),W_={type:"added"},fb={type:"removed"},Yr={type:"childadded",child:null},Nd={type:"childremoved",child:null};class Un extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new G,n=new ma,a=new ur,o=new G(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ye},normalMatrix:{value:new ye}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return qr.setFromAxisAngle(t,n),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,n){return qr.setFromAxisAngle(t,n),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(V_,t)}rotateY(t){return this.rotateOnAxis(k_,t)}rotateZ(t){return this.rotateOnAxis(X_,t)}translateOnAxis(t,n){return G_.copy(t).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(V_,t)}translateY(t){return this.translateOnAxis(k_,t)}translateZ(t){return this.translateOnAxis(X_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?cu.copy(t):cu.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(dl,cu,this.up):za.lookAt(cu,dl,this.up),this.quaternion.setFromRotationMatrix(za),o&&(za.extractRotation(o.matrixWorld),qr.setFromRotationMatrix(za),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(He("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(W_),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fb),Nd.child=t,this.dispatchEvent(Nd),Nd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),za.multiply(t.parent.matrixWorld)),t.applyMatrix4(za),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(W_),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,t,cb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,ub,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*a-c[8]*o,c[13]+=a-c[1]*n-c[5]*a-c[9]*o,c[14]+=o-c[2]*n-c[6]*a-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n,a=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),n===!0){const c=this.children;for(let u=0,h=c.length;u<h;u++)c[u].updateWorldMatrix(!1,!0,a)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];c(t.shapes,_)}else c(t.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(c(t.materials,this.material[d]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(c(t.animations,d))}}if(n){const h=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),x=u(t.animations),b=u(t.nodes);h.length>0&&(a.geometries=h),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=o,a;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Un.DEFAULT_UP=new G(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class Ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const R of t.hand.values()){const y=n.getJointPose(R,a),S=this._getHandJoint(p,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),x=.02,b=.005;p.inputState.pinching&&v>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(d.matrix.fromArray(c.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,c.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(c.linearVelocity)):d.hasLinearVelocity=!1,c.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(c.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new fo;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},uu={h:0,s:0,l:0};function Od(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ae{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=ze.workingColorSpace){return this.r=t,this.g=n,this.b=a,ze.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=ze.workingColorSpace){if(t=ym(t,1),n=Ue(n,0,1),a=Ue(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=Od(u,c,t+1/3),this.g=Od(u,c,t),this.b=Od(u,c,t-1/3)}return ze.colorSpaceToWorking(this,o),this}setStyle(t,n=pi){function a(c){c!==void 0&&parseFloat(c)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:xe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){const a=aS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return ze.workingToColorSpace(Zn.copy(this),t),Math.round(Ue(Zn.r*255,0,255))*65536+Math.round(Ue(Zn.g*255,0,255))*256+Math.round(Ue(Zn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ze.workingColorSpace){ze.workingToColorSpace(Zn.copy(this),n);const a=Zn.r,o=Zn.g,c=Zn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case a:d=(o-c)/_+(o<c?6:0);break;case o:d=(c-a)/_+2;break;case c:d=(a-o)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=ze.workingColorSpace){return ze.workingToColorSpace(Zn.copy(this),n),t.r=Zn.r,t.g=Zn.g,t.b=Zn.b,t}getStyle(t=pi){ze.workingToColorSpace(Zn.copy(this),t);const n=Zn.r,a=Zn.g,o=Zn.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ys),this.setHSL(ys.h+t,ys.s+n,ys.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ys),t.getHSL(uu);const a=Dl(ys.h,uu.h,n),o=Dl(ys.s,uu.s,n),c=Dl(ys.l,uu.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new ae;ae.NAMES=aS;class bm{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(t),this.density=n}clone(){return new bm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sS extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zi=new G,Ia=new G,Pd=new G,Ba=new G,Zr=new G,Kr=new G,q_=new G,zd=new G,Id=new G,Bd=new G,Fd=new pn,Hd=new pn,Gd=new pn;class Gi{constructor(t=new G,n=new G,a=new G){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Zi.subVectors(t,n),o.cross(Zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Zi.subVectors(o,n),Ia.subVectors(a,n),Pd.subVectors(t,n);const u=Zi.dot(Zi),h=Zi.dot(Ia),d=Zi.dot(Pd),p=Ia.dot(Ia),g=Ia.dot(Pd),_=u*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,x=(p*d-h*g)*v,b=(u*g-h*d)*v;return c.set(1-x-b,b,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Ba)===null?!1:Ba.x>=0&&Ba.y>=0&&Ba.x+Ba.y<=1}static getInterpolation(t,n,a,o,c,u,h,d){return this.getBarycoord(t,n,a,o,Ba)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(c,Ba.x),d.addScaledVector(u,Ba.y),d.addScaledVector(h,Ba.z),d)}static getInterpolatedAttribute(t,n,a,o,c,u){return Fd.setScalar(0),Hd.setScalar(0),Gd.setScalar(0),Fd.fromBufferAttribute(t,n),Hd.fromBufferAttribute(t,a),Gd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(Fd,c.x),u.addScaledVector(Hd,c.y),u.addScaledVector(Gd,c.z),u}static isFrontFacing(t,n,a,o){return Zi.subVectors(a,n),Ia.subVectors(t,n),Zi.cross(Ia).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zi.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Zi.cross(Ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Gi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Gi.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Zr.subVectors(o,a),Kr.subVectors(c,a),zd.subVectors(t,a);const d=Zr.dot(zd),p=Kr.dot(zd);if(d<=0&&p<=0)return n.copy(a);Id.subVectors(t,o);const g=Zr.dot(Id),_=Kr.dot(Id);if(g>=0&&_<=g)return n.copy(o);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(Zr,u);Bd.subVectors(t,c);const x=Zr.dot(Bd),b=Kr.dot(Bd);if(b>=0&&x<=b)return n.copy(c);const R=x*p-d*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(a).addScaledVector(Kr,h);const y=g*b-x*_;if(y<=0&&_-g>=0&&x-b>=0)return q_.subVectors(c,o),h=(_-g)/(_-g+(x-b)),n.copy(o).addScaledVector(q_,h);const S=1/(y+R+v);return u=R*S,h=v*S,n.copy(a).addScaledVector(Zr,u).addScaledVector(Kr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fr{constructor(t=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ki.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ki.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ki.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ki):Ki.fromBufferAttribute(c,u),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),fu.copy(a.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pl),hu.subVectors(this.max,pl),Jr.subVectors(t.a,pl),Qr.subVectors(t.b,pl),jr.subVectors(t.c,pl),Ms.subVectors(Qr,Jr),bs.subVectors(jr,Qr),Js.subVectors(Jr,jr);let n=[0,-Ms.z,Ms.y,0,-bs.z,bs.y,0,-Js.z,Js.y,Ms.z,0,-Ms.x,bs.z,0,-bs.x,Js.z,0,-Js.x,-Ms.y,Ms.x,0,-bs.y,bs.x,0,-Js.y,Js.x,0];return!Vd(n,Jr,Qr,jr,hu)||(n=[1,0,0,0,1,0,0,0,1],!Vd(n,Jr,Qr,jr,hu))?!1:(du.crossVectors(Ms,bs),n=[du.x,du.y,du.z],Vd(n,Jr,Qr,jr,hu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fa=[new G,new G,new G,new G,new G,new G,new G,new G],Ki=new G,fu=new fr,Jr=new G,Qr=new G,jr=new G,Ms=new G,bs=new G,Js=new G,pl=new G,hu=new G,du=new G,Qs=new G;function Vd(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Qs.fromArray(s,c);const h=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),d=t.dot(Qs),p=n.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const Dn=new G,pu=new Ct;let db=0;class qe extends cr{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=tS,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)pu.fromBufferAttribute(this,n),pu.applyMatrix3(t),this.setXY(n,pu.x,pu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix3(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(t),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ji(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Qe(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ji(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ji(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ji(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ji(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array),o=Qe(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array),o=Qe(o,this.array),c=Qe(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class rS extends qe{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class oS extends qe{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ce extends qe{constructor(t,n,a){super(new Float32Array(t),n,a)}}const pb=new fr,ml=new G,kd=new G;class yo{constructor(t=new G,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):pb.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ml.subVectors(t,this.center);const n=ml.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(ml,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ml.copy(t.center).add(kd)),this.expandByPoint(ml.copy(t.center).sub(kd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mb=0;const Hi=new Ye,Xd=new Un,$r=new G,Ai=new fr,gl=new fr,Bn=new G;class rn extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(O1(t)?oS:rS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new ye().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hi.makeRotationFromQuaternion(t),this.applyMatrix4(Hi),this}rotateX(t){return Hi.makeRotationX(t),this.applyMatrix4(Hi),this}rotateY(t){return Hi.makeRotationY(t),this.applyMatrix4(Hi),this}rotateZ(t){return Hi.makeRotationZ(t),this.applyMatrix4(Hi),this}translate(t,n,a){return Hi.makeTranslation(t,n,a),this.applyMatrix4(Hi),this}scale(t,n,a){return Hi.makeScale(t,n,a),this.applyMatrix4(Hi),this}lookAt(t){return Xd.lookAt(t),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ce(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const a=this.boundingSphere.center;if(Ai.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];gl.setFromBufferAttribute(h),this.morphTargetsRelative?(Bn.addVectors(Ai.min,gl.min),Ai.expandByPoint(Bn),Bn.addVectors(Ai.max,gl.max),Ai.expandByPoint(Bn)):(Ai.expandByPoint(gl.min),Ai.expandByPoint(gl.max))}Ai.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Bn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Bn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Bn.fromBufferAttribute(h,p),d&&($r.fromBufferAttribute(t,p),Bn.add($r)),o=Math.max(o,a.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new qe(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const h=[],d=[];for(let E=0;E<a.count;E++)h[E]=new G,d[E]=new G;const p=new G,g=new G,_=new G,v=new Ct,x=new Ct,b=new Ct,R=new G,y=new G;function S(E,L,B){p.fromBufferAttribute(a,E),g.fromBufferAttribute(a,L),_.fromBufferAttribute(a,B),v.fromBufferAttribute(c,E),x.fromBufferAttribute(c,L),b.fromBufferAttribute(c,B),g.sub(p),_.sub(p),x.sub(v),b.sub(v);const W=1/(x.x*b.y-b.x*x.y);isFinite(W)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(W),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(W),h[E].add(R),h[L].add(R),h[B].add(R),d[E].add(y),d[L].add(y),d[B].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let E=0,L=w.length;E<L;++E){const B=w[E],W=B.start,Z=B.count;for(let $=W,Y=W+Z;$<Y;$+=3)S(t.getX($+0),t.getX($+1),t.getX($+2))}const N=new G,A=new G,O=new G,D=new G;function z(E){O.fromBufferAttribute(o,E),D.copy(O);const L=h[E];N.copy(L),N.sub(O.multiplyScalar(O.dot(L))).normalize(),A.crossVectors(D,L);const W=A.dot(d[E])<0?-1:1;u.setXYZW(E,N.x,N.y,N.z,W)}for(let E=0,L=w.length;E<L;++E){const B=w[E],W=B.start,Z=B.count;for(let $=W,Y=W+Z;$<Y;$+=3)z(t.getX($+0)),z(t.getX($+1)),z(t.getX($+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==n.count)a=new qe(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const o=new G,c=new G,u=new G,h=new G,d=new G,p=new G,g=new G,_=new G;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),R=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),h.fromBufferAttribute(a,b),d.fromBufferAttribute(a,R),p.fromBufferAttribute(a,y),h.add(g),d.add(g),p.add(g),a.setXYZ(b,h.x,h.y,h.z),a.setXYZ(R,d.x,d.y,d.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,x=n.count;v<x;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Bn.fromBufferAttribute(t,n),Bn.normalize(),t.setXYZ(n,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function t(h,d){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(d.length*g);let x=0,b=0;for(let R=0,y=d.length;R<y;R++){h.isInterleavedBufferAttribute?x=d[R]*h.data.stride+h.offset:x=d[R]*g;for(let S=0;S<g;S++)v[b++]=p[x++]}return new qe(v,g,_)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,a=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=t(d,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const d=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],x=t(v,a);d.push(x)}n.morphAttributes[h]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const o={};let c=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(o[d]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,x=_.length;v<x;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gb{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=tS,this.updateRanges=[],this.version=0,this.uuid=da()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,a){t*=this.stride,a*=n.stride;for(let o=0,c=this.stride;o<c;o++)this.array[t+o]=n.array[a+o];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=da()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(n,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=da()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const n={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}const ei=new G;class $u{constructor(t,n,a,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=a,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,a=this.data.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.applyMatrix4(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.applyNormalMatrix(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)ei.fromBufferAttribute(this,n),ei.transformDirection(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}getComponent(t,n){let a=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(a=Ji(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Qe(a,this.array)),this.data.array[t*this.data.stride+this.offset+n]=a,this}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ji(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ji(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ji(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ji(n,this.array)),n}setXY(t,n,a){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this}setXYZ(t,n,a,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array),o=Qe(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),a=Qe(a,this.array),o=Qe(o,this.array),c=Qe(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=a,this.data.array[t+2]=o,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ju("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return new qe(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ju("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let a=0;a<this.count;a++){const o=a*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[o+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wd=new G,vb=new G,_b=new ye;class ws{constructor(t=new G(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Wd.subVectors(a,n).cross(vb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(Wd),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/c;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(o,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||_b.getNormalMatrix(t),o=this.coplanarPoint(Wd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let xb=0;class Us extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=da(),this.name="",this.type="Material",this.blending=po,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wx,this.blendDst=qx,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wd,this.stencilZFail=wd,this.stencilZPass=wd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){xe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(a=>new ws().fromJSON(a))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let a=t.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new Ct().fromArray(a)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lS extends Us{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let to;const vl=new G,eo=new G,no=new G,io=new Ct,_l=new Ct,cS=new Ye,mu=new G,xl=new G,gu=new G,Y_=new Ct,qd=new Ct,Z_=new Ct;class uS extends Un{constructor(t=new lS){if(super(),this.isSprite=!0,this.type="Sprite",to===void 0){to=new rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new gb(n,5);to.setIndex([0,1,2,0,2,3]),to.setAttribute("position",new $u(a,3,0,!1)),to.setAttribute("uv",new $u(a,2,3,!1))}this.geometry=to,this.material=t,this.center=new Ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,n){t.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),cS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-no.z);const a=this.material.rotation;let o,c;a!==0&&(c=Math.cos(a),o=Math.sin(a));const u=this.center;vu(mu.set(-.5,-.5,0),no,u,eo,o,c),vu(xl.set(.5,-.5,0),no,u,eo,o,c),vu(gu.set(.5,.5,0),no,u,eo,o,c),Y_.set(0,0),qd.set(1,0),Z_.set(1,1);let h=t.ray.intersectTriangle(mu,xl,gu,!1,vl);if(h===null&&(vu(xl.set(-.5,.5,0),no,u,eo,o,c),qd.set(0,1),h=t.ray.intersectTriangle(mu,gu,xl,!1,vl),h===null))return;const d=t.ray.origin.distanceTo(vl);d<t.near||d>t.far||n.push({distance:d,point:vl.clone(),uv:Gi.getInterpolation(vl,mu,xl,gu,Y_,qd,Z_,new Ct),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function vu(s,t,n,a,o,c){io.subVectors(s,n).addScalar(.5).multiply(a),o!==void 0?(_l.x=c*io.x-o*io.y,_l.y=o*io.x+c*io.y):_l.copy(io),s.copy(t),s.x+=_l.x,s.y+=_l.y,s.applyMatrix4(cS)}const Ha=new G,Yd=new G,_u=new G,xu=new G;class fS{constructor(t=new G,n=new G(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ha)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ha.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ha.copy(this.origin).addScaledVector(this.direction,n),Ha.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){Yd.copy(t).add(n).multiplyScalar(.5),_u.copy(n).sub(t).normalize(),xu.copy(this.origin).sub(Yd);const c=t.distanceTo(n)*.5,u=-this.direction.dot(_u),h=xu.dot(this.direction),d=-xu.dot(_u),p=xu.lengthSq(),g=Math.abs(1-u*u);let _,v,x,b;if(g>0)if(_=u*d-h,v=u*h-d,b=c*g,_>=0)if(v>=-b)if(v<=b){const R=1/g;_*=R,v*=R,x=_*(_+u*v+2*h)+v*(u*_+v+2*d)+p}else v=c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v=-c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;else v<=-b?(_=Math.max(0,-(-u*c+h)),v=_>0?-c:Math.min(Math.max(-c,-d),c),x=-_*_+v*(v+2*d)+p):v<=b?(_=0,v=Math.min(Math.max(-c,-d),c),x=v*(v+2*d)+p):(_=Math.max(0,-(u*c+h)),v=_>0?c:Math.min(Math.max(-c,-d),c),x=-_*_+v*(v+2*d)+p);else v=u>0?-c:c,_=Math.max(0,-(u*v+h)),x=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Yd).addScaledVector(_u,v),x}intersectSphere(t,n){if(t.radius<0)return null;Ha.subVectors(t.center,this.origin);const a=Ha.dot(this.direction),o=Ha.dot(Ha)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,d=a+u;return d<0?null:h<0?this.at(d,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(h=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),a>d||h>o)||((h>a||a!==a)&&(a=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Ha)!==null}intersectTriangle(t,n,a,o,c){const u=this.origin,h=this.direction,d=h.x,p=h.y,g=h.z,_=t.x-u.x,v=t.y-u.y,x=t.z-u.z,b=n.x-u.x,R=n.y-u.y,y=n.z-u.z,S=a.x-u.x,w=a.y-u.y,N=a.z-u.z,A=Math.abs(d),O=Math.abs(p),D=Math.abs(g);let z,E,L,B,W,Z,$,Y,j,F,V,ut;if(A>=O&&A>=D?(L=d,Z=_,j=b,ut=S,d>=0?(z=p,E=g,B=v,W=x,$=R,Y=y,F=w,V=N):(z=g,E=p,B=x,W=v,$=y,Y=R,F=N,V=w)):O>=D?(L=p,Z=v,j=R,ut=w,p>=0?(z=g,E=d,B=x,W=_,$=y,Y=b,F=N,V=S):(z=d,E=g,B=_,W=x,$=b,Y=y,F=S,V=N)):(L=g,Z=x,j=y,ut=N,g>=0?(z=d,E=p,B=_,W=v,$=b,Y=R,F=S,V=w):(z=p,E=d,B=v,W=_,$=R,Y=b,F=w,V=S)),L===0)return null;const nt=z/L,ht=E/L,P=1/L,et=B-nt*Z,gt=W-ht*Z,Pt=$-nt*j,Vt=Y-ht*j,Wt=F-nt*ut,at=V-ht*ut,St=Wt*Vt-at*Pt,Ot=et*at-gt*Wt,ce=Pt*gt-Vt*et;if(o){if(St<0||Ot<0||ce<0)return null}else if((St<0||Ot<0||ce<0)&&(St>0||Ot>0||ce>0))return null;const qt=St+Ot+ce;if(qt===0)return null;const he=P*(St*Z+Ot*j+ce*ut);return(qt>0?he<0:he>0)?null:this.at(he/qt,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends Us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=sm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const K_=new Ye,js=new fS,Su=new yo,J_=new G,yu=new G,Mu=new G,bu=new G,Zd=new G,Eu=new G,Q_=new G,Tu=new G;class _n extends Un{constructor(t=new rn,n=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Eu.set(0,0,0);for(let d=0,p=c.length;d<p;d++){const g=h[d],_=c[d];g!==0&&(Zd.fromBufferAttribute(_,t),u?Eu.addScaledVector(Zd,g):Eu.addScaledVector(Zd.sub(n),g))}n.add(Eu)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(c),js.copy(t.ray).recast(t.near),!(Su.containsPoint(js.origin)===!1&&(js.intersectSphere(Su,J_)===null||js.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(K_.copy(c).invert(),js.copy(t.ray).applyMatrix4(K_),!(a.boundingBox!==null&&js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,js)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,d=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const y=v[b],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let A=w,O=N;A<O;A+=3){const D=h.getX(A),z=h.getX(A+1),E=h.getX(A+2);o=Au(this,S,t,a,p,g,_,D,z,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(h.count,x.start+x.count);for(let y=b,S=R;y<S;y+=3){const w=h.getX(y),N=h.getX(y+1),A=h.getX(y+2);o=Au(this,u,t,a,p,g,_,w,N,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const y=v[b],S=u[y.materialIndex],w=Math.max(y.start,x.start),N=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let A=w,O=N;A<O;A+=3){const D=A,z=A+1,E=A+2;o=Au(this,S,t,a,p,g,_,D,z,E),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const b=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let y=b,S=R;y<S;y+=3){const w=y,N=y+1,A=y+2;o=Au(this,u,t,a,p,g,_,w,N,A),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Sb(s,t,n,a,o,c,u,h){let d;if(t.side===Jn?d=a.intersectTriangle(u,c,o,!0,h):d=a.intersectTriangle(o,c,u,t.side===sr,h),d===null)return null;Tu.copy(h),Tu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Tu);return p<n.near||p>n.far?null:{distance:p,point:Tu.clone(),object:s}}function Au(s,t,n,a,o,c,u,h,d,p){s.getVertexPosition(h,yu),s.getVertexPosition(d,Mu),s.getVertexPosition(p,bu);const g=Sb(s,t,n,a,yu,Mu,bu,Q_);if(g){const _=new G;Gi.getBarycoord(Q_,yu,Mu,bu,_),o&&(g.uv=Gi.getInterpolatedAttribute(o,h,d,p,_,new Ct)),c&&(g.uv1=Gi.getInterpolatedAttribute(c,h,d,p,_,new Ct)),u&&(g.normal=Gi.getInterpolatedAttribute(u,h,d,p,_,new G),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:d,c:p,normal:new G,materialIndex:0};Gi.getNormal(yu,Mu,bu,v.normal),g.face=v,g.barycoord=_}return g}class hS extends Qn{constructor(t=null,n=1,a=1,o,c,u,h,d,p=Wn,g=Wn,_,v){super(null,u,h,d,p,g,o,c,_,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j_ extends qe{constructor(t,n,a,o=1){super(t,n,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ao=new Ye,$_=new Ye,wu=[],tx=new fr,yb=new Ye,Sl=new _n,yl=new yo;class Cs extends _n{constructor(t,n,a){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new j_(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<a;o++)this.setMatrixAt(o,yb)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new fr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ao),tx.copy(t.boundingBox).applyMatrix4(ao),this.boundingBox.union(tx)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<n;a++)this.getMatrixAt(a,ao),yl.copy(t.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(yl)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const a=n.morphTargetInfluences,o=this.morphTexture.source.data.data,c=a.length+1,u=t*c+1;for(let h=0;h<a.length;h++)a[h]=o[u+h]}raycast(t,n){const a=this.matrixWorld,o=this.count;if(Sl.geometry=this.geometry,Sl.material=this.material,Sl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yl.copy(this.boundingSphere),yl.applyMatrix4(a),t.ray.intersectsSphere(yl)!==!1))for(let c=0;c<o;c++){this.getMatrixAt(c,ao),$_.multiplyMatrices(a,ao),Sl.matrixWorld=$_,Sl.raycast(t,wu);for(let u=0,h=wu.length;u<h;u++){const d=wu[u];d.instanceId=c,d.object=this,n.push(d)}wu.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new j_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const a=n.morphTargetInfluences,o=a.length+1;this.morphTexture===null&&(this.morphTexture=new hS(new Float32Array(o*this.count),o,this.count,mm,Qi));const c=this.morphTexture.source.data.data;let u=0;for(let p=0;p<a.length;p++)u+=a[p];const h=this.geometry.morphTargetsRelative?1:1-u,d=o*t;return c[d]=h,c.set(a,d+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $s=new yo,Mb=new Ct(.5,.5),Ru=new G;class Em{constructor(t=new ws,n=new ws,a=new ws,o=new ws,c=new ws,u=new ws){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ca,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],d=c[2],p=c[3],g=c[4],_=c[5],v=c[6],x=c[7],b=c[8],R=c[9],y=c[10],S=c[11],w=c[12],N=c[13],A=c[14],O=c[15];if(o[0].setComponents(p-u,x-g,S-b,O-w).normalize(),o[1].setComponents(p+u,x+g,S+b,O+w).normalize(),o[2].setComponents(p+h,x+_,S+R,O+N).normalize(),o[3].setComponents(p-h,x-_,S-R,O-N).normalize(),a)o[4].setComponents(d,v,y,A).normalize(),o[5].setComponents(p-d,x-v,S-y,O-A).normalize();else if(o[4].setComponents(p-d,x-v,S-y,O-A).normalize(),n===ca)o[5].setComponents(p+d,x+v,S+y,O+A).normalize();else if(n===Fl)o[5].setComponents(d,v,y,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);const n=Mb.distanceTo(t.center);return $s.radius=.7071067811865476+n,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Ru.x=o.normal.x>0?t.max.x:t.min.x,Ru.y=o.normal.y>0?t.max.y:t.min.y,Ru.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Ru)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dS extends Us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ex=new Ye,Kp=new fS,Cu=new yo,Du=new G;class tf extends Un{constructor(t=new rn,n=new dS){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Cu.copy(a.boundingSphere),Cu.applyMatrix4(o),Cu.radius+=c,t.ray.intersectsSphere(Cu)===!1)return;ex.copy(o).invert(),Kp.copy(t.ray).applyMatrix4(ex);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=a.index,_=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),x=Math.min(p.count,u.start+u.count);for(let b=v,R=x;b<R;b++){const y=p.getX(b);Du.fromBufferAttribute(_,y),nx(Du,y,d,o,t,n,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let b=v,R=x;b<R;b++)Du.fromBufferAttribute(_,b),nx(Du,b,d,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function nx(s,t,n,a,o,c,u){const h=Kp.distanceSqToPoint(s);if(h<n){const d=new G;Kp.closestPointToPoint(s,d),d.applyMatrix4(a);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class pS extends Qn{constructor(t=[],n=rr,a,o,c,u,h,d,p,g){super(t,n,a,o,c,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bb extends Qn{constructor(t,n,a,o,c,u,h,d,p){super(t,n,a,o,c,u,h,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends Qn{constructor(t,n,a=pa,o,c,u,h=Wn,d=Wn,p,g=Wa,_=1){if(g!==Wa&&g!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:_};super(v,o,c,u,h,d,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}}class Eb extends Gl{constructor(t,n=pa,a=rr,o,c,u=Wn,h=Wn,d,p=Wa){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,n,a,o,c,u,h,d,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mS extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class qa extends rn{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,x=0;b("z","y","x",-1,-1,a,n,t,u,c,0),b("z","y","x",1,-1,a,n,-t,u,c,1),b("x","z","y",1,1,t,a,n,o,u,2),b("x","z","y",1,-1,t,a,-n,o,u,3),b("x","y","z",1,-1,t,n,a,o,c,4),b("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(_,2));function b(R,y,S,w,N,A,O,D,z,E,L){const B=A/z,W=O/E,Z=A/2,$=O/2,Y=D/2,j=z+1,F=E+1;let V=0,ut=0;const nt=new G;for(let ht=0;ht<F;ht++){const P=ht*W-$;for(let et=0;et<j;et++){const gt=et*B-Z;nt[R]=gt*w,nt[y]=P*N,nt[S]=Y,p.push(nt.x,nt.y,nt.z),nt[R]=0,nt[y]=0,nt[S]=D>0?1:-1,g.push(nt.x,nt.y,nt.z),_.push(et/z),_.push(1-ht/E),V+=1}}for(let ht=0;ht<E;ht++)for(let P=0;P<z;P++){const et=v+P+j*ht,gt=v+P+j*(ht+1),Pt=v+(P+1)+j*(ht+1),Vt=v+(P+1)+j*ht;d.push(et,gt,Vt),d.push(gt,Pt,Vt),ut+=6}h.addGroup(x,ut,L),x+=ut,v+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tm extends rn{constructor(t=1,n=32,a=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:a,thetaLength:o},n=Math.max(3,n);const c=[],u=[],h=[],d=[],p=new G,g=new Ct;u.push(0,0,0),h.push(0,0,1),d.push(.5,.5);for(let _=0,v=3;_<=n;_++,v+=3){const x=a+_/n*o;p.x=t*Math.cos(x),p.y=t*Math.sin(x),u.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(u[v]/t+1)/2,g.y=(u[v+1]/t+1)/2,d.push(g.x,g.y)}for(let _=1;_<=n;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tm(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vi extends rn{constructor(t=1,n=1,a=1,o=32,c=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:a,radialSegments:o,heightSegments:c,openEnded:u,thetaStart:h,thetaLength:d};const p=this;o=Math.floor(o),c=Math.floor(c);const g=[],_=[],v=[],x=[];let b=0;const R=[],y=a/2;let S=0;w(),u===!1&&(t>0&&N(!0),n>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new Ce(_,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(x,2));function w(){const A=new G,O=new G;let D=0;const z=(n-t)/a;for(let E=0;E<=c;E++){const L=[],B=E/c,W=B*(n-t)+t;for(let Z=0;Z<=o;Z++){const $=Z/o,Y=$*d+h,j=Math.sin(Y),F=Math.cos(Y);O.x=W*j,O.y=-B*a+y,O.z=W*F,_.push(O.x,O.y,O.z),A.set(j,z,F).normalize(),v.push(A.x,A.y,A.z),x.push($,1-B),L.push(b++)}R.push(L)}for(let E=0;E<o;E++)for(let L=0;L<c;L++){const B=R[L][E],W=R[L+1][E],Z=R[L+1][E+1],$=R[L][E+1];(t>0||L!==0)&&(g.push(B,W,$),D+=3),(n>0||L!==c-1)&&(g.push(W,Z,$),D+=3)}p.addGroup(S,D,0),S+=D}function N(A){const O=b,D=new Ct,z=new G;let E=0;const L=A===!0?t:n,B=A===!0?1:-1;for(let Z=1;Z<=o;Z++)_.push(0,y*B,0),v.push(0,B,0),x.push(.5,.5),b++;const W=b;for(let Z=0;Z<=o;Z++){const Y=Z/o*d+h,j=Math.cos(Y),F=Math.sin(Y);z.x=L*F,z.y=y*B,z.z=L*j,_.push(z.x,z.y,z.z),v.push(0,B,0),D.x=j*.5+.5,D.y=F*.5*B+.5,x.push(D.x,D.y),b++}for(let Z=0;Z<o;Z++){const $=O+Z,Y=W+Z;A===!0?g.push(Y,Y+1,$):g.push(Y+1,Y,$),E+=3}p.addGroup(S,E,A===!0?1:2),S+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Am extends Vi{constructor(t=1,n=1,a=32,o=1,c=!1,u=0,h=Math.PI*2){super(0,t,n,a,o,c,u,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:a,heightSegments:o,openEnded:c,thetaStart:u,thetaLength:h}}static fromJSON(t){return new Am(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class wm extends rn{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];h(o),p(a),g(),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(c.slice(),3)),this.setAttribute("uv",new Ce(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(w){const N=new G,A=new G,O=new G;for(let D=0;D<n.length;D+=3)x(n[D+0],N),x(n[D+1],A),x(n[D+2],O),d(N,A,O,w)}function d(w,N,A,O){const D=O+1,z=[];for(let E=0;E<=D;E++){z[E]=[];const L=w.clone().lerp(A,E/D),B=N.clone().lerp(A,E/D),W=D-E;for(let Z=0;Z<=W;Z++)Z===0&&E===D?z[E][Z]=L:z[E][Z]=L.clone().lerp(B,Z/W)}for(let E=0;E<D;E++)for(let L=0;L<2*(D-E)-1;L++){const B=Math.floor(L/2);L%2===0?(v(z[E][B+1]),v(z[E+1][B]),v(z[E][B])):(v(z[E][B+1]),v(z[E+1][B+1]),v(z[E+1][B]))}}function p(w){const N=new G;for(let A=0;A<c.length;A+=3)N.x=c[A+0],N.y=c[A+1],N.z=c[A+2],N.normalize().multiplyScalar(w),c[A+0]=N.x,c[A+1]=N.y,c[A+2]=N.z}function g(){const w=new G;for(let N=0;N<c.length;N+=3){w.x=c[N+0],w.y=c[N+1],w.z=c[N+2];const A=y(w)/2/Math.PI+.5,O=S(w)/Math.PI+.5;u.push(A,1-O)}b(),_()}function _(){for(let w=0;w<u.length;w+=6){const N=u[w+0],A=u[w+2],O=u[w+4],D=Math.max(N,A,O),z=Math.min(N,A,O);D>.9&&z<.1&&(N<.2&&(u[w+0]+=1),A<.2&&(u[w+2]+=1),O<.2&&(u[w+4]+=1))}}function v(w){c.push(w.x,w.y,w.z)}function x(w,N){const A=w*3;N.x=t[A+0],N.y=t[A+1],N.z=t[A+2]}function b(){const w=new G,N=new G,A=new G,O=new G,D=new Ct,z=new Ct,E=new Ct;for(let L=0,B=0;L<c.length;L+=9,B+=6){w.set(c[L+0],c[L+1],c[L+2]),N.set(c[L+3],c[L+4],c[L+5]),A.set(c[L+6],c[L+7],c[L+8]),D.set(u[B+0],u[B+1]),z.set(u[B+2],u[B+3]),E.set(u[B+4],u[B+5]),O.copy(w).add(N).add(A).divideScalar(3);const W=y(O);R(D,B+0,w,W),R(z,B+2,N,W),R(E,B+4,A,W)}}function R(w,N,A,O){O<0&&w.x===1&&(u[N]=w.x-1),A.x===0&&A.z===0&&(u[N]=O/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function S(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wm(t.vertices,t.indices,t.radius,t.detail)}}class Rm extends wm{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=1/a,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-a,0,-o,a,0,o,-a,0,o,a,-o,-a,0,-o,a,0,o,-a,0,o,a,0,-a,0,-o,a,0,-o,-a,0,o,a,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,u,t,n),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Rm(t.radius,t.detail)}}class ga{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){xe("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,d=c-1,p;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,x=(u-g)/v;return(o+x)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),d=n||(u.isVector2?new Ct:new G);return d.copy(h).sub(u).normalize(),d}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new G,o=[],c=[],u=[],h=new G,d=new Ye;for(let x=0;x<=t;x++){const b=x/t;o[x]=this.getTangentAt(b,new G)}c[0]=new G,u[0]=new G;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),_<=p&&(p=_,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),u[x]=u[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const b=Math.acos(Ue(o[x-1].dot(o[x]),-1,1));c[x].applyMatrix4(d.makeRotationAxis(h,b))}u[x].crossVectors(o[x],c[x])}if(n===!0){let x=Math.acos(Ue(c[0].dot(c[t]),-1,1));x/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(x=-x);for(let b=1;b<=t;b++)c[b].applyMatrix4(d.makeRotationAxis(o[b],x*b)),u[b].crossVectors(o[b],c[b])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cm extends ga{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(t,n=new Ct){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let d=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=d-this.aX,x=p-this.aY;d=v*g-x*_+this.aX,p=v*_+x*g+this.aY}return a.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Tb extends Cm{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Dm(){let s=0,t=0,n=0,a=0;function o(c,u,h,d){s=c,t=h,n=-3*c+3*u-2*h-d,a=2*c-2*u+h+d}return{initCatmullRom:function(c,u,h,d,p){o(u,h,p*(h-c),p*(d-u))},initNonuniformCatmullRom:function(c,u,h,d,p,g,_){let v=(u-c)/p-(h-c)/(p+g)+(h-u)/g,x=(h-u)/g-(d-u)/(g+_)+(d-h)/_;v*=g,x*=g,o(u,h,v,x)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const ix=new G,ax=new G,Kd=new Dm,Jd=new Dm,Qd=new Dm;class Vl extends ga{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new G){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:d===0&&h===c-1&&(h=c-2,d=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(ax.subVectors(o[0],o[1]).add(o[0]),p=ax);const _=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(ix.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=ix),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(_),x),R=Math.pow(_.distanceToSquared(v),x),y=Math.pow(v.distanceToSquared(g),x);R<1e-4&&(R=1),b<1e-4&&(b=R),y<1e-4&&(y=R),Kd.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,b,R,y),Jd.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,b,R,y),Qd.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,b,R,y)}else this.curveType==="catmullrom"&&(Kd.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Jd.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Qd.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return a.set(Kd.calc(d),Jd.calc(d),Qd.calc(d)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new G().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sx(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,d=s*h;return(2*n-2*a+c+u)*d+(-3*n+3*a-2*c-u)*h+c*s+n}function Ab(s,t){const n=1-s;return n*n*t}function wb(s,t){return 2*(1-s)*s*t}function Rb(s,t){return s*s*t}function Ul(s,t,n,a){return Ab(s,t)+wb(s,n)+Rb(s,a)}function Cb(s,t){const n=1-s;return n*n*n*t}function Db(s,t){const n=1-s;return 3*n*n*s*t}function Ub(s,t){return 3*(1-s)*s*s*t}function Nb(s,t){return s*s*s*t}function Nl(s,t,n,a,o){return Cb(s,t)+Db(s,n)+Ub(s,a)+Nb(s,o)}class gS extends ga{constructor(t=new Ct,n=new Ct,a=new Ct,o=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Ct){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Nl(t,o.x,c.x,u.x,h.x),Nl(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lb extends ga{constructor(t=new G,n=new G,a=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new G){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(Nl(t,o.x,c.x,u.x,h.x),Nl(t,o.y,c.y,u.y,h.y),Nl(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vS extends ga{constructor(t=new Ct,n=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ct){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ct){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ob extends ga{constructor(t=new G,n=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new G){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new G){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _S extends ga{constructor(t=new Ct,n=new Ct,a=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ct){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Ul(t,o.x,c.x,u.x),Ul(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xS extends ga{constructor(t=new G,n=new G,a=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new G){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(Ul(t,o.x,c.x,u.x),Ul(t,o.y,c.y,u.y),Ul(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class SS extends ga{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ct){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return a.set(sx(h,d.x,p.x,g.x,_.x),sx(h,d.y,p.y,g.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Ct().fromArray(o))}return this}}var ef=Object.freeze({__proto__:null,ArcCurve:Tb,CatmullRomCurve3:Vl,CubicBezierCurve:gS,CubicBezierCurve3:Lb,EllipseCurve:Cm,LineCurve:vS,LineCurve3:Ob,QuadraticBezierCurve:_S,QuadraticBezierCurve3:xS,SplineCurve:SS});class Pb extends ga{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ef[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],d=h.getLength(),p=d===0?0:1-u/d;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,d=u.getPoints(h);for(let p=0;p<d.length;p++){const g=d[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new ef[o.type]().fromJSON(o))}return this}}class Jp extends Pb{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new vS(this.currentPoint.clone(),new Ct(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new _S(this.currentPoint.clone(),new Ct(t,n),new Ct(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const h=new gS(this.currentPoint.clone(),new Ct(t,n),new Ct(a,o),new Ct(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new SS(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(t+h,n+d,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,h,d){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,u,h,d),this}absellipse(t,n,a,o,c,u,h,d){const p=new Cm(t,n,a,o,c,u,h,d);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class er extends Jp{constructor(t){super(t),this.uuid=da(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Jp().fromJSON(o))}return this}}function zb(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let c=yS(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,d,p;if(a&&(c=Gb(s,t,c,n)),s.length>80*n){h=s[0],d=s[1];let g=h,_=d;for(let v=n;v<o;v+=n){const x=s[v],b=s[v+1];x<h&&(h=x),b<d&&(d=b),x>g&&(g=x),b>_&&(_=b)}p=Math.max(g-h,_-d),p=p!==0?32767/p:0}return kl(c,u,n,h,d,p,0),u}function yS(s,t,n,a,o){let c;if(o===jb(s,t,n,a)>0)for(let u=t;u<n;u+=a)c=rx(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=t;u-=a)c=rx(u/a|0,s[u],s[u+1],c);return c&&_o(c,c.next)&&(Wl(c),c=c.next),c}function lr(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(_o(n,n.next)||mn(n.prev,n,n.next)===0)){if(Wl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function kl(s,t,n,a,o,c,u){if(!s)return;!u&&c&&qb(s,a,o,c);let h=s;for(;s.prev!==s.next;){const d=s.prev,p=s.next;if(c?Bb(s,a,o,c):Ib(s)){t.push(d.i,s.i,p.i),Wl(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=Fb(lr(s),t),kl(s,t,n,a,o,c,2)):u===2&&Hb(s,t,n,a,o,c):kl(lr(s),t,n,a,o,c,1);break}}}function Ib(s){const t=s.prev,n=s,a=s.next;if(mn(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,h=t.y,d=n.y,p=a.y,g=Math.min(o,c,u),_=Math.min(h,d,p),v=Math.max(o,c,u),x=Math.max(h,d,p);let b=a.next;for(;b!==t;){if(b.x>=g&&b.x<=v&&b.y>=_&&b.y<=x&&Al(o,h,c,d,u,p,b.x,b.y)&&mn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Bb(s,t,n,a){const o=s.prev,c=s,u=s.next;if(mn(o,c,u)>=0)return!1;const h=o.x,d=c.x,p=u.x,g=o.y,_=c.y,v=u.y,x=Math.min(h,d,p),b=Math.min(g,_,v),R=Math.max(h,d,p),y=Math.max(g,_,v),S=Qp(x,b,t,n,a),w=Qp(R,y,t,n,a);let N=s.prevZ,A=s.nextZ;for(;N&&N.z>=S&&A&&A.z<=w;){if(N.x>=x&&N.x<=R&&N.y>=b&&N.y<=y&&N!==o&&N!==u&&Al(h,g,d,_,p,v,N.x,N.y)&&mn(N.prev,N,N.next)>=0||(N=N.prevZ,A.x>=x&&A.x<=R&&A.y>=b&&A.y<=y&&A!==o&&A!==u&&Al(h,g,d,_,p,v,A.x,A.y)&&mn(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;N&&N.z>=S;){if(N.x>=x&&N.x<=R&&N.y>=b&&N.y<=y&&N!==o&&N!==u&&Al(h,g,d,_,p,v,N.x,N.y)&&mn(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;A&&A.z<=w;){if(A.x>=x&&A.x<=R&&A.y>=b&&A.y<=y&&A!==o&&A!==u&&Al(h,g,d,_,p,v,A.x,A.y)&&mn(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function Fb(s,t){let n=s;do{const a=n.prev,o=n.next.next;!_o(a,o)&&bS(a,n,n.next,o)&&Xl(a,o)&&Xl(o,a)&&(t.push(a.i,n.i,o.i),Wl(n),Wl(n.next),n=s=o),n=n.next}while(n!==s);return lr(n)}function Hb(s,t,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&Kb(u,h)){let d=ES(u,h);u=lr(u,u.next),d=lr(d,d.next),kl(u,t,n,a,o,c,0),kl(d,t,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function Gb(s,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const h=t[c]*a,d=c<u-1?t[c+1]*a:s.length,p=yS(s,h,d,a,!1);p===p.next&&(p.steiner=!0),o.push(Zb(p))}o.sort(Vb);for(let c=0;c<o.length;c++)n=kb(o[c],n);return n}function Vb(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function kb(s,t){const n=Xb(s,t);if(!n)return t;const a=ES(n,s);return lr(a,a.next),lr(n,n.next)}function Xb(s,t){let n=t;const a=s.x,o=s.y;let c=-1/0,u;if(_o(s,n))return n;do{if(_o(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>c&&(c=_,u=n.x<n.next.x?n:n.next,_===a))return u}n=n.next}while(n!==t);if(!u)return null;const h=u,d=u.x,p=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=d&&a!==n.x&&MS(o<p?a:c,o,d,p,o<p?c:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);Xl(n,s)&&(_<g||_===g&&(n.x>u.x||n.x===u.x&&Wb(u,n)))&&(u=n,g=_)}n=n.next}while(n!==h);return u}function Wb(s,t){return mn(s.prev,s,t.prev)<0&&mn(t.next,s,s.next)<0}function qb(s,t,n,a){let o=s;do o.z===0&&(o.z=Qp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Yb(o)}function Yb(s){let t,n=1;do{let a=s,o;s=null;let c=null;for(t=0;a;){t++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let d=n;for(;h>0||d>0&&u;)h!==0&&(d===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,d--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return s}function Qp(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Zb(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function MS(s,t,n,a,o,c,u,h){return(o-u)*(t-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function Al(s,t,n,a,o,c,u,h){return!(s===u&&t===h)&&MS(s,t,n,a,o,c,u,h)}function Kb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Jb(s,t)&&(Xl(s,t)&&Xl(t,s)&&Qb(s,t)&&(mn(s.prev,s,t.prev)||mn(s,t.prev,t))||_o(s,t)&&mn(s.prev,s,s.next)>0&&mn(t.prev,t,t.next)>0)}function mn(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function _o(s,t){return s.x===t.x&&s.y===t.y}function bS(s,t,n,a){const o=Nu(mn(s,t,n)),c=Nu(mn(s,t,a)),u=Nu(mn(n,a,s)),h=Nu(mn(n,a,t));return!!(o!==c&&u!==h||o===0&&Uu(s,n,t)||c===0&&Uu(s,a,t)||u===0&&Uu(n,s,a)||h===0&&Uu(n,t,a))}function Uu(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function Nu(s){return s>0?1:s<0?-1:0}function Jb(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&bS(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function Xl(s,t){return mn(s.prev,s,s.next)<0?mn(s,t,s.next)>=0&&mn(s,s.prev,t)>=0:mn(s,t,s.prev)<0||mn(s,s.next,t)<0}function Qb(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,c=(s.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function ES(s,t){const n=jp(s.i,s.x,s.y),a=jp(t.i,t.x,t.y),o=s.next,c=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function rx(s,t,n,a){const o=jp(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Wl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jp(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jb(s,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class $b{static triangulate(t,n,a=2){return zb(t,n,a)}}class ka{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return ka.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];ox(t),lx(a,t);let u=t.length;n.forEach(ox);for(let d=0;d<n.length;d++)o.push(u),u+=n[d].length,lx(a,n[d]);const h=$b.triangulate(a,o);for(let d=0;d<h.length;d+=3)c.push(h.slice(d,d+3));return c}}function ox(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function lx(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class nf extends rn{constructor(t=new er([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,d=t.length;h<d;h++){const p=t[h];u(p)}this.setAttribute("position",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2)),this.computeVertexNormals();function u(h){const d=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,x=n.bevelThickness!==void 0?n.bevelThickness:.2,b=n.bevelSize!==void 0?n.bevelSize:x-.1,R=n.bevelOffset!==void 0?n.bevelOffset:0,y=n.bevelSegments!==void 0?n.bevelSegments:3;const S=n.extrudePath,w=n.UVGenerator!==void 0?n.UVGenerator:tE;let N,A=!1,O,D,z,E;if(S){N=S.getSpacedPoints(g),A=!0,v=!1;const st=S.isCatmullRomCurve3?S.closed:!1;O=S.computeFrenetFrames(g,st),D=new G,z=new G,E=new G}v||(y=0,x=0,b=0,R=0);const L=h.extractPoints(p);let B=L.shape;const W=L.holes;if(!ka.isClockWise(B)){B=B.reverse();for(let st=0,vt=W.length;st<vt;st++){const Et=W[st];ka.isClockWise(Et)&&(W[st]=Et.reverse())}}function $(st){const Et=10000000000000001e-36;let Tt=st[0];for(let bt=1;bt<=st.length;bt++){const zt=bt%st.length,Lt=st[zt],Yt=Lt.x-Tt.x,se=Lt.y-Tt.y,X=Yt*Yt+se*se,de=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(Tt.x),Math.abs(Tt.y)),_e=Et*de*de;if(X<=_e){st.splice(zt,1),bt--;continue}Tt=Lt}}$(B),W.forEach($);const Y=W.length,j=B;for(let st=0;st<Y;st++){const vt=W[st];B=B.concat(vt)}function F(st,vt,Et){return vt||He("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(vt,Et)}const V=B.length;function ut(st,vt,Et){let Tt,bt,zt;const Lt=st.x-vt.x,Yt=st.y-vt.y,se=Et.x-st.x,X=Et.y-st.y,de=Lt*Lt+Yt*Yt,_e=Lt*X-Yt*se;if(Math.abs(_e)>Number.EPSILON){const I=Math.sqrt(de),T=Math.sqrt(se*se+X*X),Q=vt.x-Yt/I,it=vt.y+Lt/I,xt=Et.x-X/T,It=Et.y+se/T,Bt=((xt-Q)*X-(It-it)*se)/(Lt*X-Yt*se);Tt=Q+Lt*Bt-st.x,bt=it+Yt*Bt-st.y;const mt=Tt*Tt+bt*bt;if(mt<=2)return new Ct(Tt,bt);zt=Math.sqrt(mt/2)}else{let I=!1;Lt>Number.EPSILON?se>Number.EPSILON&&(I=!0):Lt<-Number.EPSILON?se<-Number.EPSILON&&(I=!0):Math.sign(Yt)===Math.sign(X)&&(I=!0),I?(Tt=-Yt,bt=Lt,zt=Math.sqrt(de)):(Tt=Lt,bt=Yt,zt=Math.sqrt(de/2))}return new Ct(Tt/zt,bt/zt)}const nt=[];for(let st=0,vt=j.length,Et=vt-1,Tt=st+1;st<vt;st++,Et++,Tt++)Et===vt&&(Et=0),Tt===vt&&(Tt=0),nt[st]=ut(j[st],j[Et],j[Tt]);const ht=[];let P,et=nt.concat();for(let st=0,vt=Y;st<vt;st++){const Et=W[st];P=[];for(let Tt=0,bt=Et.length,zt=bt-1,Lt=Tt+1;Tt<bt;Tt++,zt++,Lt++)zt===bt&&(zt=0),Lt===bt&&(Lt=0),P[Tt]=ut(Et[Tt],Et[zt],Et[Lt]);ht.push(P),et=et.concat(P)}let gt;if(y===0)gt=ka.triangulateShape(j,W);else{const st=[],vt=[];for(let Et=0;Et<y;Et++){const Tt=Et/y,bt=x*Math.cos(Tt*Math.PI/2),zt=b*Math.sin(Tt*Math.PI/2)+R;for(let Lt=0,Yt=j.length;Lt<Yt;Lt++){const se=F(j[Lt],nt[Lt],zt);Ot(se.x,se.y,-bt),Tt===0&&st.push(se)}for(let Lt=0,Yt=Y;Lt<Yt;Lt++){const se=W[Lt];P=ht[Lt];const X=[];for(let de=0,_e=se.length;de<_e;de++){const I=F(se[de],P[de],zt);Ot(I.x,I.y,-bt),Tt===0&&X.push(I)}Tt===0&&vt.push(X)}}gt=ka.triangulateShape(st,vt)}const Pt=gt.length,Vt=b+R;for(let st=0;st<V;st++){const vt=v?F(B[st],et[st],Vt):B[st];A?(z.copy(O.normals[0]).multiplyScalar(vt.x),D.copy(O.binormals[0]).multiplyScalar(vt.y),E.copy(N[0]).add(z).add(D),Ot(E.x,E.y,E.z)):Ot(vt.x,vt.y,0)}for(let st=1;st<=g;st++)for(let vt=0;vt<V;vt++){const Et=v?F(B[vt],et[vt],Vt):B[vt];A?(z.copy(O.normals[st]).multiplyScalar(Et.x),D.copy(O.binormals[st]).multiplyScalar(Et.y),E.copy(N[st]).add(z).add(D),Ot(E.x,E.y,E.z)):Ot(Et.x,Et.y,_/g*st)}for(let st=y-1;st>=0;st--){const vt=st/y,Et=x*Math.cos(vt*Math.PI/2),Tt=b*Math.sin(vt*Math.PI/2)+R;for(let bt=0,zt=j.length;bt<zt;bt++){const Lt=F(j[bt],nt[bt],Tt);Ot(Lt.x,Lt.y,_+Et)}for(let bt=0,zt=W.length;bt<zt;bt++){const Lt=W[bt];P=ht[bt];for(let Yt=0,se=Lt.length;Yt<se;Yt++){const X=F(Lt[Yt],P[Yt],Tt);A?Ot(X.x,X.y+N[g-1].y,N[g-1].x+Et):Ot(X.x,X.y,_+Et)}}}Wt(),at();function Wt(){const st=o.length/3;if(v){let vt=0,Et=V*vt;for(let Tt=0;Tt<Pt;Tt++){const bt=gt[Tt];ce(bt[2]+Et,bt[1]+Et,bt[0]+Et)}vt=g+y*2,Et=V*vt;for(let Tt=0;Tt<Pt;Tt++){const bt=gt[Tt];ce(bt[0]+Et,bt[1]+Et,bt[2]+Et)}}else{for(let vt=0;vt<Pt;vt++){const Et=gt[vt];ce(Et[2],Et[1],Et[0])}for(let vt=0;vt<Pt;vt++){const Et=gt[vt];ce(Et[0]+V*g,Et[1]+V*g,Et[2]+V*g)}}a.addGroup(st,o.length/3-st,0)}function at(){const st=o.length/3;let vt=0;St(j,vt),vt+=j.length;for(let Et=0,Tt=W.length;Et<Tt;Et++){const bt=W[Et];St(bt,vt),vt+=bt.length}a.addGroup(st,o.length/3-st,1)}function St(st,vt){let Et=st.length;for(;--Et>=0;){const Tt=Et;let bt=Et-1;bt<0&&(bt=st.length-1);for(let zt=0,Lt=g+y*2;zt<Lt;zt++){const Yt=V*zt,se=V*(zt+1),X=vt+Tt+Yt,de=vt+bt+Yt,_e=vt+bt+se,I=vt+Tt+se;qt(X,de,_e,I)}}}function Ot(st,vt,Et){d.push(st),d.push(vt),d.push(Et)}function ce(st,vt,Et){he(st),he(vt),he(Et);const Tt=o.length/3,bt=w.generateTopUV(a,o,Tt-3,Tt-2,Tt-1);Nt(bt[0]),Nt(bt[1]),Nt(bt[2])}function qt(st,vt,Et,Tt){he(st),he(vt),he(Tt),he(vt),he(Et),he(Tt);const bt=o.length/3,zt=w.generateSideWallUV(a,o,bt-6,bt-3,bt-2,bt-1);Nt(zt[0]),Nt(zt[1]),Nt(zt[3]),Nt(zt[1]),Nt(zt[2]),Nt(zt[3])}function he(st){o.push(d[st*3+0]),o.push(d[st*3+1]),o.push(d[st*3+2])}function Nt(st){c.push(st.x),c.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return eE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new ef[o.type]().fromJSON(o)),new nf(a,t.options)}}const tE={generateTopUV:function(s,t,n,a,o){const c=t[n*3],u=t[n*3+1],h=t[a*3],d=t[a*3+1],p=t[o*3],g=t[o*3+1];return[new Ct(c,u),new Ct(h,d),new Ct(p,g)]},generateSideWallUV:function(s,t,n,a,o,c){const u=t[n*3],h=t[n*3+1],d=t[n*3+2],p=t[a*3],g=t[a*3+1],_=t[a*3+2],v=t[o*3],x=t[o*3+1],b=t[o*3+2],R=t[c*3],y=t[c*3+1],S=t[c*3+2];return Math.abs(h-g)<Math.abs(u-p)?[new Ct(u,1-d),new Ct(p,1-_),new Ct(v,1-b),new Ct(R,1-S)]:[new Ct(h,1-d),new Ct(g,1-_),new Ct(x,1-b),new Ct(y,1-S)]}};function eE(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class af extends rn{constructor(t=[new Ct(0,-.5),new Ct(.5,0),new Ct(0,.5)],n=12,a=0,o=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:a,phiLength:o},n=Math.floor(n),o=Ue(o,0,Math.PI*2);const c=[],u=[],h=[],d=[],p=[],g=1/n,_=new G,v=new Ct,x=new G,b=new G,R=new G;let y=0,S=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:y=t[w+1].x-t[w].x,S=t[w+1].y-t[w].y,x.x=S*1,x.y=-y,x.z=S*0,R.copy(x),x.normalize(),d.push(x.x,x.y,x.z);break;case t.length-1:d.push(R.x,R.y,R.z);break;default:y=t[w+1].x-t[w].x,S=t[w+1].y-t[w].y,x.x=S*1,x.y=-y,x.z=S*0,b.copy(x),x.x+=R.x,x.y+=R.y,x.z+=R.z,x.normalize(),d.push(x.x,x.y,x.z),R.copy(b)}for(let w=0;w<=n;w++){const N=a+w*g*o,A=Math.sin(N),O=Math.cos(N);for(let D=0;D<=t.length-1;D++){_.x=t[D].x*A,_.y=t[D].y,_.z=t[D].x*O,u.push(_.x,_.y,_.z),v.x=w/n,v.y=D/(t.length-1),h.push(v.x,v.y);const z=d[3*D+0]*A,E=d[3*D+1],L=d[3*D+0]*O;p.push(z,E,L)}}for(let w=0;w<n;w++)for(let N=0;N<t.length-1;N++){const A=N+w*t.length,O=A,D=A+t.length,z=A+t.length+1,E=A+1;c.push(O,D,E),c.push(z,E,D)}this.setIndex(c),this.setAttribute("position",new Ce(u,3)),this.setAttribute("uv",new Ce(h,2)),this.setAttribute("normal",new Ce(p,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new af(t.points,t.segments,t.phiStart,t.phiLength)}}class ai extends rn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),d=Math.floor(o),p=h+1,g=d+1,_=t/h,v=n/d,x=[],b=[],R=[],y=[];for(let S=0;S<g;S++){const w=S*v-u;for(let N=0;N<p;N++){const A=N*_-c;b.push(A,-w,0),R.push(0,0,1),y.push(N/h),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let w=0;w<h;w++){const N=w+p*S,A=w+p*(S+1),O=w+1+p*(S+1),D=w+1+p*S;x.push(N,A,D),x.push(A,O,D)}this.setIndex(x),this.setAttribute("position",new Ce(b,3)),this.setAttribute("normal",new Ce(R,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.width,t.height,t.widthSegments,t.heightSegments)}}class Um extends rn{constructor(t=new er([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],c=[],u=[];let h=0,d=0;if(Array.isArray(t)===!1)p(t);else for(let g=0;g<t.length;g++)p(t[g]),this.addGroup(h,d,g),h+=d,d=0;this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(u,2));function p(g){const _=o.length/3,v=g.extractPoints(n);let x=v.shape;const b=v.holes;ka.isClockWise(x)===!1&&(x=x.reverse());for(let y=0,S=b.length;y<S;y++){const w=b[y];ka.isClockWise(w)===!0&&(b[y]=w.reverse())}const R=ka.triangulateShape(x,b);for(let y=0,S=b.length;y<S;y++){const w=b[y];x=x.concat(w)}for(let y=0,S=x.length;y<S;y++){const w=x[y];o.push(w.x,w.y,0),c.push(0,0,1),u.push(w.x,w.y)}for(let y=0,S=R.length;y<S;y++){const w=R[y],N=w[0]+_,A=w[1]+_,O=w[2]+_;a.push(N,A,O),d+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return nE(n,t)}static fromJSON(t,n){const a=[];for(let o=0,c=t.shapes.length;o<c;o++){const u=n[t.shapes[o]];a.push(u)}return new Um(a,t.curveSegments)}}function nE(s,t){if(t.shapes=[],Array.isArray(s))for(let n=0,a=s.length;n<a;n++){const o=s[n];t.shapes.push(o.uuid)}else t.shapes.push(s.uuid);return t}class oa extends rn{constructor(t=1,n=32,a=16,o=0,c=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:o,phiLength:c,thetaStart:u,thetaLength:h},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+h,Math.PI);let p=0;const g=[],_=new G,v=new G,x=[],b=[],R=[],y=[];for(let S=0;S<=a;S++){const w=[],N=S/a,A=u+N*h,O=t*Math.cos(A),D=Math.sqrt(t*t-O*O);let z=0;S===0&&u===0?z=.5/n:S===a&&d===Math.PI&&(z=-.5/n);for(let E=0;E<=n;E++){const L=E/n,B=o+L*c;_.x=-D*Math.cos(B),_.y=O,_.z=D*Math.sin(B),b.push(_.x,_.y,_.z),v.copy(_).normalize(),R.push(v.x,v.y,v.z),y.push(L+z,1-N),w.push(p++)}g.push(w)}for(let S=0;S<a;S++)for(let w=0;w<n;w++){const N=g[S][w+1],A=g[S][w],O=g[S+1][w],D=g[S+1][w+1];(S!==0||u>0)&&x.push(N,A,D),(S!==a-1||d<Math.PI)&&x.push(A,O,D)}this.setIndex(x),this.setAttribute("position",new Ce(b,3)),this.setAttribute("normal",new Ce(R,3)),this.setAttribute("uv",new Ce(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nm extends rn{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2,u=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c,thetaStart:u,thetaLength:h},a=Math.floor(a),o=Math.floor(o);const d=[],p=[],g=[],_=[],v=new G,x=new G,b=new G;for(let R=0;R<=a;R++){const y=u+R/a*h;for(let S=0;S<=o;S++){const w=S/o*c;x.x=(t+n*Math.cos(y))*Math.cos(w),x.y=(t+n*Math.cos(y))*Math.sin(w),x.z=n*Math.sin(y),p.push(x.x,x.y,x.z),v.x=t*Math.cos(w),v.y=t*Math.sin(w),b.subVectors(x,v).normalize(),g.push(b.x,b.y,b.z),_.push(S/o),_.push(R/a)}}for(let R=1;R<=a;R++)for(let y=1;y<=o;y++){const S=(o+1)*R+y-1,w=(o+1)*(R-1)+y-1,N=(o+1)*(R-1)+y,A=(o+1)*R+y;d.push(S,w,A),d.push(w,N,A)}this.setIndex(d),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(g,3)),this.setAttribute("uv",new Ce(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class sf extends rn{constructor(t=new xS(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),n=64,a=1,o=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:a,radialSegments:o,closed:c};const u=t.computeFrenetFrames(n,c);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const h=new G,d=new G,p=new Ct;let g=new G;const _=[],v=[],x=[],b=[];R(),this.setIndex(b),this.setAttribute("position",new Ce(_,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(x,2));function R(){for(let N=0;N<n;N++)y(N);y(c===!1?n:0),w(),S()}function y(N){g=t.getPointAt(N/n,g);const A=u.normals[N],O=u.binormals[N];for(let D=0;D<=o;D++){const z=D/o*Math.PI*2,E=Math.sin(z),L=-Math.cos(z);d.x=L*A.x+E*O.x,d.y=L*A.y+E*O.y,d.z=L*A.z+E*O.z,d.normalize(),v.push(d.x,d.y,d.z),h.x=g.x+a*d.x,h.y=g.y+a*d.y,h.z=g.z+a*d.z,_.push(h.x,h.y,h.z)}}function S(){for(let N=1;N<=n;N++)for(let A=1;A<=o;A++){const O=(o+1)*(N-1)+(A-1),D=(o+1)*N+(A-1),z=(o+1)*N+A,E=(o+1)*(N-1)+A;b.push(O,D,E),b.push(D,z,E)}}function w(){for(let N=0;N<=n;N++)for(let A=0;A<=o;A++)p.x=N/n,p.y=A/o,x.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sf(new ef[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function xo(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];if(cx(o))o.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(cx(o[0])){const c=[];for(let u=0,h=o.length;u<h;u++)c[u]=o[u].clone();t[n][a]=c}else t[n][a]=o.slice();else t[n][a]=o}}return t}function ii(s){const t={};for(let n=0;n<s.length;n++){const a=xo(s[n]);for(const o in a)t[o]=a[o]}return t}function cx(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function iE(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function TS(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const ql={clone:xo,merge:ii};var aE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aE,this.fragmentShader=sE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xo(t.uniforms),this.uniformsGroups=iE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const a in t.uniforms){const o=t.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=n[o.value]||null;break;case"c":this.uniforms[a].value=new ae().setHex(o.value);break;case"v2":this.uniforms[a].value=new Ct().fromArray(o.value);break;case"v3":this.uniforms[a].value=new G().fromArray(o.value);break;case"v4":this.uniforms[a].value=new pn().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ye().fromArray(o.value);break;case"m4":this.uniforms[a].value=new Ye().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const a in t.extensions)this.extensions[a]=t.extensions[a];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class AS extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ua extends Us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lm extends Us{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=sm,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rE extends Us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oE extends Us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Om extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class lE extends Om{constructor(t,n,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const jd=new Ye,ux=new G,fx=new G;class wS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Em,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera;ux.setFromMatrixPosition(t.matrixWorld),n.position.copy(ux),fx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(fx),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,a,o){jd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),a.setFromProjectionMatrix(jd,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,u=o?o.z/c.x:1,h=o?o.w/c.y:1,d=o?o.x/c.x:0,p=o?o.y/c.y:0;t.coordinateSystem===Fl||t.reversedDepth?n.set(.5*u,0,0,.5*u+d,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):n.set(.5*u,0,0,.5*u+d,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),n.multiply(jd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lu=new G,Ou=new ur,sa=new G;class RS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Lu,Ou,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Ou,sa.set(1,1,1)).invert()}updateWorldMatrix(t,n,a=!1){super.updateWorldMatrix(t,n,a),this.matrixWorld.decompose(Lu,Ou,sa),sa.x===1&&sa.y===1&&sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lu,Ou,sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Es=new G,hx=new Ct,dx=new Ct;class wi extends RS{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Hl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,n){return this.getViewBounds(t,hx,dx),n.subVectors(dx,hx)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Cl*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/d,n-=u.offsetY*a/p,o*=u.width/d,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cE extends wS{constructor(){super(new wi(90,1,.5,500)),this.isPointLightShadow=!0}}class wl extends Om{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new cE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class hf extends RS{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,d=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class uE extends wS{constructor(){super(new hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends Om{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new uE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const so=-90,ro=1;class fE extends Un{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new wi(so,ro,t,n);o.layers=this.layers,this.add(o);const c=new wi(so,ro,t,n);c.layers=this.layers,this.add(c);const u=new wi(so,ro,t,n);u.layers=this.layers,this.add(u);const h=new wi(so,ro,t,n);h.layers=this.layers,this.add(h);const d=new wi(so,ro,t,n);d.layers=this.layers,this.add(d);const p=new wi(so,ro,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,d]=n;for(const p of n)this.remove(p);if(t===ca)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Fl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,1,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,4,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),a.texture.generateMipmaps=R,t.setRenderTarget(a,5,o),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,g),t.setRenderTarget(_,v,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class hE extends wi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class dE{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=pE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function pE(){this._document.hidden===!1&&this.reset()}const Gm=class Gm{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const c=this.elements;return c[0]=t,c[2]=n,c[1]=a,c[3]=o,this}};Gm.prototype.isMatrix2=!0;let px=Gm;function mx(s,t,n,a){const o=mE(a);switch(n){case jx:return s*t;case mm:return s*t/o.components*o.byteLength;case gm:return s*t/o.components*o.byteLength;case or:return s*t*2/o.components*o.byteLength;case vm:return s*t*2/o.components*o.byteLength;case $x:return s*t*3/o.components*o.byteLength;case ji:return s*t*4/o.components*o.byteLength;case _m:return s*t*4/o.components*o.byteLength;case Hu:case Gu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Vu:case ku:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sp:case Mp:return Math.max(s,16)*Math.max(t,8)/4;case xp:case yp:return Math.max(s,8)*Math.max(t,8)/2;case bp:case Ep:case Ap:case wp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tp:case qu:case Rp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dp:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Up:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Np:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Op:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Pp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ip:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Hp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Gp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vp:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case kp:case Xp:case Wp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case qp:case Yp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yu:case Zp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function mE(s){switch(s){case Ri:case Zx:return{byteLength:1,components:1};case Il:case Kx:case mi:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case pa:case hm:case Qi:return{byteLength:4,components:1};case Jx:case Qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:am}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=am);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function CS(){let s=null,t=!1,n=null,a=null;function o(c,u){a=s.requestAnimationFrame(o),n(c,u)}return{start:function(){t!==!0&&n!==null&&s!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function gE(s){const t=new WeakMap;function n(h,d){const p=h.array,g=h.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,p,g),h.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,d,p){const g=d.array,_=d.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<_.length;x++){const b=_[v],R=_[x];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let x=0,b=_.length;x<b;x++){const R=_[x];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(s.deleteBuffer(d.buffer),t.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,d),p.version=h.version}}return{get:o,remove:c,update:u}}var vE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
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
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RE=`vec3 objectNormal = vec3( normal );
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pT=`PhysicalMaterial material;
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
#endif`,mT=`uniform sampler2D dfgLUT;
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
}`,gT=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,_T=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ST=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ET=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wT=`#if defined( USE_POINTS_UV )
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
#endif`,RT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
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
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nA=`float getShadowMask() {
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
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aA=`#ifdef USE_SKINNING
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
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,oA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#ifdef USE_TRANSMISSION
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
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_A=`uniform sampler2D t2D;
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
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bA=`#include <common>
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
}`,EA=`#if DEPTH_PACKING == 3200
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
}`,TA=`#define DISTANCE
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
}`,AA=`#define DISTANCE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`uniform float scale;
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
}`,DA=`uniform vec3 diffuse;
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
}`,UA=`#include <common>
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
}`,NA=`uniform vec3 diffuse;
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
}`,LA=`#define LAMBERT
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
}`,OA=`#define LAMBERT
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
}`,PA=`#define MATCAP
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
}`,zA=`#define MATCAP
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
}`,IA=`#define NORMAL
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
}`,BA=`#define NORMAL
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
}`,FA=`#define PHONG
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
}`,HA=`#define PHONG
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
}`,GA=`#define STANDARD
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
}`,VA=`#define STANDARD
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
}`,kA=`#define TOON
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
}`,XA=`#define TOON
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
}`,WA=`uniform float size;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,ZA=`uniform vec3 color;
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
}`,KA=`uniform float rotation;
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
}`,JA=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:vE,alphahash_pars_fragment:_E,alphamap_fragment:xE,alphamap_pars_fragment:SE,alphatest_fragment:yE,alphatest_pars_fragment:ME,aomap_fragment:bE,aomap_pars_fragment:EE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:wE,beginnormal_vertex:RE,bsdfs:CE,iridescence_fragment:DE,bumpmap_pars_fragment:UE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:PE,color_fragment:zE,color_pars_fragment:IE,color_pars_vertex:BE,color_vertex:FE,common:HE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:VE,displacementmap_pars_vertex:kE,displacementmap_vertex:XE,emissivemap_fragment:WE,emissivemap_pars_fragment:qE,colorspace_fragment:YE,colorspace_pars_fragment:ZE,envmap_fragment:KE,envmap_common_pars_fragment:JE,envmap_pars_fragment:QE,envmap_pars_vertex:jE,envmap_physical_pars_fragment:cT,envmap_vertex:$E,fog_vertex:tT,fog_pars_vertex:eT,fog_fragment:nT,fog_pars_fragment:iT,gradientmap_pars_fragment:aT,lightmap_pars_fragment:sT,lights_lambert_fragment:rT,lights_lambert_pars_fragment:oT,lights_pars_begin:lT,lights_toon_fragment:uT,lights_toon_pars_fragment:fT,lights_phong_fragment:hT,lights_phong_pars_fragment:dT,lights_physical_fragment:pT,lights_physical_pars_fragment:mT,lights_fragment_begin:gT,lights_fragment_maps:vT,lights_fragment_end:_T,lightprobes_pars_fragment:xT,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:yT,logdepthbuf_pars_vertex:MT,logdepthbuf_vertex:bT,map_fragment:ET,map_pars_fragment:TT,map_particle_fragment:AT,map_particle_pars_fragment:wT,metalnessmap_fragment:RT,metalnessmap_pars_fragment:CT,morphinstance_vertex:DT,morphcolor_vertex:UT,morphnormal_vertex:NT,morphtarget_pars_vertex:LT,morphtarget_vertex:OT,normal_fragment_begin:PT,normal_fragment_maps:zT,normal_pars_fragment:IT,normal_pars_vertex:BT,normal_vertex:FT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:kT,iridescence_pars_fragment:XT,opaque_fragment:WT,packing:qT,premultiplied_alpha_fragment:YT,project_vertex:ZT,dithering_fragment:KT,dithering_pars_fragment:JT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:jT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:tA,shadowmap_vertex:eA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:aA,skinning_vertex:sA,skinnormal_vertex:rA,specularmap_fragment:oA,specularmap_pars_fragment:lA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:fA,transmission_pars_fragment:hA,uv_pars_fragment:dA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:gA,background_vert:vA,background_frag:_A,backgroundCube_vert:xA,backgroundCube_frag:SA,cube_vert:yA,cube_frag:MA,depth_vert:bA,depth_frag:EA,distance_vert:TA,distance_frag:AA,equirect_vert:wA,equirect_frag:RA,linedashed_vert:CA,linedashed_frag:DA,meshbasic_vert:UA,meshbasic_frag:NA,meshlambert_vert:LA,meshlambert_frag:OA,meshmatcap_vert:PA,meshmatcap_frag:zA,meshnormal_vert:IA,meshnormal_frag:BA,meshphong_vert:FA,meshphong_frag:HA,meshphysical_vert:GA,meshphysical_frag:VA,meshtoon_vert:kA,meshtoon_frag:XA,points_vert:WA,points_frag:qA,shadow_vert:YA,shadow_frag:ZA,sprite_vert:KA,sprite_frag:JA},jt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},la={basic:{uniforms:ii([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:ii([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ae(0)},envMapIntensity:{value:1}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:ii([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:ii([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:ii([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new ae(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:ii([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:ii([jt.points,jt.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:ii([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:ii([jt.common,jt.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:ii([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:ii([jt.sprite,jt.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distance:{uniforms:ii([jt.common,jt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distance_vert,fragmentShader:Re.distance_frag},shadow:{uniforms:ii([jt.lights,jt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};la.physical={uniforms:ii([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const Pu={r:0,b:0,g:0},QA=new Ye,DS=new ye;DS.set(-1,0,0,0,1,0,0,0,1);function jA(s,t,n,a,o,c){const u=new ae(0);let h=o===!0?0:1,d,p,g=null,_=0,v=null;function x(w){let N=w.isScene===!0?w.background:null;if(N&&N.isTexture){const A=w.backgroundBlurriness>0;N=t.get(N,A)}return N}function b(w){let N=!1;const A=x(w);A===null?y(u,h):A&&A.isColor&&(y(A,1),N=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(w,N){const A=x(N);A&&(A.isCubeTexture||A.mapping===ff)?(p===void 0&&(p=new _n(new qa(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:xo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(O,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(QA.makeRotationFromEuler(N.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(DS),p.material.toneMapped=ze.getTransfer(A.colorSpace)!==Ze,(g!==A||_!==A.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new _n(new ai(2,2),new xn({name:"BackgroundMaterial",uniforms:xo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=ze.getTransfer(A.colorSpace)!==Ze,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(g!==A||_!==A.version||v!==s.toneMapping)&&(d.material.needsUpdate=!0,g=A,_=A.version,v=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,N){w.getRGB(Pu,TS(s)),n.buffers.color.setClear(Pu.r,Pu.g,Pu.b,N,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(w,N=1){u.set(w),h=N,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(w){h=w,y(u,h)},render:b,addToRenderList:R,dispose:S}}function $A(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(W,Z,$,Y,j){let F=!1;const V=_(W,Y,$,Z);c!==V&&(c=V,p(c.object)),F=x(W,Y,$,j),F&&b(W,Y,$,j),j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(F||u)&&(u=!1,A(W,Z,$,Y),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return s.createVertexArray()}function p(W){return s.bindVertexArray(W)}function g(W){return s.deleteVertexArray(W)}function _(W,Z,$,Y){const j=Y.wireframe===!0;let F=a[Z.id];F===void 0&&(F={},a[Z.id]=F);const V=W.isInstancedMesh===!0?W.id:0;let ut=F[V];ut===void 0&&(ut={},F[V]=ut);let nt=ut[$.id];nt===void 0&&(nt={},ut[$.id]=nt);let ht=nt[j];return ht===void 0&&(ht=v(d()),nt[j]=ht),ht}function v(W){const Z=[],$=[],Y=[];for(let j=0;j<n;j++)Z[j]=0,$[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:$,attributeDivisors:Y,object:W,attributes:{},index:null}}function x(W,Z,$,Y){const j=c.attributes,F=Z.attributes;let V=0;const ut=$.getAttributes();for(const nt in ut)if(ut[nt].location>=0){const P=j[nt];let et=F[nt];if(et===void 0&&(nt==="instanceMatrix"&&W.instanceMatrix&&(et=W.instanceMatrix),nt==="instanceColor"&&W.instanceColor&&(et=W.instanceColor)),P===void 0||P.attribute!==et||et&&P.data!==et.data)return!0;V++}return c.attributesNum!==V||c.index!==Y}function b(W,Z,$,Y){const j={},F=Z.attributes;let V=0;const ut=$.getAttributes();for(const nt in ut)if(ut[nt].location>=0){let P=F[nt];P===void 0&&(nt==="instanceMatrix"&&W.instanceMatrix&&(P=W.instanceMatrix),nt==="instanceColor"&&W.instanceColor&&(P=W.instanceColor));const et={};et.attribute=P,P&&P.data&&(et.data=P.data),j[nt]=et,V++}c.attributes=j,c.attributesNum=V,c.index=Y}function R(){const W=c.newAttributes;for(let Z=0,$=W.length;Z<$;Z++)W[Z]=0}function y(W){S(W,0)}function S(W,Z){const $=c.newAttributes,Y=c.enabledAttributes,j=c.attributeDivisors;$[W]=1,Y[W]===0&&(s.enableVertexAttribArray(W),Y[W]=1),j[W]!==Z&&(s.vertexAttribDivisor(W,Z),j[W]=Z)}function w(){const W=c.newAttributes,Z=c.enabledAttributes;for(let $=0,Y=Z.length;$<Y;$++)Z[$]!==W[$]&&(s.disableVertexAttribArray($),Z[$]=0)}function N(W,Z,$,Y,j,F,V){V===!0?s.vertexAttribIPointer(W,Z,$,j,F):s.vertexAttribPointer(W,Z,$,Y,j,F)}function A(W,Z,$,Y){R();const j=Y.attributes,F=$.getAttributes(),V=Z.defaultAttributeValues;for(const ut in F){const nt=F[ut];if(nt.location>=0){let ht=j[ut];if(ht===void 0&&(ut==="instanceMatrix"&&W.instanceMatrix&&(ht=W.instanceMatrix),ut==="instanceColor"&&W.instanceColor&&(ht=W.instanceColor)),ht!==void 0){const P=ht.normalized,et=ht.itemSize,gt=t.get(ht);if(gt===void 0)continue;const Pt=gt.buffer,Vt=gt.type,Wt=gt.bytesPerElement,at=Vt===s.INT||Vt===s.UNSIGNED_INT||ht.gpuType===hm;if(ht.isInterleavedBufferAttribute){const St=ht.data,Ot=St.stride,ce=ht.offset;if(St.isInstancedInterleavedBuffer){for(let qt=0;qt<nt.locationSize;qt++)S(nt.location+qt,St.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let qt=0;qt<nt.locationSize;qt++)y(nt.location+qt);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let qt=0;qt<nt.locationSize;qt++)N(nt.location+qt,et/nt.locationSize,Vt,P,Ot*Wt,(ce+et/nt.locationSize*qt)*Wt,at)}else{if(ht.isInstancedBufferAttribute){for(let St=0;St<nt.locationSize;St++)S(nt.location+St,ht.meshPerAttribute);W.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let St=0;St<nt.locationSize;St++)y(nt.location+St);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let St=0;St<nt.locationSize;St++)N(nt.location+St,et/nt.locationSize,Vt,P,et*Wt,et/nt.locationSize*St*Wt,at)}}else if(V!==void 0){const P=V[ut];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(nt.location,P);break;case 3:s.vertexAttrib3fv(nt.location,P);break;case 4:s.vertexAttrib4fv(nt.location,P);break;default:s.vertexAttrib1fv(nt.location,P)}}}}w()}function O(){L();for(const W in a){const Z=a[W];for(const $ in Z){const Y=Z[$];for(const j in Y){const F=Y[j];for(const V in F)g(F[V].object),delete F[V];delete Y[j]}}delete a[W]}}function D(W){if(a[W.id]===void 0)return;const Z=a[W.id];for(const $ in Z){const Y=Z[$];for(const j in Y){const F=Y[j];for(const V in F)g(F[V].object),delete F[V];delete Y[j]}}delete a[W.id]}function z(W){for(const Z in a){const $=a[Z];for(const Y in $){const j=$[Y];if(j[W.id]===void 0)continue;const F=j[W.id];for(const V in F)g(F[V].object),delete F[V];delete j[W.id]}}}function E(W){for(const Z in a){const $=a[Z],Y=W.isInstancedMesh===!0?W.id:0,j=$[Y];if(j!==void 0){for(const F in j){const V=j[F];for(const ut in V)g(V[ut].object),delete V[ut];delete j[F]}delete $[Y],Object.keys($).length===0&&delete a[Z]}}}function L(){B(),u=!0,c!==o&&(c=o,p(c.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:B,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:w}}function t2(s,t,n){let a;function o(d){a=d}function c(d,p){s.drawArrays(a,d,p),n.update(p,a,1)}function u(d,p,g){g!==0&&(s.drawArraysInstanced(a,d,p,g),n.update(p,a,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,p,0,g);let v=0;for(let x=0;x<g;x++)v+=p[x];n.update(v,a,1)}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function e2(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ji&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const E=z===mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Ri&&z!==Qi&&!E&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(xe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&v===!1&&xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:N,maxFragmentUniforms:A,maxSamples:O,samples:D}}function n2(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new ws,h=new ye,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||o;return o=v,a=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,x){const b=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,S=s.get(_);if(!o||b===null||b.length===0||c&&!y)c?g(null):p();else{const w=c?0:a,N=w*4;let A=S.clippingState||null;d.value=A,A=g(b,v,N,x);for(let O=0;O!==N;++O)A[O]=n[O];S.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=w}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,x,b){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=d.value,b!==!0||y===null){const S=x+R*4,w=v.matrixWorldInverse;h.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,A=x;N!==R;++N,A+=4)u.copy(_[N]).applyMatrix4(w,h),u.normal.toArray(y,A),y[A+3]=u.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}const ho=4,i2=6,a2=20,s2=256,Ml=new hf,gx=new ae;let $d=null,tp=0,ep=0,np=!1;const r2=new G,tr=new G;class $p{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=r2}=c;$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,o,d,h),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($d,tp,ep),this._renderer.xr.enabled=np,t.scissorTest=!1,oo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rr||t.mapping===vo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:mi,format:ji,colorSpace:Ku,depthBuffer:!1},o=vx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vx(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o2(c)),this._blurMaterial=c2(c,t,n),this._ggxMaterial=l2(c,t,n)}return o}_compileMaterial(t){const n=new _n(new rn,t);this._renderer.compile(n,Ml)}_sceneToCubeUV(t,n,a,o,c){const d=new wi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(gx),_.toneMapping=$i,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _n(new qa,new Xn({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let S=!1;const w=t.background;w?w.isColor&&(y.color.copy(w),t.background=null,S=!0):(y.color.copy(gx),S=!0);for(let N=0;N<6;N++){const A=N%3;A===0?(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x+g[N],c.y,c.z)):A===1?(d.up.set(0,0,p[N]),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y+g[N],c.z)):(d.up.set(0,p[N],0),d.position.set(c.x,c.y,c.z),d.lookAt(c.x,c.y,c.z+g[N]));const O=this._cubeSize;oo(o,A*O,N>2?O:0,O,O),_.setRenderTarget(o),S&&_.render(R,d),_.render(t,d)}_.toneMapping=x,_.autoClear=v,t.background=w}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===rr||t.mapping===vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_x());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const d=this._cubeSize;oo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Ml)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const d=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=p*1.25,x=_*v,{_lodMax:b}=this,R=this._sizeLods[a],y=3*R*(a>b-ho?a-b+ho:0),S=4*(this._cubeSize-R);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=b-n,oo(c,y,S,3*R,2*R),o.setRenderTarget(c),o.render(h,Ml),d.envMap.value=c.texture,d.roughness.value=0,d.mipInt.value=b-a,oo(t,y,S,3*R,2*R),o.setRenderTarget(t),o.render(h,Ml)}_blur(t,n,a,o){const c=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(t,c,n,a,u),this._blurPass(c,t,a,a,u)}_blurPass(t,n,a,o,c){const u=this._renderer,h=this._blurMaterial,d=this._lodMeshes[o];d.material=h;const p=h.uniforms;p.envMap.value=t.texture,p.sigma.value=c,p.mipInt.value=this._lodMax-a;const g=this._sizeLods[o],_=3*g*(o>this._lodMax-ho?o-this._lodMax+ho:0),v=4*(this._cubeSize-g);oo(n,_,v,3*g,2*g),u.setRenderTarget(n),u.render(d,Ml)}}function o2(s){const t=[],n=[];let a=s;const o=s-ho+1+i2;for(let c=0;c<o;c++){const u=Math.pow(2,a);t.push(u);const h=1/(u-2),d=-h,p=1+h,g=[d,d,p,d,p,p,d,d,p,p,d,p],_=6,v=6,x=3,b=new Float32Array(x*v*_),R=new Float32Array(x*v*_);for(let S=0;S<_;S++){const w=S%3*2/3-1,N=S>2?0:-1,A=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];b.set(A,x*v*S);for(let O=0;O<v;O++){const D=g[O*2]*2-1,z=g[O*2+1]*2-1;S===0?tr.set(1,z,D):S===1?tr.set(-D,1,-z):S===2?tr.set(-D,z,1):S===3?tr.set(-1,z,-D):S===4?tr.set(-D,-1,z):tr.set(D,z,-1),tr.toArray(R,(S*v+O)*x)}}const y=new rn;y.setAttribute("position",new qe(b,x)),y.setAttribute("outputDirection",new qe(R,x)),n.push(new _n(y,null)),a>ho&&a--}return{lodMeshes:n,sizeLods:t}}function vx(s,t,n){const a=new ri(s,t,n);return a.texture.mapping=ff,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function oo(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function l2(s,t,n){return new xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:s2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function c2(s,t,n){return new xn({name:"SphericalGaussianBlur",defines:{SAMPLES:a2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function _x(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function xx(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class US extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new pS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new qa(5,5,5),c=new xn({name:"CubemapFromEquirect",uniforms:xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Jn,blending:ha});c.uniforms.tEquirect.value=n;const u=new _n(o,c),h=n.minFilter;return n.minFilter===nr&&(n.minFilter=Kn),new fE(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}function u2(s){let t=new WeakMap,n=new WeakMap,a=null;function o(v,x=!1){return v==null?null:x?u(v):c(v)}function c(v){if(v&&v.isTexture){const x=v.mapping;if(x===Ed||x===Td)if(t.has(v)){const b=t.get(v).texture;return h(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const R=new US(b.height);return R.fromEquirectangularTexture(s,v),t.set(v,R),v.addEventListener("dispose",p),h(R.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const x=v.mapping,b=x===Ed||x===Td,R=x===rr||x===vo;if(b||R){let y=n.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return a===null&&(a=new $p(s)),y=b?a.fromEquirectangular(v,y):a.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),y.texture;if(y!==void 0)return y.texture;{const w=v.image;return b&&w&&w.height>0||R&&w&&d(w)?(a===null&&(a=new $p(s)),y=b?a.fromEquirectangular(v):a.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,n.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function h(v,x){return x===Ed?v.mapping=rr:x===Td&&(v.mapping=vo),v}function d(v){let x=0;const b=6;for(let R=0;R<b;R++)v[R]!==void 0&&x++;return x===b}function p(v){const x=v.target;x.removeEventListener("dispose",p);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function g(v){const x=v.target;x.removeEventListener("dispose",g);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function f2(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&mo("WebGLRenderer: "+a+" extension not supported."),o}}}function h2(s,t,n,a){const o={},c=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete o[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)t.update(v[x],s.ARRAY_BUFFER)}function p(_){const v=[],x=_.index,b=_.attributes.position;let R=0;if(b===void 0)return;if(x!==null){const w=x.array;R=x.version;for(let N=0,A=w.length;N<A;N+=3){const O=w[N+0],D=w[N+1],z=w[N+2];v.push(O,D,D,z,z,O)}}else{const w=b.array;R=b.version;for(let N=0,A=w.length/3-1;N<A;N+=3){const O=N+0,D=N+1,z=N+2;v.push(O,D,D,z,z,O)}}const y=new(b.count>=65535?oS:rS)(v,1);y.version=R;const S=c.get(_);S&&t.remove(S),c.set(_,y)}function g(_){const v=c.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function d2(s,t,n){let a;function o(_){a=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,v){s.drawElements(a,v,c,_*u),n.update(v,a,1)}function p(_,v,x){x!==0&&(s.drawElementsInstanced(a,v,c,_*u,x),n.update(v,a,x))}function g(_,v,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,v,0,c,_,0,x);let R=0;for(let y=0;y<x;y++)R+=v[y];n.update(R,a,1)}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g}function p2(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:He("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function m2(s,t,n){const a=new WeakMap,o=new pn;function c(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let B=function(){E.dispose(),a.delete(h),h.removeEventListener("dispose",B)};var x=B;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let A=0;b===!0&&(A=1),R===!0&&(A=2),y===!0&&(A=3);let O=h.attributes.position.count*A,D=1;O>t.maxTextureSize&&(D=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const z=new Float32Array(O*D*4*_),E=new nS(z,O,D,_);E.type=Qi,E.needsUpdate=!0;const L=A*4;for(let W=0;W<_;W++){const Z=S[W],$=w[W],Y=N[W],j=O*D*4*W;for(let F=0;F<Z.count;F++){const V=F*L;b===!0&&(o.fromBufferAttribute(Z,F),z[j+V+0]=o.x,z[j+V+1]=o.y,z[j+V+2]=o.z,z[j+V+3]=0),R===!0&&(o.fromBufferAttribute($,F),z[j+V+4]=o.x,z[j+V+5]=o.y,z[j+V+6]=o.z,z[j+V+7]=0),y===!0&&(o.fromBufferAttribute(Y,F),z[j+V+8]=o.x,z[j+V+9]=o.y,z[j+V+10]=o.z,z[j+V+11]=Y.itemSize===4?o.w:1)}}v={count:_,texture:E,size:new Ct(O,D)},a.set(h,v),h.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",R),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function g2(s,t,n,a,o){let c=new WeakMap;function u(p){const g=o.render.frame,_=p.geometry,v=t.get(p,_);if(c.get(v)!==g&&(t.update(v),c.set(v,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),c.get(p)!==g&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;c.get(x)!==g&&(x.update(),c.set(x,g))}return v}function h(){c=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),a.releaseStatesOfObject(g),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:u,dispose:h}}const v2={[rm]:"LINEAR_TONE_MAPPING",[om]:"REINHARD_TONE_MAPPING",[lm]:"CINEON_TONE_MAPPING",[uf]:"ACES_FILMIC_TONE_MAPPING",[um]:"AGX_TONE_MAPPING",[fm]:"NEUTRAL_TONE_MAPPING",[cm]:"CUSTOM_TONE_MAPPING"};function _2(s,t,n,a,o,c){const u=new ri(t,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,d=null;const p=new rn;p.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Ce([0,2,0,0,2,0],2));const g=new AS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new _n(p,g),v=new hf(-1,1,1,-1,0,1);let x=null,b=null,R=!1,y,S=null,w=[],N=!1;this.setSize=function(A,O){u.setSize(A,O),h!==null&&h.setSize(A,O),d!==null&&d.setSize(A,O);for(let D=0;D<w.length;D++){const z=w[D];z.setSize&&z.setSize(A,O)}},this.setEffects=function(A){w=A,N=w.length>0&&w[0].isRenderPass===!0;const O=u.width,D=u.height;w.length>0&&h===null&&(h=new ri(O,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}),d=new ri(O,D,{type:mi,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<w.length;z++){const E=w[z];E.setSize&&E.setSize(O,D)}},this.begin=function(A,O){if(R||A.toneMapping===$i&&w.length===0)return!1;if(S=O,O!==null){const D=O.width,z=O.height;(u.width!==D||u.height!==z)&&this.setSize(D,z)}return N===!1&&A.setRenderTarget(u),y=A.toneMapping,A.toneMapping=$i,!0},this.hasRenderPass=function(){return N},this.end=function(A,O){A.toneMapping=y,R=!0;let D=u,z=h;for(let E=0;E<w.length;E++){const L=w[E];L.enabled!==!1&&(L.render(A,z,D,O),L.needsSwap!==!1&&(D=z,z=z===h?d:h))}if(x!==A.outputColorSpace||b!==A.toneMapping){x=A.outputColorSpace,b=A.toneMapping,g.defines={},ze.getTransfer(x)===Ze&&(g.defines.SRGB_TRANSFER="");const E=v2[b];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(S),A.render(_,v),S=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),d!==null&&d.dispose(),p.dispose(),g.dispose()}}const NS=new Qn,tm=new Gl(1,1),LS=new nS,OS=new sb,PS=new pS,Sx=[],yx=[],Mx=new Float32Array(16),bx=new Float32Array(9),Ex=new Float32Array(4);function Mo(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=Sx[o];if(c===void 0&&(c=new Float32Array(o),Sx[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function Pn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function zn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function pf(s,t){let n=yx[t];n===void 0&&(n=new Int32Array(t),yx[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function x2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function S2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2fv(this.addr,t),zn(n,t)}}function y2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Pn(n,t))return;s.uniform3fv(this.addr,t),zn(n,t)}}function M2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4fv(this.addr,t),zn(n,t)}}function b2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),zn(n,t)}else{if(Pn(n,a))return;Ex.set(a),s.uniformMatrix2fv(this.addr,!1,Ex),zn(n,a)}}function E2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),zn(n,t)}else{if(Pn(n,a))return;bx.set(a),s.uniformMatrix3fv(this.addr,!1,bx),zn(n,a)}}function T2(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Pn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),zn(n,t)}else{if(Pn(n,a))return;Mx.set(a),s.uniformMatrix4fv(this.addr,!1,Mx),zn(n,a)}}function A2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function w2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2iv(this.addr,t),zn(n,t)}}function R2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pn(n,t))return;s.uniform3iv(this.addr,t),zn(n,t)}}function C2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4iv(this.addr,t),zn(n,t)}}function D2(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function U2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pn(n,t))return;s.uniform2uiv(this.addr,t),zn(n,t)}}function N2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pn(n,t))return;s.uniform3uiv(this.addr,t),zn(n,t)}}function L2(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pn(n,t))return;s.uniform4uiv(this.addr,t),zn(n,t)}}function O2(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(tm.compareFunction=n.isReversedDepthBuffer()?Sm:xm,c=tm):c=NS,n.setTexture2D(t||c,o)}function P2(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||OS,o)}function z2(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||PS,o)}function I2(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||LS,o)}function B2(s){switch(s){case 5126:return x2;case 35664:return S2;case 35665:return y2;case 35666:return M2;case 35674:return b2;case 35675:return E2;case 35676:return T2;case 5124:case 35670:return A2;case 35667:case 35671:return w2;case 35668:case 35672:return R2;case 35669:case 35673:return C2;case 5125:return D2;case 36294:return U2;case 36295:return N2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return O2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return z2;case 36289:case 36303:case 36311:case 36292:return I2}}function F2(s,t){s.uniform1fv(this.addr,t)}function H2(s,t){const n=Mo(t,this.size,2);s.uniform2fv(this.addr,n)}function G2(s,t){const n=Mo(t,this.size,3);s.uniform3fv(this.addr,n)}function V2(s,t){const n=Mo(t,this.size,4);s.uniform4fv(this.addr,n)}function k2(s,t){const n=Mo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function X2(s,t){const n=Mo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function W2(s,t){const n=Mo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function q2(s,t){s.uniform1iv(this.addr,t)}function Y2(s,t){s.uniform2iv(this.addr,t)}function Z2(s,t){s.uniform3iv(this.addr,t)}function K2(s,t){s.uniform4iv(this.addr,t)}function J2(s,t){s.uniform1uiv(this.addr,t)}function Q2(s,t){s.uniform2uiv(this.addr,t)}function j2(s,t){s.uniform3uiv(this.addr,t)}function $2(s,t){s.uniform4uiv(this.addr,t)}function t3(s,t,n){const a=this.cache,o=t.length,c=pf(n,o);Pn(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));let u;this.type===s.SAMPLER_2D_SHADOW?u=tm:u=NS;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||u,c[h])}function e3(s,t,n){const a=this.cache,o=t.length,c=pf(n,o);Pn(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||OS,c[u])}function n3(s,t,n){const a=this.cache,o=t.length,c=pf(n,o);Pn(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||PS,c[u])}function i3(s,t,n){const a=this.cache,o=t.length,c=pf(n,o);Pn(a,c)||(s.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||LS,c[u])}function a3(s){switch(s){case 5126:return F2;case 35664:return H2;case 35665:return G2;case 35666:return V2;case 35674:return k2;case 35675:return X2;case 35676:return W2;case 5124:case 35670:return q2;case 35667:case 35671:return Y2;case 35668:case 35672:return Z2;case 35669:case 35673:return K2;case 5125:return J2;case 36294:return Q2;case 36295:return j2;case 36296:return $2;case 35678:case 36198:case 36298:case 36306:case 35682:return t3;case 35679:case 36299:case 36307:return e3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}class s3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=B2(n.type)}}class r3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a3(n.type)}}class o3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function Tx(s,t){s.seq.push(t),s.map[t.id]=t}function l3(s,t,n){const a=s.name,o=a.length;for(ip.lastIndex=0;;){const c=ip.exec(a),u=ip.lastIndex;let h=c[1];const d=c[2]==="]",p=c[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){Tx(n,p===void 0?new s3(h,s,t):new r3(h,s,t));break}else{let _=n.map[h];_===void 0&&(_=new o3(h),Tx(n,_)),n=_}}}class Xu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const h=t.getActiveUniform(n,u),d=t.getUniformLocation(n,h.name);l3(h,d,this)}const o=[],c=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(u):c.push(u);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],d=a[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function Ax(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const c3=37297;let u3=0;function f3(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const wx=new ye;function h3(s){ze._getMatrix(wx,ze.workingColorSpace,s);const t=`mat3( ${wx.elements.map(n=>n.toFixed(4))} )`;switch(ze.getTransfer(s)){case Ju:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rx(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+f3(s.getShaderSource(t),h)}else return c}function d3(s,t){const n=h3(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const p3={[rm]:"Linear",[om]:"Reinhard",[lm]:"Cineon",[uf]:"ACESFilmic",[um]:"AgX",[fm]:"Neutral",[cm]:"Custom"};function m3(s,t){const n=p3[t];return n===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new G;function g3(){ze.getLuminanceCoefficients(zu);const s=zu.x.toFixed(4),t=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function _3(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function x3(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function Rl(s){return s!==""}function Cx(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S3=/^[ \t]*#include +<([\w\d./]+)>/gm;function em(s){return s.replace(S3,M3)}const y3=new Map;function M3(s,t){let n=Re[t];if(n===void 0){const a=y3.get(t);if(a!==void 0)n=Re[a],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return em(n)}const b3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ux(s){return s.replace(b3,E3)}function E3(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Nx(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const T3={[Fu]:"SHADOWMAP_TYPE_PCF",[Tl]:"SHADOWMAP_TYPE_VSM"};function A3(s){return T3[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const w3={[rr]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE",[ff]:"ENVMAP_TYPE_CUBE_UV"};function R3(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":w3[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const C3={[vo]:"ENVMAP_MODE_REFRACTION"};function D3(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":C3[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const U3={[sm]:"ENVMAP_BLENDING_MULTIPLY",[M1]:"ENVMAP_BLENDING_MIX",[b1]:"ENVMAP_BLENDING_ADD"};function N3(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":U3[s.combine]||"ENVMAP_BLENDING_NONE"}function L3(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function O3(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const d=A3(n),p=R3(n),g=D3(n),_=N3(n),v=L3(n),x=v3(n),b=_3(c),R=o.createProgram();let y,S,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Rl).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Rl).join(`
`),S.length>0&&(S+=`
`)):(y=[Nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),S=[Nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?Re.tonemapping_pars_fragment:"",n.toneMapping!==$i?m3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,d3("linearToOutputTexel",n.outputColorSpace),g3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rl).join(`
`)),u=em(u),u=Cx(u,n),u=Dx(u,n),h=em(h),h=Cx(h,n),h=Dx(h,n),u=Ux(u),h=Ux(h),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=w+y+u,A=w+S+h,O=Ax(o,o.VERTEX_SHADER,N),D=Ax(o,o.FRAGMENT_SHADER,A);o.attachShader(R,O),o.attachShader(R,D),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function z(W){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(R)||"",$=o.getShaderInfoLog(O)||"",Y=o.getShaderInfoLog(D)||"",j=Z.trim(),F=$.trim(),V=Y.trim();let ut=!0,nt=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(ut=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,O,D);else{const ht=Rx(o,O,"vertex"),P=Rx(o,D,"fragment");He("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+j+`
`+ht+`
`+P)}else j!==""?xe("WebGLProgram: Program Info Log:",j):(F===""||V==="")&&(nt=!1);nt&&(W.diagnostics={runnable:ut,programLog:j,vertexShader:{log:F,prefix:y},fragmentShader:{log:V,prefix:S}})}o.deleteShader(O),o.deleteShader(D),E=new Xu(o,R),L=x3(o,R)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(R,c3)),B},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=u3++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=D,this}let P3=0;class z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,a){const o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new I3(t),n.set(t,a)),a}}class I3{constructor(t){this.id=P3++,this.code=t,this.usedTimes=0}}function B3(s){return s===or||s===qu||s===Yu}function F3(s,t,n,a,o,c){const u=new iS,h=new z3,d=new Set,p=[],g=new Map,_=a.logarithmicDepthBuffer;let v=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return d.add(E),E===0?"uv":`uv${E}`}function R(E,L,B,W,Z,$){const Y=W.fog,j=Z.geometry,F=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ut=t.get(E.envMap||F,V),nt=ut&&ut.mapping===ff?ut.image.height:null,ht=x[E.type];E.precision!==null&&(v=a.getMaxPrecision(E.precision),v!==E.precision&&xe("WebGLProgram.getParameters:",E.precision,"not supported, using",v,"instead."));const P=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,et=P!==void 0?P.length:0;let gt=0;j.morphAttributes.position!==void 0&&(gt=1),j.morphAttributes.normal!==void 0&&(gt=2),j.morphAttributes.color!==void 0&&(gt=3);let Pt,Vt,Wt,at;if(ht){const Ut=la[ht];Pt=Ut.vertexShader,Vt=Ut.fragmentShader}else{Pt=E.vertexShader,Vt=E.fragmentShader;const Ut=h.getVertexShaderStage(E),Ht=h.getFragmentShaderStage(E);h.update(E,Ut,Ht),Wt=Ut.id,at=Ht.id}const St=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),ce=Z.isInstancedMesh===!0,qt=Z.isBatchedMesh===!0,he=!!E.map,Nt=!!E.matcap,st=!!ut,vt=!!E.aoMap,Et=!!E.lightMap,Tt=!!E.bumpMap&&E.wireframe===!1,bt=!!E.normalMap,zt=!!E.displacementMap,Lt=!!E.emissiveMap,Yt=!!E.metalnessMap,se=!!E.roughnessMap,X=E.anisotropy>0,de=E.clearcoat>0,_e=E.dispersion>0,I=E.retroreflectivity>0,T=E.iridescence>0,Q=E.sheen>0,it=E.transmission>0,xt=X&&!!E.anisotropyMap,It=de&&!!E.clearcoatMap,Bt=de&&!!E.clearcoatNormalMap,mt=de&&!!E.clearcoatRoughnessMap,yt=T&&!!E.iridescenceMap,Ft=T&&!!E.iridescenceThicknessMap,$t=Q&&!!E.sheenColorMap,Zt=Q&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,oe=!!E.specularColorMap,fe=!!E.specularIntensityMap,me=it&&!!E.transmissionMap,J=it&&!!E.thicknessMap,Gt=!!E.gradientMap,Mt=!!E.alphaMap,kt=E.alphaTest>0,Jt=!!E.alphaHash,H=!!E.extensions;let dt=$i;E.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Rt={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:Pt,fragmentShader:Vt,defines:E.defines,customVertexShaderID:Wt,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:v,batching:qt,batchingColor:qt&&Z._colorsTexture!==null,instancing:ce,instancingColor:ce&&Z.instanceColor!==null,instancingMorph:ce&&Z.morphTexture!==null,outputColorSpace:St===null?s.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:he,matcap:Nt,envMap:st,envMapMode:st&&ut.mapping,envMapCubeUVHeight:nt,aoMap:vt,lightMap:Et,bumpMap:Tt,normalMap:bt,displacementMap:zt,emissiveMap:Lt,normalMapObjectSpace:bt&&E.normalMapType===A1,normalMapTangentSpace:bt&&E.normalMapType===Zu,packedNormalMap:bt&&E.normalMapType===Zu&&B3(E.normalMap.format),metalnessMap:Yt,roughnessMap:se,anisotropy:X,anisotropyMap:xt,clearcoat:de,clearcoatMap:It,clearcoatNormalMap:Bt,clearcoatRoughnessMap:mt,dispersion:_e,retroreflection:I,iridescence:T,iridescenceMap:yt,iridescenceThicknessMap:Ft,sheen:Q,sheenColorMap:$t,sheenRoughnessMap:Zt,specularMap:Xt,specularColorMap:oe,specularIntensityMap:fe,transmission:it,transmissionMap:me,thicknessMap:J,gradientMap:Gt,opaque:E.transparent===!1&&E.blending===po&&E.alphaToCoverage===!1,alphaMap:Mt,alphaTest:kt,alphaHash:Jt,combine:E.combine,mapUv:he&&b(E.map.channel),aoMapUv:vt&&b(E.aoMap.channel),lightMapUv:Et&&b(E.lightMap.channel),bumpMapUv:Tt&&b(E.bumpMap.channel),normalMapUv:bt&&b(E.normalMap.channel),displacementMapUv:zt&&b(E.displacementMap.channel),emissiveMapUv:Lt&&b(E.emissiveMap.channel),metalnessMapUv:Yt&&b(E.metalnessMap.channel),roughnessMapUv:se&&b(E.roughnessMap.channel),anisotropyMapUv:xt&&b(E.anisotropyMap.channel),clearcoatMapUv:It&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(E.sheenRoughnessMap.channel),specularMapUv:Xt&&b(E.specularMap.channel),specularColorMapUv:oe&&b(E.specularColorMap.channel),specularIntensityMapUv:fe&&b(E.specularIntensityMap.channel),transmissionMapUv:me&&b(E.transmissionMap.channel),thicknessMapUv:J&&b(E.thicknessMap.channel),alphaMapUv:Mt&&b(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(bt||X),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(he||Mt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ot,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:gt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:he&&E.map.isVideoTexture===!0&&ze.getTransfer(E.map.colorSpace)===Ze,decodeVideoTextureEmissive:Lt&&E.emissiveMap.isVideoTexture===!0&&ze.getTransfer(E.emissiveMap.colorSpace)===Ze,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===On,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:H&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(H&&E.extensions.multiDraw===!0||qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Rt.vertexUv1s=d.has(1),Rt.vertexUv2s=d.has(2),Rt.vertexUv3s=d.has(3),d.clear(),Rt}function y(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)L.push(B),L.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(S(L,E),w(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function S(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function w(E,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.retroreflection&&u.enable(24),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),L.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function N(E){const L=x[E.type];let B;if(L){const W=la[L];B=ql.clone(W.uniforms)}else B=E.uniforms;return B}function A(E,L){let B=g.get(L);return B!==void 0?++B.usedTimes:(B=new O3(s,L,E,o),p.push(B),g.set(L,B)),B}function O(E){if(--E.usedTimes===0){const L=p.indexOf(E);p[L]=p[p.length-1],p.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function z(){h.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:N,acquireProgram:A,releaseProgram:O,releaseShaderCache:D,programs:p,dispose:z}}function H3(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,d){s.get(u)[h]=d}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function G3(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Lx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ox(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(v){let x=0;return v.isInstancedMesh&&(x+=2),v.isSkinnedMesh&&(x+=1),x}function h(v,x,b,R,y,S){let w=s[t];return w===void 0?(w={id:v.id,object:v,geometry:x,material:b,materialVariant:u(v),groupOrder:R,renderOrder:v.renderOrder,z:y,group:S},s[t]=w):(w.id=v.id,w.object=v,w.geometry=x,w.material=b,w.materialVariant=u(v),w.groupOrder=R,w.renderOrder=v.renderOrder,w.z=y,w.group=S),t++,w}function d(v,x,b,R,y,S,w){w.reversedDepth===!0&&(y=-y);const N=h(v,x,b,R,y,S);b.transmission>0?a.push(N):b.transparent===!0?o.push(N):n.push(N)}function p(v,x,b,R,y,S){const w=h(v,x,b,R,y,S);b.transmission>0?a.unshift(w):b.transparent===!0?o.unshift(w):n.unshift(w)}function g(v,x){n.length>1&&n.sort(v||G3),a.length>1&&a.sort(x||Lx),o.length>1&&o.sort(x||Lx)}function _(){for(let v=t,x=s.length;v<x;v++){const b=s[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:p,finish:_,sort:g}}function V3(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new Ox,s.set(a,[u])):o>=c.length?(u=new Ox,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function k3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new G,color:new ae};break;case"SpotLight":n={position:new G,direction:new G,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ae,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":n={color:new ae,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=n,n}}}function X3(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let W3=0;function q3(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Y3(s){const t=new k3,n=X3(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new G);const o=new G,c=new Ye,u=new Ye;function h(p){let g=0,_=0,v=0;for(let Z=0;Z<9;Z++)a.probe[Z].set(0,0,0);let x=0,b=0,R=0,y=0,S=0,w=0,N=0,A=0,O=0,D=0,z=0,E=0,L=0,B=0;p.sort(q3);for(let Z=0,$=p.length;Z<$;Z++){const Y=p[Z],j=Y.color,F=Y.intensity,V=Y.distance;let ut=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===or?ut=Y.shadow.map.texture:ut=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)g+=j.r*F,_+=j.g*F,v+=j.b*F;else if(Y.isLightProbe){for(let nt=0;nt<9;nt++)a.probe[nt].addScaledVector(Y.sh.coefficients[nt],F);B++}else if(Y.isSunLight){const nt=t.get(Y);if(nt.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ht=Y.shadow,P=n.get(Y);P.shadowIntensity=ht.intensity,P.shadowBias=ht.bias,P.shadowNormalBias=ht.normalBias,P.shadowRadius=ht.radius,P.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),a.sunShadow[b]=P,a.sunShadowMap[b]=ut;const et=ht.getViewportCount();for(let gt=0;gt<et;gt++)a.sunShadowMatrix[R+gt]=ht.getMatrix(gt),a.sunShadowCascade[R+gt]=ht._cascadeData[gt];R+=et,b++}a.sun[x]=nt,x++}else if(Y.isDirectionalLight){const nt=t.get(Y);if(nt.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const ht=Y.shadow,P=n.get(Y);P.shadowIntensity=ht.intensity,P.shadowBias=ht.bias,P.shadowNormalBias=ht.normalBias,P.shadowRadius=ht.radius,P.shadowMapSize=ht.mapSize,a.directionalShadow[y]=P,a.directionalShadowMap[y]=ut,a.directionalShadowMatrix[y]=Y.shadow.matrix,O++}a.directional[y]=nt,y++}else if(Y.isSpotLight){const nt=t.get(Y);nt.position.setFromMatrixPosition(Y.matrixWorld),nt.color.copy(j).multiplyScalar(F),nt.distance=V,nt.coneCos=Math.cos(Y.angle),nt.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),nt.decay=Y.decay,a.spot[w]=nt;const ht=Y.shadow;if(Y.map&&(a.spotLightMap[E]=Y.map,E++,ht.updateMatrices(Y),Y.castShadow&&L++),a.spotLightMatrix[w]=ht.matrix,Y.castShadow){const P=n.get(Y);P.shadowIntensity=ht.intensity,P.shadowBias=ht.bias,P.shadowNormalBias=ht.normalBias,P.shadowRadius=ht.radius,P.shadowMapSize=ht.mapSize,a.spotShadow[w]=P,a.spotShadowMap[w]=ut,z++}w++}else if(Y.isRectAreaLight){const nt=t.get(Y);nt.color.copy(j).multiplyScalar(F),nt.halfWidth.set(Y.width*.5,0,0),nt.halfHeight.set(0,Y.height*.5,0),a.rectArea[N]=nt,N++}else if(Y.isPointLight){const nt=t.get(Y);if(nt.color.copy(Y.color).multiplyScalar(Y.intensity),nt.distance=Y.distance,nt.decay=Y.decay,Y.castShadow){const ht=Y.shadow,P=n.get(Y);P.shadowIntensity=ht.intensity,P.shadowBias=ht.bias,P.shadowNormalBias=ht.normalBias,P.shadowRadius=ht.radius,P.shadowMapSize=ht.mapSize,P.shadowCameraNear=ht.camera.near,P.shadowCameraFar=ht.camera.far,a.pointShadow[S]=P,a.pointShadowMap[S]=ut,a.pointShadowMatrix[S]=Y.shadow.matrix,D++}a.point[S]=nt,S++}else if(Y.isHemisphereLight){const nt=t.get(Y);nt.skyColor.copy(Y.color).multiplyScalar(F),nt.groundColor.copy(Y.groundColor).multiplyScalar(F),a.hemi[A]=nt,A++}}N>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=jt.LTC_FLOAT_1,a.rectAreaLTC2=jt.LTC_FLOAT_2):(a.rectAreaLTC1=jt.LTC_HALF_1,a.rectAreaLTC2=jt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const W=a.hash;(W.sunLength!==x||W.directionalLength!==y||W.pointLength!==S||W.spotLength!==w||W.rectAreaLength!==N||W.hemiLength!==A||W.numSunShadows!==b||W.numDirectionalShadows!==O||W.numPointShadows!==D||W.numSpotShadows!==z||W.numSpotMaps!==E||W.numLightProbes!==B)&&(a.sun.length=x,a.directional.length=y,a.spot.length=w,a.rectArea.length=N,a.point.length=S,a.hemi.length=A,a.sunShadow.length=b,a.sunShadowMap.length=b,a.sunShadowMatrix.length=R,a.sunShadowCascade.length=R,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.directionalShadowMatrix.length=O,a.pointShadow.length=D,a.pointShadowMap.length=D,a.pointShadowMatrix.length=D,a.spotShadow.length=z,a.spotShadowMap.length=z,a.spotLightMatrix.length=z+E-L,a.spotLightMap.length=E,a.numSpotLightShadowsWithMaps=L,a.numLightProbes=B,W.sunLength=x,W.directionalLength=y,W.pointLength=S,W.spotLength=w,W.rectAreaLength=N,W.hemiLength=A,W.numSunShadows=b,W.numDirectionalShadows=O,W.numPointShadows=D,W.numSpotShadows=z,W.numSpotMaps=E,W.numLightProbes=B,a.version=W3++)}function d(p,g){let _=0,v=0,x=0,b=0,R=0,y=0;const S=g.matrixWorldInverse;for(let w=0,N=p.length;w<N;w++){const A=p[w];if(A.isSunLight){const O=a.sun[_];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(S),_++}else if(A.isDirectionalLight){const O=a.directional[v];O.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),v++}else if(A.isSpotLight){const O=a.spot[b];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(S),O.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(S),b++}else if(A.isRectAreaLight){const O=a.rectArea[R];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(S),u.identity(),c.copy(A.matrixWorld),c.premultiply(S),u.extractRotation(c),O.halfWidth.set(A.width*.5,0,0),O.halfHeight.set(0,A.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),R++}else if(A.isPointLight){const O=a.point[x];O.position.setFromMatrixPosition(A.matrixWorld),O.position.applyMatrix4(S),x++}else if(A.isHemisphereLight){const O=a.hemi[y];O.direction.setFromMatrixPosition(A.matrixWorld),O.direction.transformDirection(S),y++}}}return{setup:h,setupView:d,state:a}}function Px(s){const t=new Y3(s),n=[],a=[],o=[];function c(v){_.camera=v,n.length=0,a.length=0,o.length=0}function u(v){n.push(v)}function h(v){a.push(v)}function d(v){o.push(v)}function p(){t.setup(n)}function g(v){t.setupView(n,v)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:g,pushLight:u,pushShadow:h,pushLightProbeGrid:d}}function Z3(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Px(s),t.set(o,[h])):c>=u.length?(h=new Px(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J3=`uniform sampler2D shadow_pass;
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
}`,Q3=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],j3=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],zx=new Ye,bl=new G,ap=new G;function $3(s,t,n){let a=new Em;const o=new Ct,c=new Ct,u=new pn,h=new rE,d=new oE,p={},g=n.maxTextureSize,_={[sr]:Jn,[Jn]:sr,[On]:On},v=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:K3,fragmentShader:J3}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new rn;b.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new _n(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let S=this.type;this.render=function(D,z,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Xx&&(xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fu);const L=s.getRenderTarget(),B=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ha),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=S!==this.type;$&&z.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(j=>j.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,j=D.length;Y<j;Y++){const F=D[Y],V=F.shadow;if(V===void 0){xe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ut=V.getFrameExtents();o.multiply(ut),c.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/ut.x),o.x=c.x*ut.x,V.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/ut.y),o.y=c.y*ut.y,V.mapSize.y=c.y));const nt=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=nt,V.map===null||$===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Tl){if(F.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ri(o.x,o.y,{format:or,type:mi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new Gl(o.x,o.y,Qi),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Wa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wn,V.map.depthTexture.magFilter=Wn}else F.isPointLight?(V.map=new US(o.x),V.map.depthTexture=new Eb(o.x,pa)):(V.map=new ri(o.x,o.y),V.map.depthTexture=new Gl(o.x,o.y,pa)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Wa,this.type===Fu?(V.map.depthTexture.compareFunction=nt?Sm:xm,V.map.depthTexture.minFilter=Kn,V.map.depthTexture.magFilter=Kn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wn,V.map.depthTexture.magFilter=Wn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==o.x||V.map.height!==o.y)&&V.map.setSize(o.x,o.y);const ht=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();F.isPointLight!==!0&&V.updateMatrices(F,E);for(let P=0;P<ht;P++){const et=V.getCamera(P);if(F.isPointLight){const gt=V.camera,Pt=V.matrix,Vt=F.distance||gt.far;Vt!==gt.far&&(gt.far=Vt,gt.updateProjectionMatrix()),bl.setFromMatrixPosition(F.matrixWorld),gt.position.copy(bl),ap.copy(gt.position),ap.add(Q3[P]),gt.up.copy(j3[P]),gt.lookAt(ap),gt.updateMatrixWorld(),Pt.makeTranslation(-bl.x,-bl.y,-bl.z),zx.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(zx,gt.coordinateSystem,gt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,P),s.clear();else{P===0&&(s.setRenderTarget(V.map),s.clear());const gt=V.getViewport(P);u.set(c.x*gt.x,c.y*gt.y,c.x*gt.z,c.y*gt.w),Z.viewport(u)}a=V.getFrustum(P),A(z,E,et,F,this.type)}V.isPointLightShadow!==!0&&this.type===Tl&&w(V,E),V.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(L,B,W)};function w(D,z){const E=t.update(R);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null?D.mapPass=new ri(o.x,o.y,{format:or,type:mi}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value.set(D.map.width,D.map.height),v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(z,null,E,v,R,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value.set(D.map.width,D.map.height),x.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(z,null,E,x,R,null)}function N(D,z,E,L){let B=null;const W=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(W!==void 0)B=W;else if(B=E.isPointLight===!0?d:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=B.uuid,$=z.uuid;let Y=p[Z];Y===void 0&&(Y={},p[Z]=Y);let j=Y[$];j===void 0&&(j=B.clone(),Y[$]=j,z.addEventListener("dispose",O)),B=j}if(B.visible=z.visible,B.wireframe=z.wireframe,L===Tl?B.side=z.shadowSide!==null?z.shadowSide:z.side:B.side=z.shadowSide!==null?z.shadowSide:_[z.side],B.alphaMap=z.alphaMap,B.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,B.map=z.map,B.clipShadows=z.clipShadows,B.clippingPlanes=z.clippingPlanes,B.clipIntersection=z.clipIntersection,B.displacementMap=z.displacementMap,B.displacementScale=z.displacementScale,B.displacementBias=z.displacementBias,B.wireframeLinewidth=z.wireframeLinewidth,B.linewidth=z.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Z=s.properties.get(B);Z.light=E}return B}function A(D,z,E,L,B){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&B===Tl)&&(!D.frustumCulled||D.intersectsFrustum(a))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const $=t.update(D),Y=D.material;if(Array.isArray(Y)){const j=$.groups;for(let F=0,V=j.length;F<V;F++){const ut=j[F],nt=Y[ut.materialIndex];if(nt&&nt.visible){const ht=N(D,nt,L,B);D.onBeforeShadow(s,D,z,E,$,ht,ut),s.renderBufferDirect(E,null,$,ht,D,ut),D.onAfterShadow(s,D,z,E,$,ht,ut)}}}else if(Y.visible){const j=N(D,Y,L,B);D.onBeforeShadow(s,D,z,E,$,j,null),s.renderBufferDirect(E,null,$,j,D,null),D.onAfterShadow(s,D,z,E,$,j,null)}}const Z=D.children;for(let $=0,Y=Z.length;$<Y;$++)A(Z[$],z,E,L,B)}function O(D){D.target.removeEventListener("dispose",O);for(const E in p){const L=p[E],B=D.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function tw(s,t){function n(){let J=!1;const Gt=new pn;let Mt=null;const kt=new pn(0,0,0,0);return{setMask:function(Jt){Mt!==Jt&&!J&&(s.colorMask(Jt,Jt,Jt,Jt),Mt=Jt)},setLocked:function(Jt){J=Jt},setClear:function(Jt,H,dt,Rt,Ut){Ut===!0&&(Jt*=Rt,H*=Rt,dt*=Rt),Gt.set(Jt,H,dt,Rt),kt.equals(Gt)===!1&&(s.clearColor(Jt,H,dt,Rt),kt.copy(Gt))},reset:function(){J=!1,Mt=null,kt.set(-1,0,0,0)}}}function a(){let J=!1,Gt=!1,Mt=null,kt=null,Jt=null;return{setReversed:function(H){if(Gt!==H){const dt=t.get("EXT_clip_control");H?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Gt=H;const Rt=Jt;Jt=null,this.setClear(Rt)}},getReversed:function(){return Gt},setTest:function(H){H?St(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(H){Mt!==H&&!J&&(s.depthMask(H),Mt=H)},setFunc:function(H){if(Gt&&(H=I1[H]),kt!==H){switch(H){case up:s.depthFunc(s.NEVER);break;case fp:s.depthFunc(s.ALWAYS);break;case hp:s.depthFunc(s.LESS);break;case zl:s.depthFunc(s.LEQUAL);break;case dp:s.depthFunc(s.EQUAL);break;case pp:s.depthFunc(s.GEQUAL);break;case mp:s.depthFunc(s.GREATER);break;case gp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}kt=H}},setLocked:function(H){J=H},setClear:function(H){Jt!==H&&(Jt=H,Gt&&(H=1-H),s.clearDepth(H))},reset:function(){J=!1,Mt=null,kt=null,Jt=null,Gt=!1}}}function o(){let J=!1,Gt=null,Mt=null,kt=null,Jt=null,H=null,dt=null,Rt=null,Ut=null;return{setTest:function(Ht){J||(Ht?St(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(Ht){Gt!==Ht&&!J&&(s.stencilMask(Ht),Gt=Ht)},setFunc:function(Ht,Me,Ie){(Mt!==Ht||kt!==Me||Jt!==Ie)&&(s.stencilFunc(Ht,Me,Ie),Mt=Ht,kt=Me,Jt=Ie)},setOp:function(Ht,Me,Ie){(H!==Ht||dt!==Me||Rt!==Ie)&&(s.stencilOp(Ht,Me,Ie),H=Ht,dt=Me,Rt=Ie)},setLocked:function(Ht){J=Ht},setClear:function(Ht){Ut!==Ht&&(s.clearStencil(Ht),Ut=Ht)},reset:function(){J=!1,Gt=null,Mt=null,kt=null,Jt=null,H=null,dt=null,Rt=null,Ut=null}}}const c=new n,u=new a,h=new o,d=new WeakMap,p=new WeakMap;let g={},_={},v={},x=new WeakMap,b=[],R=null,y=!1,S=null,w=null,N=null,A=null,O=null,D=null,z=null,E=new ae(0,0,0),L=0,B=!1,W=null,Z=null,$=null,Y=null,j=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ut=0;const nt=s.getParameter(s.VERSION);nt.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(nt)[1]),V=ut>=1):nt.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),V=ut>=2);let ht=null,P={};const et=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),Pt=new pn().fromArray(et),Vt=new pn().fromArray(gt);function Wt(J,Gt,Mt,kt){const Jt=new Uint8Array(4),H=s.createTexture();s.bindTexture(J,H),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<Mt;dt++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(Gt,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Jt):s.texImage2D(Gt+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Jt);return H}const at={};at[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),St(s.DEPTH_TEST),u.setFunc(zl),Tt(!1),bt(D_),St(s.CULL_FACE),vt(ha);function St(J){g[J]!==!0&&(s.enable(J),g[J]=!0)}function Ot(J){g[J]!==!1&&(s.disable(J),g[J]=!1)}function ce(J,Gt){return v[J]!==Gt?(s.bindFramebuffer(J,Gt),v[J]=Gt,J===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Gt),J===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Gt),!0):!1}function qt(J,Gt){let Mt=b,kt=!1;if(J){Mt=x.get(Gt),Mt===void 0&&(Mt=[],x.set(Gt,Mt));const Jt=J.textures;if(Mt.length!==Jt.length||Mt[0]!==s.COLOR_ATTACHMENT0){for(let H=0,dt=Jt.length;H<dt;H++)Mt[H]=s.COLOR_ATTACHMENT0+H;Mt.length=Jt.length,kt=!0}}else Mt[0]!==s.BACK&&(Mt[0]=s.BACK,kt=!0);kt&&s.drawBuffers(Mt)}function he(J){return R!==J?(s.useProgram(J),R=J,!0):!1}const Nt={[uo]:s.FUNC_ADD,[s1]:s.FUNC_SUBTRACT,[r1]:s.FUNC_REVERSE_SUBTRACT};Nt[o1]=s.MIN,Nt[l1]=s.MAX;const st={[c1]:s.ZERO,[u1]:s.ONE,[f1]:s.SRC_COLOR,[Wx]:s.SRC_ALPHA,[v1]:s.SRC_ALPHA_SATURATE,[m1]:s.DST_COLOR,[d1]:s.DST_ALPHA,[h1]:s.ONE_MINUS_SRC_COLOR,[qx]:s.ONE_MINUS_SRC_ALPHA,[g1]:s.ONE_MINUS_DST_COLOR,[p1]:s.ONE_MINUS_DST_ALPHA,[_1]:s.CONSTANT_COLOR,[x1]:s.ONE_MINUS_CONSTANT_COLOR,[S1]:s.CONSTANT_ALPHA,[y1]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(J,Gt,Mt,kt,Jt,H,dt,Rt,Ut,Ht){if(J===ha){y===!0&&(Ot(s.BLEND),y=!1);return}if(y===!1&&(St(s.BLEND),y=!0),J!==a1){if(J!==S||Ht!==B){if((w!==uo||O!==uo)&&(s.blendEquation(s.FUNC_ADD),w=uo,O=uo),Ht)switch(J){case po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFunc(s.ONE,s.ONE);break;case U_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case N_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",J);break}else switch(J){case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case U_:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N_:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",J);break}N=null,A=null,D=null,z=null,E.set(0,0,0),L=0,S=J,B=Ht}return}Jt=Jt||Gt,H=H||Mt,dt=dt||kt,(Gt!==w||Jt!==O)&&(s.blendEquationSeparate(Nt[Gt],Nt[Jt]),w=Gt,O=Jt),(Mt!==N||kt!==A||H!==D||dt!==z)&&(s.blendFuncSeparate(st[Mt],st[kt],st[H],st[dt]),N=Mt,A=kt,D=H,z=dt),(Rt.equals(E)===!1||Ut!==L)&&(s.blendColor(Rt.r,Rt.g,Rt.b,Ut),E.copy(Rt),L=Ut),S=J,B=!1}function Et(J,Gt){J.side===On?Ot(s.CULL_FACE):St(s.CULL_FACE);let Mt=J.side===Jn;Gt&&(Mt=!Mt),Tt(Mt),J.blending===po&&J.transparent===!1?vt(ha):vt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),u.setFunc(J.depthFunc),u.setTest(J.depthTest),u.setMask(J.depthWrite),c.setMask(J.colorWrite);const kt=J.stencilWrite;h.setTest(kt),kt&&(h.setMask(J.stencilWriteMask),h.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),h.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Lt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?St(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(J){W!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),W=J)}function bt(J){J!==n1?(St(s.CULL_FACE),J!==Z&&(J===D_?s.cullFace(s.BACK):J===i1?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),Z=J}function zt(J){J!==$&&(V&&s.lineWidth(J),$=J)}function Lt(J,Gt,Mt){J?(St(s.POLYGON_OFFSET_FILL),(Y!==Gt||j!==Mt)&&(Y=Gt,j=Mt,u.getReversed()&&(Gt=-Gt),s.polygonOffset(Gt,Mt))):Ot(s.POLYGON_OFFSET_FILL)}function Yt(J){J?St(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function se(J){J===void 0&&(J=s.TEXTURE0+F-1),ht!==J&&(s.activeTexture(J),ht=J)}function X(J,Gt,Mt){Mt===void 0&&(ht===null?Mt=s.TEXTURE0+F-1:Mt=ht);let kt=P[Mt];kt===void 0&&(kt={type:void 0,texture:void 0},P[Mt]=kt),(kt.type!==J||kt.texture!==Gt)&&(ht!==Mt&&(s.activeTexture(Mt),ht=Mt),s.bindTexture(J,Gt||at[J]),kt.type=J,kt.texture=Gt)}function de(){const J=P[ht];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function _e(){try{s.compressedTexImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function T(){try{s.texSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Q(){try{s.texSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function it(){try{s.compressedTexSubImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function xt(){try{s.compressedTexSubImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function It(){try{s.texStorage2D(...arguments)}catch(J){He("WebGLState:",J)}}function Bt(){try{s.texStorage3D(...arguments)}catch(J){He("WebGLState:",J)}}function mt(){try{s.texImage2D(...arguments)}catch(J){He("WebGLState:",J)}}function yt(){try{s.texImage3D(...arguments)}catch(J){He("WebGLState:",J)}}function Ft(J){return _[J]!==void 0?_[J]:s.getParameter(J)}function $t(J,Gt){_[J]!==Gt&&(s.pixelStorei(J,Gt),_[J]=Gt)}function Zt(J){Pt.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),Pt.copy(J))}function Xt(J){Vt.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),Vt.copy(J))}function oe(J,Gt){let Mt=p.get(Gt);Mt===void 0&&(Mt=new WeakMap,p.set(Gt,Mt));let kt=Mt.get(J);kt===void 0&&(kt=s.getUniformBlockIndex(Gt,J.name),Mt.set(J,kt))}function fe(J,Gt){const kt=p.get(Gt).get(J);d.get(Gt)!==kt&&(s.uniformBlockBinding(Gt,kt,J.__bindingPointIndex),d.set(Gt,kt))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},_={},ht=null,P={},v={},x=new WeakMap,b=[],R=null,y=!1,S=null,w=null,N=null,A=null,O=null,D=null,z=null,E=new ae(0,0,0),L=0,B=!1,W=null,Z=null,$=null,Y=null,j=null,Pt.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:St,disable:Ot,bindFramebuffer:ce,drawBuffers:qt,useProgram:he,setBlending:vt,setMaterial:Et,setFlipSided:Tt,setCullFace:bt,setLineWidth:zt,setPolygonOffset:Lt,setScissorTest:Yt,activeTexture:se,bindTexture:X,unbindTexture:de,compressedTexImage2D:_e,compressedTexImage3D:I,texImage2D:mt,texImage3D:yt,pixelStorei:$t,getParameter:Ft,updateUBOMapping:oe,uniformBlockBinding:fe,texStorage2D:It,texStorage3D:Bt,texSubImage2D:T,texSubImage3D:Q,compressedTexSubImage2D:it,compressedTexSubImage3D:xt,scissor:Zt,viewport:Xt,reset:me}}function ew(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,g=new WeakMap,_=new Set;let v;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,T){return b?new OffscreenCanvas(I,T):Qu("canvas")}function y(I,T,Q){let it=1;const xt=_e(I);if((xt.width>Q||xt.height>Q)&&(it=Q/Math.max(xt.width,xt.height)),it<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const It=Math.floor(it*xt.width),Bt=Math.floor(it*xt.height);v===void 0&&(v=R(It,Bt));const mt=T?R(It,Bt):v;return mt.width=It,mt.height=Bt,mt.getContext("2d").drawImage(I,0,0,It,Bt),xe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+It+"x"+Bt+")."),mt}else return"data"in I&&xe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),I;return I}function S(I){return I.generateMipmaps}function w(I){s.generateMipmap(I)}function N(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(I,T,Q,it,xt,It=!1){if(I!==null){if(s[I]!==void 0)return s[I];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Bt;it&&(Bt=t.get("EXT_texture_norm16"),Bt||xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let mt=T;if(T===s.RED&&(Q===s.FLOAT&&(mt=s.R32F),Q===s.HALF_FLOAT&&(mt=s.R16F),Q===s.UNSIGNED_BYTE&&(mt=s.R8),Q===s.UNSIGNED_SHORT&&Bt&&(mt=Bt.R16_EXT),Q===s.SHORT&&Bt&&(mt=Bt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(mt=s.R8UI),Q===s.UNSIGNED_SHORT&&(mt=s.R16UI),Q===s.UNSIGNED_INT&&(mt=s.R32UI),Q===s.BYTE&&(mt=s.R8I),Q===s.SHORT&&(mt=s.R16I),Q===s.INT&&(mt=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(mt=s.RG32F),Q===s.HALF_FLOAT&&(mt=s.RG16F),Q===s.UNSIGNED_BYTE&&(mt=s.RG8),Q===s.UNSIGNED_SHORT&&Bt&&(mt=Bt.RG16_EXT),Q===s.SHORT&&Bt&&(mt=Bt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(mt=s.RG8UI),Q===s.UNSIGNED_SHORT&&(mt=s.RG16UI),Q===s.UNSIGNED_INT&&(mt=s.RG32UI),Q===s.BYTE&&(mt=s.RG8I),Q===s.SHORT&&(mt=s.RG16I),Q===s.INT&&(mt=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),Q===s.UNSIGNED_INT&&(mt=s.RGB32UI),Q===s.BYTE&&(mt=s.RGB8I),Q===s.SHORT&&(mt=s.RGB16I),Q===s.INT&&(mt=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),Q===s.UNSIGNED_INT&&(mt=s.RGBA32UI),Q===s.BYTE&&(mt=s.RGBA8I),Q===s.SHORT&&(mt=s.RGBA16I),Q===s.INT&&(mt=s.RGBA32I)),T===s.RGB&&(Q===s.UNSIGNED_SHORT&&Bt&&(mt=Bt.RGB16_EXT),Q===s.SHORT&&Bt&&(mt=Bt.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(mt=s.R11F_G11F_B10F)),T===s.RGBA){const yt=It?Ju:ze.getTransfer(xt);Q===s.FLOAT&&(mt=s.RGBA32F),Q===s.HALF_FLOAT&&(mt=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(mt=yt===Ze?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&Bt&&(mt=Bt.RGBA16_EXT),Q===s.SHORT&&Bt&&(mt=Bt.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function O(I,T){let Q;return I?T===null||T===pa||T===Bl?Q=s.DEPTH24_STENCIL8:T===Qi?Q=s.DEPTH32F_STENCIL8:T===Il&&(Q=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===pa||T===Bl?Q=s.DEPTH_COMPONENT24:T===Qi?Q=s.DEPTH_COMPONENT32F:T===Il&&(Q=s.DEPTH_COMPONENT16),Q}function D(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Wn&&I.minFilter!==Kn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function z(I){const T=I.target;T.removeEventListener("dispose",z),L(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&_.delete(T)}function E(I){const T=I.target;T.removeEventListener("dispose",E),W(T)}function L(I){const T=a.get(I);if(T.__webglInit===void 0)return;const Q=I.source,it=x.get(Q);if(it){const xt=it[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&B(I),Object.keys(it).length===0&&x.delete(Q)}a.remove(I)}function B(I){const T=a.get(I);s.deleteTexture(T.__webglTexture);const Q=I.source,it=x.get(Q);delete it[T.__cacheKey],u.memory.textures--}function W(I){const T=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let xt=0;xt<T.__webglFramebuffer[it].length;xt++)s.deleteFramebuffer(T.__webglFramebuffer[it][xt]);else s.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)s.deleteFramebuffer(T.__webglFramebuffer[it]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=I.textures;for(let it=0,xt=Q.length;it<xt;it++){const It=a.get(Q[it]);It.__webglTexture&&(s.deleteTexture(It.__webglTexture),u.memory.textures--),a.remove(Q[it])}a.remove(I)}let Z=0;function $(){Z=0}function Y(){return Z}function j(I){Z=I}function F(){const I=Z;return I>=o.maxTextures&&xe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,I}function V(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function ut(I,T){const Q=a.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){const it=I.image;if(it===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(Q,I,T);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function nt(I,T){const Q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ot(Q,I,T);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function ht(I,T){const Q=a.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){Ot(Q,I,T);return}n.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function P(I,T){const Q=a.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Q.__version!==I.version){ce(Q,I,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const et={[vp]:s.REPEAT,[Va]:s.CLAMP_TO_EDGE,[_p]:s.MIRRORED_REPEAT},gt={[Wn]:s.NEAREST,[E1]:s.NEAREST_MIPMAP_NEAREST,[ou]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[Ad]:s.LINEAR_MIPMAP_NEAREST,[nr]:s.LINEAR_MIPMAP_LINEAR},Pt={[R1]:s.NEVER,[L1]:s.ALWAYS,[C1]:s.LESS,[xm]:s.LEQUAL,[D1]:s.EQUAL,[Sm]:s.GEQUAL,[U1]:s.GREATER,[N1]:s.NOTEQUAL};function Vt(I,T){if(T.type===Qi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Kn||T.magFilter===Ad||T.magFilter===ou||T.magFilter===nr||T.minFilter===Kn||T.minFilter===Ad||T.minFilter===ou||T.minFilter===nr)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,et[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,et[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,et[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,gt[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,gt[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wn||T.minFilter!==ou&&T.minFilter!==nr||T.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Wt(I,T){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",z));const it=T.source;let xt=x.get(it);xt===void 0&&(xt={},x.set(it,xt));const It=V(T);if(It!==I.__cacheKey){xt[It]===void 0&&(xt[It]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),xt[It].usedTimes++;const Bt=xt[I.__cacheKey];Bt!==void 0&&(xt[I.__cacheKey].usedTimes--,Bt.usedTimes===0&&B(T)),I.__cacheKey=It,I.__webglTexture=xt[It].texture}return Q}function at(I,T,Q){return Math.floor(Math.floor(I/Q)/T)}function St(I,T,Q,it){const It=I.updateRanges;if(It.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,Q,it,T.data);else{It.sort(($t,Zt)=>$t.start-Zt.start);let Bt=0;for(let $t=1;$t<It.length;$t++){const Zt=It[Bt],Xt=It[$t],oe=Zt.start+Zt.count,fe=at(Xt.start,T.width,4),me=at(Zt.start,T.width,4);Xt.start<=oe+1&&fe===me&&at(Xt.start+Xt.count-1,T.width,4)===fe?Zt.count=Math.max(Zt.count,Xt.start+Xt.count-Zt.start):(++Bt,It[Bt]=Xt)}It.length=Bt+1;const mt=n.getParameter(s.UNPACK_ROW_LENGTH),yt=n.getParameter(s.UNPACK_SKIP_PIXELS),Ft=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let $t=0,Zt=It.length;$t<Zt;$t++){const Xt=It[$t],oe=Math.floor(Xt.start/4),fe=Math.ceil(Xt.count/4),me=oe%T.width,J=Math.floor(oe/T.width),Gt=fe,Mt=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,me),n.pixelStorei(s.UNPACK_SKIP_ROWS,J),n.texSubImage2D(s.TEXTURE_2D,0,me,J,Gt,Mt,Q,it,T.data)}I.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,mt),n.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),n.pixelStorei(s.UNPACK_SKIP_ROWS,Ft)}}function Ot(I,T,Q){let it=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=s.TEXTURE_3D);const xt=Wt(I,T),It=T.source;n.bindTexture(it,I.__webglTexture,s.TEXTURE0+Q);const Bt=a.get(It);if(It.version!==Bt.__version||xt===!0){if(n.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Mt=ze.getPrimaries(ze.workingColorSpace),kt=T.colorSpace===Rs?null:ze.getPrimaries(T.colorSpace),Jt=T.colorSpace===Rs||Mt===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let yt=y(T.image,!1,o.maxTextureSize);yt=de(T,yt);const Ft=c.convert(T.format,T.colorSpace),$t=c.convert(T.type);let Zt=A(T.internalFormat,Ft,$t,T.normalized,T.colorSpace,T.isVideoTexture);Vt(it,T);let Xt;const oe=T.mipmaps,fe=T.isVideoTexture!==!0,me=Bt.__version===void 0||xt===!0,J=It.dataReady,Gt=D(T,yt);if(T.isDepthTexture)Zt=O(T.format===ir,T.type),me&&(fe?n.texStorage2D(s.TEXTURE_2D,1,Zt,yt.width,yt.height):n.texImage2D(s.TEXTURE_2D,0,Zt,yt.width,yt.height,0,Ft,$t,null));else if(T.isDataTexture)if(oe.length>0){fe&&me&&n.texStorage2D(s.TEXTURE_2D,Gt,Zt,oe[0].width,oe[0].height);for(let Mt=0,kt=oe.length;Mt<kt;Mt++)Xt=oe[Mt],fe?J&&n.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Xt.width,Xt.height,Ft,$t,Xt.data):n.texImage2D(s.TEXTURE_2D,Mt,Zt,Xt.width,Xt.height,0,Ft,$t,Xt.data);T.generateMipmaps=!1}else fe?(me&&n.texStorage2D(s.TEXTURE_2D,Gt,Zt,yt.width,yt.height),J&&St(T,yt,Ft,$t)):n.texImage2D(s.TEXTURE_2D,0,Zt,yt.width,yt.height,0,Ft,$t,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Zt,oe[0].width,oe[0].height,yt.depth);for(let Mt=0,kt=oe.length;Mt<kt;Mt++)if(Xt=oe[Mt],T.format!==ji)if(Ft!==null)if(fe){if(J)if(T.layerUpdates.size>0){const Jt=mx(Xt.width,Xt.height,T.format,T.type);for(const H of T.layerUpdates){const dt=Xt.data.subarray(H*Jt/Xt.data.BYTES_PER_ELEMENT,(H+1)*Jt/Xt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,H,Xt.width,Xt.height,1,Ft,dt)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Xt.width,Xt.height,yt.depth,Ft,Xt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,Zt,Xt.width,Xt.height,yt.depth,0,Xt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?J&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Xt.width,Xt.height,yt.depth,Ft,$t,Xt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Mt,Zt,Xt.width,Xt.height,yt.depth,0,Ft,$t,Xt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{fe&&me&&n.texStorage2D(s.TEXTURE_2D,Gt,Zt,oe[0].width,oe[0].height);for(let Mt=0,kt=oe.length;Mt<kt;Mt++)Xt=oe[Mt],T.format!==ji?Ft!==null?fe?J&&n.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,Xt.width,Xt.height,Ft,Xt.data):n.compressedTexImage2D(s.TEXTURE_2D,Mt,Zt,Xt.width,Xt.height,0,Xt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?J&&n.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Xt.width,Xt.height,Ft,$t,Xt.data):n.texImage2D(s.TEXTURE_2D,Mt,Zt,Xt.width,Xt.height,0,Ft,$t,Xt.data)}else if(T.isDataArrayTexture)if(fe){if(me&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,Zt,yt.width,yt.height,yt.depth),J)if(T.layerUpdates.size>0){const Mt=mx(yt.width,yt.height,T.format,T.type);for(const kt of T.layerUpdates){const Jt=yt.data.subarray(kt*Mt/yt.data.BYTES_PER_ELEMENT,(kt+1)*Mt/yt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,kt,yt.width,yt.height,1,Ft,$t,Jt)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Ft,$t,yt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Zt,yt.width,yt.height,yt.depth,0,Ft,$t,yt.data);else if(T.isData3DTexture)fe?(me&&n.texStorage3D(s.TEXTURE_3D,Gt,Zt,yt.width,yt.height,yt.depth),J&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Ft,$t,yt.data)):n.texImage3D(s.TEXTURE_3D,0,Zt,yt.width,yt.height,yt.depth,0,Ft,$t,yt.data);else if(T.isFramebufferTexture){if(me)if(fe)n.texStorage2D(s.TEXTURE_2D,Gt,Zt,yt.width,yt.height);else{let Mt=yt.width,kt=yt.height;for(let Jt=0;Jt<Gt;Jt++)n.texImage2D(s.TEXTURE_2D,Jt,Zt,Mt,kt,0,Ft,$t,null),Mt>>=1,kt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Mt=s.canvas;if(Mt.hasAttribute("layoutsubtree")||Mt.setAttribute("layoutsubtree","true"),yt.parentNode!==Mt){Mt.appendChild(yt),_.add(T),Mt.onpaint=kt=>{const Jt=kt.changedElements;for(const H of _)Jt.includes(H.image)&&(H.needsUpdate=!0)},Mt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,yt);else{const Jt=s.RGBA,H=s.RGBA,dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Jt,H,dt,yt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(oe.length>0){if(fe&&me){const Mt=_e(oe[0]);n.texStorage2D(s.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height)}for(let Mt=0,kt=oe.length;Mt<kt;Mt++)Xt=oe[Mt],fe?J&&n.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Ft,$t,Xt):n.texImage2D(s.TEXTURE_2D,Mt,Zt,Ft,$t,Xt);T.generateMipmaps=!1}else if(fe){if(me){const Mt=_e(yt);n.texStorage2D(s.TEXTURE_2D,Gt,Zt,Mt.width,Mt.height)}J&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,$t,yt)}else n.texImage2D(s.TEXTURE_2D,0,Zt,Ft,$t,yt);S(T)&&w(it),Bt.__version=It.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ce(I,T,Q){if(T.image.length!==6)return;const it=Wt(I,T),xt=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);const It=a.get(xt);if(xt.version!==It.__version||it===!0){n.activeTexture(s.TEXTURE0+Q);const Bt=ze.getPrimaries(ze.workingColorSpace),mt=T.colorSpace===Rs?null:ze.getPrimaries(T.colorSpace),yt=T.colorSpace===Rs||Bt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Ft=T.isCompressedTexture||T.image[0].isCompressedTexture,$t=T.image[0]&&T.image[0].isDataTexture,Zt=[];for(let H=0;H<6;H++)!Ft&&!$t?Zt[H]=y(T.image[H],!0,o.maxCubemapSize):Zt[H]=$t?T.image[H].image:T.image[H],Zt[H]=de(T,Zt[H]);const Xt=Zt[0],oe=c.convert(T.format,T.colorSpace),fe=c.convert(T.type),me=A(T.internalFormat,oe,fe,T.normalized,T.colorSpace),J=T.isVideoTexture!==!0,Gt=It.__version===void 0||it===!0,Mt=xt.dataReady;let kt=D(T,Xt);Vt(s.TEXTURE_CUBE_MAP,T);let Jt;if(Ft){J&&Gt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,kt,me,Xt.width,Xt.height);for(let H=0;H<6;H++){Jt=Zt[H].mipmaps;for(let dt=0;dt<Jt.length;dt++){const Rt=Jt[dt];T.format!==ji?oe!==null?J?Mt&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt,0,0,Rt.width,Rt.height,oe,Rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt,me,Rt.width,Rt.height,0,Rt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt,0,0,Rt.width,Rt.height,oe,fe,Rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt,me,Rt.width,Rt.height,0,oe,fe,Rt.data)}}}else{if(Jt=T.mipmaps,J&&Gt){Jt.length>0&&kt++;const H=_e(Zt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,kt,me,H.width,H.height)}for(let H=0;H<6;H++)if($t){J?Mt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Zt[H].width,Zt[H].height,oe,fe,Zt[H].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,Zt[H].width,Zt[H].height,0,oe,fe,Zt[H].data);for(let dt=0;dt<Jt.length;dt++){const Ut=Jt[dt].image[H].image;J?Mt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt+1,0,0,Ut.width,Ut.height,oe,fe,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt+1,me,Ut.width,Ut.height,0,oe,fe,Ut.data)}}else{J?Mt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,oe,fe,Zt[H]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,me,oe,fe,Zt[H]);for(let dt=0;dt<Jt.length;dt++){const Rt=Jt[dt];J?Mt&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt+1,0,0,oe,fe,Rt.image[H]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,dt+1,me,oe,fe,Rt.image[H])}}}S(T)&&w(s.TEXTURE_CUBE_MAP),It.__version=xt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function qt(I,T,Q,it,xt,It){const Bt=c.convert(Q.format,Q.colorSpace),mt=c.convert(Q.type),yt=A(Q.internalFormat,Bt,mt,Q.normalized,Q.colorSpace),Ft=a.get(T),$t=a.get(Q);if($t.__renderTarget=T,!Ft.__hasExternalTextures){const Zt=Math.max(1,T.width>>It),Xt=Math.max(1,T.height>>It);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?n.texImage3D(xt,It,yt,Zt,Xt,T.depth,0,Bt,mt,null):n.texImage2D(xt,It,yt,Zt,Xt,0,Bt,mt,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),se(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,xt,$t.__webglTexture,0,Yt(T)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,xt,$t.__webglTexture,It),n.bindFramebuffer(s.FRAMEBUFFER,null)}function he(I,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const it=T.depthTexture,xt=it&&it.isDepthTexture?it.type:null,It=O(T.stencilBuffer,xt),Bt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;se(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt(T),It,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt(T),It,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,It,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Bt,s.RENDERBUFFER,I)}else{const it=T.textures;for(let xt=0;xt<it.length;xt++){const It=it[xt],Bt=c.convert(It.format,It.colorSpace),mt=c.convert(It.type),yt=A(It.internalFormat,Bt,mt,It.normalized,It.colorSpace);se(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt(T),yt,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt(T),yt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,yt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(I,T,Q){const it=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xt=a.get(T.depthTexture);if(xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),it){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),xt.__webglTexture===void 0){xt.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,xt.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,T.depthTexture);const Ft=c.convert(T.depthTexture.format),$t=c.convert(T.depthTexture.type);let Zt;T.depthTexture.format===Wa?Zt=s.DEPTH_COMPONENT24:T.depthTexture.format===ir&&(Zt=s.DEPTH24_STENCIL8);for(let Xt=0;Xt<6;Xt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xt,0,Zt,T.width,T.height,0,Ft,$t,null)}}else ut(T.depthTexture,0);const It=xt.__webglTexture,Bt=Yt(T),mt=it?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,yt=T.depthTexture.format===ir?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Wa)se(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,mt,It,0,Bt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,mt,It,0);else if(T.depthTexture.format===ir)se(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,mt,It,0,Bt):s.framebufferTexture2D(s.FRAMEBUFFER,yt,mt,It,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(I){const T=a.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const it=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",xt)};it.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=it}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(Q)for(let it=0;it<6;it++)Nt(T.__webglFramebuffer[it],I,it);else{const it=I.texture.mipmaps;it&&it.length>0?Nt(T.__webglFramebuffer[0],I,0):Nt(T.__webglFramebuffer,I,0)}else if(Q){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=s.createRenderbuffer(),he(T.__webglDepthbuffer[it],I,!1);else{const xt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,It),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,It)}}else{const it=I.texture.mipmaps;if(it&&it.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,I,!1);else{const xt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,It),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,It)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(I,T,Q){const it=a.get(I);T!==void 0&&qt(it.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&st(I)}function Et(I){const T=I.texture,Q=a.get(I),it=a.get(T);I.addEventListener("dispose",E);const xt=I.textures,It=I.isWebGLCubeRenderTarget===!0,Bt=xt.length>1;if(Bt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=T.version,u.memory.textures++),It){Q.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[mt]=[];for(let yt=0;yt<T.mipmaps.length;yt++)Q.__webglFramebuffer[mt][yt]=s.createFramebuffer()}else Q.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)Q.__webglFramebuffer[mt]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(Bt)for(let mt=0,yt=xt.length;mt<yt;mt++){const Ft=a.get(xt[mt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&se(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let mt=0;mt<xt.length;mt++){const yt=xt[mt];Q.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[mt]);const Ft=c.convert(yt.format,yt.colorSpace),$t=c.convert(yt.type),Zt=A(yt.internalFormat,Ft,$t,yt.normalized,yt.colorSpace,I.isXRRenderTarget===!0),Xt=Yt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Zt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,Q.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Q.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(It){n.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),Vt(s.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)qt(Q.__webglFramebuffer[mt][yt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else qt(Q.__webglFramebuffer[mt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);S(T)&&w(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Bt){for(let mt=0,yt=xt.length;mt<yt;mt++){const Ft=xt[mt],$t=a.get(Ft);let Zt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Zt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Zt,$t.__webglTexture),Vt(Zt,Ft),qt(Q.__webglFramebuffer,I,Ft,s.COLOR_ATTACHMENT0+mt,Zt,0),S(Ft)&&w(Zt)}n.unbindTexture()}else{let mt=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(mt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(mt,it.__webglTexture),Vt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)qt(Q.__webglFramebuffer[yt],I,T,s.COLOR_ATTACHMENT0,mt,yt);else qt(Q.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,mt,0);S(T)&&w(mt),n.unbindTexture()}I.depthBuffer&&st(I)}function Tt(I){const T=I.textures;for(let Q=0,it=T.length;Q<it;Q++){const xt=T[Q];if(S(xt)){const It=N(I),Bt=a.get(xt).__webglTexture;n.bindTexture(It,Bt),w(It),n.unbindTexture()}}}const bt=[],zt=[];function Lt(I){if(I.samples>0){if(se(I)===!1){const T=I.textures,Q=I.width,it=I.height;let xt=s.COLOR_BUFFER_BIT;const It=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Bt=a.get(I),mt=T.length>1;if(mt)for(let Ft=0;Ft<T.length;Ft++)n.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const yt=I.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Ft=0;Ft<T.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const $t=a.get(T[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,Q,it,0,0,Q,it,xt,s.NEAREST),d===!0&&(bt.length=0,zt.length=0,bt.push(s.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(bt.push(It),zt.push(It),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let Ft=0;Ft<T.length;Ft++){n.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,Bt.__webglColorRenderbuffer[Ft]);const $t=a.get(T[Ft]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,$t,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&d){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Yt(I){return Math.min(o.maxSamples,I.samples)}function se(I){const T=a.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function X(I){const T=u.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function de(I,T){const Q=I.colorSpace,it=I.format,xt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==Ku&&Q!==Rs&&(ze.getTransfer(Q)===Ze?(it!==ji||xt!==Ri)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",Q)),T}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=F,this.resetTextureUnits=$,this.getTextureUnits=Y,this.setTextureUnits=j,this.setTexture2D=ut,this.setTexture2DArray=nt,this.setTexture3D=ht,this.setTextureCube=P,this.rebindTextures=vt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nw(s,t){function n(a,o=Rs){let c;const u=ze.getTransfer(o);if(a===Ri)return s.UNSIGNED_BYTE;if(a===dm)return s.UNSIGNED_SHORT_4_4_4_4;if(a===pm)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Jx)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===Qx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===Zx)return s.BYTE;if(a===Kx)return s.SHORT;if(a===Il)return s.UNSIGNED_SHORT;if(a===hm)return s.INT;if(a===pa)return s.UNSIGNED_INT;if(a===Qi)return s.FLOAT;if(a===mi)return s.HALF_FLOAT;if(a===jx)return s.ALPHA;if(a===$x)return s.RGB;if(a===ji)return s.RGBA;if(a===Wa)return s.DEPTH_COMPONENT;if(a===ir)return s.DEPTH_STENCIL;if(a===mm)return s.RED;if(a===gm)return s.RED_INTEGER;if(a===or)return s.RG;if(a===vm)return s.RG_INTEGER;if(a===_m)return s.RGBA_INTEGER;if(a===Hu||a===Gu||a===Vu||a===ku)if(u===Ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Vu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ku)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===xp||a===Sp||a===yp||a===Mp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===xp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Sp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Mp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===bp||a===Ep||a===Tp||a===Ap||a===wp||a===qu||a===Rp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===bp||a===Ep)return u===Ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Tp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(a===Ap)return c.COMPRESSED_R11_EAC;if(a===wp)return c.COMPRESSED_SIGNED_R11_EAC;if(a===qu)return c.COMPRESSED_RG11_EAC;if(a===Rp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Cp||a===Dp||a===Up||a===Np||a===Lp||a===Op||a===Pp||a===zp||a===Ip||a===Bp||a===Fp||a===Hp||a===Gp||a===Vp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Cp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Dp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Up)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Np)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Lp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Op)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Pp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===zp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ip)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Bp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Fp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Hp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Gp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Vp)return u===Ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kp||a===Xp||a===Wp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===kp)return u===Ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Wp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===qp||a===Yp||a===Yu||a===Zp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===qp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Yp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Yu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Zp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Bl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
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

}`;class sw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new mS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new xn({vertexShader:iw,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new ai(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rw extends cr{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,v=null,x=null,b=null;const R=typeof XRWebGLBinding<"u",y=new sw,S={},w=n.getContextAttributes();let N=null,A=null;const O=[],D=[],z=new Ct;let E=null,L=null;const B=new wi;B.viewport=new pn;const W=new wi;W.viewport=new pn;const Z=[B,W],$=new hE;let Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let St=O[at];return St===void 0&&(St=new Ld,O[at]=St),St.getTargetRaySpace()},this.getControllerGrip=function(at){let St=O[at];return St===void 0&&(St=new Ld,O[at]=St),St.getGripSpace()},this.getHand=function(at){let St=O[at];return St===void 0&&(St=new Ld,O[at]=St),St.getHandSpace()};function F(at){const St=D.indexOf(at.inputSource);if(St===-1)return;const Ot=O[St];Ot!==void 0&&(Ot.update(at.inputSource,at.frame,p||u),Ot.dispatchEvent({type:at.type,data:at.inputSource}))}function V(){o.removeEventListener("select",F),o.removeEventListener("selectstart",F),o.removeEventListener("selectend",F),o.removeEventListener("squeeze",F),o.removeEventListener("squeezestart",F),o.removeEventListener("squeezeend",F),o.removeEventListener("end",V),o.removeEventListener("inputsourceschange",ut);for(let at=0;at<O.length;at++){const St=D[at];St!==null&&(D[at]=null,O[at].disconnect(St))}Y=null,j=null,y.reset();for(const at in S)delete S[at];if(t.setRenderTarget(N),x=null,v=null,_=null,o=null,A=null,Wt.stop(),a.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),L!==null){const at=L.camera;at.fov=L.fov,at.zoom=L.zoom,at.updateProjectionMatrix(),L=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,a.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,a.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(at){if(o=at,o!==null){if(N=t.getRenderTarget(),o.addEventListener("select",F),o.addEventListener("selectstart",F),o.addEventListener("selectend",F),o.addEventListener("squeeze",F),o.addEventListener("squeezestart",F),o.addEventListener("squeezeend",F),o.addEventListener("end",V),o.addEventListener("inputsourceschange",ut),w.xrCompatible!==!0&&await n.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,ce=null,qt=null;w.depth&&(qt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ot=w.stencil?ir:Wa,ce=w.stencil?Bl:pa);const he={colorFormat:n.RGBA8,depthFormat:qt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(he),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),A=new ri(v.textureWidth,v.textureHeight,{format:ji,type:Ri,depthTexture:new Gl(v.textureWidth,v.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Ot={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,n,Ot),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),A=new ri(x.framebufferWidth,x.framebufferHeight,{format:ji,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),Wt.setContext(o),Wt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ut(at){for(let St=0;St<at.removed.length;St++){const Ot=at.removed[St],ce=D.indexOf(Ot);ce>=0&&(D[ce]=null,O[ce].disconnect(Ot))}for(let St=0;St<at.added.length;St++){const Ot=at.added[St];let ce=D.indexOf(Ot);if(ce===-1){for(let he=0;he<O.length;he++)if(he>=D.length){D.push(Ot),ce=he;break}else if(D[he]===null){D[he]=Ot,ce=he;break}if(ce===-1)break}const qt=O[ce];qt&&qt.connect(Ot)}}const nt=new G,ht=new G;function P(at,St,Ot){nt.setFromMatrixPosition(St.matrixWorld),ht.setFromMatrixPosition(Ot.matrixWorld);const ce=nt.distanceTo(ht),qt=St.projectionMatrix.elements,he=Ot.projectionMatrix.elements,Nt=qt[14]/(qt[10]-1),st=qt[14]/(qt[10]+1),vt=(qt[9]+1)/qt[5],Et=(qt[9]-1)/qt[5],Tt=(qt[8]-1)/qt[0],bt=(he[8]+1)/he[0],zt=Nt*Tt,Lt=Nt*bt,Yt=ce/(-Tt+bt),se=Yt*-Tt;if(St.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(se),at.translateZ(Yt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),qt[10]===-1)at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const X=Nt+Yt,de=st+Yt,_e=zt-se,I=Lt+(ce-se),T=vt*st/de*X,Q=Et*st/de*X;at.projectionMatrix.makePerspective(_e,I,T,Q,X,de),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function et(at,St){St===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(St.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(o===null)return;let St=at.near,Ot=at.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(Ot=y.depthFar)),$.near=W.near=B.near=St,$.far=W.far=B.far=Ot,(Y!==$.near||j!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),Y=$.near,j=$.far),$.layers.mask=at.layers.mask|6,B.layers.mask=$.layers.mask&-5,W.layers.mask=$.layers.mask&-3;const ce=at.parent,qt=$.cameras;et($,ce);for(let he=0;he<qt.length;he++)et(qt[he],ce);qt.length===2?P($,B,W):$.projectionMatrix.copy(B.projectionMatrix),L===null&&at.isPerspectiveCamera&&(L={camera:at,fov:at.fov,zoom:at.zoom}),gt(at,$,ce)};function gt(at,St,Ot){Ot===null?at.matrix.copy(St.matrixWorld):(at.matrix.copy(Ot.matrixWorld),at.matrix.invert(),at.matrix.multiply(St.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(St.projectionMatrix),at.projectionMatrixInverse.copy(St.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Hl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(at){d=at,v!==null&&(v.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(at){return S[at]};let Pt=null;function Vt(at,St){if(g=St.getViewerPose(p||u),b=St,g!==null){const Ot=g.views;x!==null&&(t.setRenderTargetFramebuffer(A,x.framebuffer),t.setRenderTarget(A));let ce=!1;Ot.length!==$.cameras.length&&($.cameras.length=0,ce=!0);for(let st=0;st<Ot.length;st++){const vt=Ot[st];let Et=null;if(x!==null)Et=x.getViewport(vt);else{const bt=_.getViewSubImage(v,vt);Et=bt.viewport,st===0&&(t.setRenderTargetTextures(A,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(A))}let Tt=Z[st];Tt===void 0&&(Tt=new wi,Tt.layers.enable(st),Tt.viewport=new pn,Z[st]=Tt),Tt.matrix.fromArray(vt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(vt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Et.x,Et.y,Et.width,Et.height),st===0&&($.matrix.copy(Tt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ce===!0&&$.cameras.push(Tt)}const qt=o.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=a.getBinding();const st=_.getDepthInformation(Ot[0]);st&&st.isValid&&st.texture&&y.init(st,o.renderState)}if(qt&&qt.includes("camera-access")&&R){t.state.unbindTexture(),_=a.getBinding();for(let st=0;st<Ot.length;st++){const vt=Ot[st].camera;if(vt){let Et=S[vt];Et||(Et=new mS,S[vt]=Et);const Tt=_.getCameraImage(vt);Et.sourceTexture=Tt}}}}for(let Ot=0;Ot<O.length;Ot++){const ce=D[Ot],qt=O[Ot];ce!==null&&qt!==void 0&&qt.update(ce,St,p||u)}Pt&&Pt(at,St),St.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:St}),b=null}const Wt=new CS;Wt.setAnimationLoop(Vt),this.setAnimationLoop=function(at){Pt=at},this.dispose=function(){}}}const ow=new Ye,zS=new ye;zS.set(-1,0,0,0,1,0,0,0,1);function lw(s,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,TS(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,w,N,A){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),_(y,S)):S.isMeshPhongMaterial?(c(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&x(y,S,A)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),R(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?d(y,S,w,N):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=t.get(S),N=w.envMap,A=w.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(A)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(zS),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,w,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=N*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const w=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function cw(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,O){const D=O.program;a.uniformBlockBinding(A,D)}function p(A,O){let D=o[A.id];D===void 0&&(y(A),D=g(A),o[A.id]=D,A.addEventListener("dispose",w));const z=O.program;a.updateUBOMapping(A,z);const E=t.render.frame;c[A.id]!==E&&(v(A),c[A.id]=E)}function g(A){const O=_();A.__bindingPointIndex=O;const D=s.createBuffer(),z=A.__size,E=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,z,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,D),D}function _(){for(let A=0;A<h;A++)if(u.indexOf(A)===-1)return u.push(A),A;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const O=o[A.id],D=A.uniforms,z=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let E=0,L=D.length;E<L;E++){const B=D[E];if(Array.isArray(B))for(let W=0,Z=B.length;W<Z;W++)x(B[W],E,W,z);else x(B,E,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,O,D,z){if(R(A,O,D,z)===!0){const E=A.__offset,L=A.value;if(Array.isArray(L)){let B=0;for(let W=0;W<L.length;W++){const Z=L[W],$=S(Z);b(Z,A.__data,B),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,A.__data)}}function b(A,O,D){typeof A=="number"||typeof A=="boolean"?O[0]=A:A.isMatrix3?(O[0]=A.elements[0],O[1]=A.elements[1],O[2]=A.elements[2],O[3]=0,O[4]=A.elements[3],O[5]=A.elements[4],O[6]=A.elements[5],O[7]=0,O[8]=A.elements[6],O[9]=A.elements[7],O[10]=A.elements[8],O[11]=0):ArrayBuffer.isView(A)?O.set(new A.constructor(A.buffer,A.byteOffset,O.length)):A.toArray(O,D)}function R(A,O,D,z){const E=A.value,L=O+"_"+D;if(z[L]===void 0)return typeof E=="number"||typeof E=="boolean"?z[L]=E:ArrayBuffer.isView(E)?z[L]=E.slice():z[L]=E.clone(),!0;{const B=z[L];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return z[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function y(A){const O=A.uniforms;let D=0;const z=16;for(let L=0,B=O.length;L<B;L++){const W=Array.isArray(O[L])?O[L]:[O[L]];for(let Z=0,$=W.length;Z<$;Z++){const Y=W[Z],j=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,V=j.length;F<V;F++){const ut=j[F],nt=S(ut),ht=D%z,P=ht%nt.boundary,et=ht+P;D+=P,et!==0&&z-et<nt.storage&&(D+=z-et),Y.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=nt.storage}}}const E=D%z;return E>0&&(D+=z-E),A.__size=D,A.__cache={},this}function S(A){const O={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(O.boundary=4,O.storage=4):A.isVector2?(O.boundary=8,O.storage=8):A.isVector3||A.isColor?(O.boundary=16,O.storage=12):A.isVector4?(O.boundary=16,O.storage=16):A.isMatrix3?(O.boundary=48,O.storage=48):A.isMatrix4?(O.boundary=64,O.storage=64):A.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(O.boundary=16,O.storage=A.byteLength):xe("WebGLRenderer: Unsupported uniform value type.",A),O}function w(A){const O=A.target;O.removeEventListener("dispose",w);const D=u.indexOf(O.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(o[O.id]),delete o[O.id],delete c[O.id]}function N(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},c={}}return{bind:d,update:p,dispose:N}}const uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ra=null;function fw(){return ra===null&&(ra=new hS(uw,16,16,or,mi),ra.name="DFG_LUT",ra.minFilter=Kn,ra.magFilter=Kn,ra.wrapS=Va,ra.wrapT=Va,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class hw{constructor(t={}){const{canvas:n=P1(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:x=Ri}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const R=x,y=new Set([_m,vm,gm]),S=new Set([Ri,pa,Il,Bl,dm,pm]),w=new Uint32Array(4),N=new Int32Array(4),A=new G;let O=null,D=null;const z=[],E=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let W=!1,Z=null,$=null,Y=null,j=null;this._outputColorSpace=pi;let F=0,V=0,ut=null,nt=-1,ht=null;const P=new pn,et=new pn;let gt=null;const Pt=new ae(0);let Vt=0,Wt=n.width,at=n.height,St=1,Ot=null,ce=null;const qt=new pn(0,0,Wt,at),he=new pn(0,0,Wt,at);let Nt=!1;const st=new Em;let vt=!1,Et=!1;const Tt=new Ye,bt=new G,zt=new pn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function se(){return ut===null?St:1}let X=a;function de(C,q){return n.getContext(C,q)}let _e,I,T,Q,it,xt,It,Bt,mt,yt,Ft,$t,Zt,Xt,oe,fe,me,J,Gt,Mt,kt,Jt,H;try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${am}`),n.addEventListener("webglcontextlost",Ut,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",Me,!1),X===null){const q="webgl2";if(X=de(q,C),X===null)throw de(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(C){throw n.removeEventListener("webglcontextlost",Ut,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),He("WebGLRenderer: "+C.message),C}function dt(){_e=new f2(X),_e.init(),kt=new nw(X,_e),I=new e2(X,_e,t,kt),T=new tw(X,_e),I.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),$=X.createFramebuffer(),Y=X.createFramebuffer(),j=X.createFramebuffer(),Q=new p2(X),it=new H3,xt=new ew(X,_e,T,it,I,kt,Q),It=new u2(B),Bt=new gE(X),Jt=new $A(X,Bt),mt=new h2(X,Bt,Q,Jt),yt=new g2(X,mt,Bt,Jt,Q),J=new m2(X,I,xt),oe=new n2(it),Ft=new F3(B,It,_e,I,Jt,oe),$t=new lw(B,it),Zt=new V3,Xt=new Z3(_e),me=new jA(B,It,T,yt,b,d),fe=new $3(B,yt,I),H=new cw(X,Q,I,T),Gt=new t2(X,_e,Q),Mt=new d2(X,_e,Q),Q.programs=Ft.programs,B.capabilities=I,B.extensions=_e,B.properties=it,B.renderLists=Zt,B.shadowMap=fe,B.state=T,B.info=Q}R!==Ri&&(L=new _2(R,n.width,n.height,h,o,c));const Rt=new rw(B,X);this.xr=Rt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(C){C!==void 0&&(St=C,this.setSize(Wt,at,!1))},this.getSize=function(C){return C.set(Wt,at)},this.setSize=function(C,q,pt=!0){if(Rt.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=C,at=q,n.width=Math.floor(C*St),n.height=Math.floor(q*St),pt===!0&&(n.style.width=C+"px",n.style.height=q+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Wt*St,at*St).floor()},this.setDrawingBufferSize=function(C,q,pt){Wt=C,at=q,St=pt,n.width=Math.floor(C*pt),n.height=Math.floor(q*pt),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(R===Ri){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(qt)},this.setViewport=function(C,q,pt,rt){C.isVector4?qt.set(C.x,C.y,C.z,C.w):qt.set(C,q,pt,rt),T.viewport(P.copy(qt).multiplyScalar(St).round())},this.getScissor=function(C){return C.copy(he)},this.setScissor=function(C,q,pt,rt){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,q,pt,rt),T.scissor(et.copy(he).multiplyScalar(St).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(C){T.setScissorTest(Nt=C)},this.setOpaqueSort=function(C){Ot=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,pt=!0){let rt=0;if(C){let ot=!1;if(ut!==null){const Qt=ut.texture.format;ot=y.has(Qt)}if(ot){const Qt=ut.texture.type,ne=S.has(Qt),Kt=me.getClearColor(),te=me.getClearAlpha(),ee=Kt.r,be=Kt.g,De=Kt.b;ne?(w[0]=ee,w[1]=be,w[2]=De,w[3]=te,X.clearBufferuiv(X.COLOR,0,w)):(N[0]=ee,N[1]=be,N[2]=De,N[3]=te,X.clearBufferiv(X.COLOR,0,N))}else rt|=X.COLOR_BUFFER_BIT}q&&(rt|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pt&&(rt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&X.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Z=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Ut,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),me.dispose(),Zt.dispose(),Xt.dispose(),it.dispose(),It.dispose(),yt.dispose(),Jt.dispose(),H.dispose(),Ft.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",nn),Rt.removeEventListener("sessionend",Fe),Sn.stop()};function Ut(C){C.preventDefault(),ju("WebGLRenderer: Context Lost."),W=!0}function Ht(){ju("WebGLRenderer: Context Restored."),W=!1;const C=Q.autoReset,q=fe.enabled,pt=fe.autoUpdate,rt=fe.needsUpdate,ot=fe.type;dt(),Q.autoReset=C,fe.enabled=q,fe.autoUpdate=pt,fe.needsUpdate=rt,fe.type=ot}function Me(C){He("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ie(C){const q=C.target;q.removeEventListener("dispose",Ie),dn(q)}function dn(C){Ci(C),it.remove(C)}function Ci(C){const q=it.get(C).programs;q!==void 0&&(q.forEach(function(pt){Ft.releaseProgram(pt)}),C.isShaderMaterial&&Ft.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,pt,rt,ot,Qt){q===null&&(q=Lt);const ne=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Kt=Ka(C,q,pt,rt,ot);T.setMaterial(rt,ne);let te=pt.index,ee=1;if(rt.wireframe===!0){if(te=mt.getWireframeAttribute(pt),te===void 0)return;ee=2}const be=pt.drawRange,De=pt.attributes.position;let re=be.start*ee,Ge=(be.start+be.count)*ee;Qt!==null&&(re=Math.max(re,Qt.start*ee),Ge=Math.min(Ge,(Qt.start+Qt.count)*ee)),te!==null?(re=Math.max(re,0),Ge=Math.min(Ge,te.count)):De!=null&&(re=Math.max(re,0),Ge=Math.min(Ge,De.count));const ln=Ge-re;if(ln<0||ln===1/0)return;Jt.setup(ot,rt,Kt,pt,te);let an,Ae=Gt;if(te!==null&&(an=Bt.get(te),Ae=Mt,Ae.setIndex(an)),ot.isMesh)rt.wireframe===!0?(T.setLineWidth(rt.wireframeLinewidth*se()),Ae.setMode(X.LINES)):Ae.setMode(X.TRIANGLES);else if(ot.isLine){let Tn=rt.linewidth;Tn===void 0&&(Tn=1),T.setLineWidth(Tn*se()),ot.isLineSegments?Ae.setMode(X.LINES):ot.isLineLoop?Ae.setMode(X.LINE_LOOP):Ae.setMode(X.LINE_STRIP)}else ot.isPoints?Ae.setMode(X.POINTS):ot.isSprite&&Ae.setMode(X.TRIANGLES);if(ot.isBatchedMesh)if(_e.get("WEBGL_multi_draw"))Ae.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const Tn=ot._multiDrawStarts,ie=ot._multiDrawCounts,Nn=ot._multiDrawCount,we=te?Bt.get(te).bytesPerElement:1,jn=it.get(rt).currentProgram.getUniforms();for(let gi=0;gi<Nn;gi++)jn.setValue(X,"_gl_DrawID",gi),Ae.render(Tn[gi]/we,ie[gi])}else if(ot.isInstancedMesh)Ae.renderInstances(re,ln,ot.count);else if(pt.isInstancedBufferGeometry){const Tn=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,ie=Math.min(pt.instanceCount,Tn);Ae.renderInstances(re,ln,ie)}else Ae.render(re,ln)};function oi(C,q,pt,rt){Z!==null&&C.isNodeMaterial&&Z.setObject(rt,C),vt===!0&&oe.setState(C,pt,!1),C.transparent===!0&&C.side===On&&C.forceSinglePass===!1?(C.side=Jn,C.needsUpdate=!0,Za(C,q,rt),C.side=sr,C.needsUpdate=!0,Za(C,q,rt),C.side=On):Za(C,q,rt)}this.compile=function(C,q,pt=null){pt===null&&(pt=C),Z!==null&&Z.renderStart(C,q,pt),D=Xt.get(pt),D.init(q),E.push(D),pt.traverseVisible(function(ot){ot.isLight&&ot.layers.test(q.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),C!==pt&&C.traverseVisible(function(ot){ot.isLight&&ot.layers.test(q.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights(),Z!==null&&Z.updateLights(D.state.lightsArray),Et=this.localClippingEnabled,vt=oe.init(this.clippingPlanes,Et),vt===!0&&oe.setGlobalState(this.clippingPlanes,q),Z!==null&&fe.render(D.state.shadowsArray,pt,q);const rt=new Set;return C.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Qt=ot.material;if(Qt)if(Array.isArray(Qt))for(let ne=0;ne<Qt.length;ne++){const Kt=Qt[ne];oi(Kt,pt,q,ot),rt.add(Kt)}else oi(Qt,pt,q,ot),rt.add(Qt)}),D=E.pop(),Z!==null&&Z.renderEnd(),rt},this.compileAsync=function(C,q,pt=null){const rt=this.compile(C,q,pt);return new Promise(ot=>{function Qt(){if(rt.forEach(function(ne){const te=it.get(ne).currentProgram;(te===void 0||te.isReady())&&rt.delete(ne)}),rt.size===0){ot(C);return}setTimeout(Qt,10)}_e.get("KHR_parallel_shader_compile")!==null?Qt():setTimeout(Qt,10)})};let on=null;function bn(C){on&&on(C)}function nn(){Sn.stop()}function Fe(){Sn.start()}const Sn=new CS;Sn.setAnimationLoop(bn),typeof self<"u"&&Sn.setContext(self),this.setAnimationLoop=function(C){on=C,Rt.setAnimationLoop(C),C===null?Sn.stop():Sn.start()},Rt.addEventListener("sessionstart",nn),Rt.addEventListener("sessionend",Fe),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;Z!==null&&Z.renderStart(C,q);const pt=Rt.enabled===!0&&Rt.isPresenting===!0,rt=L!==null&&(ut===null||pt)&&L.begin(B,ut);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(q),q=Rt.getCamera()),C.isScene===!0&&C.onBeforeRender(B,C,q,ut),D=Xt.get(C,E.length),D.init(q),D.state.textureUnits=xt.getTextureUnits(),E.push(D),Tt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),st.setFromProjectionMatrix(Tt,ca,q.reversedDepth),Et=this.localClippingEnabled,vt=oe.init(this.clippingPlanes,Et),O=Zt.get(C,z.length),O.init(),z.push(O),Rt.enabled===!0&&Rt.isPresenting===!0){const ne=B.xr.getDepthSensingMesh();ne!==null&&va(ne,q,-1/0,B.sortObjects)}va(C,q,0,B.sortObjects),O.finish(),Z!==null&&Z.updateLights(D.state.lightsArray),B.sortObjects===!0&&O.sort(Ot,ce),Yt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Yt&&me.addToRenderList(O,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&oe.beginShadows();const ot=D.state.shadowsArray;if(fe.render(ot,C,q),vt===!0&&oe.endShadows(),(rt&&L.hasRenderPass())===!1){const ne=O.opaque,Kt=O.transmissive;if(D.setupLights(),q.isArrayCamera){const te=q.cameras;if(Kt.length>0)for(let ee=0,be=te.length;ee<be;ee++){const De=te[ee];Ql(ne,Kt,C,De)}Yt&&me.render(C);for(let ee=0,be=te.length;ee<be;ee++){const De=te[ee];Jl(O,C,De,De.viewport)}}else Kt.length>0&&Ql(ne,Kt,C,q),Yt&&me.render(C),Jl(O,C,q)}ut!==null&&V===0&&(xt.updateMultisampleRenderTarget(ut),xt.updateRenderTargetMipmap(ut)),rt&&L.end(B),C.isScene===!0&&C.onAfterRender(B,C,q),Jt.resetDefaultState(),nt=-1,ht=null,E.pop(),E.length>0?(D=E[E.length-1],xt.setTextureUnits(D.state.textureUnits),vt===!0&&oe.setGlobalState(B.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,Z!==null&&Z.renderEnd()};function va(C,q,pt,rt){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)pt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)D.pushLightProbeGrid(C);else if(C.isLight)D.pushLight(C),C.castShadow&&D.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(st)){rt&&zt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Tt);const ne=yt.update(C),Kt=C.material;Kt.visible&&O.push(C,ne,Kt,pt,zt.z,null,q)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(st))){const ne=yt.update(C),Kt=C.material;if(rt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),zt.copy(C.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),zt.copy(ne.boundingSphere.center)),zt.applyMatrix4(C.matrixWorld).applyMatrix4(Tt)),Array.isArray(Kt)){const te=ne.groups;for(let ee=0,be=te.length;ee<be;ee++){const De=te[ee],re=Kt[De.materialIndex];re&&re.visible&&O.push(C,ne,re,pt,zt.z,De,q)}}else Kt.visible&&O.push(C,ne,Kt,pt,zt.z,null,q)}}const Qt=C.children;for(let ne=0,Kt=Qt.length;ne<Kt;ne++)va(Qt[ne],q,pt,rt)}function Jl(C,q,pt,rt){const{opaque:ot,transmissive:Qt,transparent:ne}=C;D.setupLightsView(pt),vt===!0&&oe.setGlobalState(B.clippingPlanes,pt),rt&&T.viewport(P.copy(rt)),ot.length>0&&Ns(ot,q,pt),Qt.length>0&&Ns(Qt,q,pt),ne.length>0&&Ns(ne,q,pt),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ql(C,q,pt,rt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[rt.id]===void 0){const re=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[rt.id]=new ri(1,1,{generateMipmaps:!0,type:re?mi:Ri,minFilter:nr,samples:Math.max(4,I.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Qt=D.state.transmissionRenderTarget[rt.id],ne=rt.viewport||P;Qt.setSize(ne.z*B.transmissionResolutionScale,ne.w*B.transmissionResolutionScale);const Kt=B.getRenderTarget(),te=B.getActiveCubeFace(),ee=B.getActiveMipmapLevel();B.setRenderTarget(Qt),B.getClearColor(Pt),Vt=B.getClearAlpha(),Vt<1&&B.setClearColor(16777215,.5),B.clear(),Yt&&me.render(pt);const be=B.toneMapping;B.toneMapping=$i;const De=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),D.setupLightsView(rt),vt===!0&&oe.setGlobalState(B.clippingPlanes,rt),Ns(C,pt,rt),xt.updateMultisampleRenderTarget(Qt),xt.updateRenderTargetMipmap(Qt),_e.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let Ge=0,ln=q.length;Ge<ln;Ge++){const an=q[Ge],{object:Ae,geometry:Tn,material:ie,group:Nn}=an;if(ie.side===On&&Ae.layers.test(rt.layers)){const we=ie.side;ie.side=Jn,ie.needsUpdate=!0,Ya(Ae,pt,rt,Tn,ie,Nn),ie.side=we,ie.needsUpdate=!0,re=!0}}re===!0&&(xt.updateMultisampleRenderTarget(Qt),xt.updateRenderTargetMipmap(Qt))}B.setRenderTarget(Kt,te,ee),B.setClearColor(Pt,Vt),De!==void 0&&(rt.viewport=De),B.toneMapping=be}function Ns(C,q,pt){const rt=q.isScene===!0?q.overrideMaterial:null;for(let ot=0,Qt=C.length;ot<Qt;ot++){const ne=C[ot],{object:Kt,geometry:te,group:ee}=ne;let be=ne.material;be.allowOverride===!0&&rt!==null&&(be=rt),Kt.layers.test(pt.layers)&&Ya(Kt,q,pt,te,be,ee)}}function Ya(C,q,pt,rt,ot,Qt){Z!==null&&ot.isNodeMaterial&&Z.setObject(C,ot),C.onBeforeRender(B,q,pt,rt,ot,Qt),C.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ot.onBeforeRender(B,q,pt,rt,C,Qt),ot.transparent===!0&&ot.side===On&&ot.forceSinglePass===!1?(ot.side=Jn,ot.needsUpdate=!0,B.renderBufferDirect(pt,q,rt,ot,C,Qt),ot.side=sr,ot.needsUpdate=!0,B.renderBufferDirect(pt,q,rt,ot,C,Qt),ot.side=On):B.renderBufferDirect(pt,q,rt,ot,C,Qt),C.onAfterRender(B,q,pt,rt,ot,Qt)}function Za(C,q,pt){q.isScene!==!0&&(q=Lt);const rt=it.get(C),ot=D.state.lights,Qt=D.state.shadowsArray,ne=ot.state.version,Kt=Ft.getParameters(C,ot.state,Qt,q,pt,D.state.lightProbeGridArray),te=Ft.getProgramCacheKey(Kt);let ee=rt.programs;rt.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,rt.fog=q.fog;const be=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;rt.envMap=It.get(C.envMap||rt.environment,be),rt.envMapRotation=rt.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ee===void 0&&(C.addEventListener("dispose",Ie),ee=new Map,rt.programs=ee);let De=ee.get(te);if(De!==void 0){if(rt.currentProgram===De&&rt.lightsStateVersion===ne)return xa(C,Kt),De}else Kt.uniforms=Ft.getUniforms(C),Z!==null&&C.isNodeMaterial&&Z.build(C,pt,Kt),C.onBeforeCompile(Kt,B),De=Ft.acquireProgram(Kt,te),ee.set(te,De),rt.uniforms=Kt.uniforms;const re=rt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(re.clippingPlanes=oe.uniform),xa(C,Kt),rt.needsLights=jl(C),rt.lightsStateVersion=ne,rt.needsLights&&(re.ambientLightColor.value=ot.state.ambient,re.lightProbe.value=ot.state.probe,re.sunLights.value=ot.state.sun,re.sunLightShadows.value=ot.state.sunShadow,re.directionalLights.value=ot.state.directional,re.directionalLightShadows.value=ot.state.directionalShadow,re.spotLights.value=ot.state.spot,re.spotLightShadows.value=ot.state.spotShadow,re.rectAreaLights.value=ot.state.rectArea,re.ltc_1.value=ot.state.rectAreaLTC1,re.ltc_2.value=ot.state.rectAreaLTC2,re.pointLights.value=ot.state.point,re.pointLightShadows.value=ot.state.pointShadow,re.hemisphereLights.value=ot.state.hemi,re.sunShadowMatrix.value=ot.state.sunShadowMatrix,re.sunShadowCascade.value=ot.state.sunShadowCascade,re.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,re.spotLightMatrix.value=ot.state.spotLightMatrix,re.spotLightMap.value=ot.state.spotLightMap,re.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=D.state.lightProbeGridArray.length>0,rt.currentProgram=De,rt.uniformsList=null,De}function _a(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Xu.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function xa(C,q){const pt=it.get(C);pt.outputColorSpace=q.outputColorSpace,pt.batching=q.batching,pt.batchingColor=q.batchingColor,pt.instancing=q.instancing,pt.instancingColor=q.instancingColor,pt.instancingMorph=q.instancingMorph,pt.skinning=q.skinning,pt.morphTargets=q.morphTargets,pt.morphNormals=q.morphNormals,pt.morphColors=q.morphColors,pt.morphTargetsCount=q.morphTargetsCount,pt.numClippingPlanes=q.numClippingPlanes,pt.numIntersection=q.numClipIntersection,pt.vertexAlphas=q.vertexAlphas,pt.vertexTangents=q.vertexTangents,pt.toneMapping=q.toneMapping}function Ls(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;A.setFromMatrixPosition(q.matrixWorld);for(let pt=0,rt=C.length;pt<rt;pt++){const ot=C[pt];if(ot.texture!==null&&ot.boundingBox.containsPoint(A))return ot}return null}function Ka(C,q,pt,rt,ot){q.isScene!==!0&&(q=Lt),xt.resetTextureUnits();const Qt=q.fog,ne=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?q.environment:null,Kt=ut===null?B.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:ze.workingColorSpace,te=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,ee=It.get(rt.envMap||ne,te),be=rt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,De=!!pt.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),re=!!pt.morphAttributes.position,Ge=!!pt.morphAttributes.normal,ln=!!pt.morphAttributes.color;let an=$i;rt.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(an=B.toneMapping);const Ae=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Tn=Ae!==void 0?Ae.length:0,ie=it.get(rt),Nn=D.state.lights;if(vt===!0&&(Et===!0||C!==ht)){const je=C===ht&&rt.id===nt;oe.setState(rt,C,je)}let we=!1;rt.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Nn.state.version||ie.outputColorSpace!==Kt||ot.isBatchedMesh&&ie.batching===!1||!ot.isBatchedMesh&&ie.batching===!0||ot.isBatchedMesh&&ie.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&ie.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&ie.instancing===!1||!ot.isInstancedMesh&&ie.instancing===!0||ot.isSkinnedMesh&&ie.skinning===!1||!ot.isSkinnedMesh&&ie.skinning===!0||ot.isInstancedMesh&&ie.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&ie.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&ie.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&ie.instancingMorph===!1&&ot.morphTexture!==null||ie.envMap!==ee||rt.fog===!0&&ie.fog!==Qt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==oe.numPlanes||ie.numIntersection!==oe.numIntersection)||ie.vertexAlphas!==be||ie.vertexTangents!==De||ie.morphTargets!==re||ie.morphNormals!==Ge||ie.morphColors!==ln||ie.toneMapping!==an||ie.morphTargetsCount!==Tn||!!ie.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,ie.__version=rt.version);let jn=ie.currentProgram;we===!0&&(jn=Za(rt,q,ot),Z&&rt.isNodeMaterial&&Z.onUpdateProgram(rt,jn,ie));let gi=!1,$n=!1,Ja=!1;const Xe=jn.getUniforms(),fn=ie.uniforms;if(T.useProgram(jn.program)&&(gi=!0,$n=!0,Ja=!0),rt.id!==nt&&(nt=rt.id,$n=!0),ie.needsLights){const je=Ls(D.state.lightProbeGridArray,ot);ie.lightProbeGrid!==je&&(ie.lightProbeGrid=je,$n=!0)}if(gi||ht!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xe.setValue(X,"projectionMatrix",C.projectionMatrix),Xe.setValue(X,"viewMatrix",C.matrixWorldInverse);const ta=Xe.map.cameraPosition;ta!==void 0&&ta.setValue(X,bt.setFromMatrixPosition(C.matrixWorld)),I.logarithmicDepthBuffer&&Xe.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Xe.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),ht!==C&&(ht=C,$n=!0,Ja=!0)}if(ie.needsLights&&(Nn.state.sunShadowMap.length>0&&Xe.setValue(X,"sunShadowMap",Nn.state.sunShadowMap,xt),Nn.state.directionalShadowMap.length>0&&Xe.setValue(X,"directionalShadowMap",Nn.state.directionalShadowMap,xt),Nn.state.spotShadowMap.length>0&&Xe.setValue(X,"spotShadowMap",Nn.state.spotShadowMap,xt),Nn.state.pointShadowMap.length>0&&Xe.setValue(X,"pointShadowMap",Nn.state.pointShadowMap,xt)),ot.isSkinnedMesh){Xe.setOptional(X,ot,"bindMatrix"),Xe.setOptional(X,ot,"bindMatrixInverse");const je=ot.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Xe.setValue(X,"boneTexture",je.boneTexture,xt))}ot.isBatchedMesh&&(Xe.setOptional(X,ot,"batchingTexture"),Xe.setValue(X,"batchingTexture",ot._matricesTexture,xt),Xe.setOptional(X,ot,"batchingIdTexture"),Xe.setValue(X,"batchingIdTexture",ot._indirectTexture,xt),Xe.setOptional(X,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Xe.setValue(X,"batchingColorTexture",ot._colorsTexture,xt));const Di=pt.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&J.update(ot,pt,jn),($n||ie.receiveShadow!==ot.receiveShadow)&&(ie.receiveShadow=ot.receiveShadow,Xe.setValue(X,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&q.environment!==null&&(fn.envMapIntensity.value=q.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=fw()),$n){if(Xe.setValue(X,"toneMappingExposure",B.toneMappingExposure),ie.needsLights&&En(fn,Ja),Qt&&rt.fog===!0&&$t.refreshFogUniforms(fn,Qt),$t.refreshMaterialUniforms(fn,rt,St,at,D.state.transmissionRenderTarget[C.id]),ie.needsLights&&ie.lightProbeGrid){const je=ie.lightProbeGrid;fn.probesSH.value=je.texture,fn.probesMin.value.copy(je.boundingBox.min),fn.probesMax.value.copy(je.boundingBox.max),fn.probesResolution.value.copy(je.resolution)}Xu.upload(X,_a(ie),fn,xt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Xu.upload(X,_a(ie),fn,xt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Xe.setValue(X,"center",ot.center),Xe.setValue(X,"modelViewMatrix",ot.modelViewMatrix),Xe.setValue(X,"normalMatrix",ot.normalMatrix),Xe.setValue(X,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){const je=rt.uniformsGroups;for(let ta=0,ki=je.length;ta<ki;ta++){const Ui=je[ta];H.update(Ui,jn),H.bind(Ui,jn)}}return jn}function En(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.sunLights.needsUpdate=q,C.sunLightShadows.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function jl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(C,q,pt){const rt=it.get(C);rt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),it.get(C.texture).__webglTexture=q,it.get(C.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:pt,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const pt=it.get(C);pt.__webglFramebuffer=q,pt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,pt=0){ut=C,F=q,V=pt;let rt=null,ot=!1,Qt=!1;if(C){const Kt=it.get(C);if(Kt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(X.FRAMEBUFFER,Kt.__webglFramebuffer),P.copy(C.viewport),et.copy(C.scissor),gt=C.scissorTest,T.viewport(P),T.scissor(et),T.setScissorTest(gt),nt=-1;return}else if(Kt.__webglFramebuffer===void 0)xt.setupRenderTarget(C);else if(Kt.__hasExternalTextures)xt.rebindTextures(C,it.get(C.texture).__webglTexture,it.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const be=C.depthTexture;if(Kt.__boundDepthTexture!==be){if(be!==null&&it.has(be)&&(C.width!==be.image.width||C.height!==be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(C)}}const te=C.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Qt=!0);const ee=it.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?rt=ee[q][pt]:rt=ee[q],ot=!0):C.samples>0&&xt.useMultisampledRTT(C)===!1?rt=it.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?rt=ee[pt]:rt=ee,P.copy(C.viewport),et.copy(C.scissor),gt=C.scissorTest}else P.copy(qt).multiplyScalar(St).floor(),et.copy(he).multiplyScalar(St).floor(),gt=Nt;if(pt!==0&&(rt=$),T.bindFramebuffer(X.FRAMEBUFFER,rt)&&T.drawBuffers(C,rt),T.viewport(P),T.scissor(et),T.setScissorTest(gt),ot){const Kt=it.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Kt.__webglTexture,pt)}else if(Qt){const Kt=q;for(let te=0;te<C.textures.length;te++){const ee=it.get(C.textures[te]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+te,ee.__webglTexture,pt,Kt)}}else if(C!==null&&pt!==0){const Kt=it.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Kt.__webglTexture,pt)}nt=-1};function bo(C){const q=it.get(C);return(q.__readFormat!==C.format||q.__readType!==C.type)&&(q.__readFormat=C.format,q.__readType=C.type,q.__formatReadable=I.textureFormatReadable(C.format),q.__typeReadable=I.textureTypeReadable(C.type)),q}this.readRenderTargetPixels=function(C,q,pt,rt,ot,Qt,ne,Kt=0){if(!(C&&C.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ne!==void 0&&(te=te[ne]),te){T.bindFramebuffer(X.FRAMEBUFFER,te);try{const ee=C.textures[Kt],be=ee.format,De=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Kt);const re=bo(ee);if(re.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(re.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-rt&&pt>=0&&pt<=C.height-ot&&X.readPixels(q,pt,rt,ot,kt.convert(be),kt.convert(De),Qt)}finally{const ee=ut!==null?it.get(ut).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(C,q,pt,rt,ot,Qt,ne,Kt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=it.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ne!==void 0&&(te=te[ne]),te)if(q>=0&&q<=C.width-rt&&pt>=0&&pt<=C.height-ot){T.bindFramebuffer(X.FRAMEBUFFER,te);const ee=C.textures[Kt],be=ee.format,De=ee.type;C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Kt);const re=bo(ee);if(re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.bufferData(X.PIXEL_PACK_BUFFER,Qt.byteLength,X.STREAM_READ),X.readPixels(q,pt,rt,ot,kt.convert(be),kt.convert(De),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const ln=ut!==null?it.get(ut).__webglFramebuffer:null;T.bindFramebuffer(X.FRAMEBUFFER,ln);const an=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await z1(X,an,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ge),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Qt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ge),X.deleteSync(an),Qt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,pt=0){const rt=Math.pow(2,-pt),ot=Math.floor(C.image.width*rt),Qt=Math.floor(C.image.height*rt),ne=q!==null?q.x:0,Kt=q!==null?q.y:0;xt.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,pt,0,0,ne,Kt,ot,Qt),T.unbindTexture()},this.copyTextureToTexture=function(C,q,pt=null,rt=null,ot=0,Qt=0){let ne,Kt,te,ee,be,De,re,Ge,ln;const an=C.isCompressedTexture?C.mipmaps[Qt]:C.image;if(pt!==null)ne=pt.max.x-pt.min.x,Kt=pt.max.y-pt.min.y,te=pt.isBox3?pt.max.z-pt.min.z:1,ee=pt.min.x,be=pt.min.y,De=pt.isBox3?pt.min.z:0;else{const fn=Math.pow(2,-ot);ne=Math.floor(an.width*fn),Kt=Math.floor(an.height*fn),C.isDataArrayTexture?te=an.depth:C.isData3DTexture?te=Math.floor(an.depth*fn):te=1,ee=0,be=0,De=0}rt!==null?(re=rt.x,Ge=rt.y,ln=rt.z):(re=0,Ge=0,ln=0);const Ae=kt.convert(q.format),Tn=kt.convert(q.type);let ie;q.isData3DTexture?(xt.setTexture3D(q,0),ie=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(xt.setTexture2DArray(q,0),ie=X.TEXTURE_2D_ARRAY):(xt.setTexture2D(q,0),ie=X.TEXTURE_2D),T.activeTexture(X.TEXTURE0),T.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const Nn=T.getParameter(X.UNPACK_ROW_LENGTH),we=T.getParameter(X.UNPACK_IMAGE_HEIGHT),jn=T.getParameter(X.UNPACK_SKIP_PIXELS),gi=T.getParameter(X.UNPACK_SKIP_ROWS),$n=T.getParameter(X.UNPACK_SKIP_IMAGES);T.pixelStorei(X.UNPACK_ROW_LENGTH,an.width),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,an.height),T.pixelStorei(X.UNPACK_SKIP_PIXELS,ee),T.pixelStorei(X.UNPACK_SKIP_ROWS,be),T.pixelStorei(X.UNPACK_SKIP_IMAGES,De);const Ja=C.isDataArrayTexture||C.isData3DTexture,Xe=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const fn=it.get(C),Di=it.get(q),je=it.get(fn.__renderTarget),ta=it.get(Di.__renderTarget);T.bindFramebuffer(X.READ_FRAMEBUFFER,je.__webglFramebuffer),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,ta.__webglFramebuffer);for(let ki=0;ki<te;ki++)Ja&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,it.get(C).__webglTexture,ot,De+ki),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,it.get(q).__webglTexture,Qt,ln+ki)),X.blitFramebuffer(ee,be,ne,Kt,re,Ge,ne,Kt,X.DEPTH_BUFFER_BIT,X.NEAREST);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ot!==0||C.isRenderTargetTexture||it.has(C)){const fn=it.get(C),Di=it.get(q);T.bindFramebuffer(X.READ_FRAMEBUFFER,Y),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,j);for(let je=0;je<te;je++)Ja?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,fn.__webglTexture,ot,De+je):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,fn.__webglTexture,ot),Xe?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Di.__webglTexture,Qt,ln+je):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Di.__webglTexture,Qt),ot!==0?X.blitFramebuffer(ee,be,ne,Kt,re,Ge,ne,Kt,X.COLOR_BUFFER_BIT,X.NEAREST):Xe?X.copyTexSubImage3D(ie,Qt,re,Ge,ln+je,ee,be,ne,Kt):X.copyTexSubImage2D(ie,Qt,re,Ge,ee,be,ne,Kt);T.bindFramebuffer(X.READ_FRAMEBUFFER,null),T.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Xe?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(ie,Qt,re,Ge,ln,ne,Kt,te,Ae,Tn,an.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(ie,Qt,re,Ge,ln,ne,Kt,te,Ae,an.data):X.texSubImage3D(ie,Qt,re,Ge,ln,ne,Kt,te,Ae,Tn,an):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Qt,re,Ge,ne,Kt,Ae,Tn,an.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Qt,re,Ge,an.width,an.height,Ae,an.data):X.texSubImage2D(X.TEXTURE_2D,Qt,re,Ge,ne,Kt,Ae,Tn,an);T.pixelStorei(X.UNPACK_ROW_LENGTH,Nn),T.pixelStorei(X.UNPACK_IMAGE_HEIGHT,we),T.pixelStorei(X.UNPACK_SKIP_PIXELS,jn),T.pixelStorei(X.UNPACK_SKIP_ROWS,gi),T.pixelStorei(X.UNPACK_SKIP_IMAGES,$n),Qt===0&&q.generateMipmaps&&X.generateMipmap(ie),T.unbindTexture()},this.initRenderTarget=function(C){it.get(C).__webglFramebuffer===void 0&&xt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xt.setTextureCube(C,0):C.isData3DTexture?xt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xt.setTexture2DArray(C,0):xt.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){F=0,V=0,ut=null,T.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),n.unpackColorSpace=ze._getUnpackColorSpace()}}const Ll={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dw=new hf(-1,1,1,-1,0,1);class pw extends rn{constructor(){super(),this.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ce([0,2,0,0,2,0],2))}}const mw=new pw;class zm{constructor(t){this._mesh=new _n(mw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yl extends hr{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof xn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ql.clone(t.uniforms),this.material=new xn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new zm(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ix extends hr{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class gw extends hr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class vw{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new Ct);this._width=a.width,this._height=a.height,n=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yl(Ll),this.copyPass.material.blending=ha,this.timer=new dE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}Ix!==void 0&&(u instanceof Ix?a=!0:u instanceof gw&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _w extends hr{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ae}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const xw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class So extends hr{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(c,u,{type:mi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new ri(c,u,{type:mi,depthBuffer:!1});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const v=new ri(c,u,{type:mi,depthBuffer:!1});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const h=xw;this.highPassUniforms=ql.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ct(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ql.clone(Ll.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader,premultipliedAlpha:!0,blending:Wu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ae,this._oldClearAlpha=1,this._basic=new Xn,this._fsQuad=new zm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Ct(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[d].uniforms.direction.value=So.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=So.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let u=0;u<t;u++)n.push(.39894*Math.exp(-.5*u*u/(a*a))/a);const o=[],c=[];for(let u=1;u<t;u+=2){const h=n[u],d=u+1<t?n[u+1]:0,p=h+d;o.push((u*h+(u+1)*d)/p),c.push(p)}return new xn({defines:{KERNEL_PAIRS:o.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},centerWeight:{value:n[0]},gaussianOffsets:{value:o},gaussianWeights:{value:c}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new xn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}So.BlurDirectionX=new Ct(1,0);So.BlurDirectionY=new Ct(0,1);const Iu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Sw extends hr{constructor(){super(),this.isOutputPass=!0,this.uniforms=ql.clone(Iu.uniforms),this.material=new AS({name:Iu.name,uniforms:this.uniforms,vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader}),this._fsQuad=new zm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,a){this.uniforms.tDiffuse.value=a.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ze.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===om?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===um?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fm?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cm&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function yw(s,t=!1){const n=s[0].index!==null,a=new Set(Object.keys(s[0].attributes)),o=new Set(Object.keys(s[0].morphAttributes)),c={},u={},h=s[0].morphTargetsRelative,d=new rn;let p=0;for(let g=0;g<s.length;++g){const _=s[g];let v=0;if(n!==(_.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in _.attributes){if(!a.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(_.attributes[x]),v++}if(v!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(h!==_.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in _.morphAttributes){if(!o.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;u[x]===void 0&&(u[x]=[]),u[x].push(_.morphAttributes[x])}if(t){let x;if(n)x=_.index.count;else if(_.attributes.position!==void 0)x=_.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;d.addGroup(p,x,g),p+=x}}if(n){let g=0;const _=[];for(let v=0;v<s.length;++v){const x=s[v].index;for(let b=0;b<x.count;++b)_.push(x.getX(b)+g);g+=s[v].attributes.position.count}d.setIndex(_)}for(const g in c){const _=Bx(c[g]);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;d.setAttribute(g,_)}for(const g in u){const _=u[g][0].length;if(_!==0){d.morphAttributes=d.morphAttributes||{},d.morphAttributes[g]=[];for(let v=0;v<_;++v){const x=[];for(let R=0;R<u[g].length;++R)x.push(u[g][R][v]);const b=Bx(x);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;d.morphAttributes[g].push(b)}}}return d}function Bx(s){let t,n,a,o=-1,c=0;for(let p=0;p<s.length;++p){const g=s[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=g.itemSize),n!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(a===void 0&&(a=g.normalized),a!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=g.gpuType),o!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*n}const u=new t(c),h=new qe(u,n,a);let d=0;for(let p=0;p<s.length;++p){const g=s[p];if(g.isInterleavedBufferAttribute){const _=d/n;for(let v=0,x=g.count;v<x;v++)for(let b=0;b<n;b++){const R=g.getComponent(v,b);h.setComponent(v+_,b,R)}}else u.set(g.array,d);d+=g.count*n}return o!==void 0&&(h.gpuType=o),h}const Mw='"Inter", "Noto Sans SC", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',fa=(s,t=400)=>`${t} ${s}px ${Mw}`;function bw(s){const t=s.textBaseline;s.textBaseline="alphabetic";const n=s.measureText("国");return s.textBaseline=t,(n.actualBoundingBoxAscent-n.actualBoundingBoxDescent)/2}function Zl(s,t,n,a){const o=s.textAlign,c=s.textBaseline,u=bw(s);s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,n,a+u),s.textAlign=o,s.textBaseline=c}function Ol(s){return null}const sp=(s,t,n)=>{"letterSpacing"in s&&(s.letterSpacing=`${(t*n).toFixed(1)}px`)};function Ew(s,t,n){const a=t.split(/\s+/).filter(Boolean),o=[];let c="";for(const u of a){const h=c?`${c} ${u}`:u;c&&s.measureText(h).width>n?(o.push(c),c=u):c=h}return c&&o.push(c),o}function rp(s,t,n,a,o){const c=o?t.map(v=>v.toUpperCase()):t,u=a.weight??700,h=o?.08:0;let d=n.h/(c.length*1.18),p=c;for(;d>4&&(s.font=fa(d,u),sp(s,h,d),p=c.flatMap(x=>Ew(s,x,n.w)),!(Math.max(...p.map(x=>s.measureText(x).width))<=n.w&&p.length*d*1.18<=n.h));d*=.94);s.font=fa(d,u),sp(s,h,d),s.fillStyle=a.color,s.textAlign="center",s.textBaseline="middle";const g=d*1.18,_=n.y+n.h/2-p.length*g/2+g/2;p.forEach((v,x)=>s.fillText(v,n.x+n.w/2,_+x*g)),sp(s,0,d)}function Tw(s,t,n,a){const c=t.toUpperCase().split(/\s+/).filter(Boolean).flatMap((g,_)=>_?[null,...g]:[...g]),u=c.reduce((g,_)=>g+(_===null?.5:1),0),h=Math.min(n.h/u,n.w*1.15),d=h*.8;s.font=fa(d,a.weight??700),s.fillStyle=a.color,s.textAlign="center",s.textBaseline="middle";let p=n.y+n.h/2-u*h/2;for(const g of c){if(g===null){p+=h*.5;continue}s.fillText(g,n.x+n.w/2,p+h/2),p+=h}}function Pl(s,t,n,a){if(s.save(),t.kind==="gloss"){const d=n.h*.72,p=Math.min(d,n.w)*.84;s.fillStyle=a.color,s.font=fa(p,a.weight??700),Zl(s,t.char,n.x+n.w/2,n.y+d/2),rp(s,[t.gloss],{x:n.x,y:n.y+d,w:n.w,h:n.h-d},a,!1),s.restore();return}const o=t.lines,c=o.join(" ").split(/\s+/).filter(Boolean),u=c.length<=4&&o.every(d=>d.length<=26);if(n.h>n.w*1.7){const d=o.join("").replace(/\s/g,"").length;o.length===1&&c.length<=2&&d<=Math.max(4,Math.floor(n.h/n.w*1.6))?Tw(s,o[0],n,a):(s.translate(n.x+n.w/2,n.y+n.h/2),s.rotate(Math.PI/2),rp(s,o,{x:-n.h/2,y:-n.w/2,w:n.h,h:n.w},a,u))}else rp(s,o,n,a,u);s.restore()}const ar=36,rf=s=>Math.min(1,Math.max(0,s)),Ga=s=>{const t=rf(s);return t*t*(3-2*t)};function Aw(s){return()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function IS(s,t){const n=s.getAttribute("position").count,a=new Float32Array(n*3);for(let o=0;o<n;o++)t.toArray(a,o*3);return s.setAttribute("color",new qe(a,3)),s}function nm(s,t,n,a){const u=[],h=[],d=[];for(let g=0;g<=8;g++)for(let _=0;_<=12;_++){const v=_/12*2-1,x=g/8*2-1,b=Math.min((1-Math.abs(x))*t/2,(1-Math.abs(v))*s/2)/(t/2);if(u.push(v*s/2,n*Math.pow(Math.min(1,b),1.5)+n*.25*Math.pow(Math.abs(v*x),5),x*t/2),h.push(_/12,g/8),_<12&&g<8){const R=g*13+_,y=R+12+1;d.push(R,y,R+1,R+1,y,y+1)}}const p=new rn;return p.setAttribute("position",new Ce(u,3)),p.setAttribute("uv",new Ce(h,2)),p.setIndex(d),p.computeVertexNormals(),IS(p.toNonIndexed(),a)}function op(s,t,n){const a=(o,c,u,h,d)=>IS(new qa(o,c,u).translate(0,h,0).toNonIndexed(),new ae(d));return yw([a(.96,.08,.72,.04,n),a(.8,.42,.56,.29,t),nm(1.12,.86,.36,new ae(s)).translate(0,.5,0)])}function lp(s,t,n,a){const o=new ai(s,t,4,6).translate(0,t/2,0),c=o.getAttribute("position"),u=[],h=new ae(n),d=new ae(a),p=new ae;for(let g=0;g<c.count;g++){const _=c.getX(g),v=c.getY(g)/t,x=.3+.7*Math.sin(Math.min(1,v*1.6)*Math.PI/2);c.setXYZ(g,_*x,c.getY(g)+Math.sin(_*60)*.004*v,(_/(s/2))**2*s*.3+Math.sin(v*Math.PI)*t*.1),p.lerpColors(h,d,Math.pow(Math.max(0,v),.8)).toArray(u,u.length)}return o.setAttribute("color",new Ce(u,3)),o.computeVertexNormals(),o}const Bu="#0000ff",BS="#b8283c",ww=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,Rw=`
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
  }`,Cw=`
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
  }`,FS=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`,Dw=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`,HS=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`,Uw={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ct(1,1)},uPaper:{value:new G(.94,.91,.84)},uInk:{value:new G(.11,.09,.08)},uSeal:{value:new G(.66,.2,.13)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${HS}
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
    }`};function Fx(s,t=new ae(1,1,1),{sharp:n=!1,flat:a}={}){return new xn({uniforms:{map:{value:s},uReveal:{value:0},uOpacity:{value:1},uColor:{value:t},uFlat:{value:a??new ae},uFlatOn:{value:a?1:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor, uFlat;
      uniform float uFlatOn;
      varying vec2 vUv;
      ${HS}
      void main() {
        // Writing samples a sharper mip level, so characters stay crisp when shown small.
        vec4 texel = texture2D(map, vUv${n?", -0.5":""});
        float n = noise(vUv * vec2(5.0, 10.0)) * 0.6 + noise(vUv * 40.0) * 0.4;
        float alpha = texel.a * smoothstep(n - 0.08, n + 0.08, uReveal * 1.3 - 0.15) * uOpacity;
        if (alpha < 0.02) discard;
        // Writing drawn over the finished ink picture uses one flat, display-ready colour.
        gl_FragColor = vec4(uFlatOn > 0.5 ? uFlat : texel.rgb * uColor, alpha);
      }`,transparent:!0,depthWrite:!1})}const GS=1,Nw={ink:new ae(.11,.09,.08),red:new ae(.64,.19,.13)};class Lw extends hr{constructor(t,n){super(),this.scene=t,this.camera=n,this.needsSwap=!1}render(t,n,a){const o=t.autoClear,c=this.camera.layers.mask;t.autoClear=!1,this.camera.layers.set(GS),t.setRenderTarget(this.renderToScreen?null:a),t.clearDepth(),t.render(this.scene,this.camera),this.camera.layers.mask=c,t.autoClear=o}}function cp(s,t,n,a){s(),!(typeof document>"u"||!document.fonts)&&document.fonts.load(n,a).then(()=>{s(),t.needsUpdate=!0},()=>{})}function Hx(s,t,n=Nw.ink){s.layers.set(GS),t.uniforms.uFlat.value=n,t.uniforms.uFlatOn.value=1}function Ow(s,t,n,a,o,c="night"){const u=new hw({antialias:!0,powerPreference:"high-performance"});u.setPixelRatio(Math.min(devicePixelRatio,2)),u.outputColorSpace=pi,u.toneMapping=c==="ink"?$i:uf,u.toneMappingExposure=1.1,u.domElement.setAttribute("aria-hidden","true"),u.domElement.style.cssText="width:100%;height:100%;display:block",s.appendChild(u.domElement);const h=new sS,d=new bm(2763846,.0055);h.fog=d;const p=new wi(40,1,.05,1200),g=new vw(u);g.addPass(new _w(h,p));const _=new So(new Ct(256,256),.9,.55,.85);g.addPass(_),g.addPass(new Sw);const v=c==="ink"?new Yl(Uw):void 0;v&&(_.enabled=!1,g.addPass(v),g.addPass(new Lw(h,p)),g.addPass(new Yl(Ll)));const x=new Set;let b=!1,R=!1,y=0,S=0,w=-1,N,A=()=>{};const O=z=>{z.preventDefault(),R=!1,A(),n()},D=()=>{if(b)return;b=!0,N==null||N.disconnect(),u.setAnimationLoop(null),document.removeEventListener("visibilitychange",A),u.domElement.removeEventListener("webglcontextlost",O);const z=new Set;h.traverse(E=>{const L=E;L.geometry&&!(E instanceof uS)&&L.geometry.dispose(),L.material&&[].concat(L.material).forEach(B=>z.add(B))}),z.forEach(E=>E.dispose()),x.forEach(E=>E.dispose()),g.passes.forEach(E=>E.dispose()),g.dispose(),u.dispose(),u.forceContextLoss(),u.domElement.remove()};try{const z=Aw(a),E={uTime:{value:0},uScale:{value:1}},L=(Nt,st=0,vt=0,Et=0)=>{const Tt=new fo;return Tt.position.set(st,vt,Et),Nt.add(Tt),Tt},B=(Nt,st,vt,Et=0,Tt=0,bt=0)=>{const zt=new _n(Nt,st);return zt.position.set(Et,Tt,bt),vt.add(zt),zt},W=(Nt,st,[vt,Et,Tt],[bt,zt,Lt])=>B(new qa(bt,zt,Lt),st,Nt,vt,Et,Tt),Z=(Nt,st=!1)=>{const vt=new bb(Nt);return vt.colorSpace=pi,st&&(vt.anisotropy=u.capabilities.getMaxAnisotropy()),x.add(vt),vt},$=(Nt,st={})=>new Lm({color:Nt,...st}),Y=new Xn({color:329483,side:On}),j=(Nt,st)=>{const vt=new rn,Et=new Float32Array(st.length*3),Tt=new Float32Array(st.length*3),bt=new Float32Array(st.length),zt=new Float32Array(st.length),Lt=new Float32Array(st.length);st.forEach(([se,X,de,_e],I)=>{Et.set(se,I*3),X.toArray(Tt,I*3),bt[I]=de,zt[I]=_e,Lt[I]=z()}),vt.setAttribute("position",new qe(Et,3)),vt.setAttribute("aColor",new qe(Tt,3)),vt.setAttribute("aSize",new qe(bt,1)),vt.setAttribute("aOn",new qe(zt,1)),vt.setAttribute("aSeed",new qe(Lt,1));const Yt=new tf(vt,new xn({uniforms:E,vertexShader:Cw,fragmentShader:c==="ink"?FS:Dw,blending:c==="ink"?po:Wu,transparent:!0,depthWrite:!1}));return Yt.frustumCulled=!1,Nt.add(Yt),Yt},F=(Nt,st=16753228)=>new ae(st).multiplyScalar(Nt),V=(Nt,[st,vt,Et],Tt=1)=>{const bt=L(Nt,st,vt,Et);bt.scale.setScalar(Tt);const zt=new ua({color:13123626,emissive:16734756,emissiveIntensity:1.8,roughness:.6}),Lt=new ua({color:9071156,roughness:.5,metalness:.4});return B(new oa(1,16,12),zt,bt).scale.set(.22,.27,.22),B(new Vi(.12,.12,.05,12),Lt,bt,0,.27,0),B(new Vi(.12,.12,.05,12),Lt,bt,0,-.27,0),B(new Vi(.008,.008,.6,4),Lt,bt,0,.58,0),B(new Vi(.03,.005,.28,6),zt,bt,0,-.43,0),bt},ut=Nt=>{const st=new Vl(Nt.map(([,Tt])=>new G(...Tt)),!1,"centripetal"),vt=new Vl(Nt.map(([,,Tt])=>new G(...Tt)),!1,"centripetal"),Et=new G;return Tt=>{const bt=Nt[0][0],zt=Nt[Nt.length-1][0],Lt=bt+(zt-bt)*Ga((Tt-bt)/(zt-bt));let Yt=0;for(;Yt<Nt.length-2&&Lt>Nt[Yt+1][0];)Yt++;const se=(Yt+rf((Lt-Nt[Yt][0])/(Nt[Yt+1][0]-Nt[Yt][0])))/(Nt.length-1);p.position.copy(st.getPoint(se)),p.lookAt(vt.getPoint(se,Et))}},nt=new xn({uniforms:{uTop:{value:new ae},uHorizon:{value:new ae},uGlow:{value:new ae},uMoon:{value:new G},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:ww,fragmentShader:Rw,side:Jn,depthWrite:!1,fog:!1}),ht=B(new oa(500,48,24),nt,h);ht.renderOrder=-1,ht.frustumCulled=!1,h.add(new lE(c==="ink"?9408399:8228799,c==="ink"?2236962:2760476,.55));const P=new Pm(c==="ink"?12369084:11124198,1.1);h.add(P,P.target);const et=new G;let gt;const St=o({renderer:u,addEffect:Nt=>g.addPass(Nt),scene:h,camera:p,rand:z,shared:E,ink:Y,group:L,mesh:B,box:W,lambert:$,canvasTexture:Z,glows:j,warm:F,lantern:V,path:ut,setEnv:Nt=>{Nt!==gt&&(gt=Nt,nt.uniforms.uTop.value.setHex(Nt.top),nt.uniforms.uHorizon.value.setHex(Nt.horizon),nt.uniforms.uGlow.value.setHex(Nt.glow),et.set(Nt.moon[0],Nt.moon[1],Nt.moon[2]).normalize(),nt.uniforms.uMoon.value.copy(et),nt.uniforms.uMoonSize.value=Nt.moonSize,nt.uniforms.uMoonGain.value=Nt.moonGain,nt.uniforms.uStars.value=Nt.stars,_.strength=Nt.bloom,d.color.setHex(Nt.fog),d.density=Nt.density,P.intensity=Nt.moon[1]>0?1.1:.15)},portrait:()=>p.aspect<.9,calligraphy:(Nt,st,{size:vt=1,columns:Et=1}={})=>{const Tt=[...st],bt=Math.ceil(Tt.length/Et),zt=Math.min(768,Math.max(256,Math.ceil(vt*320/64)*64),Math.floor(4096/Math.max(bt,Et))),Lt=document.createElement("canvas");Lt.width=Et*zt,Lt.height=bt*zt;const Yt=Lt.getContext("2d"),se=fa(zt*.86,vt>=.8?700:500),X=Ol(Et>1?Array.from({length:Et},(Q,it)=>Tt.slice(it*bt,(it+1)*bt).join("")):st),de=()=>{if(Yt.clearRect(0,0,Lt.width,Lt.height),X){Pl(Yt,X,{x:zt*.06,y:zt*.06,w:Lt.width-zt*.12,h:Lt.height-zt*.12},{color:Bu});return}Yt.fillStyle=Bu,Yt.font=se,Tt.forEach((Q,it)=>Zl(Yt,Q,(Et-1-Math.floor(it/bt)+.5)*zt,(it%bt+.5)*zt))},_e=Z(Lt,!0);cp(de,_e,se,st);const I=Fx(_e,void 0,{sharp:!0}),T=B(new ai(Et*vt,bt*vt),I,Nt);return c==="ink"&&Hx(T,I),{mesh:T,material:I}},glyph:(Nt,st)=>{const Tt=document.createElement("canvas");Tt.width=Tt.height=1024;const bt=Tt.getContext("2d");bt.scale(5.12,5.12);const zt=Ol(st),Lt=()=>{if(bt.clearRect(0,0,200,200),zt){Pl(bt,zt,{x:8,y:20,w:184,h:160},{color:Bu});return}bt.fillStyle=Bu,bt.textAlign="center",bt.textBaseline="middle",bt.font=fa(176,700),bt.fillText(st,100,104)},Yt=Z(Tt,!0);cp(Lt,Yt,fa(176,700),st);const se=Fx(Yt,void 0,{sharp:!0}),X=B(new ai(1,1),se,Nt);return c==="ink"&&Hx(X,se),{mesh:X,material:se}},seal:(Nt,st="品花",vt=1.8)=>{const bt=document.createElement("canvas");bt.width=bt.height=256;const zt=bt.getContext("2d");zt.scale(2,2);const Lt=[...st],Yt=Lt.length>2?2:1,se=Math.ceil(Lt.length/Yt),X=fa(Math.floor(100/se),700),de=Ol(st),_e=()=>{if(zt.clearRect(0,0,128,128),zt.fillStyle=BS,zt.fillRect(6,6,116,116),de){Pl(zt,de,{x:14,y:14,w:100,h:100},{color:"#f4ece0"});return}zt.fillStyle="#f4ece0",zt.font=X,Lt.forEach((Q,it)=>Zl(zt,Q,64+(Yt===2?Math.floor(it/se)?-26:26:0),12+(it%se+.5)*(104/se)))},I=Z(bt,!0);cp(_e,I,X,st);const T=new Xn({map:I,transparent:!0,opacity:0,fog:!1});return{mesh:B(new ai(vt,vt),T,Nt),material:T}}}),Ot=()=>{E.uTime.value=y,St(y),P.position.copy(p.position).addScaledVector(et,100),P.target.position.copy(p.position),ht.position.copy(p.position),g.render()},ce=40,qt=()=>{if(b)return;const{width:Nt,height:st}=s.getBoundingClientRect(),vt=Math.max(1,Nt),Et=Math.max(1,st);u.setSize(vt,Et,!1),g.setPixelRatio(u.getPixelRatio()),g.setSize(vt,Et),v==null||v.uniforms.uResolution.value.set(vt*u.getPixelRatio(),Et*u.getPixelRatio()),p.aspect=vt/Et;const Tt=2*Math.atan(Math.tan(Ds.degToRad(ce)/2)*1.6);p.fov=Math.min(75,Math.max(ce,Ds.radToDeg(2*Math.atan(Math.tan(Tt/2)/p.aspect)))),p.updateProjectionMatrix(),E.uScale.value=Et*u.getPixelRatio()/(2*Math.tan(Ds.degToRad(p.fov)/2)),Ot()},he=Nt=>{S&&R&&!document.hidden&&(y=Math.min(ar,y+Math.min((Nt-S)/1e3,.1))),S=Nt,Ot(),Math.floor(y*12)!==w&&(w=Math.floor(y*12),t(y)),y>=ar&&(R=!1,u.setAnimationLoop(null))};return A=()=>{S=0,u.setAnimationLoop(R&&!document.hidden?he:null)},N=new ResizeObserver(qt),N.observe(s),document.addEventListener("visibilitychange",A),u.domElement.addEventListener("webglcontextlost",O),qt(),{setPlaying(Nt){R=Nt,A()},seek(Nt){y=Ds.clamp(Nt,0,ar),t(y),Ot(),A()},replay(){y=0,t(0),Ot(),A()},dispose:D}}catch(z){throw D(),z}}function Pw(s){var a;const t=[],{shots:n}=s;if(n.length||t.push("it has no shots"),n.forEach((o,c)=>{const u=c===0?0:n[c-1].end;o.start!==u&&t.push(`shot ${c+1} starts at ${o.start}s, expected ${u}s`),o.end<=o.start&&t.push(`shot ${c+1} ends before it starts`);for(const[h,d]of[["title.en",o.title.en],["title.zh",o.title.zh],["caption.en",o.caption.en],["caption.zh",o.caption.zh],["quote",o.quote]])d.trim()||t.push(`shot ${c+1} has an empty ${h}`)}),n.length&&n[n.length-1].end!==ar&&t.push(`the last shot must end at ${ar}s`),((a=n[0])==null?void 0:a.cut)===!1&&t.push("the first shot cannot continue a previous one"),s.subtitles.forEach((o,c)=>{(o.start<0||o.end>ar||o.end<=o.start)&&t.push(`subtitle ${c+1} must lie between 0 and ${ar}s and end after it starts`),c>0&&o.start<s.subtitles[c-1].end&&t.push(`subtitle ${c+1} overlaps the one before it`),(!o.zh.trim()||!o.en.trim())&&t.push(`subtitle ${c+1} needs both Chinese and English text`)}),t.length)throw new Error(`Invalid cinema story "${s.title.en}": ${t.join("; ")}.`);return s}function VS(s,t){const n=s.findIndex(a=>t<a.end);return n===-1?s.length-1:n}function zw(s,t){return s.find(n=>t>=n.start&&t<n.end)}function Iw(s,t){const n=s.slice(1).filter(o=>o.cut!==!1);if(!n.length)return 0;const a=Math.min(...n.map(o=>Math.abs(t-o.start)));return Math.max(0,1-a/.5)}function Bw(s){return(t,n,a,o)=>Ow(t,a,o,s.seed,c=>{const u=s.build(c,n);return h=>u(h,VS(n.shots,h))},s.style??"ink")}const lo=Pw({title:{en:"The capital, a theatre of feeling",zh:"京华繁梦，一字情深"},description:{en:"From the clouds above the capital, through a moon in a wine cup, a shadow-play screen and a moon gate, to a single word: feeling. The figures represent the unnamed gentlemen and performers in this passage.",zh:"自天边云端降入京城，经杯中月、灯下影、月洞门，终归一个“情”字。画中人物为本段所写的无名君子与优伶。"},shots:[{start:0,end:7,title:{en:"A foot and five from heaven",zh:"尺五天边"},quote:"京师演戏之盛，甲于天下。地当尺五天边，处处歌台舞榭",caption:{en:"Descending through the clouds to a capital that stands almost at heaven’s edge, stage after stage lights up across the city.",zh:"自云端徐徐而下，京城近在天边，歌台舞榭次第亮起。"}},{start:7,end:15,title:{en:"Drunk on the moon, judging flowers",zh:"醉月评花"},quote:"人在大千队里，时时醉月评花。",caption:{en:"Lanterns stream through the streets below. On a tavern terrace the moon floats in a wine cup as a peony opens, and a petal falls in.",zh:"楼下灯火如流，人海熙攘；楼头杯中浮月，牡丹初绽，一瓣落入酒中。"}},{start:15,end:22,title:{en:"A playful brush",zh:"游戏之笔"},quote:"遂以游戏之笔，摹写游戏之人。",caption:{en:"On a lamp-lit shadow-play screen, a brush sketches the city’s players, strange and wonderful, and they begin to move.",zh:"灯影纸幕之上，一支游戏之笔勾出怪怪奇奇的众生，影随笔动。"}},{start:22,end:29,title:{en:"Fond, never wanton",zh:"好色不淫"},quote:"几个用情守礼之君子，与几个洁身自好的优伶",caption:{en:"At a moon gate, a gentleman bows and the performer returns the bow. Blossoms fall between them, and neither crosses the threshold.",zh:"月洞门前，君子长揖，优伶还礼；落花在二人之间飘过，谁也不越那道门槛。"}},{start:29,end:36,title:{en:"One word: feeling",zh:"皆是一个情字"},quote:"先将缙绅中子弟分作十种，皆是一个情字。",caption:{en:"Drops of ink gather into ten kinds of people, and all ten are written with the same character: 情, feeling.",zh:"点点墨迹聚成十种人物，十种终归一字——情。"}}],subtitles:[{start:.4,end:3.6,zh:"京师演戏之盛，甲于天下。",en:"The theatrical arts of the capital are renowned as the finest under heaven."},{start:3.6,end:6.8,zh:"地当尺五天边，处处歌台舞榭；",en:"Here, at the very foot of the celestial throne, singing pavilions and dancing terraces grace every corner;"},{start:7.4,end:11,zh:"人在大千队里，时时醉月评花。",en:"within the bustling multitudes, people spend their days intoxicated by moonlight and evaluating the beauty of the flowers."},{start:11,end:14.6,zh:"真乃说不尽的繁华，描不尽的情态。",en:"Truly, its prosperity defies description and its myriad sentiments exceed depiction."},{start:15.4,end:18.6,zh:"一时闻闻见见，怪怪奇奇，事不出于理之所无，人尽入于情之所有，",en:"The bizarre and wondrous sights here, though strange, do not stray beyond reason, yet touch the depths of human feeling."},{start:18.6,end:21.6,zh:"遂以游戏之笔，摹写游戏之人。",en:"Thus, with a playful brush, I trace the lives of playful souls."},{start:22.4,end:25.8,zh:"而游戏之中最难得者，几个用情守礼之君子，与几个洁身自好的优伶，",en:"Yet the rarest among them are a few gentlemen who love deeply while holding fast to propriety, and a few performers who keep themselves pure,"},{start:25.8,end:28.6,zh:"真合着《国风》好色不淫一句。",en:"perfectly embodying the Airs of the States: “fond of beauty yet not licentious.”"},{start:29.4,end:35.6,zh:"先将缙绅中子弟分作十种，皆是一个情字。",en:"Let me first classify the young lords of the gentry into ten kinds, all united by the single word: feeling."}]});class Fw extends sS{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const t=new qa;t.deleteAttribute("uv");const n=new ua({side:Jn}),a=new ua,o=new wl(16777215,900,28,2);o.position.set(.418,16.199,.3),this.add(o);const c=new _n(t,n);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const u=new Cs(t,a,6),h=new Un;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),u.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),u.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),u.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),u.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),u.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),u.setMatrixAt(5,h.matrix),this.add(u);const d=new _n(t,co(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new _n(t,co(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new _n(t,co(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new _n(t,co(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new _n(t,co(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const x=new _n(t,co(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){const t=new Set;this.traverse(n=>{n.isMesh&&(t.add(n.geometry),t.add(n.material))});for(const n of t)n.dispose()}}function co(s){return new Lm({color:0,emissive:16777215,emissiveIntensity:s})}function si(s,t,n){s.lineWidth=n,s.lineCap="round",s.lineJoin="round",s.beginPath(),t.forEach(([a,o],c)=>c?s.lineTo(a,o):s.moveTo(a,o)),s.stroke()}function Fn(s,t,n,a,o=a){s.beginPath(),s.ellipse(t,n,a,o,0,0,Math.PI*2),s.fill()}function of(s,t,n,a,o,c,u=0){s.beginPath(),s.moveTo(t-o,n),s.quadraticCurveTo(t-o-4,(n+a)/2,t-c+u,a),s.quadraticCurveTo(t+u,a+8,t+c+u,a),s.quadraticCurveTo(t+o+4,(n+a)/2,t+o,n),s.closePath(),s.fill()}function Kl(s,t){s.save(),s.shadowBlur=0,s.strokeStyle=s.fillStyle="rgba(246,242,234,0.55)",t(),s.restore()}const Ts=1024,As=576,Gx="#1c1714",El=470,lf=s=>Math.min(1,Math.max(0,s)),kS=s=>{const t=lf(s);return t*t*(3-2*t)};function Hw(s,t,n,a){const o=Math.sin(a*1.3)*3;of(s,t,n-150,n-4,24,46,o),Fn(s,t,n-150,28,10),Fn(s,t-14,n-2,12,5),Fn(s,t+14+o,n-2,12,5),s.fillRect(t-5,n-168,10,16),Fn(s,t,n-178,15,17),s.beginPath(),s.moveTo(t-16,n-184),s.lineTo(t-14,n-204),s.lineTo(t+14,n-204),s.lineTo(t+16,n-184),s.fill();for(const p of[-1,1])si(s,[[t+p*12,n-198],[t+p*30,n-186+Math.sin(a*2+p)*4],[t+p*40,n-165+Math.sin(a*2.3+p)*6]],4);si(s,[[t-24,n-145],[t-36,n-105],[t-30,n-78]],13),Fn(s,t-30,n-72,7);const c=n-150+Math.sin(a*2.1)*10;si(s,[[t+24,n-145],[t+50,n-118],[t+60,c]],12);const u=.5+1.1*(.5+.5*Math.sin(a*1.6)),h=-Math.PI/2+.35,d=54;s.beginPath(),s.moveTo(t+60,c),s.arc(t+60,c,d,h-u/2,h+u/2),s.closePath(),s.fill(),Kl(s,()=>{s.lineWidth=1.5;for(let p=1;p<8;p++){const g=h-u/2+u*p/8;s.beginPath(),s.moveTo(t+60+Math.cos(g)*12,c+Math.sin(g)*12),s.lineTo(t+60+Math.cos(g)*(d-6),c+Math.sin(g)*(d-6)),s.stroke()}of(s,t,n-120,n-112,10,10)})}function Gw(s,t,n,a){const o=Math.cos(a*1.5);s.save(),s.translate(t,0),s.scale((o<0?-1:1)*(.42+.58*Math.abs(o)),1);const c=Math.sin(a*3)*3;of(s,0,n-148+c,n-4,20,60+Math.sin(a*3)*6,Math.sin(a*1.5)*8),Fn(s,0,n-148+c,24,9),s.fillRect(-4,n-166+c,8,14),Fn(s,0,n-176+c,14,16),Fn(s,0,n-195+c,12,9);for(let u=-2;u<=2;u++)Fn(s,u*9,n-201+c-(2-Math.abs(u))*3,3.2);si(s,[[12,n-196+c],[26,n-186+c],[28,n-168+c]],2);for(const u of[-1,1]){const h=a*2.2+(u>0?0:Math.PI*.6),d=[u*(58+Math.cos(h)*10),n-196+c-Math.sin(h)*30];si(s,[[u*22,n-144+c],[u*(44+Math.sin(h)*6),n-160+c-Math.sin(h)*20],d],11);let p=d;for(let g=1;g<=11;g++){const _=[d[0]+u*g*9+Math.sin(h*1.3-g*.6)*g*3.2,d[1]-Math.sin(h-g*.5)*g*4+g*g*1.1];si(s,[p,_],17-g),p=_}}Kl(s,()=>{for(let u=0;u<3;u++)Fn(s,0,n-120+c+u*22,4)}),s.restore()}function Vw(s,t,n,a){const o=a%2.2/2.2,c=lf((o-.25)/.6),u=Math.sin(Math.PI*c)*120,h=o<.25?Math.sin(o/.25*Math.PI)*12:0,d=Math.sin(Math.PI*c);s.save(),s.translate(t,n-78-u+h),s.rotate(kS(c)*Math.PI*2);for(const p of[-1,1])si(s,[[p*9,0],[p*(14+d*6+h*.6),38-d*30-h],[p*12,74-d*50-h]],12),Fn(s,p*16,78-d*50-h,9,5);s.beginPath(),s.moveTo(-18,-62),s.lineTo(18,-62),s.lineTo(24,6),s.lineTo(-24,6),s.closePath(),s.fill(),Fn(s,0,-62,22,8),Fn(s,0,-86,14,15),si(s,[[-12,-92],[-30,-86+Math.sin(a*9)*4],[-42,-94+Math.sin(a*7)*6]],3);for(const p of[-1,1])si(s,[[p*18,-58],[p*(40-d*14),-58+d*20-(1-d)*18],[p*(52-d*30),-78+d*50]],10);Kl(s,()=>{s.lineWidth=2,s.beginPath(),s.moveTo(-14,-30),s.lineTo(14,-30),s.moveTo(-16,-14),s.lineTo(16,-14),s.stroke()}),s.restore()}function kw(s,t,n,a){const o=Math.abs(Math.sin(a*3.2))*16;s.save(),s.translate(t,n-o),s.rotate(Math.sin(a*3.2)*.08),of(s,0,-120,-30,26,42);for(const d of[-1,1])si(s,[[d*14,-34],[d*22,-16],[d*16,0]],11),Fn(s,d*20,2,11,5);Fn(s,0,-120,30,10),Fn(s,0,-142,16,15),s.beginPath(),s.moveTo(-17,-150),s.quadraticCurveTo(-6,-200,22,-222),s.quadraticCurveTo(4,-190,17,-150),s.closePath(),s.fill(),Fn(s,24,-224,7),Kl(s,()=>s.fillRect(-6,-148,12,9)),si(s,[[-24,-116],[-44,-96],[-26,-80]],10),si(s,[[24,-116],[44,-100],[52,-120]],10),si(s,[[52,-120],[66,-232]],4);const c=Math.sin(a*3.2+.8)*.3,u=88+Math.sin(c)*18,h=-192;si(s,[[66,-232],[84,-226],[u,h-18]],2),Fn(s,u,h,15,19),Kl(s,()=>{s.lineWidth=1.6;for(const d of[-7,0,7])s.beginPath(),s.moveTo(u+d,h-14),s.lineTo(u+d,h+14),s.stroke()}),si(s,[[u,h+18],[u,h+32]],3),s.restore()}function Xw(s,t,n,a){s.save(),s.shadowBlur=16,s.shadowColor="rgba(27,17,12,0.8)",s.translate(t,n),s.rotate(.38+a),s.beginPath(),s.moveTo(0,0),s.quadraticCurveTo(-10,-22,-7,-46),s.lineTo(7,-46),s.quadraticCurveTo(10,-22,0,0),s.fill(),s.fillRect(-7,-58,14,12),s.fillRect(-5,-260,10,204),s.restore()}const Ww=[{x:190,draw:Hw},{x:420,draw:Gw},{x:650,draw:Vw},{x:860,draw:kw}];function qw(){const s=document.createElement("canvas");s.width=Ts,s.height=As;const t=s.getContext("2d"),n=document.createElement("canvas");n.width=Ts,n.height=As;const a=n.getContext("2d"),o=a.createRadialGradient(Ts/2,As*.62,40,Ts/2,As*.55,Ts*.62);o.addColorStop(0,"#fbf8f1"),o.addColorStop(.45,"#ece6da"),o.addColorStop(1,"#bdb6ab"),a.fillStyle=o,a.fillRect(0,0,Ts,As);let c=7;const u=()=>(c=c*16807%2147483647)/2147483647;a.globalAlpha=.08,a.strokeStyle="#6b635b",a.lineWidth=1;for(let d=0;d<280;d++){const p=u()*Ts,g=u()*As,_=10+u()*40,v=u()*Math.PI;a.beginPath(),a.moveTo(p,g),a.quadraticCurveTo(p+Math.cos(v)*_*.5+(u()-.5)*8,g+Math.sin(v)*_*.5,p+Math.cos(v)*_,g+Math.sin(v)*_),a.stroke()}function h(d){t.shadowBlur=0,t.drawImage(n,0,0),t.fillStyle=`rgba(40,36,32,${.07+.04*Math.sin(d*9.1)*Math.sin(d*3.3)})`,t.fillRect(0,0,Ts,As),t.fillStyle=Gx,t.strokeStyle=Gx,t.shadowColor="rgba(27,17,12,0.7)",t.shadowBlur=5;const p=kS((d-.2)/1.2);let g=null;if(p>0){const b=50+924*p,R=[],y=[];for(let S=50;S<=b;S+=8){const w=(S-50)/924,N=1.5+6*Math.pow(Math.sin(Math.PI*w),.5),A=El+8+Math.sin(S*.013)*3;R.push([S,A-N]),y.push([S,A+N*.8])}t.beginPath(),[...R,...y.reverse()].forEach(([S,w],N)=>N?t.lineTo(S,w):t.moveTo(S,w)),t.closePath(),t.fill(),p<1&&(g=[b,El+8])}Ww.forEach((v,x)=>{const b=lf((d-1.3-x*1.05)/.9);if(b<=0)return;const R=El+30-b*330;t.save(),t.beginPath(),t.rect(v.x-140,R,280,As),t.clip(),v.draw(t,v.x,El,d),t.restore(),b<1&&(g=[v.x+Math.sin(d*22)*55*(1-b*.4),R+Math.cos(d*17)*8])});const _=lf((d-5.4)/.9);!g&&_<1&&(g=d<5.4?null:[860+_*180,El-300-_*260]),g&&Xw(t,g[0],g[1],Math.sin(d*20)*.12)}return{canvas:s,draw:h}}const ni={shadow:400,gate:800,glyph:1200},Yw=[{top:13486013,horizon:15789284,glow:0,moon:[-.3,.15,-1],moonSize:.035,moonGain:.5,bloom:0,stars:0,fog:15789284,density:.0055},{top:13486013,horizon:15789284,glow:0,moon:[-.3,.15,-1],moonSize:.035,moonGain:.5,bloom:0,stars:0,fog:15789284,density:.0055},{top:15723491,horizon:15723491,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:15723491,density:.02},{top:11840931,horizon:15131096,glow:0,moon:[0,.075,-1],moonSize:.07,moonGain:.62,bloom:0,stars:0,fog:15526112,density:.016},{top:16052456,horizon:16052456,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:16052456,density:0}],Zw=`
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
  }`,Kw=`
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
  }`,Jw=`
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
  }`,Qw=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.42 * (1.0 - smoothstep(0.0, 1.0, r)));
  }`,Vx={seed:20260925,build:({scene:s,camera:t,rand:n,shared:a,ink:o,group:c,mesh:u,box:h,lambert:d,canvasTexture:p,glyph:g,glows:_,warm:v,lantern:x,path:b,setEnv:R,portrait:y},S)=>{const w=c(s);u(new ai(1400,1400).rotateX(-Math.PI/2),new Xn({color:15131096}),w);const N=[];for(let H=-9;H<=9;H++)for(let dt=-10;dt<=2;dt++){const Rt=H*16,Ut=dt*16;if(!(H===0&&Ut>-40)&&!(Math.abs(H)<=2&&Ut<=-36))for(const Ht of[-3.25,3.25])for(const Me of[-3.25,3.25]){if(n()>.82)continue;const Ie=4+n()*2.2,dn=n()<.06;N.push({x:Rt+Ht+(n()-.5),z:Ut+Me+(n()-.5),w:Ie,h:Ie*(.75+n()*.3)*(dn?1.45:1),d:Ie*(.7+n()*.15),stage:dn})}}const A=d(16777215,{vertexColors:!0,side:On}),O=new Cs(op(4867392,9275005,11840931),A,N.length),D=new Ye,z=new ae;N.forEach((H,dt)=>{D.makeScale(H.w,H.h,H.d).setPosition(H.x,0,H.z),O.setMatrixAt(dt,D),O.setColorAt(dt,z.setScalar(.8+n()*.4))}),w.add(O);const E=op(3814448,10697254,13222841),L=new Cs(E,A,4);[[0,6,-38,28],[0,2.4,-64,30],[0,2.4,-88,20],[0,2.4,-112,32]].forEach(([H,dt,Rt,Ut],Ht)=>{L.setMatrixAt(Ht,D.makeScale(Ut,Ut*.85,Ut*.72).setPosition(H,dt,Rt))}),w.add(L);const B=d(10697254),W=d(13222841);h(w,B,[0,3,-38],[34,6,10]);for(const H of[-64,-88,-112])h(w,W,[0,1.2,H],[40,2.4,26]);for(const H of[-38,38])h(w,B,[H,3,-86],[1.2,6,96]);h(w,B,[0,3,-134],[77,6,1.2]),[[-430,12893876,60],[-360,10656657,36]].forEach(([H,dt,Rt])=>{const Ut=new er;Ut.moveTo(-900,-40);for(let Ht=-900;Ht<=900;Ht+=30)Ut.lineTo(Ht,8+Rt*(.5+.3*Math.sin(Ht*.011+H)+.2*Math.sin(Ht*.031)));Ut.lineTo(900,-40),u(new Um(Ut),new Xn({color:dt,fog:!1}),w,0,0,H)});const Z=[];for(const H of N){const dt=Math.hypot(H.x,H.z+60);if(!H.stage)continue;const Rt=1.4+dt/180*4.2+n()*.4;for(let Ut=0;Ut<6;Ut++)Z.push([[H.x+(Ut/5-.5)*.8*H.w,.46*H.h,H.z+.46*H.d],v(1,12595742),.8,Rt+Ut*.05])}for(let H=0;H<12;H++)for(const dt of[-6,6])Z.push([[dt,1.6,30-H*6],v(1,12595742),.7,.9+(12-H)*.08]);for(let H=0;H<9;H++)Z.push([[(H-4)*3.2,7.5,-32.5],v(1,12595742),.9,.6]);_(w,Z);{const dt=new rn,Rt=new Float32Array(3200*3),Ut=new Float32Array(3200*3),Ht=new Float32Array(3200*3),Me=new Float32Array(3200),Ie=new Float32Array(3200),dn=new Float32Array(3200),Ci=[3090982,4867134,12071455];for(let on=0;on<3200;on++){const bn=n()<.5?1:-1;if(on<1500)Rt.set([(n()-.5)*9,1,bn>0?-34:50],on*3),Ut.set([0,0,bn],on*3),Me[on]=84;else if(n()<.5){const nn=(Math.floor(n()*18)-9)*16+8+(n()-.5)*2;Rt.set([nn,1,bn>0?-168:40],on*3),Ut.set([0,0,bn],on*3),Me[on]=208}else{const nn=(Math.floor(n()*13)-10)*16+8+(n()-.5)*2;Rt.set([bn>0?-152:152,1,nn],on*3),Ut.set([bn,0,0],on*3),Me[on]=304}new ae(Ci[on%3]).toArray(Ht,on*3),Ie[on]=1+n()*1.2,dn[on]=n()}dt.setAttribute("position",new qe(Rt,3)),dt.setAttribute("aDirection",new qe(Ut,3)),dt.setAttribute("aColor",new qe(Ht,3)),dt.setAttribute("aLength",new qe(Me,1)),dt.setAttribute("aSpeed",new qe(Ie,1)),dt.setAttribute("aSeed",new qe(dn,1));const oi=new tf(dt,new xn({uniforms:a,vertexShader:Zw,fragmentShader:FS,transparent:!0,depthWrite:!1}));oi.frustumCulled=!1,w.add(oi)}{const H=document.createElement("canvas");H.width=H.height=256;const dt=H.getContext("2d");for(let Ut=0;Ut<14;Ut++){const Ht=60+n()*136,Me=90+n()*76,Ie=30+n()*60,dn=dt.createRadialGradient(Ht,Me,0,Ht,Me,Ie);dn.addColorStop(0,"rgba(255,255,255,0.35)"),dn.addColorStop(1,"rgba(255,255,255,0)"),dt.fillStyle=dn,dt.fillRect(0,0,256,256)}const Rt=new lS({map:p(H),color:10130571,transparent:!0,opacity:.35,depthWrite:!1,fog:!1});for(let Ut=0;Ut<16;Ut++){const Ht=new uS(Rt);Ht.position.set((n()-.5)*170,55+n()*55,-30+n()*170),Ht.scale.set(50+n()*50,22+n()*18,1),w.add(Ht)}}const $=c(w,0,16,52),Y=d(3814449),j=d(3025190);h($,d(13222583),[0,-.1,.5],[8,.2,5]),h($,Y,[0,.92,-1.3],[7.4,.07,.08]),h($,Y,[0,.12,-1.3],[7.4,.07,.08]);for(let H=-3.6;H<=3.61;H+=.4)h($,Y,[H,.52,-1.3],[.045,.8,.045]);for(const H of[-3.7,3.7])h($,Y,[H,2.2,-1.3],[.2,4.6,.2]);h($,Y,[0,4.4,-1.3],[7.8,.25,.22]),h($,d(10722192),[0,.77,.5],[1.7,.06,1]);for(const H of[-.75,.75])for(const dt of[.1,.9])h($,j,[H,.37,dt],[.06,.74,.06]);const F=new ua({color:9418918,roughness:.25,side:On}),V=u(new af([[0,0],[.03,0],[.035,.008],[.06,.03],[.075,.062],[.071,.064]].map(([H,dt])=>new Ct(H,dt)),32),F,$,.35,.8,.55),ut=new xn({uniforms:{uTime:a.uTime,uHit:{value:13.4}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:Jw,transparent:!0});u(new Tm(.068,48).rotateX(-Math.PI/2),ut,V,0,.05,0);const nt=u(new af([[0,0],[.06,0],[.085,.03],[.1,.1],[.085,.2],[.05,.27],[.042,.3],[.055,.33]].map(([H,dt])=>new Ct(H,dt)),48),new ua({color:2902630,roughness:.3}),$,-.15,.8,.28);u(new Vi(.008,.01,.2,5),d(2637854),nt,0,.42,0);const ht=d(3099174,{side:On});for(const[H,dt]of[[.6,.4],[2.6,.44],[4.4,.37]]){const Rt=u(new oa(1,8,6),ht,nt,Math.cos(H)*.09,dt,Math.sin(H)*.09);Rt.scale.set(.1,.012,.04),Rt.rotation.set(0,-H,-.4)}const P=c(nt,0,.5,0);P.scale.setScalar(1.4);const et=new ua({vertexColors:!0,roughness:.55,side:On,emissive:3803154}),gt=[{n:6,r:.01,w:.05,h:.06},{n:9,r:.025,w:.08,h:.09},{n:12,r:.04,w:.1,h:.11},{n:14,r:.055,w:.12,h:.12}],Pt=new Cs(lp(1,1,6949922,16098228),et,gt.reduce((H,dt)=>H+dt.n,0));P.add(Pt),u(new oa(.025,10,8),new ua({color:15253578,emissive:5913096}),P);const Vt=new ma(0,0,0,"YXZ"),Wt=new ur,at=new G,St=new G,Ot=H=>{let dt=0;gt.forEach((Rt,Ut)=>{for(let Ht=0;Ht<Rt.n;Ht++){const Me=Ht/Rt.n*Math.PI*2+Ut*.7,Ie=Ds.lerp(.12+Ut*.08,.3+Ut*.38,H);at.set(-Math.sin(Me)*Rt.r,0,-Math.cos(Me)*Rt.r),Wt.setFromEuler(Vt.set(-Ie,Me,0)),Pt.setMatrixAt(dt++,D.compose(at,Wt,St.set(Rt.w,Rt.h,Rt.w)))}}),Pt.instanceMatrix.needsUpdate=!0},ce=u(lp(.08,.1,11546698,16098228),et,$);x($,[-1.5,2.3,.1],.9);const qt=new wl(16774890,3,9,1.6);qt.position.set(-1.5,2.2,.3),$.add(qt),u(new Vi(.018,.02,.14,12),d(15326400),$,.12,.87,.12),u(new Am(.008,.03,8),new Xn({color:new ae(16765066).multiplyScalar(3)}),$,.12,.965,.12);const he=new wl(16774890,1.4,3,1.4);he.position.set(.12,1,.16),$.add(he);const Nt=c(s,ni.shadow),st=qw(),vt=p(st.canvas);u(new ai(40,40).rotateX(-Math.PI/2),new Xn({color:14209736}),Nt);const Et=new Xn({map:vt,fog:!1});Et.color.setRGB(1.08,1,.9),u(new ai(7.2,4.05),Et,Nt,0,2.55,0);const Tt=d(3814449);for(const H of[-3.72,3.72])h(Nt,Tt,[H,2.6,0],[.22,5.2,.2]);h(Nt,Tt,[0,4.66,0],[7.8,.22,.22]),h(Nt,Tt,[0,.52,0],[7.8,.12,.22]),h(Nt,d(2762018),[0,.24,.02],[7.6,.46,.14]),u(nm(8.8,1.6,.55,new ae(1711140)),d(16777215,{vertexColors:!0,side:On}),Nt,0,4.78,0);for(const H of[-4.4,4.4])x(Nt,[H,3.9,.3]);const bt=new wl(16774890,9,14,1.4);bt.position.set(0,2.5,1.2),Nt.add(bt);const zt=[];for(const[H,dt]of[[-1.95,6.8],[-.7,7],[.65,6.8],[1.9,6.9],[-1.3,5],[1.3,5.1]]){const Rt=c(Nt,H,0,dt);u(new oa(1,16,12),o,Rt,0,1.2,0).scale.set(.3,.36,.22),u(new Vi(.06,.07,.14,8),o,Rt,0,1.52,0);const Ut=c(Rt,0,1.64,0);u(new oa(.13,16,12),o,Ut),u(new oa(.137,16,8,0,Math.PI*2,0,Math.PI/2),o,Ut,0,.03,0),u(new oa(.025,8,6),o,Ut,0,.17,0),u(new Vi(.018,.01,.6,5),o,Ut,0,-.32,.13).rotation.x=.12,zt.push(Ut)}const Lt=c(s,ni.gate);u(new ai(80,80).rotateX(-Math.PI/2),new Xn({color:14078150}),Lt);const Yt=new er([new Ct(-9,0),new Ct(9,0),new Ct(9,5.4),new Ct(-9,5.4)]),se=new Jp;se.absarc(0,2.55,2.25,0,Math.PI*2,!0),Yt.holes.push(se),u(new nf(Yt,{depth:.5,bevelEnabled:!1,curveSegments:72}).translate(0,0,-.25),d(14208959),Lt);for(const H of[-4.95,4.95])h(Lt,d(4672080),[H,.22,0],[8.1,.44,.56]);const X=d(3882564);for(const H of[.26,-.26])u(new Nm(2.3,.08,8,72),X,Lt,0,2.55,H);u(nm(19,1.2,.4,new ae(2106414)),d(16777215,{vertexColors:!0,side:On}),Lt,0,5.4,0);const de=new _n(op(1382946,1841690,2237738),d(16777215,{vertexColors:!0,side:On}));de.position.set(-3.2,0,-16),de.scale.set(7,6,5),Lt.add(de),u(new Rm(1),o,Lt,-2.6,.7,-5.5).scale.set(1.2,1.5,.9);const _e=[];for(let H=0;H<9;H++){const dt=2.2+n()*2.6,Rt=-3-n()*4,Ut=6.5+n()*2;u(new Vi(.04,.06,Ut,6),o,Lt,dt,Ut/2,Rt).rotation.z=(n()-.5)*.1;for(let Ht=0;Ht<30;Ht++)Wt.setFromEuler(Vt.set(n()*2-1,n()*Math.PI*2,.6+n()*.9)),_e.push(new Ye().compose(at.set(dt+(n()-.5)*1.2,3+n()*(Ut-3),Rt+(n()-.5)*1.2),Wt,St.set(1,1,1)))}const I=new Cs(new ai(.4,.06),o,_e.length);_e.forEach((H,dt)=>I.setMatrixAt(dt,H)),Lt.add(I);const T=new Vl([[4.8,5.7,.35],[3.7,5.3,.45],[2.6,5,.5],[1.6,4.95,.55],[.7,4.6,.6],[0,4.15,.62]].map(([H,dt,Rt])=>new G(H,dt,Rt)));u(new sf(T,48,.045,6),o,Lt);const Q=[];for(const[H,dt]of[[.3,[2.9,4.4,.6]],[.55,[1.8,5.5,.5]],[.75,[.9,4.2,.7]]]){const Rt=T.getPoint(H),Ut=new Vl([Rt,Rt.clone().lerp(new G(...dt),.5).add(new G(0,.12,0)),new G(...dt)]);u(new sf(Ut,12,.02,5),o,Lt);for(let Ht=0;Ht<6;Ht++)Q.push([Ut.getPoint(.2+Ht*.15).add(new G((n()-.5)*.1,(n()-.5)*.1,0)).toArray(),new ae(12730682),.12,-1])}for(let H=0;H<26;H++)Q.push([T.getPoint(n()).add(new G((n()-.5)*.14,(n()-.5)*.14,.05)).toArray(),new ae(n()<.5?12730682:11022892),.11,-1]);for(const H of[-3.6,3.6]){x(Lt,[H,3.7,.6]);const dt=new wl(16774890,9,9,1.5);dt.position.set(H,3.6,.9),Lt.add(dt),h(Lt,o,[H,4.35,.42],[.05,.05,.4])}const it=new Pm(10263708,.6);it.position.set(-4,7,12),Lt.add(it,it.target),_(Lt,Q);const xt=new Cs(lp(.05,.06,14195366,16769766),new Xn({vertexColors:!0,side:On}),90),It=Array.from({length:90},()=>[n(),n(),n(),n()]);Lt.add(xt);const Bt=H=>{const dt=new er;return dt.moveTo(H[0][0],H[0][1]),dt.splineThru(H.slice(1).map(([Rt,Ut])=>new Ct(Rt,Ut))),dt.closePath(),dt},mt=H=>new er(H.map(([dt,Rt])=>new Ct(dt,Rt))),yt=(H,dt,Rt)=>{const Ut=new er;return Ut.absarc(H,dt,Rt,0,Math.PI*2,!1),Ut},Ft=(H,dt)=>u(new nf(H,{depth:.04,bevelEnabled:!1,curveSegments:16}),o,dt);function $t(H,dt,Rt,Ut){const Ht=c(Lt,...Rt);Ht.scale.x=Ut,Ft([Bt(H)],Ht);const Me=c(Ht,0,.95,0);return Ft(dt,Me),{root:Ht,torso:Me}}const Zt=$t([[-.15,.97],[-.2,.6],[-.27,.15],[-.31,.01],[0,0],[.3,.01],[.26,.2],[.18,.6],[.14,.97]],[Bt([[-.16,0],[-.19,.25],[-.15,.45],[-.06,.53],[.06,.52],[.14,.44],[.16,.2],[.14,0]]),mt([[-.04,.5],[.06,.5],[.06,.62],[-.04,.62]]),yt(.02,.7,.105),mt([[.11,.73],[.145,.685],[.11,.665]]),mt([[-.1,.75],[-.1,.9],[.1,.9],[.12,.76]]),mt([[-.1,.87],[-.24,.6],[-.21,.58],[-.08,.8]]),Bt([[-.02,.45],[.12,.4],[.28,.28],[.34,.18],[.3,.08],[.18,.04],[.06,.14],[-.04,.3]]),yt(.35,.23,.045)],[-2.7,0,1.4],1),Xt=$t([[-.13,.97],[-.17,.6],[-.25,.12],[-.28,.01],[0,0],[.27,.01],[.22,.2],[.15,.6],[.12,.97]],[Bt([[-.13,0],[-.16,.25],[-.12,.44],[-.05,.5],[.05,.5],[.12,.43],[.14,.2],[.12,0]]),mt([[-.035,.47],[.045,.47],[.045,.6],[-.035,.6]]),yt(.02,.67,.095),mt([[.1,.7],[.13,.66],[.1,.645]]),yt(-.08,.74,.07),yt(0,.78,.06),mt([[-.15,.8],[.07,.865],[.075,.845],[-.15,.782]]),mt([[-.145,.79],[-.175,.58],[-.158,.58],[-.13,.78]]),Bt([[-.01,.44],[.1,.38],[.2,.2],[.24,-.1],[.25,-.42],[.17,-.47],[.13,-.12],[.06,.18],[-.03,.3]])],[1,0,-1.2],-1),oe=c(s,ni.glyph),fe={uTime:a.uTime,uScale:a.uScale,uCols:{value:5},uSpacing:{value:6.8},uSmall:{value:5.2},uBig:{value:21}};{const H=document.createElement("canvas");H.width=H.height=200;const dt=H.getContext("2d",{willReadFrequently:!0});dt.fillStyle="#fff",dt.textAlign="center",dt.textBaseline="middle",dt.font=fa(176,700);const Rt=Ol();Rt?Pl(dt,Rt,{x:8,y:20,w:184,h:160},{color:"#fff"}):dt.fillText("情",100,104);const Ut=dt.getImageData(0,0,200,200).data,Ht=[];for(let Fe=0;Fe<200;Fe+=1)for(let Sn=0;Sn<200;Sn+=1)Ut[(Fe*200+Sn)*4+3]>128&&Ht.push([Sn,Fe]);if(!Ht.length)for(let Fe=0;Fe<400;Fe++)Ht.push([40+n()*120,40+n()*120]);const Me=7e3,Ie=new rn,dn=new Float32Array(Me*3),Ci=new Float32Array(Me*2),oi=new Float32Array(Me*3),on=new Float32Array(Me),bn=new Float32Array(Me);for(let Fe=0;Fe<Me;Fe++){const[Sn,va]=Ht[Math.floor(n()*Ht.length)];Ci.set([(Sn+n())/200-.5,.5-(va+n())/200],Fe*2),dn.set([(n()-.5)*70,-24+n()*22,-n()*26+6],Fe*3),new ae(n()<.5?3090982:4143669).toArray(oi,Fe*3),on[Fe]=Fe%10,bn[Fe]=n()}Ie.setAttribute("position",new qe(dn,3)),Ie.setAttribute("aStart",new qe(dn,3)),Ie.setAttribute("aGlyph",new qe(Ci,2)),Ie.setAttribute("aColor",new qe(oi,3)),Ie.setAttribute("aCluster",new qe(on,1)),Ie.setAttribute("aSeed",new qe(bn,1));const nn=new tf(Ie,new xn({uniforms:fe,vertexShader:Kw,fragmentShader:Qw,transparent:!0,depthWrite:!1}));nn.frustumCulled=!1,oe.add(nn)}const me=document.createElement("canvas");me.width=me.height=128;{const H=me.getContext("2d");H.fillStyle=BS,H.fillRect(6,6,116,116),H.fillStyle="#f4e3c4",H.textAlign="center",H.textBaseline="middle",H.font=fa(50,700);const dt=Ol();dt?Pl(H,dt,{x:14,y:14,w:100,h:100},{color:"#f4e3c4"}):(Zl(H,"品",64,35),Zl(H,"花",64,93))}const J=new Xn({map:p(me,!0),transparent:!0,opacity:0,fog:!1}),Gt=u(new ai(1.8,1.8),J,oe,0,0,1),Mt=g(oe,"情");Mt.mesh.position.z=.9;const kt=[b([[0,[0,112,150],[0,70,-200]],[3.5,[0,78,118],[0,24,-100]],[7,[0,40,88],[0,4,-70]]]),b([[7,[2.2,18.6,60],[0,8,-80]],[10,[1.2,17.9,55.8],[-.2,14,-20]],[12.4,[.45,17.75,54],[.05,17.22,52.42]],[15,[.45,17.1,52.95],[.35,16.84,52.55]]]),b([[15,[ni.shadow+.5,1.7,11],[ni.shadow,2.3,0]],[18.5,[ni.shadow+.2,1.95,8.2],[ni.shadow,2.45,0]],[22,[ni.shadow,2.55,5.7],[ni.shadow,2.55,0]]]),b([[22,[ni.gate+.4,1.95,10.4],[ni.gate-.35,2.1,0]],[29,[ni.gate,2.05,7.4],[ni.gate,2.35,0]]])],Jt=[w,w,Nt,Lt,oe];return(H,dt)=>{for(const Ut of[w,Nt,Lt,oe])Ut.visible=Ut===Jt[dt];$.visible=dt===1,R(Yw[dt]);const Rt=y();if(dt<4)kt[dt](H);else{const Ut=rf((H-S.shots[4].start)/7),Ht=(Rt?58:44)-Ga(Ut)*8;t.position.set(ni.glyph+Math.sin(Ut*1.4)*3,.6,Ht),t.lookAt(ni.glyph,0,0)}if(dt===1){Ot(Ga((H-8.2)/3.8));const Ut=rf((H-12.2)/1.2);ce.visible=H>12.2;const Ht=Math.max(0,H-13.4);ce.position.set(Ds.lerp(-.13,.334,Ga(Ut))+Math.sin(Ut*9)*.05*(1-Ut)+Ht*.004,Ds.lerp(1.34,.852,Ut*Ut),Ds.lerp(.3,.543,Ut)+Math.cos(Ut*7)*.04*(1-Ut)),ce.rotation.set(Ut<1?Ut*8:-Math.PI/2,Ut*5+Ht*.2,Ut<1?Math.sin(Ut*11):0)}if(dt===2&&(st.draw(H-15),vt.needsUpdate=!0,zt.forEach((Ut,Ht)=>{Ut.rotation.y=Math.sin(H*.7+Ht*1.9)*.35*Math.max(0,Math.sin(H*.4+Ht))})),dt===3){const Ut=(Ht,Me)=>Me*Ga((H-Ht)/1.1)*(1-Ga((H-Ht-2.2)/1.2));Zt.torso.rotation.z=-Ut(23,.55),Xt.torso.rotation.z=-Ut(24.3,.38),Xt.root.position.y=-Ut(24.3,.05),It.forEach(([Ht,Me,Ie,dn],Ci)=>{const oi=(H*(.3+Ie*.3)+dn*6)%5.4;at.set(-.8+Ht*4.6-oi*.35+Math.sin(H*1.3+dn*10)*.15,5.3-oi,-1+Me*2.4),Wt.setFromEuler(Vt.set(H*(1+Ht)+dn*6,H*.7+Me*6,H*(.5+Ie))),xt.setMatrixAt(Ci,D.compose(at,Wt,St.set(1,1,1)))}),xt.instanceMatrix.needsUpdate=!0}if(dt===4){const Ut=fe.uBig.value;fe.uCols.value=Rt?2:5,Gt.position.set(Ut*.42,-Ut*.42,1),Mt.mesh.scale.setScalar(Ut),Mt.material.uniforms.uReveal.value=Ga((H-34)/1),J.opacity=Ga((H-34.4)/.5),Gt.scale.setScalar(1+.4*(1-Ga((H-34.4)/.35)))}}}},jw={cinematic:[1518133,10904648,14403996,5401963,3229783],monet:[7568810,14197915,15850150,9350809,9606845],cyberpunk:[1514299,7351425,3640730,2434887,1467256]};function $w(){return new Yl({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
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
      }`})}function tR(s,t){const n=jw[t].map(c=>new ae(c)),a=new Map;let o=0;s.scene.traverse(c=>{if(!(c instanceof _n))return;const u=h=>{if(!(h instanceof Lm)&&!(h instanceof Xn)||h.map||h.transparent)return h;if(a.has(h))return a.get(h);const d=n[o++%n.length].clone(),p=new ua({color:d,vertexColors:h.vertexColors,side:h.side,roughness:t==="monet"?1:t==="cyberpunk"?.24:.38,metalness:t==="monet"?0:.28,emissive:t==="cyberpunk"?d:0,emissiveIntensity:t==="cyberpunk"?.16:0});return a.set(h,p),p};c.material=Array.isArray(c.material)?c.material.map(u):u(c.material),c.castShadow=!c.material||!c.material.transparent,c.receiveShadow=!0}),a.forEach((c,u)=>u.dispose())}function eR(s,t){const n=new ua({color:1054251,metalness:.65,roughness:.22}),a=new Xn({color:new ae(2616575).multiplyScalar(2)}),o=new Xn({color:new ae(16721549).multiplyScalar(2)}),c=new qa(1,1,1),u=new Cs(c,n,120),h=new Cs(c,a,3600),d=new Ye;let p=0;for(let x=0;x<120;x++){const b=x%2?1:-1,R=b*(35+s.rand()*130),y=-30-s.rand()*220,S=18+s.rand()*85,w=5+s.rand()*8;d.makeScale(w,S,w).setPosition(R,S/2,y),u.setMatrixAt(x,d);for(let N=0;N<30;N++)d.makeScale(.65,.35,.12).setPosition(R+(N%3-1)*w*.27,3+Math.floor(N/3)*S/11,y+w/2+.1),h.setMatrixAt(p++,d);s.box(t,x%2?o:a,[R,S+.1,y],[w+.25,.18,w+.25])}t.add(u,h);for(const[x,b]of["歌台","舞榭","醉月","情"].entries()){const R=document.createElement("canvas");R.width=128,R.height=384;const y=R.getContext("2d");y.fillStyle="#131028",y.fillRect(0,0,128,384),y.strokeStyle=x%2?"#ff4eac":"#5bffff",y.lineWidth=8,y.strokeRect(5,5,118,374),y.fillStyle=y.strokeStyle,y.font="bold 84px serif",y.textAlign="center",[...b].forEach((w,N)=>y.fillText(w,64,135+N*120));const S=new Xn({map:s.canvasTexture(R),side:On});s.mesh(new ai(8,24),S,t,(x%2?1:-1)*(26+Math.floor(x/2)*18),25,-35-x*25)}const g=new rn,_=new Float32Array(1800*3);for(let x=0;x<1800;x++)_.set([(s.rand()-.5)*230,s.rand()*110,s.rand()*280-180],x*3);g.setAttribute("position",new qe(_,3));const v=new tf(g,new dS({color:8437759,size:.12,transparent:!0,opacity:.5}));return t.add(v),x=>{v.position.y=-(x*18)%35}}function nR(s){return Bw({seed:Vx.seed,style:"night",build:(t,n)=>{t.renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));const a=new Map,o=new Set(t.scene.children),c=Vx.build({...t,setEnv:b=>{let R=a.get(b);if(!R){const y=s==="monet",S=s==="cyberpunk";R={...b,top:y?10268112:S?197912:1122104,horizon:y?15783608:S?4661092:12419169,glow:y?2235152:S?1246761:2298375,fog:y?14274e3:S?1119017:4016219,density:b.density*.6,bloom:y?.12:S?1.05:.45,moonGain:y?.55:1.3,stars:y?0:.5},a.set(b,R)}t.setEnv(R)}},n);tR(t,s);const u=t.scene.children.find(b=>!o.has(b)&&b instanceof fo),h=s==="cyberpunk"?eR(t,u):()=>{},d=new $p(t.renderer),p=new Fw,g=d.fromScene(p,.06);t.scene.environment=g.texture,t.scene.environmentIntensity=s==="monet"?.6:.85,p.dispose(),d.dispose();const _=new Yl({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){gl_FragColor=texture2D(tDiffuse,vUv);}"}),v=_.dispose.bind(_);_.dispose=()=>{v(),g.dispose()},t.addEffect(_);const x=new Pm(s==="monet"?16769196:s==="cyberpunk"?16738251:16765851,s==="monet"?2:3);return x.position.set(-40,80,70),t.scene.add(x,x.target),s==="cinematic"&&(t.renderer.shadowMap.enabled=!0,t.renderer.shadowMap.type=Xx,x.castShadow=!0,x.shadow.mapSize.set(2048,2048),x.shadow.camera.left=-65,x.shadow.camera.right=65,x.shadow.camera.top=65,x.shadow.camera.bottom=-65,x.shadow.camera.far=240,x.shadow.normalBias=.08),s==="monet"&&t.addEffect($w()),(b,R)=>{c(b,R),h(b);const y=R===2?400:R===3?800:R===4?1200:0;x.position.set(y-40,80,70),x.target.position.set(y,0,0)}}})}const kx=[{id:"cinematic",name:"The gilded capital",tag:"01 / CINEMATIC GAME",description:"Lacquer, porcelain and warm light. Physical materials, soft shadows and a cinematic dusk."},{id:"monet",name:"An impression of feeling",tag:"02 / MONET INSPIRED",description:"Lavender shadows, apricot skies and broken colour. The city dissolves into moving brushstrokes."},{id:"cyberpunk",name:"Electric dreams",tag:"03 / CYBERPUNK CITY",description:"Neon theatres beneath a vertical city. Cyan windows, magenta signs and rain in the night."}];function iR(){const s=Ei.useRef([]),t=Ei.useRef([]),[n,a]=Ei.useState(0),[o,c]=Ei.useState(!1),[u,h]=Ei.useState(!1),[d,p]=Ei.useState([]),[g,_]=Ei.useState(null),[v,x]=Ei.useState("en"),[b,R]=Ei.useState(!0),y=Ei.useRef(!1);Ei.useEffect(()=>{document.title="Three ways of feeling · Precious Vibe";let D=!1;const z=E=>{D||(p(L=>[...new Set([...L,E])]),t.current.forEach(L=>L.setPlaying(!1)),y.current=!1,c(!1))};try{kx.forEach((E,L)=>{const B=nR(E.id)(s.current[L],lo,()=>{},()=>z(E.name));t.current.push(B),B.seek(3.5)}),a(3.5),h(!0)}catch(E){console.error(E),z("The renderer could not start. Enable WebGL and reload this page.")}return()=>{D=!0,t.current.forEach(E=>E.dispose()),t.current=[]}},[]);const S=Ei.useRef(3.5);Ei.useEffect(()=>{let D=0,z=0;const E=L=>{if(z&&!document.hidden&&(S.current=Math.min(36,S.current+Math.min((L-z)/1e3,.1)),t.current.forEach(B=>B.seek(S.current)),a(S.current)),z=L,S.current>=36){y.current=!1,c(!1);return}D=requestAnimationFrame(E)};return o&&(D=requestAnimationFrame(E)),()=>cancelAnimationFrame(D)},[o]);const w=D=>{S.current=D,t.current.forEach(z=>z.seek(D)),a(D)},N=()=>{S.current>=36&&w(0),y.current=!o,c(!o)},A=lo.shots[VS(lo.shots,n)],O=zw(lo.subtitles,n);return ve.jsxs("main",{children:[ve.jsxs("header",{children:[ve.jsxs("a",{className:"brand",href:"https://ph-bj.github.io",children:["品花宝境 ",ve.jsx("span",{children:"PRECIOUS VIBE"})]}),ve.jsx("span",{className:"edition",children:"VISUAL STUDIES / 001"})]}),ve.jsxs("section",{className:"intro",children:[ve.jsx("div",{className:"eyebrow",children:"CHAPTER ONE · PARAGRAPH ONE"}),ve.jsxs("h1",{children:["Three ways of ",ve.jsx("em",{children:"feeling."})]}),ve.jsxs("p",{children:["One passage. One 36-second film. Three imagined worlds.",ve.jsx("br",{}),"Explore the opening of ",ve.jsx("i",{children:"Pinhua Baojian"})," through light, paint and neon."]})]}),ve.jsxs("div",{className:"toolbar",children:[ve.jsxs("span",{className:"live",children:[ve.jsx("i",{})," THREE.JS · LIVE RENDERINGS"]}),ve.jsxs("div",{children:[ve.jsxs("button",{onClick:()=>R(!b),"aria-pressed":b,children:["Captions ",b?"on":"off"]}),ve.jsx("button",{onClick:()=>x(v==="en"?"zh":"en"),children:v==="en"?"中文":"English"}),g&&ve.jsx("button",{onClick:()=>_(null),children:"Compare all three ↗"})]})]}),ve.jsx("section",{className:`gallery ${g?"focused":""}`,"aria-label":"Three aesthetic renderings",children:kx.map((D,z)=>ve.jsxs("article",{className:`study ${g===D.id?"selected":""} ${g&&g!==D.id?"unfocused":""}`,children:[ve.jsxs("div",{className:"screen",children:[ve.jsx("div",{className:"canvas-host",ref:E=>{s.current[z]=E}}),ve.jsx("div",{className:"cut",style:{opacity:Iw(lo.shots,n)}}),ve.jsx("div",{className:"screen-label",children:D.tag}),ve.jsx("button",{className:"expand","aria-label":`Focus ${D.name}`,onClick:()=>_(g===D.id?null:D.id),children:g===D.id?"↙":"↗"}),b&&O&&ve.jsx("p",{className:"subtitle",children:O[v]})]}),ve.jsxs("div",{className:"study-copy",children:[ve.jsx("span",{children:D.tag}),ve.jsx("h2",{children:D.name}),ve.jsx("p",{children:D.description})]})]},D.id))}),d.length>0&&ve.jsxs("div",{role:"alert",className:"error",children:["Rendering stopped: ",d.join(" · "),". Try reloading with hardware acceleration enabled."]}),ve.jsxs("section",{className:"transport","aria-label":"Synchronized playback",children:[ve.jsx("button",{className:"play",disabled:!u||!!d.length,onClick:N,children:o?"Ⅱ Pause all":"▶ Play all"}),ve.jsx("button",{disabled:!u,onClick:()=>{w(0),c(!0)},children:"↺ Replay"}),ve.jsx("input",{"aria-label":"Film timeline",type:"range",min:"0",max:"36",step:"0.05",value:n,disabled:!u,onChange:D=>w(Number(D.target.value))}),ve.jsxs("output",{children:[n.toFixed(1).padStart(4,"0")," ",ve.jsx("span",{children:"/ 36 s"})]})]}),ve.jsx("nav",{className:"chapters","aria-label":"Film scenes",children:lo.shots.map((D,z)=>ve.jsxs("button",{className:A===D?"active":"",disabled:!u,onClick:()=>w(D.start+.7),children:[ve.jsxs("span",{children:["0",z+1," · ",D.start.toString().padStart(2,"0"),"s"]}),D.title[v]]},D.start))}),ve.jsxs("section",{className:"passage",children:[ve.jsxs("div",{children:[ve.jsx("span",{className:"eyebrow",children:"THE MOMENT ON SCREEN"}),ve.jsx("h3",{children:A.title[v]}),ve.jsx("p",{children:A.caption[v]})]}),ve.jsx("blockquote",{lang:"zh",children:A.quote})]}),ve.jsxs("footer",{children:[ve.jsx("span",{children:"Same story, camera choreography and duration. Different aesthetic directions."}),ve.jsx("span",{children:"Silent animated studies · Chapter 01 / ¶ 01"})]})]})}e1.createRoot(document.getElementById("root")).render(ve.jsx(iR,{}));
