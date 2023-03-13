var countdowntime = 600;
var correct = 0;
var incorrect = 0;
var countdownEL = document.getElementById("time");
var countdown = setInterval(function(){
   var minutes = Math.floor(countdowntime / 60);
   var seconds = countdowntime % 60;
   countdownEL.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   countdowntime--;
   if (countdowntime < 0){
      clearInterval(countdown);
      countdownEL.textContent = "times up"
   }
}, 1000);
var submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', Response);

function Response(){
var answersone = "b";
var yesone = document.getElementById("yes").checked

if (yesone === true){
    alert("hiiii")
}

   }
