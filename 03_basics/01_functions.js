// functions to add two numbers
function add(number1,number2){
    return (number1 + number2);
}
const result = add(5,4);
console.log(result);

// the problem occurs here when 
console.log(add(5,"a"));
console.log(add("a",null));

// function login user message
function loginuser(username){
    if(username == undefined){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginuser("abhey"));
console.log("\n");

console.log(loginuser()); //undefined because username is not provided