/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var gt=Object.create;var Me=Object.defineProperty;var vt=Object.getOwnPropertyDescriptor;var pt=Object.getOwnPropertyNames;var mt=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty;var wt=(v,e)=>()=>(e||v((e={exports:{}}).exports,e),e.exports),_t=(v,e)=>{for(var t in e)Me(v,t,{get:e[t],enumerable:!0})},Ke=(v,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of pt(e))!ft.call(v,r)&&r!==t&&Me(v,r,{get:()=>e[r],enumerable:!(n=vt(e,r))||n.enumerable});return v};var bt=(v,e,t)=>(t=v!=null?gt(mt(v)):{},Ke(e||!v||!v.__esModule?Me(t,"default",{value:v,enumerable:!0}):t,v)),yt=v=>Ke(Me({},"__esModule",{value:!0}),v);var Ye=wt((Ge,De)=>{((v,e)=>{typeof define=="function"&&define.amd?define([],e):typeof De=="object"&&De.exports?De.exports=e():v.fuzzysort=e()})(Ge,v=>{"use strict";var e=(a,i)=>{if(!a||!i)return S;var s=Q(a);Z(i)||(i=z(i));var c=s.bitflags;return(c&i._bitflags)!==c?S:ie(s,i)},t=(a,i,s)=>{if(!a)return s!=null&&s.all?qe(i,s):We;var c=Q(a),d=c.bitflags,u=c.containsSpace,l=F((s==null?void 0:s.threshold)||0),g=(s==null?void 0:s.limit)||Pe,h=0,f=0,w=i.length;function k(j){h<g?(Le.add(j),++h):(++f,j._score>Le.peek()._score&&Le.replaceTop(j))}if(s!=null&&s.key)for(var B=s.key,b=0;b<w;++b){var x=i[b],y=He(x,B);if(y&&(Z(y)||(y=z(y)),(d&y._bitflags)===d)){var O=ie(c,y);O!==S&&(O._score<l||(O.obj=x,k(O)))}}else if(s!=null&&s.keys){var U=s.keys,N=U.length;e:for(var b=0;b<w;++b){var x=i[b];{for(var I=0,_=0;_<N;++_){var B=U[_],y=He(x,B);if(!y){ke[_]=se;continue}Z(y)||(y=z(y)),ke[_]=y,I|=y._bitflags}if((d&I)!==d)continue}if(u)for(let E=0;E<c.spaceSearches.length;E++)J[E]=P;for(var _=0;_<N;++_){if(y=ke[_],y===se){ne[_]=se;continue}if(ne[_]=ie(c,y,!1,u),ne[_]===S){ne[_]=se;continue}if(u)for(let H=0;H<c.spaceSearches.length;H++){if(X[H]>-1e3&&J[H]>P){var T=(J[H]+X[H])/4;T>J[H]&&(J[H]=T)}X[H]>J[H]&&(J[H]=X[H])}}if(u){for(let E=0;E<c.spaceSearches.length;E++)if(J[E]===P)continue e}else{var m=!1;for(let E=0;E<N;E++)if(ne[E]._score!==P){m=!0;break}if(!m)continue}var W=new M(N);for(let E=0;E<N;E++)W[E]=ne[E];if(u){var D=0;for(let E=0;E<c.spaceSearches.length;E++)D+=J[E]}else{var D=P;for(let H=0;H<N;H++){var O=W[H];if(O._score>-1e3&&D>P){var T=(D+O._score)/4;T>D&&(D=T)}O._score>D&&(D=O._score)}}if(W.obj=x,W._score=D,s!=null&&s.scoreFn){if(D=s.scoreFn(W),!D)continue;D=F(D),W._score=D}D<l||k(W)}}else for(var b=0;b<w;++b){var y=i[b];if(y&&(Z(y)||(y=z(y)),(d&y._bitflags)===d)){var O=ie(c,y);O!==S&&(O._score<l||k(O))}}if(h===0)return We;for(var G=new Array(h),b=h-1;b>=0;--b)G[b]=Le.poll();return G.total=h+f,G},n=(a,i="<b>",s="</b>")=>{for(var c=typeof i=="function"?i:void 0,d=a.target,u=d.length,l=a.indexes,g="",h=0,f=0,w=!1,k=[],B=0;B<u;++B){var b=d[B];if(l[f]===B){if(++f,w||(w=!0,c?(k.push(g),g=""):g+=i),f===l.length){c?(g+=b,k.push(c(g,h++)),g="",k.push(d.substr(B+1))):g+=b+s+d.substr(B+1);break}}else w&&(w=!1,c?(k.push(c(g,h++)),g=""):g+=s);g+=b}return c?k:g},r=a=>{typeof a=="number"?a=""+a:typeof a!="string"&&(a="");var i=Ie(a);return L(a,{_targetLower:i._lower,_targetLowerCodes:i.lowerCodes,_bitflags:i.bitflags})},o=()=>{xe.clear(),Ae.clear()};class p{get indexes(){return this._indexes.slice(0,this._indexes.len).sort((i,s)=>i-s)}set indexes(i){return this._indexes=i}highlight(i,s){return n(this,i,s)}get score(){return V(this._score)}set score(i){this._score=F(i)}}class M extends Array{get score(){return V(this._score)}set score(i){this._score=F(i)}}var L=(a,i)=>{var c,d,u,l,g,h,f;let s=new p;return s.target=a,s.obj=(c=i.obj)!=null?c:S,s._score=(d=i._score)!=null?d:P,s._indexes=(u=i._indexes)!=null?u:[],s._targetLower=(l=i._targetLower)!=null?l:"",s._targetLowerCodes=(g=i._targetLowerCodes)!=null?g:S,s._nextBeginningIndexes=(h=i._nextBeginningIndexes)!=null?h:S,s._bitflags=(f=i._bitflags)!=null?f:0,s},V=a=>a===P?0:a>1?a:Math.E**(((-a+1)**.04307-1)*-2),F=a=>a===0?P:a>1?a:1-Math.pow(Math.log(a)/-2+1,1/.04307),R=a=>{typeof a=="number"?a=""+a:typeof a!="string"&&(a=""),a=a.trim();var i=Ie(a),s=[];if(i.containsSpace){var c=a.split(/\s+/);c=[...new Set(c)];for(var d=0;d<c.length;d++)if(c[d]!==""){var u=Ie(c[d]);s.push({lowerCodes:u.lowerCodes,_lower:c[d].toLowerCase(),containsSpace:!1})}}return{lowerCodes:i.lowerCodes,_lower:i._lower,containsSpace:i.containsSpace,bitflags:i.bitflags,spaceSearches:s}},z=a=>{if(a.length>999)return r(a);var i=xe.get(a);return i!==void 0||(i=r(a),xe.set(a,i)),i},Q=a=>{if(a.length>999)return R(a);var i=Ae.get(a);return i!==void 0||(i=R(a),Ae.set(a,i)),i},qe=(a,i)=>{var s=[];s.total=a.length;var c=(i==null?void 0:i.limit)||Pe;if(i!=null&&i.key)for(var d=0;d<a.length;d++){var u=a[d],l=He(u,i.key);if(l!=S){Z(l)||(l=z(l));var g=L(l.target,{_score:l._score,obj:u});if(s.push(g),s.length>=c)return s}}else if(i!=null&&i.keys)for(var d=0;d<a.length;d++){for(var u=a[d],h=new M(i.keys.length),f=i.keys.length-1;f>=0;--f){var l=He(u,i.keys[f]);if(!l){h[f]=se;continue}Z(l)||(l=z(l)),l._score=P,l._indexes.len=0,h[f]=l}if(h.obj=u,h._score=P,s.push(h),s.length>=c)return s}else for(var d=0;d<a.length;d++){var l=a[d];if(l!=S&&(Z(l)||(l=z(l)),l._score=P,l._indexes.len=0,s.push(l),s.length>=c))return s}return s},ie=(a,i,s=!1,c=!1)=>{if(s===!1&&a.containsSpace)return ot(a,i,c);for(var d=a._lower,u=a.lowerCodes,l=u[0],g=i._targetLowerCodes,h=u.length,f=g.length,b=0,w=0,k=0;;){var B=l===g[w];if(B){if(q[k++]=w,++b,b===h)break;l=u[b]}if(++w,w>=f)return S}var b=0,x=!1,y=0,O=i._nextBeginningIndexes;O===S&&(O=i._nextBeginningIndexes=ct(i.target)),w=q[0]===0?0:O[q[0]-1];var U=0;if(w!==f)for(;;)if(w>=f){if(b<=0||(++U,U>200))break;--b;var N=Ee[--y];w=O[N]}else{var B=u[b]===g[w];if(B){if(Ee[y++]=w,++b,b===h){x=!0;break}++w}else w=O[w]}var I=h<=1?-1:i._targetLower.indexOf(d,q[0]),_=!!~I,T=_?I===0||i._nextBeginningIndexes[I-1]===I:!1;if(_&&!T){for(var m=0;m<O.length;m=O[m])if(!(m<=I)){for(var W=0;W<h&&u[W]===i._targetLowerCodes[m+W];W++);if(W===h){I=m,T=!0;break}}}var D=E=>{for(var H=0,$e=0,$=1;$<h;++$)E[$]-E[$-1]!==1&&(H-=E[$],++$e);var ht=E[h-1]-E[0]-(h-1);if(H-=(12+ht)*$e,E[0]!==0&&(H-=E[0]*E[0]*.2),!x)H*=1e3;else{for(var Fe=1,$=O[0];$<f;$=O[$])++Fe;Fe>24&&(H*=(Fe-24)*10)}return H-=(f-h)/2,_&&(H/=1+h*h*1),T&&(H/=1+h*h*1),H-=(f-h)/2,H};if(x)if(T){for(var m=0;m<h;++m)q[m]=I+m;var G=q,j=D(q)}else var G=Ee,j=D(Ee);else{if(_)for(var m=0;m<h;++m)q[m]=I+m;var G=q,j=D(G)}i._score=j;for(var m=0;m<h;++m)i._indexes[m]=G[m];i._indexes.len=h;let Ce=new p;return Ce.target=i.target,Ce._score=i._score,Ce._indexes=i._indexes,Ce},ot=(a,i,s)=>{for(var c=new Set,d=0,u=S,l=0,g=a.spaceSearches,h=g.length,f=0,w=()=>{for(let T=f-1;T>=0;T--)i._nextBeginningIndexes[Oe[T*2+0]]=Oe[T*2+1]},k=!1,_=0;_<h;++_){X[_]=P;var B=g[_];if(u=ie(B,i),s){if(u===S)continue;k=!0}else if(u===S)return w(),S;var b=_===h-1;if(!b){var x=u._indexes,y=!0;for(let m=0;m<x.len-1;m++)if(x[m+1]-x[m]!==1){y=!1;break}if(y){var O=x[x.len-1]+1,U=i._nextBeginningIndexes[O-1];for(let m=O-1;m>=0&&U===i._nextBeginningIndexes[m];m--)i._nextBeginningIndexes[m]=O,Oe[f*2+0]=m,Oe[f*2+1]=U,f++}}d+=u._score/h,X[_]=u._score/h,u._indexes[0]<l&&(d-=(l-u._indexes[0])*2),l=u._indexes[0];for(var N=0;N<u._indexes.len;++N)c.add(u._indexes[N])}if(s&&!k)return S;w();var I=ie(a,i,!0);if(I!==S&&I._score>d){if(s)for(var _=0;_<h;++_)X[_]=I._score/h;return I}s&&(u=i),u._score=d;var _=0;for(let T of c)u._indexes[_++]=T;return u._indexes.len=_,u},Je=a=>a.replace(/\p{Script=Latin}+/gu,i=>i.normalize("NFD")).replace(/[\u0300-\u036f]/g,""),Ie=a=>{a=Je(a);for(var i=a.length,s=a.toLowerCase(),c=[],d=0,u=!1,l=0;l<i;++l){var g=c[l]=s.charCodeAt(l);if(g===32){u=!0;continue}var h=g>=97&&g<=122?g-97:g>=48&&g<=57?26:g<=127?30:31;d|=1<<h}return{lowerCodes:c,bitflags:d,containsSpace:u,_lower:s}},ut=a=>{for(var i=a.length,s=[],c=0,d=!1,u=!1,l=0;l<i;++l){var g=a.charCodeAt(l),h=g>=65&&g<=90,f=h||g>=97&&g<=122||g>=48&&g<=57,w=h&&!d||!u||!f;d=h,u=f,w&&(s[c++]=l)}return s},ct=a=>{a=Je(a);for(var i=a.length,s=ut(a),c=[],d=s[0],u=0,l=0;l<i;++l)d>l?c[l]=d:(d=s[++u],c[l]=d===void 0?i:d);return c},xe=new Map,Ae=new Map,q=[],Ee=[],Oe=[],J=[],X=[],ke=[],ne=[],He=(a,i)=>{var s=a[i];if(s!==void 0)return s;if(typeof i=="function")return i(a);var c=i;Array.isArray(i)||(c=i.split("."));for(var d=c.length,u=-1;a&&++u<d;)a=a[c[u]];return a},Z=a=>typeof a=="object"&&typeof a._bitflags=="number",Pe=1/0,P=-Pe,We=[];We.total=0;var S=null,se=r(""),dt=a=>{var i=[],s=0,c={},d=u=>{for(var l=0,g=i[l],h=1;h<s;){var f=h+1;l=h,f<s&&i[f]._score<i[h]._score&&(l=f),i[l-1>>1]=i[l],h=1+(l<<1)}for(var w=l-1>>1;l>0&&g._score<i[w]._score;w=(l=w)-1>>1)i[l]=i[w];i[l]=g};return c.add=u=>{var l=s;i[s++]=u;for(var g=l-1>>1;l>0&&u._score<i[g]._score;g=(l=g)-1>>1)i[l]=i[g];i[l]=u},c.poll=u=>{if(s!==0){var l=i[0];return i[0]=i[--s],d(),l}},c.peek=u=>{if(s!==0)return i[0]},c.replaceTop=u=>{i[0]=u,d()},c},Le=dt();return{single:e,go:t,prepare:r,cleanup:o}})});var Et={};_t(Et,{BUTTON_CLASS:()=>Ne,LUCID_ICON_NAME:()=>ze,WINDOW_ID:()=>ye,default:()=>Be});module.exports=yt(Et);var K=require("obsidian");var Re=require("obsidian");var Ue=require("obsidian"),le=class{constructor(e,t){this._plugin=e,this._outline=t,this._containerEl=this._createElement(),this._setupEventListeners()}get visible(){let e=this._containerEl.isConnected,t=this._containerEl.classList.contains("hidden");return e&&!t}set visible(e){this._containerEl.isConnected||this._connectToDOM(this._containerEl),this._containerEl.classList.toggle("hidden",!e)}get active(){return this._containerEl.classList.contains("button-active")}set active(e){this._containerEl.classList.toggle("button-active",e)}set pinned(e){this._containerEl.classList.toggle("pinned",e)}getContainerElement(){return this._containerEl}_setupEventListeners(){this._plugin.registerDomEvent(this._containerEl,"click",()=>this.handleClick()),this._plugin.settings.revealOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this._handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this._handleMouseLeave()))}_createElement(){let e=createEl("button",{cls:`clickable-icon view-action ${Ne} hidden`,attr:{"aria-label":"Toggle Dynamic Outline"}});return(0,Ue.setIcon)(e,ze),this._connectToDOM(e),e}_connectToDOM(e){if(this._plugin.settings.outlinePosition==="right"){let t=this._outline.view.containerEl.querySelector(".view-actions");t==null||t.insertBefore(e,t==null?void 0:t.firstChild)}else if(this._plugin.settings.outlinePosition==="left"){let t=this._outline.view.containerEl.querySelector(".view-header-left .view-header-nav-buttons");t==null||t.appendChild(e)}else console.error("Invalid window location: ",this._plugin.settings.outlinePosition)}_handleMouseEnter(){this._outline.windowVisible||this._outline.showWindow({scrollBlock:"start"}),this._plugin.settings.revealOnHover&&this._outline.clearWindowHideTimeout()}_handleMouseLeave(){this._outline.windowVisible&&!this._outline.windowPinned&&this._outline.hideWindow({timeout:100})}handleClick(){if(this._outline.windowVisible){if(this._plugin.settings.revealOnHover)if(this._outline.windowPinned)this._outline.windowPinned=!1,this._outline.clearWindowHideTimeout();else{this._outline.windowPinned=!0;return}this._outline.hideWindow()}else this._outline.showWindow({scrollBlock:"start"}),this._plugin.settings.revealOnHover&&(this._outline.windowPinned=!0)}show(){this.visible||(this.active=this.visible,this.visible=!0)}hide(){this.visible&&(this.visible=!1)}destroy(){this._containerEl.remove()}};var ee=class{constructor(e,t){this._plugin=e,t?(this.element=t,this.inputField=this.element.querySelector("input"),this.clearButton=this.element.querySelector(".dynamic-outline-search-clear-button")):(this.element=createEl("div",{cls:"dynamic-outline-search-container"}),this.inputField=createEl("input",{attr:{placeholder:"Search headings\u2026",type:"search"}}),this.element.appendChild(this.inputField),this.clearButton=createEl("div",{cls:"search-input-clear-button dynamic-outline-search-clear-button",attr:{"aria-label":"Clear search"}}),this.element.appendChild(this.clearButton),this.setupEventListeners())}setupEventListeners(){this._plugin.registerDomEvent(this.inputField,"input",()=>{this.handleInput()}),this._plugin.registerDomEvent(this.clearButton,"click",()=>{this.clearInput()})}clearInput(e=!0){this.inputField.value="";let t=new Event("input",{bubbles:!0,cancelable:!0});this.inputField.dispatchEvent(t),e&&this.inputField.focus()}handleInput(){this.inputField.value.length>0?(this.clearButton.classList.add("visible"),this.inputField.classList.add("has-content")):(this.clearButton.classList.remove("visible"),this.inputField.classList.remove("has-content"))}};var re=class{constructor(e,t){this._plugin=e,this._outline=t}createLiElement(e,t=e.level){let n=createEl("li",{cls:`tab-level-${t} li-heading-level-${e.level}`,attr:{"data-heading-line":e.position.start.line}}),r=createEl("a",{cls:`heading-level-${e.level}`,text:e.heading});return n.append(r),this._setupEventListener(n,e),n}updateLiElementLine(e,t){e.setAttribute("data-heading-line",t.position.start.line.toString()),this._setupEventListener(e,t)}_setupEventListener(e,t){e.onclick=()=>this._handleClick(t),e.addEventListener("mouseenter",()=>{e.classList.add("hovered")}),e.addEventListener("mouseleave",()=>{e.classList.remove("hovered")})}_handleClick(e){this._outline.view.file&&(this._navigateToHeading(e),this._resetSearchField(),this._plugin.runCommand("editor:focus"))}_navigateToHeading(e){let t=this._outline.view.file;t&&(this._outline.view.leaf.openFile(t,{eState:{line:e.position.start.line}}),setTimeout(()=>{this._outline.view.currentMode.applyScroll(e.position.start.line)},0),this._plugin.settings.hideOutlineOnJump&&this._outline.outlineWindow.hide())}_resetSearchField(){if(this._plugin.settings.disableSearchClearOnJump)return;let e=this._outline.outlineWindow,t=e.getContainerElement().querySelector(".dynamic-outline-search-container");if(!t)return;new ee(this._plugin,t).clearInput(!1),e.removeHovered()}};var Qe=bt(Ye()),te=class te{constructor(e,t){this.hiddenOnResize=!1;this._latestHeadings=[];this._pinned=!1;this._plugin=e,this._outline=t,this._containerEl=this._createElement(),this._setupEventListeners()}get visible(){let e=this._containerEl.isConnected,t=this._containerEl.classList.contains("hidden");return e&&!t}set visible(e){this._containerEl.isConnected||this._connectToDOM(this._containerEl),this._containerEl.classList.toggle("hidden",!e)}get pinned(){return this._pinned}set pinned(e){this._pinned=e,this._outline.buttonPinned=e,this._plugin.settings.revealOnHover&&!e&&this.hide()}toggle(){this.visible?this.hide():this.show()}show(e){if(!this.visible){if(this._checkForLocation(),this._setVisibilityBasedOnEditingToolbar(),this.update(),this._outline.buttonActive=!0,this.hiddenOnResize=!1,!this._plugin.settings.disableSearchFieldAutofocus){let t=this._containerEl.querySelector("input");t==null||t.focus()}this._plugin.settings.disableActiveHeadingHighlighting||this.highlightCurrentHeading(e==null?void 0:e.scrollBlock)}}hide(){this.visible&&(this.visible=!1,this.removeHovered(),this._outline.buttonActive=!1,this._plugin.runCommand("editor:focus"),this._plugin.settings.revealOnHover&&(this.pinned=!1))}destroy(){this._clearHideTimeout(),this._containerEl.remove()}update(){if(!this.visible)return;let e=(L,V)=>L.length===V.length&&L.every((F,R)=>F.heading===V[R].heading&&F.level===V[R].level),t=this._containerEl.querySelector("ul");if(!t)return;let n=new re(this._plugin,this._outline),r=this._outline.outlineHeadings.headings;if(r.length>0&&e(r,this._latestHeadings)){t.querySelectorAll("li").forEach((V,F)=>{n.updateLiElementLine(V,r[F])});return}this._latestHeadings=r,t.empty();let o=document.createDocumentFragment();if(this._plugin.settings.disableDynamicHeadingIndentation)r==null||r.forEach(L=>{o.append(n.createLiElement(L))});else{let L=[];r==null||r.forEach(V=>{for(;L.length>0&&V.level<=L[L.length-1];)L.pop();L.push(V.level),o.append(n.createLiElement(V,L.length))})}t.appendChild(o);let p=!this._plugin.settings.disableSearchBarAutoHide&&r.length<this._plugin.settings.minHeadingsToHideSearchBar,M=this._containerEl.querySelector(".dynamic-outline-search-container");M==null||M.classList.toggle("hidden",p),this._plugin.settings.disableActiveHeadingHighlighting||this.highlightCurrentHeading()}highlightCurrentHeading(e="nearest"){let t=(L,V)=>{let F=0,R=0,z=L.length-1;for(;R<=z;){let Q=Math.floor((R+z)/2);L[Q].position.start.line<=V?(F=Q,R=Q+1):z=Q-1}return F},n=this._outline.view.currentMode.getScroll(),r=this._outline.outlineHeadings.headings;if(r.length==0)return;let o=t(r,n+1);this._containerEl.querySelectorAll("li").forEach((L,V)=>L.classList.toggle("highlight",V===o));let M=this._containerEl.querySelector("li.highlight");M==null||M.scrollIntoView({behavior:"instant",block:e})}removeHovered(){this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}_setupEventListeners(){this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"input",()=>{this._filterItems()}),this._plugin.registerDomEvent(this._containerEl.querySelector("input"),"keydown",e=>{this._handleKeyDown(e)}),this._plugin.settings.revealOnHover&&(this._plugin.registerDomEvent(this._containerEl,"mouseenter",()=>this._handleMouseEnter()),this._plugin.registerDomEvent(this._containerEl,"mouseleave",()=>this._handleMouseLeave()))}getVisibleLiItems(){return Array.from(this._containerEl.querySelectorAll("li:not(.outline-item-hidden"))}setHovered(e,t){e.forEach((n,r)=>{n.classList.toggle("hovered",r===t)})}_handleKeyDown(e){let t=()=>{let M=n.findIndex(L=>L.classList.contains("hovered"));return M!==-1?M:n.findIndex(L=>L.classList.contains("highlight"))||0},n=this.getVisibleLiItems(),r=n.length,o=t(),p=o;switch(e.key){case"ArrowDown":case"Tab":e.preventDefault(),p=e.shiftKey?(o+r-1)%r:(o+1)%r;break;case"ArrowUp":e.preventDefault(),p=(o+r-1)%r;break;case"Enter":e.preventDefault(),o>=0&&n[o].click();break;case"Escape":e.preventDefault(),this.hide();break}p!==o&&(this.setHovered(n,p),n[p].scrollIntoView({block:"nearest"}))}_filterItems(){let t=this._containerEl.querySelector("input").value.toLowerCase(),n=this._containerEl.querySelectorAll("li"),r;t===""?r=Array.from(n):r=Qe.go(t,Array.from(n),{key:"textContent"}).map(p=>p.obj),n.forEach(p=>{p.classList.toggle("outline-item-hidden",!r.includes(p))});let o=this.getVisibleLiItems();this.setHovered(o,0)}_handleMouseEnter(){this._clearHideTimeout(),this.getVisibleLiItems().forEach(t=>{t.classList.remove("hovered")})}_handleMouseLeave(){this._plugin.settings.revealOnHover&&!this.pinned&&(te.hideTimeout=setTimeout(()=>{this.hide()},100))}getContainerElement(){return this._containerEl}_clearHideTimeout(){te.hideTimeout&&(clearTimeout(te.hideTimeout),te.hideTimeout=null)}_createElement(){let e=createEl("div",{cls:"hidden",attr:{id:"dynamic-outline"}}),t=new ee(this._plugin);e.appendChild(t.element);let n=createEl("div",{cls:"dynamic-outline-content-container"});return n.createEl("ul",{}),e.appendChild(n),e}_setVisibilityBasedOnEditingToolbar(){let e=document.getElementById("editingToolbarModalBar");if(!e){this.visible=!0;return}let t=e.classList.contains("top");if(this._containerEl.classList.toggle("obstruction-top",t),!t){let n=e.style.display;e.style.setProperty("display","none","important"),this.visible=!0,setTimeout(()=>{e.style.display=n},0);return}this.visible=!0}_checkForLocation(){this._containerEl.classList.toggle("location-left",this._plugin.settings.outlinePosition==="left")}_connectToDOM(e){this._outline.view.contentEl.append(e)}};te.hideTimeout=null;var ae=te;var Xe=require("obsidian"),oe=class{constructor(e,t){this._headings=[];this._plugin=e,this._outline=t}get headings(){return this._headings=this._getHeadingsForView(this._outline.view),this._headings}_getHeadingsForView(e){var p;let t=e==null?void 0:e.file;if(!t)return[];let r=(p=(this._plugin.app.metadataCache.getFileCache(t)||{}).headings)!=null?p:[];return this._cleanupHeadings(r)}_cleanupHeadings(e){let t=o=>(0,Xe.htmlToMarkdown)(o).replaceAll("*","").replaceAll("_","").replaceAll("`","").replaceAll("==","").replaceAll("~~",""),n=o=>o.replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/\[\[([^\]]+)\|([^\]]+)\]\]/g,"$2").replace(/\[\[([^\]]+)\]\]/g,"$1"),r=e;return r.forEach(o=>{let p=o.heading;p=t(p),p=n(p),o.heading=p}),r}};var ue=class{constructor(e,t){this._plugin=e,this._view=t,this.outlineWindow=new ae(this._plugin,this),this.outlineButton=new le(this._plugin,this),this.outlineHeadings=new oe(this._plugin,this),this.toggledAutomaticallyOnce=!1}get view(){return this._view}set view(e){this._view=e}get window(){return this.outlineWindow}get button(){return this.outlineButton}get headings(){return this.outlineHeadings.headings}get isButtonVisible(){return this.outlineButton.visible}set buttonActive(e){this.outlineButton.active=e}set buttonPinned(e){this.outlineButton.pinned=e}get windowVisible(){return this.outlineWindow.visible}get windowPinned(){return this.outlineWindow.pinned}set windowPinned(e){this.outlineWindow.pinned=e}toggleButton(e){e?this.showButton():this.hideButton()}showButton(){this.isButtonVisible||this.outlineButton.show()}hideButton(){this.isButtonVisible&&this.outlineButton.hide()}toggleWindow(e){e?this.showWindow():this.hideWindow()}showWindow(e){this.windowVisible||(this.outlineWindow.show(e),e!=null&&e.hiddenOnResize&&(this.outlineWindow.hiddenOnResize=e.hiddenOnResize))}hideWindow(e){this.windowVisible&&(e!=null&&e.timeout?ae.hideTimeout=setTimeout(()=>{this.outlineWindow.hide()},e==null?void 0:e.timeout):this.outlineWindow.hide(),e!=null&&e.hiddenOnResize&&(this.outlineWindow.hiddenOnResize=e.hiddenOnResize))}updateWindow(){this.outlineWindow.update()}clearWindowHideTimeout(){this.outlineWindow._clearHideTimeout()}};var ce=class v{constructor(e){this._outlines=new Map;this.mobileOutsideClickHandler=e=>{if(!this._plugin.app.isMobile)return;let t=this.getActiveMDView();if(!t)return;let n=this.getOutlineInView(t);if(!n.windowVisible)return;let r=n.window.getContainerElement(),o=n.button.getContainerElement(),p=e.target;!r.contains(p)&&!o.contains(p)&&n.hideWindow()};this._plugin=e,this._setupEventListeners()}static initialize(e){return v.instance||(v.instance=new v(e)),v.instance}static getInstance(){if(!v.instance)throw new Error("OutlineStateManager not initialized");return v.instance}getActiveMDView(){return this._plugin.app.workspace.getActiveViewOfType(Re.MarkdownView)}getVisibleMDViews(){return this._plugin.app.workspace.getLeavesOfType("markdown").map(t=>t.view).filter(t=>t.contentEl)}getOutlineInView(e){let t=this._getViewId(e);return this._outlines.has(t)||this._outlines.set(t,new ue(this._plugin,e)),this._outlines.get(t)}updateViewForOutline(e){let t=this.getOutlineInView(e);t.view=e}handleActiveLeafChange(e){this._updateOutlineVisibility(e)}handleMetadataChanged(){let e=this.getActiveMDView();e&&this._updateOutlineVisibility(e,!0)}handleResize(){if(!this._plugin.settings.avoidContentOverlap)return;let e=this.getVisibleMDViews();e.length!==0&&e.forEach(t=>{let n=this.getOutlineInView(t),r=n.windowVisible,o=this._plugin.settings.revealAutomaticallyOnFileOpen?this._isEnoughWidthForAutomaticToggle(t):this._isEnoughWidthForHideOnResize(t);r?o||n.hideWindow({hiddenOnResize:!0}):n.window.hiddenOnResize&&o&&(n.showWindow({hiddenOnResize:!1}),n.windowPinned=!0)})}createButtonsInOpenViews(){let e=this.getVisibleMDViews();e.length!==0&&e.map(t=>this._createButtonInView(t))}removeAll(){this._outlines.forEach(e=>{e.window.destroy(),e.button.destroy()}),this._outlines.clear()}_setupEventListeners(){this._plugin.registerEvent(this._plugin.app.workspace.on("active-leaf-change",e=>{if((e==null?void 0:e.view)instanceof Re.MarkdownView){let t=e.view,n=this.getOutlineInView(t);n.view=t}}))}_getViewId(e){return e.leaf.id}_createButtonInView(e){let t=this.getOutlineInView(e);!t.isButtonVisible&&t.headings&&t.headings.length>1&&t.showButton()}_updateOutlineVisibility(e,t=!1){let n=this.getOutlineInView(e),r=n.headings&&n.headings.length>1,o=r&&n.headings.length>=this._plugin.settings.minimumHeadingsToRevealAutomatically;n.toggleButton(r);let p=!r||!t&&this._plugin.settings.revealAutomaticallyOnFileOpen&&!o,M=!t&&!n.toggledAutomaticallyOnce&&this._plugin.settings.revealAutomaticallyOnFileOpen&&o&&this._isEnoughWidthForAutomaticToggle(e);p?(n.hideWindow(),n.windowPinned=!1):M&&(n.showWindow(),n.windowPinned=!0),n.windowVisible&&(n.toggledAutomaticallyOnce=!0,n.updateWindow())}_isEnoughWidthForAutomaticToggle(e){if(this._plugin.settings.handleContentOverlap==="allow")return!0;let t=this._plugin.settings.handleContentOverlap==="partial"?1:2;return this._calculateAvailableWidth(e,t)>=0}_isEnoughWidthForHideOnResize(e){return this._calculateAvailableWidth(e,2)>=0}_calculateAvailableWidth(e,t=1){var o;let n=e.contentEl.innerWidth,r=(o=this._plugin.getCssVariableAsNumber("--dynamic-outline-window-width"))!=null?o:256;return(n-700)/t-r}};var Y=require("obsidian");var Ze=require("obsidian");var C=class{constructor(e,t){this.plugin=e,this.containerEl=t}};var de=class extends C{display(){new Ze.Setting(this.containerEl).setName("Disable search field autofocus").setDesc("Enable to automatically focus the search field when the outline window opens. Allows immediate keyboard input.").addToggle(e=>{e.setValue(this.plugin.settings.disableSearchFieldAutofocus).onChange(async t=>{this.plugin.settings.disableSearchFieldAutofocus=t,await this.plugin.saveSettings()})})}};var je=require("obsidian");var A=class{constructor(e,t,n){this.button=t,this.initialValue=n,this.currentValue=n,this.button.setButtonText("Reload plugin"),this.button.setTooltip("Requires a plugin reload to take effect."),this.button.setDisabled(!0),this.button.setClass("dynamic-outline-reload"),this.button.setCta(),this.button.onClick(()=>{e.reloadPlugin()})}updateValue(e){this.currentValue=e,this.button.setDisabled(this.initialValue===this.currentValue)}};var he=class extends C{display(){let e,t=this.plugin.settings.disableActiveHeadingHighlighting;new je.Setting(this.containerEl).setName("Disable active heading highlighting").setDesc("Enable to highlight the corresponding heading in the outline as you scroll through the note.").addButton(n=>{e=n}).addToggle(n=>{let r=new A(this.plugin,e,t);n.setValue(this.plugin.settings.disableActiveHeadingHighlighting).onChange(async o=>{this.plugin.settings.disableActiveHeadingHighlighting=o,await this.plugin.saveSettings(),r.updateValue(o)})})}};var et=require("obsidian");var ge=class extends C{display(){new et.Setting(this.containerEl).setName("Disable search clear on jump").setDesc("Enable to prevent the search field from being cleared automatically after clicking a heading.").addToggle(e=>{e.setValue(this.plugin.settings.disableSearchClearOnJump).onChange(async t=>{this.plugin.settings.disableSearchClearOnJump=t,await this.plugin.saveSettings()})})}};var Se=require("obsidian");var ve=class extends C{display(){let e,t=this.plugin.settings.revealAutomaticallyOnFileOpen;new Se.Setting(this.containerEl).setName("Reveal automatically on file open").setDesc("Automatically show or hide the outline when opening a file, based on heading count.").addButton(o=>{e=o}).addToggle(o=>{let p=new A(this.plugin,e,t);o.setValue(this.plugin.settings.revealAutomaticallyOnFileOpen).onChange(async M=>{this.plugin.settings.revealAutomaticallyOnFileOpen=M,await this.plugin.saveSettings(),p.updateValue(M),r.setDisabled(!M),n.setDisabled(!M)})});let n=new Se.Setting(this.containerEl).setName("Handle content overlap").setDesc("Choose if the outline can overlap page content when space is limited, or if it should hide to prevent overlap.").addDropdown(o=>{o.addOption("allow","Allow").addOption("partial","Partial").addOption("prevent","Prevent").setValue(this.plugin.settings.handleContentOverlap).onChange(async p=>{this.plugin.settings.handleContentOverlap=p,await this.plugin.saveSettings()})}).setClass("dynamic-outline-setting-item-hidden").setDisabled(!this.plugin.settings.revealAutomaticallyOnFileOpen),r=new Se.Setting(this.containerEl).setName("Minimum number of headings").setDesc("Set the minimum heading count required to automatically show the outline on file open.").addSlider(o=>{o.setLimits(2,10,1).setDynamicTooltip().setValue(this.plugin.settings.minimumHeadingsToRevealAutomatically).onChange(async p=>{this.plugin.settings.minimumHeadingsToRevealAutomatically=p,await this.plugin.saveSettings()})}).setClass("dynamic-outline-setting-item-hidden").setDisabled(!this.plugin.settings.revealAutomaticallyOnFileOpen)}};var tt=require("obsidian");var pe=class extends C{display(){let e,t=this.plugin.settings.revealOnHover;new tt.Setting(this.containerEl).setName("Reveal on hover").setDesc("Show the outline when hovering over its button. Click the button to pin it open.").addButton(n=>{e=n}).addToggle(n=>{let r=new A(this.plugin,e,t);n.setValue(this.plugin.settings.revealOnHover).onChange(async o=>{this.plugin.settings.revealOnHover=o,await this.plugin.saveSettings(),r.updateValue(o)})})}};var it=require("obsidian");var me=class extends C{display(){let e,t=this.plugin.settings.outlinePosition;new it.Setting(this.containerEl).setName("Outline position").setDesc("Set the screen location for the outline window and its trigger button.").addButton(n=>{e=n}).addDropdown(n=>{let r=new A(this.plugin,e,t);n.addOption("right","Right").addOption("left","Left").setValue(this.plugin.settings.outlinePosition).onChange(async o=>{this.plugin.settings.outlinePosition=o,await this.plugin.saveSettings(),r.updateValue(o)})})}};var nt=require("obsidian");var fe=class extends C{display(){let e,t=this.plugin.settings.disableDynamicHeadingIndentation;new nt.Setting(this.containerEl).setName("Disable dynamic heading indentation").setDesc("Enable to adjust heading indentation based on the previous heading's level for improved visual hierarchy.").addButton(n=>{e=n}).addToggle(n=>{let r=new A(this.plugin,e,t);n.setValue(this.plugin.settings.disableDynamicHeadingIndentation).onChange(async o=>{this.plugin.settings.disableDynamicHeadingIndentation=o,await this.plugin.saveSettings(),r.updateValue(o)})})}};var at=require("obsidian");var we=class extends C{display(){new at.Setting(this.containerEl).setName("Disable search bar auto-hide").setDesc("Enable to automatically hide the search bar when the outline contains only a few headings.").addToggle(e=>{e.setValue(this.plugin.settings.disableSearchBarAutoHide).onChange(async t=>{this.plugin.settings.disableSearchBarAutoHide=t,await this.plugin.saveSettings()})})}};var st=require("obsidian");var _e=class extends C{display(){new st.Setting(this.containerEl).setName("Hide on jump").setDesc("Hide outline automatically when selecting a heading.").addToggle(e=>{e.setValue(this.plugin.settings.hideOutlineOnJump).onChange(async t=>{this.plugin.settings.hideOutlineOnJump=t,await this.plugin.saveSettings()})})}};var lt=require("obsidian");var be=class extends C{display(){let e,t=this.plugin.settings.avoidContentOverlap;new lt.Setting(this.containerEl).setName("Avoid content overlap").setDesc("Automatically hide the outline when the note is too narrow.").addButton(n=>{e=n}).addToggle(n=>{let r=new A(this.plugin,e,t);n.setValue(this.plugin.settings.avoidContentOverlap).onChange(async o=>{this.plugin.settings.avoidContentOverlap=o,await this.plugin.saveSettings(),r.updateValue(o)})})}};var rt={handleContentOverlap:"allow",disableActiveHeadingHighlighting:!1,disableDynamicHeadingIndentation:!1,disableSearchBarAutoHide:!1,disableSearchClearOnJump:!1,disableSearchFieldAutofocus:!1,hideOutlineOnJump:!1,minHeadingsToHideSearchBar:5,minimumHeadingsToRevealAutomatically:2,revealAutomaticallyOnFileOpen:!1,revealOnHover:!1,avoidContentOverlap:!1,outlinePosition:"right"};function Te(v){return(0,Y.sanitizeHTMLToDom)(v)}var Ve=class extends Y.PluginSettingTab{constructor(e,t){super(e,t),this.plugin=t}display(){let{containerEl:e}=this;e.empty(),new Y.Setting(e).setName(Te("Window behavior")).setHeading().setDesc("Customize the visibility and behavior of the outline window."),new me(this.plugin,e).display(),new pe(this.plugin,e).display(),new ve(this.plugin,e).display(),new be(this.plugin,e).display(),new _e(this.plugin,e).display(),new Y.Setting(e).setName(Te("Search bar")).setHeading().setDesc("Customize the search bar behavior."),new we(this.plugin,e).display(),new de(this.plugin,e).display(),new ge(this.plugin,e).display(),new Y.Setting(e).setName(Te("Outline content")).setHeading().setDesc(Te('To customize the appearance of the Dynamic Outline, please use the <a href="https://obsidian.md/plugins?id=obsidian-style-settings">Style Settings</a> plugin.')),new he(this.plugin,e).display(),new fe(this.plugin,e).display()}};var ye="dynamic-outline",Ne="dynamic-outline-button",ze="list",Be=class extends K.Plugin{constructor(){super(...arguments);this.highlightCurrentHeadingDebounceHandler=(0,K.debounce)(t=>{let n=t.target;if(!(n!=null&&n.classList.contains("dynamic-outline-content-container"))){let r=this.stateManager.getActiveMDView();r&&this.stateManager.getOutlineInView(r).window.highlightCurrentHeading()}},0);this.resizeDebounceHandler=(0,K.debounce)(()=>{this.stateManager.handleResize()},100)}async onload(){await this.loadSettings(),this.addSettingTab(new Ve(this.app,this)),this.app.workspace.trigger("parse-style-settings"),this.stateManager=ce.initialize(this),this.app.workspace.onLayoutReady(()=>{this.stateManager.createButtonsInOpenViews()}),this.registerEvent(this.app.workspace.on("active-leaf-change",t=>{if(!((t==null?void 0:t.view)instanceof K.MarkdownView))return;let n=t.view;this.stateManager.updateViewForOutline(n),this.stateManager.handleActiveLeafChange(n)})),this.app.isMobile&&activeWindow.document.addEventListener("click",this.stateManager.mobileOutsideClickHandler,!0),this.registerEvent(this.app.metadataCache.on("changed",()=>{this.stateManager.handleMetadataChanged()})),this.settings.avoidContentOverlap&&this.registerEvent(this.app.workspace.on("resize",this.resizeDebounceHandler)),this.settings.disableActiveHeadingHighlighting||(activeWindow.document.addEventListener("scroll",this.highlightCurrentHeadingDebounceHandler,!0),this.registerEvent(this.app.metadataCache.on("changed",()=>{let t=this.stateManager.getActiveMDView();t&&this.stateManager.getOutlineInView(t).window.highlightCurrentHeading()}))),this.addCommand({id:"toggle-dynamic-outline",name:"Toggle for current file",checkCallback:t=>{let n=this.stateManager.getActiveMDView();return n?(t||this.stateManager.getOutlineInView(n).button.handleClick(),!0):!1}})}onunload(){this.stateManager.removeAll(),activeWindow.document.removeEventListener("scroll",this.highlightCurrentHeadingDebounceHandler,!0),activeWindow.document.removeEventListener("click",this.stateManager.mobileOutsideClickHandler,!0)}async loadSettings(){this.settings=Object.assign({},rt,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}async reloadPlugin(){let t=this.app.plugins,n=this.app.setting;t.enabledPlugins.has(ye)&&(await t.disablePlugin(ye),await t.enablePlugin(ye),await n.openTabById(ye),new K.Notice("Dynamic Outline has been reloaded"))}getCssVariableAsNumber(t,n=document.body){let r=getComputedStyle(n).getPropertyValue(t).trim(),o=parseFloat(r);return isNaN(o)?null:o}runCommand(t){this.app.commands.executeCommandById(t)}};

/* nosourcemap */