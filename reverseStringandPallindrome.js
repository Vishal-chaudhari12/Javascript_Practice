const str ='madam';

let rev ='';

for (i=str.length-1; i>=0 ;i--) {
    rev = rev + str[i];  
}

console.log(rev);

if(rev == str){
    console.log("isPallindrome");
}
else{
    console.log("isNotPallindrome");
}