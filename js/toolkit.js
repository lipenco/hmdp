/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"c":[".tk-proxima-nova","\"proxima-nova\",sans-serif",".tk-minion-pro","\"minion-pro\",sans-serif"],"f":"//use.typekit.net/c/25d7b0/minion-pro:i4:i7:n4:n7,proxima-nova:n4:n6:n7.XvF:F:2,XvD:F:2,XvJ:F:2,XvC:F:2,W0V:F:2,W0X:F:2,W0Y:F:2/{format}{/extras*}?3bb2a6e53c9684ffdc9a9bff135b2a62420d995bda4d3b1c65f0910a8313a599bfd333fcc00e1fbaac9547b4cf5488faef0c558729e228c661f70a2534880d4d8cd88518ea6fbac4320598fd13e2f23dd13d9737cc166f447c475600d8d27357716f8766a86b6c786a9a81fc2d36986980c3958c74729b13989237914b0d9db7d7083de00a88c73fb7cb0087d1eede32423072eb32703cd5b7054b882bb0432f4c79a0cf5e9a20dbdae8c774c4fb49ab0972d0a74ba716a40ab745f290006f446d3e7ffaa62527","fn":["minion-pro",["i4","i7","n4","n7"],"proxima-nova",["n4","n6","n7"]],"k":"//use.typekit.net/{id}.js","p":"//p.typekit.net/p.gif?s=1&k=dsn8dgg&ht=tk&h={host}&f=175.139.173.6813.6814.6812.6817&a=267366&_={_}","w":"dsn8dgg"};
/*{"k":"1.4.0","created":"2013-02-28T18:48:17Z"}*/
;(function(window,document,undefined){
var g=void 0,k=!0,l=null,m=!1;function n(a){return function(){return this[a]}}var o;function aa(a,c,b){var d=2<arguments.length?Array.prototype.slice.call(arguments,2):[];return function(){d.push.apply(d,arguments);return c.apply(a,d)}}function p(a,c){this.ya=c||a;this.j=this.ya.document;this.A=g}
p.prototype.createElement=function(a,c,b){a=this.j.createElement(a);if(c)for(var d in c)c.hasOwnProperty(d)&&("style"==d?this.R(a,c[d]):a.setAttribute(d,c[d]));b&&a.appendChild(this.j.createTextNode(b));return a};function q(a,c,b){a=a.j.getElementsByTagName(c)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(b,a.lastChild)}function ba(a){function c(){document.body?a():setTimeout(c,0)}c()}
function r(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return;b.push(c);a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function s(a,c){for(var b=a.className.split(/\s+/),d=[],e=0,f=b.length;e<f;e++)b[e]!=c&&d.push(b[e]);a.className=d.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ca(a,c){for(var b=a.className.split(/\s+/),d=0,e=b.length;d<e;d++)if(b[d]==c)return k;return m}
p.prototype.R=function(a,c){this.ha()?a.setAttribute("style",c):a.style.cssText=c};p.prototype.ha=function(){if(this.A===g){var a=this.j.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.A=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.A};function t(a,c){this.Fa=a;this.cb=c}function v(a,c,b,d,e,f,h,i){this.ja=a;this.bb=c;this.Ka=b;this.Ja=d;this.Xa=e;this.Wa=f;this.Ia=h;this.u=i}o=v.prototype;o.getName=n("ja");o.getVersion=n("bb");o.getEngine=n("Ka");
o.getEngineVersion=n("Ja");o.getPlatform=n("Xa");o.getPlatformVersion=n("Wa");o.getDocumentMode=n("Ia");function da(a,c){this.e=a;this.s=c}var ea=new v("Unknown","Unknown","Unknown","Unknown","Unknown","Unknown",g,new t(m,m));
da.prototype.parse=function(){var a;if(-1!=this.e.indexOf("MSIE")){a=w(this);var c=y(this),b=z(this.e,/(MSIE [\d\w\.]+)/,1);if(""!=b){var d=b.split(" "),b=d[0],d=d[1];a=new v(b,d,b,d,a,c,A(this.s),new t(m,m))}else a=new v("MSIE","Unknown","MSIE","Unknown",a,c,A(this.s),new t(m,m))}else if(-1!=this.e.indexOf("Opera"))a:if(c=a="Unknown",b=z(this.e,/(Presto\/[\d\w\.]+)/,1),""!=b?(c=b.split("/"),a=c[0],c=c[1]):(-1!=this.e.indexOf("Gecko")&&(a="Gecko"),b=z(this.e,/rv:([^\)]+)/,1),""!=b&&(c=b)),-1!=this.e.indexOf("Opera Mini/"))b=
z(this.e,/Opera Mini\/([\d\.]+)/,1),""==b&&(b="Unknown"),a=new v("OperaMini",b,a,c,w(this),y(this),A(this.s),new t(m,m));else{if(-1!=this.e.indexOf("Version/")&&(b=z(this.e,/Version\/([\d\.]+)/,1),""!=b)){a=new v("Opera",b,a,c,w(this),y(this),A(this.s),new t(m,m));break a}b=z(this.e,/Opera[\/ ]([\d\.]+)/,1);a=""!=b?new v("Opera",b,a,c,w(this),y(this),A(this.s),new t(m,m)):new v("Opera","Unknown",a,c,w(this),y(this),A(this.s),new t(m,m))}else if(/AppleWeb(K|k)it/.test(this.e)){a=w(this);c=y(this);
b=z(this.e,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1);""==b&&(b="Unknown");var d=B(b),e="Unknown";-1!=this.e.indexOf("Chrome")||-1!=this.e.indexOf("CrMo")||-1!=this.e.indexOf("CriOS")?e="Chrome":"BlackBerry"==a||"Android"==a?e="BuiltinBrowser":-1!=this.e.indexOf("Safari")?e="Safari":-1!=this.e.indexOf("AdobeAIR")&&(e="AdobeAIR");var f="Unknown";"BuiltinBrowser"==e?f="Unknown":-1!=this.e.indexOf("Version/")?f=z(this.e,/Version\/([\d\.\w]+)/,1):"Chrome"==e?f=z(this.e,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):"AdobeAIR"==
e&&(f=z(this.e,/AdobeAIR\/([\d\.]+)/,1));a=new v(e,f,"AppleWebKit",b,a,c,A(this.s),new t(536>d.H||536==d.H&&11>d.Y,"iPhone"==a||"iPad"==a||"iPod"==a||"Macintosh"==a))}else-1!=this.e.indexOf("Gecko")?(c=a="Unknown",b=m,-1!=this.e.indexOf("Firefox")?(a="Firefox",d=z(this.e,/Firefox\/([\d\w\.]+)/,1),""!=d&&(b=B(d),c=d,b=3<=b.H&&5<=b.Y)):-1!=this.e.indexOf("Mozilla")&&(a="Mozilla"),d=z(this.e,/rv:([^\)]+)/,1),""==d?d="Unknown":b||(b=B(d),1<b.H||1==b.H&&9<b.Y||1==b.H&&9==b.Y&&2<=b.Va||d.match(/1\.9\.1b[123]/)!=
l||d.match(/1\.9\.1\.[\d\.]+/)),a=new v(a,c,"Gecko",d,w(this),y(this),A(this.s),new t(m,m))):a=ea;return a};function w(a){var c=z(a.e,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=c)return/BB\d{2}/.test(c)&&(c="BlackBerry"),c;a=z(a.e,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/,1);return""!=a?("Mac_PowerPC"==a&&(a="Macintosh"),a):"Unknown"}
function y(a){var c=z(a.e,/(OS X|Windows NT|Android|CrOS) ([^;)]+)/,2);if(c||(c=z(a.e,/Windows Phone( OS)? ([^;)]+)/,2)))return c;if(c=z(a.e,/(iPhone )?OS ([\d_]+)/,2))return c;if(c=z(a.e,/Linux ([i\d]+)/,1))return c;return(a=z(a.e,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}function B(a){var a=/([0-9]+)(?:\.([0-9]+)(?:\.([0-9]+)?)?)?/.exec(a),c={};a&&(c.H=parseInt(a[1]||-1,10),c.Y=parseInt(a[2]||-1,10),c.Va=parseInt(a[3]||-1,10));return c}
function z(a,c,b){return(a=a.match(c))&&a[b]?a[b]:""}function A(a){if(a.documentMode)return a.documentMode}function fa(a,c,b){this.g=a;this.l=c;this.pa=b;this.o="wf";this.m=new ga("-")}function C(a){s(a.l,a.m.h(a.o,"loading"));ca(a.l,a.m.h(a.o,"active"))||r(a.l,a.m.h(a.o,"inactive"));D(a,"inactive")}function D(a,c,b,d){if(a.pa[c])a.pa[c](b,d)}function ha(a,c){this.width=a;this.height=c}
function E(a,c,b){this.g=a;this.v=c;this.N=b;this.Ua=new ia;this.Na=new ja;this.C=this.g.createElement("span",{},this.N)}function F(a){q(a.g,"body",a.C)}function G(a,c,b){b=b?a.Na.expand(b):"";return"position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+a.Ua.quote(c)+";"+b}E.prototype.O=function(){return this.v.O(this.C)};E.prototype.remove=function(){var a=this.C;a.parentNode&&a.parentNode.removeChild(a)};
function H(a,c,b,d,e,f,h){this.g=c;this.D=b;this.v=d;this.t=e;this.X=f;this.ea=0;this.Ea=this.wa=m;this.ka=h;this.u=a.u}
H.prototype.watch=function(a,c,b,d,e){var f=a.length;if(0===f)C(this.D);else{for(var h=0;h<f;h++){var i=a[h];c[i]||(c[i]=["n4"]);this.ea+=c[i].length}e&&(this.wa=e);for(h=0;h<f;h++)for(var i=a[h],e=c[i],j=b[i],x=0,Z=e.length;x<Z;x++){var P=e[x],u=this.D,Q=i,na=P;r(u.l,u.m.h(u.o,Q,na,"loading"));D(u,"fontloading",Q,na);u=aa(this,this.La);Q=aa(this,this.Ma);(new d(u,Q,this.g,this.v,this.t,this.X,i,P,this.u,this.ka,l,j)).start()}}};
H.prototype.La=function(a,c){var b=this.D;s(b.l,b.m.h(b.o,a,c,"loading"));s(b.l,b.m.h(b.o,a,c,"inactive"));r(b.l,b.m.h(b.o,a,c,"active"));D(b,"fontactive",a,c);this.Ea=k;ka(this)};H.prototype.Ma=function(a,c){var b=this.D;s(b.l,b.m.h(b.o,a,c,"loading"));ca(b.l,b.m.h(b.o,a,c,"active"))||r(b.l,b.m.h(b.o,a,c,"inactive"));D(b,"fontinactive",a,c);ka(this)};
function ka(a){0==--a.ea&&a.wa&&(a.Ea?(a=a.D,s(a.l,a.m.h(a.o,"loading")),s(a.l,a.m.h(a.o,"inactive")),r(a.l,a.m.h(a.o,"active")),D(a,"active")):C(a.D))}function I(a,c,b,d,e,f,h,i,j,x,Z,P){this.la=a;this.Qa=c;this.g=b;this.v=d;this.t=e;this.X=f;this.V=h;this.U=i;this.N=P||"BESbswy";this.u=j;this.z={};this.ka=x||5E3;this.za=Z||l;this.M=this.L=l;a=new E(this.g,this.v,this.N);F(a);for(var u in J)J.hasOwnProperty(u)&&(a.g.R(a.C,G(a,J[u],this.U)),this.z[J[u]]=a.O());a.remove()}
var J={hb:"serif",gb:"sans-serif",fb:"monospace",eb:"Apple Color Emoji"};I.prototype.start=function(){this.L=new E(this.g,this.v,this.N);F(this.L);this.M=new E(this.g,this.v,this.N);F(this.M);this.$a=this.X();var a=this.L;a.g.R(a.C,G(a,this.V+",serif",this.U));a=this.M;a.g.R(a.C,G(a,this.V+",sans-serif",this.U));this.qa()};function K(a,c,b){return a.u.cb?!!a.z[b]&&c.width==a.z[b].width:!!a.z[b]&&c.width==a.z[b].width&&!!a.z[b]&&c.height==a.z[b].height}
function la(a,c,b){for(var d in J)if(J.hasOwnProperty(d)&&K(a,c,J[d])&&K(a,b,J[d]))return k;return m}I.prototype.qa=function(){var a=this.L.O(),c=this.M.O();K(this,a,"serif")&&K(this,c,"sans-serif")||this.u.Fa&&la(this,a,c)?this.X()-this.$a>=this.ka?this.u.Fa&&la(this,a,c)&&(this.za===l||this.za.hasOwnProperty(this.V))?ma(this,this.la):ma(this,this.Qa):oa(this):ma(this,this.la)};function oa(a){a.t(function(a,b){return function(){b.call(a)}}(a,a.qa),25)}
function ma(a,c){a.L.remove();a.M.remove();c(a.V,a.U)}function ga(a){this.Sa=a||"-"}ga.prototype.h=function(a){for(var c=[],b=0;b<arguments.length;b++)c.push(arguments[b].replace(/[\W_]+/g,"").toLowerCase());return c.join(this.Sa)};function ia(){this.Da="'"}ia.prototype.quote=function(a){for(var c=[],a=a.split(/,\s*/),b=0;b<a.length;b++){var d=a[b].replace(/['"]/g,"");-1==d.indexOf(" ")?c.push(d):c.push(this.Da+d+this.Da)}return c.join(",")};function ja(){this.Ba=pa;this.S=qa}
var pa=["font-style","font-weight"],qa={"font-style":[["n","normal"],["i","italic"],["o","oblique"]],"font-weight":[["1","100"],["2","200"],["3","300"],["4","400"],["5","500"],["6","600"],["7","700"],["8","800"],["9","900"],["4","normal"],["7","bold"]]};function ra(a,c,b){this.Ra=a;this.Ya=c;this.S=b}ra.prototype.expand=function(a,c){for(var b=0;b<this.S.length;b++)if(c==this.S[b][0]){a[this.Ra]=this.Ya+":"+this.S[b][1];break}};
ja.prototype.expand=function(a){if(2!=a.length)return l;for(var c=[l,l],b=0,d=this.Ba.length;b<d;b++){var e=this.Ba[b];(new ra(b,e,this.S[e])).expand(c,a.substr(b,1))}return c[0]&&c[1]?c.join(";")+";":l};function L(a,c){this.ya=c||a;this.j=document;this.A=g}L.prototype=p.prototype;function M(a){return"https:"==a.j.location.protocol}L.prototype.Oa=function(){return this.j.location.hostname};
function sa(a,c,b){var d=a.j.getElementsByTagName("head")[0];if(d){var e=a.j.createElement("script");e.src=c;var f=m;e.onload=e.onreadystatechange=function(){if(!f&&(!this.readyState||"loaded"==this.readyState||"complete"==this.readyState))f=k,b&&b(),e.onload=e.onreadystatechange=l,"HEAD"==e.parentNode.tagName&&d.removeChild(e)};d.appendChild(e)}}L.prototype.R=function(a,c){this.ha()?a.setAttribute("style",c):a.style.cssText=c};
L.prototype.ha=function(){if(this.A===g){var a=this.j.createElement("p");a.innerHTML='<a style="top:1px;">w</a>';this.A=/top/.test(a.getElementsByTagName("a")[0].getAttribute("style"))}return this.A};function ta(){var a=[{name:"font-family",value:N.c[O+1]}];this.Za=[N.c[O]];this.ra=a}function ua(a){for(var c=a.Za.join(","),b=[],d=0;d<a.ra.length;d++){var e=a.ra[d];b.push(e.name+":"+e.value+";")}return c+"{"+b.join("")+"}"}function va(a,c){this.K=a;this.W=c;this.ua={};this.ta={}}
va.prototype.F=function(a){return a?(this.ua[a.Z]||this.W).slice(0):this.W.slice(0)};function wa(a,c,b){for(var d=[],e=a.K.split(",")[0].replace(/"|'/g,""),f=a.F(),h,i=[],j={},x=0;x<f.length;x++)h=f[x],0<h.length&&!j[h]&&(j[h]=k,i.push(h));b=b.Ca?b.Ca(e,i,d):i;c=c.Z;a.ua[c]=b;a.ta[c]=d}va.prototype.watch=function(a,c,b){var d=[],e={};xa(this,c,d,e);a(d,e,b)};
function xa(a,c,b,d){b.push(a.K);d[a.K]=a.F(c);a=a.ta[c.Z]||[];for(c=0;c<a.length;c++){for(var e=a[c],f=e.K,h=m,i=0;i<b.length;i++)b[i]==f&&(h=k);h||(b.push(f),d[f]=e.F())}}function ya(a,c){this.K=a;this.W=c}ya.prototype.F=n("W");function za(a){var c=new Image(1,1);c.src=a;c.onload=function(){c.onload=l}}function R(a,c){this.Z=a;this.va=c}function Aa(){this.na=this.Ha=this.B=this.P=this.Q=k}function S(a){Ba.ba.push(a)}
function Ca(a){this.g=a;this.oa=this.r=this.e=this.aa=l;this.n=[];this.T=[];this.Ga=this.fa=this.ca=this.da=l}function Da(a,c){a.e=c;if(a.aa){var b;a:{b=a.aa;for(var d=a.e,e=a.oa,f=0;f<b.ba.length;f++){var h=b.ba[f],i=d,j=e;j||(j=new Aa);if(h.va&&h.va(i.getName(),i.getVersion(),i.getEngine(),i.getEngineVersion(),i.getPlatform(),i.getPlatformVersion(),i.getDocumentMode(),j)){b=h;break a}}b=l}a.r=b}}o=Ca.prototype;o.supportsConfiguredBrowser=function(){return!!this.r};
o.init=function(){if(0<this.T.length){for(var a=[],c=0;c<this.T.length;c++)a.push(ua(this.T[c]));var c=this.g,a=a.join(""),b=this.g.j.createElement("style");b.setAttribute("type","text/css");b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a));q(c,"head",b)}};
o.load=function(a,c){var b=this.r.Z;if(this.fa)for(var d=Ea(this.fa,b),e=0;e<this.n.length;e++)wa(this.n[e],this.r,d);this.da&&(d=[],this.ca&&(d=new Fa(this.g,this.r,this.n),d=Ga(this.ca,b,d)),b=this.da.h(M(this.g),Ha(b,d)),q(this.g,"head",this.g.createElement("link",{rel:"stylesheet",href:b})));a&&ba(function(a,b,c,e){return function(){for(var d=0;d<a.n.length;d++)a.n[d].watch(b,c,e&&d==a.n.length-1)}}(this,a,this.r,c))};
o.collectFontFamilies=function(a,c){for(var b=0;b<this.n.length;b++)xa(this.n[b],this.r,a,c)};o.performOptionalActions=function(a){this.ia&&ba(function(a,b,d,e){return function(){var b=a.ia;if(b.Aa){var h=window.__adobewebfontsappname__,h=h?h.toString().substr(0,20):"";za(b.Aa.h(M(e),{host:encodeURIComponent(e.j.location.hostname),app:encodeURIComponent(h),_:(+new Date).toString()}))}b=a.ia;b.ma&&(b=b.ma.h(d,e),q(e,"body",b))}}(this,a,this.e,this.g))};
function Ia(a,c,b,d,e){this.Ta=a;this.g=c;this.e=b;this.l=d;this.t=e;this.q=[]}Ia.prototype.$=function(a){this.q.push(a)};Ia.prototype.load=function(a,c){var b=a,d=c||{};if("string"==typeof b)b=[b];else if(!b||!b.length)d=b||{},b=[];if(b.length)for(var e=this,f=b.length,h=0;h<b.length;h++)Ja(this,b[h],function(){0==--f&&Ka(e,d)});else Ka(this,d)};function Ja(a,c,b){sa(a.g,a.Ta.h(M(a.g),{id:encodeURIComponent(c)}),b)}
function Ka(a,c){if(0!=a.q.length){for(var b=new fa(a.g,a.l,c),d=m,e=0;e<a.q.length;e++)a.q[e].init(),d=d||a.q[e].supportsConfiguredBrowser();d?(r(b.l,b.m.h(b.o,"loading")),D(b,"loading"),La(a,b)):C(b);a.q=[]}}
function La(a,c){function b(a,b,c){d.watch(a,b,{},I,c)}for(var d=new H(a.e,a.g,c,{O:function(a){return new ha(a.offsetWidth,a.offsetHeight)}},a.t,function(){return+new Date}),e=0;e<a.q.length;e++){var f=a.q[e];f.supportsConfiguredBrowser()&&(f.load(b,e==a.q.length-1),f.performOptionalActions(window))}}function Ma(a,c){this.G=a;this.t=c;this.q=[]}Ma.prototype.$=function(a){this.q.push(a)};
Ma.prototype.load=function(){var a=this.G.__webfonttypekitmodule__;if(a)for(var c=0;c<this.q.length;c++){var b=this.q[c],d=a[b.Ga];if(d){var e=this.t;d(function(a,c,d){var c=[],j={};Da(b,a);b.supportsConfiguredBrowser()&&(b.init(),b.load(l,e),b.collectFontFamilies(c,j),b.performOptionalActions(window));d(b.supportsConfiguredBrowser(),c,j)})}}};function Na(a,c){this.ja=a;this.Ca=c}Na.prototype.getName=n("ja");function Oa(a){var c=T;Pa(c,a.getName())||c.ga.push(a)}
function Pa(a,c){for(var b=0;b<a.ga.length;b++){var d=a.ga[b];if(c===d.getName())return d}return l}function Ea(a,c){var b=a.I[c];return b?Pa(a,b):l}function Ga(a,c,b){for(var d=[],a=a.J[c]||[],c=0;c<a.length;c++){var e;a:switch(a[c]){case "observeddomain":e=new Qa(b.g);break a;case "fontmask":e=new Ra(b.r,b.n);break a;default:e=l}e&&d.push(e)}return d}function Fa(a,c,b){this.g=a;this.r=c;this.n=b}function Qa(a){this.g=a}
Qa.prototype.toString=function(){return encodeURIComponent(this.g.Oa?this.g.j.location.hostname:document.location.hostname)};function Ra(a,c){this.r=a;this.n=c}Ra.prototype.toString=function(){for(var a=[],c=0;c<this.n.length;c++)for(var b=this.n[c],d=b.F(),b=b.F(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<b.length;f++)if(d[e]===b[f]){f=k;break a}f=m}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");c=[];for(d=a.length;0<d;d-=4)b=a.slice(0>d-4?0:d-4,d),c.unshift(parseInt(b,2).toString(16));return c.join("")};
function U(a){this.ab=a}U.prototype.h=function(a,c){var b=c||{},d=this.ab.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,c,d){return d&&b[c]?"/"+b[c].join("/"):b[c]||""});d.match(/^\/\//)&&(d=(a?"https:":"http:")+d);return d.replace(/\/*\?*($|\?)/,"$1")};function Ha(a,c){for(var b=[],d=0;d<c.length;d++)b.push(c[d].toString());return{format:a,extras:b}}function Sa(a,c,b,d){this.G=a;this.j=c;this.Pa=b;this.xa=d}
Sa.prototype.h=function(a,c){var b=this.j.createElement("img");b.setAttribute("width",62);b.setAttribute("height",25);b.setAttribute("src",this.Pa.h(M(c)));b.setAttribute("class","typekit-badge");b.setAttribute("alt","Fonts by Typekit");b.setAttribute("title","Information about the fonts used on this site");b.style.position="fixed";b.style.zIndex=2E9;b.style.right=0;b.style.bottom=0;b.style.cursor="pointer";b.style.border=0;"Opera"!=a.getName()&&(b.style.content="none");b.style.display="inline";b.style["float"]=
"none";b.style.height="25px";b.style.left="auto";b.style.margin=0;b.style.maxHeight="25px";b.style.maxWidth="62px";b.style.minHeight="25px";b.style.minWidth="62px";b.style.orphans=2;b.style.outline="none";b.style.overflow="visible";b.style.padding=0;b.style.pageBreakAfter="auto";b.style.pageBreakBefore="auto";b.style.pageBreakInside="auto";b.style.tableLayout="auto";b.style.textIndent=0;b.style.top="auto";b.style.unicodeBidi="normal";b.style.verticalAlign="baseline";b.style.visibility="visible";b.style.widows=
2;b.style.width="65px";if(this.xa){var d=this.j,e=this.xa;Ta(this,b,"click",function(){d.location.href=e})}var f=a.getPlatform();if("MSIE"==a.getName()&&"Windows Phone"!=f){b.style.position="absolute";var h=this,i=function(){var a=Ua(h,"scrollLeft","scrollTop"),c=Ua(h,"clientWidth","clientHeight");b.style.bottom="auto";b.style.right="auto";b.style.top=a[1]+c[1]-25+"px";b.style.left=a[0]+c[0]-3-62+"px"};Ta(this,this.G,"scroll",i);Ta(this,this.G,"resize",i)}if("iPhone"==f||"iPod"==f||"iPad"==f||"Android"==
f||"Windows Phone"==f||"BlackBerry"==f)b.style.display="none";return b};function Ua(a,c,b){var d=0,e=0,a=a.j;if(a.documentElement&&(a.documentElement[c]||a.documentElement[b]))d=a.documentElement[c],e=a.documentElement[b];else if(a.body&&(a.body[c]||a.body[b]))d=a.body[c],e=a.body[b];return[d,e]}function Ta(a,c,b,d){if(c.attachEvent){var e=a.G;c["e"+b+d]=d;c[b+d]=function(){c["e"+b+d](e.event)};c.attachEvent("on"+b,c[b+d])}else c.addEventListener(b,d,m)}var Ba=new function(){this.ba=[]};
S(new R("a",function(a,c,b,d,e,f){if(m||("Windows"==e&&"Unknown"==f?k:m)||("Ubuntu"==e||"Linux"==e?k:m))a:{if("AdobeAIR"==a&&(a=/([0-9]+.[0-9]+)/.exec(c))){a=2.5<=parseFloat(a[1]);break a}a=m}else a=m;return a}));
S(new R("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("AdobeAIR"==a){var c=/([0-9]+.[0-9]+)/.exec(b);if(c)return 2.5<=parseFloat(c[1])}return m}(a,c,b,d,e,f,h,i)}));
S(new R("a",function(a,c,b,d,e,f,h,i){if(!(c=m))f=/([0-9]+).([0-9]+)/.exec(f),i.B&&"Android"==e&&f?(e=parseInt(f[1],10),i=parseInt(f[2],10),c=2==e&&2<=i||3==e&&1>i):c=m;return!c?m:"BuiltinBrowser"==a}));S(new R("f",function(a,c,b,d,e,f,h,i){if(!(c=m))f=/([0-9]+).([0-9]+)/.exec(f),i.B&&"Android"==e&&f?(e=parseInt(f[1],10),i=parseInt(f[2],10),c=3==e&&1<=i||3<e):c=m;return!c?m:"BuiltinBrowser"==a}));S(new R("d",function(a,c,b,d,e,f,h,i){c=m||i.na&&10<=parseInt(f,10);return!c?m:"BuiltinBrowser"==a}));
S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==
e||"Linux"==e?k:m)?m:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c){var d=parseFloat(c[1]),e=parseInt(c[2],10),c=parseInt(c[3],10);if(!(6<=d)&&(4<d||4==d&&249<e||4==d&&249==e&&4<=c))return k}}return m}(a,c,b,d,e,f,h,i)}));
S(new R("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||function(a,b,c,d,e,f,h,i){a=/([0-9]+).([0-9]+)/.exec(f);return i.B&&"Android"==e&&a?(e=parseInt(a[1],10),i=parseInt(a[2],10),3==e&&1<=i||3<e):m}(a,c,b,d,e,f,h,i))||"CrOS"==e||function(a,b,c,d,e,f,i,h){return h.P&&"iPad"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f,h,i){return i.Q&&("iPhone"==d||"iPod"==d)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Chrome"==a){var c=
/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return k}}(a,c,b,d,e,f,h,i)}));
S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=(j=m||function(a,b,c,d,e,f,i,h){return h.P&&"iPad"==e&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f,h,i){if(i.Q&&("iPhone"==e||"iPod"==e))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b;return m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Chrome"==a){var c=/([0-9]+.[0-9]+).([0-9]+).([0-9]+)/.exec(b);if(c&&6<=parseFloat(c[1]))return k}}(a,
c,b,d,e,f,h,i)}));S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==e||"Linux"==e?k:m)?m:function(a,b,c,d){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(d)&&!a.test(d)):m}(a,c,b,d,e,f,h,i)}));
S(new R("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,d){return"Gecko"==c?(a=/1.9.1b[1-3]{1}/,/1.9.1/.test(d)&&!a.test(d)):m}(a,c,b,d,e,f,h,i)}));
S(new R("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||i.B&&"Android"==e;return!j?m:function(a,b,c,d){return"Gecko"==c&&(b=/([0-9]+.[0-9]+)(.([0-9]+)|)/.exec(d))?(a=parseFloat(b[1]),b=parseInt(b[3],10),1.9<a||1.9<=a&&1<b):m}(a,c,b,d,e,f,h,i)}));
S(new R("i",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,d,e,f,i){if("MSIE"==a)return(a=/([0-9]+.[0-9]+)/.exec(b))?6<=parseFloat(a[1])&&(i===g||9>i):m}(a,c,b,d,e,f,h,i)}));
S(new R("d",function(a,c,b,d,e,f,h){if(!(c=m))b=/^([0-9]+).([0-9]+)/.exec(f),"Windows"==e&&b?(c=parseInt(b[1],10),b=parseInt(b[2],10),c=6<c||6==c&&1<=b):c=m;a=c||("Windows"==e&&"6.0"==f?k:m)?"MSIE"==a?9<=h:g:m;return a}));S(new R("d",function(a,c,b,d,e,f,h,i){if(!(c=m))f=/^([0-9]+)/.exec(f),c=i.Ha&&"Windows Phone"==e&&f?8<=parseInt(f[1],10):m;return!c?m:"MSIE"==a}));
S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i);return!j&&!("Ubuntu"==e||"Linux"==e?k:m)?m:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return m}(a,c,b,d,e,f,h,i)}));
S(new R("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b){if("Opera"==a){var c=parseFloat(b);return 10.54<=c&&11.1>c}return m}(a,c,b,d,e,f,h,i)}));
S(new R("d",function(a,c,b,d,e,f,h,i){var j;j=(j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i))||("Ubuntu"==
e||"Linux"==e?k:m)||i.B&&"Android"==e;return!j?m:"Opera"==a?11.1<=parseFloat(c):m}));S(new R("b",function(a,c,b,d,e,f,h,i){var j;j=m||function(a,b,c,d,e,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==e&&a?(e=parseInt(a[1],10),f=parseInt(a[3],10),10<e||10==e&&4<=f):"Macintosh"==e&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,e){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(e))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):m}(a,c,b,d,e,f,h,i)}));
S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,e,d,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==d&&a?(d=parseInt(a[1],10),a=parseInt(a[2],10),6<d||6==d&&1<=a):m}(a,c,b,d,e,f,h,i);return!j?m:function(a,b,c,d){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(d))?(a=parseFloat(a[1]),525.13<=a&&534.5>a):m}(a,c,b,d,e,f,h,i)}));
S(new R("d",function(a,c,b,d,e,f,h,i){var j;j=(j=m||("Windows"==e&&"5.1"==f?k:m)||("Windows"==e&&"5.2"==f?k:m)||("Windows"==e&&"6.0"==f?k:m)||function(a,b,c,d,e,f){a=/^([0-9]+).([0-9]+)/.exec(f);return"Windows"==e&&a?(e=parseInt(a[1],10),a=parseInt(a[2],10),6<e||6==e&&1<=a):m}(a,c,b,d,e,f,h,i))||function(a,b,c,e,d,f){a=/^([0-9]+)(_|.)([0-9]+)/.exec(f);return"Macintosh"==d&&a?(d=parseInt(a[1],10),f=parseInt(a[3],10),10<d||10==d&&4<=f):"Macintosh"==d&&"Unknown"==f?k:m}(a,c,b,d,e,f,h,i);return!j?m:function(a,
b,c,d){return"Safari"==a&&"AppleWebKit"==c&&(a=/([0-9]+.[0-9]+)/.exec(d))?534.5<=parseFloat(a[1]):m}(a,c,b,d,e,f,h,i)}));
S(new R("a",function(a,c,b,d,e,f,h,i){var j;j=(j=m||function(a,b,c,d,e,f,i,h){return h.P&&"iPad"==e&&(a=/^([0-9]+)_([0-9]+)/.exec(f))?(b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b):m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f,i,h){if(h.Q&&("iPhone"==e||"iPod"==e))if(a=/^([0-9]+)_([0-9]+)/.exec(f))return b=parseInt(a[2],10),4==parseInt(a[1],10)&&2<=b;return m}(a,c,b,d,e,f,h,i);return!j?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?k:m}));
S(new R("d",function(a,c,b,d,e,f,h,i){var j;j=(j=m||function(a,b,c,d,e,f,i,h){return h.P&&"iPad"==e?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i))||function(a,b,c,d,e,f,i,h){return h.Q&&("iPhone"==e||"iPod"==e)?(a=/^([0-9]+)_([0-9]+)/.exec(f))?5<=parseInt(a[1],10):m:m}(a,c,b,d,e,f,h,i);return!j?m:"Safari"==a&&"AppleWebKit"==b||"Unknown"==a&&"AppleWebKit"==b&&("iPhone"==e||"iPad"==e)?k:m}));var T=new function(){this.ga=[];this.I={}};Oa(new Na("AllFonts",function(a,c){return c}));
Oa(new Na("DefaultFourFontsWithSingleFvdFamilies",function(a,c,b){for(var d=0;d<c.length;d++){var e=c[d],f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+e;b.push(new ya(f,[e]))}a={};for(e=0;e<c.length;e++)b=c[e],d=b.charAt(1),(a[d]||(a[d]=[])).push(b);b=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<b.length;e++)for(var f=b[e],h=0;h<f.length;h++){var i=f[h];if(a[i]){d=d.concat(a[i]);break}}b=d;d={};a=[];for(e=0;e<b.length;e++)f=b[e],d[f]||(d[f]=k,a.push(f));b=[];for(d=0;d<c.length;d++){e=c[d];
for(f=0;f<a.length;f++)h=a[f],h==e&&b.push(h)}return b}));T.I.a="AllFonts";T.I.b="AllFonts";T.I.d="AllFonts";T.I.f="AllFonts";T.I.i="DefaultFourFontsWithSingleFvdFamilies";var V=new function(){this.J={}};V.J.a=[];V.J.b=[];V.J.d=[];V.J.f=["observeddomain"];V.J.i=["observeddomain","fontmask"];var Va=(new da(navigator.userAgent,document)).parse();window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var Wa=window.Typekit.config||{},Xa=l;Wa.k&&(Xa=new U(Wa.k));var Ya=function(a,c){setTimeout(a,c)},W=new Ia(Xa,new L(window),Va,document.documentElement,Ya),X=new Ma(window,Ya);window.Typekit.load=function(){W.load.apply(W,arguments)};window.Typekit.addKit=function(){W.$.apply(W,arguments)}}var Za,$a=l,ab=l,bb=l,cb,Y,$,N=window.Typekit.config||{};N.b&&($a=new U(N.b),ab=new Sa(window,document,$a,N.bu));N.p&&(bb=new U(N.p));cb=new function(){var a=bb;this.ma=ab;this.Aa=a};
$=new Ca(new L(window));$.ia=cb;Y=new Aa;Y.Q=!N.si;Y.P=!N.st;Y.B=!N.sa;Y.Ha=!N.sw;Y.na=!N.sb;$.oa=Y;N.w&&($.Ga=N.w);N.f&&(Za=new U(N.f),$.da=Za);var O;if(N.fn)for(O=0;O<N.fn.length;O+=2)$.n.push(new va(N.fn[O],N.fn[O+1]));if(N.c)for(O=0;O<N.c.length;O+=2)$.T.push(new ta);$.ca=V;$.aa=Ba;$.fa=T;X&&X.G.__webfonttypekitmodule__?(X.$($),X.load()):(Da($,Va),window.Typekit.addKit($));
})(this,document);