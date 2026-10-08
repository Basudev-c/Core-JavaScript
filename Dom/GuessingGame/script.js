const rendomNo = Math.floor(Math.random()*10)
const inputNo = document.getElementById("guessNo")
const message = document.getElementById("message")
const guessBTN = document.getElementById("guessBTN")

console.log(rendomNo,inputNo,message,guessBTN)

guessBTN.addEventListener("click",()=>{
    const guess = Number(inputNo.value)
    
    if(!guess || guess > 10 || guess < 1){
        message.innerText = "Guess between 1-10"
    }else if(guess == rendomNo){
        message.innerText = "Congratulation You Won"
    }else if(guess > rendomNo){
        message.innerText = "Too high"
    }else{
        message.innerText = "Too Low"
    }
})






