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
let activeQuiz = 'A';


/**
 * Wait for DOM to finished loading before running the game
 * Get the button elements and add event listeners
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else if (this.getAttribute("data-type") === "next") {
                nextQuestion();
            } else if (this.getAttribute("data-type") === "quit") {
                quitQuiz();
            } else {
                let quizType = this.getAttribute("data-type");
                runQuiz(quizType);
            }
        });
    }
});

/**
 * Event listeners for the answer options to be
 * used in the userAnswer function
 */
optionA.addEventListener('click', function(){
    window.selectedAnswer="A";
    clickClass();

});

optionB.addEventListener('click', function(){
    window.selectedAnswer="B";
    clickClass();

});

optionC.addEventListener('click', function(){
    window.selectedAnswer="C";
    clickClass();

});

/**
 * This the main quiz function which runs when the user
 * selects which quiz they would like to play
 */
function runQuiz(quizType) {

    if (quizType === "2022 Wrapped") {
        activeQuiz = 'A';
        displayQuizA();
        document.getElementById('quiz').style.display = "block"; 
        document.getElementById('intro-area').style.display = "none"; 
        document.getElementById('results-area').style.display = "none";
    } else if (quizType === "Driver Trivia") {
        activeQuiz = 'B';
        displayQuizB();
        document.getElementById('quiz').style.display = "block"; 
        document.getElementById('intro-area').style.display = "none"; 
        document.getElementById('results-area').style.display = "none";
    } else {
        alert(`Unknow game type: $(quizType)`);
        throw `Unknown game type: $(quizType). Aborting!`;
    } 

}

function userAnswer(answer) {

    console.log(answer);

}

function clickClass() {

    if (window.selectedAnswer === "A") {
        document.getElementById('optionA').classList.add('click-class');
        document.getElementById('optionB').classList.remove('click-class');
        document.getElementById('optionC').classList.remove('click-class');
    } if (window.selectedAnswer === "B") {
        document.getElementById('optionB').classList.add('click-class');
        document.getElementById('optionA').classList.remove('click-class');
        document.getElementById('optionC').classList.remove('click-class');
    } if (window.selectedAnswer === "C") {
        document.getElementById('optionC').classList.add('click-class');
        document.getElementById('optionA').classList.remove('click-class');
        document.getElementById('optionB').classList.remove('click-class');
    }

}

function removeClickClass () {

    document.getElementById('optionA').classList.remove('click-class');
    document.getElementById('optionB').classList.remove('click-class');
    document.getElementById('optionC').classList.remove('click-class');

}

/**
 * This function runs when the user clicks the submit button
 * It then calls the correct function to check answers 
 * based on the quiz being played
 */
function checkAnswer() {

    if (activeQuiz == 'A') {
        checkQuizAAnswers();
    } else {
        checkQuizBAnswers();
    }

}

/**
 * This function checks Quiz A answers
 */
function checkQuizAAnswers() {

    if (window.selectedAnswer === quizAQuestions[runningQuestion].correctAnswer) {
        console.log('correct');
        incrementScore();
    } else {
        console.log('incorrect');
        incrementTimePenalty();
        }

}

/**
 * This function checks Quiz B answers
 */
function checkQuizBAnswers() {

    if (window.selectedAnswer === quizBQuestions[runningQuestion].correctAnswer) {
        console.log('correct');
        incrementScore();
    } else {
        console.log('incorrect');
        incrementTimePenalty();
        }

}

/**
 * This function runs when the next button is clicked 
 * allowing the user to see the next question
 */
function nextQuestion() {

    if (activeQuiz == 'A' && runningQuestion<quizAQuestions.length-1) {
        console.log("running quizA");
        runningQuestion++;
        displayQuizA();
        removeClickClass();
    } else if (activeQuiz == 'B' && runningQuestion<quizBQuestions.length-1) {
        console.log("running quizB");
        runningQuestion++;
        displayQuizB();
        removeClickClass();
    } else if (window.isLastQuestion = "Yes") {
        finalScore();
    }
}

/**
 * This function allows the user to quit the quiz 
 * and return to the inital quiz page
 */
function quitQuiz () {
    
    document.getElementById('intro-area').style.display = "block"; 
    document.getElementById('quiz').style.display = "none"; 
    document.getElementById('results-area').style.display = "none";

}

/**
 * Code taken from Code Institute Love Maths projects
 * Takes current score from the DOM and increments it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Code taken from Code Institute Love Maths projects
 * Takes current score from the DOM and increments it by 1
 */
function incrementTimePenalty() {
    
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function incrementTimer() {

}

function finalScore() {

    document.getElementById('quiz').style.display = "none"; 
    document.getElementById('intro-area').style.display = "none"; 
    document.getElementById('results-area').style.display = "block";  

    let finalCorrect = (document.getElementById("score").innerText);
    document.getElementById("final-score").innerText = finalCorrect;

    let finalInCorrect = (document.getElementById("incorrect").innerText);
    document.getElementById("final-incorrect").innerText = finalInCorrect;

}

/**
 * These functions to display quesitons in the quiz based on quiz type.
 * Code snippet taken from CodeExplainedRepo and modified
 */
let runningQuestion = 0;

function displayQuizA() {
    
    let q = quizAQuestions[runningQuestion];

    questionText.textContent = q.questionText;
    optionA.textContent = q.optionA;
    optionB.textContent = q.optionB;
    optionC.textContent = q.optionC;

    window.isLastQuestion = q.isLastQuestion;

}

function displayQuizB() {

    let q = quizBQuestions[runningQuestion];

    questionText.textContent = q.questionText;
    optionA.textContent = q.optionA;
    optionB.textContent = q.optionB;
    optionC.textContent = q.optionC;

    window.isLastQuestion = q.isLastQuestion;

}

/**
 * Questions and answers for quiz A: 2022 Wrapped
 * 
 */
let quizAQuestions = [
    {
        questionText: "Who was crowned the Formula 1 2022 World Champion?",
        optionA: "Max Verstappen",
        optionB: "Lewis Hamilton",
        optionC: "Charles Leclerc",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Which team had the fastest pitstop in 2022?",
        optionA: "Redbull",
        optionB: "McLaren",
        optionC: "Ferrari",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "What was the most DNFs by any one driver?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "C",
        isLastQuestion: "No",
    },
    {
        questionText: "Which team won the 2022 Constructors Championship?",
        optionA: "Mercedes",
        optionB: "Redbull",
        optionC: "Ferrari",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "Where was the final Grand Prix of 2022",
        optionA: "Abu Dhabi",
        optionB: "Bahrain",
        optionC: "Brazil",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "Who won the overall 2022 DHL Fastest Lap award?",
        optionA: "Charles Leclerc",
        optionB: "Max Verstappen",
        optionC: "George Russell",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "Who was the youngest f1 driver in 2022?",
        optionA: "Yuki Tsunoda",
        optionB: "Lando Norris",
        optionC: "Fernando Alonso",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Which nationality was represented by the most drivers?",
        optionA: "German",
        optionB: "Spanish",
        optionC: "British",
        correctAnswer: "C",
        isLastQuestion: "No",
    },
    {
        questionText: "How many World Champions were on the grid in 2022?",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "Outside of the 3 top teams (Redbull, Ferrari & Mercedes), who was the only other driver to reach the podium?",
        optionA: "Lando Norris",
        optionB: "Fernando Alonso",
        optionC: "Kevin Magnussen",
        correctAnswer: "A",
        isLastQuestion: "Yes",
    },
];

/**
 * Questions and answers for quiz B: Driver Trivia
 * 
 */

let quizBQuestions = [
    {
        questionText: "What Australian wine brand does Daniel Riccardo have a collaboration with?",
        optionA: "St Hugo",
        optionB: "19 Crimes",
        optionC: "Mollydocker",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Which driver has the lowest golf handicap?",
        optionA: "Lando Norris",
        optionB: "Carlos Sainz",
        optionC: "Alex Albon",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "Which driver owns a gin brand called Oath Gin?",
        optionA: "Valterri Bottas",
        optionB: "Nicholas Latifi",
        optionC: "Sebastian Vettel",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "What is the name of Lewis Hamiltons dog?",
        optionA: "Roscoe",
        optionB: "Boscoe",
        optionC: "Joscoe",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Which driver has the most followers on Twitch?",
        optionA: "Lando Norris",
        optionB: "Charlec Leclerc",
        optionC: "Alex Albon",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Which driver is dating a player on the LPGA tour?",
        optionA: "Sergio Perez",
        optionB: "Lance Stroll",
        optionC: "Alex Albon",
        correctAnswer: "C",
        isLastQuestion: "No",
    },
    {
        questionText: "Whose father was a World Rally Champion?",
        optionA: "Max Verstappen",
        optionB: "Carlos Sainz",
        optionC: "Fernando Alonso",
        correctAnswer: "B",
        isLastQuestion: "No",
    },
    {
        questionText: "How many kids does Sergio Perez have?",
        optionA: "0",
        optionB: "2",
        optionC: "3",
        correctAnswer: "C",
        isLastQuestion: "No",
    },
    {
        questionText: "Which driver joined Instagram in 2022?",
        optionA: "Sebastian Vettel",
        optionB: "Lewis Hamilton",
        optionC: "Mick Schumacher",
        correctAnswer: "A",
        isLastQuestion: "No",
    },
    {
        questionText: "Who is the oldest driver on the grid?",
        optionA: "Sebastian Vettel",
        optionB: "Fernando Alonso",
        optionC: "Lewis Hamilton",
        correctAnswer: "B",
        isLastQuestion: "Yes",
    },
];