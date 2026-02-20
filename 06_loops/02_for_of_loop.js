// for of loop on array
const arr = [ 1,2,3,4,5,6,7,8,9];
for (const num of arr) {
    console.log(num);
}
console.log("\n")

// for of loop on strings
const greeting = "hi parneet";
for(const num of greeting){
    console.log(num);
}

// for of loop on objects
const person = {
    name: "Abhey",
    age: 18,
    occupation: "Good Person"
};
for (const key of Object.keys(person)) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
}