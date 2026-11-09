import{r as pn,j as Gi}from"./animation-DLzFu0UP.js";import"./react-Dvwkxfce.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ks="170",Do=0,Js=1,Uo=2,ja=1,Io=2,nn=3,yn=0,Rt=1,qt=2,Sn=0,ai=1,Qs=2,ea=3,ta=4,No=5,Nn=100,Fo=101,Oo=102,Bo=103,zo=104,Ho=200,Go=201,Vo=202,ko=203,ns=204,is=205,Wo=206,Xo=207,qo=208,Yo=209,$o=210,Ko=211,Zo=212,jo=213,Jo=214,rs=0,ss=1,as=2,ci=3,os=4,ls=5,cs=6,us=7,Ja=0,Qo=1,el=2,En=0,tl=1,nl=2,il=3,rl=4,sl=5,al=6,ol=7,Qa=300,ui=301,hi=302,hs=303,fs=304,Mr=306,ds=1e3,On=1001,ps=1002,Vt=1003,ll=1004,Vi=1005,$t=1006,Tr=1007,Bn=1008,on=1009,eo=1010,to=1011,Ui=1012,Ws=1013,Hn=1014,rn=1015,Ii=1016,Xs=1017,qs=1018,fi=1020,no=35902,io=1021,ro=1022,Gt=1023,so=1024,ao=1025,oi=1026,di=1027,oo=1028,Ys=1029,lo=1030,$s=1031,Ks=1033,fr=33776,dr=33777,pr=33778,mr=33779,ms=35840,_s=35841,gs=35842,vs=35843,xs=36196,Ms=37492,Ss=37496,Es=37808,ys=37809,Ts=37810,As=37811,bs=37812,Rs=37813,ws=37814,Cs=37815,Ps=37816,Ls=37817,Ds=37818,Us=37819,Is=37820,Ns=37821,_r=36492,Fs=36494,Os=36495,co=36283,Bs=36284,zs=36285,Hs=36286,cl=3200,ul=3201,hl=0,fl=1,Yt="",Dt="srgb",mi="srgb-linear",Sr="linear",tt="srgb",Xn=7680,na=519,dl=512,pl=513,ml=514,uo=515,_l=516,gl=517,vl=518,xl=519,ia=35044,ra="300 es",sn=2e3,vr=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ar=Math.PI/180,Gs=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Ml(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function Ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],v=n[8],M=r[0],p=r[3],u=r[6],b=r[1],A=r[4],y=r[7],G=r[2],w=r[5],R=r[8];return s[0]=o*M+a*b+l*G,s[3]=o*p+a*A+l*w,s[6]=o*u+a*y+l*R,s[1]=c*M+h*b+d*G,s[4]=c*p+h*A+d*w,s[7]=c*u+h*y+d*R,s[2]=f*M+m*b+v*G,s[5]=f*p+m*A+v*w,s[8]=f*u+m*y+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*s,m=c*s-o*l,v=t*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=d*M,e[1]=(r*c-h*n)*M,e[2]=(a*n-r*o)*M,e[3]=f*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=m*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rr.makeScale(e,t)),this}rotate(e){return this.premultiply(Rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rr=new Oe;function ho(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sl(){const i=xr("canvas");return i.style.display="block",i}const sa={};function Li(i){i in sa||(sa[i]=!0,console.warn(i))}function El(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function yl(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:mi,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(i.r=an(i.r),i.g=an(i.g),i.b=an(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Yt?Sr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function an(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const aa=[.64,.33,.3,.6,.15,.06],oa=[.2126,.7152,.0722],la=[.3127,.329],ca=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ua=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[mi]:{primaries:aa,whitePoint:la,transfer:Sr,toXYZ:ca,fromXYZ:ua,luminanceCoefficients:oa,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:aa,whitePoint:la,transfer:tt,toXYZ:ca,fromXYZ:ua,luminanceCoefficients:oa,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}});let qn;class Al{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=xr("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=an(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(an(t[n]/255)*255):t[n]=an(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bl=0;class fo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wr(r[o].image)):s.push(wr(r[o]))}else s=wr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rl=0;class yt extends _i{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=On,r=On,s=$t,o=Bn,a=Gt,l=on,c=yt.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rl++}),this.uuid=Ni(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case ps:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case ps:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Qa;yt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],v=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,y=(m+1)/2,G=(u+1)/2,w=(h+f)/4,R=(d+M)/4,N=(v+p)/4;return A>y&&A>G?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=w/n,s=R/n):y>G?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=N/r):G<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),n=R/s,r=N/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(d-M)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wl extends _i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new yt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class po extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cl extends yt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=M;return}if(d!==M||l!==f||c!==m||h!==v){let p=1-a;const u=l*f+c*m+h*v+d*M,b=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){const G=Math.sqrt(A),w=Math.atan2(G,u*b);p=Math.sin(p*w)/G,a=Math.sin(a*w)/G}const y=a*b;if(l=l*p+f*y,c=c*p+m*y,h=h*p+v*y,d=d*p+M*y,p===1-a){const G=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=G,c*=G,h*=G,d*=G}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],m=s[o+2],v=s[o+3];return e[t]=a*v+h*d+l*m-c*f,e[t+1]=l*v+h*f+c*d-a*m,e[t+2]=c*v+h*m+a*f-l*d,e[t+3]=h*v-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d+f*m*v;break;case"YZX":this._x=f*h*d+c*m*v,this._y=c*m*d+f*h*v,this._z=c*h*v-f*m*d,this._w=c*h*d-f*m*v;break;case"XZY":this._x=f*h*d-c*m*v,this._y=c*m*d-f*h*v,this._z=c*h*v+f*m*d,this._w=c*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cr.copy(this).projectOnVector(e),this.sub(Cr)}reflect(e){return this.sub(Cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new z,ha=new Fi;class Oi{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ft):Ft.fromBufferAttribute(s,o),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ai),Wi.subVectors(this.max,Ai),Yn.subVectors(e.a,Ai),$n.subVectors(e.b,Ai),Kn.subVectors(e.c,Ai),mn.subVectors($n,Yn),_n.subVectors(Kn,$n),Rn.subVectors(Yn,Kn);let t=[0,-mn.z,mn.y,0,-_n.z,_n.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,_n.z,0,-_n.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-_n.y,_n.x,0,-Rn.y,Rn.x,0];return!Pr(t,Yn,$n,Kn,Wi)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,Yn,$n,Kn,Wi))?!1:(Xi.crossVectors(mn,_n),t=[Xi.x,Xi.y,Xi.z],Pr(t,Yn,$n,Kn,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jt=[new z,new z,new z,new z,new z,new z,new z,new z],Ft=new z,ki=new Oi,Yn=new z,$n=new z,Kn=new z,mn=new z,_n=new z,Rn=new z,Ai=new z,Wi=new z,Xi=new z,wn=new z;function Pr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){wn.fromArray(i,s);const a=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),l=e.dot(wn),c=t.dot(wn),h=n.dot(wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Pl=new Oi,bi=new z,Lr=new z;class Zs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bi.subVectors(e,this.center);const t=bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(bi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bi.copy(e.center).add(Lr)),this.expandByPoint(bi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new z,Dr=new z,qi=new z,gn=new z,Ur=new z,Yi=new z,Ir=new z;class Ll{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Dr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Dr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qi),a=gn.dot(this.direction),l=-gn.dot(qi),c=gn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,v;if(h>0)if(d=o*l-a,f=o*a-l,v=s*h,d>=0)if(f>=-v)if(f<=v){const M=1/h;d*=M,f*=M,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Dr).addScaledVector(qi,f),m}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),r=Jt.dot(Jt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,r,s){Ur.subVectors(t,e),Yi.subVectors(n,e),Ir.crossVectors(Ur,Yi);let o=this.direction.dot(Ir),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(Yi.crossVectors(gn,Yi));if(l<0)return null;const c=a*this.direction.dot(Ur.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Ir);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,r,s,o,a,l,c,h,d,f,m,v,M,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,d,f,m,v,M,p)}set(e,t,n,r,s,o,a,l,c,h,d,f,m,v,M,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=v,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,v=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+v*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,m=l*d,v=c*h,M=c*d;t[0]=f+M*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-v,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,m=l*d,v=c*h,M=c*d;t[0]=f-M*a,t[4]=-o*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,m=o*d,v=a*h,M=a*d;t[0]=l*h,t[4]=v*c-m,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*h,t[4]=M-f*d,t[8]=v*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+v,t[10]=f-M*d}else if(e.order==="XZY"){const f=o*l,m=o*c,v=a*l,M=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+M,t[5]=o*h,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dl,e,Ul)}lookAt(e,t,n){const r=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),vn.crossVectors(n,wt),vn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),vn.crossVectors(n,wt)),vn.normalize(),$i.crossVectors(wt,vn),r[0]=vn.x,r[4]=$i.x,r[8]=wt.x,r[1]=vn.y,r[5]=$i.y,r[9]=wt.y,r[2]=vn.z,r[6]=$i.z,r[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],u=n[14],b=n[3],A=n[7],y=n[11],G=n[15],w=r[0],R=r[4],N=r[8],S=r[12],x=r[1],C=r[5],W=r[9],H=r[13],X=r[2],j=r[6],k=r[10],ee=r[14],V=r[3],ae=r[7],ue=r[11],Ee=r[15];return s[0]=o*w+a*x+l*X+c*V,s[4]=o*R+a*C+l*j+c*ae,s[8]=o*N+a*W+l*k+c*ue,s[12]=o*S+a*H+l*ee+c*Ee,s[1]=h*w+d*x+f*X+m*V,s[5]=h*R+d*C+f*j+m*ae,s[9]=h*N+d*W+f*k+m*ue,s[13]=h*S+d*H+f*ee+m*Ee,s[2]=v*w+M*x+p*X+u*V,s[6]=v*R+M*C+p*j+u*ae,s[10]=v*N+M*W+p*k+u*ue,s[14]=v*S+M*H+p*ee+u*Ee,s[3]=b*w+A*x+y*X+G*V,s[7]=b*R+A*C+y*j+G*ae,s[11]=b*N+A*W+y*k+G*ue,s[15]=b*S+A*H+y*ee+G*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],v=e[3],M=e[7],p=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+M*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*h-n*c*h)+u*(-r*a*h-t*l*d+t*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],v=e[12],M=e[13],p=e[14],u=e[15],b=d*p*c-M*f*c+M*l*m-a*p*m-d*l*u+a*f*u,A=v*f*c-h*p*c-v*l*m+o*p*m+h*l*u-o*f*u,y=h*M*c-v*d*c+v*a*m-o*M*m-h*a*u+o*d*u,G=v*d*l-h*M*l-v*a*f+o*M*f+h*a*p-o*d*p,w=t*b+n*A+r*y+s*G;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(M*f*s-d*p*s-M*r*m+n*p*m+d*r*u-n*f*u)*R,e[2]=(a*p*s-M*l*s+M*r*c-n*p*c-a*r*u+n*l*u)*R,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*R,e[4]=A*R,e[5]=(h*p*s-v*f*s+v*r*m-t*p*m-h*r*u+t*f*u)*R,e[6]=(v*l*s-o*p*s-v*r*c+t*p*c+o*r*u-t*l*u)*R,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*m+t*l*m)*R,e[8]=y*R,e[9]=(v*d*s-h*M*s-v*n*m+t*M*m+h*n*u-t*d*u)*R,e[10]=(o*M*s-v*a*s+v*n*c-t*M*c-o*n*u+t*a*u)*R,e[11]=(h*a*s-o*d*s-h*n*c+t*d*c+o*n*m-t*a*m)*R,e[12]=G*R,e[13]=(h*M*r-v*d*r+v*n*f-t*M*f-h*n*p+t*d*p)*R,e[14]=(v*a*r-o*M*r-v*n*l+t*M*l+o*n*p-t*a*p)*R,e[15]=(o*d*r-h*a*r+h*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,f=s*c,m=s*h,v=s*d,M=o*h,p=o*d,u=a*d,b=l*c,A=l*h,y=l*d,G=n.x,w=n.y,R=n.z;return r[0]=(1-(M+u))*G,r[1]=(m+y)*G,r[2]=(v-A)*G,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(f+u))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(v+A)*R,r[9]=(p-b)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Zn.set(r[0],r[1],r[2]).length();const o=Zn.set(r[4],r[5],r[6]).length(),a=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const c=1/s,h=1/o,d=1/a;return Ot.elements[0]*=c,Ot.elements[1]*=c,Ot.elements[2]*=c,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=d,Ot.elements[9]*=d,Ot.elements[10]*=d,t.setFromRotationMatrix(Ot),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=sn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r);let m,v;if(a===sn)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===vr)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=sn){const l=this.elements,c=1/(t-e),h=1/(n-r),d=1/(o-s),f=(t+e)*c,m=(n+r)*h;let v,M;if(a===sn)v=(o+s)*d,M=-2*d;else if(a===vr)v=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zn=new z,Ot=new ft,Dl=new z(0,0,0),Ul=new z(1,1,1),vn=new z,$i=new z,wt=new z,fa=new ft,da=new Fi;class ln{constructor(e=0,t=0,n=0,r=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Il=0;const pa=new z,jn=new Fi,Qt=new ft,Ki=new z,Ri=new z,Nl=new z,Fl=new Fi,ma=new z(1,0,0),_a=new z(0,1,0),ga=new z(0,0,1),va={type:"added"},Ol={type:"removed"},Jn={type:"childadded",child:null},Nr={type:"childremoved",child:null};class Pt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new z,t=new ln,n=new Fi,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Oe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(ma,e)}rotateY(e){return this.rotateOnAxis(_a,e)}rotateZ(e){return this.rotateOnAxis(ga,e)}translateOnAxis(e,t){return pa.copy(e).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ma,e)}translateY(e){return this.translateOnAxis(_a,e)}translateZ(e){return this.translateOnAxis(ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(Ri,Ki,this.up):Qt.lookAt(Ki,Ri,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(Qt),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(va),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ol),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(va),Jn.child=e,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,Nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Fl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new z(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new z,en=new z,Fr=new z,tn=new z,Qn=new z,ei=new z,xa=new z,Or=new z,Br=new z,zr=new z,Hr=new lt,Gr=new lt,Vr=new lt;class Ht{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),en.subVectors(n,t),Fr.subVectors(e,t);const o=Bt.dot(Bt),a=Bt.dot(en),l=Bt.dot(Fr),c=en.dot(en),h=en.dot(Fr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-a*h)*f,v=(o*h-a*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Hr.setScalar(0),Gr.setScalar(0),Vr.setScalar(0),Hr.fromBufferAttribute(e,t),Gr.fromBufferAttribute(e,n),Vr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hr,s.x),o.addScaledVector(Gr,s.y),o.addScaledVector(Vr,s.z),o}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),en.subVectors(e,t),Bt.cross(en).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),en.subVectors(this.a,this.b),Bt.cross(en).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Qn.subVectors(r,n),ei.subVectors(s,n),Or.subVectors(e,n);const l=Qn.dot(Or),c=ei.dot(Or);if(l<=0&&c<=0)return t.copy(n);Br.subVectors(e,r);const h=Qn.dot(Br),d=ei.dot(Br);if(h>=0&&d<=h)return t.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qn,o);zr.subVectors(e,s);const m=Qn.dot(zr),v=ei.dot(zr);if(v>=0&&m<=v)return t.copy(s);const M=m*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ei,a);const p=h*v-m*d;if(p<=0&&d-h>=0&&m-v>=0)return xa.subVectors(s,r),a=(d-h)/(d-h+(m-v)),t.copy(r).addScaledVector(xa,a);const u=1/(p+M+f);return o=M*u,a=f*u,t.copy(n).addScaledVector(Qn,o).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _o={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function kr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=Ml(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=kr(o,s,e+1/3),this.g=kr(o,s,e),this.b=kr(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=_o[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=an(e.r),this.g=an(e.g),this.b=an(e.b),this}copyLinearToSRGB(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Ye.fromWorkingColorSpace(Mt.copy(this),e),Math.round(bt(Mt.r*255,0,255))*65536+Math.round(bt(Mt.g*255,0,255))*256+Math.round(bt(Mt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Mt.copy(this),t);const n=Mt.r,r=Mt.g,s=Mt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Mt.copy(this),t),e.r=Mt.r,e.g=Mt.g,e.b=Mt.b,e}getStyle(e=Dt){Ye.fromWorkingColorSpace(Mt.copy(this),e);const t=Mt.r,n=Mt.g,r=Mt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Zi);const n=br(xn.h,Zi.h,t),r=br(xn.s,Zi.s,t),s=br(xn.l,Zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mt=new nt;nt.NAMES=_o;let Bl=0;class Er extends _i{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Ni(),this.name="",this.blending=ai,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ns,this.blendDst=is,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ns&&(n.blendSrc=this.blendSrc),this.blendDst!==is&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class go extends Er{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,ji=new Qe;class Zt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ia,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ia&&(e.usage=this.usage),e}}class vo extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xo extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zn extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zl=0;const Lt=new ft,Wr=new Pt,ti=new z,Ct=new Oi,wi=new Oi,_t=new z;class Tn extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ho(e)?xo:vo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lt.makeRotationFromQuaternion(e),this.applyMatrix4(Lt),this}rotateX(e){return Lt.makeRotationX(e),this.applyMatrix4(Lt),this}rotateY(e){return Lt.makeRotationY(e),this.applyMatrix4(Lt),this}rotateZ(e){return Lt.makeRotationZ(e),this.applyMatrix4(Lt),this}translate(e,t,n){return Lt.makeTranslation(e,t,n),this.applyMatrix4(Lt),this}scale(e,t,n){return Lt.makeScale(e,t,n),this.applyMatrix4(Lt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zn(n,3))}else{for(let n=0,r=t.count;n<r;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ct.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ct.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ct.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ct.min),this.boundingBox.expandByPoint(Ct.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ct.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ct.min,wi.min),Ct.expandByPoint(_t),_t.addVectors(Ct.max,wi.max),Ct.expandByPoint(_t)):(Ct.expandByPoint(wi.min),Ct.expandByPoint(wi.max))}Ct.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)_t.fromBufferAttribute(a,c),l&&(ti.fromBufferAttribute(e,c),_t.add(ti)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new z,l[N]=new z;const c=new z,h=new z,d=new z,f=new Qe,m=new Qe,v=new Qe,M=new z,p=new z;function u(N,S,x){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,N),m.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),h.sub(c),d.sub(c),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),a[N].add(M),a[S].add(M),a[x].add(M),l[N].add(p),l[S].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,S=b.length;N<S;++N){const x=b[N],C=x.start,W=x.count;for(let H=C,X=C+W;H<X;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const A=new z,y=new z,G=new z,w=new z;function R(N){G.fromBufferAttribute(r,N),w.copy(G);const S=a[N];A.copy(S),A.sub(G.multiplyScalar(G.dot(S))).normalize(),y.crossVectors(w,S);const C=y.dot(l[N])<0?-1:1;o.setXYZW(N,A.x,A.y,A.z,C)}for(let N=0,S=b.length;N<S;++N){const x=b[N],C=x.start,W=x.count;for(let H=C,X=C+W;H<X;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let M=0,p=l.length;M<p;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*h;for(let u=0;u<h;u++)f[v++]=c[m++]}return new Zt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new ft,Cn=new Ll,Ji=new Zs,Sa=new z,Qi=new z,er=new z,tr=new z,Xr=new z,nr=new z,Ea=new z,ir=new z;class Kt extends Pt{constructor(e=new Tn,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(Xr.fromBufferAttribute(d,e),o?nr.addScaledVector(Xr,h):nr.addScaledVector(Xr.sub(t),h))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),Cn.copy(e.ray).recast(e.near),!(Ji.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Ji,Sa)===null||Cn.origin.distanceToSquared(Sa)>(e.far-e.near)**2))&&(Ma.copy(s).invert(),Cn.copy(e.ray).applyMatrix4(Ma),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],u=o[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,G=A;y<G;y+=3){const w=a.getX(y),R=a.getX(y+1),N=a.getX(y+2);r=rr(this,u,e,n,c,h,d,w,R,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const b=a.getX(p),A=a.getX(p+1),y=a.getX(p+2);r=rr(this,o,e,n,c,h,d,b,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],u=o[p.materialIndex],b=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,G=A;y<G;y+=3){const w=y,R=y+1,N=y+2;r=rr(this,u,e,n,c,h,d,w,R,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=v,u=M;p<u;p+=3){const b=p,A=p+1,y=p+2;r=rr(this,o,e,n,c,h,d,b,A,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Hl(i,e,t,n,r,s,o,a){let l;if(e.side===Rt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===yn,a),l===null)return null;ir.copy(a),ir.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:i}}function rr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Qi),i.getVertexPosition(l,er),i.getVertexPosition(c,tr);const h=Hl(i,e,t,n,Qi,er,tr,Ea);if(h){const d=new z;Ht.getBarycoord(Ea,Qi,er,tr,d),r&&(h.uv=Ht.getInterpolatedAttribute(r,a,l,c,d,new Qe)),s&&(h.uv1=Ht.getInterpolatedAttribute(s,a,l,c,d,new Qe)),o&&(h.normal=Ht.getInterpolatedAttribute(o,a,l,c,d,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Ht.getNormal(Qi,er,tr,f.normal),h.face=f,h.barycoord=d}return h}class Bi extends Tn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(d,2));function v(M,p,u,b,A,y,G,w,R,N,S){const x=y/R,C=G/N,W=y/2,H=G/2,X=w/2,j=R+1,k=N+1;let ee=0,V=0;const ae=new z;for(let ue=0;ue<k;ue++){const Ee=ue*C-H;for(let Fe=0;Fe<j;Fe++){const Xe=Fe*x-W;ae[M]=Xe*b,ae[p]=Ee*A,ae[u]=X,c.push(ae.x,ae.y,ae.z),ae[M]=0,ae[p]=0,ae[u]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Fe/R),d.push(1-ue/N),ee+=1}}for(let ue=0;ue<N;ue++)for(let Ee=0;Ee<R;Ee++){const Fe=f+Ee+j*ue,Xe=f+Ee+j*(ue+1),Y=f+(Ee+1)+j*(ue+1),re=f+(Ee+1)+j*ue;l.push(Fe,Xe,re),l.push(Xe,Y,re),V+=6}a.addGroup(m,V,S),m+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Et(i){const e={};for(let t=0;t<i.length;t++){const n=pi(i[t]);for(const r in n)e[r]=n[r]}return e}function Gl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Vl={clone:pi,merge:Et};var kl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Er{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kl,this.fragmentShader=Wl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pi(e.uniforms),this.uniformsGroups=Gl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class So extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new z,ya=new Qe,Ta=new Qe;class zt extends So{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,ya,Ta),t.subVectors(Ta,ya)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class Xl extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(ni,ii,e,t);r.layers=this.layers,this.add(r);const s=new zt(ni,ii,e,t);s.layers=this.layers,this.add(s);const o=new zt(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new zt(ni,ii,e,t);a.layers=this.layers,this.add(a);const l=new zt(ni,ii,e,t);l.layers=this.layers,this.add(l);const c=new zt(ni,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,f,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Eo extends yt{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ui,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Eo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bi(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Sn});s.uniforms.tEquirect.value=t;const o=new Kt(r,s),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=$t),new Xl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const qr=new z,Yl=new z,$l=new Oe;class Un{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qr.subVectors(n,t).cross(Yl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$l.getNormalMatrix(e),r=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Zs,sr=new z;class yo{constructor(e=new Un,t=new Un,n=new Un,r=new Un,s=new Un,o=new Un){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],m=r[8],v=r[9],M=r[10],p=r[11],u=r[12],b=r[13],A=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,p-m,y-u).normalize(),n[1].setComponents(l+s,f+c,p+m,y+u).normalize(),n[2].setComponents(l+o,f+h,p+v,y+b).normalize(),n[3].setComponents(l-o,f-h,p-v,y-b).normalize(),n[4].setComponents(l-a,f-d,p-M,y-A).normalize(),t===sn)n[5].setComponents(l+a,f+d,p+M,y+A).normalize();else if(t===vr)n[5].setComponents(a,d,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(e){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(sr.x=r.normal.x>0?e.max.x:e.min.x,sr.y=r.normal.y>0?e.max.y:e.min.y,sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function To(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Kl(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],M=d[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,d[f]=M)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const M=d[m];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class zi extends Tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=e/a,f=t/l,m=[],v=[],M=[],p=[];for(let u=0;u<h;u++){const b=u*f-o;for(let A=0;A<c;A++){const y=A*d-s;v.push(y,-b,0),M.push(0,0,1),p.push(A/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const A=b+c*u,y=b+c*(u+1),G=b+1+c*(u+1),w=b+1+c*u;m.push(A,y,w),m.push(y,G,w)}this.setIndex(m),this.setAttribute("position",new zn(v,3)),this.setAttribute("normal",new zn(M,3)),this.setAttribute("uv",new zn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Jl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ql=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ec=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nc=`#ifdef USE_AOMAP
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
#endif`,ic=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rc=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ac=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cc=`#ifdef USE_IRIDESCENCE
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
#endif`,uc=`#ifdef USE_BUMPMAP
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
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xc=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Mc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sc=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ec=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ic=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Oc=`#ifdef USE_GRADIENTMAP
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
}`,Bc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Vc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,kc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,$c=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kc=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,jc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qc=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ru=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,su=`#if defined( USE_POINTS_UV )
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
#endif`,au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hu=`#ifdef USE_MORPHTARGETS
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
#endif`,fu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,du=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vu=`#ifdef USE_NORMALMAP
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
#endif`,xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Eu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Au=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Iu=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fu=`#ifdef USE_SKINNING
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
#endif`,Ou=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bu=`#ifdef USE_SKINNING
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
#endif`,zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ku=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wu=`#ifdef USE_TRANSMISSION
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ku=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zu=`uniform sampler2D t2D;
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
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ju=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,th=`#include <common>
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
}`,nh=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ih=`#define DISTANCE
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
}`,rh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ah=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`uniform float scale;
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
}`,lh=`uniform vec3 diffuse;
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
}`,ch=`#include <common>
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
}`,uh=`uniform vec3 diffuse;
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
}`,hh=`#define LAMBERT
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
}`,fh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,dh=`#define MATCAP
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
}`,ph=`#define MATCAP
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
}`,mh=`#define NORMAL
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
}`,_h=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gh=`#define PHONG
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
}`,vh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,xh=`#define STANDARD
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
}`,Mh=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Sh=`#define TOON
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
}`,Eh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,yh=`uniform float size;
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
}`,Th=`uniform vec3 diffuse;
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
}`,Ah=`#include <common>
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
}`,bh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Rh=`uniform float rotation;
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
}`,wh=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Zl,alphahash_pars_fragment:jl,alphamap_fragment:Jl,alphamap_pars_fragment:Ql,alphatest_fragment:ec,alphatest_pars_fragment:tc,aomap_fragment:nc,aomap_pars_fragment:ic,batching_pars_vertex:rc,batching_vertex:sc,begin_vertex:ac,beginnormal_vertex:oc,bsdfs:lc,iridescence_fragment:cc,bumpmap_pars_fragment:uc,clipping_planes_fragment:hc,clipping_planes_pars_fragment:fc,clipping_planes_pars_vertex:dc,clipping_planes_vertex:pc,color_fragment:mc,color_pars_fragment:_c,color_pars_vertex:gc,color_vertex:vc,common:xc,cube_uv_reflection_fragment:Mc,defaultnormal_vertex:Sc,displacementmap_pars_vertex:Ec,displacementmap_vertex:yc,emissivemap_fragment:Tc,emissivemap_pars_fragment:Ac,colorspace_fragment:bc,colorspace_pars_fragment:Rc,envmap_fragment:wc,envmap_common_pars_fragment:Cc,envmap_pars_fragment:Pc,envmap_pars_vertex:Lc,envmap_physical_pars_fragment:Vc,envmap_vertex:Dc,fog_vertex:Uc,fog_pars_vertex:Ic,fog_fragment:Nc,fog_pars_fragment:Fc,gradientmap_pars_fragment:Oc,lightmap_pars_fragment:Bc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Hc,lights_pars_begin:Gc,lights_toon_fragment:kc,lights_toon_pars_fragment:Wc,lights_phong_fragment:Xc,lights_phong_pars_fragment:qc,lights_physical_fragment:Yc,lights_physical_pars_fragment:$c,lights_fragment_begin:Kc,lights_fragment_maps:Zc,lights_fragment_end:jc,logdepthbuf_fragment:Jc,logdepthbuf_pars_fragment:Qc,logdepthbuf_pars_vertex:eu,logdepthbuf_vertex:tu,map_fragment:nu,map_pars_fragment:iu,map_particle_fragment:ru,map_particle_pars_fragment:su,metalnessmap_fragment:au,metalnessmap_pars_fragment:ou,morphinstance_vertex:lu,morphcolor_vertex:cu,morphnormal_vertex:uu,morphtarget_pars_vertex:hu,morphtarget_vertex:fu,normal_fragment_begin:du,normal_fragment_maps:pu,normal_pars_fragment:mu,normal_pars_vertex:_u,normal_vertex:gu,normalmap_pars_fragment:vu,clearcoat_normal_fragment_begin:xu,clearcoat_normal_fragment_maps:Mu,clearcoat_pars_fragment:Su,iridescence_pars_fragment:Eu,opaque_fragment:yu,packing:Tu,premultiplied_alpha_fragment:Au,project_vertex:bu,dithering_fragment:Ru,dithering_pars_fragment:wu,roughnessmap_fragment:Cu,roughnessmap_pars_fragment:Pu,shadowmap_pars_fragment:Lu,shadowmap_pars_vertex:Du,shadowmap_vertex:Uu,shadowmask_pars_fragment:Iu,skinbase_vertex:Nu,skinning_pars_vertex:Fu,skinning_vertex:Ou,skinnormal_vertex:Bu,specularmap_fragment:zu,specularmap_pars_fragment:Hu,tonemapping_fragment:Gu,tonemapping_pars_fragment:Vu,transmission_fragment:ku,transmission_pars_fragment:Wu,uv_pars_fragment:Xu,uv_pars_vertex:qu,uv_vertex:Yu,worldpos_vertex:$u,background_vert:Ku,background_frag:Zu,backgroundCube_vert:ju,backgroundCube_frag:Ju,cube_vert:Qu,cube_frag:eh,depth_vert:th,depth_frag:nh,distanceRGBA_vert:ih,distanceRGBA_frag:rh,equirect_vert:sh,equirect_frag:ah,linedashed_vert:oh,linedashed_frag:lh,meshbasic_vert:ch,meshbasic_frag:uh,meshlambert_vert:hh,meshlambert_frag:fh,meshmatcap_vert:dh,meshmatcap_frag:ph,meshnormal_vert:mh,meshnormal_frag:_h,meshphong_vert:gh,meshphong_frag:vh,meshphysical_vert:xh,meshphysical_frag:Mh,meshtoon_vert:Sh,meshtoon_frag:Eh,points_vert:yh,points_frag:Th,shadow_vert:Ah,shadow_frag:bh,sprite_vert:Rh,sprite_frag:wh},se={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Xt={basic:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Et([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Et([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Et([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Et([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Et([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Et([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Et([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Et([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Et([se.common,se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Et([se.lights,se.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xt.physical={uniforms:Et([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ar={r:0,b:0,g:0},Ln=new ln,Ch=new ft;function Ph(i,e,t,n,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,h,d=null,f=0,m=null;function v(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function M(b){let A=!1;const y=v(b);y===null?u(a,l):y&&y.isColor&&(u(y,1),A=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,A){const y=v(A);y&&(y.isCubeTexture||y.mapping===Mr)?(h===void 0&&(h=new Kt(new Bi(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:pi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ln.copy(A.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ch.makeRotationFromEuler(Ln)),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,(d!==y||f!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Kt(new zi(2,2),new cn({name:"BackgroundMaterial",uniforms:pi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function u(b,A){b.getRGB(ar,Mo(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),l=A,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,u(a,l)},render:M,addToRenderList:p}}function Lh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(x,C,W,H,X){let j=!1;const k=d(H,W,C);s!==k&&(s=k,c(s.object)),j=m(x,H,W,X),j&&v(x,H,W,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(x,C,W,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,C,W){const H=W.wireframe===!0;let X=n[x.id];X===void 0&&(X={},n[x.id]=X);let j=X[C.id];j===void 0&&(j={},X[C.id]=j);let k=j[H];return k===void 0&&(k=f(l()),j[H]=k),k}function f(x){const C=[],W=[],H=[];for(let X=0;X<t;X++)C[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:W,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,C,W,H){const X=s.attributes,j=C.attributes;let k=0;const ee=W.getAttributes();for(const V in ee)if(ee[V].location>=0){const ue=X[V];let Ee=j[V];if(Ee===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Ee=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Ee=x.instanceColor)),ue===void 0||ue.attribute!==Ee||Ee&&ue.data!==Ee.data)return!0;k++}return s.attributesNum!==k||s.index!==H}function v(x,C,W,H){const X={},j=C.attributes;let k=0;const ee=W.getAttributes();for(const V in ee)if(ee[V].location>=0){let ue=j[V];ue===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor));const Ee={};Ee.attribute=ue,ue&&ue.data&&(Ee.data=ue.data),X[V]=Ee,k++}s.attributes=X,s.attributesNum=k,s.index=H}function M(){const x=s.newAttributes;for(let C=0,W=x.length;C<W;C++)x[C]=0}function p(x){u(x,0)}function u(x,C){const W=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;W[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),X[x]!==C&&(i.vertexAttribDivisor(x,C),X[x]=C)}function b(){const x=s.newAttributes,C=s.enabledAttributes;for(let W=0,H=C.length;W<H;W++)C[W]!==x[W]&&(i.disableVertexAttribArray(W),C[W]=0)}function A(x,C,W,H,X,j,k){k===!0?i.vertexAttribIPointer(x,C,W,X,j):i.vertexAttribPointer(x,C,W,H,X,j)}function y(x,C,W,H){M();const X=H.attributes,j=W.getAttributes(),k=C.defaultAttributeValues;for(const ee in j){const V=j[ee];if(V.location>=0){let ae=X[ee];if(ae===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),ae!==void 0){const ue=ae.normalized,Ee=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const Xe=Fe.buffer,Y=Fe.type,re=Fe.bytesPerElement,ce=Y===i.INT||Y===i.UNSIGNED_INT||ae.gpuType===Ws;if(ae.isInterleavedBufferAttribute){const oe=ae.data,Re=oe.stride,we=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)u(V.location+ze,oe.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<V.locationSize;ze++)p(V.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ze=0;ze<V.locationSize;ze++)A(V.location+ze,Ee/V.locationSize,Y,ue,Re*re,(we+Ee/V.locationSize*ze)*re,ce)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)u(V.location+oe,ae.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<V.locationSize;oe++)p(V.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let oe=0;oe<V.locationSize;oe++)A(V.location+oe,Ee/V.locationSize,Y,ue,Ee*re,Ee/V.locationSize*oe*re,ce)}}else if(k!==void 0){const ue=k[ee];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(V.location,ue);break;case 3:i.vertexAttrib3fv(V.location,ue);break;case 4:i.vertexAttrib4fv(V.location,ue);break;default:i.vertexAttrib1fv(V.location,ue)}}}}b()}function G(){N();for(const x in n){const C=n[x];for(const W in C){const H=C[W];for(const X in H)h(H[X].object),delete H[X];delete C[W]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const W in C){const H=C[W];for(const X in H)h(H[X].object),delete H[X];delete C[W]}delete n[x.id]}function R(x){for(const C in n){const W=n[C];if(W[x.id]===void 0)continue;const H=W[x.id];for(const X in H)h(H[X].object),delete H[X];delete W[x.id]}}function N(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:S,dispose:G,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function Dh(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=h[v];t.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let v=0;for(let M=0;M<d;M++)v+=h[M]*f[M];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Gt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!N)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=v>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:G,maxSamples:w}}function Ih(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Un,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,A=b*4;let y=u.clippingState||null;l.value=y,y=h(v,f,A,m);for(let G=0;G!==A;++G)y[G]=t[G];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,v){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=l.value,v!==!0||p===null){const u=m+M*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let A=0,y=m;A!==M;++A,y+=4)o.copy(d[A]).applyMatrix4(b,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function Nh(i){let e=new WeakMap;function t(o,a){return a===hs?o.mapping=ui:a===fs&&(o.mapping=hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hs||a===fs)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ql(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ao extends So{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Aa=[.125,.215,.35,.446,.526,.582],Fn=20,Yr=new Ao,ba=new nt;let $r=null,Kr=0,Zr=0,jr=!1;const In=(1+Math.sqrt(5))/2,ri=1/In,Ra=[new z(-In,ri,0),new z(In,ri,0),new z(-ri,0,In),new z(ri,0,In),new z(0,In,-ri),new z(0,In,ri),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=La(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($r,Kr,Zr),this._renderer.xr.enabled=jr,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:Ii,format:Gt,colorSpace:mi,depthBuffer:!1},r=Ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ca(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fh(s)),this._blurMaterial=Oh(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Yr)}_sceneToCubeUV(e,t,n,r){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ba),h.toneMapping=En,h.autoClear=!1;const m=new go({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),v=new Kt(new Bi,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(ba),M=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const A=this._cubeSize;or(r,b*A,u>2?A:0,A,A),h.setRenderTarget(r),M&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ui||e.mapping===hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=La()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Yr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ra[(r-s-1)%Ra.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Kt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Fn-1),M=s/v,p=isFinite(s)?1+Math.floor(h*M):Fn;p>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fn}`);const u=[];let b=0;for(let R=0;R<Fn;++R){const N=R/M,S=Math.exp(-N*N/2);u.push(S),R===0?b+=S:R<p&&(b+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/b;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=v,f.mipInt.value=A-n;const y=this._sizeLods[r],G=3*y*(r>A-si?r-A+si:0),w=4*(this._cubeSize-y);or(t,G,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Yr)}}function Fh(i){const e=[],t=[],n=[];let r=i;const s=i-si+1+Aa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-si?l=Aa[o-i+si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,M=3,p=2,u=1,b=new Float32Array(M*v*m),A=new Float32Array(p*v*m),y=new Float32Array(u*v*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,N=w>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];b.set(S,M*v*w),A.set(f,p*v*w);const x=[w,w,w,w,w,w];y.set(x,u*v*w)}const G=new Tn;G.setAttribute("position",new Zt(b,M)),G.setAttribute("uv",new Zt(A,p)),G.setAttribute("faceIndex",new Zt(y,u)),e.push(G),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ca(i,e,t){const n=new Gn(i,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Oh(i,e,t){const n=new Float32Array(Fn),r=new z(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:js(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Pa(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function La(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function js(){return`

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
	`}function Bh(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hs||l===fs,h=l===ui||l===hi;if(c||h){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wa(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new wa(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function zh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Hh(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const M=f.morphAttributes[v];for(let p=0,u=M.length;p<u;p++)e.remove(M[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const M=m[v];for(let p=0,u=M.length;p<u;p++)e.update(M[p],i.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,v=d.attributes.position;let M=0;if(m!==null){const b=m.array;M=m.version;for(let A=0,y=b.length;A<y;A+=3){const G=b[A+0],w=b[A+1],R=b[A+2];f.push(G,w,w,R,R,G)}}else if(v!==void 0){const b=v.array;M=v.version;for(let A=0,y=b.length/3-1;A<y;A+=3){const G=A+0,w=A+1,R=A+2;f.push(G,w,w,R,R,G)}}else return;const p=new(ho(f)?xo:vo)(f,1);p.version=M;const u=s.get(d);u&&e.remove(u),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Gh(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*o,v),t.update(m,n,v))}function h(f,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,v);let p=0;for(let u=0;u<v;u++)p+=m[u];t.update(p,n,1)}function d(f,m,v,M){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/o,m[u],M[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,v);let u=0;for(let b=0;b<v;b++)u+=m[b]*M[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Vh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function kh(i,e,t){const n=new WeakMap,r=new lt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),M===!0&&(A=3);let y=a.attributes.position.count*A,G=1;y>e.maxTextureSize&&(G=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*G*4*d),R=new po(w,y,G,d);R.type=rn,R.needsUpdate=!0;const N=A*4;for(let x=0;x<d;x++){const C=p[x],W=u[x],H=b[x],X=y*G*4*x;for(let j=0;j<C.count;j++){const k=j*N;m===!0&&(r.fromBufferAttribute(C,j),w[X+k+0]=r.x,w[X+k+1]=r.y,w[X+k+2]=r.z,w[X+k+3]=0),v===!0&&(r.fromBufferAttribute(W,j),w[X+k+4]=r.x,w[X+k+5]=r.y,w[X+k+6]=r.z,w[X+k+7]=0),M===!0&&(r.fromBufferAttribute(H,j),w[X+k+8]=r.x,w[X+k+9]=r.y,w[X+k+10]=r.z,w[X+k+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Qe(y,G)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Wh(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bo extends yt{constructor(e,t,n,r,s,o,a,l,c,h=oi){if(h!==oi&&h!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Hn),n===void 0&&h===di&&(n=fi),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ro=new yt,Da=new bo(1,1),wo=new po,Co=new Cl,Po=new Eo,Ua=[],Ia=[],Na=new Float32Array(16),Fa=new Float32Array(9),Oa=new Float32Array(4);function gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ua[r];if(s===void 0&&(s=new Float32Array(r),Ua[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yr(i,e){let t=Ia[e];t===void 0&&(t=new Int32Array(e),Ia[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Yh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function $h(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Kh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Oa.set(n),i.uniformMatrix2fv(this.addr,!1,Oa),pt(t,n)}}function Zh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Fa.set(n),i.uniformMatrix3fv(this.addr,!1,Fa),pt(t,n)}}function jh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,n))return;Na.set(n),i.uniformMatrix4fv(this.addr,!1,Na),pt(t,n)}}function Jh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function ef(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function of(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Da.compareFunction=uo,s=Da):s=Ro,t.setTexture2D(e||s,r)}function lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Co,r)}function cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Po,r)}function uf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||wo,r)}function hf(i){switch(i){case 5126:return Xh;case 35664:return qh;case 35665:return Yh;case 35666:return $h;case 35674:return Kh;case 35675:return Zh;case 35676:return jh;case 5124:case 35670:return Jh;case 35667:case 35671:return Qh;case 35668:case 35672:return ef;case 35669:case 35673:return tf;case 5125:return nf;case 36294:return rf;case 36295:return sf;case 36296:return af;case 35678:case 36198:case 36298:case 36306:case 35682:return of;case 35679:case 36299:case 36307:return lf;case 35680:case 36300:case 36308:case 36293:return cf;case 36289:case 36303:case 36311:case 36292:return uf}}function ff(i,e){i.uniform1fv(this.addr,e)}function df(i,e){const t=gi(e,this.size,2);i.uniform2fv(this.addr,t)}function pf(i,e){const t=gi(e,this.size,3);i.uniform3fv(this.addr,t)}function mf(i,e){const t=gi(e,this.size,4);i.uniform4fv(this.addr,t)}function _f(i,e){const t=gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gf(i,e){const t=gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vf(i,e){const t=gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function xf(i,e){i.uniform1iv(this.addr,e)}function Mf(i,e){i.uniform2iv(this.addr,e)}function Sf(i,e){i.uniform3iv(this.addr,e)}function Ef(i,e){i.uniform4iv(this.addr,e)}function yf(i,e){i.uniform1uiv(this.addr,e)}function Tf(i,e){i.uniform2uiv(this.addr,e)}function Af(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function Rf(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ro,s[o])}function wf(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Co,s[o])}function Cf(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Po,s[o])}function Pf(i,e,t){const n=this.cache,r=e.length,s=yr(t,r);dt(n,s)||(i.uniform1iv(this.addr,s),pt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wo,s[o])}function Lf(i){switch(i){case 5126:return ff;case 35664:return df;case 35665:return pf;case 35666:return mf;case 35674:return _f;case 35675:return gf;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return yf;case 36294:return Tf;case 36295:return Af;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Df{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hf(t.type)}}class Uf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lf(t.type)}}class If{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function Ba(i,e){i.seq.push(e),i.map[e.id]=e}function Nf(i,e,t){const n=i.name,r=n.length;for(Jr.lastIndex=0;;){const s=Jr.exec(n),o=Jr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ba(t,c===void 0?new Df(a,i,e):new Uf(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new If(a),Ba(t,d)),t=d}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Nf(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function za(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ff=37297;let Of=0;function Bf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ha=new Oe;function zf(i){Ye._getMatrix(Ha,Ye.workingColorSpace,i);const e=`mat3( ${Ha.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Sr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ga(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Bf(i.getShaderSource(e),o)}else return r}function Hf(i,e){const t=zf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gf(i,e){let t;switch(e){case tl:t="Linear";break;case nl:t="Reinhard";break;case il:t="Cineon";break;case rl:t="ACESFilmic";break;case al:t="AgX";break;case ol:t="Neutral";break;case sl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new z;function Vf(){Ye.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function Wf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Di(i){return i!==""}function Va(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ka(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vs(i){return i.replace(qf,$f)}const Yf=new Map;function $f(i,e){let t=Be[e];if(t===void 0){const n=Yf.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vs(t)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wa(i){return i.replace(Kf,Zf)}function Zf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xa(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ui:case hi:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hi:e="ENVMAP_MODE_REFRACTION";break}return e}function ed(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Qo:e="ENVMAP_BLENDING_MIX";break;case el:e="ENVMAP_BLENDING_ADD";break}return e}function td(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nd(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jf(t),c=Jf(t),h=Qf(t),d=ed(t),f=td(t),m=kf(t),v=Wf(s),M=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Di).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Di).join(`
`),u.length>0&&(u+=`
`)):(p=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),u=[Xa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Be.tonemapping_pars_fragment:"",t.toneMapping!==En?Gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),Vf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Di).join(`
`)),o=Vs(o),o=Va(o,t),o=ka(o,t),a=Vs(a),a=Va(a,t),a=ka(a,t),o=Wa(o),a=Wa(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const A=b+p+o,y=b+u+a,G=za(r,r.VERTEX_SHADER,A),w=za(r,r.FRAGMENT_SHADER,y);r.attachShader(M,G),r.attachShader(M,w),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(M).trim(),H=r.getShaderInfoLog(G).trim(),X=r.getShaderInfoLog(w).trim();let j=!0,k=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,G,w);else{const ee=Ga(r,G,"vertex"),V=Ga(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ee+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||X==="")&&(k=!1);k&&(C.diagnostics={runnable:j,programLog:W,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:u}})}r.deleteShader(G),r.deleteShader(w),N=new gr(r,M),S=Xf(r,M)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Ff)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Of++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=w,this}let id=0;class rd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sd(e),t.set(e,n)),n}}class sd{constructor(e){this.id=id++,this.code=e,this.usedTimes=0}}function ad(i,e,t,n,r,s,o){const a=new mo,l=new rd,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,C,W,H){const X=W.fog,j=H.geometry,k=S.isMeshStandardMaterial?W.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),V=ee&&ee.mapping===Mr?ee.image.height:null,ae=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=ue!==void 0?ue.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let Xe,Y,re,ce;if(ae){const ke=Xt[ae];Xe=ke.vertexShader,Y=ke.fragmentShader}else Xe=S.vertexShader,Y=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),ce=l.getFragmentShaderID(S);const oe=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,st=!!S.map,ge=!!S.matcap,it=!!ee,D=!!S.aoMap,ct=!!S.lightMap,Ae=!!S.bumpMap,Le=!!S.normalMap,ye=!!S.displacementMap,Ke=!!S.emissiveMap,Te=!!S.metalnessMap,E=!!S.roughnessMap,_=S.anisotropy>0,F=S.clearcoat>0,K=S.dispersion>0,Z=S.iridescence>0,q=S.sheen>0,Se=S.transmission>0,J=_&&!!S.anisotropyMap,he=F&&!!S.clearcoatMap,Ve=F&&!!S.clearcoatNormalMap,te=F&&!!S.clearcoatRoughnessMap,fe=Z&&!!S.iridescenceMap,be=Z&&!!S.iridescenceThicknessMap,Ce=q&&!!S.sheenColorMap,de=q&&!!S.sheenRoughnessMap,Ge=!!S.specularMap,Ie=!!S.specularColorMap,Ze=!!S.specularIntensityMap,T=Se&&!!S.transmissionMap,$=Se&&!!S.thicknessMap,U=!!S.gradientMap,I=!!S.alphaMap,Q=S.alphaTest>0,ne=!!S.alphaHash,pe=!!S.extensions;let He=En;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(He=i.toneMapping);const at={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:Y,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ce,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:ze,batchingColor:ze&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:mi,alphaToCoverage:!!S.alphaToCoverage,map:st,matcap:ge,envMap:it,envMapMode:it&&ee.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:ct,bumpMap:Ae,normalMap:Le,displacementMap:f&&ye,emissiveMap:Ke,normalMapObjectSpace:Le&&S.normalMapType===fl,normalMapTangentSpace:Le&&S.normalMapType===hl,metalnessMap:Te,roughnessMap:E,anisotropy:_,anisotropyMap:J,clearcoat:F,clearcoatMap:he,clearcoatNormalMap:Ve,clearcoatRoughnessMap:te,dispersion:K,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:be,sheen:q,sheenColorMap:Ce,sheenRoughnessMap:de,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:Ze,transmission:Se,transmissionMap:T,thicknessMap:$,gradientMap:U,opaque:S.transparent===!1&&S.blending===ai&&S.alphaToCoverage===!1,alphaMap:I,alphaTest:Q,alphaHash:ne,combine:S.combine,mapUv:st&&M(S.map.channel),aoMapUv:D&&M(S.aoMap.channel),lightMapUv:ct&&M(S.lightMap.channel),bumpMapUv:Ae&&M(S.bumpMap.channel),normalMapUv:Le&&M(S.normalMap.channel),displacementMapUv:ye&&M(S.displacementMap.channel),emissiveMapUv:Ke&&M(S.emissiveMap.channel),metalnessMapUv:Te&&M(S.metalnessMap.channel),roughnessMapUv:E&&M(S.roughnessMap.channel),anisotropyMapUv:J&&M(S.anisotropyMap.channel),clearcoatMapUv:he&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&M(S.sheenRoughnessMap.channel),specularMapUv:Ge&&M(S.specularMap.channel),specularColorMapUv:Ie&&M(S.specularColorMap.channel),specularIntensityMapUv:Ze&&M(S.specularIntensityMap.channel),transmissionMapUv:T&&M(S.transmissionMap.channel),thicknessMapUv:$&&M(S.thicknessMap.channel),alphaMapUv:I&&M(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Le||_),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(st||I),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:st&&S.map.isVideoTexture===!0&&Ye.getTransfer(S.map.colorSpace)===tt,decodeVideoTextureEmissive:Ke&&S.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(S.emissiveMap.colorSpace)===tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function u(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(x,S),A(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function A(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const x=v[S.type];let C;if(x){const W=Xt[x];C=Vl.clone(W.uniforms)}else C=S.uniforms;return C}function G(S,x){let C;for(let W=0,H=h.length;W<H;W++){const X=h[W];if(X.cacheKey===x){C=X,++C.usedTimes;break}}return C===void 0&&(C=new nd(i,x,S,s),h.push(C)),C}function w(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function R(S){l.remove(S)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:G,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:N}}function od(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function qa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ya(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,v,M,p){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:M,group:p},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=M,u.group=p),e++,u}function a(d,f,m,v,M,p){const u=o(d,f,m,v,M,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function l(d,f,m,v,M,p){const u=o(d,f,m,v,M,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||ld),n.length>1&&n.sort(f||qa),r.length>1&&r.sort(f||qa)}function h(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function cd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ya,i.set(n,[o])):r>=s.length?(o=new Ya,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ud(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new nt};break;case"SpotLight":t={position:new z,direction:new z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function hd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fd=0;function dd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function pd(i){const e=new ud,t=hd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const r=new z,s=new ft,o=new ft;function a(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,v=0,M=0,p=0,u=0,b=0,A=0,y=0,G=0,w=0,R=0;c.sort(dd);for(let S=0,x=c.length;S<x;S++){const C=c[S],W=C.color,H=C.intensity,X=C.distance,j=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=W.r*H,d+=W.g*H,f+=W.b*H;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],H);R++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=C.shadow.matrix,b++}n.directional[m]=k,m++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(W).multiplyScalar(H),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[M]=k;const ee=C.shadow;if(C.map&&(n.spotLightMap[G]=C.map,G++,ee.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[M]=ee.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[M]=V,n.spotShadowMap[M]=j,y++}M++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(W).multiplyScalar(H),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=k,p++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const ee=C.shadow,V=t.get(C);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[v]=V,n.pointShadowMap[v]=j,n.pointShadowMatrix[v]=C.shadow.matrix,A++}n.point[v]=k,v++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(H),k.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[u]=k,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.directionalLength!==m||N.pointLength!==v||N.spotLength!==M||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==A||N.numSpotShadows!==y||N.numSpotMaps!==G||N.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=y+G-w,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,N.directionalLength=m,N.pointLength=v,N.spotLength=M,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=A,N.numSpotShadows=y,N.numSpotMaps=G,N.numLightProbes=R,n.version=fd++)}function l(c,h){let d=0,f=0,m=0,v=0,M=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const A=c[u];if(A.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(A.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(A.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(p),f++}else if(A.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:a,setupView:l,state:n}}function $a(i){const e=new pd(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function md(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new $a(i),e.set(r,[a])):s>=o.length?(a=new $a(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class _d extends Er{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gd extends Er{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Md(i,e,t){let n=new yo;const r=new Qe,s=new Qe,o=new lt,a=new _d({depthPacking:ul}),l=new gd,c={},h=t.maxTextureSize,d={[yn]:Rt,[Rt]:yn,[qt]:qt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:vd,fragmentShader:xd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Tn;v.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Kt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let u=this.type;this.render=function(w,R,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Sn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=u!==nn&&this.type===nn,X=u===nn&&this.type!==nn;for(let j=0,k=w.length;j<k;j++){const ee=w[j],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ae=V.getFrameExtents();if(r.multiply(ae),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,V.mapSize.y=s.y)),V.map===null||H===!0||X===!0){const Ee=this.type!==nn?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new Gn(r.x,r.y,Ee),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ue=V.getViewportCount();for(let Ee=0;Ee<ue;Ee++){const Fe=V.getViewport(Ee);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),W.viewport(o),V.updateMatrices(ee,Ee),n=V.getFrustum(),y(R,N,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===nn&&b(V,N),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,C)};function b(w,R){const N=e.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,N,f,M,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,N,m,M,null)}function A(w,R,N,S){let x=null;const C=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=N.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=x.uuid,H=R.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let j=X[H];j===void 0&&(j=x.clone(),X[H]=j,R.addEventListener("dispose",G)),x=j}if(x.visible=R.visible,x.wireframe=R.wireframe,S===nn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=i.properties.get(x);W.light=N}return x}function y(w,R,N,S,x){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===nn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const H=e.update(w),X=w.material;if(Array.isArray(X)){const j=H.groups;for(let k=0,ee=j.length;k<ee;k++){const V=j[k],ae=X[V.materialIndex];if(ae&&ae.visible){const ue=A(w,ae,S,x);w.onBeforeShadow(i,w,R,N,H,ue,V),i.renderBufferDirect(N,null,H,ue,w,V),w.onAfterShadow(i,w,R,N,H,ue,V)}}}else if(X.visible){const j=A(w,X,S,x);w.onBeforeShadow(i,w,R,N,H,j,null),i.renderBufferDirect(N,null,H,j,w,null),w.onAfterShadow(i,w,R,N,H,j,null)}}const W=w.children;for(let H=0,X=W.length;H<X;H++)y(W[H],R,N,S,x)}function G(w){w.target.removeEventListener("dispose",G);for(const N in c){const S=c[N],x=w.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Sd={[rs]:ss,[as]:cs,[os]:us,[ci]:ls,[ss]:rs,[cs]:as,[us]:os,[ls]:ci};function Ed(i,e){function t(){let T=!1;const $=new lt;let U=null;const I=new lt(0,0,0,0);return{setMask:function(Q){U!==Q&&!T&&(i.colorMask(Q,Q,Q,Q),U=Q)},setLocked:function(Q){T=Q},setClear:function(Q,ne,pe,He,at){at===!0&&(Q*=He,ne*=He,pe*=He),$.set(Q,ne,pe,He),I.equals($)===!1&&(i.clearColor(Q,ne,pe,He),I.copy($))},reset:function(){T=!1,U=null,I.set(-1,0,0,0)}}}function n(){let T=!1,$=!1,U=null,I=null,Q=null;return{setReversed:function(ne){if($!==ne){const pe=e.get("EXT_clip_control");$?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT);const He=Q;Q=null,this.setClear(He)}$=ne},getReversed:function(){return $},setTest:function(ne){ne?oe(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ne){U!==ne&&!T&&(i.depthMask(ne),U=ne)},setFunc:function(ne){if($&&(ne=Sd[ne]),I!==ne){switch(ne){case rs:i.depthFunc(i.NEVER);break;case ss:i.depthFunc(i.ALWAYS);break;case as:i.depthFunc(i.LESS);break;case ci:i.depthFunc(i.LEQUAL);break;case os:i.depthFunc(i.EQUAL);break;case ls:i.depthFunc(i.GEQUAL);break;case cs:i.depthFunc(i.GREATER);break;case us:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}I=ne}},setLocked:function(ne){T=ne},setClear:function(ne){Q!==ne&&($&&(ne=1-ne),i.clearDepth(ne),Q=ne)},reset:function(){T=!1,U=null,I=null,Q=null,$=!1}}}function r(){let T=!1,$=null,U=null,I=null,Q=null,ne=null,pe=null,He=null,at=null;return{setTest:function(ke){T||(ke?oe(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(ke){$!==ke&&!T&&(i.stencilMask(ke),$=ke)},setFunc:function(ke,ut,St){(U!==ke||I!==ut||Q!==St)&&(i.stencilFunc(ke,ut,St),U=ke,I=ut,Q=St)},setOp:function(ke,ut,St){(ne!==ke||pe!==ut||He!==St)&&(i.stencilOp(ke,ut,St),ne=ke,pe=ut,He=St)},setLocked:function(ke){T=ke},setClear:function(ke){at!==ke&&(i.clearStencil(ke),at=ke)},reset:function(){T=!1,$=null,U=null,I=null,Q=null,ne=null,pe=null,He=null,at=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],v=null,M=!1,p=null,u=null,b=null,A=null,y=null,G=null,w=null,R=new nt(0,0,0),N=0,S=!1,x=null,C=null,W=null,H=null,X=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=ee>=2);let ae=null,ue={};const Ee=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Xe=new lt().fromArray(Ee),Y=new lt().fromArray(Fe);function re(T,$,U,I){const Q=new Uint8Array(4),ne=i.createTexture();i.bindTexture(T,ne),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<U;pe++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,I,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D($+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return ne}const ce={};ce[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(ci),Ae(!1),Le(Js),oe(i.CULL_FACE),D(Sn);function oe(T){h[T]!==!0&&(i.enable(T),h[T]=!0)}function Re(T){h[T]!==!1&&(i.disable(T),h[T]=!1)}function we(T,$){return d[T]!==$?(i.bindFramebuffer(T,$),d[T]=$,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function ze(T,$){let U=m,I=!1;if(T){U=f.get($),U===void 0&&(U=[],f.set($,U));const Q=T.textures;if(U.length!==Q.length||U[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,pe=Q.length;ne<pe;ne++)U[ne]=i.COLOR_ATTACHMENT0+ne;U.length=Q.length,I=!0}}else U[0]!==i.BACK&&(U[0]=i.BACK,I=!0);I&&i.drawBuffers(U)}function st(T){return v!==T?(i.useProgram(T),v=T,!0):!1}const ge={[Nn]:i.FUNC_ADD,[Fo]:i.FUNC_SUBTRACT,[Oo]:i.FUNC_REVERSE_SUBTRACT};ge[Bo]=i.MIN,ge[zo]=i.MAX;const it={[Ho]:i.ZERO,[Go]:i.ONE,[Vo]:i.SRC_COLOR,[ns]:i.SRC_ALPHA,[$o]:i.SRC_ALPHA_SATURATE,[qo]:i.DST_COLOR,[Wo]:i.DST_ALPHA,[ko]:i.ONE_MINUS_SRC_COLOR,[is]:i.ONE_MINUS_SRC_ALPHA,[Yo]:i.ONE_MINUS_DST_COLOR,[Xo]:i.ONE_MINUS_DST_ALPHA,[Ko]:i.CONSTANT_COLOR,[Zo]:i.ONE_MINUS_CONSTANT_COLOR,[jo]:i.CONSTANT_ALPHA,[Jo]:i.ONE_MINUS_CONSTANT_ALPHA};function D(T,$,U,I,Q,ne,pe,He,at,ke){if(T===Sn){M===!0&&(Re(i.BLEND),M=!1);return}if(M===!1&&(oe(i.BLEND),M=!0),T!==No){if(T!==p||ke!==S){if((u!==Nn||y!==Nn)&&(i.blendEquation(i.FUNC_ADD),u=Nn,y=Nn),ke)switch(T){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ta:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}b=null,A=null,G=null,w=null,R.set(0,0,0),N=0,p=T,S=ke}return}Q=Q||$,ne=ne||U,pe=pe||I,($!==u||Q!==y)&&(i.blendEquationSeparate(ge[$],ge[Q]),u=$,y=Q),(U!==b||I!==A||ne!==G||pe!==w)&&(i.blendFuncSeparate(it[U],it[I],it[ne],it[pe]),b=U,A=I,G=ne,w=pe),(He.equals(R)===!1||at!==N)&&(i.blendColor(He.r,He.g,He.b,at),R.copy(He),N=at),p=T,S=!1}function ct(T,$){T.side===qt?Re(i.CULL_FACE):oe(i.CULL_FACE);let U=T.side===Rt;$&&(U=!U),Ae(U),T.blending===ai&&T.transparent===!1?D(Sn):D(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),s.setMask(T.colorWrite);const I=T.stencilWrite;a.setTest(I),I&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),Ke(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(T){x!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),x=T)}function Le(T){T!==Do?(oe(i.CULL_FACE),T!==C&&(T===Js?i.cullFace(i.BACK):T===Uo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),C=T}function ye(T){T!==W&&(k&&i.lineWidth(T),W=T)}function Ke(T,$,U){T?(oe(i.POLYGON_OFFSET_FILL),(H!==$||X!==U)&&(i.polygonOffset($,U),H=$,X=U)):Re(i.POLYGON_OFFSET_FILL)}function Te(T){T?oe(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function E(T){T===void 0&&(T=i.TEXTURE0+j-1),ae!==T&&(i.activeTexture(T),ae=T)}function _(T,$,U){U===void 0&&(ae===null?U=i.TEXTURE0+j-1:U=ae);let I=ue[U];I===void 0&&(I={type:void 0,texture:void 0},ue[U]=I),(I.type!==T||I.texture!==$)&&(ae!==U&&(i.activeTexture(U),ae=U),i.bindTexture(T,$||ce[T]),I.type=T,I.texture=$)}function F(){const T=ue[ae];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ce(T){Xe.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Xe.copy(T))}function de(T){Y.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Y.copy(T))}function Ge(T,$){let U=c.get($);U===void 0&&(U=new WeakMap,c.set($,U));let I=U.get(T);I===void 0&&(I=i.getUniformBlockIndex($,T.name),U.set(T,I))}function Ie(T,$){const I=c.get($).get(T);l.get($)!==I&&(i.uniformBlockBinding($,I,T.__bindingPointIndex),l.set($,I))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ue={},d={},f=new WeakMap,m=[],v=null,M=!1,p=null,u=null,b=null,A=null,y=null,G=null,w=null,R=new nt(0,0,0),N=0,S=!1,x=null,C=null,W=null,H=null,X=null,Xe.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:we,drawBuffers:ze,useProgram:st,setBlending:D,setMaterial:ct,setFlipSided:Ae,setCullFace:Le,setLineWidth:ye,setPolygonOffset:Ke,setScissorTest:Te,activeTexture:E,bindTexture:_,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:fe,texImage3D:be,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:Ve,texStorage3D:te,texSubImage2D:q,texSubImage3D:Se,compressedTexSubImage2D:J,compressedTexSubImage3D:he,scissor:Ce,viewport:de,reset:Ze}}function Ka(i,e,t,n){const r=yd(n);switch(t){case io:return i*e;case so:return i*e;case ao:return i*e*2;case oo:return i*e/r.components*r.byteLength;case Ys:return i*e/r.components*r.byteLength;case lo:return i*e*2/r.components*r.byteLength;case $s:return i*e*2/r.components*r.byteLength;case ro:return i*e*3/r.components*r.byteLength;case Gt:return i*e*4/r.components*r.byteLength;case Ks:return i*e*4/r.components*r.byteLength;case fr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:case vs:return Math.max(i,16)*Math.max(e,8)/4;case ms:case gs:return Math.max(i,8)*Math.max(e,8)/2;case xs:case Ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ys:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ts:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ws:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Cs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ps:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ls:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ds:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Us:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Is:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ns:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _r:case Fs:case Os:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case Bs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zs:case Hs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yd(i){switch(i){case on:case eo:return{byteLength:1,components:1};case Ui:case to:case Ii:return{byteLength:2,components:1};case Xs:case qs:return{byteLength:2,components:4};case Hn:case Ws:case rn:return{byteLength:4,components:1};case no:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Td(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return m?new OffscreenCanvas(E,_):xr("canvas")}function M(E,_,F){let K=1;const Z=Te(E);if((Z.width>F||Z.height>F)&&(K=F/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const q=Math.floor(K*Z.width),Se=Math.floor(K*Z.height);d===void 0&&(d=v(q,Se));const J=_?v(q,Se):d;return J.width=q,J.height=Se,J.getContext("2d").drawImage(E,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Se+")."),J}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(E,_,F,K,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let q=_;if(_===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),_===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){const Se=Z?Sr:Ye.getTransfer(K);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Se===tt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(E,_){let F;return E?_===null||_===Hn||_===fi?F=i.DEPTH24_STENCIL8:_===rn?F=i.DEPTH32F_STENCIL8:_===Ui&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===fi?F=i.DEPTH_COMPONENT24:_===rn?F=i.DEPTH_COMPONENT32F:_===Ui&&(F=i.DEPTH_COMPONENT16),F}function G(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function w(E){const _=E.target;_.removeEventListener("dispose",w),N(_),_.isVideoTexture&&h.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),x(_)}function N(E){const _=n.get(E);if(_.__webglInit===void 0)return;const F=E.source,K=f.get(F);if(K){const Z=K[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(E),Object.keys(K).length===0&&f.delete(F)}n.remove(E)}function S(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const F=E.source,K=f.get(F);delete K[_.__cacheKey],o.memory.textures--}function x(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let Z=0;Z<_.__webglFramebuffer[K].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[K][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=E.textures;for(let K=0,Z=F.length;K<Z;K++){const q=n.get(F[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[K])}n.remove(E)}let C=0;function W(){C=0}function H(){const E=C;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function X(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const F=n.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,E,_);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function k(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function ee(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Y(F,E,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function V(E,_){const F=n.get(E);if(E.version>0&&F.__version!==E.version){re(F,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ae={[ds]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[ps]:i.MIRRORED_REPEAT},ue={[Vt]:i.NEAREST,[ll]:i.NEAREST_MIPMAP_NEAREST,[Vi]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},Ee={[dl]:i.NEVER,[xl]:i.ALWAYS,[pl]:i.LESS,[uo]:i.LEQUAL,[ml]:i.EQUAL,[vl]:i.GEQUAL,[_l]:i.GREATER,[gl]:i.NOTEQUAL};function Fe(E,_){if(_.type===rn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===Tr||_.magFilter===Vi||_.magFilter===Bn||_.minFilter===$t||_.minFilter===Tr||_.minFilter===Vi||_.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ae[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ae[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ae[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ue[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ue[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ee[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Vi&&_.minFilter!==Bn||_.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(E,_){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",w));const K=_.source;let Z=f.get(K);Z===void 0&&(Z={},f.set(K,Z));const q=X(_);if(q!==E.__cacheKey){Z[q]===void 0&&(Z[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[q].usedTimes++;const Se=Z[E.__cacheKey];Se!==void 0&&(Z[E.__cacheKey].usedTimes--,Se.usedTimes===0&&S(_)),E.__cacheKey=q,E.__webglTexture=Z[q].texture}return F}function Y(E,_,F){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const Z=Xe(E,_),q=_.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+F);const Se=n.get(q);if(q.version!==Se.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);const J=Ye.getPrimaries(Ye.workingColorSpace),he=_.colorSpace===Yt?null:Ye.getPrimaries(_.colorSpace),Ve=_.colorSpace===Yt||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let te=M(_.image,!1,r.maxTextureSize);te=Ke(_,te);const fe=s.convert(_.format,_.colorSpace),be=s.convert(_.type);let Ce=A(_.internalFormat,fe,be,_.colorSpace,_.isVideoTexture);Fe(K,_);let de;const Ge=_.mipmaps,Ie=_.isVideoTexture!==!0,Ze=Se.__version===void 0||Z===!0,T=q.dataReady,$=G(_,te);if(_.isDepthTexture)Ce=y(_.format===di,_.type),Ze&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,Ce,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,fe,be,null));else if(_.isDataTexture)if(Ge.length>0){Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,$,Ce,Ge[0].width,Ge[0].height);for(let U=0,I=Ge.length;U<I;U++)de=Ge[U],Ie?T&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,de.width,de.height,fe,be,de.data):t.texImage2D(i.TEXTURE_2D,U,Ce,de.width,de.height,0,fe,be,de.data);_.generateMipmaps=!1}else Ie?(Ze&&t.texStorage2D(i.TEXTURE_2D,$,Ce,te.width,te.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,fe,be,te.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,te.width,te.height,0,fe,be,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,Ce,Ge[0].width,Ge[0].height,te.depth);for(let U=0,I=Ge.length;U<I;U++)if(de=Ge[U],_.format!==Gt)if(fe!==null)if(Ie){if(T)if(_.layerUpdates.size>0){const Q=Ka(de.width,de.height,_.format,_.type);for(const ne of _.layerUpdates){const pe=de.data.subarray(ne*Q/de.data.BYTES_PER_ELEMENT,(ne+1)*Q/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,ne,de.width,de.height,1,fe,pe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,de.width,de.height,te.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,U,Ce,de.width,de.height,te.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,U,0,0,0,de.width,de.height,te.depth,fe,be,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,U,Ce,de.width,de.height,te.depth,0,fe,be,de.data)}else{Ie&&Ze&&t.texStorage2D(i.TEXTURE_2D,$,Ce,Ge[0].width,Ge[0].height);for(let U=0,I=Ge.length;U<I;U++)de=Ge[U],_.format!==Gt?fe!==null?Ie?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,U,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,U,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?T&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,de.width,de.height,fe,be,de.data):t.texImage2D(i.TEXTURE_2D,U,Ce,de.width,de.height,0,fe,be,de.data)}else if(_.isDataArrayTexture)if(Ie){if(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,$,Ce,te.width,te.height,te.depth),T)if(_.layerUpdates.size>0){const U=Ka(te.width,te.height,_.format,_.type);for(const I of _.layerUpdates){const Q=te.data.subarray(I*U/te.data.BYTES_PER_ELEMENT,(I+1)*U/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,I,te.width,te.height,1,fe,be,Q)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,be,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,te.width,te.height,te.depth,0,fe,be,te.data);else if(_.isData3DTexture)Ie?(Ze&&t.texStorage3D(i.TEXTURE_3D,$,Ce,te.width,te.height,te.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,be,te.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,te.width,te.height,te.depth,0,fe,be,te.data);else if(_.isFramebufferTexture){if(Ze)if(Ie)t.texStorage2D(i.TEXTURE_2D,$,Ce,te.width,te.height);else{let U=te.width,I=te.height;for(let Q=0;Q<$;Q++)t.texImage2D(i.TEXTURE_2D,Q,Ce,U,I,0,fe,be,null),U>>=1,I>>=1}}else if(Ge.length>0){if(Ie&&Ze){const U=Te(Ge[0]);t.texStorage2D(i.TEXTURE_2D,$,Ce,U.width,U.height)}for(let U=0,I=Ge.length;U<I;U++)de=Ge[U],Ie?T&&t.texSubImage2D(i.TEXTURE_2D,U,0,0,fe,be,de):t.texImage2D(i.TEXTURE_2D,U,Ce,fe,be,de);_.generateMipmaps=!1}else if(Ie){if(Ze){const U=Te(te);t.texStorage2D(i.TEXTURE_2D,$,Ce,U.width,U.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,be,te)}else t.texImage2D(i.TEXTURE_2D,0,Ce,fe,be,te);p(_)&&u(K),Se.__version=q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function re(E,_,F){if(_.image.length!==6)return;const K=Xe(E,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);const q=n.get(Z);if(Z.version!==q.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const Se=Ye.getPrimaries(Ye.workingColorSpace),J=_.colorSpace===Yt?null:Ye.getPrimaries(_.colorSpace),he=_.colorSpace===Yt||Se===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let I=0;I<6;I++)!Ve&&!te?fe[I]=M(_.image[I],!0,r.maxCubemapSize):fe[I]=te?_.image[I].image:_.image[I],fe[I]=Ke(_,fe[I]);const be=fe[0],Ce=s.convert(_.format,_.colorSpace),de=s.convert(_.type),Ge=A(_.internalFormat,Ce,de,_.colorSpace),Ie=_.isVideoTexture!==!0,Ze=q.__version===void 0||K===!0,T=Z.dataReady;let $=G(_,be);Fe(i.TEXTURE_CUBE_MAP,_);let U;if(Ve){Ie&&Ze&&t.texStorage2D(i.TEXTURE_CUBE_MAP,$,Ge,be.width,be.height);for(let I=0;I<6;I++){U=fe[I].mipmaps;for(let Q=0;Q<U.length;Q++){const ne=U[Q];_.format!==Gt?Ce!==null?Ie?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q,0,0,ne.width,ne.height,Ce,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q,Ge,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q,0,0,ne.width,ne.height,Ce,de,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q,Ge,ne.width,ne.height,0,Ce,de,ne.data)}}}else{if(U=_.mipmaps,Ie&&Ze){U.length>0&&$++;const I=Te(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,$,Ge,I.width,I.height)}for(let I=0;I<6;I++)if(te){Ie?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,fe[I].width,fe[I].height,Ce,de,fe[I].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Ge,fe[I].width,fe[I].height,0,Ce,de,fe[I].data);for(let Q=0;Q<U.length;Q++){const pe=U[Q].image[I].image;Ie?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q+1,0,0,pe.width,pe.height,Ce,de,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q+1,Ge,pe.width,pe.height,0,Ce,de,pe.data)}}else{Ie?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,Ce,de,fe[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Ge,Ce,de,fe[I]);for(let Q=0;Q<U.length;Q++){const ne=U[Q];Ie?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q+1,0,0,Ce,de,ne.image[I]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+I,Q+1,Ge,Ce,de,ne.image[I])}}}p(_)&&u(i.TEXTURE_CUBE_MAP),q.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ce(E,_,F,K,Z,q){const Se=s.convert(F.format,F.colorSpace),J=s.convert(F.type),he=A(F.internalFormat,Se,J,F.colorSpace),Ve=n.get(_),te=n.get(F);if(te.__renderTarget=_,!Ve.__hasExternalTextures){const fe=Math.max(1,_.width>>q),be=Math.max(1,_.height>>q);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,q,he,fe,be,_.depth,0,Se,J,null):t.texImage2D(Z,q,he,fe,be,0,Se,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Le(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Z,te.__webglTexture,0,Ae(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Z,te.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(E,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const K=_.depthTexture,Z=K&&K.isDepthTexture?K.type:null,q=y(_.stencilBuffer,Z),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=Ae(_);Le(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,q,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{const K=_.textures;for(let Z=0;Z<K.length;Z++){const q=K[Z],Se=s.convert(q.format,q.colorSpace),J=s.convert(q.type),he=A(q.internalFormat,Se,J,q.colorSpace),Ve=Ae(_);F&&Le(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,he,_.width,_.height):Le(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,he,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,he,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Z=K.__webglTexture,q=Ae(_);if(_.depthTexture.format===oi)Le(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===di)Le(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function we(E){const _=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=K}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,E)}else if(F){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),oe(_.__webglDepthbuffer[K],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),oe(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,_,F){const K=n.get(E);_!==void 0&&ce(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&we(E)}function st(E){const _=E.texture,F=n.get(E),K=n.get(_);E.addEventListener("dispose",R);const Z=E.textures,q=E.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let he=0;he<_.mipmaps.length;he++)F.__webglFramebuffer[J][he]=i.createFramebuffer()}else F.__webglFramebuffer[J]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)F.__webglFramebuffer[J]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Se)for(let J=0,he=Z.length;J<he;J++){const Ve=n.get(Z[J]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Le(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){const he=Z[J];F.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const Ve=s.convert(he.format,he.colorSpace),te=s.convert(he.type),fe=A(he.internalFormat,Ve,te,he.colorSpace,E.isXRRenderTarget===!0),be=Ae(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,F.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ce(F.__webglFramebuffer[J][he],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he);else ce(F.__webglFramebuffer[J],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let J=0,he=Z.length;J<he;J++){const Ve=Z[J],te=n.get(Ve);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Fe(i.TEXTURE_2D,Ve),ce(F.__webglFramebuffer,E,Ve,i.COLOR_ATTACHMENT0+J,i.TEXTURE_2D,0),p(Ve)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,K.__webglTexture),Fe(J,_),_.mipmaps&&_.mipmaps.length>0)for(let he=0;he<_.mipmaps.length;he++)ce(F.__webglFramebuffer[he],E,_,i.COLOR_ATTACHMENT0,J,he);else ce(F.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,J,0);p(_)&&u(J),t.unbindTexture()}E.depthBuffer&&we(E)}function ge(E){const _=E.textures;for(let F=0,K=_.length;F<K;F++){const Z=_[F];if(p(Z)){const q=b(E),Se=n.get(Z).__webglTexture;t.bindTexture(q,Se),u(q),t.unbindTexture()}}}const it=[],D=[];function ct(E){if(E.samples>0){if(Le(E)===!1){const _=E.textures,F=E.width,K=E.height;let Z=i.COLOR_BUFFER_BIT;const q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),J=_.length>1;if(J)for(let he=0;he<_.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<_.length;he++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ve=n.get(_[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,Z,i.NEAREST),l===!0&&(it.length=0,D.length=0,it.push(i.COLOR_ATTACHMENT0+he),E.depthBuffer&&E.resolveDepthBuffer===!1&&(it.push(q),D.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<_.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ve=n.get(_[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ae(E){return Math.min(r.maxSamples,E.samples)}function Le(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ye(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Ke(E,_){const F=E.colorSpace,K=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==mi&&F!==Yt&&(Ye.getTransfer(F)===tt?(K!==Gt||Z!==on)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=st,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Le}function Ad(i,e){function t(n,r=Yt){let s;const o=Ye.getTransfer(r);if(n===on)return i.UNSIGNED_BYTE;if(n===Xs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===no)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eo)return i.BYTE;if(n===to)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===Ws)return i.INT;if(n===Hn)return i.UNSIGNED_INT;if(n===rn)return i.FLOAT;if(n===Ii)return i.HALF_FLOAT;if(n===io)return i.ALPHA;if(n===ro)return i.RGB;if(n===Gt)return i.RGBA;if(n===so)return i.LUMINANCE;if(n===ao)return i.LUMINANCE_ALPHA;if(n===oi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===oo)return i.RED;if(n===Ys)return i.RED_INTEGER;if(n===lo)return i.RG;if(n===$s)return i.RG_INTEGER;if(n===Ks)return i.RGBA_INTEGER;if(n===fr||n===dr||n===pr||n===mr)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ms||n===_s||n===gs||n===vs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_s)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xs||n===Ms||n===Ss)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===xs||n===Ms)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ss)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Es||n===ys||n===Ts||n===As||n===bs||n===Rs||n===ws||n===Cs||n===Ps||n===Ls||n===Ds||n===Us||n===Is||n===Ns)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Es)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ys)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ts)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===As)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bs)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rs)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ws)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cs)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ps)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ls)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ds)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Us)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Is)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ns)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Fs||n===Os)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===_r)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Os)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===Bs||n===zs||n===Hs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_r)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class bd extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class cr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rd={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const p=t.getJointPose(M,n),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const wd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cd=`
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

}`;class Pd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:wd,fragmentShader:Cd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ld extends _i{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,v=null;const M=new Pd,p=t.getContextAttributes();let u=null,b=null;const A=[],y=[],G=new Qe;let w=null;const R=new zt;R.viewport=new lt;const N=new zt;N.viewport=new lt;const S=[R,N],x=new bd;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=A[Y];return re===void 0&&(re=new Qr,A[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=A[Y];return re===void 0&&(re=new Qr,A[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=A[Y];return re===void 0&&(re=new Qr,A[Y]=re),re.getHandSpace()};function H(Y){const re=y.indexOf(Y.inputSource);if(re===-1)return;const ce=A[re];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,c||o),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",j);for(let Y=0;Y<A.length;Y++){const re=y[Y];re!==null&&(y[Y]=null,A[Y].disconnect(re))}C=null,W=null,M.reset(),e.setRenderTarget(u),m=null,f=null,d=null,r=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",X),r.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Gn(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:on,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,ce=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?di:oi,ce=p.stencil?fi:Hn);const Re={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Gn(f.textureWidth,f.textureHeight,{format:Gt,type:on,depthTexture:new bo(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(Y){for(let re=0;re<Y.removed.length;re++){const ce=Y.removed[re],oe=y.indexOf(ce);oe>=0&&(y[oe]=null,A[oe].disconnect(ce))}for(let re=0;re<Y.added.length;re++){const ce=Y.added[re];let oe=y.indexOf(ce);if(oe===-1){for(let we=0;we<A.length;we++)if(we>=y.length){y.push(ce),oe=we;break}else if(y[we]===null){y[we]=ce,oe=we;break}if(oe===-1)break}const Re=A[oe];Re&&Re.connect(ce)}}const k=new z,ee=new z;function V(Y,re,ce){k.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const oe=k.distanceTo(ee),Re=re.projectionMatrix.elements,we=ce.projectionMatrix.elements,ze=Re[14]/(Re[10]-1),st=Re[14]/(Re[10]+1),ge=(Re[9]+1)/Re[5],it=(Re[9]-1)/Re[5],D=(Re[8]-1)/Re[0],ct=(we[8]+1)/we[0],Ae=ze*D,Le=ze*ct,ye=oe/(-D+ct),Ke=ye*-D;if(re.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ke),Y.translateZ(ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Te=ze+ye,E=st+ye,_=Ae-Ke,F=Le+(oe-Ke),K=ge*st/E*Te,Z=it*st/E*Te;Y.projectionMatrix.makePerspective(_,F,K,Z,Te,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let re=Y.near,ce=Y.far;M.texture!==null&&(M.depthNear>0&&(re=M.depthNear),M.depthFar>0&&(ce=M.depthFar)),x.near=N.near=R.near=re,x.far=N.far=R.far=ce,(C!==x.near||W!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,W=x.far),R.layers.mask=Y.layers.mask|2,N.layers.mask=Y.layers.mask|4,x.layers.mask=R.layers.mask|N.layers.mask;const oe=Y.parent,Re=x.cameras;ae(x,oe);for(let we=0;we<Re.length;we++)ae(Re[we],oe);Re.length===2?V(x,R,N):x.projectionMatrix.copy(R.projectionMatrix),ue(Y,x,oe)};function ue(Y,re,ce){ce===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let Ee=null;function Fe(Y,re){if(h=re.getViewerPose(c||o),v=re,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let oe=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let we=0;we<ce.length;we++){const ze=ce[we];let st=null;if(m!==null)st=m.getViewport(ze);else{const it=d.getViewSubImage(f,ze);st=it.viewport,we===0&&(e.setRenderTargetTextures(b,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(b))}let ge=S[we];ge===void 0&&(ge=new zt,ge.layers.enable(we),ge.viewport=new lt,S[we]=ge),ge.matrix.fromArray(ze.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(ze.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(st.x,st.y,st.width,st.height),we===0&&(x.matrix.copy(ge.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(ge)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const we=d.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&M.init(e,we,r.renderState)}}for(let ce=0;ce<A.length;ce++){const oe=y[ce],Re=A[ce];oe!==null&&Re!==void 0&&Re.update(oe,re,c||o)}Ee&&Ee(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const Xe=new To;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){Ee=Y},this.dispose=function(){}}}const Dn=new ln,Dd=new ft;function Ud(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Mo(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,A,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),d(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,A):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Rt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Rt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u),A=b.envMap,y=b.envMapRotation;A&&(p.envMap.value=A,Dn.copy(y),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),p.envMapRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Dn)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,A){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=A*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Rt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Id(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,A){const y=A.program;n.uniformBlockBinding(b,y)}function c(b,A){let y=r[b.id];y===void 0&&(v(b),y=h(b),r[b.id]=y,b.addEventListener("dispose",p));const G=A.program;n.updateUBOMapping(b,G);const w=e.render.frame;s[b.id]!==w&&(f(b),s[b.id]=w)}function h(b){const A=d();b.__bindingPointIndex=A;const y=i.createBuffer(),G=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,G,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const A=r[b.id],y=b.uniforms,G=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,R=y.length;w<R;w++){const N=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,x=N.length;S<x;S++){const C=N[S];if(m(C,w,S,G)===!0){const W=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let j=0;j<H.length;j++){const k=H[j],ee=M(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,W+X,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,A,y,G){const w=b.value,R=A+"_"+y;if(G[R]===void 0)return typeof w=="number"||typeof w=="boolean"?G[R]=w:G[R]=w.clone(),!0;{const N=G[R];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return G[R]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function v(b){const A=b.uniforms;let y=0;const G=16;for(let R=0,N=A.length;R<N;R++){const S=Array.isArray(A[R])?A[R]:[A[R]];for(let x=0,C=S.length;x<C;x++){const W=S[x],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,j=H.length;X<j;X++){const k=H[X],ee=M(k),V=y%G,ae=V%ee.boundary,ue=V+ae;y+=ae,ue!==0&&G-ue<ee.storage&&(y+=G-ue),W.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=ee.storage}}}const w=y%G;return w>0&&(y+=G-w),b.__size=y,b.__cache={},this}function M(b){const A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=48,A.storage=48):b.isMatrix4?(A.boundary=64,A.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),A}function p(b){const A=b.target;A.removeEventListener("dispose",p);const y=o.indexOf(A.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Nd{constructor(e={}){const{canvas:t=Sl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,u=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=En,this.toneMappingExposure=1;const y=this;let G=!1,w=0,R=0,N=null,S=-1,x=null;const C=new lt,W=new lt;let H=null;const X=new nt(0);let j=0,k=t.width,ee=t.height,V=1,ae=null,ue=null;const Ee=new lt(0,0,k,ee),Fe=new lt(0,0,k,ee);let Xe=!1;const Y=new yo;let re=!1,ce=!1;const oe=new ft,Re=new ft,we=new z,ze=new lt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function it(){return N===null?V:1}let D=n;function ct(g,P){return t.getContext(g,P)}try{const g={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ks}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",Q,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const P="webgl2";if(D=ct(P,g),D===null)throw ct(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Ae,Le,ye,Ke,Te,E,_,F,K,Z,q,Se,J,he,Ve,te,fe,be,Ce,de,Ge,Ie,Ze,T;function $(){Ae=new zh(D),Ae.init(),Ie=new Ad(D,Ae),Le=new Uh(D,Ae,e,Ie),ye=new Ed(D,Ae),Le.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),Ke=new Vh(D),Te=new od,E=new Td(D,Ae,ye,Te,Le,Ie,Ke),_=new Nh(y),F=new Bh(y),K=new Kl(D),Ze=new Lh(D,K),Z=new Hh(D,K,Ke,Ze),q=new Wh(D,Z,K,Ke),Ce=new kh(D,Le,E),te=new Ih(Te),Se=new ad(y,_,F,Ae,Le,Ze,te),J=new Ud(y,Te),he=new cd,Ve=new md(Ae),be=new Ph(y,_,F,ye,q,m,l),fe=new Md(y,q,Le),T=new Id(D,Ke,Le,ye),de=new Dh(D,Ae,Ke),Ge=new Gh(D,Ae,Ke),Ke.programs=Se.programs,y.capabilities=Le,y.extensions=Ae,y.properties=Te,y.renderLists=he,y.shadowMap=fe,y.state=ye,y.info=Ke}$();const U=new Ld(y,D);this.xr=U,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const g=Ae.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ae.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(g){g!==void 0&&(V=g,this.setSize(k,ee,!1))},this.getSize=function(g){return g.set(k,ee)},this.setSize=function(g,P,O=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=g,ee=P,t.width=Math.floor(g*V),t.height=Math.floor(P*V),O===!0&&(t.style.width=g+"px",t.style.height=P+"px"),this.setViewport(0,0,g,P)},this.getDrawingBufferSize=function(g){return g.set(k*V,ee*V).floor()},this.setDrawingBufferSize=function(g,P,O){k=g,ee=P,V=O,t.width=Math.floor(g*O),t.height=Math.floor(P*O),this.setViewport(0,0,g,P)},this.getCurrentViewport=function(g){return g.copy(C)},this.getViewport=function(g){return g.copy(Ee)},this.setViewport=function(g,P,O,B){g.isVector4?Ee.set(g.x,g.y,g.z,g.w):Ee.set(g,P,O,B),ye.viewport(C.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(g){return g.copy(Fe)},this.setScissor=function(g,P,O,B){g.isVector4?Fe.set(g.x,g.y,g.z,g.w):Fe.set(g,P,O,B),ye.scissor(W.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(g){ye.setScissorTest(Xe=g)},this.setOpaqueSort=function(g){ae=g},this.setTransparentSort=function(g){ue=g},this.getClearColor=function(g){return g.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(g=!0,P=!0,O=!0){let B=0;if(g){let L=!1;if(N!==null){const ie=N.texture.format;L=ie===Ks||ie===$s||ie===Ys}if(L){const ie=N.texture.type,le=ie===on||ie===Hn||ie===Ui||ie===fi||ie===Xs||ie===qs,_e=be.getClearColor(),ve=be.getClearAlpha(),Pe=_e.r,Ne=_e.g,xe=_e.b;le?(v[0]=Pe,v[1]=Ne,v[2]=xe,v[3]=ve,D.clearBufferuiv(D.COLOR,0,v)):(M[0]=Pe,M[1]=Ne,M[2]=xe,M[3]=ve,D.clearBufferiv(D.COLOR,0,M))}else B|=D.COLOR_BUFFER_BIT}P&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",Q,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),he.dispose(),Ve.dispose(),Te.dispose(),_.dispose(),F.dispose(),q.dispose(),Ze.dispose(),T.dispose(),Se.dispose(),U.dispose(),U.removeEventListener("sessionstart",vi),U.removeEventListener("sessionend",Vn),Ut.stop()};function I(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const g=Ke.autoReset,P=fe.enabled,O=fe.autoUpdate,B=fe.needsUpdate,L=fe.type;$(),Ke.autoReset=g,fe.enabled=P,fe.autoUpdate=O,fe.needsUpdate=B,fe.type=L}function ne(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function pe(g){const P=g.target;P.removeEventListener("dispose",pe),He(P)}function He(g){at(g),Te.remove(g)}function at(g){const P=Te.get(g).programs;P!==void 0&&(P.forEach(function(O){Se.releaseProgram(O)}),g.isShaderMaterial&&Se.releaseShaderCache(g))}this.renderBufferDirect=function(g,P,O,B,L,ie){P===null&&(P=st);const le=L.isMesh&&L.matrixWorld.determinant()<0,_e=It(g,P,O,B,L);ye.setMaterial(B,le);let ve=O.index,Pe=1;if(B.wireframe===!0){if(ve=Z.getWireframeAttribute(O),ve===void 0)return;Pe=2}const Ne=O.drawRange,xe=O.attributes.position;let We=Ne.start*Pe,je=(Ne.start+Ne.count)*Pe;ie!==null&&(We=Math.max(We,ie.start*Pe),je=Math.min(je,(ie.start+ie.count)*Pe)),ve!==null?(We=Math.max(We,0),je=Math.min(je,ve.count)):xe!=null&&(We=Math.max(We,0),je=Math.min(je,xe.count));const rt=je-We;if(rt<0||rt===1/0)return;Ze.setup(L,B,_e,O,ve);let gt,$e=de;if(ve!==null&&(gt=K.get(ve),$e=Ge,$e.setIndex(gt)),L.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*it()),$e.setMode(D.LINES)):$e.setMode(D.TRIANGLES);else if(L.isLine){let Me=B.linewidth;Me===void 0&&(Me=1),ye.setLineWidth(Me*it()),L.isLineSegments?$e.setMode(D.LINES):L.isLineLoop?$e.setMode(D.LINE_LOOP):$e.setMode(D.LINE_STRIP)}else L.isPoints?$e.setMode(D.POINTS):L.isSprite&&$e.setMode(D.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)$e.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))$e.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Me=L._multiDrawStarts,Nt=L._multiDrawCounts,De=L._multiDrawCount,vt=ve?K.get(ve).bytesPerElement:1,hn=Te.get(B).currentProgram.getUniforms();for(let ot=0;ot<De;ot++)hn.setValue(D,"_gl_DrawID",ot),$e.render(Me[ot]/vt,Nt[ot])}else if(L.isInstancedMesh)$e.renderInstances(We,rt,L.count);else if(O.isInstancedBufferGeometry){const Me=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Nt=Math.min(O.instanceCount,Me);$e.renderInstances(We,rt,Nt)}else $e.render(We,rt)};function ke(g,P,O){g.transparent===!0&&g.side===qt&&g.forceSinglePass===!1?(g.side=Rt,g.needsUpdate=!0,un(g,P,O),g.side=yn,g.needsUpdate=!0,un(g,P,O),g.side=qt):un(g,P,O)}this.compile=function(g,P,O=null){O===null&&(O=g),u=Ve.get(O),u.init(P),A.push(u),O.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),g!==O&&g.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();const B=new Set;return g.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ie=L.material;if(ie)if(Array.isArray(ie))for(let le=0;le<ie.length;le++){const _e=ie[le];ke(_e,O,L),B.add(_e)}else ke(ie,O,L),B.add(ie)}),A.pop(),u=null,B},this.compileAsync=function(g,P,O=null){const B=this.compile(g,P,O);return new Promise(L=>{function ie(){if(B.forEach(function(le){Te.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){L(g);return}setTimeout(ie,10)}Ae.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ut=null;function St(g){ut&&ut(g)}function vi(){Ut.stop()}function Vn(){Ut.start()}const Ut=new To;Ut.setAnimationLoop(St),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(g){ut=g,U.setAnimationLoop(g),g===null?Ut.stop():Ut.start()},U.addEventListener("sessionstart",vi),U.addEventListener("sessionend",Vn),this.render=function(g,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(P),P=U.getCamera()),g.isScene===!0&&g.onBeforeRender(y,g,P,N),u=Ve.get(g,A.length),u.init(P),A.push(u),Re.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Y.setFromProjectionMatrix(Re),ce=this.localClippingEnabled,re=te.init(this.clippingPlanes,ce),p=he.get(g,b.length),p.init(),b.push(p),U.enabled===!0&&U.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&An(ie,P,-1/0,y.sortObjects)}An(g,P,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ae,ue),ge=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,ge&&be.addToRenderList(p,g),this.info.render.frame++,re===!0&&te.beginShadows();const O=u.state.shadowsArray;fe.render(O,g,P),re===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,L=p.transmissive;if(u.setupLights(),P.isArrayCamera){const ie=P.cameras;if(L.length>0)for(let le=0,_e=ie.length;le<_e;le++){const ve=ie[le];Mi(B,L,g,ve)}ge&&be.render(g);for(let le=0,_e=ie.length;le<_e;le++){const ve=ie[le];xi(p,g,ve,ve.viewport)}}else L.length>0&&Mi(B,L,g,P),ge&&be.render(g),xi(p,g,P);N!==null&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),g.isScene===!0&&g.onAfterRender(y,g,P),Ze.resetDefaultState(),S=-1,x=null,A.pop(),A.length>0?(u=A[A.length-1],re===!0&&te.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function An(g,P,O,B){if(g.visible===!1)return;if(g.layers.test(P.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(P);else if(g.isLight)u.pushLight(g),g.castShadow&&u.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Y.intersectsSprite(g)){B&&ze.setFromMatrixPosition(g.matrixWorld).applyMatrix4(Re);const le=q.update(g),_e=g.material;_e.visible&&p.push(g,le,_e,O,ze.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Y.intersectsObject(g))){const le=q.update(g),_e=g.material;if(B&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),ze.copy(g.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ze.copy(le.boundingSphere.center)),ze.applyMatrix4(g.matrixWorld).applyMatrix4(Re)),Array.isArray(_e)){const ve=le.groups;for(let Pe=0,Ne=ve.length;Pe<Ne;Pe++){const xe=ve[Pe],We=_e[xe.materialIndex];We&&We.visible&&p.push(g,le,We,O,ze.z,xe)}}else _e.visible&&p.push(g,le,_e,O,ze.z,null)}}const ie=g.children;for(let le=0,_e=ie.length;le<_e;le++)An(ie[le],P,O,B)}function xi(g,P,O,B){const L=g.opaque,ie=g.transmissive,le=g.transparent;u.setupLightsView(O),re===!0&&te.setGlobalState(y.clippingPlanes,O),B&&ye.viewport(C.copy(B)),L.length>0&&kt(L,P,O),ie.length>0&&kt(ie,P,O),le.length>0&&kt(le,P,O),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Mi(g,P,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Gn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Ii:on,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ie=u.state.transmissionRenderTarget[B.id],le=B.viewport||C;ie.setSize(le.z,le.w);const _e=y.getRenderTarget();y.setRenderTarget(ie),y.getClearColor(X),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),ge&&be.render(O);const ve=y.toneMapping;y.toneMapping=En;const Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),re===!0&&te.setGlobalState(y.clippingPlanes,B),kt(g,O,B),E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let xe=0,We=P.length;xe<We;xe++){const je=P[xe],rt=je.object,gt=je.geometry,$e=je.material,Me=je.group;if($e.side===qt&&rt.layers.test(B.layers)){const Nt=$e.side;$e.side=Rt,$e.needsUpdate=!0,Si(rt,O,B,gt,$e,Me),$e.side=Nt,$e.needsUpdate=!0,Ne=!0}}Ne===!0&&(E.updateMultisampleRenderTarget(ie),E.updateRenderTargetMipmap(ie))}y.setRenderTarget(_e),y.setClearColor(X,j),Pe!==void 0&&(B.viewport=Pe),y.toneMapping=ve}function kt(g,P,O){const B=P.isScene===!0?P.overrideMaterial:null;for(let L=0,ie=g.length;L<ie;L++){const le=g[L],_e=le.object,ve=le.geometry,Pe=B===null?le.material:B,Ne=le.group;_e.layers.test(O.layers)&&Si(_e,P,O,ve,Pe,Ne)}}function Si(g,P,O,B,L,ie){g.onBeforeRender(y,P,O,B,L,ie),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),L.onBeforeRender(y,P,O,B,g,ie),L.transparent===!0&&L.side===qt&&L.forceSinglePass===!1?(L.side=Rt,L.needsUpdate=!0,y.renderBufferDirect(O,P,B,L,g,ie),L.side=yn,L.needsUpdate=!0,y.renderBufferDirect(O,P,B,L,g,ie),L.side=qt):y.renderBufferDirect(O,P,B,L,g,ie),g.onAfterRender(y,P,O,B,L,ie)}function un(g,P,O){P.isScene!==!0&&(P=st);const B=Te.get(g),L=u.state.lights,ie=u.state.shadowsArray,le=L.state.version,_e=Se.getParameters(g,L.state,ie,P,O),ve=Se.getProgramCacheKey(_e);let Pe=B.programs;B.environment=g.isMeshStandardMaterial?P.environment:null,B.fog=P.fog,B.envMap=(g.isMeshStandardMaterial?F:_).get(g.envMap||B.environment),B.envMapRotation=B.environment!==null&&g.envMap===null?P.environmentRotation:g.envMapRotation,Pe===void 0&&(g.addEventListener("dispose",pe),Pe=new Map,B.programs=Pe);let Ne=Pe.get(ve);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===le)return Wt(g,_e),Ne}else _e.uniforms=Se.getUniforms(g),g.onBeforeCompile(_e,y),Ne=Se.acquireProgram(_e,ve),Pe.set(ve,Ne),B.uniforms=_e.uniforms;const xe=B.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(xe.clippingPlanes=te.uniform),Wt(g,_e),B.needsLights=Hi(g),B.lightsStateVersion=le,B.needsLights&&(xe.ambientLightColor.value=L.state.ambient,xe.lightProbe.value=L.state.probe,xe.directionalLights.value=L.state.directional,xe.directionalLightShadows.value=L.state.directionalShadow,xe.spotLights.value=L.state.spot,xe.spotLightShadows.value=L.state.spotShadow,xe.rectAreaLights.value=L.state.rectArea,xe.ltc_1.value=L.state.rectAreaLTC1,xe.ltc_2.value=L.state.rectAreaLTC2,xe.pointLights.value=L.state.point,xe.pointLightShadows.value=L.state.pointShadow,xe.hemisphereLights.value=L.state.hemi,xe.directionalShadowMap.value=L.state.directionalShadowMap,xe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xe.spotShadowMap.value=L.state.spotShadowMap,xe.spotLightMatrix.value=L.state.spotLightMatrix,xe.spotLightMap.value=L.state.spotLightMap,xe.pointShadowMap.value=L.state.pointShadowMap,xe.pointShadowMatrix.value=L.state.pointShadowMatrix),B.currentProgram=Ne,B.uniformsList=null,Ne}function kn(g){if(g.uniformsList===null){const P=g.currentProgram.getUniforms();g.uniformsList=gr.seqWithValue(P.seq,g.uniforms)}return g.uniformsList}function Wt(g,P){const O=Te.get(g);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.batchingColor=P.batchingColor,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.instancingMorph=P.instancingMorph,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function It(g,P,O,B,L){P.isScene!==!0&&(P=st),E.resetTextureUnits();const ie=P.fog,le=B.isMeshStandardMaterial?P.environment:null,_e=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:mi,ve=(B.isMeshStandardMaterial?F:_).get(B.envMap||le),Pe=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ne=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),xe=!!O.morphAttributes.position,We=!!O.morphAttributes.normal,je=!!O.morphAttributes.color;let rt=En;B.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(rt=y.toneMapping);const gt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=gt!==void 0?gt.length:0,Me=Te.get(B),Nt=u.state.lights;if(re===!0&&(ce===!0||g!==x)){const qe=g===x&&B.id===S;te.setState(B,g,qe)}let De=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Nt.state.version||Me.outputColorSpace!==_e||L.isBatchedMesh&&Me.batching===!1||!L.isBatchedMesh&&Me.batching===!0||L.isBatchedMesh&&Me.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Me.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Me.instancing===!1||!L.isInstancedMesh&&Me.instancing===!0||L.isSkinnedMesh&&Me.skinning===!1||!L.isSkinnedMesh&&Me.skinning===!0||L.isInstancedMesh&&Me.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Me.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Me.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Me.instancingMorph===!1&&L.morphTexture!==null||Me.envMap!==ve||B.fog===!0&&Me.fog!==ie||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Pe||Me.vertexTangents!==Ne||Me.morphTargets!==xe||Me.morphNormals!==We||Me.morphColors!==je||Me.toneMapping!==rt||Me.morphTargetsCount!==$e)&&(De=!0):(De=!0,Me.__version=B.version);let vt=Me.currentProgram;De===!0&&(vt=un(B,P,L));let hn=!1,ot=!1,fn=!1;const me=vt.getUniforms(),Ue=Me.uniforms;if(ye.useProgram(vt.program)&&(hn=!0,ot=!0,fn=!0),B.id!==S&&(S=B.id,ot=!0),hn||x!==g){ye.buffers.depth.getReversed()?(oe.copy(g.projectionMatrix),yl(oe),Tl(oe),me.setValue(D,"projectionMatrix",oe)):me.setValue(D,"projectionMatrix",g.projectionMatrix),me.setValue(D,"viewMatrix",g.matrixWorldInverse);const mt=me.map.cameraPosition;mt!==void 0&&mt.setValue(D,we.setFromMatrixPosition(g.matrixWorld)),Le.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&me.setValue(D,"isOrthographic",g.isOrthographicCamera===!0),x!==g&&(x=g,ot=!0,fn=!0)}if(L.isSkinnedMesh){me.setOptional(D,L,"bindMatrix"),me.setOptional(D,L,"bindMatrixInverse");const qe=L.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),me.setValue(D,"boneTexture",qe.boneTexture,E))}L.isBatchedMesh&&(me.setOptional(D,L,"batchingTexture"),me.setValue(D,"batchingTexture",L._matricesTexture,E),me.setOptional(D,L,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",L._indirectTexture,E),me.setOptional(D,L,"batchingColorTexture"),L._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",L._colorsTexture,E));const et=O.morphAttributes;if((et.position!==void 0||et.normal!==void 0||et.color!==void 0)&&Ce.update(L,O,vt),(ot||Me.receiveShadow!==L.receiveShadow)&&(Me.receiveShadow=L.receiveShadow,me.setValue(D,"receiveShadow",L.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ue.envMap.value=ve,Ue.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&P.environment!==null&&(Ue.envMapIntensity.value=P.environmentIntensity),ot&&(me.setValue(D,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&bn(Ue,fn),ie&&B.fog===!0&&J.refreshFogUniforms(Ue,ie),J.refreshMaterialUniforms(Ue,B,V,ee,u.state.transmissionRenderTarget[g.id]),gr.upload(D,kn(Me),Ue,E)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gr.upload(D,kn(Me),Ue,E),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&me.setValue(D,"center",L.center),me.setValue(D,"modelViewMatrix",L.modelViewMatrix),me.setValue(D,"normalMatrix",L.normalMatrix),me.setValue(D,"modelMatrix",L.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const qe=B.uniformsGroups;for(let mt=0,Tt=qe.length;mt<Tt;mt++){const dn=qe[mt];T.update(dn,vt),T.bind(dn,vt)}}return vt}function bn(g,P){g.ambientLightColor.needsUpdate=P,g.lightProbe.needsUpdate=P,g.directionalLights.needsUpdate=P,g.directionalLightShadows.needsUpdate=P,g.pointLights.needsUpdate=P,g.pointLightShadows.needsUpdate=P,g.spotLights.needsUpdate=P,g.spotLightShadows.needsUpdate=P,g.rectAreaLights.needsUpdate=P,g.hemisphereLights.needsUpdate=P}function Hi(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(g,P,O){Te.get(g.texture).__webglTexture=P,Te.get(g.depthTexture).__webglTexture=O;const B=Te.get(g);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,P){const O=Te.get(g);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(g,P=0,O=0){N=g,w=P,R=O;let B=!0,L=null,ie=!1,le=!1;if(g){const ve=Te.get(g);if(ve.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(ve.__webglFramebuffer===void 0)E.setupRenderTarget(g);else if(ve.__hasExternalTextures)E.rebindTextures(g,Te.get(g.texture).__webglTexture,Te.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const xe=g.depthTexture;if(ve.__boundDepthTexture!==xe){if(xe!==null&&Te.has(xe)&&(g.width!==xe.image.width||g.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(g)}}const Pe=g.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(le=!0);const Ne=Te.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ne[P])?L=Ne[P][O]:L=Ne[P],ie=!0):g.samples>0&&E.useMultisampledRTT(g)===!1?L=Te.get(g).__webglMultisampledFramebuffer:Array.isArray(Ne)?L=Ne[O]:L=Ne,C.copy(g.viewport),W.copy(g.scissor),H=g.scissorTest}else C.copy(Ee).multiplyScalar(V).floor(),W.copy(Fe).multiplyScalar(V).floor(),H=Xe;if(ye.bindFramebuffer(D.FRAMEBUFFER,L)&&B&&ye.drawBuffers(g,L),ye.viewport(C),ye.scissor(W),ye.setScissorTest(H),ie){const ve=Te.get(g.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ve.__webglTexture,O)}else if(le){const ve=Te.get(g.texture),Pe=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,O||0,Pe)}S=-1},this.readRenderTargetPixels=function(g,P,O,B,L,ie,le){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){ye.bindFramebuffer(D.FRAMEBUFFER,_e);try{const ve=g.texture,Pe=ve.format,Ne=ve.type;if(!Le.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=g.width-B&&O>=0&&O<=g.height-L&&D.readPixels(P,O,B,L,Ie.convert(Pe),Ie.convert(Ne),ie)}finally{const ve=N!==null?Te.get(N).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(g,P,O,B,L,ie,le){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&le!==void 0&&(_e=_e[le]),_e){const ve=g.texture,Pe=ve.format,Ne=ve.type;if(!Le.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=g.width-B&&O>=0&&O<=g.height-L){ye.bindFramebuffer(D.FRAMEBUFFER,_e);const xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),D.readPixels(P,O,B,L,Ie.convert(Pe),Ie.convert(Ne),0);const We=N!==null?Te.get(N).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,We);const je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await El(D,je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(xe),D.deleteSync(je),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,P=null,O=0){g.isTexture!==!0&&(Li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,g=arguments[1]);const B=Math.pow(2,-O),L=Math.floor(g.image.width*B),ie=Math.floor(g.image.height*B),le=P!==null?P.x:0,_e=P!==null?P.y:0;E.setTexture2D(g,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,le,_e,L,ie),ye.unbindTexture()},this.copyTextureToTexture=function(g,P,O=null,B=null,L=0){g.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,g=arguments[1],P=arguments[2],L=arguments[3]||0,O=null);let ie,le,_e,ve,Pe,Ne,xe,We,je;const rt=g.isCompressedTexture?g.mipmaps[L]:g.image;O!==null?(ie=O.max.x-O.min.x,le=O.max.y-O.min.y,_e=O.isBox3?O.max.z-O.min.z:1,ve=O.min.x,Pe=O.min.y,Ne=O.isBox3?O.min.z:0):(ie=rt.width,le=rt.height,_e=rt.depth||1,ve=0,Pe=0,Ne=0),B!==null?(xe=B.x,We=B.y,je=B.z):(xe=0,We=0,je=0);const gt=Ie.convert(P.format),$e=Ie.convert(P.type);let Me;P.isData3DTexture?(E.setTexture3D(P,0),Me=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),Me=D.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),Me=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const Nt=D.getParameter(D.UNPACK_ROW_LENGTH),De=D.getParameter(D.UNPACK_IMAGE_HEIGHT),vt=D.getParameter(D.UNPACK_SKIP_PIXELS),hn=D.getParameter(D.UNPACK_SKIP_ROWS),ot=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne);const fn=g.isDataArrayTexture||g.isData3DTexture,me=P.isDataArrayTexture||P.isData3DTexture;if(g.isRenderTargetTexture||g.isDepthTexture){const Ue=Te.get(g),et=Te.get(P),qe=Te.get(Ue.__renderTarget),mt=Te.get(et.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,qe.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Tt=0;Tt<_e;Tt++)fn&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(g).__webglTexture,L,Ne+Tt),g.isDepthTexture?(me&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.get(P).__webglTexture,L,je+Tt),D.blitFramebuffer(ve,Pe,ie,le,xe,We,ie,le,D.DEPTH_BUFFER_BIT,D.NEAREST)):me?D.copyTexSubImage3D(Me,L,xe,We,je+Tt,ve,Pe,ie,le):D.copyTexSubImage2D(Me,L,xe,We,je+Tt,ve,Pe,ie,le);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else me?g.isDataTexture||g.isData3DTexture?D.texSubImage3D(Me,L,xe,We,je,ie,le,_e,gt,$e,rt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,L,xe,We,je,ie,le,_e,gt,rt.data):D.texSubImage3D(Me,L,xe,We,je,ie,le,_e,gt,$e,rt):g.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,L,xe,We,ie,le,gt,$e,rt.data):g.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,L,xe,We,rt.width,rt.height,gt,rt.data):D.texSubImage2D(D.TEXTURE_2D,L,xe,We,ie,le,gt,$e,rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,De),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,hn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ot),L===0&&P.generateMipmaps&&D.generateMipmap(Me),ye.unbindTexture()},this.copyTextureToTexture3D=function(g,P,O=null,B=null,L=0){return g.isTexture!==!0&&(Li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,g=arguments[2],P=arguments[3],L=arguments[4]||0),Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(g,P,O,B,L)},this.initRenderTarget=function(g){Te.get(g).__webglFramebuffer===void 0&&E.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?E.setTextureCube(g,0):g.isData3DTexture?E.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?E.setTexture2DArray(g,0):E.setTexture2D(g,0),ye.unbindTexture()},this.resetState=function(){w=0,R=0,N=null,ye.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Fd extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Za extends yt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ks);const ur={stepMs:1500,easeIn:100,easeOut:100,reach:65,springHz:22,pitch:87,ballSize:38,edgeLead:44,wrinkle:72,creaseScale:23,segments:11,tumble:360,idleSpin:35,lightAngle:267,ambient:50,paper:"#F4F4F4",glow:8,shadow:40,hover:50},Ci=8,hr=1024;function Od(i,e){const t=i.trim();if(t[0]!=="#")return e;let n=t.slice(1);n.length===3&&(n=n.split("").map(s=>s+s).join(""));const r=parseInt(n.slice(0,6),16);return isNaN(r)?e:[r>>16&255,r>>8&255,r&255]}function es(i){const e=Math.sin(i*12.9898+4.1414)*43758.5453;return e-Math.floor(e)}function Bd(i,e,t){if(t<=0)return 0;if(t>=1)return 1;const n=l=>3*(1-l)*(1-l)*l*i+3*(1-l)*l*l*e+l*l*l,r=l=>3*(1-l)*l*l+l*l*l;let s=0,o=1,a=t;for(let l=0;l<26;l++)a=(s+o)/2,n(a)<t?s=a:o=a;return r(a)}function ts(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/Math.max(1e-4,e-i)));return n*n*(3-2*n)}const Pi=(i,e)=>(i%e+e)%e,zd=`
vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0*floor(p*ns.z*ns.z);
  vec4 x_ = floor(j*ns.z);
  vec4 y_ = floor(j - 7.0*x_);
  vec4 x = x_*ns.x + ns.yyyy;
  vec4 y = y_*ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m*m;
  return 42.0*dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float ridged(vec3 p){
  float s = 0.0; float a = 0.5; float f = 1.0;
  for (int o = 0; o < 3; o++) { float n = 1.0 - abs(snoise(p*f)); s += a*n*n; f *= 2.03; a *= 0.5; }
  return s / 0.875;
}
`,Hd=`
uniform vec2 uSize;
uniform float uC;
uniform float uAmp;
uniform float uRadius;
uniform float uSeed;
uniform vec3 uAxis;
uniform float uSpin;
uniform float uEdgeLead;
uniform float uFreq;
uniform float uWrinkle;
uniform vec2 uRot;
uniform float uBall;
varying vec2 vUv;
varying vec3 vPos;
${zd}
mat3 axisRot(vec3 a, float g){
  float s = sin(g); float c = cos(g); float t = 1.0 - c;
  return mat3(t*a.x*a.x + c, t*a.x*a.y + s*a.z, t*a.x*a.z - s*a.y,
              t*a.x*a.y - s*a.z, t*a.y*a.y + c, t*a.y*a.z + s*a.x,
              t*a.x*a.z + s*a.y, t*a.y*a.z - s*a.x, t*a.z*a.z + c);
}
void main(){
  vUv = uv;
  vec2 q = uv - 0.5;
  float edge = max(abs(q.x), abs(q.y)) * 2.0;
  float lead = clamp(uEdgeLead, 0.0, 0.9);
  float cv = clamp((uC - (1.0 - edge) * lead) / (1.0 - lead), 0.0, 1.0);
  cv = cv * cv * (3.0 - 2.0 * cv);
  float asp = uSize.x / max(uSize.y, 1.0);
  vec3 cq = vec3(q * vec2(asp, 1.0) * uFreq * 1.7, uSeed * 9.0);
  float crease = ridged(cq) - 0.55;
  float fine = ridged(cq * 2.4 + vec3(5.0)) - 0.55;
  vec2 warp = vec2(snoise(cq * 0.55 + vec3(3.1)), snoise(cq * 0.55 + vec3(7.7)));
  float shrink = 1.0 - 0.18 * cv * (0.5 + 0.5 * edge);
  vec3 sheetP = vec3(q * uSize * shrink + warp * 0.09 * uSize.y * cv,
                     (crease * 0.8 + fine * 0.4) * uAmp * uSize.y * 0.6 * cv);
  float w = sin(cv * 3.14159265) * uWrinkle;
  vec3 wq = vec3(q * 3.2, uSeed * 9.0);
  sheetP += w * vec3(snoise(wq) * 0.04 * uSize.y,
                     snoise(wq + vec3(17.0)) * 0.04 * uSize.y,
                     (ridged(wq * 1.4) - 0.55) * 0.2 * uSize.y);
  vec2 qn = vec2(q.x * 2.0 * asp, q.y * 2.0);
  float rr = length(qn) / length(vec2(asp, 1.0));
  float th = rr * 2.95;
  float ph = atan(qn.y, qn.x + 0.0001);
  vec3 dir = vec3(sin(th) * cos(ph), sin(th) * sin(ph), cos(th));
  vec3 sp = dir * uFreq + vec3(uSeed * 7.13, uSeed * 3.71, uSeed * 5.17);
  float cr = ridged(sp) - 0.55;
  float lump = snoise(dir * 1.3 + vec3(uSeed * 11.0));
  vec3 ballP = dir * uRadius * (1.0 + uAmp * cr + 0.14 * lump);
  float bv = smoothstep(0.0, 1.0, clamp(uBall, 0.0, 1.0));
  vec3 p = mix(sheetP, ballP, bv);
  p = axisRot(uAxis, uSpin) * p;
  float ry = uRot.x; float rx = uRot.y;
  p = vec3(p.x * cos(ry) + p.z * sin(ry), p.y, -p.x * sin(ry) + p.z * cos(ry));
  p = vec3(p.x, p.y * cos(rx) - p.z * sin(rx), p.y * sin(rx) + p.z * cos(rx));
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vPos = mv.xyz;
  gl_Position = projectionMatrix * mv;
}
`,Gd=`
uniform sampler2D uMap;
uniform vec3 uPaper;
uniform vec3 uLight;
uniform float uAmbient;
uniform vec2 uSize;
uniform float uCorner;
varying vec2 vUv;
varying vec3 vPos;
void main(){
  float rc = min(uCorner, 0.5 * min(uSize.x, uSize.y));
  if (rc > 0.0) {
    vec2 bq = abs((vUv - 0.5) * uSize) - (0.5 * uSize - vec2(rc));
    float sd = length(max(bq, 0.0)) + min(max(bq.x, bq.y), 0.0) - rc;
    if (sd > 0.0) discard;
  }
  vec3 n = normalize(cross(dFdx(vPos), dFdy(vPos)));
  if (n.z < 0.0) n = -n;
  vec3 L = normalize(uLight);
  vec3 base = gl_FrontFacing ? texture2D(uMap, vUv).rgb : uPaper;
  float lit = uAmbient + (1.0 - uAmbient) * max(dot(n, L), 0.0);
  float ref = uAmbient + (1.0 - uAmbient) * max(L.z, 0.0001);
  float shade = clamp(lit / max(ref, 0.0001), 0.0, 1.3);
  vec3 hv = normalize(L + vec3(0.0, 0.0, 1.0));
  float spec = pow(max(dot(n, hv), 0.0), 40.0) * 0.08;
  gl_FragColor = vec4(min(base * shade + vec3(spec), vec3(1.0)), 1.0);
}
`;function Vd(){try{const i=document.createElement("canvas");return!!(i.getContext("webgl2")||i.getContext("webgl"))}catch{return!1}}const Xd=pn.forwardRef(function({images:e,itemWidth:t=507,itemHeight:n=400,speed:r=15,hold:s=500,crumple:o=100,gap:a=-150,radius:l=10,bounce:c=0,paused:h=!1,onIndexChange:d,onCardClick:f,onInteract:m,onUnsupported:v,className:M,style:p},u){const b=pn.useRef(null),A=pn.useRef(null),y=pn.useRef(null),G=pn.useRef(null),w=pn.useRef({images:e,itemWidth:t,itemHeight:n,speed:r,hold:s,crumple:o,gap:a,radius:l,bounce:c,paused:h,onIndexChange:d,onCardClick:f,onInteract:m});return w.current={images:e,itemWidth:t,itemHeight:n,speed:r,hold:s,crumple:o,gap:a,radius:l,bounce:c,paused:h,onIndexChange:d,onCardClick:f,onInteract:m},pn.useImperativeHandle(u,()=>({next:()=>G.current={step:1},prev:()=>G.current={step:-1},goTo:R=>G.current={to:R}})),pn.useEffect(()=>{const R=b.current,N=A.current;if(!R||!N)return;if(!Vd()){v==null||v();return}const S=window.matchMedia("(prefers-reduced-motion: reduce)");let x=S.matches;const C=()=>x=S.matches;S.addEventListener("change",C);const W=document.createElement("canvas");Object.assign(W.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),N.appendChild(W);let H;try{H=new Nd({canvas:W,antialias:!0,alpha:!0,premultipliedAlpha:!0})}catch{W.remove(),v==null||v();return}H.setClearColor(0,0),H.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const X=new Fd,j=new Ao(-600,600,400,-400,1,12e4);j.position.set(0,0,6e4);let k=1,ee=1;const V=()=>{k=Math.max(1,R.offsetWidth),ee=Math.max(1,R.offsetHeight),H.setSize(k,ee,!1),j.left=-k/2,j.right=k/2,j.top=ee/2,j.bottom=-ee/2,j.updateProjectionMatrix()};V();const ae=new ResizeObserver(V);ae.observe(R);let ue=!0;const Ee=new IntersectionObserver(([T])=>{ue=T.isIntersecting,ue&&!ct&&(D=-1,ct=requestAnimationFrame(Ze))});Ee.observe(R);const Fe=[];let Xe=null,Y="";const re=(T,$)=>{const U=Math.max(4,Math.round(T)),I=Math.max(4,Math.round(U/Math.max(.2,$))),Q=`${U}x${I}`;if(Q===Y&&Xe)return;const ne=Xe;Xe=new zi(1,1,U,I),Y=Q;for(const pe of Fe)pe.geometry=Xe;ne==null||ne.dispose()};for(let T=0;T<Ci;T++){const $=new cn({uniforms:{uMap:{value:null},uSize:{value:new Qe(300,380)},uC:{value:0},uAmp:{value:.3},uRadius:{value:70},uSeed:{value:0},uAxis:{value:new z(0,1,0)},uSpin:{value:0},uEdgeLead:{value:.35},uFreq:{value:2.4},uWrinkle:{value:.6},uRot:{value:new Qe(0,0)},uBall:{value:0},uPaper:{value:new z(.95,.95,.95)},uLight:{value:new z(-.4,.4,.82)},uAmbient:{value:.5},uCorner:{value:0}},vertexShader:Hd,fragmentShader:Gd,side:qt}),U=new Kt(new Tn,$);U.frustumCulled=!1,U.visible=!1,X.add(U),Fe.push(U)}let ce=null,oe="";const Re=(T,$)=>{const U=`${T}x${$}`;if(U===oe&&ce)return ce;const I=document.createElement("canvas");I.width=T,I.height=$;const Q=I.getContext("2d");return Q&&(Q.fillStyle=ur.paper,Q.fillRect(0,0,T,$)),ce==null||ce.dispose(),ce=new Za(I),ce.colorSpace=Yt,oe=U,ce},we=new Map,ze=(T,$,U)=>{var ne;let I=we.get(T);if(!I){const pe={ready:!1,failed:!1,img:null,tex:null,sig:""},He=new Image;He.crossOrigin="anonymous",He.onload=()=>{pe.img=He,pe.ready=!0},He.onerror=()=>pe.failed=!0,He.src=T,we.set(T,pe),I=pe}if(!I.ready||I.failed||!I.img)return null;const Q=`${$}x${U}`;if(I.sig!==Q){const pe=document.createElement("canvas");pe.width=$,pe.height=U;const He=pe.getContext("2d");if(He){He.fillStyle=ur.paper,He.fillRect(0,0,$,U);const at=I.img.naturalWidth||$,ke=I.img.naturalHeight||U,ut=Math.max($/at,U/ke);He.drawImage(I.img,($-at*ut)/2,(U-ke*ut)/2,at*ut,ke*ut)}(ne=I.tex)==null||ne.dispose(),I.tex=new Za(pe),I.tex.colorSpace=Yt,I.tex.anisotropy=H.capabilities.getMaxAnisotropy(),I.sig=Q}return I.tex},st=T=>{if(we.size<=T.length*2)return;const $=new Set(T);we.forEach((U,I)=>{var Q;$.has(I)||((Q=U.tex)==null||Q.dispose(),we.delete(I))})},ge={x:0,y:0,tx:0,ty:0,over:0,tOver:0,down:0,tDown:0};let it=0,D=-1,ct=0,Ae=0,Le=NaN,ye=0;const Ke=new Map;let Te=[],E=0,_=-1e9,F=1,K=0,Z=0,q=1,Se=-1;const J={on:!1,id:-1,x0:0,y0:0,o0:0,moved:!1,ox:0},he=()=>{_=performance.now(),Z>0&&Z<1&&(it=(K+1)*q+1e-6,Ae-=1-Z,Z=0)},Ve=()=>{var T,$;return($=(T=w.current).onInteract)==null?void 0:$.call(T)},te=T=>{T.pointerType==="mouse"&&(ge.tx=T.offsetX/k*2-1,ge.ty=-(T.offsetY/ee*2-1),ge.tOver=1)},fe=()=>ge.tOver=0,be=T=>{T.button===0&&(ge.tDown=1,he(),J.on=!0,J.id=T.pointerId,J.x0=T.clientX,J.y0=T.clientY,J.o0=Ae,J.moved=!1,J.ox=T.offsetX)},Ce=T=>{if(!J.on||T.pointerId!==J.id)return;_=performance.now();const $=T.clientX-J.x0;Math.abs($)>6&&(J.moved=!0),Ae=J.o0-$/Math.max(1,F)},de=T=>{var $,U;if(!(!J.on||T.pointerId!==J.id)){if(ge.tDown=0,J.on=!1,_=performance.now(),Ve(),!J.moved){Ae=J.o0;const I=J.ox-k/2;let Q=null;for(const pe of Te){const He=Math.abs(I-pe.s);He<=pe.ext&&(!Q||He<Math.abs(I-Q.s))&&(Q=pe)}const ne=Q?Q.i-Math.round(E):Math.abs(I)<F*.5?0:Math.sign(I);if(ne===0&&Q){const pe=w.current.images.length;pe>0&&((U=($=w.current).onCardClick)==null||U.call($,Pi(Q.i,pe)))}Ae=Math.round(Ae)+ne;return}Ae+=Math.max(-2,Math.min(2,ye*.12))}},Ge=T=>{!J.on||T.pointerId!==J.id||(J.on=!1,ge.tDown=0,Ae=J.moved?Math.round(Ae):J.o0)},Ie=T=>{if(Math.abs(T.deltaX)<=Math.abs(T.deltaY))return;T.preventDefault(),he(),Ve();const $=T.deltaMode===1?16:T.deltaMode===2?k:1;Ae+=T.deltaX*$*.006};R.addEventListener("pointermove",te),R.addEventListener("pointerleave",fe),R.addEventListener("pointerdown",be),R.addEventListener("wheel",Ie,{passive:!1}),window.addEventListener("pointermove",Ce),window.addEventListener("pointerup",de),window.addEventListener("pointercancel",Ge);const Ze=T=>{var fn;if(!ue){ct=0;return}ct=requestAnimationFrame(Ze);const $=D<0?0:Math.min((T-D)/1e3,1/20);D=T;const U=w.current,I=ur,Q=U.images,ne=Q.length;if(ne===0){H.clear();return}st(Q);const pe=G.current;if(pe)if(G.current=null,he(),"step"in pe)Ae=Math.round(Ae)+pe.step;else{const me=Math.round(E);let Ue=Pi(pe.to-Pi(me,ne),ne);Ue>ne/2&&(Ue-=ne),Ae=Math.round(Ae)+Ue}const He=J.on||T-_<1500,at=x||He||U.paused?0:Math.max(0,U.speed)/50;it+=$*at,!J.on&&T-_>140&&(Ae=Math.round(Ae));const ke=x?0:I.hover/50,ut=1-Math.exp(-$*6);ge.x+=(ge.tx-ge.x)*ut,ge.y+=(ge.ty-ge.y)*ut,ge.over+=(ge.tOver-ge.over)*ut,ge.down+=(ge.tDown-ge.down)*(1-Math.exp(-$*9));const St=ge.over*ke,vi=I.stepMs/1e3,Vn=Math.max(0,U.hold/1e3),Ut=vi+Vn,An=Math.floor(it/Ut),xi=it-An*Ut,Mi=xi<Vn?0:Bd(I.easeIn/100,I.easeOut/100,(xi-Vn)/vi);K=An,Z=Mi,q=Ut;const kt=An+Mi+Ae;if(E=kt,Number.isNaN(Le)||x)Le=kt,ye=0;else if(J.on){const me=Le;Le+=(kt-Le)*(1-Math.exp(-$*28)),$>0&&(ye=(Le-me)/$)}else if($>0){const me=Math.PI*2*(I.springHz/10),Ue=1-Math.min(100,Math.max(0,U.bounce))/100*.85,et=$/4;for(let qe=0;qe<4;qe++)ye+=(me*me*(kt-Le)-2*Ue*me*ye)*et,Le+=ye*et}const Si=Le,un=Pi(Math.round(kt),ne);un!==Se&&(Se=un,(fn=U.onIndexChange)==null||fn.call(U,un));const kn=Math.min(ee/800,k*.78/U.itemWidth),Wt=Math.max(20,U.itemHeight*kn),It=Math.max(20,U.itemWidth*kn),bn=It/Wt,Hi=It*I.pitch/100;F=Hi;const g=Wt*I.ballSize/200;re(I.segments,bn);const P=bn>=1?hr:Math.round(hr*bn),O=bn>=1?Math.round(hr/bn):hr,B=Math.max(16,Math.round(P/32)*32),L=Math.max(16,Math.round(O/32)*32),ie=me=>ze(Q[Pi(me,ne)],B,L)??Re(B,L),le=Od(I.paper,[244,244,244]),_e=I.lightAngle*Math.PI/180,ve=Math.cos(_e)*.55+ge.x*.45*St,Pe=Math.sin(_e)*.55+ge.y*.45*St,Ne=Math.max(0,U.crumple)/100*.55,xe=I.reach/100,We=Math.floor(Si);let je=1;const rt=It/2,gt=U.gap*kn,$e=Math.min(100,Math.max(0,U.radius))/100*Math.min(It,Wt)/2,Me=Math.PI*2*(I.springHz/10)*1.6,Nt=.55-Math.min(100,Math.max(0,U.bounce))/100*.4,De=[];let vt=0;for(let me=0;me<Ci;me++){const Ue=We-3+me,et=Ue-Si,qe=Math.abs(et);let mt=ts(0,xe,qe);mt=Math.min(1,mt+ge.down*.12*ke*(1-ts(0,.5,qe)));const Tt=ts(1.35,2.35,qe),dn=rt*(1-.12*mt)*(1-Tt)+g*1.3*Tt,Wn=et*Hi;let Je=Ke.get(Ue);if(Je||(Je={s:Wn,v:0},Ke.set(Ue,Je)),x)Je.s=Wn,Je.v=0;else if($>0){const Ei=$/4;for(let yi=0;yi<4;yi++)Je.v+=(Me*Me*(Wn-Je.s)-2*Nt*Me*Je.v)*Ei,Je.s+=Je.v*Ei}De.push({i:Ue,ad:qe,c:mt,ball:Tt,ext:dn,b:Je,z:0}),qe<De[vt].ad&&(vt=me)}for(let me=vt+1;me<Ci;me++){const Ue=De[me-1],et=De[me],qe=Ue.b.s+Ue.ext+et.ext+gt;et.b.s<qe&&(et.b.s=qe,et.b.v=Math.max(et.b.v,Ue.b.v))}for(let me=vt-1;me>=0;me--){const Ue=De[me+1],et=De[me],qe=Ue.b.s-Ue.ext-et.ext-gt;et.b.s>qe&&(et.b.s=qe,et.b.v=Math.min(et.b.v,Ue.b.v))}Ke.forEach((me,Ue)=>{(Ue<We-3||Ue>We-3+Ci-1)&&Ke.delete(Ue)}),Te=De.map(me=>({i:me.i,s:me.b.s,ext:me.ext}));const hn=Wt*1.6;De.map((me,Ue)=>Ue).sort((me,Ue)=>De[me].ad-De[Ue].ad).forEach((me,Ue)=>De[me].z=-Ue*hn);for(let me=0;me<Ci;me++){const Ue=Fe[me],{i:et,c:qe,ball:mt,z:Tt}=De[me],dn=De[me].b.s;je=Math.min(je,qe);const Wn=Math.max(g*1.6,It*.7*(1-mt)+g*1.6*mt);if(dn-Wn>k/2||dn+Wn<-k/2){Ue.visible=!1;continue}Ue.visible=!0,Ue.position.set(dn,0,Tt);const Je=Ue.material.uniforms,Ei=es(et),yi=es(et+91.7),Lo=es(et+213.3);Je.uMap.value=ie(et),Je.uSize.value.set(It,Wt),Je.uC.value=qe,Je.uAmp.value=Ne,Je.uRadius.value=g,Je.uSeed.value=Ei*10,Je.uAxis.value.set(yi-.5,Lo-.5,(Ei-.5)*.6).normalize(),Je.uBall.value=mt,Je.uSpin.value=qe*(.5+yi*.4)+mt*(I.tumble*Math.PI/180+it*I.idleSpin*Math.PI/180)+qe*ge.x*.6*St,Je.uEdgeLead.value=I.edgeLead/100,Je.uFreq.value=I.creaseScale/10,Je.uWrinkle.value=I.wrinkle/100,Je.uRot.value.set(ge.x*.32*St*(1-qe),-ge.y*.32*St*(1-qe)),Je.uPaper.value.set(le[0]/255,le[1]/255,le[2]/255),Je.uLight.value.set(ve,Pe,.82),Je.uAmbient.value=Math.min(.95,Math.max(0,I.ambient/100)),Je.uCorner.value=$e}const ot=y.current;ot&&(ot.style.left=`${k/2-It*.6}px`,ot.style.top=`${ee/2-Wt*.4}px`,ot.style.width=`${It*1.2}px`,ot.style.height=`${Wt}px`,ot.style.filter=`blur(${Math.round(It*.15)}px)`,ot.style.opacity=String(I.shadow/100*(1-je))),H.render(X,j)};return ct=requestAnimationFrame(Ze),()=>{cancelAnimationFrame(ct),ct=0,ae.disconnect(),Ee.disconnect(),S.removeEventListener("change",C),R.removeEventListener("pointermove",te),R.removeEventListener("pointerleave",fe),R.removeEventListener("pointerdown",be),R.removeEventListener("wheel",Ie),window.removeEventListener("pointermove",Ce),window.removeEventListener("pointerup",de),window.removeEventListener("pointercancel",Ge);for(const T of Fe)X.remove(T),T.material.dispose();Xe==null||Xe.dispose(),ce==null||ce.dispose(),we.forEach(T=>{var $;return($=T.tex)==null?void 0:$.dispose()}),H.dispose(),W.remove()}},[]),Gi.jsxs("div",{ref:b,className:M,style:{...p,position:"relative",overflow:"hidden",isolation:"isolate",touchAction:"pan-y",cursor:"grab"},children:[Gi.jsx("div",{"aria-hidden":!0,style:{position:"absolute",inset:0,pointerEvents:"none",background:`radial-gradient(ellipse 48% 58% at 50% 48%, rgba(255,255,255,${ur.glow/100}) 0%, rgba(255,255,255,0) 100%)`}}),Gi.jsx("div",{ref:y,"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",borderRadius:"50%",background:"radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)",opacity:0}}),Gi.jsx("div",{ref:A,"aria-hidden":!0,style:{position:"absolute",inset:0}})]})});export{Xd as default};
