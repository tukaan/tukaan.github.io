import{a0 as ve,a1 as ke,V as H,a2 as ae,S as R,i as U,s as q,e as w,c as E,a as S,d as h,F as N,G as g,g as k,I,J as O,K as B,A as X,r as b,p as v,l as y,L as T,D as C,N as ie,O as M,P as Q,o as J,q as G,M as we,a3 as Ee,k as D,x as j,m as F,y as W,R as P,z,H as oe,C as A,W as re,b as V,T as Se,X as ye,w as Le,Q as Ce,a4 as Y,t as fe,h as ue,j as ce,Y as de,Z as _e}from"./index-a8447449.js";/* empty css                                               */function Z(s){return Math.sqrt(1- --s*s)}function De(s){const e=s-1;return e*e*e+1}function $e(s,{delay:e=0,duration:n=400,easing:l=ve}={}){const t=+getComputedStyle(s).opacity;return{delay:e,duration:n,easing:l,css:a=>`opacity: ${a*t}`}}function $(s,{delay:e=0,duration:n=400,easing:l=De}={}){const t=getComputedStyle(s),a=+t.opacity,o=parseFloat(t.height),f=parseFloat(t.paddingTop),i=parseFloat(t.paddingBottom),c=parseFloat(t.marginTop),u=parseFloat(t.marginBottom),d=parseFloat(t.borderTopWidth),m=parseFloat(t.borderBottomWidth);return{delay:e,duration:n,easing:l,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*a};height: ${r*o}px;padding-top: ${r*f}px;padding-bottom: ${r*i}px;margin-top: ${r*c}px;margin-bottom: ${r*u}px;border-top-width: ${r*d}px;border-bottom-width: ${r*m}px;`}}const me=()=>{const s=ke("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session,updated:s.updated}},Fe={subscribe(s){return me().page.subscribe(s)}},xe={subscribe(s){return me().navigating.subscribe(s)}};var Ne='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 5.65c.2-.2.5-.2.7 0L8 9.79l4.15-4.14a.5.5 0 01.7.7l-4.5 4.5a.5.5 0 01-.7 0l-4.5-4.5a.5.5 0 010-.7z"/></svg>';function et(s,e={type:"click",stopPropagation:!1}){const{type:n,stopPropagation:l}=e,t=a=>{l&&a.stopPropagation(),s&&!s.contains(a.target)&&!a.defaultPrevented&&s.dispatchEvent(new CustomEvent(`outer${n}`,{detail:a}))};return document.addEventListener(n,t,!0),{destroy(){document.removeEventListener(n,t,!0)}}}function x(s){const e=window.getComputedStyle(document.documentElement).getPropertyValue(s);return parseFloat(e)*(/\ds$/.test(e)?1e3:1)||0}function Pe(s,e=[]){let n,l=[];return s.$on=(t,a)=>{let o=()=>{};if(e.includes(t)){const f=s.$$.callbacks[t]||(s.$$.callbacks[t]=[]);return f.push(a),()=>{const i=f.indexOf(a);i!==-1&&f.splice(i,1)}}return n?o=n(t,a):l.push([t,a]),()=>o()},t=>{const a=[],o={},f=i=>ae(s,i);n=(i,c)=>{const m=H(t,i,c,!1),r=()=>{m();const _=a.indexOf(r);_>-1&&a.splice(_,1)};return a.push(r),i in o||(o[i]=H(t,i,f)),r};for(const i of l)n(i[0],i[1]);return{destroy:()=>{for(const i of a)i();for(let i of Object.entries(o))i[1]()}}}}function K(s){let e,n,l;const t=s[7].default,a=M(t,s,s[6],null);let o=[{class:n="text-block type-"+s[4][s[1]].name+" "+s[3]},s[5]],f={};for(let i=0;i<o.length;i+=1)f=C(f,o[i]);return{c(){e=w(s[2]?s[2]:s[4][s[1]].tag),a&&a.c(),this.h()},l(i){e=E(i,((s[2]?s[2]:s[4][s[1]].tag)||"null").toUpperCase(),{class:!0});var c=S(e);a&&a.l(c),c.forEach(h),this.h()},h(){N(e,f),g(e,"svelte-zxj483",!0)},m(i,c){k(i,e,c),a&&a.m(e,null),s[8](e),l=!0},p(i,c){a&&a.p&&(!l||c&64)&&I(a,t,i,i[6],l?B(t,i[6],c,null):O(i[6]),null),N(e,f=X(o,[(!l||c&10&&n!==(n="text-block type-"+i[4][i[1]].name+" "+i[3]))&&{class:n},c&32&&i[5]])),g(e,"svelte-zxj483",!0)},i(i){l||(b(a,i),l=!0)},o(i){v(a,i),l=!1},d(i){i&&h(e),a&&a.d(i),s[8](null)}}}function Ve(s){let e=s[2]?s[2]:s[4][s[1]].tag,n,l,t=(s[2]?s[2]:s[4][s[1]].tag)&&K(s);return{c(){t&&t.c(),n=y()},l(a){t&&t.l(a),n=y()},m(a,o){t&&t.m(a,o),k(a,n,o),l=!0},p(a,[o]){(a[2]?a[2]:a[4][a[1]].tag)?e?q(e,a[2]?a[2]:a[4][a[1]].tag)?(t.d(1),t=K(a),t.c(),t.m(n.parentNode,n)):t.p(a,o):(t=K(a),t.c(),t.m(n.parentNode,n)):e&&(t.d(1),t=null),e=a[2]?a[2]:a[4][a[1]].tag},i(a){l||(b(t),l=!0)},o(a){v(t),l=!1},d(a){a&&h(n),t&&t.d(a)}}}function Ie(s,e,n){const l=["variant","tag","class","element"];let t=T(e,l),{$$slots:a={},$$scope:o}=e,{variant:f="body"}=e,{tag:i=void 0}=e,{class:c=""}=e,{element:u=null}=e;const d={caption:{tag:"span",name:"caption"},body:{tag:"span",name:"body"},bodyStrong:{tag:"h5",name:"body-strong"},bodyLarge:{tag:"h5",name:"body-large"},subtitle:{tag:"h4",name:"subtitle"},title:{tag:"h3",name:"title"},titleLarge:{tag:"h2",name:"title-large"},display:{tag:"h1",name:"display"}};function m(r){Q[r?"unshift":"push"](()=>{u=r,n(0,u)})}return s.$$set=r=>{e=C(C({},e),ie(r)),n(5,t=T(e,l)),"variant"in r&&n(1,f=r.variant),"tag"in r&&n(2,i=r.tag),"class"in r&&n(3,c=r.class),"element"in r&&n(0,u=r.element),"$$scope"in r&&n(6,o=r.$$scope)},[u,f,i,c,d,t,o,a,m]}class he extends R{constructor(e){super(),U(this,e,Ie,Ve,q,{variant:1,tag:2,class:3,element:0})}}const Oe=s=>({}),ee=s=>({}),Be=s=>({}),te=s=>({});function Me(s){let e,n,l,t,a,o,f,i;const c=s[8].icon,u=M(c,s,s[11],ee);l=new he({props:{$$slots:{default:[We]},$$scope:{ctx:s}}});let d=[{tabindex:t=s[2]?-1:0},{"aria-selected":s[1]},{class:a="list-item "+s[5]},{href:s[3]},{role:s[4]},s[7]],m={};for(let r=0;r<d.length;r+=1)m=C(m,d[r]);return{c(){e=w("li"),u&&u.c(),n=D(),j(l.$$.fragment),this.h()},l(r){e=E(r,"LI",{tabindex:!0,"aria-selected":!0,class:!0,href:!0,role:!0});var _=S(e);u&&u.l(_),n=F(_),W(l.$$.fragment,_),_.forEach(h),this.h()},h(){N(e,m),g(e,"selected",s[1]),g(e,"disabled",s[2]),g(e,"svelte-1s830ni",!0)},m(r,_){k(r,e,_),u&&u.m(e,null),P(e,n),z(l,e,null),s[10](e),o=!0,f||(i=[oe(s[6].call(null,e)),H(e,"keydown",ge)],f=!0)},p(r,_){u&&u.p&&(!o||_&2048)&&I(u,c,r,r[11],o?B(c,r[11],_,Oe):O(r[11]),ee);const L={};_&2048&&(L.$$scope={dirty:_,ctx:r}),l.$set(L),N(e,m=X(d,[(!o||_&4&&t!==(t=r[2]?-1:0))&&{tabindex:t},(!o||_&2)&&{"aria-selected":r[1]},(!o||_&32&&a!==(a="list-item "+r[5]))&&{class:a},(!o||_&8)&&{href:r[3]},(!o||_&16)&&{role:r[4]},_&128&&r[7]])),g(e,"selected",r[1]),g(e,"disabled",r[2]),g(e,"svelte-1s830ni",!0)},i(r){o||(b(u,r),b(l.$$.fragment,r),o=!0)},o(r){v(u,r),v(l.$$.fragment,r),o=!1},d(r){r&&h(e),u&&u.d(r),A(l),s[10](null),f=!1,re(i)}}}function je(s){let e,n,l,t,a,o,f,i;const c=s[8].icon,u=M(c,s,s[11],te);l=new he({props:{$$slots:{default:[ze]},$$scope:{ctx:s}}});let d=[{tabindex:t=s[2]?-1:0},{"aria-selected":s[1]},{class:a="list-item "+s[5]},{href:s[3]},{role:s[4]},s[7]],m={};for(let r=0;r<d.length;r+=1)m=C(m,d[r]);return{c(){e=w("a"),u&&u.c(),n=D(),j(l.$$.fragment),this.h()},l(r){e=E(r,"A",{tabindex:!0,"aria-selected":!0,class:!0,href:!0,role:!0});var _=S(e);u&&u.l(_),n=F(_),W(l.$$.fragment,_),_.forEach(h),this.h()},h(){N(e,m),g(e,"selected",s[1]),g(e,"disabled",s[2]),g(e,"svelte-1s830ni",!0)},m(r,_){k(r,e,_),u&&u.m(e,null),P(e,n),z(l,e,null),s[9](e),o=!0,f||(i=[oe(s[6].call(null,e)),H(e,"keydown",ge)],f=!0)},p(r,_){u&&u.p&&(!o||_&2048)&&I(u,c,r,r[11],o?B(c,r[11],_,Be):O(r[11]),te);const L={};_&2048&&(L.$$scope={dirty:_,ctx:r}),l.$set(L),N(e,m=X(d,[(!o||_&4&&t!==(t=r[2]?-1:0))&&{tabindex:t},(!o||_&2)&&{"aria-selected":r[1]},(!o||_&32&&a!==(a="list-item "+r[5]))&&{class:a},(!o||_&8)&&{href:r[3]},(!o||_&16)&&{role:r[4]},_&128&&r[7]])),g(e,"selected",r[1]),g(e,"disabled",r[2]),g(e,"svelte-1s830ni",!0)},i(r){o||(b(u,r),b(l.$$.fragment,r),o=!0)},o(r){v(u,r),v(l.$$.fragment,r),o=!1},d(r){r&&h(e),u&&u.d(r),A(l),s[9](null),f=!1,re(i)}}}function We(s){let e;const n=s[8].default,l=M(n,s,s[11],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&2048)&&I(l,n,t,t[11],e?B(n,t[11],a,null):O(t[11]),null)},i(t){e||(b(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function ze(s){let e;const n=s[8].default,l=M(n,s,s[11],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,a){l&&l.m(t,a),e=!0},p(t,a){l&&l.p&&(!e||a&2048)&&I(l,n,t,t[11],e?B(n,t[11],a,null):O(t[11]),null)},i(t){e||(b(l,t),e=!0)},o(t){v(l,t),e=!1},d(t){l&&l.d(t)}}}function Ae(s){let e,n,l,t;const a=[je,Me],o=[];function f(i,c){return i[3]&&!i[2]?0:1}return e=f(s),n=o[e]=a[e](s),{c(){n.c(),l=y()},l(i){n.l(i),l=y()},m(i,c){o[e].m(i,c),k(i,l,c),t=!0},p(i,[c]){let u=e;e=f(i),e===u?o[e].p(i,c):(J(),v(o[u],1,1,()=>{o[u]=null}),G(),n=o[e],n?n.p(i,c):(n=o[e]=a[e](i),n.c()),b(n,1),n.m(l.parentNode,l))},i(i){t||(b(n),t=!0)},o(i){v(n),t=!1},d(i){o[e].d(i),i&&h(l)}}}function ge({key:s,target:e}){s==="Enter"&&e.click()}function He(s,e,n){const l=["selected","disabled","href","role","class","element"];let t=T(e,l),{$$slots:a={},$$scope:o}=e,{selected:f=!1}=e,{disabled:i=!1}=e,{href:c=""}=e,{role:u="listitem"}=e,{class:d=""}=e,{element:m=null}=e;const r=Pe(we(),["select"]),_=Ee();function L(p){Q[p?"unshift":"push"](()=>{m=p,n(0,m)})}function be(p){Q[p?"unshift":"push"](()=>{m=p,n(0,m)})}return s.$$set=p=>{e=C(C({},e),ie(p)),n(7,t=T(e,l)),"selected"in p&&n(1,f=p.selected),"disabled"in p&&n(2,i=p.disabled),"href"in p&&n(3,c=p.href),"role"in p&&n(4,u=p.role),"class"in p&&n(5,d=p.class),"element"in p&&n(0,m=p.element),"$$scope"in p&&n(11,o=p.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&f&&_("select")},[m,f,i,c,u,d,r,t,a,L,be,o]}class pe extends R{constructor(e){super(),U(this,e,He,Ae,q,{selected:1,disabled:2,href:3,role:4,class:5,element:0})}}function se(s,e,n){const l=s.slice();return l[8]=e[n].name,l[9]=e[n].path,l[10]=e[n].type,l[11]=e[n].pages,l[12]=e[n].icon,l}function Te(s){let e,n;return e=new pe({props:{selected:`/docs${s[9]}`===s[3].url.pathname,href:"/docs"+s[9],$$slots:{icon:[Ge],default:[Je]},$$scope:{ctx:s}}}),e.$on("click",s[7]),{c(){j(e.$$.fragment)},l(l){W(e.$$.fragment,l)},m(l,t){z(e,l,t),n=!0},p(l,t){const a={};t&9&&(a.selected=`/docs${l[9]}`===l[3].url.pathname),t&1&&(a.href="/docs"+l[9]),t&32769&&(a.$$scope={dirty:t,ctx:l}),e.$set(a)},i(l){n||(b(e.$$.fragment,l),n=!0)},o(l){v(e.$$.fragment,l),n=!1},d(l){A(e,l)}}}function qe(s){var c;let e,n,l,t=(c=s[2])==null?void 0:c[s[4](s[8])],a,o;function f(...u){return s[6](s[8],...u)}n=new pe({props:{$$slots:{icon:[Qe],default:[Ke]},$$scope:{ctx:s}}}),n.$on("click",f);let i=t&&le(s);return{c(){e=w("div"),j(n.$$.fragment),l=D(),i&&i.c(),a=D(),this.h()},l(u){e=E(u,"DIV",{class:!0});var d=S(e);W(n.$$.fragment,d),l=F(d),i&&i.l(d),a=F(d),d.forEach(h),this.h()},h(){var u;V(e,"class","subtree svelte-2n76fs"),g(e,"expanded",(u=s[2])==null?void 0:u[s[4](s[8])])},m(u,d){k(u,e,d),z(n,e,null),P(e,l),i&&i.m(e,null),P(e,a),o=!0},p(u,d){var r,_;s=u;const m={};d&32773&&(m.$$scope={dirty:d,ctx:s}),n.$set(m),d&5&&(t=(r=s[2])==null?void 0:r[s[4](s[8])]),t?i?(i.p(s,d),d&5&&b(i,1)):(i=le(s),i.c(),b(i,1),i.m(e,a)):i&&(J(),v(i,1,1,()=>{i=null}),G()),d&21&&g(e,"expanded",(_=s[2])==null?void 0:_[s[4](s[8])])},i(u){o||(b(n.$$.fragment,u),b(i),o=!0)},o(u){v(n.$$.fragment,u),v(i),o=!1},d(u){u&&h(e),A(n),i&&i.d()}}}function Je(s){let e=s[8]+"",n,l;return{c(){n=fe(e),l=D()},l(t){n=ue(t,e),l=F(t)},m(t,a){k(t,n,a),k(t,l,a)},p(t,a){a&1&&e!==(e=t[8]+"")&&ce(n,e)},d(t){t&&h(n),t&&h(l)}}}function Ge(s){let e,n=(s[12]||"")+"",l;return{c(){e=new de(!1),l=D(),this.h()},l(t){e=_e(t,!1),l=F(t),this.h()},h(){e.a=l},m(t,a){e.m(n,t,a),k(t,l,a)},p(t,a){a&1&&n!==(n=(t[12]||"")+"")&&e.p(n)},d(t){t&&e.d(),t&&h(l)}}}function Ke(s){let e,n=s[8]+"",l,t,a;return{c(){e=w("span"),l=fe(n),t=D(),a=w("div"),this.h()},l(o){e=E(o,"SPAN",{class:!0});var f=S(e);l=ue(f,n),f.forEach(h),t=F(o),a=E(o,"DIV",{class:!0});var i=S(a);i.forEach(h),this.h()},h(){var o;V(e,"class","tree-view-item"),V(a,"class","expander-icon"),g(a,"expanded",(o=s[2])==null?void 0:o[s[4](s[8])])},m(o,f){k(o,e,f),P(e,l),k(o,t,f),k(o,a,f),a.innerHTML=Ne},p(o,f){var i;f&1&&n!==(n=o[8]+"")&&ce(l,n),f&21&&g(a,"expanded",(i=o[2])==null?void 0:i[o[4](o[8])])},d(o){o&&h(e),o&&h(t),o&&h(a)}}}function Qe(s){let e,n=(s[12]||"")+"",l;return{c(){e=new de(!1),l=y(),this.h()},l(t){e=_e(t,!1),l=y(),this.h()},h(){e.a=l},m(t,a){e.m(n,t,a),k(t,l,a)},p(t,a){a&1&&n!==(n=(t[12]||"")+"")&&e.p(n)},d(t){t&&h(l),t&&e.d()}}}function le(s){let e,n,l,t;return n=new Xe({props:{tree:s[11],initial:!1}}),{c(){e=w("div"),j(n.$$.fragment),this.h()},l(a){e=E(a,"DIV",{class:!0});var o=S(e);W(n.$$.fragment,o),o.forEach(h),this.h()},h(){var a;V(e,"class","subtree-items svelte-2n76fs"),g(e,"expanded",(a=s[2])==null?void 0:a[s[4](s[8])])},m(a,o){k(a,e,o),z(n,e,null),t=!0},p(a,o){var i;s=a;const f={};o&1&&(f.tree=s[11]),n.$set(f),o&21&&g(e,"expanded",(i=s[2])==null?void 0:i[s[4](s[8])])},i(a){t||(b(n.$$.fragment,a),a&&Ce(()=>{l||(l=Y(e,$,{duration:x("--fds-control-fast-duration"),easing:Z},!0)),l.run(1)}),t=!0)},o(a){v(n.$$.fragment,a),a&&(l||(l=Y(e,$,{duration:x("--fds-control-fast-duration"),easing:Z},!1)),l.run(0)),t=!1},d(a){a&&h(e),A(n),a&&l&&l.end()}}}function ne(s){let e,n,l,t;const a=[qe,Te],o=[];function f(i,c){return i[10]==="category"?0:1}return e=f(s),n=o[e]=a[e](s),{c(){n.c(),l=y()},l(i){n.l(i),l=y()},m(i,c){o[e].m(i,c),k(i,l,c),t=!0},p(i,c){let u=e;e=f(i),e===u?o[e].p(i,c):(J(),v(o[u],1,1,()=>{o[u]=null}),G(),n=o[e],n?n.p(i,c):(n=o[e]=a[e](i),n.c()),b(n,1),n.m(l.parentNode,l))},i(i){t||(b(n),t=!0)},o(i){v(n),t=!1},d(i){o[e].d(i),i&&h(l)}}}function Re(s){let e,n,l=s[0],t=[];for(let o=0;o<l.length;o+=1)t[o]=ne(se(s,l,o));const a=o=>v(t[o],1,1,()=>{t[o]=null});return{c(){e=w("div");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var f=S(e);for(let i=0;i<t.length;i+=1)t[i].l(f);f.forEach(h),this.h()},h(){V(e,"class","tree-view scroller svelte-2n76fs"),g(e,"initial",s[1])},m(o,f){k(o,e,f);for(let i=0;i<t.length;i+=1)t[i].m(e,null);n=!0},p(o,[f]){if(f&61){l=o[0];let i;for(i=0;i<l.length;i+=1){const c=se(o,l,i);t[i]?(t[i].p(c,f),b(t[i],1)):(t[i]=ne(c),t[i].c(),b(t[i],1),t[i].m(e,null))}for(J(),i=l.length;i<t.length;i+=1)a(i);G()}f&2&&g(e,"initial",o[1])},i(o){if(!n){for(let f=0;f<l.length;f+=1)b(t[f]);n=!0}},o(o){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)v(t[f]);n=!1},d(o){o&&h(e),Se(t,o)}}}function Ue(s,e,n){let l;ye(s,Fe,d=>n(3,l=d));let{tree:t=[]}=e,{initial:a=!0}=e,o;Le(()=>{var d;n(2,o=JSON.parse((d=localStorage.getItem("treeViewState"))!==null&&d!==void 0?d:"{}"))});const f=d=>d.toLowerCase().split(" ").join("-"),i=(d,m)=>{d.stopPropagation(),n(2,o[f(m)]=!o[f(m)],o),localStorage.setItem("treeViewState",JSON.stringify(o))},c=(d,m)=>i(m,d);function u(d){ae.call(this,s,d)}return s.$$set=d=>{"tree"in d&&n(0,t=d.tree),"initial"in d&&n(1,a=d.initial)},[t,a,o,l,f,i,c,u]}class Xe extends R{constructor(e){super(),U(this,e,Ue,Re,q,{tree:0,initial:1})}}const tt={target:"_blank",rel:"noreferrer noopener"},st=[{name:"Overview",path:""},{type:"category",name:"The basics",pages:[{name:"Let's get started",path:"/basics/get-started"},{name:"Displaying text",path:"/basics/label"},{name:"Buttons",path:"/basics/button"},{name:"Getting text input",path:"/basics/textbox"},{name:"Working with tabs",path:"/basics/tabview"},{name:"Separating widgets",path:"/basics/separator"}]},{type:"category",name:"Miscellaneous",pages:[{name:"Event handling",path:"/misc/events"},{name:"Timing and scheduling functions",path:"/misc/timing"},{name:"Widget tooltips",path:"/misc/tooltips"}]},{type:"category",name:"Advanced",pages:[{name:"Blocking the event loop",path:"/advanced/blocking"}]}];export{pe as L,Xe as T,et as a,Pe as c,st as d,tt as e,$e as f,xe as n,Fe as p};