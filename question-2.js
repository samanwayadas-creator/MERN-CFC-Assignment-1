const readline = require("readline-sync");

let inp = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

console.log("Enter the value of amount, rate and time");

let amount = inp.question();
let rate = inp.question();
let time = inp.question();

let SI = (amount*rate*time)/100;

console.log(parseInt(SI));