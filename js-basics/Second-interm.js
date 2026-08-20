// Transform API response to object (id → name)

// input:[
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
//  ]


// output: { 1: "Alice", 2: "Bob" }

let input = [
    {id: 1 , name: "Alice"},
    {id: 2 , name: "Bob"}
]

let output = {}

input.forEach((e) => {
    output[e.id] = e.name
})

console.log(output)