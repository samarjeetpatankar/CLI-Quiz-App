var readlineSync = require('readline-sync');

var score=0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " Do You Know Samarjeet");

var highscores=[{
  name:"Samarjeet",
  score:6,
}];

function play(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }else{
    console.log("wrong");
  }
  console.log("Current Score:",score)
  console.log("----------------------------------")
}

var question = [{
  question:"Where do I live?: ",
  answer:"Bhor"
},{
  question:"My favorite superhero?: ",
  answer:"Batman"
},{
  question:"My Favorite Food?: ",
  answer:"Misal"
},{
  question:"My Favorite Car Brand?: ",
  answer:"Mercedez-benz"
},{
  question:"My Favorite Programming Language?: ",
  answer:"Javascript"
},{
  question:"My Favorite destination in india?: ",
  answer:"Goa"
}];

for(var i=0;i<question.length;i++){
  var currentQuestion=question[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YOU SCORED: ",score)
console.log("----------------------------------")

console.log("CHECK OUT HIGH SCORES:")

var highscores
for(var i=0;i<highscores.length; i++){
  var highscores=highscores[i];
  console.log(highscores.name);
  console.log(highscores.score);
  console.log("----------------------------------")
}


  