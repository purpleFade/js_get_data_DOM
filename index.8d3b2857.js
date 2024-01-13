var t=Array.from(document.querySelectorAll(".population")).map(function(t){return t.textContent||t.innerText}).map(function(t){return parseInt(t.replace(/,/g,""))}),e=t.reduce(function(t,e){return t+e},0),n=e/t.length,o=document.getElementsByClassName("total-population")[0],r=e.toLocaleString("en-US");o.textContent=r;var a=document.getElementsByClassName("average-population")[0],l=n.toLocaleString("en-US");a.textContent=l;//# sourceMappingURL=index.8d3b2857.js.map

//# sourceMappingURL=index.8d3b2857.js.map
