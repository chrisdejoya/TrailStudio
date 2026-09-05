(()=>{function xm(i){document.querySelectorAll(".custom-select.open").forEach(e=>{if(e===i)return;e.classList.remove("open");let t=e.querySelector(".custom-select-trigger"),n=e.customDropdownMenu;t&&t.setAttribute("aria-expanded","false"),n&&n.classList.remove("is-open")})}document.addEventListener("click",i=>{i.target.closest(".custom-select")||xm()});function vm(i){document.querySelectorAll(".mode-tab").forEach(t=>{t.classList.toggle("active",t.dataset.mode===i)}),window.TrailStudioApp&&typeof window.TrailStudioApp.setMode=="function"&&window.TrailStudioApp.setMode(i)}function _m(i){let e=i.closest(".panel");e&&e.classList.toggle("collapsed")}function ym(i){return i.querySelectorAll(".panel, .light-card")}function Sm(){document.addEventListener("mousedown",i=>{let e=i.target;if(!e.matches("input, select, textarea, [contenteditable]"))return;let t=e.closest(".panel-body-content");if(!t)return;let n=t.closest(".panel, .light-card"),s=n==null?void 0:n.closest(".inspector-group.active");s&&ym(s).forEach(r=>{r!==n&&r.classList.add("dimmed")})}),document.addEventListener("mouseup",()=>{document.querySelectorAll(".inspector-group.active .panel.dimmed, .inspector-group.active .light-card.dimmed").forEach(i=>{i.classList.remove("dimmed")})})}function bm(){let i=document.querySelector("#app"),e=!1,t=null;i&&(i.addEventListener("mousedown",n=>{n.target.closest(".inspector-shell, #hud")||n.target.closest("canvas")&&(e=!0,document.body.classList.add("canvas-dragging"))}),window.addEventListener("mouseup",()=>{e&&(e=!1,document.body.classList.remove("canvas-dragging"))}),window.addEventListener("mouseleave",()=>{e&&(e=!1,document.body.classList.remove("canvas-dragging"))}),i.addEventListener("wheel",n=>{n.target.closest(".inspector-shell, #hud")||n.target.closest("canvas")&&(document.body.classList.add("canvas-dragging"),clearTimeout(t),t=setTimeout(()=>{e||document.body.classList.remove("canvas-dragging")},150))},{passive:!0}))}function Mm(){let i=document.querySelector(".inspector-shell"),e=document.querySelector("#hud"),t=document.querySelector("#bottom-dock"),n=null,s=5e3;function r(){i==null||i.classList.remove("ui-hidden"),e==null||e.classList.remove("ui-hidden"),t==null||t.classList.remove("ui-hidden")}function o(){i==null||i.classList.add("ui-hidden"),e==null||e.classList.add("ui-hidden"),t==null||t.classList.add("ui-hidden")}function a(){clearTimeout(n),r(),n=setTimeout(o,s)}["mousemove","mousedown","wheel","keydown","touchstart"].forEach(l=>{document.addEventListener(l,a,{passive:!0})}),a()}function Tm(){let i=document.querySelectorAll(".dock-item");i.forEach((e,t)=>{e.addEventListener("mouseenter",()=>{i.forEach((n,s)=>{let r=Math.abs(s-t);if(r!==0){if(n.style.transition="transform 0.15s cubic-bezier(0.15, 1, 0.25, 1), filter 0.15s ease",r===1){n.style.transform="scale(1.15)",n.style.zIndex="5";let o=n.querySelector("img");o&&(o.style.filter="brightness(1.15)")}else if(r===2){n.style.transform="scale(1.05)",n.style.zIndex="3";let o=n.querySelector("img");o&&(o.style.filter="brightness(1.08)")}}})}),e.addEventListener("mouseleave",()=>{i.forEach(n=>{n.style.transition="transform 0.15s cubic-bezier(0.15, 1, 0.25, 1), filter 0.15s ease",n.style.transform="",n.style.zIndex="";let s=n.querySelector("img");s&&(s.style.filter="")})})})}function wm(){Sm(),bm(),Mm(),Tm()}wm();window.switchMode=vm;window.togglePanel=_m;var Ud=0,jc=1,Bd=2;var io=1,Od=2,Oi=3,Un=0,$t=1,xn=2,kt=0,ns=1,so=2,Qc=3,eu=4,ar=5;var Tn=100,zd=101,kd=102,Hd=103,Vd=104,ro=200,oo=201,Gd=202,Wd=203,da=204,is=205,za=206,Xd=207,ka=208,qd=209,Yd=210,$d=211,Zd=212,Kd=213,Jd=214,fa=0,pa=1,ma=2,ss=3,ga=4,xa=5,va=6,_a=7,tu=0,jd=1,Qd=2,kn=0,vs=1,_s=2,ys=3,zi=4,ao=5,lo=6,co=7,zc="attached",ef="detached",nu=300,ki=301,Ss=302,lr=303,Ha=304,uo=306,Bn=1e3,An=1001,qs=1002,_t=1003,Va=1004;var bs=1005;var Pt=1006,cr=1007;var Hn=1008;var vn=1009,iu=1010,su=1011,ur=1012,Ga=1013,Vn=1014,cn=1015,Lt=1016,Wa=1017,Xa=1018,Hi=1020,ru=35902,ou=35899,au=1021,lu=1022,un=1023,Jn=1026,ni=1027,hr=1028,qa=1029,Vi=1030,Ya=1031;var $a=1033,ho=33776,fo=33777,po=33778,mo=33779,Za=35840,Ka=35841,Ja=35842,ja=35843,Qa=36196,el=37492,tl=37496,nl=37488,il=37489,go=37490,sl=37491,rl=37808,ol=37809,al=37810,ll=37811,cl=37812,ul=37813,hl=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,xl=37820,vl=37821,_l=36492,yl=36494,Sl=36495,bl=36283,Ml=36284,xo=36285,Tl=36286;var rs=2300,os=2301,ha=2302,kc=2303,Hc=2400,Vc=2401,Gc=2402,tf=2500;var cu=0,vo=1,dr=2,nf=3200;var _o=0,sf=1,bi="",Mt="srgb",on="srgb-linear",Dr="linear",Qe="srgb";var es=7680;var Wc=519,rf=512,of=513,af=514,wl=515,lf=516,cf=517,El=518,uf=519,ya=35044;var uu="300 es",Nn=2e3,Ys=2001;function Em(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hf(){let i=$s("canvas");return i.style.display="block",i}var ed={},Zs=null;function Nr(...i){let e="THREE."+i.shift();Zs?Zs("log",e,...i):console.log(e,...i)}function df(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=df(i);let e="THREE."+i.shift();if(Zs)Zs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=df(i);let e="THREE."+i.shift();if(Zs)Zs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ts(...i){let e=i.join(" ");e in ed||(ed[e]=!0,Te(...i))}function ff(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pf={[fa]:pa,[ma]:va,[ga]:_a,[ss]:xa,[pa]:fa,[va]:ma,[_a]:ga,[xa]:ss},jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=1234567,Pr=Math.PI/180,as=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function hu(i,e){return(i%e+e)%e}function Cm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Rm(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function Im(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function Pm(i,e=1){return e-Math.abs(hu(i,e*2)-e)}function Lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fm(i,e){return i+Math.random()*(e-i)}function Um(i){return i*(.5-Math.random())}function Bm(i){i!==void 0&&(td=i);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Om(i){return i*Pr}function zm(i){return i*as}function km(i){return(i&i-1)===0&&i!==0}function Hm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*u,a*c);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cn={DEG2RAD:Pr,RAD2DEG:as,generateUUID:Fn,clamp:Xe,euclideanModulo:hu,mapLinear:Cm,inverseLerp:Rm,lerp:Lr,damp:Im,pingpong:Pm,smoothstep:Lm,smootherstep:Dm,randInt:Nm,randFloat:Fm,randFloatSpread:Um,seededRandom:Bm,degToRad:Om,radToDeg:zm,isPowerOfTwo:km,ceilPowerOfTwo:Hm,floorPowerOfTwo:Vm,setQuaternionFromProperEuler:Gm,normalize:nt,denormalize:Dn},gu=class gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gu.prototype.isVector2=!0;var _e=gu,an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(h!==_||l!==d||c!==f||u!==m){let g=l*d+c*f+u*m+h*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let b=Math.acos(g),E=Math.sin(b);p=Math.sin(p*b)/E,a=Math.sin(a*b)/E,l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+_*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+m*a,h=h*p+_*a;let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-a*f,e[t+2]=c*m+u*f+a*d-l*h,e[t+3]=u*m-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xu=class xu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;var I=xu,dc=new I,nd=new an,vu=class vu{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],b=s[1],E=s[4],y=s[7],w=s[2],T=s[5],C=s[8];return r[0]=o*_+a*b+l*w,r[3]=o*g+a*E+l*T,r[6]=o*p+a*y+l*C,r[1]=c*_+u*b+h*w,r[4]=c*g+u*E+h*T,r[7]=c*p+u*y+h*C,r[2]=d*_+f*b+m*w,r[5]=d*g+f*E+m*T,r[8]=d*p+f*y+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ts("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return ts("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return ts("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};vu.prototype.isMatrix3=!0;var Ue=vu,fc=new Ue,id=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qe&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ts("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ts("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:e,whitePoint:n,transfer:Dr,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Oe=Wm();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Sa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=$s("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xm=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pc(s[o].image)):r.push(pc(s[o]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Sa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var qm=0,mc=new I,Xt=class i extends jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=An,s=An,r=Pt,o=Hn,a=un,l=vn,c=i.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Fn(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=nu;Xt.DEFAULT_ANISOTROPY=1;var _u=class _u{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,w=(p+1)/2,T=(u+d)/4,C=(h+_)/4,x=(m+g)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=T/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=x/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_u.prototype.isVector4=!0;var st=_u,ba=class extends jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Xt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},yt=class extends ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fr=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ma=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_t,this.minFilter=_t,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oa=class Oa{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,m,_,g)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,$m)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ai.crossVectors(n,bn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ai.crossVectors(n,bn)),Ai.normalize(),Oo.crossVectors(bn,Ai),s[0]=Ai.x,s[4]=Oo.x,s[8]=bn.x,s[1]=Ai.y,s[5]=Oo.y,s[9]=bn.y,s[2]=Ai.z,s[6]=Oo.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],b=n[3],E=n[7],y=n[11],w=n[15],T=s[0],C=s[4],x=s[8],M=s[12],R=s[1],P=s[5],L=s[9],H=s[13],V=s[2],B=s[6],W=s[10],X=s[14],J=s[3],j=s[7],se=s[11],ae=s[15];return r[0]=o*T+a*R+l*V+c*J,r[4]=o*C+a*P+l*B+c*j,r[8]=o*x+a*L+l*W+c*se,r[12]=o*M+a*H+l*X+c*ae,r[1]=u*T+h*R+d*V+f*J,r[5]=u*C+h*P+d*B+f*j,r[9]=u*x+h*L+d*W+f*se,r[13]=u*M+h*H+d*X+f*ae,r[2]=m*T+_*R+g*V+p*J,r[6]=m*C+_*P+g*B+p*j,r[10]=m*x+_*L+g*W+p*se,r[14]=m*M+_*H+g*X+p*ae,r[3]=b*T+E*R+y*V+w*J,r[7]=b*C+E*P+y*B+w*j,r[11]=b*x+E*L+y*W+w*se,r[15]=b*M+E*H+y*X+w*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],b=l*f-c*d,E=a*f-c*h,y=a*d-l*h,w=o*f-c*u,T=o*d-l*u,C=o*h-a*u;return t*(_*b-g*E+p*y)-n*(m*b-g*w+p*T)+s*(m*E-_*w+p*C)-r*(m*y-_*T+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],b=t*a-n*o,E=t*l-s*o,y=t*c-r*o,w=n*l-s*a,T=n*c-r*a,C=s*c-r*l,x=u*_-h*m,M=u*g-d*m,R=u*p-f*m,P=h*g-d*_,L=h*p-f*_,H=d*p-f*g,V=b*H-E*L+y*P+w*R-T*M+C*x;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/V;return e[0]=(a*H-l*L+c*P)*B,e[1]=(s*L-n*H-r*P)*B,e[2]=(_*C-g*T+p*w)*B,e[3]=(d*T-h*C-f*w)*B,e[4]=(l*R-o*H-c*M)*B,e[5]=(t*H-s*R+r*M)*B,e[6]=(g*y-m*C-p*E)*B,e[7]=(u*C-d*y+f*E)*B,e[8]=(o*L-a*R+c*x)*B,e[9]=(n*R-t*L-r*x)*B,e[10]=(m*T-_*y+p*b)*B,e[11]=(h*y-u*T-f*b)*B,e[12]=(a*M-o*P-l*x)*B,e[13]=(t*P-n*M+s*x)*B,e[14]=(_*E-m*w-g*b)*B,e[15]=(u*w-h*E+d*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,b=l*c,E=l*u,y=l*h,w=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*w,s[1]=(f+y)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+E)*C,s[9]=(g-b)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),l=Ls.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);let c=1/o,u=1/a,h=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Nn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Nn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ys)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Nn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Nn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ys)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Oa.prototype.isMatrix4=!0;var De=Oa,Ls=new I,In=new De,Ym=new I(0,0,0),$m=new I(1,1,1),Ai=new I,Oo=new I,bn=new I,rd=new De,od=new an,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return od.setFromEuler(this),this.setFromQuaternion(od,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zm=0,ad=new I,Ds=new an,ui=new De,zo=new I,Mr=new I,Km=new I,Jm=new an,ld=new I(1,0,0),cd=new I(0,1,0),ud=new I(0,0,1),hd={type:"added"},jm={type:"removed"},Ns={type:"childadded",child:null},gc={type:"childremoved",child:null},ot=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new On,n=new an,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ue}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Mr,zo,this.up):ui.lookAt(zo,Mr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Km),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Jm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ot.DEFAULT_UP=new I(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zt=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},ko={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var he=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Oe.workingColorSpace){if(e=hu(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xc(o,r,e+1/3),this.g=xc(o,r,e),this.b=xc(o,r,e-1/3)}return Oe.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Oe.workingToColorSpace(en.copy(this),e),Math.round(Xe(en.r*255,0,255))*65536+Math.round(Xe(en.g*255,0,255))*256+Math.round(Xe(en.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Oe.workingColorSpace){return Oe.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Mt){Oe.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(ko);let n=Lr(Ci.h,ko.h,t),s=Lr(Ci.s,ko.s,t),r=Lr(Ci.l,ko.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new he;he.NAMES=mf;var ls=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new I,hi=new I,vc=new I,di=new I,Fs=new I,Us=new I,dd=new I,_c=new I,yc=new I,Sc=new I,bc=new st,Mc=new st,Tc=new st,Ni=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),hi.subVectors(n,t),vc.subVectors(e,t);let o=Pn.dot(Pn),a=Pn.dot(hi),l=Pn.dot(vc),c=hi.dot(hi),u=hi.dot(vc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return bc.setScalar(0),Mc.setScalar(0),Tc.setScalar(0),bc.fromBufferAttribute(e,t),Mc.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bc,r.x),o.addScaledVector(Mc,r.y),o.addScaledVector(Tc,r.z),o}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),hi.subVectors(e,t),Pn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Pn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fs.subVectors(s,n),Us.subVectors(r,n),_c.subVectors(e,n);let l=Fs.dot(_c),c=Us.dot(_c);if(l<=0&&c<=0)return t.copy(n);yc.subVectors(e,s);let u=Fs.dot(yc),h=Us.dot(yc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fs,o);Sc.subVectors(e,r);let f=Fs.dot(Sc),m=Us.dot(Sc);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Us,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return dd.subVectors(r,s),a=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(dd,a);let p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Fs,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Vo.subVectors(this.max,Tr),Bs.subVectors(e.a,Tr),Os.subVectors(e.b,Tr),zs.subVectors(e.c,Tr),Ri.subVectors(Os,Bs),Ii.subVectors(zs,Os),Ki.subVectors(Bs,zs);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-Ki.y,Ki.x,0];return!wc(t,Bs,Os,zs,Vo)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,Bs,Os,zs,Vo))?!1:(Go.crossVectors(Ri,Ii),t=[Go.x,Go.y,Go.z],wc(t,Bs,Os,zs,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new I,new I,new I,new I,new I,new I,new I,new I],Ln=new I,Ho=new qt,Bs=new I,Os=new I,zs=new I,Ri=new I,Ii=new I,Ki=new I,Tr=new I,Vo=new I,Go=new I,Ji=new I;function wc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ji.fromArray(i,r);let a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Ft=new I,Wo=new _e,eg=0,mt=class extends jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var Br=class extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},tg=new qt,wr=new I,Ec=new I,pn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):tg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Ec)),this.expandByPoint(wr.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ng=0,En=new De,Ac=new ot,ks=new I,Mn=new qt,Er=new qt,Wt=new I,Tt=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Em(e)?Or:Br)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Mn.min,Er.min),Mn.expandByPoint(Wt),Wt.addVectors(Mn.max,Er.max),Mn.expandByPoint(Wt)):(Mn.expandByPoint(Er.min),Mn.expandByPoint(Er.max))}Mn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),Wt.add(ks)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new I,l[x]=new I;let c=new I,u=new I,h=new I,d=new _e,f=new _e,m=new _e,_=new I,g=new I;function p(x,M,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,R),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,R),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(P),a[x].add(_),a[M].add(_),a[R].add(_),l[x].add(g),l[M].add(g),l[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,M=b.length;x<M;++x){let R=b[x],P=R.start,L=R.count;for(let H=P,V=P+L;H<V;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new I,y=new I,w=new I,T=new I;function C(x){w.fromBufferAttribute(s,x),T.copy(w);let M=a[x];E.copy(M),E.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(T,M);let P=y.dot(l[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,P)}for(let x=0,M=b.length;x<M;++x){let R=b[x],P=R.start,L=R.count;for(let H=P,V=P+L;H<V;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new mt(d,u,h)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ya,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new I,Qs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ig=0,ln=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=ns,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=da,this.blendDst=is,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==da&&(n.blendSrc=this.blendSrc),this.blendDst!==is&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new he().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new _e().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new I,Cc=new I,Xo=new I,Pi=new I,Rc=new I,qo=new I,Ic=new I,cs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Cc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Cc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Pi.dot(this.direction),l=-Pi.dot(Xo),c=Pi.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Cc).addScaledVector(Xo,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){Rc.subVectors(t,e),qo.subVectors(n,e),Ic.crossVectors(Rc,qo);let o=this.direction.dot(Ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let l=a*this.direction.dot(qo.crossVectors(Pi,qo));if(l<0)return null;let c=a*this.direction.dot(Rc.cross(Pi));if(c<0||l+c>o)return null;let u=-a*Pi.dot(Ic);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tn=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fd=new De,ji=new cs,Yo=new pn,pd=new I,$o=new I,Zo=new I,Ko=new I,Pc=new I,Jo=new I,md=new I,jo=new I,je=class extends ot{constructor(e=new Tt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Pc.fromBufferAttribute(h,e),o?Jo.addScaledVector(Pc,u):Jo.addScaledVector(Pc.sub(t),u))}t.add(Jo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Yo.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Yo,pd)===null||ji.origin.distanceToSquared(pd)>(e.far-e.near)**2))&&(fd.copy(r).invert(),ji.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,w=E;y<w;y+=3){let T=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);s=Qo(this,p,e,n,c,u,h,T,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=Qo(this,o,e,n,c,u,h,b,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=b,w=E;y<w;y+=3){let T=y,C=y+1,x=y+2;s=Qo(this,p,e,n,c,u,h,T,C,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let b=g,E=g+1,y=g+2;s=Qo(this,o,e,n,c,u,h,b,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function sg(i,e,t,n,s,r,o,a){let l;if(e.side===$t?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Un,a),l===null)return null;jo.copy(a),jo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:i}}function Qo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,$o),i.getVertexPosition(l,Zo),i.getVertexPosition(c,Ko);let u=sg(i,e,t,n,$o,Zo,Ko,md);if(u){let h=new I;Ni.getBarycoord(md,$o,Zo,Ko,h),s&&(u.uv=Ni.getInterpolatedAttribute(s,a,l,c,h,new _e)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,a,l,c,h,new _e)),o&&(u.normal=Ni.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Ni.getNormal($o,Zo,Ko,d.normal),u.face=d,u.barycoord=h}return u}var Ar=new st,gd=new st,xd=new st,rg=new st,vd=new De,ea=new I,Lc=new pn,_d=new De,Dc=new cs,zr=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ea),this.boundingBox.expandByPoint(ea)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ea),this.boundingSphere.expandByPoint(ea)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(s),e.ray.intersectsSphere(Lc)!==!1&&(_d.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(_d),!(this.boundingBox!==null&&Dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;gd.fromBufferAttribute(s.attributes.skinIndex,e),xd.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ar.copy(t),t.set(0,0,0,0)):(Ar.set(...t,1),t.set(0,0,0)),Ar.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=xd.getComponent(r);if(o!==0){let a=gd.getComponent(r);vd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(rg.copy(Ar).applyMatrix4(vd),o)}}return t.isVector4&&(t.w=Ar.w),t.applyMatrix4(this.bindMatrixInverse)}},er=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},Fi=class extends Xt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=_t,u=_t,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yd=new De,og=new De,kr=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:og;yd.multiplyMatrices(a,t[r]),yd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fi(t,e,e,un,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Te("Skeleton: No bone found with UUID:",r),o=new er),this.bones.push(o),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ui=class extends mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new De,Sd=new De,ta=[],bd=new qt,ag=new De,Cr=new je,Rr=new pn,Hr=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ag)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),bd.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(bd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Rr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Sd.multiplyMatrices(n,Hs),Cr.matrixWorld=Sd,Cr.raycast(e,ta);for(let o=0,a=ta.length;o<a;o++){let l=ta[o];l.instanceId=r,l.object=this,t.push(l)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fi(new Float32Array(s*this.count),s,this.count,hr,cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nc=new I,lg=new I,cg=new Ue,Zn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nc.subVectors(n,t).cross(lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cg.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new pn,ug=new _e(.5,.5),na=new I,tr=class{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-u,p-m,w-b).normalize(),s[1].setComponents(c+o,f+u,p+m,w+b).normalize(),s[2].setComponents(c+a,f+h,p+_,w+E).normalize(),s[3].setComponents(c-a,f-h,p-_,w-E).normalize(),n)s[4].setComponents(l,d,g,y).normalize(),s[5].setComponents(c-l,f-d,p-g,w-y).normalize();else if(s[4].setComponents(c-l,f-d,p-g,w-y).normalize(),t===Nn)s[5].setComponents(c+l,f+d,p+g,w+y).normalize();else if(t===Ys)s[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=ug.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(na.x=s.normal.x>0?e.max.x:e.min.x,na.y=s.normal.y>0?e.max.y:e.min.y,na.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var us=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ta=new I,wa=new I,Md=new De,Ir=new cs,ia=new pn,Fc=new I,Td=new I,hs=class extends ot{constructor(e=new Tt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ta.distanceTo(wa);e.setAttribute("lineDistance",new it(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(s),ia.radius+=r,e.ray.intersectsSphere(ia)===!1)return;Md.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(Md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=u.getX(_),b=u.getX(_+1),E=sa(this,e,Ir,l,p,b,_);E&&t.push(E)}if(this.isLineLoop){let _=u.getX(m-1),g=u.getX(f),p=sa(this,e,Ir,l,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=sa(this,e,Ir,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=sa(this,e,Ir,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sa(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),wa.fromBufferAttribute(a,r),t.distanceSqToSegment(Ta,wa,Fc,Td)>n)return;Fc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fc);if(!(c<e.near||c>e.far))return{distance:c,point:Td.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var wd=new I,Ed=new I,nr=class extends hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wd.fromBufferAttribute(t,s),Ed.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wd.distanceTo(Ed);e.setAttribute("lineDistance",new it(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Vr=class extends hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ad=new De,Xc=new cs,ra=new pn,oa=new I,Gr=class extends ot{constructor(e=new Tt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;Ad.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(Ad);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);oa.fromBufferAttribute(h,g),Cd(oa,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)oa.fromBufferAttribute(h,m),Cd(oa,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cd(i,e,t,n,s,r,o){let a=Xc.distanceSqToPoint(i);if(a<t){let l=new I;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Wr=class extends Xt{constructor(e=[],t=ki,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var zn=class extends Xt{constructor(e,t,n=Vn,s,r,o,a=_t,l=_t,c,u=Jn,h=1){if(u!==Jn&&u!==ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ea=class extends zn{constructor(e,t=Vn,n=ki,s,r,o=_t,a=_t,l,c=Jn){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Xr=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class i extends Tt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function m(_,g,p,b,E,y,w,T,C,x,M){let R=y/C,P=w/x,L=y/2,H=w/2,V=T/2,B=C+1,W=x+1,X=0,J=0,j=new I;for(let se=0;se<W;se++){let ae=se*P-H;for(let ge=0;ge<B;ge++){let Ye=ge*R-L;j[_]=Ye*b,j[g]=ae*E,j[p]=V,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),h.push(ge/C),h.push(1-se/x),X+=1}}for(let se=0;se<x;se++)for(let ae=0;ae<C;ae++){let ge=d+ae+B*se,Ye=d+ae+B*(se+1),at=d+(ae+1)+B*(se+1),$e=d+(ae+1)+B*se;l.push(ge,Ye,$e),l.push(Ye,at,$e),J+=6}a.addGroup(f,J,M),f+=J,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mn=class i extends Tt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,_=[],g=n/2,p=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function b(){let y=new I,w=new I,T=0,C=(t-e)/n;for(let x=0;x<=r;x++){let M=[],R=x/r,P=R*(t-e)+e;for(let L=0;L<=s;L++){let H=L/s,V=H*l+a,B=Math.sin(V),W=Math.cos(V);w.x=P*B,w.y=-R*n+g,w.z=P*W,h.push(w.x,w.y,w.z),y.set(B,C,W).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-R),M.push(m++)}_.push(M)}for(let x=0;x<s;x++)for(let M=0;M<r;M++){let R=_[M][x],P=_[M+1][x],L=_[M+1][x+1],H=_[M][x+1];(e>0||M!==0)&&(u.push(R,P,H),T+=3),(t>0||M!==r-1)&&(u.push(P,L,H),T+=3)}c.addGroup(p,T,0),p+=T}function E(y){let w=m,T=new _e,C=new I,x=0,M=y===!0?e:t,R=y===!0?1:-1;for(let L=1;L<=s;L++)h.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let L=0;L<=s;L++){let V=L/s*l+a,B=Math.cos(V),W=Math.sin(V);C.x=M*W,C.y=g*R,C.z=M*B,h.push(C.x,C.y,C.z),d.push(0,R,0),T.x=B*.5+.5,T.y=W*.5*R+.5,f.push(T.x,T.y),m++}for(let L=0;L<s;L++){let H=w+L,V=P+L;y===!0?u.push(V,V+1,H):u.push(V+1,V,H),x+=3}c.addGroup(p,x,y===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qr=class i extends Tt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let b=p*d-o;for(let E=0;E<c;E++){let y=E*h-r;m.push(y,-b,0),_.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let E=b+c*p,y=b+c*(p+1),w=b+1+c*(p+1),T=b+1+c*p;f.push(E,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var sr=class i extends Tt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let b=[],E=p/n,y=o+E*a,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),C=0;p===0&&o===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let M=x/t,R=s+M*r;h.x=-T*Math.cos(R),h.y=w,h.z=T*Math.sin(R),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(M+C,1-E),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let E=u[p][b+1],y=u[p][b],w=u[p+1][b],T=u[p+1][b+1];(p!==0||o>0)&&f.push(E,y,T),(p!==n-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yr=class i extends Tt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new I,f=new I,m=new I;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(e+t*Math.cos(g))*Math.cos(b),f.y=(e+t*Math.cos(g))*Math.sin(b),f.z=t*Math.sin(g),c.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),m.subVectors(f,d).normalize(),u.push(m.x,m.y,m.z),h.push(p/s),h.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,b=(s+1)*(_-1)+g-1,E=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(p,b,y),l.push(b,E,y)}this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Rd(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Rd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function Rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}var _n={clone:Ms,merge:nn},dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tt=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dg,this.fragmentShader=fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new he().setHex(s.value);break;case"v2":this.uniforms[n].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new st().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rr=class extends tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ds=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var $r=class extends ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Aa=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Id(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function mg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ra=class extends Qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,a=2*t-n;break;case Gc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:o=e,l=2*n-t;break;case Gc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,b=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,E=(-1-f)*g+(1.5+f)*_+.5*m,y=f*g-f*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+b*o[c+w]+E*o[l+w]+y*o[h+w];return r}},Ia=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Pa=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},La=class extends Qn{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(s-t),_=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*m;return r}let d=a*2,f=e-1;for(let m=0;m!==a;++m){let _=o[c+m],g=o[l+m],p=f*d+m*2,b=h[p],E=h[p+1],y=e*d+m*2,w=u[y],T=u[y+1],C=(n-t)/(s-t),x,M,R,P,L;for(let H=0;H<8;H++){x=C*C,M=x*C,R=1-C,P=R*R,L=P*R;let B=L*t+3*P*C*b+3*R*x*w+M*s-n;if(Math.abs(B)<1e-10)break;let W=3*P*(b-t)+6*R*C*(w-b)+3*x*(s-w);if(Math.abs(W)<1e-10)break;C=C-B/W,C=Math.max(0,Math.min(1,C))}r[m]=L*_+3*P*C*E+3*R*x*T+M*g}return r}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new La(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rs:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case ha:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return ha;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ne("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Am(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ha,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=t[h+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=os;var xi=class extends gn{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=rs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Zr=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Zr.prototype.ValueTypeName="color";var vi=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};vi.prototype.ValueTypeName="number";var Da=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},_i=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends gn{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=rs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends gn{constructor(e,t,n,s){super(e,t,n,s)}};Bi.prototype.ValueTypeName="vector";var Kr=class{constructor(e="",t=-1,n=[],s=tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(xg(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=pg(l);l=Id(l,1,u),c=Id(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function gg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Zr;case"quaternion":return _i;case"bool":case"boolean":return xi;case"string":return yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gg(i.type);if(i.times===void 0){let t=[],n=[];mg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Pd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Pd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Pd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch(e){return!1}}var Na=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gf=new Na,ei=class{constructor(e){this.manager=e!==void 0?e:gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var mi={},qc=class extends Error{constructor(e,t){super(e),this.response=t}},or=class extends ei{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:s});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=mi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){b();function b(){h.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let T=0,C=u.length;T<C;T++){let x=u[T];x.onProgress&&x.onProgress(w)}p.enqueue(y),b()}},E=>{p.error(E)})}}});return new Response(g)}else throw new qc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Kn.add(`file:${e}`,c);let u=mi[e];delete mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,Fa=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Vs.get(o);h===void 0&&(h=[],Vs.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=$s("img");function l(){u(),t&&t(this);let h=Vs.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Kn.remove(`image:${e}`);let d=Vs.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var fs=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,o=new Fa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ps=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new he(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jr=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uc=new De,Ld=new I,Dd=new I,jr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ys||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},la=new I,ca=new an,$n=new I,Qr=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(la,ca,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(la,ca,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(la,ca,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,Nd=new _e,Fd=new _e,Ut=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Fd),t.subVectors(Fd,Nd)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yc=class extends jr{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=as*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ms=class extends ps{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},$c=class extends jr{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0}},gs=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ti=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends jr{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Zc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Bc=new WeakMap,eo=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Kn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Bc.has(o)===!0?(s&&s(Bc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){Kn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){s&&s(c),Bc.set(l,c),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gs=-90,Ws=1,Ua=class extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let o=new Ut(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let a=new Ut(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let l=new Ut(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ba=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},to=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=vg.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function vg(){this._document.hidden===!1&&this.reset()}var fu="\\[\\]\\.:\\/",_g=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",yg="[^"+fu.replace("\\.","")+"]",Sg=/((?:WC+[\/:])*)/.source.replace("WC",pu),bg=/(WCOD+)?/.source.replace("WCOD",yg),Mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),Tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),wg=new RegExp("^"+Sg+bg+Mg+Tg+"$"),Eg=["material","materials","bones","map"],Kc=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_g,"")}static parseTrackName(e){let t=wg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Eg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Kc;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uS=new Float32Array(1);var yu=class yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yu.prototype.isMatrix2=!0;var Jc=yu;var Di=new I,ua=new De,Oc=new De,no=class extends nr{constructor(e){let t=xf(e),n=new Tt,s=[],r=[];for(let c=0;c<t.length;c++){let u=t[c];u.parent&&u.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new it(s,3)),n.setAttribute("color",new it(r,3));let o=new us({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;let a=new he(255),l=new he(65280);this.setColors(a,l)}updateMatrixWorld(e){let t=this.bones,n=this.geometry,s=n.getAttribute("position");Oc.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){let a=t[r];a.parent&&a.parent.isBone&&(ua.multiplyMatrices(Oc,a.matrixWorld),Di.setFromMatrixPosition(ua),s.setXYZ(o,Di.x,Di.y,Di.z),ua.multiplyMatrices(Oc,a.parent.matrixWorld),Di.setFromMatrixPosition(ua),s.setXYZ(o+1,Di.x,Di.y,Di.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,t){let s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,e.r,e.g,e.b),s.setXYZ(r+1,t.r,t.g,t.b);return s.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};function xf(i){let e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...xf(i.children[t]));return e}function mu(i,e,t,n){let s=Ag(n);switch(t){case au:return i*e;case hr:return i*e/s.components*s.byteLength;case qa:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case Ya:return i*e*2/s.components*s.byteLength;case lu:return i*e*3/s.components*s.byteLength;case un:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case ho:case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case ja:return Math.max(i,16)*Math.max(e,8)/4;case Za:case Ja:return Math.max(i,8)*Math.max(e,8)/2;case Qa:case el:case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tl:case go:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case yl:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xo:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ag(i){switch(i){case vn:case iu:return{byteLength:1,components:1};case ur:case su:case Lt:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case Vn:case Ga:case cn:return{byteLength:4,components:1};case ru:case ou:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window!="undefined"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function kf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rg(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,L0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Px=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ox=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ov=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Ig,alphahash_pars_fragment:Pg,alphamap_fragment:Lg,alphamap_pars_fragment:Dg,alphatest_fragment:Ng,alphatest_pars_fragment:Fg,aomap_fragment:Ug,aomap_pars_fragment:Bg,batching_pars_vertex:Og,batching_vertex:zg,begin_vertex:kg,beginnormal_vertex:Hg,bsdfs:Vg,iridescence_fragment:Gg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Yg,clipping_planes_vertex:$g,color_fragment:Zg,color_pars_fragment:Kg,color_pars_vertex:Jg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:e0,defaultnormal_vertex:t0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:r0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:l0,envmap_common_pars_fragment:c0,envmap_pars_fragment:u0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:b0,envmap_vertex:d0,fog_vertex:f0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:x0,lightmap_pars_fragment:v0,lights_lambert_fragment:_0,lights_lambert_pars_fragment:y0,lights_pars_begin:S0,lights_toon_fragment:M0,lights_toon_pars_fragment:T0,lights_phong_fragment:w0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:R0,lights_fragment_maps:I0,lights_fragment_end:P0,lightprobes_pars_fragment:L0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:F0,logdepthbuf_vertex:U0,map_fragment:B0,map_pars_fragment:O0,map_particle_fragment:z0,map_particle_pars_fragment:k0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:q0,morphtarget_vertex:Y0,normal_fragment_begin:$0,normal_fragment_maps:Z0,normal_pars_fragment:K0,normal_pars_vertex:J0,normal_vertex:j0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:xx,skinning_vertex:vx,skinnormal_vertex:_x,specularmap_fragment:yx,specularmap_pars_fragment:Sx,tonemapping_fragment:bx,tonemapping_pars_fragment:Mx,transmission_fragment:Tx,transmission_pars_fragment:wx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Cx,worldpos_vertex:Rx,background_vert:Ix,background_frag:Px,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Fx,depth_vert:Ux,depth_frag:Bx,distance_vert:Ox,distance_frag:zx,equirect_vert:kx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:Yx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:Kx,meshnormal_frag:Jx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:ev,meshphysical_frag:tv,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:sv,points_frag:rv,shadow_vert:ov,shadow_frag:av,sprite_vert:lv,sprite_frag:cv},de={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},si={basic:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new he(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new he(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:nn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:nn([de.lights,de.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};si.physical={uniforms:nn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Al={r:0,b:0,g:0},uv=new De,Hf=new Ue;Hf.set(-1,0,0,0,1,0,0,0,1);function hv(i,e,t,n,s,r){let o=new he(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(b){let E=!1,y=f(b);y===null?g(o,a):y&&y.isColor&&(g(y,1),E=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===uo)?(c===void 0&&(c=new je(new Yt(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:Ms(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hf),c.material.toneMapped=Oe.getTransfer(y.colorSpace)!==Qe,(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new je(new qr(2,2),new tt({name:"BackgroundMaterial",uniforms:Ms(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Oe.getTransfer(y.colorSpace)!==Qe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,E){b.getRGB(Al,du(i)),t.buffers.color.setClear(Al.r,Al.g,Al.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:m,addToRenderList:_,dispose:p}}function dv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,L,H,V,B){let W=!1,X=h(P,V,H,L);r!==X&&(r=X,c(r.object)),W=f(P,V,H,B),W&&m(P,V,H,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(P,L,H,V),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,L,H,V){let B=V.wireframe===!0,W=n[L.id];W===void 0&&(W={},n[L.id]=W);let X=P.isInstancedMesh===!0?P.id:0,J=W[X];J===void 0&&(J={},W[X]=J);let j=J[H.id];j===void 0&&(j={},J[H.id]=j);let se=j[B];return se===void 0&&(se=d(l()),j[B]=se),se}function d(P){let L=[],H=[],V=[];for(let B=0;B<t;B++)L[B]=0,H[B]=0,V[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:V,object:P,attributes:{},index:null}}function f(P,L,H,V){let B=r.attributes,W=L.attributes,X=0,J=H.getAttributes();for(let j in J)if(J[j].location>=0){let ae=B[j],ge=W[j];if(ge===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),ae===void 0||ae.attribute!==ge||ge&&ae.data!==ge.data)return!0;X++}return r.attributesNum!==X||r.index!==V}function m(P,L,H,V){let B={},W=L.attributes,X=0,J=H.getAttributes();for(let j in J)if(J[j].location>=0){let ae=W[j];ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));let ge={};ge.attribute=ae,ae&&ae.data&&(ge.data=ae.data),B[j]=ge,X++}r.attributes=B,r.attributesNum=X,r.index=V}function _(){let P=r.newAttributes;for(let L=0,H=P.length;L<H;L++)P[L]=0}function g(P){p(P,0)}function p(P,L){let H=r.newAttributes,V=r.enabledAttributes,B=r.attributeDivisors;H[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),B[P]!==L&&(i.vertexAttribDivisor(P,L),B[P]=L)}function b(){let P=r.newAttributes,L=r.enabledAttributes;for(let H=0,V=L.length;H<V;H++)L[H]!==P[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function E(P,L,H,V,B,W,X){X===!0?i.vertexAttribIPointer(P,L,H,B,W):i.vertexAttribPointer(P,L,H,V,B,W)}function y(P,L,H,V){_();let B=V.attributes,W=H.getAttributes(),X=L.defaultAttributeValues;for(let J in W){let j=W[J];if(j.location>=0){let se=B[J];if(se===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),se!==void 0){let ae=se.normalized,ge=se.itemSize,Ye=e.get(se);if(Ye===void 0)continue;let at=Ye.buffer,$e=Ye.type,$=Ye.bytesPerElement,ne=$e===i.INT||$e===i.UNSIGNED_INT||se.gpuType===Ga;if(se.isInterleavedBufferAttribute){let ee=se.data,Re=ee.stride,Le=se.offset;if(ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<j.locationSize;Pe++)p(j.location+Pe,ee.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Pe=0;Pe<j.locationSize;Pe++)g(j.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Pe=0;Pe<j.locationSize;Pe++)E(j.location+Pe,ge/j.locationSize,$e,ae,Re*$,(Le+ge/j.locationSize*Pe)*$,ne)}else{if(se.isInstancedBufferAttribute){for(let ee=0;ee<j.locationSize;ee++)p(j.location+ee,se.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ee=0;ee<j.locationSize;ee++)g(j.location+ee);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ee=0;ee<j.locationSize;ee++)E(j.location+ee,ge/j.locationSize,$e,ae,ge*$,ge/j.locationSize*ee*$,ne)}}else if(X!==void 0){let ae=X[J];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(j.location,ae);break;case 3:i.vertexAttrib3fv(j.location,ae);break;case 4:i.vertexAttrib4fv(j.location,ae);break;default:i.vertexAttrib1fv(j.location,ae)}}}}b()}function w(){M();for(let P in n){let L=n[P];for(let H in L){let V=L[H];for(let B in V){let W=V[B];for(let X in W)u(W[X].object),delete W[X];delete V[B]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let H in L){let V=L[H];for(let B in V){let W=V[B];for(let X in W)u(W[X].object),delete W[X];delete V[B]}}delete n[P.id]}function C(P){for(let L in n){let H=n[L];for(let V in H){let B=H[V];if(B[P.id]===void 0)continue;let W=B[P.id];for(let X in W)u(W[X].object),delete W[X];delete B[P.id]}}}function x(P){for(let L in n){let H=n[L],V=P.isInstancedMesh===!0?P.id:0,B=H[V];if(B!==void 0){for(let W in B){let X=B[W];for(let J in X)u(X[J].object),delete X[J];delete B[W]}delete H[V],Object.keys(H).length===0&&delete n[L]}}}function M(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function fv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function pv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===Lt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!x)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:w,samples:T}}function mv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Zn,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,E=b*4,y=p.clippingState||null;l.value=y,y=u(m,d,E,f);for(let w=0;w!==E;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Gi=4,vf=[.125,.215,.35,.446,.526,.582],Ts=20,gv=256,yo=new ti,_f=new he,Su=null,bu=0,Mu=0,Tu=!1,xv=new I,mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=xv}=r;Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,bu,Mu),this._renderer.xr.enabled=Tu,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Tu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Lt,format:un,colorSpace:on,depthBuffer:!1},s=yf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vv(r)),this._blurMaterial=yv(r,e,t),this._ggxMaterial=_v(r,e,t)}return s}_compileMaterial(e){let t=new je(new Tt,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,s,r){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(_f),h.toneMapping=kn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new je(new Yt,new tn({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(_f),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let w=this._cubeSize;fr(s,y*w,E>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ki||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-Gi?n-m+Gi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,fr(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,yo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fr(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,yo)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[s];h.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Ts;g>Ts&&Te(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ts}`);let p=[],b=0;for(let C=0;C<Ts;++C){let x=C/_,M=Math.exp(-x*x/2);p.push(M),C===0?b+=M:C<g&&(b+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;let y=this._sizeLods[s],w=3*y*(s>E-Gi?s-E+Gi:0),T=4*(this._cubeSize-y);fr(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,yo)}};function vv(i){let e=[],t=[],n=[],s=i,r=i-Gi+1+vf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Gi?l=vf[o-i+Gi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*f),E=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,x=T>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(M,_*m*T),E.set(d,g*m*T);let R=[T,T,T,T,T,T];y.set(R,p*m*T)}let w=new Tt;w.setAttribute("position",new mt(b,_)),w.setAttribute("uv",new mt(E,g)),w.setAttribute("faceIndex",new mt(y,p)),n.push(new je(w,null)),s>Gi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function yf(i,e,t){let n=new yt(i,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _v(i,e,t){return new tt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function yv(i,e,t){let n=new Float32Array(Ts),s=new I(0,1,0);return new tt({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Sf(){return new tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function bf(){return new tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Rl=class extends yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yt(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:kt});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===Hn&&(t.minFilter=Pt),new Ua(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Sv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===lr||f===Ha)if(e.has(d)){let m=e.get(d).texture;return a(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Rl(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,m=f===lr||f===Ha,_=f===ki||f===Ss;if(m||_){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new mr(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return m&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new mr(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function a(d,f){return f===lr?d.mapping=ki:f===Ha&&(d.mapping=Ss),d}function l(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){let f=d.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function bv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ts("WebGLRenderer: "+n+" extension not supported."),s}}}function Mv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(m===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){let w=b[E+0],T=b[E+1],C=b[E+2];d.push(w,T,T,C,C,w)}}else{let b=m.array;_=m.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let w=E+0,T=E+1,C=E+2;d.push(w,T,T,C,C,w)}}let g=new(m.count>=65535?Or:Br)(d,1);g.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Tv(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let g=0;g<f;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ev(i,e,t){let n=new WeakMap,s=new st;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*h),C=new Fr(T,y,w,h);C.type=cn,C.needsUpdate=!0;let x=E*4;for(let R=0;R<h;R++){let P=g[R],L=p[R],H=b[R],V=y*w*4*R;for(let B=0;B<P.count;B++){let W=B*x;f===!0&&(s.fromBufferAttribute(P,B),T[V+W+0]=s.x,T[V+W+1]=s.y,T[V+W+2]=s.z,T[V+W+3]=0),m===!0&&(s.fromBufferAttribute(L,B),T[V+W+4]=s.x,T[V+W+5]=s.y,T[V+W+6]=s.z,T[V+W+7]=0),_===!0&&(s.fromBufferAttribute(H,B),T[V+W+8]=s.x,T[V+W+9]=s.y,T[V+W+10]=s.z,T[V+W+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new _e(y,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Av(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Cv={[vs]:"LINEAR_TONE_MAPPING",[_s]:"REINHARD_TONE_MAPPING",[ys]:"CINEON_TONE_MAPPING",[zi]:"ACES_FILMIC_TONE_MAPPING",[lo]:"AGX_TONE_MAPPING",[co]:"NEUTRAL_TONE_MAPPING",[ao]:"CUSTOM_TONE_MAPPING"};function Rv(i,e,t,n,s,r){let o=new yt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new zn(e,t):void 0}),a=new yt(e,t,{type:Lt,depthBuffer:!1,stencilBuffer:!1}),l=new Tt;l.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new it([0,2,0,0,2,0],2));let c=new rr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new je(l,c),h=new ti(-1,1,1,-1,0,1),d=null,f=null,m=!1,_,g=null,p=[],b=!1;this.setSize=function(E,y){o.setSize(E,y),a.setSize(E,y);for(let w=0;w<p.length;w++){let T=p[w];T.setSize&&T.setSize(E,y)}},this.setEffects=function(E){p=E,b=p.length>0&&p[0].isRenderPass===!0;let y=o.width,w=o.height;for(let T=0;T<p.length;T++){let C=p[T];C.setSize&&C.setSize(y,w)}},this.begin=function(E,y){if(m||E.toneMapping===kn&&p.length===0)return!1;if(g=y,y!==null){let w=y.width,T=y.height;(o.width!==w||o.height!==T)&&this.setSize(w,T)}return b===!1&&E.setRenderTarget(o),_=E.toneMapping,E.toneMapping=kn,!0},this.hasRenderPass=function(){return b},this.end=function(E,y){E.toneMapping=_,m=!0;let w=o,T=a;for(let C=0;C<p.length;C++){let x=p[C];if(x.enabled!==!1&&(x.render(E,T,w,y),x.needsSwap!==!1)){let M=w;w=T,T=M}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,c.defines={},Oe.getTransfer(d)===Qe&&(c.defines.SRGB_TRANSFER="");let C=Cv[f];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,E.setRenderTarget(g),E.render(u,h),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}var Vf=new Xt,Au=new zn(1,1),Gf=new Fr,Wf=new Ma,Xf=new Wr,Mf=[],Tf=[],wf=new Float32Array(16),Ef=new Float32Array(9),Af=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mf[s];if(r===void 0&&(r=new Float32Array(s),Mf[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ll(i,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function Nv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Af.set(n),i.uniformMatrix2fv(this.addr,!1,Af),Vt(t,n)}}function Fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;Ef.set(n),i.uniformMatrix3fv(this.addr,!1,Ef),Vt(t,n)}}function Uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;wf.set(n),i.uniformMatrix4fv(this.addr,!1,wf),Vt(t,n)}}function Bv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function Hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function Gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function Wv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=t.isReversedDepthBuffer()?El:wl,r=Au):r=Vf,t.setTexture2D(e||r,s)}function qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function Yv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xf,s)}function $v(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gf,s)}function Zv(i){switch(i){case 5126:return Iv;case 35664:return Pv;case 35665:return Lv;case 35666:return Dv;case 35674:return Nv;case 35675:return Fv;case 35676:return Uv;case 5124:case 35670:return Bv;case 35667:case 35671:return Ov;case 35668:case 35672:return zv;case 35669:case 35673:return kv;case 5125:return Hv;case 36294:return Vv;case 36295:return Gv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return $v}}function Kv(i,e){i.uniform1fv(this.addr,e)}function Jv(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function jv(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Qv(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function e_(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function t_(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function n_(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function i_(i,e){i.uniform1iv(this.addr,e)}function s_(i,e){i.uniform2iv(this.addr,e)}function r_(i,e){i.uniform3iv(this.addr,e)}function o_(i,e){i.uniform4iv(this.addr,e)}function a_(i,e){i.uniform1uiv(this.addr,e)}function l_(i,e){i.uniform2uiv(this.addr,e)}function c_(i,e){i.uniform3uiv(this.addr,e)}function u_(i,e){i.uniform4uiv(this.addr,e)}function h_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Au:o=Vf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function d_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Wf,r[o])}function f_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Xf,r[o])}function p_(i,e,t){let n=this.cache,s=e.length,r=Ll(t,s);Ht(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gf,r[o])}function m_(i){switch(i){case 5126:return Kv;case 35664:return Jv;case 35665:return jv;case 35666:return Qv;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return o_;case 5125:return a_;case 36294:return l_;case 36295:return c_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m_(t.type)}},Iu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},wu=/(\w+)(\])?(\[|\.)?/g;function Cf(i,e){i.seq.push(e),i.map[e.id]=e}function g_(i,e,t){let n=i.name,s=n.length;for(wu.lastIndex=0;;){let r=wu.exec(n),o=wu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(t,c===void 0?new Cu(a,i,e):new Ru(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Iu(a),Cf(t,h)),t=h}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);g_(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Rf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var x_=37297,v_=0;function __(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var If=new Ue;function y_(i){Oe._getMatrix(If,Oe.workingColorSpace,i);let e=`mat3( ${If.elements.map(t=>t.toFixed(4))} )`;switch(Oe.getTransfer(i)){case Dr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(e),a)}else return r}function S_(i,e){let t=y_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var b_={[vs]:"Linear",[_s]:"Reinhard",[ys]:"Cineon",[zi]:"ACESFilmic",[lo]:"AgX",[co]:"Neutral",[ao]:"Custom"};function M_(i,e){let t=b_[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cl=new I;function T_(){Oe.getLuminanceCoefficients(Cl);let i=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function E_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function A_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function bo(i){return i!==""}function Lf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace(C_,I_)}var R_=new Map;function I_(i,e){let t=He[e];if(t===void 0){let n=R_.get(e);if(n!==void 0)t=He[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pu(t)}var P_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(i){return i.replace(P_,L_)}function L_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var D_={[io]:"SHADOWMAP_TYPE_PCF",[Oi]:"SHADOWMAP_TYPE_VSM"};function N_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F_={[ki]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[Ss]:"ENVMAP_MODE_REFRACTION"};function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var z_={[tu]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Qd]:"ENVMAP_BLENDING_ADD"};function k_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z_[i.combine]||"ENVMAP_BLENDING_NONE"}function H_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function V_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=N_(t),c=U_(t),u=O_(t),h=k_(t),d=H_(t),f=w_(t),m=E_(r),_=s.createProgram(),g,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(bo).join(`
`),p.length>0&&(p+=`
`)):(g=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?He.tonemapping_pars_fragment:"",t.toneMapping!==kn?M_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,S_("linearToOutputTexel",t.outputColorSpace),T_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),o=Pu(o),o=Lf(o,t),o=Df(o,t),a=Pu(a),a=Lf(a,t),a=Df(a,t),o=Nf(o),a=Nf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=b+g+o,y=b+p+a,w=Rf(s,s.VERTEX_SHADER,E),T=Rf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(T)||"",B=L.trim(),W=H.trim(),X=V.trim(),J=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{let se=Pf(s,w,"vertex"),ae=Pf(s,T,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+se+`
`+ae)}else B!==""?Te("WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(j=!1);j&&(P.diagnostics={runnable:J,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(T),x=new pr(s,_),M=A_(s,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,x_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var G_=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Du(e),t.set(e,n)),n}},Du=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function W_(i){return i===Vi||i===go||i===xo}function X_(i,e,t,n,s,r){let o=new Ur,a=new Lu,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,M,R,P,L,H){let V=P.fog,B=L.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||W,X),j=J&&J.mapping===uo?J.image.height:null,se=f[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=ae!==void 0?ae.length:0,Ye=0;B.morphAttributes.position!==void 0&&(Ye=1),B.morphAttributes.normal!==void 0&&(Ye=2),B.morphAttributes.color!==void 0&&(Ye=3);let at,$e,$,ne;if(se){let ye=si[se];at=ye.vertexShader,$e=ye.fragmentShader}else{at=x.vertexShader,$e=x.fragmentShader;let ye=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,ye,Et),$=ye.id,ne=Et.id}let ee=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,Pe=L.isBatchedMesh===!0,pt=!!x.map,ke=!!x.matcap,et=!!J,Ze=!!x.aoMap,We=!!x.lightMap,xt=!!x.bumpMap&&x.wireframe===!1,bt=!!x.normalMap,wt=!!x.displacementMap,Ct=!!x.emissiveMap,ht=!!x.metalnessMap,vt=!!x.roughnessMap,N=x.anisotropy>0,Gt=x.clearcoat>0,Ke=x.dispersion>0,A=x.iridescence>0,v=x.sheen>0,U=x.transmission>0,O=N&&!!x.anisotropyMap,q=Gt&&!!x.clearcoatMap,te=Gt&&!!x.clearcoatNormalMap,oe=Gt&&!!x.clearcoatRoughnessMap,Y=A&&!!x.iridescenceMap,Z=A&&!!x.iridescenceThicknessMap,le=v&&!!x.sheenColorMap,Me=v&&!!x.sheenRoughnessMap,re=!!x.specularMap,ie=!!x.specularColorMap,Se=!!x.specularIntensityMap,Ae=U&&!!x.transmissionMap,Fe=U&&!!x.thicknessMap,D=!!x.gradientMap,ce=!!x.alphaMap,K=x.alphaTest>0,ue=!!x.alphaHash,me=!!x.extensions,Q=kn;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Q=i.toneMapping);let we={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:$e,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pt,matcap:ke,envMap:et,envMapMode:et&&J.mapping,envMapCubeUVHeight:j,aoMap:Ze,lightMap:We,bumpMap:xt,normalMap:bt,displacementMap:wt,emissiveMap:Ct,normalMapObjectSpace:bt&&x.normalMapType===sf,normalMapTangentSpace:bt&&x.normalMapType===_o,packedNormalMap:bt&&x.normalMapType===_o&&W_(x.normalMap.format),metalnessMap:ht,roughnessMap:vt,anisotropy:N,anisotropyMap:O,clearcoat:Gt,clearcoatMap:q,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:Ke,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:Z,sheen:v,sheenColorMap:le,sheenRoughnessMap:Me,specularMap:re,specularColorMap:ie,specularIntensityMap:Se,transmission:U,transmissionMap:Ae,thicknessMap:Fe,gradientMap:D,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:K,alphaHash:ue,combine:x.combine,mapUv:pt&&m(x.map.channel),aoMapUv:Ze&&m(x.aoMap.channel),lightMapUv:We&&m(x.lightMap.channel),bumpMapUv:xt&&m(x.bumpMap.channel),normalMapUv:bt&&m(x.normalMap.channel),displacementMapUv:wt&&m(x.displacementMap.channel),emissiveMapUv:Ct&&m(x.emissiveMap.channel),metalnessMapUv:ht&&m(x.metalnessMap.channel),roughnessMapUv:vt&&m(x.roughnessMap.channel),anisotropyMapUv:O&&m(x.anisotropyMap.channel),clearcoatMapUv:q&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&m(x.sheenRoughnessMap.channel),specularMapUv:re&&m(x.specularMap.channel),specularColorMapUv:ie&&m(x.specularColorMap.channel),specularIntensityMapUv:Se&&m(x.specularIntensityMap.channel),transmissionMapUv:Ae&&m(x.transmissionMap.channel),thicknessMapUv:Fe&&m(x.thicknessMap.channel),alphaMapUv:ce&&m(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(bt||N),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(pt||ce),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&bt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:pt&&x.map.isVideoTexture===!0&&Oe.getTransfer(x.map.colorSpace)===Qe,decodeVideoTextureEmissive:Ct&&x.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(x.emissiveMap.colorSpace)===Qe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&x.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(M,x),b(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function E(x){let M=f[x.type],R;if(M){let P=si[M];R=_n.clone(P.uniforms)}else R=x.uniforms;return R}function y(x,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new V_(i,M,x,s),c.push(R),u.set(M,R)),R}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:E,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:C}}function q_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Y_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Uf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,_,g,p){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=m,b.materialVariant=o(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=g,b.group=p),e++,b}function l(d,f,m,_,g,p){let b=a(d,f,m,_,g,p);m.transmission>0?n.push(b):m.transparent===!0?s.push(b):t.push(b)}function c(d,f,m,_,g,p){let b=a(d,f,m,_,g,p);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function u(d,f,m){t.length>1&&t.sort(d||Y_),n.length>1&&n.sort(f||Uf),s.length>1&&s.sort(f||Uf),m&&(t.reverse(),n.reverse(),s.reverse())}function h(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function $_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Bf,i.set(n,[o])):s>=r.length?(o=new Bf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new he};break;case"SpotLight":t={position:new I,direction:new I,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new he,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new he,groundColor:new he};break;case"RectAreaLight":t={color:new he,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function K_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var J_=0;function j_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Q_(i){let e=new Z_,t=K_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new De,o=new De;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,E=0,y=0,w=0,T=0,C=0;c.sort(j_);for(let M=0,R=c.length;M<R;M++){let P=c[M],L=P.color,H=P.intensity,V=P.distance,B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Vi?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=L.r*H,h+=L.g*H,d+=L.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],H);C++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,J=t.get(P);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(L).multiplyScalar(H),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;let X=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,X.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=X.matrix,P.castShadow){let J=t.get(P);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=B,y++}_++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(L).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=W,g++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let X=P.shadow,J=t.get(P);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=W,m++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let x=n.hash;(x.directionalLength!==f||x.pointLength!==m||x.spotLength!==_||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==E||x.numSpotShadows!==y||x.numSpotMaps!==w||x.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,x.directionalLength=f,x.pointLength=m,x.spotLength=_,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=E,x.numSpotShadows=y,x.numSpotMaps=w,x.numLightProbes=C,n.version=J_++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let E=c[p];if(E.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),h++}else if(E.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(E.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Of(i){let e=new Q_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function ey(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Of(i),e.set(s,[a])):r>=o.length?(a=new Of(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],sy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],zf=new De,So=new I,Eu=new I;function ry(i,e,t){let n=new tr,s=new _e,r=new _e,o=new st,a=new Aa,l=new Ca,c={},u=t.maxTextureSize,h={[Un]:$t,[$t]:Un,[xn]:xn},d=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Tt;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new je(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(T,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Od&&(Te("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=io);let M=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(kt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=p!==this.type;H&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(B=>B.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,B=T.length;V<B;V++){let W=T[V],X=W.shadow;if(X===void 0){Te("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let J=X.getFrameExtents();s.multiply(J),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,X.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=j,X.map===null||H===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Oi){if(W.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new yt(s.x,s.y,{format:Vi,type:Lt,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new zn(s.x,s.y,cn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Jn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_t,X.map.depthTexture.magFilter=_t}else W.isPointLight?(X.map=new Rl(s.x),X.map.depthTexture=new Ea(s.x,Vn)):(X.map=new yt(s.x,s.y),X.map.depthTexture=new zn(s.x,s.y,Vn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Jn,this.type===io?(X.map.depthTexture.compareFunction=j?El:wl,X.map.depthTexture.minFilter=Pt,X.map.depthTexture.magFilter=Pt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_t,X.map.depthTexture.magFilter=_t);X.camera.updateProjectionMatrix()}let se=X.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<se;ae++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(X.map),i.clear());let ge=X.getViewport(ae);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),L.viewport(o)}if(W.isPointLight){let ge=X.camera,Ye=X.matrix,at=W.distance||ge.far;at!==ge.far&&(ge.far=at,ge.updateProjectionMatrix()),So.setFromMatrixPosition(W.matrixWorld),ge.position.copy(So),Eu.copy(ge.position),Eu.add(iy[ae]),ge.up.copy(sy[ae]),ge.lookAt(Eu),ge.updateMatrixWorld(),Ye.makeTranslation(-So.x,-So.y,-So.z),zf.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),X._frustum.setFromProjectionMatrix(zf,ge.coordinateSystem,ge.reversedDepth)}else X.updateMatrices(W);n=X.getFrustum(),y(C,x,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===Oi&&b(X,x),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(M,R,P)};function b(T,C){let x=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yt(s.x,s.y,{format:Vi,type:Lt})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,x,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,x,f,_,null)}function E(T,C,x,M){let R=null,P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=R.uuid,H=C.uuid,V=c[L];V===void 0&&(V={},c[L]=V);let B=V[H];B===void 0&&(B=R.clone(),V[H]=B,C.addEventListener("dispose",w)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,M===Oi?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=x}return R}function y(T,C,x,M,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let H=e.update(T),V=T.material;if(Array.isArray(V)){let B=H.groups;for(let W=0,X=B.length;W<X;W++){let J=B[W],j=V[J.materialIndex];if(j&&j.visible){let se=E(T,j,M,R);T.onBeforeShadow(i,T,C,x,H,se,J),i.renderBufferDirect(x,null,H,se,T,J),T.onAfterShadow(i,T,C,x,H,se,J)}}}else if(V.visible){let B=E(T,V,M,R);T.onBeforeShadow(i,T,C,x,H,B,null),i.renderBufferDirect(x,null,H,B,T,null),T.onAfterShadow(i,T,C,x,H,B,null)}}let L=T.children;for(let H=0,V=L.length;H<V;H++)y(L[H],C,x,M,R)}function w(T){T.target.removeEventListener("dispose",w);for(let x in c){let M=c[x],R=T.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function oy(i,e){function t(){let D=!1,ce=new st,K=null,ue=new st(0,0,0,0);return{setMask:function(me){K!==me&&!D&&(i.colorMask(me,me,me,me),K=me)},setLocked:function(me){D=me},setClear:function(me,Q,we,ye,Et){Et===!0&&(me*=ye,Q*=ye,we*=ye),ce.set(me,Q,we,ye),ue.equals(ce)===!1&&(i.clearColor(me,Q,we,ye),ue.copy(ce))},reset:function(){D=!1,K=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,K=null,ue=null,me=null;return{setReversed:function(Q){if(ce!==Q){let we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=Q;let ye=me;me=null,this.setClear(ye)}},getReversed:function(){return ce},setTest:function(Q){Q?ee(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(Q){K!==Q&&!D&&(i.depthMask(Q),K=Q)},setFunc:function(Q){if(ce&&(Q=pf[Q]),ue!==Q){switch(Q){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Q}},setLocked:function(Q){D=Q},setClear:function(Q){me!==Q&&(me=Q,ce&&(Q=1-Q),i.clearDepth(Q))},reset:function(){D=!1,K=null,ue=null,me=null,ce=!1}}}function s(){let D=!1,ce=null,K=null,ue=null,me=null,Q=null,we=null,ye=null,Et=null;return{setTest:function(dt){D||(dt?ee(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(dt){ce!==dt&&!D&&(i.stencilMask(dt),ce=dt)},setFunc:function(dt,Xn,qn){(K!==dt||ue!==Xn||me!==qn)&&(i.stencilFunc(dt,Xn,qn),K=dt,ue=Xn,me=qn)},setOp:function(dt,Xn,qn){(Q!==dt||we!==Xn||ye!==qn)&&(i.stencilOp(dt,Xn,qn),Q=dt,we=Xn,ye=qn)},setLocked:function(dt){D=dt},setClear:function(dt){Et!==dt&&(i.clearStencil(dt),Et=dt)},reset:function(){D=!1,ce=null,K=null,ue=null,me=null,Q=null,we=null,ye=null,Et=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,E=null,y=null,w=null,T=null,C=null,x=new he(0,0,0),M=0,R=!1,P=null,L=null,H=null,V=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,J=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=J>=2);let se=null,ae={},ge=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),at=new st().fromArray(ge),$e=new st().fromArray(Ye);function $(D,ce,K,ue){let me=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<K;we++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ce+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return Q}let ne={};ne[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(ss),xt(!1),bt(jc),ee(i.CULL_FACE),Ze(kt);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Re(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Le(D,ce){return d[D]!==ce?(i.bindFramebuffer(D,ce),d[D]=ce,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(D,ce){let K=m,ue=!1;if(D){K=f.get(ce),K===void 0&&(K=[],f.set(ce,K));let me=D.textures;if(K.length!==me.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,we=me.length;Q<we;Q++)K[Q]=i.COLOR_ATTACHMENT0+Q;K.length=me.length,ue=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ue=!0);ue&&i.drawBuffers(K)}function pt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let ke={[Tn]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};ke[Hd]=i.MIN,ke[Vd]=i.MAX;let et={[ro]:i.ZERO,[oo]:i.ONE,[Gd]:i.SRC_COLOR,[da]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[ka]:i.DST_COLOR,[za]:i.DST_ALPHA,[Wd]:i.ONE_MINUS_SRC_COLOR,[is]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Xd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[Zd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[Jd]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,ce,K,ue,me,Q,we,ye,Et,dt){if(D===kt){g===!0&&(Re(i.BLEND),g=!1);return}if(g===!1&&(ee(i.BLEND),g=!0),D!==ar){if(D!==p||dt!==R){if((b!==Tn||w!==Tn)&&(i.blendEquation(i.FUNC_ADD),b=Tn,w=Tn),dt)switch(D){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",D);break}else switch(D){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case so:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",D);break}E=null,y=null,T=null,C=null,x.set(0,0,0),M=0,p=D,R=dt}return}me=me||ce,Q=Q||K,we=we||ue,(ce!==b||me!==w)&&(i.blendEquationSeparate(ke[ce],ke[me]),b=ce,w=me),(K!==E||ue!==y||Q!==T||we!==C)&&(i.blendFuncSeparate(et[K],et[ue],et[Q],et[we]),E=K,y=ue,T=Q,C=we),(ye.equals(x)===!1||Et!==M)&&(i.blendColor(ye.r,ye.g,ye.b,Et),x.copy(ye),M=Et),p=D,R=!1}function We(D,ce){D.side===xn?Re(i.CULL_FACE):ee(i.CULL_FACE);let K=D.side===$t;ce&&(K=!K),xt(K),D.blending===ns&&D.transparent===!1?Ze(kt):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let ue=D.stencilWrite;a.setTest(ue),ue&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function xt(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function bt(D){D!==Ud?(ee(i.CULL_FACE),D!==L&&(D===jc?i.cullFace(i.BACK):D===Bd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),L=D}function wt(D){D!==H&&(X&&i.lineWidth(D),H=D)}function Ct(D,ce,K){D?(ee(i.POLYGON_OFFSET_FILL),(V!==ce||B!==K)&&(V=ce,B=K,o.getReversed()&&(ce=-ce),i.polygonOffset(ce,K))):Re(i.POLYGON_OFFSET_FILL)}function ht(D){D?ee(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function vt(D){D===void 0&&(D=i.TEXTURE0+W-1),se!==D&&(i.activeTexture(D),se=D)}function N(D,ce,K){K===void 0&&(se===null?K=i.TEXTURE0+W-1:K=se);let ue=ae[K];ue===void 0&&(ue={type:void 0,texture:void 0},ae[K]=ue),(ue.type!==D||ue.texture!==ce)&&(se!==K&&(i.activeTexture(K),se=K),i.bindTexture(D,ce||ne[D]),ue.type=D,ue.texture=ce)}function Gt(){let D=ae[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Ke(){try{i.compressedTexImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function v(){try{i.texSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function U(){try{i.texSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function te(){try{i.texStorage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function oe(){try{i.texStorage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Ne("WebGLState:",D)}}function Z(){try{i.texImage3D(...arguments)}catch(D){Ne("WebGLState:",D)}}function le(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function Me(D,ce){h[D]!==ce&&(i.pixelStorei(D,ce),h[D]=ce)}function re(D){at.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),at.copy(D))}function ie(D){$e.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$e.copy(D))}function Se(D,ce){let K=c.get(ce);K===void 0&&(K=new WeakMap,c.set(ce,K));let ue=K.get(D);ue===void 0&&(ue=i.getUniformBlockIndex(ce,D.name),K.set(D,ue))}function Ae(D,ce){let ue=c.get(ce).get(D);l.get(ce)!==ue&&(i.uniformBlockBinding(ce,ue,D.__bindingPointIndex),l.set(ce,ue))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},se=null,ae={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,b=null,E=null,y=null,w=null,T=null,C=null,x=new he(0,0,0),M=0,R=!1,P=null,L=null,H=null,V=null,B=null,at.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:Re,bindFramebuffer:Le,drawBuffers:Pe,useProgram:pt,setBlending:Ze,setMaterial:We,setFlipSided:xt,setCullFace:bt,setLineWidth:wt,setPolygonOffset:Ct,setScissorTest:ht,activeTexture:vt,bindTexture:N,unbindTexture:Gt,compressedTexImage2D:Ke,compressedTexImage3D:A,texImage2D:Y,texImage3D:Z,pixelStorei:Me,getParameter:le,updateUBOMapping:Se,uniformBlockBinding:Ae,texStorage2D:te,texStorage3D:oe,texSubImage2D:v,texSubImage3D:U,compressedTexSubImage2D:O,compressedTexSubImage3D:q,scissor:re,viewport:ie,reset:Fe}}function ay(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function _(A,v){return m?new OffscreenCanvas(A,v):$s("canvas")}function g(A,v,U){let O=1,q=Ke(A);if((q.width>U||q.height>U)&&(O=U/Math.max(q.width,q.height)),O<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let te=Math.floor(O*q.width),oe=Math.floor(O*q.height);d===void 0&&(d=_(te,oe));let Y=v?_(te,oe):d;return Y.width=te,Y.height=oe,Y.getContext("2d").drawImage(A,0,0,te,oe),Te("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+te+"x"+oe+")."),Y}else return"data"in A&&Te("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function b(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,U,O,q,te=!1){if(A!==null){if(i[A]!==void 0)return i[A];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;O&&(oe=e.get("EXT_texture_norm16"),oe||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8),U===i.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),U===i.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),v===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8),U===i.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),U===i.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),U===i.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let Z=te?Dr:Oe.getTransfer(q);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=Z===Qe?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),U===i.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function w(A,v){let U;return A?v===null||v===Vn||v===Hi?U=i.DEPTH24_STENCIL8:v===cn?U=i.DEPTH32F_STENCIL8:v===ur&&(U=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Vn||v===Hi?U=i.DEPTH_COMPONENT24:v===cn?U=i.DEPTH_COMPONENT32F:v===ur&&(U=i.DEPTH_COMPONENT16),U}function T(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==_t&&A.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){let v=A.target;v.removeEventListener("dispose",C),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function x(A){let v=A.target;v.removeEventListener("dispose",x),P(v)}function M(A){let v=n.get(A);if(v.__webglInit===void 0)return;let U=A.source,O=f.get(U);if(O){let q=O[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(A),Object.keys(O).length===0&&f.delete(U)}n.remove(A)}function R(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let U=A.source,O=f.get(U);delete O[v.__cacheKey],o.memory.textures--}function P(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let q=0;q<v.__webglFramebuffer[O].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[O][q]);else i.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)i.deleteFramebuffer(v.__webglFramebuffer[O]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=A.textures;for(let O=0,q=U.length;O<q;O++){let te=n.get(U[O]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(U[O])}n.remove(A)}let L=0;function H(){L=0}function V(){return L}function B(A){L=A}function W(){let A=L;return A>=s.maxTextures&&Te("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function X(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function J(A,v){let U=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){let O=A.image;if(O===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(U,A,v);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function j(A,v){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Re(U,A,v);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function se(A,v){let U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Re(U,A,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function ae(A,v){let U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){Le(U,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let ge={[Bn]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[qs]:i.MIRRORED_REPEAT},Ye={[_t]:i.NEAREST,[Va]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[cr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},at={[rf]:i.NEVER,[uf]:i.ALWAYS,[of]:i.LESS,[wl]:i.LEQUAL,[af]:i.EQUAL,[El]:i.GEQUAL,[lf]:i.GREATER,[cf]:i.NOTEQUAL};function $e(A,v){if(v.type===cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Pt||v.magFilter===cr||v.magFilter===bs||v.magFilter===Hn||v.minFilter===Pt||v.minFilter===cr||v.minFilter===bs||v.minFilter===Hn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ge[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ge[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ge[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Ye[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Ye[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,at[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_t||v.minFilter!==bs&&v.minFilter!==Hn||v.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $(A,v){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));let O=v.source,q=f.get(O);q===void 0&&(q={},f.set(O,q));let te=X(v);if(te!==A.__cacheKey){q[te]===void 0&&(q[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),q[te].usedTimes++;let oe=q[A.__cacheKey];oe!==void 0&&(q[A.__cacheKey].usedTimes--,oe.usedTimes===0&&R(v)),A.__cacheKey=te,A.__webglTexture=q[te].texture}return U}function ne(A,v,U){return Math.floor(Math.floor(A/U)/v)}function ee(A,v,U,O){let te=A.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,O,v.data);else{te.sort((Me,re)=>Me.start-re.start);let oe=0;for(let Me=1;Me<te.length;Me++){let re=te[oe],ie=te[Me],Se=re.start+re.count,Ae=ne(ie.start,v.width,4),Fe=ne(re.start,v.width,4);ie.start<=Se+1&&Ae===Fe&&ne(ie.start+ie.count-1,v.width,4)===Ae?re.count=Math.max(re.count,ie.start+ie.count-re.start):(++oe,te[oe]=ie)}te.length=oe+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),le=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Me=0,re=te.length;Me<re;Me++){let ie=te[Me],Se=Math.floor(ie.start/4),Ae=Math.ceil(ie.count/4),Fe=Se%v.width,D=Math.floor(Se/v.width),ce=Ae,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Fe,D,ce,K,U,O,v.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,le)}}function Re(A,v,U){let O=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=i.TEXTURE_3D);let q=$(A,v),te=v.source;t.bindTexture(O,A.__webglTexture,i.TEXTURE0+U);let oe=n.get(te);if(te.version!==oe.__version||q===!0){if(t.activeTexture(i.TEXTURE0+U),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let K=Oe.getPrimaries(Oe.workingColorSpace),ue=v.colorSpace===bi?null:Oe.getPrimaries(v.colorSpace),me=v.colorSpace===bi||K===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=g(v.image,!1,s.maxTextureSize);Z=Gt(v,Z);let le=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),re=y(v.internalFormat,le,Me,v.normalized,v.colorSpace,v.isVideoTexture);$e(O,v);let ie,Se=v.mipmaps,Ae=v.isVideoTexture!==!0,Fe=oe.__version===void 0||q===!0,D=te.dataReady,ce=T(v,Z);if(v.isDepthTexture)re=w(v.format===ni,v.type),Fe&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,re,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,re,Z.width,Z.height,0,le,Me,null));else if(v.isDataTexture)if(Se.length>0){Ae&&Fe&&t.texStorage2D(i.TEXTURE_2D,ce,re,Se[0].width,Se[0].height);for(let K=0,ue=Se.length;K<ue;K++)ie=Se[K],Ae?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ie.width,ie.height,le,Me,ie.data):t.texImage2D(i.TEXTURE_2D,K,re,ie.width,ie.height,0,le,Me,ie.data);v.generateMipmaps=!1}else Ae?(Fe&&t.texStorage2D(i.TEXTURE_2D,ce,re,Z.width,Z.height),D&&ee(v,Z,le,Me)):t.texImage2D(i.TEXTURE_2D,0,re,Z.width,Z.height,0,le,Me,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ae&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,re,Se[0].width,Se[0].height,Z.depth);for(let K=0,ue=Se.length;K<ue;K++)if(ie=Se[K],v.format!==un)if(le!==null)if(Ae){if(D)if(v.layerUpdates.size>0){let me=mu(ie.width,ie.height,v.format,v.type);for(let Q of v.layerUpdates){let we=ie.data.subarray(Q*me/ie.data.BYTES_PER_ELEMENT,(Q+1)*me/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Q,ie.width,ie.height,1,le,we)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ie.width,ie.height,Z.depth,le,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,re,ie.width,ie.height,Z.depth,0,ie.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ie.width,ie.height,Z.depth,le,Me,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,re,ie.width,ie.height,Z.depth,0,le,Me,ie.data)}else{Ae&&Fe&&t.texStorage2D(i.TEXTURE_2D,ce,re,Se[0].width,Se[0].height);for(let K=0,ue=Se.length;K<ue;K++)ie=Se[K],v.format!==un?le!==null?Ae?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ie.width,ie.height,le,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,K,re,ie.width,ie.height,0,ie.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,ie.width,ie.height,le,Me,ie.data):t.texImage2D(i.TEXTURE_2D,K,re,ie.width,ie.height,0,le,Me,ie.data)}else if(v.isDataArrayTexture)if(Ae){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,re,Z.width,Z.height,Z.depth),D)if(v.layerUpdates.size>0){let K=mu(Z.width,Z.height,v.format,v.type);for(let ue of v.layerUpdates){let me=Z.data.subarray(ue*K/Z.data.BYTES_PER_ELEMENT,(ue+1)*K/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,Z.width,Z.height,1,le,Me,me)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,Me,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,re,Z.width,Z.height,Z.depth,0,le,Me,Z.data);else if(v.isData3DTexture)Ae?(Fe&&t.texStorage3D(i.TEXTURE_3D,ce,re,Z.width,Z.height,Z.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,Me,Z.data)):t.texImage3D(i.TEXTURE_3D,0,re,Z.width,Z.height,Z.depth,0,le,Me,Z.data);else if(v.isFramebufferTexture){if(Fe)if(Ae)t.texStorage2D(i.TEXTURE_2D,ce,re,Z.width,Z.height);else{let K=Z.width,ue=Z.height;for(let me=0;me<ce;me++)t.texImage2D(i.TEXTURE_2D,me,re,K,ue,0,le,Me,null),K>>=1,ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Z.parentNode!==K){K.appendChild(Z),h.add(v),K.onpaint=ue=>{let me=ue.changedElements;for(let Q of h)me.includes(Q.image)&&(Q.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let me=i.RGBA,Q=i.RGBA,we=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,me,Q,we,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Se.length>0){if(Ae&&Fe){let K=Ke(Se[0]);t.texStorage2D(i.TEXTURE_2D,ce,re,K.width,K.height)}for(let K=0,ue=Se.length;K<ue;K++)ie=Se[K],Ae?D&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,le,Me,ie):t.texImage2D(i.TEXTURE_2D,K,re,le,Me,ie);v.generateMipmaps=!1}else if(Ae){if(Fe){let K=Ke(Z);t.texStorage2D(i.TEXTURE_2D,ce,re,K.width,K.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Me,Z)}else t.texImage2D(i.TEXTURE_2D,0,re,le,Me,Z);p(v)&&b(O),oe.__version=te.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Le(A,v,U){if(v.image.length!==6)return;let O=$(A,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);let te=n.get(q);if(q.version!==te.__version||O===!0){t.activeTexture(i.TEXTURE0+U);let oe=Oe.getPrimaries(Oe.workingColorSpace),Y=v.colorSpace===bi?null:Oe.getPrimaries(v.colorSpace),Z=v.colorSpace===bi||oe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let le=v.isCompressedTexture||v.image[0].isCompressedTexture,Me=v.image[0]&&v.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!le&&!Me?re[Q]=g(v.image[Q],!0,s.maxCubemapSize):re[Q]=Me?v.image[Q].image:v.image[Q],re[Q]=Gt(v,re[Q]);let ie=re[0],Se=r.convert(v.format,v.colorSpace),Ae=r.convert(v.type),Fe=y(v.internalFormat,Se,Ae,v.normalized,v.colorSpace),D=v.isVideoTexture!==!0,ce=te.__version===void 0||O===!0,K=q.dataReady,ue=T(v,ie);$e(i.TEXTURE_CUBE_MAP,v);let me;if(le){D&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Fe,ie.width,ie.height);for(let Q=0;Q<6;Q++){me=re[Q].mipmaps;for(let we=0;we<me.length;we++){let ye=me[we];v.format!==un?Se!==null?D?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ye.width,ye.height,Se,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Fe,ye.width,ye.height,0,ye.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ye.width,ye.height,Se,Ae,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,Fe,ye.width,ye.height,0,Se,Ae,ye.data)}}}else{if(me=v.mipmaps,D&&ce){me.length>0&&ue++;let Q=Ke(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Fe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Me){D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,Se,Ae,re[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,re[Q].width,re[Q].height,0,Se,Ae,re[Q].data);for(let we=0;we<me.length;we++){let Et=me[we].image[Q].image;D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Et.width,Et.height,Se,Ae,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Fe,Et.width,Et.height,0,Se,Ae,Et.data)}}else{D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Se,Ae,re[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Fe,Se,Ae,re[Q]);for(let we=0;we<me.length;we++){let ye=me[we];D?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Se,Ae,ye.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,Fe,Se,Ae,ye.image[Q])}}}p(v)&&b(i.TEXTURE_CUBE_MAP),te.__version=q.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Pe(A,v,U,O,q,te){let oe=r.convert(U.format,U.colorSpace),Y=r.convert(U.type),Z=y(U.internalFormat,oe,Y,U.normalized,U.colorSpace),le=n.get(v),Me=n.get(U);if(Me.__renderTarget=v,!le.__hasExternalTextures){let re=Math.max(1,v.width>>te),ie=Math.max(1,v.height>>te);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,te,Z,re,ie,v.depth,0,oe,Y,null):t.texImage2D(q,te,Z,re,ie,0,oe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,O,q,Me.__webglTexture,0,ht(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,O,q,Me.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let O=v.depthTexture,q=O&&O.isDepthTexture?O.type:null,te=w(v.stencilBuffer,q),oe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),te,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,A)}else{let O=v.textures;for(let q=0;q<O.length;q++){let te=O[q],oe=r.convert(te.format,te.colorSpace),Y=r.convert(te.type),Z=y(te.internalFormat,oe,Y,te.normalized,te.colorSpace);vt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(v),Z,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(A,v,U){let O=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),O){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v.depthTexture);let le=r.convert(v.depthTexture.format),Me=r.convert(v.depthTexture.type),re;v.depthTexture.format===Jn?re=i.DEPTH_COMPONENT24:v.depthTexture.format===ni&&(re=i.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,re,v.width,v.height,0,le,Me,null)}}else J(v.depthTexture,0);let te=q.__webglTexture,oe=ht(v),Y=O?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,Z=v.depthTexture.format===ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Jn)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,te,0);else if(v.depthTexture.format===ni)vt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Y,te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,Z,Y,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let v=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",q)};O.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=O}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let O=0;O<6;O++)ke(v.__webglFramebuffer[O],A,O);else{let O=A.texture.mipmaps;O&&O.length>0?ke(v.__webglFramebuffer[0],A,0):ke(v.__webglFramebuffer,A,0)}else if(U){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=i.createRenderbuffer(),pt(v.__webglDepthbuffer[O],A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[O];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,te)}}else{let O=A.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pt(v.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(A,v,U){let O=n.get(A);v!==void 0&&Pe(O.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&et(A)}function We(A){let v=A.texture,U=n.get(A),O=n.get(v);A.addEventListener("dispose",x);let q=A.textures,te=A.isWebGLCubeRenderTarget===!0,oe=q.length>1;if(oe||(O.__webglTexture===void 0&&(O.__webglTexture=i.createTexture()),O.__version=v.version,o.memory.textures++),te){U.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[Y]=[];for(let Z=0;Z<v.mipmaps.length;Z++)U.__webglFramebuffer[Y][Z]=i.createFramebuffer()}else U.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)U.__webglFramebuffer[Y]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(oe)for(let Y=0,Z=q.length;Y<Z;Y++){let le=n.get(q[Y]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&vt(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let Z=q[Y];U.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Y]);let le=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),re=y(Z.internalFormat,le,Me,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),ie=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,U.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Pe(U.__webglFramebuffer[Y][Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z);else Pe(U.__webglFramebuffer[Y],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(v)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let Y=0,Z=q.length;Y<Z;Y++){let le=q[Y],Me=n.get(le),re=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,Me.__webglTexture),$e(re,le),Pe(U.__webglFramebuffer,A,le,i.COLOR_ATTACHMENT0+Y,re,0),p(le)&&b(re)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,O.__webglTexture),$e(Y,v),v.mipmaps&&v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Pe(U.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,Y,Z);else Pe(U.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Y,0);p(v)&&b(Y),t.unbindTexture()}A.depthBuffer&&et(A)}function xt(A){let v=A.textures;for(let U=0,O=v.length;U<O;U++){let q=v[U];if(p(q)){let te=E(A),oe=n.get(q).__webglTexture;t.bindTexture(te,oe),b(te),t.unbindTexture()}}}let bt=[],wt=[];function Ct(A){if(A.samples>0){if(vt(A)===!1){let v=A.textures,U=A.width,O=A.height,q=i.COLOR_BUFFER_BIT,te=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(A),Y=v.length>1;if(Y)for(let le=0;le<v.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let Z=A.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<v.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Me=n.get(v[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,U,O,0,0,U,O,q,i.NEAREST),l===!0&&(bt.length=0,wt.length=0,bt.push(i.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.resolveDepthBuffer===!1&&(bt.push(te),wt.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let le=0;le<v.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Me=n.get(v[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,Me,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(A){let v=o.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Gt(A,v){let U=A.colorSpace,O=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==on&&U!==bi&&(Oe.getTransfer(U)===Qe?(O!==un||q!==vn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",U)),v}function Ke(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=V,this.setTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=Ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ly(i,e){function t(n,s=bi){let r,o=Oe.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===Lt)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===lu)return i.RGB;if(n===un)return i.RGBA;if(n===Jn)return i.DEPTH_COMPONENT;if(n===ni)return i.DEPTH_STENCIL;if(n===hr)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===Ya)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===ho||n===fo||n===po||n===mo)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Ka||n===Ja||n===ja)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===el||n===tl||n===nl||n===il||n===go||n===sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qa||n===el)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nl)return r.COMPRESSED_R11_EAC;if(n===il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===go)return r.COMPRESSED_RG11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===yl||n===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bl||n===Ml||n===xo||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tt({vertexShader:cy,fragmentShader:uy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fu=class extends jn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding!="undefined",g=new Nu,p={},b=t.getContextAttributes(),E=null,y=null,w=[],T=[],C=new _e,x=null,M=new Ut;M.viewport=new st;let R=new Ut;R.viewport=new st;let P=[M,R],L=new Ba,H=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=w[$];return ne===void 0&&(ne=new Js,w[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=w[$];return ne===void 0&&(ne=new Js,w[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=w[$];return ne===void 0&&(ne=new Js,w[$]=ne),ne.getHandSpace()};function B($){let ne=T.indexOf($.inputSource);if(ne===-1)return;let ee=w[ne];ee!==void 0&&(ee.update($.inputSource,$.frame,c||o),ee.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let $=0;$<w.length;$++){let ne=T[$];ne!==null&&(T[$]=null,w[$].disconnect(ne))}H=null,V=null,g.reset();for(let $ in p)delete p[$];e.setRenderTarget(E),f=null,d=null,h=null,s=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Re=null,Le=null;b.depth&&(Le=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=b.stencil?ni:Jn,Re=b.stencil?Hi:Vn);let Pe={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new yt(d.textureWidth,d.textureHeight,{format:un,type:vn,depthTexture:new zn(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ee={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yt(f.framebufferWidth,f.framebufferHeight,{format:un,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X($){for(let ne=0;ne<$.removed.length;ne++){let ee=$.removed[ne],Re=T.indexOf(ee);Re>=0&&(T[Re]=null,w[Re].disconnect(ee))}for(let ne=0;ne<$.added.length;ne++){let ee=$.added[ne],Re=T.indexOf(ee);if(Re===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=T.length){T.push(ee),Re=Pe;break}else if(T[Pe]===null){T[Pe]=ee,Re=Pe;break}if(Re===-1)break}let Le=w[Re];Le&&Le.connect(ee)}}let J=new I,j=new I;function se($,ne,ee){J.setFromMatrixPosition(ne.matrixWorld),j.setFromMatrixPosition(ee.matrixWorld);let Re=J.distanceTo(j),Le=ne.projectionMatrix.elements,Pe=ee.projectionMatrix.elements,pt=Le[14]/(Le[10]-1),ke=Le[14]/(Le[10]+1),et=(Le[9]+1)/Le[5],Ze=(Le[9]-1)/Le[5],We=(Le[8]-1)/Le[0],xt=(Pe[8]+1)/Pe[0],bt=pt*We,wt=pt*xt,Ct=Re/(-We+xt),ht=Ct*-We;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(Ct),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Le[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let vt=pt+Ct,N=ke+Ct,Gt=bt-ht,Ke=wt+(Re-ht),A=et*ke/N*vt,v=Ze*ke/N*vt;$.projectionMatrix.makePerspective(Gt,Ke,A,v,vt,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ne=$.near,ee=$.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(ee=g.depthFar)),L.near=R.near=M.near=ne,L.far=R.far=M.far=ee,(H!==L.near||V!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,V=L.far),L.layers.mask=$.layers.mask|6,M.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let Re=$.parent,Le=L.cameras;ae(L,Re);for(let Pe=0;Pe<Le.length;Pe++)ae(Le[Pe],Re);Le.length===2?se(L,M,R):L.projectionMatrix.copy(M.projectionMatrix),ge($,L,Re)};function ge($,ne,ee){ee===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=as*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function($){return p[$]};let Ye=null;function at($,ne){if(u=ne.getViewerPose(c||o),m=ne,u!==null){let ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Re=!1;ee.length!==L.cameras.length&&(L.cameras.length=0,Re=!0);for(let ke=0;ke<ee.length;ke++){let et=ee[ke],Ze=null;if(f!==null)Ze=f.getViewport(et);else{let xt=h.getViewSubImage(d,et);Ze=xt.viewport,ke===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let We=P[ke];We===void 0&&(We=new Ut,We.layers.enable(ke),We.viewport=new st,P[ke]=We),We.matrix.fromArray(et.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(et.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ke===0&&(L.matrix.copy(We.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Re===!0&&L.cameras.push(We)}let Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let ke=h.getDepthInformation(ee[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,s.renderState)}if(Le&&Le.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let ke=0;ke<ee.length;ke++){let et=ee[ke].camera;if(et){let Ze=p[et];Ze||(Ze=new Xr,p[et]=Ze);let We=h.getCameraImage(et);Ze.sourceTexture=We}}}}for(let ee=0;ee<w.length;ee++){let Re=T[ee],Le=w[ee];Re!==null&&Le!==void 0&&Le.update(Re,ne,c||o)}Ye&&Ye($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),m=null}let $e=new kf;$e.setAnimationLoop(at),this.setAnimationLoop=function($){Ye=$},this.dispose=function(){}}},hy=new De,qf=new Ue;qf.set(-1,0,0,0,1,0,0,0,1);function dy(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,du(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=e.get(p),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(qf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let T=w.program;n.uniformBlockBinding(y,T)}function c(y,w){let T=s[y.id];T===void 0&&(g(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",b));let C=w.program;n.updateUBOMapping(y,C);let x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function u(y){let w=h();y.__bindingPointIndex=w;let T=i.createBuffer(),C=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let w=s[y.id],T=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,M=T.length;x<M;x++){let R=T[x];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)f(R[P],x,P,C);else f(R,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,T,C){if(_(y,w,T,C)===!0){let x=y.__offset,M=y.value;if(Array.isArray(M)){let R=0;for(let P=0;P<M.length;P++){let L=M[P],H=p(L);m(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function m(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function _(y,w,T,C){let x=y.value,M=w+"_"+T;if(C[M]===void 0)return typeof x=="number"||typeof x=="boolean"?C[M]=x:ArrayBuffer.isView(x)?C[M]=x.slice():C[M]=x.clone(),!0;{let R=C[M];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let w=y.uniforms,T=0,C=16;for(let M=0,R=w.length;M<R;M++){let P=Array.isArray(w[M])?w[M]:[w[M]];for(let L=0,H=P.length;L<H;L++){let V=P[L],B=Array.isArray(V.value)?V.value:[V.value];for(let W=0,X=B.length;W<X;W++){let J=B[W],j=p(J),se=T%C,ae=se%j.boundary,ge=se+ae;T+=ae,ge!==0&&C-ge<j.storage&&(T+=C-ge),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=j.storage}}}let x=T%C;return x>0&&(T+=C-x),y.__size=T,y.__cache={},this}function p(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",y),w}function b(y){let w=y.target;w.removeEventListener("dispose",b);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function E(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var py=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function my(){return ii===null&&(ii=new Fi(py,16,16,Vi,Lt),ii.name="DFG_LUT",ii.minFilter=Pt,ii.magFilter=Pt,ii.wrapS=An,ii.wrapT=An,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var Il=class{constructor(e={}){let{canvas:t=hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([$a,Ya,qa]),p=new Set([vn,Vn,ur,Hi,Wa,Xa]),b=new Uint32Array(4),E=new Int32Array(4),y=new I,w=null,T=null,C=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,H=null,V=null,B=null;this._outputColorSpace=Mt;let W=0,X=0,J=null,j=-1,se=null,ae=new st,ge=new st,Ye=null,at=new he(0),$e=0,$=t.width,ne=t.height,ee=1,Re=null,Le=null,Pe=new st(0,0,$,ne),pt=new st(0,0,$,ne),ke=!1,et=new tr,Ze=!1,We=!1,xt=new De,bt=new I,wt=new st,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function vt(){return J===null?ee:1}let N=n;function Gt(S,F){return t.getContext(S,F)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Xn,!1),N===null){let F="webgl2";if(N=Gt(F,S),N===null)throw Gt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ne("WebGLRenderer: "+S.message),S}let Ke,A,v,U,O,q,te,oe,Y,Z,le,Me,re,ie,Se,Ae,Fe,D,ce,K,ue,me,Q;function we(){Ke=new bv(N),Ke.init(),ue=new ly(N,Ke),A=new pv(N,Ke,e,ue),v=new oy(N,Ke),A.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),H=N.createFramebuffer(),V=N.createFramebuffer(),B=N.createFramebuffer(),U=new wv(N),O=new q_,q=new ay(N,Ke,v,O,A,ue,U),te=new Sv(R),oe=new Rg(N),me=new dv(N,oe),Y=new Mv(N,oe,U,me),Z=new Av(N,Y,oe,me,U),D=new Ev(N,A,q),Se=new mv(O),le=new X_(R,te,Ke,A,me,Se),Me=new dy(R,O),re=new $_,ie=new ey(Ke),Fe=new hv(R,te,v,Z,m,l),Ae=new ry(R,Z,A),Q=new fy(N,U,A,v),ce=new fv(N,Ke,U),K=new Tv(N,Ke,U),U.programs=le.programs,R.capabilities=A,R.extensions=Ke,R.properties=O,R.renderLists=re,R.shadowMap=Ae,R.state=v,R.info=U}we(),_!==vn&&(M=new Rv(_,t.width,t.height,a,s,r));let ye=new Fu(R,N);this.xr=ye,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=Ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(S){S!==void 0&&(ee=S,this.setSize($,ne,!1))},this.getSize=function(S){return S.set($,ne)},this.setSize=function(S,F,G=!0){if(ye.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,ne=F,t.width=Math.floor(S*ee),t.height=Math.floor(F*ee),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set($*ee,ne*ee).floor()},this.setDrawingBufferSize=function(S,F,G){$=S,ne=F,ee=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===vn){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ae)},this.getViewport=function(S){return S.copy(Pe)},this.setViewport=function(S,F,G,z){S.isVector4?Pe.set(S.x,S.y,S.z,S.w):Pe.set(S,F,G,z),v.viewport(ae.copy(Pe).multiplyScalar(ee).round())},this.getScissor=function(S){return S.copy(pt)},this.setScissor=function(S,F,G,z){S.isVector4?pt.set(S.x,S.y,S.z,S.w):pt.set(S,F,G,z),v.scissor(ge.copy(pt).multiplyScalar(ee).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(S){v.setScissorTest(ke=S)},this.setOpaqueSort=function(S){Re=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,G=!0){let z=0;if(S){let k=!1;if(J!==null){let pe=J.texture.format;k=g.has(pe)}if(k){let pe=J.texture.type,ve=p.has(pe),fe=Fe.getClearColor(),be=Fe.getClearAlpha(),Ee=fe.r,Be=fe.g,Ve=fe.b;ve?(b[0]=Ee,b[1]=Be,b[2]=Ve,b[3]=be,N.clearBufferuiv(N.COLOR,0,b)):(E[0]=Ee,E[1]=Be,E[2]=Ve,E[3]=be,N.clearBufferiv(N.COLOR,0,E))}else z|=N.COLOR_BUFFER_BIT}F&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Xn,!1),Fe.dispose(),re.dispose(),ie.dispose(),O.dispose(),te.dispose(),Z.dispose(),me.dispose(),Q.dispose(),le.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",qh),ye.removeEventListener("sessionend",Yh),Zi.stop()};function Et(S){S.preventDefault(),Nr("WebGLRenderer: Context Lost."),P=!0}function dt(){Nr("WebGLRenderer: Context Restored."),P=!1;let S=U.autoReset,F=Ae.enabled,G=Ae.autoUpdate,z=Ae.needsUpdate,k=Ae.type;we(),U.autoReset=S,Ae.enabled=F,Ae.autoUpdate=G,Ae.needsUpdate=z,Ae.type=k}function Xn(S){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qn(S){let F=S.target;F.removeEventListener("dispose",qn),um(F)}function um(S){hm(S),O.remove(S)}function hm(S){let F=O.get(S).programs;F!==void 0&&(F.forEach(function(G){le.releaseProgram(G)}),S.isShaderMaterial&&le.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,z,k,pe){F===null&&(F=Ct);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,fe=pm(S,F,G,z,k);v.setMaterial(z,ve);let be=G.index,Ee=1;if(z.wireframe===!0){if(be=Y.getWireframeAttribute(G),be===void 0)return;Ee=2}let Be=G.drawRange,Ve=G.attributes.position,Ce=Be.start*Ee,rt=(Be.start+Be.count)*Ee;pe!==null&&(Ce=Math.max(Ce,pe.start*Ee),rt=Math.min(rt,(pe.start+pe.count)*Ee)),be!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,be.count)):Ve!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Ve.count));let Rt=rt-Ce;if(Rt<0||Rt===1/0)return;me.setup(k,z,fe,G,be);let At,lt=ce;if(be!==null&&(At=oe.get(be),lt=K,lt.setIndex(At)),k.isMesh)z.wireframe===!0?(v.setLineWidth(z.wireframeLinewidth*vt()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(k.isLine){let jt=z.linewidth;jt===void 0&&(jt=1),v.setLineWidth(jt*vt()),k.isLineSegments?lt.setMode(N.LINES):k.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else k.isPoints?lt.setMode(N.POINTS):k.isSprite&&lt.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))lt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let jt=k._multiDrawStarts,xe=k._multiDrawCounts,Sn=k._multiDrawCount,Je=be?oe.get(be).bytesPerElement:1,wn=O.get(z).currentProgram.getUniforms();for(let Yn=0;Yn<Sn;Yn++)wn.setValue(N,"_gl_DrawID",Yn),lt.render(jt[Yn]/Je,xe[Yn])}else if(k.isInstancedMesh)lt.renderInstances(Ce,Rt,k.count);else if(G.isInstancedBufferGeometry){let jt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,jt);lt.renderInstances(Ce,Rt,xe)}else lt.render(Ce,Rt)};function Xh(S,F,G){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=$t,S.needsUpdate=!0,Bo(S,F,G),S.side=Un,S.needsUpdate=!0,Bo(S,F,G),S.side=xn):Bo(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),T=ie.get(G),T.init(F),x.push(T),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();let z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){let fe=pe[ve];Xh(fe,G,k),z.add(fe)}else Xh(pe,G,k),z.add(pe)}),T=x.pop(),z},this.compileAsync=function(S,F,G=null){let z=this.compile(S,F,G);return new Promise(k=>{function pe(){if(z.forEach(function(ve){O.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){k(S);return}setTimeout(pe,10)}Ke.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let uc=null;function dm(S){uc&&uc(S)}function qh(){Zi.stop()}function Yh(){Zi.start()}let Zi=new kf;Zi.setAnimationLoop(dm),typeof self!="undefined"&&Zi.setContext(self),this.setAnimationLoop=function(S){uc=S,ye.setAnimationLoop(S),S===null?Zi.stop():Zi.start()},ye.addEventListener("sessionstart",qh),ye.addEventListener("sessionend",Yh),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(S,F);let G=ye.enabled===!0&&ye.isPresenting===!0,z=M!==null&&(J===null||G)&&M.begin(R,J);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,J),T=ie.get(S,x.length),T.init(F),T.state.textureUnits=q.getTextureUnits(),x.push(T),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(xt,Nn,F.reversedDepth),We=this.localClippingEnabled,Ze=Se.init(this.clippingPlanes,We),w=re.get(S,C.length),w.init(),C.push(w),ye.enabled===!0&&ye.isPresenting===!0){let ve=R.xr.getDepthSensingMesh();ve!==null&&hc(ve,F,-1/0,R.sortObjects)}hc(S,F,0,R.sortObjects),w.finish(),R.sortObjects===!0&&w.sort(Re,Le,F.reversedDepth),ht=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ht&&Fe.addToRenderList(w,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Se.beginShadows();let k=T.state.shadowsArray;if(Ae.render(k,S,F),Ze===!0&&Se.endShadows(),(z&&M.hasRenderPass())===!1){let ve=w.opaque,fe=w.transmissive;if(T.setupLights(),F.isArrayCamera){let be=F.cameras;if(fe.length>0)for(let Ee=0,Be=be.length;Ee<Be;Ee++){let Ve=be[Ee];Zh(ve,fe,S,Ve)}ht&&Fe.render(S);for(let Ee=0,Be=be.length;Ee<Be;Ee++){let Ve=be[Ee];$h(w,S,Ve,Ve.viewport)}}else fe.length>0&&Zh(ve,fe,S,F),ht&&Fe.render(S),$h(w,S,F)}J!==null&&X===0&&(q.updateMultisampleRenderTarget(J),q.updateRenderTargetMipmap(J)),z&&M.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),me.resetDefaultState(),j=-1,se=null,x.pop(),x.length>0?(T=x[x.length-1],q.setTextureUnits(T.state.textureUnits),Ze===!0&&Se.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,L!==null&&L.renderEnd()};function hc(S,F,G,z){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){z&&wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(xt);let ve=Z.update(S),fe=S.material;fe.visible&&w.push(S,ve,fe,G,wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){let ve=Z.update(S),fe=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),wt.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),wt.copy(ve.boundingSphere.center)),wt.applyMatrix4(S.matrixWorld).applyMatrix4(xt)),Array.isArray(fe)){let be=ve.groups;for(let Ee=0,Be=be.length;Ee<Be;Ee++){let Ve=be[Ee],Ce=fe[Ve.materialIndex];Ce&&Ce.visible&&w.push(S,ve,Ce,G,wt.z,Ve)}}else fe.visible&&w.push(S,ve,fe,G,wt.z,null)}}let pe=S.children;for(let ve=0,fe=pe.length;ve<fe;ve++)hc(pe[ve],F,G,z)}function $h(S,F,G,z){let{opaque:k,transmissive:pe,transparent:ve}=S;T.setupLightsView(G),Ze===!0&&Se.setGlobalState(R.clippingPlanes,G),z&&v.viewport(ae.copy(z)),k.length>0&&Uo(k,F,G),pe.length>0&&Uo(pe,F,G),ve.length>0&&Uo(ve,F,G),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Zh(S,F,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Ce=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new yt(1,1,{generateMipmaps:!0,type:Ce?Lt:vn,minFilter:Hn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}let pe=T.state.transmissionRenderTarget[z.id],ve=z.viewport||ae;pe.setSize(ve.z*R.transmissionResolutionScale,ve.w*R.transmissionResolutionScale);let fe=R.getRenderTarget(),be=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(at),$e=R.getClearAlpha(),$e<1&&R.setClearColor(16777215,.5),R.clear(),ht&&Fe.render(G);let Be=R.toneMapping;R.toneMapping=kn;let Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Ze===!0&&Se.setGlobalState(R.clippingPlanes,z),Uo(S,G,z),q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,Rt=F.length;rt<Rt;rt++){let At=F[rt],{object:lt,geometry:jt,material:xe,group:Sn}=At;if(xe.side===xn&&lt.layers.test(z.layers)){let Je=xe.side;xe.side=$t,xe.needsUpdate=!0,Kh(lt,G,z,jt,xe,Sn),xe.side=Je,xe.needsUpdate=!0,Ce=!0}}Ce===!0&&(q.updateMultisampleRenderTarget(pe),q.updateRenderTargetMipmap(pe))}R.setRenderTarget(fe,be,Ee),R.setClearColor(at,$e),Ve!==void 0&&(z.viewport=Ve),R.toneMapping=Be}function Uo(S,F,G){let z=F.isScene===!0?F.overrideMaterial:null;for(let k=0,pe=S.length;k<pe;k++){let ve=S[k],{object:fe,geometry:be,group:Ee}=ve,Be=ve.material;Be.allowOverride===!0&&z!==null&&(Be=z),fe.layers.test(G.layers)&&Kh(fe,F,G,be,Be,Ee)}}function Kh(S,F,G,z,k,pe){S.onBeforeRender(R,F,G,z,k,pe),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,F,G,z,S,pe),k.transparent===!0&&k.side===xn&&k.forceSinglePass===!1?(k.side=$t,k.needsUpdate=!0,R.renderBufferDirect(G,F,z,k,S,pe),k.side=Un,k.needsUpdate=!0,R.renderBufferDirect(G,F,z,k,S,pe),k.side=xn):R.renderBufferDirect(G,F,z,k,S,pe),S.onAfterRender(R,F,G,z,k,pe)}function Bo(S,F,G){F.isScene!==!0&&(F=Ct);let z=O.get(S),k=T.state.lights,pe=T.state.shadowsArray,ve=k.state.version,fe=le.getParameters(S,k.state,pe,F,G,T.state.lightProbeGridArray),be=le.getProgramCacheKey(fe),Ee=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Be=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=te.get(S.envMap||z.environment,Be),z.envMapRotation=z.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ee===void 0&&(S.addEventListener("dispose",qn),Ee=new Map,z.programs=Ee);let Ve=Ee.get(be);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===ve)return jh(S,fe),Ve}else fe.uniforms=le.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,G,fe),S.onBeforeCompile(fe,R),Ve=le.acquireProgram(fe,be),Ee.set(be,Ve),z.uniforms=fe.uniforms;let Ce=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ce.clippingPlanes=Se.uniform),jh(S,fe),z.needsLights=gm(S),z.lightsStateVersion=ve,z.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),z.lightProbeGrid=T.state.lightProbeGridArray.length>0,z.currentProgram=Ve,z.uniformsList=null,Ve}function Jh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=pr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function jh(S,F){let G=O.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function fm(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let G=0,z=S.length;G<z;G++){let k=S[G];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function pm(S,F,G,z,k){F.isScene!==!0&&(F=Ct),q.resetTextureUnits();let pe=F.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,fe=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Oe.workingColorSpace,be=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ee=te.get(z.envMap||ve,be),Be=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ve=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color,At=kn;z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(At=R.toneMapping);let lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,jt=lt!==void 0?lt.length:0,xe=O.get(z),Sn=T.state.lights;if(Ze===!0&&(We===!0||S!==se)){let ft=S===se&&z.id===j;Se.setState(z,S,ft)}let Je=!1;z.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Sn.state.version||xe.outputColorSpace!==fe||k.isBatchedMesh&&xe.batching===!1||!k.isBatchedMesh&&xe.batching===!0||k.isBatchedMesh&&xe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&xe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&xe.instancing===!1||!k.isInstancedMesh&&xe.instancing===!0||k.isSkinnedMesh&&xe.skinning===!1||!k.isSkinnedMesh&&xe.skinning===!0||k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null||xe.envMap!==Ee||z.fog===!0&&xe.fog!==pe||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Se.numPlanes||xe.numIntersection!==Se.numIntersection)||xe.vertexAlphas!==Be||xe.vertexTangents!==Ve||xe.morphTargets!==Ce||xe.morphNormals!==rt||xe.morphColors!==Rt||xe.toneMapping!==At||xe.morphTargetsCount!==jt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Je=!0):(Je=!0,xe.__version=z.version);let wn=xe.currentProgram;Je===!0&&(wn=Bo(z,F,k),L&&z.isNodeMaterial&&L.onUpdateProgram(z,wn,xe));let Yn=!1,Ti=!1,Rs=!1,ct=wn.getUniforms(),It=xe.uniforms;if(v.useProgram(wn.program)&&(Yn=!0,Ti=!0,Rs=!0),z.id!==j&&(j=z.id,Ti=!0),xe.needsLights){let ft=fm(T.state.lightProbeGridArray,k);xe.lightProbeGrid!==ft&&(xe.lightProbeGrid=ft,Ti=!0)}if(Yn||se!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(N,"projectionMatrix",S.projectionMatrix),ct.setValue(N,"viewMatrix",S.matrixWorldInverse);let Ei=ct.map.cameraPosition;Ei!==void 0&&Ei.setValue(N,bt.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),se!==S&&(se=S,Ti=!0,Rs=!0)}if(xe.needsLights&&(Sn.state.directionalShadowMap.length>0&&ct.setValue(N,"directionalShadowMap",Sn.state.directionalShadowMap,q),Sn.state.spotShadowMap.length>0&&ct.setValue(N,"spotShadowMap",Sn.state.spotShadowMap,q),Sn.state.pointShadowMap.length>0&&ct.setValue(N,"pointShadowMap",Sn.state.pointShadowMap,q)),k.isSkinnedMesh){ct.setOptional(N,k,"bindMatrix"),ct.setOptional(N,k,"bindMatrixInverse");let ft=k.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ct.setValue(N,"boneTexture",ft.boneTexture,q))}k.isBatchedMesh&&(ct.setOptional(N,k,"batchingTexture"),ct.setValue(N,"batchingTexture",k._matricesTexture,q),ct.setOptional(N,k,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",k._indirectTexture,q),ct.setOptional(N,k,"batchingColorTexture"),k._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",k._colorsTexture,q));let wi=G.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&D.update(k,G,wn),(Ti||xe.receiveShadow!==k.receiveShadow)&&(xe.receiveShadow=k.receiveShadow,ct.setValue(N,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(It.envMapIntensity.value=F.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=my()),Ti){if(ct.setValue(N,"toneMappingExposure",R.toneMappingExposure),xe.needsLights&&mm(It,Rs),pe&&z.fog===!0&&Me.refreshFogUniforms(It,pe),Me.refreshMaterialUniforms(It,z,ee,ne,T.state.transmissionRenderTarget[S.id]),xe.needsLights&&xe.lightProbeGrid){let ft=xe.lightProbeGrid;It.probesSH.value=ft.texture,It.probesMin.value.copy(ft.boundingBox.min),It.probesMax.value.copy(ft.boundingBox.max),It.probesResolution.value.copy(ft.resolution)}pr.upload(N,Jh(xe),It,q)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(pr.upload(N,Jh(xe),It,q),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(N,"center",k.center),ct.setValue(N,"modelViewMatrix",k.modelViewMatrix),ct.setValue(N,"normalMatrix",k.normalMatrix),ct.setValue(N,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){let ft=z.uniformsGroups;for(let Ei=0,Is=ft.length;Ei<Is;Ei++){let Qh=ft[Ei];Q.update(Qh,wn),Q.bind(Qh,wn)}}return wn}function mm(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function gm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(S,F,G){let z=O.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),O.get(S.texture).__webglTexture=F,O.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let G=O.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){J=S,W=F,X=G;let z=null,k=!1,pe=!1;if(S){let fe=O.get(S);if(fe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,fe.__webglFramebuffer),ae.copy(S.viewport),ge.copy(S.scissor),Ye=S.scissorTest,v.viewport(ae),v.scissor(ge),v.setScissorTest(Ye),j=-1;return}else if(fe.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(fe.__hasExternalTextures)q.rebindTextures(S,O.get(S.texture).__webglTexture,O.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Be=S.depthTexture;if(fe.__boundDepthTexture!==Be){if(Be!==null&&O.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}let be=S.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);let Ee=O.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[F])?z=Ee[F][G]:z=Ee[F],k=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?z=O.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[G]:z=Ee,ae.copy(S.viewport),ge.copy(S.scissor),Ye=S.scissorTest}else ae.copy(Pe).multiplyScalar(ee).floor(),ge.copy(pt).multiplyScalar(ee).floor(),Ye=ke;if(G!==0&&(z=H),v.bindFramebuffer(N.FRAMEBUFFER,z)&&v.drawBuffers(S,z),v.viewport(ae),v.scissor(ge),v.setScissorTest(Ye),k){let fe=O.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,fe.__webglTexture,G)}else if(pe){let fe=F;for(let be=0;be<S.textures.length;be++){let Ee=O.get(S.textures[be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+be,Ee.__webglTexture,G,fe)}}else if(S!==null&&G!==0){let fe=O.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fe.__webglTexture,G)}j=-1},this.readRenderTargetPixels=function(S,F,G,z,k,pe,ve,fe=0){if(!(S&&S.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=O.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){v.bindFramebuffer(N.FRAMEBUFFER,be);try{let Ee=S.textures[fe],Be=Ee.format,Ve=Ee.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!A.textureFormatReadable(Be)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ve)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-z&&G>=0&&G<=S.height-k&&N.readPixels(F,G,z,k,ue.convert(Be),ue.convert(Ve),pe)}finally{let Ee=J!==null?O.get(J).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,z,k,pe,ve,fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=O.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(F>=0&&F<=S.width-z&&G>=0&&G<=S.height-k){v.bindFramebuffer(N.FRAMEBUFFER,be);let Ee=S.textures[fe],Be=Ee.format,Ve=Ee.type;if(S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+fe),!A.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ce=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.bufferData(N.PIXEL_PACK_BUFFER,pe.byteLength,N.STREAM_READ),N.readPixels(F,G,z,k,ue.convert(Be),ue.convert(Ve),0);let rt=J!==null?O.get(J).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,rt);let Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ff(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ce),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pe),N.deleteBuffer(Ce),N.deleteSync(Rt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,G=0){let z=Math.pow(2,-G),k=Math.floor(S.image.width*z),pe=Math.floor(S.image.height*z),ve=F!==null?F.x:0,fe=F!==null?F.y:0;q.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ve,fe,k,pe),v.unbindTexture()},this.copyTextureToTexture=function(S,F,G=null,z=null,k=0,pe=0){let ve,fe,be,Ee,Be,Ve,Ce,rt,Rt,At=S.isCompressedTexture?S.mipmaps[pe]:S.image;if(G!==null)ve=G.max.x-G.min.x,fe=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Ee=G.min.x,Be=G.min.y,Ve=G.isBox3?G.min.z:0;else{let It=Math.pow(2,-k);ve=Math.floor(At.width*It),fe=Math.floor(At.height*It),S.isDataArrayTexture?be=At.depth:S.isData3DTexture?be=Math.floor(At.depth*It):be=1,Ee=0,Be=0,Ve=0}z!==null?(Ce=z.x,rt=z.y,Rt=z.z):(Ce=0,rt=0,Rt=0);let lt=ue.convert(F.format),jt=ue.convert(F.type),xe;F.isData3DTexture?(q.setTexture3D(F,0),xe=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),xe=N.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),xe=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let Sn=v.getParameter(N.UNPACK_ROW_LENGTH),Je=v.getParameter(N.UNPACK_IMAGE_HEIGHT),wn=v.getParameter(N.UNPACK_SKIP_PIXELS),Yn=v.getParameter(N.UNPACK_SKIP_ROWS),Ti=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,At.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,At.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Ee),v.pixelStorei(N.UNPACK_SKIP_ROWS,Be),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ve);let Rs=S.isDataArrayTexture||S.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let It=O.get(S),wi=O.get(F),ft=O.get(It.__renderTarget),Ei=O.get(wi.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,ft.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Is=0;Is<be;Is++)Rs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(S).__webglTexture,k,Ve+Is),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,O.get(F).__webglTexture,pe,Rt+Is)),N.blitFramebuffer(Ee,Be,ve,fe,Ce,rt,ve,fe,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||O.has(S)){let It=O.get(S),wi=O.get(F);v.bindFramebuffer(N.READ_FRAMEBUFFER,V),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let ft=0;ft<be;ft++)Rs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,It.__webglTexture,k,Ve+ft):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,k),ct?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,wi.__webglTexture,pe,Rt+ft):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,wi.__webglTexture,pe),k!==0?N.blitFramebuffer(Ee,Be,ve,fe,Ce,rt,ve,fe,N.COLOR_BUFFER_BIT,N.NEAREST):ct?N.copyTexSubImage3D(xe,pe,Ce,rt,Rt+ft,Ee,Be,ve,fe):N.copyTexSubImage2D(xe,pe,Ce,rt,Ee,Be,ve,fe);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(xe,pe,Ce,rt,Rt,ve,fe,be,lt,jt,At.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,pe,Ce,rt,Rt,ve,fe,be,lt,At.data):N.texSubImage3D(xe,pe,Ce,rt,Rt,ve,fe,be,lt,jt,At):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pe,Ce,rt,ve,fe,lt,jt,At.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pe,Ce,rt,At.width,At.height,lt,At.data):N.texSubImage2D(N.TEXTURE_2D,pe,Ce,rt,ve,fe,lt,jt,At);v.pixelStorei(N.UNPACK_ROW_LENGTH,Sn),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),v.pixelStorei(N.UNPACK_SKIP_PIXELS,wn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Yn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,Ti),pe===0&&F.generateMipmaps&&N.generateMipmap(xe),v.unbindTexture()},this.initRenderTarget=function(S){O.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){W=0,X=0,J=null,v.reset(),me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Oe._getUnpackColorSpace()}};var gy={maxHistory:30,maxHistoryLimit:64,subdivisions:4,maxLifetime:.3,width:.01,widthPower:.5,headTaperStart:.9,opaqueHeadRegion:.1,tailFadeLength:.05,edgeSoftness:.2,colorStart:16711765,colorEnd:65535,emissiveIntensity:1.25,minDistanceSq:.001,renderOrder:9999},Uu=class{constructor(e,t,n={}){this.target=e,this.scene=t,this.config={...gy,...n},this.maxHistory=Math.min(this.config.maxHistory,this.config.maxHistoryLimit),this.subdivisions=this.config.subdivisions,this.maxLifetime=this.config.maxLifetime,this.width=this.config.width,this.colorStart=new he(this.config.colorStart),this.colorEnd=new he(this.config.colorEnd),this.historyPositions=new Array(this.maxHistory).fill(null).map(()=>new I),this.historyTimes=new Float32Array(this.maxHistory),this.rawHistory=[],this._lastWorldPos=new I,this._initMesh()}_initMesh(){let e=(this.maxHistory-1)*this.subdivisions+1,t=e*2;this.geometry=new Tt;let n=new Float32Array(t*2),s=new Float32Array(t),r=new Float32Array(t);for(let c=0;c<e;c++){let u=c/(e-1),h=c*2;n[h*2]=u,n[h*2+1]=1,r[h]=1,s[h]=u,n[(h+1)*2]=u,n[(h+1)*2+1]=0,r[h+1]=-1,s[h+1]=u}let o=[];for(let c=0;c<e-1;c++){let u=c*2,h=(c+1)*2;o.push(u,u+1,h),o.push(u+1,h+1,h)}this.geometry.setIndex(o),this.geometry.setAttribute("uv",new mt(n,2)),this.geometry.setAttribute("sideSign",new mt(r,1)),this.geometry.setAttribute("progress",new mt(s,1)),this.geometry.setAttribute("position",new mt(new Float32Array(t*3),3));let a=1-this.config.opaqueHeadRegion,l=1-this.config.edgeSoftness;this.material=new tt({uniforms:{uHistoryPositions:{value:this.historyPositions},uHistoryTimes:{value:this.historyTimes},uHistoryCount:{value:0},uCurrentTime:{value:0},uMaxLifetime:{value:this.maxLifetime},uWidth:{value:this.width},uColorStart:{value:this.colorStart},uColorEnd:{value:this.colorEnd},uEmissiveIntensity:{value:this.config.emissiveIntensity},uWidthPower:{value:this.config.widthPower},uHeadTaperStart:{value:this.config.headTaperStart},uHeadOpaqueStart:{value:a},uTailFadeLength:{value:this.config.tailFadeLength},uEdgeSoftStart:{value:l}},vertexShader:`
        uniform vec3 uHistoryPositions[${this.maxHistory}];
        uniform float uHistoryTimes[${this.maxHistory}];
        uniform int uHistoryCount;
        uniform float uCurrentTime;
        uniform float uMaxLifetime;
        uniform float uWidth;

        uniform float uWidthPower;
        uniform float uHeadTaperStart;
        uniform float uHeadOpaqueStart;

        attribute float sideSign;
        attribute float progress;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        // Evaluates position AND exact analytical tangent in a single pass
        void getSamplePointAndTangent(float tProgress, out vec3 outPos, out vec3 outTangent, out float outTime) {
          if (uHistoryCount < 2) {
            outTime = uCurrentTime;
            outPos = uHistoryPositions[0];
            outTangent = vec3(0.0, 1.0, 0.0);
            return;
          }

          float maxIdx = float(uHistoryCount - 1);
          float rawIdx = tProgress * maxIdx;
          int idx1 = int(floor(rawIdx));
          int idx2 = min(idx1 + 1, uHistoryCount - 1);
          int idx0 = max(idx1 - 1, 0);
          int idx3 = min(idx2 + 1, uHistoryCount - 1);

          float t = fract(rawIdx);

          vec3 p0 = uHistoryPositions[idx0];
          vec3 p1 = uHistoryPositions[idx1];
          vec3 p2 = uHistoryPositions[idx2];
          vec3 p3 = uHistoryPositions[idx3];

          outTime = mix(uHistoryTimes[idx1], uHistoryTimes[idx2], t);

          // Coefficients for Catmull-Rom
          vec3 a = 0.5 * (-p0 + 3.0 * p1 - 3.0 * p2 + p3);
          vec3 b = 0.5 * (2.0 * p0 - 5.0 * p1 + 4.0 * p2 - p3);
          vec3 c = 0.5 * (-p0 + p2);
          vec3 d = p1;

          // Position via Horner's scheme
          outPos = ((a * t + b) * t + c) * t + d;

          // Analytical derivative (d/dt) for tangent
          outTangent = (3.0 * a * t + 2.0 * b) * t + c;
        }

        void main() {
          vUv = uv;
          vProgress = progress;

          if (uHistoryCount < 2) {
            vAlpha = 0.0;
            gl_Position = vec4(0.0);
            return;
          }

          float sampleTime;
          vec3 currentPos;
          vec3 tangent;
          getSamplePointAndTangent(progress, currentPos, tangent, sampleTime);

          tangent = length(tangent) < 0.0001 ? vec3(0.0, 1.0, 0.0) : normalize(tangent);

          vec3 camDir = normalize(cameraPosition - currentPos);
          vec3 side = cross(tangent, camDir);
          side = length(side) < 0.0001 ? vec3(1.0, 0.0, 0.0) : normalize(side);

          float widthFactor = pow(progress, uWidthPower);
          if (progress > uHeadTaperStart) {
            float headProgress = (1.0 - progress) / (1.0 - uHeadTaperStart);
            widthFactor *= sin(headProgress * 1.5707963);
          }

          vec3 finalPos = currentPos + side * (sideSign * uWidth * 0.5 * widthFactor);

          float age = uCurrentTime - sampleTime;
          float ageAlpha = clamp(1.0 - (age / uMaxLifetime), 0.0, 1.0);

          float headOpaqueRegion = smoothstep(uHeadOpaqueStart, 1.0, progress);
          vAlpha = mix(ageAlpha, 1.0, headOpaqueRegion);

          gl_Position = projectionMatrix * viewMatrix * vec4(finalPos, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uColorStart;
        uniform vec3 uColorEnd;
        uniform float uEmissiveIntensity;
        uniform float uTailFadeLength;
        uniform float uEdgeSoftStart;

        varying vec2 vUv;
        varying float vProgress;
        varying float vAlpha;

        void main() {
          float distFromCenter = abs(vUv.y - 0.5) * 2.0;

          float edgeAlpha = smoothstep(1.0, uEdgeSoftStart, distFromCenter);
          float tailFade = smoothstep(0.0, uTailFadeLength, vProgress);

          float finalAlpha = edgeAlpha * tailFade * vAlpha;

          if (finalAlpha < 0.01) discard;

          // Multiply color by emissive intensity to push into HDR bloom threshold range
          vec3 baseColor = mix(uColorStart, uColorEnd, vProgress) * uEmissiveIntensity;

          gl_FragColor = vec4(baseColor * finalAlpha, finalAlpha);
        }
      `,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0,blending:ar,blendEquation:Tn,blendSrc:oo,blendDst:is,blendSrcAlpha:oo,blendDstAlpha:is,side:xn}),this.mesh=new je(this.geometry,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=this.config.renderOrder,this.scene.add(this.mesh)}update(){if(!this.target)return;let e=performance.now()/1e3;this.target.getWorldPosition(this._lastWorldPos);let t=this.rawHistory[this.rawHistory.length-1];for((!t||t.pos.distanceToSquared(this._lastWorldPos)>this.config.minDistanceSq)&&this.rawHistory.push({pos:this._lastWorldPos.clone(),time:e});this.rawHistory.length>0&&e-this.rawHistory[0].time>this.maxLifetime;)this.rawHistory.shift();this.rawHistory.length>this.maxHistory&&this.rawHistory.shift();let n=this.rawHistory.length;for(let s=0;s<n;s++)this.historyPositions[s].copy(this.rawHistory[s].pos),this.historyTimes[s]=this.rawHistory[s].time;this.material.uniforms.uHistoryCount.value=n,this.material.uniforms.uCurrentTime.value=e}destroy(){this.mesh&&this.scene.remove(this.mesh),this.geometry&&this.geometry.dispose(),this.material&&this.material.dispose()}},Dl=class{constructor(e,t){this.scene=e,this.camera=t,this.trail=null,this.anchor=null,this.target=null,this.targetHeight=0,this.offsetY=1.8,this.radius=0,this.dragging=!1,this.leftStickActive=!1,this._enabled=!0,this._trailConfig={length:10,width:.05,colorStart:11141154,colorEnd:43690,intensity:1.25,radius:0}}getOffsetY(){return this.offsetY}setOffsetY(e){this.offsetY=e,this._updateAnchorPosition(),this.trail&&this.trail.mesh&&this._applyVisibility()}setRadius(e){this.radius=e,this._trailConfig.radius=e,this.anchor&&(this.anchor.position.x=this.radius)}_isPaused(){return this.dragging&&!this.leftStickActive}_applyVisibility(){this.trail&&(this.trail.mesh.visible=!!this.target&&this._enabled&&!this._isPaused())}setDragging(e){let t=this._isPaused();this.dragging=e;let n=this._isPaused();this.trail&&!n&&t&&(this.trail.rawHistory.length=0),this._applyVisibility()}setLeftStickActive(e){let t=this._isPaused();this.leftStickActive=e;let n=this._isPaused();this.trail&&!n&&t&&(this.trail.rawHistory.length=0),this._applyVisibility()}syncTarget(e){if(this.target=e||null,!this.target){this.destroy();return}this.anchor||(this.anchor=new ot,this.anchor.position.set(this.radius,this.offsetY,0),this.trail=new Uu(this.anchor,this.scene,{camera:this.camera,length:this._trailConfig.length,width:this._trailConfig.width,colorStart:this._trailConfig.colorStart,colorEnd:this._trailConfig.colorEnd,emissiveIntensity:this._trailConfig.intensity})),this.anchor.parent!==this.target&&(this.anchor.parent&&this.anchor.parent.remove(this.anchor),this.target.add(this.anchor)),this.targetHeight=this._getTargetHeight(),this._updateAnchorPosition(),this._applyVisibility()}_getTargetHeight(){if(!this.target)return 0;this.target.updateWorldMatrix(!0,!0);let e=new qt().setFromObject(this.target),t=new I,n=new I(t.x,e.max.y,t.z);return this.target.getWorldPosition(t),n.x=t.x,n.z=t.z,this.target.worldToLocal(n),Math.max(0,n.y)}_updateAnchorPosition(){this.anchor&&this.anchor.position.set(this.radius,this.targetHeight+this.offsetY,0)}update(){this._isPaused()||!this.trail||this.trail.update()}destroy(){this.trail&&(this.trail.destroy(),this.trail=null,this.anchor=null)}setEnabled(e){this._enabled=e,this._applyVisibility()}isEnabled(){return this._enabled!==!1}setColorStart(e){this._trailConfig.colorStart=e,this.trail&&(this.trail.colorStart.set(e),this.trail.material.uniforms.uColorStart.value.copy(this.trail.colorStart))}setColorEnd(e){this._trailConfig.colorEnd=e,this.trail&&(this.trail.colorEnd.set(e),this.trail.material.uniforms.uColorEnd.value.copy(this.trail.colorEnd))}setIntensity(e){this._trailConfig.intensity=e,this.trail&&(this.trail.material.uniforms.uEmissiveIntensity.value=e)}setWidth(e){this._trailConfig.width=e,this.trail&&(this.trail.width=e,this.trail.material.uniforms.uWidth.value=e)}setLength(e){this._trailConfig.length=e,this.trail&&(this.trail.maxLifetime=e,this.trail.material.uniforms.uMaxLifetime.value=e)}getRadius(){return this.radius}getTrailConfig(){return{...this._trailConfig}}};var Nl={enabled:!0,intensity:1,background:!1,mode:"procedural",textureId:"procedural",textureRotation:0,textureScale:1,skyColor:"#e2e8f0",horizonColor:"#cbd5e1",groundColor:"#64748b",skyLevel:.3,horizonLevel:0,groundLevel:-.3,sun1Visible:!0,sun1Color:"#fff7ed",sun1Elevation:35,sun1Azimuth:135,sun1Size:3.5,sun1Intensity:3,sun1Atmosphere:.8,sun2Visible:!0,sun2Color:"#f1f5f9",sun2Elevation:25,sun2Azimuth:225,sun2Size:4.5,sun2Intensity:1.2,sun2Atmosphere:.9,ringVisible:!0,ringColor:"#ffffff",ringHeight:-2,ringIntensity:1.5},xy=[{id:"hemi",name:"Hemisphere Light",type:"HemisphereLight",color:"#f8fafc",groundColor:"#475569",intensity:.8,pos:[0,5,0],rot:[0,0,0],castShadow:!1,softShadow:!0},{id:"main",name:"Main Light",type:"DirectionalLight",color:"#fffbf5",intensity:2.2,pos:[2.5,4,3],rot:[0,0,0],castShadow:!0,softShadow:!0},{id:"rim",name:"Rim Light",type:"DirectionalLight",color:"#f1f5f9",intensity:1.4,pos:[-3,3.5,-2.5],rot:[0,0,0],castShadow:!1,softShadow:!0},{id:"fill",name:"Fill Light",type:"PointLight",color:"#ffffff",intensity:.6,pos:[-2,1.5,2.5],rot:[0,0,0],castShadow:!1,softShadow:!0}],Bu="trailpad_omni_settings";function Yf(){return xy.map(i=>({...i,pos:[...i.pos],rot:[...i.rot||[0,0,0]]}))}var Ou="#aa0022",vy={scale:[.01,10],emissionIntensity:[0,100],trailOffsetY:[-10,10],trailIntensity:[0,10],trailWidth:[.001,1],trailLength:[.1,20],trailRadius:[0,5],exposure:[.01,10],contrast:[.5,1.5],saturation:[0,5],bloomStrength:[0,5],bloomRadius:[0,5],bloomThreshold:[0,1],aoRadius:[0,32],aoMinDistance:[0,.1],aoMaxDistance:[.01,1]};function _y(i,[e,t],n){let s=Number(i);return Number.isFinite(s)?Math.min(t,Math.max(e,s)):n}function ri(i){if(typeof i=="number"&&Number.isFinite(i))return`#${(i>>>0).toString(16).padStart(6,"0")}`;if(typeof i!="string")return Ou;let e=i.trim().replace(/^#+/,"").replace(/[^0-9a-fA-F]/g,"");if(!e)return Ou;let t=e.length===3?[...e].map(n=>n+n).join(""):e;return t.length>6&&(t=t.slice(-6)),/^[0-9a-fA-F]{6}$/.test(t)?`#${t.toLowerCase()}`:Ou}function yy(i){try{return JSON.parse(JSON.stringify(i))}catch(e){return null}}function sn(i,e,t,n){(i==null?void 0:i[e])!==void 0&&(i[e]=_y(i[e],vy[t],n))}function Mo(i,e){(i==null?void 0:i[e])!==void 0&&(i[e]=!!i[e])}function Sy(i,e,t,n){(i==null?void 0:i[e])!==void 0&&(t.includes(i[e])||(i[e]=n))}function $f(i){var r,o,a;let e=yy(i);if(!e||typeof e!="object"||Array.isArray(e))return null;e.version=2,e.model&&(sn(e.model,"scale","scale",1),sn(e.model,"emissionIntensity","emissionIntensity",1),sn(e.model,"trailOffsetY","trailOffsetY",.2),e.model.emissionColor!==void 0&&(e.model.emissionColor=ri(e.model.emissionColor)),Mo(e.model,"syncLeftStickDpad"),Mo(e.model,"dpadButtonVerticalMovement")),e.trail&&(Mo(e.trail,"enabled"),sn(e.trail,"intensity","trailIntensity",1.25),sn(e.trail,"width","trailWidth",.05),sn(e.trail,"length","trailLength",10),sn(e.trail,"radius","trailRadius",0),e.trail.colorStart=ri(e.trail.colorStart),e.trail.colorEnd=ri(e.trail.colorEnd));let t=(r=e.postProcessing)==null?void 0:r.color;t&&(Sy(t,"toneMapping",["ACESFilmic","Linear","Reinhard","Cineon"],"ACESFilmic"),sn(t,"exposure","exposure",1.1),sn(t,"contrast","contrast",1),sn(t,"saturation","saturation",1));let n=(o=e.postProcessing)==null?void 0:o.bloom;n&&(Mo(n,"enabled"),sn(n,"strength","bloomStrength",1),sn(n,"radius","bloomRadius",.75),sn(n,"threshold","bloomThreshold",.9));let s=(a=e.postProcessing)==null?void 0:a.ambientOcclusion;return s&&(Mo(s,"enabled"),sn(s,"radius","aoRadius",8),sn(s,"minDistance","aoMinDistance",.001),sn(s,"maxDistance","aoMaxDistance",.1)),e}function Zf({getState:i,applyState:e,storage:t=globalThis.localStorage}){let n=null;function s(){try{t.setItem(Bu,JSON.stringify(i()))}catch(l){console.error("Failed to save settings:",l)}}function r(){clearTimeout(n),n=setTimeout(s,150)}function o(){try{let l=t.getItem(Bu);l&&e(JSON.parse(l))}catch(l){console.error("Failed to parse settings from localStorage:",l)}}function a(){clearTimeout(n),n=null}return{save:s,scheduleSave:r,load:o,dispose:a}}var by=`
    .custom-color-picker-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 6px;
    }

    .custom-color-picker-wrapper .hex-input {
      width: 92px;
      height: 30px;
      text-align: left;
    }

    .color-preview-btn {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      border: 1px solid #3a3a42;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .color-preview-btn:hover {
      border-color: #5896ed;
    }

    .color-popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      background: #1e1e1e;
      border: 2px solid #333;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 5px 10px rgba(0,0,0,0.5);
      z-index: 1000;
      user-select: none;
    }

    .color-saturation-box {
      position: relative;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, rgba(255,255,255,0));
      border-radius: 3px;
      cursor: crosshair;
    }

    .color-cursor {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
      box-shadow: 0 0 2px rgba(0,0,0,0.8);
    }

    .color-sliders {
      margin-top: 5px;
    }

    .color-sliders input[type="range"] {
      width: 100%;
      appearance: none;
      height: 20px;
      border-radius: 3px;
      background: linear-gradient(to right, red, #ff0, lime, cyan, blue, magenta, red);
      outline: none;
      cursor: pointer;
    }

    .hex-input {
      background: #1e1e22;
      border: 1px solid #3a3a42;
      color: #fff;
      padding: 5px;
      border-radius: 5px;
      font-family: monospace;
      box-sizing: border-box;
      outline: none;
    }

    .hex-input:focus {
      border-color: #5896ed;
      background: #26262c;
    }
`;if(!document.getElementById("custom-color-picker-styles")){let i=document.createElement("style");i.id="custom-color-picker-styles",i.textContent=by,document.head.appendChild(i)}var zu=class{constructor(e,t="#ffffff",n=()=>{}){this.container=typeof e=="string"?document.querySelector(e):e,this.container&&(this.container._customColorPicker=this,this.color=this.parseColor(t),this.onChange=n,this.isOpen=!1,this.render(),this.bindEvents())}parseColor(e){let t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}render(){this.container.classList.add("custom-color-picker-wrapper"),this.container.innerHTML=`
      <input type="text" class="hex-input" value="${this.color}" aria-label="Hex color value">
      <div class="color-preview-btn" style="background-color: ${this.color};"></div>
      <div class="color-popup" style="display: none;">
        <div class="color-saturation-box">
          <div class="color-cursor"></div>
        </div>
        <div class="color-sliders">
          <input type="range" min="0" max="360" value="0" class="hue-slider">
        </div>
        <div class="color-hex-row">
          <input type="text" class="hex-input popup-hex-input" value="${this.color}" aria-label="Hex color value">
        </div>
      </div>
    `,this.previewBtn=this.container.querySelector(".color-preview-btn"),this.popup=this.container.querySelector(".color-popup"),this.satBox=this.container.querySelector(".color-saturation-box"),this.cursor=this.container.querySelector(".color-cursor"),this.hueSlider=this.container.querySelector(".hue-slider"),this.hexInput=this.container.querySelector(".hex-input"),this.popupHexInput=this.container.querySelector(".popup-hex-input"),this.updateFromHex(this.color,!1)}bindEvents(){this.previewBtn.addEventListener("click",t=>{t.stopPropagation(),this.togglePopup()}),document.addEventListener("click",t=>{this.isOpen&&!this.container.contains(t.target)&&!this.popup.contains(t.target)&&this.closePopup()}),this.hexInput.addEventListener("input",t=>{let n=t.target.value;n.startsWith("#")||(n="#"+n),/^#[0-9A-F]{6}$/i.test(n)&&this.updateFromHex(n,!0)}),this.popupHexInput.addEventListener("input",t=>{let n=t.target.value;n.startsWith("#")||(n="#"+n),/^#[0-9A-F]{6}$/i.test(n)&&this.updateFromHex(n,!0)}),this.hueSlider.addEventListener("input",()=>{this.updateFromSliders()});let e=!1;this.satBox.addEventListener("mousedown",t=>{e=!0,this.handleSatBoxMove(t)}),window.addEventListener("mousemove",t=>{e&&this.handleSatBoxMove(t)}),window.addEventListener("mouseup",()=>{e=!1})}togglePopup(){this.isOpen?this.closePopup():this.openPopup()}openPopup(){this.isOpen=!0,document.body.appendChild(this.popup),this.popup.style.display="block";let e=this.previewBtn.getBoundingClientRect(),t=this.popup.offsetWidth,n=Math.min(e.left,window.innerWidth-t-8),s=Math.min(e.bottom+6,window.innerHeight-this.popup.offsetHeight-8);this.popup.style.left=`${Math.max(8,n)}px`,this.popup.style.top=`${Math.max(8,s)}px`,this.updateFromHex(this.color,!1)}closePopup(){this.isOpen=!1,this.popup.style.display="none",this.container.appendChild(this.popup),this.popup.style.left="",this.popup.style.top=""}handleSatBoxMove(e){let t=this.satBox.getBoundingClientRect(),n=Math.max(0,Math.min(t.width,e.clientX-t.left)),s=Math.max(0,Math.min(t.height,e.clientY-t.top)),r=n/t.width,o=1-s/t.height;this.cursor.style.left=`${n}px`,this.cursor.style.top=`${s}px`;let a=parseFloat(this.hueSlider.value),l=this.hsvToRgb(a,r,o),c=this.rgbToHex(l.r,l.g,l.b);this.color=c,this.container.dataset.value=c,this.previewBtn.style.backgroundColor=c,this.hexInput.value=c,this.popupHexInput.value=c,this.popupHexInput.value=c,this.onChange(c)}updateFromSliders(){let e=parseFloat(this.hueSlider.value);this.satBox.style.backgroundColor=`hsl(${e}, 100%, 50%)`;let t=this.satBox.getBoundingClientRect(),n=parseFloat(this.cursor.style.left)||0,s=parseFloat(this.cursor.style.top)||0,r=t.width?n/t.width:0,o=t.height?1-s/t.height:1,a=this.hsvToRgb(e,r,o),l=this.rgbToHex(a.r,a.g,a.b);this.color=l,this.container.dataset.value=l,this.previewBtn.style.backgroundColor=l,this.hexInput.value=l,this.popupHexInput.value=l,this.popupHexInput.value=l,this.onChange(l)}updateFromHex(e,t=!0){this.color=e,this.container.dataset.value=e,this.previewBtn.style.backgroundColor=e,this.hexInput.value=e,this.popupHexInput.value=e;let n=this.hexToRgb(e),s=this.rgbToHsv(n.r,n.g,n.b);this.hueSlider.value=s.h,this.satBox.style.backgroundColor=`hsl(${s.h}, 100%, 50%)`;let r=this.satBox.getBoundingClientRect(),o=r.width||176,a=r.height||120;this.cursor.style.left=`${s.s*o}px`,this.cursor.style.top=`${(1-s.v)*a}px`,t&&this.onChange(e)}hexToRgb(e){let t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}rgbToHex(e,t,n){return"#"+[e,t,n].map(s=>s.toString(16).padStart(2,"0")).join("")}rgbToHsv(e,t,n){e/=255,t/=255,n/=255;let s=Math.max(e,t,n),r=Math.min(e,t,n),o,a,l=s,c=s-r;if(a=s===0?0:c/s,s===r)o=0;else{switch(s){case e:o=(t-n)/c+(t<n?6:0);break;case t:o=(n-e)/c+2;break;case n:o=(e-t)/c+4;break}o/=6}return{h:o*360,s:a,v:l}}hsvToRgb(e,t,n){let s,r,o,a=Math.floor(e/60),l=e/60-a,c=n*(1-t),u=n*(1-l*t),h=n*(1-(1-l)*t);switch(a%6){case 0:s=n,r=h,o=c;break;case 1:s=u,r=n,o=c;break;case 2:s=c,r=n,o=h;break;case 3:s=c,r=u,o=n;break;case 4:s=h,r=c,o=n;break;case 5:s=n,r=c,o=u;break}return{r:Math.round(s*255),g:Math.round(r*255),b:Math.round(o*255)}}};function oi(i,e,t){return new zu(i,e,t)}function Kf(i){return i==null?void 0:i.dataset.value}function xr(i,e){var t;(t=i==null?void 0:i._customColorPicker)==null||t.updateFromHex(e)}var Dt=i=>document.querySelector(i);function Jf({getCameraState:i,trailManager:e,lightingManager:t,iblState:n,getButtonLabelManager:s}){return function(){var a,l,c,u,h,d,f,m;let o=e.getTrailConfig?e.getTrailConfig():{colorStart:11141154,colorEnd:43690,intensity:1.25,width:.05,length:10};return{version:2,camera:i(),model:{scale:parseFloat(Dt("#modelScale").value),emissionIntensity:parseFloat(Dt("#emissionIntensity").value),trailOffsetY:e.getOffsetY(),emissionColor:Kf(Dt("#emissionColor")),syncLeftStickDpad:(l=(a=Dt("#syncLeftStickDpadToggle"))==null?void 0:a.checked)!=null?l:!1,dpadButtonVerticalMovement:(u=(c=Dt("#dpadButtonVerticalMovementToggle"))==null?void 0:c.checked)!=null?u:!0},trail:{enabled:(d=(h=Dt("#trailEnabled"))==null?void 0:h.checked)!=null?d:!0,colorStart:ri(o.colorStart),colorEnd:ri(o.colorEnd),intensity:o.intensity,width:o.width,length:o.length,radius:o.radius},postProcessing:{aaEnabled:Dt("#aaToggle").checked,aaQuality:Dt("#aaQualitySelect").value,shadowQuality:Dt("#shadowQualitySelect").value,bloom:{enabled:Dt("#bloomToggle").checked,strength:parseFloat(Dt("#bloomStrength").value),radius:parseFloat(Dt("#bloomRadius").value),threshold:parseFloat(Dt("#bloomThreshold").value)},ambientOcclusion:{enabled:Dt("#aoToggle").checked,radius:parseFloat(Dt("#aoRadius").value),minDistance:parseFloat(Dt("#aoMinDistance").value),maxDistance:parseFloat(Dt("#aoMaxDistance").value)},color:{toneMapping:Dt("#toneMappingSelect").value,exposure:parseFloat(Dt("#exposureRange").value),contrast:parseFloat(Dt("#contrastRange").value),saturation:parseFloat(Dt("#saturationRange").value)}},lighting:t.getLightingState(),ibl:{...n},buttonLabels:(m=(f=s())==null?void 0:f.toJSON())!=null?m:{}}}}var Zt=i=>document.querySelector(i);function jf(i,{modelManager:e,trailManager:t,syncModelScale:n,setEmissionMultiplier:s,emissionColor:r}){if(i){if(i.scale!==void 0&&n(i.scale),i.emissionIntensity!==void 0&&(s(i.emissionIntensity),Zt("#emissionIntensity").value=i.emissionIntensity,Zt("#emissionIntensityInput").value=i.emissionIntensity.toFixed(2)),i.trailOffsetY!==void 0&&(t.setOffsetY(i.trailOffsetY),Zt("#trailOffset").value=i.trailOffsetY,Zt("#trailOffsetInput").value=i.trailOffsetY.toFixed(2)),i.emissionColor){let o=ri(i.emissionColor);xr(Zt("#emissionColor"),o),r.set(o)}i.syncLeftStickDpad!==void 0&&(Zt("#syncLeftStickDpadToggle").checked=i.syncLeftStickDpad,e.setSyncLeftStickDpad(i.syncLeftStickDpad)),i.dpadButtonVerticalMovement!==void 0&&(Zt("#dpadButtonVerticalMovementToggle").checked=i.dpadButtonVerticalMovement,e.setDpadButtonVerticalMovement(i.dpadButtonVerticalMovement))}}function Qf(i,e){if(i){if(Zt("#trailEnabled").checked=i.enabled,e.setEnabled(i.enabled),i.colorStart){let t=ri(i.colorStart);e.setColorStart(t),xr(Zt("#trailColorStart"),t)}if(i.colorEnd){let t=ri(i.colorEnd);e.setColorEnd(t),xr(Zt("#trailColorEnd"),t)}i.intensity!==void 0&&(e.setIntensity(i.intensity),Zt("#trailIntensity").value=i.intensity,Zt("#trailIntensityInput").value=i.intensity.toFixed(2)),i.width!==void 0&&(e.setWidth(i.width),Zt("#trailWidth").value=i.width,Zt("#trailWidthInput").value=i.width.toFixed(3)),i.length!==void 0&&(e.setLength(i.length),Zt("#trailLength").value=i.length,Zt("#trailLengthInput").value=i.length.toFixed(1)),i.radius!==void 0&&(e.setRadius(i.radius),Zt("#trailRadius").value=i.radius,Zt("#trailRadiusInput").value=i.radius.toFixed(2))}}function ep(i,{lightingManager:e,getButtonLabelManager:t,refreshButtonLabels:n}){i&&(i.lighting&&e.applyLightingState(i.lighting),i.buttonLabels&&t()&&(t().fromJSON(i.buttonLabels),n()))}var St=i=>document.querySelector(i);function tp(i,{updateAntiAliasing:e,bloomPass:t,aoPass:n,renderer:s,postShaderPass:r}){if(i){if(i.aaEnabled!==void 0&&(St("#aaToggle").checked=i.aaEnabled),i.aaQuality&&(St("#aaQualitySelect").value=i.aaQuality),e(),i.shadowQuality){let o=St("#shadowQualitySelect");o.value=i.shadowQuality,o.dispatchEvent(new Event("change"))}if(i.bloom){let o=i.bloom;St("#bloomToggle").checked=o.enabled,t.enabled=o.enabled,t.strength=o.strength,t.radius=o.radius,t.threshold=o.threshold,St("#bloomStrength").value=o.strength,St("#bloomStrengthInput").value=o.strength.toFixed(2),St("#bloomRadius").value=o.radius,St("#bloomRadiusInput").value=o.radius.toFixed(2),St("#bloomThreshold").value=o.threshold,St("#bloomThresholdInput").value=o.threshold.toFixed(2)}if(i.ambientOcclusion){let o=i.ambientOcclusion;St("#aoToggle").checked=o.enabled,n.enabled=o.enabled,n.kernelRadius=o.radius,n.minDistance=o.minDistance,n.maxDistance=o.maxDistance,St("#aoRadius").value=o.radius,St("#aoRadiusInput").value=o.radius.toFixed(2),St("#aoMinDistance").value=o.minDistance,St("#aoMinDistanceInput").value=o.minDistance.toFixed(3),St("#aoMaxDistance").value=o.maxDistance,St("#aoMaxDistanceInput").value=o.maxDistance.toFixed(2)}if(i.color){let o=i.color,a=St("#toneMappingSelect");a.value=o.toneMapping,a.dispatchEvent(new Event("change")),St("#exposureRange").value=o.exposure,St("#exposureInput").value=o.exposure.toFixed(2),s.toneMappingExposure=o.exposure,St("#contrastRange").value=o.contrast,St("#contrastInput").value=o.contrast.toFixed(2),r.uniforms.contrast.value=o.contrast,St("#saturationRange").value=o.saturation,St("#saturationInput").value=o.saturation.toFixed(2),r.uniforms.saturation.value=o.saturation}}}function np({modelManager:i,clearStoredModel:e,getStoredFileHandle:t,getStoredBinaryModel:n,saveBinaryModel:s,saveFileHandle:r,verifyFilePermission:o}){async function a(d,f){i.parseAndLoadGLTF(d),await s(d,f)}async function l(){let d=await t();if(d)try{if(await o(d)){let m=await d.getFile();return await a(await m.arrayBuffer(),m.name),!0}}catch(m){(m==null?void 0:m.name)!=="SecurityError"&&console.warn("File handle load error:",m)}let f=await n();return f!=null&&f.buffer?(i.parseAndLoadGLTF(f.buffer),!0):(i.buildProceduralController(),!1)}async function c(d){d&&await a(await d.arrayBuffer(),d.name)}async function u(){if(window.showOpenFilePicker)try{let[d]=await window.showOpenFilePicker({types:[{description:"3D Models",accept:{"model/gltf-binary":[".glb"]}}],multiple:!1});if(!d)return;let f=await d.getFile();await a(await f.arrayBuffer(),f.name),await r(d)}catch(d){(d==null?void 0:d.name)!=="AbortError"&&console.warn("Failed to pick model file:",d)}}async function h(){await e(),i.buildProceduralController()}return{loadStoredModel:l,loadSelectedFile:c,pickFile:u,resetToProcedural:h}}function qe(i,e,t,n=2){let s=document.querySelector(i),r=document.querySelector(e);!s||!r||(s.addEventListener("input",o=>{let a=parseFloat(o.target.value);r.value=Number.isFinite(a)?a.toFixed(n):"0",t(a)}),r.addEventListener("input",o=>{let a=s.min!==""?parseFloat(s.min):-1/0,l=s.max!==""?parseFloat(s.max):1/0,c=Math.max(a,Math.min(l,parseFloat(o.target.value)||0));s.value=c,t(c)}))}function ip(i){window.TrailStudioApp={...window.TrailStudioApp,...i}}function sp(i){window.addEventListener("message",e=>{let t=e.data||{};if(!(!t||!(t.type==="inspector-control"||t.type==="inspector-action"))){if(t.type==="inspector-action"){switch(t.action){case"load-scene":typeof i.loadDefaultScene=="function"&&i.loadDefaultScene();break;case"save-scene":typeof i.exportSettings=="function"&&i.exportSettings();break;case"reset-scene":typeof i.resetCamera=="function"&&i.resetCamera();break;default:break}return}if(t.control==="mode"&&typeof i.setMode=="function"){i.setMode(t.value);return}if(t.control==="camera"&&typeof i.updateCameraFromBridge=="function"){i.updateCameraFromBridge(t);return}t.control==="light"&&typeof i.updateLightFromBridge=="function"&&i.updateLightFromBridge(t)}})}var Fl=class{constructor(e,t){this.mainScene=t,this.pmremGenerator=new mr(e),this.pmremGenerator.compileCubemapShader(),this.environmentScene=new ls,this.currentTarget=null,this.textureIndex=null,this.loadedTextures=new Map,this.textureMesh=null,this.previewCanvas=document.querySelector("#iblPreview"),this.previewContext=this.previewCanvas?this.previewCanvas.getContext("2d"):null,this.skyUniforms={skyColor:{value:new he},horizonColor:{value:new he},groundColor:{value:new he},skyLevel:{value:0},horizonLevel:{value:0},groundLevel:{value:0},sun1Color:{value:new he},sun1Position:{value:new I},sun1Size:{value:1},sun1Intensity:{value:0},sun1Atmosphere:{value:0},sun2Color:{value:new he},sun2Position:{value:new I},sun2Size:{value:1.25},sun2Intensity:{value:0},sun2Atmosphere:{value:.5}};let n=new tt({side:$t,uniforms:this.skyUniforms,vertexShader:`
        precision highp float;
        varying vec3 vWorldPosition;
        void main() {
          vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        precision highp float;
        uniform vec3 skyColor, horizonColor, groundColor;
        uniform float skyLevel, horizonLevel, groundLevel;
        uniform vec3 sun1Color, sun1Position, sun2Color, sun2Position;
        uniform float sun1Size, sun1Intensity, sun1Atmosphere;
        uniform float sun2Size, sun2Intensity, sun2Atmosphere;
        varying vec3 vWorldPosition;

        vec3 sun(vec3 direction, vec3 position, vec3 color, float size, float intensity, float atmosphere) {
          float alignment = dot(direction, normalize(position));
          float exponent = mix(8000.0 / (size * size), 2.0 / size, clamp(atmosphere, 0.0, 1.0));
          float glow = pow(max(alignment, 0.0), exponent);
          float disk = step(1.0 - (0.0005 * size), alignment);
          return color * intensity * mix(disk, glow * (1.0 + atmosphere * 3.0), atmosphere);
        }

        vec3 rectLight(vec3 direction, vec3 position, vec3 color, float size, float intensity) {
          vec3 lightDir = normalize(position);
          vec3 up = abs(lightDir.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
          vec3 tangent = normalize(cross(up, lightDir));
          vec3 bitangent = cross(lightDir, tangent);
          vec3 relDir = direction - lightDir * dot(direction, lightDir);
          float xCoord = dot(relDir, tangent);
          float yCoord = dot(relDir, bitangent);
          float halfWidth = 0.05 * size;
          float halfHeight = 0.1 * size;
          float dx = max(0.0, abs(xCoord) - halfWidth);
          float dy = max(0.0, abs(yCoord) - halfHeight);
          float dist = sqrt(dx * dx + dy * dy);
          float falloff = smoothstep(halfWidth + 0.05, 0.0, dist);
          float alignment = max(0.0, dot(direction, lightDir));
          return color * intensity * falloff * pow(alignment, 4.0);
        }

        void main() {
          vec3 direction = normalize(vWorldPosition);
          
          // --- FRONT-TO-BACK BIAS ---
          // direction.z ranges from -1 (back) to +1 (front). 
          // Adjust the multiplier (e.g., 0.4) to control how dramatic the front/back contrast is.
          float frontBackFactor = direction.z * 0.4; 

          float azimuthAngle = atan(direction.z, direction.x);
          float horizontalShift = sin(azimuthAngle) * 0.03;
          float height = direction.y + horizontalShift;
          
          vec3 dynamicHorizonColor = mix(horizonColor, skyColor * 0.5, cos(azimuthAngle) * 0.15);
          
          vec3 upper = mix(dynamicHorizonColor, skyColor, smoothstep(horizonLevel, skyLevel, height));
          vec3 lower = mix(dynamicHorizonColor, groundColor, smoothstep(horizonLevel, groundLevel, height));
          vec3 color = height >= horizonLevel ? upper : lower;

          // Apply front-to-back lighting skew (brighten front Z+, darken back Z-)
          color *= (1.0 + frontBackFactor);
          
          // Light sources
          color += sun(direction, sun1Position, sun1Color, sun1Size, sun1Intensity, sun1Atmosphere);
          color += rectLight(direction, sun2Position, sun2Color, sun2Size, sun2Intensity);

          gl_FragColor = vec4(color, 1.0);
        }`});this.environmentScene.add(new je(new sr(1,32,16),n)),this.proceduralSkyMesh=this.environmentScene.children[this.environmentScene.children.length-1],this.ringGeometry=new Yr(.5,.02,16,64),this.ringMaterial=new tn({color:16777215}),this.ringMesh=new je(this.ringGeometry,this.ringMaterial),this.ringMesh.rotation.x=Math.PI/2,this.environmentScene.add(this.ringMesh),this.textureIndexPromise=this.loadTextureIndex()}async loadTextureIndex(){try{let e=await fetch("/textures/ibl/index.json");e.ok&&(this.textureIndex=await e.json())}catch(e){console.warn("Failed to load IBL texture index:",e)}}getTextureOptions(){return this.textureIndex?this.textureIndex.textures.map(e=>({id:e.id,name:e.name})):[{id:"procedural",name:"Procedural Sky"}]}async loadTexture(e){var n,s;if(e==="procedural")return null;if(this.loadedTextures.has(e))return this.loadedTextures.get(e);let t=(s=(n=this.textureIndex)==null?void 0:n.textures)==null?void 0:s.find(r=>r.id===e);return!t||!t.file?null:new Promise((r,o)=>{let a=new fs;a.setPath("/textures/ibl/"),a.load(t.file,l=>{l.mapping=lr,l.colorSpace=Mt,this.loadedTextures.set(e,l),r(l)},void 0,l=>{console.error(`Failed to load IBL texture ${t.file}:`,l),o(l)})})}createTextureMesh(e,t=0,n=1){this.textureMesh&&(this.environmentScene.remove(this.textureMesh),this.textureMesh.geometry.dispose(),this.textureMesh.material.dispose());let s=new sr(1,64,32);s.scale(n,n,n),s.rotateY(t);let r=new tn({map:e,side:$t,depthWrite:!1});this.textureMesh=new je(s,r),this.environmentScene.add(this.textureMesh)}update(e){var a,l,c;let t=this.skyUniforms;t.skyColor.value.set(e.skyColor),t.horizonColor.value.set(e.horizonColor),t.groundColor.value.set(e.groundColor),t.skyLevel.value=e.skyLevel,t.horizonLevel.value=e.horizonLevel,t.groundLevel.value=e.groundLevel;let n=Cn.degToRad(90-e.sun1Elevation),s=Cn.degToRad(e.sun1Azimuth);t.sun1Position.value.setFromSphericalCoords(100,n,s),t.sun1Color.value.set(e.sun1Color),t.sun1Size.value=e.sun1Size,t.sun1Intensity.value=e.sun1Visible?e.sun1Intensity:0,t.sun1Atmosphere.value=e.sun1Atmosphere;let r=Cn.degToRad(90-e.sun2Elevation),o=Cn.degToRad(e.sun2Azimuth);if(t.sun2Position.value.setFromSphericalCoords(100,r,o),t.sun2Color.value.set(e.sun2Color),t.sun2Size.value=e.sun2Size,t.sun2Intensity.value=e.sun2Visible?e.sun2Intensity:0,t.sun2Atmosphere.value=e.sun2Atmosphere,this.ringMesh.visible=(a=e.ringVisible)!=null?a:!0,this.ringMesh.position.y=(l=e.ringHeight)!=null?l:0,this.ringMaterial.color.set(e.ringColor).multiplyScalar((c=e.ringIntensity)!=null?c:1),e.enabled)if(e.mode==="texture"&&e.textureId!=="procedural")this.proceduralSkyMesh&&(this.proceduralSkyMesh.visible=!1),this.loadTexture(e.textureId).then(u=>{if(u){this.textureMesh?(this.textureMesh.rotation.y=e.textureRotation,this.textureMesh.scale.setScalar(e.textureScale),this.textureMesh.material.map=u,this.textureMesh.material.needsUpdate=!0):this.createTextureMesh(u,e.textureRotation,e.textureScale);let h=this.pmremGenerator.fromScene(this.environmentScene);this.currentTarget&&this.currentTarget.dispose(),this.currentTarget=h,this.mainScene.environment=h.texture,this.mainScene.environmentIntensity=e.intensity,this.mainScene.background=e.background?h.texture:null,this.renderPreview(e)}});else{this.proceduralSkyMesh&&(this.proceduralSkyMesh.visible=!0),this.textureMesh&&(this.environmentScene.remove(this.textureMesh),this.textureMesh.geometry.dispose(),this.textureMesh.material.dispose(),this.textureMesh=null);let u=this.pmremGenerator.fromScene(this.environmentScene);this.currentTarget&&this.currentTarget.dispose(),this.currentTarget=u,this.mainScene.environment=u.texture,this.mainScene.environmentIntensity=e.intensity,this.mainScene.background=e.background?u.texture:null,this.renderPreview(e)}else this.mainScene.environment=null,this.mainScene.background=null,this.proceduralSkyMesh&&(this.proceduralSkyMesh.visible=!1)}renderPreview(e){if(!this.previewCanvas||!this.previewContext)return;let t=this.previewContext,n=this.previewCanvas.width,s=this.previewCanvas.height;if(e.mode==="texture"&&e.textureId!=="procedural"){t.fillStyle="#2a2a30",t.fillRect(0,0,n,s),t.fillStyle="#888",t.font="12px sans-serif",t.textAlign="center",t.fillText("Texture IBL",n/2,s/2);return}let r=t.createLinearGradient(0,0,0,s);r.addColorStop(0,e.skyColor),r.addColorStop(.5,e.horizonColor),r.addColorStop(1,e.groundColor),t.fillStyle=r,t.fillRect(0,0,n,s);let o=(a,l,c,u)=>{let h=a/360*n,d=s*.4;t.save(),t.fillStyle=l,t.shadowColor=l,t.shadowBlur=8,t.beginPath(),u?t.fillRect(h-c*4,d-c*2,c*8,c*4):(t.arc(h,d,c*3,0,Math.PI*2),t.fill()),t.restore()};e.sun1Visible&&o(e.sun1Azimuth,e.sun1Color,e.sun1Size,!1),e.sun2Visible&&o(e.sun2Azimuth,e.sun2Color,e.sun2Size,!0)}dispose(){this.currentTarget&&this.currentTarget.dispose(),this.pmremGenerator.dispose(),this.ringGeometry.dispose(),this.ringMaterial.dispose(),this.loadedTextures.forEach(e=>e.dispose()),this.loadedTextures.clear(),this.textureMesh&&(this.textureMesh.geometry.dispose(),this.textureMesh.material.dispose())}};function rp(i,e,t){let n=null;function s(a,l,c="float"){let u=document.querySelector(`#${a}`),h=document.querySelector(`#${a}Input`);if(u){if(c==="color"){oi(u,u.dataset.value,d=>{i[l]=d,e()});return}u.addEventListener(c==="boolean"?"change":"input",()=>{let d=c==="boolean"?u.checked:parseFloat(u.value);i[l]=d,h&&(h.value=c==="integer"?String(d):d.toFixed(c==="float"?2:1)),e()})}}if([["iblEnabled","enabled","boolean"],["iblBackground","background","boolean"],["iblSkyColor","skyColor","color"],["iblSkyLevel","skyLevel"],["iblHorizonColor","horizonColor","color"],["iblHorizonLevel","horizonLevel"],["iblGroundColor","groundColor","color"],["iblGroundLevel","groundLevel"],["iblSun1Visible","sun1Visible","boolean"],["iblSun1Color","sun1Color","color"],["iblSun1Elevation","sun1Elevation","integer"],["iblSun1Azimuth","sun1Azimuth","integer"],["iblSun1Size","sun1Size"],["iblSun1Intensity","sun1Intensity"],["iblSun1Atmosphere","sun1Atmosphere"],["iblSun2Visible","sun2Visible","boolean"],["iblSun2Color","sun2Color","color"],["iblSun2Elevation","sun2Elevation","integer"],["iblSun2Azimuth","sun2Azimuth","integer"],["iblSun2Size","sun2Size"],["iblSun2Intensity","sun2Intensity"],["iblSun2Atmosphere","sun2Atmosphere"],["iblRingVisible","ringVisible","boolean"],["iblRingColor","ringColor","color"],["iblRingHeight","ringHeight"],["iblRingIntensity","ringIntensity"]].forEach(([a,l,c])=>s(a,l,c)),qe("#iblIntensity","#iblIntensityInput",a=>{i.intensity=a,e()},2),qe("#iblSkyLevel","#iblSkyLevelInput",a=>{i.skyLevel=a,e()},2),qe("#iblHorizonLevel","#iblHorizonLevelInput",a=>{i.horizonLevel=a,e()},2),qe("#iblGroundLevel","#iblGroundLevelInput",a=>{i.groundLevel=a,e()},2),qe("#iblSun1Elevation","#iblSun1ElevationInput",a=>{i.sun1Elevation=a,e()},0),qe("#iblSun1Azimuth","#iblSun1AzimuthInput",a=>{i.sun1Azimuth=a,e()},0),qe("#iblSun1Size","#iblSun1SizeInput",a=>{i.sun1Size=a,e()},2),qe("#iblSun1Intensity","#iblSun1IntensityInput",a=>{i.sun1Intensity=a,e()},2),qe("#iblSun1Atmosphere","#iblSun1AtmosphereInput",a=>{i.sun1Atmosphere=a,e()},2),qe("#iblSun2Elevation","#iblSun2ElevationInput",a=>{i.sun2Elevation=a,e()},0),qe("#iblSun2Azimuth","#iblSun2AzimuthInput",a=>{i.sun2Azimuth=a,e()},0),qe("#iblSun2Size","#iblSun2SizeInput",a=>{i.sun2Size=a,e()},2),qe("#iblSun2Intensity","#iblSun2IntensityInput",a=>{i.sun2Intensity=a,e()},2),qe("#iblSun2Atmosphere","#iblSun2AtmosphereInput",a=>{i.sun2Atmosphere=a,e()},2),qe("#iblRingHeight","#iblRingHeightInput",a=>{i.ringHeight=a,e()},2),qe("#iblRingIntensity","#iblRingIntensityInput",a=>{i.ringIntensity=a,e()},2),qe("#iblTextureRotation","#iblTextureRotationInput",a=>{i.textureRotation=a,e()},3),qe("#iblTextureScale","#iblTextureScaleInput",a=>{i.textureScale=a,e()},2),n=document.querySelector("#iblTextureSelect"),n&&t){let a=()=>{let l=t.getTextureOptions(),c=n.value;n.innerHTML="",l.forEach(u=>{let h=document.createElement("option");h.value=u.id,h.textContent=u.name,n.appendChild(h)}),n.value=c};t.textureIndexPromise?t.textureIndexPromise.then(()=>a()):a(),n.addEventListener("change",()=>{i.textureId=n.value,i.mode=n.value==="procedural"?"procedural":"texture",o(),e()})}let r=document.querySelectorAll('input[name="iblMode"]');r.forEach(a=>{a.addEventListener("change",()=>{a.checked&&(i.mode=a.value,i.textureId=a.value==="procedural"?"procedural":(n==null?void 0:n.value)||"studio",n&&(n.value=i.textureId),o(),e())})});function o(){let a=i.mode==="procedural",l=i.mode==="texture",c=document.querySelector("#iblProceduralControls"),u=document.querySelector("#iblTextureControls"),h=document.querySelector("#iblTextureTransformControls"),d=document.querySelector("#iblTextureScaleControls");c&&(c.style.display=a?"":"none"),u&&(u.style.display=l?"":"none"),h&&(h.style.display=l?"":"none"),d&&(d.style.display=l?"":"none");let f=["iblSkyColor","iblSkyLevel","iblHorizonColor","iblHorizonLevel","iblGroundColor","iblGroundLevel","iblSun1Visible","iblSun1Color","iblSun1Elevation","iblSun1Azimuth","iblSun1Size","iblSun1Intensity","iblSun1Atmosphere","iblSun2Visible","iblSun2Color","iblSun2Elevation","iblSun2Azimuth","iblSun2Size","iblSun2Intensity","iblSun2Atmosphere","iblRingVisible","iblRingColor","iblRingHeight","iblRingIntensity"],m=["iblTextureSelect","iblTextureRotation","iblTextureScale"];f.forEach(_=>{let g=document.querySelector(`#${_}`),p=document.querySelector(`#${_}Input`),b=document.querySelector(`label[for="${_}"]`);g&&(g.disabled=!a,g.style.opacity=a?"1":"0.5"),p&&(p.disabled=!a,p.style.opacity=a?"1":"0.5"),b&&(b.style.opacity=a?"1":"0.5")}),m.forEach(_=>{let g=document.querySelector(`#${_}`),p=document.querySelector(`#${_}Input`),b=document.querySelector(`label[for="${_}"]`);g&&(g.disabled=!l,g.style.opacity=l?"1":"0.5"),p&&(p.disabled=!l,p.style.opacity=l?"1":"0.5"),b&&(b.style.opacity=l?"1":"0.5")}),r.forEach(_=>{_.checked=_.value===i.mode})}o()}function op(i,e,t){Object.assign(i,Nl,e||{}),Object.entries(i).forEach(([n,s])=>{let o={enabled:"iblEnabled",background:"iblBackground",intensity:"iblIntensity",mode:"iblMode",textureId:"iblTextureSelect",textureRotation:"iblTextureRotation",textureScale:"iblTextureScale",skyColor:"iblSkyColor",skyLevel:"iblSkyLevel",horizonColor:"iblHorizonColor",horizonLevel:"iblHorizonLevel",groundColor:"iblGroundColor",groundLevel:"iblGroundLevel",sun1Visible:"iblSun1Visible",sun1Color:"iblSun1Color",sun1Elevation:"iblSun1Elevation",sun1Azimuth:"iblSun1Azimuth",sun1Size:"iblSun1Size",sun1Intensity:"iblSun1Intensity",sun1Atmosphere:"iblSun1Atmosphere",sun2Visible:"iblSun2Visible",sun2Color:"iblSun2Color",sun2Elevation:"iblSun2Elevation",sun2Azimuth:"iblSun2Azimuth",sun2Size:"iblSun2Size",sun2Intensity:"iblSun2Intensity",sun2Atmosphere:"iblSun2Atmosphere",ringVisible:"iblRingVisible",ringColor:"iblRingColor",ringHeight:"iblRingHeight",ringIntensity:"iblRingIntensity"}[n];if(!o)return;let a=document.querySelector(`#${o}`),l=document.querySelector(`#${o}Input`);a&&(a.type==="checkbox"?a.checked=s:a.type==="radio"?a.checked=a.value===s:a.classList.contains("custom-color-picker")?xr(a,s):(a.tagName,a.value=s)),l&&typeof s=="number"&&(l.value=Number.isInteger(s)?String(s):s.toFixed(2))}),t()}var ai={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ty=new ti(-1,1,1,-1,0,1),ku=class extends Tt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},wy=new ku,li=class{constructor(e){this._mesh=new je(wy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ty)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ws=class extends hn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var To=class extends hn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ul=class extends hn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new _e);this._width=n.width,this._height=n.height,t=new yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Lt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ws(ai),this.copyPass.material.blending=kt,this.timer=new to}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}To!==void 0&&(o instanceof To?n=!0:o instanceof Ul&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new _e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ol=class extends hn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new he}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var ap={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var vr=class i extends hn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new _e(e.x,e.y):new _e(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new yt(r,o,{type:Lt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new yt(r,o,{type:Lt});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new yt(r,o,{type:Lt});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ap;this.highPassUniforms=_n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new _e(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_n.clone(ai.uniforms),this.blendMaterial=new tt({uniforms:this.copyUniforms,vertexShader:ai.vertexShader,fragmentShader:ai.fragmentShader,premultipliedAlpha:!0,blending:so,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new tn,this._fsQuad=new li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new _e(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new _e(.5,.5)},direction:{value:new _e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};vr.BlurDirectionX=new _e(1,0);vr.BlurDirectionY=new _e(0,1);var zl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,m=e-d,_=t-f,g,p;m>_?(g=1,p=0):(g=0,p=1);let b=m-g+u,E=_-p+u,y=m-1+2*u,w=_-1+2*u,T=l&255,C=c&255,x=this.perm[T+this.perm[C]]%12,M=this.perm[T+g+this.perm[C+p]]%12,R=this.perm[T+1+this.perm[C+1]]%12,P=.5-m*m-_*_;P<0?n=0:(P*=P,n=P*P*this._dot(this.grad3[x],m,_));let L=.5-b*b-E*E;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[M],b,E));let H=.5-y*y-w*w;return H<0?r=0:(H*=H,r=H*H*this._dot(this.grad3[R],y,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,m=(u+h+d)*f,_=u-m,g=h-m,p=d-m,b=e-_,E=t-g,y=n-p,w,T,C,x,M,R;b>=E?E>=y?(w=1,T=0,C=0,x=1,M=1,R=0):b>=y?(w=1,T=0,C=0,x=1,M=0,R=1):(w=0,T=0,C=1,x=1,M=0,R=1):E<y?(w=0,T=0,C=1,x=0,M=1,R=1):b<y?(w=0,T=1,C=0,x=0,M=1,R=1):(w=0,T=1,C=0,x=1,M=1,R=0);let P=b-w+f,L=E-T+f,H=y-C+f,V=b-x+2*f,B=E-M+2*f,W=y-R+2*f,X=b-1+3*f,J=E-1+3*f,j=y-1+3*f,se=u&255,ae=h&255,ge=d&255,Ye=this.perm[se+this.perm[ae+this.perm[ge]]]%12,at=this.perm[se+w+this.perm[ae+T+this.perm[ge+C]]]%12,$e=this.perm[se+x+this.perm[ae+M+this.perm[ge+R]]]%12,$=this.perm[se+1+this.perm[ae+1+this.perm[ge+1]]]%12,ne=.6-b*b-E*E-y*y;ne<0?s=0:(ne*=ne,s=ne*ne*this._dot3(this.grad3[Ye],b,E,y));let ee=.6-P*P-L*L-H*H;ee<0?r=0:(ee*=ee,r=ee*ee*this._dot3(this.grad3[at],P,L,H));let Re=.6-V*V-B*B-W*W;Re<0?o=0:(Re*=Re,o=Re*Re*this._dot3(this.grad3[$e],V,B,W));let Le=.6-X*X-J*J-j*j;return Le<0?a=0:(Le*=Le,a=Le*Le*this._dot3(this.grad3[$],X,J,j)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,m,_=(e+t+n+s)*l,g=Math.floor(e+_),p=Math.floor(t+_),b=Math.floor(n+_),E=Math.floor(s+_),y=(g+p+b+E)*c,w=g-y,T=p-y,C=b-y,x=E-y,M=e-w,R=t-T,P=n-C,L=s-x,H=M>R?32:0,V=M>P?16:0,B=R>P?8:0,W=M>L?4:0,X=R>L?2:0,J=P>L?1:0,j=H+V+B+W+X+J,se=o[j][0]>=3?1:0,ae=o[j][1]>=3?1:0,ge=o[j][2]>=3?1:0,Ye=o[j][3]>=3?1:0,at=o[j][0]>=2?1:0,$e=o[j][1]>=2?1:0,$=o[j][2]>=2?1:0,ne=o[j][3]>=2?1:0,ee=o[j][0]>=1?1:0,Re=o[j][1]>=1?1:0,Le=o[j][2]>=1?1:0,Pe=o[j][3]>=1?1:0,pt=M-se+c,ke=R-ae+c,et=P-ge+c,Ze=L-Ye+c,We=M-at+2*c,xt=R-$e+2*c,bt=P-$+2*c,wt=L-ne+2*c,Ct=M-ee+3*c,ht=R-Re+3*c,vt=P-Le+3*c,N=L-Pe+3*c,Gt=M-1+4*c,Ke=R-1+4*c,A=P-1+4*c,v=L-1+4*c,U=g&255,O=p&255,q=b&255,te=E&255,oe=a[U+a[O+a[q+a[te]]]]%32,Y=a[U+se+a[O+ae+a[q+ge+a[te+Ye]]]]%32,Z=a[U+at+a[O+$e+a[q+$+a[te+ne]]]]%32,le=a[U+ee+a[O+Re+a[q+Le+a[te+Pe]]]]%32,Me=a[U+1+a[O+1+a[q+1+a[te+1]]]]%32,re=.6-M*M-R*R-P*P-L*L;re<0?u=0:(re*=re,u=re*re*this._dot4(r[oe],M,R,P,L));let ie=.6-pt*pt-ke*ke-et*et-Ze*Ze;ie<0?h=0:(ie*=ie,h=ie*ie*this._dot4(r[Y],pt,ke,et,Ze));let Se=.6-We*We-xt*xt-bt*bt-wt*wt;Se<0?d=0:(Se*=Se,d=Se*Se*this._dot4(r[Z],We,xt,bt,wt));let Ae=.6-Ct*Ct-ht*ht-vt*vt-N*N;Ae<0?f=0:(Ae*=Ae,f=Ae*Ae*this._dot4(r[le],Ct,ht,vt,N));let Fe=.6-Gt*Gt-Ke*Ke-A*A-v*v;return Fe<0?m=0:(Fe*=Fe,m=Fe*Fe*this._dot4(r[Me],Gt,Ke,A,v)),27*(u+h+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var wo={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new _e},cameraProjectionMatrix:{value:new De},cameraInverseProjectionMatrix:{value:new De},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Eo={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ao={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new _e}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};var Co=class i extends hn{constructor(e,t,n=512,s=512,r=32){super(),this.width=n,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();let o=new zn;o.format=ni,o.type=Hi,this.normalRenderTarget=new yt(this.width,this.height,{minFilter:_t,magFilter:_t,type:Lt,depthTexture:o}),this.ssaoRenderTarget=new yt(this.width,this.height,{type:Lt}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new tt({defines:Object.assign({},wo.defines),uniforms:_n.clone(wo.uniforms),vertexShader:wo.vertexShader,fragmentShader:wo.fragmentShader,blending:kt}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new $r,this.normalMaterial.blending=kt,this.blurMaterial=new tt({defines:Object.assign({},Ao.defines),uniforms:_n.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new tt({defines:Object.assign({},Eo.defines),uniforms:_n.clone(Eo.uniforms),vertexShader:Eo.vertexShader,fragmentShader:Eo.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new tt({uniforms:_n.clone(ai.uniforms),vertexShader:ai.vertexShader,fragmentShader:ai.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ka,blendDst:ro,blendEquation:Tn,blendSrcAlpha:za,blendDstAlpha:ro,blendEquationAlpha:Tn}),this._fsQuad=new li(null),this._originalClearColor=new he}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case i.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=ar,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_generateSampleKernel(e){let t=this.kernel;for(let n=0;n<e;n++){let s=new I;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/e;r=Cn.lerp(.1,1,r*r),s.multiplyScalar(r),t.push(s)}}_generateRandomKernelRotations(){let n=new zl,s=16,r=new Float32Array(s);for(let o=0;o<s;o++){let a=Math.random()*2-1,l=Math.random()*2-1,c=0;r[o]=n.noise3d(a,l,c)}this.noiseTexture=new Fi(r,4,4,hr,cn),this.noiseTexture.wrapS=Bn,this.noiseTexture.wrapT=Bn,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}};Co.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};var Ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var kl=class extends hn{constructor(){super(),this.isOutputPass=!0,this.uniforms=_n.clone(Ro.uniforms),this.material=new rr({name:Ro.name,uniforms:this.uniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._fsQuad=new li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Oe.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_s?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ys?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===co?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ao&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lp={name:"FXAAShaderFixed",uniforms:{tDiffuse:{value:null},resolution:{value:new _e(1/1024,1/512)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 resolution;
    varying vec2 vUv;

    #define EDGE_STEP_COUNT 6
    #define EDGE_GUESS 8.0
    #define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
    const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT](EDGE_STEPS);

    float _ContrastThreshold = 0.0312;
    float _RelativeThreshold = 0.063;
    float _SubpixelBlending = 1.0;

    // Use texture2D with explicit LOD=0 to avoid implicit derivative issues in loops
    vec4 Sample(sampler2D tex2D, vec2 uv) {
      return texture2D(tex2D, uv, 0.0);
    }

    float SampleLuminance(sampler2D tex2D, vec2 uv) {
      return dot(Sample(tex2D, uv).rgb, vec3(0.3, 0.59, 0.11));
    }

    float SampleLuminance(sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset) {
      uv += texSize * vec2(uOffset, vOffset);
      return SampleLuminance(tex2D, uv);
    }

    struct LuminanceData {
      float m, n, e, s, w;
      float ne, nw, se, sw;
      float highest, lowest, contrast;
    };

    LuminanceData SampleLuminanceNeighborhood(sampler2D tex2D, vec2 texSize, vec2 uv) {
      LuminanceData l;
      l.m = SampleLuminance(tex2D, uv);
      l.n = SampleLuminance(tex2D, texSize, uv, 0.0, 1.0);
      l.e = SampleLuminance(tex2D, texSize, uv, 1.0, 0.0);
      l.s = SampleLuminance(tex2D, texSize, uv, 0.0, -1.0);
      l.w = SampleLuminance(tex2D, texSize, uv, -1.0, 0.0);

      l.ne = SampleLuminance(tex2D, texSize, uv, 1.0, 1.0);
      l.nw = SampleLuminance(tex2D, texSize, uv, -1.0, 1.0);
      l.se = SampleLuminance(tex2D, texSize, uv, 1.0, -1.0);
      l.sw = SampleLuminance(tex2D, texSize, uv, -1.0, -1.0);

      l.highest = max(max(max(max(l.n, l.e), l.s), l.w), l.m);
      l.lowest = min(min(min(min(l.n, l.e), l.s), l.w), l.m);
      l.contrast = l.highest - l.lowest;
      return l;
    }

    bool ShouldSkipPixel(LuminanceData l) {
      float threshold = max(_ContrastThreshold, _RelativeThreshold * l.highest);
      return l.contrast < threshold;
    }

    float DeterminePixelBlendFactor(LuminanceData l) {
      float f = 2.0 * (l.n + l.e + l.s + l.w);
      f += l.ne + l.nw + l.se + l.sw;
      f *= 1.0 / 12.0;
      f = abs(f - l.m);
      f = clamp(f / l.contrast, 0.0, 1.0);

      float blendFactor = smoothstep(0.0, 1.0, f);
      return blendFactor * blendFactor * _SubpixelBlending;
    }

    struct EdgeData {
      bool isHorizontal;
      float pixelStep;
      float oppositeLuminance, gradient;
    };

    EdgeData DetermineEdge(vec2 texSize, LuminanceData l) {
      EdgeData e;
      float horizontal =
        abs(l.n + l.s - 2.0 * l.m) * 2.0 +
        abs(l.ne + l.se - 2.0 * l.e) +
        abs(l.nw + l.sw - 2.0 * l.w);
      float vertical =
        abs(l.e + l.w - 2.0 * l.m) * 2.0 +
        abs(l.ne + l.nw - 2.0 * l.n) +
        abs(l.se + l.sw - 2.0 * l.s);
      e.isHorizontal = horizontal >= vertical;

      float pLuminance = e.isHorizontal ? l.n : l.e;
      float nLuminance = e.isHorizontal ? l.s : l.w;
      float pGradient = abs(pLuminance - l.m);
      float nGradient = abs(nLuminance - l.m);

      e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

      if (pGradient < nGradient) {
        e.pixelStep = -e.pixelStep;
        e.oppositeLuminance = nLuminance;
        e.gradient = nGradient;
      } else {
        e.oppositeLuminance = pLuminance;
        e.gradient = pGradient;
      }

      return e;
    }

    // Fixed: Use fixed iteration loops with explicit conditions to avoid
    // "gradient instruction used in loop with varying iteration" warning.
    // The texture2D calls now use explicit LOD=0 to ensure well-defined derivatives.
    float DetermineEdgeBlendFactor(sampler2D tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv) {
      vec2 uvEdge = uv;
      vec2 edgeStep;
      if (e.isHorizontal) {
        uvEdge.y += e.pixelStep * 0.5;
        edgeStep = vec2(texSize.x, 0.0);
      } else {
        uvEdge.x += e.pixelStep * 0.5;
        edgeStep = vec2(0.0, texSize.y);
      }

      float edgeLuminance = (l.m + e.oppositeLuminance) * 0.5;
      float gradientThreshold = e.gradient * 0.25;

      // Positive direction search - fixed iteration count
      vec2 puv = uvEdge + edgeStep * edgeSteps[0];
      float pLuminanceDelta = SampleLuminance(tex2D, puv) - edgeLuminance;
      bool pAtEnd = abs(pLuminanceDelta) >= gradientThreshold;

      for (int i = 1; i < EDGE_STEP_COUNT; i++) {
        if (pAtEnd) break;
        puv += edgeStep * edgeSteps[i];
        pLuminanceDelta = SampleLuminance(tex2D, puv) - edgeLuminance;
        pAtEnd = abs(pLuminanceDelta) >= gradientThreshold;
      }

      if (!pAtEnd) {
        puv += edgeStep * EDGE_GUESS;
      }

      // Negative direction search - fixed iteration count
      vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
      float nLuminanceDelta = SampleLuminance(tex2D, nuv) - edgeLuminance;
      bool nAtEnd = abs(nLuminanceDelta) >= gradientThreshold;

      for (int i = 1; i < EDGE_STEP_COUNT; i++) {
        if (nAtEnd) break;
        nuv -= edgeStep * edgeSteps[i];
        nLuminanceDelta = SampleLuminance(tex2D, nuv) - edgeLuminance;
        nAtEnd = abs(nLuminanceDelta) >= gradientThreshold;
      }

      if (!nAtEnd) {
        nuv -= edgeStep * EDGE_GUESS;
      }

      float pDistance, nDistance;
      if (e.isHorizontal) {
        pDistance = puv.x - uv.x;
        nDistance = uv.x - nuv.x;
      } else {
        pDistance = puv.y - uv.y;
        nDistance = uv.y - nuv.y;
      }

      float shortestDistance;
      bool deltaSign;
      if (pDistance <= nDistance) {
        shortestDistance = pDistance;
        deltaSign = pLuminanceDelta >= 0.0;
      } else {
        shortestDistance = nDistance;
        deltaSign = nLuminanceDelta >= 0.0;
      }

      if (deltaSign == (l.m - edgeLuminance >= 0.0)) {
        return 0.0;
      }

      return 0.5 - shortestDistance / (pDistance + nDistance);
    }

    vec4 ApplyFXAA(sampler2D tex2D, vec2 texSize, vec2 uv) {
      LuminanceData luminance = SampleLuminanceNeighborhood(tex2D, texSize, uv);

      // Fixed: Initialize all variables to avoid "potentially uninitialized variable" warning
      vec4 result = Sample(tex2D, uv);
      float pixelBlend = 0.0;
      float edgeBlend = 0.0;
      float finalBlend = 0.0;
      EdgeData edge = EdgeData(false, 0.0, 0.0, 0.0); // Explicit initialization

      if (!ShouldSkipPixel(luminance)) {
        pixelBlend = DeterminePixelBlendFactor(luminance);
        edge = DetermineEdge(texSize, luminance);
        edgeBlend = DetermineEdgeBlendFactor(tex2D, texSize, luminance, edge, uv);
        finalBlend = max(pixelBlend, edgeBlend);

        if (edge.isHorizontal) {
          uv.y += edge.pixelStep * finalBlend;
        } else {
          uv.x += edge.pixelStep * finalBlend;
        }

        result = Sample(tex2D, uv);
      }

      return result;
    }

    void main() {
      gl_FragColor = ApplyFXAA(tDiffuse, resolution.xy, vUv);
    }`};var Ey={uniforms:{tDiffuse:{value:null},contrast:{value:1},saturation:{value:1}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float contrast;
    uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      vec3 color = clamp(col.rgb, 0.0, 1.0);

      // Keep contrast near-neutral at 1.0 and make the curve much gentler,
      // so already-tonemapped values do not get pushed into a harsh blown-out look.
      float contrastValue = clamp(contrast, 0.5, 1.5);
      float contrastGain = 1.0 + (contrastValue - 1.0) * 0.5;
      color = (color - 0.5) * contrastGain + 0.5;
      color = clamp(color, 0.0, 1.0);

      float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
      vec3 grayscale = vec3(luminance);
      float sat = clamp(saturation, 0.0, 1.5);
      color = mix(grayscale, color, sat);
      color = clamp(color, 0.0, 1.0);

      gl_FragColor = vec4(color, col.a);
    }`};function cp(i,e,t=2){let n=Math.min(Math.max(t,0),4);return new yt(i,e,{type:Lt,format:un,samples:n})}function Ay(){var n,s,r,o;let i=(s=(n=document.querySelector("#aaToggle"))==null?void 0:n.checked)!=null?s:!0,e=(o=(r=document.querySelector("#aaQualitySelect"))==null?void 0:r.value)!=null?o:"",t=0;return i&&(e.includes("2msaa")?t=2:(e.includes("4msaa")||e.includes("8msaa"))&&(t=4)),{enabled:i,samples:t}}function up(i,e,t){let n=window.innerWidth,s=window.innerHeight,r=new Bl(i,cp(n,s,2)),o=new Ol(e,t);o.clear=!0,o.clearColor=new he(0,0,0),o.clearAlpha=0,r.addPass(o);let a=new Co(e,t,n,s);a.enabled=!1,a.kernelRadius=8,a.minDistance=.001,a.maxDistance=.1,r.addPass(a);let l=new vr(new _e(n,s),1,.5,.95);l.enabled=!1,r.addPass(l);let c=new ws(Ey);r.addPass(c);let u=new kl;r.addPass(u);let h=new ws(lp),d=i.getPixelRatio();h.material.uniforms.resolution.value.set(1/(n*d),1/(s*d)),r.addPass(h);function f(){var C,x,M;let{enabled:g,samples:p}=Ay();h.enabled=g;let b=r.renderTarget1,E=(C=b==null?void 0:b.width)!=null?C:0,y=(x=b==null?void 0:b.height)!=null?x:0,w=(M=b==null?void 0:b.samples)!=null?M:0;if(!b||E!==window.innerWidth||y!==window.innerHeight||w!==p){let R=b;r.reset(cp(window.innerWidth,window.innerHeight,p)),R&&R.dispose()}}function m(g,p){r.setSize(g,p);let b=i.getPixelRatio();h.material.uniforms.resolution.value.set(1/(g*b),1/(p*b))}function _(){r.dispose()}return{composer:r,renderPass:o,aoPass:a,bloomPass:l,postShaderPass:c,fxaaPass:h,outputPass:u,updateAntiAliasing:f,resize:m,dispose:_}}var Hu=["A / Cross","B / Circle","X / Square","Y / Triangle","L1 / LB","R1 / RB","L2 / LT","R2 / RT","Select / Back","Start","L3 / Thumb","R3 / Thumb","D-Pad Up","D-Pad Down","D-Pad Left","D-Pad Right","Vendor"],Io=[{index:19,name:"D-Pad Up-Left",vertical:12,horizontal:14},{index:20,name:"D-Pad Up-Right",vertical:12,horizontal:15},{index:21,name:"D-Pad Down-Left",vertical:13,horizontal:14},{index:22,name:"D-Pad Down-Right",vertical:13,horizontal:15}];function Vu(i,e=[],t=!1){let s=e[0]||0,r=e[1]||0,o=c=>{let u=i[c]||{pressed:!1,value:0},h=u.value||0;return{pressed:!!u.pressed||h>.1,value:h}},a=[{index:12,name:"D-Pad Up",...o(12)},{index:13,name:"D-Pad Down",...o(13)},{index:14,name:"D-Pad Left",...o(14)},{index:15,name:"D-Pad Right",...o(15)}];if(t&&Math.hypot(s,r)>.3){let u=Math.atan2(r,s),d=(Math.round(u/(Math.PI/4))%8+8)%8;({0:[15],1:[13,15],2:[13],3:[13,14],4:[14],5:[12,14],6:[12],7:[12,15]})[d].forEach(m=>{let _=a.find(p=>p.index===m),g=Math.abs(m===12||m===13?r:s);_.pressed=!0,_.value=Math.max(_.value,g)})}let l=Object.fromEntries(a.map(c=>[c.index,c]));return[...a,...Io.map(({index:c,name:u,vertical:h,horizontal:d})=>({index:c,name:u,pressed:!!(l[h].pressed&&l[d].pressed),value:Math.min(l[h].value,l[d].value)}))]}function hp(i){return Vu(i).slice(4)}var Hl=class{constructor(e={}){this.hudUI=e.hudUI||null,this.meshMappings=e.meshMappings||{},this.onButtonChange=e.onButtonChange||(()=>{}),this.onAxisChange=e.onAxisChange||(()=>{}),this.onPadChange=e.onPadChange||(()=>{}),this.activePadIndex=null,this.rafId=null,this.previousState={buttons:[],axes:[]},this.initListeners()}initListeners(){window.addEventListener("gamepadconnected",e=>{this.refreshPads(),this.activePadIndex===null&&this.selectPad(e.gamepad.index)}),window.addEventListener("gamepaddisconnected",e=>{this.refreshPads(),this.activePadIndex===e.gamepad.index&&(this.activePadIndex=null,this.stopPolling(),this.onPadChange(null))})}refreshPads(){let e=navigator.getGamepads?navigator.getGamepads():[],t=[];for(let n=0;n<e.length;n++){let s=e[n];s&&t.push(s)}return t}selectPad(e){this.activePadIndex=e,this.startPolling();let t=this.getSelectedPad();t&&this.onPadChange({id:t.id,index:t.index,mapping:t.mapping})}getSelectedPad(){return this.activePadIndex===null?null:(navigator.getGamepads?navigator.getGamepads():[])[this.activePadIndex]||null}startPolling(){this.rafId&&cancelAnimationFrame(this.rafId);let e=()=>{this.processPad(),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}stopPolling(){this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null)}processPad(){let e=this.getSelectedPad();if(!e)return;e.buttons.forEach((n,s)=>{let r=this.previousState.buttons[s]||{pressed:!1,value:0};(n.pressed!==r.pressed||n.value!==r.value)&&this.onButtonChange({index:s,name:Hu[s]||`Button ${s}`,pressed:n.pressed,value:n.value})}),e.axes.forEach((n,s)=>{let r=this.previousState.axes[s]||0;Math.abs(n-r)>.01&&this.onAxisChange({index:s,value:n})}),hp(e.buttons).forEach(n=>{let s=this.previousState.buttons[n.index]||{pressed:!1,value:0};(n.pressed!==s.pressed||n.value!==s.value)&&this.onButtonChange(n)});let t=e.buttons.map(n=>({pressed:n.pressed,value:n.value}));hp(e.buttons).forEach(({index:n,pressed:s,value:r})=>{t[n]={pressed:s,value:r}}),this.previousState={buttons:t,axes:[...e.axes]}}};var Vl=class{constructor(e){this.scene=e,this.activeLightId=null,this.lightsMap=new Map,this.lightConfigs=Yf(),this.initLights()}getShadowResolution(){var e;return parseInt(((e=document.querySelector("#shadowQualitySelect"))==null?void 0:e.value)||2048,10)}createLightInstance(e){var r,o,a,l,c,u;let t,n=new he(e.color),s=this.getShadowResolution();switch(e.type){case"DirectionalLight":t=new xs(n,e.intensity);break;case"PointLight":t=new gs(n,e.intensity,(r=e.distance)!=null?r:0,(o=e.decay)!=null?o:2);break;case"SpotLight":t=new ms(n,e.intensity,(a=e.distance)!=null?a:0,(l=e.angle)!=null?l:Math.PI/3,(c=e.penumbra)!=null?c:0,(u=e.decay)!=null?u:2);break;default:t=new Jr(n,new he(e.groundColor||527122),e.intensity);break}if(e.type!=="HemisphereLight"&&t.position.set(...e.pos),e.type==="DirectionalLight"||e.type==="SpotLight"){let h=e.target||[0,0,0];t.target.position.set(...h),this.scene.add(t.target)}return t.shadow&&(t.castShadow=!!e.castShadow,t.shadow.mapSize.width=s,t.shadow.mapSize.height=s,t.shadow.bias=e.softShadow?-5e-4:-.001,t.shadow.radius=e.softShadow?3:1),t}initLights(){this.lightConfigs.forEach(e=>{let t=this.createLightInstance(e);this.scene.add(t),this.lightsMap.set(e.id,{instance:t,config:e})})}setActiveLight(e){if(this.activeLightId=this.activeLightId===e&&e!==null?null:e,document.querySelectorAll(".light-card").forEach(t=>t.classList.remove("active-light-target")),this.activeLightId){let t=document.querySelector(`#light-card-${this.activeLightId}`);t&&t.classList.add("active-light-target")}}updateShadowQuality(e){let t=parseInt(e,10);this.lightsMap.forEach(n=>{n.instance.shadow&&(n.instance.shadow.mapSize.width=t,n.instance.shadow.mapSize.height=t,n.instance.shadow.map&&(n.instance.shadow.map.dispose(),n.instance.shadow.map=null))})}disposeLightEntry(e){var t;e.instance.target&&this.scene.remove(e.instance.target),this.scene.remove(e.instance),e.instance.dispose&&e.instance.dispose(),(t=e.instance.shadow)!=null&&t.map&&e.instance.shadow.map.dispose()}dispose(){this.lightsMap.forEach(e=>this.disposeLightEntry(e)),this.lightsMap.clear()}replaceLightInstance(e){let t=this.lightsMap.get(e.id);if(!t)return;this.disposeLightEntry(t);let n=this.createLightInstance(e);this.scene.add(n),t.instance=n}renderLightingDock(){let e=document.querySelector("#dockContent");e&&(e.innerHTML="",this.lightConfigs.forEach(t=>{var f,m,_,g,p,b,E,y,w,T,C;let n=this.lightsMap.get(t.id),s=document.createElement("div");s.className="panel light-card collapsed",s.id=`light-card-${t.id}`,s.addEventListener("mousedown",x=>{["INPUT","SELECT","LABEL"].includes(x.target.tagName)||(x.stopPropagation(),this.setActiveLight(t.id))});let r=t.type==="HemisphereLight",o=t.type==="PointLight",a=t.type==="SpotLight",l=!r;s.innerHTML=`
        <div class="panel-header" onclick="togglePanel(this)">
          <div class="panel-header-left">
            <input type="checkbox" id="${t.id}-toggle" checked onclick="event.stopPropagation()">
            <label for="${t.id}-toggle" onclick="event.stopPropagation()">${t.name}</label>
          </div>
          <svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12,8 20,16 4,16"/></svg>
        </div>
        <div class="panel-body"><div class="panel-body-content">
        <div class="control-row">
          <label>Type</label>
          <select id="${t.id}-type" class="light-type-select">
            <option value="DirectionalLight" ${t.type==="DirectionalLight"?"selected":""}>Directional</option>
            <option value="PointLight" ${t.type==="PointLight"?"selected":""}>Point</option>
            <option value="SpotLight" ${t.type==="SpotLight"?"selected":""}>Spot</option>
            <option value="HemisphereLight" ${t.type==="HemisphereLight"?"selected":""}>Hemisphere</option>
          </select>
        </div>
        <div class="slider-row">
          <div class="row">
            <div class="label-with-icon"><span>Intensity</span></div>
            <input type="number" id="${t.id}-intensity-input" class="drag-input" min="0" max="10" step="0.1" value="${t.intensity.toFixed(1)}">
          </div>
          <div class="slider-controls">
            <input type="range" id="${t.id}-intensity" min="0" max="5" step="0.1" value="${t.intensity}">
          </div>
        </div>
        
        <div class="control-row">
          <label>${r?"Sky Color":"Color"}</label>
          <div id="${t.id}-color" class="custom-color-picker" data-value="${t.color}"></div>
        </div>

        ${r?`
        <div class="control-row">
          <label>Ground Color</label>
          <div id="${t.id}-ground-color" class="custom-color-picker" data-value="${t.groundColor||"#080b12"}"></div>
        </div>
        `:""}

        ${r?"":`
        <div class="control-row">
          <label>Pos (X,Y,Z)</label>
          <div class="pos-inputs">
            <input type="number" id="${t.id}-pos-x" value="${t.pos[0]}" step="0.5">
            <input type="number" id="${t.id}-pos-y" value="${t.pos[1]}" step="0.5">
            <input type="number" id="${t.id}-pos-z" value="${t.pos[2]}" step="0.5">
          </div>
        </div>
        `}

        ${t.type==="DirectionalLight"||a?`
        <div class="control-row">
          <label>Target (X,Y,Z)</label>
          <div class="pos-inputs">
            <input type="number" id="${t.id}-target-x" value="${(m=(f=t.target)==null?void 0:f[0])!=null?m:0}" step="0.5">
            <input type="number" id="${t.id}-target-y" value="${(g=(_=t.target)==null?void 0:_[1])!=null?g:0}" step="0.5">
            <input type="number" id="${t.id}-target-z" value="${(b=(p=t.target)==null?void 0:p[2])!=null?b:0}" step="0.5">
          </div>
        </div>
        `:""}

        ${o||a?`
        <div class="control-row">
          <label>Distance</label>
          <input type="number" id="${t.id}-distance" value="${(E=t.distance)!=null?E:0}" min="0" step="1">
        </div>
        `:""}

        ${a?`
        <div class="slider-row">
          <div class="row">
            <div class="label-with-icon"><span>Angle (\xB0)</span></div>
            <input type="number" id="${t.id}-angle-input" class="drag-input" min="1" max="90" step="1" value="${Math.round(((y=t.angle)!=null?y:Math.PI/3)*180/Math.PI)}">
          </div>
          <div class="slider-controls">
            <input type="range" id="${t.id}-angle" min="1" max="90" step="1" value="${Math.round(((w=t.angle)!=null?w:Math.PI/3)*180/Math.PI)}">
          </div>
        </div>
        <div class="slider-row">
          <div class="row">
            <div class="label-with-icon"><span>Penumbra</span></div>
            <input type="number" id="${t.id}-penumbra-input" class="drag-input" min="0" max="1" step="0.05" value="${((T=t.penumbra)!=null?T:0).toFixed(2)}">
          </div>
          <div class="slider-controls">
            <input type="range" id="${t.id}-penumbra" min="0" max="1" step="0.05" value="${(C=t.penumbra)!=null?C:0}">
          </div>
        </div>
        `:""}

        ${l?`
        <div class="control-row" style="margin-top:4px; border-top: 1px solid #222226; padding-top:8px;">
          <label>Shadows</label>
          <input type="checkbox" id="${t.id}-shadow" ${t.castShadow?"checked":""}>
        </div>
        <div class="control-row">
          <label>Soft Shadows</label>
          <input type="checkbox" id="${t.id}-soft-shadow" ${t.softShadow?"checked":""} ${t.castShadow?"":"disabled"}>
        </div>
        `:""}
      </div></div>
      `,e.appendChild(s),s.querySelector(".panel-header").addEventListener("click",()=>this.setActiveLight(t.id)),s.querySelector(`#${t.id}-toggle`).addEventListener("change",x=>{n.instance.visible=x.target.checked});let c=s.querySelector(`#${t.id}-intensity`),u=s.querySelector(`#${t.id}-intensity-input`),h=x=>{let M=Math.max(0,Math.min(10,x));n.instance.intensity=M,t.intensity=M,c.value=M,u.value=M.toFixed(1)};c.addEventListener("input",x=>h(parseFloat(x.target.value))),u.addEventListener("input",x=>h(parseFloat(x.target.value)||0));let d=s.querySelector(`#${t.id}-color`);if(oi(d,d.dataset.value,x=>{t.color=x,n.instance.color.set(x)}),r){let x=s.querySelector(`#${t.id}-ground-color`);oi(x,x.dataset.value,M=>{t.groundColor=M,n.instance.groundColor.set(M)})}if(window.CustomDropdown&&window.CustomDropdown.bindSelect(s.querySelector(`#${t.id}-type`)),s.querySelector(`#${t.id}-type`).addEventListener("change",x=>{t.type=x.target.value,this.replaceLightInstance(t),this.renderLightingDock()}),!r){let x=()=>{t.pos=["x","y","z"].map(M=>parseFloat(s.querySelector(`#${t.id}-pos-${M}`).value)||0),n.instance.position.set(...t.pos)};["x","y","z"].forEach(M=>s.querySelector(`#${t.id}-pos-${M}`).addEventListener("input",x))}if(t.type==="DirectionalLight"||a){let x=()=>{t.target=["x","y","z"].map(M=>parseFloat(s.querySelector(`#${t.id}-target-${M}`).value)||0),n.instance.target.position.set(...t.target),n.instance.target.updateMatrixWorld()};["x","y","z"].forEach(M=>s.querySelector(`#${t.id}-target-${M}`).addEventListener("input",x))}if((o||a)&&s.querySelector(`#${t.id}-distance`).addEventListener("input",x=>{let M=parseFloat(x.target.value)||0;t.distance=M,n.instance.distance=M}),a){let x=s.querySelector(`#${t.id}-angle`),M=s.querySelector(`#${t.id}-angle-input`),R=V=>{let B=Math.max(1,Math.min(90,V)),W=B*Math.PI/180;t.angle=W,n.instance.angle=W,x.value=B,M.value=B};x.addEventListener("input",V=>R(parseFloat(V.target.value))),M.addEventListener("input",V=>R(parseFloat(V.target.value)||45));let P=s.querySelector(`#${t.id}-penumbra`),L=s.querySelector(`#${t.id}-penumbra-input`),H=V=>{let B=Math.max(0,Math.min(1,V));t.penumbra=B,n.instance.penumbra=B,P.value=B,L.value=B.toFixed(2)};P.addEventListener("input",V=>H(parseFloat(V.target.value))),L.addEventListener("input",V=>H(parseFloat(V.target.value)||0))}if(l){let x=s.querySelector(`#${t.id}-shadow`),M=s.querySelector(`#${t.id}-soft-shadow`);x.addEventListener("change",R=>{t.castShadow=R.target.checked,n.instance.castShadow=t.castShadow,M.disabled=!t.castShadow}),M.addEventListener("change",R=>{t.softShadow=R.target.checked,n.instance.shadow&&(n.instance.shadow.radius=t.softShadow?3:1,n.instance.shadow.bias=t.softShadow?-5e-4:-.001)})}}))}getLightingState(){return this.lightConfigs.map(e=>({id:e.id,type:e.type,color:e.color,groundColor:e.groundColor,intensity:e.intensity,pos:[...e.pos],target:e.target?[...e.target]:[0,0,0],distance:e.distance,angle:e.angle,penumbra:e.penumbra,castShadow:e.castShadow,softShadow:e.softShadow}))}applyLightingState(e){!e||!Array.isArray(e)||(e.forEach(t=>{let n=this.lightConfigs.find(s=>s.id===t.id);n&&(Object.assign(n,t),this.lightsMap.get(n.id)&&this.replaceLightInstance(n))}),this.renderLightingDock())}updateLightFromBridge(e){if(!e||e.lightIndex===void 0)return;let t=this.lightConfigs[e.lightIndex];if(!t)return;if((e.field||"").includes("Intensity")){t.intensity=Number(e.value)||0;let s=this.lightsMap.get(t.id);s&&(s.instance.intensity=t.intensity)}}};var Gl=class{constructor(){this.hudUI={mapping:document.querySelector("#mapping"),axisCount:document.querySelector("#axisCount"),buttonCount:document.querySelector("#buttonCount"),leftValue:document.querySelector("#lx"),rightValue:document.querySelector("#rx"),leftBar:document.querySelector("#lxBar"),rightBar:document.querySelector("#rxBar"),leftDot:document.querySelector("#leftDot"),rightDot:document.querySelector("#rightDot"),status:document.querySelector("#status"),buttons:document.querySelector("#buttons"),buttonElements:[],buttonValues:[],buttonPressureBars:[]},this.lastSnapshot=null}getHudUI(){return this.hudUI}setStatus(e){let t=e?"Connected":"Waiting",n="status "+(e?"connected":"");this.hudUI.status&&this.hudUI.status.textContent!==t&&(this.hudUI.status.textContent=t,this.hudUI.status.className=n)}fmt(e){return Number(e||0).toFixed(3)}setDot(e,t,n){let s=e==="leftDot"?this.hudUI.leftDot:this.hudUI.rightDot;s&&(s.style.left=`${50+Math.max(-1,Math.min(1,t))*45}%`,s.style.top=`${50+Math.max(-1,Math.min(1,n))*45}%`)}getButtonLabel(e){return Hu[e]||`B${e}`}buildUI(e){this.hudUI.buttons&&(this.hudUI.buttons.innerHTML="",this.hudUI.buttonElements=[],this.hudUI.buttonValues=[],this.hudUI.buttonPressureBars=[],e.buttons.forEach((t,n)=>{let s=document.createElement("div");s.className="btn"+(t.pressed?" on":""),s.dataset.button=n,s.innerHTML=`
        <div class="btn-header"><span class="b-name">${this.getButtonLabel(n)}</span><span class="b-val">${this.fmt(t.value)}</span></div>
        <div class="pressure-bar" style="width:${(t.value||0)*100}%"></div>
      `,this.hudUI.buttons.appendChild(s),this.hudUI.buttonElements[n]=s,this.hudUI.buttonValues[n]=s.querySelector(".b-val"),this.hudUI.buttonPressureBars[n]=s.querySelector(".pressure-bar")}))}resetSnapshot(){this.lastSnapshot=null}update(e){if(!e)return;let t=e.mapping||"non-standard";this.hudUI.mapping&&(this.hudUI.mapping.textContent=t),this.hudUI.axisCount&&(this.hudUI.axisCount.textContent=String(e.axes.length)),this.hudUI.buttonCount&&(this.hudUI.buttonCount.textContent=String(e.buttons.length));let n=e.axes,s=n[0]||0,r=n[1]||0,o=n[2]||0,a=n[3]||0;this.hudUI.leftValue&&(this.hudUI.leftValue.textContent=`${this.fmt(s)}, ${this.fmt(r)}`),this.hudUI.rightValue&&(this.hudUI.rightValue.textContent=`${this.fmt(o)}, ${this.fmt(a)}`),this.hudUI.leftBar&&(this.hudUI.leftBar.style.width=`${Math.min(100,Math.hypot(s,r)*100)}%`),this.hudUI.rightBar&&(this.hudUI.rightBar.style.width=`${Math.min(100,Math.hypot(o,a)*100)}%`),this.setDot("leftDot",s,r),this.setDot("rightDot",o,a),(!this.lastSnapshot||this.lastSnapshot.id!==e.id||this.lastSnapshot.buttons.length!==e.buttons.length)&&(this.buildUI(e),this.lastSnapshot={id:e.id,axes:[],buttons:e.buttons.map(l=>l.value)}),e.buttons.forEach((l,c)=>{let u=l.value,h=l.pressed||u>.1,d=this.hudUI.buttonElements[c];if(d){d.classList.contains("on")!==h&&d.classList.toggle("on",h);let f=this.fmt(u),m=`${(u||0)*100}%`;this.hudUI.buttonValues[c]&&this.hudUI.buttonValues[c].textContent!==f&&(this.hudUI.buttonValues[c].textContent=f),this.hudUI.buttonPressureBars[c]&&this.hudUI.buttonPressureBars[c].style.width!==m&&(this.hudUI.buttonPressureBars[c].style.width=m)}}),this.lastSnapshot.axes=e.axes.slice(),this.lastSnapshot.buttons=e.buttons.map(l=>l.value)}};function Gu(i,e){if(e===cu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dr||e===vo){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===dr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function dp(i){let e=new Map,t=new Map,n=i.clone();return fp(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function fp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)fp(i.children[n],e.children[n],t)}var Wl=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ku(t)}),this.register(function(t){return new Ju(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new Qu(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Xl(t,Ge.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xl(t,Ge.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ch(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Si.extractUrlBase(e);o=Si.resolveURL(c,this.path)}else o=Si.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===vp){try{o[Ge.KHR_BINARY_GLTF]=new uh(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ge.KHR_MATERIALS_UNLIT:o[h]=new $u;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[h]=new hh(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[h]=new dh;break;case Ge.KHR_MESH_QUANTIZATION:o[h]=new fh;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Cy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Nt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yu=class{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new he(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new gs(u),c.distance=h;break;case"spot":c=new ms(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},$u=class{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new he(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},Zu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ku=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new _e(r,r)}return Promise.all(s)}},Ju=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},ju=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Qu=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new he(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},eh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},th=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new he().setRGB(r[0],r[1],r[2],on),Promise.all(s)}},nh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new he().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}},sh=class{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},rh=class{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?Bt:null}extendMaterialParams(e,t){let n=Nt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},oh=class{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},ah=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},lh=class{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Xl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},ch=class{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let _=new De,g=new I,p=new an,b=new I(1,1,1),E=new Hr(m.geometry,m.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&b.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,_.compose(g,p,b));for(let y in l)if(y==="_COLOR_0"){let w=l[y];E.instanceColor=new Ui(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,l[y]);ot.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},vp="glTF",Po=12,pp={JSON:1313821514,BIN:5130562},uh=class{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Po),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Po,r=new DataView(e,Po),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===pp.JSON){let c=new Uint8Array(e,Po+o,a);this.content=n.decode(c)}else if(l===pp.BIN){let c=Po+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=mh[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=mh[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=_r[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(f)},a,c,on,d)})})}},dh=class{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fh=class{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}},ql=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,b=1-g,E=p-d+h;for(let y=0;y!==a;y++){let w=o[_+y+a],T=o[_+y+l]*u,C=o[m+y+a],x=o[m+y]*u;r[y]=b*w+E*T+g*C+p*x}return r}},Ry=new an,ph=class extends ql{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Ry.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},mp={9728:_t,9729:Pt,9984:Va,9985:cr,9986:bs,9987:Hn},gp={33071:An,33648:qs,10497:Bn},Wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iy={CUBICSPLINE:void 0,LINEAR:os,STEP:rs},Xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Py(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),i.DefaultMaterial}function Es(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ly(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Dy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ny(i){let e,t=i.extensions&&i.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qu(t.attributes):e=i.indices+":"+qu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+qu(i.targets[n]);return e}function qu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Uy=new De,xh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&s<17||r&&o<98?this.textureLoader=new fs(this.options.manager):this.textureLoader=new eo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Es(r,a,s),ci(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Si.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Wu[s.type],a=_r[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new mt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Wu[s.type],c=_r[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,g;if(f&&f!==h){let p=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,E=t.cache.get(b);E||(_=new c(a,p*f,s.count*f/u),E=new js(_,f/u),t.cache.add(b,E)),g=new Qs(E,l,d%f/u,m)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),g=new mt(_,l,m);if(s.sparse!==void 0){let p=Wu.SCALAR,b=_r[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new b(o[1],E,s.sparse.count*p),T=new c(o[2],y,s.sparse.count*l);a!==null&&(g=new mt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,x=w.length;C<x;C++){let M=w[C];if(g.setX(M,T[C*l]),l>=2&&g.setY(M,T[C*l+1]),l>=3&&g.setZ(M,T[C*l+2]),l>=4&&g.setW(M,T[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=mp[d.magFilter]||Pt,u.minFilter=mp[d.minFilter]||Hn,u.wrapS=gp[d.wrapS]||Bn,u.wrapT=gp[d.wrapT]||Bn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==_t&&u.minFilter!==Pt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new Xt(_);g.needsUpdate=!0,d(g)}),t.load(Si.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ci(h,o),h.userData.mimeType=o.mimeType||Fy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new ir,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new us,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ds}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){let h=s[Ge.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],on),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=xn);let u=r.alphaMode||Xu.OPAQUE;if(u===Xu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new _e(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==tn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){let h=r.emissiveFactor;a.emissive=new he().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&o!==tn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ci(h,r),t.associations.set(h,{materials:e}),r.extensions&&Es(s,h,r),h})}createUniqueName(e){let t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xp(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=Ny(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xp(new Tt,c,t),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Py(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let _=u[f],g=o[f],p,b=c[f];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new zr(_,b):new je(_,b),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Rn.TRIANGLE_STRIP?p.geometry=Gu(p.geometry,vo):g.mode===Rn.TRIANGLE_FAN&&(p.geometry=Gu(p.geometry,dr));else if(g.mode===Rn.LINES)p=new nr(_,b);else if(g.mode===Rn.LINE_STRIP)p=new hs(_,b);else if(g.mode===Rn.LINE_LOOP)p=new Vr(_,b);else if(g.mode===Rn.POINTS)p=new Gr(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ci(p,r),g.extensions&&Es(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Es(s,h[0],r),h[0];let d=new zt;r.extensions&&Es(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Cn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kr(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",b)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let E=0,y=d.length;E<y;E++){let w=d[E],T=f[E],C=m[E],x=_[E],M=g[E];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let R=n._createAnimationTracks(w,T,C,x,M);if(R)for(let P=0;P<R.length;P++)p.push(R[P])}let b=new Kr(r,void 0,p);return ci(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Uy)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new I().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new er:c.length>1?u=new zt:c.length===1?u=c[0]:u=new ot,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ci(u,r),r.extensions&&Es(n,u,r),r.matrix!==void 0){let h=new De;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new zt;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Es(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(dp(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof ln||d instanceof Xt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Xi[r.path]===Xi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Xi[r.path]){case Xi.weights:u=vi;break;case Xi.rotation:u=_i;break;case Xi.translation:case Xi.scale:u=Bi;break;default:n.itemSize===1?u=vi:u=Bi;break}let h=s.interpolation!==void 0?Iy[s.interpolation]:os,d=this._getArrayFromAccessor(n);for(let f=0,m=l.length;f<m;f++){let _=new u(l[f]+"."+Xi[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?ph:ql;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function By(i,e,t){let n=e.attributes,s=new qt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let u=gh(_r[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=gh(_r[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function xp(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=mh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Oe.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Oe.workingColorSpace}" not supported.`),ci(i,e),By(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ly(i,e.targets,t):i})}var Oy={Btn_South:0,Btn_A:0,Btn_East:1,Btn_B:1,Btn_West:2,Btn_X:2,Btn_North:3,Btn_Y:3,Bumper_Left:4,Bumper_Right:5,Trigger_Left:6,Trigger_Right:7,Btn_Select:8,Btn_Start:9,Btn_L3:10,Btn_R3:11,DPad_Up:12,DPad_Down:13,DPad_Left:14,DPad_Right:15,Btn_Home:16,Washer_Left:17,Washer_Right:18,DPad_Up_Left:19,DPad_Up_Right:20,Dpad_Up_Right:20,DPad_Down_Left:21,DPad_Down_Right:22},zy=new Bt({color:3355443,roughness:.35,metalness:0}),Yl=class{constructor(e,t,n){this.controllerGroup=e,this.trailManager=t,this.modelLoadedListeners=new Set,this.buttonRegisteredListeners=new Set,n&&this.modelLoadedListeners.add(n),this.currentModel=null,this.buttons3D=[],this.basePositions=[],this.leftStick3DGroup=null,this.rightStick3DGroup=null,this.washerLeft3D=null,this.washerRight3D=null,this.dpadRockerPivot=null,this.motionBaseQuaternions=new WeakMap,this.motionEuler=new On,this.motionQuaternion=new an,this.boneHelpers=[],this.showBones=!1,this.syncLeftStickDpad=!1,this.dpadButtonVerticalMovement=!0}onModelLoaded(e){return this.modelLoadedListeners.add(e),()=>this.modelLoadedListeners.delete(e)}onButtonRegistered(e){return this.buttonRegisteredListeners.add(e),()=>this.buttonRegisteredListeners.delete(e)}setSyncLeftStickDpad(e){this.syncLeftStickDpad=e}setDpadButtonVerticalMovement(e){this.dpadButtonVerticalMovement=e}getLeftStickTrailTarget(){return this.leftStick3DGroup}setBoneVisibility(e){this.showBones=e,this.boneHelpers.forEach(t=>{t.visible=e})}registerMotionNode(e){this.motionBaseQuaternions.set(e,e.quaternion.clone())}applyMotionRotation(e,t,n,s){let r=this.motionBaseQuaternions.get(e);r&&(this.motionEuler.set(t,n,s),this.motionQuaternion.setFromEuler(this.motionEuler),e.quaternion.copy(r).multiply(this.motionQuaternion))}cloneNodeMaterials(e){if(!(e!=null&&e.material))return[];let n=(Array.isArray(e.material)?e.material:[e.material]).map(s=>s.clone());return e.material=Array.isArray(e.material)?n:n[0],n}findBoneEmissiveTargets(e,t){let n=[];return e.traverse(s=>{var r;s.isSkinnedMesh&&((r=s.skeleton)!=null&&r.bones.includes(t))&&n.push(s)}),n}register3DButton(e,t,n=!1,s=null){let o=(s||(t.isMesh?[t]:[])).flatMap(a=>this.cloneNodeMaterials(a));this.buttons3D[e]={node:t,isStick:n,emissiveMaterials:o},this.basePositions[e]=t.position.clone(),this.buttonRegisteredListeners.forEach(a=>a(e,t))}updateButtonStates(e,t,n=1){if(!e)return;let s=e.buttons.map(l=>({pressed:l.pressed,value:l.value})),r=Vu(e.buttons,e.axes,this.syncLeftStickDpad),o=Io.some(({index:l})=>this.buttons3D[l]),a=new Set;r.slice(4).forEach(l=>{if(!o||!this.buttons3D[l.index]||!l.pressed)return;let c=Io.find(({index:u})=>u===l.index);a.add(c.vertical),a.add(c.horizontal)}),r.forEach(({index:l,pressed:c,value:u})=>{l<16&&a.has(l)?s[l]={pressed:!1,value:0}:s[l]={pressed:c,value:u}}),s.forEach((l,c)=>{let u=this.buttons3D[c];if(!u)return;let{node:h,isStick:d,emissiveMaterials:f}=u,m=this.basePositions[c],_=l.value,g=l.pressed||_>.1,p=c>=12&&c<=15||Io.some(({index:y})=>y===c),b=d?.04:.03,E=d||p&&!this.dpadButtonVerticalMovement?0:_*b;m&&(h.position.y=m.y-E),f.forEach(y=>{y.emissive&&(g?(y.emissive.copy(t),y.emissiveIntensity=.5*_*n):(y.emissive.setHex(0),y.emissiveIntensity=0))})})}updateMotionTransforms(e){var c,u,h,d,f,m,_,g,p,b,E,y;let t=e.axes,n=t[0]||0,s=t[1]||0,r=t[2]||0,o=t[3]||0,a=.35;if(this.leftStick3DGroup&&this.applyMotionRotation(this.leftStick3DGroup,s*a,0,-n*a),this.rightStick3DGroup&&this.applyMotionRotation(this.rightStick3DGroup,o*a,0,-r*a),this.dpadRockerPivot){let w=((c=e.buttons[12])==null?void 0:c.value)||0,T=((u=e.buttons[13])==null?void 0:u.value)||0,C=((h=e.buttons[14])==null?void 0:h.value)||0,x=((d=e.buttons[15])==null?void 0:d.value)||0,M=.22;this.applyMotionRotation(this.dpadRockerPivot,(T-w)*M,0,(C-x)*M)}if(this.syncLeftStickDpad){if(this.leftStick3DGroup){let w=((f=e.buttons[12])==null?void 0:f.value)||0,T=((m=e.buttons[13])==null?void 0:m.value)||0,C=((_=e.buttons[14])==null?void 0:_.value)||0,x=((g=e.buttons[15])==null?void 0:g.value)||0,M=n+(x-C),R=s+(T-w);this.applyMotionRotation(this.leftStick3DGroup,Math.max(-1,Math.min(1,R))*a,0,Math.max(-1,Math.min(1,-M))*a)}if(this.dpadRockerPivot){let w=(((p=e.buttons[14])==null?void 0:p.value)||0)-(((b=e.buttons[15])==null?void 0:b.value)||0)-n,T=(((E=e.buttons[13])==null?void 0:E.value)||0)-(((y=e.buttons[12])==null?void 0:y.value)||0)+s,C=.22;this.applyMotionRotation(this.dpadRockerPivot,Math.max(-1,Math.min(1,T))*C,0,Math.max(-1,Math.min(1,w))*C)}}let l=.08;if(this.washerLeft3D){let w=this.basePositions[17];w&&(this.washerLeft3D.position.x=w.x+n*l,this.washerLeft3D.position.z=w.z+s*l,this.washerLeft3D.position.y=w.y)}if(this.washerRight3D){let w=this.basePositions[18];w&&(this.washerRight3D.position.x=w.x+r*l,this.washerRight3D.position.z=w.z+o*l,this.washerRight3D.position.y=w.y)}}applyGamepadInput(e,t,n=1){e&&(this.updateButtonStates(e,t,n),this.updateMotionTransforms(e))}disposeObjectResources(e){let t=new Set,n=new Set;e.traverse(s=>{s.geometry&&t.add(s.geometry),(Array.isArray(s.material)?s.material:[s.material]).filter(Boolean).forEach(o=>n.add(o))}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}clearController3D(){this.trailManager.destroy(),this.boneHelpers.forEach(e=>{this.controllerGroup.remove(e),e.geometry.dispose(),e.material.dispose()}),this.boneHelpers=[],this.currentModel&&(this.controllerGroup.remove(this.currentModel),this.disposeObjectResources(this.currentModel)),this.buttons3D=[],this.basePositions=[],this.leftStick3DGroup=null,this.rightStick3DGroup=null,this.washerLeft3D=null,this.washerRight3D=null,this.dpadRockerPivot=null}addBoneHelper(e){if(!e.skeleton||this.boneHelpers.some(n=>n.userData.skeleton===e.skeleton))return;let t=new no(e);t.userData.skeleton=e.skeleton,t.material.color.set(16765286),t.material.depthTest=!1,t.material.depthWrite=!1,t.visible=this.showBones,this.boneHelpers.push(t),this.controllerGroup.add(t)}buildProceduralController(){this.clearController3D();let e=new zt,t=new Bt({color:1777706,roughness:.35,metalness:.4}),n=new Bt({color:2239030,roughness:.2,metalness:.6}),s=new je(new Yt(3.6,.6,2.2),t);s.castShadow=!0,s.receiveShadow=!0,e.add(s);let r=new je(new mn(.35,.45,1.8),t);r.position.set(-1.7,-.4,.6),r.rotation.z=.4,r.rotation.x=.2,r.castShadow=!0,r.receiveShadow=!0,e.add(r);let o=r.clone();o.position.set(1.7,-.4,.6),o.rotation.z=-.4,e.add(o);let a=(g,p,b=zy)=>{let E=new je(g,b.clone());return E.position.copy(p),E.castShadow=!0,E.receiveShadow=!0,e.add(E),E},l=new I(1.1,.35,.2);this.register3DButton(0,a(new mn(.12,.12,.1,24),new I(l.x,l.y,l.z+.28))),this.register3DButton(1,a(new mn(.12,.12,.1,24),new I(l.x+.28,l.y,l.z))),this.register3DButton(2,a(new mn(.12,.12,.1,24),new I(l.x-.28,l.y,l.z))),this.register3DButton(3,a(new mn(.12,.12,.1,24),new I(l.x,l.y,l.z-.28))),this.register3DButton(4,a(new Yt(.7,.18,.35),new I(-1.1,.3,-.95))),this.register3DButton(5,a(new Yt(.7,.18,.35),new I(1.1,.3,-.95))),this.register3DButton(6,a(new Yt(.65,.3,.45),new I(-1.1,.1,-1.3))),this.register3DButton(7,a(new Yt(.65,.3,.45),new I(1.1,.1,-1.3))),this.register3DButton(8,a(new mn(.08,.08,.08,16),new I(-.45,.33,-.2))),this.register3DButton(9,a(new mn(.08,.08,.08,16),new I(.45,.33,-.2))),this.register3DButton(16,a(new mn(.16,.16,.08,24),new I(0,.33,-.2)));let c=(g,p)=>{let b=new zt;b.position.set(g,.25,p);let E=new je(new mn(.08,.08,.35,16),new Bt({color:5266285,roughness:.5}));E.position.y=.15,E.castShadow=!0,b.add(E);let y=new je(new mn(.38,.32,.1,32),new Bt({color:6478079,roughness:.3,metalness:.6}));return y.position.y=.32,y.castShadow=!0,b.add(y),e.add(b),{group:b,cap:y}},u=c(-.5,.45),h=c(.5,.45);this.leftStick3DGroup=u.group,this.rightStick3DGroup=h.group,this.registerMotionNode(this.leftStick3DGroup),this.registerMotionNode(this.rightStick3DGroup),this.register3DButton(10,u.cap,!0),this.register3DButton(11,h.cap,!0),this.trailManager.syncTarget(this.getLeftStickTrailTarget());let d=new I(-1.1,.32,.2);this.dpadRockerPivot=new zt,this.dpadRockerPivot.position.copy(d),this.dpadRockerPivot.position.y+=.08,this.registerMotionNode(this.dpadRockerPivot),e.add(this.dpadRockerPivot);let f=new je(new Yt(.22,.06,.62),n),m=new je(new Yt(.62,.06,.22),n);f.castShadow=!0,m.castShadow=!0,this.dpadRockerPivot.add(f),this.dpadRockerPivot.add(m);let _=.22;this.register3DButton(12,a(new Yt(.18,.08,.18),new I(d.x,d.y,d.z-_))),this.register3DButton(13,a(new Yt(.18,.08,.18),new I(d.x,d.y,d.z+_))),this.register3DButton(14,a(new Yt(.18,.08,.18),new I(d.x-_,d.y,d.z))),this.register3DButton(15,a(new Yt(.18,.08,.18),new I(d.x+_,d.y,d.z))),this.currentModel=e,this.controllerGroup.add(this.currentModel),this.modelLoadedListeners.forEach(g=>g())}processModelNode(e,t=new Set){if(!t.has(e)){if(t.add(e),e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0),e.isSkinnedMesh&&this.addBoneHelper(e),e.isMesh||e.isBone||e.isGroup){let n=Oy[e.name];if(n!==void 0){let s=n===10||n===11,r=e.isBone?this.findBoneEmissiveTargets(this.currentModel,e):[e];this.register3DButton(n,e,s,r)}e.name==="Stick_Left"&&(this.leftStick3DGroup=e,this.registerMotionNode(e)),e.name==="Stick_Right"&&(this.rightStick3DGroup=e,this.registerMotionNode(e)),e.name==="DPad_Rocker"&&(this.dpadRockerPivot=e,this.registerMotionNode(e)),e.name==="Washer_Left"&&(this.washerLeft3D=e),e.name==="Washer_Right"&&(this.washerRight3D=e)}e.children.forEach(n=>this.processModelNode(n,t)),e.isSkinnedMesh&&e.skeleton&&e.skeleton.bones.forEach(n=>this.processModelNode(n,t))}}parseAndLoadGLTF(e){new Wl().parse(e,"",n=>{this.clearController3D(),this.currentModel=n.scene,this.controllerGroup.add(this.currentModel),this.processModelNode(this.currentModel),this.trailManager.syncTarget(this.getLeftStickTrailTarget()),this.modelLoadedListeners.forEach(s=>s())},n=>{console.error("Error parsing GLB:",n)})}};var $l=class extends ot{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new _e(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},yr=new I,_p=new De,yp=new De,Sp=new I,bp=new I,Zl=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(m,_){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),_p.copy(_.matrixWorldInverse),yp.multiplyMatrices(_.projectionMatrix,_p),u(m,m,_),this.sortObjects&&f(m)},this.setSize=function(m,_){n=m,s=_,r=n/2,o=s/2,l.style.width=m+"px",l.style.height=_+"px"};function c(m){m.isCSS2DObject&&(m.element.style.display="none");for(let _=0,g=m.children.length;_<g;_++)c(m.children[_])}function u(m,_,g){if(m.visible===!1){c(m);return}if(m.isCSS2DObject){yr.setFromMatrixPosition(m.matrixWorld),yr.applyMatrix4(yp);let p=yr.z>=-1&&yr.z<=1&&m.layers.test(g.layers)===!0,b=m.element;b.style.display=p===!0?"":"none",p===!0&&(m.onBeforeRender(t,_,g),b.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(yr.x*r+r)+"px,"+(-yr.y*o+o)+"px)",b.parentNode!==l&&l.appendChild(b),m.onAfterRender(t,_,g));let E={distanceToCameraSquared:h(g,m)};a.objects.set(m,E)}for(let p=0,b=m.children.length;p<b;p++)u(m.children[p],_,g)}function h(m,_){return Sp.setFromMatrixPosition(m.matrixWorld),bp.setFromMatrixPosition(_.matrixWorld),Sp.distanceToSquared(bp)}function d(m){let _=[];return m.traverseVisible(function(g){g.isCSS2DObject&&_.push(g)}),_}function f(m){let _=d(m).sort(function(p,b){if(p.renderOrder!==b.renderOrder)return b.renderOrder-p.renderOrder;let E=a.objects.get(p).distanceToCameraSquared,y=a.objects.get(b).distanceToCameraSquared;return E-y}),g=_.length;for(let p=0,b=_.length;p<b;p++)_[p].element.style.zIndex=g-p}}};var Mp={text:"",visible:!0,fontFamily:'Rubik, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:20,fontWeight:600,fontStyle:"normal",color:"#ffffffcc",labelScale:1,dropShadow:{enabled:!0,x:0,y:0,blur:2,color:"#000000dd"},offset:{x:0,y:0,z:0},activation:{brightness:2,glow:{enabled:!0,blur:4,color:"#ffffff",layers:1},scale:1.1,colorShift:!1,transition:"0.05s ease-out"},hover:{enabled:!0,glow:{enabled:!0,blur:6,color:"#ffffff",layers:1},transition:"0.1s ease-out"}},vh=["South / A / Cross","East / B / Circle","West / X / Square","North / Y / Triangle","L1 / LB","R1 / RB","L2 / LT","R2 / RT","Select / Back","Start","L3","R3","D-Pad Up","D-Pad Down","D-Pad Left","D-Pad Right","Home / Guide"],Tp={"South / A / Cross":"\xD7","East / B / Circle":"\u25CB","West / X / Square":"\u25A1","North / Y / Triangle":"\u25B3","L1 / LB":"L1","R1 / RB":"R1","L2 / LT":"L2","R2 / RT":"R2","Select / Back":"\u2B1A",Start:"\u2261",L3:"L3",R3:"R3","D-Pad Up":"\u25B2","D-Pad Down":"\u25BC","D-Pad Left":"\u25C0","D-Pad Right":"\u25B6","Home / Guide":"\u2B24"},ky={"South / A / Cross":"A","East / B / Circle":"B","West / X / Square":"X","North / Y / Triangle":"Y","L1 / LB":"LB","R1 / RB":"RB","L2 / LT":"LT","R2 / RT":"RT","Select / Back":"\u2B1A",Start:"\u2261",L3:"L3",R3:"R3","D-Pad Up":"\u25B2","D-Pad Down":"\u25BC","D-Pad Left":"\u25C0","D-Pad Right":"\u25B6","Home / Guide":"\u2B24"},wp={"South / A / Cross":"\u25CF","East / B / Circle":"\u25CF","West / X / Square":"\u25CF","North / Y / Triangle":"\u25CF","L1 / LB":"L1","R1 / RB":"R1","L2 / LT":"L2","R2 / RT":"R2","Select / Back":"\u25FC",Start:"\u25B6",L3:"L3",R3:"R3","D-Pad Up":"\u25B2","D-Pad Down":"\u25BC","D-Pad Left":"\u25C0","D-Pad Right":"\u25B6","Home / Guide":"\u25C6"},Hy={playstation:{"South / A / Cross":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L10 14.17 7.41 11.59 6 13l6 6 12-12-1.41-1.41z"/></svg>',"East / B / Circle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/></svg>',"West / X / Square":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>',"North / Y / Triangle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2L2 22h20L12 2z"/></svg>',"L1 / LB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L1</text></svg>',"R1 / RB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R1</text></svg>',"L2 / LT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L2</text></svg>',"R2 / RT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R2</text></svg>',"Select / Back":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',Start:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M4 8h4v8H4V8zm6 0h4v8h-4V8zm6 0h4v8h-4V8z"/></svg>',L3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L3</text></svg>',R3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R3</text></svg>',"D-Pad Up":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 14l5-5 5 5H7z"/></svg>',"D-Pad Down":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 10l5 5 5-5H7z"/></svg>',"D-Pad Left":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M14 7l-5 5 5 5V7z"/></svg>',"D-Pad Right":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M10 7l5 5-5 5V7z"/></svg>',"Home / Guide":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>'},xbox:{"South / A / Cross":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">A</text></svg>',"East / B / Circle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">B</text></svg>',"West / X / Square":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">X</text></svg>',"North / Y / Triangle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">Y</text></svg>',"L1 / LB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">LB</text></svg>',"R1 / RB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">RB</text></svg>',"L2 / LT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">LT</text></svg>',"R2 / RT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">RT</text></svg>',"Select / Back":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M4 8h4v8H4V8zm6 0h4v8h-4V8zm6 0h4v8h-4V8z"/></svg>',Start:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M4 12h16v2H4v-2z"/></svg>',L3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">L3</text></svg>',R3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">R3</text></svg>',"D-Pad Up":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 14l5-5 5 5H7z"/></svg>',"D-Pad Down":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 10l5 5 5-5H7z"/></svg>',"D-Pad Left":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M14 7l-5 5 5 5V7z"/></svg>',"D-Pad Right":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M10 7l5 5-5 5V7z"/></svg>',"Home / Guide":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12" stroke="currentColor" stroke-width="2" fill="none"/></svg>'},nintendo:{"South / A / Cross":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">A</text></svg>',"East / B / Circle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">B</text></svg>',"West / X / Square":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">X</text></svg>',"North / Y / Triangle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="14" font-weight="bold">Y</text></svg>',"L1 / LB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">L</text></svg>',"R1 / RB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">R</text></svg>',"L2 / LT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">ZL</text></svg>',"R2 / RT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">ZR</text></svg>',"Select / Back":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M5 12h14v2H5v-2z"/></svg>',Start:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" fill="none"/></svg>',L3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">L3</text></svg>',R3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="9" font-weight="bold">R3</text></svg>',"D-Pad Up":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 14l5-5 5 5H7z"/></svg>',"D-Pad Down":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 10l5 5 5-5H7z"/></svg>',"D-Pad Left":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M14 7l-5 5 5 5V7z"/></svg>',"D-Pad Right":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M10 7l5 5-5 5V7z"/></svg>',"Home / Guide":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></svg>'},generic:{"South / A / Cross":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/></svg>',"East / B / Circle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/></svg>',"West / X / Square":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><rect x="2" y="2" width="20" height="20" rx="2"/></svg>',"North / Y / Triangle":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M12 2L2 22h20L12 2z"/></svg>',"L1 / LB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L1</text></svg>',"R1 / RB":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R1</text></svg>',"L2 / LT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L2</text></svg>',"R2 / RT":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R2</text></svg>',"Select / Back":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',Start:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M4 8h4v8H4V8zm6 0h4v8h-4V8zm6 0h4v8h-4V8z"/></svg>',L3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">L3</text></svg>',R3:'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-size="10" font-weight="bold">R3</text></svg>',"D-Pad Up":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 14l5-5 5 5H7z"/></svg>',"D-Pad Down":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M7 10l5 5 5-5H7z"/></svg>',"D-Pad Left":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M14 7l-5 5 5 5V7z"/></svg>',"D-Pad Right":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><path d="M10 7l5 5-5 5V7z"/></svg>',"Home / Guide":'<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em"><circle cx="12" cy="12" r="10"/></svg>'}},Kl=class{constructor(e,t,n,s={}){this.controllerGroup=e,this.camera=t,this.renderer=n,this.onConfigChange=s.onConfigChange||(()=>{}),this.cssRenderer=new Zl,this.cssRenderer.setSize(window.innerWidth,window.innerHeight),this.cssRenderer.domElement.style.position="absolute",this.cssRenderer.domElement.style.top="0",this.cssRenderer.domElement.style.left="0",this.cssRenderer.domElement.style.pointerEvents="none",this.cssRenderer.domElement.style.zIndex="10",(document.querySelector("#app")||document.body).appendChild(this.cssRenderer.domElement),this.labelGroup=new zt,(e.parent||e).add(this.labelGroup),this.labels=new Map,this.configs=new Map,this.buttonObjects=new Map,this.basePositions=new Map,this.glyphs=[],this.enabled=!0;for(let a=0;a<17;a++)this.configs.set(a,{...Mp,text:this.getDefaultSymbol(a)});window.addEventListener("resize",()=>this.onResize()),document.fonts.ready.then(()=>{for(let a of this.buttonObjects.keys())this.createOrUpdateLabel(a)}),this.glyphsReady=this.loadGlyphs()}async loadGlyphs(){try{let e=await fetch("/svg/glyphs.json");e.ok&&(this.glyphs=await e.json())}catch(e){console.warn("Failed to load glyphs:",e),this.glyphs=[]}}getGlyphs(){return this.glyphs}async getGlyphSvg(e){if(!this.glyphs.find(n=>n.filename===e))return null;try{let n=await fetch(`/svg/glyphs/${e}`);if(n.ok){let s=await n.text();return s=s.replace(/stroke="white"/g,'stroke="currentColor"').replace(/stroke='white'/g,"stroke='currentColor'").replace(/width="[\d.]+"/,'width="1em"').replace(/height="[\d.]+"/,'height="1em"'),s.includes("viewBox")||(s=s.replace("<svg",'<svg viewBox="0 0 24 24"')),s}}catch(n){console.warn(`Failed to load glyph ${e}:`,n)}return null}async setButtonGlyph(e,t){let n=await this.getGlyphSvg(t);return n?(this.updateConfig(e,{svg:n}),!0):!1}getDefaultSymbol(e){let t=vh[e];return Tp[t]||wp[t]||""}setButtonObject(e,t,n){this.buttonObjects.set(e,t),this.basePositions.set(e,n.clone()),this.createOrUpdateLabel(e)}createOrUpdateLabel(e){let t=this.configs.get(e);if(!t)return;if(!this.buttonObjects.has(e)){let r=this.labels.get(e);r&&(r.visible=!1);return}let s=this.labels.get(e);if(s){let r=s.userData.contentElement;r&&(this.setContentElement(r,t),r.style.cssText=this.buildStyle(t,!1,s.userData.isHovered||!1))}else{let r=document.createElement("div");r.style.cssText="pointer-events: none; user-select: none;";let o=document.createElement("div");o.style.cssText=this.buildStyle(t,!1,!1),o.dataset.buttonIndex=e,o.style.pointerEvents="auto",o.addEventListener("dblclick",a=>{a.stopPropagation();let l=new CustomEvent("buttonLabelDoubleClick",{detail:{index:e}});window.dispatchEvent(l)}),r.appendChild(o),s=new $l(r),s.center.set(.5,.5),this.labels.set(e,s),this.labelGroup.add(s),s.userData.contentElement=o,s.userData.isHovered=!1,this.setContentElement(o,t)}this.updateLabelPosition(e),s.visible=this.enabled&&t.visible}buildStyle(e,t,n){var o,a,l,c,u;let s=[];s.push(`font-family: ${e.fontFamily}`),s.push(`font-size: ${e.fontSize}px`),s.push(`font-weight: ${e.fontWeight}`),s.push(`font-style: ${e.fontStyle}`),s.push(`color: ${e.color}`),s.push("white-space: nowrap"),s.push("pointer-events: none"),s.push("user-select: none"),s.push("line-height: 1"),s.push(`transition: ${e.activation.transition}`),e.labelScale!==1&&s.push(`transform: scale(${e.labelScale})`);let r=[];if(e.dropShadow.enabled&&!n){let h=e.dropShadow;r.push(`drop-shadow(${h.x}px ${h.y}px ${h.blur}px ${h.color})`)}if(t&&((o=e.activation.glow)!=null&&o.enabled)||n&&((a=e.hover.glow)!=null&&a.enabled)){let h=t?e.activation.glow:e.hover.glow,d=(l=h.blur)!=null?l:4,f=(c=h.color)!=null?c:e.color,m=(u=h.layers)!=null?u:1;for(let _=1;_<=m;_++)r.push(`drop-shadow(0 0 ${d*_}px ${f})`)}if(t){let h=e.activation.brightness;r.push(`brightness(${h})`)}if(r.length&&s.push(`filter: ${r.join(" ")}`),t){let h=(e.labelScale||1)*(e.activation.scale||1);h!==1&&s.push(`transform: scale(${h})`)}return s.join("; ")}setContentElement(e,t){t.svg?e.innerHTML=t.svg:e.textContent=t.text||""}updateLabelPosition(e){let t=this.labels.get(e),n=this.buttonObjects.get(e),s=this.basePositions.get(e),r=this.configs.get(e);if(!t||!n||!s||!r)return;let o=new qt;n.traverse(c=>{if(c.isMesh){let u=new qt().setFromObject(c);o.union(u)}});let a;if(o.isEmpty())a=new I,n.getWorldPosition(a);else{let c=new I;o.getCenter(c);let u=new I(c.x,o.max.y,c.z),h=new I;this.camera.getWorldDirection(h),h.y=Math.abs(h.y);let d=Cn.clamp(h.y,0,1);a=new I().lerpVectors(c,u,d)}let l=new I(r.offset.x,r.offset.y,r.offset.z);a.add(l),t.position.copy(a)}updateButtonState(e,t,n=0){let s=this.labels.get(e),r=this.configs.get(e);if(!s||!r)return;let o=s.userData.contentElement;o&&(this.setContentElement(o,r),o.style.cssText=this.buildStyle(r,t,s.userData.isHovered||!1))}updateLabelHover(e,t){let n=this.labels.get(e),s=this.configs.get(e);if(!n||!s)return;n.userData.isHovered=t;let r=n.userData.contentElement;r&&(this.setContentElement(r,s),r.style.cssText=this.buildStyle(s,!1,t))}updateAllPositions(){for(let e of this.buttonObjects.keys())this.updateLabelPosition(e)}setEnabled(e){var t;this.enabled=e,this.labelGroup.visible=e,this.cssRenderer.domElement.style.display=e?"":"none";for(let[n,s]of this.labels){let r=this.configs.get(n);s.visible=e&&((t=r==null?void 0:r.visible)!=null?t:!0)}}updateConfig(e,t){let n=this.configs.get(e)||{...Mp},s={...n,...t};t.svg!==void 0&&(s.text=t.svg?"":n.text),t.text!==void 0&&t.text!==""&&(s.svg=null),t.activation&&(s.activation={...n.activation,...t.activation}),t.dropShadow&&(s.dropShadow={...n.dropShadow,...t.dropShadow}),t.offset&&(s.offset={...n.offset,...t.offset}),this.configs.set(e,s),this.createOrUpdateLabel(e),this.onConfigChange(this.getAllConfigs())}setGlobalConfig(e){for(let t=0;t<17;t++)this.updateConfig(t,e)}getConfig(e){return this.configs.get(e)?{...this.configs.get(e)}:null}getAllConfigs(){let e={};for(let[t,n]of this.configs)e[t]={...n};return e}setVisibility(e,t){let n=this.configs.get(e);if(!n)return;n.visible=t;let s=this.labels.get(e);s&&(s.visible=this.enabled&&t),this.onConfigChange(this.getAllConfigs())}setText(e,t){this.updateConfig(e,{text:t})}applySvgPreset(e){let t=Hy[e];if(!t){console.warn(`Unknown SVG preset: ${e}`);return}for(let n=0;n<17;n++){let s=vh[n],r=t[s];r&&this.updateConfig(n,{svg:r})}}applyPreset(e){let t=e==="playstation"?Tp:e==="xbox"?ky:wp;for(let n=0;n<17;n++){let s=vh[n];this.updateConfig(n,{text:t[s]||""})}}render(){this.enabled&&(this.updateAllPositions(),this.cssRenderer.render(this.labelGroup,this.camera))}onResize(){this.cssRenderer.setSize(window.innerWidth,window.innerHeight)}dispose(){this.cssRenderer.domElement.remove(),this.labelGroup.clear(),this.labels.clear(),this.configs.clear(),this.buttonObjects.clear(),this.basePositions.clear()}toJSON(){let e={};for(let[t,n]of this.configs)e[t]={...n};return{enabled:this.enabled,configs:e}}fromJSON(e){if(e&&(e.enabled!==void 0&&this.setEnabled(e.enabled),e.configs))for(let[t,n]of Object.entries(e.configs)){let s=parseInt(t);this.configs.has(s)&&(this.configs.set(s,{...this.configs.get(s),...n}),this.createOrUpdateLabel(s))}}};var Jl=class{constructor(){this.container=null,this.visible=!1,this.init()}init(){this.container=document.createElement("div"),this.container.className="composition-grid",document.body.appendChild(this.container)}buildSVG(){let e=getComputedStyle(document.documentElement),t=parseFloat(e.getPropertyValue("--grid-bracket-size"))||24,n=parseFloat(e.getPropertyValue("--grid-cross-size"))||40,s=window.innerWidth,r=window.innerHeight,o=t,a=t,l=n,c=n;return`
      <svg viewBox="0 0 ${s} ${r}" preserveAspectRatio="none" width="100%" height="100%">
        <!-- Corner brackets -->
        <g class="grid-bracket">
          <!-- Top-left -->
          <path d="M 0 0 H ${o} M 0 0 V ${a}" />
          <!-- Top-right -->
          <path d="M ${s} 0 H ${s-o} M ${s} 0 V ${a}" />
          <!-- Bottom-left -->
          <path d="M 0 ${r} H ${o} M 0 ${r} V ${r-a}" />
          <!-- Bottom-right -->
          <path d="M ${s} ${r} H ${s-o} M ${s} ${r} V ${r-a}" />
        </g>
        <!-- Edge center T-markers -->
        <g class="grid-bracket">
          <!-- Top center -->
          <path d="M ${s/2-o/2} 0 H ${s/2+o/2} M ${s/2} 0 V ${a}" />
          <!-- Bottom center -->
          <path d="M ${s/2-o/2} ${r} H ${s/2+o/2} M ${s/2} ${r} V ${r-a}" />
          <!-- Left center -->
          <path d="M 0 ${r/2-a/2} V ${r/2+a/2} M 0 ${r/2} H ${o}" />
          <!-- Right center -->
          <path d="M ${s} ${r/2-a/2} V ${r/2+a/2} M ${s} ${r/2} H ${s-o}" />
        </g>
        <!-- Center cross -->
        <g class="grid-cross">
          <line x1="${s/2}" y1="${r/2-c/2}" x2="${s/2}" y2="${r/2+c/2}" />
          <line x1="${s/2-l/2}" y1="${r/2}" x2="${s/2+l/2}" y2="${r/2}" />
        </g>
        <!-- Rule of thirds -->
        <g class="grid-thirds">
          <line x1="${s/3}" y1="0" x2="${s/3}" y2="${r}" />
          <line x1="${2*s/3}" y1="0" x2="${2*s/3}" y2="${r}" />
          <line x1="0" y1="${r/3}" x2="${s}" y2="${r/3}" />
          <line x1="0" y1="${2*r/3}" x2="${s}" y2="${2*r/3}" />
        </g>
      </svg>
    `}show(){this.visible||(this.visible=!0,this.container.innerHTML=this.buildSVG(),requestAnimationFrame(()=>this.container.classList.add("visible")))}hide(){this.visible&&(this.visible=!1,this.container.classList.remove("visible"))}onResize(){this.visible&&(this.container.innerHTML=this.buildSVG())}};var Vy="TrailStudio";var qi="models",_h="current_glb",yh="current_file_handle";function Sh(){return new Promise((i,e)=>{let t=indexedDB.open(Vy,1);t.onupgradeneeded=n=>{let s=n.target.result;s.objectStoreNames.contains(qi)||s.createObjectStore(qi)},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function Ep(i){try{let e=await Sh();return await new Promise(t=>{let s=e.transaction(qi,"readonly").objectStore(qi).get(i);s.onsuccess=()=>t(s.result||null),s.onerror=()=>t(null)})}catch(e){return null}}async function Ap(i,e,t){try{(await Sh()).transaction(qi,"readwrite").objectStore(qi).put(e,i)}catch(n){console.error(t,n)}}function Cp(i,e){return Ap(_h,{buffer:i,name:e},"Failed to save model to IndexedDB:")}function Rp(){return Ep(_h)}function Ip(i){return Ap(yh,i,"Failed to save handle to IndexedDB:")}function Pp(){return Ep(yh)}async function bh(){try{let t=(await Sh()).transaction(qi,"readwrite").objectStore(qi);t.delete(_h),t.delete(yh)}catch(i){console.error("Failed to clear model from IndexedDB:",i)}}async function Lp(i){var t;if(!i||typeof i.queryPermission!="function")return!1;let e={mode:"read"};try{if(await i.queryPermission(e)==="granted")return!0}catch(n){return!1}if(!((t=navigator.userActivation)!=null&&t.isActive))return!1;try{return await i.requestPermission(e)==="granted"}catch(n){return(n==null?void 0:n.name)==="SecurityError"&&console.warn("File permission request requires a user gesture."),!1}}function Dp(){let i=!1,e=!1,t=null,n=0,s=0,r=1;document.addEventListener("mousedown",o=>{o.target.tagName!=="INPUT"||o.target.type!=="number"||(i=!0,t=o.target,n=o.clientX,s=parseFloat(t.value)||0,r=parseFloat(t.step)||1)}),window.addEventListener("mousemove",o=>{if(!i||!t)return;let a=o.clientX-n;if(!e&&Math.abs(a)>4&&(e=!0,t.blur()),!e)return;let l=o.ctrlKey?.2:o.shiftKey?5:1,c=r<.1?.005:r<1?.02:.1,u=s+a*r*c*5*l,h=t.min===""?-1/0:parseFloat(t.min),d=t.max===""?1/0:parseFloat(t.max);u=Math.max(h,Math.min(d,u));let f=(r.toString().split(".")[1]||"").length;t.value=u.toFixed(f>0?f:2),t.dispatchEvent(new Event("input",{bubbles:!0}))}),window.addEventListener("mouseup",()=>{i=!1,e=!1,t=null})}function Np({renderer:i,lightingManager:e,trailManager:t,compositionGrid:n,handleCameraMouseDown:s,handleCameraMouseMove:r,handleCameraWheel:o,handleCameraResize:a,resizePostProcessing:l,scheduleSave:c,saveSettings:u,getButtonLabelManager:h}){let d=new Set,f=null;return window.addEventListener("keydown",m=>{if(m.key==="Escape")e.setActiveLight(null);else if(m.key==="Tab"){m.preventDefault();let _=document.querySelector("#inspector-shell");_&&(_.style.display=_.style.display==="none"?"flex":"none")}else if(m.key==="`"){m.preventDefault();let _=document.querySelector("#hud");_&&(_.style.display=_.style.display==="none"?"flex":"none")}}),window.addEventListener("contextmenu",m=>m.preventDefault()),i.domElement.addEventListener("mousedown",m=>{e.setActiveLight(null),s(m),t.setDragging(!0),d.add(m.button),n.show()}),window.addEventListener("mouseup",m=>{t.setDragging(!1),d.delete(m.button),d.size===0&&n.hide(),u()}),window.addEventListener("blur",()=>{d.clear(),n.hide()}),window.addEventListener("mousemove",m=>{r(m,e.activeLightId,e.lightsMap)}),i.domElement.addEventListener("wheel",m=>{o(m,c),n.show(),clearTimeout(f),f=setTimeout(()=>{d.size===0&&n.hide()},150)},{passive:!1}),window.addEventListener("resize",()=>{var m;a(),i.setSize(innerWidth,innerHeight),l(innerWidth,innerHeight),(m=h())==null||m.onResize(),n.onResize()}),()=>{clearTimeout(f),d.clear()}}var yn=new Ut(50,window.innerWidth/window.innerHeight,.1,100),Kt=new I(0,0,0),dn=6.5,jl=!1,rc=!1,Ql=-1,ec={x:0,y:0},ic=!1,sc=60;function Ah(){return{enabled:ic,fps:sc}}var tc=0,nc=0,Eh=!1,Fp=null,Mh=new I,Th=new I,Gy=new I,Gn=Math.PI/180,Wy=1*Gn,Xy=1*Gn;var gt=null;function Up(i){gt=i}var Ie={},wh=!1;function Yi(){Ie={camTargetX:document.querySelector("#camTargetX"),camTargetY:document.querySelector("#camTargetY"),camTargetZ:document.querySelector("#camTargetZ"),camRadius:document.querySelector("#camRadius"),camRadiusInput:document.querySelector("#camRadiusInput"),camRotX:document.querySelector("#camRotX"),camRotY:document.querySelector("#camRotY"),camRotZ:document.querySelector("#camRotZ"),camFov:document.querySelector("#camFov"),camFovInput:document.querySelector("#camFovInput"),fpsToggle:document.querySelector("#fpsToggle"),fpsSelect:document.querySelector("#fpsSelect")}}function oc(){Ie.camTargetX||Yi(),Ie.camTargetX&&(Ie.camTargetX.value=Kt.x.toFixed(2)),Ie.camTargetY&&(Ie.camTargetY.value=Kt.y.toFixed(2)),Ie.camTargetZ&&(Ie.camTargetZ.value=Kt.z.toFixed(2))}function Wn(i=!1){yn.position.set(Kt.x,Kt.y+1.2,Kt.z+dn),yn.lookAt(Kt),Ie.camRadius||Yi(),Ie.camRadius&&(Ie.camRadius.value=dn),Ie.camRadiusInput&&(Ie.camRadiusInput.value=dn.toFixed(1)),!i&&gt&&(wh||(wh=!0,requestAnimationFrame(()=>{!jl&&gt&&(jl=!0,Ie.camRotX&&(Ie.camRotX.value=(gt.rotation.x/Gn).toFixed(1)),Ie.camRotY&&(Ie.camRotY.value=(gt.rotation.y/Gn).toFixed(1)),Ie.camRotZ&&(Ie.camRotZ.value=(gt.rotation.z/Gn).toFixed(1)),jl=!1),wh=!1})))}var As=(i,e=!0)=>{let t=yn.fov,n=Math.max(1,Math.min(170,parseFloat(i)||50));if(e&&t!==n){let s=t*.5*Gn,r=n*.5*Gn;dn=dn*(Math.tan(s)/Math.tan(r)),dn=Math.max(.5,Math.min(50,dn)),Ie.camRadius||Yi(),Ie.camRadius&&(Ie.camRadius.value=dn),Ie.camRadiusInput&&(Ie.camRadiusInput.value=dn.toFixed(1))}yn.fov=n,yn.updateProjectionMatrix(),Ie.camFov||Yi(),Ie.camFov&&(Ie.camFov.value=n),Ie.camFovInput&&(Ie.camFovInput.value=n),Wn(!0)},Lo=i=>{dn=Math.max(.5,Math.min(50,parseFloat(i)||6.5)),Wn()},qy=()=>{var n,s,r;if(jl||!gt)return;Ie.camRotX||Yi();let i=(parseFloat((n=Ie.camRotX)==null?void 0:n.value)||0)*Gn,e=(parseFloat((s=Ie.camRotY)==null?void 0:s.value)||0)*Gn,t=(parseFloat((r=Ie.camRotZ)==null?void 0:r.value)||0)*Gn;gt.rotation.set(i,e,t)},Yy=()=>{var i,e,t;Ie.camTargetX||Yi(),Kt.x=parseFloat((i=Ie.camTargetX)==null?void 0:i.value)||0,Kt.y=parseFloat((e=Ie.camTargetY)==null?void 0:e.value)||0,Kt.z=parseFloat((t=Ie.camTargetZ)==null?void 0:t.value)||0,Wn()};function Bp(i){Yi(),Ie.camFov&&Ie.camFov.addEventListener("input",t=>As(t.target.value)),Ie.camFovInput&&Ie.camFovInput.addEventListener("input",t=>As(t.target.value)),Ie.camRadius&&Ie.camRadius.addEventListener("input",t=>Lo(t.target.value)),Ie.camRadiusInput&&Ie.camRadiusInput.addEventListener("input",t=>Lo(t.target.value)),Ie.fpsToggle&&Ie.fpsToggle.addEventListener("change",t=>{ic=t.target.checked,i&&i()}),Ie.fpsSelect&&Ie.fpsSelect.addEventListener("change",t=>{sc=parseInt(t.target.value,10),i&&i()}),["X","Y","Z"].forEach(t=>{let n=document.querySelector(`#camRot${t}`);n&&n.addEventListener("input",qy)}),["X","Y","Z"].forEach(t=>{let n=document.querySelector(`#camTarget${t}`);n&&n.addEventListener("input",Yy)});let e=document.querySelector("#resetCamBtn");e&&e.addEventListener("click",()=>{dn=6.5,Kt.set(0,0,0),gt&&gt.rotation.set(.55,0,0),As(50),oc(),Wn(),i&&i()}),window.addEventListener("mouseup",()=>{rc=!1})}function Op(i){rc=!0,Ql=i.button,ec={x:i.clientX,y:i.clientY}}function zp(i,e=null,t=new Map){rc&&(tc+=i.clientX-ec.x,nc+=i.clientY-ec.y,ec={x:i.clientX,y:i.clientY},Fp=e,Eh||(Eh=!0,requestAnimationFrame($y)))}function $y(){if(Eh=!1,!rc){tc=0,nc=0;return}let i=tc,e=nc;if(tc=0,nc=0,Ql===0){if(!Fp&&gt){gt.rotation.y+=i*.008,gt.rotation.x+=e*.008,Math.abs(gt.rotation.y)<=Wy&&(gt.rotation.y=0);let t=80*Gn;Math.abs(gt.rotation.x-t)<=Xy&&(gt.rotation.x=t),Wn()}}else if(Ql===1){let t=dn*.0015;yn.matrix.extractBasis(Mh,Th,Gy),Mh.multiplyScalar(-i*t),Th.multiplyScalar(e*t),Kt.add(Mh).add(Th),oc(),Wn()}else Ql===2&&As(yn.fov+e*.1)}function kp(i,e){i.preventDefault(),Lo(dn+i.deltaY*.0075),e&&e()}function Hp(){yn.aspect=window.innerWidth/window.innerHeight,yn.updateProjectionMatrix()}function Vp(){return{fov:yn.fov,radius:dn,target:[Kt.x,Kt.y,Kt.z],rotation:gt?[gt.rotation.x,gt.rotation.y,gt.rotation.z]:[0,0,0],fpsLimit:Ah()}}function Gp(i){i&&(i.target&&Array.isArray(i.target)&&(Kt.set(...i.target),oc()),i.fov!==void 0&&As(i.fov,!1),i.radius!==void 0&&Lo(i.radius),i.rotation&&Array.isArray(i.rotation)&&gt&&gt.rotation.set(...i.rotation),i.fpsLimit&&(ic=i.fpsLimit.enabled,sc=i.fpsLimit.fps,Ie.fpsToggle||Yi(),Ie.fpsToggle&&(Ie.fpsToggle.checked=ic),Ie.fpsSelect&&(Ie.fpsSelect.value=sc)),Wn())}var Ch={resetCamera(){dn=6.5,Kt.set(0,0,0),gt&&gt.rotation.set(.55,0,0),As(50),oc(),Wn()},updateCameraFromBridge(i){i.value!==void 0&&typeof i.value=="number"&&(i.control==="camera-fov"&&As(i.value),i.control==="camera-zoom"&&Lo(i.value))}};function Zy(i){if(document.querySelector(`link[href="${i}"]`))return;let e=document.createElement("link");e.rel="stylesheet",e.href=i,document.head.appendChild(e)}function sm(i){let e=document.querySelector(i);if(!e)throw new Error(`TrailStudio startup failed: missing required element ${i}`);return e}var Ky=["South / A / Cross","East / B / Circle","West / X / Square","North / Y / Triangle","L1 / LB","R1 / RB","L2 / LT","R2 / RT","Select / Back","Start","L3","R3","D-Pad Up","D-Pad Down","D-Pad Left","D-Pad Right","Home / Guide"],Jy=sm("#app");["#inspector-shell","#aaToggle","#aaQualitySelect","#shadowQualitySelect","#bloomToggle","#aoToggle","#toneMappingSelect","#modelScale","#modelScaleInput","#emissionIntensity","#emissionIntensityInput","#trailOffset","#trailOffsetInput","#trailRadius","#trailRadiusInput","#trailIntensity","#trailIntensityInput","#trailWidth","#trailWidthInput","#trailLength","#trailLengthInput"].forEach(sm);var Do=new ls,Ot=new Il({antialias:!1,alpha:!0,premultipliedAlpha:!1});Ot.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));Ot.setSize(innerWidth,innerHeight);Ot.setClearColor(0,0);Ot.outputColorSpace=Mt;Ot.toneMapping=zi;Ot.toneMappingExposure=1.1;Ot.shadowMap.enabled=!0;Ot.shadowMap.type=Oi;Jy.appendChild(Ot.domElement);var jy=new Jl,{composer:Qy,aoPass:No,bloomPass:Fo,postShaderPass:Fh,updateAntiAliasing:Uh,resize:eS,dispose:tS}=up(Ot,Do,yn),$i=new Gl,Cs=new Vl(Do),Bh=new Fl(Ot,Do),lc={...Nl},br=new zt;br.rotation.x=.3;Do.add(br);Up(br);var Oh=1,zh=new he(16777215),Jt=new Dl(Do,yn),fn=new Yl(br,Jt),Mi=new Hl({hudUI:$i.getHudUI(),meshMappings:fn.MESH_MAPPINGS,onPadChange:()=>{$i.resetSnapshot()}}),cc=np({modelManager:fn,clearStoredModel:bh,getStoredFileHandle:Pp,getStoredBinaryModel:Rp,saveBinaryModel:Cp,saveFileHandle:Ip,verifyFilePermission:Lp});Dp();var ze=null;async function nS(){ze&&ze.dispose(),ze=new Kl(br,yn,Ot,{onConfigChange:ac});for(let[i,e]of Object.entries(fn.buttons3D)){let t=parseInt(i);ze.setButtonObject(t,e.node,fn.basePositions[t])}await iS()}fn.onModelLoaded(async()=>{await nS()});fn.onButtonRegistered((i,e)=>{ze&&ze.setButtonObject(i,e,fn.basePositions[i])});var Rh=document.querySelector("#inspector-shell");Rh&&(Rh.addEventListener("input",ac),Rh.addEventListener("change",ac));function kh(){Bh.update(lc)}rp(lc,kh,Bh);Bp(Gh);Cs.renderLightingDock();window.CustomDropdown&&window.CustomDropdown.bindAll();document.querySelector("#aaToggle").addEventListener("change",Uh);document.querySelector("#aaQualitySelect").addEventListener("change",Uh);document.querySelector("#shadowQualitySelect").addEventListener("change",i=>Cs.updateShadowQuality(i.target.value));document.querySelector("#bloomToggle").addEventListener("change",i=>{Fo.enabled=i.target.checked});qe("#bloomStrength","#bloomStrengthInput",i=>{Fo.strength=i},2);qe("#bloomRadius","#bloomRadiusInput",i=>{Fo.radius=i},2);qe("#bloomThreshold","#bloomThresholdInput",i=>{Fo.threshold=i},2);document.querySelector("#aoToggle").addEventListener("change",i=>{No.enabled=i.target.checked});qe("#aoRadius","#aoRadiusInput",i=>{No.kernelRadius=i},2);qe("#aoMinDistance","#aoMinDistanceInput",i=>{No.minDistance=i},3);qe("#aoMaxDistance","#aoMaxDistanceInput",i=>{No.maxDistance=i},2);document.querySelector("#toneMappingSelect").addEventListener("change",i=>{switch(i.target.value){case"Linear":Ot.toneMapping=vs;break;case"Reinhard":Ot.toneMapping=_s;break;case"Cineon":Ot.toneMapping=ys;break;default:Ot.toneMapping=zi;break}});qe("#exposureRange","#exposureInput",i=>{Ot.toneMappingExposure=i},2);qe("#contrastRange","#contrastInput",i=>{Fh.uniforms.contrast.value=i},2);qe("#saturationRange","#saturationInput",i=>{Fh.uniforms.saturation.value=i},2);var Hh=i=>{let e=Math.max(.01,parseFloat(i)||1);br.scale.set(e,e,e);let t=document.querySelector("#modelScale"),n=document.querySelector("#modelScaleInput");t&&(t.value=e),n&&(n.value=e.toFixed(2))},Wp=document.querySelector("#modelScale"),Xp=document.querySelector("#modelScaleInput");Wp&&Wp.addEventListener("input",i=>Hh(i.target.value));Xp&&Xp.addEventListener("input",i=>Hh(i.target.value));var Ih=document.querySelector("#emissionColor");Ih&&oi(Ih,Ih.dataset.value,i=>zh.set(i));qe("#trailOffset","#trailOffsetInput",i=>{Jt.setOffsetY(i),Jt.syncTarget(fn.getLeftStickTrailTarget())},2);qe("#trailRadius","#trailRadiusInput",i=>{Jt.setRadius(i)},2);qe("#trailIntensity","#trailIntensityInput",i=>{Jt.setIntensity(i)},2);qe("#trailWidth","#trailWidthInput",i=>{Jt.setWidth(i)},3);qe("#trailLength","#trailLengthInput",i=>{Jt.setLength(i)},2);var Ph=document.querySelector("#trailColorStart");Ph&&oi(Ph,Ph.dataset.value,i=>Jt.setColorStart(i));var Lh=document.querySelector("#trailColorEnd");Lh&&oi(Lh,Lh.dataset.value,i=>Jt.setColorEnd(i));var qp=document.querySelector("#trailEnabled");qp&&qp.addEventListener("change",i=>{Jt.setEnabled(i.target.checked)});qe("#emissionIntensity","#emissionIntensityInput",i=>{Oh=i},2);var Yp=document.querySelector("#boneVisibilityToggle");Yp&&Yp.addEventListener("change",i=>{fn.setBoneVisibility(i.target.checked)});var $p=document.querySelector("#syncLeftStickDpadToggle");$p&&$p.addEventListener("change",i=>{fn.setSyncLeftStickDpad(i.target.checked)});var Zp=document.querySelector("#dpadButtonVerticalMovementToggle");Zp&&Zp.addEventListener("change",i=>{fn.setDpadButtonVerticalMovement(i.target.checked)});async function iS(){if(!ze)return;await ze.glyphsReady;let i=document.querySelector("#buttonLabelsEnabled");i&&(ze.setEnabled(i.checked),i.addEventListener("change",s=>ze.setEnabled(s.target.checked)));let e=document.querySelector("#buttonLabelFont"),t=[];if(e){try{let r=await fetch("/assets/fonts.json");r.ok&&(t=await r.json(),e.innerHTML="",t.forEach(o=>{let a=document.createElement("option");a.value=o.value,a.textContent=o.label,e.appendChild(a)}))}catch(r){console.warn("Failed to load fonts:",r)}let s=ze.getConfig(0);s&&s.fontFamily&&(e.value=s.fontFamily),e.addEventListener("change",r=>{let o=t.find(a=>a.value===r.target.value);o!=null&&o.url&&Zy(o.url),ze.setGlobalConfig({fontFamily:r.target.value})})}qe("#buttonLabelOffsetY","#buttonLabelOffsetYInput",s=>{ze.setGlobalConfig({offset:{y:s}})},2),qe("#buttonLabelFontSize","#buttonLabelFontSizeInput",s=>{ze.setGlobalConfig({fontSize:s})},0);let n=document.querySelector("#buttonLabelColor");n&&oi(n,n.dataset.value,s=>ze.setGlobalConfig({color:s})),rm()}function rm(){var e;let i=document.querySelector("#buttonLabelList");if(!(!i||!ze)){i.innerHTML="";for(let t=0;t<17;t++){let n=ze.getConfig(t);if(!n)continue;if(!((e=ze.buttonObjects)==null?void 0:e.has(t))){let m=document.createElement("div");m.style.display="none",m.dataset.index=t,i.appendChild(m);continue}let r=document.createElement("div");r.style.cssText="display:flex;align-items:center;gap:6px;font-size:12px;min-height:24px;",r.dataset.index=t;let o=n.svg&&n.svg.trim()!=="",a=o?"":n.text||"",l=o?"\u2715 SVG active \u2014 type to replace":"",c=document.createElement("input");c.type="checkbox",c.dataset.index=t,c.checked=n.visible,c.style.cssText="width:14px;height:14px;flex-shrink:0;cursor:pointer;";let u=document.createElement("span");u.className="btn-name",u.dataset.index=t,u.textContent=Ky[t],u.style.cssText="width:110px;color:#aaa;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer;";let h=document.createElement("input");h.type="text",h.dataset.index=t,h.value=a,h.placeholder=l,h.readOnly=o,h.style.cssText=`flex:1;min-width:0;background:#1e1e22;border:1px solid #3a3a42;color:${o?"#888":"#fff"};padding:3px 6px;border-radius:4px;font-size:11px;font-family:inherit;height:22px;box-sizing:border-box;`;let d=document.createElement("button");d.type="button",d.className="svg-dropdown-btn",d.dataset.index=t,d.title="Select SVG glyph",d.textContent="\u25BC",d.style.cssText="width:26px;height:22px;flex-shrink:0;background:#2a2a30;border:1px solid #3a3a42;color:#ccc;border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:10px;line-height:1;";let f=document.createElement("div");f.style.cssText="display:flex;flex:1;gap:2px;min-width:0;",f.append(h,d),r.append(c,u,f),c.addEventListener("change",m=>{ze.setVisibility(parseInt(m.target.dataset.index),m.target.checked)}),r.addEventListener("mouseenter",m=>{ze.updateLabelHover(parseInt(m.currentTarget.dataset.index),!0)}),r.addEventListener("mouseleave",m=>{ze.updateLabelHover(parseInt(m.currentTarget.dataset.index),!1)}),u.addEventListener("click",m=>{let _=parseInt(m.currentTarget.dataset.index),g=ze.getConfig(_);g&&(ze.setVisibility(_,!g.visible),c.checked=!g.visible)}),h.addEventListener("change",m=>{let _=parseInt(m.target.dataset.index),g=m.target.value;g?ze.setText(_,g):ze.updateConfig(_,{text:""}),Dh(_)}),d.addEventListener("click",m=>{m.stopPropagation(),sS(m.target,parseInt(m.target.dataset.index))}),i.appendChild(r)}}}function sS(i,e){var a;document.querySelectorAll(".svg-glyph-menu").forEach(l=>l.remove());let t=((a=ze==null?void 0:ze.getGlyphs)==null?void 0:a.call(ze))||[],n=[{label:"None (text only)",svg:null,filename:null}];for(let l of t)n.push({label:l.friendlyName,svg:null,filename:l.filename});let s=document.createElement("div");s.className="svg-glyph-menu",s.style.cssText=`
    position:fixed;top:0;left:0;z-index:1000;
    background:#1e1e22;border:1px solid #3a3a42;border-radius:6px;
    box-shadow:0 8px 24px rgba(0,0,0,0.5);min-width:180px;padding:4px;
    font-size:11px;font-family:inherit;
  `,n.forEach(l=>{let c=document.createElement("div");if(c.style.cssText=`
      display:flex;align-items:center;gap:8px;padding:6px 10px;cursor:pointer;border-radius:3px;
      color:#e0e0e0;white-space:nowrap;
    `,l.svg){let h=document.createElement("span");h.innerHTML=l.svg,h.style.cssText="width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:#ccc;flex-shrink:0;",c.appendChild(h)}let u=document.createElement("span");u.textContent=l.label,c.appendChild(u),c.addEventListener("mouseenter",()=>{c.style.background="#3a3a42"}),c.addEventListener("mouseleave",()=>{c.style.background="transparent"}),c.addEventListener("click",async()=>{l.filename?await ze.setButtonGlyph(e,l.filename)&&(s.remove(),Dh(e)):(ze.updateConfig(e,{svg:null}),s.remove(),Dh(e))}),s.appendChild(c)}),document.body.appendChild(s);let r=i.getBoundingClientRect();s.style.top=`${r.bottom+4}px`,s.style.left=`${r.left}px`;let o=l=>{!s.contains(l.target)&&l.target!==i&&(s.remove(),document.removeEventListener("click",o))};setTimeout(()=>document.addEventListener("click",o),0)}function Dh(i){let e=document.querySelector(`#buttonLabelList [data-index="${i}"]`);if(!e)return;let t=ze.getConfig(i);if(!t)return;let n=e.querySelector('input[type="text"]');t.svg&&t.svg.trim()!==""?(n.value="",n.placeholder="\u2715 SVG active \u2014 type to replace",n.readOnly=!0,n.style.color="#888"):(n.value=t.text||"",n.placeholder="",n.readOnly=!1,n.style.color="#fff")}var Kp=document.querySelector("#loadDefaultBtn");Kp&&Kp.addEventListener("click",cc.resetToProcedural);var Jp=document.querySelector("#glbFile");Jp&&Jp.addEventListener("change",async i=>{try{await cc.loadSelectedFile(i.target.files[0])}catch(e){console.error("Failed to load model file:",e)}});var jp=document.querySelector("#openPickerBtn");jp&&jp.addEventListener("click",cc.pickFile);var Qp=document.querySelector("#exportSettingsBtn");Qp&&Qp.addEventListener("click",()=>{let i=JSON.stringify(Vh(),null,2),e=new Blob([i],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`trailpad-settings-${Date.now()}.json`,n.click(),URL.revokeObjectURL(t)});var em=document.querySelector("#importSettingsInput");em&&em.addEventListener("change",i=>{let e=i.target.files[0];if(!e)return;let t=new FileReader;t.onload=n=>{try{let s=JSON.parse(n.target.result);am(s),Gh()}catch(s){console.warn("Could not import settings:",s)}},t.readAsText(e)});var tm=document.querySelector("#padSelect");tm&&tm.addEventListener("change",i=>{Mi.selectPad(Number(i.target.value)),$i.resetSnapshot()});var nm=document.querySelector("#scan");nm&&(nm.onclick=om);var im=document.querySelector("#rumble");im&&(im.onclick=async()=>{let i=Mi.getSelectedPad();if(i!=null&&i.vibrationActuator)try{await i.vibrationActuator.playEffect("dual-rumble",{duration:180,strongMagnitude:.65,weakMagnitude:.35})}catch(e){console.warn("Rumble failed:",e)}});function om(){let i=Mi.refreshPads(),e=document.querySelector("#padSelect"),t=Mi.activePadIndex;if(!e)return;if(e.innerHTML="",!i.length){e.innerHTML="<option>No controller detected</option>",Mi.activePadIndex=null,$i.setStatus(!1);return}i.forEach(s=>{let r=document.createElement("option");r.value=s.index,r.textContent=`#${s.index} \u2014 ${s.id}`,e.appendChild(r)});let n=i.some(s=>s.index===t)?t:i[0].index;Mi.selectPad(n),e.value=n,$i.setStatus(!0)}var Vh=Jf({getCameraState:Vp,trailManager:Jt,lightingManager:Cs,iblState:lc,getButtonLabelManager:()=>ze});function am(i){i=$f(i),i&&(i.ibl&&op(lc,i.ibl,kh),i.camera&&Gp(i.camera),i.model&&jf(i.model,{modelManager:fn,trailManager:Jt,syncModelScale:Hh,setEmissionMultiplier:e=>{Oh=e},emissionColor:zh}),i.trail&&Qf(i.trail,Jt),i.postProcessing&&tp(i.postProcessing,{updateAntiAliasing:Uh,bloomPass:Fo,aoPass:No,renderer:Ot,postShaderPass:Fh}),ep(i,{lightingManager:Cs,getButtonLabelManager:()=>ze,refreshButtonLabels:rm}),Wn())}var lm=Zf({getState:Vh,applyState:am}),{save:Gh,scheduleSave:ac,load:rS}=lm,oS=Np({renderer:Ot,lightingManager:Cs,trailManager:Jt,compositionGrid:jy,handleCameraMouseDown:Op,handleCameraMouseMove:zp,handleCameraWheel:kp,handleCameraResize:Hp,resizePostProcessing:eS,scheduleSave:ac,saveSettings:Gh,getButtonLabelManager:()=>ze}),Nh=performance.now(),Sr=null;function Wh(){if(document.hidden){Sr=null;return}Sr=requestAnimationFrame(Wh);let{enabled:i,fps:e}=Ah();if(i){let n=performance.now(),s=1e3/e,r=n-Nh;if(r<s)return;Nh=n-r%s}let t=Mi.getSelectedPad();if(t){$i.setStatus(!0),$i.update(t),fn.applyGamepadInput(t,zh,Oh);let n=t.axes||[],s=Math.hypot(n[0]||0,n[1]||0);Jt.setLeftStickActive(s>.1)}else Mi.activePadIndex!==null&&($i.setStatus(!1),Jt.setLeftStickActive(!1));Jt.update(),ze&&ze.render(),Qy.render()}function aS(){Sr!==null&&cancelAnimationFrame(Sr),Sr=null,lm.dispose(),oS(),Mi.stopPolling(),ze==null||ze.dispose(),fn.clearController3D(),Cs.dispose(),Bh.dispose(),tS(),Ot.dispose()}window.addEventListener("pagehide",aS,{once:!0});document.addEventListener("visibilitychange",()=>{!document.hidden&&Sr===null&&(Nh=performance.now(),Wh())});kh();rS();cc.loadStoredModel();om();Wn();Wh();var cm={setMode(i){let e=document.querySelector(".inspector-group.active"),t=document.getElementById(i),n=document.getElementById("inspectorScroll");if(e===t){n&&(n.scrollTop=0);return}n&&(n.scrollTop=0),e&&t?(e.classList.remove("is-visible"),setTimeout(()=>{e.classList.remove("active"),t.classList.add("active"),requestAnimationFrame(()=>t.classList.add("is-visible"))},0)):t&&(t.classList.add("active"),requestAnimationFrame(()=>t.classList.add("is-visible")))},loadDefaultScene(){bh(),fn.buildProceduralController()},exportSettings(){let i=JSON.stringify(Vh(),null,2),e=new Blob([i],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`trailpad-settings-${Date.now()}.json`,n.click(),URL.revokeObjectURL(t)},resetCamera:Ch.resetCamera,updateCameraFromBridge:Ch.updateCameraFromBridge,updateLightFromBridge(i){Cs.updateLightFromBridge(i)}};ip(cm);sp(cm);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=app.bundle.js.map
