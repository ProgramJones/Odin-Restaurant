// CSS imports
import modernNormalize from "../styles/modern-normalize.css";
import css from "../styles/index.css";

// JS imports
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

console.log("JS is linked.");

// Empty the #content div
while (content.firstChild) {
  content.removeChild(content.firstChild);
}
// Fill the #content div
home.render();
