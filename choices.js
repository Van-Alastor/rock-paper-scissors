let btnUser = document.querySelectorAll("button");

let computerElection = document.querySelector("#computer");

btnUser.forEach((button) => {

   button.addEventListener('click', () => {
      user.textContent = button.id;
  
      function computerPlay () {
  
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
      
      computerPlay();
  });
  
})

