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

