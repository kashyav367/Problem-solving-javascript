// 1. **Sum values in object arrays**

//     - Input: { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

//     -Output: { food: 60, travel: 20, bills: 100 }
    

let item =  { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }

let result = {}
 
for(let key in item){
     result[key] = item[key].reduce((acc,curr) => {
     return acc + curr
    },0)
}

console.log(result)