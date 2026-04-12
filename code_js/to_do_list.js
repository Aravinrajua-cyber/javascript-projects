const prompt = require("readline-sync");
const tasks = []
let answer = prompt.question("Would you like to add , delete , view or mark a task as done?");
while (answer != "exit") {
    if (answer === "add") {
        let task = prompt.question("What is the task that you would like to add?");
        tasks.push({ name : task, done: false });
        answer = prompt.question("Would you like to add, delete, mark as done, or exit?");
    }
    else if (answer === "view") {
        tasks.forEach(function(task, index) {
        console.log(index + 1 + ". " + task.name + "status:" + task.done );
     });
        answer = prompt.question("Would you like to add, delete, mark as done, or exit?");
    }
    else if (answer === "delete"){
       tasks.forEach(function(task, index) {
       console.log(index + 1 + ". " + task.name + "status:" + task.done );
     });
        let choice = Number(prompt.question("Which one would you like to delete?"));
        tasks.splice(choice - 1 , 1);
        tasks.forEach(function(task, index) {
        console.log(index + 1 + ". " + task.name + "status:" + task.done );
     });
        answer = prompt.question("Would you like to add, delete, mark as done, or exit?");
    }
    else if (answer === "done") {
        tasks.forEach(function(task, index) {
       console.log(index + 1 + ". " + task.name + "status:" + task.done );
    });
        let choice = Number(prompt.question("Which one would you like to tick?"));
        tasks[choice - 1].done = true;
        answer = prompt.question("Would you like to add, delete, mark as done, or exit?");
    }
}   