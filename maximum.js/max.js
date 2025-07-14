let arr =[12,35,1,10,34,1];


let max = -Infinity;
let sendmax = -Infinity;


for(let i =0; i< arr.length ; i++){

    if(arr[i]> max){
        sendmax = max;
        max= arr[i];
    }
    else if (arr[i] > sendmax && arr[i] !== max) {
        sendmax = arr[i]; 
    }
}


console.log(sendmax);
// let max = arr[0];

// for(let i=0 ; i < arr.length ; i++){

//     if(arr[i]> max){
//         max = arr[i];
//     }
// }
// console.log(max);

