// Capitalize string values inside object

// input:{ name: "alice", city: "delhi" }

// Output:{ name: "Alice", city: "Delhi" }

function Capitalize(obj){

    let output = {}
    for(let key in obj){
      output[key] = obj[key].charAt(0).toUpperCase()+obj[key].slice(1)
    }
    return output
}

let result = Capitalize({ name: "alice", city: "delhi" })
console.log(result)
