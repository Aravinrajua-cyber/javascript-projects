const prompt = require("readline-sync");
let answer = prompt.question(" add , minus , multiply or divide? ");
function add(x , y) {
    return x + y
}
function minus(x , y) {
    return x - y;
}
function multiply(x , y) {
   return x * y;
}
function divide(x , y) {
    return x / y;
}
while (answer != "exit") {
    let x = Number(prompt.question("First number? "));
    let y = Number(prompt.question("Second number? "));
    if (answer === "add") {
      console.log(add(x , y))
      answer = prompt.question(" add , minus , multiply or divide? ");
    }
    else if (answer === "minus"){
        console.log(minus(x , y))
        answer = prompt.question(" add , minus , multiply or divide? ");
    }
    else if (answer === "multiply"){
        console.log(multiply(x , y))
        answer = prompt.question(" add , minus , multiply or divide? ");
    }
    else if (answer === "divide"){
        console.log(divide(x , y))
        answer = prompt.question(" add , minus , multiply or divide? ");
    }
    }

