// Find student with highest average mark

// input: { A: [80, 90], B: [70, 75, 85] }
// output:A



let input = {A:[80,90], B:[70,75,85]}

let object;
let max = 0;
for(let key in input){
  let value = input[key]

  let sum  = value.reduce((acc,curr) =>  acc + curr, 0)

  let average =  sum/value.length

  if(average > max){
    max  = average
    object =  key
  }

}

console.log(object)