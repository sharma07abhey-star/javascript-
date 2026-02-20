// for in loop on array
const arr = [ 1,2,3,4,5,6,7,8,9];
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
console.log("\n")

// for in loop on strings
const greeting = "hi parneet";
for (const index in greeting) {
    console.log(`Index: ${index}, Value: ${greeting[index]}`);
}

// for in loop on objects
const person = {
    name: "Abhey",
    age: 18,
    occupation: "Good Person"
};
for (const key in person) {
    console.log(`Key: ${key}, Value: ${person[key]}`);
}