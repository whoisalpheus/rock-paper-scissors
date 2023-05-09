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
            playerScore++;
            return 'You win!';
            
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
        {
            compScore++;
            return 'You lose!';
            
    }
}

// Play 5 rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         // Playerselection input
//         const playerSelection = prompt('Choose', 'Rock, Paper, Scissors').toLowerCase();
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//     }
    
//     if (playerScore > compScore) {
//         // playerScore++;
//         return 'You beat the computer!';
//     } else if (playerScore < compScore) {
//         // compScore++;
//         return 'The computer beat you, dude!';
//     } else {
//         return 'It is a tie with the computer.';
//     }
// } console.log(game());

// UI

// Create three buttons for Rock, Paper, Scissors
const container = document.querySelector('#container');

const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.setAttribute('id', 'rockBtn');
rockButton.classList.add('btn');
container.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.setAttribute('id', 'paperBtn');
paperButton.classList.add('btn');
container.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.setAttribute('id', 'scissorsBtn');
scissorsButton.classList.add('btn');
container.appendChild(scissorsButton);

const btn = document.querySelectorAll('button');

// Eventlisteners
btn.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    });
});
