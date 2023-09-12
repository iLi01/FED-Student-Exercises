//exercise 3 
showPrompt();

function showPrompt() {
let number = prompt("Play FizzBuzz");

for (let number = 1; number <= 100; number++);

if (number % 3 === 0 && number % 5 === 0){
  console.log("FizzBuzz");
  prompt("FizzBuzz");
}
  else if (number % 3 === 0){
  console.log("Fizz");
  prompt("Fizz");
  }
  else if (number % 5 === 0){
    console.log("Buzz");
    prompt("Buzz");
  }
  else {
    console.log(number);
    prompt(number);
  }

}

