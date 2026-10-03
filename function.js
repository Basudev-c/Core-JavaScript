// A function is a reusable block of code designed to perform a specific task. It runs when it is called.


// Way 1: function declartion

function findSum(a,b){              // a, b = parameters
    console.log(a + b);             // prints, does not give back
    return a + b;                   // give the value back
}

const sum = findSum(3,4);           // 3,4 = arguments
console.log(sum);                   // 7


// Way 2: variable-based function

const findsum = function (a,b){
    return a+b;
}

console.log(findsum(3,4));         // 7
const print = console.log;         // a function can live in a variable
print(12);                         // 12


// Way 3: arrow function

const FindSum = (a,b) => {
    return a + b;
}
console.log(FindSum(4,4))

const double = (n) => n * 2;      // one line: return is automatic