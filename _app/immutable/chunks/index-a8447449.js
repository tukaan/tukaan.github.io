function b(){}const W=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function v(t){t.forEach(it)}function C(t){return typeof t=="function"}function Ft(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Gt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function yt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Wt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)c[o]=e.dirty[o]|s[o];return c}return e.dirty|s}return e.dirty}function Kt(t,e,n,i,s,c){if(s){const r=st(e,n,i,c);t.p(r,s)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t){return t&&C(t.destroy)?t.destroy:b}const rt=typeof window!="undefined";let J=rt?()=>window.performance.now():()=>Date.now(),K=rt?t=>requestAnimationFrame(t):b;const E=new Set;function lt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&K(lt)}function Q(t){let e;return E.size===0&&K(lt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let z=!1;function xt(){z=!0}function $t(){z=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const _=e[a];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,_=(s>0&&e[n[s]].claim_order<=a?s+1:wt(1,s,u=>e[n[u]].claim_order,a))-1;i[l]=n[_]+1;const f=_+1;n[f]=l,s=Math.max(f,s)}const c=[],r=[];let o=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);c.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<c.length&&r[l].claim_order>=c[a].claim_order;)a++;const _=a<c.length?c[a]:null;t.insertBefore(r[l],_)}}function Et(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function kt(t){const e=U("style");return At(ct(t),e),e.sheet}function At(t,e){Et(t.head||t,e)}function Tt(t,e){if(z){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){t.insertBefore(e,n||null)}function St(t,e,n){z&&!n?Tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function Zt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function te(){return V(" ")}function ee(){return V("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ie(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Ct(t,i,e[i])}function se(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ut(t,e,n,i,s=!1){at(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const l=n(o);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function ft(t,e,n,i){return ut(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||c.push(o.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return ft(t,e,n,U)}function le(t,e,n){return ft(t,e,n,ot)}function Mt(t,e){return ut(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function ce(t){return Mt(t," ")}function tt(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function oe(t,e){const n=tt(t,"HTML_TAG_START",0),i=tt(t,"HTML_TAG_END",n);if(n===i)return new et(void 0,e);at(t);const s=t.splice(n,i-n+1);O(s[0]),O(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new et(c,e)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e){t.value=e==null?"":e}function fe(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function _e(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function de(t,e=document.body){return Array.from(e.querySelectorAll(t))}class Dt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=ot(n.nodeName):this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Nt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(O)}}class et extends Dt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)St(this.t,this.n[n],e)}}const P=new Map;let R=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Lt(t,e){const n={stylesheet:kt(e),rules:{}};return P.set(t,n),n}function q(t,e,n,i,s,c,r,o=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*c(m);a+=m*100+`%{${r(y,1-y)}}
`}const _=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Ht(_)}_${o}`,u=ct(t),{stylesheet:d,rules:h}=P.get(u)||Lt(u,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,R+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),R-=s,R||Ot())}function Ot(){K(()=>{R||(P.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),P.clear())})}let S;function N(t){S=t}function j(){if(!S)throw new Error("Function called outside component initialization");return S}function he(t){j().$$.on_mount.push(t)}function me(t){j().$$.after_update.push(t)}function pe(){const t=j();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,c)}),!c.defaultPrevented}return!0}}function ge(t,e){return j().$$.context.set(t,e),e}function ye(t){return j().$$.context.get(t)}function be(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const T=[],nt=[],H=[],G=[],dt=Promise.resolve();let I=!1;function ht(){I||(I=!0,dt.then(mt))}function xe(){return ht(),dt}function k(t){H.push(t)}function $e(t){G.push(t)}const F=new Set;let D=0;function mt(){const t=S;do{for(;D<T.length;){const e=T[D];D++,N(e),Pt(e.$$)}for(N(null),T.length=0,D=0;nt.length;)nt.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];F.has(n)||(F.add(n),n())}H.length=0}while(T.length);for(;G.length;)G.pop()();I=!1,F.clear(),N(t)}function Pt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}let A;function X(){return A||(A=Promise.resolve(),A.then(()=>{A=null})),A}function w(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const L=new Set;let g;function we(){g={r:0,c:[],p:g}}function ve(){g.r||v(g.c),g=g.p}function Rt(t,e){t&&t.i&&(L.delete(t),t.i(e))}function Ee(t,e,n,i){if(t&&t.o){if(L.has(t))return;L.add(t),g.c.push(()=>{L.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Y={duration:0};function ke(t,e,n){let i=e(t,n),s=!1,c,r,o=0;function l(){c&&B(t,c)}function a(){const{delay:f=0,duration:u=300,easing:d=W,tick:h=b,css:p}=i||Y;p&&(c=q(t,0,1,u,f,d,p,o++)),h(0,1);const m=J()+f,y=m+u;r&&r.abort(),s=!0,k(()=>w(t,!0,"start")),r=Q(x=>{if(s){if(x>=y)return h(1,0),w(t,!0,"end"),l(),s=!1;if(x>=m){const $=d((x-m)/u);h($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,B(t),C(i)?(i=i(),X().then(a)):a())},invalidate(){_=!1},end(){s&&(l(),s=!1)}}}function Ae(t,e,n){let i=e(t,n),s=!0,c;const r=g;r.r+=1;function o(){const{delay:l=0,duration:a=300,easing:_=W,tick:f=b,css:u}=i||Y;u&&(c=q(t,1,0,a,l,_,u));const d=J()+l,h=d+a;k(()=>w(t,!1,"start")),Q(p=>{if(s){if(p>=h)return f(0,1),w(t,!1,"end"),--r.r||v(r.c),!1;if(p>=d){const m=_((p-d)/a);f(1-m,m)}}return s})}return C(i)?X().then(()=>{i=i(),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),s&&(c&&B(t,c),s=!1)}}}function Te(t,e,n,i){let s=e(t,n),c=i?0:1,r=null,o=null,l=null;function a(){l&&B(t,l)}function _(u,d){const h=u.b-c;return d*=Math.abs(h),{a:c,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:p=W,tick:m=b,css:y}=s||Y,x={start:J()+d,b:u};u||(x.group=g,g.r+=1),r||o?o=x:(y&&(a(),l=q(t,c,u,h,d,p,y)),u&&m(0,1),r=_(x,h),k(()=>w(t,u,"start")),Q($=>{if(o&&$>o.start&&(r=_(o,h),o=null,w(t,r.b,"start"),y&&(a(),l=q(t,c,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(c=r.b,1-c),w(t,r.b,"end"),o||(r.b?a():--r.group.r||v(r.group.c)),r=null;else if($>=r.start){const pt=$-r.start;c=r.a+r.d*p(pt/r.duration),m(c,1-c)}}return!!(r||o)}))}return{run(u){C(s)?X().then(()=>{s=s(),f(u)}):f(u)},end(){a(),r=o=null}}}const Ne=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Se(t,e){const n={},i={},s={$$scope:1};let c=t.length;for(;c--;){const r=t[c],o=e[c];if(o){for(const l in r)l in o||(i[l]=1);for(const l in o)s[l]||(n[l]=o[l],s[l]=1);t[c]=o}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Ce(t){return typeof t=="object"&&t!==null?t:{}}function je(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Me(t){t&&t.c()}function De(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:s,on_mount:c,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||k(()=>{const l=c.map(it).filter(C);r?r.push(...l):v(l),t.$$.on_mount=[]}),o.forEach(k)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(T.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function He(t,e,n,i,s,c,r,o=[-1]){const l=S;N(t);const a=t.$$={fragment:null,ctx:null,props:c,update:b,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Z(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let _=!1;if(a.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),_&&zt(t,f)),u}):[],a.update(),_=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){xt();const f=jt(e.target);a.fragment&&a.fragment.l(f),f.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&Rt(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),$t(),mt()}N(l)}class Le{$destroy(){Bt(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Xt as $,Se as A,Ce as B,Bt as C,gt as D,xe as E,ie as F,_e as G,Yt as H,Kt as I,Qt as J,Jt as K,Vt as L,j as M,Ut as N,Wt as O,nt as P,k as Q,Tt as R,Le as S,Zt as T,Gt as U,ne as V,v as W,It as X,et as Y,oe as Z,de as _,jt as a,W as a0,ye as a1,be as a2,pe as a3,Te as a4,$e as a5,je as a6,se as a7,ue as a8,ot as a9,le as aa,Ae as ab,C as ac,Ne as ad,ke as ae,Ct as b,re as c,O as d,U as e,fe as f,St as g,Mt as h,He as i,ae as j,te as k,ee as l,ce as m,b as n,we as o,Ee as p,ve as q,Rt as r,Ft as s,V as t,ge as u,me as v,he as w,Me as x,De as y,qt as z};