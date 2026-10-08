// Problem - " In programming without scope, variables from different parts of a program could interfere with each other and cause unexpected result "

let a = 10;
if(a == 10){
    let b = 13;
    console.log(a);         // 10 (a can be access here because 'a' is was declared before the if block).
}
console.log(a);             // 10 (a can be access here because 'a' is was declared before the if block).
console.log(b);             // Error: b is not defined, 'b' was declared inside the if block.

// definition - Scope means the are or part of program where a variable can be accessed or used.

const nub = 12;                // outer scope
const mySum = (n = nub) => {   // n get 12 if nothing is passed
    const za = 13;             // inner scope
    return nub + za + n;
}
console.log(mySum(19));        // 12 + 13 + 19 = 44
console.log(mySum());          // 12 + 13 + 12 = 37
console.log(nub,za);           // Error: za is not defined, 'za' was declared inside the mySum function block.

