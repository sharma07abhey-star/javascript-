// const tinderuser = new Object()  //singleton object


// this is a non-singleton object in which we have a flat structure
const tinderuser = {}
tinderuser.id = "123abc";
tinderuser.name = "Abhey";
tinderuser.age = 18;
tinderuser.isloggedin = true;

console.log(tinderuser);

// this is a non-singleton object in which we have a nested 
// object for the username
const regularuser = {
    email: "abhey@example.com",
    username: {
        firstname: "Abhey",
        lastname: "Sharma"
    }
}

console.log(regularuser)
console.log(regularuser.username.firstname);

// merging objects
const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};

const mergedObj = {...obj1, ...obj2};
// spread operator is used to merge two or more objects
console.log(mergedObj); 

// nesting objects, in this way we can group related data
const obj3 = {obj1 , obj2 };
console.log(obj3);

// methods in objects
console.log(Object.keys(mergedObj));
console.log(Object.values(mergedObj));
console.log(Object.entries(mergedObj));
// entries returns an array of key-value pairs