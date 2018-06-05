"use strict";

var score=5;
confirm("Hello! would you like to take a quiz?");
if(confirm===false){
  alert("Too bad.");
}
var user=prompt("What's your name?").trim();
alert("Hi "+user+"! I'm Ethan. I'm gonna ask you questions about myself. See how many you can get right");
var eye=prompt("#1.My eye color is blue").toLowerCase().trim();
if (eye==="y"||eye==="yes"){
  alert("Correct! Lucky guess/good observations! I can never remember other people's.");
}
else if(eye==="n"||eye==="no"){
  alert("Sorry, they actually are. It's Okay, I can't see them either right now.");
  score=score-1;
}
else{
  alert("i didn't register that.");
  score=score-1;
}
var pet=prompt("#2.In my lifetime, my family has only owned 1 pet.").toLowerCase().trim();
if (pet==="y"||pet==="yes"){
  alert("What?!? no way! I've had seven, not even counting all the fish.");
  score=score-1;
}
else if(pet==="n"||pet==="no"){
  alert("Smart cookie. What kind of family only has one?");
}
else{
  alert("i didn't register that.");
  score=score-1;
}
var job=prompt("#3.I am currently working as a waiter when not in class").toLowerCase().trim();
if (job==="y"||job==="yes"){
  alert("I am! I am a server at the coralville market grille.");
}
else if(job==="n"||job==="no"){
  alert("On the weekends I work at one of market grilles at hyvee as a sever. Better luck on the next one.");
  score=score-1;
}
else{
  alert("i didn't register that.");
  score=score-1;
}
var fav=prompt("#4.My favorite video game is The Last of Us by Naughty Dog").toLowerCase().trim();
if (fav==="y"||fav==="yes"){
  alert("Right! haha this question is too specific to be false");
}
else if(fav==="n"||fav==="no"){
  alert("Wrong. Yo have you even played this game. The story alone is so good!");
  score=score-1;
}
else{
  alert("i didn't register that.");
  score=score-1;
}
var out=prompt("#5.I have never been out of the United States.").toLowerCase().trim();
if (out==="y"||out==="yes"){
  alert("Actually I've been lucky enough to be to Canada and Spain.");
  score=score-1;
}
if (out==="n"||out==="no"){
  alert("Correcto! I've been to Espana in 2015 and Canada in 2017");
}
else{
  alert("i didn't register that.");
}
alert("Thanks for playing! You got "+score+"/5 questions right!");