var M=Object.defineProperty;var R=(e,t,n)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>(R(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function g(){}function j(e){return e()}function N(){return Object.create(null)}function b(e){e.forEach(j)}function A(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function F(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function C(){return x(" ")}function K(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function U(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.data!==t&&(e.data=t)}let S;function m(e){S=e}const h=[],I=[];let p=[];const P=[],z=Promise.resolve();let E=!1;function D(){E||(E=!0,z.then(G))}function O(e){p.push(e)}const v=new Set;let d=0;function G(){if(d!==0)return;const e=S;do{try{for(;d<h.length;){const t=h[d];d++,m(t),H(t.$$)}}catch(t){throw h.length=0,d=0,t}for(m(null),h.length=0,d=0;I.length;)I.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];v.has(n)||(v.add(n),n())}p.length=0}while(h.length);for(;P.length;)P.pop()();E=!1,v.clear(),m(e)}function H(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function J(e){const t=[],n=[];p.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),p=t}const Q=new Set;function W(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function X(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),O(()=>{const c=e.$$.on_mount.map(j).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...c):b(c),e.$$.on_mount=[]}),r.forEach(O)}function Y(e,t){const n=e.$$;n.fragment!==null&&(J(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(h.push(e),D(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,o,r,c,u=null,$=[-1]){const f=S;m(e);const i=e.$$={fragment:null,ctx:[],props:c,update:g,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:N(),dirty:$,skip_bound:!1,root:t.target||f.$$.root};u&&u(i.root);let _=!1;if(i.ctx=n?n(e,t.props||{},(s,a,...k)=>{const L=k.length?k[0]:a;return i.ctx&&r(i.ctx[s],i.ctx[s]=L)&&(!i.skip_bound&&i.bound[s]&&i.bound[s](L),_&&Z(e,s)),a}):[],i.update(),_=!0,b(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const s=U(t.target);i.fragment&&i.fragment.l(s),s.forEach(B)}else i.fragment&&i.fragment.c();t.intro&&W(e.$$.fragment),X(e,t.target,t.anchor),G()}m(f)}class te{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){Y(this,1),this.$destroy=g}$on(t,n){if(!A(n))return g;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);function re(e){let t,n,o,r,c,u,$,f,i,_;return{c(){t=y("div"),n=y("h1"),n.textContent="Testing Game Loop",o=C(),r=y("p"),c=x("Score: "),u=x(e[0]),$=C(),f=y("button"),f.textContent="Reset Score"},m(s,a){F(s,t,a),l(t,n),l(t,o),l(t,r),l(r,c),l(r,u),l(t,$),l(t,f),i||(_=K(f,"click",e[1]),i=!0)},p(s,[a]){a&1&&V(u,s[0])},i:g,o:g,d(s){s&&B(t),i=!1,_()}}}function oe(e,t,n){let o=0;function r(){n(0,o+=1)}const c=setInterval(r,1e3);return window.onunload=()=>{clearInterval(c)},[o,()=>{n(0,o=0)}]}class ce extends te{constructor(t){super(),ee(this,t,oe,re,T,{})}}new ce({target:document.getElementById("app")});
