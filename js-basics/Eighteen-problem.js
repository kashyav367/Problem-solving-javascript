// // Convert array of objects to lookup by id

// Input:[{ id: 1, name: "A" }, { id: 2, name: "B" }]

// output:{ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }


let input = [{id:1, name:"A"}, {id:2, name:"B"}]

let output = {}

input.forEach((e) => {
    output[e.id] = e
})

console.log(output)