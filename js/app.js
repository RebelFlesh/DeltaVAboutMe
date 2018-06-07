"use strict";

var masterBracket=[
  /*0*/["#1. Are my eyes blue?","#2. In my lifetime, did my family has only owned 1 pet?","#3. Am I currently working as a waiter when not in class?"],
  /*1*/["yes","no","yes"],
  /*2*/["y","n","y"],
  /*3*/["correct response 1","correct response 2","correct response 3"],
  /*4*/["inccorect response 1","inccorect response 2","inccorect response 3"]
];

function quiz(question,answerWord,answerLetter){
  //Gretting/startup
  var greet=confirm("Hello! would you like to take a quiz?");
  if(greet===false){
    alert("Too bad.");
  }
  var user=prompt("What's your name?");
  while(user===null){
    alert("you're still trying to cancel out of this?");
    user=prompt("What's your name?");
  }
  if (user===""){
    alert("i'm just going to call you Bob");
    user=("Bob");
  }
  alert("Hi "+user.trim()+"! I'm Ethan. I'm gonna ask you questions about myself. See how many you can get right");
  var score=0;
  //Content Questions
  for(var questionNum=1;questionNum<5;questionNum++){
    var eye=prompt(masterBracket[0[0]]).toLowerCase().trim();
    if(eye===masterBracket[1[0]]||eye===masterBracket[2[0]]){
      alert(masterBracket[3[0]]);
      score++;
    }
    else{
      alert(masterBracket[4[0]]);
    }
    masterBracket
  }
}
/*var score=7;

var eye=prompt("#1. Are my eyes blue?").toLowerCase().trim();
console.log("Are my eyes blue?");
console.log("user answered:"+eye);

if (eye==="y"||eye==="yes"){
  alert("Correct! Lucky guess/good observations! I can never remember other people's.");
  console.log("User was right.");
}
else if(eye==="n"||eye==="no"){
  alert("Sorry, they actually are. It's Okay, I can't see them either right now.");
  console.log("User was wrong.");
  score=score-1;
}
else{
  alert("i didn't register that.");
  score=score-1;
  console.log("User's imput was not understood.");
}
var pet=prompt("#2. In my lifetime, did my family has only owned 1 pet?").toLowerCase().trim();
console.log("Do I have any pets?");
console.log("user answered:"+pet);
if (pet==="y"||pet==="yes"){
  alert("What?!? no way! I've had seven, not even counting all the fish.");
  score=score-1;
  console.log("User was wrong.");
}
else if(pet==="n"||pet==="no"){
  alert("Smart cookie. What kind of family only has one?");
  console.log("User was right.");
}
else{
  alert("i didn't register that.");
  score=score-1;
  console.log("User's imput was not understood.");
}
var job=prompt("#3. Am I currently working as a waiter when not in class?").toLowerCase().trim();
console.log("Am I a waiter?");
console.log("user answered:"+job);
if (job==="y"||job==="yes"){
  alert("Survay says... Yes! I am a server at the coralville market grille.");
  console.log("User was right.");
}
else if(job==="n"||job==="no"){
  alert("On the weekends I work at one of market grilles at hyvee as a sever. Better luck on the next one.");
  score=score-1;
  console.log("User was wrong.");
}
else{
  alert("i didn't register that.");
  score=score-1;
  console.log("User's imput was not understood.");
}
var fav=prompt("#4. Is my favorite video game is The Last of Us by Naughty Dog?").toLowerCase().trim();
console.log("Is my favorite game The Last of Us?");
console.log("user answered:"+fav);
if (fav==="y"||fav==="yes"){
  alert("Right! haha this question is too specific to be false");
  console.log("User was right.");
}
else if(fav==="n"||fav==="no"){
  alert("Wrong. Yo have you even played this game. The story alone is so good!");
  score=score-1;
  console.log("User was wrong.");
}
else{
  alert("i didn't register that.");
  score=score-1;
  console.log("User's imput was not understood.");
}
var out=prompt("#5. Have I never been out of the United States?").toLowerCase().trim();
console.log("Have I never been out of the US?");
console.log("user answered:"+out);
if (out==="y"||out==="yes"){
  alert("Actually I've been lucky enough to be to Canada and Spain.");
  score=score-1;
  console.log("User was wrong.");
}
if (out==="n"||out==="no"){
  alert("Correcto! I've been to Espana in 2015 and Canada in 2017");
  console.log("User was right.");
}
else{
  alert("i didn't register that.");
  score=score-1;
  console.log("User's imput was not understood.");
}
*/
var favNum=Math.floor(Math.random()*10).toString();
console.log(favNum);
var guess=prompt("Guess my favorite number between 0-9?");
var lastGuess;
var lastDistance;
var currentDistance;
var stat;
var guessCount=6;
while (guess!==favNum){
  if (guess===""){
    alert("I'm assuming that's a zero...");
  }
  if (guessCount===0||guess===null){
    break;
  }
  if (!isNaN(lastGuess)){
    lastDistance=lastGuess-favNum;
    //console.log("current:"+lastDistance);
    currentDistance=guess-favNum;
    //console.log("this should not be running");
    //console.log("current:"+currentDistance);
    if (lastDistance<0){
      lastDistance=lastDistance*(-1);
    }
    if (currentDistance<0){
      currentDistance=currentDistance*(-1);
    }
    if (lastDistance>currentDistance){
      stat="Warmer";
    // console.log("last vs current:"+lastDistance+">"+currentDistance);
    }
    else if (lastDistance<currentDistance){
      stat="Colder";
    // console.log("last vs current:"+lastDistance+"<"+currentDistance);
    }
    else if(lastDistance===currentDistance){
      stat="No change";
      //console.log("last vs current:"+lastDistance+"="+currentDistance);
      //console.log("this should not be running");
    }
    else{
      stat=undefined;
    }
  }
  lastGuess=guess;
  if(stat===undefined){
    guess=prompt("Try again? You still have "+guessCount+" guesses left");
  }
  else{
    guess=prompt(stat+"! You wanna try again? You still have "+guessCount+" guesses left");
  }
  console.log(guess);
  guessCount=guessCount-1;
  console.log(guessCount);
}
if(guess===null){
  alert("Give up already? The number was "+favNum);
  score=score-1;
}
else if(guessCount===0){
  alert("Sorry, you ran out of guesses.");
  score=score-1;
}
else{
  alert("You're right! The number was "+favNum+"!");
}

var bro=["kera","emily","matt","josh","chris"];
var guessBroCount=7;
var guessBro=prompt("Can you guess the name of one of my siblings?").toLowerCase();
console.log(bro);
console.log(guessBro);
console.log(guessBroCount);
console.log(bro.indexOf(guessBro));
while(bro.indexOf(guessBro)<=0){
  alert("Nope, sorry.");
  guessBroCount-=1;
  if(guessBroCount===0){
    break;
  }
  guessBro=prompt("Wanna try agian? You have "+guessBroCount+" tries left.");
}
if (guessBroCount===0){
  alert("Oh no! You ran out of guesses. My siblings' names are: "+bro.join(", "));
  score=score-1;
}
else{
  alert("Good guess! I have 5 siblings, "+bro.join(", "));
}
alert("Thanks for playing! "+user+" You got "+score+"/7 questions right!");