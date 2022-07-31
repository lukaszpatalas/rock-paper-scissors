let playerScore = 0;
let computerScore = 0;

function game() {
    const buttons = document.querySelectorAll(".player-select > .game-select");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                playRound(button.id, computerSelect());
            }
        });
    });
}

function computerSelect() {
    const handGesture = ["jet", "gun", "bomb"];
    return handGesture[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    console.log(`Player choice: ${playerChoice}. Computer choice: ${computerChoice}.`)
    if (playerSelection === computerSelection) {
        console.log("A draw!");
        console.log(`${playerChoice} ties ${computerChoice}`)
    } else if ((playerSelection === "jet" && computerSelection === "gun") ||
        (playerSelection === "bomb" && computerSelection === "jet") ||
        (playerSelection === "gun" && computerSelection === "bomb")) {
        playerScore++;
        console.log("You win!");
        console.log(`${playerChoice} beats ${computerChoice}`)
    } else if ((playerSelection === "gun" && computerSelection === "jet") ||
        (playerSelection === "jet" && computerSelection === "bomb") ||
        (playerSelection === "bomb" && computerSelection === "gun")) {
        computerScore++;
        console.log("You lose!");
        console.log(`${computerChoice} beats ${playerChoice}`)
    }
    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);

    // Extra check as scores can be updated in previous ifs
    if (playerScore === 5 || computerScore === 5) {
        console.log(declareWinner(playerScore, computerScore));
    }
}

function declareWinner(playerScore, computerScore) {
    let result = '';
    if (playerScore > computerScore) {
        result += `The winner is YOU.`;
        return result;
    } else if (playerScore === computerScore) {
        result += `There is no winner.`;
        return result;
    } else {
        result += `The winner is COMPUTER.`;
        return result;
    }
}

game();