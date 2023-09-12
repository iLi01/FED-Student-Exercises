//exercise 2

function guess(){
  let num = parseInt(Math.random() * 10 + 1);
  let userGuess = prompt("input a guess number between 1 to 10");
  
    if(num === userGuess){
          alert("YOU GUESSED IT!!!");
      } else if (userGuess < num){
          alert("Too small of a number");
        } else if (userGuess > num){
            alert("Too big of a number");
            }
  }

guess();

// while (userGuess < num || userGuess > num) ??
// how do i make it so that the game does not restart