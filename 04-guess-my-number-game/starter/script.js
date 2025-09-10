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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
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
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.querySelector('.message').textContent = 'You Won BBG ;)';

    } else if (guess > secretNumber) {
        console.log('Too High!!')
        document.querySelector('.message').textContent = 'Too High boi'
        score--;
        document.querySelector('.score').textContent = score;
        
        if (score < 1) {
            document.querySelector('.message').textContent = 'You Lost BBG ;('
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }

    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low boi'
        score--;
        document.querySelector('.score').textContent = score;
        
        if (score < 1) {
            document.querySelector('.message').textContent = 'You Lost BBG ;('
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }

    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    // RESTART SECRET NUMBER AUTOMATICALLY
    document.querySelector('.number').textContent = '?';
    //RESTART THE SCORE
    document.querySelector('.score').textContent = score;
    // EMPTY THE GUESS INPUT
    document.querySelector('.guess').value = '';
    // enabale guess and check button
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;

});