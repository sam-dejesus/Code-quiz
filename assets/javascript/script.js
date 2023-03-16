
var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
let currentQuestionIndex = undefined;
var correct = 0;
var incorrect = 0;
startButton.addEventListener('click', startGame)

function startGame(){
   startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
//------------------------------
var countdowntime = 600;

var countdownEL = document.getElementById("time");
var countdown = setInterval(function(){
   var minutes = Math.floor(countdowntime / 60);
   var seconds = countdowntime % 60;
   countdownEL.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
   countdowntime--;
   if (countdowntime < 0){
      clearInterval(countdown);
      countdownEL.textContent = "times up"
      gameOver();
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
        incorrect++;
    }
}
function gameOver (){

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


