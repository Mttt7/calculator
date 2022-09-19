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
logo.addEventListener('click',(e)=>{
    git="https://github.com/Mttt7/calculator"
    window.open(git)
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
const smallScreen = document.querySelector("#small-screen")
const AC = document.querySelector("#AC")
const equalBtn = document.querySelector("#equal")
const point = document.querySelector("#point")
const backspace = document.querySelector("#backspace")

numbers.forEach((number)=>{
    number.addEventListener('click',screenFromEventDisplay)
})

operators.forEach((operator)=>{
    operator.addEventListener('click',setOperation)
})
point.addEventListener('click',addPoint)

backspace.addEventListener('click',backSpace)

AC.addEventListener('click',clear)

equalBtn.addEventListener('click',evaluate)

function addPoint(){
    if(calculatorScreen.innerText.includes('.')) return
    calculatorScreen.innerText+='.'
}

function backSpace(){
    if(!calculatorScreen.innerText) return
    calculatorScreen.innerText=calculatorScreen.innerText.slice(0,-1)
}


function evaluate(){
    
    let result=null
    if(currentOperator==null) return
    secondNumber=calculatorScreen.innerText
    result=Math.round((doMath() + Number.EPSILON) * 100000000000) / 100000000000
    recentEvaluationsDisplay()
    screenDisplay(result)
    

}
function doMath(){
    let a = +firstNumber
    let b = +secondNumber
    let op = currentOperator
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(op)

    switch(op){
        case '+':
            return a + b
        
        case '-':
            return a - b
            
        case 'X':
            console.log(a*b)
            return a * b
            
        case '/':
            if(b==0){
                return "XD"
            }
            return a / b
            
    }
    
}


function clear(){
    firstNumber=''
    secondNumber=''
    currentOperator=null
    shouldResetScreen=false
    calculatorScreen.innerText=''
    smallScreen.innerText=''
}



function recentEvaluationsDisplay(){
    smallScreen.innerText=`${firstNumber} ${currentOperator} ${secondNumber} =`
}
function screenDisplay(num){
    calculatorScreen.innerText=num
}
function screenFromEventDisplay(e){
    if(e.target.innerText=='0' && calculatorScreen.innerHTML=='0') return
   else if(e.target.innerText!='0' && calculatorScreen.innerHTML=='0') calculatorScreen.innerText=''
    if(shouldResetScreen){
        calculatorScreen.innerText=e.target.innerText
        shouldResetScreen=false
    }
    else calculatorScreen.innerText+=e.target.innerText
}

function setOperation(e){
    firstNumber=calculatorScreen.innerText
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
    shouldResetScreen=true
}


