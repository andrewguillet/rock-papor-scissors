function playGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const resultMessage = document.getElementById("resultMessage");

  if (playerChoice === computerChoice) {
    resultMessage.textContent = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
