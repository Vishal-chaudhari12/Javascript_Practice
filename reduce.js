//===============Reduce Method==========

// const myNums =[1,2,3]

//arrow function
//const sum = myNums.reduce((acc , curr)=>(acc+curr),0)

// const sum= myNums.reduce(function(acc , curr){
//     return acc+curr;
// })
// const curr=0;
// const sum= myNums.reduce(function(acc , curr){
//     console.log(`acc :${acc} and curr :${curr}`);
//     return acc+curr;
// },0)

// console.log(sum);



//=========== Map Method ============

// Give the given Array and add this array +10 

const myNum =[2,5,8,9];

//  const newArray =  myNum.map((num)=>{return num+10});
const newArray = myNum
              .map((num)=>num *10)
              .map((num)=> num + 1)
              .filter((num)=> num >=30);

 console.log(newArray);