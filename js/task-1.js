const listRef = document.querySelector("#categories");
const numberOfCategories = listRef.children.length;

console.log(`В списке ${numberOfCategories} категории.`);

const categoriesRef = document.querySelectorAll(".item");

const showCategories = (arr) =>
  arr.forEach((element) => {
    const titleRef = element.firstElementChild.textContent;
    const amountOfElements = element.lastElementChild.children.length;
    console.log(
      `Категория:${titleRef}\nКоличество элементов:${amountOfElements}`
    );
  });

showCategories(categoriesRef);
