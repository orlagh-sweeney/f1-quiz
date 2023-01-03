const runQuizA = document.getElementsByClassName('btn-quiz-1');
const runQuizB = document.getElementsByClassName('btn-quiz-2');
const submitBtn = document.getElementsByClassName('submit');
const nextBtn = document.getElementsByClassName('next');
const quitBtn = document.getElementsByClassName('btn-quit');
const quizName = document.getElementsByClassName('quiz-name');
const questionText = document.getElementsByClassName('question');
const userScore = document.getElementById('score');
const userWrong = document.getElementById('incorrect');
const userTimer = document.getElementById('time');

/**
 * Wait for DOM to finished loading before running the game
 * Get the button elements and add event listeners
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let buttons of buttons) {
        buttons.addEventListener("click", function() {
            if (this.getElementsByClassName("btn-quiz-1")) {
                runQuizA();
            } else {
                this.getElementsByClassName("btn-quiz-2");
                runQuizB();
            }
        })
    }
})

function runQuiz() {

}

function checkAnswer() {

}

function incrementScore() {

}

function ncrementTimePenalty() {

}

function incrementTimer() {

}

function displayQuiz1() {
    
}

function displayQuiz2() {

}