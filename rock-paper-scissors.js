function setupGame() {
    for (button of choiceButtons) {
        button.addEventListener('click', e => {
            playRound(e.target.id);
        });
    }

    updateDisplay();
}

function getResults(playerChoice, computerChoice) {

    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') return 'tie';
        else if (computerChoice == 'paper') return 'loss';
        else if (computerChoice == 'scissors') return 'win';
    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') return 'win';
        else if (computerChoice == 'paper') return 'tie';
        else if (computerChoice == 'scissors') return 'loss';
    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') return 'loss';
        else if (computerChoice == 'paper') return 'win';
        else if (computerChoice == 'scissors') return 'tie';
    } else return 'invalid player choice';
}

function restart() {
    location.reload();
}

function endGame() {

    roundHeader.textContent = "Game Over!";
    scoreHeader.textContent = "Final Score:";

    for (button of choiceButtons) {
        button.remove();
    }

    flavor.textContent = 'Play Again?';
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart';
    restartBtn.classList.add('restart');
    restartBtn.onclick = restart;
    buttonContainer.appendChild(restartBtn);
}

function updateDisplay() {
    
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    if (playerScore >= maxScore || computerScore >= maxScore) {
        endGame();
        return;
    }

    roundHeader.textContent = `Round ${roundNumber}`;
}

function playRound(playerChoice) {

    const computerChoice = getComputerChoice();
    const result = getResults(playerChoice, computerChoice);
    if (result == 'win') playerScore++;
    else if (result == 'loss') computerScore++;

    roundNumber++;
    updateDisplay();
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return 'rock';
    else if (randomNum === 1) return 'paper';
    else return 'scissors';
}

// DOM Elements
const roundHeader = document.getElementById('round-header');
const scoreHeader = document.querySelector('#scoreboard h2');
const playerScoreDisplay = document.querySelector('.num.player');
const computerScoreDisplay = document.querySelector('.num.computer');
const choiceButtons = document.querySelectorAll('.choice');
const buttonContainer = document.getElementById('choice-buttons');
const flavor = document.querySelector('.flavor');

// Game variables
const maxScore = 5;
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

setupGame();