"use strict";

const body = document.querySelector("body");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const resultat = document.createElement("div");
const joueur1 = document.querySelector(".j1");
const joueur2 = document.querySelector(".j2");

const score = document.querySelector(".score");

resultat.classList.add("result");
resultat.textContent = "En attente du résultat !";

button1.textContent = "Rock";
button1.setAttribute("id", "rock");

button2.textContent = "Paper";
button2.setAttribute("id", "paper");

button3.textContent = "Scisssors";
button3.setAttribute("id", "scissors");

body.appendChild(button1);
body.appendChild(button2);
body.appendChild(button3);
body.appendChild(resultat);

/* état du jeu */

let game = true;

const btn = document.querySelectorAll("button");

btn.forEach(function (nb) {
  nb.addEventListener("click", function () {
    if (game === true) {
      play(nb.getAttribute("id"), getComputerChoice());
      displayScore();
      if (scorePlayer === 5 || scorePlayer2 === 5) {
        game = false;
        resultat.textContent =
          scorePlayer > scorePlayer2
            ? "Le joueur gagne "
            : "L'ordinateur gagne";
      }
    }
  });
});

/* Suivi du score */

let scorePlayer = 0;
let scorePlayer2 = 0;

/* functions */

function displayScore() {
  joueur1.textContent = scorePlayer;
  joueur2.textContent = scorePlayer2;
}

function getComputerChoice() {
  const choix = ["rock", "paper", "scissors"];
  const result = Math.trunc(Math.random() * 3);
  return choix[result];
}

function play(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      scorePlayer++;
      resultat.textContent = `Vous gagnez! ${playerSelection} bats ${computerSelection}`;
    } else if (computerSelection === playerSelection) {
      resultat.textContent = "Egalite";
    } else {
      scorePlayer2++;
      resultat.textContent = `Vous perdez! ${computerSelection} bats ${playerSelection} `;
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      scorePlayer++;

      resultat.textContent = `Vous gagnez! ${playerSelection} bats ${computerSelection}`;
    } else if (computerSelection === playerSelection) {
      resultat.textContent = "Egalite";
    } else {
      scorePlayer2++;

      resultat.textContent = `Vous perdez! ${computerSelection} bats ${playerSelection} `;
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      scorePlayer++;
      resultat.textContent = `Vous gagnez! ${playerSelection} bats ${computerSelection}`;
    } else if (computerSelection === playerSelection) {
      resultat.textContent = "Egalite";
    } else {
      scorePlayer2++;
      resultat.textContent = `Vous perdez! ${computerSelection} bats ${playerSelection} `;
    }
  }
}
