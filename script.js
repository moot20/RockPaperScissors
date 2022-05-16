const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const para = document.querySelector('.para');
const reset = document.querySelector('.reset');
const buttons = document.querySelectorAll('.btn');

let playerSelection;
let computerSelection;
let result;
let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
  let names = [
    'Rock',
    'Paper',
    'Scissors'
  ];
  return names[Math.floor(Math.random() * names.length)];
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (scorePlayer >= 5 || scoreComputer >= 5) {
      return;
    } else {
      let playerSelection = button.dataset.button;
      let computerSelection = computerPlay();
      if (playRound(playerSelection,computerSelection) == 'win' && scorePlayer == 4) {
        scorePlayer += 1;
        playerScore.textContent = scorePlayer;
        para.textContent = 'You are the winner! The final result is...';
      } else if (playRound(playerSelection,computerSelection) == 'loose' && scoreComputer == 4) {
        scoreComputer += 1;
        computerScore.textContent = scoreComputer;
        para.textContent = 'You are the loser! The final result is...';
      } else if (playRound(playerSelection,computerSelection) == 'win') {
        scorePlayer += 1;
        playerScore.textContent = scorePlayer;
        para.textContent = 'You win! The result is...';
      } else if (playRound(playerSelection,computerSelection) == 'loose') {
        scoreComputer += 1;
        computerScore.textContent = scoreComputer;
        para.textContent = 'You loose! The result is...';
      } else {
        para.textContent = 'It is a Tie! The result is...';
      }    
    }
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result = "draw";
  } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || (playerSelection == "Paper" && computerSelection == "Rock") || (playerSelection == "Scissors" && computerSelection == "Paper")) {
    result = "win";
  } else if ((playerSelection == "Rock" && computerSelection == "Paper") || (playerSelection == "Paper" && computerSelection == "Scissors") || (playerSelection == "Scissors" && computerSelection == "Rock")) {
    result = "loose";
  } else {
    result = "invalid";
  } return result;
  }

reset.addEventListener('click', () => {
  para.textContent = '';
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  scorePlayer = 0;
  scoreComputer = 0;
});