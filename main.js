let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
const resultsDiv = document.querySelector('#results');

// Computer selection of rock, paper, scissor
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomNum = Math.floor(Math.random() * choice.length)
    return choice[randomNum];
}


function playRound(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.id;
    const winner = getWinner(playerSelection, computerSelection);
    // tallyWinner(winner, computerSelection);
}

// Result of each match up: rock vs paper, scissor vs rock, etc
function getWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        const p = document.createElement('p');
        p.innerText = 'It is a tie!';
        resultsDiv.appendChild(p);

    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
            playerScore++;
            const p = document.createElement('p');
            p.innerText = 'You win!';
            resultsDiv.appendChild(p);

    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Paper') || 
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Rock'))
    {
            compScore++;
            const p = document.createElement('p');
            p.innerText = 'You lose!';
            resultsDiv.appendChild(p);
    }
}

// tallyWinner(winner, computerSelection) { 
//     if (playerScore > compScore) {
//         return 'You beat the computer!';
//     } else if (playerScore < compScore) {
//         return 'The computer beat you, dude!';
//     } else {
//         return 'It is a tie with the computer.';
//     }    
// }

// UI

// Create three buttons for Rock, Paper, Scissors

// Buttons
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.setAttribute('id', 'rock');
container.appendChild(rockButton);

const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.setAttribute('id', 'paper');
container.appendChild(paperButton);

const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.setAttribute('id', 'scissors');
container.appendChild(scissorsButton);

// Eventlisteners

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


buttons.forEach(button => button.addEventListener('click', playRound));




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