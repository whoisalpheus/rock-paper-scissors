
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    console.log(choice[Math.floor(Math.random() * choice.length)]);
} 
// console.log(getComputerChoice()); // returning the index of the array instead of str???

// Get playerSelection input
// const input = prompt('Rock, Paper, or Scissors?');

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return 'It is a tie!';
    } else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return 'You win!';
    } else {
            return 'You lose!';
    }
}

const playerSelection = 'rock'; //input.toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// LOSES....not needed bc we alreadt have tied and win!
// if (
//     (playerSelection == 'rock' && computerSelection == 'paper') || 
//     (playerSelection == 'paper' && computerSelection == 'scissors') ||
//     (playerSelection == 'scissors' && computerSelection == 'rock'))
