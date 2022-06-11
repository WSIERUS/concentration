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