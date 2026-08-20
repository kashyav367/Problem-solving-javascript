// Find most repeated word across categories

// input:{ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }

// output:apple

function mostRepeatedWord(input){
 let newObj = {}

 for(let key in input){
    let arr = input[key]
    for(let i=0 ; i<arr.length; i++){
        if(!newObj[arr[i]]){
           newObj[arr[i]] = 1;
        }
        else{
            newObj[arr[i]]++
        }
    }
 }

 let objectKey = ""
 let value = 0;

 for(let key in newObj){
      if(newObj[key] > value){
        objectKey = key
        value = newObj[key]
      }
 }
 return objectKey
}  


let result = mostRepeatedWord({ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] })
console.log(result)

























