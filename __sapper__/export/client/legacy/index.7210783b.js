import{_ as t,a,b as r,c as e,i as n,s,d as c,e as i,S as o,f as u,g as l,t as f,h,j as v,k as d,l as k,m as g,n as p,o as m,p as y,q as x,r as E,u as D,v as R,w as $,x as T,y as b,z as w,A as I,B as S,C as P,D as V,E as z,F as C,G as L}from"./client.2aa28b3d.js";import{l as q,P as N,C as A,i as B}from"./prismic-config.22885cca.js";function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}function F(t,a,r){var e=t.slice();return e[2]=a[r],e}function H(t){var a,r,e,n,s,c,i,o,E,D,R,$,T,b,w,I,S,P,V,z,C,L=N.RichText.asText(t[2].data.title)+"",A=N.RichText.asText(t[2].data.intro)+"",B=O(t[2].data.date)+"";return{c:function(){a=u("li"),r=u("div"),e=u("div"),n=u("img"),c=l(),i=u("canvas"),o=l(),E=u("div"),D=u("a"),R=u("h3"),$=f(L),b=l(),w=u("p"),I=f(A),S=l(),P=u("div"),V=u("p"),z=f(B),C=l(),this.h()},l:function(t){a=h(t,"LI",{class:!0});var s=v(a);r=h(s,"DIV",{class:!0,"uk-grid":!0});var u=v(r);e=h(u,"DIV",{class:!0});var l=v(e);n=h(l,"IMG",{src:!0,alt:!0,"uk-cover":!0}),c=d(l),i=h(l,"CANVAS",{width:!0,height:!0}),v(i).forEach(k),l.forEach(k),o=d(u),E=h(u,"DIV",{class:!0});var f=v(E);D=h(f,"A",{class:!0,href:!0});var p=v(D);R=h(p,"H3",{class:!0});var m=v(R);$=g(m,L),m.forEach(k),p.forEach(k),b=d(f),w=h(f,"P",{class:!0});var y=v(w);I=g(y,A),y.forEach(k),S=d(f),P=h(f,"DIV",{class:!0});var x=v(P);V=h(x,"P",{class:!0});var T=v(V);z=g(T,B),T.forEach(k),x.forEach(k),f.forEach(k),u.forEach(k),C=d(s),s.forEach(k),this.h()},h:function(){n.src!==(s=t[2].data.image.url)&&p(n,"src",s),p(n,"alt",""),p(n,"uk-cover",""),p(i,"width","100"),p(i,"height","100"),p(e,"class","uk-flex-last@s uk-card-media-right uk-width-1-3@s uk-cover-container"),p(R,"class","uk-card-title svelte-1kvzk0l"),p(D,"class","uk-link"),p(D,"href",T=q(t[2])),p(w,"class","svelte-1kvzk0l"),p(V,"class","date svelte-1kvzk0l"),p(P,"class","uk-card-footer svelte-1kvzk0l"),p(E,"class","uk-card-body uk-width-2-3@s svelte-1kvzk0l"),p(r,"class","uk-card uk-card-default uk-grid-collapse uk-margin svelte-1kvzk0l"),p(r,"uk-grid",""),p(a,"class","svelte-1kvzk0l")},m:function(t,s){m(t,a,s),y(a,r),y(r,e),y(e,n),y(e,c),y(e,i),y(r,o),y(r,E),y(E,D),y(D,R),y(R,$),y(E,b),y(E,w),y(w,I),y(E,S),y(E,P),y(P,V),y(V,z),y(a,C)},p:function(t,a){1&a&&n.src!==(s=t[2].data.image.url)&&p(n,"src",s),1&a&&L!==(L=N.RichText.asText(t[2].data.title)+"")&&x($,L),1&a&&T!==(T=q(t[2]))&&p(D,"href",T),1&a&&A!==(A=N.RichText.asText(t[2].data.intro)+"")&&x(I,A),1&a&&B!==(B=O(t[2].data.date)+"")&&x(z,B)},d:function(t){t&&k(a)}}}function G(t){for(var a,r,e,n=t[0],s=[],c=0;c<n.length;c+=1)s[c]=H(F(t,n,c));return{c:function(){a=u("section"),r=u("div"),e=u("ul");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){a=h(t,"SECTION",{class:!0});var n=v(a);r=h(n,"DIV",{class:!0,"uk-scrollspy":!0});var c=v(r);e=h(c,"UL",{class:!0});for(var i=v(e),o=0;o<s.length;o+=1)s[o].l(i);i.forEach(k),c.forEach(k),n.forEach(k),this.h()},h:function(){p(e,"class","uk-list post-list uk-flex uk-flex-column svelte-1kvzk0l"),p(r,"class","uk-container uk-container-small"),p(r,"uk-scrollspy","cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"),p(a,"class","uk-section uk-padding-remove-vertical")},m:function(t,n){m(t,a,n),y(a,r),y(r,e);for(var c=0;c<s.length;c+=1)s[c].m(e,null)},p:function(t,a){var r=E(a,1)[0];if(3&r){var c;for(n=t[0],c=0;c<n.length;c+=1){var i=F(t,n,c);s[c]?s[c].p(i,r):(s[c]=H(i),s[c].c(),s[c].m(e,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=n.length}},i:D,o:D,d:function(t){t&&k(a),R(s,t)}}}function O(t){return new Date(t).toLocaleDateString()}function _(t,a,r){var e=a.posts;return $((function(){for(var t=document.getElementsByClassName("uk-link"),a=document.getElementsByClassName("uk-main"),r=0;r<t.length;r++)t[r].onclick=function(){a.item(0).classList.toggle("active")}})),t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e,O]}var M=function(a){t(u,o);var r=j(u);function u(t){var a;return e(this,u),a=r.call(this),n(c(a),t,_,G,s,{posts:0,formatDate:1}),a}return i(u,[{key:"formatDate",get:function(){return O}}]),u}();function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}function J(t){var a,r,e,n,s,c,i,o,R,$,b,w,I,S,P,V,z,C=N.RichText.asText(t[0].data.quote)+"",L=N.RichText.asText(t[0].data.author)+"";return{c:function(){a=u("div"),r=u("div"),e=u("h1"),n=f(C),s=l(),c=u("p"),i=f(L),o=l(),R=u("section"),$=u("div"),b=u("div"),w=u("div"),I=u("h1"),S=f("Presenting"),P=l(),V=u("p"),z=f("Stories about life in rural France as told by Lynne Turner"),this.h()},l:function(t){a=h(t,"DIV",{class:!0,style:!0});var u=v(a);r=h(u,"DIV",{class:!0,"data-uk-scrollspy":!0});var l=v(r);e=h(l,"H1",{class:!0});var f=v(e);n=g(f,C),f.forEach(k),s=d(l),c=h(l,"P",{class:!0});var p=v(c);i=g(p,L),p.forEach(k),l.forEach(k),u.forEach(k),o=d(t),R=h(t,"SECTION",{class:!0});var m=v(R);$=h(m,"DIV",{class:!0});var y=v($);b=h(y,"DIV",{class:!0,"uk-grid":!0});var x=v(b);w=h(x,"DIV",{class:!0});var E=v(w);I=h(E,"H1",{class:!0});var D=v(I);S=g(D,"Presenting"),D.forEach(k),P=d(E),V=h(E,"P",{class:!0});var T=v(V);z=g(T,"Stories about life in rural France as told by Lynne Turner"),T.forEach(k),E.forEach(k),x.forEach(k),y.forEach(k),m.forEach(k),this.h()},h:function(){p(e,"class","quote uk-heading-primary animate uk-invisible svelte-1gluh78"),p(c,"class","author svelte-1gluh78"),p(r,"class","intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical svelte-1gluh78"),p(r,"data-uk-scrollspy","target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300"),p(a,"class","uk-height-viewport uk-background-cover uk-light uk-flex"),T(a,"background-image","url('"+t[0].data.image.url+"')"),p(I,"class","svelte-1gluh78"),p(V,"class","svelte-1gluh78"),p(w,"class","heading svelte-1gluh78"),p(b,"class","uk-child-width-expand uk-grid-small uk-text-center "),p(b,"uk-grid",""),p($,"class","uk-container uk-container-small"),p(R,"class","uk-section svelte-1gluh78")},m:function(t,u){m(t,a,u),y(a,r),y(r,e),y(e,n),y(r,s),y(r,c),y(c,i),m(t,o,u),m(t,R,u),y(R,$),y($,b),y(b,w),y(w,I),y(I,S),y(w,P),y(w,V),y(V,z)},p:function(t,r){var e=E(r,1)[0];1&e&&C!==(C=N.RichText.asText(t[0].data.quote)+"")&&x(n,C),1&e&&L!==(L=N.RichText.asText(t[0].data.author)+"")&&x(i,L),1&e&&T(a,"background-image","url('"+t[0].data.image.url+"')")},i:D,o:D,d:function(t){t&&k(a),t&&k(o),t&&k(R)}}}function K(t,a,r){var e=a.intro;return t.$set=function(t){"intro"in t&&r(0,e=t.intro)},[e]}var Q,W,X=function(a){t(i,o);var r=U(i);function i(t){var a;return e(this,i),a=r.call(this),n(c(a),t,K,J,s,{intro:0}),a}return i}();function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(e){var c=a(this).constructor;n=Reflect.construct(s,arguments,c)}else n=s.apply(this,arguments);return r(this,n)}}function Z(t){var a,r,e,n,s;return r=new X({props:{intro:t[0]}}),n=new M({props:{posts:t[1]}}),{c:function(){a=l(),I(r.$$.fragment),e=l(),I(n.$$.fragment),this.h()},l:function(t){S('[data-svelte="svelte-m28ngv"]',document.head).forEach(k),a=d(t),P(r.$$.fragment,t),e=d(t),P(n.$$.fragment,t),this.h()},h:function(){document.title="Storywriter Blog"},m:function(t,c){m(t,a,c),V(r,t,c),m(t,e,c),V(n,t,c),s=!0},p:function(t,a){var e=E(a,1)[0],s={};1&e&&(s.intro=t[0]),r.$set(s);var c={};2&e&&(c.posts=t[1]),n.$set(c)},i:function(t){s||(z(r.$$.fragment,t),z(n.$$.fragment,t),s=!0)},o:function(t){C(r.$$.fragment,t),C(n.$$.fragment,t),s=!1},d:function(t){t&&k(a),L(r,t),t&&k(e),L(n,t)}}}function tt(t){return at.apply(this,arguments)}function at(){return(at=b(w.mark((function t(a){var r;return w.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.params,a.query,t.next=3,A.getSingle("home");case 3:return Q=t.sent,t.next=6,A.query(B.Predicates.at("document.type","post"),{orderings:"[my.post.publication_date desc]"});case 6:if(r=t.sent,W=r.results,!Q||!W){t.next=12;break}return t.abrupt("return",{intro:Q,posts:W});case 12:this.error(res.status,data.message);case 13:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function rt(t){return new Date(t).toLocaleDateString()}function et(t,a,r){var e=a.intro,n=a.posts;return t.$set=function(t){"intro"in t&&r(0,e=t.intro),"posts"in t&&r(1,n=t.posts)},[e,n]}var nt=function(a){t(i,o);var r=Y(i);function i(t){var a;return e(this,i),a=r.call(this),n(c(a),t,et,Z,s,{intro:0,posts:1}),a}return i}();export default nt;export{rt as formatDate,tt as preload};