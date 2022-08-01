let playerScore = 0;
let computerScore = 0;


function game() {

    const buttons = document.querySelectorAll(".player-select > .game-select");

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 5 && computerScore < 5) {
                playRound(playerSelect(button), computerSelect());
            }
        });
    });
}

function computerSelect() {
    const handGesture = ["jet", "gun", "bomb"];
    const computerChoice = handGesture[Math.floor(Math.random() * 3)];

    const computerIcons = document.querySelectorAll(".enemy-select .choice-icon");

    // Try alter this code with Node.parentNode

/*     computerIcons.forEach((icon) => {
        icon.style.color = "#dadada";
        icon.style.borderColor = "#747474";
        if (icon.classList.contains("fa-jet-fighter")) {
            icon.style.color = "#ff652f";
            icon.style.borderColor = "#ff652f";
        } else if (icon.classList.contains("fa-gun")) {
            icon.style.color = "#ffe400";
            icon.style.borderColor = "#ffe400";
        } else if (icon.classList.contains("fa-bomb")) {
            icon.style.color = "#14a76c";
            icon.style.borderColor = "#14a76c";
        }
    }) */
    if (computerChoice === "jet") {
        computerIcons[0].style.color = "#ff652f";
        computerIcons[0].style.borderColor = "#ff652f";
        computerIcons[1].style.color = "#dadada";
        computerIcons[1].style.borderColor = "#747474";
        computerIcons[2].style.color = "#dadada";
        computerIcons[2].style.borderColor = "#747474";
    } else if (computerChoice === "gun") {
        computerIcons[0].style.color = "#dadada";
        computerIcons[0].style.borderColor = "#747474";
        computerIcons[1].style.color = "#ffe400";
        computerIcons[1].style.borderColor = "#ffe400";
        computerIcons[2].style.color = "#dadada";
        computerIcons[2].style.borderColor = "#747474";
    } else {
        computerIcons[0].style.color = "#dadada";
        computerIcons[0].style.borderColor = "#747474";
        computerIcons[1].style.color = "#dadada";
        computerIcons[1].style.borderColor = "#747474";
        computerIcons[2].style.color = "#14a76c";
        computerIcons[2].style.borderColor = "#14a76c";
    }
    return computerChoice;
}

function playerSelect(button) {
    const playerIcons = document.querySelectorAll(".player-select .choice-icon");
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
    return button.id;
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