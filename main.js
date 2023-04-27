let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choice.length)
    return choice[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'You win!';
            playerScore++;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
        {
            return 'You lose!';
            compScore++;
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose', 'Rock, Paper, Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log('1 ', playRound(playerSelection, computerSelection));
    }

    if (playerScore > compScore) {
        return 'You beat the computer!';
    } else if (playerScore < compScore) {
        return 'The computer beat you, dude!';
    } else {
        return 'It is a tie with the computer.';
    }
}

console.log('2 ', game());
