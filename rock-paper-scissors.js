
function computerPlay () {

    let choices = Math.floor((Math.random())*6);
    
    if (choices >= 0 && choices < 2) {
        return "rock";
    } else if (choices >= 2 && choices < 4 ) {
        return "paper";
    } else  {
        return "scissors";
    }

} 

let playerSelection = prompt().toLowerCase();
let computerSelection = computerPlay();



function game () {
    function gamePlay (playerSelection, computerSelection) {
    
        if (playerSelection === "rock" && computerSelection === "paper") {
            return "You lose!, paper beats rock";
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
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

    console.log(gamePlay(playerSelection, computerSelection));
    
}


game();