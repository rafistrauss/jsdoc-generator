import{N as ft,S as ht,i as gt,s as _t,e as c,t as J,k as L,O as Tt,c as u,a as M,h as j,d as n,m as U,b as t,f as G,I as r,g as R,P as ut,Q as yt,F as q,j as pt}from"../chunks/vendor-dd84e277.js";const rt="1.5.0";var H="/jsdoc-generator/_app/assets/jsdoc-gen-15a9837a.jpg";const ot=Symbol("root");function W(p,a="obj",e={[ot]:{}},s=!0){if(p===null)return null;const y=Object.entries(p);for(const[o,m]of y){const d=s?ot:a;if(m===null)e[d][o]="?";else if(Array.isArray(m)){const f=m.reduce((b,h)=>{let v=typeof h;return Array.isArray(h)?W(h,o,e,!1):typeof h=="object"&&(e[o]={},W(h,o,e,!1),v=o),b.add(v)},new Set),_=Array.from(f),S=(_.length>1?`(${_.join("|")})`:_)+"[]";e[d][o]=S}else typeof m=="object"?(e[o]={},W(m,o,e,!1),e[d][o]=o):e[d][o]=typeof m}return e}function St(p,a=null){const e=W(p),s=[],y=a||"root";s.push(`/**
* @typedef {object} ${y}`),s.push(Object.entries(e[ot]).map(([o,m])=>`* @property {${m}} ${o}`).join(`
`)),s.push(`*/
`);for(const[o,m]of Object.entries(e))s.push(`/**
* @typedef {object} ${o}`),s.push(Object.entries(m).map(([d,f])=>`* @property {${f}} ${d}`).join(`
`)),s.push(`*/
`);return s.join(`
`)}function bt(p){if(p.length<1)return null;try{const a=ft.parse(p);return St(a)}catch(a){return console.error(a),-1}}function vt(p){let a,e,s,y,o,m,d,f,_,S,b,h,v;return{c(){a=c("div"),e=c("button"),s=J(p[1]),y=L(),o=c("pre"),m=J(`
				`),d=c("code"),f=J(`
					`),_=J(p[2]),S=J(`
				`),b=J(`
			`),this.h()},l(T){a=u(T,"DIV",{id:!0,class:!0});var g=M(a);e=u(g,"BUTTON",{style:!0});var k=M(e);s=j(k,p[1]),k.forEach(n),y=U(g),o=u(g,"PRE",{style:!0});var w=M(o);m=j(w,`
				`),d=u(w,"CODE",{style:!0});var N=M(d);f=j(N,`
					`),_=j(N,p[2]),S=j(N,`
				`),N.forEach(n),b=j(w,`
			`),w.forEach(n),g.forEach(n),this.h()},h(){G(e,"position","absolute"),G(e,"inset-inline-end","0"),G(e,"inset-block-start","0"),G(d,"white-space","pre-line"),G(o,"margin","0"),t(a,"id","display"),t(a,"class","svelte-y6pca6")},m(T,g){R(T,a,g),r(a,e),r(e,s),r(a,y),r(a,o),r(o,m),r(o,d),r(d,f),r(d,_),r(d,S),r(o,b),h||(v=yt(e,"click",p[5]),h=!0)},p(T,g){g&2&&pt(s,T[1]),g&4&&pt(_,T[2])},d(T){T&&n(a),h=!1,v()}}}function Et(p){return{c:q,l:q,m:q,p:q,d:q}}function At(p){let a,e;return{c(){a=c("p"),e=J("Invalid JSON input")},l(s){a=u(s,"P",{});var y=M(a);e=j(y,"Invalid JSON input"),y.forEach(n)},m(s,y){R(s,a,y),r(a,e)},p:q,d(s){s&&n(a)}}}function Jt(p){let a,e,s,y,o,m,d,f,_,S,b,h,v,T,g,k,w,N,C,x,V,O,z,Q,B,I,X,F,E,P,Y,Z,A,tt,et,at;document.title=a=p[3];function st(i,l){return i[2]===-1?At:i[2]===null?Et:vt}let K=st(p),D=K(p);return{c(){e=c("link"),s=c("meta"),y=c("meta"),o=c("meta"),m=c("meta"),d=c("meta"),f=c("meta"),_=c("meta"),S=c("meta"),b=c("meta"),h=c("meta"),v=c("meta"),T=c("meta"),g=c("meta"),k=c("meta"),w=c("meta"),N=c("meta"),C=c("script"),x=J(`{
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
		}`),V=L(),O=c("h1"),z=J("JSDoc Type Generator v"),Q=J(rt),B=L(),I=c("h2"),X=J("This tool will generate JSDoc types for valid JSON inserted into the textarea."),F=L(),E=c("section"),P=c("label"),Y=J("Enter/Paste JSON here:"),Z=L(),A=c("textarea"),tt=L(),D.c(),this.h()},l(i){const l=Tt('[data-svelte="svelte-1r8fmtb"]',document.head);e=u(l,"LINK",{rel:!0,href:!0}),s=u(l,"META",{name:!0,content:!0}),y=u(l,"META",{name:!0,content:!0}),o=u(l,"META",{property:!0,content:!0}),m=u(l,"META",{property:!0,content:!0}),d=u(l,"META",{property:!0,content:!0}),f=u(l,"META",{property:!0,content:!0}),_=u(l,"META",{property:!0,content:!0}),S=u(l,"META",{property:!0,content:!0}),b=u(l,"META",{property:!0,content:!0}),h=u(l,"META",{property:!0,content:!0}),v=u(l,"META",{name:!0,content:!0}),T=u(l,"META",{name:!0,content:!0}),g=u(l,"META",{name:!0,content:!0}),k=u(l,"META",{name:!0,content:!0}),w=u(l,"META",{name:!0,content:!0}),N=u(l,"META",{name:!0,content:!0}),C=u(l,"SCRIPT",{type:!0});var lt=M(C);x=j(lt,`{
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
		}`),lt.forEach(n),l.forEach(n),V=U(i),O=u(i,"H1",{class:!0});var nt=M(O);z=j(nt,"JSDoc Type Generator v"),Q=j(nt,rt),nt.forEach(n),B=U(i),I=u(i,"H2",{style:!0});var it=M(I);X=j(it,"This tool will generate JSDoc types for valid JSON inserted into the textarea."),it.forEach(n),F=U(i),E=u(i,"SECTION",{class:!0});var $=M(E);P=u($,"LABEL",{for:!0});var ct=M(P);Y=j(ct,"Enter/Paste JSON here:"),ct.forEach(n),Z=U($),A=u($,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),M(A).forEach(n),tt=U($),D.l($),$.forEach(n),this.h()},h(){t(e,"rel","canonical"),t(e,"href",mt),t(s,"name","description"),t(s,"content",dt),t(y,"name","author"),t(y,"content","Rafi Strauss"),t(o,"property","og:url"),t(o,"content",mt),t(m,"property","og:title"),t(m,"content",p[3]),t(d,"property","og:image"),t(d,"content",H),t(f,"property","og:image:secure_url"),t(f,"content",H),t(_,"property","og:image:type"),t(_,"content","image/jpg"),t(S,"property","og:image:width"),t(S,"content","1200"),t(b,"property","og:image:height"),t(b,"content","627"),t(h,"property","og:type"),t(h,"content","website"),t(v,"name","twitter:image:src"),t(v,"content",H),t(T,"name","twitter:image"),t(T,"content",H),t(g,"name","twitter:title"),t(g,"content",p[3]),t(k,"name","twitter:description"),t(k,"content",dt),t(w,"name","twitter:card"),t(w,"content","summary_large_image"),t(N,"name","thumbnail"),t(N,"content",H),t(C,"type","application/ld+json"),t(O,"class","welcome svelte-y6pca6"),G(I,"font-size","larger"),G(I,"text-align","center"),t(P,"for","jsonInput"),t(A,"name","jsonInput"),t(A,"id","jsonInput"),t(A,"cols","50"),t(A,"rows","10"),t(A,"class","svelte-y6pca6"),t(E,"class","svelte-y6pca6")},m(i,l){r(document.head,e),r(document.head,s),r(document.head,y),r(document.head,o),r(document.head,m),r(document.head,d),r(document.head,f),r(document.head,_),r(document.head,S),r(document.head,b),r(document.head,h),r(document.head,v),r(document.head,T),r(document.head,g),r(document.head,k),r(document.head,w),r(document.head,N),r(document.head,C),r(C,x),R(i,V,l),R(i,O,l),r(O,z),r(O,Q),R(i,B,l),R(i,I,l),r(I,X),R(i,F,l),R(i,E,l),r(E,P),r(P,Y),r(E,Z),r(E,A),ut(A,p[0]),r(E,tt),D.m(E,null),et||(at=yt(A,"input",p[4]),et=!0)},p(i,[l]){l&8&&a!==(a=i[3])&&(document.title=a),l&1&&ut(A,i[0]),K===(K=st(i))&&D?D.p(i,l):(D.d(1),D=K(i),D&&(D.c(),D.m(E,null)))},i:q,o:q,d(i){n(e),n(s),n(y),n(o),n(m),n(d),n(f),n(_),n(S),n(b),n(h),n(v),n(T),n(g),n(k),n(w),n(N),n(C),i&&n(V),i&&n(O),i&&n(B),i&&n(I),i&&n(F),i&&n(E),D.d(),et=!1,at()}}}const Nt=!0,mt="https://rafistrauss.github.io/jsdoc-generator/",dt="Automatically generate JSDoc Types from arbitrary JSON objects; infers the shape of JSON to generate JSDoc Types and lets you copy them easily";function jt(p,a,e){let s;const y=`JSDoc Type Generator v${rt}`;let o=`{
    "sampleString": "some string",
    "sampleNumber": 1,
    "sampleBoolean": false,
    "sampleObject": {
        "key": "value"
    },
    "sampleArray": ["asdf"]
}`,m="Copy";function d(){o=this.value,e(0,o)}const f=async()=>{await navigator.clipboard.writeText(s),e(1,m="Copied"),setTimeout(()=>{e(1,m="Copy")},1500)};return p.$$.update=()=>{p.$$.dirty&1&&e(2,s=bt(o))},[o,m,s,y,d,f]}class Dt extends ht{constructor(a){super();gt(this,a,jt,Jt,_t,{})}}export{Dt as default,Nt as prerender};
