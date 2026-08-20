// 4. **Find the largest value key**
//     - Input:{ a: 10, b: 50, c: 20 }

//     Output: b.


let data = { a: 10, b: 50, c: 20 }

let output;
let max = -Infinity;

for(let key in data){

    let value =data[key]
    if(value > max){
        max = value
        output=key
    }
}

console.log(output)