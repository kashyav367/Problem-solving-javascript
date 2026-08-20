// Sort object entries by values (ascending)

// Input: { a: 3, b: 1, c: 2 }

// Output: [["b",1], ["c",2], ["a",3]]

let data = {a:3 , b:1 , c:2}

let value =  Object.values(data).sort()

let result =  Object.entries(data).sort((a,b) => a[1]-b[1])
console.log(result)