/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pinta = ["♦", "♥", "♣", "♠"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"];

  let num_card = card[Math.floor(Math.random() * card.length)];
  let num_pinta = pinta[Math.floor(Math.random() * pinta.length)];
  let top = document.querySelector(".top");
  top.innerHTML = num_pinta;
  let medio = document.querySelector(".medio");
  medio.innerHTML = num_card;
  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = num_pinta;
};
