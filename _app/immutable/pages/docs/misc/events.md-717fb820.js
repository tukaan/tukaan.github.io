import{S as Nn,i as Un,s as zn,e as l,t as s,k as u,c as p,a as c,h as a,d as n,m as r,b as w,g as i,R as t,n as vn}from"../../../chunks/index-cd4ba230.js";function Jn(Fn){let b,Ee,$,d,ge,q,De,Te,xe,Oe,ee,D,Ce,ne,m,Pe,W,Ae,Ke,te,h,qe,Y,He,je,G,Be,Re,se,y,Fe,I,Me,Se,L,We,Ye,ae,T,Mn=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A key was pressed!"</span><span class="token punctuation">)</span>

widget<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token string">"&lt;KeyDown>"</span><span class="token punctuation">,</span> my_func<span class="token punctuation">)</span></code>`,oe,f,Ge,V,Ie,Le,N,Ve,Ne,ie,x,Ue,le,k,ze,U,Je,Qe,z,Xe,Ze,pe,v,$e,J,en,nn,Q,tn,sn,ce,_,an,X,on,ln,ue,O,Sn=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Key pressed: "</span> <span class="token operator">+</span> event<span class="token punctuation">.</span>char<span class="token punctuation">)</span>

widget<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token string">"&lt;KeyDown:Any>"</span><span class="token punctuation">,</span> my_func<span class="token punctuation">,</span> send_event<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></code>`,re,C,pn,de,E,cn,un,rn,he,P,Wn=`<code class="language-python"><span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"A key was pressed!"</span><span class="token punctuation">)</span>

widget<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token string">"&lt;KeyDown:Any>"</span><span class="token punctuation">,</span> my_func<span class="token punctuation">)</span>
widget<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token string">"&lt;KeyDown:Any>"</span><span class="token punctuation">,</span> my_func<span class="token punctuation">,</span> overwrite<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span></code>`,ye,g,dn,Z,hn,yn,fe,A,fn,ke,H,kn,ve,K,Yn=`<code class="language-python"><span class="token keyword">class</span> <span class="token class-name">ArbitaryPythonObject</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token keyword">def</span> <span class="token function">my_func</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>

widget<span class="token punctuation">.</span>bind<span class="token punctuation">(</span><span class="token string">"&lt;&lt;VirtualEvent>>"</span><span class="token punctuation">,</span> my_func<span class="token punctuation">,</span> send_event<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

widget<span class="token punctuation">.</span>generate_event<span class="token punctuation">(</span><span class="token string">"&lt;&lt;VirtualEvent>>"</span><span class="token punctuation">,</span> data<span class="token operator">=</span>ArbitaryPythonObject<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>`;return{c(){b=l("h1"),Ee=s("Events and bindings"),$=u(),d=l("p"),ge=s("As you have "),q=l("a"),De=s("learned before"),Te=s(", all GUI applications work based on events. Each keypress and mouseclick is an event to which the application responds."),xe=l("br"),Oe=s("For example, when a key is pressed, its character get inserted into the textbox, and when a mouseclick happens, the button gets a different state, and its callback is executed. Tukaan handles these basic and necessary events on its own, but you can use bindings to listen for and handle any event you like. This gives you a endless possibilities for communicating with the user or within the program."),ee=u(),D=l("h2"),Ce=s("Binding a function to an event"),ne=u(),m=l("p"),Pe=s("You can use the "),W=l("code"),Ae=s(".bind"),Ke=s(" method on any Tukaan widget to bind it to an event. A binding consists of an event sequence and the target function."),te=u(),h=l("p"),qe=s("The event sequence describes what event the widget should listen to. Every event is surrounded by "),Y=l("code"),He=s("<"),je=s(" and "),G=l("code"),Be=s(">"),Re=s(" signs, and after a semicolon you can give details about the event."),se=u(),y=l("p"),Fe=s("For example if you want to a keypress, you can use the "),I=l("code"),Me=s("<KeyDown>"),Se=s(" event. It\u2019s actually just a shorthand for "),L=l("code"),We=s("<KeyDown:Any>"),Ye=s(", so it binds to any keypress."),ae=u(),T=l("pre"),oe=u(),f=l("p"),Ge=s("Or if you want do listen to the sequence "),V=l("kbd"),Ie=s("Control+Shift+a"),Le=s(", you would use the "),N=l("code"),Ve=s("<KeyDown:(Ctrl-Shift-a)>"),Ne=s(" sequence. You can add any number of modifier keys to a sequence, separating them with hypens."),ie=u(),x=l("h3"),Ue=s("Getting event info"),le=u(),k=l("p"),ze=s("When you simply listen for the "),U=l("code"),Je=s("<KeyDown:(a)>"),Qe=s(" event, you know exactly which keys will trigger the callback, however when you use the "),z=l("code"),Xe=s("<KeyDown:Any>"),Ze=s(" sequence, how do you know which character triggered the event? Well, it\u2019s actually quite simple."),pe=u(),v=l("p"),$e=s("You can set the "),J=l("code"),en=s("send_event"),nn=s(" parameter on bind to "),Q=l("code"),tn=s("True"),sn=s(", so when an eventhappens, it will send a event object to the callback function."),ce=u(),_=l("p"),an=s("This event object has various properties depending on the event type. For a keyboard event you can access its character with the "),X=l("code"),on=s("char"),ln=s(" attribute."),ue=u(),O=l("pre"),re=u(),C=l("h3"),pn=s("Overwriting bindings"),de=u(),E=l("p"),cn=s("By default a binding won\u2019t overwrite any previous binding to that event. This means that you can run multiple functions on the same event. The associated callbacks will run in binding order."),un=l("br"),rn=s("However sometimes you want to overwrite any previous binding to that event, so only one function will run."),he=u(),P=l("pre"),ye=u(),g=l("p"),dn=s("Now "),Z=l("code"),hn=s("my_func"),yn=s(" will run only once at every keypress."),fe=u(),A=l("h2"),fn=s("Virtual events"),ke=u(),H=l("p"),kn=s("When building complex applications, virtual events come really handy to communicate within the program. Most Tukaan widgets also generate virtual events when something happens with them."),ve=u(),K=l("pre"),this.h()},l(e){b=p(e,"H1",{id:!0});var o=c(b);Ee=a(o,"Events and bindings"),o.forEach(n),$=r(e),d=p(e,"P",{});var j=c(d);ge=a(j,"As you have "),q=p(j,"A",{href:!0});var wn=c(q);De=a(wn,"learned before"),wn.forEach(n),Te=a(j,", all GUI applications work based on events. Each keypress and mouseclick is an event to which the application responds."),xe=p(j,"BR",{}),Oe=a(j,"For example, when a key is pressed, its character get inserted into the textbox, and when a mouseclick happens, the button gets a different state, and its callback is executed. Tukaan handles these basic and necessary events on its own, but you can use bindings to listen for and handle any event you like. This gives you a endless possibilities for communicating with the user or within the program."),j.forEach(n),ee=r(e),D=p(e,"H2",{id:!0});var bn=c(D);Ce=a(bn,"Binding a function to an event"),bn.forEach(n),ne=r(e),m=p(e,"P",{});var we=c(m);Pe=a(we,"You can use the "),W=p(we,"CODE",{});var mn=c(W);Ae=a(mn,".bind"),mn.forEach(n),Ke=a(we," method on any Tukaan widget to bind it to an event. A binding consists of an event sequence and the target function."),we.forEach(n),te=r(e),h=p(e,"P",{});var B=c(h);qe=a(B,"The event sequence describes what event the widget should listen to. Every event is surrounded by "),Y=p(B,"CODE",{});var _n=c(Y);He=a(_n,"<"),_n.forEach(n),je=a(B," and "),G=p(B,"CODE",{});var En=c(G);Be=a(En,">"),En.forEach(n),Re=a(B," signs, and after a semicolon you can give details about the event."),B.forEach(n),se=r(e),y=p(e,"P",{});var R=c(y);Fe=a(R,"For example if you want to a keypress, you can use the "),I=p(R,"CODE",{});var gn=c(I);Me=a(gn,"<KeyDown>"),gn.forEach(n),Se=a(R," event. It\u2019s actually just a shorthand for "),L=p(R,"CODE",{});var Dn=c(L);We=a(Dn,"<KeyDown:Any>"),Dn.forEach(n),Ye=a(R,", so it binds to any keypress."),R.forEach(n),ae=r(e),T=p(e,"PRE",{class:!0});var Gn=c(T);Gn.forEach(n),oe=r(e),f=p(e,"P",{});var F=c(f);Ge=a(F,"Or if you want do listen to the sequence "),V=p(F,"KBD",{});var Tn=c(V);Ie=a(Tn,"Control+Shift+a"),Tn.forEach(n),Le=a(F,", you would use the "),N=p(F,"CODE",{});var xn=c(N);Ve=a(xn,"<KeyDown:(Ctrl-Shift-a)>"),xn.forEach(n),Ne=a(F," sequence. You can add any number of modifier keys to a sequence, separating them with hypens."),F.forEach(n),ie=r(e),x=p(e,"H3",{id:!0});var On=c(x);Ue=a(On,"Getting event info"),On.forEach(n),le=r(e),k=p(e,"P",{});var M=c(k);ze=a(M,"When you simply listen for the "),U=p(M,"CODE",{});var Cn=c(U);Je=a(Cn,"<KeyDown:(a)>"),Cn.forEach(n),Qe=a(M," event, you know exactly which keys will trigger the callback, however when you use the "),z=p(M,"CODE",{});var Pn=c(z);Xe=a(Pn,"<KeyDown:Any>"),Pn.forEach(n),Ze=a(M," sequence, how do you know which character triggered the event? Well, it\u2019s actually quite simple."),M.forEach(n),pe=r(e),v=p(e,"P",{});var S=c(v);$e=a(S,"You can set the "),J=p(S,"CODE",{});var An=c(J);en=a(An,"send_event"),An.forEach(n),nn=a(S," parameter on bind to "),Q=p(S,"CODE",{});var Kn=c(Q);tn=a(Kn,"True"),Kn.forEach(n),sn=a(S,", so when an eventhappens, it will send a event object to the callback function."),S.forEach(n),ce=r(e),_=p(e,"P",{});var be=c(_);an=a(be,"This event object has various properties depending on the event type. For a keyboard event you can access its character with the "),X=p(be,"CODE",{});var qn=c(X);on=a(qn,"char"),qn.forEach(n),ln=a(be," attribute."),be.forEach(n),ue=r(e),O=p(e,"PRE",{class:!0});var In=c(O);In.forEach(n),re=r(e),C=p(e,"H3",{id:!0});var Hn=c(C);pn=a(Hn,"Overwriting bindings"),Hn.forEach(n),de=r(e),E=p(e,"P",{});var me=c(E);cn=a(me,"By default a binding won\u2019t overwrite any previous binding to that event. This means that you can run multiple functions on the same event. The associated callbacks will run in binding order."),un=p(me,"BR",{}),rn=a(me,"However sometimes you want to overwrite any previous binding to that event, so only one function will run."),me.forEach(n),he=r(e),P=p(e,"PRE",{class:!0});var Ln=c(P);Ln.forEach(n),ye=r(e),g=p(e,"P",{});var _e=c(g);dn=a(_e,"Now "),Z=p(_e,"CODE",{});var jn=c(Z);hn=a(jn,"my_func"),jn.forEach(n),yn=a(_e," will run only once at every keypress."),_e.forEach(n),fe=r(e),A=p(e,"H2",{id:!0});var Bn=c(A);fn=a(Bn,"Virtual events"),Bn.forEach(n),ke=r(e),H=p(e,"P",{});var Rn=c(H);kn=a(Rn,"When building complex applications, virtual events come really handy to communicate within the program. Most Tukaan widgets also generate virtual events when something happens with them."),Rn.forEach(n),ve=r(e),K=p(e,"PRE",{class:!0});var Vn=c(K);Vn.forEach(n),this.h()},h(){w(b,"id","events-and-bindings"),w(q,"href","/docs/basics/hello"),w(D,"id","binding-a-function-to-an-event"),w(T,"class","language-python"),w(x,"id","getting-event-info"),w(O,"class","language-python"),w(C,"id","overwriting-bindings"),w(P,"class","language-python"),w(A,"id","virtual-events"),w(K,"class","language-python")},m(e,o){i(e,b,o),t(b,Ee),i(e,$,o),i(e,d,o),t(d,ge),t(d,q),t(q,De),t(d,Te),t(d,xe),t(d,Oe),i(e,ee,o),i(e,D,o),t(D,Ce),i(e,ne,o),i(e,m,o),t(m,Pe),t(m,W),t(W,Ae),t(m,Ke),i(e,te,o),i(e,h,o),t(h,qe),t(h,Y),t(Y,He),t(h,je),t(h,G),t(G,Be),t(h,Re),i(e,se,o),i(e,y,o),t(y,Fe),t(y,I),t(I,Me),t(y,Se),t(y,L),t(L,We),t(y,Ye),i(e,ae,o),i(e,T,o),T.innerHTML=Mn,i(e,oe,o),i(e,f,o),t(f,Ge),t(f,V),t(V,Ie),t(f,Le),t(f,N),t(N,Ve),t(f,Ne),i(e,ie,o),i(e,x,o),t(x,Ue),i(e,le,o),i(e,k,o),t(k,ze),t(k,U),t(U,Je),t(k,Qe),t(k,z),t(z,Xe),t(k,Ze),i(e,pe,o),i(e,v,o),t(v,$e),t(v,J),t(J,en),t(v,nn),t(v,Q),t(Q,tn),t(v,sn),i(e,ce,o),i(e,_,o),t(_,an),t(_,X),t(X,on),t(_,ln),i(e,ue,o),i(e,O,o),O.innerHTML=Sn,i(e,re,o),i(e,C,o),t(C,pn),i(e,de,o),i(e,E,o),t(E,cn),t(E,un),t(E,rn),i(e,he,o),i(e,P,o),P.innerHTML=Wn,i(e,ye,o),i(e,g,o),t(g,dn),t(g,Z),t(Z,hn),t(g,yn),i(e,fe,o),i(e,A,o),t(A,fn),i(e,ke,o),i(e,H,o),t(H,kn),i(e,ve,o),i(e,K,o),K.innerHTML=Yn},p:vn,i:vn,o:vn,d(e){e&&n(b),e&&n($),e&&n(d),e&&n(ee),e&&n(D),e&&n(ne),e&&n(m),e&&n(te),e&&n(h),e&&n(se),e&&n(y),e&&n(ae),e&&n(T),e&&n(oe),e&&n(f),e&&n(ie),e&&n(x),e&&n(le),e&&n(k),e&&n(pe),e&&n(v),e&&n(ce),e&&n(_),e&&n(ue),e&&n(O),e&&n(re),e&&n(C),e&&n(de),e&&n(E),e&&n(he),e&&n(P),e&&n(ye),e&&n(g),e&&n(fe),e&&n(A),e&&n(ke),e&&n(H),e&&n(ve),e&&n(K)}}}class Xn extends Nn{constructor(b){super(),Un(this,b,null,Jn,zn,{})}}export{Xn as default};
