const e=document.querySelector(".box"),t=document.querySelector(".js-timer");console.log(e),console.log(t);let o=10;function n(){t.style.display="none"}setTimeout((()=>{e.style.display="block";setInterval((()=>{t.textContent=o,o-=1,o<0&&(t.addEventListener("click",n),t.textContent="X")}),1e3)}),2e3);
//# sourceMappingURL=task-04-timer.e90d9ee3.js.map
