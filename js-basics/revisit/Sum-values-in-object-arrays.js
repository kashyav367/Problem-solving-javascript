// 1. **Sum values in object arrays**
//     - Input:
        
//         ```jsx
//         { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { food: 60, travel: 20, bills: 100 }
        
//         ```
        
        
function sumValues(input){
    
    let Output = {}
    
    for(let key in input){
        Output[key]= input[key].reduce((acc,curr) => {
            acc + curr
        },0)
    }
    return Output
}

let input ={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
let result = sumValues(input)
console.log(result)