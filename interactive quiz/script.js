const questions=[
    {
        question:"HTML stands for __________",
        answers:[
            {text:"a) HyperText Markup Language",correct:true},
            {text:"b) HyperText Marking Language",correct:false},
            {text:"c) HyperText Machine Language",correct:false},
            {text:"d) HighText Markup Language",correct:false},

        ]
    },
    {
        question:"Which element is used for or styling HTML5 layout",
        answers:[
            {text:"a) java",correct:false},
            {text:"b) php",correct:false},
            {text:"c) python",correct:false},
            {text:"d) css",correct:true},
        ]
    },
    {
        question:"Which of the following is used to read an HTML page and render it",
        answers:[
            {text:"a) Web server",correct:false},
            {text:"b) Web network",correct:false},
            {text:"c) Web matrix",correct:false},
            {text:"d) Web browser",correct:true},
        ]
    },
    {
        question:"In which part of the HTML metadata is contained",
        answers:[
            {text:"a) title tag",correct:false},
            {text:"b) head tag",correct:true},
            {text:"c) html tag",correct:false},
            {text:"d) body tag",correct:false},
        ]
    },
    {
        question:"Which of the following colors contain equal amounts of RBG",
        answers:[
            {text:"a) white",correct:false},
            {text:"b) gray",correct:false},
            {text:"c) black",correct:false},
            {text:"d) All the above",correct:true},
        ]
    },
    {
        question:"What is the effect of the b tag",
        answers:[
            {text:"a) It converts the text within it to  bold font",correct:true},
            {text:"b) It is used to write black-colored font",correct:false},
            {text:"c) It is used to change the font size",correct:false},
            {text:"d) None of the above",correct:false},
        ]
    },
    {
        question:"What is the smallest header in HTML by default",
        answers:[
            {text:"a) h2",correct:false},
            {text:"b) h4",correct:false},
            {text:"c) h6",correct:true},
            {text:"d) None of the above",correct:false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;


function startQuiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML =questionNo +"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}


function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disable=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}




nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();