import{S as yt,i as ht,s as gt,e as c,t as N,k as H,M as _t,c as u,a as A,g as D,d as n,n as L,b as t,D as P,H as o,f as M,N as ut,O as pt,E as O,h as mt}from"../chunks/vendor-5f4d3b4e.js";const rt="1.2.0";var U="/jsdoc-generator/_app/assets/jsdoc-gen-15a9837a.jpg";const ot=Symbol("root");function x(p,a="obj",e={[ot]:{}},s=!0){if(p===null)return null;const d=Object.entries(p);for(const[r,m]of d){const f=s?ot:a;if(m===null)e[f][r]="?";else if(Array.isArray(m)){const g=m.reduce((y,_)=>{let S=typeof _;return Array.isArray(_)?x(_,r,e,!1):typeof _=="object"&&(e[r]={},x(_,r,e,!1),S=r),y.add(S)},new Set),T=Array.from(g),h=(T.length>1?`(${T.join("|")})`:T)+"[]";e[f][r]=h}else typeof m=="object"?(e[r]={},x(m,r,e,!1),e[f][r]=r):e[f][r]=typeof m}return e}function Tt(p,a=null){const e=x(p),s=[],d=a||"root";s.push(`/**
* @typedef {object} ${d}`),s.push(Object.entries(e[ot]).map(([r,m])=>`* @property {${m}} ${r}`).join(`
`)),s.push(`*/
`);for(const[r,m]of Object.entries(e))s.push(`/**
* @typedef {object} ${r}`),s.push(Object.entries(m).map(([f,g])=>`* @property {${g}} ${f}`).join(`
`)),s.push(`*/
`);return s.join(`
`)}function St(p){if(p.length<1)return null;try{const a=JSON.parse(p);return Tt(a)}catch(a){return console.error(a),-1}}function vt(p){let a,e,s,d,r,m,f,g,T;return{c(){a=c("div"),e=c("button"),s=N(p[1]),d=H(),r=c("pre"),m=c("code"),f=N(p[2]),this.h()},l(h){a=u(h,"DIV",{id:!0,class:!0});var y=A(a);e=u(y,"BUTTON",{style:!0});var _=A(e);s=D(_,p[1]),_.forEach(n),d=L(y),r=u(y,"PRE",{style:!0});var S=A(r);m=u(S,"CODE",{});var J=A(m);f=D(J,p[2]),J.forEach(n),S.forEach(n),y.forEach(n),this.h()},h(){P(e,"position","absolute"),P(e,"right","0"),P(e,"top","0"),P(r,"margin","0"),t(a,"id","display"),t(a,"class","svelte-18flcng")},m(h,y){M(h,a,y),o(a,e),o(e,s),o(a,d),o(a,r),o(r,m),o(m,f),g||(T=pt(e,"click",p[5]),g=!0)},p(h,y){y&2&&mt(s,h[1]),y&4&&mt(f,h[2])},d(h){h&&n(a),g=!1,T()}}}function bt(p){return{c:O,l:O,m:O,p:O,d:O}}function Et(p){let a,e;return{c(){a=c("p"),e=N("Invalid JSON input")},l(s){a=u(s,"P",{});var d=A(a);e=D(d,"Invalid JSON input"),d.forEach(n)},m(s,d){M(s,a,d),o(a,e)},p:O,d(s){s&&n(a)}}}function At(p){let a,e,s,d,r,m,f,g,T,h,y,_,S,J,R,I,q,C,k,z,V,j,F,X,B,w,Q,K,v,G,Y,Z,b,tt,et,at;document.title=a=p[3];function st(i,l){return i[2]===-1?Et:i[2]===null?bt:vt}let W=st(p),E=W(p);return{c(){e=c("link"),s=c("meta"),d=c("meta"),r=c("meta"),m=c("meta"),f=c("meta"),g=c("meta"),T=c("meta"),h=c("meta"),y=c("meta"),_=c("meta"),S=c("meta"),J=c("meta"),R=c("meta"),I=c("meta"),q=c("meta"),C=c("meta"),k=c("script"),z=N(`{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "JSDoc Type Generator",
			"url": "https://rafistrauss.github.io/jsdoc-generator/",
			"description": "Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily",
			"applicationCategory": "UtilitiesApplication",
			"genre": "software",
			"about": {
				"@type": "Thing",
				"description": "jsdoc"
			},
			"browserRequirements": "Requires JavaScript. Requires HTML5.",
			"softwareVersion": "1.0.0",
			"operatingSystem": "All"
		}`),V=H(),j=c("h1"),F=N("JSDoc Type Generator v"),X=N(rt),B=H(),w=c("h2"),Q=N("This tool will generate JSDoc types for valid JSON inserted into the textarea."),K=H(),v=c("section"),G=c("label"),Y=N("Enter/Paste JSON here:"),Z=H(),b=c("textarea"),tt=H(),E.c(),this.h()},l(i){const l=_t('[data-svelte="svelte-1r8fmtb"]',document.head);e=u(l,"LINK",{rel:!0,href:!0}),s=u(l,"META",{name:!0,content:!0}),d=u(l,"META",{name:!0,content:!0}),r=u(l,"META",{property:!0,content:!0}),m=u(l,"META",{property:!0,content:!0}),f=u(l,"META",{property:!0,content:!0}),g=u(l,"META",{property:!0,content:!0}),T=u(l,"META",{property:!0,content:!0}),h=u(l,"META",{property:!0,content:!0}),y=u(l,"META",{property:!0,content:!0}),_=u(l,"META",{property:!0,content:!0}),S=u(l,"META",{name:!0,content:!0}),J=u(l,"META",{name:!0,content:!0}),R=u(l,"META",{name:!0,content:!0}),I=u(l,"META",{name:!0,content:!0}),q=u(l,"META",{name:!0,content:!0}),C=u(l,"META",{name:!0,content:!0}),k=u(l,"SCRIPT",{type:!0});var lt=A(k);z=D(lt,`{
			"@context": "http://schema.org",
			"@type": "WebApplication",
			"name": "JSDoc Type Generator",
			"url": "https://rafistrauss.github.io/jsdoc-generator/",
			"description": "Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily",
			"applicationCategory": "UtilitiesApplication",
			"genre": "software",
			"about": {
				"@type": "Thing",
				"description": "jsdoc"
			},
			"browserRequirements": "Requires JavaScript. Requires HTML5.",
			"softwareVersion": "1.0.0",
			"operatingSystem": "All"
		}`),lt.forEach(n),l.forEach(n),V=L(i),j=u(i,"H1",{class:!0});var nt=A(j);F=D(nt,"JSDoc Type Generator v"),X=D(nt,rt),nt.forEach(n),B=L(i),w=u(i,"H2",{style:!0});var it=A(w);Q=D(it,"This tool will generate JSDoc types for valid JSON inserted into the textarea."),it.forEach(n),K=L(i),v=u(i,"SECTION",{class:!0});var $=A(v);G=u($,"LABEL",{for:!0});var ct=A(G);Y=D(ct,"Enter/Paste JSON here:"),ct.forEach(n),Z=L($),b=u($,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),A(b).forEach(n),tt=L($),E.l($),$.forEach(n),this.h()},h(){t(e,"rel","canonical"),t(e,"href",dt),t(s,"name","description"),t(s,"content",ft),t(d,"name","author"),t(d,"content","Rafi Strauss"),t(r,"property","og:url"),t(r,"content",dt),t(m,"property","og:title"),t(m,"content",p[3]),t(f,"property","og:image"),t(f,"content",U),t(g,"property","og:image:secure_url"),t(g,"content",U),t(T,"property","og:image:type"),t(T,"content","image/jpg"),t(h,"property","og:image:width"),t(h,"content","1200"),t(y,"property","og:image:height"),t(y,"content","627"),t(_,"property","og:type"),t(_,"content","website"),t(S,"name","twitter:image:src"),t(S,"content",U),t(J,"name","twitter:image"),t(J,"content",U),t(R,"name","twitter:title"),t(R,"content",p[3]),t(I,"name","twitter:description"),t(I,"content",ft),t(q,"name","twitter:card"),t(q,"content","summary_large_image"),t(C,"name","thumbnail"),t(C,"content",U),t(k,"type","application/ld+json"),t(j,"class","welcome svelte-18flcng"),P(w,"font-size","larger"),P(w,"text-align","center"),t(G,"for","jsonInput"),t(b,"name","jsonInput"),t(b,"id","jsonInput"),t(b,"cols","50"),t(b,"rows","10"),t(b,"class","svelte-18flcng"),t(v,"class","svelte-18flcng")},m(i,l){o(document.head,e),o(document.head,s),o(document.head,d),o(document.head,r),o(document.head,m),o(document.head,f),o(document.head,g),o(document.head,T),o(document.head,h),o(document.head,y),o(document.head,_),o(document.head,S),o(document.head,J),o(document.head,R),o(document.head,I),o(document.head,q),o(document.head,C),o(document.head,k),o(k,z),M(i,V,l),M(i,j,l),o(j,F),o(j,X),M(i,B,l),M(i,w,l),o(w,Q),M(i,K,l),M(i,v,l),o(v,G),o(G,Y),o(v,Z),o(v,b),ut(b,p[0]),o(v,tt),E.m(v,null),et||(at=pt(b,"input",p[4]),et=!0)},p(i,[l]){l&8&&a!==(a=i[3])&&(document.title=a),l&1&&ut(b,i[0]),W===(W=st(i))&&E?E.p(i,l):(E.d(1),E=W(i),E&&(E.c(),E.m(v,null)))},i:O,o:O,d(i){n(e),n(s),n(d),n(r),n(m),n(f),n(g),n(T),n(h),n(y),n(_),n(S),n(J),n(R),n(I),n(q),n(C),n(k),i&&n(V),i&&n(j),i&&n(B),i&&n(w),i&&n(K),i&&n(v),E.d(),et=!1,at()}}}const wt=!0,dt="https://rafistrauss.github.io/jsdoc-generator/",ft="Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily";function Jt(p,a,e){let s;const d=`JSDoc Type Generator v${rt}`;let r=`{
    "sampleString": "some string",
    "sampleNumber": 1,
    "sampleBoolean": false,
    "sampleObject": {
        "key": "value"
    },
    "sampleArray": ["asdf"]
}`,m="Copy";function f(){r=this.value,e(0,r)}const g=async()=>{await navigator.clipboard.writeText(s),e(1,m="Copied"),setTimeout(()=>{e(1,m="Copy")},1500)};return p.$$.update=()=>{p.$$.dirty&1&&e(2,s=St(r))},[r,m,s,d,f,g]}class Nt extends yt{constructor(a){super();ht(this,a,Jt,At,gt,{})}}export{Nt as default,wt as prerender};
