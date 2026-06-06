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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
