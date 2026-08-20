// 2. **Count word occurrences in array**

//     - Input:
        
//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
        
//         ```
        
//     - Output: 
//         { apple: 3, banana: 2, orange: 1 }


let item =   ["apple", "banana", "apple", "orange", "banana", "apple"]

let result = {}


  for(let value of item ){
    if(result[key]){
        result[key]++
    }
    else{
        result[key] = 1
    }
  }

console.log(result)