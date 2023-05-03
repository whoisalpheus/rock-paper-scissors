let playerScore = 0;
let compScore = 0;

// Computer selection of rock, paper, scissor
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choice.length)
    return choice[randomNum];
}

// Result of each match up: rock vs paper, scissor vs rock, etc
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 'You win!';
            // playerScore++;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
        {
            return 'You lose!';
            // compScore++;
    }
}

// Play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        // Playerselection input
        const playerSelection = prompt('Choose', 'Rock, Paper, Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
} console.log(game());

function scoreCount() {
    // Tally up score
    // Need to tie this with playRound()
    const tally = playRound(); 
    if (tally == 'You win!') {
        playerScore++;
        return 'You beat the computer!';
    } else if (tally == 'You lose!') {
        compScore++;
        return 'The computer beat you, dude!';
    } else {
        return 'It is a tie with the computer.';
    }
} scoreCount();
