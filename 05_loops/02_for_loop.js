// outer loop and inner loop

for (let i = 0; i < 5; i++) {
    console.log("Outer loop:", i);
    for (let j = 0; j < 3; j++) {
        console.log(" Inner loop:", j);
    }
}
// multiplication table using loop 

const val = 9;
for (let i = 1;i<11;i++){
    console.log(`${val} X ${i} = ${val*i}`);
}

// Loops on Array 

let superheroes = ["ironman","batman","thor","black widow","wanda"]
for (let i = 0;i<superheroes.length;i++){
    element = superheroes[i];
    console.log(element);
}