// Problem - Without objects, managing related data with many variables becomes difficul. So, we use object to keep related data together.
// definition - An object is a collection of related data and function stored together using key and value pairs.

const student = {
    name : "Basudev",
    roll : 45,
    class: "BCA",
    marks: {eng: 30, maths: 40, science: 20}
}
const address ={
    address : "Sundernagar",
    city : "Jamshedpur",
}

console.log(student.roll);                                  // 45
console.log(student.marks.maths);                           // 40 (nested object)
console.log(student["name"]);                               // Basudev
student.roll = 20;                                          // update value
student.city = "Jamshedpur";                                // add new key
delete student.class;                                       // delete class key
console.log(student);                                       // print student{} object

// Methods in object

console.log(Object.keys(student));                          //  ["name","roll","marks","city"]
console.log(Object.values(student));                        // ["Basudev",20,{eng: 30, maths: 40, science: 20},"Jamshedpur"]
console.log(Object.entries(student));                       // Converts the object into an array of key-value pairs: [name, "Basudev"],[roll, 20],[marks, {eng: 30, maths: 40, science: 20}]
console.log(Object.assign(student,address));                // Copy properties from address into student.
console.log(Object.fromEntries(Object.entries(student)));   // converts that array back into an object: [name: "Basudev", roll: 20, marks: {eng: 30, maths: 40, science: 20}, city: "Jamshedpur", address: "Sundernagar" ]
console.log(Object.freeze(student));                        // Prevent changes to an object.
console.log(Object.seal(student));                          // Prevent changes to adding and deleting but we can still change the value of existing properties.
console.log(Object.hasOwn(student, "name"));                // Check whether a properties belong to object or not.

// Example 1- Make an object and read from it

let Student = {
    name: "Ram",
    age: 16,
    isPresent: true,
}

console.log(Student.name);                                  // Ram
console.log(Student.age);                                   // 16
console.log(Student["name"])                                // Ram

// Example 2- Change and add values

Student.age = 17;                              
Student.city = "Jamshedpur";
console.log(Student)                                        // {name: "Ram", age: 17, isPresent: true, city: "Jamshedpur"}

// Example 3- A function inside an object (method) 

let dog = {
    name: "Tommy",
    sound: "Woof",
    speak: function(){
        console.log(`${this.name} says ${this.sound}`)      // Tommy say Woof
    }
}
dog.speak();

// Example 4- Loop through an object's keys

for (let key in Student){
    console.log(`${key}: ${Student[key]}`)                  // name: Ram, age: 17, isPresent: true, city: Jamshedpur
}

// Example 5- An arraly of object (very common!)

let team = [
    {name: "Asha", role: "Captain"},
    {name: "Karan", role: "Keeper"}
]

console.log(team[0].name)                                   // Asha

for(let player of team){
    console.log(`${player.name} is the ${player.role}`)     // Asha is th Captain, Karan is the Keeper
}

// Simple Tasks

// 1.1- A book object

let book = {
    title: "Ikigai",
    author:"Hector Garcia",
    pages: "208"
}
console.log(book);                                          // {title: "Ikigai", author: "Hector Garcia", pages: 208}

// 1.2- Change and add

book.pages = 300;
book.year = 2017;

console.log(book)                                           // {title: "Ikigai", author: "Hector Garcia", pages: 300, year: 2017}

// 1.3- A describe() method

let book2 = {
    title: "Atomic Habits",
    author: "James Clear",
    page: 320,
    discribe: function(){
        console.log(`${this.title} by ${this.author}`)      // Atomic Habits by James Clear
    }
}

book2.discribe()

// 1.4- A class list

let player = [
    {name: "Amit"},
    {name: "Basudev"},
    {name: "Chris"}
]

for (let p of player){
    console.log(p.name)                                     // Amit, Basudev, Chris
}