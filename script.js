/* Main function that starts application, contain information about scores and display output */

function start() {
    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(button.id);
        })
    })


    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = playerSelect();
        const computerSelection = computerSelect();
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

function computerSelect() {
    const handGesture = ["rock", "paper", "scissors"];
    return handGesture[Math.floor(Math.random() * 3)];
}

/* Ask user to choose hand gesture */

function playerSelect() {
    return prompt("Rock, paper or scissors?").toLowerCase();
}

/* Function generates messages depending on who win each round */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "A draw! ";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
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
