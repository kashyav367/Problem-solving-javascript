// 1. **Find longest string among object values**

    // - Input:{ a: "apple", b: "banana", c: "kiwi" }
    // - Output:banana

let input = {a:"apple", b:"banana", c:"kiwi"}

let result = Object.values(input).reduce((a,b) => a.length > b.length ? a:b)

console.log(result)