// 5. **Flatten object of arrays into one array**

//     - Input: { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
//      - Output:["apple", "banana", "carrot", "pea"]


let item = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

let result = []

result = Object.values(item).flat()

console.log(result)