const prompt = require("readline-sync");
let balance = 1000;
console.log("you have $1000 in your bank account");
let reply = prompt.question("Would you like to deposit, withdraw, check, or exit?");
while (reply !== "exit") {
    if (reply === "deposit") {
    let deposited = Number(prompt.question("How much money you like to add to your account?"));
    balance += deposited;
    console.log("sucessful ," + deposited  + " depoisted has been added to your account. Balance :" + balance );
    }
else if (reply === "withdraw") {
    let withdrawed = Number(prompt.question("How much money would you like to withdraw?"));
    if ( withdrawed > balance ) {
        console.log("Declined , you dont have enough money loser") ;
    } else {
    balance -= withdrawed;
    console.log("sucessful , "  + withdrawed + " withdrawed from your account. Balance : " + balance);
    }
    }
else if (reply === "check") {
    console.log("you have " + balance +  " in your bank account");
    }
reply = prompt.question("Would you like to deposit, withdraw, check, or exit?");
}
console.log("Have a good day.")