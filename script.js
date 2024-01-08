function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "lose";
    } else {
      result = "win";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "win";
    } else {
      result = "lose";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "lose";
    } else {
      result = "win";
    }
  }
  return result;
}
