/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
// function isAnagram(str1, str2) {

//   if (str1.length !== str2.length) {
//       return false;
//   }


//   function sortString(str) {
//       return str.toLowerCase().split('').sort().join('');
//   }


//   return sortString(str1) === sortString(str2);
// }

function anagram(str1,str2){

  let newstr1 = str1.split(" ").sort().join()
    let newstr2 = str2.split(" ").sort().join()

    return(newstr1 === newstr1)
}

let str1 = "spar"
let str2 = "rasp"
let result = anagram(str1,str2)
console.log(result)

// module.exports = isAnagram;