const startBtn = document.querySelector(".js-start");
const container = document.querySelector(".js-game__container");

startBtn.addEventListener("click", onStartClick);

function onStartClick(e) {
  //   const result = [];
  let counter = 0;
  [...container.children].forEach((el) => (el.textContent = ""));
  const promises = [...container.children].map(() => createPromise());

  Promise.allSettled(promises).then((items) => {
    items.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === "fulfilled") {
          counter += 1;
        }
        container.children[i].textContent = item.value || item.reason;

        if (container.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === container.children.length || !counter) {
              alert("You are the winner!");
            } else {
              alert("Lost money");
            }
          }, 500);
        }
      }, i * 700);
    });
  });

  //   [...container.children].forEach((el, idx) => {
  //     return createPromise(idx)
  //       .then((smile) => {
  //         el.textContent = smile;
  //         result.push("1");
  //       })
  //       .catch((smile) => {
  //         el.textContent = smile;
  //       })
  //       .finally(() => {
  //         setTimeout(() => {
  //           if (idx === container.children.length - 1) {
  //             if (!result.length || result.length === 3) {
  //               alert("Congratulations, you are the Winner!");
  //             } else {
  //               alert("Unfortunately you lost");
  //             }
  //           }
  //         }, 500);
  //       });
  //   });
}

function createPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const random = Math.random();

      if (random > 0.5) {
        res("🤑");
      } else {
        rej("😈");
      }
    });
  });
}
