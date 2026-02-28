// ---- Immediately Invoked Function Expression (IIFE) ----

// Normal function
function mac(){
    console.log("DB Connected");
}
mac();

// Immediately Invoked Function Expression (IIFE)
(function max() {
    let dbConnection = "DB Connected";
    console.log(dbConnection);
})();

// We use IIFE to avoid polluting the global scope because
// variables declared inside an IIFE are not accessible from outside
// which means that they won't interfere with other variables in the global scope

// IIFE inside arrow function
(() => {
    let dbConnection = "DB Connected";
    console.log(dbConnection);
})();