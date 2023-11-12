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

function getPlayerChoice() {
  return prompt("Choose rock, paper or scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "You lose! Paper beats rock.";
    } else {
      result = "You win! Rock beats scissors.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win! Paper beats rock.";
    } else {
      result = "You lose! Scissors beats paper.";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats scissors.";
    } else {
      result = "You win! Scissors beats paper.";
    }
  }
  alert(result);
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

game();
