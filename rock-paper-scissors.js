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

function playGame(rounds) {
    
    let playerScore = 0;
    let computerScore = 0;

    let i = 0;
    while (i < rounds) {
        
        console.log(`Round ${i + 1} of ${rounds}`);
        playerSelection = prompt('Rock, paper, scissors, shoot!');
        computerSelection = getComputerChoice();
        const gameResult = playRound(playerSelection, computerSelection);
        let increment = false;

        if (gameResult == 'tie') {
            console.log('Tie!');
        } else if (gameResult == 'win') {
            playerScore = playerScore + 1;
            increment = true;
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        } else if (gameResult == 'loss') {
            computerScore = computerScore + 1;
            increment = true;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        } else {
            console.log('Invalid entry! Try again.');
        }

        if (increment == true) {
            i++;
        }

        if (i < rounds) {
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
    
    console.log('Final Score:'.toUpperCase());
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('Player wins!');
    } else if (computerScore > playerScore) {
        console.log('Computer wins!');
    } else {
        console.log('Tie game!');
    }
}

playGame(5);