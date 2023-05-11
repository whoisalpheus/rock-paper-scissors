// let playerScore = 0;
// let compScore = 0;
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultsDiv = document.querySelector('#results');

// Computer selection of rock, paper, scissor
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * choice.length)
    return choice[randomNum];
}

// Result of each match up: rock vs paper, scissor vs rock, etc
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const p = document.createElement('p');
        p.innerText = 'It is a tie!';
        resultsDiv.appendChild(p);

    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            // playerScore++;
            p.innerText = 'You win!';
            resultsDiv.appendChild(p);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
        {
            // compScore++;
            p.innerText = 'You lose!';
            resultsDiv.appendChild(p);
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


// Add a div for displaying results
// const results = document.createElement('div');
// results.setAttribute('id', 'results');
// container.appendChild(results);

// Buttons
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.setAttribute('id', 'rockBtn');
// rockButton.classList.add('btn');
container.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.setAttribute('id', 'paperBtn');
// paperButton.classList.add('btn');
container.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.setAttribute('id', 'scissorsBtn');
// scissorsButton.classList.add('btn');
container.appendChild(scissorsButton);

// let computerSelection = getComputerChoice();
// let playerSelection = button.id;

// Eventlisteners

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.id;
        playRound(playerSelection, computerSelection);
    });
});

// btn.forEach((button) => {
//     button.addEventListener('click', playRound(playerSelection, computerSelection) => {
//         let playerSelection = button.id;
//         // let computerSelection = getComputerChoice();
//         // console.log(playRound(playerSelection, computerSelection));
//     });
// });

// console.log(btn.forEach(button => button.addEventListener('click', playRound)));
