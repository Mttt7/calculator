const testBtn=document.querySelector("#num5")
const clock=document.querySelector("#clock")
const logo = document.querySelector("#logo")

/* AMINATION */
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


/* CLOCK */
/*
function updateClock(){ 
    let date=new Date()
    
    let hour=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    if(hour<10){
        hour="0"+date.getHours()
    }
    if(minute<10){
        minute="0"+date.getHours()
    }
    if(second<10){
        second="0"+date.getHours()
    }
    currentTime=hour+":"+minute+":"+second
    clock.innerHTML=currentTime
        
    
    
}
setInterval(updateClock,1000)
*/


/* CALCULATOR */
const screen = document.querySelector("#screen")
const AC=document.querySelector("#AC")
const numbers=document.querySelectorAll(".number")
const operands=document.querySelectorAll(".operand")
let num1
let num2
let op /* add mltp div sub*/


numbers.forEach((numb)=>{
    numb.addEventListener('click',(e)=>{
        screen.innerText+=e.target.innerText
        
    })
})
AC.addEventListener('click',()=>{
    num1=undefined
    op=undefined
    num2=undefined
    screen.innerText=''
})
operands.forEach((operand)=>{
    operand.addEventListener('click',(e)=>{
        if(screen.innerText!=''){
        if(num1===undefined){
            num1=screen.innerText
            screen.innerText=''
            console.log("num1 is",num1)
        }
        else if(num2===undefined){
            num2=screen.innerText
            screen.innerText=''
            console.log("num2 is",num2)
        }
        if(e.target.innerText==='='){
            console.log("XXX")
            operate(num1,num2,op)
        } 
        op=e.target.innerText
    }
    })
})





function operate(num1,num2,op){
    let result
    switch(op) {
        case 'X':
            result=num1*num2
            screen.innerText=result
          break;
        case '+':
            result=num1+num2
            screen.innerText=result
          break;
        case '-':
            result=num1-num2
            screen.innerText=result
          break;
        case '/':
            result=num1/num2
            screen.innerText=result
          break;
        default:
        
      }
      return result

}
