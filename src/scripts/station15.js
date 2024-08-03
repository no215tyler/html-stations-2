const displayList = () => {
  const fruitsList = document.getElementById("fruits");
  const ul = document.createElement("ul");
  const fruitsItems = fruitsList.querySelectorAll("p");
  fruitsItems.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit.textContent;
    ul.appendChild(li);
  });

  while (fruitsList.firstChild) {
    fruitsList.removeChild(fruitsList.firstChild);
  }

  fruitsList.appendChild(ul);
};
