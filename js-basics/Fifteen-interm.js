// 14. **Find intersection of all arrays in object**

//     - Input:
        
//         ```jsx
//         { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
        
//         ```
        
//     - Output:
        
//         ```
//         [3]
        
//         ```


function intersection(input){

    let newInput = Object.values(input); // [[1,2,3],[2,3,4],[3,4,5]];
    let output = newInput[0]; // [2,3]
    for(let i=1;i<newInput.length;i++){
        output = output.filter((e)=>{  // [2,3].filter((e)=> [3,4,5].includes(e))
            return newInput[i].includes(e);
        })
    }

    return output;

}

let result = intersection({ a: [1,2,3], b: [2,3,4], c: [3,4,5] })
console.log(result)