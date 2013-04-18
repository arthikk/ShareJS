(function(){var e,t,n,r,i,s,o,u,a,f=!0,l=[].slice,c=window.sharejs;typeof window!="undefined"&&window!==null?u=window.ottypes.text:u=require("./text-old"),s={},s.name="json0",s.uri="http://sharejs.org/types/JSONv0",s.create=function(){return null},s.invertComponent=function(e){var t={p:e.p};return e.si!==void 0&&(t.sd=e.si),e.sd!==void 0&&(t.si=e.sd),e.oi!==void 0&&(t.od=e.oi),e.od!==void 0&&(t.oi=e.od),e.li!==void 0&&(t.ld=e.li),e.ld!==void 0&&(t.li=e.ld),e.na!==void 0&&(t.na=-e.na),e.lm!==void 0&&(t.lm=e.p[e.p.length-1],t.p=e.p.slice(0,e.p.length-1).concat([e.lm])),t},s.invert=function(e){var t,n,r,i=e.slice().reverse(),o=[];for(n=0,r=i.length;n<r;n++)t=i[n],o.push(s.invertComponent(t));return o},s.checkValidOp=function(){},i=function(e){return Object.prototype.toString.call(e)==="[object Array]"},s.checkList=function(e){if(!i(e))throw new Error("Referenced element not a list")},s.checkObj=function(e){if(e.constructor!==Object)throw new Error("Referenced element not an object (it was "+JSON.stringify(e)+")")},s.apply=function(e,n){var r,i,o,u,a,f,l,c,h,p,d,v,m,g;s.checkValidOp(n),n=t(n),i={data:e};for(a=p=0,v=n.length;p<v;a=++p){r=n[a],c=null,h=null,u=i,f="data",g=r.p;for(d=0,m=g.length;d<m;d++){l=g[d],c=u,h=f,u=u[f],f=l;if(c==null)throw new Error("Path invalid")}if(r.na!==void 0){if(typeof u[f]!="number")throw new Error("Referenced element not a number");u[f]+=r.na}else if(r.si!==void 0){if(typeof u!="string")throw new Error("Referenced element not a string (it was "+JSON.stringify(u)+")");c[h]=u.slice(0,f)+r.si+u.slice(f)}else if(r.sd!==void 0){if(typeof u!="string")throw new Error("Referenced element not a string");if(u.slice(f,f+r.sd.length)!==r.sd)throw new Error("Deleted string does not match");c[h]=u.slice(0,f)+u.slice(f+r.sd.length)}else if(r.li!==void 0&&r.ld!==void 0)s.checkList(u),u[f]=r.li;else if(r.li!==void 0)s.checkList(u),u.splice(f,0,r.li);else if(r.ld!==void 0)s.checkList(u),u.splice(f,1);else if(r.lm!==void 0)s.checkList(u),r.lm!==f&&(o=u[f],u.splice(f,1),u.splice(r.lm,0,o));else if(r.oi!==void 0)s.checkObj(u),u[f]=r.oi;else{if(r.od===void 0)throw new Error("invalid / missing instruction in op");s.checkObj(u),delete u[f]}}return i.data},s.pathMatches=function(e,t,n){var r,i,s,o;if(e.length!==t.length)return!1;for(r=s=0,o=e.length;s<o;r=++s){i=e[r];if(i!==t[r]&&(!n||r!==e.length-1))return!1}return!0},s.append=function(e,n){var r;return n=t(n),e.length!==0&&s.pathMatches(n.p,(r=e[e.length-1]).p)?r.na!==void 0&&n.na!==void 0?e[e.length-1]={p:r.p,na:r.na+n.na}:r.li!==void 0&&n.li===void 0&&n.ld===r.li?r.ld!==void 0?delete r.li:e.pop():r.od!==void 0&&r.oi===void 0&&n.oi!==void 0&&n.od===void 0?r.oi=n.oi:n.lm!==void 0&&n.p[n.p.length-1]===n.lm?null:e.push(n):e.push(n)},s.compose=function(e,n){var r,i,o,u;s.checkValidOp(e),s.checkValidOp(n),i=t(e);for(o=0,u=n.length;o<u;o++)r=n[o],s.append(i,r);return i},s.normalize=function(e){var t,n,r,o,u=[];i(e)||(e=[e]);for(n=0,r=e.length;n<r;n++)t=e[n],(o=t.p)==null&&(t.p=[]),s.append(u,t);return u},t=function(e){return JSON.parse(JSON.stringify(e))},s.canOpAffectOp=function(e,t){var n,r,i,s;if(e.length===0)return!0;if(t.length===0)return!1;t=t.slice(0,t.length-1),e=e.slice(0,e.length-1);for(n=i=0,s=e.length;i<s;n=++i){r=e[n];if(n>=t.length)return!1;if(r!==t[n])return!1}return!0},s.transformComponent=function(e,n,r,i){var o,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N;n=t(n),n.na!==void 0&&n.p.push(0),r.na!==void 0&&r.p.push(0),s.canOpAffectOp(r.p,n.p)&&(o=r.p.length-1),s.canOpAffectOp(n.p,r.p)&&(a=n.p.length-1),c=n.p.length,v=r.p.length,n.na!==void 0&&n.p.pop(),r.na!==void 0&&r.p.pop();if(r.na)return a!=null&&v>=c&&r.p[a]===n.p[a]&&(n.ld!==void 0?(d=t(r),d.p=d.p.slice(c),n.ld=s.apply(t(n.ld),[d])):n.od!==void 0&&(d=t(r),d.p=d.p.slice(c),n.od=s.apply(t(n.od),[d]))),s.append(e,n),e;a!=null&&v>c&&n.p[a]===r.p[a]&&(n.ld!==void 0?(d=t(r),d.p=d.p.slice(c),n.ld=s.apply(t(n.ld),[d])):n.od!==void 0&&(d=t(r),d.p=d.p.slice(c),n.od=s.apply(t(n.od),[d])));if(o!=null){f=c===v;if(r.na===void 0)if(r.si!==void 0||r.sd!==void 0){if(n.si!==void 0||n.sd!==void 0){if(!f)throw new Error("must be a string?");l=function(e){var t={p:e.p[e.p.length-1]};return e.si!=null?t.i=e.si:t.d=e.sd,t},E=l(n),S=l(r),b=[],u._tc(b,E,S,i);for(T=0,N=b.length;T<N;T++)w=b[T],p={p:n.p.slice(0,o)},p.p.push(w.p),w.i!=null&&(p.si=w.i),w.d!=null&&(p.sd=w.d),s.append(e,p);return e}}else if(r.li!==void 0&&r.ld!==void 0){if(r.p[o]===n.p[o]){if(!f)return e;if(n.ld!==void 0){if(n.li===void 0||i!=="left")return e;n.ld=t(r.li)}}}else if(r.li!==void 0)n.li!==void 0&&n.ld===void 0&&f&&n.p[o]===r.p[o]?i==="right"&&n.p[o]++:r.p[o]<=n.p[o]&&n.p[o]++,n.lm!==void 0&&f&&r.p[o]<=n.lm&&n.lm++;else if(r.ld!==void 0){if(n.lm!==void 0&&f){if(r.p[o]===n.p[o])return e;y=r.p[o],h=n.p[o],x=n.lm,(y<x||y===x&&h<x)&&n.lm--}if(r.p[o]<n.p[o])n.p[o]--;else if(r.p[o]===n.p[o]){if(v<c)return e;if(n.ld!==void 0){if(n.li===void 0)return e;delete n.ld}}}else if(r.lm!==void 0)if(n.lm!==void 0&&c===v){h=n.p[o],x=n.lm,m=r.p[o],g=r.lm;if(m!==g)if(h===m){if(i!=="left")return e;n.p[o]=g,h===x&&(n.lm=g)}else h>m&&n.p[o]--,h>g?n.p[o]++:h===g&&m>g&&(n.p[o]++,h===x&&n.lm++),x>m?n.lm--:x===m&&x>h&&n.lm--,x>g?n.lm++:x===g&&(g>m&&x>h||g<m&&x<h?i==="right"&&n.lm++:x>h?n.lm++:x===m&&n.lm--)}else n.li!==void 0&&n.ld===void 0&&f?(h=r.p[o],x=r.lm,y=n.p[o],y>h&&n.p[o]--,y>x&&n.p[o]++):(h=r.p[o],x=r.lm,y=n.p[o],y===h?n.p[o]=x:(y>h&&n.p[o]--,y>x?n.p[o]++:y===x&&h>x&&n.p[o]++));else if(r.oi!==void 0&&r.od!==void 0){if(n.p[o]===r.p[o]){if(n.oi===void 0||!f)return e;if(i==="right")return e;n.od=r.oi}}else if(r.oi!==void 0){if(n.oi!==void 0&&n.p[o]===r.p[o]){if(i!=="left")return e;s.append(e,{p:n.p,od:r.oi})}}else if(r.od!==void 0&&n.p[o]===r.p[o]){if(!f)return e;if(n.oi===void 0)return e;delete n.od}}return s.append(e,n),e},typeof window!="undefined"&&window!==null?c._bootstrapTransform(s,s.transformComponent,s.checkValidOp,s.append):require("./helpers")._bootstrapTransform(s,s.transformComponent,s.checkValidOp,s.append),module.exports=s,typeof f=="undefined"&&(s=require("./json")),typeof f!="undefined"&&f!==null&&(r=c.extendDoc,c.extendDoc=function(t,n){return e.prototype[t]=n,r(t,n)}),n=function(e){return e.length===1&&e[0].constructor===Array?e[0]:e},e=function(){function e(e,t){this.doc=e,this.path=t}return e.prototype.at=function(){var e=1<=arguments.length?l.call(arguments,0):[];return this.doc.at(this.path.concat(n(e)))},e.prototype.parent=function(){return this.path.length?this.doc.at(this.path.slice(0,this.path.length-1)):void 0},e.prototype.get=function(){return this.doc.getAt(this.path)},e.prototype.set=function(e,t){return this.doc.setAt(this.path,e,t)},e.prototype.insert=function(e,t,n){return this.doc.insertAt(this.path,e,t,n)},e.prototype.del=function(e,t,n){return this.doc.deleteTextAt(this.path,t,e,n)},e.prototype.remove=function(e){return this.doc.removeAt(this.path,e)},e.prototype.push=function(e,t){return this.insert(this.get().length,e,t)},e.prototype.move=function(e,t,n){return this.doc.moveAt(this.path,e,t,n)},e.prototype.add=function(e,t){return this.doc.addAt(this.path,e,t)},e.prototype.on=function(e,t){return this.doc.addListener(this.path,e,t)},e.prototype.removeListener=function(e){return this.doc.removeListener(e)},e.prototype.getLength=function(){return this.get().length},e.prototype.getText=function(){return this.get()},e}(),a=function(e,t){var n,r,i,s={data:e},o="data",u=s;for(r=0,i=t.length;r<i;r++){n=t[r],u=u[o],o=n;if(typeof u=="undefined")throw new Error("bad path")}return{elem:u,key:o}},o=function(e,t){var n,r,i,s;if(e.length!==t.length)return!1;for(r=i=0,s=e.length;i<s;r=++i){n=e[r];if(n!==t[r])return!1}return!0},s.api={provides:{json:!0},at:function(){var t=1<=arguments.length?l.call(arguments,0):[];return new e(this,n(t))},get:function(){return this.snapshot},set:function(e,t){return this.setAt([],e,t)},getAt:function(e){var t=a(this.snapshot,e),n=t.elem,r=t.key;return n[r]},setAt:function(e,t,n){var r=a(this.snapshot,e),i=r.elem,s=r.key,o={p:e};if(i.constructor===Array)o.li=t,typeof i[s]!="undefined"&&(o.ld=i[s]);else{if(typeof i!="object")throw new Error("bad path");o.oi=t,typeof i[s]!="undefined"&&(o.od=i[s])}return this.submitOp([o],n)},removeAt:function(e,t){var n,r=a(this.snapshot,e),i=r.elem,s=r.key;if(typeof i[s]=="undefined")throw new Error("no element at that path");n={p:e};if(i.constructor===Array)n.ld=i[s];else{if(typeof i!="object")throw new Error("bad path");n.od=i[s]}return this.submitOp([n],t)},insertAt:function(e,t,n,r){var i=a(this.snapshot,e),s=i.elem,o=i.key,u={p:e.concat(t)};return s[o].constructor===Array?u.li=n:typeof s[o]=="string"&&(u.si=n),this.submitOp([u],r)},moveAt:function(e,t,n,r){var i=[{p:e.concat(t),lm:n}];return this.submitOp(i,r)},addAt:function(e,t,n){var r=[{p:e,na:t}];return this.submitOp(r,n)},deleteTextAt:function(e,t,n,r){var i=a(this.snapshot,e),s=i.elem,o=i.key,u=[{p:e.concat(n),sd:s[o].slice(n,n+t)}];return this.submitOp(u,r)},addListener:function(e,t,n){var r={path:e,event:t,cb:n};return this._listeners.push(r),r},removeListener:function(e){var t=this._listeners.indexOf(e);return t<0?!1:(this._listeners.splice(t,1),!0)},_register:function(){return this._listeners=[],this.on("change",function(e){var t,n,r,i,s,o,u,a,f,l,c,h=[];for(u=0,f=e.length;u<f;u++){t=e[u];if(t.na!==void 0||t.si!==void 0||t.sd!==void 0)continue;s=[],c=this._listeners;for(r=a=0,l=c.length;a<l;r=++a){i=c[r],n={p:i.path,na:0},o=this.type.transformComponent([],n,t,"left");if(o.length===0)s.push(r);else{if(o.length!==1)throw new Error("Bad assumption in json-api: xforming an 'si' op will always result in 0 or 1 components.");i.path=o[0].p}}s.sort(function(e,t){return t-e}),h.push(function(){var e,t,n=[];for(e=0,t=s.length;e<t;e++)r=s[e],n.push(this._listeners.splice(r,1));return n}.call(this))}return h}),this.on("remoteop",function(e){var t,n,r,i,s,u,a,f,l=[];for(a=0,f=e.length;a<f;a++)t=e[a],s=t.na===void 0?t.p.slice(0,t.p.length-1):t.p,l.push(function(){var e,a,f,l=this._listeners,c=[];for(e=0,a=l.length;e<a;e++){f=l[e],u=f.path,i=f.event,n=f.cb;if(o(u,s))switch(i){case"insert":t.li!==void 0&&t.ld===void 0?c.push(n(t.p[t.p.length-1],t.li)):t.oi!==void 0&&t.od===void 0?c.push(n(t.p[t.p.length-1],t.oi)):t.si!==void 0?c.push(n(t.p[t.p.length-1],t.si)):c.push(void 0);break;case"delete":t.li===void 0&&t.ld!==void 0?c.push(n(t.p[t.p.length-1],t.ld)):t.oi===void 0&&t.od!==void 0?c.push(n(t.p[t.p.length-1],t.od)):t.sd!==void 0?c.push(n(t.p[t.p.length-1],t.sd)):c.push(void 0);break;case"replace":t.li!==void 0&&t.ld!==void 0?c.push(n(t.p[t.p.length-1],t.ld,t.li)):t.oi!==void 0&&t.od!==void 0?c.push(n(t.p[t.p.length-1],t.od,t.oi)):c.push(void 0);break;case"move":t.lm!==void 0?c.push(n(t.p[t.p.length-1],t.lm)):c.push(void 0);break;case"add":t.na!==void 0?c.push(n(t.na)):c.push(void 0);break;default:c.push(void 0)}else this.type.canOpAffectOp(u,s)?i==="child op"?(r=t.p.slice(u.length),c.push(n(r,t))):c.push(void 0):c.push(void 0)}return c}.call(this));return l})}}}).call(this)