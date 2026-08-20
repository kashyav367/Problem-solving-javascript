// Transform array of orders into revenue per category

// input: [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]

// output: { electronics: 300, clothes: 50 }



let input = [
    {id:1, category: "electronics", price:100},
    {id:2, category: "clothes", price: 50},
    {id:3, category: "electronics", price: 200}
]


let output = {}

for(let value of input){
    if(output[value.category]){
        output[value.category] += value.price
    }
    else{
        output[value.category] = value.price
    }

}

console.log(output)

