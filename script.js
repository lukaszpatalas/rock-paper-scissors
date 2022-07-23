let playerScore = 0;
let computerScore = 0;

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                playRound(button.id, computerSelect());
            }
        });
    });
}

function computerSelect() {
    const handGesture = ["rock", "paper", "scissors"];
    return handGesture[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player choice: ${playerSelection}. Computer choice: ${computerSelection}.`)
    if (playerSelection === computerSelection) {
        console.log("A draw!");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        console.log("You win!");
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        console.log("You lose!");
    }
    if (playerScore === 5 || computerScore === 5) {
        console.log(declareWinner(playerScore, computerScore));
    }
    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);
}

function declareWinner(playerScore, computerScore) {
    let result = '';
    if (playerScore > computerScore) {
        result += `The winner is YOU.`;
        return result;
    } else {
        result += `The winner is COMPUTER.`;
        return result;
    }
}

game();