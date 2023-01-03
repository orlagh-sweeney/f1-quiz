const runQuizA = document.getElementsByClassName('btn-quiz-1');
const runQuizB = document.getElementsByClassName('btn-quiz-2');
const submitBtn = document.getElementsByClassName('submit');
const nextBtn = document.getElementsByClassName('next');
const quitBtn = document.getElementsByClassName('btn-quit');
const quizName = document.getElementsByClassName('quiz-name');
const questionText = document.getElementsByClassName('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
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
                runQuiz();
            } else {
                this.getElementsByClassName("btn-quiz-2");
                runQuiz();
            }
        })
    }
})

function runQuiz() {

    if (document.getElementsByClassName("btn-quiz-1")) {
        displayQuizA();
    } else if (document.getElementsByClassName("btn-quiz-2")) {
        displayQuizB();
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
    
    let questions = [
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
}

function displayQuizB() {

}