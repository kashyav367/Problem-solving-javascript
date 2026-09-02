// 14. **Capitalize string values inside object**
//     - Input:
        
//         ```jsx
//         { name: "alice", city: "delhi" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Alice", city: "Delhi" }
        
//         ```
        

function capitalizeString(input){

    let obj = {}

    for(let key in input){
        obj[key] = input[key].charAt(0).toUpperCase() + input[key].slice(1)
    }
    return obj
}

let obj = {name: "alice", city: "delhi"}
let result = capitalizeString(obj)
console.log(result)