// Chunk object entries into groups of size

// input : { a: 1, b: 2, c: 3, d: 4 }, size=2

// output: [ [["a",1],["b",2]], [["c",3],["d",4]] ]

let  input = { a: 1, b: 2, c: 3, d: 4 }, size=2

function groupsOfSize(input,size){
    let outputArr = [];
    let inputArr = Object.entries(input);

    for (let i = 0; i <size; i++) {
        outputArr.push([])
    }

    // console.log(outputArr)
    let count = 0;
    for (let index = 0; index < outputArr.length; index++) {
        while(outputArr[index].length < size){
            outputArr[index].push(inputArr[count]);
            count++;
        }
        
    }
    return outputArr;
}
let result = groupsOfSize(input, size)

console.log(result)