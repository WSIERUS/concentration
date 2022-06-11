const pageName = 'Concentration Game'

var toolBarElements = [
  {name: 'AbouUs', icon: null, action: ()=>{}},
  {name: 'Instruction', icon: null, action: () => {handleRouteToInstruction()}}, // handler w index
  {name: 'Retry', icon: null, action: ()=>{}}
]

const homeText = 'Wellcome in Concentration Game! Check instruction and start the game.'

var homeButtons = [
  {name: 'Intruction', action: () => {handleRouteToInstruction()}}, // handler w index
  {name: 'Start', action: () => {handleRouteToGame()}} // handler w index
]