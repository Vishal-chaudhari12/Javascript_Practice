let n= 789654;

let rev =0;

while(n>0){

    var rem =n%10;
    rev = rev*10 +rem;
    n= Math.floor(n/10);

}

console.log(rev);