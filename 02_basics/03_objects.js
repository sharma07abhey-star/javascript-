// object literals
const mysym = Symbol("key1");

const person = {
  name: "Abhey",
  [mysym]:"mykey1",
  // mysym is in brackets because symbols are not enumerable
  age: 18,
  city: "New York",
  country: "USA"
  
};
person.email = "abhey@chatgpt.com"
Object.freeze(person); //freeze the object so that no new properties can be added
// this means that the person object is now immutable
person.age = 19; // this will not change the age property because the object is frozen 

console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person[mysym]);