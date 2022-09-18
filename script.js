/* AMINATION */
const testBtn=document.querySelector("#num5")
const clock=document.querySelector("#clock")
const logo = document.querySelector("#logo")


const clickableButtons=document.querySelectorAll(".clickable")
clickableButtons.forEach(butt=>{
    butt.addEventListener('mousedown',(e)=>{
        e.target.style.transform='scale(0.98,0.98)'
        e.target.classList.add("clicked")
    })
    butt.addEventListener('mouseup',(e)=>{
        e.target.style.transform='scale(1.02040816327,1.02040816327)'
        e.target.classList.remove("clicked")
    })
    
    butt.addEventListener('mouseout',(e)=>{
        e.target.style.transform='scale(1.02040816327,1.02040816327)'
        e.target.classList.remove("clicked")
    })
    
    
})
logo.addEventListener('click',()=>{
    ig="https://www.instagram.com/mtt.jpeg/"
    git="https://github.com/Mttt7/calculator"
    window.open(git, '_blank').focus();
    console.log(1)
    window.open(ig, '_blank')
    console.log(2)
})
/* --------------- */
/* Calculator */

let firstNumber=''
let secondNumber=''
let currentOperator=null
let shouldResetScreen=false


const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const calculatorScreen = document.querySelector("#screen")
const AC = document.querySelector("#AC")

numbers.forEach((number)=>{
    number.addEventListener('click',screenDisplay)
})

operators.forEach((operator)=>{
    operator.addEventListener('click',setOperation)
})
AC.addEventListener('click',clear)

function clear(){
    firstNumber=''
    secondNumber=''
    currentOperator=null
    shouldResetScreen=false
    calculatorScreen.innerText=''
}


function screenDisplay(e){
    if(shouldResetScreen){
        calculatorScreen.innerText=e.target.innerText
        shouldResetScreen=false
    }
    else calculatorScreen.innerText+=e.target.innerText
}

function setOperation(e){
    switch(e.target.innerText){
        case '+':
            currentOperator='+'
            break
        case '-':
            currentOperator='-'
            break
        case 'X':
            currentOperator='X'
            break
        case '/':
            currentOperator='/'
            break

    }
}


