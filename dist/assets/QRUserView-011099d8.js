import{o as c,c as n,b as e,d,p as l,t as i,r as _,x as f,q as h}from"./index-d25e32fe.js";import{Q as p}from"./qrcode.vue.esm-5837e0b5.js";const u=(t,s)=>{const o=t.__vccOpts||t;for(const[r,a]of s)o[r]=a;return o},m={},v={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},x=e("path",{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"},null,-1),g=[x];function w(t,s){return c(),n("svg",v,g)}const $=u(m,[["render",w]]),Q={},b={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"h-6 w-6"},C=e("path",{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"},null,-1),R=[C];function z(t,s){return c(),n("svg",b,R)}const B=u(Q,[["render",z]]),L={class:"flex rounded-lg bg-blue-200 p-3 text-blue-950"},V={class:"mr-3"},k={class:"mr-2 flex flex-grow flex-col"},y={class:"self-center"},I=d({__name:"AlertWQR",props:{title:{},message:{}},setup(t){return(s,o)=>(c(),n("div",L,[e("section",V,[l($,{class:"fill-blue-500"})]),e("section",k,[e("p",null,i(s.title),1),e("p",null,i(s.message),1)]),e("section",y,[l(B)])]))}}),M={class:"flex flex-grow flex-col content-center justify-center"},S={class:"self-center rounded-lg border-4 p-4"},N=e("div",{class:"h-6 w-6 bg-slate-500"},null,-1),E=d({__name:"QRUserView",setup(t){const s=_("H"),o=_("svg"),r=f(),a=_("http://localhost:5173"+r.fullPath);return(j,q)=>(c(),n("div",M,[e("section",S,[l(p,{class:"mx-auto",value:a.value,size:200,margin:1,level:s.value,"render-as":o.value},{default:h(()=>[N]),_:1},8,["value","level","render-as"])]),l(I,{class:"mx-6",message:"Show this QR Code to staff!"})]))}});export{E as default};
