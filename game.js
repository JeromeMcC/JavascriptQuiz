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

var choices = Array.from(document.querySelectorAll(".choice-text"));

var progressText = document.querySelector("#progressText");

var scoreText = document.querySelector("#score");

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0
let questionCounter=0
let availableQuestions= {}
var choice1=
let questions=[
    {

    question: "What is 2 + 2?",
    choices: ["2","4","6","8"],  
    answer: 1,  
    },
    {
    question: "What is 2 + 4?",
    choices: ["2","4","6","8"],  
    answer: 2,  
    },
    {
     question: "What is 2 + 6?",
    choices: ["2","4","6","8"],  
    answer: 3,  
    },
    {
    question: "What is 2 + 10?",
    choices: ["2","4","6","12"],  
    answer: 3,  
    },
    {
    question: "What is 2 + 12?",
    choices: ["2","14","6","8"],  
    answer: 1,  
    }
]
 var SCORE = 100
 var QUESTION = 5
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
startQuiz= function() {
    startTimer()
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}
startTimer= function() {
    let seconds = 6;
    timerInterval = setInterval(function(){
        document.getElementById("quiz-timer").innerHTML="00:"+seconds;
        seconds--;
        if(seconds < 0){
            clearInterval(timerInterval);
        }
    }, 1000);
    console.log("i'm working")
}

getNewQuestion= function() {

let questionPrompt =document.getElementById("question"); 

questionPrompt.innerHTML= questions[0].question;
choice1.innerHTML=choices[0].question;
console.log("getting questions")
//if


}
startQuiz()
