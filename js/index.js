let pscore = 0
let cscore = 0

//setting playerm pick
let Buttons = document.querySelectorAll('button')

Buttons.forEach((button) =>{
    button.addEventListener('click', (event)=> {

        let player = event.target.id
        console.log(player)

        let computer = computerplay()
        Game(player, computer)
    })
    
})

//Setting the computer selection
function computerplay (){

    let random =  getRandomInt(3)

    if (random == 0){
        return "rock"
    }
    else if (random == 1){
        return "paper"
    }else{
        return  "scissors"
    }

 
}
console.log(computerplay())
  function getRandomInt(max) {

    return Math.floor(Math.random() * max);
  }
  
  //setting Game
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
  

//setting score
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
