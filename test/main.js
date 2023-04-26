const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    console.log(compChoice)
    return compChoice
} 

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied!'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied!'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won!'
    }
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))
