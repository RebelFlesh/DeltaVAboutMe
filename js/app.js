"use strict";

var score=5;
confirm("Hello! would you like to take a quiz?");
if(confirm===false){
  alert("Too bad.");
}
var user=prompt("What's your name?").trim();
alert("Hi "+user+"! I'm Ethan. I'm gonna ask you questions about myself. See how many you can get right");
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
alert("Thanks for playing! You got "+score+"/5 questions right!");