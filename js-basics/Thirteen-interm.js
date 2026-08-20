// Deep flatten nested arrays inside object

// input = { a: [1, [2, [3]]], b: [4, [5]] }

// output:{ a: [1,2,3], b: [4,5] }


let input = { a: [1, [2, [3]]], b: [4, [5]] }
let output = {};
for(let key in input){
    const valueLength = input[key].length;

    output[key] = input[key].flat(valueLength);
}
console.log(output)



