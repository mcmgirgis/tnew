(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{1532:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artlens",function(){return r(7320)}])},7320:function(e,o,r){"use strict";r.r(o);var s=r(5893),t=r(7294),n=r(8523);let c=()=>{let[e,o]=(0,t.useState)(""),[r,c]=(0,t.useState)(0),[l,a]=(0,t.useState)([]),[i,h]=(0,t.useState)(""),d=e=>{let r=e[0];console.log(r);let s=new FileReader;s.onabort=()=>console.log("file aborted"),s.onerror=()=>console.log("file reading failed"),s.onload=()=>{let e=new FormData;e.append("file",r),fetch("https://shareyourview.clevelandart.org/syv",{method:"POST",body:e}).then(e=>e.json()).then(e=>{console.log("Success:",e);let{accessionNums:r,imagePathProcessed:s}=e;console.log("accessionNums:",r),console.log("imagePathProcessed:",s),o(s),a(r),fetch("https://openaccess-api.clevelandart.org/api/artworks/".concat(r[0])).then(e=>e.json()).then(e=>{console.log("Success:",e.data.images.web.url),h(e.data.images.web.url)}).catch(e=>{console.error("Error:",e)})}).catch(e=>{console.error("Error:",e)})},s.readAsBinaryString(r)},u=()=>{let e=0;r!==l.length-1&&(e=r+1),c(e),fetch("https://openaccess-api.clevelandart.org/api/artworks/".concat(l[e])).then(e=>e.json()).then(e=>{console.log("Success:",e.data.images.web.url),h(e.data.images.web.url)}).catch(e=>{console.error("Error:",e)})};return i&&e?(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("img",{src:"https://shareyourview.clevelandart.org/".concat(e)}),(0,s.jsx)("img",{src:i})]}),(0,s.jsx)("button",{onClick:u,children:"Shuffle"})]}):(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Your view"}),(0,s.jsx)(n.ZP,{accept:{"image/*":[".png",".gif",".jpeg",".jpg"]},onDrop:d,children(e){let{getRootProps:o,getInputProps:r}=e;return(0,s.jsx)("section",{children:(0,s.jsxs)("div",{...o(),children:[(0,s.jsx)("input",{...r()}),(0,s.jsx)("p",{children:"Drop an image here or click to upload"})]})})}})]})};o.default=c}},function(e){e.O(0,[523,774,888,179],function(){return e(e.s=1532)}),_N_E=e.O()}]);