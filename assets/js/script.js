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
        })
    }
})


optionA.addEventListener('click', function(){
    userAnswer("A");
    console.log(this);
})

optionB.addEventListener('click', function(){
    userAnswer("B");
    console.log(this);
})

optionC.addEventListener('click', function(){
    userAnswer("C");
    console.log(this);
})

function runQuiz(quizType) {

    if (quizType === "2022 Wrapped") {
        activeQuiz = 'A';
        displayQuizA();
    } else if (quizType === "Driver Trivia") {
        activeQuiz = 'B';
        displayQuizB();
    } else {
        alert(`Unknow game type: $(quizType)`);
        throw `Unknown game type: $(quizType). Aborting!`;
    } 

}

function userAnswer(answer) {

    console.log(answer);
}

function checkAnswer() {

    if (activeQuiz == 'A') {
        checkQuizAAnswers();
    } else {
        checkQuizBAnswers();
    }

}

function checkQuizAAnswers() {

    let selectedAnswer = userAnswer();

    if (selectedAnswer === quizAQuestions[runningQuestion].correctAnswer) {
        console.log('correct');
        incrementScore();
    } else {
        console.log('incorrect');
        incrementTimePenalty();
        }

}

function checkQuizBAnswers() {

    let selectedAnswer = userAnswer();

    if (selectedAnswer === quizBQuestions[runningQuestion].correctAnswer) {
        console.log('correct');
        incrementScore();
    } else {
        console.log('incorrect');
        incrementTimePenalty();
        }

}

function nextQuestion() {

    if(activeQuiz == 'A' && runningQuestion<quizAQuestions.length-1) {
        console.log("running quizA");
        runningQuestion++;
        displayQuizA();
    } else if (activeQuiz == 'B' && runningQuestion<quizBQuestions.length-1) {
        console.log("running quizB");
        runningQuestion++;
        displayQuizB();
    }
}

function quitQuiz () {
    
}

/**
 * Code taken from Code Institute Love Maths projects
 * Takes current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementsByClassName("score").innerText);
    document.getElementsByClassName("score").innerText = ++oldScore;
}

/**
 * Code taken from Code Institute Love Maths projects
 * Takes current score from the DOM and increments it by 1
 */
function incrementTimePenalty() {
    let oldScore = parseInt(document.getElementsByClassName("incorrect").innerText);
    document.getElementsByClassName("incorrect").innerText = ++oldScore;
}

function incrementTimer() {

}

/**
 * Fucntions to display quesitons in the quiz based on quiz type.
 * Code snippet taken from CodeExplainedRepo and modified
 */

let runningQuestion = 0;

function displayQuizA() {
    
    let q = quizAQuestions[runningQuestion];

    questionText.textContent = q.questionText;
    optionA.textContent = q.optionA;
    optionB.textContent = q.optionB;
    optionC.textContent = q.optionC;

}

function displayQuizB() {

    let q = quizBQuestions[runningQuestion];

    questionText.textContent = q.questionText;
    optionA.textContent = q.optionA;
    optionB.textContent = q.optionB;
    optionC.textContent = q.optionC;

}

let quizAQuestions = [
    {
        questionText: "Who was crowned the Formula 1 2022 World Champion?",
        optionA: "Max Verstappen",
        optionB: "Lewis Hamilton",
        optionC: "Charles Leclerc",
        correctAnswer: "optionA",
    },
    {
        questionText: "Which team had the fastest pitstop in 2022?",
        optionA: "Redbull",
        optionB: "McLaren",
        optionC: "Ferrari",
        correctAnswer: "B",
    },
    {
        questionText: "What was the most DNFs by any one driver?",
        optionA: "4",
        optionB: "5",
        optionC: "6",
        correctAnswer: "6",
    },
    {
        questionText: "Which team won the 2022 Constructors Championship?",
        optionA: "Mercedes",
        optionB: "Redbull",
        optionC: "Ferrari",
        correctAnswer: "Redbull",
    },
    {
        questionText: "Where was the final Grand Prix of 2022",
        optionA: "Abu Dhabi",
        optionB: "Bahrain",
        optionC: "Brazil",
        correctAnswer: "Bahrain",
    },
    {
        questionText: "Who won the overall 2022 DHL Fastest Lap award?",
        optionA: "Charles Leclerc",
        optionB: "Max Verstappen",
        optionC: "George Russell",
        correctAnswer: "Max Verstappen",
    },
    {
        questionText: "Who was the youngest f1 driver in 2022?",
        optionA: "Yuki Tsunoda",
        optionB: "Lando Norris",
        optionC: "Fernando Alonso",
        correctAnswer: "Yuki Tsunoda",
    },
    {
        questionText: "Which nationality was represented by the most drivers?",
        optionA: "German",
        optionB: "Spanish",
        optionC: "British",
        correctAnswer: "British",
    },
    {
        questionText: "How many World Champions were on the grid in 2022?",
        optionA: "2",
        optionB: "4",
        optionC: "6",
        correctAnswer: "4",
    },
    {
        questionText: "Outside of the 3 top teams (Redbull, Ferrari & Mercedes), who was the only other driver to reach the podium?",
        optionA: "Lando Norris",
        optionB: "Fernando Alonso",
        optionC: "Kevin Magnussen",
        correctAnswer: "Lando Norris",
    },
];

let quizBQuestions = [
    {
        questionText: "What Australian wine brand does Daniel Riccardo have a collaboration with?",
        optionA: "St Hugo",
        optionB: "19 Crimes",
        optionC: "Mollydocker",
        correctAnswer: "St Hugo",
    },
    {
        questionText: "Which driver has the lowest golf handicap?",
        optionA: "Lando Norris",
        optionB: "Carlos Sainz",
        optionC: "Alex Albon",
        correctAnswer: "Carlos Sainz",
    },
    {
        questionText: "Which driver owns a gin brand called Oath Gin?",
        optionA: "Valterri Bottas",
        optionB: "Nicholas Latifi",
        optionC: "Sebastian Vettel",
        correctAnswer: "Valterri Bottas",
    },
    {
        questionText: "What is the name of Lewis Hamiltons dog?",
        optionA: "Roscoe",
        optionB: "Boscoe",
        optionC: "Joscoe",
        correctAnswer: "Roscoe",
    },
    {
        questionText: "Which driver has the most followers on Twitch?",
        optionA: "Lando Norris",
        optionB: "Charlec Leclerc",
        optionC: "Alex Albon",
        correctAnswer: "Lando Norris",
    },
    {
        questionText: "Which driver is dating a player on the LPGA tour?",
        optionA: "Sergio Perez",
        optionB: "Lance Stroll",
        optionC: "Alex Albon",
        correctAnswer: "Alex Albon",
    },
    {
        questionText: "Whose father was a World Rally Champion?",
        optionA: "Max Verstappen",
        optionB: "Carlos Sainz",
        optionC: "Fernando Alonso",
        correctAnswer: "Carlos Sainz",
    },
    {
        questionText: "How many kids does Sergio Perez have?",
        optionA: "0",
        optionB: "2",
        optionC: "3",
        correctAnswer: "3",
    },
    {
        questionText: "Which driver joined Instagram in 2022?",
        optionA: "Sebastian Vettel",
        optionB: "Lewis Hamilton",
        optionC: "Mick Schumacher",
        correctAnswer: "Sebastian Vettel",
    },
    {
        questionText: "Who is the oldest driver on the grid?",
        optionA: "Sebastian Vettel",
        optionB: "Fernando Alonso",
        optionC: "Lewis Hamilton",
        correctAnswer: "Fernando Alonso",
    },
];