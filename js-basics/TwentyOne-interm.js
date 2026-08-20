// 21. **Merge two objects (no sum, override second)**

//     - Input:
        
//         ```jsx
//         { a: 10, b: 20 }
//         { a: 5, c: 15 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { a: 5, b: 20, c: 15 }
        
//         ```


        const obj1 = {a:10,b:20}
        const obj2 = {a:5,c:15}

       const merged = {...obj1, ...obj2}

       console.log(merged)