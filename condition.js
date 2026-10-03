// Conditional statement used to execute different code depends on whether a condition is true or false.

// 1. if      - It is used to execute a black og code only when  specified condition is true.
// 2. else if - It is used when we want to check another condition it the previous if() condition is false.
// 3. else    - It is execute when previous both conditon is false.
// Examples-


// Check the person is eligible for vote or not

const age = 16;
const pass = true;
if(age >= 18 && pass){
    console.log("You can vote");
}else{
    console.log(`You have to wait ${18-age} more years`)
}


// Check the number is even or not

const num = 34;

if(num%2 === 0){
    console.log(`${num} is Even`)
}else{
    console.log(`${num} is Odd`)
}


//  find greatest number from a,b,c

const a = 34;
const b = 94;
const c = 74;

if(a >= b && a >= c){
    console.log(`${a} a is greatest`);
}else if(b >= c){
    console.log(`${b} b is greatest`)
}else{
    console.log(`${c} c is greatest`)
}


// Assign a grade

const marks = 82;

if(marks < 0 || marks > 100){
    console.log("Invalid Marks")
}else if(marks >= 90){
    console.log("A")
}else if(marks >=80){
    console.log("B")
}else if(marks>=70){
    console.log("C")
}else if(marks >= 60){
    console.log("D")
}else if(marks < 60){
    console.log("fail")
}else{
    console.log("Invalid MarksS")
}



