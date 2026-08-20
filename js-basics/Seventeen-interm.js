// 16. **Nested object destructuring**
//     - Input:
        
//         ```jsx
//         { user: { profile: { name: "Alice", age: 25 } } }
        
//         ```
        
//     - Output:
        
//         ```
//         Alice 25
        
//         ```

const input = {user:{profile:{name:"Alice", age: 25}}}

const {user:{profile:{name, age}}}  = input

console.log(name,age)