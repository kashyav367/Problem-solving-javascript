// 7. **Filter object by values > 50**
//     - Input:
        
//         ```jsx
//         { a: 20, b: 60, c: 40, d: 90 }
        
//         ```
        
//     - Output:{ b: 60, d: 90 }


function filterObject(input){

    let output = {}

    return output = Object.fromEntries(
      Object.entries(input).filter(([key,value]) => value > 50)
    )
}

let input ={ a: 20, b: 60, c: 40, d: 90 }

let result = filterObject(input)
console.log(result)