// Convert the object where languages are the top-level keys, and inside each are translation strings by key into an object where translation keys are the top-level keys, and inside each you store values per language [HARD**]


// input :// {
// //   en: { hello: "Hello", bye: "Goodbye" },
// //   fr: { hello: "Bonjour", bye: "Au revoir" },
// //   es: { hello: "Hola" }
// // }


// output : {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }


let input  = {
        en: { hello: "Hello", bye: "Goodbye" },
        fr: { hello: "Bonjour", bye: "Au revoir" },
        es: { hello: "Hola" }
         }

         let object = {}

         for(let ele in input){
            for(let ele1 in input[ele]){
            if(!object[ele1]){
                object[ele1] = {}
            }
            else{
            object[ele1][ele] = input[ele][ele1]
            }           
         }
        }

         console.log(object)