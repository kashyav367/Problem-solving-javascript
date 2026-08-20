// Find common keys between two objects

// - Input:
    
//     ```jsx
//     { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
 
//    ```

//    Output:["b","c"]

function commonKeys(obj1,obj2){
    let data = []

   for (const key in obj2) {
    if(obj1[key]){
        data.push(key)
    }
   }
    return data
}

let result = commonKeys({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 })
console.log(result)