const box = document.querySelector(".box");
const timer = document.querySelector(".js-timer");

console.log(box);
console.log(timer);
let counter = 10;

setTimeout(() => {
  box.style.display = "block";

  const intervalId = setInterval(() => {
    timer.textContent = counter;
    counter -= 1;
    if (counter < 0) {
      // clearInterval(intervalId);
      // box.style.display = "none";
      timer.addEventListener("click", onTimerClick);
      timer.textContent = "X";
    }
  }, 1000);
}, 2000);

function onTimerClick() {
  timer.style.display = "none";
}
