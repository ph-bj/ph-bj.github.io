import{B as M,C as P,c as g,e as C,f as T,i as I,w as _,M as B,D as E,a2 as V,g as R,j,p as Q,I as q,a3 as U,Q as J,v as K,a as L}from"./ChapterReader-Dk1zOsyK.js";const N=`
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
  }`;function te(e,v,{count:r=1500,w:a=30,h:u=14,d:m=24,fall:n=1,wind:p=.5,swirl:c=.4,size:s=.06,color:S=16777215,dark:d=!1,x:l=0,y:t=7,z:f=0}={}){const o=new M,i=new Float32Array(r*3),y=new Float32Array(r*3),h=new Float32Array(r),A=new Float32Array(r),b=new P(d?7235423:S);for(let x=0;x<r;x++)i.set([(e.rand()-.5)*a,(e.rand()-.5)*u,(e.rand()-.5)*m],x*3),b.toArray(y,x*3),h[x]=e.rand(),A[x]=s*(.5+e.rand());o.setAttribute("position",new g(i,3)),o.setAttribute("aColor",new g(y,3)),o.setAttribute("aSeed",new g(h,1)),o.setAttribute("aSize",new g(A,1));const w={uTime:e.shared.uTime,uScale:e.shared.uScale,uSpeed:{value:1},uFall:{value:n},uWind:{value:p},uH:{value:u},uW:{value:a},uD:{value:m},uSwirl:{value:c}},z=new C(o,new T({uniforms:w,vertexShader:N,fragmentShader:I,transparent:!0,depthWrite:!1}));return z.position.set(l,t,f),z.frustumCulled=!1,v.add(z),{points:z,uniforms:w}}function re(e,v,{count:r=80,w:a=10,h:u=6,d:m=6,x:n=0,y:p=0,z:c=0,red:s=!0,speed:S=.5,wind:d=.3}={}){const l=Q(.06,.08,s?11546698:15130838,s?16098228:16777215),t=new q(l,new B({vertexColors:!0,side:E}),r);t.position.set(n,p,c),t.frustumCulled=!1,v.add(t);const f=Array.from({length:r},()=>[e.rand(),e.rand(),e.rand(),e.rand()]),o=new L,i=new J,y=new K,h=new _,A=new _(1,1,1),b=w=>{f.forEach(([z,x,D,F],G)=>{const H=(w*S*(.6+D*.6)+F*u)%u;h.set((z-.5)*a+Math.sin(w*1.3+F*10)*.3+w*d*.3%a,u-H,(x-.5)*m+Math.cos(w+F*7)*.2),h.x=((h.x+a/2)%a+a)%a-a/2,i.setFromEuler(y.set(w*(1+z)+F*6,w*.7+x*6,w*(.5+D))),t.setMatrixAt(G,o.compose(h,i,A))}),t.instanceMatrix.needsUpdate=!0};return b(0),{mesh:t,update:b}}let W;function O(){if(W)return W;const e=document.createElement("canvas");e.width=e.height=256;const v=e.getContext("2d");for(let r=0;r<18;r++){const a=50+Math.sin(r*2.3)*70+78,u=128+Math.cos(r*1.7)*30,m=40+r*37%60,n=v.createRadialGradient(a,u,0,a,u,m);n.addColorStop(0,"rgba(255,255,255,0.4)"),n.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=n,v.fillRect(0,0,256,256)}return W=e,e}function ne(e,v,{count:r=10,w:a=60,y:u=1,d:m=30,z:n=0,size:p=18,opacity:c=.7,drift:s=.6,shade:S=16052456}={}){const d=new R({map:e.canvasTexture(O()),color:S,transparent:!0,opacity:c,depthWrite:!1,fog:!1}),l=Array.from({length:r},()=>{const f=new j(d),o=p*(.6+e.rand()*.8);f.scale.set(o*2,o*.6,1);const i=[(e.rand()-.5)*a,u+(e.rand()-.5)*p*.3,n+(e.rand()-.5)*m];return v.add(f),{sprite:f,base:i,speed:s*(.5+e.rand())}}),t=f=>l.forEach(({sprite:o,base:i,speed:y})=>{const h=((i[0]+f*y+a/2)%a+a)%a-a/2;o.position.set(h,i[1],i[2])});return t(0),{update:t,material:d}}const X=`
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
  }`,Y=`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - r)); }`;function oe(e,v,r,a,u,{h:m=1.2,count:n=120,size:p=.08,shade:c=7235423}={}){const s=new M,S=new Float32Array(n*3),d=new Float32Array(n);for(let t=0;t<n;t++)d[t]=t/n;s.setAttribute("position",new g(S,3)),s.setAttribute("aSeed",new g(d,1));const l=new C(s,new T({uniforms:{uTime:e.shared.uTime,uScale:e.shared.uScale,uH:{value:m},uSize:{value:p},uInk:{value:new P(c)}},vertexShader:X,fragmentShader:Y,transparent:!0,depthWrite:!1}));return l.position.set(r,a,u),l.frustumCulled=!1,v.add(l),l}const Z=`
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
  }`,$=`
  uniform vec3 uInk;
  varying float vAlpha;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; gl_FragColor = vec4(uInk, vAlpha * (1.0 - smoothstep(0.0, 1.0, r))); }`;function ie(e,v,r,{size:a=4,at:u=0,dur:m=3,count:n=3e3,spread:p=14,scatter:c=999,ink:s=3090982,drop:S=.12,spin:d=1}={}){const l=U(r,e.rand),t=new M,f=new Float32Array(n*3),o=new Float32Array(n*2),i=new Float32Array(n);for(let A=0;A<n;A++){const b=e.rand()*Math.PI*2,w=p*(.4+e.rand()*.6);f.set([Math.cos(b)*w,(e.rand()-.5)*p*.6,Math.sin(b)*w*.6],A*3),o.set(l(),A*2),i[A]=e.rand()}t.setAttribute("position",new g(f,3)),t.setAttribute("aStart",new g(f,3)),t.setAttribute("aGlyph",new g(o,2)),t.setAttribute("aSeed",new g(i,1));const y={uTime:e.shared.uTime,uScale:e.shared.uScale,uAt:{value:u},uDur:{value:m},uSize:{value:S},uScatter:{value:c},uBig:{value:a},uSpin:{value:d},uInk:{value:new P(s)}},h=new C(t,new T({uniforms:y,vertexShader:Z,fragmentShader:$,transparent:!0,depthWrite:!1}));return h.frustumCulled=!1,v.add(h),{points:h,uniforms:y}}const k=`
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
  }`,ee=`
  varying float vAlpha; varying float vRed;
  void main() { float r = length(gl_PointCoord - 0.5) * 2.0; if (r > 1.0) discard; vec3 c = mix(vec3(0.16, 0.13, 0.11), vec3(0.78, 0.18, 0.1), vRed); gl_FragColor = vec4(c, vAlpha * (1.0 - r * r)); }`;function se(e,v,{bursts:r=8,perBurst:a=260,start:u=0,every:m=1.2,size:n=.12,speed:p=4}={}){const c=r*a,s=new M,S=new Float32Array(c*3),d=new Float32Array(c*3),l=new Float32Array(c),t=new Float32Array(c),f=new _;for(let i=0;i<c;i++)f.set(e.rand()-.5,e.rand()-.5,e.rand()-.5).normalize().multiplyScalar(.6+e.rand()*.4),d.set(f.toArray(),i*3),l[i]=e.rand(),t[i]=Math.floor(i/a);s.setAttribute("position",new g(S,3)),s.setAttribute("aDir",new g(d,3)),s.setAttribute("aSeed",new g(l,1)),s.setAttribute("aBurst",new g(t,1));const o=new C(s,new T({uniforms:{uTime:e.shared.uTime,uScale:e.shared.uScale,uStart:{value:u},uEvery:{value:m},uSize:{value:n},uSpeed:{value:p}},vertexShader:k,fragmentShader:ee,transparent:!0,depthWrite:!1}));return o.frustumCulled=!1,v.add(o),o}function le(e,v,r,a,u,{rings:m=6,max:n=4,shade:p=7235423}={}){const c=e.group(v,r,a,u),s=Array.from({length:m},(S,d)=>{const l=new B({color:p,transparent:!0,opacity:0,side:E,depthWrite:!1});return{ring:e.mesh(new V(.96,1,64),l,c),m:l,k:d}});return{group:c,update:(S,d=1)=>s.forEach(({ring:l,m:t,k:f})=>{const o=(S*.35+f/m)%1;l.scale.setScalar(.2+o*n),t.opacity=d*(1-o)*.5})}}export{te as a,se as f,ie as i,ne as m,re as p,le as r,oe as s};
