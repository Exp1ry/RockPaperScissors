// Setting totalScore object as a global object
const totalScore = {computerScore: 0, playerScore: 0}

// RPS Randomizer for computerChoice
const getComputerChoice = () => {
  let arr = ['Rock', 'Paper', 'Scissors']

  newArr = arr[Math.floor(Math.random() * arr.length)]

  return newArr
}

// Gets result from Player and Computer, creating a score variable to keep assign WINNERS and LOSERS
const getResult = (playerChoice, computerChoice) => {

  let score;


  if (playerChoice === computerChoice) {
    score = 0
  }

  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }


  else {
    score = -1
  }

  return score
}

// Updating the DOM with Results according to the score which was from previous func
const showResult = (score, playerChoice, computerChoice) => {


  let results = document.querySelector('#result')
  const handsDiv = document.querySelector('#hands')
  const playerScoreDiv = document.querySelector('#player-score')

  if (score === -1) {

    results.innerText = 'You lose :('
    // Adds 1 to computerScore if we lose
    totalScore['computerScore']++
    results.style.color = 'red'
  }
  else if (score === 0) {

    results.innerText = 'TIE!'
    results.style.color = 'blue'
  }
  else if (score === 1) {

    results.innerText = 'WINNER!'
    results.style.color = 'green'
  }
handsDiv.innerText = ` 👨 ${playerChoice} VS 🤖 ${computerChoice}`

  playerScoreDiv.innerText = `👨 Score = ${totalScore.playerScore}  
🤖 Score = ${totalScore.computerScore}`
}
// Calling previous functions 
const onClickRPS = (playerChoice) => {
  
  computerChoice = getComputerChoice()

  // Calling getResult function and assigning it as score
  let score = getResult(playerChoice, computerChoice)

  totalScore['playerScore']+= score
// Updating DOM with current score
  let domScore = document.querySelector('#player-score').textContent = score

  // Calling showResult 
  showResult(score, playerChoice, computerChoice)

}

// Main function
const playGame = () => {

// Selects all RPS buttons
  const rpsBtns = document.querySelectorAll('.rpsButton')

// forEach loop goes through all 3 RPS buttons and assigns onclick listener, and calls onClickRPS function with value of button we clicked
  rpsBtns.forEach(i => {
    i.onclick = () => onClickRPS(i.value)
  })

  
// End game assignment and onclick event listener to call future endGame func
  const endGameDiv = document.querySelector('#endGameButton')

  endGameDiv.onclick = () => endGame(totalScore)
}

// Resets all scores
const endGame = (totalScore) => {

    const results = document.querySelector('#result').innerText = ''
  const handsDiv = document.querySelector('#hands').innerText = ''
  const playerScoreDiv = document.querySelector('#player-score').innerText = ''
 
totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  
}
playGame()























