
/*function computerPlay () {

    //Generate random number between 0 to 2
    let choices = Math.floor((Math.random())*3);
    
    if (choices < 1) {
        return "rock";
    } else if (choices > 1 ) {
        return "paper";
    } else  {
        return "scissors";
    }

} 

let userScore = 0;
let computerScore = 0;

function game () {

    let playerSelection = prompt().toLowerCase();
    let computerSelection = computerPlay();

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
            userScore++;
            return "You win!, paper beats rock";
        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore++;
            return "You lose!, scissors beats paper";
        }
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return "You lose!, rock beats scissors";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            userScore++;
            return "You win!, scissors beats paper";
        }
        else {
            return "Draw, your choice is the same as the computer";
        }
       
    }
    console.log(gamePlay(playerSelection, computerSelection));
    console.log(`${userScore} vs ${computerScore}`);
}



function sets () {
    for (i = 0; i < 5; i++) {
        game();
    }
}
*/
