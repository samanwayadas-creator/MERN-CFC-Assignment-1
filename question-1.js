const readline = require("readline");

let inp = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

inp.question('Enter the number of credits \n',
function(request){
    if(request>=7500){
        console.log("Tera Leader");
    }else if(request>=6000 && request < 7500){
        console.log("Gega Leader");
    }else if(request>=4500 && request < 6000){
        console.log("Mega Star");
    }else if(request < 4500){
        console.log("Rising star");
    }
    inp.close();
});