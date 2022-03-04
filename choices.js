let btnUser = document.querySelectorAll(".options button");

let computerElection = document.querySelector("#computer");

const computerDecision = computerPlay => {
  
   //Generate random number between 0 to 2
   let choices = Math.floor((Math.random())*3);
   
   if (choices < 1) {
      computerElection.textContent = "rock";
   } else if (choices > 1 ) {
      computerElection.textContent = "paper";
   } else  {
      computerElection.textContent = "scissors";
   }
}

let userScore = 0;

let computerScore = 0;

userPoint.textContent = userScore++;

computerPoint.textContent = computerScore++;

btnUser.forEach((button) => {

   button.addEventListener('click', () => {
      user.textContent = button.id;
      
      computerDecision();

      if (user.textContent === "rock" && computer.textContent === "paper") {
         computerPoint.textContent = computerScore++;
         statement.textContent = "You lose! paper beats rock";
         statement.style.color = "red";
      }
      else if (user.textContent === "rock" && computer.textContent === "scissors") {
         userPoint.textContent = userScore++;
         statement.textContent = "You win!, rock beats scissors ";
         statement.style.color = "blue";
     }
     else if (user.textContent === "paper" && computer.textContent === "rock") {
         userPoint.textContent = userScore++;
         statement.textContent = "You win!, paper beats rock";
         statement.style.color = "blue";
     }
     else if (user.textContent === "paper" && computer.textContent === "scissors") {
         computerPoint.textContent = computerScore++;
         statement.textContent = "You lose!, scissors beats paper";
         statement.style.color = "red";
     }
     else if (user.textContent === "scissors" && computer.textContent === "rock") {
         computerPoint.textContent = computerScore++;
         statement.textContent = "You lose!, rock beats scissors";
         statement.style.color = "red";
     }
     else if (user.textContent === "scissors" && computer.textContent === "paper") {
         userPoint.textContent = userScore++;
         statement.textContent = "You win!, scissors beats paper";
         statement.style.color = "blue";
     }
     else {
         statement.textContent = "Draw, your choice is the same as the computer";
         statement.style.color = "black";
     }
    
  });
  
})

let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {

   userScore = 0;

   computerScore = 0;

   userPoint.textContent = userScore++;

   computerPoint.textContent = computerScore++;

   statement.textContent = "";

   user.textContent = "";

   computer.textContent = "";


})



