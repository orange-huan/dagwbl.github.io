/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var ot=Object.create;var Oe=Object.defineProperty;var ut=Object.getOwnPropertyDescriptor;var ct=Object.getOwnPropertyNames;var dt=Object.getPrototypeOf,ht=Object.prototype.hasOwnProperty;var gt=(p,e)=>()=>(e||p((e={exports:{}}).exports,e),e.exports),pt=(p,e)=>{for(var t in e)Oe(p,t,{get:e[t],enumerable:!0})},Re=(p,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ct(e))!ht.call(p,l)&&l!==t&&Oe(p,l,{get:()=>e[l],enumerable:!(n=ut(e,l))||n.enumerable});return p};var mt=(p,e,t)=>(t=p!=null?ot(dt(p)):{},Re(e||!p||!p.__esModule?Oe(t,"default",{value:p,enumerable:!0}):t,p)),vt=p=>Re(Oe({},"__esModule",{value:!0}),p);var $e=gt((Ke,Ce)=>{((p,e)=>{typeof define=="function"&&define.amd?define([],e):typeof Ce=="object"&&Ce.exports?Ce.exports=e():p.fuzzysort=e()})(Ke,p=>{"use strict";var e=(s,i)=>{if(!s||!i)return M;var a=Q(s);Z(i)||(i=q(i));var u=a.bitflags;return(u&i._bitflags)!==u?M:ie(a,i)},t=(s,i,a)=>{if(!s)return a!=null&&a.all?Fe(i,a):ke;var u=Q(s),c=u.bitflags,o=u.containsSpace,r=W((a==null?void 0:a.threshold)||0),g=(a==null?void 0:a.limit)||Be,d=0,f=0,w=i.length;function k(j){d<g?(Le.add(j),++d):(++f,j._score>Le.peek()._score&&Le.replaceTop(j))}if(a!=null&&a.key)for(var x=a.key,b=0;b<w;++b){var B=i[b],y=Ee(B,x);if(y&&(Z(y)||(y=q(y)),(c&y._bitflags)===c)){var L=ie(u,y);L!==M&&(L._score<r||(L.obj=B,k(L)))}}else if(a!=null&&a.keys){var $=a.keys,N=$.length;e:for(var b=0;b<w;++b){var B=i[b];{for(var V=0,_=0;_<N;++_){var x=$[_],y=Ee(B,x);if(!y){Ve[_]=ae;continue}Z(y)||(y=q(y)),Ve[_]=y,V|=y._bitflags}if((c&V)!==c)continue}if(o)for(let E=0;E<u.spaceSearches.length;E++)U[E]=A;for(var _=0;_<N;++_){if(y=Ve[_],y===ae){ne[_]=ae;continue}if(ne[_]=ie(u,y,!1,o),ne[_]===M){ne[_]=ae;continue}if(o)for(let H=0;H<u.spaceSearches.length;H++){if(X[H]>-1e3&&U[H]>A){var D=(U[H]+X[H])/4;D>U[H]&&(U[H]=D)}X[H]>U[H]&&(U[H]=X[H])}}if(o){for(let E=0;E<u.spaceSearches.length;E++)if(U[E]===A)continue e}else{var v=!1;for(let E=0;E<N;E++)if(ne[E]._score!==A){v=!0;break}if(!v)continue}var P=new T(N);for(let E=0;E<N;E++)P[E]=ne[E];if(o){var C=0;for(let E=0;E<u.spaceSearches.length;E++)C+=U[E]}else{var C=A;for(let H=0;H<N;H++){var L=P[H];if(L._score>-1e3&&C>A){var D=(C+L._score)/4;D>C&&(C=D)}L._score>C&&(C=L._score)}}if(P.obj=B,P._score=C,a!=null&&a.scoreFn){if(C=a.scoreFn(P),!C)continue;C=W(C),P._score=C}C<r||k(P)}}else for(var b=0;b<w;++b){var y=i[b];if(y&&(Z(y)||(y=q(y)),(c&y._bitflags)===c)){var L=ie(u,y);L!==M&&(L._score<r||k(L))}}if(d===0)return ke;for(var G=new Array(d),b=d-1;b>=0;--b)G[b]=Le.poll();return G.total=d+f,G},n=(s,i="<b>",a="</b>")=>{for(var u=typeof i=="function"?i:void 0,c=s.target,o=c.length,r=s.indexes,g="",d=0,f=0,w=!1,k=[],x=0;x<o;++x){var b=c[x];if(r[f]===x){if(++f,w||(w=!0,u?(k.push(g),g=""):g+=i),f===r.length){u?(g+=b,k.push(u(g,d++)),g="",k.push(c.substr(x+1))):g+=b+a+c.substr(x+1);break}}else w&&(w=!1,u?(k.push(u(g,d++)),g=""):g+=a);g+=b}return u?k:g},l=s=>{typeof s=="number"?s=""+s:typeof s!="string"&&(s="");var i=Te(s);return O(s,{_targetLower:i._lower,_targetLowerCodes:i.lowerCodes,_bitflags:i.bitflags})},h=()=>{Ie.clear(),xe.clear()};class m{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((i,a)=>i-a)}set indexes(i){return this._indexes=i}highlight(i,a){return n(this,i,a)}get score(){return I(this._score)}set score(i){this._score=W(i)}}class T extends Array{get score(){return I(this._score)}set score(i){this._score=W(i)}}var O=(s,i)=>{var u,c,o,r,g,d,f;let a=new m;return a.target=s,a.obj=(u=i.obj)!=null?u:M,a._score=(c=i._score)!=null?c:A,a._indexes=(o=i._indexes)!=null?o:[],a._targetLower=(r=i._targetLower)!=null?r:"",a._targetLowerCodes=(g=i._targetLowerCodes)!=null?g:M,a._nextBeginningIndexes=(d=i._nextBeginningIndexes)!=null?d:M,a._bitflags=(f=i._bitflags)!=null?f:0,a},I=s=>s===A?0:s>1?s:Math.E**(((-s+1)**.04307-1)*-2),W=s=>s===0?A:s>1?s:1-Math.pow(Math.log(s)/-2+1,1/.04307),z=s=>{typeof s=="number"?s=""+s:typeof s!="string"&&(s=""),s=s.trim();var i=Te(s),a=[];if(i.containsSpace){var u=s.split(/\s+/);u=[...new Set(u)];for(var c=0;c<u.length;c++)if(u[c]!==""){var o=Te(u[c]);a.push({lowerCodes:o.lowerCodes,_lower:u[c].toLowerCase(),containsSpace:!1})}}return{lowerCodes:i.lowerCodes,_lower:i._lower,containsSpace:i.containsSpace,bitflags:i.bitflags,spaceSearches:a}},q=s=>{if(s.length>999)return l(s);var i=Ie.get(s);return i!==void 0||(i=l(s),Ie.set(s,i)),i},Q=s=>{if(s.length>999)return z(s);var i=xe.get(s);return i!==void 0||(i=z(s),xe.set(s,i)),i},Fe=(s,i)=>{var a=[];a.total=s.length;var u=(i==null?void 0:i.limit)||Be;if(i!=null&&i.key)for(var c=0;c<s.length;c++){var o=s[c],r=Ee(o,i.key);if(r!=M){Z(r)||(r=q(r));var g=O(r.target,{_score:r._score,obj:o});if(a.push(g),a.length>=u)return a}}else if(i!=null&&i.keys)for(var c=0;c<s.length;c++){for(var o=s[c],d=new T(i.keys.length),f=i.keys.length-1;f>=0;--f){var r=Ee(o,i.keys[f]);if(!r){d[f]=ae;continue}Z(r)||(r=q(r)),r._score=A,r._indexes.len=0,d[f]=r}if(d.obj=o,d._score=A,a.push(d),a.length>=u)return a}else for(var c=0;c<s.length;c++){var r=s[c];if(r!=M&&(Z(r)||(r=q(r)),r._score=A,r._indexes.len=0,a.push(r),a.length>=u))return a}return a},ie=(s,i,a=!1,u=!1)=>{if(a===!1&&s.containsSpace)return nt(s,i,u);for(var c=s._lower,o=s.lowerCodes,r=o[0],g=i._targetLowerCodes,d=o.length,f=g.length,b=0,w=0,k=0;;){var x=r===g[w];if(x){if(R[k++]=w,++b,b===d)break;r=o[b]}if(++w,w>=f)return M}var b=0,B=!1,y=0,L=i._nextBeginningIndexes;L===M&&(L=i._nextBeginningIndexes=at(i.target)),w=R[0]===0?0:L[R[0]-1];var $=0;if(w!==f)for(;;)if(w>=f){if(b<=0||(++$,$>200))break;--b;var N=be[--y];w=L[N]}else{var x=o[b]===g[w];if(x){if(be[y++]=w,++b,b===d){B=!0;break}++w}else w=L[w]}var V=d<=1?-1:i._targetLower.indexOf(c,R[0]),_=!!~V,D=_?V===0||i._nextBeginningIndexes[V-1]===V:!1;if(_&&!D){for(var v=0;v<L.length;v=L[v])if(!(v<=V)){for(var P=0;P<d&&o[P]===i._targetLowerCodes[v+P];P++);if(P===d){V=v,D=!0;break}}}var C=E=>{for(var H=0,ze=0,K=1;K<d;++K)E[K]-E[K-1]!==1&&(H-=E[K],++ze);var rt=E[d-1]-E[0]-(d-1);if(H-=(12+rt)*ze,E[0]!==0&&(H-=E[0]*E[0]*.2),!B)H*=1e3;else{for(var Ae=1,K=L[0];K<f;K=L[K])++Ae;Ae>24&&(H*=(Ae-24)*10)}return H-=(f-d)/2,_&&(H/=1+d*d*1),D&&(H/=1+d*d*1),H-=(f-d)/2,H};if(B)if(D){for(var v=0;v<d;++v)R[v]=V+v;var G=R,j=C(R)}else var G=be,j=C(be);else{if(_)for(var v=0;v<d;++v)R[v]=V+v;var G=R,j=C(G)}i._score=j;for(var v=0;v<d;++v)i._indexes[v]=G[v];i._indexes.len=d;let He=new m;return He.target=i.target,He._score=i._score,He._indexes=i._indexes,He},nt=(s,i,a)=>{for(var u=new Set,c=0,o=M,r=0,g=s.spaceSearches,d=g.length,f=0,w=()=>{for(let D=f-1;D>=0;D--)i._nextBeginningIndexes[ye[D*2+0]]=ye[D*2+1]},k=!1,_=0;_<d;++_){X[_]=A;var x=g[_];if(o=ie(x,i),a){if(o===M)continue;k=!0}else if(o===M)return w(),M;var b=_===d-1;if(!b){var B=o._indexes,y=!0;for(let v=0;v<B.len-1;v++)if(B[v+1]-B[v]!==1){y=!1;break}if(y){var L=B[B.len-1]+1,$=i._nextBeginningIndexes[L-1];for(let v=L-1;v>=0&&$===i._nextBeginningIndexes[v];v--)i._nextBeginningIndexes[v]=L,ye[f*2+0]=v,ye[f*2+1]=$,f++}}c+=o._score/d,X[_]=o._score/d,o._indexes[0]<r&&(c-=(r-o._indexes[0])*2),r=o._indexes[0];for(var N=0;N<o._indexes.len;++N)u.add(o._indexes[N])}if(a&&!k)return M;w();var V=ie(s,i,!0);if(V!==M&&V._score>c){if(a)for(var _=0;_<d;++_)X[_]=V._score/d;return V}a&&(o=i),o._score=c;var _=0;for(let D of u)o._indexes[_++]=D;return o._indexes.len=_,o},qe=s=>s.replace(/\p{Script=Latin}+/gu,i=>i.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),Te=s=>{s=qe(s);for(var i=s.length,a=s.toLowerCase(),u=[],c=0,o=!1,r=0;r<i;++r){var g=u[r]=a.charCodeAt(r);if(g===32){o=!0;continue}var d=g>=97&&g<=122?g-97:g>=48&&g<=57?26:g<=127?30:31;c|=1<<d}return{lowerCodes:u,bitflags:c,containsSpace:o,_lower:a}},st=s=>{for(var i=s.length,a=[],u=0,c=!1,o=!1,r=0;r<i;++r){var g=s.charCodeAt(r),d=g>=65&&g<=90,f=d||g>=97&&g<=122||g>=48&&g<=57,w=d&&!c||!o||!f;c=d,o=f,w&&(a[u++]=r)}return a},at=s=>{s=qe(s);for(var i=s.length,a=st(s),u=[],c=a[0],o=0,r=0;r<i;++r)c>r?u[r]=c:(c=a[++o],u[r]=c===void 0?i:c);return u},Ie=new Map,xe=new Map,R=[],be=[],ye=[],U=[],X=[],Ve=[],ne=[],Ee=(s,i)=>{var a=s[i];if(a!==void 0)return a;if(typeof i=="function")return i(s);var u=i;Array.isArray(i)||(u=i.split("."));for(var c=u.length,o=-1;s&&++o<c;)s=s[u[o]];return s},Z=s=>typeof s=="object"&&typeof s._bitflags=="number",Be=1/0,A=-Be,ke=[];ke.total=0;var M=null,ae=l(""),lt=s=>{var i=[],a=0,u={},c=o=>{for(var r=0,g=i[r],d=1;d<a;){var f=d+1;r=d,f<a&&i[f]._score<i[d]._score&&(r=f),i[r-1>>1]=i[r],d=1+(r<<1)}for(var w=r-1>>1;r>0&&g._score<i[w]._score;w=(r=w)-1>>1)i[r]=i[w];i[r]=g};return u.add=o=>{var r=a;i[a++]=o;for(var g=r-1>>1;r>0&&o._score<i[g]._score;g=(r=g)-1>>1)i[r]=i[g];i[r]=o},u.poll=o=>{if(a!==0){var r=i[0];return i[0]=i[--a],c(),r}},u.peek=o=>{if(a!==0)return i[0]},u.replaceTop=o=>{i[0]=o,c()},u},Le=lt();return{single:e,go:t,prepare:l,cleanup:h}})});var ft={};pt(ft,{BUTTON_CLASS:()=>Pe,LUCID_ICON_NAME:()=>We,WINDOW_ID:()=>_e,default:()=>De});module.exports=vt(ft);var J=require("obsidian");var Ne=require("obsidian");var Ue=require("obsidian"),le=class{constructor(e,t){this._plugin=e,this._outline=t,this._containerEl=this._createElement(),this._setupEventListeners()}get visible(){let e=this._containerEl.isConnected,t=this._containerEl.classList.contains("hidden");return e&&!t}set visible(e){this._containerEl.isConnected||this._connectToDOM(this._containerEl),this._containerEl.classList.toggle("hidden",!e)}get active(){return this._containerEl.classList.contains("button-active")}set active(e){this._containerEl.classList.toggle("button-active",e)}set pinned(e){this._containerEl.classList.toggle("pinned",e)}_setupEventListeners(){this._plugin.registerDomEvent(this._containerEl,"click",()=>this.handleClick()),this._plugin.settings.toggleOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this._handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this._handleMouseLeave()))}_createElement(){let e=createEl("button",{cls:`clickable-icon view-action ${Pe} hidden`,attr:{"aria-label":"Toggle Dynamic Outline"}});return(0,Ue.setIcon)(e,We),this._connectToDOM(e),e}_connectToDOM(e){if(this._plugin.settings.windowLocation==="right"){let t=this._outline.view.containerEl.querySelector(".view-actions");t==null||t.insertBefore(e,t==null?void 0:t.firstChild)}else if(this._plugin.settings.windowLocation==="left"){let t=this._outline.view.containerEl.querySelector(".view-header-left .view-header-nav-buttons");t==null||t.appendChild(e)}else console.error("Invalid window location: ",this._plugin.settings.windowLocation)}_handleMouseEnter(){this._outline.windowVisible||this._outline.showWindow({scrollBlock:"start"}),this._plugin.settings.toggleOnHover&&this._outline.clearWindowHideTimeout()}_handleMouseLeave(){this._outline.windowVisible&&!this._outline.windowPinned&&this._outline.hideWindow(100)}handleClick(){if(this._outline.windowVisible){if(this._plugin.settings.toggleOnHover)if(this._outline.windowPinned)this._outline.windowPinned=!1,this._outline.clearWindowHideTimeout();else{this._outline.windowPinned=!0;return}this._outline.hideWindow()}else this._outline.showWindow({scrollBlock:"start"}),this._plugin.settings.toggleOnHover&&(this._outline.windowPinned=!0)}show(){this.visible||(this.active=this.visible,this.visible=!0)}hide(){this.visible&&(this.visible=!1)}destroy(){this._containerEl.remove()}};var ee=class{constructor(e,t){this._plugin=e,t?(this.element=t,this.inputField=this.element.querySelector("input"),this.clearButton=this.element.querySelector(".dynamic-outline-search-clear-button")):(this.element=createEl("div",{cls:"dynamic-outline-search-container"}),this.inputField=createEl("input",{attr:{placeholder:"Search headings\u2026",type:"search"}}),this.element.appendChild(this.inputField),this.clearButton=createEl("div",{cls:"search-input-clear-button dynamic-outline-search-clear-button",attr:{"aria-label":"Clear search"}}),this.element.appendChild(this.clearButton),this.setupEventListeners())}setupEventListeners(){this._plugin.registerDomEvent(this.inputField,"input",()=>{this.handleInput()}),this._plugin.registerDomEvent(this.clearButton,"click",()=>{this.clearInput()})}clearInput(e=!0){this.inputField.value="";let t=new Event("input",{bubbles:!0,cancelable:!0});this.inputField.dispatchEvent(t),e&&this.inputField.focus()}handleInput(){this.inputField.value.length>0?(this.clearButton.classList.add("visible"),this.inputField.classList.add("has-content")):(this.clearButton.classList.remove("visible"),this.inputField.classList.remove("has-content"))}};var re=class{constructor(e,t){this._plugin=e,this._outline=t}createLiElement(e,t=e.level){var m;let n=(m=this._plugin.getCssVariableAsNumber("--dynamic-outline-tab-size"))!=null?m:24,l=createEl("li",{attr:{"data-heading-line":e.position.start.line,style:`padding-left: ${(t-1)*n}px !important`}}),h=createEl("a",{cls:`heading-level-${e.level}`,text:e.heading});return l.append(h),this._setupEventListener(l,e),l}updateLiElementLine(e,t){e.setAttribute("data-heading-line",t.position.start.line.toString()),this._setupEventListener(e,t)}_setupEventListener(e,t){e.onclick=()=>{if(this._outline.view.file){if(this._outline.view.leaf.openFile(this._outline.view.file,{eState:{line:t.position.start.line}}),setTimeout(()=>{this._outline.view.currentMode.applyScroll(t.position.start.line)},0),this._plugin.settings.resetSearchFieldOnHeadingClick){let n=this._outline.outlineWindow,l=n._getContainerElement().querySelector(".dynamic-outline-search-container");if(!l)return;new ee(this._plugin,l).clearInput(!1),n.removeHovered()}this._plugin.runCommand("editor:focus")}},e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")})}};var Ge=mt($e()),te=class te{constructor(e,t){this._latestHeadings=[];this._pinned=!1;this._plugin=e,this._outline=t,this._containerEl=this._createElement(),this._setupEventListeners()}get visible(){let e=this._containerEl.isConnected,t=this._containerEl.classList.contains("hidden");return e&&!t}set visible(e){this._containerEl.isConnected||this._connectToDOM(this._containerEl),this._containerEl.classList.toggle("hidden",!e)}get pinned(){return this._pinned}set pinned(e){this._pinned=e,this._outline.buttonPinned=e,this._plugin.settings.toggleOnHover&&!e&&this.hide()}toggle(){this.visible?this.hide():this.show()}show(e){if(!this.visible){if(this._checkForLocation(),this._setVisibilityBasedOnEditingToolbar(),this.update(),this._outline.buttonActive=!0,this._plugin.settings.autofocusSearchOnOpen){let t=this._containerEl.querySelector("input");t==null||t.focus()}this._plugin.settings.highlightCurrentHeading&&this.highlightCurrentHeading(e==null?void 0:e.scrollBlock)}}hide(){this.visible&&(this.visible=!1,this.removeHovered(),this._outline.buttonActive=!1,this._plugin.runCommand("editor:focus"),this._plugin.settings.toggleOnHover&&(this.pinned=!1))}destroy(){this._clearHideTimeout(),this._containerEl.remove()}update(){if(!this.visible)return;let e=(O,I)=>O.length===I.length&&O.every((W,z)=>W.heading===I[z].heading&&W.level===I[z].level),t=this._containerEl.querySelector("ul");if(!t)return;let n=new re(this._plugin,this._outline),l=this._outline.outlineHeadings.headings;if(l.length>0&&e(l,this._latestHeadings)){t.querySelectorAll("li").forEach((I,W)=>{n.updateLiElementLine(I,l[W])});return}this._latestHeadings=l,t.empty();let h=document.createDocumentFragment();if(this._plugin.settings.dynamicHeadingIndentation){let O=[];l==null||l.forEach(I=>{for(;O.length>0&&I.level<=O[O.length-1];)O.pop();O.push(I.level),h.append(n.createLiElement(I,O.length))})}else l==null||l.forEach(O=>{h.append(n.createLiElement(O))});t.appendChild(h);let m=this._plugin.settings.autoHideSearchBar&&l.length<this._plugin.settings.minHeadingsToHideSearchBar,T=this._containerEl.querySelector(".dynamic-outline-search-container");T==null||T.classList.toggle("hidden",m),this._plugin.settings.highlightCurrentHeading&&this.highlightCurrentHeading()}highlightCurrentHeading(e="nearest"){let t=(O,I)=>{let W=0,z=0,q=O.length-1;for(;z<=q;){let Q=Math.floor((z+q)/2);O[Q].position.start.line<=I?(W=Q,z=Q+1):q=Q-1}return W},n=this._outline.view.currentMode.getScroll(),l=this._outline.outlineHeadings.headings;if(l.length==0)return;let h=t(l,n+1);this._containerEl.querySelectorAll("li").forEach((O,I)=>O.classList.toggle("highlight",I===h));let T=this._containerEl.querySelector("li.highlight");T==null||T.scrollIntoView({behavior:"instant",block:e})}removeHovered(){this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}_setupEventListeners(){this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"input",()=>{this._filterItems()}),this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"keydown",e=>{this._handleKeyDown(e)}),this._plugin.settings.toggleOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this._handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this._handleMouseLeave()))}getVisibleLiItems(){return Array.from(this._containerEl.querySelectorAll("li:not(.outline-item-hidden"))}setHovered(e,t){e.forEach((n,l)=>{n.classList.toggle("hovered",l===t)})}_handleKeyDown(e){let t=()=>{let T=n.findIndex(O=>O.classList.contains("hovered"));return T!==-1?T:n.findIndex(O=>O.classList.contains("highlight"))||0},n=this.getVisibleLiItems(),l=n.length,h=t(),m=h;switch(e.key){case"ArrowDown":case"Tab":e.preventDefault(),m=e.shiftKey?(h+l-1)%l:(h+1)%l;break;case"ArrowUp":e.preventDefault(),m=(h+l-1)%l;break;case"Enter":e.preventDefault(),h>=0&&n[h].click();break;case"Escape":e.preventDefault(),this.hide();break}m!==h&&(this.setHovered(n,m),n[m].scrollIntoView({block:"nearest"}))}_filterItems(){let t=this._containerEl.querySelector("input").value.toLowerCase(),n=this._containerEl.querySelectorAll("li"),l;t===""?l=Array.from(n):l=Ge.go(t,Array.from(n),{key:"textContent"}).map(m=>m.obj),n.forEach(m=>{m.classList.toggle("outline-item-hidden",!l.includes(m))});let h=this.getVisibleLiItems();this.setHovered(h,0)}_handleMouseEnter(){this._clearHideTimeout(),this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}_handleMouseLeave(){this._plugin.settings.toggleOnHover&&!this.pinned&&(te.hideTimeout=setTimeout(()=>{this.hide()},100))}_getContainerElement(){return this._containerEl}_clearHideTimeout(){te.hideTimeout&&(clearTimeout(te.hideTimeout),te.hideTimeout=null)}_createElement(){let e=createEl("div",{cls:"hidden",attr:{id:"dynamic-outline"}}),t=new ee(this._plugin);e.appendChild(t.element);let n=createEl("div",{cls:"dynamic-outline-content-container"});return n.createEl("ul",{}),e.appendChild(n),e}_setVisibilityBasedOnEditingToolbar(){let e=document.getElementById("editingToolbarModalBar");if(!e){this.visible=!0;return}let t=e.classList.contains("top");if(this._containerEl.classList.toggle("obstruction-top",t),!t){let n=e.style.display;e.style.setProperty("display","none","important"),this.visible=!0,setTimeout(()=>{e.style.display=n},0);return}this.visible=!0}_checkForLocation(){this._containerEl.classList.toggle("location-left",this._plugin.settings.windowLocation==="left")}_connectToDOM(e){this._outline.view.contentEl.append(e)}};te.hideTimeout=null;var se=te;var Ye=require("obsidian"),oe=class{constructor(e,t){this._headings=[];this._plugin=e,this._outline=t}get headings(){return this._headings=this._getHeadingsForView(this._outline.view),this._headings}_getHeadingsForView(e){var m;let t=e==null?void 0:e.file;if(!t)return[];let l=(m=(this._plugin.app.metadataCache.getFileCache(t)||{}).headings)!=null?m:[];return this._cleanupHeadings(l)}_cleanupHeadings(e){let t=h=>(0,Ye.htmlToMarkdown)(h).replaceAll("*","").replaceAll("_","").replaceAll("`","").replaceAll("==","").replaceAll("~~",""),n=h=>h.replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/\[\[([^\]]+)\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]]+)\]\]/g,"$1"),l=e;return l.forEach(h=>{let m=h.heading;m=t(m),m=n(m),h.heading=m}),l}};var ue=class{constructor(e,t){this._plugin=e,this._view=t,this.outlineWindow=new se(this._plugin,this),this.outlineButton=new le(this._plugin,this),this.outlineHeadings=new oe(this._plugin,this),this.toggledAutomaticallyOnce=!1}get view(){return this._view}set view(e){this._view=e}get window(){return this.outlineWindow}get button(){return this.outlineButton}get headings(){return this.outlineHeadings.headings}get isButtonVisible(){return this.outlineButton.visible}set buttonActive(e){this.outlineButton.active=e}set buttonPinned(e){this.outlineButton.pinned=e}get windowVisible(){return this.outlineWindow.visible}get windowPinned(){return this.outlineWindow.pinned}set windowPinned(e){this.outlineWindow.pinned=e}toggleButton(e){e?this.showButton():this.hideButton()}showButton(){this.isButtonVisible||this.outlineButton.show()}hideButton(){this.isButtonVisible&&this.outlineButton.hide()}toggleWindow(e){e?this.showWindow():this.hideWindow()}showWindow(e){this.windowVisible||this.outlineWindow.show(e)}hideWindow(e){this.windowVisible&&(e?se.hideTimeout=setTimeout(()=>{this.outlineWindow.hide()},e):this.outlineWindow.hide())}updateWindow(){this.outlineWindow.update()}clearWindowHideTimeout(){this.outlineWindow._clearHideTimeout()}};var ce=class p{constructor(e){this._outlines=new Map;this._plugin=e,this._setupEventListeners()}static initialize(e){return p.instance||(p.instance=new p(e)),p.instance}static getInstance(){if(!p.instance)throw new Error("OutlineStateManager not initialized");return p.instance}getActiveMDView(){return this._plugin.app.workspace.getActiveViewOfType(Ne.MarkdownView)}getVisibleMDViews(){return this._plugin.app.workspace.getLeavesOfType("markdown").map(t=>t.view).filter(t=>t.contentEl)}getOutlineInView(e){let t=this._getViewId(e);return this._outlines.has(t)||this._outlines.set(t,new ue(this._plugin,e)),this._outlines.get(t)}updateViewForOutline(e){let t=this.getOutlineInView(e);t.view=e}handleActiveLeafChange(e){this._updateOutlineVisibility(e)}handleMetadataChanged(){let e=this.getActiveMDView();e&&this._updateOutlineVisibility(e,!0)}createButtonsInOpenViews(){let e=this.getVisibleMDViews();e.length!==0&&e.map(t=>this._createButtonInView(t))}removeAll(){this._outlines.forEach(e=>{e.window.destroy(),e.button.destroy()}),this._outlines.clear()}_setupEventListeners(){this._plugin.registerEvent(this._plugin.app.workspace.on("active-leaf-change",e=>{if((e==null?void 0:e.view)instanceof Ne.MarkdownView){let t=e.view,n=this.getOutlineInView(t);n.view=t}}))}_getViewId(e){return e.leaf.id}_createButtonInView(e){let t=this.getOutlineInView(e);!t.isButtonVisible&&t.headings&&t.headings.length>1&&t.showButton()}_updateOutlineVisibility(e,t=!1){let n=this.getOutlineInView(e),l=n.headings&&n.headings.length>1,h=l&&n.headings.length>=this._plugin.settings.minimumHeadings;n.toggleButton(l);let m=!l||!t&&this._plugin.settings.toggleAutomatically&&!h,T=!t&&!n.toggledAutomaticallyOnce&&this._plugin.settings.toggleAutomatically&&h&&this._isEnoughWindowWidth(e);m?(n.hideWindow(),n.windowPinned=!1):T&&(n.showWindow(),n.windowPinned=!0),n.windowVisible&&(n.toggledAutomaticallyOnce=!0,n.updateWindow())}_isEnoughWindowWidth(e){var l;if(this._plugin.settings.contentOverlap==="allow")return!0;let t=e.contentEl.innerWidth,n=(l=this._plugin.getCssVariableAsNumber("--dynamic-outline-window-width"))!=null?l:256;switch(this._plugin.settings.contentOverlap){case"partial":return t-700>=n;case"prevent":return(t-700)/2>=n;default:return!0}}};var Y=require("obsidian");var Je=require("obsidian");var S=class{constructor(e,t){this.plugin=e,this.containerEl=t}};var de=class extends S{display(){new Je.Setting(this.containerEl).setName("Autofocus search field").setDesc("Focus the search field on window open. Useful for immediate keyboard control.").addToggle(e=>{e.setValue(this.plugin.settings.autofocusSearchOnOpen).onChange(async t=>{this.plugin.settings.autofocusSearchOnOpen=t,await this.plugin.saveSettings()})})}};var Qe=require("obsidian");var he=class extends S{display(){let e,t=this.plugin.settings.highlightCurrentHeading;new Qe.Setting(this.containerEl).setName("Highlight active heading").setDesc(F("Highlight current outline heading while scrolling down the file.")).addButton(n=>{e=n,n.setButtonText("Reload plugin"),n.setTooltip("Requires a plugin reload to take effect."),n.setDisabled(!0),n.setClass("dynamic-outline-reload"),n.setCta(),n.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(n=>{n.setValue(this.plugin.settings.highlightCurrentHeading).onChange(async l=>{this.plugin.settings.highlightCurrentHeading=l,await this.plugin.saveSettings(),e.setDisabled(l===t)})})}};var Xe=require("obsidian");var ge=class extends S{display(){new Xe.Setting(this.containerEl).setName("Reset search field on jump").setDesc("Erase the search field contents after clicking a heading.").addToggle(e=>{e.setValue(this.plugin.settings.resetSearchFieldOnHeadingClick).onChange(async t=>{this.plugin.settings.resetSearchFieldOnHeadingClick=t,await this.plugin.saveSettings()})})}};var Se=require("obsidian");var pe=class extends S{display(){let e,t=this.plugin.settings.toggleAutomatically;new Se.Setting(this.containerEl).setName("Toggle automatically on file open").setDesc("Show and hide outline automatically based on the number of headings in the file.").addButton(h=>{e=h,h.setButtonText("Reload plugin"),h.setTooltip("Requires a plugin reload to take effect."),h.setDisabled(!0),h.setClass("dynamic-outline-reload"),h.setCta(),h.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(h=>{h.setValue(this.plugin.settings.toggleAutomatically).onChange(async m=>{this.plugin.settings.toggleAutomatically=m,await this.plugin.saveSettings(),e.setDisabled(m===t),l.setDisabled(!m),n.setDisabled(!m)})});let n=new Se.Setting(this.containerEl).setName("Content overlap").setDesc("Set how much content overlap is acceptable for the automatic outline to trigger. Choosing to prevent overlap will show the outline less frequently, particularly when horizontal space is limited.").addDropdown(h=>{h.addOption("allow","Allow").addOption("partial","Partial").addOption("prevent","Prevent").setValue(this.plugin.settings.contentOverlap).onChange(async m=>{this.plugin.settings.contentOverlap=m,await this.plugin.saveSettings()})}).setClass("dynamic-outline-setting-item-hidden").setDisabled(!this.plugin.settings.toggleAutomatically),l=new Se.Setting(this.containerEl).setName("Minimum number of headings").setDesc("Set the minimum number of headings to trigger the outline.").addSlider(h=>{h.setLimits(2,10,1).setDynamicTooltip().setValue(this.plugin.settings.minimumHeadings).onChange(async m=>{this.plugin.settings.minimumHeadings=m,await this.plugin.saveSettings()})}).setClass("dynamic-outline-setting-item-hidden").setDisabled(!this.plugin.settings.toggleAutomatically)}};var Ze=require("obsidian");var me=class extends S{display(){let e,t=this.plugin.settings.toggleOnHover;new Ze.Setting(this.containerEl).setName("Toggle on button hover").setDesc(F("Hover to show or hide the outline, click to pin.")).addButton(n=>{e=n,n.setButtonText("Reload plugin"),n.setTooltip("Requires a plugin reload to take effect."),n.setDisabled(!0),n.setClass("dynamic-outline-reload"),n.setCta(),n.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(n=>{n.setValue(this.plugin.settings.toggleOnHover).onChange(async l=>{this.plugin.settings.toggleOnHover=l,await this.plugin.saveSettings(),e.setDisabled(l===t)})})}};var je=require("obsidian");var ve=class extends S{display(){let e,t=this.plugin.settings.windowLocation;new je.Setting(this.containerEl).setName("Outline location").setDesc(F("Set the location for both the window and the button.")).addButton(n=>{e=n,n.setButtonText("Reload plugin"),n.setTooltip("Requires a plugin reload to take effect."),n.setDisabled(!0),n.setClass("dynamic-outline-reload"),n.setCta(),n.onClick(()=>{this.plugin.reloadPlugin()})}).addDropdown(n=>n.addOption("right","Right").addOption("left","Left").setValue(this.plugin.settings.windowLocation).onChange(async l=>{this.plugin.settings.windowLocation=l,await this.plugin.saveSettings(),e.setDisabled(l===t)}))}};var et=require("obsidian");var fe=class extends S{display(){let e,t=this.plugin.settings.dynamicHeadingIndentation;new et.Setting(this.containerEl).setName("Dynamic heading indentation").setDesc(F("Adjusts heading indentation based on the previous heading level for improved visual hierarchy.")).addButton(n=>{e=n,n.setButtonText("Reload plugin"),n.setTooltip("Requires a plugin reload to take effect."),n.setDisabled(!0),n.setClass("dynamic-outline-reload"),n.setCta(),n.onClick(()=>{this.plugin.reloadPlugin()})}).addToggle(n=>{n.setValue(this.plugin.settings.dynamicHeadingIndentation).onChange(async l=>{this.plugin.settings.dynamicHeadingIndentation=l,await this.plugin.saveSettings(),e.setDisabled(l===t)})})}};var tt=require("obsidian");var we=class extends S{display(){new tt.Setting(this.containerEl).setName("Auto-hide search bar").setDesc("The search bar is automatically hidden when there is only a few headings in the note.").addToggle(e=>{e.setValue(this.plugin.settings.autoHideSearchBar).onChange(async t=>{this.plugin.settings.autoHideSearchBar=t,await this.plugin.saveSettings()})})}};var it={autofocusSearchOnOpen:!0,dynamicHeadingIndentation:!0,highlightCurrentHeading:!0,minimumHeadings:1,resetSearchFieldOnHeadingClick:!0,toggleAutomatically:!1,contentOverlap:"allow",toggleOnHover:!1,windowLocation:"right",autoHideSearchBar:!0,minHeadingsToHideSearchBar:5};function F(p){return(0,Y.sanitizeHTMLToDom)(p)}var Me=class extends Y.PluginSettingTab{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),new Y.Setting(e).setName(F("Window behavior")).setHeading().setDesc("Customize the visibility and behavior of the outline window."),new me(this.plugin,e).display(),new pe(this.plugin,e).display(),new Y.Setting(e).setName(F("Navigation and search")).setHeading().setDesc("Configure how you move through and search your outline."),new he(this.plugin,e).display(),new we(this.plugin,e).display(),new de(this.plugin,e).display(),new ge(this.plugin,e).display(),new Y.Setting(e).setName(F("Layout")).setHeading().setDesc(F('To customize the appearance of the Dynamic Outline, please use the <a href="https://obsidian.md/plugins?id=obsidian-style-settings">Style Settings</a> plugin.')),new fe(this.plugin,e).display(),new ve(this.plugin,e).display()}};var _e="dynamic-outline",Pe="dynamic-outline-button",We="list",De=class extends J.Plugin{constructor(){super(...arguments);this.debounceHandler=(0,J.debounce)(t=>{let n=t.target;if(!(n!=null&&n.classList.contains("dynamic-outline-content-container"))){let l=this.stateManager.getActiveMDView();l&&this.stateManager.getOutlineInView(l).window.highlightCurrentHeading()}},0)}async onload(){await this.loadSettings(),this.addSettingTab(new Me(this.app,this)),this.app.workspace.trigger("parse-style-settings"),this.stateManager=ce.initialize(this),this.app.workspace.onLayoutReady(()=>{this.stateManager.createButtonsInOpenViews()}),this.registerEvent(this.app.workspace.on("active-leaf-change",t=>{if(!((t==null?void 0:t.view)instanceof J.MarkdownView))return;let n=t.view;this.stateManager.updateViewForOutline(n),this.stateManager.handleActiveLeafChange(n)})),this.registerEvent(this.app.metadataCache.on("changed",()=>{this.stateManager.handleMetadataChanged()})),this.settings.highlightCurrentHeading&&(activeWindow.document.addEventListener("scroll",this.debounceHandler,!0),this.registerEvent(this.app.metadataCache.on("changed",()=>{let t=this.stateManager.getActiveMDView();t&&this.stateManager.getOutlineInView(t).window.highlightCurrentHeading()}))),this.addCommand({id:"toggle-dynamic-outline",name:"Toggle for current file",checkCallback:t=>{let n=this.stateManager.getActiveMDView();return n?(t||this.stateManager.getOutlineInView(n).button.handleClick(),!0):!1}})}onunload(){this.stateManager.removeAll(),activeWindow.document.removeEventListener("scroll",this.debounceHandler,!0)}async loadSettings(){this.settings=Object.assign({},it,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async reloadPlugin(){let t=this.app.plugins,n=this.app.setting;t.enabledPlugins.has(_e)&&(await t.disablePlugin(_e),await t.enablePlugin(_e),await n.openTabById(_e),new J.Notice("Dynamic Outline has been reloaded"))}getCssVariableAsNumber(t,n=document.body){let l=getComputedStyle(n).getPropertyValue(t).trim(),h=parseFloat(l);return isNaN(h)?null:h}runCommand(t){this.app.commands.executeCommandById(t)}};

/* nosourcemap */
