// 1. Your first line of code

// 1.1 Print your name

console.log("Basudev Mardi");

// 1.2 Print your age

console.log("age : 25");

// 1.3 Print 12 x 4

console.log(12*4);

// 1.4 add comment 

// print my name
console.log("Basudev Mardi");


// 2. Variables

// 2.1 Store and print your name

const myName = "Basudev"
console.log(myName);

// 2.2 Change your age

let age = 24;
console.log(age);
age  += 1;
console.log(age);

// 2.3 Break A const on purpose

const school = "ABC School"
//school = "XYZ School"       // Error: assign to const variable

// 2.4 Add two variable

let a = 7;
let b = 3;
let sum = a + b;
console.log(sum);


// 3. Data types

// 3.1 Make one of each type

let city = "Jamshedpur";
let price = 10;
let isFollow = false;

// 3.2 Check each type

console.log(typeof city);
console.log(typeof price);
console.log(isFollow);

// 3.3 Quotes trick

console.log(typeof "5");
console.log(typeof 5);

// 3.4 An empty box

let x;
console.log(x);


// 4. Operators

// 4.1 power

console.log(2**8);

// 4.2 Is 17 even

const n = 17;

if(n % 2 === 0){
    console.log(`${n} is even`);
}else{
    console.log(`${n} is odd`)
}

// 4.3 Text 5 VS Number 5

console.log ("5" === 5)

// 4.4 Count 

let count = 0;
count ++;
count ++;
count ++;
console.log(count);



// 5. String

// 5.1 Full name with  template literal

let first = "Basudev";
let last  = "Mardi"

console.log(`${first} ${last}`)

// 5.2 Count the letters

console.log(first.length)

// 5.3 Capital letters

console.log("javascript".toUpperCase());

// 5.4 First letter

console.log(first[0])



// 6. Condition (if / else)

// 6.1 Adult or minor

const Age = 20;

if(Age >= 18){
    console.log("Adult")
}else{
    console.log("Minor")
}

// 6.2 Positive, negative or zero

let num = -4;

if(num > 0){
    console.log("Positive NO")
}else if(num < 0){
    console.log("Negative NO")
}else{
    console.log("Zero")
}

// 6.3 Ever or Odd

let Num = 7;

if(Num % 2 === 0){
    console.log(Num,"is even number")
}else{
    console.log(Num,"is odd number")
}

// 6.4 Fruit colour with switch

let fruit = "banana";

switch(fruit){
    case "apple":
        console.log("red")
        break;
    case "banana":
        console.log("yellow")
        break;
}

// 7. Loops

// 7.1 print 1 to 10

for(let i=1; i<=10; i++){
    console.log(i)
}

// 7.2 Even number 1 to 20

for (let i=2; i<=20; i++){
    if(i%2 === 0){
        console.log(i)
    }
}

// 7.3 5 times table

for(let i=1; i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`)
}

// 7.4 Total of 1 to 100

let total = 0;
for(let i=1; i<=100;i++){
    total += i;
}
console.log(total)

//  7.5 Count

let no = 10;

while(no >= 1){
    console.log(no)
    no--;
}
console.log("Blast off!")

// 7.6 Stop at 6

for(let i=1; i<=10; i++){
    if(i===6){
        break;
    }
    console.log(i)
}

// 8. Function

// 8.1 sayHi()

function sayHi(){
    console.log("hi!");
}
sayHi()

// 8.2 multiply(a,b)

function multiply(a,b){
    return a*b;
}
console.log(multiply(4,5))

// 8.3 isEven(n)

function isEven(n){
    if(n%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(isEven(6))

// 8.4 toCelsius(f)

const toCelsius = (f) => (f - 32) * 5 / 9;

console.log(toCelsius(212))

// 8.5 biggest (a,b,c)

const A = 34;
const B = 94;
const C = 74;

if(A >= B && A >= C){
    console.log(`${A} a is biggest`);
}else if(B >= C){
    console.log(`${B} b is biggest`)
}else{
    console.log(`${C} c is biggest`)
}

// 9. Array

// 9.1 First and last food

let foods = ["pizza","dosa","pasta","momos","biryani"]

console.log(foods[0])
console.log(foods[foods.length-1])

// 9.2 Add one more

foods.push("idli")
console.log(foods.length)

// 9.3 Print every food

for(let food of foods)
console.log(food)

// 9.4 Total of an array

let numb = [4,9,2,7]
let Total = 0;

for(let n of numb){
    Total +=n;
}
console.log(Total)

// object

// 10.1- A book object

let book = {
    title: "Ikigai",
    author:"Hector Garcia",
    pages: "208"
}
console.log(book);                                         

// 10.2- Change and add

book.pages = 300;
book.year = 2017;

console.log(book)                                           

// 10.3- A describe() method

let book2 = {
    title: "Atomic Habits",
    author: "James Clear",
    page: 320,
    discribe: function(){
        console.log(`${this.title} by ${this.author}`)    
    }
}

book2.discribe()

// 10.4- A class list

let player = [
    {name: "Amit"},
    {name: "Basudev"},
    {name: "Chris"}
]

for (let p of player){
    console.log(p.name)                                    
}


// Array methods

// 11.1- Map: time 10

let xNo = [3,6,9]
let noX10 = xNo.map(m => m*10)
console.log(noX10)

// 11.2- filter: bigger than 7

let value = [5,12,8,20,1]
let valueBig = value.filter(v => v > 7)
console.log(valueBig)

// 11.3- find: 