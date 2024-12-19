function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for(let round = 1; round <= 5; round++) {
        console.log(`\nRound` + round);
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    
    console.log("\nGame Over!");
    if(humanScore === computerScore) {
        console.log("It's a tie!");
    } else if(humanScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("Computer wins the game!");
    }
    
    function playRound(humanChoice, computerChoice) {
        console.log("Your choice: " + humanChoice);
        console.log("Computer's choice: " + computerChoice);
        
        if(humanChoice === computerChoice.toLowerCase()) {
            console.log("Tie");
        } else if(humanChoice === "rock" && computerChoice === "Paper") {
            console.log("Computer wins. Paper covers Rock");
            computerScore++;
        } else if(humanChoice === "rock" && computerChoice === "Scissors") {
            console.log("Human wins. Rock breaks scissors");
            humanScore++;
        } else if(humanChoice === "paper" && computerChoice === "Rock") {
            console.log("Human Wins. Paper covers Rock");
            humanScore++;
        } else if(humanChoice === "paper" && computerChoice === "Scissors") {
            console.log("Computer Wins. Scissors cuts paper");
            computerScore++;
        } else if(humanChoice === "scissors" && computerChoice === "Rock") {
            console.log("Computer Wins. Rock breaks scissors");
            computerScore++;
        } else if(humanChoice === "scissors" && computerChoice === "Paper") {
            console.log("Human Wins. Scissors cuts paper");
            humanScore++;
        }
    }
}

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    while(true) {
        let humanChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
        if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            return humanChoice;
        }
        alert("Invalid choice! Please enter rock, paper, or scissors.");
    }
}

// Start the game
playGame();