import{V as Pe,C as y,v as Y,B as Re,c as G,d as Qe,e as ae,A as et,r as F,w as gt,l as wt,x as xt,u as tt,f as yt,y as St,z as bt,F as Mt,M as Se,W as Ct,G as Oe,H as At,J as Pt,K as Rt,O as kt,R as Tt,U as Lt,X as zt,Y as Dt,Z as Gt,_ as ye,$ as Ft,a0 as Et,o as _t,a1 as ot,a2 as It,a3 as Ut,D as Nt,N as Ot,h as We,k as Ve,j as le,s as Be,a4 as Wt,a5 as Vt,P as ue,a6 as Bt,a7 as be,a8 as qt,g as Ht}from"./vendor-three-h8VsETOf.js";import{a as te,e as me,p as fe,f as qe,V as Kt}from"./ParagraphCinema-BC8Bfexq.js";import{C as oe}from"./define-YTILnQWi.js";const S=t=>new y(t),$=t=>.2126*t.r+.7152*t.g+.0722*t.b,ce={top:S(660262),horizon:S(2896466),glow:S(3021350),fog:S(2041152),stars:1},He={top:S(1382968),horizon:S(6175820),glow:S(6958102),fog:S(3352894),stars:.35},Ke={top:S(858675),horizon:S(4214895),glow:S(1185318),fog:S(3029592),stars:.55},Ye=S(16052456),Yt=S(7235423),$e={a:new y,b:new y,c:new y};function $t(t){if(t.night)return t;const e=$e.a.setHex(t.top),l=Y.clamp(($(Ye)-$(e))/($(Ye)-$(Yt)),0,1),a=Y.clamp(t.moonGain/.62,0,1),h=l*(1-a),f=i=>$e.b.copy(ce[i]).lerp(He[i],h).lerp(Ke[i],a).getHex();return{top:f("top"),horizon:f("horizon"),glow:f("glow"),fog:f("fog"),moon:t.moon,moonSize:t.moonSize*.75,moonGain:2.3*a,stars:ce.stars+(He.stars-ce.stars)*h+(Ke.stars-ce.stars)*a,density:t.density*.6,bloom:.72+.18*h}}const Xt=`
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
  }`,Zt=new Map([[4867134,[2766422,.8]],[4143669,[5905942,.75]],[3090982,[2757906,.5]],[15722716,[15249546,.55]],[15130838,[15785140,.3]],[12169896,[9213620,.15]]]),Xe=[2902662,5212792,8007256,11567670,2779764,11819620,4090426,6970016,10135752,10504746,3824288,12623976];function Jt(t){const e=Math.pow($(S(t)),.45454545454545453),l=(Math.imul(t^t>>>13,2654435761)>>>0)%Xe.length;return[Xe[l],e>.85?.45:e<.2?.55:.72]}const Ze={pearl:new y(1,.93,.8).multiplyScalar(1.35),flame:new y(1,.62,.3).multiplyScalar(2.3)};function jt(t){const e=t;if(e.userData.lantern)return;if(e.userData.lantern=!0,e instanceof ae){e.uniforms.uLantern&&(e.uniforms.uLantern.value=1);return}if(e instanceof yt){if(e.color){const p=$(e.color);e.color.set(5661326).multiplyScalar(.3+.35*p)}e.opacity*=.55;return}if(!("color"in e)||!e.color||e instanceof St||e instanceof bt)return;const l=e.color.getHex(),a=e instanceof Se,[h,f]=e.userData.silk?Jt(l):Zt.get(l)??[16777215,0],i=l===16777215||l===16774890||l===16775404||l===15255666,m={uLanternTint:{value:new Mt(...S(h).toArray(),f)},uLanternGlow:{value:e.transparent&&e.opacity<.3?new y(.32,.3,.27):(i?Ze.flame:Ze.pearl).clone().multiplyScalar(e.transparent?.4:1)},uLanternUnlit:{value:a?1:0}};e.onBeforeCompile=p=>{Object.assign(p.uniforms,m),p.fragmentShader=p.fragmentShader.replace("void main() {",`${Xt}
void main() {`).replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.rgb = lanternGrade(diffuseColor.rgb);`)},e.customProgramCacheKey=()=>"lantern",e.needsUpdate=!0}const Qt=S(16754266),eo=S(10334950);function Je(t){t.traverse(e=>{if(e instanceof gt){if(e.userData.lantern)return;e.userData.lantern=!0;const a=e.color,h=Math.max(a.r,a.g,a.b)-Math.min(a.r,a.g,a.b)<.12;h&&(e instanceof wt||e instanceof xt)?(a.copy(Qt),e.distance>0&&e.distance<=5?(e.decay=Math.max(e.decay,2),a.multiplyScalar(.45)):a.multiplyScalar(1.5)):h&&e instanceof tt&&(a.copy(eo),e.intensity*=.6);return}const l=e;l.material&&[].concat(l.material).forEach(jt)})}const je=new y(1.55,1.08,.56),to=`
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
  }`,oo=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * exp(-r * r * 4.0), 1.0);
  }`;function no(t,e,l=260){const a=new Re,h=new Float32Array(l*3),f=new Float32Array(l*3),i=new Float32Array(l),m=S(16752722).multiplyScalar(1.6),p=S(12374271).multiplyScalar(1.1),R=S(16767130).multiplyScalar(1.4);for(let M=0;M<l;M++){h.set([(e()-.5)*22,(e()-.5)*9,(e()-.5)*22],M*3);const C=e();(C<.5?m:C<.8?R:p).toArray(f,M*3),i[M]=e()}a.setAttribute("position",new G(h,3)),a.setAttribute("aColor",new G(f,3)),a.setAttribute("aSeed",new G(i,1));const s={...t,uStrength:{value:1},uCamera:{value:new F}},g=new Qe(a,new ae({uniforms:s,vertexShader:to,fragmentShader:oo,blending:et,transparent:!0,depthWrite:!1,fog:!1}));return g.frustumCulled=!1,g.userData.lantern=!0,{points:g,uniforms:s}}const ao={uniforms:{tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new Pe(1,1)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`},ke=t=>Math.min(1,Math.max(0,t)),nt=t=>{const e=ke(t);return e*e*(3-2*e)},pe={thick:3090982,mid:8222318,pale:12169896,wash:14078150,paper:16052456},io={paper:(t=.02)=>({top:pe.paper,horizon:pe.paper,glow:0,moon:[0,-1,0],moonSize:.01,moonGain:0,bloom:0,stars:0,fog:pe.paper,density:t}),moonlit:(t=[.25,.24,-1],e=.025)=>({top:11840931,horizon:15131096,glow:0,moon:t,moonSize:.06,moonGain:.62,bloom:0,stars:0,fog:15526112,density:e})};function Me(t){return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Te(t,e){const l=t.getAttribute("position").count,a=new Float32Array(l*3);for(let h=0;h<l;h++)e.toArray(a,h*3);return t.setAttribute("color",new G(a,3)),t}function at(t,e,l,a){const i=[],m=[],p=[];for(let s=0;s<=8;s++)for(let g=0;g<=12;g++){const M=g/12*2-1,C=s/8*2-1,U=Math.min((1-Math.abs(C))*e/2,(1-Math.abs(M))*t/2)/(e/2);if(i.push(M*t/2,l*Math.pow(Math.min(1,U),1.5)+l*.25*Math.pow(Math.abs(M*C),5),C*e/2),m.push(g/12,s/8),g<12&&s<8){const N=s*13+g,O=N+12+1;p.push(N,O,N+1,N+1,O,O+1)}}const R=new Re;return R.setAttribute("position",new be(i,3)),R.setAttribute("uv",new be(m,2)),R.setIndex(p),R.computeVertexNormals(),Te(R.toNonIndexed(),a)}function ro(t,e,l){const a=(h,f,i,m,p)=>Te(new ot(h,f,i).translate(0,m,0).toNonIndexed(),new y(p));return Bt([a(.96,.08,.72,.04,l),a(.8,.42,.56,.29,e),at(1.12,.86,.36,new y(t)).translate(0,.5,0)])}function so(t,e,l,a){const h=new ue(t,e,4,6).translate(0,e/2,0),f=h.getAttribute("position"),i=[],m=new y(l),p=new y(a),R=new y;for(let s=0;s<f.count;s++){const g=f.getX(s),M=f.getY(s)/e,C=.3+.7*Math.sin(Math.min(1,M*1.6)*Math.PI/2);f.setXYZ(s,g*C,f.getY(s)+Math.sin(g*60)*.004*M,(g/(t/2))**2*t*.3+Math.sin(M*Math.PI)*e*.1),R.lerpColors(m,p,Math.pow(Math.max(0,M),.8)).toArray(i,i.length)}return h.setAttribute("color",new be(i,3)),h.computeVertexNormals(),h}const ne="#0000ff",it="#b8283c";function lo(t,e){const l=document.createElement("canvas");l.width=l.height=200;const a=l.getContext("2d",{willReadFrequently:!0});a.fillStyle="#fff",a.textAlign="center",a.textBaseline="middle",a.font=te(176,700);const h=me(t);h?fe(a,h,{x:8,y:20,w:184,h:160},{color:"#fff"}):a.fillText(t,100,104);const f=a.getImageData(0,0,200,200).data,i=[];for(let m=0;m<200;m++)for(let p=0;p<200;p++)f[(m*200+p)*4+3]>128&&i.push([p,m]);if(!i.length)for(let m=0;m<400;m++)i.push([40+e()*120,40+e()*120]);return()=>{const[m,p]=i[Math.floor(e()*i.length)];return[(m+e())/200-.5,.5-(p+e())/200]}}const co=`
  varying vec3 vDirection;
  void main() {
    vDirection = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position.z = gl_Position.w;
  }`,uo=`
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
  }`,mo=`
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
  }`,rt=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(min(vColor, vec3(1.0)), 0.85 * (1.0 - smoothstep(0.45, 1.0, r)));
  }`,st=`
  varying vec3 vColor;
  void main() {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    if (r > 1.0) discard;
    gl_FragColor = vec4(vColor * (exp(-r * r * 5.0) + 0.6 * (1.0 - smoothstep(0.12, 0.32, r))), 1.0);
  }`,lt=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }`,fo={uniforms:{tDiffuse:{value:null},uResolution:{value:new Pe(1,1)},uPaper:{value:new F(.94,.91,.84)},uInk:{value:new F(.11,.09,.08)},uSeal:{value:new F(.66,.2,.13)}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec3 uPaper, uInk, uSeal;
    varying vec2 vUv;
    ${lt}
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
    }`},po=`
  vec3 lanternPage(vec3 raw) {
    float e = raw.b - max(raw.r, raw.g);
    float writing = clamp((e + 0.17) / 1.17, 0.0, 1.0) * smoothstep(0.1, 0.18, e);
    vec3 c = clamp((raw - writing * vec3(0.0, 0.0, 1.0)) / max(1.0 - writing, 0.05), 0.0, 1.0);
    float hi = max(c.r, max(c.g, c.b)), lo = min(c.r, min(c.g, c.b));
    float v = pow(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1.0 / 2.2);
    vec3 paper = mix(vec3(0.05, 0.03, 0.025), vec3(0.62, 0.52, 0.38), smoothstep(0.1, 0.95, v));
    vec3 graded = mix(paper, c, smoothstep(0.2, 0.38, (hi - lo) / max(hi, 1e-4)));
    return mix(graded, vec3(0.012, 0.009, 0.008), writing);
  }`;function Ce(t,e=new y(1,1,1),{sharp:l=!1,flat:a}={}){return new ae({uniforms:{map:{value:t},uReveal:{value:0},uOpacity:{value:1},uColor:{value:e},uFlat:{value:a??new y},uFlatOn:{value:a?1:0},uLantern:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D map;
      uniform float uReveal, uOpacity;
      uniform vec3 uColor, uFlat;
      uniform float uFlatOn, uLantern;
      varying vec2 vUv;
      ${lt}
      ${po}
      void main() {
        // Writing samples a sharper mip level, so characters stay crisp when shown small.
        vec4 texel = texture2D(map, vUv${l?", -0.5":""});
        float n = noise(vUv * vec2(5.0, 10.0)) * 0.6 + noise(vUv * 40.0) * 0.4;
        float alpha = texel.a * smoothstep(n - 0.08, n + 0.08, uReveal * 1.3 - 0.15) * uOpacity;
        if (alpha < 0.02) discard;
        // Writing drawn over the finished ink picture uses one flat, display-ready colour.
        vec3 page = texel.rgb * uColor;
        if (uLantern > 0.5) page = lanternPage(page);
        gl_FragColor = vec4(uFlatOn > 0.5 ? uFlat : page, alpha);
      }`,transparent:!0,depthWrite:!1})}const Le=1,ct={ink:new y(.11,.09,.08),red:new y(.64,.19,.13)};class vo extends qt{constructor(e,l){super(),this.scene=e,this.camera=l,this.needsSwap=!1}render(e,l,a){const h=e.autoClear,f=this.camera.layers.mask;e.autoClear=!1,this.camera.layers.set(Le),e.setRenderTarget(this.renderToScreen?null:a),e.clearDepth(),e.render(this.scene,this.camera),this.camera.layers.mask=f,e.autoClear=h}}function ve(t,e,l,a){t(),!(typeof document>"u"||!document.fonts)&&document.fonts.load(l,a).then(()=>{t(),e.needsUpdate=!0},()=>{})}function Ae(t,e,l=ct.ink){t.layers.set(Le),e.uniforms.uFlat.value=l,e.uniforms.uFlatOn.value=1}function ho(t,e,l,a,h,f="night"){const i=new Ct({antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(devicePixelRatio,2));const m=f==="lantern";i.outputColorSpace=Oe,i.toneMapping=f==="ink"?At:Pt,i.toneMappingExposure=m?1.2:1.1,i.domElement.setAttribute("aria-hidden","true"),i.domElement.style.cssText="width:100%;height:100%;display:block",t.appendChild(i.domElement);const p=new Rt,R=new kt(2763846,.0055);p.fog=R;const s=new Tt(40,1,.05,1200),g=new Lt(i);g.addPass(new zt(p,s));const M=new Dt(new Pe(256,256),.9,m?.7:.55,m?.8:.85);g.addPass(M),g.addPass(new Gt);const C=m?new ye(ao):void 0;C&&g.addPass(C);const U=f==="ink"?new ye(fo):void 0;U&&(M.enabled=!1,g.addPass(U),g.addPass(new vo(p,s)),g.addPass(new ye(Ft)));const N=new Set;let O=!1,X=!1,L=0,ie=0,de=-1,b;const ze={active:!1};let B,Z=[],W;const he=()=>{for(const{object:z,authored:A}of Z)z.position.copy(A);W&&(s.position.copy(W.position),s.quaternion.copy(W.quaternion))};let J,E=()=>{};const De=z=>{z.preventDefault(),X=!1,E(),l()},Ge=()=>{if(O)return;O=!0,J==null||J.disconnect(),i.setAnimationLoop(null),document.removeEventListener("visibilitychange",E),i.domElement.removeEventListener("webglcontextlost",De);const z=new Set;p.traverse(A=>{const V=A;V.geometry&&!(A instanceof Ht)&&V.geometry.dispose(),V.material&&[].concat(V.material).forEach(k=>z.add(k))}),z.forEach(A=>A.dispose()),N.forEach(A=>A.dispose()),g.passes.forEach(A=>A.dispose()),g.dispose(),i.dispose(),i.forceContextLoss(),i.domElement.remove()};try{const z=Me(a),A={uTime:{value:0},uScale:{value:1}},V=(o,n=0,c=0,d=0)=>{const v=new Et;return v.position.set(n,c,d),o.add(v),v},k=(o,n,c,d=0,v=0,r=0)=>{const u=new _t(o,n);return u.position.set(d,v,r),c.add(u),u},ut=(o,n,[c,d,v],[r,u,w])=>k(new ot(r,u,w),n,o,c,d,v),re=(o,n=!1)=>{const c=new It(o);return c.colorSpace=Oe,n&&(c.anisotropy=i.capabilities.getMaxAnisotropy()),N.add(c),c},mt=(o,n={})=>new Ut({color:o,...n}),ft=new Se({color:329483,side:Nt}),Fe=(o,n)=>{const c=new Re,d=new Float32Array(n.length*3),v=new Float32Array(n.length*3),r=new Float32Array(n.length),u=new Float32Array(n.length),w=new Float32Array(n.length);n.forEach(([P,D,H,K],T)=>{d.set(P,T*3),D.toArray(v,T*3),r[T]=H,u[T]=K,w[T]=z()}),c.setAttribute("position",new G(d,3)),c.setAttribute("aColor",new G(v,3)),c.setAttribute("aSize",new G(r,1)),c.setAttribute("aOn",new G(u,1)),c.setAttribute("aSeed",new G(w,1));const x=new Qe(c,new ae({uniforms:A,vertexShader:mo,fragmentShader:f==="ink"?rt:st,blending:f==="ink"?Ot:et,transparent:!0,depthWrite:!1}));return x.frustumCulled=!1,o.add(x),x},Ee=(o,n=16753228)=>new y(n).multiplyScalar(o),pt=(o,[n,c,d],v=1)=>{const r=V(o,n,c,d);r.scale.setScalar(v);const u=new We({color:13123626,emissive:m?16727060:16734756,emissiveIntensity:m?1.3:1.8,roughness:.6});m&&Fe(r,[[[0,0,0],Ee(.9,16738858),1.5,-1]]);const w=new We({color:9071156,roughness:.5,metalness:.4});return k(new Ve(1,16,12),u,r).scale.set(.22,.27,.22),k(new le(.12,.12,.05,12),w,r,0,.27,0),k(new le(.12,.12,.05,12),w,r,0,-.27,0),k(new le(.008,.008,.6,4),w,r,0,.58,0),k(new le(.03,.005,.28,6),u,r,0,-.43,0),r},vt=o=>{const n=new Be(o.map(([,v])=>new F(...v)),!1,"centripetal"),c=new Be(o.map(([,,v])=>new F(...v)),!1,"centripetal"),d=new F;return v=>{const r=o[0][0],u=o[o.length-1][0],w=r+(u-r)*nt((v-r)/(u-r));let x=0;for(;x<o.length-2&&w>o[x+1][0];)x++;const P=(x+ke((w-o[x][0])/(o[x+1][0]-o[x][0])))/(o.length-1);s.position.copy(n.getPoint(P)),s.lookAt(c.getPoint(P,d))}},_=new ae({uniforms:{uTop:{value:new y},uHorizon:{value:new y},uGlow:{value:new y},uMoon:{value:new F},uMoonSize:{value:.04},uMoonGain:{value:1},uStars:{value:1}},vertexShader:co,fragmentShader:uo,side:Wt,depthWrite:!1,fog:!1}),ge=k(new Ve(500,48,24),_,p);ge.renderOrder=-1,ge.frustumCulled=!1;const _e=new Vt(f==="ink"?9408399:8228799,f==="ink"?2236962:2760476,m?.65:.55);p.add(_e);const q=new tt(f==="ink"?12369084:11124198,1.1);_e.userData.lantern=q.userData.lantern=!0,p.add(q,q.target);const we=new F;let Ie;const xe=h({renderer:i,style:f,vignette:ze,addEffect:o=>g.addPass(o),scene:p,camera:s,rand:z,shared:A,ink:ft,group:V,mesh:k,box:ut,lambert:mt,canvasTexture:re,glows:Fe,warm:Ee,lantern:pt,path:vt,setEnv:o=>{if(o===Ie)return;Ie=o;const n=m?$t(o):o;_.uniforms.uTop.value.setHex(n.top),_.uniforms.uHorizon.value.setHex(n.horizon),_.uniforms.uGlow.value.setHex(n.glow),we.set(n.moon[0],n.moon[1],n.moon[2]).normalize(),_.uniforms.uMoon.value.copy(we),_.uniforms.uMoonSize.value=n.moonSize,_.uniforms.uMoonGain.value=n.moonGain,_.uniforms.uStars.value=n.stars,M.strength=n.bloom,R.color.setHex(n.fog),R.density=n.density,q.intensity=n.moon[1]>0?1.1:.15},portrait:()=>s.aspect<.9,calligraphy:(o,n,{size:c=1,columns:d=1}={})=>{const v=[...n],r=Math.ceil(v.length/d),u=Math.min(768,Math.max(256,Math.ceil(c*320/64)*64),Math.floor(4096/Math.max(r,d))),w=document.createElement("canvas");w.width=d*u,w.height=r*u;const x=w.getContext("2d"),P=te(u*.86,c>=.8?700:500),D=me(d>1?Array.from({length:d},(se,I)=>v.slice(I*r,(I+1)*r).join("")):n),H=()=>{if(x.clearRect(0,0,w.width,w.height),D){fe(x,D,{x:u*.06,y:u*.06,w:w.width-u*.12,h:w.height-u*.12},{color:ne});return}x.fillStyle=ne,x.font=P,v.forEach((se,I)=>qe(x,se,(d-1-Math.floor(I/r)+.5)*u,(I%r+.5)*u))},K=re(w,!0);ve(H,K,P,n);const T=Ce(K,void 0,{sharp:!0,flat:m?je:void 0}),ee=k(new ue(d*c,r*c),T,o);return f==="ink"&&Ae(ee,T),{mesh:ee,material:T}},glyph:(o,n)=>{const v=document.createElement("canvas");v.width=v.height=1024;const r=v.getContext("2d");r.scale(5.12,5.12);const u=me(n),w=()=>{if(r.clearRect(0,0,200,200),u){fe(r,u,{x:8,y:20,w:184,h:160},{color:ne});return}r.fillStyle=ne,r.textAlign="center",r.textBaseline="middle",r.font=te(176,700),r.fillText(n,100,104)},x=re(v,!0);ve(w,x,te(176,700),n);const P=Ce(x,void 0,{sharp:!0,flat:m?je:void 0}),D=k(new ue(1,1),P,o);return f==="ink"&&Ae(D,P),{mesh:D,material:P}},seal:(o,n="品花",c=1.8)=>{const r=document.createElement("canvas");r.width=r.height=256;const u=r.getContext("2d");u.scale(2,2);const w=[...n],x=w.length>2?2:1,P=Math.ceil(w.length/x),D=te(Math.floor(100/P),700),H=me(n),K=()=>{if(u.clearRect(0,0,128,128),u.fillStyle=it,u.fillRect(6,6,116,116),H){fe(u,H,{x:14,y:14,w:100,h:100},{color:"#f4ece0"});return}u.fillStyle="#f4ece0",u.font=D,w.forEach((se,I)=>qe(u,se,64+(x===2?Math.floor(I/P)?-26:26:0),12+(I%P+.5)*(104/P)))},T=re(r,!0);ve(K,T,D,n);const ee=new Se({map:T,transparent:!0,opacity:0,fog:!1});return{mesh:k(new ue(c,c),ee,o),material:ee}}}),j=m?no(A,Me(a+7)):void 0;j&&p.add(j.points),m&&Je(p);let dt=0;const Q=()=>{if(A.uTime.value=L,he(),xe(L),b&&B){for(const{object:o,position:n,authored:c}of Z){c.copy(o.position);const d=o.position.x-n.x,v=o.position.z-n.z,r=Math.min(.3,1.4/Math.max(.001,Math.hypot(d,v)));o.position.x=n.x+d*r,o.position.z=n.z+v*r}W??(W={position:s.position.clone(),quaternion:s.quaternion.clone()}),W.position.copy(s.position),W.quaternion.copy(s.quaternion),s.position.lerp(B.position,.65),s.quaternion.slerp(B.quaternion,.65)}m&&++dt%120===0&&Je(p),C&&(C.uniforms.uTime.value=L),j==null||j.uniforms.uCamera.value.copy(s.position),q.position.copy(s.position).addScaledVector(we,100),q.target.position.copy(s.position),ge.position.copy(s.position),g.render()},Ue=40,Ne=()=>{if(O)return;const{width:o,height:n}=t.getBoundingClientRect(),c=Math.max(1,o),d=Math.max(1,n);i.setSize(c,d,!1),g.setPixelRatio(i.getPixelRatio()),g.setSize(c,d),U==null||U.uniforms.uResolution.value.set(c*i.getPixelRatio(),d*i.getPixelRatio()),C==null||C.uniforms.uResolution.value.set(c*i.getPixelRatio(),d*i.getPixelRatio()),s.aspect=c/d;const v=2*Math.atan(Math.tan(Y.degToRad(Ue)/2)*1.6);if(s.fov=Math.min(75,Math.max(Ue,Y.radToDeg(2*Math.atan(Math.tan(v/2)/s.aspect)))),s.updateProjectionMatrix(),A.uScale.value=d*i.getPixelRatio()/(2*Math.tan(Y.degToRad(s.fov)/2)),b){he(),xe(b.range.end-.001);for(const{object:r,position:u}of Z)u.copy(r.position);B={position:s.position.clone(),quaternion:s.quaternion.clone()}}Q()},ht=o=>{if(ie&&X&&!document.hidden){const c=Math.min((o-ie)/1e3,.1);L=b?b.advance(c):Math.min(oe,L+c)}ie=o,Q();const n=(b==null?void 0:b.elapsed)??L;Math.floor(n*12)!==de&&(de=Math.floor(n*12),e(n)),!b&&L>=oe&&(X=!1,i.setAnimationLoop(null))};return E=()=>{ie=0,i.setAnimationLoop(X&&!document.hidden?ht:null)},J=new ResizeObserver(Ne),J.observe(t),document.addEventListener("visibilitychange",E),i.domElement.addEventListener("webglcontextlost",De),Ne(),{setClip(o){if(o&&o.end>oe)throw new Error("Vignette exceeds the authored timeline");b=o?new Kt(o):void 0,ze.active=!!o,he(),Z=[],B=void 0,W=void 0,o&&(xe(o.end-.001),p.traverse(n=>{n.userData.vignetteFigure&&Z.push({object:n,position:n.position.clone(),authored:n.position.clone()})}),B={position:s.position.clone(),quaternion:s.quaternion.clone()}),L=(b==null?void 0:b.sourceTime)??0,de=-1,e(0),Q(),E()},setPlaying(o){X=o,E()},seek(o){L=b?b.seek(o):Y.clamp(o,0,oe),e((b==null?void 0:b.elapsed)??L),Q(),E()},replay(){L=b?b.seek(0):0,e(0),Q(),E()},dispose:Ge}}catch(z){throw Ge(),z}}const Co=Object.freeze(Object.defineProperty({__proto__:null,CINEMA_DURATION:oe,INK_SKY:io,INK_TONE:pe,WRITING_FLAT:ct,WRITING_INK:ne,WRITING_LAYER:Le,WRITING_RED:it,asWriting:Ae,clamp01:ke,createCinema:ho,ease:nt,glowFragment:st,glyphPixels:lo,hallGeometry:ro,inkDotFragment:rt,inkRevealMaterial:Ce,paint:Te,petalGeometry:so,random:Me,roofGeometry:at,writeInAppFont:ve},Symbol.toStringTag,{value:"Module"}));export{io as I,je as L,it as W,Ce as a,ne as b,ke as c,lo as d,nt as e,pe as f,st as g,ro as h,rt as i,Co as j,so as p,at as r};
