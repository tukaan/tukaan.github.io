import{S as W,i as j,s as z,e as p,t as T,k as f,c as i,a as d,h as y,d as s,m as w,b as x,U as B,g as e,R as k,n as q}from"../../../chunks/index-cd4ba230.js";function D(C){let n,E,m,l,P,v,r,u,H,b,c,A,g,o,G=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span><span class="token punctuation">)</span>
window <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>MainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>

label <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>Label<span class="token punctuation">(</span>window<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">"Example label"</span><span class="token punctuation">,</span> tooltip<span class="token operator">=</span><span class="token string">"Test tooltip"</span><span class="token punctuation">)</span>
label<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,_,h,M;return{c(){n=p("h1"),E=T("Providing help: Tooltips"),m=f(),l=p("p"),P=T("Tooltips are very powerful tools. They are used to display information about a widget that is not directly visible to the user. This can be because the widget is displaying an image or cannot fit the text in the space available. That\u2019s where the tooltip comes in. The tooltip is a small window that is displayed when the user hovers over a widget."),v=f(),r=p("p"),u=p("img"),b=f(),c=p("p"),A=T("An example of how to set up a tooltip is as follows:"),g=f(),o=p("pre"),_=f(),h=p("p"),M=T("Tooltips are available on all widgets but be careful about the usage on widgets such as frames as it is triggered when the user hovers over the frame, not widgets placed inside it."),this.h()},l(a){n=i(a,"H1",{id:!0});var t=d(n);E=y(t,"Providing help: Tooltips"),t.forEach(s),m=w(a),l=i(a,"P",{});var I=d(l);P=y(I,"Tooltips are very powerful tools. They are used to display information about a widget that is not directly visible to the user. This can be because the widget is displaying an image or cannot fit the text in the space available. That\u2019s where the tooltip comes in. The tooltip is a small window that is displayed when the user hovers over a widget."),I.forEach(s),v=w(a),r=i(a,"P",{});var L=d(r);u=i(L,"IMG",{src:!0,alt:!0}),L.forEach(s),b=w(a),c=i(a,"P",{});var R=d(c);A=y(R,"An example of how to set up a tooltip is as follows:"),R.forEach(s),g=w(a),o=i(a,"PRE",{class:!0});var U=d(o);U.forEach(s),_=w(a),h=i(a,"P",{});var S=d(h);M=y(S,"Tooltips are available on all widgets but be careful about the usage on widgets such as frames as it is triggered when the user hovers over the frame, not widgets placed inside it."),S.forEach(s),this.h()},h(){x(n,"id","providing-help-tooltips"),B(u.src,H="/resources/docs/tooltip.png")||x(u,"src",H),x(u,"alt","Image of a Tukaan tooltip"),x(o,"class","language-python")},m(a,t){e(a,n,t),k(n,E),e(a,m,t),e(a,l,t),k(l,P),e(a,v,t),e(a,r,t),k(r,u),e(a,b,t),e(a,c,t),k(c,A),e(a,g,t),e(a,o,t),o.innerHTML=G,e(a,_,t),e(a,h,t),k(h,M)},p:q,i:q,o:q,d(a){a&&s(n),a&&s(m),a&&s(l),a&&s(v),a&&s(r),a&&s(b),a&&s(c),a&&s(g),a&&s(o),a&&s(_),a&&s(h)}}}class J extends W{constructor(n){super(),j(this,n,null,D,z,{})}}export{J as default};
