

// 15. **Deep merge two nested objects**
//     - Input:
        
//         ```jsx
//         { a: { x: 1, y: 2 } }
//         { a: { y: 3, z: 4 } }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { a: { x: 1, y: 3, z: 4 } }
        

let input1 = {a:{x:1,y:2}};
let input2 = {a:{y:3,z:4}};

let obj = {};

// for(let key1 in input1){
//     let value1 = input1[key1];
//     for(let key2 in value1){
//         Object.assign(obj, {[key2]: value1[key2]})
//     }
// }
for(let key1 in input1){
    obj[key1] = input1[key1];
    for(let key2 in input2[key1]){
        
        // console.log(key2 in obj[key1])
        if(key2 in obj[key1]) {
            obj[key1][key2]=input2[key1][key2];
            // console.log(obj[key1][key2])
            // console.log(input2[key1][key2])
        }else{
            obj[key1] = {...obj[key1], [key2]:input2[key1][key2]}
            //console.log(obj[key1])
        }
    }
}
console.log(obj)