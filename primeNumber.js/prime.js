let n= 8;
let isprime = true;

for(let i= 2; i<=Math.floor(n/2) ;i++){

     if(n%2==0){
        isprime= false;
     }

}

console.log(isprime);