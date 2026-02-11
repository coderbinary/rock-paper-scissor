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
    console.log()
  }
}