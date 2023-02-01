const newContent = document.querySelector("#newContent");
const container3 = document.querySelector("#container3");
const container2 = document.querySelector("#container2");
const container = document.querySelector("#container");

container2.style.display = "none";

const hideContaier = () => {
  container.style.display = "none";
  container2.style.display = "flex";
};

newContent.addEventListener("click", hideContaier);

const mainPageContentHandler = () => {};
