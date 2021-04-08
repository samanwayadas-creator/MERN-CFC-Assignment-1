let n = 5;
n = parseInt(n);
let nnum = 2*n;
nnum = parseInt(nnum);
let row = 0;
row = parseInt(row);
let val = n;



while(row<2*n-1){
    let cnum = 0;
    while(cnum<nnum-1){
        if(cnum==0||row==0||cnum==8||row==8){
            val = 5;
        }else if(cnum==1||row==1||cnum==7||row==7){
            val = 4;
        }else if(cnum==2||row==2||cnum==6||row==6){
            val = 3;
        } else if(cnum==3||row==3||cnum==5||row==5){
            val = 2;
        } else{
            val = 1;
        }
        process.stdout.write(val+" ");
        cnum = cnum + 1;
    }

row = row + 1;
console.log();
}