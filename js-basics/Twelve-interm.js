// 11. **Check if two objects are deeply equal**

// input: { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }

// output:true



function deeplyEqual(obj1,obj2){

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let result = deeplyEqual({ a: { x: 1, z: 2 } }, { a: { x: 1, z: 2 } })
console.log(result);