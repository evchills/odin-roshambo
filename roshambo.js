var computerScore = 0;
var humanScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Select rock, paper, or scissors.');
    choice = choice.toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        throw new Error('Not a valid option.');
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie.");
    } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'scissors' && humanChoice === 'paper') ||
        (computerChoice === 'paper' && humanChoice === 'rock')
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
    return { humanScore, computerScore };
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        const scores = playRound(computerSelection, humanSelection);
        console.log(`Human: ${scores.humanScore}, Computer: ${scores.computerScore}`);
    }
    if (humanScore < computerScore) {
        console.log('The computer wins the game!');
    } else if (humanScore > computerScore) {
        console.log('You\'ve beaten the computer!');
    } else {
        console.log('The game ended in a tie.');
    }
}

playGame();