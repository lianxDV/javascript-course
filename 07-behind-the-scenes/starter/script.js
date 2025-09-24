'use strict';

// console.log(varX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// function addDecl(a, b) {
//     return a + b;
//     }

// const addExpr = function (a, b) {
//     return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// person.greet();

// const anotherPerson = { name: 'Sarah' };

// // Borrow Person
// anotherPerson.greet = person.greet;

// // Display or run any greet function for anotherPerson
// anotherPerson.greet();

// // Detached Function
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//     name: 'Objects',
//     regularMethod: function ()  {
//         console.log('Regular:', this.name);
//     },
//     arrowMehtod: () => {
//     console.log('Arrow:', this.name);
//     },
// };

// obj.regularMethod();

// obj.arrowMehtod();

// const timer = {
//     name: 'Timer',
//     start: function () {
//         console.log(`${this.name} Starting...`);

//         const self = this;

//         setTimeout(function () {
//          console.log(`${self.name} finished`);   
//         }, 1000);
//     },
//     startModern: function() {
//         console.log(`${this.name} Starting Modern...`);

//         setTimeout(() => {
//             console.log(`${this.name} finished Modern`);
//         }, 1500);
//     },
// };

// timer.start ();

// const functionTypes = {
//     regularFunction: function() {
//         console.log('Arguments length:', arguments.length);
//         console.log('First Arguments:', arguments[0]);
//     },

//     modernFunction: (...args) => {
//         console.log('Arguments length:', args.length);
//         console.log('First Arguments:', args[0]);
//     },

//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');
//     },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('hello', 'world');

// let age = 30;

// let oldAge = age;

// age = 31;
// console.log('age', age);
// console.log('oldAge', oldAge);

// const me = { name: 'Aiken', age: 25};

// const friend = me;

// friend.name = 'JohnDoe';
// friend.age = 23;

// console.log('me:', me);
// console.log('friend:', friend);

// const original = {
//     name: 'Alice',
//     age: 28,
//     hobbies: ['reading', 'coding'],
// };

// const shallowCopy = {...original};
// shallowCopy.name = 'Bob';

// console.log('original name:', original.name);
// console.log('copy name:', shallowCopy.name);


const deepOriginal = {
    name: 'Charlew',
    age: 32,
    address: {city: 'Paris', country: 'France'},
    hobbies:['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = 'London';
deepCopy.hobbies.push = 'Cooking';
deepCopy.name = 'Lex';

console.log(deepOriginal);
console.log(deepCopy);