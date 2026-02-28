const marvel_heroes = ['Ironman', 'Thor', 'Hulk', 'Spiderman']; 
const dc_heroes = ['Batman', 'Superman', 'Wonder Woman', 'Flash'];

marvel_heroes.push('Black Widow');
dc_heroes.push('Green Lantern');

console.log(marvel_heroes);
console.log(dc_heroes);

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

const combined_heroes = marvel_heroes.concat(dc_heroes);
// .concat is used to merge two or more arrays
console.log(combined_heroes);

// rare case method
const another_array = [1,2,3,[2,3,5,[4,5,75,4,[45,34,55]]]]
const real_another_array = another_array.flat(Infinity);
// flat method creates a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth
console.log(real_another_array);

// creating array from name
console.log(Array.from("abhey"));

console.log(Array.from({name:"abhey"}));
  // returns empty array because Array.from() only works on iterable objects
  // and the object {name:"abhey"} is not iterable

console.log(Array.of("abhey","parneet","sharma","virk"));
