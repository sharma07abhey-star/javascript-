// code readability should be high

// data types in javascript 

let name = "abhey"; // 1. string
let city = "New York"; // string
let country = "USA"; // string

let age = 18; // 2. number

let bigint = 3436345345n; // 3. BigInt

let isStudent = true; // 4. boolean

let address = null; // 5 . object
// null is an object data type 

let hobbies; // 6. undefined
// if value is not assigned to any variable then it is undefined data type

let loves = ["coding", "music", "art"]; // 7. array

let symbol = Symbol("unique"); // 8. symbol



// 8. symbol
// symbol is a unique and immutable primitive value which means that it cannot be changed.
// which means that each symbol value is unique and can be used to 
// identify object properties without risk of name clashes.
// e.g. const sym1 = Symbol("id");
//      const sym2 = Symbol("id");
//      console.log(sym1 === sym2); // false
//  both have same values but different identities



// type of is the inbuild function which is used to find the type .
console.log(typeof age);