// 13. **Count number of keys in object**

//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         3
        
//         ```
        
function countNumberOfkeys(input){

    let count = 0;

    for(let key in input){
        if(input[key]){
            count++
        }
}
return count
}

let input = {a:1, b:2, c:3}
let result = countNumberOfkeys(input)
console.log(result);