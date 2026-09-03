// 15. **Convert object to query string**
//     - Input:
        
//         ```jsx
//         { name: "Alice", age: 25 }
        
//         ```
        
//     - Output:
        
//         ```
//         "name=Alice&age=25"
        
//         ```
        

function objectToQueryString(input){

    let str = ""
    for(let key in input){
        if(!str){
         str+= `${key}=${input[key]}`
        }
        else{
         str += `&${key}=${input[key]}`
        }
    }
    return str
}

let input =  { name: "Alice", age: 25 }
let output = objectToQueryString(input)
console.log(output)