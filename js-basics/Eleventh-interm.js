// Remove deeply nested key from object

// input: { a: { b: { c: 1, d: 2 } } }, remove "c"

// output: { a: { b: { d: 2 } } }

// let input = {a: {b: {c:1,d:2}}} 

function deeplyNested(input, remove){
    for(let key1 in input){
       // console.log(key1 == remove)
        if(key1 == remove){
            delete input[key1];
            break;
        }
        let input1 = input[key1]
        //console.log(input1)
        for(let key2 in input1){
            // console.log(key2 == remove)
            if(key2 == remove){
                delete input1[key2];
                break;
            }
            let input2 = input1[key2];
            // console.log(input2)
            for(let key3 in input2){
                // console.log(key3 == remove)
                if(key3 == remove){
                    // console.log("22")
                     delete input2[key3];
                    // console.log(del)
                    break;
                }
            }
        }
    }
    return input;
}

const output = deeplyNested({ a: { b: { c: 1, d: 2 } } }, "c")
console.log(output)


