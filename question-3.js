let readlineSync = require("readline-sync");

let num1 = readlineSync.question("Enter the first number : ");
let num2 = readlineSync.question("Enter the second number : ");

parseInt(num1), parseInt(num2);
let divisor = 0;
let divident = 0;

if(num1>num2){
    divident = num1;
    divisor = num2;
}else{
    divident = num2;
    divisor = num1;
}
let rem = 0;
while(divident%divisor!=0){
    rem = divident%divisor;
    divident = divisor;
    divisor = rem;
}

console.log("GCD is : "+ divisor);