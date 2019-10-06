
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

    Console.Log("ROCK, PAPER, SCISSORS \n");
    Console.Log("------------------------- \n\n")

    // Play 5 rounds and track winners/losers
    while(roundNumber <= 5)
    {
        Console.log("Round " + roundNumber + "\n");
        Console.log("Player: Enter rock, paper, or scissors and hit ENTER to play: ")

        let playerChoice = readline().toLowerCase();

        if( (playerChoice != "rock") || (playerChoice != "paper") || (playerChoice != "scissors") )
            continue;
        else
        {
            let computerChoice = computerPlay();
            Console.Log("Player choice was: " + playerChoice + "\n");
            Console.Log("Computer choicer was: " + computerChoice + "\n");
            Console.Log("RESULT: ");

            // Get our winner/loser, or tie
            let roundResult = playRound();

            switch (roundResult)
            {
                case "tie":
                    {
                        numberOfTies++;
                        Console.Log("It's a tie! \n")
                        break;
                    }
                case "computer":
                    {
                        computerWins++;
                        Console.Log("Computer wins! \n")
                        break;
                    }
                case "player":
                    {
                        playerWins++;
                        Console.Log("Player wins! \n")
                        break;
                    }
            }

            roundNumber++;
            if(roundNumber <= 5)
                Console.Log("Let's play again! \n \n");
        }
    }

    // Results screen
    Console.Log("\n RESULTS! \n\n");
    Console.Log("Computer wins: " + computerWins + "\n");
    Console.Log("Player wins: " + playerWins + "\n");

    if(playerWins > computerWins)
        Console.Log("Player Wins!" + "\n");
    else if(computerWins > playerWins)
        Console.Log("Computer Wins!" + "\n");
    else
        Console.Log("Wouldn't you know, it's a tie!" + "\n");
}