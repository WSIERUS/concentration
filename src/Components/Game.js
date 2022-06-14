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
    }, 10)
  })
}

countersRender = (information) => {

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

    information.appendChild(counterDiv)
  })
}

updateTrialCounter = () => {
  trialCounter++
  document.getElementById('counter-trials').textContent = trialCounter
}

updateWinTrialCounter = () => {
  winTrialCounter++
  document.getElementById('counter-win-trials').textContent = winTrialCounter
}

updateLoseTrialCounter = () => {
  loseTrialCounter++
  document.getElementById('counter-lose-trials').textContent = loseTrialCounter
}

informationRender = (game) => {
  const information = document.createElement('section')
  information.className = 'game-information'
  countersRender(information)
  game.appendChild(information)
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

  informationRender(game)
  gameRowRender()
  gameCardArrayRender()
  

  return game
}

gameCheckCard = (card, element) => {

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

  updateWinTrialCounter()

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

  updateLoseTrialCounter()
}

function checkWin() {
  if(CardsArray.filter(card => card.able === true).length === 0) {
    alert("Gratulacje zwycięstwo") // zmienić na jakiś napis do góry zamiast licznika
  }
}

gamePairCheckResult = () => { // 
  if(firstCheckedCard.idImage === secondCheckedCard.idImage) {
    winPair(firstCheckedCard, secondCheckedCard)
  }
  else {
    losePair(firstCheckedCard, secondCheckedCard)
  }
  updateTrialCounter()
  checkWin()
}

gameStart()

restartGame = () => {
  
}