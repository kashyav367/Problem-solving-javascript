// Unique values across all object arrays

// input : { x: [1,2,3], y: [2,3,4], z: [4,5] }

// output : [1,2,3,4,5]


let data = { x : [1,2,3], y:[2,3,4],  z:[4,5]}

let Value = Object.values(data).flat()

let result = [...new Set(Value)]

console.log(result)