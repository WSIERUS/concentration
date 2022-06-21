
let CardsArray = []

let firstCheckedCard = ''
let secondCheckedCard = ''

const countersArray = [
  {id: 'counter-trials', name: 'All Trials'}, 
  {id: 'counter-win-trials', name: 'Win Trials'}, 
  {id: 'counter-lose-trials', name: 'Lose Trials'}
]

let trialCounter = 0
let winTrialCounter = 0
let loseTrialCounter = 0

gameStart = () => { // Start New Game
  CardsArray = []
  gameCardArrayCreate = () => {
    Cards.map(card => {
      card.clicked = false
      card.able = true
      CardsArray.push(card)
    })
    CardsArray.sort(() => (Math.random() > 0.5) ? 1 : -1)
  }
  gameCardArrayCreate()
}

gameCardArrayRender = () => { // Render Cards in Row - Always 4 or less in single row
  let index = 0
  CardsArray.map(card => {
    setTimeout(() => {
      const row = document.querySelector(`#row-${parseInt(index/4)}`)
      row.appendChild(
        new Card(card.id ,card.idImage, card.image, 'game-card', () => {}, 'game-card-moved', card.clicked, card.able).handleRender
      )
    index++
    }, 0)
  })
}

countersRender = (stats) => {

  countersArray.map(counter => {

    let counterIndex = document.createElement('span')
    counterIndex.setAttribute('id', counter.id)
    counterIndex.className = 'counter-index'
    counterIndex.textContent = 0

    let counterName = document.createElement('span')
    counterName.setAttribute('id', `${counter.id}-name`)
    counterName.className = 'counter-name'
    counterName.textContent = counter.name + ': '

    let counterDiv = document.createElement('div')
    counterDiv.className = 'counter-div'
    counterDiv.appendChild(counterName)
    counterDiv.appendChild(counterIndex)

    stats.appendChild(counterDiv)
  })
}

updateCounters = () => { // every losed or winned pair
  document.getElementById('counter-trials').textContent = trialCounter
  document.getElementById('counter-win-trials').textContent = winTrialCounter
  document.getElementById('counter-lose-trials').textContent = loseTrialCounter
}

statsRender = (game) => { // render stats and counters
  const stats = document.createElement('section')
  stats.className = 'game-information'
  countersRender(stats)
  game.appendChild(stats)
}

gameRender = () => { // Render Game Front-End

  const game = document.createElement('div')
  game.className = 'game'

  const gameRowRender = () => { // Row for cards is generate here
    for(let i = 0 ; i < CardsArray.length/4; i++) {
      const row = document.createElement('div')
      row.className = 'game-row-cards'
      row.setAttribute('id', `row-${i}`)
      game.appendChild(row)
    }
  } 

  statsRender(game)
  gameRowRender()
  gameCardArrayRender()
  

  return game
}

gameCheckCard = (card, element) => { //Check and changeState for choised card

  let indexCard = CardsArray.findIndex(ele => card.id === ele.id)

  if(firstCheckedCard == false && CardsArray[indexCard].clicked === false && CardsArray[indexCard].able === true) {
    element.src = CardsArray[indexCard].image

    CardsArray[indexCard].clicked = true

    firstCheckedCard = card
  }
  else if(secondCheckedCard == false && CardsArray[indexCard].clicked === false && CardsArray[indexCard].able === true) {
    element.src = CardsArray[indexCard].image

    CardsArray[indexCard].clicked = true

    secondCheckedCard = card

    gamePairCheckResult()
  }

}

function winPair(first, second) {

  firstCheckedCard = ''
  secondCheckedCard = ''

  let indexCardFirst = CardsArray.findIndex(card => card.id === first.id) 
  let indexCardSecond = CardsArray.findIndex(card => card.id === second.id)

  function handleBlockCard(index, id) {
    CardsArray[index].clicked = false
    CardsArray[index].able = false
    let element = document.getElementById(id.id)
    element.style.opacity = 0.5
    element.style.borderColor = 'rgba(0,0,0,0)'
    element.style.cursor = 'default'
  }

  handleBlockCard(indexCardFirst, first)
  handleBlockCard(indexCardSecond, second)

  winTrialCounter++
  updateCounters()

}

function losePair(first, second) {

  let indexCardFirst = CardsArray.findIndex(card => card.id === first.id) 
  let indexCardSecond = CardsArray.findIndex(card => card.id === second.id)

  setTimeout(() => {
    firstCheckedCard = ''
    secondCheckedCard = ''

    CardsArray[indexCardFirst].clicked = false
    CardsArray[indexCardSecond].clicked = false
  
    document.getElementById(first.id).src = defaultImage
    document.getElementById(second.id).src = defaultImage
  }, 1000)

  loseTrialCounter++
  updateCounters()
}

function checkWin() { // Check Win Game
  if(CardsArray.filter(card => card.able === true).length === 0) {

    const congratulationSection = document.createElement('div')
    congratulationSection.className = 'game-congratulation'

    congratulationSection.appendChild(
      new Description(`Congrats victory! You did ${trialCounter} trials`, 'congrats-description').handleRender
    )
    congratulationSection.appendChild(
      new Button('Start Again!', false, 'congrats-button', () => restartGame(true), 'congrats-button-moved').handleRender
    )
  
    handleOpenCongrats(congratulationSection)
  }
}

gamePairCheckResult = () => { // 

  if(firstCheckedCard.idImage === secondCheckedCard.idImage) {
    winPair(firstCheckedCard, secondCheckedCard)
  }
  else {
    losePair(firstCheckedCard, secondCheckedCard)
  }

  trialCounter++
  updateCounters()
  checkWin()
}

gameStart()

restartGame = (isRoute) => { // restart with 2 option if only restarting or if with routing
  firstCheckedCard = ''
  secondCheckedCard = ''
  trialCounter = 0
  winTrialCounter = 0
  loseTrialCounter = 0
  CardsArray=''
  menuOpen = false
  gameStart()
  console.log(CardsArray)
  if(isRoute == true) handleRouteToGame()
}