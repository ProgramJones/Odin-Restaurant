// CSS imports
import modernNormalize from "../styles/modern-normalize.css";
import css from "../styles/index.css";

// JS imports
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

function renderModule(module) {
  //   Empty the #content div
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  //   Fill the #content div
  module();
}

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");
homeButton.addEventListener("click", () => {
  renderModule(home.render);
});
menuButton.addEventListener("click", () => {
  renderModule(menu.render);
});
contactButton.addEventListener("click", () => {
  renderModule(contact.render);
});

renderModule(home.render);
