import{aX as O,aI as g,a as te,aJ as me,c as ye,aK as he,i as xe,aC as k,aY as Te,aA as _e,b as re,aZ as B,a_ as j,aD as we,a$ as m,r as ne,m as Ae,b0 as je,t as Ce,l as Oe,ak as $e,a6 as h,H as Se,Y as Ie,C as Le,ag as Pe,a5 as ke,a0 as Be,D as ae,h as oe,ai as se,$ as Ee,b1 as Ve}from"./index-DvKwO_fi.js";import{ab as ie,Q as Me,a as ze,r as C,n as x,o as M}from"./_plugin-vue_export-helper-BGr0VRV8.js";var S=O(g,"WeakMap"),z=Object.create,Ne=function(){function e(){}return function(t){if(!te(t))return{};if(z)return z(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}();function or(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}function sr(e,t,r,n){var i=!r;r||(r={});for(var a=-1,l=t.length;++a<l;){var c=t[a],f=void 0;f===void 0&&(f=e[c]),i?me(r,c,f):ye(r,c,f)}return r}function le(e){return e!=null&&ie(e.length)&&!he(e)}var Ue=Object.prototype;function E(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ue;return e===r}function De(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function Ke(){return!1}var ue=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=ue&&typeof module=="object"&&module&&!module.nodeType&&module,Re=N&&N.exports===ue,U=Re?g.Buffer:void 0,Fe=U?U.isBuffer:void 0,Ge=Fe||Ke,qe="[object Arguments]",We="[object Array]",Ye="[object Boolean]",He="[object Date]",Ze="[object Error]",Je="[object Function]",Qe="[object Map]",Xe="[object Number]",et="[object Object]",tt="[object RegExp]",rt="[object Set]",nt="[object String]",at="[object WeakMap]",ot="[object ArrayBuffer]",st="[object DataView]",it="[object Float32Array]",lt="[object Float64Array]",ut="[object Int8Array]",ct="[object Int16Array]",ft="[object Int32Array]",dt="[object Uint8Array]",vt="[object Uint8ClampedArray]",pt="[object Uint16Array]",gt="[object Uint32Array]",s={};s[it]=s[lt]=s[ut]=s[ct]=s[ft]=s[dt]=s[vt]=s[pt]=s[gt]=!0;s[qe]=s[We]=s[ot]=s[Ye]=s[st]=s[He]=s[Ze]=s[Je]=s[Qe]=s[Xe]=s[et]=s[tt]=s[rt]=s[nt]=s[at]=!1;function bt(e){return xe(e)&&ie(e.length)&&!!s[k(e)]}function mt(e){return function(t){return e(t)}}var ce=typeof exports=="object"&&exports&&!exports.nodeType&&exports,T=ce&&typeof module=="object"&&module&&!module.nodeType&&module,yt=T&&T.exports===ce,$=yt&&Te.process,D=function(){try{var e=T&&T.require&&T.require("util").types;return e||$&&$.binding&&$.binding("util")}catch{}}(),K=D&&D.isTypedArray,ht=K?mt(K):bt,xt=Object.prototype,Tt=xt.hasOwnProperty;function fe(e,t){var r=re(e),n=!r&&Me(e),i=!r&&!n&&Ge(e),a=!r&&!n&&!i&&ht(e),l=r||n||i||a,c=l?De(e.length,String):[],f=c.length;for(var u in e)(t||Tt.call(e,u))&&!(l&&(u=="length"||i&&(u=="offset"||u=="parent")||a&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||_e(u,f)))&&c.push(u);return c}function de(e,t){return function(r){return e(t(r))}}var _t=de(Object.keys,Object),wt=Object.prototype,At=wt.hasOwnProperty;function jt(e){if(!E(e))return _t(e);var t=[];for(var r in Object(e))At.call(e,r)&&r!="constructor"&&t.push(r);return t}function Ct(e){return le(e)?fe(e):jt(e)}function Ot(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var $t=Object.prototype,St=$t.hasOwnProperty;function It(e){if(!te(e))return Ot(e);var t=E(e),r=[];for(var n in e)n=="constructor"&&(t||!St.call(e,n))||r.push(n);return r}function ir(e){return le(e)?fe(e,!0):It(e)}var Lt=de(Object.getPrototypeOf,Object);function Pt(){this.__data__=new B,this.size=0}function kt(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Bt(e){return this.__data__.get(e)}function Et(e){return this.__data__.has(e)}var Vt=200;function Mt(e,t){var r=this.__data__;if(r instanceof B){var n=r.__data__;if(!j||n.length<Vt-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new we(n)}return r.set(e,t),this.size=r.size,this}function _(e){var t=this.__data__=new B(e);this.size=t.size}_.prototype.clear=Pt;_.prototype.delete=kt;_.prototype.get=Bt;_.prototype.has=Et;_.prototype.set=Mt;var ve=typeof exports=="object"&&exports&&!exports.nodeType&&exports,R=ve&&typeof module=="object"&&module&&!module.nodeType&&module,zt=R&&R.exports===ve,F=zt?g.Buffer:void 0,G=F?F.allocUnsafe:void 0;function lr(e,t){if(t)return e.slice();var r=e.length,n=G?G(r):new e.constructor(r);return e.copy(n),n}function Nt(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var l=e[r];t(l,r,e)&&(a[i++]=l)}return a}function Ut(){return[]}var Dt=Object.prototype,Kt=Dt.propertyIsEnumerable,q=Object.getOwnPropertySymbols,Rt=q?function(e){return e==null?[]:(e=Object(e),Nt(q(e),function(t){return Kt.call(e,t)}))}:Ut;function Ft(e,t,r){var n=t(e);return re(e)?n:ze(n,r(e))}function ur(e){return Ft(e,Ct,Rt)}var I=O(g,"DataView"),L=O(g,"Promise"),P=O(g,"Set"),W="[object Map]",Gt="[object Object]",Y="[object Promise]",H="[object Set]",Z="[object WeakMap]",J="[object DataView]",qt=m(I),Wt=m(j),Yt=m(L),Ht=m(P),Zt=m(S),b=k;(I&&b(new I(new ArrayBuffer(1)))!=J||j&&b(new j)!=W||L&&b(L.resolve())!=Y||P&&b(new P)!=H||S&&b(new S)!=Z)&&(b=function(e){var t=k(e),r=t==Gt?e.constructor:void 0,n=r?m(r):"";if(n)switch(n){case qt:return J;case Wt:return W;case Yt:return Y;case Ht:return H;case Zt:return Z}return t});var Q=g.Uint8Array;function Jt(e){var t=new e.constructor(e.byteLength);return new Q(t).set(new Q(e)),t}function cr(e,t){var r=t?Jt(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function fr(e){return typeof e.constructor=="function"&&!E(e)?Ne(Lt(e)):{}}function Qt(e){let t;const r=ne(!1),n=Ae({...e,originalPosition:"",originalOverflow:"",visible:!1});function i(o){n.text=o}function a(){const o=n.parent,d=p.ns;if(!o.vLoadingAddClassList){let v=o.getAttribute("loading-number");v=Number.parseInt(v)-1,v?o.setAttribute("loading-number",v.toString()):(C(o,d.bm("parent","relative")),o.removeAttribute("loading-number")),C(o,d.bm("parent","hidden"))}l(),y.unmount()}function l(){var o,d;(d=(o=p.$el)==null?void 0:o.parentNode)==null||d.removeChild(p.$el)}function c(){var o;e.beforeClose&&!e.beforeClose()||(r.value=!0,clearTimeout(t),t=window.setTimeout(f,400),n.visible=!1,(o=e.closed)==null||o.call(e))}function f(){if(!r.value)return;const o=n.parent;r.value=!1,o.vLoadingAddClassList=void 0,a()}const u=Oe({name:"ElLoading",setup(o,{expose:d}){const{ns:v,zIndex:pe}=$e("loading");return d({ns:v,zIndex:pe}),()=>{const V=n.spinner||n.svg,ge=h("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...V?{innerHTML:V}:{}},[h("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),be=n.text?h("p",{class:v.b("text")},[n.text]):void 0;return h(ke,{name:v.b("fade"),onAfterLeave:f},{default:Se(()=>[Ie(Le("div",{style:{backgroundColor:n.background||""},class:[v.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[h("div",{class:v.b("spinner")},[ge,be])]),[[Pe,n.visible]])])})}}}),y=je(u),p=y.mount(document.createElement("div"));return{...Ce(n),setText:i,removeElLoadingChild:l,close:c,handleAfterLeave:f,vm:p,get $el(){return p.$el}}}let w;const Xt=function(e={}){if(!Be)return;const t=er(e);if(t.fullscreen&&w)return w;const r=Qt({...t,closed:()=>{var i;(i=t.closed)==null||i.call(t),t.fullscreen&&(w=void 0)}});tr(t,t.parent,r),X(t,t.parent,r),t.parent.vLoadingAddClassList=()=>X(t,t.parent,r);let n=t.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",t.parent.setAttribute("loading-number",n),t.parent.appendChild(r.$el),ae(()=>r.visible.value=t.visible),t.fullscreen&&(w=r),r},er=e=>{var t,r,n,i;let a;return oe(e.target)?a=(t=document.querySelector(e.target))!=null?t:document.body:a=e.target||document.body,{parent:a===document.body||e.body?document.body:a,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:a===document.body&&((r=e.fullscreen)!=null?r:!0),lock:(n=e.lock)!=null?n:!1,customClass:e.customClass||"",visible:(i=e.visible)!=null?i:!0,target:a}},tr=async(e,t,r)=>{const{nextZIndex:n}=r.vm.zIndex||r.vm._.exposed.zIndex,i={};if(e.fullscreen)r.originalPosition.value=x(document.body,"position"),r.originalOverflow.value=x(document.body,"overflow"),i.zIndex=n();else if(e.parent===document.body){r.originalPosition.value=x(document.body,"position"),await ae();for(const a of["top","left"]){const l=a==="top"?"scrollTop":"scrollLeft";i[a]=`${e.target.getBoundingClientRect()[a]+document.body[l]+document.documentElement[l]-Number.parseInt(x(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])i[a]=`${e.target.getBoundingClientRect()[a]}px`}else r.originalPosition.value=x(t,"position");for(const[a,l]of Object.entries(i))r.$el.style[a]=l},X=(e,t,r)=>{const n=r.vm.ns||r.vm._.exposed.ns;["absolute","fixed","sticky"].includes(r.originalPosition.value)?C(t,n.bm("parent","relative")):M(t,n.bm("parent","relative")),e.fullscreen&&e.lock?M(t,n.bm("parent","hidden")):C(t,n.bm("parent","hidden"))},A=Symbol("ElLoading"),ee=(e,t)=>{var r,n,i,a;const l=t.instance,c=o=>se(t.value)?t.value[o]:void 0,f=o=>{const d=oe(o)&&(l==null?void 0:l[o])||o;return d&&ne(d)},u=o=>f(c(o)||e.getAttribute(`element-loading-${Ve(o)}`)),y=(r=c("fullscreen"))!=null?r:t.modifiers.fullscreen,p={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:y,target:(n=c("target"))!=null?n:y?void 0:e,body:(i=c("body"))!=null?i:t.modifiers.body,lock:(a=c("lock"))!=null?a:t.modifiers.lock};e[A]={options:p,instance:Xt(p)}},rr=(e,t)=>{for(const r of Object.keys(t))Ee(t[r])&&(t[r].value=e[r])},dr={mounted(e,t){t.value&&ee(e,t)},updated(e,t){const r=e[A];t.oldValue!==t.value&&(t.value&&!t.oldValue?ee(e,t):t.value&&t.oldValue?se(t.value)&&rr(t.value,r.options):r==null||r.instance.close())},unmounted(e){var t;(t=e[A])==null||t.instance.close(),e[A]=null}};export{_ as S,Q as U,ir as a,Lt as b,sr as c,Ft as d,Jt as e,cr as f,Rt as g,b as h,mt as i,or as j,Ct as k,Ge as l,lr as m,D as n,fr as o,ur as p,le as q,ht as r,Ut as s,dr as v};
