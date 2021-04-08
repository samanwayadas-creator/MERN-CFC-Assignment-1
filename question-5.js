let readlineSync = require('readline-sync');

let num = readlineSync.question('Enter the number : ');

let count = 0;
count = parseInt(count);
num = parseInt(num);


while(num!=0){
    num = Math.floor(num/10);
    count = count + 1
}

console.log(`The number of digits of a number are : ${count}`);