import{c as i,r as n,j as t,ab as c,ac as p,ad as d}from"./index-D9jwO_rM.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],u=i("link",l);function m({lang:r,link:s}){const[e,o]=n.useState(!1);return n.useEffect(()=>{if(!e)return;const a=setTimeout(()=>o(!1),1600);return()=>clearTimeout(a)},[e]),t.jsxs("button",{type:"button",onClick:async a=>{a.stopPropagation(),await p(d(s))&&o(!0)},title:r==="zh"?"复制永久链接":"Copy permanent link",className:"flex items-center gap-1.5 px-2 py-1.5 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/80 text-[var(--ink-dim-text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-colors text-[10px] font-bold uppercase tracking-wider touch-manipulation shrink-0",children:[e?t.jsx(c,{size:12}):t.jsx(u,{size:12}),e&&t.jsx("span",{children:r==="zh"?"已复制":"Copied"})]})}export{m as P};
