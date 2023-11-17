// Потрібно створити функцію яка буде шукати нарциса.
// Головна умова нарциса знають всі, нарцис не знає нікого.

const people1 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Jhon",
    know: ["Alex"],
  },
];

const people2 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Eva",
    know: [],
  },
  {
    name: "Jhon",
    know: [],
  },

  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

const people3 = [
  {
    name: "Alex",
    know: ["Eva", "Jhon"],
  },
  {
    name: "Jhon",
    know: [],
  },
  {
    name: "Eva",
    know: ["Alex", "Jhon"],
  },
  {
    name: "Ivan",
    know: ["Jhon", "Alex"],
  },
];

function findNarcissus(arr) {
  if (arr.every(({ know }) => know.length)) {
    return "Not found";
  }
  const narc = arr.find(({ know }) => !know.length);
  const friendsArr = arr.filter(({ name }) => name !== narc.name);
  const result =
    arr.find(
      (el) =>
        el.name === narc.name &&
        friendsArr.every(({ know }) => know.includes(narc.name))
    ) ?? "Not found";
  return result.name ?? "Not found";
}

console.log(findNarcissus(people3));
