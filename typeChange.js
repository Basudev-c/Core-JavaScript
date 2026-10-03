// Type change usually means type conversion - changing a value from one data type to another.
// there are two main types,

// 1. Implicit - implicit type conversion automatically changes the type. 
// Example-

const a = "9";
const b = "hi";

console.log(9+6);      // 15    number + number = number
console.log(a+6);      // "96"  string + number = string
console.log(a+b);      // "9hi" string + string + string

// If either side of + is string, the result is a string.
// With -,*,/ javaScript converts to number.


// 2. Explicit - In explicit we manually change the type using in-built functions().
//Example- Number(),String(),Boolean

const anum = "11";
let newVal = parseInt(anum);    // expicit: "11" -> 11
console.log(newVal+1);          // 12
console.log(Number("3.5"));     // 3.5
console.log(String(42));        // "42"