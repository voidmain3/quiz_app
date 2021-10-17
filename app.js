const questions = [ {
    question: "What is nature of CO2",
    options: ["acidic", "basic", "neutral", "none"],
    answer: "acidic",
    response: ""
}, 
{
    question: "Which of the following is not a datatype in js",
    options : ["integer", "string", "number", "boolean"],
    answer: "integer",
    response: ""
}, 
{
    question: "Which is not strictly typed lang",
    options: ["C++", "C", "Java", "Js"],
    answer: "Js",
    response: ""
},
{
    question: "Which of the following is not an array method", 
    options: ["map", "sort", "length", "splice"],
    answer: "splice",
    response: ""
},
{
    question: "Which of the following is not an programming lang", 
    options: ["C", "Go","css", "python" ],
    answer: "css",
    response: ""
},
{
    question: "Which of the following is an css property", 
    options: ["length", "transform", "splice", "sort"],
    answer: "transform",
    response: ""
}, 
{
    question: "Which of the following is closest to content", 
    options: ["border", "margin", "padding", "body"],
    answer: "padding",
    response: ""
}]

const options  = document.querySelectorAll('.option');
const removalOption = document.querySelector('.options')
const question = document.querySelector('.question');
const scoreCard = document.querySelector('.score')
let i =0;
let score = 0;



    question.innerText = questions[i].question
    options.forEach((option,index) => {
        option.innerText = questions[i].options[index]
    })

    options.forEach((option, index) => {
       
    option.addEventListener('click', ()=> {
        if(i<questions.length) {
            if(option.innerText === questions[i].answer) {
                scoreCard.innerText = `Score ${score+1}`
                score++;
                questions[i].response = option.innerText
            } else {
                questions[i].response = option.innerText
            }
            i++;
           if(i<questions.length) {
            question.innerText = questions[i].question
            options.forEach((option,index) => {
                option.innerText = questions[i].options[index]
            })
           } else {
               scoreCard.innerText = `Result: ${score}/${i}`
               questions.forEach(ques => {
                console.log(ques.response);
                removalOption.remove();
                question.innerText = ''
                let Marks;
                for(let i=0; i<questions.length; i++) {
                    let res = document.createElement('h3');
                    questions[i].response === questions[i].answer ?  Marks = 1 : Marks = 0 
                    res.innerHTML = `${i+1}. Correct is: <span>${questions[i].answer}</span> Your res: <span>${questions[i].response}</span> Marks:  <span>${Marks}</span>`
                    question.appendChild(res);
                }
            })
           } 
        
    }
    })
}
    
)



    


