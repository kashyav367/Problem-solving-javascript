// 18. **Sort array of objects by name then age**

//     - Input:
        
//         ```jsx
//         [
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 },
//           { name: "Alice", age: 22 }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [
//           { name: "Alice", age: 22 },
//           { name: "Alice", age: 30 },
//           { name: "Bob", age: 25 }
//         ]
        
//         ```
        
let input  = [
    {name:"Alice", age:22},
    {name:"Alice", age:30},
    {name:"Bob", age:25}
]
let output
output = input.sort((a,b) => a-b)

console.log(output)