
function computerPlay() {

    let selectionNumber = Math.random(1,3);

    switch (selectionNumber) {
        
        case 1: 
        {
            return "rock";
            break;
        }
        case 2:
        {
            return "paper";
            break;
        }
        case 3:
        {
            return "scissors";
            break;
        }
    };

}

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection)
        return "tie";

    // Possible computer wins
    else if ( ( (playerSelection == "rock") && (computerSelection == "paper") )
             || ( (playerSelection == "paper") && (computerSelection == "scissors") ) )
                return "computer"
                
    // Possible player wins
    else if ( ( (computerSelection == "rock") && (playerSelection == "paper") )
             || ( (computerSelection == "paper") && (playerSelection == "scissors") ) )
                return "player"
}

function game() {

    let roundNumber = 1;
    let playerWins, computerWins, numberOfTies = 0;

    console.log("ROCK, PAPER, SCISSORS \n");
    console.log("------------------------- \n\n")

    // Play 5 rounds and track winners/losers
    while(roundNumber <= 5)
    {
        console.log("Round " + roundNumber + "\n");
        console.log("Player: Enter rock, paper, or scissors and hit ENTER to play: ")

        let playerChoice = Window.prompt("Enter rock, paper, or scissors: ", "");

        if( (playerChoice != "rock") || (playerChoice != "paper") || (playerChoice != "scissors") )
            continue;
        else
        {
            let computerChoice = computerPlay();
            console.log("Player choice was: " + playerChoice + "\n");
            console.log("Computer choicer was: " + computerChoice + "\n");
            console.log("RESULT: ");

            // Get our winner/loser, or tie
            let roundResult = playRound();

            switch (roundResult)
            {
                case "tie":
                    {
                        numberOfTies++;
                        console.log("It's a tie! \n")
                        break;
                    }
                case "computer":
                    {
                        computerWins++;
                        console.log("Computer wins! \n")
                        break;
                    }
                case "player":
                    {
                        playerWins++;
                        console.log("Player wins! \n")
                        break;
                    }
            }

            roundNumber++;
            if(roundNumber <= 5)
                console.log("Let's play again! \n \n");
        }
    }

    // Results screen
    console.log("\n RESULTS! \n\n");
    console.log("Computer wins: " + computerWins + "\n");
    console.log("Player wins: " + playerWins + "\n");

    if(playerWins > computerWins)
        console.log("Player Wins!" + "\n");
    else if(computerWins > playerWins)
        console.log("Computer Wins!" + "\n");
    else
        console.log("Wouldn't you know, it's a tie!" + "\n");
}