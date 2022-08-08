let playerScore = 0;
let computerScore = 0;

function game() {
    const buttons = document.querySelectorAll(".player-select > div.game-select");
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (playerScore < 3 && computerScore < 3) {
                playRound(playerSelect(button), computerSelect());
            }
        });
    });
}

function computerSelect() {
    const handGesture = ["jet", "gun", "bomb"];
    const computerChoice = handGesture[Math.floor(Math.random() * 3)];
    const computerIcons = document.querySelectorAll(".enemy-select .choice-icon");

    computerIcons.forEach((icon) => {
        if (icon.parentNode.classList.contains(computerChoice)) {
            if (computerChoice === "jet") {
                icon.style.color = "#ff652f";
                icon.style.borderColor = "#ff652f";
            } else if (computerChoice === "gun") {
                icon.style.color = "#ffe400";
                icon.style.borderColor = "#ffe400";
            } else if (computerChoice === "bomb") {
                icon.style.color = "#14a76c";
                icon.style.borderColor = "#14a76c";
            }
        } else if (!icon.parentNode.classList.contains(computerChoice)) {
            icon.style.color = "#dadada";
            icon.style.borderColor = "#747474";
        }
    })
    return computerChoice;
}

function playerSelect(button) {
    const playerIcons = document.querySelectorAll(".player-select .choice-icon");
    const playerChoice = button.id;

    playerIcons.forEach((icon) => {
        if (icon.parentNode.classList.contains(playerChoice)) {
            if (playerChoice === "jet") {
                icon.style.color = "#ff652f";
                icon.style.borderColor = "#ff652f";
            } else if (playerChoice === "gun") {
                icon.style.color = "#ffe400";
                icon.style.borderColor = "#ffe400";
            } else if (playerChoice === "bomb") {
                icon.style.color = "#14a76c";
                icon.style.borderColor = "#14a76c";
            }
        } else if (!icon.parentNode.classList.contains(playerChoice)) {
            icon.style.color = "#dadada";
            icon.style.borderColor = "#747474";
        }
    })
    return button.id;
}

function playRound(playerSelection, computerSelection) {
    const playerResult = document.querySelector("#player-score");
    const computerResult = document.querySelector("#computer-score");
    const roundInfo = document.querySelector("#round-info");
    const roundMessage = document.querySelector("#round-message");
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    let computerChoice = computerSelection[0].toUpperCase() + computerSelection.slice(1);

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

    // Extra check as scores can be updated in previous ifs
    if (playerScore === 3 || computerScore === 3) {
        roundInfo.textContent = declareWinner(playerScore, computerScore);
        repeatGame();
    }
}

function repeatGame() {
    const button = document.createElement('button');
    const main = document.querySelector('main');
    main.appendChild(button);
    button.classList.add('repeat');
    button.textContent = 'Repeat the game?';

    button.addEventListener('mousedown', () => {
        button.classList.add('yellow-border');
    })

    button.addEventListener('mouseup', () => {
        setTimeout(() => {
            window.location.reload();
        }, "200")
    })

    button.addEventListener('mouseout', () => {
        button.classList.remove('yellow-border');
    })
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