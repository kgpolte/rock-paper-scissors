function getComputerChoice() {

    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'Rock';
    } else if (randomNum === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            return 'tie';
        } else if (computerChoice == 'paper') {
            return 'loss';
        } else if (computerChoice == 'scissors') {
            return 'win';
        }

    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            return 'win';
        } else if (computerChoice == 'paper') {
            return 'tie';
        } else if (computerChoice == 'scissors') {
            return 'loss';
        }

    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            return 'loss';
        } else if (computerChoice == 'paper') {
            return 'win';
        } else if (computerChoice == 'scissors') {
            return 'tie';
        }
    } else {
        return 'invalid';
    }
}

function playGame(maxPoints) {
    
}

playGame(5);