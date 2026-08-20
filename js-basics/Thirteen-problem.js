// Count number of keys in object

// input:{ a: 1, b: 2, c: 3 }

// Output:3

function  countNumber(obj){

    let count = 0
    for(let key in obj){
       if(obj[key]){
       count++
       }
    }
    return count
}

let result = countNumber({a:1, b:2, c:3})
console.log(result)