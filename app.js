const menu = document.querySelector(".menu");
const navBar = document.querySelector(".nav-bar");
const links = document.querySelector("#links");
const cancel = document.querySelector(".cancel");

menu.addEventListener("click", menuClicked);
cancel.addEventListener("click", cancelClicked);

function menuClicked(e) {
  navBar.style.background = "#111111";
  navBar.style.height = "400px";
  navBar.style.transition = "ease-in-out .5s";
  links.style.display = "block";
  document.querySelector(".cancel").style.display = "block";
  cancel.style.display = "block";
  menu.style.display = "none";

  e.preventDefault();
}

function cancelClicked(e) {
  navBar.style.background = "";
  navBar.style.height = "";
  links.style.display = "";
  menu.style.display = "";
  cancel.style.display = "";
}

addEventListener("resize", query);

function query() {
  if (innerWidth > 857) {
    navBar.style.background = "";
    navBar.style.height = "";
    links.style.display = "";
    menu.style.display = "";
    cancel.style.display = "";
  }
}
