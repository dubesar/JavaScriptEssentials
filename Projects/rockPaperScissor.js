const getUserChoice = userInput => {
  input = userInput.toLowerCase() 
  if(input === 'rock' || input === 'paper' || input === 'scissores'){
    return input
  } 
  else{
    console.log("Error")
  }
}

const getComputerChoice = () => {
  if (Math.floor(Math.random()*2) == 0) {
    return "rock"
  } 
  else if(Math.floor(Math.random()*2) == 1) {
    return "paper"
  }
  else {
    return "scissors"
  }
}

const determineWinner = (userChoice,computerChoice) => {

  if(computerChoice === userChoice) {
    return "tie"
  }
  if(userChoice === "rock"){
    if(computerChoice === "paper"){
      return "computer won"
    }
    else {
      return "user won"
    }
  }
  if (userChoice === "paper") {
    if(computerChoice === "rock"){
      return "user wom"
    }
    else{
      return "computer won"
    }
  }
  if(userChoice === "scissors") {
    if(computerChoice === "rock"){
      return "computer won"
    }
    else{
      return "user won"
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('rock')
  let computerChoice = getComputerChoice()

  console.log(userChoice,computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
}

playGame()

console.log(getUserChoice('Rock'))
