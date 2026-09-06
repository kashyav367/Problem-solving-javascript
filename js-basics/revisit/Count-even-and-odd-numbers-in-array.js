// ```

// ```

// 16. **Count even and odd numbers in array**
//     - Input:
        
//         ```jsx
//         [1,2,3,4,5,6]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { even: 3, odd: 3 }
        
//         ```
        

function countEvenAndOdd(input){

    let object = {
        even:0,
        odd:0
    }

    for(let key in input){
        if(key % 2 === 0 ){
            object.even++;
        }
        else{
            object.odd++;
        }
    }
    return object
}

let input= [1,2,3,4,5,6]
let result = countEvenAndOdd(input)
console.log(result)