const pageName = 'Concentration Game'

var naviBarElementsArray = [
  {name: 'AbouUs', icon: null, action: () => {handleRouteToAbouUs()}}, // handler in index
  {name: 'Instruction', icon: null, action: () => {handleRouteToInstruction()}}, // handler in index
  {name: 'Retry', icon: null, action: () => {}}
]

const homeText = 'Wellcome in Concentration Game! Check instruction and start the game.'

var homeButtonsArray = [
  {name: 'Instruction', action: () => {handleRouteToInstruction()}}, // handler in index
  {name: 'Start', action: () => {handleRouteToGame()}} // handler in index
]

const instructionText = 'Instruction'

var CardsArray = [
  {idImage: 1, image:'/Images/apple.png'},
  {idImage: 2, image:'/Images/pear.png'},
  {idImage: 3, image:'/Images/orange.png'},
  {idImage: 4, image:'/Images/peach.png'},
  {idImage: 5, image:'/Images/strawberry.png'},
  {idImage: 6, image:'/Images/banana.png'},
  {idImage: 7, image:'/Images/rasberry.png'},
  {idImage: 8, image:'/Images/blackberry.png'},
]