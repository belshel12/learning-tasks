// Завдання 1
const amountOfCategories = document.querySelectorAll(".item");
console.log("Number of categories:", amountOfCategories.length);
console.log('Hello World!');

//Завдання 2
amountOfCategories.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
