let n = 5;

let nsp = n;
let nnum = 1;

let row = 1;

while(row<=n){

    //operation
    let csp = 1;
    while(csp < nsp){
        process.stdout.write("  ");
        csp = csp + 1;
    }

    let val = row;
    let cnum = 1;
    while(cnum<=nnum){
        process.stdout.write(val+" ");
        if(cnum<=nnum/2){
            val = val + 1;
        }else{
            val = val - 1;
        }
        cnum = cnum + 1;
    }
    console.log();

    //update
    nnum = nnum + 2;
    row = row + 1;
    nsp = nsp - 1;
}