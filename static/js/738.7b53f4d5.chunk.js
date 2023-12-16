/*! For license information please see 738.7b53f4d5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmojdeapp=self.webpackChunkmojdeapp||[]).push([[738],{738:(t,e,c)=>{c.r(e),c.d(e,{scopeCss:()=>B});const s="-shadowcsshost",o="-shadowcssslotted",n="-shadowcsscontext",r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+s+r,"gim"),a=new RegExp("("+n+r,"gim"),i=new RegExp("("+o+r,"gim"),p=s+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=t=>new RegExp("((?<!(^@supports(.*)))|(?<={.*))(".concat(t,"\\b)"),"gim"),m=d("::slotted"),f=d(":host"),x=d(":host-context"),w=/\/\*\s*[\s\S]*?\*\//g,_=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,v=/(^.*?[^\\])??((:+)(.*)|$)/,E="%BLOCK%",W=(t,e)=>{const c=j(t);let s=0;return c.escapedString.replace(S,(function(){const t=arguments.length<=2?void 0:arguments[2];let o="",n=arguments.length<=4?void 0:arguments[4],r="";n&&n.startsWith("{"+E)&&(o=c.blocks[s++],n=n.substring(8),r="{");const l=e({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(l.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(r).concat(l.content).concat(n)}))},j=t=>{const e=t.split(b),c=[],s=[];let o=0,n=[];for(let r=0;r<e.length;r++){const t=e[r];"}"===t&&o--,o>0?n.push(t):(n.length>0&&(s.push(n.join("")),c.push(E),n=[]),c.push(t)),"{"===t&&o++}n.length>0&&(s.push(n.join("")),c.push(E));return{escapedString:c.join(""),blocks:s}},k=(t,e,c)=>t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(e[2]){const t=e[2].split(","),s=[];for(let o=0;o<t.length;o++){const n=t[o].trim();if(!n)break;s.push(c(p,n,e[3]))}return s.join(",")}return p+e[3]})),O=(t,e,c)=>t+e.replace(s,"")+c,$=(t,e,c)=>e.indexOf(s)>-1?O(t,e,c):t+e+c+", "+e+" "+t+c,R=(t,e)=>{const c=(t=>(t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(e);return!c.test(t)},C=(t,e)=>t.replace(v,(function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+e+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),T=(t,e,c)=>{const s="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),o=t=>{let o=t.trim();if(!o)return"";if(t.indexOf(p)>-1)o=((t,e,c)=>{if(g.lastIndex=0,g.test(t)){const e=".".concat(c);return t.replace(h,((t,c)=>C(c,e))).replace(g,e+" ")}return e+" "+t})(t,e,c);else{const e=t.replace(g,"");e.length>0&&(o=C(e,s))}return o},n=(t=>{const e=[];let c=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,((t,s)=>{const o="__ph-".concat(c,"__");return e.push(s),c++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((t,s,o)=>{const n="__ph-".concat(c,"__");return e.push(o),c++,s+n})),placeholders:e}})(t);let r,l="",a=0;const i=/( |>|\+|~(?!=))\s*/g;let u=!((t=n.content).indexOf(p)>-1);for(;null!==(r=i.exec(t));){const e=r[1],c=t.slice(a,r.index).trim();u=u||c.indexOf(p)>-1;const s=u?o(c):c;l+="".concat(s," ").concat(e," "),a=i.lastIndex}const d=t.substring(a);return u=u||d.indexOf(p)>-1,l+=u?o(d):d,m=n.placeholders,l.replace(/__ph-(\d+)__/g,((t,e)=>m[+e]));var m},L=(t,e,c,s,o)=>W(t,(t=>{let o=t.selector,n=t.content;"@"!==t.selector[0]?o=((t,e,c,s)=>t.split(",").map((t=>s&&t.indexOf("."+s)>-1?t.trim():R(t,e)?T(t,e,c).trim():t.trim())).join(", "))(t.selector,e,c,s):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(n=L(t.content,e,c,s));return{selector:o.replace(/\s{2,}/g," ").trim(),content:n}})),y=(t,e,c,r,h)=>{const g=((t,e)=>{const c="."+e+" > ",s=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];if(e[2]){const t=e[2].trim(),o=e[3],n=c+t+o;let r="";for(let c=e[4]-1;c>=0;c--){const t=e[5][c];if("}"===t||","===t)break;r=t+r}const l=(r+n).trim(),a="".concat(r.trimEnd()).concat(n.trim()).trim();if(l!==a){const t="".concat(a,", ").concat(l);s.push({orgSelector:l,updatedSelector:t})}return n}return p+e[3]})),{selectors:s,cssText:t}})(t=(t=>k(t,a,$))(t=(t=>k(t,l,O))(t=(t=>t.replace(x,"$1".concat(n)).replace(f,"$1".concat(s)).replace(m,"$1".concat(o)))(t))),r);return t=(t=>u.reduce(((t,e)=>t.replace(e," ")),t))(t=g.cssText),e&&(t=L(t,e,c,r)),{cssText:(t=(t=A(t,c)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors.map((t=>({orgSelector:A(t.orgSelector,c),updatedSelector:A(t.updatedSelector,c)})))}},A=(t,e)=>t.replace(/-shadowcsshost-no-combinator/g,".".concat(e)),B=(t,e,c)=>{const s=e+"-h",o=e+"-s",n=t.match(_)||[];t=(t=>t.replace(w,""))(t);const r=[];if(c){const e=t=>{const e="/*!@___".concat(r.length,"___*/"),c="/*!@".concat(t.selector,"*/");return r.push({placeholder:e,comment:c}),t.selector=e+t.selector,t};t=W(t,(t=>"@"!==t.selector[0]?e(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=W(t.content,e),t):t))}const l=y(t,e,s,o);return t=[l.cssText,...n].join("\n"),c&&r.forEach((e=>{let{placeholder:c,comment:s}=e;t=t.replace(c,s)})),l.slottedSelectors.forEach((e=>{const c=new RegExp(e.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");t=t.replace(c,e.updatedSelector)})),t}}}]);
//# sourceMappingURL=738.7b53f4d5.chunk.js.map