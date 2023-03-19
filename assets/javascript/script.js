
var startButton = document.getElementById('start-btn')
var restartButton = document.getElementById('restart-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var scoreControlsElement = document.getElementById('score-controls')
var timeBox = document.getElementById('timebox')
var userName = document.getElementById('msg')
var submitBtn = document.getElementById('submit')
let currentQuestionIndex = undefined;
var correct = 0;
var incorrect = 0;
startButton.addEventListener('click', startGame)
var countdowntime = 600;
function startGame(){
   startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
//------------------------------


var countdownEL = document.getElementById("time");
var countdown = setInterval(function(){
   var minutes = Math.floor(countdowntime / 60);
   var seconds = countdowntime % 60;
   countdownEL.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   countdowntime--;
   if (countdowntime < 0){
      clearInterval(countdown);
      countdownEL.textContent = "times up"
      youLose();
   }
}, 1000);
//--------------------
currentQuestionIndex = 0;
showQuestion()
}

function showQuestion(){
    const question = questions[currentQuestionIndex];
   questionElement.innerText = question.question;
   answerButtonsElement.innerHTML = '';
   question.answers.forEach(answer => {
       const button = document.createElement('button');
       button.innerText = answer.text;
       button.classList.add('btn');
       if (answer.correct){
           button.dataset.correct = answer.correct;
       }
       button.addEventListener('click',selectAnswer);
       answerButtonsElement.appendChild(button);
   })
   }
//-----------
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct){
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            gameOver();
        }
    } else {
        countdowntime -= 200;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            gameOver();
        }
        if (countdown <= 0){
            clearInterval(countdown)
            countdownEL.textContent = "times up";
            youLose();
        } 
      
    }
}
function gameOver (){
    var score = Math.round((countdowntime / 60)* 10);
    questionContainerElement.classList.add('hide')
    restartButton.classList.remove('hide')
    restartButton.addEventListener('click', go);
    var scoreElement = document.createElement('h2');
    scoreElement.innerText = `your score: ${score}`;
    questionContainerElement.parentElement.insertBefore(scoreElement, questionContainerElement.nextSibling);
    scoreControlsElement.classList.remove('hide')
    timeBox.classList.add('hide')
submitBtn.addEventListener('click', function(){
    
    
    var userData = {
    userName: userName.value,
    score: score
}
localStorage.setItem("userData", JSON.stringify(userData));
})
}




function youLose(){
restartButton.classList.remove('hide')
questionContainerElement.classList.add('hide')
restartButton.addEventListener('click', go)
}
function go(){
    location.reload();
}
   const questions = [
      {
       question: 'what is 2+2',
       answers:[
           {text: '4', correct:true},
           {text:'22', correct:false}
       ]
      },
      {
       question: 'what is 2+0',
       answers:[
           {text: '4', correct:true},
           {text:'22', correct:false}
       ]
      },
      {
       question: 'what is 2+222',
       answers:[
           {text: '4', correct:true},
           {text:'22', correct:false}
       ]
      },
      {
       question: 'what is 2+22',
       answers:[
           {text: '4', correct:true},
           {text:'22', correct:false}
       ]
      },
      {
       question: 'what is 2+1',
       answers:[
           {text: '4', correct:true},
           {text:'22', correct:false}
       ]
      }
   ]


