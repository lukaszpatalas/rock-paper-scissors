/* Main function that starts, contain information about scores and display output */

function start() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = playerPlay();
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
    console.log(declareWinner(playerScore, computerScore));
}

/* Choose random hand gesture for computer */

function computerPlay() {
    const handGesture = ["rock", "paper", "scissors"];
    return handGesture[Math.floor(Math.random() * 3)];
}

/* Ask user to choose hand gesture */

function playerPlay() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

/* Function generates messages depenging on who win each round */

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();

    if (playerSelect === computerSelect) {
        return "A draw! ";
    } else if ((playerSelect === "rock" && computerSelect === "scissors") ||
        (playerSelect === "paper" && computerSelect === "rock") ||
        (playerSelect === "scissors" && computerSelect === "paper")) {
        return "You win!";
    } else if ((playerSelect === "rock" && computerSelect === "paper") ||
        (playerSelect === "paper" && computerSelect === "scissors") ||
        (playerSelect === "scissors" && computerSelect === "rock")) {
        return "You lose!";
    }
}

/* Function that generates result message based on who win */

function declareWinner(playerScore, computerScore) {
    let result = `Player score: ${playerScore}. Computer score: ${computerScore} `;
    if (playerScore > computerScore) {
        result += `The winner is YOU.`;
        return result;
    } else {
        result += `The winner is COMPUTER.`;
        return result;
    }
}

start();