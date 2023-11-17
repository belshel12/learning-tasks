!function(){var e=document.querySelector(".box"),t=document.querySelector(".js-timer");console.log(e),console.log(t);var n=10;function o(){t.style.display="none"}setTimeout((function(){e.style.display="block";setInterval((function(){t.textContent=n,(n-=1)<0&&(t.addEventListener("click",o),t.textContent="X")}),1e3)}),2e3)}();
//# sourceMappingURL=task-04-timer.28e016b1.js.map
