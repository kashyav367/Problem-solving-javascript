// Remove duplicate objects by id

// input : [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// output : [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

let input = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

let output = []

for(let ele of input){
   if(output.length==0){
    output.push(ele);
    continue;
   }
   const isExist = output.find((e)=> e.id == ele.id);
   if(!isExist){
    output.push(ele);
   }
}

console.log(output)