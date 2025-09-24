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

const functionTypes = {
    regularFunction: function() {
        console.log('Arguments length:', arguments.length);
        console.log('First Arguments:', arguments[0]);
    },

    modernFunction: (...args) => {
        console.log('Arguments length:', args.length);
        console.log('First Arguments:', args[0]);
    },

    arrowFunction: () => {
        console.log(arguments);
        console.log('Arrow function called');
    },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('hello', 'world');