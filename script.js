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
const smallScreen = document.querySelector("#small-screen")
const AC=document.querySelector("#AC")
const numbers=document.querySelectorAll(".number")
const operands=document.querySelectorAll(".operand")



let storedValue=null
let num1=null
let num2=null
let op=null /* add mltp div sub*/

let override=false

numbers.forEach((numb)=>{
    numb.addEventListener('click',(e)=>{
        screen.innerText+=e.target.innerText
    })
})

AC.addEventListener('click',()=>{
    num1=null
    op=null
    num2=null
    screen.innerText=''
    smallScreen.innerText=''
})



operands.forEach((operand)=>{
    operand.addEventListener('click',eventHandler)
})


function displaySmallScreen(number,operator){
    smallScreen.innerText+=number+operator
}
function displayScreen(result){
    screen.innerText=result
}
function eventHandler(e){
    num1=screen.innerText
    op=e.target.innerText
    storeData(num1,op)
    displaySmallScreen(num1,op)
    num1=null
    op=null
    screen.innerText=''

}


var arr=[]
function storeData(number,operator){
    let result
    arr.push(number)
    arr.push(operator)
    
        result=operate(arr)
        displayScreen(result)
    
    console.log("ARR1:",arr)
    console.log('result:',result)
    

}

/*  [1,+,3,-,5,-,7,/,2,=]   len=9*/
//console.log(operate([2,'+',3,'-',10,'*',2,'/',3,'*',100,'=']))

function operate(a){
    let result

    console.log("ARR2",a)
    for(let i=0;i<a.length;i+=2){
        console.log("X")
        let temp
        if(a[i+2]){

            if(a[i+1]=='+'){
            temp=a[i+2]
            result = +(a[i])+(+temp)
            a[i+2]=result
            console.log("ARR3",a)
            a.splice(i,2)
            
            }
            else if(a[i+1]=='-'){
                temp=a[i+2]
                result = (+a[i])-(+temp)
                a[i+2]=result
                console.log("ARR3",a)
                a.splice(i,2)
            }
            else if(a[i+1]=='/'){
                temp=a[i+2]
                result = (+a[i])/(+temp)
                a[i+2]=result
                a.splice(i,2)
            }
            else if(a[i+1]=='X'){
                temp=a[i+2]
                result = (+a[i])*(+temp)
                a[i+2]=result
                a.splice(i,2)
            }
        }
    }
    return result


        /*
    let result
    switch(op) {
        case 'X':
            result=num1*num2
            screen.innerText=result
          break;
        case '+':
            result=(+num1)+(+num2)
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
        */
}
