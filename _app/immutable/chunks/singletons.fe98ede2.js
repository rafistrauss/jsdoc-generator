import{C as d,s as m}from"./index.19ea207c.js";import{a as k}from"./paths.d996dec5.js";const c=[];function p(e,t=d){let n;const s=new Set;function a(o){if(m(e,o)&&(e=o,n)){const u=!c.length;for(const i of s)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function l(o){a(o(e))}function r(o,u=d){const i=[o,u];return s.add(i),s.size===1&&(n=t(a)||d),o(e),()=>{s.delete(i),s.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:r}}const E="1689914388255",w="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function T(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function x(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function h(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function O(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=h(e)}}function U(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!s||A(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:s,download:l}}function L(e){let t=null,n=null,s=null,a=null,l=null,r=null,o=e;for(;o&&o!==document.documentElement;)s===null&&(s=f(o,"preload-code")),a===null&&(a=f(o,"preload-data")),t===null&&(t=f(o,"keepfocus")),n===null&&(n=f(o,"noscroll")),l===null&&(l=f(o,"reload")),r===null&&(r=f(o,"replacestate")),o=h(o);return{preload_code:_[s??"off"],preload_data:_[a??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:l==="off"?!1:l===""?!0:null,replace_state:r==="off"?!1:r===""?!0:null}}function g(e){const t=p(e);let n=!0;function s(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function l(r){let o;return t.subscribe(u=>{(o===void 0||n&&u!==o)&&r(o=u)})}return{notify:s,set:a,subscribe:l}}function v(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);try{const a=await fetch(`${k}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==E;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:s}}function A(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function N(e){e.client}const P={url:g({}),page:g({}),navigating:p(null),updated:v()};export{I,b as P,y as S,w as a,U as b,L as c,x as d,N as e,O as f,T as g,A as i,P as s};
