import{S as t,i as a,s,e,a as r,t as l,c,b as i,d as o,f as n,g as u,h,j as d,k as f,l as k,n as v,m as g,o as m,p,q as x,r as E,u as y,v as $,w as T,x as D,y as w}from"./client.de1234ef.js";import{l as b,P as I,C as V,i as S}from"./prismic-config.1f9b09cd.js";function z(t,a,s){const e=t.slice();return e[2]=a[s],e}function P(t){let a,s,v,g,m,p,x,E,y,$,T,D,w,V,S,z,P,R,q,C,N,j=I.RichText.asText(t[2].data.title)+"",A=I.RichText.asText(t[2].data.intro)+"",B=L(t[2].data.date)+"";return{c(){a=e("li"),s=e("div"),v=e("div"),g=e("img"),p=r(),x=e("canvas"),E=r(),y=e("div"),$=e("a"),T=e("h3"),D=l(j),V=r(),S=e("p"),z=l(A),P=r(),R=e("div"),q=e("p"),C=l(B),N=r(),this.h()},l(t){a=c(t,"LI",{class:!0});var e=i(a);s=c(e,"DIV",{class:!0,"uk-grid":!0});var r=i(s);v=c(r,"DIV",{class:!0});var l=i(v);g=c(l,"IMG",{src:!0,alt:!0,"uk-cover":!0}),p=o(l),x=c(l,"CANVAS",{width:!0,height:!0}),i(x).forEach(n),l.forEach(n),E=o(r),y=c(r,"DIV",{class:!0});var h=i(y);$=c(h,"A",{class:!0,href:!0});var d=i($);T=c(d,"H3",{class:!0});var f=i(T);D=u(f,j),f.forEach(n),d.forEach(n),V=o(h),S=c(h,"P",{class:!0});var k=i(S);z=u(k,A),k.forEach(n),P=o(h),R=c(h,"DIV",{class:!0});var m=i(R);q=c(m,"P",{class:!0});var w=i(q);C=u(w,B),w.forEach(n),m.forEach(n),h.forEach(n),r.forEach(n),N=o(e),e.forEach(n),this.h()},h(){g.src!==(m=t[2].data.image.url)&&h(g,"src",m),h(g,"alt",""),h(g,"uk-cover",""),h(x,"width","100"),h(x,"height","100"),h(v,"class","uk-flex-last@s uk-card-media-right uk-width-1-3@s uk-cover-container"),h(T,"class","uk-card-title svelte-1kvzk0l"),h($,"class","uk-link"),h($,"href",w=b(t[2])),h(S,"class","svelte-1kvzk0l"),h(q,"class","date svelte-1kvzk0l"),h(R,"class","uk-card-footer svelte-1kvzk0l"),h(y,"class","uk-card-body uk-width-2-3@s svelte-1kvzk0l"),h(s,"class","uk-card uk-card-default uk-grid-collapse uk-margin svelte-1kvzk0l"),h(s,"uk-grid",""),h(a,"class","svelte-1kvzk0l")},m(t,e){d(t,a,e),f(a,s),f(s,v),f(v,g),f(v,p),f(v,x),f(s,E),f(s,y),f(y,$),f($,T),f(T,D),f(y,V),f(y,S),f(S,z),f(y,P),f(y,R),f(R,q),f(q,C),f(a,N)},p(t,a){1&a&&g.src!==(m=t[2].data.image.url)&&h(g,"src",m),1&a&&j!==(j=I.RichText.asText(t[2].data.title)+"")&&k(D,j),1&a&&w!==(w=b(t[2]))&&h($,"href",w),1&a&&A!==(A=I.RichText.asText(t[2].data.intro)+"")&&k(z,A),1&a&&B!==(B=L(t[2].data.date)+"")&&k(C,B)},d(t){t&&n(a)}}}function R(t){let a,s,r,l=t[0],o=[];for(let a=0;a<l.length;a+=1)o[a]=P(z(t,l,a));return{c(){a=e("section"),s=e("div"),r=e("ul");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){a=c(t,"SECTION",{class:!0});var e=i(a);s=c(e,"DIV",{class:!0,"uk-scrollspy":!0});var l=i(s);r=c(l,"UL",{class:!0});var u=i(r);for(let t=0;t<o.length;t+=1)o[t].l(u);u.forEach(n),l.forEach(n),e.forEach(n),this.h()},h(){h(r,"class","uk-list post-list uk-flex uk-flex-column svelte-1kvzk0l"),h(s,"class","uk-container uk-container-small"),h(s,"uk-scrollspy","cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"),h(a,"class","uk-section uk-padding-remove-vertical")},m(t,e){d(t,a,e),f(a,s),f(s,r);for(let t=0;t<o.length;t+=1)o[t].m(r,null)},p(t,[a]){if(3&a){let s;for(l=t[0],s=0;s<l.length;s+=1){const e=z(t,l,s);o[s]?o[s].p(e,a):(o[s]=P(e),o[s].c(),o[s].m(r,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=l.length}},i:v,o:v,d(t){t&&n(a),g(o,t)}}}function L(t){return new Date(t).toLocaleDateString()}function q(t,a,s){let{posts:e}=a;return m(()=>{const t=document.getElementsByClassName("uk-link"),a=document.getElementsByClassName("uk-main");for(let s=0;s<t.length;s++)t[s].onclick=function(){a.item(0).classList.toggle("active")}}),t.$set=t=>{"posts"in t&&s(0,e=t.posts)},[e,L]}class C extends t{constructor(t){super(),a(this,t,q,R,s,{posts:0,formatDate:1})}get formatDate(){return L}}function N(t){let a,s,g,m,x,E,y,$,T,D,w,b,V,S,z,P,R,L=I.RichText.asText(t[0].data.quote)+"",q=I.RichText.asText(t[0].data.author)+"";return{c(){a=e("div"),s=e("div"),g=e("h1"),m=l(L),x=r(),E=e("p"),y=l(q),$=r(),T=e("section"),D=e("div"),w=e("div"),b=e("div"),V=e("h1"),S=l("Presenting"),z=r(),P=e("p"),R=l("Stories about life in rural France as told by Lynne Turner"),this.h()},l(t){a=c(t,"DIV",{class:!0,style:!0});var e=i(a);s=c(e,"DIV",{class:!0,"data-uk-scrollspy":!0});var r=i(s);g=c(r,"H1",{class:!0});var l=i(g);m=u(l,L),l.forEach(n),x=o(r),E=c(r,"P",{class:!0});var h=i(E);y=u(h,q),h.forEach(n),r.forEach(n),e.forEach(n),$=o(t),T=c(t,"SECTION",{class:!0});var d=i(T);D=c(d,"DIV",{class:!0});var f=i(D);w=c(f,"DIV",{class:!0,"uk-grid":!0});var k=i(w);b=c(k,"DIV",{class:!0});var v=i(b);V=c(v,"H1",{class:!0});var p=i(V);S=u(p,"Presenting"),p.forEach(n),z=o(v),P=c(v,"P",{class:!0});var I=i(P);R=u(I,"Stories about life in rural France as told by Lynne Turner"),I.forEach(n),v.forEach(n),k.forEach(n),f.forEach(n),d.forEach(n),this.h()},h(){h(g,"class","quote uk-heading-primary animate uk-invisible svelte-1gluh78"),h(E,"class","author svelte-1gluh78"),h(s,"class","intro uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical svelte-1gluh78"),h(s,"data-uk-scrollspy","target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300"),h(a,"class","uk-height-viewport uk-background-cover uk-light uk-flex"),p(a,"background-image","url('"+t[0].data.image.url+"')"),h(V,"class","svelte-1gluh78"),h(P,"class","svelte-1gluh78"),h(b,"class","heading svelte-1gluh78"),h(w,"class","uk-child-width-expand uk-grid-small uk-text-center "),h(w,"uk-grid",""),h(D,"class","uk-container uk-container-small"),h(T,"class","uk-section svelte-1gluh78")},m(t,e){d(t,a,e),f(a,s),f(s,g),f(g,m),f(s,x),f(s,E),f(E,y),d(t,$,e),d(t,T,e),f(T,D),f(D,w),f(w,b),f(b,V),f(V,S),f(b,z),f(b,P),f(P,R)},p(t,[s]){1&s&&L!==(L=I.RichText.asText(t[0].data.quote)+"")&&k(m,L),1&s&&q!==(q=I.RichText.asText(t[0].data.author)+"")&&k(y,q),1&s&&p(a,"background-image","url('"+t[0].data.image.url+"')")},i:v,o:v,d(t){t&&n(a),t&&n($),t&&n(T)}}}function j(t,a,s){let{intro:e}=a;return t.$set=t=>{"intro"in t&&s(0,e=t.intro)},[e]}class A extends t{constructor(t){super(),a(this,t,j,N,s,{intro:0})}}function B(t){let a,s,e,l,c;return s=new A({props:{intro:t[0]}}),l=new C({props:{posts:t[1]}}),{c(){a=r(),x(s.$$.fragment),e=r(),x(l.$$.fragment),this.h()},l(t){E('[data-svelte="svelte-m28ngv"]',document.head).forEach(n),a=o(t),y(s.$$.fragment,t),e=o(t),y(l.$$.fragment,t),this.h()},h(){document.title="Storywriter Blog"},m(t,r){d(t,a,r),$(s,t,r),d(t,e,r),$(l,t,r),c=!0},p(t,[a]){const e={};1&a&&(e.intro=t[0]),s.$set(e);const r={};2&a&&(r.posts=t[1]),l.$set(r)},i(t){c||(T(s.$$.fragment,t),T(l.$$.fragment,t),c=!0)},o(t){D(s.$$.fragment,t),D(l.$$.fragment,t),c=!1},d(t){t&&n(a),w(s,t),t&&n(e),w(l,t)}}}let H,F;async function O({params:t,query:a}){H=await V.getSingle("home");const s=await V.query(S.Predicates.at("document.type","post"),{orderings:"[my.post.publication_date desc]"});if(F=s.results,H&&F)return{intro:H,posts:F};this.error(res.status,data.message)}function G(t){return new Date(t).toLocaleDateString()}function M(t,a,s){let{intro:e}=a,{posts:r}=a;return t.$set=t=>{"intro"in t&&s(0,e=t.intro),"posts"in t&&s(1,r=t.posts)},[e,r]}export default class extends t{constructor(t){super(),a(this,t,M,B,s,{intro:0,posts:1})}}export{G as formatDate,O as preload};
