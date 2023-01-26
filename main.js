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
    if (button.value === "rock") {
      userRock.style.color = "#3C6255";
      userPaper.style.color = "#A6BB8D";
      userScissors.style.color = "#A6BB8D";
    } else if (button.value === "paper") {
      userPaper.style.color = "#3C6255";
      userRock.style.color = "#A6BB8D";
      userScissors.style.color = "#A6BB8D";
    } else if (button.value === "scissors") {
      userScissors.style.color = "#3C6255";
      userPaper.style.color = "#A6BB8D";
      userRock.style.color = "#A6BB8D";
    };
  });
});

// Play game
let playerScore = 0;
let computerScore = 0;

const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const result = document.getElementById("result");
const userScore = document.getElementById("player-score");
const compScore = document.getElementById("computer-score");
let text = document.getElementById("text");
let pop = document.querySelector(".pop-up");
let box = document.querySelector(".overlay");

function playGame(playerSelection) {
  const computerChoice = getComputerChoice();
  const playerChoice = playerSelection;

  if (computerChoice === "rock" && playerChoice === "paper") {
    result.innerText = "You won!";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    result.innerText = "You lose!";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    result.innerText = "You won!";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    result.innerText = "You lost!";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    result.innerText = "You won!";
    playerScore++;
    userScore.innerText = `${playerScore}`;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    result.innerText = "You lose!";
    computerScore++;
    compScore.innerText = `${computerScore}`;
  } else if (computerChoice === playerChoice) {
    result.innerText = "Tie!";
  };

  // Change color depends on the computer choice
  if (computerChoice === "rock") {
    computerRock.style.color = "#3C6255";
    computerPaper.style.color = "#A6BB8D";
    computerScissors.style.color = "#A6BB8D";
  } else if (computerChoice === "paper") {
    computerPaper.style.color = "#3C6255";
    computerRock.style.color = "#A6BB8D";
    computerScissors.style.color = "#A6BB8D";
  } else if (computerChoice === "scissors") {
    computerScissors.style.color = "#3C6255";
    computerPaper.style.color = "#A6BB8D";
    computerRock.style.color = "#A6BB8D";
  };

  // End game
  if (playerScore === 3 ) {
    text.innerText = "Congratulations! You won!";
    pop.classList.add("active");
    box.classList.add("active");
  } else if (computerScore === 3) {
    text.innerText = "You lose! Try again!";
    pop.classList.add("active");
    box.classList.add("active");
  };
};

// Restart game
const restart = document.querySelector(".restart");

restart.addEventListener("click", function() {
  // window.location.reload();
  playerScore = 0;
  computerScore = 0;
  userScore.innerText = 0;
  compScore.innerText = 0;
  result.innerText = "";
  computerRock.style.color = "#3C6255";
  computerPaper.style.color = "#3C6255";
  computerScissors.style.color = "#3C6255";
  userRock.style.color = "#3C6255";
  userPaper.style.color = "#3C6255";
  userScissors.style.color = "#3C6255";
  pop.classList.remove("active");
  box.classList.remove("active");
});


// Footer Copyright Date
date = new Date();
year = date.getFullYear();
document.getElementById("current-year").innerHTML = year;


// Scroll Duration for Play button
$(document).ready(function(){
  // Add smooth scrolling to the class="play"
  $('.play').on('click', function(event) {

    // this.hash reads the href attribute of this, and gets the part of the URL beginning with #
    // this.hash = HTMLAnchorElement.hash
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }; // End if
  });
});
