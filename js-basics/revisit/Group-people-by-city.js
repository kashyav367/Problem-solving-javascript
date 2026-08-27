// 6. **Group people by city**
//     - Input:
        
//         ```jsx
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { Delhi: ["A", "C"], Mumbai: ["B"] }
        
//         ```
        

function groupPeopleByCity(input){

  let data = {}

  for(let value of input){
    let key = value.city

    if(!data[key]){
        data[key] = []
    }
    data[key].push(value.name)
  }
  return data
}

let input =   [
               { name: "A", city: "Delhi" },
               { name: "B", city: "Mumbai" },
               { name: "C", city: "Delhi" }
              ]
        

let result = groupPeopleByCity(input)
console.log(result)
