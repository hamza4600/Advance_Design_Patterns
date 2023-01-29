
// meaning of ?? in jaavscript is nullish coalescing operator , it is used to return the right hand side operand when the left hand side operand is null or undefined , otherwise it returns the left hand side operand

// example

const a = null;
const b = undefined;
const c = 0;
const d = false;
const e = 'Hamza';

console.log(a ?? 'default value');
console.log(b ?? 'default value');
console.log(c ?? 'default value');
console.log(e ?? 'default value'); 



// And 

// meaning of && in javascript is logical and operator , it is used to return the right hand side operand when the left hand side operand is true , otherwise it returns the left hand side operand

// example
let x  = 10;
let y = 20;

console.log(x && y); // 20
console.log(y && x); // 10
console.log (x && 0); // 0

console.log(x < 10 && y > 20); // false   
console.log(x <= 10 && y >= 20); // true


// && is used to check if the value is true or false
// ?? is used to check if the value is null or undefined
// !! is used to check if the value is true or false

// !!

// meaning of !! in javascript is logical not operator , it is used to return the opposite of the operand

// example

console.log("==== !! Operator"); // true
console.log(!!true); // true
console.log(!!x); // true
console.log(!!y); // true
console.log(!!0); // false
console.log(!!''); // false
console.log(!!null); // false

