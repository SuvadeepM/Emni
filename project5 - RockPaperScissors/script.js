// Rock Paper Scissors Game
const choices = ["Rock", "Paper", "Scissors"];

// Function to get a random choice for the computer
function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play the game
function playGame(playerChoice) {
    const computerChoice = getRandomChoice();
    let resultMessage = `You chose ${playerChoice}. Computer chose ${computerChoice}. `;

    if (playerChoice === computerChoice) {
        resultMessage += "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        resultMessage += "You win!";
    } else {
        resultMessage += "Computer wins!";
    }

    console.log(resultMessage);
}

// Example Usage:
const playerChoice = prompt("Enter Rock, Paper, or Scissors: ");
if (choices.includes(playerChoice)) {
    playGame(playerChoice);
} else {
    console.log("Invalid choice. Please enter Rock, Paper, or Scissors.");
}
