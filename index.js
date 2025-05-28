

const arr = [
    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ],
        rights:[
            {rightanswer:"Blue Whale"}
        ]
    },
    {
        question:"Which is the smallest country in the world?",
        answers:[
            {text:"Vatican City",correct:true},
            {text:"Bhutan",correct:false},
            {text:"Nepal",correct:false},
            {text:"Sri Lanka",correct:false}
        ],
        rights:[
            {rightanswer:"Vatican City"}
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari",correct:false},
            {text:"Gobi",correct:false},
            {text:"Sahara",correct:false},
            {text:"Antartica",correct:true}
        ],
        rights:[
            {rightanswer:"Gobi"}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false}
        ],
        rights:[
            {rightanswer:"Australia"}
        ]
    }
];

const questionElement = document.querySelector('#question')
const answerdd = document.querySelector('#answerdd')
const nextbtn = document.querySelector('#next-btn')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
let isAnswered = false;

let currentquestionindex = 0;
let score = 0;
let currentquestion = arr[currentquestionindex];
let questionNo = currentquestionindex + 1;

function startQuiz(){
    currentquestionindex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion(currentquestionindex);
}

function showQuestion(currentquestionindex){
    
    if(currentquestionindex==4){
        result();
        
    }
    if(currentquestionindex==0){
        btn1.style.display = "flex"
        btn2.style.display = "flex"
        btn3.style.display = "flex"
        btn4.style.display = "flex"
    }
   
    currentquestion = arr[currentquestionindex];
     questionNo = currentquestionindex + 1;
     
    questionElement.innerHTML = `${questionNo}. ${currentquestion.question}`;
    let count = 1;
        currentquestion.answers.forEach(answer=>{
           
            
            if(count==1){
                btn1.innerHTML = answer.text
            }
            if(count==2){
                btn2.innerHTML = answer.text
            }
            if(count==3){
                btn3.innerHTML = answer.text
            }
            if(count==4){
                btn4.innerHTML = answer.text
            }
            count++;
            
        })
        disableAllButtons()
}
function result(){
    
    btn1.style.display = "none"
    btn2.style.display = "none"
    btn3.style.display = "none"
    btn4.style.display = "none"
   
      questionElement.innerHTML = `You scored ${score} out of 4`
      
            nextbtn.innerHTML = "Play Again"
            score = 0;
            currentquestionindex = -1;
            
}
function enableAllButtons() {
    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
    btn4.disabled = false
   
}

nextbtn.addEventListener('click',function reset(){
   
      currentquestionindex+=1;
      btn1.style.backgroundColor = "";
      btn2.style.backgroundColor = "";
      btn3.style.backgroundColor = "";
      btn4.style.backgroundColor = "";
     isAnswered = false;
      showQuestion(currentquestionindex)
})


function disableAllButtons() {
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = true
    
   
}

btn1.addEventListener('click',function cbtn1(){
    
    if(isAnswered==false){
        if(questionNo==2){
            score+=1;
            btn1.style.backgroundColor = "green";
           
        }else{
            btn1.style.backgroundColor = "red"
           
        }
        disableAllButtons()
    }
    isAnswered = true;
    
  
    
})
btn2.addEventListener('click',function cbtn2(){
    
    if(isAnswered==false){
        if(questionNo==2 || questionNo==3){
            btn2.style.backgroundColor = "red"
            
        }else{
            score+=1;
            btn2.style.backgroundColor = "green";
           
            
        }
        disableAllButtons()
    }
    isAnswered = true;
    
})
btn3.addEventListener('click',function cbtn3(){
    
    
        if(isAnswered==false){
            btn3.style.backgroundColor = "red";
            disableAllButtons()
        }
        isAnswered = true;
    
})
btn4.addEventListener('click',function cbtn4(){
   
    if(isAnswered==false){
        if(questionNo==3){
            btn4.style.backgroundColor = "green"
          
            score+=1;
        }else{
            btn4.style.backgroundColor = "red"
            
        }
        disableAllButtons()
    }
    isAnswered = true;
   
    
})

startQuiz()



























