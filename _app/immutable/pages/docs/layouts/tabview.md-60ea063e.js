import{S as H,i as I,s as R,e as i,t as d,k as E,c as l,a as b,h as f,d as s,m as V,b as g,U as S,g as o,R as r,n as y}from"../../../chunks/index-cd4ba230.js";function D(P){let t,h,k,v,T,w,e,c,A,m,u,x,_,p,W=`<code class="language-python"><span class="token keyword">import</span> tukaan


app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span><span class="token punctuation">)</span>
window <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>MainWindow<span class="token punctuation">(</span>title<span class="token operator">=</span><span class="token string">"Test TabView widget"</span><span class="token punctuation">)</span>

<span class="token comment"># Create tabview</span>
tabview <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>TabView<span class="token punctuation">(</span>window<span class="token punctuation">)</span>
tabview<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>margin<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment"># Create tabs</span>
tab_1 <span class="token operator">=</span> tabview<span class="token punctuation">.</span>Tab<span class="token punctuation">(</span><span class="token string">"Tab 1"</span><span class="token punctuation">)</span>
tab_2 <span class="token operator">=</span> tabview<span class="token punctuation">.</span>Tab<span class="token punctuation">(</span><span class="token string">"Tab 2"</span><span class="token punctuation">)</span>

<span class="token comment"># Add tab contents</span>
button_1 <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>tab_1<span class="token punctuation">,</span> <span class="token string">"Button in tab 1"</span><span class="token punctuation">)</span>
button_1<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>margin<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

button_2 <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>Button<span class="token punctuation">(</span>tab_2<span class="token punctuation">,</span> <span class="token string">"Button in tab 2"</span><span class="token punctuation">)</span>
button_2<span class="token punctuation">.</span>grid<span class="token punctuation">(</span>margin<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code>`;return{c(){t=i("h1"),h=d("Working with tabs: The "),k=i("code"),v=d("TabView"),T=d(" widget"),w=E(),e=i("p"),c=i("img"),m=E(),u=i("p"),x=d("An example of how to set up a TabView widget is as follows:"),_=E(),p=i("pre"),this.h()},l(a){t=l(a,"H1",{id:!0});var n=b(t);h=f(n,"Working with tabs: The "),k=l(n,"CODE",{});var B=b(k);v=f(B,"TabView"),B.forEach(s),T=f(n," widget"),n.forEach(s),w=V(a),e=l(a,"P",{});var C=b(e);c=l(C,"IMG",{src:!0,alt:!0}),C.forEach(s),m=V(a),u=l(a,"P",{});var M=b(u);x=f(M,"An example of how to set up a TabView widget is as follows:"),M.forEach(s),_=V(a),p=l(a,"PRE",{class:!0});var q=b(p);q.forEach(s),this.h()},h(){g(t,"id","working-with-tabs-the-tabview-widget"),S(c.src,A="/resources/docs/tabview.png")||g(c,"src",A),g(c,"alt","Image of a Tukaan tabview"),g(p,"class","language-python")},m(a,n){o(a,t,n),r(t,h),r(t,k),r(k,v),r(t,T),o(a,w,n),o(a,e,n),r(e,c),o(a,m,n),o(a,u,n),r(u,x),o(a,_,n),o(a,p,n),p.innerHTML=W},p:y,i:y,o:y,d(a){a&&s(t),a&&s(w),a&&s(e),a&&s(m),a&&s(u),a&&s(_),a&&s(p)}}}class L extends H{constructor(t){super(),I(this,t,null,D,R,{})}}export{L as default};
