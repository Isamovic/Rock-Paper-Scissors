"use strict";

function getComputerChoice() {
  const choix = ["rock", "paper", "scissors"];
  const result = Math.trunc(Math.random() * 3);
  return choix[result];
}

function play(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      console.log(`Vous gagnez! ${playerSelection} bats ${computerSelection}`);
    } else if (computerSelection === playerSelection) {
      console.log("Egalite");
    } else {
      console.log(`Vous perdez! ${computerSelection} bats ${playerSelection} `);
    }
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      console.log(`Vous gagnez! ${playerSelection} bats ${computerSelection}`);
    } else if (computerSelection === playerSelection) {
      console.log("Egalite");
    } else {
      console.log(`Vous perdez! ${computerSelection} bats ${playerSelection} `);
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      console.log(`Vous gagnez! ${playerSelection} bats ${computerSelection}`);
    } else if (computerSelection === playerSelection) {
      console.log("Egalite");
    } else {
      console.log(`Vous perdez! ${computerSelection} bats ${playerSelection} `);
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Veuillez faire un choix entre paper, scissors et rock"
    ).toLowerCase();
    play(playerSelection, getComputerChoice());
  }
}

game();
