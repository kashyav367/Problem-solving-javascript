// Group people by city

// Input:  [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]

// Output:{ Delhi: ["A", "C"], Mumbai: ["B"] }

let data = [
     { name: "A", city: "Delhi" },
     { name: "B", city: "Mumbai" },
     { name: "C", city: "Delhi" }
  ]

  let object = {}

  for(let value of data){

    let key = value.city

    if(!object[key]){
        object[key] = []
    }

    object[key].push(value.name)
  }

  console.log(object)