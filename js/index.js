let pscore = 0
let cscore = 0

//Setting Player Selection
let Buttons = document.querySelectorAll('img')

Buttons.forEach((button) =>{
    button.addEventListener('click', (event)=> {

        let player = event.target.id
        

        let computer = computerplay()
        Game(player, computer)
        
        return;
    })
    
})

//Setting  computer random selection selection
function computerplay (){

    let random =  getRandomInt(3)

    if (random === 0){
        return "rock"
    }
    else if (random === 1){
        return "paper"
    }else{
        return  "scissors"
    }

 return;
}

  function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  }
   
  // Playing Round

  function Game(player, computer){
    const message = document.querySelector('.result')

      if (player === "rock" && computer === "scissors"){

          message.textContent = `You win ${player} beats  ${computer} `
          pscore++
       
     }
      else if (player === "paper" && computer === "rock"){

        message.textContent = `You win ${player} beats  ${computer} `
        pscore++

      }
      else if (player === "scissors" && computer === "paper" ){
        message.textContent = `You win ${player} beats  ${computer} `
        pscore++
       
        

      }
      else if (player === computer){
        message.textContent = `Its a Draw you both play ${computer} `
      }
      else {
          message.textContent = `Computer Wins ${computer} beats  ${player} ` 
        cscore++
      }
      
      score()
      
  }
  

//Setting both player and computer score 

function score() {
    let playerScorer = document.querySelector('#playerscore')
    let computerScorer = document.querySelector('#computerscore')

    playerScorer.innerHTML = `You : ${pscore}`;
    computerScorer.innerHTML = `Computer : ${cscore}`;
    choosingwinner(pscore, cscore)
}

//Choosing the winnner

function  choosingwinner(){
    const message = document.querySelector('.result')
    if (pscore >= 5 && cscore < 5) {
        message.textContent = 'Game Over. You Win!';
        pscore = 0
        cscore = 0
      } else if (pscore < 5 && cscore >= 5) {
        message.textContent = 'Game Over. You Lose!';
        pscore = 0
        cscore = 0

      } 
     
}
