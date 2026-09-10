// 19. **Check if all values in object are numbers**

//     - Input:
        
//         ```jsx
//         { a: 1, b: "hello", c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         false
        
//         ```
        

function checkAllValues(inputs){

     let newObj = Object.values(inputs).every((input) => typeof input !== "number")
     return newObj
}

let inputs = {a:1, b:"hello", c:3}
let result = checkAllValues(inputs);
console.log(result)