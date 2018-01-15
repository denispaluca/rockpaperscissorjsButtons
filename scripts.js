const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');

let playerSelection = "";

function playRound(ps) {
  let playerSelection = ps;
  let possibilies = ["rock","paper","scissors"];
  let computerSelection = possibilies[Math.floor((Math.random() *3))];
  if(playerSelection == computerSelection)
  {
    div.textContent = "Draw!";
  }
  else if (playerSelection == "rock")
  {
    if (computerSelection == "scissors") {
      div.textContent = "You Win! Rock beats Scissors";
    }
    else
    {
      div.textContent = "You Lose! Paper beats Rock";
    }
  }
  else if (playerSelection == "paper")
  {
    if(computerSelection == "rock"){
      div.textContent = "You Win! Paper beats Rock";
    }
    else
    {
      div.textContent = "You Lose! Scissors beat Paper";
    }
  }
  else if (playerSelection == "scissors")
  {
    if(computerSelection == "rock"){
      div.textContent = "You Lose! Rock beats Scissors";
    }
    else
    {
      div.textContent = "You Win! Scissors beat Paper";
    }
  }
}

buttons.forEach(function(button) {
  button.addEventListener('click',() => {
    let ps = button.getAttribute('id');
    playRound(ps);
  });
});
