function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Select rock, paper, or scissors.');
    if (choice.toLowerCase() === 'paper') {
        return 'paper';
    } else if (choice.toLowerCase() === 'rock') {
        return 'rock';
    } else if (choice.toLowerCase() === 'scissors') {
        return 'scissors';
    } else {
        throw new Error('That was not an option, silly.')
    }
}

console.log(getHumanChoice());