let n = 5;

let nstr = 1;
let row = 1;

while(row<=n){
    let cstr = 0;
    while(cstr<nstr){
    process.stdout.write("* ");
    cstr++;
    }
    nstr = nstr + 1;
    console.log();
    row = row + 1;
}