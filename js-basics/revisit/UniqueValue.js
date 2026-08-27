// ```jsx
// A
// ```

// 9. **Unique values across all object arrays**
//     - Input:
        
//         ```jsx
//         { x: [1,2,3], y: [2,3,4], z: [4,5] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [1,2,3,4,5]
        
//         ```


   function UniqueValues(input){
       
       let data = []
       
       let set = new Set()
       
       for(let key in input){
           for(let value of input[key]){
             set.add(value)    
           }
           
       }  
           
        data = [...set]
          
       return data
   }
   
   
   let input = { x: [1,2,3], y: [2,3,4], z: [4,5] }
   
   let result = UniqueValues(input)
   console.log(result)