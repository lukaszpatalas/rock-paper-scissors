function computerPlay() {
    const handGesture = ["rock", "paper", "scissors"];
    return handGesture[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

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