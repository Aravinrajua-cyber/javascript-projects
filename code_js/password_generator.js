const prompt = require("readline-sync");
let length = Number(prompt.question("How long would you like your password"))
let characters  = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%" 
let password = "";
for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * characters.length); 
    let char = characters[index];
    password += char; 
}
console.log("Your password: " + password);