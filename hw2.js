// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

isMale = false;

function gender(isMale) {
    return (isMale ? 'male' : 'female');
  }

  console.log(gender(isMale));
  
/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let varx = 8;
let vary = 3;

if (vary === 8 || varx === 8 || varx+vary === 8 || vary-varx === 8 || vary-varx === 8) {
    console.log("condition is true");
} else {
    console.log("condition is false");
}


/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let concatenation = "Hello " + "World!"; 
console.log(concatenation);

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let x= 0;
var y=10;
var z= 4;

if (x>y && x>z)
{
    if (y>z)
    {
        console.log(x + ", " + y + ", " +z);
    }
    else
    {
        console.log(x + ", " + z + ", " +y);
    }
}
else if (y>x && y >z)
{
    if (x>z)
    {
            console.log(y + ", " + x + ", " +z);
    }
    else
    {
            console.log(y + ", " + z + ", " +x);
    }
}
else if (z>x && z>y)
{
    if (x>y)
    {
        console.log(z + ", " + x + ", " +y);
    }
    else
    {
        console.log(z + ", " + y + ", " +x);
    }
}      

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let average = (x + y)/2
console.log(average);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let stringA = "hello"; 
let stringB = "How are you";

if (stringA.length >= stringB.length) {
    console.log("String A wins", stringA.length);
} else {
    console.log("String B wins:", stringB.length);
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let var3 = "test";
console.log(typeof var3);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let var4 = 0.2;
let var5 = 400;

console.log(var4 * var5);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let number = 2;

const result = (number % 2  == 0) ? "even" : "odd";
console.log(result);