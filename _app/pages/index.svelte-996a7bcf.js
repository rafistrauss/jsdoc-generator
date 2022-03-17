import{S as yt,i as ht,s as gt,e as c,t as J,k as $,N as _t,c as u,a as M,h as j,d as n,m as L,b as t,f as U,I as r,g as R,O as ut,P as ft,F as q,j as pt}from"../chunks/vendor-453749c7.js";const rt="1.4.4";var H="/jsdoc-generator/_app/assets/jsdoc-gen-15a9837a.jpg";const ot=Symbol("root");function W(p,a="obj",e={[ot]:{}},s=!0){if(p===null)return null;const f=Object.entries(p);for(const[o,m]of f){const d=s?ot:a;if(m===null)e[d][o]="?";else if(Array.isArray(m)){const y=m.reduce((v,h)=>{let b=typeof h;return Array.isArray(h)?W(h,o,e,!1):typeof h=="object"&&(e[o]={},W(h,o,e,!1),b=o),v.add(b)},new Set),_=Array.from(y),S=(_.length>1?`(${_.join("|")})`:_)+"[]";e[d][o]=S}else typeof m=="object"?(e[o]={},W(m,o,e,!1),e[d][o]=o):e[d][o]=typeof m}return e}function Tt(p,a=null){const e=W(p),s=[],f=a||"root";s.push(`/**
* @typedef {object} ${f}`),s.push(Object.entries(e[ot]).map(([o,m])=>`* @property {${m}} ${o}`).join(`
`)),s.push(`*/
`);for(const[o,m]of Object.entries(e))s.push(`/**
* @typedef {object} ${o}`),s.push(Object.entries(m).map(([d,y])=>`* @property {${y}} ${d}`).join(`
`)),s.push(`*/
`);return s.join(`
`)}function St(p){if(p.length<1)return null;try{const a=JSON.parse(p);return Tt(a)}catch(a){return console.error(a),-1}}function vt(p){let a,e,s,f,o,m,d,y,_,S,v,h,b;return{c(){a=c("div"),e=c("button"),s=J(p[1]),f=$(),o=c("pre"),m=J(`
				`),d=c("code"),y=J(`
					`),_=J(p[2]),S=J(`
				`),v=J(`
			`),this.h()},l(T){a=u(T,"DIV",{id:!0,class:!0});var g=M(a);e=u(g,"BUTTON",{style:!0});var O=M(e);s=j(O,p[1]),O.forEach(n),f=L(g),o=u(g,"PRE",{style:!0});var w=M(o);m=j(w,`
				`),d=u(w,"CODE",{});var N=M(d);y=j(N,`
					`),_=j(N,p[2]),S=j(N,`
				`),N.forEach(n),v=j(w,`
			`),w.forEach(n),g.forEach(n),this.h()},h(){U(e,"position","absolute"),U(e,"right","0"),U(e,"top","0"),U(o,"margin","0"),t(a,"id","display"),t(a,"class","svelte-18flcng")},m(T,g){R(T,a,g),r(a,e),r(e,s),r(a,f),r(a,o),r(o,m),r(o,d),r(d,y),r(d,_),r(d,S),r(o,v),h||(b=ft(e,"click",p[5]),h=!0)},p(T,g){g&2&&pt(s,T[1]),g&4&&pt(_,T[2])},d(T){T&&n(a),h=!1,b()}}}function bt(p){return{c:q,l:q,m:q,p:q,d:q}}function Et(p){let a,e;return{c(){a=c("p"),e=J("Invalid JSON input")},l(s){a=u(s,"P",{});var f=M(a);e=j(f,"Invalid JSON input"),f.forEach(n)},m(s,f){R(s,a,f),r(a,e)},p:q,d(s){s&&n(a)}}}function At(p){let a,e,s,f,o,m,d,y,_,S,v,h,b,T,g,O,w,N,C,x,V,k,z,X,B,I,Q,F,E,G,Y,Z,A,tt,et,at;document.title=a=p[3];function st(i,l){return i[2]===-1?Et:i[2]===null?bt:vt}let K=st(p),D=K(p);return{c(){e=c("link"),s=c("meta"),f=c("meta"),o=c("meta"),m=c("meta"),d=c("meta"),y=c("meta"),_=c("meta"),S=c("meta"),v=c("meta"),h=c("meta"),b=c("meta"),T=c("meta"),g=c("meta"),O=c("meta"),w=c("meta"),N=c("meta"),C=c("script"),x=J(`{
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
		}`),V=$(),k=c("h1"),z=J("JSDoc Type Generator v"),X=J(rt),B=$(),I=c("h2"),Q=J("This tool will generate JSDoc types for valid JSON inserted into the textarea."),F=$(),E=c("section"),G=c("label"),Y=J("Enter/Paste JSON here:"),Z=$(),A=c("textarea"),tt=$(),D.c(),this.h()},l(i){const l=_t('[data-svelte="svelte-1r8fmtb"]',document.head);e=u(l,"LINK",{rel:!0,href:!0}),s=u(l,"META",{name:!0,content:!0}),f=u(l,"META",{name:!0,content:!0}),o=u(l,"META",{property:!0,content:!0}),m=u(l,"META",{property:!0,content:!0}),d=u(l,"META",{property:!0,content:!0}),y=u(l,"META",{property:!0,content:!0}),_=u(l,"META",{property:!0,content:!0}),S=u(l,"META",{property:!0,content:!0}),v=u(l,"META",{property:!0,content:!0}),h=u(l,"META",{property:!0,content:!0}),b=u(l,"META",{name:!0,content:!0}),T=u(l,"META",{name:!0,content:!0}),g=u(l,"META",{name:!0,content:!0}),O=u(l,"META",{name:!0,content:!0}),w=u(l,"META",{name:!0,content:!0}),N=u(l,"META",{name:!0,content:!0}),C=u(l,"SCRIPT",{type:!0});var lt=M(C);x=j(lt,`{
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
		}`),lt.forEach(n),l.forEach(n),V=L(i),k=u(i,"H1",{class:!0});var nt=M(k);z=j(nt,"JSDoc Type Generator v"),X=j(nt,rt),nt.forEach(n),B=L(i),I=u(i,"H2",{style:!0});var it=M(I);Q=j(it,"This tool will generate JSDoc types for valid JSON inserted into the textarea."),it.forEach(n),F=L(i),E=u(i,"SECTION",{class:!0});var P=M(E);G=u(P,"LABEL",{for:!0});var ct=M(G);Y=j(ct,"Enter/Paste JSON here:"),ct.forEach(n),Z=L(P),A=u(P,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),M(A).forEach(n),tt=L(P),D.l(P),P.forEach(n),this.h()},h(){t(e,"rel","canonical"),t(e,"href",mt),t(s,"name","description"),t(s,"content",dt),t(f,"name","author"),t(f,"content","Rafi Strauss"),t(o,"property","og:url"),t(o,"content",mt),t(m,"property","og:title"),t(m,"content",p[3]),t(d,"property","og:image"),t(d,"content",H),t(y,"property","og:image:secure_url"),t(y,"content",H),t(_,"property","og:image:type"),t(_,"content","image/jpg"),t(S,"property","og:image:width"),t(S,"content","1200"),t(v,"property","og:image:height"),t(v,"content","627"),t(h,"property","og:type"),t(h,"content","website"),t(b,"name","twitter:image:src"),t(b,"content",H),t(T,"name","twitter:image"),t(T,"content",H),t(g,"name","twitter:title"),t(g,"content",p[3]),t(O,"name","twitter:description"),t(O,"content",dt),t(w,"name","twitter:card"),t(w,"content","summary_large_image"),t(N,"name","thumbnail"),t(N,"content",H),t(C,"type","application/ld+json"),t(k,"class","welcome svelte-18flcng"),U(I,"font-size","larger"),U(I,"text-align","center"),t(G,"for","jsonInput"),t(A,"name","jsonInput"),t(A,"id","jsonInput"),t(A,"cols","50"),t(A,"rows","10"),t(A,"class","svelte-18flcng"),t(E,"class","svelte-18flcng")},m(i,l){r(document.head,e),r(document.head,s),r(document.head,f),r(document.head,o),r(document.head,m),r(document.head,d),r(document.head,y),r(document.head,_),r(document.head,S),r(document.head,v),r(document.head,h),r(document.head,b),r(document.head,T),r(document.head,g),r(document.head,O),r(document.head,w),r(document.head,N),r(document.head,C),r(C,x),R(i,V,l),R(i,k,l),r(k,z),r(k,X),R(i,B,l),R(i,I,l),r(I,Q),R(i,F,l),R(i,E,l),r(E,G),r(G,Y),r(E,Z),r(E,A),ut(A,p[0]),r(E,tt),D.m(E,null),et||(at=ft(A,"input",p[4]),et=!0)},p(i,[l]){l&8&&a!==(a=i[3])&&(document.title=a),l&1&&ut(A,i[0]),K===(K=st(i))&&D?D.p(i,l):(D.d(1),D=K(i),D&&(D.c(),D.m(E,null)))},i:q,o:q,d(i){n(e),n(s),n(f),n(o),n(m),n(d),n(y),n(_),n(S),n(v),n(h),n(b),n(T),n(g),n(O),n(w),n(N),n(C),i&&n(V),i&&n(k),i&&n(B),i&&n(I),i&&n(F),i&&n(E),D.d(),et=!1,at()}}}const wt=!0,mt="https://rafistrauss.github.io/jsdoc-generator/",dt="Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily";function Jt(p,a,e){let s;const f=`JSDoc Type Generator v${rt}`;let o=`{
    "sampleString": "some string",
    "sampleNumber": 1,
    "sampleBoolean": false,
    "sampleObject": {
        "key": "value"
    },
    "sampleArray": ["asdf"]
}`,m="Copy";function d(){o=this.value,e(0,o)}const y=async()=>{await navigator.clipboard.writeText(s),e(1,m="Copied"),setTimeout(()=>{e(1,m="Copy")},1500)};return p.$$.update=()=>{p.$$.dirty&1&&e(2,s=St(o))},[o,m,s,f,d,y]}class Nt extends yt{constructor(a){super();ht(this,a,Jt,At,gt,{})}}export{Nt as default,wt as prerender};
