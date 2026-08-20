// Sum all transactions per user

// input: [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]

// output: { A: 150, B: 200 }


function sumAllTransaction(input){
  let output = {}

  for(let value of input){
    if(output[value.user]){
     output[value.user] += value.amount
    }
    else{
     output[value.user] = value.amount
    }
  }
  return output
}

let arr = [
     {user: "A", amount: 100},
     {user: "B", amount: 200},
     {user: "A", amount: 50}
]


let result = sumAllTransaction(arr)
console.log(result)



