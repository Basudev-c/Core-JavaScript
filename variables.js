// Definition - A variable is a named container used to store a value. 


// Variables Rules

// 1. Variable name are case sensitive "a" & "A" is different.
// Example-

const firstName = "Basudev";

console.log(firstName)   // Basudev
//console.log(FirstName)   //Error: FirstName is not define (case sensitive "f" and "F" both are different)


// 2. A JavaScript identifier can start with a letter, _, or $. It cannot start with a digit.
// Example-

const myName = "Ram"     //valid
const _class = "BCA"     //valid
const $price = 189;      //valid
const 1address = xyz;   //invalid (Variable starts from number)

// 3.Only letters, digits, underscore(_) and $ is allowed.(not even space)
// Example-

const Roll no = 21;      //invalid(space is used) 
const Roll.no = 32;      //invalid(fullstop is used)
const rollNo  = 45;      //valid 


// 4.Reserved words cannot be variable  name.
// Example-

const class = "Hi"     // Error: 'class' is not allowed as a variable delaration name.


//-----------------------------xx---------------------------xx---------------------------------xx----------------------------------

// var, let and const

// In JavaScript we don't use datatype in front of variable like c,c++ and java etc.
// We use var, let or const inplace of datatype.

// 1. var - var can be re-declared and updated. It is function-scoped, not block-scoped.
//        - It is the old way, We don't use it.
//        - var ignores the {} block, so a variable can leak and cause confusing bug.


// 2. let - let cannot be re-declared in the same scope but can be updated.
// example-

let name = "Ami"
let name = "Sid"; //  Error: Identifier 'name' has already been declared.
name = "Basu";

console.log(name);  // Basu 


// 3. const - const cannot be re-declared or reassigned. Use const when the variable should not be reassigned.

const school = "xyz";
school = "abc";     //Error: Assignment to constant variable.