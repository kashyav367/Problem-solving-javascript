// 18. **Convert array of objects to lookup by id**
//     - Input:
        
//         ```jsx
//         [{ id: 1, name: "A" }, { id: 2, name: "B" }]
        
//         ```
        
//     - Output:
//          { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }


function lookupById(input){
    let obj = {}

   input.forEach((e) => {
    obj[e.id] = e
   })
    return obj;
}

let result =lookupById([{ id: 1, name: "A" }, { id: 2, name: "B" }])
console.log(result)