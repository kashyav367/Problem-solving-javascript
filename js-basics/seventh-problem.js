// Filter object by values > 50

// Input:{ a: 20, b: 60, c: 40, d: 90 }

// Output:{ b: 60, d: 90 }

let data = { a: 20, b: 60, c: 40, d: 90 }


let result = Object.fromEntries(
    Object.entries(data).filter(([Key,value]) =>  value > 50) 
)
console.log(result)