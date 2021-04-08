let readlineSync = require('readline-sync');

let n = readlineSync.question("Enter the number of even terms, after odd jumps ?\n");

n=parseInt(n);
let num = 2;
let oddcounter = 1;
let i = 1;

let count = 0;

num=parseInt(num),oddcounter=parseInt(oddcounter),i=parseInt(i),count=parseInt(count);

while(count!=n+1){
    if(oddcounter == i){
        console.log(num);
        oddcounter = oddcounter + 2;
        i = 1;
        count++;
    }
    num = num + 2;
    i = i + 1;

}