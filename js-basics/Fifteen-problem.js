// // Convert object to query string

// // input:{ name: "Alice", age: 25 }

// // output:"name=Alice&age=25"


function convertObjectToString(input){
    let str="";
    for(let key in input){
        if(!str){
            str+=`${key}=${input[key]}`
        }else{
            str+=`&${key}=${input[key]}`
        }
    }
    return str;
}
let  obj={name:"Alice", age:25};
let output = convertObjectToString(obj)
console.log(output)

























