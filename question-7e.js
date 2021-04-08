let n = 5;
n = parseInt(n);

let nnum = 0;
nnum = parseInt(nnum);
let row = 0;
row = parseInt(row);
while(row<=n){
    let cnum = 0;
    cnum = parseInt(cnum);
    while(cnum<=nnum){
        process.stdout.write(combination(row,cnum)+" ");
        cnum = cnum + 1;
    }
    row = row + 1;
    nnum = nnum + 1;
    console.log();
}

function combination(row,cnum) {
    let numer = 1;
    numer =parseInt(numer);
    let r_c = 1;
    r_c = parseInt(r_c);
    let r = 1;
    r = parseInt(r);

    for(let i=1;i<=row;i++){
        numer = numer*i;
    }
    for(let i=1;i<=row-cnum;i++){
        r_c = r_c*i;
    }
    for(let i=1;i<=cnum;i++){
        r = r*i;
    }

    return numer/(r_c*r);
}