const root = document.querySelector('#root')

root.appendChild(HomeRender()) // Standard rendering JS Aplication

function handleRouteToGame() { // Route to Game Aplication
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(HeaderRedner())
    root.appendChild(MainRender())
  }, 1000)
}

function handleRouteToInstruction() { // Route to Instruction
  setTimeout(() => {
    root.textContent = ''
    root.appendChild(InstructionRender())
  }, 1000)
  
}