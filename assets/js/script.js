const runQuizA = document.getElementsByClassName('btn-quiz-1');
const runQuizB = document.getElementsByClassName('btn-quiz-2');
const submitBtn = document.getElementsByClassName('submit');
const nextBtn = document.getElementsByClassName('next');
const quitBtn = document.getElementsByClassName('btn-quit');
const quizName = document.getElementById('quiz-name');
const questionText = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const userScore = document.getElementsByClassName('score');
const userWrong = document.getElementsByClassName('incorrect');
const userTimer = document.getElementsByClassName('time');


/**
 * Wait for DOM to finished loading before running the game
 * Get the button elements and add event listeners
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else if (this.getAttribute("data-type") === "next") {
                alert("You clicked next!");
            } else if (this.getAttribute("data-type") === "quit") {
                alert("You clicked quit!");
            } else {
                let quizType = this.getAttribute("data-type");
                runQuiz(quizType);
            }
        })
    }
})

function runQuiz(quizType) {

    if (quizType === "2022 Wrapped") {
        displayQuizA();
    } else if (quizType === "Driver Trivia") {
        displayQuizB();
    } else {
        alert(`Unknow game type: $(quizType)`);
        throw `Unknown game type: $(quizType). Aborting!`;
    } 

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementTimePenalty() {

}

function incrementTimer() {

}

function displayQuizA() {
    
    document.getElementById('question').textContent = quizAQuestions.questionText;
    document.getElementById('optionA').textContent = quizAQuestions.optionA;
    document.getElementById('optionB').textContent = optionB;
    document.getElementById('optionC').textContent = optionC;

}

function displayQuizB() {

}

let quizAQuestions = [
    {
        questionText: "1. Who was crowned the Formula 1 2022 World Champion?",
        optionA: "Max Verstappen",
        optionB: "Lewis Hamilton",
        optionC: "Charles Leclerc",
        correctAnswer: "Max Verstappen",
    },
    {
        questionText: "2. Which team had the fastest pitstop in 2022?",
        optionA: "Redbull",
        optionB: "McLaren",
        optionC: "Ferrari",
        correctAnswer: "McLaren",
    },
    {
        questionText: "3. What was the most DNFs by any one driver?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "6",
    },
    {
        questionText: "4. Which team won the 2022 Constructors Championship?",
        optionA: "Mercedes",
        optionB: "Redbull",
        optionC: "Ferrari",
        correctAnswer: "Redbull",
    },
    {
        questionText: "5. Where was the final Grand Prix of 2022",
        optionA: "Abu Dhabi",
        optionB: "Bahrain",
        optionC: "Brazil",
        correctAnswer: "Bahrain",
    },
    {
        questionText: "6. Who won the overall 2022 DHL Fastest Lap award?",
        optionA: "Charles Leclerc",
        optionB: "Max Verstappen",
        optionC: "George Russell",
        correctAnswer: "Max Verstappen",
    },
    {
        questionText: "7. Who was the youngest f1 driver in 2022?",
        optionA: "Yuki Tsunoda",
        optionB: "Lando Norris",
        optionC: "Fernando Alonso",
        correctAnswer: "Yuki Tsunoda",
    },
    {
        questionText: "8. Which nationality was represented by the most drivers?",
        optionA: "German",
        optionB: "Spanish",
        optionC: "British",
        correctAnswer: "British",
    },
    {
        questionText: "9. How many World Champions were on the grid in 2022?",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
    },
    {
        questionText: "10. Outside of the 3 top teams (Redbull, Ferrari & Mercedes), who was the only other driver to reach the podium?",
        optionA: "Lando Norris",
        optionB: "Fernando Alonso",
        optionC: "Kevin Magnussen",
        correctAnswer: "Lando Norris",
    },
];