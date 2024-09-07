{
  /* <img
          class="hero-img"
          src="./assets/images/orange-kitchen.jpg"
          alt="Hanging utensils."
        />
        <h1>Odin Restaurant</h1>
        <h2>Your local vegan eatery</h2>
        <p>Featured Dishes</p>
        <ul>
          <li>Beyond Burger</li>
        </ul> */
}

function homeFactory() {
  const heroImg = document.createElement("img");
  const heroH1 = document.createElement("h1");
  const heroH2 = document.createElement("h2");
  const featuredUl = document.createElement("ul");
  const featuredItemOne = document.createElement("li");
  const content = document.querySelector("#content");

  heroH1.textContent = "Odin Restaurant";

  function render() {
    content.appendChild(heroH1);
  }

  return { render };
}

const home = homeFactory();
export { home };
