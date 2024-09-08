import burgerImg from "../assets/images/Burger.jpg";

function menuFactory() {
  function createCard(imgSrc, imgAlt, title, description) {
    // Create Elements
    const menuCard = document.createElement("div");
    const menuImg = document.createElement("img");
    const menuH3 = document.createElement("h3");
    const menuP = document.createElement("p");
    // Select Elements
    const content = document.querySelector("#content");

    // Edit Elements
    menuCard.className = "menuCard";

    menuImg.src = imgSrc;
    menuImg.setAttribute("alt", imgAlt);

    menuH3.textContent = title;
    menuP.textContent = description;

    menuCard.appendChild(menuImg);
    menuCard.appendChild(menuH3);
    menuCard.appendChild(menuP);

    content.appendChild(menuCard);
  }

  function render() {
    createCard(
      burgerImg,
      "Beyond Burger",
      "Beyond Burger",
      "Vegan burger topped with grilled onions, tomatoes, lettuce, and special house sauce."
    );
    // createCard();
    // createCard();
  }

  return { createCard, render };
}

const menu = menuFactory();
export { menu };
