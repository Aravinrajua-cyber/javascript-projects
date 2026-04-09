const readline = require("readline-sync");
let number = Math.floor(Math.random() * 100) + 1;
let guess = Number(readline.question("Guess a number between 1 and 100: "));
let guesses = 0;
while (guess !== number) {
    if (guess > number) {
        console.log( "too high, try again ");
    }else {
        console.log("too low , try again");
    
    }
guess = Number(readline.question("Guess again: "));
guesses++;
}
console.log("correct! You got it in " + guesses + " guesses"); 