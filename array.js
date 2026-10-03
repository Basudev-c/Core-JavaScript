// Problems - Without arrays, storing many related values would require creating separate variable for each value, making the code long and difficult to manage.
// Definition - " An array is a data structure used to store multiple values in a single variable. "

// Array methods: the tools you use every single day.

//   Method                      What it does                           Example                Result

//  push(x)                  Add to the END                          [1,2].push(3)            [1,2,3] 
//  pop()                    Remove from the END                     [1,2,3].pop()            [1,2] (returns 3) 
//  unshift(x)               Add to the START                        [2,3].unshift(1)         [1,2,3] 
//  shift()                  Remove from the START                   [1,2,3].shift()          [2,3] (returns 1) 
//  indexOf(x)               Where is x? (-1 if missing)             [5,7,9].indexOf(7)       1
//  includes(x)              Is x there?                             [5,7,9].includes(8)      false 
//  slice(a, b)              Copy from a up to (not including) b     [1,2,3,4].slice(1,3)     [2,3] original unchanged 
//  splice(i, n)             Remove n items from index i             [1,2,3,4].splice(1,2)    [1,4] original changed   
//  join(sep)                Array to String                         ["a","b"].join("-")      "a-b" 
//  length                   How many items (not a method)           [1,2,3].length            3


const marks = [10,30,40,70,30,["a",false]]
console.log(marks[0]);                    // 10 (the indexing is start from 0)
console.log(marks[5]);                    // ["a", false]
console.log(marks[5][1]);                 // false ( indexing array inside an array)
console.log(marks.length);                // 6
console.log(marks[marks.length-1]);       // last element

marks[1] = 45;                            // update by index
console.log(marks)

// Example 1- Read items

let fruit = ["apple","mango","kiwi"]

console.log(fruit[0]);                    // apple
console.log(fruit[2]);                    // kiwi
console.log(fruit.length);                // 3
console.log(fruit[fruit.length-1]);       // kiwi

// Example 2- Change, add and remove on previous array

fruit[1] = "banana";                      // Change index 1 (banana with mango),["apple","banana","kiwi"]
fruit.push("grapes");                     // Add to the end ["apple","banana","kiwi","grapes"]
fruit.pop();                              // Remove the last enlement ["apple","banana","kiwi"]
fruit.unshift("fig");                     // Add to the start ["fig","apple","banana","kiwi"]
fruit.shift();                            // Remove the first ["apple","banana","kiwi"]

console.log(fruit);                       // ["apple","banana","kiwi"]
console.log(fruit.includes("kiwi"));      // trues

// Example 3- Loop through an array with for...of

let pets = ["dog","cat","parrot"]

for(let pet of pets){
    console.log(`I like my ${pet}`)       // I like my dog, I like my cat, I like my parrot
}

// Example 4- Loop with index (normal for)

for(let i = 0; i < pets.length; i++){
    console.log(`${i}: ${pets[i]}`)       // 0: dog, 1: cat, 2: parrot
}

// Example 5- Add up number in an array

let price = [20,50,30]
let total = 0;

for (let p of price){
    total += p;
}

console.log(total);                       // 100

// Tasks

// 1.1- First and last food

let foods = ["pizza","dosa","pasta","momos","biryani"];

console.log(foods[0]);                     // pizza
console.log(foods[foods.length-1]);         // biryani

// 1.2- Add one more

foods.push("idle");                        // ["pizza","dosa","pasta","momos","biryani","idli"]
console.log(foods.length);                 // 6

// 1.3- Print every food

for(let food of foods){
    console.log(food)                      // pizza,dosa,pasta,momos,biryani,idli
}

// 1.4- Total of an array

let num = [4,9,2,7]
let Total = 0;
for(n of num){
    Total += n;
}

console.log(Total)                         // 22


