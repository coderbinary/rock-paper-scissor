let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

const result = document.querySelector(".result-status");
const game = document.querySelector(".game");
const comp = document.querySelector(".computer-score");
const hum = document.querySelector(".human-score");
const choices = document.querySelector(".choices");

comp.textContent = computerScore;
hum.textContent = humanScore;

// ---- reset button ----
const resetButton = document.createElement("button");
resetButton.textContent = "Play Again";
resetButton.classList.add("reset-button");

resetButton.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  comp.textContent = computerScore;
  hum.textContent = humanScore;
  result.textContent = "Make Your Choice";
  resetButton.replaceWith(choices);
});

// ---- event delegation ONLY on choices ----
choices.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  humanChoice = button.id;
  playRound();
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound() {
  computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    result.textContent = `Both chose ${humanChoice}`;
    return;
  }

  const win =
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper");

  if (win) {
    humanScore++;
    hum.textContent = humanScore;
    result.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You win!`;
  } else {
    computerScore++;
    comp.textContent = computerScore;
    result.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. Computer wins!`;
  }

  if (humanScore === 5) {
    result.textContent = "You Won!";
    choices.replaceWith(resetButton);
  } else if (computerScore === 5) {
    result.textContent = "Computer Won!";
    choices.replaceWith(resetButton);
  }
}
