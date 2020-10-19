const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listRef = document.querySelector("#ingredients");

const addItems = (array) => {
  array.forEach((element) => {
    const elementRef = document.createElement("li");
    elementRef.textContent = element;
    listRef.appendChild(elementRef);
  });
};

addItems(ingredients);
