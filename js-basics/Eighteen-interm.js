// 17. **Find top N keys by value**

//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 30, d: 40 }, N=2
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["b","d"]
        
//         ```
        

let input  = { a: 10, b: 50, c: 30, d: 40 }
let N = 2;

//1st way ----

let output = []
for(let i=0 ; i<N ; i++){
    let max = -Infinity
    let maxKey = ""

    for(let key in input){
        let value = input[key]

        if(value > max){
            maxKey = key
            max = value
        }
    }
        output.push(maxKey);
       delete input[maxKey]
}
console.log(output)

//2nd way 

let inputArr = []

let value = Object.entries(input).sort((a,b) => b[1]-a[1])

for(let i=0 ; i<N ; i++){
    inputArr.push(value[i][0])
}

console.log(inputArr)