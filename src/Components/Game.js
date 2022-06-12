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
  console.log(card, element)
  console.log(firstCheckedCard, secondCheckedCard)
  if(!card.clicked && card.able) {
    if(firstCheckedCard == false) {
      card.clicked = true
      element.src = card.image
      firstCheckedCard = card
    }
    else if(secondCheckedCard == false) {
      card.clicked = true
      element.src = card.image
      secondCheckedCard = card
      gamePairCheckResult()
    }
  }
  else return null
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
  CardsArray[CardsArray.findIndex(card => card.id === first.id)] = {
    id: first.id,
    idImage: first.idImage,
    image: defaultImage,
    clicked: false,
    able: true
  }
  CardsArray[CardsArray.findIndex(card => card.id === second.id)] = {
    id: second.id,
    idImage: second.idImage,
    image: defaultImage,
    clicked: false,
    able: true
  }
}

gamePairCheckResult = () => { ///
  if(firstCheckedCard.imageId === secondCheckedCard.imageId) {
    winPair(firstCheckedCard, secondCheckedCard)
  }
  else {
    losePair(firstCheckedCard, secondCheckedCard)
  }
  firstCheckedCard = ''
  secondCheckedCard = ''
  document.querySelector('.game').textContent = ''
  gameRender()
}

gameStart()