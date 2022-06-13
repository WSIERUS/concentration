let CardsArray = []

let firstCheckedCard = ''
let secondCheckedCard = ''

const gameStart = () => { // Start New Game
  CardsArray = []
  gameCardArrayCreate = () => {
    Cards.map(card => {
      CardsArray.push(card)
    })
    CardsArray.sort(() => (Math.random() > 0.5) ? 1 : -1)
  }
  gameCardArrayCreate()
}

const gameCardArrayRender = () => { // Render Cards in Row - Always 4 or less in single row
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

const gameRender = () => { // Render Game Front-End

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

  gameRowRender()
  gameCardArrayRender()

  return game
}

gameCheckCard = (card, element) => {
  // console.log(firstCheckedCard, secondCheckedCard)
  let indexCard = CardsArray.findIndex(ele => card.id === ele.id)
    if(firstCheckedCard == false && CardsArray[indexCard].clicked === false) {

      element.src = CardsArray[indexCard].image

      CardsArray[indexCard].clicked = true

      firstCheckedCard = card
    }
    else if(secondCheckedCard == false && CardsArray[indexCard].clicked === false) {

      element.src = CardsArray[indexCard].image

      CardsArray[indexCard].clicked = true

      secondCheckedCard = card

      gamePairCheckResult()
    }
}

function winPair(first, second) {
  CardsArray[CardsArray.findIndex(card => card.id === first.id)] = {
    id: first.id,
    idImage: first.idImage,
    image: first.image,
    clicked: false,
    able: false
  }
  CardsArray[CardsArray.findIndex(card => card.id === second.id)] = {
    id: second.id,
    idImage: second.idImage,
    image: second.image,
    clicked: false,
    able: false
  }
}

function losePair(first, second) {

  let indexCardFirst = CardsArray.findIndex(card => card.id === first.id) 
  let indexCardSecond = CardsArray.findIndex(card => card.id === second.id)

  setTimeout(() => {
    CardsArray[indexCardFirst].clicked = false
    CardsArray[indexCardSecond].clicked = false
  
    document.getElementById(first.id).src = defaultImage
    document.getElementById(second.id).src = defaultImage
  }, 2000)

}

gamePairCheckResult = () => { ///
  if(firstCheckedCard.idImage === secondCheckedCard.idImage) {
    winPair(firstCheckedCard, secondCheckedCard)
  }
  else {
    losePair(firstCheckedCard, secondCheckedCard)
  }
  firstCheckedCard = ''
  secondCheckedCard = ''
}

gameStart()