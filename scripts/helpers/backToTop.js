import { createElement } from "./createElement.js";

const toTop = createElement('a', {href: "#", className: "to-top"}, "↑")
document.body.appendChild(toTop)

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})