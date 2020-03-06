// select all elements from HTML
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreEl = document.getElementById("scoreContainer");
const qImg = document.getElementById("qImg");
const welcome = document.getElementById("h1")
const instructions = document.getElementById("h2")

var correctAnswers = 0;


// alert("Welcome to my quiz! There are 10 questions and you have 5 seconds for each question. GOOD LUCK!");

// create object questions
let questions = [
    {
        question: "What flower is it?",
        img     : "image/cherry-blossom.jpg",
        choiceA : "Cherry blossom",
        choiceB : "Tulip",
        choiceC : "Rose",
        choiceD : "Orchid",
        correct : "A"
    
    },{
        question: "What flower is it?",
        img     : "image/daffodil.jpg",
        choiceA : "Orchid",
        choiceB : "Rose",
        choiceC : "Daffodil",
        choiceD : "Sunflower",
        correct : "C"
    },{
        question: "What flower is it?",
        img     : "image/ochid.jpg",
        choiceA : "Cherry blossom",
        choiceB : "Tulip",
        choiceC : "Rose",
        choiceD : "Orchid",
        correct : "D"
    },{
        question: "What flower is it?",
        img     : "image/hydrangea.jpg",
        choiceA : "Hydrangea",
        choiceB : "Tulip",
        choiceC : "Daffodil",
        choiceD : "Crape myrtle",
        correct : "A"
    },{
        question: "What flower is it?",
        img     : "image/Hyacinths.jpg",
        choiceA : "Magnolia",
        choiceB : "Tulip",
        choiceC : "Hyacinths",
        choiceD : "Crape myrtle",
        correct : "C"
    },{
        question: "What flower is it?",
        img     : "image/crape-myrtle.jpg",
        choiceA : "Magnolia",
        choiceB : "Crape myrtle",
        choiceC : "Hydrangea",
        choiceD : "Orchid",
        correct : "B"
    },{
        question: "What flower is it?",
        img     : "image/magnolia.jpg",
        choiceA : "Magnolia",
        choiceB : "Plumeria",
        choiceC : "Sunflower",
        choiceD : "Crape myrtle",
        correct : "A"
    },{
        question: "What flower is it?",
        img     : "image/tulip.jpg",
        choiceA : "Cherry blossom",
        choiceB : "Tulip",
        choiceC : "Rose",
        choiceD : "Orchid",
        correct : "B"
    },{
        question: "What flower is it?",
        img     : "image/siam-tulip.jpg",
        choiceA : "Cherry blossom",
        choiceB : "Siam tulip",
        choiceC : "Rose",
        choiceD : "Orchid",
        correct : "B"
    },{
        question: "What flower is it?",
        img     : "image/plumeria.jpg",
        choiceA : "Orchid",
        choiceB : "Rose",
        choiceC : "Daffodil",
        choiceD : "Plumeria",
        correct : "D"
    }
];

// variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 5; 
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.img +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    //instructions.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    setTime();
    renderProgress();

}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

// function renderCounter(){
//     if (count <= questionTime)
//     {
//     counter.innerHTML = count ;
//     count++;
//     } else
//     {
//     count = 0;
//     answerIsWrong();
//     if (runningQuestion < lastQuestion)
//     {
//     runningQuestion++;
//     renderQuestion();
//     } else
//     {
//     clearInterval(TIMER);
//     scoreRender();
//     }
//     }
// }

var secondsLeft = 46;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}


// check the answer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        correctAnswers++
        score++;
        
        answerIsCorrect();
    }else{
        
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        
        clearInterval(TIMER);
        scoreRender();
    }
}

// if answer is correct the button turns green
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// if answer is Wrong the button turns red
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

// show score %
function scoreRender(){
    scoreEl.style.display = "block";
    const scorePerCent =(correctAnswers/10)*100;
    scoreEl.innerHTML += "<p>"+ scorePerCent +"%</p>";
    console.log(scorePerCent);
}








  