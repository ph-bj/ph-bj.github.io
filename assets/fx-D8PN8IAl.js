import{g as V,i as j,p as q,d as N}from"./cinemaKit-CULgi9u-.js";import{B as T,C,c as h,d as _,e as P,A as W,N as D,r as E,M as G,D as H,ae as Q,f as L,g as U,I as J,Q as K,q as O,a as X}from"./vendor-three-CFKQDdr8.js";const Y=`
  attribute vec3 aColor; attribute float aSeed, aSize;
  uniform float uTime, uScale, uSpeed, uFall, uWind, uH, uW, uD, uSwirl;
  varying vec3 vColor;
  void main() {
    vec3 p = position;
    float t = uTime * uSpeed;
    // Fall and wrap in a box W × H × D centred on the origin.
    p.y = mod(p.y - t * uFall * (0.6 + aSeed * 0.8) + uH * 0.5, uH) - uH * 0.5;
    p.x = mod(p.x + t * uWind * (0.7 + aSeed * 0.6) + sin(t * 0.7 + aSeed * 40.0) * uSwirl + uW * 0.5, uW) - uW * 0.5;
    p.z += cos(t * 0.5 + aSeed * 23.0) * uSwirl;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(40.0, aSize * uScale / -mv.z);
  }`;function le(e,v,{count:r=1500,w:a=30,h:u=14,d:f=24,fall:o=1,wind:S=.5,swirl:d=.4,size:i=.06,color:g=16777215,dark:c=!1,x:p=0,y:t=7,z:n=0}={}){const l=new T,s=new Float32Array(r*3),m=new Float32Array(r*3),y=new Float32Array(r),b=new Float32Array(r),A=e.style==="lantern",w=new C(c?7235423:g);A&&!c&&w.multiply(new C(.78,.84,1)).multiplyScalar(1.15);for(let x=0;x<r;x++)s.set([(e.rand()-.5)*a,(e.rand()-.5)*u,(e.rand()-.5)*f],x*3),w.toArray(m,x*3),y[x]=e.rand(),b[x]=i*(.5+e.rand());l.setAttribute("position",new h(s,3)),l.setAttribute("aColor",new h(m,3)),l.setAttribute("aSeed",new h(y,1)),l.setAttribute("aSize",new h(b,1));const F={uTime:e.shared.uTime,uScale:e.shared.uScale,uSpeed:{value:1},uFall:{value:o},uWind:{value:S},uH:{value:u},uW:{value:a},uD:{value:f},uSwirl:{value:d}},z=A&&!c,M=new _(l,new P({uniforms:F,vertexShader:Y,fragmentShader:z?V:j,transparent:!0,depthWrite:!1,blending:z?W:D}));return M.position.set(p,t,n),M.frustumCulled=!1,v.add(M),{points:M,uniforms:F}}function se(e,v,{count:r=80,w:a=10,h:u=6,d:f=6,x:o=0,y:S=0,z:d=0,red:i=!0,speed:g=.5,wind:c=.3}={}){const p=q(.06,.08,i?11546698:15130838,i?16098228:16777215),t=new J(p,new G({vertexColors:!0,side:H}),r);t.position.set(o,S,d),t.frustumCulled=!1,v.add(t);const n=Array.from({length:r},()=>[e.rand(),e.rand(),e.rand(),e.rand()]),l=new X,s=new K,m=new O,y=new E,b=new E(1,1,1),A=w=>{n.forEach(([F,z,M,x],I)=>{const R=(w*g*(.6+M*.6)+x*u)%u;y.set((F-.5)*a+Math.sin(w*1.3+x*10)*.3+w*c*.3%a,u-R,(z-.5)*f+Math.cos(w+x*7)*.2),y.x=((y.x+a/2)%a+a)%a-a/2,s.setFromEuler(m.set(w*(1+F)+x*6,w*.7+z*6,w*(.5+M))),t.setMatrixAt(I,l.compose(y,s,b))}),t.instanceMatrix.needsUpdate=!0};return A(0),{mesh:t,update:A}}let B;function Z(){if(B)return B;const e=document.createElement("canvas");e.width=e.height=256;const v=e.getContext("2d");for(let r=0;r<18;r++){const a=50+Math.sin(r*2.3)*70+78,u=128+Math.cos(r*1.7)*30,f=40+r*37%60,o=v.createRadialGradient(a,u,0,a,u,f);o.addColorStop(0,"rgba(255,255,255,0.4)"),o.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=o,v.fillRect(0,0,256,256)}return B=e,e}function ue(e,v,{count:r=10,w:a=60,y:u=1,d:f=30,z:o=0,size:S=18,opacity:d=.7,drift:i=.6,shade:g=16052456}={}){const c=new L({map:e.canvasTexture(Z()),color:g,transparent:!0,opacity:d,depthWrite:!1,fog:!1}),p=Array.from({length:r},()=>{const n=new U(c),l=S*(.6+e.rand()*.8);n.scale.set(l*2,l*.6,1);const s=[(e.rand()-.5)*a,u+(e.rand()-.5)*S*.3,o+(e.rand()-.5)*f];return v.add(n),{sprite:n,base:s,speed:i*(.5+e.rand())}}),t=n=>p.forEach(({sprite:l,base:s,speed:m})=>{const y=((s[0]+n*m+a/2)%a+a)%a-a/2;l.position.set(y,s[1],s[2])});return t(0),{update:t,material:c}}const $=`
  attribute float aSeed;
  uniform float uTime, uScale, uH, uSize;
  varying float vAlpha;
  void main() {
    float life = fract(uTime * 0.18 + aSeed);
    vec3 p = position + vec3(sin(life * 9.0 + aSeed * 30.0) * 0.12 * life * 3.0, life * uH, cos(life * 7.0 + aSeed * 20.0) * 0.08 * life * 3.0);
    vAlpha = (1.0 - life) * smoothstep(0.0, 0.1, life) * 0.35;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(64.0, uSize * (0.4 + life * 1.6) * uScale / -mv.z);
  }`,k=`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - r)); }`;function ce(e,v,r,a,u,{h:f=1.2,count:o=120,size:S=.08,shade:d=7235423}={}){const i=new T,g=new Float32Array(o*3),c=new Float32Array(o);for(let n=0;n<o;n++)c[n]=n/o;i.setAttribute("position",new h(g,3)),i.setAttribute("aSeed",new h(c,1));const p=e.style==="lantern"?new C(.75,.66,.56):new C(d),t=new _(i,new P({uniforms:{uTime:e.shared.uTime,uScale:e.shared.uScale,uH:{value:f},uSize:{value:S},uInk:{value:p}},vertexShader:$,fragmentShader:k,transparent:!0,depthWrite:!1}));return t.position.set(r,a,u),t.frustumCulled=!1,v.add(t),t}const ee=`
  attribute vec3 aStart; attribute vec2 aGlyph; attribute float aSeed;
  uniform float uTime, uScale, uAt, uDur, uSize, uScatter, uBig, uSpin;
  varying float vAlpha;
  void main() {
    float s = clamp((uTime - uAt - aSeed * uDur * 0.4) / (uDur * 0.6), 0.0, 1.0);
    float g = s * s * (3.0 - 2.0 * s);
    vec3 target = vec3(aGlyph * uBig, (aSeed - 0.5) * 0.1 * uBig);
    vec3 drift = aStart + vec3(sin(uTime * 0.7 + aSeed * 30.0), cos(uTime * 0.6 + aSeed * 20.0), sin(uTime * 0.5 + aSeed * 11.0)) * 0.4;
    float a = (1.0 - g) * uSpin * (aSeed - 0.5) * 6.0;
    drift.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * drift.xz;
    vec3 p = mix(drift, target, g);
    float sc = clamp((uTime - uScatter - aSeed * 0.6) / 1.4, 0.0, 1.0);
    p += normalize(vec3(aGlyph, aSeed - 0.5) + 0.001) * sc * sc * uBig * 1.2;
    vAlpha = 0.5 * (0.3 + 0.7 * g) * (1.0 - sc);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(48.0, uSize * uScale / -mv.z);
  }`,te=`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - smoothstep(0.0, 1.0, r))); }`;function de(e,v,r,{size:a=4,at:u=0,dur:f=3,count:o=3e3,spread:S=14,scatter:d=999,ink:i=3090982,drop:g=.12,spin:c=1}={}){const p=N(r,e.rand),t=new T,n=new Float32Array(o*3),l=new Float32Array(o*2),s=new Float32Array(o);for(let A=0;A<o;A++){const w=e.rand()*Math.PI*2,F=S*(.4+e.rand()*.6);n.set([Math.cos(w)*F,(e.rand()-.5)*S*.6,Math.sin(w)*F*.6],A*3),l.set(p(),A*2),s[A]=e.rand()}t.setAttribute("position",new h(n,3)),t.setAttribute("aStart",new h(n,3)),t.setAttribute("aGlyph",new h(l,2)),t.setAttribute("aSeed",new h(s,1));const m=e.style==="lantern",y={uTime:e.shared.uTime,uScale:e.shared.uScale,uAt:{value:u},uDur:{value:f},uSize:{value:m?Math.min(g,a*.05):g},uScatter:{value:d},uBig:{value:a},uSpin:{value:c},uInk:{value:m?new C(.45,.28,.12):new C(i)}},b=new _(t,new P({uniforms:y,vertexShader:ee,fragmentShader:te,transparent:!0,depthWrite:!1,blending:m?W:D}));return b.frustumCulled=!1,v.add(b),{points:b,uniforms:y}}const ae=`
  attribute vec3 aDir; attribute float aSeed, aBurst;
  uniform float uTime, uScale, uStart, uEvery, uSize, uSpeed;
  varying float vAlpha; varying float vRed;
  void main() {
    float k = floor(aBurst);
    float t0 = uStart + k * uEvery;
    float life = (uTime - t0) / 2.2;
    vec3 origin = vec3(sin(k * 12.9) * 6.0, 8.0 + cos(k * 7.1) * 2.5, cos(k * 3.3) * 3.0);
    vec3 p = origin + aDir * uSpeed * (1.0 - exp(-life * 2.5)) + vec3(0.0, -life * life * 1.6, 0.0);
    vAlpha = (life > 0.0 && life < 1.0) ? (1.0 - life) : 0.0;
    vRed = step(0.5, fract(aSeed * 7.0 + k * 0.37));
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = vAlpha <= 0.0 ? 0.0 : min(40.0, uSize * uScale / -mv.z);
  }`,re=`
  varying float vAlpha; varying float vRed;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; vec3 c = mix(vec3(0.16, 0.13, 0.11), vec3(0.78, 0.18, 0.1), vRed); gl_FragColor = vec4(c, vAlpha * (1.0 - r * r)); }`,ne=`
  varying float vAlpha; varying float vRed;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard;
    vec3 c = mix(vec3(2.6, 1.7, 0.75), vec3(2.8, 0.7, 0.3), vRed);
    gl_FragColor = vec4(c * vAlpha * (exp(-r * r * 4.0) + 0.3 * (1.0 - r)), 1.0);
  }`;function ve(e,v,{bursts:r=8,perBurst:a=260,start:u=0,every:f=1.2,size:o=.12,speed:S=4}={}){const d=r*a,i=new T,g=new Float32Array(d*3),c=new Float32Array(d*3),p=new Float32Array(d),t=new Float32Array(d),n=new E;for(let m=0;m<d;m++)n.set(e.rand()-.5,e.rand()-.5,e.rand()-.5).normalize().multiplyScalar(.6+e.rand()*.4),c.set(n.toArray(),m*3),p[m]=e.rand(),t[m]=Math.floor(m/a);i.setAttribute("position",new h(g,3)),i.setAttribute("aDir",new h(c,3)),i.setAttribute("aSeed",new h(p,1)),i.setAttribute("aBurst",new h(t,1));const l=e.style==="lantern",s=new _(i,new P({uniforms:{uTime:e.shared.uTime,uScale:e.shared.uScale,uStart:{value:u},uEvery:{value:f},uSize:{value:o*(l?1.3:1)},uSpeed:{value:S}},vertexShader:ae,fragmentShader:l?ne:re,transparent:!0,depthWrite:!1,blending:l?W:D}));return s.frustumCulled=!1,v.add(s),s}function fe(e,v,r,a,u,{rings:f=6,max:o=4,shade:S=7235423}={}){const d=e.group(v,r,a,u),i=e.style==="lantern",g=Array.from({length:f},(c,p)=>{const t=new G({color:i?new C(1.5,1.05,.55):S,transparent:!0,opacity:0,side:H,depthWrite:!1,blending:i?W:D});return t.userData.lantern=i,{ring:e.mesh(new Q(.96,1,64),t,d),m:t,k:p}});return{group:d,update:(c,p=1)=>g.forEach(({ring:t,m:n,k:l})=>{const s=(c*.35+l/f)%1;t.scale.setScalar(.2+s*o),n.opacity=p*(1-s)*.5})}}export{le as a,ve as f,de as i,ue as m,se as p,fe as r,ce as s};
