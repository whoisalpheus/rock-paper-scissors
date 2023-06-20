const container = document.querySelector('#container');

// UI

// Create three buttons for rock, paper, scissors

// Buttons
// Rock
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
rockButton.classList.add('btnChoice');
rockButton.setAttribute('id', 'rock');
container.appendChild(rockButton);

// Paper
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
paperButton.classList.add('btnChoice');
paperButton.setAttribute('id', 'paper');
container.appendChild(paperButton);

// Scissors
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';
scissorsButton.classList.add('btnChoice');
scissorsButton.setAttribute('id', 'scissors');
container.appendChild(scissorsButton);


// const btnContainer = document.querySelector('#btnContainer');
const buttons = document.querySelectorAll('.btnChoice');
const player = document.querySelector('#playerChoice');
const computer = document.querySelector('#compChoice');
const winner = document.querySelector('#whoWon');
const result = document.querySelector('#finalResult');
const scoreBoard = document.querySelector('#scoreContainer');
const scoreLabel = document.querySelectorAll('.scoreLabel');
const playerResult = document.querySelector('#playerResult');
const compResult = document.querySelector('#compResult');
let playerSelection;
let computerSelection;
let playerScore = 0;
let compScore = 0;

// Press button result
buttons.forEach(button => button.addEventListener('click', (e) => {
    // Player choice:
    playerSelection = e.target.textContent;
    player.textContent = `You chose: ${playerSelection}.`;
    // Computer choice:
    computerSelection = getComputerChoice();
    computer.textContent = `Computer chose: ${computerSelection}.`;
    // Results of who won/draw:
    winner.textContent = `${whoWon()}`;
    // Final result of game
    result.textContent = tallyWinner();
    scoreDisplay();
}))

// Computer selection of rock, paper, scissor
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randNum = Math.floor(Math.random() * choice.length);
    return choice[randNum];
}


// This compares playerSelection and computerSelection
// Result of each match up: rock vs paper, scissor vs rock, etc
function whoWon() {
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore++;
            return `You beat the computer! ${playerSelection} defeats ${computerSelection}.`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Paper') || 
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
            compScore++;
            return `The computer beat you! ${computerSelection} defeats ${playerSelection}.`;
    } else {
            return "It's a tie!";
    }
}

function tallyWinner() {
    if (playerScore == 5) {
        return 'You won the game! You reached 5 before the computer! Congrats!!!';
    } else if (compScore == 5) {
        return 'You lost the game! The computer reached 5 before you! Better luck next time.';
    }
}


// Eventlisteners

// rockButton.addEventListener('click', pressButton);
// paperButton.addEventListener('click', pressButton);
// scissorsButton.addEventListener('click', pressButton);


// // This displays who wins each round

function scoreDisplay() {
    document.getElementById('playerResult').value = playerScore;
    document.getElementById('compResult').value = compScore;
}

// Return to 0...start game over after scoring 5:     










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