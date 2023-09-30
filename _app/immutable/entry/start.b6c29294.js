import{o as we,t as _e}from"../chunks/scheduler.372cdc90.js";import{S as Ge,a as Ke,I as M,g as Ce,f as Me,b as ye,c as le,s as ee,i as ve,d as F,P as Ve,e as Xe}from"../chunks/singletons.5502dff4.js";import{b as K}from"../chunks/paths.0dee9b71.js";import{R as qe,H as te}from"../chunks/control.f5b05b5f.js";function Ze(n,o){return n==="/"||o==="ignore"?n:o==="never"?n.endsWith("/")?n.slice(0,-1):n:o==="always"&&!n.endsWith("/")?n+"/":n}function Qe(n){return n.split("%25").map(decodeURI).join("%25")}function et(n){for(const o in n)n[o]=decodeURIComponent(n[o]);return n}const tt=["href","pathname","search","searchParams","toString","toJSON"];function nt(n,o){const d=new URL(n);for(const s of tt)Object.defineProperty(d,s,{get(){return o(),n[s]},enumerable:!0,configurable:!0});return at(d),d}function at(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const rt="/__data.json";function ot(n){return n.replace(/\/$/,"")+rt}function it(...n){let o=5381;for(const d of n)if(typeof d=="string"){let s=d.length;for(;s;)o=o*33^d.charCodeAt(--s)}else if(ArrayBuffer.isView(d)){const s=new Uint8Array(d.buffer,d.byteOffset,d.byteLength);let u=s.length;for(;u;)o=o*33^s[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(n,o)=>((n instanceof Request?n.method:(o==null?void 0:o.method)||"GET")!=="GET"&&ne.delete(ke(n)),fe(n,o));const ne=new Map;function st(n,o){const d=ke(n,o),s=document.querySelector(d);if(s!=null&&s.textContent){const{body:u,...f}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&ne.set(d,{body:u,init:f,ttl:1e3*Number(E)}),Promise.resolve(new Response(u,f))}return fe(n,o)}function ct(n,o,d){if(ne.size>0){const s=ke(n,d),u=ne.get(s);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(d==null?void 0:d.cache))return new Response(u.body,u.init);ne.delete(s)}}return fe(o,d)}function ke(n,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),s+=`[data-hash="${it(...u)}"]`}return s}const lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ft(n){const o=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${dt(n).map(s=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(f)return o.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((h,g)=>{if(g%2){if(h.startsWith("x+"))return be(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return be(String.fromCharCode(...h.slice(2).split("-").map(U=>parseInt(U,16))));const p=lt.exec(h);if(!p)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,j,k,N]=p;return o.push({name:k,matcher:N,optional:!!x,rest:!!j,chained:j?g===1&&E[0]==="":!1}),j?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return be(h)}).join("")}).join("")}/?$`),params:o}}function ut(n){return!/^\([^)]+\)$/.test(n)}function dt(n){return n.slice(1).split("/").filter(ut)}function pt(n,o,d){const s={},u=n.slice(1),f=u.filter(l=>l!==void 0);let E=0;for(let l=0;l<o.length;l+=1){const h=o[l];let g=u[l-E];if(h.chained&&h.rest&&E&&(g=u.slice(l-E,l+1).filter(p=>p).join("/"),E=0),g===void 0){h.rest&&(s[h.name]="");continue}if(!h.matcher||d[h.matcher](g)){s[h.name]=g;const p=o[l+1],x=u[l+1];p&&!p.rest&&p.optional&&x&&h.chained&&(E=0),!p&&!x&&Object.keys(s).length===f.length&&(E=0);continue}if(h.optional&&h.chained){E++;continue}return}if(!E)return s}function be(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ht({nodes:n,server_loads:o,dictionary:d,matchers:s}){const u=new Set(o);return Object.entries(d).map(([l,[h,g,p]])=>{const{pattern:x,params:j}=ft(l),k={id:l,exec:N=>{const U=x.exec(N);if(U)return pt(U,j,s)},errors:[1,...p||[]].map(N=>n[N]),layouts:[0,...g||[]].map(E),leaf:f(h)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function f(l){const h=l<0;return h&&(l=~l),[h,n[l]]}function E(l){return l===void 0?l:[u.has(l),n[l]]}}function ze(n){try{return JSON.parse(sessionStorage[n])}catch{}}function Fe(n,o){const d=JSON.stringify(o);try{sessionStorage[n]=d}catch{}}const gt=-1,mt=-2,wt=-3,_t=-4,yt=-5,vt=-6;function bt(n,o){if(typeof n=="number")return u(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const d=n,s=Array(d.length);function u(f,E=!1){if(f===gt)return;if(f===wt)return NaN;if(f===_t)return 1/0;if(f===yt)return-1/0;if(f===vt)return-0;if(E)throw new Error("Invalid input");if(f in s)return s[f];const l=d[f];if(!l||typeof l!="object")s[f]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const h=l[0],g=o==null?void 0:o[h];if(g)return s[f]=g(u(l[1]));switch(h){case"Date":s[f]=new Date(l[1]);break;case"Set":const p=new Set;s[f]=p;for(let k=1;k<l.length;k+=1)p.add(u(l[k]));break;case"Map":const x=new Map;s[f]=x;for(let k=1;k<l.length;k+=2)x.set(u(l[k]),u(l[k+1]));break;case"RegExp":s[f]=new RegExp(l[1],l[2]);break;case"Object":s[f]=Object(l[1]);break;case"BigInt":s[f]=BigInt(l[1]);break;case"null":const j=Object.create(null);s[f]=j;for(let k=1;k<l.length;k+=2)j[l[k]]=u(l[k+1]);break;default:throw new Error(`Unknown type ${h}`)}}else{const h=new Array(l.length);s[f]=h;for(let g=0;g<l.length;g+=1){const p=l[g];p!==mt&&(h[g]=u(p))}}else{const h={};s[f]=h;for(const g in l){const p=l[g];h[g]=u(p)}}return s[f]}return u(0)}function Et(n){return n.filter(o=>o!=null)}const Je=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Je];const St=new Set([...Je]);[...St];async function kt(n){var o;for(const d in n)if(typeof((o=n[d])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,u])=>[s,await u])));return n}const Rt="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",z=ze(Ge)??{},Q=ze(Ke)??{};function Ee(n){z[n]=ee()}function It(n,o){var Te;const d=ht(n),s=n.nodes[0],u=n.nodes[1];s(),u();const f=document.documentElement,E=[],l=[];let h=null;const g={before_navigate:[],on_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},x=!1,j=!1,k=!0,N=!1,U=!1,H=!1,B=!1,V,D=(Te=history.state)==null?void 0:Te[M];D||(D=Date.now(),history.replaceState({...history.state,[M]:D},"",location.href));const ue=z[D];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let q,ae,W;async function Re(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),i=X(e,!0);h=null;const t=ae={},r=i&&await he(i);if(t===ae&&r){if(r.type==="redirect")return re(new URL(r.location,e).href,{},[e.pathname],t);r.props.page!==void 0&&(q=r.props.page),V.$set(r.props)}}function Ae(e){l.some(i=>i==null?void 0:i.snapshot)&&(Q[e]=l.map(i=>{var t;return(t=i==null?void 0:i.snapshot)==null?void 0:t.capture()}))}function Ie(e){var i;(i=Q[e])==null||i.forEach((t,r)=>{var a,c;(c=(a=l[r])==null?void 0:a.snapshot)==null||c.restore(t)})}function Le(){Ee(D),Fe(Ge,z),Ae(D),Fe(Ke,Q)}async function re(e,{noScroll:i=!1,replaceState:t=!1,keepFocus:r=!1,state:a={},invalidateAll:c=!1},m,v){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:i?ee():null,keepfocus:r,redirect_chain:m,details:{state:a,replaceState:t},nav_token:v,accepted:()=>{c&&(B=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return h={id:e.id,promise:he(e).then(i=>(i.type==="loaded"&&i.state.error&&(h=null),i))},h.promise}async function oe(...e){const t=d.filter(r=>e.some(a=>r.exec(a))).map(r=>Promise.all([...r.layouts,r.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(t)}function Oe(e){var r;p=e.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=e.props.page,V=new n.root({target:o,props:{...e.props,stores:F,components:l},hydrate:!0}),Ie(D);const t={from:null,to:{params:p.params,route:{id:((r=p.route)==null?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};g.after_navigate.forEach(a=>a(t)),j=!0}async function Y({url:e,params:i,branch:t,status:r,error:a,route:c,form:m}){let v="never";for(const _ of t)(_==null?void 0:_.slash)!==void 0&&(v=_.slash);e.pathname=Ze(e.pathname,v),e.search=e.search;const b={type:"loaded",state:{url:e,params:i,branch:t,error:a,route:c},props:{constructors:Et(t).map(_=>_.node.component)}};m!==void 0&&(b.props.form=m);let y={},L=!q,A=0;for(let _=0;_<Math.max(t.length,p.branch.length);_+=1){const w=t[_],O=p.branch[_];(w==null?void 0:w.data)!==(O==null?void 0:O.data)&&(L=!0),w&&(y={...y,...w.data},L&&(b.props[`data_${A}`]=y),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==a||m!==void 0&&m!==q.form||L)&&(b.props.page={error:a,params:i,route:{id:(c==null?void 0:c.id)??null},status:r,url:new URL(e),form:m??null,data:L?y:q.data}),b}async function de({loader:e,parent:i,url:t,params:r,route:a,server_data_node:c}){var y,L,A;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if((y=b.universal)!=null&&y.load){let P=function(...w){for(const O of w){const{href:T}=new URL(O,t);v.dependencies.add(T)}};const _={route:new Proxy(a,{get:(w,O)=>(v.route=!0,w[O])}),params:new Proxy(r,{get:(w,O)=>(v.params.add(O),w[O])}),data:(c==null?void 0:c.data)??null,url:nt(t,()=>{v.url=!0}),async fetch(w,O){let T;w instanceof Request?(T=w.url,O={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...O}):T=w;const C=new URL(T,t);return P(C.href),C.origin===t.origin&&(T=C.href.slice(t.origin.length)),j?ct(T,C.href,O):st(T,O)},setHeaders:()=>{},depends:P,parent(){return v.parent=!0,i()}};m=await b.universal.load.call(null,_)??null,m=m?await kt(m):null}return{node:b,loader:e,server:c,universal:(L=b.universal)!=null&&L.load?{type:"data",data:m,uses:v}:null,data:m??(c==null?void 0:c.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(c==null?void 0:c.slash)}}function Ue(e,i,t,r,a){if(B)return!0;if(!r)return!1;if(r.parent&&e||r.route&&i||r.url&&t)return!0;for(const c of r.params)if(a[c]!==p.params[c])return!0;for(const c of r.dependencies)if(E.some(m=>m(new URL(c))))return!0;return!1}function pe(e,i){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?i??null:null}async function he({id:e,invalidating:i,url:t,params:r,route:a}){if((h==null?void 0:h.id)===e)return h.promise;const{errors:c,layouts:m,leaf:v}=a,b=[...m,v];c.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let y=null;const L=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?a.id!==p.route.id:!1;let P=!1;const _=b.map((S,I)=>{var G;const R=p.branch[I],$=!!(S!=null&&S[0])&&((R==null?void 0:R.loader)!==S[1]||Ue(P,A,L,(G=R.server)==null?void 0:G.uses,r));return $&&(P=!0),$});if(_.some(Boolean)){try{y=await He(t,_)}catch(S){return ie({status:S instanceof te?S.status:500,error:await Z(S,{url:t,params:r,route:{id:a.id}}),url:t,route:a})}if(y.type==="redirect")return y}const w=y==null?void 0:y.nodes;let O=!1;const T=b.map(async(S,I)=>{var ge;if(!S)return;const R=p.branch[I],$=w==null?void 0:w[I];if((!$||$.type==="skip")&&S[1]===(R==null?void 0:R.loader)&&!Ue(O,A,L,(ge=R.universal)==null?void 0:ge.uses,r))return R;if(O=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:S[1],url:t,params:r,route:a,parent:async()=>{var De;const $e={};for(let me=0;me<I;me+=1)Object.assign($e,(De=await T[me])==null?void 0:De.data);return $e},server_data_node:pe($===void 0&&S[0]?{type:"skip"}:$??null,S[0]?R==null?void 0:R.server:void 0)})});for(const S of T)S.catch(()=>{});const C=[];for(let S=0;S<b.length;S+=1)if(b[S])try{C.push(await T[S])}catch(I){if(I instanceof qe)return{type:"redirect",location:I.location};let R=500,$;if(w!=null&&w.includes(I))R=I.status??R,$=I.error;else if(I instanceof te)R=I.status,$=I.body;else{if(await F.updated.check())return await J(t);$=await Z(I,{params:r,url:t,route:{id:a.id}})}const G=await xe(S,C,c);return G?await Y({url:t,params:r,branch:C.slice(0,G.idx).concat(G.node),status:R,error:$,route:a}):await Ne(t,{id:a.id},$,R)}else C.push(void 0);return await Y({url:t,params:r,branch:C,status:200,error:null,route:a,form:i?void 0:null})}async function xe(e,i,t){for(;e--;)if(t[e]){let r=e;for(;!i[r];)r-=1;try{return{idx:r+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:i,url:t,route:r}){const a={};let c=null;if(n.server_loads[0]===0)try{const y=await He(t,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;c=y.nodes[0]??null}catch{(t.origin!==location.origin||t.pathname!==location.pathname||x)&&await J(t)}const v=await de({loader:s,url:t,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:pe(c)}),b={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:t,params:a,branch:[v,b],status:e,error:i,route:null})}function X(e,i){if(ve(e,K))return;const t=se(e);for(const r of d){const a=r.exec(t);if(a)return{id:e.pathname+e.search,invalidating:i,route:r,params:et(a),url:e}}}function se(e){return Qe(e.pathname.slice(K.length)||"/")}function je({url:e,type:i,intent:t,delta:r}){let a=!1;const c=Be(p,t,e,i);r!==void 0&&(c.navigation.delta=r);const m={...c.navigation,cancel:()=>{a=!0,c.reject(new Error("navigation was cancelled"))}};return U||g.before_navigate.forEach(v=>v(m)),a?null:c}async function ce({url:e,scroll:i,keepfocus:t,redirect_chain:r,details:a,type:c,delta:m,nav_token:v={},accepted:b,blocked:y}){var T,C,S;const L=X(e,!1),A=je({url:e,type:c,delta:m,intent:L});if(!A){y();return}const P=D;b(),U=!0,j&&F.navigating.set(A.navigation),ae=v;let _=L&&await he(L);if(!_){if(ve(e,K))return await J(e);_=await Ne(e,{id:null},await Z(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(L==null?void 0:L.url)||e,ae!==v)return A.reject(new Error("navigation was aborted")),!1;if(_.type==="redirect")if(r.length>10||r.includes(e.pathname))_=await ie({status:500,error:await Z(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(_.location,e).href,{},[...r,e.pathname],v),!1;else((T=_.props.page)==null?void 0:T.status)>=400&&await F.updated.check()&&await J(e);if(E.length=0,B=!1,N=!0,Ee(P),Ae(P),(C=_.props.page)!=null&&C.url&&_.props.page.url.pathname!==e.pathname&&(e.pathname=(S=_.props.page)==null?void 0:S.url.pathname),a){const I=a.replaceState?0:1;if(a.state[M]=D+=I,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let R=D+1;for(;Q[R]||z[R];)delete Q[R],delete z[R],R+=1}}if(h=null,j){p=_.state,_.props.page&&(_.props.page.url=e);const I=(await Promise.all(g.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){g.after_navigate=g.after_navigate.filter($=>!I.includes($))};I.push(R),g.after_navigate.push(...I)}V.$set(_.props)}else Oe(_);const{activeElement:w}=document;if(await _e(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));i?scrollTo(i.x,i.y):I?I.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==w&&document.activeElement!==document.body;!t&&!O&&Se(),k=!0,_.props.page&&(q=_.props.page),U=!1,c==="popstate"&&Ie(D),A.fulfil(void 0),g.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),N=!1}async function Ne(e,i,t,r){return e.origin===location.origin&&e.pathname===location.pathname&&!x?await ie({status:r,error:t,url:e,route:i}):await J(e)}function J(e){return location.href=e.href,new Promise(()=>{})}function Ye(){let e;f.addEventListener("mousemove",c=>{const m=c.target;clearTimeout(e),e=setTimeout(()=>{r(m,2)},20)});function i(c){r(c.composedPath()[0],1)}f.addEventListener("mousedown",i),f.addEventListener("touchstart",i,{passive:!0});const t=new IntersectionObserver(c=>{for(const m of c)m.isIntersecting&&(oe(se(new URL(m.target.href))),t.unobserve(m.target))},{threshold:0});function r(c,m){const v=Me(c,f);if(!v)return;const{url:b,external:y,download:L}=ye(v,K);if(y||L)return;const A=le(v);if(!A.reload)if(m<=A.preload_data){const P=X(b,!1);P&&Pe(P)}else m<=A.preload_code&&oe(se(b))}function a(){t.disconnect();for(const c of f.querySelectorAll("a")){const{url:m,external:v,download:b}=ye(c,K);if(v||b)continue;const y=le(c);y.reload||(y.preload_code===Ve.viewport&&t.observe(c),y.preload_code===Ve.eager&&oe(se(m)))}}g.after_navigate.push(a),a()}function Z(e,i){return e instanceof te?e.body:n.hooks.handleError({error:e,event:i})??{message:i.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{we(()=>(g.after_navigate.push(e),()=>{const i=g.after_navigate.indexOf(e);g.after_navigate.splice(i,1)}))},before_navigate:e=>{we(()=>(g.before_navigate.push(e),()=>{const i=g.before_navigate.indexOf(e);g.before_navigate.splice(i,1)}))},on_navigate:e=>{we(()=>(g.on_navigate.push(e),()=>{const i=g.on_navigate.indexOf(e);g.on_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(N||!j)&&(k=!1)},goto:(e,i={})=>re(e,i,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:i}=new URL(e,location.href);E.push(t=>t.href===i)}return Re()},invalidate_all:()=>(B=!0,Re()),preload_data:async e=>{const i=new URL(e,Ce(document)),t=X(i,!1);if(!t)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Pe(t)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const i=new URL(location.href),{branch:t,route:r}=p;if(!r)return;const a=await xe(p.branch.length,t,r.errors);if(a){const c=await Y({url:i,params:p.params,branch:t.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});p=c.state,V.$set(c.props),_e().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(V.$set({form:null,page:{...q,form:e.data,status:e.status}}),await _e(),V.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var i;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let r=!1;if(Le(),!U){const a=Be(p,void 0,null,"leave"),c={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation was cancelled"))}};g.before_navigate.forEach(m=>m(c))}r?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(i=navigator.connection)!=null&&i.saveData||Ye(),f.addEventListener("click",t=>{var P;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const r=Me(t.composedPath()[0],f);if(!r)return;const{url:a,external:c,target:m,download:v}=ye(r,K);if(!a)return;if(m==="_parent"||m==="_top"){if(window.parent!==window)return}else if(m&&m!=="_self")return;const b=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||v)return;if(c||b.reload){je({url:a,type:"link"})?U=!0:t.preventDefault();return}const[L,A]=a.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(p.url.hash===a.hash){t.preventDefault(),(P=r.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(H=!0,Ee(D),e(a),!b.replace_state)return;H=!1,t.preventDefault()}ce({url:a,scroll:b.noscroll?ee():null,keepfocus:b.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:b.replace_state??a.href===location.href},accepted:()=>t.preventDefault(),blocked:()=>t.preventDefault(),type:"link"})}),f.addEventListener("submit",t=>{if(t.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(t.target),a=t.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const m=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(m,K))return;const v=t.target,{keep_focus:b,noscroll:y,reload:L,replace_state:A}=le(v);if(L)return;t.preventDefault(),t.stopPropagation();const P=new FormData(v),_=a==null?void 0:a.getAttribute("name");_&&P.append(_,(a==null?void 0:a.getAttribute("value"))??""),m.search=new URLSearchParams(P).toString(),ce({url:m,scroll:y?ee():null,keepfocus:b??!1,redirect_chain:[],details:{state:{},replaceState:A??m.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async t=>{var r;if((r=t.state)!=null&&r[M]){if(t.state[M]===D)return;const a=z[t.state[M]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[D]=ee(),D=t.state[M],scrollTo(a.x,a.y);return}const c=t.state[M]-D;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{D=t.state[M]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[M]:++D},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&F.navigating.set(null)});function e(t){p.url=t,F.page.set({...q,url:t}),F.page.notify()}},_hydrate:async({status:e=200,error:i,node_ids:t,params:r,route:a,data:c,form:m})=>{x=!0;const v=new URL(location.href);({params:r={},route:a={id:null}}=X(v,!1)||{});let b;try{const y=t.map(async(P,_)=>{const w=c[_];return w!=null&&w.uses&&(w.uses=We(w.uses)),de({loader:n.nodes[P],url:v,params:r,route:a,parent:async()=>{const O={};for(let T=0;T<_;T+=1)Object.assign(O,(await y[T]).data);return O},server_data_node:pe(w)})}),L=await Promise.all(y),A=d.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let _=0;_<P.length;_++)P[_]||L.splice(_,0,void 0)}b=await Y({url:v,params:r,branch:L,status:e,error:i,form:m,route:A??null})}catch(y){if(y instanceof qe){await J(new URL(y.location,location.href));return}b=await ie({status:y instanceof te?y.status:500,error:await Z(y,{url:v,params:r,route:a}),url:v,route:a})}Oe(b)}}}async function He(n,o){const d=new URL(n);d.pathname=ot(n.pathname),n.pathname.endsWith("/")&&d.searchParams.append(At,"1"),d.searchParams.append(Rt,o.map(u=>u?"1":"0").join(""));const s=await fe(d.href);if(!s.ok)throw new te(s.status,await s.json());return new Promise(async u=>{var p;const f=new Map,E=s.body.getReader(),l=new TextDecoder;function h(x){return bt(x,{Promise:j=>new Promise((k,N)=>{f.set(j,{fulfil:k,reject:N})})})}let g="";for(;;){const{done:x,value:j}=await E.read();if(x&&!g)break;for(g+=!j&&g?`
`:l.decode(j);;){const k=g.indexOf(`
`);if(k===-1)break;const N=JSON.parse(g.slice(0,k));if(g=g.slice(k+1),N.type==="redirect")return u(N);if(N.type==="data")(p=N.nodes)==null||p.forEach(U=>{(U==null?void 0:U.type)==="data"&&(U.uses=We(U.uses),U.data=h(U.data))}),u(N);else if(N.type==="chunk"){const{id:U,data:H,error:B}=N,V=f.get(U);f.delete(U),B?V.reject(h(B)):V.fulfil(h(H))}}}})}function We(n){return{dependencies:new Set((n==null?void 0:n.dependencies)??[]),params:new Set((n==null?void 0:n.params)??[]),parent:!!(n!=null&&n.parent),route:!!(n!=null&&n.route),url:!!(n!=null&&n.url)}}function Se(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const o=document.body,d=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),d!==null?o.setAttribute("tabindex",d):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const u=[];for(let f=0;f<s.rangeCount;f+=1)u.push(s.getRangeAt(f));setTimeout(()=>{if(s.rangeCount===u.length){for(let f=0;f<s.rangeCount;f+=1){const E=u[f],l=s.getRangeAt(f);if(E.commonAncestorContainer!==l.commonAncestorContainer||E.startContainer!==l.startContainer||E.endContainer!==l.endContainer||E.startOffset!==l.startOffset||E.endOffset!==l.endOffset)return}s.removeAllRanges()}})}}}function Be(n,o,d,s){var h,g;let u,f;const E=new Promise((p,x)=>{u=p,f=x});return E.catch(()=>{}),{navigation:{from:{params:n.params,route:{id:((h=n.route)==null?void 0:h.id)??null},url:n.url},to:d&&{params:(o==null?void 0:o.params)??null,route:{id:((g=o==null?void 0:o.route)==null?void 0:g.id)??null},url:d},willUnload:!o,type:s,complete:E},fulfil:u,reject:f}}async function xt(n,o,d){const s=It(n,o);Xe({client:s}),d?await s._hydrate(d):s.goto(location.href,{replaceState:!0}),s._start_router()}export{xt as start};
