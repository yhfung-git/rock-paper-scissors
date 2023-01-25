// Game
let playerScore = 0
let computerScore = 0

// Computer choice, return rock, paper or scissors randomly
const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length
  )]
}
console.log(getComputerChoice());

// Get player choice
function playerSelection() {

}

