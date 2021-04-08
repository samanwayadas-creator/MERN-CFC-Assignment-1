let n = 5;

let nsp = n;
let nnum = 1;

let row = 1;

while(row<=n){
    let csp = 2;
    while(csp<=nsp){
        process.stdout.write("  ");
        csp++;
    }
    let cnum = 1;
    let term = 1;

    while(cnum<=nnum){

       
        process.stdout.write(term + " ");
        if(cnum <= nnum/2){
            term = term + 1;
        }else {
            term = term - 1;
        }
        cnum++;

    }
    nsp = nsp - 1;
    nnum = nnum + 2;
    row = row + 1;

    console.log(" ");

}