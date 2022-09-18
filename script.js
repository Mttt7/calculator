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







