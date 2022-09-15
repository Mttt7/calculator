const testBtn=document.querySelector("#num5")


/* ZMIENIC po kliknieciu zmiana klasy na disabled i spowrtoem */
testBtn.addEventListener('mousedown',(e)=>{
    console.log(e.target)
    e.target.style.transform='scale(0.98,0.98)'
    e.target.style.boxShadow="0px 0px 0px "
})
testBtn.addEventListener('mouseup',(e)=>{
    console.log(e.target)
    e.target.style.transform='scale(1.02040816327,1.02040816327)'
    e.target.style.boxShadow="6px 6px 0px black"
   
})