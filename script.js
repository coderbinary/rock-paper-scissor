let humanScore = 0;
let computerScore = 0;
let humanChoice;
let computerChoice;

function getComputerChoice(){
  let choicenum = Math.floor(Math.random() * 3) + 1;
  if(choicenum === 1){
    return "rock";
  }
  else if(choicenum === 2){
    return "paper";
  }
  else {
    return "scissor";
  }
}

function getHumanChoice(){
  let choice = prompt("Enter you choice:");
  return choice;
}

function playRound(){
  humanChoice = (getHumanChoice()).toLowerCase();
  computerChoice = getComputerChoice();
  if(humanChoice === "rock" && computerChoice === "paper"){
    console.log("You lose! You chose Rock and Computer chose Paper. Paper beats Rock");
    computerScore++;
  }
  else if(humanChoice === "rock" && computerChoice === "scissor"){
    console.log("You win! You chose Rock and Computer chose Scissor. Rock beats Scissor");
    humanScore++;
  }
  else if(humanChoice === "paper" && computerChoice === "rock"){
    console.log("You win! You chose Paper and Computer chose Rock. Paper beats Rock");
    humanScore++;
  }
  else if(humanChoice === "paper" && computerChoice === "scissor"){
    console.log("You lose! You chose Paper and Computer chose Scissor. Scissor beats Paper");
    computerScore++;
  }
  else if(humanChoice === "scissor" && computerChoice === "rock"){
    console.log("You lose! You chose Scissor and Computer chose Rock. Rock beats Scissor");
    computerScore++;
  }
  else if(humanChoice === "scissor" && computerChoice === "paper"){
    console.log("You win! You chose Scissor and Computer chose Paper. Scissor beats Paper");
    humanScore++;
  }
  else{
    console.log("Draw!");
    if(humanChoice === "scissor" && computerChoice === "scissor"){
      console.log("Both chose Scissor");
    }
    else if(humanChoice === "rock" && computerChoice === "rock"){
      console.log("Both chose Rock");
    }
    else{
      console.log("Both chose Paper");
    }
  }
}

function displayScore(){
  console.log("---- Score ----");
  console.log("Computer: ",computerScore);
  console.log("User: ",humanScore);
}