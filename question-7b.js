let n = 5;

let row = 1;
let nnum = 1;

while(row<=n){
    let cnum = 0;
    while(cnum<nnum){
        process.stdout.write(parseInt(cnum)+1 + " ");
        cnum++;
    }
    nnum++;
    row++;
    console.log();
}