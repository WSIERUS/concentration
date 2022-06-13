let CardsArray = []

let firstCheckedCard = ''
let secondCheckedCard = ''

let trialCounter = 0

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

countersRender = () => {
  
}

informationRender = (game) => {
  const information = document.createElement('section')
  information.className = 'game-information'
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

  counterRender(game)
  gameRowRender()
  gameCardArrayRender()
  

  return game
}

updateCounter = () => {
  document.querySelector('.counter').textContent = 'Ilość prób: ' + trialCounter
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
  trialCounter++
  updateCounter()
  checkWin()
}

gameStart()

restartGame = () => {
  
}