// 5. **Flatten object of arrays into one array**
//     - Input:
        
//         ```jsx
//         { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["apple", "banana", "carrot", "pea"]
        
//         ```

function flattenObject(input){

    let output = []

    return output = Object.values(input).flat()
}

let input =  { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
let result = flattenObject(input)
console.log(result)