(function(){"use strict";var ae,S,Le,F,Oe,Fe,Re,be,oe,Z,Be,ye,ke,Ce,ie={},se=[],jt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function E(t,e){for(var n in e)t[n]=e[n];return t}function Se(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Lt(t,e,n){var r,s,a,l={};for(a in e)a=="key"?r=e[a]:a=="ref"?s=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?ae.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return le(t,l,r,s,null)}function le(t,e,n,r,s){var a={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Le,__i:-1,__u:0};return s==null&&S.vnode!=null&&S.vnode(a),a}function X(t){return t.children}function de(t,e){this.props=t,this.context=e}function Y(t,e){if(e==null)return t.__?Y(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?Y(t):null}function Ot(t){if(t.__P&&t.__d){var e=t.__v,n=e.__e,r=[],s=[],a=E({},e);a.__v=e.__v+1,S.vnode&&S.vnode(a),Te(t.__P,a,e,t.__n,t.__P.namespaceURI,32&e.__u?[n]:null,r,n??Y(e),!!(32&e.__u),s),a.__v=e.__v,a.__.__k[a.__i]=a,Qe(r,a,s),e.__e=e.__=null,a.__e!=n&&We(a)}}function We(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),We(t)}function Ke(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!pe.__r++||Oe!=S.debounceRendering)&&((Oe=S.debounceRendering)||Fe)(pe)}function pe(){try{for(var t,e=1;F.length;)F.length>e&&F.sort(Re),t=F.shift(),e=F.length,Ot(t)}finally{F.length=pe.__r=0}}function qe(t,e,n,r,s,a,l,d,h,p,g){var m,i,_,C,v,x,b,k=r&&r.__k||se,y=e.length;for(h=Ft(n,e,k,h,y),m=0;m<y;m++)(_=n.__k[m])!=null&&(i=_.__i!=-1&&k[_.__i]||ie,_.__i=m,x=Te(t,_,i,s,a,l,d,h,p,g),C=_.__e,_.ref&&i.ref!=_.ref&&(i.ref&&$e(i.ref,null,_),g.push(_.ref,_.__c||C,_)),v==null&&C!=null&&(v=C),(b=!!(4&_.__u))||i.__k===_.__k?(h=Ve(_,h,t,b),b&&i.__e&&(i.__e=null)):typeof _.type=="function"&&x!==void 0?h=x:C&&(h=C.nextSibling),_.__u&=-7);return n.__e=v,h}function Ft(t,e,n,r,s){var a,l,d,h,p,g=n.length,m=g,i=0;for(t.__k=new Array(s),a=0;a<s;a++)(l=e[a])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[a]=le(null,l,null,null,null):ce(l)?l=t.__k[a]=le(X,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[a]=le(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[a]=l,h=a+i,l.__=t,l.__b=t.__b+1,d=null,(p=l.__i=Rt(l,n,h,m))!=-1&&(m--,(d=n[p])&&(d.__u|=2)),d==null||d.__v==null?(p==-1&&(s>g?i--:s<g&&i++),typeof l.type!="function"&&(l.__u|=4)):p!=h&&(p==h-1?i--:p==h+1?i++:(p>h?i--:i++,l.__u|=4))):t.__k[a]=null;if(m)for(a=0;a<g;a++)(d=n[a])!=null&&!(2&d.__u)&&(d.__e==r&&(r=Y(d)),Xe(d,d));return r}function Ve(t,e,n,r){var s,a;if(typeof t.type=="function"){for(s=t.__k,a=0;s&&a<s.length;a++)s[a]&&(s[a].__=t,e=Ve(s[a],e,n,r));return e}t.__e!=e&&(r&&(e&&t.type&&!e.parentNode&&(e=Y(t)),n.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Rt(t,e,n,r){var s,a,l,d=t.key,h=t.type,p=e[n],g=p!=null&&(2&p.__u)==0;if(p===null&&d==null||g&&d==p.key&&h==p.type)return n;if(r>(g?1:0)){for(s=n-1,a=n+1;s>=0||a<e.length;)if((p=e[l=s>=0?s--:a++])!=null&&!(2&p.__u)&&d==p.key&&h==p.type)return l}return-1}function Ye(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||jt.test(e)?n:n+"px"}function ue(t,e,n,r,s){var a,l;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Ye(t.style,e,"");if(n)for(e in n)r&&n[e]==r[e]||Ye(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")a=e!=(e=e.replace(Be,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?r?n[Z]=r[Z]:(n[Z]=ye,t.addEventListener(e,a?Ce:ke,a)):t.removeEventListener(e,a?Ce:ke,a);else{if(s=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Je(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e[oe]==null)e[oe]=ye++;else if(e[oe]<n[Z])return;return n(S.event?S.event(e):e)}}}function Te(t,e,n,r,s,a,l,d,h,p){var g,m,i,_,C,v,x,b,k,y,N,H,D,W,L,ne,I=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(h=!!(32&n.__u),a=[d=e.__e=n.__e]),(g=S.__b)&&g(e);e:if(typeof I=="function"){m=l.length;try{if(k=e.props,y=I.prototype&&I.prototype.render,N=(g=I.contextType)&&r[g.__c],H=g?N?N.props.value:g.__:r,n.__c?b=(i=e.__c=n.__c).__=i.__E:(y?e.__c=i=new I(k,H):(e.__c=i=new de(k,H),i.constructor=I,i.render=Wt),N&&N.sub(i),i.state||(i.state={}),i.__n=r,_=i.__d=!0,i.__h=[],i._sb=[]),y&&i.__s==null&&(i.__s=i.state),y&&I.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=E({},i.__s)),E(i.__s,I.getDerivedStateFromProps(k,i.__s))),C=i.props,v=i.state,i.__v=e,_)y&&I.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),y&&i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(y&&I.getDerivedStateFromProps==null&&k!==C&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(k,H),e.__v==n.__v||!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(k,i.__s,H)===!1){e.__v!=n.__v&&(i.props=k,i.state=i.__s,i.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(O){O&&(O.__=e)}),se.push.apply(i.__h,i._sb),i._sb=[],i.__h.length&&l.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(k,i.__s,H),y&&i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(C,v,x)})}if(i.context=H,i.props=k,i.__P=t,i.__e=!1,D=S.__r,W=0,y)i.state=i.__s,i.__d=!1,D&&D(e),g=i.render(i.props,i.state,i.context),se.push.apply(i.__h,i._sb),i._sb=[];else do i.__d=!1,D&&D(e),g=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++W<25);i.state=i.__s,i.getChildContext!=null&&(r=E(E({},r),i.getChildContext())),y&&!_&&i.getSnapshotBeforeUpdate!=null&&(x=i.getSnapshotBeforeUpdate(C,v)),L=g!=null&&g.type===X&&g.key==null?Ze(g.props.children):g,d=qe(t,ce(L)?L:[L],e,n,r,s,a,l,d,h,p),i.base=e.__e,e.__u&=-161,i.__h.length&&l.push(i),b&&(i.__E=i.__=null)}catch(O){if(l.length=m,e.__v=null,h||a!=null){if(O.then){for(e.__u|=h?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;a!=null&&(a[a.indexOf(d)]=null),e.__e=d}else if(a!=null)for(ne=a.length;ne--;)Se(a[ne])}else e.__e=n.__e;e.__k==null&&(e.__k=n.__k||[]),O.then||Ge(e),S.__e(O,e,n)}}else a==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):d=e.__e=Bt(n.__e,e,n,r,s,a,l,h,p);return(g=S.diffed)&&g(e),128&e.__u?void 0:d}function Ge(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Ge))}function Qe(t,e,n){for(var r=0;r<n.length;r++)$e(n[r],n[++r],n[++r]);S.__c&&S.__c(e,t),t.some(function(s){try{t=s.__h,s.__h=[],t.some(function(a){a.call(s)})}catch(a){S.__e(a,s.__v)}})}function Ze(t){return typeof t!="object"||t==null||t.__b>0?t:ce(t)?t.map(Ze):t.constructor!==void 0?null:E({},t)}function Bt(t,e,n,r,s,a,l,d,h){var p,g,m,i,_,C,v,x=n.props||ie,b=e.props,k=e.type;if(k=="svg"?s="http://www.w3.org/2000/svg":k=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),a!=null){for(p=0;p<a.length;p++)if((_=a[p])&&"setAttribute"in _==!!k&&(k?_.localName==k:_.nodeType==3)){t=_,a[p]=null;break}}if(t==null){if(k==null)return document.createTextNode(b);t=document.createElementNS(s,k,b.is&&b),d&&(S.__m&&S.__m(e,a),d=!1),a=null}if(k==null)x===b||d&&t.data==b||(t.data=b);else{if(a=k=="textarea"&&b.defaultValue!=null?null:a&&ae.call(t.childNodes),!d&&a!=null)for(x={},p=0;p<t.attributes.length;p++)x[(_=t.attributes[p]).name]=_.value;for(p in x)_=x[p],p=="dangerouslySetInnerHTML"?m=_:p=="children"||p in b||p=="value"&&"defaultValue"in b||p=="checked"&&"defaultChecked"in b||ue(t,p,null,_,s);for(p in b)_=b[p],p=="children"?i=_:p=="dangerouslySetInnerHTML"?g=_:p=="value"?C=_:p=="checked"?v=_:d&&typeof _!="function"||x[p]===_||ue(t,p,_,x[p],s);if(g)d||m&&(g.__html==m.__html||g.__html==t.innerHTML)||(t.innerHTML=g.__html),e.__k=[];else if(m&&(t.innerHTML=""),qe(e.type=="template"?t.content:t,ce(i)?i:[i],e,n,r,k=="foreignObject"?"http://www.w3.org/1999/xhtml":s,a,l,a?a[0]:n.__k&&Y(n,0),d,h),a!=null)for(p=a.length;p--;)Se(a[p]);d&&k!="textarea"||(p="value",k=="progress"&&C==null?t.removeAttribute("value"):C!=null&&(C!==t[p]||k=="progress"&&!C||k=="option"&&C!=x[p])&&ue(t,p,C,x[p],s),p="checked",v!=null&&v!=t[p]&&ue(t,p,v,x[p],s))}return t}function $e(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(s){S.__e(s,n)}}function Xe(t,e,n){var r,s;if(S.unmount&&S.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||$e(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){S.__e(a,e)}r.base=r.__P=r.__n=null}if(r=t.__k)for(s=0;s<r.length;s++)r[s]&&Xe(r[s],e,n||typeof t.type!="function");n||Se(t.__e),t.__c=t.__=t.__e=void 0}function Wt(t,e,n){return this.constructor(t,n)}function Kt(t,e,n){var r,s,a,l;e==document&&(e=document.documentElement),S.__&&S.__(t,e),s=(r=!1)?null:e.__k,a=[],l=[],Te(e,t=e.__k=Lt(X,null,[t]),s||ie,ie,e.namespaceURI,s?null:e.firstChild?ae.call(e.childNodes):null,a,s?s.__e:e.firstChild,r,l),Qe(a,t,l),t.props.children=null}ae=se.slice,S={__e:function(t,e,n,r){for(var s,a,l;e=e.__;)if((s=e.__c)&&!s.__)try{if((a=s.constructor)&&a.getDerivedStateFromError!=null&&(s.setState(a.getDerivedStateFromError(t)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(t,r||{}),l=s.__d),l)return s.__E=s}catch(d){t=d}throw t}},Le=0,de.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},n),this.props)),t&&E(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ke(this))},de.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ke(this))},de.prototype.render=X,F=[],Fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(t,e){return t.__v.__b-e.__v.__b},pe.__r=0,be=Math.random().toString(8),oe="__d"+be,Z="__a"+be,Be=/(PointerCapture)$|Capture$/i,ye=0,ke=Je(!1),Ce=Je(!0);var qt=0;function o(t,e,n,r,s,a){e||(e={});var l,d,h=e;if("ref"in h)for(d in h={},e)d=="ref"?l=e[d]:h[d]=e[d];var p={type:t,props:h,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--qt,__i:-1,__u:0,__source:s,__self:a};if(typeof t=="function"&&(l=t.defaultProps))for(d in l)h[d]===void 0&&(h[d]=l[d]);return S.vnode&&S.vnode(p),p}var ee,U,Ue,et,he=0,tt=[],A=S,nt=A.__b,rt=A.__r,at=A.diffed,ot=A.__c,it=A.unmount,st=A.__;function Ae(t,e){A.__h&&A.__h(U,t,he||e),he=0;var n=U.__H||(U.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function $(t){return he=1,Vt(dt,t)}function Vt(t,e,n){var r=Ae(ee++,2);if(r.t=t,!r.__c&&(r.__=[dt(void 0,e),function(d){var h=r.__N?r.__N[0]:r.__[0],p=r.t(h,d);h!==p&&(r.__N=[p,r.__[1]],r.__c.setState({}))}],r.__c=U,!U.__f)){var s=function(d,h,p){if(!r.__c.__H)return!0;var g=!1,m=r.__c.props!==d;if(r.__c.__H.__.some(function(_){if(_.__N){g=!0;var C=_.__[0];_.__=_.__N,_.__N=void 0,C!==_.__[0]&&(m=!0)}}),a){var i=a.call(this,d,h,p);return g?i||m:i}return!g||m};U.__f=!0;var a=U.shouldComponentUpdate,l=U.componentWillUpdate;U.componentWillUpdate=function(d,h,p){if(this.__e){var g=a;a=void 0,s(d,h,p),a=g}l&&l.call(this,d,h,p)},U.shouldComponentUpdate=s}return r.__N||r.__}function fe(t,e){var n=Ae(ee++,3);!A.__s&&lt(n.__H,e)&&(n.__=t,n.u=e,U.__H.__h.push(n))}function B(t){return he=5,Yt(function(){return{current:t}},[])}function Yt(t,e){var n=Ae(ee++,7);return lt(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function Jt(){for(var t;t=tt.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(_e),e.__h.some(ze),e.__h=[]}catch(n){e.__h=[],A.__e(n,t.__v)}}}A.__b=function(t){U=null,nt&&nt(t)},A.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),st&&st(t,e)},A.__r=function(t){rt&&rt(t),ee=0;var e=(U=t.__c).__H;e&&(Ue===U?(e.__h=[],U.__h=[],e.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(e.__h.some(_e),e.__h.some(ze),e.__h=[],ee=0)),Ue=U},A.diffed=function(t){at&&at(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(tt.push(e)!==1&&et===A.requestAnimationFrame||((et=A.requestAnimationFrame)||Gt)(Jt)),e.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),Ue=U=null},A.__c=function(t,e){e.some(function(n){try{n.__h.some(_e),n.__h=n.__h.filter(function(r){return!r.__||ze(r)})}catch(r){e.some(function(s){s.__h&&(s.__h=[])}),e=[],A.__e(r,n.__v)}}),ot&&ot(t,e)},A.unmount=function(t){it&&it(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.some(function(r){try{_e(r)}catch(s){e=s}}),n.__H=void 0,e&&A.__e(e,n.__v))};var ct=typeof requestAnimationFrame=="function";function Gt(t){var e,n=function(){clearTimeout(r),ct&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,35);ct&&(e=requestAnimationFrame(n))}function _e(t){var e=U,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),U=e}function ze(t){var e=U;t.__c=t.__(),U=e}function lt(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function dt(t,e){return typeof e=="function"?e(t):e}const Qt=/(أي\s*(من\s*)?(التالي|هذي|هذه|منها)|هل\s*تقصد|قد\s*تقصد|تقصد(ها|ه|ين)?|اختيار|اختر|أحد\s*(ال)?مواضيع|كتابة\s*(ال)?رقم|اكتب\s*(ال)?رقم|رقم\s*(ال)?خيار|المواضيع\s*(ال)?تالية|توضيح\s*سؤالك|which (of these|one|do you mean)|did you mean|(reply|respond|answer|type|enter|write|send) (with )?(the |a )?(number|digit)|choose (one|a number)|pick (one|a number)|or clarify your question)/i;function pt(t){return t.replace(/[\u0660-\u0669]/g,e=>String(e.charCodeAt(0)-1632))}function Zt(t){return Qt.test(t)}function ut(t,e){const n=[],r=e?/^([0-9\u0660-\u0669]{1,2})\s*[.)\-–:\u060c]\s*(.+)$/:/(?:^|[\s\n])([0-9\u0660-\u0669]{1,2})\s*[.)\-–:\u060c]\s*([^\n]+?)(?=\s+[0-9\u0660-\u0669]{1,2}\s*[.)\-–:\u060c]|$)/g;if(e)for(const a of t.split(`
`)){const l=a.trim();if(!l)continue;const d=r.exec(l);if(!d)continue;const h=Number(pt(d[1]));!Number.isFinite(h)||h<1||h>6||n.push({n:h,text:d[2].trim()})}else for(const a of t.matchAll(r)){const l=Number(pt(a[1]));if(!Number.isFinite(l)||l<1||l>6)continue;const d=a[2].trim();d&&n.push({n:l,text:d})}const s=new Set;return n.sort((a,l)=>a.n-l.n).filter(a=>s.has(a.n)?!1:(s.add(a.n),!!a.text)).map(a=>a.text)}function Xt(t){const e=ut(t,!0);if(e.length>=2)return e;const n=ut(t,!1);return n.length>=2?n:e}function en(t){if(!Zt(t))return[];const e=Xt(t);return e.length<1||e.length>6?[]:e}const j="مساعد الدعم الفني غير متاح حالياً برجاء المحاولة لاحقا";class tn{constructor(e,n){this.sessionToken=null,this.conversationId=null,this.config=null,this.apiUrl=e.replace(/\/$/,""),this.publicKey=n,this.storageKey=`acw_session_${n}`,this.visitorKey=`acw_visitor_${n}`,this.visitorId=this.loadVisitorId();try{this.sessionToken=localStorage.getItem(this.storageKey)}catch{this.sessionToken=null}}loadVisitorId(){try{const e=localStorage.getItem(this.visitorKey);if(e&&/^[0-9a-f-]{16,64}$/i.test(e))return e;const n=crypto.randomUUID();return localStorage.setItem(this.visitorKey,n),n}catch{return crypto.randomUUID()}}hasSession(){return!!this.sessionToken}async fetchConfig(){const e=await fetch(`${this.apiUrl}/api/widget/config?key=${encodeURIComponent(this.publicKey)}`);if(!e.ok){const r=await e.json().catch(()=>({}));throw new Error(r.error??`Failed to load config (${e.status})`)}const n=await e.json();return this.config=n,n}async startSession(){const e=await fetch(`${this.apiUrl}/api/widget/session`,{method:"POST",headers:{"content-type":"application/json","x-public-key":this.publicKey},body:JSON.stringify({pageUrl:window.location.href,visitorId:this.visitorId})});if(!e.ok){const r=await e.json().catch(()=>({}));throw new Error(r.error??`Failed to start session (${e.status})`)}const n=await e.json();this.sessionToken=n.sessionToken;try{localStorage.setItem(this.storageKey,n.sessionToken)}catch{}return this.conversationId=n.conversationId??null,this.config=n.config,n.config}authHeaders(){return{authorization:`Bearer ${this.sessionToken}`}}async fetchHistory(){if(!this.sessionToken)return null;try{const e=await fetch(`${this.apiUrl}/api/widget/history`,{headers:this.authHeaders()});return e.ok?await e.json():null}catch{return null}}async escalate(){try{let e=await fetch(`${this.apiUrl}/api/widget/escalate`,{method:"POST",headers:this.authHeaders()});return e.status===401&&(await this.startSession(),e=await fetch(`${this.apiUrl}/api/widget/escalate`,{method:"POST",headers:this.authHeaders()})),e.ok?await e.json():null}catch{return null}}sendTyping(){this.sessionToken&&fetch(`${this.apiUrl}/api/widget/typing`,{method:"POST",headers:this.authHeaders()}).catch(()=>{})}openLiveStream(e){let n=!1,r=null,s=null;return(async()=>{for(;!n;){r=new AbortController;try{const l=s?`?after=${encodeURIComponent(s)}`:"",d=await fetch(`${this.apiUrl}/api/widget/stream${l}`,{headers:this.authHeaders(),signal:r.signal});if(!d.ok||!d.body)throw new Error(`stream ${d.status}`);const h=d.body.getReader(),p=new TextDecoder;let g="";for(;!n;){const{done:m,value:i}=await h.read();if(m)break;g+=p.decode(i,{stream:!0});const _=g.split(`

`);g=_.pop()??"";for(const C of _){const v=C.trim();if(!v.startsWith("data:"))continue;let x;try{x=JSON.parse(v.slice(5).trim())}catch{continue}if(x.type==="message")s=x.message.createdAt,e.onMessage(x.message);else if(x.type==="status"){if(e.onStatus(x.status,x.agentName,x.agentAvatarUrl??null,x.agentTitle??null),x.status==="bot"||x.status==="resolved"){n=!0;break}}else x.type==="typing"&&e.onTyping(x.typing)}}}catch{}n||await new Promise(l=>setTimeout(l,2e3))}})(),()=>{n=!0,r==null||r.abort()}}postChat(e,n){return fetch(`${this.apiUrl}/api/widget/chat`,{method:"POST",headers:{"content-type":"application/json",...this.authHeaders()},body:JSON.stringify({message:e,attachmentIds:n})})}postUpload(e){const n=new FormData;return n.append("file",e,e.name),fetch(`${this.apiUrl}/api/widget/upload`,{method:"POST",headers:this.authHeaders(),body:n})}async uploadImage(e){this.sessionToken||await this.startSession();let n=await this.postUpload(e);if(n.status===401&&(await this.startSession(),n=await this.postUpload(e)),!n.ok)throw new Error(`Upload failed (${n.status})`);return(await n.json()).id}async streamChat(e,n,r=[]){var h,p,g;if(!this.sessionToken)try{await this.startSession()}catch{n.onError(j);return}let s=await this.postChat(e,r);if(s.status===401)try{await this.startSession(),s=await this.postChat(e,r)}catch{n.onError(j);return}if(!s.ok||!s.body){n.onError(j);return}const a=s.body.getReader(),l=new TextDecoder;let d="";for(;;){const{done:m,value:i}=await a.read();if(m)break;d+=l.decode(i,{stream:!0});const _=d.split(`

`);d=_.pop()??"";for(const C of _){const v=C.trim();if(!v.startsWith("data:"))continue;const x=v.slice(5).trim();if(!x)continue;let b;try{b=JSON.parse(x)}catch{continue}b.type==="token"?n.onToken(b.value):b.type==="done"?n.onDone():b.type==="error"?n.onError(j):b.type==="offer_human"?(h=n.onOfferHuman)==null||h.call(n):b.type==="handoff"?(p=n.onHandoff)==null||p.call(n,b.status,b.notice):b.type==="delivered"&&((g=n.onDelivered)==null||g.call(n))}}}async listConversations(){if(!this.sessionToken)return[];try{const e=await fetch(`${this.apiUrl}/api/widget/conversations`,{headers:this.authHeaders()});return e.ok?await e.json():[]}catch{return[]}}async openConversation(e){if(!this.sessionToken||!(await fetch(`${this.apiUrl}/api/widget/conversations/${e}/resume`,{method:"POST",headers:this.authHeaders()})).ok)return null;const r=await fetch(`${this.apiUrl}/api/widget/conversations/${e}/messages`,{headers:this.authHeaders()});if(!r.ok)return null;const s=await r.json();return this.conversationId=s.conversationId,s}async startNewConversation(){this.sessionToken&&(await fetch(`${this.apiUrl}/api/widget/conversations/new`,{method:"POST",headers:this.authHeaders()}).catch(()=>{}),this.conversationId=null)}async reopenConversation(e){return!this.sessionToken||!(await fetch(`${this.apiUrl}/api/widget/conversations/${e}/reopen`,{method:"POST",headers:this.authHeaders()})).ok?null:this.openConversation(e)}async rateConversation(e,n){this.sessionToken&&await fetch(`${this.apiUrl}/api/widget/conversations/${e}/rate`,{method:"POST",headers:{"content-type":"application/json",...this.authHeaders()},body:JSON.stringify({rating:n})}).catch(()=>{})}}function ht(){return window.__acwCapturePage}let te=null;function nn(t){const e=ht();return e?Promise.resolve(e):te||(te=new Promise(n=>{const r=document.createElement("script");r.src=`${t}/widget-shot.js`,r.onload=()=>n(ht()??null),r.onerror=()=>{te=null,n(null)},document.head.appendChild(r)}),te)}function rn(){var e;const t=navigator.mediaDevices;return t!=null&&t.getDisplayMedia?((e=window.matchMedia)==null?void 0:e.call(window,"(hover: none) and (pointer: coarse)").matches)??!1:!0}async function an(t){const e=await nn(t);if(!e)return null;const n=await e();return n?new File([n],"screenshot.jpg",{type:n.type||"image/jpeg"}):null}async function on(){const t=navigator.mediaDevices;if(!(t!=null&&t.getDisplayMedia))return null;const e=await t.getDisplayMedia({video:!0,preferCurrentTab:!0});try{const n=document.createElement("video");n.srcObject=e,n.muted=!0,await n.play(),await new Promise(a=>setTimeout(a,400));const r=document.createElement("canvas");r.width=n.videoWidth,r.height=n.videoHeight,r.getContext("2d").drawImage(n,0,0);const s=await new Promise(a=>r.toBlob(a,"image/png"));return s?new File([s],"screenshot.png",{type:"image/png"}):null}finally{e.getTracks().forEach(n=>n.stop())}}const sn=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),cn=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}),o("circle",{cx:"12",cy:"12",r:"3.5"}),o("path",{d:"M17.5 8.5h.01"})]}),ft=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}),o("circle",{cx:"8.5",cy:"11.5",r:"1",fill:"currentColor",stroke:"none"}),o("circle",{cx:"12",cy:"11.5",r:"1",fill:"currentColor",stroke:"none"}),o("circle",{cx:"15.5",cy:"11.5",r:"1",fill:"currentColor",stroke:"none"})]}),ln=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),o("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),_t=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("path",{d:"M4 13a8 8 0 0 1 16 0"}),o("rect",{x:"3",y:"13",width:"4",height:"6",rx:"2"}),o("rect",{x:"17",y:"13",width:"4",height:"6",rx:"2"})]}),dn=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.4","stroke-linecap":"round",children:o("path",{d:"M5 12h14"})}),pn=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:o("path",{d:"M9 18l6-6-6-6"})}),un=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("path",{d:"M11 5L6 9H2v6h4l5 4V5z"}),o("path",{d:"M15.54 8.46a5 5 0 0 1 0 7.08"}),o("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14"})]}),hn=()=>o("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[o("path",{d:"M11 5L6 9H2v6h4l5 4V5z"}),o("path",{d:"M23 9l-6 6M17 9l6 6"})]});function fn(t){return en(t)}function R(t){if(!t)return"";const e=new Date(t),n=new Date,r=new Date(n);r.setDate(n.getDate()-1);const s=(a,l)=>a.getFullYear()===l.getFullYear()&&a.getMonth()===l.getMonth()&&a.getDate()===l.getDate();return s(e,n)?"اليوم":s(e,r)?"أمس":e.toLocaleDateString("ar",{day:"numeric",month:"short"})}function _n(t){return t?new Date(t).toLocaleTimeString("ar",{hour:"2-digit",minute:"2-digit"}):""}function gn(t){const e=(t??"").trim();return e?e.slice(0,1):"?"}function wn(t){return new Promise((e,n)=>{const r=new FileReader;r.onload=()=>typeof r.result=="string"?e(r.result):n(new Error("Preview failed")),r.onerror=()=>n(r.error??new Error("Preview failed")),r.readAsDataURL(t)})}function mn(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function xn({api:t}){var Pt,Ht,Nt;const[e,n]=$(!1),[r,s]=$(null),[a,l]=$(!1),[d,h]=$([]),[p,g]=$(""),[m,i]=$(!1),[_,C]=$(!1),[v,x]=$(null),[b,k]=$(!1),[y,N]=$("bot"),[H,D]=$(null),[W,L]=$(null),[ne,I]=$(null),[O,Ie]=$(!1),[J,G]=$("home"),[wt,yn]=$([]),[ge,we]=$(null),[Pe,mt]=$(0),[me,kn]=$(!1),[xt,He]=$(null),[Cn,xe]=$(!1),[Sn,vt]=$(!1),ve=B(null),bt=B(null),yt=B(null),kt=B(new Set),Ct=B(0),St=B(!1),Tt=B(!1);St.current=e,Tt.current=me,fe(()=>{t.fetchConfig().then(c=>s(c)).catch(()=>{})},[]),fe(()=>{requestAnimationFrame(()=>{ve.current&&(ve.current.scrollTop=ve.current.scrollHeight)})},[d,m,O]);const $t=c=>{const u=c??bt.current;if(!u)return;u.style.height="0px";const f=Number.parseFloat(getComputedStyle(u).maxHeight)||168;u.style.height=`${Math.min(u.scrollHeight,f)}px`};fe(()=>{$t()},[p]);const Q=async()=>{if(a)return!0;C(!0);try{if(t.hasSession()){const u=await t.fetchHistory();if(u&&u.messages.length>0)return h(u.messages.filter(f=>{var w,T;return f.content.trim()!==""||((w=f.imageUrls)==null?void 0:w.length)||((T=f.attachments)==null?void 0:T.length)}).map(f=>{var w,T;return{id:f.id,role:f.role,content:f.content,agentName:f.agentName,imageUrl:(w=f.attachments)!=null&&w.length||(T=f.imageUrls)==null?void 0:T[0],attachments:f.attachments,createdAt:f.createdAt,delivered:!0}})),N(u.status),D(u.agentName),L(u.agentAvatarUrl),I(u.agentTitle),we(u.conversationId),l(!0),!0}const c=await t.startSession();return s(c),l(!0),!0}catch{return h([{role:"error",content:j}]),!1}finally{C(!1)}};fe(()=>!a||y!=="waiting"&&y!=="agent"?void 0:t.openLiveStream({onMessage:u=>{if(!kt.current.has(u.id)&&(kt.current.add(u.id),Ie(!1),h(f=>[...f,{id:u.id,role:u.role,content:u.content,agentName:u.agentName,attachments:u.attachments,createdAt:u.createdAt}]),!St.current&&(mt(f=>f+1),Tt.current)))try{const f=new AudioContext,w=f.createOscillator(),T=f.createGain();w.frequency.value=880,T.gain.value=.04,w.connect(T),T.connect(f.destination),w.start(),w.stop(f.currentTime+.12)}catch{}},onStatus:(u,f,w,T)=>{N(u),D(f),w!==void 0&&L(w??null),T!==void 0&&I(T??null),u==="resolved"&&(Ie(!1),xe(!0))},onTyping:Ie}),[a,y]);const Ne=async()=>{const c=await t.listConversations();yn(c)},Ut=c=>{h(c.messages.filter(u=>{var f,w;return u.content.trim()!==""||((f=u.imageUrls)==null?void 0:f.length)||((w=u.attachments)==null?void 0:w.length)}).map(u=>{var f,w;return{id:u.id,role:u.role,content:u.content,agentName:u.agentName,imageUrl:(f=u.attachments)!=null&&f.length||(w=u.imageUrls)==null?void 0:w[0],attachments:u.attachments,createdAt:u.createdAt,delivered:!0}})),N(c.status),D(c.agentName),L(c.agentAvatarUrl),I(c.agentTitle),we(c.conversationId)},Tn=async()=>{await Q()&&(y==="bot"&&d.length===0&&r&&h([{role:"assistant",content:r.welcomeMessage,createdAt:new Date().toISOString()}]),G("chat"))},$n=async()=>{await Q()&&(await t.startNewConversation(),h([{role:"assistant",content:(r==null?void 0:r.welcomeMessage)??"",createdAt:new Date().toISOString()}]),N("bot"),D(null),L(null),I(null),we(null),xe(!1),vt(!1),G("chat"))},Un=async c=>{if(!await Q())return;const u=await t.openConversation(c);u&&(Ut(u),xe(!1),G("chat"))},An=async()=>{if(!ge||m)return;i(!0);const c=await t.reopenConversation(ge);if(i(!1),!c){h(u=>[...u,{role:"error",content:j}]);return}Ut(c),xe(!1),await Ne()},Me=async()=>{const c=!e;if(n(c),c){if(mt(0),!await Q())return;await Ne(),G(y==="waiting"||y==="agent"?"chat":"home")}},zn=async()=>{if(m)return;i(!0),h(u=>u.filter(f=>!f.offer));const c=await t.escalate();if(i(!1),!c){h(u=>[...u,{role:"error",content:j}]);return}if(h(u=>[...u,{role:"system",content:c.notice}]),c.queued){N(c.status);const u=await t.fetchHistory();u!=null&&u.conversationId&&we(u.conversationId)}},De=async c=>{if(m||v||!c.type.startsWith("image/")||c.size>5*1024*1024||!await Q())return;let u;try{u=await wn(c)}catch{h(f=>[...f,{role:"system",content:"تعذّر تجهيز معاينة الصورة، حاول اختيارها مرة أخرى."}]);return}x({id:null,previewUrl:u,failed:!1});try{const f=await t.uploadImage(c);x(w=>w&&w.previewUrl===u?{...w,id:f}:w)}catch{x(f=>f&&f.previewUrl===u?{...f,failed:!0}:f)}},In=()=>{x(null)},Pn=c=>{var w;const u=c.target,f=(w=u.files)==null?void 0:w[0];u.value="",f&&De(f)},Hn=async()=>{if(!(m||b||v)&&await Q()){k(!0);try{let c=null;if(!rn())try{c=await on()}catch{return}c||(c=await an(t.apiUrl)),c?await De(c):h(u=>[...u,{role:"system",content:"تعذّر التقاط الصورة، تقدر ترفعها من جهازك."}])}finally{k(!1)}}},Nn=c=>{var w;const u=Array.from(((w=c.clipboardData)==null?void 0:w.items)??[]).find(T=>T.type.startsWith("image/")),f=u==null?void 0:u.getAsFile();f&&(c.preventDefault(),De(f))},Ee=async c=>{const u=(c??p).trim(),f=v&&v.id?v:null;if(!u&&!f||m||v&&!v.id&&!v.failed)return;g(""),x(null),h(z=>[...z.filter(M=>!M.offer),{role:"user",content:u,imageUrl:f==null?void 0:f.previewUrl,createdAt:new Date().toISOString(),delivered:!0}]),i(!0);const w=y!=="bot";let T=-1;w||h(z=>(T=z.length,[...z,{role:"assistant",content:""}]));const q=z=>{h(M=>{const V=[...M];return T<0||T>=V.length||(z?V[T]=z:V.splice(T,1)),V})};let re="";try{await t.streamChat(u,{onToken:z=>{re+=z,q({role:"assistant",content:re})},onDone:()=>i(!1),onDelivered:()=>{w||q(null),i(!1)},onHandoff:(z,M)=>{q({role:"system",content:M}),N(z),i(!1)},onOfferHuman:()=>{h(z=>[...z,{role:"system",content:"",offer:!0}])},onError:z=>{q({role:"error",content:z||j}),i(!1)}},f?[f.id]:[])}catch{q({role:"error",content:j}),i(!1)}},Mn=c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),Ee())},Dn=c=>{const u=c.target;g(u.value),$t(u),y==="agent"&&Date.now()-Ct.current>3e3&&(Ct.current=Date.now(),t.sendTyping())},At={"--acw-primary":(r==null?void 0:r.primaryColor)??"#0b7285","--acw-launcher":(r==null?void 0:r.launcherColor)??(r==null?void 0:r.primaryColor)??"#0b7285"},zt=(r==null?void 0:r.widgetPosition)==="left"?"acw-pos-left":"acw-pos-right";if((r==null?void 0:r.enabled)===!1)return null;if(!e)return o("div",{class:`acw-root ${zt}`,style:At,children:o("button",{class:"acw-launcher",onClick:Me,"aria-label":(r==null?void 0:r.launcherLabel)??"افتح المحادثة",title:(r==null?void 0:r.launcherLabel)??"تواصل معنا",children:[Pe>0&&o("span",{class:"acw-unread",children:Pe>9?"9+":Pe}),o(ft,{})]})});const En=r!=null&&r.chatPattern&&r.chatPattern!=="none"?`acw-pat-${r.chatPattern}`:"",It=((Pt=[...d].reverse().find(c=>c.role==="user"))==null?void 0:Pt.content)??"",K=(((Ht=It.match(/[A-Za-z]/g))==null?void 0:Ht.length)??0)>(((Nt=It.match(/[\u0600-\u06FF]/g))==null?void 0:Nt.length)??0),jn=y==="agent"?ne||(H?`تتحدث مع ${H}`:"تتحدث مع موظف الدعم"):y==="waiting"?"بانتظار موظف الدعم...":y==="resolved"?"تم حل المحادثة":"يرد عادة خلال دقائق",Ln=c=>{Ee(c)};return o("div",{class:`acw-root ${zt}`,style:At,children:o("div",{class:"acw-panel",children:[o("div",{class:"acw-header",children:[J==="chat"&&o("button",{class:"acw-iconbtn",onClick:()=>{G("home"),Ne()},"aria-label":"العودة",children:o(pn,{})}),o("div",{class:"acw-avatar-wrap",children:W&&y==="agent"?o("img",{class:"acw-avatar-img",src:W,alt:""}):o("div",{class:"acw-avatar",children:y==="agent"?o(_t,{}):o(ft,{})})}),o("div",{class:"acw-htext",children:[o("h3",{children:y==="agent"&&H?H:(r==null?void 0:r.title)??"المساعد الذكي"}),o("div",{class:"acw-status",children:jn})]}),J==="home"&&o("button",{class:"acw-iconbtn",onClick:()=>kn(c=>!c),"aria-label":me?"كتم الصوت":"تشغيل الصوت",title:me?"كتم الصوت":"تشغيل الصوت",children:me?o(un,{}):o(hn,{})}),o("button",{class:"acw-iconbtn",onClick:Me,"aria-label":"تصغير",children:o(dn,{})}),o("button",{class:"acw-close",onClick:Me,"aria-label":"إغلاق",children:"×"})]}),J==="home"?o("div",{class:"acw-home",children:[o("div",{class:"acw-welcome",children:[o("h4",{children:(r==null?void 0:r.title)??"المساعد الذكي"}),o("p",{children:(r==null?void 0:r.welcomeMessage)??""}),o("button",{class:"acw-home-start",onClick:()=>void $n(),disabled:_,children:"بدء محادثة جديدة"}),d.length>0&&o("button",{class:"acw-home-resume",onClick:()=>void Tn(),children:"متابعة المحادثة الحالية"})]}),o("div",{class:"acw-home-list",children:[o("div",{class:"acw-home-label",children:"محادثاتك"}),wt.length===0&&o("div",{class:"acw-home-empty",children:"لا توجد محادثات سابقة"}),wt.map(c=>o("button",{class:"acw-home-item",onClick:()=>void Un(c.id),children:[o("div",{class:"acw-home-item-top",children:[o("span",{children:c.agentName??(r==null?void 0:r.title)??"المساعد"}),o("span",{class:"acw-home-item-side",children:[c.status==="resolved"&&o("span",{class:"acw-home-state",children:"تم الحل"}),o("span",{children:R(c.updatedAt)})]})]}),o("div",{class:"acw-home-preview",children:c.preview??"..."})]},c.id))]})]}):o("div",{class:`acw-messages ${En}`,ref:ve,children:[_&&o("div",{class:"acw-msg assistant",children:o("span",{class:"acw-typing",children:[o("span",{})," ",o("span",{})," ",o("span",{})]})}),d.map((c,u)=>{var Dt,Et;const f=d[u-1],w=d[u+1],T=!!(R(c.createdAt)&&R(c.createdAt)!==R(f==null?void 0:f.createdAt)),q=!!(R(w==null?void 0:w.createdAt)&&R(w==null?void 0:w.createdAt)!==R(c.createdAt)),re=!!(f&&f.role===c.role&&!T),z=!!(w&&w.role===c.role&&!q),M=re&&z?"mid":re?"last":z?"first":"solo",V=M==="last"||M==="solo",je=c.role==="agent"&&(M==="first"||M==="solo"),Mt=c.role==="assistant"&&u===d.length-1?fn(c.content):[];return c.offer?o("div",{class:"acw-offer",dir:K?"ltr":"rtl",children:o("button",{class:"acw-offer-btn",onClick:zn,disabled:m,children:[o(_t,{}),K?"Talk to a support agent":"التحدث مع موظف الدعم"]})},u):o("div",{class:"acw-block",children:[T&&o("div",{class:"acw-day",children:R(c.createdAt)}),o("div",{class:`acw-row ${c.role} g-${M}`,children:[c.role==="agent"&&je&&o("div",{class:"acw-bubble-avatar",children:W?o("img",{src:W,alt:""}):o("span",{children:gn(c.agentName??H)})}),c.role==="agent"&&!je&&o("div",{class:"acw-bubble-avatar spacer"}),o("div",{class:"acw-stack",children:[je&&c.agentName&&o("div",{class:"acw-caption",children:c.agentName}),o("div",{class:`acw-msg ${c.role} g-${M}`,dir:"auto",children:[c.imageUrl&&o("img",{class:"acw-msg-img",src:c.imageUrl,alt:"صورة مرفقة",onClick:()=>He(c.imageUrl)}),(Dt=c.attachments)==null?void 0:Dt.map(P=>P.url?P.mimeType.startsWith("image/")?o("img",{class:"acw-msg-img",src:P.url,alt:P.fileName,onClick:()=>He(P.url)},P.id):o("a",{class:"acw-file",href:P.url,target:"_blank",rel:"noreferrer",download:P.fileName,children:[o("span",{class:"acw-file-icon",children:"↧"}),o("span",{class:"acw-file-copy",children:[o("strong",{children:P.fileName}),o("small",{children:mn(P.sizeBytes)})]})]},P.id):null),c.content===""&&!c.imageUrl&&!((Et=c.attachments)!=null&&Et.length)&&m&&u===d.length-1?o("span",{class:"acw-typing",children:[o("span",{})," ",o("span",{})," ",o("span",{})]}):c.content]}),V&&c.createdAt&&o("div",{class:"acw-meta",children:[_n(c.createdAt),c.role==="user"&&y==="agent"&&o("span",{class:"acw-ticks",children:c.delivered?"✓✓":"✓"})]})]})]}),Mt.length>0&&o("div",{class:"acw-chips",children:Mt.map(P=>o("button",{class:"acw-chip",onClick:()=>Ln(P),disabled:m,children:P},P))})]},u)}),O&&o("div",{class:"acw-row agent",children:o("div",{class:"acw-msg agent",children:o("span",{class:"acw-typing",children:[o("span",{})," ",o("span",{})," ",o("span",{})]})})}),Cn&&!Sn&&ge&&y==="resolved"&&o("div",{class:"acw-rate",children:[o("div",{children:"كيف كانت تجربتك؟"}),o("div",{class:"acw-stars",children:[1,2,3,4,5].map(c=>o("button",{onClick:()=>{t.rateConversation(ge,c),vt(!0)},children:"★"},c))})]})]}),J==="chat"&&y==="resolved"&&o("div",{class:"acw-resolved",dir:K?"ltr":"rtl",children:[o("div",{children:[o("strong",{children:K?"Conversation resolved":"تم حل المحادثة"}),o("span",{children:K?"Still need help? Reopen it and the support team will be notified.":"ما زلت تحتاج مساعدة؟ أعد فتحها وسيتم إشعار فريق الدعم."})]}),o("button",{onClick:()=>void An(),disabled:m,children:m?K?"Reopening...":"جارٍ إعادة الفتح...":K?"Reopen":"إعادة فتح المحادثة"})]}),J==="chat"&&y!=="resolved"&&v&&o("div",{class:"acw-preview",children:[o("img",{src:v.previewUrl,alt:""}),o("span",{class:"acw-preview-label",children:v.failed?"تعذّر رفع الصورة":v.id?"جاهزة للإرسال":"جارٍ الرفع..."}),o("button",{class:"acw-preview-remove",onClick:In,"aria-label":"إزالة الصورة",children:"×"})]}),J==="chat"&&y!=="resolved"&&o("div",{class:"acw-input",children:[(r==null?void 0:r.uploadsEnabled)&&o(X,{children:[o("input",{ref:yt,type:"file",accept:"image/png,image/jpeg,image/webp,image/gif",style:{display:"none"},onChange:Pn}),o("button",{class:"acw-tool",onClick:()=>{var c;return(c=yt.current)==null?void 0:c.click()},disabled:m||_||b||!!v,"aria-label":"إرفاق صورة للمشكلة",title:"إرفاق صورة للمشكلة",children:o(sn,{})}),o("button",{class:`acw-tool ${b?"capturing":""}`,onClick:Hn,disabled:m||_||b||!!v,"aria-label":"التقاط صورة للشاشة",title:b?"جارٍ التقاط الصورة...":"التقاط صورة للشاشة",children:o(cn,{})})]}),o("textarea",{ref:bt,value:p,placeholder:(r==null?void 0:r.placeholder)??"اكتب سؤالك هنا...",onInput:Dn,onKeyDown:Mn,onPaste:Nn,rows:1,dir:"auto",disabled:_}),o("button",{class:"acw-send",onClick:()=>void Ee(),disabled:m||_||!p.trim()&&!(v!=null&&v.id)||!!v&&!v.id&&!v.failed,"aria-label":"إرسال",children:o(ln,{})})]}),o("div",{class:"acw-footer",children:y==="bot"?"مدعوم بالذكاء الاصطناعي":y==="resolved"?"محادثة محلولة":"فريق الدعم"}),xt&&o("div",{class:"acw-lightbox",onClick:()=>He(null),children:o("img",{src:xt,alt:""})})]})})}const vn=`
:host { all: initial; }
* { box-sizing: border-box; }

.acw-root {
  --acw-primary: #0b7285;
  --acw-launcher: #0b7285;
  position: fixed;
  bottom: 22px;
  z-index: 2147483000;
  direction: rtl;
  font-family: "Almarai", "Segoe UI", Tahoma, "Noto Sans Arabic", sans-serif;
}
/* Physical placement so it's unambiguous regardless of text direction. */
.acw-root.acw-pos-right { right: 22px; }
.acw-root.acw-pos-left { left: 22px; }

/* ---------- Modern floating launcher ---------- */
.acw-launcher {
  position: relative;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--acw-launcher);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(0,0,0,0.35), 0 0 0 0 var(--acw-launcher);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: acw-pop 0.35s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.acw-launcher:hover { transform: translateY(-3px) scale(1.05); }
.acw-launcher:active { transform: scale(0.96); }
.acw-launcher svg { width: 30px; height: 30px; }
.acw-launcher::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--acw-launcher);
  opacity: 0.45;
  z-index: -1;
  animation: acw-ripple 2.4s ease-out infinite;
}
.acw-unread {
  position: absolute;
  top: -4px;
  inset-inline-start: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 999px;
  background: #ef4444;
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
}

@keyframes acw-pop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes acw-ripple {
  0% { transform: scale(1); opacity: 0.45; }
  70% { transform: scale(1.6); opacity: 0; }
  100% { opacity: 0; }
}

/* ---------- Chat panel ---------- */
.acw-panel {
  position: relative;
  width: 380px;
  max-width: calc(100vw - 32px);
  height: 580px;
  max-height: calc(100vh - 110px);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 24px 60px -12px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: acw-slide 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes acw-slide { from { transform: translateY(24px) scale(0.98); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }

.acw-header {
  background: var(--acw-primary);
  background: linear-gradient(135deg, var(--acw-primary), color-mix(in srgb, var(--acw-primary) 78%, #000));
  color: #fff;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}
.acw-header .acw-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center; flex: 0 0 auto;
}
.acw-header .acw-avatar svg { width: 20px; height: 20px; }
.acw-avatar-wrap { position: relative; flex: 0 0 auto; }
.acw-avatar-img { width: 36px; height: 36px; border-radius: 50%; object-fit: cover; background: rgba(255,255,255,0.2); }
.acw-iconbtn {
  background: transparent; border: none; color: #fff; cursor: pointer;
  width: 44px; height: 44px; border-radius: 10px; opacity: 0.9;
  display: flex; align-items: center; justify-content: center;
  flex: 0 0 auto;
}
.acw-iconbtn svg { width: 18px; height: 18px; }
.acw-iconbtn:hover { background: rgba(255,255,255,0.15); opacity: 1; }
.acw-header .acw-htext { flex: 1; min-width: 0; }
.acw-header h3 {
  margin: 0; font-size: 15px; font-weight: 800; line-height: 1.25;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.acw-header .acw-status {
  font-size: 12px; opacity: 0.85; margin-top: 2px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
@keyframes acw-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
.acw-close {
  background: transparent; border: none; color: #fff; cursor: pointer;
  width: 44px; height: 44px; font-size: 24px; line-height: 1;
  opacity: 0.85; border-radius: 10px; flex: 0 0 auto;
}
.acw-close:hover { opacity: 1; background: rgba(255,255,255,0.15); }

/* ---------- Messages + background patterns ---------- */
.acw-messages {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 18px 16px;
  background-color: #f4f7f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.acw-pat-dots {
  background-image: radial-gradient(rgba(15,40,55,0.07) 1.6px, transparent 1.7px);
  background-size: 18px 18px;
}
.acw-pat-grid {
  background-image:
    linear-gradient(rgba(15,40,55,0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15,40,55,0.055) 1px, transparent 1px);
  background-size: 22px 22px;
}
.acw-pat-diagonal {
  background-image: repeating-linear-gradient(45deg, rgba(15,40,55,0.05) 0, rgba(15,40,55,0.05) 1px, transparent 1px, transparent 13px);
}
.acw-pat-bubbles {
  background-image:
    radial-gradient(circle at 18% 28%, rgba(15,40,55,0.05) 7px, transparent 8px),
    radial-gradient(circle at 72% 62%, rgba(15,40,55,0.045) 11px, transparent 12px),
    radial-gradient(circle at 45% 88%, rgba(15,40,55,0.04) 5px, transparent 6px);
  background-size: 96px 96px;
}
.acw-pat-waves {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='22'%3E%3Cpath d='M0 11 Q 20 1 40 11 T 80 11' fill='none' stroke='rgba(15,40,55,0.07)' stroke-width='2'/%3E%3C/svg%3E");
  background-size: 80px 22px;
}
.acw-pat-hexagons {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cg fill='none' stroke='rgba(15,40,55,0.06)' stroke-width='1.3'%3E%3Cpath d='M28 0 L56 16 L56 50 L28 66 L0 50 L0 16 Z'/%3E%3Cpath d='M28 66 L56 82 L56 116 M28 66 L0 82 L0 116'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 56px 100px;
}

.acw-msg {
  width: fit-content;
  max-width: 100%;
  min-width: 0;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.65;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  text-align: start;
  unicode-bidi: plaintext;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  animation: acw-msg-in 0.22s ease;
}
@keyframes acw-msg-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.acw-msg.user {
  background: var(--acw-primary);
  color: #fff;
  border-bottom-right-radius: 6px;
}
.acw-msg.assistant {
  background: #fff;
  color: #1c2b33;
  border: 1px solid #e6ecef;
  border-bottom-left-radius: 6px;
}
.acw-msg.error {
  background: #fdecea;
  color: #b3261e;
  font-size: 13px;
  box-shadow: none;
}
.acw-msg.agent {
  background: #eaf6f1;
  color: #1c2b33;
  border: 1px solid #cde8dc;
  border-bottom-left-radius: 6px;
}
.acw-msg.user.g-first, .acw-msg.user.g-mid { border-bottom-right-radius: 10px; }
.acw-msg.user.g-mid, .acw-msg.user.g-last { border-top-right-radius: 10px; }
.acw-msg.assistant.g-first, .acw-msg.assistant.g-mid,
.acw-msg.agent.g-first, .acw-msg.agent.g-mid { border-bottom-left-radius: 10px; }
.acw-msg.assistant.g-mid, .acw-msg.assistant.g-last,
.acw-msg.agent.g-mid, .acw-msg.agent.g-last { border-top-left-radius: 10px; }
.acw-msg.system {
  background: transparent;
  color: #6b7a81;
  font-size: 12.5px;
  text-align: center;
  box-shadow: none;
  padding: 4px 10px;
}
.acw-offer { align-self: center; animation: acw-msg-in 0.22s ease; }
.acw-offer-btn {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1.5px solid var(--acw-primary);
  color: var(--acw-primary);
  background: #fff;
  font-family: inherit;
  font-size: 13px; font-weight: 700;
  padding: 8px 16px; border-radius: 999px; cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}
.acw-offer-btn:hover:not(:disabled) { background: var(--acw-primary); color: #fff; }
.acw-offer-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.acw-offer-btn svg { width: 16px; height: 16px; }

/* Screenshot attached to a message bubble. */
.acw-msg-img {
  display: block;
  max-width: 100%;
  max-height: 180px;
  border-radius: 10px;
  margin-bottom: 6px;
  cursor: zoom-in;
}
.acw-file {
  display: flex; align-items: center; gap: 9px; min-width: 190px; max-width: 100%;
  padding: 9px 10px; margin-bottom: 6px; border-radius: 11px;
  border: 1px solid rgba(11,114,133,0.2); background: rgba(255,255,255,0.78);
  color: #1c2b33; text-decoration: none;
}
.acw-file:hover { border-color: var(--acw-primary); }
.acw-file-icon {
  width: 30px; height: 30px; border-radius: 8px; flex: 0 0 auto;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--acw-primary) 12%, #fff);
  color: var(--acw-primary); font-size: 18px; font-weight: 800;
}
.acw-file-copy { min-width: 0; display: flex; flex-direction: column; }
.acw-file-copy strong {
  max-width: 190px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 12px; line-height: 1.45;
}
.acw-file-copy small { color: #718087; font-size: 10.5px; }

.acw-typing { display: inline-flex; gap: 4px; align-items: center; }
.acw-typing span {
  width: 7px; height: 7px; border-radius: 50%;
  background: #9aa7ad; animation: acw-blink 1.2s infinite ease-in-out;
}
.acw-typing span:nth-child(2) { animation-delay: 0.2s; }
.acw-typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes acw-blink { 0%, 80%, 100% { opacity: 0.3; } 40% { opacity: 1; } }

/* ---------- Pending screenshot preview ---------- */
.acw-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-top: 1px solid #e6ecef;
  background: #f4f7f9;
  flex: 0 0 auto;
}
.acw-preview img {
  width: 44px; height: 44px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #d4dbde;
}
.acw-preview-label { flex: 1; font-size: 12px; color: #5c6b73; }
.acw-preview-remove {
  width: 26px; height: 26px; flex: 0 0 auto;
  border: none; border-radius: 50%;
  background: #e2e8ea; color: #40525b;
  font-size: 16px; line-height: 1;
  cursor: pointer;
}
.acw-preview-remove:hover { background: #d3dcdf; }

/* ---------- Input ---------- */
.acw-input {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid #e6ecef;
  background: #fff;
  align-items: flex-end;
  flex: 0 0 auto;
}
.acw-input textarea {
  flex: 1;
  min-width: 0;
  resize: none;
  border: 1px solid #d4dbde;
  border-radius: 12px;
  padding: 11px 14px;
  font-size: 14px;
  line-height: 1.45;
  font-family: inherit;
  min-height: 44px;
  max-height: 168px;
  overflow-y: auto;
  outline: none;
  transition: border-color 0.15s ease;
  box-sizing: border-box;
}
.acw-input textarea:focus { border-color: var(--acw-primary); }
/* Attach / screen-capture buttons beside the textarea. */
.acw-tool {
  width: 38px; height: 38px; flex: 0 0 auto;
  background: none;
  color: #5c6b73;
  border: none; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.15s ease, color 0.15s ease;
  margin-bottom: 3px;
}
.acw-tool svg { width: 19px; height: 19px; }
.acw-tool:hover:not(:disabled) { background: #eef3f5; color: var(--acw-primary); }
.acw-tool:disabled { opacity: 0.4; cursor: not-allowed; }
/* Rendering the page takes a moment on phones: show it's working. */
.acw-tool.capturing { color: var(--acw-primary); animation: acw-pulse 1s ease infinite; }
.acw-send {
  width: 44px; height: 44px; flex: 0 0 auto;
  background: var(--acw-primary);
  color: #fff; border: none; border-radius: 50%;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: transform 0.12s ease, opacity 0.15s ease;
}
.acw-send svg { width: 20px; height: 20px; transform: scaleX(-1); }
.acw-send:hover:not(:disabled) { transform: scale(1.08); }
.acw-send:disabled { opacity: 0.45; cursor: not-allowed; }

.acw-footer {
  text-align: center; font-size: 11px; color: #9aa7ad; padding: 7px;
  background: #fff;
  flex: 0 0 auto;
}

.acw-home {
  flex: 1 1 auto; min-height: 0; overflow-y: auto;
  padding: 16px; background: #f4f7f9;
  display: flex; flex-direction: column; gap: 14px;
}
.acw-welcome {
  background: #fff; border-radius: 16px; padding: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.acw-welcome h4 { margin: 0 0 6px; font-size: 16px; }
.acw-welcome p { margin: 0 0 14px; font-size: 13.5px; color: #4b5c64; line-height: 1.7; }
.acw-home-start, .acw-home-resume {
  width: 100%; border: none; border-radius: 12px; padding: 12px;
  font-family: inherit; font-weight: 800; font-size: 14px; cursor: pointer;
}
.acw-home-start { background: var(--acw-primary); color: #fff; }
.acw-home-resume { margin-top: 8px; background: #eef3f5; color: #1c2b33; }
.acw-home-label { font-size: 12px; font-weight: 800; color: #6b7a81; margin-bottom: 8px; }
.acw-home-empty { font-size: 13px; color: #8a979c; }
.acw-home-item {
  width: 100%; text-align: start; background: #fff; border: 1px solid #e6ecef;
  border-radius: 12px; padding: 12px; margin-bottom: 8px; cursor: pointer;
  font-family: inherit; color: inherit;
}
.acw-home-item-top { display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; margin-bottom: 4px; }
.acw-home-item-side { display: inline-flex; align-items: center; gap: 6px; color: #74828a; font-size: 11px; }
.acw-home-state {
  color: #27775d; background: #e4f3ed; border-radius: 999px;
  padding: 2px 7px; font-weight: 800;
}
.acw-home-preview { font-size: 12.5px; color: #6b7a81; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.acw-block { display: flex; flex-direction: column; gap: 4px; align-items: stretch; width: 100%; }
.acw-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  max-width: 85%;
}
.acw-row.user { align-self: flex-start; }
.acw-row.assistant, .acw-row.agent { align-self: flex-end; }
.acw-row.system, .acw-row.error { align-self: center; max-width: 92%; }
.acw-row.g-mid, .acw-row.g-last { margin-top: -2px; }
.acw-stack { display: flex; flex-direction: column; min-width: 0; max-width: 100%; }
.acw-row.user .acw-stack { align-items: flex-start; }
.acw-row.assistant .acw-stack, .acw-row.agent .acw-stack { align-items: flex-end; }
.acw-caption {
  font-size: 11px; font-weight: 800; color: var(--acw-primary);
  margin-bottom: 3px; padding-inline: 4px;
}
.acw-bubble-avatar {
  width: 24px; height: 24px; border-radius: 50%; overflow: hidden;
  background: #d7e3e8; color: #355; font-size: 11px; font-weight: 800;
  display: flex; align-items: center; justify-content: center; flex: 0 0 auto;
}
.acw-bubble-avatar.spacer { visibility: hidden; }
.acw-bubble-avatar img { width: 100%; height: 100%; object-fit: cover; }
.acw-meta {
  display: flex; gap: 6px; align-items: center;
  font-size: 10.5px; color: #7a888e; margin-top: 3px; padding-inline: 4px;
}
.acw-row.user .acw-meta { color: #6b7a81; }
.acw-ticks { letter-spacing: -1px; }
.acw-day {
  align-self: center; font-size: 11px; color: #7a888e;
  background: rgba(255,255,255,0.75); padding: 3px 10px; border-radius: 999px;
}
.acw-chips { display: flex; flex-wrap: wrap; gap: 6px; align-self: flex-end; max-width: 90%; }
.acw-chip {
  border: 1px solid var(--acw-primary); background: #fff; color: var(--acw-primary);
  border-radius: 999px; padding: 6px 12px; font-family: inherit; font-size: 12.5px;
  font-weight: 700; cursor: pointer;
}
.acw-chip:hover:not(:disabled) { background: var(--acw-primary); color: #fff; }
.acw-rate { align-self: center; text-align: center; font-size: 13px; color: #4b5c64; padding: 8px; }
.acw-stars { display: flex; gap: 4px; justify-content: center; margin-top: 6px; }
.acw-stars button {
  border: none; background: none; font-size: 22px; cursor: pointer; color: #f5b301;
}
.acw-resolved {
  display: flex; align-items: center; gap: 12px; padding: 12px;
  border-top: 1px solid #d9e4e7; background: #f4f8f7; flex: 0 0 auto;
}
.acw-resolved > div { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.acw-resolved strong { font-size: 13px; color: #24433a; }
.acw-resolved span { font-size: 11.5px; color: #687a73; line-height: 1.5; }
.acw-resolved button {
  border: none; border-radius: 10px; padding: 9px 12px; flex: 0 0 auto;
  background: var(--acw-primary); color: #fff; font-family: inherit;
  font-size: 12px; font-weight: 800; cursor: pointer;
}
.acw-resolved button:disabled { opacity: 0.55; cursor: wait; }
.acw-lightbox {
  position: absolute; inset: 0; background: rgba(10,16,20,0.78);
  display: flex; align-items: center; justify-content: center; z-index: 4;
}
.acw-lightbox img { max-width: 92%; max-height: 86%; border-radius: 12px; }

/* ---------- Mobile: full-screen panel ---------- */
/* On phones the floating card doesn't fit, so the panel goes edge-to-edge.
   100dvh (dynamic viewport height) keeps the header visible and the input
   above the on-screen keyboard, unlike 100vh which is clipped by browser UI. */
@media (max-width: 480px) {
  /* Neutralize the launcher's corner offset so the panel can pin to all edges. */
  .acw-root.acw-pos-right,
  .acw-root.acw-pos-left { right: 0; left: 0; bottom: 0; }

  .acw-panel {
    position: fixed;
    /* Anchor via edges (not 100vw) so the vertical scrollbar gutter can't
       cause horizontal overflow. left+right define the width exactly. */
    top: 0;
    left: 0;
    right: 0;
    /* dvh = dynamic viewport height: tracks the on-screen keyboard and browser
       chrome so the header stays on top and the input stays reachable.
       100vh is the fallback for browsers without dvh support. */
    height: 100vh;
    height: 100dvh;
    width: auto;
    max-width: none;
    max-height: none;
    border-radius: 0;
    animation: acw-fade 0.2s ease;
  }
  /* Respect notches / rounded corners (safe-area insets). */
  .acw-header { padding-top: max(16px, env(safe-area-inset-top)); }
  .acw-input { padding-bottom: max(12px, env(safe-area-inset-bottom)); }
  /* 16px prevents iOS Safari from auto-zooming when the field is focused. */
  .acw-input textarea { font-size: 16px; max-height: 30vh; }
}
@keyframes acw-fade { from { opacity: 0; } to { opacity: 1; } }
`;function bn(){const t=document.currentScript;if(t!=null&&t.dataset.chatbotKey)return t;const e=Array.from(document.querySelectorAll("script[data-chatbot-key]"));return e[e.length-1]??null}function gt(){const t=bn();if(!t){console.error("[chatbot-widget] missing <script data-chatbot-key=...>");return}const e=t.dataset.chatbotKey,n=t.dataset.apiUrl||new URL(t.src,window.location.href).origin,r=document.createElement("div");r.id="arabic-chat-widget-host",document.body.appendChild(r);const s=r.attachShadow({mode:"open"});if(!document.getElementById("acw-almarai-font")){const p=document.createElement("link");p.id="acw-almarai-font",p.rel="stylesheet",p.href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",document.head.appendChild(p)}const a=document.createElement("link");a.rel="stylesheet",a.href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap",s.appendChild(a);const l=document.createElement("style");l.textContent=vn,s.appendChild(l);const d=document.createElement("div");s.appendChild(d);const h=new tn(n,e);Kt(o(xn,{api:h}),d)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gt):gt()})();
