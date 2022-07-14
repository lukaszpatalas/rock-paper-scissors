function computerPlay() {
    const handGesture = ["rock", "paper", "scissors"];
    return handGesture[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();

    if (playerSelect === "rock") {
        if (computerSelect === "rock") {
            return "A draw!";
        } else if (computerSelect === "paper") {
            return "You lose! Paper beats Rock.";
        } else if (computerSelect === "scissors") {
            return "You win! Rock beats Scissors.";
        }
    } else if (playerSelect === "paper") {
        if (computerSelect === "rock") {
            return "You win! Paper beats Rock.";
        } else if (computerSelect === "paper") {
            return "A draw!";
        } else if (computerSelect === "scissors") {
            return "You lose! Scissors beats Paper.";
        }
    } else if (playerSelect === "scissors") {
        if (computerSelect === "rock") {
            return "You lose! Rock beats Scissors.";
        } else if (computerSelect === "paper") {
            return "You win! Scissors beats Paper.";
        } else if (computerSelect === "scissors") {
            return "A draw!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("draw")) {
            console.log(result);
        } else if (result.includes("win")) {
            playerScore++;
            console.log(result);
        } else if (result.includes("lose")) {
            computerScore++;
            console.log(result);
        }
    }

    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
}

game();