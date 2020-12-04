let gamePattern = [];
let userClickedPattern =[];
let level = 0
let started = false;
let buttonColours = ["red",'blue','green','yellow'];


const sounds = {
    blue : new Audio('sounds/blue.mp3'),
    green : new Audio('sounds/green.mp3'),
    red : new Audio('sounds/red.mp3'),
    yellow : new Audio('sounds/yellow.mp3'),
    wrong : new Audio('sounds/wrong.mp3'),
}

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });


$('.btn').click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      
      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }

}

function nextSequence() {
    userClickedPattern = [];
    let number = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[number]
    level++;
    $("#level-title").text("Level " + level);
    const soundsToPlay = sounds[randomChosenColour];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    soundsToPlay.play();
}

function playSound(name){
   
    const soundsPlay = sounds[name];
    soundsPlay.play();
}
function randomNumber(array){
    
    return number
}




function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }


function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}