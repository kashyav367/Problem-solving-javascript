// Remove falsy values from object

// input : { a: 0, b: null, c: "hello", d: undefined, e: 5 }

// Output : { c: "hello", e: 5 }


let input = { a: 0, b: null, c: "hello", d: undefined, e: 5 }


let result = Object.fromEntries(
    Object.entries(input).filter(([key,value]) => value)
)
console.log(result)