(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{155:function(e,t,n){e.exports=function(){"use strict";var e=function(){},t=Object.prototype.hasOwnProperty,n=Array.prototype.slice;function i(e,i,r){for(var s,a,o=0,c=(r=n.call(arguments,2)).length;o<c;o++)for(s in a=r[o])e&&!t.call(a,s)||(i[s]=a[s])}var r=function(t,n,r,s){var a=this;return"string"!=typeof t&&(s=r,r=n,n=t,t=null),"function"!=typeof n&&(s=r,r=n,n=function(){return a.apply(this,arguments)}),i(!1,n,a,s),n.prototype=function(t,n){var r;return"function"==typeof Object.create?r=Object.create(t):(e.prototype=t,r=new e,e.prototype=null),n&&i(!0,r,n),r}(a.prototype,r),n.prototype.constructor=n,n.class_=t||a.class_,n.super_=a,n};function s(){}s.class_="Nevis",s.super_=Object,s.extend=r;var a=s,o=a.extend((function(e,t,n){this.qrious=e,this.element=t,this.element.qrious=e,this.enabled=Boolean(n)}),{draw:function(e){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(e){var t=this.qrious,n=t.padding||0,i=Math.floor((t.size-2*n)/e.width);return Math.max(1,i)},getOffset:function(e){var t=this.qrious,n=t.padding;if(null!=n)return n;var i=this.getModuleSize(e),r=Math.floor((t.size-i*e.width)/2);return Math.max(0,r)},render:function(e){this.enabled&&(this.resize(),this.reset(),this.draw(e))},reset:function(){},resize:function(){}}),c=o.extend({draw:function(e){var t,n,i=this.qrious,r=this.getModuleSize(e),s=this.getOffset(e),a=this.element.getContext("2d");for(a.fillStyle=i.foreground,a.globalAlpha=i.foregroundAlpha,t=0;t<e.width;t++)for(n=0;n<e.width;n++)e.buffer[n*e.width+t]&&a.fillRect(r*t+s,r*n+s,r,r)},reset:function(){var e=this.qrious,t=this.element.getContext("2d"),n=e.size;t.lineWidth=1,t.clearRect(0,0,n,n),t.fillStyle=e.background,t.globalAlpha=e.backgroundAlpha,t.fillRect(0,0,n,n)},resize:function(){var e=this.element;e.width=e.height=this.qrious.size}}),l=a.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),u=a.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),f=a.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),h=a.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),d=a.extend((function(e){var t,n,i,r,s,a=e.value.length;for(this._badness=[],this._level=u.LEVELS[e.level],this._polynomial=[],this._value=e.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,i=4*(this._level-1)+16*(this._version-1),r=u.BLOCKS[i++],s=u.BLOCKS[i++],t=u.BLOCKS[i++],n=u.BLOCKS[i],!(a<=(i=t*(r+s)+s-3+(this._version<=9)))););this._dataBlock=t,this._eccBlock=n,this._neccBlock1=r,this._neccBlock2=s;var o=this.width=17+4*this._version;this.buffer=d._createArray(o*o),this._ecc=d._createArray(t+(t+n)*(r+s)+s),this._mask=d._createArray((o*(o+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+o*(o-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(a),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}),{_addAlignment:function(e,t){var n,i=this.buffer,r=this.width;for(i[e+r*t]=1,n=-2;n<2;n++)i[e+n+r*(t-2)]=1,i[e-2+r*(t+n+1)]=1,i[e+2+r*(t+n)]=1,i[e+n+1+r*(t+2)]=1;for(n=0;n<2;n++)this._setMask(e-1,t+n),this._setMask(e+1,t-n),this._setMask(e-n,t-1),this._setMask(e+n,t+1)},_appendData:function(e,t,n,i){var r,s,a,o=this._polynomial,c=this._stringBuffer;for(s=0;s<i;s++)c[n+s]=0;for(s=0;s<t;s++){if(255!==(r=f.LOG[c[e+s]^c[n]]))for(a=1;a<i;a++)c[n+a-1]=c[n+a]^f.EXPONENT[d._modN(r+o[i-a])];else for(a=n;a<n+i;a++)c[a]=c[a+1];c[n+i-1]=255===r?0:f.EXPONENT[d._modN(r+o[0])]}},_appendEccToData:function(){var e,t=0,n=this._dataBlock,i=this._calculateMaxLength(),r=this._eccBlock;for(e=0;e<this._neccBlock1;e++)this._appendData(t,n,i,r),t+=n,i+=r;for(e=0;e<this._neccBlock2;e++)this._appendData(t,n+1,i,r),t+=n+1,i+=r},_applyMask:function(e){var t,n,i,r,s=this.buffer,a=this.width;switch(e){case 0:for(r=0;r<a;r++)for(i=0;i<a;i++)i+r&1||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 1:for(r=0;r<a;r++)for(i=0;i<a;i++)1&r||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 2:for(r=0;r<a;r++)for(t=0,i=0;i<a;i++,t++)3===t&&(t=0),t||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 3:for(n=0,r=0;r<a;r++,n++)for(3===n&&(n=0),t=n,i=0;i<a;i++,t++)3===t&&(t=0),t||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 4:for(r=0;r<a;r++)for(t=0,n=r>>1&1,i=0;i<a;i++,t++)3===t&&(t=0,n=!n),n||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 5:for(n=0,r=0;r<a;r++,n++)for(3===n&&(n=0),t=0,i=0;i<a;i++,t++)3===t&&(t=0),(i&r&1)+!(!t|!n)||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 6:for(n=0,r=0;r<a;r++,n++)for(3===n&&(n=0),t=0,i=0;i<a;i++,t++)3===t&&(t=0),(i&r&1)+(t&&t===n)&1||this._isMasked(i,r)||(s[i+r*a]^=1);break;case 7:for(n=0,r=0;r<a;r++,n++)for(3===n&&(n=0),t=0,i=0;i<a;i++,t++)3===t&&(t=0),(t&&t===n)+(i+r&1)&1||this._isMasked(i,r)||(s[i+r*a]^=1)}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var e,t,n=this._eccBlock,i=this._polynomial;for(i[0]=1,e=0;e<n;e++){for(i[e+1]=1,t=e;t>0;t--)i[t]=i[t]?i[t-1]^f.EXPONENT[d._modN(f.LOG[i[t]]+e)]:i[t-1];i[0]=f.EXPONENT[d._modN(f.LOG[i[0]]+e)]}for(e=0;e<=n;e++)i[e]=f.LOG[i[e]]},_checkBadness:function(){var e,t,n,i,r,s=0,a=this._badness,o=this.buffer,c=this.width;for(r=0;r<c-1;r++)for(i=0;i<c-1;i++)(o[i+c*r]&&o[i+1+c*r]&&o[i+c*(r+1)]&&o[i+1+c*(r+1)]||!(o[i+c*r]||o[i+1+c*r]||o[i+c*(r+1)]||o[i+1+c*(r+1)]))&&(s+=d.N2);var l=0;for(r=0;r<c;r++){for(n=0,a[0]=0,e=0,i=0;i<c;i++)e===(t=o[i+c*r])?a[n]++:a[++n]=1,l+=(e=t)?1:-1;s+=this._getBadness(n)}l<0&&(l=-l);var u=0,f=l;for(f+=f<<2,f<<=1;f>c*c;)f-=c*c,u++;for(s+=u*d.N4,i=0;i<c;i++){for(n=0,a[0]=0,e=0,r=0;r<c;r++)e===(t=o[i+c*r])?a[n]++:a[++n]=1,e=t;s+=this._getBadness(n)}return s},_convertBitStream:function(e){var t,n,i=this._ecc,r=this._version;for(n=0;n<e;n++)i[n]=this._value.charCodeAt(n);var s=this._stringBuffer=i.slice(),a=this._calculateMaxLength();e>=a-2&&(e=a-2,r>9&&e--);var o=e;if(r>9){for(s[o+2]=0,s[o+3]=0;o--;)t=s[o],s[o+3]|=255&t<<4,s[o+2]=t>>4;s[2]|=255&e<<4,s[1]=e>>4,s[0]=64|e>>12}else{for(s[o+1]=0,s[o+2]=0;o--;)t=s[o],s[o+2]|=255&t<<4,s[o+1]=t>>4;s[1]|=255&e<<4,s[0]=64|e>>4}for(o=e+3-(r<10);o<a;)s[o++]=236,s[o++]=17},_getBadness:function(e){var t,n=0,i=this._badness;for(t=0;t<=e;t++)i[t]>=5&&(n+=d.N1+i[t]-5);for(t=3;t<e-1;t+=2)i[t-2]===i[t+2]&&i[t+2]===i[t-1]&&i[t-1]===i[t+1]&&3*i[t-1]===i[t]&&(0===i[t-3]||t+3>e||3*i[t-3]>=4*i[t]||3*i[t+3]>=4*i[t])&&(n+=d.N3);return n},_finish:function(){var e,t;this._stringBuffer=this.buffer.slice();var n=0,i=3e4;for(t=0;t<8&&(this._applyMask(t),(e=this._checkBadness())<i&&(i=e,n=t),7!==n);t++)this.buffer=this._stringBuffer.slice();n!==t&&this._applyMask(n),i=u.FINAL_FORMAT[n+(this._level-1<<3)];var r=this.buffer,s=this.width;for(t=0;t<8;t++,i>>=1)1&i&&(r[s-1-t+8*s]=1,t<6?r[8+s*t]=1:r[8+s*(t+1)]=1);for(t=0;t<7;t++,i>>=1)1&i&&(r[8+s*(s-7+t)]=1,t?r[6-t+8*s]=1:r[7+8*s]=1)},_interleaveBlocks:function(){var e,t,n=this._dataBlock,i=this._ecc,r=this._eccBlock,s=0,a=this._calculateMaxLength(),o=this._neccBlock1,c=this._neccBlock2,l=this._stringBuffer;for(e=0;e<n;e++){for(t=0;t<o;t++)i[s++]=l[e+t*n];for(t=0;t<c;t++)i[s++]=l[o*n+e+t*(n+1)]}for(t=0;t<c;t++)i[s++]=l[o*n+e+t*(n+1)];for(e=0;e<r;e++)for(t=0;t<o+c;t++)i[s++]=l[a+e+t*r];this._stringBuffer=i},_insertAlignments:function(){var e,t,n,i=this._version,r=this.width;if(i>1)for(e=l.BLOCK[i],n=r-7;;){for(t=r-7;t>e-3&&(this._addAlignment(t,n),!(t<e));)t-=e;if(n<=e+9)break;n-=e,this._addAlignment(6,n),this._addAlignment(n,6)}},_insertFinders:function(){var e,t,n,i,r=this.buffer,s=this.width;for(e=0;e<3;e++){for(t=0,i=0,1===e&&(t=s-7),2===e&&(i=s-7),r[i+3+s*(t+3)]=1,n=0;n<6;n++)r[i+n+s*t]=1,r[i+s*(t+n+1)]=1,r[i+6+s*(t+n)]=1,r[i+n+1+s*(t+6)]=1;for(n=1;n<5;n++)this._setMask(i+n,t+1),this._setMask(i+1,t+n+1),this._setMask(i+5,t+n),this._setMask(i+n+1,t+5);for(n=2;n<4;n++)r[i+n+s*(t+2)]=1,r[i+2+s*(t+n+1)]=1,r[i+4+s*(t+n)]=1,r[i+n+1+s*(t+4)]=1}},_insertTimingGap:function(){var e,t,n=this.width;for(t=0;t<7;t++)this._setMask(7,t),this._setMask(n-8,t),this._setMask(7,t+n-7);for(e=0;e<8;e++)this._setMask(e,7),this._setMask(e+n-8,7),this._setMask(e,n-8)},_insertTimingRowAndColumn:function(){var e,t=this.buffer,n=this.width;for(e=0;e<n-14;e++)1&e?(this._setMask(8+e,6),this._setMask(6,8+e)):(t[8+e+6*n]=1,t[6+n*(8+e)]=1)},_insertVersion:function(){var e,t,n,i,r=this.buffer,s=this._version,a=this.width;if(s>6)for(e=h.BLOCK[s-7],t=17,n=0;n<6;n++)for(i=0;i<3;i++,t--)1&(t>11?s>>t-12:e>>t)?(r[5-n+a*(2-i+a-11)]=1,r[2-i+a-11+a*(5-n)]=1):(this._setMask(5-n,2-i+a-11),this._setMask(2-i+a-11,5-n))},_isMasked:function(e,t){var n=d._getMaskBit(e,t);return 1===this._mask[n]},_pack:function(){var e,t,n,i=1,r=1,s=this.width,a=s-1,o=s-1,c=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(t=0;t<c;t++)for(e=this._stringBuffer[t],n=0;n<8;n++,e<<=1){128&e&&(this.buffer[a+s*o]=1);do{r?a--:(a++,i?0!==o?o--:(i=!i,6==(a-=2)&&(a--,o=9)):o!==s-1?o++:(i=!i,6==(a-=2)&&(a--,o-=8))),r=!r}while(this._isMasked(a,o))}},_reverseMask:function(){var e,t,n=this.width;for(e=0;e<9;e++)this._setMask(e,8);for(e=0;e<8;e++)this._setMask(e+n-8,8),this._setMask(8,e);for(t=0;t<7;t++)this._setMask(8,t+n-7)},_setMask:function(e,t){var n=d._getMaskBit(e,t);this._mask[n]=1},_syncMask:function(){var e,t,n=this.width;for(t=0;t<n;t++)for(e=0;e<=t;e++)this.buffer[e+n*t]&&this._setMask(e,t)}},{_createArray:function(e){var t,n=[];for(t=0;t<e;t++)n[t]=0;return n},_getMaskBit:function(e,t){var n;return e>t&&(n=e,e=t,t=n),n=t,n+=t*t,n>>=1,n+=e},_modN:function(e){for(;e>=255;)e=((e-=255)>>8)+(255&e);return e},N1:3,N2:3,N3:40,N4:10}),p=d,m=o.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var e=this.element;e.width=e.height=this.qrious.size}}),g=a.extend((function(e,t,n,i){this.name=e,this.modifiable=Boolean(t),this.defaultValue=n,this._valueTransformer=i}),{transform:function(e){var t=this._valueTransformer;return"function"==typeof t?t(e,this):e}}),_=a.extend(null,{abs:function(e){return null!=e?Math.abs(e):null},hasOwn:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},noop:function(){},toUpperCase:function(e){return null!=e?e.toUpperCase():null}}),v=a.extend((function(e){this.options={},e.forEach((function(e){this.options[e.name]=e}),this)}),{exists:function(e){return null!=this.options[e]},get:function(e,t){return v._get(this.options[e],t)},getAll:function(e){var t,n=this.options,i={};for(t in n)_.hasOwn(n,t)&&(i[t]=v._get(n[t],e));return i},init:function(e,t,n){var i,r;for(i in"function"!=typeof n&&(n=_.noop),this.options)_.hasOwn(this.options,i)&&(r=this.options[i],v._set(r,r.defaultValue,t),v._createAccessor(r,t,n));this._setAll(e,t,!0)},set:function(e,t,n){return this._set(e,t,n)},setAll:function(e,t){return this._setAll(e,t)},_set:function(e,t,n,i){var r=this.options[e];if(!r)throw new Error("Invalid option: "+e);if(!r.modifiable&&!i)throw new Error("Option cannot be modified: "+e);return v._set(r,t,n)},_setAll:function(e,t,n){if(!e)return!1;var i,r=!1;for(i in e)_.hasOwn(e,i)&&this._set(i,e[i],t,n)&&(r=!0);return r}},{_createAccessor:function(e,t,n){var i={get:function(){return v._get(e,t)}};e.modifiable&&(i.set=function(i){v._set(e,i,t)&&n(i,e)}),Object.defineProperty(t,e.name,i)},_get:function(e,t){return t["_"+e.name]},_set:function(e,t,n){var i="_"+e.name,r=n[i],s=e.transform(null!=t?t:e.defaultValue);return n[i]=s,s!==r}}),b=v,k=a.extend((function(){this._services={}}),{getService:function(e){var t=this._services[e];if(!t)throw new Error("Service is not being managed with name: "+e);return t},setService:function(e,t){if(this._services[e])throw new Error("Service is already managed with name: "+e);t&&(this._services[e]=t)}}),y=new b([new g("background",!0,"white"),new g("backgroundAlpha",!0,1,_.abs),new g("element"),new g("foreground",!0,"black"),new g("foregroundAlpha",!0,1,_.abs),new g("level",!0,"L",_.toUpperCase),new g("mime",!0,"image/png"),new g("padding",!0,null,_.abs),new g("size",!0,100,_.abs),new g("value",!0,"")]),w=new k,x=a.extend((function(e){y.init(e,this,this.update.bind(this));var t=y.get("element",this),n=w.getService("element"),i=t&&n.isCanvas(t)?t:n.createCanvas(),r=t&&n.isImage(t)?t:n.createImage();this._canvasRenderer=new c(this,i,!0),this._imageRenderer=new m(this,r,r===t),this.update()}),{get:function(){return y.getAll(this)},set:function(e){y.setAll(e,this)&&this.update()},toDataURL:function(e){return this.canvas.toDataURL(e||this.mime)},update:function(){var e=new p({level:this.level,value:this.value});this._canvasRenderer.render(e),this._imageRenderer.render(e)}},{use:function(e){w.setService(e.getName(),e)}});Object.defineProperties(x.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var O=x,M=a.extend({getName:function(){}}).extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(e){},isImage:function(e){}}).extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(e){return e instanceof HTMLCanvasElement},isImage:function(e){return e instanceof HTMLImageElement}});return O.use(new M),O}()},156:function(e,t,n){e.exports=n.p+"static/forkMe-1a2bcb7dd2c870c3afe5d50466500c18.png"},174:function(e,t,n){"use strict";n.r(t);var i=n(3),r=n.n(i),s=(n(1),n(4)),a=n(7),o=n(0),c=n.n(o),l=n(14),u=n(46),f=n(18),h=n(17),d=n(81),p=n(26),m=n(10),g=n(155),_=n.n(g);function v(){var e=Object(m.a)(["\n        font-family: Roboto;\n        font-size: 20px;\n        text-transform: uppercase; \n        color: white;\n        "]);return v=function(){return e},e}function b(){var e=Object(m.a)(["\n    display: block;\n    box-shadow: 0 0 ","px 5px ",";\n\n\n    "]);return b=function(){return e},e}function k(){var e=Object(m.a)(["\n    background: blue;\n    display: inline-block;\n    padding: 10px 10px 0px 10px;\n    border-radius: 12px;\n\n            text-align: center;\n\n    "]);return k=function(){return e},e}var y=function(){var e=c.a.useRef(null),t=c.a.useState(3),n=t[0],i=t[1],o=c.a.useState(0),l=o[0],u=o[1];return c.a.useEffect((function(){var t;"undefined"!=typeof window&&n>0&&function(){var a=Object(s.a)(r.a.mark((function s(){var a,o,c,l,f,h;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://code.zed.vision/connect");case 2:return a=r.sent,r.next=5,a.json();case 5:return o=r.sent,u(60),c=o.key,l="https://zed.vision/"+c,f={element:e.current,size:200,foregroundAlpha:.9,foreground:"red",padding:12,backgroundAlpha:.8,background:"black",value:l},t?t.set(f):t=new _.a(f),r.next=13,fetch("https://code.zed.vision/check?key="+c);case 13:return h=r.sent,r.next=16,h.json();case 16:!1===r.sent.expired&&(location.href="https://zed.vision/code/"),i(n-1);case 19:case"end":return r.stop()}}),s)})));return function(){return a.apply(this,arguments)}}()()}),[n]),c.a.useEffect((function(){"undefined"!=typeof window&&l&&setTimeout((function(){return u((function(e){return e-1}))}),1e3)}),[l]),Object(a.c)("a",{href:"https://zed.vision/code"},n>0&&Object(a.c)("div",{css:Object(a.b)(k())},Object(a.c)("img",{css:Object(a.b)(b(),10+l,3===n?"darkorange":2===n?"green":"darkred"),ref:e}),Object(a.c)("p",{css:Object(a.b)(v())},"Connect device")))},w=n(156),x=n.n(w);t.default=function(e){var t=e.data.allMdx.edges;return o.useEffect((function(){"undefined"!=typeof window&&function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=console,e.next=3,Object(d.a)();case 3:e.t1=e.sent,e.t0.log.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.c)(f.a,null,Object(a.c)(h.a,{title:"This is Zed vision"}),Object(a.c)("h1",null,"Hi, this is my playground: ",Object(a.c)(y,null)),Object(a.c)("a",{href:"https://github.com/zed-vision/monorepo"},Object(a.c)("img",{loading:"lazy",width:"149",height:"149",src:x.a,style:{position:"absolute",top:0,right:0},alt:"Fork me on GitHub"})),t.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return Object(a.c)("article",{key:t.fields.slug},Object(a.c)("header",null,Object(a.c)("h3",{css:"  \n                      margin-bottom: "+Object(p.b)(1/4)+";\n                      "},Object(a.c)(l.Link,{css:'    \n                    box-shadow: "none";\n                  ',to:t.fields.slug},n)),Object(a.c)("small",null,t.frontmatter.date)),Object(a.c)("section",null,Object(a.c)("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),Object(a.c)(u.a,null))}},28:function(e,t,n){"use strict";n(23);var i=n(0),r=n(34),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a=Object(r.a)((function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),o=n(44),c=n(8),l=n(16),u=n(19),f=a,h=function(e){return"theme"!==e},d=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?f:h},p=function(e,t,n){var i;if(t){var r=t.shouldForwardProp;i=e.__emotion_forwardProp&&r?function(t){return e.__emotion_forwardProp(t)&&r(t)}:r}return"function"!=typeof i&&n&&(i=e.__emotion_forwardProp),i},m=function e(t,n){var r,s,a=t.__emotion_real===t,f=a&&t.__emotion_base||t;void 0!==n&&(r=n.label,s=n.target);var h=p(t,n,a),m=h||d(f),g=!m("as");return function(){var _=arguments,v=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&v.push("label:"+r+";"),null==_[0]||void 0===_[0].raw)v.push.apply(v,_);else{0,v.push(_[0][0]);for(var b=_.length,k=1;k<b;k++)v.push(_[k],_[0][k])}var y=Object(c.e)((function(e,t,n){var r=g&&e.as||f,a="",o=[],p=e;if(null==e.theme){for(var _ in p={},e)p[_]=e[_];p.theme=Object(i.useContext)(c.b)}"string"==typeof e.className?a=Object(l.a)(t.registered,o,e.className):null!=e.className&&(a=e.className+" ");var b=Object(u.a)(v.concat(o),t.registered,p);Object(l.b)(t,b,"string"==typeof r);a+=t.key+"-"+b.name,void 0!==s&&(a+=" "+s);var k=g&&void 0===h?d(r):m,y={};for(var w in e)g&&"as"===w||k(w)&&(y[w]=e[w]);return y.className=a,y.ref=n,Object(i.createElement)(r,y)}));return y.displayName=void 0!==r?r:"Styled("+("string"==typeof f?f:f.displayName||f.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=f,y.__emotion_styles=v,y.__emotion_forwardProp=h,Object.defineProperty(y,"toString",{value:function(){return"."+s}}),y.withComponent=function(t,i){return e(t,Object(o.a)({},n,{},i,{shouldForwardProp:p(y,i,!0)})).apply(void 0,v)},y}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){m[e]=m(e)}));t.a=m},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(10),r=n(0),s=n(28),a=n(26),o=n(47),c=n.n(o);function l(){var e=Object(i.a)(["\n  margin-right: ",";\n  margin-bottom: 0;\n  overflow: hidden;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n"]);return l=function(){return e},e}function u(){var e=Object(i.a)(["\n  margin-top: ",";\n  display: flex;\n  margin-bottom: ",";\n"]);return u=function(){return e},e}var f=s.a.div(u(),Object(a.b)(2.5),Object(a.b)(2.5)),h=s.a.div(l(),Object(a.b)(.5)),d=["a bit less\n  frustrating.","more fun","great again"],p=function(){var e=Math.random();return"undefined"==typeof window&&(e=.4),r.createElement(f,null,r.createElement(h,null,r.createElement("img",{alt:"Zoltan Erdos",src:c.a})),r.createElement("p",null,"Written by ",r.createElement("strong",null,"Zoltan Erdos"),", who is interested to make software development"," "+(d[Math.floor(e*d.length)]||"crazy."),r.createElement("br",null),r.createElement("a",{href:"https://twitter.com/ZoltanErdos"},"Follow me on Twitter")))}},47:function(e,t,n){e.exports=n.p+"static/zed-profile-pic-cd941e033fafca9e98b23dae7e5a0ccc.jpg"}}]);