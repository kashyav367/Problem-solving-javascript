// 12. **Sort object entries by values (ascending)**
//     - Input:
        
//         ```jsx
//         { a: 3, b: 1, c: 2 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [["b",1], ["c",2], ["a",3]]
        
//         ```
let input = { a: 3, b: 1, c: 2 }
        
let Output = Object.entries(input)

Output = Output.sort((a,b) => a[1]-b[1])

console.log(Output)