//  Truthy and Falsy - In javaScript, every value can be treated as either truthly or falsy when used in a condition such as if.

// Truthy - A value that is treated as true when used in a condition is called a truthy value. 

// Falsy - A value that is treated as false when used in a condition is called a falsy value.

// Truthy                            Falsy

//  true                             false  
//  any number(except 0)             0
//  "hello"                         -0
//  []                               ""
//  {}                               null
//  "0"                              undefine
//                                   NaN



let b = "Ami";
if(b){console.log("Truthy");}            // "Ami" is a non-empty string -> Truthy 
if(0){ console.log("never runs");}       // 0 is falsy
if(""){ console.log("never runs");}      // ""(empty string) is falsy
if([]){ console.log("runs!");}           // an empty array is Truthy
if({}){ console.log("runs!");}           // an empty object is Truthy

let name;                                // undefined -> falsy
if(!name){ console.log("Plese enter a name");}        // ! filps it: a common pattern

