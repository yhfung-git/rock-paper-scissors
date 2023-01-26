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
let playerScore = 0;
let computerScore = 0;

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const result = document.getElementById("result");
const userScore = document.getElementById("player-score");
const compScore = document.getElementById("computer-score");

function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;

  if (computerChoice == "rock" && playerChoice == "paper") {
    result.innerText = "You win! Paper beats Rock!";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice == "rock" && playerChoice == "scissors") {
    result.innerText = "You lose! Rock beats Scissors";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice == "paper" && playerChoice == "scissors") {
    result.innerText = "You win! Scissors beats Paper";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice == "paper" && playerChoice == "rock") {
    result.innerText = "You lost! Paper beats Scissors";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice == "scissors" && playerChoice == "rock") {
    result.innerText = "You win! Rock beats Scissors";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice == "scissors" && playerChoice == "paper") {
    result.innerText = "You lose! Scissors beats Paper";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice == playerChoice) {
    result.innerText = "Tie!";
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

// Restart game
const restart = document.querySelector(".restart");

restart.addEventListener("click", function() {
  // window.location.reload();
  userScore.innerText = 0;
  compScore.innerText = 0;
  result.innerText = "";
  computerRock.style.color = "#3C6255";
  computerPaper.style.color = "#3C6255";
  computerScissors.style.color = "#3C6255";
  userRock.style.color = "#3C6255";
  userPaper.style.color = "#3C6255";
  userScissors.style.color = "#3C6255";
});
