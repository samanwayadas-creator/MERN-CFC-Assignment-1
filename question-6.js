let readlineSync = require('readline-sync');

let num = readlineSync.question('Enter the number : ');
let count = num.length - 1;
count = parseInt(count);

num = parseInt(num);

let temp = 0;
temp = parseInt(temp);

let sum = 0;
sum = parseInt(sum);


while(num!=0){
    temp = Math.floor(num%10);
    num = Math.floor(num/10);
    sum = sum + temp*Math.pow(10,count);
    count--;
}

console.log(`The reversed number is ${sum}`);