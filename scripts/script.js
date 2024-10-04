// JavaScript Document
console.log("hi");

//navigatie in de header

// stap 1: zoekt de menu-button en nav op
let deButton = document.querySelector("header > button");
let deNav = document.querySelector("header nav:first-of-type");

// stap 2: laat de menu-button luisteren naar kliks en toggle het menu
deButton.onclick = function() {
  deNav.classList.toggle("toonMenu");
};

//navigaties in de footer, zelfde bron als in de css

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}