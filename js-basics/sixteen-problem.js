// Count even and odd numbers in array

// input:[1,2,3,4,5,6]

// output:{ even: 3, odd: 3 }

function countEvenAndOdd(input){
    
    let num = {
    even : 0,
    Odd: 0
    }

    for(let key in input){
        if(key % 2 === 0){
            num.even++
        }
        else{
            num.Odd++;
        }
    }
    return num
}


let obj = [1,2,3,4,5,6]

let result = countEvenAndOdd(obj)
console.log(result)