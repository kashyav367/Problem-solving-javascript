/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. 
  If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(arr) {
  // Your code here
 if(arr.length === 0){
  return []
 }

 let input = {}
 for(let i=0 ; i < arr.length; i++){
  if(input[arr[i]]){
    input[arr[i]]+=1
  }
  else {
    input[arr[i]] = 1;
  }
 }
console.log(input)
 let compressed = []
 for(let key in input){
    if(input[key] > 1){
      compressed = compressed + key + input[key]
    }
    else{
      compressed = compressed + key
    }
 }
 return compressed
}


let arr =  ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
let result = compressWords(arr);
console.log(result)


module.exports = compressWords;
