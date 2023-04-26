const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)
    console.log(choice[randomNum])
    return choice[randomNum];
} 

// Get playerSelection input
// const input = prompt('Rock, Paper, or Scissors?');

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if(
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'You win!';
    } else if(
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
        {
            return 'You lose!';
    }
}

const playerSelection = 'rock'; //input.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
