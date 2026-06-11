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



let humanScore = 0;
let computerScore = 0;  

function playRound(humanChoice, computerChoice) {
    let humanChoiceLowerCase = humanChoice.toLowerCase();

    if (humanChoiceLowerCase == computerChoice) {
        displayToDOM("You tied! Both of you selected " + humanChoice + ".");
    } else if (humanChoiceLowerCase == "rock") {
        if (computerChoice == "paper") {
            displayToDOM("You lose! Paper beats Rock.");
            computerScore++;
        } else {
            displayToDOM("You win! Rock beats Scissors.");
            humanScore++;
        }
    } else if (humanChoiceLowerCase == "scissors") {
        if (computerChoice == "rock") {
            displayToDOM("You lose! Rock beats Scissors.");
            computerScore++;
        } else {
            displayToDOM("You win! Scissors beats Paper.");
            humanScore++;
        }
    } else {
        if (computerChoice == "scissors") {
            displayToDOM("You lose! Scissors beats Paper.");
            computerScore++;
        } else {
            displayToDOM("You win! Paper beats Rock.");
            humanScore++;
        }
    }
    displayToDOM("Updated Score: Human: " + humanScore + ", Computer: " + computerScore);

    if (humanScore == 5) {
        displayToDOM("You win!");
    } else if (computerScore == 5) {
        displayToDOM("The computer wins!");
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));

const resultsContainer = document.createElement("div");

document.body.appendChild(resultsContainer);


function displayToDOM(message) {
    const outputElement = document.createElement("p");

    outputElement.textContent = message;

    resultsContainer.appendChild(outputElement);
}

/*
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

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock/paper/scissors):");
    return choice;
}
    
*/