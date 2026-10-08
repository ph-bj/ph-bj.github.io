import{V as xe,C as y,v as H,B as ye,c as D,d as Ye,e as j,A as $e,r as G,y as mt,l as ft,z as vt,u as qe,f as pt,F as dt,G as ht,H as gt,M as pe,W as wt,J as Ge,K as xt,O as yt,R as St,U as bt,X as Mt,Y as Ct,Z as At,_ as kt,$ as Pt,a0 as ve,a1 as Rt,a2 as Tt,o as Lt,x as Xe,a3 as zt,w as Dt,D as Gt,N as Et,h as Ee,k as Fe,j as ne,s as _e,a4 as Ft,a5 as _t,P as re,a6 as It,a7 as de,a8 as Ut,g as Nt}from"./vendor-three-CFKQDdr8.js";import{a as Z,e as ie,p as se,f as Ie}from"./sceneText-Cfi43gKz.js";import{C as le}from"./index-CeWvJwan.js";const S=t=>new y(t),K=t=>.2126*t.r+.7152*t.g+.0722*t.b,ae={top:S(660262),horizon:S(2896466),glow:S(3021350),fog:S(2041152),stars:1},Ue={top:S(1382968),horizon:S(6175820),glow:S(6958102),fog:S(3352894),stars:.35},Ne={top:S(858675),horizon:S(4214895),glow:S(1185318),fog:S(3029592),stars:.55},Oe=S(16052456),Ot=S(7235423),We={a:new y,b:new y,c:new y};function Wt(t){if(t.night)return t;const e=We.a.setHex(t.top),i=H.clamp((K(Oe)-K(e))/(K(Oe)-K(Ot)),0,1),o=H.clamp(t.moonGain/.62,0,1),p=i*(1-o),m=a=>We.b.copy(ae[a]).lerp(Ue[a],p).lerp(Ne[a],o).getHex();return{top:m("top"),horizon:m("horizon"),glow:m("glow"),fog:m("fog"),moon:t.moon,moonSize:t.moonSize*.75,moonGain:2.3*o,stars:ae.stars+(Ue.stars-ae.stars)*p+(Ne.stars-ae.stars)*o,density:t.density*.6,bloom:.72+.18*p}}const Bt=`
  uniform vec4 uLanternTint;
  uniform vec3 uLanternGlow;
  uniform float uLanternUnlit;
  vec3 lanternRamp(float v) {
    vec3 c = mix(vec3(0.012, 0.014, 0.026), vec3(0.036, 0.022, 0.024), smoothstep(0.0, 0.16, v));
    c = mix(c, vec3(0.105, 0.042, 0.032), smoothstep(0.16, 0.3, v));
    c = mix(c, vec3(0.2, 0.12, 0.075), smoothstep(0.3, 0.5, v));
    c = mix(c, vec3(0.3, 0.26, 0.22), smoothstep(0.5, 0.72, v));
    c = mix(c, vec3(0.5, 0.43, 0.33), smoothstep(0.72, 0.9, v));
    return mix(c, vec3(0.64, 0.57, 0.45), smoothstep(0.9, 1.0, v));
  }
  float lanternLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
  vec3 lanternGrade(vec3 raw) {
    // Writing in WRITING_INK (pure blue) is separated from its page by its blue excess, as in the ink pass.
    float e = raw.b - max(raw.r, raw.g);
    float writing = clamp((e + 0.17) / 1.17, 0.0, 1.0) * smoothstep(0.1, 0.18, e);
    vec3 c = clamp((raw - writing * vec3(0.0, 0.0, 1.0)) / max(1.0 - writing, 0.05), 0.0, 1.0);
    float hi = max(c.r, max(c.g, c.b)), lo = min(c.r, min(c.g, c.b));
    float colourful = smoothstep(0.2, 0.38, (hi - lo) / max(hi, 1e-4));
    float v = pow(lanternLuma(c), 1.0 / 2.2);
    vec3 grey = lanternRamp(v);
    // A silk or house colour at the ramp's own brightness.
    vec3 tint = uLanternTint.rgb * (lanternLuma(grey) / max(lanternLuma(uLanternTint.rgb), 1e-3));
    grey = mix(grey, tint, uLanternTint.a);
    // Unlit things are light itself when near white, otherwise dimmed into the night.
    if (uLanternUnlit > 0.5) grey = v > 0.965 ? uLanternGlow * (0.7 + 0.3 * smoothstep(0.965, 0.99, v)) : grey * 0.55;
    vec3 kept = uLanternUnlit > 0.5 ? c * 0.9 : c;
    vec3 graded = mix(grey, kept, colourful);
    return mix(graded, vec3(0.012, 0.009, 0.008), writing);
  }`,Vt=new Map([[4867134,[2766422,.8]],[4143669,[5905942,.75]],[3090982,[2757906,.5]],[15722716,[15249546,.55]],[15130838,[15785140,.3]],[12169896,[9213620,.15]]]),Be=[2902662,5212792,8007256,11567670,2779764,11819620,4090426,6970016,10135752,10504746,3824288,12623976];function Ht(t){const e=Math.pow(K(S(t)),.45454545454545453),i=(Math.imul(t^t>>>13,2654435761)>>>0)%Be.length;return[Be[i],e>.85?.45:e<.2?.55:.72]}const Ve={pearl:new y(1,.93,.8).multiplyScalar(1.35),flame:new y(1,.62,.3).multiplyScalar(2.3)};function Kt(t){const e=t;if(e.userData.lantern)return;if(e.userData.lantern=!0,e instanceof j){e.uniforms.uLantern&&(e.uniforms.uLantern.value=1);return}if(e instanceof pt){if(e.color){const f=K(e.color);e.color.set(5661326).multiplyScalar(.3+.35*f)}e.opacity*=.55;return}if(!("color"in e)||!e.color||e instanceof dt||e instanceof ht)return;const i=e.color.getHex(),o=e instanceof pe,[p,m]=e.userData.silk?Ht(i):Vt.get(i)??[16777215,0],a=i===16777215||i===16774890||i===16775404||i===15255666,u={uLanternTint:{value:new gt(...S(p).toArray(),m)},uLanternGlow:{value:e.transparent&&e.opacity<.3?new y(.32,.3,.27):(a?Ve.flame:Ve.pearl).clone().multiplyScalar(e.transparent?.4:1)},uLanternUnlit:{value:o?1:0}};e.onBeforeCompile=f=>{Object.assign(f.uniforms,u),f.fragmentShader=f.fragmentShader.replace("void main() {",`${Bt}
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = lanternGrade(diffuseColor.rgb);`)},e.customProgramCacheKey=()=>"lantern",e.needsUpdate=!0}const Yt=S(16754266),$t=S(10334950);function He(t){t.traverse(e=>{if(e instanceof mt){if(e.userData.lantern)return;e.userData.lantern=!0;const o=e.color,p=Math.max(o.r,o.g,o.b)-Math.min(o.r,o.g,o.b)<.12;p&&(e instanceof ft||e instanceof vt)?(o.copy(Yt),e.distance>0&&e.distance<=5?(e.decay=Math.max(e.decay,2),o.multiplyScalar(.45)):o.multiplyScalar(1.5)):p&&e instanceof qe&&(o.copy($t),e.intensity*=.6);return}const i=e;i.material&&[].concat(i.material).forEach(Kt)})}const Ke=new y(1.55,1.08,.56),qt=`
  attribute vec3 aColor; attribute float aSeed;
  uniform float uTime, uScale, uStrength;
  uniform vec3 uCamera;
  varying vec3 vColor;
  void main() {
    // A box of drifting light around the camera, wrapped so it never runs out.
    vec3 box = vec3(22.0, 9.0, 22.0);
    vec3 drift = vec3(sin(uTime * 0.21 + aSeed * 40.0) * 0.6, uTime * (0.08 + aSeed * 0.14), cos(uTime * 0.17 + aSeed * 23.0) * 0.6);
    vec3 p = uCamera + mod(position + drift - uCamera + box * 0.5, box) - box * 0.5;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = -mv.z;
    float twinkle = 0.55 + 0.45 * sin(uTime * (1.3 + aSeed * 2.1) + aSeed * 60.0);
    // Faint far off and never on the lens.
    vColor = aColor * twinkle * uStrength * smoothstep(0.8, 2.6, d) * (1.0 - smoothstep(8.0, 11.0, d));
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(9.0, (0.028 + aSeed * 0.03) * uScale / d);
  }`,Xt=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * exp(-r * r * 4.0), 1.0);
  }`;function Zt(t,e,i=260){const o=new ye,p=new Float32Array(i*3),m=new Float32Array(i*3),a=new Float32Array(i),u=S(16752722).multiplyScalar(1.6),f=S(12374271).multiplyScalar(1.1),k=S(16767130).multiplyScalar(1.4);for(let b=0;b<i;b++){p.set([(e()-.5)*22,(e()-.5)*9,(e()-.5)*22],b*3);const M=e();(M<.5?u:M<.8?k:f).toArray(m,b*3),a[b]=e()}o.setAttribute("position",new D(p,3)),o.setAttribute("aColor",new D(m,3)),o.setAttribute("aSeed",new D(a,1));const v={...t,uStrength:{value:1},uCamera:{value:new G}},g=new Ye(o,new j({uniforms:v,vertexShader:qt,fragmentShader:Xt,blending:$e,transparent:!0,depthWrite:!1,fog:!1}));return g.frustumCulled=!1,g.userData.lantern=!0,{points:g,uniforms:v}}const Jt={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new xe(1,1)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uResolution;
    varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c *= mix(vec3(0.93, 0.97, 1.08), vec3(1.05, 1.0, 0.9), smoothstep(0.08, 0.7, l));
      c = c * 0.965 + vec3(0.012, 0.014, 0.03);
      vec2 q = vUv - 0.5;
      q.x *= uResolution.x / max(uResolution.y, 1.0) * 0.75;
      c *= 1.0 - 0.42 * smoothstep(0.25, 0.85, length(q));
      c += (hash(floor(vUv * uResolution) + fract(uTime * 7.0) * 91.0) - 0.5) * 0.024;
      gl_FragColor = vec4(c, 1.0);
    }`},Se=t=>Math.min(1,Math.max(0,t)),Ze=t=>{const e=Se(t);return e*e*(3-2*e)},ce={thick:3090982,mid:8222318,pale:12169896,wash:14078150,paper:16052456},jt={paper:(t=.02)=>({top:ce.paper,horizon:ce.paper,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:ce.paper,density:t}),moonlit:(t=[.25,.24,-1],e=.025)=>({top:11840931,horizon:15131096,glow:0,moon:t,moonSize:.06,moonGain:.62,bloom:0,stars:0,fog:15526112,density:e})};function he(t){return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function be(t,e){const i=t.getAttribute("position").count,o=new Float32Array(i*3);for(let p=0;p<i;p++)e.toArray(o,p*3);return t.setAttribute("color",new D(o,3)),t}function Je(t,e,i,o){const a=[],u=[],f=[];for(let v=0;v<=8;v++)for(let g=0;g<=12;g++){const b=g/12*2-1,M=v/8*2-1,_=Math.min((1-Math.abs(M))*e/2,(1-Math.abs(b))*t/2)/(e/2);if(a.push(b*t/2,i*Math.pow(Math.min(1,_),1.5)+i*.25*Math.pow(Math.abs(b*M),5),M*e/2),u.push(g/12,v/8),g<12&&v<8){const I=v*13+g,U=I+12+1;f.push(I,U,I+1,I+1,U,U+1)}}const k=new ye;return k.setAttribute("position",new de(a,3)),k.setAttribute("uv",new de(u,2)),k.setIndex(f),k.computeVertexNormals(),be(k.toNonIndexed(),o)}function Qt(t,e,i){const o=(p,m,a,u,f)=>be(new Xe(p,m,a).translate(0,u,0).toNonIndexed(),new y(f));return It([o(.96,.08,.72,.04,i),o(.8,.42,.56,.29,e),Je(1.12,.86,.36,new y(t)).translate(0,.5,0)])}function eo(t,e,i,o){const p=new re(t,e,4,6).translate(0,e/2,0),m=p.getAttribute("position"),a=[],u=new y(i),f=new y(o),k=new y;for(let v=0;v<m.count;v++){const g=m.getX(v),b=m.getY(v)/e,M=.3+.7*Math.sin(Math.min(1,b*1.6)*Math.PI/2);m.setXYZ(v,g*M,m.getY(v)+Math.sin(g*60)*.004*b,(g/(t/2))**2*t*.3+Math.sin(b*Math.PI)*e*.1),k.lerpColors(u,f,Math.pow(Math.max(0,b),.8)).toArray(a,a.length)}return p.setAttribute("color",new de(a,3)),p.computeVertexNormals(),p}const J="#0000ff",je="#b8283c";function to(t,e){const i=document.createElement("canvas");i.width=i.height=200;const o=i.getContext("2d",{willReadFrequently:!0});o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle",o.font=Z(176,700);const p=ie(t);p?se(o,p,{x:8,y:20,w:184,h:160},{color:"#fff"}):o.fillText(t,100,104);const m=o.getImageData(0,0,200,200).data,a=[];for(let u=0;u<200;u++)for(let f=0;f<200;f++)m[(u*200+f)*4+3]>128&&a.push([f,u]);if(!a.length)for(let u=0;u<400;u++)a.push([40+e()*120,40+e()*120]);return()=>{const[u,f]=a[Math.floor(e()*a.length)];return[(u+e())/200-.5,.5-(f+e())/200]}}const oo=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,no=`
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
  }`,ao=`
  attribute vec3 aColor;
  attribute float aSize, aOn, aSeed;
  uniform float uTime, uScale;
  varying vec3 vColor;
  void main() {
    float on = aOn < 0.0 ? 1.0 : smoothstep(aOn, aOn + 0.7, uTime);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // Lights brushing past the lens fade rather than fill the frame.
    vColor = aColor * on * (0.82 + 0.18 * sin(uTime * (5.0 + aSeed * 4.0) + aSeed * 40.0)) * smoothstep(0.6, 3.0, -mv.z);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = on < 0.01 ? 0.0 : min(180.0, aSize * uScale / -mv.z * (0.5 + 0.5 * on));
  }`,Qe=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`,et=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`,tt=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`,ro={uniforms:{tDiffuse:{value:null},uResolution:{value:new xe(1,1)},uPaper:{value:new G(.94,.91,.84)},uInk:{value:new G(.11,.09,.08)},uSeal:{value:new G(.66,.2,.13)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${tt}
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
    }`},io=`
  vec3 lanternPage(vec3 raw) {
    float e = raw.b - max(raw.r, raw.g);
    float writing = clamp((e + 0.17) / 1.17, 0.0, 1.0) * smoothstep(0.1, 0.18, e);
    vec3 c = clamp((raw - writing * vec3(0.0, 0.0, 1.0)) / max(1.0 - writing, 0.05), 0.0, 1.0);
    float hi = max(c.r, max(c.g, c.b)), lo = min(c.r, min(c.g, c.b));
    float v = pow(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1.0 / 2.2);
    vec3 paper = mix(vec3(0.05, 0.03, 0.025), vec3(0.62, 0.52, 0.38), smoothstep(0.1, 0.95, v));
    vec3 graded = mix(paper, c, smoothstep(0.2, 0.38, (hi - lo) / max(hi, 1e-4)));
    return mix(graded, vec3(0.012, 0.009, 0.008), writing);
  }`;function ge(t,e=new y(1,1,1),{sharp:i=!1,flat:o}={}){return new j({uniforms:{map:{value:t},uReveal:{value:0},uOpacity:{value:1},uColor:{value:e},uFlat:{value:o??new y},uFlatOn:{value:o?1:0},uLantern:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor, uFlat;
      uniform float uFlatOn, uLantern;
      varying vec2 vUv;
      ${tt}
      ${io}
      void main() {
        // Writing samples a sharper mip level, so characters stay crisp when shown small.
        vec4 texel = texture2D(map, vUv${i?", -0.5":""});
        float n = noise(vUv * vec2(5.0, 10.0)) * 0.6 + noise(vUv * 40.0) * 0.4;
        float alpha = texel.a * smoothstep(n - 0.08, n + 0.08, uReveal * 1.3 - 0.15) * uOpacity;
        if (alpha < 0.02) discard;
        // Writing drawn over the finished ink picture uses one flat, display-ready colour.
        vec3 page = texel.rgb * uColor;
        if (uLantern > 0.5) page = lanternPage(page);
        gl_FragColor = vec4(uFlatOn > 0.5 ? uFlat : page, alpha);
      }`,transparent:!0,depthWrite:!1})}const Me=1,ot={ink:new y(.11,.09,.08),red:new y(.64,.19,.13)};class so extends Ut{constructor(e,i){super(),this.scene=e,this.camera=i,this.needsSwap=!1}render(e,i,o){const p=e.autoClear,m=this.camera.layers.mask;e.autoClear=!1,this.camera.layers.set(Me),e.setRenderTarget(this.renderToScreen?null:o),e.clearDepth(),e.render(this.scene,this.camera),this.camera.layers.mask=m,e.autoClear=p}}function ue(t,e,i,o){t(),!(typeof document>"u"||!document.fonts)&&document.fonts.load(i,o).then(()=>{t(),e.needsUpdate=!0},()=>{})}function we(t,e,i=ot.ink){t.layers.set(Me),e.uniforms.uFlat.value=i,e.uniforms.uFlatOn.value=1}function lo(t,e,i,o,p,m="night"){const a=new wt({antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(devicePixelRatio,2));const u=m==="lantern";a.outputColorSpace=Ge,a.toneMapping=m==="ink"?xt:yt,a.toneMappingExposure=u?1.2:1.1,a.domElement.setAttribute("aria-hidden","true"),a.domElement.style.cssText="width:100%;height:100%;display:block",t.appendChild(a.domElement);const f=new St,k=new bt(2763846,.0055);f.fog=k;const v=new Mt(40,1,.05,1200),g=new Ct(a);g.addPass(new At(f,v));const b=new kt(new xe(256,256),.9,u?.7:.55,u?.8:.85);g.addPass(b),g.addPass(new Pt);const M=u?new ve(Jt):void 0;M&&g.addPass(M);const _=m==="ink"?new ve(ro):void 0;_&&(b.enabled=!1,g.addPass(_),g.addPass(new so(f,v)),g.addPass(new ve(Rt)));const I=new Set;let U=!1,Y=!1,R=0,Q=0,Ce=-1,$,N=()=>{};const Ae=z=>{z.preventDefault(),Y=!1,N(),i()},ke=()=>{if(U)return;U=!0,$==null||$.disconnect(),a.setAnimationLoop(null),document.removeEventListener("visibilitychange",N),a.domElement.removeEventListener("webglcontextlost",Ae);const z=new Set;f.traverse(A=>{const O=A;O.geometry&&!(A instanceof Nt)&&O.geometry.dispose(),O.material&&[].concat(O.material).forEach(P=>z.add(P))}),z.forEach(A=>A.dispose()),I.forEach(A=>A.dispose()),g.passes.forEach(A=>A.dispose()),g.dispose(),a.dispose(),a.forceContextLoss(),a.domElement.remove()};try{const z=he(o),A={uTime:{value:0},uScale:{value:1}},O=(r,n=0,l=0,h=0)=>{const d=new Tt;return d.position.set(n,l,h),r.add(d),d},P=(r,n,l,h=0,d=0,s=0)=>{const c=new Lt(r,n);return c.position.set(h,d,s),l.add(c),c},nt=(r,n,[l,h,d],[s,c,w])=>P(new Xe(s,c,w),n,r,l,h,d),ee=(r,n=!1)=>{const l=new zt(r);return l.colorSpace=Ge,n&&(l.anisotropy=a.capabilities.getMaxAnisotropy()),I.add(l),l},at=(r,n={})=>new Dt({color:r,...n}),rt=new pe({color:329483,side:Gt}),Pe=(r,n)=>{const l=new ye,h=new Float32Array(n.length*3),d=new Float32Array(n.length*3),s=new Float32Array(n.length),c=new Float32Array(n.length),w=new Float32Array(n.length);n.forEach(([C,L,B,V],T)=>{h.set(C,T*3),L.toArray(d,T*3),s[T]=B,c[T]=V,w[T]=z()}),l.setAttribute("position",new D(h,3)),l.setAttribute("aColor",new D(d,3)),l.setAttribute("aSize",new D(s,1)),l.setAttribute("aOn",new D(c,1)),l.setAttribute("aSeed",new D(w,1));const x=new Ye(l,new j({uniforms:A,vertexShader:ao,fragmentShader:m==="ink"?Qe:et,blending:m==="ink"?Et:$e,transparent:!0,depthWrite:!1}));return x.frustumCulled=!1,r.add(x),x},Re=(r,n=16753228)=>new y(n).multiplyScalar(r),it=(r,[n,l,h],d=1)=>{const s=O(r,n,l,h);s.scale.setScalar(d);const c=new Ee({color:13123626,emissive:u?16727060:16734756,emissiveIntensity:u?1.3:1.8,roughness:.6});u&&Pe(s,[[[0,0,0],Re(.9,16738858),1.5,-1]]);const w=new Ee({color:9071156,roughness:.5,metalness:.4});return P(new Fe(1,16,12),c,s).scale.set(.22,.27,.22),P(new ne(.12,.12,.05,12),w,s,0,.27,0),P(new ne(.12,.12,.05,12),w,s,0,-.27,0),P(new ne(.008,.008,.6,4),w,s,0,.58,0),P(new ne(.03,.005,.28,6),c,s,0,-.43,0),s},st=r=>{const n=new _e(r.map(([,d])=>new G(...d)),!1,"centripetal"),l=new _e(r.map(([,,d])=>new G(...d)),!1,"centripetal"),h=new G;return d=>{const s=r[0][0],c=r[r.length-1][0],w=s+(c-s)*Ze((d-s)/(c-s));let x=0;for(;x<r.length-2&&w>r[x+1][0];)x++;const C=(x+Se((w-r[x][0])/(r[x+1][0]-r[x][0])))/(r.length-1);v.position.copy(n.getPoint(C)),v.lookAt(l.getPoint(C,h))}},E=new j({uniforms:{uTop:{value:new y},uHorizon:{value:new y},uGlow:{value:new y},uMoon:{value:new G},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:oo,fragmentShader:no,side:Ft,depthWrite:!1,fog:!1}),me=P(new Fe(500,48,24),E,f);me.renderOrder=-1,me.frustumCulled=!1;const Te=new _t(m==="ink"?9408399:8228799,m==="ink"?2236962:2760476,u?.65:.55);f.add(Te);const W=new qe(m==="ink"?12369084:11124198,1.1);Te.userData.lantern=W.userData.lantern=!0,f.add(W,W.target);const fe=new G;let Le;const lt=p({renderer:a,style:m,addEffect:r=>g.addPass(r),scene:f,camera:v,rand:z,shared:A,ink:rt,group:O,mesh:P,box:nt,lambert:at,canvasTexture:ee,glows:Pe,warm:Re,lantern:it,path:st,setEnv:r=>{if(r===Le)return;Le=r;const n=u?Wt(r):r;E.uniforms.uTop.value.setHex(n.top),E.uniforms.uHorizon.value.setHex(n.horizon),E.uniforms.uGlow.value.setHex(n.glow),fe.set(n.moon[0],n.moon[1],n.moon[2]).normalize(),E.uniforms.uMoon.value.copy(fe),E.uniforms.uMoonSize.value=n.moonSize,E.uniforms.uMoonGain.value=n.moonGain,E.uniforms.uStars.value=n.stars,b.strength=n.bloom,k.color.setHex(n.fog),k.density=n.density,W.intensity=n.moon[1]>0?1.1:.15},portrait:()=>v.aspect<.9,calligraphy:(r,n,{size:l=1,columns:h=1}={})=>{const d=[...n],s=Math.ceil(d.length/h),c=Math.min(768,Math.max(256,Math.ceil(l*320/64)*64),Math.floor(4096/Math.max(s,h))),w=document.createElement("canvas");w.width=h*c,w.height=s*c;const x=w.getContext("2d"),C=Z(c*.86,l>=.8?700:500),L=ie(h>1?Array.from({length:h},(oe,F)=>d.slice(F*s,(F+1)*s).join("")):n),B=()=>{if(x.clearRect(0,0,w.width,w.height),L){se(x,L,{x:c*.06,y:c*.06,w:w.width-c*.12,h:w.height-c*.12},{color:J});return}x.fillStyle=J,x.font=C,d.forEach((oe,F)=>Ie(x,oe,(h-1-Math.floor(F/s)+.5)*c,(F%s+.5)*c))},V=ee(w,!0);ue(B,V,C,n);const T=ge(V,void 0,{sharp:!0,flat:u?Ke:void 0}),X=P(new re(h*l,s*l),T,r);return m==="ink"&&we(X,T),{mesh:X,material:T}},glyph:(r,n)=>{const d=document.createElement("canvas");d.width=d.height=1024;const s=d.getContext("2d");s.scale(5.12,5.12);const c=ie(n),w=()=>{if(s.clearRect(0,0,200,200),c){se(s,c,{x:8,y:20,w:184,h:160},{color:J});return}s.fillStyle=J,s.textAlign="center",s.textBaseline="middle",s.font=Z(176,700),s.fillText(n,100,104)},x=ee(d,!0);ue(w,x,Z(176,700),n);const C=ge(x,void 0,{sharp:!0,flat:u?Ke:void 0}),L=P(new re(1,1),C,r);return m==="ink"&&we(L,C),{mesh:L,material:C}},seal:(r,n="品花",l=1.8)=>{const s=document.createElement("canvas");s.width=s.height=256;const c=s.getContext("2d");c.scale(2,2);const w=[...n],x=w.length>2?2:1,C=Math.ceil(w.length/x),L=Z(Math.floor(100/C),700),B=ie(n),V=()=>{if(c.clearRect(0,0,128,128),c.fillStyle=je,c.fillRect(6,6,116,116),B){se(c,B,{x:14,y:14,w:100,h:100},{color:"#f4ece0"});return}c.fillStyle="#f4ece0",c.font=L,w.forEach((oe,F)=>Ie(c,oe,64+(x===2?Math.floor(F/C)?-26:26:0),12+(F%C+.5)*(104/C)))},T=ee(s,!0);ue(V,T,L,n);const X=new pe({map:T,transparent:!0,opacity:0,fog:!1});return{mesh:P(new re(l,l),X,r),material:X}}}),q=u?Zt(A,he(o+7)):void 0;q&&f.add(q.points),u&&He(f);let ct=0;const te=()=>{A.uTime.value=R,lt(R),u&&++ct%120===0&&He(f),M&&(M.uniforms.uTime.value=R),q==null||q.uniforms.uCamera.value.copy(v.position),W.position.copy(v.position).addScaledVector(fe,100),W.target.position.copy(v.position),me.position.copy(v.position),g.render()},ze=40,De=()=>{if(U)return;const{width:r,height:n}=t.getBoundingClientRect(),l=Math.max(1,r),h=Math.max(1,n);a.setSize(l,h,!1),g.setPixelRatio(a.getPixelRatio()),g.setSize(l,h),_==null||_.uniforms.uResolution.value.set(l*a.getPixelRatio(),h*a.getPixelRatio()),M==null||M.uniforms.uResolution.value.set(l*a.getPixelRatio(),h*a.getPixelRatio()),v.aspect=l/h;const d=2*Math.atan(Math.tan(H.degToRad(ze)/2)*1.6);v.fov=Math.min(75,Math.max(ze,H.radToDeg(2*Math.atan(Math.tan(d/2)/v.aspect)))),v.updateProjectionMatrix(),A.uScale.value=h*a.getPixelRatio()/(2*Math.tan(H.degToRad(v.fov)/2)),te()},ut=r=>{Q&&Y&&!document.hidden&&(R=Math.min(le,R+Math.min((r-Q)/1e3,.1))),Q=r,te(),Math.floor(R*12)!==Ce&&(Ce=Math.floor(R*12),e(R)),R>=le&&(Y=!1,a.setAnimationLoop(null))};return N=()=>{Q=0,a.setAnimationLoop(Y&&!document.hidden?ut:null)},$=new ResizeObserver(De),$.observe(t),document.addEventListener("visibilitychange",N),a.domElement.addEventListener("webglcontextlost",Ae),De(),{setPlaying(r){Y=r,N()},seek(r){R=H.clamp(r,0,le),e(R),te(),N()},replay(){R=0,e(0),te(),N()},dispose:ke}}catch(z){throw ke(),z}}const go=Object.freeze(Object.defineProperty({__proto__:null,CINEMA_DURATION:le,INK_SKY:jt,INK_TONE:ce,WRITING_FLAT:ot,WRITING_INK:J,WRITING_LAYER:Me,WRITING_RED:je,asWriting:we,clamp01:Se,createCinema:lo,ease:Ze,glowFragment:et,glyphPixels:to,hallGeometry:Qt,inkDotFragment:Qe,inkRevealMaterial:ge,paint:be,petalGeometry:eo,random:he,roofGeometry:Je,writeInAppFont:ue},Symbol.toStringTag,{value:"Module"}));export{jt as I,Ke as L,je as W,ge as a,J as b,Se as c,to as d,Ze as e,ce as f,et as g,Qt as h,Qe as i,go as j,eo as p,Je as r};
