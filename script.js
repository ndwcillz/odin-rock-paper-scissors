function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;

    if (choice == 1) {
        return "rock";
    } else if (choice == 2) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock/paper/scissors):");
    return choice;
}

let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {
    let humanChoiceLowerCase = humanChoice.toLowerCase();

    if (humanChoiceLowerCase == computerChoice) {
        console.log("You tied! Both of you selected " + humanChoice + ".");
    } else if (humanChoiceLowerCase == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoiceLowerCase == "scissors") {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    } else {
        if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
    }
    console.log("Updated Score: Human: " + humanScore + ", Computer: " + computerScore);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You win the game! You scored " + humanScore + (humanScore == 1 ? " point" : " points") + " while the computer scored " + computerScore + (computerScore == 1 ? " point." : " points."));
    } else if (computerScore > humanScore) {
        console.log("You lost the game! You scored " + humanScore + (humanScore == 1 ? " point" : " points") + " while the computer scored " + computerScore + (computerScore == 1 ? " point." : " points."));
    } else {
        console.log("You tied the game! Both you and the computer scored " + humanScore + (humanScore == 1 ? " point." : " points."));
    }
}

playGame();
