let arr= [1,1,0,0,1,0,1,0,1];

let i=0 ; j=0;

while(i<arr.length){
    temp= arr[i];
    arr[i]= arr[j];
    arr[j]= temp;

    i++;
}
j++;

console.log(arr);