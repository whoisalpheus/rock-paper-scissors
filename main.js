// Put this in a Scoreboard???
let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultsDiv = document.querySelector('#results');
const compPick = document.querySelector('#comp-pick');
const scoreBoard = document.querySelector('#score');

// Outcome:
const p = document.createElement('p');

// Computer selection of rock, paper, scissor
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choice.length)
    return choice[randomNum];
} 

function pressButton(e) {
    // p.innerText = `You pressed ${e.target.id}!`;
    // resultsDiv.appendChild(p);
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    getWinner(playerSelection, computerSelection);
}

// function playRound(e) {
//     const computerSelection = getComputerChoice();
//     const playerSelection = e.target.id; // Is e.target.id working???
//     const winner = getWinner(playerSelection, computerSelection);
//     tallyWinner(winner, computerSelection);
// }

// This compares playerSelection and computerSelection
// Result of each match up: rock vs paper, scissor vs rock, etc
function getWinner(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            playerScore++;
            // return 'player';
            p.innerText = 'You win!';
            resultsDiv.appendChild(p);

    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) 
        {
            compScore++;
            // return 'computer';
            p.innerText = 'You lose!';
            resultsDiv.appendChild(p);
    } else {
        p.innerText = 'It is a tie!';
        resultsDiv.appendChild(p);
    }
} 

// // This displays who wins each round
// function tallyWinner(winner, computerSelection) { 
//     if (winner == 'player') {
//         // playerScore++;
//         const p = document.createElement('p');
//         p.innerText = 'You win!';
//         resultsDiv.appendChild(p);
//         // return 'You beat the computer!';
//     } else if (winner == 'computer') {
//         // compScore++;
//         const p = document.createElement('p');
//         p.innerText = 'You lose!';
//         resultsDiv.appendChild(p);
//         // return 'The computer beat you, dude!';
//     } else {
//         const p = document.createElement('p');
//         p.innerText = 'It is a tie!';
//         resultsDiv.appendChild(p);
//         // return 'It is a tie with the computer.';
//     }    
// }

// UI

// Create three buttons for rock, paper, scissors

// Buttons
// Rock
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.setAttribute('id', 'rock');
container.appendChild(rockButton);

// Paper
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.setAttribute('id', 'paper');
container.appendChild(paperButton);

// Scissors
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.setAttribute('id', 'scissors');
container.appendChild(scissorsButton);

// Eventlisteners

rockButton.addEventListener('click', pressButton);
paperButton.addEventListener('click', pressButton);
scissorsButton.addEventListener('click', pressButton);

// How do I use forEach() instead???

// buttons.forEach(button => button.addEventListener('click', playRound));

// playGame() {
//     buttons.forEach((button) => 
//         button.addEventListener('click', () => {
//             const computerSelection = getComputerChoice();
//             const playerSelection = button.id;
//             playRound(playerSelection, computerSelection);
//         }) 
//     )
// } 
// playGame();





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