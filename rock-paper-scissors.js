
function computerPlay () {

    //Generate random number between 0 to 5
    let choices = Math.floor((Math.random())*6);
    
    if (choices < 2) {
        return "rock";
    } else if (choices >= 2 && choices < 4 ) {
        return "paper";
    } else  {
        return "scissors";
    }

} 


function game () {

    let playerSelection = prompt().toLowerCase();
    let computerSelection = computerPlay();

    let userScore = 0;
    let computerScore = 0;


    function gamePlay (playerSelection, computerSelection) {
    
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore++;
            return "You lose!, paper beats rock";
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            userScore++;
            return "You win!, rock beats scissors ";
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {
            return "You win!, paper beats rock";
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            return "You lose!, scissors beats paper";
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            return "You lose!, rock beats scissors";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            return "You win!, scissors beats paper";
        }
        else {
            return "Draw, your choice is the same as the computer";
        }
       
    }
    
    

    console.log(userScore, computerScore);
    

    console.log(gamePlay(playerSelection, computerSelection));
    
}



function sets () {

    for (i = 0; i < 5; i++) {
        game();
    }

}

sets();