/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

  let maximum = -Infinity

  for(let i=0 ; i<numbers.length; i++){
   if(numbers[i]> maximum){
    maximum = numbers[i]
   }
  }
  return maximum
}

let numbers = [3,7,2,9,1]
let result = findLargestElement(numbers);
console.log(result)

module.exports = findLargestElement;

//doing this after 4 days