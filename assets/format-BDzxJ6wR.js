import{e as D,h as _,m as C,j as B}from"./helpers-Don_ybCu.js";import{t as g,c as y}from"./index-3miXUnVq.js";function Y(r,e){var f,u,m,h;const t=D(),n=(e==null?void 0:e.weekStartsOn)??((u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.weekStartsOn)??t.weekStartsOn??((h=(m=t.locale)==null?void 0:m.options)==null?void 0:h.weekStartsOn)??0,a=g(r),s=a.getDay(),d=(s<n?7:0)+s-n;return a.setDate(a.getDate()-d),a.setHours(0,0,0,0),a}function T(r){return Y(r,{weekStartsOn:1})}function H(r){const e=g(r),t=e.getFullYear(),n=y(r,0);n.setFullYear(t+1,0,4),n.setHours(0,0,0,0);const a=T(n),s=y(r,0);s.setFullYear(t,0,4),s.setHours(0,0,0,0);const d=T(s);return e.getTime()>=a.getTime()?t+1:e.getTime()>=d.getTime()?t:t-1}function X(r){const e=H(r),t=y(r,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),T(t)}function L(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function R(r){if(!L(r)&&typeof r!="number")return!1;const e=g(r);return!isNaN(Number(e))}function I(r){const e=g(r),t=y(r,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}function $(r){const e=g(r);return _(e,I(e))+1}function j(r){const e=g(r),t=+T(e)-+X(e);return Math.round(t/C)+1}function G(r,e){var h,b,x,k;const t=g(r),n=t.getFullYear(),a=D(),s=(e==null?void 0:e.firstWeekContainsDate)??((b=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:b.firstWeekContainsDate)??a.firstWeekContainsDate??((k=(x=a.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)??1,d=y(r,0);d.setFullYear(n+1,0,s),d.setHours(0,0,0,0);const f=Y(d,e),u=y(r,0);u.setFullYear(n,0,s),u.setHours(0,0,0,0);const m=Y(u,e);return t.getTime()>=f.getTime()?n+1:t.getTime()>=m.getTime()?n:n-1}function p(r,e){var f,u,m,h;const t=D(),n=(e==null?void 0:e.firstWeekContainsDate)??((u=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:u.firstWeekContainsDate)??t.firstWeekContainsDate??((h=(m=t.locale)==null?void 0:m.options)==null?void 0:h.firstWeekContainsDate)??1,a=G(r,e),s=y(r,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),Y(s,e)}function V(r,e){const t=g(r),n=+Y(t,e)-+p(t,e);return Math.round(n/C)+1}function c(r,e){const t=r<0?"-":"",n=Math.abs(r).toString().padStart(e,"0");return t+n}const l={y(r,e){const t=r.getFullYear(),n=t>0?t:1-t;return c(e==="yy"?n%100:n,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):c(t+1,2)},d(r,e){return c(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return c(r.getHours()%12||12,e.length)},H(r,e){return c(r.getHours(),e.length)},m(r,e){return c(r.getMinutes(),e.length)},s(r,e){return c(r.getSeconds(),e.length)},S(r,e){const t=e.length,n=r.getMilliseconds(),a=Math.trunc(n*Math.pow(10,t-3));return c(a,e.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},q={G:function(r,e,t){const n=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const n=r.getFullYear(),a=n>0?n:1-n;return t.ordinalNumber(a,{unit:"year"})}return l.y(r,e)},Y:function(r,e,t,n){const a=G(r,n),s=a>0?a:1-a;if(e==="YY"){const d=s%100;return c(d,2)}return e==="Yo"?t.ordinalNumber(s,{unit:"year"}):c(s,e.length)},R:function(r,e){const t=H(r);return c(t,e.length)},u:function(r,e){const t=r.getFullYear();return c(t,e.length)},Q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return c(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return c(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(r,e,t){const n=r.getMonth();switch(e){case"M":case"MM":return l.M(r,e);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(r,e,t){const n=r.getMonth();switch(e){case"L":return String(n+1);case"LL":return c(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(r,e,t,n){const a=V(r,n);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):c(a,e.length)},I:function(r,e,t){const n=j(r);return e==="Io"?t.ordinalNumber(n,{unit:"week"}):c(n,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):l.d(r,e)},D:function(r,e,t){const n=$(r);return e==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):c(n,e.length)},E:function(r,e,t){const n=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(r,e,t,n){const a=r.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return c(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(r,e,t,n){const a=r.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return c(s,e.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(r,e,t){const n=r.getDay(),a=n===0?7:n;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(r,e,t){const a=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(r,e,t){const n=r.getHours();let a;switch(n===12?a=O.noon:n===0?a=O.midnight:a=n/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(r,e,t){const n=r.getHours();let a;switch(n>=17?a=O.evening:n>=12?a=O.afternoon:n>=4?a=O.morning:a=O.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let n=r.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return l.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):l.H(r,e)},K:function(r,e,t){const n=r.getHours()%12;return e==="Ko"?t.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},k:function(r,e,t){let n=r.getHours();return n===0&&(n=24),e==="ko"?t.ordinalNumber(n,{unit:"hour"}):c(n,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):l.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):l.s(r,e)},S:function(r,e){return l.S(r,e)},X:function(r,e,t){const n=r.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return F(n);case"XXXX":case"XX":return w(n);case"XXXXX":case"XXX":default:return w(n,":")}},x:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"x":return F(n);case"xxxx":case"xx":return w(n);case"xxxxx":case"xxx":default:return w(n,":")}},O:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+N(n,":");case"OOOO":default:return"GMT"+w(n,":")}},z:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+N(n,":");case"zzzz":default:return"GMT"+w(n,":")}},t:function(r,e,t){const n=Math.trunc(r.getTime()/1e3);return c(n,e.length)},T:function(r,e,t){const n=r.getTime();return c(n,e.length)}};function N(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),a=Math.trunc(n/60),s=n%60;return s===0?t+String(a):t+String(a)+e+c(s,2)}function F(r,e){return r%60===0?(r>0?"-":"+")+c(Math.abs(r)/60,2):w(r,e)}function w(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),a=c(Math.trunc(n/60),2),s=c(n%60,2);return t+a+e+s}const v=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Q=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},A=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],n=t[1],a=t[2];if(!a)return v(r,e);let s;switch(n){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",v(n,e)).replace("{{time}}",Q(a,e))},J={p:Q,P:A},K=/^D+$/,U=/^Y+$/,Z=["D","DD","YY","YYYY"];function z(r){return K.test(r)}function ee(r){return U.test(r)}function te(r,e,t){const n=re(r,e,t);if(console.warn(n),Z.includes(r))throw new RangeError(n)}function re(r,e,t){const n=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ne=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,se=/^'([^]*?)'?$/,ce=/''/g,ie=/[a-zA-Z]/;function fe(r,e,t){var h,b,x,k,P,W,E,S;const n=D(),a=(t==null?void 0:t.locale)??n.locale??B,s=(t==null?void 0:t.firstWeekContainsDate)??((b=(h=t==null?void 0:t.locale)==null?void 0:h.options)==null?void 0:b.firstWeekContainsDate)??n.firstWeekContainsDate??((k=(x=n.locale)==null?void 0:x.options)==null?void 0:k.firstWeekContainsDate)??1,d=(t==null?void 0:t.weekStartsOn)??((W=(P=t==null?void 0:t.locale)==null?void 0:P.options)==null?void 0:W.weekStartsOn)??n.weekStartsOn??((S=(E=n.locale)==null?void 0:E.options)==null?void 0:S.weekStartsOn)??0,f=g(r);if(!R(f))throw new RangeError("Invalid time value");let u=e.match(ae).map(o=>{const i=o[0];if(i==="p"||i==="P"){const M=J[i];return M(o,a.formatLong)}return o}).join("").match(ne).map(o=>{if(o==="''")return{isToken:!1,value:"'"};const i=o[0];if(i==="'")return{isToken:!1,value:ue(o)};if(q[i])return{isToken:!0,value:o};if(i.match(ie))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return{isToken:!1,value:o}});a.localize.preprocessor&&(u=a.localize.preprocessor(f,u));const m={firstWeekContainsDate:s,weekStartsOn:d,locale:a};return u.map(o=>{if(!o.isToken)return o.value;const i=o.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&ee(i)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&z(i))&&te(i,e,String(r));const M=q[i[0]];return M(f,i,a.localize,m)}).join("")}function ue(r){const e=r.match(se);return e?e[1].replace(ce,"'"):r}export{fe as f};
