/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
    let left=0; 
    let right = str.length-1;

    while(left < right){
       if(str[left] !== str[right]){
         return false;
       }
       else{
        left++;
       right--;
       }
    }
    return true;
}

let str = "racecar"
let result = isPalindrome(str);
console.log(result);

module.exports = isPalindrome;


//will do i

// function palindromeNumber(input){

//   let rev = 0;

//   while(input > 0){
//     let rem = input % 10;
//     rev = Math.floor(rev*10 + rem);
//     input = Math.floor(input/10);
//   }
//   return rev;
// }

// let result = palindromeNumber(121)
// console.log(result)