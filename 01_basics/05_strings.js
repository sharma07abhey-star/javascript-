let name = "Abhey";
let city = "New York";
console.log(`hello my name is ${name} and i live in ${city} `)

const newstr = name.substring(1, 4);  // indexing 
const newstr2 = name.slice(1, 4);  // slicing

const newstr3 = name.trim();  // trimming (removes extra spaces)
// string methods 

console.log(name[2]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes("hey"));
console.log(name.startsWith("Ab"));
console.log(name.endsWith("ey"));
console.log(name.charAt(0));
console.log(name.indexOf("b"));
console.log(name.lastIndexOf("e"));

console.log(newstr);
console.log(newstr2);

console.log(newstr3); // trim removes extra spaces 

name = name.replace("Abhey", "Parneet");
console.log(name); 

// replace does not change the original string
// because strings are immutable in javascript