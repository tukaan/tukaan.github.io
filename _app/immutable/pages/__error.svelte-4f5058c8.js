import{S as y,i as g,s as E,x,k as j,e as u,t as k,_ as z,y as C,d as i,m as S,c as f,a as d,h as q,b as h,z as M,g as p,R as v,j as b,r as w,p as H,C as I}from"../chunks/index-cd4ba230.js";/* empty css                                                       */import{M as N}from"../chunks/Metadata-4da14f47.js";function O(n){let t,o,a,s,r,c;return t=new N({props:{title:"Error"}}),{c(){x(t.$$.fragment),o=j(),a=u("section"),s=u("h1"),r=k(n[0]),this.h()},l(e){const l=z('[data-svelte="svelte-e3atu8"]',document.head);C(t.$$.fragment,l),l.forEach(i),o=S(e),a=f(e,"SECTION",{class:!0});var _=d(a);s=f(_,"H1",{class:!0});var m=d(s);r=q(m,n[0]),m.forEach(i),_.forEach(i),this.h()},h(){h(s,"class","svelte-10vzjk7"),h(a,"class","error-page svelte-10vzjk7")},m(e,l){M(t,document.head,null),p(e,o,l),p(e,a,l),v(a,s),v(s,r),c=!0},p(e,[l]){(!c||l&1)&&b(r,e[0])},i(e){c||(w(t.$$.fragment,e),c=!0)},o(e){H(t.$$.fragment,e),c=!1},d(e){I(t),e&&i(o),e&&i(a)}}}const D=({error:n,status:t})=>({props:{status:t,error:n}});function R(n,t,o){let{status:a}=t,{error:s}=t;return n.$$set=r=>{"status"in r&&o(0,a=r.status),"error"in r&&o(1,s=r.error)},[a,s]}class F extends y{constructor(t){super(),g(this,t,R,O,E,{status:0,error:1})}}export{F as default,D as load};
