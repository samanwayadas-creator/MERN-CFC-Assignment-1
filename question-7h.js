let n = 5;
n = parseInt(n);
let row = 1;
row = parseInt(row);
let nsp = -1;
nsp = parseInt(nsp);
let nst = n;
nst = parseInt(nst);

while(row<2*n){
    let cst = 1;
    cst = parseInt(cst);
    while(cst<=nst){
        process.stdout.write("* ");
        cst = cst + 1;
    }

    let csp = 1;
    csp = parseInt(csp);
    while(csp<=nsp){
        process.stdout.write("  ");
        csp = csp + 1;
    }
    

    if(row==1 || row == 2*n-1){
    cst = 2;
    }else{
        cst = 1;
    }

    while(cst<=nst){
        process.stdout.write("* ");
        cst = cst + 1;
    }

    if(row<n){
        nst = nst - 1;
        nsp = nsp + 2;
    }else{
        nst = nst + 1;
        nsp = nsp - 2;
    }

    row = row + 1;
    console.log();
}

   