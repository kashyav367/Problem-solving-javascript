
// 3. **Swap keys and values of object**
//     - Input:
        
//         ```jsx
//         { a: "x", b: "y", c: "z" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { x: "a", y: "b", z: "c" }
        
//         ```
        

function swapKeyAndValues(input){

    let object = {}
    for(let key in input){
        object[input[key]] = key
    }
    return object
}
let input =  { a: "x", b: "y", c: "z" }
let output = swapKeyAndValues(input)
console.log(output)