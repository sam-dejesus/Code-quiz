
var startButton = document.getElementById('start-btn')
var restartButton = document.getElementById('restart-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var scoreControlsElement = document.getElementById('score-controls')
var timeBox = document.getElementById('timebox')
var userName = document.getElementById('msg')
var submitBtn = document.getElementById('submit')
var timer = document.getElementById('div-timer')
var intro = document.getElementById('intro')
let currentQuestionIndex = undefined;

startButton.addEventListener('click', startGame)
var countdowntime = 600;
function startGame(){
    intro.classList.add('hide')
    timer.classList.remove('hide')
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
        countdowntime -= 180;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            gameOver();
        }
        if (countdowntime <= 0){
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
    if(userName.value === ""){
        return null;
    }
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
       question: 'what is javascript?',
       answers:[
           {text: 'a coding language', correct:true},
           {text:'a type of coffee', correct:false},
           {text: 'an api for css', correct:false},
           {text:'a css framework',  correct:false}
       ]
      },
      {
       question: 'tailwind and bootstrap are?',
       answers:[
           {text: 'are both api', correct:false},
           {text:'are both frameworks for css', correct:false},
           {text: 'A & B', correct:true},
           {text:'a type of coffee',  correct:false}
       ]
      },
      {
       question: 'a function inside an object is?',
       answers:[
           {text: 'its called a function inside an object', correct:false},
           {text:'super object', correct:false},
           {text: 'constructor function', correct:false},
           {text:'a method',  correct:true}
       ]
      },
      {
       question: 'OOP stands for?',
       answers:[
           {text: 'object operator procedures', correct:false},
           {text:'object oriented programing', correct:true},
           {text: 'object order performance', correct:false},
           {text:'object obstruction programing',  correct:false}
       ]
      },
      {
       question: 'JSON is?',
       answers:[
           {text: 'a framework for javascript', correct:false},
           {text:'an api for javascript', correct:false},
           {text: 'an sdk for javascript', correct:false},
           {text:'is a lightweight format for storing and transporting data',  correct:true}
       ]
      },
      {
        question: 'what does DOM stand for?',
        answers:[
            {text: 'Document Output Model', correct:false},
            {text:'Document Object Model', correct:true},
            {text: 'Document Object Mode', correct:false},
            {text:'Document Object Mode',  correct:false}
        ]
       },
       {
        question: 'the insides of a functions parentheses is called ?',
        answers:[
            {text: 'target', correct:false},
            {text:'event', correct:false},
            {text: 'A & B', correct:false},
            {text:'parameters',  correct:true}
        ]
       },
       {
        question: 'arrays use what type of syntax?',
        answers:[
            {text: '()', correct:false},
            {text:'{}', correct:false},
            {text: '[]', correct:true},
            {text:':',  correct:false}
        ]
       },
       {
        question: 'which is not a datatype?',
        answers:[
            {text: '&&', correct:true},
            {text:'null', correct:false},
            {text: 'true', correct:false},
            {text:'"Jimmy went to school',  correct:false}
        ]
       },
       {
        question: 'which is correct?',
        answers:[
            {text: 'script src=script.js script', correct:false},
            {text:'<script>src = script.js<script>', correct:false},
            {text: '<script scr = script.js><script>', correct:true},
            {text:'<script src= script.js script>',  correct:false}
        ]
       }
   ]


