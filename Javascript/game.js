let playerScore = 0;
let computerScore = 0;

const userRock = document.getElementById("user-rock");
const userPaper = document.getElementById("user-paper");
const userScissors = document.getElementById("user-scissors");

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");

const choices = ["computer-rock", "computer-paper", "computer-scissors"];
const buttons = document.querySelectorAll(".user-buttons button")

// Computer choice, return rock, paper or scissors randomly
function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length
  )];
};

// Player choice
buttons.forEach(button => {
  button.addEventListener("click", function() {
    playGame(button.id)
  });
});


// Play game
function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;

  // console.log(computerChoice);
  // console.log(playerChoice);
}
