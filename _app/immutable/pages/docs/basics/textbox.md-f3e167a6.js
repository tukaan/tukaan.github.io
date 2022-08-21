import{S as j,i as z,s as F,e as l,t as u,k as T,c as i,a as c,h as m,d as e,m as E,b,U as J,g as o,R as s,n as q}from"../../../chunks/index-a8447449.js";function K(W){let n,B,_,P,G,h,p,I,d,S,A,g,f,x,D,w,k,C,y,r,L=`<code class="language-python"><span class="token keyword">import</span> tukaan

app <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>App<span class="token punctuation">(</span><span class="token punctuation">)</span>

example_entry <span class="token operator">=</span> tukaan<span class="token punctuation">.</span>TextBox<span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token comment"># Place it on the window</span>
example_entry<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Get input from example_entry</span>
input_from_entry <span class="token operator">=</span> example_entry<span class="token punctuation">.</span>value

<span class="token keyword">print</span><span class="token punctuation">(</span>input_from_entry<span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`;return{c(){n=l("h1"),B=u("Getting text input: The "),_=l("code"),P=u("TextBox"),G=u(" widget"),h=T(),p=l("p"),I=u("When creating almost any program programmer\u2019s will eventually come across the need for input from the user outside of clicking buttons (See previous explanation for more detail on Button\u2019s). In Tukaan the program can get this input with the "),d=l("code"),S=u("TextBox"),A=u(" widget."),g=T(),f=l("p"),x=l("img"),w=T(),k=l("p"),C=u("A minimum example is as follows:"),y=T(),r=l("pre"),this.h()},l(t){n=i(t,"H1",{id:!0});var a=c(n);B=m(a,"Getting text input: The "),_=i(a,"CODE",{});var H=c(_);P=m(H,"TextBox"),H.forEach(e),G=m(a," widget"),a.forEach(e),h=E(t),p=i(t,"P",{});var v=c(p);I=m(v,"When creating almost any program programmer\u2019s will eventually come across the need for input from the user outside of clicking buttons (See previous explanation for more detail on Button\u2019s). In Tukaan the program can get this input with the "),d=i(v,"CODE",{});var M=c(d);S=m(M,"TextBox"),M.forEach(e),A=m(v," widget."),v.forEach(e),g=E(t),f=i(t,"P",{});var O=c(f);x=i(O,"IMG",{src:!0,alt:!0}),O.forEach(e),w=E(t),k=i(t,"P",{});var R=c(k);C=m(R,"A minimum example is as follows:"),R.forEach(e),y=E(t),r=i(t,"PRE",{class:!0});var U=c(r);U.forEach(e),this.h()},h(){b(n,"id","getting-text-input-the-textbox-widget"),J(x.src,D="/resources/docs/textbox.png")||b(x,"src",D),b(x,"alt","Image of a Tukaan textbox field"),b(r,"class","language-python")},m(t,a){o(t,n,a),s(n,B),s(n,_),s(_,P),s(n,G),o(t,h,a),o(t,p,a),s(p,I),s(p,d),s(d,S),s(p,A),o(t,g,a),o(t,f,a),s(f,x),o(t,w,a),o(t,k,a),s(k,C),o(t,y,a),o(t,r,a),r.innerHTML=L},p:q,i:q,o:q,d(t){t&&e(n),t&&e(h),t&&e(p),t&&e(g),t&&e(f),t&&e(w),t&&e(k),t&&e(y),t&&e(r)}}}class Q extends j{constructor(n){super(),z(this,n,null,K,F,{})}}export{Q as default};