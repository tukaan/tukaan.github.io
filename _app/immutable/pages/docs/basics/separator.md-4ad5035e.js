import{S as Ta,i as Ia,s as La,e as p,t as e,k as h,c as l,a as r,h as n,d as s,m,b as I,U as za,g as i,R as t,n as ka}from"../../../chunks/index-a8447449.js";function Ha(Oa){let k,G,L,v,S,j,z,_,F,H,y,E,fa,M,f,J,A,N,V,R,w,xa=`<code class="language-python"><span class="token keyword">from</span> tukaan <span class="token keyword">import</span> App<span class="token punctuation">,</span> Separator

app <span class="token operator">=</span> App<span class="token punctuation">(</span><span class="token punctuation">)</span>

separator <span class="token operator">=</span> Separator<span class="token punctuation">(</span>app<span class="token punctuation">)</span>
separator<span class="token punctuation">.</span>position<span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">280</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,U,d,X,C,Y,Z,B,g,qa=`<code class="language-python"><span class="token keyword">from</span> tukaan <span class="token keyword">import</span> App<span class="token punctuation">,</span> Separator<span class="token punctuation">,</span> Label
<span class="token keyword">from</span> tukaan<span class="token punctuation">.</span>enums <span class="token keyword">import</span> Align

app <span class="token operator">=</span> App<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#Create some space between the edge of the window and the separator</span>

Label<span class="token punctuation">(</span>app<span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">"This is a label"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>grid<span class="token punctuation">(</span>row<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>

Separator<span class="token punctuation">(</span>app<span class="token punctuation">,</span> orientation<span class="token operator">=</span><span class="token string">"horizontal"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>grid<span class="token punctuation">(</span>row<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> col<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> align<span class="token operator">=</span>Align<span class="token punctuation">.</span>Stretch<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,K,b,c,$,O,aa,sa,x,ta,ea,q,na,oa,D,pa,la,P,ra,ca,T,ia,ua;return{c(){k=p("h2"),G=e("Separating widgets"),L=h(),v=p("blockquote"),S=p("p"),j=e("Separators are commonly used to separate widgets or to help visualize groups of widgets"),z=h(),_=p("p"),F=e("Separators are very useful for (as the name suggests) separating two or more items. In Tukaan they are used to separate widgets or to help visualize groups of widgets. As separators are a different type of widget than normal they can be a bit tricky to use."),H=h(),y=p("p"),E=p("img"),M=h(),f=p("p"),J=e("An example of how to set up a separator with "),A=p("code"),N=e(".position()"),V=e(" is as follows:"),R=h(),w=p("pre"),U=h(),d=p("p"),X=e("When using "),C=p("code"),Y=e(".grid()"),Z=e(" the proccess is slightly different:"),B=h(),g=p("pre"),K=h(),b=p("blockquote"),c=p("p"),$=e("It is important to note that while "),O=p("code"),aa=e("Align"),sa=e(" is necessary for "),x=p("code"),ta=e(".grid()"),ea=e(" it can also be used for position by replacing "),q=p("code"),na=e("height=value"),oa=e(" or "),D=p("code"),pa=e("width=value"),la=e(" with "),P=p("code"),ra=e("height=Align.Stretch"),ca=e(" or "),T=p("code"),ia=e("width=Align.Stretch"),ua=e("."),this.h()},l(a){k=l(a,"H2",{id:!0});var o=r(k);G=n(o,"Separating widgets"),o.forEach(s),L=m(a),v=l(a,"BLOCKQUOTE",{});var da=r(v);S=l(da,"P",{});var ha=r(S);j=n(ha,"Separators are commonly used to separate widgets or to help visualize groups of widgets"),ha.forEach(s),da.forEach(s),z=m(a),_=l(a,"P",{});var ma=r(_);F=n(ma,"Separators are very useful for (as the name suggests) separating two or more items. In Tukaan they are used to separate widgets or to help visualize groups of widgets. As separators are a different type of widget than normal they can be a bit tricky to use."),ma.forEach(s),H=m(a),y=l(a,"P",{});var wa=r(y);E=l(wa,"IMG",{src:!0,alt:!0}),wa.forEach(s),M=m(a),f=l(a,"P",{});var Q=r(f);J=n(Q,"An example of how to set up a separator with "),A=l(Q,"CODE",{});var ga=r(A);N=n(ga,".position()"),ga.forEach(s),V=n(Q," is as follows:"),Q.forEach(s),R=m(a),w=l(a,"PRE",{class:!0});var Da=r(w);Da.forEach(s),U=m(a),d=l(a,"P",{});var W=r(d);X=n(W,"When using "),C=l(W,"CODE",{});var va=r(C);Y=n(va,".grid()"),va.forEach(s),Z=n(W," the proccess is slightly different:"),W.forEach(s),B=m(a),g=l(a,"PRE",{class:!0});var Pa=r(g);Pa.forEach(s),K=m(a),b=l(a,"BLOCKQUOTE",{});var _a=r(b);c=l(_a,"P",{});var u=r(c);$=n(u,"It is important to note that while "),O=l(u,"CODE",{});var ya=r(O);aa=n(ya,"Align"),ya.forEach(s),sa=n(u," is necessary for "),x=l(u,"CODE",{});var Ea=r(x);ta=n(Ea,".grid()"),Ea.forEach(s),ea=n(u," it can also be used for position by replacing "),q=l(u,"CODE",{});var ba=r(q);na=n(ba,"height=value"),ba.forEach(s),oa=n(u," or "),D=l(u,"CODE",{});var Sa=r(D);pa=n(Sa,"width=value"),Sa.forEach(s),la=n(u," with "),P=l(u,"CODE",{});var Aa=r(P);ra=n(Aa,"height=Align.Stretch"),Aa.forEach(s),ca=n(u," or "),T=l(u,"CODE",{});var Ca=r(T);ia=n(Ca,"width=Align.Stretch"),Ca.forEach(s),ua=n(u,"."),u.forEach(s),_a.forEach(s),this.h()},h(){I(k,"id","separating-widgets"),za(E.src,fa="/resources/docs/separator.png")||I(E,"src",fa),I(E,"alt","Image of a Tukaan separator"),I(w,"class","language-python"),I(g,"class","language-python")},m(a,o){i(a,k,o),t(k,G),i(a,L,o),i(a,v,o),t(v,S),t(S,j),i(a,z,o),i(a,_,o),t(_,F),i(a,H,o),i(a,y,o),t(y,E),i(a,M,o),i(a,f,o),t(f,J),t(f,A),t(A,N),t(f,V),i(a,R,o),i(a,w,o),w.innerHTML=xa,i(a,U,o),i(a,d,o),t(d,X),t(d,C),t(C,Y),t(d,Z),i(a,B,o),i(a,g,o),g.innerHTML=qa,i(a,K,o),i(a,b,o),t(b,c),t(c,$),t(c,O),t(O,aa),t(c,sa),t(c,x),t(x,ta),t(c,ea),t(c,q),t(q,na),t(c,oa),t(c,D),t(D,pa),t(c,la),t(c,P),t(P,ra),t(c,ca),t(c,T),t(T,ia),t(c,ua)},p:ka,i:ka,o:ka,d(a){a&&s(k),a&&s(L),a&&s(v),a&&s(z),a&&s(_),a&&s(H),a&&s(y),a&&s(M),a&&s(f),a&&s(R),a&&s(w),a&&s(U),a&&s(d),a&&s(B),a&&s(g),a&&s(K),a&&s(b)}}}class Ra extends Ta{constructor(k){super(),Ia(this,k,null,Ha,La,{})}}export{Ra as default};