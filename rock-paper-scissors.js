let playerScore = 0;
let computerScore = 0;

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
            return 'Tie!';
        } else if (computerChoice == 'paper') {
            computerScore = computerScore + 1;
            return 'You lose! Paper beats rock.';
        } else if (computerChoice == 'scissors') {
            playerScore = playerScore + 1;
            return 'You win! Rock beats Scissors.';
        }

    } else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            playerScore = playerScore + 1;
            return 'You win! Paper beats rock.';
        } else if (computerChoice == 'paper') {
            return 'Tie!';
        } else if (computerChoice == 'scissors') {
            computerScore = computerScore + 1;
            return 'You lose! Scissors beat Paper.';
        }

    } else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            computerScore = computerScore + 1;
            return 'You lose! Rock beats scissors.';
        } else if (computerChoice == 'paper') {
            playerScore = playerScore + 1;
            return 'You win! Scissors beat Paper.';
        } else if (computerChoice == 'scissors') {
            return 'Tie!';
        }
    }
}

function game(rounds) {
    
    for (let i = 0; i < rounds; i++) {
        playerSelection = prompt('Enter your choice.');
        computerSelection = getComputerChoice();
        console.log(`Round ${i + 1} of ${rounds}`);
        console.log(playRound(playerSelection, computerSelection));
        if (i < rounds - 1) {
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
    
    console.log('Final Score:');
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
}

game(5);