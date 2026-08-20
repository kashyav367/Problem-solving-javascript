// 19. Reconcile two lists (missing + extra items)
//     - Input:
        
//         ```jsx
//         expected:["a","b","c"]
//         actual:["b","c","d"]
//         ```
        
//     - Output:
        
//         ```
//         { missing:["a"], extra:["d"] }
//         ```
        
let expected = ["a","b","c"]
let actual = ["b","c","d"]



let missing = expected.filter((data) => !actual.includes(data))
let extra  = actual.filter((data) => !expected.includes(data))

let result ={
    missing,
    extra
}

console.log(result)