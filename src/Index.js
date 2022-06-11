const root = document.querySelector('#root')

root.appendChild(HomeRender()) // Standard rendering JS Aplication

function handleRouteToGame() { // Route to Game Aplication
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
    console.log('game')
  }, 500)
}

function handleRouteToInstruction() { // Route to Instruction
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(InstructionRender())
    console.log('instruction')
  }, 500)
}

function handleRouteToAbouUs() { // Route to Instruction
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(AbouUsRender())
    console.log('instruction')
  }, 500)
}