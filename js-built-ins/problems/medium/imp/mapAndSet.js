// Map

// const map=new Map([[1,2],["fruit","banana"]])
// const map=new Map()
// let obj={name:"prakash"}
// map.set(1, 2)
// map.set(obj,"banana")
// map.set(function test(){}, "hello")
// map.set(null, "i am null")
// map.set(1,6)
// console.log(map.get("one"))
// // map.delete(null)
// console.log(map)

// new Map([iterable]) – creates the map ,  with optional iterable (e.g. array) of [key,value] pairs.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

// Note : map[key] isn’t the right way to use a Map
// Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a
//  plain JavaScript object, so it implies all corresponding limitations
//  (only string/symbol keys and so on).

// Note : To test keys for equivalence, Map uses the algorithm
//  SameValueZero. It is roughly the same as strict equality ===,
//  but the difference is that NaN is considered equal to NaN.
//  So NaN can be used as the key as well.

// console.log(NaN===NaN)
// const map=new Map()
// map.set(NaN, 12)
// map.set(NaN, 67)
// console.log(map.get(NaN))

// Chaining

// const map= new Map()
// // console.log(map)
// map.set(1,2).set(3,55).set("fruit", "banana")
// // map.set(1,2)
// // map.set(3,55)
// console.log(map)
// Iteration over Map
// const map = new Map();
// map.set(1, 9);
// map.set(2, 3);
// console.log(map.entries());
// for (const [key, value] of map.entries()) {
//   console.log(key, value);
// }

// creating map using plane obj & Object.entries

// const obj = {
//   name: "Prakash",
//   city: "Delhi",
//   printMyName: function () {
//     console.log("prakash");
//   },
// };
// const newMap = new Map(Object.entries(obj));
// console.log(newMap);
// Map has a built-in forEach method, similar to Array
// newMap.forEach((one, two, three) => {
//   console.log("one", one);
//   console.log("two", two);
//   console.log("three", three);
// });
// Object.fromEntries: Object from Map
// const newObj=Object.fromEntries(newMap)
// console.log(newObj)
// set

const arr = [123];

const set = new Set();
set.add(8);
set.add(arr);
set.add(arr);
set.add("banana");
set.add(undefined);
// set.delete("banana")
// set.clear()
console.log(set);

// new Set([iterable]) – creates the set, and if an iterable object
//  is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value
//  existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

// Iteration over Set
console.log(set.entries());

let obj = {};
console.log(obj === obj);
// console.log({} === obj);
// console.log({} === {});


console.log(NaN===NaN)
console.log(0.2 + 0.1 === 0.3)