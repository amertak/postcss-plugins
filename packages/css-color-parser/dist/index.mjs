import{TokenType as e,NumberType as a}from"@csstools/css-tokenizer";import{isWhitespaceNode as n,isCommentNode as o,isTokenNode as r,isFunctionNode as t,FunctionNode as l,TokenNode as s}from"@csstools/css-parser-algorithms";import{xyz as c,namedColors as u,utils as i,conversions as h,calculations as m}from"@csstools/color-helpers";import{calcFromComponentValues as N}from"@csstools/css-calc";var p,_;function colorData_to_XYZ_D50(e){switch(e.colorNotation){case p.HEX:case p.RGB:return{...e,colorNotation:p.XYZ_D50,channels:c.sRGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.Linear_RGB:return{...e,colorNotation:p.XYZ_D50,channels:c.lin_sRGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.Display_P3:return{...e,colorNotation:p.XYZ_D50,channels:c.P3_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.Rec2020:return{...e,colorNotation:p.XYZ_D50,channels:c.rec_2020_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.A98_RGB:return{...e,colorNotation:p.XYZ_D50,channels:c.a98_RGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.ProPhoto_RGB:return{...e,colorNotation:p.XYZ_D50,channels:c.ProPhoto_RGB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.HSL:return{...e,colorNotation:p.XYZ_D50,channels:c.HSL_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.HWB:return{...e,colorNotation:p.XYZ_D50,channels:c.HWB_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.Lab:return{...e,colorNotation:p.XYZ_D50,channels:c.Lab_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.OKLab:return{...e,colorNotation:p.XYZ_D50,channels:c.OKLab_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.LCH:return{...e,colorNotation:p.XYZ_D50,channels:c.LCH_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.OKLCH:return{...e,colorNotation:p.XYZ_D50,channels:c.OKLCH_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.XYZ_D50:return{...e,colorNotation:p.XYZ_D50,channels:c.XYZ_D50_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};case p.XYZ_D65:return{...e,colorNotation:p.XYZ_D50,channels:c.XYZ_D65_to_XYZ_D50(e.channels.map((e=>Number.isNaN(e)?0:e)))};default:throw new Error("Unsupported color notation")}}!function(e){e.A98_RGB="a98-rgb",e.Display_P3="display-p3",e.HEX="hex",e.HSL="hsl",e.HWB="hwb",e.LCH="lch",e.Lab="lab",e.Linear_RGB="srgb-linear",e.OKLCH="oklch",e.OKLab="oklab",e.ProPhoto_RGB="prophoto-rgb",e.RGB="rgb",e.Rec2020="rec2020",e.XYZ_D50="xyz-d50",e.XYZ_D65="xyz-d65"}(p||(p={})),function(e){e.ColorKeyword="color-keyword",e.HasAlpha="has-alpha",e.HasDimensionValues="has-dimension-values",e.HasNoneKeywords="has-none-keywords",e.HasNumberValues="has-number-values",e.HasPercentageAlpha="has-percentage-alpha",e.HasPercentageValues="has-percentage-values",e.HasVariableAlpha="has-variable-alpha",e.Hex="hex",e.LegacyHSL="legacy-hsl",e.LegacyRGB="legacy-rgb",e.NamedColor="named-color",e.RelativeColorSyntax="relative-color-syntax",e.ColorMix="color-mix"}(_||(_={}));const b=new Set([p.A98_RGB,p.Display_P3,p.HEX,p.Linear_RGB,p.ProPhoto_RGB,p.RGB,p.Rec2020,p.XYZ_D50,p.XYZ_D65]);function colorDataTo(e,a){const n=colorData_to_XYZ_D50(e),o={...e};switch(a){case p.HEX:case p.RGB:o.colorNotation=p.RGB,o.channels=c.XYZ_D50_to_sRGB(n.channels);break;case p.Linear_RGB:o.colorNotation=p.Linear_RGB,o.channels=c.XYZ_D50_to_lin_sRGB(n.channels);break;case p.Display_P3:o.colorNotation=p.Display_P3,o.channels=c.XYZ_D50_to_P3(n.channels);break;case p.Rec2020:o.colorNotation=p.Rec2020,o.channels=c.XYZ_D50_to_rec_2020(n.channels);break;case p.ProPhoto_RGB:o.colorNotation=p.ProPhoto_RGB,o.channels=c.XYZ_D50_to_ProPhoto(n.channels);break;case p.A98_RGB:o.colorNotation=p.A98_RGB,o.channels=c.XYZ_D50_to_a98_RGB(n.channels);break;case p.HSL:o.colorNotation=p.HSL,o.channels=c.XYZ_D50_to_HSL(n.channels);break;case p.HWB:o.colorNotation=p.HWB,o.channels=c.XYZ_D50_to_HWB(n.channels);break;case p.Lab:o.colorNotation=p.Lab,o.channels=c.XYZ_D50_to_Lab(n.channels);break;case p.LCH:o.colorNotation=p.LCH,o.channels=c.XYZ_D50_to_LCH(n.channels);break;case p.OKLCH:o.colorNotation=p.OKLCH,o.channels=c.XYZ_D50_to_OKLCH(n.channels);break;case p.OKLab:o.colorNotation=p.OKLab,o.channels=c.XYZ_D50_to_OKLab(n.channels);break;case p.XYZ_D50:o.colorNotation=p.XYZ_D50,o.channels=c.XYZ_D50_to_XYZ_D50(n.channels);break;case p.XYZ_D65:o.colorNotation=p.XYZ_D65,o.channels=c.XYZ_D50_to_XYZ_D65(n.channels);break;default:throw new Error("Unsupported color notation")}if(a===e.colorNotation)o.channels=carryForwardMissingComponents(e.channels,[0,1,2],o.channels,[0,1,2]);else if(b.has(a)&&b.has(e.colorNotation))o.channels=carryForwardMissingComponents(e.channels,[0,1,2],o.channels,[0,1,2]);else switch(a){case p.HSL:switch(e.colorNotation){case p.HWB:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[0]);break;case p.Lab:case p.OKLab:o.channels=carryForwardMissingComponents(e.channels,[2],o.channels,[0]);break;case p.LCH:case p.OKLCH:o.channels=carryForwardMissingComponents(e.channels,[0,1,2],o.channels,[2,1,0])}break;case p.HWB:switch(e.colorNotation){case p.HSL:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[0]);break;case p.LCH:case p.OKLCH:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[2])}break;case p.Lab:case p.OKLab:switch(e.colorNotation){case p.HSL:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[2]);break;case p.Lab:case p.OKLab:case p.LCH:case p.OKLCH:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[0])}break;case p.LCH:case p.OKLCH:switch(e.colorNotation){case p.HSL:o.channels=carryForwardMissingComponents(e.channels,[0,1,2],o.channels,[2,1,0]);break;case p.HWB:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[2]);break;case p.Lab:case p.OKLab:o.channels=carryForwardMissingComponents(e.channels,[0],o.channels,[0]);break;case p.LCH:case p.OKLCH:o.channels=carryForwardMissingComponents(e.channels,[0,1,2],o.channels,[0,1,2])}}return o.channels=setPowerlessComponents(o.channels,a),o}function setPowerlessComponents(e,a){const n=[...e];switch(a){case p.HSL:(reducePrecision(n[2])<=0||reducePrecision(n[2])>=100)&&(n[0]=NaN,n[1]=NaN),n[1]<=0&&(n[0]=NaN);break;case p.HWB:Math.max(0,reducePrecision(n[1]))+Math.max(0,reducePrecision(n[2]))>=100&&(n[0]=NaN);break;case p.Lab:(reducePrecision(n[0])<=0||reducePrecision(n[0])>=100)&&(n[1]=NaN,n[2]=NaN);break;case p.LCH:reducePrecision(n[1])<=0&&(n[2]=NaN),(reducePrecision(n[0])<=0||reducePrecision(n[0])>=100)&&(n[1]=NaN,n[2]=NaN);break;case p.OKLab:(reducePrecision(n[0])<=0||reducePrecision(n[0])>=1)&&(n[1]=NaN,n[2]=NaN);break;case p.OKLCH:reducePrecision(n[1])<=0&&(n[2]=NaN),(reducePrecision(n[0])<=0||reducePrecision(n[0])>=1)&&(n[1]=NaN,n[2]=NaN)}return n}function carryForwardMissingComponents(e,a,n,o){const r=[...n];for(const n of a)Number.isNaN(e[a[n]])&&(r[o[n]]=NaN);return r}function fillInMissingComponents(e,a){const n=[...e];for(let o=0;o<e.length;o++)Number.isNaN(e[o])&&(n[o]=a[o]);return n}function reducePrecision(e,a=7){const n=Math.pow(10,a);return Math.round(e*n)/n}function colorDataFitsRGB_Gamut(e){return!colorDataTo(e,p.RGB).channels.find((e=>e<-1e-5||e>1.00001))}function normalize(e,a,n,o){return Math.min(Math.max(e/a,n),o)}const g=/[A-Z]/g;function toLowerCaseAZ(e){return e.replace(g,(e=>String.fromCharCode(e.charCodeAt(0)+32)))}function normalize_Color_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,-1/0,1/0);3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:l[4].value,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,100,-1/0,1/0);3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function threeChannelSpaceSeparated(a,l,s,c){const u=[],i=[],h=[],m=[],p={colorNotation:s,channels:[0,0,0],alpha:1,syntaxFlags:new Set(c)};let b=u;for(let l=0;l<a.value.length;l++){let s=a.value[l];if(n(s)||o(s)){for(;n(a.value[l+1])||o(a.value[l+1]);)l++;if(!u.length)continue;if(b===u){b=i;continue}if(b===i){b=h;continue}}else if(r(s)&&s.value[0]===e.Delim&&"/"===s.value[4].value){if(b===m)return!1;b=m}else{if(t(s)){if(b===m&&"var"===toLowerCaseAZ(s.getName())){p.syntaxFlags.add(_.HasVariableAlpha),b.push(s);continue}if("calc"!==toLowerCaseAZ(s.getName()))return!1;const[[a]]=N([[s]],{toCanonicalUnits:!0,precision:100});if(!a||!r(a)||(a.value[0]===e.Percentage||a.value[0]===e.Number||a.value[0]===e.Dimension)&&Number.isNaN(a.value[4].value))return!1;s=a}if(!r(s))return!1;b.push(s)}}if(1!==b.length)return!1;if(1!==u.length||1!==i.length||1!==h.length)return!1;if(!r(u[0])||!r(i[0])||!r(h[0]))return!1;const g=[u[0].value,i[0].value,h[0].value];1===m.length&&(p.syntaxFlags.add(_.HasAlpha),r(m[0])?g.push(m[0].value):p.alpha=m[0]);const d=l(g,p);return!1!==d&&(p.channels=[d[0][4].value,d[1][4].value,d[2][4].value],4===d.length&&(p.alpha=d[3][4].value),p)}const d=new Set(["srgb","srgb-linear","display-p3","a98-rgb","prophoto-rgb","rec2020","xyz","xyz-d50","xyz-d65"]);function color$1(a,t){for(let t=0;t<a.value.length;t++){const s=a.value[t];if(!n(s)&&!o(s)){if(r(s)&&s.value[0]===e.Ident){const e=toLowerCaseAZ(s.value[4].value);return!!d.has(e)&&threeChannelSpaceSeparated(new l(a.name,a.endToken,a.value.slice(t+1)),normalize_Color_ChannelValues,colorSpaceNameToColorNotation(e),[])}return!1}}return!1}function colorSpaceNameToColorNotation(e){switch(e){case"srgb":return p.RGB;case"srgb-linear":return p.Linear_RGB;case"display-p3":return p.Display_P3;case"a98-rgb":return p.A98_RGB;case"prophoto-rgb":return p.ProPhoto_RGB;case"rec2020":return p.Rec2020;case"xyz":case"xyz-d65":return p.XYZ_D65;case"xyz-d50":return p.XYZ_D50;default:throw new Error("Unknown color space name: "+e)}}const f=new Set(["srgb","srgb-linear","lab","oklab","xyz","xyz-d50","xyz-d65"]),v=new Set(["hsl","hwb","lch","oklch"]),y=new Set(["shorter","longer","increasing","decreasing"]);function colorMix(a,t){let l=null,s=null,c=null,u=!1;for(let i=0;i<a.value.length;i++){const h=a.value[i];if(!n(h)&&!o(h)){if(r(h)&&h.value[0]===e.Ident){if(!l&&"in"===toLowerCaseAZ(h.value[4].value)){l=h;continue}if(l&&!s){s=toLowerCaseAZ(h.value[4].value);continue}if(l&&s&&!c&&v.has(s)){c=toLowerCaseAZ(h.value[4].value);continue}if(l&&s&&c&&!u&&"hue"===toLowerCaseAZ(h.value[4].value)){u=!0;continue}return!1}return!(!r(h)||h.value[0]!==e.Comma)&&(!!s&&(c||u?!!(s&&c&&u&&v.has(s)&&y.has(c))&&colorMixPolar(s,c,colorMixComponents(a.value.slice(i+1),t)):f.has(s)?colorMixRectangular(s,colorMixComponents(a.value.slice(i+1),t)):!!v.has(s)&&colorMixPolar(s,"shorter",colorMixComponents(a.value.slice(i+1),t))))}}return!1}function colorMixComponents(a,l){const s=[];let c=1,u=!1,i=!1;for(let c=0;c<a.length;c++){let h=a[c];if(!n(h)&&!o(h)){if(!r(h)||h.value[0]!==e.Comma){if(!u){const e=l(h);if(e){u=e;continue}}if(!i){if(t(h)&&"calc"===toLowerCaseAZ(h.getName())&&([[h]]=N([[h]],{toCanonicalUnits:!0,precision:100}),!h||!r(h)||(h.value[0]===e.Percentage||h.value[0]===e.Number||h.value[0]===e.Dimension)&&Number.isNaN(h.value[4].value)))return!1;if(r(h)&&h.value[0]===e.Percentage&&h.value[4].value>=0){i=h.value[4].value;continue}}return!1}if(!u)return!1;s.push({color:u,percentage:i}),u=!1,i=!1}}if(u&&s.push({color:u,percentage:i}),2!==s.length)return!1;let h=s[0].percentage,m=s[1].percentage;return(!1===h||!(h<0||h>100))&&((!1===m||!(m<0||m>100))&&(!1===h&&!1===m?(h=50,m=50):!1!==h&&!1===m?m=100-h:!1===h&&!1!==m&&(h=100-m),(0!==h||0!==m)&&(!1!==h&&!1!==m&&(h+m>100&&(h=h/(h+m)*100,m=m/(h+m)*100),h+m<100&&(c=(h+m)/100,h=h/(h+m)*100,m=m/(h+m)*100),{a:{color:s[0].color,percentage:h},b:{color:s[1].color,percentage:m},alphaMultiplier:c}))))}function colorMixRectangular(e,a){if(!a)return!1;const n=a.a.color,o=a.b.color,r=a.a.percentage/100;let t=n.channels,l=o.channels,s=p.RGB,c=n.alpha;if("number"!=typeof c)return!1;let u=o.alpha;if("number"!=typeof u)return!1;switch(c=Number.isNaN(c)?u:c,u=Number.isNaN(u)?c:u,e){case"srgb":s=p.RGB,n.colorNotation!==p.RGB&&(t=colorDataTo(n,p.RGB).channels),o.colorNotation!==p.RGB&&(l=colorDataTo(o,p.RGB).channels);break;case"srgb-linear":s=p.Linear_RGB,n.colorNotation!==p.Linear_RGB&&(t=colorDataTo(n,p.Linear_RGB).channels),o.colorNotation!==p.Linear_RGB&&(l=colorDataTo(o,p.Linear_RGB).channels);break;case"lab":s=p.Lab,n.colorNotation!==p.Lab&&(t=colorDataTo(n,p.Lab).channels),o.colorNotation!==p.Lab&&(l=colorDataTo(o,p.Lab).channels);break;case"oklab":s=p.OKLab,n.colorNotation!==p.OKLab&&(t=colorDataTo(n,p.OKLab).channels),o.colorNotation!==p.OKLab&&(l=colorDataTo(o,p.OKLab).channels);break;case"xyz-d50":s=p.XYZ_D50,n.colorNotation!==p.XYZ_D50&&(t=colorDataTo(n,p.XYZ_D50).channels),o.colorNotation!==p.XYZ_D50&&(l=colorDataTo(o,p.XYZ_D50).channels);break;case"xyz":case"xyz-d65":s=p.XYZ_D65,n.colorNotation!==p.XYZ_D65&&(t=colorDataTo(n,p.XYZ_D65).channels),o.colorNotation!==p.XYZ_D65&&(l=colorDataTo(o,p.XYZ_D65).channels)}t=fillInMissingComponents(t,l),l=fillInMissingComponents(l,t),t[0]=premultiply(t[0],c),t[1]=premultiply(t[1],c),t[2]=premultiply(t[2],c),l[0]=premultiply(l[0],u),l[1]=premultiply(l[1],u),l[2]=premultiply(l[2],u);const i=interpolate(c,u,r);return{colorNotation:s,channels:[un_premultiply(interpolate(t[0],l[0],r),i),un_premultiply(interpolate(t[1],l[1],r),i),un_premultiply(interpolate(t[2],l[2],r),i)],alpha:i*a.alphaMultiplier,syntaxFlags:new Set([_.ColorMix])}}function colorMixPolar(e,a,n){if(!n)return!1;const o=n.a.color,r=n.b.color,t=n.a.percentage/100;let l=o.channels,s=r.channels,c=0,u=0,i=0,h=0,m=0,N=0,b=p.RGB,g=o.alpha;if("number"!=typeof g)return!1;let d=r.alpha;if("number"!=typeof d)return!1;switch(g=Number.isNaN(g)?d:g,d=Number.isNaN(d)?g:d,e){case"hsl":b=p.HSL,o.colorNotation!==p.HSL&&(l=colorDataTo(o,p.HSL).channels),r.colorNotation!==p.HSL&&(s=colorDataTo(r,p.HSL).channels);break;case"hwb":b=p.HWB,o.colorNotation!==p.HWB&&(l=colorDataTo(o,p.HWB).channels),r.colorNotation!==p.HWB&&(s=colorDataTo(r,p.HWB).channels);break;case"lch":b=p.LCH,o.colorNotation!==p.LCH&&(l=colorDataTo(o,p.LCH).channels),r.colorNotation!==p.LCH&&(s=colorDataTo(r,p.LCH).channels);break;case"oklch":b=p.OKLCH,o.colorNotation!==p.OKLCH&&(l=colorDataTo(o,p.OKLCH).channels),r.colorNotation!==p.OKLCH&&(s=colorDataTo(r,p.OKLCH).channels)}switch(l=fillInMissingComponents(l,s),s=fillInMissingComponents(s,l),e){case"hsl":case"hwb":c=l[0],u=s[0],i=l[1],h=s[1],m=l[2],N=s[2];break;case"lch":case"oklch":i=l[0],h=s[0],m=l[1],N=s[1],c=l[2],u=s[2]}const f=u-c;switch(a){case"shorter":f>180?c+=360:f<-180&&(u+=360);break;case"longer":-180<f&&f<180&&(f>0?c+=360:u+=360);break;case"increasing":f<0&&(u+=360);break;case"decreasing":f>0&&(c+=360);break;default:throw new Error("Unknown hue interpolation method")}i=premultiply(i,g),m=premultiply(m,g),h=premultiply(h,d),N=premultiply(N,d);let v=[0,0,0];const y=interpolate(g,d,t);switch(e){case"hsl":case"hwb":v=[interpolate(c,u,t),un_premultiply(interpolate(i,h,t),y),un_premultiply(interpolate(m,N,t),y)];break;case"lch":case"oklch":v=[un_premultiply(interpolate(i,h,t),y),un_premultiply(interpolate(m,N,t),y),interpolate(c,u,t)]}return{colorNotation:b,channels:v,alpha:y*n.alphaMultiplier,syntaxFlags:new Set([_.ColorMix])}}function interpolate(e,a,n){return Number.isNaN(e)?a:Number.isNaN(a)?e:e*n+a*(1-n)}function premultiply(e,a){return Number.isNaN(a)?e:Number.isNaN(e)?NaN:e*a}function un_premultiply(e,a){return 0===a||Number.isNaN(a)?e:Number.isNaN(e)?NaN:e/a}function hex(e){const a=toLowerCaseAZ(e[4].value);if(a.match(/[^a-f0-9]/))return!1;const n={colorNotation:p.HEX,channels:[0,0,0],alpha:1,syntaxFlags:new Set([_.Hex])},o=a.length;if(3===o){const e=a[0],o=a[1],r=a[2];return n.channels=[parseInt(e+e,16)/255,parseInt(o+o,16)/255,parseInt(r+r,16)/255],n}if(6===o){const e=a[0]+a[1],o=a[2]+a[3],r=a[4]+a[5];return n.channels=[parseInt(e,16)/255,parseInt(o,16)/255,parseInt(r,16)/255],n}if(4===o){const e=a[0],o=a[1],r=a[2],t=a[3];return n.channels=[parseInt(e+e,16)/255,parseInt(o+o,16)/255,parseInt(r+r,16)/255],n.alpha=parseInt(t+t,16)/255,n.syntaxFlags.add(_.HasAlpha),n}if(8===o){const e=a[0]+a[1],o=a[2]+a[3],r=a[4]+a[5],t=a[6]+a[7];return n.channels=[parseInt(e,16)/255,parseInt(o,16)/255,parseInt(r,16)/255],n.alpha=parseInt(t,16)/255,n.syntaxFlags.add(_.HasAlpha),n}return!1}function normalizeHue(n){if(n[0]===e.Number)return n[4].value=n[4].value%360,n[1]=n[4].value.toString(),n;if(n[0]===e.Dimension){let o=n[4].value;switch(toLowerCaseAZ(n[4].unit)){case"deg":break;case"rad":o=180*n[4].value/Math.PI;break;case"grad":o=.9*n[4].value;break;case"turn":o=360*n[4].value;break;default:return!1}return o%=360,[e.Number,o.toString(),n[2],n[3],{value:o,type:a.Number}]}return!1}function normalize_legacy_HSL_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(0!==t)if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,100);3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}else{3===t?o.syntaxFlags.add(_.HasPercentageAlpha):o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,1,0,100);3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else{const a=normalizeHue(l);if(!1===a)return!1;l[0]===e.Dimension&&o.syntaxFlags.add(_.HasDimensionValues),r.push(a)}}return!o.syntaxFlags.has(_.HasNumberValues)&&r}function normalize_modern_HSL_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(0!==t)if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,100);3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}else{3===t?o.syntaxFlags.add(_.HasPercentageAlpha):o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,1,0,100);3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else{const a=normalizeHue(l);if(!1===a)return!1;l[0]===e.Dimension&&o.syntaxFlags.add(_.HasDimensionValues),r.push(a)}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function threeChannelLegacySyntax(a,l,s,c){const u=[],i=[],h=[],m=[],p={colorNotation:s,channels:[0,0,0],alpha:1,syntaxFlags:new Set(c)};let b=u;for(let l=0;l<a.value.length;l++){let s=a.value[l];if(!n(s)&&!o(s)){if(r(s)&&s.value[0]===e.Comma){if(b===u){b=i;continue}if(b===i){b=h;continue}if(b===h){b=m;continue}if(b===m)return!1}if(t(s)){if(b===m&&"var"===toLowerCaseAZ(s.getName())){p.syntaxFlags.add(_.HasVariableAlpha),b.push(s);continue}if("calc"!==toLowerCaseAZ(s.getName()))return!1;const[[a]]=N([[s]],{toCanonicalUnits:!0,precision:100});if(!a||!r(a)||(a.value[0]===e.Percentage||a.value[0]===e.Number||a.value[0]===e.Dimension)&&Number.isNaN(a.value[4].value))return!1;s=a}if(!r(s))return!1;b.push(s)}}if(1!==b.length)return!1;if(1!==u.length||1!==i.length||1!==h.length)return!1;if(!r(u[0])||!r(i[0])||!r(h[0]))return!1;const g=[u[0].value,i[0].value,h[0].value];1===m.length&&(p.syntaxFlags.add(_.HasAlpha),r(m[0])?g.push(m[0].value):p.alpha=m[0]);const d=l(g,p);return!1!==d&&(p.channels=[d[0][4].value,d[1][4].value,d[2][4].value],4===d.length&&(p.alpha=d[3][4].value),p)}function hsl(e,a){{const a=hslCommaSeparated(e);if(!1!==a)return a}{const a=hslSpaceSeparated(e);if(!1!==a)return a}return!1}function hslCommaSeparated(e){return threeChannelLegacySyntax(e,normalize_legacy_HSL_ChannelValues,p.HSL,[_.LegacyHSL])}function hslSpaceSeparated(e){return threeChannelSpaceSeparated(e,normalize_modern_HSL_ChannelValues,p.HSL,[])}function normalize_HWB_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(0!==t)if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{if(3!==t)return!1;const n=normalize(l[4].value,1,0,1);r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}else{3===t?o.syntaxFlags.add(_.HasPercentageAlpha):o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,1,0,100);3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else{const a=normalizeHue(l);if(!1===a)return!1;l[0]===e.Dimension&&o.syntaxFlags.add(_.HasDimensionValues),r.push(a)}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function normalize_Lab_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,100);1===t||2===t?n=normalize(l[4].value,1,-1/0,1/0):3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:l[4].value,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,1,0,100);1===t||2===t?n=normalize(l[4].value,.8,-1/0,1/0):3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function normalize_LCH_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(2!==t)if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,100);1===t?n=normalize(l[4].value,1,0,1/0):3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:l[4].value,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,1,0,100);1===t?n=normalize(l[4].value,100/150,0,1/0):3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else{const a=normalizeHue(l);if(!1===a)return!1;l[0]===e.Dimension&&o.syntaxFlags.add(_.HasDimensionValues),r.push(a)}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}const L=new Map;for(const[e,a]of Object.entries(u))L.set(e,a);function namedColor(e){const a=L.get(toLowerCaseAZ(e));return!!a&&{colorNotation:p.RGB,channels:[a[0]/255,a[1]/255,a[2]/255],alpha:1,syntaxFlags:new Set([_.ColorKeyword,_.NamedColor])}}function normalize_OKLab_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,1);1===t||2===t?n=normalize(l[4].value,1,-1/0,1/0):3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:l[4].value,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,100,0,1);1===t||2===t?n=normalize(l[4].value,250,-1/0,1/0):3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function normalize_OKLCH_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(2!==t)if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,1,0,1);1===t?n=normalize(l[4].value,1,0,1/0):3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:l[4].value,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);let n=normalize(l[4].value,100,0,1);1===t?n=normalize(l[4].value,250,0,1/0):3===t&&(n=normalize(l[4].value,100,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else{const a=normalizeHue(l);if(!1===a)return!1;l[0]===e.Dimension&&o.syntaxFlags.add(_.HasDimensionValues),r.push(a)}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function normalize_legacy_sRGB_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,255,0,1);3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}else{3===t?o.syntaxFlags.add(_.HasPercentageAlpha):o.syntaxFlags.add(_.HasPercentageValues);const n=normalize(l[4].value,100,0,1);r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}return(!o.syntaxFlags.has(_.HasNumberValues)||!o.syntaxFlags.has(_.HasPercentageValues))&&r}function normalize_modern_sRGB_ChannelValues(n,o){const r=[];for(let t=0;t<n.length;t++){const l=n[t];if(l[0]!==e.Ident||"none"!==toLowerCaseAZ(l[4].value))if(l[0]!==e.Percentage){if(l[0]!==e.Number)return!1;{3!==t&&o.syntaxFlags.add(_.HasNumberValues);let n=normalize(l[4].value,255,0,1);3===t&&(n=normalize(l[4].value,1,0,1)),r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}}else{3!==t&&o.syntaxFlags.add(_.HasPercentageValues);const n=normalize(l[4].value,100,0,1);r.push([e.Number,n.toString(),l[2],l[3],{value:n,type:a.Number}])}else o.syntaxFlags.add(_.HasNoneKeywords),r.push([e.Number,"none",l[2],l[3],{value:NaN,type:a.Number}])}return r}function rgb(e,a){{const a=rgbCommaSeparated(e);if(!1!==a)return a}{const a=rgbSpaceSeparated(e);if(!1!==a)return a}return!1}function rgbCommaSeparated(e){return threeChannelLegacySyntax(e,normalize_legacy_sRGB_ChannelValues,p.RGB,[_.LegacyRGB])}function rgbSpaceSeparated(e){return threeChannelSpaceSeparated(e,normalize_modern_sRGB_ChannelValues,p.RGB,[])}function toPrecision(e,a=7){e=+e,a=+a;const n=(Math.floor(e)+"").length;if(a>n)return+e.toFixed(a-n);{const o=10**(n-a);return Math.round(e/o)*o}}function serializeP3(n){n.channels=setPowerlessComponents(n.channels,n.colorNotation);let o=n.channels.map((e=>Number.isNaN(e)?0:e));n.colorNotation!==p.Display_P3&&(o=XYZ_D50_to_P3_Gamut(colorData_to_XYZ_D50(n).channels));const r=toPrecision(o[0],6),t=toPrecision(o[1],6),c=toPrecision(o[2],6),u=[e.Function,"color(",-1,-1,{value:"color"}],i=[e.CloseParen,")",-1,-1,void 0],h=[e.Whitespace," ",-1,-1,void 0],m=[new s([e.Ident,"display-p3",-1,-1,{value:"display-p3"}]),new s(h),new s([e.Number,r.toString(),-1,-1,{value:o[0],type:a.Number}]),new s(h),new s([e.Number,t.toString(),-1,-1,{value:o[1],type:a.Number}]),new s(h),new s([e.Number,c.toString(),-1,-1,{value:o[2],type:a.Number}])];if("number"==typeof n.alpha){const o=Math.min(1,Math.max(0,toPrecision(Number.isNaN(n.alpha)?0:n.alpha)));return new l(u,i,1===o?m:[...m,new s(h),new s([e.Delim,"/",-1,-1,{value:"/"}]),new s(h),new s([e.Number,o.toString(),-1,-1,{value:n.alpha,type:a.Integer}])])}return new l(u,i,[...m,new s(h),new s([e.Delim,"/",-1,-1,{value:"/"}]),new s(h),n.alpha])}function XYZ_D50_to_P3_Gamut(e){const a=c.XYZ_D50_to_P3(e);if(i.inGamut(a))return i.clip(a);let n=e.slice();return n=h.D50_to_D65(n),n=h.XYZ_to_OKLab(n),n=h.OKLab_to_OKLCH(n),n[0]<1e-6&&(n=[0,0,0]),n[0]>.999999&&(n=[1,0,0]),m.mapGamut(n,(e=>(e=h.OKLCH_to_OKLab(e),e=h.OKLab_to_XYZ(e),e=h.XYZ_to_lin_P3(e),h.gam_P3(e))),(e=>(e=h.lin_P3(e),e=h.lin_P3_to_XYZ(e),e=h.XYZ_to_OKLab(e),h.OKLab_to_OKLCH(e))))}function serializeRGB(n){n.channels=setPowerlessComponents(n.channels,n.colorNotation);let o=n.channels.map((e=>Number.isNaN(e)?0:e));n.colorNotation!==p.RGB&&n.colorNotation!==p.HEX&&(o=XYZ_D50_to_sRGB_Gamut(colorData_to_XYZ_D50(n).channels));const r=Math.min(255,Math.max(0,Math.round(255*toPrecision(o[0])))),t=Math.min(255,Math.max(0,Math.round(255*toPrecision(o[1])))),c=Math.min(255,Math.max(0,Math.round(255*toPrecision(o[2])))),u=[e.CloseParen,")",-1,-1,void 0],i=[e.Whitespace," ",-1,-1,void 0],h=[e.Comma,",",-1,-1,void 0],m=[new s([e.Number,r.toString(),-1,-1,{value:o[0],type:a.Integer}]),new s(h),new s(i),new s([e.Number,t.toString(),-1,-1,{value:o[1],type:a.Integer}]),new s(h),new s(i),new s([e.Number,c.toString(),-1,-1,{value:o[2],type:a.Integer}])];if("number"==typeof n.alpha){const o=Math.min(1,Math.max(0,toPrecision(Number.isNaN(n.alpha)?0:n.alpha)));return 1===o?new l([e.Function,"rgb(",-1,-1,{value:"rgb"}],u,m):new l([e.Function,"rgba(",-1,-1,{value:"rgba"}],u,[...m,new s(h),new s(i),new s([e.Number,o.toString(),-1,-1,{value:n.alpha,type:a.Integer}])])}return new l([e.Function,"rgba(",-1,-1,{value:"rgba"}],u,[...m,new s(h),new s(i),n.alpha])}function XYZ_D50_to_sRGB_Gamut(e){const a=c.XYZ_D50_to_sRGB(e);if(i.inGamut(a))return i.clip(a);let n=e.slice();return n=h.D50_to_D65(n),n=h.XYZ_to_OKLab(n),n=h.OKLab_to_OKLCH(n),n[0]<1e-6&&(n=[0,0,0]),n[0]>.999999&&(n=[1,0,0]),m.mapGamut(n,(e=>(e=h.OKLCH_to_OKLab(e),e=h.OKLab_to_XYZ(e),e=h.XYZ_to_lin_sRGB(e),h.gam_sRGB(e))),(e=>(e=h.lin_sRGB(e),e=h.lin_sRGB_to_XYZ(e),e=h.XYZ_to_OKLab(e),h.OKLab_to_OKLCH(e))))}function color(a){if(t(a)){switch(toLowerCaseAZ(a.getName())){case"rgb":case"rgba":return rgb(a);case"hsl":case"hsla":return hsl(a);case"hwb":return threeChannelSpaceSeparated(a,normalize_HWB_ChannelValues,p.HWB,[]);case"lab":return threeChannelSpaceSeparated(a,normalize_Lab_ChannelValues,p.Lab,[]);case"lch":return threeChannelSpaceSeparated(a,normalize_LCH_ChannelValues,p.LCH,[]);case"oklab":return threeChannelSpaceSeparated(a,normalize_OKLab_ChannelValues,p.OKLab,[]);case"oklch":return threeChannelSpaceSeparated(a,normalize_OKLCH_ChannelValues,p.OKLCH,[]);case"color":return color$1(a);case"color-mix":return colorMix(a,color);default:return!1}}if(r(a)){if(a.value[0]===e.Hash)return hex(a.value);if(a.value[0]===e.Ident){const e=namedColor(a.value[4].value);if(!1!==e)return e;const n="transparent"===toLowerCaseAZ(a.value[4].value)&&{colorNotation:p.RGB,channels:[0,0,0],alpha:0,syntaxFlags:new Set([_.ColorKeyword])};return!1!==n&&n}return!1}return!1}export{p as ColorNotation,_ as SyntaxFlag,color,colorDataFitsRGB_Gamut,colorDataTo,serializeP3,serializeRGB};
