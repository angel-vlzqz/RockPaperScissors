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
  return prompt("Rock, paper, or scissors?").toLowerCase();
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
          return "You lose! Paper beats rock.";
        } else {
          return "You win! Rock beats scissors.";
        }
      } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
          return "You win! Paper beats rock.";
        } else {
          return "You lose! Scissors beats paper.";
        }
      } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
          return "You lose! Rock beats scissors.";
        } else {
          return "You win! Scissors beats paper.";
        }
      }
    }
  }
}

game();
