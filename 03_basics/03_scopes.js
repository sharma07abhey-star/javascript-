// scopes in javascript 

// 1. block scope

let a = 10;
if (true) {
    let b = 20;
    var c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
// in this block scope, we can access a, b and c but outside the block scope 
// we can only access a and c because b is declared with let which is block 
// scoped and c is declared with var which is function scoped.


// 2. global scope

console.log(a);

// console.log(b); // this will throw a ReferenceError because b is not defined

console.log(c);


// that is why we do not use var to declare variables in block scope. 


// 3. function scope

function test() {
    var d = 40;
    let e = 50;
    console.log(d);
    console.log(e);
}
test();

// console.log(d); // this will throw a ReferenceError because d is not defined
// it is defined inside test function which means it is not accessible outside the function

// console.log(e); // this will also throw a ReferenceError because e is not defined


function one(){
    const username = "Abhey"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}

one();