var readlineSync = require("readline-sync");
var score = 0;

var userName = readlineSync.question("Please Enter your name ? ");

console.log("Welcome "+ userName + " To Do You Know Prathmesh?");




function play(question, answer) {
  var userAnswer = readlineSync.question(question);

 if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right Answer");
    score = score + 1;
    
  } else {
    console.log("Wrong Answer");
   
  }

  console.log(userName + " Your Current Score is : ", score);
  console.log("-------------")
}


var questions = [{
  question: "Where do I live ? ",
  answer: "Bhor"
},
{
  question: "Where Do I Study ? ",
  answer: "Pesmcoe"
},
{
  question: "Which is my favourite Colour ? ",
  answer: "Blue"
},
{
  question: "What Do I Study ? ",
  answer: "Engineering"
},
{
  question: "What is my school name ? ",
  answer: "Jems"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(userName + " Your Final Score is : ", score);

var highScores = [
  {
    name: "Prathmesh",
    score: 5,
  },

  {
    name: "Aryan",
    score: 4,
  },
]
console.log("----------------------")
console.log("Current HighScores Are ")
for(var i=0 ; i<highScores.length ; i++){
  var currentHighScore = highScores[i];
 console.log(currentHighScore.name + ":" + currentHighScore.score)
}

console.log("----------------------")
console.log("If you beat  highscore then send me screenshot .")


