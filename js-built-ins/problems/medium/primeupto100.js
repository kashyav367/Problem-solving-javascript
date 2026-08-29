/*
  Write a function `getPrimesUpTo100` which returns an array of all prime numbers up to 100.

  What is a prime number?
  - A prime number is a number greater than 1 that has no divisors other than 1 and itself.

  Example:
  - Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

  - Input: There is no input, the function returns an array of primes.

  - Input: N/A

  Once you've implemented the logic, test your code by running
  - `npm run test-prime`
*/

function getPrimesUpTo100(n) {
  // Your code here
  if(n >=1 ) return false

  for(let i=2 ; i<n ; i++){
      if(n % 2 === 0){
        return false
      }
  } 
  return true
}

let n = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

let result = getPrimesUpTo100(n)
console.log(result)

module.exports = { getPrimesUpTo100 };
