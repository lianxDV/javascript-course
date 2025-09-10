'use strict';


// Constants
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cashed Selectors
const messageEl = document.querySelector('.message');
const bodyEl = document.body;
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highScoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

//UI HELPERS
function setMessage(text) {
    messageEl.textContent = text;
}

function setNumber(value) {
    numberEl.textContent = value;
}

function setScore(value) {
    scoreEl.textContent = value;
}

function setHighscore(value) {
    highScoreEl.textContent = value;
}

function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
    guessInputEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}

function clearInput() {
    guessInputEl.value = '';
}


//Game state variable

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Your Secret Number is: ', secretNumber);
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
    setMessage('Start Guessing..');
    setNumber('?');
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground('');
}

renderInitialUI();

//////
/// BASIC GAME LOGIC

checkBtnEl.addEventListener('click', function () {
    // code block
    const guess = Number(guessInputEl.value);
    console.log('Players Guessed:', guess);

    if(!guess) return setMessage('Please Input a number');


    if(guess < MIN_NUMBER || guess > MAX_NUMBER) {
        return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`);
    }


    if (guess === secretNumber) {
        setMessage("You have won!!");
        setNumber(secretNumber);
        setBackground('green');

        if(score > highscore){
            highscore = score;
            setHighscore(highscore);
        }

        disablePlay(true);
        clearInput('');
        return;

    } 

    setMessage(guess > secretNumber ? 'Too high' : 'Too Low!');
    score--;
    setScore(score);

    if (score < 1) {
        setMessage('Game over. Please press again!');
        setNumber(secretNumber);
        setBackground('maroon');
        disablePlay(true);
        clearInput();
    }

});

againBtnEl.addEventListener('click', function() {
    resetGameState();
    renderInitialUI();
});

// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});



