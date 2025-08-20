
// // Lesson 1
// // let js ="amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js)

// // console.log("== VARIABLES ==")

// // let firstName = "Jonas";

// // console.log(firstName);

// // let age = 30;
// // console.log(age)
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);


// // //don't do this:
// // //birthYear = 2000;

// // const PI = 3.1415;
// // console.log(PI);

// // //old version
// // var job = "programmer";
// // job = "vetmed";
// // console.log(job); 

// // //modern js uses const and let
// // //always start with const (by default)
// // //let when changing the value

// // const country = "Philippines";
// // const language = "Filipino"

// // age = 25;
// // age = 26; // this will change


// // // good var names
// // // let firstName
// // // let myCurrentJob
// // // const PI

// // // bad names
// // /** let 3years
// // let jonas&matilda **/

// // console.log("== DATA TYPES ==");

// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);

// // //String
// // let lastName = "Doe";
// // console.log(lastName);
// // console.log(typeof lastName);

// // //Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);


// // //undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 40;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to srting
// // dynamicVariable = "I am now a string";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // //change to boolean 
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);

// //Lesson 2

// // Basic Operators: Math

// console.log("== MATH OPERATORS ==");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);


// // More math ops
// console.log(ageJonas * 2, ageSarah / 2, 2 ** 3); // 2 ** 3 means 2 to the power of 3

// console.log("Math operations");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3);

// // Math with Strings!

// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");

// // Assignment Operators
// console.log("== ASSIGNMENT OPERATORS ==");

// let x = 10 + 5;
// console.log("x strarts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x);


// x /= 2;
// console.log("x starts as:", x);


// x++;
// console.log("x starts as:", x);


// x--;
// console.log("x starts as:", x);

// // Comparison Operators
// console.log("== COMPARISON OPERATORS ==");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is an adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018); // ageJonas > ageSarah

// let z, y;
// z = y = 25 - 10 - 5;
// console.log("z and y:", z, y);


// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Activity:

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs
// const bmiMark = massMark / (heightMark ** 2);
// const bmiJohn = massJohn / (heightJohn ** 2);

// // 2. Create markHigherBMI
// const markHigherBMI = bmiMark < bmiJohn;

// //3. Log results
// console.log("== RESULTS ==")
// console.log("Marks BMI:", bmiMark);
// console.log("Johns BMI:", bmiJohn);
// console.log("Mark has a higher BMI than John:", markHigherBMI);

// String and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = 
"I'm " + firstName + ", a" + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works here: ${2 + 3} equals five`);


// if else statement
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}


console.log(Boolean(0)); //falsy value
console.log(Boolean(undefined)); //falsy value
console.log(Boolean("Jonas")); //truthy value
console.log(Boolean({})); //truthy value
console.log(Boolean("")); //falsy value

// Activity 2: BMI Comparison

////////////////////////////////////
// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);



// Your if/else statement here:
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) andis higher than Mark's (${BMIMark})!`);
}
