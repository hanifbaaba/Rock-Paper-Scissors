let playerScore = 0
let computerScore = 0

function playGame(userChoice){
  const choices = ["rock","paper","scissors"]
  const computerChoice = choices[Math.floor(Math.random() * 3)]
  document.getElementById('result').innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}`

const result = determineWinner(userChoice, computerChoice)

document.getElementById('result').innerHTML += `<br>Result: ${result}`
updateScore(result)

}


function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'its a tie!'
    }
    if(
        (userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice=== 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        playerScore++
        return 'You win'
}
     computerScore++
    return 'Computer wins'
}
   
   function updateScore(result){
document.getElementById('playerScore').innerHTML = `User: ${playerScore}`
document.getElementById('computerScore').innerHTML = `Computer: ${computerScore}`
   }
   
   
   
   
   
    

 
    