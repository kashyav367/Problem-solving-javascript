// Pick only given keys from object

// input:{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// output:{ name: "Rahul", city: "Noida" }

function pickOnly(obj,arr){
 let newObj = {}

 for(let ele in obj){
    if(arr.includes(ele)){
        newObj[ele] = obj[ele] 
    }
 }
 return newObj
}

const result = pickOnly({ name: "Rahul", age: 23, city: "Noida" }, ["name","city"])

console.log(result)
