// NULLISH COALESING OPERATOR (??)

const a = null;
const b = 42;
const c = a ?? b;
console.log(c); // 42


const val1 = 18;
const val2 = 45;
const val3 = val1 ?? val2;
console.log(`the greatest of all time is ${val3}`);

// this operator returns the value of the right operand when the left operand is null or undefined
// and if the left operand is not null or undefined, it returns the left operand