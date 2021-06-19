(self["webpackChunk_zedvision_blog"] = self["webpackChunk_zedvision_blog"] || []).push([[691],{

/***/ 7844:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js
var taggedTemplateLiteralLoose = __webpack_require__(7739);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1476);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7135);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../node_modules/@emotion/react/dist/emotion-react.browser.esm.js + 15 modules
var emotion_react_browser_esm = __webpack_require__(3254);
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__(5414);
// EXTERNAL MODULE: ./src/components/bio.tsx + 1 modules
var bio = __webpack_require__(2954);
// EXTERNAL MODULE: ./src/components/layout.tsx
var layout = __webpack_require__(7084);
// EXTERNAL MODULE: ./src/components/seo.tsx + 1 modules
var seo = __webpack_require__(3753);
;// CONCATENATED MODULE: ./src/components/code/getUser.ts
var shaDB={get:function(){var _get=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(key,type){var _yield$Function,getDB,db;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return new Function("return import(`https://spike.land/modules/shaDB.js`)")();case 2:_yield$Function=_context.sent;getDB=_yield$Function.getDB;_context.next=6;return getDB("shaDB");case 6:_context.t0=_context.sent;_context.next=9;return(0,_context.t0)();case 9:db=_context.sent;return _context.abrupt("return",db.get(key,type));case 11:case"end":return _context.stop();}}},_callee);}));function get(_x,_x2){return _get.apply(this,arguments);}return get;}(),put:function(){var _put=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(key,value){var _yield$Function2,getDB,db;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return new Function("return import(`https://spike.land/modules/shaDB.js`)")();case 2:_yield$Function2=_context2.sent;getDB=_yield$Function2.getDB;_context2.next=6;return getDB("shaDB");case 6:_context2.t0=_context2.sent;_context2.next=9;return(0,_context2.t0)();case 9:db=_context2.sent;return _context2.abrupt("return",db.put(key,value));case 11:case"end":return _context2.stop();}}},_callee2);}));function put(_x3,_x4){return _put.apply(this,arguments);}return put;}()};function getUserId(){return _getUserId.apply(this,arguments);}function _getUserId(){_getUserId=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(){var uuid,resp,data;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!(typeof window==="undefined")){_context3.next=2;break;}return _context3.abrupt("return","");case 2:_context3.next=4;return shaDB.get("uuid","string");case 4:uuid=_context3.sent;if(uuid){_context3.next=15;break;}_context3.next=8;return fetch("https://spike.land/register");case 8:resp=_context3.sent;_context3.next=11;return resp.json();case 11:data=_context3.sent;_context3.next=14;return shaDB.put("uuid",data.uuid);case 14:return _context3.abrupt("return",data.uuid);case 15:return _context3.abrupt("return",uuid);case 16:case"end":return _context3.stop();}}},_callee3);}));return _getUserId.apply(this,arguments);}
// EXTERNAL MODULE: ./src/components/utils/typography.ts
var typography = __webpack_require__(280);
;// CONCATENATED MODULE: ./src/components/utils/sha256/sha256.ts
function sha256(_x){return _sha.apply(this,arguments);}function _sha(){_sha=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(message){var msgBuffer,hashBuffer,hashArray,hashHex;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:msgBuffer=new TextEncoder().encode(message);_context.next=3;return crypto.subtle.digest("SHA-256",msgBuffer);case 3:hashBuffer=_context.sent;hashArray=Array.from(new Uint8Array(hashBuffer));// convert bytes to hex string
hashHex=hashArray.map(function(b){return("00"+b.toString(16)).slice(-2);}).join("");return _context.abrupt("return",hashHex);case 7:case"end":return _context.stop();}}},_callee);}));return _sha.apply(this,arguments);}
;// CONCATENATED MODULE: ./src/components/code/Qr.tsx
var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10;/** @jsx jsx */var Qr=function Qr(){var side1=react.useRef(null);var side2=react.useRef(null);var side3=react.useRef(null);var side4=react.useRef(null);var side5=react.useRef(null);var side6=react.useRef(null);var _React$useState=react.useState(100),retry=_React$useState[0],setRetry=_React$useState[1];// const [secrets, setSecrets] = React.useState({})
var _React$useState2=react.useState({current:"",last:""}),urls=_React$useState2[0],setUrl=_React$useState2[1];var _React$useState3=react.useState({}),cubeSides=_React$useState3[0],setQrCube=_React$useState3[1];var setQR=/*#__PURE__*/function(){var _ref=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(side,color,element){var options,qr,LazyQR;return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(typeof window==="undefined")){_context.next=2;break;}return _context.abrupt("return","painAndSufferingBecauseOfLegacyWebpackRendering");case 2:options={size:220,element:element,foregroundAlpha:0.9,foreground:color,backgroundAlpha:1,padding:10,background:"black",value:urls.current};qr="qr"+side;if(!(typeof cubeSides[qr]==="undefined")){_context.next=9;break;}_context.next=7;return new Function("return import('https://spike.land/modules/QRious.mjs').then(x=>x.QRious)")();case 7:LazyQR=_context.sent;cubeSides[qr]=new LazyQR(options);case 9:if(cubeSides[qr].get().value!==urls.current){cubeSides[qr].value=urls.current;}return _context.abrupt("return",cubeSides[qr]);case 11:case"end":return _context.stop();}}},_callee);}));return function setQR(_x,_x2,_x3){return _ref.apply(this,arguments);};}();react.useEffect(function(){var connect=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee2(){var secret,key,url;return regenerator_default().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:secret=Math.random()+"-"+Math.random()+"-"+Math.random();_context2.next=3;return sha256(secret);case 3:key=_context2.sent.slice(0,8);url="https://spike.land/"+key;// setSecrets(s=> {...s, [url]: secret});
console.log("waiting for url: "+url);setUrl({last:urls.current,current:url});setTimeout(function(){return setRetry(function(x){return x-1;});},20000);case 8:case"end":return _context2.stop();}}},_callee2);}));return function connect(){return _ref2.apply(this,arguments);};}();if(typeof window!=="undefined"&&retry>0&&cubeState===1){connect();}},[retry]);react.useEffect(function(){var setSignal=/*#__PURE__*/function(){var _ref3=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee3(url){var _yield$Function,fetchSignal,getData,signalData;return regenerator_default().wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:if(!(cubeState!==1)){_context3.next=2;break;}return _context3.abrupt("return");case 2:if(!(typeof window==="undefined")){_context3.next=4;break;}return _context3.abrupt("return");case 4:_context3.next=6;return new Function("return import(\"https://spike.land/js/hash.mjs\")")();case 6:_yield$Function=_context3.sent;fetchSignal=_yield$Function.fetchSignal;_context3.next=10;return fetchSignal(url,7);case 10:getData=_context3.sent;if(getData){_context3.next=13;break;}return _context3.abrupt("return");case 13:setCubeState(0);Loader(side1.current,220);Loader(side2.current,220);Loader(side3.current,220);Loader(side4.current,220);Loader(side5.current,220);Loader(side6.current,220);_context3.next=22;return getData();case 22:signalData=_context3.sent;setCubeState(-1);setTimeout(function(){return window.location.href=signalData.rootUrl;},2000);case 25:case"end":return _context3.stop();}}},_callee3);}));return function setSignal(_x4){return _ref3.apply(this,arguments);};}();var setSignals=/*#__PURE__*/function(){var _ref4=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee4(){return regenerator_default().wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:urls.last&&setSignal(urls.last);urls.current&&setSignal(urls.current);_context4.t0=setQrCube;_context4.next=5;return setQR(1,"red",side1.current);case 5:_context4.t1=_context4.sent;_context4.next=8;return setQR(2,"#FFA52C",side2.current);case 8:_context4.t2=_context4.sent;_context4.next=11;return setQR(3,"yellow",side3.current);case 11:_context4.t3=_context4.sent;_context4.next=14;return setQR(4,"#35CB4A",side4.current);case 14:_context4.t4=_context4.sent;_context4.next=17;return setQR(5,"#3C99DC",side5.current);case 17:_context4.t5=_context4.sent;_context4.next=20;return setQR(6,"#DF3BCF",side6.current);case 20:_context4.t6=_context4.sent;_context4.t7={qr1:_context4.t1,qr2:_context4.t2,qr3:_context4.t3,qr4:_context4.t4,qr5:_context4.t5,qr6:_context4.t6};(0,_context4.t0)(_context4.t7);case 23:case"end":return _context4.stop();}}},_callee4);}));return function setSignals(){return _ref4.apply(this,arguments);};}();if(typeof window!=="undefined"&&retry>0)setSignals();},[urls]);var _React$useState4=react.useState(1),cubeState=_React$useState4[0],setCubeState=_React$useState4[1];return (0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n              display: inline-block;\n              position: relative;\n              margin: 100px;\n              overflow: visible;\n              @keyframes byecube {\n                from {\n                  transform: translateX(0px);\n                }\n                to {\n                    transform: translateY(-1000px);\n                  }\n              };\n          "])))},(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n        position: absolute;\n         animation-name:",";\n        animation-timing-function: cubic-bezier(.57,-0.6,0,1.03);\n        animation-iteration-count: 1;\n        animation-duration: 4s;\n        transform-style: preserve-3d;\n        transform-origin:  center center; \n      "])),cubeState===1||cubeState===0?"none":"byecube")},(0,emotion_react_browser_esm/* jsx */.tZ)(Cube,{size:220,animate:true,sides:[(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side1}),(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side2}),(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side3}),(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side4}),(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side5}),(0,emotion_react_browser_esm/* jsx */.tZ)("canvas",{ref:side6})]})));};//@ts-ignore
var Cube=function Cube(_ref5){var sides=_ref5.sides,_size=_ref5.size,animate=_ref5.animate;var border=0;var size=_size+2*border;//@ts-ignore
return (0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n      position: relative;\n        display: inline-block; \n        perspective: 900px;\n\n         perspective-origin: 50% 50% ; \n\n\n  \n        "])))},(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:spinCubeCss(size,animate)},(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n              transform: translateZ(","px);\n              "])),size/2)},sides[0]),(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n            transform: rotateY(90deg) \n                       translateZ(","px);\n            "])),size/2)},sides[1]),(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n                transform: rotateY(90deg) \n                           rotateX(90deg) \n                           translateZ(","px);\n                "])),size/2)},sides[2]),(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteralLoose/* default */.Z)([" \n                transform: translateZ( -","px) \n                           rotateY(180deg) \n                           rotateZ(90deg);\n            "])),size/2)},sides[3]),(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteralLoose/* default */.Z)([" \n                transform: rotateY(-90deg) \n                           rotateZ(90deg) \n                           translateZ(","px);\n                "])),size/2)},sides[4]),(0,emotion_react_browser_esm/* jsx */.tZ)("div",{css:(0,emotion_react_browser_esm/* css */.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n            transform: rotateX(-90deg) \n                       translateZ(","px);\n            "])),size/2)},sides[5])));};if(typeof window==="undefined")Math.random=function(){return 0.4;};//elegant solution against the always changing build artifact
var randoms=new Array(3).fill(0).map(function(x,i){return(Math.random()*360-180)*(i===2?2:1);});var r=randoms;var spinCubeCss=function spinCubeCss(size,animate){return (0,emotion_react_browser_esm/* css */.iv)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteralLoose/* default */.Z)(["\n    width: ","px; \n    height: ","px;\n    animation-name: ",";\n    animation-timing-function: cubic-bezier(.57,-0.6,0,1.03);\n    animation-iteration-count: infinite;\n    animation-duration: 10s;\n    transform-style: preserve-3d;\n    transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n    \n  \n        \n        \n    @keyframes spincube {\n      from,to {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n      }\n      16% {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n      }\n      33% {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n        }\n      50% {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n      }\n      66% {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n      }\n      83% {\n        transform: rotateX(","deg) rotateY(","deg) rotateZ(","deg);\n      }\n    }\n\n    div{\n      position: absolute;\n      width: ","px;\n      height: ","px;\n      /* margin: 10px;\n      padding: 10px; */\n      /* border: 10px solid transparent; */\n      background: rgba(255,255,255, .5);\n\n      box-shadow: inset 0 0 50px rgba(255,0,0);\n    }\n"])),size,size,animate&&"spincube",r[1],r[2],r[0],r[1],r[2],r[0],r[1],r[0],r[0],r[2],r[0],r[1],r[2],r[1],r[0],r[0],r[1],r[2],r[0],r[2],r[1],size,size);};/* harmony default export */ var code_Qr = (function(){return jsx(Qr,null);});var Loader=function Loader(c,size){var w=c.width=size,h=c.height=size,ctx=c.getContext("2d"),opts={len:12,count:50,baseTime:10,addedTime:10,dieChance:.005,spawnChance:.1,sparkChance:.01,sparkDist:10,sparkSize:1,color:"hsl(hue,100%,light%)",baseLight:50,addedLight:10,// [50-10,50+10]
shadowToTimePropMultiplier:6,baseLightInputMultiplier:.01,addedLightInputMultiplier:.02,cx:w/2,cy:h/2,repaintAlpha:.01,hueChange:0.1},tick=0,lines=[],dieX=w/2/opts.len,dieY=h/2/opts.len,baseRad=Math.PI*2/6;ctx.fillStyle="transparent";ctx.fillRect(0,0,w,h);function loop(){window.requestAnimationFrame(loop);++tick;ctx.globalCompositeOperation="source-over";ctx.shadowBlur=0;ctx.fillStyle="rgba(0,0,0,alp)".replace("alp",String(opts.repaintAlpha));ctx.fillRect(0,0,w,h);ctx.globalCompositeOperation="lighter";if(lines.length<opts.count&&Math.random()<opts.spawnChance){lines.push(new Line());}lines.map(function(line){line.step();});}var Line=/*#__PURE__*/function(){function Line(){this.x=0;this.y=0;this.addedX=0;this.addedY=0;this.rad=0;this.lightInputMultiplier=0;this.color="";this.time=0;this.targetTime=0;this.cumulativeTime=0;this.reset();}var _proto=Line.prototype;_proto.reset=function reset(){this.x=0;this.y=0;this.addedX=0;this.addedY=0;this.rad=0;this.lightInputMultiplier=opts.baseLightInputMultiplier+opts.addedLightInputMultiplier*Math.random();this.color=opts.color.replace("hue",String(tick*opts.hueChange));this.cumulativeTime=0;this.beginPhase();};_proto.beginPhase=function beginPhase(){this.x+=this.addedX;this.y+=this.addedY;this.time=0;this.targetTime=opts.baseTime+opts.addedTime*Math.random()|0;this.rad+=baseRad*(Math.random()<.5?1:-1);this.addedX=Math.cos(this.rad);this.addedY=Math.sin(this.rad);if(Math.random()<opts.dieChance||this.x>dieX||this.x<-dieX||this.y>dieY||this.y<-dieY){this.reset();}};_proto.step=function step(){++this.time;++this.cumulativeTime;if(this.time>=this.targetTime){this.beginPhase();}var prop=this.time/this.targetTime,wave=Math.sin(prop*Math.PI/2),x=this.addedX*wave,y=this.addedY*wave;ctx.shadowBlur=prop*opts.shadowToTimePropMultiplier;ctx.fillStyle=ctx.shadowColor=this.color.replace("light",String(opts.baseLight+opts.addedLight*Math.sin(this.cumulativeTime*this.lightInputMultiplier)));ctx.fillRect(opts.cx+(this.x+x)*opts.len,opts.cy+(this.y+y)*opts.len,2,2);if(Math.random()<opts.sparkChance){ctx.fillRect(opts.cx+(this.x+x)*opts.len+Math.random()*opts.sparkDist*(Math.random()<.5?1:-1)-opts.sparkSize/2,opts.cy+(this.y+y)*opts.len+Math.random()*opts.sparkDist*(Math.random()<.5?1:-1)-opts.sparkSize/2,opts.sparkSize,opts.sparkSize);}};return Line;}();loop();};
;// CONCATENATED MODULE: ./assets/forkMe.png
/* harmony default export */ var forkMe = (__webpack_require__.p + "static/forkMe-0c72e9017438eab84000fa680db48ede.png");
;// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_templateObject;/** @jsx jsx */var isMobile=function isMobile(){if(typeof window==="undefined")return false;return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);};var BlogIndex=function BlogIndex(_ref){var data=_ref.data;var edges=data.allMdx.edges;react.useEffect(function(){if(typeof window!=="undefined"){var install=/*#__PURE__*/function(){var _ref2=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/regenerator_default().mark(function _callee(){return regenerator_default().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.t0=console;_context.next=3;return getUserId();case 3:_context.t1=_context.sent;_context.t0.log.call(_context.t0,_context.t1);case 5:case"end":return _context.stop();}}},_callee);}));return function install(){return _ref2.apply(this,arguments);};}();install();// registerSW();
}},[]);return (0,emotion_react_browser_esm/* jsx */.tZ)(layout/* Layout */.A,null,(0,emotion_react_browser_esm/* jsx */.tZ)(seo/* SEO */.H,{title:"This is Zed."}),isMobile()===false?(0,emotion_react_browser_esm/* jsx */.tZ)("h1",null,"Open the code editor here: ",(0,emotion_react_browser_esm/* jsx */.tZ)(Qr,null)):(0,emotion_react_browser_esm/* jsx */.tZ)("h1",null,"This is my blog."),(0,emotion_react_browser_esm/* jsx */.tZ)("a",{href:"https://github.com/zed-vision/monorepo"},(0,emotion_react_browser_esm/* jsx */.tZ)("img",{loading:"lazy",width:"149",height:"149",src:forkMe,style:{position:"absolute",top:0,right:0},alt:"Fork me on GitHub"})),edges.map(function(_ref3){var node=_ref3.node;var title=node.frontmatter.title||node.fields.slug;return (0,emotion_react_browser_esm/* jsx */.tZ)("article",{key:node.fields.slug},(0,emotion_react_browser_esm/* jsx */.tZ)("header",null,(0,emotion_react_browser_esm/* jsx */.tZ)("h3",{css:(0,emotion_react_browser_esm/* css */.iv)(pages_templateObject||(pages_templateObject=(0,taggedTemplateLiteralLoose/* default */.Z)(["  \n                      margin-bottom: ",";\n                      "])),(0,typography/* rhythm */.qZ)(1/4))},(0,emotion_react_browser_esm/* jsx */.tZ)(gatsby_browser_entry.Link,{to:node.fields.slug},title)),(0,emotion_react_browser_esm/* jsx */.tZ)("small",null,node.frontmatter.date)),(0,emotion_react_browser_esm/* jsx */.tZ)("section",null,(0,emotion_react_browser_esm/* jsx */.tZ)("p",{dangerouslySetInnerHTML:{__html:node.frontmatter.description||node.excerpt}})));}),(0,emotion_react_browser_esm/* jsx */.tZ)(bio/* Bio */.w,null));};/* harmony default export */ var pages = (BlogIndex);var pageQuery="497448492";

/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-tsx-511fa61e20ce1c22529c.js.map