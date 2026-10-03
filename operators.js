// 1. Comparison operators - They are use to compare two values. The result is always a boolean value: true or false.

// Operator          Meaning                        Example          Result                 

//  >=              greater than or equal to        23>=12             true
//  <=              less than or equal to           11<=53             false
//  <               less than                       38<23              false
//  >               greater than                    75>64              true
//  ===             equal, same type                "4"===4            false
//  !==             not equal                       "4"!==4            true
//  ==              equal to                        "3"==3             true



// 2. Logical operators - This is used to combine multiple conditions.

// Operator           Name                  Meaning                    

//  &&                AND                 both conditions must be true
//  ||                OR                  At least one conditions must be true
//  !                 NOT                 Reverse the result true/false

// Check the person is eligible for vote or not using comparison and logical operators

const age = 16;
const pass = true;
if(age >= 18 && pass){
    console.log("You can vote");
}else{
    console.log(`You have to wait ${18-age} more years`)
}