let playerScore = 0;
let computerScore = 0;


function game() {

    const buttons = document.querySelectorAll(".player-select > .game-select");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerIcons = document.querySelectorAll(".player-select .choice-icon");
            if (playerScore < 5 && computerScore < 5) {
                if (button.classList.contains("jet")) {
                    playerIcons[0].style.color = "#ff652f";
                    playerIcons[0].style.borderColor = "#ff652f";
                    playerIcons[1].style.color = "#dadada";
                    playerIcons[1].style.borderColor = "#747474";
                    playerIcons[2].style.color = "#dadada";
                    playerIcons[2].style.borderColor = "#747474";
                } else if (button.classList.contains("gun")) {
                    playerIcons[0].style.color = "#dadada";
                    playerIcons[0].style.borderColor = "#747474";
                    playerIcons[1].style.color = "#ffe400";
                    playerIcons[1].style.borderColor = "#ffe400";
                    playerIcons[2].style.color = "#dadada";
                    playerIcons[2].style.borderColor = "#747474";
                } else {
                    playerIcons[0].style.color = "#dadada";
                    playerIcons[0].style.borderColor = "#747474";
                    playerIcons[1].style.color = "#dadada";
                    playerIcons[1].style.borderColor = "#747474";
                    playerIcons[2].style.color = "#14a76c";
                    playerIcons[2].style.borderColor = "#14a76c";
                }
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
    const playerResult = document.querySelector("#player-score");
    const computerResult = document.querySelector("#computer-score");
    const roundInfo = document.querySelector("#round-info");
    const roundMessage = document.querySelector("#round-message")

    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection[0].toUpperCase() + computerSelection.slice(1);

    console.log(`Player choice: ${playerChoice}. Computer choice: ${computerChoice}.`)

    if (playerSelection === computerSelection) {
        roundInfo.textContent = "A draw!";
        roundMessage.textContent = `${playerChoice} ties ${computerChoice}`;
    } else if ((playerSelection === "jet" && computerSelection === "gun") ||
        (playerSelection === "bomb" && computerSelection === "jet") ||
        (playerSelection === "gun" && computerSelection === "bomb")) {
        playerScore++;
        playerResult.textContent = playerScore;
        roundInfo.textContent = "You win!";
        roundMessage.textContent = `${playerChoice} beats ${computerChoice}`;
    } else if ((playerSelection === "gun" && computerSelection === "jet") ||
        (playerSelection === "jet" && computerSelection === "bomb") ||
        (playerSelection === "bomb" && computerSelection === "gun")) {
        computerScore++;
        computerResult.textContent = computerScore;
        roundInfo.textContent = "You lose!";
        roundMessage.textContent = `${computerChoice} beats ${playerChoice}`;
    }
    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`);

    // Extra check as scores can be updated in previous ifs
    if (playerScore === 5 || computerScore === 5) {
        roundInfo.textContent = declareWinner(playerScore, computerScore);
        console.log(declareWinner(playerScore, computerScore));
    }
}

function declareWinner(playerScore, computerScore) {
    let result = '';
    if (playerScore > computerScore) {
        result += `Well done! The winner is you.`;
        return result;
    } else if (playerScore === computerScore) {
        result += `There is no winner.`;
        return result;
    } else {
        result += `My condolence. The winner is computer.`;
        return result;
    }
}

game();