// 4. **Find the largest value key**

//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 20 }
        
//         ```
        
//     - Output:b

function largestValueKey(input){
let output;
let max = -Infinity

for(let key in input){
let value = input[key];
  if(value > max){
    max = value
    output = key 
  }
}
return output
}

let input =  { a: 10, b: 50, c: 20 }
let result = largestValueKey(input)
console.log(result)