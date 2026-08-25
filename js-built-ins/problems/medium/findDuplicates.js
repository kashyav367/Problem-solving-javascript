/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/


// function findDuplicates(arr) {
//   return arr.filter((ele, index) => arr.indexOf(ele) !== index);
// }




function findDuplicates(input){

  let obj = {}

  for(let key in input){
    let value =  input[key]
    if(obj[value]){
      obj[value]++
    }
    else{
      obj[value] = 1
    }
  }
  let arr = []
  for(let key in obj){
    if(obj[key] > 1){
     arr.push(Number(key))
  }
}
  return arr
}

let input = [10, 20, 30, 10, 40]
let result = findDuplicates(input)
console.log(result)

 module.exports = findDuplicates;