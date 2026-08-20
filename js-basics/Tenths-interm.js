// Build index of ids grouped by category

// input:[
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]

// output:{ fruit: [1,3], veggie: [2] }

let input = [
    {id:1,category:"fruit"},
    {id:2,category:"veggie"},
    {id:3, category:"fruit"}
]

let output = {}

for(let value of input){

    let key = value.category
     
    if(!output[key]){
        output[key] = []
    }
  output[key].push(value.id)
}

console.log(output)