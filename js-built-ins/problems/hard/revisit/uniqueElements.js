
/*
  Write a function `getUniqueElements` which takes an array as input and returns a new array containing only the unique elements from the input array.

  What are unique elements?
  - Elements that appear only once in the array or the first occurrence of each element in case of duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40, 20]
  - Output: [10, 20, 30, 40]

  - Input: [1, 2, 3, 4, 5]
  - Output: [1, 2, 3, 4, 5]

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-unique`
*/


function getUniqueElements(input){

    let output = []
    
    for(let i=0 ; i<input.length ; i++){
        if(!output.includes(input[i])){
            output.push(input[i])
        }
    }
    return output
}

let input = [10,20,30,10,40,20]
let output = getUniqueElements(input)
console.log(output)


//will do it in 4 days