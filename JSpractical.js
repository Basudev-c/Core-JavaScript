// Question 1: Variables, Data Types & Operators 

// Create variables for a student's name, age, course fee, and whether the fee is paid. Print one sentence using a template literal.
// Then calculate the student's age after 5 years and the remaining fee if 40% has already been paid.

// Rules: Use const wherever reassignment is not required. Use arithmetic operators and typeof at least once.

const name = "Basudev";
let age = 24;
const courseFee = 42000;
const isPaid = true;

console.log(`Student name is ${name}, age: ${age}, Course Fee: 42000 is paid ${isPaid}`);

age += 5
const paid40Persent = (40/10) * (42000/10)
const remainingFee = courseFee - paid40Persent

console.log(`Name ${name} Course fee: ${courseFee} paid ${paid40Persent} and remaining fees is ${remainingFee}`)


// Question 2: Conditionals & Truthy/Falsy Values

// Write a program that receives marks, attendance, and hasSubmittedProject. 

// Return: -  Eligible for certificate if marks are at least 60, attendance is at least 75, and the project is submitted.
//         - Conditional approval if marks are at least 60 and attendance is at least 75 but the project is not submitted.
//         - Not eligible otherwise.

// Also handle invalid marks below 0 or above 100.

const marks = 64;
const attendance = 80;
const projectSubmitted = false;

if(marks < 0 || marks > 100 || attendance < 0 || attendance > 100){
    console.log(`Invalid marks or attendance`);
}else if(marks >= 60 && attendance >= 75 && projectSubmitted){
    console.log(`Eligible for certificate`);
}else if(marks >= 60 && attendance >= 75 && !projectSubmitted){
    console.log(`Conditional Approval`)
}else{
    console.log(`Not Eligible`)
}


// Question 3: Functions, Parameters & Default Values 

// Create calculateBill(price, quantity, discountPercent = 0, taxPercent = 18) that returns an object 
// containing subtotal, discountAmount, taxAmount, and finalAmount. 

// Call it with at least three different argument sets. Do not print from inside the function; return the result and print it outside

const calculateBill = (price,quantity,discountPersent = 0, taxPercent = 18) => {
    subTotal = price*quantity;
    discountAmount = (subTotal/10)*(discountPersent/10)
    taxAmount = subTotal*(taxPercent/100)
    finalAmount = subTotal + discountAmount + taxAmount

    return {
        subTotal,
        discountAmount,
        taxAmount,
        finalAmount
    }
}
console.log(calculateBill(10,5))


// Question 4: Strings, Arrays & Basic Array Methods

// Given const students = [' aniket ', 'PRIYA', 'rohit', ' Neha'];
// Create a new array where every name is trimmed and converted to proper capitalization. Then:
// 1. Add Aman to the end.
// 2. Remove the first student.
// 3. Check whether Rohit exists.
// 4. Convert the final array into a comma-separated string.

// Do not modify individual names manually.

const students = [" aniket ", "PRIYA", "rohit", " Neha"];

const trimmedstudents = students.map(students => students.trim())
const newStudents = trimmedstudents.map(trimmedstudents => trimmedstudents.toUpperCase())
console.log(newStudents)

newStudents.push("Aman");
newStudents.shift();
console.log(newStudents.includes("ROHIT"))
const teamMembers = newStudents.join()
console.log(newStudents)
console.log(teamMembers)


// Question 5: Objects, Destructuring, Spread & Rest 

// Create a student object containing name, age, course, skills (array), and address (nested object). Then:

// 1. Destructure name and course.
// 2. Rename age to studentAge while destructuring.
// 3. Create a new object with the course changed to Advanced Full Stack + AI without mutating the original.
// 4. Add a skill using spread without mutating the original skills array.
// 5. Use rest syntax to collect remaining top-level properties.

const student1 = {
    Name: "Snop",
    Age: 13,
    Course: "BCA",
    skill: ["html","CSS","JavaScript","Canva"],
    address: {
        address: "Sundernagar",
        pin: 832107,
        city: "Jamshedpur"
    }
}
// const Name= student1.name
// const Course= student1.course

const {Name, Course, Age: myAge} = student1

console.log(Name)
console.log(Course)
console.log(student1)


