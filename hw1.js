/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


/* 1) Strings - A string is a collection of alphanumeric characters
   2) Numbers - Are numbers, cannot be devided by a comma, but can have decimals
   3) Booleans - Can only take on 2 values: true or false
   4) Null - has no value at all
   5) Undefined - has not been defined just yet

*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable is a value that can change, depending on conditions or on information passed to the program. */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let subtraction = 12 - x;

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "john";
console.log(name1 === name2);

console.log((name1) === (name2.toLowerCase()));

/* EXERCISE 8
 Create a variable named y, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let y = 3;

if (y===1){
    console.log("one");
    } else if (y===2){
        console.log("two");
        } else if (y===3){
            console.log("three");
            } else if (y===4){
                console.log("four");
                } else if (y===5){
                    console.log("five");
                    } else if (y===6){
                        console.log("six");
                        } else if (y===7){
                            console.log("seven");
                            } else if (y===8){
                                console.log("eight");
                                } else if (y===0){
                                    console.log("zero");
                                    } else if (y===9) {
                                        console.log("nine");
                                    }



/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/


let validDiscount = false;

const getDiscount = validDiscount ? "30$" : "0$";
console.log(getDiscount);