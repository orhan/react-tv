!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react-tv"),require("react")):"function"==typeof define&&define.amd?define(["exports","react-tv","react"],e):e(t.ReactTV={},t.ReactTV,t._react)}(this,function(t,r,l){"use strict";function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function n(t,e){return t(e={exports:{}},e.exports),e.exports}r=r&&r.hasOwnProperty("default")?r.default:r,l=l&&l.hasOwnProperty("default")?l.default:l;var v=n(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),y=n(function(t){var e=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=e)}),b=(y.version,function(r,o,t){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(r),void 0===o)return r;switch(t){case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}),a=function(t){return"object"==typeof t?null!==t:"function"==typeof t},u=function(t){if(!a(t))throw TypeError(t+" is not an object!");return t},s=function(t){try{return!!t()}catch(t){return!0}},o=!s(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),i=v.document,c=a(i)&&a(i.createElement),f=function(t){return c?i.createElement(t):{}},p=!o&&!s(function(){return 7!=Object.defineProperty(f("div"),"a",{get:function(){return 7}}).a}),d=function(t,e){if(!a(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!a(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!a(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!a(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},h=Object.defineProperty,g={f:o?Object.defineProperty:function(t,e,n){if(u(t),e=d(e,!0),u(n),p)try{return h(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},_=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},P=o?function(t,e,n){return g.f(t,e,_(1,n))}:function(t,e,n){return t[e]=n,t},m={}.hasOwnProperty,w=function(t,e){return m.call(t,e)},O="prototype",E=function(t,e,n){var r,o,i,u=t&E.F,c=t&E.G,a=t&E.S,s=t&E.P,f=t&E.B,l=t&E.W,p=c?y:y[e]||(y[e]={}),d=p[O],h=c?v:a?v[e]:(v[e]||{})[O];for(r in c&&(n=e),n)(o=!u&&h&&void 0!==h[r])&&w(p,r)||(i=o?h[r]:n[r],p[r]=c&&"function"!=typeof h[r]?n[r]:f&&o?b(i,v):l&&h[r]==i?function(r){var t=function(t,e,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,e)}return new r(t,e,n)}return r.apply(this,arguments)};return t[O]=r[O],t}(i):s&&"function"==typeof i?b(Function.call,i):i,s&&((p.virtual||(p.virtual={}))[r]=i,t&E.R&&d&&!d[r]&&P(d,r,i)))};E.F=1,E.G=2,E.S=4,E.P=8,E.B=16,E.W=32,E.U=64,E.R=128;var S,j=E,F={}.toString,I=function(t){return F.call(t).slice(8,-1)},T=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==I(t)?t.split(""):Object(t)},M=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},x=function(t){return T(M(t))},L=Math.ceil,k=Math.floor,B=function(t){return isNaN(t=+t)?0:(0<t?k:L)(t)},C=Math.min,A=Math.max,H=Math.min,N=n(function(t){var e="__core-js_shared__",n=v[e]||(v[e]={});(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:y.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),D=0,R=Math.random(),K=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++D+R).toString(36))},z=N("keys"),W=function(t){return z[t]||(z[t]=K(t))},U=(S=!1,function(t,e,n){var r,o,i,u,c=x(t),a=0<(r=c.length)?C(B(r),9007199254740991):0,s=(i=a,(o=B(o=n))<0?A(o+i,0):H(o,i));if(S&&e!=e){for(;s<a;)if((u=c[s++])!=u)return!0}else for(;s<a;s++)if((S||s in c)&&c[s]===e)return S||s||0;return!S&&-1}),V=W("IE_PROTO"),G=function(t,e){var n,r=x(t),o=0,i=[];for(n in r)n!=V&&w(r,n)&&i.push(n);for(;e.length>o;)w(r,n=e[o++])&&(~U(i,n)||i.push(n));return i},q="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),J=Object.keys||function(t){return G(t,q)},Y={f:Object.getOwnPropertySymbols},Q={f:{}.propertyIsEnumerable},X=function(t){return Object(M(t))},Z=Object.assign,$=!Z||s(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=Z({},t)[n]||Object.keys(Z({},e)).join("")!=r})?function(t,e){for(var n=X(t),r=arguments.length,o=1,i=Y.f,u=Q.f;o<r;)for(var c,a=T(arguments[o++]),s=i?J(a).concat(i(a)):J(a),f=s.length,l=0;l<f;)u.call(a,c=s[l++])&&(n[c]=a[c]);return n}:Z;j(j.S+j.F,"Object",{assign:$});var tt=y.Object.assign,et=e(n(function(t){t.exports={default:tt,__esModule:!0}}));function nt(){}var rt=n(function(t){t.exports=function(){function t(t,e,n,r,o,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=nt,n.PropTypes=n}()}),ot=e(n(function(t,e){e.__esModule=!0,e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0!==e.length?1!==e.length?e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}}):e[0]:function(t){return t}}})),it=n(function(t,e){e.__esModule=!0;e.default=function(e,n){return function(t){return t[e]=n,t}}});e(it);var ut=n(function(t,e){e.__esModule=!0;var n,r=(n=it)&&n.__esModule?n:{default:n};e.default=function(t){return(0,r.default)("displayName",t)}});e(ut);var ct=n(function(t,e){e.__esModule=!0;e.default=function(t){return"string"==typeof t?t:t?t.displayName||t.name||"Component":void 0}});e(ct);var at=n(function(t,e){e.__esModule=!0;var n,r=(n=ct)&&n.__esModule?n:{default:n};e.default=function(t,e){return e+"("+(0,r.default)(t)+")"}});e(at);var st=e(n(function(t,e){e.__esModule=!0;n(ut),n(at);function n(t){return t&&t.__esModule?t:{default:t}}e.default=function(n){return function(t){var e=(0,l.createFactory)(t);return function(t){return e(n(t))}}}})),ft=e(n(function(t,e){e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};n(ut),n(at);function n(t){return t&&t.__esModule?t:{default:t}}e.default=function(r){return function(t){var n=(0,l.createFactory)(t),e=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.render=function(){return n(o({},this.props,this.state))},e}(l.Component);return Object.keys(r).forEach(function(t){return e.prototype[t]=r[t]}),e}}})),lt=e(n(function(t,e){e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};n(ut),n(at);function n(t){return t&&t.__esModule?t:{default:t}}e.default=function(r){return function(t){var n=(0,l.createFactory)(t),e=function(t,e){return n(o({},t,e))};return e.contextTypes=r,e}}})),pt=e(n(function(t,e){e.__esModule=!0;var n,r=(n=it)&&n.__esModule?n:{default:n};e.default=function(t){return(0,r.default)("propTypes",t)}})),dt=n(function(t,e){e.__esModule=!0;e.default=function(t,e){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r],r));return n}});e(dt);var ht=e(n(function(t,e){e.__esModule=!0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=(n(ut),n(at),n(dt));function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}e.default=function(r){return function(t){var e=(0,l.createFactory)(t),n=function(i){function u(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e=a(this,i.call.apply(i,[this].concat(r))),c.call(e),a(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(u,i),u.prototype.componentWillReceiveProps=function(){this.cachedHandlers={}},u.prototype.render=function(){return e(o({},this.props,this.handlers))},u}(l.Component),c=function(){var o=this;this.cachedHandlers={},this.handlers=(0,i.default)("function"==typeof r?r(this.props):r,function(n,r){return function(){var t=o.cachedHandlers[r];if(t)return t.apply(void 0,arguments);var e=n(o.props);return(o.cachedHandlers[r]=e).apply(void 0,arguments)}})};return n}}})),vt=P,yt=o?Object.defineProperties:function(t,e){u(t);for(var n,r=J(e),o=r.length,i=0;i<o;)g.f(t,n=r[i++],e[n]);return t},bt=v.document,gt=bt&&bt.documentElement,mt=W("IE_PROTO"),wt=function(){},Ot="prototype",_t=function(){var t,e=f("iframe"),n=q.length;for(e.style.display="none",gt.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),_t=t.F;n--;)delete _t[Ot][q[n]];return _t()},Pt=Object.create||function(t,e){var n;return null!==t?(wt[Ot]=u(t),n=new wt,wt[Ot]=null,n[mt]=t):n=_t(),void 0===e?n:yt(n,e)},Et=n(function(t){var e=N("wks"),n=v.Symbol,r="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=r&&n[t]||(r?n:K)("Symbol."+t))}).store=e}),St=g.f,jt=Et("toStringTag"),Ft=function(t,e,n){t&&!w(t=n?t:t.prototype,jt)&&St(t,jt,{configurable:!0,value:e})},It={};P(It,Et("iterator"),function(){return this});var Tt,Mt=W("IE_PROTO"),xt=Object.prototype,Lt=Object.getPrototypeOf||function(t){return t=X(t),w(t,Mt)?t[Mt]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?xt:null},kt=Et("iterator"),Bt=!([].keys&&"next"in[].keys()),Ct="values",At=function(t,e,n,r,o,i,u){var c,a,s;a=e,s=r,(c=n).prototype=Pt(It,{next:_(1,s)}),Ft(c,a+" Iterator");var f,l,p,d=function(t){if(!Bt&&t in b)return b[t];switch(t){case"keys":case Ct:return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",v=o==Ct,y=!1,b=t.prototype,g=b[kt]||b["@@iterator"]||o&&b[o],m=g||d(o),w=o?v?d("entries"):m:void 0,O="Array"==e&&b.entries||g;if(O&&(p=Lt(O.call(new t)))!==Object.prototype&&p.next&&Ft(p,h,!0),v&&g&&g.name!==Ct&&(y=!0,m=function(){return g.call(this)}),u&&(Bt||y||!b[kt])&&P(b,kt,m),o)if(f={values:v?m:d(Ct),keys:i?m:d("keys"),entries:w},u)for(l in f)l in b||vt(b,l,f[l]);else j(j.P+j.F*(Bt||y),e,f);return f},Ht=(Tt=!0,function(t,e){var n,r,o=String(M(t)),i=B(e),u=o.length;return i<0||u<=i?Tt?"":void 0:(n=o.charCodeAt(i))<55296||56319<n||i+1===u||(r=o.charCodeAt(i+1))<56320||57343<r?Tt?o.charAt(i):n:Tt?o.slice(i,i+2):r-56320+(n-55296<<10)+65536});At(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=Ht(e,n),this._i+=t.length,{value:t,done:!1})});for(var Nt=function(t,e){return{value:e,done:!!t}},Dt=(At(Array,"Array",function(t,e){this._t=x(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,Nt(1)):Nt(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),Et("toStringTag")),Rt="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),Kt=0;Kt<Rt.length;Kt++){var zt=Rt[Kt],Wt=v[zt],Ut=Wt&&Wt.prototype;Ut&&!Ut[Dt]&&P(Ut,Dt,zt)}var Vt={f:Et},Gt=Vt.f("iterator"),qt=e(n(function(t){t.exports={default:Gt,__esModule:!0}})),Jt=n(function(t){var n=K("meta"),e=g.f,r=0,o=Object.isExtensible||function(){return!0},i=!s(function(){return o(Object.preventExtensions({}))}),u=function(t){e(t,n,{value:{i:"O"+ ++r,w:{}}})},c=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!w(t,n)){if(!o(t))return"F";if(!e)return"E";u(t)}return t[n].i},getWeak:function(t,e){if(!w(t,n)){if(!o(t))return!0;if(!e)return!1;u(t)}return t[n].w},onFreeze:function(t){return i&&c.NEED&&o(t)&&!w(t,n)&&u(t),t}}}),Yt=(Jt.KEY,Jt.NEED,Jt.fastKey,Jt.getWeak,Jt.onFreeze,g.f),Qt=function(t){var e=y.Symbol||(y.Symbol={});"_"==t.charAt(0)||t in e||Yt(e,t,{value:Vt.f(t)})},Xt=Array.isArray||function(t){return"Array"==I(t)},Zt=q.concat("length","prototype"),$t={f:Object.getOwnPropertyNames||function(t){return G(t,Zt)}},te=$t.f,ee={}.toString,ne="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],re={f:function(t){return ne&&"[object Window]"==ee.call(t)?function(t){try{return te(t)}catch(t){return ne.slice()}}(t):te(x(t))}},oe=Object.getOwnPropertyDescriptor,ie={f:o?oe:function(t,e){if(t=x(t),e=d(e,!0),p)try{return oe(t,e)}catch(t){}if(w(t,e))return _(!Q.f.call(t,e),t[e])}},ue=Jt.KEY,ce=ie.f,ae=g.f,se=re.f,fe=v.Symbol,le=v.JSON,pe=le&&le.stringify,de="prototype",he=Et("_hidden"),ve=Et("toPrimitive"),ye={}.propertyIsEnumerable,be=N("symbol-registry"),ge=N("symbols"),me=N("op-symbols"),we=Object[de],Oe="function"==typeof fe,_e=v.QObject,Pe=!_e||!_e[de]||!_e[de].findChild,Ee=o&&s(function(){return 7!=Pt(ae({},"a",{get:function(){return ae(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=ce(we,e);r&&delete we[e],ae(t,e,n),r&&t!==we&&ae(we,e,r)}:ae,Se=function(t){var e=ge[t]=Pt(fe[de]);return e._k=t,e},je=Oe&&"symbol"==typeof fe.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof fe},Fe=function(t,e,n){return t===we&&Fe(me,e,n),u(t),e=d(e,!0),u(n),w(ge,e)?(n.enumerable?(w(t,he)&&t[he][e]&&(t[he][e]=!1),n=Pt(n,{enumerable:_(0,!1)})):(w(t,he)||ae(t,he,_(1,{})),t[he][e]=!0),Ee(t,e,n)):ae(t,e,n)},Ie=function(t,e){u(t);for(var n,r=function(t){var e=J(t),n=Y.f;if(n)for(var r,o=n(t),i=Q.f,u=0;o.length>u;)i.call(t,r=o[u++])&&e.push(r);return e}(e=x(e)),o=0,i=r.length;o<i;)Fe(t,n=r[o++],e[n]);return t},Te=function(t){var e=ye.call(this,t=d(t,!0));return!(this===we&&w(ge,t)&&!w(me,t))&&(!(e||!w(this,t)||!w(ge,t)||w(this,he)&&this[he][t])||e)},Me=function(t,e){if(t=x(t),e=d(e,!0),t!==we||!w(ge,e)||w(me,e)){var n=ce(t,e);return!n||!w(ge,e)||w(t,he)&&t[he][e]||(n.enumerable=!0),n}},xe=function(t){for(var e,n=se(x(t)),r=[],o=0;n.length>o;)w(ge,e=n[o++])||e==he||e==ue||r.push(e);return r},Le=function(t){for(var e,n=t===we,r=se(n?me:x(t)),o=[],i=0;r.length>i;)!w(ge,e=r[i++])||n&&!w(we,e)||o.push(ge[e]);return o};Oe||(vt((fe=function(){if(this instanceof fe)throw TypeError("Symbol is not a constructor!");var e=K(0<arguments.length?arguments[0]:void 0),n=function(t){this===we&&n.call(me,t),w(this,he)&&w(this[he],e)&&(this[he][e]=!1),Ee(this,e,_(1,t))};return o&&Pe&&Ee(we,e,{configurable:!0,set:n}),Se(e)})[de],"toString",function(){return this._k}),ie.f=Me,g.f=Fe,$t.f=re.f=xe,Q.f=Te,Y.f=Le,Vt.f=function(t){return Se(Et(t))}),j(j.G+j.W+j.F*!Oe,{Symbol:fe});for(var ke="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Be=0;ke.length>Be;)Et(ke[Be++]);for(var Ce=J(Et.store),Ae=0;Ce.length>Ae;)Qt(Ce[Ae++]);j(j.S+j.F*!Oe,"Symbol",{for:function(t){return w(be,t+="")?be[t]:be[t]=fe(t)},keyFor:function(t){if(!je(t))throw TypeError(t+" is not a symbol!");for(var e in be)if(be[e]===t)return e},useSetter:function(){Pe=!0},useSimple:function(){Pe=!1}}),j(j.S+j.F*!Oe,"Object",{create:function(t,e){return void 0===e?Pt(t):Ie(Pt(t),e)},defineProperty:Fe,defineProperties:Ie,getOwnPropertyDescriptor:Me,getOwnPropertyNames:xe,getOwnPropertySymbols:Le}),le&&j(j.S+j.F*(!Oe||s(function(){var t=fe();return"[null]"!=pe([t])||"{}"!=pe({a:t})||"{}"!=pe(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(a(e)||void 0!==t)&&!je(t))return Xt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!je(e))return e}),r[1]=e,pe.apply(le,r)}}),fe[de][ve]||P(fe[de],ve,fe[de].valueOf),Ft(fe,"Symbol"),Ft(Math,"Math",!0),Ft(v.JSON,"JSON",!0),Qt("asyncIterator"),Qt("observable");var He,Ne,De,Re,Ke=y.Symbol,ze=e(n(function(t){t.exports={default:Ke,__esModule:!0}}));He="keys",Ne=function(){return function(t){return J(X(t))}},De=(y.Object||{})[He]||Object[He],(Re={})[He]=Ne(De),j(j.S+j.F*s(function(){De(1)}),"Object",Re);var We=y.Object.keys,Ue=e(n(function(t){t.exports={default:We,__esModule:!0}})),Ve="function"==typeof ze&&"symbol"==typeof qt?function(t){return typeof t}:function(t){return t&&"function"==typeof ze&&t.constructor===ze&&t!==ze.prototype?"symbol":typeof t},Ge={selector:"",straightOnly:!1,straightOverlapThreshold:.5,rememberSource:!1,disabled:!1,defaultElement:"",enterTo:"",leaveFor:null,restrict:"self-first",tabIndexIgnoreList:[],navigableFilter:null},qe={37:"left",38:"up",39:"right",40:"down"},Je={left:"right",up:"down",right:"left",down:"up"},Ye="sn:",Qe=0,Xe=!1,Ze=!1,$e={},tn=0,en="",nn="",rn=!1,on=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||function(t){var e=(this.parentNode||this.document).querySelectorAll(t);return 0<=[].slice.call(e).indexOf(this)};function un(t){var e=t.getBoundingClientRect(),n={left:e.left,top:e.top,right:e.right,bottom:e.bottom,width:e.width,height:e.height};return n.element=t,n.center={x:n.left+Math.floor(n.width/2),y:n.top+Math.floor(n.height/2)},n.center.left=n.center.right=n.center.x,n.center.top=n.center.bottom=n.center.y,n}function cn(t,e,n){for(var r=[[],[],[],[],[],[],[],[],[]],o=0;o<t.length;o++){var i,u,c=t[o],a=c.center;if(i=a.x<e.left?0:a.x<=e.right?1:2,r[u=3*(a.y<e.top?0:a.y<=e.bottom?1:2)+i].push(c),-1!==[0,2,6,8].indexOf(u)){var s=n;c.left<=e.right-e.width*s&&(2===u?r[1].push(c):8===u&&r[7].push(c)),c.right>=e.left+e.width*s&&(0===u?r[1].push(c):6===u&&r[7].push(c)),c.top<=e.bottom-e.height*s&&(6===u?r[3].push(c):8===u&&r[5].push(c)),c.bottom>=e.top+e.height*s&&(0===u?r[3].push(c):2===u&&r[5].push(c))}}return r}function an(t,e,n,r){if(!(t&&e&&n&&n.length))return null;for(var o=[],i=0;i<n.length;i++){var u=un(n[i]);u&&o.push(u)}if(!o.length)return null;var c=un(t);if(!c)return null;var a,s,f=(a=c,{nearPlumbLineIsBetter:function(t){var e;return(e=t.center.x<a.center.x?a.center.x-t.right:t.left-a.center.x)<0?0:e},nearHorizonIsBetter:function(t){var e;return(e=t.center.y<a.center.y?a.center.y-t.bottom:t.top-a.center.y)<0?0:e},nearTargetLeftIsBetter:function(t){var e;return(e=t.center.x<a.center.x?a.left-t.right:t.left-a.left)<0?0:e},nearTargetTopIsBetter:function(t){var e;return(e=t.center.y<a.center.y?a.top-t.bottom:t.top-a.top)<0?0:e},topIsBetter:function(t){return t.top},bottomIsBetter:function(t){return-1*t.bottom},leftIsBetter:function(t){return t.left},rightIsBetter:function(t){return-1*t.right}}),l=cn(o,c,r.straightOverlapThreshold),p=cn(l[4],c.center,r.straightOverlapThreshold);switch(e){case"left":s=[{group:p[0].concat(p[3]).concat(p[6]),distance:[f.nearPlumbLineIsBetter,f.topIsBetter]},{group:l[3],distance:[f.nearPlumbLineIsBetter,f.topIsBetter]},{group:l[0].concat(l[6]),distance:[f.nearHorizonIsBetter,f.rightIsBetter,f.nearTargetTopIsBetter]}];break;case"right":s=[{group:p[2].concat(p[5]).concat(p[8]),distance:[f.nearPlumbLineIsBetter,f.topIsBetter]},{group:l[5],distance:[f.nearPlumbLineIsBetter,f.topIsBetter]},{group:l[2].concat(l[8]),distance:[f.nearHorizonIsBetter,f.leftIsBetter,f.nearTargetTopIsBetter]}];break;case"up":s=[{group:p[0].concat(p[1]).concat(p[2]),distance:[f.nearHorizonIsBetter,f.leftIsBetter]},{group:l[1],distance:[f.nearHorizonIsBetter,f.leftIsBetter]},{group:l[0].concat(l[2]),distance:[f.nearPlumbLineIsBetter,f.bottomIsBetter,f.nearTargetLeftIsBetter]}];break;case"down":s=[{group:p[6].concat(p[7]).concat(p[8]),distance:[f.nearHorizonIsBetter,f.leftIsBetter]},{group:l[7],distance:[f.nearHorizonIsBetter,f.leftIsBetter]},{group:l[6].concat(l[8]),distance:[f.nearPlumbLineIsBetter,f.topIsBetter,f.nearTargetLeftIsBetter]}];break;default:return null}r.straightOnly&&s.pop();var d=function(t){for(var e=null,n=0;n<t.length;n++)if(t[n].group.length){e=t[n];break}if(!e)return null;var i=e.distance;return e.group.sort(function(t,e){for(var n=0;n<i.length;n++){var r=i[n],o=r(t)-r(e);if(o)return o}return 0}),e.group}(s);if(!d)return null;var h=null;if(r.rememberSource&&r.previous&&r.previous.destination===t&&r.previous.reverse===e)for(var v=0;v<d.length;v++)if(d[v].element===r.previous.target){h=d[v].element;break}return h||(h=d[0].element),h}function sn(t){return"string"==typeof t?[].slice.call(document.querySelectorAll(t)):"object"===(void 0===t?"undefined":Ve(t))&&t.length?[].slice.call(t):"object"===(void 0===t?"undefined":Ve(t))&&1===t.nodeType?[t]:[]}function fn(t,e){return"string"==typeof e?on.call(t,e):"object"===(void 0===e?"undefined":Ve(e))&&e.length?0<=e.indexOf(t):"object"===(void 0===e?"undefined":Ve(e))&&1===e.nodeType&&t===e}function ln(){var t=document.activeElement;if(t&&t!==document.body)return t}function pn(t){t=t||{};for(var e=1;e<arguments.length;e++)if(arguments[e])for(var n in arguments[e])arguments[e].hasOwnProperty(n)&&void 0!==arguments[e][n]&&(t[n]=arguments[e][n]);return t}function dn(t,e){Array.isArray(e)||(e=[e]);for(var n,r=0;r<e.length;r++)0<=(n=t.indexOf(e[r]))&&t.splice(n,1);return t}function hn(t,e,n){if(!t||!e||!$e[e]||$e[e].disabled)return!1;if(t.offsetWidth<=0&&t.offsetHeight<=0||t.hasAttribute("disabled"))return!1;if(n&&!fn(t,$e[e].selector))return!1;if("function"==typeof $e[e].navigableFilter){if(!1===$e[e].navigableFilter(t,e))return!1}else if("function"==typeof Ge.navigableFilter&&!1===Ge.navigableFilter(t,e))return!1;return!0}function vn(t){for(var e in $e)if(!$e[e].disabled&&fn(t,$e[e].selector))return e}function yn(e){return sn($e[e].selector).filter(function(t){return hn(t,e)})}function bn(t){var e=$e[t].defaultElement;return e?("string"==typeof e&&(e=sn(e)[0]),hn(e,t,!0)?e:null):null}function gn(t){var e=$e[t]&&$e[t].lastFocusedElement;return hn(e,t,!0)?e:null}function mn(t,e,n,r){arguments.length<4&&(r=!0);var o=document.createEvent("CustomEvent");return o.initCustomEvent(Ye+e,!0,r,n),t.dispatchEvent(o)}function wn(t,e,n){if(!t)return!1;var r=ln(),o=function(){r&&r.blur(),t.focus(),On(t,e)};if(rn)return o(),!0;if(rn=!0,Ze)return o(),!(rn=!1);if(r){var i={nextElement:t,nextSectionId:e,direction:n,native:!1};if(!mn(r,"willunfocus",i))return rn=!1;r.blur(),mn(r,"unfocused",i,!1)}var u={previousElement:r,sectionId:e,direction:n,native:!1};return mn(t,"willfocus",u)?(t.focus(),mn(t,"focused",u,!1),rn=!1,On(t,e),!0):rn=!1}function On(t,e){e||(e=vn(t)),e&&($e[e].lastFocusedElement=t,nn=e)}function _n(t,e){if("@"==t.charAt(0)){return 1==t.length?Pn():Pn(t.substr(1))}else{var n=sn(t)[0];if(n){var r=vn(n);if(hn(n,r))return wn(n,r,e)}}return!1}function Pn(t){var e=[],n=function(t){t&&e.indexOf(t)<0&&$e[t]&&!$e[t].disabled&&e.push(t)};t?n(t):(n(en),n(nn),Ue($e).map(n));for(var r=0;r<e.length;r++){var o,i=e[r];if(o="last-focused"==$e[i].enterTo?gn(i)||bn(i)||yn(i)[0]:bn(i)||gn(i)||yn(i)[0])return wn(o,i)}return!1}function En(t,e){mn(t,"navigatefailed",{direction:e},!1)}function Sn(t,e){if($e[t].leaveFor&&void 0!==$e[t].leaveFor[e]){var n=$e[t].leaveFor[e];if("string"==typeof n)return""===n?null:_n(n,e);var r=vn(n);if(hn(n,r))return wn(n,r,e)}return!1}function jn(t,e,n){var r=e.getAttribute("data-sn-"+t);if("string"==typeof r)return!(""===r||!_n(r,t))||(En(e,t),!1);var o={},i=[];for(var u in $e)o[u]=yn(u),i=i.concat(o[u]);var c,a=pn({},Ge,$e[n]);if("self-only"==a.restrict||"self-first"==a.restrict){var s=o[n];(c=an(e,t,dn(s,e),a))||"self-first"!=a.restrict||(c=an(e,t,dn(i,s),a))}else c=an(e,t,dn(i,e),a);if(c){$e[n].previous={target:e,destination:c,reverse:Je[t]};var f=vn(c);if(n!=f){var l,p=Sn(n,t);if(p)return!0;if(null===p)return En(e,t),!1;switch($e[f].enterTo){case"last-focused":l=gn(f)||bn(f);break;case"default-element":l=bn(f)}l&&(c=l)}return wn(c,f,t)}return!!Sn(n,t)||(En(e,t),!1)}function Fn(t){if(!(!tn||Ze||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)){var e,n=function(){return t.preventDefault(),t.stopPropagation(),!1},r=qe[t.keyCode];if(!r)return 13==t.keyCode&&(e=ln())&&vn(e)&&!mn(e,"enter-down")?n():void 0;if(!(e=ln())&&(nn&&(e=gn(nn)),!e))return Pn(),n();var o=vn(e);if(o)return mn(e,"willmove",{direction:r,sectionId:o,cause:"keydown"})&&jn(r,e,o),n()}}function In(t){if(!(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)&&!Ze&&tn&&13==t.keyCode){var e=ln();e&&vn(e)&&(mn(e,"enter-up")||(t.preventDefault(),t.stopPropagation()))}}function Tn(t){var e=t.target;if(e!==window&&e!==document&&tn&&!rn){var n=vn(e);if(n){if(Ze)return void On(e,n);var r={sectionId:n,native:!0};mn(e,"willfocus",r)?(mn(e,"focused",r,!1),On(e,n)):(rn=!0,e.blur(),rn=!1)}}}function Mn(t){var e=t.target;if(e!==window&&e!==document&&!Ze&&tn&&!rn&&vn(e)){var n={native:!0};mn(e,"willunfocus",n)?mn(e,"unfocused",n,!1):(rn=!0,setTimeout(function(){e.focus(),rn=!1}))}}var xn={init:function(){Xe||(window.addEventListener("keydown",Fn),window.addEventListener("keyup",In),window.addEventListener("focus",Tn,!0),window.addEventListener("blur",Mn,!0),Xe=!0)},uninit:function(){window.removeEventListener("blur",Mn,!0),window.removeEventListener("focus",Tn,!0),window.removeEventListener("keyup",In),window.removeEventListener("keydown",Fn),xn.clear(),Qe=0,Xe=!1},clear:function(){tn=0,nn=en="",rn=!($e={})},set:function(){var t,e;if("object"===Ve(arguments[0]))e=arguments[0];else{if("string"!=typeof arguments[0]||"object"!==Ve(arguments[1]))return;if(t=arguments[0],e=arguments[1],!$e[t])throw new Error('Section "'+t+"\" doesn't exist!")}for(var n in e)void 0!==Ge[n]&&(t?$e[t][n]=e[n]:void 0!==e[n]&&(Ge[n]=e[n]));t&&($e[t]=pn({},$e[t]))},add:function(){var t,e={};if("object"===Ve(arguments[0])?e=arguments[0]:"string"==typeof arguments[0]&&"object"===Ve(arguments[1])&&(t=arguments[0],e=arguments[1]),t||(t="string"==typeof e.id?e.id:function(){for(var t;t="section-"+String(++Qe),$e[t];);return t}()),$e[t])throw new Error('Section "'+t+'" has already existed!');return $e[t]={},tn++,xn.set(t,e),t},remove:function(t){if(!t||"string"!=typeof t)throw new Error('Please assign the "sectionId"!');return!!$e[t]&&($e[t]=void 0,$e=pn({},$e),tn--,!0)},disable:function(t){return!!$e[t]&&($e[t].disabled=!0)},enable:function(t){return!!$e[t]&&!($e[t].disabled=!1)},pause:function(){Ze=!0},resume:function(){Ze=!1},focus:function(t,e){var n=!1;void 0===e&&"boolean"==typeof t&&(e=t,t=void 0);var r=!Ze&&e;if(r&&xn.pause(),t)if("string"==typeof t)n=$e[t]?Pn(t):_n(t);else{var o=vn(t);hn(t,o)&&(n=wn(t,o))}else n=Pn();return r&&xn.resume(),n},move:function(t,e){if(t=t.toLowerCase(),!Je[t])return!1;var n=e?sn(e)[0]:ln();if(!n)return!1;var r=vn(n);return!!r&&(!!mn(n,"willmove",{direction:t,sectionId:r,cause:"api"})&&jn(t,n,r))},makeFocusable:function(t){var e=function(t){var e=void 0!==t.tabIndexIgnoreList?t.tabIndexIgnoreList:Ge.tabIndexIgnoreList;sn(t.selector).forEach(function(t){fn(t,e)||t.getAttribute("tabindex")||t.setAttribute("tabindex","-1")})};if(t){if(!$e[t])throw new Error('Section "'+t+"\" doesn't exist!");e($e[t])}else for(var n in $e)e($e[n])},setDefaultSection:function(t){if(t){if(!$e[t])throw new Error('Section "'+t+"\" doesn't exist!");en=t}else en=""},getSectionId:vn};var Ln=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.handleFocused=this.handleFocused.bind(this),this.destroy(),this.bindFocusEvent()}return t.prototype.init=function(t){this.setState||(this.setState=t),xn.init(),xn.focus(),this.bindFocusEvent()},t.prototype.destroy=function(){this.focusedPath=null,this.setState=null,xn.uninit(),this.unbindFocusEvent()},t.prototype.bindFocusEvent=function(){this.listening||(this.listening=!0,document.addEventListener("sn:focused",this.handleFocused))},t.prototype.unbindFocusEvent=function(){document.removeEventListener("sn:focused",this.handleFocused),this.listening=!1},t.prototype.handleFocused=function(t){this.focusedPath!==t.detail.sectionId&&(this.setState(t.detail.sectionId),xn.focus(t.detail.sectionId))},t.prototype.getCurrentFocusedPath=function(){return this.focusedPath},t.prototype.setCurrentFocusedPath=function(t){this.focusedPath=t,xn.focus(t)},t.prototype.addFocusable=function(t,e){var n=e.focusPath,r=e.onEnterPressHandler,o=e.disabled;if(t&&!xn.getSectionId(t)){this.removeFocusable(t,{onEnterPressHandler:r});var i=[{selector:t}];n&&i.unshift(n),t.addEventListener("sn:enter-down",r);var u=xn.add.apply(xn,i);xn.makeFocusable(u),o&&xn.disable(u)}},t.prototype.removeFocusable=function(t,e){var n=e.onEnterPressHandler,r=xn.getSectionId(t);r&&(xn.remove(r),t.removeEventListener("sn:enter-down",n))},t}()),kn=et||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var Bn=ot(pt({focusPath:rt.string.isRequired}),lt({setFocus:rt.func,currentFocusPath:rt.string}),st(function(t){var e=t.currentFocusPath,n=t.focusPath,r=t.setFocus,o=void 0===r?function(){}:r,i=function(t,e){var n={};for(var r in t)0<=e.indexOf(r)||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["currentFocusPath","focusPath","setFocus"]);return kn({focused:e===n,setFocus:o.bind(null,n),focusPath:n},i)}),ht({onEnterPressHandler:function(t){var e=t.onEnterPress;return void 0===e?function(){}:e}}),ft({addFocusable:function(){var t=this.props,e=t.focusPath,n=t.onEnterPressHandler;console.log(r.findDOMNode),Ln.addFocusable(r.findDOMNode(this),{focusPath:e,onEnterPressHandler:n})},componentDidMount:function(){this.addFocusable()},componentDidUpdate:function(){this.addFocusable()},componentWillUnmount:function(){Ln.removeFocusable(r.findDOMNode(this),{onEnterPressHandler:this.props.onEnterPressHandler})}})),Cn=e(n(function(t,e){e.__esModule=!0;n(ut),n(at);function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}e.default=function(r,c){return function(t){var e=(0,l.createFactory)(t),n=function(i){function u(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e=a(this,i.call.apply(i,[this].concat(r)))).getChildContext=function(){return c(e.props)},a(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(u,i),u.prototype.render=function(){return e(this.props)},u}(l.Component);return n.childContextTypes=r,n}}})),An=Object.prototype.hasOwnProperty;function Hn(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}var Nn=function(t,e){if(Hn(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!An.call(e,n[o])||!Hn(t[n[o]],e[n[o]]))return!1;return!0},Dn=n(function(t,e){e.__esModule=!0;var n,r=(n=Nn)&&n.__esModule?n:{default:n};e.default=r.default});e(Dn);var Rn=Bn,Kn=ot(e(n(function(t,e){e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=(n(ut),n(at),n(Dn)),u=n(dt);function n(t){return t&&t.__esModule?t:{default:t}}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}e.default=function(r,o){return function(t){var e=(0,l.createFactory)(t),n=function(i){function u(){var t,e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e=f(this,i.call.apply(i,[this].concat(r))),c.call(e),f(e,t)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(u,i),u.prototype.shouldComponentUpdate=function(t,e){var n=t!==this.props,r=!(0,s.default)(e,this.state);return n||r},u.prototype.render=function(){return e(a({},this.props,this.state,this.stateUpdaters))},u}(l.Component),c=function(){var i=this;this.state="function"==typeof r?r(this.props):r,this.stateUpdaters=(0,u.default)(o,function(o){return function(n){for(var t=arguments.length,r=Array(1<t?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];n&&"function"==typeof n.persist&&n.persist(),i.setState(function(t,e){return o(t,e).apply(void 0,[n].concat(r))})}})};return n}}}))({currentFocusPath:Ln.getCurrentFocusedPath()},{setFocus:function(t){var r=t.currentFocusPath;return function(t,e){var n=e||t;if(r!==n)return Ln.setCurrentFocusedPath(n),{currentFocusPath:n}}}}),Cn({setFocus:rt.func,currentFocusPath:rt.string},function(t){return{setFocus:t.setFocus,currentFocusPath:t.currentFocusPath}}),ft({componentDidMount:function(){Ln.init(this.props.setFocus)},componentDidUpdate:function(){Ln.init(this.props.setFocus)},componentWillUnmount:function(){Ln.destroy()}}));t.withFocusable=Rn,t.withNavigation=Kn,Object.defineProperty(t,"__esModule",{value:!0})});
