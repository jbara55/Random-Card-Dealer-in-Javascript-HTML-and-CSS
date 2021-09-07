/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pinta = ["♦", "♥", "♣", "♠"];
  let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "k"];

  let random_pinta = pinta[Math.floor(Math.random() * pinta.length)];
  let random_numero = card[Math.floor(Math.random() * card.length)];

  let result = [random_pinta];
  let result2 = [random_numero];

  document.querySelector(".top").innerHTML = result;
  document.querySelector(".numero").innerHTML = result2;
  document.querySelector(".bottom").innerHTML = result;
};
