// array and array methods

let myarr = [ 44 , 55 , 66 , 77, 88, 99];
const myheroes = ['Ironman', 'Thor', 'Hulk', 'Spiderman'];
console.log(myarr[1]);
console.log(myheroes[2]);

const myarr_2 = new Array(1, 2, 3, 4, 5);
console.log(myarr_2);

myarr_2.push(6);
console.log(myarr_2);
// the push method adds a new element to the end of an array and returns the new length of the array.

myarr_2.pop();
console.log(myarr_2);
// the pop method removes the last element from an array and returns that element.

console.log(myarr_2.includes(3));
console.log(myarr_2.includes(10));
console.log(myarr_2.indexOf(4));
console.log(myarr_2.lastIndexOf(4));
console.log(myarr_2.length);
console.log(myarr_2.reverse());
console.log(myarr_2.sort());
console.log(myarr_2.join(' - '));

// the difference in slice and splice is that slice returns 
// a new array while splice modifies the original array 
// and can add or remove elements

console.log(myarr_2.slice(1, 4));  
console.log(myarr_2.splice(1, 4)); // modifies the original array and removes elements
console.log("A",myarr_2);
