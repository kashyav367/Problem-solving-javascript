// 2. **Count word occurrences in array**
//     - Input:
        
//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
        
//         ```
        
//     - Output:{ apple: 3, banana: 2, orange: 1 }


function wordOccurrences(input){

let Output = {}

for(let key in input){
   let value = input[key]
   
   if(Output[value]){
       Output[value]++
   }
   else{
       Output[value] = 1
   }
}
return Output
}


let input =  ["apple", "banana", "apple", "orange", "banana", "apple"]
let result = wordOccurences(input)
console.log(result)