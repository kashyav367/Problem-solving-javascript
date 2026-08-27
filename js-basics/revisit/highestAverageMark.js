// 8. Find student with highest average mark

//     - Input:
        
//         ```jsx
//         { A: [80, 90], B: [70, 75, 85] }
//         ```
        
//     - Output:
        
//         ```jsx
//         A
//         ```
        
function highestStudentMark(input){

    let Output;
    let max = -Infinity

    for(let key in input){
       let sum = input[key].reduce((acc,curr) => acc + curr, 0)
       let avg = sum/input[key].length

       if(avg > max){
        max = avg
        Output=key
       }
    }
    return Output
}


let input =  { A: [80, 90], B: [70, 75, 85] }
let result = highestStudentMark(input)
console.log(result)