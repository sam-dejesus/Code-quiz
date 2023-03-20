// these are all of the global var used in the application
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
var countdowntime = 600;
var currentQuestionIndex = undefined;
// will start the game
startButton.addEventListener('click', startGame)
//the function that starts the game it styles the webpage and starts the timer function
function startGame(){
    intro.classList.add('hide')
    timer.classList.remove('hide')
   startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
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

currentQuestionIndex = 0;
showQuestion()
}
// allows the questions and buttons to change and create buttons for each answer
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
// these are the controls for the answers and what happens if the right or wrong answer is pressed
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
        countdowntime -= 120;
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
//when the quiz is finished the gameOver function will be called and it will display the input tag 
//to get the users name and allows them to save their score
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
        alert("you need to write something in the name box")
        return null;
    }
    var userData = {
    userName: userName.value,
    score: score
}
localStorage.setItem("userData", JSON.stringify(userData));
})
}



// if time runs out the you lose function will display and give the user options to restart the quiz
function youLose(){
restartButton.classList.remove('hide')
questionContainerElement.classList.add('hide')
restartButton.addEventListener('click', go)
}
// if the user presses the restart button the go function will be called and refresh the page
function go(){
    location.reload();
}
// contains all questions and answers that will be displayed
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
           {text:'are both css frameworks', correct:false},
           {text: 'A & B', correct:true},
           {text:'a type of coffee',  correct:false}
       ]
      },
      {
       question: 'a function inside an object is?',
       answers:[
           {text: 'a class', correct:false},
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
        question: 'the insides of a functions parentheses is?',
        answers:[
            {text: 'the target', correct:false},
            {text:'the event', correct:false},
            {text: 'A & B', correct:false},
            {text:'the parameters',  correct:true}
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


