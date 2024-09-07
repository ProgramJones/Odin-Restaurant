import heroImgSrc from "../assets/images/orange-kitchen.jpg";

function homeFactory() {
  // Create Elements
  const heroImg = document.createElement("img");
  const heroH1 = document.createElement("h1");
  const heroH2 = document.createElement("h2");
  const featuredUlP = document.createElement("p");
  const featuredUl = document.createElement("ul");
  const featuredUlItemOne = document.createElement("li");
  // Select Elements
  const content = document.querySelector("#content");

  heroImg.src = heroImgSrc;
  heroH1.textContent = "Odin Restaurant";
  heroH2.textContent = "Your local vegan eatery";

  featuredUlP.textContent = "Featured Dishes";
  featuredUlItemOne.textContent = "Beyond Burger";

  featuredUl.appendChild(featuredUlItemOne);

  function render() {
    content.appendChild(heroImg);
    content.appendChild(heroH1);
    content.appendChild(heroH2);
    content.appendChild(featuredUlP);
    content.appendChild(featuredUl);
  }

  return { render };
}

const home = homeFactory();
export { home };
