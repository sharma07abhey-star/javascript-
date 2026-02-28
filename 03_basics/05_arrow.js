// --- Normal Function ---
function add(a, b) {
  return a + b;
}

// --- Arrow Function ---
// Shorter syntax with implicit return

const addArrow = (a, b) => a + b;

console.log(add(5, 3));      // Output: 8
console.log(addArrow(5, 3)); // Output: 8


// ---------*---------
const person = {
  name: "Abhey",
  
  // Normal Function
  sayNameNormal: function() {
    console.log("Normal:", this.name); 
    // here this refers to the 'person' object
  },

  // Arrow Function
  sayNameArrow: () => {
    console.log(`${this.name} , welcome to website`);
    // here this refers to the global object (window in browsers)
    // which means that 'name' is not defined in the global scope
  }
};

//  In arrow function, 'this' does not refer to the 'person' object .

person.sayNameNormal(); // Output: "Normal: Abhey" (Refers to the 'person' object)
person.sayNameArrow();  // Output: "Arrow: undefined" (Refers to global window/scope, NOT 'person')