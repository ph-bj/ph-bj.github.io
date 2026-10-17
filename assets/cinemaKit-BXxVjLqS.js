import{V as Se,C as y,v as K,B as be,c as G,d as $e,e as te,A as qe,r as E,w as ft,l as vt,x as pt,u as Xe,f as dt,y as ht,z as gt,F as wt,M as he,W as xt,G as Ee,H as yt,J as St,K as bt,O as Mt,R as Ct,U as At,X as Pt,Y as Rt,Z as kt,_ as de,$ as Tt,a0 as Lt,o as zt,a1 as Ze,a2 as Dt,a3 as Gt,D as Et,N as Ft,h as Fe,k as _e,j as re,s as Ie,a4 as _t,a5 as It,P as se,a6 as Ut,a7 as ge,a8 as Nt,g as Ot}from"./vendor-three-h8VsETOf.js";import{a as j,e as le,p as ce,f as Ue,V as Wt}from"./ParagraphCinema-YWxTri0L.js";import{C as Q}from"./define-DPQwU607.js";const S=t=>new y(t),Y=t=>.2126*t.r+.7152*t.g+.0722*t.b,ie={top:S(660262),horizon:S(2896466),glow:S(3021350),fog:S(2041152),stars:1},Ne={top:S(1382968),horizon:S(6175820),glow:S(6958102),fog:S(3352894),stars:.35},Oe={top:S(858675),horizon:S(4214895),glow:S(1185318),fog:S(3029592),stars:.55},We=S(16052456),Vt=S(7235423),Ve={a:new y,b:new y,c:new y};function Bt(t){if(t.night)return t;const e=Ve.a.setHex(t.top),i=K.clamp((Y(We)-Y(e))/(Y(We)-Y(Vt)),0,1),a=K.clamp(t.moonGain/.62,0,1),p=i*(1-a),m=r=>Ve.b.copy(ie[r]).lerp(Ne[r],p).lerp(Oe[r],a).getHex();return{top:m("top"),horizon:m("horizon"),glow:m("glow"),fog:m("fog"),moon:t.moon,moonSize:t.moonSize*.75,moonGain:2.3*a,stars:ie.stars+(Ne.stars-ie.stars)*p+(Oe.stars-ie.stars)*a,density:t.density*.6,bloom:.72+.18*p}}const Ht=`
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
  }`,Kt=new Map([[4867134,[2766422,.8]],[4143669,[5905942,.75]],[3090982,[2757906,.5]],[15722716,[15249546,.55]],[15130838,[15785140,.3]],[12169896,[9213620,.15]]]),Be=[2902662,5212792,8007256,11567670,2779764,11819620,4090426,6970016,10135752,10504746,3824288,12623976];function Yt(t){const e=Math.pow(Y(S(t)),.45454545454545453),i=(Math.imul(t^t>>>13,2654435761)>>>0)%Be.length;return[Be[i],e>.85?.45:e<.2?.55:.72]}const He={pearl:new y(1,.93,.8).multiplyScalar(1.35),flame:new y(1,.62,.3).multiplyScalar(2.3)};function $t(t){const e=t;if(e.userData.lantern)return;if(e.userData.lantern=!0,e instanceof te){e.uniforms.uLantern&&(e.uniforms.uLantern.value=1);return}if(e instanceof dt){if(e.color){const f=Y(e.color);e.color.set(5661326).multiplyScalar(.3+.35*f)}e.opacity*=.55;return}if(!("color"in e)||!e.color||e instanceof ht||e instanceof gt)return;const i=e.color.getHex(),a=e instanceof he,[p,m]=e.userData.silk?Yt(i):Kt.get(i)??[16777215,0],r=i===16777215||i===16774890||i===16775404||i===15255666,u={uLanternTint:{value:new wt(...S(p).toArray(),m)},uLanternGlow:{value:e.transparent&&e.opacity<.3?new y(.32,.3,.27):(r?He.flame:He.pearl).clone().multiplyScalar(e.transparent?.4:1)},uLanternUnlit:{value:a?1:0}};e.onBeforeCompile=f=>{Object.assign(f.uniforms,u),f.fragmentShader=f.fragmentShader.replace("void main() {",`${Ht}
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = lanternGrade(diffuseColor.rgb);`)},e.customProgramCacheKey=()=>"lantern",e.needsUpdate=!0}const qt=S(16754266),Xt=S(10334950);function Ke(t){t.traverse(e=>{if(e instanceof ft){if(e.userData.lantern)return;e.userData.lantern=!0;const a=e.color,p=Math.max(a.r,a.g,a.b)-Math.min(a.r,a.g,a.b)<.12;p&&(e instanceof vt||e instanceof pt)?(a.copy(qt),e.distance>0&&e.distance<=5?(e.decay=Math.max(e.decay,2),a.multiplyScalar(.45)):a.multiplyScalar(1.5)):p&&e instanceof Xe&&(a.copy(Xt),e.intensity*=.6);return}const i=e;i.material&&[].concat(i.material).forEach($t)})}const Ye=new y(1.55,1.08,.56),Zt=`
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
  }`,Jt=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * exp(-r * r * 4.0), 1.0);
  }`;function jt(t,e,i=260){const a=new be,p=new Float32Array(i*3),m=new Float32Array(i*3),r=new Float32Array(i),u=S(16752722).multiplyScalar(1.6),f=S(12374271).multiplyScalar(1.1),R=S(16767130).multiplyScalar(1.4);for(let b=0;b<i;b++){p.set([(e()-.5)*22,(e()-.5)*9,(e()-.5)*22],b*3);const C=e();(C<.5?u:C<.8?R:f).toArray(m,b*3),r[b]=e()}a.setAttribute("position",new G(p,3)),a.setAttribute("aColor",new G(m,3)),a.setAttribute("aSeed",new G(r,1));const v={...t,uStrength:{value:1},uCamera:{value:new E}},g=new $e(a,new te({uniforms:v,vertexShader:Zt,fragmentShader:Jt,blending:qe,transparent:!0,depthWrite:!1,fog:!1}));return g.frustumCulled=!1,g.userData.lantern=!0,{points:g,uniforms:v}}const Qt={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Se(1,1)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},Me=t=>Math.min(1,Math.max(0,t)),Je=t=>{const e=Me(t);return e*e*(3-2*e)},ue={thick:3090982,mid:8222318,pale:12169896,wash:14078150,paper:16052456},eo={paper:(t=.02)=>({top:ue.paper,horizon:ue.paper,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:ue.paper,density:t}),moonlit:(t=[.25,.24,-1],e=.025)=>({top:11840931,horizon:15131096,glow:0,moon:t,moonSize:.06,moonGain:.62,bloom:0,stars:0,fog:15526112,density:e})};function we(t){return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ce(t,e){const i=t.getAttribute("position").count,a=new Float32Array(i*3);for(let p=0;p<i;p++)e.toArray(a,p*3);return t.setAttribute("color",new G(a,3)),t}function je(t,e,i,a){const r=[],u=[],f=[];for(let v=0;v<=8;v++)for(let g=0;g<=12;g++){const b=g/12*2-1,C=v/8*2-1,U=Math.min((1-Math.abs(C))*e/2,(1-Math.abs(b))*t/2)/(e/2);if(r.push(b*t/2,i*Math.pow(Math.min(1,U),1.5)+i*.25*Math.pow(Math.abs(b*C),5),C*e/2),u.push(g/12,v/8),g<12&&v<8){const N=v*13+g,O=N+12+1;f.push(N,O,N+1,N+1,O,O+1)}}const R=new be;return R.setAttribute("position",new ge(r,3)),R.setAttribute("uv",new ge(u,2)),R.setIndex(f),R.computeVertexNormals(),Ce(R.toNonIndexed(),a)}function to(t,e,i){const a=(p,m,r,u,f)=>Ce(new Ze(p,m,r).translate(0,u,0).toNonIndexed(),new y(f));return Ut([a(.96,.08,.72,.04,i),a(.8,.42,.56,.29,e),je(1.12,.86,.36,new y(t)).translate(0,.5,0)])}function oo(t,e,i,a){const p=new se(t,e,4,6).translate(0,e/2,0),m=p.getAttribute("position"),r=[],u=new y(i),f=new y(a),R=new y;for(let v=0;v<m.count;v++){const g=m.getX(v),b=m.getY(v)/e,C=.3+.7*Math.sin(Math.min(1,b*1.6)*Math.PI/2);m.setXYZ(v,g*C,m.getY(v)+Math.sin(g*60)*.004*b,(g/(t/2))**2*t*.3+Math.sin(b*Math.PI)*e*.1),R.lerpColors(u,f,Math.pow(Math.max(0,b),.8)).toArray(r,r.length)}return p.setAttribute("color",new ge(r,3)),p.computeVertexNormals(),p}const ee="#0000ff",Qe="#b8283c";function no(t,e){const i=document.createElement("canvas");i.width=i.height=200;const a=i.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",a.font=j(176,700);const p=le(t);p?ce(a,p,{x:8,y:20,w:184,h:160},{color:"#fff"}):a.fillText(t,100,104);const m=a.getImageData(0,0,200,200).data,r=[];for(let u=0;u<200;u++)for(let f=0;f<200;f++)m[(u*200+f)*4+3]>128&&r.push([f,u]);if(!r.length)for(let u=0;u<400;u++)r.push([40+e()*120,40+e()*120]);return()=>{const[u,f]=r[Math.floor(e()*r.length)];return[(u+e())/200-.5,.5-(f+e())/200]}}const ao=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,ro=`
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
  }`,io=`
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
  }`,et=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`,tt=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`,ot=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`,so={uniforms:{tDiffuse:{value:null},uResolution:{value:new Se(1,1)},uPaper:{value:new E(.94,.91,.84)},uInk:{value:new E(.11,.09,.08)},uSeal:{value:new E(.66,.2,.13)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${ot}
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
    }`},lo=`
  vec3 lanternPage(vec3 raw) {
    float e = raw.b - max(raw.r, raw.g);
    float writing = clamp((e + 0.17) / 1.17, 0.0, 1.0) * smoothstep(0.1, 0.18, e);
    vec3 c = clamp((raw - writing * vec3(0.0, 0.0, 1.0)) / max(1.0 - writing, 0.05), 0.0, 1.0);
    float hi = max(c.r, max(c.g, c.b)), lo = min(c.r, min(c.g, c.b));
    float v = pow(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1.0 / 2.2);
    vec3 paper = mix(vec3(0.05, 0.03, 0.025), vec3(0.62, 0.52, 0.38), smoothstep(0.1, 0.95, v));
    vec3 graded = mix(paper, c, smoothstep(0.2, 0.38, (hi - lo) / max(hi, 1e-4)));
    return mix(graded, vec3(0.012, 0.009, 0.008), writing);
  }`;function xe(t,e=new y(1,1,1),{sharp:i=!1,flat:a}={}){return new te({uniforms:{map:{value:t},uReveal:{value:0},uOpacity:{value:1},uColor:{value:e},uFlat:{value:a??new y},uFlatOn:{value:a?1:0},uLantern:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor, uFlat;
      uniform float uFlatOn, uLantern;
      varying vec2 vUv;
      ${ot}
      ${lo}
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
      }`,transparent:!0,depthWrite:!1})}const Ae=1,nt={ink:new y(.11,.09,.08),red:new y(.64,.19,.13)};class co extends Nt{constructor(e,i){super(),this.scene=e,this.camera=i,this.needsSwap=!1}render(e,i,a){const p=e.autoClear,m=this.camera.layers.mask;e.autoClear=!1,this.camera.layers.set(Ae),e.setRenderTarget(this.renderToScreen?null:a),e.clearDepth(),e.render(this.scene,this.camera),this.camera.layers.mask=m,e.autoClear=p}}function me(t,e,i,a){t(),!(typeof document>"u"||!document.fonts)&&document.fonts.load(i,a).then(()=>{t(),e.needsUpdate=!0},()=>{})}function ye(t,e,i=nt.ink){t.layers.set(Ae),e.uniforms.uFlat.value=i,e.uniforms.uFlatOn.value=1}function uo(t,e,i,a,p,m="night"){const r=new xt({antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio,2));const u=m==="lantern";r.outputColorSpace=Ee,r.toneMapping=m==="ink"?yt:St,r.toneMappingExposure=u?1.2:1.1,r.domElement.setAttribute("aria-hidden","true"),r.domElement.style.cssText="width:100%;height:100%;display:block",t.appendChild(r.domElement);const f=new bt,R=new Mt(2763846,.0055);f.fog=R;const v=new Ct(40,1,.05,1200),g=new At(r);g.addPass(new Pt(f,v));const b=new Rt(new Se(256,256),.9,u?.7:.55,u?.8:.85);g.addPass(b),g.addPass(new kt);const C=u?new de(Qt):void 0;C&&g.addPass(C);const U=m==="ink"?new de(so):void 0;U&&(b.enabled=!1,g.addPass(U),g.addPass(new co(f,v)),g.addPass(new de(Tt)));const N=new Set;let O=!1,$=!1,L=0,oe=0,fe=-1,M,q,F=()=>{};const Pe=D=>{D.preventDefault(),$=!1,F(),i()},Re=()=>{if(O)return;O=!0,q==null||q.disconnect(),r.setAnimationLoop(null),document.removeEventListener("visibilitychange",F),r.domElement.removeEventListener("webglcontextlost",Pe);const D=new Set;f.traverse(P=>{const W=P;W.geometry&&!(P instanceof Ot)&&W.geometry.dispose(),W.material&&[].concat(W.material).forEach(k=>D.add(k))}),D.forEach(P=>P.dispose()),N.forEach(P=>P.dispose()),g.passes.forEach(P=>P.dispose()),g.dispose(),r.dispose(),r.forceContextLoss(),r.domElement.remove()};try{const D=we(a),P={uTime:{value:0},uScale:{value:1}},W=(o,n=0,l=0,h=0)=>{const d=new Lt;return d.position.set(n,l,h),o.add(d),d},k=(o,n,l,h=0,d=0,s=0)=>{const c=new zt(o,n);return c.position.set(h,d,s),l.add(c),c},at=(o,n,[l,h,d],[s,c,w])=>k(new Ze(s,c,w),n,o,l,h,d),ne=(o,n=!1)=>{const l=new Dt(o);return l.colorSpace=Ee,n&&(l.anisotropy=r.capabilities.getMaxAnisotropy()),N.add(l),l},rt=(o,n={})=>new Gt({color:o,...n}),it=new he({color:329483,side:Et}),ke=(o,n)=>{const l=new be,h=new Float32Array(n.length*3),d=new Float32Array(n.length*3),s=new Float32Array(n.length),c=new Float32Array(n.length),w=new Float32Array(n.length);n.forEach(([A,z,B,H],T)=>{h.set(A,T*3),z.toArray(d,T*3),s[T]=B,c[T]=H,w[T]=D()}),l.setAttribute("position",new G(h,3)),l.setAttribute("aColor",new G(d,3)),l.setAttribute("aSize",new G(s,1)),l.setAttribute("aOn",new G(c,1)),l.setAttribute("aSeed",new G(w,1));const x=new $e(l,new te({uniforms:P,vertexShader:io,fragmentShader:m==="ink"?et:tt,blending:m==="ink"?Ft:qe,transparent:!0,depthWrite:!1}));return x.frustumCulled=!1,o.add(x),x},Te=(o,n=16753228)=>new y(n).multiplyScalar(o),st=(o,[n,l,h],d=1)=>{const s=W(o,n,l,h);s.scale.setScalar(d);const c=new Fe({color:13123626,emissive:u?16727060:16734756,emissiveIntensity:u?1.3:1.8,roughness:.6});u&&ke(s,[[[0,0,0],Te(.9,16738858),1.5,-1]]);const w=new Fe({color:9071156,roughness:.5,metalness:.4});return k(new _e(1,16,12),c,s).scale.set(.22,.27,.22),k(new re(.12,.12,.05,12),w,s,0,.27,0),k(new re(.12,.12,.05,12),w,s,0,-.27,0),k(new re(.008,.008,.6,4),w,s,0,.58,0),k(new re(.03,.005,.28,6),c,s,0,-.43,0),s},lt=o=>{const n=new Ie(o.map(([,d])=>new E(...d)),!1,"centripetal"),l=new Ie(o.map(([,,d])=>new E(...d)),!1,"centripetal"),h=new E;return d=>{const s=o[0][0],c=o[o.length-1][0],w=s+(c-s)*Je((d-s)/(c-s));let x=0;for(;x<o.length-2&&w>o[x+1][0];)x++;const A=(x+Me((w-o[x][0])/(o[x+1][0]-o[x][0])))/(o.length-1);v.position.copy(n.getPoint(A)),v.lookAt(l.getPoint(A,h))}},_=new te({uniforms:{uTop:{value:new y},uHorizon:{value:new y},uGlow:{value:new y},uMoon:{value:new E},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:ao,fragmentShader:ro,side:_t,depthWrite:!1,fog:!1}),ve=k(new _e(500,48,24),_,f);ve.renderOrder=-1,ve.frustumCulled=!1;const Le=new It(m==="ink"?9408399:8228799,m==="ink"?2236962:2760476,u?.65:.55);f.add(Le);const V=new Xe(m==="ink"?12369084:11124198,1.1);Le.userData.lantern=V.userData.lantern=!0,f.add(V,V.target);const pe=new E;let ze;const ct=p({renderer:r,style:m,addEffect:o=>g.addPass(o),scene:f,camera:v,rand:D,shared:P,ink:it,group:W,mesh:k,box:at,lambert:rt,canvasTexture:ne,glows:ke,warm:Te,lantern:st,path:lt,setEnv:o=>{if(o===ze)return;ze=o;const n=u?Bt(o):o;_.uniforms.uTop.value.setHex(n.top),_.uniforms.uHorizon.value.setHex(n.horizon),_.uniforms.uGlow.value.setHex(n.glow),pe.set(n.moon[0],n.moon[1],n.moon[2]).normalize(),_.uniforms.uMoon.value.copy(pe),_.uniforms.uMoonSize.value=n.moonSize,_.uniforms.uMoonGain.value=n.moonGain,_.uniforms.uStars.value=n.stars,b.strength=n.bloom,R.color.setHex(n.fog),R.density=n.density,V.intensity=n.moon[1]>0?1.1:.15},portrait:()=>v.aspect<.9,calligraphy:(o,n,{size:l=1,columns:h=1}={})=>{const d=[...n],s=Math.ceil(d.length/h),c=Math.min(768,Math.max(256,Math.ceil(l*320/64)*64),Math.floor(4096/Math.max(s,h))),w=document.createElement("canvas");w.width=h*c,w.height=s*c;const x=w.getContext("2d"),A=j(c*.86,l>=.8?700:500),z=le(h>1?Array.from({length:h},(ae,I)=>d.slice(I*s,(I+1)*s).join("")):n),B=()=>{if(x.clearRect(0,0,w.width,w.height),z){ce(x,z,{x:c*.06,y:c*.06,w:w.width-c*.12,h:w.height-c*.12},{color:ee});return}x.fillStyle=ee,x.font=A,d.forEach((ae,I)=>Ue(x,ae,(h-1-Math.floor(I/s)+.5)*c,(I%s+.5)*c))},H=ne(w,!0);me(B,H,A,n);const T=xe(H,void 0,{sharp:!0,flat:u?Ye:void 0}),J=k(new se(h*l,s*l),T,o);return m==="ink"&&ye(J,T),{mesh:J,material:T}},glyph:(o,n)=>{const d=document.createElement("canvas");d.width=d.height=1024;const s=d.getContext("2d");s.scale(5.12,5.12);const c=le(n),w=()=>{if(s.clearRect(0,0,200,200),c){ce(s,c,{x:8,y:20,w:184,h:160},{color:ee});return}s.fillStyle=ee,s.textAlign="center",s.textBaseline="middle",s.font=j(176,700),s.fillText(n,100,104)},x=ne(d,!0);me(w,x,j(176,700),n);const A=xe(x,void 0,{sharp:!0,flat:u?Ye:void 0}),z=k(new se(1,1),A,o);return m==="ink"&&ye(z,A),{mesh:z,material:A}},seal:(o,n="品花",l=1.8)=>{const s=document.createElement("canvas");s.width=s.height=256;const c=s.getContext("2d");c.scale(2,2);const w=[...n],x=w.length>2?2:1,A=Math.ceil(w.length/x),z=j(Math.floor(100/A),700),B=le(n),H=()=>{if(c.clearRect(0,0,128,128),c.fillStyle=Qe,c.fillRect(6,6,116,116),B){ce(c,B,{x:14,y:14,w:100,h:100},{color:"#f4ece0"});return}c.fillStyle="#f4ece0",c.font=z,w.forEach((ae,I)=>Ue(c,ae,64+(x===2?Math.floor(I/A)?-26:26:0),12+(I%A+.5)*(104/A)))},T=ne(s,!0);me(H,T,z,n);const J=new he({map:T,transparent:!0,opacity:0,fog:!1});return{mesh:k(new se(l,l),J,o),material:J}}}),X=u?jt(P,we(a+7)):void 0;X&&f.add(X.points),u&&Ke(f);let ut=0;const Z=()=>{P.uTime.value=L,ct(L),u&&++ut%120===0&&Ke(f),C&&(C.uniforms.uTime.value=L),X==null||X.uniforms.uCamera.value.copy(v.position),V.position.copy(v.position).addScaledVector(pe,100),V.target.position.copy(v.position),ve.position.copy(v.position),g.render()},De=40,Ge=()=>{if(O)return;const{width:o,height:n}=t.getBoundingClientRect(),l=Math.max(1,o),h=Math.max(1,n);r.setSize(l,h,!1),g.setPixelRatio(r.getPixelRatio()),g.setSize(l,h),U==null||U.uniforms.uResolution.value.set(l*r.getPixelRatio(),h*r.getPixelRatio()),C==null||C.uniforms.uResolution.value.set(l*r.getPixelRatio(),h*r.getPixelRatio()),v.aspect=l/h;const d=2*Math.atan(Math.tan(K.degToRad(De)/2)*1.6);v.fov=Math.min(75,Math.max(De,K.radToDeg(2*Math.atan(Math.tan(d/2)/v.aspect)))),v.updateProjectionMatrix(),P.uScale.value=h*r.getPixelRatio()/(2*Math.tan(K.degToRad(v.fov)/2)),Z()},mt=o=>{if(oe&&$&&!document.hidden){const l=Math.min((o-oe)/1e3,.1);L=M?M.advance(l):Math.min(Q,L+l)}oe=o,Z();const n=(M==null?void 0:M.elapsed)??L;Math.floor(n*12)!==fe&&(fe=Math.floor(n*12),e(n)),!M&&L>=Q&&($=!1,r.setAnimationLoop(null))};return F=()=>{oe=0,r.setAnimationLoop($&&!document.hidden?mt:null)},q=new ResizeObserver(Ge),q.observe(t),document.addEventListener("visibilitychange",F),r.domElement.addEventListener("webglcontextlost",Pe),Ge(),{setClip(o){if(o&&o.end>Q)throw new Error("Vignette exceeds the authored timeline");M=o?new Wt(o):void 0,L=(M==null?void 0:M.sourceTime)??0,fe=-1,e(0),Z(),F()},setPlaying(o){$=o,F()},seek(o){L=M?M.seek(o):K.clamp(o,0,Q),e((M==null?void 0:M.elapsed)??L),Z(),F()},replay(){L=M?M.seek(0):0,e(0),Z(),F()},dispose:Re}}catch(D){throw Re(),D}}const xo=Object.freeze(Object.defineProperty({__proto__:null,CINEMA_DURATION:Q,INK_SKY:eo,INK_TONE:ue,WRITING_FLAT:nt,WRITING_INK:ee,WRITING_LAYER:Ae,WRITING_RED:Qe,asWriting:ye,clamp01:Me,createCinema:uo,ease:Je,glowFragment:tt,glyphPixels:no,hallGeometry:to,inkDotFragment:et,inkRevealMaterial:xe,paint:Ce,petalGeometry:oo,random:we,roofGeometry:je,writeInAppFont:me},Symbol.toStringTag,{value:"Module"}));export{eo as I,Ye as L,Qe as W,xe as a,ee as b,Me as c,no as d,Je as e,ue as f,tt as g,to as h,et as i,xo as j,oo as p,je as r};
