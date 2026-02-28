// 1. primitive data types / stack

// they are called stack because they are stored in the stack memory and have a fixed size.
// which means that their size is known at compile time and does not change at runtime.

//  7 types [string, number, bigint, boolean, undefined, symbol, null]

let name = "John"; // string
let age = 30; // number
let isStudent = false; // boolean
let email; // undefined
let uniqueId = Symbol("id"); // symbol
let emptyValue = null; // null
let bigIntValue = 567890n; // bigint

// 2. reference types / non primitive / heap

// they are called heap because they are stored in the heap memory and have a dynamic size.
// which means that their size is not known at compile time and can change at runtime.

// 3 types [object, array, function]

let hobbies = ["reading", "gaming"]; // array
let address = { city: "New York", zip: 10001 }; // object
const myfunc = function(){
    console.log("Hello, World!");
}
myfunc();
