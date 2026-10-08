// Destructuring is an JavaScript feature that allows us to extract values from arrays or properties from objects and store them in varibles easily.
// there are two main types
// 1. Array destructuring
// 2. Object destructuring

// Array destructuring

let a = [ 1, 10, 30]

console.log(a[1])                           // Normal way to access an array value.

const[a1,a2] = a                            // Destructuring the array and assigning its values to variables.

console.log(a1)                             // Accessing the destructured value stored in a1.

// Object destructuring

let student = {
    name: "Amir",
    class: "VI",
    roll: 25
}

console.log(student.name)                   // Normal way to access an object value (object.object key). 

const {name,class: Myclass} = student       // Destructuring the object and assigning its values to variables((class: Myclass) class value is assign to Myclass).

console.log(name,Myclass)                   // Accessing the destructured value stored in name, Myclass






// Spread- The spread operator(...) is used to spread or unpack the array elements of an array or properties of an object into another arrays, object or function.
// What problem does it solve?
// Without spread, when we want to copy or combine arrays/objects, we may have to do it manually or use methods that are less convenient.

// sprade array example -

let fruits = ["apple", "banana", "mango"]
let vegetables =["carrot", "potato", "onion"]

let food = [...fruits,...vegetables]

console.log(food)                           // ["apple", "banana", "mango", "carrot", "potato", "onion"]

// sprade object example -

let Student = {
    name: "Basudev",
    age: 24,
}

let courseDetails = {
    course: "BCA",
    semester: 5
}

let studentInfo = {
    ...Student,
    ...courseDetails
}

console.log(studentInfo)                    // {    name: "Basudev", age: 24, course: "BCA", semester: 5}