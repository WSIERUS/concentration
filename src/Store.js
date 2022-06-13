const pageName = 'Concentration Game'

var naviBarElementsArray = [
  {name: 'AbouUs', icon: null, action: () => {handleRouteToAbouUs()}}, // handler in index
  {name: 'Instruction', icon: null, action: () => {handleRouteToInstruction()}}, // handler in index
  {name: 'Retry', icon: null, action: () => {restartGame()}}
]

const homeText = 'Wellcome in Concentration Game! Check instruction and start the game.'

var homeButtonsArray = [
  {name: 'Instruction', action: () => {handleRouteToInstruction()}}, // handler in index
  {name: 'Start', action: () => {handleRouteToGame()}} // handler in index
]

const instructionText = 'Instruction'

var Cards = [
  {id:0, idImage: 1, image:'/src/Images/apple.png', clicked:false, able: true},
  {id:1, idImage: 2, image:'/src/Images/pear.png', clicked:false, able: true},
  {id:2, idImage: 3, image:'/src/Images/orange.png', clicked:false, able: true},
  {id:3, idImage: 4, image:'/src/Images/peach.png', clicked:false, able: true},
  {id:4, idImage: 5, image:'/src/Images/strawberry.png', clicked:false, able: true},
  {id:5, idImage: 6, image:'/src/Images/banana.png', clicked:false, able: true},
  {id:6, idImage: 7, image:'/src/Images/rasberry.png', clicked:false, able: true},
  {id:7, idImage: 8, image:'/src/Images/blackberry.png', clicked:false, able: true},
  {id:8, idImage: 1, image:'/src/Images/apple.png', clicked:false, able: true},
  {id:9, idImage: 2, image:'/src/Images/pear.png', clicked:false, able: true},
  {id:10, idImage: 3, image:'/src/Images/orange.png', clicked:false, able: true},
  {id:11, idImage: 4, image:'/src/Images/peach.png', clicked:false, able: true},
  {id:12, idImage: 5, image:'/src/Images/strawberry.png', clicked:false, able: true},
  {id:13, idImage: 6, image:'/src/Images/banana.png', clicked:false, able: true},
  {id:14, idImage: 7, image:'/src/Images/rasberry.png', clicked:false, able: true},
  {id:15, idImage: 8, image:'/src/Images/blackberry.png', clicked:false, able: true},
]