/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let containerStick = document.querySelector(".container-stick");
let containerNumber = document.querySelector(".container-number");
let containerStickFlipped = document.querySelector(".container-stick-flipped");
let btn = document.getElementById("generate-btn");
let widthCard = document.getElementById("width-card");
let heightCard = document.getElementById("height-card");
let resizeBtn = document.getElementById("resize-btn");
let card = document.getElementById("card");

let number = ["A", 2, 3, 4, 5, 6, 7, 9, 10, "J", "Q", "K"];
let stick = ["♦", "♥", "♠", "♣"];

function generateCard() {
  let randomNumber = Math.floor(Math.random() * number.length);
  let randomStick = Math.floor(Math.random() * stick.length);

  containerStick.textContent = stick[randomStick];
  containerStickFlipped.textContent = stick[randomStick];
  containerNumber.textContent = number[randomNumber];

  containerStick.classList.remove("text-danger");
  containerNumber.classList.remove("text-danger");
  containerStickFlipped.classList.remove("text-danger");

  if (stick[randomStick] === "♦" || stick[randomStick] === "♥") {
    containerStick.classList.add("text-danger");
    containerNumber.classList.add("text-danger");
    containerStickFlipped.classList.add("text-danger");
  }
}

window.onload = function() {
  generateCard();
};

resizeBtn.addEventListener("click", () => {
  let newWidth = widthCard.value;
  let newHeight = heightCard.value;

  if (newWidth) card.style.width = `${newWidth}px`;
  if (newHeight) card.style.height = `${newHeight}px`;
});

btn.addEventListener("click", () => {
  generateCard();
});

setInterval(generateCard, 10000);
