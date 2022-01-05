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
var questionIndex;
let questions = [
    {

        question: "What is 2 + 2?",
        choices: ["2", "4", "6", "8"],
        answer: "4",
    },
    {
        question: "What is 2 + 4?",
        choices: ["2", "4", "6", "8"],
        answer: "6",
    },
    {
        question: "What is 2 + 6?",
        choices: ["2", "4", "6", "8"],
        answer: "8",
    },
    {
        question: "What is 2 + 10?",
        choices: ["2", "4", "6", "12"],
        answer: "12",
    },
    {
        question: "What is 2 + 12?",
        choices: ["2", "14", "6", "8"],
        answer: "14",
    }
]
var SCORE = 100
var QUESTION = 5
var seconds = 60
//WHEN I click the start button

choice1.addEventListener("click", function () {
    answerEval(choice1.innerHTML, questionIndex.answer)
})
choice2.addEventListener("click", function () {
    answerEval(choice2.innerHTML, questionIndex.answer)
})
choice3.addEventListener("click", function () {
    answerEval(choice3.innerHTML, questionIndex.answer)
})
choice4.addEventListener("click", function () {
    answerEval(choice4.innerHTML, questionIndex.answer)
})

startQuiz = function () {
    //location.href="/game.html"
    startTimer()
    questionCounter = 0
    SCORE = 0
    availableQuestions = [...questions]
    getNewQuestion()

}
startTimer = function () {
    timerInterval = setInterval(function () {
         seconds--;
         document.getElementById("quiz-timer").innerHTML = "00:" + seconds;
       
        if (seconds <= 0) {
            clearInterval(timerInterval);
            console.log("done")
        }
    }, 1000);
    console.log("i'm working")
}

getNewQuestion = function () {

    let questionPrompt = document.getElementById("question");
     questionIndex = questions[Math.floor(Math.random() * 5)]
    var option1 = questionIndex.choices[0]
    var option2 = questionIndex.choices[1]
    var option3 = questionIndex.choices[2]
    var option4 = questionIndex.choices[3]
    questionPrompt.innerHTML = questionIndex.question;
    choice1.innerHTML = option1;
    choice2.innerHTML = option2;
    choice3.innerHTML = option3;
    choice4.innerHTML = option4;


}
function answerEval(userchoice,answer) 
{
    console.log(userchoice);
    console.log(answer);
    QUESTION-=1
    
    if (userchoice === answer){
        //addtime and turn green
        seconds+=15;
        SCORE+=20;

        
    //score
        console.log(seconds) 
        //document.querySelector(".choice-container").classList.add("correct");
        console.log("correct")}
     else{ 
        seconds-=15;
        SCORE-=20;
        
        //score
        //document.querySelector(".choice-container").classList.add("incorrect");
    
        console.log("incorrect")
    }
    console.log(SCORE)
//subract time and turn red



        if ( QUESTION <= 0) {
            console.log ("done");
            //return gameover
        } 
 getNewQuestion()
}

//if (( QUESTION <= 0) || (seconds <= 0)) {
    //console.log (done);
    //return gameover
//} 

startQuiz()

