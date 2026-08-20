// 3. **Swap keys and values of object**
//     - Input:{ a: "x", b: "y", c: "z" }
    
        
//     - Output:{ x: "a", y: "b", z: "c" }


let data = { a: "x", b: "y", c: "z" }

let result = {}

for(let key in data){
    result[data[key]] = key
}

console.log(result)