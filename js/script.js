let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const resultsDiv = document.getElementById('results');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    resultsDiv.textContent = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++;
  } else {
    resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  }

  scoreDiv.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

  if (playerScore === 5) {
    resultsDiv.textContent = 'You win the game!';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    resultsDiv.textContent = 'You lose the game!';
    playerScore = 0;
    computerScore = 0;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerSelection = button.id;
    playRound(playerSelection);
  });
});
