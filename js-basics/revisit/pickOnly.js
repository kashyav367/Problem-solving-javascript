// 10. **Pick only given keys from object**
//     - Input:
        
//         ```jsx
//         { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Rahul", city: "Noida" }
        
//         ```
    
    function pickOnly(obj,arr){
        
        let Output = {}
        
        for(let ele in obj){
            if(arr.includes(ele)){
                Output[ele] = obj[ele]
            }
        }
        return Output
    }
    
    
    let result = pickOnly({name:"Rahul", age:23, city: "Noida"}, ["name","city"])
    console.log(result)