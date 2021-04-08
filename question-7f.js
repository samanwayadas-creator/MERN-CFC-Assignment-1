let n = 5;
n = parseInt(n);
let row = 1;
row = parseInt(row);
let nsp = n-1;
nsp = parseInt(nsp);
let nst = 1;
nst = parseInt(nst);

while(row<=2*n){
    let csp = 1;
    csp = parseInt(csp);
    while(csp<=nsp){
        process.stdout.write("  ");
        csp = csp + 1;
    }
    let cst = 1;
    cst = parseInt(cst);
    while(cst<=nst){
        process.stdout.write("* ");
        cst = cst + 1;
    }

    if(row<n){
        nsp = nsp - 1;
        nst = nst + 2;
    }else{
        nsp = nsp + 1;
        nst = nst - 2;
    }

    row = row + 1;
    console.log();
}