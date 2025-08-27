// console.log("Part 2 function is Ready.");

// function logger(){
//     console.log("My name is Lia");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(11, 3));

// // const juice1 
// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 3);
// const juice3 = fruitProcessor(3, 2);

// // function expression
// const calAge = function (birthYear) {
//     return 2025 - birthYear;
// };

// const age1 = calAge(2000);
// console.log(age1);
// console.log(calAge(1991));

// // return values and scope

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//     return introduction; 
// }

// console.log(introduce("Lia", "San Juan", 25));
// console.log(introduce("John"));

// function yearsUnitRetirement(birthYear, firstName) {
//     const age = calAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//        return(`${firstName} can retire in ${retirement} years.`);
//     } else {
//         return(`${firstName} has already retired.`);
//     }
// }

// console.log(yearsUnitRetirement(1990, "Lia"));

// // function scope
// const globalVar = "I am global";
// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// // console.log(localVar);


// // ======================================================== //

// // CODING CHALLENGE #1

// // ======================================================== //

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;    
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
// if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// } else {
//     return `No team wins! Dolphines: ${avgDolphins}, Koalas: ${avgKoalas}`;
// }

// }

// // Test Data 1
// let scoreDolphins = calcAverage(23, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// console.log("======================================");

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));


// // Arrays and Data Manipulation
// const grades = [85, 90, 78, 92, 88];
// console.log(grades);

// const friends = ["Shek", "Lexa", "Charlyn", "Claire"];
// console.log(friends);

// const mixed = ["Jonas", 40, false, friends];
// console.log(mixed);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Accessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// console.log(friends.length);

// friends[0] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear
// }

// const ages = [calcAge(2000), calcAge(1991), calcAge(1984)];
// console.log(ages);

// const newLength = friends.push("Mark");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends); 

// // removing elements
// // remove last item in the list
// const popped = friends.pop(); //last
// console.log(friends);
// console.log(popped);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // Finding elements
// console.log(friends.indexOf("Charlyn"));
// console.log(friends.indexOf("Bob"));

// // includes
// console.log(friends.includes("Lexa"));
// console.log(friends.includes("Bob"));

// // Array Iterations
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach(function (friend, index) {
//     console.log(`${index + 1}: ${friend}`);
// });

// friends.forEach ((friends, index) => {
//     console.log(`${index + 1}: ${friends}`);
// });

// const grades2 = [85, 90, 78, 92, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed}`);

// let passedCount = 0;
// grades2.forEach(grade => {
//     if (grade >= 70) passedCount++;
// });

// console.log(`${passedCount} out of ${grades2.length} students passed.`);

// CODING CHALLENGE #2: Student Grade Manager //

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
   let sum = 0;
   for (let i = 0; i < grades.length; i++) {
       sum += grades[i];
   }
   return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

// Function to count passing students
function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);
