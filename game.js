
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

    console.Log("ROCK, PAPER, SCISSORS \n");
    console.Log("------------------------- \n\n")

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
            console.Log("Player choice was: " + playerChoice + "\n");
            console.Log("Computer choicer was: " + computerChoice + "\n");
            console.Log("RESULT: ");

            // Get our winner/loser, or tie
            let roundResult = playRound();

            switch (roundResult)
            {
                case "tie":
                    {
                        numberOfTies++;
                        console.Log("It's a tie! \n")
                        break;
                    }
                case "computer":
                    {
                        computerWins++;
                        console.Log("Computer wins! \n")
                        break;
                    }
                case "player":
                    {
                        playerWins++;
                        console.Log("Player wins! \n")
                        break;
                    }
            }

            roundNumber++;
            if(roundNumber <= 5)
                console.Log("Let's play again! \n \n");
        }
    }

    // Results screen
    console.Log("\n RESULTS! \n\n");
    console.Log("Computer wins: " + computerWins + "\n");
    console.Log("Player wins: " + playerWins + "\n");

    if(playerWins > computerWins)
        console.Log("Player Wins!" + "\n");
    else if(computerWins > playerWins)
        console.Log("Computer Wins!" + "\n");
    else
        console.Log("Wouldn't you know, it's a tie!" + "\n");
}