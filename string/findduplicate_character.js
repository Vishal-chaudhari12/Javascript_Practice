// let str ="vissshhhal";

// let dublicated = [...new Set(str)].join('');

// console.log(dublicated);



let str = "vishhhalaa";

let dublicated = [...new Set(str)].join('');

console.log(dublicated);




// function findDuplicateChars(str) {
//     let charCount = {};
//     let duplicates = [];

//     // Count occurrences of each character
//     for (let char of str) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Collect characters with more than one occurrence
//     for (let char in charCount) {
//         if (charCount[char] > 1) {
//             duplicates.push(char);
//         }
//     }

//     return duplicates;
// }

// // Example usage
// let inputString = "hello";
// let duplicates = findDuplicateChars(inputString);
// console.log("Duplicate characters:", duplicates);
