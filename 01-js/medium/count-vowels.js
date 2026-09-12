/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    if(str.length === 0){
      return ""
    }
    let count = 0;
    for(let i=0; i<str.length; i++){
      if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" ||  str[i] === "u" || str[i] === "s" || str[i] === "A" || str[i] === "E" 
        || str[i] === "I" || str[i] === "O" || str[i] === "U" || str[i] === "S" 
      ){
        count++;
      }
    }
    return count;
}
let str = "xyz"
let result = countVowels(str);
console.log(result);

module.exports = countVowels;