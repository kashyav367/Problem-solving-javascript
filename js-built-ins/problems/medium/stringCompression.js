/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/

function compression(str) {
  // Your code here
  if(str.length === 0){
    return ""
  }

  let obj = {}
  for(let i=0 ; i<str.length ; i++){
    if(obj[str[i]]){
      obj[str[i]]++
    }
    else{
      obj[str[i]] = 1;
    }
  }

  let compressed  = ""
  for(let key in obj){
    if(obj[key] > 1){
      compressed = compressed + key + obj[key]
    }
    else{
      compressed = compressed + key
    }
  }
  return compressed
}
let str = "aaabbbbcccvvmm"
let Output = compression(str)
console.log(Output)

module.exports = compression;