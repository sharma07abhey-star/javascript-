// truthy values
// true , "hello", 42, -1, 3.14, "false", [], {} ,function(){}

// falsy values
// false, "", 0, -0, NaN, null, undefined , Bigint 

const isloggedin = 42;
if(isloggedin){
    console.log("User is logged in");
}

const isnotloggedin = 0;
if(isnotloggedin){
    console.log("User is not logged in");
}else{
    console.log("User is logged out");
}

// The truthy and falsy values are by which JavaScript determines the execution of code blocks.