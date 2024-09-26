// JavaScript Document
console.log("hi");

// stap 1: zoek de menu-button en nav op
let deButton = document.querySelector("header > button");
let deNav = document.querySelector("header nav:first-of-type");

// stap 2: laat de menu-button luisteren naar kliks en toggle het menu
deButton.onclick = function() {
  deNav.classList.toggle("toonMenu");
  console.log(deNav);
};