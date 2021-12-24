//GIVEN I am taking a code quiz

//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score
var question = document.querySelector("#question");

//var choices = Array.from(document.querySelectorAll(".choice-text"));

var progressText = document.querySelector("#progressText");

var scoreText = document.querySelector("#score");

var startBtn = document.querySelector("#start")
let acceptingAnswers = true;
let score = 0
let questionCounter = 0
let availableQuestions = {}
var choice1 = document.querySelector("#answerA")
var choice2 = document.querySelector("#answerB")
var choice3 = document.querySelector("#answerC")
var choice4 = document.querySelector("#answerD")

let questions = [
    {

        question: "What is 2 + 2?",
        choices: ["2", "4", "6", "8"],
        answer: 1,
    },
    {
        question: "What is 2 + 4?",
        choices: ["2", "4", "6", "8"],
        answer: 2,
    },
    {
        question: "What is 2 + 6?",
        choices: ["2", "4", "6", "8"],
        answer: 3,
    },
    {
        question: "What is 2 + 10?",
        choices: ["2", "4", "6", "12"],
        answer: 3,
    },
    {
        question: "What is 2 + 12?",
        choices: ["2", "14", "6", "8"],
        answer: 1,
    }
]
var SCORE = 100
var QUESTION = 5
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
startQuiz = function () {
    //location.href="/game.html"
    startTimer()
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}
startTimer = function () {
    let seconds = 60;
    timerInterval = setInterval(function () {
        document.getElementById("quiz-timer").innerHTML = "00:" + seconds;
        seconds--;
        if (seconds < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    console.log("i'm working")
}

getNewQuestion = function () {

    let questionPrompt = document.getElementById("question");
    var questionIndex = questions[Math.floor(Math.random() * 5)]
    var option1 = questionIndex.choices[0]
    var option2 = questionIndex.choices[1]
    var option3 = questionIndex.choices[2]
    var option4 = questionIndex.choices[3]
    questionPrompt.innerHTML = questionIndex.question;
    choice1.innerHTML = option1;
    choice2.innerHTML = option2;
    choice3.innerHTML = option3;
    choice4.innerHTML = option4;


    choice1.addEventListener("click", function () {
        answerEval(option1, questionIndex.answer)
    })
    choice2.addEventListener("click", function () {
        answerEval(option2, questionIndex.answer)
    })
    choice3.addEventListener("click", function () {
        answerEval(option3, questionIndex.answer)
    })
    choice4.addEventListener("click", function () {
        answerEval(option4, questionIndex.answer)
    })
}
function answerEval(userchoice,answer) {
    let seconds= 60
    if (userchoice === answer){
        //addtime and turn green
        seconds+=15 
        document.querySelector(".choice-container").classList.add("correct");}
     else{ 
        seconds-=15
        document.querySelector(".choice-container").classList.add("incorrect");}
//subract time and turn red
    }





startQuiz()

