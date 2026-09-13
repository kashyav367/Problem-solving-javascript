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

function compressWord(arr){
 if(arr.length === 0){
    return []
 }

 let map = new Map();

 let newArr = [];

 for(let ele of arr){
  if (map.has(ele)) {
    map.set(ele, map.get(ele) + 1);
} 
else{
    if(map.size==0){
      map.set(ele, 1);
    }else{
      for(let [key, value] of map){
         if (value === 1) {
                        newArr.push(key);
                    } else {
                        newArr.push(`${key}${value}`);
                    }
      }
      map.clear();
      map.set(ele, 1);
    }
  }
 }
 for(let [key, value] of map){
       if (value === 1) {
                        newArr.push(key);
                    } else {
                        newArr.push(`${key}${value}`);
                    }
      }
//  console.log(newArr);
return newArr
}

let arr = ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
let output = compressWord(arr)
console.log(output);