// Check if all values in object are numbers


// input:{ a: 1, b: "hello", c: 3 }

// output:false

let input = {a:1, b:"hello", c:3}

let output;

for(let key in input){
    output = Object.values(input).every((value) => typeof value !== "number") 
}

console.log(output)