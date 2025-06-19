function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice() {
    let choices = prompt("Enter your choice (Rock, Paper, Scissors):");
    if (choices) {
        choices = choices.trim().toLowerCase();
        if (choices === 'rock' || choices === 'paper' || choices === 'scissors') {
            return choices.charAt(0).toUpperCase() + choices.slice(1);
        } else {
            alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
            return getHumanChoice(); // Retry
        }
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${i + 1}:`);
        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer wins the game.");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();