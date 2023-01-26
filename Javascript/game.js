// Computer choice, return rock, paper or scissors randomly
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length
  )];
};

// Player choice
const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");
const buttons = document.querySelectorAll(".user-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Pass the value to function playGame
    playGame(button.value);
    // Change color depends on the player choice
    if (button.value == "rock") {
      userRock.style.color = "#3C6255";
      userPaper.style.color = "#A6BB8D";
      userScissors.style.color = "#A6BB8D";
    } else if (button.value == "paper") {
      userPaper.style.color = "#3C6255";
      userRock.style.color = "#A6BB8D";
      userScissors.style.color = "#A6BB8D";
    } else if (button.value == "scissors") {
      userScissors.style.color = "#3C6255"
      userPaper.style.color = "#A6BB8D";
      userRock.style.color = "#A6BB8D";
    }
  });
});

// Game function
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const result = document.getElementById("result")

function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;

  if (computerChoice == "rock" && playerChoice == "paper") {
    result.innerText = "You win! Paper beats Rock!";
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    result.innerText = "You lose! Rock beats Scissors";
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    result.innerText = "You win! Scissors beats Paper";
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    result.innerText = "You lost! Paper beats Scissors";
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    result.innerText = "You win! Rock beats Scissors";
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    result.innerText = "You lose! Scissors beats Paper";
  } else if (computerChoice == playerChoice) {
    result.innerText = "Tie";
  }

  // Change color depends on the computer choice
  if (computerChoice == "rock") {
    computerRock.style.color = "#3C6255";
    computerPaper.style.color = "#A6BB8D";
    computerScissors.style.color = "#A6BB8D";
  } else if (computerChoice == "paper") {
    computerPaper.style.color = "#3C6255";
    computerRock.style.color = "#A6BB8D";
    computerScissors.style.color = "#A6BB8D";
  } else if (computerChoice == "scissors") {
    computerScissors.style.color = "#3C6255";
    computerPaper.style.color = "#A6BB8D";
    computerRock.style.color = "#A6BB8D";
  }
};

// Game and Score
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {

  };
};


// Restart game
const restart = document.querySelector(".restart");

restart.addEventListener("click", function() {
  window.location.reload();
});
