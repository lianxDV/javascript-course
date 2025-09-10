'use strict';

//DOM Element Selection

const message1 = document.querySelector('.message');
console.log(message1);

// message1.textContent = "Hello from JavaScript";

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
// numberEl.textContent = 10;

const highScoreEl = document.querySelector('.highscore');
// highScoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

//Game state variable

let secretNumber = Math.trunc (Math.random() * 20) + 1;
console.log('Your Secret Number is: ',secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

//////
/// BASIC GAME LOGIC

document.querySelector('.check').addEventListener('click', function () {
    // code block
    console.log('Check button clicked');
    const guess = Number(document.querySelector('.guess').value);
    console.log('Players Guessed:', guess);

    if (guess === secretNumber) {
        console.log('Correct Guess!!');
        document.querySelector('.message').textContent = '🔥 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log('Too High!!')
        document.querySelector('.message').textContent = 'Taas boi'
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Baba boi'
    }

});