"use strict";

var masterBracket=[
  /*Questions*/["#1. Are my eyes blue?","#2. In my lifetime, did my family has only owned 1 pet?","#3. Am I currently working as a waiter when not in class?",
    "#4. Is my favorite video game is The Last of Us by Naughty Dog?","#5. Have I never been out of the United States?"],
  /*correct Answer*/["yes","no","yes", "yes", "no"],
  /*Alternitive Answer*/["y","n","y", "y", "n"],
  /*Correct Response*/["Correct! Lucky guess/good observations! I can never remember other people's.","Yeah! Not counting the fish we have had 9 over the years","Survay says... Yes! I am a server at the coralville market grille.",
    "Right! haha this question is too specific to be false","Correcto! I've been to Espana in 2015 and Canada in 2017"],
  /*Incorrect Response*/["Sorry, they actually are. It's Okay, I can't see them either right now.","What?!? no way! I've had seven, not even counting all the fish.","On the weekends I work at one of market grilles at hyvee as a sever. Better luck on the next one.",
    "Wrong. Yo have you even played this game. The story alone is so good!","Actually I've been lucky enough to be to Canada and Spain."]
];

function quiz(){
  //Gretting/startup
  var greet=confirm("Hello! would you like to take a quiz?");
  if(greet===false){
    alert("Too bad.");
    var noFun=true;
  }
  var user=prompt("What's your name?");
  while(user===null&&noFun===true){
    alert("you're trying to cancel out of this?");
    user=prompt("What's your name?");
  }
  if (user===""||user===null){
    alert("i'm just going to call you Bob");
    user=("Bob");
  }
  alert("Hi "+user.trim()+"! I'm Ethan. I'm gonna ask you questions about myself. See how many you can get right");
  var score=0;
  //Content Questions
  for(var questionNum=0;questionNum<5;questionNum++){
    var userGuess=prompt(masterBracket[0][questionNum]).toLowerCase().trim();
    console.log(masterBracket[0][questionNum]);
    console.log("User guessed:"+userGuess);
    if(userGuess===masterBracket[1][questionNum]||userGuess===masterBracket[2][questionNum]){
      alert(masterBracket[3][questionNum]);
      score++;
      console.log("User was right.");
    }
    else if(userGuess===null){
      break;
    }
    else{
      alert(masterBracket[4][questionNum]);
      console.log("User was wrong.");
    }
    console.log("User score:"+score);
  }
  if(userGuess===null){
    return;
  }
  //Number Game <!--Still needs refactored -->
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
  }
  else if(guessCount===0){
    alert("Sorry, you ran out of guesses.");
  }
  else{
    alert("You're right! The number was "+favNum+"!");
    score++;
  }
  //Index guessing game
  var bro=["kera","emily","matt","josh","chris"];
  var guessBroCount=0;
  var guessBro=prompt("Can you guess the name of one of my siblings?").toLowerCase();
  console.log(bro);
  console.log(guessBro);
  console.log(guessBroCount);
  console.log(bro.indexOf(guessBro));
  while(bro.indexOf(guessBro)<0){
    alert("Nope, sorry.");
    guessBroCount+=1;
    if(guessBroCount===5){
      break;
    }
    guessBro=prompt("Wanna try agian? You have "+guessBroCount+" tries left.");
  }
  if (guessBroCount===5){
    alert("Oh no! You ran out of guesses. My siblings' names are: "+bro.join(", "));
  }
  else{
    alert("Good guess! I have 5 siblings, "+bro.join(", "));
    score++;
  }
  alert("Thanks for playing! "+user+" You got "+score+"/7 questions right!");
}
//quiz();



