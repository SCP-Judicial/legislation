!function(){"use strict";var e,a,f,t,d,n={},b={};function r(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={id:e,loaded:!1,exports:{}};return n[e].call(f.exports,f,f.exports,r),f.loaded=!0,f.exports}r.m=n,r.c=b,e=[],r.O=function(a,f,t,d){if(!f){var n=1/0;for(i=0;i<e.length;i++){f=e[i][0],t=e[i][1],d=e[i][2];for(var b=!0,c=0;c<f.length;c++)(!1&d||n>=d)&&Object.keys(r.O).every((function(e){return r.O[e](f[c])}))?f.splice(c--,1):(b=!1,d<n&&(n=d));if(b){e.splice(i--,1);var o=t();void 0!==o&&(a=o)}}return a}d=d||0;for(var i=e.length;i>0&&e[i-1][2]>d;i--)e[i]=e[i-1];e[i]=[f,t,d]},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,{a:a}),a},f=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var d=Object.create(null);r.r(d);var n={};a=a||[null,f({}),f([]),f(f)];for(var b=2&t&&e;"object"==typeof b&&!~a.indexOf(b);b=f(b))Object.getOwnPropertyNames(b).forEach((function(a){n[a]=function(){return e[a]}}));return n.default=function(){return e},r.d(d,n),d},r.d=function(e,a){for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(a,f){return r.f[f](e,a),a}),[]))},r.u=function(e){return"assets/js/"+({53:"935f2afb",310:"6296f7d3",434:"9c77630e",546:"47566624",629:"c3109ee2",635:"81153b44",666:"bdd77275",706:"4a492b51",1118:"1441a684",1362:"a4d0b608",1407:"a01fa775",1477:"b2f554cd",1529:"2b6a2da1",1568:"ebe0bb5e",1605:"12f3fa6a",1681:"3a57b25e",1772:"3e4f7011",1795:"7d0ffe37",2035:"4e1ea734",2038:"438a0a33",2074:"cd239e54",2166:"0d8469d8",2324:"07fe4428",2353:"5d3ecc27",2409:"94d43ed9",2428:"789d60bf",2734:"b4dc7a05",2762:"117967ab",2870:"97c57df3",2887:"cd43e3a8",3085:"1f391b9e",3100:"9915bd0f",3433:"37b84b06",3507:"00e440f7",3608:"9e4087bc",3751:"3720c009",3802:"f305e187",3820:"fb1ea75f",4121:"55960ee5",4400:"2a65564d",4531:"df932895",4601:"2debd923",4612:"77ec119b",4773:"08a05d71",4857:"a963033a",4874:"7b275881",5157:"93c07e9a",5325:"d8bbd422",5378:"2a3a8eda",5685:"ad9eb9d9",5874:"2df00b76",6087:"eabee06d",6251:"120f692d",6276:"cb3d954e",6504:"94ef8593",6676:"285dba62",6862:"73d2fdc6",6989:"e3353cb3",7412:"896dbac6",7414:"393be207",7522:"9733ae77",7701:"8818c8b7",7868:"ce36a9a0",7889:"30280777",7918:"17896441",8043:"1164e218",8158:"a3017366",8230:"a21ecdfa",8267:"88aa3107",8282:"2f495af9",8358:"ef99055f",8487:"b9ee55e5",8923:"65da09f9",9306:"528b9716",9335:"080240c6",9379:"18b17a43",9514:"1be78505",9835:"bed04bff"}[e]||e)+"."+{53:"e4dbaedd",310:"3757b6c4",434:"a82d81ac",546:"08551169",629:"a0339a5a",635:"2612b5dd",666:"5141333f",706:"1fe461b4",1118:"be03ecb5",1362:"01bf655e",1407:"73d5864f",1477:"dfe22b1f",1529:"3fa9e7ef",1568:"60acefcd",1605:"3a6aba20",1681:"429964ab",1772:"29c35c68",1795:"77f9dd8c",2035:"8d335deb",2038:"3f36ef0c",2074:"92e63a5d",2166:"ce4175fe",2324:"e39aa1a9",2353:"64b907d1",2409:"93f7aceb",2428:"9ac59306",2734:"4d5808b8",2762:"d9a5681a",2870:"013abc07",2887:"c04e5b52",3085:"5ee15ad8",3100:"8fb96678",3433:"8c61efa1",3507:"f29465cd",3608:"99f3795d",3751:"32202b2b",3802:"9fa2000f",3820:"dd973e8e",4121:"5381c563",4400:"e977a262",4531:"6f55b059",4601:"9d799e7d",4608:"7de93e61",4612:"4e0b8064",4773:"c70140f9",4857:"4a4ebf0b",4874:"bd2d0c70",5157:"a5798508",5325:"4eeceb89",5378:"c733b123",5685:"91adb2ee",5874:"e38035a3",6087:"8f113f99",6159:"5c18456a",6251:"a25eb785",6276:"abd330b0",6504:"a7f5552c",6676:"ee042c7a",6698:"cd193807",6862:"cfb4c35d",6989:"7c260df0",7412:"5f383736",7414:"e662f907",7522:"3ec4af1f",7701:"72e5a2c0",7868:"3db764a3",7889:"be2cbb22",7918:"d0d3f9d1",8043:"619b2414",8158:"323b1404",8230:"65a4cc37",8267:"7e76124a",8282:"b54a218b",8358:"12ee3ade",8487:"36ce9fc3",8923:"53550091",9306:"e67eb250",9335:"20832b75",9379:"ba7f7fa8",9514:"50971f9e",9727:"f118c8b8",9835:"56aee4cc"}[e]+".js"},r.miniCssF=function(e){return"assets/css/styles.2c3a8204.css"},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t={},d="legislation:",r.l=function(e,a,f,n){if(t[e])t[e].push(a);else{var b,c;if(void 0!==f)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==d+f){b=u;break}}b||(c=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,r.nc&&b.setAttribute("nonce",r.nc),b.setAttribute("data-webpack",d+f),b.src=e),t[e]=[a];var l=function(a,f){b.onerror=b.onload=null,clearTimeout(s);var d=t[e];if(delete t[e],b.parentNode&&b.parentNode.removeChild(b),d&&d.forEach((function(e){return e(f)})),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),c&&document.head.appendChild(b)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"7918",30280777:"7889",47566624:"546","935f2afb":"53","6296f7d3":"310","9c77630e":"434",c3109ee2:"629","81153b44":"635",bdd77275:"666","4a492b51":"706","1441a684":"1118",a4d0b608:"1362",a01fa775:"1407",b2f554cd:"1477","2b6a2da1":"1529",ebe0bb5e:"1568","12f3fa6a":"1605","3a57b25e":"1681","3e4f7011":"1772","7d0ffe37":"1795","4e1ea734":"2035","438a0a33":"2038",cd239e54:"2074","0d8469d8":"2166","07fe4428":"2324","5d3ecc27":"2353","94d43ed9":"2409","789d60bf":"2428",b4dc7a05:"2734","117967ab":"2762","97c57df3":"2870",cd43e3a8:"2887","1f391b9e":"3085","9915bd0f":"3100","37b84b06":"3433","00e440f7":"3507","9e4087bc":"3608","3720c009":"3751",f305e187:"3802",fb1ea75f:"3820","55960ee5":"4121","2a65564d":"4400",df932895:"4531","2debd923":"4601","77ec119b":"4612","08a05d71":"4773",a963033a:"4857","7b275881":"4874","93c07e9a":"5157",d8bbd422:"5325","2a3a8eda":"5378",ad9eb9d9:"5685","2df00b76":"5874",eabee06d:"6087","120f692d":"6251",cb3d954e:"6276","94ef8593":"6504","285dba62":"6676","73d2fdc6":"6862",e3353cb3:"6989","896dbac6":"7412","393be207":"7414","9733ae77":"7522","8818c8b7":"7701",ce36a9a0:"7868","1164e218":"8043",a3017366:"8158",a21ecdfa:"8230","88aa3107":"8267","2f495af9":"8282",ef99055f:"8358",b9ee55e5:"8487","65da09f9":"8923","528b9716":"9306","080240c6":"9335","18b17a43":"9379","1be78505":"9514",bed04bff:"9835"}[e]||e,r.p+r.u(e)},function(){var e={1303:0,532:0};r.f.j=function(a,f){var t=r.o(e,a)?e[a]:void 0;if(0!==t)if(t)f.push(t[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var d=new Promise((function(f,d){t=e[a]=[f,d]}));f.push(t[2]=d);var n=r.p+r.u(a),b=new Error;r.l(n,(function(f){if(r.o(e,a)&&(0!==(t=e[a])&&(e[a]=void 0),t)){var d=f&&("load"===f.type?"missing":f.type),n=f&&f.target&&f.target.src;b.message="Loading chunk "+a+" failed.\n("+d+": "+n+")",b.name="ChunkLoadError",b.type=d,b.request=n,t[1](b)}}),"chunk-"+a,a)}},r.O.j=function(a){return 0===e[a]};var a=function(a,f){var t,d,n=f[0],b=f[1],c=f[2],o=0;if(n.some((function(a){return 0!==e[a]}))){for(t in b)r.o(b,t)&&(r.m[t]=b[t]);if(c)var i=c(r)}for(a&&a(f);o<n.length;o++)d=n[o],r.o(e,d)&&e[d]&&e[d][0](),e[n[o]]=0;return r.O(i)},f=self.webpackChunklegislation=self.webpackChunklegislation||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))}()}();